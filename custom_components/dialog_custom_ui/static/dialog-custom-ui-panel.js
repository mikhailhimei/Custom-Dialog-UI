function bd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var ji = { exports: {} }, fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function hp() {
  if (ud) return fe;
  ud = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), g = Symbol.iterator;
  function N(x) {
    return x === null || typeof x != "object" ? null : (x = g && x[g] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var M = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, $ = {};
  function k(x, j, ce) {
    this.props = x, this.context = j, this.refs = $, this.updater = ce || M;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(x, j) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, j, "setState");
  }, k.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function L() {
  }
  L.prototype = k.prototype;
  function R(x, j, ce) {
    this.props = x, this.context = j, this.refs = $, this.updater = ce || M;
  }
  var z = R.prototype = new L();
  z.constructor = R, D(z, k.prototype), z.isPureReactComponent = !0;
  var H = Array.isArray, O = Object.prototype.hasOwnProperty, A = { current: null }, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(x, j, ce) {
    var me, he = {}, ve = null, Se = null;
    if (j != null) for (me in j.ref !== void 0 && (Se = j.ref), j.key !== void 0 && (ve = "" + j.key), j) O.call(j, me) && !K.hasOwnProperty(me) && (he[me] = j[me]);
    var we = arguments.length - 2;
    if (we === 1) he.children = ce;
    else if (1 < we) {
      for (var Re = Array(we), it = 0; it < we; it++) Re[it] = arguments[it + 2];
      he.children = Re;
    }
    if (x && x.defaultProps) for (me in we = x.defaultProps, we) he[me] === void 0 && (he[me] = we[me]);
    return { $$typeof: l, type: x, key: ve, ref: Se, props: he, _owner: A.current };
  }
  function ge(x, j) {
    return { $$typeof: l, type: x.type, key: j, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function _e(x) {
    return typeof x == "object" && x !== null && x.$$typeof === l;
  }
  function oe(x) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ce) {
      return j[ce];
    });
  }
  var ue = /\/+/g;
  function Ne(x, j) {
    return typeof x == "object" && x !== null && x.key != null ? oe("" + x.key) : j.toString(36);
  }
  function De(x, j, ce, me, he) {
    var ve = typeof x;
    (ve === "undefined" || ve === "boolean") && (x = null);
    var Se = !1;
    if (x === null) Se = !0;
    else switch (ve) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case l:
          case o:
            Se = !0;
        }
    }
    if (Se) return Se = x, he = he(Se), x = me === "" ? "." + Ne(Se, 0) : me, H(he) ? (ce = "", x != null && (ce = x.replace(ue, "$&/") + "/"), De(he, j, ce, "", function(it) {
      return it;
    })) : he != null && (_e(he) && (he = ge(he, ce + (!he.key || Se && Se.key === he.key ? "" : ("" + he.key).replace(ue, "$&/") + "/") + x)), j.push(he)), 1;
    if (Se = 0, me = me === "" ? "." : me + ":", H(x)) for (var we = 0; we < x.length; we++) {
      ve = x[we];
      var Re = me + Ne(ve, we);
      Se += De(ve, j, ce, Re, he);
    }
    else if (Re = N(x), typeof Re == "function") for (x = Re.call(x), we = 0; !(ve = x.next()).done; ) ve = ve.value, Re = me + Ne(ve, we++), Se += De(ve, j, ce, Re, he);
    else if (ve === "object") throw j = String(x), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function X(x, j, ce) {
    if (x == null) return x;
    var me = [], he = 0;
    return De(x, me, "", "", function(ve) {
      return j.call(ce, ve, he++);
    }), me;
  }
  function W(x) {
    if (x._status === -1) {
      var j = x._result;
      j = j(), j.then(function(ce) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ce);
      }, function(ce) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ce);
      }), x._status === -1 && (x._status = 0, x._result = j);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var de = { current: null }, V = { transition: null }, ie = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: V, ReactCurrentOwner: A };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: X, forEach: function(x, j, ce) {
    X(x, function() {
      j.apply(this, arguments);
    }, ce);
  }, count: function(x) {
    var j = 0;
    return X(x, function() {
      j++;
    }), j;
  }, toArray: function(x) {
    return X(x, function(j) {
      return j;
    }) || [];
  }, only: function(x) {
    if (!_e(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, fe.Component = k, fe.Fragment = s, fe.Profiler = f, fe.PureComponent = R, fe.StrictMode = c, fe.Suspense = y, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, fe.act = Y, fe.cloneElement = function(x, j, ce) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var me = D({}, x.props), he = x.key, ve = x.ref, Se = x._owner;
    if (j != null) {
      if (j.ref !== void 0 && (ve = j.ref, Se = A.current), j.key !== void 0 && (he = "" + j.key), x.type && x.type.defaultProps) var we = x.type.defaultProps;
      for (Re in j) O.call(j, Re) && !K.hasOwnProperty(Re) && (me[Re] = j[Re] === void 0 && we !== void 0 ? we[Re] : j[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) me.children = ce;
    else if (1 < Re) {
      we = Array(Re);
      for (var it = 0; it < Re; it++) we[it] = arguments[it + 2];
      me.children = we;
    }
    return { $$typeof: l, type: x.type, key: he, ref: ve, props: me, _owner: Se };
  }, fe.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: m, _context: x }, x.Consumer = x;
  }, fe.createElement = ne, fe.createFactory = function(x) {
    var j = ne.bind(null, x);
    return j.type = x, j;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(x) {
    return { $$typeof: h, render: x };
  }, fe.isValidElement = _e, fe.lazy = function(x) {
    return { $$typeof: C, _payload: { _status: -1, _result: x }, _init: W };
  }, fe.memo = function(x, j) {
    return { $$typeof: E, type: x, compare: j === void 0 ? null : j };
  }, fe.startTransition = function(x) {
    var j = V.transition;
    V.transition = {};
    try {
      x();
    } finally {
      V.transition = j;
    }
  }, fe.unstable_act = Y, fe.useCallback = function(x, j) {
    return de.current.useCallback(x, j);
  }, fe.useContext = function(x) {
    return de.current.useContext(x);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(x) {
    return de.current.useDeferredValue(x);
  }, fe.useEffect = function(x, j) {
    return de.current.useEffect(x, j);
  }, fe.useId = function() {
    return de.current.useId();
  }, fe.useImperativeHandle = function(x, j, ce) {
    return de.current.useImperativeHandle(x, j, ce);
  }, fe.useInsertionEffect = function(x, j) {
    return de.current.useInsertionEffect(x, j);
  }, fe.useLayoutEffect = function(x, j) {
    return de.current.useLayoutEffect(x, j);
  }, fe.useMemo = function(x, j) {
    return de.current.useMemo(x, j);
  }, fe.useReducer = function(x, j, ce) {
    return de.current.useReducer(x, j, ce);
  }, fe.useRef = function(x) {
    return de.current.useRef(x);
  }, fe.useState = function(x) {
    return de.current.useState(x);
  }, fe.useSyncExternalStore = function(x, j, ce) {
    return de.current.useSyncExternalStore(x, j, ce);
  }, fe.useTransition = function() {
    return de.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var cd;
function Bd() {
  return cd || (cd = 1, ji.exports = hp()), ji.exports;
}
var v = Bd();
const i = /* @__PURE__ */ bd(v);
var xa = {}, Ui = { exports: {} }, at = {}, bi = { exports: {} }, Bi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dd;
function vp() {
  return dd || (dd = 1, (function(l) {
    function o(V, ie) {
      var Y = V.length;
      V.push(ie);
      e: for (; 0 < Y; ) {
        var x = Y - 1 >>> 1, j = V[x];
        if (0 < f(j, ie)) V[x] = ie, V[Y] = j, Y = x;
        else break e;
      }
    }
    function s(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var ie = V[0], Y = V.pop();
      if (Y !== ie) {
        V[0] = Y;
        e: for (var x = 0, j = V.length, ce = j >>> 1; x < ce; ) {
          var me = 2 * (x + 1) - 1, he = V[me], ve = me + 1, Se = V[ve];
          if (0 > f(he, Y)) ve < j && 0 > f(Se, he) ? (V[x] = Se, V[ve] = Y, x = ve) : (V[x] = he, V[me] = Y, x = me);
          else if (ve < j && 0 > f(Se, Y)) V[x] = Se, V[ve] = Y, x = ve;
          else break e;
        }
      }
      return ie;
    }
    function f(V, ie) {
      var Y = V.sortIndex - ie.sortIndex;
      return Y !== 0 ? Y : V.id - ie.id;
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
    var y = [], E = [], C = 1, g = null, N = 3, M = !1, D = !1, $ = !1, k = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(V) {
      for (var ie = s(E); ie !== null; ) {
        if (ie.callback === null) c(E);
        else if (ie.startTime <= V) c(E), ie.sortIndex = ie.expirationTime, o(y, ie);
        else break;
        ie = s(E);
      }
    }
    function H(V) {
      if ($ = !1, z(V), !D) if (s(y) !== null) D = !0, W(O);
      else {
        var ie = s(E);
        ie !== null && de(H, ie.startTime - V);
      }
    }
    function O(V, ie) {
      D = !1, $ && ($ = !1, L(ne), ne = -1), M = !0;
      var Y = N;
      try {
        for (z(ie), g = s(y); g !== null && (!(g.expirationTime > ie) || V && !oe()); ) {
          var x = g.callback;
          if (typeof x == "function") {
            g.callback = null, N = g.priorityLevel;
            var j = x(g.expirationTime <= ie);
            ie = l.unstable_now(), typeof j == "function" ? g.callback = j : g === s(y) && c(y), z(ie);
          } else c(y);
          g = s(y);
        }
        if (g !== null) var ce = !0;
        else {
          var me = s(E);
          me !== null && de(H, me.startTime - ie), ce = !1;
        }
        return ce;
      } finally {
        g = null, N = Y, M = !1;
      }
    }
    var A = !1, K = null, ne = -1, ge = 5, _e = -1;
    function oe() {
      return !(l.unstable_now() - _e < ge);
    }
    function ue() {
      if (K !== null) {
        var V = l.unstable_now();
        _e = V;
        var ie = !0;
        try {
          ie = K(!0, V);
        } finally {
          ie ? Ne() : (A = !1, K = null);
        }
      } else A = !1;
    }
    var Ne;
    if (typeof R == "function") Ne = function() {
      R(ue);
    };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), X = De.port2;
      De.port1.onmessage = ue, Ne = function() {
        X.postMessage(null);
      };
    } else Ne = function() {
      k(ue, 0);
    };
    function W(V) {
      K = V, A || (A = !0, Ne());
    }
    function de(V, ie) {
      ne = k(function() {
        V(l.unstable_now());
      }, ie);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, l.unstable_continueExecution = function() {
      D || M || (D = !0, W(O));
    }, l.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ge = 0 < V ? Math.floor(1e3 / V) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, l.unstable_next = function(V) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = N;
      }
      var Y = N;
      N = ie;
      try {
        return V();
      } finally {
        N = Y;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(V, ie) {
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
      var Y = N;
      N = V;
      try {
        return ie();
      } finally {
        N = Y;
      }
    }, l.unstable_scheduleCallback = function(V, ie, Y) {
      var x = l.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? x + Y : x) : Y = x, V) {
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
      return j = Y + j, V = { id: C++, callback: ie, priorityLevel: V, startTime: Y, expirationTime: j, sortIndex: -1 }, Y > x ? (V.sortIndex = Y, o(E, V), s(y) === null && V === s(E) && ($ ? (L(ne), ne = -1) : $ = !0, de(H, Y - x))) : (V.sortIndex = j, o(y, V), D || M || (D = !0, W(O))), V;
    }, l.unstable_shouldYield = oe, l.unstable_wrapCallback = function(V) {
      var ie = N;
      return function() {
        var Y = N;
        N = ie;
        try {
          return V.apply(this, arguments);
        } finally {
          N = Y;
        }
      };
    };
  })(Bi)), Bi;
}
var fd;
function yp() {
  return fd || (fd = 1, bi.exports = vp()), bi.exports;
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
var md;
function gp() {
  if (md) return at;
  md = 1;
  var l = Bd(), o = yp();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, C = {}, g = {};
  function N(e) {
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
  function $(e, t, n, r, a, u, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = d;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    k[t] = new $(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var L = /[\-:]([a-z])/g;
  function R(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      L,
      R
    );
    k[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(L, R);
    k[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(L, R);
    k[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function z(e, t, n, r) {
    var a = k.hasOwnProperty(t) ? k[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, a, r) && (n = null), r || a === null ? N(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = Symbol.for("react.element"), A = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), oe = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), De = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, x;
  function j(e) {
    if (x === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
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
`), d = a.length - 1, _ = u.length - 1; 1 <= d && 0 <= _ && a[d] !== u[_]; ) _--;
        for (; 1 <= d && 0 <= _; d--, _--) if (a[d] !== u[_]) {
          if (d !== 1 || _ !== 1)
            do
              if (d--, _--, 0 > _ || a[d] !== u[_]) {
                var w = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= d && 0 <= _);
          break;
        }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? j(e) : "";
  }
  function he(e) {
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
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case K:
        return "Fragment";
      case A:
        return "Portal";
      case ge:
        return "Profiler";
      case ne:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case De:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case oe:
        return (e.displayName || "Context") + ".Consumer";
      case _e:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
        return t = e.displayName || null, t !== null ? t : ve(e.type) || "Memo";
      case W:
        t = e._payload, e = e._init;
        try {
          return ve(e(t));
        } catch {
        }
    }
    return null;
  }
  function Se(e) {
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
        return ve(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
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
  function we(e) {
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
  function Re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function it(e) {
    var t = Re(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        r = "" + d, u.call(this, d);
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
  function hs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Re(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function yl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Va(e, t) {
    var n = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function vs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = we(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ys(e, t) {
    t = t.checked, t != null && z(e, "checked", t, !1);
  }
  function Qa(e, t) {
    ys(e, t);
    var n = we(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? qa(e, t.type, n) : t.hasOwnProperty("defaultValue") && qa(e, t.type, we(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function gs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function qa(e, t, n) {
    (t !== "number" || yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var kr = Array.isArray;
  function Bn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + we(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ya(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function _s(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (kr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: we(n) };
  }
  function Es(e, t) {
    var n = we(t.value), r = we(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ws(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ks(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ka(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ks(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var gl, Ss = (function(e) {
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
  function Sr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cr = {
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
  }, _f = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Cr).forEach(function(e) {
    _f.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Cr[t] = Cr[e];
    });
  });
  function Cs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cr.hasOwnProperty(e) && Cr[e] ? ("" + t).trim() : t + "px";
  }
  function Ns(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Cs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Ef = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ga(e, t) {
    if (t) {
      if (Ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Xa(e, t) {
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
  var Ja = null;
  function Za(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var eo = null, Wn = null, Hn = null;
  function xs(e) {
    if (e = Qr(e)) {
      if (typeof eo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = bl(t), eo(e.stateNode, e.type, t));
    }
  }
  function Ts(e) {
    Wn ? Hn ? Hn.push(e) : Hn = [e] : Wn = e;
  }
  function Rs() {
    if (Wn) {
      var e = Wn, t = Hn;
      if (Hn = Wn = null, xs(e), t) for (e = 0; e < t.length; e++) xs(t[e]);
    }
  }
  function Ps(e, t) {
    return e(t);
  }
  function Ms() {
  }
  var to = !1;
  function Ls(e, t, n) {
    if (to) return e(t, n);
    to = !0;
    try {
      return Ps(e, t, n);
    } finally {
      to = !1, (Wn !== null || Hn !== null) && (Ms(), Rs());
    }
  }
  function Nr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = bl(n);
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
  var no = !1;
  if (h) try {
    var xr = {};
    Object.defineProperty(xr, "passive", { get: function() {
      no = !0;
    } }), window.addEventListener("test", xr, xr), window.removeEventListener("test", xr, xr);
  } catch {
    no = !1;
  }
  function wf(e, t, n, r, a, u, d, _, w) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (U) {
      this.onError(U);
    }
  }
  var Tr = !1, _l = null, El = !1, ro = null, kf = { onError: function(e) {
    Tr = !0, _l = e;
  } };
  function Sf(e, t, n, r, a, u, d, _, w) {
    Tr = !1, _l = null, wf.apply(kf, arguments);
  }
  function Cf(e, t, n, r, a, u, d, _, w) {
    if (Sf.apply(this, arguments), Tr) {
      if (Tr) {
        var I = _l;
        Tr = !1, _l = null;
      } else throw Error(s(198));
      El || (El = !0, ro = I);
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
  function Is(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function $s(e) {
    if (Nn(e) !== e) throw Error(s(188));
  }
  function Nf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Nn(e), t === null) throw Error(s(188));
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
          if (u === n) return $s(a), e;
          if (u === r) return $s(a), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = a, r = u;
      else {
        for (var d = !1, _ = a.child; _; ) {
          if (_ === n) {
            d = !0, n = a, r = u;
            break;
          }
          if (_ === r) {
            d = !0, r = a, n = u;
            break;
          }
          _ = _.sibling;
        }
        if (!d) {
          for (_ = u.child; _; ) {
            if (_ === n) {
              d = !0, n = u, r = a;
              break;
            }
            if (_ === r) {
              d = !0, r = u, n = a;
              break;
            }
            _ = _.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ds(e) {
    return e = Nf(e), e !== null ? zs(e) : null;
  }
  function zs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = zs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Os = o.unstable_scheduleCallback, As = o.unstable_cancelCallback, xf = o.unstable_shouldYield, Tf = o.unstable_requestPaint, Oe = o.unstable_now, Rf = o.unstable_getCurrentPriorityLevel, lo = o.unstable_ImmediatePriority, Fs = o.unstable_UserBlockingPriority, wl = o.unstable_NormalPriority, Pf = o.unstable_LowPriority, js = o.unstable_IdlePriority, kl = null, It = null;
  function Mf(e) {
    if (It && typeof It.onCommitFiberRoot == "function") try {
      It.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var St = Math.clz32 ? Math.clz32 : $f, Lf = Math.log, If = Math.LN2;
  function $f(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Lf(e) / If | 0) | 0;
  }
  var Sl = 64, Cl = 4194304;
  function Rr(e) {
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
    var r = 0, a = e.suspendedLanes, u = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var _ = d & ~a;
      _ !== 0 ? r = Rr(_) : (u &= d, u !== 0 && (r = Rr(u)));
    } else d = n & ~a, d !== 0 ? r = Rr(d) : u !== 0 && (r = Rr(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, u = t & -t, a >= u || a === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - St(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Df(e, t) {
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
  function zf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var d = 31 - St(u), _ = 1 << d, w = a[d];
      w === -1 ? ((_ & n) === 0 || (_ & r) !== 0) && (a[d] = Df(_, t)) : w <= t && (e.expiredLanes |= _), u &= ~_;
    }
  }
  function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Us() {
    var e = Sl;
    return Sl <<= 1, (Sl & 4194240) === 0 && (Sl = 64), e;
  }
  function oo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function Of(e, t) {
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
  var ke = 0;
  function bs(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Bs, so, Ws, Hs, Vs, uo = !1, xl = [], tn = null, nn = null, rn = null, Mr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), ln = [], Af = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qs(e, t) {
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
        Mr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lr.delete(t.pointerId);
    }
  }
  function Ir(e, t, n, r, a, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [a] }, t !== null && (t = Qr(t), t !== null && so(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ff(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return tn = Ir(tn, e, t, n, r, a), !0;
      case "dragenter":
        return nn = Ir(nn, e, t, n, r, a), !0;
      case "mouseover":
        return rn = Ir(rn, e, t, n, r, a), !0;
      case "pointerover":
        var u = a.pointerId;
        return Mr.set(u, Ir(Mr.get(u) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return u = a.pointerId, Lr.set(u, Ir(Lr.get(u) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function qs(e) {
    var t = xn(e.target);
    if (t !== null) {
      var n = Nn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Is(n), t !== null) {
            e.blockedOn = t, Vs(e.priority, function() {
              Ws(n);
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
      var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ja = r, n.target.dispatchEvent(r), Ja = null;
      } else return t = Qr(n), t !== null && so(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ys(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function jf() {
    uo = !1, tn !== null && Tl(tn) && (tn = null), nn !== null && Tl(nn) && (nn = null), rn !== null && Tl(rn) && (rn = null), Mr.forEach(Ys), Lr.forEach(Ys);
  }
  function $r(e, t) {
    e.blockedOn === t && (e.blockedOn = null, uo || (uo = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, jf)));
  }
  function Dr(e) {
    function t(a) {
      return $r(a, e);
    }
    if (0 < xl.length) {
      $r(xl[0], e);
      for (var n = 1; n < xl.length; n++) {
        var r = xl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (tn !== null && $r(tn, e), nn !== null && $r(nn, e), rn !== null && $r(rn, e), Mr.forEach(t), Lr.forEach(t), n = 0; n < ln.length; n++) r = ln[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0], n.blockedOn === null); ) qs(n), n.blockedOn === null && ln.shift();
  }
  var Vn = H.ReactCurrentBatchConfig, Rl = !0;
  function Uf(e, t, n, r) {
    var a = ke, u = Vn.transition;
    Vn.transition = null;
    try {
      ke = 1, co(e, t, n, r);
    } finally {
      ke = a, Vn.transition = u;
    }
  }
  function bf(e, t, n, r) {
    var a = ke, u = Vn.transition;
    Vn.transition = null;
    try {
      ke = 4, co(e, t, n, r);
    } finally {
      ke = a, Vn.transition = u;
    }
  }
  function co(e, t, n, r) {
    if (Rl) {
      var a = fo(e, t, n, r);
      if (a === null) Po(e, t, r, Pl, n), Qs(e, r);
      else if (Ff(a, e, t, n, r)) r.stopPropagation();
      else if (Qs(e, r), t & 4 && -1 < Af.indexOf(e)) {
        for (; a !== null; ) {
          var u = Qr(a);
          if (u !== null && Bs(u), u = fo(e, t, n, r), u === null && Po(e, t, r, Pl, n), u === a) break;
          a = u;
        }
        a !== null && r.stopPropagation();
      } else Po(e, t, r, null, n);
    }
  }
  var Pl = null;
  function fo(e, t, n, r) {
    if (Pl = null, e = Za(r), e = xn(e), e !== null) if (t = Nn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Is(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Pl = e, null;
  }
  function Ks(e) {
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
        switch (Rf()) {
          case lo:
            return 1;
          case Fs:
            return 4;
          case wl:
          case Pf:
            return 16;
          case js:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var an = null, mo = null, Ml = null;
  function Gs() {
    if (Ml) return Ml;
    var e, t = mo, n = t.length, r, a = "value" in an ? an.value : an.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[u - r]; r++) ;
    return Ml = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ll(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Il() {
    return !0;
  }
  function Xs() {
    return !1;
  }
  function st(e) {
    function t(n, r, a, u, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = u, this.target = d, this.currentTarget = null;
      for (var _ in e) e.hasOwnProperty(_) && (n = e[_], this[_] = n ? n(u) : u[_]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Il : Xs, this.isPropagationStopped = Xs, this;
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
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, po = st(Qn), zr = Y({}, Qn, { view: 0, detail: 0 }), Bf = st(zr), ho, vo, Or, $l = Y({}, zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: go, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (ho = e.screenX - Or.screenX, vo = e.screenY - Or.screenY) : vo = ho = 0, Or = e), ho);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : vo;
  } }), Js = st($l), Wf = Y({}, $l, { dataTransfer: 0 }), Hf = st(Wf), Vf = Y({}, zr, { relatedTarget: 0 }), yo = st(Vf), Qf = Y({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = st(Qf), Yf = Y({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Kf = st(Yf), Gf = Y({}, Qn, { data: 0 }), Zs = st(Gf), Xf = {
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
  }, Jf = {
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
  }, Zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function em(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zf[e]) ? !!t[e] : !1;
  }
  function go() {
    return em;
  }
  var tm = Y({}, zr, { key: function(e) {
    if (e.key) {
      var t = Xf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: go, charCode: function(e) {
    return e.type === "keypress" ? Ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), nm = st(tm), rm = Y({}, $l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), eu = st(rm), lm = Y({}, zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: go }), am = st(lm), om = Y({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), im = st(om), sm = Y({}, $l, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), um = st(sm), cm = [9, 13, 27, 32], _o = h && "CompositionEvent" in window, Ar = null;
  h && "documentMode" in document && (Ar = document.documentMode);
  var dm = h && "TextEvent" in window && !Ar, tu = h && (!_o || Ar && 8 < Ar && 11 >= Ar), nu = " ", ru = !1;
  function lu(e, t) {
    switch (e) {
      case "keyup":
        return cm.indexOf(t.keyCode) !== -1;
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
  function au(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qn = !1;
  function fm(e, t) {
    switch (e) {
      case "compositionend":
        return au(t);
      case "keypress":
        return t.which !== 32 ? null : (ru = !0, nu);
      case "textInput":
        return e = t.data, e === nu && ru ? null : e;
      default:
        return null;
    }
  }
  function mm(e, t) {
    if (qn) return e === "compositionend" || !_o && lu(e, t) ? (e = Gs(), Ml = mo = an = null, qn = !1, e) : null;
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
        return tu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pm[e.type] : t === "textarea";
  }
  function iu(e, t, n, r) {
    Ts(r), t = Fl(t, "onChange"), 0 < t.length && (n = new po("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Fr = null, jr = null;
  function hm(e) {
    Nu(e, 0);
  }
  function Dl(e) {
    var t = Jn(e);
    if (hs(t)) return e;
  }
  function vm(e, t) {
    if (e === "change") return t;
  }
  var su = !1;
  if (h) {
    var Eo;
    if (h) {
      var wo = "oninput" in document;
      if (!wo) {
        var uu = document.createElement("div");
        uu.setAttribute("oninput", "return;"), wo = typeof uu.oninput == "function";
      }
      Eo = wo;
    } else Eo = !1;
    su = Eo && (!document.documentMode || 9 < document.documentMode);
  }
  function cu() {
    Fr && (Fr.detachEvent("onpropertychange", du), jr = Fr = null);
  }
  function du(e) {
    if (e.propertyName === "value" && Dl(jr)) {
      var t = [];
      iu(t, jr, e, Za(e)), Ls(hm, t);
    }
  }
  function ym(e, t, n) {
    e === "focusin" ? (cu(), Fr = t, jr = n, Fr.attachEvent("onpropertychange", du)) : e === "focusout" && cu();
  }
  function gm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(jr);
  }
  function _m(e, t) {
    if (e === "click") return Dl(t);
  }
  function Em(e, t) {
    if (e === "input" || e === "change") return Dl(t);
  }
  function wm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : wm;
  function Ur(e, t) {
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
  function fu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mu(e, t) {
    var n = fu(e);
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
      n = fu(n);
    }
  }
  function pu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function hu() {
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
  function ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function km(e) {
    var t = hu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && pu(n.ownerDocument.documentElement, n)) {
      if (r !== null && ko(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, u = Math.min(r.start, a);
          r = r.end === void 0 ? u : Math.min(r.end, a), !e.extend && u > r && (a = r, r = u, u = a), a = mu(n, u);
          var d = mu(
            n,
            r
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Sm = h && "documentMode" in document && 11 >= document.documentMode, Yn = null, So = null, br = null, Co = !1;
  function vu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Co || Yn == null || Yn !== yl(r) || (r = Yn, "selectionStart" in r && ko(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), br && Ur(br, r) || (br = r, r = Fl(So, "onSelect"), 0 < r.length && (t = new po("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Yn)));
  }
  function zl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Kn = { animationend: zl("Animation", "AnimationEnd"), animationiteration: zl("Animation", "AnimationIteration"), animationstart: zl("Animation", "AnimationStart"), transitionend: zl("Transition", "TransitionEnd") }, No = {}, yu = {};
  h && (yu = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
  function Ol(e) {
    if (No[e]) return No[e];
    if (!Kn[e]) return e;
    var t = Kn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in yu) return No[e] = t[n];
    return e;
  }
  var gu = Ol("animationend"), _u = Ol("animationiteration"), Eu = Ol("animationstart"), wu = Ol("transitionend"), ku = /* @__PURE__ */ new Map(), Su = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function on(e, t) {
    ku.set(e, t), m(t, [e]);
  }
  for (var xo = 0; xo < Su.length; xo++) {
    var To = Su[xo], Cm = To.toLowerCase(), Nm = To[0].toUpperCase() + To.slice(1);
    on(Cm, "on" + Nm);
  }
  on(gu, "onAnimationEnd"), on(_u, "onAnimationIteration"), on(Eu, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(wu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
  function Cu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Cf(r, t, void 0, e), e.currentTarget = null;
  }
  function Nu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var _ = r[d], w = _.instance, I = _.currentTarget;
          if (_ = _.listener, w !== u && a.isPropagationStopped()) break e;
          Cu(a, _, I), u = w;
        }
        else for (d = 0; d < r.length; d++) {
          if (_ = r[d], w = _.instance, I = _.currentTarget, _ = _.listener, w !== u && a.isPropagationStopped()) break e;
          Cu(a, _, I), u = w;
        }
      }
    }
    if (El) throw e = ro, El = !1, ro = null, e;
  }
  function xe(e, t) {
    var n = t[zo];
    n === void 0 && (n = t[zo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (xu(t, e, 2, !1), n.add(r));
  }
  function Ro(e, t, n) {
    var r = 0;
    t && (r |= 4), xu(n, e, r, t);
  }
  var Al = "_reactListening" + Math.random().toString(36).slice(2);
  function Wr(e) {
    if (!e[Al]) {
      e[Al] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (xm.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Al] || (t[Al] = !0, Ro("selectionchange", !1, t));
    }
  }
  function xu(e, t, n, r) {
    switch (Ks(t)) {
      case 1:
        var a = Uf;
        break;
      case 4:
        a = bf;
        break;
      default:
        a = co;
    }
    n = a.bind(null, t, n, e), a = void 0, !no || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function Po(e, t, n, r, a) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var _ = r.stateNode.containerInfo;
        if (_ === a || _.nodeType === 8 && _.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var w = d.tag;
          if ((w === 3 || w === 4) && (w = d.stateNode.containerInfo, w === a || w.nodeType === 8 && w.parentNode === a)) return;
          d = d.return;
        }
        for (; _ !== null; ) {
          if (d = xn(_), d === null) return;
          if (w = d.tag, w === 5 || w === 6) {
            r = u = d;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      r = r.return;
    }
    Ls(function() {
      var I = u, U = Za(n), b = [];
      e: {
        var F = ku.get(e);
        if (F !== void 0) {
          var Q = po, G = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = nm;
              break;
            case "focusin":
              G = "focus", Q = yo;
              break;
            case "focusout":
              G = "blur", Q = yo;
              break;
            case "beforeblur":
            case "afterblur":
              Q = yo;
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
              Q = Js;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Hf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = am;
              break;
            case gu:
            case _u:
            case Eu:
              Q = qf;
              break;
            case wu:
              Q = im;
              break;
            case "scroll":
              Q = Bf;
              break;
            case "wheel":
              Q = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Kf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = eu;
          }
          var J = (t & 4) !== 0, Ae = !J && e === "scroll", T = J ? F !== null ? F + "Capture" : null : F;
          J = [];
          for (var S = I, P; S !== null; ) {
            P = S;
            var B = P.stateNode;
            if (P.tag === 5 && B !== null && (P = B, T !== null && (B = Nr(S, T), B != null && J.push(Hr(S, B, P)))), Ae) break;
            S = S.return;
          }
          0 < J.length && (F = new Q(F, G, null, n, U), b.push({ event: F, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", F && n !== Ja && (G = n.relatedTarget || n.fromElement) && (xn(G) || G[bt])) break e;
          if ((Q || F) && (F = U.window === U ? U : (F = U.ownerDocument) ? F.defaultView || F.parentWindow : window, Q ? (G = n.relatedTarget || n.toElement, Q = I, G = G ? xn(G) : null, G !== null && (Ae = Nn(G), G !== Ae || G.tag !== 5 && G.tag !== 6) && (G = null)) : (Q = null, G = I), Q !== G)) {
            if (J = Js, B = "onMouseLeave", T = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (J = eu, B = "onPointerLeave", T = "onPointerEnter", S = "pointer"), Ae = Q == null ? F : Jn(Q), P = G == null ? F : Jn(G), F = new J(B, S + "leave", Q, n, U), F.target = Ae, F.relatedTarget = P, B = null, xn(U) === I && (J = new J(T, S + "enter", G, n, U), J.target = P, J.relatedTarget = Ae, B = J), Ae = B, Q && G) t: {
              for (J = Q, T = G, S = 0, P = J; P; P = Gn(P)) S++;
              for (P = 0, B = T; B; B = Gn(B)) P++;
              for (; 0 < S - P; ) J = Gn(J), S--;
              for (; 0 < P - S; ) T = Gn(T), P--;
              for (; S--; ) {
                if (J === T || T !== null && J === T.alternate) break t;
                J = Gn(J), T = Gn(T);
              }
              J = null;
            }
            else J = null;
            Q !== null && Tu(b, F, Q, J, !1), G !== null && Ae !== null && Tu(b, Ae, G, J, !0);
          }
        }
        e: {
          if (F = I ? Jn(I) : window, Q = F.nodeName && F.nodeName.toLowerCase(), Q === "select" || Q === "input" && F.type === "file") var ee = vm;
          else if (ou(F)) if (su) ee = Em;
          else {
            ee = gm;
            var re = ym;
          }
          else (Q = F.nodeName) && Q.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (ee = _m);
          if (ee && (ee = ee(e, I))) {
            iu(b, ee, n, U);
            break e;
          }
          re && re(e, F, I), e === "focusout" && (re = F._wrapperState) && re.controlled && F.type === "number" && qa(F, "number", F.value);
        }
        switch (re = I ? Jn(I) : window, e) {
          case "focusin":
            (ou(re) || re.contentEditable === "true") && (Yn = re, So = I, br = null);
            break;
          case "focusout":
            br = So = Yn = null;
            break;
          case "mousedown":
            Co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Co = !1, vu(b, n, U);
            break;
          case "selectionchange":
            if (Sm) break;
          case "keydown":
          case "keyup":
            vu(b, n, U);
        }
        var le;
        if (_o) e: {
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
        else qn ? lu(e, n) && (se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (se = "onCompositionStart");
        se && (tu && n.locale !== "ko" && (qn || se !== "onCompositionStart" ? se === "onCompositionEnd" && qn && (le = Gs()) : (an = U, mo = "value" in an ? an.value : an.textContent, qn = !0)), re = Fl(I, se), 0 < re.length && (se = new Zs(se, e, null, n, U), b.push({ event: se, listeners: re }), le ? se.data = le : (le = au(n), le !== null && (se.data = le)))), (le = dm ? fm(e, n) : mm(e, n)) && (I = Fl(I, "onBeforeInput"), 0 < I.length && (U = new Zs("onBeforeInput", "beforeinput", null, n, U), b.push({ event: U, listeners: I }), U.data = le));
      }
      Nu(b, t);
    });
  }
  function Hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Fl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, u = a.stateNode;
      a.tag === 5 && u !== null && (a = u, u = Nr(e, n), u != null && r.unshift(Hr(e, u, a)), u = Nr(e, t), u != null && r.push(Hr(e, u, a))), e = e.return;
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
  function Tu(e, t, n, r, a) {
    for (var u = t._reactName, d = []; n !== null && n !== r; ) {
      var _ = n, w = _.alternate, I = _.stateNode;
      if (w !== null && w === r) break;
      _.tag === 5 && I !== null && (_ = I, a ? (w = Nr(n, u), w != null && d.unshift(Hr(n, w, _))) : a || (w = Nr(n, u), w != null && d.push(Hr(n, w, _)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Tm = /\r\n?/g, Rm = /\u0000|\uFFFD/g;
  function Ru(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Rm, "");
  }
  function jl(e, t, n) {
    if (t = Ru(t), Ru(e) !== t && n) throw Error(s(425));
  }
  function Ul() {
  }
  var Mo = null, Lo = null;
  function Io(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $o = typeof setTimeout == "function" ? setTimeout : void 0, Pm = typeof clearTimeout == "function" ? clearTimeout : void 0, Pu = typeof Promise == "function" ? Promise : void 0, Mm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pu < "u" ? function(e) {
    return Pu.resolve(null).then(e).catch(Lm);
  } : $o;
  function Lm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Do(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), Dr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    Dr(t);
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
  function Mu(e) {
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
  var Xn = Math.random().toString(36).slice(2), $t = "__reactFiber$" + Xn, Vr = "__reactProps$" + Xn, bt = "__reactContainer$" + Xn, zo = "__reactEvents$" + Xn, Im = "__reactListeners$" + Xn, $m = "__reactHandles$" + Xn;
  function xn(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bt] || n[$t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mu(e); e !== null; ) {
          if (n = e[$t]) return n;
          e = Mu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Qr(e) {
    return e = e[$t] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function bl(e) {
    return e[Vr] || null;
  }
  var Oo = [], Zn = -1;
  function un(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Zn || (e.current = Oo[Zn], Oo[Zn] = null, Zn--);
  }
  function Ce(e, t) {
    Zn++, Oo[Zn] = e.current, e.current = t;
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
  function Bl() {
    Te(et), Te(Ye);
  }
  function Lu(e, t, n) {
    if (Ye.current !== cn) throw Error(s(168));
    Ce(Ye, t), Ce(et, n);
  }
  function Iu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, Se(e) || "Unknown", a));
    return Y({}, n, r);
  }
  function Wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Tn = Ye.current, Ce(Ye, e), Ce(et, et.current), !0;
  }
  function $u(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Iu(e, t, Tn), r.__reactInternalMemoizedMergedChildContext = e, Te(et), Te(Ye), Ce(Ye, e)) : Te(et), Ce(et, n);
  }
  var Bt = null, Hl = !1, Ao = !1;
  function Du(e) {
    Bt === null ? Bt = [e] : Bt.push(e);
  }
  function Dm(e) {
    Hl = !0, Du(e);
  }
  function dn() {
    if (!Ao && Bt !== null) {
      Ao = !0;
      var e = 0, t = ke;
      try {
        var n = Bt;
        for (ke = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Bt = null, Hl = !1;
      } catch (a) {
        throw Bt !== null && (Bt = Bt.slice(e + 1)), Os(lo, dn), a;
      } finally {
        ke = t, Ao = !1;
      }
    }
    return null;
  }
  var tr = [], nr = 0, Vl = null, Ql = 0, ht = [], vt = 0, Rn = null, Wt = 1, Ht = "";
  function Pn(e, t) {
    tr[nr++] = Ql, tr[nr++] = Vl, Vl = e, Ql = t;
  }
  function zu(e, t, n) {
    ht[vt++] = Wt, ht[vt++] = Ht, ht[vt++] = Rn, Rn = e;
    var r = Wt;
    e = Ht;
    var a = 32 - St(r) - 1;
    r &= ~(1 << a), n += 1;
    var u = 32 - St(t) + a;
    if (30 < u) {
      var d = a - a % 5;
      u = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Wt = 1 << 32 - St(t) + a | n << a | r, Ht = u + e;
    } else Wt = 1 << u | n << a | r, Ht = e;
  }
  function Fo(e) {
    e.return !== null && (Pn(e, 1), zu(e, 1, 0));
  }
  function jo(e) {
    for (; e === Vl; ) Vl = tr[--nr], tr[nr] = null, Ql = tr[--nr], tr[nr] = null;
    for (; e === Rn; ) Rn = ht[--vt], ht[vt] = null, Ht = ht[--vt], ht[vt] = null, Wt = ht[--vt], ht[vt] = null;
  }
  var ut = null, ct = null, Pe = !1, Nt = null;
  function Ou(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Au(e, t) {
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
  function Uo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bo(e) {
    if (Pe) {
      var t = ct;
      if (t) {
        var n = t;
        if (!Au(e, t)) {
          if (Uo(e)) throw Error(s(418));
          t = sn(n.nextSibling);
          var r = ut;
          t && Au(e, t) ? Ou(r, n) : (e.flags = e.flags & -4097 | 2, Pe = !1, ut = e);
        }
      } else {
        if (Uo(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Pe = !1, ut = e;
      }
    }
  }
  function Fu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function ql(e) {
    if (e !== ut) return !1;
    if (!Pe) return Fu(e), Pe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Io(e.type, e.memoizedProps)), t && (t = ct)) {
      if (Uo(e)) throw ju(), Error(s(418));
      for (; t; ) Ou(e, t), t = sn(t.nextSibling);
    }
    if (Fu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
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
  function ju() {
    for (var e = ct; e; ) e = sn(e.nextSibling);
  }
  function rr() {
    ct = ut = null, Pe = !1;
  }
  function Bo(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  var zm = H.ReactCurrentBatchConfig;
  function qr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(d) {
          var _ = a.refs;
          d === null ? delete _[u] : _[u] = d;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Yl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Uu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function bu(e) {
    function t(T, S) {
      if (e) {
        var P = T.deletions;
        P === null ? (T.deletions = [S], T.flags |= 16) : P.push(S);
      }
    }
    function n(T, S) {
      if (!e) return null;
      for (; S !== null; ) t(T, S), S = S.sibling;
      return null;
    }
    function r(T, S) {
      for (T = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? T.set(S.key, S) : T.set(S.index, S), S = S.sibling;
      return T;
    }
    function a(T, S) {
      return T = _n(T, S), T.index = 0, T.sibling = null, T;
    }
    function u(T, S, P) {
      return T.index = P, e ? (P = T.alternate, P !== null ? (P = P.index, P < S ? (T.flags |= 2, S) : P) : (T.flags |= 2, S)) : (T.flags |= 1048576, S);
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function _(T, S, P, B) {
      return S === null || S.tag !== 6 ? (S = $i(P, T.mode, B), S.return = T, S) : (S = a(S, P), S.return = T, S);
    }
    function w(T, S, P, B) {
      var ee = P.type;
      return ee === K ? U(T, S, P.props.children, B, P.key) : S !== null && (S.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === W && Uu(ee) === S.type) ? (B = a(S, P.props), B.ref = qr(T, S, P), B.return = T, B) : (B = ga(P.type, P.key, P.props, null, T.mode, B), B.ref = qr(T, S, P), B.return = T, B);
    }
    function I(T, S, P, B) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== P.containerInfo || S.stateNode.implementation !== P.implementation ? (S = Di(P, T.mode, B), S.return = T, S) : (S = a(S, P.children || []), S.return = T, S);
    }
    function U(T, S, P, B, ee) {
      return S === null || S.tag !== 7 ? (S = An(P, T.mode, B, ee), S.return = T, S) : (S = a(S, P), S.return = T, S);
    }
    function b(T, S, P) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = $i("" + S, T.mode, P), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case O:
            return P = ga(S.type, S.key, S.props, null, T.mode, P), P.ref = qr(T, null, S), P.return = T, P;
          case A:
            return S = Di(S, T.mode, P), S.return = T, S;
          case W:
            var B = S._init;
            return b(T, B(S._payload), P);
        }
        if (kr(S) || ie(S)) return S = An(S, T.mode, P, null), S.return = T, S;
        Yl(T, S);
      }
      return null;
    }
    function F(T, S, P, B) {
      var ee = S !== null ? S.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return ee !== null ? null : _(T, S, "" + P, B);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case O:
            return P.key === ee ? w(T, S, P, B) : null;
          case A:
            return P.key === ee ? I(T, S, P, B) : null;
          case W:
            return ee = P._init, F(
              T,
              S,
              ee(P._payload),
              B
            );
        }
        if (kr(P) || ie(P)) return ee !== null ? null : U(T, S, P, B, null);
        Yl(T, P);
      }
      return null;
    }
    function Q(T, S, P, B, ee) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return T = T.get(P) || null, _(S, T, "" + B, ee);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case O:
            return T = T.get(B.key === null ? P : B.key) || null, w(S, T, B, ee);
          case A:
            return T = T.get(B.key === null ? P : B.key) || null, I(S, T, B, ee);
          case W:
            var re = B._init;
            return Q(T, S, P, re(B._payload), ee);
        }
        if (kr(B) || ie(B)) return T = T.get(P) || null, U(S, T, B, ee, null);
        Yl(S, B);
      }
      return null;
    }
    function G(T, S, P, B) {
      for (var ee = null, re = null, le = S, se = S = 0, We = null; le !== null && se < P.length; se++) {
        le.index > se ? (We = le, le = null) : We = le.sibling;
        var ye = F(T, le, P[se], B);
        if (ye === null) {
          le === null && (le = We);
          break;
        }
        e && le && ye.alternate === null && t(T, le), S = u(ye, S, se), re === null ? ee = ye : re.sibling = ye, re = ye, le = We;
      }
      if (se === P.length) return n(T, le), Pe && Pn(T, se), ee;
      if (le === null) {
        for (; se < P.length; se++) le = b(T, P[se], B), le !== null && (S = u(le, S, se), re === null ? ee = le : re.sibling = le, re = le);
        return Pe && Pn(T, se), ee;
      }
      for (le = r(T, le); se < P.length; se++) We = Q(le, T, se, P[se], B), We !== null && (e && We.alternate !== null && le.delete(We.key === null ? se : We.key), S = u(We, S, se), re === null ? ee = We : re.sibling = We, re = We);
      return e && le.forEach(function(En) {
        return t(T, En);
      }), Pe && Pn(T, se), ee;
    }
    function J(T, S, P, B) {
      var ee = ie(P);
      if (typeof ee != "function") throw Error(s(150));
      if (P = ee.call(P), P == null) throw Error(s(151));
      for (var re = ee = null, le = S, se = S = 0, We = null, ye = P.next(); le !== null && !ye.done; se++, ye = P.next()) {
        le.index > se ? (We = le, le = null) : We = le.sibling;
        var En = F(T, le, ye.value, B);
        if (En === null) {
          le === null && (le = We);
          break;
        }
        e && le && En.alternate === null && t(T, le), S = u(En, S, se), re === null ? ee = En : re.sibling = En, re = En, le = We;
      }
      if (ye.done) return n(
        T,
        le
      ), Pe && Pn(T, se), ee;
      if (le === null) {
        for (; !ye.done; se++, ye = P.next()) ye = b(T, ye.value, B), ye !== null && (S = u(ye, S, se), re === null ? ee = ye : re.sibling = ye, re = ye);
        return Pe && Pn(T, se), ee;
      }
      for (le = r(T, le); !ye.done; se++, ye = P.next()) ye = Q(le, T, se, ye.value, B), ye !== null && (e && ye.alternate !== null && le.delete(ye.key === null ? se : ye.key), S = u(ye, S, se), re === null ? ee = ye : re.sibling = ye, re = ye);
      return e && le.forEach(function(pp) {
        return t(T, pp);
      }), Pe && Pn(T, se), ee;
    }
    function Ae(T, S, P, B) {
      if (typeof P == "object" && P !== null && P.type === K && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case O:
            e: {
              for (var ee = P.key, re = S; re !== null; ) {
                if (re.key === ee) {
                  if (ee = P.type, ee === K) {
                    if (re.tag === 7) {
                      n(T, re.sibling), S = a(re, P.props.children), S.return = T, T = S;
                      break e;
                    }
                  } else if (re.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === W && Uu(ee) === re.type) {
                    n(T, re.sibling), S = a(re, P.props), S.ref = qr(T, re, P), S.return = T, T = S;
                    break e;
                  }
                  n(T, re);
                  break;
                } else t(T, re);
                re = re.sibling;
              }
              P.type === K ? (S = An(P.props.children, T.mode, B, P.key), S.return = T, T = S) : (B = ga(P.type, P.key, P.props, null, T.mode, B), B.ref = qr(T, S, P), B.return = T, T = B);
            }
            return d(T);
          case A:
            e: {
              for (re = P.key; S !== null; ) {
                if (S.key === re) if (S.tag === 4 && S.stateNode.containerInfo === P.containerInfo && S.stateNode.implementation === P.implementation) {
                  n(T, S.sibling), S = a(S, P.children || []), S.return = T, T = S;
                  break e;
                } else {
                  n(T, S);
                  break;
                }
                else t(T, S);
                S = S.sibling;
              }
              S = Di(P, T.mode, B), S.return = T, T = S;
            }
            return d(T);
          case W:
            return re = P._init, Ae(T, S, re(P._payload), B);
        }
        if (kr(P)) return G(T, S, P, B);
        if (ie(P)) return J(T, S, P, B);
        Yl(T, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, S !== null && S.tag === 6 ? (n(T, S.sibling), S = a(S, P), S.return = T, T = S) : (n(T, S), S = $i(P, T.mode, B), S.return = T, T = S), d(T)) : n(T, S);
    }
    return Ae;
  }
  var lr = bu(!0), Bu = bu(!1), Kl = un(null), Gl = null, ar = null, Wo = null;
  function Ho() {
    Wo = ar = Gl = null;
  }
  function Vo(e) {
    var t = Kl.current;
    Te(Kl), e._currentValue = t;
  }
  function Qo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function or(e, t) {
    Gl = e, Wo = ar = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), e.firstContext = null);
  }
  function yt(e) {
    var t = e._currentValue;
    if (Wo !== e) if (e = { context: e, memoizedValue: t, next: null }, ar === null) {
      if (Gl === null) throw Error(s(308));
      ar = e, Gl.dependencies = { lanes: 0, firstContext: e };
    } else ar = ar.next = e;
    return t;
  }
  var Mn = null;
  function qo(e) {
    Mn === null ? Mn = [e] : Mn.push(e);
  }
  function Wu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, qo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Vt(e, r);
  }
  function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var fn = !1;
  function Yo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Hu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function mn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (pe & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Vt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, qo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Vt(e, n);
  }
  function Xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
    }
  }
  function Vu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? a = u = d : u = u.next = d, n = n.next;
        } while (n !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Jl(e, t, n, r) {
    var a = e.updateQueue;
    fn = !1;
    var u = a.firstBaseUpdate, d = a.lastBaseUpdate, _ = a.shared.pending;
    if (_ !== null) {
      a.shared.pending = null;
      var w = _, I = w.next;
      w.next = null, d === null ? u = I : d.next = I, d = w;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, _ = U.lastBaseUpdate, _ !== d && (_ === null ? U.firstBaseUpdate = I : _.next = I, U.lastBaseUpdate = w));
    }
    if (u !== null) {
      var b = a.baseState;
      d = 0, U = I = w = null, _ = u;
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
                b = Y({}, b, F);
                break e;
              case 2:
                fn = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (e.flags |= 64, F = a.effects, F === null ? a.effects = [_] : F.push(_));
        } else Q = { eventTime: Q, lane: F, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, U === null ? (I = U = Q, w = b) : U = U.next = Q, d |= F;
        if (_ = _.next, _ === null) {
          if (_ = a.shared.pending, _ === null) break;
          F = _, _ = F.next, F.next = null, a.lastBaseUpdate = F, a.shared.pending = null;
        }
      } while (!0);
      if (U === null && (w = b), a.baseState = w, a.firstBaseUpdate = I, a.lastBaseUpdate = U, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      $n |= d, e.lanes = d, e.memoizedState = b;
    }
  }
  function Qu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var Yr = {}, Dt = un(Yr), Kr = un(Yr), Gr = un(Yr);
  function Ln(e) {
    if (e === Yr) throw Error(s(174));
    return e;
  }
  function Ko(e, t) {
    switch (Ce(Gr, t), Ce(Kr, e), Ce(Dt, Yr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ka(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ka(t, e);
    }
    Te(Dt), Ce(Dt, t);
  }
  function ir() {
    Te(Dt), Te(Kr), Te(Gr);
  }
  function qu(e) {
    Ln(Gr.current);
    var t = Ln(Dt.current), n = Ka(t, e.type);
    t !== n && (Ce(Kr, e), Ce(Dt, n));
  }
  function Go(e) {
    Kr.current === e && (Te(Dt), Te(Kr));
  }
  var Ie = un(0);
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
  var Xo = [];
  function Jo() {
    for (var e = 0; e < Xo.length; e++) Xo[e]._workInProgressVersionPrimary = null;
    Xo.length = 0;
  }
  var ea = H.ReactCurrentDispatcher, Zo = H.ReactCurrentBatchConfig, In = 0, $e = null, je = null, be = null, ta = !1, Xr = !1, Jr = 0, Om = 0;
  function Ke() {
    throw Error(s(321));
  }
  function ei(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ct(e[n], t[n])) return !1;
    return !0;
  }
  function ti(e, t, n, r, a, u) {
    if (In = u, $e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ea.current = e === null || e.memoizedState === null ? Um : bm, e = n(r, a), Xr) {
      u = 0;
      do {
        if (Xr = !1, Jr = 0, 25 <= u) throw Error(s(301));
        u += 1, be = je = null, t.updateQueue = null, ea.current = Bm, e = n(r, a);
      } while (Xr);
    }
    if (ea.current = la, t = je !== null && je.next !== null, In = 0, be = je = $e = null, ta = !1, t) throw Error(s(300));
    return e;
  }
  function ni() {
    var e = Jr !== 0;
    return Jr = 0, e;
  }
  function zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return be === null ? $e.memoizedState = be = e : be = be.next = e, be;
  }
  function gt() {
    if (je === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = be === null ? $e.memoizedState : be.next;
    if (t !== null) be = t, je = e;
    else {
      if (e === null) throw Error(s(310));
      je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, be === null ? $e.memoizedState = be = e : be = be.next = e;
    }
    return be;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ri(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = je, a = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = u.next, u.next = d;
      }
      r.baseQueue = a = u, n.pending = null;
    }
    if (a !== null) {
      u = a.next, r = r.baseState;
      var _ = d = null, w = null, I = u;
      do {
        var U = I.lane;
        if ((In & U) === U) w !== null && (w = w.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var b = {
            lane: U,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          w === null ? (_ = w = b, d = r) : w = w.next = b, $e.lanes |= U, $n |= U;
        }
        I = I.next;
      } while (I !== null && I !== u);
      w === null ? d = r : w.next = _, Ct(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        u = a.lane, $e.lanes |= u, $n |= u, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function li(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        u = e(u, d.action), d = d.next;
      while (d !== a);
      Ct(u, t.memoizedState) || (nt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function Yu() {
  }
  function Ku(e, t) {
    var n = $e, r = gt(), a = t(), u = !Ct(r.memoizedState, a);
    if (u && (r.memoizedState = a, nt = !0), r = r.queue, ai(Ju.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || be !== null && be.memoizedState.tag & 1) {
      if (n.flags |= 2048, el(9, Xu.bind(null, n, r, a, t), void 0, null), Be === null) throw Error(s(349));
      (In & 30) !== 0 || Gu(n, t, a);
    }
    return a;
  }
  function Gu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Xu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Zu(t) && ec(e);
  }
  function Ju(e, t, n) {
    return n(function() {
      Zu(t) && ec(e);
    });
  }
  function Zu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function ec(e) {
    var t = Vt(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function tc(e) {
    var t = zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = jm.bind(null, $e, e), [t.memoizedState, e];
  }
  function el(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function nc() {
    return gt().memoizedState;
  }
  function na(e, t, n, r) {
    var a = zt();
    $e.flags |= e, a.memoizedState = el(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ra(e, t, n, r) {
    var a = gt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (je !== null) {
      var d = je.memoizedState;
      if (u = d.destroy, r !== null && ei(r, d.deps)) {
        a.memoizedState = el(t, n, u, r);
        return;
      }
    }
    $e.flags |= e, a.memoizedState = el(1 | t, n, u, r);
  }
  function rc(e, t) {
    return na(8390656, 8, e, t);
  }
  function ai(e, t) {
    return ra(2048, 8, e, t);
  }
  function lc(e, t) {
    return ra(4, 2, e, t);
  }
  function ac(e, t) {
    return ra(4, 4, e, t);
  }
  function oc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function ic(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ra(4, 4, oc.bind(null, t, e), n);
  }
  function oi() {
  }
  function sc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ei(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function uc(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ei(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function cc(e, t, n) {
    return (In & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n) : (Ct(n, t) || (n = Us(), $e.lanes |= n, $n |= n, e.baseState = !0), t);
  }
  function Am(e, t) {
    var n = ke;
    ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Zo.transition;
    Zo.transition = {};
    try {
      e(!1), t();
    } finally {
      ke = n, Zo.transition = r;
    }
  }
  function dc() {
    return gt().memoizedState;
  }
  function Fm(e, t, n) {
    var r = yn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fc(e)) mc(t, n);
    else if (n = Wu(e, t, n, r), n !== null) {
      var a = Ze();
      Pt(n, e, r, a), pc(n, t, r);
    }
  }
  function jm(e, t, n) {
    var r = yn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (fc(e)) mc(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var d = t.lastRenderedState, _ = u(d, n);
        if (a.hasEagerState = !0, a.eagerState = _, Ct(_, d)) {
          var w = t.interleaved;
          w === null ? (a.next = a, qo(t)) : (a.next = w.next, w.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = Wu(e, t, a, r), n !== null && (a = Ze(), Pt(n, e, r, a), pc(n, t, r));
    }
  }
  function fc(e) {
    var t = e.alternate;
    return e === $e || t !== null && t === $e;
  }
  function mc(e, t) {
    Xr = ta = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function pc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
    }
  }
  var la = { readContext: yt, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, Um = { readContext: yt, useCallback: function(e, t) {
    return zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: yt, useEffect: rc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, na(
      4194308,
      4,
      oc.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, $e, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: tc, useDebugValue: oi, useDeferredValue: function(e) {
    return zt().memoizedState = e;
  }, useTransition: function() {
    var e = tc(!1), t = e[0];
    return e = Am.bind(null, e[1]), zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = $e, a = zt();
    if (Pe) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(s(349));
      (In & 30) !== 0 || Gu(r, t, n);
    }
    a.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return a.queue = u, rc(Ju.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, el(9, Xu.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = zt(), t = Be.identifierPrefix;
    if (Pe) {
      var n = Ht, r = Wt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Om++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, bm = {
    readContext: yt,
    useCallback: sc,
    useContext: yt,
    useEffect: ai,
    useImperativeHandle: ic,
    useInsertionEffect: lc,
    useLayoutEffect: ac,
    useMemo: uc,
    useReducer: ri,
    useRef: nc,
    useState: function() {
      return ri(Zr);
    },
    useDebugValue: oi,
    useDeferredValue: function(e) {
      var t = gt();
      return cc(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = ri(Zr)[0], t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Ku,
    useId: dc,
    unstable_isNewReconciler: !1
  }, Bm = { readContext: yt, useCallback: sc, useContext: yt, useEffect: ai, useImperativeHandle: ic, useInsertionEffect: lc, useLayoutEffect: ac, useMemo: uc, useReducer: li, useRef: nc, useState: function() {
    return li(Zr);
  }, useDebugValue: oi, useDeferredValue: function(e) {
    var t = gt();
    return je === null ? t.memoizedState = e : cc(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = li(Zr)[0], t = gt().memoizedState;
    return [e, t];
  }, useMutableSource: Yu, useSyncExternalStore: Ku, useId: dc, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ii(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var aa = { isMounted: function(e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = yn(e), u = Qt(r, a);
    u.payload = t, n != null && (u.callback = n), t = mn(e, u, a), t !== null && (Pt(t, e, a, r), Xl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = yn(e), u = Qt(r, a);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = mn(e, u, a), t !== null && (Pt(t, e, a, r), Xl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ze(), r = yn(e), a = Qt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = mn(e, a, r), t !== null && (Pt(t, e, r, n), Xl(t, e, r));
  } };
  function hc(e, t, n, r, a, u, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, d) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(a, u) : !0;
  }
  function vc(e, t, n) {
    var r = !1, a = cn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = yt(u) : (a = tt(t) ? Tn : Ye.current, r = t.contextTypes, u = (r = r != null) ? er(e, a) : cn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function yc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && aa.enqueueReplaceState(t, t.state, null);
  }
  function si(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Yo(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? a.context = yt(u) : (u = tt(t) ? Tn : Ye.current, a.context = er(e, u)), a.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (ii(e, t, u, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && aa.enqueueReplaceState(a, a.state, null), Jl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function sr(e, t) {
    try {
      var n = "", r = t;
      do
        n += he(r), r = r.return;
      while (r);
      var a = n;
    } catch (u) {
      a = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function ui(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ci(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Wm = typeof WeakMap == "function" ? WeakMap : Map;
  function gc(e, t, n) {
    n = Qt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      fa || (fa = !0, Ni = r), ci(e, t);
    }, n;
  }
  function _c(e, t, n) {
    n = Qt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        ci(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      ci(e, t), typeof r != "function" && (hn === null ? hn = /* @__PURE__ */ new Set([this]) : hn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function Ec(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Wm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = rp.bind(null, e, t, n), t.then(e, e));
  }
  function wc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function kc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1), t.tag = 2, mn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Hm = H.ReactCurrentOwner, nt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Bu(t, null, n, r) : lr(t, e.child, n, r);
  }
  function Sc(e, t, n, r, a) {
    n = n.render;
    var u = t.ref;
    return or(t, a), r = ti(e, t, n, r, u, a), n = ni(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Pe && n && Fo(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function Cc(e, t, n, r, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Ii(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Nc(e, t, u, r, a)) : (e = ga(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & a) === 0) {
      var d = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ur, n(d, r) && e.ref === t.ref) return qt(e, t, a);
    }
    return t.flags |= 1, e = _n(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Nc(e, t, n, r, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ur(u, r) && e.ref === t.ref) if (nt = !1, t.pendingProps = r = u, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (nt = !0);
      else return t.lanes = e.lanes, qt(e, t, a);
    }
    return di(e, t, n, r, a);
  }
  function xc(e, t, n) {
    var r = t.pendingProps, a = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(cr, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(cr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, Ce(cr, dt), dt |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, Ce(cr, dt), dt |= r;
    return Je(e, t, a, n), t.child;
  }
  function Tc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function di(e, t, n, r, a) {
    var u = tt(n) ? Tn : Ye.current;
    return u = er(t, u), or(t, a), n = ti(e, t, n, r, u, a), r = ni(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Pe && r && Fo(t), t.flags |= 1, Je(e, t, n, a), t.child);
  }
  function Rc(e, t, n, r, a) {
    if (tt(n)) {
      var u = !0;
      Wl(t);
    } else u = !1;
    if (or(t, a), t.stateNode === null) ia(e, t), vc(t, n, r), si(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, _ = t.memoizedProps;
      d.props = _;
      var w = d.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = yt(I) : (I = tt(n) ? Tn : Ye.current, I = er(t, I));
      var U = n.getDerivedStateFromProps, b = typeof U == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      b || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (_ !== r || w !== I) && yc(t, d, r, I), fn = !1;
      var F = t.memoizedState;
      d.state = F, Jl(t, r, d, a), w = t.memoizedState, _ !== r || F !== w || et.current || fn ? (typeof U == "function" && (ii(t, n, U, r), w = t.memoizedState), (_ = fn || hc(t, n, _, r, F, w, I)) ? (b || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), d.props = r, d.state = w, d.context = I, r = _) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Hu(e, t), _ = t.memoizedProps, I = t.type === t.elementType ? _ : xt(t.type, _), d.props = I, b = t.pendingProps, F = d.context, w = n.contextType, typeof w == "object" && w !== null ? w = yt(w) : (w = tt(n) ? Tn : Ye.current, w = er(t, w));
      var Q = n.getDerivedStateFromProps;
      (U = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (_ !== b || F !== w) && yc(t, d, r, w), fn = !1, F = t.memoizedState, d.state = F, Jl(t, r, d, a);
      var G = t.memoizedState;
      _ !== b || F !== G || et.current || fn ? (typeof Q == "function" && (ii(t, n, Q, r), G = t.memoizedState), (I = fn || hc(t, n, I, r, F, G, w) || !1) ? (U || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, G, w), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, G, w)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = G), d.props = r, d.state = G, d.context = w, r = I) : (typeof d.componentDidUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return fi(e, t, n, r, u, a);
  }
  function fi(e, t, n, r, a, u) {
    Tc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && $u(t, n, !1), qt(e, t, u);
    r = t.stateNode, Hm.current = t;
    var _ = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = lr(t, e.child, null, u), t.child = lr(t, null, _, u)) : Je(e, t, _, u), t.memoizedState = r.state, a && $u(t, n, !0), t.child;
  }
  function Pc(e) {
    var t = e.stateNode;
    t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1), Ko(e, t.containerInfo);
  }
  function Mc(e, t, n, r, a) {
    return rr(), Bo(a), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var mi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Lc(e, t, n) {
    var r = t.pendingProps, a = Ie.current, u = !1, d = (t.flags & 128) !== 0, _;
    if ((_ = d) || (_ = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), _ ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Ce(Ie, a & 1), e === null)
      return bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = d) : u = _a(d, r, 0, null), e = An(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = pi(n), t.memoizedState = mi, e) : hi(t, d));
    if (a = e.memoizedState, a !== null && (_ = a.dehydrated, _ !== null)) return Vm(e, t, d, r, _, a, n);
    if (u) {
      u = r.fallback, d = t.mode, a = e.child, _ = a.sibling;
      var w = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = _n(a, w), r.subtreeFlags = a.subtreeFlags & 14680064), _ !== null ? u = _n(_, u) : (u = An(u, d, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, d = e.child.memoizedState, d = d === null ? pi(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, u.memoizedState = d, u.childLanes = e.childLanes & ~n, t.memoizedState = mi, r;
    }
    return u = e.child, e = u.sibling, r = _n(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function hi(e, t) {
    return t = _a({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oa(e, t, n, r) {
    return r !== null && Bo(r), lr(t, e.child, null, n), e = hi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Vm(e, t, n, r, a, u, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ui(Error(s(422))), oa(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, a = t.mode, r = _a({ mode: "visible", children: r.children }, a, 0, null), u = An(u, a, d, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && lr(t, e.child, null, d), t.child.memoizedState = pi(d), t.memoizedState = mi, u);
    if ((t.mode & 1) === 0) return oa(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var _ = r.dgst;
      return r = _, u = Error(s(419)), r = ui(u, r, void 0), oa(e, t, d, r);
    }
    if (_ = (d & e.childLanes) !== 0, nt || _) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== u.retryLane && (u.retryLane = a, Vt(e, a), Pt(r, e, a, -1));
      }
      return Li(), r = ui(Error(s(421))), oa(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lp.bind(null, e), a._reactRetry = t, null) : (e = u.treeContext, ct = sn(a.nextSibling), ut = t, Pe = !0, Nt = null, e !== null && (ht[vt++] = Wt, ht[vt++] = Ht, ht[vt++] = Rn, Wt = e.id, Ht = e.overflow, Rn = t), t = hi(t, r.children), t.flags |= 4096, t);
  }
  function Ic(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Qo(e.return, t, n);
  }
  function vi(e, t, n, r, a) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = a);
  }
  function $c(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, u = r.tail;
    if (Je(e, t, r.children, n), r = Ie.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ic(e, n, t);
        else if (e.tag === 19) Ic(e, n, t);
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
    if (Ce(Ie, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Zl(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), vi(t, !1, a, n, u);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Zl(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        vi(t, !0, n, null, u);
        break;
      case "together":
        vi(t, !1, null, null, void 0);
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
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _n(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Qm(e, t, n) {
    switch (t.tag) {
      case 3:
        Pc(t), rr();
        break;
      case 5:
        qu(t);
        break;
      case 1:
        tt(t.type) && Wl(t);
        break;
      case 4:
        Ko(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Ce(Kl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(Ie, Ie.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Lc(e, t, n) : (Ce(Ie, Ie.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
        Ce(Ie, Ie.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return $c(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Ce(Ie, Ie.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xc(e, t, n);
    }
    return qt(e, t, n);
  }
  var Dc, yi, zc, Oc;
  Dc = function(e, t) {
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
  }, yi = function() {
  }, zc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, Ln(Dt.current);
      var u = null;
      switch (n) {
        case "input":
          a = Va(e, a), r = Va(e, r), u = [];
          break;
        case "select":
          a = Y({}, a, { value: void 0 }), r = Y({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          a = Ya(e, a), r = Ya(e, r), u = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
      }
      Ga(n, r);
      var d;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var _ = a[I];
        for (d in _) _.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (f.hasOwnProperty(I) ? u || (u = []) : (u = u || []).push(I, null));
      for (I in r) {
        var w = r[I];
        if (_ = a != null ? a[I] : void 0, r.hasOwnProperty(I) && w !== _ && (w != null || _ != null)) if (I === "style") if (_) {
          for (d in _) !_.hasOwnProperty(d) || w && w.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in w) w.hasOwnProperty(d) && _[d] !== w[d] && (n || (n = {}), n[d] = w[d]);
        } else n || (u || (u = []), u.push(
          I,
          n
        )), n = w;
        else I === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, _ = _ ? _.__html : void 0, w != null && _ !== w && (u = u || []).push(I, w)) : I === "children" ? typeof w != "string" && typeof w != "number" || (u = u || []).push(I, "" + w) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (f.hasOwnProperty(I) ? (w != null && I === "onScroll" && xe("scroll", e), u || _ === w || (u = [])) : (u = u || []).push(I, w));
      }
      n && (u = u || []).push("style", n);
      var I = u;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, Oc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function tl(e, t) {
    if (!Pe) switch (e.tailMode) {
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
  function qm(e, t, n) {
    var r = t.pendingProps;
    switch (jo(t), t.tag) {
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
        return tt(t.type) && Bl(), Ge(t), null;
      case 3:
        return r = t.stateNode, ir(), Te(et), Te(Ye), Jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Nt !== null && (Ri(Nt), Nt = null))), yi(e, t), Ge(t), null;
      case 5:
        Go(t);
        var a = Ln(Gr.current);
        if (n = t.type, e !== null && t.stateNode != null) zc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ge(t), null;
          }
          if (e = Ln(Dt.current), ql(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[$t] = t, r[Vr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                xe("cancel", r), xe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Br.length; a++) xe(Br[a], r);
                break;
              case "source":
                xe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                xe(
                  "error",
                  r
                ), xe("load", r);
                break;
              case "details":
                xe("toggle", r);
                break;
              case "input":
                vs(r, u), xe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, xe("invalid", r);
                break;
              case "textarea":
                _s(r, u), xe("invalid", r);
            }
            Ga(n, u), a = null;
            for (var d in u) if (u.hasOwnProperty(d)) {
              var _ = u[d];
              d === "children" ? typeof _ == "string" ? r.textContent !== _ && (u.suppressHydrationWarning !== !0 && jl(r.textContent, _, e), a = ["children", _]) : typeof _ == "number" && r.textContent !== "" + _ && (u.suppressHydrationWarning !== !0 && jl(
                r.textContent,
                _,
                e
              ), a = ["children", "" + _]) : f.hasOwnProperty(d) && _ != null && d === "onScroll" && xe("scroll", r);
            }
            switch (n) {
              case "input":
                vl(r), gs(r, u, !0);
                break;
              case "textarea":
                vl(r), ws(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Ul);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ks(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[$t] = t, e[Vr] = r, Dc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Xa(n, r), n) {
                case "dialog":
                  xe("cancel", e), xe("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  xe("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Br.length; a++) xe(Br[a], e);
                  a = r;
                  break;
                case "source":
                  xe("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  xe(
                    "error",
                    e
                  ), xe("load", e), a = r;
                  break;
                case "details":
                  xe("toggle", e), a = r;
                  break;
                case "input":
                  vs(e, r), a = Va(e, r), xe("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = Y({}, r, { value: void 0 }), xe("invalid", e);
                  break;
                case "textarea":
                  _s(e, r), a = Ya(e, r), xe("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ga(n, a), _ = a;
              for (u in _) if (_.hasOwnProperty(u)) {
                var w = _[u];
                u === "style" ? Ns(e, w) : u === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && Ss(e, w)) : u === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && Sr(e, w) : typeof w == "number" && Sr(e, "" + w) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (f.hasOwnProperty(u) ? w != null && u === "onScroll" && xe("scroll", e) : w != null && z(e, u, w, d));
              }
              switch (n) {
                case "input":
                  vl(e), gs(e, r, !1);
                  break;
                case "textarea":
                  vl(e), ws(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + we(r.value));
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
        return Ge(t), null;
      case 6:
        if (e && t.stateNode != null) Oc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = Ln(Gr.current), Ln(Dt.current), ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (u = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$t] = t, t.stateNode = r;
        }
        return Ge(t), null;
      case 13:
        if (Te(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Pe && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ju(), rr(), t.flags |= 98560, u = !1;
          else if (u = ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[$t] = t;
            } else rr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), u = !1;
          } else Nt !== null && (Ri(Nt), Nt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Li())), t.updateQueue !== null && (t.flags |= 4), Ge(t), null);
      case 4:
        return ir(), yi(e, t), e === null && Wr(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return Vo(t.type._context), Ge(t), null;
      case 17:
        return tt(t.type) && Bl(), Ge(t), null;
      case 19:
        if (Te(Ie), u = t.memoizedState, u === null) return Ge(t), null;
        if (r = (t.flags & 128) !== 0, d = u.rendering, d === null) if (r) tl(u, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Zl(e), d !== null) {
              for (t.flags |= 128, tl(u, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, d = u.alternate, d === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = d.childLanes, u.lanes = d.lanes, u.child = d.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = d.memoizedProps, u.memoizedState = d.memoizedState, u.updateQueue = d.updateQueue, u.type = d.type, e = d.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ce(Ie, Ie.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Oe() > dr && (t.flags |= 128, r = !0, tl(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zl(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tl(u, !0), u.tail === null && u.tailMode === "hidden" && !d.alternate && !Pe) return Ge(t), null;
          } else 2 * Oe() - u.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, tl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (d.sibling = t.child, t.child = d) : (n = u.last, n !== null ? n.sibling = d : t.child = d, u.last = d);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Oe(), t.sibling = null, n = Ie.current, Ce(Ie, r ? n & 1 | 2 : n & 1), t) : (Ge(t), null);
      case 22:
      case 23:
        return Mi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ym(e, t) {
    switch (jo(t), t.tag) {
      case 1:
        return tt(t.type) && Bl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ir(), Te(et), Te(Ye), Jo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Go(t), null;
      case 13:
        if (Te(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          rr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Te(Ie), null;
      case 4:
        return ir(), null;
      case 10:
        return Vo(t.type._context), null;
      case 22:
      case 23:
        return Mi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var sa = !1, Xe = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, q = null;
  function ur(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ze(e, t, r);
    }
    else n.current = null;
  }
  function gi(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var Ac = !1;
  function Gm(e, t) {
    if (Mo = Rl, e = hu(), ko(e)) {
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
          var d = 0, _ = -1, w = -1, I = 0, U = 0, b = e, F = null;
          t: for (; ; ) {
            for (var Q; b !== n || a !== 0 && b.nodeType !== 3 || (_ = d + a), b !== u || r !== 0 && b.nodeType !== 3 || (w = d + r), b.nodeType === 3 && (d += b.nodeValue.length), (Q = b.firstChild) !== null; )
              F = b, b = Q;
            for (; ; ) {
              if (b === e) break t;
              if (F === n && ++I === a && (_ = d), F === u && ++U === r && (w = d), (Q = b.nextSibling) !== null) break;
              b = F, F = b.parentNode;
            }
            b = Q;
          }
          n = _ === -1 || w === -1 ? null : { start: _, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Lo = { focusedElem: e, selectionRange: n }, Rl = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
    else for (; q !== null; ) {
      t = q;
      try {
        var G = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (G !== null) {
              var J = G.memoizedProps, Ae = G.memoizedState, T = t.stateNode, S = T.getSnapshotBeforeUpdate(t.elementType === t.type ? J : xt(t.type, J), Ae);
              T.__reactInternalSnapshotBeforeUpdate = S;
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
      } catch (B) {
        ze(t, t.return, B);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, q = e;
        break;
      }
      q = t.return;
    }
    return G = Ac, Ac = !1, G;
  }
  function nl(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var u = a.destroy;
          a.destroy = void 0, u !== void 0 && gi(t, n, u);
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
  function _i(e) {
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
  function Fc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[Vr], delete t[zo], delete t[Im], delete t[$m])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function jc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ei(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ul));
    else if (r !== 4 && (e = e.child, e !== null)) for (Ei(e, t, n), e = e.sibling; e !== null; ) Ei(e, t, n), e = e.sibling;
  }
  function wi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), e = e.sibling;
  }
  var Ve = null, Tt = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; ) bc(e, t, n), n = n.sibling;
  }
  function bc(e, t, n) {
    if (It && typeof It.onCommitFiberUnmount == "function") try {
      It.onCommitFiberUnmount(kl, n);
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
        Ve !== null && (Tt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Do(e.parentNode, n) : e.nodeType === 1 && Do(e, n), Dr(e)) : Do(Ve, n.stateNode));
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
            var u = a, d = u.destroy;
            u = u.tag, d !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && gi(n, t, d), a = a.next;
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
  function Bc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Km()), t.forEach(function(r) {
        var a = ap.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var u = e, d = t, _ = d;
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
        if (Ve === null) throw Error(s(160));
        bc(u, d, a), Ve = null, Tt = !1;
        var w = a.alternate;
        w !== null && (w.return = null), a.return = null;
      } catch (I) {
        ze(a, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wc(t, e), t = t.sibling;
  }
  function Wc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Rt(t, e), Ot(e), r & 4) {
          try {
            nl(3, e, e.return), ua(3, e);
          } catch (J) {
            ze(e, e.return, J);
          }
          try {
            nl(5, e, e.return);
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
            Sr(a, "");
          } catch (J) {
            ze(e, e.return, J);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var u = e.memoizedProps, d = n !== null ? n.memoizedProps : u, _ = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            _ === "input" && u.type === "radio" && u.name != null && ys(a, u), Xa(_, d);
            var I = Xa(_, u);
            for (d = 0; d < w.length; d += 2) {
              var U = w[d], b = w[d + 1];
              U === "style" ? Ns(a, b) : U === "dangerouslySetInnerHTML" ? Ss(a, b) : U === "children" ? Sr(a, b) : z(a, U, b, I);
            }
            switch (_) {
              case "input":
                Qa(a, u);
                break;
              case "textarea":
                Es(a, u);
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
            a[Vr] = u;
          } catch (J) {
            ze(e, e.return, J);
          }
        }
        break;
      case 6:
        if (Rt(t, e), Ot(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
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
          Dr(t.containerInfo);
        } catch (J) {
          ze(e, e.return, J);
        }
        break;
      case 4:
        Rt(t, e), Ot(e);
        break;
      case 13:
        Rt(t, e), Ot(e), a = e.child, a.flags & 8192 && (u = a.memoizedState !== null, a.stateNode.isHidden = u, !u || a.alternate !== null && a.alternate.memoizedState !== null || (Ci = Oe())), r & 4 && Bc(e);
        break;
      case 22:
        if (U = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (I = Xe) || U, Rt(t, e), Xe = I) : Rt(t, e), Ot(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !U && (e.mode & 1) !== 0) for (q = e, U = e.child; U !== null; ) {
            for (b = q = U; q !== null; ) {
              switch (F = q, Q = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nl(4, F, F.return);
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
                    Qc(b);
                    continue;
                  }
              }
              Q !== null ? (Q.return = F, q = Q) : Qc(b);
            }
            U = U.sibling;
          }
          e: for (U = null, b = e; ; ) {
            if (b.tag === 5) {
              if (U === null) {
                U = b;
                try {
                  a = b.stateNode, I ? (u = a.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (_ = b.stateNode, w = b.memoizedProps.style, d = w != null && w.hasOwnProperty("display") ? w.display : null, _.style.display = Cs("display", d));
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
        Rt(t, e), Ot(e), r & 4 && Bc(e);
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
            if (jc(n)) {
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
            r.flags & 32 && (Sr(a, ""), r.flags &= -33);
            var u = Uc(e);
            wi(e, u, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, _ = Uc(e);
            Ei(e, _, d);
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
  function Xm(e, t, n) {
    q = e, Hc(e);
  }
  function Hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; q !== null; ) {
      var a = q, u = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || sa;
        if (!d) {
          var _ = a.alternate, w = _ !== null && _.memoizedState !== null || Xe;
          _ = sa;
          var I = Xe;
          if (sa = d, (Xe = w) && !I) for (q = a; q !== null; ) d = q, w = d.child, d.tag === 22 && d.memoizedState !== null ? qc(a) : w !== null ? (w.return = d, q = w) : qc(a);
          for (; u !== null; ) q = u, Hc(u), u = u.sibling;
          q = a, sa = _, Xe = I;
        }
        Vc(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a, q = u) : Vc(e);
    }
  }
  function Vc(e) {
    for (; q !== null; ) {
      var t = q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || ua(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Qu(t, u, r);
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
                Qu(t, d, n);
              }
              break;
            case 5:
              var _ = t.stateNode;
              if (n === null && t.flags & 4) {
                n = _;
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
                var I = t.alternate;
                if (I !== null) {
                  var U = I.memoizedState;
                  if (U !== null) {
                    var b = U.dehydrated;
                    b !== null && Dr(b);
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
          Xe || t.flags & 512 && _i(t);
        } catch (F) {
          ze(t, t.return, F);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, q = n;
        break;
      }
      q = t.return;
    }
  }
  function Qc(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, q = n;
        break;
      }
      q = t.return;
    }
  }
  function qc(e) {
    for (; q !== null; ) {
      var t = q;
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
            var u = t.return;
            try {
              _i(t);
            } catch (w) {
              ze(t, u, w);
            }
            break;
          case 5:
            var d = t.return;
            try {
              _i(t);
            } catch (w) {
              ze(t, d, w);
            }
        }
      } catch (w) {
        ze(t, t.return, w);
      }
      if (t === e) {
        q = null;
        break;
      }
      var _ = t.sibling;
      if (_ !== null) {
        _.return = t.return, q = _;
        break;
      }
      q = t.return;
    }
  }
  var Jm = Math.ceil, ca = H.ReactCurrentDispatcher, ki = H.ReactCurrentOwner, _t = H.ReactCurrentBatchConfig, pe = 0, Be = null, Fe = null, Qe = 0, dt = 0, cr = un(0), Ue = 0, rl = null, $n = 0, da = 0, Si = 0, ll = null, rt = null, Ci = 0, dr = 1 / 0, Yt = null, fa = !1, Ni = null, hn = null, ma = !1, vn = null, pa = 0, al = 0, xi = null, ha = -1, va = 0;
  function Ze() {
    return (pe & 6) !== 0 ? Oe() : ha !== -1 ? ha : ha = Oe();
  }
  function yn(e) {
    return (e.mode & 1) === 0 ? 1 : (pe & 2) !== 0 && Qe !== 0 ? Qe & -Qe : zm.transition !== null ? (va === 0 && (va = Us()), va) : (e = ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ks(e.type)), e);
  }
  function Pt(e, t, n, r) {
    if (50 < al) throw al = 0, xi = null, Error(s(185));
    Pr(e, n, r), ((pe & 2) === 0 || e !== Be) && (e === Be && ((pe & 2) === 0 && (da |= n), Ue === 4 && gn(e, Qe)), lt(e, r), n === 1 && pe === 0 && (t.mode & 1) === 0 && (dr = Oe() + 500, Hl && dn()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    zf(e, t);
    var r = Nl(e, e === Be ? Qe : 0);
    if (r === 0) n !== null && As(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && As(n), t === 1) e.tag === 0 ? Dm(Kc.bind(null, e)) : Du(Kc.bind(null, e)), Mm(function() {
        (pe & 6) === 0 && dn();
      }), n = null;
      else {
        switch (bs(r)) {
          case 1:
            n = lo;
            break;
          case 4:
            n = Fs;
            break;
          case 16:
            n = wl;
            break;
          case 536870912:
            n = js;
            break;
          default:
            n = wl;
        }
        n = rd(n, Yc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Yc(e, t) {
    if (ha = -1, va = 0, (pe & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (fr() && e.callbackNode !== n) return null;
    var r = Nl(e, e === Be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ya(e, r);
    else {
      t = r;
      var a = pe;
      pe |= 2;
      var u = Xc();
      (Be !== e || Qe !== t) && (Yt = null, dr = Oe() + 500, zn(e, t));
      do
        try {
          tp();
          break;
        } catch (_) {
          Gc(e, _);
        }
      while (!0);
      Ho(), ca.current = u, pe = a, Fe !== null ? t = 0 : (Be = null, Qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = ao(e), a !== 0 && (r = a, t = Ti(e, a))), t === 1) throw n = rl, zn(e, 0), gn(e, r), lt(e, Oe()), n;
      if (t === 6) gn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Zm(a) && (t = ya(e, r), t === 2 && (u = ao(e), u !== 0 && (r = u, t = Ti(e, u))), t === 1)) throw n = rl, zn(e, 0), gn(e, r), lt(e, Oe()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            On(e, rt, Yt);
            break;
          case 3:
            if (gn(e, r), (r & 130023424) === r && (t = Ci + 500 - Oe(), 10 < t)) {
              if (Nl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Ze(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = $o(On.bind(null, e, rt, Yt), t);
              break;
            }
            On(e, rt, Yt);
            break;
          case 4:
            if (gn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - St(r);
              u = 1 << d, d = t[d], d > a && (a = d), r &= ~u;
            }
            if (r = a, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = $o(On.bind(null, e, rt, Yt), r);
              break;
            }
            On(e, rt, Yt);
            break;
          case 5:
            On(e, rt, Yt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return lt(e, Oe()), e.callbackNode === n ? Yc.bind(null, e) : null;
  }
  function Ti(e, t) {
    var n = ll;
    return e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256), e = ya(e, t), e !== 2 && (t = rt, rt = n, t !== null && Ri(t)), e;
  }
  function Ri(e) {
    rt === null ? rt = e : rt.push.apply(rt, e);
  }
  function Zm(e) {
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
    for (t &= ~Si, t &= ~da, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Kc(e) {
    if ((pe & 6) !== 0) throw Error(s(327));
    fr();
    var t = Nl(e, 0);
    if ((t & 1) === 0) return lt(e, Oe()), null;
    var n = ya(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ao(e);
      r !== 0 && (t = r, n = Ti(e, r));
    }
    if (n === 1) throw n = rl, zn(e, 0), gn(e, t), lt(e, Oe()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, On(e, rt, Yt), lt(e, Oe()), null;
  }
  function Pi(e, t) {
    var n = pe;
    pe |= 1;
    try {
      return e(t);
    } finally {
      pe = n, pe === 0 && (dr = Oe() + 500, Hl && dn());
    }
  }
  function Dn(e) {
    vn !== null && vn.tag === 0 && (pe & 6) === 0 && fr();
    var t = pe;
    pe |= 1;
    var n = _t.transition, r = ke;
    try {
      if (_t.transition = null, ke = 1, e) return e();
    } finally {
      ke = r, _t.transition = n, pe = t, (pe & 6) === 0 && dn();
    }
  }
  function Mi() {
    dt = cr.current, Te(cr);
  }
  function zn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Pm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (jo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Bl();
          break;
        case 3:
          ir(), Te(et), Te(Ye), Jo();
          break;
        case 5:
          Go(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          Te(Ie);
          break;
        case 19:
          Te(Ie);
          break;
        case 10:
          Vo(r.type._context);
          break;
        case 22:
        case 23:
          Mi();
      }
      n = n.return;
    }
    if (Be = e, Fe = e = _n(e.current, null), Qe = dt = t, Ue = 0, rl = null, Si = da = $n = 0, rt = ll = null, Mn !== null) {
      for (t = 0; t < Mn.length; t++) if (n = Mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, u = n.pending;
        if (u !== null) {
          var d = u.next;
          u.next = a, r.next = d;
        }
        n.pending = r;
      }
      Mn = null;
    }
    return e;
  }
  function Gc(e, t) {
    do {
      var n = Fe;
      try {
        if (Ho(), ea.current = la, ta) {
          for (var r = $e.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          ta = !1;
        }
        if (In = 0, be = je = $e = null, Xr = !1, Jr = 0, ki.current = null, n === null || n.return === null) {
          Ue = 1, rl = t, Fe = null;
          break;
        }
        e: {
          var u = e, d = n.return, _ = n, w = t;
          if (t = Qe, _.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var I = w, U = _, b = U.tag;
            if ((U.mode & 1) === 0 && (b === 0 || b === 11 || b === 15)) {
              var F = U.alternate;
              F ? (U.updateQueue = F.updateQueue, U.memoizedState = F.memoizedState, U.lanes = F.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var Q = wc(d);
            if (Q !== null) {
              Q.flags &= -257, kc(Q, d, _, u, t), Q.mode & 1 && Ec(u, I, t), t = Q, w = I;
              var G = t.updateQueue;
              if (G === null) {
                var J = /* @__PURE__ */ new Set();
                J.add(w), t.updateQueue = J;
              } else G.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ec(u, I, t), Li();
                break e;
              }
              w = Error(s(426));
            }
          } else if (Pe && _.mode & 1) {
            var Ae = wc(d);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), kc(Ae, d, _, u, t), Bo(sr(w, _));
              break e;
            }
          }
          u = w = sr(w, _), Ue !== 4 && (Ue = 2), ll === null ? ll = [u] : ll.push(u), u = d;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var T = gc(u, w, t);
                Vu(u, T);
                break e;
              case 1:
                _ = w;
                var S = u.type, P = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (hn === null || !hn.has(P)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var B = _c(u, _, t);
                  Vu(u, B);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Zc(n);
      } catch (ee) {
        t = ee, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xc() {
    var e = ca.current;
    return ca.current = la, e === null ? la : e;
  }
  function Li() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Be === null || ($n & 268435455) === 0 && (da & 268435455) === 0 || gn(Be, Qe);
  }
  function ya(e, t) {
    var n = pe;
    pe |= 2;
    var r = Xc();
    (Be !== e || Qe !== t) && (Yt = null, zn(e, t));
    do
      try {
        ep();
        break;
      } catch (a) {
        Gc(e, a);
      }
    while (!0);
    if (Ho(), pe = n, ca.current = r, Fe !== null) throw Error(s(261));
    return Be = null, Qe = 0, Ue;
  }
  function ep() {
    for (; Fe !== null; ) Jc(Fe);
  }
  function tp() {
    for (; Fe !== null && !xf(); ) Jc(Fe);
  }
  function Jc(e) {
    var t = nd(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? Zc(e) : Fe = t, ki.current = null;
  }
  function Zc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = qm(n, t, dt), n !== null) {
          Fe = n;
          return;
        }
      } else {
        if (n = Ym(n, t), n !== null) {
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
    var r = ke, a = _t.transition;
    try {
      _t.transition = null, ke = 1, np(e, t, n, r);
    } finally {
      _t.transition = a, ke = r;
    }
    return null;
  }
  function np(e, t, n, r) {
    do
      fr();
    while (vn !== null);
    if ((pe & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Of(e, u), e === Be && (Fe = Be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ma || (ma = !0, rd(wl, function() {
      return fr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = _t.transition, _t.transition = null;
      var d = ke;
      ke = 1;
      var _ = pe;
      pe |= 4, ki.current = null, Gm(e, n), Wc(n, e), km(Lo), Rl = !!Mo, Lo = Mo = null, e.current = n, Xm(n), Tf(), pe = _, ke = d, _t.transition = u;
    } else e.current = n;
    if (ma && (ma = !1, vn = e, pa = a), u = e.pendingLanes, u === 0 && (hn = null), Mf(n.stateNode), lt(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (fa) throw fa = !1, e = Ni, Ni = null, e;
    return (pa & 1) !== 0 && e.tag !== 0 && fr(), u = e.pendingLanes, (u & 1) !== 0 ? e === xi ? al++ : (al = 0, xi = e) : al = 0, dn(), null;
  }
  function fr() {
    if (vn !== null) {
      var e = bs(pa), t = _t.transition, n = ke;
      try {
        if (_t.transition = null, ke = 16 > e ? 16 : e, vn === null) var r = !1;
        else {
          if (e = vn, vn = null, pa = 0, (pe & 6) !== 0) throw Error(s(331));
          var a = pe;
          for (pe |= 4, q = e.current; q !== null; ) {
            var u = q, d = u.child;
            if ((q.flags & 16) !== 0) {
              var _ = u.deletions;
              if (_ !== null) {
                for (var w = 0; w < _.length; w++) {
                  var I = _[w];
                  for (q = I; q !== null; ) {
                    var U = q;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nl(8, U, u);
                    }
                    var b = U.child;
                    if (b !== null) b.return = U, q = b;
                    else for (; q !== null; ) {
                      U = q;
                      var F = U.sibling, Q = U.return;
                      if (Fc(U), U === I) {
                        q = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = Q, q = F;
                        break;
                      }
                      q = Q;
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
                q = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && d !== null) d.return = u, q = d;
            else e: for (; q !== null; ) {
              if (u = q, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  nl(9, u, u.return);
              }
              var T = u.sibling;
              if (T !== null) {
                T.return = u.return, q = T;
                break e;
              }
              q = u.return;
            }
          }
          var S = e.current;
          for (q = S; q !== null; ) {
            d = q;
            var P = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && P !== null) P.return = d, q = P;
            else e: for (d = S; q !== null; ) {
              if (_ = q, (_.flags & 2048) !== 0) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ua(9, _);
                }
              } catch (ee) {
                ze(_, _.return, ee);
              }
              if (_ === d) {
                q = null;
                break e;
              }
              var B = _.sibling;
              if (B !== null) {
                B.return = _.return, q = B;
                break e;
              }
              q = _.return;
            }
          }
          if (pe = a, dn(), It && typeof It.onPostCommitFiberRoot == "function") try {
            It.onPostCommitFiberRoot(kl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ke = n, _t.transition = t;
      }
    }
    return !1;
  }
  function ed(e, t, n) {
    t = sr(n, t), t = gc(e, t, 1), e = mn(e, t, 1), t = Ze(), e !== null && (Pr(e, 1, t), lt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) ed(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hn === null || !hn.has(r))) {
          e = sr(n, e), e = _c(t, e, 1), t = mn(t, e, 1), e = Ze(), t !== null && (Pr(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function rp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ze(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (Qe & n) === n && (Ue === 4 || Ue === 3 && (Qe & 130023424) === Qe && 500 > Oe() - Ci ? zn(e, 0) : Si |= n), lt(e, t);
  }
  function td(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Cl, Cl <<= 1, (Cl & 130023424) === 0 && (Cl = 4194304)));
    var n = Ze();
    e = Vt(e, t), e !== null && (Pr(e, t, n), lt(e, n));
  }
  function lp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), td(e, n);
  }
  function ap(e, t) {
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
    r !== null && r.delete(t), td(e, n);
  }
  var nd;
  nd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return nt = !1, Qm(e, t, n);
      nt = (e.flags & 131072) !== 0;
    }
    else nt = !1, Pe && (t.flags & 1048576) !== 0 && zu(t, Ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var a = er(t, Ye.current);
        or(t, n), a = ti(null, t, r, e, a, n);
        var u = ni();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (u = !0, Wl(t)) : u = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Yo(t), a.updater = aa, t.stateNode = a, a._reactInternals = t, si(t, r, e, n), t = fi(null, t, r, !0, u, n)) : (t.tag = 0, Pe && u && Fo(t), Je(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ia(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = ip(r), e = xt(r, e), a) {
            case 0:
              t = di(null, t, r, e, n);
              break e;
            case 1:
              t = Rc(null, t, r, e, n);
              break e;
            case 11:
              t = Sc(null, t, r, e, n);
              break e;
            case 14:
              t = Cc(null, t, r, xt(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), di(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), Rc(e, t, r, a, n);
      case 3:
        e: {
          if (Pc(t), e === null) throw Error(s(387));
          r = t.pendingProps, u = t.memoizedState, a = u.element, Hu(e, t), Jl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            a = sr(Error(s(423)), t), t = Mc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = sr(Error(s(424)), t), t = Mc(e, t, r, n, a);
            break e;
          } else for (ct = sn(t.stateNode.containerInfo.firstChild), ut = t, Pe = !0, Nt = null, n = Bu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
        return qu(t), e === null && bo(t), r = t.type, a = t.pendingProps, u = e !== null ? e.memoizedProps : null, d = a.children, Io(r, a) ? d = null : u !== null && Io(r, u) && (t.flags |= 32), Tc(e, t), Je(e, t, d, n), t.child;
      case 6:
        return e === null && bo(t), null;
      case 13:
        return Lc(e, t, n);
      case 4:
        return Ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lr(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), Sc(e, t, r, a, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, u = t.memoizedProps, d = a.value, Ce(Kl, r._currentValue), r._currentValue = d, u !== null) if (Ct(u.value, d)) {
            if (u.children === a.children && !et.current) {
              t = qt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var _ = u.dependencies;
            if (_ !== null) {
              d = u.child;
              for (var w = _.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (u.tag === 1) {
                    w = Qt(-1, n & -n), w.tag = 2;
                    var I = u.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var U = I.pending;
                      U === null ? w.next = w : (w.next = U.next, U.next = w), I.pending = w;
                    }
                  }
                  u.lanes |= n, w = u.alternate, w !== null && (w.lanes |= n), Qo(
                    u.return,
                    n,
                    t
                  ), _.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (u.tag === 10) d = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (d = u.return, d === null) throw Error(s(341));
              d.lanes |= n, _ = d.alternate, _ !== null && (_.lanes |= n), Qo(d, n, t), d = u.sibling;
            } else d = u.child;
            if (d !== null) d.return = u;
            else for (d = u; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (u = d.sibling, u !== null) {
                u.return = d.return, d = u;
                break;
              }
              d = d.return;
            }
            u = d;
          }
          Je(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, or(t, n), a = yt(a), r = r(a), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = xt(r, t.pendingProps), a = xt(r.type, a), Cc(e, t, r, a, n);
      case 15:
        return Nc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), ia(e, t), t.tag = 1, tt(r) ? (e = !0, Wl(t)) : e = !1, or(t, n), vc(t, r, a), si(t, r, a, n), fi(null, t, r, !0, e, n);
      case 19:
        return $c(e, t, n);
      case 22:
        return xc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function rd(e, t) {
    return Os(e, t);
  }
  function op(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Et(e, t, n, r) {
    return new op(e, t, n, r);
  }
  function Ii(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ip(e) {
    if (typeof e == "function") return Ii(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ue) return 11;
      if (e === X) return 14;
    }
    return 2;
  }
  function _n(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ga(e, t, n, r, a, u) {
    var d = 2;
    if (r = e, typeof e == "function") Ii(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case K:
        return An(n.children, a, u, t);
      case ne:
        d = 8, a |= 8;
        break;
      case ge:
        return e = Et(12, n, t, a | 2), e.elementType = ge, e.lanes = u, e;
      case Ne:
        return e = Et(13, n, t, a), e.elementType = Ne, e.lanes = u, e;
      case De:
        return e = Et(19, n, t, a), e.elementType = De, e.lanes = u, e;
      case de:
        return _a(n, a, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case _e:
            d = 10;
            break e;
          case oe:
            d = 9;
            break e;
          case ue:
            d = 11;
            break e;
          case X:
            d = 14;
            break e;
          case W:
            d = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = Et(d, n, t, a), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function An(e, t, n, r) {
    return e = Et(7, e, r, t), e.lanes = n, e;
  }
  function _a(e, t, n, r) {
    return e = Et(22, e, r, t), e.elementType = de, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function $i(e, t, n) {
    return e = Et(6, e, null, t), e.lanes = n, e;
  }
  function Di(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function sp(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oo(0), this.expirationTimes = oo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function zi(e, t, n, r, a, u, d, _, w) {
    return e = new sp(e, t, n, _, w), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Et(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yo(u), e;
  }
  function up(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: A, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ld(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (Nn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      if (tt(n)) return Iu(e, n, t);
    }
    return t;
  }
  function ad(e, t, n, r, a, u, d, _, w) {
    return e = zi(n, r, !0, e, a, u, d, _, w), e.context = ld(null), n = e.current, r = Ze(), a = yn(n), u = Qt(r, a), u.callback = t ?? null, mn(n, u, a), e.current.lanes = a, Pr(e, a, r), lt(e, r), e;
  }
  function Ea(e, t, n, r) {
    var a = t.current, u = Ze(), d = yn(a);
    return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qt(u, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mn(a, t, d), e !== null && (Pt(e, a, d, u), Xl(e, a, d)), d;
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
  function od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oi(e, t) {
    od(e, t), (e = e.alternate) && od(e, t);
  }
  function cp() {
    return null;
  }
  var id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = Ai.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ea(e, t, null, null);
  }, ka.prototype.unmount = Ai.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Dn(function() {
        Ea(null, e, null, null);
      }), t[bt] = null;
    }
  };
  function ka(e) {
    this._internalRoot = e;
  }
  ka.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Hs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++) ;
      ln.splice(n, 0, e), n === 0 && qs(e);
    }
  };
  function Fi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function sd() {
  }
  function dp(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var I = wa(d);
          u.call(I);
        };
      }
      var d = ad(t, r, e, 0, null, !1, !1, "", sd);
      return e._reactRootContainer = d, e[bt] = d.current, Wr(e.nodeType === 8 ? e.parentNode : e), Dn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var _ = r;
      r = function() {
        var I = wa(w);
        _.call(I);
      };
    }
    var w = zi(e, 0, !1, null, null, !1, !1, "", sd);
    return e._reactRootContainer = w, e[bt] = w.current, Wr(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
      Ea(t, w, n, r);
    }), w;
  }
  function Ca(e, t, n, r, a) {
    var u = n._reactRootContainer;
    if (u) {
      var d = u;
      if (typeof a == "function") {
        var _ = a;
        a = function() {
          var w = wa(d);
          _.call(w);
        };
      }
      Ea(t, d, e, a);
    } else d = dp(n, t, e, a, r);
    return wa(d);
  }
  Bs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Rr(t.pendingLanes);
          n !== 0 && (io(t, n | 1), lt(t, Oe()), (pe & 6) === 0 && (dr = Oe() + 500, dn()));
        }
        break;
      case 13:
        Dn(function() {
          var r = Vt(e, 1);
          if (r !== null) {
            var a = Ze();
            Pt(r, e, 1, a);
          }
        }), Oi(e, 1);
    }
  }, so = function(e) {
    if (e.tag === 13) {
      var t = Vt(e, 134217728);
      if (t !== null) {
        var n = Ze();
        Pt(t, e, 134217728, n);
      }
      Oi(e, 134217728);
    }
  }, Ws = function(e) {
    if (e.tag === 13) {
      var t = yn(e), n = Vt(e, t);
      if (n !== null) {
        var r = Ze();
        Pt(n, e, t, r);
      }
      Oi(e, t);
    }
  }, Hs = function() {
    return ke;
  }, Vs = function(e, t) {
    var n = ke;
    try {
      return ke = e, t();
    } finally {
      ke = n;
    }
  }, eo = function(e, t, n) {
    switch (t) {
      case "input":
        if (Qa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = bl(r);
              if (!a) throw Error(s(90));
              hs(r), Qa(r, a);
            }
          }
        }
        break;
      case "textarea":
        Es(e, n);
        break;
      case "select":
        t = n.value, t != null && Bn(e, !!n.multiple, t, !1);
    }
  }, Ps = Pi, Ms = Dn;
  var fp = { usingClientEntryPoint: !1, Events: [Qr, Jn, bl, Ts, Rs, Pi] }, ol = { findFiberByHostInstance: xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mp = { bundleType: ol.bundleType, version: ol.version, rendererPackageName: ol.rendererPackageName, rendererConfig: ol.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ds(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ol.findFiberByHostInstance || cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Na.isDisabled && Na.supportsFiber) try {
      kl = Na.inject(mp), It = Na;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fi(t)) throw Error(s(200));
    return up(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!Fi(e)) throw Error(s(299));
    var n = !1, r = "", a = id;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = zi(e, 1, !1, null, null, n, !1, r, a), e[bt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new Ai(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Ds(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return Dn(e);
  }, at.hydrate = function(e, t, n) {
    if (!Sa(t)) throw Error(s(200));
    return Ca(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!Fi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, u = "", d = id;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = ad(t, null, e, 1, n ?? null, a, !1, u, d), e[bt] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ka(t);
  }, at.render = function(e, t, n) {
    if (!Sa(t)) throw Error(s(200));
    return Ca(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!Sa(e)) throw Error(s(40));
    return e._reactRootContainer ? (Dn(function() {
      Ca(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bt] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = Pi, at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sa(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Ca(e, t, n, !1, r);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
var pd;
function _p() {
  if (pd) return Ui.exports;
  pd = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Ui.exports = gp(), Ui.exports;
}
var hd;
function Ep() {
  if (hd) return xa;
  hd = 1;
  var l = _p();
  return xa.createRoot = l.createRoot, xa.hydrateRoot = l.hydrateRoot, xa;
}
var wp = Ep();
const kp = /* @__PURE__ */ bd(wp);
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
var vd = "popstate";
function yd(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Sp(l = {}) {
  function o(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = bn(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), ns(
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
      let y = f.location.href, E = y.indexOf("#");
      h = E === -1 ? y : y.slice(0, E);
    }
    return h + "#" + (typeof m == "string" ? m : fl(m));
  }
  function c(f, m) {
    wt(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return Np(
    o,
    s,
    c,
    l
  );
}
function Le(l, o) {
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
function Cp() {
  return Math.random().toString(36).substring(2, 10);
}
function gd(l, o) {
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
function ns(l, o, s = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? bn(o) : o,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || c || Cp(),
    mask: f
  };
}
function fl({
  pathname: l = "/",
  search: o = "",
  hash: s = ""
}) {
  return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function bn(l) {
  let o = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (o.hash = l.substring(s), l = l.substring(0, s));
    let c = l.indexOf("?");
    c >= 0 && (o.search = l.substring(c), l = l.substring(0, c)), l && (o.pathname = l);
  }
  return o;
}
function Np(l, o, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", y = null, E = C();
  E == null && (E = 0, p.replaceState({ ...p.state, idx: E }, ""));
  function C() {
    return (p.state || { idx: null }).idx;
  }
  function g() {
    h = "POP";
    let k = C(), L = k == null ? null : k - E;
    E = k, y && y({ action: h, location: $.location, delta: L });
  }
  function N(k, L) {
    h = "PUSH";
    let R = yd(k) ? k : ns($.location, k, L);
    s && s(R, k), E = C() + 1;
    let z = gd(R, E), H = $.createHref(R.mask || R);
    try {
      p.pushState(z, "", H);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError")
        throw O;
      f.location.assign(H);
    }
    m && y && y({ action: h, location: $.location, delta: 1 });
  }
  function M(k, L) {
    h = "REPLACE";
    let R = yd(k) ? k : ns($.location, k, L);
    s && s(R, k), E = C();
    let z = gd(R, E), H = $.createHref(R.mask || R);
    p.replaceState(z, "", H), m && y && y({ action: h, location: $.location, delta: 0 });
  }
  function D(k) {
    return xp(f, k);
  }
  let $ = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(k) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(vd, g), y = k, () => {
        f.removeEventListener(vd, g), y = null;
      };
    },
    createHref(k) {
      return o(f, k);
    },
    createURL: D,
    encodeLocation(k) {
      let L = D(k);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: N,
    replace: M,
    go(k) {
      return p.go(k);
    }
  };
  return $;
}
function xp(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Le(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : fl(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Wd(l, o, s = "/") {
  return Tp(l, o, s, !1);
}
function Tp(l, o, s, c, f) {
  let m = typeof o == "string" ? bn(o) : o, p = Gt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = Rp(l), y = null, E = Up(p);
  for (let C = 0; y == null && C < h.length; ++C)
    y = Fp(
      h[C],
      E,
      c
    );
  return y;
}
function Rp(l) {
  let o = Hd(l);
  return Pp(o), o;
}
function Hd(l, o = [], s = [], c = "", f = !1) {
  let m = (p, h, y = f, E) => {
    let C = {
      relativePath: E === void 0 ? p.path || "" : E,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (C.relativePath.startsWith("/")) {
      if (!C.relativePath.startsWith(c) && y)
        return;
      Le(
        C.relativePath.startsWith(c),
        `Absolute route path "${C.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), C.relativePath = C.relativePath.slice(c.length);
    }
    let g = Mt([c, C.relativePath]), N = s.concat(C);
    p.children && p.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
    ), Hd(
      p.children,
      o,
      N,
      g,
      y
    )), !(p.path == null && !p.index) && o.push({
      path: g,
      score: Op(g, p.index),
      routesMeta: N
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let E of Vd(p.path))
        m(p, h, !0, E);
  }), o;
}
function Vd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [s, ...c] = o, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = Vd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), f && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function Pp(l) {
  l.sort(
    (o, s) => o.score !== s.score ? s.score - o.score : Ap(
      o.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Mp = /^:[\w-]+$/, Lp = 3, Ip = 2, $p = 1, Dp = 10, zp = -2, _d = (l) => l === "*";
function Op(l, o) {
  let s = l.split("/"), c = s.length;
  return s.some(_d) && (c += zp), o && (c += Ip), s.filter((f) => !_d(f)).reduce(
    (f, m) => f + (Mp.test(m) ? Lp : m === "" ? $p : Dp),
    c
  );
}
function Ap(l, o) {
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
function Fp(l, o, s = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], E = h === c.length - 1, C = m === "/" ? o : o.slice(m.length) || "/", g = Oa(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: E },
      C
    ), N = y.route;
    if (!g && E && s && !c[c.length - 1].route.index && (g = Oa(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      C
    )), !g)
      return null;
    Object.assign(f, g.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Mt([m, g.pathname]),
      pathnameBase: Hp(
        Mt([m, g.pathnameBase])
      ),
      route: N
    }), g.pathnameBase !== "/" && (m = Mt([m, g.pathnameBase]));
  }
  return p;
}
function Oa(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = jp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (E, { paramName: C, isOptional: g }, N) => {
        if (C === "*") {
          let D = h[N] || "";
          p = m.slice(0, m.length - D.length).replace(/(.)\/+$/, "$1");
        }
        const M = h[N];
        return g && !M ? E[C] = void 0 : E[C] = (M || "").replace(/%2F/g, "/"), E;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function jp(l, o = !1, s = !0) {
  wt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, E, C) => {
      if (c.push({ paramName: h, isOptional: y != null }), y) {
        let g = C.charAt(E + p.length);
        return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function Up(l) {
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
  let s = o.endsWith("/") ? o.length - 1 : o.length, c = l.charAt(s);
  return c && c !== "/" ? null : l.slice(s) || "/";
}
var bp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Bp(l, o = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? bn(l) : l, m;
  return s ? (s = Qd(s), s.startsWith("/") ? m = Ed(s.substring(1), "/") : m = Ed(s, o)) : m = o, {
    pathname: m,
    search: Vp(c),
    hash: Qp(f)
  };
}
function Ed(l, o) {
  let s = Aa(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function Wi(l, o, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Wp(l) {
  return l.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function os(l) {
  let o = Wp(l);
  return o.map(
    (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function ba(l, o, s, c = !1) {
  let f;
  typeof l == "string" ? f = bn(l) : (f = { ...l }, Le(
    !f.pathname || !f.pathname.includes("?"),
    Wi("?", "pathname", "search", f)
  ), Le(
    !f.pathname || !f.pathname.includes("#"),
    Wi("#", "pathname", "hash", f)
  ), Le(
    !f.search || !f.search.includes("#"),
    Wi("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let g = o.length - 1;
    if (!c && p.startsWith("..")) {
      let N = p.split("/");
      for (; N[0] === ".."; )
        N.shift(), g -= 1;
      f.pathname = N.join("/");
    }
    h = g >= 0 ? o[g] : "/";
  }
  let y = Bp(f, h), E = p && p !== "/" && p.endsWith("/"), C = (m || p === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (E || C) && (y.pathname += "/"), y;
}
var Qd = (l) => l.replace(/\/\/+/g, "/"), Mt = (l) => Qd(l.join("/")), Aa = (l) => l.replace(/\/+$/, ""), Hp = (l) => Aa(l).replace(/^\/*/, "/"), Vp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Qp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, qp = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Yp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Kp(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Mt(o) || "/";
}
var qd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Yd(l, o) {
  let s = l;
  if (typeof s != "string" || !bp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (qd)
    try {
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), h = Gt(p.pathname, o);
      p.origin === m.origin && h != null ? s = h + p.search + p.hash : f = !0;
    } catch {
      wt(
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
var Kd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Kd
);
var Gp = [
  "GET",
  ...Kd
];
new Set(Gp);
var hr = v.createContext(null);
hr.displayName = "DataRouter";
var Ba = v.createContext(null);
Ba.displayName = "DataRouterState";
var Gd = v.createContext(!1);
function Xp() {
  return v.useContext(Gd);
}
var Xd = v.createContext({
  isTransitioning: !1
});
Xd.displayName = "ViewTransition";
var Jp = v.createContext(
  /* @__PURE__ */ new Map()
);
Jp.displayName = "Fetchers";
var Zp = v.createContext(null);
Zp.displayName = "Await";
var ft = v.createContext(
  null
);
ft.displayName = "Navigation";
var ml = v.createContext(
  null
);
ml.displayName = "Location";
var Ut = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ut.displayName = "Route";
var is = v.createContext(null);
is.displayName = "RouteError";
var Jd = "REACT_ROUTER_ERROR", eh = "REDIRECT", th = "ROUTE_ERROR_RESPONSE";
function nh(l) {
  if (l.startsWith(`${Jd}:${eh}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function rh(l) {
  if (l.startsWith(
    `${Jd}:${th}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new qp(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function lh(l, { relative: o } = {}) {
  Le(
    vr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = v.useContext(ft), { hash: f, pathname: m, search: p } = pl(l, { relative: o }), h = m;
  return s !== "/" && (h = m === "/" ? s : Mt([s, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function vr() {
  return v.useContext(ml) != null;
}
function kt() {
  return Le(
    vr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(ml).location;
}
var Zd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ef(l) {
  v.useContext(ft).static || v.useLayoutEffect(l);
}
function yr() {
  let { isDataRoute: l } = v.useContext(Ut);
  return l ? yh() : ah();
}
function ah() {
  Le(
    vr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(hr), { basename: o, navigator: s } = v.useContext(ft), { matches: c } = v.useContext(Ut), { pathname: f } = kt(), m = JSON.stringify(os(c)), p = v.useRef(!1);
  return ef(() => {
    p.current = !0;
  }), v.useCallback(
    (y, E = {}) => {
      if (wt(p.current, Zd), !p.current) return;
      if (typeof y == "number") {
        s.go(y);
        return;
      }
      let C = ba(
        y,
        JSON.parse(m),
        f,
        E.relative === "path"
      );
      l == null && o !== "/" && (C.pathname = C.pathname === "/" ? o : Mt([o, C.pathname])), (E.replace ? s.replace : s.push)(
        C,
        E.state,
        E
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
function pl(l, { relative: o } = {}) {
  let { matches: s } = v.useContext(Ut), { pathname: c } = kt(), f = JSON.stringify(os(s));
  return v.useMemo(
    () => ba(
      l,
      JSON.parse(f),
      c,
      o === "path"
    ),
    [l, f, c, o]
  );
}
function oh(l, o) {
  return tf(l, o);
}
function tf(l, o, s) {
  var k;
  Le(
    vr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(ft), { matches: f } = v.useContext(Ut), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", E = m && m.route;
  {
    let L = E && E.path || "";
    rf(
      h,
      !E || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`
    );
  }
  let C = kt(), g;
  if (o) {
    let L = typeof o == "string" ? bn(o) : o;
    Le(
      y === "/" || ((k = L.pathname) == null ? void 0 : k.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ), g = L;
  } else
    g = C;
  let N = g.pathname || "/", M = N;
  if (y !== "/") {
    let L = y.replace(/^\//, "").split("/");
    M = "/" + N.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let D = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (L) => Object.assign(L, {
        route: s.manifest[L.route.id] || L.route
      })
    )
  ) : Wd(l, { pathname: M });
  wt(
    E || D != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), wt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let $ = dh(
    D && D.map(
      (L) => Object.assign({}, L, {
        params: Object.assign({}, p, L.params),
        pathname: Mt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            L.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : L.pathname
        ]),
        pathnameBase: L.pathnameBase === "/" ? y : Mt([
          y,
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
  return o && $ ? /* @__PURE__ */ v.createElement(
    ml.Provider,
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
  let l = vh(), o = Yp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ v.createElement("pre", { style: f }, s) : null, p);
}
var sh = /* @__PURE__ */ v.createElement(ih, null), nf = class extends v.Component {
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
      const s = rh(l.digest);
      s && (l = s);
    }
    let o = l !== void 0 ? /* @__PURE__ */ v.createElement(Ut.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      is.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(uh, { error: l }, o) : o;
  }
};
nf.contextType = Gd;
var Hi = /* @__PURE__ */ new WeakMap();
function uh({
  children: l,
  error: o
}) {
  let { basename: s } = v.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = nh(o.digest);
    if (c) {
      let f = Hi.get(o);
      if (f) throw f;
      let m = Yd(c.location, s);
      if (qd && !Hi.get(o))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw Hi.set(o, p), p;
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
function ch({ routeContext: l, match: o, children: s }) {
  let c = v.useContext(hr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ v.createElement(Ut.Provider, { value: l }, s);
}
function dh(l, o = [], s) {
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
    let C = f.findIndex(
      (g) => g.route.id && (m == null ? void 0 : m[g.route.id]) !== void 0
    );
    Le(
      C >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, C + 1)
    );
  }
  let p = !1, h = -1;
  if (s && c) {
    p = c.renderFallback;
    for (let C = 0; C < f.length; C++) {
      let g = f[C];
      if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = C), g.route.id) {
        let { loaderData: N, errors: M } = c, D = g.route.loader && !N.hasOwnProperty(g.route.id) && (!M || M[g.route.id] === void 0);
        if (g.route.lazy || D) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let y = s == null ? void 0 : s.onError, E = c && y ? (C, g) => {
    var N, M;
    y(C, {
      location: c.location,
      params: ((M = (N = c.matches) == null ? void 0 : N[0]) == null ? void 0 : M.params) ?? {},
      pattern: Kp(c.matches),
      errorInfo: g
    });
  } : void 0;
  return f.reduceRight(
    (C, g, N) => {
      let M, D = !1, $ = null, k = null;
      c && (M = m && g.route.id ? m[g.route.id] : void 0, $ = g.route.errorElement || sh, p && (h < 0 && N === 0 ? (rf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), D = !0, k = null) : h === N && (D = !0, k = g.route.hydrateFallbackElement || null)));
      let L = o.concat(f.slice(0, N + 1)), R = () => {
        let z;
        return M ? z = $ : D ? z = k : g.route.Component ? z = /* @__PURE__ */ v.createElement(g.route.Component, null) : g.route.element ? z = g.route.element : z = C, /* @__PURE__ */ v.createElement(
          ch,
          {
            match: g,
            routeContext: {
              outlet: C,
              matches: L,
              isDataRoute: c != null
            },
            children: z
          }
        );
      };
      return c && (g.route.ErrorBoundary || g.route.errorElement || N === 0) ? /* @__PURE__ */ v.createElement(
        nf,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: $,
          error: M,
          children: R(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          onError: E
        }
      ) : R();
    },
    null
  );
}
function ss(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fh(l) {
  let o = v.useContext(hr);
  return Le(o, ss(l)), o;
}
function mh(l) {
  let o = v.useContext(Ba);
  return Le(o, ss(l)), o;
}
function ph(l) {
  let o = v.useContext(Ut);
  return Le(o, ss(l)), o;
}
function us(l) {
  let o = ph(l), s = o.matches[o.matches.length - 1];
  return Le(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function hh() {
  return us(
    "useRouteId"
    /* UseRouteId */
  );
}
function vh() {
  var c;
  let l = v.useContext(is), o = mh(
    "useRouteError"
    /* UseRouteError */
  ), s = us(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[s];
}
function yh() {
  let { router: l } = fh(
    "useNavigate"
    /* UseNavigateStable */
  ), o = us(
    "useNavigate"
    /* UseNavigateStable */
  ), s = v.useRef(!1);
  return ef(() => {
    s.current = !0;
  }), v.useCallback(
    async (f, m = {}) => {
      wt(s.current, Zd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var wd = {};
function rf(l, o, s) {
  !o && !wd[l] && (wd[l] = !0, wt(!1, s));
}
v.memo(gh);
function gh({
  routes: l,
  manifest: o,
  future: s,
  state: c,
  isStatic: f,
  onError: m
}) {
  return tf(l, void 0, {
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
  Le(
    vr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = v.useContext(ft);
  wt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = v.useContext(Ut), { pathname: p } = kt(), h = yr(), y = ba(
    l,
    os(m),
    p,
    c === "path"
  ), E = JSON.stringify(y);
  return v.useEffect(() => {
    h(JSON.parse(E), { replace: o, state: s, relative: c });
  }, [h, E, c, o, s]), null;
}
function ot(l) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function _h({
  basename: l = "/",
  children: o = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: m = !1,
  useTransitions: p
}) {
  Le(
    !vr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), y = v.useMemo(
    () => ({
      basename: h,
      navigator: f,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [h, f, m, p]
  );
  typeof s == "string" && (s = bn(s));
  let {
    pathname: E = "/",
    search: C = "",
    hash: g = "",
    state: N = null,
    key: M = "default",
    mask: D
  } = s, $ = v.useMemo(() => {
    let k = Gt(E, h);
    return k == null ? null : {
      location: {
        pathname: k,
        search: C,
        hash: g,
        state: N,
        key: M,
        mask: D
      },
      navigationType: c
    };
  }, [h, E, C, g, N, M, c, D]);
  return wt(
    $ != null,
    `<Router basename="${h}"> is not able to match the URL "${E}${C}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), $ == null ? null : /* @__PURE__ */ v.createElement(ft.Provider, { value: y }, /* @__PURE__ */ v.createElement(ml.Provider, { children: o, value: $ }));
}
function Eh({
  children: l,
  location: o
}) {
  return oh(rs(l), o);
}
function rs(l, o = []) {
  let s = [];
  return v.Children.forEach(l, (c, f) => {
    if (!v.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === v.Fragment) {
      s.push.apply(
        s,
        rs(c.props.children, m)
      );
      return;
    }
    Le(
      c.type === ot,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
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
    c.props.children && (p.children = rs(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var Da = "get", za = "application/x-www-form-urlencoded";
function Wa(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function wh(l) {
  return Wa(l) && l.tagName.toLowerCase() === "button";
}
function kh(l) {
  return Wa(l) && l.tagName.toLowerCase() === "form";
}
function Sh(l) {
  return Wa(l) && l.tagName.toLowerCase() === "input";
}
function Ch(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Nh(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !Ch(l);
}
var Ra = null;
function xh() {
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
var Th = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Vi(l) {
  return l != null && !Th.has(l) ? (wt(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${za}"`
  ), null) : l;
}
function Rh(l, o) {
  let s, c, f, m, p;
  if (kh(l)) {
    let h = l.getAttribute("action");
    c = h ? Gt(h, o) : null, s = l.getAttribute("method") || Da, f = Vi(l.getAttribute("enctype")) || za, m = new FormData(l);
  } else if (wh(l) || Sh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Gt(y, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || Da, f = Vi(l.getAttribute("formenctype")) || Vi(h.getAttribute("enctype")) || za, m = new FormData(h, l), !xh()) {
      let { name: E, type: C, value: g } = l;
      if (C === "image") {
        let N = E ? `${E}.` : "";
        m.append(`${N}x`, "0"), m.append(`${N}y`, "0");
      } else E && m.append(E, g);
    }
  } else {
    if (Wa(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Da, c = null, f = za, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function cs(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function lf(l, o, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Gt(f.pathname, o) === "/" ? f.pathname = `${Aa(o)}/_root.${c}` : f.pathname = `${Aa(f.pathname)}.${c}`, f;
}
async function Ph(l, o) {
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
function Mh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Lh(l, o, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = o.routes[f.route.id];
      if (m) {
        let p = await Ph(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return zh(
    c.flat(1).filter(Mh).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function kd(l, o, s, c, f, m) {
  let p = (y, E) => s[E] ? y.route.id !== s[E].route.id : !0, h = (y, E) => {
    var C;
    return (
      // param change, /users/123 -> /users/456
      s[E].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((C = s[E].route.path) == null ? void 0 : C.endsWith("*")) && s[E].params["*"] !== y.params["*"]
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
      let N = y.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((g = s[0]) == null ? void 0 : g.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof N == "boolean")
        return N;
    }
    return !0;
  }) : [];
}
function Ih(l, o, { includeHydrateFallback: s } = {}) {
  return $h(
    l.map((c) => {
      let f = o.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function $h(l) {
  return [...new Set(l)];
}
function Dh(l) {
  let o = {}, s = Object.keys(l).sort();
  for (let c of s)
    o[c] = l[c];
  return o;
}
function zh(l, o) {
  let s = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, f) => {
    let m = JSON.stringify(Dh(f));
    return s.has(m) || (s.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function ds() {
  let l = v.useContext(hr);
  return cs(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Oh() {
  let l = v.useContext(Ba);
  return cs(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var fs = v.createContext(void 0);
fs.displayName = "FrameworkContext";
function ms() {
  let l = v.useContext(fs);
  return cs(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Ah(l, o) {
  let s = v.useContext(fs), [c, f] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: E, onMouseLeave: C, onTouchStart: g } = o, N = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let $ = (L) => {
        L.forEach((R) => {
          p(R.isIntersecting);
        });
      }, k = new IntersectionObserver($, { threshold: 0.5 });
      return N.current && k.observe(N.current), () => {
        k.disconnect();
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
    f(!0);
  }, D = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, N, {}] : [
    m,
    N,
    {
      onFocus: il(h, M),
      onBlur: il(y, D),
      onMouseEnter: il(E, M),
      onMouseLeave: il(C, D),
      onTouchStart: il(g, M)
    }
  ] : [!1, N, {}];
}
function il(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function Fh({ page: l, ...o }) {
  let s = Xp(), { router: c } = ds(), f = v.useMemo(
    () => Wd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ v.createElement(Uh, { page: l, matches: f, ...o }) : /* @__PURE__ */ v.createElement(bh, { page: l, matches: f, ...o }) : null;
}
function jh(l) {
  let { manifest: o, routeModules: s } = ms(), [c, f] = v.useState([]);
  return v.useEffect(() => {
    let m = !1;
    return Lh(l, o, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, s]), c;
}
function Uh({
  page: l,
  matches: o,
  ...s
}) {
  let c = kt(), { future: f } = ms(), { basename: m } = ds(), p = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = lf(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, E = [];
    for (let C of o)
      typeof C.route.shouldRevalidate == "function" ? y = !0 : E.push(C.route.id);
    return y && E.length > 0 && h.searchParams.set("_routes", E.join(",")), [h.pathname + h.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...s })));
}
function bh({
  page: l,
  matches: o,
  ...s
}) {
  let c = kt(), { future: f, manifest: m, routeModules: p } = ms(), { basename: h } = ds(), { loaderData: y, matches: E } = Oh(), C = v.useMemo(
    () => kd(
      l,
      o,
      E,
      m,
      c,
      "data"
    ),
    [l, o, E, m, c]
  ), g = v.useMemo(
    () => kd(
      l,
      o,
      E,
      m,
      c,
      "assets"
    ),
    [l, o, E, m, c]
  ), N = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let $ = /* @__PURE__ */ new Set(), k = !1;
    if (o.forEach((R) => {
      var H;
      let z = m.routes[R.route.id];
      !z || !z.hasLoader || (!C.some((O) => O.route.id === R.route.id) && R.route.id in y && ((H = p[R.route.id]) != null && H.shouldRevalidate) || z.hasClientLoader ? k = !0 : $.add(R.route.id));
    }), $.size === 0)
      return [];
    let L = lf(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return k && $.size > 0 && L.searchParams.set(
      "_routes",
      o.filter((R) => $.has(R.route.id)).map((R) => R.route.id).join(",")
    ), [L.pathname + L.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    C,
    o,
    l,
    p
  ]), M = v.useMemo(
    () => Ih(g, m),
    [g, m]
  ), D = jh(g);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, N.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "prefetch", as: "fetch", href: $, ...s })), M.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "modulepreload", href: $, ...s })), D.map(({ key: $, link: k }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: $,
        nonce: s.nonce,
        ...k,
        crossOrigin: k.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function Bh(...l) {
  return (o) => {
    l.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var Wh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Wh && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Hh({
  basename: l,
  children: o,
  useTransitions: s,
  window: c
}) {
  let f = v.useRef();
  f.current == null && (f.current = Sp({ window: c, v5Compat: !0 }));
  let m = f.current, [p, h] = v.useState({
    action: m.action,
    location: m.location
  }), y = v.useCallback(
    (E) => {
      s === !1 ? h(E) : v.startTransition(() => h(E));
    },
    [s]
  );
  return v.useLayoutEffect(() => m.listen(y), [m, y]), /* @__PURE__ */ v.createElement(
    _h,
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
var af = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, of = v.forwardRef(
  function({
    onClick: o,
    discover: s = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: y,
    target: E,
    to: C,
    preventScrollReset: g,
    viewTransition: N,
    defaultShouldRevalidate: M,
    ...D
  }, $) {
    let { basename: k, navigator: L, useTransitions: R } = v.useContext(ft), z = typeof C == "string" && af.test(C), H = Yd(C, k);
    C = H.to;
    let O = lh(C, { relative: f }), A = kt(), K = null;
    if (h) {
      let X = ba(
        h,
        [],
        A.mask ? A.mask.pathname : "/",
        !0
      );
      k !== "/" && (X.pathname = X.pathname === "/" ? k : Mt([k, X.pathname])), K = L.createHref(X);
    }
    let [ne, ge, _e] = Ah(
      c,
      D
    ), oe = qh(C, {
      replace: p,
      mask: h,
      state: y,
      target: E,
      preventScrollReset: g,
      relative: f,
      viewTransition: N,
      defaultShouldRevalidate: M,
      useTransitions: R
    });
    function ue(X) {
      o && o(X), X.defaultPrevented || oe(X);
    }
    let Ne = !(H.isExternal || m), De = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...D,
          ..._e,
          href: (Ne ? K : void 0) || H.absoluteURL || O,
          onClick: Ne ? ue : o,
          ref: Bh($, ge),
          target: E,
          "data-discover": !z && s === "render" ? "true" : void 0
        }
      )
    );
    return ne && !z ? /* @__PURE__ */ v.createElement(v.Fragment, null, De, /* @__PURE__ */ v.createElement(Fh, { page: O })) : De;
  }
);
of.displayName = "Link";
var He = v.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: y,
    ...E
  }, C) {
    let g = pl(p, { relative: E.relative }), N = kt(), M = v.useContext(Ba), { navigator: D, basename: $ } = v.useContext(ft), k = M != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Jh(g) && h === !0, L = D.encodeLocation ? D.encodeLocation(g).pathname : g.pathname, R = N.pathname, z = M && M.navigation && M.navigation.location ? M.navigation.location.pathname : null;
    s || (R = R.toLowerCase(), z = z ? z.toLowerCase() : null, L = L.toLowerCase()), z && $ && (z = Gt(z, $) || z);
    const H = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let O = R === L || !f && R.startsWith(L) && R.charAt(H) === "/", A = z != null && (z === L || !f && z.startsWith(L) && z.charAt(L.length) === "/"), K = {
      isActive: O,
      isPending: A,
      isTransitioning: k
    }, ne = O ? o : void 0, ge;
    typeof c == "function" ? ge = c(K) : ge = [
      c,
      O ? "active" : null,
      A ? "pending" : null,
      k ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let _e = typeof m == "function" ? m(K) : m;
    return /* @__PURE__ */ v.createElement(
      of,
      {
        ...E,
        "aria-current": ne,
        className: ge,
        ref: C,
        style: _e,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(K) : y
    );
  }
);
He.displayName = "NavLink";
var Vh = v.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: s,
    reloadDocument: c,
    replace: f,
    state: m,
    method: p = Da,
    action: h,
    onSubmit: y,
    relative: E,
    preventScrollReset: C,
    viewTransition: g,
    defaultShouldRevalidate: N,
    ...M
  }, D) => {
    let { useTransitions: $ } = v.useContext(ft), k = Gh(), L = Xh(h, { relative: E }), R = p.toLowerCase() === "get" ? "get" : "post", z = typeof h == "string" && af.test(h), H = (O) => {
      if (y && y(O), O.defaultPrevented) return;
      O.preventDefault();
      let A = O.nativeEvent.submitter, K = (A == null ? void 0 : A.getAttribute("formmethod")) || p, ne = () => k(A || O.currentTarget, {
        fetcherKey: o,
        method: K,
        navigate: s,
        replace: f,
        state: m,
        relative: E,
        preventScrollReset: C,
        viewTransition: g,
        defaultShouldRevalidate: N
      });
      $ && s !== !1 ? v.startTransition(() => ne()) : ne();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: D,
        method: R,
        action: L,
        onSubmit: c ? y : H,
        ...M,
        "data-discover": !z && l === "render" ? "true" : void 0
      }
    );
  }
);
Vh.displayName = "Form";
function Qh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sf(l) {
  let o = v.useContext(hr);
  return Le(o, Qh(l)), o;
}
function qh(l, {
  target: o,
  replace: s,
  mask: c,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: y,
  useTransitions: E
} = {}) {
  let C = yr(), g = kt(), N = pl(l, { relative: p });
  return v.useCallback(
    (M) => {
      if (Nh(M, o)) {
        M.preventDefault();
        let D = s !== void 0 ? s : fl(g) === fl(N), $ = () => C(l, {
          replace: D,
          mask: c,
          state: f,
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
      N,
      s,
      c,
      f,
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
var Yh = 0, Kh = () => `__${String(++Yh)}__`;
function Gh() {
  let { router: l } = sf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(ft), s = hh(), c = l.fetch, f = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: E, formData: C, body: g } = Rh(
        m,
        o
      );
      if (p.navigate === !1) {
        let N = p.fetcherKey || Kh();
        await c(N, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: g,
          formMethod: p.method || y,
          formEncType: p.encType || E,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: g,
          formMethod: p.method || y,
          formEncType: p.encType || E,
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
function Xh(l, { relative: o } = {}) {
  let { basename: s } = v.useContext(ft), c = v.useContext(Ut);
  Le(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...pl(l || ".", { relative: o }) }, p = kt();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), y = h.getAll("index");
    if (y.some((C) => C === "")) {
      h.delete("index"), y.filter((g) => g).forEach((g) => h.append("index", g));
      let C = h.toString();
      m.search = C ? `?${C}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Mt([s, m.pathname])), fl(m);
}
function Jh(l, { relative: o } = {}) {
  let s = v.useContext(Xd);
  Le(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = sf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = pl(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Gt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Gt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Oa(f.pathname, p) != null || Oa(f.pathname, m) != null;
}
const uf = v.createContext(null);
function gr() {
  const l = v.useContext(uf);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
var ls = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new WeakMap(), Sd = 0, Zh;
function ev(l) {
  return l ? (Pa.has(l) || (Sd += 1, Pa.set(l, Sd.toString())), Pa.get(l)) : "0";
}
function tv(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? ev(l.root) : l[o]}`).toString();
}
function nv(l) {
  const o = tv(l);
  let s = ls.get(o);
  if (!s) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const E = h.isIntersecting && f.some((C) => h.intersectionRatio >= C);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = E), [...(y = c.get(h.target)) != null ? y : []].forEach((C) => {
          C(E, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), s = {
      id: o,
      observer: m,
      elements: c
    }, ls.set(o, s);
  }
  return s;
}
function rv(l, o, s = {}, c = Zh) {
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
  const { id: f, observer: m, elements: p } = nv(s), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), ls.delete(f));
  };
}
function _r({
  threshold: l,
  delay: o,
  trackVisibility: s,
  rootMargin: c,
  root: f,
  triggerOnce: m,
  skip: p,
  initialInView: h,
  fallbackInView: y,
  onChange: E
} = {}) {
  var C;
  const [g, N] = v.useState(null), M = v.useRef(E), D = v.useRef(h), [$, k] = v.useState({
    inView: !!h,
    entry: void 0
  });
  M.current = E, v.useEffect(
    () => {
      if (D.current === void 0 && (D.current = h), p || !g) return;
      let H;
      return H = rv(
        g,
        (O, A) => {
          const K = D.current;
          D.current = O, !(K === void 0 && !O) && (k({
            inView: O,
            entry: A
          }), M.current && M.current(O, A), A.isIntersecting && m && H && (H(), H = void 0));
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
        H && H();
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
      y,
      o
    ]
  );
  const L = (C = $.entry) == null ? void 0 : C.target, R = v.useRef(void 0);
  !g && L && !m && !p && R.current !== L && (R.current = L, k({
    inView: !!h,
    entry: void 0
  }), D.current = h);
  const z = [N, $.inView, $.entry];
  return z.ref = z[0], z.inView = z[1], z.entry = z[2], z;
}
const mt = (l = 768) => {
  const [o, s] = v.useState(
    window.innerWidth <= l
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), o;
}, lv = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function av() {
  const l = gr(), [o, s] = v.useState(!0), [c, f] = v.useState(null), m = v.useRef(!1), p = v.useCallback(
    async (N = 1, M = !1) => {
      s(!0);
      try {
        const D = lv(
          await l._getShort(
            "get_script_actions_short",
            N
          )
        );
        f(($) => !M || !$ ? D : {
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
    saveScript: async (N) => {
      await l._save(N, "save_script_action"), await p(1);
    },
    updateScript: async (N, M) => {
      await l._update(N, "update_script_action", M), await p(1);
    },
    getScriptAction: async (N) => (await l._getDetail(
      N,
      "get_script_action"
    )).data,
    deleteScriptAction: async (N) => {
      await l._delete(N, "delete_script_action"), await p(1);
    }
  };
}
const ov = "_subtitle_ow5os_1", iv = "_card_ow5os_6", sv = "_content_ow5os_50", uv = "_title_ow5os_58", cv = "_arrow_ow5os_64", sl = {
  subtitle: ov,
  card: iv,
  content: sv,
  title: uv,
  arrow: cv
}, Er = ({
  title: l,
  subTitle: o,
  onClick: s
}) => /* @__PURE__ */ i.createElement(
  "button",
  {
    type: "button",
    className: sl.card,
    onClick: s
  },
  /* @__PURE__ */ i.createElement("div", { className: sl.content }, /* @__PURE__ */ i.createElement("div", { className: sl.title }, l), /* @__PURE__ */ i.createElement("div", { className: sl.subtitle }, o)),
  /* @__PURE__ */ i.createElement("div", { className: sl.arrow }, "→")
), dv = "_button_9qq9x_1", fv = "_full_9qq9x_32", mv = "_primary_9qq9x_37", pv = "_secondary_9qq9x_50", hv = "_ghost_9qq9x_62", Qi = {
  button: dv,
  full: fv,
  primary: mv,
  secondary: pv,
  ghost: hv
}, ae = ({
  children: l,
  variant: o = "primary",
  fullWidth: s = !1,
  leftIcon: c,
  rightIcon: f,
  className: m = "",
  ...p
}) => /* @__PURE__ */ i.createElement(
  "button",
  {
    ...p,
    className: `
        ${Qi.button}
        ${Qi[o]}
        ${s ? Qi.full : ""}
        ${m}
      `
  },
  c,
  l,
  f
), vv = "_pagination_1hg7e_1", yv = "_button_1hg7e_9", gv = "_label_1hg7e_33", Ma = {
  pagination: vv,
  button: yv,
  label: gv
}, wr = ({
  page: l,
  totalPages: o,
  onChange: s
}) => o <= 1 ? null : /* @__PURE__ */ i.createElement("div", { className: Ma.pagination }, /* @__PURE__ */ i.createElement(
  "button",
  {
    className: Ma.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ i.createElement("span", { className: Ma.label }, l, " / ", o), /* @__PURE__ */ i.createElement(
  "button",
  {
    className: Ma.button,
    disabled: l === o,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), _v = "_overlay_49s9e_1", Ev = "_modal_49s9e_13", wv = "_sm_49s9e_27", kv = "_md_49s9e_31", Sv = "_lg_49s9e_35", Cv = "_xl_49s9e_39", Nv = "_header_49s9e_43", xv = "_title_49s9e_53", Tv = "_body_49s9e_60", Rv = "_footer_49s9e_67", Pv = "_close_49s9e_77", wn = {
  overlay: _v,
  modal: Ev,
  sm: wv,
  md: kv,
  lg: Sv,
  xl: Cv,
  header: Nv,
  title: xv,
  body: Tv,
  footer: Rv,
  close: Pv
}, Lt = ({
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
}, [l, o]), l ? /* @__PURE__ */ i.createElement(
  "div",
  {
    className: wn.overlay,
    onClick: o
  },
  /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `${wn.modal} ${wn[m]}`,
      onClick: (p) => p.stopPropagation()
    },
    /* @__PURE__ */ i.createElement("div", { className: wn.header }, s && /* @__PURE__ */ i.createElement("h2", { className: wn.title }, s), /* @__PURE__ */ i.createElement(
      ae,
      {
        variant: "ghost",
        className: wn.close,
        onClick: o
      },
      "✕"
    )),
    /* @__PURE__ */ i.createElement("div", { className: wn.body }, f),
    c && /* @__PURE__ */ i.createElement("div", { className: wn.footer }, c)
  )
) : null), Mv = "_overlay_w83z1_1", Lv = "_sheet_w83z1_11", Iv = "_handle_w83z1_21", Fn = {
  overlay: Mv,
  sheet: Lv,
  handle: Iv
}, ps = ({
  open: l,
  onClose: o,
  children: s
}) => {
  const [c, f] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), y = v.useRef(0), [E, C] = v.useState(0);
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
  const g = (D) => {
    h.current = D.touches[0].clientY;
  }, N = (D) => {
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
  }, [l, o]), c ? /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `${Fn.overlay} ${m ? Fn.visible : ""}`,
      onClick: o
    },
    /* @__PURE__ */ i.createElement(
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
      /* @__PURE__ */ i.createElement(
        "div",
        {
          className: Fn.handleArea,
          onTouchStart: g,
          onTouchMove: N,
          onTouchEnd: M
        },
        /* @__PURE__ */ i.createElement("div", { className: Fn.handle })
      ),
      /* @__PURE__ */ i.createElement("div", { className: Fn.content }, s)
    )
  ) : null;
}, $v = "_content_1p38v_1", Dv = "_title_1p38v_7", zv = "_actions_1p38v_14", qi = {
  content: $v,
  title: Dv,
  actions: zv
}, Ov = ({
  uuid: l,
  open: o,
  title: s,
  onClose: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = mt();
  if (!l) return null;
  const h = /* @__PURE__ */ i.createElement("div", { className: qi.content }, /* @__PURE__ */ i.createElement("h3", { className: qi.title }, s), /* @__PURE__ */ i.createElement("div", { className: qi.actions }, /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      onClick: () => {
        f(l), c();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(l), c();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, p ? /* @__PURE__ */ i.createElement(ps, { open: o, onClose: c }, h) : /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: o,
      onClose: c,
      title: "Действия",
      size: "sm"
    },
    h
  ));
}, Av = "_accordion_5owbj_1", Fv = "_header_5owbj_7", jv = "_content_5owbj_20", La = {
  accordion: Av,
  header: Fv,
  content: jv
}, jt = ({
  title: l,
  defaultOpen: o = !1,
  children: s
}) => {
  const [c, f] = v.useState(o);
  return /* @__PURE__ */ i.createElement(
    "div",
    {
      className: La.accordion,
      "data-open": c
    },
    /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: La.header,
        onClick: () => f((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ i.createElement("span", null, l),
      /* @__PURE__ */ i.createElement("span", { className: La.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ i.createElement("div", { className: La.content }, s)
  );
}, Uv = "_field_aa3io_1", bv = "_label_aa3io_8", Bv = "_inputWrapper_aa3io_16", Wv = "_input_aa3io_16", Hv = "_passwordInput_aa3io_34", Vv = "_passwordToggle_aa3io_60", Qv = "_error_aa3io_89", qv = "_errorText_aa3io_102", kn = {
  field: Uv,
  label: bv,
  inputWrapper: Bv,
  input: Wv,
  passwordInput: Hv,
  passwordToggle: Vv,
  error: Qv,
  errorText: qv
}, Me = ({
  label: l,
  error: o,
  disabled: s,
  className: c = "",
  id: f,
  type: m,
  ...p
}) => {
  const h = v.useId(), [y, E] = v.useState(!1), C = f ?? h, g = m === "password" && y ? "text" : m;
  return /* @__PURE__ */ i.createElement("div", { className: kn.field }, l && /* @__PURE__ */ i.createElement(
    "label",
    {
      htmlFor: C,
      className: kn.label
    },
    l
  ), /* @__PURE__ */ i.createElement("div", { className: kn.inputWrapper }, /* @__PURE__ */ i.createElement(
    "input",
    {
      id: C,
      disabled: s,
      type: g,
      ...p,
      className: `
            ${kn.input}
            ${m === "password" ? kn.passwordInput : ""}
            ${o ? kn.error : ""}
            ${c}
          `
    }
  ), m === "password" && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: kn.passwordToggle,
      onClick: () => E((N) => !N),
      disabled: s,
      "aria-label": y ? "Hide password" : "Show password"
    },
    y ? "🙈" : "👁"
  )), o && /* @__PURE__ */ i.createElement("span", { className: kn.errorText }, o));
}, Yv = "_wrapper_1oxcb_1", Kv = "_labelRow_1oxcb_7", Gv = "_label_1oxcb_7", Xv = "_selectedTitle_1oxcb_26", Jv = "_dropdown_1oxcb_35", Zv = "_option_1oxcb_50", ey = "_title_1oxcb_72", ty = "_uuid_1oxcb_77", ny = "_hint_1oxcb_78", At = {
  wrapper: Yv,
  labelRow: Kv,
  label: Gv,
  selectedTitle: Xv,
  dropdown: Jv,
  option: Zv,
  title: ey,
  uuid: ty,
  hint: ny
}, pr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = ["assistant_commands"],
  minQueryLength: f = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: y
}) => {
  const E = gr(), [C, g] = v.useState([]), [N, M] = v.useState(!1), [D, $] = v.useState(!1), [k, L] = v.useState(!1), R = v.useRef(0), z = v.useRef(""), H = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (!H) {
      z.current = "", g([]), M(!1);
      return;
    }
    if (H.length < f) {
      g([]), M(!1);
      return;
    }
    if (!k || z.current === H)
      return;
    z.current = H;
    const A = R.current + 1;
    R.current = A;
    const K = window.setTimeout(async () => {
      $(!0);
      try {
        let ne = [];
        for (const ge of c) {
          const _e = await E.searchAssistantCommands(H, ge), oe = Array.isArray(_e == null ? void 0 : _e.data) ? _e.data : [];
          ne.push(...oe);
        }
        if (R.current !== A)
          return;
        g(ne), M(ne.length > 0);
      } finally {
        R.current === A && $(!1);
      }
    }, 250);
    return () => window.clearTimeout(K);
  }, [E, H, c, f, k]);
  const O = (A) => {
    const K = h ? h(A) : A.uuid;
    m(K), p == null || p(A), M(!1);
  };
  return /* @__PURE__ */ i.createElement("div", { className: At.wrapper }, /* @__PURE__ */ i.createElement("div", { className: At.labelRow }, /* @__PURE__ */ i.createElement("span", { className: At.label }, l), s && /* @__PURE__ */ i.createElement("span", { className: At.selectedTitle }, s)), /* @__PURE__ */ i.createElement(
    Me,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: y,
      onBlur: () => {
        L(!1), window.setTimeout(() => M(!1), 150);
      },
      onFocus: () => {
        L(!0), M(C.length > 0);
      },
      onChange: (A) => m(A.target.value)
    }
  ), N && /* @__PURE__ */ i.createElement("div", { className: At.dropdown }, C.map((A) => /* @__PURE__ */ i.createElement(
    "button",
    {
      key: A.uuid,
      type: "button",
      className: At.option,
      onMouseDown: (K) => K.preventDefault(),
      onClick: () => O(A)
    },
    /* @__PURE__ */ i.createElement("span", { className: At.title }, A.title || "Без названия"),
    /* @__PURE__ */ i.createElement("span", { className: At.uuid }, A.uuid),
    A.mappingType && /* @__PURE__ */ i.createElement("span", { className: At.uuid }, "mappingType: ", A.mappingType)
  ))), D && /* @__PURE__ */ i.createElement("span", { className: At.hint }, "Поиск..."));
}, ry = "_field_xxbds_1", ly = "_row_xxbds_5", ay = "_inputWrapper_xxbds_11", oy = "_deleteButton_xxbds_15", Sn = {
  field: ry,
  row: ly,
  inputWrapper: ay,
  deleteButton: oy
}, iy = ({
  condition: l,
  index: o,
  defaultOpen: s,
  onChange: c,
  onDelete: f,
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
  return /* @__PURE__ */ i.createElement(
    jt,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ i.createElement("div", { className: Sn.field }, /* @__PURE__ */ i.createElement(
      pr,
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
    /* @__PURE__ */ i.createElement("div", { className: Sn.field }, h ? /* @__PURE__ */ i.createElement(
      "div",
      {
        className: Sn.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ i.createElement("div", { className: Sn.inputWrapper }, /* @__PURE__ */ i.createElement(
        pr,
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
      /* @__PURE__ */ i.createElement(
        ae,
        {
          type: "button",
          variant: "ghost",
          onClick: E
        },
        "×"
      )
    ) : /* @__PURE__ */ i.createElement(
      ae,
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
    /* @__PURE__ */ i.createElement("div", { className: Sn.field }, y ? /* @__PURE__ */ i.createElement(
      "div",
      {
        className: Sn.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ i.createElement("div", { className: Sn.inputWrapper }, /* @__PURE__ */ i.createElement(
        pr,
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
      /* @__PURE__ */ i.createElement(
        ae,
        {
          type: "button",
          variant: "ghost",
          onClick: C
        },
        "×"
      )
    ) : /* @__PURE__ */ i.createElement(
      ae,
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
    m > 1 && /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        variant: "ghost",
        className: Sn.deleteButton,
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
const cf = (...l) => l.filter((o, s, c) => !!o && o.trim() !== "" && c.indexOf(o) === s).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, s, c) => c ? c.toUpperCase() : s.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = (l) => {
  const o = uy(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yi = {
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
const cy = (l) => {
  for (const o in l)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
  return !1;
}, dy = v.createContext({}), fy = () => v.useContext(dy), my = v.forwardRef(
  ({ color: l, size: o, strokeWidth: s, absoluteStrokeWidth: c, className: f = "", children: m, iconNode: p, ...h }, y) => {
    const {
      size: E = 24,
      strokeWidth: C = 2,
      absoluteStrokeWidth: g = !1,
      color: N = "currentColor",
      className: M = ""
    } = fy() ?? {}, D = c ?? g ? Number(s ?? C) * 24 / Number(o ?? E) : s ?? C;
    return v.createElement(
      "svg",
      {
        ref: y,
        ...Yi,
        width: o ?? E ?? Yi.width,
        height: o ?? E ?? Yi.height,
        stroke: l ?? N,
        strokeWidth: D,
        className: cf("lucide", M, f),
        ...!m && !cy(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([$, k]) => v.createElement($, k)),
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
  const s = v.forwardRef(
    ({ className: c, ...f }, m) => v.createElement(my, {
      ref: m,
      iconNode: o,
      className: cf(
        `lucide-${sy(Cd(l))}`,
        `lucide-${l}`,
        c
      ),
      ...f
    })
  );
  return s.displayName = Cd(l), s;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], df = pt("alarm-clock", py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], vy = pt("arrow-left", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], ul = pt("bot", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], _y = pt("chevron-down", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], wy = pt("clock-3", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Sy = pt("command", ky);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
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
], Ny = pt("file-code-corner", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ty = pt("house", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ff = pt("settings", Ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], mf = pt("speaker", Py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Ly = pt("timer", My);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], $y = pt("trash-2", Iy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], zy = pt("workflow", Dy), Oy = "_dropdown_x51vc_2", Ay = "_label_x51vc_9", Fy = "_wrapper_x51vc_17", jy = "_select_x51vc_21", Uy = "_arrow_x51vc_61", by = "_error_x51vc_81", By = "_errorText_x51vc_99", jn = {
  dropdown: Oy,
  label: Ay,
  wrapper: Fy,
  select: jy,
  arrow: Uy,
  error: by,
  errorText: By
};
function Wy({
  label: l,
  options: o,
  value: s = "",
  placeholder: c = "Выберите",
  error: f,
  onSelect: m
}) {
  const p = v.useId();
  return /* @__PURE__ */ i.createElement("div", { className: jn.dropdown }, l && /* @__PURE__ */ i.createElement(
    "label",
    {
      htmlFor: p,
      className: jn.label
    },
    l
  ), /* @__PURE__ */ i.createElement("div", { className: jn.wrapper }, /* @__PURE__ */ i.createElement(
    "select",
    {
      id: p,
      className: `
            ${jn.select}
            ${f ? jn.error : ""}
          `,
      value: s,
      onChange: (h) => m == null ? void 0 : m(h.target.value)
    },
    /* @__PURE__ */ i.createElement("option", { value: "", disabled: !0 }, c),
    o.map((h) => /* @__PURE__ */ i.createElement(
      "option",
      {
        key: h.value,
        value: h.value
      },
      h.label
    ))
  ), /* @__PURE__ */ i.createElement(
    _y,
    {
      size: 18,
      className: jn.arrow
    }
  )), f && /* @__PURE__ */ i.createElement("span", { className: jn.errorText }, f));
}
const Hy = "_form_xh0jo_1", Vy = "_section_xh0jo_7", Qy = "_sectionTitle_xh0jo_18", qy = "_conditions_xh0jo_37", Yy = "_addCondition_xh0jo_43", mr = {
  form: Hy,
  section: Vy,
  sectionTitle: Qy,
  conditions: qy,
  addCondition: Yy
}, Ky = ({
  open: l,
  initialData: o,
  isOptionData: s,
  isEdit: c = !1,
  loading: f = !1,
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
  const g = (k) => {
    y(k);
  }, N = () => {
    g({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, M = (k, L) => {
    const R = [...h.conditions];
    R[k] = L, g({
      ...h,
      conditions: R
    });
  }, D = (k) => {
    const L = h.conditions.filter(
      (R, z) => z !== k
    );
    g({
      ...h,
      conditions: L.length > 0 ? L : [
        {
          parent_type: ""
        }
      ]
    });
  }, $ = () => {
    const k = {
      conditions: []
    };
    return h.name.trim() || (k.name = "Обязательное поле"), h.script_entity_id || (k.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (L, R) => {
        const z = {};
        L.parent_type.trim() || (z.parent_type = "Обязательное поле"), L.children_type !== void 0 && !L.children_type.trim() && (z.children_type = "Обязательное поле"), L.children_direct_type !== void 0 && !L.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), k.conditions[R] = z;
      }
    ), C(k), !k.name && !k.script_entity_id && k.conditions.every(
      (L) => Object.keys(L).length === 0
    );
  };
  return /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: p,
      title: c ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ i.createElement(
        ae,
        {
          disabled: f,
          onClick: () => {
            $() && (m == null || m(h));
          }
        },
        "Сохранить"
      )
    },
    /* @__PURE__ */ i.createElement("div", { className: mr.form }, /* @__PURE__ */ i.createElement("div", { className: mr.section }, /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "Название",
        value: h.name,
        error: E.name,
        onChange: (k) => g({
          ...h,
          name: k.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Wy,
      {
        label: "Скрипт",
        error: E.script_entity_id,
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
    )), /* @__PURE__ */ i.createElement("div", { className: mr.section }, /* @__PURE__ */ i.createElement("h3", { className: mr.sectionTitle }, "Условия"), /* @__PURE__ */ i.createElement("div", { className: mr.conditions }, h.conditions.map(
      (k, L, R) => /* @__PURE__ */ i.createElement(
        iy,
        {
          key: L,
          index: L,
          condition: k,
          defaultOpen: !c,
          errors: E.conditions[L],
          onChange: (z) => M(
            L,
            z
          ),
          onDelete: () => D(L),
          totalCount: R.length
        }
      )
    )), /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        className: mr.addCondition,
        onClick: N
      },
      "+ Добавить условие"
    )))
  );
}, Gy = "_header_1m7ok_1", Xy = "_title_1m7ok_15", Jy = "_backButton_1m7ok_22", Zy = "_homeButton_1m7ok_23", Ia = {
  header: Gy,
  title: Xy,
  backButton: Jy,
  homeButton: Zy
}, Xt = ({
  title: l = ""
}) => {
  const o = yr(), c = kt().pathname.startsWith("/commands"), f = () => {
    o(c ? "/scripts" : "/");
  }, m = () => {
    if (c) {
      o("/scripts");
      return;
    }
    window.location.assign("/");
  };
  return /* @__PURE__ */ i.createElement("header", { className: Ia.header }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: Ia.backButton,
      onClick: f
    },
    /* @__PURE__ */ i.createElement(vy, { size: 18 })
  ), /* @__PURE__ */ i.createElement("h1", { className: Ia.title }, l), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: Ia.homeButton,
      onClick: m
    },
    /* @__PURE__ */ i.createElement(Ty, { size: 18 })
  ));
}, eg = "_tabs_17nxl_1", tg = "_dropdown_17nxl_14", ng = "_tab_17nxl_1", rg = "_active_17nxl_43", lg = "_menu_17nxl_53", ag = "_menuItem_17nxl_80", Ee = {
  tabs: eg,
  dropdown: tg,
  tab: ng,
  active: rg,
  menu: lg,
  menuItem: ag
}, Jt = () => {
  if (!mt())
    return /* @__PURE__ */ i.createElement("div", { className: Ee.tabs }, /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${Ee.tab} ${Ee.active}` : Ee.tab
      },
      /* @__PURE__ */ i.createElement(Ny, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ i.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ i.createElement("div", { className: Ee.dropdown }, /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${Ee.tab} ${Ee.active}` : Ee.tab
      },
      /* @__PURE__ */ i.createElement(Sy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ i.createElement("span", null, "Команды")
    ), /* @__PURE__ */ i.createElement("div", { className: Ee.menu }, /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${Ee.menuItem} ${Ee.active}` : Ee.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${Ee.menuItem} ${Ee.active}` : Ee.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${Ee.menuItem} ${Ee.active}` : Ee.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${Ee.menuItem} ${Ee.active}` : Ee.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${Ee.tab} ${Ee.active}` : Ee.tab
      },
      /* @__PURE__ */ i.createElement(Ly, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ i.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${Ee.tab} ${Ee.active}` : Ee.tab
      },
      /* @__PURE__ */ i.createElement(df, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ i.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ i.createElement(
      He,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${Ee.tab} ${Ee.active}` : Ee.tab
      },
      /* @__PURE__ */ i.createElement(ff, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ i.createElement("span", null, "Настройки")
    ));
}, og = "_nav_gn5m2_1", Nd = {
  nav: og
}, Zt = () => {
  const l = kt(), o = yr(), [s, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ i.createElement("nav", { className: Nd.nav }, /* @__PURE__ */ i.createElement(He, { to: "/commands/main" }, /* @__PURE__ */ i.createElement(ul, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Основные")), /* @__PURE__ */ i.createElement(He, { to: "/commands/sub" }, /* @__PURE__ */ i.createElement(ul, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Второстепенные")), /* @__PURE__ */ i.createElement(He, { to: "/commands/direct/main" }, /* @__PURE__ */ i.createElement(ul, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Прямые")), /* @__PURE__ */ i.createElement(He, { to: "/commands/settings" }, /* @__PURE__ */ i.createElement(ul, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Настройки"))) : /* @__PURE__ */ i.createElement("nav", { className: Nd.nav }, /* @__PURE__ */ i.createElement(He, { to: "/scripts" }, /* @__PURE__ */ i.createElement(zy, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Скрипты")), /* @__PURE__ */ i.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ i.createElement(ul, { size: 20 }),
    /* @__PURE__ */ i.createElement("span", null, "Команды")
  ), /* @__PURE__ */ i.createElement(He, { to: "/timer" }, /* @__PURE__ */ i.createElement(wy, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Таймер")), /* @__PURE__ */ i.createElement(He, { to: "/alarm" }, /* @__PURE__ */ i.createElement(df, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Будильник")), /* @__PURE__ */ i.createElement(He, { to: "/settings" }, /* @__PURE__ */ i.createElement(ff, { size: 20 }), /* @__PURE__ */ i.createElement("span", null, "Настройки")));
}, ig = "_loader_m2244_1", sg = "_fullscreen_m2244_11", ug = "_spinner_m2244_15", cg = "_label_m2244_24", $a = {
  loader: ig,
  fullscreen: sg,
  spinner: ug,
  label: cg
}, en = ({ label: l = "Загрузка...", fullscreen: o = !1 }) => /* @__PURE__ */ i.createElement("div", { className: `${$a.loader} ${o ? $a.fullscreen : ""}`, role: "status", "aria-live": "polite" }, /* @__PURE__ */ i.createElement("span", { className: $a.spinner, "aria-hidden": "true" }), l && /* @__PURE__ */ i.createElement("span", { className: $a.label }, l)), dg = "_container_99wio_1", fg = "_visible_99wio_20", xd = {
  container: dg,
  visible: fg
}, Cn = ({
  children: l,
  offset: o = 10,
  startVisible: s = !1
}) => {
  const [c, f] = v.useState(s);
  return v.useEffect(() => {
    let m = window.scrollY;
    const p = () => {
      const h = window.scrollY;
      h > m && h > o ? f(!0) : f(!1), m = h;
    };
    return window.addEventListener("scroll", p, {
      passive: !0
    }), () => window.removeEventListener(
      "scroll",
      p
    );
  }, [o]), /* @__PURE__ */ i.createElement(
    "div",
    {
      className: `${xd.container} ${c ? xd.visible : ""}`
    },
    l
  );
}, mg = "_page_24o94_8", pg = "_header_24o94_16", hg = "_headerTop_24o94_21", vg = "_heading_24o94_28", yg = "_title_24o94_33", gg = "_description_24o94_42", _g = "_actions_24o94_49", Eg = "_list_24o94_76", te = {
  page: mg,
  header: pg,
  headerTop: hg,
  heading: vg,
  title: yg,
  description: gg,
  actions: _g,
  list: Eg
}, wg = () => {
  const l = mt(), { ref: o, inView: s } = _r({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), [c, f] = v.useState(), [m, p] = v.useState(!1), [h, y] = v.useState(!1), [E, C] = v.useState({}), [g, N] = v.useState(!1), [M, D] = v.useState(!1), {
    loading: $,
    scripts: k,
    scriptData: L,
    loadScripts: R,
    saveScript: z,
    updateScript: H,
    getScriptAction: O,
    deleteScriptAction: A
  } = av();
  v.useEffect(() => {
    !M || !l || !s || $ || !k || k.page >= k.total_pages || R(k.page + 1, !0);
  }, [
    s,
    l,
    $,
    k,
    R
  ]), v.useEffect(() => {
    !$ && k && k.page === 1 && D(!0);
  }, [$, k]);
  const K = () => {
    f(void 0), N(!1), p(!0);
  }, ne = (ue) => {
    y(!0), C(ue);
  }, ge = async (ue) => {
    N(!0);
    const Ne = await O(
      ue
    );
    f(Ne), p(!0);
  }, _e = async (ue) => {
    if (g) {
      if (!ue.uuid) return;
      const { uuid: Ne, ...De } = ue;
      await H(ue.uuid, De);
    } else
      await z(ue);
    p(!1);
  }, oe = async (ue) => {
    ue && await A(ue);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, $ && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Скрипты"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, /* @__PURE__ */ i.createElement(Jt, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Сценарии"), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, null, /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: K
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: K
    },
    "🞢 Добавить сценарий"
  ))), /* @__PURE__ */ i.createElement("div", { className: te.list }, k == null ? void 0 : k.script_actions.map((ue) => /* @__PURE__ */ i.createElement(
    Er,
    {
      key: ue.uuid,
      title: ue.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => ne(ue)
    }
  )), l ? /* @__PURE__ */ i.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ i.createElement(i.Fragment, null)), l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
    wr,
    {
      page: (k == null ? void 0 : k.page) || 1,
      totalPages: (k == null ? void 0 : k.total_pages) || 1,
      onChange: R
    }
  ), /* @__PURE__ */ i.createElement(
    Ov,
    {
      uuid: E.uuid,
      open: h,
      title: E.title,
      onClose: () => y(!1),
      onEdit: ge,
      onDelete: oe
    }
  ), /* @__PURE__ */ i.createElement(
    Ky,
    {
      open: m,
      initialData: c,
      isEdit: g,
      isOptionData: L(),
      loading: $,
      onCancel: () => p(!1),
      onSave: async (ue) => {
        await _e(ue);
      }
    }
  )), /* @__PURE__ */ i.createElement(Zt, null));
}, kg = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function hl(l) {
  const o = gr(), [s, c] = v.useState(null), [f, m] = v.useState(!0), p = v.useRef(!1), h = async (M, D = 1, $ = !1) => {
    m(!0);
    try {
      const k = kg(await o._getShort(`${M}`, D));
      c((L) => !$ || !L ? k : {
        ...k,
        data: [
          ...L.data,
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
    saveCommand: async (M, D) => await o._save(D, M),
    deleteCommand: async (M, D) => await o._delete(D, M),
    updateCommand: async (M, D) => {
      if (!D.uuid) return;
      const { uuid: $, ...k } = D;
      return await o._update($, M, k);
    },
    editStatusCommand: async (M, D, $) => await o._update_status(M, D, $),
    detailInformationCommand: async (M, D) => await o._getDetail(D, M)
  };
}
const Sg = "_field_1qtfn_1", Cg = "_label_1qtfn_7", Ng = "_select_1qtfn_13", Ki = {
  field: Sg,
  label: Cg,
  select: Ng
}, as = ({
  label: l,
  options: o,
  className: s = "",
  value: c,
  ...f
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ i.createElement("div", { className: Ki.field }, l && /* @__PURE__ */ i.createElement("label", { className: Ki.label }, l), /* @__PURE__ */ i.createElement(
    "select",
    {
      ...f,
      value: m,
      className: `${Ki.select} ${s}`
    },
    !p && /* @__PURE__ */ i.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ i.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, xg = "_switchRow_1lfy8_1", Tg = "_input_1lfy8_11", Rg = "_track_1lfy8_22", Pg = "_thumb_1lfy8_33", Mg = "_label_1lfy8_62", cl = {
  switchRow: xg,
  input: Tg,
  track: Rg,
  thumb: Pg,
  label: Mg
}, Kt = ({ label: l, className: o = "", ...s }) => /* @__PURE__ */ i.createElement("label", { className: `${cl.switchRow} ${o}` }, /* @__PURE__ */ i.createElement("input", { ...s, type: "checkbox", className: cl.input }), /* @__PURE__ */ i.createElement("span", { className: cl.track, "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("span", { className: cl.thumb })), /* @__PURE__ */ i.createElement("span", { className: cl.label }, l)), Lg = "_field_veq7g_1", Ig = "_label_veq7g_7", $g = "_textarea_veq7g_13", Dg = "_error_veq7g_40", zg = "_errorText_veq7g_48", dl = {
  field: Lg,
  label: Ig,
  textarea: $g,
  error: Dg,
  errorText: zg
}, Fa = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ i.createElement("div", { className: dl.field }, l && /* @__PURE__ */ i.createElement("label", { className: dl.label }, l), /* @__PURE__ */ i.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${dl.textarea}
          ${o ? dl.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ i.createElement("span", { className: dl.errorText }, o)), Og = [
  { label: "default", value: "default" },
  { label: "ha_storage", value: "ha_storage" }
], Ag = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], Fg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" }
], jg = "_form_nymr0_1", Ug = "_field_nymr0_15", bg = "_textarea_nymr0_24", Bg = "_arrayItem_nymr0_37", Ft = {
  form: jg,
  field: Ug,
  textarea: bg,
  arrayItem: Bg
}, Td = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), pf = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = v.useMemo(() => {
    if (s[c]) return s[c] ?? Td();
  }, [s]), [E, C] = v.useState({}), g = (k) => {
    f((L) => ({
      ...L,
      [c]: {
        ...L[c] ?? Td(),
        ...k
      }
    }));
  }, N = (k, L, R) => {
    const z = [...y[k] ?? []];
    z[L] = { ...z[L], ...R }, g({
      [k]: z
    });
  }, M = (k, L) => {
    g({
      [k]: [...y[k] ?? [], L]
    });
  }, D = (k, L) => {
    g({
      [k]: (y[k] ?? []).filter(
        (R, z) => z !== L
      )
    });
  }, $ = () => {
    var R;
    const k = {};
    return s.title.trim() || (k.title = "Обязательное поле"), (R = y.actionType) != null && R.trim() || (k.actionType = "Обязательное поле"), C(k), Object.keys(k).length === 0;
  };
  return /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ i.createElement(
        ae,
        {
          onClick: () => {
            $() && (o ? h() : p());
          }
        },
        o ? "Обновить" : "Сохранить"
      )
    },
    /* @__PURE__ */ i.createElement("div", { className: Ft.form }, /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "Название команды",
        value: s.title,
        error: E.title,
        onChange: (k) => f({
          ...s,
          title: k.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Kt,
      {
        label: "Завершать диалог",
        checked: y.endStatus,
        onChange: (k) => g({
          endStatus: k.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ i.createElement(
      Kt,
      {
        label: "Отправить команду как есть",
        checked: y.forwardText,
        onChange: (k) => g({
          forwardText: k.target.checked
        })
      }
    ) : /* @__PURE__ */ i.createElement(i.Fragment, null), /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "actionType",
        value: y.actionType ?? "",
        error: E.actionType,
        onChange: (k) => g({
          actionType: k.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      as,
      {
        label: "answerType",
        value: y.answerType,
        options: Og,
        onChange: (k) => g({
          answerType: k.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement("div", { className: Ft.field }, /* @__PURE__ */ i.createElement(
      Fa,
      {
        label: "voiceCommands",
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (k) => g({
          voiceCommands: k.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ i.createElement(jt, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((k, L) => /* @__PURE__ */ i.createElement("div", { key: L, className: Ft.arrayItem }, /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "actionType",
        value: k.actionType,
        onChange: (R) => N("voiceResponseArray", L, {
          actionType: R.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Fa,
      {
        label: "voiceResponse",
        value: k.voiceResponse,
        onChange: (R) => N("voiceResponseArray", L, {
          voiceResponse: R.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("voiceResponseArray", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        variant: "secondary",
        onClick: () => M("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ i.createElement(jt, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((k, L) => /* @__PURE__ */ i.createElement("div", { key: L, className: Ft.arrayItem }, /* @__PURE__ */ i.createElement(
      as,
      {
        label: "actionTypeComponent",
        value: k.actionTypeComponent,
        options: Fg,
        onChange: (R) => N("nextAction", L, {
          actionTypeComponent: R.target.value
        })
      }
    ), k.actionTypeComponent == "custom" ? /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "actionType",
        value: k.actionType ?? "",
        onChange: (R) => N("nextAction", L, {
          actionType: R.target.value
        })
      }
    ) : /* @__PURE__ */ i.createElement(i.Fragment, null), /* @__PURE__ */ i.createElement(
      pr,
      {
        label: "uuid",
        value: k.uuid,
        searchSource: ["search_assistant_commands", "search_assistant_sub_commands"],
        selectedTitle: k.title,
        onChange: (R) => N("nextAction", L, {
          uuid: R
        }),
        onSelect: (R) => N("nextAction", L, {
          uuid: R.uuid,
          title: R.title ?? ""
        })
      }
    ), /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextAction", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ i.createElement(
      ae,
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
    )), /* @__PURE__ */ i.createElement(jt, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((k, L) => /* @__PURE__ */ i.createElement("div", { key: L, className: Ft.arrayItem }, /* @__PURE__ */ i.createElement(
      pr,
      {
        label: "uuid",
        value: k.uuid,
        selectedTitle: k.title,
        searchSource: ["search_assistant_sub_direct_controls"],
        onChange: (R) => N("nextDirectControl", L, {
          uuid: R
        }),
        onSelect: (R) => N("nextDirectControl", L, {
          uuid: R.uuid,
          mappingType: R.mappingType ?? "",
          title: R.title ?? ""
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "mappingType",
        disabled: !0,
        value: k.mappingType ?? "",
        onChange: (R) => N("nextDirectControl", L, {
          actionType: R.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextDirectControl", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ i.createElement(
      ae,
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
}, Wg = "_content_19r5a_1", Hg = "_title_19r5a_7", Vg = "_actions_19r5a_14", Gi = {
  content: Wg,
  title: Hg,
  actions: Vg
}, Ha = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = mt();
  if (!o) return null;
  const h = /* @__PURE__ */ i.createElement("div", { className: Gi.content }, /* @__PURE__ */ i.createElement("h3", { className: Gi.title }, o.title), /* @__PURE__ */ i.createElement("div", { className: Gi.actions }, /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), s();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        f(o.uuid), s();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o.uuid), s();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, p ? /* @__PURE__ */ i.createElement(ps, { open: l, onClose: s }, h) : /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    h
  ));
}, Qg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Rd = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...Qg(),
    forwardText: !1
  }
}), qg = () => {
  const l = mt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(
    () => Rd()
  ), [h, y] = v.useState(
    null
  ), { ref: E, inView: C } = _r({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: g,
    loadCommands: N,
    deleteCommand: M,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: k,
    editStatusCommand: L,
    commands: R
  } = hl("get_assistant_commands_short"), [z, H] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !C || g || !R || R.page >= R.total_pages || N("get_assistant_commands_short", R.page + 1, !0);
  }, [C, l, g, R, N]), v.useEffect(() => {
    !g && R && R.page === 1 && H(!0);
  }, [g, R]);
  const O = () => {
    f(!1), p(Rd()), s(!0);
  }, A = async (oe) => {
    f(!0);
    const ue = await D(
      "get_assistant_command",
      oe
    );
    p(ue.data), s(!0);
  }, K = async (oe, ue) => {
    await L(
      "update_assistant_command_status",
      oe,
      ue
    ), N("get_assistant_commands_short");
  }, ne = async (oe) => {
    await M("delete_assistant_command", oe), N("get_assistant_commands_short");
  }, ge = async () => {
    await $("save_assistant_command", m), s(!1);
  }, _e = async () => {
    await k("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, g && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Комманды"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, /* @__PURE__ */ i.createElement(Jt, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Комманды"), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, null, /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: O }, "Добавить сценарий")) : /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: O }, "🞢 Добавить сценарий"))), /* @__PURE__ */ i.createElement("div", { className: te.list }, R == null ? void 0 : R.data.map((oe) => /* @__PURE__ */ i.createElement(
    Er,
    {
      key: oe.uuid,
      title: oe.title,
      subTitle: oe.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(oe)
    }
  )), l ? /* @__PURE__ */ i.createElement("div", { ref: E, style: { height: 1 } }) : /* @__PURE__ */ i.createElement(i.Fragment, null)), l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
    wr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (oe) => N("get_assistant_commands_short", oe)
    }
  ), /* @__PURE__ */ i.createElement(
    pf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: ge,
      onUpdate: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Ha,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: K,
      onDelete: ne,
      onEdit: (oe) => A(oe)
    }
  )), /* @__PURE__ */ i.createElement(Zt, null));
}, Yg = () => ({
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
  subComponentDialog: {
    ...Yg(),
    forwardText: !1
  }
}), Kg = () => {
  const l = mt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Pd()), [h, y] = v.useState(null), { ref: E, inView: C } = _r({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: g,
    loadCommands: N,
    deleteCommand: M,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: k,
    editStatusCommand: L,
    commands: R
  } = hl("get_assistant_sub_commands_short"), [z, H] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !C || g || !R || R.page >= R.total_pages || N("get_assistant_sub_commands_short", R.page + 1, !0);
  }, [
    C,
    l,
    g,
    R,
    N
  ]), v.useEffect(() => {
    !g && R && R.page === 1 && H(!0);
  }, [g, R]);
  const O = () => {
    f(!1), p(Pd()), s(!0);
  }, A = async (oe) => {
    f(!0);
    const ue = await D("get_assistant_sub_command", oe);
    p(ue.data), s(!0);
  }, K = async (oe, ue) => {
    await L("update_assistant_sub_command_status", oe, ue), N("get_assistant_sub_commands_short");
  }, ne = async (oe) => {
    await M("delete_assistant_sub_command", oe), N("get_assistant_sub_commands_short");
  }, ge = async () => {
    await $("save_assistant_sub_command", m), s(!1);
  }, _e = async () => {
    await k("update_assistant_sub_command", m), s(!1);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Второстепенные команды"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Jt, null), g && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Второстепенные команды "), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, null, /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: O }, "Добавить сценарий")) : /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: O }, "🞢 Добавить сценарий"))), /* @__PURE__ */ i.createElement("div", { className: te.list }, R == null ? void 0 : R.data.map((oe) => /* @__PURE__ */ i.createElement(
    Er,
    {
      key: oe.uuid,
      title: oe.title,
      subTitle: oe.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(oe)
    }
  ))), l ? /* @__PURE__ */ i.createElement("div", { ref: E, style: { height: 1 } }) : /* @__PURE__ */ i.createElement(
    wr,
    {
      page: (R == null ? void 0 : R.page) || 1,
      totalPages: (R == null ? void 0 : R.total_pages) || 1,
      onChange: (oe) => N("get_assistant_sub_commands_short", oe)
    }
  ), /* @__PURE__ */ i.createElement(
    pf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "subComponentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: ge,
      onUpdate: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Ha,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: K,
      onDelete: ne,
      onEdit: (oe) => A(oe)
    }
  )), /* @__PURE__ */ i.createElement(Zt, null));
}, Md = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Gg = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? Md(), [c]), h = (g) => {
    f((N) => ({
      ...N,
      directControl: {
        ...N.directControl ?? Md(),
        ...g
      }
    }));
  }, y = (g, N) => {
    const M = [...p.subDirectControl ?? []];
    M[g] = {
      ...M[g],
      ...N
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
      subDirectControl: (p.subDirectControl ?? []).filter((N, M) => M !== g)
    });
  };
  return /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ae, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ i.createElement("div", { className: Ft.form }, /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "Название команды",
        value: c.title,
        onChange: (g) => f((N) => ({
          ...N,
          title: g.target.value
        }))
      }
    ), /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (g) => h({
          mappingType: g.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      as,
      {
        label: "valueType",
        value: p.valueType,
        options: Ag,
        onChange: (g) => h({
          valueType: g.target.value
        })
      }
    ), p.valueType == "command" ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: Ft.field }, /* @__PURE__ */ i.createElement(
      Fa,
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
    )), /* @__PURE__ */ i.createElement(
      Kt,
      {
        label: "manual",
        checked: p.manual,
        onChange: (g) => h({
          manual: g.target.checked,
          subDirectControl: g.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ i.createElement(jt, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (g, N) => /* @__PURE__ */ i.createElement("div", { key: N, className: Ft.arrayItem }, /* @__PURE__ */ i.createElement(
        Me,
        {
          label: "subMappingType",
          value: g.subMappingType,
          onChange: (M) => y(N, {
            subMappingType: M.target.value
          })
        }
      ), /* @__PURE__ */ i.createElement("div", { className: Ft.field }, /* @__PURE__ */ i.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ i.createElement(
        "textarea",
        {
          className: Ft.textarea,
          rows: 3,
          value: g.subVoiceCommands,
          onChange: (M) => y(N, {
            subVoiceCommands: M.target.value
          })
        }
      )), /* @__PURE__ */ i.createElement(
        ae,
        {
          type: "button",
          variant: "ghost",
          onClick: () => C(N)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ i.createElement(
      ae,
      {
        type: "button",
        variant: "secondary",
        onClick: E
      },
      "Добавить ещё"
    )) : /* @__PURE__ */ i.createElement(
      pr,
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
    ), " ") : /* @__PURE__ */ i.createElement(i.Fragment, null))
  );
}, Ld = () => ({
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
}), Xg = () => {
  const l = mt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Ld()), [h, y] = v.useState(null), E = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [C, g] = v.useState("main"), N = yr(), { ref: M, inView: D } = _r({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: $,
    loadCommands: k,
    deleteCommand: L,
    detailInformationCommand: R,
    saveCommand: z,
    updateCommand: H,
    editStatusCommand: O,
    commands: A
  } = hl("get_assistant_sub_direct_controls_short"), [K, ne] = v.useState(!1);
  v.useEffect(() => {
    !K || !l || !D || $ || !A || A.page >= A.total_pages || k("get_assistant_sub_direct_controls_short", A.page + 1, !0);
  }, [
    D,
    l,
    $,
    A,
    k
  ]), v.useEffect(() => {
    !$ && A && A.page === 1 && ne(!0);
  }, [$, A]);
  const ge = () => {
    f(!1), p(Ld()), s(!0);
  }, _e = async (X) => {
    f(!0);
    const W = await R("get_assistant_sub_direct_control", X);
    p(W.data), s(!0);
  }, oe = async (X, W) => {
    await O("update_assistant_sub_direct_controls_status", X, W), k("get_assistant_sub_direct_controls_short");
  }, ue = async (X) => {
    await L("delete_assistant_sub_direct_control", X), k("get_assistant_sub_direct_controls_short");
  }, Ne = async () => {
    await z("save_assistant_sub_direct_control", m), s(!1);
  }, De = async () => {
    await H("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Прямые команды"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Jt, null), $ && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Прямые команды"), /* @__PURE__ */ i.createElement("div", { className: te.innerTabs }, E.map((X) => /* @__PURE__ */ i.createElement(
    "button",
    {
      key: X.key,
      type: "button",
      className: `${te.innerTab} ${C === X.key ? te.activeInnerTab : ""}`,
      onClick: () => {
        g(X.key), N(`/commands/direct/${X.key === "main" ? "main" : "template"}`);
      }
    },
    X.label
  ))), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, null, /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: ge }, "Добавить сценарий")) : /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: ge }, "🞢 Добавить сценарий"))), /* @__PURE__ */ i.createElement("div", { className: te.list }, A == null ? void 0 : A.data.map((X) => /* @__PURE__ */ i.createElement(
    Er,
    {
      key: X.uuid,
      title: X.title,
      subTitle: X.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(X)
    }
  ))), l ? /* @__PURE__ */ i.createElement("div", { ref: M, style: { height: 1 } }) : /* @__PURE__ */ i.createElement(
    wr,
    {
      page: (A == null ? void 0 : A.page) || 1,
      totalPages: (A == null ? void 0 : A.total_pages) || 1,
      onChange: (X) => k("get_assistant_sub_direct_controls_short", X)
    }
  ), /* @__PURE__ */ i.createElement(
    Gg,
    {
      open: o,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? De : Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Ha,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: oe,
      onDelete: ue,
      onEdit: (X) => _e(X)
    }
  )), /* @__PURE__ */ i.createElement(Zt, null));
}, Id = {}, Jg = ({
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
    f((N) => ({
      ...N,
      subDirectControl: g
    }));
  }, y = (g, N) => {
    const M = [...p];
    M[g] = {
      ...M[g],
      ...N
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
      p.filter((N, M) => M !== g)
    );
  };
  return /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ i.createElement(ae, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ i.createElement("div", { className: Id.form }, /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "Название команды",
        value: c.title,
        onChange: (g) => f((N) => ({
          ...N,
          title: g.target.value
        }))
      }
    ), /* @__PURE__ */ i.createElement(
      jt,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((g, N) => /* @__PURE__ */ i.createElement(
        "div",
        {
          key: N,
          className: Id.arrayItem
        },
        /* @__PURE__ */ i.createElement(
          Me,
          {
            label: "subMappingType",
            value: g.subMappingType ?? "",
            onChange: (M) => y(N, {
              subMappingType: M.target.value
            })
          }
        ),
        /* @__PURE__ */ i.createElement(
          Fa,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof g.subVoiceCommands == "object" ? g.subVoiceCommands : []).join(`
`),
            onChange: (M) => y(N, {
              subVoiceCommands: M.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ i.createElement(
          ae,
          {
            type: "button",
            variant: "ghost",
            onClick: () => C(N)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ i.createElement(
        ae,
        {
          type: "button",
          variant: "secondary",
          onClick: E
        },
        "Добавить ещё"
      )
    ))
  );
}, $d = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), Zg = () => {
  const l = mt(), o = yr(), [s, c] = v.useState(!1), [f, m] = v.useState(!1), [p, h] = v.useState($d), [y, E] = v.useState(null), [C, g] = v.useState("template"), [N, M] = v.useState(!1), D = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: $, inView: k } = _r({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: L,
    loadCommands: R,
    deleteCommand: z,
    detailInformationCommand: H,
    saveCommand: O,
    updateCommand: A,
    editStatusCommand: K,
    commands: ne
  } = hl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !N || !l || !k || L || !ne || ne.page >= ne.total_pages || R(
      "get_assistant_sub_direct_control_samples_short",
      ne.page + 1,
      !0
    );
  }, [
    N,
    k,
    l,
    L,
    ne,
    R
  ]), v.useEffect(() => {
    !L && ne && ne.page === 1 && M(!0);
  }, [L, ne]);
  const ge = () => {
    m(!1), h($d()), c(!0);
  }, _e = async (X) => {
    m(!0);
    const W = await H(
      "get_assistant_sub_direct_control_sample",
      X
    );
    h(W.data), c(!0);
  }, oe = async (X, W) => {
    await K(
      "update_assistant_sub_direct_control",
      X,
      W
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ue = async (X) => {
    await z(
      "delete_assistant_sub_direct_control_sample",
      X
    ), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ne = async () => {
    await O(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, De = async () => {
    await A(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), R(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Прямые команды шаблоны"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, !l && /* @__PURE__ */ i.createElement(Jt, null), L && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Прямые команды шаблоны"), /* @__PURE__ */ i.createElement("div", { className: te.innerTabs }, D.map((X) => /* @__PURE__ */ i.createElement(
    "button",
    {
      key: X.key,
      type: "button",
      className: `${te.innerTab} ${C === X.key ? te.activeInnerTab : ""}`,
      onClick: () => {
        g(X.key), o(`/commands/direct/${X.key === "main" ? "main" : "template"}`);
      }
    },
    X.label
  ))), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, null, /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: ge }, "Добавить сценарий")) : /* @__PURE__ */ i.createElement(ae, { variant: "primary", onClick: ge }, "🞢 Добавить сценарий"))), /* @__PURE__ */ i.createElement("div", { className: te.list }, ne == null ? void 0 : ne.data.map((X) => /* @__PURE__ */ i.createElement(
    Er,
    {
      key: X.uuid,
      title: X.title,
      subTitle: X.status === !1 ? "Выключена" : "Включена",
      onClick: () => E(X)
    }
  ))), l ? /* @__PURE__ */ i.createElement(
    "div",
    {
      ref: $,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ i.createElement(
    wr,
    {
      page: (ne == null ? void 0 : ne.page) ?? 1,
      totalPages: (ne == null ? void 0 : ne.total_pages) ?? 1,
      onChange: (X) => R(
        "get_assistant_sub_direct_control_samples_short",
        X
      )
    }
  ), /* @__PURE__ */ i.createElement(
    Jg,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? De : Ne
    }
  ), /* @__PURE__ */ i.createElement(
    Ha,
    {
      open: !!y,
      command: y,
      onClose: () => E(null),
      onToggleStatus: oe,
      onDelete: ue,
      onEdit: (X) => _e(X)
    }
  )), /* @__PURE__ */ i.createElement(Zt, null));
}, e_ = "_form_nymr0_1", t_ = {
  form: e_
}, n_ = ({
  open: l,
  isEdit: o,
  formData: s,
  setFormData: c,
  onClose: f,
  onUpdate: m
}) => {
  if (!s) return;
  const p = v.useMemo(() => {
    if (s) return s;
  }, [s]), h = (y) => {
    c((E) => ({
      ...E,
      ...y
    }));
  };
  return /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: f,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ i.createElement(ae, { onClick: m }, "Обновить")
    },
    /* @__PURE__ */ i.createElement("div", { className: t_.form }, /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "Название команды",
        value: s.title,
        onChange: (y) => c({
          ...s,
          title: y.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Kt,
      {
        label: "Завершать диалог",
        checked: p.endStatus,
        onChange: (y) => h({
          endStatus: y.target.checked
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Kt,
      {
        label: "Передать команду серверу",
        checked: p.forwardCommandToServer,
        onChange: (y) => h({
          forwardCommandToServer: y.target.checked
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "actionType",
        value: p.actionType,
        onChange: (y) => h({
          actionType: y.target.value
        })
      }
    ), /* @__PURE__ */ i.createElement(
      Me,
      {
        label: "Ответное сообщение",
        value: p.voiceResponse,
        onChange: (y) => h({
          voiceResponse: y.target.value
        })
      }
    ))
  );
}, r_ = () => {
  const l = mt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(), { ref: h, inView: y } = _r({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: E,
    loadCommands: C,
    detailInformationCommand: g,
    updateCommand: N,
    commands: M
  } = hl("get_assistant_settings_short"), [D, $] = v.useState(!1);
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
  const k = async (R) => {
    f(!0);
    const z = await g("get_assistant_setting", R.uuid);
    p(z.data), s(!0);
  }, L = async () => {
    await N("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Настройки команд"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(Jt, null), E && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.headerTop }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте и редактируйте голосовые команды ассистента.")))), /* @__PURE__ */ i.createElement("div", { className: te.list }, M == null ? void 0 : M.data.map((R) => /* @__PURE__ */ i.createElement(
    Er,
    {
      key: R.uuid,
      title: R.title,
      subTitle: R.actionType,
      onClick: () => k(R)
    }
  ))), l ? /* @__PURE__ */ i.createElement("div", { ref: h, style: { height: 1 } }) : /* @__PURE__ */ i.createElement(
    wr,
    {
      page: (M == null ? void 0 : M.page) || 1,
      totalPages: (M == null ? void 0 : M.total_pages) || 1,
      onChange: (R) => C("get_assistant_settings_short", R)
    }
  ), /* @__PURE__ */ i.createElement(
    n_,
    {
      open: o,
      isEdit: c,
      formData: m,
      setFormData: p,
      onClose: () => s(!1),
      onUpdate: L
    }
  )), /* @__PURE__ */ i.createElement(Zt, null));
};
function l_() {
  const l = gr(), [o, s] = v.useState(!0), [c, f] = v.useState(null), [m, p] = v.useState([]), h = v.useCallback(async () => {
    s(!0);
    try {
      const C = await l._getShort("get_settings");
      f((C == null ? void 0 : C.result) ?? C);
    } finally {
      s(!1);
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
const a_ = "_form_1o1aw_1", o_ = "_field_1o1aw_7", i_ = "_input_1o1aw_13", s_ = "_label_1o1aw_32", u_ = "_help_1o1aw_51", qe = {
  form: a_,
  field: o_,
  input: i_,
  label: s_,
  help: u_
}, c_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ i.createElement("div", { className: qe.form }, /* @__PURE__ */ i.createElement(Me, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ i.createElement(Me, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ i.createElement(Me, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ i.createElement(Me, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ i.createElement("label", { className: qe.field }, /* @__PURE__ */ i.createElement("span", { className: qe.label }, "Codec"), /* @__PURE__ */ i.createElement("select", { className: qe.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ i.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ i.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ i.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ i.createElement("label", { className: qe.field }, /* @__PURE__ */ i.createElement("span", { className: qe.label }, "Emotion"), /* @__PURE__ */ i.createElement("select", { className: qe.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ i.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ i.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ i.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ i.createElement(Me, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, d_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ i.createElement("div", { className: qe.form }, /* @__PURE__ */ i.createElement(Me, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ i.createElement(Me, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, f_ = ({ data: l, musicOptions: o, onChange: s }) => {
  const c = (m, p) => {
    s({
      ...l,
      [m]: p
    });
  }, f = (m, p, h = "") => {
    const y = o.some((E) => E.value === h);
    return /* @__PURE__ */ i.createElement("label", { className: qe.field }, /* @__PURE__ */ i.createElement("span", { className: qe.label }, m), /* @__PURE__ */ i.createElement(
      "select",
      {
        className: qe.input,
        value: h,
        onChange: (E) => c(p, E.target.value)
      },
      /* @__PURE__ */ i.createElement("option", { value: "" }, "Не выбрано"),
      h && !y && /* @__PURE__ */ i.createElement("option", { value: h }, h),
      o.map((E) => /* @__PURE__ */ i.createElement("option", { key: E.value, value: E.value }, E.label))
    ));
  };
  return /* @__PURE__ */ i.createElement("div", { className: qe.form }, f(
    "Global music timer",
    "global_music_timer",
    l.global_music_timer
  ), f(
    "Global music alarm",
    "global_music_alarm",
    l.global_music_alarm
  ), o.length === 0 && /* @__PURE__ */ i.createElement("span", { className: qe.help }, "Музыка на сервере не найдена."));
}, m_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ i.createElement("div", { className: qe.form }, /* @__PURE__ */ i.createElement(
    Me,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ i.createElement("label", { className: qe.field }, /* @__PURE__ */ i.createElement("span", { className: qe.label }, "Theme"), /* @__PURE__ */ i.createElement("select", { className: qe.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ i.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ i.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ i.createElement(Kt, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ i.createElement(Kt, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ i.createElement(Kt, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ i.createElement(
    Me,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, p_ = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, ja = {
  base_url: "",
  token: ""
}, h_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, Dd = {
  yandex_tts: p_,
  remout: ja,
  timer_alarm: h_,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, v_ = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), y_ = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), g_ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), __ = (l) => ({
  yandex_tts: v_(l == null ? void 0 : l.yandex_tts),
  remout: y_(l == null ? void 0 : l.remout),
  timer_alarm: g_(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Xi = (l, o) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== o[f] && (s[f] = l[f]);
  }), s;
}, E_ = (l, o) => {
  const s = {}, c = Xi(l.yandex_tts, o.yandex_tts), f = Xi(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Xi(l.remout ?? ja, o.remout ?? ja);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, w_ = () => {
  const l = mt(), [o, s] = v.useState(Dd), [c, f] = v.useState(Dd), { settings: m, musicOptions: p, saveSettings: h } = l_();
  v.useEffect(() => {
    if (!m) return;
    const E = __(m);
    s(E), f(E);
  }, [m]), v.useEffect(() => {
    window.dispatchEvent(new CustomEvent("dialog-custom-ui-theme-change", { detail: o.theme }));
  }, [o.theme]);
  const y = () => {
    const E = E_(o, c);
    h(E), f(o);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Xt,
    {
      title: "Настройки"
    }
  ), /* @__PURE__ */ i.createElement("div", { className: te.page }, /* @__PURE__ */ i.createElement(Jt, null), l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", null, "Настройки"), /* @__PURE__ */ i.createElement("div", { style: {
    display: "flex",
    "flex-direction": "column",
    height: "100%",
    ...l ? { marginBottom: "150px" } : {},
    gap: "15px"
  } }, /* @__PURE__ */ i.createElement(jt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ i.createElement(
    m_,
    {
      data: {
        active_remout: o.active_remout,
        is_admin: o.is_admin,
        theme: o.theme,
        client_id: o.client_id,
        api_commands_enabled: o.api_commands_enabled,
        api_commands_token: o.api_commands_token
      },
      onChange: (E) => s({ ...o, ...E })
    }
  )), /* @__PURE__ */ i.createElement(jt, { title: "Яндекс TTS" }, /* @__PURE__ */ i.createElement(
    c_,
    {
      data: o.yandex_tts,
      onChange: (E) => s({ ...o, yandex_tts: E })
    }
  )), o.active_remout && /* @__PURE__ */ i.createElement(jt, { title: "Remote" }, /* @__PURE__ */ i.createElement(
    d_,
    {
      data: o.remout ?? ja,
      onChange: (E) => s({ ...o, remout: E })
    }
  )), /* @__PURE__ */ i.createElement(jt, { title: "Timer / Alarm" }, /* @__PURE__ */ i.createElement(
    f_,
    {
      data: o.timer_alarm,
      musicOptions: p,
      onChange: (E) => s({ ...o, timer_alarm: E })
    }
  ))), l ? /* @__PURE__ */ i.createElement(Cn, null, /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: y
    },
    "Сохранить"
  )) : /* @__PURE__ */ i.createElement(ae, { onClick: y }, "Сохранить")), /* @__PURE__ */ i.createElement(Zt, null));
}, Un = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, k_ = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 1e3).toISOString();
}, hf = (l) => {
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
    return hf(l.count_timer || "");
  }
  return 0;
}, zd = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}, Ji = (l) => {
  const o = Un(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function vf() {
  const l = gr(), [o, s] = v.useState([]), [c, f] = v.useState([]), [m, p] = v.useState([]), [h, y] = v.useState(!0), E = v.useMemo(() => l.getDevices(), [l]), C = v.useCallback(async () => {
    const z = await l._getShort("get_timer_requests_short", 1, 100), H = await Promise.all(
      Ji(z).map(async (O) => {
        var K;
        const A = await l._getDetail(O.uuid, "get_timer_request");
        return ((K = Un(A)) == null ? void 0 : K.data) ?? Un(A);
      })
    );
    s(H.filter((O) => !!O && O.action_type === "create_timer"));
  }, [l]), g = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_requests_short", 1, 100), H = await Promise.all(
      Ji(z).map(async (O) => {
        var K;
        const A = await l._getDetail(O.uuid, "get_alarm_request");
        return ((K = Un(A)) == null ? void 0 : K.data) ?? Un(A);
      })
    );
    f(H.filter((O) => !!O && O.action_type !== "delete_alarm"));
  }, [l]), N = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_time_widgets_short", 1, 100), H = await Promise.all(
      Ji(z).map(async (O) => {
        var K;
        const A = await l._getDetail(O.uuid, "get_alarm_time_widget");
        return ((K = Un(A)) == null ? void 0 : K.data) ?? Un(A);
      })
    );
    p(H.filter(Boolean));
  }, [l]), M = v.useCallback(async () => {
    y(!0);
    try {
      await Promise.all([C(), g(), N()]);
    } finally {
      y(!1);
    }
  }, [g, N, C]);
  return v.useEffect(() => {
    M();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (z, H, O = 0.3, A = "once", K = []) => {
      await l._save({ name: `Будильник ${H}`, action_type: "create_alarm", device_id: z, status: "on", time: H, volume_start: O, repeat_type: A, repeat_days: K }, "save_alarm_request"), await g();
    },
    createTimer: async (z, H, O = 0.3) => {
      const A = {
        count_timer: zd(H),
        date_end: k_(H)
      };
      await l._save({ name: `Таймер ${zd(H)}`, action_type: "create_timer", device_id: z, timer_time: A, volume_start: O }, "save_timer_request"), await C();
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
    toTimerSeconds: hf,
    updateAlarm: async (z, H) => {
      await l._update(z.uuid, "update_alarm_request", { ...z, action_type: "edit_alarm", ...H }), await g();
    }
  };
}
const S_ = "_page_1t9c7_1", C_ = "_header_1t9c7_11", N_ = "_title_1t9c7_18", x_ = "_description_1t9c7_25", T_ = "_grid_1t9c7_31", R_ = "_card_1t9c7_36", P_ = "_empty_1t9c7_36", M_ = "_cardHeader_1t9c7_43", L_ = "_cardTitle_1t9c7_50", I_ = "_meta_1t9c7_55", $_ = "_time_1t9c7_61", D_ = "_form_1t9c7_68", z_ = "_field_1t9c7_74", O_ = "_label_1t9c7_80", A_ = "_select_1t9c7_86", F_ = "_input_1t9c7_86", j_ = "_quickTabs_1t9c7_96", U_ = "_quickTab_1t9c7_96", b_ = "_activeQuickTab_1t9c7_112", B_ = "_row_1t9c7_117", W_ = "_cardLead_1t9c7_140", H_ = "_cardIcon_1t9c7_147", V_ = "_cardButton_1t9c7_152", Q_ = "_wheelPicker_1t9c7_164", q_ = "_wheelColumn_1t9c7_174", Y_ = "_wheelSelect_1t9c7_181", K_ = "_selectButton_1t9c7_193", G_ = "_timeInput_1t9c7_204", Z = {
  page: S_,
  header: C_,
  title: N_,
  description: x_,
  grid: T_,
  card: R_,
  empty: P_,
  cardHeader: M_,
  cardTitle: L_,
  meta: I_,
  time: $_,
  form: D_,
  field: z_,
  label: O_,
  select: A_,
  input: F_,
  quickTabs: j_,
  quickTab: U_,
  activeQuickTab: b_,
  row: B_,
  switch: "_switch_1t9c7_123",
  cardLead: W_,
  cardIcon: H_,
  cardButton: V_,
  wheelPicker: Q_,
  wheelColumn: q_,
  wheelSelect: Y_,
  selectButton: K_,
  timeInput: G_
}, X_ = [5, 10, 15, 30, 45, 60], Od = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, J_ = (l, o, s) => Math.max(1, l * 3600 + o * 60 + s), Z_ = (l) => ({
  hours: Math.floor(l / 3600),
  minutes: Math.floor(l % 3600 / 60),
  seconds: l % 60
}), e0 = () => {
  const l = mt(), { createTimer: o, devices: s, loading: c, stopTimer: f, timers: m, toTimerSeconds: p } = vf(), [h, y] = v.useState(!1), [E, C] = v.useState(""), [g, N] = v.useState(0.3), [M, D] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [$, k] = v.useState({});
  v.useEffect(() => {
    k((O) => Object.fromEntries(m.map((A) => [A.uuid, O[A.uuid] ?? p(A.timer_time)])));
  }, [m, p]), v.useEffect(() => {
    const O = window.setInterval(() => {
      k((A) => Object.fromEntries(Object.entries(A).map(([K, ne]) => [K, Math.max(0, ne - 1)])));
    }, 1e3);
    return () => window.clearInterval(O);
  }, []);
  const L = v.useMemo(() => new Map(s.map((O) => [O.id, O.name])), [s]), R = J_(M.hours, M.minutes, M.seconds), z = async () => {
    E && (await o(E, R, g), y(!1));
  }, H = (O) => D(Z_(O * 60));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Xt, { title: "Таймер" }), /* @__PURE__ */ i.createElement("div", { className: te.page }, /* @__PURE__ */ i.createElement(Jt, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Таймер"), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, { startVisible: !0 }, /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: () => y(!0)
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: () => y(!0)
    },
    "🞢 Создать"
  ))), c && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement("div", { className: Z.grid }, m.length ? m.map((O) => {
    const A = p(O.timer_time);
    return /* @__PURE__ */ i.createElement("div", { className: Z.card, key: O.uuid }, /* @__PURE__ */ i.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ i.createElement("div", { className: Z.cardLead }, /* @__PURE__ */ i.createElement(mf, { className: Z.cardIcon, size: 26 }), /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("h2", { className: Z.cardTitle }, Od($[O.uuid] ?? A)), /* @__PURE__ */ i.createElement("div", { className: Z.meta }, "Заведен на ", Od(A), " • ", L.get(O.device_id) || O.device_id))), /* @__PURE__ */ i.createElement(ae, { variant: "ghost", onClick: () => f(O) }, /* @__PURE__ */ i.createElement($y, { size: 16 }))));
  }) : /* @__PURE__ */ i.createElement("div", { className: Z.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ i.createElement(Lt, { open: h, onClose: () => y(!1), title: "Создать таймер", footer: /* @__PURE__ */ i.createElement(ae, { onClick: z, disabled: !E }, "Создать") }, /* @__PURE__ */ i.createElement("div", { className: Z.form }, /* @__PURE__ */ i.createElement("div", { className: Z.wheelPicker, "aria-label": "Длительность таймера" }, ["hours", "minutes", "seconds"].map((O) => /* @__PURE__ */ i.createElement("label", { className: Z.wheelColumn, key: O }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, O === "hours" ? "чч" : O === "minutes" ? "мм" : "сс"), /* @__PURE__ */ i.createElement("select", { className: Z.wheelSelect, value: M[O], onChange: (A) => D((K) => ({ ...K, [O]: Number(A.target.value) })) }, Array.from({ length: O === "hours" ? 24 : 60 }, (A, K) => /* @__PURE__ */ i.createElement("option", { key: K, value: K }, String(K).padStart(2, "0"))))))), /* @__PURE__ */ i.createElement("div", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Быстрое создание"), /* @__PURE__ */ i.createElement("div", { className: Z.quickTabs }, X_.map((O) => /* @__PURE__ */ i.createElement("button", { key: O, type: "button", className: `${Z.quickTab} ${R === O * 60 ? Z.activeQuickTab : ""}`, onClick: () => H(O) }, O, " мин")))), /* @__PURE__ */ i.createElement("label", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Устройство воспроизведения"), /* @__PURE__ */ i.createElement("select", { className: Z.select, value: E, onChange: (O) => C(O.target.value) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "Выберите устройство"), s.map((O) => /* @__PURE__ */ i.createElement("option", { key: O.id, value: O.id }, O.name)))), /* @__PURE__ */ i.createElement("label", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ i.createElement("input", { className: Z.input, type: "range", min: "0", max: "1", step: "0.05", value: g, onChange: (O) => N(Number(O.target.value)) }), /* @__PURE__ */ i.createElement("span", { className: Z.meta }, Math.round(g * 100), "%")))), /* @__PURE__ */ i.createElement(Zt, null)));
}, t0 = "_content_19r5a_1", n0 = "_title_19r5a_7", r0 = "_actions_19r5a_14", Zi = {
  content: t0,
  title: n0,
  actions: r0
}, l0 = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = mt();
  if (!o) return null;
  const h = (E) => {
    const C = E.status == "on" ? "off" : "on";
    c(E, C), s();
  }, y = /* @__PURE__ */ i.createElement("div", { className: Zi.content }, /* @__PURE__ */ i.createElement("h3", { className: Zi.title }, o.title), /* @__PURE__ */ i.createElement("div", { className: Zi.actions }, /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      onClick: () => h(o)
    },
    o.status == "on" ? "Выключить" : "Включить"
  ), /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        f(o), s();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ i.createElement(
    ae,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o), s();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, p ? /* @__PURE__ */ i.createElement(ps, { open: l, onClose: s }, y) : /* @__PURE__ */ i.createElement(
    Lt,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    y
  ));
}, yf = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], a0 = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Кастом" }
], Ad = (l = "once", o = []) => l === "daily" ? "ежедневно" : l === "weekdays" ? "по будням" : l === "weekends" ? "по выходным" : l === "custom" ? o.length ? o.map((s) => {
  var c;
  return ((c = yf.find((f) => f.key === s)) == null ? void 0 : c.label) || s;
}).join(", ") : "кастом" : "однократно", o0 = () => {
  const l = mt(), { alarmTimeWidgets: o, alarms: s, createAlarm: c, deleteAlarm: f, devices: m, loading: p, updateAlarm: h } = vf(), [y, E] = v.useState(!1), [C, g] = v.useState(!1), [N, M] = v.useState(null), [D, $] = v.useState(null), [k, L] = v.useState(""), [R, z] = v.useState("08:00"), [H, O] = v.useState(0.3), [A, K] = v.useState("once"), [ne, ge] = v.useState([]), _e = v.useMemo(() => Array.from(new Set(o.flatMap((W) => W.time || []))).filter(Boolean), [o]), oe = v.useMemo(() => new Map(m.map((W) => [W.id, W.name])), [m]), ue = s.find((W) => W.uuid === N) || null, Ne = async () => {
    if (!k || !R) return;
    const W = s.find((de) => de.uuid === D);
    W ? await h(W, { device_id: k, time: R, volume_start: H, repeat_type: A, repeat_days: ne }) : await c(k, R, H, A, ne), $(null), E(!1);
  }, De = (W) => {
    z(W.time), L(W.device_id), O(W.volume_start ?? 0.3), K(W.repeat_type ?? "once"), ge(W.repeat_days ?? []), $(W.uuid), M(null), E(!0);
  }, X = (W) => ge((de) => de.includes(W) ? de.filter((V) => V !== W) : [...de, W]);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Xt, { title: "Будильник" }), /* @__PURE__ */ i.createElement("div", { className: te.page }, /* @__PURE__ */ i.createElement(Jt, null), /* @__PURE__ */ i.createElement("div", { className: te.header }, /* @__PURE__ */ i.createElement("div", { className: te.heading }, l ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("h1", { className: te.title }, "Будильник"), /* @__PURE__ */ i.createElement("p", { className: te.description }, "Создавайте будильники, настраивайте повторы, устройство и громкость.")), /* @__PURE__ */ i.createElement("div", { className: te.actions }, l ? /* @__PURE__ */ i.createElement(Cn, { startVisible: !0 }, /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: () => E(!0)
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ i.createElement(
    ae,
    {
      variant: "primary",
      onClick: () => E(!0)
    },
    "🞢 Создать"
  ))), p && /* @__PURE__ */ i.createElement(en, null), /* @__PURE__ */ i.createElement("div", { className: Z.grid }, s.length ? s.map((W) => /* @__PURE__ */ i.createElement("button", { className: `${Z.card} ${Z.cardButton}`, key: W.uuid, type: "button", onClick: () => M(W.uuid) }, /* @__PURE__ */ i.createElement("div", { className: Z.cardHeader }, /* @__PURE__ */ i.createElement("div", { className: Z.cardLead }, /* @__PURE__ */ i.createElement(mf, { className: Z.cardIcon, size: 26 }), /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("h2", { className: Z.cardTitle }, W.time), /* @__PURE__ */ i.createElement("div", { className: Z.meta }, Ad(W.repeat_type, W.repeat_days), " • ", oe.get(W.device_id) || W.device_id))), /* @__PURE__ */ i.createElement(
    "div",
    {
      onClick: (de) => de.stopPropagation(),
      onMouseDown: (de) => de.stopPropagation()
    },
    /* @__PURE__ */ i.createElement(Kt, { label: "", checked: W.status !== "off", onClick: (de) => de.stopPropagation(), onChange: (de) => h(W, { status: de.currentTarget.checked ? "on" : "off" }) })
  )))) : /* @__PURE__ */ i.createElement("div", { className: Z.empty }, "Нет будильников.")), /* @__PURE__ */ i.createElement(Lt, { open: y, onClose: () => {
    E(!1), $(null);
  }, title: D ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ i.createElement(ae, { onClick: Ne, disabled: !k || !R }, "Сохранить") }, /* @__PURE__ */ i.createElement("div", { className: Z.form }, /* @__PURE__ */ i.createElement("label", { className: Z.wheelColumn }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Круговая чч мм"), /* @__PURE__ */ i.createElement("input", { className: `${Z.input} ${Z.timeInput}`, type: "time", value: R, onChange: (W) => z(W.target.value) })), /* @__PURE__ */ i.createElement("div", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Ранее заводимые"), /* @__PURE__ */ i.createElement("div", { className: Z.quickTabs }, _e.length ? _e.map((W) => /* @__PURE__ */ i.createElement("button", { key: W, type: "button", className: `${Z.quickTab} ${R === W ? Z.activeQuickTab : ""}`, onClick: () => z(W) }, W)) : /* @__PURE__ */ i.createElement("span", { className: Z.meta }, "Нет быстрых значений."))), /* @__PURE__ */ i.createElement("label", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Повторы"), /* @__PURE__ */ i.createElement("button", { type: "button", className: Z.selectButton, onClick: () => g(!0) }, Ad(A, ne))), /* @__PURE__ */ i.createElement("label", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Устройство воспроизведения"), /* @__PURE__ */ i.createElement("select", { className: Z, value: k, onChange: (W) => L(W.target.value) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "Выберите устройство"), m.map((W) => /* @__PURE__ */ i.createElement("option", { key: W.id, value: W.id }, W.name)))), /* @__PURE__ */ i.createElement("label", { className: Z.field }, /* @__PURE__ */ i.createElement("span", { className: Z.label }, "Стартовая громкость"), /* @__PURE__ */ i.createElement("input", { className: Z.input, type: "range", min: "0", max: "1", step: "0.05", value: H, onChange: (W) => O(Number(W.target.value)) }), /* @__PURE__ */ i.createElement("span", { className: Z.meta }, Math.round(H * 100), "%")))), /* @__PURE__ */ i.createElement(Lt, { open: C, onClose: () => g(!1), title: "Повторы", footer: /* @__PURE__ */ i.createElement(ae, { onClick: () => g(!1) }, "Готово") }, /* @__PURE__ */ i.createElement("div", { className: Z.form }, a0.map((W) => /* @__PURE__ */ i.createElement("button", { key: W.value, type: "button", className: `${Z.quickTab} ${A === W.value ? Z.activeQuickTab : ""}`, onClick: () => K(W.value) }, W.label)), A === "custom" && /* @__PURE__ */ i.createElement("div", { className: Z.quickTabs }, yf.map((W) => /* @__PURE__ */ i.createElement("button", { key: W.key, type: "button", className: `${Z.quickTab} ${ne.includes(W.key) ? Z.activeQuickTab : ""}`, onClick: () => X(W.key) }, W.label))))), /* @__PURE__ */ i.createElement(
    l0,
    {
      open: !!ue,
      onClose: () => M(null),
      command: ue,
      onEdit: (W) => De(W),
      onToggleStatus: (W, de) => h(W, { status: de }),
      onDelete: (W) => {
        f(W), M(null);
      }
    }
  ), /* @__PURE__ */ i.createElement(Zt, null)));
}, i0 = () => /* @__PURE__ */ i.createElement(Eh, null, /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/",
    element: /* @__PURE__ */ i.createElement(
      Ta,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/scripts",
    element: /* @__PURE__ */ i.createElement(wg, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands",
    element: /* @__PURE__ */ i.createElement(
      Ta,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ i.createElement(qg, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ i.createElement(Kg, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ i.createElement(
      Ta,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ i.createElement(Xg, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ i.createElement(Zg, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ i.createElement(r_, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/timer",
    element: /* @__PURE__ */ i.createElement(e0, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/alarm",
    element: /* @__PURE__ */ i.createElement(o0, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "/settings",
    element: /* @__PURE__ */ i.createElement(w_, null)
  }
), /* @__PURE__ */ i.createElement(
  ot,
  {
    path: "*",
    element: /* @__PURE__ */ i.createElement(
      Ta,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), gf = "dialog-custom-ui-theme", es = (l) => l === "light" ? "light" : "dark", s0 = (l) => {
  document.documentElement.dataset.theme = l, document.documentElement.style.colorScheme = l, localStorage.setItem(gf, l);
}, u0 = () => {
  const l = gr(), [o, s] = v.useState(() => es(localStorage.getItem(gf)));
  return v.useEffect(() => {
    s0(o);
  }, [o]), v.useEffect(() => {
    let c = !0;
    l._getShort("get_settings").then((m) => {
      var p;
      c && s(es((p = (m == null ? void 0 : m.result) ?? m) == null ? void 0 : p.theme));
    }).catch(console.error);
    const f = (m) => {
      s(es(m.detail));
    };
    return window.addEventListener("dialog-custom-ui-theme-change", f), () => {
      c = !1, window.removeEventListener("dialog-custom-ui-theme-change", f);
    };
  }, [l]), /* @__PURE__ */ i.createElement("div", { className: "appShell", "data-theme": o }, /* @__PURE__ */ i.createElement(i0, null));
};
class c0 {
  constructor(o) {
    this.hass = o;
  }
  setHass(o) {
    this.hass = o;
  }
  async _getShort(o, s, c) {
    return await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      ...s ? { page: s } : {},
      ...c ? { page_size: c } : {}
    });
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
  async getLocalMusicOptions() {
    const o = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, s = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), m = async (p) => {
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
            const N = "media-source://media_source/local/", M = C.startsWith(N) ? C.slice(N.length) : C;
            f.set(M, {
              value: M,
              label: g
            });
          }
        }
      }));
    };
    for (const p of s)
      try {
        await m(p);
      } catch (h) {
        console.warn("Failed to browse media source", p, h);
      }
    return Array.from(f.values()).sort(
      (p, h) => p.label.localeCompare(h.label)
    );
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
const d0 = 1, Ua = 2, ts = 3, f0 = 4, m0 = 5;
function p0(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function h0() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function v0(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Fd(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function y0() {
  return {
    type: "ping"
  };
}
function g0(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const _0 = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, E0 = "auth_invalid", w0 = "auth_ok";
function k0(l) {
  if (!l.auth)
    throw f0;
  const o = l.auth;
  let s = o.expired ? o.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function f(m, p, h) {
    const y = new WebSocket(c);
    let E = !1;
    const C = () => {
      if (y.removeEventListener("close", C), E) {
        h(Ua);
        return;
      }
      if (m === 0) {
        h(d0);
        return;
      }
      const M = m === -1 ? -1 : m - 1;
      setTimeout(() => f(M, p, h), 1e3);
    }, g = async (M) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), y.send(JSON.stringify(p0(o.accessToken)));
      } catch (D) {
        E = D === Ua, y.close();
      }
    }, N = async (M) => {
      const D = JSON.parse(M.data);
      switch (D.type) {
        case E0:
          E = !0, y.close();
          break;
        case w0:
          y.removeEventListener("open", g), y.removeEventListener("message", N), y.removeEventListener("close", C), y.removeEventListener("error", C), y.haVersion = D.ha_version, _0(y.haVersion, 2022, 9) && y.send(JSON.stringify(h0())), p(y);
          break;
      }
    };
    y.addEventListener("open", g), y.addEventListener("message", N), y.addEventListener("close", C), y.addEventListener("error", C);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class S0 {
  constructor(o, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Fd(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(g0(ts, "Connection lost"));
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
                for (const E of y)
                  E.reject && E.reject(ts);
              }
              h === Ua ? this.fireEvent("reconnect-error", h) : m(p + 1);
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
    return this.subscribeMessage(o, v0(s));
  }
  ping() {
    return this.sendMessagePromise(y0());
  }
  sendMessage(o, s) {
    if (!this.connected)
      throw ts;
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
          this.connected && await this.sendMessagePromise(Fd(h)), this.commands.delete(h);
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
const C0 = (l) => l * 1e3 + Date.now();
async function N0(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw m0;
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
    throw m.status === 400 || m.status === 403 ? Ua : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = C0(p.expires_in), p;
}
class x0 {
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
    const o = await N0(this.data.hassUrl, this.data.clientId, {
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
function T0(l, o) {
  return new x0({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function R0(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: k0 }, l), s = await o.createSocket(o);
  return new S0(s, o);
}
function P0(l) {
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
async function M0() {
  const s = T0(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await R0({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function L0({
  children: l,
  hass: o
}) {
  const s = v.useRef(null), [c, f] = v.useState(!1);
  return v.useEffect(() => {
    async function m() {
      const p = o ? P0(o) : await M0();
      s.current ? s.current.setHass(p) : s.current = new c0(p), f(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !s.current ? /* @__PURE__ */ i.createElement(en, { label: "Подключение к Home Assistant...", fullscreen: !0 }) : /* @__PURE__ */ i.createElement(uf.Provider, { value: s.current }, l);
}
function I0({ hass: l }) {
  return /* @__PURE__ */ i.createElement(Hh, null, /* @__PURE__ */ i.createElement(L0, { hass: l }, /* @__PURE__ */ i.createElement(u0, null)));
}
const jd = "dialog-custom-ui-panel", Ud = "dialog-custom-ui-style";
class $0 extends HTMLElement {
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
    if (c.getElementById(Ud))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Ud, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
    this.root || (this.root = kp.createRoot(o)), this.root.render(
      /* @__PURE__ */ i.createElement(i.StrictMode, null, /* @__PURE__ */ i.createElement(I0, { hass: this.hassValue }))
    );
  }
}
customElements.get(jd) || customElements.define(jd, $0);
