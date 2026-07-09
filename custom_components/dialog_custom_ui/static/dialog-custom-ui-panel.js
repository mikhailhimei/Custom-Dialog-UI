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
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function T(x) {
    return x === null || typeof x != "object" ? null : (x = _ && x[_] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, L = {};
  function w(x, A, ue) {
    this.props = x, this.context = A, this.refs = L, this.updater = ue || P;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(x, A) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, A, "setState");
  }, w.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function D() {
  }
  D.prototype = w.prototype;
  function N(x, A, ue) {
    this.props = x, this.context = A, this.refs = L, this.updater = ue || P;
  }
  var z = N.prototype = new D();
  z.constructor = N, I(z, w.prototype), z.isPureReactComponent = !0;
  var b = Array.isArray, V = Object.prototype.hasOwnProperty, H = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(x, A, ue) {
    var de, me = {}, pe = null, we = null;
    if (A != null) for (de in A.ref !== void 0 && (we = A.ref), A.key !== void 0 && (pe = "" + A.key), A) V.call(A, de) && !ae.hasOwnProperty(de) && (me[de] = A[de]);
    var ye = arguments.length - 2;
    if (ye === 1) me.children = ue;
    else if (1 < ye) {
      for (var xe = Array(ye), ot = 0; ot < ye; ot++) xe[ot] = arguments[ot + 2];
      me.children = xe;
    }
    if (x && x.defaultProps) for (de in ye = x.defaultProps, ye) me[de] === void 0 && (me[de] = ye[de]);
    return { $$typeof: l, type: x, key: pe, ref: we, props: me, _owner: H.current };
  }
  function _e(x, A) {
    return { $$typeof: l, type: x.type, key: A, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Ce(x) {
    return typeof x == "object" && x !== null && x.$$typeof === l;
  }
  function K(x) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ue) {
      return A[ue];
    });
  }
  var le = /\/+/g;
  function Pe(x, A) {
    return typeof x == "object" && x !== null && x.key != null ? K("" + x.key) : A.toString(36);
  }
  function Ae(x, A, ue, de, me) {
    var pe = typeof x;
    (pe === "undefined" || pe === "boolean") && (x = null);
    var we = !1;
    if (x === null) we = !0;
    else switch (pe) {
      case "string":
      case "number":
        we = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case l:
          case o:
            we = !0;
        }
    }
    if (we) return we = x, me = me(we), x = de === "" ? "." + Pe(we, 0) : de, b(me) ? (ue = "", x != null && (ue = x.replace(le, "$&/") + "/"), Ae(me, A, ue, "", function(ot) {
      return ot;
    })) : me != null && (Ce(me) && (me = _e(me, ue + (!me.key || we && we.key === me.key ? "" : ("" + me.key).replace(le, "$&/") + "/") + x)), A.push(me)), 1;
    if (we = 0, de = de === "" ? "." : de + ":", b(x)) for (var ye = 0; ye < x.length; ye++) {
      pe = x[ye];
      var xe = de + Pe(pe, ye);
      we += Ae(pe, A, ue, xe, me);
    }
    else if (xe = T(x), typeof xe == "function") for (x = xe.call(x), ye = 0; !(pe = x.next()).done; ) pe = pe.value, xe = de + Pe(pe, ye++), we += Ae(pe, A, ue, xe, me);
    else if (pe === "object") throw A = String(x), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return we;
  }
  function X(x, A, ue) {
    if (x == null) return x;
    var de = [], me = 0;
    return Ae(x, de, "", "", function(pe) {
      return A.call(ue, pe, me++);
    }), de;
  }
  function $e(x) {
    if (x._status === -1) {
      var A = x._result;
      A = A(), A.then(function(ue) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ue);
      }, function(ue) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ue);
      }), x._status === -1 && (x._status = 0, x._result = A);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var Ie = { current: null }, B = { transition: null }, re = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: B, ReactCurrentOwner: H };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: X, forEach: function(x, A, ue) {
    X(x, function() {
      A.apply(this, arguments);
    }, ue);
  }, count: function(x) {
    var A = 0;
    return X(x, function() {
      A++;
    }), A;
  }, toArray: function(x) {
    return X(x, function(A) {
      return A;
    }) || [];
  }, only: function(x) {
    if (!Ce(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, ce.Component = w, ce.Fragment = s, ce.Profiler = f, ce.PureComponent = N, ce.StrictMode = c, ce.Suspense = g, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, ce.act = q, ce.cloneElement = function(x, A, ue) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var de = I({}, x.props), me = x.key, pe = x.ref, we = x._owner;
    if (A != null) {
      if (A.ref !== void 0 && (pe = A.ref, we = H.current), A.key !== void 0 && (me = "" + A.key), x.type && x.type.defaultProps) var ye = x.type.defaultProps;
      for (xe in A) V.call(A, xe) && !ae.hasOwnProperty(xe) && (de[xe] = A[xe] === void 0 && ye !== void 0 ? ye[xe] : A[xe]);
    }
    var xe = arguments.length - 2;
    if (xe === 1) de.children = ue;
    else if (1 < xe) {
      ye = Array(xe);
      for (var ot = 0; ot < xe; ot++) ye[ot] = arguments[ot + 2];
      de.children = ye;
    }
    return { $$typeof: l, type: x.type, key: me, ref: pe, props: de, _owner: we };
  }, ce.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: m, _context: x }, x.Consumer = x;
  }, ce.createElement = oe, ce.createFactory = function(x) {
    var A = oe.bind(null, x);
    return A.type = x, A;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(x) {
    return { $$typeof: h, render: x };
  }, ce.isValidElement = Ce, ce.lazy = function(x) {
    return { $$typeof: S, _payload: { _status: -1, _result: x }, _init: $e };
  }, ce.memo = function(x, A) {
    return { $$typeof: C, type: x, compare: A === void 0 ? null : A };
  }, ce.startTransition = function(x) {
    var A = B.transition;
    B.transition = {};
    try {
      x();
    } finally {
      B.transition = A;
    }
  }, ce.unstable_act = q, ce.useCallback = function(x, A) {
    return Ie.current.useCallback(x, A);
  }, ce.useContext = function(x) {
    return Ie.current.useContext(x);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(x) {
    return Ie.current.useDeferredValue(x);
  }, ce.useEffect = function(x, A) {
    return Ie.current.useEffect(x, A);
  }, ce.useId = function() {
    return Ie.current.useId();
  }, ce.useImperativeHandle = function(x, A, ue) {
    return Ie.current.useImperativeHandle(x, A, ue);
  }, ce.useInsertionEffect = function(x, A) {
    return Ie.current.useInsertionEffect(x, A);
  }, ce.useLayoutEffect = function(x, A) {
    return Ie.current.useLayoutEffect(x, A);
  }, ce.useMemo = function(x, A) {
    return Ie.current.useMemo(x, A);
  }, ce.useReducer = function(x, A, ue) {
    return Ie.current.useReducer(x, A, ue);
  }, ce.useRef = function(x) {
    return Ie.current.useRef(x);
  }, ce.useState = function(x) {
    return Ie.current.useState(x);
  }, ce.useSyncExternalStore = function(x, A, ue) {
    return Ie.current.useSyncExternalStore(x, A, ue);
  }, ce.useTransition = function() {
    return Ie.current.useTransition();
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
    function o(B, re) {
      var q = B.length;
      B.push(re);
      e: for (; 0 < q; ) {
        var x = q - 1 >>> 1, A = B[x];
        if (0 < f(A, re)) B[x] = re, B[q] = A, q = x;
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
        e: for (var x = 0, A = B.length, ue = A >>> 1; x < ue; ) {
          var de = 2 * (x + 1) - 1, me = B[de], pe = de + 1, we = B[pe];
          if (0 > f(me, q)) pe < A && 0 > f(we, me) ? (B[x] = we, B[pe] = q, x = pe) : (B[x] = me, B[de] = q, x = de);
          else if (pe < A && 0 > f(we, q)) B[x] = we, B[pe] = q, x = pe;
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
    var g = [], C = [], S = 1, _ = null, T = 3, P = !1, I = !1, L = !1, w = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(B) {
      for (var re = s(C); re !== null; ) {
        if (re.callback === null) c(C);
        else if (re.startTime <= B) c(C), re.sortIndex = re.expirationTime, o(g, re);
        else break;
        re = s(C);
      }
    }
    function b(B) {
      if (L = !1, z(B), !I) if (s(g) !== null) I = !0, $e(V);
      else {
        var re = s(C);
        re !== null && Ie(b, re.startTime - B);
      }
    }
    function V(B, re) {
      I = !1, L && (L = !1, D(oe), oe = -1), P = !0;
      var q = T;
      try {
        for (z(re), _ = s(g); _ !== null && (!(_.expirationTime > re) || B && !K()); ) {
          var x = _.callback;
          if (typeof x == "function") {
            _.callback = null, T = _.priorityLevel;
            var A = x(_.expirationTime <= re);
            re = l.unstable_now(), typeof A == "function" ? _.callback = A : _ === s(g) && c(g), z(re);
          } else c(g);
          _ = s(g);
        }
        if (_ !== null) var ue = !0;
        else {
          var de = s(C);
          de !== null && Ie(b, de.startTime - re), ue = !1;
        }
        return ue;
      } finally {
        _ = null, T = q, P = !1;
      }
    }
    var H = !1, ae = null, oe = -1, _e = 5, Ce = -1;
    function K() {
      return !(l.unstable_now() - Ce < _e);
    }
    function le() {
      if (ae !== null) {
        var B = l.unstable_now();
        Ce = B;
        var re = !0;
        try {
          re = ae(!0, B);
        } finally {
          re ? Pe() : (H = !1, ae = null);
        }
      } else H = !1;
    }
    var Pe;
    if (typeof N == "function") Pe = function() {
      N(le);
    };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), X = Ae.port2;
      Ae.port1.onmessage = le, Pe = function() {
        X.postMessage(null);
      };
    } else Pe = function() {
      w(le, 0);
    };
    function $e(B) {
      ae = B, H || (H = !0, Pe());
    }
    function Ie(B, re) {
      oe = w(function() {
        B(l.unstable_now());
      }, re);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      I || P || (I = !0, $e(V));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _e = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(g);
    }, l.unstable_next = function(B) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = T;
      }
      var q = T;
      T = re;
      try {
        return B();
      } finally {
        T = q;
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
      var q = T;
      T = B;
      try {
        return re();
      } finally {
        T = q;
      }
    }, l.unstable_scheduleCallback = function(B, re, q) {
      var x = l.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? x + q : x) : q = x, B) {
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
      return A = q + A, B = { id: S++, callback: re, priorityLevel: B, startTime: q, expirationTime: A, sortIndex: -1 }, q > x ? (B.sortIndex = q, o(C, B), s(g) === null && B === s(C) && (L ? (D(oe), oe = -1) : L = !0, Ie(b, q - x))) : (B.sortIndex = A, o(g, B), I || P || (I = !0, $e(V))), B;
    }, l.unstable_shouldYield = K, l.unstable_wrapCallback = function(B) {
      var re = T;
      return function() {
        var q = T;
        T = re;
        try {
          return B.apply(this, arguments);
        } finally {
          T = q;
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, _ = {};
  function T(e) {
    return g.call(_, e) ? !0 : g.call(S, e) ? !1 : C.test(e) ? _[e] = !0 : (S[e] = !0, !1);
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
  function I(e, t, n, r) {
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
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new L(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new L(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new L(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new L(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new L(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new L(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      D,
      N
    );
    w[t] = new L(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(D, N);
    w[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(D, N);
    w[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function z(e, t, n, r) {
    var a = w.hasOwnProperty(t) ? w[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (I(t, n, a, r) && (n = null), r || a === null ? T(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, V = Symbol.for("react.element"), H = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), _e = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), K = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), Pe = Symbol.for("react.suspense"), Ae = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, x;
  function A(e) {
    if (x === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
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
        } catch ($) {
          var r = $;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch ($) {
          r = $;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          r = $;
        }
        e();
      }
    } catch ($) {
      if ($ && r && typeof $.stack == "string") {
        for (var a = $.stack.split(`
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
  function me(e) {
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
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case H:
        return "Portal";
      case _e:
        return "Profiler";
      case oe:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case K:
        return (e.displayName || "Context") + ".Consumer";
      case Ce:
        return (e._context.displayName || "Context") + ".Provider";
      case le:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
        return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
      case $e:
        t = e._payload, e = e._init;
        try {
          return pe(e(t));
        } catch {
        }
    }
    return null;
  }
  function we(e) {
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
        return t === oe ? "StrictMode" : "Mode";
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
  function ye(e) {
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
  function xe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = xe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    return e && (r = xe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function yl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ba(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ds(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ye(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function fs(e, t) {
    t = t.checked, t != null && z(e, "checked", t, !1);
  }
  function Wa(e, t) {
    fs(e, t);
    var n = ye(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Va(e, t.type, n) : t.hasOwnProperty("defaultValue") && Va(e, t.type, ye(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Va(e, t, n) {
    (t !== "number" || yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var _r = Array.isArray;
  function Un(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ye(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ha(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
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
    e._wrapperState = { initialValue: ye(n) };
  }
  function hs(e, t) {
    var n = ye(t.value), r = ye(t.defaultValue);
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
  function Qa(e, t) {
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
  var pf = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function qa(e, t) {
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
  var Xa = null, Bn = null, bn = null;
  function ws(e) {
    if (e = Wr(e)) {
      if (typeof Xa != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Bl(t), Xa(e.stateNode, e.type, t));
    }
  }
  function ks(e) {
    Bn ? bn ? bn.push(e) : bn = [e] : Bn = e;
  }
  function Cs() {
    if (Bn) {
      var e = Bn, t = bn;
      if (bn = Bn = null, ws(e), t) for (e = 0; e < t.length; e++) ws(t[e]);
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
      Ja = !1, (Bn !== null || bn !== null) && (Ns(), Cs());
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
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $);
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
        var $ = _l;
        Sr = !1, _l = null;
      } else throw Error(s(198));
      El || (El = !0, eo = $);
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
  var Ls = o.unstable_scheduleCallback, $s = o.unstable_cancelCallback, Ef = o.unstable_shouldYield, wf = o.unstable_requestPaint, ze = o.unstable_now, kf = o.unstable_getCurrentPriorityLevel, to = o.unstable_ImmediatePriority, Is = o.unstable_UserBlockingPriority, wl = o.unstable_NormalPriority, Cf = o.unstable_LowPriority, Ds = o.unstable_IdlePriority, kl = null, Lt = null;
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
  var ge = 0;
  function Os(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var As, ao, Fs, js, Us, oo = !1, xl = [], Jt = null, Zt = null, en = null, Tr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), tn = [], Lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bs(e, t) {
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
        Tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, a, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Wr(t), t !== null && ao(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function $f(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Jt = Pr(Jt, e, t, n, r, a), !0;
      case "dragenter":
        return Zt = Pr(Zt, e, t, n, r, a), !0;
      case "mouseover":
        return en = Pr(en, e, t, n, r, a), !0;
      case "pointerover":
        var i = a.pointerId;
        return Tr.set(i, Pr(Tr.get(i) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return i = a.pointerId, Rr.set(i, Pr(Rr.get(i) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function bs(e) {
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
      } else return t = Wr(n), t !== null && ao(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ws(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function If() {
    oo = !1, Jt !== null && Tl(Jt) && (Jt = null), Zt !== null && Tl(Zt) && (Zt = null), en !== null && Tl(en) && (en = null), Tr.forEach(Ws), Rr.forEach(Ws);
  }
  function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, oo || (oo = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, If)));
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
    for (Jt !== null && Mr(Jt, e), Zt !== null && Mr(Zt, e), en !== null && Mr(en, e), Tr.forEach(t), Rr.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) bs(n), n.blockedOn === null && tn.shift();
  }
  var Wn = b.ReactCurrentBatchConfig, Rl = !0;
  function Df(e, t, n, r) {
    var a = ge, i = Wn.transition;
    Wn.transition = null;
    try {
      ge = 1, io(e, t, n, r);
    } finally {
      ge = a, Wn.transition = i;
    }
  }
  function zf(e, t, n, r) {
    var a = ge, i = Wn.transition;
    Wn.transition = null;
    try {
      ge = 4, io(e, t, n, r);
    } finally {
      ge = a, Wn.transition = i;
    }
  }
  function io(e, t, n, r) {
    if (Rl) {
      var a = so(e, t, n, r);
      if (a === null) xo(e, t, r, Pl, n), Bs(e, r);
      else if ($f(a, e, t, n, r)) r.stopPropagation();
      else if (Bs(e, r), t & 4 && -1 < Lf.indexOf(e)) {
        for (; a !== null; ) {
          var i = Wr(a);
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
  function Vs(e) {
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
          case Is:
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
  var nn = null, uo = null, Ml = null;
  function Hs() {
    if (Ml) return Ml;
    var e, t = uo, n = t.length, r, a = "value" in nn ? nn.value : nn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[i - r]; r++) ;
    return Ml = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ll(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function $l() {
    return !0;
  }
  function Qs() {
    return !1;
  }
  function it(e) {
    function t(n, r, a, i, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(i) : i[y]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? $l : Qs, this.isPropagationStopped = Qs, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $l);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $l);
    }, persist: function() {
    }, isPersistent: $l }), t;
  }
  var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, co = it(Vn), $r = q({}, Vn, { view: 0, detail: 0 }), Of = it($r), fo, mo, Ir, Il = q({}, $r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ho, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ir && (Ir && e.type === "mousemove" ? (fo = e.screenX - Ir.screenX, mo = e.screenY - Ir.screenY) : mo = fo = 0, Ir = e), fo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : mo;
  } }), qs = it(Il), Af = q({}, Il, { dataTransfer: 0 }), Ff = it(Af), jf = q({}, $r, { relatedTarget: 0 }), po = it(jf), Uf = q({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bf = it(Uf), bf = q({}, Vn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Wf = it(bf), Vf = q({}, Vn, { data: 0 }), Ys = it(Vf), Hf = {
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
  }, Qf = {
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
  }, qf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qf[e]) ? !!t[e] : !1;
  }
  function ho() {
    return Yf;
  }
  var Kf = q({}, $r, { key: function(e) {
    if (e.key) {
      var t = Hf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ho, charCode: function(e) {
    return e.type === "keypress" ? Ll(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gf = it(Kf), Xf = q({}, Il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ks = it(Xf), Jf = q({}, $r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ho }), Zf = it(Jf), em = q({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tm = it(em), nm = q({}, Il, {
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
  var Hn = !1;
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
    if (Hn) return e === "compositionend" || !vo && Zs(e, t) ? (e = Hs(), Ml = uo = nn = null, Hn = !1, e) : null;
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
      if (!g.call(t, a) || !Ct(e[a], t[a])) return !1;
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
  var ym = h && "documentMode" in document && 11 >= document.documentMode, Qn = null, Eo = null, Fr = null, wo = !1;
  function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo || Qn == null || Qn !== yl(r) || (r = Qn, "selectionStart" in r && _o(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && Ar(Fr, r) || (Fr = r, r = Fl(Eo, "onSelect"), 0 < r.length && (t = new co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qn)));
  }
  function zl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var qn = { animationend: zl("Animation", "AnimationEnd"), animationiteration: zl("Animation", "AnimationIteration"), animationstart: zl("Animation", "AnimationStart"), transitionend: zl("Transition", "TransitionEnd") }, ko = {}, fu = {};
  h && (fu = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function Ol(e) {
    if (ko[e]) return ko[e];
    if (!qn[e]) return e;
    var t = qn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in fu) return ko[e] = t[n];
    return e;
  }
  var mu = Ol("animationend"), pu = Ol("animationiteration"), hu = Ol("animationstart"), vu = Ol("transitionend"), yu = /* @__PURE__ */ new Map(), gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function rn(e, t) {
    yu.set(e, t), m(t, [e]);
  }
  for (var Co = 0; Co < gu.length; Co++) {
    var So = gu[Co], gm = So.toLowerCase(), _m = So[0].toUpperCase() + So.slice(1);
    rn(gm, "on" + _m);
  }
  rn(mu, "onAnimationEnd"), rn(pu, "onAnimationIteration"), rn(hu, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(vu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
          var y = r[d], E = y.instance, $ = y.currentTarget;
          if (y = y.listener, E !== i && a.isPropagationStopped()) break e;
          _u(a, y, $), i = E;
        }
        else for (d = 0; d < r.length; d++) {
          if (y = r[d], E = y.instance, $ = y.currentTarget, y = y.listener, E !== i && a.isPropagationStopped()) break e;
          _u(a, y, $), i = E;
        }
      }
    }
    if (El) throw e = eo, El = !1, eo = null, e;
  }
  function Se(e, t) {
    var n = t[$o];
    n === void 0 && (n = t[$o] = /* @__PURE__ */ new Set());
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
    switch (Vs(t)) {
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
      var $ = i, F = Ga(n), j = [];
      e: {
        var O = yu.get(e);
        if (O !== void 0) {
          var W = co, Y = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = Gf;
              break;
            case "focusin":
              Y = "focus", W = po;
              break;
            case "focusout":
              Y = "blur", W = po;
              break;
            case "beforeblur":
            case "afterblur":
              W = po;
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
              W = qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Ff;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Zf;
              break;
            case mu:
            case pu:
            case hu:
              W = Bf;
              break;
            case vu:
              W = tm;
              break;
            case "scroll":
              W = Of;
              break;
            case "wheel":
              W = rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = Wf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Ks;
          }
          var G = (t & 4) !== 0, Oe = !G && e === "scroll", R = G ? O !== null ? O + "Capture" : null : O;
          G = [];
          for (var k = $, M; k !== null; ) {
            M = k;
            var U = M.stateNode;
            if (M.tag === 5 && U !== null && (M = U, R !== null && (U = kr(k, R), U != null && G.push(Br(k, U, M)))), Oe) break;
            k = k.return;
          }
          0 < G.length && (O = new W(O, Y, null, n, F), j.push({ event: O, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", O && n !== Ka && (Y = n.relatedTarget || n.fromElement) && (wn(Y) || Y[jt])) break e;
          if ((W || O) && (O = F.window === F ? F : (O = F.ownerDocument) ? O.defaultView || O.parentWindow : window, W ? (Y = n.relatedTarget || n.toElement, W = $, Y = Y ? wn(Y) : null, Y !== null && (Oe = En(Y), Y !== Oe || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (W = null, Y = $), W !== Y)) {
            if (G = qs, U = "onMouseLeave", R = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (G = Ks, U = "onPointerLeave", R = "onPointerEnter", k = "pointer"), Oe = W == null ? O : Gn(W), M = Y == null ? O : Gn(Y), O = new G(U, k + "leave", W, n, F), O.target = Oe, O.relatedTarget = M, U = null, wn(F) === $ && (G = new G(R, k + "enter", Y, n, F), G.target = M, G.relatedTarget = Oe, U = G), Oe = U, W && Y) t: {
              for (G = W, R = Y, k = 0, M = G; M; M = Yn(M)) k++;
              for (M = 0, U = R; U; U = Yn(U)) M++;
              for (; 0 < k - M; ) G = Yn(G), k--;
              for (; 0 < M - k; ) R = Yn(R), M--;
              for (; k--; ) {
                if (G === R || R !== null && G === R.alternate) break t;
                G = Yn(G), R = Yn(R);
              }
              G = null;
            }
            else G = null;
            W !== null && ku(j, O, W, G, !1), Y !== null && Oe !== null && ku(j, Oe, Y, G, !0);
          }
        }
        e: {
          if (O = $ ? Gn($) : window, W = O.nodeName && O.nodeName.toLowerCase(), W === "select" || W === "input" && O.type === "file") var J = cm;
          else if (tu(O)) if (ru) J = pm;
          else {
            J = fm;
            var te = dm;
          }
          else (W = O.nodeName) && W.toLowerCase() === "input" && (O.type === "checkbox" || O.type === "radio") && (J = mm);
          if (J && (J = J(e, $))) {
            nu(j, J, n, F);
            break e;
          }
          te && te(e, O, $), e === "focusout" && (te = O._wrapperState) && te.controlled && O.type === "number" && Va(O, "number", O.value);
        }
        switch (te = $ ? Gn($) : window, e) {
          case "focusin":
            (tu(te) || te.contentEditable === "true") && (Qn = te, Eo = $, Fr = null);
            break;
          case "focusout":
            Fr = Eo = Qn = null;
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
        var ne;
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
        else Hn ? Zs(e, n) && (ie = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");
        ie && (Gs && n.locale !== "ko" && (Hn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Hn && (ne = Hs()) : (nn = F, uo = "value" in nn ? nn.value : nn.textContent, Hn = !0)), te = Fl($, ie), 0 < te.length && (ie = new Ys(ie, e, null, n, F), j.push({ event: ie, listeners: te }), ne ? ie.data = ne : (ne = eu(n), ne !== null && (ie.data = ne)))), (ne = am ? om(e, n) : im(e, n)) && ($ = Fl($, "onBeforeInput"), 0 < $.length && (F = new Ys("onBeforeInput", "beforeinput", null, n, F), j.push({ event: F, listeners: $ }), F.data = ne));
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
      var y = n, E = y.alternate, $ = y.stateNode;
      if (E !== null && E === r) break;
      y.tag === 5 && $ !== null && (y = $, a ? (E = kr(n, i), E != null && d.unshift(Br(n, E, y))) : a || (E = kr(n, i), E != null && d.push(Br(n, E, y)))), n = n.return;
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
  var Kn = Math.random().toString(36).slice(2), $t = "__reactFiber$" + Kn, br = "__reactProps$" + Kn, jt = "__reactContainer$" + Kn, $o = "__reactEvents$" + Kn, xm = "__reactListeners$" + Kn, Tm = "__reactHandles$" + Kn;
  function wn(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[jt] || n[$t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Nu(e); e !== null; ) {
          if (n = e[$t]) return n;
          e = Nu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Wr(e) {
    return e = e[$t] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Bl(e) {
    return e[br] || null;
  }
  var Io = [], Xn = -1;
  function an(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Xn || (e.current = Io[Xn], Io[Xn] = null, Xn--);
  }
  function ke(e, t) {
    Xn++, Io[Xn] = e.current, e.current = t;
  }
  var on = {}, qe = an(on), Ze = an(!1), kn = on;
  function Jn(e, t) {
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
  function bl() {
    Ne(Ze), Ne(qe);
  }
  function xu(e, t, n) {
    if (qe.current !== on) throw Error(s(168));
    ke(qe, t), ke(Ze, n);
  }
  function Tu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, we(e) || "Unknown", a));
    return q({}, n, r);
  }
  function Wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, kn = qe.current, ke(qe, e), ke(Ze, Ze.current), !0;
  }
  function Ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Tu(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, Ne(Ze), Ne(qe), ke(qe, e)) : Ne(Ze), ke(Ze, n);
  }
  var Ut = null, Vl = !1, Do = !1;
  function Pu(e) {
    Ut === null ? Ut = [e] : Ut.push(e);
  }
  function Rm(e) {
    Vl = !0, Pu(e);
  }
  function sn() {
    if (!Do && Ut !== null) {
      Do = !0;
      var e = 0, t = ge;
      try {
        var n = Ut;
        for (ge = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ut = null, Vl = !1;
      } catch (a) {
        throw Ut !== null && (Ut = Ut.slice(e + 1)), Ls(to, sn), a;
      } finally {
        ge = t, Do = !1;
      }
    }
    return null;
  }
  var Zn = [], er = 0, Hl = null, Ql = 0, mt = [], pt = 0, Cn = null, Bt = 1, bt = "";
  function Sn(e, t) {
    Zn[er++] = Ql, Zn[er++] = Hl, Hl = e, Ql = t;
  }
  function Mu(e, t, n) {
    mt[pt++] = Bt, mt[pt++] = bt, mt[pt++] = Cn, Cn = e;
    var r = Bt;
    e = bt;
    var a = 32 - kt(r) - 1;
    r &= ~(1 << a), n += 1;
    var i = 32 - kt(t) + a;
    if (30 < i) {
      var d = a - a % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Bt = 1 << 32 - kt(t) + a | n << a | r, bt = i + e;
    } else Bt = 1 << i | n << a | r, bt = e;
  }
  function zo(e) {
    e.return !== null && (Sn(e, 1), Mu(e, 1, 0));
  }
  function Oo(e) {
    for (; e === Hl; ) Hl = Zn[--er], Zn[er] = null, Ql = Zn[--er], Zn[er] = null;
    for (; e === Cn; ) Cn = mt[--pt], mt[pt] = null, bt = mt[--pt], mt[pt] = null, Bt = mt[--pt], mt[pt] = null;
  }
  var st = null, ut = null, Te = !1, St = null;
  function Lu(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function $u(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, ut = ln(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, ut = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cn !== null ? { id: Bt, overflow: bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ao(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fo(e) {
    if (Te) {
      var t = ut;
      if (t) {
        var n = t;
        if (!$u(e, t)) {
          if (Ao(e)) throw Error(s(418));
          t = ln(n.nextSibling);
          var r = st;
          t && $u(e, t) ? Lu(r, n) : (e.flags = e.flags & -4097 | 2, Te = !1, st = e);
        }
      } else {
        if (Ao(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Te = !1, st = e;
      }
    }
  }
  function Iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function ql(e) {
    if (e !== st) return !1;
    if (!Te) return Iu(e), Te = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps)), t && (t = ut)) {
      if (Ao(e)) throw Du(), Error(s(418));
      for (; t; ) Lu(e, t), t = ln(t.nextSibling);
    }
    if (Iu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ut = ln(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = st ? ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Du() {
    for (var e = ut; e; ) e = ln(e.nextSibling);
  }
  function tr() {
    ut = st = null, Te = !1;
  }
  function jo(e) {
    St === null ? St = [e] : St.push(e);
  }
  var Pm = b.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
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
    function t(R, k) {
      if (e) {
        var M = R.deletions;
        M === null ? (R.deletions = [k], R.flags |= 16) : M.push(k);
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
    function i(R, k, M) {
      return R.index = M, e ? (M = R.alternate, M !== null ? (M = M.index, M < k ? (R.flags |= 2, k) : M) : (R.flags |= 2, k)) : (R.flags |= 1048576, k);
    }
    function d(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function y(R, k, M, U) {
      return k === null || k.tag !== 6 ? (k = Mi(M, R.mode, U), k.return = R, k) : (k = a(k, M), k.return = R, k);
    }
    function E(R, k, M, U) {
      var J = M.type;
      return J === ae ? F(R, k, M.props.children, U, M.key) : k !== null && (k.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $e && zu(J) === k.type) ? (U = a(k, M.props), U.ref = Vr(R, k, M), U.return = R, U) : (U = ga(M.type, M.key, M.props, null, R.mode, U), U.ref = Vr(R, k, M), U.return = R, U);
    }
    function $(R, k, M, U) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== M.containerInfo || k.stateNode.implementation !== M.implementation ? (k = Li(M, R.mode, U), k.return = R, k) : (k = a(k, M.children || []), k.return = R, k);
    }
    function F(R, k, M, U, J) {
      return k === null || k.tag !== 7 ? (k = $n(M, R.mode, U, J), k.return = R, k) : (k = a(k, M), k.return = R, k);
    }
    function j(R, k, M) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Mi("" + k, R.mode, M), k.return = R, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case V:
            return M = ga(k.type, k.key, k.props, null, R.mode, M), M.ref = Vr(R, null, k), M.return = R, M;
          case H:
            return k = Li(k, R.mode, M), k.return = R, k;
          case $e:
            var U = k._init;
            return j(R, U(k._payload), M);
        }
        if (_r(k) || re(k)) return k = $n(k, R.mode, M, null), k.return = R, k;
        Yl(R, k);
      }
      return null;
    }
    function O(R, k, M, U) {
      var J = k !== null ? k.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return J !== null ? null : y(R, k, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            return M.key === J ? E(R, k, M, U) : null;
          case H:
            return M.key === J ? $(R, k, M, U) : null;
          case $e:
            return J = M._init, O(
              R,
              k,
              J(M._payload),
              U
            );
        }
        if (_r(M) || re(M)) return J !== null ? null : F(R, k, M, U, null);
        Yl(R, M);
      }
      return null;
    }
    function W(R, k, M, U, J) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return R = R.get(M) || null, y(k, R, "" + U, J);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case V:
            return R = R.get(U.key === null ? M : U.key) || null, E(k, R, U, J);
          case H:
            return R = R.get(U.key === null ? M : U.key) || null, $(k, R, U, J);
          case $e:
            var te = U._init;
            return W(R, k, M, te(U._payload), J);
        }
        if (_r(U) || re(U)) return R = R.get(M) || null, F(k, R, U, J, null);
        Yl(k, U);
      }
      return null;
    }
    function Y(R, k, M, U) {
      for (var J = null, te = null, ne = k, ie = k = 0, We = null; ne !== null && ie < M.length; ie++) {
        ne.index > ie ? (We = ne, ne = null) : We = ne.sibling;
        var he = O(R, ne, M[ie], U);
        if (he === null) {
          ne === null && (ne = We);
          break;
        }
        e && ne && he.alternate === null && t(R, ne), k = i(he, k, ie), te === null ? J = he : te.sibling = he, te = he, ne = We;
      }
      if (ie === M.length) return n(R, ne), Te && Sn(R, ie), J;
      if (ne === null) {
        for (; ie < M.length; ie++) ne = j(R, M[ie], U), ne !== null && (k = i(ne, k, ie), te === null ? J = ne : te.sibling = ne, te = ne);
        return Te && Sn(R, ie), J;
      }
      for (ne = r(R, ne); ie < M.length; ie++) We = W(ne, R, ie, M[ie], U), We !== null && (e && We.alternate !== null && ne.delete(We.key === null ? ie : We.key), k = i(We, k, ie), te === null ? J = We : te.sibling = We, te = We);
      return e && ne.forEach(function(yn) {
        return t(R, yn);
      }), Te && Sn(R, ie), J;
    }
    function G(R, k, M, U) {
      var J = re(M);
      if (typeof J != "function") throw Error(s(150));
      if (M = J.call(M), M == null) throw Error(s(151));
      for (var te = J = null, ne = k, ie = k = 0, We = null, he = M.next(); ne !== null && !he.done; ie++, he = M.next()) {
        ne.index > ie ? (We = ne, ne = null) : We = ne.sibling;
        var yn = O(R, ne, he.value, U);
        if (yn === null) {
          ne === null && (ne = We);
          break;
        }
        e && ne && yn.alternate === null && t(R, ne), k = i(yn, k, ie), te === null ? J = yn : te.sibling = yn, te = yn, ne = We;
      }
      if (he.done) return n(
        R,
        ne
      ), Te && Sn(R, ie), J;
      if (ne === null) {
        for (; !he.done; ie++, he = M.next()) he = j(R, he.value, U), he !== null && (k = i(he, k, ie), te === null ? J = he : te.sibling = he, te = he);
        return Te && Sn(R, ie), J;
      }
      for (ne = r(R, ne); !he.done; ie++, he = M.next()) he = W(ne, R, ie, he.value, U), he !== null && (e && he.alternate !== null && ne.delete(he.key === null ? ie : he.key), k = i(he, k, ie), te === null ? J = he : te.sibling = he, te = he);
      return e && ne.forEach(function(sp) {
        return t(R, sp);
      }), Te && Sn(R, ie), J;
    }
    function Oe(R, k, M, U) {
      if (typeof M == "object" && M !== null && M.type === ae && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case V:
            e: {
              for (var J = M.key, te = k; te !== null; ) {
                if (te.key === J) {
                  if (J = M.type, J === ae) {
                    if (te.tag === 7) {
                      n(R, te.sibling), k = a(te, M.props.children), k.return = R, R = k;
                      break e;
                    }
                  } else if (te.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $e && zu(J) === te.type) {
                    n(R, te.sibling), k = a(te, M.props), k.ref = Vr(R, te, M), k.return = R, R = k;
                    break e;
                  }
                  n(R, te);
                  break;
                } else t(R, te);
                te = te.sibling;
              }
              M.type === ae ? (k = $n(M.props.children, R.mode, U, M.key), k.return = R, R = k) : (U = ga(M.type, M.key, M.props, null, R.mode, U), U.ref = Vr(R, k, M), U.return = R, R = U);
            }
            return d(R);
          case H:
            e: {
              for (te = M.key; k !== null; ) {
                if (k.key === te) if (k.tag === 4 && k.stateNode.containerInfo === M.containerInfo && k.stateNode.implementation === M.implementation) {
                  n(R, k.sibling), k = a(k, M.children || []), k.return = R, R = k;
                  break e;
                } else {
                  n(R, k);
                  break;
                }
                else t(R, k);
                k = k.sibling;
              }
              k = Li(M, R.mode, U), k.return = R, R = k;
            }
            return d(R);
          case $e:
            return te = M._init, Oe(R, k, te(M._payload), U);
        }
        if (_r(M)) return Y(R, k, M, U);
        if (re(M)) return G(R, k, M, U);
        Yl(R, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, k !== null && k.tag === 6 ? (n(R, k.sibling), k = a(k, M), k.return = R, R = k) : (n(R, k), k = Mi(M, R.mode, U), k.return = R, R = k), d(R)) : n(R, k);
    }
    return Oe;
  }
  var nr = Ou(!0), Au = Ou(!1), Kl = an(null), Gl = null, rr = null, Uo = null;
  function Bo() {
    Uo = rr = Gl = null;
  }
  function bo(e) {
    var t = Kl.current;
    Ne(Kl), e._currentValue = t;
  }
  function Wo(e, t, n) {
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
  function Vo(e) {
    Nn === null ? Nn = [e] : Nn.push(e);
  }
  function Fu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Vo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Wt(e, r);
  }
  function Wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var un = !1;
  function Ho(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ju(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Vt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (fe & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Wt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Vo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Wt(e, n);
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
    un = !1;
    var i = a.firstBaseUpdate, d = a.lastBaseUpdate, y = a.shared.pending;
    if (y !== null) {
      a.shared.pending = null;
      var E = y, $ = E.next;
      E.next = null, d === null ? i = $ : d.next = $, d = E;
      var F = e.alternate;
      F !== null && (F = F.updateQueue, y = F.lastBaseUpdate, y !== d && (y === null ? F.firstBaseUpdate = $ : y.next = $, F.lastBaseUpdate = E));
    }
    if (i !== null) {
      var j = a.baseState;
      d = 0, F = $ = E = null, y = i;
      do {
        var O = y.lane, W = y.eventTime;
        if ((r & O) === O) {
          F !== null && (F = F.next = {
            eventTime: W,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var Y = e, G = y;
            switch (O = t, W = n, G.tag) {
              case 1:
                if (Y = G.payload, typeof Y == "function") {
                  j = Y.call(W, j, O);
                  break e;
                }
                j = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = G.payload, O = typeof Y == "function" ? Y.call(W, j, O) : Y, O == null) break e;
                j = q({}, j, O);
                break e;
              case 2:
                un = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, O = a.effects, O === null ? a.effects = [y] : O.push(y));
        } else W = { eventTime: W, lane: O, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, F === null ? ($ = F = W, E = j) : F = F.next = W, d |= O;
        if (y = y.next, y === null) {
          if (y = a.shared.pending, y === null) break;
          O = y, y = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      if (F === null && (E = j), a.baseState = E, a.firstBaseUpdate = $, a.lastBaseUpdate = F, t = a.shared.interleaved, t !== null) {
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
  var Hr = {}, It = an(Hr), Qr = an(Hr), qr = an(Hr);
  function xn(e) {
    if (e === Hr) throw Error(s(174));
    return e;
  }
  function Qo(e, t) {
    switch (ke(qr, t), ke(Qr, e), ke(It, Hr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qa(t, e);
    }
    Ne(It), ke(It, t);
  }
  function ar() {
    Ne(It), Ne(Qr), Ne(qr);
  }
  function bu(e) {
    xn(qr.current);
    var t = xn(It.current), n = Qa(t, e.type);
    t !== n && (ke(Qr, e), ke(It, n));
  }
  function qo(e) {
    Qr.current === e && (Ne(It), Ne(Qr));
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
      var y = d = null, E = null, $ = i;
      do {
        var F = $.lane;
        if ((Tn & F) === F) E !== null && (E = E.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), r = $.hasEagerState ? $.eagerState : e(r, $.action);
        else {
          var j = {
            lane: F,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          E === null ? (y = E = j, d = r) : E = E.next = j, Le.lanes |= F, Rn |= F;
        }
        $ = $.next;
      } while ($ !== null && $ !== i);
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
  function Wu() {
  }
  function Vu(e, t) {
    var n = Le, r = vt(), a = t(), i = !Ct(r.memoizedState, a);
    if (i && (r.memoizedState = a, tt = !0), r = r.queue, ni(qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Be !== null && Be.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, Qu.bind(null, n, r, a, t), void 0, null), be === null) throw Error(s(349));
      (Tn & 30) !== 0 || Hu(n, t, a);
    }
    return a;
  }
  function Hu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Qu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Yu(t) && Ku(e);
  }
  function qu(e, t, n) {
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
    var t = Wt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function Gu(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Im.bind(null, Le, e), [t.memoizedState, e];
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
    var n = ge;
    ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Go.transition;
    Go.transition = {};
    try {
      e(!1), t();
    } finally {
      ge = n, Go.transition = r;
    }
  }
  function oc() {
    return vt().memoizedState;
  }
  function $m(e, t, n) {
    var r = pn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ic(e)) sc(t, n);
    else if (n = Fu(e, t, n, r), n !== null) {
      var a = Je();
      Rt(n, e, r, a), uc(n, t, r);
    }
  }
  function Im(e, t, n) {
    var r = pn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ic(e)) sc(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, y = i(d, n);
        if (a.hasEagerState = !0, a.eagerState = y, Ct(y, d)) {
          var E = t.interleaved;
          E === null ? (a.next = a, Vo(t)) : (a.next = E.next, E.next = a), t.interleaved = a;
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = $m.bind(null, Le, e), [r.memoizedState, e];
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
    if (Te) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), be === null) throw Error(s(349));
      (Tn & 30) !== 0 || Hu(r, t, n);
    }
    a.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return a.queue = i, Ju(qu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Xr(9, Qu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = be.identifierPrefix;
    if (Te) {
      var n = bt, r = Bt;
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
    useMutableSource: Wu,
    useSyncExternalStore: Vu,
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
  }, useMutableSource: Wu, useSyncExternalStore: Vu, useId: oc, unstable_isNewReconciler: !1 };
  function Nt(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function li(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var aa = { isMounted: function(e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = pn(e), i = Vt(r, a);
    i.payload = t, n != null && (i.callback = n), t = cn(e, i, a), t !== null && (Rt(t, e, a, r), Xl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = pn(e), i = Vt(r, a);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = cn(e, i, a), t !== null && (Rt(t, e, a, r), Xl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Je(), r = pn(e), a = Vt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = cn(e, a, r), t !== null && (Rt(t, e, r, n), Xl(t, e, r));
  } };
  function cc(e, t, n, r, a, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(a, i) : !0;
  }
  function dc(e, t, n) {
    var r = !1, a = on, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ht(i) : (a = et(t) ? kn : qe.current, r = t.contextTypes, i = (r = r != null) ? Jn(e, a) : on), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function fc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && aa.enqueueReplaceState(t, t.state, null);
  }
  function ai(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Ho(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = ht(i) : (i = et(t) ? kn : qe.current, a.context = Jn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (li(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && aa.enqueueReplaceState(a, a.state, null), Jl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function or(e, t) {
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
    n = Vt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      fa || (fa = !0, ki = r), ii(e, t);
    }, n;
  }
  function pc(e, t, n) {
    n = Vt(-1, n), n.tag = 3;
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
      ii(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1), t.tag = 2, cn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Fm = b.ReactCurrentOwner, tt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? Au(t, null, n, r) : nr(t, e.child, n, r);
  }
  function gc(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return lr(t, a), r = Jo(e, t, n, r, i, a), n = Zo(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Te && n && zo(t), t.flags |= 1, Xe(e, t, r, a), t.child);
  }
  function _c(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Pi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ec(e, t, i, r, a)) : (e = ga(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ar, n(d, r) && e.ref === t.ref) return Ht(e, t, a);
    }
    return t.flags |= 1, e = vn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ec(e, t, n, r, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Ar(i, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, Ht(e, t, a);
    }
    return si(e, t, n, r, a);
  }
  function wc(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(sr, ct), ct |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ke(sr, ct), ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ke(sr, ct), ct |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ke(sr, ct), ct |= r;
    return Xe(e, t, a, n), t.child;
  }
  function kc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function si(e, t, n, r, a) {
    var i = et(n) ? kn : qe.current;
    return i = Jn(t, i), lr(t, a), n = Jo(e, t, n, r, i, a), r = Zo(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ht(e, t, a)) : (Te && r && zo(t), t.flags |= 1, Xe(e, t, n, a), t.child);
  }
  function Cc(e, t, n, r, a) {
    if (et(n)) {
      var i = !0;
      Wl(t);
    } else i = !1;
    if (lr(t, a), t.stateNode === null) ia(e, t), dc(t, n, r), ai(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, y = t.memoizedProps;
      d.props = y;
      var E = d.context, $ = n.contextType;
      typeof $ == "object" && $ !== null ? $ = ht($) : ($ = et(n) ? kn : qe.current, $ = Jn(t, $));
      var F = n.getDerivedStateFromProps, j = typeof F == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      j || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== r || E !== $) && fc(t, d, r, $), un = !1;
      var O = t.memoizedState;
      d.state = O, Jl(t, r, d, a), E = t.memoizedState, y !== r || O !== E || Ze.current || un ? (typeof F == "function" && (li(t, n, F, r), E = t.memoizedState), (y = un || cc(t, n, y, r, O, E, $)) ? (j || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = E), d.props = r, d.state = E, d.context = $, r = y) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, ju(e, t), y = t.memoizedProps, $ = t.type === t.elementType ? y : Nt(t.type, y), d.props = $, j = t.pendingProps, O = d.context, E = n.contextType, typeof E == "object" && E !== null ? E = ht(E) : (E = et(n) ? kn : qe.current, E = Jn(t, E));
      var W = n.getDerivedStateFromProps;
      (F = typeof W == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== j || O !== E) && fc(t, d, r, E), un = !1, O = t.memoizedState, d.state = O, Jl(t, r, d, a);
      var Y = t.memoizedState;
      y !== j || O !== Y || Ze.current || un ? (typeof W == "function" && (li(t, n, W, r), Y = t.memoizedState), ($ = un || cc(t, n, $, r, O, Y, E) || !1) ? (F || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, Y, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, Y, E)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Y), d.props = r, d.state = Y, d.context = E, r = $) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ui(e, t, n, r, i, a);
  }
  function ui(e, t, n, r, a, i) {
    kc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Ru(t, n, !1), Ht(e, t, i);
    r = t.stateNode, Fm.current = t;
    var y = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = nr(t, e.child, null, i), t.child = nr(t, null, y, i)) : Xe(e, t, y, i), t.memoizedState = r.state, a && Ru(t, n, !0), t.child;
  }
  function Sc(e) {
    var t = e.stateNode;
    t.pendingContext ? xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xu(e, t.context, !1), Qo(e, t.containerInfo);
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
    if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), y ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), ke(Me, a & 1), e === null)
      return Fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = _a(d, r, 0, null), e = $n(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = di(n), t.memoizedState = ci, e) : fi(t, d));
    if (a = e.memoizedState, a !== null && (y = a.dehydrated, y !== null)) return jm(e, t, d, r, y, a, n);
    if (i) {
      i = r.fallback, d = t.mode, a = e.child, y = a.sibling;
      var E = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = E, t.deletions = null) : (r = vn(a, E), r.subtreeFlags = a.subtreeFlags & 14680064), y !== null ? i = vn(y, i) : (i = $n(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? di(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = ci, r;
    }
    return i = e.child, e = i.sibling, r = vn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function fi(e, t) {
    return t = _a({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oa(e, t, n, r) {
    return r !== null && jo(r), nr(t, e.child, null, n), e = fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function jm(e, t, n, r, a, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = oi(Error(s(422))), oa(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = _a({ mode: "visible", children: r.children }, a, 0, null), i = $n(i, a, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && nr(t, e.child, null, d), t.child.memoizedState = di(d), t.memoizedState = ci, i);
    if ((t.mode & 1) === 0) return oa(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var y = r.dgst;
      return r = y, i = Error(s(419)), r = oi(i, r, void 0), oa(e, t, d, r);
    }
    if (y = (d & e.childLanes) !== 0, tt || y) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Wt(e, a), Rt(r, e, a, -1));
      }
      return Ri(), r = oi(Error(s(421))), oa(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jm.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ut = ln(a.nextSibling), st = t, Te = !0, St = null, e !== null && (mt[pt++] = Bt, mt[pt++] = bt, mt[pt++] = Cn, Bt = e.id, bt = e.overflow, Cn = t), t = fi(t, r.children), t.flags |= 4096, t);
  }
  function Tc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wo(e.return, t, n);
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
    if (ke(Me, r), (t.mode & 1) === 0) t.memoizedState = null;
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
  function Ht(e, t, n) {
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
        Sc(t), tr();
        break;
      case 5:
        bu(t);
        break;
      case 1:
        et(t.type) && Wl(t);
        break;
      case 4:
        Qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        ke(Kl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ke(Me, Me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xc(e, t, n) : (ke(Me, Me.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
        ke(Me, Me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Rc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), ke(Me, Me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wc(e, t, n);
    }
    return Ht(e, t, n);
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
      e = t.stateNode, xn(It.current);
      var i = null;
      switch (n) {
        case "input":
          a = ba(e, a), r = ba(e, r), i = [];
          break;
        case "select":
          a = q({}, a, { value: void 0 }), r = q({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = Ha(e, a), r = Ha(e, r), i = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
      }
      qa(n, r);
      var d;
      n = null;
      for ($ in a) if (!r.hasOwnProperty($) && a.hasOwnProperty($) && a[$] != null) if ($ === "style") {
        var y = a[$];
        for (d in y) y.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (f.hasOwnProperty($) ? i || (i = []) : (i = i || []).push($, null));
      for ($ in r) {
        var E = r[$];
        if (y = a != null ? a[$] : void 0, r.hasOwnProperty($) && E !== y && (E != null || y != null)) if ($ === "style") if (y) {
          for (d in y) !y.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in E) E.hasOwnProperty(d) && y[d] !== E[d] && (n || (n = {}), n[d] = E[d]);
        } else n || (i || (i = []), i.push(
          $,
          n
        )), n = E;
        else $ === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, y = y ? y.__html : void 0, E != null && y !== E && (i = i || []).push($, E)) : $ === "children" ? typeof E != "string" && typeof E != "number" || (i = i || []).push($, "" + E) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (f.hasOwnProperty($) ? (E != null && $ === "onScroll" && Se("scroll", e), i || y === E || (i = [])) : (i = i || []).push($, E));
      }
      n && (i = i || []).push("style", n);
      var $ = i;
      (t.updateQueue = $) && (t.flags |= 4);
    }
  }, Lc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Jr(e, t) {
    if (!Te) switch (e.tailMode) {
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
        return et(t.type) && bl(), Ke(t), null;
      case 3:
        return r = t.stateNode, ar(), Ne(Ze), Ne(qe), Ko(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, St !== null && (Ni(St), St = null))), pi(e, t), Ke(t), null;
      case 5:
        qo(t);
        var a = xn(qr.current);
        if (n = t.type, e !== null && t.stateNode != null) Mc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = xn(It.current), ql(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[$t] = t, r[br] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Se("cancel", r), Se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Se("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < jr.length; a++) Se(jr[a], r);
                break;
              case "source":
                Se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Se(
                  "error",
                  r
                ), Se("load", r);
                break;
              case "details":
                Se("toggle", r);
                break;
              case "input":
                ds(r, i), Se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Se("invalid", r);
                break;
              case "textarea":
                ps(r, i), Se("invalid", r);
            }
            qa(n, i), a = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var y = i[d];
              d === "children" ? typeof y == "string" ? r.textContent !== y && (i.suppressHydrationWarning !== !0 && jl(r.textContent, y, e), a = ["children", y]) : typeof y == "number" && r.textContent !== "" + y && (i.suppressHydrationWarning !== !0 && jl(
                r.textContent,
                y,
                e
              ), a = ["children", "" + y]) : f.hasOwnProperty(d) && y != null && d === "onScroll" && Se("scroll", r);
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
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ys(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[$t] = t, e[br] = r, Pc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ya(n, r), n) {
                case "dialog":
                  Se("cancel", e), Se("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Se("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < jr.length; a++) Se(jr[a], e);
                  a = r;
                  break;
                case "source":
                  Se("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Se(
                    "error",
                    e
                  ), Se("load", e), a = r;
                  break;
                case "details":
                  Se("toggle", e), a = r;
                  break;
                case "input":
                  ds(e, r), a = ba(e, r), Se("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = q({}, r, { value: void 0 }), Se("invalid", e);
                  break;
                case "textarea":
                  ps(e, r), a = Ha(e, r), Se("invalid", e);
                  break;
                default:
                  a = r;
              }
              qa(n, a), y = a;
              for (i in y) if (y.hasOwnProperty(i)) {
                var E = y[i];
                i === "style" ? Es(e, E) : i === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && gs(e, E)) : i === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && Er(e, E) : typeof E == "number" && Er(e, "" + E) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? E != null && i === "onScroll" && Se("scroll", e) : E != null && z(e, i, E, d));
              }
              switch (n) {
                case "input":
                  vl(e), ms(e, r, !1);
                  break;
                case "textarea":
                  vl(e), vs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ye(r.value));
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
          if (n = xn(qr.current), xn(It.current), ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[$t] = t, (i = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
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
        if (Ne(Me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Te && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Du(), tr(), t.flags |= 98560, i = !1;
          else if (i = ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[$t] = t;
            } else tr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else St !== null && (Ni(St), St = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Ri())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return ar(), pi(e, t), e === null && Ur(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return bo(t.type._context), Ke(t), null;
      case 17:
        return et(t.type) && bl(), Ke(t), null;
      case 19:
        if (Ne(Me), i = t.memoizedState, i === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) Jr(i, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Zl(e), d !== null) {
              for (t.flags |= 128, Jr(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ke(Me, Me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ze() > ur && (t.flags |= 128, r = !0, Jr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zl(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jr(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !Te) return Ke(t), null;
          } else 2 * ze() - i.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, Jr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ze(), t.sibling = null, n = Me.current, ke(Me, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
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
  function bm(e, t) {
    switch (Oo(t), t.tag) {
      case 1:
        return et(t.type) && bl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ar(), Ne(Ze), Ne(qe), Ko(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return qo(t), null;
      case 13:
        if (Ne(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          tr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(Me), null;
      case 4:
        return ar(), null;
      case 10:
        return bo(t.type._context), null;
      case 22:
      case 23:
        return Ti(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var sa = !1, Ge = !1, Wm = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function ir(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      De(e, t, r);
    }
    else n.current = null;
  }
  function hi(e, t, n) {
    try {
      n();
    } catch (r) {
      De(e, t, r);
    }
  }
  var $c = !1;
  function Vm(e, t) {
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
          var d = 0, y = -1, E = -1, $ = 0, F = 0, j = e, O = null;
          t: for (; ; ) {
            for (var W; j !== n || a !== 0 && j.nodeType !== 3 || (y = d + a), j !== i || r !== 0 && j.nodeType !== 3 || (E = d + r), j.nodeType === 3 && (d += j.nodeValue.length), (W = j.firstChild) !== null; )
              O = j, j = W;
            for (; ; ) {
              if (j === e) break t;
              if (O === n && ++$ === a && (y = d), O === i && ++F === r && (E = d), (W = j.nextSibling) !== null) break;
              j = O, O = j.parentNode;
            }
            j = W;
          }
          n = y === -1 || E === -1 ? null : { start: y, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ro = { focusedElem: e, selectionRange: n }, Rl = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
    else for (; Q !== null; ) {
      t = Q;
      try {
        var Y = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Y !== null) {
              var G = Y.memoizedProps, Oe = Y.memoizedState, R = t.stateNode, k = R.getSnapshotBeforeUpdate(t.elementType === t.type ? G : Nt(t.type, G), Oe);
              R.__reactInternalSnapshotBeforeUpdate = k;
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
    return Y = $c, $c = !1, Y;
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
  function Ic(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$t], delete t[br], delete t[$o], delete t[xm], delete t[Tm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
  var He = null, xt = !1;
  function dn(e, t, n) {
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
        var r = He, a = xt;
        He = null, dn(e, t, n), He = r, xt = a, He !== null && (xt ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
        break;
      case 18:
        He !== null && (xt ? (e = He, n = n.stateNode, e.nodeType === 8 ? Lo(e.parentNode, n) : e.nodeType === 1 && Lo(e, n), Lr(e)) : Lo(He, n.stateNode));
        break;
      case 4:
        r = He, a = xt, He = n.stateNode.containerInfo, xt = !0, dn(e, t, n), He = r, xt = a;
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
        dn(e, t, n);
        break;
      case 1:
        if (!Ge && (ir(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (y) {
          De(n, t, y);
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
  function Ac(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Wm()), t.forEach(function(r) {
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
              He = y.stateNode, xt = !1;
              break e;
            case 3:
              He = y.stateNode.containerInfo, xt = !0;
              break e;
            case 4:
              He = y.stateNode.containerInfo, xt = !0;
              break e;
          }
          y = y.return;
        }
        if (He === null) throw Error(s(160));
        Oc(i, d, a), He = null, xt = !1;
        var E = a.alternate;
        E !== null && (E.return = null), a.return = null;
      } catch ($) {
        De(a, t, $);
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
          } catch (G) {
            De(e, e.return, G);
          }
          try {
            Zr(5, e, e.return);
          } catch (G) {
            De(e, e.return, G);
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
          } catch (G) {
            De(e, e.return, G);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, y = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            y === "input" && i.type === "radio" && i.name != null && fs(a, i), Ya(y, d);
            var $ = Ya(y, i);
            for (d = 0; d < E.length; d += 2) {
              var F = E[d], j = E[d + 1];
              F === "style" ? Es(a, j) : F === "dangerouslySetInnerHTML" ? gs(a, j) : F === "children" ? Er(a, j) : z(a, F, j, $);
            }
            switch (y) {
              case "input":
                Wa(a, i);
                break;
              case "textarea":
                hs(a, i);
                break;
              case "select":
                var O = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var W = i.value;
                W != null ? Un(a, !!i.multiple, W, !1) : O !== !!i.multiple && (i.defaultValue != null ? Un(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Un(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[br] = i;
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 6:
        if (Tt(t, e), zt(e), r & 4) {
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
        if (Tt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Lr(t.containerInfo);
        } catch (G) {
          De(e, e.return, G);
        }
        break;
      case 4:
        Tt(t, e), zt(e);
        break;
      case 13:
        Tt(t, e), zt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (wi = ze())), r & 4 && Ac(e);
        break;
      case 22:
        if (F = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = ($ = Ge) || F, Tt(t, e), Ge = $) : Tt(t, e), zt(e), r & 8192) {
          if ($ = e.memoizedState !== null, (e.stateNode.isHidden = $) && !F && (e.mode & 1) !== 0) for (Q = e, F = e.child; F !== null; ) {
            for (j = Q = F; Q !== null; ) {
              switch (O = Q, W = O.child, O.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, O, O.return);
                  break;
                case 1:
                  ir(O, O.return);
                  var Y = O.stateNode;
                  if (typeof Y.componentWillUnmount == "function") {
                    r = O, n = O.return;
                    try {
                      t = r, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                    } catch (G) {
                      De(r, n, G);
                    }
                  }
                  break;
                case 5:
                  ir(O, O.return);
                  break;
                case 22:
                  if (O.memoizedState !== null) {
                    Bc(j);
                    continue;
                  }
              }
              W !== null ? (W.return = O, Q = W) : Bc(j);
            }
            F = F.sibling;
          }
          e: for (F = null, j = e; ; ) {
            if (j.tag === 5) {
              if (F === null) {
                F = j;
                try {
                  a = j.stateNode, $ ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (y = j.stateNode, E = j.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, y.style.display = _s("display", d));
                } catch (G) {
                  De(e, e.return, G);
                }
              }
            } else if (j.tag === 6) {
              if (F === null) try {
                j.stateNode.nodeValue = $ ? "" : j.memoizedProps;
              } catch (G) {
                De(e, e.return, G);
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
        De(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hm(e, t, n) {
    Q = e, jc(e);
  }
  function jc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, i = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || sa;
        if (!d) {
          var y = a.alternate, E = y !== null && y.memoizedState !== null || Ge;
          y = sa;
          var $ = Ge;
          if (sa = d, (Ge = E) && !$) for (Q = a; Q !== null; ) d = Q, E = d.child, d.tag === 22 && d.memoizedState !== null ? bc(a) : E !== null ? (E.return = d, Q = E) : bc(a);
          for (; i !== null; ) Q = i, jc(i), i = i.sibling;
          Q = a, sa = y, Ge = $;
        }
        Uc(e);
      } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, Q = i) : Uc(e);
    }
  }
  function Uc(e) {
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
                var $ = t.alternate;
                if ($ !== null) {
                  var F = $.memoizedState;
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
  function Bc(e) {
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
  function bc(e) {
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
              vi(t);
            } catch (E) {
              De(t, i, E);
            }
            break;
          case 5:
            var d = t.return;
            try {
              vi(t);
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
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, Q = y;
        break;
      }
      Q = t.return;
    }
  }
  var Qm = Math.ceil, ca = b.ReactCurrentDispatcher, _i = b.ReactCurrentOwner, yt = b.ReactCurrentBatchConfig, fe = 0, be = null, Fe = null, Qe = 0, ct = 0, sr = an(0), Ue = 0, el = null, Rn = 0, da = 0, Ei = 0, tl = null, nt = null, wi = 0, ur = 1 / 0, Qt = null, fa = !1, ki = null, fn = null, ma = !1, mn = null, pa = 0, nl = 0, Ci = null, ha = -1, va = 0;
  function Je() {
    return (fe & 6) !== 0 ? ze() : ha !== -1 ? ha : ha = ze();
  }
  function pn(e) {
    return (e.mode & 1) === 0 ? 1 : (fe & 2) !== 0 && Qe !== 0 ? Qe & -Qe : Pm.transition !== null ? (va === 0 && (va = zs()), va) : (e = ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e);
  }
  function Rt(e, t, n, r) {
    if (50 < nl) throw nl = 0, Ci = null, Error(s(185));
    xr(e, n, r), ((fe & 2) === 0 || e !== be) && (e === be && ((fe & 2) === 0 && (da |= n), Ue === 4 && hn(e, Qe)), rt(e, r), n === 1 && fe === 0 && (t.mode & 1) === 0 && (ur = ze() + 500, Vl && sn()));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    Pf(e, t);
    var r = Nl(e, e === be ? Qe : 0);
    if (r === 0) n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && $s(n), t === 1) e.tag === 0 ? Rm(Vc.bind(null, e)) : Pu(Vc.bind(null, e)), Sm(function() {
        (fe & 6) === 0 && sn();
      }), n = null;
      else {
        switch (Os(r)) {
          case 1:
            n = to;
            break;
          case 4:
            n = Is;
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
        n = Jc(n, Wc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Wc(e, t) {
    if (ha = -1, va = 0, (fe & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n) return null;
    var r = Nl(e, e === be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ya(e, r);
    else {
      t = r;
      var a = fe;
      fe |= 2;
      var i = Qc();
      (be !== e || Qe !== t) && (Qt = null, ur = ze() + 500, Mn(e, t));
      do
        try {
          Km();
          break;
        } catch (y) {
          Hc(e, y);
        }
      while (!0);
      Bo(), ca.current = i, fe = a, Fe !== null ? t = 0 : (be = null, Qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = no(e), a !== 0 && (r = a, t = Si(e, a))), t === 1) throw n = el, Mn(e, 0), hn(e, r), rt(e, ze()), n;
      if (t === 6) hn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !qm(a) && (t = ya(e, r), t === 2 && (i = no(e), i !== 0 && (r = i, t = Si(e, i))), t === 1)) throw n = el, Mn(e, 0), hn(e, r), rt(e, ze()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Ln(e, nt, Qt);
            break;
          case 3:
            if (hn(e, r), (r & 130023424) === r && (t = wi + 500 - ze(), 10 < t)) {
              if (Nl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Je(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Mo(Ln.bind(null, e, nt, Qt), t);
              break;
            }
            Ln(e, nt, Qt);
            break;
          case 4:
            if (hn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - kt(r);
              i = 1 << d, d = t[d], d > a && (a = d), r &= ~i;
            }
            if (r = a, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Mo(Ln.bind(null, e, nt, Qt), r);
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
    return rt(e, ze()), e.callbackNode === n ? Wc.bind(null, e) : null;
  }
  function Si(e, t) {
    var n = tl;
    return e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256), e = ya(e, t), e !== 2 && (t = nt, nt = n, t !== null && Ni(t)), e;
  }
  function Ni(e) {
    nt === null ? nt = e : nt.push.apply(nt, e);
  }
  function qm(e) {
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
    for (t &= ~Ei, t &= ~da, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - kt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Vc(e) {
    if ((fe & 6) !== 0) throw Error(s(327));
    cr();
    var t = Nl(e, 0);
    if ((t & 1) === 0) return rt(e, ze()), null;
    var n = ya(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = no(e);
      r !== 0 && (t = r, n = Si(e, r));
    }
    if (n === 1) throw n = el, Mn(e, 0), hn(e, t), rt(e, ze()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ln(e, nt, Qt), rt(e, ze()), null;
  }
  function xi(e, t) {
    var n = fe;
    fe |= 1;
    try {
      return e(t);
    } finally {
      fe = n, fe === 0 && (ur = ze() + 500, Vl && sn());
    }
  }
  function Pn(e) {
    mn !== null && mn.tag === 0 && (fe & 6) === 0 && cr();
    var t = fe;
    fe |= 1;
    var n = yt.transition, r = ge;
    try {
      if (yt.transition = null, ge = 1, e) return e();
    } finally {
      ge = r, yt.transition = n, fe = t, (fe & 6) === 0 && sn();
    }
  }
  function Ti() {
    ct = sr.current, Ne(sr);
  }
  function Mn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Cm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Oo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && bl();
          break;
        case 3:
          ar(), Ne(Ze), Ne(qe), Ko();
          break;
        case 5:
          qo(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          Ne(Me);
          break;
        case 19:
          Ne(Me);
          break;
        case 10:
          bo(r.type._context);
          break;
        case 22:
        case 23:
          Ti();
      }
      n = n.return;
    }
    if (be = e, Fe = e = vn(e.current, null), Qe = ct = t, Ue = 0, el = null, Ei = da = Rn = 0, nt = tl = null, Nn !== null) {
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
  function Hc(e, t) {
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
          if (t = Qe, y.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var $ = E, F = y, j = F.tag;
            if ((F.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var O = F.alternate;
              O ? (F.updateQueue = O.updateQueue, F.memoizedState = O.memoizedState, F.lanes = O.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var W = vc(d);
            if (W !== null) {
              W.flags &= -257, yc(W, d, y, i, t), W.mode & 1 && hc(i, $, t), t = W, E = $;
              var Y = t.updateQueue;
              if (Y === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(E), t.updateQueue = G;
              } else Y.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                hc(i, $, t), Ri();
                break e;
              }
              E = Error(s(426));
            }
          } else if (Te && y.mode & 1) {
            var Oe = vc(d);
            if (Oe !== null) {
              (Oe.flags & 65536) === 0 && (Oe.flags |= 256), yc(Oe, d, y, i, t), jo(or(E, y));
              break e;
            }
          }
          i = E = or(E, y), Ue !== 4 && (Ue = 2), tl === null ? tl = [i] : tl.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var R = mc(i, E, t);
                Uu(i, R);
                break e;
              case 1:
                y = E;
                var k = i.type, M = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (fn === null || !fn.has(M)))) {
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
      } catch (J) {
        t = J, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qc() {
    var e = ca.current;
    return ca.current = la, e === null ? la : e;
  }
  function Ri() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), be === null || (Rn & 268435455) === 0 && (da & 268435455) === 0 || hn(be, Qe);
  }
  function ya(e, t) {
    var n = fe;
    fe |= 2;
    var r = Qc();
    (be !== e || Qe !== t) && (Qt = null, Mn(e, t));
    do
      try {
        Ym();
        break;
      } catch (a) {
        Hc(e, a);
      }
    while (!0);
    if (Bo(), fe = n, ca.current = r, Fe !== null) throw Error(s(261));
    return be = null, Qe = 0, Ue;
  }
  function Ym() {
    for (; Fe !== null; ) qc(Fe);
  }
  function Km() {
    for (; Fe !== null && !Ef(); ) qc(Fe);
  }
  function qc(e) {
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
        if (n = bm(n, t), n !== null) {
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
    var r = ge, a = yt.transition;
    try {
      yt.transition = null, ge = 1, Gm(e, t, n, r);
    } finally {
      yt.transition = a, ge = r;
    }
    return null;
  }
  function Gm(e, t, n, r) {
    do
      cr();
    while (mn !== null);
    if ((fe & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Mf(e, i), e === be && (Fe = be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ma || (ma = !0, Jc(wl, function() {
      return cr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = yt.transition, yt.transition = null;
      var d = ge;
      ge = 1;
      var y = fe;
      fe |= 4, _i.current = null, Vm(e, n), Fc(n, e), vm(Ro), Rl = !!To, Ro = To = null, e.current = n, Hm(n), wf(), fe = y, ge = d, yt.transition = i;
    } else e.current = n;
    if (ma && (ma = !1, mn = e, pa = a), i = e.pendingLanes, i === 0 && (fn = null), Sf(n.stateNode), rt(e, ze()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (fa) throw fa = !1, e = ki, ki = null, e;
    return (pa & 1) !== 0 && e.tag !== 0 && cr(), i = e.pendingLanes, (i & 1) !== 0 ? e === Ci ? nl++ : (nl = 0, Ci = e) : nl = 0, sn(), null;
  }
  function cr() {
    if (mn !== null) {
      var e = Os(pa), t = yt.transition, n = ge;
      try {
        if (yt.transition = null, ge = 16 > e ? 16 : e, mn === null) var r = !1;
        else {
          if (e = mn, mn = null, pa = 0, (fe & 6) !== 0) throw Error(s(331));
          var a = fe;
          for (fe |= 4, Q = e.current; Q !== null; ) {
            var i = Q, d = i.child;
            if ((Q.flags & 16) !== 0) {
              var y = i.deletions;
              if (y !== null) {
                for (var E = 0; E < y.length; E++) {
                  var $ = y[E];
                  for (Q = $; Q !== null; ) {
                    var F = Q;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, F, i);
                    }
                    var j = F.child;
                    if (j !== null) j.return = F, Q = j;
                    else for (; Q !== null; ) {
                      F = Q;
                      var O = F.sibling, W = F.return;
                      if (Ic(F), F === $) {
                        Q = null;
                        break;
                      }
                      if (O !== null) {
                        O.return = W, Q = O;
                        break;
                      }
                      Q = W;
                    }
                  }
                }
                var Y = i.alternate;
                if (Y !== null) {
                  var G = Y.child;
                  if (G !== null) {
                    Y.child = null;
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
                  Zr(9, i, i.return);
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
            var M = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && M !== null) M.return = d, Q = M;
            else e: for (d = k; Q !== null; ) {
              if (y = Q, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ua(9, y);
                }
              } catch (J) {
                De(y, y.return, J);
              }
              if (y === d) {
                Q = null;
                break e;
              }
              var U = y.sibling;
              if (U !== null) {
                U.return = y.return, Q = U;
                break e;
              }
              Q = y.return;
            }
          }
          if (fe = a, sn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(kl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ge = n, yt.transition = t;
      }
    }
    return !1;
  }
  function Kc(e, t, n) {
    t = or(n, t), t = mc(e, t, 1), e = cn(e, t, 1), t = Je(), e !== null && (xr(e, 1, t), rt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (fn === null || !fn.has(r))) {
          e = or(n, e), e = pc(t, e, 1), t = cn(t, e, 1), e = Je(), t !== null && (xr(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Xm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Je(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Qe & n) === n && (Ue === 4 || Ue === 3 && (Qe & 130023424) === Qe && 500 > ze() - wi ? Mn(e, 0) : Ei |= n), rt(e, t);
  }
  function Gc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Sl, Sl <<= 1, (Sl & 130023424) === 0 && (Sl = 4194304)));
    var n = Je();
    e = Wt(e, t), e !== null && (xr(e, t, n), rt(e, n));
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
    else tt = !1, Te && (t.flags & 1048576) !== 0 && Mu(t, Ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var a = Jn(t, qe.current);
        lr(t, n), a = Jo(null, t, r, e, a, n);
        var i = Zo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (i = !0, Wl(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ho(t), a.updater = aa, t.stateNode = a, a._reactInternals = t, ai(t, r, e, n), t = ui(null, t, r, !0, i, n)) : (t.tag = 0, Te && i && zo(t), Xe(null, t, a, n), t = t.child), t;
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
          } else for (ut = ln(t.stateNode.containerInfo.firstChild), st = t, Te = !0, St = null, n = Au(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (tr(), r === a) {
              t = Ht(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return bu(t), e === null && Fo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = a.children, Po(r, a) ? d = null : i !== null && Po(r, i) && (t.flags |= 32), kc(e, t), Xe(e, t, d, n), t.child;
      case 6:
        return e === null && Fo(t), null;
      case 13:
        return xc(e, t, n);
      case 4:
        return Qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Xe(e, t, r, n), t.child;
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
          if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, d = a.value, ke(Kl, r._currentValue), r._currentValue = d, i !== null) if (Ct(i.value, d)) {
            if (i.children === a.children && !Ze.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var y = i.dependencies;
            if (y !== null) {
              d = i.child;
              for (var E = y.firstContext; E !== null; ) {
                if (E.context === r) {
                  if (i.tag === 1) {
                    E = Vt(-1, n & -n), E.tag = 2;
                    var $ = i.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var F = $.pending;
                      F === null ? E.next = E : (E.next = F.next, F.next = E), $.pending = E;
                    }
                  }
                  i.lanes |= n, E = i.alternate, E !== null && (E.lanes |= n), Wo(
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
              d.lanes |= n, y = d.alternate, y !== null && (y.lanes |= n), Wo(d, n, t), d = i.sibling;
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Nt(r, a), ia(e, t), t.tag = 1, et(r) ? (e = !0, Wl(t)) : e = !1, lr(t, n), dc(t, r, a), ai(t, r, a, n), ui(null, t, r, !0, e, n);
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
      if (e = e.$$typeof, e === le) return 11;
      if (e === X) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ga(e, t, n, r, a, i) {
    var d = 2;
    if (r = e, typeof e == "function") Pi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case ae:
        return $n(n.children, a, i, t);
      case oe:
        d = 8, a |= 8;
        break;
      case _e:
        return e = gt(12, n, t, a | 2), e.elementType = _e, e.lanes = i, e;
      case Pe:
        return e = gt(13, n, t, a), e.elementType = Pe, e.lanes = i, e;
      case Ae:
        return e = gt(19, n, t, a), e.elementType = Ae, e.lanes = i, e;
      case Ie:
        return _a(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ce:
            d = 10;
            break e;
          case K:
            d = 9;
            break e;
          case le:
            d = 11;
            break e;
          case X:
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
  function $n(e, t, n, r) {
    return e = gt(7, e, r, t), e.lanes = n, e;
  }
  function _a(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = Ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
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
  function $i(e, t, n, r, a, i, d, y, E) {
    return e = new np(e, t, n, y, E), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = gt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ho(i), e;
  }
  function rp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Zc(e) {
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
      if (et(n)) return Tu(e, n, t);
    }
    return t;
  }
  function ed(e, t, n, r, a, i, d, y, E) {
    return e = $i(n, r, !0, e, a, i, d, y, E), e.context = Zc(null), n = e.current, r = Je(), a = pn(n), i = Vt(r, a), i.callback = t ?? null, cn(n, i, a), e.current.lanes = a, xr(e, a, r), rt(e, r), e;
  }
  function Ea(e, t, n, r) {
    var a = t.current, i = Je(), d = pn(a);
    return n = Zc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vt(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = cn(a, t, d), e !== null && (Rt(e, a, d, i), Xl(e, a, d)), d;
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
  function Ii(e, t) {
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
      for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
      tn.splice(n, 0, e), n === 0 && bs(e);
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
          var $ = wa(d);
          i.call($);
        };
      }
      var d = ed(t, r, e, 0, null, !1, !1, "", rd);
      return e._reactRootContainer = d, e[jt] = d.current, Ur(e.nodeType === 8 ? e.parentNode : e), Pn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var y = r;
      r = function() {
        var $ = wa(E);
        y.call($);
      };
    }
    var E = $i(e, 0, !1, null, null, !1, !1, "", rd);
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
          n !== 0 && (lo(t, n | 1), rt(t, ze()), (fe & 6) === 0 && (ur = ze() + 500, sn()));
        }
        break;
      case 13:
        Pn(function() {
          var r = Wt(e, 1);
          if (r !== null) {
            var a = Je();
            Rt(r, e, 1, a);
          }
        }), Ii(e, 1);
    }
  }, ao = function(e) {
    if (e.tag === 13) {
      var t = Wt(e, 134217728);
      if (t !== null) {
        var n = Je();
        Rt(t, e, 134217728, n);
      }
      Ii(e, 134217728);
    }
  }, Fs = function(e) {
    if (e.tag === 13) {
      var t = pn(e), n = Wt(e, t);
      if (n !== null) {
        var r = Je();
        Rt(n, e, t, r);
      }
      Ii(e, t);
    }
  }, js = function() {
    return ge;
  }, Us = function(e, t) {
    var n = ge;
    try {
      return ge = e, t();
    } finally {
      ge = n;
    }
  }, Xa = function(e, t, n) {
    switch (t) {
      case "input":
        if (Wa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Bl(r);
              if (!a) throw Error(s(90));
              cs(r), Wa(r, a);
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
  var op = { usingClientEntryPoint: !1, Events: [Wr, Gn, Bl, ks, Cs, xi] }, rl = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ip = { bundleType: rl.bundleType, version: rl.version, rendererPackageName: rl.rendererPackageName, rendererConfig: rl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
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
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = $i(e, 1, !1, null, null, n, !1, r, a), e[jt] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new Di(t);
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
      hash: g = ""
    } = Fn(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Ji(
      "",
      { pathname: p, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function s(f, m) {
    let p = f.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let g = f.location.href, C = g.indexOf("#");
      h = C === -1 ? g : g.slice(0, C);
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
function Re(l, o) {
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
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", g = null, C = S();
  C == null && (C = 0, p.replaceState({ ...p.state, idx: C }, ""));
  function S() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let w = S(), D = w == null ? null : w - C;
    C = w, g && g({ action: h, location: L.location, delta: D });
  }
  function T(w, D) {
    h = "PUSH";
    let N = fd(w) ? w : Ji(L.location, w, D);
    s && s(N, w), C = S() + 1;
    let z = md(N, C), b = L.createHref(N.mask || N);
    try {
      p.pushState(z, "", b);
    } catch (V) {
      if (V instanceof DOMException && V.name === "DataCloneError")
        throw V;
      f.location.assign(b);
    }
    m && g && g({ action: h, location: L.location, delta: 1 });
  }
  function P(w, D) {
    h = "REPLACE";
    let N = fd(w) ? w : Ji(L.location, w, D);
    s && s(N, w), C = S();
    let z = md(N, C), b = L.createHref(N.mask || N);
    p.replaceState(z, "", b), m && g && g({ action: h, location: L.location, delta: 0 });
  }
  function I(w) {
    return _p(f, w);
  }
  let L = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(w) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(dd, _), g = w, () => {
        f.removeEventListener(dd, _), g = null;
      };
    },
    createHref(w) {
      return o(f, w);
    },
    createURL: I,
    encodeLocation(w) {
      let D = I(w);
      return {
        pathname: D.pathname,
        search: D.search,
        hash: D.hash
      };
    },
    push: T,
    replace: P,
    go(w) {
      return p.go(w);
    }
  };
  return L;
}
function _p(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Re(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : cl(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Ad(l, o, s = "/") {
  return Ep(l, o, s, !1);
}
function Ep(l, o, s, c, f) {
  let m = typeof o == "string" ? Fn(o) : o, p = Yt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = wp(l), g = null, C = Ip(p);
  for (let S = 0; g == null && S < h.length; ++S)
    g = Lp(
      h[S],
      C,
      c
    );
  return g;
}
function wp(l) {
  let o = Fd(l);
  return kp(o), o;
}
function Fd(l, o = [], s = [], c = "", f = !1) {
  let m = (p, h, g = f, C) => {
    let S = {
      relativePath: C === void 0 ? p.path || "" : C,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(c) && g)
        return;
      Re(
        S.relativePath.startsWith(c),
        `Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(c.length);
    }
    let _ = Pt([c, S.relativePath]), T = s.concat(S);
    p.children && p.children.length > 0 && (Re(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), Fd(
      p.children,
      o,
      T,
      _,
      g
    )), !(p.path == null && !p.index) && o.push({
      path: _,
      score: Pp(_, p.index),
      routesMeta: T
    });
  };
  return l.forEach((p, h) => {
    var g;
    if (p.path === "" || !((g = p.path) != null && g.includes("?")))
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
      (g) => g === "" ? m : [m, g].join("/")
    )
  ), f && h.push(...p), h.map(
    (g) => l.startsWith("/") && g === "" ? "/" : g
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
    let g = c[h], C = h === c.length - 1, S = m === "/" ? o : o.slice(m.length) || "/", _ = za(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: C },
      S
    ), T = g.route;
    if (!_ && C && s && !c[c.length - 1].route.index && (_ = za(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      S
    )), !_)
      return null;
    Object.assign(f, _.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Pt([m, _.pathname]),
      pathnameBase: Ap(
        Pt([m, _.pathnameBase])
      ),
      route: T
    }), _.pathnameBase !== "/" && (m = Pt([m, _.pathnameBase]));
  }
  return p;
}
function za(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = $p(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (C, { paramName: S, isOptional: _ }, T) => {
        if (S === "*") {
          let I = h[T] || "";
          p = m.slice(0, m.length - I.length).replace(/(.)\/+$/, "$1");
        }
        const P = h[T];
        return _ && !P ? C[S] = void 0 : C[S] = (P || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function $p(l, o = !1, s = !0) {
  _t(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, g, C, S) => {
      if (c.push({ paramName: h, isOptional: g != null }), g) {
        let _ = S.charAt(C + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function Ip(l) {
  try {
    return l.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return _t(
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
  typeof l == "string" ? f = Fn(l) : (f = { ...l }, Re(
    !f.pathname || !f.pathname.includes("?"),
    Ui("?", "pathname", "search", f)
  ), Re(
    !f.pathname || !f.pathname.includes("#"),
    Ui("#", "pathname", "hash", f)
  ), Re(
    !f.search || !f.search.includes("#"),
    Ui("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let _ = o.length - 1;
    if (!c && p.startsWith("..")) {
      let T = p.split("/");
      for (; T[0] === ".."; )
        T.shift(), _ -= 1;
      f.pathname = T.join("/");
    }
    h = _ >= 0 ? o[_] : "/";
  }
  let g = zp(f, h), C = p && p !== "/" && p.endsWith("/"), S = (m || p === ".") && s.endsWith("/");
  return !g.pathname.endsWith("/") && (C || S) && (g.pathname += "/"), g;
}
var Ud = (l) => l.replace(/\/\/+/g, "/"), Pt = (l) => Ud(l.join("/")), Oa = (l) => l.replace(/\/+$/, ""), Ap = (l) => Oa(l).replace(/^\/*/, "/"), Fp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, jp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Up = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Bp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function bp(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Pt(o) || "/";
}
var Bd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function bd(l, o) {
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
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), h = Yt(p.pathname, o);
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
var Wd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Wd
);
var Wp = [
  "GET",
  ...Wd
];
new Set(Wp);
var mr = v.createContext(null);
mr.displayName = "DataRouter";
var Ua = v.createContext(null);
Ua.displayName = "DataRouterState";
var Vd = v.createContext(!1);
function Vp() {
  return v.useContext(Vd);
}
var Hd = v.createContext({
  isTransitioning: !1
});
Hd.displayName = "ViewTransition";
var Hp = v.createContext(
  /* @__PURE__ */ new Map()
);
Hp.displayName = "Fetchers";
var Qp = v.createContext(null);
Qp.displayName = "Await";
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
var Qd = "REACT_ROUTER_ERROR", qp = "REDIRECT", Yp = "ROUTE_ERROR_RESPONSE";
function Kp(l) {
  if (l.startsWith(`${Qd}:${qp}:{`))
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
  Re(
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
  return Re(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(dl).location;
}
var qd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Yd(l) {
  v.useContext(ft).static || v.useLayoutEffect(l);
}
function hr() {
  let { isDataRoute: l } = v.useContext(Ft);
  return l ? ch() : Jp();
}
function Jp() {
  Re(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(mr), { basename: o, navigator: s } = v.useContext(ft), { matches: c } = v.useContext(Ft), { pathname: f } = Et(), m = JSON.stringify(ns(c)), p = v.useRef(!1);
  return Yd(() => {
    p.current = !0;
  }), v.useCallback(
    (g, C = {}) => {
      if (_t(p.current, qd), !p.current) return;
      if (typeof g == "number") {
        s.go(g);
        return;
      }
      let S = ja(
        g,
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
  var w;
  Re(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(ft), { matches: f } = v.useContext(Ft), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", g = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let D = C && C.path || "";
    Xd(
      h,
      !C || D.endsWith("*") || D.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D === "/" ? "*" : `${D}/*`}">.`
    );
  }
  let S = Et(), _;
  if (o) {
    let D = typeof o == "string" ? Fn(o) : o;
    Re(
      g === "/" || ((w = D.pathname) == null ? void 0 : w.startsWith(g)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`
    ), _ = D;
  } else
    _ = S;
  let T = _.pathname || "/", P = T;
  if (g !== "/") {
    let D = g.replace(/^\//, "").split("/");
    P = "/" + T.replace(/^\//, "").split("/").slice(D.length).join("/");
  }
  let I = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (D) => Object.assign(D, {
        route: s.manifest[D.route.id] || D.route
      })
    )
  ) : Ad(l, { pathname: P });
  _t(
    C || I != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), _t(
    I == null || I[I.length - 1].route.element !== void 0 || I[I.length - 1].route.Component !== void 0 || I[I.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let L = lh(
    I && I.map(
      (D) => Object.assign({}, D, {
        params: Object.assign({}, p, D.params),
        pathname: Pt([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            D.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : D.pathname
        ]),
        pathnameBase: D.pathnameBase === "/" ? g : Pt([
          g,
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
          ..._
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
Gd.contextType = Vd;
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
      let m = bd(c.location, s);
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
      (_) => _.route.id && (m == null ? void 0 : m[_.route.id]) !== void 0
    );
    Re(
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
      let _ = f[S];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = S), _.route.id) {
        let { loaderData: T, errors: P } = c, I = _.route.loader && !T.hasOwnProperty(_.route.id) && (!P || P[_.route.id] === void 0);
        if (_.route.lazy || I) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let g = s == null ? void 0 : s.onError, C = c && g ? (S, _) => {
    var T, P;
    g(S, {
      location: c.location,
      params: ((P = (T = c.matches) == null ? void 0 : T[0]) == null ? void 0 : P.params) ?? {},
      pattern: bp(c.matches),
      errorInfo: _
    });
  } : void 0;
  return f.reduceRight(
    (S, _, T) => {
      let P, I = !1, L = null, w = null;
      c && (P = m && _.route.id ? m[_.route.id] : void 0, L = _.route.errorElement || th, p && (h < 0 && T === 0 ? (Xd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), I = !0, w = null) : h === T && (I = !0, w = _.route.hydrateFallbackElement || null)));
      let D = o.concat(f.slice(0, T + 1)), N = () => {
        let z;
        return P ? z = L : I ? z = w : _.route.Component ? z = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? z = _.route.element : z = S, /* @__PURE__ */ v.createElement(
          rh,
          {
            match: _,
            routeContext: {
              outlet: S,
              matches: D,
              isDataRoute: c != null
            },
            children: z
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || T === 0) ? /* @__PURE__ */ v.createElement(
        Gd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: L,
          error: P,
          children: N(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
          onError: C
        }
      ) : N();
    },
    null
  );
}
function ls(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ah(l) {
  let o = v.useContext(mr);
  return Re(o, ls(l)), o;
}
function oh(l) {
  let o = v.useContext(Ua);
  return Re(o, ls(l)), o;
}
function ih(l) {
  let o = v.useContext(Ft);
  return Re(o, ls(l)), o;
}
function as(l) {
  let o = ih(l), s = o.matches[o.matches.length - 1];
  return Re(
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
      _t(s.current, qd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
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
  Re(
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
  let { matches: m } = v.useContext(Ft), { pathname: p } = Et(), h = hr(), g = ja(
    l,
    ns(m),
    p,
    c === "path"
  ), C = JSON.stringify(g);
  return v.useEffect(() => {
    h(JSON.parse(C), { replace: o, state: s, relative: c });
  }, [h, C, c, o, s]), null;
}
function at(l) {
  Re(
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
  Re(
    !pr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), g = v.useMemo(
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
    hash: _ = "",
    state: T = null,
    key: P = "default",
    mask: I
  } = s, L = v.useMemo(() => {
    let w = Yt(C, h);
    return w == null ? null : {
      location: {
        pathname: w,
        search: S,
        hash: _,
        state: T,
        key: P,
        mask: I
      },
      navigationType: c
    };
  }, [h, C, S, _, T, P, c, I]);
  return _t(
    L != null,
    `<Router basename="${h}"> is not able to match the URL "${C}${S}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), L == null ? null : /* @__PURE__ */ v.createElement(ft.Provider, { value: g }, /* @__PURE__ */ v.createElement(dl.Provider, { children: o, value: L }));
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
    Re(
      c.type === at,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Re(
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
var Ia = "get", Da = "application/x-www-form-urlencoded";
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
function bi(l) {
  return l != null && !Eh.has(l) ? (_t(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`
  ), null) : l;
}
function wh(l, o) {
  let s, c, f, m, p;
  if (hh(l)) {
    let h = l.getAttribute("action");
    c = h ? Yt(h, o) : null, s = l.getAttribute("method") || Ia, f = bi(l.getAttribute("enctype")) || Da, m = new FormData(l);
  } else if (ph(l) || vh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = g ? Yt(g, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || Ia, f = bi(l.getAttribute("formenctype")) || bi(h.getAttribute("enctype")) || Da, m = new FormData(h, l), !_h()) {
      let { name: C, type: S, value: _ } = l;
      if (S === "image") {
        let T = C ? `${C}.` : "";
        m.append(`${T}x`, "0"), m.append(`${T}y`, "0");
      } else C && m.append(C, _);
    }
  } else {
    if (Ba(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Ia, c = null, f = Da, p = l;
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
  let p = (g, C) => s[C] ? g.route.id !== s[C].route.id : !0, h = (g, C) => {
    var S;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== g.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((S = s[C].route.path) == null ? void 0 : S.endsWith("*")) && s[C].params["*"] !== g.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (g, C) => p(g, C) || h(g, C)
  ) : m === "data" ? o.filter((g, C) => {
    var _;
    let S = c.routes[g.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (p(g, C) || h(g, C))
      return !0;
    if (g.route.shouldRevalidate) {
      let T = g.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((_ = s[0]) == null ? void 0 : _.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean")
        return T;
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
  let s = v.useContext(ss), [c, f] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: g, onMouseEnter: C, onMouseLeave: S, onTouchStart: _ } = o, T = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let L = (D) => {
        D.forEach((N) => {
          p(N.isIntersecting);
        });
      }, w = new IntersectionObserver(L, { threshold: 0.5 });
      return T.current && w.observe(T.current), () => {
        w.disconnect();
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
  }, I = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, T, {}] : [
    m,
    T,
    {
      onFocus: ll(h, P),
      onBlur: ll(g, I),
      onMouseEnter: ll(C, P),
      onMouseLeave: ll(S, I),
      onTouchStart: ll(_, P)
    }
  ] : [!1, T, {}];
}
function ll(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function Lh({ page: l, ...o }) {
  let s = Vp(), { router: c } = is(), f = v.useMemo(
    () => Ad(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ v.createElement(Ih, { page: l, matches: f, ...o }) : /* @__PURE__ */ v.createElement(Dh, { page: l, matches: f, ...o }) : null;
}
function $h(l) {
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
function Ih({
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
    ), g = !1, C = [];
    for (let S of o)
      typeof S.route.shouldRevalidate == "function" ? g = !0 : C.push(S.route.id);
    return g && C.length > 0 && h.searchParams.set("_routes", C.join(",")), [h.pathname + h.search];
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
  let c = Et(), { future: f, manifest: m, routeModules: p } = us(), { basename: h } = is(), { loaderData: g, matches: C } = Ph(), S = v.useMemo(
    () => yd(
      l,
      o,
      C,
      m,
      c,
      "data"
    ),
    [l, o, C, m, c]
  ), _ = v.useMemo(
    () => yd(
      l,
      o,
      C,
      m,
      c,
      "assets"
    ),
    [l, o, C, m, c]
  ), T = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let L = /* @__PURE__ */ new Set(), w = !1;
    if (o.forEach((N) => {
      var b;
      let z = m.routes[N.route.id];
      !z || !z.hasLoader || (!S.some((V) => V.route.id === N.route.id) && N.route.id in g && ((b = p[N.route.id]) != null && b.shouldRevalidate) || z.hasClientLoader ? w = !0 : L.add(N.route.id));
    }), L.size === 0)
      return [];
    let D = Jd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return w && L.size > 0 && D.searchParams.set(
      "_routes",
      o.filter((N) => L.has(N.route.id)).map((N) => N.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    g,
    c,
    m,
    S,
    o,
    l,
    p
  ]), P = v.useMemo(
    () => Nh(_, m),
    [_, m]
  ), I = $h(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, T.map((L) => /* @__PURE__ */ v.createElement("link", { key: L, rel: "prefetch", as: "fetch", href: L, ...s })), P.map((L) => /* @__PURE__ */ v.createElement("link", { key: L, rel: "modulepreload", href: L, ...s })), I.map(({ key: L, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: L,
        nonce: s.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? s.crossOrigin
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
  }), g = v.useCallback(
    (C) => {
      s === !1 ? h(C) : v.startTransition(() => h(C));
    },
    [s]
  );
  return v.useLayoutEffect(() => m.listen(g), [m, g]), /* @__PURE__ */ v.createElement(
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
    state: g,
    target: C,
    to: S,
    preventScrollReset: _,
    viewTransition: T,
    defaultShouldRevalidate: P,
    ...I
  }, L) {
    let { basename: w, navigator: D, useTransitions: N } = v.useContext(ft), z = typeof S == "string" && Zd.test(S), b = bd(S, w);
    S = b.to;
    let V = Xp(S, { relative: f }), H = Et(), ae = null;
    if (h) {
      let X = ja(
        h,
        [],
        H.mask ? H.mask.pathname : "/",
        !0
      );
      w !== "/" && (X.pathname = X.pathname === "/" ? w : Pt([w, X.pathname])), ae = D.createHref(X);
    }
    let [oe, _e, Ce] = Mh(
      c,
      I
    ), K = Uh(S, {
      replace: p,
      mask: h,
      state: g,
      target: C,
      preventScrollReset: _,
      relative: f,
      viewTransition: T,
      defaultShouldRevalidate: P,
      useTransitions: N
    });
    function le(X) {
      o && o(X), X.defaultPrevented || K(X);
    }
    let Pe = !(b.isExternal || m), Ae = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...I,
          ...Ce,
          href: (Pe ? ae : void 0) || b.absoluteURL || V,
          onClick: Pe ? le : o,
          ref: zh(L, _e),
          target: C,
          "data-discover": !z && s === "render" ? "true" : void 0
        }
      )
    );
    return oe && !z ? /* @__PURE__ */ v.createElement(v.Fragment, null, Ae, /* @__PURE__ */ v.createElement(Lh, { page: V })) : Ae;
  }
);
ef.displayName = "Link";
var Ve = v.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: g,
    ...C
  }, S) {
    let _ = fl(p, { relative: C.relative }), T = Et(), P = v.useContext(Ua), { navigator: I, basename: L } = v.useContext(ft), w = P != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Hh(_) && h === !0, D = I.encodeLocation ? I.encodeLocation(_).pathname : _.pathname, N = T.pathname, z = P && P.navigation && P.navigation.location ? P.navigation.location.pathname : null;
    s || (N = N.toLowerCase(), z = z ? z.toLowerCase() : null, D = D.toLowerCase()), z && L && (z = Yt(z, L) || z);
    const b = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
    let V = N === D || !f && N.startsWith(D) && N.charAt(b) === "/", H = z != null && (z === D || !f && z.startsWith(D) && z.charAt(D.length) === "/"), ae = {
      isActive: V,
      isPending: H,
      isTransitioning: w
    }, oe = V ? o : void 0, _e;
    typeof c == "function" ? _e = c(ae) : _e = [
      c,
      V ? "active" : null,
      H ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Ce = typeof m == "function" ? m(ae) : m;
    return /* @__PURE__ */ v.createElement(
      ef,
      {
        ...C,
        "aria-current": oe,
        className: _e,
        ref: S,
        style: Ce,
        to: p,
        viewTransition: h
      },
      typeof g == "function" ? g(ae) : g
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
    method: p = Ia,
    action: h,
    onSubmit: g,
    relative: C,
    preventScrollReset: S,
    viewTransition: _,
    defaultShouldRevalidate: T,
    ...P
  }, I) => {
    let { useTransitions: L } = v.useContext(ft), w = Wh(), D = Vh(h, { relative: C }), N = p.toLowerCase() === "get" ? "get" : "post", z = typeof h == "string" && Zd.test(h), b = (V) => {
      if (g && g(V), V.defaultPrevented) return;
      V.preventDefault();
      let H = V.nativeEvent.submitter, ae = (H == null ? void 0 : H.getAttribute("formmethod")) || p, oe = () => w(H || V.currentTarget, {
        fetcherKey: o,
        method: ae,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: S,
        viewTransition: _,
        defaultShouldRevalidate: T
      });
      L && s !== !1 ? v.startTransition(() => oe()) : oe();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: I,
        method: N,
        action: D,
        onSubmit: c ? g : b,
        ...P,
        "data-discover": !z && l === "render" ? "true" : void 0
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
  return Re(o, jh(l)), o;
}
function Uh(l, {
  target: o,
  replace: s,
  mask: c,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: g,
  useTransitions: C
} = {}) {
  let S = hr(), _ = Et(), T = fl(l, { relative: p });
  return v.useCallback(
    (P) => {
      if (gh(P, o)) {
        P.preventDefault();
        let I = s !== void 0 ? s : cl(_) === cl(T), L = () => S(l, {
          replace: I,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: g
        });
        C ? v.startTransition(() => L()) : L();
      }
    },
    [
      _,
      S,
      T,
      s,
      c,
      f,
      o,
      l,
      m,
      p,
      h,
      g,
      C
    ]
  );
}
var Bh = 0, bh = () => `__${String(++Bh)}__`;
function Wh() {
  let { router: l } = tf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(ft), s = sh(), c = l.fetch, f = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: g, encType: C, formData: S, body: _ } = wh(
        m,
        o
      );
      if (p.navigate === !1) {
        let T = p.fetcherKey || bh();
        await c(T, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: _,
          formMethod: p.method || g,
          formEncType: p.encType || C,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: _,
          formMethod: p.method || g,
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
  let { basename: s } = v.useContext(ft), c = v.useContext(Ft);
  Re(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...fl(l || ".", { relative: o }) }, p = Et();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), g = h.getAll("index");
    if (g.some((S) => S === "")) {
      h.delete("index"), g.filter((_) => _).forEach((_) => h.append("index", _));
      let S = h.toString();
      m.search = S ? `?${S}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Pt([s, m.pathname])), cl(m);
}
function Hh(l, { relative: o } = {}) {
  let s = v.useContext(Hd);
  Re(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = tf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = fl(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Yt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Yt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return za(f.pathname, p) != null || za(f.pathname, m) != null;
}
var Qh = Od(), es = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new WeakMap(), gd = 0, qh;
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
        var g;
        const C = h.isIntersecting && f.some((S) => h.intersectionRatio >= S);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = C), [...(g = c.get(h.target)) != null ? g : []].forEach((S) => {
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
function Xh(l, o, s = {}, c = qh) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const g = l.getBoundingClientRect();
    return o(c, {
      isIntersecting: c,
      target: l,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: g,
      intersectionRect: g,
      rootBounds: g
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
  fallbackInView: g,
  onChange: C
} = {}) {
  var S;
  const [_, T] = v.useState(null), P = v.useRef(C), I = v.useRef(h), [L, w] = v.useState({
    inView: !!h,
    entry: void 0
  });
  P.current = C, v.useEffect(
    () => {
      if (I.current === void 0 && (I.current = h), p || !_) return;
      let b;
      return b = Xh(
        _,
        (V, H) => {
          const ae = I.current;
          I.current = V, !(ae === void 0 && !V) && (w({
            inView: V,
            entry: H
          }), P.current && P.current(V, H), H.isIntersecting && m && b && (b(), b = void 0));
        },
        {
          root: f,
          rootMargin: c,
          threshold: l,
          // @ts-expect-error
          trackVisibility: s,
          delay: o
        },
        g
      ), () => {
        b && b();
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
      g,
      o
    ]
  );
  const D = (S = L.entry) == null ? void 0 : S.target, N = v.useRef(void 0);
  !_ && D && !m && !p && N.current !== D && (N.current = D, w({
    inView: !!h,
    entry: void 0
  }), I.current = h);
  const z = [T, L.inView, L.entry];
  return z.ref = z[0], z.inView = z[1], z.entry = z[2], z;
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
    async (T = 1, P = !1) => {
      s(!0);
      try {
        const I = Jh(
          await l._getShort(
            "get_script_actions_short",
            T
          )
        );
        f((L) => !P || !L ? I : {
          ...I,
          script_actions: [
            ...L.script_actions,
            ...I.script_actions
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
    saveScript: async (T) => {
      await l._save(T, "save_script_action"), await p(1);
    },
    updateScript: async (T, P) => {
      await l._update(T, "update_script_action", P), await p(1);
    },
    getScriptAction: async (T) => (await l._getDetail(
      T,
      "get_script_action"
    )).data,
    deleteScriptAction: async (T) => {
      await l._delete(T, "delete_script_action"), await p(1);
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
), av = "_button_2udlt_1", ov = "_full_2udlt_32", iv = "_primary_2udlt_37", sv = "_secondary_2udlt_50", uv = "_ghost_2udlt_62", Wi = {
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
        ${Wi.button}
        ${Wi[o]}
        ${s ? Wi.full : ""}
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
)), mv = "_overlay_1ew9y_1", pv = "_modal_1ew9y_13", hv = "_sm_1ew9y_27", vv = "_md_1ew9y_31", yv = "_lg_1ew9y_35", gv = "_xl_1ew9y_39", _v = "_header_1ew9y_43", Ev = "_title_1ew9y_53", wv = "_body_1ew9y_60", kv = "_footer_1ew9y_67", Cv = "_close_1ew9y_76", gn = {
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
) : null), Sv = "_overlay_w83z1_1", Nv = "_sheet_w83z1_11", xv = "_handle_w83z1_21", In = {
  overlay: Sv,
  sheet: Nv,
  handle: xv
}, lf = ({
  open: l,
  onClose: o,
  children: s
}) => {
  const [c, f] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), g = v.useRef(0), [C, S] = v.useState(0);
  v.useEffect(() => {
    if (l)
      f(!0), requestAnimationFrame(() => {
        p(!0);
      }), document.body.style.overflow = "hidden";
    else {
      p(!1);
      const I = setTimeout(() => {
        f(!1);
      }, 300);
      return document.body.style.overflow = "", () => clearTimeout(I);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [l]);
  const _ = (I) => {
    h.current = I.touches[0].clientY;
  }, T = (I) => {
    g.current = I.touches[0].clientY;
    const L = g.current - h.current;
    L > 0 && S(L);
  }, P = () => {
    C > 120 && o(), S(0);
  };
  return v.useEffect(() => {
    const I = (L) => {
      L.key === "Escape" && o();
    };
    return l && window.addEventListener(
      "keydown",
      I
    ), () => {
      window.removeEventListener(
        "keydown",
        I
      );
    };
  }, [l, o]), c ? Qh.createPortal(
    /* @__PURE__ */ u.createElement(
      "div",
      {
        className: `${In.overlay} ${m ? In.visible : ""}`,
        onClick: o
      },
      /* @__PURE__ */ u.createElement(
        "section",
        {
          className: `${In.sheet} ${m ? In.open : ""}`,
          style: {
            transform: `translateY(${C}px)`,
            transition: C === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
          },
          onClick: (I) => I.stopPropagation(),
          role: "dialog",
          "aria-modal": "true"
        },
        /* @__PURE__ */ u.createElement(
          "div",
          {
            className: In.handleArea,
            onTouchStart: _,
            onTouchMove: T,
            onTouchEnd: P
          },
          /* @__PURE__ */ u.createElement("div", { className: In.handle })
        ),
        /* @__PURE__ */ u.createElement("div", { className: In.content }, s)
      )
    ),
    document.body
  ) : null;
}, Tv = "_content_1p38v_1", Rv = "_title_1p38v_7", Pv = "_actions_1p38v_14", Vi = {
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
  if (!l) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Vi.content }, /* @__PURE__ */ u.createElement("h3", { className: Vi.title }, s), /* @__PURE__ */ u.createElement("div", { className: Vi.actions }, /* @__PURE__ */ u.createElement(
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
    Kt,
    {
      open: o,
      onClose: c,
      title: "Действия",
      size: "sm"
    },
    h
  ));
}, Lv = "_accordion_1wwmk_1", $v = "_header_1wwmk_7", Iv = "_content_1wwmk_20", La = {
  accordion: Lv,
  header: $v,
  content: Iv
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
}, Dv = "_field_1u7fs_1", zv = "_label_1u7fs_8", Ov = "_input_1u7fs_16", Av = "_error_1u7fs_51", Fv = "_errorText_1u7fs_64", ol = {
  field: Dv,
  label: zv,
  input: Ov,
  error: Av,
  errorText: Fv
}, Ee = ({
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
}, jv = "_wrapper_i8msc_1", Uv = "_labelRow_i8msc_5", Bv = "_label_i8msc_5", bv = "_selectedTitle_i8msc_18", Wv = "_dropdown_i8msc_27", Vv = "_option_i8msc_42", Hv = "_title_i8msc_64", Qv = "_uuid_i8msc_69", qv = "_hint_i8msc_70", Ot = {
  wrapper: jv,
  labelRow: Uv,
  label: Bv,
  selectedTitle: bv,
  dropdown: Wv,
  option: Vv,
  title: Hv,
  uuid: Qv,
  hint: qv
}, fr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = "assistant_commands",
  minQueryLength: f = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h
}) => {
  const g = ml(), [C, S] = v.useState([]), [_, T] = v.useState(!1), [P, I] = v.useState(!1), L = v.useRef(0), w = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (w.length < f) {
      S([]), T(!1);
      return;
    }
    const N = L.current + 1;
    L.current = N;
    const z = window.setTimeout(async () => {
      I(!0);
      try {
        const b = c === "assistant_sub_commands" ? await g.searchAssistantSubCommands(w) : c === "sub_direct_controls" ? await g.searchAssistantSubDirectControls(w) : c === "sub_direct_control_samples" ? await g.searchAssistantSubDirectControlSamples(w) : await g.searchAssistantCommands(w);
        if (L.current !== N) return;
        const V = Array.isArray(b == null ? void 0 : b.data) ? b.data : [];
        S(V), T(V.length > 0);
      } finally {
        L.current === N && I(!1);
      }
    }, 250);
    return () => window.clearTimeout(z);
  }, [g, w, c, f]);
  const D = (N) => {
    const z = h ? h(N) : N.uuid;
    m(z), p == null || p(N), T(!1);
  };
  return /* @__PURE__ */ u.createElement("div", { className: Ot.wrapper }, /* @__PURE__ */ u.createElement("div", { className: Ot.labelRow }, /* @__PURE__ */ u.createElement("span", { className: Ot.label }, l), s && /* @__PURE__ */ u.createElement("span", { className: Ot.selectedTitle }, s)), /* @__PURE__ */ u.createElement(
    Ee,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      onBlur: () => window.setTimeout(() => T(!1), 150),
      onFocus: () => T(C.length > 0),
      onChange: (N) => m(N.target.value)
    }
  ), _ && /* @__PURE__ */ u.createElement("div", { className: Ot.dropdown }, C.map((N) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: N.uuid,
      type: "button",
      className: Ot.option,
      onMouseDown: (z) => z.preventDefault(),
      onClick: () => D(N)
    },
    /* @__PURE__ */ u.createElement("span", { className: Ot.title }, N.title || "Без названия"),
    /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, N.uuid),
    N.mappingType && /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, "mappingType: ", N.mappingType)
  ))), P && /* @__PURE__ */ u.createElement("span", { className: Ot.hint }, "Поиск..."));
}, Yv = "_field_xxbds_1", Kv = "_row_xxbds_5", Gv = "_inputWrapper_xxbds_11", Xv = "_deleteButton_xxbds_15", Jv = "_error_xxbds_20", qt = {
  field: Yv,
  row: Kv,
  inputWrapper: Gv,
  deleteButton: Xv,
  error: Jv
}, Zv = ({
  condition: l,
  index: o,
  defaultOpen: s,
  onChange: c,
  onDelete: f,
  totalCount: m,
  errors: p
}) => {
  const h = l.children_type !== void 0, g = l.children_direct_type !== void 0, C = () => {
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
    /* @__PURE__ */ u.createElement("div", { className: qt.field }, /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "parent_type",
        value: l.parent_type ?? "",
        searchSource: "assistant_commands",
        minQueryLength: 3,
        onChange: (_) => c({
          ...l,
          parent_type: _
        }),
        getSelectedValue: (_) => _.actionType ?? _.uuid,
        onSelect: (_) => c({
          ...l,
          parent_type: _.actionType ?? _.uuid
        })
      }
    ), (p == null ? void 0 : p.parent_type) && /* @__PURE__ */ u.createElement("div", { className: qt.error }, p.parent_type)),
    /* @__PURE__ */ u.createElement("div", { className: qt.field }, h ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: qt.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: qt.inputWrapper }, /* @__PURE__ */ u.createElement(
        fr,
        {
          label: "children_type",
          value: l.children_type ?? "",
          searchSource: "assistant_sub_commands",
          minQueryLength: 3,
          onChange: (_) => c({
            ...l,
            children_type: _
          }),
          getSelectedValue: (_) => _.actionType ?? _.uuid,
          onSelect: (_) => c({
            ...l,
            children_type: _.actionType ?? _.uuid
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
    /* @__PURE__ */ u.createElement("div", { className: qt.field }, g ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: qt.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: qt.inputWrapper }, /* @__PURE__ */ u.createElement(
        fr,
        {
          label: "children_direct_type",
          value: l.children_direct_type ?? "",
          searchSource: "sub_direct_controls",
          minQueryLength: 3,
          onChange: (_) => c({
            ...l,
            children_direct_type: _
          }),
          getSelectedValue: (_) => _.mappingType ?? _.uuid,
          onSelect: (_) => c({
            ...l,
            children_direct_type: _.mappingType ?? _.uuid
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
        className: qt.deleteButton,
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
const ey = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ty = (l) => l.replace(
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
  const o = ty(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hi = {
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
const ny = (l) => {
  for (const o in l)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
  return !1;
}, ry = v.createContext({}), ly = () => v.useContext(ry), ay = v.forwardRef(
  ({ color: l, size: o, strokeWidth: s, absoluteStrokeWidth: c, className: f = "", children: m, iconNode: p, ...h }, g) => {
    const {
      size: C = 24,
      strokeWidth: S = 2,
      absoluteStrokeWidth: _ = !1,
      color: T = "currentColor",
      className: P = ""
    } = ly() ?? {}, I = c ?? _ ? Number(s ?? S) * 24 / Number(o ?? C) : s ?? S;
    return v.createElement(
      "svg",
      {
        ref: g,
        ...Hi,
        width: o ?? C ?? Hi.width,
        height: o ?? C ?? Hi.height,
        stroke: l ?? T,
        strokeWidth: I,
        className: af("lucide", P, f),
        ...!m && !ny(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([L, w]) => v.createElement(L, w)),
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
    ({ className: c, ...f }, m) => v.createElement(ay, {
      ref: m,
      iconNode: o,
      className: af(
        `lucide-${ey(_d(l))}`,
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
const oy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], of = Mt("alarm-clock", oy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], sy = Mt("arrow-left", iy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], il = Mt("bot", uy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], dy = Mt("chevron-down", cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], my = Mt("clock-3", fy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], hy = Mt("command", py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = [
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
], yy = Mt("file-code-corner", vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], _y = Mt("house", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], sf = Mt("settings", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], ky = Mt("timer", wy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], Sy = Mt("workflow", Cy), Ny = "_dropdown_x51vc_2", xy = "_label_x51vc_9", Ty = "_wrapper_x51vc_17", Ry = "_select_x51vc_21", Py = "_arrow_x51vc_61", My = "_error_x51vc_81", Ly = "_errorText_x51vc_99", Dn = {
  dropdown: Ny,
  label: xy,
  wrapper: Ty,
  select: Ry,
  arrow: Py,
  error: My,
  errorText: Ly
};
function $y({
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
    dy,
    {
      size: 18,
      className: Dn.arrow
    }
  )), f && /* @__PURE__ */ u.createElement("span", { className: Dn.errorText }, f));
}
const Iy = "_form_q1ad6_1", Dy = "_section_q1ad6_7", zy = "_sectionTitle_q1ad6_17", Oy = "_conditions_q1ad6_36", Ay = "_addCondition_q1ad6_42", Fy = "_footer_q1ad6_63", jy = "_right_q1ad6_77", _n = {
  form: Iy,
  section: Dy,
  sectionTitle: zy,
  conditions: Oy,
  addCondition: Ay,
  footer: Fy,
  right: jy
}, Uy = ({
  open: l,
  initialData: o,
  isOptionData: s,
  isEdit: c = !1,
  loading: f = !1,
  onSave: m,
  onCancel: p
}) => {
  const [h, g] = v.useState({
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
    g({
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
  const _ = (w) => {
    g(w);
  }, T = () => {
    _({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, P = (w, D) => {
    const N = [...h.conditions];
    N[w] = D, _({
      ...h,
      conditions: N
    });
  }, I = (w) => {
    const D = h.conditions.filter(
      (N, z) => z !== w
    );
    _({
      ...h,
      conditions: D.length > 0 ? D : [
        {
          parent_type: ""
        }
      ]
    });
  }, L = () => {
    const w = {
      conditions: []
    };
    return h.name.trim() || (w.name = "Обязательное поле"), h.script_entity_id || (w.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (D, N) => {
        const z = {};
        D.parent_type.trim() || (z.parent_type = "Обязательное поле"), D.children_type !== void 0 && !D.children_type.trim() && (z.children_type = "Обязательное поле"), D.children_direct_type !== void 0 && !D.children_direct_type.trim() && (z.children_direct_type = "Обязательное поле"), w.conditions[N] = z;
      }
    ), S(w), !w.name && !w.script_entity_id && w.conditions.every(
      (D) => Object.keys(D).length === 0
    );
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: p,
      title: c ? "Редактировать сценарий" : "Создать сценарий"
    },
    /* @__PURE__ */ u.createElement("div", { className: _n.form }, /* @__PURE__ */ u.createElement("div", { className: _n.section }, /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "Название",
        value: h.name,
        error: C.name,
        onChange: (w) => _({
          ...h,
          name: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      $y,
      {
        label: "Скрипт",
        error: C.script_entity_id,
        options: s.map(
          (w) => ({
            label: w.name,
            value: w.entity_id
          })
        ),
        value: h.script_entity_id,
        onSelect: (w) => _({
          ...h,
          script_entity_id: w
        })
      }
    )), /* @__PURE__ */ u.createElement("div", { className: _n.section }, /* @__PURE__ */ u.createElement("h3", { className: _n.sectionTitle }, "Условия"), /* @__PURE__ */ u.createElement("div", { className: _n.conditions }, h.conditions.map(
      (w, D, N) => /* @__PURE__ */ u.createElement(
        Zv,
        {
          key: D,
          index: D,
          condition: w,
          defaultOpen: !c,
          errors: C.conditions[D],
          onChange: (z) => P(
            D,
            z
          ),
          onDelete: () => I(D),
          totalCount: N.length
        }
      )
    )), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        className: _n.addCondition,
        onClick: T
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
}, By = "_header_1m7ok_1", by = "_title_1m7ok_15", Wy = "_backButton_1m7ok_22", Vy = "_homeButton_1m7ok_23", $a = {
  header: By,
  title: by,
  backButton: Wy,
  homeButton: Vy
}, jn = () => {
  const l = hr(), s = Et().pathname.startsWith("/commands"), c = s ? "Команды" : "Скрипты", f = () => {
    l(s ? "/scripts" : "home assistant");
  };
  return /* @__PURE__ */ u.createElement("header", { className: $a.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: $a.backButton,
      onClick: f
    },
    /* @__PURE__ */ u.createElement(sy, { size: 18 })
  ), /* @__PURE__ */ u.createElement("h1", { className: $a.title }, c), /* @__PURE__ */ u.createElement(
    "button",
    {
      className: $a.homeButton,
      onClick: () => l("/scripts")
    },
    /* @__PURE__ */ u.createElement(_y, { size: 18 })
  ));
}, Hy = "_tabs_17nxl_1", Qy = "_dropdown_17nxl_14", qy = "_tab_17nxl_1", Yy = "_active_17nxl_43", Ky = "_menu_17nxl_53", Gy = "_menuItem_17nxl_80", ve = {
  tabs: Hy,
  dropdown: Qy,
  tab: qy,
  active: Yy,
  menu: Ky,
  menuItem: Gy
}, Gt = () => {
  if (!wt())
    return /* @__PURE__ */ u.createElement("div", { className: ve.tabs }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      /* @__PURE__ */ u.createElement(yy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ u.createElement("div", { className: ve.dropdown }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      /* @__PURE__ */ u.createElement(hy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Команды")
    ), /* @__PURE__ */ u.createElement("div", { className: ve.menu }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ve.menuItem} ${ve.active}` : ve.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${ve.menuItem} ${ve.active}` : ve.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${ve.menuItem} ${ve.active}` : ve.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${ve.menuItem} ${ve.active}` : ve.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      /* @__PURE__ */ u.createElement(ky, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      /* @__PURE__ */ u.createElement(of, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      /* @__PURE__ */ u.createElement(sf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Настройки")
    ));
}, Xy = "_nav_gn5m2_1", Ed = {
  nav: Xy
}, Xt = () => {
  const l = Et(), o = hr(), [s, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: Ed.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/commands/main" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Основные")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/sub" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Второстепенные")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/direct/main" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Прямые")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/settings" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки"))) : /* @__PURE__ */ u.createElement("nav", { className: Ed.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/scripts" }, /* @__PURE__ */ u.createElement(Sy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Скрипты")), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ u.createElement(il, { size: 20 }),
    /* @__PURE__ */ u.createElement("span", null, "Команды")
  ), /* @__PURE__ */ u.createElement(Ve, { to: "/timer" }, /* @__PURE__ */ u.createElement(my, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Таймер")), /* @__PURE__ */ u.createElement(Ve, { to: "/alarm" }, /* @__PURE__ */ u.createElement(of, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Будильник")), /* @__PURE__ */ u.createElement(Ve, { to: "/settings" }, /* @__PURE__ */ u.createElement(sf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки")));
}, Jy = "_container_a5fzw_1", Zy = "_visible_a5fzw_21", wd = {
  container: Jy,
  visible: Zy
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
}, eg = "_page_qfpja_7", tg = "_header_qfpja_15", ng = "_heading_qfpja_27", rg = "_title_qfpja_32", lg = "_description_qfpja_41", ag = "_actions_qfpja_48", og = "_list_qfpja_75", zn = {
  page: eg,
  header: tg,
  heading: ng,
  title: rg,
  description: lg,
  actions: ag,
  list: og
}, ig = () => {
  const l = wt(), { ref: o, inView: s } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = v.useState(), [m, p] = v.useState(!1), [h, g] = v.useState(!1), [C, S] = v.useState({}), [_, T] = v.useState(!1), [P, I] = v.useState(!1), {
    loading: L,
    scripts: w,
    scriptData: D,
    loadScripts: N,
    saveScript: z,
    updateScript: b,
    getScriptAction: V,
    deleteScriptAction: H
  } = Zh();
  v.useEffect(() => {
    !P || !l || !s || L || !w || w.page >= w.total_pages || N(w.page + 1, !0);
  }, [
    s,
    l,
    L,
    w,
    N
  ]), v.useEffect(() => {
    !L && w && w.page === 1 && I(!0);
  }, [L, w]);
  const ae = () => {
    f(void 0), T(!1), p(!0);
  }, oe = (le) => {
    g(!0), S(le);
  }, _e = async (le) => {
    T(!0);
    const Pe = await V(
      le
    );
    f(Pe), p(!0);
  }, Ce = async (le) => {
    if (_) {
      if (!le.uuid) return;
      const { uuid: Pe, ...Ae } = le;
      await b(le.uuid, Ae);
    } else
      await z(le);
    p(!1);
  }, K = async (le) => {
    le && await H(le);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: zn.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: zn.header }, /* @__PURE__ */ u.createElement("div", { className: zn.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: zn.title }, "Сценарии"), /* @__PURE__ */ u.createElement("p", { className: zn.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: zn.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
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
  ))), L && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: zn.list }, w == null ? void 0 : w.script_actions.map((le) => /* @__PURE__ */ u.createElement(
    rf,
    {
      key: le.uuid,
      title: le.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => oe(le)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (w == null ? void 0 : w.page) || 1,
      totalPages: (w == null ? void 0 : w.total_pages) || 1,
      onChange: N
    }
  ), /* @__PURE__ */ u.createElement(
    Mv,
    {
      uuid: C.uuid,
      open: h,
      title: C.title,
      onClose: () => g(!1),
      onEdit: _e,
      onDelete: K
    }
  ), /* @__PURE__ */ u.createElement(
    Uy,
    {
      open: m,
      initialData: c,
      isEdit: _,
      isOptionData: D(),
      loading: L,
      onCancel: () => p(!1),
      onSave: async (le) => {
        await Ce(le);
      }
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, sg = "_field_1qtfn_1", ug = "_label_1qtfn_7", cg = "_select_1qtfn_13", Qi = {
  field: sg,
  label: ug,
  select: cg
}, ts = ({
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
}, dg = "_switchRow_1lfy8_1", fg = "_input_1lfy8_11", mg = "_track_1lfy8_22", pg = "_thumb_1lfy8_33", hg = "_label_1lfy8_62", sl = {
  switchRow: dg,
  input: fg,
  track: mg,
  thumb: pg,
  label: hg
}, An = ({ label: l, className: o = "", ...s }) => /* @__PURE__ */ u.createElement("label", { className: `${sl.switchRow} ${o}` }, /* @__PURE__ */ u.createElement("input", { ...s, type: "checkbox", className: sl.input }), /* @__PURE__ */ u.createElement("span", { className: sl.track, "aria-hidden": "true" }, /* @__PURE__ */ u.createElement("span", { className: sl.thumb })), /* @__PURE__ */ u.createElement("span", { className: sl.label }, l)), vg = [
  { label: "default", value: "default" },
  { label: "builtin", value: "builtin" },
  { label: "ha_storage", value: "ha_storage" },
  { label: "ha", value: "ha" },
  { label: "external", value: "external" },
  { label: "redis", value: "redis" }
], yg = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], gg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" },
  { label: "chidren_error", value: "chidren_error" }
], _g = "_form_nymr0_1", Eg = "_field_nymr0_15", wg = "_textarea_nymr0_24", kg = "_arrayItem_nymr0_37", dr = {
  form: _g,
  field: Eg,
  textarea: wg,
  arrayItem: kg
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
  const g = v.useMemo(() => {
    if (s[c]) return s[c] ?? kd();
  }, [s]), C = (P) => {
    f((I) => ({
      ...I,
      [c]: {
        ...I[c] ?? kd(),
        ...P
      }
    }));
  }, S = (P, I, L) => {
    const w = [...g[P] ?? []];
    w[I] = { ...w[I], ...L }, C({
      [P]: w
    });
  }, _ = (P, I) => {
    C({
      [P]: [...g[P] ?? [], I]
    });
  }, T = (P, I) => {
    C({
      [P]: (g[P] ?? []).filter(
        (L, w) => w !== I
      )
    });
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: dr.form }, /* @__PURE__ */ u.createElement(
      Ee,
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
        checked: g.endStatus,
        onChange: (P) => C({
          endStatus: P.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement(
      An,
      {
        label: "forwardText",
        checked: g.forwardText,
        onChange: (P) => C({
          forwardText: P.target.checked
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "actionType",
        value: g.actionType,
        onChange: (P) => C({
          actionType: P.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ts,
      {
        label: "answerType",
        value: g.answerType,
        options: vg,
        onChange: (P) => C({
          answerType: P.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: dr.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: dr.textarea,
        rows: 6,
        value: (g.voiceCommands == null ? [] : typeof g.voiceCommands != "object" ? g == null ? void 0 : g.voiceCommands.split(";") : g == null ? void 0 : g.voiceCommands).join(`
`),
        onChange: (P) => C({
          voiceCommands: P.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(At, { title: "nextDirectControl", defaultOpen: !0 }, (g.nextDirectControl ?? []).map((P, I) => /* @__PURE__ */ u.createElement("div", { key: I, className: dr.arrayItem }, /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "uuid",
        value: P.uuid,
        selectedTitle: P.title,
        searchSource: "sub_direct_controls",
        onChange: (L) => S("nextDirectControl", I, {
          uuid: L
        }),
        onSelect: (L) => S("nextDirectControl", I, {
          uuid: L.uuid,
          actionType: L.actionType ?? L.mappingType ?? "",
          title: L.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "actionType",
        value: P.actionType ?? "",
        onChange: (L) => S("nextDirectControl", I, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => T("nextDirectControl", I)
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
    )), /* @__PURE__ */ u.createElement(At, { title: "voiceResponseArray", defaultOpen: !0 }, (g.voiceResponseArray ?? []).map((P, I) => /* @__PURE__ */ u.createElement("div", { key: I, className: dr.arrayItem }, /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "actionType",
        value: P.actionType,
        onChange: (L) => S("voiceResponseArray", I, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "voiceResponse",
        value: P.voiceResponse,
        onChange: (L) => S("voiceResponseArray", I, {
          voiceResponse: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => T("voiceResponseArray", I)
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
    )), /* @__PURE__ */ u.createElement(At, { title: "nextAction", defaultOpen: !0 }, (g.nextAction ?? []).map((P, I) => /* @__PURE__ */ u.createElement("div", { key: I, className: dr.arrayItem }, /* @__PURE__ */ u.createElement(
      ts,
      {
        label: "actionTypeComponent",
        value: P.actionTypeComponent,
        options: gg,
        onChange: (L) => S("nextAction", I, {
          actionTypeComponent: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "actionType",
        value: P.actionType,
        onChange: (L) => S("nextAction", I, {
          actionType: L.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "uuid",
        value: P.uuid,
        selectedTitle: P.title,
        onChange: (L) => S("nextAction", I, {
          uuid: L
        }),
        onSelect: (L) => S("nextAction", I, {
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
        onClick: () => T("nextAction", I)
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
}, Cg = "_content_19r5a_1", Sg = "_title_19r5a_7", Ng = "_actions_19r5a_14", qi = {
  content: Cg,
  title: Sg,
  actions: Ng
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
  const h = /* @__PURE__ */ u.createElement("div", { className: qi.content }, /* @__PURE__ */ u.createElement("h3", { className: qi.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: qi.actions }, /* @__PURE__ */ u.createElement(
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
    Kt,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    h
  ));
}, xg = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function hl(l) {
  const o = ml(), [s, c] = v.useState(null), [f, m] = v.useState(!0), p = v.useRef(!1), h = async (P, I = 1, L = !1) => {
    m(!0);
    try {
      const w = xg(await o._getShort(`${P}`, I));
      c((D) => !L || !D ? w : {
        ...w,
        data: [
          ...D.data,
          ...w.data
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
    saveCommand: async (P, I) => await o._save(I, P),
    deleteCommand: async (P, I) => await o._delete(I, P),
    updateCommand: async (P, I) => {
      if (console.log(I), !I.uuid) return;
      const { uuid: L, ...w } = I;
      return await o._update(L, P, w);
    },
    editStatusCommand: async (P, I, L) => await o._update_status(P, I, L),
    detailInformationCommand: async (P, I) => await o._getDetail(I, P)
  };
}
const Tg = "_page_qfpja_7", Rg = "_header_qfpja_15", Pg = "_headerTop_qfpja_20", Mg = "_heading_qfpja_27", Lg = "_description_qfpja_41", $g = "_state_qfpja_83", Z = {
  page: Tg,
  header: Rg,
  headerTop: Pg,
  heading: Mg,
  description: Lg,
  state: $g
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
}), Dg = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Cd()), [h, g] = v.useState(null), { ref: C, inView: S } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: T,
    deleteCommand: P,
    detailInformationCommand: I,
    saveCommand: L,
    updateCommand: w,
    editStatusCommand: D,
    commands: N
  } = hl("get_assistant_commands_short"), [z, b] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !S || _ || !N || N.page >= N.total_pages || T("get_assistant_commands_short", N.page + 1, !0);
  }, [
    S,
    l,
    _,
    N,
    T
  ]), v.useEffect(() => {
    !_ && N && N.page === 1 && b(!0);
  }, [_, N]);
  const V = () => {
    f(!1), p(Cd()), s(!0);
  }, H = async (K) => {
    f(!0);
    const le = await I("get_assistant_command", K);
    p(le.data), s(!0);
  }, ae = async (K, le) => {
    console.log(K, le), await D("update_assistant_command_status", K, le), T("get_assistant_commands_short");
  }, oe = async (K) => {
    await P("delete_assistant_command", K), T("get_assistant_commands_short");
  }, _e = async () => {
    await L("save_assistant_command", m), s(!1);
  }, Ce = async () => {
    await w("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: Z.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), _ && /* @__PURE__ */ u.createElement("div", { className: Z.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", { className: Z.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Z.heading }, /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.commandList }, N == null ? void 0 : N.data.map((K) => /* @__PURE__ */ u.createElement(
    rf,
    {
      key: K.uuid,
      title: K.title,
      subTitle: K.status === !1 ? "Выключена" : "Включена",
      onClick: () => g(K)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (N == null ? void 0 : N.page) || 1,
      totalPages: (N == null ? void 0 : N.total_pages) || 1,
      onChange: (K) => T("get_assistant_commands_short", K)
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
      onSave: _e,
      onUpdate: Ce
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => g(null),
      onToggleStatus: ae,
      onDelete: oe,
      onEdit: (K) => H(K)
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, zg = () => ({
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
    ...zg(),
    forwardText: !1
  }
}), Og = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Sd()), [h, g] = v.useState(null), { ref: C, inView: S } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: T,
    deleteCommand: P,
    detailInformationCommand: I,
    saveCommand: L,
    updateCommand: w,
    editStatusCommand: D,
    commands: N
  } = hl("get_assistant_sub_commands_short"), [z, b] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !S || _ || !N || N.page >= N.total_pages || T("get_assistant_sub_commands_short", N.page + 1, !0);
  }, [
    S,
    l,
    _,
    N,
    T
  ]), v.useEffect(() => {
    !_ && N && N.page === 1 && b(!0);
  }, [_, N]);
  const V = () => {
    f(!1), p(Sd()), s(!0);
  }, H = async (K) => {
    f(!0);
    const le = await I("get_assistant_sub_command", K.uuid);
    p(le.data), s(!0);
  }, ae = async (K, le) => {
    await D("update_assistant_sub_command_status", K, le), T("get_assistant_sub_commands_short");
  }, oe = async (K) => {
    await P("delete_assistant_sub_command", K), T("get_assistant_sub_commands_short");
  }, _e = async () => {
    await L("save_assistant_sub_command", m), s(!1);
  }, Ce = async () => {
    await w("update_assistant_sub_command_status", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: Z.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), _ && /* @__PURE__ */ u.createElement("div", { className: Z.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", { className: Z.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Z.heading }, /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.commandList }, N == null ? void 0 : N.data.map((K) => /* @__PURE__ */ u.createElement("div", { key: K.uuid, className: Z.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Z.commandButton, onClick: () => H(K) }, /* @__PURE__ */ u.createElement("span", null, K.title), /* @__PURE__ */ u.createElement("small", null, K.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Z.moreButton,
      "aria-label": `Действия команды ${K.title}`,
      onClick: () => g(K)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (N == null ? void 0 : N.page) || 1,
      totalPages: (N == null ? void 0 : N.total_pages) || 1,
      onChange: (K) => T("get_assistant_sub_commands_short", K)
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
      onSave: _e,
      onUpdate: Ce
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => g(null),
      onToggleStatus: ae,
      onDelete: oe
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Ag = "_field_veq7g_1", Fg = "_label_veq7g_7", jg = "_textarea_veq7g_13", Ug = "_error_veq7g_40", Bg = "_errorText_veq7g_48", ul = {
  field: Ag,
  label: Fg,
  textarea: jg,
  error: Ug,
  errorText: Bg
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
}), bg = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? Nd(), [c]), h = (_) => {
    f((T) => ({
      ...T,
      directControl: {
        ...T.directControl ?? Nd(),
        ..._
      }
    }));
  }, g = (_, T) => {
    const P = [...p.subDirectControl ?? []];
    P[_] = {
      ...P[_],
      ...T
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
  }, S = (_) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((T, P) => P !== _)
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
    /* @__PURE__ */ u.createElement("div", { className: Z.form }, /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((T) => ({
          ...T,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ts,
      {
        label: "valueType",
        value: p.valueType,
        options: yg,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Z.field }, /* @__PURE__ */ u.createElement(
      cf,
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
    )), /* @__PURE__ */ u.createElement(
      An,
      {
        label: "manual",
        checked: p.manual,
        onChange: (_) => h({
          manual: _.target.checked,
          subDirectControl: _.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ u.createElement(At, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, T) => /* @__PURE__ */ u.createElement("div", { key: T, className: Z.arrayItem }, /* @__PURE__ */ u.createElement(
        Ee,
        {
          label: "subMappingType",
          value: _.subMappingType,
          onChange: (P) => g(T, {
            subMappingType: P.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: Z.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: Z.textarea,
          rows: 3,
          value: _.subVoiceCommands,
          onChange: (P) => g(T, {
            subVoiceCommands: P.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: () => S(T)
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
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => xd()), [h, g] = v.useState(null), C = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [S, _] = v.useState("main"), T = hr(), { ref: P, inView: I } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: L,
    loadCommands: w,
    deleteCommand: D,
    detailInformationCommand: N,
    saveCommand: z,
    updateCommand: b,
    editStatusCommand: V,
    commands: H
  } = hl("get_assistant_sub_direct_controls_short"), [ae, oe] = v.useState(!1);
  v.useEffect(() => {
    !ae || !l || !I || L || !H || H.page >= H.total_pages || w("get_assistant_sub_direct_controls_short", H.page + 1, !0);
  }, [
    I,
    l,
    L,
    H,
    w
  ]), v.useEffect(() => {
    !L && H && H.page === 1 && oe(!0);
  }, [L, H]);
  const _e = () => {
    f(!1), p(xd()), s(!0);
  }, Ce = async (X) => {
    f(!0);
    const $e = await N("get_assistant_sub_direct_control", X.uuid);
    p($e.data), s(!0);
  }, K = async (X, $e) => {
    await V("update_assistant_sub_direct_controls_status", X, $e), w("get_assistant_sub_direct_controls_short");
  }, le = async (X) => {
    await D("delete_assistant_sub_direct_control", X), w("get_assistant_sub_direct_controls_short");
  }, Pe = async () => {
    await z("save_assistant_sub_direct_control", m), s(!1);
  }, Ae = async () => {
    await b("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: Z.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), L && /* @__PURE__ */ u.createElement("div", { className: Z.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", { className: Z.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Z.innerTabs }, C.map((X) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: X.key,
      type: "button",
      className: `${Z.innerTab} ${S === X.key ? Z.activeInnerTab : ""}`,
      onClick: () => {
        _(X.key), T(`/commands/direct/${X.key === "main" ? "main" : "template"}`);
      }
    },
    X.label
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.heading }, /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: _e
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: _e
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.commandList }, H == null ? void 0 : H.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: Z.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Z.commandButton, onClick: () => Ce(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Z.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => g(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: P, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (H == null ? void 0 : H.page) || 1,
      totalPages: (H == null ? void 0 : H.total_pages) || 1,
      onChange: (X) => w("get_assistant_sub_direct_controls_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    bg,
    {
      open: o,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Ae : Pe
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => g(null),
      onToggleStatus: K,
      onDelete: le
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Vg = ({
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
  ), h = (_) => {
    f((T) => ({
      ...T,
      subDirectControl: _
    }));
  }, g = (_, T) => {
    const P = [...p];
    P[_] = {
      ...P[_],
      ...T
    }, h(P);
  }, C = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, S = (_) => {
    h(
      p.filter((T, P) => P !== _)
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
    /* @__PURE__ */ u.createElement("div", { className: Z.form }, /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((T) => ({
          ...T,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      At,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((_, T) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: T,
          className: Z.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          Ee,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (P) => g(T, {
              subMappingType: P.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          cf,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof _.subVoiceCommands == "object" ? _.subVoiceCommands : []).join(`
`),
            onChange: (P) => g(T, {
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
            onClick: () => S(T)
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
  const l = wt(), o = hr(), [s, c] = v.useState(!1), [f, m] = v.useState(!1), [p, h] = v.useState(Td), [g, C] = v.useState(null), [S, _] = v.useState("template"), [T, P] = v.useState(!1), I = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: L, inView: w } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: D,
    loadCommands: N,
    deleteCommand: z,
    detailInformationCommand: b,
    saveCommand: V,
    updateCommand: H,
    editStatusCommand: ae,
    commands: oe
  } = hl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !T || !l || !w || D || !oe || oe.page >= oe.total_pages || N(
      "get_assistant_sub_direct_control_samples_short",
      oe.page + 1,
      !0
    );
  }, [
    T,
    w,
    l,
    D,
    oe,
    N
  ]), v.useEffect(() => {
    !D && oe && oe.page === 1 && P(!0);
  }, [D, oe]);
  const _e = () => {
    m(!1), h(Td()), c(!0);
  }, Ce = async (X) => {
    m(!0);
    const $e = await b(
      "get_assistant_sub_direct_control_sample",
      X.uuid
    );
    h($e.data), c(!0);
  }, K = async (X, $e) => {
    await ae(
      "update_assistant_sub_direct_control",
      X,
      $e
    ), N(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, le = async (X) => {
    await z(
      "delete_assistant_sub_direct_control_sample",
      X
    ), N(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Pe = async () => {
    await V(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), N(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ae = async () => {
    await H(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), N(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: Z.page }, !l && /* @__PURE__ */ u.createElement(Gt, null), D && /* @__PURE__ */ u.createElement("div", { className: Z.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", { className: Z.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Z.innerTabs }, I.map((X) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: X.key,
      type: "button",
      className: `${Z.innerTab} ${S === X.key ? Z.activeInnerTab : ""}`,
      onClick: () => {
        _(X.key), o(
          `/commands/direct/${X.key === "main" ? "main" : "template"}`
        );
      }
    },
    X.label
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.heading }, /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    se,
    {
      onClick: _e
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      onClick: _e
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.commandList }, oe == null ? void 0 : oe.data.map((X) => /* @__PURE__ */ u.createElement(
    "div",
    {
      key: X.uuid,
      className: Z.commandTab
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Z.commandButton,
        onClick: () => Ce(X)
      },
      /* @__PURE__ */ u.createElement("span", null, X.title),
      /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Z.moreButton,
        onClick: () => C(X)
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
      page: (oe == null ? void 0 : oe.page) ?? 1,
      totalPages: (oe == null ? void 0 : oe.total_pages) ?? 1,
      onChange: (X) => N(
        "get_assistant_sub_direct_control_samples_short",
        X
      )
    }
  ), /* @__PURE__ */ u.createElement(
    Vg,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Ae : Pe
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!g,
      command: g,
      onClose: () => C(null),
      onToggleStatus: K,
      onDelete: le
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Qg = "_form_nymr0_1", qg = "_field_nymr0_15", Yg = "_textarea_nymr0_24", Yi = {
  form: Qg,
  field: qg,
  textarea: Yg
}, Rd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Kg = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const g = v.useMemo(() => {
    if (s[c]) return s[c] ?? Rd();
  }, [s]), C = (S) => {
    f((_) => ({
      ..._,
      [c]: {
        ..._[c] ?? Rd(),
        ...S
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
    /* @__PURE__ */ u.createElement("div", { className: Yi.form }, /* @__PURE__ */ u.createElement(
      Ee,
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
        checked: g.endStatus,
        onChange: (S) => C({
          endStatus: S.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "actionType",
        value: g.actionType,
        onChange: (S) => C({
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ee,
      {
        label: "answerType",
        value: g.answerType,
        onChange: (S) => C({
          answerType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Yi.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: Yi.textarea,
        rows: 6,
        value: (g.voiceCommands == null ? [] : typeof g.voiceCommands != "object" ? g == null ? void 0 : g.voiceCommands.split(";") : g == null ? void 0 : g.voiceCommands).join(`
`),
        onChange: (S) => C({
          voiceCommands: S.target.value.split(`
`)
        })
      }
    )))
  );
}, Gg = () => ({
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
    ...Gg(),
    forwardText: !1
  }
}), Xg = () => {
  const l = wt(), [o, s] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Pd()), [h, g] = v.useState(null), { ref: C, inView: S } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: T,
    deleteCommand: P,
    detailInformationCommand: I,
    saveCommand: L,
    updateCommand: w,
    editStatusCommand: D,
    commands: N
  } = hl("get_assistant_settings_short"), [z, b] = v.useState(!1);
  v.useEffect(() => {
    !z || !l || !S || _ || !N || N.page >= N.total_pages || T("get_assistant_settings_short", N.page + 1, !0);
  }, [
    S,
    l,
    _,
    N,
    T
  ]), v.useEffect(() => {
    !_ && N && N.page === 1 && b(!0);
  }, [_, N]);
  const V = () => {
    f(!1), p(Pd()), s(!0);
  }, H = async (K) => {
    f(!0);
    const le = await I("get_assistant_command", K.uuid);
    p(le.data), s(!0);
  }, ae = async (K, le) => {
    console.log(K, le), await D("update_assistant_setting", K, le), T("get_assistant_settings_short");
  }, oe = async (K) => {
    await P("delete_assistant_setting", K), T("get_assistant_settings_short");
  }, _e = async () => {
    await L("save_assistant_setting", m), s(!1);
  }, Ce = async () => {
    await w("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement("div", { className: Z.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), _ && /* @__PURE__ */ u.createElement("div", { className: Z.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: Z.header }, /* @__PURE__ */ u.createElement("div", { className: Z.headerTop }, /* @__PURE__ */ u.createElement("div", { className: Z.heading }, /* @__PURE__ */ u.createElement("p", { className: Z.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
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
  ))), /* @__PURE__ */ u.createElement("div", { className: Z.commandList }, N == null ? void 0 : N.data.map((K) => /* @__PURE__ */ u.createElement("div", { key: K.uuid, className: Z.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: Z.commandButton, onClick: () => H(K) }, /* @__PURE__ */ u.createElement("span", null, K.title), /* @__PURE__ */ u.createElement("small", null, K.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: Z.moreButton,
      "aria-label": `Действия команды ${K.title}`,
      onClick: () => g(K)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (N == null ? void 0 : N.page) || 1,
      totalPages: (N == null ? void 0 : N.total_pages) || 1,
      onChange: (K) => T("get_assistant_settings_short", K)
    }
  ), /* @__PURE__ */ u.createElement(
    Kg,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: _e,
      onUpdate: Ce
    }
  ), /* @__PURE__ */ u.createElement(
    pl,
    {
      open: !!h,
      command: h,
      onClose: () => g(null),
      onToggleStatus: ae,
      onDelete: oe
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Jg = "_form_1bj0d_1", Zg = "_field_1bj0d_7", e_ = "_input_1bj0d_13", t_ = "_label_1bj0d_32", dt = {
  form: Jg,
  field: Zg,
  input: e_,
  label: t_
}, n_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(Ee, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(Ee, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(Ee, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(Ee, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(Ee, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, r_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(Ee, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(Ee, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, l_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(Ee, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(Ee, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, a_ = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(
    Ee,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement(An, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement(An, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement(An, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    Ee,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, o_ = "_page_tlhec_1", i_ = {
  page: o_
};
function s_() {
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
const u_ = {
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
}, c_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, Md = {
  yandex_tts: u_,
  remout: Aa,
  timer_alarm: c_,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, d_ = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), f_ = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), m_ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), p_ = (l) => ({
  yandex_tts: d_(l == null ? void 0 : l.yandex_tts),
  remout: f_(l == null ? void 0 : l.remout),
  timer_alarm: m_(l == null ? void 0 : l.timer_alarm),
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
}, h_ = (l, o) => {
  const s = {}, c = Ki(l.yandex_tts, o.yandex_tts), f = Ki(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Ki(l.remout ?? Aa, o.remout ?? Aa);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, v_ = () => {
  wt();
  const [l, o] = v.useState(Md), [s, c] = v.useState(Md), { settings: f, saveSettings: m } = s_();
  v.useEffect(() => {
    if (!f) return;
    const h = p_(f);
    o(h), c(h);
  }, [f]);
  const p = () => {
    const h = h_(l, s);
    m(h);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(jn, null), /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: i_.page }, /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement(At, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    a_,
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
    n_,
    {
      data: l.yandex_tts,
      onChange: (h) => o({ ...l, yandex_tts: h })
    }
  )), l.active_remout && /* @__PURE__ */ u.createElement(At, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    r_,
    {
      data: l.remout ?? Aa,
      onChange: (h) => o({ ...l, remout: h })
    }
  )), /* @__PURE__ */ u.createElement(At, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    l_,
    {
      data: l.timer_alarm,
      onChange: (h) => o({ ...l, timer_alarm: h })
    }
  )), /* @__PURE__ */ u.createElement(se, { onClick: p }, "Сохранить")), /* @__PURE__ */ u.createElement(Xt, null));
}, On = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, y_ = (l) => {
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
}, g_ = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 60), c = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, Gi = (l) => {
  const o = On(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function ff() {
  const l = ml(), [o, s] = v.useState([]), [c, f] = v.useState([]), [m, p] = v.useState([]), [h, g] = v.useState(!0), C = v.useMemo(() => l.getDevices(), [l]), S = v.useCallback(async () => {
    const z = await l._getShort("get_timer_requests_short", 1, 100), b = await Promise.all(
      Gi(z).map(async (V) => {
        var ae;
        const H = await l._getDetail(V.uuid, "get_timer_request");
        return ((ae = On(H)) == null ? void 0 : ae.data) ?? On(H);
      })
    );
    s(b.filter((V) => !!V && V.action_type === "create_timer"));
  }, [l]), _ = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_requests_short", 1, 100), b = await Promise.all(
      Gi(z).map(async (V) => {
        var ae;
        const H = await l._getDetail(V.uuid, "get_alarm_request");
        return ((ae = On(H)) == null ? void 0 : ae.data) ?? On(H);
      })
    );
    f(b.filter((V) => !!V && V.action_type !== "delete_alarm"));
  }, [l]), T = v.useCallback(async () => {
    const z = await l._getShort("get_alarm_time_widgets_short", 1, 100), b = await Promise.all(
      Gi(z).map(async (V) => {
        var ae;
        const H = await l._getDetail(V.uuid, "get_alarm_time_widget");
        return ((ae = On(H)) == null ? void 0 : ae.data) ?? On(H);
      })
    );
    p(b.filter(Boolean));
  }, [l]), P = v.useCallback(async () => {
    g(!0);
    try {
      await Promise.all([S(), _(), T()]);
    } finally {
      g(!1);
    }
  }, [_, T, S]);
  return v.useEffect(() => {
    P();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (z, b, V = 0.3) => {
      await l._save({ name: `Будильник ${b}`, action_type: "create_alarm", device_id: z, status: "on", time: b, volume_start: V }, "save_alarm_request"), await _();
    },
    createTimer: async (z, b) => {
      const V = {
        count_timer: g_(b),
        date_end: y_(b)
      };
      await l._save({ name: `Таймер ${b} мин`, action_type: "create_timer", device_id: z, timer_time: V }, "save_timer_request"), await S();
    },
    deleteAlarm: async (z) => {
      await l._delete(z.uuid, "delete_alarm_request"), await _();
    },
    devices: C,
    loading: h,
    stopTimer: async (z) => {
      await l._delete(z.uuid, "delete_timer_request"), await S();
    },
    timers: o,
    toTimerSeconds: df,
    updateAlarm: async (z, b) => {
      await l._update(z.uuid, "update_alarm_request", { ...z, action_type: "edit_alarm", ...b }), await _();
    }
  };
}
const __ = "_page_di7r7_1", E_ = "_header_di7r7_11", w_ = "_title_di7r7_18", k_ = "_description_di7r7_25", C_ = "_grid_di7r7_31", S_ = "_card_di7r7_37", N_ = "_empty_di7r7_37", x_ = "_cardHeader_di7r7_44", T_ = "_cardTitle_di7r7_51", R_ = "_meta_di7r7_56", P_ = "_time_di7r7_62", M_ = "_form_di7r7_69", L_ = "_field_di7r7_75", $_ = "_label_di7r7_81", I_ = "_select_di7r7_87", D_ = "_input_di7r7_87", z_ = "_quickTabs_di7r7_97", O_ = "_quickTab_di7r7_97", A_ = "_activeQuickTab_di7r7_113", F_ = "_row_di7r7_118", ee = {
  page: __,
  header: E_,
  title: w_,
  description: k_,
  grid: C_,
  card: S_,
  empty: N_,
  cardHeader: x_,
  cardTitle: T_,
  meta: R_,
  time: P_,
  form: M_,
  field: L_,
  label: $_,
  select: I_,
  input: D_,
  quickTabs: z_,
  quickTab: O_,
  activeQuickTab: A_,
  row: F_,
  switch: "_switch_di7r7_124"
}, j_ = [5, 10, 15, 30, 60], U_ = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, B_ = () => {
  wt();
  const { createTimer: l, devices: o, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = ff(), [p, h] = v.useState(!1), [g, C] = v.useState(""), [S, _] = v.useState(5), [T, P] = v.useState({});
  v.useEffect(() => {
    P((w) => Object.fromEntries(f.map((D) => [D.uuid, w[D.uuid] ?? m(D.timer_time)])));
  }, [f, m]), v.useEffect(() => {
    const w = window.setInterval(() => {
      P((D) => Object.fromEntries(Object.entries(D).map(([N, z]) => [N, Math.max(0, z - 1)])));
    }, 1e3);
    return () => window.clearInterval(w);
  }, []);
  const I = v.useMemo(() => new Map(o.map((w) => [w.id, w.name])), [o]), L = async () => {
    g && (await l(g, S), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: ee.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: ee.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.grid }, f.length ? f.map((w) => /* @__PURE__ */ u.createElement("div", { className: ee.card, key: w.uuid }, /* @__PURE__ */ u.createElement("div", { className: ee.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: ee.cardTitle }, w.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: ee.meta }, "Устройство: ", I.get(w.device_id) || w.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(w) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: ee.time }, U_(T[w.uuid] ?? m(w.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: ee.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(Kt, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(se, { onClick: L, disabled: !g }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: ee.select, value: g, onChange: (w) => C(w.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((w) => /* @__PURE__ */ u.createElement("option", { key: w.id, value: w.id }, w.name)))), /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: ee.quickTabs }, j_.map((w) => /* @__PURE__ */ u.createElement("button", { key: w, type: "button", className: `${ee.quickTab} ${S === w ? ee.activeQuickTab : ""}`, onClick: () => _(w) }, w, " мин")))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "number", min: "1", value: S, onChange: (w) => _(Number(w.target.value) || 1) })))), /* @__PURE__ */ u.createElement(Xt, null));
}, b_ = () => {
  wt();
  const { alarmTimeWidgets: l, alarms: o, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = ff(), [h, g] = v.useState(!1), [C, S] = v.useState(""), [_, T] = v.useState("08:00"), [P, I] = v.useState(0.3), L = v.useMemo(() => {
    const N = l.flatMap((z) => z.time || []);
    return Array.from(new Set(N)).filter(Boolean);
  }, [l]), w = v.useMemo(() => new Map(f.map((N) => [N.id, N.name])), [f]), D = async () => {
    !C || !_ || (await s(C, _, P), g(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: ee.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: ee.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(se, { onClick: () => g(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.grid }, o.length ? o.map((N) => /* @__PURE__ */ u.createElement("div", { className: ee.card, key: N.uuid }, /* @__PURE__ */ u.createElement("div", { className: ee.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: ee.cardTitle }, N.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: ee.meta }, "Устройство: ", w.get(N.device_id) || N.device_id)), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(N) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${ee.row} ${ee.meta}` }, /* @__PURE__ */ u.createElement("input", { className: ee.switch, type: "checkbox", checked: N.status !== "off", onChange: (z) => p(N, { status: z.target.checked ? "on" : "off" }) }), N.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "time", value: N.time, onChange: (z) => p(N, { time: z.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: ee.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: N.volume_start ?? 0.3,
      onChange: (z) => p(N, { volume_start: Number(z.target.value) })
    }
  )))) : /* @__PURE__ */ u.createElement("div", { className: ee.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ u.createElement(Kt, { open: h, onClose: () => g(!1), title: "Создать будильник", footer: /* @__PURE__ */ u.createElement(se, { onClick: D, disabled: !C || !_ }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: ee.quickTabs }, L.length ? L.map((N) => /* @__PURE__ */ u.createElement("button", { key: N, type: "button", className: `${ee.quickTab} ${_ === N ? ee.activeQuickTab : ""}`, onClick: () => T(N) }, N)) : /* @__PURE__ */ u.createElement("span", { className: ee.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: ee.select, value: C, onChange: (N) => S(N.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((N) => /* @__PURE__ */ u.createElement("option", { key: N.id, value: N.id }, N.name)))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "time", value: _, onChange: (N) => T(N.target.value) })), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: ee.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: P,
      onChange: (N) => I(Number(N.target.value))
    }
  )))), /* @__PURE__ */ u.createElement(Xt, null));
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
    element: /* @__PURE__ */ u.createElement(ig, null)
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
    element: /* @__PURE__ */ u.createElement(Dg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Og, null)
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
    element: /* @__PURE__ */ u.createElement(Xg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(B_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(b_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(v_, null)
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
)), V_ = () => /* @__PURE__ */ u.createElement(W_, null);
class H_ {
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
  async searchAssistantSubCommands(o) {
    return this.hass.connection.sendMessagePromise({
      type: "dialog_custom_ui/search_assistant_sub_commands",
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
const Q_ = 1, Fa = 2, Xi = 3, q_ = 4, Y_ = 5;
function K_(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function G_() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function X_(l) {
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
function J_() {
  return {
    type: "ping"
  };
}
function Z_(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const eE = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, tE = "auth_invalid", nE = "auth_ok";
function rE(l) {
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
    const g = new WebSocket(c);
    let C = !1;
    const S = () => {
      if (g.removeEventListener("close", S), C) {
        h(Fa);
        return;
      }
      if (m === 0) {
        h(Q_);
        return;
      }
      const P = m === -1 ? -1 : m - 1;
      setTimeout(() => f(P, p, h), 1e3);
    }, _ = async (P) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), g.send(JSON.stringify(K_(o.accessToken)));
      } catch (I) {
        C = I === Fa, g.close();
      }
    }, T = async (P) => {
      const I = JSON.parse(P.data);
      switch (I.type) {
        case tE:
          C = !0, g.close();
          break;
        case nE:
          g.removeEventListener("open", _), g.removeEventListener("message", T), g.removeEventListener("close", S), g.removeEventListener("error", S), g.haVersion = I.ha_version, eE(g.haVersion, 2022, 9) && g.send(JSON.stringify(G_())), p(g);
          break;
      }
    };
    g.addEventListener("open", _), g.addEventListener("message", T), g.addEventListener("close", S), g.addEventListener("error", S);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class lE {
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
        "subscribe" in p || p.reject(Z_(Xi, "Connection lost"));
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
                const g = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const C of g)
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
    return this.subscribeMessage(o, X_(s));
  }
  ping() {
    return this.sendMessagePromise(J_());
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
const aE = (l) => l * 1e3 + Date.now();
async function oE(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw Y_;
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
  return p.hassUrl = l, p.clientId = o, p.expires = aE(p.expires_in), p;
}
class iE {
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
    const o = await oE(this.data.hassUrl, this.data.clientId, {
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
function sE(l, o) {
  return new iE({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function uE(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: rE }, l), s = await o.createSocket(o);
  return new lE(s, o);
}
function cE(l) {
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
async function dE() {
  const s = sE(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await uE({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function fE({
  children: l,
  hass: o
}) {
  const [s, c] = v.useState(null);
  return v.useEffect(() => {
    async function f() {
      const m = o ? cE(o) : await dE();
      c(new H_(m));
    }
    f().catch(console.error);
  }, [o]), s ? /* @__PURE__ */ u.createElement(nf.Provider, { value: s }, l) : /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...");
}
function mE({ hass: l }) {
  return /* @__PURE__ */ u.createElement(Ah, null, /* @__PURE__ */ u.createElement(fE, { hass: l }, /* @__PURE__ */ u.createElement(V_, null)));
}
const $d = "dialog-custom-ui-panel", Id = "dialog-custom-ui-style";
class pE extends HTMLElement {
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
    if (c.getElementById(Id))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Id, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(mE, { hass: this.hassValue }))
    );
  }
}
customElements.get($d) || customElements.define($d, pE);
