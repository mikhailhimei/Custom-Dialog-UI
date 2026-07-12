function zd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ai = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function up() {
  if (ad) return ce;
  ad = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), y = Symbol.iterator;
  function x(T) {
    return T === null || typeof T != "object" ? null : (T = y && T[y] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, $ = {};
  function E(T, A, ue) {
    this.props = T, this.context = A, this.refs = $, this.updater = ue || I;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(T, A) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, A, "setState");
  }, E.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function M() {
  }
  M.prototype = E.prototype;
  function S(T, A, ue) {
    this.props = T, this.context = A, this.refs = $, this.updater = ue || I;
  }
  var z = S.prototype = new M();
  z.constructor = S, D(z, E.prototype), z.isPureReactComponent = !0;
  var H = Array.isArray, V = Object.prototype.hasOwnProperty, W = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function q(T, A, ue) {
    var de, pe = {}, he = null, ke = null;
    if (A != null) for (de in A.ref !== void 0 && (ke = A.ref), A.key !== void 0 && (he = "" + A.key), A) V.call(A, de) && !ae.hasOwnProperty(de) && (pe[de] = A[de]);
    var Ee = arguments.length - 2;
    if (Ee === 1) pe.children = ue;
    else if (1 < Ee) {
      for (var Te = Array(Ee), it = 0; it < Ee; it++) Te[it] = arguments[it + 2];
      pe.children = Te;
    }
    if (T && T.defaultProps) for (de in Ee = T.defaultProps, Ee) pe[de] === void 0 && (pe[de] = Ee[de]);
    return { $$typeof: l, type: T, key: he, ref: ke, props: pe, _owner: W.current };
  }
  function fe(T, A) {
    return { $$typeof: l, type: T.type, key: A, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function ye(T) {
    return typeof T == "object" && T !== null && T.$$typeof === l;
  }
  function G(T) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ue) {
      return A[ue];
    });
  }
  var ne = /\/+/g;
  function ge(T, A) {
    return typeof T == "object" && T !== null && T.key != null ? G("" + T.key) : A.toString(36);
  }
  function Ie(T, A, ue, de, pe) {
    var he = typeof T;
    (he === "undefined" || he === "boolean") && (T = null);
    var ke = !1;
    if (T === null) ke = !0;
    else switch (he) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case l:
          case o:
            ke = !0;
        }
    }
    if (ke) return ke = T, pe = pe(ke), T = de === "" ? "." + ge(ke, 0) : de, H(pe) ? (ue = "", T != null && (ue = T.replace(ne, "$&/") + "/"), Ie(pe, A, ue, "", function(it) {
      return it;
    })) : pe != null && (ye(pe) && (pe = fe(pe, ue + (!pe.key || ke && ke.key === pe.key ? "" : ("" + pe.key).replace(ne, "$&/") + "/") + T)), A.push(pe)), 1;
    if (ke = 0, de = de === "" ? "." : de + ":", H(T)) for (var Ee = 0; Ee < T.length; Ee++) {
      he = T[Ee];
      var Te = de + ge(he, Ee);
      ke += Ie(he, A, ue, Te, pe);
    }
    else if (Te = x(T), typeof Te == "function") for (T = Te.call(T), Ee = 0; !(he = T.next()).done; ) he = he.value, Te = de + ge(he, Ee++), ke += Ie(he, A, ue, Te, pe);
    else if (he === "object") throw A = String(T), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function J(T, A, ue) {
    if (T == null) return T;
    var de = [], pe = 0;
    return Ie(T, de, "", "", function(he) {
      return A.call(ue, he, pe++);
    }), de;
  }
  function $e(T) {
    if (T._status === -1) {
      var A = T._result;
      A = A(), A.then(function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ue);
      }, function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ue);
      }), T._status === -1 && (T._status = 0, T._result = A);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var De = { current: null }, B = { transition: null }, oe = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: B, ReactCurrentOwner: W };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: J, forEach: function(T, A, ue) {
    J(T, function() {
      A.apply(this, arguments);
    }, ue);
  }, count: function(T) {
    var A = 0;
    return J(T, function() {
      A++;
    }), A;
  }, toArray: function(T) {
    return J(T, function(A) {
      return A;
    }) || [];
  }, only: function(T) {
    if (!ye(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, ce.Component = E, ce.Fragment = s, ce.Profiler = f, ce.PureComponent = S, ce.StrictMode = c, ce.Suspense = _, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, ce.act = Y, ce.cloneElement = function(T, A, ue) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var de = D({}, T.props), pe = T.key, he = T.ref, ke = T._owner;
    if (A != null) {
      if (A.ref !== void 0 && (he = A.ref, ke = W.current), A.key !== void 0 && (pe = "" + A.key), T.type && T.type.defaultProps) var Ee = T.type.defaultProps;
      for (Te in A) V.call(A, Te) && !ae.hasOwnProperty(Te) && (de[Te] = A[Te] === void 0 && Ee !== void 0 ? Ee[Te] : A[Te]);
    }
    var Te = arguments.length - 2;
    if (Te === 1) de.children = ue;
    else if (1 < Te) {
      Ee = Array(Te);
      for (var it = 0; it < Te; it++) Ee[it] = arguments[it + 2];
      de.children = Ee;
    }
    return { $$typeof: l, type: T.type, key: pe, ref: he, props: de, _owner: ke };
  }, ce.createContext = function(T) {
    return T = { $$typeof: p, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: m, _context: T }, T.Consumer = T;
  }, ce.createElement = q, ce.createFactory = function(T) {
    var A = q.bind(null, T);
    return A.type = T, A;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(T) {
    return { $$typeof: h, render: T };
  }, ce.isValidElement = ye, ce.lazy = function(T) {
    return { $$typeof: N, _payload: { _status: -1, _result: T }, _init: $e };
  }, ce.memo = function(T, A) {
    return { $$typeof: C, type: T, compare: A === void 0 ? null : A };
  }, ce.startTransition = function(T) {
    var A = B.transition;
    B.transition = {};
    try {
      T();
    } finally {
      B.transition = A;
    }
  }, ce.unstable_act = Y, ce.useCallback = function(T, A) {
    return De.current.useCallback(T, A);
  }, ce.useContext = function(T) {
    return De.current.useContext(T);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(T) {
    return De.current.useDeferredValue(T);
  }, ce.useEffect = function(T, A) {
    return De.current.useEffect(T, A);
  }, ce.useId = function() {
    return De.current.useId();
  }, ce.useImperativeHandle = function(T, A, ue) {
    return De.current.useImperativeHandle(T, A, ue);
  }, ce.useInsertionEffect = function(T, A) {
    return De.current.useInsertionEffect(T, A);
  }, ce.useLayoutEffect = function(T, A) {
    return De.current.useLayoutEffect(T, A);
  }, ce.useMemo = function(T, A) {
    return De.current.useMemo(T, A);
  }, ce.useReducer = function(T, A, ue) {
    return De.current.useReducer(T, A, ue);
  }, ce.useRef = function(T) {
    return De.current.useRef(T);
  }, ce.useState = function(T) {
    return De.current.useState(T);
  }, ce.useSyncExternalStore = function(T, A, ue) {
    return De.current.useSyncExternalStore(T, A, ue);
  }, ce.useTransition = function() {
    return De.current.useTransition();
  }, ce.version = "18.3.1", ce;
}
var od;
function Od() {
  return od || (od = 1, Ai.exports = up()), Ai.exports;
}
var v = Od();
const u = /* @__PURE__ */ zd(v);
var xa = {}, Fi = { exports: {} }, lt = {}, ji = { exports: {} }, Ui = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function cp() {
  return id || (id = 1, (function(l) {
    function o(B, oe) {
      var Y = B.length;
      B.push(oe);
      e: for (; 0 < Y; ) {
        var T = Y - 1 >>> 1, A = B[T];
        if (0 < f(A, oe)) B[T] = oe, B[Y] = A, Y = T;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function c(B) {
      if (B.length === 0) return null;
      var oe = B[0], Y = B.pop();
      if (Y !== oe) {
        B[0] = Y;
        e: for (var T = 0, A = B.length, ue = A >>> 1; T < ue; ) {
          var de = 2 * (T + 1) - 1, pe = B[de], he = de + 1, ke = B[he];
          if (0 > f(pe, Y)) he < A && 0 > f(ke, pe) ? (B[T] = ke, B[he] = Y, T = he) : (B[T] = pe, B[de] = Y, T = de);
          else if (he < A && 0 > f(ke, Y)) B[T] = ke, B[he] = Y, T = he;
          else break e;
        }
      }
      return oe;
    }
    function f(B, oe) {
      var Y = B.sortIndex - oe.sortIndex;
      return Y !== 0 ? Y : B.id - oe.id;
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
    var _ = [], C = [], N = 1, y = null, x = 3, I = !1, D = !1, $ = !1, E = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, S = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(B) {
      for (var oe = s(C); oe !== null; ) {
        if (oe.callback === null) c(C);
        else if (oe.startTime <= B) c(C), oe.sortIndex = oe.expirationTime, o(_, oe);
        else break;
        oe = s(C);
      }
    }
    function H(B) {
      if ($ = !1, z(B), !D) if (s(_) !== null) D = !0, $e(V);
      else {
        var oe = s(C);
        oe !== null && De(H, oe.startTime - B);
      }
    }
    function V(B, oe) {
      D = !1, $ && ($ = !1, M(q), q = -1), I = !0;
      var Y = x;
      try {
        for (z(oe), y = s(_); y !== null && (!(y.expirationTime > oe) || B && !G()); ) {
          var T = y.callback;
          if (typeof T == "function") {
            y.callback = null, x = y.priorityLevel;
            var A = T(y.expirationTime <= oe);
            oe = l.unstable_now(), typeof A == "function" ? y.callback = A : y === s(_) && c(_), z(oe);
          } else c(_);
          y = s(_);
        }
        if (y !== null) var ue = !0;
        else {
          var de = s(C);
          de !== null && De(H, de.startTime - oe), ue = !1;
        }
        return ue;
      } finally {
        y = null, x = Y, I = !1;
      }
    }
    var W = !1, ae = null, q = -1, fe = 5, ye = -1;
    function G() {
      return !(l.unstable_now() - ye < fe);
    }
    function ne() {
      if (ae !== null) {
        var B = l.unstable_now();
        ye = B;
        var oe = !0;
        try {
          oe = ae(!0, B);
        } finally {
          oe ? ge() : (W = !1, ae = null);
        }
      } else W = !1;
    }
    var ge;
    if (typeof S == "function") ge = function() {
      S(ne);
    };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel(), J = Ie.port2;
      Ie.port1.onmessage = ne, ge = function() {
        J.postMessage(null);
      };
    } else ge = function() {
      E(ne, 0);
    };
    function $e(B) {
      ae = B, W || (W = !0, ge());
    }
    function De(B, oe) {
      q = E(function() {
        B(l.unstable_now());
      }, oe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      D || I || (D = !0, $e(V));
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
      var Y = x;
      x = oe;
      try {
        return B();
      } finally {
        x = Y;
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
      var Y = x;
      x = B;
      try {
        return oe();
      } finally {
        x = Y;
      }
    }, l.unstable_scheduleCallback = function(B, oe, Y) {
      var T = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? T + Y : T) : Y = T, B) {
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
      return A = Y + A, B = { id: N++, callback: oe, priorityLevel: B, startTime: Y, expirationTime: A, sortIndex: -1 }, Y > T ? (B.sortIndex = Y, o(C, B), s(_) === null && B === s(C) && ($ ? (M(q), q = -1) : $ = !0, De(H, Y - T))) : (B.sortIndex = A, o(_, B), D || I || (D = !0, $e(V))), B;
    }, l.unstable_shouldYield = G, l.unstable_wrapCallback = function(B) {
      var oe = x;
      return function() {
        var Y = x;
        x = oe;
        try {
          return B.apply(this, arguments);
        } finally {
          x = Y;
        }
      };
    };
  })(Ui)), Ui;
}
var sd;
function dp() {
  return sd || (sd = 1, ji.exports = cp()), ji.exports;
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
var ud;
function fp() {
  if (ud) return lt;
  ud = 1;
  var l = Od(), o = dp();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, y = {};
  function x(e) {
    return _.call(y, e) ? !0 : _.call(N, e) ? !1 : C.test(e) ? y[e] = !0 : (N[e] = !0, !1);
  }
  function I(e, t, n, r) {
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
    if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
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
  function $(e, t, n, r, a, i, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = d;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new $(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var M = /[\-:]([a-z])/g;
  function S(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      M,
      S
    );
    E[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(M, S);
    E[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(M, S);
    E[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function z(e, t, n, r) {
    var a = E.hasOwnProperty(t) ? E[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, a, r) && (n = null), r || a === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), W = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), fe = Symbol.for("react.profiler"), ye = Symbol.for("react.provider"), G = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, T;
  function A(e) {
    if (T === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      T = t && t[1] || "";
    }
    return `
` + T + e;
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
        } catch (L) {
          var r = L;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (L) {
          r = L;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (L) {
          r = L;
        }
        e();
      }
    } catch (L) {
      if (L && r && typeof L.stack == "string") {
        for (var a = L.stack.split(`
`), i = r.stack.split(`
`), d = a.length - 1, g = i.length - 1; 1 <= d && 0 <= g && a[d] !== i[g]; ) g--;
        for (; 1 <= d && 0 <= g; d--, g--) if (a[d] !== i[g]) {
          if (d !== 1 || g !== 1)
            do
              if (d--, g--, 0 > g || a[d] !== i[g]) {
                var w = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= d && 0 <= g);
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
      case ae:
        return "Fragment";
      case W:
        return "Portal";
      case fe:
        return "Profiler";
      case q:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case G:
        return (e.displayName || "Context") + ".Consumer";
      case ye:
        return (e._context.displayName || "Context") + ".Provider";
      case ne:
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
  function Ee(e) {
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
  function it(e) {
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
    e._valueTracker || (e._valueTracker = it(e));
  }
  function ds(e) {
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
  function Ha(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function fs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ms(e, t) {
    t = t.checked, t != null && z(e, "checked", t, !1);
  }
  function Va(e, t) {
    ms(e, t);
    var n = Ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ba(e, t.type, n) : t.hasOwnProperty("defaultValue") && ba(e, t.type, Ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ps(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ba(e, t, n) {
    (t !== "number" || yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var gr = Array.isArray;
  function jn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ee(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function hs(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (gr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Ee(n) };
  }
  function vs(e, t) {
    var n = Ee(t.value), r = Ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ys(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function gs(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var gl, _s = (function(e) {
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
  function _r(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Er = {
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
  Object.keys(Er).forEach(function(e) {
    mf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Er[t] = Er[e];
    });
  });
  function Es(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Er.hasOwnProperty(e) && Er[e] ? ("" + t).trim() : t + "px";
  }
  function ws(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Es(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var pf = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ya(e, t) {
    if (t) {
      if (pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ka(e, t) {
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
  var Ga = null;
  function Xa(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ja = null, Un = null, Bn = null;
  function ks(e) {
    if (e = Wr(e)) {
      if (typeof Ja != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Bl(t), Ja(e.stateNode, e.type, t));
    }
  }
  function Ss(e) {
    Un ? Bn ? Bn.push(e) : Bn = [e] : Un = e;
  }
  function Cs() {
    if (Un) {
      var e = Un, t = Bn;
      if (Bn = Un = null, ks(e), t) for (e = 0; e < t.length; e++) ks(t[e]);
    }
  }
  function Ns(e, t) {
    return e(t);
  }
  function xs() {
  }
  var Za = !1;
  function Ts(e, t, n) {
    if (Za) return e(t, n);
    Za = !0;
    try {
      return Ns(e, t, n);
    } finally {
      Za = !1, (Un !== null || Bn !== null) && (xs(), Cs());
    }
  }
  function wr(e, t) {
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
  var eo = !1;
  if (h) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      eo = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    eo = !1;
  }
  function hf(e, t, n, r, a, i, d, g, w) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (F) {
      this.onError(F);
    }
  }
  var Sr = !1, _l = null, El = !1, to = null, vf = { onError: function(e) {
    Sr = !0, _l = e;
  } };
  function yf(e, t, n, r, a, i, d, g, w) {
    Sr = !1, _l = null, hf.apply(vf, arguments);
  }
  function gf(e, t, n, r, a, i, d, g, w) {
    if (yf.apply(this, arguments), Sr) {
      if (Sr) {
        var L = _l;
        Sr = !1, _l = null;
      } else throw Error(s(198));
      El || (El = !0, to = L);
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
  function Rs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ps(e) {
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
          if (i === n) return Ps(a), e;
          if (i === r) return Ps(a), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = a, r = i;
      else {
        for (var d = !1, g = a.child; g; ) {
          if (g === n) {
            d = !0, n = a, r = i;
            break;
          }
          if (g === r) {
            d = !0, r = a, n = i;
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = i.child; g; ) {
            if (g === n) {
              d = !0, n = i, r = a;
              break;
            }
            if (g === r) {
              d = !0, r = i, n = a;
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ms(e) {
    return e = _f(e), e !== null ? Ls(e) : null;
  }
  function Ls(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ls(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Is = o.unstable_scheduleCallback, $s = o.unstable_cancelCallback, Ef = o.unstable_shouldYield, wf = o.unstable_requestPaint, Oe = o.unstable_now, kf = o.unstable_getCurrentPriorityLevel, no = o.unstable_ImmediatePriority, Ds = o.unstable_UserBlockingPriority, wl = o.unstable_NormalPriority, Sf = o.unstable_LowPriority, zs = o.unstable_IdlePriority, kl = null, It = null;
  function Cf(e) {
    if (It && typeof It.onCommitFiberRoot == "function") try {
      It.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : Tf, Nf = Math.log, xf = Math.LN2;
  function Tf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Nf(e) / xf | 0) | 0;
  }
  var Sl = 64, Cl = 4194304;
  function Cr(e) {
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
      var g = d & ~a;
      g !== 0 ? r = Cr(g) : (i &= d, i !== 0 && (r = Cr(i)));
    } else d = n & ~a, d !== 0 ? r = Cr(d) : i !== 0 && (r = Cr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), a = 1 << n, r |= e[n], t &= ~a;
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
      var d = 31 - St(i), g = 1 << d, w = a[d];
      w === -1 ? ((g & n) === 0 || (g & r) !== 0) && (a[d] = Rf(g, t)) : w <= t && (e.expiredLanes |= g), i &= ~g;
    }
  }
  function ro(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Os() {
    var e = Sl;
    return Sl <<= 1, (Sl & 4194240) === 0 && (Sl = 64), e;
  }
  function lo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Nr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function Mf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - St(n), i = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
    }
  }
  function ao(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var we = 0;
  function As(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Fs, oo, js, Us, Bs, io = !1, xl = [], Jt = null, Zt = null, en = null, xr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), tn = [], Lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ws(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jt = null;
        break;
      case "dragenter":
      case "dragleave":
        Zt = null;
        break;
      case "mouseover":
      case "mouseout":
        en = null;
        break;
      case "pointerover":
      case "pointerout":
        xr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tr.delete(t.pointerId);
    }
  }
  function Rr(e, t, n, r, a, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Wr(t), t !== null && oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function If(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Jt = Rr(Jt, e, t, n, r, a), !0;
      case "dragenter":
        return Zt = Rr(Zt, e, t, n, r, a), !0;
      case "mouseover":
        return en = Rr(en, e, t, n, r, a), !0;
      case "pointerover":
        var i = a.pointerId;
        return xr.set(i, Rr(xr.get(i) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return i = a.pointerId, Tr.set(i, Rr(Tr.get(i) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Hs(e) {
    var t = wn(e.target);
    if (t !== null) {
      var n = En(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Rs(n), t !== null) {
            e.blockedOn = t, Bs(e.priority, function() {
              js(n);
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
      var n = uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ga = r, n.target.dispatchEvent(r), Ga = null;
      } else return t = Wr(n), t !== null && oo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Vs(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function $f() {
    io = !1, Jt !== null && Tl(Jt) && (Jt = null), Zt !== null && Tl(Zt) && (Zt = null), en !== null && Tl(en) && (en = null), xr.forEach(Vs), Tr.forEach(Vs);
  }
  function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, io || (io = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, $f)));
  }
  function Mr(e) {
    function t(a) {
      return Pr(a, e);
    }
    if (0 < xl.length) {
      Pr(xl[0], e);
      for (var n = 1; n < xl.length; n++) {
        var r = xl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Jt !== null && Pr(Jt, e), Zt !== null && Pr(Zt, e), en !== null && Pr(en, e), xr.forEach(t), Tr.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) Hs(n), n.blockedOn === null && tn.shift();
  }
  var Wn = H.ReactCurrentBatchConfig, Rl = !0;
  function Df(e, t, n, r) {
    var a = we, i = Wn.transition;
    Wn.transition = null;
    try {
      we = 1, so(e, t, n, r);
    } finally {
      we = a, Wn.transition = i;
    }
  }
  function zf(e, t, n, r) {
    var a = we, i = Wn.transition;
    Wn.transition = null;
    try {
      we = 4, so(e, t, n, r);
    } finally {
      we = a, Wn.transition = i;
    }
  }
  function so(e, t, n, r) {
    if (Rl) {
      var a = uo(e, t, n, r);
      if (a === null) To(e, t, r, Pl, n), Ws(e, r);
      else if (If(a, e, t, n, r)) r.stopPropagation();
      else if (Ws(e, r), t & 4 && -1 < Lf.indexOf(e)) {
        for (; a !== null; ) {
          var i = Wr(a);
          if (i !== null && Fs(i), i = uo(e, t, n, r), i === null && To(e, t, r, Pl, n), i === a) break;
          a = i;
        }
        a !== null && r.stopPropagation();
      } else To(e, t, r, null, n);
    }
  }
  var Pl = null;
  function uo(e, t, n, r) {
    if (Pl = null, e = Xa(r), e = wn(e), e !== null) if (t = En(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Rs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Pl = e, null;
  }
  function bs(e) {
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
          case no:
            return 1;
          case Ds:
            return 4;
          case wl:
          case Sf:
            return 16;
          case zs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var nn = null, co = null, Ml = null;
  function qs() {
    if (Ml) return Ml;
    var e, t = co, n = t.length, r, a = "value" in nn ? nn.value : nn.textContent, i = a.length;
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
  function Qs() {
    return !1;
  }
  function st(e) {
    function t(n, r, a, i, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(i) : i[g]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Il : Qs, this.isPropagationStopped = Qs, this;
    }
    return Y(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, fo = st(Hn), Lr = Y({}, Hn, { view: 0, detail: 0 }), Of = st(Lr), mo, po, Ir, $l = Y({}, Lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ir && (Ir && e.type === "mousemove" ? (mo = e.screenX - Ir.screenX, po = e.screenY - Ir.screenY) : po = mo = 0, Ir = e), mo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : po;
  } }), Ys = st($l), Af = Y({}, $l, { dataTransfer: 0 }), Ff = st(Af), jf = Y({}, Lr, { relatedTarget: 0 }), ho = st(jf), Uf = Y({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bf = st(Uf), Wf = Y({}, Hn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Hf = st(Wf), Vf = Y({}, Hn, { data: 0 }), Ks = st(Vf), bf = {
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
  function vo() {
    return Yf;
  }
  var Kf = Y({}, Lr, { key: function(e) {
    if (e.key) {
      var t = bf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vo, charCode: function(e) {
    return e.type === "keypress" ? Ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gf = st(Kf), Xf = Y({}, $l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gs = st(Xf), Jf = Y({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vo }), Zf = st(Jf), em = Y({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tm = st(em), nm = Y({}, $l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rm = st(nm), lm = [9, 13, 27, 32], yo = h && "CompositionEvent" in window, $r = null;
  h && "documentMode" in document && ($r = document.documentMode);
  var am = h && "TextEvent" in window && !$r, Xs = h && (!yo || $r && 8 < $r && 11 >= $r), Js = " ", Zs = !1;
  function eu(e, t) {
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
  function tu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vn = !1;
  function om(e, t) {
    switch (e) {
      case "compositionend":
        return tu(t);
      case "keypress":
        return t.which !== 32 ? null : (Zs = !0, Js);
      case "textInput":
        return e = t.data, e === Js && Zs ? null : e;
      default:
        return null;
    }
  }
  function im(e, t) {
    if (Vn) return e === "compositionend" || !yo && eu(e, t) ? (e = qs(), Ml = co = nn = null, Vn = !1, e) : null;
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
        return Xs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sm[e.type] : t === "textarea";
  }
  function ru(e, t, n, r) {
    Ss(r), t = Fl(t, "onChange"), 0 < t.length && (n = new fo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Dr = null, zr = null;
  function um(e) {
    wu(e, 0);
  }
  function Dl(e) {
    var t = Kn(e);
    if (ds(t)) return e;
  }
  function cm(e, t) {
    if (e === "change") return t;
  }
  var lu = !1;
  if (h) {
    var go;
    if (h) {
      var _o = "oninput" in document;
      if (!_o) {
        var au = document.createElement("div");
        au.setAttribute("oninput", "return;"), _o = typeof au.oninput == "function";
      }
      go = _o;
    } else go = !1;
    lu = go && (!document.documentMode || 9 < document.documentMode);
  }
  function ou() {
    Dr && (Dr.detachEvent("onpropertychange", iu), zr = Dr = null);
  }
  function iu(e) {
    if (e.propertyName === "value" && Dl(zr)) {
      var t = [];
      ru(t, zr, e, Xa(e)), Ts(um, t);
    }
  }
  function dm(e, t, n) {
    e === "focusin" ? (ou(), Dr = t, zr = n, Dr.attachEvent("onpropertychange", iu)) : e === "focusout" && ou();
  }
  function fm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(zr);
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
  function Or(e, t) {
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
  function su(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function uu(e, t) {
    var n = su(e);
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
      n = su(n);
    }
  }
  function cu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function du() {
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
  function Eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function vm(e) {
    var t = du(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && cu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Eo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, i = Math.min(r.start, a);
          r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = uu(n, i);
          var d = uu(
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
  var ym = h && "documentMode" in document && 11 >= document.documentMode, bn = null, wo = null, Ar = null, ko = !1;
  function fu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ko || bn == null || bn !== yl(r) || (r = bn, "selectionStart" in r && Eo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ar && Or(Ar, r) || (Ar = r, r = Fl(wo, "onSelect"), 0 < r.length && (t = new fo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bn)));
  }
  function zl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var qn = { animationend: zl("Animation", "AnimationEnd"), animationiteration: zl("Animation", "AnimationIteration"), animationstart: zl("Animation", "AnimationStart"), transitionend: zl("Transition", "TransitionEnd") }, So = {}, mu = {};
  h && (mu = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function Ol(e) {
    if (So[e]) return So[e];
    if (!qn[e]) return e;
    var t = qn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in mu) return So[e] = t[n];
    return e;
  }
  var pu = Ol("animationend"), hu = Ol("animationiteration"), vu = Ol("animationstart"), yu = Ol("transitionend"), gu = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function rn(e, t) {
    gu.set(e, t), m(t, [e]);
  }
  for (var Co = 0; Co < _u.length; Co++) {
    var No = _u[Co], gm = No.toLowerCase(), _m = No[0].toUpperCase() + No.slice(1);
    rn(gm, "on" + _m);
  }
  rn(pu, "onAnimationEnd"), rn(hu, "onAnimationIteration"), rn(vu, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(yu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Em = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function Eu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, gf(r, t, void 0, e), e.currentTarget = null;
  }
  function wu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var g = r[d], w = g.instance, L = g.currentTarget;
          if (g = g.listener, w !== i && a.isPropagationStopped()) break e;
          Eu(a, g, L), i = w;
        }
        else for (d = 0; d < r.length; d++) {
          if (g = r[d], w = g.instance, L = g.currentTarget, g = g.listener, w !== i && a.isPropagationStopped()) break e;
          Eu(a, g, L), i = w;
        }
      }
    }
    if (El) throw e = to, El = !1, to = null, e;
  }
  function Ne(e, t) {
    var n = t[$o];
    n === void 0 && (n = t[$o] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ku(t, e, 2, !1), n.add(r));
  }
  function xo(e, t, n) {
    var r = 0;
    t && (r |= 4), ku(n, e, r, t);
  }
  var Al = "_reactListening" + Math.random().toString(36).slice(2);
  function jr(e) {
    if (!e[Al]) {
      e[Al] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (Em.has(n) || xo(n, !1, e), xo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Al] || (t[Al] = !0, xo("selectionchange", !1, t));
    }
  }
  function ku(e, t, n, r) {
    switch (bs(t)) {
      case 1:
        var a = Df;
        break;
      case 4:
        a = zf;
        break;
      default:
        a = so;
    }
    n = a.bind(null, t, n, e), a = void 0, !eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function To(e, t, n, r, a) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var g = r.stateNode.containerInfo;
        if (g === a || g.nodeType === 8 && g.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var w = d.tag;
          if ((w === 3 || w === 4) && (w = d.stateNode.containerInfo, w === a || w.nodeType === 8 && w.parentNode === a)) return;
          d = d.return;
        }
        for (; g !== null; ) {
          if (d = wn(g), d === null) return;
          if (w = d.tag, w === 5 || w === 6) {
            r = i = d;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ts(function() {
      var L = i, F = Xa(n), j = [];
      e: {
        var O = gu.get(e);
        if (O !== void 0) {
          var b = fo, K = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              b = Gf;
              break;
            case "focusin":
              K = "focus", b = ho;
              break;
            case "focusout":
              K = "blur", b = ho;
              break;
            case "beforeblur":
            case "afterblur":
              b = ho;
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
              b = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Ff;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Zf;
              break;
            case pu:
            case hu:
            case vu:
              b = Bf;
              break;
            case yu:
              b = tm;
              break;
            case "scroll":
              b = Of;
              break;
            case "wheel":
              b = rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Hf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Gs;
          }
          var X = (t & 4) !== 0, Ae = !X && e === "scroll", R = X ? O !== null ? O + "Capture" : null : O;
          X = [];
          for (var k = L, P; k !== null; ) {
            P = k;
            var U = P.stateNode;
            if (P.tag === 5 && U !== null && (P = U, R !== null && (U = wr(k, R), U != null && X.push(Ur(k, U, P)))), Ae) break;
            k = k.return;
          }
          0 < X.length && (O = new b(O, K, null, n, F), j.push({ event: O, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", O && n !== Ga && (K = n.relatedTarget || n.fromElement) && (wn(K) || K[Ut])) break e;
          if ((b || O) && (O = F.window === F ? F : (O = F.ownerDocument) ? O.defaultView || O.parentWindow : window, b ? (K = n.relatedTarget || n.toElement, b = L, K = K ? wn(K) : null, K !== null && (Ae = En(K), K !== Ae || K.tag !== 5 && K.tag !== 6) && (K = null)) : (b = null, K = L), b !== K)) {
            if (X = Ys, U = "onMouseLeave", R = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (X = Gs, U = "onPointerLeave", R = "onPointerEnter", k = "pointer"), Ae = b == null ? O : Kn(b), P = K == null ? O : Kn(K), O = new X(U, k + "leave", b, n, F), O.target = Ae, O.relatedTarget = P, U = null, wn(F) === L && (X = new X(R, k + "enter", K, n, F), X.target = P, X.relatedTarget = Ae, U = X), Ae = U, b && K) t: {
              for (X = b, R = K, k = 0, P = X; P; P = Qn(P)) k++;
              for (P = 0, U = R; U; U = Qn(U)) P++;
              for (; 0 < k - P; ) X = Qn(X), k--;
              for (; 0 < P - k; ) R = Qn(R), P--;
              for (; k--; ) {
                if (X === R || R !== null && X === R.alternate) break t;
                X = Qn(X), R = Qn(R);
              }
              X = null;
            }
            else X = null;
            b !== null && Su(j, O, b, X, !1), K !== null && Ae !== null && Su(j, Ae, K, X, !0);
          }
        }
        e: {
          if (O = L ? Kn(L) : window, b = O.nodeName && O.nodeName.toLowerCase(), b === "select" || b === "input" && O.type === "file") var Z = cm;
          else if (nu(O)) if (lu) Z = pm;
          else {
            Z = fm;
            var re = dm;
          }
          else (b = O.nodeName) && b.toLowerCase() === "input" && (O.type === "checkbox" || O.type === "radio") && (Z = mm);
          if (Z && (Z = Z(e, L))) {
            ru(j, Z, n, F);
            break e;
          }
          re && re(e, O, L), e === "focusout" && (re = O._wrapperState) && re.controlled && O.type === "number" && ba(O, "number", O.value);
        }
        switch (re = L ? Kn(L) : window, e) {
          case "focusin":
            (nu(re) || re.contentEditable === "true") && (bn = re, wo = L, Ar = null);
            break;
          case "focusout":
            Ar = wo = bn = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ko = !1, fu(j, n, F);
            break;
          case "selectionchange":
            if (ym) break;
          case "keydown":
          case "keyup":
            fu(j, n, F);
        }
        var le;
        if (yo) e: {
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
        else Vn ? eu(e, n) && (ie = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");
        ie && (Xs && n.locale !== "ko" && (Vn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Vn && (le = qs()) : (nn = F, co = "value" in nn ? nn.value : nn.textContent, Vn = !0)), re = Fl(L, ie), 0 < re.length && (ie = new Ks(ie, e, null, n, F), j.push({ event: ie, listeners: re }), le ? ie.data = le : (le = tu(n), le !== null && (ie.data = le)))), (le = am ? om(e, n) : im(e, n)) && (L = Fl(L, "onBeforeInput"), 0 < L.length && (F = new Ks("onBeforeInput", "beforeinput", null, n, F), j.push({ event: F, listeners: L }), F.data = le));
      }
      wu(j, t);
    });
  }
  function Ur(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Fl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, i = a.stateNode;
      a.tag === 5 && i !== null && (a = i, i = wr(e, n), i != null && r.unshift(Ur(e, i, a)), i = wr(e, t), i != null && r.push(Ur(e, i, a))), e = e.return;
    }
    return r;
  }
  function Qn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Su(e, t, n, r, a) {
    for (var i = t._reactName, d = []; n !== null && n !== r; ) {
      var g = n, w = g.alternate, L = g.stateNode;
      if (w !== null && w === r) break;
      g.tag === 5 && L !== null && (g = L, a ? (w = wr(n, i), w != null && d.unshift(Ur(n, w, g))) : a || (w = wr(n, i), w != null && d.push(Ur(n, w, g)))), n = n.return;
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
  var Ro = null, Po = null;
  function Mo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lo = typeof setTimeout == "function" ? setTimeout : void 0, Sm = typeof clearTimeout == "function" ? clearTimeout : void 0, Nu = typeof Promise == "function" ? Promise : void 0, Cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nu < "u" ? function(e) {
    return Nu.resolve(null).then(e).catch(Nm);
  } : Lo;
  function Nm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Io(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), Mr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    Mr(t);
  }
  function ln(e) {
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
  function xu(e) {
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
  var Yn = Math.random().toString(36).slice(2), $t = "__reactFiber$" + Yn, Br = "__reactProps$" + Yn, Ut = "__reactContainer$" + Yn, $o = "__reactEvents$" + Yn, xm = "__reactListeners$" + Yn, Tm = "__reactHandles$" + Yn;
  function wn(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ut] || n[$t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = xu(e); e !== null; ) {
          if (n = e[$t]) return n;
          e = xu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Wr(e) {
    return e = e[$t] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Bl(e) {
    return e[Br] || null;
  }
  var Do = [], Gn = -1;
  function an(e) {
    return { current: e };
  }
  function xe(e) {
    0 > Gn || (e.current = Do[Gn], Do[Gn] = null, Gn--);
  }
  function Se(e, t) {
    Gn++, Do[Gn] = e.current, e.current = t;
  }
  var on = {}, Qe = an(on), Ze = an(!1), kn = on;
  function Xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return on;
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
  function Tu(e, t, n) {
    if (Qe.current !== on) throw Error(s(168));
    Se(Qe, t), Se(Ze, n);
  }
  function Ru(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, ke(e) || "Unknown", a));
    return Y({}, n, r);
  }
  function Hl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, kn = Qe.current, Se(Qe, e), Se(Ze, Ze.current), !0;
  }
  function Pu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Ru(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, xe(Ze), xe(Qe), Se(Qe, e)) : xe(Ze), Se(Ze, n);
  }
  var Bt = null, Vl = !1, zo = !1;
  function Mu(e) {
    Bt === null ? Bt = [e] : Bt.push(e);
  }
  function Rm(e) {
    Vl = !0, Mu(e);
  }
  function sn() {
    if (!zo && Bt !== null) {
      zo = !0;
      var e = 0, t = we;
      try {
        var n = Bt;
        for (we = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Bt = null, Vl = !1;
      } catch (a) {
        throw Bt !== null && (Bt = Bt.slice(e + 1)), Is(no, sn), a;
      } finally {
        we = t, zo = !1;
      }
    }
    return null;
  }
  var Jn = [], Zn = 0, bl = null, ql = 0, pt = [], ht = 0, Sn = null, Wt = 1, Ht = "";
  function Cn(e, t) {
    Jn[Zn++] = ql, Jn[Zn++] = bl, bl = e, ql = t;
  }
  function Lu(e, t, n) {
    pt[ht++] = Wt, pt[ht++] = Ht, pt[ht++] = Sn, Sn = e;
    var r = Wt;
    e = Ht;
    var a = 32 - St(r) - 1;
    r &= ~(1 << a), n += 1;
    var i = 32 - St(t) + a;
    if (30 < i) {
      var d = a - a % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Wt = 1 << 32 - St(t) + a | n << a | r, Ht = i + e;
    } else Wt = 1 << i | n << a | r, Ht = e;
  }
  function Oo(e) {
    e.return !== null && (Cn(e, 1), Lu(e, 1, 0));
  }
  function Ao(e) {
    for (; e === bl; ) bl = Jn[--Zn], Jn[Zn] = null, ql = Jn[--Zn], Jn[Zn] = null;
    for (; e === Sn; ) Sn = pt[--ht], pt[ht] = null, Ht = pt[--ht], pt[ht] = null, Wt = pt[--ht], pt[ht] = null;
  }
  var ut = null, ct = null, Re = !1, Nt = null;
  function Iu(e, t) {
    var n = _t(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function $u(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = ln(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Wt, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jo(e) {
    if (Re) {
      var t = ct;
      if (t) {
        var n = t;
        if (!$u(e, t)) {
          if (Fo(e)) throw Error(s(418));
          t = ln(n.nextSibling);
          var r = ut;
          t && $u(e, t) ? Iu(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, ut = e);
        }
      } else {
        if (Fo(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Re = !1, ut = e;
      }
    }
  }
  function Du(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function Ql(e) {
    if (e !== ut) return !1;
    if (!Re) return Du(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps)), t && (t = ct)) {
      if (Fo(e)) throw zu(), Error(s(418));
      for (; t; ) Iu(e, t), t = ln(t.nextSibling);
    }
    if (Du(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ct = ln(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function zu() {
    for (var e = ct; e; ) e = ln(e.nextSibling);
  }
  function er() {
    ct = ut = null, Re = !1;
  }
  function Uo(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  var Pm = H.ReactCurrentBatchConfig;
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
          var g = a.refs;
          d === null ? delete g[i] : g[i] = d;
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
  function Ou(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Au(e) {
    function t(R, k) {
      if (e) {
        var P = R.deletions;
        P === null ? (R.deletions = [k], R.flags |= 16) : P.push(k);
      }
    }
    function n(R, k) {
      if (!e) return null;
      for (; k !== null; ) t(R, k), k = k.sibling;
      return null;
    }
    function r(R, k) {
      for (R = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? R.set(k.key, k) : R.set(k.index, k), k = k.sibling;
      return R;
    }
    function a(R, k) {
      return R = vn(R, k), R.index = 0, R.sibling = null, R;
    }
    function i(R, k, P) {
      return R.index = P, e ? (P = R.alternate, P !== null ? (P = P.index, P < k ? (R.flags |= 2, k) : P) : (R.flags |= 2, k)) : (R.flags |= 1048576, k);
    }
    function d(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function g(R, k, P, U) {
      return k === null || k.tag !== 6 ? (k = Li(P, R.mode, U), k.return = R, k) : (k = a(k, P), k.return = R, k);
    }
    function w(R, k, P, U) {
      var Z = P.type;
      return Z === ae ? F(R, k, P.props.children, U, P.key) : k !== null && (k.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $e && Ou(Z) === k.type) ? (U = a(k, P.props), U.ref = Hr(R, k, P), U.return = R, U) : (U = ga(P.type, P.key, P.props, null, R.mode, U), U.ref = Hr(R, k, P), U.return = R, U);
    }
    function L(R, k, P, U) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== P.containerInfo || k.stateNode.implementation !== P.implementation ? (k = Ii(P, R.mode, U), k.return = R, k) : (k = a(k, P.children || []), k.return = R, k);
    }
    function F(R, k, P, U, Z) {
      return k === null || k.tag !== 7 ? (k = In(P, R.mode, U, Z), k.return = R, k) : (k = a(k, P), k.return = R, k);
    }
    function j(R, k, P) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Li("" + k, R.mode, P), k.return = R, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case V:
            return P = ga(k.type, k.key, k.props, null, R.mode, P), P.ref = Hr(R, null, k), P.return = R, P;
          case W:
            return k = Ii(k, R.mode, P), k.return = R, k;
          case $e:
            var U = k._init;
            return j(R, U(k._payload), P);
        }
        if (gr(k) || oe(k)) return k = In(k, R.mode, P, null), k.return = R, k;
        Yl(R, k);
      }
      return null;
    }
    function O(R, k, P, U) {
      var Z = k !== null ? k.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return Z !== null ? null : g(R, k, "" + P, U);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case V:
            return P.key === Z ? w(R, k, P, U) : null;
          case W:
            return P.key === Z ? L(R, k, P, U) : null;
          case $e:
            return Z = P._init, O(
              R,
              k,
              Z(P._payload),
              U
            );
        }
        if (gr(P) || oe(P)) return Z !== null ? null : F(R, k, P, U, null);
        Yl(R, P);
      }
      return null;
    }
    function b(R, k, P, U, Z) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return R = R.get(P) || null, g(k, R, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case V:
            return R = R.get(U.key === null ? P : U.key) || null, w(k, R, U, Z);
          case W:
            return R = R.get(U.key === null ? P : U.key) || null, L(k, R, U, Z);
          case $e:
            var re = U._init;
            return b(R, k, P, re(U._payload), Z);
        }
        if (gr(U) || oe(U)) return R = R.get(P) || null, F(k, R, U, Z, null);
        Yl(k, U);
      }
      return null;
    }
    function K(R, k, P, U) {
      for (var Z = null, re = null, le = k, ie = k = 0, He = null; le !== null && ie < P.length; ie++) {
        le.index > ie ? (He = le, le = null) : He = le.sibling;
        var ve = O(R, le, P[ie], U);
        if (ve === null) {
          le === null && (le = He);
          break;
        }
        e && le && ve.alternate === null && t(R, le), k = i(ve, k, ie), re === null ? Z = ve : re.sibling = ve, re = ve, le = He;
      }
      if (ie === P.length) return n(R, le), Re && Cn(R, ie), Z;
      if (le === null) {
        for (; ie < P.length; ie++) le = j(R, P[ie], U), le !== null && (k = i(le, k, ie), re === null ? Z = le : re.sibling = le, re = le);
        return Re && Cn(R, ie), Z;
      }
      for (le = r(R, le); ie < P.length; ie++) He = b(le, R, ie, P[ie], U), He !== null && (e && He.alternate !== null && le.delete(He.key === null ? ie : He.key), k = i(He, k, ie), re === null ? Z = He : re.sibling = He, re = He);
      return e && le.forEach(function(yn) {
        return t(R, yn);
      }), Re && Cn(R, ie), Z;
    }
    function X(R, k, P, U) {
      var Z = oe(P);
      if (typeof Z != "function") throw Error(s(150));
      if (P = Z.call(P), P == null) throw Error(s(151));
      for (var re = Z = null, le = k, ie = k = 0, He = null, ve = P.next(); le !== null && !ve.done; ie++, ve = P.next()) {
        le.index > ie ? (He = le, le = null) : He = le.sibling;
        var yn = O(R, le, ve.value, U);
        if (yn === null) {
          le === null && (le = He);
          break;
        }
        e && le && yn.alternate === null && t(R, le), k = i(yn, k, ie), re === null ? Z = yn : re.sibling = yn, re = yn, le = He;
      }
      if (ve.done) return n(
        R,
        le
      ), Re && Cn(R, ie), Z;
      if (le === null) {
        for (; !ve.done; ie++, ve = P.next()) ve = j(R, ve.value, U), ve !== null && (k = i(ve, k, ie), re === null ? Z = ve : re.sibling = ve, re = ve);
        return Re && Cn(R, ie), Z;
      }
      for (le = r(R, le); !ve.done; ie++, ve = P.next()) ve = b(le, R, ie, ve.value, U), ve !== null && (e && ve.alternate !== null && le.delete(ve.key === null ? ie : ve.key), k = i(ve, k, ie), re === null ? Z = ve : re.sibling = ve, re = ve);
      return e && le.forEach(function(sp) {
        return t(R, sp);
      }), Re && Cn(R, ie), Z;
    }
    function Ae(R, k, P, U) {
      if (typeof P == "object" && P !== null && P.type === ae && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case V:
            e: {
              for (var Z = P.key, re = k; re !== null; ) {
                if (re.key === Z) {
                  if (Z = P.type, Z === ae) {
                    if (re.tag === 7) {
                      n(R, re.sibling), k = a(re, P.props.children), k.return = R, R = k;
                      break e;
                    }
                  } else if (re.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $e && Ou(Z) === re.type) {
                    n(R, re.sibling), k = a(re, P.props), k.ref = Hr(R, re, P), k.return = R, R = k;
                    break e;
                  }
                  n(R, re);
                  break;
                } else t(R, re);
                re = re.sibling;
              }
              P.type === ae ? (k = In(P.props.children, R.mode, U, P.key), k.return = R, R = k) : (U = ga(P.type, P.key, P.props, null, R.mode, U), U.ref = Hr(R, k, P), U.return = R, R = U);
            }
            return d(R);
          case W:
            e: {
              for (re = P.key; k !== null; ) {
                if (k.key === re) if (k.tag === 4 && k.stateNode.containerInfo === P.containerInfo && k.stateNode.implementation === P.implementation) {
                  n(R, k.sibling), k = a(k, P.children || []), k.return = R, R = k;
                  break e;
                } else {
                  n(R, k);
                  break;
                }
                else t(R, k);
                k = k.sibling;
              }
              k = Ii(P, R.mode, U), k.return = R, R = k;
            }
            return d(R);
          case $e:
            return re = P._init, Ae(R, k, re(P._payload), U);
        }
        if (gr(P)) return K(R, k, P, U);
        if (oe(P)) return X(R, k, P, U);
        Yl(R, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, k !== null && k.tag === 6 ? (n(R, k.sibling), k = a(k, P), k.return = R, R = k) : (n(R, k), k = Li(P, R.mode, U), k.return = R, R = k), d(R)) : n(R, k);
    }
    return Ae;
  }
  var tr = Au(!0), Fu = Au(!1), Kl = an(null), Gl = null, nr = null, Bo = null;
  function Wo() {
    Bo = nr = Gl = null;
  }
  function Ho(e) {
    var t = Kl.current;
    xe(Kl), e._currentValue = t;
  }
  function Vo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function rr(e, t) {
    Gl = e, Bo = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (tt = !0), e.firstContext = null);
  }
  function vt(e) {
    var t = e._currentValue;
    if (Bo !== e) if (e = { context: e, memoizedValue: t, next: null }, nr === null) {
      if (Gl === null) throw Error(s(308));
      nr = e, Gl.dependencies = { lanes: 0, firstContext: e };
    } else nr = nr.next = e;
    return t;
  }
  var Nn = null;
  function bo(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  function ju(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, bo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Vt(e, r);
  }
  function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var un = !1;
  function qo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (me & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Vt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, bo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Vt(e, n);
  }
  function Xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ao(e, n);
    }
  }
  function Bu(e, t) {
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
    un = !1;
    var i = a.firstBaseUpdate, d = a.lastBaseUpdate, g = a.shared.pending;
    if (g !== null) {
      a.shared.pending = null;
      var w = g, L = w.next;
      w.next = null, d === null ? i = L : d.next = L, d = w;
      var F = e.alternate;
      F !== null && (F = F.updateQueue, g = F.lastBaseUpdate, g !== d && (g === null ? F.firstBaseUpdate = L : g.next = L, F.lastBaseUpdate = w));
    }
    if (i !== null) {
      var j = a.baseState;
      d = 0, F = L = w = null, g = i;
      do {
        var O = g.lane, b = g.eventTime;
        if ((r & O) === O) {
          F !== null && (F = F.next = {
            eventTime: b,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var K = e, X = g;
            switch (O = t, b = n, X.tag) {
              case 1:
                if (K = X.payload, typeof K == "function") {
                  j = K.call(b, j, O);
                  break e;
                }
                j = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = X.payload, O = typeof K == "function" ? K.call(b, j, O) : K, O == null) break e;
                j = Y({}, j, O);
                break e;
              case 2:
                un = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, O = a.effects, O === null ? a.effects = [g] : O.push(g));
        } else b = { eventTime: b, lane: O, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, F === null ? (L = F = b, w = j) : F = F.next = b, d |= O;
        if (g = g.next, g === null) {
          if (g = a.shared.pending, g === null) break;
          O = g, g = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      if (F === null && (w = j), a.baseState = w, a.firstBaseUpdate = L, a.lastBaseUpdate = F, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else i === null && (a.shared.lanes = 0);
      Rn |= d, e.lanes = d, e.memoizedState = j;
    }
  }
  function Wu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var Vr = {}, Dt = an(Vr), br = an(Vr), qr = an(Vr);
  function xn(e) {
    if (e === Vr) throw Error(s(174));
    return e;
  }
  function Qo(e, t) {
    switch (Se(qr, t), Se(br, e), Se(Dt, Vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qa(t, e);
    }
    xe(Dt), Se(Dt, t);
  }
  function lr() {
    xe(Dt), xe(br), xe(qr);
  }
  function Hu(e) {
    xn(qr.current);
    var t = xn(Dt.current), n = Qa(t, e.type);
    t !== n && (Se(br, e), Se(Dt, n));
  }
  function Yo(e) {
    br.current === e && (xe(Dt), xe(br));
  }
  var Me = an(0);
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
  var Ko = [];
  function Go() {
    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
    Ko.length = 0;
  }
  var ea = H.ReactCurrentDispatcher, Xo = H.ReactCurrentBatchConfig, Tn = 0, Le = null, je = null, Be = null, ta = !1, Qr = !1, Yr = 0, Mm = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Jo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function Zo(e, t, n, r, a, i) {
    if (Tn = i, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ea.current = e === null || e.memoizedState === null ? Dm : zm, e = n(r, a), Qr) {
      i = 0;
      do {
        if (Qr = !1, Yr = 0, 25 <= i) throw Error(s(301));
        i += 1, Be = je = null, t.updateQueue = null, ea.current = Om, e = n(r, a);
      } while (Qr);
    }
    if (ea.current = la, t = je !== null && je.next !== null, Tn = 0, Be = je = Le = null, ta = !1, t) throw Error(s(300));
    return e;
  }
  function ei() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Be === null ? Le.memoizedState = Be = e : Be = Be.next = e, Be;
  }
  function yt() {
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
  function Kr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ti(e) {
    var t = yt(), n = t.queue;
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
      var g = d = null, w = null, L = i;
      do {
        var F = L.lane;
        if ((Tn & F) === F) w !== null && (w = w.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), r = L.hasEagerState ? L.eagerState : e(r, L.action);
        else {
          var j = {
            lane: F,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          w === null ? (g = w = j, d = r) : w = w.next = j, Le.lanes |= F, Rn |= F;
        }
        L = L.next;
      } while (L !== null && L !== i);
      w === null ? d = r : w.next = g, Ct(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        i = a.lane, Le.lanes |= i, Rn |= i, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ni(e) {
    var t = yt(), n = t.queue;
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
  function Vu() {
  }
  function bu(e, t) {
    var n = Le, r = yt(), a = t(), i = !Ct(r.memoizedState, a);
    if (i && (r.memoizedState = a, tt = !0), r = r.queue, ri(Yu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Be !== null && Be.memoizedState.tag & 1) {
      if (n.flags |= 2048, Gr(9, Qu.bind(null, n, r, a, t), void 0, null), We === null) throw Error(s(349));
      (Tn & 30) !== 0 || qu(n, t, a);
    }
    return a;
  }
  function qu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Qu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ku(t) && Gu(e);
  }
  function Yu(e, t, n) {
    return n(function() {
      Ku(t) && Gu(e);
    });
  }
  function Ku(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function Gu(e) {
    var t = Vt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function Xu(e) {
    var t = zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $m.bind(null, Le, e), [t.memoizedState, e];
  }
  function Gr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ju() {
    return yt().memoizedState;
  }
  function na(e, t, n, r) {
    var a = zt();
    Le.flags |= e, a.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ra(e, t, n, r) {
    var a = yt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (i = d.destroy, r !== null && Jo(r, d.deps)) {
        a.memoizedState = Gr(t, n, i, r);
        return;
      }
    }
    Le.flags |= e, a.memoizedState = Gr(1 | t, n, i, r);
  }
  function Zu(e, t) {
    return na(8390656, 8, e, t);
  }
  function ri(e, t) {
    return ra(2048, 8, e, t);
  }
  function ec(e, t) {
    return ra(4, 2, e, t);
  }
  function tc(e, t) {
    return ra(4, 4, e, t);
  }
  function nc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function rc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ra(4, 4, nc.bind(null, t, e), n);
  }
  function li() {
  }
  function lc(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function ac(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function oc(e, t, n) {
    return (Tn & 21) === 0 ? (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n) : (Ct(n, t) || (n = Os(), Le.lanes |= n, Rn |= n, e.baseState = !0), t);
  }
  function Lm(e, t) {
    var n = we;
    we = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Xo.transition;
    Xo.transition = {};
    try {
      e(!1), t();
    } finally {
      we = n, Xo.transition = r;
    }
  }
  function ic() {
    return yt().memoizedState;
  }
  function Im(e, t, n) {
    var r = pn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, sc(e)) uc(t, n);
    else if (n = ju(e, t, n, r), n !== null) {
      var a = Je();
      Pt(n, e, r, a), cc(n, t, r);
    }
  }
  function $m(e, t, n) {
    var r = pn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (sc(e)) uc(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, g = i(d, n);
        if (a.hasEagerState = !0, a.eagerState = g, Ct(g, d)) {
          var w = t.interleaved;
          w === null ? (a.next = a, bo(t)) : (a.next = w.next, w.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = ju(e, t, a, r), n !== null && (a = Je(), Pt(n, e, r, a), cc(n, t, r));
    }
  }
  function sc(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le;
  }
  function uc(e, t) {
    Qr = ta = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function cc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ao(e, n);
    }
  }
  var la = { readContext: vt, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Dm = { readContext: vt, useCallback: function(e, t) {
    return zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: vt, useEffect: Zu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, na(
      4194308,
      4,
      nc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return na(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return na(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = zt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = zt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Im.bind(null, Le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Xu, useDebugValue: li, useDeferredValue: function(e) {
    return zt().memoizedState = e;
  }, useTransition: function() {
    var e = Xu(!1), t = e[0];
    return e = Lm.bind(null, e[1]), zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Le, a = zt();
    if (Re) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), We === null) throw Error(s(349));
      (Tn & 30) !== 0 || qu(r, t, n);
    }
    a.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return a.queue = i, Zu(Yu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Gr(9, Qu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = zt(), t = We.identifierPrefix;
    if (Re) {
      var n = Ht, r = Wt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Mm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zm = {
    readContext: vt,
    useCallback: lc,
    useContext: vt,
    useEffect: ri,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: ac,
    useReducer: ti,
    useRef: Ju,
    useState: function() {
      return ti(Kr);
    },
    useDebugValue: li,
    useDeferredValue: function(e) {
      var t = yt();
      return oc(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = ti(Kr)[0], t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Vu,
    useSyncExternalStore: bu,
    useId: ic,
    unstable_isNewReconciler: !1
  }, Om = { readContext: vt, useCallback: lc, useContext: vt, useEffect: ri, useImperativeHandle: rc, useInsertionEffect: ec, useLayoutEffect: tc, useMemo: ac, useReducer: ni, useRef: Ju, useState: function() {
    return ni(Kr);
  }, useDebugValue: li, useDeferredValue: function(e) {
    var t = yt();
    return je === null ? t.memoizedState = e : oc(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = ni(Kr)[0], t = yt().memoizedState;
    return [e, t];
  }, useMutableSource: Vu, useSyncExternalStore: bu, useId: ic, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ai(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var aa = { isMounted: function(e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = pn(e), i = bt(r, a);
    i.payload = t, n != null && (i.callback = n), t = cn(e, i, a), t !== null && (Pt(t, e, a, r), Xl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = pn(e), i = bt(r, a);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = cn(e, i, a), t !== null && (Pt(t, e, a, r), Xl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Je(), r = pn(e), a = bt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = cn(e, a, r), t !== null && (Pt(t, e, r, n), Xl(t, e, r));
  } };
  function dc(e, t, n, r, a, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(a, i) : !0;
  }
  function fc(e, t, n) {
    var r = !1, a = on, i = t.contextType;
    return typeof i == "object" && i !== null ? i = vt(i) : (a = et(t) ? kn : Qe.current, r = t.contextTypes, i = (r = r != null) ? Xn(e, a) : on), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function mc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && aa.enqueueReplaceState(t, t.state, null);
  }
  function oi(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, qo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = vt(i) : (i = et(t) ? kn : Qe.current, a.context = Xn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ai(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && aa.enqueueReplaceState(a, a.state, null), Jl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ar(e, t) {
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
  function ii(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function si(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Am = typeof WeakMap == "function" ? WeakMap : Map;
  function pc(e, t, n) {
    n = bt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      fa || (fa = !0, Si = r), si(e, t);
    }, n;
  }
  function hc(e, t, n) {
    n = bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        si(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      si(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function vc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Am();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Xm.bind(null, e, t, n), t.then(e, e));
  }
  function yc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function gc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = bt(-1, 1), t.tag = 2, cn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Fm = H.ReactCurrentOwner, tt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? Fu(t, null, n, r) : tr(t, e.child, n, r);
  }
  function _c(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return rr(t, a), r = Zo(e, t, n, r, i, a), n = ei(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Re && n && Oo(t), t.flags |= 1, Xe(e, t, r, a), t.child);
  }
  function Ec(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Mi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, wc(e, t, i, r, a)) : (e = ga(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Or, n(d, r) && e.ref === t.ref) return qt(e, t, a);
    }
    return t.flags |= 1, e = vn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function wc(e, t, n, r, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Or(i, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, qt(e, t, a);
    }
    return ui(e, t, n, r, a);
  }
  function kc(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(ir, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(ir, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Se(ir, dt), dt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Se(ir, dt), dt |= r;
    return Xe(e, t, a, n), t.child;
  }
  function Sc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ui(e, t, n, r, a) {
    var i = et(n) ? kn : Qe.current;
    return i = Xn(t, i), rr(t, a), n = Zo(e, t, n, r, i, a), r = ei(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Re && r && Oo(t), t.flags |= 1, Xe(e, t, n, a), t.child);
  }
  function Cc(e, t, n, r, a) {
    if (et(n)) {
      var i = !0;
      Hl(t);
    } else i = !1;
    if (rr(t, a), t.stateNode === null) ia(e, t), fc(t, n, r), oi(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, g = t.memoizedProps;
      d.props = g;
      var w = d.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = vt(L) : (L = et(n) ? kn : Qe.current, L = Xn(t, L));
      var F = n.getDerivedStateFromProps, j = typeof F == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      j || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== r || w !== L) && mc(t, d, r, L), un = !1;
      var O = t.memoizedState;
      d.state = O, Jl(t, r, d, a), w = t.memoizedState, g !== r || O !== w || Ze.current || un ? (typeof F == "function" && (ai(t, n, F, r), w = t.memoizedState), (g = un || dc(t, n, g, r, O, w, L)) ? (j || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), d.props = r, d.state = w, d.context = L, r = g) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Uu(e, t), g = t.memoizedProps, L = t.type === t.elementType ? g : xt(t.type, g), d.props = L, j = t.pendingProps, O = d.context, w = n.contextType, typeof w == "object" && w !== null ? w = vt(w) : (w = et(n) ? kn : Qe.current, w = Xn(t, w));
      var b = n.getDerivedStateFromProps;
      (F = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== j || O !== w) && mc(t, d, r, w), un = !1, O = t.memoizedState, d.state = O, Jl(t, r, d, a);
      var K = t.memoizedState;
      g !== j || O !== K || Ze.current || un ? (typeof b == "function" && (ai(t, n, b, r), K = t.memoizedState), (L = un || dc(t, n, L, r, O, K, w) || !1) ? (F || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, K, w), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, K, w)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), d.props = r, d.state = K, d.context = w, r = L) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ci(e, t, n, r, i, a);
  }
  function ci(e, t, n, r, a, i) {
    Sc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Pu(t, n, !1), qt(e, t, i);
    r = t.stateNode, Fm.current = t;
    var g = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = tr(t, e.child, null, i), t.child = tr(t, null, g, i)) : Xe(e, t, g, i), t.memoizedState = r.state, a && Pu(t, n, !0), t.child;
  }
  function Nc(e) {
    var t = e.stateNode;
    t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), Qo(e, t.containerInfo);
  }
  function xc(e, t, n, r, a) {
    return er(), Uo(a), t.flags |= 256, Xe(e, t, n, r), t.child;
  }
  var di = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tc(e, t, n) {
    var r = t.pendingProps, a = Me.current, i = !1, d = (t.flags & 128) !== 0, g;
    if ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), g ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Se(Me, a & 1), e === null)
      return jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = _a(d, r, 0, null), e = In(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fi(n), t.memoizedState = di, e) : mi(t, d));
    if (a = e.memoizedState, a !== null && (g = a.dehydrated, g !== null)) return jm(e, t, d, r, g, a, n);
    if (i) {
      i = r.fallback, d = t.mode, a = e.child, g = a.sibling;
      var w = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = vn(a, w), r.subtreeFlags = a.subtreeFlags & 14680064), g !== null ? i = vn(g, i) : (i = In(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? fi(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = di, r;
    }
    return i = e.child, e = i.sibling, r = vn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function mi(e, t) {
    return t = _a({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oa(e, t, n, r) {
    return r !== null && Uo(r), tr(t, e.child, null, n), e = mi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function jm(e, t, n, r, a, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ii(Error(s(422))), oa(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = _a({ mode: "visible", children: r.children }, a, 0, null), i = In(i, a, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && tr(t, e.child, null, d), t.child.memoizedState = fi(d), t.memoizedState = di, i);
    if ((t.mode & 1) === 0) return oa(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var g = r.dgst;
      return r = g, i = Error(s(419)), r = ii(i, r, void 0), oa(e, t, d, r);
    }
    if (g = (d & e.childLanes) !== 0, tt || g) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Vt(e, a), Pt(r, e, a, -1));
      }
      return Pi(), r = ii(Error(s(421))), oa(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ct = ln(a.nextSibling), ut = t, Re = !0, Nt = null, e !== null && (pt[ht++] = Wt, pt[ht++] = Ht, pt[ht++] = Sn, Wt = e.id, Ht = e.overflow, Sn = t), t = mi(t, r.children), t.flags |= 4096, t);
  }
  function Rc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vo(e.return, t, n);
  }
  function pi(e, t, n, r, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
  }
  function Pc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, i = r.tail;
    if (Xe(e, t, r.children, n), r = Me.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rc(e, n, t);
        else if (e.tag === 19) Rc(e, n, t);
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
    if (Se(Me, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Zl(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), pi(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Zl(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        pi(t, !0, n, null, i);
        break;
      case "together":
        pi(t, !1, null, null, void 0);
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
    if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = vn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Um(e, t, n) {
    switch (t.tag) {
      case 3:
        Nc(t), er();
        break;
      case 5:
        Hu(t);
        break;
      case 1:
        et(t.type) && Hl(t);
        break;
      case 4:
        Qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Se(Kl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Se(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Tc(e, t, n) : (Se(Me, Me.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
        Se(Me, Me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Pc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Se(Me, Me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, kc(e, t, n);
    }
    return qt(e, t, n);
  }
  var Mc, hi, Lc, Ic;
  Mc = function(e, t) {
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
  }, hi = function() {
  }, Lc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, xn(Dt.current);
      var i = null;
      switch (n) {
        case "input":
          a = Ha(e, a), r = Ha(e, r), i = [];
          break;
        case "select":
          a = Y({}, a, { value: void 0 }), r = Y({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = qa(e, a), r = qa(e, r), i = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
      }
      Ya(n, r);
      var d;
      n = null;
      for (L in a) if (!r.hasOwnProperty(L) && a.hasOwnProperty(L) && a[L] != null) if (L === "style") {
        var g = a[L];
        for (d in g) g.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (f.hasOwnProperty(L) ? i || (i = []) : (i = i || []).push(L, null));
      for (L in r) {
        var w = r[L];
        if (g = a != null ? a[L] : void 0, r.hasOwnProperty(L) && w !== g && (w != null || g != null)) if (L === "style") if (g) {
          for (d in g) !g.hasOwnProperty(d) || w && w.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in w) w.hasOwnProperty(d) && g[d] !== w[d] && (n || (n = {}), n[d] = w[d]);
        } else n || (i || (i = []), i.push(
          L,
          n
        )), n = w;
        else L === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, g = g ? g.__html : void 0, w != null && g !== w && (i = i || []).push(L, w)) : L === "children" ? typeof w != "string" && typeof w != "number" || (i = i || []).push(L, "" + w) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (f.hasOwnProperty(L) ? (w != null && L === "onScroll" && Ne("scroll", e), i || g === w || (i = [])) : (i = i || []).push(L, w));
      }
      n && (i = i || []).push("style", n);
      var L = i;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, Ic = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Xr(e, t) {
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
    switch (Ao(t), t.tag) {
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
        return r = t.stateNode, lr(), xe(Ze), xe(Qe), Go(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Nt !== null && (xi(Nt), Nt = null))), hi(e, t), Ke(t), null;
      case 5:
        Yo(t);
        var a = xn(qr.current);
        if (n = t.type, e !== null && t.stateNode != null) Lc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = xn(Dt.current), Ql(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[$t] = t, r[Br] = i, e = (t.mode & 1) !== 0, n) {
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
                for (a = 0; a < Fr.length; a++) Ne(Fr[a], r);
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
                fs(r, i), Ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Ne("invalid", r);
                break;
              case "textarea":
                hs(r, i), Ne("invalid", r);
            }
            Ya(n, i), a = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var g = i[d];
              d === "children" ? typeof g == "string" ? r.textContent !== g && (i.suppressHydrationWarning !== !0 && jl(r.textContent, g, e), a = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (i.suppressHydrationWarning !== !0 && jl(
                r.textContent,
                g,
                e
              ), a = ["children", "" + g]) : f.hasOwnProperty(d) && g != null && d === "onScroll" && Ne("scroll", r);
            }
            switch (n) {
              case "input":
                vl(r), ps(r, i, !0);
                break;
              case "textarea":
                vl(r), ys(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Ul);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[$t] = t, e[Br] = r, Mc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ka(n, r), n) {
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
                  for (a = 0; a < Fr.length; a++) Ne(Fr[a], e);
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
                  fs(e, r), a = Ha(e, r), Ne("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = Y({}, r, { value: void 0 }), Ne("invalid", e);
                  break;
                case "textarea":
                  hs(e, r), a = qa(e, r), Ne("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ya(n, a), g = a;
              for (i in g) if (g.hasOwnProperty(i)) {
                var w = g[i];
                i === "style" ? ws(e, w) : i === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && _s(e, w)) : i === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && _r(e, w) : typeof w == "number" && _r(e, "" + w) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? w != null && i === "onScroll" && Ne("scroll", e) : w != null && z(e, i, w, d));
              }
              switch (n) {
                case "input":
                  vl(e), ps(e, r, !1);
                  break;
                case "textarea":
                  vl(e), ys(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? jn(e, !!r.multiple, i, !1) : r.defaultValue != null && jn(
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
        if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = xn(qr.current), xn(Dt.current), Ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (i = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$t] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (xe(Me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) zu(), er(), t.flags |= 98560, i = !1;
          else if (i = Ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[$t] = t;
            } else er(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else Nt !== null && (xi(Nt), Nt = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Pi())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return lr(), hi(e, t), e === null && jr(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Ho(t.type._context), Ke(t), null;
      case 17:
        return et(t.type) && Wl(), Ke(t), null;
      case 19:
        if (xe(Me), i = t.memoizedState, i === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) Xr(i, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Zl(e), d !== null) {
              for (t.flags |= 128, Xr(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Se(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Oe() > sr && (t.flags |= 128, r = !0, Xr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zl(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xr(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !Re) return Ke(t), null;
          } else 2 * Oe() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Xr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Oe(), t.sibling = null, n = Me.current, Se(Me, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Wm(e, t) {
    switch (Ao(t), t.tag) {
      case 1:
        return et(t.type) && Wl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return lr(), xe(Ze), xe(Qe), Go(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Yo(t), null;
      case 13:
        if (xe(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          er();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xe(Me), null;
      case 4:
        return lr(), null;
      case 10:
        return Ho(t.type._context), null;
      case 22:
      case 23:
        return Ri(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var sa = !1, Ge = !1, Hm = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function or(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ze(e, t, r);
    }
    else n.current = null;
  }
  function vi(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var $c = !1;
  function Vm(e, t) {
    if (Ro = Rl, e = du(), Eo(e)) {
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
          var d = 0, g = -1, w = -1, L = 0, F = 0, j = e, O = null;
          t: for (; ; ) {
            for (var b; j !== n || a !== 0 && j.nodeType !== 3 || (g = d + a), j !== i || r !== 0 && j.nodeType !== 3 || (w = d + r), j.nodeType === 3 && (d += j.nodeValue.length), (b = j.firstChild) !== null; )
              O = j, j = b;
            for (; ; ) {
              if (j === e) break t;
              if (O === n && ++L === a && (g = d), O === i && ++F === r && (w = d), (b = j.nextSibling) !== null) break;
              j = O, O = j.parentNode;
            }
            j = b;
          }
          n = g === -1 || w === -1 ? null : { start: g, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Po = { focusedElem: e, selectionRange: n }, Rl = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
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
              var X = K.memoizedProps, Ae = K.memoizedState, R = t.stateNode, k = R.getSnapshotBeforeUpdate(t.elementType === t.type ? X : xt(t.type, X), Ae);
              R.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var P = t.stateNode.containerInfo;
            P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
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
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return K = $c, $c = !1, K;
  }
  function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var i = a.destroy;
          a.destroy = void 0, i !== void 0 && vi(t, n, i);
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
  function yi(e) {
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
  function Dc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[Br], delete t[$o], delete t[xm], delete t[Tm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function zc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Oc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || zc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ul));
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  function _i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (_i(e, t, n), e = e.sibling; e !== null; ) _i(e, t, n), e = e.sibling;
  }
  var be = null, Tt = !1;
  function dn(e, t, n) {
    for (n = n.child; n !== null; ) Ac(e, t, n), n = n.sibling;
  }
  function Ac(e, t, n) {
    if (It && typeof It.onCommitFiberUnmount == "function") try {
      It.onCommitFiberUnmount(kl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || or(n, t);
      case 6:
        var r = be, a = Tt;
        be = null, dn(e, t, n), be = r, Tt = a, be !== null && (Tt ? (e = be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : be.removeChild(n.stateNode));
        break;
      case 18:
        be !== null && (Tt ? (e = be, n = n.stateNode, e.nodeType === 8 ? Io(e.parentNode, n) : e.nodeType === 1 && Io(e, n), Mr(e)) : Io(be, n.stateNode));
        break;
      case 4:
        r = be, a = Tt, be = n.stateNode.containerInfo, Tt = !0, dn(e, t, n), be = r, Tt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var i = a, d = i.destroy;
            i = i.tag, d !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && vi(n, t, d), a = a.next;
          } while (a !== r);
        }
        dn(e, t, n);
        break;
      case 1:
        if (!Ge && (or(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          ze(n, t, g);
        }
        dn(e, t, n);
        break;
      case 21:
        dn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, dn(e, t, n), Ge = r) : dn(e, t, n);
        break;
      default:
        dn(e, t, n);
    }
  }
  function Fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Hm()), t.forEach(function(r) {
        var a = Zm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e, d = t, g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              be = g.stateNode, Tt = !1;
              break e;
            case 3:
              be = g.stateNode.containerInfo, Tt = !0;
              break e;
            case 4:
              be = g.stateNode.containerInfo, Tt = !0;
              break e;
          }
          g = g.return;
        }
        if (be === null) throw Error(s(160));
        Ac(i, d, a), be = null, Tt = !1;
        var w = a.alternate;
        w !== null && (w.return = null), a.return = null;
      } catch (L) {
        ze(a, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jc(t, e), t = t.sibling;
  }
  function jc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Rt(t, e), Ot(e), r & 4) {
          try {
            Jr(3, e, e.return), ua(3, e);
          } catch (X) {
            ze(e, e.return, X);
          }
          try {
            Jr(5, e, e.return);
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        break;
      case 1:
        Rt(t, e), Ot(e), r & 512 && n !== null && or(n, n.return);
        break;
      case 5:
        if (Rt(t, e), Ot(e), r & 512 && n !== null && or(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            _r(a, "");
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, g = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            g === "input" && i.type === "radio" && i.name != null && ms(a, i), Ka(g, d);
            var L = Ka(g, i);
            for (d = 0; d < w.length; d += 2) {
              var F = w[d], j = w[d + 1];
              F === "style" ? ws(a, j) : F === "dangerouslySetInnerHTML" ? _s(a, j) : F === "children" ? _r(a, j) : z(a, F, j, L);
            }
            switch (g) {
              case "input":
                Va(a, i);
                break;
              case "textarea":
                vs(a, i);
                break;
              case "select":
                var O = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null ? jn(a, !!i.multiple, b, !1) : O !== !!i.multiple && (i.defaultValue != null ? jn(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : jn(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[Br] = i;
          } catch (X) {
            ze(e, e.return, X);
          }
        }
        break;
      case 6:
        if (Rt(t, e), Ot(e), r & 4) {
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
        if (Rt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Mr(t.containerInfo);
        } catch (X) {
          ze(e, e.return, X);
        }
        break;
      case 4:
        Rt(t, e), Ot(e);
        break;
      case 13:
        Rt(t, e), Ot(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (ki = Oe())), r & 4 && Fc(e);
        break;
      case 22:
        if (F = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (L = Ge) || F, Rt(t, e), Ge = L) : Rt(t, e), Ot(e), r & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !F && (e.mode & 1) !== 0) for (Q = e, F = e.child; F !== null; ) {
            for (j = Q = F; Q !== null; ) {
              switch (O = Q, b = O.child, O.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, O, O.return);
                  break;
                case 1:
                  or(O, O.return);
                  var K = O.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    r = O, n = O.return;
                    try {
                      t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (X) {
                      ze(r, n, X);
                    }
                  }
                  break;
                case 5:
                  or(O, O.return);
                  break;
                case 22:
                  if (O.memoizedState !== null) {
                    Wc(j);
                    continue;
                  }
              }
              b !== null ? (b.return = O, Q = b) : Wc(j);
            }
            F = F.sibling;
          }
          e: for (F = null, j = e; ; ) {
            if (j.tag === 5) {
              if (F === null) {
                F = j;
                try {
                  a = j.stateNode, L ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (g = j.stateNode, w = j.memoizedProps.style, d = w != null && w.hasOwnProperty("display") ? w.display : null, g.style.display = Es("display", d));
                } catch (X) {
                  ze(e, e.return, X);
                }
              }
            } else if (j.tag === 6) {
              if (F === null) try {
                j.stateNode.nodeValue = L ? "" : j.memoizedProps;
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
        Rt(t, e), Ot(e), r & 4 && Fc(e);
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
            if (zc(n)) {
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
            r.flags & 32 && (_r(a, ""), r.flags &= -33);
            var i = Oc(e);
            _i(e, i, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, g = Oc(e);
            gi(e, g, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        ze(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bm(e, t, n) {
    Q = e, Uc(e);
  }
  function Uc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, i = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || sa;
        if (!d) {
          var g = a.alternate, w = g !== null && g.memoizedState !== null || Ge;
          g = sa;
          var L = Ge;
          if (sa = d, (Ge = w) && !L) for (Q = a; Q !== null; ) d = Q, w = d.child, d.tag === 22 && d.memoizedState !== null ? Hc(a) : w !== null ? (w.return = d, Q = w) : Hc(a);
          for (; i !== null; ) Q = i, Uc(i), i = i.sibling;
          Q = a, sa = g, Ge = L;
        }
        Bc(e);
      } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, Q = i) : Bc(e);
    }
  }
  function Bc(e) {
    for (; Q !== null; ) {
      var t = Q;
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
                var a = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Wu(t, i, r);
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
                Wu(t, d, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var w = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && n.focus();
                    break;
                  case "img":
                    w.src && (n.src = w.src);
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
                var L = t.alternate;
                if (L !== null) {
                  var F = L.memoizedState;
                  if (F !== null) {
                    var j = F.dehydrated;
                    j !== null && Mr(j);
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
          Ge || t.flags & 512 && yi(t);
        } catch (O) {
          ze(t, t.return, O);
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
  function Wc(e) {
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
  function Hc(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ua(4, t);
            } catch (w) {
              ze(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                ze(t, a, w);
              }
            }
            var i = t.return;
            try {
              yi(t);
            } catch (w) {
              ze(t, i, w);
            }
            break;
          case 5:
            var d = t.return;
            try {
              yi(t);
            } catch (w) {
              ze(t, d, w);
            }
        }
      } catch (w) {
        ze(t, t.return, w);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, Q = g;
        break;
      }
      Q = t.return;
    }
  }
  var qm = Math.ceil, ca = H.ReactCurrentDispatcher, Ei = H.ReactCurrentOwner, gt = H.ReactCurrentBatchConfig, me = 0, We = null, Fe = null, qe = 0, dt = 0, ir = an(0), Ue = 0, Zr = null, Rn = 0, da = 0, wi = 0, el = null, nt = null, ki = 0, sr = 1 / 0, Qt = null, fa = !1, Si = null, fn = null, ma = !1, mn = null, pa = 0, tl = 0, Ci = null, ha = -1, va = 0;
  function Je() {
    return (me & 6) !== 0 ? Oe() : ha !== -1 ? ha : ha = Oe();
  }
  function pn(e) {
    return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && qe !== 0 ? qe & -qe : Pm.transition !== null ? (va === 0 && (va = Os()), va) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bs(e.type)), e);
  }
  function Pt(e, t, n, r) {
    if (50 < tl) throw tl = 0, Ci = null, Error(s(185));
    Nr(e, n, r), ((me & 2) === 0 || e !== We) && (e === We && ((me & 2) === 0 && (da |= n), Ue === 4 && hn(e, qe)), rt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (sr = Oe() + 500, Vl && sn()));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    Pf(e, t);
    var r = Nl(e, e === We ? qe : 0);
    if (r === 0) n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && $s(n), t === 1) e.tag === 0 ? Rm(bc.bind(null, e)) : Mu(bc.bind(null, e)), Cm(function() {
        (me & 6) === 0 && sn();
      }), n = null;
      else {
        switch (As(r)) {
          case 1:
            n = no;
            break;
          case 4:
            n = Ds;
            break;
          case 16:
            n = wl;
            break;
          case 536870912:
            n = zs;
            break;
          default:
            n = wl;
        }
        n = Zc(n, Vc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Vc(e, t) {
    if (ha = -1, va = 0, (me & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (ur() && e.callbackNode !== n) return null;
    var r = Nl(e, e === We ? qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ya(e, r);
    else {
      t = r;
      var a = me;
      me |= 2;
      var i = Qc();
      (We !== e || qe !== t) && (Qt = null, sr = Oe() + 500, Mn(e, t));
      do
        try {
          Km();
          break;
        } catch (g) {
          qc(e, g);
        }
      while (!0);
      Wo(), ca.current = i, me = a, Fe !== null ? t = 0 : (We = null, qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = ro(e), a !== 0 && (r = a, t = Ni(e, a))), t === 1) throw n = Zr, Mn(e, 0), hn(e, r), rt(e, Oe()), n;
      if (t === 6) hn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Qm(a) && (t = ya(e, r), t === 2 && (i = ro(e), i !== 0 && (r = i, t = Ni(e, i))), t === 1)) throw n = Zr, Mn(e, 0), hn(e, r), rt(e, Oe()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ln(e, nt, Qt);
            break;
          case 3:
            if (hn(e, r), (r & 130023424) === r && (t = ki + 500 - Oe(), 10 < t)) {
              if (Nl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Je(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Lo(Ln.bind(null, e, nt, Qt), t);
              break;
            }
            Ln(e, nt, Qt);
            break;
          case 4:
            if (hn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - St(r);
              i = 1 << d, d = t[d], d > a && (a = d), r &= ~i;
            }
            if (r = a, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Lo(Ln.bind(null, e, nt, Qt), r);
              break;
            }
            Ln(e, nt, Qt);
            break;
          case 5:
            Ln(e, nt, Qt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return rt(e, Oe()), e.callbackNode === n ? Vc.bind(null, e) : null;
  }
  function Ni(e, t) {
    var n = el;
    return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = ya(e, t), e !== 2 && (t = nt, nt = n, t !== null && xi(t)), e;
  }
  function xi(e) {
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
  function hn(e, t) {
    for (t &= ~wi, t &= ~da, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function bc(e) {
    if ((me & 6) !== 0) throw Error(s(327));
    ur();
    var t = Nl(e, 0);
    if ((t & 1) === 0) return rt(e, Oe()), null;
    var n = ya(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ro(e);
      r !== 0 && (t = r, n = Ni(e, r));
    }
    if (n === 1) throw n = Zr, Mn(e, 0), hn(e, t), rt(e, Oe()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ln(e, nt, Qt), rt(e, Oe()), null;
  }
  function Ti(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      me = n, me === 0 && (sr = Oe() + 500, Vl && sn());
    }
  }
  function Pn(e) {
    mn !== null && mn.tag === 0 && (me & 6) === 0 && ur();
    var t = me;
    me |= 1;
    var n = gt.transition, r = we;
    try {
      if (gt.transition = null, we = 1, e) return e();
    } finally {
      we = r, gt.transition = n, me = t, (me & 6) === 0 && sn();
    }
  }
  function Ri() {
    dt = ir.current, xe(ir);
  }
  function Mn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Sm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Ao(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wl();
          break;
        case 3:
          lr(), xe(Ze), xe(Qe), Go();
          break;
        case 5:
          Yo(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          xe(Me);
          break;
        case 19:
          xe(Me);
          break;
        case 10:
          Ho(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      n = n.return;
    }
    if (We = e, Fe = e = vn(e.current, null), qe = dt = t, Ue = 0, Zr = null, wi = da = Rn = 0, nt = el = null, Nn !== null) {
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
  function qc(e, t) {
    do {
      var n = Fe;
      try {
        if (Wo(), ea.current = la, ta) {
          for (var r = Le.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          ta = !1;
        }
        if (Tn = 0, Be = je = Le = null, Qr = !1, Yr = 0, Ei.current = null, n === null || n.return === null) {
          Ue = 1, Zr = t, Fe = null;
          break;
        }
        e: {
          var i = e, d = n.return, g = n, w = t;
          if (t = qe, g.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var L = w, F = g, j = F.tag;
            if ((F.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var O = F.alternate;
              O ? (F.updateQueue = O.updateQueue, F.memoizedState = O.memoizedState, F.lanes = O.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var b = yc(d);
            if (b !== null) {
              b.flags &= -257, gc(b, d, g, i, t), b.mode & 1 && vc(i, L, t), t = b, w = L;
              var K = t.updateQueue;
              if (K === null) {
                var X = /* @__PURE__ */ new Set();
                X.add(w), t.updateQueue = X;
              } else K.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                vc(i, L, t), Pi();
                break e;
              }
              w = Error(s(426));
            }
          } else if (Re && g.mode & 1) {
            var Ae = yc(d);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), gc(Ae, d, g, i, t), Uo(ar(w, g));
              break e;
            }
          }
          i = w = ar(w, g), Ue !== 4 && (Ue = 2), el === null ? el = [i] : el.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var R = pc(i, w, t);
                Bu(i, R);
                break e;
              case 1:
                g = w;
                var k = i.type, P = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (fn === null || !fn.has(P)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var U = hc(i, g, t);
                  Bu(i, U);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Kc(n);
      } catch (Z) {
        t = Z, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qc() {
    var e = ca.current;
    return ca.current = la, e === null ? la : e;
  }
  function Pi() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), We === null || (Rn & 268435455) === 0 && (da & 268435455) === 0 || hn(We, qe);
  }
  function ya(e, t) {
    var n = me;
    me |= 2;
    var r = Qc();
    (We !== e || qe !== t) && (Qt = null, Mn(e, t));
    do
      try {
        Ym();
        break;
      } catch (a) {
        qc(e, a);
      }
    while (!0);
    if (Wo(), me = n, ca.current = r, Fe !== null) throw Error(s(261));
    return We = null, qe = 0, Ue;
  }
  function Ym() {
    for (; Fe !== null; ) Yc(Fe);
  }
  function Km() {
    for (; Fe !== null && !Ef(); ) Yc(Fe);
  }
  function Yc(e) {
    var t = Jc(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? Kc(e) : Fe = t, Ei.current = null;
  }
  function Kc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Bm(n, t, dt), n !== null) {
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
    var r = we, a = gt.transition;
    try {
      gt.transition = null, we = 1, Gm(e, t, n, r);
    } finally {
      gt.transition = a, we = r;
    }
    return null;
  }
  function Gm(e, t, n, r) {
    do
      ur();
    while (mn !== null);
    if ((me & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Mf(e, i), e === We && (Fe = We = null, qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ma || (ma = !0, Zc(wl, function() {
      return ur(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = gt.transition, gt.transition = null;
      var d = we;
      we = 1;
      var g = me;
      me |= 4, Ei.current = null, Vm(e, n), jc(n, e), vm(Po), Rl = !!Ro, Po = Ro = null, e.current = n, bm(n), wf(), me = g, we = d, gt.transition = i;
    } else e.current = n;
    if (ma && (ma = !1, mn = e, pa = a), i = e.pendingLanes, i === 0 && (fn = null), Cf(n.stateNode), rt(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (fa) throw fa = !1, e = Si, Si = null, e;
    return (pa & 1) !== 0 && e.tag !== 0 && ur(), i = e.pendingLanes, (i & 1) !== 0 ? e === Ci ? tl++ : (tl = 0, Ci = e) : tl = 0, sn(), null;
  }
  function ur() {
    if (mn !== null) {
      var e = As(pa), t = gt.transition, n = we;
      try {
        if (gt.transition = null, we = 16 > e ? 16 : e, mn === null) var r = !1;
        else {
          if (e = mn, mn = null, pa = 0, (me & 6) !== 0) throw Error(s(331));
          var a = me;
          for (me |= 4, Q = e.current; Q !== null; ) {
            var i = Q, d = i.child;
            if ((Q.flags & 16) !== 0) {
              var g = i.deletions;
              if (g !== null) {
                for (var w = 0; w < g.length; w++) {
                  var L = g[w];
                  for (Q = L; Q !== null; ) {
                    var F = Q;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, F, i);
                    }
                    var j = F.child;
                    if (j !== null) j.return = F, Q = j;
                    else for (; Q !== null; ) {
                      F = Q;
                      var O = F.sibling, b = F.return;
                      if (Dc(F), F === L) {
                        Q = null;
                        break;
                      }
                      if (O !== null) {
                        O.return = b, Q = O;
                        break;
                      }
                      Q = b;
                    }
                  }
                }
                var K = i.alternate;
                if (K !== null) {
                  var X = K.child;
                  if (X !== null) {
                    K.child = null;
                    do {
                      var Ae = X.sibling;
                      X.sibling = null, X = Ae;
                    } while (X !== null);
                  }
                }
                Q = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) d.return = i, Q = d;
            else e: for (; Q !== null; ) {
              if (i = Q, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Jr(9, i, i.return);
              }
              var R = i.sibling;
              if (R !== null) {
                R.return = i.return, Q = R;
                break e;
              }
              Q = i.return;
            }
          }
          var k = e.current;
          for (Q = k; Q !== null; ) {
            d = Q;
            var P = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && P !== null) P.return = d, Q = P;
            else e: for (d = k; Q !== null; ) {
              if (g = Q, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ua(9, g);
                }
              } catch (Z) {
                ze(g, g.return, Z);
              }
              if (g === d) {
                Q = null;
                break e;
              }
              var U = g.sibling;
              if (U !== null) {
                U.return = g.return, Q = U;
                break e;
              }
              Q = g.return;
            }
          }
          if (me = a, sn(), It && typeof It.onPostCommitFiberRoot == "function") try {
            It.onPostCommitFiberRoot(kl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        we = n, gt.transition = t;
      }
    }
    return !1;
  }
  function Gc(e, t, n) {
    t = ar(n, t), t = pc(e, t, 1), e = cn(e, t, 1), t = Je(), e !== null && (Nr(e, 1, t), rt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) Gc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
          e = ar(n, e), e = hc(t, e, 1), t = cn(t, e, 1), e = Je(), t !== null && (Nr(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Xm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Je(), e.pingedLanes |= e.suspendedLanes & n, We === e && (qe & n) === n && (Ue === 4 || Ue === 3 && (qe & 130023424) === qe && 500 > Oe() - ki ? Mn(e, 0) : wi |= n), rt(e, t);
  }
  function Xc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Cl, Cl <<= 1, (Cl & 130023424) === 0 && (Cl = 4194304)));
    var n = Je();
    e = Vt(e, t), e !== null && (Nr(e, t, n), rt(e, n));
  }
  function Jm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Xc(e, n);
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
    r !== null && r.delete(t), Xc(e, n);
  }
  var Jc;
  Jc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) tt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return tt = !1, Um(e, t, n);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, Re && (t.flags & 1048576) !== 0 && Lu(t, ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var a = Xn(t, Qe.current);
        rr(t, n), a = Zo(null, t, r, e, a, n);
        var i = ei();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (i = !0, Hl(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, qo(t), a.updater = aa, t.stateNode = a, a._reactInternals = t, oi(t, r, e, n), t = ci(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && Oo(t), Xe(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ia(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = tp(r), e = xt(r, e), a) {
            case 0:
              t = ui(null, t, r, e, n);
              break e;
            case 1:
              t = Cc(null, t, r, e, n);
              break e;
            case 11:
              t = _c(null, t, r, e, n);
              break e;
            case 14:
              t = Ec(null, t, r, xt(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), ui(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), Cc(e, t, r, a, n);
      case 3:
        e: {
          if (Nc(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, a = i.element, Uu(e, t), Jl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = ar(Error(s(423)), t), t = xc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = ar(Error(s(424)), t), t = xc(e, t, r, n, a);
            break e;
          } else for (ct = ln(t.stateNode.containerInfo.firstChild), ut = t, Re = !0, Nt = null, n = Fu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (er(), r === a) {
              t = qt(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Hu(t), e === null && jo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = a.children, Mo(r, a) ? d = null : i !== null && Mo(r, i) && (t.flags |= 32), Sc(e, t), Xe(e, t, d, n), t.child;
      case 6:
        return e === null && jo(t), null;
      case 13:
        return Tc(e, t, n);
      case 4:
        return Qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : Xe(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), _c(e, t, r, a, n);
      case 7:
        return Xe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, d = a.value, Se(Kl, r._currentValue), r._currentValue = d, i !== null) if (Ct(i.value, d)) {
            if (i.children === a.children && !Ze.current) {
              t = qt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var g = i.dependencies;
            if (g !== null) {
              d = i.child;
              for (var w = g.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (i.tag === 1) {
                    w = bt(-1, n & -n), w.tag = 2;
                    var L = i.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var F = L.pending;
                      F === null ? w.next = w : (w.next = F.next, F.next = w), L.pending = w;
                    }
                  }
                  i.lanes |= n, w = i.alternate, w !== null && (w.lanes |= n), Vo(
                    i.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (i.tag === 10) d = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (d = i.return, d === null) throw Error(s(341));
              d.lanes |= n, g = d.alternate, g !== null && (g.lanes |= n), Vo(d, n, t), d = i.sibling;
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
        return a = t.type, r = t.pendingProps.children, rr(t, n), a = vt(a), r = r(a), t.flags |= 1, Xe(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = xt(r, t.pendingProps), a = xt(r.type, a), Ec(e, t, r, a, n);
      case 15:
        return wc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), ia(e, t), t.tag = 1, et(r) ? (e = !0, Hl(t)) : e = !1, rr(t, n), fc(t, r, a), oi(t, r, a, n), ci(null, t, r, !0, e, n);
      case 19:
        return Pc(e, t, n);
      case 22:
        return kc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Zc(e, t) {
    return Is(e, t);
  }
  function ep(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _t(e, t, n, r) {
    return new ep(e, t, n, r);
  }
  function Mi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function tp(e) {
    if (typeof e == "function") return Mi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne) return 11;
      if (e === J) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = _t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ga(e, t, n, r, a, i) {
    var d = 2;
    if (r = e, typeof e == "function") Mi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case ae:
        return In(n.children, a, i, t);
      case q:
        d = 8, a |= 8;
        break;
      case fe:
        return e = _t(12, n, t, a | 2), e.elementType = fe, e.lanes = i, e;
      case ge:
        return e = _t(13, n, t, a), e.elementType = ge, e.lanes = i, e;
      case Ie:
        return e = _t(19, n, t, a), e.elementType = Ie, e.lanes = i, e;
      case De:
        return _a(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ye:
            d = 10;
            break e;
          case G:
            d = 9;
            break e;
          case ne:
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
    return t = _t(d, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function In(e, t, n, r) {
    return e = _t(7, e, r, t), e.lanes = n, e;
  }
  function _a(e, t, n, r) {
    return e = _t(22, e, r, t), e.elementType = De, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Li(e, t, n) {
    return e = _t(6, e, null, t), e.lanes = n, e;
  }
  function Ii(e, t, n) {
    return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function np(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function $i(e, t, n, r, a, i, d, g, w) {
    return e = new np(e, t, n, g, w), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = _t(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qo(i), e;
  }
  function rp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ed(e) {
    if (!e) return on;
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
      if (et(n)) return Ru(e, n, t);
    }
    return t;
  }
  function td(e, t, n, r, a, i, d, g, w) {
    return e = $i(n, r, !0, e, a, i, d, g, w), e.context = ed(null), n = e.current, r = Je(), a = pn(n), i = bt(r, a), i.callback = t ?? null, cn(n, i, a), e.current.lanes = a, Nr(e, a, r), rt(e, r), e;
  }
  function Ea(e, t, n, r) {
    var a = t.current, i = Je(), d = pn(a);
    return n = ed(n), t.context === null ? t.context = n : t.pendingContext = n, t = bt(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = cn(a, t, d), e !== null && (Pt(e, a, d, i), Xl(e, a, d)), d;
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
  function nd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Di(e, t) {
    nd(e, t), (e = e.alternate) && nd(e, t);
  }
  function lp() {
    return null;
  }
  var rd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zi(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = zi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ea(e, t, null, null);
  }, ka.prototype.unmount = zi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Pn(function() {
        Ea(null, e, null, null);
      }), t[Ut] = null;
    }
  };
  function ka(e) {
    this._internalRoot = e;
  }
  ka.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Us();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
      tn.splice(n, 0, e), n === 0 && Hs(e);
    }
  };
  function Oi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ld() {
  }
  function ap(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var L = wa(d);
          i.call(L);
        };
      }
      var d = td(t, r, e, 0, null, !1, !1, "", ld);
      return e._reactRootContainer = d, e[Ut] = d.current, jr(e.nodeType === 8 ? e.parentNode : e), Pn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var L = wa(w);
        g.call(L);
      };
    }
    var w = $i(e, 0, !1, null, null, !1, !1, "", ld);
    return e._reactRootContainer = w, e[Ut] = w.current, jr(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
      Ea(t, w, n, r);
    }), w;
  }
  function Ca(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
      var d = i;
      if (typeof a == "function") {
        var g = a;
        a = function() {
          var w = wa(d);
          g.call(w);
        };
      }
      Ea(t, d, e, a);
    } else d = ap(n, t, e, a, r);
    return wa(d);
  }
  Fs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Cr(t.pendingLanes);
          n !== 0 && (ao(t, n | 1), rt(t, Oe()), (me & 6) === 0 && (sr = Oe() + 500, sn()));
        }
        break;
      case 13:
        Pn(function() {
          var r = Vt(e, 1);
          if (r !== null) {
            var a = Je();
            Pt(r, e, 1, a);
          }
        }), Di(e, 1);
    }
  }, oo = function(e) {
    if (e.tag === 13) {
      var t = Vt(e, 134217728);
      if (t !== null) {
        var n = Je();
        Pt(t, e, 134217728, n);
      }
      Di(e, 134217728);
    }
  }, js = function(e) {
    if (e.tag === 13) {
      var t = pn(e), n = Vt(e, t);
      if (n !== null) {
        var r = Je();
        Pt(n, e, t, r);
      }
      Di(e, t);
    }
  }, Us = function() {
    return we;
  }, Bs = function(e, t) {
    var n = we;
    try {
      return we = e, t();
    } finally {
      we = n;
    }
  }, Ja = function(e, t, n) {
    switch (t) {
      case "input":
        if (Va(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Bl(r);
              if (!a) throw Error(s(90));
              ds(r), Va(r, a);
            }
          }
        }
        break;
      case "textarea":
        vs(e, n);
        break;
      case "select":
        t = n.value, t != null && jn(e, !!n.multiple, t, !1);
    }
  }, Ns = Ti, xs = Pn;
  var op = { usingClientEntryPoint: !1, Events: [Wr, Kn, Bl, Ss, Cs, Ti] }, nl = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ip = { bundleType: nl.bundleType, version: nl.version, rendererPackageName: nl.rendererPackageName, rendererConfig: nl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ms(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: nl.findFiberByHostInstance || lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Na.isDisabled && Na.supportsFiber) try {
      kl = Na.inject(ip), It = Na;
    } catch {
    }
  }
  return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = op, lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oi(t)) throw Error(s(200));
    return rp(e, t, null, n);
  }, lt.createRoot = function(e, t) {
    if (!Oi(e)) throw Error(s(299));
    var n = !1, r = "", a = rd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = $i(e, 1, !1, null, null, n, !1, r, a), e[Ut] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new zi(t);
  }, lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Ms(t), e = e === null ? null : e.stateNode, e;
  }, lt.flushSync = function(e) {
    return Pn(e);
  }, lt.hydrate = function(e, t, n) {
    if (!Sa(t)) throw Error(s(200));
    return Ca(null, e, t, !0, n);
  }, lt.hydrateRoot = function(e, t, n) {
    if (!Oi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, i = "", d = rd;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = td(t, null, e, 1, n ?? null, a, !1, i, d), e[Ut] = t.current, jr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ka(t);
  }, lt.render = function(e, t, n) {
    if (!Sa(t)) throw Error(s(200));
    return Ca(null, e, t, !1, n);
  }, lt.unmountComponentAtNode = function(e) {
    if (!Sa(e)) throw Error(s(40));
    return e._reactRootContainer ? (Pn(function() {
      Ca(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ut] = null;
      });
    }), !0) : !1;
  }, lt.unstable_batchedUpdates = Ti, lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sa(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Ca(e, t, n, !1, r);
  }, lt.version = "18.3.1-next-f1338f8080-20240426", lt;
}
var cd;
function Ad() {
  if (cd) return Fi.exports;
  cd = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Fi.exports = fp(), Fi.exports;
}
var dd;
function mp() {
  if (dd) return xa;
  dd = 1;
  var l = Ad();
  return xa.createRoot = l.createRoot, xa.hydrateRoot = l.hydrateRoot, xa;
}
var pp = mp();
const hp = /* @__PURE__ */ zd(pp);
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
var fd = "popstate";
function md(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function vp(l = {}) {
  function o(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: _ = ""
    } = An(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Zi(
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
    Et(
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
function Et(l, o) {
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
function pd(l, o) {
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
function Zi(l, o, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? An(o) : o,
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
function An(l) {
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
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", _ = null, C = N();
  C == null && (C = 0, p.replaceState({ ...p.state, idx: C }, ""));
  function N() {
    return (p.state || { idx: null }).idx;
  }
  function y() {
    h = "POP";
    let E = N(), M = E == null ? null : E - C;
    C = E, _ && _({ action: h, location: $.location, delta: M });
  }
  function x(E, M) {
    h = "PUSH";
    let S = md(E) ? E : Zi($.location, E, M);
    s && s(S, E), C = N() + 1;
    let z = pd(S, C), H = $.createHref(S.mask || S);
    try {
      p.pushState(z, "", H);
    } catch (V) {
      if (V instanceof DOMException && V.name === "DataCloneError")
        throw V;
      f.location.assign(H);
    }
    m && _ && _({ action: h, location: $.location, delta: 1 });
  }
  function I(E, M) {
    h = "REPLACE";
    let S = md(E) ? E : Zi($.location, E, M);
    s && s(S, E), C = N();
    let z = pd(S, C), H = $.createHref(S.mask || S);
    p.replaceState(z, "", H), m && _ && _({ action: h, location: $.location, delta: 0 });
  }
  function D(E) {
    return _p(f, E);
  }
  let $ = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(E) {
      if (_)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(fd, y), _ = E, () => {
        f.removeEventListener(fd, y), _ = null;
      };
    },
    createHref(E) {
      return o(f, E);
    },
    createURL: D,
    encodeLocation(E) {
      let M = D(E);
      return {
        pathname: M.pathname,
        search: M.search,
        hash: M.hash
      };
    },
    push: x,
    replace: I,
    go(E) {
      return p.go(E);
    }
  };
  return $;
}
function _p(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Pe(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : cl(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Fd(l, o, s = "/") {
  return Ep(l, o, s, !1);
}
function Ep(l, o, s, c, f) {
  let m = typeof o == "string" ? An(o) : o, p = Yt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = wp(l), _ = null, C = $p(p);
  for (let N = 0; _ == null && N < h.length; ++N)
    _ = Lp(
      h[N],
      C,
      c
    );
  return _;
}
function wp(l) {
  let o = jd(l);
  return kp(o), o;
}
function jd(l, o = [], s = [], c = "", f = !1) {
  let m = (p, h, _ = f, C) => {
    let N = {
      relativePath: C === void 0 ? p.path || "" : C,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (N.relativePath.startsWith("/")) {
      if (!N.relativePath.startsWith(c) && _)
        return;
      Pe(
        N.relativePath.startsWith(c),
        `Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), N.relativePath = N.relativePath.slice(c.length);
    }
    let y = Mt([c, N.relativePath]), x = s.concat(N);
    p.children && p.children.length > 0 && (Pe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
    ), jd(
      p.children,
      o,
      x,
      y,
      _
    )), !(p.path == null && !p.index) && o.push({
      path: y,
      score: Pp(y, p.index),
      routesMeta: x
    });
  };
  return l.forEach((p, h) => {
    var _;
    if (p.path === "" || !((_ = p.path) != null && _.includes("?")))
      m(p, h);
    else
      for (let C of Ud(p.path))
        m(p, h, !0, C);
  }), o;
}
function Ud(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [s, ...c] = o, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = Ud(c.join("/")), h = [];
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
var Sp = /^:[\w-]+$/, Cp = 3, Np = 2, xp = 1, Tp = 10, Rp = -2, hd = (l) => l === "*";
function Pp(l, o) {
  let s = l.split("/"), c = s.length;
  return s.some(hd) && (c += Rp), o && (c += Np), s.filter((f) => !hd(f)).reduce(
    (f, m) => f + (Sp.test(m) ? Cp : m === "" ? xp : Tp),
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
    let _ = c[h], C = h === c.length - 1, N = m === "/" ? o : o.slice(m.length) || "/", y = za(
      { path: _.relativePath, caseSensitive: _.caseSensitive, end: C },
      N
    ), x = _.route;
    if (!y && C && s && !c[c.length - 1].route.index && (y = za(
      {
        path: _.relativePath,
        caseSensitive: _.caseSensitive,
        end: !1
      },
      N
    )), !y)
      return null;
    Object.assign(f, y.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Mt([m, y.pathname]),
      pathnameBase: Ap(
        Mt([m, y.pathnameBase])
      ),
      route: x
    }), y.pathnameBase !== "/" && (m = Mt([m, y.pathnameBase]));
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
      (C, { paramName: N, isOptional: y }, x) => {
        if (N === "*") {
          let D = h[x] || "";
          p = m.slice(0, m.length - D.length).replace(/(.)\/+$/, "$1");
        }
        const I = h[x];
        return y && !I ? C[N] = void 0 : C[N] = (I || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function Ip(l, o = !1, s = !0) {
  Et(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, _, C, N) => {
      if (c.push({ paramName: h, isOptional: _ != null }), _) {
        let y = N.charAt(C + p.length);
        return y && y !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
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
    return Et(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), l;
  }
}
function Yt(l, o) {
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
  } = typeof l == "string" ? An(l) : l, m;
  return s ? (s = Bd(s), s.startsWith("/") ? m = vd(s.substring(1), "/") : m = vd(s, o)) : m = o, {
    pathname: m,
    search: Fp(c),
    hash: jp(f)
  };
}
function vd(l, o) {
  let s = Oa(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function Bi(l, o, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Op(l) {
  return l.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function rs(l) {
  let o = Op(l);
  return o.map(
    (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Ua(l, o, s, c = !1) {
  let f;
  typeof l == "string" ? f = An(l) : (f = { ...l }, Pe(
    !f.pathname || !f.pathname.includes("?"),
    Bi("?", "pathname", "search", f)
  ), Pe(
    !f.pathname || !f.pathname.includes("#"),
    Bi("#", "pathname", "hash", f)
  ), Pe(
    !f.search || !f.search.includes("#"),
    Bi("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let y = o.length - 1;
    if (!c && p.startsWith("..")) {
      let x = p.split("/");
      for (; x[0] === ".."; )
        x.shift(), y -= 1;
      f.pathname = x.join("/");
    }
    h = y >= 0 ? o[y] : "/";
  }
  let _ = zp(f, h), C = p && p !== "/" && p.endsWith("/"), N = (m || p === ".") && s.endsWith("/");
  return !_.pathname.endsWith("/") && (C || N) && (_.pathname += "/"), _;
}
var Bd = (l) => l.replace(/\/\/+/g, "/"), Mt = (l) => Bd(l.join("/")), Oa = (l) => l.replace(/\/+$/, ""), Ap = (l) => Oa(l).replace(/^\/*/, "/"), Fp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, jp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Up = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Bp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Wp(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Mt(o) || "/";
}
var Wd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Hd(l, o) {
  let s = l;
  if (typeof s != "string" || !Dp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (Wd)
    try {
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), h = Yt(p.pathname, o);
      p.origin === m.origin && h != null ? s = h + p.search + p.hash : f = !0;
    } catch {
      Et(
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
var Vd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Vd
);
var Hp = [
  "GET",
  ...Vd
];
new Set(Hp);
var fr = v.createContext(null);
fr.displayName = "DataRouter";
var Ba = v.createContext(null);
Ba.displayName = "DataRouterState";
var bd = v.createContext(!1);
function Vp() {
  return v.useContext(bd);
}
var qd = v.createContext({
  isTransitioning: !1
});
qd.displayName = "ViewTransition";
var bp = v.createContext(
  /* @__PURE__ */ new Map()
);
bp.displayName = "Fetchers";
var qp = v.createContext(null);
qp.displayName = "Await";
var mt = v.createContext(
  null
);
mt.displayName = "Navigation";
var dl = v.createContext(
  null
);
dl.displayName = "Location";
var jt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
jt.displayName = "Route";
var ls = v.createContext(null);
ls.displayName = "RouteError";
var Qd = "REACT_ROUTER_ERROR", Qp = "REDIRECT", Yp = "ROUTE_ERROR_RESPONSE";
function Kp(l) {
  if (l.startsWith(`${Qd}:${Qp}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function Gp(l) {
  if (l.startsWith(
    `${Qd}:${Yp}:{`
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
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = v.useContext(mt), { hash: f, pathname: m, search: p } = fl(l, { relative: o }), h = m;
  return s !== "/" && (h = m === "/" ? s : Mt([s, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function mr() {
  return v.useContext(dl) != null;
}
function wt() {
  return Pe(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(dl).location;
}
var Yd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Kd(l) {
  v.useContext(mt).static || v.useLayoutEffect(l);
}
function pr() {
  let { isDataRoute: l } = v.useContext(jt);
  return l ? ch() : Jp();
}
function Jp() {
  Pe(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(fr), { basename: o, navigator: s } = v.useContext(mt), { matches: c } = v.useContext(jt), { pathname: f } = wt(), m = JSON.stringify(rs(c)), p = v.useRef(!1);
  return Kd(() => {
    p.current = !0;
  }), v.useCallback(
    (_, C = {}) => {
      if (Et(p.current, Yd), !p.current) return;
      if (typeof _ == "number") {
        s.go(_);
        return;
      }
      let N = Ua(
        _,
        JSON.parse(m),
        f,
        C.relative === "path"
      );
      l == null && o !== "/" && (N.pathname = N.pathname === "/" ? o : Mt([o, N.pathname])), (C.replace ? s.replace : s.push)(
        N,
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
  let { matches: s } = v.useContext(jt), { pathname: c } = wt(), f = JSON.stringify(rs(s));
  return v.useMemo(
    () => Ua(
      l,
      JSON.parse(f),
      c,
      o === "path"
    ),
    [l, f, c, o]
  );
}
function Zp(l, o) {
  return Gd(l, o);
}
function Gd(l, o, s) {
  var E;
  Pe(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(mt), { matches: f } = v.useContext(jt), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", _ = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let M = C && C.path || "";
    Jd(
      h,
      !C || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`
    );
  }
  let N = wt(), y;
  if (o) {
    let M = typeof o == "string" ? An(o) : o;
    Pe(
      _ === "/" || ((E = M.pathname) == null ? void 0 : E.startsWith(_)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ), y = M;
  } else
    y = N;
  let x = y.pathname || "/", I = x;
  if (_ !== "/") {
    let M = _.replace(/^\//, "").split("/");
    I = "/" + x.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let D = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (M) => Object.assign(M, {
        route: s.manifest[M.route.id] || M.route
      })
    )
  ) : Fd(l, { pathname: I });
  Et(
    C || D != null,
    `No routes matched location "${y.pathname}${y.search}${y.hash}" `
  ), Et(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let $ = lh(
    D && D.map(
      (M) => Object.assign({}, M, {
        params: Object.assign({}, p, M.params),
        pathname: Mt([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            M.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathname
        ]),
        pathnameBase: M.pathnameBase === "/" ? _ : Mt([
          _,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            M.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathnameBase
        ])
      })
    ),
    f,
    s
  );
  return o && $ ? /* @__PURE__ */ v.createElement(
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
          ...y
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    $
  ) : $;
}
function eh() {
  let l = uh(), o = Bp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ v.createElement("pre", { style: f }, s) : null, p);
}
var th = /* @__PURE__ */ v.createElement(eh, null), Xd = class extends v.Component {
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
    let o = l !== void 0 ? /* @__PURE__ */ v.createElement(jt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      ls.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(nh, { error: l }, o) : o;
  }
};
Xd.contextType = bd;
var Wi = /* @__PURE__ */ new WeakMap();
function nh({
  children: l,
  error: o
}) {
  let { basename: s } = v.useContext(mt);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = Kp(o.digest);
    if (c) {
      let f = Wi.get(o);
      if (f) throw f;
      let m = Hd(c.location, s);
      if (Wd && !Wi.get(o))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw Wi.set(o, p), p;
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
  let c = v.useContext(fr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ v.createElement(jt.Provider, { value: l }, s);
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
    let N = f.findIndex(
      (y) => y.route.id && (m == null ? void 0 : m[y.route.id]) !== void 0
    );
    Pe(
      N >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, N + 1)
    );
  }
  let p = !1, h = -1;
  if (s && c) {
    p = c.renderFallback;
    for (let N = 0; N < f.length; N++) {
      let y = f[N];
      if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = N), y.route.id) {
        let { loaderData: x, errors: I } = c, D = y.route.loader && !x.hasOwnProperty(y.route.id) && (!I || I[y.route.id] === void 0);
        if (y.route.lazy || D) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let _ = s == null ? void 0 : s.onError, C = c && _ ? (N, y) => {
    var x, I;
    _(N, {
      location: c.location,
      params: ((I = (x = c.matches) == null ? void 0 : x[0]) == null ? void 0 : I.params) ?? {},
      pattern: Wp(c.matches),
      errorInfo: y
    });
  } : void 0;
  return f.reduceRight(
    (N, y, x) => {
      let I, D = !1, $ = null, E = null;
      c && (I = m && y.route.id ? m[y.route.id] : void 0, $ = y.route.errorElement || th, p && (h < 0 && x === 0 ? (Jd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), D = !0, E = null) : h === x && (D = !0, E = y.route.hydrateFallbackElement || null)));
      let M = o.concat(f.slice(0, x + 1)), S = () => {
        let z;
        return I ? z = $ : D ? z = E : y.route.Component ? z = /* @__PURE__ */ v.createElement(y.route.Component, null) : y.route.element ? z = y.route.element : z = N, /* @__PURE__ */ v.createElement(
          rh,
          {
            match: y,
            routeContext: {
              outlet: N,
              matches: M,
              isDataRoute: c != null
            },
            children: z
          }
        );
      };
      return c && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? /* @__PURE__ */ v.createElement(
        Xd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: $,
          error: I,
          children: S(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          onError: C
        }
      ) : S();
    },
    null
  );
}
function as(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ah(l) {
  let o = v.useContext(fr);
  return Pe(o, as(l)), o;
}
function oh(l) {
  let o = v.useContext(Ba);
  return Pe(o, as(l)), o;
}
function ih(l) {
  let o = v.useContext(jt);
  return Pe(o, as(l)), o;
}
function os(l) {
  let o = ih(l), s = o.matches[o.matches.length - 1];
  return Pe(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function sh() {
  return os(
    "useRouteId"
    /* UseRouteId */
  );
}
function uh() {
  var c;
  let l = v.useContext(ls), o = oh(
    "useRouteError"
    /* UseRouteError */
  ), s = os(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[s];
}
function ch() {
  let { router: l } = ah(
    "useNavigate"
    /* UseNavigateStable */
  ), o = os(
    "useNavigate"
    /* UseNavigateStable */
  ), s = v.useRef(!1);
  return Kd(() => {
    s.current = !0;
  }), v.useCallback(
    async (f, m = {}) => {
      Et(s.current, Yd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var yd = {};
function Jd(l, o, s) {
  !o && !yd[l] && (yd[l] = !0, Et(!1, s));
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
  return Gd(l, void 0, {
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
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = v.useContext(mt);
  Et(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = v.useContext(jt), { pathname: p } = wt(), h = pr(), _ = Ua(
    l,
    rs(m),
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
    !mr(),
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
  typeof s == "string" && (s = An(s));
  let {
    pathname: C = "/",
    search: N = "",
    hash: y = "",
    state: x = null,
    key: I = "default",
    mask: D
  } = s, $ = v.useMemo(() => {
    let E = Yt(C, h);
    return E == null ? null : {
      location: {
        pathname: E,
        search: N,
        hash: y,
        state: x,
        key: I,
        mask: D
      },
      navigationType: c
    };
  }, [h, C, N, y, x, I, c, D]);
  return Et(
    $ != null,
    `<Router basename="${h}"> is not able to match the URL "${C}${N}${y}" because it does not start with the basename, so the <Router> won't render anything.`
  ), $ == null ? null : /* @__PURE__ */ v.createElement(mt.Provider, { value: _ }, /* @__PURE__ */ v.createElement(dl.Provider, { children: o, value: $ }));
}
function mh({
  children: l,
  location: o
}) {
  return Zp(es(l), o);
}
function es(l, o = []) {
  let s = [];
  return v.Children.forEach(l, (c, f) => {
    if (!v.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === v.Fragment) {
      s.push.apply(
        s,
        es(c.props.children, m)
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
    c.props.children && (p.children = es(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var $a = "get", Da = "application/x-www-form-urlencoded";
function Wa(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function ph(l) {
  return Wa(l) && l.tagName.toLowerCase() === "button";
}
function hh(l) {
  return Wa(l) && l.tagName.toLowerCase() === "form";
}
function vh(l) {
  return Wa(l) && l.tagName.toLowerCase() === "input";
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
function Hi(l) {
  return l != null && !Eh.has(l) ? (Et(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`
  ), null) : l;
}
function wh(l, o) {
  let s, c, f, m, p;
  if (hh(l)) {
    let h = l.getAttribute("action");
    c = h ? Yt(h, o) : null, s = l.getAttribute("method") || $a, f = Hi(l.getAttribute("enctype")) || Da, m = new FormData(l);
  } else if (ph(l) || vh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let _ = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = _ ? Yt(_, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || $a, f = Hi(l.getAttribute("formenctype")) || Hi(h.getAttribute("enctype")) || Da, m = new FormData(h, l), !_h()) {
      let { name: C, type: N, value: y } = l;
      if (N === "image") {
        let x = C ? `${C}.` : "";
        m.append(`${x}x`, "0"), m.append(`${x}y`, "0");
      } else C && m.append(C, y);
    }
  } else {
    if (Wa(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = $a, c = null, f = Da, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function Zd(l, o, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Yt(f.pathname, o) === "/" ? f.pathname = `${Oa(o)}/_root.${c}` : f.pathname = `${Oa(f.pathname)}.${c}`, f;
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
function Sh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Ch(l, o, s) {
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
    c.flat(1).filter(Sh).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function gd(l, o, s, c, f, m) {
  let p = (_, C) => s[C] ? _.route.id !== s[C].route.id : !0, h = (_, C) => {
    var N;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== _.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((N = s[C].route.path) == null ? void 0 : N.endsWith("*")) && s[C].params["*"] !== _.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (_, C) => p(_, C) || h(_, C)
  ) : m === "data" ? o.filter((_, C) => {
    var y;
    let N = c.routes[_.route.id];
    if (!N || !N.hasLoader)
      return !1;
    if (p(_, C) || h(_, C))
      return !0;
    if (_.route.shouldRevalidate) {
      let x = _.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((y = s[0]) == null ? void 0 : y.params) || {},
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
function ss() {
  let l = v.useContext(fr);
  return is(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Ph() {
  let l = v.useContext(Ba);
  return is(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var us = v.createContext(void 0);
us.displayName = "FrameworkContext";
function cs() {
  let l = v.useContext(us);
  return is(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Mh(l, o) {
  let s = v.useContext(us), [c, f] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: _, onMouseEnter: C, onMouseLeave: N, onTouchStart: y } = o, x = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let $ = (M) => {
        M.forEach((S) => {
          p(S.isIntersecting);
        });
      }, E = new IntersectionObserver($, { threshold: 0.5 });
      return x.current && E.observe(x.current), () => {
        E.disconnect();
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
  let I = () => {
    f(!0);
  }, D = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, x, {}] : [
    m,
    x,
    {
      onFocus: rl(h, I),
      onBlur: rl(_, D),
      onMouseEnter: rl(C, I),
      onMouseLeave: rl(N, D),
      onTouchStart: rl(y, I)
    }
  ] : [!1, x, {}];
}
function rl(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function Lh({ page: l, ...o }) {
  let s = Vp(), { router: c } = ss(), f = v.useMemo(
    () => Fd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ v.createElement($h, { page: l, matches: f, ...o }) : /* @__PURE__ */ v.createElement(Dh, { page: l, matches: f, ...o }) : null;
}
function Ih(l) {
  let { manifest: o, routeModules: s } = cs(), [c, f] = v.useState([]);
  return v.useEffect(() => {
    let m = !1;
    return Ch(l, o, s).then(
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
  let c = wt(), { future: f } = cs(), { basename: m } = ss(), p = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = Zd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), _ = !1, C = [];
    for (let N of o)
      typeof N.route.shouldRevalidate == "function" ? _ = !0 : C.push(N.route.id);
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
  let c = wt(), { future: f, manifest: m, routeModules: p } = cs(), { basename: h } = ss(), { loaderData: _, matches: C } = Ph(), N = v.useMemo(
    () => gd(
      l,
      o,
      C,
      m,
      c,
      "data"
    ),
    [l, o, C, m, c]
  ), y = v.useMemo(
    () => gd(
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
    let $ = /* @__PURE__ */ new Set(), E = !1;
    if (o.forEach((S) => {
      var H;
      let z = m.routes[S.route.id];
      !z || !z.hasLoader || (!N.some((V) => V.route.id === S.route.id) && S.route.id in _ && ((H = p[S.route.id]) != null && H.shouldRevalidate) || z.hasClientLoader ? E = !0 : $.add(S.route.id));
    }), $.size === 0)
      return [];
    let M = Zd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return E && $.size > 0 && M.searchParams.set(
      "_routes",
      o.filter((S) => $.has(S.route.id)).map((S) => S.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    _,
    c,
    m,
    N,
    o,
    l,
    p
  ]), I = v.useMemo(
    () => Nh(y, m),
    [y, m]
  ), D = Ih(y);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, x.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "prefetch", as: "fetch", href: $, ...s })), I.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "modulepreload", href: $, ...s })), D.map(({ key: $, link: E }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: $,
        nonce: s.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? s.crossOrigin
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
var ef = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, tf = v.forwardRef(
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
    to: N,
    preventScrollReset: y,
    viewTransition: x,
    defaultShouldRevalidate: I,
    ...D
  }, $) {
    let { basename: E, navigator: M, useTransitions: S } = v.useContext(mt), z = typeof N == "string" && ef.test(N), H = Hd(N, E);
    N = H.to;
    let V = Xp(N, { relative: f }), W = wt(), ae = null;
    if (h) {
      let J = Ua(
        h,
        [],
        W.mask ? W.mask.pathname : "/",
        !0
      );
      E !== "/" && (J.pathname = J.pathname === "/" ? E : Mt([E, J.pathname])), ae = M.createHref(J);
    }
    let [q, fe, ye] = Mh(
      c,
      D
    ), G = Uh(N, {
      replace: p,
      mask: h,
      state: _,
      target: C,
      preventScrollReset: y,
      relative: f,
      viewTransition: x,
      defaultShouldRevalidate: I,
      useTransitions: S
    });
    function ne(J) {
      o && o(J), J.defaultPrevented || G(J);
    }
    let ge = !(H.isExternal || m), Ie = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...D,
          ...ye,
          href: (ge ? ae : void 0) || H.absoluteURL || V,
          onClick: ge ? ne : o,
          ref: zh($, fe),
          target: C,
          "data-discover": !z && s === "render" ? "true" : void 0
        }
      )
    );
    return q && !z ? /* @__PURE__ */ v.createElement(v.Fragment, null, Ie, /* @__PURE__ */ v.createElement(Lh, { page: V })) : Ie;
  }
);
tf.displayName = "Link";
var Ve = v.forwardRef(
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
  }, N) {
    let y = fl(p, { relative: C.relative }), x = wt(), I = v.useContext(Ba), { navigator: D, basename: $ } = v.useContext(mt), E = I != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    bh(y) && h === !0, M = D.encodeLocation ? D.encodeLocation(y).pathname : y.pathname, S = x.pathname, z = I && I.navigation && I.navigation.location ? I.navigation.location.pathname : null;
    s || (S = S.toLowerCase(), z = z ? z.toLowerCase() : null, M = M.toLowerCase()), z && $ && (z = Yt(z, $) || z);
    const H = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let V = S === M || !f && S.startsWith(M) && S.charAt(H) === "/", W = z != null && (z === M || !f && z.startsWith(M) && z.charAt(M.length) === "/"), ae = {
      isActive: V,
      isPending: W,
      isTransitioning: E
    }, q = V ? o : void 0, fe;
    typeof c == "function" ? fe = c(ae) : fe = [
      c,
      V ? "active" : null,
      W ? "pending" : null,
      E ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ye = typeof m == "function" ? m(ae) : m;
    return /* @__PURE__ */ v.createElement(
      tf,
      {
        ...C,
        "aria-current": q,
        className: fe,
        ref: N,
        style: ye,
        to: p,
        viewTransition: h
      },
      typeof _ == "function" ? _(ae) : _
    );
  }
);
Ve.displayName = "NavLink";
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
    preventScrollReset: N,
    viewTransition: y,
    defaultShouldRevalidate: x,
    ...I
  }, D) => {
    let { useTransitions: $ } = v.useContext(mt), E = Hh(), M = Vh(h, { relative: C }), S = p.toLowerCase() === "get" ? "get" : "post", z = typeof h == "string" && ef.test(h), H = (V) => {
      if (_ && _(V), V.defaultPrevented) return;
      V.preventDefault();
      let W = V.nativeEvent.submitter, ae = (W == null ? void 0 : W.getAttribute("formmethod")) || p, q = () => E(W || V.currentTarget, {
        fetcherKey: o,
        method: ae,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: N,
        viewTransition: y,
        defaultShouldRevalidate: x
      });
      $ && s !== !1 ? v.startTransition(() => q()) : q();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: D,
        method: S,
        action: M,
        onSubmit: c ? _ : H,
        ...I,
        "data-discover": !z && l === "render" ? "true" : void 0
      }
    );
  }
);
Fh.displayName = "Form";
function jh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nf(l) {
  let o = v.useContext(fr);
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
  let N = pr(), y = wt(), x = fl(l, { relative: p });
  return v.useCallback(
    (I) => {
      if (gh(I, o)) {
        I.preventDefault();
        let D = s !== void 0 ? s : cl(y) === cl(x), $ = () => N(l, {
          replace: D,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: _
        });
        C ? v.startTransition(() => $()) : $();
      }
    },
    [
      y,
      N,
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
function Hh() {
  let { router: l } = nf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(mt), s = sh(), c = l.fetch, f = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: _, encType: C, formData: N, body: y } = wh(
        m,
        o
      );
      if (p.navigate === !1) {
        let x = p.fetcherKey || Wh();
        await c(x, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: N,
          body: y,
          formMethod: p.method || _,
          formEncType: p.encType || C,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: N,
          body: y,
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
function Vh(l, { relative: o } = {}) {
  let { basename: s } = v.useContext(mt), c = v.useContext(jt);
  Pe(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...fl(l || ".", { relative: o }) }, p = wt();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), _ = h.getAll("index");
    if (_.some((N) => N === "")) {
      h.delete("index"), _.filter((y) => y).forEach((y) => h.append("index", y));
      let N = h.toString();
      m.search = N ? `?${N}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Mt([s, m.pathname])), cl(m);
}
function bh(l, { relative: o } = {}) {
  let s = v.useContext(qd);
  Pe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = nf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = fl(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Yt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Yt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return za(f.pathname, p) != null || za(f.pathname, m) != null;
}
var qh = Ad(), ts = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new WeakMap(), _d = 0, Qh;
function Yh(l) {
  return l ? (Pa.has(l) || (_d += 1, Pa.set(l, _d.toString())), Pa.get(l)) : "0";
}
function Kh(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? Yh(l.root) : l[o]}`).toString();
}
function Gh(l) {
  const o = Kh(l);
  let s = ts.get(o);
  if (!s) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var _;
        const C = h.isIntersecting && f.some((N) => h.intersectionRatio >= N);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = C), [...(_ = c.get(h.target)) != null ? _ : []].forEach((N) => {
          N(C, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), s = {
      id: o,
      observer: m,
      elements: c
    }, ts.set(o, s);
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
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), ts.delete(f));
  };
}
function hr({
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
  var N;
  const [y, x] = v.useState(null), I = v.useRef(C), D = v.useRef(h), [$, E] = v.useState({
    inView: !!h,
    entry: void 0
  });
  I.current = C, v.useEffect(
    () => {
      if (D.current === void 0 && (D.current = h), p || !y) return;
      let H;
      return H = Xh(
        y,
        (V, W) => {
          const ae = D.current;
          D.current = V, !(ae === void 0 && !V) && (E({
            inView: V,
            entry: W
          }), I.current && I.current(V, W), W.isIntersecting && m && H && (H(), H = void 0));
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
        H && H();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(l) ? l.toString() : l,
      y,
      f,
      c,
      m,
      p,
      s,
      _,
      o
    ]
  );
  const M = (N = $.entry) == null ? void 0 : N.target, S = v.useRef(void 0);
  !y && M && !m && !p && S.current !== M && (S.current = M, E({
    inView: !!h,
    entry: void 0
  }), D.current = h);
  const z = [x, $.inView, $.entry];
  return z.ref = z[0], z.inView = z[1], z.entry = z[2], z;
}
const kt = (l = 768) => {
  const [o, s] = v.useState(
    window.innerWidth <= l
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), o;
}, rf = v.createContext(null);
function ml() {
  const l = v.useContext(rf);
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
    async (x = 1, I = !1) => {
      s(!0);
      try {
        const D = Jh(
          await l._getShort(
            "get_script_actions_short",
            x
          )
        );
        f(($) => !I || !$ ? D : {
          ...D,
          script_actions: [
            ...$.script_actions,
            ...D.script_actions
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
    updateScript: async (x, I) => {
      await l._update(x, "update_script_action", I), await p(1);
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
const ev = "_subtitle_g5b3f_1", tv = "_card_g5b3f_6", nv = "_content_g5b3f_50", rv = "_title_g5b3f_58", lv = "_arrow_g5b3f_64", ll = {
  subtitle: ev,
  card: tv,
  content: nv,
  title: rv,
  arrow: lv
}, lf = ({
  title: l,
  subTitle: o,
  onClick: s
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    className: ll.card,
    onClick: s
  },
  /* @__PURE__ */ u.createElement("div", { className: ll.content }, /* @__PURE__ */ u.createElement("div", { className: ll.title }, l), /* @__PURE__ */ u.createElement("div", { className: ll.subtitle }, o)),
  /* @__PURE__ */ u.createElement("div", { className: ll.arrow }, "→")
), av = "_button_2udlt_1", ov = "_full_2udlt_32", iv = "_primary_2udlt_37", sv = "_secondary_2udlt_50", uv = "_ghost_2udlt_62", Vi = {
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
        ${Vi.button}
        ${Vi[o]}
        ${s ? Vi.full : ""}
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
}, vr = ({
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
)), mv = "_overlay_49s9e_1", pv = "_modal_49s9e_13", hv = "_sm_49s9e_27", vv = "_md_49s9e_31", yv = "_lg_49s9e_35", gv = "_xl_49s9e_39", _v = "_header_49s9e_43", Ev = "_title_49s9e_53", wv = "_body_49s9e_60", kv = "_footer_49s9e_67", Sv = "_close_49s9e_77", gn = {
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
  close: Sv
}, Kt = ({
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
    className: gn.overlay,
    onClick: o
  },
  /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${gn.modal} ${gn[m]}`,
      onClick: (p) => p.stopPropagation()
    },
    /* @__PURE__ */ u.createElement("div", { className: gn.header }, s && /* @__PURE__ */ u.createElement("h2", { className: gn.title }, s), /* @__PURE__ */ u.createElement(
      se,
      {
        variant: "ghost",
        className: gn.close,
        onClick: o
      },
      "✕"
    )),
    /* @__PURE__ */ u.createElement("div", { className: gn.body }, f),
    c && /* @__PURE__ */ u.createElement("div", { className: gn.footer }, c)
  )
) : null), Cv = "_overlay_w83z1_1", Nv = "_sheet_w83z1_11", xv = "_handle_w83z1_21", $n = {
  overlay: Cv,
  sheet: Nv,
  handle: xv
}, af = ({
  open: l,
  onClose: o,
  children: s
}) => {
  const [c, f] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), _ = v.useRef(0), [C, N] = v.useState(0);
  v.useEffect(() => {
    if (l)
      f(!0), requestAnimationFrame(() => {
        p(!0);
      }), document.body.style.overflow = "hidden";
    else {
      p(!1);
      const D = setTimeout(() => {
        f(!1);
      }, 300);
      return document.body.style.overflow = "", () => clearTimeout(D);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [l]);
  const y = (D) => {
    h.current = D.touches[0].clientY;
  }, x = (D) => {
    _.current = D.touches[0].clientY;
    const $ = _.current - h.current;
    $ > 0 && N($);
  }, I = () => {
    C > 120 && o(), N(0);
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
        onClick: (D) => D.stopPropagation(),
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ u.createElement(
        "div",
        {
          className: $n.handleArea,
          onTouchStart: y,
          onTouchMove: x,
          onTouchEnd: I
        },
        /* @__PURE__ */ u.createElement("div", { className: $n.handle })
      ),
      /* @__PURE__ */ u.createElement("div", { className: $n.content }, s)
    )
  ) : null;
}, Tv = "_content_1p38v_1", Rv = "_title_1p38v_7", Pv = "_actions_1p38v_14", bi = {
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
  const p = kt();
  if (!l) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: bi.content }, /* @__PURE__ */ u.createElement("h3", { className: bi.title }, s), /* @__PURE__ */ u.createElement("div", { className: bi.actions }, /* @__PURE__ */ u.createElement(
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
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(af, { open: o, onClose: c }, h) : /* @__PURE__ */ u.createElement(
    Kt,
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
}, Ft = ({
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
}, Dv = "_field_lqqcp_1", zv = "_label_lqqcp_8", Ov = "_input_lqqcp_16", Av = "_error_lqqcp_50", Fv = "_errorText_lqqcp_63", al = {
  field: Dv,
  label: zv,
  input: Ov,
  error: Av,
  errorText: Fv
}, Ce = ({
  label: l,
  error: o,
  className: s = "",
  id: c,
  ...f
}) => {
  const m = v.useId(), p = c ?? m;
  return /* @__PURE__ */ u.createElement("div", { className: al.field }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: p,
      className: al.label
    },
    l
  ), /* @__PURE__ */ u.createElement(
    "input",
    {
      id: p,
      ...f,
      className: `
          ${al.input}
          ${o ? al.error : ""}
          ${s}
        `
    }
  ), o && /* @__PURE__ */ u.createElement("span", { className: al.errorText }, o));
}, jv = "_wrapper_1vsqt_1", Uv = "_labelRow_1vsqt_6", Bv = "_label_1vsqt_6", Wv = "_selectedTitle_1vsqt_25", Hv = "_dropdown_1vsqt_34", Vv = "_option_1vsqt_49", bv = "_title_1vsqt_71", qv = "_uuid_1vsqt_76", Qv = "_hint_1vsqt_77", At = {
  wrapper: jv,
  labelRow: Uv,
  label: Bv,
  selectedTitle: Wv,
  dropdown: Hv,
  option: Vv,
  title: bv,
  uuid: qv,
  hint: Qv
}, dr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = ["assistant_commands"],
  minQueryLength: f = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: _
}) => {
  const C = ml(), [N, y] = v.useState([]), [x, I] = v.useState(!1), [D, $] = v.useState(!1), [E, M] = v.useState(null), [S, z] = v.useState(!1), H = v.useRef(0), V = v.useRef(null), W = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (W.length < f) {
      y([]), I(!1);
      return;
    }
    if (!S) return;
    const q = H.current + 1;
    H.current = q;
    const fe = window.setTimeout(async () => {
      $(!0);
      try {
        let ye = [];
        for (const ne of c) {
          const ge = await C.searchAssistantCommands(W, ne), Ie = Array.isArray(ge == null ? void 0 : ge.data) ? ge.data : [];
          ye.push(...Ie);
        }
        if (ye.length === N.length && ye.every((ne, ge) => ne.uuid === N[ge].uuid)) return;
        y(ye), I(ye.length > 0);
      } finally {
        H.current === q && $(!1);
      }
    }, 250);
    return () => window.clearTimeout(fe);
  }, [C, W, c, f]);
  const ae = (q) => {
    const fe = h ? h(q) : q.uuid;
    m(fe), p == null || p(q), I(!1);
  };
  return v.useEffect(() => {
    if (!x) return;
    const q = () => {
      V.current && M(V.current.getBoundingClientRect());
    };
    return q(), window.addEventListener("resize", q), window.addEventListener("scroll", q, !0), () => {
      window.removeEventListener("resize", q), window.removeEventListener("scroll", q, !0);
    };
  }, [x]), /* @__PURE__ */ u.createElement("div", { ref: V, className: At.wrapper }, /* @__PURE__ */ u.createElement("div", { className: At.labelRow }, /* @__PURE__ */ u.createElement("span", { className: At.label }, l), s && /* @__PURE__ */ u.createElement("span", { className: At.selectedTitle }, s)), /* @__PURE__ */ u.createElement(
    Ce,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: _,
      onBlur: () => window.setTimeout(() => I(!1), 150),
      onFocus: () => {
        z(!0), I(N.length > 0);
      },
      onChange: (q) => m(q.target.value)
    }
  ), x && E && qh.createPortal(
    /* @__PURE__ */ u.createElement(
      "div",
      {
        className: At.dropdown,
        style: {
          position: "fixed",
          left: E.left,
          top: E.bottom + 6,
          width: E.width,
          zIndex: 200001
        }
      },
      N.map((q) => /* @__PURE__ */ u.createElement(
        "button",
        {
          key: q.uuid,
          type: "button",
          className: At.option,
          onMouseDown: (fe) => fe.preventDefault(),
          onClick: () => ae(q)
        },
        /* @__PURE__ */ u.createElement("span", { className: At.title }, q.title || "Без названия"),
        /* @__PURE__ */ u.createElement("span", { className: At.uuid }, q.uuid),
        q.mappingType && /* @__PURE__ */ u.createElement("span", { className: At.uuid }, "mappingType: ", q.mappingType)
      ))
    ),
    document.body
  ), D && /* @__PURE__ */ u.createElement("span", { className: At.hint }, "Поиск..."));
}, Yv = "_field_xxbds_1", Kv = "_row_xxbds_5", Gv = "_inputWrapper_xxbds_11", Xv = "_deleteButton_xxbds_15", _n = {
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
  }, N = () => {
    c({
      ...l,
      children_direct_type: void 0
    });
  };
  return /* @__PURE__ */ u.createElement(
    Ft,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ u.createElement("div", { className: _n.field }, /* @__PURE__ */ u.createElement(
      dr,
      {
        label: "parent_type",
        value: l.parent_type ?? "",
        searchSource: ["search_assistant_commands"],
        minQueryLength: 3,
        error: p == null ? void 0 : p.parent_type,
        onChange: (y) => c({
          ...l,
          parent_type: y
        }),
        getSelectedValue: (y) => y.actionType ?? y.uuid,
        onSelect: (y) => c({
          ...l,
          parent_type: y.actionType ?? y.uuid
        })
      }
    )),
    /* @__PURE__ */ u.createElement("div", { className: _n.field }, h ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: _n.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: _n.inputWrapper }, /* @__PURE__ */ u.createElement(
        dr,
        {
          label: "children_type",
          value: l.children_type ?? "",
          searchSource: ["search_assistant_sub_commands"],
          minQueryLength: 3,
          error: p == null ? void 0 : p.children_type,
          onChange: (y) => c({
            ...l,
            children_type: y
          }),
          getSelectedValue: (y) => y.actionType ?? y.uuid,
          onSelect: (y) => c({
            ...l,
            children_type: y.actionType ?? y.uuid
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
    /* @__PURE__ */ u.createElement("div", { className: _n.field }, _ ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: _n.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: _n.inputWrapper }, /* @__PURE__ */ u.createElement(
        dr,
        {
          label: "children_direct_type",
          value: l.children_direct_type ?? "",
          searchSource: ["search_assistant_sub_direct_controls"],
          minQueryLength: 3,
          error: p == null ? void 0 : p.children_direct_type,
          onChange: (y) => c({
            ...l,
            children_direct_type: y
          }),
          getSelectedValue: (y) => y.mappingType ?? y.uuid,
          onSelect: (y) => c({
            ...l,
            children_direct_type: y.mappingType ?? y.uuid
          })
        }
      )),
      /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: N
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
        className: _n.deleteButton,
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
const of = (...l) => l.filter((o, s, c) => !!o && o.trim() !== "" && c.indexOf(o) === s).join(" ").trim();
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
const Ed = (l) => {
  const o = ey(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qi = {
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
      strokeWidth: N = 2,
      absoluteStrokeWidth: y = !1,
      color: x = "currentColor",
      className: I = ""
    } = ry() ?? {}, D = c ?? y ? Number(s ?? N) * 24 / Number(o ?? C) : s ?? N;
    return v.createElement(
      "svg",
      {
        ref: _,
        ...qi,
        width: o ?? C ?? qi.width,
        height: o ?? C ?? qi.height,
        stroke: l ?? x,
        strokeWidth: D,
        className: of("lucide", I, f),
        ...!m && !ty(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([$, E]) => v.createElement($, E)),
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
const Lt = (l, o) => {
  const s = v.forwardRef(
    ({ className: c, ...f }, m) => v.createElement(ly, {
      ref: m,
      iconNode: o,
      className: of(
        `lucide-${Zv(Ed(l))}`,
        `lucide-${l}`,
        c
      ),
      ...f
    })
  );
  return s.displayName = Ed(l), s;
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
], sf = Lt("alarm-clock", ay);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], iy = Lt("arrow-left", oy);
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
], ol = Lt("bot", sy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], cy = Lt("chevron-down", uy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], fy = Lt("clock-3", dy);
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
], py = Lt("command", my);
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
], vy = Lt("file-code-corner", hy);
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
], gy = Lt("house", yy);
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
], uf = Lt("settings", _y);
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
], wy = Lt("timer", Ey);
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
], Sy = Lt("workflow", ky), Cy = "_dropdown_x51vc_2", Ny = "_label_x51vc_9", xy = "_wrapper_x51vc_17", Ty = "_select_x51vc_21", Ry = "_arrow_x51vc_61", Py = "_error_x51vc_81", My = "_errorText_x51vc_99", Dn = {
  dropdown: Cy,
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
const Iy = "_form_xh0jo_1", $y = "_section_xh0jo_7", Dy = "_sectionTitle_xh0jo_18", zy = "_conditions_xh0jo_37", Oy = "_addCondition_xh0jo_43", cr = {
  form: Iy,
  section: $y,
  sectionTitle: Dy,
  conditions: zy,
  addCondition: Oy
}, Ay = ({
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
  }), [C, N] = v.useState({
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
    }), N({
      conditions: []
    });
  }, [o, l]);
  const y = (E) => {
    _(E);
  }, x = () => {
    y({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, I = (E, M) => {
    const S = [...h.conditions];
    S[E] = M, y({
      ...h,
      conditions: S
    });
  }, D = (E) => {
    const M = h.conditions.filter(
      (S, z) => z !== E
    );
    y({
      ...h,
      conditions: M.length > 0 ? M : [
        {
          parent_type: ""
        }
      ]
    });
  }, $ = () => {
    const E = {
      conditions: []
    };
    return h.name.trim() || (E.name = "Обязательное поле"), h.script_entity_id || (E.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (M, S) => {
        const z = {};
        M.parent_type.trim() || (z.parent_type = "Обязательное поле"), M.children_type !== void 0 && !M.children_type.trim() && (z.children_type = "Обязательное поле"), M.children_direct_type !== void 0 && !M.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), E.conditions[S] = z;
      }
    ), N(E), !E.name && !E.script_entity_id && E.conditions.every(
      (M) => Object.keys(M).length === 0
    );
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: p,
      title: c ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ u.createElement(
        se,
        {
          disabled: f,
          onClick: () => {
            $() && (m == null || m(h));
          }
        },
        "Сохранить"
      )
    },
    /* @__PURE__ */ u.createElement("div", { className: cr.form }, /* @__PURE__ */ u.createElement("div", { className: cr.section }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название",
        value: h.name,
        error: C.name,
        onChange: (E) => y({
          ...h,
          name: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ly,
      {
        label: "Скрипт",
        error: C.script_entity_id,
        options: s.map(
          (E) => ({
            label: E.name,
            value: E.entity_id
          })
        ),
        value: h.script_entity_id,
        onSelect: (E) => y({
          ...h,
          script_entity_id: E
        })
      }
    )), /* @__PURE__ */ u.createElement("div", { className: cr.section }, /* @__PURE__ */ u.createElement("h3", { className: cr.sectionTitle }, "Условия"), /* @__PURE__ */ u.createElement("div", { className: cr.conditions }, h.conditions.map(
      (E, M, S) => /* @__PURE__ */ u.createElement(
        Jv,
        {
          key: M,
          index: M,
          condition: E,
          defaultOpen: !c,
          errors: C.conditions[M],
          onChange: (z) => I(
            M,
            z
          ),
          onDelete: () => D(M),
          totalCount: S.length
        }
      )
    )), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        className: cr.addCondition,
        onClick: x
      },
      "+ Добавить условие"
    )))
  );
}, Fy = "_header_1m7ok_1", jy = "_title_1m7ok_15", Uy = "_backButton_1m7ok_22", By = "_homeButton_1m7ok_23", Ia = {
  header: Fy,
  title: jy,
  backButton: Uy,
  homeButton: By
}, Fn = () => {
  const l = pr(), s = wt().pathname.startsWith("/commands"), c = s ? "Команды" : "Скрипты", f = () => {
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
}, Wy = "_tabs_17nxl_1", Hy = "_dropdown_17nxl_14", Vy = "_tab_17nxl_1", by = "_active_17nxl_43", qy = "_menu_17nxl_53", Qy = "_menuItem_17nxl_80", _e = {
  tabs: Wy,
  dropdown: Hy,
  tab: Vy,
  active: by,
  menu: qy,
  menuItem: Qy
}, Gt = () => {
  if (!kt())
    return /* @__PURE__ */ u.createElement("div", { className: _e.tabs }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(vy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ u.createElement("div", { className: _e.dropdown }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(py, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Команды")
    ), /* @__PURE__ */ u.createElement("div", { className: _e.menu }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(wy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(sf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(uf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Настройки")
    ));
}, Yy = "_nav_gn5m2_1", wd = {
  nav: Yy
}, Xt = () => {
  const l = wt(), o = pr(), [s, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: wd.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/commands/main" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Основные")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/sub" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Второстепенные")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/direct/main" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Прямые")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/settings" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки"))) : /* @__PURE__ */ u.createElement("nav", { className: wd.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/scripts" }, /* @__PURE__ */ u.createElement(Sy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Скрипты")), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ u.createElement(ol, { size: 20 }),
    /* @__PURE__ */ u.createElement("span", null, "Команды")
  ), /* @__PURE__ */ u.createElement(Ve, { to: "/timer" }, /* @__PURE__ */ u.createElement(fy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Таймер")), /* @__PURE__ */ u.createElement(Ve, { to: "/alarm" }, /* @__PURE__ */ u.createElement(sf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Будильник")), /* @__PURE__ */ u.createElement(Ve, { to: "/settings" }, /* @__PURE__ */ u.createElement(uf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки")));
}, Ky = "_container_1nl2q_1", Gy = "_visible_1nl2q_20", kd = {
  container: Ky,
  visible: Gy
}, yr = ({
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
      className: `${kd.container} ${s ? kd.visible : ""}`
    },
    l
  );
}, Xy = "_page_qfpja_7", Jy = "_header_qfpja_15", Zy = "_heading_qfpja_27", eg = "_title_qfpja_32", tg = "_description_qfpja_41", ng = "_actions_qfpja_48", rg = "_list_qfpja_75", ot = {
  page: Xy,
  header: Jy,
  heading: Zy,
  title: eg,
  description: tg,
  actions: ng,
  list: rg
}, lg = () => {
  const l = kt(), { ref: o, inView: s } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = v.useState(), [m, p] = v.useState(!1), [h, _] = v.useState(!1), [C, N] = v.useState({}), [y, x] = v.useState(!1), [I, D] = v.useState(!1), {
    loading: $,
    scripts: E,
    scriptData: M,
    loadScripts: S,
    saveScript: z,
    updateScript: H,
    getScriptAction: V,
    deleteScriptAction: W
  } = Zh();
  v.useEffect(() => {
    !I || !l || !s || $ || !E || E.page >= E.total_pages || S(E.page + 1, !0);
  }, [
    s,
    l,
    $,
    E,
    S
  ]), v.useEffect(() => {
    !$ && E && E.page === 1 && D(!0);
  }, [$, E]);
  const ae = () => {
    f(void 0), x(!1), p(!0);
  }, q = (ne) => {
    _(!0), N(ne);
  }, fe = async (ne) => {
    x(!0);
    const ge = await V(
      ne
    );
    f(ge), p(!0);
  }, ye = async (ne) => {
    if (y) {
      if (!ne.uuid) return;
      const { uuid: ge, ...Ie } = ne;
      await H(ne.uuid, Ie);
    } else
      await z(ne);
    p(!1);
  }, G = async (ne) => {
    ne && await W(ne);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, $ && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement("div", { className: ot.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ot.header }, /* @__PURE__ */ u.createElement("div", { className: ot.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ot.title }, "Сценарии"), /* @__PURE__ */ u.createElement("p", { className: ot.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ot.actions }, l ? /* @__PURE__ */ u.createElement(yr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: ae
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: ae
    },
    "🞢 Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ot.list }, E == null ? void 0 : E.script_actions.map((ne) => /* @__PURE__ */ u.createElement(
    lf,
    {
      key: ne.uuid,
      title: ne.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => q(ne)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    vr,
    {
      page: (E == null ? void 0 : E.page) || 1,
      totalPages: (E == null ? void 0 : E.total_pages) || 1,
      onChange: S
    }
  ), /* @__PURE__ */ u.createElement(
    Mv,
    {
      uuid: C.uuid,
      open: h,
      title: C.title,
      onClose: () => _(!1),
      onEdit: fe,
      onDelete: G
    }
  ), /* @__PURE__ */ u.createElement(
    Ay,
    {
      open: m,
      initialData: c,
      isEdit: y,
      isOptionData: M(),
      loading: $,
      onCancel: () => p(!1),
      onSave: async (ne) => {
        await ye(ne);
      }
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, ag = "_field_1qtfn_1", og = "_label_1qtfn_7", ig = "_select_1qtfn_13", Qi = {
  field: ag,
  label: og,
  select: ig
}, ns = ({
  label: l,
  options: o,
  className: s = "",
  value: c,
  ...f
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ u.createElement("div", { className: Qi.field }, l && /* @__PURE__ */ u.createElement("label", { className: Qi.label }, l), /* @__PURE__ */ u.createElement(
    "select",
    {
      ...f,
      value: m,
      className: `${Qi.select} ${s}`
    },
    !p && /* @__PURE__ */ u.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ u.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, sg = "_switchRow_1lfy8_1", ug = "_input_1lfy8_11", cg = "_track_1lfy8_22", dg = "_thumb_1lfy8_33", fg = "_label_1lfy8_62", il = {
  switchRow: sg,
  input: ug,
  track: cg,
  thumb: dg,
  label: fg
}, On = ({ label: l, className: o = "", ...s }) => /* @__PURE__ */ u.createElement("label", { className: `${il.switchRow} ${o}` }, /* @__PURE__ */ u.createElement("input", { ...s, type: "checkbox", className: il.input }), /* @__PURE__ */ u.createElement("span", { className: il.track, "aria-hidden": "true" }, /* @__PURE__ */ u.createElement("span", { className: il.thumb })), /* @__PURE__ */ u.createElement("span", { className: il.label }, l)), mg = "_field_veq7g_1", pg = "_label_veq7g_7", hg = "_textarea_veq7g_13", vg = "_error_veq7g_40", yg = "_errorText_veq7g_48", sl = {
  field: mg,
  label: pg,
  textarea: hg,
  error: vg,
  errorText: yg
}, Aa = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: sl.field }, l && /* @__PURE__ */ u.createElement("label", { className: sl.label }, l), /* @__PURE__ */ u.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${sl.textarea}
          ${o ? sl.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: sl.errorText }, o)), gg = [
  { label: "default", value: "default" },
  { label: "ha_storage", value: "ha_storage" }
], _g = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], Eg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" }
], wg = "_form_nymr0_1", kg = "_field_nymr0_15", Sg = "_arrayItem_nymr0_37", ul = {
  form: wg,
  field: kg,
  arrayItem: Sg
}, Sd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), cf = ({
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
    if (s[c]) return s[c] ?? Sd();
  }, [s]), [C, N] = v.useState({}), y = (E) => {
    f((M) => ({
      ...M,
      [c]: {
        ...M[c] ?? Sd(),
        ...E
      }
    }));
  }, x = (E, M, S) => {
    const z = [..._[E] ?? []];
    z[M] = { ...z[M], ...S }, y({
      [E]: z
    });
  }, I = (E, M) => {
    y({
      [E]: [..._[E] ?? [], M]
    });
  }, D = (E, M) => {
    y({
      [E]: (_[E] ?? []).filter(
        (S, z) => z !== M
      )
    });
  }, $ = () => {
    var S;
    const E = {};
    return s.title.trim() || (E.title = "Обязательное поле"), (S = _.actionType) != null && S.trim() || (E.actionType = "Обязательное поле"), N(E), Object.keys(E).length === 0;
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(
        se,
        {
          onClick: () => {
            $() && (o ? h() : p());
          }
        },
        o ? "Обновить" : "Сохранить"
      )
    },
    /* @__PURE__ */ u.createElement("div", { className: ul.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: s.title,
        error: C.title,
        onChange: (E) => f({
          ...s,
          title: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      On,
      {
        label: "Завершать диалог",
        checked: _.endStatus,
        onChange: (E) => y({
          endStatus: E.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement(
      On,
      {
        label: "forwardText",
        checked: _.forwardText,
        onChange: (E) => y({
          forwardText: E.target.checked
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: _.actionType,
        error: C.actionType,
        onChange: (E) => y({
          actionType: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ns,
      {
        label: "answerType",
        value: _.answerType,
        options: gg,
        onChange: (E) => y({
          answerType: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: ul.field }, /* @__PURE__ */ u.createElement(
      Aa,
      {
        label: "voiceCommands",
        value: (_.voiceCommands == null ? [] : typeof _.voiceCommands != "object" ? _ == null ? void 0 : _.voiceCommands.split(";") : _ == null ? void 0 : _.voiceCommands).join(`
`),
        onChange: (E) => y({
          voiceCommands: E.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(Ft, { title: "voiceResponseArray", defaultOpen: !0 }, (_.voiceResponseArray ?? []).map((E, M) => /* @__PURE__ */ u.createElement("div", { key: M, className: ul.arrayItem }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: E.actionType,
        onChange: (S) => x("voiceResponseArray", M, {
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Aa,
      {
        label: "voiceResponse",
        value: E.voiceResponse,
        onChange: (S) => x("voiceResponseArray", M, {
          voiceResponse: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("voiceResponseArray", M)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => I("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(Ft, { title: "nextAction", defaultOpen: !0 }, (_.nextAction ?? []).map((E, M) => /* @__PURE__ */ u.createElement("div", { key: M, className: ul.arrayItem }, /* @__PURE__ */ u.createElement(
      ns,
      {
        label: "actionTypeComponent",
        value: E.actionTypeComponent,
        options: Eg,
        onChange: (S) => x("nextAction", M, {
          actionTypeComponent: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: E.actionType,
        onChange: (S) => x("nextAction", M, {
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      dr,
      {
        label: "uuid",
        value: E.uuid,
        searchSource: ["search_assistant_commands", "search_assistant_sub_commands"],
        selectedTitle: E.title,
        onChange: (S) => x("nextAction", M, {
          uuid: S
        }),
        onSelect: (S) => x("nextAction", M, {
          uuid: S.uuid,
          actionType: S.actionType ?? "",
          title: S.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextAction", M)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => I("nextAction", {
          actionTypeComponent: "",
          actionType: "",
          uuid: "",
          title: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(Ft, { title: "nextDirectControl", defaultOpen: !0 }, (_.nextDirectControl ?? []).map((E, M) => /* @__PURE__ */ u.createElement("div", { key: M, className: ul.arrayItem }, /* @__PURE__ */ u.createElement(
      dr,
      {
        label: "uuid",
        value: E.uuid,
        selectedTitle: E.title,
        searchSource: ["search_assistant_sub_direct_controls"],
        onChange: (S) => x("nextDirectControl", M, {
          uuid: S
        }),
        onSelect: (S) => x("nextDirectControl", M, {
          uuid: S.uuid,
          mappingType: S.mappingType ?? "",
          title: S.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "mappingType",
        value: E.mappingType ?? "",
        onChange: (S) => x("nextDirectControl", M, {
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextDirectControl", M)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => I("nextDirectControl", {
          uuid: "",
          actionType: "",
          title: ""
        })
      },
      "Добавить ещё"
    )))
  );
}, Cg = "_content_19r5a_1", Ng = "_title_19r5a_7", xg = "_actions_19r5a_14", Yi = {
  content: Cg,
  title: Ng,
  actions: xg
}, pl = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = kt();
  if (!o) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Yi.content }, /* @__PURE__ */ u.createElement("h3", { className: Yi.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: Yi.actions }, /* @__PURE__ */ u.createElement(
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
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(af, { open: l, onClose: s }, h) : /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    h
  ));
}, Tg = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function hl(l) {
  const o = ml(), [s, c] = v.useState(null), [f, m] = v.useState(!0), p = v.useRef(!1), h = async (I, D = 1, $ = !1) => {
    m(!0);
    try {
      const E = Tg(await o._getShort(`${I}`, D));
      c((M) => !$ || !M ? E : {
        ...E,
        data: [
          ...M.data,
          ...E.data
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
    saveCommand: async (I, D) => await o._save(D, I),
    deleteCommand: async (I, D) => await o._delete(D, I),
    updateCommand: async (I, D) => {
      if (console.log(D), !D.uuid) return;
      const { uuid: $, ...E } = D;
      return await o._update($, I, E);
    },
    editStatusCommand: async (I, D, $) => await o._update_status(I, D, $),
    detailInformationCommand: async (I, D) => await o._getDetail(D, I)
  };
}
const Rg = () => ({
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
    ...Rg(),
    forwardText: !1
  }
}), Pg = () => {
  const l = kt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(
    () => Cd()
  ), [h, _] = v.useState(
    null
  ), { ref: C, inView: N } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: y,
    loadCommands: x,
    deleteCommand: I,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: E,
    editStatusCommand: M,
    commands: S
  } = hl("get_assistant_commands_short"), [z, H] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !N || y || !S || S.page >= S.total_pages || x("get_assistant_commands_short", S.page + 1, !0);
  }, [N, l, y, S, x]), v.useEffect(() => {
    !y && S && S.page === 1 && H(!0);
  }, [y, S]);
  const V = () => {
    f(!1), p(Cd()), s(!0);
  }, W = async (G) => {
    f(!0);
    const ne = await D(
      "get_assistant_command",
      G
    );
    p(ne.data), s(!0);
  }, ae = async (G, ne) => {
    console.log(G, ne), await M(
      "update_assistant_command_status",
      G,
      ne
    ), x("get_assistant_commands_short");
  }, q = async (G) => {
    await I("delete_assistant_command", G), x("get_assistant_commands_short");
  }, fe = async () => {
    await $("save_assistant_command", m), s(!1);
  }, ye = async () => {
    await E("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, y && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement("div", { className: ot.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ot.header }, /* @__PURE__ */ u.createElement("div", { className: ot.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ot.title }, "Комманды"), /* @__PURE__ */ u.createElement("p", { className: ot.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ot.actions }, l ? /* @__PURE__ */ u.createElement(yr, null, /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: V }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: V }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: ot.list }, S == null ? void 0 : S.data.map((G) => /* @__PURE__ */ u.createElement(
    lf,
    {
      key: G.uuid,
      title: G.title,
      subTitle: G.status === !1 ? "Выключена" : "Включена",
      onClick: () => _(G)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    vr,
    {
      page: (S == null ? void 0 : S.page) || 1,
      totalPages: (S == null ? void 0 : S.total_pages) || 1,
      onChange: (G) => x("get_assistant_commands_short", G)
    }
  ), /* @__PURE__ */ u.createElement(
    cf,
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
      onToggleStatus: ae,
      onDelete: q,
      onEdit: (G) => W(G)
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Mg = "_page_qfpja_7", Lg = "_header_qfpja_15", Ig = "_headerTop_qfpja_20", $g = "_heading_qfpja_27", Dg = "_description_qfpja_41", zg = "_state_qfpja_83", te = {
  page: Mg,
  header: Lg,
  headerTop: Ig,
  heading: $g,
  description: Dg,
  state: zg
}, Og = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Nd = () => ({
  status: !1,
  title: "",
  subComponentDialog: {
    ...Og(),
    forwardText: !1
  }
}), Ag = () => {
  const l = kt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Nd()), [h, _] = v.useState(null), { ref: C, inView: N } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: y,
    loadCommands: x,
    deleteCommand: I,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: E,
    editStatusCommand: M,
    commands: S
  } = hl("get_assistant_sub_commands_short"), [z, H] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !N || y || !S || S.page >= S.total_pages || x("get_assistant_sub_commands_short", S.page + 1, !0);
  }, [
    N,
    l,
    y,
    S,
    x
  ]), v.useEffect(() => {
    !y && S && S.page === 1 && H(!0);
  }, [y, S]);
  const V = () => {
    f(!1), p(Nd()), s(!0);
  }, W = async (G) => {
    f(!0);
    const ne = await D("get_assistant_sub_command", G.uuid);
    p(ne.data), s(!0);
  }, ae = async (G, ne) => {
    await M("update_assistant_sub_command_status", G, ne), x("get_assistant_sub_commands_short");
  }, q = async (G) => {
    await I("delete_assistant_sub_command", G), x("get_assistant_sub_commands_short");
  }, fe = async () => {
    await $("save_assistant_sub_command", m), s(!1);
  }, ye = async () => {
    await E("update_assistant_sub_command_status", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement("div", { className: te.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), y && /* @__PURE__ */ u.createElement("div", { className: te.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: te.header }, /* @__PURE__ */ u.createElement("div", { className: te.headerTop }, /* @__PURE__ */ u.createElement("div", { className: te.heading }, /* @__PURE__ */ u.createElement("p", { className: te.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(yr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: V
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: V
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: te.commandList }, S == null ? void 0 : S.data.map((G) => /* @__PURE__ */ u.createElement("div", { key: G.uuid, className: te.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: te.commandButton, onClick: () => W(G) }, /* @__PURE__ */ u.createElement("span", null, G.title), /* @__PURE__ */ u.createElement("small", null, G.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: te.moreButton,
      "aria-label": `Действия команды ${G.title}`,
      onClick: () => _(G)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    vr,
    {
      page: (S == null ? void 0 : S.page) || 1,
      totalPages: (S == null ? void 0 : S.total_pages) || 1,
      onChange: (G) => x("get_assistant_sub_commands_short", G)
    }
  ), /* @__PURE__ */ u.createElement(
    cf,
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
      onToggleStatus: ae,
      onDelete: q
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, xd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Fg = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? xd(), [c]), h = (y) => {
    f((x) => ({
      ...x,
      directControl: {
        ...x.directControl ?? xd(),
        ...y
      }
    }));
  }, _ = (y, x) => {
    const I = [...p.subDirectControl ?? []];
    I[y] = {
      ...I[y],
      ...x
    }, h({
      subDirectControl: I
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
  }, N = (y) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((x, I) => I !== y)
    });
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: o }, "Отмена"), /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ u.createElement("div", { className: te.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: c.title,
        onChange: (y) => f((x) => ({
          ...x,
          title: y.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (y) => h({
          mappingType: y.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ns,
      {
        label: "valueType",
        value: p.valueType,
        options: _g,
        onChange: (y) => h({
          valueType: y.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: te.field }, /* @__PURE__ */ u.createElement(
      Aa,
      {
        label: "voiceCommands",
        rows: 6,
        value: (p.voiceCommands ?? []).join(`
`),
        onChange: (y) => h({
          voiceCommands: y.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(
      On,
      {
        label: "manual",
        checked: p.manual,
        onChange: (y) => h({
          manual: y.target.checked,
          subDirectControl: y.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ u.createElement(Ft, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (y, x) => /* @__PURE__ */ u.createElement("div", { key: x, className: te.arrayItem }, /* @__PURE__ */ u.createElement(
        Ce,
        {
          label: "subMappingType",
          value: y.subMappingType,
          onChange: (I) => _(x, {
            subMappingType: I.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: te.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: te.textarea,
          rows: 3,
          value: y.subVoiceCommands,
          onChange: (I) => _(x, {
            subVoiceCommands: I.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: () => N(x)
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
      dr,
      {
        label: "subDirectControl",
        value: typeof p.subDirectControl == "string" ? p.subDirectControl : "",
        selectedTitle: p.subDirectControlTitle,
        searchSource: "sub_direct_control_samples",
        onChange: (y) => h({
          subDirectControl: y
        }),
        onSelect: (y) => h({
          subDirectControl: y.uuid,
          subDirectControlTitle: y.title ?? ""
        })
      }
    ))
  );
}, Td = () => ({
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
}), jg = () => {
  const l = kt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Td()), [h, _] = v.useState(null), C = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [N, y] = v.useState("main"), x = pr(), { ref: I, inView: D } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: $,
    loadCommands: E,
    deleteCommand: M,
    detailInformationCommand: S,
    saveCommand: z,
    updateCommand: H,
    editStatusCommand: V,
    commands: W
  } = hl("get_assistant_sub_direct_controls_short"), [ae, q] = v.useState(!1);
  v.useEffect(() => {
    !ae || !l || !D || $ || !W || W.page >= W.total_pages || E("get_assistant_sub_direct_controls_short", W.page + 1, !0);
  }, [
    D,
    l,
    $,
    W,
    E
  ]), v.useEffect(() => {
    !$ && W && W.page === 1 && q(!0);
  }, [$, W]);
  const fe = () => {
    f(!1), p(Td()), s(!0);
  }, ye = async (J) => {
    f(!0);
    const $e = await S("get_assistant_sub_direct_control", J.uuid);
    p($e.data), s(!0);
  }, G = async (J, $e) => {
    await V("update_assistant_sub_direct_controls_status", J, $e), E("get_assistant_sub_direct_controls_short");
  }, ne = async (J) => {
    await M("delete_assistant_sub_direct_control", J), E("get_assistant_sub_direct_controls_short");
  }, ge = async () => {
    await z("save_assistant_sub_direct_control", m), s(!1);
  }, Ie = async () => {
    await H("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement("div", { className: te.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), $ && /* @__PURE__ */ u.createElement("div", { className: te.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: te.header }, /* @__PURE__ */ u.createElement("div", { className: te.headerTop }, /* @__PURE__ */ u.createElement("div", { className: te.innerTabs }, C.map((J) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: J.key,
      type: "button",
      className: `${te.innerTab} ${N === J.key ? te.activeInnerTab : ""}`,
      onClick: () => {
        y(J.key), x(`/commands/direct/${J.key === "main" ? "main" : "template"}`);
      }
    },
    J.label
  ))), /* @__PURE__ */ u.createElement("div", { className: te.heading }, /* @__PURE__ */ u.createElement("p", { className: te.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(yr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: te.commandList }, W == null ? void 0 : W.data.map((J) => /* @__PURE__ */ u.createElement("div", { key: J.uuid, className: te.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: te.commandButton, onClick: () => ye(J) }, /* @__PURE__ */ u.createElement("span", null, J.title), /* @__PURE__ */ u.createElement("small", null, J.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: te.moreButton,
      "aria-label": `Действия команды ${J.title}`,
      onClick: () => _(J)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: I, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    vr,
    {
      page: (W == null ? void 0 : W.page) || 1,
      totalPages: (W == null ? void 0 : W.total_pages) || 1,
      onChange: (J) => E("get_assistant_sub_direct_controls_short", J)
    }
  ), /* @__PURE__ */ u.createElement(
    Fg,
    {
      open: o,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Ie : ge
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => _(null),
      onToggleStatus: G,
      onDelete: ne
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Ug = ({
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
  ), h = (y) => {
    f((x) => ({
      ...x,
      subDirectControl: y
    }));
  }, _ = (y, x) => {
    const I = [...p];
    I[y] = {
      ...I[y],
      ...x
    }, h(I);
  }, C = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, N = (y) => {
    h(
      p.filter((x, I) => I !== y)
    );
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: te.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: c.title,
        onChange: (y) => f((x) => ({
          ...x,
          title: y.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ft,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((y, x) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: x,
          className: te.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          Ce,
          {
            label: "subMappingType",
            value: y.subMappingType ?? "",
            onChange: (I) => _(x, {
              subMappingType: I.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          Aa,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof y.subVoiceCommands == "object" ? y.subVoiceCommands : []).join(`
`),
            onChange: (I) => _(x, {
              subVoiceCommands: I.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          se,
          {
            type: "button",
            variant: "ghost",
            onClick: () => N(x)
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
}, Rd = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), Bg = () => {
  const l = kt(), o = pr(), [s, c] = v.useState(!1), [f, m] = v.useState(!1), [p, h] = v.useState(Rd), [_, C] = v.useState(null), [N, y] = v.useState("template"), [x, I] = v.useState(!1), D = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: $, inView: E } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: M,
    loadCommands: S,
    deleteCommand: z,
    detailInformationCommand: H,
    saveCommand: V,
    updateCommand: W,
    editStatusCommand: ae,
    commands: q
  } = hl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !x || !l || !E || M || !q || q.page >= q.total_pages || S(
      "get_assistant_sub_direct_control_samples_short",
      q.page + 1,
      !0
    );
  }, [
    x,
    E,
    l,
    M,
    q,
    S
  ]), v.useEffect(() => {
    !M && q && q.page === 1 && I(!0);
  }, [M, q]);
  const fe = () => {
    m(!1), h(Rd()), c(!0);
  }, ye = async (J) => {
    m(!0);
    const $e = await H(
      "get_assistant_sub_direct_control_sample",
      J.uuid
    );
    h($e.data), c(!0);
  }, G = async (J, $e) => {
    await ae(
      "update_assistant_sub_direct_control",
      J,
      $e
    ), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ne = async (J) => {
    await z(
      "delete_assistant_sub_direct_control_sample",
      J
    ), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ge = async () => {
    await V(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ie = async () => {
    await W(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement("div", { className: te.page }, !l && /* @__PURE__ */ u.createElement(Gt, null), M && /* @__PURE__ */ u.createElement("div", { className: te.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: te.header }, /* @__PURE__ */ u.createElement("div", { className: te.headerTop }, /* @__PURE__ */ u.createElement("div", { className: te.innerTabs }, D.map((J) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: J.key,
      type: "button",
      className: `${te.innerTab} ${N === J.key ? te.activeInnerTab : ""}`,
      onClick: () => {
        y(J.key), o(
          `/commands/direct/${J.key === "main" ? "main" : "template"}`
        );
      }
    },
    J.label
  ))), /* @__PURE__ */ u.createElement("div", { className: te.heading }, /* @__PURE__ */ u.createElement("p", { className: te.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(yr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: te.commandList }, q == null ? void 0 : q.data.map((J) => /* @__PURE__ */ u.createElement(
    "div",
    {
      key: J.uuid,
      className: te.commandTab
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: te.commandButton,
        onClick: () => ye(J)
      },
      /* @__PURE__ */ u.createElement("span", null, J.title),
      /* @__PURE__ */ u.createElement("small", null, J.status === !1 ? "Выключена" : "Включена")
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: te.moreButton,
        onClick: () => C(J)
      },
      "⋯"
    )
  ))), l ? /* @__PURE__ */ u.createElement(
    "div",
    {
      ref: $,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ u.createElement(
    vr,
    {
      page: (q == null ? void 0 : q.page) ?? 1,
      totalPages: (q == null ? void 0 : q.total_pages) ?? 1,
      onChange: (J) => S(
        "get_assistant_sub_direct_control_samples_short",
        J
      )
    }
  ), /* @__PURE__ */ u.createElement(
    Ug,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Ie : ge
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!_,
      command: _,
      onClose: () => C(null),
      onToggleStatus: G,
      onDelete: ne
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Wg = "_form_nymr0_1", Hg = "_field_nymr0_15", Vg = "_textarea_nymr0_24", Ki = {
  form: Wg,
  field: Hg,
  textarea: Vg
}, Pd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), bg = ({
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
    if (s[c]) return s[c] ?? Pd();
  }, [s]), C = (N) => {
    f((y) => ({
      ...y,
      [c]: {
        ...y[c] ?? Pd(),
        ...N
      }
    }));
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Ki.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: s.title,
        onChange: (N) => f({
          ...s,
          title: N.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      On,
      {
        label: "Завершать диалог",
        checked: _.endStatus,
        onChange: (N) => C({
          endStatus: N.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: _.actionType,
        onChange: (N) => C({
          actionType: N.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "answerType",
        value: _.answerType,
        onChange: (N) => C({
          answerType: N.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Ki.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: Ki.textarea,
        rows: 6,
        value: (_.voiceCommands == null ? [] : typeof _.voiceCommands != "object" ? _ == null ? void 0 : _.voiceCommands.split(";") : _ == null ? void 0 : _.voiceCommands).join(`
`),
        onChange: (N) => C({
          voiceCommands: N.target.value.split(`
`)
        })
      }
    )))
  );
}, qg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Md = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...qg(),
    forwardText: !1
  }
}), Qg = () => {
  const l = kt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Md()), [h, _] = v.useState(null), { ref: C, inView: N } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: y,
    loadCommands: x,
    deleteCommand: I,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: E,
    editStatusCommand: M,
    commands: S
  } = hl("get_assistant_settings_short"), [z, H] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !N || y || !S || S.page >= S.total_pages || x("get_assistant_settings_short", S.page + 1, !0);
  }, [
    N,
    l,
    y,
    S,
    x
  ]), v.useEffect(() => {
    !y && S && S.page === 1 && H(!0);
  }, [y, S]);
  const V = () => {
    f(!1), p(Md()), s(!0);
  }, W = async (G) => {
    f(!0);
    const ne = await D("get_assistant_command", G.uuid);
    p(ne.data), s(!0);
  }, ae = async (G, ne) => {
    console.log(G, ne), await M("update_assistant_setting", G, ne), x("get_assistant_settings_short");
  }, q = async (G) => {
    await I("delete_assistant_setting", G), x("get_assistant_settings_short");
  }, fe = async () => {
    await $("save_assistant_setting", m), s(!1);
  }, ye = async () => {
    await E("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement("div", { className: te.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), y && /* @__PURE__ */ u.createElement("div", { className: te.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: te.header }, /* @__PURE__ */ u.createElement("div", { className: te.headerTop }, /* @__PURE__ */ u.createElement("div", { className: te.heading }, /* @__PURE__ */ u.createElement("p", { className: te.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(yr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: V
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: V
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: te.commandList }, S == null ? void 0 : S.data.map((G) => /* @__PURE__ */ u.createElement("div", { key: G.uuid, className: te.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: te.commandButton, onClick: () => W(G) }, /* @__PURE__ */ u.createElement("span", null, G.title), /* @__PURE__ */ u.createElement("small", null, G.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: te.moreButton,
      "aria-label": `Действия команды ${G.title}`,
      onClick: () => _(G)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    vr,
    {
      page: (S == null ? void 0 : S.page) || 1,
      totalPages: (S == null ? void 0 : S.total_pages) || 1,
      onChange: (G) => x("get_assistant_settings_short", G)
    }
  ), /* @__PURE__ */ u.createElement(
    bg,
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
      onToggleStatus: ae,
      onDelete: q
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Yg = "_form_1bj0d_1", Kg = "_field_1bj0d_7", Gg = "_input_1bj0d_13", Xg = "_label_1bj0d_32", ft = {
  form: Yg,
  field: Kg,
  input: Gg,
  label: Xg
}, Jg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ft.form }, /* @__PURE__ */ u.createElement(Ce, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: ft.field }, /* @__PURE__ */ u.createElement("span", { className: ft.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: ft.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: ft.field }, /* @__PURE__ */ u.createElement("span", { className: ft.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: ft.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(Ce, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, Zg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ft.form }, /* @__PURE__ */ u.createElement(Ce, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, e_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ft.form }, /* @__PURE__ */ u.createElement(Ce, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, t_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ft.form }, /* @__PURE__ */ u.createElement(
    Ce,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: ft.field }, /* @__PURE__ */ u.createElement("span", { className: ft.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: ft.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement(On, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement(On, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement(On, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    Ce,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, n_ = "_page_tlhec_1", r_ = {
  page: n_
};
function l_() {
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
const a_ = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, Fa = {
  base_url: "",
  token: ""
}, o_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, Ld = {
  yandex_tts: a_,
  remout: Fa,
  timer_alarm: o_,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, i_ = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), s_ = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), u_ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), c_ = (l) => ({
  yandex_tts: i_(l == null ? void 0 : l.yandex_tts),
  remout: s_(l == null ? void 0 : l.remout),
  timer_alarm: u_(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Gi = (l, o) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== o[f] && (s[f] = l[f]);
  }), s;
}, d_ = (l, o) => {
  const s = {}, c = Gi(l.yandex_tts, o.yandex_tts), f = Gi(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Gi(l.remout ?? Fa, o.remout ?? Fa);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, f_ = () => {
  kt();
  const [l, o] = v.useState(Ld), [s, c] = v.useState(Ld), { settings: f, saveSettings: m } = l_();
  v.useEffect(() => {
    if (!f) return;
    const h = c_(f);
    o(h), c(h);
  }, [f]);
  const p = () => {
    const h = d_(l, s);
    m(h);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(Fn, null), /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: r_.page }, /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement(Ft, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    t_,
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
  )), /* @__PURE__ */ u.createElement(Ft, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    Jg,
    {
      data: l.yandex_tts,
      onChange: (h) => o({ ...l, yandex_tts: h })
    }
  )), l.active_remout && /* @__PURE__ */ u.createElement(Ft, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    Zg,
    {
      data: l.remout ?? Fa,
      onChange: (h) => o({ ...l, remout: h })
    }
  )), /* @__PURE__ */ u.createElement(Ft, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    e_,
    {
      data: l.timer_alarm,
      onChange: (h) => o({ ...l, timer_alarm: h })
    }
  )), /* @__PURE__ */ u.createElement(se, { onClick: p }, "Сохранить")), /* @__PURE__ */ u.createElement(Xt, null));
}, zn = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, m_ = (l) => {
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
}, p_ = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 60), c = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, Xi = (l) => {
  const o = zn(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function ff() {
  const l = ml(), [o, s] = v.useState([]), [c, f] = v.useState([]), [m, p] = v.useState([]), [h, _] = v.useState(!0), C = v.useMemo(() => l.getDevices(), [l]), N = v.useCallback(async () => {
    const z = await l._getShort("get_timer_requests_short", 1, 100), H = await Promise.all(
      Xi(z).map(async (V) => {
        var ae;
        const W = await l._getDetail(V.uuid, "get_timer_request");
        return ((ae = zn(W)) == null ? void 0 : ae.data) ?? zn(W);
      })
    );
    s(H.filter((V) => !!V && V.action_type === "create_timer"));
  }, [l]), y = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_requests_short", 1, 100), H = await Promise.all(
      Xi(z).map(async (V) => {
        var ae;
        const W = await l._getDetail(V.uuid, "get_alarm_request");
        return ((ae = zn(W)) == null ? void 0 : ae.data) ?? zn(W);
      })
    );
    f(H.filter((V) => !!V && V.action_type !== "delete_alarm"));
  }, [l]), x = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_time_widgets_short", 1, 100), H = await Promise.all(
      Xi(z).map(async (V) => {
        var ae;
        const W = await l._getDetail(V.uuid, "get_alarm_time_widget");
        return ((ae = zn(W)) == null ? void 0 : ae.data) ?? zn(W);
      })
    );
    p(H.filter(Boolean));
  }, [l]), I = v.useCallback(async () => {
    _(!0);
    try {
      await Promise.all([N(), y(), x()]);
    } finally {
      _(!1);
    }
  }, [y, x, N]);
  return v.useEffect(() => {
    I();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (z, H, V = 0.3) => {
      await l._save({ name: `Будильник ${H}`, action_type: "create_alarm", device_id: z, status: "on", time: H, volume_start: V }, "save_alarm_request"), await y();
    },
    createTimer: async (z, H) => {
      const V = {
        count_timer: p_(H),
        date_end: m_(H)
      };
      await l._save({ name: `Таймер ${H} мин`, action_type: "create_timer", device_id: z, timer_time: V }, "save_timer_request"), await N();
    },
    deleteAlarm: async (z) => {
      await l._delete(z.uuid, "delete_alarm_request"), await y();
    },
    devices: C,
    loading: h,
    stopTimer: async (z) => {
      await l._delete(z.uuid, "delete_timer_request"), await N();
    },
    timers: o,
    toTimerSeconds: df,
    updateAlarm: async (z, H) => {
      await l._update(z.uuid, "update_alarm_request", { ...z, action_type: "edit_alarm", ...H }), await y();
    }
  };
}
const h_ = "_page_di7r7_1", v_ = "_header_di7r7_11", y_ = "_title_di7r7_18", g_ = "_description_di7r7_25", __ = "_grid_di7r7_31", E_ = "_card_di7r7_37", w_ = "_empty_di7r7_37", k_ = "_cardHeader_di7r7_44", S_ = "_cardTitle_di7r7_51", C_ = "_meta_di7r7_56", N_ = "_time_di7r7_62", x_ = "_form_di7r7_69", T_ = "_field_di7r7_75", R_ = "_label_di7r7_81", P_ = "_select_di7r7_87", M_ = "_input_di7r7_87", L_ = "_quickTabs_di7r7_97", I_ = "_quickTab_di7r7_97", $_ = "_activeQuickTab_di7r7_113", D_ = "_row_di7r7_118", ee = {
  page: h_,
  header: v_,
  title: y_,
  description: g_,
  grid: __,
  card: E_,
  empty: w_,
  cardHeader: k_,
  cardTitle: S_,
  meta: C_,
  time: N_,
  form: x_,
  field: T_,
  label: R_,
  select: P_,
  input: M_,
  quickTabs: L_,
  quickTab: I_,
  activeQuickTab: $_,
  row: D_,
  switch: "_switch_di7r7_124"
}, z_ = [5, 10, 15, 30, 60], O_ = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, A_ = () => {
  kt();
  const { createTimer: l, devices: o, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = ff(), [p, h] = v.useState(!1), [_, C] = v.useState(""), [N, y] = v.useState(5), [x, I] = v.useState({});
  v.useEffect(() => {
    I((E) => Object.fromEntries(f.map((M) => [M.uuid, E[M.uuid] ?? m(M.timer_time)])));
  }, [f, m]), v.useEffect(() => {
    const E = window.setInterval(() => {
      I((M) => Object.fromEntries(Object.entries(M).map(([S, z]) => [S, Math.max(0, z - 1)])));
    }, 1e3);
    return () => window.clearInterval(E);
  }, []);
  const D = v.useMemo(() => new Map(o.map((E) => [E.id, E.name])), [o]), $ = async () => {
    _ && (await l(_, N), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: ee.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: ee.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.grid }, f.length ? f.map((E) => /* @__PURE__ */ u.createElement("div", { className: ee.card, key: E.uuid }, /* @__PURE__ */ u.createElement("div", { className: ee.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: ee.cardTitle }, E.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: ee.meta }, "Устройство: ", D.get(E.device_id) || E.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(E) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: ee.time }, O_(x[E.uuid] ?? m(E.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: ee.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(Kt, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(se, { onClick: $, disabled: !_ }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: ee.select, value: _, onChange: (E) => C(E.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((E) => /* @__PURE__ */ u.createElement("option", { key: E.id, value: E.id }, E.name)))), /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: ee.quickTabs }, z_.map((E) => /* @__PURE__ */ u.createElement("button", { key: E, type: "button", className: `${ee.quickTab} ${N === E ? ee.activeQuickTab : ""}`, onClick: () => y(E) }, E, " мин")))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "number", min: "1", value: N, onChange: (E) => y(Number(E.target.value) || 1) })))), /* @__PURE__ */ u.createElement(Xt, null));
}, F_ = () => {
  kt();
  const { alarmTimeWidgets: l, alarms: o, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = ff(), [h, _] = v.useState(!1), [C, N] = v.useState(""), [y, x] = v.useState("08:00"), [I, D] = v.useState(0.3), $ = v.useMemo(() => {
    const S = l.flatMap((z) => z.time || []);
    return Array.from(new Set(S)).filter(Boolean);
  }, [l]), E = v.useMemo(() => new Map(f.map((S) => [S.id, S.name])), [f]), M = async () => {
    !C || !y || (await s(C, y, I), _(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: ee.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: ee.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(se, { onClick: () => _(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.grid }, o.length ? o.map((S) => /* @__PURE__ */ u.createElement("div", { className: ee.card, key: S.uuid }, /* @__PURE__ */ u.createElement("div", { className: ee.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: ee.cardTitle }, S.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: ee.meta }, "Устройство: ", E.get(S.device_id) || S.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(S) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${ee.row} ${ee.meta}` }, /* @__PURE__ */ u.createElement("input", { className: ee.switch, type: "checkbox", checked: S.status !== "off", onChange: (z) => p(S, { status: z.target.checked ? "on" : "off" }) }), S.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "time", value: S.time, onChange: (z) => p(S, { time: z.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: ee.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: S.volume_start ?? 0.3,
      onChange: (z) => p(S, { volume_start: Number(z.target.value) })
    }
  )))) : /* @__PURE__ */ u.createElement("div", { className: ee.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ u.createElement(Kt, { open: h, onClose: () => _(!1), title: "Создать будильник", footer: /* @__PURE__ */ u.createElement(se, { onClick: M, disabled: !C || !y }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: ee.quickTabs }, $.length ? $.map((S) => /* @__PURE__ */ u.createElement("button", { key: S, type: "button", className: `${ee.quickTab} ${y === S ? ee.activeQuickTab : ""}`, onClick: () => x(S) }, S)) : /* @__PURE__ */ u.createElement("span", { className: ee.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: ee.select, value: C, onChange: (S) => N(S.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((S) => /* @__PURE__ */ u.createElement("option", { key: S.id, value: S.id }, S.name)))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "time", value: y, onChange: (S) => x(S.target.value) })), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: ee.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: I,
      onChange: (S) => D(Number(S.target.value))
    }
  )))), /* @__PURE__ */ u.createElement(Xt, null));
}, j_ = () => /* @__PURE__ */ u.createElement(mh, null, /* @__PURE__ */ u.createElement(
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
    element: /* @__PURE__ */ u.createElement(lg, null)
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
    element: /* @__PURE__ */ u.createElement(Pg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Ag, null)
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
    element: /* @__PURE__ */ u.createElement(jg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement(Bg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(Qg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(A_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(F_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(f_, null)
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
)), U_ = () => /* @__PURE__ */ u.createElement(j_, null);
class B_ {
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
const W_ = 1, ja = 2, Ji = 3, H_ = 4, V_ = 5;
function b_(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function q_() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function Q_(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Id(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function Y_() {
  return {
    type: "ping"
  };
}
function K_(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const G_ = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, X_ = "auth_invalid", J_ = "auth_ok";
function Z_(l) {
  if (!l.auth)
    throw H_;
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
    const N = () => {
      if (_.removeEventListener("close", N), C) {
        h(ja);
        return;
      }
      if (m === 0) {
        h(W_);
        return;
      }
      const I = m === -1 ? -1 : m - 1;
      setTimeout(() => f(I, p, h), 1e3);
    }, y = async (I) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), _.send(JSON.stringify(b_(o.accessToken)));
      } catch (D) {
        C = D === ja, _.close();
      }
    }, x = async (I) => {
      const D = JSON.parse(I.data);
      switch (D.type) {
        case X_:
          C = !0, _.close();
          break;
        case J_:
          _.removeEventListener("open", y), _.removeEventListener("message", x), _.removeEventListener("close", N), _.removeEventListener("error", N), _.haVersion = D.ha_version, G_(_.haVersion, 2022, 9) && _.send(JSON.stringify(q_())), p(_);
          break;
      }
    };
    _.addEventListener("open", y), _.addEventListener("message", x), _.addEventListener("close", N), _.addEventListener("error", N);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class e0 {
  constructor(o, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Id(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(K_(Ji, "Connection lost"));
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
                  C.reject && C.reject(Ji);
              }
              h === ja ? this.fireEvent("reconnect-error", h) : m(p + 1);
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
    return this.subscribeMessage(o, Q_(s));
  }
  ping() {
    return this.sendMessagePromise(Y_());
  }
  sendMessage(o, s) {
    if (!this.connected)
      throw Ji;
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
          this.connected && await this.sendMessagePromise(Id(h)), this.commands.delete(h);
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
const t0 = (l) => l * 1e3 + Date.now();
async function n0(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw V_;
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
    throw m.status === 400 || m.status === 403 ? ja : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = t0(p.expires_in), p;
}
class r0 {
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
    const o = await n0(this.data.hassUrl, this.data.clientId, {
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
function l0(l, o) {
  return new r0({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function a0(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: Z_ }, l), s = await o.createSocket(o);
  return new e0(s, o);
}
function o0(l) {
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
async function i0() {
  const s = l0(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await a0({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function s0({
  children: l,
  hass: o
}) {
  const s = v.useRef(null), [c, f] = v.useState(!1);
  return v.useEffect(() => {
    async function m() {
      const p = o ? o0(o) : await i0();
      s.current ? s.current.setHass(p) : s.current = new B_(p), f(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !s.current ? /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...") : /* @__PURE__ */ u.createElement(rf.Provider, { value: s.current }, l);
}
function u0({ hass: l }) {
  return /* @__PURE__ */ u.createElement(Ah, null, /* @__PURE__ */ u.createElement(s0, { hass: l }, /* @__PURE__ */ u.createElement(U_, null)));
}
const $d = "dialog-custom-ui-panel", Dd = "dialog-custom-ui-style";
class c0 extends HTMLElement {
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
    if (c.getElementById(Dd))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Dd, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(u0, { hass: this.hassValue }))
    );
  }
}
customElements.get($d) || customElements.define($d, c0);
