function Id(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Oi = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;
function lp() {
  if (rd) return ue;
  rd = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function x(N) {
    return N === null || typeof N != "object" ? null : (N = _ && N[_] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, z = Object.assign, D = {};
  function E(N, A, se) {
    this.props = N, this.context = A, this.refs = D, this.updater = se || L;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(N, A) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, A, "setState");
  }, E.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function M() {
  }
  M.prototype = E.prototype;
  function S(N, A, se) {
    this.props = N, this.context = A, this.refs = D, this.updater = se || L;
  }
  var O = S.prototype = new M();
  O.constructor = S, z(O, E.prototype), O.isPureReactComponent = !0;
  var H = Array.isArray, Y = Object.prototype.hasOwnProperty, W = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(N, A, se) {
    var ce, fe = {}, me = null, Ee = null;
    if (A != null) for (ce in A.ref !== void 0 && (Ee = A.ref), A.key !== void 0 && (me = "" + A.key), A) Y.call(A, ce) && !te.hasOwnProperty(ce) && (fe[ce] = A[ce]);
    var ve = arguments.length - 2;
    if (ve === 1) fe.children = se;
    else if (1 < ve) {
      for (var Ne = Array(ve), at = 0; at < ve; at++) Ne[at] = arguments[at + 2];
      fe.children = Ne;
    }
    if (N && N.defaultProps) for (ce in ve = N.defaultProps, ve) fe[ce] === void 0 && (fe[ce] = ve[ce]);
    return { $$typeof: l, type: N, key: me, ref: Ee, props: fe, _owner: W.current };
  }
  function ge(N, A) {
    return { $$typeof: l, type: N.type, key: A, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function _e(N) {
    return typeof N == "object" && N !== null && N.$$typeof === l;
  }
  function le(N) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(se) {
      return A[se];
    });
  }
  var ie = /\/+/g;
  function Re(N, A) {
    return typeof N == "object" && N !== null && N.key != null ? le("" + N.key) : A.toString(36);
  }
  function Oe(N, A, se, ce, fe) {
    var me = typeof N;
    (me === "undefined" || me === "boolean") && (N = null);
    var Ee = !1;
    if (N === null) Ee = !0;
    else switch (me) {
      case "string":
      case "number":
        Ee = !0;
        break;
      case "object":
        switch (N.$$typeof) {
          case l:
          case o:
            Ee = !0;
        }
    }
    if (Ee) return Ee = N, fe = fe(Ee), N = ce === "" ? "." + Re(Ee, 0) : ce, H(fe) ? (se = "", N != null && (se = N.replace(ie, "$&/") + "/"), Oe(fe, A, se, "", function(at) {
      return at;
    })) : fe != null && (_e(fe) && (fe = ge(fe, se + (!fe.key || Ee && Ee.key === fe.key ? "" : ("" + fe.key).replace(ie, "$&/") + "/") + N)), A.push(fe)), 1;
    if (Ee = 0, ce = ce === "" ? "." : ce + ":", H(N)) for (var ve = 0; ve < N.length; ve++) {
      me = N[ve];
      var Ne = ce + Re(me, ve);
      Ee += Oe(me, A, se, Ne, fe);
    }
    else if (Ne = x(N), typeof Ne == "function") for (N = Ne.call(N), ve = 0; !(me = N.next()).done; ) me = me.value, Ne = ce + Re(me, ve++), Ee += Oe(me, A, se, Ne, fe);
    else if (me === "object") throw A = String(N), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    return Ee;
  }
  function X(N, A, se) {
    if (N == null) return N;
    var ce = [], fe = 0;
    return Oe(N, ce, "", "", function(me) {
      return A.call(se, me, fe++);
    }), ce;
  }
  function Le(N) {
    if (N._status === -1) {
      var A = N._result;
      A = A(), A.then(function(se) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = se);
      }, function(se) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = se);
      }), N._status === -1 && (N._status = 0, N._result = A);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var Ie = { current: null }, V = { transition: null }, re = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: V, ReactCurrentOwner: W };
  function K() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ue.Children = { map: X, forEach: function(N, A, se) {
    X(N, function() {
      A.apply(this, arguments);
    }, se);
  }, count: function(N) {
    var A = 0;
    return X(N, function() {
      A++;
    }), A;
  }, toArray: function(N) {
    return X(N, function(A) {
      return A;
    }) || [];
  }, only: function(N) {
    if (!_e(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, ue.Component = E, ue.Fragment = s, ue.Profiler = f, ue.PureComponent = S, ue.StrictMode = c, ue.Suspense = v, ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = re, ue.act = K, ue.cloneElement = function(N, A, se) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var ce = z({}, N.props), fe = N.key, me = N.ref, Ee = N._owner;
    if (A != null) {
      if (A.ref !== void 0 && (me = A.ref, Ee = W.current), A.key !== void 0 && (fe = "" + A.key), N.type && N.type.defaultProps) var ve = N.type.defaultProps;
      for (Ne in A) Y.call(A, Ne) && !te.hasOwnProperty(Ne) && (ce[Ne] = A[Ne] === void 0 && ve !== void 0 ? ve[Ne] : A[Ne]);
    }
    var Ne = arguments.length - 2;
    if (Ne === 1) ce.children = se;
    else if (1 < Ne) {
      ve = Array(Ne);
      for (var at = 0; at < Ne; at++) ve[at] = arguments[at + 2];
      ce.children = ve;
    }
    return { $$typeof: l, type: N.type, key: fe, ref: me, props: ce, _owner: Ee };
  }, ue.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: m, _context: N }, N.Consumer = N;
  }, ue.createElement = ne, ue.createFactory = function(N) {
    var A = ne.bind(null, N);
    return A.type = N, A;
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(N) {
    return { $$typeof: h, render: N };
  }, ue.isValidElement = _e, ue.lazy = function(N) {
    return { $$typeof: R, _payload: { _status: -1, _result: N }, _init: Le };
  }, ue.memo = function(N, A) {
    return { $$typeof: C, type: N, compare: A === void 0 ? null : A };
  }, ue.startTransition = function(N) {
    var A = V.transition;
    V.transition = {};
    try {
      N();
    } finally {
      V.transition = A;
    }
  }, ue.unstable_act = K, ue.useCallback = function(N, A) {
    return Ie.current.useCallback(N, A);
  }, ue.useContext = function(N) {
    return Ie.current.useContext(N);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(N) {
    return Ie.current.useDeferredValue(N);
  }, ue.useEffect = function(N, A) {
    return Ie.current.useEffect(N, A);
  }, ue.useId = function() {
    return Ie.current.useId();
  }, ue.useImperativeHandle = function(N, A, se) {
    return Ie.current.useImperativeHandle(N, A, se);
  }, ue.useInsertionEffect = function(N, A) {
    return Ie.current.useInsertionEffect(N, A);
  }, ue.useLayoutEffect = function(N, A) {
    return Ie.current.useLayoutEffect(N, A);
  }, ue.useMemo = function(N, A) {
    return Ie.current.useMemo(N, A);
  }, ue.useReducer = function(N, A, se) {
    return Ie.current.useReducer(N, A, se);
  }, ue.useRef = function(N) {
    return Ie.current.useRef(N);
  }, ue.useState = function(N) {
    return Ie.current.useState(N);
  }, ue.useSyncExternalStore = function(N, A, se) {
    return Ie.current.useSyncExternalStore(N, A, se);
  }, ue.useTransition = function() {
    return Ie.current.useTransition();
  }, ue.version = "18.3.1", ue;
}
var ld;
function Dd() {
  return ld || (ld = 1, Oi.exports = lp()), Oi.exports;
}
var y = Dd();
const u = /* @__PURE__ */ Id(y);
var Ca = {}, Fi = { exports: {} }, rt = {}, Ai = { exports: {} }, Ui = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function ap() {
  return ad || (ad = 1, (function(l) {
    function o(V, re) {
      var K = V.length;
      V.push(re);
      e: for (; 0 < K; ) {
        var N = K - 1 >>> 1, A = V[N];
        if (0 < f(A, re)) V[N] = re, V[K] = A, K = N;
        else break e;
      }
    }
    function s(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var re = V[0], K = V.pop();
      if (K !== re) {
        V[0] = K;
        e: for (var N = 0, A = V.length, se = A >>> 1; N < se; ) {
          var ce = 2 * (N + 1) - 1, fe = V[ce], me = ce + 1, Ee = V[me];
          if (0 > f(fe, K)) me < A && 0 > f(Ee, fe) ? (V[N] = Ee, V[me] = K, N = me) : (V[N] = fe, V[ce] = K, N = ce);
          else if (me < A && 0 > f(Ee, K)) V[N] = Ee, V[me] = K, N = me;
          else break e;
        }
      }
      return re;
    }
    function f(V, re) {
      var K = V.sortIndex - re.sortIndex;
      return K !== 0 ? K : V.id - re.id;
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
    var v = [], C = [], R = 1, _ = null, x = 3, L = !1, z = !1, D = !1, E = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, S = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(V) {
      for (var re = s(C); re !== null; ) {
        if (re.callback === null) c(C);
        else if (re.startTime <= V) c(C), re.sortIndex = re.expirationTime, o(v, re);
        else break;
        re = s(C);
      }
    }
    function H(V) {
      if (D = !1, O(V), !z) if (s(v) !== null) z = !0, Le(Y);
      else {
        var re = s(C);
        re !== null && Ie(H, re.startTime - V);
      }
    }
    function Y(V, re) {
      z = !1, D && (D = !1, M(ne), ne = -1), L = !0;
      var K = x;
      try {
        for (O(re), _ = s(v); _ !== null && (!(_.expirationTime > re) || V && !le()); ) {
          var N = _.callback;
          if (typeof N == "function") {
            _.callback = null, x = _.priorityLevel;
            var A = N(_.expirationTime <= re);
            re = l.unstable_now(), typeof A == "function" ? _.callback = A : _ === s(v) && c(v), O(re);
          } else c(v);
          _ = s(v);
        }
        if (_ !== null) var se = !0;
        else {
          var ce = s(C);
          ce !== null && Ie(H, ce.startTime - re), se = !1;
        }
        return se;
      } finally {
        _ = null, x = K, L = !1;
      }
    }
    var W = !1, te = null, ne = -1, ge = 5, _e = -1;
    function le() {
      return !(l.unstable_now() - _e < ge);
    }
    function ie() {
      if (te !== null) {
        var V = l.unstable_now();
        _e = V;
        var re = !0;
        try {
          re = te(!0, V);
        } finally {
          re ? Re() : (W = !1, te = null);
        }
      } else W = !1;
    }
    var Re;
    if (typeof S == "function") Re = function() {
      S(ie);
    };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), X = Oe.port2;
      Oe.port1.onmessage = ie, Re = function() {
        X.postMessage(null);
      };
    } else Re = function() {
      E(ie, 0);
    };
    function Le(V) {
      te = V, W || (W = !0, Re());
    }
    function Ie(V, re) {
      ne = E(function() {
        V(l.unstable_now());
      }, re);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, l.unstable_continueExecution = function() {
      z || L || (z = !0, Le(Y));
    }, l.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ge = 0 < V ? Math.floor(1e3 / V) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(v);
    }, l.unstable_next = function(V) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = x;
      }
      var K = x;
      x = re;
      try {
        return V();
      } finally {
        x = K;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(V, re) {
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
      var K = x;
      x = V;
      try {
        return re();
      } finally {
        x = K;
      }
    }, l.unstable_scheduleCallback = function(V, re, K) {
      var N = l.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? N + K : N) : K = N, V) {
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
      return A = K + A, V = { id: R++, callback: re, priorityLevel: V, startTime: K, expirationTime: A, sortIndex: -1 }, K > N ? (V.sortIndex = K, o(C, V), s(v) === null && V === s(C) && (D ? (M(ne), ne = -1) : D = !0, Ie(H, K - N))) : (V.sortIndex = A, o(v, V), z || L || (z = !0, Le(Y))), V;
    }, l.unstable_shouldYield = le, l.unstable_wrapCallback = function(V) {
      var re = x;
      return function() {
        var K = x;
        x = re;
        try {
          return V.apply(this, arguments);
        } finally {
          x = K;
        }
      };
    };
  })(Ui)), Ui;
}
var od;
function op() {
  return od || (od = 1, Ai.exports = ap()), Ai.exports;
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
var id;
function ip() {
  if (id) return rt;
  id = 1;
  var l = Dd(), o = op();
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), v = Object.prototype.hasOwnProperty, C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, R = {}, _ = {};
  function x(e) {
    return v.call(_, e) ? !0 : v.call(R, e) ? !1 : C.test(e) ? _[e] = !0 : (R[e] = !0, !1);
  }
  function L(e, t, n, r) {
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
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || L(e, t, n, r)) return !0;
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
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new D(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new D(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new D(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new D(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new D(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new D(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    E[t] = new D(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(M, S);
    E[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(M, S);
    E[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, n, r) {
    var a = E.hasOwnProperty(t) ? E[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (z(t, n, a, r) && (n = null), r || a === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var H = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = Symbol.for("react.element"), W = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ge = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), le = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Re = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
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
      se = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function fe(e) {
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
      case te:
        return "Fragment";
      case W:
        return "Portal";
      case ge:
        return "Profiler";
      case ne:
        return "StrictMode";
      case Re:
        return "Suspense";
      case Oe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case le:
        return (e.displayName || "Context") + ".Consumer";
      case _e:
        return (e._context.displayName || "Context") + ".Provider";
      case ie:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case X:
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
  function Ee(e) {
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
  function ve(e) {
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
  function Ne(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function at(e) {
    var t = Ne(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  function pl(e) {
    e._valueTracker || (e._valueTracker = at(e));
  }
  function us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ne(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function hl(e) {
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
  function cs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ve(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ds(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function Va(e, t) {
    ds(e, t);
    var n = ve(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ha(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ha(e, t.type, ve(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function fs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ha(e, t, n) {
    (t !== "number" || hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var _r = Array.isArray;
  function Un(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ve(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, r && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ba(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ms(e, t) {
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
    e._wrapperState = { initialValue: ve(n) };
  }
  function ps(e, t) {
    var n = ve(t.value), r = ve(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function hs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function vs(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var vl, ys = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (vl = vl || document.createElement("div"), vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = vl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
  }, sf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wr).forEach(function(e) {
    sf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
    });
  });
  function gs(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
  }
  function _s(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = gs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var uf = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ya(e, t) {
    if (t) {
      if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
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
  var qa = null;
  function Ga(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, jn = null, Bn = null;
  function Es(e) {
    if (e = Vr(e)) {
      if (typeof Xa != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Ul(t), Xa(e.stateNode, e.type, t));
    }
  }
  function ws(e) {
    jn ? Bn ? Bn.push(e) : Bn = [e] : jn = e;
  }
  function ks() {
    if (jn) {
      var e = jn, t = Bn;
      if (Bn = jn = null, Es(e), t) for (e = 0; e < t.length; e++) Es(t[e]);
    }
  }
  function Ss(e, t) {
    return e(t);
  }
  function Cs() {
  }
  var Ja = !1;
  function Ns(e, t, n) {
    if (Ja) return e(t, n);
    Ja = !0;
    try {
      return Ss(e, t, n);
    } finally {
      Ja = !1, (jn !== null || Bn !== null) && (Cs(), ks());
    }
  }
  function kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ul(n);
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
    var Sr = {};
    Object.defineProperty(Sr, "passive", { get: function() {
      Za = !0;
    } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
  } catch {
    Za = !1;
  }
  function cf(e, t, n, r, a, i, d, g, w) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (U) {
      this.onError(U);
    }
  }
  var Cr = !1, yl = null, gl = !1, eo = null, df = { onError: function(e) {
    Cr = !0, yl = e;
  } };
  function ff(e, t, n, r, a, i, d, g, w) {
    Cr = !1, yl = null, cf.apply(df, arguments);
  }
  function mf(e, t, n, r, a, i, d, g, w) {
    if (ff.apply(this, arguments), Cr) {
      if (Cr) {
        var I = yl;
        Cr = !1, yl = null;
      } else throw Error(s(198));
      gl || (gl = !0, eo = I);
    }
  }
  function wn(e) {
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
  function xs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ts(e) {
    if (wn(e) !== e) throw Error(s(188));
  }
  function pf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = wn(e), t === null) throw Error(s(188));
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
          if (i === n) return Ts(a), e;
          if (i === r) return Ts(a), t;
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
  function Rs(e) {
    return e = pf(e), e !== null ? Ps(e) : null;
  }
  function Ps(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ps(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ms = o.unstable_scheduleCallback, Ls = o.unstable_cancelCallback, hf = o.unstable_shouldYield, vf = o.unstable_requestPaint, ze = o.unstable_now, yf = o.unstable_getCurrentPriorityLevel, to = o.unstable_ImmediatePriority, Is = o.unstable_UserBlockingPriority, _l = o.unstable_NormalPriority, gf = o.unstable_LowPriority, Ds = o.unstable_IdlePriority, El = null, Mt = null;
  function _f(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
      Mt.onCommitFiberRoot(El, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var wt = Math.clz32 ? Math.clz32 : kf, Ef = Math.log, wf = Math.LN2;
  function kf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ef(e) / wf | 0) | 0;
  }
  var wl = 64, kl = 4194304;
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
  function Sl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, i = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var g = d & ~a;
      g !== 0 ? r = Nr(g) : (i &= d, i !== 0 && (r = Nr(i)));
    } else d = n & ~a, d !== 0 ? r = Nr(d) : i !== 0 && (r = Nr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - wt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Sf(e, t) {
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
  function Cf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var d = 31 - wt(i), g = 1 << d, w = a[d];
      w === -1 ? ((g & n) === 0 || (g & r) !== 0) && (a[d] = Sf(g, t)) : w <= t && (e.expiredLanes |= g), i &= ~g;
    }
  }
  function no(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function zs() {
    var e = wl;
    return wl <<= 1, (wl & 4194240) === 0 && (wl = 64), e;
  }
  function ro(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function xr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - wt(t), e[t] = n;
  }
  function Nf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - wt(n), i = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
    }
  }
  function lo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - wt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var ye = 0;
  function $s(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Os, ao, Fs, As, Us, oo = !1, Cl = [], Xt = null, Jt = null, Zt = null, Tr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), en = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function js(e, t) {
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
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Vr(t), t !== null && ao(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Tf(e, t, n, r, a) {
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
  function Bs(e) {
    var t = kn(e.target);
    if (t !== null) {
      var n = wn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xs(n), t !== null) {
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
  function Nl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = so(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        qa = r, n.target.dispatchEvent(r), qa = null;
      } else return t = Vr(n), t !== null && ao(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ws(e, t, n) {
    Nl(e) && n.delete(t);
  }
  function Rf() {
    oo = !1, Xt !== null && Nl(Xt) && (Xt = null), Jt !== null && Nl(Jt) && (Jt = null), Zt !== null && Nl(Zt) && (Zt = null), Tr.forEach(Ws), Rr.forEach(Ws);
  }
  function Mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, oo || (oo = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Rf)));
  }
  function Lr(e) {
    function t(a) {
      return Mr(a, e);
    }
    if (0 < Cl.length) {
      Mr(Cl[0], e);
      for (var n = 1; n < Cl.length; n++) {
        var r = Cl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Xt !== null && Mr(Xt, e), Jt !== null && Mr(Jt, e), Zt !== null && Mr(Zt, e), Tr.forEach(t), Rr.forEach(t), n = 0; n < en.length; n++) r = en[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < en.length && (n = en[0], n.blockedOn === null); ) Bs(n), n.blockedOn === null && en.shift();
  }
  var Wn = H.ReactCurrentBatchConfig, xl = !0;
  function Pf(e, t, n, r) {
    var a = ye, i = Wn.transition;
    Wn.transition = null;
    try {
      ye = 1, io(e, t, n, r);
    } finally {
      ye = a, Wn.transition = i;
    }
  }
  function Mf(e, t, n, r) {
    var a = ye, i = Wn.transition;
    Wn.transition = null;
    try {
      ye = 4, io(e, t, n, r);
    } finally {
      ye = a, Wn.transition = i;
    }
  }
  function io(e, t, n, r) {
    if (xl) {
      var a = so(e, t, n, r);
      if (a === null) xo(e, t, r, Tl, n), js(e, r);
      else if (Tf(a, e, t, n, r)) r.stopPropagation();
      else if (js(e, r), t & 4 && -1 < xf.indexOf(e)) {
        for (; a !== null; ) {
          var i = Vr(a);
          if (i !== null && Os(i), i = so(e, t, n, r), i === null && xo(e, t, r, Tl, n), i === a) break;
          a = i;
        }
        a !== null && r.stopPropagation();
      } else xo(e, t, r, null, n);
    }
  }
  var Tl = null;
  function so(e, t, n, r) {
    if (Tl = null, e = Ga(r), e = kn(e), e !== null) if (t = wn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Tl = e, null;
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
        switch (yf()) {
          case to:
            return 1;
          case Is:
            return 4;
          case _l:
          case gf:
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
  var tn = null, uo = null, Rl = null;
  function Hs() {
    if (Rl) return Rl;
    var e, t = uo, n = t.length, r, a = "value" in tn ? tn.value : tn.textContent, i = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[i - r]; r++) ;
    return Rl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Pl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ml() {
    return !0;
  }
  function bs() {
    return !1;
  }
  function ot(e) {
    function t(n, r, a, i, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(i) : i[g]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ml : bs, this.isPropagationStopped = bs, this;
    }
    return K(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ml);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ml);
    }, persist: function() {
    }, isPersistent: Ml }), t;
  }
  var Vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, co = ot(Vn), Ir = K({}, Vn, { view: 0, detail: 0 }), Lf = ot(Ir), fo, mo, Dr, Ll = K({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ho, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (fo = e.screenX - Dr.screenX, mo = e.screenY - Dr.screenY) : mo = fo = 0, Dr = e), fo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : mo;
  } }), Qs = ot(Ll), If = K({}, Ll, { dataTransfer: 0 }), Df = ot(If), zf = K({}, Ir, { relatedTarget: 0 }), po = ot(zf), $f = K({}, Vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Of = ot($f), Ff = K({}, Vn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Af = ot(Ff), Uf = K({}, Vn, { data: 0 }), Ys = ot(Uf), jf = {
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
  }, Bf = {
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
  }, Wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Vf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wf[e]) ? !!t[e] : !1;
  }
  function ho() {
    return Vf;
  }
  var Hf = K({}, Ir, { key: function(e) {
    if (e.key) {
      var t = jf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ho, charCode: function(e) {
    return e.type === "keypress" ? Pl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), bf = ot(Hf), Qf = K({}, Ll, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ks = ot(Qf), Yf = K({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ho }), Kf = ot(Yf), qf = K({}, Vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = ot(qf), Xf = K({}, Ll, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Jf = ot(Xf), Zf = [9, 13, 27, 32], vo = h && "CompositionEvent" in window, zr = null;
  h && "documentMode" in document && (zr = document.documentMode);
  var em = h && "TextEvent" in window && !zr, qs = h && (!vo || zr && 8 < zr && 11 >= zr), Gs = " ", Xs = !1;
  function Js(e, t) {
    switch (e) {
      case "keyup":
        return Zf.indexOf(t.keyCode) !== -1;
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
  function Zs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Hn = !1;
  function tm(e, t) {
    switch (e) {
      case "compositionend":
        return Zs(t);
      case "keypress":
        return t.which !== 32 ? null : (Xs = !0, Gs);
      case "textInput":
        return e = t.data, e === Gs && Xs ? null : e;
      default:
        return null;
    }
  }
  function nm(e, t) {
    if (Hn) return e === "compositionend" || !vo && Js(e, t) ? (e = Hs(), Rl = uo = tn = null, Hn = !1, e) : null;
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
        return qs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rm[e.type] : t === "textarea";
  }
  function tu(e, t, n, r) {
    ws(r), t = Ol(t, "onChange"), 0 < t.length && (n = new co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var $r = null, Or = null;
  function lm(e) {
    _u(e, 0);
  }
  function Il(e) {
    var t = qn(e);
    if (us(t)) return e;
  }
  function am(e, t) {
    if (e === "change") return t;
  }
  var nu = !1;
  if (h) {
    var yo;
    if (h) {
      var go = "oninput" in document;
      if (!go) {
        var ru = document.createElement("div");
        ru.setAttribute("oninput", "return;"), go = typeof ru.oninput == "function";
      }
      yo = go;
    } else yo = !1;
    nu = yo && (!document.documentMode || 9 < document.documentMode);
  }
  function lu() {
    $r && ($r.detachEvent("onpropertychange", au), Or = $r = null);
  }
  function au(e) {
    if (e.propertyName === "value" && Il(Or)) {
      var t = [];
      tu(t, Or, e, Ga(e)), Ns(lm, t);
    }
  }
  function om(e, t, n) {
    e === "focusin" ? (lu(), $r = t, Or = n, $r.attachEvent("onpropertychange", au)) : e === "focusout" && lu();
  }
  function im(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Il(Or);
  }
  function sm(e, t) {
    if (e === "click") return Il(t);
  }
  function um(e, t) {
    if (e === "input" || e === "change") return Il(t);
  }
  function cm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var kt = typeof Object.is == "function" ? Object.is : cm;
  function Fr(e, t) {
    if (kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!v.call(t, a) || !kt(e[a], t[a])) return !1;
    }
    return !0;
  }
  function ou(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function iu(e, t) {
    var n = ou(e);
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
      n = ou(n);
    }
  }
  function su(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? su(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function uu() {
    for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = hl(e.document);
    }
    return t;
  }
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function dm(e) {
    var t = uu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && su(n.ownerDocument.documentElement, n)) {
      if (r !== null && _o(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, i = Math.min(r.start, a);
          r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = iu(n, i);
          var d = iu(
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
  var fm = h && "documentMode" in document && 11 >= document.documentMode, bn = null, Eo = null, Ar = null, wo = !1;
  function cu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wo || bn == null || bn !== hl(r) || (r = bn, "selectionStart" in r && _o(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ar && Fr(Ar, r) || (Ar = r, r = Ol(Eo, "onSelect"), 0 < r.length && (t = new co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bn)));
  }
  function Dl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Qn = { animationend: Dl("Animation", "AnimationEnd"), animationiteration: Dl("Animation", "AnimationIteration"), animationstart: Dl("Animation", "AnimationStart"), transitionend: Dl("Transition", "TransitionEnd") }, ko = {}, du = {};
  h && (du = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);
  function zl(e) {
    if (ko[e]) return ko[e];
    if (!Qn[e]) return e;
    var t = Qn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in du) return ko[e] = t[n];
    return e;
  }
  var fu = zl("animationend"), mu = zl("animationiteration"), pu = zl("animationstart"), hu = zl("transitionend"), vu = /* @__PURE__ */ new Map(), yu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function nn(e, t) {
    vu.set(e, t), m(t, [e]);
  }
  for (var So = 0; So < yu.length; So++) {
    var Co = yu[So], mm = Co.toLowerCase(), pm = Co[0].toUpperCase() + Co.slice(1);
    nn(mm, "on" + pm);
  }
  nn(fu, "onAnimationEnd"), nn(mu, "onAnimationIteration"), nn(pu, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(hu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
  function gu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, mf(r, t, void 0, e), e.currentTarget = null;
  }
  function _u(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var g = r[d], w = g.instance, I = g.currentTarget;
          if (g = g.listener, w !== i && a.isPropagationStopped()) break e;
          gu(a, g, I), i = w;
        }
        else for (d = 0; d < r.length; d++) {
          if (g = r[d], w = g.instance, I = g.currentTarget, g = g.listener, w !== i && a.isPropagationStopped()) break e;
          gu(a, g, I), i = w;
        }
      }
    }
    if (gl) throw e = eo, gl = !1, eo = null, e;
  }
  function Se(e, t) {
    var n = t[Io];
    n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Eu(t, e, 2, !1), n.add(r));
  }
  function No(e, t, n) {
    var r = 0;
    t && (r |= 4), Eu(n, e, r, t);
  }
  var $l = "_reactListening" + Math.random().toString(36).slice(2);
  function jr(e) {
    if (!e[$l]) {
      e[$l] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (hm.has(n) || No(n, !1, e), No(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$l] || (t[$l] = !0, No("selectionchange", !1, t));
    }
  }
  function Eu(e, t, n, r) {
    switch (Vs(t)) {
      case 1:
        var a = Pf;
        break;
      case 4:
        a = Mf;
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
        var g = r.stateNode.containerInfo;
        if (g === a || g.nodeType === 8 && g.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var w = d.tag;
          if ((w === 3 || w === 4) && (w = d.stateNode.containerInfo, w === a || w.nodeType === 8 && w.parentNode === a)) return;
          d = d.return;
        }
        for (; g !== null; ) {
          if (d = kn(g), d === null) return;
          if (w = d.tag, w === 5 || w === 6) {
            r = i = d;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ns(function() {
      var I = i, U = Ga(n), j = [];
      e: {
        var F = vu.get(e);
        if (F !== void 0) {
          var b = co, q = e;
          switch (e) {
            case "keypress":
              if (Pl(n) === 0) break e;
            case "keydown":
            case "keyup":
              b = bf;
              break;
            case "focusin":
              q = "focus", b = po;
              break;
            case "focusout":
              q = "blur", b = po;
              break;
            case "beforeblur":
            case "afterblur":
              b = po;
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
              b = Qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Df;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Kf;
              break;
            case fu:
            case mu:
            case pu:
              b = Of;
              break;
            case hu:
              b = Gf;
              break;
            case "scroll":
              b = Lf;
              break;
            case "wheel":
              b = Jf;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Af;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Ks;
          }
          var G = (t & 4) !== 0, $e = !G && e === "scroll", T = G ? F !== null ? F + "Capture" : null : F;
          G = [];
          for (var k = I, P; k !== null; ) {
            P = k;
            var B = P.stateNode;
            if (P.tag === 5 && B !== null && (P = B, T !== null && (B = kr(k, T), B != null && G.push(Br(k, B, P)))), $e) break;
            k = k.return;
          }
          0 < G.length && (F = new b(F, q, null, n, U), j.push({ event: F, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", F && n !== qa && (q = n.relatedTarget || n.fromElement) && (kn(q) || q[Ut])) break e;
          if ((b || F) && (F = U.window === U ? U : (F = U.ownerDocument) ? F.defaultView || F.parentWindow : window, b ? (q = n.relatedTarget || n.toElement, b = I, q = q ? kn(q) : null, q !== null && ($e = wn(q), q !== $e || q.tag !== 5 && q.tag !== 6) && (q = null)) : (b = null, q = I), b !== q)) {
            if (G = Qs, B = "onMouseLeave", T = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (G = Ks, B = "onPointerLeave", T = "onPointerEnter", k = "pointer"), $e = b == null ? F : qn(b), P = q == null ? F : qn(q), F = new G(B, k + "leave", b, n, U), F.target = $e, F.relatedTarget = P, B = null, kn(U) === I && (G = new G(T, k + "enter", q, n, U), G.target = P, G.relatedTarget = $e, B = G), $e = B, b && q) t: {
              for (G = b, T = q, k = 0, P = G; P; P = Yn(P)) k++;
              for (P = 0, B = T; B; B = Yn(B)) P++;
              for (; 0 < k - P; ) G = Yn(G), k--;
              for (; 0 < P - k; ) T = Yn(T), P--;
              for (; k--; ) {
                if (G === T || T !== null && G === T.alternate) break t;
                G = Yn(G), T = Yn(T);
              }
              G = null;
            }
            else G = null;
            b !== null && wu(j, F, b, G, !1), q !== null && $e !== null && wu(j, $e, q, G, !0);
          }
        }
        e: {
          if (F = I ? qn(I) : window, b = F.nodeName && F.nodeName.toLowerCase(), b === "select" || b === "input" && F.type === "file") var J = am;
          else if (eu(F)) if (nu) J = um;
          else {
            J = im;
            var Z = om;
          }
          else (b = F.nodeName) && b.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (J = sm);
          if (J && (J = J(e, I))) {
            tu(j, J, n, U);
            break e;
          }
          Z && Z(e, F, I), e === "focusout" && (Z = F._wrapperState) && Z.controlled && F.type === "number" && Ha(F, "number", F.value);
        }
        switch (Z = I ? qn(I) : window, e) {
          case "focusin":
            (eu(Z) || Z.contentEditable === "true") && (bn = Z, Eo = I, Ar = null);
            break;
          case "focusout":
            Ar = Eo = bn = null;
            break;
          case "mousedown":
            wo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wo = !1, cu(j, n, U);
            break;
          case "selectionchange":
            if (fm) break;
          case "keydown":
          case "keyup":
            cu(j, n, U);
        }
        var ee;
        if (vo) e: {
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
        else Hn ? Js(e, n) && (ae = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ae = "onCompositionStart");
        ae && (qs && n.locale !== "ko" && (Hn || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && Hn && (ee = Hs()) : (tn = U, uo = "value" in tn ? tn.value : tn.textContent, Hn = !0)), Z = Ol(I, ae), 0 < Z.length && (ae = new Ys(ae, e, null, n, U), j.push({ event: ae, listeners: Z }), ee ? ae.data = ee : (ee = Zs(n), ee !== null && (ae.data = ee)))), (ee = em ? tm(e, n) : nm(e, n)) && (I = Ol(I, "onBeforeInput"), 0 < I.length && (U = new Ys("onBeforeInput", "beforeinput", null, n, U), j.push({ event: U, listeners: I }), U.data = ee));
      }
      _u(j, t);
    });
  }
  function Br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ol(e, t) {
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
  function wu(e, t, n, r, a) {
    for (var i = t._reactName, d = []; n !== null && n !== r; ) {
      var g = n, w = g.alternate, I = g.stateNode;
      if (w !== null && w === r) break;
      g.tag === 5 && I !== null && (g = I, a ? (w = kr(n, i), w != null && d.unshift(Br(n, w, g))) : a || (w = kr(n, i), w != null && d.push(Br(n, w, g)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var vm = /\r\n?/g, ym = /\u0000|\uFFFD/g;
  function ku(e) {
    return (typeof e == "string" ? e : "" + e).replace(vm, `
`).replace(ym, "");
  }
  function Fl(e, t, n) {
    if (t = ku(t), ku(e) !== t && n) throw Error(s(425));
  }
  function Al() {
  }
  var To = null, Ro = null;
  function Po(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0, gm = typeof clearTimeout == "function" ? clearTimeout : void 0, Su = typeof Promise == "function" ? Promise : void 0, _m = typeof queueMicrotask == "function" ? queueMicrotask : typeof Su < "u" ? function(e) {
    return Su.resolve(null).then(e).catch(Em);
  } : Mo;
  function Em(e) {
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
  function Cu(e) {
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
  var Kn = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Kn, Wr = "__reactProps$" + Kn, Ut = "__reactContainer$" + Kn, Io = "__reactEvents$" + Kn, wm = "__reactListeners$" + Kn, km = "__reactHandles$" + Kn;
  function kn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ut] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Cu(e); e !== null; ) {
          if (n = e[Lt]) return n;
          e = Cu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Vr(e) {
    return e = e[Lt] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ul(e) {
    return e[Wr] || null;
  }
  var Do = [], Gn = -1;
  function ln(e) {
    return { current: e };
  }
  function Ce(e) {
    0 > Gn || (e.current = Do[Gn], Do[Gn] = null, Gn--);
  }
  function we(e, t) {
    Gn++, Do[Gn] = e.current, e.current = t;
  }
  var an = {}, Qe = ln(an), Je = ln(!1), Sn = an;
  function Xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, i;
    for (i in n) a[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function Ze(e) {
    return e = e.childContextTypes, e != null;
  }
  function jl() {
    Ce(Je), Ce(Qe);
  }
  function Nu(e, t, n) {
    if (Qe.current !== an) throw Error(s(168));
    we(Qe, t), we(Je, n);
  }
  function xu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(s(108, Ee(e) || "Unknown", a));
    return K({}, n, r);
  }
  function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, Sn = Qe.current, we(Qe, e), we(Je, Je.current), !0;
  }
  function Tu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = xu(e, t, Sn), r.__reactInternalMemoizedMergedChildContext = e, Ce(Je), Ce(Qe), we(Qe, e)) : Ce(Je), we(Je, n);
  }
  var jt = null, Wl = !1, zo = !1;
  function Ru(e) {
    jt === null ? jt = [e] : jt.push(e);
  }
  function Sm(e) {
    Wl = !0, Ru(e);
  }
  function on() {
    if (!zo && jt !== null) {
      zo = !0;
      var e = 0, t = ye;
      try {
        var n = jt;
        for (ye = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        jt = null, Wl = !1;
      } catch (a) {
        throw jt !== null && (jt = jt.slice(e + 1)), Ms(to, on), a;
      } finally {
        ye = t, zo = !1;
      }
    }
    return null;
  }
  var Jn = [], Zn = 0, Vl = null, Hl = 0, ft = [], mt = 0, Cn = null, Bt = 1, Wt = "";
  function Nn(e, t) {
    Jn[Zn++] = Hl, Jn[Zn++] = Vl, Vl = e, Hl = t;
  }
  function Pu(e, t, n) {
    ft[mt++] = Bt, ft[mt++] = Wt, ft[mt++] = Cn, Cn = e;
    var r = Bt;
    e = Wt;
    var a = 32 - wt(r) - 1;
    r &= ~(1 << a), n += 1;
    var i = 32 - wt(t) + a;
    if (30 < i) {
      var d = a - a % 5;
      i = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Bt = 1 << 32 - wt(t) + a | n << a | r, Wt = i + e;
    } else Bt = 1 << i | n << a | r, Wt = e;
  }
  function $o(e) {
    e.return !== null && (Nn(e, 1), Pu(e, 1, 0));
  }
  function Oo(e) {
    for (; e === Vl; ) Vl = Jn[--Zn], Jn[Zn] = null, Hl = Jn[--Zn], Jn[Zn] = null;
    for (; e === Cn; ) Cn = ft[--mt], ft[mt] = null, Wt = ft[--mt], ft[mt] = null, Bt = ft[--mt], ft[mt] = null;
  }
  var it = null, st = null, xe = !1, St = null;
  function Mu(e, t) {
    var n = yt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Lu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, st = rn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, st = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Cn !== null ? { id: Bt, overflow: Wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = yt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, st = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ao(e) {
    if (xe) {
      var t = st;
      if (t) {
        var n = t;
        if (!Lu(e, t)) {
          if (Fo(e)) throw Error(s(418));
          t = rn(n.nextSibling);
          var r = it;
          t && Lu(e, t) ? Mu(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, it = e);
        }
      } else {
        if (Fo(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, xe = !1, it = e;
      }
    }
  }
  function Iu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    it = e;
  }
  function bl(e) {
    if (e !== it) return !1;
    if (!xe) return Iu(e), xe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps)), t && (t = st)) {
      if (Fo(e)) throw Du(), Error(s(418));
      for (; t; ) Mu(e, t), t = rn(t.nextSibling);
    }
    if (Iu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                st = rn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        st = null;
      }
    } else st = it ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Du() {
    for (var e = st; e; ) e = rn(e.nextSibling);
  }
  function er() {
    st = it = null, xe = !1;
  }
  function Uo(e) {
    St === null ? St = [e] : St.push(e);
  }
  var Cm = H.ReactCurrentBatchConfig;
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
  function Ql(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function $u(e) {
    function t(T, k) {
      if (e) {
        var P = T.deletions;
        P === null ? (T.deletions = [k], T.flags |= 16) : P.push(k);
      }
    }
    function n(T, k) {
      if (!e) return null;
      for (; k !== null; ) t(T, k), k = k.sibling;
      return null;
    }
    function r(T, k) {
      for (T = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? T.set(k.key, k) : T.set(k.index, k), k = k.sibling;
      return T;
    }
    function a(T, k) {
      return T = hn(T, k), T.index = 0, T.sibling = null, T;
    }
    function i(T, k, P) {
      return T.index = P, e ? (P = T.alternate, P !== null ? (P = P.index, P < k ? (T.flags |= 2, k) : P) : (T.flags |= 2, k)) : (T.flags |= 1048576, k);
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function g(T, k, P, B) {
      return k === null || k.tag !== 6 ? (k = Mi(P, T.mode, B), k.return = T, k) : (k = a(k, P), k.return = T, k);
    }
    function w(T, k, P, B) {
      var J = P.type;
      return J === te ? U(T, k, P.props.children, B, P.key) : k !== null && (k.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Le && zu(J) === k.type) ? (B = a(k, P.props), B.ref = Hr(T, k, P), B.return = T, B) : (B = va(P.type, P.key, P.props, null, T.mode, B), B.ref = Hr(T, k, P), B.return = T, B);
    }
    function I(T, k, P, B) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== P.containerInfo || k.stateNode.implementation !== P.implementation ? (k = Li(P, T.mode, B), k.return = T, k) : (k = a(k, P.children || []), k.return = T, k);
    }
    function U(T, k, P, B, J) {
      return k === null || k.tag !== 7 ? (k = Dn(P, T.mode, B, J), k.return = T, k) : (k = a(k, P), k.return = T, k);
    }
    function j(T, k, P) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Mi("" + k, T.mode, P), k.return = T, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Y:
            return P = va(k.type, k.key, k.props, null, T.mode, P), P.ref = Hr(T, null, k), P.return = T, P;
          case W:
            return k = Li(k, T.mode, P), k.return = T, k;
          case Le:
            var B = k._init;
            return j(T, B(k._payload), P);
        }
        if (_r(k) || re(k)) return k = Dn(k, T.mode, P, null), k.return = T, k;
        Ql(T, k);
      }
      return null;
    }
    function F(T, k, P, B) {
      var J = k !== null ? k.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number") return J !== null ? null : g(T, k, "" + P, B);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Y:
            return P.key === J ? w(T, k, P, B) : null;
          case W:
            return P.key === J ? I(T, k, P, B) : null;
          case Le:
            return J = P._init, F(
              T,
              k,
              J(P._payload),
              B
            );
        }
        if (_r(P) || re(P)) return J !== null ? null : U(T, k, P, B, null);
        Ql(T, P);
      }
      return null;
    }
    function b(T, k, P, B, J) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return T = T.get(P) || null, g(k, T, "" + B, J);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Y:
            return T = T.get(B.key === null ? P : B.key) || null, w(k, T, B, J);
          case W:
            return T = T.get(B.key === null ? P : B.key) || null, I(k, T, B, J);
          case Le:
            var Z = B._init;
            return b(T, k, P, Z(B._payload), J);
        }
        if (_r(B) || re(B)) return T = T.get(P) || null, U(k, T, B, J, null);
        Ql(k, B);
      }
      return null;
    }
    function q(T, k, P, B) {
      for (var J = null, Z = null, ee = k, ae = k = 0, We = null; ee !== null && ae < P.length; ae++) {
        ee.index > ae ? (We = ee, ee = null) : We = ee.sibling;
        var pe = F(T, ee, P[ae], B);
        if (pe === null) {
          ee === null && (ee = We);
          break;
        }
        e && ee && pe.alternate === null && t(T, ee), k = i(pe, k, ae), Z === null ? J = pe : Z.sibling = pe, Z = pe, ee = We;
      }
      if (ae === P.length) return n(T, ee), xe && Nn(T, ae), J;
      if (ee === null) {
        for (; ae < P.length; ae++) ee = j(T, P[ae], B), ee !== null && (k = i(ee, k, ae), Z === null ? J = ee : Z.sibling = ee, Z = ee);
        return xe && Nn(T, ae), J;
      }
      for (ee = r(T, ee); ae < P.length; ae++) We = b(ee, T, ae, P[ae], B), We !== null && (e && We.alternate !== null && ee.delete(We.key === null ? ae : We.key), k = i(We, k, ae), Z === null ? J = We : Z.sibling = We, Z = We);
      return e && ee.forEach(function(vn) {
        return t(T, vn);
      }), xe && Nn(T, ae), J;
    }
    function G(T, k, P, B) {
      var J = re(P);
      if (typeof J != "function") throw Error(s(150));
      if (P = J.call(P), P == null) throw Error(s(151));
      for (var Z = J = null, ee = k, ae = k = 0, We = null, pe = P.next(); ee !== null && !pe.done; ae++, pe = P.next()) {
        ee.index > ae ? (We = ee, ee = null) : We = ee.sibling;
        var vn = F(T, ee, pe.value, B);
        if (vn === null) {
          ee === null && (ee = We);
          break;
        }
        e && ee && vn.alternate === null && t(T, ee), k = i(vn, k, ae), Z === null ? J = vn : Z.sibling = vn, Z = vn, ee = We;
      }
      if (pe.done) return n(
        T,
        ee
      ), xe && Nn(T, ae), J;
      if (ee === null) {
        for (; !pe.done; ae++, pe = P.next()) pe = j(T, pe.value, B), pe !== null && (k = i(pe, k, ae), Z === null ? J = pe : Z.sibling = pe, Z = pe);
        return xe && Nn(T, ae), J;
      }
      for (ee = r(T, ee); !pe.done; ae++, pe = P.next()) pe = b(ee, T, ae, pe.value, B), pe !== null && (e && pe.alternate !== null && ee.delete(pe.key === null ? ae : pe.key), k = i(pe, k, ae), Z === null ? J = pe : Z.sibling = pe, Z = pe);
      return e && ee.forEach(function(rp) {
        return t(T, rp);
      }), xe && Nn(T, ae), J;
    }
    function $e(T, k, P, B) {
      if (typeof P == "object" && P !== null && P.type === te && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case Y:
            e: {
              for (var J = P.key, Z = k; Z !== null; ) {
                if (Z.key === J) {
                  if (J = P.type, J === te) {
                    if (Z.tag === 7) {
                      n(T, Z.sibling), k = a(Z, P.props.children), k.return = T, T = k;
                      break e;
                    }
                  } else if (Z.elementType === J || typeof J == "object" && J !== null && J.$$typeof === Le && zu(J) === Z.type) {
                    n(T, Z.sibling), k = a(Z, P.props), k.ref = Hr(T, Z, P), k.return = T, T = k;
                    break e;
                  }
                  n(T, Z);
                  break;
                } else t(T, Z);
                Z = Z.sibling;
              }
              P.type === te ? (k = Dn(P.props.children, T.mode, B, P.key), k.return = T, T = k) : (B = va(P.type, P.key, P.props, null, T.mode, B), B.ref = Hr(T, k, P), B.return = T, T = B);
            }
            return d(T);
          case W:
            e: {
              for (Z = P.key; k !== null; ) {
                if (k.key === Z) if (k.tag === 4 && k.stateNode.containerInfo === P.containerInfo && k.stateNode.implementation === P.implementation) {
                  n(T, k.sibling), k = a(k, P.children || []), k.return = T, T = k;
                  break e;
                } else {
                  n(T, k);
                  break;
                }
                else t(T, k);
                k = k.sibling;
              }
              k = Li(P, T.mode, B), k.return = T, T = k;
            }
            return d(T);
          case Le:
            return Z = P._init, $e(T, k, Z(P._payload), B);
        }
        if (_r(P)) return q(T, k, P, B);
        if (re(P)) return G(T, k, P, B);
        Ql(T, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, k !== null && k.tag === 6 ? (n(T, k.sibling), k = a(k, P), k.return = T, T = k) : (n(T, k), k = Mi(P, T.mode, B), k.return = T, T = k), d(T)) : n(T, k);
    }
    return $e;
  }
  var tr = $u(!0), Ou = $u(!1), Yl = ln(null), Kl = null, nr = null, jo = null;
  function Bo() {
    jo = nr = Kl = null;
  }
  function Wo(e) {
    var t = Yl.current;
    Ce(Yl), e._currentValue = t;
  }
  function Vo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function rr(e, t) {
    Kl = e, jo = nr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (et = !0), e.firstContext = null);
  }
  function pt(e) {
    var t = e._currentValue;
    if (jo !== e) if (e = { context: e, memoizedValue: t, next: null }, nr === null) {
      if (Kl === null) throw Error(s(308));
      nr = e, Kl.dependencies = { lanes: 0, firstContext: e };
    } else nr = nr.next = e;
    return t;
  }
  var xn = null;
  function Ho(e) {
    xn === null ? xn = [e] : xn.push(e);
  }
  function Fu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Ho(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Vt(e, r);
  }
  function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var sn = !1;
  function bo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Au(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ht(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function un(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (de & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Vt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Ho(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Vt(e, n);
  }
  function ql(e, t, n) {
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
  function Gl(e, t, n, r) {
    var a = e.updateQueue;
    sn = !1;
    var i = a.firstBaseUpdate, d = a.lastBaseUpdate, g = a.shared.pending;
    if (g !== null) {
      a.shared.pending = null;
      var w = g, I = w.next;
      w.next = null, d === null ? i = I : d.next = I, d = w;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, g = U.lastBaseUpdate, g !== d && (g === null ? U.firstBaseUpdate = I : g.next = I, U.lastBaseUpdate = w));
    }
    if (i !== null) {
      var j = a.baseState;
      d = 0, U = I = w = null, g = i;
      do {
        var F = g.lane, b = g.eventTime;
        if ((r & F) === F) {
          U !== null && (U = U.next = {
            eventTime: b,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var q = e, G = g;
            switch (F = t, b = n, G.tag) {
              case 1:
                if (q = G.payload, typeof q == "function") {
                  j = q.call(b, j, F);
                  break e;
                }
                j = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = G.payload, F = typeof q == "function" ? q.call(b, j, F) : q, F == null) break e;
                j = K({}, j, F);
                break e;
              case 2:
                sn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, F = a.effects, F === null ? a.effects = [g] : F.push(g));
        } else b = { eventTime: b, lane: F, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, U === null ? (I = U = b, w = j) : U = U.next = b, d |= F;
        if (g = g.next, g === null) {
          if (g = a.shared.pending, g === null) break;
          F = g, g = F.next, F.next = null, a.lastBaseUpdate = F, a.shared.pending = null;
        }
      } while (!0);
      if (U === null && (w = j), a.baseState = w, a.firstBaseUpdate = I, a.lastBaseUpdate = U, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else i === null && (a.shared.lanes = 0);
      Pn |= d, e.lanes = d, e.memoizedState = j;
    }
  }
  function ju(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(s(191, a));
        a.call(r);
      }
    }
  }
  var br = {}, It = ln(br), Qr = ln(br), Yr = ln(br);
  function Tn(e) {
    if (e === br) throw Error(s(174));
    return e;
  }
  function Qo(e, t) {
    switch (we(Yr, t), we(Qr, e), we(It, br), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qa(t, e);
    }
    Ce(It), we(It, t);
  }
  function lr() {
    Ce(It), Ce(Qr), Ce(Yr);
  }
  function Bu(e) {
    Tn(Yr.current);
    var t = Tn(It.current), n = Qa(t, e.type);
    t !== n && (we(Qr, e), we(It, n));
  }
  function Yo(e) {
    Qr.current === e && (Ce(It), Ce(Qr));
  }
  var Pe = ln(0);
  function Xl(e) {
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
  function qo() {
    for (var e = 0; e < Ko.length; e++) Ko[e]._workInProgressVersionPrimary = null;
    Ko.length = 0;
  }
  var Jl = H.ReactCurrentDispatcher, Go = H.ReactCurrentBatchConfig, Rn = 0, Me = null, Ae = null, je = null, Zl = !1, Kr = !1, qr = 0, Nm = 0;
  function Ye() {
    throw Error(s(321));
  }
  function Xo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!kt(e[n], t[n])) return !1;
    return !0;
  }
  function Jo(e, t, n, r, a, i) {
    if (Rn = i, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? Pm : Mm, e = n(r, a), Kr) {
      i = 0;
      do {
        if (Kr = !1, qr = 0, 25 <= i) throw Error(s(301));
        i += 1, je = Ae = null, t.updateQueue = null, Jl.current = Lm, e = n(r, a);
      } while (Kr);
    }
    if (Jl.current = na, t = Ae !== null && Ae.next !== null, Rn = 0, je = Ae = Me = null, Zl = !1, t) throw Error(s(300));
    return e;
  }
  function Zo() {
    var e = qr !== 0;
    return qr = 0, e;
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? Me.memoizedState = je = e : je = je.next = e, je;
  }
  function ht() {
    if (Ae === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ae.next;
    var t = je === null ? Me.memoizedState : je.next;
    if (t !== null) je = t, Ae = e;
    else {
      if (e === null) throw Error(s(310));
      Ae = e, e = { memoizedState: Ae.memoizedState, baseState: Ae.baseState, baseQueue: Ae.baseQueue, queue: Ae.queue, next: null }, je === null ? Me.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ei(e) {
    var t = ht(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ae, a = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = i.next, i.next = d;
      }
      r.baseQueue = a = i, n.pending = null;
    }
    if (a !== null) {
      i = a.next, r = r.baseState;
      var g = d = null, w = null, I = i;
      do {
        var U = I.lane;
        if ((Rn & U) === U) w !== null && (w = w.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var j = {
            lane: U,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          w === null ? (g = w = j, d = r) : w = w.next = j, Me.lanes |= U, Pn |= U;
        }
        I = I.next;
      } while (I !== null && I !== i);
      w === null ? d = r : w.next = g, kt(r, t.memoizedState) || (et = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        i = a.lane, Me.lanes |= i, Pn |= i, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ti(e) {
    var t = ht(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, i = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        i = e(i, d.action), d = d.next;
      while (d !== a);
      kt(i, t.memoizedState) || (et = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Wu() {
  }
  function Vu(e, t) {
    var n = Me, r = ht(), a = t(), i = !kt(r.memoizedState, a);
    if (i && (r.memoizedState = a, et = !0), r = r.queue, ni(Qu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, bu.bind(null, n, r, a, t), void 0, null), Be === null) throw Error(s(349));
      (Rn & 30) !== 0 || Hu(n, t, a);
    }
    return a;
  }
  function Hu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function bu(e, t, n, r) {
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
      return !kt(e, n);
    } catch {
      return !0;
    }
  }
  function Ku(e) {
    var t = Vt(e, 1);
    t !== null && Tt(t, e, 1, -1);
  }
  function qu(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rm.bind(null, Me, e), [t.memoizedState, e];
  }
  function Xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Gu() {
    return ht().memoizedState;
  }
  function ea(e, t, n, r) {
    var a = Dt();
    Me.flags |= e, a.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ta(e, t, n, r) {
    var a = ht();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ae !== null) {
      var d = Ae.memoizedState;
      if (i = d.destroy, r !== null && Xo(r, d.deps)) {
        a.memoizedState = Xr(t, n, i, r);
        return;
      }
    }
    Me.flags |= e, a.memoizedState = Xr(1 | t, n, i, r);
  }
  function Xu(e, t) {
    return ea(8390656, 8, e, t);
  }
  function ni(e, t) {
    return ta(2048, 8, e, t);
  }
  function Ju(e, t) {
    return ta(4, 2, e, t);
  }
  function Zu(e, t) {
    return ta(4, 4, e, t);
  }
  function ec(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function tc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ta(4, 4, ec.bind(null, t, e), n);
  }
  function ri() {
  }
  function nc(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function rc(e, t) {
    var n = ht();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function lc(e, t, n) {
    return (Rn & 21) === 0 ? (e.baseState && (e.baseState = !1, et = !0), e.memoizedState = n) : (kt(n, t) || (n = zs(), Me.lanes |= n, Pn |= n, e.baseState = !0), t);
  }
  function xm(e, t) {
    var n = ye;
    ye = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Go.transition;
    Go.transition = {};
    try {
      e(!1), t();
    } finally {
      ye = n, Go.transition = r;
    }
  }
  function ac() {
    return ht().memoizedState;
  }
  function Tm(e, t, n) {
    var r = mn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, oc(e)) ic(t, n);
    else if (n = Fu(e, t, n, r), n !== null) {
      var a = Xe();
      Tt(n, e, r, a), sc(n, t, r);
    }
  }
  function Rm(e, t, n) {
    var r = mn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (oc(e)) ic(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var d = t.lastRenderedState, g = i(d, n);
        if (a.hasEagerState = !0, a.eagerState = g, kt(g, d)) {
          var w = t.interleaved;
          w === null ? (a.next = a, Ho(t)) : (a.next = w.next, w.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = Fu(e, t, a, r), n !== null && (a = Xe(), Tt(n, e, r, a), sc(n, t, r));
    }
  }
  function oc(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function ic(e, t) {
    Kr = Zl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function sc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n);
    }
  }
  var na = { readContext: pt, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Pm = { readContext: pt, useCallback: function(e, t) {
    return Dt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: pt, useEffect: Xu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ea(
      4194308,
      4,
      ec.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ea(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ea(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Dt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Dt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Tm.bind(null, Me, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Dt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: qu, useDebugValue: ri, useDeferredValue: function(e) {
    return Dt().memoizedState = e;
  }, useTransition: function() {
    var e = qu(!1), t = e[0];
    return e = xm.bind(null, e[1]), Dt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Me, a = Dt();
    if (xe) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(s(349));
      (Rn & 30) !== 0 || Hu(r, t, n);
    }
    a.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return a.queue = i, Xu(Qu.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Xr(9, bu.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = Be.identifierPrefix;
    if (xe) {
      var n = Wt, r = Bt;
      n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Nm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Mm = {
    readContext: pt,
    useCallback: nc,
    useContext: pt,
    useEffect: ni,
    useImperativeHandle: tc,
    useInsertionEffect: Ju,
    useLayoutEffect: Zu,
    useMemo: rc,
    useReducer: ei,
    useRef: Gu,
    useState: function() {
      return ei(Gr);
    },
    useDebugValue: ri,
    useDeferredValue: function(e) {
      var t = ht();
      return lc(t, Ae.memoizedState, e);
    },
    useTransition: function() {
      var e = ei(Gr)[0], t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Wu,
    useSyncExternalStore: Vu,
    useId: ac,
    unstable_isNewReconciler: !1
  }, Lm = { readContext: pt, useCallback: nc, useContext: pt, useEffect: ni, useImperativeHandle: tc, useInsertionEffect: Ju, useLayoutEffect: Zu, useMemo: rc, useReducer: ti, useRef: Gu, useState: function() {
    return ti(Gr);
  }, useDebugValue: ri, useDeferredValue: function(e) {
    var t = ht();
    return Ae === null ? t.memoizedState = e : lc(t, Ae.memoizedState, e);
  }, useTransition: function() {
    var e = ti(Gr)[0], t = ht().memoizedState;
    return [e, t];
  }, useMutableSource: Wu, useSyncExternalStore: Vu, useId: ac, unstable_isNewReconciler: !1 };
  function Ct(e, t) {
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
  var ra = { isMounted: function(e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), a = mn(e), i = Ht(r, a);
    i.payload = t, n != null && (i.callback = n), t = un(e, i, a), t !== null && (Tt(t, e, a, r), ql(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), a = mn(e), i = Ht(r, a);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = un(e, i, a), t !== null && (Tt(t, e, a, r), ql(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Xe(), r = mn(e), a = Ht(n, r);
    a.tag = 2, t != null && (a.callback = t), t = un(e, a, r), t !== null && (Tt(t, e, r, n), ql(t, e, r));
  } };
  function uc(e, t, n, r, a, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(a, i) : !0;
  }
  function cc(e, t, n) {
    var r = !1, a = an, i = t.contextType;
    return typeof i == "object" && i !== null ? i = pt(i) : (a = Ze(t) ? Sn : Qe.current, r = t.contextTypes, i = (r = r != null) ? Xn(e, a) : an), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ra, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function dc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ra.enqueueReplaceState(t, t.state, null);
  }
  function ai(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, bo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? a.context = pt(i) : (i = Ze(t) ? Sn : Qe.current, a.context = Xn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (li(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && ra.enqueueReplaceState(a, a.state, null), Gl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ar(e, t) {
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
  var Im = typeof WeakMap == "function" ? WeakMap : Map;
  function fc(e, t, n) {
    n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ca || (ca = !0, ki = r), ii(e, t);
    }, n;
  }
  function mc(e, t, n) {
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
  function pc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Im();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Qm.bind(null, e, t, n), t.then(e, e));
  }
  function hc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function vc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Dm = H.ReactCurrentOwner, et = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? Ou(t, null, n, r) : tr(t, e.child, n, r);
  }
  function yc(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return rr(t, a), r = Jo(e, t, n, r, i, a), n = Zo(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (xe && n && $o(t), t.flags |= 1, Ge(e, t, r, a), t.child);
  }
  function gc(e, t, n, r, a) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Pi(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, _c(e, t, i, r, a)) : (e = va(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & a) === 0) {
      var d = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fr, n(d, r) && e.ref === t.ref) return bt(e, t, a);
    }
    return t.flags |= 1, e = hn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function _c(e, t, n, r, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Fr(i, r) && e.ref === t.ref) if (et = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (et = !0);
      else return t.lanes = e.lanes, bt(e, t, a);
    }
    return si(e, t, n, r, a);
  }
  function Ec(e, t, n) {
    var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(ir, ut), ut |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, we(ir, ut), ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, we(ir, ut), ut |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, we(ir, ut), ut |= r;
    return Ge(e, t, a, n), t.child;
  }
  function wc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function si(e, t, n, r, a) {
    var i = Ze(n) ? Sn : Qe.current;
    return i = Xn(t, i), rr(t, a), n = Jo(e, t, n, r, i, a), r = Zo(), e !== null && !et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, bt(e, t, a)) : (xe && r && $o(t), t.flags |= 1, Ge(e, t, n, a), t.child);
  }
  function kc(e, t, n, r, a) {
    if (Ze(n)) {
      var i = !0;
      Bl(t);
    } else i = !1;
    if (rr(t, a), t.stateNode === null) aa(e, t), cc(t, n, r), ai(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, g = t.memoizedProps;
      d.props = g;
      var w = d.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = pt(I) : (I = Ze(n) ? Sn : Qe.current, I = Xn(t, I));
      var U = n.getDerivedStateFromProps, j = typeof U == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      j || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== r || w !== I) && dc(t, d, r, I), sn = !1;
      var F = t.memoizedState;
      d.state = F, Gl(t, r, d, a), w = t.memoizedState, g !== r || F !== w || Je.current || sn ? (typeof U == "function" && (li(t, n, U, r), w = t.memoizedState), (g = sn || uc(t, n, g, r, F, w, I)) ? (j || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), d.props = r, d.state = w, d.context = I, r = g) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, Au(e, t), g = t.memoizedProps, I = t.type === t.elementType ? g : Ct(t.type, g), d.props = I, j = t.pendingProps, F = d.context, w = n.contextType, typeof w == "object" && w !== null ? w = pt(w) : (w = Ze(n) ? Sn : Qe.current, w = Xn(t, w));
      var b = n.getDerivedStateFromProps;
      (U = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== j || F !== w) && dc(t, d, r, w), sn = !1, F = t.memoizedState, d.state = F, Gl(t, r, d, a);
      var q = t.memoizedState;
      g !== j || F !== q || Je.current || sn ? (typeof b == "function" && (li(t, n, b, r), q = t.memoizedState), (I = sn || uc(t, n, I, r, F, q, w) || !1) ? (U || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, q, w), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, q, w)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = q), d.props = r, d.state = q, d.context = w, r = I) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && F === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && F === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ui(e, t, n, r, i, a);
  }
  function ui(e, t, n, r, a, i) {
    wc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Tu(t, n, !1), bt(e, t, i);
    r = t.stateNode, Dm.current = t;
    var g = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = tr(t, e.child, null, i), t.child = tr(t, null, g, i)) : Ge(e, t, g, i), t.memoizedState = r.state, a && Tu(t, n, !0), t.child;
  }
  function Sc(e) {
    var t = e.stateNode;
    t.pendingContext ? Nu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nu(e, t.context, !1), Qo(e, t.containerInfo);
  }
  function Cc(e, t, n, r, a) {
    return er(), Uo(a), t.flags |= 256, Ge(e, t, n, r), t.child;
  }
  var ci = { dehydrated: null, treeContext: null, retryLane: 0 };
  function di(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nc(e, t, n) {
    var r = t.pendingProps, a = Pe.current, i = !1, d = (t.flags & 128) !== 0, g;
    if ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), g ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), we(Pe, a & 1), e === null)
      return Ao(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = d) : i = ya(d, r, 0, null), e = Dn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = di(n), t.memoizedState = ci, e) : fi(t, d));
    if (a = e.memoizedState, a !== null && (g = a.dehydrated, g !== null)) return zm(e, t, d, r, g, a, n);
    if (i) {
      i = r.fallback, d = t.mode, a = e.child, g = a.sibling;
      var w = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = hn(a, w), r.subtreeFlags = a.subtreeFlags & 14680064), g !== null ? i = hn(g, i) : (i = Dn(i, d, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, d = e.child.memoizedState, d = d === null ? di(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, i.memoizedState = d, i.childLanes = e.childLanes & ~n, t.memoizedState = ci, r;
    }
    return i = e.child, e = i.sibling, r = hn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function fi(e, t) {
    return t = ya({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function la(e, t, n, r) {
    return r !== null && Uo(r), tr(t, e.child, null, n), e = fi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function zm(e, t, n, r, a, i, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = oi(Error(s(422))), la(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = ya({ mode: "visible", children: r.children }, a, 0, null), i = Dn(i, a, d, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && tr(t, e.child, null, d), t.child.memoizedState = di(d), t.memoizedState = ci, i);
    if ((t.mode & 1) === 0) return la(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var g = r.dgst;
      return r = g, i = Error(s(419)), r = oi(i, r, void 0), la(e, t, d, r);
    }
    if (g = (d & e.childLanes) !== 0, et || g) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Vt(e, a), Tt(r, e, a, -1));
      }
      return Ri(), r = oi(Error(s(421))), la(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ym.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, st = rn(a.nextSibling), it = t, xe = !0, St = null, e !== null && (ft[mt++] = Bt, ft[mt++] = Wt, ft[mt++] = Cn, Bt = e.id, Wt = e.overflow, Cn = t), t = fi(t, r.children), t.flags |= 4096, t);
  }
  function xc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vo(e.return, t, n);
  }
  function mi(e, t, n, r, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
  }
  function Tc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, i = r.tail;
    if (Ge(e, t, r.children, n), r = Pe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xc(e, n, t);
        else if (e.tag === 19) xc(e, n, t);
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
    if (we(Pe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Xl(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), mi(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Xl(e) === null) {
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
  function aa(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function bt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function $m(e, t, n) {
    switch (t.tag) {
      case 3:
        Sc(t), er();
        break;
      case 5:
        Bu(t);
        break;
      case 1:
        Ze(t.type) && Bl(t);
        break;
      case 4:
        Qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        we(Yl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (we(Pe, Pe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Nc(e, t, n) : (we(Pe, Pe.current & 1), e = bt(e, t, n), e !== null ? e.sibling : null);
        we(Pe, Pe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Tc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), we(Pe, Pe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ec(e, t, n);
    }
    return bt(e, t, n);
  }
  var Rc, pi, Pc, Mc;
  Rc = function(e, t) {
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
  }, Pc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, Tn(It.current);
      var i = null;
      switch (n) {
        case "input":
          a = Wa(e, a), r = Wa(e, r), i = [];
          break;
        case "select":
          a = K({}, a, { value: void 0 }), r = K({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          a = ba(e, a), r = ba(e, r), i = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Al);
      }
      Ya(n, r);
      var d;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var g = a[I];
        for (d in g) g.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (f.hasOwnProperty(I) ? i || (i = []) : (i = i || []).push(I, null));
      for (I in r) {
        var w = r[I];
        if (g = a != null ? a[I] : void 0, r.hasOwnProperty(I) && w !== g && (w != null || g != null)) if (I === "style") if (g) {
          for (d in g) !g.hasOwnProperty(d) || w && w.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in w) w.hasOwnProperty(d) && g[d] !== w[d] && (n || (n = {}), n[d] = w[d]);
        } else n || (i || (i = []), i.push(
          I,
          n
        )), n = w;
        else I === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, g = g ? g.__html : void 0, w != null && g !== w && (i = i || []).push(I, w)) : I === "children" ? typeof w != "string" && typeof w != "number" || (i = i || []).push(I, "" + w) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (f.hasOwnProperty(I) ? (w != null && I === "onScroll" && Se("scroll", e), i || g === w || (i = [])) : (i = i || []).push(I, w));
      }
      n && (i = i || []).push("style", n);
      var I = i;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, Mc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Jr(e, t) {
    if (!xe) switch (e.tailMode) {
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
  function Om(e, t, n) {
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
        return Ze(t.type) && jl(), Ke(t), null;
      case 3:
        return r = t.stateNode, lr(), Ce(Je), Ce(Qe), qo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, St !== null && (Ni(St), St = null))), pi(e, t), Ke(t), null;
      case 5:
        Yo(t);
        var a = Tn(Yr.current);
        if (n = t.type, e !== null && t.stateNode != null) Pc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ke(t), null;
          }
          if (e = Tn(It.current), bl(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Lt] = t, r[Wr] = i, e = (t.mode & 1) !== 0, n) {
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
                for (a = 0; a < Ur.length; a++) Se(Ur[a], r);
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
                cs(r, i), Se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, Se("invalid", r);
                break;
              case "textarea":
                ms(r, i), Se("invalid", r);
            }
            Ya(n, i), a = null;
            for (var d in i) if (i.hasOwnProperty(d)) {
              var g = i[d];
              d === "children" ? typeof g == "string" ? r.textContent !== g && (i.suppressHydrationWarning !== !0 && Fl(r.textContent, g, e), a = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (i.suppressHydrationWarning !== !0 && Fl(
                r.textContent,
                g,
                e
              ), a = ["children", "" + g]) : f.hasOwnProperty(d) && g != null && d === "onScroll" && Se("scroll", r);
            }
            switch (n) {
              case "input":
                pl(r), fs(r, i, !0);
                break;
              case "textarea":
                pl(r), hs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Al);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[Lt] = t, e[Wr] = r, Rc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (d = Ka(n, r), n) {
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
                  for (a = 0; a < Ur.length; a++) Se(Ur[a], e);
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
                  cs(e, r), a = Wa(e, r), Se("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = K({}, r, { value: void 0 }), Se("invalid", e);
                  break;
                case "textarea":
                  ms(e, r), a = ba(e, r), Se("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ya(n, a), g = a;
              for (i in g) if (g.hasOwnProperty(i)) {
                var w = g[i];
                i === "style" ? _s(e, w) : i === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && ys(e, w)) : i === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && Er(e, w) : typeof w == "number" && Er(e, "" + w) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (f.hasOwnProperty(i) ? w != null && i === "onScroll" && Se("scroll", e) : w != null && O(e, i, w, d));
              }
              switch (n) {
                case "input":
                  pl(e), fs(e, r, !1);
                  break;
                case "textarea":
                  pl(e), hs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ve(r.value));
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
                  typeof a.onClick == "function" && (e.onclick = Al);
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
        if (e && t.stateNode != null) Mc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = Tn(Yr.current), Tn(It.current), bl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (i = r.nodeValue !== n) && (e = it, e !== null)) switch (e.tag) {
              case 3:
                Fl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (Ce(Pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (xe && st !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Du(), er(), t.flags |= 98560, i = !1;
          else if (i = bl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Lt] = t;
            } else er(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), i = !1;
          } else St !== null && (Ni(St), St = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Pe.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Ri())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return lr(), pi(e, t), e === null && jr(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Wo(t.type._context), Ke(t), null;
      case 17:
        return Ze(t.type) && jl(), Ke(t), null;
      case 19:
        if (Ce(Pe), i = t.memoizedState, i === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = i.rendering, d === null) if (r) Jr(i, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Xl(e), d !== null) {
              for (t.flags |= 128, Jr(i, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, d = i.alternate, d === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = d.childLanes, i.lanes = d.lanes, i.child = d.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = d.memoizedProps, i.memoizedState = d.memoizedState, i.updateQueue = d.updateQueue, i.type = d.type, e = d.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return we(Pe, Pe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && ze() > sr && (t.flags |= 128, r = !0, Jr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Xl(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jr(i, !0), i.tail === null && i.tailMode === "hidden" && !d.alternate && !xe) return Ke(t), null;
          } else 2 * ze() - i.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Jr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (d.sibling = t.child, t.child = d) : (n = i.last, n !== null ? n.sibling = d : t.child = d, i.last = d);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ze(), t.sibling = null, n = Pe.current, we(Pe, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Ti(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ut & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Fm(e, t) {
    switch (Oo(t), t.tag) {
      case 1:
        return Ze(t.type) && jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return lr(), Ce(Je), Ce(Qe), qo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Yo(t), null;
      case 13:
        if (Ce(Pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          er();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ce(Pe), null;
      case 4:
        return lr(), null;
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
  var oa = !1, qe = !1, Am = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
  function or(e, t) {
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
  var Lc = !1;
  function Um(e, t) {
    if (To = xl, e = uu(), _o(e)) {
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
          var d = 0, g = -1, w = -1, I = 0, U = 0, j = e, F = null;
          t: for (; ; ) {
            for (var b; j !== n || a !== 0 && j.nodeType !== 3 || (g = d + a), j !== i || r !== 0 && j.nodeType !== 3 || (w = d + r), j.nodeType === 3 && (d += j.nodeValue.length), (b = j.firstChild) !== null; )
              F = j, j = b;
            for (; ; ) {
              if (j === e) break t;
              if (F === n && ++I === a && (g = d), F === i && ++U === r && (w = d), (b = j.nextSibling) !== null) break;
              j = F, F = j.parentNode;
            }
            j = b;
          }
          n = g === -1 || w === -1 ? null : { start: g, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ro = { focusedElem: e, selectionRange: n }, xl = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
    else for (; Q !== null; ) {
      t = Q;
      try {
        var q = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (q !== null) {
              var G = q.memoizedProps, $e = q.memoizedState, T = t.stateNode, k = T.getSnapshotBeforeUpdate(t.elementType === t.type ? G : Ct(t.type, G), $e);
              T.__reactInternalSnapshotBeforeUpdate = k;
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
        De(t, t.return, B);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Q = e;
        break;
      }
      Q = t.return;
    }
    return q = Lc, Lc = !1, q;
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
  function ia(e, t) {
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
    t !== null && (e.alternate = null, Ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[Wr], delete t[Io], delete t[wm], delete t[km])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Al));
    else if (r !== 4 && (e = e.child, e !== null)) for (yi(e, t, n), e = e.sibling; e !== null; ) yi(e, t, n), e = e.sibling;
  }
  function gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  var He = null, Nt = !1;
  function cn(e, t, n) {
    for (n = n.child; n !== null; ) $c(e, t, n), n = n.sibling;
  }
  function $c(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
      Mt.onCommitFiberUnmount(El, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        qe || or(n, t);
      case 6:
        var r = He, a = Nt;
        He = null, cn(e, t, n), He = r, Nt = a, He !== null && (Nt ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
        break;
      case 18:
        He !== null && (Nt ? (e = He, n = n.stateNode, e.nodeType === 8 ? Lo(e.parentNode, n) : e.nodeType === 1 && Lo(e, n), Lr(e)) : Lo(He, n.stateNode));
        break;
      case 4:
        r = He, a = Nt, He = n.stateNode.containerInfo, Nt = !0, cn(e, t, n), He = r, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var i = a, d = i.destroy;
            i = i.tag, d !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && hi(n, t, d), a = a.next;
          } while (a !== r);
        }
        cn(e, t, n);
        break;
      case 1:
        if (!qe && (or(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          De(n, t, g);
        }
        cn(e, t, n);
        break;
      case 21:
        cn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, cn(e, t, n), qe = r) : cn(e, t, n);
        break;
      default:
        cn(e, t, n);
    }
  }
  function Oc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Am()), t.forEach(function(r) {
        var a = Km.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function xt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e, d = t, g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              He = g.stateNode, Nt = !1;
              break e;
            case 3:
              He = g.stateNode.containerInfo, Nt = !0;
              break e;
            case 4:
              He = g.stateNode.containerInfo, Nt = !0;
              break e;
          }
          g = g.return;
        }
        if (He === null) throw Error(s(160));
        $c(i, d, a), He = null, Nt = !1;
        var w = a.alternate;
        w !== null && (w.return = null), a.return = null;
      } catch (I) {
        De(a, t, I);
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
        if (xt(t, e), zt(e), r & 4) {
          try {
            Zr(3, e, e.return), ia(3, e);
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
        xt(t, e), zt(e), r & 512 && n !== null && or(n, n.return);
        break;
      case 5:
        if (xt(t, e), zt(e), r & 512 && n !== null && or(n, n.return), e.flags & 32) {
          var a = e.stateNode;
          try {
            Er(a, "");
          } catch (G) {
            De(e, e.return, G);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var i = e.memoizedProps, d = n !== null ? n.memoizedProps : i, g = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            g === "input" && i.type === "radio" && i.name != null && ds(a, i), Ka(g, d);
            var I = Ka(g, i);
            for (d = 0; d < w.length; d += 2) {
              var U = w[d], j = w[d + 1];
              U === "style" ? _s(a, j) : U === "dangerouslySetInnerHTML" ? ys(a, j) : U === "children" ? Er(a, j) : O(a, U, j, I);
            }
            switch (g) {
              case "input":
                Va(a, i);
                break;
              case "textarea":
                ps(a, i);
                break;
              case "select":
                var F = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null ? Un(a, !!i.multiple, b, !1) : F !== !!i.multiple && (i.defaultValue != null ? Un(
                  a,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Un(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[Wr] = i;
          } catch (G) {
            De(e, e.return, G);
          }
        }
        break;
      case 6:
        if (xt(t, e), zt(e), r & 4) {
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
        if (xt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Lr(t.containerInfo);
        } catch (G) {
          De(e, e.return, G);
        }
        break;
      case 4:
        xt(t, e), zt(e);
        break;
      case 13:
        xt(t, e), zt(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (wi = ze())), r & 4 && Oc(e);
        break;
      case 22:
        if (U = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (I = qe) || U, xt(t, e), qe = I) : xt(t, e), zt(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !U && (e.mode & 1) !== 0) for (Q = e, U = e.child; U !== null; ) {
            for (j = Q = U; Q !== null; ) {
              switch (F = Q, b = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, F, F.return);
                  break;
                case 1:
                  or(F, F.return);
                  var q = F.stateNode;
                  if (typeof q.componentWillUnmount == "function") {
                    r = F, n = F.return;
                    try {
                      t = r, q.props = t.memoizedProps, q.state = t.memoizedState, q.componentWillUnmount();
                    } catch (G) {
                      De(r, n, G);
                    }
                  }
                  break;
                case 5:
                  or(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    jc(j);
                    continue;
                  }
              }
              b !== null ? (b.return = F, Q = b) : jc(j);
            }
            U = U.sibling;
          }
          e: for (U = null, j = e; ; ) {
            if (j.tag === 5) {
              if (U === null) {
                U = j;
                try {
                  a = j.stateNode, I ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (g = j.stateNode, w = j.memoizedProps.style, d = w != null && w.hasOwnProperty("display") ? w.display : null, g.style.display = gs("display", d));
                } catch (G) {
                  De(e, e.return, G);
                }
              }
            } else if (j.tag === 6) {
              if (U === null) try {
                j.stateNode.nodeValue = I ? "" : j.memoizedProps;
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
              U === j && (U = null), j = j.return;
            }
            U === j && (U = null), j.sibling.return = j.return, j = j.sibling;
          }
        }
        break;
      case 19:
        xt(t, e), zt(e), r & 4 && Oc(e);
        break;
      case 21:
        break;
      default:
        xt(
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
            var d = r.stateNode.containerInfo, g = zc(e);
            yi(e, g, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        De(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jm(e, t, n) {
    Q = e, Ac(e);
  }
  function Ac(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Q !== null; ) {
      var a = Q, i = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || oa;
        if (!d) {
          var g = a.alternate, w = g !== null && g.memoizedState !== null || qe;
          g = oa;
          var I = qe;
          if (oa = d, (qe = w) && !I) for (Q = a; Q !== null; ) d = Q, w = d.child, d.tag === 22 && d.memoizedState !== null ? Bc(a) : w !== null ? (w.return = d, Q = w) : Bc(a);
          for (; i !== null; ) Q = i, Ac(i), i = i.sibling;
          Q = a, oa = g, qe = I;
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
              qe || ia(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : Ct(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && ju(t, i, r);
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
                ju(t, d, n);
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
                var I = t.alternate;
                if (I !== null) {
                  var U = I.memoizedState;
                  if (U !== null) {
                    var j = U.dehydrated;
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
          qe || t.flags & 512 && vi(t);
        } catch (F) {
          De(t, t.return, F);
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
  function jc(e) {
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
  function Bc(e) {
    for (; Q !== null; ) {
      var t = Q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ia(4, t);
            } catch (w) {
              De(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                De(t, a, w);
              }
            }
            var i = t.return;
            try {
              vi(t);
            } catch (w) {
              De(t, i, w);
            }
            break;
          case 5:
            var d = t.return;
            try {
              vi(t);
            } catch (w) {
              De(t, d, w);
            }
        }
      } catch (w) {
        De(t, t.return, w);
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
  var Bm = Math.ceil, sa = H.ReactCurrentDispatcher, _i = H.ReactCurrentOwner, vt = H.ReactCurrentBatchConfig, de = 0, Be = null, Fe = null, be = 0, ut = 0, ir = ln(0), Ue = 0, el = null, Pn = 0, ua = 0, Ei = 0, tl = null, tt = null, wi = 0, sr = 1 / 0, Qt = null, ca = !1, ki = null, dn = null, da = !1, fn = null, fa = 0, nl = 0, Si = null, ma = -1, pa = 0;
  function Xe() {
    return (de & 6) !== 0 ? ze() : ma !== -1 ? ma : ma = ze();
  }
  function mn(e) {
    return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && be !== 0 ? be & -be : Cm.transition !== null ? (pa === 0 && (pa = zs()), pa) : (e = ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e);
  }
  function Tt(e, t, n, r) {
    if (50 < nl) throw nl = 0, Si = null, Error(s(185));
    xr(e, n, r), ((de & 2) === 0 || e !== Be) && (e === Be && ((de & 2) === 0 && (ua |= n), Ue === 4 && pn(e, be)), nt(e, r), n === 1 && de === 0 && (t.mode & 1) === 0 && (sr = ze() + 500, Wl && on()));
  }
  function nt(e, t) {
    var n = e.callbackNode;
    Cf(e, t);
    var r = Sl(e, e === Be ? be : 0);
    if (r === 0) n !== null && Ls(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ls(n), t === 1) e.tag === 0 ? Sm(Vc.bind(null, e)) : Ru(Vc.bind(null, e)), _m(function() {
        (de & 6) === 0 && on();
      }), n = null;
      else {
        switch ($s(r)) {
          case 1:
            n = to;
            break;
          case 4:
            n = Is;
            break;
          case 16:
            n = _l;
            break;
          case 536870912:
            n = Ds;
            break;
          default:
            n = _l;
        }
        n = Xc(n, Wc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Wc(e, t) {
    if (ma = -1, pa = 0, (de & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (ur() && e.callbackNode !== n) return null;
    var r = Sl(e, e === Be ? be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ha(e, r);
    else {
      t = r;
      var a = de;
      de |= 2;
      var i = bc();
      (Be !== e || be !== t) && (Qt = null, sr = ze() + 500, Ln(e, t));
      do
        try {
          Hm();
          break;
        } catch (g) {
          Hc(e, g);
        }
      while (!0);
      Bo(), sa.current = i, de = a, Fe !== null ? t = 0 : (Be = null, be = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = no(e), a !== 0 && (r = a, t = Ci(e, a))), t === 1) throw n = el, Ln(e, 0), pn(e, r), nt(e, ze()), n;
      if (t === 6) pn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Wm(a) && (t = ha(e, r), t === 2 && (i = no(e), i !== 0 && (r = i, t = Ci(e, i))), t === 1)) throw n = el, Ln(e, 0), pn(e, r), nt(e, ze()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            In(e, tt, Qt);
            break;
          case 3:
            if (pn(e, r), (r & 130023424) === r && (t = wi + 500 - ze(), 10 < t)) {
              if (Sl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Xe(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Mo(In.bind(null, e, tt, Qt), t);
              break;
            }
            In(e, tt, Qt);
            break;
          case 4:
            if (pn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - wt(r);
              i = 1 << d, d = t[d], d > a && (a = d), r &= ~i;
            }
            if (r = a, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Mo(In.bind(null, e, tt, Qt), r);
              break;
            }
            In(e, tt, Qt);
            break;
          case 5:
            In(e, tt, Qt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return nt(e, ze()), e.callbackNode === n ? Wc.bind(null, e) : null;
  }
  function Ci(e, t) {
    var n = tl;
    return e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256), e = ha(e, t), e !== 2 && (t = tt, tt = n, t !== null && Ni(t)), e;
  }
  function Ni(e) {
    tt === null ? tt = e : tt.push.apply(tt, e);
  }
  function Wm(e) {
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
  function pn(e, t) {
    for (t &= ~Ei, t &= ~ua, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Vc(e) {
    if ((de & 6) !== 0) throw Error(s(327));
    ur();
    var t = Sl(e, 0);
    if ((t & 1) === 0) return nt(e, ze()), null;
    var n = ha(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = no(e);
      r !== 0 && (t = r, n = Ci(e, r));
    }
    if (n === 1) throw n = el, Ln(e, 0), pn(e, t), nt(e, ze()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, tt, Qt), nt(e, ze()), null;
  }
  function xi(e, t) {
    var n = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      de = n, de === 0 && (sr = ze() + 500, Wl && on());
    }
  }
  function Mn(e) {
    fn !== null && fn.tag === 0 && (de & 6) === 0 && ur();
    var t = de;
    de |= 1;
    var n = vt.transition, r = ye;
    try {
      if (vt.transition = null, ye = 1, e) return e();
    } finally {
      ye = r, vt.transition = n, de = t, (de & 6) === 0 && on();
    }
  }
  function Ti() {
    ut = ir.current, Ce(ir);
  }
  function Ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Oo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && jl();
          break;
        case 3:
          lr(), Ce(Je), Ce(Qe), qo();
          break;
        case 5:
          Yo(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          Ce(Pe);
          break;
        case 19:
          Ce(Pe);
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
    if (Be = e, Fe = e = hn(e.current, null), be = ut = t, Ue = 0, el = null, Ei = ua = Pn = 0, tt = tl = null, xn !== null) {
      for (t = 0; t < xn.length; t++) if (n = xn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, i = n.pending;
        if (i !== null) {
          var d = i.next;
          i.next = a, r.next = d;
        }
        n.pending = r;
      }
      xn = null;
    }
    return e;
  }
  function Hc(e, t) {
    do {
      var n = Fe;
      try {
        if (Bo(), Jl.current = na, Zl) {
          for (var r = Me.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          Zl = !1;
        }
        if (Rn = 0, je = Ae = Me = null, Kr = !1, qr = 0, _i.current = null, n === null || n.return === null) {
          Ue = 1, el = t, Fe = null;
          break;
        }
        e: {
          var i = e, d = n.return, g = n, w = t;
          if (t = be, g.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var I = w, U = g, j = U.tag;
            if ((U.mode & 1) === 0 && (j === 0 || j === 11 || j === 15)) {
              var F = U.alternate;
              F ? (U.updateQueue = F.updateQueue, U.memoizedState = F.memoizedState, U.lanes = F.lanes) : (U.updateQueue = null, U.memoizedState = null);
            }
            var b = hc(d);
            if (b !== null) {
              b.flags &= -257, vc(b, d, g, i, t), b.mode & 1 && pc(i, I, t), t = b, w = I;
              var q = t.updateQueue;
              if (q === null) {
                var G = /* @__PURE__ */ new Set();
                G.add(w), t.updateQueue = G;
              } else q.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                pc(i, I, t), Ri();
                break e;
              }
              w = Error(s(426));
            }
          } else if (xe && g.mode & 1) {
            var $e = hc(d);
            if ($e !== null) {
              ($e.flags & 65536) === 0 && ($e.flags |= 256), vc($e, d, g, i, t), Uo(ar(w, g));
              break e;
            }
          }
          i = w = ar(w, g), Ue !== 4 && (Ue = 2), tl === null ? tl = [i] : tl.push(i), i = d;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var T = fc(i, w, t);
                Uu(i, T);
                break e;
              case 1:
                g = w;
                var k = i.type, P = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (dn === null || !dn.has(P)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var B = mc(i, g, t);
                  Uu(i, B);
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
  function bc() {
    var e = sa.current;
    return sa.current = na, e === null ? na : e;
  }
  function Ri() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Be === null || (Pn & 268435455) === 0 && (ua & 268435455) === 0 || pn(Be, be);
  }
  function ha(e, t) {
    var n = de;
    de |= 2;
    var r = bc();
    (Be !== e || be !== t) && (Qt = null, Ln(e, t));
    do
      try {
        Vm();
        break;
      } catch (a) {
        Hc(e, a);
      }
    while (!0);
    if (Bo(), de = n, sa.current = r, Fe !== null) throw Error(s(261));
    return Be = null, be = 0, Ue;
  }
  function Vm() {
    for (; Fe !== null; ) Qc(Fe);
  }
  function Hm() {
    for (; Fe !== null && !hf(); ) Qc(Fe);
  }
  function Qc(e) {
    var t = Gc(e.alternate, e, ut);
    e.memoizedProps = e.pendingProps, t === null ? Yc(e) : Fe = t, _i.current = null;
  }
  function Yc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Om(n, t, ut), n !== null) {
          Fe = n;
          return;
        }
      } else {
        if (n = Fm(n, t), n !== null) {
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
  function In(e, t, n) {
    var r = ye, a = vt.transition;
    try {
      vt.transition = null, ye = 1, bm(e, t, n, r);
    } finally {
      vt.transition = a, ye = r;
    }
    return null;
  }
  function bm(e, t, n, r) {
    do
      ur();
    while (fn !== null);
    if ((de & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Nf(e, i), e === Be && (Fe = Be = null, be = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || da || (da = !0, Xc(_l, function() {
      return ur(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = vt.transition, vt.transition = null;
      var d = ye;
      ye = 1;
      var g = de;
      de |= 4, _i.current = null, Um(e, n), Fc(n, e), dm(Ro), xl = !!To, Ro = To = null, e.current = n, jm(n), vf(), de = g, ye = d, vt.transition = i;
    } else e.current = n;
    if (da && (da = !1, fn = e, fa = a), i = e.pendingLanes, i === 0 && (dn = null), _f(n.stateNode), nt(e, ze()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (ca) throw ca = !1, e = ki, ki = null, e;
    return (fa & 1) !== 0 && e.tag !== 0 && ur(), i = e.pendingLanes, (i & 1) !== 0 ? e === Si ? nl++ : (nl = 0, Si = e) : nl = 0, on(), null;
  }
  function ur() {
    if (fn !== null) {
      var e = $s(fa), t = vt.transition, n = ye;
      try {
        if (vt.transition = null, ye = 16 > e ? 16 : e, fn === null) var r = !1;
        else {
          if (e = fn, fn = null, fa = 0, (de & 6) !== 0) throw Error(s(331));
          var a = de;
          for (de |= 4, Q = e.current; Q !== null; ) {
            var i = Q, d = i.child;
            if ((Q.flags & 16) !== 0) {
              var g = i.deletions;
              if (g !== null) {
                for (var w = 0; w < g.length; w++) {
                  var I = g[w];
                  for (Q = I; Q !== null; ) {
                    var U = Q;
                    switch (U.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, U, i);
                    }
                    var j = U.child;
                    if (j !== null) j.return = U, Q = j;
                    else for (; Q !== null; ) {
                      U = Q;
                      var F = U.sibling, b = U.return;
                      if (Ic(U), U === I) {
                        Q = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = b, Q = F;
                        break;
                      }
                      Q = b;
                    }
                  }
                }
                var q = i.alternate;
                if (q !== null) {
                  var G = q.child;
                  if (G !== null) {
                    q.child = null;
                    do {
                      var $e = G.sibling;
                      G.sibling = null, G = $e;
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
              var T = i.sibling;
              if (T !== null) {
                T.return = i.return, Q = T;
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
                    ia(9, g);
                }
              } catch (J) {
                De(g, g.return, J);
              }
              if (g === d) {
                Q = null;
                break e;
              }
              var B = g.sibling;
              if (B !== null) {
                B.return = g.return, Q = B;
                break e;
              }
              Q = g.return;
            }
          }
          if (de = a, on(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
            Mt.onPostCommitFiberRoot(El, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ye = n, vt.transition = t;
      }
    }
    return !1;
  }
  function Kc(e, t, n) {
    t = ar(n, t), t = fc(e, t, 1), e = un(e, t, 1), t = Xe(), e !== null && (xr(e, 1, t), nt(e, t));
  }
  function De(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Kc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
          e = ar(n, e), e = mc(t, e, 1), t = un(t, e, 1), e = Xe(), t !== null && (xr(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Qm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (be & n) === n && (Ue === 4 || Ue === 3 && (be & 130023424) === be && 500 > ze() - wi ? Ln(e, 0) : Ei |= n), nt(e, t);
  }
  function qc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = kl, kl <<= 1, (kl & 130023424) === 0 && (kl = 4194304)));
    var n = Xe();
    e = Vt(e, t), e !== null && (xr(e, t, n), nt(e, n));
  }
  function Ym(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qc(e, n);
  }
  function Km(e, t) {
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
    r !== null && r.delete(t), qc(e, n);
  }
  var Gc;
  Gc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Je.current) et = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return et = !1, $m(e, t, n);
      et = (e.flags & 131072) !== 0;
    }
    else et = !1, xe && (t.flags & 1048576) !== 0 && Pu(t, Hl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        aa(e, t), e = t.pendingProps;
        var a = Xn(t, Qe.current);
        rr(t, n), a = Jo(null, t, r, e, a, n);
        var i = Zo();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ze(r) ? (i = !0, Bl(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, bo(t), a.updater = ra, t.stateNode = a, a._reactInternals = t, ai(t, r, e, n), t = ui(null, t, r, !0, i, n)) : (t.tag = 0, xe && i && $o(t), Ge(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (aa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Gm(r), e = Ct(r, e), a) {
            case 0:
              t = si(null, t, r, e, n);
              break e;
            case 1:
              t = kc(null, t, r, e, n);
              break e;
            case 11:
              t = yc(null, t, r, e, n);
              break e;
            case 14:
              t = gc(null, t, r, Ct(r.type, e), n);
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
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), si(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), kc(e, t, r, a, n);
      case 3:
        e: {
          if (Sc(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, a = i.element, Au(e, t), Gl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            a = ar(Error(s(423)), t), t = Cc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = ar(Error(s(424)), t), t = Cc(e, t, r, n, a);
            break e;
          } else for (st = rn(t.stateNode.containerInfo.firstChild), it = t, xe = !0, St = null, n = Ou(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (er(), r === a) {
              t = bt(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Bu(t), e === null && Ao(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, d = a.children, Po(r, a) ? d = null : i !== null && Po(r, i) && (t.flags |= 32), wc(e, t), Ge(e, t, d, n), t.child;
      case 6:
        return e === null && Ao(t), null;
      case 13:
        return Nc(e, t, n);
      case 4:
        return Qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : Ge(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), yc(e, t, r, a, n);
      case 7:
        return Ge(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, d = a.value, we(Yl, r._currentValue), r._currentValue = d, i !== null) if (kt(i.value, d)) {
            if (i.children === a.children && !Je.current) {
              t = bt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var g = i.dependencies;
            if (g !== null) {
              d = i.child;
              for (var w = g.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (i.tag === 1) {
                    w = Ht(-1, n & -n), w.tag = 2;
                    var I = i.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var U = I.pending;
                      U === null ? w.next = w : (w.next = U.next, U.next = w), I.pending = w;
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
          Ge(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, rr(t, n), a = pt(a), r = r(a), t.flags |= 1, Ge(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = Ct(r, t.pendingProps), a = Ct(r.type, a), gc(e, t, r, a, n);
      case 15:
        return _c(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ct(r, a), aa(e, t), t.tag = 1, Ze(r) ? (e = !0, Bl(t)) : e = !1, rr(t, n), cc(t, r, a), ai(t, r, a, n), ui(null, t, r, !0, e, n);
      case 19:
        return Tc(e, t, n);
      case 22:
        return Ec(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Xc(e, t) {
    return Ms(e, t);
  }
  function qm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function yt(e, t, n, r) {
    return new qm(e, t, n, r);
  }
  function Pi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gm(e) {
    if (typeof e == "function") return Pi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ie) return 11;
      if (e === X) return 14;
    }
    return 2;
  }
  function hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = yt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function va(e, t, n, r, a, i) {
    var d = 2;
    if (r = e, typeof e == "function") Pi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case te:
        return Dn(n.children, a, i, t);
      case ne:
        d = 8, a |= 8;
        break;
      case ge:
        return e = yt(12, n, t, a | 2), e.elementType = ge, e.lanes = i, e;
      case Re:
        return e = yt(13, n, t, a), e.elementType = Re, e.lanes = i, e;
      case Oe:
        return e = yt(19, n, t, a), e.elementType = Oe, e.lanes = i, e;
      case Ie:
        return ya(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case _e:
            d = 10;
            break e;
          case le:
            d = 9;
            break e;
          case ie:
            d = 11;
            break e;
          case X:
            d = 14;
            break e;
          case Le:
            d = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = yt(d, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function Dn(e, t, n, r) {
    return e = yt(7, e, r, t), e.lanes = n, e;
  }
  function ya(e, t, n, r) {
    return e = yt(22, e, r, t), e.elementType = Ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Mi(e, t, n) {
    return e = yt(6, e, null, t), e.lanes = n, e;
  }
  function Li(e, t, n) {
    return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Xm(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ro(0), this.expirationTimes = ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ro(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function Ii(e, t, n, r, a, i, d, g, w) {
    return e = new Xm(e, t, n, g, w), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = yt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bo(i), e;
  }
  function Jm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Jc(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
      if (wn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ze(t.type)) {
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
      if (Ze(n)) return xu(e, n, t);
    }
    return t;
  }
  function Zc(e, t, n, r, a, i, d, g, w) {
    return e = Ii(n, r, !0, e, a, i, d, g, w), e.context = Jc(null), n = e.current, r = Xe(), a = mn(n), i = Ht(r, a), i.callback = t ?? null, un(n, i, a), e.current.lanes = a, xr(e, a, r), nt(e, r), e;
  }
  function ga(e, t, n, r) {
    var a = t.current, i = Xe(), d = mn(a);
    return n = Jc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(i, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(a, t, d), e !== null && (Tt(e, a, d, i), ql(e, a, d)), d;
  }
  function _a(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ed(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Di(e, t) {
    ed(e, t), (e = e.alternate) && ed(e, t);
  }
  function Zm() {
    return null;
  }
  var td = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zi(e) {
    this._internalRoot = e;
  }
  Ea.prototype.render = zi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    ga(e, t, null, null);
  }, Ea.prototype.unmount = zi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Mn(function() {
        ga(null, e, null, null);
      }), t[Ut] = null;
    }
  };
  function Ea(e) {
    this._internalRoot = e;
  }
  Ea.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = As();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++) ;
      en.splice(n, 0, e), n === 0 && Bs(e);
    }
  };
  function $i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function wa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function nd() {
  }
  function ep(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var I = _a(d);
          i.call(I);
        };
      }
      var d = Zc(t, r, e, 0, null, !1, !1, "", nd);
      return e._reactRootContainer = d, e[Ut] = d.current, jr(e.nodeType === 8 ? e.parentNode : e), Mn(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var I = _a(w);
        g.call(I);
      };
    }
    var w = Ii(e, 0, !1, null, null, !1, !1, "", nd);
    return e._reactRootContainer = w, e[Ut] = w.current, jr(e.nodeType === 8 ? e.parentNode : e), Mn(function() {
      ga(t, w, n, r);
    }), w;
  }
  function ka(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
      var d = i;
      if (typeof a == "function") {
        var g = a;
        a = function() {
          var w = _a(d);
          g.call(w);
        };
      }
      ga(t, d, e, a);
    } else d = ep(n, t, e, a, r);
    return _a(d);
  }
  Os = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Nr(t.pendingLanes);
          n !== 0 && (lo(t, n | 1), nt(t, ze()), (de & 6) === 0 && (sr = ze() + 500, on()));
        }
        break;
      case 13:
        Mn(function() {
          var r = Vt(e, 1);
          if (r !== null) {
            var a = Xe();
            Tt(r, e, 1, a);
          }
        }), Di(e, 1);
    }
  }, ao = function(e) {
    if (e.tag === 13) {
      var t = Vt(e, 134217728);
      if (t !== null) {
        var n = Xe();
        Tt(t, e, 134217728, n);
      }
      Di(e, 134217728);
    }
  }, Fs = function(e) {
    if (e.tag === 13) {
      var t = mn(e), n = Vt(e, t);
      if (n !== null) {
        var r = Xe();
        Tt(n, e, t, r);
      }
      Di(e, t);
    }
  }, As = function() {
    return ye;
  }, Us = function(e, t) {
    var n = ye;
    try {
      return ye = e, t();
    } finally {
      ye = n;
    }
  }, Xa = function(e, t, n) {
    switch (t) {
      case "input":
        if (Va(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Ul(r);
              if (!a) throw Error(s(90));
              us(r), Va(r, a);
            }
          }
        }
        break;
      case "textarea":
        ps(e, n);
        break;
      case "select":
        t = n.value, t != null && Un(e, !!n.multiple, t, !1);
    }
  }, Ss = xi, Cs = Mn;
  var tp = { usingClientEntryPoint: !1, Events: [Vr, qn, Ul, ws, ks, xi] }, rl = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, np = { bundleType: rl.bundleType, version: rl.version, rendererPackageName: rl.rendererPackageName, rendererConfig: rl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: H.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Rs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: rl.findFiberByHostInstance || Zm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sa.isDisabled && Sa.supportsFiber) try {
      El = Sa.inject(np), Mt = Sa;
    } catch {
    }
  }
  return rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp, rt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$i(t)) throw Error(s(200));
    return Jm(e, t, null, n);
  }, rt.createRoot = function(e, t) {
    if (!$i(e)) throw Error(s(299));
    var n = !1, r = "", a = td;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Ii(e, 1, !1, null, null, n, !1, r, a), e[Ut] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new zi(t);
  }, rt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Rs(t), e = e === null ? null : e.stateNode, e;
  }, rt.flushSync = function(e) {
    return Mn(e);
  }, rt.hydrate = function(e, t, n) {
    if (!wa(t)) throw Error(s(200));
    return ka(null, e, t, !0, n);
  }, rt.hydrateRoot = function(e, t, n) {
    if (!$i(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, a = !1, i = "", d = td;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = Zc(t, null, e, 1, n ?? null, a, !1, i, d), e[Ut] = t.current, jr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new Ea(t);
  }, rt.render = function(e, t, n) {
    if (!wa(t)) throw Error(s(200));
    return ka(null, e, t, !1, n);
  }, rt.unmountComponentAtNode = function(e) {
    if (!wa(e)) throw Error(s(40));
    return e._reactRootContainer ? (Mn(function() {
      ka(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ut] = null;
      });
    }), !0) : !1;
  }, rt.unstable_batchedUpdates = xi, rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wa(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return ka(e, t, n, !1, r);
  }, rt.version = "18.3.1-next-f1338f8080-20240426", rt;
}
var sd;
function sp() {
  if (sd) return Fi.exports;
  sd = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), Fi.exports = ip(), Fi.exports;
}
var ud;
function up() {
  if (ud) return Ca;
  ud = 1;
  var l = sp();
  return Ca.createRoot = l.createRoot, Ca.hydrateRoot = l.hydrateRoot, Ca;
}
var cp = up();
const dp = /* @__PURE__ */ Id(cp);
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
var cd = "popstate";
function dd(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function fp(l = {}) {
  function o(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: v = ""
    } = Fn(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Xi(
      "",
      { pathname: p, search: h, hash: v },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function s(f, m) {
    let p = f.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let v = f.location.href, C = v.indexOf("#");
      h = C === -1 ? v : v.slice(0, C);
    }
    return h + "#" + (typeof m == "string" ? m : ul(m));
  }
  function c(f, m) {
    gt(
      f.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return pp(
    o,
    s,
    c,
    l
  );
}
function Te(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function gt(l, o) {
  if (!l) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {
    }
  }
}
function mp() {
  return Math.random().toString(36).substring(2, 10);
}
function fd(l, o) {
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
function Xi(l, o, s = null, c, f) {
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
    key: o && o.key || c || mp(),
    mask: f
  };
}
function ul({
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
function pp(l, o, s, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", v = null, C = R();
  C == null && (C = 0, p.replaceState({ ...p.state, idx: C }, ""));
  function R() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let E = R(), M = E == null ? null : E - C;
    C = E, v && v({ action: h, location: D.location, delta: M });
  }
  function x(E, M) {
    h = "PUSH";
    let S = dd(E) ? E : Xi(D.location, E, M);
    s && s(S, E), C = R() + 1;
    let O = fd(S, C), H = D.createHref(S.mask || S);
    try {
      p.pushState(O, "", H);
    } catch (Y) {
      if (Y instanceof DOMException && Y.name === "DataCloneError")
        throw Y;
      f.location.assign(H);
    }
    m && v && v({ action: h, location: D.location, delta: 1 });
  }
  function L(E, M) {
    h = "REPLACE";
    let S = dd(E) ? E : Xi(D.location, E, M);
    s && s(S, E), C = R();
    let O = fd(S, C), H = D.createHref(S.mask || S);
    p.replaceState(O, "", H), m && v && v({ action: h, location: D.location, delta: 0 });
  }
  function z(E) {
    return hp(f, E);
  }
  let D = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(E) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(cd, _), v = E, () => {
        f.removeEventListener(cd, _), v = null;
      };
    },
    createHref(E) {
      return o(f, E);
    },
    createURL: z,
    encodeLocation(E) {
      let M = z(E);
      return {
        pathname: M.pathname,
        search: M.search,
        hash: M.hash
      };
    },
    push: x,
    replace: L,
    go(E) {
      return p.go(E);
    }
  };
  return D;
}
function hp(l, o, s = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Te(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : ul(o);
  return f = f.replace(/ $/, "%20"), !s && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function zd(l, o, s = "/") {
  return vp(l, o, s, !1);
}
function vp(l, o, s, c, f) {
  let m = typeof o == "string" ? Fn(o) : o, p = Yt(m.pathname || "/", s);
  if (p == null)
    return null;
  let h = yp(l), v = null, C = Pp(p);
  for (let R = 0; v == null && R < h.length; ++R)
    v = Tp(
      h[R],
      C,
      c
    );
  return v;
}
function yp(l) {
  let o = $d(l);
  return gp(o), o;
}
function $d(l, o = [], s = [], c = "", f = !1) {
  let m = (p, h, v = f, C) => {
    let R = {
      relativePath: C === void 0 ? p.path || "" : C,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (R.relativePath.startsWith("/")) {
      if (!R.relativePath.startsWith(c) && v)
        return;
      Te(
        R.relativePath.startsWith(c),
        `Absolute route path "${R.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), R.relativePath = R.relativePath.slice(c.length);
    }
    let _ = Rt([c, R.relativePath]), x = s.concat(R);
    p.children && p.children.length > 0 && (Te(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), $d(
      p.children,
      o,
      x,
      _,
      v
    )), !(p.path == null && !p.index) && o.push({
      path: _,
      score: Np(_, p.index),
      routesMeta: x
    });
  };
  return l.forEach((p, h) => {
    var v;
    if (p.path === "" || !((v = p.path) != null && v.includes("?")))
      m(p, h);
    else
      for (let C of Od(p.path))
        m(p, h, !0, C);
  }), o;
}
function Od(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [s, ...c] = o, f = s.endsWith("?"), m = s.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = Od(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (v) => v === "" ? m : [m, v].join("/")
    )
  ), f && h.push(...p), h.map(
    (v) => l.startsWith("/") && v === "" ? "/" : v
  );
}
function gp(l) {
  l.sort(
    (o, s) => o.score !== s.score ? s.score - o.score : xp(
      o.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var _p = /^:[\w-]+$/, Ep = 3, wp = 2, kp = 1, Sp = 10, Cp = -2, md = (l) => l === "*";
function Np(l, o) {
  let s = l.split("/"), c = s.length;
  return s.some(md) && (c += Cp), o && (c += wp), s.filter((f) => !md(f)).reduce(
    (f, m) => f + (_p.test(m) ? Ep : m === "" ? kp : Sp),
    c
  );
}
function xp(l, o) {
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
function Tp(l, o, s = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let v = c[h], C = h === c.length - 1, R = m === "/" ? o : o.slice(m.length) || "/", _ = Da(
      { path: v.relativePath, caseSensitive: v.caseSensitive, end: C },
      R
    ), x = v.route;
    if (!_ && C && s && !c[c.length - 1].route.index && (_ = Da(
      {
        path: v.relativePath,
        caseSensitive: v.caseSensitive,
        end: !1
      },
      R
    )), !_)
      return null;
    Object.assign(f, _.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Rt([m, _.pathname]),
      pathnameBase: Dp(
        Rt([m, _.pathnameBase])
      ),
      route: x
    }), _.pathnameBase !== "/" && (m = Rt([m, _.pathnameBase]));
  }
  return p;
}
function Da(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, c] = Rp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(s);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (C, { paramName: R, isOptional: _ }, x) => {
        if (R === "*") {
          let z = h[x] || "";
          p = m.slice(0, m.length - z.length).replace(/(.)\/+$/, "$1");
        }
        const L = h[x];
        return _ && !L ? C[R] = void 0 : C[R] = (L || "").replace(/%2F/g, "/"), C;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function Rp(l, o = !1, s = !0) {
  gt(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, v, C, R) => {
      if (c.push({ paramName: h, isOptional: v != null }), v) {
        let _ = R.charAt(C + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function Pp(l) {
  try {
    return l.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return gt(
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
var Mp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Lp(l, o = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? Fn(l) : l, m;
  return s ? (s = Fd(s), s.startsWith("/") ? m = pd(s.substring(1), "/") : m = pd(s, o)) : m = o, {
    pathname: m,
    search: zp(c),
    hash: $p(f)
  };
}
function pd(l, o) {
  let s = za(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? s.length > 1 && s.pop() : f !== "." && s.push(f);
  }), s.length > 1 ? s.join("/") : "/";
}
function ji(l, o, s, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ip(l) {
  return l.filter(
    (o, s) => s === 0 || o.route.path && o.route.path.length > 0
  );
}
function ts(l) {
  let o = Ip(l);
  return o.map(
    (s, c) => c === o.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Aa(l, o, s, c = !1) {
  let f;
  typeof l == "string" ? f = Fn(l) : (f = { ...l }, Te(
    !f.pathname || !f.pathname.includes("?"),
    ji("?", "pathname", "search", f)
  ), Te(
    !f.pathname || !f.pathname.includes("#"),
    ji("#", "pathname", "hash", f)
  ), Te(
    !f.search || !f.search.includes("#"),
    ji("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = s;
  else {
    let _ = o.length - 1;
    if (!c && p.startsWith("..")) {
      let x = p.split("/");
      for (; x[0] === ".."; )
        x.shift(), _ -= 1;
      f.pathname = x.join("/");
    }
    h = _ >= 0 ? o[_] : "/";
  }
  let v = Lp(f, h), C = p && p !== "/" && p.endsWith("/"), R = (m || p === ".") && s.endsWith("/");
  return !v.pathname.endsWith("/") && (C || R) && (v.pathname += "/"), v;
}
var Fd = (l) => l.replace(/\/\/+/g, "/"), Rt = (l) => Fd(l.join("/")), za = (l) => l.replace(/\/+$/, ""), Dp = (l) => za(l).replace(/^\/*/, "/"), zp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, $p = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Op = class {
  constructor(l, o, s, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Fp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Ap(l) {
  let o = l.map((s) => s.route.path).filter(Boolean);
  return Rt(o) || "/";
}
var Ad = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ud(l, o) {
  let s = l;
  if (typeof s != "string" || !Mp.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, f = !1;
  if (Ad)
    try {
      let m = new URL(window.location.href), p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s), h = Yt(p.pathname, o);
      p.origin === m.origin && h != null ? s = h + p.search + p.hash : f = !0;
    } catch {
      gt(
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
var jd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  jd
);
var Up = [
  "GET",
  ...jd
];
new Set(Up);
var fr = y.createContext(null);
fr.displayName = "DataRouter";
var Ua = y.createContext(null);
Ua.displayName = "DataRouterState";
var Bd = y.createContext(!1);
function jp() {
  return y.useContext(Bd);
}
var Wd = y.createContext({
  isTransitioning: !1
});
Wd.displayName = "ViewTransition";
var Bp = y.createContext(
  /* @__PURE__ */ new Map()
);
Bp.displayName = "Fetchers";
var Wp = y.createContext(null);
Wp.displayName = "Await";
var dt = y.createContext(
  null
);
dt.displayName = "Navigation";
var cl = y.createContext(
  null
);
cl.displayName = "Location";
var At = y.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
At.displayName = "Route";
var ns = y.createContext(null);
ns.displayName = "RouteError";
var Vd = "REACT_ROUTER_ERROR", Vp = "REDIRECT", Hp = "ROUTE_ERROR_RESPONSE";
function bp(l) {
  if (l.startsWith(`${Vd}:${Vp}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function Qp(l) {
  if (l.startsWith(
    `${Vd}:${Hp}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Op(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function Yp(l, { relative: o } = {}) {
  Te(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = y.useContext(dt), { hash: f, pathname: m, search: p } = dl(l, { relative: o }), h = m;
  return s !== "/" && (h = m === "/" ? s : Rt([s, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function mr() {
  return y.useContext(cl) != null;
}
function _t() {
  return Te(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), y.useContext(cl).location;
}
var Hd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bd(l) {
  y.useContext(dt).static || y.useLayoutEffect(l);
}
function pr() {
  let { isDataRoute: l } = y.useContext(At);
  return l ? oh() : Kp();
}
function Kp() {
  Te(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = y.useContext(fr), { basename: o, navigator: s } = y.useContext(dt), { matches: c } = y.useContext(At), { pathname: f } = _t(), m = JSON.stringify(ts(c)), p = y.useRef(!1);
  return bd(() => {
    p.current = !0;
  }), y.useCallback(
    (v, C = {}) => {
      if (gt(p.current, Hd), !p.current) return;
      if (typeof v == "number") {
        s.go(v);
        return;
      }
      let R = Aa(
        v,
        JSON.parse(m),
        f,
        C.relative === "path"
      );
      l == null && o !== "/" && (R.pathname = R.pathname === "/" ? o : Rt([o, R.pathname])), (C.replace ? s.replace : s.push)(
        R,
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
y.createContext(null);
function dl(l, { relative: o } = {}) {
  let { matches: s } = y.useContext(At), { pathname: c } = _t(), f = JSON.stringify(ts(s));
  return y.useMemo(
    () => Aa(
      l,
      JSON.parse(f),
      c,
      o === "path"
    ),
    [l, f, c, o]
  );
}
function qp(l, o) {
  return Qd(l, o);
}
function Qd(l, o, s) {
  var E;
  Te(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = y.useContext(dt), { matches: f } = y.useContext(At), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", v = m ? m.pathnameBase : "/", C = m && m.route;
  {
    let M = C && C.path || "";
    Kd(
      h,
      !C || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`
    );
  }
  let R = _t(), _;
  if (o) {
    let M = typeof o == "string" ? Fn(o) : o;
    Te(
      v === "/" || ((E = M.pathname) == null ? void 0 : E.startsWith(v)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ), _ = M;
  } else
    _ = R;
  let x = _.pathname || "/", L = x;
  if (v !== "/") {
    let M = v.replace(/^\//, "").split("/");
    L = "/" + x.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let z = s && s.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    s.state.matches.map(
      (M) => Object.assign(M, {
        route: s.manifest[M.route.id] || M.route
      })
    )
  ) : zd(l, { pathname: L });
  gt(
    C || z != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), gt(
    z == null || z[z.length - 1].route.element !== void 0 || z[z.length - 1].route.Component !== void 0 || z[z.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let D = eh(
    z && z.map(
      (M) => Object.assign({}, M, {
        params: Object.assign({}, p, M.params),
        pathname: Rt([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            M.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathname
        ]),
        pathnameBase: M.pathnameBase === "/" ? v : Rt([
          v,
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
  return o && D ? /* @__PURE__ */ y.createElement(
    cl.Provider,
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
function Gp() {
  let l = ah(), o = Fp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ y.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ y.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ y.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ y.createElement("h3", { style: { fontStyle: "italic" } }, o), s ? /* @__PURE__ */ y.createElement("pre", { style: f }, s) : null, p);
}
var Xp = /* @__PURE__ */ y.createElement(Gp, null), Yd = class extends y.Component {
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
      const s = Qp(l.digest);
      s && (l = s);
    }
    let o = l !== void 0 ? /* @__PURE__ */ y.createElement(At.Provider, { value: this.props.routeContext }, /* @__PURE__ */ y.createElement(
      ns.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ y.createElement(Jp, { error: l }, o) : o;
  }
};
Yd.contextType = Bd;
var Bi = /* @__PURE__ */ new WeakMap();
function Jp({
  children: l,
  error: o
}) {
  let { basename: s } = y.useContext(dt);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = bp(o.digest);
    if (c) {
      let f = Bi.get(o);
      if (f) throw f;
      let m = Ud(c.location, s);
      if (Ad && !Bi.get(o))
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
      return /* @__PURE__ */ y.createElement(
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
function Zp({ routeContext: l, match: o, children: s }) {
  let c = y.useContext(fr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ y.createElement(At.Provider, { value: l }, s);
}
function eh(l, o = [], s) {
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
    let R = f.findIndex(
      (_) => _.route.id && (m == null ? void 0 : m[_.route.id]) !== void 0
    );
    Te(
      R >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, R + 1)
    );
  }
  let p = !1, h = -1;
  if (s && c) {
    p = c.renderFallback;
    for (let R = 0; R < f.length; R++) {
      let _ = f[R];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = R), _.route.id) {
        let { loaderData: x, errors: L } = c, z = _.route.loader && !x.hasOwnProperty(_.route.id) && (!L || L[_.route.id] === void 0);
        if (_.route.lazy || z) {
          s.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let v = s == null ? void 0 : s.onError, C = c && v ? (R, _) => {
    var x, L;
    v(R, {
      location: c.location,
      params: ((L = (x = c.matches) == null ? void 0 : x[0]) == null ? void 0 : L.params) ?? {},
      pattern: Ap(c.matches),
      errorInfo: _
    });
  } : void 0;
  return f.reduceRight(
    (R, _, x) => {
      let L, z = !1, D = null, E = null;
      c && (L = m && _.route.id ? m[_.route.id] : void 0, D = _.route.errorElement || Xp, p && (h < 0 && x === 0 ? (Kd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), z = !0, E = null) : h === x && (z = !0, E = _.route.hydrateFallbackElement || null)));
      let M = o.concat(f.slice(0, x + 1)), S = () => {
        let O;
        return L ? O = D : z ? O = E : _.route.Component ? O = /* @__PURE__ */ y.createElement(_.route.Component, null) : _.route.element ? O = _.route.element : O = R, /* @__PURE__ */ y.createElement(
          Zp,
          {
            match: _,
            routeContext: {
              outlet: R,
              matches: M,
              isDataRoute: c != null
            },
            children: O
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || x === 0) ? /* @__PURE__ */ y.createElement(
        Yd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: D,
          error: L,
          children: S(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          onError: C
        }
      ) : S();
    },
    null
  );
}
function rs(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function th(l) {
  let o = y.useContext(fr);
  return Te(o, rs(l)), o;
}
function nh(l) {
  let o = y.useContext(Ua);
  return Te(o, rs(l)), o;
}
function rh(l) {
  let o = y.useContext(At);
  return Te(o, rs(l)), o;
}
function ls(l) {
  let o = rh(l), s = o.matches[o.matches.length - 1];
  return Te(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function lh() {
  return ls(
    "useRouteId"
    /* UseRouteId */
  );
}
function ah() {
  var c;
  let l = y.useContext(ns), o = nh(
    "useRouteError"
    /* UseRouteError */
  ), s = ls(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[s];
}
function oh() {
  let { router: l } = th(
    "useNavigate"
    /* UseNavigateStable */
  ), o = ls(
    "useNavigate"
    /* UseNavigateStable */
  ), s = y.useRef(!1);
  return bd(() => {
    s.current = !0;
  }), y.useCallback(
    async (f, m = {}) => {
      gt(s.current, Hd), s.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var hd = {};
function Kd(l, o, s) {
  !o && !hd[l] && (hd[l] = !0, gt(!1, s));
}
y.memo(ih);
function ih({
  routes: l,
  manifest: o,
  future: s,
  state: c,
  isStatic: f,
  onError: m
}) {
  return Qd(l, void 0, {
    manifest: o,
    state: c,
    isStatic: f,
    onError: m
  });
}
function Na({
  to: l,
  replace: o,
  state: s,
  relative: c
}) {
  Te(
    mr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = y.useContext(dt);
  gt(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = y.useContext(At), { pathname: p } = _t(), h = pr(), v = Aa(
    l,
    ts(m),
    p,
    c === "path"
  ), C = JSON.stringify(v);
  return y.useEffect(() => {
    h(JSON.parse(C), { replace: o, state: s, relative: c });
  }, [h, C, c, o, s]), null;
}
function lt(l) {
  Te(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function sh({
  basename: l = "/",
  children: o = null,
  location: s,
  navigationType: c = "POP",
  navigator: f,
  static: m = !1,
  useTransitions: p
}) {
  Te(
    !mr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), v = y.useMemo(
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
    search: R = "",
    hash: _ = "",
    state: x = null,
    key: L = "default",
    mask: z
  } = s, D = y.useMemo(() => {
    let E = Yt(C, h);
    return E == null ? null : {
      location: {
        pathname: E,
        search: R,
        hash: _,
        state: x,
        key: L,
        mask: z
      },
      navigationType: c
    };
  }, [h, C, R, _, x, L, c, z]);
  return gt(
    D != null,
    `<Router basename="${h}"> is not able to match the URL "${C}${R}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), D == null ? null : /* @__PURE__ */ y.createElement(dt.Provider, { value: v }, /* @__PURE__ */ y.createElement(cl.Provider, { children: o, value: D }));
}
function uh({
  children: l,
  location: o
}) {
  return qp(Ji(l), o);
}
function Ji(l, o = []) {
  let s = [];
  return y.Children.forEach(l, (c, f) => {
    if (!y.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === y.Fragment) {
      s.push.apply(
        s,
        Ji(c.props.children, m)
      );
      return;
    }
    Te(
      c.type === lt,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Te(
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
    c.props.children && (p.children = Ji(
      c.props.children,
      m
    )), s.push(p);
  }), s;
}
var La = "get", Ia = "application/x-www-form-urlencoded";
function ja(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function ch(l) {
  return ja(l) && l.tagName.toLowerCase() === "button";
}
function dh(l) {
  return ja(l) && l.tagName.toLowerCase() === "form";
}
function fh(l) {
  return ja(l) && l.tagName.toLowerCase() === "input";
}
function mh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function ph(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !mh(l);
}
var xa = null;
function hh() {
  if (xa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), xa = !1;
    } catch {
      xa = !0;
    }
  return xa;
}
var vh = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Wi(l) {
  return l != null && !vh.has(l) ? (gt(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ia}"`
  ), null) : l;
}
function yh(l, o) {
  let s, c, f, m, p;
  if (dh(l)) {
    let h = l.getAttribute("action");
    c = h ? Yt(h, o) : null, s = l.getAttribute("method") || La, f = Wi(l.getAttribute("enctype")) || Ia, m = new FormData(l);
  } else if (ch(l) || fh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = v ? Yt(v, o) : null, s = l.getAttribute("formmethod") || h.getAttribute("method") || La, f = Wi(l.getAttribute("formenctype")) || Wi(h.getAttribute("enctype")) || Ia, m = new FormData(h, l), !hh()) {
      let { name: C, type: R, value: _ } = l;
      if (R === "image") {
        let x = C ? `${C}.` : "";
        m.append(`${x}x`, "0"), m.append(`${x}y`, "0");
      } else C && m.append(C, _);
    }
  } else {
    if (ja(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = La, c = null, f = Ia, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: s.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function as(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function qd(l, o, s, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return s ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Yt(f.pathname, o) === "/" ? f.pathname = `${za(o)}/_root.${c}` : f.pathname = `${za(f.pathname)}.${c}`, f;
}
async function gh(l, o) {
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
function _h(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Eh(l, o, s) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = o.routes[f.route.id];
      if (m) {
        let p = await gh(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Ch(
    c.flat(1).filter(_h).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function vd(l, o, s, c, f, m) {
  let p = (v, C) => s[C] ? v.route.id !== s[C].route.id : !0, h = (v, C) => {
    var R;
    return (
      // param change, /users/123 -> /users/456
      s[C].pathname !== v.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((R = s[C].route.path) == null ? void 0 : R.endsWith("*")) && s[C].params["*"] !== v.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (v, C) => p(v, C) || h(v, C)
  ) : m === "data" ? o.filter((v, C) => {
    var _;
    let R = c.routes[v.route.id];
    if (!R || !R.hasLoader)
      return !1;
    if (p(v, C) || h(v, C))
      return !0;
    if (v.route.shouldRevalidate) {
      let x = v.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((_ = s[0]) == null ? void 0 : _.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: v.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function wh(l, o, { includeHydrateFallback: s } = {}) {
  return kh(
    l.map((c) => {
      let f = o.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), s && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function kh(l) {
  return [...new Set(l)];
}
function Sh(l) {
  let o = {}, s = Object.keys(l).sort();
  for (let c of s)
    o[c] = l[c];
  return o;
}
function Ch(l, o) {
  let s = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, f) => {
    let m = JSON.stringify(Sh(f));
    return s.has(m) || (s.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function os() {
  let l = y.useContext(fr);
  return as(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Nh() {
  let l = y.useContext(Ua);
  return as(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var is = y.createContext(void 0);
is.displayName = "FrameworkContext";
function ss() {
  let l = y.useContext(is);
  return as(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function xh(l, o) {
  let s = y.useContext(is), [c, f] = y.useState(!1), [m, p] = y.useState(!1), { onFocus: h, onBlur: v, onMouseEnter: C, onMouseLeave: R, onTouchStart: _ } = o, x = y.useRef(null);
  y.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let D = (M) => {
        M.forEach((S) => {
          p(S.isIntersecting);
        });
      }, E = new IntersectionObserver(D, { threshold: 0.5 });
      return x.current && E.observe(x.current), () => {
        E.disconnect();
      };
    }
  }, [l]), y.useEffect(() => {
    if (c) {
      let D = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(D);
      };
    }
  }, [c]);
  let L = () => {
    f(!0);
  }, z = () => {
    f(!1), p(!1);
  };
  return s ? l !== "intent" ? [m, x, {}] : [
    m,
    x,
    {
      onFocus: ll(h, L),
      onBlur: ll(v, z),
      onMouseEnter: ll(C, L),
      onMouseLeave: ll(R, z),
      onTouchStart: ll(_, L)
    }
  ] : [!1, x, {}];
}
function ll(l, o) {
  return (s) => {
    l && l(s), s.defaultPrevented || o(s);
  };
}
function Th({ page: l, ...o }) {
  let s = jp(), { router: c } = os(), f = y.useMemo(
    () => zd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? s ? /* @__PURE__ */ y.createElement(Ph, { page: l, matches: f, ...o }) : /* @__PURE__ */ y.createElement(Mh, { page: l, matches: f, ...o }) : null;
}
function Rh(l) {
  let { manifest: o, routeModules: s } = ss(), [c, f] = y.useState([]);
  return y.useEffect(() => {
    let m = !1;
    return Eh(l, o, s).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, s]), c;
}
function Ph({
  page: l,
  matches: o,
  ...s
}) {
  let c = _t(), { future: f } = ss(), { basename: m } = os(), p = y.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = qd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), v = !1, C = [];
    for (let R of o)
      typeof R.route.shouldRevalidate == "function" ? v = !0 : C.push(R.route.id);
    return v && C.length > 0 && h.searchParams.set("_routes", C.join(",")), [h.pathname + h.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, p.map((h) => /* @__PURE__ */ y.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...s })));
}
function Mh({
  page: l,
  matches: o,
  ...s
}) {
  let c = _t(), { future: f, manifest: m, routeModules: p } = ss(), { basename: h } = os(), { loaderData: v, matches: C } = Nh(), R = y.useMemo(
    () => vd(
      l,
      o,
      C,
      m,
      c,
      "data"
    ),
    [l, o, C, m, c]
  ), _ = y.useMemo(
    () => vd(
      l,
      o,
      C,
      m,
      c,
      "assets"
    ),
    [l, o, C, m, c]
  ), x = y.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let D = /* @__PURE__ */ new Set(), E = !1;
    if (o.forEach((S) => {
      var H;
      let O = m.routes[S.route.id];
      !O || !O.hasLoader || (!R.some((Y) => Y.route.id === S.route.id) && S.route.id in v && ((H = p[S.route.id]) != null && H.shouldRevalidate) || O.hasClientLoader ? E = !0 : D.add(S.route.id));
    }), D.size === 0)
      return [];
    let M = qd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return E && D.size > 0 && M.searchParams.set(
      "_routes",
      o.filter((S) => D.has(S.route.id)).map((S) => S.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    v,
    c,
    m,
    R,
    o,
    l,
    p
  ]), L = y.useMemo(
    () => wh(_, m),
    [_, m]
  ), z = Rh(_);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, x.map((D) => /* @__PURE__ */ y.createElement("link", { key: D, rel: "prefetch", as: "fetch", href: D, ...s })), L.map((D) => /* @__PURE__ */ y.createElement("link", { key: D, rel: "modulepreload", href: D, ...s })), z.map(({ key: D, link: E }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ y.createElement(
      "link",
      {
        key: D,
        nonce: s.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function Lh(...l) {
  return (o) => {
    l.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var Ih = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Ih && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function Dh({
  basename: l,
  children: o,
  useTransitions: s,
  window: c
}) {
  let f = y.useRef();
  f.current == null && (f.current = fp({ window: c, v5Compat: !0 }));
  let m = f.current, [p, h] = y.useState({
    action: m.action,
    location: m.location
  }), v = y.useCallback(
    (C) => {
      s === !1 ? h(C) : y.startTransition(() => h(C));
    },
    [s]
  );
  return y.useLayoutEffect(() => m.listen(v), [m, v]), /* @__PURE__ */ y.createElement(
    sh,
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
var Gd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Xd = y.forwardRef(
  function({
    onClick: o,
    discover: s = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: v,
    target: C,
    to: R,
    preventScrollReset: _,
    viewTransition: x,
    defaultShouldRevalidate: L,
    ...z
  }, D) {
    let { basename: E, navigator: M, useTransitions: S } = y.useContext(dt), O = typeof R == "string" && Gd.test(R), H = Ud(R, E);
    R = H.to;
    let Y = Yp(R, { relative: f }), W = _t(), te = null;
    if (h) {
      let X = Aa(
        h,
        [],
        W.mask ? W.mask.pathname : "/",
        !0
      );
      E !== "/" && (X.pathname = X.pathname === "/" ? E : Rt([E, X.pathname])), te = M.createHref(X);
    }
    let [ne, ge, _e] = xh(
      c,
      z
    ), le = Oh(R, {
      replace: p,
      mask: h,
      state: v,
      target: C,
      preventScrollReset: _,
      relative: f,
      viewTransition: x,
      defaultShouldRevalidate: L,
      useTransitions: S
    });
    function ie(X) {
      o && o(X), X.defaultPrevented || le(X);
    }
    let Re = !(H.isExternal || m), Oe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ y.createElement(
        "a",
        {
          ...z,
          ..._e,
          href: (Re ? te : void 0) || H.absoluteURL || Y,
          onClick: Re ? ie : o,
          ref: Lh(D, ge),
          target: C,
          "data-discover": !O && s === "render" ? "true" : void 0
        }
      )
    );
    return ne && !O ? /* @__PURE__ */ y.createElement(y.Fragment, null, Oe, /* @__PURE__ */ y.createElement(Th, { page: Y })) : Oe;
  }
);
Xd.displayName = "Link";
var Ve = y.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: v,
    ...C
  }, R) {
    let _ = dl(p, { relative: C.relative }), x = _t(), L = y.useContext(Ua), { navigator: z, basename: D } = y.useContext(dt), E = L != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Bh(_) && h === !0, M = z.encodeLocation ? z.encodeLocation(_).pathname : _.pathname, S = x.pathname, O = L && L.navigation && L.navigation.location ? L.navigation.location.pathname : null;
    s || (S = S.toLowerCase(), O = O ? O.toLowerCase() : null, M = M.toLowerCase()), O && D && (O = Yt(O, D) || O);
    const H = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let Y = S === M || !f && S.startsWith(M) && S.charAt(H) === "/", W = O != null && (O === M || !f && O.startsWith(M) && O.charAt(M.length) === "/"), te = {
      isActive: Y,
      isPending: W,
      isTransitioning: E
    }, ne = Y ? o : void 0, ge;
    typeof c == "function" ? ge = c(te) : ge = [
      c,
      Y ? "active" : null,
      W ? "pending" : null,
      E ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let _e = typeof m == "function" ? m(te) : m;
    return /* @__PURE__ */ y.createElement(
      Xd,
      {
        ...C,
        "aria-current": ne,
        className: ge,
        ref: R,
        style: _e,
        to: p,
        viewTransition: h
      },
      typeof v == "function" ? v(te) : v
    );
  }
);
Ve.displayName = "NavLink";
var zh = y.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: s,
    reloadDocument: c,
    replace: f,
    state: m,
    method: p = La,
    action: h,
    onSubmit: v,
    relative: C,
    preventScrollReset: R,
    viewTransition: _,
    defaultShouldRevalidate: x,
    ...L
  }, z) => {
    let { useTransitions: D } = y.useContext(dt), E = Uh(), M = jh(h, { relative: C }), S = p.toLowerCase() === "get" ? "get" : "post", O = typeof h == "string" && Gd.test(h), H = (Y) => {
      if (v && v(Y), Y.defaultPrevented) return;
      Y.preventDefault();
      let W = Y.nativeEvent.submitter, te = (W == null ? void 0 : W.getAttribute("formmethod")) || p, ne = () => E(W || Y.currentTarget, {
        fetcherKey: o,
        method: te,
        navigate: s,
        replace: f,
        state: m,
        relative: C,
        preventScrollReset: R,
        viewTransition: _,
        defaultShouldRevalidate: x
      });
      D && s !== !1 ? y.startTransition(() => ne()) : ne();
    };
    return /* @__PURE__ */ y.createElement(
      "form",
      {
        ref: z,
        method: S,
        action: M,
        onSubmit: c ? v : H,
        ...L,
        "data-discover": !O && l === "render" ? "true" : void 0
      }
    );
  }
);
zh.displayName = "Form";
function $h(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jd(l) {
  let o = y.useContext(fr);
  return Te(o, $h(l)), o;
}
function Oh(l, {
  target: o,
  replace: s,
  mask: c,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: v,
  useTransitions: C
} = {}) {
  let R = pr(), _ = _t(), x = dl(l, { relative: p });
  return y.useCallback(
    (L) => {
      if (ph(L, o)) {
        L.preventDefault();
        let z = s !== void 0 ? s : ul(_) === ul(x), D = () => R(l, {
          replace: z,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: v
        });
        C ? y.startTransition(() => D()) : D();
      }
    },
    [
      _,
      R,
      x,
      s,
      c,
      f,
      o,
      l,
      m,
      p,
      h,
      v,
      C
    ]
  );
}
var Fh = 0, Ah = () => `__${String(++Fh)}__`;
function Uh() {
  let { router: l } = Jd(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = y.useContext(dt), s = lh(), c = l.fetch, f = l.navigate;
  return y.useCallback(
    async (m, p = {}) => {
      let { action: h, method: v, encType: C, formData: R, body: _ } = yh(
        m,
        o
      );
      if (p.navigate === !1) {
        let x = p.fetcherKey || Ah();
        await c(x, s, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: R,
          body: _,
          formMethod: p.method || v,
          formEncType: p.encType || C,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: R,
          body: _,
          formMethod: p.method || v,
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
function jh(l, { relative: o } = {}) {
  let { basename: s } = y.useContext(dt), c = y.useContext(At);
  Te(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...dl(l || ".", { relative: o }) }, p = _t();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), v = h.getAll("index");
    if (v.some((R) => R === "")) {
      h.delete("index"), v.filter((_) => _).forEach((_) => h.append("index", _));
      let R = h.toString();
      m.search = R ? `?${R}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (m.pathname = m.pathname === "/" ? s : Rt([s, m.pathname])), ul(m);
}
function Bh(l, { relative: o } = {}) {
  let s = y.useContext(Wd);
  Te(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Jd(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = dl(l, { relative: o });
  if (!s.isTransitioning)
    return !1;
  let m = Yt(s.currentLocation.pathname, c) || s.currentLocation.pathname, p = Yt(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Da(f.pathname, p) != null || Da(f.pathname, m) != null;
}
var Zi = /* @__PURE__ */ new Map(), Ta = /* @__PURE__ */ new WeakMap(), yd = 0, Wh;
function Vh(l) {
  return l ? (Ta.has(l) || (yd += 1, Ta.set(l, yd.toString())), Ta.get(l)) : "0";
}
function Hh(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? Vh(l.root) : l[o]}`).toString();
}
function bh(l) {
  const o = Hh(l);
  let s = Zi.get(o);
  if (!s) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var v;
        const C = h.isIntersecting && f.some((R) => h.intersectionRatio >= R);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = C), [...(v = c.get(h.target)) != null ? v : []].forEach((R) => {
          R(C, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), s = {
      id: o,
      observer: m,
      elements: c
    }, Zi.set(o, s);
  }
  return s;
}
function Qh(l, o, s = {}, c = Wh) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const v = l.getBoundingClientRect();
    return o(c, {
      isIntersecting: c,
      target: l,
      intersectionRatio: typeof s.threshold == "number" ? s.threshold : 0,
      time: 0,
      boundingClientRect: v,
      intersectionRect: v,
      rootBounds: v
    }), () => {
    };
  }
  const { id: f, observer: m, elements: p } = bh(s), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), Zi.delete(f));
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
  fallbackInView: v,
  onChange: C
} = {}) {
  var R;
  const [_, x] = y.useState(null), L = y.useRef(C), z = y.useRef(h), [D, E] = y.useState({
    inView: !!h,
    entry: void 0
  });
  L.current = C, y.useEffect(
    () => {
      if (z.current === void 0 && (z.current = h), p || !_) return;
      let H;
      return H = Qh(
        _,
        (Y, W) => {
          const te = z.current;
          z.current = Y, !(te === void 0 && !Y) && (E({
            inView: Y,
            entry: W
          }), L.current && L.current(Y, W), W.isIntersecting && m && H && (H(), H = void 0));
        },
        {
          root: f,
          rootMargin: c,
          threshold: l,
          // @ts-expect-error
          trackVisibility: s,
          delay: o
        },
        v
      ), () => {
        H && H();
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
      v,
      o
    ]
  );
  const M = (R = D.entry) == null ? void 0 : R.target, S = y.useRef(void 0);
  !_ && M && !m && !p && S.current !== M && (S.current = M, E({
    inView: !!h,
    entry: void 0
  }), z.current = h);
  const O = [x, D.inView, D.entry];
  return O.ref = O[0], O.inView = O[1], O.entry = O[2], O;
}
const Et = (l = 768) => {
  const [o, s] = y.useState(
    window.innerWidth <= l
  );
  return y.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      s(m.matches);
    };
    return s(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
  }, [l]), o;
}, Zd = y.createContext(null);
function fl() {
  const l = y.useContext(Zd);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
const Yh = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function Kh() {
  const l = fl(), [o, s] = y.useState(!0), [c, f] = y.useState(null), m = y.useRef(!1), p = y.useCallback(
    async (x = 1, L = !1) => {
      s(!0);
      try {
        const z = Yh(
          await l._getShort(
            "get_script_actions_short",
            x
          )
        );
        f((D) => !L || !D ? z : {
          ...z,
          script_actions: [
            ...D.script_actions,
            ...z.script_actions
          ]
        });
      } finally {
        s(!1);
      }
    },
    [l]
  );
  return y.useEffect(() => {
    m.current || (m.current = !0, p());
  }, [p]), {
    loading: o,
    scripts: c,
    loadScripts: p,
    scriptData: () => l.getScripts(),
    saveScript: async (x) => {
      await l._save(x, "save_script_action"), await p(1);
    },
    updateScript: async (x, L) => {
      await l._update(x, "update_script_action", L), await p(1);
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
const qh = "_subtitle_g5b3f_1", Gh = "_card_g5b3f_6", Xh = "_content_g5b3f_50", Jh = "_title_g5b3f_58", Zh = "_arrow_g5b3f_64", al = {
  subtitle: qh,
  card: Gh,
  content: Xh,
  title: Jh,
  arrow: Zh
}, vr = ({
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
), ev = "_button_2udlt_1", tv = "_full_2udlt_32", nv = "_primary_2udlt_37", rv = "_secondary_2udlt_50", lv = "_ghost_2udlt_62", Vi = {
  button: ev,
  full: tv,
  primary: nv,
  secondary: rv,
  ghost: lv
}, oe = ({
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
), av = "_pagination_1hg7e_1", ov = "_button_1hg7e_9", iv = "_label_1hg7e_33", Ra = {
  pagination: av,
  button: ov,
  label: iv
}, yr = ({
  page: l,
  totalPages: o,
  onChange: s
}) => o <= 1 ? null : /* @__PURE__ */ u.createElement("div", { className: Ra.pagination }, /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ra.button,
    disabled: l === 1,
    onClick: () => s(l - 1)
  },
  "Назад"
), /* @__PURE__ */ u.createElement("span", { className: Ra.label }, l, " / ", o), /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Ra.button,
    disabled: l === o,
    onClick: () => s(l + 1)
  },
  "Вперёд"
)), sv = "_overlay_49s9e_1", uv = "_modal_49s9e_13", cv = "_sm_49s9e_27", dv = "_md_49s9e_31", fv = "_lg_49s9e_35", mv = "_xl_49s9e_39", pv = "_header_49s9e_43", hv = "_title_49s9e_53", vv = "_body_49s9e_60", yv = "_footer_49s9e_67", gv = "_close_49s9e_77", yn = {
  overlay: sv,
  modal: uv,
  sm: cv,
  md: dv,
  lg: fv,
  xl: mv,
  header: pv,
  title: hv,
  body: vv,
  footer: yv,
  close: gv
}, Kt = ({
  open: l,
  onClose: o,
  title: s,
  footer: c,
  children: f,
  size: m = "md"
}) => (y.useEffect(() => {
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
      oe,
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
) : null), _v = "_overlay_w83z1_1", Ev = "_sheet_w83z1_11", wv = "_handle_w83z1_21", zn = {
  overlay: _v,
  sheet: Ev,
  handle: wv
}, ef = ({
  open: l,
  onClose: o,
  children: s
}) => {
  const [c, f] = y.useState(l), [m, p] = y.useState(l), h = y.useRef(0), v = y.useRef(0), [C, R] = y.useState(0);
  y.useEffect(() => {
    if (l)
      f(!0), requestAnimationFrame(() => {
        p(!0);
      }), document.body.style.overflow = "hidden";
    else {
      p(!1);
      const z = setTimeout(() => {
        f(!1);
      }, 300);
      return document.body.style.overflow = "", () => clearTimeout(z);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [l]);
  const _ = (z) => {
    h.current = z.touches[0].clientY;
  }, x = (z) => {
    v.current = z.touches[0].clientY;
    const D = v.current - h.current;
    D > 0 && R(D);
  }, L = () => {
    C > 120 && o(), R(0);
  };
  return y.useEffect(() => {
    const z = (D) => {
      D.key === "Escape" && o();
    };
    return l && window.addEventListener(
      "keydown",
      z
    ), () => {
      window.removeEventListener(
        "keydown",
        z
      );
    };
  }, [l, o]), c ? /* @__PURE__ */ u.createElement(
    "div",
    {
      className: `${zn.overlay} ${m ? zn.visible : ""}`,
      onClick: o
    },
    /* @__PURE__ */ u.createElement(
      "section",
      {
        className: `${zn.sheet} ${m ? zn.open : ""}`,
        style: {
          transform: `translateY(${C}px)`,
          transition: C === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
        },
        onClick: (z) => z.stopPropagation(),
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ u.createElement(
        "div",
        {
          className: zn.handleArea,
          onTouchStart: _,
          onTouchMove: x,
          onTouchEnd: L
        },
        /* @__PURE__ */ u.createElement("div", { className: zn.handle })
      ),
      /* @__PURE__ */ u.createElement("div", { className: zn.content }, s)
    )
  ) : null;
}, kv = "_content_1p38v_1", Sv = "_title_1p38v_7", Cv = "_actions_1p38v_14", Hi = {
  content: kv,
  title: Sv,
  actions: Cv
}, Nv = ({
  uuid: l,
  open: o,
  title: s,
  onClose: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = Et();
  if (!l) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Hi.content }, /* @__PURE__ */ u.createElement("h3", { className: Hi.title }, s), /* @__PURE__ */ u.createElement("div", { className: Hi.actions }, /* @__PURE__ */ u.createElement(
    oe,
    {
      fullWidth: !0,
      onClick: () => {
        f(l), c();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ u.createElement(
    oe,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(l), c();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(ef, { open: o, onClose: c }, h) : /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: o,
      onClose: c,
      title: "Действия",
      size: "sm"
    },
    h
  ));
}, xv = "_accordion_1wwmk_1", Tv = "_header_1wwmk_7", Rv = "_content_1wwmk_20", Pa = {
  accordion: xv,
  header: Tv,
  content: Rv
}, Ft = ({
  title: l,
  defaultOpen: o = !1,
  children: s
}) => {
  const [c, f] = y.useState(o);
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      className: Pa.accordion,
      "data-open": c
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Pa.header,
        onClick: () => f((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ u.createElement("span", null, l),
      /* @__PURE__ */ u.createElement("span", { className: Pa.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ u.createElement("div", { className: Pa.content }, s)
  );
}, Pv = "_field_1bvbf_1", Mv = "_label_1bvbf_8", Lv = "_inputWrapper_1bvbf_16", Iv = "_input_1bvbf_16", Dv = "_passwordInput_1bvbf_34", zv = "_passwordToggle_1bvbf_60", $v = "_error_1bvbf_89", Ov = "_errorText_1bvbf_102", gn = {
  field: Pv,
  label: Mv,
  inputWrapper: Lv,
  input: Iv,
  passwordInput: Dv,
  passwordToggle: zv,
  error: $v,
  errorText: Ov
}, ke = ({
  label: l,
  error: o,
  disabled: s,
  className: c = "",
  id: f,
  type: m,
  ...p
}) => {
  const h = y.useId(), [v, C] = y.useState(!1), R = f ?? h, _ = m === "password" && v ? "text" : m;
  return /* @__PURE__ */ u.createElement("div", { className: gn.field }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: R,
      className: gn.label
    },
    l
  ), /* @__PURE__ */ u.createElement("div", { className: gn.inputWrapper }, /* @__PURE__ */ u.createElement(
    "input",
    {
      id: R,
      disabled: s,
      type: _,
      ...p,
      className: `
            ${gn.input}
            ${m === "password" ? gn.passwordInput : ""}
            ${o ? gn.error : ""}
            ${c}
          `
    }
  ), m === "password" && /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: gn.passwordToggle,
      onClick: () => C((x) => !x),
      disabled: s,
      "aria-label": v ? "Hide password" : "Show password"
    },
    v ? "🙈" : "👁"
  )), o && /* @__PURE__ */ u.createElement("span", { className: gn.errorText }, o));
}, Fv = "_wrapper_1oxcb_1", Av = "_labelRow_1oxcb_7", Uv = "_label_1oxcb_7", jv = "_selectedTitle_1oxcb_26", Bv = "_dropdown_1oxcb_35", Wv = "_option_1oxcb_50", Vv = "_title_1oxcb_72", Hv = "_uuid_1oxcb_77", bv = "_hint_1oxcb_78", $t = {
  wrapper: Fv,
  labelRow: Av,
  label: Uv,
  selectedTitle: jv,
  dropdown: Bv,
  option: Wv,
  title: Vv,
  uuid: Hv,
  hint: bv
}, dr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: s,
  searchSource: c = ["assistant_commands"],
  minQueryLength: f = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: v
}) => {
  const C = fl(), [R, _] = y.useState([]), [x, L] = y.useState(!1), [z, D] = y.useState(!1), [E, M] = y.useState(!1), S = y.useRef(0), O = y.useRef(""), H = y.useMemo(() => o.trim(), [o]);
  y.useEffect(() => {
    if (!H) {
      O.current = "", _([]), L(!1);
      return;
    }
    if (H.length < f) {
      _([]), L(!1);
      return;
    }
    if (!E || O.current === H)
      return;
    O.current = H;
    const W = S.current + 1;
    S.current = W;
    const te = window.setTimeout(async () => {
      D(!0);
      try {
        let ne = [];
        for (const ge of c) {
          const _e = await C.searchAssistantCommands(H, ge), le = Array.isArray(_e == null ? void 0 : _e.data) ? _e.data : [];
          ne.push(...le);
        }
        if (S.current !== W)
          return;
        _(ne), L(ne.length > 0);
      } finally {
        S.current === W && D(!1);
      }
    }, 250);
    return () => window.clearTimeout(te);
  }, [C, H, c, f, E]);
  const Y = (W) => {
    const te = h ? h(W) : W.uuid;
    m(te), p == null || p(W), L(!1);
  };
  return /* @__PURE__ */ u.createElement("div", { className: $t.wrapper }, /* @__PURE__ */ u.createElement("div", { className: $t.labelRow }, /* @__PURE__ */ u.createElement("span", { className: $t.label }, l), s && /* @__PURE__ */ u.createElement("span", { className: $t.selectedTitle }, s)), /* @__PURE__ */ u.createElement(
    ke,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: v,
      onBlur: () => {
        M(!1), window.setTimeout(() => L(!1), 150);
      },
      onFocus: () => {
        M(!0), L(R.length > 0);
      },
      onChange: (W) => m(W.target.value)
    }
  ), x && /* @__PURE__ */ u.createElement("div", { className: $t.dropdown }, R.map((W) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: W.uuid,
      type: "button",
      className: $t.option,
      onMouseDown: (te) => te.preventDefault(),
      onClick: () => Y(W)
    },
    /* @__PURE__ */ u.createElement("span", { className: $t.title }, W.title || "Без названия"),
    /* @__PURE__ */ u.createElement("span", { className: $t.uuid }, W.uuid),
    W.mappingType && /* @__PURE__ */ u.createElement("span", { className: $t.uuid }, "mappingType: ", W.mappingType)
  ))), z && /* @__PURE__ */ u.createElement("span", { className: $t.hint }, "Поиск..."));
}, Qv = "_field_xxbds_1", Yv = "_row_xxbds_5", Kv = "_inputWrapper_xxbds_11", qv = "_deleteButton_xxbds_15", _n = {
  field: Qv,
  row: Yv,
  inputWrapper: Kv,
  deleteButton: qv
}, Gv = ({
  condition: l,
  index: o,
  defaultOpen: s,
  onChange: c,
  onDelete: f,
  totalCount: m,
  errors: p
}) => {
  const h = l.children_type !== void 0, v = l.children_direct_type !== void 0, C = () => {
    c({
      ...l,
      children_type: void 0
    });
  }, R = () => {
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
        oe,
        {
          type: "button",
          variant: "ghost",
          onClick: C
        },
        "×"
      )
    ) : /* @__PURE__ */ u.createElement(
      oe,
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
    /* @__PURE__ */ u.createElement("div", { className: _n.field }, v ? /* @__PURE__ */ u.createElement(
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
        oe,
        {
          type: "button",
          variant: "ghost",
          onClick: R
        },
        "×"
      )
    ) : /* @__PURE__ */ u.createElement(
      oe,
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
      oe,
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
const tf = (...l) => l.filter((o, s, c) => !!o && o.trim() !== "" && c.indexOf(o) === s).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xv = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, s, c) => c ? c.toUpperCase() : s.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = (l) => {
  const o = Jv(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bi = {
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
const Zv = (l) => {
  for (const o in l)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
  return !1;
}, ey = y.createContext({}), ty = () => y.useContext(ey), ny = y.forwardRef(
  ({ color: l, size: o, strokeWidth: s, absoluteStrokeWidth: c, className: f = "", children: m, iconNode: p, ...h }, v) => {
    const {
      size: C = 24,
      strokeWidth: R = 2,
      absoluteStrokeWidth: _ = !1,
      color: x = "currentColor",
      className: L = ""
    } = ty() ?? {}, z = c ?? _ ? Number(s ?? R) * 24 / Number(o ?? C) : s ?? R;
    return y.createElement(
      "svg",
      {
        ref: v,
        ...bi,
        width: o ?? C ?? bi.width,
        height: o ?? C ?? bi.height,
        stroke: l ?? x,
        strokeWidth: z,
        className: tf("lucide", L, f),
        ...!m && !Zv(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([D, E]) => y.createElement(D, E)),
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
const Pt = (l, o) => {
  const s = y.forwardRef(
    ({ className: c, ...f }, m) => y.createElement(ny, {
      ref: m,
      iconNode: o,
      className: tf(
        `lucide-${Xv(gd(l))}`,
        `lucide-${l}`,
        c
      ),
      ...f
    })
  );
  return s.displayName = gd(l), s;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ry = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], nf = Pt("alarm-clock", ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], ay = Pt("arrow-left", ly);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], ol = Pt("bot", oy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], sy = Pt("chevron-down", iy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], cy = Pt("clock-3", uy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], fy = Pt("command", dy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = [
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
], py = Pt("file-code-corner", my);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], vy = Pt("house", hy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], rf = Pt("settings", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], _y = Pt("timer", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], wy = Pt("workflow", Ey), ky = "_dropdown_x51vc_2", Sy = "_label_x51vc_9", Cy = "_wrapper_x51vc_17", Ny = "_select_x51vc_21", xy = "_arrow_x51vc_61", Ty = "_error_x51vc_81", Ry = "_errorText_x51vc_99", $n = {
  dropdown: ky,
  label: Sy,
  wrapper: Cy,
  select: Ny,
  arrow: xy,
  error: Ty,
  errorText: Ry
};
function Py({
  label: l,
  options: o,
  value: s = "",
  placeholder: c = "Выберите",
  error: f,
  onSelect: m
}) {
  const p = y.useId();
  return /* @__PURE__ */ u.createElement("div", { className: $n.dropdown }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: p,
      className: $n.label
    },
    l
  ), /* @__PURE__ */ u.createElement("div", { className: $n.wrapper }, /* @__PURE__ */ u.createElement(
    "select",
    {
      id: p,
      className: `
            ${$n.select}
            ${f ? $n.error : ""}
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
    sy,
    {
      size: 18,
      className: $n.arrow
    }
  )), f && /* @__PURE__ */ u.createElement("span", { className: $n.errorText }, f));
}
const My = "_form_xh0jo_1", Ly = "_section_xh0jo_7", Iy = "_sectionTitle_xh0jo_18", Dy = "_conditions_xh0jo_37", zy = "_addCondition_xh0jo_43", cr = {
  form: My,
  section: Ly,
  sectionTitle: Iy,
  conditions: Dy,
  addCondition: zy
}, $y = ({
  open: l,
  initialData: o,
  isOptionData: s,
  isEdit: c = !1,
  loading: f = !1,
  onSave: m,
  onCancel: p
}) => {
  const [h, v] = y.useState({
    uuid: "",
    name: "",
    script_entity_id: "",
    conditions: [
      {
        parent_type: ""
      }
    ]
  }), [C, R] = y.useState({
    conditions: []
  });
  y.useEffect(() => {
    v({
      uuid: (o == null ? void 0 : o.uuid) || "",
      name: (o == null ? void 0 : o.name) || "",
      script_entity_id: (o == null ? void 0 : o.script_entity_id) || "",
      conditions: (o == null ? void 0 : o.conditions) || [
        {
          parent_type: ""
        }
      ]
    }), R({
      conditions: []
    });
  }, [o, l]);
  const _ = (E) => {
    v(E);
  }, x = () => {
    _({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, L = (E, M) => {
    const S = [...h.conditions];
    S[E] = M, _({
      ...h,
      conditions: S
    });
  }, z = (E) => {
    const M = h.conditions.filter(
      (S, O) => O !== E
    );
    _({
      ...h,
      conditions: M.length > 0 ? M : [
        {
          parent_type: ""
        }
      ]
    });
  }, D = () => {
    const E = {
      conditions: []
    };
    return h.name.trim() || (E.name = "Обязательное поле"), h.script_entity_id || (E.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (M, S) => {
        const O = {};
        M.parent_type.trim() || (O.parent_type = "Обязательное поле"), M.children_type !== void 0 && !M.children_type.trim() && (O.children_type = "Обязательное поле"), M.children_direct_type !== void 0 && !M.children_direct_type.trim() && (O.children_direct_type = "Обязательное поле"), E.conditions[S] = O;
      }
    ), R(E), !E.name && !E.script_entity_id && E.conditions.every(
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
        oe,
        {
          disabled: f,
          onClick: () => {
            D() && (m == null || m(h));
          }
        },
        "Сохранить"
      )
    },
    /* @__PURE__ */ u.createElement("div", { className: cr.form }, /* @__PURE__ */ u.createElement("div", { className: cr.section }, /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "Название",
        value: h.name,
        error: C.name,
        onChange: (E) => _({
          ...h,
          name: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Py,
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
        onSelect: (E) => _({
          ...h,
          script_entity_id: E
        })
      }
    )), /* @__PURE__ */ u.createElement("div", { className: cr.section }, /* @__PURE__ */ u.createElement("h3", { className: cr.sectionTitle }, "Условия"), /* @__PURE__ */ u.createElement("div", { className: cr.conditions }, h.conditions.map(
      (E, M, S) => /* @__PURE__ */ u.createElement(
        Gv,
        {
          key: M,
          index: M,
          condition: E,
          defaultOpen: !c,
          errors: C.conditions[M],
          onChange: (O) => L(
            M,
            O
          ),
          onDelete: () => z(M),
          totalCount: S.length
        }
      )
    )), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        className: cr.addCondition,
        onClick: x
      },
      "+ Добавить условие"
    )))
  );
}, Oy = "_header_1m7ok_1", Fy = "_title_1m7ok_15", Ay = "_backButton_1m7ok_22", Uy = "_homeButton_1m7ok_23", Ma = {
  header: Oy,
  title: Fy,
  backButton: Ay,
  homeButton: Uy
}, An = ({
  title: l = ""
}) => {
  const o = pr(), c = _t().pathname.startsWith("/commands"), f = () => {
    o(c ? "/scripts" : "/");
  };
  return /* @__PURE__ */ u.createElement("header", { className: Ma.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: Ma.backButton,
      onClick: f
    },
    /* @__PURE__ */ u.createElement(ay, { size: 18 })
  ), /* @__PURE__ */ u.createElement("h1", { className: Ma.title }, l), /* @__PURE__ */ u.createElement(
    "button",
    {
      className: Ma.homeButton,
      onClick: () => o("/scripts")
    },
    /* @__PURE__ */ u.createElement(vy, { size: 18 })
  ));
}, jy = "_tabs_17nxl_1", By = "_dropdown_17nxl_14", Wy = "_tab_17nxl_1", Vy = "_active_17nxl_43", Hy = "_menu_17nxl_53", by = "_menuItem_17nxl_80", he = {
  tabs: jy,
  dropdown: By,
  tab: Wy,
  active: Vy,
  menu: Hy,
  menuItem: by
}, qt = () => {
  if (!Et())
    return /* @__PURE__ */ u.createElement("div", { className: he.tabs }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${he.tab} ${he.active}` : he.tab
      },
      /* @__PURE__ */ u.createElement(py, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ u.createElement("div", { className: he.dropdown }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${he.tab} ${he.active}` : he.tab
      },
      /* @__PURE__ */ u.createElement(fy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Команды")
    ), /* @__PURE__ */ u.createElement("div", { className: he.menu }, /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${he.menuItem} ${he.active}` : he.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${he.menuItem} ${he.active}` : he.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${he.menuItem} ${he.active}` : he.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${he.menuItem} ${he.active}` : he.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${he.tab} ${he.active}` : he.tab
      },
      /* @__PURE__ */ u.createElement(_y, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${he.tab} ${he.active}` : he.tab
      },
      /* @__PURE__ */ u.createElement(nf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ u.createElement(
      Ve,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${he.tab} ${he.active}` : he.tab
      },
      /* @__PURE__ */ u.createElement(rf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Настройки")
    ));
}, Qy = "_nav_gn5m2_1", _d = {
  nav: Qy
}, Gt = () => {
  const l = _t(), o = pr(), [s, c] = y.useState(
    l.pathname.startsWith("/commands")
  );
  return s ? /* @__PURE__ */ u.createElement("nav", { className: _d.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/commands/main" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Основные")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/sub" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Второстепенные")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/direct/main" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Прямые")), /* @__PURE__ */ u.createElement(Ve, { to: "/commands/settings" }, /* @__PURE__ */ u.createElement(ol, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки"))) : /* @__PURE__ */ u.createElement("nav", { className: _d.nav }, /* @__PURE__ */ u.createElement(Ve, { to: "/scripts" }, /* @__PURE__ */ u.createElement(wy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Скрипты")), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ u.createElement(ol, { size: 20 }),
    /* @__PURE__ */ u.createElement("span", null, "Команды")
  ), /* @__PURE__ */ u.createElement(Ve, { to: "/timer" }, /* @__PURE__ */ u.createElement(cy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Таймер")), /* @__PURE__ */ u.createElement(Ve, { to: "/alarm" }, /* @__PURE__ */ u.createElement(nf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Будильник")), /* @__PURE__ */ u.createElement(Ve, { to: "/settings" }, /* @__PURE__ */ u.createElement(rf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки")));
}, Yy = "_container_99wio_1", Ky = "_visible_99wio_20", Ed = {
  container: Yy,
  visible: Ky
}, gr = ({
  children: l,
  offset: o = 100
}) => {
  const [s, c] = y.useState(!1);
  return y.useEffect(() => {
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
      className: `${Ed.container} ${s ? Ed.visible : ""}`
    },
    l
  );
}, qy = "_page_1pugo_7", Gy = "_header_1pugo_15", Xy = "_headerTop_1pugo_20", Jy = "_heading_1pugo_27", Zy = "_title_1pugo_32", eg = "_description_1pugo_41", tg = "_actions_1pugo_48", ng = "_list_1pugo_75", rg = "_state_1pugo_84", $ = {
  page: qy,
  header: Gy,
  headerTop: Xy,
  heading: Jy,
  title: Zy,
  description: eg,
  actions: tg,
  list: ng,
  state: rg
}, lg = () => {
  const l = Et(), { ref: o, inView: s } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = y.useState(), [m, p] = y.useState(!1), [h, v] = y.useState(!1), [C, R] = y.useState({}), [_, x] = y.useState(!1), [L, z] = y.useState(!1), {
    loading: D,
    scripts: E,
    scriptData: M,
    loadScripts: S,
    saveScript: O,
    updateScript: H,
    getScriptAction: Y,
    deleteScriptAction: W
  } = Kh();
  y.useEffect(() => {
    !L || !l || !s || D || !E || E.page >= E.total_pages || S(E.page + 1, !0);
  }, [
    s,
    l,
    D,
    E,
    S
  ]), y.useEffect(() => {
    !D && E && E.page === 1 && z(!0);
  }, [D, E]);
  const te = () => {
    f(void 0), x(!1), p(!0);
  }, ne = (ie) => {
    v(!0), R(ie);
  }, ge = async (ie) => {
    x(!0);
    const Re = await Y(
      ie
    );
    f(Re), p(!0);
  }, _e = async (ie) => {
    if (_) {
      if (!ie.uuid) return;
      const { uuid: Re, ...Oe } = ie;
      await H(ie.uuid, Oe);
    } else
      await O(ie);
    p(!1);
  }, le = async (ie) => {
    ie && await W(ie);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, D && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Скрипты"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", { className: $.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Сценарии"), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: $.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    oe,
    {
      variant: "primary",
      onClick: te
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    oe,
    {
      variant: "primary",
      onClick: te
    },
    "🞢 Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: $.list }, E == null ? void 0 : E.script_actions.map((ie) => /* @__PURE__ */ u.createElement(
    vr,
    {
      key: ie.uuid,
      title: ie.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => ne(ie)
    }
  )), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(u.Fragment, null)), l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (E == null ? void 0 : E.page) || 1,
      totalPages: (E == null ? void 0 : E.total_pages) || 1,
      onChange: S
    }
  ), /* @__PURE__ */ u.createElement(
    Nv,
    {
      uuid: C.uuid,
      open: h,
      title: C.title,
      onClose: () => v(!1),
      onEdit: ge,
      onDelete: le
    }
  ), /* @__PURE__ */ u.createElement(
    $y,
    {
      open: m,
      initialData: c,
      isEdit: _,
      isOptionData: M(),
      loading: D,
      onCancel: () => p(!1),
      onSave: async (ie) => {
        await _e(ie);
      }
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, ag = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function ml(l) {
  const o = fl(), [s, c] = y.useState(null), [f, m] = y.useState(!0), p = y.useRef(!1), h = async (L, z = 1, D = !1) => {
    m(!0);
    try {
      const E = ag(await o._getShort(`${L}`, z));
      c((M) => !D || !M ? E : {
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
  return y.useEffect(() => {
    p.current || (p.current = !0, h(l));
  }, [h]), {
    loading: f,
    commands: s,
    loadCommands: h,
    saveCommand: async (L, z) => await o._save(z, L),
    deleteCommand: async (L, z) => await o._delete(z, L),
    updateCommand: async (L, z) => {
      if (console.log(z), !z.uuid) return;
      const { uuid: D, ...E } = z;
      return await o._update(D, L, E);
    },
    editStatusCommand: async (L, z, D) => await o._update_status(L, z, D),
    detailInformationCommand: async (L, z) => await o._getDetail(z, L)
  };
}
const og = "_field_1qtfn_1", ig = "_label_1qtfn_7", sg = "_select_1qtfn_13", Qi = {
  field: og,
  label: ig,
  select: sg
}, es = ({
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
}, ug = "_switchRow_1lfy8_1", cg = "_input_1lfy8_11", dg = "_track_1lfy8_22", fg = "_thumb_1lfy8_33", mg = "_label_1lfy8_62", il = {
  switchRow: ug,
  input: cg,
  track: dg,
  thumb: fg,
  label: mg
}, En = ({ label: l, className: o = "", ...s }) => /* @__PURE__ */ u.createElement("label", { className: `${il.switchRow} ${o}` }, /* @__PURE__ */ u.createElement("input", { ...s, type: "checkbox", className: il.input }), /* @__PURE__ */ u.createElement("span", { className: il.track, "aria-hidden": "true" }, /* @__PURE__ */ u.createElement("span", { className: il.thumb })), /* @__PURE__ */ u.createElement("span", { className: il.label }, l)), pg = "_field_veq7g_1", hg = "_label_veq7g_7", vg = "_textarea_veq7g_13", yg = "_error_veq7g_40", gg = "_errorText_veq7g_48", sl = {
  field: pg,
  label: hg,
  textarea: vg,
  error: yg,
  errorText: gg
}, $a = ({
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
), o && /* @__PURE__ */ u.createElement("span", { className: sl.errorText }, o)), _g = [
  { label: "default", value: "default" },
  { label: "ha_storage", value: "ha_storage" }
], Eg = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], wg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" }
], kg = "_form_nymr0_1", Sg = "_field_nymr0_15", Cg = "_textarea_nymr0_24", Ng = "_arrayItem_nymr0_37", Ot = {
  form: kg,
  field: Sg,
  textarea: Cg,
  arrayItem: Ng
}, wd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), lf = ({
  open: l,
  isEdit: o,
  formData: s,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const v = y.useMemo(() => {
    if (s[c]) return s[c] ?? wd();
  }, [s]), [C, R] = y.useState({}), _ = (E) => {
    f((M) => ({
      ...M,
      [c]: {
        ...M[c] ?? wd(),
        ...E
      }
    }));
  }, x = (E, M, S) => {
    const O = [...v[E] ?? []];
    O[M] = { ...O[M], ...S }, _({
      [E]: O
    });
  }, L = (E, M) => {
    _({
      [E]: [...v[E] ?? [], M]
    });
  }, z = (E, M) => {
    _({
      [E]: (v[E] ?? []).filter(
        (S, O) => O !== M
      )
    });
  }, D = () => {
    var S;
    const E = {};
    return s.title.trim() || (E.title = "Обязательное поле"), (S = v.actionType) != null && S.trim() || (E.actionType = "Обязательное поле"), R(E), Object.keys(E).length === 0;
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(
        oe,
        {
          onClick: () => {
            D() && (o ? h() : p());
          }
        },
        o ? "Обновить" : "Сохранить"
      )
    },
    /* @__PURE__ */ u.createElement("div", { className: Ot.form }, /* @__PURE__ */ u.createElement(
      ke,
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
      En,
      {
        label: "Завершать диалог",
        checked: v.endStatus,
        onChange: (E) => _({
          endStatus: E.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement(
      En,
      {
        label: "Отправить команду как есть",
        checked: v.forwardText,
        onChange: (E) => _({
          forwardText: E.target.checked
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "actionType",
        value: v.actionType ?? "",
        error: C.actionType,
        onChange: (E) => _({
          actionType: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      es,
      {
        label: "answerType",
        value: v.answerType,
        options: _g,
        onChange: (E) => _({
          answerType: E.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: Ot.field }, /* @__PURE__ */ u.createElement(
      $a,
      {
        label: "voiceCommands",
        value: (v.voiceCommands == null ? [] : typeof v.voiceCommands != "object" ? v == null ? void 0 : v.voiceCommands.split(";") : v == null ? void 0 : v.voiceCommands).join(`
`),
        onChange: (E) => _({
          voiceCommands: E.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(Ft, { title: "voiceResponseArray", defaultOpen: !0 }, (v.voiceResponseArray ?? []).map((E, M) => /* @__PURE__ */ u.createElement("div", { key: M, className: Ot.arrayItem }, /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "actionType",
        value: E.actionType,
        onChange: (S) => x("voiceResponseArray", M, {
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      $a,
      {
        label: "voiceResponse",
        value: E.voiceResponse,
        onChange: (S) => x("voiceResponseArray", M, {
          voiceResponse: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        variant: "ghost",
        onClick: () => z("voiceResponseArray", M)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        variant: "secondary",
        onClick: () => L("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(Ft, { title: "nextAction", defaultOpen: !0 }, (v.nextAction ?? []).map((E, M) => /* @__PURE__ */ u.createElement("div", { key: M, className: Ot.arrayItem }, /* @__PURE__ */ u.createElement(
      es,
      {
        label: "actionTypeComponent",
        value: E.actionTypeComponent,
        options: wg,
        onChange: (S) => x("nextAction", M, {
          actionTypeComponent: S.target.value
        })
      }
    ), E.actionTypeComponent == "custom" ? /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "actionType",
        value: E.actionType ?? "",
        onChange: (S) => x("nextAction", M, {
          actionType: S.target.value
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
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
          title: S.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        variant: "ghost",
        onClick: () => z("nextAction", M)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        variant: "secondary",
        onClick: () => L("nextAction", {
          actionTypeComponent: "",
          actionType: "",
          uuid: "",
          title: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ u.createElement(Ft, { title: "nextDirectControl", defaultOpen: !0 }, (v.nextDirectControl ?? []).map((E, M) => /* @__PURE__ */ u.createElement("div", { key: M, className: Ot.arrayItem }, /* @__PURE__ */ u.createElement(
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
      ke,
      {
        label: "mappingType",
        disabled: !0,
        value: E.mappingType ?? "",
        onChange: (S) => x("nextDirectControl", M, {
          actionType: S.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        variant: "ghost",
        onClick: () => z("nextDirectControl", M)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
      oe,
      {
        type: "button",
        variant: "secondary",
        onClick: () => L("nextDirectControl", {
          uuid: "",
          actionType: "",
          title: ""
        })
      },
      "Добавить ещё"
    )))
  );
}, xg = "_content_19r5a_1", Tg = "_title_19r5a_7", Rg = "_actions_19r5a_14", Yi = {
  content: xg,
  title: Tg,
  actions: Rg
}, Ba = ({
  open: l,
  command: o,
  onClose: s,
  onToggleStatus: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = Et();
  if (!o) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Yi.content }, /* @__PURE__ */ u.createElement("h3", { className: Yi.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: Yi.actions }, /* @__PURE__ */ u.createElement(
    oe,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), s();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ u.createElement(
    oe,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        f(o.uuid), s();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ u.createElement(
    oe,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o.uuid), s();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(ef, { open: l, onClose: s }, h) : /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: s,
      title: "Действия"
    },
    h
  ));
}, Pg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), kd = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...Pg(),
    forwardText: !1
  }
}), Mg = () => {
  const l = Et(), [o, s] = y.useState(!1), [c, f] = y.useState(!1), [m, p] = y.useState(
    () => kd()
  ), [h, v] = y.useState(
    null
  ), { ref: C, inView: R } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: x,
    deleteCommand: L,
    detailInformationCommand: z,
    saveCommand: D,
    updateCommand: E,
    editStatusCommand: M,
    commands: S
  } = ml("get_assistant_commands_short"), [O, H] = y.useState(!1);
  y.useEffect(() => {
    !O || !l || !R || _ || !S || S.page >= S.total_pages || x("get_assistant_commands_short", S.page + 1, !0);
  }, [R, l, _, S, x]), y.useEffect(() => {
    !_ && S && S.page === 1 && H(!0);
  }, [_, S]);
  const Y = () => {
    f(!1), p(kd()), s(!0);
  }, W = async (le) => {
    f(!0);
    const ie = await z(
      "get_assistant_command",
      le
    );
    p(ie.data), s(!0);
  }, te = async (le, ie) => {
    console.log(le, ie), await M(
      "update_assistant_command_status",
      le,
      ie
    ), x("get_assistant_commands_short");
  }, ne = async (le) => {
    await L("delete_assistant_command", le), x("get_assistant_commands_short");
  }, ge = async () => {
    await D("save_assistant_command", m), s(!1);
  }, _e = async () => {
    await E("update_assistant_command", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, _ && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Комманды"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", { className: $.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Комманды"), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: $.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: Y }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: Y }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: $.list }, S == null ? void 0 : S.data.map((le) => /* @__PURE__ */ u.createElement(
    vr,
    {
      key: le.uuid,
      title: le.title,
      subTitle: le.status === !1 ? "Выключена" : "Включена",
      onClick: () => v(le)
    }
  )), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(u.Fragment, null)), l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (S == null ? void 0 : S.page) || 1,
      totalPages: (S == null ? void 0 : S.total_pages) || 1,
      onChange: (le) => x("get_assistant_commands_short", le)
    }
  ), /* @__PURE__ */ u.createElement(
    lf,
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
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!h,
      command: h,
      onClose: () => v(null),
      onToggleStatus: te,
      onDelete: ne,
      onEdit: (le) => W(le)
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Lg = () => ({
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
    ...Lg(),
    forwardText: !1
  }
}), Ig = () => {
  const l = Et(), [o, s] = y.useState(!1), [c, f] = y.useState(!1), [m, p] = y.useState(() => Sd()), [h, v] = y.useState(null), { ref: C, inView: R } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: x,
    deleteCommand: L,
    detailInformationCommand: z,
    saveCommand: D,
    updateCommand: E,
    editStatusCommand: M,
    commands: S
  } = ml("get_assistant_sub_commands_short"), [O, H] = y.useState(!1);
  y.useEffect(() => {
    !O || !l || !R || _ || !S || S.page >= S.total_pages || x("get_assistant_sub_commands_short", S.page + 1, !0);
  }, [
    R,
    l,
    _,
    S,
    x
  ]), y.useEffect(() => {
    !_ && S && S.page === 1 && H(!0);
  }, [_, S]);
  const Y = () => {
    f(!1), p(Sd()), s(!0);
  }, W = async (le) => {
    f(!0);
    const ie = await z("get_assistant_sub_command", le);
    p(ie.data), s(!0);
  }, te = async (le, ie) => {
    await M("update_assistant_sub_command_status", le, ie), x("get_assistant_sub_commands_short");
  }, ne = async (le) => {
    await L("delete_assistant_sub_command", le), x("get_assistant_sub_commands_short");
  }, ge = async () => {
    await D("save_assistant_sub_command", m), s(!1);
  }, _e = async () => {
    await E("update_assistant_sub_command_status", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Второстепенные команды"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), _ && /* @__PURE__ */ u.createElement("div", { className: $.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", { className: $.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Второстепенные команды "), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: $.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: Y }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: Y }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: $.list }, S == null ? void 0 : S.data.map((le) => /* @__PURE__ */ u.createElement(
    vr,
    {
      key: le.uuid,
      title: le.title,
      subTitle: le.status === !1 ? "Выключена" : "Включена",
      onClick: () => v(le)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: C, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (S == null ? void 0 : S.page) || 1,
      totalPages: (S == null ? void 0 : S.total_pages) || 1,
      onChange: (le) => x("get_assistant_sub_commands_short", le)
    }
  ), /* @__PURE__ */ u.createElement(
    lf,
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
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!h,
      command: h,
      onClose: () => v(null),
      onToggleStatus: te,
      onDelete: ne,
      onEdit: (le) => W(le)
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Cd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Dg = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = y.useMemo(() => c.directControl ?? Cd(), [c]), h = (_) => {
    f((x) => ({
      ...x,
      directControl: {
        ...x.directControl ?? Cd(),
        ..._
      }
    }));
  }, v = (_, x) => {
    const L = [...p.subDirectControl ?? []];
    L[_] = {
      ...L[_],
      ...x
    }, h({
      subDirectControl: L
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
  }, R = (_) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((x, L) => L !== _)
    });
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(oe, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ u.createElement("div", { className: Ot.form }, /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((x) => ({
          ...x,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      es,
      {
        label: "valueType",
        value: p.valueType,
        options: Eg,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), p.valueType == "command" ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", { className: Ot.field }, /* @__PURE__ */ u.createElement(
      $a,
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
      En,
      {
        label: "manual",
        checked: p.manual,
        onChange: (_) => h({
          manual: _.target.checked,
          subDirectControl: _.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ u.createElement(Ft, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, x) => /* @__PURE__ */ u.createElement("div", { key: x, className: Ot.arrayItem }, /* @__PURE__ */ u.createElement(
        ke,
        {
          label: "subMappingType",
          value: _.subMappingType,
          onChange: (L) => v(x, {
            subMappingType: L.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: Ot.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: Ot.textarea,
          rows: 3,
          value: _.subVoiceCommands,
          onChange: (L) => v(x, {
            subVoiceCommands: L.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        oe,
        {
          type: "button",
          variant: "ghost",
          onClick: () => R(x)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ u.createElement(
      oe,
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
        searchSource: ["search_assistant_sub_direct_control_samples"],
        onChange: (_) => h({
          subDirectControl: _
        }),
        onSelect: (_) => h({
          subDirectControl: _.uuid,
          subDirectControlTitle: _.title ?? ""
        })
      }
    ), " ") : /* @__PURE__ */ u.createElement(u.Fragment, null))
  );
}, Nd = () => ({
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
}), zg = () => {
  const l = Et(), [o, s] = y.useState(!1), [c, f] = y.useState(!1), [m, p] = y.useState(() => Nd()), [h, v] = y.useState(null), C = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [R, _] = y.useState("main"), x = pr(), { ref: L, inView: z } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: D,
    loadCommands: E,
    deleteCommand: M,
    detailInformationCommand: S,
    saveCommand: O,
    updateCommand: H,
    editStatusCommand: Y,
    commands: W
  } = ml("get_assistant_sub_direct_controls_short"), [te, ne] = y.useState(!1);
  y.useEffect(() => {
    !te || !l || !z || D || !W || W.page >= W.total_pages || E("get_assistant_sub_direct_controls_short", W.page + 1, !0);
  }, [
    z,
    l,
    D,
    W,
    E
  ]), y.useEffect(() => {
    !D && W && W.page === 1 && ne(!0);
  }, [D, W]);
  const ge = () => {
    f(!1), p(Nd()), s(!0);
  }, _e = async (X) => {
    f(!0);
    const Le = await S("get_assistant_sub_direct_control", X);
    p(Le.data), s(!0);
  }, le = async (X, Le) => {
    await Y("update_assistant_sub_direct_controls_status", X, Le), E("get_assistant_sub_direct_controls_short");
  }, ie = async (X) => {
    await M("delete_assistant_sub_direct_control", X), E("get_assistant_sub_direct_controls_short");
  }, Re = async () => {
    await O("save_assistant_sub_direct_control", m), s(!1);
  }, Oe = async () => {
    await H("update_assistant_sub_direct_control", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Прямые команды"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), D && /* @__PURE__ */ u.createElement("div", { className: $.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", { className: $.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Прямые команды"), /* @__PURE__ */ u.createElement("div", { className: $.innerTabs }, C.map((X) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: X.key,
      type: "button",
      className: `${$.innerTab} ${R === X.key ? $.activeInnerTab : ""}`,
      onClick: () => {
        _(X.key), x(`/commands/direct/${X.key === "main" ? "main" : "template"}`);
      }
    },
    X.label
  ))), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: $.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: ge }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: ge }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: $.list }, W == null ? void 0 : W.data.map((X) => /* @__PURE__ */ u.createElement(
    vr,
    {
      key: X.uuid,
      title: X.title,
      subTitle: X.status === !1 ? "Выключена" : "Включена",
      onClick: () => v(X)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: L, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (W == null ? void 0 : W.page) || 1,
      totalPages: (W == null ? void 0 : W.total_pages) || 1,
      onChange: (X) => E("get_assistant_sub_direct_controls_short", X)
    }
  ), /* @__PURE__ */ u.createElement(
    Dg,
    {
      open: o,
      onClose: () => s(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Oe : Re
    }
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!h,
      command: h,
      onClose: () => v(null),
      onToggleStatus: le,
      onDelete: ie,
      onEdit: (X) => _e(X)
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, xd = {}, $g = ({
  open: l,
  onClose: o,
  title: s,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = y.useMemo(
    () => c.subDirectControl ?? [],
    [c]
  ), h = (_) => {
    f((x) => ({
      ...x,
      subDirectControl: _
    }));
  }, v = (_, x) => {
    const L = [...p];
    L[_] = {
      ...L[_],
      ...x
    }, h(L);
  }, C = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, R = (_) => {
    h(
      p.filter((x, L) => L !== _)
    );
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: o,
      title: s,
      footer: /* @__PURE__ */ u.createElement(oe, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: xd.form }, /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((x) => ({
          ...x,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ft,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((_, x) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: x,
          className: xd.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          ke,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (L) => v(x, {
              subMappingType: L.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          $a,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof _.subVoiceCommands == "object" ? _.subVoiceCommands : []).join(`
`),
            onChange: (L) => v(x, {
              subVoiceCommands: L.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          oe,
          {
            type: "button",
            variant: "ghost",
            onClick: () => R(x)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ u.createElement(
        oe,
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
}), Og = () => {
  const l = Et(), o = pr(), [s, c] = y.useState(!1), [f, m] = y.useState(!1), [p, h] = y.useState(Td), [v, C] = y.useState(null), [R, _] = y.useState("template"), [x, L] = y.useState(!1), z = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: D, inView: E } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: M,
    loadCommands: S,
    deleteCommand: O,
    detailInformationCommand: H,
    saveCommand: Y,
    updateCommand: W,
    editStatusCommand: te,
    commands: ne
  } = ml(
    "get_assistant_sub_direct_control_samples_short"
  );
  y.useEffect(() => {
    !x || !l || !E || M || !ne || ne.page >= ne.total_pages || S(
      "get_assistant_sub_direct_control_samples_short",
      ne.page + 1,
      !0
    );
  }, [
    x,
    E,
    l,
    M,
    ne,
    S
  ]), y.useEffect(() => {
    !M && ne && ne.page === 1 && L(!0);
  }, [M, ne]);
  const ge = () => {
    m(!1), h(Td()), c(!0);
  }, _e = async (X) => {
    m(!0);
    const Le = await H(
      "get_assistant_sub_direct_control_sample",
      X
    );
    h(Le.data), c(!0);
  }, le = async (X, Le) => {
    await te(
      "update_assistant_sub_direct_control",
      X,
      Le
    ), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ie = async (X) => {
    await O(
      "delete_assistant_sub_direct_control_sample",
      X
    ), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Re = async () => {
    await Y(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Oe = async () => {
    await W(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), S(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Прямые команды шаблоны"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, !l && /* @__PURE__ */ u.createElement(qt, null), M && /* @__PURE__ */ u.createElement("div", { className: $.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", { className: $.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Прямые команды шаблоны"), /* @__PURE__ */ u.createElement("div", { className: $.innerTabs }, z.map((X) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: X.key,
      type: "button",
      className: `${$.innerTab} ${R === X.key ? $.activeInnerTab : ""}`,
      onClick: () => {
        _(X.key), o(`/commands/direct/${X.key === "main" ? "main" : "template"}`);
      }
    },
    X.label
  ))), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: $.actions }, l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: ge }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(oe, { variant: "primary", onClick: ge }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: $.list }, ne == null ? void 0 : ne.data.map((X) => /* @__PURE__ */ u.createElement(
    vr,
    {
      key: X.uuid,
      title: X.title,
      subTitle: X.status === !1 ? "Выключена" : "Включена",
      onClick: () => C(X)
    }
  ))), l ? /* @__PURE__ */ u.createElement(
    "div",
    {
      ref: D,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (ne == null ? void 0 : ne.page) ?? 1,
      totalPages: (ne == null ? void 0 : ne.total_pages) ?? 1,
      onChange: (X) => S(
        "get_assistant_sub_direct_control_samples_short",
        X
      )
    }
  ), /* @__PURE__ */ u.createElement(
    $g,
    {
      open: s,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Oe : Re
    }
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!v,
      command: v,
      onClose: () => C(null),
      onToggleStatus: le,
      onDelete: ie,
      onEdit: (X) => _e(X)
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
}, Fg = "_form_nymr0_1", Ag = {
  form: Fg
}, Ug = ({
  open: l,
  isEdit: o,
  formData: s,
  setFormData: c,
  onClose: f,
  onUpdate: m
}) => {
  if (!s) return;
  const p = y.useMemo(() => {
    if (s) return s;
  }, [s]), h = (v) => {
    c((C) => ({
      ...C,
      ...v
    }));
  };
  return /* @__PURE__ */ u.createElement(
    Kt,
    {
      open: l,
      onClose: f,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(oe, { onClick: m }, "Обновить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Ag.form }, /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "Название команды",
        value: s.title,
        onChange: (v) => c({
          ...s,
          title: v.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      En,
      {
        label: "Завершать диалог",
        checked: p.endStatus,
        onChange: (v) => h({
          endStatus: v.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      En,
      {
        label: "Передать команду серверу",
        checked: p.forwardCommandToServer,
        onChange: (v) => h({
          forwardCommandToServer: v.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "actionType",
        value: p.actionType,
        onChange: (v) => h({
          actionType: v.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ke,
      {
        label: "Ответное сообщение",
        value: p.voiceResponse,
        onChange: (v) => h({
          voiceResponse: v.target.value
        })
      }
    ))
  );
}, jg = () => {
  const l = Et(), [o, s] = y.useState(!1), [c, f] = y.useState(!1), [m, p] = y.useState(), { ref: h, inView: v } = hr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: C,
    loadCommands: R,
    detailInformationCommand: _,
    updateCommand: x,
    commands: L
  } = ml("get_assistant_settings_short"), [z, D] = y.useState(!1);
  y.useEffect(() => {
    !z || !l || !v || C || !L || L.page >= L.total_pages || R("get_assistant_settings_short", L.page + 1, !0);
  }, [
    v,
    l,
    C,
    L,
    R
  ]), y.useEffect(() => {
    !C && L && L.page === 1 && D(!0);
  }, [C, L]);
  const E = async (S) => {
    f(!0);
    const O = await _("get_assistant_setting", S.uuid);
    p(O.data), s(!0);
  }, M = async () => {
    await x("update_assistant_setting", m), s(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Настройки команд"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(qt, null), C && /* @__PURE__ */ u.createElement("div", { className: $.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", { className: $.headerTop }, /* @__PURE__ */ u.createElement("div", { className: $.heading }, /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте и редактируйте голосовые команды ассистента.")))), /* @__PURE__ */ u.createElement("div", { className: $.list }, L == null ? void 0 : L.data.map((S) => /* @__PURE__ */ u.createElement(
    vr,
    {
      key: S.uuid,
      title: S.title,
      subTitle: S.actionType,
      onClick: () => E(S)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: h, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    yr,
    {
      page: (L == null ? void 0 : L.page) || 1,
      totalPages: (L == null ? void 0 : L.total_pages) || 1,
      onChange: (S) => R("get_assistant_settings_short", S)
    }
  ), /* @__PURE__ */ u.createElement(
    Ug,
    {
      open: o,
      isEdit: c,
      formData: m,
      setFormData: p,
      onClose: () => s(!1),
      onUpdate: M
    }
  )), /* @__PURE__ */ u.createElement(Gt, null));
};
function Bg() {
  const l = fl(), [o, s] = y.useState(!0), [c, f] = y.useState(null), m = y.useCallback(async () => {
    s(!0);
    try {
      const h = await l._getShort("get_settings");
      console.log(h), f((h == null ? void 0 : h.result) ?? h);
    } finally {
      s(!1);
    }
  }, [l]);
  return y.useEffect(() => {
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
const Wg = "_form_1bj0d_1", Vg = "_field_1bj0d_7", Hg = "_input_1bj0d_13", bg = "_label_1bj0d_32", ct = {
  form: Wg,
  field: Vg,
  input: Hg,
  label: bg
}, Qg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ct.form }, /* @__PURE__ */ u.createElement(ke, { label: "API Key", value: l.api_key ?? "", onChange: (c) => s("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(ke, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => s("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(ke, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => s("language", c.target.value) }), /* @__PURE__ */ u.createElement(ke, { label: "Voice", value: l.voice ?? "", onChange: (c) => s("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: ct.field }, /* @__PURE__ */ u.createElement("span", { className: ct.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: ct.input, value: l.codec ?? "", onChange: (c) => s("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: ct.field }, /* @__PURE__ */ u.createElement("span", { className: ct.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: ct.input, value: l.emotion ?? "", onChange: (c) => s("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(ke, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => s("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, Yg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ct.form }, /* @__PURE__ */ u.createElement(ke, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => s("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(ke, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => s("token", c.target.value) }));
}, Kg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ct.form }, /* @__PURE__ */ u.createElement(ke, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => s("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(ke, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => s("global_music_alarm", c.target.value) }));
}, qg = ({ data: l, onChange: o }) => {
  const s = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: ct.form }, /* @__PURE__ */ u.createElement(
    ke,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => s("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: ct.field }, /* @__PURE__ */ u.createElement("span", { className: ct.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: ct.input, value: l.theme ?? "dark", onChange: (c) => s("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement(En, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => s("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement(En, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => s("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement(En, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => s("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    ke,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => s("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, Gg = {
  api_key: "",
  folderId: "",
  voice: "",
  speed: void 0,
  language: "",
  codec: void 0,
  emotion: void 0
}, Oa = {
  base_url: "",
  token: ""
}, Xg = {
  global_music_timer: "",
  global_music_alarm: ""
}, Rd = {
  yandex_tts: Gg,
  remout: Oa,
  timer_alarm: Xg,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, Jg = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), Zg = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), e_ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), t_ = (l) => ({
  yandex_tts: Jg(l == null ? void 0 : l.yandex_tts),
  remout: Zg(l == null ? void 0 : l.remout),
  timer_alarm: e_(l == null ? void 0 : l.timer_alarm),
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
}, n_ = (l, o) => {
  const s = {}, c = Ki(l.yandex_tts, o.yandex_tts), f = Ki(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (s.yandex_tts = c), Object.keys(f).length > 0 && (s.timer_alarm = f), l.theme !== o.theme && (s.theme = l.theme), l.is_admin !== o.is_admin && (s.is_admin = l.is_admin), l.active_remout !== o.active_remout && (s.active_remout = l.active_remout), l.client_id !== o.client_id && (s.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (s.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (s.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Ki(l.remout ?? Oa, o.remout ?? Oa);
    Object.keys(m).length > 0 && (s.remout = m);
  }
  return s;
}, r_ = () => {
  const l = Et(), [o, s] = y.useState(Rd), [c, f] = y.useState(Rd), { settings: m, saveSettings: p } = Bg();
  y.useEffect(() => {
    if (!m) return;
    const v = t_(m);
    s(v), f(v);
  }, [m]);
  const h = () => {
    const v = n_(o, c);
    p(v);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    An,
    {
      title: "Настройки"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: $.page }, /* @__PURE__ */ u.createElement(qt, null), l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement("div", { style: {
    display: "flex",
    "flex-direction": "column",
    height: "100%",
    ...l ? { marginBottom: "150px" } : {},
    gap: "15px"
  } }, /* @__PURE__ */ u.createElement(Ft, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    qg,
    {
      data: {
        active_remout: o.active_remout,
        is_admin: o.is_admin,
        theme: o.theme,
        client_id: o.client_id,
        api_commands_enabled: o.api_commands_enabled,
        api_commands_token: o.api_commands_token
      },
      onChange: (v) => s({ ...o, ...v })
    }
  )), /* @__PURE__ */ u.createElement(Ft, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    Qg,
    {
      data: o.yandex_tts,
      onChange: (v) => s({ ...o, yandex_tts: v })
    }
  )), o.active_remout && /* @__PURE__ */ u.createElement(Ft, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    Yg,
    {
      data: o.remout ?? Oa,
      onChange: (v) => s({ ...o, remout: v })
    }
  )), /* @__PURE__ */ u.createElement(Ft, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    Kg,
    {
      data: o.timer_alarm,
      onChange: (v) => s({ ...o, timer_alarm: v })
    }
  ))), l ? /* @__PURE__ */ u.createElement(gr, null, /* @__PURE__ */ u.createElement(
    oe,
    {
      variant: "primary",
      onClick: h
    },
    "Сохранить"
  )) : /* @__PURE__ */ u.createElement(oe, { onClick: h }, "Сохранить")), /* @__PURE__ */ u.createElement(Gt, null));
}, On = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, l_ = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 60 * 1e3).toISOString();
}, af = (l) => {
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
    return af(l.count_timer || "");
  }
  return 0;
}, a_ = (l) => {
  const o = Math.max(1, Number(l) || 1), s = Math.floor(o / 60), c = o % 60;
  return `${String(s).padStart(2, "0")}:${String(c).padStart(2, "0")}:00`;
}, qi = (l) => {
  const o = On(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function of() {
  const l = fl(), [o, s] = y.useState([]), [c, f] = y.useState([]), [m, p] = y.useState([]), [h, v] = y.useState(!0), C = y.useMemo(() => l.getDevices(), [l]), R = y.useCallback(async () => {
    const O = await l._getShort("get_timer_requests_short", 1, 100), H = await Promise.all(
      qi(O).map(async (Y) => {
        var te;
        const W = await l._getDetail(Y.uuid, "get_timer_request");
        return ((te = On(W)) == null ? void 0 : te.data) ?? On(W);
      })
    );
    s(H.filter((Y) => !!Y && Y.action_type === "create_timer"));
  }, [l]), _ = y.useCallback(async () => {
    const O = await l._getShort("get_alarm_requests_short", 1, 100), H = await Promise.all(
      qi(O).map(async (Y) => {
        var te;
        const W = await l._getDetail(Y.uuid, "get_alarm_request");
        return ((te = On(W)) == null ? void 0 : te.data) ?? On(W);
      })
    );
    f(H.filter((Y) => !!Y && Y.action_type !== "delete_alarm"));
  }, [l]), x = y.useCallback(async () => {
    const O = await l._getShort("get_alarm_time_widgets_short", 1, 100), H = await Promise.all(
      qi(O).map(async (Y) => {
        var te;
        const W = await l._getDetail(Y.uuid, "get_alarm_time_widget");
        return ((te = On(W)) == null ? void 0 : te.data) ?? On(W);
      })
    );
    p(H.filter(Boolean));
  }, [l]), L = y.useCallback(async () => {
    v(!0);
    try {
      await Promise.all([R(), _(), x()]);
    } finally {
      v(!1);
    }
  }, [_, x, R]);
  return y.useEffect(() => {
    L();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (O, H, Y = 0.3) => {
      await l._save({ name: `Будильник ${H}`, action_type: "create_alarm", device_id: O, status: "on", time: H, volume_start: Y }, "save_alarm_request"), await _();
    },
    createTimer: async (O, H) => {
      const Y = {
        count_timer: a_(H),
        date_end: l_(H)
      };
      await l._save({ name: `Таймер ${H} мин`, action_type: "create_timer", device_id: O, timer_time: Y }, "save_timer_request"), await R();
    },
    deleteAlarm: async (O) => {
      await l._delete(O.uuid, "delete_alarm_request"), await _();
    },
    devices: C,
    loading: h,
    stopTimer: async (O) => {
      await l._delete(O.uuid, "delete_timer_request"), await R();
    },
    timers: o,
    toTimerSeconds: af,
    updateAlarm: async (O, H) => {
      await l._update(O.uuid, "update_alarm_request", { ...O, action_type: "edit_alarm", ...H }), await _();
    }
  };
}
const o_ = [5, 10, 15, 30, 60], i_ = (l) => {
  const o = Math.max(0, l), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [s, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, s_ = () => {
  Et();
  const { createTimer: l, devices: o, loading: s, stopTimer: c, timers: f, toTimerSeconds: m } = of(), [p, h] = y.useState(!1), [v, C] = y.useState(""), [R, _] = y.useState(5), [x, L] = y.useState({});
  y.useEffect(() => {
    L((E) => Object.fromEntries(f.map((M) => [M.uuid, E[M.uuid] ?? m(M.timer_time)])));
  }, [f, m]), y.useEffect(() => {
    const E = window.setInterval(() => {
      L((M) => Object.fromEntries(Object.entries(M).map(([S, O]) => [S, Math.max(0, O - 1)])));
    }, 1e3);
    return () => window.clearInterval(E);
  }, []);
  const z = y.useMemo(() => new Map(o.map((E) => [E.id, E.name])), [o]), D = async () => {
    v && (await l(v, R), h(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: $.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Создавайте таймеры для выбранных устройств и отслеживайте обратный отсчет.")), /* @__PURE__ */ u.createElement(oe, { onClick: () => h(!0) }, "Создать")), s && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: $.grid }, f.length ? f.map((E) => /* @__PURE__ */ u.createElement("div", { className: $.card, key: E.uuid }, /* @__PURE__ */ u.createElement("div", { className: $.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: $.cardTitle }, E.name || "Таймер"), /* @__PURE__ */ u.createElement("div", { className: $.meta }, "Устройство: ", z.get(E.device_id) || E.device_id)), /* @__PURE__ */ u.createElement(oe, { variant: "ghost", onClick: () => c(E) }, "Стоп")), /* @__PURE__ */ u.createElement("div", { className: $.time }, i_(x[E.uuid] ?? m(E.timer_time))))) : /* @__PURE__ */ u.createElement("div", { className: $.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(Kt, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(oe, { onClick: D, disabled: !v }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: $.form }, /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: $.select, value: v, onChange: (E) => C(E.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((E) => /* @__PURE__ */ u.createElement("option", { key: E.id, value: E.id }, E.name)))), /* @__PURE__ */ u.createElement("div", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: $.quickTabs }, o_.map((E) => /* @__PURE__ */ u.createElement("button", { key: E, type: "button", className: `${$.quickTab} ${R === E ? $.activeQuickTab : ""}`, onClick: () => _(E) }, E, " мин")))), /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Свое значение, минут"), /* @__PURE__ */ u.createElement("input", { className: $.input, type: "number", min: "1", value: R, onChange: (E) => _(Number(E.target.value) || 1) })))), /* @__PURE__ */ u.createElement(Gt, null));
}, u_ = () => {
  Et();
  const { alarmTimeWidgets: l, alarms: o, createAlarm: s, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = of(), [h, v] = y.useState(!1), [C, R] = y.useState(""), [_, x] = y.useState("08:00"), [L, z] = y.useState(0.3), D = y.useMemo(() => {
    const S = l.flatMap((O) => O.time || []);
    return Array.from(new Set(S)).filter(Boolean);
  }, [l]), E = y.useMemo(() => new Map(f.map((S) => [S.id, S.name])), [f]), M = async () => {
    !C || !_ || (await s(C, _, L), v(!1));
  };
  return /* @__PURE__ */ u.createElement("div", { className: $.page }, /* @__PURE__ */ u.createElement(qt, null), /* @__PURE__ */ u.createElement("div", { className: $.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: $.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: $.description }, "Управляйте будильниками, временем срабатывания, устройством и состоянием.")), /* @__PURE__ */ u.createElement(oe, { onClick: () => v(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: $.grid }, o.length ? o.map((S) => /* @__PURE__ */ u.createElement("div", { className: $.card, key: S.uuid }, /* @__PURE__ */ u.createElement("div", { className: $.cardHeader }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: $.cardTitle }, S.name || "Будильник"), /* @__PURE__ */ u.createElement("div", { className: $.meta }, "Устройство: ", E.get(S.device_id) || S.device_id)), /* @__PURE__ */ u.createElement(oe, { variant: "ghost", onClick: () => c(S) }, "Удалить")), /* @__PURE__ */ u.createElement("label", { className: `${$.row} ${$.meta}` }, /* @__PURE__ */ u.createElement("input", { className: $.switch, type: "checkbox", checked: S.status !== "off", onChange: (O) => p(S, { status: O.target.checked ? "on" : "off" }) }), S.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: $.input, type: "time", value: S.time, onChange: (O) => p(S, { time: O.target.value }) })), /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: $.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: S.volume_start ?? 0.3,
      onChange: (O) => p(S, { volume_start: Number(O.target.value) })
    }
  )))) : /* @__PURE__ */ u.createElement("div", { className: $.empty }, "Нет запущенных будильников.")), /* @__PURE__ */ u.createElement(Kt, { open: h, onClose: () => v(!1), title: "Создать будильник", footer: /* @__PURE__ */ u.createElement(oe, { onClick: M, disabled: !C || !_ }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: $.form }, /* @__PURE__ */ u.createElement("div", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Быстрый старт"), /* @__PURE__ */ u.createElement("div", { className: $.quickTabs }, D.length ? D.map((S) => /* @__PURE__ */ u.createElement("button", { key: S, type: "button", className: `${$.quickTab} ${_ === S ? $.activeQuickTab : ""}`, onClick: () => x(S) }, S)) : /* @__PURE__ */ u.createElement("span", { className: $.meta }, "Нет быстрых значений из alarm_time_widget."))), /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Устройство"), /* @__PURE__ */ u.createElement("select", { className: $.select, value: C, onChange: (S) => R(S.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((S) => /* @__PURE__ */ u.createElement("option", { key: S.id, value: S.id }, S.name)))), /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Время"), /* @__PURE__ */ u.createElement("input", { className: $.input, type: "time", value: _, onChange: (S) => x(S.target.value) })), /* @__PURE__ */ u.createElement("label", { className: $.field }, /* @__PURE__ */ u.createElement("span", { className: $.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement(
    "input",
    {
      className: $.input,
      type: "number",
      min: "0",
      max: "1",
      step: "0.05",
      value: L,
      onChange: (S) => z(Number(S.target.value))
    }
  )))), /* @__PURE__ */ u.createElement(Gt, null));
}, c_ = () => /* @__PURE__ */ u.createElement(uh, null, /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/",
    element: /* @__PURE__ */ u.createElement(
      Na,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/scripts",
    element: /* @__PURE__ */ u.createElement(lg, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands",
    element: /* @__PURE__ */ u.createElement(
      Na,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ u.createElement(Mg, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Ig, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ u.createElement(
      Na,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ u.createElement(zg, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement(Og, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(jg, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(s_, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(u_, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "/settings",
    element: /* @__PURE__ */ u.createElement(r_, null)
  }
), /* @__PURE__ */ u.createElement(
  lt,
  {
    path: "*",
    element: /* @__PURE__ */ u.createElement(
      Na,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), d_ = () => /* @__PURE__ */ u.createElement(c_, null);
class f_ {
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
const m_ = 1, Fa = 2, Gi = 3, p_ = 4, h_ = 5;
function v_(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function y_() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function g_(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Pd(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function __() {
  return {
    type: "ping"
  };
}
function E_(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const w_ = (l, o, s, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= s || c !== void 0;
}, k_ = "auth_invalid", S_ = "auth_ok";
function C_(l) {
  if (!l.auth)
    throw p_;
  const o = l.auth;
  let s = o.expired ? o.refreshAccessToken().then(() => {
    s = void 0;
  }, () => {
    s = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function f(m, p, h) {
    const v = new WebSocket(c);
    let C = !1;
    const R = () => {
      if (v.removeEventListener("close", R), C) {
        h(Fa);
        return;
      }
      if (m === 0) {
        h(m_);
        return;
      }
      const L = m === -1 ? -1 : m - 1;
      setTimeout(() => f(L, p, h), 1e3);
    }, _ = async (L) => {
      try {
        o.expired && await (s || o.refreshAccessToken()), v.send(JSON.stringify(v_(o.accessToken)));
      } catch (z) {
        C = z === Fa, v.close();
      }
    }, x = async (L) => {
      const z = JSON.parse(L.data);
      switch (z.type) {
        case k_:
          C = !0, v.close();
          break;
        case S_:
          v.removeEventListener("open", _), v.removeEventListener("message", x), v.removeEventListener("close", R), v.removeEventListener("error", R), v.haVersion = z.ha_version, w_(v.haVersion, 2022, 9) && v.send(JSON.stringify(y_())), p(v);
          break;
      }
    };
    v.addEventListener("open", _), v.addEventListener("message", x), v.addEventListener("close", R), v.addEventListener("error", R);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class N_ {
  constructor(o, s) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Pd(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(E_(Gi, "Connection lost"));
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
                const v = this._queuedMessages;
                this._queuedMessages = void 0;
                for (const C of v)
                  C.reject && C.reject(Gi);
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
    return this.subscribeMessage(o, g_(s));
  }
  ping() {
    return this.sendMessagePromise(__());
  }
  sendMessage(o, s) {
    if (!this.connected)
      throw Gi;
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
          this.connected && await this.sendMessagePromise(Pd(h)), this.commands.delete(h);
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
const x_ = (l) => l * 1e3 + Date.now();
async function T_(l, o, s) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw h_;
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
  return p.hassUrl = l, p.clientId = o, p.expires = x_(p.expires_in), p;
}
class R_ {
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
    const o = await T_(this.data.hassUrl, this.data.clientId, {
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
function P_(l, o) {
  return new R_({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function M_(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: C_ }, l), s = await o.createSocket(o);
  return new N_(s, o);
}
function L_(l) {
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
async function I_() {
  const s = P_(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await M_({
    auth: s
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function D_({
  children: l,
  hass: o
}) {
  const s = y.useRef(null), [c, f] = y.useState(!1);
  return y.useEffect(() => {
    async function m() {
      const p = o ? L_(o) : await I_();
      s.current ? s.current.setHass(p) : s.current = new f_(p), f(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !s.current ? /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...") : /* @__PURE__ */ u.createElement(Zd.Provider, { value: s.current }, l);
}
function z_({ hass: l }) {
  return /* @__PURE__ */ u.createElement(Dh, null, /* @__PURE__ */ u.createElement(D_, { hass: l }, /* @__PURE__ */ u.createElement(d_, null)));
}
const Md = "dialog-custom-ui-panel", Ld = "dialog-custom-ui-style";
class $_ extends HTMLElement {
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
    if (c.getElementById(Ld))
      return;
    try {
      const m = await fetch(s, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Ld, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
    this.root || (this.root = dp.createRoot(o)), this.root.render(
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(z_, { hass: this.hassValue }))
    );
  }
}
customElements.get(Md) || customElements.define(Md, $_);
