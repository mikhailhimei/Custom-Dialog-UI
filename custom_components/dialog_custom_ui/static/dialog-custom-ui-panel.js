function Rd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Pi = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xc;
function Xm() {
  if (Xc) return ue;
  Xc = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function R(k) {
    return k === null || typeof k != "object" ? null : (k = _ && k[_] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, I = {};
  function N(k, z, se) {
    this.props = k, this.context = z, this.refs = I, this.updater = se || T;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(k, z) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, z, "setState");
  }, N.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function $() {
  }
  $.prototype = N.prototype;
  function P(k, z, se) {
    this.props = k, this.context = z, this.refs = I, this.updater = se || T;
  }
  var j = P.prototype = new $();
  j.constructor = P, L(j, N.prototype), j.isPureReactComponent = !0;
  var W = Array.isArray, H = Object.prototype.hasOwnProperty, V = { current: null }, oe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(k, z, se) {
    var ce, fe = {}, me = null, we = null;
    if (z != null) for (ce in z.ref !== void 0 && (we = z.ref), z.key !== void 0 && (me = "" + z.key), z) H.call(z, ce) && !oe.hasOwnProperty(ce) && (fe[ce] = z[ce]);
    var _e = arguments.length - 2;
    if (_e === 1) fe.children = se;
    else if (1 < _e) {
      for (var xe = Array(_e), ot = 0; ot < _e; ot++) xe[ot] = arguments[ot + 2];
      fe.children = xe;
    }
    if (k && k.defaultProps) for (ce in _e = k.defaultProps, _e) fe[ce] === void 0 && (fe[ce] = _e[ce]);
    return { $$typeof: l, type: k, key: me, ref: we, props: fe, _owner: V.current };
  }
  function ge(k, z) {
    return { $$typeof: l, type: k.type, key: z, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Ce(k) {
    return typeof k == "object" && k !== null && k.$$typeof === l;
  }
  function X(k) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(se) {
      return z[se];
    });
  }
  var he = /\/+/g;
  function ze(k, z) {
    return typeof k == "object" && k !== null && k.key != null ? X("" + k.key) : z.toString(36);
  }
  function Ue(k, z, se, ce, fe) {
    var me = typeof k;
    (me === "undefined" || me === "boolean") && (k = null);
    var we = !1;
    if (k === null) we = !0;
    else switch (me) {
      case "string":
      case "number":
        we = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case l:
          case o:
            we = !0;
        }
    }
    if (we) return we = k, fe = fe(we), k = ce === "" ? "." + ze(we, 0) : ce, W(fe) ? (se = "", k != null && (se = k.replace(he, "$&/") + "/"), Ue(fe, z, se, "", function(ot) {
      return ot;
    })) : fe != null && (Ce(fe) && (fe = ge(fe, se + (!fe.key || we && we.key === fe.key ? "" : ("" + fe.key).replace(he, "$&/") + "/") + k)), z.push(fe)), 1;
    if (we = 0, ce = ce === "" ? "." : ce + ":", W(k)) for (var _e = 0; _e < k.length; _e++) {
      me = k[_e];
      var xe = ce + ze(me, _e);
      we += Ue(me, z, se, xe, fe);
    }
    else if (xe = R(k), typeof xe == "function") for (k = xe.call(k), _e = 0; !(me = k.next()).done; ) me = me.value, xe = ce + ze(me, _e++), we += Ue(me, z, se, xe, fe);
    else if (me === "object") throw z = String(k), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return we;
  }
  function J(k, z, se) {
    if (k == null) return k;
    var ce = [], fe = 0;
    return Ue(k, ce, "", "", function(me) {
      return z.call(se, me, fe++);
    }), ce;
  }
  function Le(k) {
    if (k._status === -1) {
      var z = k._result;
      z = z(), z.then(function(se) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = se);
      }, function(se) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = se);
      }), k._status === -1 && (k._status = 0, k._result = z);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var De = { current: null }, B = { transition: null }, le = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: B, ReactCurrentOwner: V };
  function q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ue.Children = { map: J, forEach: function(k, z, se) {
    J(k, function() {
      z.apply(this, arguments);
    }, se);
  }, count: function(k) {
    var z = 0;
    return J(k, function() {
      z++;
    }), z;
  }, toArray: function(k) {
    return J(k, function(z) {
      return z;
    }) || [];
  }, only: function(k) {
    if (!Ce(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, ue.Component = N, ue.Fragment = s, ue.Profiler = f, ue.PureComponent = P, ue.StrictMode = c, ue.Suspense = y, ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, ue.act = q, ue.cloneElement = function(k, z, se) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var ce = L({}, k.props), fe = k.key, me = k.ref, we = k._owner;
    if (z != null) {
      if (z.ref !== void 0 && (me = z.ref, we = V.current), z.key !== void 0 && (fe = "" + z.key), k.type && k.type.defaultProps) var _e = k.type.defaultProps;
      for (xe in z) H.call(z, xe) && !oe.hasOwnProperty(xe) && (ce[xe] = z[xe] === void 0 && _e !== void 0 ? _e[xe] : z[xe]);
    }
    var xe = arguments.length - 2;
    if (xe === 1) ce.children = se;
    else if (1 < xe) {
      _e = Array(xe);
      for (var ot = 0; ot < xe; ot++) _e[ot] = arguments[ot + 2];
      ce.children = _e;
    }
    return { $$typeof: l, type: k.type, key: fe, ref: me, props: ce, _owner: we };
  }, ue.createContext = function(k) {
    return k = { $$typeof: p, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: m, _context: k }, k.Consumer = k;
  }, ue.createElement = te, ue.createFactory = function(k) {
    var z = te.bind(null, k);
    return z.type = k, z;
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(k) {
    return { $$typeof: h, render: k };
  }, ue.isValidElement = Ce, ue.lazy = function(k) {
    return { $$typeof: S, _payload: { _status: -1, _result: k }, _init: Le };
  }, ue.memo = function(k, z) {
    return { $$typeof: C, type: k, compare: z === void 0 ? null : z };
  }, ue.startTransition = function(k) {
    var z = B.transition;
    B.transition = {};
    try {
      k();
    } finally {
      B.transition = z;
    }
  }, ue.unstable_act = q, ue.useCallback = function(k, z) {
    return De.current.useCallback(k, z);
  }, ue.useContext = function(k) {
    return De.current.useContext(k);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(k) {
    return De.current.useDeferredValue(k);
  }, ue.useEffect = function(k, z) {
    return De.current.useEffect(k, z);
  }, ue.useId = function() {
    return De.current.useId();
  }, ue.useImperativeHandle = function(k, z, se) {
    return De.current.useImperativeHandle(k, z, se);
  }, ue.useInsertionEffect = function(k, z) {
    return De.current.useInsertionEffect(k, z);
  }, ue.useLayoutEffect = function(k, z) {
    return De.current.useLayoutEffect(k, z);
  }, ue.useMemo = function(k, z) {
    return De.current.useMemo(k, z);
  }, ue.useReducer = function(k, z, se) {
    return De.current.useReducer(k, z, se);
  }, ue.useRef = function(k) {
    return De.current.useRef(k);
  }, ue.useState = function(k) {
    return De.current.useState(k);
  }, ue.useSyncExternalStore = function(k, z, se) {
    return De.current.useSyncExternalStore(k, z, se);
  }, ue.useTransition = function() {
    return De.current.useTransition();
  }, ue.version = "18.3.1", ue;
}
var Jc;
function Pd() {
  return Jc || (Jc = 1, Pi.exports = Xm()), Pi.exports;
}
var g = Pd();
const u = /* @__PURE__ */ Rd(g);
var Ea = {}, Mi = { exports: {} }, lt = {}, Li = { exports: {} }, Di = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function Jm() {
  return Zc || (Zc = 1, (function(l) {
    function o(B, le) {
      var q = B.length;
      B.push(le);
      e: for (; 0 < q; ) {
        var k = q - 1 >>> 1, z = B[k];
        if (0 < f(z, le)) B[k] = le, B[q] = z, q = k;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function c(B) {
      if (B.length === 0) return null;
      var le = B[0], q = B.pop();
      if (q !== le) {
        B[0] = q;
        e: for (var k = 0, z = B.length, se = z >>> 1; k < se; ) {
          var ce = 2 * (k + 1) - 1, fe = B[ce], me = ce + 1, we = B[me];
          if (0 > f(fe, q)) me < z && 0 > f(we, fe) ? (B[k] = we, B[me] = q, k = me) : (B[k] = fe, B[ce] = q, k = ce);
          else if (me < z && 0 > f(we, q)) B[k] = we, B[me] = q, k = me;
          else break e;
        }
      }
      return le;
    }
    function f(B, le) {
      var q = B.sortIndex - le.sortIndex;
      return q !== 0 ? q : B.id - le.id;
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
    var y = [], C = [], S = 1, _ = null, R = 3, T = !1, L = !1, I = !1, N = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function j(B) {
      for (var le = s(C); le !== null; ) {
        if (le.callback === null) c(C);
        else if (le.startTime <= B) c(C), le.sortIndex = le.expirationTime, o(y, le);
        else break;
        le = s(C);
      }
    }
    function W(B) {
      if (I = !1, j(B), !L) if (s(y) !== null) L = !0, Le(H);
      else {
        var le = s(C);
        le !== null && De(W, le.startTime - B);
      }
    }
    function H(B, le) {
      L = !1, I && (I = !1, $(te), te = -1), T = !0;
      var q = R;
      try {
        for (j(le), _ = s(y); _ !== null && (!(_.expirationTime > le) || B && !X()); ) {
          var k = _.callback;
          if (typeof k == "function") {
            _.callback = null, R = _.priorityLevel;
            var z = k(_.expirationTime <= le);
            le = l.unstable_now(), typeof z == "function" ? _.callback = z : _ === s(y) && c(y), j(le);
          } else c(y);
          _ = s(y);
        }
        if (_ !== null) var se = !0;
        else {
          var ce = s(C);
          ce !== null && De(W, ce.startTime - le), se = !1;
        }
        return se;
      } finally {
        _ = null, R = q, T = !1;
      }
    }
    var V = !1, oe = null, te = -1, ge = 5, Ce = -1;
    function X() {
      return !(l.unstable_now() - Ce < ge);
    }
    function he() {
      if (oe !== null) {
        var B = l.unstable_now();
        Ce = B;
        var le = !0;
        try {
          le = oe(!0, B);
        } finally {
          le ? ze() : (V = !1, oe = null);
        }
      } else V = !1;
    }
    var ze;
    if (typeof P == "function") ze = function() {
      P(he);
    };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), J = Ue.port2;
      Ue.port1.onmessage = he, ze = function() {
        J.postMessage(null);
      };
    } else ze = function() {
      N(he, 0);
    };
    function Le(B) {
      oe = B, V || (V = !0, ze());
    }
    function De(B, le) {
      te = N(function() {
        B(l.unstable_now());
      }, le);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      L || T || (L = !0, Le(H));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ge = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(y);
    }, l.unstable_next = function(B) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var le = 3;
          break;
        default:
          le = R;
      }
      var q = R;
      R = le;
      try {
        return B();
      } finally {
        R = q;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(B, le) {
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
      var q = R;
      R = B;
      try {
        return le();
      } finally {
        R = q;
      }
    }, l.unstable_scheduleCallback = function(B, le, q) {
      var k = l.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? k + q : k) : q = k, B) {
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
      return z = q + z, B = { id: S++, callback: le, priorityLevel: B, startTime: q, expirationTime: z, sortIndex: -1 }, q > k ? (B.sortIndex = q, o(C, B), s(y) === null && B === s(C) && (I ? ($(te), te = -1) : I = !0, De(W, q - k))) : (B.sortIndex = z, o(y, B), L || T || (L = !0, Le(H))), B;
    }, l.unstable_shouldYield = X, l.unstable_wrapCallback = function(B) {
      var le = R;
      return function() {
        var q = R;
        R = le;
        try {
          return B.apply(this, arguments);
        } finally {
          R = q;
        }
      };
    };
  })(Di)), Di;
}
var ed;
function Zm() {
  return ed || (ed = 1, Li.exports = Jm()), Li.exports;
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
var td;
function ep() {
  if (td) return lt;
  td = 1;
  var l = Pd(), o = Zm();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, _ = {};
  function R(e) {
    return y.call(_, e) ? !0 : y.call(S, e) ? !1 : C.test(e) ? _[e] = !0 : (S[e] = !0, !1);
  }
  function T(e, t, n, r) {
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
    if (t === null || typeof t > "u" || T(e, t, n, r)) return !0;
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
  function I(e, t, n, r, a, i, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = d;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    N[e] = new I(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    N[t] = new I(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    N[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    N[e] = new I(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    N[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    N[e] = new I(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    N[e] = new I(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    N[e] = new I(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    N[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function P(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      $,
      P
    );
    N[t] = new I(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace($, P);
    N[t] = new I(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace($, P);
    N[t] = new I(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    N[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    N[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function j(e, t, n, r) {
    var a = N.hasOwnProperty(t) ? N[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, a, r) && (n = null), r || a === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var W = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, H = Symbol.for("react.element"), V = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), X = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var q = Object.assign, k;
  function z(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var se = !1;
  function ce(e, t) {
    if (!e || se) return "";
    se = !0;
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
        } catch (D) {
          var r = D;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (D) {
          r = D;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (D) {
          r = D;
        }
        e();
      }
    } catch (D) {
      if (D && r && typeof D.stack == "string") {
        for (var a = D.stack.split(`
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
      se = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function fe(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case oe:
        return "Fragment";
      case V:
        return "Portal";
      case ge:
        return "Profiler";
      case te:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Ue:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case X:
        return (e.displayName || "Context") + ".Consumer";
      case Ce:
        return (e._context.displayName || "Context") + ".Provider";
      case he:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case J:
        return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
      case Le:
        t = e._payload, e = e._init;
        try {
          return me(e(t));
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
        return me(t);
      case 8:
        return t === te ? "StrictMode" : "Mode";
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
  function cl(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function rs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = xe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function dl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Oa(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ls(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = _e(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function as(e, t) {
    t = t.checked, t != null && j(e, "checked", t, !1);
  }
  function za(e, t) {
    as(e, t);
    var n = _e(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Aa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Aa(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function os(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Aa(e, t, n) {
    (t !== "number" || dl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var pr = Array.isArray;
  function On(e, t, n, r) {
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
  function Fa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function is(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (pr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: _e(n) };
  }
  function ss(e, t) {
    var n = _e(t.value), r = _e(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function us(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function cs(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ja(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? cs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var fl, ds = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (fl = fl || document.createElement("div"), fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function hr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vr = {
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
  }, ef = ["Webkit", "ms", "Moz", "O"];
  Object.keys(vr).forEach(function(e) {
    ef.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), vr[t] = vr[e];
    });
  });
  function fs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vr.hasOwnProperty(e) && vr[e] ? ("" + t).trim() : t + "px";
  }
  function ms(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = fs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var tf = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ua(e, t) {
    if (t) {
      if (tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ba(e, t) {
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
  function Ha(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Va = null, zn = null, An = null;
  function ps(e) {
    if (e = Fr(e)) {
      if (typeof Va != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Ol(t), Va(e.stateNode, e.type, t));
    }
  }
  function hs(e) {
    zn ? An ? An.push(e) : An = [e] : zn = e;
  }
  function vs() {
    if (zn) {
      var e = zn, t = An;
      if (An = zn = null, ps(e), t) for (e = 0; e < t.length; e++) ps(t[e]);
    }
  }
  function ys(e, t) {
    return e(t);
  }
  function gs() {
  }
  var Wa = !1;
  function _s(e, t, n) {
    if (Wa) return e(t, n);
    Wa = !0;
    try {
      return ys(e, t, n);
    } finally {
      Wa = !1, (zn !== null || An !== null) && (gs(), vs());
    }
  }
  function yr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ol(n);
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
  var Qa = !1;
  if (h) try {
    var gr = {};
    Object.defineProperty(gr, "passive", { get: function() {
      Qa = !0;
    } }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr);
  } catch {
    Qa = !1;
  }
  function nf(e, t, n, r, a, i, d, v, E) {
    var D = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, D);
    } catch (A) {
      this.onError(A);
    }
  }
  var _r = !1, ml = null, pl = !1, qa = null, rf = { onError: function(e) {
    _r = !0, ml = e;
  } };
  function lf(e, t, n, r, a, i, d, v, E) {
    _r = !1, ml = null, nf.apply(rf, arguments);
  }
  function af(e, t, n, r, a, i, d, v, E) {
    if (lf.apply(this, arguments), _r) {
      if (_r) {
        var D = ml;
        _r = !1, ml = null;
      } else throw Error(s(198));
      pl || (pl = !0, qa = D);
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
  function Es(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ws(e) {
    if (vn(e) !== e) throw Error(s(188));
  }
  function of(e) {
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
          if (i === n) return ws(a), e;
          if (i === r) return ws(a), t;
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
  function Ss(e) {
    return e = of(e), e !== null ? Cs(e) : null;
  }
  function Cs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Cs(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ks = o.unstable_scheduleCallback, Ns = o.unstable_cancelCallback, sf = o.unstable_shouldYield, uf = o.unstable_requestPaint, $e = o.unstable_now, cf = o.unstable_getCurrentPriorityLevel, Ya = o.unstable_ImmediatePriority, xs = o.unstable_UserBlockingPriority, hl = o.unstable_NormalPriority, df = o.unstable_LowPriority, Ts = o.unstable_IdlePriority, vl = null, Mt = null;
  function ff(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
      Mt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : hf, mf = Math.log, pf = Math.LN2;
  function hf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (mf(e) / pf | 0) | 0;
  }
  var yl = 64, gl = 4194304;
  function Er(e) {
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
  function _l(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, i = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var v = d & ~a;
      v !== 0 ? r = Er(v) : (i &= d, i !== 0 && (r = Er(i)));
    } else d = n & ~a, d !== 0 ? r = Er(d) : i !== 0 && (r = Er(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function vf(e, t) {
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
  function yf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var d = 31 - wt(i), v = 1 << d, E = a[d];
      E === -1 ? ((v & n) === 0 || (v & r) !== 0) && (a[d] = vf(v, t)) : E <= t && (e.expiredLanes |= v), i &= ~v;
    }
  }
  function Ka(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Rs() {
    var e = yl;
    return yl <<= 1, (yl & 4194240) === 0 && (yl = 64), e;
  }
  function Ga(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function gf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - wt(n), i = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
    }
  }
  function Xa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - wt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var Ee = 0;
  function Ps(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ms, Ja, Ls, Ds, Is, Za = !1, El = [], Kt = null, Gt = null, Xt = null, Sr = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Jt = [], _f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $s(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Gt = null;
        break;
      case "mouseover":
      case "mouseout":
        Xt = null;
        break;
      case "pointerover":
      case "pointerout":
        Sr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cr.delete(t.pointerId);
    }
  }
  function kr(e, t, n, r, a, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Fr(t), t !== null && Ja(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ef(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Kt = kr(Kt, e, t, n, r, a), !0;
      case "dragenter":
        return Gt = kr(Gt, e, t, n, r, a), !0;
      case "mouseover":
        return Xt = kr(Xt, e, t, n, r, a), !0;
      case "pointerover":
        var i = a.pointerId;
        return Sr.set(i, kr(Sr.get(i) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return i = a.pointerId, Cr.set(i, kr(Cr.get(i) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Os(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Es(n), t !== null) {
            e.blockedOn = t, Is(e.priority, function() {
              Ls(n);
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
  function wl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ba = r, n.target.dispatchEvent(r), ba = null;
      } else return t = Fr(n), t !== null && Ja(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function zs(e, t, n) {
    wl(e) && n.delete(t);
  }
  function wf() {
    Za = !1, Kt !== null && wl(Kt) && (Kt = null), Gt !== null && wl(Gt) && (Gt = null), Xt !== null && wl(Xt) && (Xt = null), Sr.forEach(zs), Cr.forEach(zs);
  }
  function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Za || (Za = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, wf)));
  }
  function xr(e) {
    function t(a) {
      return Nr(a, e);
    }
    if (0 < El.length) {
      Nr(El[0], e);
      for (var n = 1; n < El.length; n++) {
        var r = El[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Kt !== null && Nr(Kt, e), Gt !== null && Nr(Gt, e), Xt !== null && Nr(Xt, e), Sr.forEach(t), Cr.forEach(t), n = 0; n < Jt.length; n++) r = Jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Jt.length && (n = Jt[0], n.blockedOn === null); ) Os(n), n.blockedOn === null && Jt.shift();
  }
  var Fn = W.ReactCurrentBatchConfig, Sl = !0;
  function Sf(e, t, n, r) {
    var a = Ee, i = Fn.transition;
    Fn.transition = null;
    try {
      Ee = 1, eo(e, t, n, r);
    } finally {
      Ee = a, Fn.transition = i;
    }
  }
  function Cf(e, t, n, r) {
    var a = Ee, i = Fn.transition;
    Fn.transition = null;
    try {
      Ee = 4, eo(e, t, n, r);
    } finally {
      Ee = a, Fn.transition = i;
    }
  }
  function eo(e, t, n, r) {
    if (Sl) {
      var a = to(e, t, n, r);
      if (a === null) _o(e, t, r, Cl, n), $s(e, r);
      else if (Ef(a, e, t, n, r)) r.stopPropagation();
      else if ($s(e, r), t & 4 && -1 < _f.indexOf(e)) {
        for (; a !== null; ) {
          var i = Fr(a);
          if (i !== null && Ms(i), i = to(e, t, n, r), i === null && _o(e, t, r, Cl, n), i === a) break;
          a = i;
        }
        a !== null && r.stopPropagation();
      } else _o(e, t, r, null, n);
    }
  }
  var Cl = null;
  function to(e, t, n, r) {
    if (Cl = null, e = Ha(r), e = yn(e), e !== null) if (t = vn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Es(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Cl = e, null;
  }
  function As(e) {
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
        switch (cf()) {
          case Ya:
            return 1;
          case xs:
            return 4;
          case hl:
          case df:
            return 16;
          case Ts:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null, no = null, kl = null;
  function Fs() {
    if (kl) return kl;
    var e, t = no, n = t.length, r, a = "value" in Zt ? Zt.value : Zt.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[i - r]; r++) ;
    return kl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Nl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xl() {
    return !0;
  }
  function js() {
    return !1;
  }
  function it(e) {
    function t(n, r, a, i, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(i) : i[v]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? xl : js, this.isPropagationStopped = js, this;
    }
    return q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xl);
    }, persist: function() {
    }, isPersistent: xl }), t;
  }
  var jn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ro = it(jn), Tr = q({}, jn, { view: 0, detail: 0 }), kf = it(Tr), lo, ao, Rr, Tl = q({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: io, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Rr && (Rr && e.type === "mousemove" ? (lo = e.screenX - Rr.screenX, ao = e.screenY - Rr.screenY) : ao = lo = 0, Rr = e), lo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ao;
  } }), Us = it(Tl), Nf = q({}, Tl, { dataTransfer: 0 }), xf = it(Nf), Tf = q({}, Tr, { relatedTarget: 0 }), oo = it(Tf), Rf = q({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pf = it(Rf), Mf = q({}, jn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Lf = it(Mf), Df = q({}, jn, { data: 0 }), Bs = it(Df), If = {
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
  }, $f = {
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
  }, Of = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Of[e]) ? !!t[e] : !1;
  }
  function io() {
    return zf;
  }
  var Af = q({}, Tr, { key: function(e) {
    if (e.key) {
      var t = If[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Nl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $f[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: io, charCode: function(e) {
    return e.type === "keypress" ? Nl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ff = it(Af), jf = q({}, Tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bs = it(jf), Uf = q({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }), Bf = it(Uf), bf = q({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hf = it(bf), Vf = q({}, Tl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wf = it(Vf), Qf = [9, 13, 27, 32], so = h && "CompositionEvent" in window, Pr = null;
  h && "documentMode" in document && (Pr = document.documentMode);
  var qf = h && "TextEvent" in window && !Pr, Hs = h && (!so || Pr && 8 < Pr && 11 >= Pr), Vs = " ", Ws = !1;
  function Qs(e, t) {
    switch (e) {
      case "keyup":
        return Qf.indexOf(t.keyCode) !== -1;
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
  function qs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Un = !1;
  function Yf(e, t) {
    switch (e) {
      case "compositionend":
        return qs(t);
      case "keypress":
        return t.which !== 32 ? null : (Ws = !0, Vs);
      case "textInput":
        return e = t.data, e === Vs && Ws ? null : e;
      default:
        return null;
    }
  }
  function Kf(e, t) {
    if (Un) return e === "compositionend" || !so && Qs(e, t) ? (e = Fs(), kl = no = Zt = null, Un = !1, e) : null;
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
        return Hs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ys(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gf[e.type] : t === "textarea";
  }
  function Ks(e, t, n, r) {
    hs(r), t = Dl(t, "onChange"), 0 < t.length && (n = new ro("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Mr = null, Lr = null;
  function Xf(e) {
    mu(e, 0);
  }
  function Rl(e) {
    var t = Wn(e);
    if (rs(t)) return e;
  }
  function Jf(e, t) {
    if (e === "change") return t;
  }
  var Gs = !1;
  if (h) {
    var uo;
    if (h) {
      var co = "oninput" in document;
      if (!co) {
        var Xs = document.createElement("div");
        Xs.setAttribute("oninput", "return;"), co = typeof Xs.oninput == "function";
      }
      uo = co;
    } else uo = !1;
    Gs = uo && (!document.documentMode || 9 < document.documentMode);
  }
  function Js() {
    Mr && (Mr.detachEvent("onpropertychange", Zs), Lr = Mr = null);
  }
  function Zs(e) {
    if (e.propertyName === "value" && Rl(Lr)) {
      var t = [];
      Ks(t, Lr, e, Ha(e)), _s(Xf, t);
    }
  }
  function Zf(e, t, n) {
    e === "focusin" ? (Js(), Mr = t, Lr = n, Mr.attachEvent("onpropertychange", Zs)) : e === "focusout" && Js();
  }
  function em(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Rl(Lr);
  }
  function tm(e, t) {
    if (e === "click") return Rl(t);
  }
  function nm(e, t) {
    if (e === "input" || e === "change") return Rl(t);
  }
  function rm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : rm;
  function Dr(e, t) {
    if (St(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!y.call(t, a) || !St(e[a], t[a])) return !1;
    }
    return !0;
  }
  function eu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tu(e, t) {
    var n = eu(e);
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
      n = eu(n);
    }
  }
  function nu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ru() {
    for (var e = window, t = dl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = dl(e.document);
    }
    return t;
  }
  function fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function lm(e) {
    var t = ru(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && nu(n.ownerDocument.documentElement, n)) {
      if (r !== null && fo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, i = Math.min(r.start, a);
          r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = tu(n, i);
          var d = tu(
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
  var am = h && "documentMode" in document && 11 >= document.documentMode, Bn = null, mo = null, Ir = null, po = !1;
  function lu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    po || Bn == null || Bn !== dl(r) || (r = Bn, "selectionStart" in r && fo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Dr(Ir, r) || (Ir = r, r = Dl(mo, "onSelect"), 0 < r.length && (t = new ro("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bn)));
  }
  function Pl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var bn = { animationend: Pl("Animation", "AnimationEnd"), animationiteration: Pl("Animation", "AnimationIteration"), animationstart: Pl("Animation", "AnimationStart"), transitionend: Pl("Transition", "TransitionEnd") }, ho = {}, au = {};
  h && (au = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Ml(e) {
    if (ho[e]) return ho[e];
    if (!bn[e]) return e;
    var t = bn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in au) return ho[e] = t[n];
    return e;
  }
  var ou = Ml("animationend"), iu = Ml("animationiteration"), su = Ml("animationstart"), uu = Ml("transitionend"), cu = /* @__PURE__ */ new Map(), du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function en(e, t) {
    cu.set(e, t), m(t, [e]);
  }
  for (var vo = 0; vo < du.length; vo++) {
    var yo = du[vo], om = yo.toLowerCase(), im = yo[0].toUpperCase() + yo.slice(1);
    en(om, "on" + im);
  }
  en(ou, "onAnimationEnd"), en(iu, "onAnimationIteration"), en(su, "onAnimationStart"), en("dblclick", "onDoubleClick"), en("focusin", "onFocus"), en("focusout", "onBlur"), en(uu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sm = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
  function fu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, af(r, t, void 0, e), e.currentTarget = null;
  }
  function mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var v = r[d], E = v.instance, D = v.currentTarget;
          if (v = v.listener, E !== i && a.isPropagationStopped()) break e;
          fu(a, v, D), i = E;
        }
        else for (d = 0; d < r.length; d++) {
          if (v = r[d], E = v.instance, D = v.currentTarget, v = v.listener, E !== i && a.isPropagationStopped()) break e;
          fu(a, v, D), i = E;
        }
      }
    }
    if (pl) throw e = qa, pl = !1, qa = null, e;
  }
  function ke(e, t) {
    var n = t[No];
    n === void 0 && (n = t[No] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (pu(t, e, 2, !1), n.add(r));
  }
  function go(e, t, n) {
    var r = 0;
    t && (r |= 4), pu(n, e, r, t);
  }
  var Ll = "_reactListening" + Math.random().toString(36).slice(2);
  function Or(e) {
    if (!e[Ll]) {
      e[Ll] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (sm.has(n) || go(n, !1, e), go(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ll] || (t[Ll] = !0, go("selectionchange", !1, t));
    }
  }
  function pu(e, t, n, r) {
    switch (As(t)) {
      case 1:
        var a = Sf;
        break;
      case 4:
        a = Cf;
        break;
      default:
        a = eo;
    }
    n = a.bind(null, t, n, e), a = void 0, !Qa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function _o(e, t, n, r, a) {
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
    _s(function() {
      var D = i, A = Ha(n), F = [];
      e: {
        var O = cu.get(e);
        if (O !== void 0) {
          var b = ro, Y = e;
          switch (e) {
            case "keypress":
              if (Nl(n) === 0) break e;
            case "keydown":
            case "keyup":
              b = Ff;
              break;
            case "focusin":
              Y = "focus", b = oo;
              break;
            case "focusout":
              Y = "blur", b = oo;
              break;
            case "beforeblur":
            case "afterblur":
              b = oo;
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
              b = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = xf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Bf;
              break;
            case ou:
            case iu:
            case su:
              b = Pf;
              break;
            case uu:
              b = Hf;
              break;
            case "scroll":
              b = kf;
              break;
            case "wheel":
              b = Wf;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Lf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = bs;
          }
          var G = (t & 4) !== 0, Oe = !G && e === "scroll", x = G ? O !== null ? O + "Capture" : null : O;
          G = [];
          for (var w = D, M; w !== null; ) {
            M = w;
            var U = M.stateNode;
            if (M.tag === 5 && U !== null && (M = U, x !== null && (U = yr(w, x), U != null && G.push(zr(w, U, M)))), Oe) break;
            w = w.return;
          }
          0 < G.length && (O = new b(O, Y, null, n, A), F.push({ event: O, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", O && n !== ba && (Y = n.relatedTarget || n.fromElement) && (yn(Y) || Y[Ft])) break e;
          if ((b || O) && (O = A.window === A ? A : (O = A.ownerDocument) ? O.defaultView || O.parentWindow : window, b ? (Y = n.relatedTarget || n.toElement, b = D, Y = Y ? yn(Y) : null, Y !== null && (Oe = vn(Y), Y !== Oe || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (b = null, Y = D), b !== Y)) {
            if (G = Us, U = "onMouseLeave", x = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (G = bs, U = "onPointerLeave", x = "onPointerEnter", w = "pointer"), Oe = b == null ? O : Wn(b), M = Y == null ? O : Wn(Y), O = new G(U, w + "leave", b, n, A), O.target = Oe, O.relatedTarget = M, U = null, yn(A) === D && (G = new G(x, w + "enter", Y, n, A), G.target = M, G.relatedTarget = Oe, U = G), Oe = U, b && Y) t: {
              for (G = b, x = Y, w = 0, M = G; M; M = Hn(M)) w++;
              for (M = 0, U = x; U; U = Hn(U)) M++;
              for (; 0 < w - M; ) G = Hn(G), w--;
              for (; 0 < M - w; ) x = Hn(x), M--;
              for (; w--; ) {
                if (G === x || x !== null && G === x.alternate) break t;
                G = Hn(G), x = Hn(x);
              }
              G = null;
            }
            else G = null;
            b !== null && hu(F, O, b, G, !1), Y !== null && Oe !== null && hu(F, Oe, Y, G, !0);
          }
        }
        e: {
          if (O = D ? Wn(D) : window, b = O.nodeName && O.nodeName.toLowerCase(), b === "select" || b === "input" && O.type === "file") var Z = Jf;
          else if (Ys(O)) if (Gs) Z = nm;
          else {
            Z = em;
            var ne = Zf;
          }
          else (b = O.nodeName) && b.toLowerCase() === "input" && (O.type === "checkbox" || O.type === "radio") && (Z = tm);
          if (Z && (Z = Z(e, D))) {
            Ks(F, Z, n, A);
            break e;
          }
          ne && ne(e, O, D), e === "focusout" && (ne = O._wrapperState) && ne.controlled && O.type === "number" && Aa(O, "number", O.value);
        }
        switch (ne = D ? Wn(D) : window, e) {
          case "focusin":
            (Ys(ne) || ne.contentEditable === "true") && (Bn = ne, mo = D, Ir = null);
            break;
          case "focusout":
            Ir = mo = Bn = null;
            break;
          case "mousedown":
            po = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            po = !1, lu(F, n, A);
            break;
          case "selectionchange":
            if (am) break;
          case "keydown":
          case "keyup":
            lu(F, n, A);
        }
        var re;
        if (so) e: {
          switch (e) {
            case "compositionstart":
              var ae = "onCompositionStart";
              break e;
            case "compositionend":
              ae = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ae = "onCompositionUpdate";
              break e;
          }
          ae = void 0;
        }
        else Un ? Qs(e, n) && (ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ae = "onCompositionStart");
        ae && (Hs && n.locale !== "ko" && (Un || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && Un && (re = Fs()) : (Zt = A, no = "value" in Zt ? Zt.value : Zt.textContent, Un = !0)), ne = Dl(D, ae), 0 < ne.length && (ae = new Bs(ae, e, null, n, A), F.push({ event: ae, listeners: ne }), re ? ae.data = re : (re = qs(n), re !== null && (ae.data = re)))), (re = qf ? Yf(e, n) : Kf(e, n)) && (D = Dl(D, "onBeforeInput"), 0 < D.length && (A = new Bs("onBeforeInput", "beforeinput", null, n, A), F.push({ event: A, listeners: D }), A.data = re));
      }
      mu(F, t);
    });
  }
  function zr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Dl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, i = a.stateNode;
      a.tag === 5 && i !== null && (a = i, i = yr(e, n), i != null && r.unshift(zr(e, i, a)), i = yr(e, t), i != null && r.push(zr(e, i, a))), e = e.return;
    }
    return r;
  }
  function Hn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function hu(e, t, n, r, a) {
    for (var i = t._reactName, d = []; n !== null && n !== r; ) {
      var v = n, E = v.alternate, D = v.stateNode;
      if (E !== null && E === r) break;
      v.tag === 5 && D !== null && (v = D, a ? (E = yr(n, i), E != null && d.unshift(zr(n, E, v))) : a || (E = yr(n, i), E != null && d.push(zr(n, E, v)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var um = /\r\n?/g, cm = /\u0000|\uFFFD/g;
  function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(um, `
`).replace(cm, "");
  }
  function Il(e, t, n) {
    if (t = vu(t), vu(e) !== t && n) throw Error(s(425));
  }
  function $l() {
  }
  var Eo = null, wo = null;
  function So(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Co = typeof setTimeout == "function" ? setTimeout : void 0, dm = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, fm = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(mm);
  } : Co;
  function mm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ko(e, t) {
    var n = t, r = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
        if (r === 0) {
          e.removeChild(a), xr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    xr(t);
  }
  function tn(e) {
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
  function gu(e) {
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
  var Vn = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Vn, Ar = "__reactProps$" + Vn, Ft = "__reactContainer$" + Vn, No = "__reactEvents$" + Vn, pm = "__reactListeners$" + Vn, hm = "__reactHandles$" + Vn;
  function yn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ft] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gu(e); e !== null; ) {
          if (n = e[Lt]) return n;
          e = gu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Fr(e) {
    return e = e[Lt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ol(e) {
    return e[Ar] || null;
  }
  var xo = [], Qn = -1;
  function nn(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Qn || (e.current = xo[Qn], xo[Qn] = null, Qn--);
  }
  function Se(e, t) {
    Qn++, xo[Qn] = e.current, e.current = t;
  }
  var rn = {}, qe = nn(rn), Ze = nn(!1), gn = rn;
  function qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return rn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, i;
    for (i in n) a[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function et(e) {
    return e = e.childContextTypes, e != null;
  }
  function zl() {
    Ne(Ze), Ne(qe);
  }
  function _u(e, t, n) {
    if (qe.current !== rn) throw Error(s(168));
    Se(qe, t), Se(Ze, n);
  }
  function Eu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, we(e) || "Unknown", a));
    return q({}, n, r);
  }
  function Al(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, gn = qe.current, Se(qe, e), Se(Ze, Ze.current), !0;
  }
  function wu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Eu(e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, Ne(Ze), Ne(qe), Se(qe, e)) : Ne(Ze), Se(Ze, n);
  }
  var jt = null, Fl = !1, To = !1;
  function Su(e) {
    jt === null ? jt = [e] : jt.push(e);
  }
  function vm(e) {
    Fl = !0, Su(e);
  }
  function ln() {
    if (!To && jt !== null) {
      To = !0;
      var e = 0, t = Ee;
      try {
        var n = jt;
        for (Ee = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        jt = null, Fl = !1;
      } catch (a) {
        throw jt !== null && (jt = jt.slice(e + 1)), ks(Ya, ln), a;
      } finally {
        Ee = t, To = !1;
      }
    }
    return null;
  }
  var Yn = [], Kn = 0, jl = null, Ul = 0, mt = [], pt = 0, _n = null, Ut = 1, Bt = "";
  function En(e, t) {
    Yn[Kn++] = Ul, Yn[Kn++] = jl, jl = e, Ul = t;
  }
  function Cu(e, t, n) {
    mt[pt++] = Ut, mt[pt++] = Bt, mt[pt++] = _n, _n = e;
    var r = Ut;
    e = Bt;
    var a = 32 - wt(r) - 1;
    r &= ~(1 << a), n += 1;
    var i = 32 - wt(t) + a;
    if (30 < i) {
      var d = a - a % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Ut = 1 << 32 - wt(t) + a | n << a | r, Bt = i + e;
    } else Ut = 1 << i | n << a | r, Bt = e;
  }
  function Ro(e) {
    e.return !== null && (En(e, 1), Cu(e, 1, 0));
  }
  function Po(e) {
    for (; e === jl; ) jl = Yn[--Kn], Yn[Kn] = null, Ul = Yn[--Kn], Yn[Kn] = null;
    for (; e === _n; ) _n = mt[--pt], mt[pt] = null, Bt = mt[--pt], mt[pt] = null, Ut = mt[--pt], mt[pt] = null;
  }
  var st = null, ut = null, Te = !1, Ct = null;
  function ku(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Nu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, ut = tn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, ut = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _n !== null ? { id: Ut, overflow: Bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Mo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lo(e) {
    if (Te) {
      var t = ut;
      if (t) {
        var n = t;
        if (!Nu(e, t)) {
          if (Mo(e)) throw Error(s(418));
          t = tn(n.nextSibling);
          var r = st;
          t && Nu(e, t) ? ku(r, n) : (e.flags = e.flags & -4097 | 2, Te = !1, st = e);
        }
      } else {
        if (Mo(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Te = !1, st = e;
      }
    }
  }
  function xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function Bl(e) {
    if (e !== st) return !1;
    if (!Te) return xu(e), Te = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps)), t && (t = ut)) {
      if (Mo(e)) throw Tu(), Error(s(418));
      for (; t; ) ku(e, t), t = tn(t.nextSibling);
    }
    if (xu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ut = tn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ut = null;
      }
    } else ut = st ? tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Tu() {
    for (var e = ut; e; ) e = tn(e.nextSibling);
  }
  function Gn() {
    ut = st = null, Te = !1;
  }
  function Do(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var ym = W.ReactCurrentBatchConfig;
  function jr(e, t, n) {
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
  function Ru(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pu(e) {
    function t(x, w) {
      if (e) {
        var M = x.deletions;
        M === null ? (x.deletions = [w], x.flags |= 16) : M.push(w);
      }
    }
    function n(x, w) {
      if (!e) return null;
      for (; w !== null; ) t(x, w), w = w.sibling;
      return null;
    }
    function r(x, w) {
      for (x = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? x.set(w.key, w) : x.set(w.index, w), w = w.sibling;
      return x;
    }
    function a(x, w) {
      return x = mn(x, w), x.index = 0, x.sibling = null, x;
    }
    function i(x, w, M) {
      return x.index = M, e ? (M = x.alternate, M !== null ? (M = M.index, M < w ? (x.flags |= 2, w) : M) : (x.flags |= 2, w)) : (x.flags |= 1048576, w);
    }
    function d(x) {
      return e && x.alternate === null && (x.flags |= 2), x;
    }
    function v(x, w, M, U) {
      return w === null || w.tag !== 6 ? (w = Ci(M, x.mode, U), w.return = x, w) : (w = a(w, M), w.return = x, w);
    }
    function E(x, w, M, U) {
      var Z = M.type;
      return Z === oe ? A(x, w, M.props.children, U, M.key) : w !== null && (w.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Le && Ru(Z) === w.type) ? (U = a(w, M.props), U.ref = jr(x, w, M), U.return = x, U) : (U = fa(M.type, M.key, M.props, null, x.mode, U), U.ref = jr(x, w, M), U.return = x, U);
    }
    function D(x, w, M, U) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = ki(M, x.mode, U), w.return = x, w) : (w = a(w, M.children || []), w.return = x, w);
    }
    function A(x, w, M, U, Z) {
      return w === null || w.tag !== 7 ? (w = Rn(M, x.mode, U, Z), w.return = x, w) : (w = a(w, M), w.return = x, w);
    }
    function F(x, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Ci("" + w, x.mode, M), w.return = x, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case H:
            return M = fa(w.type, w.key, w.props, null, x.mode, M), M.ref = jr(x, null, w), M.return = x, M;
          case V:
            return w = ki(w, x.mode, M), w.return = x, w;
          case Le:
            var U = w._init;
            return F(x, U(w._payload), M);
        }
        if (pr(w) || le(w)) return w = Rn(w, x.mode, M, null), w.return = x, w;
        bl(x, w);
      }
      return null;
    }
    function O(x, w, M, U) {
      var Z = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return Z !== null ? null : v(x, w, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case H:
            return M.key === Z ? E(x, w, M, U) : null;
          case V:
            return M.key === Z ? D(x, w, M, U) : null;
          case Le:
            return Z = M._init, O(
              x,
              w,
              Z(M._payload),
              U
            );
        }
        if (pr(M) || le(M)) return Z !== null ? null : A(x, w, M, U, null);
        bl(x, M);
      }
      return null;
    }
    function b(x, w, M, U, Z) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return x = x.get(M) || null, v(w, x, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case H:
            return x = x.get(U.key === null ? M : U.key) || null, E(w, x, U, Z);
          case V:
            return x = x.get(U.key === null ? M : U.key) || null, D(w, x, U, Z);
          case Le:
            var ne = U._init;
            return b(x, w, M, ne(U._payload), Z);
        }
        if (pr(U) || le(U)) return x = x.get(M) || null, A(w, x, U, Z, null);
        bl(w, U);
      }
      return null;
    }
    function Y(x, w, M, U) {
      for (var Z = null, ne = null, re = w, ae = w = 0, He = null; re !== null && ae < M.length; ae++) {
        re.index > ae ? (He = re, re = null) : He = re.sibling;
        var pe = O(x, re, M[ae], U);
        if (pe === null) {
          re === null && (re = He);
          break;
        }
        e && re && pe.alternate === null && t(x, re), w = i(pe, w, ae), ne === null ? Z = pe : ne.sibling = pe, ne = pe, re = He;
      }
      if (ae === M.length) return n(x, re), Te && En(x, ae), Z;
      if (re === null) {
        for (; ae < M.length; ae++) re = F(x, M[ae], U), re !== null && (w = i(re, w, ae), ne === null ? Z = re : ne.sibling = re, ne = re);
        return Te && En(x, ae), Z;
      }
      for (re = r(x, re); ae < M.length; ae++) He = b(re, x, ae, M[ae], U), He !== null && (e && He.alternate !== null && re.delete(He.key === null ? ae : He.key), w = i(He, w, ae), ne === null ? Z = He : ne.sibling = He, ne = He);
      return e && re.forEach(function(pn) {
        return t(x, pn);
      }), Te && En(x, ae), Z;
    }
    function G(x, w, M, U) {
      var Z = le(M);
      if (typeof Z != "function") throw Error(s(150));
      if (M = Z.call(M), M == null) throw Error(s(151));
      for (var ne = Z = null, re = w, ae = w = 0, He = null, pe = M.next(); re !== null && !pe.done; ae++, pe = M.next()) {
        re.index > ae ? (He = re, re = null) : He = re.sibling;
        var pn = O(x, re, pe.value, U);
        if (pn === null) {
          re === null && (re = He);
          break;
        }
        e && re && pn.alternate === null && t(x, re), w = i(pn, w, ae), ne === null ? Z = pn : ne.sibling = pn, ne = pn, re = He;
      }
      if (pe.done) return n(
        x,
        re
      ), Te && En(x, ae), Z;
      if (re === null) {
        for (; !pe.done; ae++, pe = M.next()) pe = F(x, pe.value, U), pe !== null && (w = i(pe, w, ae), ne === null ? Z = pe : ne.sibling = pe, ne = pe);
        return Te && En(x, ae), Z;
      }
      for (re = r(x, re); !pe.done; ae++, pe = M.next()) pe = b(re, x, ae, pe.value, U), pe !== null && (e && pe.alternate !== null && re.delete(pe.key === null ? ae : pe.key), w = i(pe, w, ae), ne === null ? Z = pe : ne.sibling = pe, ne = pe);
      return e && re.forEach(function(Gm) {
        return t(x, Gm);
      }), Te && En(x, ae), Z;
    }
    function Oe(x, w, M, U) {
      if (typeof M == "object" && M !== null && M.type === oe && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case H:
            e: {
              for (var Z = M.key, ne = w; ne !== null; ) {
                if (ne.key === Z) {
                  if (Z = M.type, Z === oe) {
                    if (ne.tag === 7) {
                      n(x, ne.sibling), w = a(ne, M.props.children), w.return = x, x = w;
                      break e;
                    }
                  } else if (ne.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Le && Ru(Z) === ne.type) {
                    n(x, ne.sibling), w = a(ne, M.props), w.ref = jr(x, ne, M), w.return = x, x = w;
                    break e;
                  }
                  n(x, ne);
                  break;
                } else t(x, ne);
                ne = ne.sibling;
              }
              M.type === oe ? (w = Rn(M.props.children, x.mode, U, M.key), w.return = x, x = w) : (U = fa(M.type, M.key, M.props, null, x.mode, U), U.ref = jr(x, w, M), U.return = x, x = U);
            }
            return d(x);
          case V:
            e: {
              for (ne = M.key; w !== null; ) {
                if (w.key === ne) if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                  n(x, w.sibling), w = a(w, M.children || []), w.return = x, x = w;
                  break e;
                } else {
                  n(x, w);
                  break;
                }
                else t(x, w);
                w = w.sibling;
              }
              w = ki(M, x.mode, U), w.return = x, x = w;
            }
            return d(x);
          case Le:
            return ne = M._init, Oe(x, w, ne(M._payload), U);
        }
        if (pr(M)) return Y(x, w, M, U);
        if (le(M)) return G(x, w, M, U);
        bl(x, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (n(x, w.sibling), w = a(w, M), w.return = x, x = w) : (n(x, w), w = Ci(M, x.mode, U), w.return = x, x = w), d(x)) : n(x, w);
    }
    return Oe;
  }
  var Xn = Pu(!0), Mu = Pu(!1), Hl = nn(null), Vl = null, Jn = null, Io = null;
  function $o() {
    Io = Jn = Vl = null;
  }
  function Oo(e) {
    var t = Hl.current;
    Ne(Hl), e._currentValue = t;
  }
  function zo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Zn(e, t) {
    Vl = e, Io = Jn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (tt = !0), e.firstContext = null);
  }
  function ht(e) {
    var t = e._currentValue;
    if (Io !== e) if (e = { context: e, memoizedValue: t, next: null }, Jn === null) {
      if (Vl === null) throw Error(s(308));
      Jn = e, Vl.dependencies = { lanes: 0, firstContext: e };
    } else Jn = Jn.next = e;
    return t;
  }
  var wn = null;
  function Ao(e) {
    wn === null ? wn = [e] : wn.push(e);
  }
  function Lu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Ao(t)) : (n.next = a.next, a.next = n), t.interleaved = n, bt(e, r);
  }
  function bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var an = !1;
  function Fo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Du(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function on(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (de & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, bt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Ao(r)) : (t.next = a.next, a.next = t), r.interleaved = t, bt(e, n);
  }
  function Wl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xa(e, n);
    }
  }
  function Iu(e, t) {
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
  function Ql(e, t, n, r) {
    var a = e.updateQueue;
    an = !1;
    var i = a.firstBaseUpdate, d = a.lastBaseUpdate, v = a.shared.pending;
    if (v !== null) {
      a.shared.pending = null;
      var E = v, D = E.next;
      E.next = null, d === null ? i = D : d.next = D, d = E;
      var A = e.alternate;
      A !== null && (A = A.updateQueue, v = A.lastBaseUpdate, v !== d && (v === null ? A.firstBaseUpdate = D : v.next = D, A.lastBaseUpdate = E));
    }
    if (i !== null) {
      var F = a.baseState;
      d = 0, A = D = E = null, v = i;
      do {
        var O = v.lane, b = v.eventTime;
        if ((r & O) === O) {
          A !== null && (A = A.next = {
            eventTime: b,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var Y = e, G = v;
            switch (O = t, b = n, G.tag) {
              case 1:
                if (Y = G.payload, typeof Y == "function") {
                  F = Y.call(b, F, O);
                  break e;
                }
                F = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = G.payload, O = typeof Y == "function" ? Y.call(b, F, O) : Y, O == null) break e;
                F = q({}, F, O);
                break e;
              case 2:
                an = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, O = a.effects, O === null ? a.effects = [v] : O.push(v));
        } else b = { eventTime: b, lane: O, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, A === null ? (D = A = b, E = F) : A = A.next = b, d |= O;
        if (v = v.next, v === null) {
          if (v = a.shared.pending, v === null) break;
          O = v, v = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      if (A === null && (E = F), a.baseState = E, a.firstBaseUpdate = D, a.lastBaseUpdate = A, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else i === null && (a.shared.lanes = 0);
      kn |= d, e.lanes = d, e.memoizedState = F;
    }
  }
  function $u(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var Ur = {}, Dt = nn(Ur), Br = nn(Ur), br = nn(Ur);
  function Sn(e) {
    if (e === Ur) throw Error(s(174));
    return e;
  }
  function jo(e, t) {
    switch (Se(br, t), Se(Br, e), Se(Dt, Ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ja(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ja(t, e);
    }
    Ne(Dt), Se(Dt, t);
  }
  function er() {
    Ne(Dt), Ne(Br), Ne(br);
  }
  function Ou(e) {
    Sn(br.current);
    var t = Sn(Dt.current), n = ja(t, e.type);
    t !== n && (Se(Br, e), Se(Dt, n));
  }
  function Uo(e) {
    Br.current === e && (Ne(Dt), Ne(Br));
  }
  var Pe = nn(0);
  function ql(e) {
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
  var Bo = [];
  function bo() {
    for (var e = 0; e < Bo.length; e++) Bo[e]._workInProgressVersionPrimary = null;
    Bo.length = 0;
  }
  var Yl = W.ReactCurrentDispatcher, Ho = W.ReactCurrentBatchConfig, Cn = 0, Me = null, Fe = null, Be = null, Kl = !1, Hr = !1, Vr = 0, gm = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Vo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
    return !0;
  }
  function Wo(e, t, n, r, a, i) {
    if (Cn = i, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yl.current = e === null || e.memoizedState === null ? Sm : Cm, e = n(r, a), Hr) {
      i = 0;
      do {
        if (Hr = !1, Vr = 0, 25 <= i) throw Error(s(301));
        i += 1, Be = Fe = null, t.updateQueue = null, Yl.current = km, e = n(r, a);
      } while (Hr);
    }
    if (Yl.current = Jl, t = Fe !== null && Fe.next !== null, Cn = 0, Be = Fe = Me = null, Kl = !1, t) throw Error(s(300));
    return e;
  }
  function Qo() {
    var e = Vr !== 0;
    return Vr = 0, e;
  }
  function It() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Be === null ? Me.memoizedState = Be = e : Be = Be.next = e, Be;
  }
  function vt() {
    if (Fe === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = Be === null ? Me.memoizedState : Be.next;
    if (t !== null) Be = t, Fe = e;
    else {
      if (e === null) throw Error(s(310));
      Fe = e, e = { memoizedState: Fe.memoizedState, baseState: Fe.baseState, baseQueue: Fe.baseQueue, queue: Fe.queue, next: null }, Be === null ? Me.memoizedState = Be = e : Be = Be.next = e;
    }
    return Be;
  }
  function Wr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qo(e) {
    var t = vt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Fe, a = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = i.next, i.next = d;
      }
      r.baseQueue = a = i, n.pending = null;
    }
    if (a !== null) {
      i = a.next, r = r.baseState;
      var v = d = null, E = null, D = i;
      do {
        var A = D.lane;
        if ((Cn & A) === A) E !== null && (E = E.next = { lane: 0, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), r = D.hasEagerState ? D.eagerState : e(r, D.action);
        else {
          var F = {
            lane: A,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          };
          E === null ? (v = E = F, d = r) : E = E.next = F, Me.lanes |= A, kn |= A;
        }
        D = D.next;
      } while (D !== null && D !== i);
      E === null ? d = r : E.next = v, St(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = E, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        i = a.lane, Me.lanes |= i, kn |= i, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yo(e) {
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
      St(i, t.memoizedState) || (tt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function zu() {
  }
  function Au(e, t) {
    var n = Me, r = vt(), a = t(), i = !St(r.memoizedState, a);
    if (i && (r.memoizedState = a, tt = !0), r = r.queue, Ko(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Be !== null && Be.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qr(9, ju.bind(null, n, r, a, t), void 0, null), be === null) throw Error(s(349));
      (Cn & 30) !== 0 || Fu(n, t, a);
    }
    return a;
  }
  function Fu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ju(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Bu(t) && bu(e);
  }
  function Uu(e, t, n) {
    return n(function() {
      Bu(t) && bu(e);
    });
  }
  function Bu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !St(e, n);
    } catch {
      return !0;
    }
  }
  function bu(e) {
    var t = bt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function Hu(e) {
    var t = It();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wm.bind(null, Me, e), [t.memoizedState, e];
  }
  function Qr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Vu() {
    return vt().memoizedState;
  }
  function Gl(e, t, n, r) {
    var a = It();
    Me.flags |= e, a.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Xl(e, t, n, r) {
    var a = vt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Fe !== null) {
      var d = Fe.memoizedState;
      if (i = d.destroy, r !== null && Vo(r, d.deps)) {
        a.memoizedState = Qr(t, n, i, r);
        return;
      }
    }
    Me.flags |= e, a.memoizedState = Qr(1 | t, n, i, r);
  }
  function Wu(e, t) {
    return Gl(8390656, 8, e, t);
  }
  function Ko(e, t) {
    return Xl(2048, 8, e, t);
  }
  function Qu(e, t) {
    return Xl(4, 2, e, t);
  }
  function qu(e, t) {
    return Xl(4, 4, e, t);
  }
  function Yu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ku(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Xl(4, 4, Yu.bind(null, t, e), n);
  }
  function Go() {
  }
  function Gu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Xu(e, t) {
    var n = vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Ju(e, t, n) {
    return (Cn & 21) === 0 ? (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n) : (St(n, t) || (n = Rs(), Me.lanes |= n, kn |= n, e.baseState = !0), t);
  }
  function _m(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ho.transition;
    Ho.transition = {};
    try {
      e(!1), t();
    } finally {
      Ee = n, Ho.transition = r;
    }
  }
  function Zu() {
    return vt().memoizedState;
  }
  function Em(e, t, n) {
    var r = dn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ec(e)) tc(t, n);
    else if (n = Lu(e, t, n, r), n !== null) {
      var a = Je();
      Tt(n, e, r, a), nc(n, t, r);
    }
  }
  function wm(e, t, n) {
    var r = dn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ec(e)) tc(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, v = i(d, n);
        if (a.hasEagerState = !0, a.eagerState = v, St(v, d)) {
          var E = t.interleaved;
          E === null ? (a.next = a, Ao(t)) : (a.next = E.next, E.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = Lu(e, t, a, r), n !== null && (a = Je(), Tt(n, e, r, a), nc(n, t, r));
    }
  }
  function ec(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function tc(e, t) {
    Hr = Kl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function nc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xa(e, n);
    }
  }
  var Jl = { readContext: ht, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Sm = { readContext: ht, useCallback: function(e, t) {
    return It().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: Wu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Gl(
      4194308,
      4,
      Yu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Gl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Gl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = It();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = It();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Em.bind(null, Me, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = It();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Hu, useDebugValue: Go, useDeferredValue: function(e) {
    return It().memoizedState = e;
  }, useTransition: function() {
    var e = Hu(!1), t = e[0];
    return e = _m.bind(null, e[1]), It().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Me, a = It();
    if (Te) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), be === null) throw Error(s(349));
      (Cn & 30) !== 0 || Fu(r, t, n);
    }
    a.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return a.queue = i, Wu(Uu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Qr(9, ju.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = It(), t = be.identifierPrefix;
    if (Te) {
      var n = Bt, r = Ut;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = gm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Cm = {
    readContext: ht,
    useCallback: Gu,
    useContext: ht,
    useEffect: Ko,
    useImperativeHandle: Ku,
    useInsertionEffect: Qu,
    useLayoutEffect: qu,
    useMemo: Xu,
    useReducer: qo,
    useRef: Vu,
    useState: function() {
      return qo(Wr);
    },
    useDebugValue: Go,
    useDeferredValue: function(e) {
      var t = vt();
      return Ju(t, Fe.memoizedState, e);
    },
    useTransition: function() {
      var e = qo(Wr)[0], t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: zu,
    useSyncExternalStore: Au,
    useId: Zu,
    unstable_isNewReconciler: !1
  }, km = { readContext: ht, useCallback: Gu, useContext: ht, useEffect: Ko, useImperativeHandle: Ku, useInsertionEffect: Qu, useLayoutEffect: qu, useMemo: Xu, useReducer: Yo, useRef: Vu, useState: function() {
    return Yo(Wr);
  }, useDebugValue: Go, useDeferredValue: function(e) {
    var t = vt();
    return Fe === null ? t.memoizedState = e : Ju(t, Fe.memoizedState, e);
  }, useTransition: function() {
    var e = Yo(Wr)[0], t = vt().memoizedState;
    return [e, t];
  }, useMutableSource: zu, useSyncExternalStore: Au, useId: Zu, unstable_isNewReconciler: !1 };
  function kt(e, t) {
    if (e && e.defaultProps) {
      t = q({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Xo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Zl = { isMounted: function(e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = dn(e), i = Ht(r, a);
    i.payload = t, n != null && (i.callback = n), t = on(e, i, a), t !== null && (Tt(t, e, a, r), Wl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = dn(e), i = Ht(r, a);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = on(e, i, a), t !== null && (Tt(t, e, a, r), Wl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Je(), r = dn(e), a = Ht(n, r);
    a.tag = 2, t != null && (a.callback = t), t = on(e, a, r), t !== null && (Tt(t, e, r, n), Wl(t, e, r));
  } };
  function rc(e, t, n, r, a, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Dr(n, r) || !Dr(a, i) : !0;
  }
  function lc(e, t, n) {
    var r = !1, a = rn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = ht(i) : (a = et(t) ? gn : qe.current, r = t.contextTypes, i = (r = r != null) ? qn(e, a) : rn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function ac(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
  }
  function Jo(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Fo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = ht(i) : (i = et(t) ? gn : qe.current, a.context = qn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Xo(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Zl.enqueueReplaceState(a, a.state, null), Ql(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function tr(e, t) {
    try {
      var n = "", r = t;
      do
        n += fe(r), r = r.return;
      while (r);
      var a = n;
    } catch (i) {
      a = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function Zo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ei(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Nm = typeof WeakMap == "function" ? WeakMap : Map;
  function oc(e, t, n) {
    n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      oa || (oa = !0, hi = r), ei(e, t);
    }, n;
  }
  function ic(e, t, n) {
    n = Ht(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        ei(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      ei(e, t), typeof r != "function" && (un === null ? un = /* @__PURE__ */ new Set([this]) : un.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = jm.bind(null, e, t, n), t.then(e, e));
  }
  function uc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function cc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, on(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var xm = W.ReactCurrentOwner, tt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? Mu(t, null, n, r) : Xn(t, e.child, n, r);
  }
  function dc(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return Zn(t, a), r = Wo(e, t, n, r, i, a), n = Qo(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vt(e, t, a)) : (Te && n && Ro(t), t.flags |= 1, Xe(e, t, r, a), t.child);
  }
  function fc(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Si(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, mc(e, t, i, r, a)) : (e = fa(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Dr, n(d, r) && e.ref === t.ref) return Vt(e, t, a);
    }
    return t.flags |= 1, e = mn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function mc(e, t, n, r, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Dr(i, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, Vt(e, t, a);
    }
    return ti(e, t, n, r, a);
  }
  function pc(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(rr, ct), ct |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(rr, ct), ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Se(rr, ct), ct |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Se(rr, ct), ct |= r;
    return Xe(e, t, a, n), t.child;
  }
  function hc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ti(e, t, n, r, a) {
    var i = et(n) ? gn : qe.current;
    return i = qn(t, i), Zn(t, a), n = Wo(e, t, n, r, i, a), r = Qo(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Vt(e, t, a)) : (Te && r && Ro(t), t.flags |= 1, Xe(e, t, n, a), t.child);
  }
  function vc(e, t, n, r, a) {
    if (et(n)) {
      var i = !0;
      Al(t);
    } else i = !1;
    if (Zn(t, a), t.stateNode === null) ta(e, t), lc(t, n, r), Jo(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, v = t.memoizedProps;
      d.props = v;
      var E = d.context, D = n.contextType;
      typeof D == "object" && D !== null ? D = ht(D) : (D = et(n) ? gn : qe.current, D = qn(t, D));
      var A = n.getDerivedStateFromProps, F = typeof A == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      F || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== r || E !== D) && ac(t, d, r, D), an = !1;
      var O = t.memoizedState;
      d.state = O, Ql(t, r, d, a), E = t.memoizedState, v !== r || O !== E || Ze.current || an ? (typeof A == "function" && (Xo(t, n, A, r), E = t.memoizedState), (v = an || rc(t, n, v, r, O, E, D)) ? (F || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = E), d.props = r, d.state = E, d.context = D, r = v) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Du(e, t), v = t.memoizedProps, D = t.type === t.elementType ? v : kt(t.type, v), d.props = D, F = t.pendingProps, O = d.context, E = n.contextType, typeof E == "object" && E !== null ? E = ht(E) : (E = et(n) ? gn : qe.current, E = qn(t, E));
      var b = n.getDerivedStateFromProps;
      (A = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (v !== F || O !== E) && ac(t, d, r, E), an = !1, O = t.memoizedState, d.state = O, Ql(t, r, d, a);
      var Y = t.memoizedState;
      v !== F || O !== Y || Ze.current || an ? (typeof b == "function" && (Xo(t, n, b, r), Y = t.memoizedState), (D = an || rc(t, n, D, r, O, Y, E) || !1) ? (A || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, Y, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, Y, E)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Y), d.props = r, d.state = Y, d.context = E, r = D) : (typeof d.componentDidUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ni(e, t, n, r, i, a);
  }
  function ni(e, t, n, r, a, i) {
    hc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && wu(t, n, !1), Vt(e, t, i);
    r = t.stateNode, xm.current = t;
    var v = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = Xn(t, e.child, null, i), t.child = Xn(t, null, v, i)) : Xe(e, t, v, i), t.memoizedState = r.state, a && wu(t, n, !0), t.child;
  }
  function yc(e) {
    var t = e.stateNode;
    t.pendingContext ? _u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _u(e, t.context, !1), jo(e, t.containerInfo);
  }
  function gc(e, t, n, r, a) {
    return Gn(), Do(a), t.flags |= 256, Xe(e, t, n, r), t.child;
  }
  var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
  function li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _c(e, t, n) {
    var r = t.pendingProps, a = Pe.current, i = !1, d = (t.flags & 128) !== 0, v;
    if ((v = d) || (v = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), v ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Se(Pe, a & 1), e === null)
      return Lo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = ma(d, r, 0, null), e = Rn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = li(n), t.memoizedState = ri, e) : ai(t, d));
    if (a = e.memoizedState, a !== null && (v = a.dehydrated, v !== null)) return Tm(e, t, d, r, v, a, n);
    if (i) {
      i = r.fallback, d = t.mode, a = e.child, v = a.sibling;
      var E = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = E, t.deletions = null) : (r = mn(a, E), r.subtreeFlags = a.subtreeFlags & 14680064), v !== null ? i = mn(v, i) : (i = Rn(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? li(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = ri, r;
    }
    return i = e.child, e = i.sibling, r = mn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ai(e, t) {
    return t = ma({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ea(e, t, n, r) {
    return r !== null && Do(r), Xn(t, e.child, null, n), e = ai(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Tm(e, t, n, r, a, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Zo(Error(s(422))), ea(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = ma({ mode: "visible", children: r.children }, a, 0, null), i = Rn(i, a, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Xn(t, e.child, null, d), t.child.memoizedState = li(d), t.memoizedState = ri, i);
    if ((t.mode & 1) === 0) return ea(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var v = r.dgst;
      return r = v, i = Error(s(419)), r = Zo(i, r, void 0), ea(e, t, d, r);
    }
    if (v = (d & e.childLanes) !== 0, tt || v) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, bt(e, a), Tt(r, e, a, -1));
      }
      return wi(), r = Zo(Error(s(421))), ea(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Um.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ut = tn(a.nextSibling), st = t, Te = !0, Ct = null, e !== null && (mt[pt++] = Ut, mt[pt++] = Bt, mt[pt++] = _n, Ut = e.id, Bt = e.overflow, _n = t), t = ai(t, r.children), t.flags |= 4096, t);
  }
  function Ec(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), zo(e.return, t, n);
  }
  function oi(e, t, n, r, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
  }
  function wc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, i = r.tail;
    if (Xe(e, t, r.children, n), r = Pe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
        else if (e.tag === 19) Ec(e, n, t);
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
    if (Se(Pe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && ql(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), oi(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && ql(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        oi(t, !0, n, null, i);
        break;
      case "together":
        oi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ta(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), kn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Rm(e, t, n) {
    switch (t.tag) {
      case 3:
        yc(t), Gn();
        break;
      case 5:
        Ou(t);
        break;
      case 1:
        et(t.type) && Al(t);
        break;
      case 4:
        jo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Se(Hl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Se(Pe, Pe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? _c(e, t, n) : (Se(Pe, Pe.current & 1), e = Vt(e, t, n), e !== null ? e.sibling : null);
        Se(Pe, Pe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return wc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Se(Pe, Pe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, pc(e, t, n);
    }
    return Vt(e, t, n);
  }
  var Sc, ii, Cc, kc;
  Sc = function(e, t) {
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
  }, ii = function() {
  }, Cc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, Sn(Dt.current);
      var i = null;
      switch (n) {
        case "input":
          a = Oa(e, a), r = Oa(e, r), i = [];
          break;
        case "select":
          a = q({}, a, { value: void 0 }), r = q({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = Fa(e, a), r = Fa(e, r), i = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $l);
      }
      Ua(n, r);
      var d;
      n = null;
      for (D in a) if (!r.hasOwnProperty(D) && a.hasOwnProperty(D) && a[D] != null) if (D === "style") {
        var v = a[D];
        for (d in v) v.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (f.hasOwnProperty(D) ? i || (i = []) : (i = i || []).push(D, null));
      for (D in r) {
        var E = r[D];
        if (v = a != null ? a[D] : void 0, r.hasOwnProperty(D) && E !== v && (E != null || v != null)) if (D === "style") if (v) {
          for (d in v) !v.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in E) E.hasOwnProperty(d) && v[d] !== E[d] && (n || (n = {}), n[d] = E[d]);
        } else n || (i || (i = []), i.push(
          D,
          n
        )), n = E;
        else D === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, v = v ? v.__html : void 0, E != null && v !== E && (i = i || []).push(D, E)) : D === "children" ? typeof E != "string" && typeof E != "number" || (i = i || []).push(D, "" + E) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (f.hasOwnProperty(D) ? (E != null && D === "onScroll" && ke("scroll", e), i || v === E || (i = [])) : (i = i || []).push(D, E));
      }
      n && (i = i || []).push("style", n);
      var D = i;
      (t.updateQueue = D) && (t.flags |= 4);
    }
  }, kc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function qr(e, t) {
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
  function Pm(e, t, n) {
    var r = t.pendingProps;
    switch (Po(t), t.tag) {
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
        return et(t.type) && zl(), Ke(t), null;
      case 3:
        return r = t.stateNode, er(), Ne(Ze), Ne(qe), bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Bl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (gi(Ct), Ct = null))), ii(e, t), Ke(t), null;
      case 5:
        Uo(t);
        var a = Sn(br.current);
        if (n = t.type, e !== null && t.stateNode != null) Cc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = Sn(Dt.current), Bl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Lt] = t, r[Ar] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ke("cancel", r), ke("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < $r.length; a++) ke($r[a], r);
                break;
              case "source":
                ke("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  r
                ), ke("load", r);
                break;
              case "details":
                ke("toggle", r);
                break;
              case "input":
                ls(r, i), ke("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ke("invalid", r);
                break;
              case "textarea":
                is(r, i), ke("invalid", r);
            }
            Ua(n, i), a = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var v = i[d];
              d === "children" ? typeof v == "string" ? r.textContent !== v && (i.suppressHydrationWarning !== !0 && Il(r.textContent, v, e), a = ["children", v]) : typeof v == "number" && r.textContent !== "" + v && (i.suppressHydrationWarning !== !0 && Il(
                r.textContent,
                v,
                e
              ), a = ["children", "" + v]) : f.hasOwnProperty(d) && v != null && d === "onScroll" && ke("scroll", r);
            }
            switch (n) {
              case "input":
                cl(r), os(r, i, !0);
                break;
              case "textarea":
                cl(r), us(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $l);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[Lt] = t, e[Ar] = r, Sc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ba(n, r), n) {
                case "dialog":
                  ke("cancel", e), ke("close", e), a = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), a = r;
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < $r.length; a++) ke($r[a], e);
                  a = r;
                  break;
                case "source":
                  ke("error", e), a = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ke(
                    "error",
                    e
                  ), ke("load", e), a = r;
                  break;
                case "details":
                  ke("toggle", e), a = r;
                  break;
                case "input":
                  ls(e, r), a = Oa(e, r), ke("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = q({}, r, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  is(e, r), a = Fa(e, r), ke("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ua(n, a), v = a;
              for (i in v) if (v.hasOwnProperty(i)) {
                var E = v[i];
                i === "style" ? ms(e, E) : i === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && ds(e, E)) : i === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && hr(e, E) : typeof E == "number" && hr(e, "" + E) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? E != null && i === "onScroll" && ke("scroll", e) : E != null && j(e, i, E, d));
              }
              switch (n) {
                case "input":
                  cl(e), os(e, r, !1);
                  break;
                case "textarea":
                  cl(e), us(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + _e(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? On(e, !!r.multiple, i, !1) : r.defaultValue != null && On(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = $l);
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
          if (n = Sn(br.current), Sn(Dt.current), Bl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (i = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
              case 3:
                Il(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Il(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (Ne(Pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Te && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Tu(), Gn(), t.flags |= 98560, i = !1;
          else if (i = Bl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Lt] = t;
            } else Gn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else Ct !== null && (gi(Ct), Ct = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Pe.current & 1) !== 0 ? je === 0 && (je = 3) : wi())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return er(), ii(e, t), e === null && Or(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Oo(t.type._context), Ke(t), null;
      case 17:
        return et(t.type) && zl(), Ke(t), null;
      case 19:
        if (Ne(Pe), i = t.memoizedState, i === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) qr(i, !1);
        else {
          if (je !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = ql(e), d !== null) {
              for (t.flags |= 128, qr(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Se(Pe, Pe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && $e() > lr && (t.flags |= 128, r = !0, qr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = ql(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qr(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !Te) return Ke(t), null;
          } else 2 * $e() - i.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, qr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = $e(), t.sibling = null, n = Pe.current, Se(Pe, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Ei(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ct & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Mm(e, t) {
    switch (Po(t), t.tag) {
      case 1:
        return et(t.type) && zl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return er(), Ne(Ze), Ne(qe), bo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Uo(t), null;
      case 13:
        if (Ne(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Gn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(Pe), null;
      case 4:
        return er(), null;
      case 10:
        return Oo(t.type._context), null;
      case 22:
      case 23:
        return Ei(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var na = !1, Ge = !1, Lm = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function nr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ie(e, t, r);
    }
    else n.current = null;
  }
  function si(e, t, n) {
    try {
      n();
    } catch (r) {
      Ie(e, t, r);
    }
  }
  var Nc = !1;
  function Dm(e, t) {
    if (Eo = Sl, e = ru(), fo(e)) {
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
          var d = 0, v = -1, E = -1, D = 0, A = 0, F = e, O = null;
          t: for (; ; ) {
            for (var b; F !== n || a !== 0 && F.nodeType !== 3 || (v = d + a), F !== i || r !== 0 && F.nodeType !== 3 || (E = d + r), F.nodeType === 3 && (d += F.nodeValue.length), (b = F.firstChild) !== null; )
              O = F, F = b;
            for (; ; ) {
              if (F === e) break t;
              if (O === n && ++D === a && (v = d), O === i && ++A === r && (E = d), (b = F.nextSibling) !== null) break;
              F = O, O = F.parentNode;
            }
            F = b;
          }
          n = v === -1 || E === -1 ? null : { start: v, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wo = { focusedElem: e, selectionRange: n }, Sl = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
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
              var G = Y.memoizedProps, Oe = Y.memoizedState, x = t.stateNode, w = x.getSnapshotBeforeUpdate(t.elementType === t.type ? G : kt(t.type, G), Oe);
              x.__reactInternalSnapshotBeforeUpdate = w;
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
        Ie(t, t.return, U);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return Y = Nc, Nc = !1, Y;
  }
  function Yr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var i = a.destroy;
          a.destroy = void 0, i !== void 0 && si(t, n, i);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function ra(e, t) {
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
  function ui(e) {
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
  function xc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[Ar], delete t[No], delete t[pm], delete t[hm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Tc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Rc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $l));
    else if (r !== 4 && (e = e.child, e !== null)) for (ci(e, t, n), e = e.sibling; e !== null; ) ci(e, t, n), e = e.sibling;
  }
  function di(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (di(e, t, n), e = e.sibling; e !== null; ) di(e, t, n), e = e.sibling;
  }
  var We = null, Nt = !1;
  function sn(e, t, n) {
    for (n = n.child; n !== null; ) Pc(e, t, n), n = n.sibling;
  }
  function Pc(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
      Mt.onCommitFiberUnmount(vl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || nr(n, t);
      case 6:
        var r = We, a = Nt;
        We = null, sn(e, t, n), We = r, Nt = a, We !== null && (Nt ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
        break;
      case 18:
        We !== null && (Nt ? (e = We, n = n.stateNode, e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n), xr(e)) : ko(We, n.stateNode));
        break;
      case 4:
        r = We, a = Nt, We = n.stateNode.containerInfo, Nt = !0, sn(e, t, n), We = r, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var i = a, d = i.destroy;
            i = i.tag, d !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && si(n, t, d), a = a.next;
          } while (a !== r);
        }
        sn(e, t, n);
        break;
      case 1:
        if (!Ge && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (v) {
          Ie(n, t, v);
        }
        sn(e, t, n);
        break;
      case 21:
        sn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, sn(e, t, n), Ge = r) : sn(e, t, n);
        break;
      default:
        sn(e, t, n);
    }
  }
  function Mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Lm()), t.forEach(function(r) {
        var a = Bm.bind(null, e, r);
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
        Pc(i, d, a), We = null, Nt = !1;
        var E = a.alternate;
        E !== null && (E.return = null), a.return = null;
      } catch (D) {
        Ie(a, t, D);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lc(t, e), t = t.sibling;
  }
  function Lc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (xt(t, e), $t(e), r & 4) {
          try {
            Yr(3, e, e.return), ra(3, e);
          } catch (G) {
            Ie(e, e.return, G);
          }
          try {
            Yr(5, e, e.return);
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        break;
      case 1:
        xt(t, e), $t(e), r & 512 && n !== null && nr(n, n.return);
        break;
      case 5:
        if (xt(t, e), $t(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            hr(a, "");
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, v = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            v === "input" && i.type === "radio" && i.name != null && as(a, i), Ba(v, d);
            var D = Ba(v, i);
            for (d = 0; d < E.length; d += 2) {
              var A = E[d], F = E[d + 1];
              A === "style" ? ms(a, F) : A === "dangerouslySetInnerHTML" ? ds(a, F) : A === "children" ? hr(a, F) : j(a, A, F, D);
            }
            switch (v) {
              case "input":
                za(a, i);
                break;
              case "textarea":
                ss(a, i);
                break;
              case "select":
                var O = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null ? On(a, !!i.multiple, b, !1) : O !== !!i.multiple && (i.defaultValue != null ? On(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : On(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[Ar] = i;
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        break;
      case 6:
        if (xt(t, e), $t(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          a = e.stateNode, i = e.memoizedProps;
          try {
            a.nodeValue = i;
          } catch (G) {
            Ie(e, e.return, G);
          }
        }
        break;
      case 3:
        if (xt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          xr(t.containerInfo);
        } catch (G) {
          Ie(e, e.return, G);
        }
        break;
      case 4:
        xt(t, e), $t(e);
        break;
      case 13:
        xt(t, e), $t(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (pi = $e())), r & 4 && Mc(e);
        break;
      case 22:
        if (A = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (D = Ge) || A, xt(t, e), Ge = D) : xt(t, e), $t(e), r & 8192) {
          if (D = e.memoizedState !== null, (e.stateNode.isHidden = D) && !A && (e.mode & 1) !== 0) for (Q = e, A = e.child; A !== null; ) {
            for (F = Q = A; Q !== null; ) {
              switch (O = Q, b = O.child, O.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yr(4, O, O.return);
                  break;
                case 1:
                  nr(O, O.return);
                  var Y = O.stateNode;
                  if (typeof Y.componentWillUnmount == "function") {
                    r = O, n = O.return;
                    try {
                      t = r, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                    } catch (G) {
                      Ie(r, n, G);
                    }
                  }
                  break;
                case 5:
                  nr(O, O.return);
                  break;
                case 22:
                  if (O.memoizedState !== null) {
                    $c(F);
                    continue;
                  }
              }
              b !== null ? (b.return = O, Q = b) : $c(F);
            }
            A = A.sibling;
          }
          e: for (A = null, F = e; ; ) {
            if (F.tag === 5) {
              if (A === null) {
                A = F;
                try {
                  a = F.stateNode, D ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (v = F.stateNode, E = F.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, v.style.display = fs("display", d));
                } catch (G) {
                  Ie(e, e.return, G);
                }
              }
            } else if (F.tag === 6) {
              if (A === null) try {
                F.stateNode.nodeValue = D ? "" : F.memoizedProps;
              } catch (G) {
                Ie(e, e.return, G);
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
        xt(t, e), $t(e), r & 4 && Mc(e);
        break;
      case 21:
        break;
      default:
        xt(
          t,
          e
        ), $t(e);
    }
  }
  function $t(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Tc(n)) {
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
            r.flags & 32 && (hr(a, ""), r.flags &= -33);
            var i = Rc(e);
            di(e, i, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, v = Rc(e);
            ci(e, v, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (E) {
        Ie(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Im(e, t, n) {
    Q = e, Dc(e);
  }
  function Dc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, i = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || na;
        if (!d) {
          var v = a.alternate, E = v !== null && v.memoizedState !== null || Ge;
          v = na;
          var D = Ge;
          if (na = d, (Ge = E) && !D) for (Q = a; Q !== null; ) d = Q, E = d.child, d.tag === 22 && d.memoizedState !== null ? Oc(a) : E !== null ? (E.return = d, Q = E) : Oc(a);
          for (; i !== null; ) Q = i, Dc(i), i = i.sibling;
          Q = a, na = v, Ge = D;
        }
        Ic(e);
      } else (a.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = a, Q = i) : Ic(e);
    }
  }
  function Ic(e) {
    for (; Q !== null; ) {
      var t = Q;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || ra(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : kt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && $u(t, i, r);
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
                $u(t, d, n);
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
                var D = t.alternate;
                if (D !== null) {
                  var A = D.memoizedState;
                  if (A !== null) {
                    var F = A.dehydrated;
                    F !== null && xr(F);
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
          Ge || t.flags & 512 && ui(t);
        } catch (O) {
          Ie(t, t.return, O);
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
  function $c(e) {
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
  function Oc(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ra(4, t);
            } catch (E) {
              Ie(t, n, E);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (E) {
                Ie(t, a, E);
              }
            }
            var i = t.return;
            try {
              ui(t);
            } catch (E) {
              Ie(t, i, E);
            }
            break;
          case 5:
            var d = t.return;
            try {
              ui(t);
            } catch (E) {
              Ie(t, d, E);
            }
        }
      } catch (E) {
        Ie(t, t.return, E);
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
  var $m = Math.ceil, la = W.ReactCurrentDispatcher, fi = W.ReactCurrentOwner, yt = W.ReactCurrentBatchConfig, de = 0, be = null, Ae = null, Qe = 0, ct = 0, rr = nn(0), je = 0, Kr = null, kn = 0, aa = 0, mi = 0, Gr = null, nt = null, pi = 0, lr = 1 / 0, Wt = null, oa = !1, hi = null, un = null, ia = !1, cn = null, sa = 0, Xr = 0, vi = null, ua = -1, ca = 0;
  function Je() {
    return (de & 6) !== 0 ? $e() : ua !== -1 ? ua : ua = $e();
  }
  function dn(e) {
    return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && Qe !== 0 ? Qe & -Qe : ym.transition !== null ? (ca === 0 && (ca = Rs()), ca) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : As(e.type)), e);
  }
  function Tt(e, t, n, r) {
    if (50 < Xr) throw Xr = 0, vi = null, Error(s(185));
    wr(e, n, r), ((de & 2) === 0 || e !== be) && (e === be && ((de & 2) === 0 && (aa |= n), je === 4 && fn(e, Qe)), rt(e, r), n === 1 && de === 0 && (t.mode & 1) === 0 && (lr = $e() + 500, Fl && ln()));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = _l(e, e === be ? Qe : 0);
    if (r === 0) n !== null && Ns(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ns(n), t === 1) e.tag === 0 ? vm(Ac.bind(null, e)) : Su(Ac.bind(null, e)), fm(function() {
        (de & 6) === 0 && ln();
      }), n = null;
      else {
        switch (Ps(r)) {
          case 1:
            n = Ya;
            break;
          case 4:
            n = xs;
            break;
          case 16:
            n = hl;
            break;
          case 536870912:
            n = Ts;
            break;
          default:
            n = hl;
        }
        n = Wc(n, zc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function zc(e, t) {
    if (ua = -1, ca = 0, (de & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (ar() && e.callbackNode !== n) return null;
    var r = _l(e, e === be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = da(e, r);
    else {
      t = r;
      var a = de;
      de |= 2;
      var i = jc();
      (be !== e || Qe !== t) && (Wt = null, lr = $e() + 500, xn(e, t));
      do
        try {
          Am();
          break;
        } catch (v) {
          Fc(e, v);
        }
      while (!0);
      $o(), la.current = i, de = a, Ae !== null ? t = 0 : (be = null, Qe = 0, t = je);
    }
    if (t !== 0) {
      if (t === 2 && (a = Ka(e), a !== 0 && (r = a, t = yi(e, a))), t === 1) throw n = Kr, xn(e, 0), fn(e, r), rt(e, $e()), n;
      if (t === 6) fn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Om(a) && (t = da(e, r), t === 2 && (i = Ka(e), i !== 0 && (r = i, t = yi(e, i))), t === 1)) throw n = Kr, xn(e, 0), fn(e, r), rt(e, $e()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Tn(e, nt, Wt);
            break;
          case 3:
            if (fn(e, r), (r & 130023424) === r && (t = pi + 500 - $e(), 10 < t)) {
              if (_l(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Je(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Co(Tn.bind(null, e, nt, Wt), t);
              break;
            }
            Tn(e, nt, Wt);
            break;
          case 4:
            if (fn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - wt(r);
              i = 1 << d, d = t[d], d > a && (a = d), r &= ~i;
            }
            if (r = a, r = $e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $m(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Co(Tn.bind(null, e, nt, Wt), r);
              break;
            }
            Tn(e, nt, Wt);
            break;
          case 5:
            Tn(e, nt, Wt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return rt(e, $e()), e.callbackNode === n ? zc.bind(null, e) : null;
  }
  function yi(e, t) {
    var n = Gr;
    return e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256), e = da(e, t), e !== 2 && (t = nt, nt = n, t !== null && gi(t)), e;
  }
  function gi(e) {
    nt === null ? nt = e : nt.push.apply(nt, e);
  }
  function Om(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], i = a.getSnapshot;
          a = a.value;
          try {
            if (!St(i(), a)) return !1;
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
  function fn(e, t) {
    for (t &= ~mi, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ac(e) {
    if ((de & 6) !== 0) throw Error(s(327));
    ar();
    var t = _l(e, 0);
    if ((t & 1) === 0) return rt(e, $e()), null;
    var n = da(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ka(e);
      r !== 0 && (t = r, n = yi(e, r));
    }
    if (n === 1) throw n = Kr, xn(e, 0), fn(e, t), rt(e, $e()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tn(e, nt, Wt), rt(e, $e()), null;
  }
  function _i(e, t) {
    var n = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      de = n, de === 0 && (lr = $e() + 500, Fl && ln());
    }
  }
  function Nn(e) {
    cn !== null && cn.tag === 0 && (de & 6) === 0 && ar();
    var t = de;
    de |= 1;
    var n = yt.transition, r = Ee;
    try {
      if (yt.transition = null, Ee = 1, e) return e();
    } finally {
      Ee = r, yt.transition = n, de = t, (de & 6) === 0 && ln();
    }
  }
  function Ei() {
    ct = rr.current, Ne(rr);
  }
  function xn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, dm(n)), Ae !== null) for (n = Ae.return; n !== null; ) {
      var r = n;
      switch (Po(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && zl();
          break;
        case 3:
          er(), Ne(Ze), Ne(qe), bo();
          break;
        case 5:
          Uo(r);
          break;
        case 4:
          er();
          break;
        case 13:
          Ne(Pe);
          break;
        case 19:
          Ne(Pe);
          break;
        case 10:
          Oo(r.type._context);
          break;
        case 22:
        case 23:
          Ei();
      }
      n = n.return;
    }
    if (be = e, Ae = e = mn(e.current, null), Qe = ct = t, je = 0, Kr = null, mi = aa = kn = 0, nt = Gr = null, wn !== null) {
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
  function Fc(e, t) {
    do {
      var n = Ae;
      try {
        if ($o(), Yl.current = Jl, Kl) {
          for (var r = Me.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Kl = !1;
        }
        if (Cn = 0, Be = Fe = Me = null, Hr = !1, Vr = 0, fi.current = null, n === null || n.return === null) {
          je = 1, Kr = t, Ae = null;
          break;
        }
        e: {
          var i = e, d = n.return, v = n, E = t;
          if (t = Qe, v.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var D = E, A = v, F = A.tag;
            if ((A.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var O = A.alternate;
              O ? (A.updateQueue = O.updateQueue, A.memoizedState = O.memoizedState, A.lanes = O.lanes) : (A.updateQueue = null, A.memoizedState = null);
            }
            var b = uc(d);
            if (b !== null) {
              b.flags &= -257, cc(b, d, v, i, t), b.mode & 1 && sc(i, D, t), t = b, E = D;
              var Y = t.updateQueue;
              if (Y === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(E), t.updateQueue = G;
              } else Y.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                sc(i, D, t), wi();
                break e;
              }
              E = Error(s(426));
            }
          } else if (Te && v.mode & 1) {
            var Oe = uc(d);
            if (Oe !== null) {
              (Oe.flags & 65536) === 0 && (Oe.flags |= 256), cc(Oe, d, v, i, t), Do(tr(E, v));
              break e;
            }
          }
          i = E = tr(E, v), je !== 4 && (je = 2), Gr === null ? Gr = [i] : Gr.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = oc(i, E, t);
                Iu(i, x);
                break e;
              case 1:
                v = E;
                var w = i.type, M = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (un === null || !un.has(M)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var U = ic(i, v, t);
                  Iu(i, U);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        Bc(n);
      } catch (Z) {
        t = Z, Ae === n && n !== null && (Ae = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function jc() {
    var e = la.current;
    return la.current = Jl, e === null ? Jl : e;
  }
  function wi() {
    (je === 0 || je === 3 || je === 2) && (je = 4), be === null || (kn & 268435455) === 0 && (aa & 268435455) === 0 || fn(be, Qe);
  }
  function da(e, t) {
    var n = de;
    de |= 2;
    var r = jc();
    (be !== e || Qe !== t) && (Wt = null, xn(e, t));
    do
      try {
        zm();
        break;
      } catch (a) {
        Fc(e, a);
      }
    while (!0);
    if ($o(), de = n, la.current = r, Ae !== null) throw Error(s(261));
    return be = null, Qe = 0, je;
  }
  function zm() {
    for (; Ae !== null; ) Uc(Ae);
  }
  function Am() {
    for (; Ae !== null && !sf(); ) Uc(Ae);
  }
  function Uc(e) {
    var t = Vc(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps, t === null ? Bc(e) : Ae = t, fi.current = null;
  }
  function Bc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Pm(n, t, ct), n !== null) {
          Ae = n;
          return;
        }
      } else {
        if (n = Mm(n, t), n !== null) {
          n.flags &= 32767, Ae = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          je = 6, Ae = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ae = t;
        return;
      }
      Ae = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function Tn(e, t, n) {
    var r = Ee, a = yt.transition;
    try {
      yt.transition = null, Ee = 1, Fm(e, t, n, r);
    } finally {
      yt.transition = a, Ee = r;
    }
    return null;
  }
  function Fm(e, t, n, r) {
    do
      ar();
    while (cn !== null);
    if ((de & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (gf(e, i), e === be && (Ae = be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ia || (ia = !0, Wc(hl, function() {
      return ar(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = yt.transition, yt.transition = null;
      var d = Ee;
      Ee = 1;
      var v = de;
      de |= 4, fi.current = null, Dm(e, n), Lc(n, e), lm(wo), Sl = !!Eo, wo = Eo = null, e.current = n, Im(n), uf(), de = v, Ee = d, yt.transition = i;
    } else e.current = n;
    if (ia && (ia = !1, cn = e, sa = a), i = e.pendingLanes, i === 0 && (un = null), ff(n.stateNode), rt(e, $e()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (oa) throw oa = !1, e = hi, hi = null, e;
    return (sa & 1) !== 0 && e.tag !== 0 && ar(), i = e.pendingLanes, (i & 1) !== 0 ? e === vi ? Xr++ : (Xr = 0, vi = e) : Xr = 0, ln(), null;
  }
  function ar() {
    if (cn !== null) {
      var e = Ps(sa), t = yt.transition, n = Ee;
      try {
        if (yt.transition = null, Ee = 16 > e ? 16 : e, cn === null) var r = !1;
        else {
          if (e = cn, cn = null, sa = 0, (de & 6) !== 0) throw Error(s(331));
          var a = de;
          for (de |= 4, Q = e.current; Q !== null; ) {
            var i = Q, d = i.child;
            if ((Q.flags & 16) !== 0) {
              var v = i.deletions;
              if (v !== null) {
                for (var E = 0; E < v.length; E++) {
                  var D = v[E];
                  for (Q = D; Q !== null; ) {
                    var A = Q;
                    switch (A.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yr(8, A, i);
                    }
                    var F = A.child;
                    if (F !== null) F.return = A, Q = F;
                    else for (; Q !== null; ) {
                      A = Q;
                      var O = A.sibling, b = A.return;
                      if (xc(A), A === D) {
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
                  Yr(9, i, i.return);
              }
              var x = i.sibling;
              if (x !== null) {
                x.return = i.return, Q = x;
                break e;
              }
              Q = i.return;
            }
          }
          var w = e.current;
          for (Q = w; Q !== null; ) {
            d = Q;
            var M = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && M !== null) M.return = d, Q = M;
            else e: for (d = w; Q !== null; ) {
              if (v = Q, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ra(9, v);
                }
              } catch (Z) {
                Ie(v, v.return, Z);
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
          if (de = a, ln(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
            Mt.onPostCommitFiberRoot(vl, e);
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
  function bc(e, t, n) {
    t = tr(n, t), t = oc(e, t, 1), e = on(e, t, 1), t = Je(), e !== null && (wr(e, 1, t), rt(e, t));
  }
  function Ie(e, t, n) {
    if (e.tag === 3) bc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        bc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (un === null || !un.has(r))) {
          e = tr(n, e), e = ic(t, e, 1), t = on(t, e, 1), e = Je(), t !== null && (wr(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function jm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Je(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Qe & n) === n && (je === 4 || je === 3 && (Qe & 130023424) === Qe && 500 > $e() - pi ? xn(e, 0) : mi |= n), rt(e, t);
  }
  function Hc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = gl, gl <<= 1, (gl & 130023424) === 0 && (gl = 4194304)));
    var n = Je();
    e = bt(e, t), e !== null && (wr(e, t, n), rt(e, n));
  }
  function Um(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Hc(e, n);
  }
  function Bm(e, t) {
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
    r !== null && r.delete(t), Hc(e, n);
  }
  var Vc;
  Vc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) tt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return tt = !1, Rm(e, t, n);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, Te && (t.flags & 1048576) !== 0 && Cu(t, Ul, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ta(e, t), e = t.pendingProps;
        var a = qn(t, qe.current);
        Zn(t, n), a = Wo(null, t, r, e, a, n);
        var i = Qo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (i = !0, Al(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Fo(t), a.updater = Zl, t.stateNode = a, a._reactInternals = t, Jo(t, r, e, n), t = ni(null, t, r, !0, i, n)) : (t.tag = 0, Te && i && Ro(t), Xe(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ta(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Hm(r), e = kt(r, e), a) {
            case 0:
              t = ti(null, t, r, e, n);
              break e;
            case 1:
              t = vc(null, t, r, e, n);
              break e;
            case 11:
              t = dc(null, t, r, e, n);
              break e;
            case 14:
              t = fc(null, t, r, kt(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : kt(r, a), ti(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : kt(r, a), vc(e, t, r, a, n);
      case 3:
        e: {
          if (yc(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, a = i.element, Du(e, t), Ql(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = tr(Error(s(423)), t), t = gc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = tr(Error(s(424)), t), t = gc(e, t, r, n, a);
            break e;
          } else for (ut = tn(t.stateNode.containerInfo.firstChild), st = t, Te = !0, Ct = null, n = Mu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Gn(), r === a) {
              t = Vt(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ou(t), e === null && Lo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = a.children, So(r, a) ? d = null : i !== null && So(r, i) && (t.flags |= 32), hc(e, t), Xe(e, t, d, n), t.child;
      case 6:
        return e === null && Lo(t), null;
      case 13:
        return _c(e, t, n);
      case 4:
        return jo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : Xe(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : kt(r, a), dc(e, t, r, a, n);
      case 7:
        return Xe(e, t, t.pendingProps, n), t.child;
      case 8:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Xe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, d = a.value, Se(Hl, r._currentValue), r._currentValue = d, i !== null) if (St(i.value, d)) {
            if (i.children === a.children && !Ze.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var v = i.dependencies;
            if (v !== null) {
              d = i.child;
              for (var E = v.firstContext; E !== null; ) {
                if (E.context === r) {
                  if (i.tag === 1) {
                    E = Ht(-1, n & -n), E.tag = 2;
                    var D = i.updateQueue;
                    if (D !== null) {
                      D = D.shared;
                      var A = D.pending;
                      A === null ? E.next = E : (E.next = A.next, A.next = E), D.pending = E;
                    }
                  }
                  i.lanes |= n, E = i.alternate, E !== null && (E.lanes |= n), zo(
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
              d.lanes |= n, v = d.alternate, v !== null && (v.lanes |= n), zo(d, n, t), d = i.sibling;
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
        return a = t.type, r = t.pendingProps.children, Zn(t, n), a = ht(a), r = r(a), t.flags |= 1, Xe(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = kt(r, t.pendingProps), a = kt(r.type, a), fc(e, t, r, a, n);
      case 15:
        return mc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : kt(r, a), ta(e, t), t.tag = 1, et(r) ? (e = !0, Al(t)) : e = !1, Zn(t, n), lc(t, r, a), Jo(t, r, a, n), ni(null, t, r, !0, e, n);
      case 19:
        return wc(e, t, n);
      case 22:
        return pc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Wc(e, t) {
    return ks(e, t);
  }
  function bm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gt(e, t, n, r) {
    return new bm(e, t, n, r);
  }
  function Si(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hm(e) {
    if (typeof e == "function") return Si(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === he) return 11;
      if (e === J) return 14;
    }
    return 2;
  }
  function mn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function fa(e, t, n, r, a, i) {
    var d = 2;
    if (r = e, typeof e == "function") Si(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case oe:
        return Rn(n.children, a, i, t);
      case te:
        d = 8, a |= 8;
        break;
      case ge:
        return e = gt(12, n, t, a | 2), e.elementType = ge, e.lanes = i, e;
      case ze:
        return e = gt(13, n, t, a), e.elementType = ze, e.lanes = i, e;
      case Ue:
        return e = gt(19, n, t, a), e.elementType = Ue, e.lanes = i, e;
      case De:
        return ma(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ce:
            d = 10;
            break e;
          case X:
            d = 9;
            break e;
          case he:
            d = 11;
            break e;
          case J:
            d = 14;
            break e;
          case Le:
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
  function ma(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = De, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ci(e, t, n) {
    return e = gt(6, e, null, t), e.lanes = n, e;
  }
  function ki(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Vm(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ga(0), this.expirationTimes = Ga(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ga(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Ni(e, t, n, r, a, i, d, v, E) {
    return e = new Vm(e, t, n, v, E), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = gt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fo(i), e;
  }
  function Wm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: V, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Qc(e) {
    if (!e) return rn;
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
      if (et(n)) return Eu(e, n, t);
    }
    return t;
  }
  function qc(e, t, n, r, a, i, d, v, E) {
    return e = Ni(n, r, !0, e, a, i, d, v, E), e.context = Qc(null), n = e.current, r = Je(), a = dn(n), i = Ht(r, a), i.callback = t ?? null, on(n, i, a), e.current.lanes = a, wr(e, a, r), rt(e, r), e;
  }
  function pa(e, t, n, r) {
    var a = t.current, i = Je(), d = dn(a);
    return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = on(a, t, d), e !== null && (Tt(e, a, d, i), Wl(e, a, d)), d;
  }
  function ha(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Yc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function xi(e, t) {
    Yc(e, t), (e = e.alternate) && Yc(e, t);
  }
  function Qm() {
    return null;
  }
  var Kc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ti(e) {
    this._internalRoot = e;
  }
  va.prototype.render = Ti.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    pa(e, t, null, null);
  }, va.prototype.unmount = Ti.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Nn(function() {
        pa(null, e, null, null);
      }), t[Ft] = null;
    }
  };
  function va(e) {
    this._internalRoot = e;
  }
  va.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ds();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++) ;
      Jt.splice(n, 0, e), n === 0 && Os(e);
    }
  };
  function Ri(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ya(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Gc() {
  }
  function qm(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var D = ha(d);
          i.call(D);
        };
      }
      var d = qc(t, r, e, 0, null, !1, !1, "", Gc);
      return e._reactRootContainer = d, e[Ft] = d.current, Or(e.nodeType === 8 ? e.parentNode : e), Nn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var v = r;
      r = function() {
        var D = ha(E);
        v.call(D);
      };
    }
    var E = Ni(e, 0, !1, null, null, !1, !1, "", Gc);
    return e._reactRootContainer = E, e[Ft] = E.current, Or(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
      pa(t, E, n, r);
    }), E;
  }
  function ga(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
      var d = i;
      if (typeof a == "function") {
        var v = a;
        a = function() {
          var E = ha(d);
          v.call(E);
        };
      }
      pa(t, d, e, a);
    } else d = qm(n, t, e, a, r);
    return ha(d);
  }
  Ms = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Er(t.pendingLanes);
          n !== 0 && (Xa(t, n | 1), rt(t, $e()), (de & 6) === 0 && (lr = $e() + 500, ln()));
        }
        break;
      case 13:
        Nn(function() {
          var r = bt(e, 1);
          if (r !== null) {
            var a = Je();
            Tt(r, e, 1, a);
          }
        }), xi(e, 1);
    }
  }, Ja = function(e) {
    if (e.tag === 13) {
      var t = bt(e, 134217728);
      if (t !== null) {
        var n = Je();
        Tt(t, e, 134217728, n);
      }
      xi(e, 134217728);
    }
  }, Ls = function(e) {
    if (e.tag === 13) {
      var t = dn(e), n = bt(e, t);
      if (n !== null) {
        var r = Je();
        Tt(n, e, t, r);
      }
      xi(e, t);
    }
  }, Ds = function() {
    return Ee;
  }, Is = function(e, t) {
    var n = Ee;
    try {
      return Ee = e, t();
    } finally {
      Ee = n;
    }
  }, Va = function(e, t, n) {
    switch (t) {
      case "input":
        if (za(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Ol(r);
              if (!a) throw Error(s(90));
              rs(r), za(r, a);
            }
          }
        }
        break;
      case "textarea":
        ss(e, n);
        break;
      case "select":
        t = n.value, t != null && On(e, !!n.multiple, t, !1);
    }
  }, ys = _i, gs = Nn;
  var Ym = { usingClientEntryPoint: !1, Events: [Fr, Wn, Ol, hs, vs, _i] }, Jr = { findFiberByHostInstance: yn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Km = { bundleType: Jr.bundleType, version: Jr.version, rendererPackageName: Jr.rendererPackageName, rendererConfig: Jr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: W.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ss(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Jr.findFiberByHostInstance || Qm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_a.isDisabled && _a.supportsFiber) try {
      vl = _a.inject(Km), Mt = _a;
    } catch {
    }
  }
  return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym, lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ri(t)) throw Error(s(200));
    return Wm(e, t, null, n);
  }, lt.createRoot = function(e, t) {
    if (!Ri(e)) throw Error(s(299));
    var n = !1, r = "", a = Kc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ni(e, 1, !1, null, null, n, !1, r, a), e[Ft] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new Ti(t);
  }, lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Ss(t), e = e === null ? null : e.stateNode, e;
  }, lt.flushSync = function(e) {
    return Nn(e);
  }, lt.hydrate = function(e, t, n) {
    if (!ya(t)) throw Error(s(200));
    return ga(null, e, t, !0, n);
  }, lt.hydrateRoot = function(e, t, n) {
    if (!Ri(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, i = "", d = Kc;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = qc(t, null, e, 1, n ?? null, a, !1, i, d), e[Ft] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new va(t);
  }, lt.render = function(e, t, n) {
    if (!ya(t)) throw Error(s(200));
    return ga(null, e, t, !1, n);
  }, lt.unmountComponentAtNode = function(e) {
    if (!ya(e)) throw Error(s(40));
    return e._reactRootContainer ? (Nn(function() {
      ga(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ft] = null;
      });
    }), !0) : !1;
  }, lt.unstable_batchedUpdates = _i, lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ya(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return ga(e, t, n, !1, r);
  }, lt.version = "18.3.1-next-f1338f8080-20240426", lt;
}
var nd;
function tp() {
  if (nd) return Mi.exports;
  nd = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Mi.exports = ep(), Mi.exports;
}
var rd;
function np() {
  if (rd) return Ea;
  rd = 1;
  var l = tp();
  return Ea.createRoot = l.createRoot, Ea.hydrateRoot = l.hydrateRoot, Ea;
}
var rp = np();
const lp = /* @__PURE__ */ Rd(rp);
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
var ld = "popstate";
function ad(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function ap(l = {}) {
  function o(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = In(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Vi(
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
    return h + "#" + (typeof m == "string" ? m : ll(m));
  }
  function c(f, m) {
    _t(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return ip(
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
function op() {
  return Math.random().toString(36).substring(2, 10);
}
function od(l, o) {
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
function Vi(l, o, s = null, c, f) {
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
    key: o && o.key || c || op(),
    mask: f
  };
}
function ll({
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
function ip(l, o, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", y = null, C = S();
  C == null && (C = 0, p.replaceState({ ...p.state, idx: C }, ""));
  function S() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let N = S(), $ = N == null ? null : N - C;
    C = N, y && y({ action: h, location: I.location, delta: $ });
  }
  function R(N, $) {
    h = "PUSH";
    let P = ad(N) ? N : Vi(I.location, N, $);
    s && s(P, N), C = S() + 1;
    let j = od(P, C), W = I.createHref(P.mask || P);
    try {
      p.pushState(j, "", W);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError")
        throw H;
      f.location.assign(W);
    }
    m && y && y({ action: h, location: I.location, delta: 1 });
  }
  function T(N, $) {
    h = "REPLACE";
    let P = ad(N) ? N : Vi(I.location, N, $);
    s && s(P, N), C = S();
    let j = od(P, C), W = I.createHref(P.mask || P);
    p.replaceState(j, "", W), m && y && y({ action: h, location: I.location, delta: 0 });
  }
  function L(N) {
    return sp(f, N);
  }
  let I = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(N) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(ld, _), y = N, () => {
        f.removeEventListener(ld, _), y = null;
      };
    },
    createHref(N) {
      return o(f, N);
    },
    createURL: L,
    encodeLocation(N) {
      let $ = L(N);
      return {
        pathname: $.pathname,
        search: $.search,
        hash: $.hash
      };
    },
    push: R,
    replace: T,
    go(N) {
      return p.go(N);
    }
  };
  return I;
}
function sp(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Re(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : ll(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Md(l, o, s = "/") {
  return up(l, o, s, !1);
}
function up(l, o, s, c, f) {
  let m = typeof o == "string" ? In(o) : o, p = Qt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = cp(l), y = null, C = Sp(p);
  for (let S = 0; y == null && S < h.length; ++S)
    y = Ep(
      h[S],
      C,
      c
    );
  return y;
}
function cp(l) {
  let o = Ld(l);
  return dp(o), o;
}
function Ld(l, o = [], s = [], c = "", f = !1) {
  let m = (p, h, y = f, C) => {
    let S = {
      relativePath: C === void 0 ? p.path || "" : C,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(c) && y)
        return;
      Re(
        S.relativePath.startsWith(c),
        `Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(c.length);
    }
    let _ = Rt([c, S.relativePath]), R = s.concat(S);
    p.children && p.children.length > 0 && (Re(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), Ld(
      p.children,
      o,
      R,
      _,
      y
    )), !(p.path == null && !p.index) && o.push({
      path: _,
      score: gp(_, p.index),
      routesMeta: R
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let C of Dd(p.path))
        m(p, h, !0, C);
  }), o;
}
function Dd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [s, ...c] = o, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = Dd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), f && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function dp(l) {
  l.sort(
    (o, s) => o.score !== s.score ? s.score - o.score : _p(
      o.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var fp = /^:[\w-]+$/, mp = 3, pp = 2, hp = 1, vp = 10, yp = -2, id = (l) => l === "*";
function gp(l, o) {
  let s = l.split("/"), c = s.length;
  return s.some(id) && (c += yp), o && (c += pp), s.filter((f) => !id(f)).reduce(
    (f, m) => f + (fp.test(m) ? mp : m === "" ? hp : vp),
    c
  );
}
function _p(l, o) {
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
function Ep(l, o, s = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], C = h === c.length - 1, S = m === "/" ? o : o.slice(m.length) || "/", _ = Ra(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: C },
      S
    ), R = y.route;
    if (!_ && C && s && !c[c.length - 1].route.index && (_ = Ra(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      S
    )), !_)
      return null;
    Object.assign(f, _.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Rt([m, _.pathname]),
      pathnameBase: xp(
        Rt([m, _.pathnameBase])
      ),
      route: R
    }), _.pathnameBase !== "/" && (m = Rt([m, _.pathnameBase]));
  }
  return p;
}
function Ra(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = wp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (C, { paramName: S, isOptional: _ }, R) => {
        if (S === "*") {
          let L = h[R] || "";
          p = m.slice(0, m.length - L.length).replace(/(.)\/+$/, "$1");
        }
        const T = h[R];
        return _ && !T ? C[S] = void 0 : C[S] = (T || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function wp(l, o = !1, s = !0) {
  _t(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, C, S) => {
      if (c.push({ paramName: h, isOptional: y != null }), y) {
        let _ = S.charAt(C + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function Sp(l) {
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
var Cp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function kp(l, o = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? In(l) : l, m;
  return s ? (s = Id(s), s.startsWith("/") ? m = sd(s.substring(1), "/") : m = sd(s, o)) : m = o, {
    pathname: m,
    search: Tp(c),
    hash: Rp(f)
  };
}
function sd(l, o) {
  let s = Pa(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function Ii(l, o, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Np(l) {
  return l.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function Ki(l) {
  let o = Np(l);
  return o.map(
    (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Da(l, o, s, c = !1) {
  let f;
  typeof l == "string" ? f = In(l) : (f = { ...l }, Re(
    !f.pathname || !f.pathname.includes("?"),
    Ii("?", "pathname", "search", f)
  ), Re(
    !f.pathname || !f.pathname.includes("#"),
    Ii("#", "pathname", "hash", f)
  ), Re(
    !f.search || !f.search.includes("#"),
    Ii("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let _ = o.length - 1;
    if (!c && p.startsWith("..")) {
      let R = p.split("/");
      for (; R[0] === ".."; )
        R.shift(), _ -= 1;
      f.pathname = R.join("/");
    }
    h = _ >= 0 ? o[_] : "/";
  }
  let y = kp(f, h), C = p && p !== "/" && p.endsWith("/"), S = (m || p === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (C || S) && (y.pathname += "/"), y;
}
var Id = (l) => l.replace(/\/\/+/g, "/"), Rt = (l) => Id(l.join("/")), Pa = (l) => l.replace(/\/+$/, ""), xp = (l) => Pa(l).replace(/^\/*/, "/"), Tp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Rp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Pp = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Mp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Lp(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Rt(o) || "/";
}
var $d = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Od(l, o) {
  let s = l;
  if (typeof s != "string" || !Cp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if ($d)
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
var zd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  zd
);
var Dp = [
  "GET",
  ...zd
];
new Set(Dp);
var sr = g.createContext(null);
sr.displayName = "DataRouter";
var Ia = g.createContext(null);
Ia.displayName = "DataRouterState";
var Ad = g.createContext(!1);
function Ip() {
  return g.useContext(Ad);
}
var Fd = g.createContext({
  isTransitioning: !1
});
Fd.displayName = "ViewTransition";
var $p = g.createContext(
  /* @__PURE__ */ new Map()
);
$p.displayName = "Fetchers";
var Op = g.createContext(null);
Op.displayName = "Await";
var ft = g.createContext(
  null
);
ft.displayName = "Navigation";
var al = g.createContext(
  null
);
al.displayName = "Location";
var At = g.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
At.displayName = "Route";
var Gi = g.createContext(null);
Gi.displayName = "RouteError";
var jd = "REACT_ROUTER_ERROR", zp = "REDIRECT", Ap = "ROUTE_ERROR_RESPONSE";
function Fp(l) {
  if (l.startsWith(`${jd}:${zp}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function jp(l) {
  if (l.startsWith(
    `${jd}:${Ap}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Pp(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function Up(l, { relative: o } = {}) {
  Re(
    ur(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = g.useContext(ft), { hash: f, pathname: m, search: p } = ol(l, { relative: o }), h = m;
  return s !== "/" && (h = m === "/" ? s : Rt([s, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function ur() {
  return g.useContext(al) != null;
}
function Et() {
  return Re(
    ur(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), g.useContext(al).location;
}
var Ud = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Bd(l) {
  g.useContext(ft).static || g.useLayoutEffect(l);
}
function cr() {
  let { isDataRoute: l } = g.useContext(At);
  return l ? Zp() : Bp();
}
function Bp() {
  Re(
    ur(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = g.useContext(sr), { basename: o, navigator: s } = g.useContext(ft), { matches: c } = g.useContext(At), { pathname: f } = Et(), m = JSON.stringify(Ki(c)), p = g.useRef(!1);
  return Bd(() => {
    p.current = !0;
  }), g.useCallback(
    (y, C = {}) => {
      if (_t(p.current, Ud), !p.current) return;
      if (typeof y == "number") {
        s.go(y);
        return;
      }
      let S = Da(
        y,
        JSON.parse(m),
        f,
        C.relative === "path"
      );
      l == null && o !== "/" && (S.pathname = S.pathname === "/" ? o : Rt([o, S.pathname])), (C.replace ? s.replace : s.push)(
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
g.createContext(null);
function ol(l, { relative: o } = {}) {
  let { matches: s } = g.useContext(At), { pathname: c } = Et(), f = JSON.stringify(Ki(s));
  return g.useMemo(
    () => Da(
      l,
      JSON.parse(f),
      c,
      o === "path"
    ),
    [l, f, c, o]
  );
}
function bp(l, o) {
  return bd(l, o);
}
function bd(l, o, s) {
  var N;
  Re(
    ur(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = g.useContext(ft), { matches: f } = g.useContext(At), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let $ = C && C.path || "";
    Vd(
      h,
      !C || $.endsWith("*") || $.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$ === "/" ? "*" : `${$}/*`}">.`
    );
  }
  let S = Et(), _;
  if (o) {
    let $ = typeof o == "string" ? In(o) : o;
    Re(
      y === "/" || ((N = $.pathname) == null ? void 0 : N.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`
    ), _ = $;
  } else
    _ = S;
  let R = _.pathname || "/", T = R;
  if (y !== "/") {
    let $ = y.replace(/^\//, "").split("/");
    T = "/" + R.replace(/^\//, "").split("/").slice($.length).join("/");
  }
  let L = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      ($) => Object.assign($, {
        route: s.manifest[$.route.id] || $.route
      })
    )
  ) : Md(l, { pathname: T });
  _t(
    C || L != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), _t(
    L == null || L[L.length - 1].route.element !== void 0 || L[L.length - 1].route.Component !== void 0 || L[L.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let I = qp(
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
  return o && I ? /* @__PURE__ */ g.createElement(
    al.Provider,
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
    I
  ) : I;
}
function Hp() {
  let l = Jp(), o = Mp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ g.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ g.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ g.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ g.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ g.createElement("pre", { style: f }, s) : null, p);
}
var Vp = /* @__PURE__ */ g.createElement(Hp, null), Hd = class extends g.Component {
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
      const s = jp(l.digest);
      s && (l = s);
    }
    let o = l !== void 0 ? /* @__PURE__ */ g.createElement(At.Provider, { value: this.props.routeContext }, /* @__PURE__ */ g.createElement(
      Gi.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ g.createElement(Wp, { error: l }, o) : o;
  }
};
Hd.contextType = Ad;
var $i = /* @__PURE__ */ new WeakMap();
function Wp({
  children: l,
  error: o
}) {
  let { basename: s } = g.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = Fp(o.digest);
    if (c) {
      let f = $i.get(o);
      if (f) throw f;
      let m = Od(c.location, s);
      if ($d && !$i.get(o))
        if (m.isExternal || c.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(m.to, {
              replace: c.replace
            })
          );
          throw $i.set(o, p), p;
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
function Qp({ routeContext: l, match: o, children: s }) {
  let c = g.useContext(sr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ g.createElement(At.Provider, { value: l }, s);
}
function qp(l, o = [], s) {
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
        let { loaderData: R, errors: T } = c, L = _.route.loader && !R.hasOwnProperty(_.route.id) && (!T || T[_.route.id] === void 0);
        if (_.route.lazy || L) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let y = s == null ? void 0 : s.onError, C = c && y ? (S, _) => {
    var R, T;
    y(S, {
      location: c.location,
      params: ((T = (R = c.matches) == null ? void 0 : R[0]) == null ? void 0 : T.params) ?? {},
      pattern: Lp(c.matches),
      errorInfo: _
    });
  } : void 0;
  return f.reduceRight(
    (S, _, R) => {
      let T, L = !1, I = null, N = null;
      c && (T = m && _.route.id ? m[_.route.id] : void 0, I = _.route.errorElement || Vp, p && (h < 0 && R === 0 ? (Vd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), L = !0, N = null) : h === R && (L = !0, N = _.route.hydrateFallbackElement || null)));
      let $ = o.concat(f.slice(0, R + 1)), P = () => {
        let j;
        return T ? j = I : L ? j = N : _.route.Component ? j = /* @__PURE__ */ g.createElement(_.route.Component, null) : _.route.element ? j = _.route.element : j = S, /* @__PURE__ */ g.createElement(
          Qp,
          {
            match: _,
            routeContext: {
              outlet: S,
              matches: $,
              isDataRoute: c != null
            },
            children: j
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || R === 0) ? /* @__PURE__ */ g.createElement(
        Hd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: I,
          error: T,
          children: P(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
          onError: C
        }
      ) : P();
    },
    null
  );
}
function Xi(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yp(l) {
  let o = g.useContext(sr);
  return Re(o, Xi(l)), o;
}
function Kp(l) {
  let o = g.useContext(Ia);
  return Re(o, Xi(l)), o;
}
function Gp(l) {
  let o = g.useContext(At);
  return Re(o, Xi(l)), o;
}
function Ji(l) {
  let o = Gp(l), s = o.matches[o.matches.length - 1];
  return Re(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function Xp() {
  return Ji(
    "useRouteId"
    /* UseRouteId */
  );
}
function Jp() {
  var c;
  let l = g.useContext(Gi), o = Kp(
    "useRouteError"
    /* UseRouteError */
  ), s = Ji(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[s];
}
function Zp() {
  let { router: l } = Yp(
    "useNavigate"
    /* UseNavigateStable */
  ), o = Ji(
    "useNavigate"
    /* UseNavigateStable */
  ), s = g.useRef(!1);
  return Bd(() => {
    s.current = !0;
  }), g.useCallback(
    async (f, m = {}) => {
      _t(s.current, Ud), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var ud = {};
function Vd(l, o, s) {
  !o && !ud[l] && (ud[l] = !0, _t(!1, s));
}
g.memo(eh);
function eh({
  routes: l,
  manifest: o,
  future: s,
  state: c,
  isStatic: f,
  onError: m
}) {
  return bd(l, void 0, {
    manifest: o,
    state: c,
    isStatic: f,
    onError: m
  });
}
function wa({
  to: l,
  replace: o,
  state: s,
  relative: c
}) {
  Re(
    ur(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = g.useContext(ft);
  _t(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = g.useContext(At), { pathname: p } = Et(), h = cr(), y = Da(
    l,
    Ki(m),
    p,
    c === "path"
  ), C = JSON.stringify(y);
  return g.useEffect(() => {
    h(JSON.parse(C), { replace: o, state: s, relative: c });
  }, [h, C, c, o, s]), null;
}
function at(l) {
  Re(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function th({
  basename: l = "/",
  children: o = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: m = !1,
  useTransitions: p
}) {
  Re(
    !ur(),
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
    search: S = "",
    hash: _ = "",
    state: R = null,
    key: T = "default",
    mask: L
  } = s, I = g.useMemo(() => {
    let N = Qt(C, h);
    return N == null ? null : {
      location: {
        pathname: N,
        search: S,
        hash: _,
        state: R,
        key: T,
        mask: L
      },
      navigationType: c
    };
  }, [h, C, S, _, R, T, c, L]);
  return _t(
    I != null,
    `<Router basename="${h}"> is not able to match the URL "${C}${S}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), I == null ? null : /* @__PURE__ */ g.createElement(ft.Provider, { value: y }, /* @__PURE__ */ g.createElement(al.Provider, { children: o, value: I }));
}
function nh({
  children: l,
  location: o
}) {
  return bp(Wi(l), o);
}
function Wi(l, o = []) {
  let s = [];
  return g.Children.forEach(l, (c, f) => {
    if (!g.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === g.Fragment) {
      s.push.apply(
        s,
        Wi(c.props.children, m)
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
    c.props.children && (p.children = Wi(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var xa = "get", Ta = "application/x-www-form-urlencoded";
function $a(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function rh(l) {
  return $a(l) && l.tagName.toLowerCase() === "button";
}
function lh(l) {
  return $a(l) && l.tagName.toLowerCase() === "form";
}
function ah(l) {
  return $a(l) && l.tagName.toLowerCase() === "input";
}
function oh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function ih(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !oh(l);
}
var Sa = null;
function sh() {
  if (Sa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Sa = !1;
    } catch {
      Sa = !0;
    }
  return Sa;
}
var uh = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Oi(l) {
  return l != null && !uh.has(l) ? (_t(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ta}"`
  ), null) : l;
}
function ch(l, o) {
  let s, c, f, m, p;
  if (lh(l)) {
    let h = l.getAttribute("action");
    c = h ? Qt(h, o) : null, s = l.getAttribute("method") || xa, f = Oi(l.getAttribute("enctype")) || Ta, m = new FormData(l);
  } else if (rh(l) || ah(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Qt(y, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || xa, f = Oi(l.getAttribute("formenctype")) || Oi(h.getAttribute("enctype")) || Ta, m = new FormData(h, l), !sh()) {
      let { name: C, type: S, value: _ } = l;
      if (S === "image") {
        let R = C ? `${C}.` : "";
        m.append(`${R}x`, "0"), m.append(`${R}y`, "0");
      } else C && m.append(C, _);
    }
  } else {
    if ($a(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = xa, c = null, f = Ta, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Zi(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function Wd(l, o, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Qt(f.pathname, o) === "/" ? f.pathname = `${Pa(o)}/_root.${c}` : f.pathname = `${Pa(f.pathname)}.${c}`, f;
}
async function dh(l, o) {
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
function fh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function mh(l, o, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = o.routes[f.route.id];
      if (m) {
        let p = await dh(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return yh(
    c.flat(1).filter(fh).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function cd(l, o, s, c, f, m) {
  let p = (y, C) => s[C] ? y.route.id !== s[C].route.id : !0, h = (y, C) => {
    var S;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((S = s[C].route.path) == null ? void 0 : S.endsWith("*")) && s[C].params["*"] !== y.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (y, C) => p(y, C) || h(y, C)
  ) : m === "data" ? o.filter((y, C) => {
    var _;
    let S = c.routes[y.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (p(y, C) || h(y, C))
      return !0;
    if (y.route.shouldRevalidate) {
      let R = y.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((_ = s[0]) == null ? void 0 : _.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof R == "boolean")
        return R;
    }
    return !0;
  }) : [];
}
function ph(l, o, { includeHydrateFallback: s } = {}) {
  return hh(
    l.map((c) => {
      let f = o.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function hh(l) {
  return [...new Set(l)];
}
function vh(l) {
  let o = {}, s = Object.keys(l).sort();
  for (let c of s)
    o[c] = l[c];
  return o;
}
function yh(l, o) {
  let s = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, f) => {
    let m = JSON.stringify(vh(f));
    return s.has(m) || (s.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function es() {
  let l = g.useContext(sr);
  return Zi(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function gh() {
  let l = g.useContext(Ia);
  return Zi(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var ts = g.createContext(void 0);
ts.displayName = "FrameworkContext";
function ns() {
  let l = g.useContext(ts);
  return Zi(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function _h(l, o) {
  let s = g.useContext(ts), [c, f] = g.useState(!1), [m, p] = g.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: C, onMouseLeave: S, onTouchStart: _ } = o, R = g.useRef(null);
  g.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let I = ($) => {
        $.forEach((P) => {
          p(P.isIntersecting);
        });
      }, N = new IntersectionObserver(I, { threshold: 0.5 });
      return R.current && N.observe(R.current), () => {
        N.disconnect();
      };
    }
  }, [l]), g.useEffect(() => {
    if (c) {
      let I = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(I);
      };
    }
  }, [c]);
  let T = () => {
    f(!0);
  }, L = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, R, {}] : [
    m,
    R,
    {
      onFocus: Zr(h, T),
      onBlur: Zr(y, L),
      onMouseEnter: Zr(C, T),
      onMouseLeave: Zr(S, L),
      onTouchStart: Zr(_, T)
    }
  ] : [!1, R, {}];
}
function Zr(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function Eh({ page: l, ...o }) {
  let s = Ip(), { router: c } = es(), f = g.useMemo(
    () => Md(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ g.createElement(Sh, { page: l, matches: f, ...o }) : /* @__PURE__ */ g.createElement(Ch, { page: l, matches: f, ...o }) : null;
}
function wh(l) {
  let { manifest: o, routeModules: s } = ns(), [c, f] = g.useState([]);
  return g.useEffect(() => {
    let m = !1;
    return mh(l, o, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, s]), c;
}
function Sh({
  page: l,
  matches: o,
  ...s
}) {
  let c = Et(), { future: f } = ns(), { basename: m } = es(), p = g.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = Wd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, C = [];
    for (let S of o)
      typeof S.route.shouldRevalidate == "function" ? y = !0 : C.push(S.route.id);
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
function Ch({
  page: l,
  matches: o,
  ...s
}) {
  let c = Et(), { future: f, manifest: m, routeModules: p } = ns(), { basename: h } = es(), { loaderData: y, matches: C } = gh(), S = g.useMemo(
    () => cd(
      l,
      o,
      C,
      m,
      c,
      "data"
    ),
    [l, o, C, m, c]
  ), _ = g.useMemo(
    () => cd(
      l,
      o,
      C,
      m,
      c,
      "assets"
    ),
    [l, o, C, m, c]
  ), R = g.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let I = /* @__PURE__ */ new Set(), N = !1;
    if (o.forEach((P) => {
      var W;
      let j = m.routes[P.route.id];
      !j || !j.hasLoader || (!S.some((H) => H.route.id === P.route.id) && P.route.id in y && ((W = p[P.route.id]) != null && W.shouldRevalidate) || j.hasClientLoader ? N = !0 : I.add(P.route.id));
    }), I.size === 0)
      return [];
    let $ = Wd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return N && I.size > 0 && $.searchParams.set(
      "_routes",
      o.filter((P) => I.has(P.route.id)).map((P) => P.route.id).join(",")
    ), [$.pathname + $.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    S,
    o,
    l,
    p
  ]), T = g.useMemo(
    () => ph(_, m),
    [_, m]
  ), L = wh(_);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, R.map((I) => /* @__PURE__ */ g.createElement("link", { key: I, rel: "prefetch", as: "fetch", href: I, ...s })), T.map((I) => /* @__PURE__ */ g.createElement("link", { key: I, rel: "modulepreload", href: I, ...s })), L.map(({ key: I, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ g.createElement(
      "link",
      {
        key: I,
        nonce: s.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? s.crossOrigin
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
var Nh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Nh && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function xh({
  basename: l,
  children: o,
  useTransitions: s,
  window: c
}) {
  let f = g.useRef();
  f.current == null && (f.current = ap({ window: c, v5Compat: !0 }));
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
    th,
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
var Qd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, qd = g.forwardRef(
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
    to: S,
    preventScrollReset: _,
    viewTransition: R,
    defaultShouldRevalidate: T,
    ...L
  }, I) {
    let { basename: N, navigator: $, useTransitions: P } = g.useContext(ft), j = typeof S == "string" && Qd.test(S), W = Od(S, N);
    S = W.to;
    let H = Up(S, { relative: f }), V = Et(), oe = null;
    if (h) {
      let J = Da(
        h,
        [],
        V.mask ? V.mask.pathname : "/",
        !0
      );
      N !== "/" && (J.pathname = J.pathname === "/" ? N : Rt([N, J.pathname])), oe = $.createHref(J);
    }
    let [te, ge, Ce] = _h(
      c,
      L
    ), X = Ph(S, {
      replace: p,
      mask: h,
      state: y,
      target: C,
      preventScrollReset: _,
      relative: f,
      viewTransition: R,
      defaultShouldRevalidate: T,
      useTransitions: P
    });
    function he(J) {
      o && o(J), J.defaultPrevented || X(J);
    }
    let ze = !(W.isExternal || m), Ue = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ g.createElement(
        "a",
        {
          ...L,
          ...Ce,
          href: (ze ? oe : void 0) || W.absoluteURL || H,
          onClick: ze ? he : o,
          ref: kh(I, ge),
          target: C,
          "data-discover": !j && s === "render" ? "true" : void 0
        }
      )
    );
    return te && !j ? /* @__PURE__ */ g.createElement(g.Fragment, null, Ue, /* @__PURE__ */ g.createElement(Eh, { page: H })) : Ue;
  }
);
qd.displayName = "Link";
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
  }, S) {
    let _ = ol(p, { relative: C.relative }), R = Et(), T = g.useContext(Ia), { navigator: L, basename: I } = g.useContext(ft), N = T != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $h(_) && h === !0, $ = L.encodeLocation ? L.encodeLocation(_).pathname : _.pathname, P = R.pathname, j = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
    s || (P = P.toLowerCase(), j = j ? j.toLowerCase() : null, $ = $.toLowerCase()), j && I && (j = Qt(j, I) || j);
    const W = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length;
    let H = P === $ || !f && P.startsWith($) && P.charAt(W) === "/", V = j != null && (j === $ || !f && j.startsWith($) && j.charAt($.length) === "/"), oe = {
      isActive: H,
      isPending: V,
      isTransitioning: N
    }, te = H ? o : void 0, ge;
    typeof c == "function" ? ge = c(oe) : ge = [
      c,
      H ? "active" : null,
      V ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Ce = typeof m == "function" ? m(oe) : m;
    return /* @__PURE__ */ g.createElement(
      qd,
      {
        ...C,
        "aria-current": te,
        className: ge,
        ref: S,
        style: Ce,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(oe) : y
    );
  }
);
Ve.displayName = "NavLink";
var Th = g.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: s,
    reloadDocument: c,
    replace: f,
    state: m,
    method: p = xa,
    action: h,
    onSubmit: y,
    relative: C,
    preventScrollReset: S,
    viewTransition: _,
    defaultShouldRevalidate: R,
    ...T
  }, L) => {
    let { useTransitions: I } = g.useContext(ft), N = Dh(), $ = Ih(h, { relative: C }), P = p.toLowerCase() === "get" ? "get" : "post", j = typeof h == "string" && Qd.test(h), W = (H) => {
      if (y && y(H), H.defaultPrevented) return;
      H.preventDefault();
      let V = H.nativeEvent.submitter, oe = (V == null ? void 0 : V.getAttribute("formmethod")) || p, te = () => N(V || H.currentTarget, {
        fetcherKey: o,
        method: oe,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: S,
        viewTransition: _,
        defaultShouldRevalidate: R
      });
      I && s !== !1 ? g.startTransition(() => te()) : te();
    };
    return /* @__PURE__ */ g.createElement(
      "form",
      {
        ref: L,
        method: P,
        action: $,
        onSubmit: c ? y : W,
        ...T,
        "data-discover": !j && l === "render" ? "true" : void 0
      }
    );
  }
);
Th.displayName = "Form";
function Rh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yd(l) {
  let o = g.useContext(sr);
  return Re(o, Rh(l)), o;
}
function Ph(l, {
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
  let S = cr(), _ = Et(), R = ol(l, { relative: p });
  return g.useCallback(
    (T) => {
      if (ih(T, o)) {
        T.preventDefault();
        let L = s !== void 0 ? s : ll(_) === ll(R), I = () => S(l, {
          replace: L,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: y
        });
        C ? g.startTransition(() => I()) : I();
      }
    },
    [
      _,
      S,
      R,
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
var Mh = 0, Lh = () => `__${String(++Mh)}__`;
function Dh() {
  let { router: l } = Yd(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = g.useContext(ft), s = Xp(), c = l.fetch, f = l.navigate;
  return g.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: C, formData: S, body: _ } = ch(
        m,
        o
      );
      if (p.navigate === !1) {
        let R = p.fetcherKey || Lh();
        await c(R, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || C,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: S,
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
function Ih(l, { relative: o } = {}) {
  let { basename: s } = g.useContext(ft), c = g.useContext(At);
  Re(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...ol(l || ".", { relative: o }) }, p = Et();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), y = h.getAll("index");
    if (y.some((S) => S === "")) {
      h.delete("index"), y.filter((_) => _).forEach((_) => h.append("index", _));
      let S = h.toString();
      m.search = S ? `?${S}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Rt([s, m.pathname])), ll(m);
}
function $h(l, { relative: o } = {}) {
  let s = g.useContext(Fd);
  Re(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Yd(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = ol(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Qt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Qt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Ra(f.pathname, p) != null || Ra(f.pathname, m) != null;
}
var Qi = /* @__PURE__ */ new Map(), Ca = /* @__PURE__ */ new WeakMap(), dd = 0, Oh;
function zh(l) {
  return l ? (Ca.has(l) || (dd += 1, Ca.set(l, dd.toString())), Ca.get(l)) : "0";
}
function Ah(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? zh(l.root) : l[o]}`).toString();
}
function Fh(l) {
  const o = Ah(l);
  let s = Qi.get(o);
  if (!s) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const C = h.isIntersecting && f.some((S) => h.intersectionRatio >= S);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = C), [...(y = c.get(h.target)) != null ? y : []].forEach((S) => {
          S(C, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), s = {
      id: o,
      observer: m,
      elements: c
    }, Qi.set(o, s);
  }
  return s;
}
function jh(l, o, s = {}, c = Oh) {
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
  const { id: f, observer: m, elements: p } = Fh(s), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), Qi.delete(f));
  };
}
function dr({
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
  var S;
  const [_, R] = g.useState(null), T = g.useRef(C), L = g.useRef(h), [I, N] = g.useState({
    inView: !!h,
    entry: void 0
  });
  T.current = C, g.useEffect(
    () => {
      if (L.current === void 0 && (L.current = h), p || !_) return;
      let W;
      return W = jh(
        _,
        (H, V) => {
          const oe = L.current;
          L.current = H, !(oe === void 0 && !H) && (N({
            inView: H,
            entry: V
          }), T.current && T.current(H, V), V.isIntersecting && m && W && (W(), W = void 0));
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
  const $ = (S = I.entry) == null ? void 0 : S.target, P = g.useRef(void 0);
  !_ && $ && !m && !p && P.current !== $ && (P.current = $, N({
    inView: !!h,
    entry: void 0
  }), L.current = h);
  const j = [R, I.inView, I.entry];
  return j.ref = j[0], j.inView = j[1], j.entry = j[2], j;
}
const Uh = "_header_1ricu_1", Bh = "_backButton_1ricu_13", fd = {
  header: Uh,
  backButton: Bh
}, $n = () => {
  const l = cr(), o = Et(), s = () => {
    o.pathname.includes("commands") ? l("/scripts") : l("/");
  };
  return /* @__PURE__ */ u.createElement("header", { className: fd.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: fd.backButton,
      onClick: s
    },
    "← Назад"
  ));
}, Pt = (l = 768) => {
  const [o, s] = g.useState(
    window.innerWidth <= l
  );
  return g.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), o;
}, bh = "_tabs_1jzd9_1", Hh = "_dropdown_1jzd9_12", Vh = "_tab_1jzd9_1", Wh = "_active_1jzd9_35", Qh = "_menu_1jzd9_40", qh = "_menuItem_1jzd9_65", ve = {
  tabs: bh,
  dropdown: Hh,
  tab: Vh,
  active: Wh,
  menu: Qh,
  menuItem: qh
}, qt = () => {
  if (!Pt())
    return /* @__PURE__ */ u.createElement("div", { className: ve.tabs }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      "Скрипты"
    ), /* @__PURE__ */ u.createElement("div", { className: ve.dropdown }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      "Команды"
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
      "Таймер"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      "Будильник"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${ve.tab} ${ve.active}` : ve.tab
      },
      "Настройки"
    ));
}, Yh = "_nav_10mea_1", md = {
  nav: Yh
}, Yt = () => {
  const l = Et(), o = cr(), [s, c] = g.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: md.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/commands/main" }, "Основные"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/sub" }, "Второстепенные"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/direct/main" }, "Прямые"), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/settings" }, "Настройки")) : /* @__PURE__ */ u.createElement("nav", { className: md.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/scripts" }, "Скрипты"), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    "Команды"
  ), /* @__PURE__ */ u.createElement(Ve, { to: "/timer" }, "Таймер"), /* @__PURE__ */ u.createElement(Ve, { to: "/alarm" }, "Будильник"), /* @__PURE__ */ u.createElement(Ve, { to: "/settings" }, "Настройки"));
}, Kh = "_button_1u3jy_1", Gh = "_full_1u3jy_20", Xh = "_primary_1u3jy_24", Jh = "_secondary_1u3jy_33", Zh = "_ghost_1u3jy_44", zi = {
  button: Kh,
  full: Gh,
  primary: Xh,
  secondary: Jh,
  ghost: Zh
}, ie = ({
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
        ${zi.button}
        ${zi[o]}
        ${s ? zi.full : ""}
        ${c}
      `
  },
  l
), ev = "_overlay_a2hq1_1", tv = "_modal_a2hq1_13", nv = "_header_a2hq1_25", rv = "_title_a2hq1_35", lv = "_body_a2hq1_42", av = "_footer_a2hq1_49", ov = "_close_a2hq1_59", Pn = {
  overlay: ev,
  modal: tv,
  header: nv,
  title: rv,
  body: lv,
  footer: av,
  close: ov
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
      ie,
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
) : null), iv = "_pagination_1hg7e_1", sv = "_button_1hg7e_9", uv = "_label_1hg7e_33", ka = {
  pagination: iv,
  button: sv,
  label: uv
}, fr = ({
  page: l,
  totalPages: o,
  onChange: s
}) => o <= 1 ? null : /* @__PURE__ */ u.createElement("div", { className: ka.pagination }, /* @__PURE__ */ u.createElement(
  "button",
  {
    className: ka.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ u.createElement("span", { className: ka.label }, l, " / ", o), /* @__PURE__ */ u.createElement(
  "button",
  {
    className: ka.button,
    disabled: l === o,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), cv = "_accordion_1wwmk_1", dv = "_header_1wwmk_7", fv = "_content_1wwmk_20", Na = {
  accordion: cv,
  header: dv,
  content: fv
}, zt = ({
  title: l,
  defaultOpen: o = !1,
  children: s
}) => {
  const [c, f] = g.useState(o);
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      className: Na.accordion,
      "data-open": c
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Na.header,
        onClick: () => f((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ u.createElement("span", null, l),
      /* @__PURE__ */ u.createElement("span", { className: Na.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ u.createElement("div", { className: Na.content }, s)
  );
}, mv = "_field_fc25i_1", pv = "_label_fc25i_7", hv = "_input_fc25i_13", vv = "_error_fc25i_38", yv = "_errorText_fc25i_46", el = {
  field: mv,
  label: pv,
  input: hv,
  error: vv,
  errorText: yv
}, ye = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: el.field }, l && /* @__PURE__ */ u.createElement("label", { className: el.label }, l), /* @__PURE__ */ u.createElement(
  "input",
  {
    ...c,
    className: `
          ${el.input}
          ${o ? el.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: el.errorText }, o)), gv = ({
  condition: l,
  index: o,
  defaultOpen: s,
  onChange: c
}) => {
  const [f, m] = g.useState(
    !!l.children_type
  ), [p, h] = g.useState(!!l.children_direct_type);
  return /* @__PURE__ */ u.createElement(
    zt,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: s
    },
    /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "Parent_type",
        value: l.parent_type,
        onChange: (y) => c({
          ...l,
          parent_type: y.target.value
        })
      }
    )),
    /* @__PURE__ */ u.createElement("div", null, !f && /* @__PURE__ */ u.createElement(ie, { onClick: () => m(!0) }, "Добавить children_type"), f && /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "children_type",
        value: l.children_type || "",
        onChange: (y) => c({
          ...l,
          children_type: y.target.value
        })
      }
    )),
    /* @__PURE__ */ u.createElement("div", null, !p && /* @__PURE__ */ u.createElement(ie, { onClick: () => h(!0) }, "Добавить children_direct_type"), p && /* @__PURE__ */ u.createElement(
      ye,
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
}, _v = "_dropdown_4l5n9_1", Ev = "_button_4l5n9_6", wv = "_arrow_4l5n9_28", Sv = "_menu_4l5n9_32", Cv = "_active_4l5n9_51", kv = "_item_4l5n9_58", Mn = {
  dropdown: _v,
  button: Ev,
  arrow: wv,
  menu: Sv,
  active: Cv,
  item: kv
};
function Nv({
  options: l,
  value: o,
  placeholder: s = "Выберите",
  onSelect: c
}) {
  const [f, m] = g.useState(!1), p = g.useRef(null), h = l.find(
    (S) => S.value === o
  ), y = () => {
    m((S) => !S);
  }, C = (S) => {
    c == null || c(S.value), m(!1);
  };
  return g.useEffect(() => {
    const S = (_) => {
      p.current && !p.current.contains(
        _.target
      ) && m(!1);
    };
    return document.addEventListener(
      "mousedown",
      S
    ), () => {
      document.removeEventListener(
        "mousedown",
        S
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
    /* @__PURE__ */ u.createElement("div", { className: Mn.menu }, l.map((S) => /* @__PURE__ */ u.createElement(
      "div",
      {
        key: S.value,
        className: `${Mn.item} ${o === S.value ? Mn.selected : ""}`,
        onClick: () => C(S)
      },
      S.label
    )))
  );
}
const xv = "_form_1fyva_1", pd = {
  form: xv
}, Tv = ({
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
  }, y = (C, S) => {
    const _ = [...f.conditions];
    _[C] = S, p({
      ...f,
      conditions: _
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: pd.form }, /* @__PURE__ */ u.createElement(
    ye,
    {
      label: "Название",
      value: f.name,
      onChange: (C) => p({
        ...f,
        name: C.target.value
      })
    }
  ), /* @__PURE__ */ u.createElement(
    Nv,
    {
      options: o.map((C) => ({
        label: C.name,
        value: C.entity_id
      })),
      value: f.script_entity_id,
      onSelect: (C) => {
        console.log(C), p({
          ...f,
          script_entity_id: C
        });
      }
    }
  ), f.conditions.map(
    (C, S) => /* @__PURE__ */ u.createElement(
      gv,
      {
        key: S,
        index: S,
        condition: C,
        defaultOpen: !s,
        onChange: (_) => y(S, _)
      }
    )
  ), /* @__PURE__ */ u.createElement(
    ie,
    {
      type: "button",
      className: pd.addCondition,
      onClick: h
    },
    "+ Добавить условие"
  ));
}, Rv = "_card_b4x7a_1", Pv = "_content_b4x7a_28", Mv = "_title_b4x7a_34", Lv = "_subtitle_b4x7a_40", Dv = "_arrow_b4x7a_45", tl = {
  card: Rv,
  content: Pv,
  title: Mv,
  subtitle: Lv,
  arrow: Dv
}, Iv = ({
  title: l,
  onClick: o
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    className: tl.card,
    onClick: o
  },
  /* @__PURE__ */ u.createElement("div", { className: tl.content }, /* @__PURE__ */ u.createElement("div", { className: tl.title }, l), /* @__PURE__ */ u.createElement("div", { className: tl.subtitle }, "Нажмите для редактирования")),
  /* @__PURE__ */ u.createElement("div", { className: tl.arrow }, "→")
), $v = "_container_czq46_1", Ov = "_visible_czq46_12", hd = {
  container: $v,
  visible: Ov
}, mr = ({
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
      className: `${hd.container} ${s ? hd.visible : ""}`
    },
    l
  );
}, zv = "_page_nrfvd_1", Av = "_header_nrfvd_10", Fv = "_description_nrfvd_31", jv = "_heading_nrfvd_71", Uv = "_actions_nrfvd_76", Bv = "_list_nrfvd_81", or = {
  page: zv,
  header: Av,
  description: Fv,
  heading: jv,
  actions: Uv,
  list: Bv
}, Kd = g.createContext(null);
function il() {
  const l = g.useContext(Kd);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const bv = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function Hv() {
  const l = il(), [o, s] = g.useState(!0), [c, f] = g.useState(null), m = g.useRef(!1), p = g.useCallback(
    async (R = 1, T = !1) => {
      s(!0);
      try {
        const L = bv(
          await l._getShort(
            "get_script_actions_short",
            R
          )
        );
        f((I) => !T || !I ? L : {
          ...L,
          script_actions: [
            ...I.script_actions,
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
    saveScript: async (R) => {
      await l._save(R, "save_script_action"), await p((c == null ? void 0 : c.page) ?? 1);
    },
    updateScript: async (R, T) => {
      await l._update(R, "update_script_action", T), await p((c == null ? void 0 : c.page) ?? 1);
    },
    getScriptAction: async (R) => (await l._getDetail(
      R,
      "get_script_action"
    )).data,
    deleteScriptAction: async (R) => {
      await l._delete(R, "delete_script_action"), await p((c == null ? void 0 : c.page) ?? 1);
    }
  };
}
const Vv = () => {
  const l = Pt(), { ref: o, inView: s } = dr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = g.useState(), [m, p] = g.useState(), [h, y] = g.useState(!1), [C, S] = g.useState(!1), [_, R] = g.useState(!1), {
    loading: T,
    scripts: L,
    scriptData: I,
    loadScripts: N,
    saveScript: $,
    updateScript: P,
    getScriptAction: j,
    deleteScriptAction: W
  } = Hv();
  g.useEffect(() => {
    !_ || !l || !s || T || !L || L.page >= L.total_pages || N(L.page + 1, !0);
  }, [
    s,
    l,
    T,
    L,
    N
  ]), g.useEffect(() => {
    !T && L && L.page === 1 && R(!0);
  }, [T, L]);
  const H = () => {
    p(void 0), S(!1), y(!0);
  }, V = async (te) => {
    S(!0);
    const ge = await j(
      te.uuid
    );
    p(ge), y(!0);
  }, oe = async () => {
    if (C) {
      const te = c == null ? void 0 : c.uuid;
      if (!te) return;
      const { uuid: ge, ...Ce } = c;
      await P(te, Ce);
    } else
      await $(c);
    y(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement("div", { className: or.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: or.header }, /* @__PURE__ */ u.createElement("div", { className: or.heading }, /* @__PURE__ */ u.createElement("p", { className: or.description }, "Создавайте и редактируйте автоматизации и условия")), /* @__PURE__ */ u.createElement("div", { className: or.actions }, l ? /* @__PURE__ */ u.createElement(mr, null, /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), T && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: or.list }, L == null ? void 0 : L.script_actions.map((te) => /* @__PURE__ */ u.createElement(
    Iv,
    {
      key: te.uuid,
      title: te.title,
      onClick: () => V(te)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    fr,
    {
      page: (L == null ? void 0 : L.page) || 1,
      totalPages: (L == null ? void 0 : L.total_pages) || 1,
      onChange: N
    }
  ), /* @__PURE__ */ u.createElement(
    hn,
    {
      open: h,
      onClose: () => y(!1),
      title: C ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, C && /* @__PURE__ */ u.createElement(
        ie,
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
        ie,
        {
          onClick: oe
        },
        "Сохранить"
      ))
    },
    /* @__PURE__ */ u.createElement(
      Tv,
      {
        initialData: m,
        isEdit: C,
        isOptionData: I(),
        onChange: f
      }
    )
  )), /* @__PURE__ */ u.createElement(Yt, null));
}, Wv = "_field_1qtfn_1", Qv = "_label_1qtfn_7", qv = "_select_1qtfn_13", Ai = {
  field: Wv,
  label: Qv,
  select: qv
}, qi = ({
  label: l,
  options: o,
  className: s = "",
  value: c,
  ...f
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ u.createElement("div", { className: Ai.field }, l && /* @__PURE__ */ u.createElement("label", { className: Ai.label }, l), /* @__PURE__ */ u.createElement(
    "select",
    {
      ...f,
      value: m,
      className: `${Ai.select} ${s}`
    },
    !p && /* @__PURE__ */ u.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ u.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, Yv = "_switchRow_1lfy8_1", Kv = "_input_1lfy8_11", Gv = "_track_1lfy8_22", Xv = "_thumb_1lfy8_33", Jv = "_label_1lfy8_62", nl = {
  switchRow: Yv,
  input: Kv,
  track: Gv,
  thumb: Xv,
  label: Jv
}, Dn = ({ label: l, className: o = "", ...s }) => /* @__PURE__ */ u.createElement("label", { className: `${nl.switchRow} ${o}` }, /* @__PURE__ */ u.createElement("input", { ...s, type: "checkbox", className: nl.input }), /* @__PURE__ */ u.createElement("span", { className: nl.track, "aria-hidden": "true" }, /* @__PURE__ */ u.createElement("span", { className: nl.thumb })), /* @__PURE__ */ u.createElement("span", { className: nl.label }, l)), Zv = "_wrapper_i8msc_1", ey = "_labelRow_i8msc_5", ty = "_label_i8msc_5", ny = "_selectedTitle_i8msc_18", ry = "_dropdown_i8msc_27", ly = "_option_i8msc_42", ay = "_title_i8msc_64", oy = "_uuid_i8msc_69", iy = "_hint_i8msc_70", Ot = {
  wrapper: Zv,
  labelRow: ey,
  label: ty,
  selectedTitle: ny,
  dropdown: ry,
  option: ly,
  title: ay,
  uuid: oy,
  hint: iy
}, Yi = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = "assistant_commands",
  onChange: f,
  onSelect: m
}) => {
  const p = il(), [h, y] = g.useState([]), [C, S] = g.useState(!1), [_, R] = g.useState(!1), T = g.useRef(0), L = g.useMemo(() => o.trim(), [o]);
  g.useEffect(() => {
    if (L.length < 2) {
      y([]), S(!1);
      return;
    }
    const N = T.current + 1;
    T.current = N;
    const $ = window.setTimeout(async () => {
      R(!0);
      try {
        const P = c === "sub_direct_controls" ? await p.searchAssistantSubDirectControls(L) : c === "sub_direct_control_samples" ? await p.searchAssistantSubDirectControlSamples(L) : await p.searchAssistantCommands(L);
        if (T.current !== N) return;
        const j = Array.isArray(P == null ? void 0 : P.data) ? P.data : [];
        y(j), S(j.length > 0);
      } finally {
        T.current === N && R(!1);
      }
    }, 250);
    return () => window.clearTimeout($);
  }, [p, L, c]);
  const I = (N) => {
    f(N.uuid), m == null || m(N), S(!1);
  };
  return /* @__PURE__ */ u.createElement("div", { className: Ot.wrapper }, /* @__PURE__ */ u.createElement("div", { className: Ot.labelRow }, /* @__PURE__ */ u.createElement("span", { className: Ot.label }, l), s && /* @__PURE__ */ u.createElement("span", { className: Ot.selectedTitle }, s)), /* @__PURE__ */ u.createElement(
    ye,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      onBlur: () => window.setTimeout(() => S(!1), 150),
      onFocus: () => S(h.length > 0),
      onChange: (N) => f(N.target.value)
    }
  ), C && /* @__PURE__ */ u.createElement("div", { className: Ot.dropdown }, h.map((N) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: N.uuid,
      type: "button",
      className: Ot.option,
      onMouseDown: ($) => $.preventDefault(),
      onClick: () => I(N)
    },
    /* @__PURE__ */ u.createElement("span", { className: Ot.title }, N.title || "Без названия"),
    /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, N.uuid),
    N.mappingType && /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, "mappingType: ", N.mappingType)
  ))), _ && /* @__PURE__ */ u.createElement("span", { className: Ot.hint }, "Поиск..."));
}, sy = [
  { label: "default", value: "default" },
  { label: "builtin", value: "builtin" },
  { label: "ha_storage", value: "ha_storage" },
  { label: "ha", value: "ha" },
  { label: "external", value: "external" },
  { label: "redis", value: "redis" }
], uy = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], cy = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" },
  { label: "chidren_error", value: "chidren_error" }
], dy = "_form_nymr0_1", fy = "_field_nymr0_15", my = "_textarea_nymr0_24", py = "_arrayItem_nymr0_37", ir = {
  form: dy,
  field: fy,
  textarea: my,
  arrayItem: py
}, vd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), Gd = ({
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
    if (s[c]) return s[c] ?? vd();
  }, [s]), C = (T) => {
    f((L) => ({
      ...L,
      [c]: {
        ...L[c] ?? vd(),
        ...T
      }
    }));
  }, S = (T, L, I) => {
    const N = [...y[T] ?? []];
    N[L] = { ...N[L], ...I }, C({
      [T]: N
    });
  }, _ = (T, L) => {
    C({
      [T]: [...y[T] ?? [], L]
    });
  }, R = (T, L) => {
    C({
      [T]: (y[T] ?? []).filter(
        (I, N) => N !== L
      )
    });
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(ie, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: ir.form }, /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "Название команды",
        value: s.title,
        onChange: (T) => f({
          ...s,
          title: T.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Dn,
      {
        label: "Завершать диалог",
        checked: y.endStatus,
        onChange: (T) => C({
          endStatus: T.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement(
      Dn,
      {
        label: "forwardText",
        checked: y.forwardText,
        onChange: (T) => C({
          forwardText: T.target.checked
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "actionType",
        value: y.actionType,
        onChange: (T) => C({
          actionType: T.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      qi,
      {
        label: "answerType",
        value: y.answerType,
        options: sy,
        onChange: (T) => C({
          answerType: T.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: ir.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: ir.textarea,
        rows: 6,
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (T) => C({
          voiceCommands: T.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(zt, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((T, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: ir.arrayItem }, /* @__PURE__ */ u.createElement(
      Yi,
      {
        label: "uuid",
        value: T.uuid,
        selectedTitle: T.title,
        searchSource: "sub_direct_controls",
        onChange: (I) => S("nextDirectControl", L, {
          uuid: I
        }),
        onSelect: (I) => S("nextDirectControl", L, {
          uuid: I.uuid,
          actionType: I.actionType ?? I.mappingType ?? "",
          title: I.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "actionType",
        value: T.actionType ?? "",
        onChange: (I) => S("nextDirectControl", L, {
          actionType: I.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ie,
      {
        type: "button",
        variant: "ghost",
        onClick: () => R("nextDirectControl", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      ie,
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
    )), /* @__PURE__ */ u.createElement(zt, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((T, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: ir.arrayItem }, /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "actionType",
        value: T.actionType,
        onChange: (I) => S("voiceResponseArray", L, {
          actionType: I.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "voiceResponse",
        value: T.voiceResponse,
        onChange: (I) => S("voiceResponseArray", L, {
          voiceResponse: I.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ie,
      {
        type: "button",
        variant: "ghost",
        onClick: () => R("voiceResponseArray", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      ie,
      {
        type: "button",
        variant: "secondary",
        onClick: () => _("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(zt, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((T, L) => /* @__PURE__ */ u.createElement("div", { key: L, className: ir.arrayItem }, /* @__PURE__ */ u.createElement(
      qi,
      {
        label: "actionTypeComponent",
        value: T.actionTypeComponent,
        options: cy,
        onChange: (I) => S("nextAction", L, {
          actionTypeComponent: I.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "actionType",
        value: T.actionType,
        onChange: (I) => S("nextAction", L, {
          actionType: I.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Yi,
      {
        label: "uuid",
        value: T.uuid,
        selectedTitle: T.title,
        onChange: (I) => S("nextAction", L, {
          uuid: I
        }),
        onSelect: (I) => S("nextAction", L, {
          uuid: I.uuid,
          actionType: I.actionType ?? "",
          title: I.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ie,
      {
        type: "button",
        variant: "ghost",
        onClick: () => R("nextAction", L)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      ie,
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
}, hy = "_overlay_1em8e_1", vy = "_sheet_1em8e_10", yy = "_handle_1em8e_18", Fi = {
  overlay: hy,
  sheet: vy,
  handle: yy
}, gy = ({
  open: l,
  onClose: o,
  children: s
}) => l ? (g.useEffect(() => {
  if (!l) return;
  const c = document.body.style.overflow;
  return document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = c;
  };
}, [l]), /* @__PURE__ */ u.createElement("div", { className: Fi.overlay, onClick: o }, /* @__PURE__ */ u.createElement(
  "div",
  {
    className: Fi.sheet,
    onClick: (c) => c.stopPropagation()
  },
  /* @__PURE__ */ u.createElement("div", { className: Fi.handle }),
  s
))) : null, _y = "_content_19r5a_1", Ey = "_title_19r5a_7", wy = "_actions_19r5a_14", ji = {
  content: _y,
  title: Ey,
  actions: wy
}, sl = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onDelete: f
}) => {
  const m = Pt();
  if (!o) return null;
  const p = /* @__PURE__ */ u.createElement("div", { className: ji.content }, /* @__PURE__ */ u.createElement("h3", { className: ji.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: ji.actions }, /* @__PURE__ */ u.createElement(
    ie,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), s();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ u.createElement(
    ie,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        f(o.uuid), s();
      }
    },
    "Удалить"
  )));
  return m ? /* @__PURE__ */ u.createElement(gy, { open: l, onClose: s }, p) : /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    p
  );
}, Sy = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function ul(l) {
  const o = il(), [s, c] = g.useState(null), [f, m] = g.useState(!0), p = g.useRef(!1), h = async (T, L = 1, I = !1) => {
    m(!0);
    try {
      const N = Sy(await o._getShort(`${T}`, L));
      c(($) => !I || !$ ? N : {
        ...N,
        data: [
          ...$.data,
          ...N.data
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
    saveCommand: async (T, L) => await o._save(L, T),
    deleteCommand: async (T, L) => await o._delete(L, T),
    updateCommand: async (T, L) => {
      if (console.log(L), !L.uuid) return;
      const { uuid: I, ...N } = L;
      return await o._update(I, T, N);
    },
    editStatusCommand: async (T, L, I) => await o._update_status(T, L, I),
    detailInformationCommand: async (T, L) => await o._getDetail(L, T)
  };
}
const Cy = "_page_1m1fb_1", ky = "_header_1m1fb_10", Ny = "_description_1m1fb_25", xy = "_state_1m1fb_80", Ty = "_commandList_1m1fb_84", Ry = "_commandTab_1m1fb_89", Py = "_commandButton_1m1fb_96", My = "_moreButton_1m1fb_97", Ly = "_innerTabs_1m1fb_135", Dy = "_innerTab_1m1fb_135", Iy = "_activeInnerTab_1m1fb_156", $y = "_headerTop_1m1fb_163", K = {
  page: Cy,
  header: ky,
  description: Ny,
  state: xy,
  commandList: Ty,
  commandTab: Ry,
  commandButton: Py,
  moreButton: My,
  innerTabs: Ly,
  innerTab: Dy,
  activeInnerTab: Iy,
  headerTop: $y
}, Oy = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), yd = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...Oy(),
    forwardText: !1
  }
}), zy = () => {
  const l = Pt(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => yd()), [h, y] = g.useState(null), { ref: C, inView: S } = dr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: R,
    deleteCommand: T,
    detailInformationCommand: L,
    saveCommand: I,
    updateCommand: N,
    editStatusCommand: $,
    commands: P
  } = ul("get_assistant_commands_short"), [j, W] = g.useState(!1);
  g.useEffect(() => {
    !j || !l || !S || _ || !P || P.page >= P.total_pages || R("get_assistant_commands_short", P.page + 1, !0);
  }, [
    S,
    l,
    _,
    P,
    R
  ]), g.useEffect(() => {
    !_ && P && P.page === 1 && W(!0);
  }, [_, P]);
  const H = () => {
    f(!1), p(yd()), s(!0);
  }, V = async (X) => {
    f(!0);
    const he = await L("get_assistant_command", X.uuid);
    p(he.data), s(!0);
  }, oe = async (X, he) => {
    console.log(X, he), await $("update_assistant_command_status", X, he), R("get_assistant_commands_short");
  }, te = async (X) => {
    await T("delete_assistant_command", X), R("get_assistant_commands_short");
  }, ge = async () => {
    await I("save_assistant_command", m), s(!1);
  }, Ce = async () => {
    await N("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement("div", { className: K.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: K.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: K.header }, /* @__PURE__ */ u.createElement("div", { className: K.headerTop }, /* @__PURE__ */ u.createElement("div", { className: K.heading }, /* @__PURE__ */ u.createElement("p", { className: K.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(mr, null, /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: K.commandList }, P == null ? void 0 : P.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: K.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: K.commandButton, onClick: () => V(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: K.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => y(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    fr,
    {
      page: (P == null ? void 0 : P.page) || 1,
      totalPages: (P == null ? void 0 : P.total_pages) || 1,
      onChange: (X) => R("get_assistant_commands_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    Gd,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: ge,
      onUpdate: Ce
    }
  ), /* @__PURE__ */ u.createElement(
    sl,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: oe,
      onDelete: te
    }
  )), /* @__PURE__ */ u.createElement(Yt, null));
}, Ay = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), gd = () => ({
  status: !1,
  title: "",
  subComponentDialog: {
    ...Ay(),
    forwardText: !1
  }
}), Fy = () => {
  const l = Pt(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => gd()), [h, y] = g.useState(null), { ref: C, inView: S } = dr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: R,
    deleteCommand: T,
    detailInformationCommand: L,
    saveCommand: I,
    updateCommand: N,
    editStatusCommand: $,
    commands: P
  } = ul("get_assistant_sub_commands_short"), [j, W] = g.useState(!1);
  g.useEffect(() => {
    !j || !l || !S || _ || !P || P.page >= P.total_pages || R("get_assistant_sub_commands_short", P.page + 1, !0);
  }, [
    S,
    l,
    _,
    P,
    R
  ]), g.useEffect(() => {
    !_ && P && P.page === 1 && W(!0);
  }, [_, P]);
  const H = () => {
    f(!1), p(gd()), s(!0);
  }, V = async (X) => {
    f(!0);
    const he = await L("get_assistant_sub_command", X.uuid);
    p(he.data), s(!0);
  }, oe = async (X, he) => {
    await $("update_assistant_sub_command_status", X, he), R("get_assistant_sub_commands_short");
  }, te = async (X) => {
    await T("delete_assistant_sub_command", X), R("get_assistant_sub_commands_short");
  }, ge = async () => {
    await I("save_assistant_sub_command", m), s(!1);
  }, Ce = async () => {
    await N("update_assistant_sub_command_status", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement("div", { className: K.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: K.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: K.header }, /* @__PURE__ */ u.createElement("div", { className: K.headerTop }, /* @__PURE__ */ u.createElement("div", { className: K.heading }, /* @__PURE__ */ u.createElement("p", { className: K.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(mr, null, /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: K.commandList }, P == null ? void 0 : P.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: K.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: K.commandButton, onClick: () => V(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: K.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => y(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    fr,
    {
      page: (P == null ? void 0 : P.page) || 1,
      totalPages: (P == null ? void 0 : P.total_pages) || 1,
      onChange: (X) => R("get_assistant_sub_commands_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    Gd,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "subComponentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: ge,
      onUpdate: Ce
    }
  ), /* @__PURE__ */ u.createElement(
    sl,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: oe,
      onDelete: te
    }
  )), /* @__PURE__ */ u.createElement(Yt, null));
}, jy = "_field_veq7g_1", Uy = "_label_veq7g_7", By = "_textarea_veq7g_13", by = "_error_veq7g_40", Hy = "_errorText_veq7g_48", rl = {
  field: jy,
  label: Uy,
  textarea: By,
  error: by,
  errorText: Hy
}, Xd = ({
  label: l,
  error: o,
  className: s = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: rl.field }, l && /* @__PURE__ */ u.createElement("label", { className: rl.label }, l), /* @__PURE__ */ u.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${rl.textarea}
          ${o ? rl.error : ""}
          ${s}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: rl.errorText }, o)), _d = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Vy = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = g.useMemo(() => c.directControl ?? _d(), [c]), h = (_) => {
    f((R) => ({
      ...R,
      directControl: {
        ...R.directControl ?? _d(),
        ..._
      }
    }));
  }, y = (_, R) => {
    const T = [...p.subDirectControl ?? []];
    T[_] = {
      ...T[_],
      ...R
    }, h({
      subDirectControl: T
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
      subDirectControl: (p.subDirectControl ?? []).filter((R, T) => T !== _)
    });
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(ie, { variant: "ghost", onClick: o }, "Отмена"), /* @__PURE__ */ u.createElement(ie, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ u.createElement("div", { className: K.form }, /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((R) => ({
          ...R,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      qi,
      {
        label: "valueType",
        value: p.valueType,
        options: uy,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: K.field }, /* @__PURE__ */ u.createElement(
      Xd,
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
      Dn,
      {
        label: "manual",
        checked: p.manual,
        onChange: (_) => h({
          manual: _.target.checked,
          subDirectControl: _.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ u.createElement(zt, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, R) => /* @__PURE__ */ u.createElement("div", { key: R, className: K.arrayItem }, /* @__PURE__ */ u.createElement(
        ye,
        {
          label: "subMappingType",
          value: _.subMappingType,
          onChange: (T) => y(R, {
            subMappingType: T.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: K.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: K.textarea,
          rows: 3,
          value: _.subVoiceCommands,
          onChange: (T) => y(R, {
            subVoiceCommands: T.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        ie,
        {
          type: "button",
          variant: "ghost",
          onClick: () => S(R)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ u.createElement(
      ie,
      {
        type: "button",
        variant: "secondary",
        onClick: C
      },
      "Добавить ещё"
    )) : /* @__PURE__ */ u.createElement(
      Yi,
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
}, Ed = () => ({
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
}), Wy = () => {
  const l = Pt(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => Ed()), [h, y] = g.useState(null), C = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [S, _] = g.useState("main"), R = cr(), { ref: T, inView: L } = dr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: I,
    loadCommands: N,
    deleteCommand: $,
    detailInformationCommand: P,
    saveCommand: j,
    updateCommand: W,
    editStatusCommand: H,
    commands: V
  } = ul("get_assistant_sub_direct_controls_short"), [oe, te] = g.useState(!1);
  g.useEffect(() => {
    !oe || !l || !L || I || !V || V.page >= V.total_pages || N("get_assistant_sub_direct_controls_short", V.page + 1, !0);
  }, [
    L,
    l,
    I,
    V,
    N
  ]), g.useEffect(() => {
    !I && V && V.page === 1 && te(!0);
  }, [I, V]);
  const ge = () => {
    f(!1), p(Ed()), s(!0);
  }, Ce = async (J) => {
    f(!0);
    const Le = await P("get_assistant_sub_direct_control", J.uuid);
    p(Le.data), s(!0);
  }, X = async (J, Le) => {
    await H("update_assistant_sub_direct_controls_status", J, Le), N("get_assistant_sub_direct_controls_short");
  }, he = async (J) => {
    await $("delete_assistant_sub_direct_control", J), N("get_assistant_sub_direct_controls_short");
  }, ze = async () => {
    await j("save_assistant_sub_direct_control", m), s(!1);
  }, Ue = async () => {
    await W("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement("div", { className: K.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), I && /* @__PURE__ */ u.createElement("div", { className: K.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: K.header }, /* @__PURE__ */ u.createElement("div", { className: K.headerTop }, /* @__PURE__ */ u.createElement("div", { className: K.innerTabs }, C.map((J) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: J.key,
      type: "button",
      className: `${K.innerTab} ${S === J.key ? K.activeInnerTab : ""}`,
      onClick: () => {
        _(J.key), R(`/commands/direct/${J.key === "main" ? "main" : "template"}`);
      }
    },
    J.label
  ))), /* @__PURE__ */ u.createElement("div", { className: K.heading }, /* @__PURE__ */ u.createElement("p", { className: K.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(mr, null, /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: ge
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: ge
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: K.commandList }, V == null ? void 0 : V.data.map((J) => /* @__PURE__ */ u.createElement("div", { key: J.uuid, className: K.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: K.commandButton, onClick: () => Ce(J) }, /* @__PURE__ */ u.createElement("span", null, J.title), /* @__PURE__ */ u.createElement("small", null, J.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: K.moreButton,
      "aria-label": `Действия команды ${J.title}`,
      onClick: () => y(J)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: T, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    fr,
    {
      page: (V == null ? void 0 : V.page) || 1,
      totalPages: (V == null ? void 0 : V.total_pages) || 1,
      onChange: (J) => N("get_assistant_sub_direct_controls_short", J)
    }
  ), /* @__PURE__ */ u.createElement(
    Vy,
    {
      open: o,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Ue : ze
    }
  ), /* @__PURE__ */ u.createElement(
    sl,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: X,
      onDelete: he
    }
  )), /* @__PURE__ */ u.createElement(Yt, null));
}, Qy = ({
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
    f((R) => ({
      ...R,
      subDirectControl: _
    }));
  }, y = (_, R) => {
    const T = [...p];
    T[_] = {
      ...T[_],
      ...R
    }, h(T);
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
      p.filter((R, T) => T !== _)
    );
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(ie, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: K.form }, /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((R) => ({
          ...R,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      zt,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((_, R) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: R,
          className: K.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          ye,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (T) => y(R, {
              subMappingType: T.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          Xd,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof _.subVoiceCommands == "object" ? _.subVoiceCommands : []).join(`
`),
            onChange: (T) => y(R, {
              subVoiceCommands: T.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          ie,
          {
            type: "button",
            variant: "ghost",
            onClick: () => S(R)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ u.createElement(
        ie,
        {
          type: "button",
          variant: "secondary",
          onClick: C
        },
        "Добавить ещё"
      )
    ))
  );
}, wd = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), qy = () => {
  const l = Pt(), o = cr(), [s, c] = g.useState(!1), [f, m] = g.useState(!1), [p, h] = g.useState(wd), [y, C] = g.useState(null), [S, _] = g.useState("template"), [R, T] = g.useState(!1), L = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: I, inView: N } = dr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: $,
    loadCommands: P,
    deleteCommand: j,
    detailInformationCommand: W,
    saveCommand: H,
    updateCommand: V,
    editStatusCommand: oe,
    commands: te
  } = ul(
    "get_assistant_sub_direct_control_samples_short"
  );
  g.useEffect(() => {
    !R || !l || !N || $ || !te || te.page >= te.total_pages || P(
      "get_assistant_sub_direct_control_samples_short",
      te.page + 1,
      !0
    );
  }, [
    R,
    N,
    l,
    $,
    te,
    P
  ]), g.useEffect(() => {
    !$ && te && te.page === 1 && T(!0);
  }, [$, te]);
  const ge = () => {
    m(!1), h(wd()), c(!0);
  }, Ce = async (J) => {
    m(!0);
    const Le = await W(
      "get_assistant_sub_direct_control_sample",
      J.uuid
    );
    h(Le.data), c(!0);
  }, X = async (J, Le) => {
    await oe(
      "update_assistant_sub_direct_control",
      J,
      Le
    ), P(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, he = async (J) => {
    await j(
      "delete_assistant_sub_direct_control_sample",
      J
    ), P(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ze = async () => {
    await H(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), P(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ue = async () => {
    await V(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), P(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement("div", { className: K.page }, !l && /* @__PURE__ */ u.createElement(qt, null), $ && /* @__PURE__ */ u.createElement("div", { className: K.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: K.header }, /* @__PURE__ */ u.createElement("div", { className: K.headerTop }, /* @__PURE__ */ u.createElement("div", { className: K.innerTabs }, L.map((J) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: J.key,
      type: "button",
      className: `${K.innerTab} ${S === J.key ? K.activeInnerTab : ""}`,
      onClick: () => {
        _(J.key), o(
          `/commands/direct/${J.key === "main" ? "main" : "template"}`
        );
      }
    },
    J.label
  ))), /* @__PURE__ */ u.createElement("div", { className: K.heading }, /* @__PURE__ */ u.createElement("p", { className: K.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(mr, null, /* @__PURE__ */ u.createElement(
    ie,
    {
      onClick: ge
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    ie,
    {
      onClick: ge
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: K.commandList }, te == null ? void 0 : te.data.map((J) => /* @__PURE__ */ u.createElement(
    "div",
    {
      key: J.uuid,
      className: K.commandTab
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: K.commandButton,
        onClick: () => Ce(J)
      },
      /* @__PURE__ */ u.createElement("span", null, J.title),
      /* @__PURE__ */ u.createElement("small", null, J.status === !1 ? "Выключена" : "Включена")
    ),
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: K.moreButton,
        onClick: () => C(J)
      },
      "⋯"
    )
  ))), l ? /* @__PURE__ */ u.createElement(
    "div",
    {
      ref: I,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ u.createElement(
    fr,
    {
      page: (te == null ? void 0 : te.page) ?? 1,
      totalPages: (te == null ? void 0 : te.total_pages) ?? 1,
      onChange: (J) => P(
        "get_assistant_sub_direct_control_samples_short",
        J
      )
    }
  ), /* @__PURE__ */ u.createElement(
    Qy,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Ue : ze
    }
  ), /* @__PURE__ */ u.createElement(
    sl,
    {
      open: !!y,
      command: y,
      onClose: () => C(null),
      onToggleStatus: X,
      onDelete: he
    }
  )), /* @__PURE__ */ u.createElement(Yt, null));
}, Yy = "_form_nymr0_1", Ky = "_field_nymr0_15", Gy = "_textarea_nymr0_24", Ui = {
  form: Yy,
  field: Ky,
  textarea: Gy
}, Sd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Xy = ({
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
    if (s[c]) return s[c] ?? Sd();
  }, [s]), C = (S) => {
    f((_) => ({
      ..._,
      [c]: {
        ..._[c] ?? Sd(),
        ...S
      }
    }));
  };
  return /* @__PURE__ */ u.createElement(
    hn,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(ie, { onClick: o ? h : p }, o ? "Обновить" : "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Ui.form }, /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "Название команды",
        value: s.title,
        onChange: (S) => f({
          ...s,
          title: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Dn,
      {
        label: "Завершать диалог",
        checked: y.endStatus,
        onChange: (S) => C({
          endStatus: S.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "actionType",
        value: y.actionType,
        onChange: (S) => C({
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ye,
      {
        label: "answerType",
        value: y.answerType,
        onChange: (S) => C({
          answerType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Ui.field }, /* @__PURE__ */ u.createElement("label", null, "voiceCommands"), /* @__PURE__ */ u.createElement(
      "textarea",
      {
        className: Ui.textarea,
        rows: 6,
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (S) => C({
          voiceCommands: S.target.value.split(`
`)
        })
      }
    )))
  );
}, Jy = () => ({
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
    ...Jy(),
    forwardText: !1
  }
}), Zy = () => {
  const l = Pt(), [o, s] = g.useState(!1), [c, f] = g.useState(!1), [m, p] = g.useState(() => Cd()), [h, y] = g.useState(null), { ref: C, inView: S } = dr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: R,
    deleteCommand: T,
    detailInformationCommand: L,
    saveCommand: I,
    updateCommand: N,
    editStatusCommand: $,
    commands: P
  } = ul("get_assistant_settings_short"), [j, W] = g.useState(!1);
  g.useEffect(() => {
    !j || !l || !S || _ || !P || P.page >= P.total_pages || R("get_assistant_settings_short", P.page + 1, !0);
  }, [
    S,
    l,
    _,
    P,
    R
  ]), g.useEffect(() => {
    !_ && P && P.page === 1 && W(!0);
  }, [_, P]);
  const H = () => {
    f(!1), p(Cd()), s(!0);
  }, V = async (X) => {
    f(!0);
    const he = await L("get_assistant_command", X.uuid);
    p(he.data), s(!0);
  }, oe = async (X, he) => {
    console.log(X, he), await $("update_assistant_setting", X, he), R("get_assistant_settings_short");
  }, te = async (X) => {
    await T("delete_assistant_setting", X), R("get_assistant_settings_short");
  }, ge = async () => {
    await I("save_assistant_setting", m), s(!1);
  }, Ce = async () => {
    await N("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement("div", { className: K.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: K.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: K.header }, /* @__PURE__ */ u.createElement("div", { className: K.headerTop }, /* @__PURE__ */ u.createElement("div", { className: K.heading }, /* @__PURE__ */ u.createElement("p", { className: K.description }, "Создавайте и редактируйте голосовые команды ассистента.")), l ? /* @__PURE__ */ u.createElement(mr, null, /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    ie,
    {
      variant: "primary",
      onClick: H
    },
    "Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: K.commandList }, P == null ? void 0 : P.data.map((X) => /* @__PURE__ */ u.createElement("div", { key: X.uuid, className: K.commandTab }, /* @__PURE__ */ u.createElement("button", { type: "button", className: K.commandButton, onClick: () => V(X) }, /* @__PURE__ */ u.createElement("span", null, X.title), /* @__PURE__ */ u.createElement("small", null, X.status === !1 ? "Выключена" : "Включена")), /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: K.moreButton,
      "aria-label": `Действия команды ${X.title}`,
      onClick: () => y(X)
    },
    "⋯"
  )))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    fr,
    {
      page: (P == null ? void 0 : P.page) || 1,
      totalPages: (P == null ? void 0 : P.total_pages) || 1,
      onChange: (X) => R("get_assistant_settings_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    Xy,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => s(!1),
      onSave: ge,
      onUpdate: Ce
    }
  ), /* @__PURE__ */ u.createElement(
    sl,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: oe,
      onDelete: te
    }
  )), /* @__PURE__ */ u.createElement(Yt, null));
}, eg = "_form_1bj0d_1", tg = "_field_1bj0d_7", ng = "_input_1bj0d_13", rg = "_label_1bj0d_32", dt = {
  form: eg,
  field: tg,
  input: ng,
  label: rg
}, lg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(ye, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(ye, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(ye, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(ye, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(ye, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, ag = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(ye, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(ye, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, og = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(ye, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(ye, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, ig = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(
    ye,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement(Dn, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement(Dn, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement(Dn, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    ye,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, sg = "_page_tlhec_1", ug = {
  page: sg
};
function cg() {
  const l = il(), [o, s] = g.useState(!0), [c, f] = g.useState(null), m = g.useCallback(async () => {
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
const dg = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, Ma = {
  base_url: "",
  token: ""
}, fg = {
  global_music_timer: "",
  global_music_alarm: ""
}, kd = {
  yandex_tts: dg,
  remout: Ma,
  timer_alarm: fg,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, mg = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), pg = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), hg = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), vg = (l) => ({
  yandex_tts: mg(l == null ? void 0 : l.yandex_tts),
  remout: pg(l == null ? void 0 : l.remout),
  timer_alarm: hg(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Bi = (l, o) => {
  const s = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== o[f] && (s[f] = l[f]);
  }), s;
}, yg = (l, o) => {
  const s = {}, c = Bi(l.yandex_tts, o.yandex_tts), f = Bi(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Bi(l.remout ?? Ma, o.remout ?? Ma);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, gg = () => {
  Pt();
  const [l, o] = g.useState(kd), [s, c] = g.useState(kd), { settings: f, saveSettings: m } = cg();
  g.useEffect(() => {
    if (!f) return;
    const h = vg(f);
    o(h), c(h);
  }, [f]);
  const p = () => {
    const h = yg(l, s);
    m(h);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement($n, null), /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: ug.page }, /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement(zt, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    ig,
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
  )), /* @__PURE__ */ u.createElement(zt, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    lg,
    {
      data: l.yandex_tts,
      onChange: (h) => o({ ...l, yandex_tts: h })
    }
  )), l.active_remout && /* @__PURE__ */ u.createElement(zt, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    ag,
    {
      data: l.remout ?? Ma,
      onChange: (h) => o({ ...l, remout: h })
    }
  )), /* @__PURE__ */ u.createElement(zt, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    og,
    {
      data: l.timer_alarm,
      onChange: (h) => o({ ...l, timer_alarm: h })
    }
  )), /* @__PURE__ */ u.createElement(ie, { onClick: p }, "Сохранить")), /* @__PURE__ */ u.createElement(Yt, null));
}, Ln = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, _g = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 60 * 1e3).toISOString();
}, Jd = (l) => {
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
    return Jd(l.count_timer || "");
  }
  return 0;
}, Eg = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 60), c = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, bi = (l) => {
  const o = Ln(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function Zd() {
  const l = il(), [o, s] = g.useState([]), [c, f] = g.useState([]), [m, p] = g.useState([]), [h, y] = g.useState(!0), C = g.useMemo(() => l.getDevices(), [l]), S = g.useCallback(async () => {
    const j = await l._getShort("get_timer_requests_short", 1, 100), W = await Promise.all(
      bi(j).map(async (H) => {
        var oe;
        const V = await l._getDetail(H.uuid, "get_timer_request");
        return ((oe = Ln(V)) == null ? void 0 : oe.data) ?? Ln(V);
      })
    );
    s(W.filter((H) => !!H && H.action_type === "create_timer"));
  }, [l]), _ = g.useCallback(async () => {
    const j = await l._getShort("get_alarm_requests_short", 1, 100), W = await Promise.all(
      bi(j).map(async (H) => {
        var oe;
        const V = await l._getDetail(H.uuid, "get_alarm_request");
        return ((oe = Ln(V)) == null ? void 0 : oe.data) ?? Ln(V);
      })
    );
    f(W.filter((H) => !!H && H.action_type !== "delete_alarm"));
  }, [l]), R = g.useCallback(async () => {
    const j = await l._getShort("get_alarm_time_widgets_short", 1, 100), W = await Promise.all(
      bi(j).map(async (H) => {
        var oe;
        const V = await l._getDetail(H.uuid, "get_alarm_time_widget");
        return ((oe = Ln(V)) == null ? void 0 : oe.data) ?? Ln(V);
      })
    );
    p(W.filter(Boolean));
  }, [l]), T = g.useCallback(async () => {
    y(!0);
    try {
      await Promise.all([S(), _(), R()]);
    } finally {
      y(!1);
    }
  }, [_, R, S]);
  return g.useEffect(() => {
    T();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (j, W, H = 0.3) => {
      await l._save({ name: `Будильник ${W}`, action_type: "create_alarm", device_id: j, status: "on", time: W, volume_start: H }, "save_alarm_request"), await _();
    },
    createTimer: async (j, W) => {
      const H = {
        count_timer: Eg(W),
        date_end: _g(W)
      };
      await l._save({ name: `Таймер ${W} мин`, action_type: "create_timer", device_id: j, timer_time: H }, "save_timer_request"), await S();
    },
    deleteAlarm: async (j) => {
      await l._delete(j.uuid, "delete_alarm_request"), await _();
    },
    devices: C,
    loading: h,
    stopTimer: async (j) => {
      await l._delete(j.uuid, "delete_timer_request"), await S();
    },
    timers: o,
    toTimerSeconds: Jd,
    updateAlarm: async (j, W) => {
      await l._update(j.uuid, "update_alarm_request", { ...j, action_type: "edit_alarm", ...W }), await _();
    }
  };
}
const wg = "_page_di7r7_1", Sg = "_header_di7r7_11", Cg = "_title_di7r7_18", kg = "_description_di7r7_25", Ng = "_grid_di7r7_31", xg = "_card_di7r7_37", Tg = "_empty_di7r7_37", Rg = "_cardHeader_di7r7_44", Pg = "_cardTitle_di7r7_51", Mg = "_meta_di7r7_56", Lg = "_time_di7r7_62", Dg = "_form_di7r7_69", Ig = "_field_di7r7_75", $g = "_label_di7r7_81", Og = "_select_di7r7_87", zg = "_input_di7r7_87", Ag = "_quickTabs_di7r7_97", Fg = "_quickTab_di7r7_97", jg = "_activeQuickTab_di7r7_113", Ug = "_row_di7r7_118", ee = {
  page: wg,
  header: Sg,
  title: Cg,
  description: kg,
  grid: Ng,
  card: xg,
  empty: Tg,
  cardHeader: Rg,
  cardTitle: Pg,
  meta: Mg,
  time: Lg,
  form: Dg,
  field: Ig,
  label: $g,
  select: Og,
  input: zg,
  quickTabs: Ag,
  quickTab: Fg,
  activeQuickTab: jg,
  row: Ug,
  switch: "_switch_di7r7_124"
}, Bg = [5, 10, 15, 30, 60], bg = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, Hg = () => {
  Pt();
  const { createTimer: l, devices: o, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = Zd(), [p, h] = g.useState(!1), [y, C] = g.useState(""), [S, _] = g.useState(5), [R, T] = g.useState({});
  g.useEffect(() => {
    T((N) => Object.fromEntries(f.map(($) => [$.uuid, N[$.uuid] ?? m($.timer_time)])));
  }, [f, m]), g.useEffect(() => {
    const N = window.setInterval(() => {
      T(($) => Object.fromEntries(Object.entries($).map(([P, j]) => [P, Math.max(0, j - 1)])));
    }, 1e3);
    return () => window.clearInterval(N);
  }, []);
  const L = g.useMemo(() => new Map(o.map((N) => [N.id, N.name])), [o]), I = async () => {
    y && (await l(y, S), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: ee.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: ee.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(ie, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.grid }, f.length ? f.map((N) => /* @__PURE__ */ u.createElement("div", { className: ee.card, key: N.uuid }, /* @__PURE__ */ u.createElement("div", { className: ee.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: ee.cardTitle }, N.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: ee.meta }, "Устройство: ", L.get(N.device_id) || N.device_id)), /* @__PURE__ */ u.createElement(ie, { variant: "ghost", onClick: () => c(N) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: ee.time }, bg(R[N.uuid] ?? m(N.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: ee.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(hn, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(ie, { onClick: I, disabled: !y }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: ee.select, value: y, onChange: (N) => C(N.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((N) => /* @__PURE__ */ u.createElement("option", { key: N.id, value: N.id }, N.name)))), /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: ee.quickTabs }, Bg.map((N) => /* @__PURE__ */ u.createElement("button", { key: N, type: "button", className: `${ee.quickTab} ${S === N ? ee.activeQuickTab : ""}`, onClick: () => _(N) }, N, " мин")))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "number", min: "1", value: S, onChange: (N) => _(Number(N.target.value) || 1) })))), /* @__PURE__ */ u.createElement(Yt, null));
}, Vg = () => {
  Pt();
  const { alarmTimeWidgets: l, alarms: o, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = Zd(), [h, y] = g.useState(!1), [C, S] = g.useState(""), [_, R] = g.useState("08:00"), [T, L] = g.useState(0.3), I = g.useMemo(() => {
    const P = l.flatMap((j) => j.time || []);
    return Array.from(new Set(P)).filter(Boolean);
  }, [l]), N = g.useMemo(() => new Map(f.map((P) => [P.id, P.name])), [f]), $ = async () => {
    !C || !_ || (await s(C, _, T), y(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: ee.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: ee.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: ee.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: ee.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(ie, { onClick: () => y(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ee.grid }, o.length ? o.map((P) => /* @__PURE__ */ u.createElement("div", { className: ee.card, key: P.uuid }, /* @__PURE__ */ u.createElement("div", { className: ee.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: ee.cardTitle }, P.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: ee.meta }, "Устройство: ", N.get(P.device_id) || P.device_id)), /* @__PURE__ */ u.createElement(ie, { variant: "ghost", onClick: () => c(P) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${ee.row} ${ee.meta}` }, /* @__PURE__ */ u.createElement("input", { className: ee.switch, type: "checkbox", checked: P.status !== "off", onChange: (j) => p(P, { status: j.target.checked ? "on" : "off" }) }), P.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "time", value: P.time, onChange: (j) => p(P, { time: j.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: ee.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: P.volume_start ?? 0.3,
      onChange: (j) => p(P, { volume_start: Number(j.target.value) })
    }
  )))) : /* @__PURE__ */ u.createElement("div", { className: ee.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ u.createElement(hn, { open: h, onClose: () => y(!1), title: "Создать будильник", footer: /* @__PURE__ */ u.createElement(ie, { onClick: $, disabled: !C || !_ }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: ee.form }, /* @__PURE__ */ u.createElement("div", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: ee.quickTabs }, I.length ? I.map((P) => /* @__PURE__ */ u.createElement("button", { key: P, type: "button", className: `${ee.quickTab} ${_ === P ? ee.activeQuickTab : ""}`, onClick: () => R(P) }, P)) : /* @__PURE__ */ u.createElement("span", { className: ee.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: ee.select, value: C, onChange: (P) => S(P.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((P) => /* @__PURE__ */ u.createElement("option", { key: P.id, value: P.id }, P.name)))), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: ee.input, type: "time", value: _, onChange: (P) => R(P.target.value) })), /* @__PURE__ */ u.createElement("label", { className: ee.field }, /* @__PURE__ */ u.createElement("span", { className: ee.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: ee.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: T,
      onChange: (P) => L(Number(P.target.value))
    }
  )))), /* @__PURE__ */ u.createElement(Yt, null));
}, Wg = () => /* @__PURE__ */ u.createElement(nh, null, /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/",
    element: /* @__PURE__ */ u.createElement(
      wa,
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
    element: /* @__PURE__ */ u.createElement(Vv, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands",
    element: /* @__PURE__ */ u.createElement(
      wa,
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
    element: /* @__PURE__ */ u.createElement(zy, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Fy, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ u.createElement(
      wa,
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
    element: /* @__PURE__ */ u.createElement(Wy, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement(qy, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(Zy, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(Hg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(Vg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(gg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "*",
    element: /* @__PURE__ */ u.createElement(
      wa,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), Qg = () => /* @__PURE__ */ u.createElement(Wg, null);
class qg {
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
const Yg = 1, La = 2, Hi = 3, Kg = 4, Gg = 5;
function Xg(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function Jg() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function Zg(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Nd(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function e_() {
  return {
    type: "ping"
  };
}
function t_(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const n_ = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, r_ = "auth_invalid", l_ = "auth_ok";
function a_(l) {
  if (!l.auth)
    throw Kg;
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
    const S = () => {
      if (y.removeEventListener("close", S), C) {
        h(La);
        return;
      }
      if (m === 0) {
        h(Yg);
        return;
      }
      const T = m === -1 ? -1 : m - 1;
      setTimeout(() => f(T, p, h), 1e3);
    }, _ = async (T) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), y.send(JSON.stringify(Xg(o.accessToken)));
      } catch (L) {
        C = L === La, y.close();
      }
    }, R = async (T) => {
      const L = JSON.parse(T.data);
      switch (L.type) {
        case r_:
          C = !0, y.close();
          break;
        case l_:
          y.removeEventListener("open", _), y.removeEventListener("message", R), y.removeEventListener("close", S), y.removeEventListener("error", S), y.haVersion = L.ha_version, n_(y.haVersion, 2022, 9) && y.send(JSON.stringify(Jg())), p(y);
          break;
      }
    };
    y.addEventListener("open", _), y.addEventListener("message", R), y.addEventListener("close", S), y.addEventListener("error", S);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class o_ {
  constructor(o, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Nd(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(t_(Hi, "Connection lost"));
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
                  C.reject && C.reject(Hi);
              }
              h === La ? this.fireEvent("reconnect-error", h) : m(p + 1);
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
    return this.subscribeMessage(o, Zg(s));
  }
  ping() {
    return this.sendMessagePromise(e_());
  }
  sendMessage(o, s) {
    if (!this.connected)
      throw Hi;
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
          this.connected && await this.sendMessagePromise(Nd(h)), this.commands.delete(h);
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
const i_ = (l) => l * 1e3 + Date.now();
async function s_(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw Gg;
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
    throw m.status === 400 || m.status === 403 ? La : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = i_(p.expires_in), p;
}
class u_ {
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
    const o = await s_(this.data.hassUrl, this.data.clientId, {
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
function c_(l, o) {
  return new u_({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function d_(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: a_ }, l), s = await o.createSocket(o);
  return new o_(s, o);
}
function f_(l) {
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
async function m_() {
  const s = c_(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await d_({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function p_({
  children: l,
  hass: o
}) {
  const [s, c] = g.useState(null);
  return g.useEffect(() => {
    async function f() {
      const m = o ? f_(o) : await m_();
      c(new qg(m));
    }
    f().catch(console.error);
  }, [o]), s ? /* @__PURE__ */ u.createElement(Kd.Provider, { value: s }, l) : /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...");
}
function h_({ hass: l }) {
  return /* @__PURE__ */ u.createElement(xh, null, /* @__PURE__ */ u.createElement(p_, { hass: l }, /* @__PURE__ */ u.createElement(Qg, null)));
}
const xd = "dialog-custom-ui-panel", Td = "dialog-custom-ui-style";
class v_ extends HTMLElement {
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
    if (c.getElementById(Td))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Td, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
    this.root || (this.root = lp.createRoot(o)), this.root.render(
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(h_, { hass: this.hassValue }))
    );
  }
}
customElements.get(xd) || customElements.define(xd, v_);
