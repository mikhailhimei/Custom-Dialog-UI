function xd(l) {
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
var Kc;
function Km() {
  if (Kc) return ce;
  Kc = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function P(S) {
    return S === null || typeof S != "object" ? null : (S = _ && S[_] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, D = {};
  function T(S, z, ue) {
    this.props = S, this.context = z, this.refs = D, this.updater = ue || x;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(S, z) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, z, "setState");
  }, T.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function $() {
  }
  $.prototype = T.prototype;
  function R(S, z, ue) {
    this.props = S, this.context = z, this.refs = D, this.updater = ue || x;
  }
  var j = R.prototype = new $();
  j.constructor = R, L(j, T.prototype), j.isPureReactComponent = !0;
  var W = Array.isArray, V = Object.prototype.hasOwnProperty, ne = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(S, z, ue) {
    var de, me = {}, pe = null, ke = null;
    if (z != null) for (de in z.ref !== void 0 && (ke = z.ref), z.key !== void 0 && (pe = "" + z.key), z) V.call(z, de) && !ae.hasOwnProperty(de) && (me[de] = z[de]);
    var _e = arguments.length - 2;
    if (_e === 1) me.children = ue;
    else if (1 < _e) {
      for (var Te = Array(_e), it = 0; it < _e; it++) Te[it] = arguments[it + 2];
      me.children = Te;
    }
    if (S && S.defaultProps) for (de in _e = S.defaultProps, _e) me[de] === void 0 && (me[de] = _e[de]);
    return { $$typeof: l, type: S, key: pe, ref: ke, props: me, _owner: ne.current };
  }
  function we(S, z) {
    return { $$typeof: l, type: S.type, key: z, ref: S.ref, props: S.props, _owner: S._owner };
  }
  function Se(S) {
    return typeof S == "object" && S !== null && S.$$typeof === l;
  }
  function X(S) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(ue) {
      return z[ue];
    });
  }
  var ve = /\/+/g;
  function ze(S, z) {
    return typeof S == "object" && S !== null && S.key != null ? X("" + S.key) : z.toString(36);
  }
  function Fe(S, z, ue, de, me) {
    var pe = typeof S;
    (pe === "undefined" || pe === "boolean") && (S = null);
    var ke = !1;
    if (S === null) ke = !0;
    else switch (pe) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case l:
          case o:
            ke = !0;
        }
    }
    if (ke) return ke = S, me = me(ke), S = de === "" ? "." + ze(ke, 0) : de, W(me) ? (ue = "", S != null && (ue = S.replace(ve, "$&/") + "/"), Fe(me, z, ue, "", function(it) {
      return it;
    })) : me != null && (Se(me) && (me = we(me, ue + (!me.key || ke && ke.key === me.key ? "" : ("" + me.key).replace(ve, "$&/") + "/") + S)), z.push(me)), 1;
    if (ke = 0, de = de === "" ? "." : de + ":", W(S)) for (var _e = 0; _e < S.length; _e++) {
      pe = S[_e];
      var Te = de + ze(pe, _e);
      ke += Fe(pe, z, ue, Te, me);
    }
    else if (Te = P(S), typeof Te == "function") for (S = Te.call(S), _e = 0; !(pe = S.next()).done; ) pe = pe.value, Te = de + ze(pe, _e++), ke += Fe(pe, z, ue, Te, me);
    else if (pe === "object") throw z = String(S), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function ie(S, z, ue) {
    if (S == null) return S;
    var de = [], me = 0;
    return Fe(S, de, "", "", function(pe) {
      return z.call(ue, pe, me++);
    }), de;
  }
  function Ie(S) {
    if (S._status === -1) {
      var z = S._result;
      z = z(), z.then(function(ue) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = ue);
      }, function(ue) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = ue);
      }), S._status === -1 && (S._status = 0, S._result = z);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var oe = { current: null }, b = { transition: null }, re = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: b, ReactCurrentOwner: ne };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: ie, forEach: function(S, z, ue) {
    ie(S, function() {
      z.apply(this, arguments);
    }, ue);
  }, count: function(S) {
    var z = 0;
    return ie(S, function() {
      z++;
    }), z;
  }, toArray: function(S) {
    return ie(S, function(z) {
      return z;
    }) || [];
  }, only: function(S) {
    if (!Se(S)) throw Error("React.Children.only expected to receive a single React element child.");
    return S;
  } }, ce.Component = T, ce.Fragment = s, ce.Profiler = f, ce.PureComponent = R, ce.StrictMode = c, ce.Suspense = y, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, ce.act = q, ce.cloneElement = function(S, z, ue) {
    if (S == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
    var de = L({}, S.props), me = S.key, pe = S.ref, ke = S._owner;
    if (z != null) {
      if (z.ref !== void 0 && (pe = z.ref, ke = ne.current), z.key !== void 0 && (me = "" + z.key), S.type && S.type.defaultProps) var _e = S.type.defaultProps;
      for (Te in z) V.call(z, Te) && !ae.hasOwnProperty(Te) && (de[Te] = z[Te] === void 0 && _e !== void 0 ? _e[Te] : z[Te]);
    }
    var Te = arguments.length - 2;
    if (Te === 1) de.children = ue;
    else if (1 < Te) {
      _e = Array(Te);
      for (var it = 0; it < Te; it++) _e[it] = arguments[it + 2];
      de.children = _e;
    }
    return { $$typeof: l, type: S.type, key: me, ref: pe, props: de, _owner: ke };
  }, ce.createContext = function(S) {
    return S = { $$typeof: p, _currentValue: S, _currentValue2: S, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, S.Provider = { $$typeof: m, _context: S }, S.Consumer = S;
  }, ce.createElement = B, ce.createFactory = function(S) {
    var z = B.bind(null, S);
    return z.type = S, z;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(S) {
    return { $$typeof: h, render: S };
  }, ce.isValidElement = Se, ce.lazy = function(S) {
    return { $$typeof: w, _payload: { _status: -1, _result: S }, _init: Ie };
  }, ce.memo = function(S, z) {
    return { $$typeof: C, type: S, compare: z === void 0 ? null : z };
  }, ce.startTransition = function(S) {
    var z = b.transition;
    b.transition = {};
    try {
      S();
    } finally {
      b.transition = z;
    }
  }, ce.unstable_act = q, ce.useCallback = function(S, z) {
    return oe.current.useCallback(S, z);
  }, ce.useContext = function(S) {
    return oe.current.useContext(S);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(S) {
    return oe.current.useDeferredValue(S);
  }, ce.useEffect = function(S, z) {
    return oe.current.useEffect(S, z);
  }, ce.useId = function() {
    return oe.current.useId();
  }, ce.useImperativeHandle = function(S, z, ue) {
    return oe.current.useImperativeHandle(S, z, ue);
  }, ce.useInsertionEffect = function(S, z) {
    return oe.current.useInsertionEffect(S, z);
  }, ce.useLayoutEffect = function(S, z) {
    return oe.current.useLayoutEffect(S, z);
  }, ce.useMemo = function(S, z) {
    return oe.current.useMemo(S, z);
  }, ce.useReducer = function(S, z, ue) {
    return oe.current.useReducer(S, z, ue);
  }, ce.useRef = function(S) {
    return oe.current.useRef(S);
  }, ce.useState = function(S) {
    return oe.current.useState(S);
  }, ce.useSyncExternalStore = function(S, z, ue) {
    return oe.current.useSyncExternalStore(S, z, ue);
  }, ce.useTransition = function() {
    return oe.current.useTransition();
  }, ce.version = "18.3.1", ce;
}
var Gc;
function Td() {
  return Gc || (Gc = 1, Ri.exports = Km()), Ri.exports;
}
var g = Td();
const u = /* @__PURE__ */ xd(g);
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
var Xc;
function Gm() {
  return Xc || (Xc = 1, (function(l) {
    function o(b, re) {
      var q = b.length;
      b.push(re);
      e: for (; 0 < q; ) {
        var S = q - 1 >>> 1, z = b[S];
        if (0 < f(z, re)) b[S] = re, b[q] = z, q = S;
        else break e;
      }
    }
    function s(b) {
      return b.length === 0 ? null : b[0];
    }
    function c(b) {
      if (b.length === 0) return null;
      var re = b[0], q = b.pop();
      if (q !== re) {
        b[0] = q;
        e: for (var S = 0, z = b.length, ue = z >>> 1; S < ue; ) {
          var de = 2 * (S + 1) - 1, me = b[de], pe = de + 1, ke = b[pe];
          if (0 > f(me, q)) pe < z && 0 > f(ke, me) ? (b[S] = ke, b[pe] = q, S = pe) : (b[S] = me, b[de] = q, S = de);
          else if (pe < z && 0 > f(ke, q)) b[S] = ke, b[pe] = q, S = pe;
          else break e;
        }
      }
      return re;
    }
    function f(b, re) {
      var q = b.sortIndex - re.sortIndex;
      return q !== 0 ? q : b.id - re.id;
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
    function j(b) {
      for (var re = s(C); re !== null; ) {
        if (re.callback === null) c(C);
        else if (re.startTime <= b) c(C), re.sortIndex = re.expirationTime, o(y, re);
        else break;
        re = s(C);
      }
    }
    function W(b) {
      if (D = !1, j(b), !L) if (s(y) !== null) L = !0, Ie(V);
      else {
        var re = s(C);
        re !== null && oe(W, re.startTime - b);
      }
    }
    function V(b, re) {
      L = !1, D && (D = !1, $(B), B = -1), x = !0;
      var q = P;
      try {
        for (j(re), _ = s(y); _ !== null && (!(_.expirationTime > re) || b && !X()); ) {
          var S = _.callback;
          if (typeof S == "function") {
            _.callback = null, P = _.priorityLevel;
            var z = S(_.expirationTime <= re);
            re = l.unstable_now(), typeof z == "function" ? _.callback = z : _ === s(y) && c(y), j(re);
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
    var ne = !1, ae = null, B = -1, we = 5, Se = -1;
    function X() {
      return !(l.unstable_now() - Se < we);
    }
    function ve() {
      if (ae !== null) {
        var b = l.unstable_now();
        Se = b;
        var re = !0;
        try {
          re = ae(!0, b);
        } finally {
          re ? ze() : (ne = !1, ae = null);
        }
      } else ne = !1;
    }
    var ze;
    if (typeof R == "function") ze = function() {
      R(ve);
    };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(), ie = Fe.port2;
      Fe.port1.onmessage = ve, ze = function() {
        ie.postMessage(null);
      };
    } else ze = function() {
      T(ve, 0);
    };
    function Ie(b) {
      ae = b, ne || (ne = !0, ze());
    }
    function oe(b, re) {
      B = T(function() {
        b(l.unstable_now());
      }, re);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, l.unstable_continueExecution = function() {
      L || x || (L = !0, Ie(V));
    }, l.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < b ? Math.floor(1e3 / b) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return P;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, l.unstable_next = function(b) {
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
        return b();
      } finally {
        P = q;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(b, re) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var q = P;
      P = b;
      try {
        return re();
      } finally {
        P = q;
      }
    }, l.unstable_scheduleCallback = function(b, re, q) {
      var S = l.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? S + q : S) : q = S, b) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = q + z, b = { id: w++, callback: re, priorityLevel: b, startTime: q, expirationTime: z, sortIndex: -1 }, q > S ? (b.sortIndex = q, o(C, b), s(y) === null && b === s(C) && (D ? ($(B), B = -1) : D = !0, oe(W, q - S))) : (b.sortIndex = z, o(y, b), L || x || (L = !0, Ie(V))), b;
    }, l.unstable_shouldYield = X, l.unstable_wrapCallback = function(b) {
      var re = P;
      return function() {
        var q = P;
        P = re;
        try {
          return b.apply(this, arguments);
        } finally {
          P = q;
        }
      };
    };
  })(Li)), Li;
}
var Jc;
function Xm() {
  return Jc || (Jc = 1, Mi.exports = Gm()), Mi.exports;
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
var Zc;
function Jm() {
  if (Zc) return at;
  Zc = 1;
  var l = Td(), o = Xm();
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
  function D(e, t, n, r, a, i, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = d;
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
  var W = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), ne = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), we = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), X = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), b = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = b && e[b] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, S;
  function z(e) {
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
`), i = r.stack.split(`
`), d = a.length - 1, v = i.length - 1; 1 <= d && 0 <= v && a[d] !== i[v]; ) v--;
        for (; 1 <= d && 0 <= v; d--, v--) if (a[d] !== i[v]) {
          if (d !== 1 || v !== 1)
            do
              if (d--, v--, 0 > v || a[d] !== i[v]) {
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
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
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
  function pe(e) {
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
      case B:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case X:
        return (e.displayName || "Context") + ".Consumer";
      case Se:
        return (e._context.displayName || "Context") + ".Provider";
      case ve:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ie:
        return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
      case Ie:
        t = e._payload, e = e._init;
        try {
          return pe(e(t));
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
        return pe(t);
      case 8:
        return t === B ? "StrictMode" : "Mode";
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
  function ul(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function ts(e) {
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
  function ns(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = _e(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function rs(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function Oa(e, t) {
    rs(e, t);
    var n = _e(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? za(e, t.type, n) : t.hasOwnProperty("defaultValue") && za(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ls(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function za(e, t, n) {
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
  function as(e, t) {
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
  function os(e, t) {
    var n = _e(t.value), r = _e(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function is(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ss(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ss(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var dl, us = (function(e) {
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
  }, Jd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(hr).forEach(function(e) {
    Jd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
    });
  });
  function cs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
  }
  function ds(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = cs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Zd = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ja(e, t) {
    if (t) {
      if (Zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
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
  var ba = null;
  function Ba(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ha = null, $n = null, On = null;
  function fs(e) {
    if (e = Ar(e)) {
      if (typeof Ha != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = $l(t), Ha(e.stateNode, e.type, t));
    }
  }
  function ms(e) {
    $n ? On ? On.push(e) : On = [e] : $n = e;
  }
  function ps() {
    if ($n) {
      var e = $n, t = On;
      if (On = $n = null, fs(e), t) for (e = 0; e < t.length; e++) fs(t[e]);
    }
  }
  function hs(e, t) {
    return e(t);
  }
  function vs() {
  }
  var Va = !1;
  function ys(e, t, n) {
    if (Va) return e(t, n);
    Va = !0;
    try {
      return hs(e, t, n);
    } finally {
      Va = !1, ($n !== null || On !== null) && (vs(), ps());
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
  function ef(e, t, n, r, a, i, d, v, E) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (A) {
      this.onError(A);
    }
  }
  var gr = !1, fl = null, ml = !1, Qa = null, tf = { onError: function(e) {
    gr = !0, fl = e;
  } };
  function nf(e, t, n, r, a, i, d, v, E) {
    gr = !1, fl = null, ef.apply(tf, arguments);
  }
  function rf(e, t, n, r, a, i, d, v, E) {
    if (nf.apply(this, arguments), gr) {
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
  function gs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _s(e) {
    if (vn(e) !== e) throw Error(s(188));
  }
  function lf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = vn(e), t === null) throw Error(s(188));
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
          if (i === n) return _s(a), e;
          if (i === r) return _s(a), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = a, r = i;
      else {
        for (var d = !1, v = a.child; v; ) {
          if (v === n) {
            d = !0, n = a, r = i;
            break;
          }
          if (v === r) {
            d = !0, r = a, n = i;
            break;
          }
          v = v.sibling;
        }
        if (!d) {
          for (v = i.child; v; ) {
            if (v === n) {
              d = !0, n = i, r = a;
              break;
            }
            if (v === r) {
              d = !0, r = i, n = a;
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
  function Es(e) {
    return e = lf(e), e !== null ? ws(e) : null;
  }
  function ws(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ws(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ks = o.unstable_scheduleCallback, Cs = o.unstable_cancelCallback, af = o.unstable_shouldYield, of = o.unstable_requestPaint, $e = o.unstable_now, sf = o.unstable_getCurrentPriorityLevel, qa = o.unstable_ImmediatePriority, Ss = o.unstable_UserBlockingPriority, pl = o.unstable_NormalPriority, uf = o.unstable_LowPriority, Ns = o.unstable_IdlePriority, hl = null, Pt = null;
  function cf(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function") try {
      Pt.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : mf, df = Math.log, ff = Math.LN2;
  function mf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (df(e) / ff | 0) | 0;
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
    var r = 0, a = e.suspendedLanes, i = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var v = d & ~a;
      v !== 0 ? r = _r(v) : (i &= d, i !== 0 && (r = _r(i)));
    } else d = n & ~a, d !== 0 ? r = _r(d) : i !== 0 && (r = _r(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function pf(e, t) {
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
  function hf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var d = 31 - wt(i), v = 1 << d, E = a[d];
      E === -1 ? ((v & n) === 0 || (v & r) !== 0) && (a[d] = pf(v, t)) : E <= t && (e.expiredLanes |= v), i &= ~v;
    }
  }
  function Ya(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function xs() {
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
  function vf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - wt(n), i = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
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
  function Ts(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Rs, Xa, Ps, Ms, Ls, Ja = !1, _l = [], Yt = null, Kt = null, Gt = null, wr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Xt = [], yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Is(e, t) {
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
  function Cr(e, t, n, r, a, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Ar(t), t !== null && Xa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function gf(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Yt = Cr(Yt, e, t, n, r, a), !0;
      case "dragenter":
        return Kt = Cr(Kt, e, t, n, r, a), !0;
      case "mouseover":
        return Gt = Cr(Gt, e, t, n, r, a), !0;
      case "pointerover":
        var i = a.pointerId;
        return wr.set(i, Cr(wr.get(i) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return i = a.pointerId, kr.set(i, Cr(kr.get(i) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Ds(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = gs(n), t !== null) {
            e.blockedOn = t, Ls(e.priority, function() {
              Ps(n);
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
        ba = r, n.target.dispatchEvent(r), ba = null;
      } else return t = Ar(n), t !== null && Xa(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $s(e, t, n) {
    El(e) && n.delete(t);
  }
  function _f() {
    Ja = !1, Yt !== null && El(Yt) && (Yt = null), Kt !== null && El(Kt) && (Kt = null), Gt !== null && El(Gt) && (Gt = null), wr.forEach($s), kr.forEach($s);
  }
  function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ja || (Ja = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, _f)));
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
    for (; 0 < Xt.length && (n = Xt[0], n.blockedOn === null); ) Ds(n), n.blockedOn === null && Xt.shift();
  }
  var zn = W.ReactCurrentBatchConfig, wl = !0;
  function Ef(e, t, n, r) {
    var a = Ee, i = zn.transition;
    zn.transition = null;
    try {
      Ee = 1, Za(e, t, n, r);
    } finally {
      Ee = a, zn.transition = i;
    }
  }
  function wf(e, t, n, r) {
    var a = Ee, i = zn.transition;
    zn.transition = null;
    try {
      Ee = 4, Za(e, t, n, r);
    } finally {
      Ee = a, zn.transition = i;
    }
  }
  function Za(e, t, n, r) {
    if (wl) {
      var a = eo(e, t, n, r);
      if (a === null) go(e, t, r, kl, n), Is(e, r);
      else if (gf(a, e, t, n, r)) r.stopPropagation();
      else if (Is(e, r), t & 4 && -1 < yf.indexOf(e)) {
        for (; a !== null; ) {
          var i = Ar(a);
          if (i !== null && Rs(i), i = eo(e, t, n, r), i === null && go(e, t, r, kl, n), i === a) break;
          a = i;
        }
        a !== null && r.stopPropagation();
      } else go(e, t, r, null, n);
    }
  }
  var kl = null;
  function eo(e, t, n, r) {
    if (kl = null, e = Ba(r), e = yn(e), e !== null) if (t = vn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = gs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return kl = e, null;
  }
  function Os(e) {
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
        switch (sf()) {
          case qa:
            return 1;
          case Ss:
            return 4;
          case pl:
          case uf:
            return 16;
          case Ns:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null, to = null, Cl = null;
  function zs() {
    if (Cl) return Cl;
    var e, t = to, n = t.length, r, a = "value" in Jt ? Jt.value : Jt.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[i - r]; r++) ;
    return Cl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Sl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Nl() {
    return !0;
  }
  function As() {
    return !1;
  }
  function st(e) {
    function t(n, r, a, i, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(i) : i[v]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Nl : As, this.isPropagationStopped = As, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, no = st(An), xr = q({}, An, { view: 0, detail: 0 }), kf = st(xr), ro, lo, Tr, xl = q({}, xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (ro = e.screenX - Tr.screenX, lo = e.screenY - Tr.screenY) : lo = ro = 0, Tr = e), ro);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : lo;
  } }), Fs = st(xl), Cf = q({}, xl, { dataTransfer: 0 }), Sf = st(Cf), Nf = q({}, xr, { relatedTarget: 0 }), ao = st(Nf), xf = q({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tf = st(xf), Rf = q({}, An, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Pf = st(Rf), Mf = q({}, An, { data: 0 }), js = st(Mf), Lf = {
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
  }, If = {
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
  }, Df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $f(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Df[e]) ? !!t[e] : !1;
  }
  function oo() {
    return $f;
  }
  var Of = q({}, xr, { key: function(e) {
    if (e.key) {
      var t = Lf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oo, charCode: function(e) {
    return e.type === "keypress" ? Sl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), zf = st(Of), Af = q({}, xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Us = st(Af), Ff = q({}, xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oo }), jf = st(Ff), Uf = q({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = st(Uf), Bf = q({}, xl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hf = st(Bf), Vf = [9, 13, 27, 32], io = h && "CompositionEvent" in window, Rr = null;
  h && "documentMode" in document && (Rr = document.documentMode);
  var Wf = h && "TextEvent" in window && !Rr, bs = h && (!io || Rr && 8 < Rr && 11 >= Rr), Bs = " ", Hs = !1;
  function Vs(e, t) {
    switch (e) {
      case "keyup":
        return Vf.indexOf(t.keyCode) !== -1;
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
  function Ws(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fn = !1;
  function Qf(e, t) {
    switch (e) {
      case "compositionend":
        return Ws(t);
      case "keypress":
        return t.which !== 32 ? null : (Hs = !0, Bs);
      case "textInput":
        return e = t.data, e === Bs && Hs ? null : e;
      default:
        return null;
    }
  }
  function qf(e, t) {
    if (Fn) return e === "compositionend" || !io && Vs(e, t) ? (e = zs(), Cl = to = Jt = null, Fn = !1, e) : null;
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
        return bs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yf[e.type] : t === "textarea";
  }
  function qs(e, t, n, r) {
    ms(r), t = Ll(t, "onChange"), 0 < t.length && (n = new no("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Pr = null, Mr = null;
  function Kf(e) {
    du(e, 0);
  }
  function Tl(e) {
    var t = Hn(e);
    if (ts(t)) return e;
  }
  function Gf(e, t) {
    if (e === "change") return t;
  }
  var Ys = !1;
  if (h) {
    var so;
    if (h) {
      var uo = "oninput" in document;
      if (!uo) {
        var Ks = document.createElement("div");
        Ks.setAttribute("oninput", "return;"), uo = typeof Ks.oninput == "function";
      }
      so = uo;
    } else so = !1;
    Ys = so && (!document.documentMode || 9 < document.documentMode);
  }
  function Gs() {
    Pr && (Pr.detachEvent("onpropertychange", Xs), Mr = Pr = null);
  }
  function Xs(e) {
    if (e.propertyName === "value" && Tl(Mr)) {
      var t = [];
      qs(t, Mr, e, Ba(e)), ys(Kf, t);
    }
  }
  function Xf(e, t, n) {
    e === "focusin" ? (Gs(), Pr = t, Mr = n, Pr.attachEvent("onpropertychange", Xs)) : e === "focusout" && Gs();
  }
  function Jf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tl(Mr);
  }
  function Zf(e, t) {
    if (e === "click") return Tl(t);
  }
  function em(e, t) {
    if (e === "input" || e === "change") return Tl(t);
  }
  function tm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : tm;
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
  function Js(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zs(e, t) {
    var n = Js(e);
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
      n = Js(n);
    }
  }
  function eu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? eu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function tu() {
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
  function nm(e) {
    var t = tu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && eu(n.ownerDocument.documentElement, n)) {
      if (r !== null && co(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, i = Math.min(r.start, a);
          r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Zs(n, i);
          var d = Zs(
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
  var rm = h && "documentMode" in document && 11 >= document.documentMode, jn = null, fo = null, Ir = null, mo = !1;
  function nu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || jn == null || jn !== cl(r) || (r = jn, "selectionStart" in r && co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Lr(Ir, r) || (Ir = r, r = Ll(fo, "onSelect"), 0 < r.length && (t = new no("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = jn)));
  }
  function Rl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Un = { animationend: Rl("Animation", "AnimationEnd"), animationiteration: Rl("Animation", "AnimationIteration"), animationstart: Rl("Animation", "AnimationStart"), transitionend: Rl("Transition", "TransitionEnd") }, po = {}, ru = {};
  h && (ru = document.createElement("div").style, "AnimationEvent" in window || (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation), "TransitionEvent" in window || delete Un.transitionend.transition);
  function Pl(e) {
    if (po[e]) return po[e];
    if (!Un[e]) return e;
    var t = Un[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ru) return po[e] = t[n];
    return e;
  }
  var lu = Pl("animationend"), au = Pl("animationiteration"), ou = Pl("animationstart"), iu = Pl("transitionend"), su = /* @__PURE__ */ new Map(), uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Zt(e, t) {
    su.set(e, t), m(t, [e]);
  }
  for (var ho = 0; ho < uu.length; ho++) {
    var vo = uu[ho], lm = vo.toLowerCase(), am = vo[0].toUpperCase() + vo.slice(1);
    Zt(lm, "on" + am);
  }
  Zt(lu, "onAnimationEnd"), Zt(au, "onAnimationIteration"), Zt(ou, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(iu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
  function cu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, rf(r, t, void 0, e), e.currentTarget = null;
  }
  function du(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var v = r[d], E = v.instance, I = v.currentTarget;
          if (v = v.listener, E !== i && a.isPropagationStopped()) break e;
          cu(a, v, I), i = E;
        }
        else for (d = 0; d < r.length; d++) {
          if (v = r[d], E = v.instance, I = v.currentTarget, v = v.listener, E !== i && a.isPropagationStopped()) break e;
          cu(a, v, I), i = E;
        }
      }
    }
    if (ml) throw e = Qa, ml = !1, Qa = null, e;
  }
  function Ne(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (fu(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    t && (r |= 4), fu(n, e, r, t);
  }
  var Ml = "_reactListening" + Math.random().toString(36).slice(2);
  function $r(e) {
    if (!e[Ml]) {
      e[Ml] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (om.has(n) || yo(n, !1, e), yo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ml] || (t[Ml] = !0, yo("selectionchange", !1, t));
    }
  }
  function fu(e, t, n, r) {
    switch (Os(t)) {
      case 1:
        var a = Ef;
        break;
      case 4:
        a = wf;
        break;
      default:
        a = Za;
    }
    n = a.bind(null, t, n, e), a = void 0, !Wa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function go(e, t, n, r, a) {
    var i = r;
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
            r = i = d;
            continue e;
          }
          v = v.parentNode;
        }
      }
      r = r.return;
    }
    ys(function() {
      var I = i, A = Ba(n), F = [];
      e: {
        var O = su.get(e);
        if (O !== void 0) {
          var H = no, K = e;
          switch (e) {
            case "keypress":
              if (Sl(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = zf;
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
              H = Fs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Sf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = jf;
              break;
            case lu:
            case au:
            case ou:
              H = Tf;
              break;
            case iu:
              H = bf;
              break;
            case "scroll":
              H = kf;
              break;
            case "wheel":
              H = Hf;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Pf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Us;
          }
          var G = (t & 4) !== 0, Oe = !G && e === "scroll", N = G ? O !== null ? O + "Capture" : null : O;
          G = [];
          for (var k = I, M; k !== null; ) {
            M = k;
            var U = M.stateNode;
            if (M.tag === 5 && U !== null && (M = U, N !== null && (U = vr(k, N), U != null && G.push(Or(k, U, M)))), Oe) break;
            k = k.return;
          }
          0 < G.length && (O = new H(O, K, null, n, A), F.push({ event: O, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", O && n !== ba && (K = n.relatedTarget || n.fromElement) && (yn(K) || K[At])) break e;
          if ((H || O) && (O = A.window === A ? A : (O = A.ownerDocument) ? O.defaultView || O.parentWindow : window, H ? (K = n.relatedTarget || n.toElement, H = I, K = K ? yn(K) : null, K !== null && (Oe = vn(K), K !== Oe || K.tag !== 5 && K.tag !== 6) && (K = null)) : (H = null, K = I), H !== K)) {
            if (G = Fs, U = "onMouseLeave", N = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (G = Us, U = "onPointerLeave", N = "onPointerEnter", k = "pointer"), Oe = H == null ? O : Hn(H), M = K == null ? O : Hn(K), O = new G(U, k + "leave", H, n, A), O.target = Oe, O.relatedTarget = M, U = null, yn(A) === I && (G = new G(N, k + "enter", K, n, A), G.target = M, G.relatedTarget = Oe, U = G), Oe = U, H && K) t: {
              for (G = H, N = K, k = 0, M = G; M; M = bn(M)) k++;
              for (M = 0, U = N; U; U = bn(U)) M++;
              for (; 0 < k - M; ) G = bn(G), k--;
              for (; 0 < M - k; ) N = bn(N), M--;
              for (; k--; ) {
                if (G === N || N !== null && G === N.alternate) break t;
                G = bn(G), N = bn(N);
              }
              G = null;
            }
            else G = null;
            H !== null && mu(F, O, H, G, !1), K !== null && Oe !== null && mu(F, Oe, K, G, !0);
          }
        }
        e: {
          if (O = I ? Hn(I) : window, H = O.nodeName && O.nodeName.toLowerCase(), H === "select" || H === "input" && O.type === "file") var J = Gf;
          else if (Qs(O)) if (Ys) J = em;
          else {
            J = Jf;
            var ee = Xf;
          }
          else (H = O.nodeName) && H.toLowerCase() === "input" && (O.type === "checkbox" || O.type === "radio") && (J = Zf);
          if (J && (J = J(e, I))) {
            qs(F, J, n, A);
            break e;
          }
          ee && ee(e, O, I), e === "focusout" && (ee = O._wrapperState) && ee.controlled && O.type === "number" && za(O, "number", O.value);
        }
        switch (ee = I ? Hn(I) : window, e) {
          case "focusin":
            (Qs(ee) || ee.contentEditable === "true") && (jn = ee, fo = I, Ir = null);
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
            mo = !1, nu(F, n, A);
            break;
          case "selectionchange":
            if (rm) break;
          case "keydown":
          case "keyup":
            nu(F, n, A);
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
        else Fn ? Vs(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");
        le && (bs && n.locale !== "ko" && (Fn || le !== "onCompositionStart" ? le === "onCompositionEnd" && Fn && (te = zs()) : (Jt = A, to = "value" in Jt ? Jt.value : Jt.textContent, Fn = !0)), ee = Ll(I, le), 0 < ee.length && (le = new js(le, e, null, n, A), F.push({ event: le, listeners: ee }), te ? le.data = te : (te = Ws(n), te !== null && (le.data = te)))), (te = Wf ? Qf(e, n) : qf(e, n)) && (I = Ll(I, "onBeforeInput"), 0 < I.length && (A = new js("onBeforeInput", "beforeinput", null, n, A), F.push({ event: A, listeners: I }), A.data = te));
      }
      du(F, t);
    });
  }
  function Or(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, i = a.stateNode;
      a.tag === 5 && i !== null && (a = i, i = vr(e, n), i != null && r.unshift(Or(e, i, a)), i = vr(e, t), i != null && r.push(Or(e, i, a))), e = e.return;
    }
    return r;
  }
  function bn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function mu(e, t, n, r, a) {
    for (var i = t._reactName, d = []; n !== null && n !== r; ) {
      var v = n, E = v.alternate, I = v.stateNode;
      if (E !== null && E === r) break;
      v.tag === 5 && I !== null && (v = I, a ? (E = vr(n, i), E != null && d.unshift(Or(n, E, v))) : a || (E = vr(n, i), E != null && d.push(Or(n, E, v)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var im = /\r\n?/g, sm = /\u0000|\uFFFD/g;
  function pu(e) {
    return (typeof e == "string" ? e : "" + e).replace(im, `
`).replace(sm, "");
  }
  function Il(e, t, n) {
    if (t = pu(t), pu(e) !== t && n) throw Error(s(425));
  }
  function Dl() {
  }
  var _o = null, Eo = null;
  function wo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ko = typeof setTimeout == "function" ? setTimeout : void 0, um = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
    return hu.resolve(null).then(e).catch(dm);
  } : ko;
  function dm(e) {
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
  function vu(e) {
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
  var Bn = Math.random().toString(36).slice(2), Mt = "__reactFiber$" + Bn, zr = "__reactProps$" + Bn, At = "__reactContainer$" + Bn, So = "__reactEvents$" + Bn, fm = "__reactListeners$" + Bn, mm = "__reactHandles$" + Bn;
  function yn(e) {
    var t = e[Mt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[At] || n[Mt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = vu(e); e !== null; ) {
          if (n = e[Mt]) return n;
          e = vu(e);
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
    return e[zr] || null;
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
    var a = {}, i;
    for (i in n) a[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ol() {
    xe(et), xe(qe);
  }
  function yu(e, t, n) {
    if (qe.current !== nn) throw Error(s(168));
    Ce(qe, t), Ce(et, n);
  }
  function gu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, ke(e) || "Unknown", a));
    return q({}, n, r);
  }
  function zl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nn, gn = qe.current, Ce(qe, e), Ce(et, et.current), !0;
  }
  function _u(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = gu(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, xe(et), xe(qe), Ce(qe, e)) : xe(et), Ce(et, n);
  }
  var Ft = null, Al = !1, xo = !1;
  function Eu(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  function pm(e) {
    Al = !0, Eu(e);
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
        throw Ft !== null && (Ft = Ft.slice(e + 1)), ks(qa, rn), a;
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
  function wu(e, t, n) {
    mt[pt++] = jt, mt[pt++] = Ut, mt[pt++] = _n, _n = e;
    var r = jt;
    e = Ut;
    var a = 32 - wt(r) - 1;
    r &= ~(1 << a), n += 1;
    var i = 32 - wt(t) + a;
    if (30 < i) {
      var d = a - a % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, jt = 1 << 32 - wt(t) + a | n << a | r, Ut = i + e;
    } else jt = 1 << i | n << a | r, Ut = e;
  }
  function To(e) {
    e.return !== null && (En(e, 1), wu(e, 1, 0));
  }
  function Ro(e) {
    for (; e === Fl; ) Fl = Qn[--qn], Qn[qn] = null, jl = Qn[--qn], Qn[qn] = null;
    for (; e === _n; ) _n = mt[--pt], mt[pt] = null, Ut = mt[--pt], mt[pt] = null, jt = mt[--pt], mt[pt] = null;
  }
  var ut = null, ct = null, Re = !1, Ct = null;
  function ku(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Cu(e, t) {
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
        if (!Cu(e, t)) {
          if (Po(e)) throw Error(s(418));
          t = en(n.nextSibling);
          var r = ut;
          t && Cu(e, t) ? ku(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, ut = e);
        }
      } else {
        if (Po(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Re = !1, ut = e;
      }
    }
  }
  function Su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function Ul(e) {
    if (e !== ut) return !1;
    if (!Re) return Su(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps)), t && (t = ct)) {
      if (Po(e)) throw Nu(), Error(s(418));
      for (; t; ) ku(e, t), t = en(t.nextSibling);
    }
    if (Su(e), e.tag === 13) {
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
  function Nu() {
    for (var e = ct; e; ) e = en(e.nextSibling);
  }
  function Yn() {
    ct = ut = null, Re = !1;
  }
  function Lo(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var hm = W.ReactCurrentBatchConfig;
  function Fr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(d) {
          var v = a.refs;
          d === null ? delete v[i] : v[i] = d;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function bl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function xu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Tu(e) {
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
    function i(N, k, M) {
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
      return J === ae ? A(N, k, M.props.children, U, M.key) : k !== null && (k.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Ie && xu(J) === k.type) ? (U = a(k, M.props), U.ref = Fr(N, k, M), U.return = N, U) : (U = da(M.type, M.key, M.props, null, N.mode, U), U.ref = Fr(N, k, M), U.return = N, U);
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
        bl(N, k);
      }
      return null;
    }
    function O(N, k, M, U) {
      var J = k !== null ? k.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return J !== null ? null : v(N, k, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return M.key === J ? E(N, k, M, U) : null;
          case ne:
            return M.key === J ? I(N, k, M, U) : null;
          case Ie:
            return J = M._init, O(
              N,
              k,
              J(M._payload),
              U
            );
        }
        if (mr(M) || re(M)) return J !== null ? null : A(N, k, M, U, null);
        bl(N, M);
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
        bl(k, U);
      }
      return null;
    }
    function K(N, k, M, U) {
      for (var J = null, ee = null, te = k, le = k = 0, He = null; te !== null && le < M.length; le++) {
        te.index > le ? (He = te, te = null) : He = te.sibling;
        var he = O(N, te, M[le], U);
        if (he === null) {
          te === null && (te = He);
          break;
        }
        e && te && he.alternate === null && t(N, te), k = i(he, k, le), ee === null ? J = he : ee.sibling = he, ee = he, te = He;
      }
      if (le === M.length) return n(N, te), Re && En(N, le), J;
      if (te === null) {
        for (; le < M.length; le++) te = F(N, M[le], U), te !== null && (k = i(te, k, le), ee === null ? J = te : ee.sibling = te, ee = te);
        return Re && En(N, le), J;
      }
      for (te = r(N, te); le < M.length; le++) He = H(te, N, le, M[le], U), He !== null && (e && He.alternate !== null && te.delete(He.key === null ? le : He.key), k = i(He, k, le), ee === null ? J = He : ee.sibling = He, ee = He);
      return e && te.forEach(function(mn) {
        return t(N, mn);
      }), Re && En(N, le), J;
    }
    function G(N, k, M, U) {
      var J = re(M);
      if (typeof J != "function") throw Error(s(150));
      if (M = J.call(M), M == null) throw Error(s(151));
      for (var ee = J = null, te = k, le = k = 0, He = null, he = M.next(); te !== null && !he.done; le++, he = M.next()) {
        te.index > le ? (He = te, te = null) : He = te.sibling;
        var mn = O(N, te, he.value, U);
        if (mn === null) {
          te === null && (te = He);
          break;
        }
        e && te && mn.alternate === null && t(N, te), k = i(mn, k, le), ee === null ? J = mn : ee.sibling = mn, ee = mn, te = He;
      }
      if (he.done) return n(
        N,
        te
      ), Re && En(N, le), J;
      if (te === null) {
        for (; !he.done; le++, he = M.next()) he = F(N, he.value, U), he !== null && (k = i(he, k, le), ee === null ? J = he : ee.sibling = he, ee = he);
        return Re && En(N, le), J;
      }
      for (te = r(N, te); !he.done; le++, he = M.next()) he = H(te, N, le, he.value, U), he !== null && (e && he.alternate !== null && te.delete(he.key === null ? le : he.key), k = i(he, k, le), ee === null ? J = he : ee.sibling = he, ee = he);
      return e && te.forEach(function(Ym) {
        return t(N, Ym);
      }), Re && En(N, le), J;
    }
    function Oe(N, k, M, U) {
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
                  } else if (ee.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Ie && xu(J) === ee.type) {
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
            return ee = M._init, Oe(N, k, ee(M._payload), U);
        }
        if (mr(M)) return K(N, k, M, U);
        if (re(M)) return G(N, k, M, U);
        bl(N, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, k !== null && k.tag === 6 ? (n(N, k.sibling), k = a(k, M), k.return = N, N = k) : (n(N, k), k = ki(M, N.mode, U), k.return = N, N = k), d(N)) : n(N, k);
    }
    return Oe;
  }
  var Kn = Tu(!0), Ru = Tu(!1), Bl = tn(null), Hl = null, Gn = null, Io = null;
  function Do() {
    Io = Gn = Hl = null;
  }
  function $o(e) {
    var t = Bl.current;
    xe(Bl), e._currentValue = t;
  }
  function Oo(e, t, n) {
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
  function zo(e) {
    wn === null ? wn = [e] : wn.push(e);
  }
  function Pu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, zo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, bt(e, r);
  }
  function bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var ln = !1;
  function Ao(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Mu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (fe & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, bt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, zo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, bt(e, n);
  }
  function Vl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ga(e, n);
    }
  }
  function Lu(e, t) {
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
  function Wl(e, t, n, r) {
    var a = e.updateQueue;
    ln = !1;
    var i = a.firstBaseUpdate, d = a.lastBaseUpdate, v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var E = v, I = E.next;
      E.next = null, d === null ? i = I : d.next = I, d = E;
      var A = e.alternate;
      A !== null && (A = A.updateQueue, v = A.lastBaseUpdate, v !== d && (v === null ? A.firstBaseUpdate = I : v.next = I, A.lastBaseUpdate = E));
    }
    if (i !== null) {
      var F = a.baseState;
      d = 0, A = I = E = null, v = i;
      do {
        var O = v.lane, H = v.eventTime;
        if ((r & O) === O) {
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
            switch (O = t, H = n, G.tag) {
              case 1:
                if (K = G.payload, typeof K == "function") {
                  F = K.call(H, F, O);
                  break e;
                }
                F = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = G.payload, O = typeof K == "function" ? K.call(H, F, O) : K, O == null) break e;
                F = q({}, F, O);
                break e;
              case 2:
                ln = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, O = a.effects, O === null ? a.effects = [v] : O.push(v));
        } else H = { eventTime: H, lane: O, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, A === null ? (I = A = H, E = F) : A = A.next = H, d |= O;
        if (v = v.next, v === null) {
          if (v = a.shared.pending, v === null) break;
          O = v, v = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      if (A === null && (E = F), a.baseState = E, a.firstBaseUpdate = I, a.lastBaseUpdate = A, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else i === null && (a.shared.lanes = 0);
      Sn |= d, e.lanes = d, e.memoizedState = F;
    }
  }
  function Iu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var jr = {}, Lt = tn(jr), Ur = tn(jr), br = tn(jr);
  function kn(e) {
    if (e === jr) throw Error(s(174));
    return e;
  }
  function Fo(e, t) {
    switch (Ce(br, t), Ce(Ur, e), Ce(Lt, jr), e = t.nodeType, e) {
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
    xe(Lt), xe(Ur), xe(br);
  }
  function Du(e) {
    kn(br.current);
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
  function bo() {
    for (var e = 0; e < Uo.length; e++) Uo[e]._workInProgressVersionPrimary = null;
    Uo.length = 0;
  }
  var ql = W.ReactCurrentDispatcher, Bo = W.ReactCurrentBatchConfig, Cn = 0, Le = null, je = null, be = null, Yl = !1, Br = !1, Hr = 0, vm = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Ho(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function Vo(e, t, n, r, a, i) {
    if (Cn = i, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ql.current = e === null || e.memoizedState === null ? Em : wm, e = n(r, a), Br) {
      i = 0;
      do {
        if (Br = !1, Hr = 0, 25 <= i) throw Error(s(301));
        i += 1, be = je = null, t.updateQueue = null, ql.current = km, e = n(r, a);
      } while (Br);
    }
    if (ql.current = Xl, t = je !== null && je.next !== null, Cn = 0, be = je = Le = null, Yl = !1, t) throw Error(s(300));
    return e;
  }
  function Wo() {
    var e = Hr !== 0;
    return Hr = 0, e;
  }
  function It() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return be === null ? Le.memoizedState = be = e : be = be.next = e, be;
  }
  function vt() {
    if (je === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = be === null ? Le.memoizedState : be.next;
    if (t !== null) be = t, je = e;
    else {
      if (e === null) throw Error(s(310));
      je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, be === null ? Le.memoizedState = be = e : be = be.next = e;
    }
    return be;
  }
  function Vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qo(e) {
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
      var v = d = null, E = null, I = i;
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
      } while (I !== null && I !== i);
      E === null ? d = r : E.next = v, kt(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = E, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        i = a.lane, Le.lanes |= i, Sn |= i, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function qo(e) {
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
      kt(i, t.memoizedState) || (nt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function $u() {
  }
  function Ou(e, t) {
    var n = Le, r = vt(), a = t(), i = !kt(r.memoizedState, a);
    if (i && (r.memoizedState = a, nt = !0), r = r.queue, Yo(Fu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || be !== null && be.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wr(9, Au.bind(null, n, r, a, t), void 0, null), Be === null) throw Error(s(349));
      (Cn & 30) !== 0 || zu(n, t, a);
    }
    return a;
  }
  function zu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Au(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ju(t) && Uu(e);
  }
  function Fu(e, t, n) {
    return n(function() {
      ju(t) && Uu(e);
    });
  }
  function ju(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Uu(e) {
    var t = bt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function bu(e) {
    var t = It();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = _m.bind(null, Le, e), [t.memoizedState, e];
  }
  function Wr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Bu() {
    return vt().memoizedState;
  }
  function Kl(e, t, n, r) {
    var a = It();
    Le.flags |= e, a.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Gl(e, t, n, r) {
    var a = vt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (i = d.destroy, r !== null && Ho(r, d.deps)) {
        a.memoizedState = Wr(t, n, i, r);
        return;
      }
    }
    Le.flags |= e, a.memoizedState = Wr(1 | t, n, i, r);
  }
  function Hu(e, t) {
    return Kl(8390656, 8, e, t);
  }
  function Yo(e, t) {
    return Gl(2048, 8, e, t);
  }
  function Vu(e, t) {
    return Gl(4, 2, e, t);
  }
  function Wu(e, t) {
    return Gl(4, 4, e, t);
  }
  function Qu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function qu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gl(4, 4, Qu.bind(null, t, e), n);
  }
  function Ko() {
  }
  function Yu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ku(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Gu(e, t, n) {
    return (Cn & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n) : (kt(n, t) || (n = xs(), Le.lanes |= n, Sn |= n, e.baseState = !0), t);
  }
  function ym(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Bo.transition;
    Bo.transition = {};
    try {
      e(!1), t();
    } finally {
      Ee = n, Bo.transition = r;
    }
  }
  function Xu() {
    return vt().memoizedState;
  }
  function gm(e, t, n) {
    var r = cn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ju(e)) Zu(t, n);
    else if (n = Pu(e, t, n, r), n !== null) {
      var a = Ze();
      Tt(n, e, r, a), ec(n, t, r);
    }
  }
  function _m(e, t, n) {
    var r = cn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ju(e)) Zu(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, v = i(d, n);
        if (a.hasEagerState = !0, a.eagerState = v, kt(v, d)) {
          var E = t.interleaved;
          E === null ? (a.next = a, zo(t)) : (a.next = E.next, E.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = Pu(e, t, a, r), n !== null && (a = Ze(), Tt(n, e, r, a), ec(n, t, r));
    }
  }
  function Ju(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le;
  }
  function Zu(e, t) {
    Br = Yl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ec(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ga(e, n);
    }
  }
  var Xl = { readContext: ht, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Em = { readContext: ht, useCallback: function(e, t) {
    return It().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: Hu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Kl(
      4194308,
      4,
      Qu.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gm.bind(null, Le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = It();
    return e = { current: e }, t.memoizedState = e;
  }, useState: bu, useDebugValue: Ko, useDeferredValue: function(e) {
    return It().memoizedState = e;
  }, useTransition: function() {
    var e = bu(!1), t = e[0];
    return e = ym.bind(null, e[1]), It().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Le, a = It();
    if (Re) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(s(349));
      (Cn & 30) !== 0 || zu(r, t, n);
    }
    a.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return a.queue = i, Hu(Fu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Wr(9, Au.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = It(), t = Be.identifierPrefix;
    if (Re) {
      var n = Ut, r = jt;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = vm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, wm = {
    readContext: ht,
    useCallback: Yu,
    useContext: ht,
    useEffect: Yo,
    useImperativeHandle: qu,
    useInsertionEffect: Vu,
    useLayoutEffect: Wu,
    useMemo: Ku,
    useReducer: Qo,
    useRef: Bu,
    useState: function() {
      return Qo(Vr);
    },
    useDebugValue: Ko,
    useDeferredValue: function(e) {
      var t = vt();
      return Gu(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = Qo(Vr)[0], t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: $u,
    useSyncExternalStore: Ou,
    useId: Xu,
    unstable_isNewReconciler: !1
  }, km = { readContext: ht, useCallback: Yu, useContext: ht, useEffect: Yo, useImperativeHandle: qu, useInsertionEffect: Vu, useLayoutEffect: Wu, useMemo: Ku, useReducer: qo, useRef: Bu, useState: function() {
    return qo(Vr);
  }, useDebugValue: Ko, useDeferredValue: function(e) {
    var t = vt();
    return je === null ? t.memoizedState = e : Gu(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = qo(Vr)[0], t = vt().memoizedState;
    return [e, t];
  }, useMutableSource: $u, useSyncExternalStore: Ou, useId: Xu, unstable_isNewReconciler: !1 };
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
    var r = Ze(), a = cn(e), i = Bt(r, a);
    i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (Tt(t, e, a, r), Vl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = cn(e), i = Bt(r, a);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = an(e, i, a), t !== null && (Tt(t, e, a, r), Vl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ze(), r = cn(e), a = Bt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = an(e, a, r), t !== null && (Tt(t, e, r, n), Vl(t, e, r));
  } };
  function tc(e, t, n, r, a, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(a, i) : !0;
  }
  function nc(e, t, n) {
    var r = !1, a = nn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ht(i) : (a = tt(t) ? gn : qe.current, r = t.contextTypes, i = (r = r != null) ? Wn(e, a) : nn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Jl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function rc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Jl.enqueueReplaceState(t, t.state, null);
  }
  function Xo(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Ao(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = ht(i) : (i = tt(t) ? gn : qe.current, a.context = Wn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Go(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Jl.enqueueReplaceState(a, a.state, null), Wl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += me(r), r = r.return;
      while (r);
      var a = n;
    } catch (i) {
      a = `
Error generating stack: ` + i.message + `
` + i.stack;
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
  var Cm = typeof WeakMap == "function" ? WeakMap : Map;
  function lc(e, t, n) {
    n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      aa || (aa = !0, pi = r), Zo(e, t);
    }, n;
  }
  function ac(e, t, n) {
    n = Bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        Zo(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Zo(e, t), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function oc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Cm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Am.bind(null, e, t, n), t.then(e, e));
  }
  function ic(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function sc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, an(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Sm = W.ReactCurrentOwner, nt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Ru(t, null, n, r) : Kn(t, e.child, n, r);
  }
  function uc(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return Xn(t, a), r = Vo(e, t, n, r, i, a), n = Wo(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Re && n && To(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function cc(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !wi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, dc(e, t, i, r, a)) : (e = da(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Lr, n(d, r) && e.ref === t.ref) return Ht(e, t, a);
    }
    return t.flags |= 1, e = fn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function dc(e, t, n, r, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Lr(i, r) && e.ref === t.ref) if (nt = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (nt = !0);
      else return t.lanes = e.lanes, Ht(e, t, a);
    }
    return ei(e, t, n, r, a);
  }
  function fc(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(tr, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(tr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ce(tr, dt), dt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ce(tr, dt), dt |= r;
    return Je(e, t, a, n), t.child;
  }
  function mc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ei(e, t, n, r, a) {
    var i = tt(n) ? gn : qe.current;
    return i = Wn(t, i), Xn(t, a), n = Vo(e, t, n, r, i, a), r = Wo(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Re && r && To(t), t.flags |= 1, Je(e, t, n, a), t.child);
  }
  function pc(e, t, n, r, a) {
    if (tt(n)) {
      var i = !0;
      zl(t);
    } else i = !1;
    if (Xn(t, a), t.stateNode === null) ea(e, t), nc(t, n, r), Xo(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, v = t.memoizedProps;
      d.props = v;
      var E = d.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = ht(I) : (I = tt(n) ? gn : qe.current, I = Wn(t, I));
      var A = n.getDerivedStateFromProps, F = typeof A == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      F || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== r || E !== I) && rc(t, d, r, I), ln = !1;
      var O = t.memoizedState;
      d.state = O, Wl(t, r, d, a), E = t.memoizedState, v !== r || O !== E || et.current || ln ? (typeof A == "function" && (Go(t, n, A, r), E = t.memoizedState), (v = ln || tc(t, n, v, r, O, E, I)) ? (F || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = E), d.props = r, d.state = E, d.context = I, r = v) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Mu(e, t), v = t.memoizedProps, I = t.type === t.elementType ? v : St(t.type, v), d.props = I, F = t.pendingProps, O = d.context, E = n.contextType, typeof E == "object" && E !== null ? E = ht(E) : (E = tt(n) ? gn : qe.current, E = Wn(t, E));
      var H = n.getDerivedStateFromProps;
      (A = typeof H == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== F || O !== E) && rc(t, d, r, E), ln = !1, O = t.memoizedState, d.state = O, Wl(t, r, d, a);
      var K = t.memoizedState;
      v !== F || O !== K || et.current || ln ? (typeof H == "function" && (Go(t, n, H, r), K = t.memoizedState), (I = ln || tc(t, n, I, r, O, K, E) || !1) ? (A || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, K, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, K, E)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = K), d.props = r, d.state = K, d.context = E, r = I) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ti(e, t, n, r, i, a);
  }
  function ti(e, t, n, r, a, i) {
    mc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && _u(t, n, !1), Ht(e, t, i);
    r = t.stateNode, Sm.current = t;
    var v = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Kn(t, e.child, null, i), t.child = Kn(t, null, v, i)) : Je(e, t, v, i), t.memoizedState = r.state, a && _u(t, n, !0), t.child;
  }
  function hc(e) {
    var t = e.stateNode;
    t.pendingContext ? yu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yu(e, t.context, !1), Fo(e, t.containerInfo);
  }
  function vc(e, t, n, r, a) {
    return Yn(), Lo(a), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ri(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function yc(e, t, n) {
    var r = t.pendingProps, a = Me.current, i = !1, d = (t.flags & 128) !== 0, v;
    if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), v ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Ce(Me, a & 1), e === null)
      return Mo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = fa(d, r, 0, null), e = Rn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ri(n), t.memoizedState = ni, e) : li(t, d));
    if (a = e.memoizedState, a !== null && (v = a.dehydrated, v !== null)) return Nm(e, t, d, r, v, a, n);
    if (i) {
      i = r.fallback, d = t.mode, a = e.child, v = a.sibling;
      var E = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = E, t.deletions = null) : (r = fn(a, E), r.subtreeFlags = a.subtreeFlags & 14680064), v !== null ? i = fn(v, i) : (i = Rn(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? ri(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = ni, r;
    }
    return i = e.child, e = i.sibling, r = fn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function li(e, t) {
    return t = fa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Zl(e, t, n, r) {
    return r !== null && Lo(r), Kn(t, e.child, null, n), e = li(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Nm(e, t, n, r, a, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Jo(Error(s(422))), Zl(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = fa({ mode: "visible", children: r.children }, a, 0, null), i = Rn(i, a, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Kn(t, e.child, null, d), t.child.memoizedState = ri(d), t.memoizedState = ni, i);
    if ((t.mode & 1) === 0) return Zl(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var v = r.dgst;
      return r = v, i = Error(s(419)), r = Jo(i, r, void 0), Zl(e, t, d, r);
    }
    if (v = (d & e.childLanes) !== 0, nt || v) {
      if (r = Be, r !== null) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, bt(e, a), Tt(r, e, a, -1));
      }
      return Ei(), r = Jo(Error(s(421))), Zl(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ct = en(a.nextSibling), ut = t, Re = !0, Ct = null, e !== null && (mt[pt++] = jt, mt[pt++] = Ut, mt[pt++] = _n, jt = e.id, Ut = e.overflow, _n = t), t = li(t, r.children), t.flags |= 4096, t);
  }
  function gc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Oo(e.return, t, n);
  }
  function ai(e, t, n, r, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
  }
  function _c(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, i = r.tail;
    if (Je(e, t, r.children, n), r = Me.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
        else if (e.tag === 19) gc(e, n, t);
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
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ai(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Ql(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        ai(t, !0, n, null, i);
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
  function xm(e, t, n) {
    switch (t.tag) {
      case 3:
        hc(t), Yn();
        break;
      case 5:
        Du(t);
        break;
      case 1:
        tt(t.type) && zl(t);
        break;
      case 4:
        Fo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Ce(Bl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? yc(e, t, n) : (Ce(Me, Me.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
        Ce(Me, Me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return _c(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ce(Me, Me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, fc(e, t, n);
    }
    return Ht(e, t, n);
  }
  var Ec, oi, wc, kc;
  Ec = function(e, t) {
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
  }, wc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, kn(Lt.current);
      var i = null;
      switch (n) {
        case "input":
          a = $a(e, a), r = $a(e, r), i = [];
          break;
        case "select":
          a = q({}, a, { value: void 0 }), r = q({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = Aa(e, a), r = Aa(e, r), i = [];
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
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (f.hasOwnProperty(I) ? i || (i = []) : (i = i || []).push(I, null));
      for (I in r) {
        var E = r[I];
        if (v = a != null ? a[I] : void 0, r.hasOwnProperty(I) && E !== v && (E != null || v != null)) if (I === "style") if (v) {
          for (d in v) !v.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in E) E.hasOwnProperty(d) && v[d] !== E[d] && (n || (n = {}), n[d] = E[d]);
        } else n || (i || (i = []), i.push(
          I,
          n
        )), n = E;
        else I === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, v = v ? v.__html : void 0, E != null && v !== E && (i = i || []).push(I, E)) : I === "children" ? typeof E != "string" && typeof E != "number" || (i = i || []).push(I, "" + E) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (f.hasOwnProperty(I) ? (E != null && I === "onScroll" && Ne("scroll", e), i || v === E || (i = [])) : (i = i || []).push(I, E));
      }
      n && (i = i || []).push("style", n);
      var I = i;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, kc = function(e, t, n, r) {
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
  function Tm(e, t, n) {
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
        return tt(t.type) && Ol(), Ke(t), null;
      case 3:
        return r = t.stateNode, Jn(), xe(et), xe(qe), bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ul(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (yi(Ct), Ct = null))), oi(e, t), Ke(t), null;
      case 5:
        jo(t);
        var a = kn(br.current);
        if (n = t.type, e !== null && t.stateNode != null) wc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = kn(Lt.current), Ul(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Mt] = t, r[zr] = i, e = (t.mode & 1) !== 0, n) {
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
                ns(r, i), Ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Ne("invalid", r);
                break;
              case "textarea":
                as(r, i), Ne("invalid", r);
            }
            ja(n, i), a = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var v = i[d];
              d === "children" ? typeof v == "string" ? r.textContent !== v && (i.suppressHydrationWarning !== !0 && Il(r.textContent, v, e), a = ["children", v]) : typeof v == "number" && r.textContent !== "" + v && (i.suppressHydrationWarning !== !0 && Il(
                r.textContent,
                v,
                e
              ), a = ["children", "" + v]) : f.hasOwnProperty(d) && v != null && d === "onScroll" && Ne("scroll", r);
            }
            switch (n) {
              case "input":
                ul(r), ls(r, i, !0);
                break;
              case "textarea":
                ul(r), is(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Dl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ss(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[Mt] = t, e[zr] = r, Ec(e, t, !1, !1), t.stateNode = e;
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
                  ns(e, r), a = $a(e, r), Ne("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = q({}, r, { value: void 0 }), Ne("invalid", e);
                  break;
                case "textarea":
                  as(e, r), a = Aa(e, r), Ne("invalid", e);
                  break;
                default:
                  a = r;
              }
              ja(n, a), v = a;
              for (i in v) if (v.hasOwnProperty(i)) {
                var E = v[i];
                i === "style" ? ds(e, E) : i === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && us(e, E)) : i === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && pr(e, E) : typeof E == "number" && pr(e, "" + E) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? E != null && i === "onScroll" && Ne("scroll", e) : E != null && j(e, i, E, d));
              }
              switch (n) {
                case "input":
                  ul(e), ls(e, r, !1);
                  break;
                case "textarea":
                  ul(e), is(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + _e(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? Dn(e, !!r.multiple, i, !1) : r.defaultValue != null && Dn(
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
        if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = kn(br.current), kn(Lt.current), Ul(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Mt] = t, (i = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                Il(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Il(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mt] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (xe(Me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Re && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Nu(), Yn(), t.flags |= 98560, i = !1;
          else if (i = Ul(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Mt] = t;
            } else Yn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else Ct !== null && (yi(Ct), Ct = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Ei())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return Jn(), oi(e, t), e === null && $r(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return $o(t.type._context), Ke(t), null;
      case 17:
        return tt(t.type) && Ol(), Ke(t), null;
      case 19:
        if (xe(Me), i = t.memoizedState, i === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) Qr(i, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Ql(e), d !== null) {
              for (t.flags |= 128, Qr(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ce(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && $e() > nr && (t.flags |= 128, r = !0, Qr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Ql(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qr(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !Re) return Ke(t), null;
          } else 2 * $e() - i.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128, r = !0, Qr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = $e(), t.sibling = null, n = Me.current, Ce(Me, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
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
  function Rm(e, t) {
    switch (Ro(t), t.tag) {
      case 1:
        return tt(t.type) && Ol(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Jn(), xe(et), xe(qe), bo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
  var ta = !1, Ge = !1, Pm = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
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
  var Cc = !1;
  function Mm(e, t) {
    if (_o = wl, e = tu(), co(e)) {
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
          var d = 0, v = -1, E = -1, I = 0, A = 0, F = e, O = null;
          t: for (; ; ) {
            for (var H; F !== n || a !== 0 && F.nodeType !== 3 || (v = d + a), F !== i || r !== 0 && F.nodeType !== 3 || (E = d + r), F.nodeType === 3 && (d += F.nodeValue.length), (H = F.firstChild) !== null; )
              O = F, F = H;
            for (; ; ) {
              if (F === e) break t;
              if (O === n && ++I === a && (v = d), O === i && ++A === r && (E = d), (H = F.nextSibling) !== null) break;
              F = O, O = F.parentNode;
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
              var G = K.memoizedProps, Oe = K.memoizedState, N = t.stateNode, k = N.getSnapshotBeforeUpdate(t.elementType === t.type ? G : St(t.type, G), Oe);
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
    return K = Cc, Cc = !1, K;
  }
  function qr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var i = a.destroy;
          a.destroy = void 0, i !== void 0 && ii(t, n, i);
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
  function Sc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mt], delete t[zr], delete t[So], delete t[fm], delete t[mm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Nc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function xc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nc(e.return)) return null;
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
    for (n = n.child; n !== null; ) Tc(e, t, n), n = n.sibling;
  }
  function Tc(e, t, n) {
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
            var i = a, d = i.destroy;
            i = i.tag, d !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ii(n, t, d), a = a.next;
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
  function Rc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Pm()), t.forEach(function(r) {
        var a = jm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e, d = t, v = d;
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
        Tc(i, d, a), We = null, Nt = !1;
        var E = a.alternate;
        E !== null && (E.return = null), a.return = null;
      } catch (I) {
        De(a, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pc(t, e), t = t.sibling;
  }
  function Pc(e, t) {
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
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, v = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            v === "input" && i.type === "radio" && i.name != null && rs(a, i), Ua(v, d);
            var I = Ua(v, i);
            for (d = 0; d < E.length; d += 2) {
              var A = E[d], F = E[d + 1];
              A === "style" ? ds(a, F) : A === "dangerouslySetInnerHTML" ? us(a, F) : A === "children" ? pr(a, F) : j(a, A, F, I);
            }
            switch (v) {
              case "input":
                Oa(a, i);
                break;
              case "textarea":
                os(a, i);
                break;
              case "select":
                var O = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var H = i.value;
                H != null ? Dn(a, !!i.multiple, H, !1) : O !== !!i.multiple && (i.defaultValue != null ? Dn(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Dn(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[zr] = i;
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 6:
        if (xt(t, e), Dt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, i = e.memoizedProps;
          try {
            a.nodeValue = i;
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
        xt(t, e), Dt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (mi = $e())), r & 4 && Rc(e);
        break;
      case 22:
        if (A = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (I = Ge) || A, xt(t, e), Ge = I) : xt(t, e), Dt(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !A && (e.mode & 1) !== 0) for (Q = e, A = e.child; A !== null; ) {
            for (F = Q = A; Q !== null; ) {
              switch (O = Q, H = O.child, O.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, O, O.return);
                  break;
                case 1:
                  er(O, O.return);
                  var K = O.stateNode;
                  if (typeof K.componentWillUnmount == "function") {
                    r = O, n = O.return;
                    try {
                      t = r, K.props = t.memoizedProps, K.state = t.memoizedState, K.componentWillUnmount();
                    } catch (G) {
                      De(r, n, G);
                    }
                  }
                  break;
                case 5:
                  er(O, O.return);
                  break;
                case 22:
                  if (O.memoizedState !== null) {
                    Ic(F);
                    continue;
                  }
              }
              H !== null ? (H.return = O, Q = H) : Ic(F);
            }
            A = A.sibling;
          }
          e: for (A = null, F = e; ; ) {
            if (F.tag === 5) {
              if (A === null) {
                A = F;
                try {
                  a = F.stateNode, I ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (v = F.stateNode, E = F.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, v.style.display = cs("display", d));
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
        xt(t, e), Dt(e), r & 4 && Rc(e);
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
            if (Nc(n)) {
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
            var i = xc(e);
            ci(e, i, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, v = xc(e);
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
  function Lm(e, t, n) {
    Q = e, Mc(e);
  }
  function Mc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, i = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || ta;
        if (!d) {
          var v = a.alternate, E = v !== null && v.memoizedState !== null || Ge;
          v = ta;
          var I = Ge;
          if (ta = d, (Ge = E) && !I) for (Q = a; Q !== null; ) d = Q, E = d.child, d.tag === 22 && d.memoizedState !== null ? Dc(a) : E !== null ? (E.return = d, Q = E) : Dc(a);
          for (; i !== null; ) Q = i, Mc(i), i = i.sibling;
          Q = a, ta = v, Ge = I;
        }
        Lc(e);
      } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, Q = i) : Lc(e);
    }
  }
  function Lc(e) {
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
              var i = t.updateQueue;
              i !== null && Iu(t, i, r);
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
                Iu(t, d, n);
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
        } catch (O) {
          De(t, t.return, O);
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
  function Ic(e) {
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
  function Dc(e) {
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
            var i = t.return;
            try {
              si(t);
            } catch (E) {
              De(t, i, E);
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
  var Im = Math.ceil, ra = W.ReactCurrentDispatcher, di = W.ReactCurrentOwner, yt = W.ReactCurrentBatchConfig, fe = 0, Be = null, Ae = null, Qe = 0, dt = 0, tr = tn(0), Ue = 0, Yr = null, Sn = 0, la = 0, fi = 0, Kr = null, rt = null, mi = 0, nr = 1 / 0, Vt = null, aa = !1, pi = null, sn = null, oa = !1, un = null, ia = 0, Gr = 0, hi = null, sa = -1, ua = 0;
  function Ze() {
    return (fe & 6) !== 0 ? $e() : sa !== -1 ? sa : sa = $e();
  }
  function cn(e) {
    return (e.mode & 1) === 0 ? 1 : (fe & 2) !== 0 && Qe !== 0 ? Qe & -Qe : hm.transition !== null ? (ua === 0 && (ua = xs()), ua) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Os(e.type)), e);
  }
  function Tt(e, t, n, r) {
    if (50 < Gr) throw Gr = 0, hi = null, Error(s(185));
    Er(e, n, r), ((fe & 2) === 0 || e !== Be) && (e === Be && ((fe & 2) === 0 && (la |= n), Ue === 4 && dn(e, Qe)), lt(e, r), n === 1 && fe === 0 && (t.mode & 1) === 0 && (nr = $e() + 500, Al && rn()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    hf(e, t);
    var r = gl(e, e === Be ? Qe : 0);
    if (r === 0) n !== null && Cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Cs(n), t === 1) e.tag === 0 ? pm(Oc.bind(null, e)) : Eu(Oc.bind(null, e)), cm(function() {
        (fe & 6) === 0 && rn();
      }), n = null;
      else {
        switch (Ts(r)) {
          case 1:
            n = qa;
            break;
          case 4:
            n = Ss;
            break;
          case 16:
            n = pl;
            break;
          case 536870912:
            n = Ns;
            break;
          default:
            n = pl;
        }
        n = Hc(n, $c.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function $c(e, t) {
    if (sa = -1, ua = 0, (fe & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (rr() && e.callbackNode !== n) return null;
    var r = gl(e, e === Be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ca(e, r);
    else {
      t = r;
      var a = fe;
      fe |= 2;
      var i = Ac();
      (Be !== e || Qe !== t) && (Vt = null, nr = $e() + 500, xn(e, t));
      do
        try {
          Om();
          break;
        } catch (v) {
          zc(e, v);
        }
      while (!0);
      Do(), ra.current = i, fe = a, Ae !== null ? t = 0 : (Be = null, Qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = Ya(e), a !== 0 && (r = a, t = vi(e, a))), t === 1) throw n = Yr, xn(e, 0), dn(e, r), lt(e, $e()), n;
      if (t === 6) dn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Dm(a) && (t = ca(e, r), t === 2 && (i = Ya(e), i !== 0 && (r = i, t = vi(e, i))), t === 1)) throw n = Yr, xn(e, 0), dn(e, r), lt(e, $e()), n;
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
              i = 1 << d, d = t[d], d > a && (a = d), r &= ~i;
            }
            if (r = a, r = $e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Im(r / 1960)) - r, 10 < r) {
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
    return lt(e, $e()), e.callbackNode === n ? $c.bind(null, e) : null;
  }
  function vi(e, t) {
    var n = Kr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = ca(e, t), e !== 2 && (t = rt, rt = n, t !== null && yi(t)), e;
  }
  function yi(e) {
    rt === null ? rt = e : rt.push.apply(rt, e);
  }
  function Dm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], i = a.getSnapshot;
          a = a.value;
          try {
            if (!kt(i(), a)) return !1;
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
  function Oc(e) {
    if ((fe & 6) !== 0) throw Error(s(327));
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
    var n = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      fe = n, fe === 0 && (nr = $e() + 500, Al && rn());
    }
  }
  function Nn(e) {
    un !== null && un.tag === 0 && (fe & 6) === 0 && rr();
    var t = fe;
    fe |= 1;
    var n = yt.transition, r = Ee;
    try {
      if (yt.transition = null, Ee = 1, e) return e();
    } finally {
      Ee = r, yt.transition = n, fe = t, (fe & 6) === 0 && rn();
    }
  }
  function _i() {
    dt = tr.current, xe(tr);
  }
  function xn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, um(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
      var r = n;
      switch (Ro(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ol();
          break;
        case 3:
          Jn(), xe(et), xe(qe), bo();
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
    if (Be = e, Ae = e = fn(e.current, null), Qe = dt = t, Ue = 0, Yr = null, fi = la = Sn = 0, rt = Kr = null, wn !== null) {
      for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, i = n.pending;
        if (i !== null) {
          var d = i.next;
          i.next = a, r.next = d;
        }
        n.pending = r;
      }
      wn = null;
    }
    return e;
  }
  function zc(e, t) {
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
        if (Cn = 0, be = je = Le = null, Br = !1, Hr = 0, di.current = null, n === null || n.return === null) {
          Ue = 1, Yr = t, Ae = null;
          break;
        }
        e: {
          var i = e, d = n.return, v = n, E = t;
          if (t = Qe, v.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var I = E, A = v, F = A.tag;
            if ((A.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var O = A.alternate;
              O ? (A.updateQueue = O.updateQueue, A.memoizedState = O.memoizedState, A.lanes = O.lanes) : (A.updateQueue = null, A.memoizedState = null);
            }
            var H = ic(d);
            if (H !== null) {
              H.flags &= -257, sc(H, d, v, i, t), H.mode & 1 && oc(i, I, t), t = H, E = I;
              var K = t.updateQueue;
              if (K === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(E), t.updateQueue = G;
              } else K.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                oc(i, I, t), Ei();
                break e;
              }
              E = Error(s(426));
            }
          } else if (Re && v.mode & 1) {
            var Oe = ic(d);
            if (Oe !== null) {
              (Oe.flags & 65536) === 0 && (Oe.flags |= 256), sc(Oe, d, v, i, t), Lo(Zn(E, v));
              break e;
            }
          }
          i = E = Zn(E, v), Ue !== 4 && (Ue = 2), Kr === null ? Kr = [i] : Kr.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var N = lc(i, E, t);
                Lu(i, N);
                break e;
              case 1:
                v = E;
                var k = i.type, M = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (sn === null || !sn.has(M)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var U = ac(i, v, t);
                  Lu(i, U);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        jc(n);
      } catch (J) {
        t = J, Ae === n && n !== null && (Ae = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ac() {
    var e = ra.current;
    return ra.current = Xl, e === null ? Xl : e;
  }
  function Ei() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Be === null || (Sn & 268435455) === 0 && (la & 268435455) === 0 || dn(Be, Qe);
  }
  function ca(e, t) {
    var n = fe;
    fe |= 2;
    var r = Ac();
    (Be !== e || Qe !== t) && (Vt = null, xn(e, t));
    do
      try {
        $m();
        break;
      } catch (a) {
        zc(e, a);
      }
    while (!0);
    if (Do(), fe = n, ra.current = r, Ae !== null) throw Error(s(261));
    return Be = null, Qe = 0, Ue;
  }
  function $m() {
    for (; Ae !== null; ) Fc(Ae);
  }
  function Om() {
    for (; Ae !== null && !af(); ) Fc(Ae);
  }
  function Fc(e) {
    var t = Bc(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? jc(e) : Ae = t, di.current = null;
  }
  function jc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Tm(n, t, dt), n !== null) {
          Ae = n;
          return;
        }
      } else {
        if (n = Rm(n, t), n !== null) {
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
      yt.transition = null, Ee = 1, zm(e, t, n, r);
    } finally {
      yt.transition = a, Ee = r;
    }
    return null;
  }
  function zm(e, t, n, r) {
    do
      rr();
    while (un !== null);
    if ((fe & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (vf(e, i), e === Be && (Ae = Be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || oa || (oa = !0, Hc(pl, function() {
      return rr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = yt.transition, yt.transition = null;
      var d = Ee;
      Ee = 1;
      var v = fe;
      fe |= 4, di.current = null, Mm(e, n), Pc(n, e), nm(Eo), wl = !!_o, Eo = _o = null, e.current = n, Lm(n), of(), fe = v, Ee = d, yt.transition = i;
    } else e.current = n;
    if (oa && (oa = !1, un = e, ia = a), i = e.pendingLanes, i === 0 && (sn = null), cf(n.stateNode), lt(e, $e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (aa) throw aa = !1, e = pi, pi = null, e;
    return (ia & 1) !== 0 && e.tag !== 0 && rr(), i = e.pendingLanes, (i & 1) !== 0 ? e === hi ? Gr++ : (Gr = 0, hi = e) : Gr = 0, rn(), null;
  }
  function rr() {
    if (un !== null) {
      var e = Ts(ia), t = yt.transition, n = Ee;
      try {
        if (yt.transition = null, Ee = 16 > e ? 16 : e, un === null) var r = !1;
        else {
          if (e = un, un = null, ia = 0, (fe & 6) !== 0) throw Error(s(331));
          var a = fe;
          for (fe |= 4, Q = e.current; Q !== null; ) {
            var i = Q, d = i.child;
            if ((Q.flags & 16) !== 0) {
              var v = i.deletions;
              if (v !== null) {
                for (var E = 0; E < v.length; E++) {
                  var I = v[E];
                  for (Q = I; Q !== null; ) {
                    var A = Q;
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qr(8, A, i);
                    }
                    var F = A.child;
                    if (F !== null) F.return = A, Q = F;
                    else for (; Q !== null; ) {
                      A = Q;
                      var O = A.sibling, H = A.return;
                      if (Sc(A), A === I) {
                        Q = null;
                        break;
                      }
                      if (O !== null) {
                        O.return = H, Q = O;
                        break;
                      }
                      Q = H;
                    }
                  }
                }
                var K = i.alternate;
                if (K !== null) {
                  var G = K.child;
                  if (G !== null) {
                    K.child = null;
                    do {
                      var Oe = G.sibling;
                      G.sibling = null, G = Oe;
                    } while (G !== null);
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
                  qr(9, i, i.return);
              }
              var N = i.sibling;
              if (N !== null) {
                N.return = i.return, Q = N;
                break e;
              }
              Q = i.return;
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
          if (fe = a, rn(), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
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
  function Uc(e, t, n) {
    t = Zn(n, t), t = lc(e, t, 1), e = an(e, t, 1), t = Ze(), e !== null && (Er(e, 1, t), lt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Uc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Uc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
          e = Zn(n, e), e = ac(t, e, 1), t = an(t, e, 1), e = Ze(), t !== null && (Er(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Am(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ze(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (Qe & n) === n && (Ue === 4 || Ue === 3 && (Qe & 130023424) === Qe && 500 > $e() - mi ? xn(e, 0) : fi |= n), lt(e, t);
  }
  function bc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = yl, yl <<= 1, (yl & 130023424) === 0 && (yl = 4194304)));
    var n = Ze();
    e = bt(e, t), e !== null && (Er(e, t, n), lt(e, n));
  }
  function Fm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bc(e, n);
  }
  function jm(e, t) {
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
    r !== null && r.delete(t), bc(e, n);
  }
  var Bc;
  Bc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return nt = !1, xm(e, t, n);
      nt = (e.flags & 131072) !== 0;
    }
    else nt = !1, Re && (t.flags & 1048576) !== 0 && wu(t, jl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ea(e, t), e = t.pendingProps;
        var a = Wn(t, qe.current);
        Xn(t, n), a = Vo(null, t, r, e, a, n);
        var i = Wo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (i = !0, zl(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ao(t), a.updater = Jl, t.stateNode = a, a._reactInternals = t, Xo(t, r, e, n), t = ti(null, t, r, !0, i, n)) : (t.tag = 0, Re && i && To(t), Je(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ea(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = bm(r), e = St(r, e), a) {
            case 0:
              t = ei(null, t, r, e, n);
              break e;
            case 1:
              t = pc(null, t, r, e, n);
              break e;
            case 11:
              t = uc(null, t, r, e, n);
              break e;
            case 14:
              t = cc(null, t, r, St(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), pc(e, t, r, a, n);
      case 3:
        e: {
          if (hc(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, a = i.element, Mu(e, t), Wl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = Zn(Error(s(423)), t), t = vc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = Zn(Error(s(424)), t), t = vc(e, t, r, n, a);
            break e;
          } else for (ct = en(t.stateNode.containerInfo.firstChild), ut = t, Re = !0, Ct = null, n = Ru(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return Du(t), e === null && Mo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = a.children, wo(r, a) ? d = null : i !== null && wo(r, i) && (t.flags |= 32), mc(e, t), Je(e, t, d, n), t.child;
      case 6:
        return e === null && Mo(t), null;
      case 13:
        return yc(e, t, n);
      case 4:
        return Fo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), uc(e, t, r, a, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, d = a.value, Ce(Bl, r._currentValue), r._currentValue = d, i !== null) if (kt(i.value, d)) {
            if (i.children === a.children && !et.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var v = i.dependencies;
            if (v !== null) {
              d = i.child;
              for (var E = v.firstContext; E !== null; ) {
                if (E.context === r) {
                  if (i.tag === 1) {
                    E = Bt(-1, n & -n), E.tag = 2;
                    var I = i.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var A = I.pending;
                      A === null ? E.next = E : (E.next = A.next, A.next = E), I.pending = E;
                    }
                  }
                  i.lanes |= n, E = i.alternate, E !== null && (E.lanes |= n), Oo(
                    i.return,
                    n,
                    t
                  ), v.lanes |= n;
                  break;
                }
                E = E.next;
              }
            } else if (i.tag === 10) d = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (d = i.return, d === null) throw Error(s(341));
              d.lanes |= n, v = d.alternate, v !== null && (v.lanes |= n), Oo(d, n, t), d = i.sibling;
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
          Je(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Xn(t, n), a = ht(a), r = r(a), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = St(r, t.pendingProps), a = St(r.type, a), cc(e, t, r, a, n);
      case 15:
        return dc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : St(r, a), ea(e, t), t.tag = 1, tt(r) ? (e = !0, zl(t)) : e = !1, Xn(t, n), nc(t, r, a), Xo(t, r, a, n), ti(null, t, r, !0, e, n);
      case 19:
        return _c(e, t, n);
      case 22:
        return fc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Hc(e, t) {
    return ks(e, t);
  }
  function Um(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gt(e, t, n, r) {
    return new Um(e, t, n, r);
  }
  function wi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function bm(e) {
    if (typeof e == "function") return wi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ve) return 11;
      if (e === ie) return 14;
    }
    return 2;
  }
  function fn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function da(e, t, n, r, a, i) {
    var d = 2;
    if (r = e, typeof e == "function") wi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case ae:
        return Rn(n.children, a, i, t);
      case B:
        d = 8, a |= 8;
        break;
      case we:
        return e = gt(12, n, t, a | 2), e.elementType = we, e.lanes = i, e;
      case ze:
        return e = gt(13, n, t, a), e.elementType = ze, e.lanes = i, e;
      case Fe:
        return e = gt(19, n, t, a), e.elementType = Fe, e.lanes = i, e;
      case oe:
        return fa(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Se:
            d = 10;
            break e;
          case X:
            d = 9;
            break e;
          case ve:
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
    return t = gt(d, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
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
  function Bm(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ka(0), this.expirationTimes = Ka(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ka(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Si(e, t, n, r, a, i, d, v, E) {
    return e = new Bm(e, t, n, v, E), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = gt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ao(i), e;
  }
  function Hm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ne, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Vc(e) {
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
      if (tt(n)) return gu(e, n, t);
    }
    return t;
  }
  function Wc(e, t, n, r, a, i, d, v, E) {
    return e = Si(n, r, !0, e, a, i, d, v, E), e.context = Vc(null), n = e.current, r = Ze(), a = cn(n), i = Bt(r, a), i.callback = t ?? null, an(n, i, a), e.current.lanes = a, Er(e, a, r), lt(e, r), e;
  }
  function ma(e, t, n, r) {
    var a = t.current, i = Ze(), d = cn(a);
    return n = Vc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = an(a, t, d), e !== null && (Tt(e, a, d, i), Vl(e, a, d)), d;
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
  function Qc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ni(e, t) {
    Qc(e, t), (e = e.alternate) && Qc(e, t);
  }
  function Vm() {
    return null;
  }
  var qc = typeof reportError == "function" ? reportError : function(e) {
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
      var t = Ms();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Xt.length && t !== 0 && t < Xt[n].priority; n++) ;
      Xt.splice(n, 0, e), n === 0 && Ds(e);
    }
  };
  function Ti(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function va(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Yc() {
  }
  function Wm(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var I = pa(d);
          i.call(I);
        };
      }
      var d = Wc(t, r, e, 0, null, !1, !1, "", Yc);
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
    var E = Si(e, 0, !1, null, null, !1, !1, "", Yc);
    return e._reactRootContainer = E, e[At] = E.current, $r(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
      ma(t, E, n, r);
    }), E;
  }
  function ya(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
      var d = i;
      if (typeof a == "function") {
        var v = a;
        a = function() {
          var E = pa(d);
          v.call(E);
        };
      }
      ma(t, d, e, a);
    } else d = Wm(n, t, e, a, r);
    return pa(d);
  }
  Rs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = _r(t.pendingLanes);
          n !== 0 && (Ga(t, n | 1), lt(t, $e()), (fe & 6) === 0 && (nr = $e() + 500, rn()));
        }
        break;
      case 13:
        Nn(function() {
          var r = bt(e, 1);
          if (r !== null) {
            var a = Ze();
            Tt(r, e, 1, a);
          }
        }), Ni(e, 1);
    }
  }, Xa = function(e) {
    if (e.tag === 13) {
      var t = bt(e, 134217728);
      if (t !== null) {
        var n = Ze();
        Tt(t, e, 134217728, n);
      }
      Ni(e, 134217728);
    }
  }, Ps = function(e) {
    if (e.tag === 13) {
      var t = cn(e), n = bt(e, t);
      if (n !== null) {
        var r = Ze();
        Tt(n, e, t, r);
      }
      Ni(e, t);
    }
  }, Ms = function() {
    return Ee;
  }, Ls = function(e, t) {
    var n = Ee;
    try {
      return Ee = e, t();
    } finally {
      Ee = n;
    }
  }, Ha = function(e, t, n) {
    switch (t) {
      case "input":
        if (Oa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = $l(r);
              if (!a) throw Error(s(90));
              ts(r), Oa(r, a);
            }
          }
        }
        break;
      case "textarea":
        os(e, n);
        break;
      case "select":
        t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
    }
  }, hs = gi, vs = Nn;
  var Qm = { usingClientEntryPoint: !1, Events: [Ar, Hn, $l, ms, ps, gi] }, Xr = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qm = { bundleType: Xr.bundleType, version: Xr.version, rendererPackageName: Xr.rendererPackageName, rendererConfig: Xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Es(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Xr.findFiberByHostInstance || Vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ga.isDisabled && ga.supportsFiber) try {
      hl = ga.inject(qm), Pt = ga;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ti(t)) throw Error(s(200));
    return Hm(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!Ti(e)) throw Error(s(299));
    var n = !1, r = "", a = qc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Si(e, 1, !1, null, null, n, !1, r, a), e[At] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new xi(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Es(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return Nn(e);
  }, at.hydrate = function(e, t, n) {
    if (!va(t)) throw Error(s(200));
    return ya(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!Ti(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, i = "", d = qc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Wc(t, null, e, 1, n ?? null, a, !1, i, d), e[At] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
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
var ed;
function Zm() {
  if (ed) return Pi.exports;
  ed = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Pi.exports = Jm(), Pi.exports;
}
var td;
function ep() {
  if (td) return _a;
  td = 1;
  var l = Zm();
  return _a.createRoot = l.createRoot, _a.hydrateRoot = l.hydrateRoot, _a;
}
var tp = ep();
const np = /* @__PURE__ */ xd(tp);
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
var nd = "popstate";
function rd(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function rp(l = {}) {
  function o(f, m) {
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
  return ap(
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
function lp() {
  return Math.random().toString(36).substring(2, 10);
}
function ld(l, o) {
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
function Bi(l, o, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? In(o) : o,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || c || lp(),
    mask: f
  };
}
function rl({
  pathname: l = "/",
  search: o = "",
  hash: s = ""
}) {
  return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function In(l) {
  let o = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (o.hash = l.substring(s), l = l.substring(0, s));
    let c = l.indexOf("?");
    c >= 0 && (o.search = l.substring(c), l = l.substring(0, c)), l && (o.pathname = l);
  }
  return o;
}
function ap(l, o, s, c = {}) {
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
    let R = rd(T) ? T : Bi(D.location, T, $);
    s && s(R, T), C = w() + 1;
    let j = ld(R, C), W = D.createHref(R.mask || R);
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
    let R = rd(T) ? T : Bi(D.location, T, $);
    s && s(R, T), C = w();
    let j = ld(R, C), W = D.createHref(R.mask || R);
    p.replaceState(j, "", W), m && y && y({ action: h, location: D.location, delta: 0 });
  }
  function L(T) {
    return op(f, T);
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
      return f.addEventListener(nd, _), y = T, () => {
        f.removeEventListener(nd, _), y = null;
      };
    },
    createHref(T) {
      return o(f, T);
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
function op(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Pe(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : rl(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Rd(l, o, s = "/") {
  return ip(l, o, s, !1);
}
function ip(l, o, s, c, f) {
  let m = typeof o == "string" ? In(o) : o, p = Qt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = sp(l), y = null, C = Ep(p);
  for (let w = 0; y == null && w < h.length; ++w)
    y = gp(
      h[w],
      C,
      c
    );
  return y;
}
function sp(l) {
  let o = Pd(l);
  return up(o), o;
}
function Pd(l, o = [], s = [], c = "", f = !1) {
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
    ), Pd(
      p.children,
      o,
      P,
      _,
      y
    )), !(p.path == null && !p.index) && o.push({
      path: _,
      score: vp(_, p.index),
      routesMeta: P
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let C of Md(p.path))
        m(p, h, !0, C);
  }), o;
}
function Md(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [s, ...c] = o, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = Md(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), f && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function up(l) {
  l.sort(
    (o, s) => o.score !== s.score ? s.score - o.score : yp(
      o.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var cp = /^:[\w-]+$/, dp = 3, fp = 2, mp = 1, pp = 10, hp = -2, ad = (l) => l === "*";
function vp(l, o) {
  let s = l.split("/"), c = s.length;
  return s.some(ad) && (c += hp), o && (c += fp), s.filter((f) => !ad(f)).reduce(
    (f, m) => f + (cp.test(m) ? dp : m === "" ? mp : pp),
    c
  );
}
function yp(l, o) {
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
function gp(l, o, s = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], C = h === c.length - 1, w = m === "/" ? o : o.slice(m.length) || "/", _ = Ta(
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
      pathnameBase: Sp(
        Rt([m, _.pathnameBase])
      ),
      route: P
    }), _.pathnameBase !== "/" && (m = Rt([m, _.pathnameBase]));
  }
  return p;
}
function Ta(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = _p(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(s);
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
function _p(l, o = !1, s = !0) {
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
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function Ep(l) {
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
var wp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function kp(l, o = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? In(l) : l, m;
  return s ? (s = Ld(s), s.startsWith("/") ? m = od(s.substring(1), "/") : m = od(s, o)) : m = o, {
    pathname: m,
    search: Np(c),
    hash: xp(f)
  };
}
function od(l, o) {
  let s = Ra(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function Ii(l, o, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Cp(l) {
  return l.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function qi(l) {
  let o = Cp(l);
  return o.map(
    (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function La(l, o, s, c = !1) {
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
    let _ = o.length - 1;
    if (!c && p.startsWith("..")) {
      let P = p.split("/");
      for (; P[0] === ".."; )
        P.shift(), _ -= 1;
      f.pathname = P.join("/");
    }
    h = _ >= 0 ? o[_] : "/";
  }
  let y = kp(f, h), C = p && p !== "/" && p.endsWith("/"), w = (m || p === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (C || w) && (y.pathname += "/"), y;
}
var Ld = (l) => l.replace(/\/\/+/g, "/"), Rt = (l) => Ld(l.join("/")), Ra = (l) => l.replace(/\/+$/, ""), Sp = (l) => Ra(l).replace(/^\/*/, "/"), Np = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, xp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Tp = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Rp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Pp(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Rt(o) || "/";
}
var Id = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Dd(l, o) {
  let s = l;
  if (typeof s != "string" || !wp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (Id)
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
var $d = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  $d
);
var Mp = [
  "GET",
  ...$d
];
new Set(Mp);
var ar = g.createContext(null);
ar.displayName = "DataRouter";
var Ia = g.createContext(null);
Ia.displayName = "DataRouterState";
var Od = g.createContext(!1);
function Lp() {
  return g.useContext(Od);
}
var zd = g.createContext({
  isTransitioning: !1
});
zd.displayName = "ViewTransition";
var Ip = g.createContext(
  /* @__PURE__ */ new Map()
);
Ip.displayName = "Fetchers";
var Dp = g.createContext(null);
Dp.displayName = "Await";
var ft = g.createContext(
  null
);
ft.displayName = "Navigation";
var ll = g.createContext(
  null
);
ll.displayName = "Location";
var zt = g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
zt.displayName = "Route";
var Yi = g.createContext(null);
Yi.displayName = "RouteError";
var Ad = "REACT_ROUTER_ERROR", $p = "REDIRECT", Op = "ROUTE_ERROR_RESPONSE";
function zp(l) {
  if (l.startsWith(`${Ad}:${$p}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function Ap(l) {
  if (l.startsWith(
    `${Ad}:${Op}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Tp(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function Fp(l, { relative: o } = {}) {
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = g.useContext(ft), { hash: f, pathname: m, search: p } = al(l, { relative: o }), h = m;
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
var Fd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jd(l) {
  g.useContext(ft).static || g.useLayoutEffect(l);
}
function ir() {
  let { isDataRoute: l } = g.useContext(zt);
  return l ? Xp() : jp();
}
function jp() {
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = g.useContext(ar), { basename: o, navigator: s } = g.useContext(ft), { matches: c } = g.useContext(zt), { pathname: f } = Et(), m = JSON.stringify(qi(c)), p = g.useRef(!1);
  return jd(() => {
    p.current = !0;
  }), g.useCallback(
    (y, C = {}) => {
      if (_t(p.current, Fd), !p.current) return;
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
      l == null && o !== "/" && (w.pathname = w.pathname === "/" ? o : Rt([o, w.pathname])), (C.replace ? s.replace : s.push)(
        w,
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
g.createContext(null);
function al(l, { relative: o } = {}) {
  let { matches: s } = g.useContext(zt), { pathname: c } = Et(), f = JSON.stringify(qi(s));
  return g.useMemo(
    () => La(
      l,
      JSON.parse(f),
      c,
      o === "path"
    ),
    [l, f, c, o]
  );
}
function Up(l, o) {
  return Ud(l, o);
}
function Ud(l, o, s) {
  var T;
  Pe(
    or(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = g.useContext(ft), { matches: f } = g.useContext(zt), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let $ = C && C.path || "";
    Bd(
      h,
      !C || $.endsWith("*") || $.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$ === "/" ? "*" : `${$}/*`}">.`
    );
  }
  let w = Et(), _;
  if (o) {
    let $ = typeof o == "string" ? In(o) : o;
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
  ) : Rd(l, { pathname: x });
  _t(
    C || L != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), _t(
    L == null || L[L.length - 1].route.element !== void 0 || L[L.length - 1].route.Component !== void 0 || L[L.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let D = Wp(
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
  return o && D ? /* @__PURE__ */ g.createElement(
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
function bp() {
  let l = Gp(), o = Rp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ g.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ g.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ g.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ g.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ g.createElement("pre", { style: f }, s) : null, p);
}
var Bp = /* @__PURE__ */ g.createElement(bp, null), bd = class extends g.Component {
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
      const s = Ap(l.digest);
      s && (l = s);
    }
    let o = l !== void 0 ? /* @__PURE__ */ g.createElement(zt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ g.createElement(
      Yi.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ g.createElement(Hp, { error: l }, o) : o;
  }
};
bd.contextType = Od;
var Di = /* @__PURE__ */ new WeakMap();
function Hp({
  children: l,
  error: o
}) {
  let { basename: s } = g.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = zp(o.digest);
    if (c) {
      let f = Di.get(o);
      if (f) throw f;
      let m = Dd(c.location, s);
      if (Id && !Di.get(o))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw Di.set(o, p), p;
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
function Vp({ routeContext: l, match: o, children: s }) {
  let c = g.useContext(ar);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ g.createElement(zt.Provider, { value: l }, s);
}
function Wp(l, o = [], s) {
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
      pattern: Pp(c.matches),
      errorInfo: _
    });
  } : void 0;
  return f.reduceRight(
    (w, _, P) => {
      let x, L = !1, D = null, T = null;
      c && (x = m && _.route.id ? m[_.route.id] : void 0, D = _.route.errorElement || Bp, p && (h < 0 && P === 0 ? (Bd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), L = !0, T = null) : h === P && (L = !0, T = _.route.hydrateFallbackElement || null)));
      let $ = o.concat(f.slice(0, P + 1)), R = () => {
        let j;
        return x ? j = D : L ? j = T : _.route.Component ? j = /* @__PURE__ */ g.createElement(_.route.Component, null) : _.route.element ? j = _.route.element : j = w, /* @__PURE__ */ g.createElement(
          Vp,
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
        bd,
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
function Ki(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qp(l) {
  let o = g.useContext(ar);
  return Pe(o, Ki(l)), o;
}
function qp(l) {
  let o = g.useContext(Ia);
  return Pe(o, Ki(l)), o;
}
function Yp(l) {
  let o = g.useContext(zt);
  return Pe(o, Ki(l)), o;
}
function Gi(l) {
  let o = Yp(l), s = o.matches[o.matches.length - 1];
  return Pe(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function Kp() {
  return Gi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Gp() {
  var c;
  let l = g.useContext(Yi), o = qp(
    "useRouteError"
    /* UseRouteError */
  ), s = Gi(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[s];
}
function Xp() {
  let { router: l } = Qp(
    "useNavigate"
    /* UseNavigateStable */
  ), o = Gi(
    "useNavigate"
    /* UseNavigateStable */
  ), s = g.useRef(!1);
  return jd(() => {
    s.current = !0;
  }), g.useCallback(
    async (f, m = {}) => {
      _t(s.current, Fd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var id = {};
function Bd(l, o, s) {
  !o && !id[l] && (id[l] = !0, _t(!1, s));
}
g.memo(Jp);
function Jp({
  routes: l,
  manifest: o,
  future: s,
  state: c,
  isStatic: f,
  onError: m
}) {
  return Ud(l, void 0, {
    manifest: o,
    state: c,
    isStatic: f,
    onError: m
  });
}
function Ea({
  to: l,
  replace: o,
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
  let { matches: m } = g.useContext(zt), { pathname: p } = Et(), h = ir(), y = La(
    l,
    qi(m),
    p,
    c === "path"
  ), C = JSON.stringify(y);
  return g.useEffect(() => {
    h(JSON.parse(C), { replace: o, state: s, relative: c });
  }, [h, C, c, o, s]), null;
}
function ot(l) {
  Pe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Zp({
  basename: l = "/",
  children: o = null,
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
  ), D == null ? null : /* @__PURE__ */ g.createElement(ft.Provider, { value: y }, /* @__PURE__ */ g.createElement(ll.Provider, { children: o, value: D }));
}
function eh({
  children: l,
  location: o
}) {
  return Up(Hi(l), o);
}
function Hi(l, o = []) {
  let s = [];
  return g.Children.forEach(l, (c, f) => {
    if (!g.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === g.Fragment) {
      s.push.apply(
        s,
        Hi(c.props.children, m)
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
    c.props.children && (p.children = Hi(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var Na = "get", xa = "application/x-www-form-urlencoded";
function Da(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function th(l) {
  return Da(l) && l.tagName.toLowerCase() === "button";
}
function nh(l) {
  return Da(l) && l.tagName.toLowerCase() === "form";
}
function rh(l) {
  return Da(l) && l.tagName.toLowerCase() === "input";
}
function lh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function ah(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !lh(l);
}
var wa = null;
function oh() {
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
var ih = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function $i(l) {
  return l != null && !ih.has(l) ? (_t(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`
  ), null) : l;
}
function sh(l, o) {
  let s, c, f, m, p;
  if (nh(l)) {
    let h = l.getAttribute("action");
    c = h ? Qt(h, o) : null, s = l.getAttribute("method") || Na, f = $i(l.getAttribute("enctype")) || xa, m = new FormData(l);
  } else if (th(l) || rh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Qt(y, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || Na, f = $i(l.getAttribute("formenctype")) || $i(h.getAttribute("enctype")) || xa, m = new FormData(h, l), !oh()) {
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
function Xi(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function Hd(l, o, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Qt(f.pathname, o) === "/" ? f.pathname = `${Ra(o)}/_root.${c}` : f.pathname = `${Ra(f.pathname)}.${c}`, f;
}
async function uh(l, o) {
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
function ch(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function dh(l, o, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = o.routes[f.route.id];
      if (m) {
        let p = await uh(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return hh(
    c.flat(1).filter(ch).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function sd(l, o, s, c, f, m) {
  let p = (y, C) => s[C] ? y.route.id !== s[C].route.id : !0, h = (y, C) => {
    var w;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((w = s[C].route.path) == null ? void 0 : w.endsWith("*")) && s[C].params["*"] !== y.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (y, C) => p(y, C) || h(y, C)
  ) : m === "data" ? o.filter((y, C) => {
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
function fh(l, o, { includeHydrateFallback: s } = {}) {
  return mh(
    l.map((c) => {
      let f = o.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function mh(l) {
  return [...new Set(l)];
}
function ph(l) {
  let o = {}, s = Object.keys(l).sort();
  for (let c of s)
    o[c] = l[c];
  return o;
}
function hh(l, o) {
  let s = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, f) => {
    let m = JSON.stringify(ph(f));
    return s.has(m) || (s.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function Ji() {
  let l = g.useContext(ar);
  return Xi(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function vh() {
  let l = g.useContext(Ia);
  return Xi(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Zi = g.createContext(void 0);
Zi.displayName = "FrameworkContext";
function es() {
  let l = g.useContext(Zi);
  return Xi(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function yh(l, o) {
  let s = g.useContext(Zi), [c, f] = g.useState(!1), [m, p] = g.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: C, onMouseLeave: w, onTouchStart: _ } = o, P = g.useRef(null);
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
function Jr(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function gh({ page: l, ...o }) {
  let s = Lp(), { router: c } = Ji(), f = g.useMemo(
    () => Rd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ g.createElement(Eh, { page: l, matches: f, ...o }) : /* @__PURE__ */ g.createElement(wh, { page: l, matches: f, ...o }) : null;
}
function _h(l) {
  let { manifest: o, routeModules: s } = es(), [c, f] = g.useState([]);
  return g.useEffect(() => {
    let m = !1;
    return dh(l, o, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, s]), c;
}
function Eh({
  page: l,
  matches: o,
  ...s
}) {
  let c = Et(), { future: f } = es(), { basename: m } = Ji(), p = g.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = Hd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, C = [];
    for (let w of o)
      typeof w.route.shouldRevalidate == "function" ? y = !0 : C.push(w.route.id);
    return y && C.length > 0 && h.searchParams.set("_routes", C.join(",")), [h.pathname + h.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, p.map((h) => /* @__PURE__ */ g.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...s })));
}
function wh({
  page: l,
  matches: o,
  ...s
}) {
  let c = Et(), { future: f, manifest: m, routeModules: p } = es(), { basename: h } = Ji(), { loaderData: y, matches: C } = vh(), w = g.useMemo(
    () => sd(
      l,
      o,
      C,
      m,
      c,
      "data"
    ),
    [l, o, C, m, c]
  ), _ = g.useMemo(
    () => sd(
      l,
      o,
      C,
      m,
      c,
      "assets"
    ),
    [l, o, C, m, c]
  ), P = g.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let D = /* @__PURE__ */ new Set(), T = !1;
    if (o.forEach((R) => {
      var W;
      let j = m.routes[R.route.id];
      !j || !j.hasLoader || (!w.some((V) => V.route.id === R.route.id) && R.route.id in y && ((W = p[R.route.id]) != null && W.shouldRevalidate) || j.hasClientLoader ? T = !0 : D.add(R.route.id));
    }), D.size === 0)
      return [];
    let $ = Hd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return T && D.size > 0 && $.searchParams.set(
      "_routes",
      o.filter((R) => D.has(R.route.id)).map((R) => R.route.id).join(",")
    ), [$.pathname + $.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    w,
    o,
    l,
    p
  ]), x = g.useMemo(
    () => fh(_, m),
    [_, m]
  ), L = _h(_);
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
function kh(...l) {
  return (o) => {
    l.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var Ch = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Ch && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Sh({
  basename: l,
  children: o,
  useTransitions: s,
  window: c
}) {
  let f = g.useRef();
  f.current == null && (f.current = rp({ window: c, v5Compat: !0 }));
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
    Zp,
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
var Vd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Wd = g.forwardRef(
  function({
    onClick: o,
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
    let { basename: T, navigator: $, useTransitions: R } = g.useContext(ft), j = typeof w == "string" && Vd.test(w), W = Dd(w, T);
    w = W.to;
    let V = Fp(w, { relative: f }), ne = Et(), ae = null;
    if (h) {
      let ie = La(
        h,
        [],
        ne.mask ? ne.mask.pathname : "/",
        !0
      );
      T !== "/" && (ie.pathname = ie.pathname === "/" ? T : Rt([T, ie.pathname])), ae = $.createHref(ie);
    }
    let [B, we, Se] = yh(
      c,
      L
    ), X = Th(w, {
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
    function ve(ie) {
      o && o(ie), ie.defaultPrevented || X(ie);
    }
    let ze = !(W.isExternal || m), Fe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ g.createElement(
        "a",
        {
          ...L,
          ...Se,
          href: (ze ? ae : void 0) || W.absoluteURL || V,
          onClick: ze ? ve : o,
          ref: kh(D, we),
          target: C,
          "data-discover": !j && s === "render" ? "true" : void 0
        }
      )
    );
    return B && !j ? /* @__PURE__ */ g.createElement(g.Fragment, null, Fe, /* @__PURE__ */ g.createElement(gh, { page: V })) : Fe;
  }
);
Wd.displayName = "Link";
var Ve = g.forwardRef(
  function({
    "aria-current": o = "page",
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
    Ih(_) && h === !0, $ = L.encodeLocation ? L.encodeLocation(_).pathname : _.pathname, R = P.pathname, j = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    s || (R = R.toLowerCase(), j = j ? j.toLowerCase() : null, $ = $.toLowerCase()), j && D && (j = Qt(j, D) || j);
    const W = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length;
    let V = R === $ || !f && R.startsWith($) && R.charAt(W) === "/", ne = j != null && (j === $ || !f && j.startsWith($) && j.charAt($.length) === "/"), ae = {
      isActive: V,
      isPending: ne,
      isTransitioning: T
    }, B = V ? o : void 0, we;
    typeof c == "function" ? we = c(ae) : we = [
      c,
      V ? "active" : null,
      ne ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Se = typeof m == "function" ? m(ae) : m;
    return /* @__PURE__ */ g.createElement(
      Wd,
      {
        ...C,
        "aria-current": B,
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
var Nh = g.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
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
    let { useTransitions: D } = g.useContext(ft), T = Mh(), $ = Lh(h, { relative: C }), R = p.toLowerCase() === "get" ? "get" : "post", j = typeof h == "string" && Vd.test(h), W = (V) => {
      if (y && y(V), V.defaultPrevented) return;
      V.preventDefault();
      let ne = V.nativeEvent.submitter, ae = (ne == null ? void 0 : ne.getAttribute("formmethod")) || p, B = () => T(ne || V.currentTarget, {
        fetcherKey: o,
        method: ae,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: w,
        viewTransition: _,
        defaultShouldRevalidate: P
      });
      D && s !== !1 ? g.startTransition(() => B()) : B();
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
Nh.displayName = "Form";
function xh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qd(l) {
  let o = g.useContext(ar);
  return Pe(o, xh(l)), o;
}
function Th(l, {
  target: o,
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
      if (ah(x, o)) {
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
      o,
      l,
      m,
      p,
      h,
      y,
      C
    ]
  );
}
var Rh = 0, Ph = () => `__${String(++Rh)}__`;
function Mh() {
  let { router: l } = Qd(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = g.useContext(ft), s = Kp(), c = l.fetch, f = l.navigate;
  return g.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: C, formData: w, body: _ } = sh(
        m,
        o
      );
      if (p.navigate === !1) {
        let P = p.fetcherKey || Ph();
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
    [c, f, o, s]
  );
}
function Lh(l, { relative: o } = {}) {
  let { basename: s } = g.useContext(ft), c = g.useContext(zt);
  Pe(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...al(l || ".", { relative: o }) }, p = Et();
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
function Ih(l, { relative: o } = {}) {
  let s = g.useContext(zd);
  Pe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Qd(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = al(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Qt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Qt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Ta(f.pathname, p) != null || Ta(f.pathname, m) != null;
}
var Vi = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new WeakMap(), ud = 0, Dh;
function $h(l) {
  return l ? (ka.has(l) || (ud += 1, ka.set(l, ud.toString())), ka.get(l)) : "0";
}
function Oh(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? $h(l.root) : l[o]}`).toString();
}
function zh(l) {
  const o = Oh(l);
  let s = Vi.get(o);
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
      id: o,
      observer: m,
      elements: c
    }, Vi.set(o, s);
  }
  return s;
}
function Ah(l, o, s = {}, c = Dh) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const y = l.getBoundingClientRect();
    return o(c, {
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
  const { id: f, observer: m, elements: p } = zh(s), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), Vi.delete(f));
  };
}
function sr({
  threshold: l,
  delay: o,
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
      return W = Ah(
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
          delay: o
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
      o
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
const Fh = "_header_1ricu_1", jh = "_backButton_1ricu_13", cd = {
  header: Fh,
  backButton: jh
}, ur = () => {
  const l = ir(), o = Et(), s = () => {
    o.pathname.includes("commands") ? l("/scripts") : l("/");
  };
  return /* @__PURE__ */ u.createElement("header", { className: cd.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: cd.backButton,
      onClick: s
    },
    "← Назад"
  ));
}, pn = (l = 768) => {
  const [o, s] = g.useState(
    window.innerWidth <= l
  );
  return g.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), o;
}, Uh = "_tabs_1jzd9_1", bh = "_dropdown_1jzd9_12", Bh = "_tab_1jzd9_1", Hh = "_active_1jzd9_35", Vh = "_menu_1jzd9_40", Wh = "_menuItem_1jzd9_65", ye = {
  tabs: Uh,
  dropdown: bh,
  tab: Bh,
  active: Hh,
  menu: Vh,
  menuItem: Wh
}, qt = () => {
  if (!pn())
    return /* @__PURE__ */ u.createElement("div", { className: ye.tabs }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${ye.tab} ${ye.active}` : ye.tab
      },
      "Скрипты"
    ), /* @__PURE__ */ u.createElement("div", { className: ye.dropdown }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ye.tab} ${ye.active}` : ye.tab
      },
      "Команды"
    ), /* @__PURE__ */ u.createElement("div", { className: ye.menu }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ye.menuItem} ${ye.active}` : ye.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${ye.menuItem} ${ye.active}` : ye.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${ye.menuItem} ${ye.active}` : ye.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${ye.menuItem} ${ye.active}` : ye.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${ye.tab} ${ye.active}` : ye.tab
      },
      "Таймер"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${ye.tab} ${ye.active}` : ye.tab
      },
      "Будильник"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${ye.tab} ${ye.active}` : ye.tab
      },
      "Настройки"
    ));
}, Qh = "_nav_10mea_1", dd = {
  nav: Qh
}, cr = () => {
  const l = Et(), o = ir(), [s, c] = g.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: dd.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/commands/main" }, "Основные"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/sub" }, "Второстепенные"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/direct/main" }, "Прямые"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/settings" }, "Настройки")) : /* @__PURE__ */ u.createElement("nav", { className: dd.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/scripts" }, "Скрипты"), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    "Команды"
  ), /* @__PURE__ */ u.createElement(Ve, { to: "/timer" }, "Таймер"), /* @__PURE__ */ u.createElement(Ve, { to: "/alarm" }, "Будильник"), /* @__PURE__ */ u.createElement(Ve, { to: "/settings" }, "Настройки"));
}, qh = "_button_1u3jy_1", Yh = "_full_1u3jy_20", Kh = "_primary_1u3jy_24", Gh = "_secondary_1u3jy_33", Xh = "_ghost_1u3jy_44", Oi = {
  button: qh,
  full: Yh,
  primary: Kh,
  secondary: Gh,
  ghost: Xh
}, se = ({
  children: l,
  variant: o = "primary",
  fullWidth: s = !1,
  className: c = "",
  ...f
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    ...f,
    className: `
        ${Oi.button}
        ${Oi[o]}
        ${s ? Oi.full : ""}
        ${c}
      `
  },
  l
), Jh = "_overlay_a2hq1_1", Zh = "_modal_a2hq1_13", ev = "_header_a2hq1_25", tv = "_title_a2hq1_35", nv = "_body_a2hq1_42", rv = "_footer_a2hq1_49", lv = "_close_a2hq1_59", Pn = {
  overlay: Jh,
  modal: Zh,
  header: ev,
  title: tv,
  body: nv,
  footer: rv,
  close: lv
}, hn = ({
  open: l,
  onClose: o,
  title: s,
  footer: c,
  children: f
}) => (g.useEffect(() => {
  if (!l) return;
  document.body.style.overflow = "hidden";
  const m = (p) => {
    p.key === "Escape" && o();
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
}, [l, o]), l ? /* @__PURE__ */ u.createElement(
  "div",
  {
    className: Pn.overlay,
    onClick: o
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
        onClick: o
      },
      "✕"
    )),
    /* @__PURE__ */ u.createElement("div", { className: Pn.body }, f),
    c && /* @__PURE__ */ u.createElement("div", { className: Pn.footer }, c)
  )
) : null), av = "_pagination_1hg7e_1", ov = "_button_1hg7e_9", iv = "_label_1hg7e_33", Ca = {
  pagination: av,
  button: ov,
  label: iv
}, dr = ({
  page: l,
  totalPages: o,
  onChange: s
}) => o <= 1 ? null : /* @__PURE__ */ u.createElement("div", { className: Ca.pagination }, /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ca.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ u.createElement("span", { className: Ca.label }, l, " / ", o), /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ca.button,
    disabled: l === o,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), sv = "_accordion_1wwmk_1", uv = "_header_1wwmk_7", cv = "_content_1wwmk_20", Sa = {
  accordion: sv,
  header: uv,
  content: cv
}, Ot = ({
  title: l,
  defaultOpen: o = !1,
  children: s
}) => {
  const [c, f] = g.useState(o);
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
}, dv = "_field_fc25i_1", fv = "_label_fc25i_7", mv = "_input_fc25i_13", pv = "_error_fc25i_38", hv = "_errorText_fc25i_46", Zr = {
  field: dv,
  label: fv,
  input: mv,
  error: pv,
  errorText: hv
}, ge = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: Zr.field }, l && /* @__PURE__ */ u.createElement("label", { className: Zr.label }, l), /* @__PURE__ */ u.createElement(
  "input",
  {
    ...c,
    className: `
          ${Zr.input}
          ${o ? Zr.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: Zr.errorText }, o)), vv = ({
  condition: l,
  index: o,
  defaultOpen: s,
  onChange: c
}) => {
  const [f, m] = g.useState(
    !!l.children_type
  ), [p, h] = g.useState(!!l.children_direct_type);
  return /* @__PURE__ */ u.createElement(
    Ot,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(
      ge,
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
      ge,
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
      ge,
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
}, yv = "_dropdown_4l5n9_1", gv = "_button_4l5n9_6", _v = "_arrow_4l5n9_28", Ev = "_menu_4l5n9_32", wv = "_active_4l5n9_51", kv = "_item_4l5n9_58", Mn = {
  dropdown: yv,
  button: gv,
  arrow: _v,
  menu: Ev,
  active: wv,
  item: kv
};
function Cv({
  options: l,
  value: o,
  placeholder: s = "Выберите",
  onSelect: c
}) {
  const [f, m] = g.useState(!1), p = g.useRef(null), h = l.find(
    (w) => w.value === o
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
        className: `${Mn.item} ${o === w.value ? Mn.selected : ""}`,
        onClick: () => C(w)
      },
      w.label
    )))
  );
}
const Sv = "_form_1fyva_1", fd = {
  form: Sv
}, Nv = ({
  initialData: l,
  isOptionData: o,
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
  return /* @__PURE__ */ u.createElement("div", { className: fd.form }, /* @__PURE__ */ u.createElement(
    ge,
    {
      label: "Название",
      value: f.name,
      onChange: (C) => p({
        ...f,
        name: C.target.value
      })
    }
  ), /* @__PURE__ */ u.createElement(
    Cv,
    {
      options: o.map((C) => ({
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
      vv,
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
      className: fd.addCondition,
      onClick: h
    },
    "+ Добавить условие"
  ));
}, xv = "_card_b4x7a_1", Tv = "_content_b4x7a_28", Rv = "_title_b4x7a_34", Pv = "_subtitle_b4x7a_40", Mv = "_arrow_b4x7a_45", el = {
  card: xv,
  content: Tv,
  title: Rv,
  subtitle: Pv,
  arrow: Mv
}, Lv = ({
  title: l,
  onClick: o
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    className: el.card,
    onClick: o
  },
  /* @__PURE__ */ u.createElement("div", { className: el.content }, /* @__PURE__ */ u.createElement("div", { className: el.title }, l), /* @__PURE__ */ u.createElement("div", { className: el.subtitle }, "Нажмите для редактирования")),
  /* @__PURE__ */ u.createElement("div", { className: el.arrow }, "→")
), Iv = "_container_czq46_1", Dv = "_visible_czq46_12", md = {
  container: Iv,
  visible: Dv
}, fr = ({
  children: l,
  offset: o = 100
}) => {
  const [s, c] = g.useState(!1);
  return g.useEffect(() => {
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
      className: `${md.container} ${s ? md.visible : ""}`
    },
    l
  );
}, $v = "_page_4k9hb_1", Ov = "_header_4k9hb_10", zv = "_description_4k9hb_31", Av = "_heading_4k9hb_71", Fv = "_actions_4k9hb_76", jv = "_list_4k9hb_81", lr = {
  page: $v,
  header: Ov,
  description: zv,
  heading: Av,
  actions: Fv,
  list: jv
}, qd = g.createContext(null);
function ol() {
  const l = g.useContext(qd);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const Uv = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function bv() {
  const l = ol(), [o, s] = g.useState(!0), [c, f] = g.useState(null), m = g.useRef(!1), p = g.useCallback(
    async (P = 1, x = !1) => {
      s(!0);
      try {
        const L = Uv(
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
    loading: o,
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
const Bv = () => {
  const l = pn(), { ref: o, inView: s } = sr({
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
  } = bv();
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
  }, ne = async (B) => {
    w(!0);
    const we = await j(
      B.uuid
    );
    p(we), y(!0);
  }, ae = async () => {
    if (C) {
      const B = c == null ? void 0 : c.uuid;
      if (!B) return;
      const { uuid: we, ...Se } = c;
      await R(B, Se);
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
  ))), x && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: lr.list }, L == null ? void 0 : L.script_actions.map((B) => /* @__PURE__ */ u.createElement(
    Lv,
    {
      key: B.uuid,
      title: B.title,
      onClick: () => ne(B)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
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
      Nv,
      {
        initialData: m,
        isEdit: C,
        isOptionData: D(),
        onChange: f
      }
    )
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Hv = "_field_1qtfn_1", Vv = "_label_1qtfn_7", Wv = "_select_1qtfn_13", zi = {
  field: Hv,
  label: Vv,
  select: Wv
}, Wi = ({
  label: l,
  options: o,
  className: s = "",
  value: c,
  ...f
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ u.createElement("div", { className: zi.field }, l && /* @__PURE__ */ u.createElement("label", { className: zi.label }, l), /* @__PURE__ */ u.createElement(
    "select",
    {
      ...f,
      value: m,
      className: `${zi.select} ${s}`
    },
    !p && /* @__PURE__ */ u.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ u.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, Qv = "_wrapper_i8msc_1", qv = "_labelRow_i8msc_5", Yv = "_label_i8msc_5", Kv = "_selectedTitle_i8msc_18", Gv = "_dropdown_i8msc_27", Xv = "_option_i8msc_42", Jv = "_title_i8msc_64", Zv = "_uuid_i8msc_69", ey = "_hint_i8msc_70", $t = {
  wrapper: Qv,
  labelRow: qv,
  label: Yv,
  selectedTitle: Kv,
  dropdown: Gv,
  option: Xv,
  title: Jv,
  uuid: Zv,
  hint: ey
}, Qi = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = "assistant_commands",
  onChange: f,
  onSelect: m
}) => {
  const p = ol(), [h, y] = g.useState([]), [C, w] = g.useState(!1), [_, P] = g.useState(!1), x = g.useRef(0), L = g.useMemo(() => o.trim(), [o]);
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
        const R = c === "sub_direct_controls" ? await p.searchAssistantSubDirectControls(L) : c === "sub_direct_control_samples" ? await p.searchAssistantSubDirectControlSamples(L) : await p.searchAssistantCommands(L);
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
    ge,
    {
      value: o,
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
}, ty = [
  { label: "default", value: "default" },
  { label: "builtin", value: "builtin" },
  { label: "ha_storage", value: "ha_storage" },
  { label: "ha", value: "ha" },
  { label: "external", value: "external" },
  { label: "redis", value: "redis" }
], ny = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], ry = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" },
  { label: "chidren_error", value: "chidren_error" }
], ly = "_form_nymr0_1", ay = "_checkboxRow_nymr0_7", oy = "_field_nymr0_15", iy = "_textarea_nymr0_24", sy = "_arrayItem_nymr0_37", Wt = {
  form: ly,
  checkboxRow: ay,
  field: oy,
  textarea: iy,
  arrayItem: sy
}, pd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), Yd = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = g.useMemo(() => {
    if (s[c]) return s[c] ?? pd();
  }, [s]), C = (x) => {
    f((L) => ({
      ...L,
      [c]: {
        ...L[c] ?? pd(),
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
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
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
      ge,
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
      ge,
      {
        label: "actionType",
        value: y.actionType,
        onChange: (x) => C({
          actionType: x.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Wi,
      {
        label: "answerType",
        value: y.answerType,
        options: ty,
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
    )), /* @__PURE__ */ u.createElement(Ot, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((x, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: Wt.arrayItem }, /* @__PURE__ */ u.createElement(
      Qi,
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
      ge,
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
    )), /* @__PURE__ */ u.createElement(Ot, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((x, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: Wt.arrayItem }, /* @__PURE__ */ u.createElement(
      ge,
      {
        label: "actionType",
        value: x.actionType,
        onChange: (D) => w("voiceResponseArray", L, {
          actionType: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ge,
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
    )), /* @__PURE__ */ u.createElement(Ot, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((x, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: Wt.arrayItem }, /* @__PURE__ */ u.createElement(
      Wi,
      {
        label: "actionTypeComponent",
        value: x.actionTypeComponent,
        options: ry,
        onChange: (D) => w("nextAction", L, {
          actionTypeComponent: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ge,
      {
        label: "actionType",
        value: x.actionType,
        onChange: (D) => w("nextAction", L, {
          actionType: D.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Qi,
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
}, uy = "_overlay_1em8e_1", cy = "_sheet_1em8e_10", dy = "_handle_1em8e_18", Ai = {
  overlay: uy,
  sheet: cy,
  handle: dy
}, fy = ({
  open: l,
  onClose: o,
  children: s
}) => l ? (g.useEffect(() => {
  if (!l) return;
  const c = document.body.style.overflow;
  return document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = c;
  };
}, [l]), /* @__PURE__ */ u.createElement("div", { className: Ai.overlay, onClick: o }, /* @__PURE__ */ u.createElement(
  "div",
  {
    className: Ai.sheet,
    onClick: (c) => c.stopPropagation()
  },
  /* @__PURE__ */ u.createElement("div", { className: Ai.handle }),
  s
))) : null, my = "_content_19r5a_1", py = "_title_19r5a_7", hy = "_actions_19r5a_14", Fi = {
  content: my,
  title: py,
  actions: hy
}, il = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onDelete: f
}) => {
  const m = pn();
  if (!o) return null;
  const p = /* @__PURE__ */ u.createElement("div", { className: Fi.content }, /* @__PURE__ */ u.createElement("h3", { className: Fi.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: Fi.actions }, /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !!o.status), s();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        f(o.uuid), s();
      }
    },
    "Удалить"
  )));
  return m ? /* @__PURE__ */ u.createElement(fy, { open: l, onClose: s }, p) : /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    p
  );
}, vy = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function sl(l) {
  const o = ol(), [s, c] = g.useState(null), [f, m] = g.useState(!0), p = g.useRef(!1), h = async (x, L = 1, D = !1) => {
    m(!0);
    try {
      const T = vy(await o._getShort(`${x}`, L));
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
    saveCommand: async (x, L) => await o._save(L, x),
    deleteCommand: async (x, L) => await o._delete(L, x),
    updateCommand: async (x, L) => {
      if (console.log(L), !L.uuid) return;
      const { uuid: D, ...T } = L;
      return await o._update(D, x, T);
    },
    editStatusCommand: async (x, L, D) => await o._update_status(x, L, D),
    detailInformationCommand: async (x, L) => await o._getDetail(L, x)
  };
}
const yy = "_page_1m1fb_1", gy = "_header_1m1fb_10", _y = "_description_1m1fb_25", Ey = "_state_1m1fb_80", wy = "_commandList_1m1fb_84", ky = "_commandTab_1m1fb_89", Cy = "_commandButton_1m1fb_96", Sy = "_moreButton_1m1fb_97", Ny = "_innerTabs_1m1fb_135", xy = "_innerTab_1m1fb_135", Ty = "_activeInnerTab_1m1fb_156", Ry = "_headerTop_1m1fb_163", Y = {
  page: yy,
  header: gy,
  description: _y,
  state: Ey,
  commandList: wy,
  commandTab: ky,
  commandButton: Cy,
  moreButton: Sy,
  innerTabs: Ny,
  innerTab: xy,
  activeInnerTab: Ty,
  headerTop: Ry
}, Py = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), hd = () => ({
  status: !0,
  title: "",
  componentDialog: {
    ...Py(),
    forwardText: !1
  }
}), My = () => {
  const l = pn(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => hd()), [h, y] = g.useState(null), { ref: C, inView: w } = sr({
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
    f(!1), p(hd()), s(!0);
  }, ne = async (X) => {
    f(!0);
    const ve = await L("get_assistant_command", X.uuid);
    p(ve.data), s(!0);
  }, ae = async (X, ve) => {
    console.log(X, ve), await $("update_assistant_command_status", X, ve), P("get_assistant_commands_short");
  }, B = async (X) => {
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
    Yd,
    {
      open: o,
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
      onDelete: B
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
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
  const l = pn(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => vd()), [h, y] = g.useState(null), { ref: C, inView: w } = sr({
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
    f(!1), p(vd()), s(!0);
  }, ne = async (X) => {
    f(!0);
    const ve = await L("get_assistant_sub_command", X.uuid);
    p(ve.data), s(!0);
  }, ae = async (X, ve) => {
    await $("update_assistant_sub_command_status", X, ve), P("get_assistant_sub_commands_short");
  }, B = async (X) => {
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
    Yd,
    {
      open: o,
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
      onDelete: B
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Dy = "_field_veq7g_1", $y = "_label_veq7g_7", Oy = "_textarea_veq7g_13", zy = "_error_veq7g_40", Ay = "_errorText_veq7g_48", tl = {
  field: Dy,
  label: $y,
  textarea: Oy,
  error: zy,
  errorText: Ay
}, Kd = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: tl.field }, l && /* @__PURE__ */ u.createElement("label", { className: tl.label }, l), /* @__PURE__ */ u.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${tl.textarea}
          ${o ? tl.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: tl.errorText }, o)), yd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Fy = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = g.useMemo(() => c.directControl ?? yd(), [c]), h = (_) => {
    f((P) => ({
      ...P,
      directControl: {
        ...P.directControl ?? yd(),
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
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: o }, "Отмена"), /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить"))
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
      ge,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((P) => ({
          ...P,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      ge,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Wi,
      {
        label: "valueType",
        value: p.valueType,
        options: ny,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Y.field }, /* @__PURE__ */ u.createElement(
      Kd,
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
    ), "manual"), p.manual ? /* @__PURE__ */ u.createElement(Ot, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, P) => /* @__PURE__ */ u.createElement("div", { key: P, className: Y.arrayItem }, /* @__PURE__ */ u.createElement(
        ge,
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
      Qi,
      {
        label: "subDirectControl",
        value: typeof p.subDirectControl == "string" ? p.subDirectControl : "",
        selectedTitle: p.subDirectControlTitle,
        searchSource: "sub_direct_control_samples",
        onChange: (_) => h({
          subDirectControl: _
        }),
        onSelect: (_) => h({
          subDirectControl: _.uuid,
          subDirectControlTitle: _.title ?? ""
        })
      }
    ))
  );
}, jy = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), gd = () => ({
  status: !0,
  title: "",
  subComponentDialog: {
    ...jy(),
    forwardText: !1
  }
}), Uy = () => {
  const l = pn(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => gd()), [h, y] = g.useState(null), C = m.directControl, w = Array.isArray(C == null ? void 0 : C.subDirectControl) ? C.subDirectControl : [], _ = [
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
    commands: B
  } = sl("get_assistant_sub_direct_controls_short"), [we, Se] = g.useState(!1);
  g.useEffect(() => {
    !we || !l || !T || $ || !B || B.page >= B.total_pages || R("get_assistant_sub_direct_controls_short", B.page + 1, !0);
  }, [
    T,
    l,
    $,
    B,
    R
  ]), g.useEffect(() => {
    !$ && B && B.page === 1 && Se(!0);
  }, [$, B]);
  const X = () => {
    f(!1), p(gd()), s(!0);
  }, ve = async (oe) => {
    f(!0);
    const b = await W("get_assistant_sub_direct_control", oe.uuid);
    p(b.data), s(!0);
  }, ze = async (oe, b) => {
    await ae("update_assistant_sub_direct_control", oe, b), R("get_assistant_sub_direct_controls_short");
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, B == null ? void 0 : B.data.map((oe) => /* @__PURE__ */ u.createElement("div", { key: oe.uuid, className: Y.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Y.commandButton, onClick: () => ve(oe) }, /* @__PURE__ */ u.createElement("span", null, oe.title), /* @__PURE__ */ u.createElement("small", null, oe.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
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
      page: (B == null ? void 0 : B.page) || 1,
      totalPages: (B == null ? void 0 : B.total_pages) || 1,
      onChange: (oe) => R("get_assistant_sub_direct_controls_short", oe)
    }
  ), /* @__PURE__ */ u.createElement(
    Fy,
    {
      open: o,
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
      onToggleStatus: ze,
      onDelete: Fe
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, by = ({
  open: l,
  onClose: o,
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
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Y.form }, /* @__PURE__ */ u.createElement(
      ge,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((P) => ({
          ...P,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ot,
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
          ge,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (x) => y(P, {
              subMappingType: x.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          Kd,
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
}, _d = () => ({
  status: !0,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), By = () => {
  const l = pn(), o = ir(), [s, c] = g.useState(!1), [f, m] = g.useState(!1), [p, h] = g.useState(_d), [y, C] = g.useState(null), [w, _] = g.useState("template"), [P, x] = g.useState(!1), L = [
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
    commands: B
  } = sl(
    "get_assistant_sub_direct_control_samples_short"
  );
  g.useEffect(() => {
    !P || !l || !T || $ || !B || B.page >= B.total_pages || R(
      "get_assistant_sub_direct_control_samples_short",
      B.page + 1,
      !0
    );
  }, [
    P,
    T,
    l,
    $,
    B,
    R
  ]), g.useEffect(() => {
    !$ && B && B.page === 1 && x(!0);
  }, [$, B]);
  const we = () => {
    m(!1), h(_d()), c(!0);
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
  }, ve = async (ie) => {
    await j(
      "delete_assistant_sub_direct_control_sample",
      ie
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ze = async () => {
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
        _(ie.key), o(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Y.commandList }, B == null ? void 0 : B.data.map((ie) => /* @__PURE__ */ u.createElement(
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
      page: (B == null ? void 0 : B.page) ?? 1,
      totalPages: (B == null ? void 0 : B.total_pages) ?? 1,
      onChange: (ie) => R(
        "get_assistant_sub_direct_control_samples_short",
        ie
      )
    }
  ), /* @__PURE__ */ u.createElement(
    by,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Fe : ze
    }
  ), /* @__PURE__ */ u.createElement(
    il,
    {
      open: !!y,
      command: y,
      onClose: () => C(null),
      onToggleStatus: X,
      onDelete: ve
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Hy = "_form_nymr0_1", Vy = "_checkboxRow_nymr0_7", Wy = "_field_nymr0_15", Qy = "_textarea_nymr0_24", nl = {
  form: Hy,
  checkboxRow: Vy,
  field: Wy,
  textarea: Qy
}, Ed = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), qy = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = g.useMemo(() => {
    if (s[c]) return s[c] ?? Ed();
  }, [s]), C = (w) => {
    f((_) => ({
      ..._,
      [c]: {
        ..._[c] ?? Ed(),
        ...w
      }
    }));
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
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
      ge,
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
      ge,
      {
        label: "actionType",
        value: y.actionType,
        onChange: (w) => C({
          actionType: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ge,
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
}, Yy = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), wd = () => ({
  status: !0,
  title: "",
  componentDialog: {
    ...Yy(),
    forwardText: !1
  }
}), Ky = () => {
  const l = pn(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => wd()), [h, y] = g.useState(null), { ref: C, inView: w } = sr({
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
    f(!1), p(wd()), s(!0);
  }, ne = async (X) => {
    f(!0);
    const ve = await L("get_assistant_command", X.uuid);
    p(ve.data), s(!0);
  }, ae = async (X, ve) => {
    console.log(X, ve), await $("update_assistant_setting", X, ve), P("get_assistant_settings_short");
  }, B = async (X) => {
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
    qy,
    {
      open: o,
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
      onDelete: B
    }
  )), /* @__PURE__ */ u.createElement(cr, null));
}, Gy = "_form_1bj0d_1", Xy = "_field_1bj0d_7", Jy = "_input_1bj0d_13", Zy = "_label_1bj0d_32", eg = "_checkboxRow_1bj0d_38", Xe = {
  form: Gy,
  field: Xy,
  input: Jy,
  label: Zy,
  checkboxRow: eg
}, tg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(ge, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(ge, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(ge, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(ge, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: Xe.field }, /* @__PURE__ */ u.createElement("span", { className: Xe.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: Xe.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: Xe.field }, /* @__PURE__ */ u.createElement("span", { className: Xe.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: Xe.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(ge, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, ng = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(ge, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(ge, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, rg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(ge, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(ge, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, lg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: Xe.form }, /* @__PURE__ */ u.createElement(
    ge,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: Xe.field }, /* @__PURE__ */ u.createElement("span", { className: Xe.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: Xe.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ u.createElement("input", { type: "checkbox", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement("span", null, "Is admin")), /* @__PURE__ */ u.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ u.createElement("input", { type: "checkbox", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement("span", null, "Active remout")), /* @__PURE__ */ u.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ u.createElement("input", { type: "checkbox", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), /* @__PURE__ */ u.createElement("span", null, "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)")), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    ge,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, ag = "_page_tlhec_1", og = {
  page: ag
};
function ig() {
  const l = ol(), [o, s] = g.useState(!0), [c, f] = g.useState(null), m = g.useCallback(async () => {
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
    loading: o,
    settings: c,
    saveSettings: async (h) => {
      await l._save(h, "save_settings");
    },
    loadScripts: m
  };
}
const sg = {
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
}, ug = {
  global_music_timer: "",
  global_music_alarm: ""
}, kd = {
  yandex_tts: sg,
  remout: Pa,
  timer_alarm: ug,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, cg = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), dg = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), fg = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), mg = (l) => ({
  yandex_tts: cg(l == null ? void 0 : l.yandex_tts),
  remout: dg(l == null ? void 0 : l.remout),
  timer_alarm: fg(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), ji = (l, o) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== o[f] && (s[f] = l[f]);
  }), s;
}, pg = (l, o) => {
  const s = {}, c = ji(l.yandex_tts, o.yandex_tts), f = ji(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = ji(l.remout ?? Pa, o.remout ?? Pa);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, hg = () => {
  const [l, o] = g.useState(kd), [s, c] = g.useState(kd), { settings: f, saveSettings: m } = ig();
  g.useEffect(() => {
    if (!f) return;
    const h = mg(f);
    o(h), c(h);
  }, [f]);
  const p = () => {
    const h = pg(l, s);
    m(h);
  };
  return /* @__PURE__ */ u.createElement("div", { className: og.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement(Ot, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    lg,
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
  )), /* @__PURE__ */ u.createElement(Ot, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    tg,
    {
      data: l.yandex_tts,
      onChange: (h) => o({ ...l, yandex_tts: h })
    }
  )), l.active_remout && /* @__PURE__ */ u.createElement(Ot, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    ng,
    {
      data: l.remout ?? Pa,
      onChange: (h) => o({ ...l, remout: h })
    }
  )), /* @__PURE__ */ u.createElement(Ot, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    rg,
    {
      data: l.timer_alarm,
      onChange: (h) => o({ ...l, timer_alarm: h })
    }
  )), /* @__PURE__ */ u.createElement(se, { onClick: p }, "Сохранить"));
}, Ln = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, vg = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 60 * 1e3).toISOString();
}, Gd = (l) => {
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
    return Gd(l.count_timer || "");
  }
  return 0;
}, yg = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 60), c = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, Ui = (l) => {
  const o = Ln(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function Xd() {
  const l = ol(), [o, s] = g.useState([]), [c, f] = g.useState([]), [m, p] = g.useState([]), [h, y] = g.useState(!0), C = g.useMemo(() => l.getDevices(), [l]), w = g.useCallback(async () => {
    const j = await l._getShort("get_timer_requests_short", 1, 100), W = await Promise.all(
      Ui(j).map(async (V) => {
        var ae;
        const ne = await l._getDetail(V.uuid, "get_timer_request");
        return ((ae = Ln(ne)) == null ? void 0 : ae.data) ?? Ln(ne);
      })
    );
    s(W.filter((V) => !!V && V.action_type === "create_timer"));
  }, [l]), _ = g.useCallback(async () => {
    const j = await l._getShort("get_alarm_requests_short", 1, 100), W = await Promise.all(
      Ui(j).map(async (V) => {
        var ae;
        const ne = await l._getDetail(V.uuid, "get_alarm_request");
        return ((ae = Ln(ne)) == null ? void 0 : ae.data) ?? Ln(ne);
      })
    );
    f(W.filter((V) => !!V && V.action_type !== "delete_alarm"));
  }, [l]), P = g.useCallback(async () => {
    const j = await l._getShort("get_alarm_time_widgets_short", 1, 100), W = await Promise.all(
      Ui(j).map(async (V) => {
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
        count_timer: yg(W),
        date_end: vg(W)
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
    timers: o,
    toTimerSeconds: Gd,
    updateAlarm: async (j, W) => {
      await l._update(j.uuid, "update_alarm_request", { ...j, action_type: "edit_alarm", ...W }), await _();
    }
  };
}
const gg = "_page_di7r7_1", _g = "_header_di7r7_11", Eg = "_title_di7r7_18", wg = "_description_di7r7_25", kg = "_grid_di7r7_31", Cg = "_card_di7r7_37", Sg = "_empty_di7r7_37", Ng = "_cardHeader_di7r7_44", xg = "_cardTitle_di7r7_51", Tg = "_meta_di7r7_56", Rg = "_time_di7r7_62", Pg = "_form_di7r7_69", Mg = "_field_di7r7_75", Lg = "_label_di7r7_81", Ig = "_select_di7r7_87", Dg = "_input_di7r7_87", $g = "_quickTabs_di7r7_97", Og = "_quickTab_di7r7_97", zg = "_activeQuickTab_di7r7_113", Ag = "_row_di7r7_118", Z = {
  page: gg,
  header: _g,
  title: Eg,
  description: wg,
  grid: kg,
  card: Cg,
  empty: Sg,
  cardHeader: Ng,
  cardTitle: xg,
  meta: Tg,
  time: Rg,
  form: Pg,
  field: Mg,
  label: Lg,
  select: Ig,
  input: Dg,
  quickTabs: $g,
  quickTab: Og,
  activeQuickTab: zg,
  row: Ag,
  switch: "_switch_di7r7_124"
}, Fg = [5, 10, 15, 30, 60], jg = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, Ug = () => {
  const { createTimer: l, devices: o, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = Xd(), [p, h] = g.useState(!1), [y, C] = g.useState(""), [w, _] = g.useState(5), [P, x] = g.useState({});
  g.useEffect(() => {
    x((T) => Object.fromEntries(f.map(($) => [$.uuid, T[$.uuid] ?? m($.timer_time)])));
  }, [f, m]), g.useEffect(() => {
    const T = window.setInterval(() => {
      x(($) => Object.fromEntries(Object.entries($).map(([R, j]) => [R, Math.max(0, j - 1)])));
    }, 1e3);
    return () => window.clearInterval(T);
  }, []);
  const L = g.useMemo(() => new Map(o.map((T) => [T.id, T.name])), [o]), D = async () => {
    y && (await l(y, w), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: Z.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: Z.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.grid }, f.length ? f.map((T) => /* @__PURE__ */ u.createElement("div", { className: Z.card, key: T.uuid }, /* @__PURE__ */ u.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: Z.cardTitle }, T.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: Z.meta }, "Устройство: ", L.get(T.device_id) || T.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(T) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: Z.time }, jg(P[T.uuid] ?? m(T.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: Z.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(hn, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(se, { onClick: D, disabled: !y }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: Z.form }, /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: Z.select, value: y, onChange: (T) => C(T.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((T) => /* @__PURE__ */ u.createElement("option", { key: T.id, value: T.id }, T.name)))), /* @__PURE__ */ u.createElement("div", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: Z.quickTabs }, Fg.map((T) => /* @__PURE__ */ u.createElement("button", { key: T, type: "button", className: `${Z.quickTab} ${w === T ? Z.activeQuickTab : ""}`, onClick: () => _(T) }, T, " мин")))), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: Z.input, type: "number", min: "1", value: w, onChange: (T) => _(Number(T.target.value) || 1) })))));
}, bg = () => {
  const { alarmTimeWidgets: l, alarms: o, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = Xd(), [h, y] = g.useState(!1), [C, w] = g.useState(""), [_, P] = g.useState("08:00"), [x, L] = g.useState(0.3), D = g.useMemo(() => {
    const R = l.flatMap((j) => j.time || []);
    return Array.from(new Set(R)).filter(Boolean);
  }, [l]), T = g.useMemo(() => new Map(f.map((R) => [R.id, R.name])), [f]), $ = async () => {
    !C || !_ || (await s(C, _, x), y(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: Z.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: Z.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(se, { onClick: () => y(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.grid }, o.length ? o.map((R) => /* @__PURE__ */ u.createElement("div", { className: Z.card, key: R.uuid }, /* @__PURE__ */ u.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: Z.cardTitle }, R.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: Z.meta }, "Устройство: ", T.get(R.device_id) || R.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(R) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${Z.row} ${Z.meta}` }, /* @__PURE__ */ u.createElement("input", { className: Z.switch, type: "checkbox", checked: R.status !== "off", onChange: (j) => p(R, { status: j.target.checked ? "on" : "off" }) }), R.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: Z.input, type: "time", value: R.time, onChange: (j) => p(R, { time: j.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: Z.field }, /* @__PURE__ */ u.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
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
}, Bg = () => /* @__PURE__ */ u.createElement(eh, null, /* @__PURE__ */ u.createElement(
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
    element: /* @__PURE__ */ u.createElement(Bv, null)
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
    element: /* @__PURE__ */ u.createElement(My, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Iy, null)
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
    element: /* @__PURE__ */ u.createElement(Uy, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement(By, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(Ky, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(Ug, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(bg, null)
  }
), /* @__PURE__ */ u.createElement(
  ot,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(hg, null)
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
)), Hg = () => /* @__PURE__ */ u.createElement(Bg, null);
class Vg {
  constructor(o) {
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
    return await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: o
    });
  }
  async _save(o, s) {
    return console.log(o), this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      data: o
    });
  }
  async _update(o, s, c) {
    return console.log(c), this.hass.connection.sendMessagePromise({
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
  async searchAssistantCommands(o) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/search_assistant_commands",
      query: o
    });
  }
  async searchAssistantSubDirectControls(o) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/search_assistant_sub_direct_controls",
      query: o
    });
  }
  async searchAssistantSubDirectControlSamples(o) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/search_assistant_sub_direct_control_samples",
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
    return Object.values(this.hass.states).filter(
      (o) => o.entity_id.startsWith("script.")
    ).map((o) => {
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
const Wg = 1, Ma = 2, bi = 3, Qg = 4, qg = 5;
function Yg(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function Kg() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function Gg(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Cd(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function Xg() {
  return {
    type: "ping"
  };
}
function Jg(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const Zg = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, e_ = "auth_invalid", t_ = "auth_ok";
function n_(l) {
  if (!l.auth)
    throw Qg;
  const o = l.auth;
  let s = o.expired ? o.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function f(m, p, h) {
    const y = new WebSocket(c);
    let C = !1;
    const w = () => {
      if (y.removeEventListener("close", w), C) {
        h(Ma);
        return;
      }
      if (m === 0) {
        h(Wg);
        return;
      }
      const x = m === -1 ? -1 : m - 1;
      setTimeout(() => f(x, p, h), 1e3);
    }, _ = async (x) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), y.send(JSON.stringify(Yg(o.accessToken)));
      } catch (L) {
        C = L === Ma, y.close();
      }
    }, P = async (x) => {
      const L = JSON.parse(x.data);
      switch (L.type) {
        case e_:
          C = !0, y.close();
          break;
        case t_:
          y.removeEventListener("open", _), y.removeEventListener("message", P), y.removeEventListener("close", w), y.removeEventListener("error", w), y.haVersion = L.ha_version, Zg(y.haVersion, 2022, 9) && y.send(JSON.stringify(Kg())), p(y);
          break;
      }
    };
    y.addEventListener("open", _), y.addEventListener("message", P), y.addEventListener("close", w), y.addEventListener("error", w);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class r_ {
  constructor(o, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Cd(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(Jg(bi, "Connection lost"));
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
                  C.reject && C.reject(bi);
              }
              h === Ma ? this.fireEvent("reconnect-error", h) : m(p + 1);
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
    return this.subscribeMessage(o, Gg(s));
  }
  ping() {
    return this.sendMessagePromise(Xg());
  }
  sendMessage(o, s) {
    if (!this.connected)
      throw bi;
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
          this.connected && await this.sendMessagePromise(Cd(h)), this.commands.delete(h);
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
const l_ = (l) => l * 1e3 + Date.now();
async function a_(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw qg;
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
    throw m.status === 400 || m.status === 403 ? Ma : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = l_(p.expires_in), p;
}
class o_ {
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
    const o = await a_(this.data.hassUrl, this.data.clientId, {
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
function i_(l, o) {
  return new o_({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function s_(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: n_ }, l), s = await o.createSocket(o);
  return new r_(s, o);
}
function u_(l) {
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
async function c_() {
  const s = i_(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await s_({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function d_({
  children: l,
  hass: o
}) {
  const [s, c] = g.useState(null);
  return g.useEffect(() => {
    async function f() {
      const m = o ? u_(o) : await c_();
      c(new Vg(m));
    }
    f().catch(console.error);
  }, [o]), s ? /* @__PURE__ */ u.createElement(qd.Provider, { value: s }, l) : /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...");
}
function f_({ hass: l }) {
  return /* @__PURE__ */ u.createElement(Sh, null, /* @__PURE__ */ u.createElement(d_, { hass: l }, /* @__PURE__ */ u.createElement(Hg, null)));
}
const Sd = "dialog-custom-ui-panel", Nd = "dialog-custom-ui-style";
class m_ extends HTMLElement {
  ensureShadowRoot() {
    return this.shadowRoot || this.attachShadow({ mode: "open" }), this.shadowRoot;
  }
  set hass(o) {
    this.hassValue = o, this.render();
  }
  get hass() {
    return this.hassValue;
  }
  connectedCallback() {
    this.ensureShadowRoot(), this.loadStyles(), this.render();
  }
  disconnectedCallback() {
    var o;
    (o = this.root) == null || o.unmount(), this.root = void 0;
  }
  async loadStyles() {
    const s = `/dialog_custom_ui_static/dialog-custom-ui-panel.css?v=${Date.now()}`, c = this.ensureShadowRoot();
    if (c.getElementById(Nd))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Nd, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
    this.root || (this.root = np.createRoot(o)), this.root.render(
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(f_, { hass: this.hassValue }))
    );
  }
}
customElements.get(Sd) || customElements.define(Sd, m_);
