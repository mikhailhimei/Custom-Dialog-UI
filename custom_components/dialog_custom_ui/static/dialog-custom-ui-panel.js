function ed(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var yi = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic;
function xm() {
  if (Ic) return oe;
  Ic = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), T = Symbol.iterator;
  function D(k) {
    return k === null || typeof k != "object" ? null : (k = T && k[T] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, U = Object.assign, O = {};
  function P(k, g, F) {
    this.props = k, this.context = g, this.refs = O, this.updater = F || H;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(k, g) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, g, "setState");
  }, P.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function j() {
  }
  j.prototype = P.prototype;
  function L(k, g, F) {
    this.props = k, this.context = g, this.refs = O, this.updater = F || H;
  }
  var $ = L.prototype = new j();
  $.constructor = L, U($, P.prototype), $.isPureReactComponent = !0;
  var W = Array.isArray, b = Object.prototype.hasOwnProperty, le = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(k, g, F) {
    var V, re = {}, se = null, ge = null;
    if (g != null) for (V in g.ref !== void 0 && (ge = g.ref), g.key !== void 0 && (se = "" + g.key), g) b.call(g, V) && !ae.hasOwnProperty(V) && (re[V] = g[V]);
    var me = arguments.length - 2;
    if (me === 1) re.children = F;
    else if (1 < me) {
      for (var ke = Array(me), it = 0; it < me; it++) ke[it] = arguments[it + 2];
      re.children = ke;
    }
    if (k && k.defaultProps) for (V in me = k.defaultProps, me) re[V] === void 0 && (re[V] = me[V]);
    return { $$typeof: l, type: k, key: se, ref: ge, props: re, _owner: le.current };
  }
  function Ve(k, g) {
    return { $$typeof: l, type: k.type, key: g, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Te(k) {
    return typeof k == "object" && k !== null && k.$$typeof === l;
  }
  function Oe(k) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(F) {
      return g[F];
    });
  }
  var Ze = /\/+/g;
  function $e(k, g) {
    return typeof k == "object" && k !== null && k.key != null ? Oe("" + k.key) : g.toString(36);
  }
  function Qe(k, g, F, V, re) {
    var se = typeof k;
    (se === "undefined" || se === "boolean") && (k = null);
    var ge = !1;
    if (k === null) ge = !0;
    else switch (se) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case l:
          case i:
            ge = !0;
        }
    }
    if (ge) return ge = k, re = re(ge), k = V === "" ? "." + $e(ge, 0) : V, W(re) ? (F = "", k != null && (F = k.replace(Ze, "$&/") + "/"), Qe(re, g, F, "", function(it) {
      return it;
    })) : re != null && (Te(re) && (re = Ve(re, F + (!re.key || ge && ge.key === re.key ? "" : ("" + re.key).replace(Ze, "$&/") + "/") + k)), g.push(re)), 1;
    if (ge = 0, V = V === "" ? "." : V + ":", W(k)) for (var me = 0; me < k.length; me++) {
      se = k[me];
      var ke = V + $e(se, me);
      ge += Qe(se, g, F, ke, re);
    }
    else if (ke = D(k), typeof ke == "function") for (k = ke.call(k), me = 0; !(se = k.next()).done; ) se = se.value, ke = V + $e(se, me++), ge += Qe(se, g, F, ke, re);
    else if (se === "object") throw g = String(k), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function ve(k, g, F) {
    if (k == null) return k;
    var V = [], re = 0;
    return Qe(k, V, "", "", function(se) {
      return g.call(F, se, re++);
    }), V;
  }
  function Fe(k) {
    if (k._status === -1) {
      var g = k._result;
      g = g(), g.then(function(F) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = F);
      }, function(F) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = F);
      }), k._status === -1 && (k._status = 0, k._result = g);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ye = { current: null }, B = { transition: null }, Z = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: B, ReactCurrentOwner: le };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return oe.Children = { map: ve, forEach: function(k, g, F) {
    ve(k, function() {
      g.apply(this, arguments);
    }, F);
  }, count: function(k) {
    var g = 0;
    return ve(k, function() {
      g++;
    }), g;
  }, toArray: function(k) {
    return ve(k, function(g) {
      return g;
    }) || [];
  }, only: function(k) {
    if (!Te(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, oe.Component = P, oe.Fragment = s, oe.Profiler = f, oe.PureComponent = L, oe.StrictMode = u, oe.Suspense = w, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, oe.act = K, oe.cloneElement = function(k, g, F) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var V = U({}, k.props), re = k.key, se = k.ref, ge = k._owner;
    if (g != null) {
      if (g.ref !== void 0 && (se = g.ref, ge = le.current), g.key !== void 0 && (re = "" + g.key), k.type && k.type.defaultProps) var me = k.type.defaultProps;
      for (ke in g) b.call(g, ke) && !ae.hasOwnProperty(ke) && (V[ke] = g[ke] === void 0 && me !== void 0 ? me[ke] : g[ke]);
    }
    var ke = arguments.length - 2;
    if (ke === 1) V.children = F;
    else if (1 < ke) {
      me = Array(ke);
      for (var it = 0; it < ke; it++) me[it] = arguments[it + 2];
      V.children = me;
    }
    return { $$typeof: l, type: k.type, key: re, ref: se, props: V, _owner: ge };
  }, oe.createContext = function(k) {
    return k = { $$typeof: p, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: m, _context: k }, k.Consumer = k;
  }, oe.createElement = Pe, oe.createFactory = function(k) {
    var g = Pe.bind(null, k);
    return g.type = k, g;
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(k) {
    return { $$typeof: y, render: k };
  }, oe.isValidElement = Te, oe.lazy = function(k) {
    return { $$typeof: N, _payload: { _status: -1, _result: k }, _init: Fe };
  }, oe.memo = function(k, g) {
    return { $$typeof: x, type: k, compare: g === void 0 ? null : g };
  }, oe.startTransition = function(k) {
    var g = B.transition;
    B.transition = {};
    try {
      k();
    } finally {
      B.transition = g;
    }
  }, oe.unstable_act = K, oe.useCallback = function(k, g) {
    return ye.current.useCallback(k, g);
  }, oe.useContext = function(k) {
    return ye.current.useContext(k);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(k) {
    return ye.current.useDeferredValue(k);
  }, oe.useEffect = function(k, g) {
    return ye.current.useEffect(k, g);
  }, oe.useId = function() {
    return ye.current.useId();
  }, oe.useImperativeHandle = function(k, g, F) {
    return ye.current.useImperativeHandle(k, g, F);
  }, oe.useInsertionEffect = function(k, g) {
    return ye.current.useInsertionEffect(k, g);
  }, oe.useLayoutEffect = function(k, g) {
    return ye.current.useLayoutEffect(k, g);
  }, oe.useMemo = function(k, g) {
    return ye.current.useMemo(k, g);
  }, oe.useReducer = function(k, g, F) {
    return ye.current.useReducer(k, g, F);
  }, oe.useRef = function(k) {
    return ye.current.useRef(k);
  }, oe.useState = function(k) {
    return ye.current.useState(k);
  }, oe.useSyncExternalStore = function(k, g, F) {
    return ye.current.useSyncExternalStore(k, g, F);
  }, oe.useTransition = function() {
    return ye.current.useTransition();
  }, oe.version = "18.3.1", oe;
}
var zc;
function td() {
  return zc || (zc = 1, yi.exports = xm()), yi.exports;
}
var E = td();
const d = /* @__PURE__ */ ed(E);
var ia = {}, gi = { exports: {} }, at = {}, _i = { exports: {} }, Ei = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function Nm() {
  return Oc || (Oc = 1, (function(l) {
    function i(B, Z) {
      var K = B.length;
      B.push(Z);
      e: for (; 0 < K; ) {
        var k = K - 1 >>> 1, g = B[k];
        if (0 < f(g, Z)) B[k] = Z, B[K] = g, K = k;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function u(B) {
      if (B.length === 0) return null;
      var Z = B[0], K = B.pop();
      if (K !== Z) {
        B[0] = K;
        e: for (var k = 0, g = B.length, F = g >>> 1; k < F; ) {
          var V = 2 * (k + 1) - 1, re = B[V], se = V + 1, ge = B[se];
          if (0 > f(re, K)) se < g && 0 > f(ge, re) ? (B[k] = ge, B[se] = K, k = se) : (B[k] = re, B[V] = K, k = V);
          else if (se < g && 0 > f(ge, K)) B[k] = ge, B[se] = K, k = se;
          else break e;
        }
      }
      return Z;
    }
    function f(B, Z) {
      var K = B.sortIndex - Z.sortIndex;
      return K !== 0 ? K : B.id - Z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      l.unstable_now = function() {
        return m.now();
      };
    } else {
      var p = Date, y = p.now();
      l.unstable_now = function() {
        return p.now() - y;
      };
    }
    var w = [], x = [], N = 1, T = null, D = 3, H = !1, U = !1, O = !1, P = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function $(B) {
      for (var Z = s(x); Z !== null; ) {
        if (Z.callback === null) u(x);
        else if (Z.startTime <= B) u(x), Z.sortIndex = Z.expirationTime, i(w, Z);
        else break;
        Z = s(x);
      }
    }
    function W(B) {
      if (O = !1, $(B), !U) if (s(w) !== null) U = !0, Fe(b);
      else {
        var Z = s(x);
        Z !== null && ye(W, Z.startTime - B);
      }
    }
    function b(B, Z) {
      U = !1, O && (O = !1, j(Pe), Pe = -1), H = !0;
      var K = D;
      try {
        for ($(Z), T = s(w); T !== null && (!(T.expirationTime > Z) || B && !Oe()); ) {
          var k = T.callback;
          if (typeof k == "function") {
            T.callback = null, D = T.priorityLevel;
            var g = k(T.expirationTime <= Z);
            Z = l.unstable_now(), typeof g == "function" ? T.callback = g : T === s(w) && u(w), $(Z);
          } else u(w);
          T = s(w);
        }
        if (T !== null) var F = !0;
        else {
          var V = s(x);
          V !== null && ye(W, V.startTime - Z), F = !1;
        }
        return F;
      } finally {
        T = null, D = K, H = !1;
      }
    }
    var le = !1, ae = null, Pe = -1, Ve = 5, Te = -1;
    function Oe() {
      return !(l.unstable_now() - Te < Ve);
    }
    function Ze() {
      if (ae !== null) {
        var B = l.unstable_now();
        Te = B;
        var Z = !0;
        try {
          Z = ae(!0, B);
        } finally {
          Z ? $e() : (le = !1, ae = null);
        }
      } else le = !1;
    }
    var $e;
    if (typeof L == "function") $e = function() {
      L(Ze);
    };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), ve = Qe.port2;
      Qe.port1.onmessage = Ze, $e = function() {
        ve.postMessage(null);
      };
    } else $e = function() {
      P(Ze, 0);
    };
    function Fe(B) {
      ae = B, le || (le = !0, $e());
    }
    function ye(B, Z) {
      Pe = P(function() {
        B(l.unstable_now());
      }, Z);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      U || H || (U = !0, Fe(b));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ve = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(w);
    }, l.unstable_next = function(B) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = D;
      }
      var K = D;
      D = Z;
      try {
        return B();
      } finally {
        D = K;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(B, Z) {
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
      var K = D;
      D = B;
      try {
        return Z();
      } finally {
        D = K;
      }
    }, l.unstable_scheduleCallback = function(B, Z, K) {
      var k = l.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? k + K : k) : K = k, B) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = K + g, B = { id: N++, callback: Z, priorityLevel: B, startTime: K, expirationTime: g, sortIndex: -1 }, K > k ? (B.sortIndex = K, i(x, B), s(w) === null && B === s(x) && (O ? (j(Pe), Pe = -1) : O = !0, ye(W, K - k))) : (B.sortIndex = g, i(w, B), U || H || (U = !0, Fe(b))), B;
    }, l.unstable_shouldYield = Oe, l.unstable_wrapCallback = function(B) {
      var Z = D;
      return function() {
        var K = D;
        D = Z;
        try {
          return B.apply(this, arguments);
        } finally {
          D = K;
        }
      };
    };
  })(Ei)), Ei;
}
var $c;
function Tm() {
  return $c || ($c = 1, _i.exports = Nm()), _i.exports;
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
function Rm() {
  if (Fc) return at;
  Fc = 1;
  var l = td(), i = Tm();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), f = {};
  function m(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, T = {};
  function D(e) {
    return w.call(T, e) ? !0 : w.call(N, e) ? !1 : x.test(e) ? T[e] = !0 : (N[e] = !0, !1);
  }
  function H(e, t, n, r) {
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
    if (t === null || typeof t > "u" || H(e, t, n, r)) return !0;
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
  function O(e, t, n, r, a, o, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = c;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    P[e] = new O(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    P[t] = new O(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    P[e] = new O(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    P[e] = new O(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    P[e] = new O(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    P[e] = new O(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    P[e] = new O(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    P[e] = new O(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    P[e] = new O(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      L
    );
    P[t] = new O(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, L);
    P[t] = new O(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, L);
    P[t] = new O(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    P[e] = new O(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    P[e] = new O(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function $(e, t, n, r) {
    var a = P.hasOwnProperty(t) ? P[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (U(t, n, a, r) && (n = null), r || a === null ? D(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var W = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), le = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), Te = Symbol.for("react.provider"), Oe = Symbol.for("react.context"), Ze = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var K = Object.assign, k;
  function g(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var F = !1;
  function V(e, t) {
    if (!e || F) return "";
    F = !0;
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
                var v = `
` + a[c].replace(" at new ", " at ");
                return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), v;
              }
            while (1 <= c && 0 <= h);
          break;
        }
      }
    } finally {
      F = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = V(e.type, !1), e;
      case 11:
        return e = V(e.type.render, !1), e;
      case 1:
        return e = V(e.type, !0), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case le:
        return "Portal";
      case Ve:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case $e:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Oe:
        return (e.displayName || "Context") + ".Consumer";
      case Te:
        return (e._context.displayName || "Context") + ".Provider";
      case Ze:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ve:
        return t = e.displayName || null, t !== null ? t : se(e.type) || "Memo";
      case Fe:
        t = e._payload, e = e._init;
        try {
          return se(e(t));
        } catch {
        }
    }
    return null;
  }
  function ge(e) {
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
  function me(e) {
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
  function ke(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function it(e) {
    var t = ke(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function Jr(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ke(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function br(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Sa(e, t) {
    var n = t.checked;
    return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Ui(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = me(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Bi(e, t) {
    t = t.checked, t != null && $(e, "checked", t, !1);
  }
  function Ca(e, t) {
    Bi(e, t);
    var n = me(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? xa(e, t.type, n) : t.hasOwnProperty("defaultValue") && xa(e, t.type, me(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Hi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function xa(e, t, n) {
    (t !== "number" || br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var nr = Array.isArray;
  function Pn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + me(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Na(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Wi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (nr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: me(n) };
  }
  function Vi(e, t) {
    var n = me(t.value), r = me(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Qi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ki(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ta(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ki(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Zr, Yi = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function rr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var lr = {
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
  }, Rd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(lr).forEach(function(e) {
    Rd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e];
    });
  });
  function qi(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px";
  }
  function Gi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = qi(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Pd = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ra(e, t) {
    if (t) {
      if (Pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Pa(e, t) {
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
  var La = null;
  function Ma(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Da = null, Ln = null, Mn = null;
  function Xi(e) {
    if (e = Nr(e)) {
      if (typeof Da != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = kl(t), Da(e.stateNode, e.type, t));
    }
  }
  function Ji(e) {
    Ln ? Mn ? Mn.push(e) : Mn = [e] : Ln = e;
  }
  function bi() {
    if (Ln) {
      var e = Ln, t = Mn;
      if (Mn = Ln = null, Xi(e), t) for (e = 0; e < t.length; e++) Xi(t[e]);
    }
  }
  function Zi(e, t) {
    return e(t);
  }
  function es() {
  }
  var Ia = !1;
  function ts(e, t, n) {
    if (Ia) return e(t, n);
    Ia = !0;
    try {
      return Zi(e, t, n);
    } finally {
      Ia = !1, (Ln !== null || Mn !== null) && (es(), bi());
    }
  }
  function ar(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = kl(n);
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
  var za = !1;
  if (y) try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      za = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    za = !1;
  }
  function Ld(e, t, n, r, a, o, c, h, v) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, R);
    } catch (I) {
      this.onError(I);
    }
  }
  var ir = !1, el = null, tl = !1, Oa = null, Md = { onError: function(e) {
    ir = !0, el = e;
  } };
  function Dd(e, t, n, r, a, o, c, h, v) {
    ir = !1, el = null, Ld.apply(Md, arguments);
  }
  function Id(e, t, n, r, a, o, c, h, v) {
    if (Dd.apply(this, arguments), ir) {
      if (ir) {
        var R = el;
        ir = !1, el = null;
      } else throw Error(s(198));
      tl || (tl = !0, Oa = R);
    }
  }
  function dn(e) {
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
  function ns(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function rs(e) {
    if (dn(e) !== e) throw Error(s(188));
  }
  function zd(e) {
    var t = e.alternate;
    if (!t) {
      if (t = dn(e), t === null) throw Error(s(188));
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
          if (o === n) return rs(a), e;
          if (o === r) return rs(a), t;
          o = o.sibling;
        }
        throw Error(s(188));
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
          if (!c) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ls(e) {
    return e = zd(e), e !== null ? as(e) : null;
  }
  function as(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = as(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var os = i.unstable_scheduleCallback, is = i.unstable_cancelCallback, Od = i.unstable_shouldYield, $d = i.unstable_requestPaint, Le = i.unstable_now, Fd = i.unstable_getCurrentPriorityLevel, $a = i.unstable_ImmediatePriority, ss = i.unstable_UserBlockingPriority, nl = i.unstable_NormalPriority, Ad = i.unstable_LowPriority, us = i.unstable_IdlePriority, rl = null, Pt = null;
  function jd(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function") try {
      Pt.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : Hd, Ud = Math.log, Bd = Math.LN2;
  function Hd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ud(e) / Bd | 0) | 0;
  }
  var ll = 64, al = 4194304;
  function sr(e) {
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
  function ol(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, o = e.pingedLanes, c = n & 268435455;
    if (c !== 0) {
      var h = c & ~a;
      h !== 0 ? r = sr(h) : (o &= c, o !== 0 && (r = sr(o)));
    } else c = n & ~a, c !== 0 ? r = sr(c) : o !== 0 && (r = sr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Wd(e, t) {
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
  function Vd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var c = 31 - wt(o), h = 1 << c, v = a[c];
      v === -1 ? ((h & n) === 0 || (h & r) !== 0) && (a[c] = Wd(h, t)) : v <= t && (e.expiredLanes |= h), o &= ~h;
    }
  }
  function Fa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function cs() {
    var e = ll;
    return ll <<= 1, (ll & 4194240) === 0 && (ll = 64), e;
  }
  function Aa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ur(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function Qd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - wt(n), o = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
    }
  }
  function ja(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - wt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var pe = 0;
  function ds(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var fs, Ua, ms, ps, hs, Ba = !1, il = [], Qt = null, Kt = null, Yt = null, cr = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), qt = [], Kd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function vs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Yt = null;
        break;
      case "pointerover":
      case "pointerout":
        cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dr.delete(t.pointerId);
    }
  }
  function fr(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Nr(t), t !== null && Ua(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Yd(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Qt = fr(Qt, e, t, n, r, a), !0;
      case "dragenter":
        return Kt = fr(Kt, e, t, n, r, a), !0;
      case "mouseover":
        return Yt = fr(Yt, e, t, n, r, a), !0;
      case "pointerover":
        var o = a.pointerId;
        return cr.set(o, fr(cr.get(o) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return o = a.pointerId, dr.set(o, fr(dr.get(o) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function ys(e) {
    var t = fn(e.target);
    if (t !== null) {
      var n = dn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ns(n), t !== null) {
            e.blockedOn = t, hs(e.priority, function() {
              ms(n);
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
  function sl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        La = r, n.target.dispatchEvent(r), La = null;
      } else return t = Nr(n), t !== null && Ua(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function gs(e, t, n) {
    sl(e) && n.delete(t);
  }
  function qd() {
    Ba = !1, Qt !== null && sl(Qt) && (Qt = null), Kt !== null && sl(Kt) && (Kt = null), Yt !== null && sl(Yt) && (Yt = null), cr.forEach(gs), dr.forEach(gs);
  }
  function mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ba || (Ba = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, qd)));
  }
  function pr(e) {
    function t(a) {
      return mr(a, e);
    }
    if (0 < il.length) {
      mr(il[0], e);
      for (var n = 1; n < il.length; n++) {
        var r = il[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Qt !== null && mr(Qt, e), Kt !== null && mr(Kt, e), Yt !== null && mr(Yt, e), cr.forEach(t), dr.forEach(t), n = 0; n < qt.length; n++) r = qt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qt.length && (n = qt[0], n.blockedOn === null); ) ys(n), n.blockedOn === null && qt.shift();
  }
  var Dn = W.ReactCurrentBatchConfig, ul = !0;
  function Gd(e, t, n, r) {
    var a = pe, o = Dn.transition;
    Dn.transition = null;
    try {
      pe = 1, Ha(e, t, n, r);
    } finally {
      pe = a, Dn.transition = o;
    }
  }
  function Xd(e, t, n, r) {
    var a = pe, o = Dn.transition;
    Dn.transition = null;
    try {
      pe = 4, Ha(e, t, n, r);
    } finally {
      pe = a, Dn.transition = o;
    }
  }
  function Ha(e, t, n, r) {
    if (ul) {
      var a = Wa(e, t, n, r);
      if (a === null) oo(e, t, r, cl, n), vs(e, r);
      else if (Yd(a, e, t, n, r)) r.stopPropagation();
      else if (vs(e, r), t & 4 && -1 < Kd.indexOf(e)) {
        for (; a !== null; ) {
          var o = Nr(a);
          if (o !== null && fs(o), o = Wa(e, t, n, r), o === null && oo(e, t, r, cl, n), o === a) break;
          a = o;
        }
        a !== null && r.stopPropagation();
      } else oo(e, t, r, null, n);
    }
  }
  var cl = null;
  function Wa(e, t, n, r) {
    if (cl = null, e = Ma(r), e = fn(e), e !== null) if (t = dn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ns(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return cl = e, null;
  }
  function _s(e) {
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
        switch (Fd()) {
          case $a:
            return 1;
          case ss:
            return 4;
          case nl:
          case Ad:
            return 16;
          case us:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Gt = null, Va = null, dl = null;
  function Es() {
    if (dl) return dl;
    var e, t = Va, n = t.length, r, a = "value" in Gt ? Gt.value : Gt.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === a[o - r]; r++) ;
    return dl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function fl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ml() {
    return !0;
  }
  function ws() {
    return !1;
  }
  function st(e) {
    function t(n, r, a, o, c) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = c, this.currentTarget = null;
      for (var h in e) e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(o) : o[h]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ml : ws, this.isPropagationStopped = ws, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ml);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ml);
    }, persist: function() {
    }, isPersistent: ml }), t;
  }
  var In = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qa = st(In), hr = K({}, In, { view: 0, detail: 0 }), Jd = st(hr), Ka, Ya, vr, pl = K({}, hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ga, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== vr && (vr && e.type === "mousemove" ? (Ka = e.screenX - vr.screenX, Ya = e.screenY - vr.screenY) : Ya = Ka = 0, vr = e), Ka);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ya;
  } }), ks = st(pl), bd = K({}, pl, { dataTransfer: 0 }), Zd = st(bd), ef = K({}, hr, { relatedTarget: 0 }), qa = st(ef), tf = K({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nf = st(tf), rf = K({}, In, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), lf = st(rf), af = K({}, In, { data: 0 }), Ss = st(af), of = {
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
  }, sf = {
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
  }, uf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function cf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = uf[e]) ? !!t[e] : !1;
  }
  function Ga() {
    return cf;
  }
  var df = K({}, hr, { key: function(e) {
    if (e.key) {
      var t = of[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ga, charCode: function(e) {
    return e.type === "keypress" ? fl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ff = st(df), mf = K({}, pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cs = st(mf), pf = K({}, hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ga }), hf = st(pf), vf = K({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yf = st(vf), gf = K({}, pl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _f = st(gf), Ef = [9, 13, 27, 32], Xa = y && "CompositionEvent" in window, yr = null;
  y && "documentMode" in document && (yr = document.documentMode);
  var wf = y && "TextEvent" in window && !yr, xs = y && (!Xa || yr && 8 < yr && 11 >= yr), Ns = " ", Ts = !1;
  function Rs(e, t) {
    switch (e) {
      case "keyup":
        return Ef.indexOf(t.keyCode) !== -1;
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
  function Ps(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var zn = !1;
  function kf(e, t) {
    switch (e) {
      case "compositionend":
        return Ps(t);
      case "keypress":
        return t.which !== 32 ? null : (Ts = !0, Ns);
      case "textInput":
        return e = t.data, e === Ns && Ts ? null : e;
      default:
        return null;
    }
  }
  function Sf(e, t) {
    if (zn) return e === "compositionend" || !Xa && Rs(e, t) ? (e = Es(), dl = Va = Gt = null, zn = !1, e) : null;
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
        return xs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ls(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Cf[e.type] : t === "textarea";
  }
  function Ms(e, t, n, r) {
    Ji(r), t = _l(t, "onChange"), 0 < t.length && (n = new Qa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var gr = null, _r = null;
  function xf(e) {
    Gs(e, 0);
  }
  function hl(e) {
    var t = jn(e);
    if (ji(t)) return e;
  }
  function Nf(e, t) {
    if (e === "change") return t;
  }
  var Ds = !1;
  if (y) {
    var Ja;
    if (y) {
      var ba = "oninput" in document;
      if (!ba) {
        var Is = document.createElement("div");
        Is.setAttribute("oninput", "return;"), ba = typeof Is.oninput == "function";
      }
      Ja = ba;
    } else Ja = !1;
    Ds = Ja && (!document.documentMode || 9 < document.documentMode);
  }
  function zs() {
    gr && (gr.detachEvent("onpropertychange", Os), _r = gr = null);
  }
  function Os(e) {
    if (e.propertyName === "value" && hl(_r)) {
      var t = [];
      Ms(t, _r, e, Ma(e)), ts(xf, t);
    }
  }
  function Tf(e, t, n) {
    e === "focusin" ? (zs(), gr = t, _r = n, gr.attachEvent("onpropertychange", Os)) : e === "focusout" && zs();
  }
  function Rf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return hl(_r);
  }
  function Pf(e, t) {
    if (e === "click") return hl(t);
  }
  function Lf(e, t) {
    if (e === "input" || e === "change") return hl(t);
  }
  function Mf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : Mf;
  function Er(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!w.call(t, a) || !kt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function $s(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fs(e, t) {
    var n = $s(e);
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
      n = $s(n);
    }
  }
  function As(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? As(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function js() {
    for (var e = window, t = br(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = br(e.document);
    }
    return t;
  }
  function Za(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Df(e) {
    var t = js(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && As(n.ownerDocument.documentElement, n)) {
      if (r !== null && Za(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, o = Math.min(r.start, a);
          r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = Fs(n, o);
          var c = Fs(
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
  var If = y && "documentMode" in document && 11 >= document.documentMode, On = null, eo = null, wr = null, to = !1;
  function Us(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    to || On == null || On !== br(r) || (r = On, "selectionStart" in r && Za(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wr && Er(wr, r) || (wr = r, r = _l(eo, "onSelect"), 0 < r.length && (t = new Qa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = On)));
  }
  function vl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $n = { animationend: vl("Animation", "AnimationEnd"), animationiteration: vl("Animation", "AnimationIteration"), animationstart: vl("Animation", "AnimationStart"), transitionend: vl("Transition", "TransitionEnd") }, no = {}, Bs = {};
  y && (Bs = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);
  function yl(e) {
    if (no[e]) return no[e];
    if (!$n[e]) return e;
    var t = $n[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Bs) return no[e] = t[n];
    return e;
  }
  var Hs = yl("animationend"), Ws = yl("animationiteration"), Vs = yl("animationstart"), Qs = yl("transitionend"), Ks = /* @__PURE__ */ new Map(), Ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Xt(e, t) {
    Ks.set(e, t), m(t, [e]);
  }
  for (var ro = 0; ro < Ys.length; ro++) {
    var lo = Ys[ro], zf = lo.toLowerCase(), Of = lo[0].toUpperCase() + lo.slice(1);
    Xt(zf, "on" + Of);
  }
  Xt(Hs, "onAnimationEnd"), Xt(Ws, "onAnimationIteration"), Xt(Vs, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(Qs, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
  function qs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Id(r, t, void 0, e), e.currentTarget = null;
  }
  function Gs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var c = r.length - 1; 0 <= c; c--) {
          var h = r[c], v = h.instance, R = h.currentTarget;
          if (h = h.listener, v !== o && a.isPropagationStopped()) break e;
          qs(a, h, R), o = v;
        }
        else for (c = 0; c < r.length; c++) {
          if (h = r[c], v = h.instance, R = h.currentTarget, h = h.listener, v !== o && a.isPropagationStopped()) break e;
          qs(a, h, R), o = v;
        }
      }
    }
    if (tl) throw e = Oa, tl = !1, Oa = null, e;
  }
  function Ee(e, t) {
    var n = t[mo];
    n === void 0 && (n = t[mo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Xs(t, e, 2, !1), n.add(r));
  }
  function ao(e, t, n) {
    var r = 0;
    t && (r |= 4), Xs(n, e, r, t);
  }
  var gl = "_reactListening" + Math.random().toString(36).slice(2);
  function Sr(e) {
    if (!e[gl]) {
      e[gl] = !0, u.forEach(function(n) {
        n !== "selectionchange" && ($f.has(n) || ao(n, !1, e), ao(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gl] || (t[gl] = !0, ao("selectionchange", !1, t));
    }
  }
  function Xs(e, t, n, r) {
    switch (_s(t)) {
      case 1:
        var a = Gd;
        break;
      case 4:
        a = Xd;
        break;
      default:
        a = Ha;
    }
    n = a.bind(null, t, n, e), a = void 0, !za || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function oo(e, t, n, r, a) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var c = r.tag;
      if (c === 3 || c === 4) {
        var h = r.stateNode.containerInfo;
        if (h === a || h.nodeType === 8 && h.parentNode === a) break;
        if (c === 4) for (c = r.return; c !== null; ) {
          var v = c.tag;
          if ((v === 3 || v === 4) && (v = c.stateNode.containerInfo, v === a || v.nodeType === 8 && v.parentNode === a)) return;
          c = c.return;
        }
        for (; h !== null; ) {
          if (c = fn(h), c === null) return;
          if (v = c.tag, v === 5 || v === 6) {
            r = o = c;
            continue e;
          }
          h = h.parentNode;
        }
      }
      r = r.return;
    }
    ts(function() {
      var R = o, I = Ma(n), z = [];
      e: {
        var M = Ks.get(e);
        if (M !== void 0) {
          var Q = Qa, q = e;
          switch (e) {
            case "keypress":
              if (fl(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = ff;
              break;
            case "focusin":
              q = "focus", Q = qa;
              break;
            case "focusout":
              q = "blur", Q = qa;
              break;
            case "beforeblur":
            case "afterblur":
              Q = qa;
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
              Q = ks;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Zd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = hf;
              break;
            case Hs:
            case Ws:
            case Vs:
              Q = nf;
              break;
            case Qs:
              Q = yf;
              break;
            case "scroll":
              Q = Jd;
              break;
            case "wheel":
              Q = _f;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = lf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Cs;
          }
          var G = (t & 4) !== 0, Me = !G && e === "scroll", S = G ? M !== null ? M + "Capture" : null : M;
          G = [];
          for (var _ = R, C; _ !== null; ) {
            C = _;
            var A = C.stateNode;
            if (C.tag === 5 && A !== null && (C = A, S !== null && (A = ar(_, S), A != null && G.push(Cr(_, A, C)))), Me) break;
            _ = _.return;
          }
          0 < G.length && (M = new Q(M, q, null, n, I), z.push({ event: M, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", M && n !== La && (q = n.relatedTarget || n.fromElement) && (fn(q) || q[$t])) break e;
          if ((Q || M) && (M = I.window === I ? I : (M = I.ownerDocument) ? M.defaultView || M.parentWindow : window, Q ? (q = n.relatedTarget || n.toElement, Q = R, q = q ? fn(q) : null, q !== null && (Me = dn(q), q !== Me || q.tag !== 5 && q.tag !== 6) && (q = null)) : (Q = null, q = R), Q !== q)) {
            if (G = ks, A = "onMouseLeave", S = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (G = Cs, A = "onPointerLeave", S = "onPointerEnter", _ = "pointer"), Me = Q == null ? M : jn(Q), C = q == null ? M : jn(q), M = new G(A, _ + "leave", Q, n, I), M.target = Me, M.relatedTarget = C, A = null, fn(I) === R && (G = new G(S, _ + "enter", q, n, I), G.target = C, G.relatedTarget = Me, A = G), Me = A, Q && q) t: {
              for (G = Q, S = q, _ = 0, C = G; C; C = Fn(C)) _++;
              for (C = 0, A = S; A; A = Fn(A)) C++;
              for (; 0 < _ - C; ) G = Fn(G), _--;
              for (; 0 < C - _; ) S = Fn(S), C--;
              for (; _--; ) {
                if (G === S || S !== null && G === S.alternate) break t;
                G = Fn(G), S = Fn(S);
              }
              G = null;
            }
            else G = null;
            Q !== null && Js(z, M, Q, G, !1), q !== null && Me !== null && Js(z, Me, q, G, !0);
          }
        }
        e: {
          if (M = R ? jn(R) : window, Q = M.nodeName && M.nodeName.toLowerCase(), Q === "select" || Q === "input" && M.type === "file") var X = Nf;
          else if (Ls(M)) if (Ds) X = Lf;
          else {
            X = Rf;
            var ee = Tf;
          }
          else (Q = M.nodeName) && Q.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (X = Pf);
          if (X && (X = X(e, R))) {
            Ms(z, X, n, I);
            break e;
          }
          ee && ee(e, M, R), e === "focusout" && (ee = M._wrapperState) && ee.controlled && M.type === "number" && xa(M, "number", M.value);
        }
        switch (ee = R ? jn(R) : window, e) {
          case "focusin":
            (Ls(ee) || ee.contentEditable === "true") && (On = ee, eo = R, wr = null);
            break;
          case "focusout":
            wr = eo = On = null;
            break;
          case "mousedown":
            to = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            to = !1, Us(z, n, I);
            break;
          case "selectionchange":
            if (If) break;
          case "keydown":
          case "keyup":
            Us(z, n, I);
        }
        var te;
        if (Xa) e: {
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
        else zn ? Rs(e, n) && (ne = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ne = "onCompositionStart");
        ne && (xs && n.locale !== "ko" && (zn || ne !== "onCompositionStart" ? ne === "onCompositionEnd" && zn && (te = Es()) : (Gt = I, Va = "value" in Gt ? Gt.value : Gt.textContent, zn = !0)), ee = _l(R, ne), 0 < ee.length && (ne = new Ss(ne, e, null, n, I), z.push({ event: ne, listeners: ee }), te ? ne.data = te : (te = Ps(n), te !== null && (ne.data = te)))), (te = wf ? kf(e, n) : Sf(e, n)) && (R = _l(R, "onBeforeInput"), 0 < R.length && (I = new Ss("onBeforeInput", "beforeinput", null, n, I), z.push({ event: I, listeners: R }), I.data = te));
      }
      Gs(z, t);
    });
  }
  function Cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function _l(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, o = a.stateNode;
      a.tag === 5 && o !== null && (a = o, o = ar(e, n), o != null && r.unshift(Cr(e, o, a)), o = ar(e, t), o != null && r.push(Cr(e, o, a))), e = e.return;
    }
    return r;
  }
  function Fn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Js(e, t, n, r, a) {
    for (var o = t._reactName, c = []; n !== null && n !== r; ) {
      var h = n, v = h.alternate, R = h.stateNode;
      if (v !== null && v === r) break;
      h.tag === 5 && R !== null && (h = R, a ? (v = ar(n, o), v != null && c.unshift(Cr(n, v, h))) : a || (v = ar(n, o), v != null && c.push(Cr(n, v, h)))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Ff = /\r\n?/g, Af = /\u0000|\uFFFD/g;
  function bs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ff, `
`).replace(Af, "");
  }
  function El(e, t, n) {
    if (t = bs(t), bs(e) !== t && n) throw Error(s(425));
  }
  function wl() {
  }
  var io = null, so = null;
  function uo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var co = typeof setTimeout == "function" ? setTimeout : void 0, jf = typeof clearTimeout == "function" ? clearTimeout : void 0, Zs = typeof Promise == "function" ? Promise : void 0, Uf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zs < "u" ? function(e) {
    return Zs.resolve(null).then(e).catch(Bf);
  } : co;
  function Bf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function fo(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), pr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    pr(t);
  }
  function Jt(e) {
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
  function eu(e) {
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
  var An = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + An, xr = "__reactProps$" + An, $t = "__reactContainer$" + An, mo = "__reactEvents$" + An, Hf = "__reactListeners$" + An, Wf = "__reactHandles$" + An;
  function fn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[$t] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = eu(e); e !== null; ) {
          if (n = e[Lt]) return n;
          e = eu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Nr(e) {
    return e = e[Lt] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function jn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function kl(e) {
    return e[xr] || null;
  }
  var po = [], Un = -1;
  function bt(e) {
    return { current: e };
  }
  function we(e) {
    0 > Un || (e.current = po[Un], po[Un] = null, Un--);
  }
  function _e(e, t) {
    Un++, po[Un] = e.current, e.current = t;
  }
  var Zt = {}, Ke = bt(Zt), et = bt(!1), mn = Zt;
  function Bn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Zt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, o;
    for (o in n) a[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Sl() {
    we(et), we(Ke);
  }
  function tu(e, t, n) {
    if (Ke.current !== Zt) throw Error(s(168));
    _e(Ke, t), _e(et, n);
  }
  function nu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, ge(e) || "Unknown", a));
    return K({}, n, r);
  }
  function Cl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, mn = Ke.current, _e(Ke, e), _e(et, et.current), !0;
  }
  function ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = nu(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, we(et), we(Ke), _e(Ke, e)) : we(et), _e(et, n);
  }
  var Ft = null, xl = !1, ho = !1;
  function lu(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  function Vf(e) {
    xl = !0, lu(e);
  }
  function en() {
    if (!ho && Ft !== null) {
      ho = !0;
      var e = 0, t = pe;
      try {
        var n = Ft;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ft = null, xl = !1;
      } catch (a) {
        throw Ft !== null && (Ft = Ft.slice(e + 1)), os($a, en), a;
      } finally {
        pe = t, ho = !1;
      }
    }
    return null;
  }
  var Hn = [], Wn = 0, Nl = null, Tl = 0, mt = [], pt = 0, pn = null, At = 1, jt = "";
  function hn(e, t) {
    Hn[Wn++] = Tl, Hn[Wn++] = Nl, Nl = e, Tl = t;
  }
  function au(e, t, n) {
    mt[pt++] = At, mt[pt++] = jt, mt[pt++] = pn, pn = e;
    var r = At;
    e = jt;
    var a = 32 - wt(r) - 1;
    r &= ~(1 << a), n += 1;
    var o = 32 - wt(t) + a;
    if (30 < o) {
      var c = a - a % 5;
      o = (r & (1 << c) - 1).toString(32), r >>= c, a -= c, At = 1 << 32 - wt(t) + a | n << a | r, jt = o + e;
    } else At = 1 << o | n << a | r, jt = e;
  }
  function vo(e) {
    e.return !== null && (hn(e, 1), au(e, 1, 0));
  }
  function yo(e) {
    for (; e === Nl; ) Nl = Hn[--Wn], Hn[Wn] = null, Tl = Hn[--Wn], Hn[Wn] = null;
    for (; e === pn; ) pn = mt[--pt], mt[pt] = null, jt = mt[--pt], mt[pt] = null, At = mt[--pt], mt[pt] = null;
  }
  var ut = null, ct = null, Se = !1, St = null;
  function ou(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function iu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = Jt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = pn !== null ? { id: At, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function go(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _o(e) {
    if (Se) {
      var t = ct;
      if (t) {
        var n = t;
        if (!iu(e, t)) {
          if (go(e)) throw Error(s(418));
          t = Jt(n.nextSibling);
          var r = ut;
          t && iu(e, t) ? ou(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, ut = e);
        }
      } else {
        if (go(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Se = !1, ut = e;
      }
    }
  }
  function su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function Rl(e) {
    if (e !== ut) return !1;
    if (!Se) return su(e), Se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !uo(e.type, e.memoizedProps)), t && (t = ct)) {
      if (go(e)) throw uu(), Error(s(418));
      for (; t; ) ou(e, t), t = Jt(t.nextSibling);
    }
    if (su(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ct = Jt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function uu() {
    for (var e = ct; e; ) e = Jt(e.nextSibling);
  }
  function Vn() {
    ct = ut = null, Se = !1;
  }
  function Eo(e) {
    St === null ? St = [e] : St.push(e);
  }
  var Qf = W.ReactCurrentBatchConfig;
  function Tr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var a = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(c) {
          var h = a.refs;
          c === null ? delete h[o] : h[o] = c;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Pl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function cu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function du(e) {
    function t(S, _) {
      if (e) {
        var C = S.deletions;
        C === null ? (S.deletions = [_], S.flags |= 16) : C.push(_);
      }
    }
    function n(S, _) {
      if (!e) return null;
      for (; _ !== null; ) t(S, _), _ = _.sibling;
      return null;
    }
    function r(S, _) {
      for (S = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? S.set(_.key, _) : S.set(_.index, _), _ = _.sibling;
      return S;
    }
    function a(S, _) {
      return S = un(S, _), S.index = 0, S.sibling = null, S;
    }
    function o(S, _, C) {
      return S.index = C, e ? (C = S.alternate, C !== null ? (C = C.index, C < _ ? (S.flags |= 2, _) : C) : (S.flags |= 2, _)) : (S.flags |= 1048576, _);
    }
    function c(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function h(S, _, C, A) {
      return _ === null || _.tag !== 6 ? (_ = di(C, S.mode, A), _.return = S, _) : (_ = a(_, C), _.return = S, _);
    }
    function v(S, _, C, A) {
      var X = C.type;
      return X === ae ? I(S, _, C.props.children, A, C.key) : _ !== null && (_.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Fe && cu(X) === _.type) ? (A = a(_, C.props), A.ref = Tr(S, _, C), A.return = S, A) : (A = Zl(C.type, C.key, C.props, null, S.mode, A), A.ref = Tr(S, _, C), A.return = S, A);
    }
    function R(S, _, C, A) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== C.containerInfo || _.stateNode.implementation !== C.implementation ? (_ = fi(C, S.mode, A), _.return = S, _) : (_ = a(_, C.children || []), _.return = S, _);
    }
    function I(S, _, C, A, X) {
      return _ === null || _.tag !== 7 ? (_ = Sn(C, S.mode, A, X), _.return = S, _) : (_ = a(_, C), _.return = S, _);
    }
    function z(S, _, C) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = di("" + _, S.mode, C), _.return = S, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case b:
            return C = Zl(_.type, _.key, _.props, null, S.mode, C), C.ref = Tr(S, null, _), C.return = S, C;
          case le:
            return _ = fi(_, S.mode, C), _.return = S, _;
          case Fe:
            var A = _._init;
            return z(S, A(_._payload), C);
        }
        if (nr(_) || Z(_)) return _ = Sn(_, S.mode, C, null), _.return = S, _;
        Pl(S, _);
      }
      return null;
    }
    function M(S, _, C, A) {
      var X = _ !== null ? _.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number") return X !== null ? null : h(S, _, "" + C, A);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case b:
            return C.key === X ? v(S, _, C, A) : null;
          case le:
            return C.key === X ? R(S, _, C, A) : null;
          case Fe:
            return X = C._init, M(
              S,
              _,
              X(C._payload),
              A
            );
        }
        if (nr(C) || Z(C)) return X !== null ? null : I(S, _, C, A, null);
        Pl(S, C);
      }
      return null;
    }
    function Q(S, _, C, A, X) {
      if (typeof A == "string" && A !== "" || typeof A == "number") return S = S.get(C) || null, h(_, S, "" + A, X);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case b:
            return S = S.get(A.key === null ? C : A.key) || null, v(_, S, A, X);
          case le:
            return S = S.get(A.key === null ? C : A.key) || null, R(_, S, A, X);
          case Fe:
            var ee = A._init;
            return Q(S, _, C, ee(A._payload), X);
        }
        if (nr(A) || Z(A)) return S = S.get(C) || null, I(_, S, A, X, null);
        Pl(_, A);
      }
      return null;
    }
    function q(S, _, C, A) {
      for (var X = null, ee = null, te = _, ne = _ = 0, Ue = null; te !== null && ne < C.length; ne++) {
        te.index > ne ? (Ue = te, te = null) : Ue = te.sibling;
        var ce = M(S, te, C[ne], A);
        if (ce === null) {
          te === null && (te = Ue);
          break;
        }
        e && te && ce.alternate === null && t(S, te), _ = o(ce, _, ne), ee === null ? X = ce : ee.sibling = ce, ee = ce, te = Ue;
      }
      if (ne === C.length) return n(S, te), Se && hn(S, ne), X;
      if (te === null) {
        for (; ne < C.length; ne++) te = z(S, C[ne], A), te !== null && (_ = o(te, _, ne), ee === null ? X = te : ee.sibling = te, ee = te);
        return Se && hn(S, ne), X;
      }
      for (te = r(S, te); ne < C.length; ne++) Ue = Q(te, S, ne, C[ne], A), Ue !== null && (e && Ue.alternate !== null && te.delete(Ue.key === null ? ne : Ue.key), _ = o(Ue, _, ne), ee === null ? X = Ue : ee.sibling = Ue, ee = Ue);
      return e && te.forEach(function(cn) {
        return t(S, cn);
      }), Se && hn(S, ne), X;
    }
    function G(S, _, C, A) {
      var X = Z(C);
      if (typeof X != "function") throw Error(s(150));
      if (C = X.call(C), C == null) throw Error(s(151));
      for (var ee = X = null, te = _, ne = _ = 0, Ue = null, ce = C.next(); te !== null && !ce.done; ne++, ce = C.next()) {
        te.index > ne ? (Ue = te, te = null) : Ue = te.sibling;
        var cn = M(S, te, ce.value, A);
        if (cn === null) {
          te === null && (te = Ue);
          break;
        }
        e && te && cn.alternate === null && t(S, te), _ = o(cn, _, ne), ee === null ? X = cn : ee.sibling = cn, ee = cn, te = Ue;
      }
      if (ce.done) return n(
        S,
        te
      ), Se && hn(S, ne), X;
      if (te === null) {
        for (; !ce.done; ne++, ce = C.next()) ce = z(S, ce.value, A), ce !== null && (_ = o(ce, _, ne), ee === null ? X = ce : ee.sibling = ce, ee = ce);
        return Se && hn(S, ne), X;
      }
      for (te = r(S, te); !ce.done; ne++, ce = C.next()) ce = Q(te, S, ne, ce.value, A), ce !== null && (e && ce.alternate !== null && te.delete(ce.key === null ? ne : ce.key), _ = o(ce, _, ne), ee === null ? X = ce : ee.sibling = ce, ee = ce);
      return e && te.forEach(function(Cm) {
        return t(S, Cm);
      }), Se && hn(S, ne), X;
    }
    function Me(S, _, C, A) {
      if (typeof C == "object" && C !== null && C.type === ae && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case b:
            e: {
              for (var X = C.key, ee = _; ee !== null; ) {
                if (ee.key === X) {
                  if (X = C.type, X === ae) {
                    if (ee.tag === 7) {
                      n(S, ee.sibling), _ = a(ee, C.props.children), _.return = S, S = _;
                      break e;
                    }
                  } else if (ee.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Fe && cu(X) === ee.type) {
                    n(S, ee.sibling), _ = a(ee, C.props), _.ref = Tr(S, ee, C), _.return = S, S = _;
                    break e;
                  }
                  n(S, ee);
                  break;
                } else t(S, ee);
                ee = ee.sibling;
              }
              C.type === ae ? (_ = Sn(C.props.children, S.mode, A, C.key), _.return = S, S = _) : (A = Zl(C.type, C.key, C.props, null, S.mode, A), A.ref = Tr(S, _, C), A.return = S, S = A);
            }
            return c(S);
          case le:
            e: {
              for (ee = C.key; _ !== null; ) {
                if (_.key === ee) if (_.tag === 4 && _.stateNode.containerInfo === C.containerInfo && _.stateNode.implementation === C.implementation) {
                  n(S, _.sibling), _ = a(_, C.children || []), _.return = S, S = _;
                  break e;
                } else {
                  n(S, _);
                  break;
                }
                else t(S, _);
                _ = _.sibling;
              }
              _ = fi(C, S.mode, A), _.return = S, S = _;
            }
            return c(S);
          case Fe:
            return ee = C._init, Me(S, _, ee(C._payload), A);
        }
        if (nr(C)) return q(S, _, C, A);
        if (Z(C)) return G(S, _, C, A);
        Pl(S, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, _ !== null && _.tag === 6 ? (n(S, _.sibling), _ = a(_, C), _.return = S, S = _) : (n(S, _), _ = di(C, S.mode, A), _.return = S, S = _), c(S)) : n(S, _);
    }
    return Me;
  }
  var Qn = du(!0), fu = du(!1), Ll = bt(null), Ml = null, Kn = null, wo = null;
  function ko() {
    wo = Kn = Ml = null;
  }
  function So(e) {
    var t = Ll.current;
    we(Ll), e._currentValue = t;
  }
  function Co(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Yn(e, t) {
    Ml = e, wo = Kn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), e.firstContext = null);
  }
  function ht(e) {
    var t = e._currentValue;
    if (wo !== e) if (e = { context: e, memoizedValue: t, next: null }, Kn === null) {
      if (Ml === null) throw Error(s(308));
      Kn = e, Ml.dependencies = { lanes: 0, firstContext: e };
    } else Kn = Kn.next = e;
    return t;
  }
  var vn = null;
  function xo(e) {
    vn === null ? vn = [e] : vn.push(e);
  }
  function mu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, xo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ut(e, r);
  }
  function Ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var tn = !1;
  function No(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function pu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function nn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ue & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ut(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, xo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ut(e, n);
  }
  function Dl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ja(e, n);
    }
  }
  function hu(e, t) {
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
  function Il(e, t, n, r) {
    var a = e.updateQueue;
    tn = !1;
    var o = a.firstBaseUpdate, c = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var v = h, R = v.next;
      v.next = null, c === null ? o = R : c.next = R, c = v;
      var I = e.alternate;
      I !== null && (I = I.updateQueue, h = I.lastBaseUpdate, h !== c && (h === null ? I.firstBaseUpdate = R : h.next = R, I.lastBaseUpdate = v));
    }
    if (o !== null) {
      var z = a.baseState;
      c = 0, I = R = v = null, h = o;
      do {
        var M = h.lane, Q = h.eventTime;
        if ((r & M) === M) {
          I !== null && (I = I.next = {
            eventTime: Q,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          e: {
            var q = e, G = h;
            switch (M = t, Q = n, G.tag) {
              case 1:
                if (q = G.payload, typeof q == "function") {
                  z = q.call(Q, z, M);
                  break e;
                }
                z = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = G.payload, M = typeof q == "function" ? q.call(Q, z, M) : q, M == null) break e;
                z = K({}, z, M);
                break e;
              case 2:
                tn = !0;
            }
          }
          h.callback !== null && h.lane !== 0 && (e.flags |= 64, M = a.effects, M === null ? a.effects = [h] : M.push(h));
        } else Q = { eventTime: Q, lane: M, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, I === null ? (R = I = Q, v = z) : I = I.next = Q, c |= M;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null) break;
          M = h, h = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      if (I === null && (v = z), a.baseState = v, a.firstBaseUpdate = R, a.lastBaseUpdate = I, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          c |= a.lane, a = a.next;
        while (a !== t);
      } else o === null && (a.shared.lanes = 0);
      _n |= c, e.lanes = c, e.memoizedState = z;
    }
  }
  function vu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var Rr = {}, Mt = bt(Rr), Pr = bt(Rr), Lr = bt(Rr);
  function yn(e) {
    if (e === Rr) throw Error(s(174));
    return e;
  }
  function To(e, t) {
    switch (_e(Lr, t), _e(Pr, e), _e(Mt, Rr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ta(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ta(t, e);
    }
    we(Mt), _e(Mt, t);
  }
  function qn() {
    we(Mt), we(Pr), we(Lr);
  }
  function yu(e) {
    yn(Lr.current);
    var t = yn(Mt.current), n = Ta(t, e.type);
    t !== n && (_e(Pr, e), _e(Mt, n));
  }
  function Ro(e) {
    Pr.current === e && (we(Mt), we(Pr));
  }
  var xe = bt(0);
  function zl(e) {
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
  var Po = [];
  function Lo() {
    for (var e = 0; e < Po.length; e++) Po[e]._workInProgressVersionPrimary = null;
    Po.length = 0;
  }
  var Ol = W.ReactCurrentDispatcher, Mo = W.ReactCurrentBatchConfig, gn = 0, Ne = null, Ie = null, Ae = null, $l = !1, Mr = !1, Dr = 0, Kf = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Do(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function Io(e, t, n, r, a, o) {
    if (gn = o, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ol.current = e === null || e.memoizedState === null ? Xf : Jf, e = n(r, a), Mr) {
      o = 0;
      do {
        if (Mr = !1, Dr = 0, 25 <= o) throw Error(s(301));
        o += 1, Ae = Ie = null, t.updateQueue = null, Ol.current = bf, e = n(r, a);
      } while (Mr);
    }
    if (Ol.current = jl, t = Ie !== null && Ie.next !== null, gn = 0, Ae = Ie = Ne = null, $l = !1, t) throw Error(s(300));
    return e;
  }
  function zo() {
    var e = Dr !== 0;
    return Dr = 0, e;
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? Ne.memoizedState = Ae = e : Ae = Ae.next = e, Ae;
  }
  function vt() {
    if (Ie === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = Ae === null ? Ne.memoizedState : Ae.next;
    if (t !== null) Ae = t, Ie = e;
    else {
      if (e === null) throw Error(s(310));
      Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Ae === null ? Ne.memoizedState = Ae = e : Ae = Ae.next = e;
    }
    return Ae;
  }
  function Ir(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Oo(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
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
      var h = c = null, v = null, R = o;
      do {
        var I = R.lane;
        if ((gn & I) === I) v !== null && (v = v.next = { lane: 0, action: R.action, hasEagerState: R.hasEagerState, eagerState: R.eagerState, next: null }), r = R.hasEagerState ? R.eagerState : e(r, R.action);
        else {
          var z = {
            lane: I,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          };
          v === null ? (h = v = z, c = r) : v = v.next = z, Ne.lanes |= I, _n |= I;
        }
        R = R.next;
      } while (R !== null && R !== o);
      v === null ? c = r : v.next = h, kt(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = v, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        o = a.lane, Ne.lanes |= o, _n |= o, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $o(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, o = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var c = a = a.next;
      do
        o = e(o, c.action), c = c.next;
      while (c !== a);
      kt(o, t.memoizedState) || (nt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function gu() {
  }
  function _u(e, t) {
    var n = Ne, r = vt(), a = t(), o = !kt(r.memoizedState, a);
    if (o && (r.memoizedState = a, nt = !0), r = r.queue, Fo(ku.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ae !== null && Ae.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, wu.bind(null, n, r, a, t), void 0, null), je === null) throw Error(s(349));
      (gn & 30) !== 0 || Eu(n, t, a);
    }
    return a;
  }
  function Eu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function wu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Su(t) && Cu(e);
  }
  function ku(e, t, n) {
    return n(function() {
      Su(t) && Cu(e);
    });
  }
  function Su(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Cu(e) {
    var t = Ut(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function xu(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: e }, t.queue = e, e = e.dispatch = Gf.bind(null, Ne, e), [t.memoizedState, e];
  }
  function zr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Nu() {
    return vt().memoizedState;
  }
  function Fl(e, t, n, r) {
    var a = Dt();
    Ne.flags |= e, a.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Al(e, t, n, r) {
    var a = vt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ie !== null) {
      var c = Ie.memoizedState;
      if (o = c.destroy, r !== null && Do(r, c.deps)) {
        a.memoizedState = zr(t, n, o, r);
        return;
      }
    }
    Ne.flags |= e, a.memoizedState = zr(1 | t, n, o, r);
  }
  function Tu(e, t) {
    return Fl(8390656, 8, e, t);
  }
  function Fo(e, t) {
    return Al(2048, 8, e, t);
  }
  function Ru(e, t) {
    return Al(4, 2, e, t);
  }
  function Pu(e, t) {
    return Al(4, 4, e, t);
  }
  function Lu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Mu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Al(4, 4, Lu.bind(null, t, e), n);
  }
  function Ao() {
  }
  function Du(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Do(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Iu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Do(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zu(e, t, n) {
    return (gn & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n) : (kt(n, t) || (n = cs(), Ne.lanes |= n, _n |= n, e.baseState = !0), t);
  }
  function Yf(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Mo.transition;
    Mo.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, Mo.transition = r;
    }
  }
  function Ou() {
    return vt().memoizedState;
  }
  function qf(e, t, n) {
    var r = on(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $u(e)) Fu(t, n);
    else if (n = mu(e, t, n, r), n !== null) {
      var a = be();
      Tt(n, e, r, a), Au(n, t, r);
    }
  }
  function Gf(e, t, n) {
    var r = on(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if ($u(e)) Fu(t, a);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var c = t.lastRenderedState, h = o(c, n);
        if (a.hasEagerState = !0, a.eagerState = h, kt(h, c)) {
          var v = t.interleaved;
          v === null ? (a.next = a, xo(t)) : (a.next = v.next, v.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = mu(e, t, a, r), n !== null && (a = be(), Tt(n, e, r, a), Au(n, t, r));
    }
  }
  function $u(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function Fu(e, t) {
    Mr = $l = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Au(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ja(e, n);
    }
  }
  var jl = { readContext: ht, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Xf = { readContext: ht, useCallback: function(e, t) {
    return Dt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: Tu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Fl(
      4194308,
      4,
      Lu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Fl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Fl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Dt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Dt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = qf.bind(null, Ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Dt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: xu, useDebugValue: Ao, useDeferredValue: function(e) {
    return Dt().memoizedState = e;
  }, useTransition: function() {
    var e = xu(!1), t = e[0];
    return e = Yf.bind(null, e[1]), Dt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ne, a = Dt();
    if (Se) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), je === null) throw Error(s(349));
      (gn & 30) !== 0 || Eu(r, t, n);
    }
    a.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return a.queue = o, Tu(ku.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, zr(9, wu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = je.identifierPrefix;
    if (Se) {
      var n = jt, r = At;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Kf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Jf = {
    readContext: ht,
    useCallback: Du,
    useContext: ht,
    useEffect: Fo,
    useImperativeHandle: Mu,
    useInsertionEffect: Ru,
    useLayoutEffect: Pu,
    useMemo: Iu,
    useReducer: Oo,
    useRef: Nu,
    useState: function() {
      return Oo(Ir);
    },
    useDebugValue: Ao,
    useDeferredValue: function(e) {
      var t = vt();
      return zu(t, Ie.memoizedState, e);
    },
    useTransition: function() {
      var e = Oo(Ir)[0], t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: gu,
    useSyncExternalStore: _u,
    useId: Ou,
    unstable_isNewReconciler: !1
  }, bf = { readContext: ht, useCallback: Du, useContext: ht, useEffect: Fo, useImperativeHandle: Mu, useInsertionEffect: Ru, useLayoutEffect: Pu, useMemo: Iu, useReducer: $o, useRef: Nu, useState: function() {
    return $o(Ir);
  }, useDebugValue: Ao, useDeferredValue: function(e) {
    var t = vt();
    return Ie === null ? t.memoizedState = e : zu(t, Ie.memoizedState, e);
  }, useTransition: function() {
    var e = $o(Ir)[0], t = vt().memoizedState;
    return [e, t];
  }, useMutableSource: gu, useSyncExternalStore: _u, useId: Ou, unstable_isNewReconciler: !1 };
  function Ct(e, t) {
    if (e && e.defaultProps) {
      t = K({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function jo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ul = { isMounted: function(e) {
    return (e = e._reactInternals) ? dn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = be(), a = on(e), o = Bt(r, a);
    o.payload = t, n != null && (o.callback = n), t = nn(e, o, a), t !== null && (Tt(t, e, a, r), Dl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = be(), a = on(e), o = Bt(r, a);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = nn(e, o, a), t !== null && (Tt(t, e, a, r), Dl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = be(), r = on(e), a = Bt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = nn(e, a, r), t !== null && (Tt(t, e, r, n), Dl(t, e, r));
  } };
  function ju(e, t, n, r, a, o, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, c) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(a, o) : !0;
  }
  function Uu(e, t, n) {
    var r = !1, a = Zt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ht(o) : (a = tt(t) ? mn : Ke.current, r = t.contextTypes, o = (r = r != null) ? Bn(e, a) : Zt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Bu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
  }
  function Uo(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, No(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = ht(o) : (o = tt(t) ? mn : Ke.current, a.context = Bn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (jo(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Ul.enqueueReplaceState(a, a.state, null), Il(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Gn(e, t) {
    try {
      var n = "", r = t;
      do
        n += re(r), r = r.return;
      while (r);
      var a = n;
    } catch (o) {
      a = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Bo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ho(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Zf = typeof WeakMap == "function" ? WeakMap : Map;
  function Hu(e, t, n) {
    n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Yl || (Yl = !0, ri = r), Ho(e, t);
    }, n;
  }
  function Wu(e, t, n) {
    n = Bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        Ho(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Ho(e, t), typeof r != "function" && (ln === null ? ln = /* @__PURE__ */ new Set([this]) : ln.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
    }), n;
  }
  function Vu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Zf();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = mm.bind(null, e, t, n), t.then(e, e));
  }
  function Qu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ku(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var em = W.ReactCurrentOwner, nt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? fu(t, null, n, r) : Qn(t, e.child, n, r);
  }
  function Yu(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Yn(t, a), r = Io(e, t, n, r, o, a), n = zo(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Se && n && vo(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function qu(e, t, n, r, a) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !ci(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Gu(e, t, o, r, a)) : (e = Zl(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & a) === 0) {
      var c = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Er, n(c, r) && e.ref === t.ref) return Ht(e, t, a);
    }
    return t.flags |= 1, e = un(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Gu(e, t, n, r, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Er(o, r) && e.ref === t.ref) if (nt = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (nt = !0);
      else return t.lanes = e.lanes, Ht(e, t, a);
    }
    return Wo(e, t, n, r, a);
  }
  function Xu(e, t, n) {
    var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _e(Jn, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _e(Jn, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, _e(Jn, dt), dt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, _e(Jn, dt), dt |= r;
    return Je(e, t, a, n), t.child;
  }
  function Ju(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Wo(e, t, n, r, a) {
    var o = tt(n) ? mn : Ke.current;
    return o = Bn(t, o), Yn(t, a), n = Io(e, t, n, r, o, a), r = zo(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Se && r && vo(t), t.flags |= 1, Je(e, t, n, a), t.child);
  }
  function bu(e, t, n, r, a) {
    if (tt(n)) {
      var o = !0;
      Cl(t);
    } else o = !1;
    if (Yn(t, a), t.stateNode === null) Hl(e, t), Uu(t, n, r), Uo(t, n, r, a), r = !0;
    else if (e === null) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var v = c.context, R = n.contextType;
      typeof R == "object" && R !== null ? R = ht(R) : (R = tt(n) ? mn : Ke.current, R = Bn(t, R));
      var I = n.getDerivedStateFromProps, z = typeof I == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      z || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== r || v !== R) && Bu(t, c, r, R), tn = !1;
      var M = t.memoizedState;
      c.state = M, Il(t, r, c, a), v = t.memoizedState, h !== r || M !== v || et.current || tn ? (typeof I == "function" && (jo(t, n, I, r), v = t.memoizedState), (h = tn || ju(t, n, h, r, M, v, R)) ? (z || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = v), c.props = r, c.state = v, c.context = R, r = h) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, pu(e, t), h = t.memoizedProps, R = t.type === t.elementType ? h : Ct(t.type, h), c.props = R, z = t.pendingProps, M = c.context, v = n.contextType, typeof v == "object" && v !== null ? v = ht(v) : (v = tt(n) ? mn : Ke.current, v = Bn(t, v));
      var Q = n.getDerivedStateFromProps;
      (I = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== z || M !== v) && Bu(t, c, r, v), tn = !1, M = t.memoizedState, c.state = M, Il(t, r, c, a);
      var q = t.memoizedState;
      h !== z || M !== q || et.current || tn ? (typeof Q == "function" && (jo(t, n, Q, r), q = t.memoizedState), (R = tn || ju(t, n, R, r, M, q, v) || !1) ? (I || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, q, v), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, q, v)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = q), c.props = r, c.state = q, c.context = v, r = R) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Vo(e, t, n, r, o, a);
  }
  function Vo(e, t, n, r, a, o) {
    Ju(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return a && ru(t, n, !1), Ht(e, t, o);
    r = t.stateNode, em.current = t;
    var h = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && c ? (t.child = Qn(t, e.child, null, o), t.child = Qn(t, null, h, o)) : Je(e, t, h, o), t.memoizedState = r.state, a && ru(t, n, !0), t.child;
  }
  function Zu(e) {
    var t = e.stateNode;
    t.pendingContext ? tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tu(e, t.context, !1), To(e, t.containerInfo);
  }
  function ec(e, t, n, r, a) {
    return Vn(), Eo(a), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ko(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function tc(e, t, n) {
    var r = t.pendingProps, a = xe.current, o = !1, c = (t.flags & 128) !== 0, h;
    if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), h ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), _e(xe, a & 1), e === null)
      return _o(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (c = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, c = { mode: "hidden", children: c }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = c) : o = ea(c, r, 0, null), e = Sn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ko(n), t.memoizedState = Qo, e) : Yo(t, c));
    if (a = e.memoizedState, a !== null && (h = a.dehydrated, h !== null)) return tm(e, t, c, r, h, a, n);
    if (o) {
      o = r.fallback, c = t.mode, a = e.child, h = a.sibling;
      var v = { mode: "hidden", children: r.children };
      return (c & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = v, t.deletions = null) : (r = un(a, v), r.subtreeFlags = a.subtreeFlags & 14680064), h !== null ? o = un(h, o) : (o = Sn(o, c, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, c = e.child.memoizedState, c = c === null ? Ko(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, o.memoizedState = c, o.childLanes = e.childLanes & ~n, t.memoizedState = Qo, r;
    }
    return o = e.child, e = o.sibling, r = un(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Yo(e, t) {
    return t = ea({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Bl(e, t, n, r) {
    return r !== null && Eo(r), Qn(t, e.child, null, n), e = Yo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function tm(e, t, n, r, a, o, c) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Bo(Error(s(422))), Bl(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = ea({ mode: "visible", children: r.children }, a, 0, null), o = Sn(o, a, c, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Qn(t, e.child, null, c), t.child.memoizedState = Ko(c), t.memoizedState = Qo, o);
    if ((t.mode & 1) === 0) return Bl(e, t, c, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var h = r.dgst;
      return r = h, o = Error(s(419)), r = Bo(o, r, void 0), Bl(e, t, c, r);
    }
    if (h = (c & e.childLanes) !== 0, nt || h) {
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
        a = (a & (r.suspendedLanes | c)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, Ut(e, a), Tt(r, e, a, -1));
      }
      return ui(), r = Bo(Error(s(421))), Bl(e, t, c, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = pm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ct = Jt(a.nextSibling), ut = t, Se = !0, St = null, e !== null && (mt[pt++] = At, mt[pt++] = jt, mt[pt++] = pn, At = e.id, jt = e.overflow, pn = t), t = Yo(t, r.children), t.flags |= 4096, t);
  }
  function nc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Co(e.return, t, n);
  }
  function qo(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
  }
  function rc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, o = r.tail;
    if (Je(e, t, r.children, n), r = xe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
        else if (e.tag === 19) nc(e, n, t);
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
    if (_e(xe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && zl(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), qo(t, !1, a, n, o);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && zl(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        qo(t, !0, n, null, o);
        break;
      case "together":
        qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Hl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = un(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function nm(e, t, n) {
    switch (t.tag) {
      case 3:
        Zu(t), Vn();
        break;
      case 5:
        yu(t);
        break;
      case 1:
        tt(t.type) && Cl(t);
        break;
      case 4:
        To(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        _e(Ll, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (_e(xe, xe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? tc(e, t, n) : (_e(xe, xe.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
        _e(xe, xe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return rc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), _e(xe, xe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Xu(e, t, n);
    }
    return Ht(e, t, n);
  }
  var lc, Go, ac, oc;
  lc = function(e, t) {
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
  }, Go = function() {
  }, ac = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, yn(Mt.current);
      var o = null;
      switch (n) {
        case "input":
          a = Sa(e, a), r = Sa(e, r), o = [];
          break;
        case "select":
          a = K({}, a, { value: void 0 }), r = K({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          a = Na(e, a), r = Na(e, r), o = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = wl);
      }
      Ra(n, r);
      var c;
      n = null;
      for (R in a) if (!r.hasOwnProperty(R) && a.hasOwnProperty(R) && a[R] != null) if (R === "style") {
        var h = a[R];
        for (c in h) h.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
      } else R !== "dangerouslySetInnerHTML" && R !== "children" && R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && R !== "autoFocus" && (f.hasOwnProperty(R) ? o || (o = []) : (o = o || []).push(R, null));
      for (R in r) {
        var v = r[R];
        if (h = a != null ? a[R] : void 0, r.hasOwnProperty(R) && v !== h && (v != null || h != null)) if (R === "style") if (h) {
          for (c in h) !h.hasOwnProperty(c) || v && v.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
          for (c in v) v.hasOwnProperty(c) && h[c] !== v[c] && (n || (n = {}), n[c] = v[c]);
        } else n || (o || (o = []), o.push(
          R,
          n
        )), n = v;
        else R === "dangerouslySetInnerHTML" ? (v = v ? v.__html : void 0, h = h ? h.__html : void 0, v != null && h !== v && (o = o || []).push(R, v)) : R === "children" ? typeof v != "string" && typeof v != "number" || (o = o || []).push(R, "" + v) : R !== "suppressContentEditableWarning" && R !== "suppressHydrationWarning" && (f.hasOwnProperty(R) ? (v != null && R === "onScroll" && Ee("scroll", e), o || h === v || (o = [])) : (o = o || []).push(R, v));
      }
      n && (o = o || []).push("style", n);
      var R = o;
      (t.updateQueue = R) && (t.flags |= 4);
    }
  }, oc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Or(e, t) {
    if (!Se) switch (e.tailMode) {
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
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
    else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function rm(e, t, n) {
    var r = t.pendingProps;
    switch (yo(t), t.tag) {
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
        return qe(t), null;
      case 1:
        return tt(t.type) && Sl(), qe(t), null;
      case 3:
        return r = t.stateNode, qn(), we(et), we(Ke), Lo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, St !== null && (oi(St), St = null))), Go(e, t), qe(t), null;
      case 5:
        Ro(t);
        var a = yn(Lr.current);
        if (n = t.type, e !== null && t.stateNode != null) ac(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return qe(t), null;
          }
          if (e = yn(Mt.current), Rl(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Lt] = t, r[xr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ee("cancel", r), Ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < kr.length; a++) Ee(kr[a], r);
                break;
              case "source":
                Ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ee(
                  "error",
                  r
                ), Ee("load", r);
                break;
              case "details":
                Ee("toggle", r);
                break;
              case "input":
                Ui(r, o), Ee("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ee("invalid", r);
                break;
              case "textarea":
                Wi(r, o), Ee("invalid", r);
            }
            Ra(n, o), a = null;
            for (var c in o) if (o.hasOwnProperty(c)) {
              var h = o[c];
              c === "children" ? typeof h == "string" ? r.textContent !== h && (o.suppressHydrationWarning !== !0 && El(r.textContent, h, e), a = ["children", h]) : typeof h == "number" && r.textContent !== "" + h && (o.suppressHydrationWarning !== !0 && El(
                r.textContent,
                h,
                e
              ), a = ["children", "" + h]) : f.hasOwnProperty(c) && h != null && c === "onScroll" && Ee("scroll", r);
            }
            switch (n) {
              case "input":
                Jr(r), Hi(r, o, !0);
                break;
              case "textarea":
                Jr(r), Qi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = wl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            c = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ki(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Lt] = t, e[xr] = r, lc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (c = Pa(n, r), n) {
                case "dialog":
                  Ee("cancel", e), Ee("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ee("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < kr.length; a++) Ee(kr[a], e);
                  a = r;
                  break;
                case "source":
                  Ee("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ee(
                    "error",
                    e
                  ), Ee("load", e), a = r;
                  break;
                case "details":
                  Ee("toggle", e), a = r;
                  break;
                case "input":
                  Ui(e, r), a = Sa(e, r), Ee("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = K({}, r, { value: void 0 }), Ee("invalid", e);
                  break;
                case "textarea":
                  Wi(e, r), a = Na(e, r), Ee("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ra(n, a), h = a;
              for (o in h) if (h.hasOwnProperty(o)) {
                var v = h[o];
                o === "style" ? Gi(e, v) : o === "dangerouslySetInnerHTML" ? (v = v ? v.__html : void 0, v != null && Yi(e, v)) : o === "children" ? typeof v == "string" ? (n !== "textarea" || v !== "") && rr(e, v) : typeof v == "number" && rr(e, "" + v) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (f.hasOwnProperty(o) ? v != null && o === "onScroll" && Ee("scroll", e) : v != null && $(e, o, v, c));
              }
              switch (n) {
                case "input":
                  Jr(e), Hi(e, r, !1);
                  break;
                case "textarea":
                  Jr(e), Qi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + me(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Pn(e, !!r.multiple, o, !1) : r.defaultValue != null && Pn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = wl);
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
        return qe(t), null;
      case 6:
        if (e && t.stateNode != null) oc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = yn(Lr.current), yn(Mt.current), Rl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (o = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                El(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && El(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
        }
        return qe(t), null;
      case 13:
        if (we(xe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) uu(), Vn(), t.flags |= 98560, o = !1;
          else if (o = Rl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Lt] = t;
            } else Vn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), o = !1;
          } else St !== null && (oi(St), St = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xe.current & 1) !== 0 ? ze === 0 && (ze = 3) : ui())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
      case 4:
        return qn(), Go(e, t), e === null && Sr(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return So(t.type._context), qe(t), null;
      case 17:
        return tt(t.type) && Sl(), qe(t), null;
      case 19:
        if (we(xe), o = t.memoizedState, o === null) return qe(t), null;
        if (r = (t.flags & 128) !== 0, c = o.rendering, c === null) if (r) Or(o, !1);
        else {
          if (ze !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (c = zl(e), c !== null) {
              for (t.flags |= 128, Or(o, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, c = o.alternate, c === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = c.childLanes, o.lanes = c.lanes, o.child = c.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = c.memoizedProps, o.memoizedState = c.memoizedState, o.updateQueue = c.updateQueue, o.type = c.type, e = c.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return _e(xe, xe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Le() > bn && (t.flags |= 128, r = !0, Or(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = zl(c), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Or(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !Se) return qe(t), null;
          } else 2 * Le() - o.renderingStartTime > bn && n !== 1073741824 && (t.flags |= 128, r = !0, Or(o, !1), t.lanes = 4194304);
          o.isBackwards ? (c.sibling = t.child, t.child = c) : (n = o.last, n !== null ? n.sibling = c : t.child = c, o.last = c);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Le(), t.sibling = null, n = xe.current, _e(xe, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
      case 22:
      case 23:
        return si(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function lm(e, t) {
    switch (yo(t), t.tag) {
      case 1:
        return tt(t.type) && Sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return qn(), we(et), we(Ke), Lo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ro(t), null;
      case 13:
        if (we(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Vn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return we(xe), null;
      case 4:
        return qn(), null;
      case 10:
        return So(t.type._context), null;
      case 22:
      case 23:
        return si(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wl = !1, Ge = !1, am = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
  function Xn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Re(e, t, r);
    }
    else n.current = null;
  }
  function Xo(e, t, n) {
    try {
      n();
    } catch (r) {
      Re(e, t, r);
    }
  }
  var ic = !1;
  function om(e, t) {
    if (io = ul, e = js(), Za(e)) {
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
          var c = 0, h = -1, v = -1, R = 0, I = 0, z = e, M = null;
          t: for (; ; ) {
            for (var Q; z !== n || a !== 0 && z.nodeType !== 3 || (h = c + a), z !== o || r !== 0 && z.nodeType !== 3 || (v = c + r), z.nodeType === 3 && (c += z.nodeValue.length), (Q = z.firstChild) !== null; )
              M = z, z = Q;
            for (; ; ) {
              if (z === e) break t;
              if (M === n && ++R === a && (h = c), M === o && ++I === r && (v = c), (Q = z.nextSibling) !== null) break;
              z = M, M = z.parentNode;
            }
            z = Q;
          }
          n = h === -1 || v === -1 ? null : { start: h, end: v };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (so = { focusedElem: e, selectionRange: n }, ul = !1, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
    else for (; Y !== null; ) {
      t = Y;
      try {
        var q = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (q !== null) {
              var G = q.memoizedProps, Me = q.memoizedState, S = t.stateNode, _ = S.getSnapshotBeforeUpdate(t.elementType === t.type ? G : Ct(t.type, G), Me);
              S.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var C = t.stateNode.containerInfo;
            C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (A) {
        Re(t, t.return, A);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Y = e;
        break;
      }
      Y = t.return;
    }
    return q = ic, ic = !1, q;
  }
  function $r(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          a.destroy = void 0, o !== void 0 && Xo(t, n, o);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function Vl(e, t) {
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
  function Jo(e) {
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
  function sc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[xr], delete t[mo], delete t[Hf], delete t[Wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function uc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function cc(e) {
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
  function bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = wl));
    else if (r !== 4 && (e = e.child, e !== null)) for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), e = e.sibling;
  }
  function Zo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Zo(e, t, n), e = e.sibling; e !== null; ) Zo(e, t, n), e = e.sibling;
  }
  var He = null, xt = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null; ) dc(e, t, n), n = n.sibling;
  }
  function dc(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
      Pt.onCommitFiberUnmount(rl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || Xn(n, t);
      case 6:
        var r = He, a = xt;
        He = null, rn(e, t, n), He = r, xt = a, He !== null && (xt ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
        break;
      case 18:
        He !== null && (xt ? (e = He, n = n.stateNode, e.nodeType === 8 ? fo(e.parentNode, n) : e.nodeType === 1 && fo(e, n), pr(e)) : fo(He, n.stateNode));
        break;
      case 4:
        r = He, a = xt, He = n.stateNode.containerInfo, xt = !0, rn(e, t, n), He = r, xt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var o = a, c = o.destroy;
            o = o.tag, c !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Xo(n, t, c), a = a.next;
          } while (a !== r);
        }
        rn(e, t, n);
        break;
      case 1:
        if (!Ge && (Xn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (h) {
          Re(n, t, h);
        }
        rn(e, t, n);
        break;
      case 21:
        rn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, rn(e, t, n), Ge = r) : rn(e, t, n);
        break;
      default:
        rn(e, t, n);
    }
  }
  function fc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new am()), t.forEach(function(r) {
        var a = hm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var o = e, c = t, h = c;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 5:
              He = h.stateNode, xt = !1;
              break e;
            case 3:
              He = h.stateNode.containerInfo, xt = !0;
              break e;
            case 4:
              He = h.stateNode.containerInfo, xt = !0;
              break e;
          }
          h = h.return;
        }
        if (He === null) throw Error(s(160));
        dc(o, c, a), He = null, xt = !1;
        var v = a.alternate;
        v !== null && (v.return = null), a.return = null;
      } catch (R) {
        Re(a, t, R);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) mc(t, e), t = t.sibling;
  }
  function mc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Nt(t, e), It(e), r & 4) {
          try {
            $r(3, e, e.return), Vl(3, e);
          } catch (G) {
            Re(e, e.return, G);
          }
          try {
            $r(5, e, e.return);
          } catch (G) {
            Re(e, e.return, G);
          }
        }
        break;
      case 1:
        Nt(t, e), It(e), r & 512 && n !== null && Xn(n, n.return);
        break;
      case 5:
        if (Nt(t, e), It(e), r & 512 && n !== null && Xn(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            rr(a, "");
          } catch (G) {
            Re(e, e.return, G);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var o = e.memoizedProps, c = n !== null ? n.memoizedProps : o, h = e.type, v = e.updateQueue;
          if (e.updateQueue = null, v !== null) try {
            h === "input" && o.type === "radio" && o.name != null && Bi(a, o), Pa(h, c);
            var R = Pa(h, o);
            for (c = 0; c < v.length; c += 2) {
              var I = v[c], z = v[c + 1];
              I === "style" ? Gi(a, z) : I === "dangerouslySetInnerHTML" ? Yi(a, z) : I === "children" ? rr(a, z) : $(a, I, z, R);
            }
            switch (h) {
              case "input":
                Ca(a, o);
                break;
              case "textarea":
                Vi(a, o);
                break;
              case "select":
                var M = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!o.multiple;
                var Q = o.value;
                Q != null ? Pn(a, !!o.multiple, Q, !1) : M !== !!o.multiple && (o.defaultValue != null ? Pn(
                  a,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Pn(a, !!o.multiple, o.multiple ? [] : "", !1));
            }
            a[xr] = o;
          } catch (G) {
            Re(e, e.return, G);
          }
        }
        break;
      case 6:
        if (Nt(t, e), It(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, o = e.memoizedProps;
          try {
            a.nodeValue = o;
          } catch (G) {
            Re(e, e.return, G);
          }
        }
        break;
      case 3:
        if (Nt(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          pr(t.containerInfo);
        } catch (G) {
          Re(e, e.return, G);
        }
        break;
      case 4:
        Nt(t, e), It(e);
        break;
      case 13:
        Nt(t, e), It(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (ni = Le())), r & 4 && fc(e);
        break;
      case 22:
        if (I = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (R = Ge) || I, Nt(t, e), Ge = R) : Nt(t, e), It(e), r & 8192) {
          if (R = e.memoizedState !== null, (e.stateNode.isHidden = R) && !I && (e.mode & 1) !== 0) for (Y = e, I = e.child; I !== null; ) {
            for (z = Y = I; Y !== null; ) {
              switch (M = Y, Q = M.child, M.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, M, M.return);
                  break;
                case 1:
                  Xn(M, M.return);
                  var q = M.stateNode;
                  if (typeof q.componentWillUnmount == "function") {
                    r = M, n = M.return;
                    try {
                      t = r, q.props = t.memoizedProps, q.state = t.memoizedState, q.componentWillUnmount();
                    } catch (G) {
                      Re(r, n, G);
                    }
                  }
                  break;
                case 5:
                  Xn(M, M.return);
                  break;
                case 22:
                  if (M.memoizedState !== null) {
                    vc(z);
                    continue;
                  }
              }
              Q !== null ? (Q.return = M, Y = Q) : vc(z);
            }
            I = I.sibling;
          }
          e: for (I = null, z = e; ; ) {
            if (z.tag === 5) {
              if (I === null) {
                I = z;
                try {
                  a = z.stateNode, R ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (h = z.stateNode, v = z.memoizedProps.style, c = v != null && v.hasOwnProperty("display") ? v.display : null, h.style.display = qi("display", c));
                } catch (G) {
                  Re(e, e.return, G);
                }
              }
            } else if (z.tag === 6) {
              if (I === null) try {
                z.stateNode.nodeValue = R ? "" : z.memoizedProps;
              } catch (G) {
                Re(e, e.return, G);
              }
            } else if ((z.tag !== 22 && z.tag !== 23 || z.memoizedState === null || z === e) && z.child !== null) {
              z.child.return = z, z = z.child;
              continue;
            }
            if (z === e) break e;
            for (; z.sibling === null; ) {
              if (z.return === null || z.return === e) break e;
              I === z && (I = null), z = z.return;
            }
            I === z && (I = null), z.sibling.return = z.return, z = z.sibling;
          }
        }
        break;
      case 19:
        Nt(t, e), It(e), r & 4 && fc(e);
        break;
      case 21:
        break;
      default:
        Nt(
          t,
          e
        ), It(e);
    }
  }
  function It(e) {
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
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (rr(a, ""), r.flags &= -33);
            var o = cc(e);
            Zo(e, o, a);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, h = cc(e);
            bo(e, h, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (v) {
        Re(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function im(e, t, n) {
    Y = e, pc(e);
  }
  function pc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
      var a = Y, o = a.child;
      if (a.tag === 22 && r) {
        var c = a.memoizedState !== null || Wl;
        if (!c) {
          var h = a.alternate, v = h !== null && h.memoizedState !== null || Ge;
          h = Wl;
          var R = Ge;
          if (Wl = c, (Ge = v) && !R) for (Y = a; Y !== null; ) c = Y, v = c.child, c.tag === 22 && c.memoizedState !== null ? yc(a) : v !== null ? (v.return = c, Y = v) : yc(a);
          for (; o !== null; ) Y = o, pc(o), o = o.sibling;
          Y = a, Wl = h, Ge = R;
        }
        hc(e);
      } else (a.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = a, Y = o) : hc(e);
    }
  }
  function hc(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && vu(t, o, r);
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
                vu(t, c, n);
              }
              break;
            case 5:
              var h = t.stateNode;
              if (n === null && t.flags & 4) {
                n = h;
                var v = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    v.autoFocus && n.focus();
                    break;
                  case "img":
                    v.src && (n.src = v.src);
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
                  var I = R.memoizedState;
                  if (I !== null) {
                    var z = I.dehydrated;
                    z !== null && pr(z);
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
          Ge || t.flags & 512 && Jo(t);
        } catch (M) {
          Re(t, t.return, M);
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
  function vc(e) {
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
  function yc(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Vl(4, t);
            } catch (v) {
              Re(t, n, v);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (v) {
                Re(t, a, v);
              }
            }
            var o = t.return;
            try {
              Jo(t);
            } catch (v) {
              Re(t, o, v);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Jo(t);
            } catch (v) {
              Re(t, c, v);
            }
        }
      } catch (v) {
        Re(t, t.return, v);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        h.return = t.return, Y = h;
        break;
      }
      Y = t.return;
    }
  }
  var sm = Math.ceil, Ql = W.ReactCurrentDispatcher, ei = W.ReactCurrentOwner, yt = W.ReactCurrentBatchConfig, ue = 0, je = null, De = null, We = 0, dt = 0, Jn = bt(0), ze = 0, Fr = null, _n = 0, Kl = 0, ti = 0, Ar = null, rt = null, ni = 0, bn = 1 / 0, Wt = null, Yl = !1, ri = null, ln = null, ql = !1, an = null, Gl = 0, jr = 0, li = null, Xl = -1, Jl = 0;
  function be() {
    return (ue & 6) !== 0 ? Le() : Xl !== -1 ? Xl : Xl = Le();
  }
  function on(e) {
    return (e.mode & 1) === 0 ? 1 : (ue & 2) !== 0 && We !== 0 ? We & -We : Qf.transition !== null ? (Jl === 0 && (Jl = cs()), Jl) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _s(e.type)), e);
  }
  function Tt(e, t, n, r) {
    if (50 < jr) throw jr = 0, li = null, Error(s(185));
    ur(e, n, r), ((ue & 2) === 0 || e !== je) && (e === je && ((ue & 2) === 0 && (Kl |= n), ze === 4 && sn(e, We)), lt(e, r), n === 1 && ue === 0 && (t.mode & 1) === 0 && (bn = Le() + 500, xl && en()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    Vd(e, t);
    var r = ol(e, e === je ? We : 0);
    if (r === 0) n !== null && is(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && is(n), t === 1) e.tag === 0 ? Vf(_c.bind(null, e)) : lu(_c.bind(null, e)), Uf(function() {
        (ue & 6) === 0 && en();
      }), n = null;
      else {
        switch (ds(r)) {
          case 1:
            n = $a;
            break;
          case 4:
            n = ss;
            break;
          case 16:
            n = nl;
            break;
          case 536870912:
            n = us;
            break;
          default:
            n = nl;
        }
        n = Tc(n, gc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function gc(e, t) {
    if (Xl = -1, Jl = 0, (ue & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (Zn() && e.callbackNode !== n) return null;
    var r = ol(e, e === je ? We : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = bl(e, r);
    else {
      t = r;
      var a = ue;
      ue |= 2;
      var o = wc();
      (je !== e || We !== t) && (Wt = null, bn = Le() + 500, wn(e, t));
      do
        try {
          dm();
          break;
        } catch (h) {
          Ec(e, h);
        }
      while (!0);
      ko(), Ql.current = o, ue = a, De !== null ? t = 0 : (je = null, We = 0, t = ze);
    }
    if (t !== 0) {
      if (t === 2 && (a = Fa(e), a !== 0 && (r = a, t = ai(e, a))), t === 1) throw n = Fr, wn(e, 0), sn(e, r), lt(e, Le()), n;
      if (t === 6) sn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !um(a) && (t = bl(e, r), t === 2 && (o = Fa(e), o !== 0 && (r = o, t = ai(e, o))), t === 1)) throw n = Fr, wn(e, 0), sn(e, r), lt(e, Le()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            kn(e, rt, Wt);
            break;
          case 3:
            if (sn(e, r), (r & 130023424) === r && (t = ni + 500 - Le(), 10 < t)) {
              if (ol(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                be(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = co(kn.bind(null, e, rt, Wt), t);
              break;
            }
            kn(e, rt, Wt);
            break;
          case 4:
            if (sn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var c = 31 - wt(r);
              o = 1 << c, c = t[c], c > a && (a = c), r &= ~o;
            }
            if (r = a, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = co(kn.bind(null, e, rt, Wt), r);
              break;
            }
            kn(e, rt, Wt);
            break;
          case 5:
            kn(e, rt, Wt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return lt(e, Le()), e.callbackNode === n ? gc.bind(null, e) : null;
  }
  function ai(e, t) {
    var n = Ar;
    return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = bl(e, t), e !== 2 && (t = rt, rt = n, t !== null && oi(t)), e;
  }
  function oi(e) {
    rt === null ? rt = e : rt.push.apply(rt, e);
  }
  function um(e) {
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
  function sn(e, t) {
    for (t &= ~ti, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function _c(e) {
    if ((ue & 6) !== 0) throw Error(s(327));
    Zn();
    var t = ol(e, 0);
    if ((t & 1) === 0) return lt(e, Le()), null;
    var n = bl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Fa(e);
      r !== 0 && (t = r, n = ai(e, r));
    }
    if (n === 1) throw n = Fr, wn(e, 0), sn(e, t), lt(e, Le()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, rt, Wt), lt(e, Le()), null;
  }
  function ii(e, t) {
    var n = ue;
    ue |= 1;
    try {
      return e(t);
    } finally {
      ue = n, ue === 0 && (bn = Le() + 500, xl && en());
    }
  }
  function En(e) {
    an !== null && an.tag === 0 && (ue & 6) === 0 && Zn();
    var t = ue;
    ue |= 1;
    var n = yt.transition, r = pe;
    try {
      if (yt.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, yt.transition = n, ue = t, (ue & 6) === 0 && en();
    }
  }
  function si() {
    dt = Jn.current, we(Jn);
  }
  function wn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jf(n)), De !== null) for (n = De.return; n !== null; ) {
      var r = n;
      switch (yo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Sl();
          break;
        case 3:
          qn(), we(et), we(Ke), Lo();
          break;
        case 5:
          Ro(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          we(xe);
          break;
        case 19:
          we(xe);
          break;
        case 10:
          So(r.type._context);
          break;
        case 22:
        case 23:
          si();
      }
      n = n.return;
    }
    if (je = e, De = e = un(e.current, null), We = dt = t, ze = 0, Fr = null, ti = Kl = _n = 0, rt = Ar = null, vn !== null) {
      for (t = 0; t < vn.length; t++) if (n = vn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, o = n.pending;
        if (o !== null) {
          var c = o.next;
          o.next = a, r.next = c;
        }
        n.pending = r;
      }
      vn = null;
    }
    return e;
  }
  function Ec(e, t) {
    do {
      var n = De;
      try {
        if (ko(), Ol.current = jl, $l) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          $l = !1;
        }
        if (gn = 0, Ae = Ie = Ne = null, Mr = !1, Dr = 0, ei.current = null, n === null || n.return === null) {
          ze = 1, Fr = t, De = null;
          break;
        }
        e: {
          var o = e, c = n.return, h = n, v = t;
          if (t = We, h.flags |= 32768, v !== null && typeof v == "object" && typeof v.then == "function") {
            var R = v, I = h, z = I.tag;
            if ((I.mode & 1) === 0 && (z === 0 || z === 11 || z === 15)) {
              var M = I.alternate;
              M ? (I.updateQueue = M.updateQueue, I.memoizedState = M.memoizedState, I.lanes = M.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var Q = Qu(c);
            if (Q !== null) {
              Q.flags &= -257, Ku(Q, c, h, o, t), Q.mode & 1 && Vu(o, R, t), t = Q, v = R;
              var q = t.updateQueue;
              if (q === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(v), t.updateQueue = G;
              } else q.add(v);
              break e;
            } else {
              if ((t & 1) === 0) {
                Vu(o, R, t), ui();
                break e;
              }
              v = Error(s(426));
            }
          } else if (Se && h.mode & 1) {
            var Me = Qu(c);
            if (Me !== null) {
              (Me.flags & 65536) === 0 && (Me.flags |= 256), Ku(Me, c, h, o, t), Eo(Gn(v, h));
              break e;
            }
          }
          o = v = Gn(v, h), ze !== 4 && (ze = 2), Ar === null ? Ar = [o] : Ar.push(o), o = c;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = Hu(o, v, t);
                hu(o, S);
                break e;
              case 1:
                h = v;
                var _ = o.type, C = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (ln === null || !ln.has(C)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var A = Wu(o, h, t);
                  hu(o, A);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Sc(n);
      } catch (X) {
        t = X, De === n && n !== null && (De = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function wc() {
    var e = Ql.current;
    return Ql.current = jl, e === null ? jl : e;
  }
  function ui() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4), je === null || (_n & 268435455) === 0 && (Kl & 268435455) === 0 || sn(je, We);
  }
  function bl(e, t) {
    var n = ue;
    ue |= 2;
    var r = wc();
    (je !== e || We !== t) && (Wt = null, wn(e, t));
    do
      try {
        cm();
        break;
      } catch (a) {
        Ec(e, a);
      }
    while (!0);
    if (ko(), ue = n, Ql.current = r, De !== null) throw Error(s(261));
    return je = null, We = 0, ze;
  }
  function cm() {
    for (; De !== null; ) kc(De);
  }
  function dm() {
    for (; De !== null && !Od(); ) kc(De);
  }
  function kc(e) {
    var t = Nc(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? Sc(e) : De = t, ei.current = null;
  }
  function Sc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = rm(n, t, dt), n !== null) {
          De = n;
          return;
        }
      } else {
        if (n = lm(n, t), n !== null) {
          n.flags &= 32767, De = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ze = 6, De = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    ze === 0 && (ze = 5);
  }
  function kn(e, t, n) {
    var r = pe, a = yt.transition;
    try {
      yt.transition = null, pe = 1, fm(e, t, n, r);
    } finally {
      yt.transition = a, pe = r;
    }
    return null;
  }
  function fm(e, t, n, r) {
    do
      Zn();
    while (an !== null);
    if ((ue & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Qd(e, o), e === je && (De = je = null, We = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ql || (ql = !0, Tc(nl, function() {
      return Zn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = yt.transition, yt.transition = null;
      var c = pe;
      pe = 1;
      var h = ue;
      ue |= 4, ei.current = null, om(e, n), mc(n, e), Df(so), ul = !!io, so = io = null, e.current = n, im(n), $d(), ue = h, pe = c, yt.transition = o;
    } else e.current = n;
    if (ql && (ql = !1, an = e, Gl = a), o = e.pendingLanes, o === 0 && (ln = null), jd(n.stateNode), lt(e, Le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (Yl) throw Yl = !1, e = ri, ri = null, e;
    return (Gl & 1) !== 0 && e.tag !== 0 && Zn(), o = e.pendingLanes, (o & 1) !== 0 ? e === li ? jr++ : (jr = 0, li = e) : jr = 0, en(), null;
  }
  function Zn() {
    if (an !== null) {
      var e = ds(Gl), t = yt.transition, n = pe;
      try {
        if (yt.transition = null, pe = 16 > e ? 16 : e, an === null) var r = !1;
        else {
          if (e = an, an = null, Gl = 0, (ue & 6) !== 0) throw Error(s(331));
          var a = ue;
          for (ue |= 4, Y = e.current; Y !== null; ) {
            var o = Y, c = o.child;
            if ((Y.flags & 16) !== 0) {
              var h = o.deletions;
              if (h !== null) {
                for (var v = 0; v < h.length; v++) {
                  var R = h[v];
                  for (Y = R; Y !== null; ) {
                    var I = Y;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $r(8, I, o);
                    }
                    var z = I.child;
                    if (z !== null) z.return = I, Y = z;
                    else for (; Y !== null; ) {
                      I = Y;
                      var M = I.sibling, Q = I.return;
                      if (sc(I), I === R) {
                        Y = null;
                        break;
                      }
                      if (M !== null) {
                        M.return = Q, Y = M;
                        break;
                      }
                      Y = Q;
                    }
                  }
                }
                var q = o.alternate;
                if (q !== null) {
                  var G = q.child;
                  if (G !== null) {
                    q.child = null;
                    do {
                      var Me = G.sibling;
                      G.sibling = null, G = Me;
                    } while (G !== null);
                  }
                }
                Y = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && c !== null) c.return = o, Y = c;
            else e: for (; Y !== null; ) {
              if (o = Y, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  $r(9, o, o.return);
              }
              var S = o.sibling;
              if (S !== null) {
                S.return = o.return, Y = S;
                break e;
              }
              Y = o.return;
            }
          }
          var _ = e.current;
          for (Y = _; Y !== null; ) {
            c = Y;
            var C = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && C !== null) C.return = c, Y = C;
            else e: for (c = _; Y !== null; ) {
              if (h = Y, (h.flags & 2048) !== 0) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vl(9, h);
                }
              } catch (X) {
                Re(h, h.return, X);
              }
              if (h === c) {
                Y = null;
                break e;
              }
              var A = h.sibling;
              if (A !== null) {
                A.return = h.return, Y = A;
                break e;
              }
              Y = h.return;
            }
          }
          if (ue = a, en(), Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
            Pt.onPostCommitFiberRoot(rl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        pe = n, yt.transition = t;
      }
    }
    return !1;
  }
  function Cc(e, t, n) {
    t = Gn(n, t), t = Hu(e, t, 1), e = nn(e, t, 1), t = be(), e !== null && (ur(e, 1, t), lt(e, t));
  }
  function Re(e, t, n) {
    if (e.tag === 3) Cc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Cc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
          e = Gn(n, e), e = Wu(t, e, 1), t = nn(t, e, 1), e = be(), t !== null && (ur(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function mm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, je === e && (We & n) === n && (ze === 4 || ze === 3 && (We & 130023424) === We && 500 > Le() - ni ? wn(e, 0) : ti |= n), lt(e, t);
  }
  function xc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = al, al <<= 1, (al & 130023424) === 0 && (al = 4194304)));
    var n = be();
    e = Ut(e, t), e !== null && (ur(e, t, n), lt(e, n));
  }
  function pm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), xc(e, n);
  }
  function hm(e, t) {
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
    r !== null && r.delete(t), xc(e, n);
  }
  var Nc;
  Nc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return nt = !1, nm(e, t, n);
      nt = (e.flags & 131072) !== 0;
    }
    else nt = !1, Se && (t.flags & 1048576) !== 0 && au(t, Tl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Hl(e, t), e = t.pendingProps;
        var a = Bn(t, Ke.current);
        Yn(t, n), a = Io(null, t, r, e, a, n);
        var o = zo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (o = !0, Cl(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, No(t), a.updater = Ul, t.stateNode = a, a._reactInternals = t, Uo(t, r, e, n), t = Vo(null, t, r, !0, o, n)) : (t.tag = 0, Se && o && vo(t), Je(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Hl(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = ym(r), e = Ct(r, e), a) {
            case 0:
              t = Wo(null, t, r, e, n);
              break e;
            case 1:
              t = bu(null, t, r, e, n);
              break e;
            case 11:
              t = Yu(null, t, r, e, n);
              break e;
            case 14:
              t = qu(null, t, r, Ct(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), Wo(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), bu(e, t, r, a, n);
      case 3:
        e: {
          if (Zu(t), e === null) throw Error(s(387));
          r = t.pendingProps, o = t.memoizedState, a = o.element, pu(e, t), Il(t, r, null, n);
          var c = t.memoizedState;
          if (r = c.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            a = Gn(Error(s(423)), t), t = ec(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = Gn(Error(s(424)), t), t = ec(e, t, r, n, a);
            break e;
          } else for (ct = Jt(t.stateNode.containerInfo.firstChild), ut = t, Se = !0, St = null, n = fu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Vn(), r === a) {
              t = Ht(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return yu(t), e === null && _o(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, c = a.children, uo(r, a) ? c = null : o !== null && uo(r, o) && (t.flags |= 32), Ju(e, t), Je(e, t, c, n), t.child;
      case 6:
        return e === null && _o(t), null;
      case 13:
        return tc(e, t, n);
      case 4:
        return To(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qn(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), Yu(e, t, r, a, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, c = a.value, _e(Ll, r._currentValue), r._currentValue = c, o !== null) if (kt(o.value, c)) {
            if (o.children === a.children && !et.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var h = o.dependencies;
            if (h !== null) {
              c = o.child;
              for (var v = h.firstContext; v !== null; ) {
                if (v.context === r) {
                  if (o.tag === 1) {
                    v = Bt(-1, n & -n), v.tag = 2;
                    var R = o.updateQueue;
                    if (R !== null) {
                      R = R.shared;
                      var I = R.pending;
                      I === null ? v.next = v : (v.next = I.next, I.next = v), R.pending = v;
                    }
                  }
                  o.lanes |= n, v = o.alternate, v !== null && (v.lanes |= n), Co(
                    o.return,
                    n,
                    t
                  ), h.lanes |= n;
                  break;
                }
                v = v.next;
              }
            } else if (o.tag === 10) c = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (c = o.return, c === null) throw Error(s(341));
              c.lanes |= n, h = c.alternate, h !== null && (h.lanes |= n), Co(c, n, t), c = o.sibling;
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
          Je(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, Yn(t, n), a = ht(a), r = r(a), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = Ct(r, t.pendingProps), a = Ct(r.type, a), qu(e, t, r, a, n);
      case 15:
        return Gu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), Hl(e, t), t.tag = 1, tt(r) ? (e = !0, Cl(t)) : e = !1, Yn(t, n), Uu(t, r, a), Uo(t, r, a, n), Vo(null, t, r, !0, e, n);
      case 19:
        return rc(e, t, n);
      case 22:
        return Xu(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Tc(e, t) {
    return os(e, t);
  }
  function vm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gt(e, t, n, r) {
    return new vm(e, t, n, r);
  }
  function ci(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ym(e) {
    if (typeof e == "function") return ci(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ze) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Zl(e, t, n, r, a, o) {
    var c = 2;
    if (r = e, typeof e == "function") ci(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else e: switch (e) {
      case ae:
        return Sn(n.children, a, o, t);
      case Pe:
        c = 8, a |= 8;
        break;
      case Ve:
        return e = gt(12, n, t, a | 2), e.elementType = Ve, e.lanes = o, e;
      case $e:
        return e = gt(13, n, t, a), e.elementType = $e, e.lanes = o, e;
      case Qe:
        return e = gt(19, n, t, a), e.elementType = Qe, e.lanes = o, e;
      case ye:
        return ea(n, a, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Te:
            c = 10;
            break e;
          case Oe:
            c = 9;
            break e;
          case Ze:
            c = 11;
            break e;
          case ve:
            c = 14;
            break e;
          case Fe:
            c = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = gt(c, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Sn(e, t, n, r) {
    return e = gt(7, e, r, t), e.lanes = n, e;
  }
  function ea(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = ye, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function di(e, t, n) {
    return e = gt(6, e, null, t), e.lanes = n, e;
  }
  function fi(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function gm(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Aa(0), this.expirationTimes = Aa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Aa(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function mi(e, t, n, r, a, o, c, h, v) {
    return e = new gm(e, t, n, h, v), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = gt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, No(o), e;
  }
  function _m(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Rc(e) {
    if (!e) return Zt;
    e = e._reactInternals;
    e: {
      if (dn(e) !== e || e.tag !== 1) throw Error(s(170));
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
      if (tt(n)) return nu(e, n, t);
    }
    return t;
  }
  function Pc(e, t, n, r, a, o, c, h, v) {
    return e = mi(n, r, !0, e, a, o, c, h, v), e.context = Rc(null), n = e.current, r = be(), a = on(n), o = Bt(r, a), o.callback = t ?? null, nn(n, o, a), e.current.lanes = a, ur(e, a, r), lt(e, r), e;
  }
  function ta(e, t, n, r) {
    var a = t.current, o = be(), c = on(a);
    return n = Rc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(o, c), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(a, t, c), e !== null && (Tt(e, a, c, o), Dl(e, a, c)), c;
  }
  function na(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Lc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function pi(e, t) {
    Lc(e, t), (e = e.alternate) && Lc(e, t);
  }
  function Em() {
    return null;
  }
  var Mc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function hi(e) {
    this._internalRoot = e;
  }
  ra.prototype.render = hi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    ta(e, t, null, null);
  }, ra.prototype.unmount = hi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      En(function() {
        ta(null, e, null, null);
      }), t[$t] = null;
    }
  };
  function ra(e) {
    this._internalRoot = e;
  }
  ra.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ps();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++) ;
      qt.splice(n, 0, e), n === 0 && ys(e);
    }
  };
  function vi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function la(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Dc() {
  }
  function wm(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var R = na(c);
          o.call(R);
        };
      }
      var c = Pc(t, r, e, 0, null, !1, !1, "", Dc);
      return e._reactRootContainer = c, e[$t] = c.current, Sr(e.nodeType === 8 ? e.parentNode : e), En(), c;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var h = r;
      r = function() {
        var R = na(v);
        h.call(R);
      };
    }
    var v = mi(e, 0, !1, null, null, !1, !1, "", Dc);
    return e._reactRootContainer = v, e[$t] = v.current, Sr(e.nodeType === 8 ? e.parentNode : e), En(function() {
      ta(t, v, n, r);
    }), v;
  }
  function aa(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var c = o;
      if (typeof a == "function") {
        var h = a;
        a = function() {
          var v = na(c);
          h.call(v);
        };
      }
      ta(t, c, e, a);
    } else c = wm(n, t, e, a, r);
    return na(c);
  }
  fs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = sr(t.pendingLanes);
          n !== 0 && (ja(t, n | 1), lt(t, Le()), (ue & 6) === 0 && (bn = Le() + 500, en()));
        }
        break;
      case 13:
        En(function() {
          var r = Ut(e, 1);
          if (r !== null) {
            var a = be();
            Tt(r, e, 1, a);
          }
        }), pi(e, 1);
    }
  }, Ua = function(e) {
    if (e.tag === 13) {
      var t = Ut(e, 134217728);
      if (t !== null) {
        var n = be();
        Tt(t, e, 134217728, n);
      }
      pi(e, 134217728);
    }
  }, ms = function(e) {
    if (e.tag === 13) {
      var t = on(e), n = Ut(e, t);
      if (n !== null) {
        var r = be();
        Tt(n, e, t, r);
      }
      pi(e, t);
    }
  }, ps = function() {
    return pe;
  }, hs = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, Da = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ca(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = kl(r);
              if (!a) throw Error(s(90));
              ji(r), Ca(r, a);
            }
          }
        }
        break;
      case "textarea":
        Vi(e, n);
        break;
      case "select":
        t = n.value, t != null && Pn(e, !!n.multiple, t, !1);
    }
  }, Zi = ii, es = En;
  var km = { usingClientEntryPoint: !1, Events: [Nr, jn, kl, Ji, bi, ii] }, Ur = { findFiberByHostInstance: fn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: Ur.bundleType, version: Ur.version, rendererPackageName: Ur.rendererPackageName, rendererConfig: Ur.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ls(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Ur.findFiberByHostInstance || Em, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oa.isDisabled && oa.supportsFiber) try {
      rl = oa.inject(Sm), Pt = oa;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vi(t)) throw Error(s(200));
    return _m(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!vi(e)) throw Error(s(299));
    var n = !1, r = "", a = Mc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = mi(e, 1, !1, null, null, n, !1, r, a), e[$t] = t.current, Sr(e.nodeType === 8 ? e.parentNode : e), new hi(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = ls(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return En(e);
  }, at.hydrate = function(e, t, n) {
    if (!la(t)) throw Error(s(200));
    return aa(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!vi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, o = "", c = Mc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = Pc(t, null, e, 1, n ?? null, a, !1, o, c), e[$t] = t.current, Sr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ra(t);
  }, at.render = function(e, t, n) {
    if (!la(t)) throw Error(s(200));
    return aa(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!la(e)) throw Error(s(40));
    return e._reactRootContainer ? (En(function() {
      aa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[$t] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = ii, at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!la(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return aa(e, t, n, !1, r);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
var Ac;
function Pm() {
  if (Ac) return gi.exports;
  Ac = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), gi.exports = Rm(), gi.exports;
}
var jc;
function Lm() {
  if (jc) return ia;
  jc = 1;
  var l = Pm();
  return ia.createRoot = l.createRoot, ia.hydrateRoot = l.hydrateRoot, ia;
}
var Mm = Lm();
const Dm = /* @__PURE__ */ ed(Mm);
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
var Uc = "popstate";
function Bc(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Im(l = {}) {
  function i(f, m) {
    let {
      pathname: p = "/",
      search: y = "",
      hash: w = ""
    } = Rn(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Pi(
      "",
      { pathname: p, search: y, hash: w },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function s(f, m) {
    let p = f.document.querySelector("base"), y = "";
    if (p && p.getAttribute("href")) {
      let w = f.location.href, x = w.indexOf("#");
      y = x === -1 ? w : w.slice(0, x);
    }
    return y + "#" + (typeof m == "string" ? m : Qr(m));
  }
  function u(f, m) {
    _t(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return Om(
    i,
    s,
    u,
    l
  );
}
function Ce(l, i) {
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
function zm() {
  return Math.random().toString(36).substring(2, 10);
}
function Hc(l, i) {
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
function Pi(l, i, s = null, u, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? Rn(i) : i,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || u || zm(),
    mask: f
  };
}
function Qr({
  pathname: l = "/",
  search: i = "",
  hash: s = ""
}) {
  return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function Rn(l) {
  let i = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (i.hash = l.substring(s), l = l.substring(0, s));
    let u = l.indexOf("?");
    u >= 0 && (i.search = l.substring(u), l = l.substring(0, u)), l && (i.pathname = l);
  }
  return i;
}
function Om(l, i, s, u = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = u, p = f.history, y = "POP", w = null, x = N();
  x == null && (x = 0, p.replaceState({ ...p.state, idx: x }, ""));
  function N() {
    return (p.state || { idx: null }).idx;
  }
  function T() {
    y = "POP";
    let P = N(), j = P == null ? null : P - x;
    x = P, w && w({ action: y, location: O.location, delta: j });
  }
  function D(P, j) {
    y = "PUSH";
    let L = Bc(P) ? P : Pi(O.location, P, j);
    s && s(L, P), x = N() + 1;
    let $ = Hc(L, x), W = O.createHref(L.mask || L);
    try {
      p.pushState($, "", W);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError")
        throw b;
      f.location.assign(W);
    }
    m && w && w({ action: y, location: O.location, delta: 1 });
  }
  function H(P, j) {
    y = "REPLACE";
    let L = Bc(P) ? P : Pi(O.location, P, j);
    s && s(L, P), x = N();
    let $ = Hc(L, x), W = O.createHref(L.mask || L);
    p.replaceState($, "", W), m && w && w({ action: y, location: O.location, delta: 0 });
  }
  function U(P) {
    return $m(f, P);
  }
  let O = {
    get action() {
      return y;
    },
    get location() {
      return l(f, p);
    },
    listen(P) {
      if (w)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(Uc, T), w = P, () => {
        f.removeEventListener(Uc, T), w = null;
      };
    },
    createHref(P) {
      return i(f, P);
    },
    createURL: U,
    encodeLocation(P) {
      let j = U(P);
      return {
        pathname: j.pathname,
        search: j.search,
        hash: j.hash
      };
    },
    push: D,
    replace: H,
    go(P) {
      return p.go(P);
    }
  };
  return O;
}
function $m(l, i, s = !1) {
  let u = "http://localhost";
  l && (u = l.location.origin !== "null" ? l.location.origin : l.location.href), Ce(u, "No window.location.(origin|href) available to create URL");
  let f = typeof i == "string" ? i : Qr(i);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = u + f), new URL(f, u);
}
function nd(l, i, s = "/") {
  return Fm(l, i, s, !1);
}
function Fm(l, i, s, u, f) {
  let m = typeof i == "string" ? Rn(i) : i, p = Vt(m.pathname || "/", s);
  if (p == null)
    return null;
  let y = Am(l), w = null, x = Xm(p);
  for (let N = 0; w == null && N < y.length; ++N)
    w = qm(
      y[N],
      x,
      u
    );
  return w;
}
function Am(l) {
  let i = rd(l);
  return jm(i), i;
}
function rd(l, i = [], s = [], u = "", f = !1) {
  let m = (p, y, w = f, x) => {
    let N = {
      relativePath: x === void 0 ? p.path || "" : x,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: y,
      route: p
    };
    if (N.relativePath.startsWith("/")) {
      if (!N.relativePath.startsWith(u) && w)
        return;
      Ce(
        N.relativePath.startsWith(u),
        `Absolute route path "${N.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), N.relativePath = N.relativePath.slice(u.length);
    }
    let T = Rt([u, N.relativePath]), D = s.concat(N);
    p.children && p.children.length > 0 && (Ce(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), rd(
      p.children,
      i,
      D,
      T,
      w
    )), !(p.path == null && !p.index) && i.push({
      path: T,
      score: Km(T, p.index),
      routesMeta: D
    });
  };
  return l.forEach((p, y) => {
    var w;
    if (p.path === "" || !((w = p.path) != null && w.includes("?")))
      m(p, y);
    else
      for (let x of ld(p.path))
        m(p, y, !0, x);
  }), i;
}
function ld(l) {
  let i = l.split("/");
  if (i.length === 0) return [];
  let [s, ...u] = i, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (u.length === 0)
    return f ? [m, ""] : [m];
  let p = ld(u.join("/")), y = [];
  return y.push(
    ...p.map(
      (w) => w === "" ? m : [m, w].join("/")
    )
  ), f && y.push(...p), y.map(
    (w) => l.startsWith("/") && w === "" ? "/" : w
  );
}
function jm(l) {
  l.sort(
    (i, s) => i.score !== s.score ? s.score - i.score : Ym(
      i.routesMeta.map((u) => u.childrenIndex),
      s.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var Um = /^:[\w-]+$/, Bm = 3, Hm = 2, Wm = 1, Vm = 10, Qm = -2, Wc = (l) => l === "*";
function Km(l, i) {
  let s = l.split("/"), u = s.length;
  return s.some(Wc) && (u += Qm), i && (u += Hm), s.filter((f) => !Wc(f)).reduce(
    (f, m) => f + (Um.test(m) ? Bm : m === "" ? Wm : Vm),
    u
  );
}
function Ym(l, i) {
  return l.length === i.length && l.slice(0, -1).every((u, f) => u === i[f]) ? (
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
function qm(l, i, s = !1) {
  let { routesMeta: u } = l, f = {}, m = "/", p = [];
  for (let y = 0; y < u.length; ++y) {
    let w = u[y], x = y === u.length - 1, N = m === "/" ? i : i.slice(m.length) || "/", T = pa(
      { path: w.relativePath, caseSensitive: w.caseSensitive, end: x },
      N
    ), D = w.route;
    if (!T && x && s && !u[u.length - 1].route.index && (T = pa(
      {
        path: w.relativePath,
        caseSensitive: w.caseSensitive,
        end: !1
      },
      N
    )), !T)
      return null;
    Object.assign(f, T.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Rt([m, T.pathname]),
      pathnameBase: ep(
        Rt([m, T.pathnameBase])
      ),
      route: D
    }), T.pathnameBase !== "/" && (m = Rt([m, T.pathnameBase]));
  }
  return p;
}
function pa(l, i) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, u] = Gm(
    l.path,
    l.caseSensitive,
    l.end
  ), f = i.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), y = f.slice(1);
  return {
    params: u.reduce(
      (x, { paramName: N, isOptional: T }, D) => {
        if (N === "*") {
          let U = y[D] || "";
          p = m.slice(0, m.length - U.length).replace(/(.)\/+$/, "$1");
        }
        const H = y[D];
        return T && !H ? x[N] = void 0 : x[N] = (H || "").replace(/%2F/g, "/"), x;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function Gm(l, i = !1, s = !0) {
  _t(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let u = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, y, w, x, N) => {
      if (u.push({ paramName: y, isOptional: w != null }), w) {
        let T = N.charAt(x + p.length);
        return T && T !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (u.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, i ? void 0 : "i"), u];
}
function Xm(l) {
  try {
    return l.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
  } catch (i) {
    return _t(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
    ), l;
  }
}
function Vt(l, i) {
  if (i === "/") return l;
  if (!l.toLowerCase().startsWith(i.toLowerCase()))
    return null;
  let s = i.endsWith("/") ? i.length - 1 : i.length, u = l.charAt(s);
  return u && u !== "/" ? null : l.slice(s) || "/";
}
var Jm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function bm(l, i = "/") {
  let {
    pathname: s,
    search: u = "",
    hash: f = ""
  } = typeof l == "string" ? Rn(l) : l, m;
  return s ? (s = ad(s), s.startsWith("/") ? m = Vc(s.substring(1), "/") : m = Vc(s, i)) : m = i, {
    pathname: m,
    search: tp(u),
    hash: np(f)
  };
}
function Vc(l, i) {
  let s = ha(i).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function wi(l, i, s, u) {
  return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Zm(l) {
  return l.filter(
    (i, s) => s === 0 || i.route.path && i.route.path.length > 0
  );
}
function Mi(l) {
  let i = Zm(l);
  return i.map(
    (s, u) => u === i.length - 1 ? s.pathname : s.pathnameBase
  );
}
function ga(l, i, s, u = !1) {
  let f;
  typeof l == "string" ? f = Rn(l) : (f = { ...l }, Ce(
    !f.pathname || !f.pathname.includes("?"),
    wi("?", "pathname", "search", f)
  ), Ce(
    !f.pathname || !f.pathname.includes("#"),
    wi("#", "pathname", "hash", f)
  ), Ce(
    !f.search || !f.search.includes("#"),
    wi("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, y;
  if (p == null)
    y = s;
  else {
    let T = i.length - 1;
    if (!u && p.startsWith("..")) {
      let D = p.split("/");
      for (; D[0] === ".."; )
        D.shift(), T -= 1;
      f.pathname = D.join("/");
    }
    y = T >= 0 ? i[T] : "/";
  }
  let w = bm(f, y), x = p && p !== "/" && p.endsWith("/"), N = (m || p === ".") && s.endsWith("/");
  return !w.pathname.endsWith("/") && (x || N) && (w.pathname += "/"), w;
}
var ad = (l) => l.replace(/\/\/+/g, "/"), Rt = (l) => ad(l.join("/")), ha = (l) => l.replace(/\/+$/, ""), ep = (l) => ha(l).replace(/^\/*/, "/"), tp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, np = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, rp = class {
  constructor(l, i, s, u = !1) {
    this.status = l, this.statusText = i || "", this.internal = u, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function lp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function ap(l) {
  let i = l.map((s) => s.route.path).filter(Boolean);
  return Rt(i) || "/";
}
var od = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function id(l, i) {
  let s = l;
  if (typeof s != "string" || !Jm.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let u = s, f = !1;
  if (od)
    try {
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), y = Vt(p.pathname, i);
      p.origin === m.origin && y != null ? s = y + p.search + p.hash : f = !0;
    } catch {
      _t(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: u,
    isExternal: f,
    to: s
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var sd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  sd
);
var op = [
  "GET",
  ...sd
];
new Set(op);
var er = E.createContext(null);
er.displayName = "DataRouter";
var _a = E.createContext(null);
_a.displayName = "DataRouterState";
var ud = E.createContext(!1);
function ip() {
  return E.useContext(ud);
}
var cd = E.createContext({
  isTransitioning: !1
});
cd.displayName = "ViewTransition";
var sp = E.createContext(
  /* @__PURE__ */ new Map()
);
sp.displayName = "Fetchers";
var up = E.createContext(null);
up.displayName = "Await";
var ft = E.createContext(
  null
);
ft.displayName = "Navigation";
var Kr = E.createContext(
  null
);
Kr.displayName = "Location";
var Ot = E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ot.displayName = "Route";
var Di = E.createContext(null);
Di.displayName = "RouteError";
var dd = "REACT_ROUTER_ERROR", cp = "REDIRECT", dp = "ROUTE_ERROR_RESPONSE";
function fp(l) {
  if (l.startsWith(`${dd}:${cp}:{`))
    try {
      let i = JSON.parse(l.slice(28));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean")
        return i;
    } catch {
    }
}
function mp(l) {
  if (l.startsWith(
    `${dd}:${dp}:{`
  ))
    try {
      let i = JSON.parse(l.slice(40));
      if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string")
        return new rp(
          i.status,
          i.statusText,
          i.data
        );
    } catch {
    }
}
function pp(l, { relative: i } = {}) {
  Ce(
    tr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: u } = E.useContext(ft), { hash: f, pathname: m, search: p } = qr(l, { relative: i }), y = m;
  return s !== "/" && (y = m === "/" ? s : Rt([s, m])), u.createHref({ pathname: y, search: p, hash: f });
}
function tr() {
  return E.useContext(Kr) != null;
}
function Et() {
  return Ce(
    tr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), E.useContext(Kr).location;
}
var fd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function md(l) {
  E.useContext(ft).static || E.useLayoutEffect(l);
}
function Yr() {
  let { isDataRoute: l } = E.useContext(Ot);
  return l ? Tp() : hp();
}
function hp() {
  Ce(
    tr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = E.useContext(er), { basename: i, navigator: s } = E.useContext(ft), { matches: u } = E.useContext(Ot), { pathname: f } = Et(), m = JSON.stringify(Mi(u)), p = E.useRef(!1);
  return md(() => {
    p.current = !0;
  }), E.useCallback(
    (w, x = {}) => {
      if (_t(p.current, fd), !p.current) return;
      if (typeof w == "number") {
        s.go(w);
        return;
      }
      let N = ga(
        w,
        JSON.parse(m),
        f,
        x.relative === "path"
      );
      l == null && i !== "/" && (N.pathname = N.pathname === "/" ? i : Rt([i, N.pathname])), (x.replace ? s.replace : s.push)(
        N,
        x.state,
        x
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
E.createContext(null);
function qr(l, { relative: i } = {}) {
  let { matches: s } = E.useContext(Ot), { pathname: u } = Et(), f = JSON.stringify(Mi(s));
  return E.useMemo(
    () => ga(
      l,
      JSON.parse(f),
      u,
      i === "path"
    ),
    [l, f, u, i]
  );
}
function vp(l, i) {
  return pd(l, i);
}
function pd(l, i, s) {
  var P;
  Ce(
    tr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: u } = E.useContext(ft), { matches: f } = E.useContext(Ot), m = f[f.length - 1], p = m ? m.params : {}, y = m ? m.pathname : "/", w = m ? m.pathnameBase : "/", x = m && m.route;
  {
    let j = x && x.path || "";
    vd(
      y,
      !x || j.endsWith("*") || j.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === "/" ? "*" : `${j}/*`}">.`
    );
  }
  let N = Et(), T;
  if (i) {
    let j = typeof i == "string" ? Rn(i) : i;
    Ce(
      w === "/" || ((P = j.pathname) == null ? void 0 : P.startsWith(w)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${j.pathname}" was given in the \`location\` prop.`
    ), T = j;
  } else
    T = N;
  let D = T.pathname || "/", H = D;
  if (w !== "/") {
    let j = w.replace(/^\//, "").split("/");
    H = "/" + D.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let U = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (j) => Object.assign(j, {
        route: s.manifest[j.route.id] || j.route
      })
    )
  ) : nd(l, { pathname: H });
  _t(
    x || U != null,
    `No routes matched location "${T.pathname}${T.search}${T.hash}" `
  ), _t(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let O = wp(
    U && U.map(
      (j) => Object.assign({}, j, {
        params: Object.assign({}, p, j.params),
        pathname: Rt([
          w,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            j.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : j.pathname
        ]),
        pathnameBase: j.pathnameBase === "/" ? w : Rt([
          w,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          u.encodeLocation ? u.encodeLocation(
            j.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : j.pathnameBase
        ])
      })
    ),
    f,
    s
  );
  return i && O ? /* @__PURE__ */ E.createElement(
    Kr.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...T
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    O
  ) : O;
}
function yp() {
  let l = Np(), i = lp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, u = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: u }, m = { padding: "2px 4px", backgroundColor: u }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", { style: { fontStyle: "italic" } }, i), s ? /* @__PURE__ */ E.createElement("pre", { style: f }, s) : null, p);
}
var gp = /* @__PURE__ */ E.createElement(yp, null), hd = class extends E.Component {
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
      const s = mp(l.digest);
      s && (l = s);
    }
    let i = l !== void 0 ? /* @__PURE__ */ E.createElement(Ot.Provider, { value: this.props.routeContext }, /* @__PURE__ */ E.createElement(
      Di.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ E.createElement(_p, { error: l }, i) : i;
  }
};
hd.contextType = ud;
var ki = /* @__PURE__ */ new WeakMap();
function _p({
  children: l,
  error: i
}) {
  let { basename: s } = E.useContext(ft);
  if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
    let u = fp(i.digest);
    if (u) {
      let f = ki.get(i);
      if (f) throw f;
      let m = id(u.location, s);
      if (od && !ki.get(i))
        if (m.isExternal || u.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: u.replace
            })
          );
          throw ki.set(i, p), p;
        }
      return /* @__PURE__ */ E.createElement(
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
function Ep({ routeContext: l, match: i, children: s }) {
  let u = E.useContext(er);
  return u && u.static && u.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ E.createElement(Ot.Provider, { value: l }, s);
}
function wp(l, i = [], s) {
  let u = s == null ? void 0 : s.state;
  if (l == null) {
    if (!u)
      return null;
    if (u.errors)
      l = u.matches;
    else if (i.length === 0 && !u.initialized && u.matches.length > 0)
      l = u.matches;
    else
      return null;
  }
  let f = l, m = u == null ? void 0 : u.errors;
  if (m != null) {
    let N = f.findIndex(
      (T) => T.route.id && (m == null ? void 0 : m[T.route.id]) !== void 0
    );
    Ce(
      N >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, N + 1)
    );
  }
  let p = !1, y = -1;
  if (s && u) {
    p = u.renderFallback;
    for (let N = 0; N < f.length; N++) {
      let T = f[N];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (y = N), T.route.id) {
        let { loaderData: D, errors: H } = u, U = T.route.loader && !D.hasOwnProperty(T.route.id) && (!H || H[T.route.id] === void 0);
        if (T.route.lazy || U) {
          s.isStatic && (p = !0), y >= 0 ? f = f.slice(0, y + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let w = s == null ? void 0 : s.onError, x = u && w ? (N, T) => {
    var D, H;
    w(N, {
      location: u.location,
      params: ((H = (D = u.matches) == null ? void 0 : D[0]) == null ? void 0 : H.params) ?? {},
      pattern: ap(u.matches),
      errorInfo: T
    });
  } : void 0;
  return f.reduceRight(
    (N, T, D) => {
      let H, U = !1, O = null, P = null;
      u && (H = m && T.route.id ? m[T.route.id] : void 0, O = T.route.errorElement || gp, p && (y < 0 && D === 0 ? (vd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), U = !0, P = null) : y === D && (U = !0, P = T.route.hydrateFallbackElement || null)));
      let j = i.concat(f.slice(0, D + 1)), L = () => {
        let $;
        return H ? $ = O : U ? $ = P : T.route.Component ? $ = /* @__PURE__ */ E.createElement(T.route.Component, null) : T.route.element ? $ = T.route.element : $ = N, /* @__PURE__ */ E.createElement(
          Ep,
          {
            match: T,
            routeContext: {
              outlet: N,
              matches: j,
              isDataRoute: u != null
            },
            children: $
          }
        );
      };
      return u && (T.route.ErrorBoundary || T.route.errorElement || D === 0) ? /* @__PURE__ */ E.createElement(
        hd,
        {
          location: u.location,
          revalidation: u.revalidation,
          component: O,
          error: H,
          children: L(),
          routeContext: { outlet: null, matches: j, isDataRoute: !0 },
          onError: x
        }
      ) : L();
    },
    null
  );
}
function Ii(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function kp(l) {
  let i = E.useContext(er);
  return Ce(i, Ii(l)), i;
}
function Sp(l) {
  let i = E.useContext(_a);
  return Ce(i, Ii(l)), i;
}
function Cp(l) {
  let i = E.useContext(Ot);
  return Ce(i, Ii(l)), i;
}
function zi(l) {
  let i = Cp(l), s = i.matches[i.matches.length - 1];
  return Ce(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function xp() {
  return zi(
    "useRouteId"
    /* UseRouteId */
  );
}
function Np() {
  var u;
  let l = E.useContext(Di), i = Sp(
    "useRouteError"
    /* UseRouteError */
  ), s = zi(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (u = i.errors) == null ? void 0 : u[s];
}
function Tp() {
  let { router: l } = kp(
    "useNavigate"
    /* UseNavigateStable */
  ), i = zi(
    "useNavigate"
    /* UseNavigateStable */
  ), s = E.useRef(!1);
  return md(() => {
    s.current = !0;
  }), E.useCallback(
    async (f, m = {}) => {
      _t(s.current, fd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: i, ...m }));
    },
    [l, i]
  );
}
var Qc = {};
function vd(l, i, s) {
  !i && !Qc[l] && (Qc[l] = !0, _t(!1, s));
}
E.memo(Rp);
function Rp({
  routes: l,
  manifest: i,
  future: s,
  state: u,
  isStatic: f,
  onError: m
}) {
  return pd(l, void 0, {
    manifest: i,
    state: u,
    isStatic: f,
    onError: m
  });
}
function sa({
  to: l,
  replace: i,
  state: s,
  relative: u
}) {
  Ce(
    tr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = E.useContext(ft);
  _t(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = E.useContext(Ot), { pathname: p } = Et(), y = Yr(), w = ga(
    l,
    Mi(m),
    p,
    u === "path"
  ), x = JSON.stringify(w);
  return E.useEffect(() => {
    y(JSON.parse(x), { replace: i, state: s, relative: u });
  }, [y, x, u, i, s]), null;
}
function ot(l) {
  Ce(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Pp({
  basename: l = "/",
  children: i = null,
  location: s,
  navigationType: u = "POP",
  navigator: f,
  static: m = !1,
  useTransitions: p
}) {
  Ce(
    !tr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let y = l.replace(/^\/*/, "/"), w = E.useMemo(
    () => ({
      basename: y,
      navigator: f,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [y, f, m, p]
  );
  typeof s == "string" && (s = Rn(s));
  let {
    pathname: x = "/",
    search: N = "",
    hash: T = "",
    state: D = null,
    key: H = "default",
    mask: U
  } = s, O = E.useMemo(() => {
    let P = Vt(x, y);
    return P == null ? null : {
      location: {
        pathname: P,
        search: N,
        hash: T,
        state: D,
        key: H,
        mask: U
      },
      navigationType: u
    };
  }, [y, x, N, T, D, H, u, U]);
  return _t(
    O != null,
    `<Router basename="${y}"> is not able to match the URL "${x}${N}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), O == null ? null : /* @__PURE__ */ E.createElement(ft.Provider, { value: w }, /* @__PURE__ */ E.createElement(Kr.Provider, { children: i, value: O }));
}
function Lp({
  children: l,
  location: i
}) {
  return vp(Li(l), i);
}
function Li(l, i = []) {
  let s = [];
  return E.Children.forEach(l, (u, f) => {
    if (!E.isValidElement(u))
      return;
    let m = [...i, f];
    if (u.type === E.Fragment) {
      s.push.apply(
        s,
        Li(u.props.children, m)
      );
      return;
    }
    Ce(
      u.type === ot,
      `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ce(
      !u.props.index || !u.props.children,
      "An index route cannot have child routes."
    );
    let p = {
      id: u.props.id || m.join("-"),
      caseSensitive: u.props.caseSensitive,
      element: u.props.element,
      Component: u.props.Component,
      index: u.props.index,
      path: u.props.path,
      middleware: u.props.middleware,
      loader: u.props.loader,
      action: u.props.action,
      hydrateFallbackElement: u.props.hydrateFallbackElement,
      HydrateFallback: u.props.HydrateFallback,
      errorElement: u.props.errorElement,
      ErrorBoundary: u.props.ErrorBoundary,
      hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
      shouldRevalidate: u.props.shouldRevalidate,
      handle: u.props.handle,
      lazy: u.props.lazy
    };
    u.props.children && (p.children = Li(
      u.props.children,
      m
    )), s.push(p);
  }), s;
}
var fa = "get", ma = "application/x-www-form-urlencoded";
function Ea(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function Mp(l) {
  return Ea(l) && l.tagName.toLowerCase() === "button";
}
function Dp(l) {
  return Ea(l) && l.tagName.toLowerCase() === "form";
}
function Ip(l) {
  return Ea(l) && l.tagName.toLowerCase() === "input";
}
function zp(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Op(l, i) {
  return l.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !zp(l);
}
var ua = null;
function $p() {
  if (ua === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ua = !1;
    } catch {
      ua = !0;
    }
  return ua;
}
var Fp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Si(l) {
  return l != null && !Fp.has(l) ? (_t(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ma}"`
  ), null) : l;
}
function Ap(l, i) {
  let s, u, f, m, p;
  if (Dp(l)) {
    let y = l.getAttribute("action");
    u = y ? Vt(y, i) : null, s = l.getAttribute("method") || fa, f = Si(l.getAttribute("enctype")) || ma, m = new FormData(l);
  } else if (Mp(l) || Ip(l) && (l.type === "submit" || l.type === "image")) {
    let y = l.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = l.getAttribute("formaction") || y.getAttribute("action");
    if (u = w ? Vt(w, i) : null, s = l.getAttribute("formmethod") || y.getAttribute("method") || fa, f = Si(l.getAttribute("formenctype")) || Si(y.getAttribute("enctype")) || ma, m = new FormData(y, l), !$p()) {
      let { name: x, type: N, value: T } = l;
      if (N === "image") {
        let D = x ? `${x}.` : "";
        m.append(`${D}x`, "0"), m.append(`${D}y`, "0");
      } else x && m.append(x, T);
    }
  } else {
    if (Ea(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = fa, u = null, f = ma, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: u, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Oi(l, i) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(i);
}
function yd(l, i, s, u) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${u}` : f.pathname = `${f.pathname}.${u}` : f.pathname === "/" ? f.pathname = `_root.${u}` : i && Vt(f.pathname, i) === "/" ? f.pathname = `${ha(i)}/_root.${u}` : f.pathname = `${ha(f.pathname)}.${u}`, f;
}
async function jp(l, i) {
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
function Up(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Bp(l, i, s) {
  let u = await Promise.all(
    l.map(async (f) => {
      let m = i.routes[f.route.id];
      if (m) {
        let p = await jp(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Qp(
    u.flat(1).filter(Up).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function Kc(l, i, s, u, f, m) {
  let p = (w, x) => s[x] ? w.route.id !== s[x].route.id : !0, y = (w, x) => {
    var N;
    return (
      // param change, /users/123 -> /users/456
      s[x].pathname !== w.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((N = s[x].route.path) == null ? void 0 : N.endsWith("*")) && s[x].params["*"] !== w.params["*"]
    );
  };
  return m === "assets" ? i.filter(
    (w, x) => p(w, x) || y(w, x)
  ) : m === "data" ? i.filter((w, x) => {
    var T;
    let N = u.routes[w.route.id];
    if (!N || !N.hasLoader)
      return !1;
    if (p(w, x) || y(w, x))
      return !0;
    if (w.route.shouldRevalidate) {
      let D = w.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((T = s[0]) == null ? void 0 : T.params) || {},
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
function Hp(l, i, { includeHydrateFallback: s } = {}) {
  return Wp(
    l.map((u) => {
      let f = i.routes[u.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function Wp(l) {
  return [...new Set(l)];
}
function Vp(l) {
  let i = {}, s = Object.keys(l).sort();
  for (let u of s)
    i[u] = l[u];
  return i;
}
function Qp(l, i) {
  let s = /* @__PURE__ */ new Set();
  return new Set(i), l.reduce((u, f) => {
    let m = JSON.stringify(Vp(f));
    return s.has(m) || (s.add(m), u.push({ key: m, link: f })), u;
  }, []);
}
function $i() {
  let l = E.useContext(er);
  return Oi(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Kp() {
  let l = E.useContext(_a);
  return Oi(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Fi = E.createContext(void 0);
Fi.displayName = "FrameworkContext";
function Ai() {
  let l = E.useContext(Fi);
  return Oi(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function Yp(l, i) {
  let s = E.useContext(Fi), [u, f] = E.useState(!1), [m, p] = E.useState(!1), { onFocus: y, onBlur: w, onMouseEnter: x, onMouseLeave: N, onTouchStart: T } = i, D = E.useRef(null);
  E.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let O = (j) => {
        j.forEach((L) => {
          p(L.isIntersecting);
        });
      }, P = new IntersectionObserver(O, { threshold: 0.5 });
      return D.current && P.observe(D.current), () => {
        P.disconnect();
      };
    }
  }, [l]), E.useEffect(() => {
    if (u) {
      let O = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(O);
      };
    }
  }, [u]);
  let H = () => {
    f(!0);
  }, U = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, D, {}] : [
    m,
    D,
    {
      onFocus: Br(y, H),
      onBlur: Br(w, U),
      onMouseEnter: Br(x, H),
      onMouseLeave: Br(N, U),
      onTouchStart: Br(T, H)
    }
  ] : [!1, D, {}];
}
function Br(l, i) {
  return (s) => {
    l && l(s), s.defaultPrevented || i(s);
  };
}
function qp({ page: l, ...i }) {
  let s = ip(), { router: u } = $i(), f = E.useMemo(
    () => nd(u.routes, l, u.basename),
    [u.routes, l, u.basename]
  );
  return f ? s ? /* @__PURE__ */ E.createElement(Xp, { page: l, matches: f, ...i }) : /* @__PURE__ */ E.createElement(Jp, { page: l, matches: f, ...i }) : null;
}
function Gp(l) {
  let { manifest: i, routeModules: s } = Ai(), [u, f] = E.useState([]);
  return E.useEffect(() => {
    let m = !1;
    return Bp(l, i, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, i, s]), u;
}
function Xp({
  page: l,
  matches: i,
  ...s
}) {
  let u = Et(), { future: f } = Ai(), { basename: m } = $i(), p = E.useMemo(() => {
    if (l === u.pathname + u.search + u.hash)
      return [];
    let y = yd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), w = !1, x = [];
    for (let N of i)
      typeof N.route.shouldRevalidate == "function" ? w = !0 : x.push(N.route.id);
    return w && x.length > 0 && y.searchParams.set("_routes", x.join(",")), [y.pathname + y.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    u,
    i
  ]);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, p.map((y) => /* @__PURE__ */ E.createElement("link", { key: y, rel: "prefetch", as: "fetch", href: y, ...s })));
}
function Jp({
  page: l,
  matches: i,
  ...s
}) {
  let u = Et(), { future: f, manifest: m, routeModules: p } = Ai(), { basename: y } = $i(), { loaderData: w, matches: x } = Kp(), N = E.useMemo(
    () => Kc(
      l,
      i,
      x,
      m,
      u,
      "data"
    ),
    [l, i, x, m, u]
  ), T = E.useMemo(
    () => Kc(
      l,
      i,
      x,
      m,
      u,
      "assets"
    ),
    [l, i, x, m, u]
  ), D = E.useMemo(() => {
    if (l === u.pathname + u.search + u.hash)
      return [];
    let O = /* @__PURE__ */ new Set(), P = !1;
    if (i.forEach((L) => {
      var W;
      let $ = m.routes[L.route.id];
      !$ || !$.hasLoader || (!N.some((b) => b.route.id === L.route.id) && L.route.id in w && ((W = p[L.route.id]) != null && W.shouldRevalidate) || $.hasClientLoader ? P = !0 : O.add(L.route.id));
    }), O.size === 0)
      return [];
    let j = yd(
      l,
      y,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return P && O.size > 0 && j.searchParams.set(
      "_routes",
      i.filter((L) => O.has(L.route.id)).map((L) => L.route.id).join(",")
    ), [j.pathname + j.search];
  }, [
    y,
    f.v8_trailingSlashAwareDataRequests,
    w,
    u,
    m,
    N,
    i,
    l,
    p
  ]), H = E.useMemo(
    () => Hp(T, m),
    [T, m]
  ), U = Gp(T);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, D.map((O) => /* @__PURE__ */ E.createElement("link", { key: O, rel: "prefetch", as: "fetch", href: O, ...s })), H.map((O) => /* @__PURE__ */ E.createElement("link", { key: O, rel: "modulepreload", href: O, ...s })), U.map(({ key: O, link: P }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ E.createElement(
      "link",
      {
        key: O,
        nonce: s.nonce,
        ...P,
        crossOrigin: P.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function bp(...l) {
  return (i) => {
    l.forEach((s) => {
      typeof s == "function" ? s(i) : s != null && (s.current = i);
    });
  };
}
var Zp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Zp && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function eh({
  basename: l,
  children: i,
  useTransitions: s,
  window: u
}) {
  let f = E.useRef();
  f.current == null && (f.current = Im({ window: u, v5Compat: !0 }));
  let m = f.current, [p, y] = E.useState({
    action: m.action,
    location: m.location
  }), w = E.useCallback(
    (x) => {
      s === !1 ? y(x) : E.startTransition(() => y(x));
    },
    [s]
  );
  return E.useLayoutEffect(() => m.listen(w), [m, w]), /* @__PURE__ */ E.createElement(
    Pp,
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
var gd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, _d = E.forwardRef(
  function({
    onClick: i,
    discover: s = "render",
    prefetch: u = "none",
    relative: f,
    reloadDocument: m,
    replace: p,
    mask: y,
    state: w,
    target: x,
    to: N,
    preventScrollReset: T,
    viewTransition: D,
    defaultShouldRevalidate: H,
    ...U
  }, O) {
    let { basename: P, navigator: j, useTransitions: L } = E.useContext(ft), $ = typeof N == "string" && gd.test(N), W = id(N, P);
    N = W.to;
    let b = pp(N, { relative: f }), le = Et(), ae = null;
    if (y) {
      let ve = ga(
        y,
        [],
        le.mask ? le.mask.pathname : "/",
        !0
      );
      P !== "/" && (ve.pathname = ve.pathname === "/" ? P : Rt([P, ve.pathname])), ae = j.createHref(ve);
    }
    let [Pe, Ve, Te] = Yp(
      u,
      U
    ), Oe = rh(N, {
      replace: p,
      mask: y,
      state: w,
      target: x,
      preventScrollReset: T,
      relative: f,
      viewTransition: D,
      defaultShouldRevalidate: H,
      useTransitions: L
    });
    function Ze(ve) {
      i && i(ve), ve.defaultPrevented || Oe(ve);
    }
    let $e = !(W.isExternal || m), Qe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ E.createElement(
        "a",
        {
          ...U,
          ...Te,
          href: ($e ? ae : void 0) || W.absoluteURL || b,
          onClick: $e ? Ze : i,
          ref: bp(O, Ve),
          target: x,
          "data-discover": !$ && s === "render" ? "true" : void 0
        }
      )
    );
    return Pe && !$ ? /* @__PURE__ */ E.createElement(E.Fragment, null, Qe, /* @__PURE__ */ E.createElement(qp, { page: b })) : Qe;
  }
);
_d.displayName = "Link";
var Be = E.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: s = !1,
    className: u = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: y,
    children: w,
    ...x
  }, N) {
    let T = qr(p, { relative: x.relative }), D = Et(), H = E.useContext(_a), { navigator: U, basename: O } = E.useContext(ft), P = H != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    sh(T) && y === !0, j = U.encodeLocation ? U.encodeLocation(T).pathname : T.pathname, L = D.pathname, $ = H && H.navigation && H.navigation.location ? H.navigation.location.pathname : null;
    s || (L = L.toLowerCase(), $ = $ ? $.toLowerCase() : null, j = j.toLowerCase()), $ && O && ($ = Vt($, O) || $);
    const W = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
    let b = L === j || !f && L.startsWith(j) && L.charAt(W) === "/", le = $ != null && ($ === j || !f && $.startsWith(j) && $.charAt(j.length) === "/"), ae = {
      isActive: b,
      isPending: le,
      isTransitioning: P
    }, Pe = b ? i : void 0, Ve;
    typeof u == "function" ? Ve = u(ae) : Ve = [
      u,
      b ? "active" : null,
      le ? "pending" : null,
      P ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Te = typeof m == "function" ? m(ae) : m;
    return /* @__PURE__ */ E.createElement(
      _d,
      {
        ...x,
        "aria-current": Pe,
        className: Ve,
        ref: N,
        style: Te,
        to: p,
        viewTransition: y
      },
      typeof w == "function" ? w(ae) : w
    );
  }
);
Be.displayName = "NavLink";
var th = E.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: i,
    navigate: s,
    reloadDocument: u,
    replace: f,
    state: m,
    method: p = fa,
    action: y,
    onSubmit: w,
    relative: x,
    preventScrollReset: N,
    viewTransition: T,
    defaultShouldRevalidate: D,
    ...H
  }, U) => {
    let { useTransitions: O } = E.useContext(ft), P = oh(), j = ih(y, { relative: x }), L = p.toLowerCase() === "get" ? "get" : "post", $ = typeof y == "string" && gd.test(y), W = (b) => {
      if (w && w(b), b.defaultPrevented) return;
      b.preventDefault();
      let le = b.nativeEvent.submitter, ae = (le == null ? void 0 : le.getAttribute("formmethod")) || p, Pe = () => P(le || b.currentTarget, {
        fetcherKey: i,
        method: ae,
        navigate: s,
        replace: f,
        state: m,
        relative: x,
        preventScrollReset: N,
        viewTransition: T,
        defaultShouldRevalidate: D
      });
      O && s !== !1 ? E.startTransition(() => Pe()) : Pe();
    };
    return /* @__PURE__ */ E.createElement(
      "form",
      {
        ref: U,
        method: L,
        action: j,
        onSubmit: u ? w : W,
        ...H,
        "data-discover": !$ && l === "render" ? "true" : void 0
      }
    );
  }
);
th.displayName = "Form";
function nh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ed(l) {
  let i = E.useContext(er);
  return Ce(i, nh(l)), i;
}
function rh(l, {
  target: i,
  replace: s,
  mask: u,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: y,
  defaultShouldRevalidate: w,
  useTransitions: x
} = {}) {
  let N = Yr(), T = Et(), D = qr(l, { relative: p });
  return E.useCallback(
    (H) => {
      if (Op(H, i)) {
        H.preventDefault();
        let U = s !== void 0 ? s : Qr(T) === Qr(D), O = () => N(l, {
          replace: U,
          mask: u,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: y,
          defaultShouldRevalidate: w
        });
        x ? E.startTransition(() => O()) : O();
      }
    },
    [
      T,
      N,
      D,
      s,
      u,
      f,
      i,
      l,
      m,
      p,
      y,
      w,
      x
    ]
  );
}
var lh = 0, ah = () => `__${String(++lh)}__`;
function oh() {
  let { router: l } = Ed(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = E.useContext(ft), s = xp(), u = l.fetch, f = l.navigate;
  return E.useCallback(
    async (m, p = {}) => {
      let { action: y, method: w, encType: x, formData: N, body: T } = Ap(
        m,
        i
      );
      if (p.navigate === !1) {
        let D = p.fetcherKey || ah();
        await u(D, s, p.action || y, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: N,
          body: T,
          formMethod: p.method || w,
          formEncType: p.encType || x,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || y, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: N,
          body: T,
          formMethod: p.method || w,
          formEncType: p.encType || x,
          replace: p.replace,
          state: p.state,
          fromRouteId: s,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [u, f, i, s]
  );
}
function ih(l, { relative: i } = {}) {
  let { basename: s } = E.useContext(ft), u = E.useContext(Ot);
  Ce(u, "useFormAction must be used inside a RouteContext");
  let [f] = u.matches.slice(-1), m = { ...qr(l || ".", { relative: i }) }, p = Et();
  if (l == null) {
    m.search = p.search;
    let y = new URLSearchParams(m.search), w = y.getAll("index");
    if (w.some((N) => N === "")) {
      y.delete("index"), w.filter((T) => T).forEach((T) => y.append("index", T));
      let N = y.toString();
      m.search = N ? `?${N}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Rt([s, m.pathname])), Qr(m);
}
function sh(l, { relative: i } = {}) {
  let s = E.useContext(cd);
  Ce(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = Ed(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = qr(l, { relative: i });
  if (!s.isTransitioning)
    return !1;
  let m = Vt(s.currentLocation.pathname, u) || s.currentLocation.pathname, p = Vt(s.nextLocation.pathname, u) || s.nextLocation.pathname;
  return pa(f.pathname, p) != null || pa(f.pathname, m) != null;
}
const uh = "_tabs_1jzd9_1", ch = "_dropdown_1jzd9_12", dh = "_tab_1jzd9_1", fh = "_active_1jzd9_35", mh = "_menu_1jzd9_40", ph = "_menuItem_1jzd9_65", de = {
  tabs: uh,
  dropdown: ch,
  tab: dh,
  active: fh,
  menu: mh,
  menuItem: ph
}, Gr = () => /* @__PURE__ */ d.createElement("div", { className: de.tabs }, /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/scripts",
    className: ({ isActive: l }) => l ? `${de.tab} ${de.active}` : de.tab
  },
  "Скрипты"
), /* @__PURE__ */ d.createElement("div", { className: de.dropdown }, /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/commands/main",
    className: ({ isActive: l }) => l ? `${de.tab} ${de.active}` : de.tab
  },
  "Команды"
), /* @__PURE__ */ d.createElement("div", { className: de.menu }, /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/commands/main",
    className: ({ isActive: l }) => l ? `${de.menuItem} ${de.active}` : de.menuItem
  },
  "Основные"
), /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/commands/sub",
    className: ({ isActive: l }) => l ? `${de.menuItem} ${de.active}` : de.menuItem
  },
  "Второстепенные"
), /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/commands/direct/main",
    className: ({ isActive: l }) => l ? `${de.menuItem} ${de.active}` : de.menuItem
  },
  "Прямые"
), /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/commands/settings",
    className: ({ isActive: l }) => l ? `${de.menuItem} ${de.active}` : de.menuItem
  },
  "Настройки"
))), /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/timer",
    className: ({ isActive: l }) => l ? `${de.tab} ${de.active}` : de.tab
  },
  "Таймер"
), /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/alarm",
    className: ({ isActive: l }) => l ? `${de.tab} ${de.active}` : de.tab
  },
  "Будильник"
), /* @__PURE__ */ d.createElement(
  Be,
  {
    to: "/settings",
    className: ({ isActive: l }) => l ? `${de.tab} ${de.active}` : de.tab
  },
  "Настройки"
)), wd = (l = 768) => {
  const [i, s] = E.useState(
    window.innerWidth <= l
  );
  return E.useEffect(() => {
    const u = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(u.matches), u.addEventListener("change", f), () => u.removeEventListener("change", f);
  }, [l]), i;
}, hh = "_nav_10mea_1", Yc = {
  nav: hh
}, kd = () => {
  const l = Et(), i = Yr(), [s, u] = E.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ d.createElement("nav", { className: Yc.nav }, /* @__PURE__ */ d.createElement(Be, { to: "/commands/main" }, "Основные"), /* @__PURE__ */ d.createElement(Be, { to: "/commands/sub" }, "Второстепенные"), /* @__PURE__ */ d.createElement(Be, { to: "/commands/direct/main" }, "Прямые"), /* @__PURE__ */ d.createElement(Be, { to: "/commands/settings" }, "Настройки")) : /* @__PURE__ */ d.createElement("nav", { className: Yc.nav }, /* @__PURE__ */ d.createElement(Be, { to: "/scripts" }, "Скрипты"), /* @__PURE__ */ d.createElement(
    "button",
    {
      onClick: () => {
        u(!0), i("/commands/main");
      }
    },
    "Команды"
  ), /* @__PURE__ */ d.createElement(Be, { to: "/timer" }, "Таймер"), /* @__PURE__ */ d.createElement(Be, { to: "/alarm" }, "Будильник"), /* @__PURE__ */ d.createElement(Be, { to: "/settings" }, "Настройки"));
}, vh = "_button_1u3jy_1", yh = "_full_1u3jy_20", gh = "_primary_1u3jy_24", _h = "_secondary_1u3jy_33", Eh = "_ghost_1u3jy_44", Ci = {
  button: vh,
  full: yh,
  primary: gh,
  secondary: _h,
  ghost: Eh
}, he = ({
  children: l,
  variant: i = "primary",
  fullWidth: s = !1,
  className: u = "",
  ...f
}) => /* @__PURE__ */ d.createElement(
  "button",
  {
    ...f,
    className: `
        ${Ci.button}
        ${Ci[i]}
        ${s ? Ci.full : ""}
        ${u}
      `
  },
  l
), wh = "_overlay_1s0zi_1", kh = "_modal_1s0zi_13", Sh = "_header_1s0zi_25", Ch = "_title_1s0zi_35", xh = "_body_1s0zi_42", Nh = "_footer_1s0zi_49", Th = "_close_1s0zi_59", Cn = {
  overlay: wh,
  modal: kh,
  header: Sh,
  title: Ch,
  body: xh,
  footer: Nh,
  close: Th
}, wa = ({
  open: l,
  onClose: i,
  title: s,
  footer: u,
  children: f
}) => (E.useEffect(() => {
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
}, [l, i]), l ? /* @__PURE__ */ d.createElement(
  "div",
  {
    className: Cn.overlay,
    onClick: i
  },
  /* @__PURE__ */ d.createElement(
    "div",
    {
      className: Cn.modal,
      onClick: (m) => m.stopPropagation()
    },
    /* @__PURE__ */ d.createElement("div", { className: Cn.header }, s && /* @__PURE__ */ d.createElement("h2", { className: Cn.title }, s), /* @__PURE__ */ d.createElement(
      he,
      {
        variant: "ghost",
        className: Cn.close,
        onClick: i
      },
      "✕"
    )),
    /* @__PURE__ */ d.createElement("div", { className: Cn.body }, f),
    u && /* @__PURE__ */ d.createElement("div", { className: Cn.footer }, u)
  )
) : null), Rh = "_pagination_1hg7e_1", Ph = "_button_1hg7e_9", Lh = "_label_1hg7e_33", ca = {
  pagination: Rh,
  button: Ph,
  label: Lh
}, Sd = ({
  page: l,
  totalPages: i,
  onChange: s
}) => i <= 1 ? null : /* @__PURE__ */ d.createElement("div", { className: ca.pagination }, /* @__PURE__ */ d.createElement(
  "button",
  {
    className: ca.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ d.createElement("span", { className: ca.label }, l, " / ", i), /* @__PURE__ */ d.createElement(
  "button",
  {
    className: ca.button,
    disabled: l === i,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), Mh = "_accordion_1wwmk_1", Dh = "_header_1wwmk_7", Ih = "_content_1wwmk_20", da = {
  accordion: Mh,
  header: Dh,
  content: Ih
}, zt = ({
  title: l,
  defaultOpen: i = !1,
  children: s
}) => {
  const [u, f] = E.useState(i);
  return /* @__PURE__ */ d.createElement(
    "div",
    {
      className: da.accordion,
      "data-open": u
    },
    /* @__PURE__ */ d.createElement(
      "button",
      {
        type: "button",
        className: da.header,
        onClick: () => f((m) => !m),
        "aria-expanded": u
      },
      /* @__PURE__ */ d.createElement("span", null, l),
      /* @__PURE__ */ d.createElement("span", { className: da.icon }, u ? "−" : "+")
    ),
    u && /* @__PURE__ */ d.createElement("div", { className: da.content }, s)
  );
}, zh = "_field_fc25i_1", Oh = "_label_fc25i_7", $h = "_input_fc25i_13", Fh = "_error_fc25i_38", Ah = "_errorText_fc25i_46", Hr = {
  field: zh,
  label: Oh,
  input: $h,
  error: Fh,
  errorText: Ah
}, fe = ({
  label: l,
  error: i,
  className: s = "",
  ...u
}) => /* @__PURE__ */ d.createElement("div", { className: Hr.field }, l && /* @__PURE__ */ d.createElement("label", { className: Hr.label }, l), /* @__PURE__ */ d.createElement(
  "input",
  {
    ...u,
    className: `
          ${Hr.input}
          ${i ? Hr.error : ""}
          ${s}
        `
  }
), i && /* @__PURE__ */ d.createElement("span", { className: Hr.errorText }, i)), jh = ({
  condition: l,
  index: i,
  defaultOpen: s,
  onChange: u
}) => {
  const [f, m] = E.useState(
    !!l.children_type
  ), [p, y] = E.useState(!!l.children_direct_type);
  return /* @__PURE__ */ d.createElement(
    zt,
    {
      title: `Условие ${i + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement(
      fe,
      {
        label: "Parent_type",
        value: l.parent_type,
        onChange: (w) => u({
          ...l,
          parent_type: w.target.value
        })
      }
    )),
    /* @__PURE__ */ d.createElement("div", null, !f && /* @__PURE__ */ d.createElement(he, { onClick: () => m(!0) }, "Добавить children_type"), f && /* @__PURE__ */ d.createElement(
      fe,
      {
        label: "children_type",
        value: l.children_type || "",
        onChange: (w) => u({
          ...l,
          children_type: w.target.value
        })
      }
    )),
    /* @__PURE__ */ d.createElement("div", null, !p && /* @__PURE__ */ d.createElement(he, { onClick: () => y(!0) }, "Добавить children_direct_type"), p && /* @__PURE__ */ d.createElement(
      fe,
      {
        label: "children_direct_type",
        value: l.children_direct_type || "",
        onChange: (w) => u({
          ...l,
          children_direct_type: w.target.value
        })
      }
    ))
  );
}, Uh = "_dropdown_4l5n9_1", Bh = "_button_4l5n9_6", Hh = "_arrow_4l5n9_28", Wh = "_menu_4l5n9_32", Vh = "_active_4l5n9_51", Qh = "_item_4l5n9_58", xn = {
  dropdown: Uh,
  button: Bh,
  arrow: Hh,
  menu: Wh,
  active: Vh,
  item: Qh
};
function Kh({
  options: l,
  value: i,
  placeholder: s = "Выберите",
  onSelect: u
}) {
  const [f, m] = E.useState(!1), p = E.useRef(null), y = l.find(
    (N) => N.value === i
  ), w = () => {
    m((N) => !N);
  }, x = (N) => {
    u == null || u(N.value), m(!1);
  };
  return E.useEffect(() => {
    const N = (T) => {
      p.current && !p.current.contains(
        T.target
      ) && m(!1);
    };
    return document.addEventListener(
      "mousedown",
      N
    ), () => {
      document.removeEventListener(
        "mousedown",
        N
      );
    };
  }, []), /* @__PURE__ */ d.createElement(
    "div",
    {
      className: `${xn.dropdown} ${f ? xn.active : ""}`,
      ref: p
    },
    /* @__PURE__ */ d.createElement(
      "button",
      {
        className: xn.button,
        onClick: w,
        type: "button"
      },
      /* @__PURE__ */ d.createElement("span", null, (y == null ? void 0 : y.label) || s),
      /* @__PURE__ */ d.createElement("span", { className: xn.arrow }, "▼")
    ),
    /* @__PURE__ */ d.createElement("div", { className: xn.menu }, l.map((N) => /* @__PURE__ */ d.createElement(
      "div",
      {
        key: N.value,
        className: `${xn.item} ${i === N.value ? xn.selected : ""}`,
        onClick: () => x(N)
      },
      N.label
    )))
  );
}
const Yh = "_form_1fyva_1", qc = {
  form: Yh
}, qh = ({
  initialData: l,
  isOptionData: i,
  isEdit: s,
  onChange: u
}) => {
  const [f, m] = E.useState({
    uuid: (l == null ? void 0 : l.uuid) || "",
    name: (l == null ? void 0 : l.name) || "",
    script_entity_id: (l == null ? void 0 : l.script_entity_id) || "",
    conditions: (l == null ? void 0 : l.conditions) || [
      {
        parent_type: ""
      }
    ]
  }), p = (x) => {
    m(x), u == null || u(x);
  }, y = () => {
    p({
      ...f,
      conditions: [
        ...f.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, w = (x, N) => {
    const T = [...f.conditions];
    T[x] = N, p({
      ...f,
      conditions: T
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: qc.form }, /* @__PURE__ */ d.createElement(
    fe,
    {
      label: "Название",
      value: f.name,
      onChange: (x) => p({
        ...f,
        name: x.target.value
      })
    }
  ), /* @__PURE__ */ d.createElement(
    Kh,
    {
      options: i.map((x) => ({
        label: x.name,
        value: x.entity_id
      })),
      value: f.script_entity_id,
      onSelect: (x) => p({
        ...f,
        script_entity_id: x
      })
    }
  ), f.conditions.map(
    (x, N) => /* @__PURE__ */ d.createElement(
      jh,
      {
        key: N,
        index: N,
        condition: x,
        defaultOpen: !s,
        onChange: (T) => w(N, T)
      }
    )
  ), /* @__PURE__ */ d.createElement(
    he,
    {
      type: "button",
      className: qc.addCondition,
      onClick: y
    },
    "+ Добавить условие"
  ));
}, Gh = "_card_b4x7a_1", Xh = "_content_b4x7a_28", Jh = "_title_b4x7a_34", bh = "_subtitle_b4x7a_40", Zh = "_arrow_b4x7a_45", Wr = {
  card: Gh,
  content: Xh,
  title: Jh,
  subtitle: bh,
  arrow: Zh
}, ev = ({
  title: l,
  onClick: i
}) => /* @__PURE__ */ d.createElement(
  "button",
  {
    type: "button",
    className: Wr.card,
    onClick: i
  },
  /* @__PURE__ */ d.createElement("div", { className: Wr.content }, /* @__PURE__ */ d.createElement("div", { className: Wr.title }, l), /* @__PURE__ */ d.createElement("div", { className: Wr.subtitle }, "Нажмите для редактирования")),
  /* @__PURE__ */ d.createElement("div", { className: Wr.arrow }, "→")
), tv = "_page_1imxi_1", nv = "_header_1imxi_10", rv = "_title_1imxi_23", lv = "_description_1imxi_32", av = "_heading_1imxi_72", ov = "_actions_1imxi_77", iv = "_list_1imxi_82", Nn = {
  page: tv,
  header: nv,
  title: rv,
  description: lv,
  heading: av,
  actions: ov,
  list: iv
}, Cd = E.createContext(null);
function ka() {
  const l = E.useContext(Cd);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const sv = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function uv() {
  const l = ka(), [i, s] = E.useState(!0), [u, f] = E.useState(null), m = E.useRef(!1), p = E.useCallback(async (D = 1) => {
    s(!0);
    try {
      const H = await l._getShort(
        "get_script_actions_short",
        D
      );
      f(sv(H));
    } finally {
      s(!1);
    }
  }, [l]);
  return E.useEffect(() => {
    m.current || (m.current = !0, p());
  }, [p]), {
    loading: i,
    scripts: u,
    loadScripts: p,
    scriptData: () => l.getScripts(),
    saveScript: async (D) => {
      await l._save(D, "save_script_action"), await p((u == null ? void 0 : u.page) ?? 1);
    },
    updateScript: async (D, H) => {
      await l._update(D, "update_script_action", H), await p((u == null ? void 0 : u.page) ?? 1);
    },
    getScriptAction: async (D) => (await l._getDetail(
      D,
      "get_script_action"
    )).data,
    deleteScriptAction: async (D) => {
      await l._delete(D, "delete_script_action"), await p((u == null ? void 0 : u.page) ?? 1);
    }
  };
}
const cv = () => {
  const l = wd(), [i, s] = E.useState(), [u, f] = E.useState(), [m, p] = E.useState(!1), [y, w] = E.useState(!1), {
    loading: x,
    scripts: N,
    scriptData: T,
    loadScripts: D,
    saveScript: H,
    updateScript: U,
    getScriptAction: O,
    deleteScriptAction: P
  } = uv(), j = () => {
    f(void 0), w(!1), p(!0);
  }, L = async (W) => {
    w(!0);
    const b = await O(
      W.uuid
    );
    f(b), p(!0);
  }, $ = async () => {
    if (y) {
      const W = i == null ? void 0 : i.uuid;
      if (!W) return;
      const { uuid: b, ...le } = i;
      await U(W, le);
    } else
      await H(i);
    p(!1);
  };
  return /* @__PURE__ */ d.createElement("div", { className: Nn.page }, l ? /* @__PURE__ */ d.createElement(kd, null) : /* @__PURE__ */ d.createElement(Gr, null), /* @__PURE__ */ d.createElement("div", { className: Nn.header }, /* @__PURE__ */ d.createElement("div", { className: Nn.heading }, /* @__PURE__ */ d.createElement("h1", { className: Nn.title }, "Создание запускающих скриптов"), /* @__PURE__ */ d.createElement("p", { className: Nn.description }, "Создавайте и редактируйте автоматизации и условия")), /* @__PURE__ */ d.createElement("div", { className: Nn.actions }, /* @__PURE__ */ d.createElement(
    he,
    {
      variant: "primary",
      onClick: j
    },
    "Добавить сценарий"
  ))), x && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: Nn.list }, N == null ? void 0 : N.script_actions.map((W) => /* @__PURE__ */ d.createElement(
    ev,
    {
      key: W.uuid,
      title: W.title,
      onClick: () => L(W)
    }
  ))), /* @__PURE__ */ d.createElement(
    Sd,
    {
      page: (N == null ? void 0 : N.page) || 1,
      totalPages: (N == null ? void 0 : N.total_pages) || 1,
      onChange: D
    }
  ), /* @__PURE__ */ d.createElement(
    wa,
    {
      open: m,
      onClose: () => p(!1),
      title: y ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ d.createElement(d.Fragment, null, y && /* @__PURE__ */ d.createElement(
        he,
        {
          variant: "ghost",
          onClick: async () => {
            u != null && u.uuid && (await P(
              u.uuid
            ), p(!1));
          }
        },
        "Удалить"
      ), /* @__PURE__ */ d.createElement(
        he,
        {
          onClick: $
        },
        "Сохранить"
      ))
    },
    /* @__PURE__ */ d.createElement(
      qh,
      {
        initialData: u,
        isEdit: y,
        isOptionData: T(),
        onChange: s
      }
    )
  ));
}, dv = "_header_1ricu_1", fv = "_backButton_1ricu_13", Gc = {
  header: dv,
  backButton: fv
}, mv = () => {
  const l = Yr();
  if (!Et().pathname.startsWith("/commands")) return null;
  const u = () => {
    var f;
    ((f = window.history.state) == null ? void 0 : f.idx) > 0 ? l(-1) : l("/scripts");
  };
  return /* @__PURE__ */ d.createElement("header", { className: Gc.header }, /* @__PURE__ */ d.createElement(
    "button",
    {
      className: Gc.backButton,
      onClick: u
    },
    "← Назад"
  ));
}, pv = "_page_174e1_1", hv = "_header_174e1_10", vv = "_headerTop_174e1_16", yv = "_title_174e1_23", gv = "_description_174e1_32", _v = "_state_174e1_98", Ev = "_commandList_174e1_102", wv = "_commandTab_174e1_107", kv = "_commandButton_174e1_114", Sv = "_moreButton_174e1_115", Cv = "_form_174e1_153", xv = "_checkboxRow_174e1_159", Nv = "_field_174e1_167", Tv = "_textarea_174e1_176", Rv = "_arrayItem_174e1_189", Pv = "_sheetOverlay_174e1_207", Lv = "_bottomSheet_174e1_217", Mv = "_sheetHandle_174e1_235", Dv = "_innerTabs_174e1_249", Iv = "_innerTab_174e1_249", zv = "_activeInnerTab_174e1_270", ie = {
  page: pv,
  header: hv,
  headerTop: vv,
  title: yv,
  description: gv,
  state: _v,
  commandList: Ev,
  commandTab: wv,
  commandButton: kv,
  moreButton: Sv,
  form: Cv,
  checkboxRow: xv,
  field: Nv,
  textarea: Tv,
  arrayItem: Rv,
  sheetOverlay: Pv,
  bottomSheet: Lv,
  sheetHandle: Mv,
  innerTabs: Dv,
  innerTab: Iv,
  activeInnerTab: zv
}, Ov = [
  { key: "main", label: "Основной" },
  { key: "template", label: "Шаблон" }
], Vr = {
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
}, xd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), xi = (l) => l.kind === "dialog" ? {
  status: !0,
  title: "",
  [l.componentKey ?? "componentDialog"]: {
    ...xd(),
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
}, $v = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
}), Xr = ({ configKey: l }) => {
  const i = wd(), s = ka(), u = Yr(), [f, m] = E.useState(l === "directTemplate" ? "template" : "main"), [p, y] = E.useState(null), [w, x] = E.useState(!1), [N, T] = E.useState(!1), [D, H] = E.useState(!1), [U, O] = E.useState(() => xi(Vr[l])), [P, j] = E.useState(null), L = E.useMemo(() => l === "directMain" || l === "directTemplate" ? f === "main" ? Vr.directMain : Vr.directTemplate : Vr[l], [f, l]), $ = E.useMemo(() => {
    if (L.kind === "dialog")
      return U[L.componentKey ?? "componentDialog"];
  }, [L, U]), W = U.directControl, b = Array.isArray(U.subDirectControl) ? U.subDirectControl : [], le = Array.isArray(W == null ? void 0 : W.subDirectControl) ? W.subDirectControl : [], ae = async (g = 1) => {
    x(!0);
    try {
      const F = await s._getShort(L.shortType, g);
      y($v(F));
    } finally {
      x(!1);
    }
  };
  E.useEffect(() => {
    ae();
  }, [L]);
  const Pe = () => {
    H(!1), O(xi(L)), T(!0);
  }, Ve = async (g) => {
    H(!0);
    const F = await s._getDetail(g.uuid, L.detailType);
    O(F.data), T(!0);
  }, Te = (g) => {
    const F = L.componentKey ?? "componentDialog";
    O((V) => ({
      ...V,
      [F]: {
        ...V[F] ?? xd(),
        ...g
      }
    }));
  }, Oe = (g) => {
    O((F) => ({
      ...F,
      directControl: {
        ...F.directControl ?? xi(Vr.directMain).directControl,
        ...g
      }
    }));
  }, Ze = async () => {
    if (D && U.uuid) {
      const { uuid: g, ...F } = U;
      await s._update(g, L.updateType, F);
    } else
      await s._save(U, L.saveType);
    T(!1), await ae((p == null ? void 0 : p.page) ?? 1);
  }, $e = async (g) => {
    await s._delete(g, L.deleteType), j(null), await ae((p == null ? void 0 : p.page) ?? 1);
  }, Qe = async (g) => {
    await s._update(g.uuid, L.updateType, { status: !0 }), j(null), await ae((p == null ? void 0 : p.page) ?? 1);
  }, ve = (g, F, V) => {
    const re = [...($ == null ? void 0 : $[g]) ?? []];
    re[F] = { ...re[F], ...V }, Te({ [g]: re });
  }, Fe = (g, F) => {
    Te({ [g]: [...($ == null ? void 0 : $[g]) ?? [], F] });
  }, ye = (g, F) => {
    Te({ [g]: (($ == null ? void 0 : $[g]) ?? []).filter((V, re) => re !== F) });
  }, B = (g, F, V) => {
    const re = g === "direct" ? [...le] : [...b];
    re[F] = { ...re[F], ...V }, g === "direct" ? Oe({ subDirectControl: re }) : O((se) => ({ ...se, subDirectControl: re }));
  }, Z = (g) => {
    const F = { subMappingType: "", title: null, subVoiceCommands: "" };
    g === "direct" ? Oe({ subDirectControl: [...le, F] }) : O((V) => ({ ...V, subDirectControl: [...b, F] }));
  }, K = (g, F) => {
    const V = (g === "direct" ? le : b).filter((re, se) => se !== F);
    g === "direct" ? Oe({ subDirectControl: V }) : O((re) => ({ ...re, subDirectControl: V }));
  }, k = `${D ? "Редактировать" : "Создать"}: ${L.label}`;
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(mv, null), /* @__PURE__ */ d.createElement("div", { className: ie.page }, i ? /* @__PURE__ */ d.createElement(d.Fragment, null) : /* @__PURE__ */ d.createElement(Gr, null), /* @__PURE__ */ d.createElement("div", { className: ie.header }, /* @__PURE__ */ d.createElement("div", { className: ie.headerTop }, /* @__PURE__ */ d.createElement("div", { className: ie.heading }, /* @__PURE__ */ d.createElement("h1", { className: ie.title }, L.label), /* @__PURE__ */ d.createElement("p", { className: ie.description }, "Создавайте и редактируйте голосовые команды ассистента.")), /* @__PURE__ */ d.createElement(he, { onClick: Pe }, "Создать команду")), (l === "directMain" || l === "directTemplate") && /* @__PURE__ */ d.createElement("div", { className: ie.innerTabs }, Ov.map((g) => /* @__PURE__ */ d.createElement(
    "button",
    {
      key: g.key,
      type: "button",
      className: `${ie.innerTab} ${f === g.key ? ie.activeInnerTab : ""}`,
      onClick: () => {
        m(g.key), u(`/commands/direct/${g.key === "main" ? "main" : "template"}`);
      }
    },
    g.label
  )))), w && /* @__PURE__ */ d.createElement("div", { className: ie.state }, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: ie.commandList }, p == null ? void 0 : p.data.map((g) => /* @__PURE__ */ d.createElement("div", { key: g.uuid, className: ie.commandTab }, /* @__PURE__ */ d.createElement("button", { type: "button", className: ie.commandButton, onClick: () => Ve(g) }, /* @__PURE__ */ d.createElement("span", null, g.title), L.hasStatus && /* @__PURE__ */ d.createElement("small", null, g.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ d.createElement(
    "button",
    {
      type: "button",
      className: ie.moreButton,
      "aria-label": `Действия команды ${g.title}`,
      onClick: () => j(g)
    },
    "⋯"
  )))), /* @__PURE__ */ d.createElement(
    Sd,
    {
      page: (p == null ? void 0 : p.page) || 1,
      totalPages: (p == null ? void 0 : p.total_pages) || 1,
      onChange: ae
    }
  ), /* @__PURE__ */ d.createElement(
    wa,
    {
      open: N,
      onClose: () => T(!1),
      title: k,
      footer: /* @__PURE__ */ d.createElement(he, { onClick: Ze }, "Сохранить")
    },
    /* @__PURE__ */ d.createElement("div", { className: ie.form }, L.hasStatus && /* @__PURE__ */ d.createElement("label", { className: ie.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: U.status ?? !0, onChange: (g) => O({ ...U, status: g.target.checked }) }), "Команда включена"), /* @__PURE__ */ d.createElement(fe, { label: "Название команды", value: U.title, onChange: (g) => O({ ...U, title: g.target.value }) }), L.kind === "dialog" && $ && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("label", { className: ie.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: $.endStatus, onChange: (g) => Te({ endStatus: g.target.checked }) }), "Завершать диалог"), L.hasForwardText && /* @__PURE__ */ d.createElement("label", { className: ie.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!$.forwardText, onChange: (g) => Te({ forwardText: g.target.checked }) }), "forwardText"), /* @__PURE__ */ d.createElement(fe, { label: "actionType", value: $.actionType ?? "", onChange: (g) => Te({ actionType: g.target.value }) }), /* @__PURE__ */ d.createElement(fe, { label: "answerType", value: $.answerType ?? "", onChange: (g) => Te({ answerType: g.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ie.field }, /* @__PURE__ */ d.createElement("label", null, "voiceCommands"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ie.textarea,
        value: ($.voiceCommands ?? []).join(`
`),
        onChange: (g) => Te({ voiceCommands: g.target.value.split(`
`) }),
        rows: 6
      }
    )), /* @__PURE__ */ d.createElement(zt, { title: "nextDirectControl", defaultOpen: !0 }, ($.nextDirectControl ?? []).map((g, F) => /* @__PURE__ */ d.createElement("div", { key: F, className: ie.arrayItem }, /* @__PURE__ */ d.createElement(fe, { label: "uuid", value: g.uuid ?? "", onChange: (V) => ve("nextDirectControl", F, { uuid: V.target.value }) }), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "ghost", onClick: () => ye("nextDirectControl", F) }, "Удалить"))), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "secondary", onClick: () => Fe("nextDirectControl", { uuid: "" }) }, "Добавить ещё")), /* @__PURE__ */ d.createElement(zt, { title: "voiceResponseArray", defaultOpen: !0 }, ($.voiceResponseArray ?? []).map((g, F) => /* @__PURE__ */ d.createElement("div", { key: F, className: ie.arrayItem }, /* @__PURE__ */ d.createElement(fe, { label: "actionType", value: g.actionType ?? "", onChange: (V) => ve("voiceResponseArray", F, { actionType: V.target.value }) }), /* @__PURE__ */ d.createElement(fe, { label: "voiceResponse", value: g.voiceResponse ?? "", onChange: (V) => ve("voiceResponseArray", F, { voiceResponse: V.target.value }) }), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "ghost", onClick: () => ye("voiceResponseArray", F) }, "Удалить"))), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "secondary", onClick: () => Fe("voiceResponseArray", { actionType: "", voiceResponse: "" }) }, "Добавить ещё")), /* @__PURE__ */ d.createElement(zt, { title: "nextAction", defaultOpen: !0 }, ($.nextAction ?? []).map((g, F) => /* @__PURE__ */ d.createElement("div", { key: F, className: ie.arrayItem }, /* @__PURE__ */ d.createElement(fe, { label: "actionTypeComponent", value: g.actionTypeComponent ?? "", onChange: (V) => ve("nextAction", F, { actionTypeComponent: V.target.value }) }), /* @__PURE__ */ d.createElement(fe, { label: "actionType", value: g.actionType ?? "", onChange: (V) => ve("nextAction", F, { actionType: V.target.value }) }), /* @__PURE__ */ d.createElement(fe, { label: "uuid", value: g.uuid ?? "", onChange: (V) => ve("nextAction", F, { uuid: V.target.value }) }), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "ghost", onClick: () => ye("nextAction", F) }, "Удалить"))), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "secondary", onClick: () => Fe("nextAction", { actionTypeComponent: "", actionType: "", uuid: "" }) }, "Добавить ещё"))), L.kind === "direct" && W && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(fe, { label: "directControl.mappingType", value: W.mappingType ?? "", onChange: (g) => Oe({ mappingType: g.target.value }) }), /* @__PURE__ */ d.createElement(fe, { label: "directControl.valueType", value: W.valueType ?? "", onChange: (g) => Oe({ valueType: g.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ie.field }, /* @__PURE__ */ d.createElement("label", null, "voiceCommands"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ie.textarea,
        value: Array.isArray(W.voiceCommands) ? W.voiceCommands.join(`
`) : "",
        onChange: (g) => Oe({ voiceCommands: g.target.value.split(`
`).filter(Boolean) }),
        rows: 5
      }
    )), /* @__PURE__ */ d.createElement("label", { className: ie.checkboxRow }, /* @__PURE__ */ d.createElement(
      "input",
      {
        type: "checkbox",
        checked: !!W.manual,
        onChange: (g) => Oe({ manual: g.target.checked, subDirectControl: g.target.checked ? [] : "" })
      }
    ), "manual"), W.manual ? /* @__PURE__ */ d.createElement(zt, { title: "directControl.subDirectControl", defaultOpen: !0 }, le.map((g, F) => /* @__PURE__ */ d.createElement("div", { key: F, className: ie.arrayItem }, /* @__PURE__ */ d.createElement(fe, { label: "subMappingType", value: g.subMappingType ?? "", onChange: (V) => B("direct", F, { subMappingType: V.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ie.field }, /* @__PURE__ */ d.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ d.createElement("textarea", { className: ie.textarea, value: g.subVoiceCommands ?? "", onChange: (V) => B("direct", F, { subVoiceCommands: V.target.value }), rows: 3 })), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "ghost", onClick: () => K("direct", F) }, "Удалить"))), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "secondary", onClick: () => Z("direct") }, "Добавить ещё")) : /* @__PURE__ */ d.createElement(fe, { label: "directControl.subDirectControl", value: typeof W.subDirectControl == "string" ? W.subDirectControl : "", onChange: (g) => Oe({ subDirectControl: g.target.value }) })), L.kind === "assistantSettings" && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(fe, { label: "actionType", value: U.actionType ?? "", onChange: (g) => O({ ...U, actionType: g.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ie.field }, /* @__PURE__ */ d.createElement("label", null, "message"), /* @__PURE__ */ d.createElement(
      "textarea",
      {
        className: ie.textarea,
        value: U.message ?? "",
        onChange: (g) => O({ ...U, message: g.target.value || null }),
        rows: 4
      }
    )), /* @__PURE__ */ d.createElement("label", { className: ie.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!U.endStatus, onChange: (g) => O({ ...U, endStatus: g.target.checked }) }), "endStatus")), L.kind === "template" && /* @__PURE__ */ d.createElement(zt, { title: "subDirectControl", defaultOpen: !0 }, b.map((g, F) => /* @__PURE__ */ d.createElement("div", { key: F, className: ie.arrayItem }, /* @__PURE__ */ d.createElement(fe, { label: "subMappingType", value: g.subMappingType ?? "", onChange: (V) => B("template", F, { subMappingType: V.target.value }) }), /* @__PURE__ */ d.createElement("div", { className: ie.field }, /* @__PURE__ */ d.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ d.createElement("textarea", { className: ie.textarea, value: g.subVoiceCommands ?? "", onChange: (V) => B("template", F, { subVoiceCommands: V.target.value }), rows: 3 })), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "ghost", onClick: () => K("template", F) }, "Удалить"))), /* @__PURE__ */ d.createElement(he, { type: "button", variant: "secondary", onClick: () => Z("template") }, "Добавить ещё")))
  ), P && /* @__PURE__ */ d.createElement("div", { className: ie.sheetOverlay, onClick: () => j(null) }, /* @__PURE__ */ d.createElement("div", { className: ie.bottomSheet, onClick: (g) => g.stopPropagation() }, /* @__PURE__ */ d.createElement("div", { className: ie.sheetHandle }), /* @__PURE__ */ d.createElement("h3", null, P.title), L.hasStatus && P.status === !1 && /* @__PURE__ */ d.createElement(he, { fullWidth: !0, onClick: () => Qe(P) }, "Включить"), /* @__PURE__ */ d.createElement(he, { fullWidth: !0, variant: "ghost", onClick: () => $e(P.uuid) }, "Удалить")))), /* @__PURE__ */ d.createElement(kd, null));
}, Fv = () => /* @__PURE__ */ d.createElement(Xr, { configKey: "primary" }), Av = () => /* @__PURE__ */ d.createElement(Xr, { configKey: "secondary" }), jv = () => /* @__PURE__ */ d.createElement(Xr, { configKey: "directMain" }), Uv = () => /* @__PURE__ */ d.createElement(Xr, { configKey: "directTemplate" }), Bv = () => /* @__PURE__ */ d.createElement(Xr, { configKey: "settings" }), Hv = "_form_1bj0d_1", Wv = "_field_1bj0d_7", Vv = "_input_1bj0d_13", Qv = "_label_1bj0d_32", Kv = "_checkboxRow_1bj0d_38", Xe = {
  form: Hv,
  field: Wv,
  input: Vv,
  label: Qv,
  checkboxRow: Kv
}, Yv = ({ data: l, onChange: i }) => {
  const s = (u, f) => {
    i({
      ...l,
      [u]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: Xe.form }, /* @__PURE__ */ d.createElement(fe, { label: "API Key", value: l.api_key ?? "", onChange: (u) => s("api_key", u.target.value) }), /* @__PURE__ */ d.createElement(fe, { label: "Folder ID", value: l.folderId ?? "", onChange: (u) => s("folderId", u.target.value) }), /* @__PURE__ */ d.createElement(fe, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (u) => s("language", u.target.value) }), /* @__PURE__ */ d.createElement(fe, { label: "Voice", value: l.voice ?? "", onChange: (u) => s("voice", u.target.value) }), /* @__PURE__ */ d.createElement("label", { className: Xe.field }, /* @__PURE__ */ d.createElement("span", { className: Xe.label }, "Codec"), /* @__PURE__ */ d.createElement("select", { className: Xe.input, value: l.codec ?? "", onChange: (u) => s("codec", u.target.value || void 0) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ d.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ d.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ d.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ d.createElement("label", { className: Xe.field }, /* @__PURE__ */ d.createElement("span", { className: Xe.label }, "Emotion"), /* @__PURE__ */ d.createElement("select", { className: Xe.input, value: l.emotion ?? "", onChange: (u) => s("emotion", u.target.value || void 0) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ d.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ d.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ d.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ d.createElement(fe, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (u) => s("speed", u.target.value === "" ? void 0 : Number(u.target.value)) }));
}, qv = ({ data: l, onChange: i }) => {
  const s = (u, f) => {
    i({
      ...l,
      [u]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: Xe.form }, /* @__PURE__ */ d.createElement(fe, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (u) => s("base_url", u.target.value) }), /* @__PURE__ */ d.createElement(fe, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (u) => s("token", u.target.value) }));
}, Gv = ({ data: l, onChange: i }) => {
  const s = (u, f) => {
    i({
      ...l,
      [u]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: Xe.form }, /* @__PURE__ */ d.createElement(fe, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (u) => s("global_music_timer", u.target.value) }), /* @__PURE__ */ d.createElement(fe, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (u) => s("global_music_alarm", u.target.value) }));
}, Xv = ({ data: l, onChange: i }) => {
  const s = (u, f) => {
    i({
      ...l,
      [u]: f
    });
  };
  return /* @__PURE__ */ d.createElement("div", { className: Xe.form }, /* @__PURE__ */ d.createElement(
    fe,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (u) => s("client_id", u.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ d.createElement("label", { className: Xe.field }, /* @__PURE__ */ d.createElement("span", { className: Xe.label }, "Theme"), /* @__PURE__ */ d.createElement("select", { className: Xe.input, value: l.theme ?? "dark", onChange: (u) => s("theme", u.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ d.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ d.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.is_admin, onChange: (u) => s("is_admin", u.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Is admin")), /* @__PURE__ */ d.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.active_remout, onChange: (u) => s("active_remout", u.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Active remout")), /* @__PURE__ */ d.createElement("label", { className: Xe.checkboxRow }, /* @__PURE__ */ d.createElement("input", { type: "checkbox", checked: !!l.api_commands_enabled, onChange: (u) => s("api_commands_enabled", u.target.checked) }), /* @__PURE__ */ d.createElement("span", null, "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)")), l.api_commands_enabled && /* @__PURE__ */ d.createElement(
    fe,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (u) => s("api_commands_token", u.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, Jv = "_page_tlhec_1", bv = {
  page: Jv
};
function Zv() {
  const l = ka(), [i, s] = E.useState(!0), [u, f] = E.useState(null), m = E.useCallback(async () => {
    s(!0);
    try {
      const y = await l._getShort("get_settings");
      console.log(y), f((y == null ? void 0 : y.result) ?? y);
    } finally {
      s(!1);
    }
  }, [l]);
  return E.useEffect(() => {
    m();
  }, []), {
    loading: i,
    settings: u,
    saveSettings: async (y) => {
      await l._save(y, "save_settings");
    },
    loadScripts: m
  };
}
const ey = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, va = {
  base_url: "",
  token: ""
}, ty = {
  global_music_timer: "",
  global_music_alarm: ""
}, Xc = {
  yandex_tts: ey,
  remout: va,
  timer_alarm: ty,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, ny = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), ry = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), ly = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), ay = (l) => ({
  yandex_tts: ny(l == null ? void 0 : l.yandex_tts),
  remout: ry(l == null ? void 0 : l.remout),
  timer_alarm: ly(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Ni = (l, i) => {
  const s = {};
  return Object.keys(l).forEach((u) => {
    const f = u;
    l[f] !== i[f] && (s[f] = l[f]);
  }), s;
}, oy = (l, i) => {
  const s = {}, u = Ni(l.yandex_tts, i.yandex_tts), f = Ni(l.timer_alarm, i.timer_alarm);
  if (Object.keys(u).length > 0 && (s.yandex_tts = u), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== i.theme && (s.theme = l.theme), l.is_admin !== i.is_admin && (s.is_admin = l.is_admin), l.active_remout !== i.active_remout && (s.active_remout = l.active_remout), l.client_id !== i.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== i.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== i.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Ni(l.remout ?? va, i.remout ?? va);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, iy = () => {
  const [l, i] = E.useState(Xc), [s, u] = E.useState(Xc), { settings: f, saveSettings: m } = Zv();
  E.useEffect(() => {
    if (!f) return;
    const y = ay(f);
    i(y), u(y);
  }, [f]);
  const p = () => {
    const y = oy(l, s);
    m(y);
  };
  return /* @__PURE__ */ d.createElement("div", { className: bv.page }, /* @__PURE__ */ d.createElement(Gr, null), /* @__PURE__ */ d.createElement("h1", null, "Настройки"), /* @__PURE__ */ d.createElement(zt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ d.createElement(
    Xv,
    {
      data: {
        active_remout: l.active_remout,
        is_admin: l.is_admin,
        theme: l.theme,
        client_id: l.client_id,
        api_commands_enabled: l.api_commands_enabled,
        api_commands_token: l.api_commands_token
      },
      onChange: (y) => i({ ...l, ...y })
    }
  )), /* @__PURE__ */ d.createElement(zt, { title: "Яндекс TTS" }, /* @__PURE__ */ d.createElement(
    Yv,
    {
      data: l.yandex_tts,
      onChange: (y) => i({ ...l, yandex_tts: y })
    }
  )), l.active_remout && /* @__PURE__ */ d.createElement(zt, { title: "Remote" }, /* @__PURE__ */ d.createElement(
    qv,
    {
      data: l.remout ?? va,
      onChange: (y) => i({ ...l, remout: y })
    }
  )), /* @__PURE__ */ d.createElement(zt, { title: "Timer / Alarm" }, /* @__PURE__ */ d.createElement(
    Gv,
    {
      data: l.timer_alarm,
      onChange: (y) => i({ ...l, timer_alarm: y })
    }
  )), /* @__PURE__ */ d.createElement(he, { onClick: p }, "Сохранить"));
}, Tn = (l) => {
  var i;
  return ((i = l == null ? void 0 : l.result) == null ? void 0 : i.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, sy = (l) => {
  const i = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + i * 60 * 1e3).toISOString();
}, Nd = (l) => {
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
    return Nd(l.count_timer || "");
  }
  return 0;
}, uy = (l) => {
  const i = Math.max(1, Number(l) || 1), s = Math.floor(i / 60), u = i % 60;
  return `${String(s).padStart(2, "0")}:${String(u).padStart(2, "0")}:00`;
}, Ti = (l) => {
  const i = Tn(l);
  return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.data) ? i.data : [];
};
function Td() {
  const l = ka(), [i, s] = E.useState([]), [u, f] = E.useState([]), [m, p] = E.useState([]), [y, w] = E.useState(!0), x = E.useMemo(() => l.getDevices(), [l]), N = E.useCallback(async () => {
    const $ = await l._getShort("get_timer_requests_short", 1, 100), W = await Promise.all(
      Ti($).map(async (b) => {
        var ae;
        const le = await l._getDetail(b.uuid, "get_timer_request");
        return ((ae = Tn(le)) == null ? void 0 : ae.data) ?? Tn(le);
      })
    );
    s(W.filter((b) => !!b && b.action_type === "create_timer"));
  }, [l]), T = E.useCallback(async () => {
    const $ = await l._getShort("get_alarm_requests_short", 1, 100), W = await Promise.all(
      Ti($).map(async (b) => {
        var ae;
        const le = await l._getDetail(b.uuid, "get_alarm_request");
        return ((ae = Tn(le)) == null ? void 0 : ae.data) ?? Tn(le);
      })
    );
    f(W.filter((b) => !!b && b.action_type !== "delete_alarm"));
  }, [l]), D = E.useCallback(async () => {
    const $ = await l._getShort("get_alarm_time_widgets_short", 1, 100), W = await Promise.all(
      Ti($).map(async (b) => {
        var ae;
        const le = await l._getDetail(b.uuid, "get_alarm_time_widget");
        return ((ae = Tn(le)) == null ? void 0 : ae.data) ?? Tn(le);
      })
    );
    p(W.filter(Boolean));
  }, [l]), H = E.useCallback(async () => {
    w(!0);
    try {
      await Promise.all([N(), T(), D()]);
    } finally {
      w(!1);
    }
  }, [T, D, N]);
  return E.useEffect(() => {
    H();
  }, []), {
    alarmTimeWidgets: m,
    alarms: u,
    createAlarm: async ($, W, b = 0.3) => {
      await l._save({ name: `Будильник ${W}`, action_type: "create_alarm", device_id: $, status: "on", time: W, volume_start: b }, "save_alarm_request"), await T();
    },
    createTimer: async ($, W) => {
      const b = {
        count_timer: uy(W),
        date_end: sy(W)
      };
      await l._save({ name: `Таймер ${W} мин`, action_type: "create_timer", device_id: $, timer_time: b }, "save_timer_request"), await N();
    },
    deleteAlarm: async ($) => {
      await l._delete($.uuid, "delete_alarm_request"), await T();
    },
    devices: x,
    loading: y,
    stopTimer: async ($) => {
      await l._delete($.uuid, "delete_timer_request"), await N();
    },
    timers: i,
    toTimerSeconds: Nd,
    updateAlarm: async ($, W) => {
      await l._update($.uuid, "update_alarm_request", { ...$, action_type: "edit_alarm", ...W }), await T();
    }
  };
}
const cy = "_page_di7r7_1", dy = "_header_di7r7_11", fy = "_title_di7r7_18", my = "_description_di7r7_25", py = "_grid_di7r7_31", hy = "_card_di7r7_37", vy = "_empty_di7r7_37", yy = "_cardHeader_di7r7_44", gy = "_cardTitle_di7r7_51", _y = "_meta_di7r7_56", Ey = "_time_di7r7_62", wy = "_form_di7r7_69", ky = "_field_di7r7_75", Sy = "_label_di7r7_81", Cy = "_select_di7r7_87", xy = "_input_di7r7_87", Ny = "_quickTabs_di7r7_97", Ty = "_quickTab_di7r7_97", Ry = "_activeQuickTab_di7r7_113", Py = "_row_di7r7_118", J = {
  page: cy,
  header: dy,
  title: fy,
  description: my,
  grid: py,
  card: hy,
  empty: vy,
  cardHeader: yy,
  cardTitle: gy,
  meta: _y,
  time: Ey,
  form: wy,
  field: ky,
  label: Sy,
  select: Cy,
  input: xy,
  quickTabs: Ny,
  quickTab: Ty,
  activeQuickTab: Ry,
  row: Py,
  switch: "_switch_di7r7_124"
}, Ly = [5, 10, 15, 30, 60], My = (l) => {
  const i = Math.max(0, l), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
  return [s, u, f].map((m) => String(m).padStart(2, "0")).join(":");
}, Dy = () => {
  const { createTimer: l, devices: i, loading: s, stopTimer: u, timers: f, toTimerSeconds: m } = Td(), [p, y] = E.useState(!1), [w, x] = E.useState(""), [N, T] = E.useState(5), [D, H] = E.useState({});
  E.useEffect(() => {
    H((P) => Object.fromEntries(f.map((j) => [j.uuid, P[j.uuid] ?? m(j.timer_time)])));
  }, [f, m]), E.useEffect(() => {
    const P = window.setInterval(() => {
      H((j) => Object.fromEntries(Object.entries(j).map(([L, $]) => [L, Math.max(0, $ - 1)])));
    }, 1e3);
    return () => window.clearInterval(P);
  }, []);
  const U = E.useMemo(() => new Map(i.map((P) => [P.id, P.name])), [i]), O = async () => {
    w && (await l(w, N), y(!1));
  };
  return /* @__PURE__ */ d.createElement("div", { className: J.page }, /* @__PURE__ */ d.createElement(Gr, null), /* @__PURE__ */ d.createElement("div", { className: J.header }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h1", { className: J.title }, "Таймер"), /* @__PURE__ */ d.createElement("p", { className: J.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ d.createElement(he, { onClick: () => y(!0) }, "Создать")), s && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: J.grid }, f.length ? f.map((P) => /* @__PURE__ */ d.createElement("div", { className: J.card, key: P.uuid }, /* @__PURE__ */ d.createElement("div", { className: J.cardHeader }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", { className: J.cardTitle }, P.name || "Таймер"), /* @__PURE__ */ d.createElement("div", { className: J.meta }, "Устройство: ", U.get(P.device_id) || P.device_id)), /* @__PURE__ */ d.createElement(he, { variant: "ghost", onClick: () => u(P) }, "Стоп")), /* @__PURE__ */ d.createElement("div", { className: J.time }, My(D[P.uuid] ?? m(P.timer_time))))) : /* @__PURE__ */ d.createElement("div", { className: J.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ d.createElement(wa, { open: p, onClose: () => y(!1), title: "Создать таймер", footer: /* @__PURE__ */ d.createElement(he, { onClick: O, disabled: !w }, "Создать") }, /* @__PURE__ */ d.createElement("div", { className: J.form }, /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Устройство"), /* @__PURE__ */ d.createElement("select", { className: J.select, value: w, onChange: (P) => x(P.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Выберите устройство"), i.map((P) => /* @__PURE__ */ d.createElement("option", { key: P.id, value: P.id }, P.name)))), /* @__PURE__ */ d.createElement("div", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Быстрый старт"), /* @__PURE__ */ d.createElement("div", { className: J.quickTabs }, Ly.map((P) => /* @__PURE__ */ d.createElement("button", { key: P, type: "button", className: `${J.quickTab} ${N === P ? J.activeQuickTab : ""}`, onClick: () => T(P) }, P, " мин")))), /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Свое значение, минут"), /* @__PURE__ */ d.createElement("input", { className: J.input, type: "number", min: "1", value: N, onChange: (P) => T(Number(P.target.value) || 1) })))));
}, Iy = () => {
  const { alarmTimeWidgets: l, alarms: i, createAlarm: s, deleteAlarm: u, devices: f, loading: m, updateAlarm: p } = Td(), [y, w] = E.useState(!1), [x, N] = E.useState(""), [T, D] = E.useState("08:00"), [H, U] = E.useState(0.3), O = E.useMemo(() => {
    const L = l.flatMap(($) => $.time || []);
    return Array.from(new Set(L)).filter(Boolean);
  }, [l]), P = E.useMemo(() => new Map(f.map((L) => [L.id, L.name])), [f]), j = async () => {
    !x || !T || (await s(x, T, H), w(!1));
  };
  return /* @__PURE__ */ d.createElement("div", { className: J.page }, /* @__PURE__ */ d.createElement(Gr, null), /* @__PURE__ */ d.createElement("div", { className: J.header }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h1", { className: J.title }, "Будильник"), /* @__PURE__ */ d.createElement("p", { className: J.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ d.createElement(he, { onClick: () => w(!0) }, "Создать")), m && /* @__PURE__ */ d.createElement("div", null, "Загрузка..."), /* @__PURE__ */ d.createElement("div", { className: J.grid }, i.length ? i.map((L) => /* @__PURE__ */ d.createElement("div", { className: J.card, key: L.uuid }, /* @__PURE__ */ d.createElement("div", { className: J.cardHeader }, /* @__PURE__ */ d.createElement("div", null, /* @__PURE__ */ d.createElement("h2", { className: J.cardTitle }, L.name || "Будильник"), /* @__PURE__ */ d.createElement("div", { className: J.meta }, "Устройство: ", P.get(L.device_id) || L.device_id)), /* @__PURE__ */ d.createElement(he, { variant: "ghost", onClick: () => u(L) }, "Удалить")), /* @__PURE__ */ d.createElement("label", { className: `${J.row} ${J.meta}` }, /* @__PURE__ */ d.createElement("input", { className: J.switch, type: "checkbox", checked: L.status !== "off", onChange: ($) => p(L, { status: $.target.checked ? "on" : "off" }) }), L.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Время"), /* @__PURE__ */ d.createElement("input", { className: J.input, type: "time", value: L.time, onChange: ($) => p(L, { time: $.target.value }) })), /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Стартовая громкость"), /* @__PURE__ */ d.createElement(
    "input",
    {
      className: J.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: L.volume_start ?? 0.3,
      onChange: ($) => p(L, { volume_start: Number($.target.value) })
    }
  )))) : /* @__PURE__ */ d.createElement("div", { className: J.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ d.createElement(wa, { open: y, onClose: () => w(!1), title: "Создать будильник", footer: /* @__PURE__ */ d.createElement(he, { onClick: j, disabled: !x || !T }, "Создать") }, /* @__PURE__ */ d.createElement("div", { className: J.form }, /* @__PURE__ */ d.createElement("div", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Быстрый старт"), /* @__PURE__ */ d.createElement("div", { className: J.quickTabs }, O.length ? O.map((L) => /* @__PURE__ */ d.createElement("button", { key: L, type: "button", className: `${J.quickTab} ${T === L ? J.activeQuickTab : ""}`, onClick: () => D(L) }, L)) : /* @__PURE__ */ d.createElement("span", { className: J.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Устройство"), /* @__PURE__ */ d.createElement("select", { className: J.select, value: x, onChange: (L) => N(L.target.value) }, /* @__PURE__ */ d.createElement("option", { value: "" }, "Выберите устройство"), f.map((L) => /* @__PURE__ */ d.createElement("option", { key: L.id, value: L.id }, L.name)))), /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Время"), /* @__PURE__ */ d.createElement("input", { className: J.input, type: "time", value: T, onChange: (L) => D(L.target.value) })), /* @__PURE__ */ d.createElement("label", { className: J.field }, /* @__PURE__ */ d.createElement("span", { className: J.label }, "Стартовая громкость"), /* @__PURE__ */ d.createElement(
    "input",
    {
      className: J.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: H,
      onChange: (L) => U(Number(L.target.value))
    }
  )))));
}, zy = () => /* @__PURE__ */ d.createElement(Lp, null, /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/",
    element: /* @__PURE__ */ d.createElement(
      sa,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/scripts",
    element: /* @__PURE__ */ d.createElement(cv, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands",
    element: /* @__PURE__ */ d.createElement(
      sa,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ d.createElement(Fv, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ d.createElement(Av, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ d.createElement(
      sa,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ d.createElement(jv, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ d.createElement(Uv, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ d.createElement(Bv, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/timer",
    element: /* @__PURE__ */ d.createElement(Dy, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/alarm",
    element: /* @__PURE__ */ d.createElement(Iy, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "/settings",
    element: /* @__PURE__ */ d.createElement(iy, null)
  }
), /* @__PURE__ */ d.createElement(
  ot,
  {
    path: "*",
    element: /* @__PURE__ */ d.createElement(
      sa,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), Oy = () => /* @__PURE__ */ d.createElement(zy, null);
class $y {
  constructor(i) {
    this.hass = i;
  }
  async _getShort(i, s, u) {
    const f = await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      ...s ? { page: s } : {},
      ...u ? { page_size: u } : {}
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
  async _update(i, s, u) {
    return console.log(u), this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${s}`,
      uuid: i,
      data: u
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
const Fy = 1, ya = 2, Ri = 3, Ay = 4, jy = 5;
function Uy(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function By() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function Hy(l) {
  const i = {
    type: "subscribe_events"
  };
  return l && (i.event_type = l), i;
}
function Jc(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function Wy() {
  return {
    type: "ping"
  };
}
function Vy(l, i) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: i
    }
  };
}
const Qy = (l, i, s, u) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > i || Number(f) === i && Number(m) >= s || u !== void 0;
}, Ky = "auth_invalid", Yy = "auth_ok";
function qy(l) {
  if (!l.auth)
    throw Ay;
  const i = l.auth;
  let s = i.expired ? i.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const u = i.wsUrl;
  function f(m, p, y) {
    const w = new WebSocket(u);
    let x = !1;
    const N = () => {
      if (w.removeEventListener("close", N), x) {
        y(ya);
        return;
      }
      if (m === 0) {
        y(Fy);
        return;
      }
      const H = m === -1 ? -1 : m - 1;
      setTimeout(() => f(H, p, y), 1e3);
    }, T = async (H) => {
      try {
        i.expired && await (s || i.refreshAccessToken()), w.send(JSON.stringify(Uy(i.accessToken)));
      } catch (U) {
        x = U === ya, w.close();
      }
    }, D = async (H) => {
      const U = JSON.parse(H.data);
      switch (U.type) {
        case Ky:
          x = !0, w.close();
          break;
        case Yy:
          w.removeEventListener("open", T), w.removeEventListener("message", D), w.removeEventListener("close", N), w.removeEventListener("error", N), w.haVersion = U.ha_version, Qy(w.haVersion, 2022, 9) && w.send(JSON.stringify(By())), p(w);
          break;
      }
    };
    w.addEventListener("open", T), w.addEventListener("message", D), w.addEventListener("close", N), w.addEventListener("error", N);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class Gy {
  constructor(i, s) {
    this._handleMessage = (u) => {
      let f = JSON.parse(u.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Jc(m.id)).catch((y) => {
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
      const u = this.commands;
      if (this.commandId = 1, this.oldSubscriptions = this.commands, this.commands = /* @__PURE__ */ new Map(), this.socket = void 0, u.forEach((p) => {
        "subscribe" in p || p.reject(Vy(Ri, "Connection lost"));
      }), this.closeRequested)
        return;
      this.fireEvent("disconnected");
      const f = Object.assign(Object.assign({}, this.options), { setupRetry: 0 }), m = (p) => {
        setTimeout(async () => {
          if (!this.closeRequested)
            try {
              const y = await f.createSocket(f);
              this._setSocket(y);
            } catch (y) {
              if (this._queuedMessages) {
                const w = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const x of w)
                  x.reject && x.reject(Ri);
              }
              y === ya ? this.fireEvent("reconnect-error", y) : m(p + 1);
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
    const u = this._queuedMessages;
    if (u) {
      this._queuedMessages = void 0;
      for (const f of u)
        f.resolve();
    }
    this.fireEvent("ready");
  }
  addEventListener(i, s) {
    let u = this.eventListeners.get(i);
    u || (u = [], this.eventListeners.set(i, u)), u.push(s);
  }
  removeEventListener(i, s) {
    const u = this.eventListeners.get(i);
    if (!u)
      return;
    const f = u.indexOf(s);
    f !== -1 && u.splice(f, 1);
  }
  fireEvent(i, s) {
    (this.eventListeners.get(i) || []).forEach((u) => u(this, s));
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
    return this.subscribeMessage(i, Hy(s));
  }
  ping() {
    return this.sendMessagePromise(Wy());
  }
  sendMessage(i, s) {
    if (!this.connected)
      throw Ri;
    if (this._queuedMessages) {
      if (s)
        throw new Error("Cannot queue with commandId");
      this._queuedMessages.push({ resolve: () => this.sendMessage(i) });
      return;
    }
    s || (s = this._genCmdId()), i.id = s, this.socket.send(JSON.stringify(i));
  }
  sendMessagePromise(i) {
    return new Promise((s, u) => {
      if (this._queuedMessages) {
        this._queuedMessages.push({
          reject: u,
          resolve: async () => {
            try {
              s(await this.sendMessagePromise(i));
            } catch (m) {
              u(m);
            }
          }
        });
        return;
      }
      const f = this._genCmdId();
      this.commands.set(f, { resolve: s, reject: u }), this.sendMessage(i, f);
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
  async subscribeMessage(i, s, u) {
    if (this._queuedMessages && await new Promise((m, p) => {
      this._queuedMessages.push({ resolve: m, reject: p });
    }), u != null && u.preCheck && !await u.preCheck())
      throw new Error("Pre-check failed");
    let f;
    return await new Promise((m, p) => {
      const y = this._genCmdId();
      f = {
        resolve: m,
        reject: p,
        callback: i,
        subscribe: (u == null ? void 0 : u.resubscribe) !== !1 ? () => this.subscribeMessage(i, s, u) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(Jc(y)), this.commands.delete(y);
        }
      }, this.commands.set(y, f);
      try {
        this.sendMessage(s, y);
      } catch {
      }
    }), () => f.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const Xy = (l) => l * 1e3 + Date.now();
async function Jy(l, i, s) {
  const u = typeof location < "u" && location;
  if (u && u.protocol === "https:") {
    const y = document.createElement("a");
    if (y.href = l, y.protocol === "http:" && y.hostname !== "localhost")
      throw jy;
  }
  const f = new FormData();
  i !== null && f.append("client_id", i), Object.keys(s).forEach((y) => {
    f.append(y, s[y]);
  });
  const m = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: f
  });
  if (!m.ok)
    throw m.status === 400 || m.status === 403 ? ya : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = i, p.expires = Xy(p.expires_in), p;
}
class by {
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
    const i = await Jy(this.data.hassUrl, this.data.clientId, {
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
function Zy(l, i) {
  return new by({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: i,
    expires_in: 1e11
  });
}
async function eg(l) {
  const i = Object.assign({ setupRetry: 0, createSocket: qy }, l), s = await i.createSocket(i);
  return new Gy(s, i);
}
function tg(l) {
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
async function ng() {
  const s = Zy(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), u = await eg({
    auth: s
  }), f = await u.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: u,
    states: f
  };
}
function rg({
  children: l,
  hass: i
}) {
  const [s, u] = E.useState(null);
  return E.useEffect(() => {
    async function f() {
      const m = i ? tg(i) : await ng();
      u(new $y(m));
    }
    f().catch(console.error);
  }, [i]), s ? /* @__PURE__ */ d.createElement(Cd.Provider, { value: s }, l) : /* @__PURE__ */ d.createElement("div", null, "Connecting to Home Assistant...");
}
function lg({ hass: l }) {
  return /* @__PURE__ */ d.createElement(eh, null, /* @__PURE__ */ d.createElement(rg, { hass: l }, /* @__PURE__ */ d.createElement(Oy, null)));
}
const bc = "dialog-custom-ui-panel", Zc = "dialog-custom-ui-style";
class ag extends HTMLElement {
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
    const s = `/dialog_custom_ui_static/dialog-custom-ui-panel.css?v=${Date.now()}`, u = this.ensureShadowRoot();
    if (u.getElementById(Zc))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const y = document.createElement("style");
      y.id = Zc, y.setAttribute("data-dialog-ui", "true"), y.textContent = p, u.appendChild(y);
      return;
    } catch (m) {
      console.warn(
        "[dialog_custom_ui] Failed to inject panel styles into shadow root, falling back to link element.",
        m
      );
    }
    let f = u.querySelector(
      'link[data-dialog-ui="true"]'
    );
    if (!f) {
      f = document.createElement("link"), f.rel = "stylesheet", f.href = s, f.setAttribute("data-dialog-ui", "true"), u.appendChild(f);
      return;
    }
    f.href = s;
  }
  render() {
    if (!this.isConnected) return;
    const i = this.ensureShadowRoot();
    this.root || (this.root = Dm.createRoot(i)), this.root.render(
      /* @__PURE__ */ d.createElement(d.StrictMode, null, /* @__PURE__ */ d.createElement(lg, { hass: this.hassValue }))
    );
  }
}
customElements.get(bc) || customElements.define(bc, ag);
