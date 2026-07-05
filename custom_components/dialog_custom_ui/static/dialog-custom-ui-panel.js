function Sd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ri = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function qm() {
  if (Qc) return ce;
  Qc = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function P(S) {
    return S === null || typeof S != "object" ? null : (S = _ && S[_] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, D = {};
  function T(S, O, ue) {
    this.props = S, this.context = O, this.refs = D, this.updater = ue || x;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(S, O) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, O, "setState");
  }, T.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function $() {
  }
  $.prototype = T.prototype;
  function R(S, O, ue) {
    this.props = S, this.context = O, this.refs = D, this.updater = ue || x;
  }
  var j = R.prototype = new $();
  j.constructor = R, L(j, T.prototype), j.isPureReactComponent = !0;
  var W = Array.isArray, V = Object.prototype.hasOwnProperty, ne = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(S, O, ue) {
    var de, pe = {}, he = null, ke = null;
    if (O != null) for (de in O.ref !== void 0 && (ke = O.ref), O.key !== void 0 && (he = "" + O.key), O) V.call(O, de) && !ae.hasOwnProperty(de) && (pe[de] = O[de]);
    var _e = arguments.length - 2;
    if (_e === 1) pe.children = ue;
    else if (1 < _e) {
      for (var Te = Array(_e), it = 0; it < _e; it++) Te[it] = arguments[it + 2];
      pe.children = Te;
    }
    if (S && S.defaultProps) for (de in _e = S.defaultProps, _e) pe[de] === void 0 && (pe[de] = _e[de]);
    return { $$typeof: l, type: S, key: he, ref: ke, props: pe, _owner: ne.current };
  }
  function we(S, O) {
    return { $$typeof: l, type: S.type, key: O, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function Se(S) {
    return typeof S == "object" && S !== null && S.$$typeof === l;
  }
  function X(S) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(ue) {
      return O[ue];
    });
  }
  var ye = /\/+/g;
  function Oe(S, O) {
    return typeof S == "object" && S !== null && S.key != null ? X("" + S.key) : O.toString(36);
  }
  function Fe(S, O, ue, de, pe) {
    var he = typeof S;
    (he === "undefined" || he === "boolean") && (S = null);
    var ke = !1;
    if (S === null) ke = !0;
    else switch (he) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case l:
          case i:
            ke = !0;
        }
    }
    if (ke) return ke = S, pe = pe(ke), S = de === "" ? "." + Oe(ke, 0) : de, W(pe) ? (ue = "", S != null && (ue = S.replace(ye, "$&/") + "/"), Fe(pe, O, ue, "", function(it) {
      return it;
    })) : pe != null && (Se(pe) && (pe = we(pe, ue + (!pe.key || ke && ke.key === pe.key ? "" : ("" + pe.key).replace(ye, "$&/") + "/") + S)), O.push(pe)), 1;
    if (ke = 0, de = de === "" ? "." : de + ":", W(S)) for (var _e = 0; _e < S.length; _e++) {
      he = S[_e];
      var Te = de + Oe(he, _e);
      ke += Fe(he, O, ue, Te, pe);
    }
    else if (Te = P(S), typeof Te == "function") for (S = Te.call(S), _e = 0; !(he = S.next()).done; ) he = he.value, Te = de + Oe(he, _e++), ke += Fe(he, O, ue, Te, pe);
    else if (he === "object") throw O = String(S), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function ie(S, O, ue) {
    if (S == null) return S;
    var de = [], pe = 0;
    return Fe(S, de, "", "", function(he) {
      return O.call(ue, he, pe++);
    }), de;
  }
  function Ie(S) {
    if (S._status === -1) {
      var O = S._result;
      O = O(), O.then(function(ue) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ue);
      }, function(ue) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ue);
      }), S._status === -1 && (S._status = 0, S._result = O);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var oe = { current: null }, B = { transition: null }, re = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: B, ReactCurrentOwner: ne };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: ie, forEach: function(S, O, ue) {
    ie(S, function() {
      O.apply(this, arguments);
    }, ue);
  }, count: function(S) {
    var O = 0;
    return ie(S, function() {
      O++;
    }), O;
  }, toArray: function(S) {
    return ie(S, function(O) {
      return O;
    }) || [];
  }, only: function(S) {
    if (!Se(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, ce.Component = T, ce.Fragment = s, ce.Profiler = f, ce.PureComponent = R, ce.StrictMode = c, ce.Suspense = y, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, ce.act = q, ce.cloneElement = function(S, O, ue) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var de = L({}, S.props), pe = S.key, he = S.ref, ke = S._owner;
    if (O != null) {
      if (O.ref !== void 0 && (he = O.ref, ke = ne.current), O.key !== void 0 && (pe = "" + O.key), S.type && S.type.defaultProps) var _e = S.type.defaultProps;
      for (Te in O) V.call(O, Te) && !ae.hasOwnProperty(Te) && (de[Te] = O[Te] === void 0 && _e !== void 0 ? _e[Te] : O[Te]);
    }
    var Te = arguments.length - 2;
    if (Te === 1) de.children = ue;
    else if (1 < Te) {
      _e = Array(Te);
      for (var it = 0; it < Te; it++) _e[it] = arguments[it + 2];
      de.children = _e;
    }
    return { $$typeof: l, type: S.type, key: pe, ref: he, props: de, _owner: ke };
  }, ce.createContext = function(S) {
    return S = { $$typeof: p, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: m, _context: S }, S.Consumer = S;
  }, ce.createElement = b, ce.createFactory = function(S) {
    var O = b.bind(null, S);
    return O.type = S, O;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(S) {
    return { $$typeof: h, render: S };
  }, ce.isValidElement = Se, ce.lazy = function(S) {
    return { $$typeof: w, _payload: { _status: -1, _result: S }, _init: Ie };
  }, ce.memo = function(S, O) {
    return { $$typeof: C, type: S, compare: O === void 0 ? null : O };
  }, ce.startTransition = function(S) {
    var O = B.transition;
    B.transition = {};
    try {
      S();
    } finally {
      B.transition = O;
    }
  }, ce.unstable_act = q, ce.useCallback = function(S, O) {
    return oe.current.useCallback(S, O);
  }, ce.useContext = function(S) {
    return oe.current.useContext(S);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(S) {
    return oe.current.useDeferredValue(S);
  }, ce.useEffect = function(S, O) {
    return oe.current.useEffect(S, O);
  }, ce.useId = function() {
    return oe.current.useId();
  }, ce.useImperativeHandle = function(S, O, ue) {
    return oe.current.useImperativeHandle(S, O, ue);
  }, ce.useInsertionEffect = function(S, O) {
    return oe.current.useInsertionEffect(S, O);
  }, ce.useLayoutEffect = function(S, O) {
    return oe.current.useLayoutEffect(S, O);
  }, ce.useMemo = function(S, O) {
    return oe.current.useMemo(S, O);
  }, ce.useReducer = function(S, O, ue) {
    return oe.current.useReducer(S, O, ue);
  }, ce.useRef = function(S) {
    return oe.current.useRef(S);
  }, ce.useState = function(S) {
    return oe.current.useState(S);
  }, ce.useSyncExternalStore = function(S, O, ue) {
    return oe.current.useSyncExternalStore(S, O, ue);
  }, ce.useTransition = function() {
    return oe.current.useTransition();
  }, ce.version = "18.3.1", ce;
}
var qc;
function Nd() {
  return qc || (qc = 1, Ri.exports = qm()), Ri.exports;
}
var g = Nd();
const u = /* @__PURE__ */ Sd(g);
var _a = {}, Pi = { exports: {} }, at = {}, Mi = { exports: {} }, Li = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc;
function Ym() {
  return Yc || (Yc = 1, (function(l) {
    function i(B, re) {
      var q = B.length;
      B.push(re);
      e: for (; 0 < q; ) {
        var S = q - 1 >>> 1, O = B[S];
        if (0 < f(O, re)) B[S] = re, B[q] = O, q = S;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function c(B) {
      if (B.length === 0) return null;
      var re = B[0], q = B.pop();
      if (q !== re) {
        B[0] = q;
        e: for (var S = 0, O = B.length, ue = O >>> 1; S < ue; ) {
          var de = 2 * (S + 1) - 1, pe = B[de], he = de + 1, ke = B[he];
          if (0 > f(pe, q)) he < O && 0 > f(ke, pe) ? (B[S] = ke, B[he] = q, S = he) : (B[S] = pe, B[de] = q, S = de);
          else if (he < O && 0 > f(ke, q)) B[S] = ke, B[he] = q, S = he;
          else break e;
        }
      }
      return re;
    }
    function f(B, re) {
      var q = B.sortIndex - re.sortIndex;
      return q !== 0 ? q : B.id - re.id;
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
    var y = [], C = [], w = 1, _ = null, P = 3, x = !1, L = !1, D = !1, T = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(B) {
      for (var re = s(C); re !== null; ) {
        if (re.callback === null) c(C);
        else if (re.startTime <= B) c(C), re.sortIndex = re.expirationTime, i(y, re);
        else break;
        re = s(C);
      }
    }
    function W(B) {
      if (D = !1, j(B), !L) if (s(y) !== null) L = !0, Ie(V);
      else {
        var re = s(C);
        re !== null && oe(W, re.startTime - B);
      }
    }
    function V(B, re) {
      L = !1, D && (D = !1, $(b), b = -1), x = !0;
      var q = P;
      try {
        for (j(re), _ = s(y); _ !== null && (!(_.expirationTime > re) || B && !X()); ) {
          var S = _.callback;
          if (typeof S == "function") {
            _.callback = null, P = _.priorityLevel;
            var O = S(_.expirationTime <= re);
            re = l.unstable_now(), typeof O == "function" ? _.callback = O : _ === s(y) && c(y), j(re);
          } else c(y);
          _ = s(y);
        }
        if (_ !== null) var ue = !0;
        else {
          var de = s(C);
          de !== null && oe(W, de.startTime - re), ue = !1;
        }
        return ue;
      } finally {
        _ = null, P = q, x = !1;
      }
    }
    var ne = !1, ae = null, b = -1, we = 5, Se = -1;
    function X() {
      return !(l.unstable_now() - Se < we);
    }
    function ye() {
      if (ae !== null) {
        var B = l.unstable_now();
        Se = B;
        var re = !0;
        try {
          re = ae(!0, B);
        } finally {
          re ? Oe() : (ne = !1, ae = null);
        }
      } else ne = !1;
    }
    var Oe;
    if (typeof R == "function") Oe = function() {
      R(ye);
    };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(), ie = Fe.port2;
      Fe.port1.onmessage = ye, Oe = function() {
        ie.postMessage(null);
      };
    } else Oe = function() {
      T(ye, 0);
    };
    function Ie(B) {
      ae = B, ne || (ne = !0, Oe());
    }
    function oe(B, re) {
      b = T(function() {
        B(l.unstable_now());
      }, re);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      L || x || (L = !0, Ie(V));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, l.unstable_next = function(B) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = P;
      }
      var q = P;
      P = re;
      try {
        return B();
      } finally {
        P = q;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(B, re) {
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
      var q = P;
      P = B;
      try {
        return re();
      } finally {
        P = q;
      }
    }, l.unstable_scheduleCallback = function(B, re, q) {
      var S = l.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? S + q : S) : q = S, B) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return O = q + O, B = { id: w++, callback: re, priorityLevel: B, startTime: q, expirationTime: O, sortIndex: -1 }, q > S ? (B.sortIndex = q, i(C, B), s(y) === null && B === s(C) && (D ? ($(b), b = -1) : D = !0, oe(W, q - S))) : (B.sortIndex = O, i(y, B), L || x || (L = !0, Ie(V))), B;
    }, l.unstable_shouldYield = X, l.unstable_wrapCallback = function(B) {
      var re = P;
      return function() {
        var q = P;
        P = re;
        try {
          return B.apply(this, arguments);
        } finally {
          P = q;
        }
      };
    };
  })(Li)), Li;
}
var Kc;
function Km() {
  return Kc || (Kc = 1, Mi.exports = Ym()), Mi.exports;
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
var Gc;
function Gm() {
  if (Gc) return at;
  Gc = 1;
  var l = Nd(), i = Km();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, w = {}, _ = {};
  function P(e) {
    return y.call(_, e) ? !0 : y.call(w, e) ? !1 : C.test(e) ? _[e] = !0 : (w[e] = !0, !1);
  }
  function x(e, t, n, r) {
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
  function L(e, t, n, r) {
    if (t === null || typeof t > "u" || x(e, t, n, r)) return !0;
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
  function D(e, t, n, r, a, o, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = d;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new D(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new D(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new D(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new D(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new D(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new D(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      $,
      R
    );
    T[t] = new D(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($, R);
    T[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($, R);
    T[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, n, r) {
    var a = T.hasOwnProperty(t) ? T[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, a, r) && (n = null), r || a === null ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var W = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), ne = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), we = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), X = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, S;
  function O(e) {
    if (S === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      S = t && t[1] || "";
    }
    return `
` + S + e;
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
`), o = r.stack.split(`
`), d = a.length - 1, v = o.length - 1; 1 <= d && 0 <= v && a[d] !== o[v]; ) v--;
        for (; 1 <= d && 0 <= v; d--, v--) if (a[d] !== o[v]) {
          if (d !== 1 || v !== 1)
            do
              if (d--, v--, 0 > v || a[d] !== o[v]) {
                var E = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= d && 0 <= v);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? O(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return O(e.type);
      case 16:
        return O("Lazy");
      case 13:
        return O("Suspense");
      case 19:
        return O("SuspenseList");
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
      case ne:
        return "Portal";
      case we:
        return "Profiler";
      case b:
        return "StrictMode";
      case Oe:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case X:
        return (e.displayName || "Context") + ".Consumer";
      case Se:
        return (e._context.displayName || "Context") + ".Provider";
      case ye:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ie:
        return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
      case Ie:
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
        return t === b ? "StrictMode" : "Mode";
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
  function it(e) {
    var t = Te(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        r = "" + d, o.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(d) {
        r = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function ul(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function Ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Te(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function cl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function $a(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Zi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = _e(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function es(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function za(e, t) {
    es(e, t);
    var n = _e(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Oa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oa(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ts(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Oa(e, t, n) {
    (t !== "number" || cl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var mr = Array.isArray;
  function Dn(e, t, n, r) {
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
  function Aa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ns(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (mr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: _e(n) };
  }
  function rs(e, t) {
    var n = _e(t.value), r = _e(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ls(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function as(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? as(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var dl, os = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (dl = dl || document.createElement("div"), dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function pr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hr = {
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
  }, Gd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hr).forEach(function(e) {
    Gd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
    });
  });
  function is(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
  }
  function ss(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = is(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Xd = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ja(e, t) {
    if (t) {
      if (Xd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ua(e, t) {
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
  var Ba = null;
  function ba(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ha = null, $n = null, zn = null;
  function us(e) {
    if (e = Ar(e)) {
      if (typeof Ha != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = $l(t), Ha(e.stateNode, e.type, t));
    }
  }
  function cs(e) {
    $n ? zn ? zn.push(e) : zn = [e] : $n = e;
  }
  function ds() {
    if ($n) {
      var e = $n, t = zn;
      if (zn = $n = null, us(e), t) for (e = 0; e < t.length; e++) us(t[e]);
    }
  }
  function fs(e, t) {
    return e(t);
  }
  function ms() {
  }
  var Va = !1;
  function ps(e, t, n) {
    if (Va) return e(t, n);
    Va = !0;
    try {
      return fs(e, t, n);
    } finally {
      Va = !1, ($n !== null || zn !== null) && (ms(), ds());
    }
  }
  function vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $l(n);
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
  var Wa = !1;
  if (h) try {
    var yr = {};
    Object.defineProperty(yr, "passive", { get: function() {
      Wa = !0;
    } }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
  } catch {
    Wa = !1;
  }
  function Jd(e, t, n, r, a, o, d, v, E) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (A) {
      this.onError(A);
    }
  }
  var gr = !1, fl = null, ml = !1, Qa = null, Zd = { onError: function(e) {
    gr = !0, fl = e;
  } };
  function ef(e, t, n, r, a, o, d, v, E) {
    gr = !1, fl = null, Jd.apply(Zd, arguments);
  }
  function tf(e, t, n, r, a, o, d, v, E) {
    if (ef.apply(this, arguments), gr) {
      if (gr) {
        var I = fl;
        gr = !1, fl = null;
      } else throw Error(s(198));
      ml || (ml = !0, Qa = I);
    }
  }
  function vn(e) {
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
  function hs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function vs(e) {
    if (vn(e) !== e) throw Error(s(188));
  }
  function nf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = vn(e), t === null) throw Error(s(188));
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
          if (o === n) return vs(a), e;
          if (o === r) return vs(a), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = a, r = o;
      else {
        for (var d = !1, v = a.child; v; ) {
          if (v === n) {
            d = !0, n = a, r = o;
            break;
          }
          if (v === r) {
            d = !0, r = a, n = o;
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = o.child; v; ) {
            if (v === n) {
              d = !0, n = o, r = a;
              break;
            }
            if (v === r) {
              d = !0, r = o, n = a;
              break;
            }
            v = v.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ys(e) {
    return e = nf(e), e !== null ? gs(e) : null;
  }
  function gs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = gs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _s = i.unstable_scheduleCallback, Es = i.unstable_cancelCallback, rf = i.unstable_shouldYield, lf = i.unstable_requestPaint, $e = i.unstable_now, af = i.unstable_getCurrentPriorityLevel, qa = i.unstable_ImmediatePriority, ws = i.unstable_UserBlockingPriority, pl = i.unstable_NormalPriority, of = i.unstable_LowPriority, ks = i.unstable_IdlePriority, hl = null, Pt = null;
  function sf(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function") try {
      Pt.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : df, uf = Math.log, cf = Math.LN2;
  function df(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (uf(e) / cf | 0) | 0;
  }
  var vl = 64, yl = 4194304;
  function _r(e) {
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
  function gl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, o = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var v = d & ~a;
      v !== 0 ? r = _r(v) : (o &= d, o !== 0 && (r = _r(o)));
    } else d = n & ~a, d !== 0 ? r = _r(d) : o !== 0 && (r = _r(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function ff(e, t) {
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
  function mf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var d = 31 - wt(o), v = 1 << d, E = a[d];
      E === -1 ? ((v & n) === 0 || (v & r) !== 0) && (a[d] = ff(v, t)) : E <= t && (e.expiredLanes |= v), o &= ~v;
    }
  }
  function Ya(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Cs() {
    var e = vl;
    return vl <<= 1, (vl & 4194240) === 0 && (vl = 64), e;
  }
  function Ka(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Er(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function pf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - wt(n), o = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
    }
  }
  function Ga(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - wt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var Ee = 0;
  function Ss(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ns, Xa, xs, Ts, Rs, Ja = !1, _l = [], Yt = null, Kt = null, Gt = null, wr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Xt = [], hf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ps(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yt = null;
        break;
      case "dragenter":
      case "dragleave":
        Kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Gt = null;
        break;
      case "pointerover":
      case "pointerout":
        wr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kr.delete(t.pointerId);
    }
  }
  function Cr(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Ar(t), t !== null && Xa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function vf(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Yt = Cr(Yt, e, t, n, r, a), !0;
      case "dragenter":
        return Kt = Cr(Kt, e, t, n, r, a), !0;
      case "mouseover":
        return Gt = Cr(Gt, e, t, n, r, a), !0;
      case "pointerover":
        var o = a.pointerId;
        return wr.set(o, Cr(wr.get(o) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return o = a.pointerId, kr.set(o, Cr(kr.get(o) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Ms(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = hs(n), t !== null) {
            e.blockedOn = t, Rs(e.priority, function() {
              xs(n);
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
  function El(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ba = r, n.target.dispatchEvent(r), Ba = null;
      } else return t = Ar(n), t !== null && Xa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ls(e, t, n) {
    El(e) && n.delete(t);
  }
  function yf() {
    Ja = !1, Yt !== null && El(Yt) && (Yt = null), Kt !== null && El(Kt) && (Kt = null), Gt !== null && El(Gt) && (Gt = null), wr.forEach(Ls), kr.forEach(Ls);
  }
  function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ja || (Ja = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, yf)));
  }
  function Nr(e) {
    function t(a) {
      return Sr(a, e);
    }
    if (0 < _l.length) {
      Sr(_l[0], e);
      for (var n = 1; n < _l.length; n++) {
        var r = _l[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Yt !== null && Sr(Yt, e), Kt !== null && Sr(Kt, e), Gt !== null && Sr(Gt, e), wr.forEach(t), kr.forEach(t), n = 0; n < Xt.length; n++) r = Xt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null); ) Ms(n), n.blockedOn === null && Xt.shift();
  }
  var On = W.ReactCurrentBatchConfig, wl = !0;
  function gf(e, t, n, r) {
    var a = Ee, o = On.transition;
    On.transition = null;
    try {
      Ee = 1, Za(e, t, n, r);
    } finally {
      Ee = a, On.transition = o;
    }
  }
  function _f(e, t, n, r) {
    var a = Ee, o = On.transition;
    On.transition = null;
    try {
      Ee = 4, Za(e, t, n, r);
    } finally {
      Ee = a, On.transition = o;
    }
  }
  function Za(e, t, n, r) {
    if (wl) {
      var a = eo(e, t, n, r);
      if (a === null) go(e, t, r, kl, n), Ps(e, r);
      else if (vf(a, e, t, n, r)) r.stopPropagation();
      else if (Ps(e, r), t & 4 && -1 < hf.indexOf(e)) {
        for (; a !== null; ) {
          var o = Ar(a);
          if (o !== null && Ns(o), o = eo(e, t, n, r), o === null && go(e, t, r, kl, n), o === a) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else go(e, t, r, null, n);
    }
  }
  var kl = null;
  function eo(e, t, n, r) {
    if (kl = null, e = ba(r), e = yn(e), e !== null) if (t = vn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = hs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return kl = e, null;
  }
  function Is(e) {
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
        switch (af()) {
          case qa:
            return 1;
          case ws:
            return 4;
          case pl:
          case of:
            return 16;
          case ks:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null, to = null, Cl = null;
  function Ds() {
    if (Cl) return Cl;
    var e, t = to, n = t.length, r, a = "value" in Jt ? Jt.value : Jt.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[o - r]; r++) ;
    return Cl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Sl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Nl() {
    return !0;
  }
  function $s() {
    return !1;
  }
  function st(e) {
    function t(n, r, a, o, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = d, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(o) : o[v]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Nl : $s, this.isPropagationStopped = $s, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nl);
    }, persist: function() {
    }, isPersistent: Nl }), t;
  }
  var An = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, no = st(An), xr = q({}, An, { view: 0, detail: 0 }), Ef = st(xr), ro, lo, Tr, xl = q({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (ro = e.screenX - Tr.screenX, lo = e.screenY - Tr.screenY) : lo = ro = 0, Tr = e), ro);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : lo;
  } }), zs = st(xl), wf = q({}, xl, { dataTransfer: 0 }), kf = st(wf), Cf = q({}, xr, { relatedTarget: 0 }), ao = st(Cf), Sf = q({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Nf = st(Sf), xf = q({}, An, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Tf = st(xf), Rf = q({}, An, { data: 0 }), Os = st(Rf), Pf = {
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
  }, Mf = {
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
  }, Lf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function If(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lf[e]) ? !!t[e] : !1;
  }
  function oo() {
    return If;
  }
  var Df = q({}, xr, { key: function(e) {
    if (e.key) {
      var t = Pf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oo, charCode: function(e) {
    return e.type === "keypress" ? Sl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), $f = st(Df), zf = q({}, xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = st(zf), Of = q({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oo }), Af = st(Of), Ff = q({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jf = st(Ff), Uf = q({}, xl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bf = st(Uf), bf = [9, 13, 27, 32], io = h && "CompositionEvent" in window, Rr = null;
  h && "documentMode" in document && (Rr = document.documentMode);
  var Hf = h && "TextEvent" in window && !Rr, Fs = h && (!io || Rr && 8 < Rr && 11 >= Rr), js = " ", Us = !1;
  function Bs(e, t) {
    switch (e) {
      case "keyup":
        return bf.indexOf(t.keyCode) !== -1;
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
  function bs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fn = !1;
  function Vf(e, t) {
    switch (e) {
      case "compositionend":
        return bs(t);
      case "keypress":
        return t.which !== 32 ? null : (Us = !0, js);
      case "textInput":
        return e = t.data, e === js && Us ? null : e;
      default:
        return null;
    }
  }
  function Wf(e, t) {
    if (Fn) return e === "compositionend" || !io && Bs(e, t) ? (e = Ds(), Cl = to = Jt = null, Fn = !1, e) : null;
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
        return Fs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Hs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qf[e.type] : t === "textarea";
  }
  function Vs(e, t, n, r) {
    cs(r), t = Ll(t, "onChange"), 0 < t.length && (n = new no("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Pr = null, Mr = null;
  function qf(e) {
    su(e, 0);
  }
  function Tl(e) {
    var t = Hn(e);
    if (Ji(t)) return e;
  }
  function Yf(e, t) {
    if (e === "change") return t;
  }
  var Ws = !1;
  if (h) {
    var so;
    if (h) {
      var uo = "oninput" in document;
      if (!uo) {
        var Qs = document.createElement("div");
        Qs.setAttribute("oninput", "return;"), uo = typeof Qs.oninput == "function";
      }
      so = uo;
    } else so = !1;
    Ws = so && (!document.documentMode || 9 < document.documentMode);
  }
  function qs() {
    Pr && (Pr.detachEvent("onpropertychange", Ys), Mr = Pr = null);
  }
  function Ys(e) {
    if (e.propertyName === "value" && Tl(Mr)) {
      var t = [];
      Vs(t, Mr, e, ba(e)), ps(qf, t);
    }
  }
  function Kf(e, t, n) {
    e === "focusin" ? (qs(), Pr = t, Mr = n, Pr.attachEvent("onpropertychange", Ys)) : e === "focusout" && qs();
  }
  function Gf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tl(Mr);
  }
  function Xf(e, t) {
    if (e === "click") return Tl(t);
  }
  function Jf(e, t) {
    if (e === "input" || e === "change") return Tl(t);
  }
  function Zf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : Zf;
  function Lr(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!y.call(t, a) || !kt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Ks(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gs(e, t) {
    var n = Ks(e);
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
      n = Ks(n);
    }
  }
  function Xs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Js() {
    for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = cl(e.document);
    }
    return t;
  }
  function co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function em(e) {
    var t = Js(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
      if (r !== null && co(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, o = Math.min(r.start, a);
          r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = Gs(n, o);
          var d = Gs(
            n,
            r
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var tm = h && "documentMode" in document && 11 >= document.documentMode, jn = null, fo = null, Ir = null, mo = !1;
  function Zs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || jn == null || jn !== cl(r) || (r = jn, "selectionStart" in r && co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Lr(Ir, r) || (Ir = r, r = Ll(fo, "onSelect"), 0 < r.length && (t = new no("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jn)));
  }
  function Rl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Un = { animationend: Rl("Animation", "AnimationEnd"), animationiteration: Rl("Animation", "AnimationIteration"), animationstart: Rl("Animation", "AnimationStart"), transitionend: Rl("Transition", "TransitionEnd") }, po = {}, eu = {};
  h && (eu = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
  function Pl(e) {
    if (po[e]) return po[e];
    if (!Un[e]) return e;
    var t = Un[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in eu) return po[e] = t[n];
    return e;
  }
  var tu = Pl("animationend"), nu = Pl("animationiteration"), ru = Pl("animationstart"), lu = Pl("transitionend"), au = /* @__PURE__ */ new Map(), ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Zt(e, t) {
    au.set(e, t), m(t, [e]);
  }
  for (var ho = 0; ho < ou.length; ho++) {
    var vo = ou[ho], nm = vo.toLowerCase(), rm = vo[0].toUpperCase() + vo.slice(1);
    Zt(nm, "on" + rm);
  }
  Zt(tu, "onAnimationEnd"), Zt(nu, "onAnimationIteration"), Zt(ru, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(lu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
  function iu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, tf(r, t, void 0, e), e.currentTarget = null;
  }
  function su(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var v = r[d], E = v.instance, I = v.currentTarget;
          if (v = v.listener, E !== o && a.isPropagationStopped()) break e;
          iu(a, v, I), o = E;
        }
        else for (d = 0; d < r.length; d++) {
          if (v = r[d], E = v.instance, I = v.currentTarget, v = v.listener, E !== o && a.isPropagationStopped()) break e;
          iu(a, v, I), o = E;
        }
      }
    }
    if (ml) throw e = Qa, ml = !1, Qa = null, e;
  }
  function Ne(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (uu(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    t && (r |= 4), uu(n, e, r, t);
  }
  var Ml = "_reactListening" + Math.random().toString(36).slice(2);
  function $r(e) {
    if (!e[Ml]) {
      e[Ml] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (lm.has(n) || yo(n, !1, e), yo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ml] || (t[Ml] = !0, yo("selectionchange", !1, t));
    }
  }
  function uu(e, t, n, r) {
    switch (Is(t)) {
      case 1:
        var a = gf;
        break;
      case 4:
        a = _f;
        break;
      default:
        a = Za;
    }
    n = a.bind(null, t, n, e), a = void 0, !Wa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function go(e, t, n, r, a) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var v = r.stateNode.containerInfo;
        if (v === a || v.nodeType === 8 && v.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var E = d.tag;
          if ((E === 3 || E === 4) && (E = d.stateNode.containerInfo, E === a || E.nodeType === 8 && E.parentNode === a)) return;
          d = d.return;
        }
        for (; v !== null; ) {
          if (d = yn(v), d === null) return;
          if (E = d.tag, E === 5 || E === 6) {
            r = o = d;
            continue e;
          }
          v = v.parentNode;
        }
      }
      r = r.return;
    }
    ps(function() {
      var I = o, A = ba(n), F = [];
      e: {
        var z = au.get(e);
        if (z !== void 0) {
          var H = no, K = e;
          switch (e) {
            case "keypress":
              if (Sl(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = $f;
              break;
            case "focusin":
              K = "focus", H = ao;
              break;
            case "focusout":
              K = "blur", H = ao;
              break;
            case "beforeblur":
            case "afterblur":
              H = ao;
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
              H = zs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = kf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Af;
              break;
            case tu:
            case nu:
            case ru:
              H = Nf;
              break;
            case lu:
              H = jf;
              break;
            case "scroll":
              H = Ef;
              break;
            case "wheel":
              H = Bf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Tf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = As;
          }
          var G = (t & 4) !== 0, ze = !G && e === "scroll", N = G ? z !== null ? z + "Capture" : null : z;
          G = [];
          for (var k = I, M; k !== null; ) {
            M = k;
            var U = M.stateNode;
            if (M.tag === 5 && U !== null && (M = U, N !== null && (U = vr(k, N), U != null && G.push(zr(k, U, M)))), ze) break;
            k = k.return;
          }
          0 < G.length && (z = new H(z, K, null, n, A), F.push({ event: z, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", z && n !== Ba && (K = n.relatedTarget || n.fromElement) && (yn(K) || K[At])) break e;
          if ((H || z) && (z = A.window === A ? A : (z = A.ownerDocument) ? z.defaultView || z.parentWindow : window, H ? (K = n.relatedTarget || n.toElement, H = I, K = K ? yn(K) : null, K !== null && (ze = vn(K), K !== ze || K.tag !== 5 && K.tag !== 6) && (K = null)) : (H = null, K = I), H !== K)) {
            if (G = zs, U = "onMouseLeave", N = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (G = As, U = "onPointerLeave", N = "onPointerEnter", k = "pointer"), ze = H == null ? z : Hn(H), M = K == null ? z : Hn(K), z = new G(U, k + "leave", H, n, A), z.target = ze, z.relatedTarget = M, U = null, yn(A) === I && (G = new G(N, k + "enter", K, n, A), G.target = M, G.relatedTarget = ze, U = G), ze = U, H && K) t: {
              for (G = H, N = K, k = 0, M = G; M; M = Bn(M)) k++;
              for (M = 0, U = N; U; U = Bn(U)) M++;
              for (; 0 < k - M; ) G = Bn(G), k--;
              for (; 0 < M - k; ) N = Bn(N), M--;
              for (; k--; ) {
                if (G === N || N !== null && G === N.alternate) break t;
                G = Bn(G), N = Bn(N);
              }
              G = null;
            }
            else G = null;
            H !== null && cu(F, z, H, G, !1), K !== null && ze !== null && cu(F, ze, K, G, !0);
          }
        }
        e: {
          if (z = I ? Hn(I) : window, H = z.nodeName && z.nodeName.toLowerCase(), H === "select" || H === "input" && z.type === "file") var J = Yf;
          else if (Hs(z)) if (Ws) J = Jf;
          else {
            J = Gf;
            var ee = Kf;
          }
          else (H = z.nodeName) && H.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (J = Xf);
          if (J && (J = J(e, I))) {
            Vs(F, J, n, A);
            break e;
          }
          ee && ee(e, z, I), e === "focusout" && (ee = z._wrapperState) && ee.controlled && z.type === "number" && Oa(z, "number", z.value);
        }
        switch (ee = I ? Hn(I) : window, e) {
          case "focusin":
            (Hs(ee) || ee.contentEditable === "true") && (jn = ee, fo = I, Ir = null);
            break;
          case "focusout":
            Ir = fo = jn = null;
            break;
          case "mousedown":
            mo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mo = !1, Zs(F, n, A);
            break;
          case "selectionchange":
            if (tm) break;
          case "keydown":
          case "keyup":
            Zs(F, n, A);
        }
        var te;
        if (io) e: {
          switch (e) {
            case "compositionstart":
              var le = "onCompositionStart";
              break e;
            case "compositionend":
              le = "onCompositionEnd";
              break e;
            case "compositionupdate":
              le = "onCompositionUpdate";
              break e;
          }
          le = void 0;
        }
        else Fn ? Bs(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");
        le && (Fs && n.locale !== "ko" && (Fn || le !== "onCompositionStart" ? le === "onCompositionEnd" && Fn && (te = Ds()) : (Jt = A, to = "value" in Jt ? Jt.value : Jt.textContent, Fn = !0)), ee = Ll(I, le), 0 < ee.length && (le = new Os(le, e, null, n, A), F.push({ event: le, listeners: ee }), te ? le.data = te : (te = bs(n), te !== null && (le.data = te)))), (te = Hf ? Vf(e, n) : Wf(e, n)) && (I = Ll(I, "onBeforeInput"), 0 < I.length && (A = new Os("onBeforeInput", "beforeinput", null, n, A), F.push({ event: A, listeners: I }), A.data = te));
      }
      su(F, t);
    });
  }
  function zr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, o = a.stateNode;
      a.tag === 5 && o !== null && (a = o, o = vr(e, n), o != null && r.unshift(zr(e, o, a)), o = vr(e, t), o != null && r.push(zr(e, o, a))), e = e.return;
    }
    return r;
  }
  function Bn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function cu(e, t, n, r, a) {
    for (var o = t._reactName, d = []; n !== null && n !== r; ) {
      var v = n, E = v.alternate, I = v.stateNode;
      if (E !== null && E === r) break;
      v.tag === 5 && I !== null && (v = I, a ? (E = vr(n, o), E != null && d.unshift(zr(n, E, v))) : a || (E = vr(n, o), E != null && d.push(zr(n, E, v)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var am = /\r\n?/g, om = /\u0000|\uFFFD/g;
  function du(e) {
    return (typeof e == "string" ? e : "" + e).replace(am, `
`).replace(om, "");
  }
  function Il(e, t, n) {
    if (t = du(t), du(e) !== t && n) throw Error(s(425));
  }
  function Dl() {
  }
  var _o = null, Eo = null;
  function wo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ko = typeof setTimeout == "function" ? setTimeout : void 0, im = typeof clearTimeout == "function" ? clearTimeout : void 0, fu = typeof Promise == "function" ? Promise : void 0, sm = typeof queueMicrotask == "function" ? queueMicrotask : typeof fu < "u" ? function(e) {
    return fu.resolve(null).then(e).catch(um);
  } : ko;
  function um(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Co(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), Nr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    Nr(t);
  }
  function en(e) {
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
  function mu(e) {
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
  var bn = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + bn, Or = "__reactProps$" + bn, At = "__reactContainer$" + bn, So = "__reactEvents$" + bn, cm = "__reactListeners$" + bn, dm = "__reactHandles$" + bn;
  function yn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[At] || n[Mt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mu(e); e !== null; ) {
          if (n = e[Mt]) return n;
          e = mu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ar(e) {
    return e = e[Mt] || e[At], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Hn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function $l(e) {
    return e[Or] || null;
  }
  var No = [], Vn = -1;
  function tn(e) {
    return { current: e };
  }
  function xe(e) {
    0 > Vn || (e.current = No[Vn], No[Vn] = null, Vn--);
  }
  function Ce(e, t) {
    Vn++, No[Vn] = e.current, e.current = t;
  }
  var nn = {}, qe = tn(nn), et = tn(!1), gn = nn;
  function Wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, o;
    for (o in n) a[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function zl() {
    xe(et), xe(qe);
  }
  function pu(e, t, n) {
    if (qe.current !== nn) throw Error(s(168));
    Ce(qe, t), Ce(et, n);
  }
  function hu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, ke(e) || "Unknown", a));
    return q({}, n, r);
  }
  function Ol(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nn, gn = qe.current, Ce(qe, e), Ce(et, et.current), !0;
  }
  function vu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = hu(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, xe(et), xe(qe), Ce(qe, e)) : xe(et), Ce(et, n);
  }
  var Ft = null, Al = !1, xo = !1;
  function yu(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  function fm(e) {
    Al = !0, yu(e);
  }
  function rn() {
    if (!xo && Ft !== null) {
      xo = !0;
      var e = 0, t = Ee;
      try {
        var n = Ft;
        for (Ee = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ft = null, Al = !1;
      } catch (a) {
        throw Ft !== null && (Ft = Ft.slice(e + 1)), _s(qa, rn), a;
      } finally {
        Ee = t, xo = !1;
      }
    }
    return null;
  }
  var Qn = [], qn = 0, Fl = null, jl = 0, mt = [], pt = 0, _n = null, jt = 1, Ut = "";
  function En(e, t) {
    Qn[qn++] = jl, Qn[qn++] = Fl, Fl = e, jl = t;
  }
  function gu(e, t, n) {
    mt[pt++] = jt, mt[pt++] = Ut, mt[pt++] = _n, _n = e;
    var r = jt;
    e = Ut;
    var a = 32 - wt(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - wt(t) + a;
    if (30 < o) {
      var d = a - a % 5;
      o = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, jt = 1 << 32 - wt(t) + a | n << a | r, Ut = o + e;
    } else jt = 1 << o | n << a | r, Ut = e;
  }
  function To(e) {
    e.return !== null && (En(e, 1), gu(e, 1, 0));
  }
  function Ro(e) {
    for (; e === Fl; ) Fl = Qn[--qn], Qn[qn] = null, jl = Qn[--qn], Qn[qn] = null;
    for (; e === _n; ) _n = mt[--pt], mt[pt] = null, Ut = mt[--pt], mt[pt] = null, jt = mt[--pt], mt[pt] = null;
  }
  var ut = null, ct = null, Re = !1, Ct = null;
  function _u(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Eu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = en(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: jt, overflow: Ut } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Po(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Mo(e) {
    if (Re) {
      var t = ct;
      if (t) {
        var n = t;
        if (!Eu(e, t)) {
          if (Po(e)) throw Error(s(418));
          t = en(n.nextSibling);
          var r = ut;
          t && Eu(e, t) ? _u(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, ut = e);
        }
      } else {
        if (Po(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Re = !1, ut = e;
      }
    }
  }
  function wu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function Ul(e) {
    if (e !== ut) return !1;
    if (!Re) return wu(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps)), t && (t = ct)) {
      if (Po(e)) throw ku(), Error(s(418));
      for (; t; ) _u(e, t), t = en(t.nextSibling);
    }
    if (wu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ct = en(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ku() {
    for (var e = ct; e; ) e = en(e.nextSibling);
  }
  function Yn() {
    ct = ut = null, Re = !1;
  }
  function Lo(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var mm = W.ReactCurrentBatchConfig;
  function Fr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(d) {
          var v = a.refs;
          d === null ? delete v[o] : v[o] = d;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Bl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Cu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Su(e) {
    function t(N, k) {
      if (e) {
        var M = N.deletions;
        M === null ? (N.deletions = [k], N.flags |= 16) : M.push(k);
      }
    }
    function n(N, k) {
      if (!e) return null;
      for (; k !== null; ) t(N, k), k = k.sibling;
      return null;
    }
    function r(N, k) {
      for (N = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? N.set(k.key, k) : N.set(k.index, k), k = k.sibling;
      return N;
    }
    function a(N, k) {
      return N = fn(N, k), N.index = 0, N.sibling = null, N;
    }
    function o(N, k, M) {
      return N.index = M, e ? (M = N.alternate, M !== null ? (M = M.index, M < k ? (N.flags |= 2, k) : M) : (N.flags |= 2, k)) : (N.flags |= 1048576, k);
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 2), N;
    }
    function v(N, k, M, U) {
      return k === null || k.tag !== 6 ? (k = ki(M, N.mode, U), k.return = N, k) : (k = a(k, M), k.return = N, k);
    }
    function E(N, k, M, U) {
      var J = M.type;
      return J === ae ? A(N, k, M.props.children, U, M.key) : k !== null && (k.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Ie && Cu(J) === k.type) ? (U = a(k, M.props), U.ref = Fr(N, k, M), U.return = N, U) : (U = da(M.type, M.key, M.props, null, N.mode, U), U.ref = Fr(N, k, M), U.return = N, U);
    }
    function I(N, k, M, U) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== M.containerInfo || k.stateNode.implementation !== M.implementation ? (k = Ci(M, N.mode, U), k.return = N, k) : (k = a(k, M.children || []), k.return = N, k);
    }
    function A(N, k, M, U, J) {
      return k === null || k.tag !== 7 ? (k = Rn(M, N.mode, U, J), k.return = N, k) : (k = a(k, M), k.return = N, k);
    }
    function F(N, k, M) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = ki("" + k, N.mode, M), k.return = N, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case V:
            return M = da(k.type, k.key, k.props, null, N.mode, M), M.ref = Fr(N, null, k), M.return = N, M;
          case ne:
            return k = Ci(k, N.mode, M), k.return = N, k;
          case Ie:
            var U = k._init;
            return F(N, U(k._payload), M);
        }
        if (mr(k) || re(k)) return k = Rn(k, N.mode, M, null), k.return = N, k;
        Bl(N, k);
      }
      return null;
    }
    function z(N, k, M, U) {
      var J = k !== null ? k.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return J !== null ? null : v(N, k, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return M.key === J ? E(N, k, M, U) : null;
          case ne:
            return M.key === J ? I(N, k, M, U) : null;
          case Ie:
            return J = M._init, z(
              N,
              k,
              J(M._payload),
              U
            );
        }
        if (mr(M) || re(M)) return J !== null ? null : A(N, k, M, U, null);
        Bl(N, M);
      }
      return null;
    }
    function H(N, k, M, U, J) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return N = N.get(M) || null, v(k, N, "" + U, J);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case V:
            return N = N.get(U.key === null ? M : U.key) || null, E(k, N, U, J);
          case ne:
            return N = N.get(U.key === null ? M : U.key) || null, I(k, N, U, J);
          case Ie:
            var ee = U._init;
            return H(N, k, M, ee(U._payload), J);
        }
        if (mr(U) || re(U)) return N = N.get(M) || null, A(k, N, U, J, null);
        Bl(k, U);
      }
      return null;
    }
    function K(N, k, M, U) {
      for (var J = null, ee = null, te = k, le = k = 0, He = null; te !== null && le < M.length; le++) {
        te.index > le ? (He = te, te = null) : He = te.sibling;
        var ve = z(N, te, M[le], U);
        if (ve === null) {
          te === null && (te = He);
          break;
        }
        e && te && ve.alternate === null && t(N, te), k = o(ve, k, le), ee === null ? J = ve : ee.sibling = ve, ee = ve, te = He;
      }
      if (le === M.length) return n(N, te), Re && En(N, le), J;
      if (te === null) {
        for (; le < M.length; le++) te = F(N, M[le], U), te !== null && (k = o(te, k, le), ee === null ? J = te : ee.sibling = te, ee = te);
        return Re && En(N, le), J;
      }
      for (te = r(N, te); le < M.length; le++) He = H(te, N, le, M[le], U), He !== null && (e && He.alternate !== null && te.delete(He.key === null ? le : He.key), k = o(He, k, le), ee === null ? J = He : ee.sibling = He, ee = He);
      return e && te.forEach(function(mn) {
        return t(N, mn);
      }), Re && En(N, le), J;
    }
    function G(N, k, M, U) {
      var J = re(M);
      if (typeof J != "function") throw Error(s(150));
      if (M = J.call(M), M == null) throw Error(s(151));
      for (var ee = J = null, te = k, le = k = 0, He = null, ve = M.next(); te !== null && !ve.done; le++, ve = M.next()) {
        te.index > le ? (He = te, te = null) : He = te.sibling;
        var mn = z(N, te, ve.value, U);
        if (mn === null) {
          te === null && (te = He);
          break;
        }
        e && te && mn.alternate === null && t(N, te), k = o(mn, k, le), ee === null ? J = mn : ee.sibling = mn, ee = mn, te = He;
      }
      if (ve.done) return n(
        N,
        te
      ), Re && En(N, le), J;
      if (te === null) {
        for (; !ve.done; le++, ve = M.next()) ve = F(N, ve.value, U), ve !== null && (k = o(ve, k, le), ee === null ? J = ve : ee.sibling = ve, ee = ve);
        return Re && En(N, le), J;
      }
      for (te = r(N, te); !ve.done; le++, ve = M.next()) ve = H(te, N, le, ve.value, U), ve !== null && (e && ve.alternate !== null && te.delete(ve.key === null ? le : ve.key), k = o(ve, k, le), ee === null ? J = ve : ee.sibling = ve, ee = ve);
      return e && te.forEach(function(Qm) {
        return t(N, Qm);
      }), Re && En(N, le), J;
    }
    function ze(N, k, M, U) {
      if (typeof M == "object" && M !== null && M.type === ae && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            e: {
              for (var J = M.key, ee = k; ee !== null; ) {
                if (ee.key === J) {
                  if (J = M.type, J === ae) {
                    if (ee.tag === 7) {
                      n(N, ee.sibling), k = a(ee, M.props.children), k.return = N, N = k;
                      break e;
                    }
                  } else if (ee.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Ie && Cu(J) === ee.type) {
                    n(N, ee.sibling), k = a(ee, M.props), k.ref = Fr(N, ee, M), k.return = N, N = k;
                    break e;
                  }
                  n(N, ee);
                  break;
                } else t(N, ee);
                ee = ee.sibling;
              }
              M.type === ae ? (k = Rn(M.props.children, N.mode, U, M.key), k.return = N, N = k) : (U = da(M.type, M.key, M.props, null, N.mode, U), U.ref = Fr(N, k, M), U.return = N, N = U);
            }
            return d(N);
          case ne:
            e: {
              for (ee = M.key; k !== null; ) {
                if (k.key === ee) if (k.tag === 4 && k.stateNode.containerInfo === M.containerInfo && k.stateNode.implementation === M.implementation) {
                  n(N, k.sibling), k = a(k, M.children || []), k.return = N, N = k;
                  break e;
                } else {
                  n(N, k);
                  break;
                }
                else t(N, k);
                k = k.sibling;
              }
              k = Ci(M, N.mode, U), k.return = N, N = k;
            }
            return d(N);
          case Ie:
            return ee = M._init, ze(N, k, ee(M._payload), U);
        }
        if (mr(M)) return K(N, k, M, U);
        if (re(M)) return G(N, k, M, U);
        Bl(N, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, k !== null && k.tag === 6 ? (n(N, k.sibling), k = a(k, M), k.return = N, N = k) : (n(N, k), k = ki(M, N.mode, U), k.return = N, N = k), d(N)) : n(N, k);
    }
    return ze;
  }
  var Kn = Su(!0), Nu = Su(!1), bl = tn(null), Hl = null, Gn = null, Io = null;
  function Do() {
    Io = Gn = Hl = null;
  }
  function $o(e) {
    var t = bl.current;
    xe(bl), e._currentValue = t;
  }
  function zo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Xn(e, t) {
    Hl = e, Io = Gn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), e.firstContext = null);
  }
  function ht(e) {
    var t = e._currentValue;
    if (Io !== e) if (e = { context: e, memoizedValue: t, next: null }, Gn === null) {
      if (Hl === null) throw Error(s(308));
      Gn = e, Hl.dependencies = { lanes: 0, firstContext: e };
    } else Gn = Gn.next = e;
    return t;
  }
  var wn = null;
  function Oo(e) {
    wn === null ? wn = [e] : wn.push(e);
  }
  function xu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Oo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Bt(e, r);
  }
  function Bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ln = !1;
  function Ao(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Tu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (me & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Bt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Oo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Bt(e, n);
  }
  function Vl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ga(e, n);
    }
  }
  function Ru(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? a = o = d : o = o.next = d, n = n.next;
        } while (n !== null);
        o === null ? a = o = t : o = o.next = t;
      } else a = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Wl(e, t, n, r) {
    var a = e.updateQueue;
    ln = !1;
    var o = a.firstBaseUpdate, d = a.lastBaseUpdate, v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var E = v, I = E.next;
      E.next = null, d === null ? o = I : d.next = I, d = E;
      var A = e.alternate;
      A !== null && (A = A.updateQueue, v = A.lastBaseUpdate, v !== d && (v === null ? A.firstBaseUpdate = I : v.next = I, A.lastBaseUpdate = E));
    }
    if (o !== null) {
      var F = a.baseState;
      d = 0, A = I = E = null, v = o;
      do {
        var z = v.lane, H = v.eventTime;
        if ((r & z) === z) {
          A !== null && (A = A.next = {
            eventTime: H,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var K = e, G = v;
            switch (z = t, H = n, G.tag) {
              case 1:
                if (K = G.payload, typeof K == "function") {
                  F = K.call(H, F, z);
                  break e;
                }
                F = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = G.payload, z = typeof K == "function" ? K.call(H, F, z) : K, z == null) break e;
                F = q({}, F, z);
                break e;
              case 2:
                ln = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, z = a.effects, z === null ? a.effects = [v] : z.push(v));
        } else H = { eventTime: H, lane: z, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, A === null ? (I = A = H, E = F) : A = A.next = H, d |= z;
        if (v = v.next, v === null) {
          if (v = a.shared.pending, v === null) break;
          z = v, v = z.next, z.next = null, a.lastBaseUpdate = z, a.shared.pending = null;
        }
      } while (!0);
      if (A === null && (E = F), a.baseState = E, a.firstBaseUpdate = I, a.lastBaseUpdate = A, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      Sn |= d, e.lanes = d, e.memoizedState = F;
    }
  }
  function Pu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var jr = {}, Lt = tn(jr), Ur = tn(jr), Br = tn(jr);
  function kn(e) {
    if (e === jr) throw Error(s(174));
    return e;
  }
  function Fo(e, t) {
    switch (Ce(Br, t), Ce(Ur, e), Ce(Lt, jr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fa(t, e);
    }
    xe(Lt), Ce(Lt, t);
  }
  function Jn() {
    xe(Lt), xe(Ur), xe(Br);
  }
  function Mu(e) {
    kn(Br.current);
    var t = kn(Lt.current), n = Fa(t, e.type);
    t !== n && (Ce(Ur, e), Ce(Lt, n));
  }
  function jo(e) {
    Ur.current === e && (xe(Lt), xe(Ur));
  }
  var Me = tn(0);
  function Ql(e) {
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
  var Uo = [];
  function Bo() {
    for (var e = 0; e < Uo.length; e++) Uo[e]._workInProgressVersionPrimary = null;
    Uo.length = 0;
  }
  var ql = W.ReactCurrentDispatcher, bo = W.ReactCurrentBatchConfig, Cn = 0, Le = null, je = null, Be = null, Yl = !1, br = !1, Hr = 0, pm = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Ho(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function Vo(e, t, n, r, a, o) {
    if (Cn = o, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ql.current = e === null || e.memoizedState === null ? gm : _m, e = n(r, a), br) {
      o = 0;
      do {
        if (br = !1, Hr = 0, 25 <= o) throw Error(s(301));
        o += 1, Be = je = null, t.updateQueue = null, ql.current = Em, e = n(r, a);
      } while (br);
    }
    if (ql.current = Xl, t = je !== null && je.next !== null, Cn = 0, Be = je = Le = null, Yl = !1, t) throw Error(s(300));
    return e;
  }
  function Wo() {
    var e = Hr !== 0;
    return Hr = 0, e;
  }
  function It() {
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
  function Vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qo(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = je, a = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = o.next, o.next = d;
      }
      r.baseQueue = a = o, n.pending = null;
    }
    if (a !== null) {
      o = a.next, r = r.baseState;
      var v = d = null, E = null, I = o;
      do {
        var A = I.lane;
        if ((Cn & A) === A) E !== null && (E = E.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var F = {
            lane: A,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          E === null ? (v = E = F, d = r) : E = E.next = F, Le.lanes |= A, Sn |= A;
        }
        I = I.next;
      } while (I !== null && I !== o);
      E === null ? d = r : E.next = v, kt(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = E, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        o = a.lane, Le.lanes |= o, Sn |= o, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function qo(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        o = e(o, d.action), d = d.next;
      while (d !== a);
      kt(o, t.memoizedState) || (nt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Lu() {
  }
  function Iu(e, t) {
    var n = Le, r = vt(), a = t(), o = !kt(r.memoizedState, a);
    if (o && (r.memoizedState = a, nt = !0), r = r.queue, Yo(zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Be !== null && Be.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wr(9, $u.bind(null, n, r, a, t), void 0, null), be === null) throw Error(s(349));
      (Cn & 30) !== 0 || Du(n, t, a);
    }
    return a;
  }
  function Du(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function $u(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ou(t) && Au(e);
  }
  function zu(e, t, n) {
    return n(function() {
      Ou(t) && Au(e);
    });
  }
  function Ou(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Au(e) {
    var t = Bt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function Fu(e) {
    var t = It();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ym.bind(null, Le, e), [t.memoizedState, e];
  }
  function Wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ju() {
    return vt().memoizedState;
  }
  function Kl(e, t, n, r) {
    var a = It();
    Le.flags |= e, a.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Gl(e, t, n, r) {
    var a = vt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (o = d.destroy, r !== null && Ho(r, d.deps)) {
        a.memoizedState = Wr(t, n, o, r);
        return;
      }
    }
    Le.flags |= e, a.memoizedState = Wr(1 | t, n, o, r);
  }
  function Uu(e, t) {
    return Kl(8390656, 8, e, t);
  }
  function Yo(e, t) {
    return Gl(2048, 8, e, t);
  }
  function Bu(e, t) {
    return Gl(4, 2, e, t);
  }
  function bu(e, t) {
    return Gl(4, 4, e, t);
  }
  function Hu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Vu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gl(4, 4, Hu.bind(null, t, e), n);
  }
  function Ko() {
  }
  function Wu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Qu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function qu(e, t, n) {
    return (Cn & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n) : (kt(n, t) || (n = Cs(), Le.lanes |= n, Sn |= n, e.baseState = !0), t);
  }
  function hm(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = bo.transition;
    bo.transition = {};
    try {
      e(!1), t();
    } finally {
      Ee = n, bo.transition = r;
    }
  }
  function Yu() {
    return vt().memoizedState;
  }
  function vm(e, t, n) {
    var r = cn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ku(e)) Gu(t, n);
    else if (n = xu(e, t, n, r), n !== null) {
      var a = Ze();
      Tt(n, e, r, a), Xu(n, t, r);
    }
  }
  function ym(e, t, n) {
    var r = cn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ku(e)) Gu(t, a);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var d = t.lastRenderedState, v = o(d, n);
        if (a.hasEagerState = !0, a.eagerState = v, kt(v, d)) {
          var E = t.interleaved;
          E === null ? (a.next = a, Oo(t)) : (a.next = E.next, E.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = xu(e, t, a, r), n !== null && (a = Ze(), Tt(n, e, r, a), Xu(n, t, r));
    }
  }
  function Ku(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le;
  }
  function Gu(e, t) {
    br = Yl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Xu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ga(e, n);
    }
  }
  var Xl = { readContext: ht, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, gm = { readContext: ht, useCallback: function(e, t) {
    return It().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: Uu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Kl(
      4194308,
      4,
      Hu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Kl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Kl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = It();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = It();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vm.bind(null, Le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = It();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Fu, useDebugValue: Ko, useDeferredValue: function(e) {
    return It().memoizedState = e;
  }, useTransition: function() {
    var e = Fu(!1), t = e[0];
    return e = hm.bind(null, e[1]), It().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Le, a = It();
    if (Re) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), be === null) throw Error(s(349));
      (Cn & 30) !== 0 || Du(r, t, n);
    }
    a.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return a.queue = o, Uu(zu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Wr(9, $u.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = It(), t = be.identifierPrefix;
    if (Re) {
      var n = Ut, r = jt;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = pm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, _m = {
    readContext: ht,
    useCallback: Wu,
    useContext: ht,
    useEffect: Yo,
    useImperativeHandle: Vu,
    useInsertionEffect: Bu,
    useLayoutEffect: bu,
    useMemo: Qu,
    useReducer: Qo,
    useRef: ju,
    useState: function() {
      return Qo(Vr);
    },
    useDebugValue: Ko,
    useDeferredValue: function(e) {
      var t = vt();
      return qu(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = Qo(Vr)[0], t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lu,
    useSyncExternalStore: Iu,
    useId: Yu,
    unstable_isNewReconciler: !1
  }, Em = { readContext: ht, useCallback: Wu, useContext: ht, useEffect: Yo, useImperativeHandle: Vu, useInsertionEffect: Bu, useLayoutEffect: bu, useMemo: Qu, useReducer: qo, useRef: ju, useState: function() {
    return qo(Vr);
  }, useDebugValue: Ko, useDeferredValue: function(e) {
    var t = vt();
    return je === null ? t.memoizedState = e : qu(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = qo(Vr)[0], t = vt().memoizedState;
    return [e, t];
  }, useMutableSource: Lu, useSyncExternalStore: Iu, useId: Yu, unstable_isNewReconciler: !1 };
  function St(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Go(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Jl = { isMounted: function(e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = cn(e), o = bt(r, a);
    o.payload = t, n != null && (o.callback = n), t = an(e, o, a), t !== null && (Tt(t, e, a, r), Vl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = cn(e), o = bt(r, a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = an(e, o, a), t !== null && (Tt(t, e, a, r), Vl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ze(), r = cn(e), a = bt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = an(e, a, r), t !== null && (Tt(t, e, r, n), Vl(t, e, r));
  } };
  function Ju(e, t, n, r, a, o, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, d) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(a, o) : !0;
  }
  function Zu(e, t, n) {
    var r = !1, a = nn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ht(o) : (a = tt(t) ? gn : qe.current, r = t.contextTypes, o = (r = r != null) ? Wn(e, a) : nn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Jl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ec(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Jl.enqueueReplaceState(t, t.state, null);
  }
  function Xo(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Ao(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = ht(o) : (o = tt(t) ? gn : qe.current, a.context = Wn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Go(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Jl.enqueueReplaceState(a, a.state, null), Wl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
      while (r);
      var a = n;
    } catch (o) {
      a = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Jo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var wm = typeof WeakMap == "function" ? WeakMap : Map;
  function tc(e, t, n) {
    n = bt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      aa || (aa = !0, pi = r), Zo(e, t);
    }, n;
  }
  function nc(e, t, n) {
    n = bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        Zo(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Zo(e, t), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function rc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new wm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = zm.bind(null, e, t, n), t.then(e, e));
  }
  function lc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ac(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = bt(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var km = W.ReactCurrentOwner, nt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Nu(t, null, n, r) : Kn(t, e.child, n, r);
  }
  function oc(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Xn(t, a), r = Vo(e, t, n, r, o, a), n = Wo(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Re && n && To(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function ic(e, t, n, r, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !wi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, sc(e, t, o, r, a)) : (e = da(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & a) === 0) {
      var d = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Lr, n(d, r) && e.ref === t.ref) return Ht(e, t, a);
    }
    return t.flags |= 1, e = fn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sc(e, t, n, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Lr(o, r) && e.ref === t.ref) if (nt = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (nt = !0);
      else return t.lanes = e.lanes, Ht(e, t, a);
    }
    return ei(e, t, n, r, a);
  }
  function uc(e, t, n) {
    var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(tr, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(tr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ce(tr, dt), dt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ce(tr, dt), dt |= r;
    return Je(e, t, a, n), t.child;
  }
  function cc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ei(e, t, n, r, a) {
    var o = tt(n) ? gn : qe.current;
    return o = Wn(t, o), Xn(t, a), n = Vo(e, t, n, r, o, a), r = Wo(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Re && r && To(t), t.flags |= 1, Je(e, t, n, a), t.child);
  }
  function dc(e, t, n, r, a) {
    if (tt(n)) {
      var o = !0;
      Ol(t);
    } else o = !1;
    if (Xn(t, a), t.stateNode === null) ea(e, t), Zu(t, n, r), Xo(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, v = t.memoizedProps;
      d.props = v;
      var E = d.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = ht(I) : (I = tt(n) ? gn : qe.current, I = Wn(t, I));
      var A = n.getDerivedStateFromProps, F = typeof A == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      F || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== r || E !== I) && ec(t, d, r, I), ln = !1;
      var z = t.memoizedState;
      d.state = z, Wl(t, r, d, a), E = t.memoizedState, v !== r || z !== E || et.current || ln ? (typeof A == "function" && (Go(t, n, A, r), E = t.memoizedState), (v = ln || Ju(t, n, v, r, z, E, I)) ? (F || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = E), d.props = r, d.state = E, d.context = I, r = v) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Tu(e, t), v = t.memoizedProps, I = t.type === t.elementType ? v : St(t.type, v), d.props = I, F = t.pendingProps, z = d.context, E = n.contextType, typeof E == "object" && E !== null ? E = ht(E) : (E = tt(n) ? gn : qe.current, E = Wn(t, E));
      var H = n.getDerivedStateFromProps;
      (A = typeof H == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== F || z !== E) && ec(t, d, r, E), ln = !1, z = t.memoizedState, d.state = z, Wl(t, r, d, a);
      var K = t.memoizedState;
      v !== F || z !== K || et.current || ln ? (typeof H == "function" && (Go(t, n, H, r), K = t.memoizedState), (I = ln || Ju(t, n, I, r, z, K, E) || !1) ? (A || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, K, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, K, E)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), d.props = r, d.state = K, d.context = E, r = I) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ti(e, t, n, r, o, a);
  }
  function ti(e, t, n, r, a, o) {
    cc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && vu(t, n, !1), Ht(e, t, o);
    r = t.stateNode, km.current = t;
    var v = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Kn(t, e.child, null, o), t.child = Kn(t, null, v, o)) : Je(e, t, v, o), t.memoizedState = r.state, a && vu(t, n, !0), t.child;
  }
  function fc(e) {
    var t = e.stateNode;
    t.pendingContext ? pu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pu(e, t.context, !1), Fo(e, t.containerInfo);
  }
  function mc(e, t, n, r, a) {
    return Yn(), Lo(a), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function pc(e, t, n) {
    var r = t.pendingProps, a = Me.current, o = !1, d = (t.flags & 128) !== 0, v;
    if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), v ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Ce(Me, a & 1), e === null)
      return Mo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = d) : o = fa(d, r, 0, null), e = Rn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ri(n), t.memoizedState = ni, e) : li(t, d));
    if (a = e.memoizedState, a !== null && (v = a.dehydrated, v !== null)) return Cm(e, t, d, r, v, a, n);
    if (o) {
      o = r.fallback, d = t.mode, a = e.child, v = a.sibling;
      var E = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = E, t.deletions = null) : (r = fn(a, E), r.subtreeFlags = a.subtreeFlags & 14680064), v !== null ? o = fn(v, o) : (o = Rn(o, d, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, d = e.child.memoizedState, d = d === null ? ri(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, o.memoizedState = d, o.childLanes = e.childLanes & ~n, t.memoizedState = ni, r;
    }
    return o = e.child, e = o.sibling, r = fn(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function li(e, t) {
    return t = fa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Zl(e, t, n, r) {
    return r !== null && Lo(r), Kn(t, e.child, null, n), e = li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cm(e, t, n, r, a, o, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Jo(Error(s(422))), Zl(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = fa({ mode: "visible", children: r.children }, a, 0, null), o = Rn(o, a, d, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Kn(t, e.child, null, d), t.child.memoizedState = ri(d), t.memoizedState = ni, o);
    if ((t.mode & 1) === 0) return Zl(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var v = r.dgst;
      return r = v, o = Error(s(419)), r = Jo(o, r, void 0), Zl(e, t, d, r);
    }
    if (v = (d & e.childLanes) !== 0, nt || v) {
      if (r = be, r !== null) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Bt(e, a), Tt(r, e, a, -1));
      }
      return Ei(), r = Jo(Error(s(421))), Zl(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Om.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ct = en(a.nextSibling), ut = t, Re = !0, Ct = null, e !== null && (mt[pt++] = jt, mt[pt++] = Ut, mt[pt++] = _n, jt = e.id, Ut = e.overflow, _n = t), t = li(t, r.children), t.flags |= 4096, t);
  }
  function hc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zo(e.return, t, n);
  }
  function ai(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
  }
  function vc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, o = r.tail;
    if (Je(e, t, r.children, n), r = Me.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hc(e, n, t);
        else if (e.tag === 19) hc(e, n, t);
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
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Ql(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ai(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ql(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        ai(t, !0, n, null, o);
        break;
      case "together":
        ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ea(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Sn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Sm(e, t, n) {
    switch (t.tag) {
      case 3:
        fc(t), Yn();
        break;
      case 5:
        Mu(t);
        break;
      case 1:
        tt(t.type) && Ol(t);
        break;
      case 4:
        Fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Ce(bl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? pc(e, t, n) : (Ce(Me, Me.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
        Ce(Me, Me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return vc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ce(Me, Me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, uc(e, t, n);
    }
    return Ht(e, t, n);
  }
  var yc, oi, gc, _c;
  yc = function(e, t) {
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
  }, oi = function() {
  }, gc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, kn(Lt.current);
      var o = null;
      switch (n) {
        case "input":
          a = $a(e, a), r = $a(e, r), o = [];
          break;
        case "select":
          a = q({}, a, { value: void 0 }), r = q({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          a = Aa(e, a), r = Aa(e, r), o = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Dl);
      }
      ja(n, r);
      var d;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var v = a[I];
        for (d in v) v.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (f.hasOwnProperty(I) ? o || (o = []) : (o = o || []).push(I, null));
      for (I in r) {
        var E = r[I];
        if (v = a != null ? a[I] : void 0, r.hasOwnProperty(I) && E !== v && (E != null || v != null)) if (I === "style") if (v) {
          for (d in v) !v.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in E) E.hasOwnProperty(d) && v[d] !== E[d] && (n || (n = {}), n[d] = E[d]);
        } else n || (o || (o = []), o.push(
          I,
          n
        )), n = E;
        else I === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, v = v ? v.__html : void 0, E != null && v !== E && (o = o || []).push(I, E)) : I === "children" ? typeof E != "string" && typeof E != "number" || (o = o || []).push(I, "" + E) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (f.hasOwnProperty(I) ? (E != null && I === "onScroll" && Ne("scroll", e), o || v === E || (o = [])) : (o = o || []).push(I, E));
      }
      n && (o = o || []).push("style", n);
      var I = o;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, _c = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Qr(e, t) {
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
  function Nm(e, t, n) {
    var r = t.pendingProps;
    switch (Ro(t), t.tag) {
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
        return tt(t.type) && zl(), Ke(t), null;
      case 3:
        return r = t.stateNode, Jn(), xe(et), xe(qe), Bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (yi(Ct), Ct = null))), oi(e, t), Ke(t), null;
      case 5:
        jo(t);
        var a = kn(Br.current);
        if (n = t.type, e !== null && t.stateNode != null) gc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = kn(Lt.current), Ul(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Mt] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
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
                for (a = 0; a < Dr.length; a++) Ne(Dr[a], r);
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
                Zi(r, o), Ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ne("invalid", r);
                break;
              case "textarea":
                ns(r, o), Ne("invalid", r);
            }
            ja(n, o), a = null;
            for (var d in o) if (o.hasOwnProperty(d)) {
              var v = o[d];
              d === "children" ? typeof v == "string" ? r.textContent !== v && (o.suppressHydrationWarning !== !0 && Il(r.textContent, v, e), a = ["children", v]) : typeof v == "number" && r.textContent !== "" + v && (o.suppressHydrationWarning !== !0 && Il(
                r.textContent,
                v,
                e
              ), a = ["children", "" + v]) : f.hasOwnProperty(d) && v != null && d === "onScroll" && Ne("scroll", r);
            }
            switch (n) {
              case "input":
                ul(r), ts(r, o, !0);
                break;
              case "textarea":
                ul(r), ls(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Dl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = as(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[Mt] = t, e[Or] = r, yc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ua(n, r), n) {
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
                  for (a = 0; a < Dr.length; a++) Ne(Dr[a], e);
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
                  Zi(e, r), a = $a(e, r), Ne("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = q({}, r, { value: void 0 }), Ne("invalid", e);
                  break;
                case "textarea":
                  ns(e, r), a = Aa(e, r), Ne("invalid", e);
                  break;
                default:
                  a = r;
              }
              ja(n, a), v = a;
              for (o in v) if (v.hasOwnProperty(o)) {
                var E = v[o];
                o === "style" ? ss(e, E) : o === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && os(e, E)) : o === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && pr(e, E) : typeof E == "number" && pr(e, "" + E) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? E != null && o === "onScroll" && Ne("scroll", e) : E != null && j(e, o, E, d));
              }
              switch (n) {
                case "input":
                  ul(e), ts(e, r, !1);
                  break;
                case "textarea":
                  ul(e), ls(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + _e(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Dn(e, !!r.multiple, o, !1) : r.defaultValue != null && Dn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = Dl);
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
        if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = kn(Br.current), kn(Lt.current), Ul(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (o = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                Il(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Il(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (xe(Me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ku(), Yn(), t.flags |= 98560, o = !1;
          else if (o = Ul(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Mt] = t;
            } else Yn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), o = !1;
          } else Ct !== null && (yi(Ct), Ct = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Ei())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return Jn(), oi(e, t), e === null && $r(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return $o(t.type._context), Ke(t), null;
      case 17:
        return tt(t.type) && zl(), Ke(t), null;
      case 19:
        if (xe(Me), o = t.memoizedState, o === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = o.rendering, d === null) if (r) Qr(o, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Ql(e), d !== null) {
              for (t.flags |= 128, Qr(o, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, d = o.alternate, d === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = d.childLanes, o.lanes = d.lanes, o.child = d.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = d.memoizedProps, o.memoizedState = d.memoizedState, o.updateQueue = d.updateQueue, o.type = d.type, e = d.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ce(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && $e() > nr && (t.flags |= 128, r = !0, Qr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ql(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qr(o, !0), o.tail === null && o.tailMode === "hidden" && !d.alternate && !Re) return Ke(t), null;
          } else 2 * $e() - o.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128, r = !0, Qr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (d.sibling = t.child, t.child = d) : (n = o.last, n !== null ? n.sibling = d : t.child = d, o.last = d);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = $e(), t.sibling = null, n = Me.current, Ce(Me, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return _i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function xm(e, t) {
    switch (Ro(t), t.tag) {
      case 1:
        return tt(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Jn(), xe(et), xe(qe), Bo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return jo(t), null;
      case 13:
        if (xe(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Yn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xe(Me), null;
      case 4:
        return Jn(), null;
      case 10:
        return $o(t.type._context), null;
      case 22:
      case 23:
        return _i(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ta = !1, Ge = !1, Tm = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function er(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      De(e, t, r);
    }
    else n.current = null;
  }
  function ii(e, t, n) {
    try {
      n();
    } catch (r) {
      De(e, t, r);
    }
  }
  var Ec = !1;
  function Rm(e, t) {
    if (_o = wl, e = Js(), co(e)) {
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
          var d = 0, v = -1, E = -1, I = 0, A = 0, F = e, z = null;
          t: for (; ; ) {
            for (var H; F !== n || a !== 0 && F.nodeType !== 3 || (v = d + a), F !== o || r !== 0 && F.nodeType !== 3 || (E = d + r), F.nodeType === 3 && (d += F.nodeValue.length), (H = F.firstChild) !== null; )
              z = F, F = H;
            for (; ; ) {
              if (F === e) break t;
              if (z === n && ++I === a && (v = d), z === o && ++A === r && (E = d), (H = F.nextSibling) !== null) break;
              F = z, z = F.parentNode;
            }
            F = H;
          }
          n = v === -1 || E === -1 ? null : { start: v, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Eo = { focusedElem: e, selectionRange: n }, wl = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
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
              var G = K.memoizedProps, ze = K.memoizedState, N = t.stateNode, k = N.getSnapshotBeforeUpdate(t.elementType === t.type ? G : St(t.type, G), ze);
              N.__reactInternalSnapshotBeforeUpdate = k;
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
        De(t, t.return, U);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return K = Ec, Ec = !1, K;
  }
  function qr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          a.destroy = void 0, o !== void 0 && ii(t, n, o);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function na(e, t) {
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
  function si(e) {
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
  function wc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, wc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[Or], delete t[So], delete t[cm], delete t[dm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function kc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Cc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || kc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Dl));
    else if (r !== 4 && (e = e.child, e !== null)) for (ui(e, t, n), e = e.sibling; e !== null; ) ui(e, t, n), e = e.sibling;
  }
  function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), e = e.sibling;
  }
  var We = null, Nt = !1;
  function on(e, t, n) {
    for (n = n.child; n !== null; ) Sc(e, t, n), n = n.sibling;
  }
  function Sc(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
      Pt.onCommitFiberUnmount(hl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || er(n, t);
      case 6:
        var r = We, a = Nt;
        We = null, on(e, t, n), We = r, Nt = a, We !== null && (Nt ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
        break;
      case 18:
        We !== null && (Nt ? (e = We, n = n.stateNode, e.nodeType === 8 ? Co(e.parentNode, n) : e.nodeType === 1 && Co(e, n), Nr(e)) : Co(We, n.stateNode));
        break;
      case 4:
        r = We, a = Nt, We = n.stateNode.containerInfo, Nt = !0, on(e, t, n), We = r, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var o = a, d = o.destroy;
            o = o.tag, d !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ii(n, t, d), a = a.next;
          } while (a !== r);
        }
        on(e, t, n);
        break;
      case 1:
        if (!Ge && (er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (v) {
          De(n, t, v);
        }
        on(e, t, n);
        break;
      case 21:
        on(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, on(e, t, n), Ge = r) : on(e, t, n);
        break;
      default:
        on(e, t, n);
    }
  }
  function Nc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Tm()), t.forEach(function(r) {
        var a = Am.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e, d = t, v = d;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              We = v.stateNode, Nt = !1;
              break e;
            case 3:
              We = v.stateNode.containerInfo, Nt = !0;
              break e;
            case 4:
              We = v.stateNode.containerInfo, Nt = !0;
              break e;
          }
          v = v.return;
        }
        if (We === null) throw Error(s(160));
        Sc(o, d, a), We = null, Nt = !1;
        var E = a.alternate;
        E !== null && (E.return = null), a.return = null;
      } catch (I) {
        De(a, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xc(t, e), t = t.sibling;
  }
  function xc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (xt(t, e), Dt(e), r & 4) {
          try {
            qr(3, e, e.return), na(3, e);
          } catch (G) {
            De(e, e.return, G);
          }
          try {
            qr(5, e, e.return);
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 1:
        xt(t, e), Dt(e), r & 512 && n !== null && er(n, n.return);
        break;
      case 5:
        if (xt(t, e), Dt(e), r & 512 && n !== null && er(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            pr(a, "");
          } catch (G) {
            De(e, e.return, G);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var o = e.memoizedProps, d = n !== null ? n.memoizedProps : o, v = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            v === "input" && o.type === "radio" && o.name != null && es(a, o), Ua(v, d);
            var I = Ua(v, o);
            for (d = 0; d < E.length; d += 2) {
              var A = E[d], F = E[d + 1];
              A === "style" ? ss(a, F) : A === "dangerouslySetInnerHTML" ? os(a, F) : A === "children" ? pr(a, F) : j(a, A, F, I);
            }
            switch (v) {
              case "input":
                za(a, o);
                break;
              case "textarea":
                rs(a, o);
                break;
              case "select":
                var z = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var H = o.value;
                H != null ? Dn(a, !!o.multiple, H, !1) : z !== !!o.multiple && (o.defaultValue != null ? Dn(
                  a,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Dn(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[Or] = o;
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 6:
        if (xt(t, e), Dt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, o = e.memoizedProps;
          try {
            a.nodeValue = o;
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 3:
        if (xt(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Nr(t.containerInfo);
        } catch (G) {
          De(e, e.return, G);
        }
        break;
      case 4:
        xt(t, e), Dt(e);
        break;
      case 13:
        xt(t, e), Dt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (mi = $e())), r & 4 && Nc(e);
        break;
      case 22:
        if (A = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (I = Ge) || A, xt(t, e), Ge = I) : xt(t, e), Dt(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !A && (e.mode & 1) !== 0) for (Q = e, A = e.child; A !== null; ) {
            for (F = Q = A; Q !== null; ) {
              switch (z = Q, H = z.child, z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, z, z.return);
                  break;
                case 1:
                  er(z, z.return);
                  var K = z.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    r = z, n = z.return;
                    try {
                      t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (G) {
                      De(r, n, G);
                    }
                  }
                  break;
                case 5:
                  er(z, z.return);
                  break;
                case 22:
                  if (z.memoizedState !== null) {
                    Pc(F);
                    continue;
                  }
              }
              H !== null ? (H.return = z, Q = H) : Pc(F);
            }
            A = A.sibling;
          }
          e: for (A = null, F = e; ; ) {
            if (F.tag === 5) {
              if (A === null) {
                A = F;
                try {
                  a = F.stateNode, I ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (v = F.stateNode, E = F.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, v.style.display = is("display", d));
                } catch (G) {
                  De(e, e.return, G);
                }
              }
            } else if (F.tag === 6) {
              if (A === null) try {
                F.stateNode.nodeValue = I ? "" : F.memoizedProps;
              } catch (G) {
                De(e, e.return, G);
              }
            } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === e) && F.child !== null) {
              F.child.return = F, F = F.child;
              continue;
            }
            if (F === e) break e;
            for (; F.sibling === null; ) {
              if (F.return === null || F.return === e) break e;
              A === F && (A = null), F = F.return;
            }
            A === F && (A = null), F.sibling.return = F.return, F = F.sibling;
          }
        }
        break;
      case 19:
        xt(t, e), Dt(e), r & 4 && Nc(e);
        break;
      case 21:
        break;
      default:
        xt(
          t,
          e
        ), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (kc(n)) {
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
            r.flags & 32 && (pr(a, ""), r.flags &= -33);
            var o = Cc(e);
            ci(e, o, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, v = Cc(e);
            ui(e, v, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (E) {
        De(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pm(e, t, n) {
    Q = e, Tc(e);
  }
  function Tc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, o = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || ta;
        if (!d) {
          var v = a.alternate, E = v !== null && v.memoizedState !== null || Ge;
          v = ta;
          var I = Ge;
          if (ta = d, (Ge = E) && !I) for (Q = a; Q !== null; ) d = Q, E = d.child, d.tag === 22 && d.memoizedState !== null ? Mc(a) : E !== null ? (E.return = d, Q = E) : Mc(a);
          for (; o !== null; ) Q = o, Tc(o), o = o.sibling;
          Q = a, ta = v, Ge = I;
        }
        Rc(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = a, Q = o) : Rc(e);
    }
  }
  function Rc(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || na(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : St(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Pu(t, o, r);
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
                Pu(t, d, n);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (n === null && t.flags & 4) {
                n = v;
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
                  var A = I.memoizedState;
                  if (A !== null) {
                    var F = A.dehydrated;
                    F !== null && Nr(F);
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
          Ge || t.flags & 512 && si(t);
        } catch (z) {
          De(t, t.return, z);
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
  function Pc(e) {
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
  function Mc(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              na(4, t);
            } catch (E) {
              De(t, n, E);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (E) {
                De(t, a, E);
              }
            }
            var o = t.return;
            try {
              si(t);
            } catch (E) {
              De(t, o, E);
            }
            break;
          case 5:
            var d = t.return;
            try {
              si(t);
            } catch (E) {
              De(t, d, E);
            }
        }
      } catch (E) {
        De(t, t.return, E);
      }
      if (t === e) {
        Q = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, Q = v;
        break;
      }
      Q = t.return;
    }
  }
  var Mm = Math.ceil, ra = W.ReactCurrentDispatcher, di = W.ReactCurrentOwner, yt = W.ReactCurrentBatchConfig, me = 0, be = null, Ae = null, Qe = 0, dt = 0, tr = tn(0), Ue = 0, Yr = null, Sn = 0, la = 0, fi = 0, Kr = null, rt = null, mi = 0, nr = 1 / 0, Vt = null, aa = !1, pi = null, sn = null, oa = !1, un = null, ia = 0, Gr = 0, hi = null, sa = -1, ua = 0;
  function Ze() {
    return (me & 6) !== 0 ? $e() : sa !== -1 ? sa : sa = $e();
  }
  function cn(e) {
    return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Qe !== 0 ? Qe & -Qe : mm.transition !== null ? (ua === 0 && (ua = Cs()), ua) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Is(e.type)), e);
  }
  function Tt(e, t, n, r) {
    if (50 < Gr) throw Gr = 0, hi = null, Error(s(185));
    Er(e, n, r), ((me & 2) === 0 || e !== be) && (e === be && ((me & 2) === 0 && (la |= n), Ue === 4 && dn(e, Qe)), lt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (nr = $e() + 500, Al && rn()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    mf(e, t);
    var r = gl(e, e === be ? Qe : 0);
    if (r === 0) n !== null && Es(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Es(n), t === 1) e.tag === 0 ? fm(Ic.bind(null, e)) : yu(Ic.bind(null, e)), sm(function() {
        (me & 6) === 0 && rn();
      }), n = null;
      else {
        switch (Ss(r)) {
          case 1:
            n = qa;
            break;
          case 4:
            n = ws;
            break;
          case 16:
            n = pl;
            break;
          case 536870912:
            n = ks;
            break;
          default:
            n = pl;
        }
        n = Uc(n, Lc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Lc(e, t) {
    if (sa = -1, ua = 0, (me & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (rr() && e.callbackNode !== n) return null;
    var r = gl(e, e === be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ca(e, r);
    else {
      t = r;
      var a = me;
      me |= 2;
      var o = $c();
      (be !== e || Qe !== t) && (Vt = null, nr = $e() + 500, xn(e, t));
      do
        try {
          Dm();
          break;
        } catch (v) {
          Dc(e, v);
        }
      while (!0);
      Do(), ra.current = o, me = a, Ae !== null ? t = 0 : (be = null, Qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = Ya(e), a !== 0 && (r = a, t = vi(e, a))), t === 1) throw n = Yr, xn(e, 0), dn(e, r), lt(e, $e()), n;
      if (t === 6) dn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Lm(a) && (t = ca(e, r), t === 2 && (o = Ya(e), o !== 0 && (r = o, t = vi(e, o))), t === 1)) throw n = Yr, xn(e, 0), dn(e, r), lt(e, $e()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Tn(e, rt, Vt);
            break;
          case 3:
            if (dn(e, r), (r & 130023424) === r && (t = mi + 500 - $e(), 10 < t)) {
              if (gl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Ze(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = ko(Tn.bind(null, e, rt, Vt), t);
              break;
            }
            Tn(e, rt, Vt);
            break;
          case 4:
            if (dn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - wt(r);
              o = 1 << d, d = t[d], d > a && (a = d), r &= ~o;
            }
            if (r = a, r = $e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ko(Tn.bind(null, e, rt, Vt), r);
              break;
            }
            Tn(e, rt, Vt);
            break;
          case 5:
            Tn(e, rt, Vt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return lt(e, $e()), e.callbackNode === n ? Lc.bind(null, e) : null;
  }
  function vi(e, t) {
    var n = Kr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = ca(e, t), e !== 2 && (t = rt, rt = n, t !== null && yi(t)), e;
  }
  function yi(e) {
    rt === null ? rt = e : rt.push.apply(rt, e);
  }
  function Lm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], o = a.getSnapshot;
          a = a.value;
          try {
            if (!kt(o(), a)) return !1;
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
  function dn(e, t) {
    for (t &= ~fi, t &= ~la, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ic(e) {
    if ((me & 6) !== 0) throw Error(s(327));
    rr();
    var t = gl(e, 0);
    if ((t & 1) === 0) return lt(e, $e()), null;
    var n = ca(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ya(e);
      r !== 0 && (t = r, n = vi(e, r));
    }
    if (n === 1) throw n = Yr, xn(e, 0), dn(e, t), lt(e, $e()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tn(e, rt, Vt), lt(e, $e()), null;
  }
  function gi(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      me = n, me === 0 && (nr = $e() + 500, Al && rn());
    }
  }
  function Nn(e) {
    un !== null && un.tag === 0 && (me & 6) === 0 && rr();
    var t = me;
    me |= 1;
    var n = yt.transition, r = Ee;
    try {
      if (yt.transition = null, Ee = 1, e) return e();
    } finally {
      Ee = r, yt.transition = n, me = t, (me & 6) === 0 && rn();
    }
  }
  function _i() {
    dt = tr.current, xe(tr);
  }
  function xn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, im(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
      var r = n;
      switch (Ro(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && zl();
          break;
        case 3:
          Jn(), xe(et), xe(qe), Bo();
          break;
        case 5:
          jo(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          xe(Me);
          break;
        case 19:
          xe(Me);
          break;
        case 10:
          $o(r.type._context);
          break;
        case 22:
        case 23:
          _i();
      }
      n = n.return;
    }
    if (be = e, Ae = e = fn(e.current, null), Qe = dt = t, Ue = 0, Yr = null, fi = la = Sn = 0, rt = Kr = null, wn !== null) {
      for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, o = n.pending;
        if (o !== null) {
          var d = o.next;
          o.next = a, r.next = d;
        }
        n.pending = r;
      }
      wn = null;
    }
    return e;
  }
  function Dc(e, t) {
    do {
      var n = Ae;
      try {
        if (Do(), ql.current = Xl, Yl) {
          for (var r = Le.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Yl = !1;
        }
        if (Cn = 0, Be = je = Le = null, br = !1, Hr = 0, di.current = null, n === null || n.return === null) {
          Ue = 1, Yr = t, Ae = null;
          break;
        }
        e: {
          var o = e, d = n.return, v = n, E = t;
          if (t = Qe, v.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var I = E, A = v, F = A.tag;
            if ((A.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var z = A.alternate;
              z ? (A.updateQueue = z.updateQueue, A.memoizedState = z.memoizedState, A.lanes = z.lanes) : (A.updateQueue = null, A.memoizedState = null);
            }
            var H = lc(d);
            if (H !== null) {
              H.flags &= -257, ac(H, d, v, o, t), H.mode & 1 && rc(o, I, t), t = H, E = I;
              var K = t.updateQueue;
              if (K === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(E), t.updateQueue = G;
              } else K.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                rc(o, I, t), Ei();
                break e;
              }
              E = Error(s(426));
            }
          } else if (Re && v.mode & 1) {
            var ze = lc(d);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), ac(ze, d, v, o, t), Lo(Zn(E, v));
              break e;
            }
          }
          o = E = Zn(E, v), Ue !== 4 && (Ue = 2), Kr === null ? Kr = [o] : Kr.push(o), o = d;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var N = tc(o, E, t);
                Ru(o, N);
                break e;
              case 1:
                v = E;
                var k = o.type, M = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (sn === null || !sn.has(M)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var U = nc(o, v, t);
                  Ru(o, U);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Oc(n);
      } catch (J) {
        t = J, Ae === n && n !== null && (Ae = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function $c() {
    var e = ra.current;
    return ra.current = Xl, e === null ? Xl : e;
  }
  function Ei() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), be === null || (Sn & 268435455) === 0 && (la & 268435455) === 0 || dn(be, Qe);
  }
  function ca(e, t) {
    var n = me;
    me |= 2;
    var r = $c();
    (be !== e || Qe !== t) && (Vt = null, xn(e, t));
    do
      try {
        Im();
        break;
      } catch (a) {
        Dc(e, a);
      }
    while (!0);
    if (Do(), me = n, ra.current = r, Ae !== null) throw Error(s(261));
    return be = null, Qe = 0, Ue;
  }
  function Im() {
    for (; Ae !== null; ) zc(Ae);
  }
  function Dm() {
    for (; Ae !== null && !rf(); ) zc(Ae);
  }
  function zc(e) {
    var t = jc(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? Oc(e) : Ae = t, di.current = null;
  }
  function Oc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Nm(n, t, dt), n !== null) {
          Ae = n;
          return;
        }
      } else {
        if (n = xm(n, t), n !== null) {
          n.flags &= 32767, Ae = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ue = 6, Ae = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function Tn(e, t, n) {
    var r = Ee, a = yt.transition;
    try {
      yt.transition = null, Ee = 1, $m(e, t, n, r);
    } finally {
      yt.transition = a, Ee = r;
    }
    return null;
  }
  function $m(e, t, n, r) {
    do
      rr();
    while (un !== null);
    if ((me & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (pf(e, o), e === be && (Ae = be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || oa || (oa = !0, Uc(pl, function() {
      return rr(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = yt.transition, yt.transition = null;
      var d = Ee;
      Ee = 1;
      var v = me;
      me |= 4, di.current = null, Rm(e, n), xc(n, e), em(Eo), wl = !!_o, Eo = _o = null, e.current = n, Pm(n), lf(), me = v, Ee = d, yt.transition = o;
    } else e.current = n;
    if (oa && (oa = !1, un = e, ia = a), o = e.pendingLanes, o === 0 && (sn = null), sf(n.stateNode), lt(e, $e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (aa) throw aa = !1, e = pi, pi = null, e;
    return (ia & 1) !== 0 && e.tag !== 0 && rr(), o = e.pendingLanes, (o & 1) !== 0 ? e === hi ? Gr++ : (Gr = 0, hi = e) : Gr = 0, rn(), null;
  }
  function rr() {
    if (un !== null) {
      var e = Ss(ia), t = yt.transition, n = Ee;
      try {
        if (yt.transition = null, Ee = 16 > e ? 16 : e, un === null) var r = !1;
        else {
          if (e = un, un = null, ia = 0, (me & 6) !== 0) throw Error(s(331));
          var a = me;
          for (me |= 4, Q = e.current; Q !== null; ) {
            var o = Q, d = o.child;
            if ((Q.flags & 16) !== 0) {
              var v = o.deletions;
              if (v !== null) {
                for (var E = 0; E < v.length; E++) {
                  var I = v[E];
                  for (Q = I; Q !== null; ) {
                    var A = Q;
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qr(8, A, o);
                    }
                    var F = A.child;
                    if (F !== null) F.return = A, Q = F;
                    else for (; Q !== null; ) {
                      A = Q;
                      var z = A.sibling, H = A.return;
                      if (wc(A), A === I) {
                        Q = null;
                        break;
                      }
                      if (z !== null) {
                        z.return = H, Q = z;
                        break;
                      }
                      Q = H;
                    }
                  }
                }
                var K = o.alternate;
                if (K !== null) {
                  var G = K.child;
                  if (G !== null) {
                    K.child = null;
                    do {
                      var ze = G.sibling;
                      G.sibling = null, G = ze;
                    } while (G !== null);
                  }
                }
                Q = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) d.return = o, Q = d;
            else e: for (; Q !== null; ) {
              if (o = Q, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  qr(9, o, o.return);
              }
              var N = o.sibling;
              if (N !== null) {
                N.return = o.return, Q = N;
                break e;
              }
              Q = o.return;
            }
          }
          var k = e.current;
          for (Q = k; Q !== null; ) {
            d = Q;
            var M = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && M !== null) M.return = d, Q = M;
            else e: for (d = k; Q !== null; ) {
              if (v = Q, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    na(9, v);
                }
              } catch (J) {
                De(v, v.return, J);
              }
              if (v === d) {
                Q = null;
                break e;
              }
              var U = v.sibling;
              if (U !== null) {
                U.return = v.return, Q = U;
                break e;
              }
              Q = v.return;
            }
          }
          if (me = a, rn(), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
            Pt.onPostCommitFiberRoot(hl, e);
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
  function Ac(e, t, n) {
    t = Zn(n, t), t = tc(e, t, 1), e = an(e, t, 1), t = Ze(), e !== null && (Er(e, 1, t), lt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Ac(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ac(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
          e = Zn(n, e), e = nc(t, e, 1), t = an(t, e, 1), e = Ze(), t !== null && (Er(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function zm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ze(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Qe & n) === n && (Ue === 4 || Ue === 3 && (Qe & 130023424) === Qe && 500 > $e() - mi ? xn(e, 0) : fi |= n), lt(e, t);
  }
  function Fc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = yl, yl <<= 1, (yl & 130023424) === 0 && (yl = 4194304)));
    var n = Ze();
    e = Bt(e, t), e !== null && (Er(e, t, n), lt(e, n));
  }
  function Om(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Fc(e, n);
  }
  function Am(e, t) {
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
    r !== null && r.delete(t), Fc(e, n);
  }
  var jc;
  jc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return nt = !1, Sm(e, t, n);
      nt = (e.flags & 131072) !== 0;
    }
    else nt = !1, Re && (t.flags & 1048576) !== 0 && gu(t, jl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ea(e, t), e = t.pendingProps;
        var a = Wn(t, qe.current);
        Xn(t, n), a = Vo(null, t, r, e, a, n);
        var o = Wo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (o = !0, Ol(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ao(t), a.updater = Jl, t.stateNode = a, a._reactInternals = t, Xo(t, r, e, n), t = ti(null, t, r, !0, o, n)) : (t.tag = 0, Re && o && To(t), Je(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ea(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = jm(r), e = St(r, e), a) {
            case 0:
              t = ei(null, t, r, e, n);
              break e;
            case 1:
              t = dc(null, t, r, e, n);
              break e;
            case 11:
              t = oc(null, t, r, e, n);
              break e;
            case 14:
              t = ic(null, t, r, St(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), ei(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), dc(e, t, r, a, n);
      case 3:
        e: {
          if (fc(t), e === null) throw Error(s(387));
          r = t.pendingProps, o = t.memoizedState, a = o.element, Tu(e, t), Wl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            a = Zn(Error(s(423)), t), t = mc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = Zn(Error(s(424)), t), t = mc(e, t, r, n, a);
            break e;
          } else for (ct = en(t.stateNode.containerInfo.firstChild), ut = t, Re = !0, Ct = null, n = Nu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Yn(), r === a) {
              t = Ht(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Mu(t), e === null && Mo(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, d = a.children, wo(r, a) ? d = null : o !== null && wo(r, o) && (t.flags |= 32), cc(e, t), Je(e, t, d, n), t.child;
      case 6:
        return e === null && Mo(t), null;
      case 13:
        return pc(e, t, n);
      case 4:
        return Fo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), oc(e, t, r, a, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, d = a.value, Ce(bl, r._currentValue), r._currentValue = d, o !== null) if (kt(o.value, d)) {
            if (o.children === a.children && !et.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var v = o.dependencies;
            if (v !== null) {
              d = o.child;
              for (var E = v.firstContext; E !== null; ) {
                if (E.context === r) {
                  if (o.tag === 1) {
                    E = bt(-1, n & -n), E.tag = 2;
                    var I = o.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var A = I.pending;
                      A === null ? E.next = E : (E.next = A.next, A.next = E), I.pending = E;
                    }
                  }
                  o.lanes |= n, E = o.alternate, E !== null && (E.lanes |= n), zo(
                    o.return,
                    n,
                    t
                  ), v.lanes |= n;
                  break;
                }
                E = E.next;
              }
            } else if (o.tag === 10) d = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (d = o.return, d === null) throw Error(s(341));
              d.lanes |= n, v = d.alternate, v !== null && (v.lanes |= n), zo(d, n, t), d = o.sibling;
            } else d = o.child;
            if (d !== null) d.return = o;
            else for (d = o; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (o = d.sibling, o !== null) {
                o.return = d.return, d = o;
                break;
              }
              d = d.return;
            }
            o = d;
          }
          Je(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Xn(t, n), a = ht(a), r = r(a), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = St(r, t.pendingProps), a = St(r.type, a), ic(e, t, r, a, n);
      case 15:
        return sc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), ea(e, t), t.tag = 1, tt(r) ? (e = !0, Ol(t)) : e = !1, Xn(t, n), Zu(t, r, a), Xo(t, r, a, n), ti(null, t, r, !0, e, n);
      case 19:
        return vc(e, t, n);
      case 22:
        return uc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Uc(e, t) {
    return _s(e, t);
  }
  function Fm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gt(e, t, n, r) {
    return new Fm(e, t, n, r);
  }
  function wi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function jm(e) {
    if (typeof e == "function") return wi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ye) return 11;
      if (e === ie) return 14;
    }
    return 2;
  }
  function fn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function da(e, t, n, r, a, o) {
    var d = 2;
    if (r = e, typeof e == "function") wi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case ae:
        return Rn(n.children, a, o, t);
      case b:
        d = 8, a |= 8;
        break;
      case we:
        return e = gt(12, n, t, a | 2), e.elementType = we, e.lanes = o, e;
      case Oe:
        return e = gt(13, n, t, a), e.elementType = Oe, e.lanes = o, e;
      case Fe:
        return e = gt(19, n, t, a), e.elementType = Fe, e.lanes = o, e;
      case oe:
        return fa(n, a, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Se:
            d = 10;
            break e;
          case X:
            d = 9;
            break e;
          case ye:
            d = 11;
            break e;
          case ie:
            d = 14;
            break e;
          case Ie:
            d = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = gt(d, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Rn(e, t, n, r) {
    return e = gt(7, e, r, t), e.lanes = n, e;
  }
  function fa(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = oe, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ki(e, t, n) {
    return e = gt(6, e, null, t), e.lanes = n, e;
  }
  function Ci(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Um(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ka(0), this.expirationTimes = Ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ka(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Si(e, t, n, r, a, o, d, v, E) {
    return e = new Um(e, t, n, v, E), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = gt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ao(o), e;
  }
  function Bm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Bc(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (tt(n)) return hu(e, n, t);
    }
    return t;
  }
  function bc(e, t, n, r, a, o, d, v, E) {
    return e = Si(n, r, !0, e, a, o, d, v, E), e.context = Bc(null), n = e.current, r = Ze(), a = cn(n), o = bt(r, a), o.callback = t ?? null, an(n, o, a), e.current.lanes = a, Er(e, a, r), lt(e, r), e;
  }
  function ma(e, t, n, r) {
    var a = t.current, o = Ze(), d = cn(a);
    return n = Bc(n), t.context === null ? t.context = n : t.pendingContext = n, t = bt(o, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(a, t, d), e !== null && (Tt(e, a, d, o), Vl(e, a, d)), d;
  }
  function pa(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Hc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ni(e, t) {
    Hc(e, t), (e = e.alternate) && Hc(e, t);
  }
  function bm() {
    return null;
  }
  var Vc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xi(e) {
    this._internalRoot = e;
  }
  ha.prototype.render = xi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    ma(e, t, null, null);
  }, ha.prototype.unmount = xi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Nn(function() {
        ma(null, e, null, null);
      }), t[At] = null;
    }
  };
  function ha(e) {
    this._internalRoot = e;
  }
  ha.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ts();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++) ;
      Xt.splice(n, 0, e), n === 0 && Ms(e);
    }
  };
  function Ti(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function va(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Wc() {
  }
  function Hm(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var I = pa(d);
          o.call(I);
        };
      }
      var d = bc(t, r, e, 0, null, !1, !1, "", Wc);
      return e._reactRootContainer = d, e[At] = d.current, $r(e.nodeType === 8 ? e.parentNode : e), Nn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var v = r;
      r = function() {
        var I = pa(E);
        v.call(I);
      };
    }
    var E = Si(e, 0, !1, null, null, !1, !1, "", Wc);
    return e._reactRootContainer = E, e[At] = E.current, $r(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
      ma(t, E, n, r);
    }), E;
  }
  function ya(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var d = o;
      if (typeof a == "function") {
        var v = a;
        a = function() {
          var E = pa(d);
          v.call(E);
        };
      }
      ma(t, d, e, a);
    } else d = Hm(n, t, e, a, r);
    return pa(d);
  }
  Ns = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = _r(t.pendingLanes);
          n !== 0 && (Ga(t, n | 1), lt(t, $e()), (me & 6) === 0 && (nr = $e() + 500, rn()));
        }
        break;
      case 13:
        Nn(function() {
          var r = Bt(e, 1);
          if (r !== null) {
            var a = Ze();
            Tt(r, e, 1, a);
          }
        }), Ni(e, 1);
    }
  }, Xa = function(e) {
    if (e.tag === 13) {
      var t = Bt(e, 134217728);
      if (t !== null) {
        var n = Ze();
        Tt(t, e, 134217728, n);
      }
      Ni(e, 134217728);
    }
  }, xs = function(e) {
    if (e.tag === 13) {
      var t = cn(e), n = Bt(e, t);
      if (n !== null) {
        var r = Ze();
        Tt(n, e, t, r);
      }
      Ni(e, t);
    }
  }, Ts = function() {
    return Ee;
  }, Rs = function(e, t) {
    var n = Ee;
    try {
      return Ee = e, t();
    } finally {
      Ee = n;
    }
  }, Ha = function(e, t, n) {
    switch (t) {
      case "input":
        if (za(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = $l(r);
              if (!a) throw Error(s(90));
              Ji(r), za(r, a);
            }
          }
        }
        break;
      case "textarea":
        rs(e, n);
        break;
      case "select":
        t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
    }
  }, fs = gi, ms = Nn;
  var Vm = { usingClientEntryPoint: !1, Events: [Ar, Hn, $l, cs, ds, gi] }, Xr = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wm = { bundleType: Xr.bundleType, version: Xr.version, rendererPackageName: Xr.rendererPackageName, rendererConfig: Xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ys(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Xr.findFiberByHostInstance || bm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ga.isDisabled && ga.supportsFiber) try {
      hl = ga.inject(Wm), Pt = ga;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ti(t)) throw Error(s(200));
    return Bm(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!Ti(e)) throw Error(s(299));
    var n = !1, r = "", a = Vc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Si(e, 1, !1, null, null, n, !1, r, a), e[At] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new xi(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = ys(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return Nn(e);
  }, at.hydrate = function(e, t, n) {
    if (!va(t)) throw Error(s(200));
    return ya(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!Ti(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, o = "", d = Vc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = bc(t, null, e, 1, n ?? null, a, !1, o, d), e[At] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ha(t);
  }, at.render = function(e, t, n) {
    if (!va(t)) throw Error(s(200));
    return ya(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!va(e)) throw Error(s(40));
    return e._reactRootContainer ? (Nn(function() {
      ya(null, null, e, !1, function() {
        e._reactRootContainer = null, e[At] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = gi, at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!va(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return ya(e, t, n, !1, r);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
var Xc;
function Xm() {
  if (Xc) return Pi.exports;
  Xc = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), Pi.exports = Gm(), Pi.exports;
}
var Jc;
function Jm() {
  if (Jc) return _a;
  Jc = 1;
  var l = Xm();
  return _a.createRoot = l.createRoot, _a.hydrateRoot = l.hydrateRoot, _a;
}
var Zm = Jm();
const ep = /* @__PURE__ */ Sd(Zm);
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
var Zc = "popstate";
function ed(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function tp(l = {}) {
  function i(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = In(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Bi(
      "",
      { pathname: p, search: h, hash: y },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function s(f, m) {
    let p = f.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let y = f.location.href, C = y.indexOf("#");
      h = C === -1 ? y : y.slice(0, C);
    }
    return h + "#" + (typeof m == "string" ? m : rl(m));
  }
  function c(f, m) {
    _t(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return rp(
    i,
    s,
    c,
    l
  );
}
function Pe(l, i) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(i);
}
function _t(l, i) {
  if (!l) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {
    }
  }
}
function np() {
  return Math.random().toString(36).substring(2, 10);
}
function td(l, i) {
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
function Bi(l, i, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? In(i) : i,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || c || np(),
    mask: f
  };
}
function rl({
  pathname: l = "/",
  search: i = "",
  hash: s = ""
}) {
  return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function In(l) {
  let i = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (i.hash = l.substring(s), l = l.substring(0, s));
    let c = l.indexOf("?");
    c >= 0 && (i.search = l.substring(c), l = l.substring(0, c)), l && (i.pathname = l);
  }
  return i;
}
function rp(l, i, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", y = null, C = w();
  C == null && (C = 0, p.replaceState({ ...p.state, idx: C }, ""));
  function w() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let T = w(), $ = T == null ? null : T - C;
    C = T, y && y({ action: h, location: D.location, delta: $ });
  }
  function P(T, $) {
    h = "PUSH";
    let R = ed(T) ? T : Bi(D.location, T, $);
    s && s(R, T), C = w() + 1;
    let j = td(R, C), W = D.createHref(R.mask || R);
    try {
      p.pushState(j, "", W);
    } catch (V) {
      if (V instanceof DOMException && V.name === "DataCloneError")
        throw V;
      f.location.assign(W);
    }
    m && y && y({ action: h, location: D.location, delta: 1 });
  }
  function x(T, $) {
    h = "REPLACE";
    let R = ed(T) ? T : Bi(D.location, T, $);
    s && s(R, T), C = w();
    let j = td(R, C), W = D.createHref(R.mask || R);
    p.replaceState(j, "", W), m && y && y({ action: h, location: D.location, delta: 0 });
  }
  function L(T) {
    return lp(f, T);
  }
  let D = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(T) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(Zc, _), y = T, () => {
        f.removeEventListener(Zc, _), y = null;
      };
    },
    createHref(T) {
      return i(f, T);
    },
    createURL: L,
    encodeLocation(T) {
      let $ = L(T);
      return {
        pathname: $.pathname,
        search: $.search,
        hash: $.hash
      };
    },
    push: P,
    replace: x,
    go(T) {
      return p.go(T);
    }
  };
  return D;
}
function lp(l, i, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Pe(c, "No window.location.(origin|href) available to create URL");
  let f = typeof i == "string" ? i : rl(i);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function xd(l, i, s = "/") {
  return ap(l, i, s, !1);
}
function ap(l, i, s, c, f) {
  let m = typeof i == "string" ? In(i) : i, p = Qt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = op(l), y = null, C = gp(p);
  for (let w = 0; y == null && w < h.length; ++w)
    y = vp(
      h[w],
      C,
      c
    );
  return y;
}
function op(l) {
  let i = Td(l);
  return ip(i), i;
}
function Td(l, i = [], s = [], c = "", f = !1) {
  let m = (p, h, y = f, C) => {
    let w = {
      relativePath: C === void 0 ? p.path || "" : C,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (w.relativePath.startsWith("/")) {
      if (!w.relativePath.startsWith(c) && y)
        return;
      Pe(
        w.relativePath.startsWith(c),
        `Absolute route path "${w.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), w.relativePath = w.relativePath.slice(c.length);
    }
    let _ = Rt([c, w.relativePath]), P = s.concat(w);
    p.children && p.children.length > 0 && (Pe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), Td(
      p.children,
      i,
      P,
      _,
      y
    )), !(p.path == null && !p.index) && i.push({
      path: _,
      score: pp(_, p.index),
      routesMeta: P
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let C of Rd(p.path))
        m(p, h, !0, C);
  }), i;
}
function Rd(l) {
  let i = l.split("/");
  if (i.length === 0) return [];
  let [s, ...c] = i, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = Rd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), f && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function ip(l) {
  l.sort(
    (i, s) => i.score !== s.score ? s.score - i.score : hp(
      i.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var sp = /^:[\w-]+$/, up = 3, cp = 2, dp = 1, fp = 10, mp = -2, nd = (l) => l === "*";
function pp(l, i) {
  let s = l.split("/"), c = s.length;
  return s.some(nd) && (c += mp), i && (c += cp), s.filter((f) => !nd(f)).reduce(
    (f, m) => f + (sp.test(m) ? up : m === "" ? dp : fp),
    c
  );
}
function hp(l, i) {
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
function vp(l, i, s = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], C = h === c.length - 1, w = m === "/" ? i : i.slice(m.length) || "/", _ = Ta(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: C },
      w
    ), P = y.route;
    if (!_ && C && s && !c[c.length - 1].route.index && (_ = Ta(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      w
    )), !_)
      return null;
    Object.assign(f, _.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Rt([m, _.pathname]),
      pathnameBase: kp(
        Rt([m, _.pathnameBase])
      ),
      route: P
    }), _.pathnameBase !== "/" && (m = Rt([m, _.pathnameBase]));
  }
  return p;
}
function Ta(l, i) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = yp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = i.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (C, { paramName: w, isOptional: _ }, P) => {
        if (w === "*") {
          let L = h[P] || "";
          p = m.slice(0, m.length - L.length).replace(/(.)\/+$/, "$1");
        }
        const x = h[P];
        return _ && !x ? C[w] = void 0 : C[w] = (x || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function yp(l, i = !1, s = !0) {
  _t(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, C, w) => {
      if (c.push({ paramName: h, isOptional: y != null }), y) {
        let _ = w.charAt(C + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, i ? void 0 : "i"), c];
}
function gp(l) {
  try {
    return l.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
  } catch (i) {
    return _t(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
    ), l;
  }
}
function Qt(l, i) {
  if (i === "/") return l;
  if (!l.toLowerCase().startsWith(i.toLowerCase()))
    return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length, c = l.charAt(s);
  return c && c !== "/" ? null : l.slice(s) || "/";
}
var _p = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Ep(l, i = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? In(l) : l, m;
  return s ? (s = Pd(s), s.startsWith("/") ? m = rd(s.substring(1), "/") : m = rd(s, i)) : m = i, {
    pathname: m,
    search: Cp(c),
    hash: Sp(f)
  };
}
function rd(l, i) {
  let s = Ra(i).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function Ii(l, i, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function wp(l) {
  return l.filter(
    (i, s) => s === 0 || i.route.path && i.route.path.length > 0
  );
}
function Vi(l) {
  let i = wp(l);
  return i.map(
    (s, c) => c === i.length - 1 ? s.pathname : s.pathnameBase
  );
}
function La(l, i, s, c = !1) {
  let f;
  typeof l == "string" ? f = In(l) : (f = { ...l }, Pe(
    !f.pathname || !f.pathname.includes("?"),
    Ii("?", "pathname", "search", f)
  ), Pe(
    !f.pathname || !f.pathname.includes("#"),
    Ii("#", "pathname", "hash", f)
  ), Pe(
    !f.search || !f.search.includes("#"),
    Ii("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let _ = i.length - 1;
    if (!c && p.startsWith("..")) {
      let P = p.split("/");
      for (; P[0] === ".."; )
        P.shift(), _ -= 1;
      f.pathname = P.join("/");
    }
    h = _ >= 0 ? i[_] : "/";
  }
  let y = Ep(f, h), C = p && p !== "/" && p.endsWith("/"), w = (m || p === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (C || w) && (y.pathname += "/"), y;
}
var Pd = (l) => l.replace(/\/\/+/g, "/"), Rt = (l) => Pd(l.join("/")), Ra = (l) => l.replace(/\/+$/, ""), kp = (l) => Ra(l).replace(/^\/*/, "/"), Cp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Sp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Np = class {
  constructor(l, i, s, c = !1) {
    this.status = l, this.statusText = i || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function xp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Tp(l) {
  let i = l.map((s) => s.route.path).filter(Boolean);
  return Rt(i) || "/";
}
var Md = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ld(l, i) {
  let s = l;
  if (typeof s != "string" || !_p.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (Md)
    try {
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), h = Qt(p.pathname, i);
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
var Id = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Id
);
var Rp = [
  "GET",
  ...Id
];
new Set(Rp);
var ar = g.createContext(null);
ar.displayName = "DataRouter";
var Ia = g.createContext(null);
Ia.displayName = "DataRouterState";
var Dd = g.createContext(!1);
function Pp() {
  return g.useContext(Dd);
}
var $d = g.createContext({
  isTransitioning: !1
});
$d.displayName = "ViewTransition";
var Mp = g.createContext(
  /* @__PURE__ */ new Map()
);
Mp.displayName = "Fetchers";
var Lp = g.createContext(null);
Lp.displayName = "Await";
var ft = g.createContext(
  null
);
ft.displayName = "Navigation";
var ll = g.createContext(
  null
);
ll.displayName = "Location";
var Ot = g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ot.displayName = "Route";
var Wi = g.createContext(null);
Wi.displayName = "RouteError";
var zd = "REACT_ROUTER_ERROR", Ip = "REDIRECT", Dp = "ROUTE_ERROR_RESPONSE";
function $p(l) {
  if (l.startsWith(`${zd}:${Ip}:{`))
    try {
      let i = JSON.parse(l.slice(28));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
        return i;
    } catch {
    }
}
function zp(l) {
  if (l.startsWith(
    `${zd}:${Dp}:{`
  ))
    try {
      let i = JSON.parse(l.slice(40));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
        return new Np(
          i.status,
          i.statusText,
          i.data
        );
    } catch {
    }
}
function Op(l, { relative: i } = {}) {
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = g.useContext(ft), { hash: f, pathname: m, search: p } = al(l, { relative: i }), h = m;
  return s !== "/" && (h = m === "/" ? s : Rt([s, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function or() {
  return g.useContext(ll) != null;
}
function Et() {
  return Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), g.useContext(ll).location;
}
var Od = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ad(l) {
  g.useContext(ft).static || g.useLayoutEffect(l);
}
function ir() {
  let { isDataRoute: l } = g.useContext(Ot);
  return l ? Kp() : Ap();
}
function Ap() {
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = g.useContext(ar), { basename: i, navigator: s } = g.useContext(ft), { matches: c } = g.useContext(Ot), { pathname: f } = Et(), m = JSON.stringify(Vi(c)), p = g.useRef(!1);
  return Ad(() => {
    p.current = !0;
  }), g.useCallback(
    (y, C = {}) => {
      if (_t(p.current, Od), !p.current) return;
      if (typeof y == "number") {
        s.go(y);
        return;
      }
      let w = La(
        y,
        JSON.parse(m),
        f,
        C.relative === "path"
      );
      l == null && i !== "/" && (w.pathname = w.pathname === "/" ? i : Rt([i, w.pathname])), (C.replace ? s.replace : s.push)(
        w,
        C.state,
        C
      );
    },
    [
      i,
      s,
      m,
      f,
      l
    ]
  );
}
g.createContext(null);
function al(l, { relative: i } = {}) {
  let { matches: s } = g.useContext(Ot), { pathname: c } = Et(), f = JSON.stringify(Vi(s));
  return g.useMemo(
    () => La(
      l,
      JSON.parse(f),
      c,
      i === "path"
    ),
    [l, f, c, i]
  );
}
function Fp(l, i) {
  return Fd(l, i);
}
function Fd(l, i, s) {
  var T;
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = g.useContext(ft), { matches: f } = g.useContext(Ot), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let $ = C && C.path || "";
    Ud(
      h,
      !C || $.endsWith("*") || $.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$ === "/" ? "*" : `${$}/*`}">.`
    );
  }
  let w = Et(), _;
  if (i) {
    let $ = typeof i == "string" ? In(i) : i;
    Pe(
      y === "/" || ((T = $.pathname) == null ? void 0 : T.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`
    ), _ = $;
  } else
    _ = w;
  let P = _.pathname || "/", x = P;
  if (y !== "/") {
    let $ = y.replace(/^\//, "").split("/");
    x = "/" + P.replace(/^\//, "").split("/").slice($.length).join("/");
  }
  let L = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      ($) => Object.assign($, {
        route: s.manifest[$.route.id] || $.route
      })
    )
  ) : xd(l, { pathname: x });
  _t(
    C || L != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), _t(
    L == null || L[L.length - 1].route.element !== void 0 || L[L.length - 1].route.Component !== void 0 || L[L.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let D = Hp(
    L && L.map(
      ($) => Object.assign({}, $, {
        params: Object.assign({}, p, $.params),
        pathname: Rt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            $.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : $.pathname
        ]),
        pathnameBase: $.pathnameBase === "/" ? y : Rt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            $.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : $.pathnameBase
        ])
      })
    ),
    f,
    s
  );
  return i && D ? /* @__PURE__ */ g.createElement(
    ll.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ..._
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    D
  ) : D;
}
function jp() {
  let l = Yp(), i = xp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ g.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ g.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ g.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ g.createElement("h3", { style: { fontStyle: "italic" } }, i), s ? /* @__PURE__ */ g.createElement("pre", { style: f }, s) : null, p);
}
var Up = /* @__PURE__ */ g.createElement(jp, null), jd = class extends g.Component {
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
      const s = zp(l.digest);
      s && (l = s);
    }
    let i = l !== void 0 ? /* @__PURE__ */ g.createElement(Ot.Provider, { value: this.props.routeContext }, /* @__PURE__ */ g.createElement(
      Wi.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ g.createElement(Bp, { error: l }, i) : i;
  }
};
jd.contextType = Dd;
var Di = /* @__PURE__ */ new WeakMap();
function Bp({
  children: l,
  error: i
}) {
  let { basename: s } = g.useContext(ft);
  if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
    let c = $p(i.digest);
    if (c) {
      let f = Di.get(i);
      if (f) throw f;
      let m = Ld(c.location, s);
      if (Md && !Di.get(i))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw Di.set(i, p), p;
        }
      return /* @__PURE__ */ g.createElement(
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
function bp({ routeContext: l, match: i, children: s }) {
  let c = g.useContext(ar);
  return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ g.createElement(Ot.Provider, { value: l }, s);
}
function Hp(l, i = [], s) {
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
  let f = l, m = c == null ? void 0 : c.errors;
  if (m != null) {
    let w = f.findIndex(
      (_) => _.route.id && (m == null ? void 0 : m[_.route.id]) !== void 0
    );
    Pe(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, w + 1)
    );
  }
  let p = !1, h = -1;
  if (s && c) {
    p = c.renderFallback;
    for (let w = 0; w < f.length; w++) {
      let _ = f[w];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = w), _.route.id) {
        let { loaderData: P, errors: x } = c, L = _.route.loader && !P.hasOwnProperty(_.route.id) && (!x || x[_.route.id] === void 0);
        if (_.route.lazy || L) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let y = s == null ? void 0 : s.onError, C = c && y ? (w, _) => {
    var P, x;
    y(w, {
      location: c.location,
      params: ((x = (P = c.matches) == null ? void 0 : P[0]) == null ? void 0 : x.params) ?? {},
      pattern: Tp(c.matches),
      errorInfo: _
    });
  } : void 0;
  return f.reduceRight(
    (w, _, P) => {
      let x, L = !1, D = null, T = null;
      c && (x = m && _.route.id ? m[_.route.id] : void 0, D = _.route.errorElement || Up, p && (h < 0 && P === 0 ? (Ud(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), L = !0, T = null) : h === P && (L = !0, T = _.route.hydrateFallbackElement || null)));
      let $ = i.concat(f.slice(0, P + 1)), R = () => {
        let j;
        return x ? j = D : L ? j = T : _.route.Component ? j = /* @__PURE__ */ g.createElement(_.route.Component, null) : _.route.element ? j = _.route.element : j = w, /* @__PURE__ */ g.createElement(
          bp,
          {
            match: _,
            routeContext: {
              outlet: w,
              matches: $,
              isDataRoute: c != null
            },
            children: j
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || P === 0) ? /* @__PURE__ */ g.createElement(
        jd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: D,
          error: x,
          children: R(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
          onError: C
        }
      ) : R();
    },
    null
  );
}
function Qi(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vp(l) {
  let i = g.useContext(ar);
  return Pe(i, Qi(l)), i;
}
function Wp(l) {
  let i = g.useContext(Ia);
  return Pe(i, Qi(l)), i;
}
function Qp(l) {
  let i = g.useContext(Ot);
  return Pe(i, Qi(l)), i;
}
function qi(l) {
  let i = Qp(l), s = i.matches[i.matches.length - 1];
  return Pe(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function qp() {
  return qi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Yp() {
  var c;
  let l = g.useContext(Wi), i = Wp(
    "useRouteError"
    /* UseRouteError */
  ), s = qi(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = i.errors) == null ? void 0 : c[s];
}
function Kp() {
  let { router: l } = Vp(
    "useNavigate"
    /* UseNavigateStable */
  ), i = qi(
    "useNavigate"
    /* UseNavigateStable */
  ), s = g.useRef(!1);
  return Ad(() => {
    s.current = !0;
  }), g.useCallback(
    async (f, m = {}) => {
      _t(s.current, Od), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: i, ...m }));
    },
    [l, i]
  );
}
var ld = {};
function Ud(l, i, s) {
  !i && !ld[l] && (ld[l] = !0, _t(!1, s));
}
g.memo(Gp);
function Gp({
  routes: l,
  manifest: i,
  future: s,
  state: c,
  isStatic: f,
  onError: m
}) {
  return Fd(l, void 0, {
    manifest: i,
    state: c,
    isStatic: f,
    onError: m
  });
}
function Ea({
  to: l,
  replace: i,
  state: s,
  relative: c
}) {
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = g.useContext(ft);
  _t(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = g.useContext(Ot), { pathname: p } = Et(), h = ir(), y = La(
    l,
    Vi(m),
    p,
    c === "path"
  ), C = JSON.stringify(y);
  return g.useEffect(() => {
    h(JSON.parse(C), { replace: i, state: s, relative: c });
  }, [h, C, c, i, s]), null;
}
function ot(l) {
  Pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Xp({
  basename: l = "/",
  children: i = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: m = !1,
  useTransitions: p
}) {
  Pe(
    !or(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), y = g.useMemo(
    () => ({
      basename: h,
      navigator: f,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [h, f, m, p]
  );
  typeof s == "string" && (s = In(s));
  let {
    pathname: C = "/",
    search: w = "",
    hash: _ = "",
    state: P = null,
    key: x = "default",
    mask: L
  } = s, D = g.useMemo(() => {
    let T = Qt(C, h);
    return T == null ? null : {
      location: {
        pathname: T,
        search: w,
        hash: _,
        state: P,
        key: x,
        mask: L
      },
      navigationType: c
    };
  }, [h, C, w, _, P, x, c, L]);
  return _t(
    D != null,
    `<Router basename="${h}"> is not able to match the URL "${C}${w}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), D == null ? null : /* @__PURE__ */ g.createElement(ft.Provider, { value: y }, /* @__PURE__ */ g.createElement(ll.Provider, { children: i, value: D }));
}
function Jp({
  children: l,
  location: i
}) {
  return Fp(bi(l), i);
}
function bi(l, i = []) {
  let s = [];
  return g.Children.forEach(l, (c, f) => {
    if (!g.isValidElement(c))
      return;
    let m = [...i, f];
    if (c.type === g.Fragment) {
      s.push.apply(
        s,
        bi(c.props.children, m)
      );
      return;
    }
    Pe(
      c.type === ot,
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
    c.props.children && (p.children = bi(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var Na = "get", xa = "application/x-www-form-urlencoded";
function Da(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function Zp(l) {
  return Da(l) && l.tagName.toLowerCase() === "button";
}
function eh(l) {
  return Da(l) && l.tagName.toLowerCase() === "form";
}
function th(l) {
  return Da(l) && l.tagName.toLowerCase() === "input";
}
function nh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function rh(l, i) {
  return l.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !nh(l);
}
var wa = null;
function lh() {
  if (wa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), wa = !1;
    } catch {
      wa = !0;
    }
  return wa;
}
var ah = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function $i(l) {
  return l != null && !ah.has(l) ? (_t(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`
  ), null) : l;
}
function oh(l, i) {
  let s, c, f, m, p;
  if (eh(l)) {
    let h = l.getAttribute("action");
    c = h ? Qt(h, i) : null, s = l.getAttribute("method") || Na, f = $i(l.getAttribute("enctype")) || xa, m = new FormData(l);
  } else if (Zp(l) || th(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Qt(y, i) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || Na, f = $i(l.getAttribute("formenctype")) || $i(h.getAttribute("enctype")) || xa, m = new FormData(h, l), !lh()) {
      let { name: C, type: w, value: _ } = l;
      if (w === "image") {
        let P = C ? `${C}.` : "";
        m.append(`${P}x`, "0"), m.append(`${P}y`, "0");
      } else C && m.append(C, _);
    }
  } else {
    if (Da(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Na, c = null, f = xa, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Yi(l, i) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(i);
}
function Bd(l, i, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : i && Qt(f.pathname, i) === "/" ? f.pathname = `${Ra(i)}/_root.${c}` : f.pathname = `${Ra(f.pathname)}.${c}`, f;
}
async function ih(l, i) {
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
function sh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function uh(l, i, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = i.routes[f.route.id];
      if (m) {
        let p = await ih(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return mh(
    c.flat(1).filter(sh).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function ad(l, i, s, c, f, m) {
  let p = (y, C) => s[C] ? y.route.id !== s[C].route.id : !0, h = (y, C) => {
    var w;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((w = s[C].route.path) == null ? void 0 : w.endsWith("*")) && s[C].params["*"] !== y.params["*"]
    );
  };
  return m === "assets" ? i.filter(
    (y, C) => p(y, C) || h(y, C)
  ) : m === "data" ? i.filter((y, C) => {
    var _;
    let w = c.routes[y.route.id];
    if (!w || !w.hasLoader)
      return !1;
    if (p(y, C) || h(y, C))
      return !0;
    if (y.route.shouldRevalidate) {
      let P = y.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((_ = s[0]) == null ? void 0 : _.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof P == "boolean")
        return P;
    }
    return !0;
  }) : [];
}
function ch(l, i, { includeHydrateFallback: s } = {}) {
  return dh(
    l.map((c) => {
      let f = i.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function dh(l) {
  return [...new Set(l)];
}
function fh(l) {
  let i = {}, s = Object.keys(l).sort();
  for (let c of s)
    i[c] = l[c];
  return i;
}
function mh(l, i) {
  let s = /* @__PURE__ */ new Set();
  return new Set(i), l.reduce((c, f) => {
    let m = JSON.stringify(fh(f));
    return s.has(m) || (s.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function Ki() {
  let l = g.useContext(ar);
  return Yi(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function ph() {
  let l = g.useContext(Ia);
  return Yi(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Gi = g.createContext(void 0);
Gi.displayName = "FrameworkContext";
function Xi() {
  let l = g.useContext(Gi);
  return Yi(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function hh(l, i) {
  let s = g.useContext(Gi), [c, f] = g.useState(!1), [m, p] = g.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: C, onMouseLeave: w, onTouchStart: _ } = i, P = g.useRef(null);
  g.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let D = ($) => {
        $.forEach((R) => {
          p(R.isIntersecting);
        });
      }, T = new IntersectionObserver(D, { threshold: 0.5 });
      return P.current && T.observe(P.current), () => {
        T.disconnect();
      };
    }
  }, [l]), g.useEffect(() => {
    if (c) {
      let D = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(D);
      };
    }
  }, [c]);
  let x = () => {
    f(!0);
  }, L = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, P, {}] : [
    m,
    P,
    {
      onFocus: Jr(h, x),
      onBlur: Jr(y, L),
      onMouseEnter: Jr(C, x),
      onMouseLeave: Jr(w, L),
      onTouchStart: Jr(_, x)
    }
  ] : [!1, P, {}];
}
function Jr(l, i) {
  return (s) => {
    l && l(s), s.defaultPrevented || i(s);
  };
}
function vh({ page: l, ...i }) {
  let s = Pp(), { router: c } = Ki(), f = g.useMemo(
    () => xd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ g.createElement(gh, { page: l, matches: f, ...i }) : /* @__PURE__ */ g.createElement(_h, { page: l, matches: f, ...i }) : null;
}
function yh(l) {
  let { manifest: i, routeModules: s } = Xi(), [c, f] = g.useState([]);
  return g.useEffect(() => {
    let m = !1;
    return uh(l, i, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, i, s]), c;
}
function gh({
  page: l,
  matches: i,
  ...s
}) {
  let c = Et(), { future: f } = Xi(), { basename: m } = Ki(), p = g.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = Bd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, C = [];
    for (let w of i)
      typeof w.route.shouldRevalidate == "function" ? y = !0 : C.push(w.route.id);
    return y && C.length > 0 && h.searchParams.set("_routes", C.join(",")), [h.pathname + h.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    i
  ]);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, p.map((h) => /* @__PURE__ */ g.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...s })));
}
function _h({
  page: l,
  matches: i,
  ...s
}) {
  let c = Et(), { future: f, manifest: m, routeModules: p } = Xi(), { basename: h } = Ki(), { loaderData: y, matches: C } = ph(), w = g.useMemo(
    () => ad(
      l,
      i,
      C,
      m,
      c,
      "data"
    ),
    [l, i, C, m, c]
  ), _ = g.useMemo(
    () => ad(
      l,
      i,
      C,
      m,
      c,
      "assets"
    ),
    [l, i, C, m, c]
  ), P = g.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let D = /* @__PURE__ */ new Set(), T = !1;
    if (i.forEach((R) => {
      var W;
      let j = m.routes[R.route.id];
      !j || !j.hasLoader || (!w.some((V) => V.route.id === R.route.id) && R.route.id in y && ((W = p[R.route.id]) != null && W.shouldRevalidate) || j.hasClientLoader ? T = !0 : D.add(R.route.id));
    }), D.size === 0)
      return [];
    let $ = Bd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return T && D.size > 0 && $.searchParams.set(
      "_routes",
      i.filter((R) => D.has(R.route.id)).map((R) => R.route.id).join(",")
    ), [$.pathname + $.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    w,
    i,
    l,
    p
  ]), x = g.useMemo(
    () => ch(_, m),
    [_, m]
  ), L = yh(_);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, P.map((D) => /* @__PURE__ */ g.createElement("link", { key: D, rel: "prefetch", as: "fetch", href: D, ...s })), x.map((D) => /* @__PURE__ */ g.createElement("link", { key: D, rel: "modulepreload", href: D, ...s })), L.map(({ key: D, link: T }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ g.createElement(
      "link",
      {
        key: D,
        nonce: s.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function Eh(...l) {
  return (i) => {
    l.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var wh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  wh && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function kh({
  basename: l,
  children: i,
  useTransitions: s,
  window: c
}) {
  let f = g.useRef();
  f.current == null && (f.current = tp({ window: c, v5Compat: !0 }));
  let m = f.current, [p, h] = g.useState({
    action: m.action,
    location: m.location
  }), y = g.useCallback(
    (C) => {
      s === !1 ? h(C) : g.startTransition(() => h(C));
    },
    [s]
  );
  return g.useLayoutEffect(() => m.listen(y), [m, y]), /* @__PURE__ */ g.createElement(
    Xp,
    {
      basename: l,
      children: i,
      location: p.location,
      navigationType: p.action,
      navigator: m,
      useTransitions: s
    }
  );
}
var bd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Hd = g.forwardRef(
  function({
    onClick: i,
    discover: s = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: y,
    target: C,
    to: w,
    preventScrollReset: _,
    viewTransition: P,
    defaultShouldRevalidate: x,
    ...L
  }, D) {
    let { basename: T, navigator: $, useTransitions: R } = g.useContext(ft), j = typeof w == "string" && bd.test(w), W = Ld(w, T);
    w = W.to;
    let V = Op(w, { relative: f }), ne = Et(), ae = null;
    if (h) {
      let ie = La(
        h,
        [],
        ne.mask ? ne.mask.pathname : "/",
        !0
      );
      T !== "/" && (ie.pathname = ie.pathname === "/" ? T : Rt([T, ie.pathname])), ae = $.createHref(ie);
    }
    let [b, we, Se] = hh(
      c,
      L
    ), X = Nh(w, {
      replace: p,
      mask: h,
      state: y,
      target: C,
      preventScrollReset: _,
      relative: f,
      viewTransition: P,
      defaultShouldRevalidate: x,
      useTransitions: R
    });
    function ye(ie) {
      i && i(ie), ie.defaultPrevented || X(ie);
    }
    let Oe = !(W.isExternal || m), Fe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ g.createElement(
        "a",
        {
          ...L,
          ...Se,
          href: (Oe ? ae : void 0) || W.absoluteURL || V,
          onClick: Oe ? ye : i,
          ref: Eh(D, we),
          target: C,
          "data-discover": !j && s === "render" ? "true" : void 0
        }
      )
    );
    return b && !j ? /* @__PURE__ */ g.createElement(g.Fragment, null, Fe, /* @__PURE__ */ g.createElement(vh, { page: V })) : Fe;
  }
);
Hd.displayName = "Link";
var Ve = g.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: y,
    ...C
  }, w) {
    let _ = al(p, { relative: C.relative }), P = Et(), x = g.useContext(Ia), { navigator: L, basename: D } = g.useContext(ft), T = x != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Mh(_) && h === !0, $ = L.encodeLocation ? L.encodeLocation(_).pathname : _.pathname, R = P.pathname, j = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    s || (R = R.toLowerCase(), j = j ? j.toLowerCase() : null, $ = $.toLowerCase()), j && D && (j = Qt(j, D) || j);
    const W = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length;
    let V = R === $ || !f && R.startsWith($) && R.charAt(W) === "/", ne = j != null && (j === $ || !f && j.startsWith($) && j.charAt($.length) === "/"), ae = {
      isActive: V,
      isPending: ne,
      isTransitioning: T
    }, b = V ? i : void 0, we;
    typeof c == "function" ? we = c(ae) : we = [
      c,
      V ? "active" : null,
      ne ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Se = typeof m == "function" ? m(ae) : m;
    return /* @__PURE__ */ g.createElement(
      Hd,
      {
        ...C,
        "aria-current": b,
        className: we,
        ref: w,
        style: Se,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(ae) : y
    );
  }
);
Ve.displayName = "NavLink";
var Ch = g.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: i,
    navigate: s,
    reloadDocument: c,
    replace: f,
    state: m,
    method: p = Na,
    action: h,
    onSubmit: y,
    relative: C,
    preventScrollReset: w,
    viewTransition: _,
    defaultShouldRevalidate: P,
    ...x
  }, L) => {
    let { useTransitions: D } = g.useContext(ft), T = Rh(), $ = Ph(h, { relative: C }), R = p.toLowerCase() === "get" ? "get" : "post", j = typeof h == "string" && bd.test(h), W = (V) => {
      if (y && y(V), V.defaultPrevented) return;
      V.preventDefault();
      let ne = V.nativeEvent.submitter, ae = (ne == null ? void 0 : ne.getAttribute("formmethod")) || p, b = () => T(ne || V.currentTarget, {
        fetcherKey: i,
        method: ae,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: w,
        viewTransition: _,
        defaultShouldRevalidate: P
      });
      D && s !== !1 ? g.startTransition(() => b()) : b();
    };
    return /* @__PURE__ */ g.createElement(
      "form",
      {
        ref: L,
        method: R,
        action: $,
        onSubmit: c ? y : W,
        ...x,
        "data-discover": !j && l === "render" ? "true" : void 0
      }
    );
  }
);
Ch.displayName = "Form";
function Sh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vd(l) {
  let i = g.useContext(ar);
  return Pe(i, Sh(l)), i;
}
function Nh(l, {
  target: i,
  replace: s,
  mask: c,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: y,
  useTransitions: C
} = {}) {
  let w = ir(), _ = Et(), P = al(l, { relative: p });
  return g.useCallback(
    (x) => {
      if (rh(x, i)) {
        x.preventDefault();
        let L = s !== void 0 ? s : rl(_) === rl(P), D = () => w(l, {
          replace: L,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: y
        });
        C ? g.startTransition(() => D()) : D();
      }
    },
    [
      _,
      w,
      P,
      s,
      c,
      f,
      i,
      l,
      m,
      p,
      h,
      y,
      C
    ]
  );
}
var xh = 0, Th = () => `__${String(++xh)}__`;
function Rh() {
  let { router: l } = Vd(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = g.useContext(ft), s = qp(), c = l.fetch, f = l.navigate;
  return g.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: C, formData: w, body: _ } = oh(
        m,
        i
      );
      if (p.navigate === !1) {
        let P = p.fetcherKey || Th();
        await c(P, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: w,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || C,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: w,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || C,
          replace: p.replace,
          state: p.state,
          fromRouteId: s,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, f, i, s]
  );
}
function Ph(l, { relative: i } = {}) {
  let { basename: s } = g.useContext(ft), c = g.useContext(Ot);
  Pe(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...al(l || ".", { relative: i }) }, p = Et();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), y = h.getAll("index");
    if (y.some((w) => w === "")) {
      h.delete("index"), y.filter((_) => _).forEach((_) => h.append("index", _));
      let w = h.toString();
      m.search = w ? `?${w}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Rt([s, m.pathname])), rl(m);
}
function Mh(l, { relative: i } = {}) {
  let s = g.useContext($d);
  Pe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Vd(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = al(l, { relative: i });
  if (!s.isTransitioning)
    return !1;
  let m = Qt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Qt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Ta(f.pathname, p) != null || Ta(f.pathname, m) != null;
}
var Hi = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new WeakMap(), od = 0, Lh;
function Ih(l) {
  return l ? (ka.has(l) || (od += 1, ka.set(l, od.toString())), ka.get(l)) : "0";
}
function Dh(l) {
  return Object.keys(l).sort().filter(
    (i) => l[i] !== void 0
  ).map((i) => `${i}_${i === "root" ? Ih(l.root) : l[i]}`).toString();
}
function $h(l) {
  const i = Dh(l);
  let s = Hi.get(i);
  if (!s) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const C = h.isIntersecting && f.some((w) => h.intersectionRatio >= w);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = C), [...(y = c.get(h.target)) != null ? y : []].forEach((w) => {
          w(C, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), s = {
      id: i,
      observer: m,
      elements: c
    }, Hi.set(i, s);
  }
  return s;
}
function zh(l, i, s = {}, c = Lh) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const y = l.getBoundingClientRect();
    return i(c, {
      isIntersecting: c,
      target: l,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: y,
      intersectionRect: y,
      rootBounds: y
    }), () => {
    };
  }
  const { id: f, observer: m, elements: p } = $h(s), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(i), m.observe(l), function() {
    h.splice(h.indexOf(i), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), Hi.delete(f));
  };
}
function sr({
  threshold: l,
  delay: i,
  trackVisibility: s,
  rootMargin: c,
  root: f,
  triggerOnce: m,
  skip: p,
  initialInView: h,
  fallbackInView: y,
  onChange: C
} = {}) {
  var w;
  const [_, P] = g.useState(null), x = g.useRef(C), L = g.useRef(h), [D, T] = g.useState({
    inView: !!h,
    entry: void 0
  });
  x.current = C, g.useEffect(
    () => {
      if (L.current === void 0 && (L.current = h), p || !_) return;
      let W;
      return W = zh(
        _,
        (V, ne) => {
          const ae = L.current;
          L.current = V, !(ae === void 0 && !V) && (T({
            inView: V,
            entry: ne
          }), x.current && x.current(V, ne), ne.isIntersecting && m && W && (W(), W = void 0));
        },
        {
          root: f,
          rootMargin: c,
          threshold: l,
          // @ts-expect-error
          trackVisibility: s,
          delay: i
        },
        y
      ), () => {
        W && W();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(l) ? l.toString() : l,
      _,
      f,
      c,
      m,
      p,
      s,
      y,
      i
    ]
  );
  const $ = (w = D.entry) == null ? void 0 : w.target, R = g.useRef(void 0);
  !_ && $ && !m && !p && R.current !== $ && (R.current = $, T({
    inView: !!h,
    entry: void 0
  }), L.current = h);
  const j = [P, D.inView, D.entry];
  return j.ref = j[0], j.inView = j[1], j.entry = j[2], j;
}
const Oh = "_header_1ricu_1", Ah = "_backButton_1ricu_13", id = {
  header: Oh,
  backButton: Ah
}, ur = () => {
  const l = ir(), i = Et(), s = () => {
    i.pathname.includes("commands") ? l("/scripts") : l("/");
  };
  return /* @__PURE__ */ u.createElement("header", { className: id.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: id.backButton,
      onClick: s
    },
    "← Назад"
  ));
}, pn = (l = 768) => {
  const [i, s] = g.useState(
    window.innerWidth <= l
  );
  return g.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), i;
}, Fh = "_tabs_1jzd9_1", jh = "_dropdown_1jzd9_12", Uh = "_tab_1jzd9_1", Bh = "_active_1jzd9_35", bh = "_menu_1jzd9_40", Hh = "_menuItem_1jzd9_65", ge = {
  tabs: Fh,
  dropdown: jh,
  tab: Uh,
  active: Bh,
  menu: bh,
  menuItem: Hh
}, qt = () => {
  if (!pn())
    return /* @__PURE__ */ u.createElement("div", { className: ge.tabs }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/scripts",
        className: ({ isActive: i }) => i ? `${ge.tab} ${ge.active}` : ge.tab
      },
      "Скрипты"
    ), /* @__PURE__ */ u.createElement("div", { className: ge.dropdown }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: i }) => i ? `${ge.tab} ${ge.active}` : ge.tab
      },
      "Команды"
    ), /* @__PURE__ */ u.createElement("div", { className: ge.menu }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: i }) => i ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/sub",
        className: ({ isActive: i }) => i ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/direct/main",
        className: ({ isActive: i }) => i ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/settings",
        className: ({ isActive: i }) => i ? `${ge.menuItem} ${ge.active}` : ge.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/timer",
        className: ({ isActive: i }) => i ? `${ge.tab} ${ge.active}` : ge.tab
      },
      "Таймер"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/alarm",
        className: ({ isActive: i }) => i ? `${ge.tab} ${ge.active}` : ge.tab
      },
      "Будильник"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/settings",
        className: ({ isActive: i }) => i ? `${ge.tab} ${ge.active}` : ge.tab
      },
      "Настройки"
    ));
}, Vh = "_nav_10mea_1", sd = {
  nav: Vh
}, cr = () => {
  const l = Et(), i = ir(), [s, c] = g.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: sd.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/commands/main" }, "Основные"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/sub" }, "Второстепенные"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/direct/main" }, "Прямые"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/settings" }, "Настройки")) : /* @__PURE__ */ u.createElement("nav", { className: sd.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/scripts" }, "Скрипты"), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), i("/commands/main");
      }
    },
    "Команды"
  ), /* @__PURE__ */ u.createElement(Ve, { to: "/timer" }, "Таймер"), /* @__PURE__ */ u.createElement(Ve, { to: "/alarm" }, "Будильник"), /* @__PURE__ */ u.createElement(Ve, { to: "/settings" }, "Настройки"));
}, Wh = "_button_1u3jy_1", Qh = "_full_1u3jy_20", qh = "_primary_1u3jy_24", Yh = "_secondary_1u3jy_33", Kh = "_ghost_1u3jy_44", zi = {
  button: Wh,
  full: Qh,
  primary: qh,
  secondary: Yh,
  ghost: Kh
}, se = ({
  children: l,
  variant: i = "primary",
  fullWidth: s = !1,
  className: c = "",
  ...f
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    ...f,
    className: `
        ${zi.button}
        ${zi[i]}
        ${s ? zi.full : ""}
        ${c}
      `
  },
  l
), Gh = "_overlay_a2hq1_1", Xh = "_modal_a2hq1_13", Jh = "_header_a2hq1_25", Zh = "_title_a2hq1_35", ev = "_body_a2hq1_42", tv = "_footer_a2hq1_49", nv = "_close_a2hq1_59", Pn = {
  overlay: Gh,
  modal: Xh,
  header: Jh,
  title: Zh,
  body: ev,
  footer: tv,
  close: nv
}, hn = ({
  open: l,
  onClose: i,
  title: s,
  footer: c,
  children: f
}) => (g.useEffect(() => {
  if (!l) return;
  document.body.style.overflow = "hidden";
  const m = (p) => {
    p.key === "Escape" && i();
  };
  return window.addEventListener(
    "keydown",
    m
  ), () => {
    document.body.style.overflow = "", window.removeEventListener(
      "keydown",
      m
    );
  };
}, [l, i]), l ? /* @__PURE__ */ u.createElement(
  "div",
  {
    className: Pn.overlay,
    onClick: i
  },
  /* @__PURE__ */ u.createElement(
    "div",
    {
      className: Pn.modal,
      onClick: (m) => m.stopPropagation()
    },
    /* @__PURE__ */ u.createElement("div", { className: Pn.header }, s && /* @__PURE__ */ u.createElement("h2", { className: Pn.title }, s), /* @__PURE__ */ u.createElement(
      se,
      {
        variant: "ghost",
        className: Pn.close,
        onClick: i
      },
      "✕"
    )),
    /* @__PURE__ */ u.createElement("div", { className: Pn.body }, f),
    c && /* @__PURE__ */ u.createElement("div", { className: Pn.footer }, c)
  )
) : null), rv = "_pagination_1hg7e_1", lv = "_button_1hg7e_9", av = "_label_1hg7e_33", Ca = {
  pagination: rv,
  button: lv,
  label: av
}, dr = ({
  page: l,
  totalPages: i,
  onChange: s
}) => i <= 1 ? null : /* @__PURE__ */ u.createElement("div", { className: Ca.pagination }, /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ca.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ u.createElement("span", { className: Ca.label }, l, " / ", i), /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ca.button,
    disabled: l === i,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), ov = "_accordion_1wwmk_1", iv = "_header_1wwmk_7", sv = "_content_1wwmk_20", Sa = {
  accordion: ov,
  header: iv,
  content: sv
}, zt = ({
  title: l,
  defaultOpen: i = !1,
  children: s
}) => {
  const [c, f] = g.useState(i);
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      className: Sa.accordion,
      "data-open": c
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Sa.header,
        onClick: () => f((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ u.createElement("span", null, l),
      /* @__PURE__ */ u.createElement("span", { className: Sa.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ u.createElement("div", { className: Sa.content }, s)
  );
}, uv = "_field_fc25i_1", cv = "_label_fc25i_7", dv = "_input_fc25i_13", fv = "_error_fc25i_38", mv = "_errorText_fc25i_46", Zr = {
  field: uv,
  label: cv,
  input: dv,
  error: fv,
  errorText: mv
}, fe = ({
  label: l,
  error: i,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: Zr.field }, l && /* @__PURE__ */ u.createElement("label", { className: Zr.label }, l), /* @__PURE__ */ u.createElement(
  "input",
  {
    ...c,
    className: `
          ${Zr.input}
          ${i ? Zr.error : ""}
          ${s}
        `
  }
), i && /* @__PURE__ */ u.createElement("span", { className: Zr.errorText }, i)), pv = ({
  condition: l,
  index: i,
  defaultOpen: s,
  onChange: c
}) => {
  const [f, m] = g.useState(
    !!l.children_type
  ), [p, h] = g.useState(!!l.children_direct_type);
  return /* @__PURE__ */ u.createElement(
    zt,
    {
      title: `Условие ${i + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "Parent_type",
        value: l.parent_type,
        onChange: (y) => c({
          ...l,
          parent_type: y.target.value
        })
      }
    )),
    /* @__PURE__ */ u.createElement("div", null, !f && /* @__PURE__ */ u.createElement(se, { onClick: () => m(!0) }, "Добавить children_type"), f && /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "children_type",
        value: l.children_type || "",
        onChange: (y) => c({
          ...l,
          children_type: y.target.value
        })
      }
    )),
    /* @__PURE__ */ u.createElement("div", null, !p && /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Добавить children_direct_type"), p && /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "children_direct_type",
        value: l.children_direct_type || "",
        onChange: (y) => c({
          ...l,
          children_direct_type: y.target.value
        })
      }
    ))
  );
}, hv = "_dropdown_4l5n9_1", vv = "_button_4l5n9_6", yv = "_arrow_4l5n9_28", gv = "_menu_4l5n9_32", _v = "_active_4l5n9_51", Ev = "_item_4l5n9_58", Mn = {
  dropdown: hv,
  button: vv,
  arrow: yv,
  menu: gv,
  active: _v,
  item: Ev
};
function wv({
  options: l,
  value: i,
  placeholder: s = "Выберите",
  onSelect: c
}) {
  const [f, m] = g.useState(!1), p = g.useRef(null), h = l.find(
    (w) => w.value === i
  ), y = () => {
    m((w) => !w);
  }, C = (w) => {
    c == null || c(w.value), m(!1);
  };
  return g.useEffect(() => {
    const w = (_) => {
      p.current && !p.current.contains(
        _.target
      ) && m(!1);
    };
    return document.addEventListener(
      "mousedown",
      w
    ), () => {
      document.removeEventListener(
        "mousedown",
        w
      );
    };
  }, []), /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${Mn.dropdown} ${f ? Mn.active : ""}`,
      ref: p
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        className: Mn.button,
        onClick: y,
        type: "button"
      },
      /* @__PURE__ */ u.createElement("span", null, (h == null ? void 0 : h.label) || s),
      /* @__PURE__ */ u.createElement("span", { className: Mn.arrow }, "▼")
    ),
    /* @__PURE__ */ u.createElement("div", { className: Mn.menu }, l.map((w) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: w.value,
        className: `${Mn.item} ${i === w.value ? Mn.selected : ""}`,
        onClick: () => C(w)
      },
      w.label
    )))
  );
}
const kv = "_form_1fyva_1", ud = {
  form: kv
}, Cv = ({
  initialData: l,
  isOptionData: i,
  isEdit: s,
  onChange: c
}) => {
  const [f, m] = g.useState({
    uuid: (l == null ? void 0 : l.uuid) || "",
    name: (l == null ? void 0 : l.name) || "",
    script_entity_id: (l == null ? void 0 : l.script_entity_id) || "",
    conditions: (l == null ? void 0 : l.conditions) || [
      {
        parent_type: ""
      }
    ]
  }), p = (C) => {
    m(C), c == null || c(C);
  }, h = () => {
    p({
      ...f,
      conditions: [
        ...f.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, y = (C, w) => {
    const _ = [...f.conditions];
    _[C] = w, p({
      ...f,
      conditions: _
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ud.form }, /* @__PURE__ */ u.createElement(
    fe,
    {
      label: "Название",
      value: f.name,
      onChange: (C) => p({
        ...f,
        name: C.target.value
      })
    }
  ), /* @__PURE__ */ u.createElement(
    wv,
    {
      options: i.map((C) => ({
        label: C.name,
        value: C.entity_id
      })),
      value: f.script_entity_id,
      onSelect: (C) => p({
        ...f,
        script_entity_id: C
      })
    }
  ), f.conditions.map(
    (C, w) => /* @__PURE__ */ u.createElement(
      pv,
      {
        key: w,
        index: w,
        condition: C,
        defaultOpen: !s,
        onChange: (_) => y(w, _)
      }
    )
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      type: "button",
      className: ud.addCondition,
      onClick: h
    },
    "+ Добавить условие"
  ));
}, Sv = "_card_b4x7a_1", Nv = "_content_b4x7a_28", xv = "_title_b4x7a_34", Tv = "_subtitle_b4x7a_40", Rv = "_arrow_b4x7a_45", el = {
  card: Sv,
  content: Nv,
  title: xv,
  subtitle: Tv,
  arrow: Rv
}, Pv = ({
  title: l,
  onClick: i
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    className: el.card,
    onClick: i
  },
  /* @__PURE__ */ u.createElement("div", { className: el.content }, /* @__PURE__ */ u.createElement("div", { className: el.title }, l), /* @__PURE__ */ u.createElement("div", { className: el.subtitle }, "Нажмите для редактирования")),
  /* @__PURE__ */ u.createElement("div", { className: el.arrow }, "→")
), Mv = "_container_czq46_1", Lv = "_visible_czq46_12", cd = {
  container: Mv,
  visible: Lv
}, fr = ({
  children: l,
  offset: i = 100
}) => {
  const [s, c] = g.useState(!1);
  return g.useEffect(() => {
    let f = window.scrollY;
    const m = () => {
      const p = window.scrollY;
      p > f && p > i ? c(!0) : c(!1), f = p;
    };
    return window.addEventListener("scroll", m, {
      passive: !0
    }), () => window.removeEventListener(
      "scroll",
      m
    );
  }, [i]), /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${cd.container} ${s ? cd.visible : ""}`
    },
    l
  );
}, Iv = "_page_4k9hb_1", Dv = "_header_4k9hb_10", $v = "_description_4k9hb_31", zv = "_heading_4k9hb_71", Ov = "_actions_4k9hb_76", Av = "_list_4k9hb_81", lr = {
  page: Iv,
  header: Dv,
  description: $v,
  heading: zv,
  actions: Ov,
  list: Av
}, Wd = g.createContext(null);
function ol() {
  const l = g.useContext(Wd);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const Fv = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function jv() {
  const l = ol(), [i, s] = g.useState(!0), [c, f] = g.useState(null), m = g.useRef(!1), p = g.useCallback(
    async (P = 1, x = !1) => {
      s(!0);
      try {
        const L = Fv(
          await l._getShort(
            "get_script_actions_short",
            P
          )
        );
        f((D) => !x || !D ? L : {
          ...L,
          script_actions: [
            ...D.script_actions,
            ...L.script_actions
          ]
        });
      } finally {
        s(!1);
      }
    },
    [l]
  );
  return g.useEffect(() => {
    m.current || (m.current = !0, p());
  }, [p]), {
    loading: i,
    scripts: c,
    loadScripts: p,
    scriptData: () => l.getScripts(),
    saveScript: async (P) => {
      await l._save(P, "save_script_action"), await p((c == null ? void 0 : c.page) ?? 1);
    },
    updateScript: async (P, x) => {
      await l._update(P, "update_script_action", x), await p((c == null ? void 0 : c.page) ?? 1);
    },
    getScriptAction: async (P) => (await l._getDetail(
      P,
      "get_script_action"
    )).data,
    deleteScriptAction: async (P) => {
      await l._delete(P, "delete_script_action"), await p((c == null ? void 0 : c.page) ?? 1);
    }
  };
}
const Uv = () => {
  const l = pn(), { ref: i, inView: s } = sr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = g.useState(), [m, p] = g.useState(), [h, y] = g.useState(!1), [C, w] = g.useState(!1), [_, P] = g.useState(!1), {
    loading: x,
    scripts: L,
    scriptData: D,
    loadScripts: T,
    saveScript: $,
    updateScript: R,
    getScriptAction: j,
    deleteScriptAction: W
  } = jv();
  g.useEffect(() => {
    !_ || !l || !s || x || !L || L.page >= L.total_pages || T(L.page + 1, !0);
  }, [
    s,
    l,
    x,
    L,
    T
  ]), g.useEffect(() => {
    !x && L && L.page === 1 && P(!0);
  }, [x, L]);
  const V = () => {
    p(void 0), w(!1), y(!0);
  }, ne = async (b) => {
    w(!0);
    const we = await j(
      b.uuid
    );
    p(we), y(!0);
  }, ae = async () => {
    if (C) {
      const b = c == null ? void 0 : c.uuid;
      if (!b) return;
      const { uuid: we, ...Se } = c;
      await R(b, Se);
    } else
      await $(c);
    y(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ur, null), /* @__PURE__ */ u.createElement("div", { className: lr.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: lr.header }, /* @__PURE__ */ u.createElement("div", { className: lr.heading }, /* @__PURE__ */ u.createElement("p", { className: lr.description }, "Создавайте и редактируйте автоматизации и условия")), /* @__PURE__ */ u.createElement("div", { className: lr.actions }, l ? /* @__PURE__ */ u.createElement(fr, null, /* @__PURE__ */ u.createElement(
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
  ))), x && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: lr.list }, L == null ? void 0 : L.script_actions.map((b) => /* @__PURE__ */ u.createElement(
    Pv,
    {
      key: b.uuid,
      title: b.title,
      onClick: () => ne(b)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: i, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    dr,
    {
      page: (L == null ? void 0 : L.page) || 1,
      totalPages: (L == null ? void 0 : L.total_pages) || 1,
      onChange: T
    }
  ), /* @__PURE__ */ u.createElement(
    hn,
    {
      open: h,
      onClose: () => y(!1),
      title: C ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, C && /* @__PURE__ */ u.createElement(
        se,
        {
          variant: "ghost",
          onClick: async () => {
            m != null && m.uuid && (await W(
              m.uuid
            ), y(!1));
          }
        },
        "Удалить"
      ), /* @__PURE__ */ u.createElement(
        se,
        {
          onClick: ae
        },
        "Сохранить"
      ))
    },
    /* @__PURE__ */ u.createElement(
      Cv,
      {
        initialData: m,
        isEdit: C,
        isOptionData: D(),
        onChange: f
      }
    )
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Bv = "_wrapper_i8msc_1", bv = "_labelRow_i8msc_5", Hv = "_label_i8msc_5", Vv = "_selectedTitle_i8msc_18", Wv = "_dropdown_i8msc_27", Qv = "_option_i8msc_42", qv = "_title_i8msc_64", Yv = "_uuid_i8msc_69", Kv = "_hint_i8msc_70", $t = {
  wrapper: Bv,
  labelRow: bv,
  label: Hv,
  selectedTitle: Vv,
  dropdown: Wv,
  option: Qv,
  title: qv,
  uuid: Yv,
  hint: Kv
}, dd = ({
  label: l = "uuid",
  value: i,
  selectedTitle: s,
  searchSource: c = "assistant_commands",
  onChange: f,
  onSelect: m
}) => {
  const p = ol(), [h, y] = g.useState([]), [C, w] = g.useState(!1), [_, P] = g.useState(!1), x = g.useRef(0), L = g.useMemo(() => i.trim(), [i]);
  g.useEffect(() => {
    if (L.length < 2) {
      y([]), w(!1);
      return;
    }
    const T = x.current + 1;
    x.current = T;
    const $ = window.setTimeout(async () => {
      P(!0);
      try {
        const R = c === "sub_direct_controls" ? await p.searchAssistantSubDirectControls(L) : await p.searchAssistantCommands(L);
        if (x.current !== T) return;
        const j = Array.isArray(R == null ? void 0 : R.data) ? R.data : [];
        y(j), w(j.length > 0);
      } finally {
        x.current === T && P(!1);
      }
    }, 250);
    return () => window.clearTimeout($);
  }, [p, L, c]);
  const D = (T) => {
    f(T.uuid), m == null || m(T), w(!1);
  };
  return /* @__PURE__ */ u.createElement("div", { className: $t.wrapper }, /* @__PURE__ */ u.createElement("div", { className: $t.labelRow }, /* @__PURE__ */ u.createElement("span", { className: $t.label }, l), s && /* @__PURE__ */ u.createElement("span", { className: $t.selectedTitle }, s)), /* @__PURE__ */ u.createElement(
    fe,
    {
      value: i,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      onBlur: () => window.setTimeout(() => w(!1), 150),
      onFocus: () => w(h.length > 0),
      onChange: (T) => f(T.target.value)
    }
  ), C && /* @__PURE__ */ u.createElement("div", { className: $t.dropdown }, h.map((T) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: T.uuid,
      type: "button",
      className: $t.option,
      onMouseDown: ($) => $.preventDefault(),
      onClick: () => D(T)
    },
    /* @__PURE__ */ u.createElement("span", { className: $t.title }, T.title || "Без названия"),
    /* @__PURE__ */ u.createElement("span", { className: $t.uuid }, T.uuid),
    T.mappingType && /* @__PURE__ */ u.createElement("span", { className: $t.uuid }, "mappingType: ", T.mappingType)
  ))), _ && /* @__PURE__ */ u.createElement("span", { className: $t.hint }, "Поиск..."));
}, Gv = "_form_nymr0_1", Xv = "_checkboxRow_nymr0_7", Jv = "_field_nymr0_15", Zv = "_textarea_nymr0_24", ey = "_arrayItem_nymr0_37", Wt = {
  form: Gv,
  checkboxRow: Xv,
  field: Jv,
  textarea: Zv,
  arrayItem: ey
}, fd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), Qd = ({
  open: l,
  isEdit: i,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = g.useMemo(() => {
    if (s[c]) return s[c] ?? fd();
  }, [s]), C = (x) => {
    f((L) => ({
      ...L,
      [c]: {
        ...L[c] ?? fd(),
        ...x
      }
    }));
  }, w = (x, L, D) => {
    const T = [...y[x] ?? []];
    T[L] = { ...T[L], ...D }, C({
      [x]: T
    });
  }, _ = (x, L) => {
    C({
      [x]: [...y[x] ?? [], L]
    });
  }, P = (x, L) => {
    C({
      [x]: (y[x] ?? []).filter(
        (D, T) => T !== L
      )
    });
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: m,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: i ? h : p }, i ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Wt.form }, /* @__PURE__ */ u.createElement("label", { className: Wt.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: s.status ?? !0,
        onChange: (x) => f({
          ...s,
          status: x.target.checked
        })
      }
    ), "Команда включена"), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "Название команды",
        value: s.title,
        onChange: (x) => f({
          ...s,
          title: x.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("label", { className: Wt.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: y.endStatus,
        onChange: (x) => C({
          endStatus: x.target.checked
        })
      }
    ), "Завершать диалог"), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement("label", { className: Wt.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: y.forwardText,
        onChange: (x) => C({
          forwardText: x.target.checked
        })
      }
    ), "forwardText") : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "actionType",
        value: y.actionType,
        onChange: (x) => C({
          actionType: x.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "answerType",
        value: y.answerType,
        onChange: (x) => C({
          answerType: x.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Wt.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: Wt.textarea,
        rows: 6,
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (x) => C({
          voiceCommands: x.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(zt, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((x, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: Wt.arrayItem }, /* @__PURE__ */ u.createElement(
      dd,
      {
        label: "uuid",
        value: x.uuid,
        selectedTitle: x.title,
        searchSource: "sub_direct_controls",
        onChange: (D) => w("nextDirectControl", L, {
          uuid: D
        }),
        onSelect: (D) => w("nextDirectControl", L, {
          uuid: D.uuid,
          actionType: D.actionType ?? D.mappingType ?? "",
          title: D.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "actionType",
        value: x.actionType ?? "",
        onChange: (D) => w("nextDirectControl", L, {
          actionType: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => P("nextDirectControl", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => _("nextDirectControl", {
          uuid: "",
          actionType: "",
          title: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(zt, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((x, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: Wt.arrayItem }, /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "actionType",
        value: x.actionType,
        onChange: (D) => w("voiceResponseArray", L, {
          actionType: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "voiceResponse",
        value: x.voiceResponse,
        onChange: (D) => w("voiceResponseArray", L, {
          voiceResponse: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => P("voiceResponseArray", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => _("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(zt, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((x, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: Wt.arrayItem }, /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "actionTypeComponent",
        value: x.actionTypeComponent,
        onChange: (D) => w("nextAction", L, {
          actionTypeComponent: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "actionType",
        value: x.actionType,
        onChange: (D) => w("nextAction", L, {
          actionType: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      dd,
      {
        label: "uuid",
        value: x.uuid,
        selectedTitle: x.title,
        onChange: (D) => w("nextAction", L, {
          uuid: D
        }),
        onSelect: (D) => w("nextAction", L, {
          uuid: D.uuid,
          actionType: D.actionType ?? "",
          title: D.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => P("nextAction", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => _("nextAction", {
          actionTypeComponent: "",
          actionType: "",
          uuid: "",
          title: ""
        })
      },
      "Добавить ещё"
    )))
  );
}, ty = "_overlay_1em8e_1", ny = "_sheet_1em8e_10", ry = "_handle_1em8e_18", Oi = {
  overlay: ty,
  sheet: ny,
  handle: ry
}, ly = ({
  open: l,
  onClose: i,
  children: s
}) => l ? (g.useEffect(() => {
  if (!l) return;
  const c = document.body.style.overflow;
  return document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = c;
  };
}, [l]), /* @__PURE__ */ u.createElement("div", { className: Oi.overlay, onClick: i }, /* @__PURE__ */ u.createElement(
  "div",
  {
    className: Oi.sheet,
    onClick: (c) => c.stopPropagation()
  },
  /* @__PURE__ */ u.createElement("div", { className: Oi.handle }),
  s
))) : null, ay = "_content_19r5a_1", oy = "_title_19r5a_7", iy = "_actions_19r5a_14", Ai = {
  content: ay,
  title: oy,
  actions: iy
}, il = ({
  open: l,
  command: i,
  onClose: s,
  onToggleStatus: c,
  onDelete: f
}) => {
  const m = pn();
  if (!i) return null;
  const p = /* @__PURE__ */ u.createElement("div", { className: Ai.content }, /* @__PURE__ */ u.createElement("h3", { className: Ai.title }, i.title), /* @__PURE__ */ u.createElement("div", { className: Ai.actions }, /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        c(i.uuid, !!i.status), s();
      }
    },
    i.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        f(i.uuid), s();
      }
    },
    "Удалить"
  )));
  return m ? /* @__PURE__ */ u.createElement(ly, { open: l, onClose: s }, p) : /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    p
  );
}, sy = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function sl(l) {
  const i = ol(), [s, c] = g.useState(null), [f, m] = g.useState(!0), p = g.useRef(!1), h = async (x, L = 1, D = !1) => {
    m(!0);
    try {
      const T = sy(await i._getShort(`${x}`, L));
      c(($) => !D || !$ ? T : {
        ...T,
        data: [
          ...$.data,
          ...T.data
        ]
      });
    } finally {
      m(!1);
    }
  };
  return g.useEffect(() => {
    p.current || (p.current = !0, h(l));
  }, [h]), {
    loading: f,
    commands: s,
    loadCommands: h,
    saveCommand: async (x, L) => await i._save(L, x),
    deleteCommand: async (x, L) => await i._delete(L, x),
    updateCommand: async (x, L) => {
      if (console.log(L), !L.uuid) return;
      const { uuid: D, ...T } = L;
      return await i._update(D, x, T);
    },
    editStatusCommand: async (x, L, D) => await i._update_status(x, L, D),
    detailInformationCommand: async (x, L) => await i._getDetail(L, x)
  };
}
const uy = "_page_1m1fb_1", cy = "_header_1m1fb_10", dy = "_description_1m1fb_25", fy = "_state_1m1fb_80", my = "_commandList_1m1fb_84", py = "_commandTab_1m1fb_89", hy = "_commandButton_1m1fb_96", vy = "_moreButton_1m1fb_97", yy = "_innerTabs_1m1fb_135", gy = "_innerTab_1m1fb_135", _y = "_activeInnerTab_1m1fb_156", Ey = "_headerTop_1m1fb_163", Y = {
  page: uy,
  header: cy,
  description: dy,
  state: fy,
  commandList: my,
  commandTab: py,
  commandButton: hy,
  moreButton: vy,
  innerTabs: yy,
  innerTab: gy,
  activeInnerTab: _y,
  headerTop: Ey
}, wy = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), md = () => ({
  status: !0,
  title: "",
  componentDialog: {
    ...wy(),
    forwardText: !1
  }
}), ky = () => {
  const l = pn(), [i, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => md()), [h, y] = g.useState(null), { ref: C, inView: w } = sr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: P,
    deleteCommand: x,
    detailInformationCommand: L,
    saveCommand: D,
    updateCommand: T,
    editStatusCommand: $,
    commands: R
  } = sl("get_assistant_commands_short"), [j, W] = g.useState(!1);
  g.useEffect(() => {
    !j || !l || !w || _ || !R || R.page >= R.total_pages || P("get_assistant_commands_short", R.page + 1, !0);
  }, [
    w,
    l,
    _,
    R,
    P
  ]), g.useEffect(() => {
    !_ && R && R.page === 1 && W(!0);
  }, [_, R]);
  const V = () => {
    f(!1), p(md()), s(!0);
  }, ne = async (X) => {
    f(!0);
    const ye = await L("get_assistant_command", X.uuid);
    p(ye.data), s(!0);
  }, ae = async (X, ye) => {
    console.log(X, ye), await $("update_assistant_command_status", X, ye), P("get_assistant_commands_short");
  }, b = async (X) => {
    await x("delete_assistant_command", X), P("get_assistant_commands_short");
  }, we = async () => {
    await D("save_assistant_command", m), s(!1);
  }, Se = async () => {
    await T("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ur, null), /* @__PURE__ */ u.createElement("div", { className: Y.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: Y.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Y.header }, /* @__PURE__ */ u.createElement("div", { className: Y.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Y.heading }, /* @__PURE__ */ u.createElement("p", { className: Y.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(fr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, R == null ? void 0 : R.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: Y.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Y.commandButton, onClick: () => ne(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Y.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => y(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    dr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (X) => P("get_assistant_commands_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    Qd,
    {
      open: i,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: we,
      onUpdate: Se
    }
  ), /* @__PURE__ */ u.createElement(
    il,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ae,
      onDelete: b
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Cy = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), pd = () => ({
  status: !0,
  title: "",
  subComponentDialog: {
    ...Cy(),
    forwardText: !1
  }
}), Sy = () => {
  const l = pn(), [i, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => pd()), [h, y] = g.useState(null), { ref: C, inView: w } = sr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: P,
    deleteCommand: x,
    detailInformationCommand: L,
    saveCommand: D,
    updateCommand: T,
    editStatusCommand: $,
    commands: R
  } = sl("get_assistant_sub_commands_short"), [j, W] = g.useState(!1);
  g.useEffect(() => {
    !j || !l || !w || _ || !R || R.page >= R.total_pages || P("get_assistant_sub_commands_short", R.page + 1, !0);
  }, [
    w,
    l,
    _,
    R,
    P
  ]), g.useEffect(() => {
    !_ && R && R.page === 1 && W(!0);
  }, [_, R]);
  const V = () => {
    f(!1), p(pd()), s(!0);
  }, ne = async (X) => {
    f(!0);
    const ye = await L("get_assistant_sub_command", X.uuid);
    p(ye.data), s(!0);
  }, ae = async (X, ye) => {
    await $("update_assistant_sub_command_status", X, ye), P("get_assistant_sub_commands_short");
  }, b = async (X) => {
    await x("delete_assistant_sub_command", X), P("get_assistant_sub_commands_short");
  }, we = async () => {
    await D("save_assistant_sub_command", m), s(!1);
  }, Se = async () => {
    await T("update_assistant_sub_command_status", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ur, null), /* @__PURE__ */ u.createElement("div", { className: Y.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: Y.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Y.header }, /* @__PURE__ */ u.createElement("div", { className: Y.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Y.heading }, /* @__PURE__ */ u.createElement("p", { className: Y.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(fr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, R == null ? void 0 : R.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: Y.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Y.commandButton, onClick: () => ne(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Y.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => y(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    dr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (X) => P("get_assistant_sub_commands_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    Qd,
    {
      open: i,
      isEdit: c,
      formData: m,
      formatData: "subComponentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: we,
      onUpdate: Se
    }
  ), /* @__PURE__ */ u.createElement(
    il,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ae,
      onDelete: b
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Ny = "_field_veq7g_1", xy = "_label_veq7g_7", Ty = "_textarea_veq7g_13", Ry = "_error_veq7g_40", Py = "_errorText_veq7g_48", tl = {
  field: Ny,
  label: xy,
  textarea: Ty,
  error: Ry,
  errorText: Py
}, qd = ({
  label: l,
  error: i,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: tl.field }, l && /* @__PURE__ */ u.createElement("label", { className: tl.label }, l), /* @__PURE__ */ u.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${tl.textarea}
          ${i ? tl.error : ""}
          ${s}
        `
  }
), i && /* @__PURE__ */ u.createElement("span", { className: tl.errorText }, i)), hd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), My = ({
  open: l,
  onClose: i,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = g.useMemo(() => c.directControl ?? hd(), [c]), h = (_) => {
    f((P) => ({
      ...P,
      directControl: {
        ...P.directControl ?? hd(),
        ..._
      }
    }));
  }, y = (_, P) => {
    const x = [...p.subDirectControl ?? []];
    x[_] = {
      ...x[_],
      ...P
    }, h({
      subDirectControl: x
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
  }, w = (_) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((P, x) => x !== _)
    });
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: i,
      title: s,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: i }, "Отмена"), /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ u.createElement("div", { className: Y.form }, /* @__PURE__ */ u.createElement("label", { className: Y.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: c.status ?? !0,
        onChange: (_) => f((P) => ({
          ...P,
          status: _.target.checked
        }))
      }
    ), "Команда включена"), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((P) => ({
          ...P,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "valueType",
        value: p.valueType,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Y.field }, /* @__PURE__ */ u.createElement(
      qd,
      {
        label: "voiceCommands",
        rows: 6,
        value: (p.voiceCommands ?? []).join(`
`),
        onChange: (_) => h({
          voiceCommands: _.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement("label", { className: Y.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: p.manual,
        onChange: (_) => h({
          manual: _.target.checked,
          subDirectControl: _.target.checked ? [] : ""
        })
      }
    ), "manual"), p.manual ? /* @__PURE__ */ u.createElement(zt, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, P) => /* @__PURE__ */ u.createElement("div", { key: P, className: Y.arrayItem }, /* @__PURE__ */ u.createElement(
        fe,
        {
          label: "subMappingType",
          value: _.subMappingType,
          onChange: (x) => y(P, {
            subMappingType: x.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: Y.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: Y.textarea,
          rows: 3,
          value: _.subVoiceCommands,
          onChange: (x) => y(P, {
            subVoiceCommands: x.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: () => w(P)
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
      fe,
      {
        label: "subDirectControl",
        value: typeof p.subDirectControl == "string" ? p.subDirectControl : "",
        onChange: (_) => h({
          subDirectControl: _.target.value
        })
      }
    ))
  );
}, Ly = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), vd = () => ({
  status: !0,
  title: "",
  subComponentDialog: {
    ...Ly(),
    forwardText: !1
  }
}), Iy = () => {
  const l = pn(), [i, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => vd()), [h, y] = g.useState(null), C = m.directControl, w = Array.isArray(C == null ? void 0 : C.subDirectControl) ? C.subDirectControl : [], _ = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [P, x] = g.useState("main"), L = ir(), { ref: D, inView: T } = sr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: $,
    loadCommands: R,
    deleteCommand: j,
    detailInformationCommand: W,
    saveCommand: V,
    updateCommand: ne,
    editStatusCommand: ae,
    commands: b
  } = sl("get_assistant_sub_direct_controls_short"), [we, Se] = g.useState(!1);
  g.useEffect(() => {
    !we || !l || !T || $ || !b || b.page >= b.total_pages || R("get_assistant_sub_direct_controls_short", b.page + 1, !0);
  }, [
    T,
    l,
    $,
    b,
    R
  ]), g.useEffect(() => {
    !$ && b && b.page === 1 && Se(!0);
  }, [$, b]);
  const X = () => {
    f(!1), p(vd()), s(!0);
  }, ye = async (oe) => {
    f(!0);
    const B = await W("get_assistant_sub_direct_control", oe.uuid);
    p(B.data), s(!0);
  }, Oe = async (oe, B) => {
    await ae("update_assistant_sub_direct_control", oe, B), R("get_assistant_sub_direct_controls_short");
  }, Fe = async (oe) => {
    await j("delete_assistant_sub_direct_control", oe), R("get_assistant_sub_direct_controls_short");
  }, ie = async () => {
    await V("save_assistant_sub_direct_control", m), s(!1);
  }, Ie = async () => {
    await ne("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ur, null), /* @__PURE__ */ u.createElement("div", { className: Y.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), $ && /* @__PURE__ */ u.createElement("div", { className: Y.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Y.header }, /* @__PURE__ */ u.createElement("div", { className: Y.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Y.innerTabs }, _.map((oe) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: oe.key,
      type: "button",
      className: `${Y.innerTab} ${P === oe.key ? Y.activeInnerTab : ""}`,
      onClick: () => {
        x(oe.key), L(`/commands/direct/${oe.key === "main" ? "main" : "template"}`);
      }
    },
    oe.label
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.heading }, /* @__PURE__ */ u.createElement("p", { className: Y.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(fr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: X
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: X
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, b == null ? void 0 : b.data.map((oe) => /* @__PURE__ */ u.createElement("div", { key: oe.uuid, className: Y.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Y.commandButton, onClick: () => ye(oe) }, /* @__PURE__ */ u.createElement("span", null, oe.title), /* @__PURE__ */ u.createElement("small", null, oe.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Y.moreButton,
      "aria-label": `Действия команды ${oe.title}`,
      onClick: () => y(oe)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: D, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    dr,
    {
      page: (b == null ? void 0 : b.page) || 1,
      totalPages: (b == null ? void 0 : b.total_pages) || 1,
      onChange: (oe) => R("get_assistant_sub_direct_controls_short", oe)
    }
  ), /* @__PURE__ */ u.createElement(
    My,
    {
      open: i,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      directControl: C,
      directItems: w,
      updateDirectControl: Ie,
      updateSubDirectItem: Ie,
      removeSubDirectItem: Fe,
      addSubDirectItem: ie,
      onSave: c ? Ie : ie
    }
  ), /* @__PURE__ */ u.createElement(
    il,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: Oe,
      onDelete: Fe
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Dy = ({
  open: l,
  onClose: i,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = g.useMemo(
    () => c.subDirectControl ?? [],
    [c]
  ), h = (_) => {
    f((P) => ({
      ...P,
      subDirectControl: _
    }));
  }, y = (_, P) => {
    const x = [...p];
    x[_] = {
      ...x[_],
      ...P
    }, h(x);
  }, C = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, w = (_) => {
    h(
      p.filter((P, x) => x !== _)
    );
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: i,
      title: s,
      footer: /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Y.form }, /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((P) => ({
          ...P,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      zt,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((_, P) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: P,
          className: Y.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          fe,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (x) => y(P, {
              subMappingType: x.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          qd,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (_.subVoiceCommands ?? []).join(`
`),
            onChange: (x) => y(P, {
              subVoiceCommands: x.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          se,
          {
            type: "button",
            variant: "ghost",
            onClick: () => w(P)
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
}, yd = () => ({
  status: !0,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), $y = () => {
  const l = pn(), i = ir(), [s, c] = g.useState(!1), [f, m] = g.useState(!1), [p, h] = g.useState(yd), [y, C] = g.useState(null), [w, _] = g.useState("template"), [P, x] = g.useState(!1), L = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: D, inView: T } = sr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: $,
    loadCommands: R,
    deleteCommand: j,
    detailInformationCommand: W,
    saveCommand: V,
    updateCommand: ne,
    editStatusCommand: ae,
    commands: b
  } = sl(
    "get_assistant_sub_direct_control_samples_short"
  );
  g.useEffect(() => {
    !P || !l || !T || $ || !b || b.page >= b.total_pages || R(
      "get_assistant_sub_direct_control_samples_short",
      b.page + 1,
      !0
    );
  }, [
    P,
    T,
    l,
    $,
    b,
    R
  ]), g.useEffect(() => {
    !$ && b && b.page === 1 && x(!0);
  }, [$, b]);
  const we = () => {
    m(!1), h(yd()), c(!0);
  }, Se = async (ie) => {
    m(!0);
    const Ie = await W(
      "get_assistant_sub_direct_control_sample",
      ie.uuid
    );
    h(Ie.data), c(!0);
  }, X = async (ie, Ie) => {
    await ae(
      "update_assistant_sub_direct_control",
      ie,
      Ie
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ye = async (ie) => {
    await j(
      "delete_assistant_sub_direct_control_sample",
      ie
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Oe = async () => {
    await V(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Fe = async () => {
    await ne(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ur, null), /* @__PURE__ */ u.createElement("div", { className: Y.page }, !l && /* @__PURE__ */ u.createElement(qt, null), $ && /* @__PURE__ */ u.createElement("div", { className: Y.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Y.header }, /* @__PURE__ */ u.createElement("div", { className: Y.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Y.innerTabs }, L.map((ie) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: ie.key,
      type: "button",
      className: `${Y.innerTab} ${w === ie.key ? Y.activeInnerTab : ""}`,
      onClick: () => {
        _(ie.key), i(
          `/commands/direct/${ie.key === "main" ? "main" : "template"}`
        );
      }
    },
    ie.label
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.heading }, /* @__PURE__ */ u.createElement("p", { className: Y.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(fr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      onClick: we
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      onClick: we
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, b == null ? void 0 : b.data.map((ie) => /* @__PURE__ */ u.createElement(
    "div",
    {
      key: ie.uuid,
      className: Y.commandTab
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Y.commandButton,
        onClick: () => Se(ie)
      },
      /* @__PURE__ */ u.createElement("span", null, ie.title),
      /* @__PURE__ */ u.createElement("small", null, ie.status === !1 ? "Выключена" : "Включена")
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Y.moreButton,
        onClick: () => C(ie)
      },
      "⋯"
    )
  ))), l ? /* @__PURE__ */ u.createElement(
    "div",
    {
      ref: D,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ u.createElement(
    dr,
    {
      page: (b == null ? void 0 : b.page) ?? 1,
      totalPages: (b == null ? void 0 : b.total_pages) ?? 1,
      onChange: (ie) => R(
        "get_assistant_sub_direct_control_samples_short",
        ie
      )
    }
  ), /* @__PURE__ */ u.createElement(
    Dy,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Fe : Oe
    }
  ), /* @__PURE__ */ u.createElement(
    il,
    {
      open: !!y,
      command: y,
      onClose: () => C(null),
      onToggleStatus: X,
      onDelete: ye
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, zy = "_form_nymr0_1", Oy = "_checkboxRow_nymr0_7", Ay = "_field_nymr0_15", Fy = "_textarea_nymr0_24", nl = {
  form: zy,
  checkboxRow: Oy,
  field: Ay,
  textarea: Fy
}, gd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), jy = ({
  open: l,
  isEdit: i,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = g.useMemo(() => {
    if (s[c]) return s[c] ?? gd();
  }, [s]), C = (w) => {
    f((_) => ({
      ..._,
      [c]: {
        ..._[c] ?? gd(),
        ...w
      }
    }));
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: m,
      title: i ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: i ? h : p }, i ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: nl.form }, /* @__PURE__ */ u.createElement("label", { className: nl.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: s.status ?? !0,
        onChange: (w) => f({
          ...s,
          status: w.target.checked
        })
      }
    ), "Команда включена"), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "Название команды",
        value: s.title,
        onChange: (w) => f({
          ...s,
          title: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("label", { className: nl.checkboxRow }, /* @__PURE__ */ u.createElement(
      "input",
      {
        type: "checkbox",
        checked: y.endStatus,
        onChange: (w) => C({
          endStatus: w.target.checked
        })
      }
    ), "Завершать диалог"), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "actionType",
        value: y.actionType,
        onChange: (w) => C({
          actionType: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fe,
      {
        label: "answerType",
        value: y.answerType,
        onChange: (w) => C({
          answerType: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: nl.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: nl.textarea,
        rows: 6,
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (w) => C({
          voiceCommands: w.target.value.split(`
`)
        })
      }
    )))
  );
}, Uy = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), _d = () => ({
  status: !0,
  title: "",
  componentDialog: {
    ...Uy(),
    forwardText: !1
  }
}), By = () => {
  const l = pn(), [i, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => _d()), [h, y] = g.useState(null), { ref: C, inView: w } = sr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: P,
    deleteCommand: x,
    detailInformationCommand: L,
    saveCommand: D,
    updateCommand: T,
    editStatusCommand: $,
    commands: R
  } = sl("get_assistant_settings_short"), [j, W] = g.useState(!1);
  g.useEffect(() => {
    !j || !l || !w || _ || !R || R.page >= R.total_pages || P("get_assistant_settings_short", R.page + 1, !0);
  }, [
    w,
    l,
    _,
    R,
    P
  ]), g.useEffect(() => {
    !_ && R && R.page === 1 && W(!0);
  }, [_, R]);
  const V = () => {
    f(!1), p(_d()), s(!0);
  }, ne = async (X) => {
    f(!0);
    const ye = await L("get_assistant_command", X.uuid);
    p(ye.data), s(!0);
  }, ae = async (X, ye) => {
    console.log(X, ye), await $("update_assistant_setting", X, ye), P("get_assistant_settings_short");
  }, b = async (X) => {
    await x("delete_assistant_setting", X), P("get_assistant_settings_short");
  }, we = async () => {
    await D("save_assistant_setting", m), s(!1);
  }, Se = async () => {
    await T("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ur, null), /* @__PURE__ */ u.createElement("div", { className: Y.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: Y.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Y.header }, /* @__PURE__ */ u.createElement("div", { className: Y.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Y.heading }, /* @__PURE__ */ u.createElement("p", { className: Y.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(fr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, R == null ? void 0 : R.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: Y.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Y.commandButton, onClick: () => ne(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Y.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => y(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    dr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (X) => P("get_assistant_settings_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    jy,
    {
      open: i,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: we,
      onUpdate: Se
    }
  ), /* @__PURE__ */ u.createElement(
    il,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ae,
      onDelete: b
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, by = "_form_1bj0d_1", Hy = "_field_1bj0d_7", Vy = "_input_1bj0d_13", Wy = "_label_1bj0d_32", Qy = "_checkboxRow_1bj0d_38", Xe = {
  form: by,
  field: Hy,
  input: Vy,
  label: Wy,
  checkboxRow: Qy
}, qy = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(fe, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(fe, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(fe, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(fe, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: Xe.field }, /* @__PURE__ */ u.createElement("span", { className: Xe.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: Xe.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: Xe.field }, /* @__PURE__ */ u.createElement("span", { className: Xe.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: Xe.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(fe, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, Yy = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(fe, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(fe, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, Ky = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(fe, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(fe, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, Gy = ({ data: l, onChange: i }) => {
  const s = (c, f) => {
    i({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(
    fe,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: Xe.field }, /* @__PURE__ */ u.createElement("span", { className: Xe.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: Xe.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ u.createElement("input", { type: "checkbox", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement("span", null, "Is admin")), /* @__PURE__ */ u.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ u.createElement("input", { type: "checkbox", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement("span", null, "Active remout")), /* @__PURE__ */ u.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ u.createElement("input", { type: "checkbox", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), /* @__PURE__ */ u.createElement("span", null, "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)")), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    fe,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, Xy = "_page_tlhec_1", Jy = {
  page: Xy
};
function Zy() {
  const l = ol(), [i, s] = g.useState(!0), [c, f] = g.useState(null), m = g.useCallback(async () => {
    s(!0);
    try {
      const h = await l._getShort("get_settings");
      console.log(h), f((h == null ? void 0 : h.result) ?? h);
    } finally {
      s(!1);
    }
  }, [l]);
  return g.useEffect(() => {
    m();
  }, []), {
    loading: i,
    settings: c,
    saveSettings: async (h) => {
      await l._save(h, "save_settings");
    },
    loadScripts: m
  };
}
const eg = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, Pa = {
  base_url: "",
  token: ""
}, tg = {
  global_music_timer: "",
  global_music_alarm: ""
}, Ed = {
  yandex_tts: eg,
  remout: Pa,
  timer_alarm: tg,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, ng = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), rg = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), lg = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), ag = (l) => ({
  yandex_tts: ng(l == null ? void 0 : l.yandex_tts),
  remout: rg(l == null ? void 0 : l.remout),
  timer_alarm: lg(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Fi = (l, i) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== i[f] && (s[f] = l[f]);
  }), s;
}, og = (l, i) => {
  const s = {}, c = Fi(l.yandex_tts, i.yandex_tts), f = Fi(l.timer_alarm, i.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== i.theme && (s.theme = l.theme), l.is_admin !== i.is_admin && (s.is_admin = l.is_admin), l.active_remout !== i.active_remout && (s.active_remout = l.active_remout), l.client_id !== i.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== i.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== i.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Fi(l.remout ?? Pa, i.remout ?? Pa);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, ig = () => {
  const [l, i] = g.useState(Ed), [s, c] = g.useState(Ed), { settings: f, saveSettings: m } = Zy();
  g.useEffect(() => {
    if (!f) return;
    const h = ag(f);
    i(h), c(h);
  }, [f]);
  const p = () => {
    const h = og(l, s);
    m(h);
  };
  return /* @__PURE__ */ u.createElement("div", { className: Jy.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement(zt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    Gy,
    {
      data: {
        active_remout: l.active_remout,
        is_admin: l.is_admin,
        theme: l.theme,
        client_id: l.client_id,
        api_commands_enabled: l.api_commands_enabled,
        api_commands_token: l.api_commands_token
      },
      onChange: (h) => i({ ...l, ...h })
    }
  )), /* @__PURE__ */ u.createElement(zt, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    qy,
    {
      data: l.yandex_tts,
      onChange: (h) => i({ ...l, yandex_tts: h })
    }
  )), l.active_remout && /* @__PURE__ */ u.createElement(zt, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    Yy,
    {
      data: l.remout ?? Pa,
      onChange: (h) => i({ ...l, remout: h })
    }
  )), /* @__PURE__ */ u.createElement(zt, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    Ky,
    {
      data: l.timer_alarm,
      onChange: (h) => i({ ...l, timer_alarm: h })
    }
  )), /* @__PURE__ */ u.createElement(se, { onClick: p }, "Сохранить"));
}, Ln = (l) => {
  var i;
  return ((i = l == null ? void 0 : l.result) == null ? void 0 : i.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, sg = (l) => {
  const i = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + i * 60 * 1e3).toISOString();
}, Yd = (l) => {
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
    return Yd(l.count_timer || "");
  }
  return 0;
}, ug = (l) => {
  const i = Math.max(1, Number(l) || 1), s = Math.floor(i / 60), c = i % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, ji = (l) => {
  const i = Ln(l);
  return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.data) ? i.data : [];
};
function Kd() {
  const l = ol(), [i, s] = g.useState([]), [c, f] = g.useState([]), [m, p] = g.useState([]), [h, y] = g.useState(!0), C = g.useMemo(() => l.getDevices(), [l]), w = g.useCallback(async () => {
    const j = await l._getShort("get_timer_requests_short", 1, 100), W = await Promise.all(
      ji(j).map(async (V) => {
        var ae;
        const ne = await l._getDetail(V.uuid, "get_timer_request");
        return ((ae = Ln(ne)) == null ? void 0 : ae.data) ?? Ln(ne);
      })
    );
    s(W.filter((V) => !!V && V.action_type === "create_timer"));
  }, [l]), _ = g.useCallback(async () => {
    const j = await l._getShort("get_alarm_requests_short", 1, 100), W = await Promise.all(
      ji(j).map(async (V) => {
        var ae;
        const ne = await l._getDetail(V.uuid, "get_alarm_request");
        return ((ae = Ln(ne)) == null ? void 0 : ae.data) ?? Ln(ne);
      })
    );
    f(W.filter((V) => !!V && V.action_type !== "delete_alarm"));
  }, [l]), P = g.useCallback(async () => {
    const j = await l._getShort("get_alarm_time_widgets_short", 1, 100), W = await Promise.all(
      ji(j).map(async (V) => {
        var ae;
        const ne = await l._getDetail(V.uuid, "get_alarm_time_widget");
        return ((ae = Ln(ne)) == null ? void 0 : ae.data) ?? Ln(ne);
      })
    );
    p(W.filter(Boolean));
  }, [l]), x = g.useCallback(async () => {
    y(!0);
    try {
      await Promise.all([w(), _(), P()]);
    } finally {
      y(!1);
    }
  }, [_, P, w]);
  return g.useEffect(() => {
    x();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (j, W, V = 0.3) => {
      await l._save({ name: `Будильник ${W}`, action_type: "create_alarm", device_id: j, status: "on", time: W, volume_start: V }, "save_alarm_request"), await _();
    },
    createTimer: async (j, W) => {
      const V = {
        count_timer: ug(W),
        date_end: sg(W)
      };
      await l._save({ name: `Таймер ${W} мин`, action_type: "create_timer", device_id: j, timer_time: V }, "save_timer_request"), await w();
    },
    deleteAlarm: async (j) => {
      await l._delete(j.uuid, "delete_alarm_request"), await _();
    },
    devices: C,
    loading: h,
    stopTimer: async (j) => {
      await l._delete(j.uuid, "delete_timer_request"), await w();
    },
    timers: i,
    toTimerSeconds: Yd,
    updateAlarm: async (j, W) => {
      await l._update(j.uuid, "update_alarm_request", { ...j, action_type: "edit_alarm", ...W }), await _();
    }
  };
}
const cg = "_page_di7r7_1", dg = "_header_di7r7_11", fg = "_title_di7r7_18", mg = "_description_di7r7_25", pg = "_grid_di7r7_31", hg = "_card_di7r7_37", vg = "_empty_di7r7_37", yg = "_cardHeader_di7r7_44", gg = "_cardTitle_di7r7_51", _g = "_meta_di7r7_56", Eg = "_time_di7r7_62", wg = "_form_di7r7_69", kg = "_field_di7r7_75", Cg = "_label_di7r7_81", Sg = "_select_di7r7_87", Ng = "_input_di7r7_87", xg = "_quickTabs_di7r7_97", Tg = "_quickTab_di7r7_97", Rg = "_activeQuickTab_di7r7_113", Pg = "_row_di7r7_118", Z = {
  page: cg,
  header: dg,
  title: fg,
  description: mg,
  grid: pg,
  card: hg,
  empty: vg,
  cardHeader: yg,
  cardTitle: gg,
  meta: _g,
  time: Eg,
  form: wg,
  field: kg,
  label: Cg,
  select: Sg,
  input: Ng,
  quickTabs: xg,
  quickTab: Tg,
  activeQuickTab: Rg,
  row: Pg,
  switch: "_switch_di7r7_124"
}, Mg = [5, 10, 15, 30, 60], Lg = (l) => {
  const i = Math.max(0, l), s = Math.floor(i / 3600), c = Math.floor(i % 3600 / 60), f = i % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, Ig = () => {
  const { createTimer: l, devices: i, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = Kd(), [p, h] = g.useState(!1), [y, C] = g.useState(""), [w, _] = g.useState(5), [P, x] = g.useState({});
  g.useEffect(() => {
    x((T) => Object.fromEntries(f.map(($) => [$.uuid, T[$.uuid] ?? m($.timer_time)])));
  }, [f, m]), g.useEffect(() => {
    const T = window.setInterval(() => {
      x(($) => Object.fromEntries(Object.entries($).map(([R, j]) => [R, Math.max(0, j - 1)])));
    }, 1e3);
    return () => window.clearInterval(T);
  }, []);
  const L = g.useMemo(() => new Map(i.map((T) => [T.id, T.name])), [i]), D = async () => {
    y && (await l(y, w), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: Z.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: Z.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.grid }, f.length ? f.map((T) => /* @__PURE__ */ u.createElement("div", { className: Z.card, key: T.uuid }, /* @__PURE__ */ u.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: Z.cardTitle }, T.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: Z.meta }, "Устройство: ", L.get(T.device_id) || T.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(T) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: Z.time }, Lg(P[T.uuid] ?? m(T.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: Z.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(hn, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(se, { onClick: D, disabled: !y }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: Z.form }, /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: Z.select, value: y, onChange: (T) => C(T.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), i.map((T) => /* @__PURE__ */ u.createElement("option", { key: T.id, value: T.id }, T.name)))), /* @__PURE__ */ u.createElement("div", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: Z.quickTabs }, Mg.map((T) => /* @__PURE__ */ u.createElement("button", { key: T, type: "button", className: `${Z.quickTab} ${w === T ? Z.activeQuickTab : ""}`, onClick: () => _(T) }, T, " мин")))), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: Z.input, type: "number", min: "1", value: w, onChange: (T) => _(Number(T.target.value) || 1) })))));
}, Dg = () => {
  const { alarmTimeWidgets: l, alarms: i, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = Kd(), [h, y] = g.useState(!1), [C, w] = g.useState(""), [_, P] = g.useState("08:00"), [x, L] = g.useState(0.3), D = g.useMemo(() => {
    const R = l.flatMap((j) => j.time || []);
    return Array.from(new Set(R)).filter(Boolean);
  }, [l]), T = g.useMemo(() => new Map(f.map((R) => [R.id, R.name])), [f]), $ = async () => {
    !C || !_ || (await s(C, _, x), y(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: Z.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: Z.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(se, { onClick: () => y(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.grid }, i.length ? i.map((R) => /* @__PURE__ */ u.createElement("div", { className: Z.card, key: R.uuid }, /* @__PURE__ */ u.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: Z.cardTitle }, R.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: Z.meta }, "Устройство: ", T.get(R.device_id) || R.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(R) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${Z.row} ${Z.meta}` }, /* @__PURE__ */ u.createElement("input", { className: Z.switch, type: "checkbox", checked: R.status !== "off", onChange: (j) => p(R, { status: j.target.checked ? "on" : "off" }) }), R.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: Z.input, type: "time", value: R.time, onChange: (j) => p(R, { time: j.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: Z.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: R.volume_start ?? 0.3,
      onChange: (j) => p(R, { volume_start: Number(j.target.value) })
    }
  )))) : /* @__PURE__ */ u.createElement("div", { className: Z.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ u.createElement(hn, { open: h, onClose: () => y(!1), title: "Создать будильник", footer: /* @__PURE__ */ u.createElement(se, { onClick: $, disabled: !C || !_ }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: Z.form }, /* @__PURE__ */ u.createElement("div", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: Z.quickTabs }, D.length ? D.map((R) => /* @__PURE__ */ u.createElement("button", { key: R, type: "button", className: `${Z.quickTab} ${_ === R ? Z.activeQuickTab : ""}`, onClick: () => P(R) }, R)) : /* @__PURE__ */ u.createElement("span", { className: Z.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: Z.select, value: C, onChange: (R) => w(R.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((R) => /* @__PURE__ */ u.createElement("option", { key: R.id, value: R.id }, R.name)))), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: Z.input, type: "time", value: _, onChange: (R) => P(R.target.value) })), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: Z.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: x,
      onChange: (R) => L(Number(R.target.value))
    }
  )))));
}, $g = () => /* @__PURE__ */ u.createElement(Jp, null, /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/",
    element: /* @__PURE__ */ u.createElement(
      Ea,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/scripts",
    element: /* @__PURE__ */ u.createElement(Uv, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands",
    element: /* @__PURE__ */ u.createElement(
      Ea,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ u.createElement(ky, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Sy, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ u.createElement(
      Ea,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ u.createElement(Iy, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement($y, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(By, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(Ig, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(Dg, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(ig, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "*",
    element: /* @__PURE__ */ u.createElement(
      Ea,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), zg = () => /* @__PURE__ */ u.createElement($g, null);
class Og {
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
  async _update_status(i, s, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: s,
      status: c
    });
  }
  async searchAssistantCommands(i) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/search_assistant_commands",
      query: i
    });
  }
  async searchAssistantSubDirectControls(i) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/search_assistant_sub_direct_controls",
      query: i
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
const Ag = 1, Ma = 2, Ui = 3, Fg = 4, jg = 5;
function Ug(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function Bg() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function bg(l) {
  const i = {
    type: "subscribe_events"
  };
  return l && (i.event_type = l), i;
}
function wd(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function Hg() {
  return {
    type: "ping"
  };
}
function Vg(l, i) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: i
    }
  };
}
const Wg = (l, i, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > i || Number(f) === i && Number(m) >= s || c !== void 0;
}, Qg = "auth_invalid", qg = "auth_ok";
function Yg(l) {
  if (!l.auth)
    throw Fg;
  const i = l.auth;
  let s = i.expired ? i.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const c = i.wsUrl;
  function f(m, p, h) {
    const y = new WebSocket(c);
    let C = !1;
    const w = () => {
      if (y.removeEventListener("close", w), C) {
        h(Ma);
        return;
      }
      if (m === 0) {
        h(Ag);
        return;
      }
      const x = m === -1 ? -1 : m - 1;
      setTimeout(() => f(x, p, h), 1e3);
    }, _ = async (x) => {
      try {
        i.expired && await (s || i.refreshAccessToken()), y.send(JSON.stringify(Ug(i.accessToken)));
      } catch (L) {
        C = L === Ma, y.close();
      }
    }, P = async (x) => {
      const L = JSON.parse(x.data);
      switch (L.type) {
        case Qg:
          C = !0, y.close();
          break;
        case qg:
          y.removeEventListener("open", _), y.removeEventListener("message", P), y.removeEventListener("close", w), y.removeEventListener("error", w), y.haVersion = L.ha_version, Wg(y.haVersion, 2022, 9) && y.send(JSON.stringify(Bg())), p(y);
          break;
      }
    };
    y.addEventListener("open", _), y.addEventListener("message", P), y.addEventListener("close", w), y.addEventListener("error", w);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class Kg {
  constructor(i, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(wd(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(Vg(Ui, "Connection lost"));
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
                const y = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const C of y)
                  C.reject && C.reject(Ui);
              }
              h === Ma ? this.fireEvent("reconnect-error", h) : m(p + 1);
            }
        }, Math.min(p, 5) * 1e3);
      };
      this.suspendReconnectPromise && (await this.suspendReconnectPromise, this.suspendReconnectPromise = void 0, this._queuedMessages = []), m(0);
    }, this.options = s, this.commandId = 2, this.commands = /* @__PURE__ */ new Map(), this.eventListeners = /* @__PURE__ */ new Map(), this.closeRequested = !1, this._setSocket(i);
  }
  get connected() {
    return this.socket !== void 0 && this.socket.readyState == this.socket.OPEN;
  }
  _setSocket(i) {
    this.socket = i, this.haVersion = i.haVersion, i.addEventListener("message", this._handleMessage), i.addEventListener("close", this._handleClose);
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
    return this.subscribeMessage(i, bg(s));
  }
  ping() {
    return this.sendMessagePromise(Hg());
  }
  sendMessage(i, s) {
    if (!this.connected)
      throw Ui;
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
            } catch (m) {
              c(m);
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
        callback: i,
        subscribe: (c == null ? void 0 : c.resubscribe) !== !1 ? () => this.subscribeMessage(i, s, c) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(wd(h)), this.commands.delete(h);
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
const Gg = (l) => l * 1e3 + Date.now();
async function Xg(l, i, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw jg;
  }
  const f = new FormData();
  i !== null && f.append("client_id", i), Object.keys(s).forEach((h) => {
    f.append(h, s[h]);
  });
  const m = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: f
  });
  if (!m.ok)
    throw m.status === 400 || m.status === 403 ? Ma : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = i, p.expires = Gg(p.expires_in), p;
}
class Jg {
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
    const i = await Xg(this.data.hassUrl, this.data.clientId, {
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
function Zg(l, i) {
  return new Jg({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: i,
    expires_in: 1e11
  });
}
async function e_(l) {
  const i = Object.assign({ setupRetry: 0, createSocket: Yg }, l), s = await i.createSocket(i);
  return new Kg(s, i);
}
function t_(l) {
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
async function n_() {
  const s = Zg(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await e_({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function r_({
  children: l,
  hass: i
}) {
  const [s, c] = g.useState(null);
  return g.useEffect(() => {
    async function f() {
      const m = i ? t_(i) : await n_();
      c(new Og(m));
    }
    f().catch(console.error);
  }, [i]), s ? /* @__PURE__ */ u.createElement(Wd.Provider, { value: s }, l) : /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...");
}
function l_({ hass: l }) {
  return /* @__PURE__ */ u.createElement(kh, null, /* @__PURE__ */ u.createElement(r_, { hass: l }, /* @__PURE__ */ u.createElement(zg, null)));
}
const kd = "dialog-custom-ui-panel", Cd = "dialog-custom-ui-style";
class a_ extends HTMLElement {
  ensureShadowRoot() {
    return this.shadowRoot || this.attachShadow({ mode: "open" }), this.shadowRoot;
  }
  set hass(i) {
    this.hassValue = i, this.render();
  }
  get hass() {
    return this.hassValue;
  }
  connectedCallback() {
    this.ensureShadowRoot(), this.loadStyles(), this.render();
  }
  disconnectedCallback() {
    var i;
    (i = this.root) == null || i.unmount(), this.root = void 0;
  }
  async loadStyles() {
    const s = `/dialog_custom_ui_static/dialog-custom-ui-panel.css?v=${Date.now()}`, c = this.ensureShadowRoot();
    if (c.getElementById(Cd))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Cd, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
    const i = this.ensureShadowRoot();
    this.root || (this.root = ep.createRoot(i)), this.root.render(
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(l_, { hass: this.hassValue }))
    );
  }
}
customElements.get(kd) || customElements.define(kd, a_);
