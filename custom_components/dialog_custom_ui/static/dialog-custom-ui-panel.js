function jd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var ji = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function hp() {
  if (sd) return de;
  sd = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function x(N) {
    return N === null || typeof N != "object" ? null : (N = _ && N[_] || N["@@iterator"], typeof N == "function" ? N : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, $ = {};
  function k(N, F, ce) {
    this.props = N, this.context = F, this.refs = $, this.updater = ce || L;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(N, F) {
    if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, N, F, "setState");
  }, k.prototype.forceUpdate = function(N) {
    this.updater.enqueueForceUpdate(this, N, "forceUpdate");
  };
  function P() {
  }
  P.prototype = k.prototype;
  function M(N, F, ce) {
    this.props = N, this.context = F, this.refs = $, this.updater = ce || L;
  }
  var O = M.prototype = new P();
  O.constructor = M, D(O, k.prototype), O.isPureReactComponent = !0;
  var z = Array.isArray, W = Object.prototype.hasOwnProperty, U = { current: null }, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(N, F, ce) {
    var fe, pe = {}, he = null, ke = null;
    if (F != null) for (fe in F.ref !== void 0 && (ke = F.ref), F.key !== void 0 && (he = "" + F.key), F) W.call(F, fe) && !ee.hasOwnProperty(fe) && (pe[fe] = F[fe]);
    var Ee = arguments.length - 2;
    if (Ee === 1) pe.children = ce;
    else if (1 < Ee) {
      for (var Re = Array(Ee), it = 0; it < Ee; it++) Re[it] = arguments[it + 2];
      pe.children = Re;
    }
    if (N && N.defaultProps) for (fe in Ee = N.defaultProps, Ee) pe[fe] === void 0 && (pe[fe] = Ee[fe]);
    return { $$typeof: l, type: N, key: he, ref: ke, props: pe, _owner: U.current };
  }
  function ye(N, F) {
    return { $$typeof: l, type: N.type, key: F, ref: N.ref, props: N.props, _owner: N._owner };
  }
  function ge(N) {
    return typeof N == "object" && N !== null && N.$$typeof === l;
  }
  function K(N) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + N.replace(/[=:]/g, function(ce) {
      return F[ce];
    });
  }
  var ue = /\/+/g;
  function Ce(N, F) {
    return typeof N == "object" && N !== null && N.key != null ? K("" + N.key) : F.toString(36);
  }
  function Q(N, F, ce, fe, pe) {
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
    if (ke) return ke = N, pe = pe(ke), N = fe === "" ? "." + Ce(ke, 0) : fe, z(pe) ? (ce = "", N != null && (ce = N.replace(ue, "$&/") + "/"), Q(pe, F, ce, "", function(it) {
      return it;
    })) : pe != null && (ge(pe) && (pe = ye(pe, ce + (!pe.key || ke && ke.key === pe.key ? "" : ("" + pe.key).replace(ue, "$&/") + "/") + N)), F.push(pe)), 1;
    if (ke = 0, fe = fe === "" ? "." : fe + ":", z(N)) for (var Ee = 0; Ee < N.length; Ee++) {
      he = N[Ee];
      var Re = fe + Ce(he, Ee);
      ke += Q(he, F, ce, Re, pe);
    }
    else if (Re = x(N), typeof Re == "function") for (N = Re.call(N), Ee = 0; !(he = N.next()).done; ) he = he.value, Re = fe + Ce(he, Ee++), ke += Q(he, F, ce, Re, pe);
    else if (he === "object") throw F = String(N), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function q(N, F, ce) {
    if (N == null) return N;
    var fe = [], pe = 0;
    return Q(N, fe, "", "", function(he) {
      return F.call(ce, he, pe++);
    }), fe;
  }
  function Te(N) {
    if (N._status === -1) {
      var F = N._result;
      F = F(), F.then(function(ce) {
        (N._status === 0 || N._status === -1) && (N._status = 1, N._result = ce);
      }, function(ce) {
        (N._status === 0 || N._status === -1) && (N._status = 2, N._result = ce);
      }), N._status === -1 && (N._status = 0, N._result = F);
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var De = { current: null }, V = { transition: null }, ae = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: V, ReactCurrentOwner: U };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return de.Children = { map: q, forEach: function(N, F, ce) {
    q(N, function() {
      F.apply(this, arguments);
    }, ce);
  }, count: function(N) {
    var F = 0;
    return q(N, function() {
      F++;
    }), F;
  }, toArray: function(N) {
    return q(N, function(F) {
      return F;
    }) || [];
  }, only: function(N) {
    if (!ge(N)) throw Error("React.Children.only expected to receive a single React element child.");
    return N;
  } }, de.Component = k, de.Fragment = i, de.Profiler = d, de.PureComponent = M, de.StrictMode = c, de.Suspense = y, de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, de.act = X, de.cloneElement = function(N, F, ce) {
    if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
    var fe = D({}, N.props), pe = N.key, he = N.ref, ke = N._owner;
    if (F != null) {
      if (F.ref !== void 0 && (he = F.ref, ke = U.current), F.key !== void 0 && (pe = "" + F.key), N.type && N.type.defaultProps) var Ee = N.type.defaultProps;
      for (Re in F) W.call(F, Re) && !ee.hasOwnProperty(Re) && (fe[Re] = F[Re] === void 0 && Ee !== void 0 ? Ee[Re] : F[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) fe.children = ce;
    else if (1 < Re) {
      Ee = Array(Re);
      for (var it = 0; it < Re; it++) Ee[it] = arguments[it + 2];
      fe.children = Ee;
    }
    return { $$typeof: l, type: N.type, key: pe, ref: he, props: fe, _owner: ke };
  }, de.createContext = function(N) {
    return N = { $$typeof: p, _currentValue: N, _currentValue2: N, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, N.Provider = { $$typeof: m, _context: N }, N.Consumer = N;
  }, de.createElement = ne, de.createFactory = function(N) {
    var F = ne.bind(null, N);
    return F.type = N, F;
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(N) {
    return { $$typeof: h, render: N };
  }, de.isValidElement = ge, de.lazy = function(N) {
    return { $$typeof: C, _payload: { _status: -1, _result: N }, _init: Te };
  }, de.memo = function(N, F) {
    return { $$typeof: E, type: N, compare: F === void 0 ? null : F };
  }, de.startTransition = function(N) {
    var F = V.transition;
    V.transition = {};
    try {
      N();
    } finally {
      V.transition = F;
    }
  }, de.unstable_act = X, de.useCallback = function(N, F) {
    return De.current.useCallback(N, F);
  }, de.useContext = function(N) {
    return De.current.useContext(N);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(N) {
    return De.current.useDeferredValue(N);
  }, de.useEffect = function(N, F) {
    return De.current.useEffect(N, F);
  }, de.useId = function() {
    return De.current.useId();
  }, de.useImperativeHandle = function(N, F, ce) {
    return De.current.useImperativeHandle(N, F, ce);
  }, de.useInsertionEffect = function(N, F) {
    return De.current.useInsertionEffect(N, F);
  }, de.useLayoutEffect = function(N, F) {
    return De.current.useLayoutEffect(N, F);
  }, de.useMemo = function(N, F) {
    return De.current.useMemo(N, F);
  }, de.useReducer = function(N, F, ce) {
    return De.current.useReducer(N, F, ce);
  }, de.useRef = function(N) {
    return De.current.useRef(N);
  }, de.useState = function(N) {
    return De.current.useState(N);
  }, de.useSyncExternalStore = function(N, F, ce) {
    return De.current.useSyncExternalStore(N, F, ce);
  }, de.useTransition = function() {
    return De.current.useTransition();
  }, de.version = "18.3.1", de;
}
var ud;
function Ud() {
  return ud || (ud = 1, ji.exports = hp()), ji.exports;
}
var v = Ud();
const s = /* @__PURE__ */ jd(v);
var Na = {}, Ui = { exports: {} }, at = {}, Bi = { exports: {} }, bi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function vp() {
  return cd || (cd = 1, (function(l) {
    function o(V, ae) {
      var X = V.length;
      V.push(ae);
      e: for (; 0 < X; ) {
        var N = X - 1 >>> 1, F = V[N];
        if (0 < d(F, ae)) V[N] = ae, V[X] = F, X = N;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var ae = V[0], X = V.pop();
      if (X !== ae) {
        V[0] = X;
        e: for (var N = 0, F = V.length, ce = F >>> 1; N < ce; ) {
          var fe = 2 * (N + 1) - 1, pe = V[fe], he = fe + 1, ke = V[he];
          if (0 > d(pe, X)) he < F && 0 > d(ke, pe) ? (V[N] = ke, V[he] = X, N = he) : (V[N] = pe, V[fe] = X, N = fe);
          else if (he < F && 0 > d(ke, X)) V[N] = ke, V[he] = X, N = he;
          else break e;
        }
      }
      return ae;
    }
    function d(V, ae) {
      var X = V.sortIndex - ae.sortIndex;
      return X !== 0 ? X : V.id - ae.id;
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
    var y = [], E = [], C = 1, _ = null, x = 3, L = !1, D = !1, $ = !1, k = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(V) {
      for (var ae = i(E); ae !== null; ) {
        if (ae.callback === null) c(E);
        else if (ae.startTime <= V) c(E), ae.sortIndex = ae.expirationTime, o(y, ae);
        else break;
        ae = i(E);
      }
    }
    function z(V) {
      if ($ = !1, O(V), !D) if (i(y) !== null) D = !0, Te(W);
      else {
        var ae = i(E);
        ae !== null && De(z, ae.startTime - V);
      }
    }
    function W(V, ae) {
      D = !1, $ && ($ = !1, P(ne), ne = -1), L = !0;
      var X = x;
      try {
        for (O(ae), _ = i(y); _ !== null && (!(_.expirationTime > ae) || V && !K()); ) {
          var N = _.callback;
          if (typeof N == "function") {
            _.callback = null, x = _.priorityLevel;
            var F = N(_.expirationTime <= ae);
            ae = l.unstable_now(), typeof F == "function" ? _.callback = F : _ === i(y) && c(y), O(ae);
          } else c(y);
          _ = i(y);
        }
        if (_ !== null) var ce = !0;
        else {
          var fe = i(E);
          fe !== null && De(z, fe.startTime - ae), ce = !1;
        }
        return ce;
      } finally {
        _ = null, x = X, L = !1;
      }
    }
    var U = !1, ee = null, ne = -1, ye = 5, ge = -1;
    function K() {
      return !(l.unstable_now() - ge < ye);
    }
    function ue() {
      if (ee !== null) {
        var V = l.unstable_now();
        ge = V;
        var ae = !0;
        try {
          ae = ee(!0, V);
        } finally {
          ae ? Ce() : (U = !1, ee = null);
        }
      } else U = !1;
    }
    var Ce;
    if (typeof M == "function") Ce = function() {
      M(ue);
    };
    else if (typeof MessageChannel < "u") {
      var Q = new MessageChannel(), q = Q.port2;
      Q.port1.onmessage = ue, Ce = function() {
        q.postMessage(null);
      };
    } else Ce = function() {
      k(ue, 0);
    };
    function Te(V) {
      ee = V, U || (U = !0, Ce());
    }
    function De(V, ae) {
      ne = k(function() {
        V(l.unstable_now());
      }, ae);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, l.unstable_continueExecution = function() {
      D || L || (D = !0, Te(W));
    }, l.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < V ? Math.floor(1e3 / V) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, l.unstable_getFirstCallbackNode = function() {
      return i(y);
    }, l.unstable_next = function(V) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = x;
      }
      var X = x;
      x = ae;
      try {
        return V();
      } finally {
        x = X;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(V, ae) {
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
      var X = x;
      x = V;
      try {
        return ae();
      } finally {
        x = X;
      }
    }, l.unstable_scheduleCallback = function(V, ae, X) {
      var N = l.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? N + X : N) : X = N, V) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = X + F, V = { id: C++, callback: ae, priorityLevel: V, startTime: X, expirationTime: F, sortIndex: -1 }, X > N ? (V.sortIndex = X, o(E, V), i(y) === null && V === i(E) && ($ ? (P(ne), ne = -1) : $ = !0, De(z, X - N))) : (V.sortIndex = F, o(y, V), D || L || (D = !0, Te(W))), V;
    }, l.unstable_shouldYield = K, l.unstable_wrapCallback = function(V) {
      var ae = x;
      return function() {
        var X = x;
        x = ae;
        try {
          return V.apply(this, arguments);
        } finally {
          x = X;
        }
      };
    };
  })(bi)), bi;
}
var dd;
function yp() {
  return dd || (dd = 1, Bi.exports = vp()), Bi.exports;
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
var fd;
function gp() {
  if (fd) return at;
  fd = 1;
  var l = Ud(), o = yp();
  function i(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), d = {};
  function m(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) c.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, C = {}, _ = {};
  function x(e) {
    return y.call(_, e) ? !0 : y.call(C, e) ? !1 : E.test(e) ? _[e] = !0 : (C[e] = !0, !1);
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
  function D(e, t, n, r) {
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
  function $(e, t, n, r, a, u, f) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = f;
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
  var P = /[\-:]([a-z])/g;
  function M(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      M
    );
    k[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, M);
    k[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, M);
    k[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, n, r) {
    var a = k.hasOwnProperty(t) ? k[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, a, r) && (n = null), r || a === null ? x(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var z = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), U = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), K = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), Ce = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = Object.assign, N;
  function F(e) {
    if (N === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      N = t && t[1] || "";
    }
    return `
` + N + e;
  }
  var ce = !1;
  function fe(e, t) {
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
`), f = a.length - 1, g = u.length - 1; 1 <= f && 0 <= g && a[f] !== u[g]; ) g--;
        for (; 1 <= f && 0 <= g; f--, g--) if (a[f] !== u[g]) {
          if (f !== 1 || g !== 1)
            do
              if (f--, g--, 0 > g || a[f] !== u[g]) {
                var w = `
` + a[f].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= f && 0 <= g);
          break;
        }
      }
    } finally {
      ce = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function pe(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = fe(e.type, !1), e;
      case 11:
        return e = fe(e.type.render, !1), e;
      case 1:
        return e = fe(e.type, !0), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ee:
        return "Fragment";
      case U:
        return "Portal";
      case ye:
        return "Profiler";
      case ne:
        return "StrictMode";
      case Ce:
        return "Suspense";
      case Q:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case K:
        return (e.displayName || "Context") + ".Consumer";
      case ge:
        return (e._context.displayName || "Context") + ".Provider";
      case ue:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case q:
        return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
      case Te:
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
      }, set: function(f) {
        r = "" + f, u.call(this, f);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(f) {
        r = "" + f;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function vl(e) {
    e._valueTracker || (e._valueTracker = it(e));
  }
  function ps(e) {
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
    return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function hs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function vs(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function Qa(e, t) {
    vs(e, t);
    var n = Ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? qa(e, t.type, n) : t.hasOwnProperty("defaultValue") && qa(e, t.type, Ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ys(e, t, n) {
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
  function Un(e, t, n, r) {
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
  function Ya(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function gs(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (kr(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Ee(n) };
  }
  function _s(e, t) {
    var n = Ee(t.value), r = Ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Es(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ws(e) {
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
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ws(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var gl, ks = (function(e) {
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
  function Ss(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cr.hasOwnProperty(e) && Cr[e] ? ("" + t).trim() : t + "px";
  }
  function Cs(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Ss(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var Ef = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ga(e, t) {
    if (t) {
      if (Ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
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
  var eo = null, Bn = null, bn = null;
  function xs(e) {
    if (e = Qr(e)) {
      if (typeof eo != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = Bl(t), eo(e.stateNode, e.type, t));
    }
  }
  function Ns(e) {
    Bn ? bn ? bn.push(e) : bn = [e] : Bn = e;
  }
  function Ts() {
    if (Bn) {
      var e = Bn, t = bn;
      if (bn = Bn = null, xs(e), t) for (e = 0; e < t.length; e++) xs(t[e]);
    }
  }
  function Rs(e, t) {
    return e(t);
  }
  function Ps() {
  }
  var to = !1;
  function Ms(e, t, n) {
    if (to) return e(t, n);
    to = !0;
    try {
      return Rs(e, t, n);
    } finally {
      to = !1, (Bn !== null || bn !== null) && (Ps(), Ts());
    }
  }
  function xr(e, t) {
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
    if (n && typeof n != "function") throw Error(i(231, t, typeof n));
    return n;
  }
  var no = !1;
  if (h) try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", { get: function() {
      no = !0;
    } }), window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr);
  } catch {
    no = !1;
  }
  function wf(e, t, n, r, a, u, f, g, w) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (j) {
      this.onError(j);
    }
  }
  var Tr = !1, _l = null, El = !1, ro = null, kf = { onError: function(e) {
    Tr = !0, _l = e;
  } };
  function Sf(e, t, n, r, a, u, f, g, w) {
    Tr = !1, _l = null, wf.apply(kf, arguments);
  }
  function Cf(e, t, n, r, a, u, f, g, w) {
    if (Sf.apply(this, arguments), Tr) {
      if (Tr) {
        var I = _l;
        Tr = !1, _l = null;
      } else throw Error(i(198));
      El || (El = !0, ro = I);
    }
  }
  function Sn(e) {
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
  function Ls(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Is(e) {
    if (Sn(e) !== e) throw Error(i(188));
  }
  function xf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Sn(e), t === null) throw Error(i(188));
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
          if (u === n) return Is(a), e;
          if (u === r) return Is(a), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) n = a, r = u;
      else {
        for (var f = !1, g = a.child; g; ) {
          if (g === n) {
            f = !0, n = a, r = u;
            break;
          }
          if (g === r) {
            f = !0, r = a, n = u;
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = u.child; g; ) {
            if (g === n) {
              f = !0, n = u, r = a;
              break;
            }
            if (g === r) {
              f = !0, r = u, n = a;
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function $s(e) {
    return e = xf(e), e !== null ? Ds(e) : null;
  }
  function Ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zs = o.unstable_scheduleCallback, Os = o.unstable_cancelCallback, Nf = o.unstable_shouldYield, Tf = o.unstable_requestPaint, Oe = o.unstable_now, Rf = o.unstable_getCurrentPriorityLevel, lo = o.unstable_ImmediatePriority, As = o.unstable_UserBlockingPriority, wl = o.unstable_NormalPriority, Pf = o.unstable_LowPriority, Fs = o.unstable_IdlePriority, kl = null, Lt = null;
  function Mf(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
      Lt.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var kt = Math.clz32 ? Math.clz32 : $f, Lf = Math.log, If = Math.LN2;
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
  function xl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, u = e.pingedLanes, f = n & 268435455;
    if (f !== 0) {
      var g = f & ~a;
      g !== 0 ? r = Rr(g) : (u &= f, u !== 0 && (r = Rr(u)));
    } else f = n & ~a, f !== 0 ? r = Rr(f) : u !== 0 && (r = Rr(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, u = t & -t, a >= u || a === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), a = 1 << n, r |= e[n], t &= ~a;
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
      var f = 31 - kt(u), g = 1 << f, w = a[f];
      w === -1 ? ((g & n) === 0 || (g & r) !== 0) && (a[f] = Df(g, t)) : w <= t && (e.expiredLanes |= g), u &= ~g;
    }
  }
  function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function js() {
    var e = Sl;
    return Sl <<= 1, (Sl & 4194240) === 0 && (Sl = 64), e;
  }
  function oo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
  }
  function Of(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - kt(n), u = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~u;
    }
  }
  function io(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - kt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var we = 0;
  function Us(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Bs, so, bs, Ws, Hs, uo = !1, Nl = [], en = null, tn = null, nn = null, Mr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), rn = [], Af = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Vs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        en = null;
        break;
      case "dragenter":
      case "dragleave":
        tn = null;
        break;
      case "mouseover":
      case "mouseout":
        nn = null;
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
        return en = Ir(en, e, t, n, r, a), !0;
      case "dragenter":
        return tn = Ir(tn, e, t, n, r, a), !0;
      case "mouseover":
        return nn = Ir(nn, e, t, n, r, a), !0;
      case "pointerover":
        var u = a.pointerId;
        return Mr.set(u, Ir(Mr.get(u) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return u = a.pointerId, Lr.set(u, Ir(Lr.get(u) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Qs(e) {
    var t = Cn(e.target);
    if (t !== null) {
      var n = Sn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ls(n), t !== null) {
            e.blockedOn = t, Hs(e.priority, function() {
              bs(n);
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
  function qs(e, t, n) {
    Tl(e) && n.delete(t);
  }
  function jf() {
    uo = !1, en !== null && Tl(en) && (en = null), tn !== null && Tl(tn) && (tn = null), nn !== null && Tl(nn) && (nn = null), Mr.forEach(qs), Lr.forEach(qs);
  }
  function $r(e, t) {
    e.blockedOn === t && (e.blockedOn = null, uo || (uo = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, jf)));
  }
  function Dr(e) {
    function t(a) {
      return $r(a, e);
    }
    if (0 < Nl.length) {
      $r(Nl[0], e);
      for (var n = 1; n < Nl.length; n++) {
        var r = Nl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (en !== null && $r(en, e), tn !== null && $r(tn, e), nn !== null && $r(nn, e), Mr.forEach(t), Lr.forEach(t), n = 0; n < rn.length; n++) r = rn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < rn.length && (n = rn[0], n.blockedOn === null); ) Qs(n), n.blockedOn === null && rn.shift();
  }
  var Wn = z.ReactCurrentBatchConfig, Rl = !0;
  function Uf(e, t, n, r) {
    var a = we, u = Wn.transition;
    Wn.transition = null;
    try {
      we = 1, co(e, t, n, r);
    } finally {
      we = a, Wn.transition = u;
    }
  }
  function Bf(e, t, n, r) {
    var a = we, u = Wn.transition;
    Wn.transition = null;
    try {
      we = 4, co(e, t, n, r);
    } finally {
      we = a, Wn.transition = u;
    }
  }
  function co(e, t, n, r) {
    if (Rl) {
      var a = fo(e, t, n, r);
      if (a === null) Po(e, t, r, Pl, n), Vs(e, r);
      else if (Ff(a, e, t, n, r)) r.stopPropagation();
      else if (Vs(e, r), t & 4 && -1 < Af.indexOf(e)) {
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
    if (Pl = null, e = Za(r), e = Cn(e), e !== null) if (t = Sn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ls(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Pl = e, null;
  }
  function Ys(e) {
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
          case As:
            return 4;
          case wl:
          case Pf:
            return 16;
          case Fs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ln = null, mo = null, Ml = null;
  function Ks() {
    if (Ml) return Ml;
    var e, t = mo, n = t.length, r, a = "value" in ln ? ln.value : ln.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === a[u - r]; r++) ;
    return Ml = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ll(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Il() {
    return !0;
  }
  function Gs() {
    return !1;
  }
  function st(e) {
    function t(n, r, a, u, f) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(u) : u[g]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Il : Gs, this.isPropagationStopped = Gs, this;
    }
    return X(t.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, po = st(Hn), zr = X({}, Hn, { view: 0, detail: 0 }), bf = st(zr), ho, vo, Or, $l = X({}, zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: go, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (ho = e.screenX - Or.screenX, vo = e.screenY - Or.screenY) : vo = ho = 0, Or = e), ho);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : vo;
  } }), Xs = st($l), Wf = X({}, $l, { dataTransfer: 0 }), Hf = st(Wf), Vf = X({}, zr, { relatedTarget: 0 }), yo = st(Vf), Qf = X({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = st(Qf), Yf = X({}, Hn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Kf = st(Yf), Gf = X({}, Hn, { data: 0 }), Js = st(Gf), Xf = {
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
  var tm = X({}, zr, { key: function(e) {
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
  } }), nm = st(tm), rm = X({}, $l, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zs = st(rm), lm = X({}, zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: go }), am = st(lm), om = X({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), im = st(om), sm = X({}, $l, {
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
  var dm = h && "TextEvent" in window && !Ar, eu = h && (!_o || Ar && 8 < Ar && 11 >= Ar), tu = " ", nu = !1;
  function ru(e, t) {
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
  function lu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Vn = !1;
  function fm(e, t) {
    switch (e) {
      case "compositionend":
        return lu(t);
      case "keypress":
        return t.which !== 32 ? null : (nu = !0, tu);
      case "textInput":
        return e = t.data, e === tu && nu ? null : e;
      default:
        return null;
    }
  }
  function mm(e, t) {
    if (Vn) return e === "compositionend" || !_o && ru(e, t) ? (e = Ks(), Ml = mo = ln = null, Vn = !1, e) : null;
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
        return eu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pm[e.type] : t === "textarea";
  }
  function ou(e, t, n, r) {
    Ns(r), t = Fl(t, "onChange"), 0 < t.length && (n = new po("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Fr = null, jr = null;
  function hm(e) {
    Cu(e, 0);
  }
  function Dl(e) {
    var t = Gn(e);
    if (ps(t)) return e;
  }
  function vm(e, t) {
    if (e === "change") return t;
  }
  var iu = !1;
  if (h) {
    var Eo;
    if (h) {
      var wo = "oninput" in document;
      if (!wo) {
        var su = document.createElement("div");
        su.setAttribute("oninput", "return;"), wo = typeof su.oninput == "function";
      }
      Eo = wo;
    } else Eo = !1;
    iu = Eo && (!document.documentMode || 9 < document.documentMode);
  }
  function uu() {
    Fr && (Fr.detachEvent("onpropertychange", cu), jr = Fr = null);
  }
  function cu(e) {
    if (e.propertyName === "value" && Dl(jr)) {
      var t = [];
      ou(t, jr, e, Za(e)), Ms(hm, t);
    }
  }
  function ym(e, t, n) {
    e === "focusin" ? (uu(), Fr = t, jr = n, Fr.attachEvent("onpropertychange", cu)) : e === "focusout" && uu();
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
  var St = typeof Object.is == "function" ? Object.is : wm;
  function Ur(e, t) {
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
  function du(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fu(e, t) {
    var n = du(e);
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
      n = du(n);
    }
  }
  function mu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function pu() {
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
    var t = pu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mu(n.ownerDocument.documentElement, n)) {
      if (r !== null && ko(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, u = Math.min(r.start, a);
          r = r.end === void 0 ? u : Math.min(r.end, a), !e.extend && u > r && (a = r, r = u, u = a), a = fu(n, u);
          var f = fu(
            n,
            r
          );
          a && f && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== f.node || e.focusOffset !== f.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(f.node, f.offset)) : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Sm = h && "documentMode" in document && 11 >= document.documentMode, Qn = null, So = null, Br = null, Co = !1;
  function hu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Co || Qn == null || Qn !== yl(r) || (r = Qn, "selectionStart" in r && ko(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Br && Ur(Br, r) || (Br = r, r = Fl(So, "onSelect"), 0 < r.length && (t = new po("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qn)));
  }
  function zl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var qn = { animationend: zl("Animation", "AnimationEnd"), animationiteration: zl("Animation", "AnimationIteration"), animationstart: zl("Animation", "AnimationStart"), transitionend: zl("Transition", "TransitionEnd") }, xo = {}, vu = {};
  h && (vu = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function Ol(e) {
    if (xo[e]) return xo[e];
    if (!qn[e]) return e;
    var t = qn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in vu) return xo[e] = t[n];
    return e;
  }
  var yu = Ol("animationend"), gu = Ol("animationiteration"), _u = Ol("animationstart"), Eu = Ol("transitionend"), wu = /* @__PURE__ */ new Map(), ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function an(e, t) {
    wu.set(e, t), m(t, [e]);
  }
  for (var No = 0; No < ku.length; No++) {
    var To = ku[No], Cm = To.toLowerCase(), xm = To[0].toUpperCase() + To.slice(1);
    an(Cm, "on" + xm);
  }
  an(yu, "onAnimationEnd"), an(gu, "onAnimationIteration"), an(_u, "onAnimationStart"), an("dblclick", "onDoubleClick"), an("focusin", "onFocus"), an("focusout", "onBlur"), an(Eu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
  function Su(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Cf(r, t, void 0, e), e.currentTarget = null;
  }
  function Cu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var f = r.length - 1; 0 <= f; f--) {
          var g = r[f], w = g.instance, I = g.currentTarget;
          if (g = g.listener, w !== u && a.isPropagationStopped()) break e;
          Su(a, g, I), u = w;
        }
        else for (f = 0; f < r.length; f++) {
          if (g = r[f], w = g.instance, I = g.currentTarget, g = g.listener, w !== u && a.isPropagationStopped()) break e;
          Su(a, g, I), u = w;
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
        n !== "selectionchange" && (Nm.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Al] || (t[Al] = !0, Ro("selectionchange", !1, t));
    }
  }
  function xu(e, t, n, r) {
    switch (Ys(t)) {
      case 1:
        var a = Uf;
        break;
      case 4:
        a = Bf;
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
      var f = r.tag;
      if (f === 3 || f === 4) {
        var g = r.stateNode.containerInfo;
        if (g === a || g.nodeType === 8 && g.parentNode === a) break;
        if (f === 4) for (f = r.return; f !== null; ) {
          var w = f.tag;
          if ((w === 3 || w === 4) && (w = f.stateNode.containerInfo, w === a || w.nodeType === 8 && w.parentNode === a)) return;
          f = f.return;
        }
        for (; g !== null; ) {
          if (f = Cn(g), f === null) return;
          if (w = f.tag, w === 5 || w === 6) {
            r = u = f;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ms(function() {
      var I = u, j = Za(n), B = [];
      e: {
        var A = wu.get(e);
        if (A !== void 0) {
          var Y = po, J = e;
          switch (e) {
            case "keypress":
              if (Ll(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = nm;
              break;
            case "focusin":
              J = "focus", Y = yo;
              break;
            case "focusout":
              J = "blur", Y = yo;
              break;
            case "beforeblur":
            case "afterblur":
              Y = yo;
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
              Y = Xs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Hf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = am;
              break;
            case yu:
            case gu:
            case _u:
              Y = qf;
              break;
            case Eu:
              Y = im;
              break;
            case "scroll":
              Y = bf;
              break;
            case "wheel":
              Y = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Kf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Zs;
          }
          var Z = (t & 4) !== 0, Ae = !Z && e === "scroll", T = Z ? A !== null ? A + "Capture" : null : A;
          Z = [];
          for (var S = I, R; S !== null; ) {
            R = S;
            var b = R.stateNode;
            if (R.tag === 5 && b !== null && (R = b, T !== null && (b = xr(S, T), b != null && Z.push(Hr(S, b, R)))), Ae) break;
            S = S.return;
          }
          0 < Z.length && (A = new Y(A, J, null, n, j), B.push({ event: A, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", A && n !== Ja && (J = n.relatedTarget || n.fromElement) && (Cn(J) || J[bt])) break e;
          if ((Y || A) && (A = j.window === j ? j : (A = j.ownerDocument) ? A.defaultView || A.parentWindow : window, Y ? (J = n.relatedTarget || n.toElement, Y = I, J = J ? Cn(J) : null, J !== null && (Ae = Sn(J), J !== Ae || J.tag !== 5 && J.tag !== 6) && (J = null)) : (Y = null, J = I), Y !== J)) {
            if (Z = Xs, b = "onMouseLeave", T = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Zs, b = "onPointerLeave", T = "onPointerEnter", S = "pointer"), Ae = Y == null ? A : Gn(Y), R = J == null ? A : Gn(J), A = new Z(b, S + "leave", Y, n, j), A.target = Ae, A.relatedTarget = R, b = null, Cn(j) === I && (Z = new Z(T, S + "enter", J, n, j), Z.target = R, Z.relatedTarget = Ae, b = Z), Ae = b, Y && J) t: {
              for (Z = Y, T = J, S = 0, R = Z; R; R = Yn(R)) S++;
              for (R = 0, b = T; b; b = Yn(b)) R++;
              for (; 0 < S - R; ) Z = Yn(Z), S--;
              for (; 0 < R - S; ) T = Yn(T), R--;
              for (; S--; ) {
                if (Z === T || T !== null && Z === T.alternate) break t;
                Z = Yn(Z), T = Yn(T);
              }
              Z = null;
            }
            else Z = null;
            Y !== null && Nu(B, A, Y, Z, !1), J !== null && Ae !== null && Nu(B, Ae, J, Z, !0);
          }
        }
        e: {
          if (A = I ? Gn(I) : window, Y = A.nodeName && A.nodeName.toLowerCase(), Y === "select" || Y === "input" && A.type === "file") var te = vm;
          else if (au(A)) if (iu) te = Em;
          else {
            te = gm;
            var re = ym;
          }
          else (Y = A.nodeName) && Y.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (te = _m);
          if (te && (te = te(e, I))) {
            ou(B, te, n, j);
            break e;
          }
          re && re(e, A, I), e === "focusout" && (re = A._wrapperState) && re.controlled && A.type === "number" && qa(A, "number", A.value);
        }
        switch (re = I ? Gn(I) : window, e) {
          case "focusin":
            (au(re) || re.contentEditable === "true") && (Qn = re, So = I, Br = null);
            break;
          case "focusout":
            Br = So = Qn = null;
            break;
          case "mousedown":
            Co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Co = !1, hu(B, n, j);
            break;
          case "selectionchange":
            if (Sm) break;
          case "keydown":
          case "keyup":
            hu(B, n, j);
        }
        var le;
        if (_o) e: {
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
        else Vn ? ru(e, n) && (ie = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ie = "onCompositionStart");
        ie && (eu && n.locale !== "ko" && (Vn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Vn && (le = Ks()) : (ln = j, mo = "value" in ln ? ln.value : ln.textContent, Vn = !0)), re = Fl(I, ie), 0 < re.length && (ie = new Js(ie, e, null, n, j), B.push({ event: ie, listeners: re }), le ? ie.data = le : (le = lu(n), le !== null && (ie.data = le)))), (le = dm ? fm(e, n) : mm(e, n)) && (I = Fl(I, "onBeforeInput"), 0 < I.length && (j = new Js("onBeforeInput", "beforeinput", null, n, j), B.push({ event: j, listeners: I }), j.data = le));
      }
      Cu(B, t);
    });
  }
  function Hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Fl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, u = a.stateNode;
      a.tag === 5 && u !== null && (a = u, u = xr(e, n), u != null && r.unshift(Hr(e, u, a)), u = xr(e, t), u != null && r.push(Hr(e, u, a))), e = e.return;
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
  function Nu(e, t, n, r, a) {
    for (var u = t._reactName, f = []; n !== null && n !== r; ) {
      var g = n, w = g.alternate, I = g.stateNode;
      if (w !== null && w === r) break;
      g.tag === 5 && I !== null && (g = I, a ? (w = xr(n, u), w != null && f.unshift(Hr(n, w, g))) : a || (w = xr(n, u), w != null && f.push(Hr(n, w, g)))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Tm = /\r\n?/g, Rm = /\u0000|\uFFFD/g;
  function Tu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Rm, "");
  }
  function jl(e, t, n) {
    if (t = Tu(t), Tu(e) !== t && n) throw Error(i(425));
  }
  function Ul() {
  }
  var Mo = null, Lo = null;
  function Io(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $o = typeof setTimeout == "function" ? setTimeout : void 0, Pm = typeof clearTimeout == "function" ? clearTimeout : void 0, Ru = typeof Promise == "function" ? Promise : void 0, Mm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ru < "u" ? function(e) {
    return Ru.resolve(null).then(e).catch(Lm);
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
  function on(e) {
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
  function Pu(e) {
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
  var Kn = Math.random().toString(36).slice(2), It = "__reactFiber$" + Kn, Vr = "__reactProps$" + Kn, bt = "__reactContainer$" + Kn, zo = "__reactEvents$" + Kn, Im = "__reactListeners$" + Kn, $m = "__reactHandles$" + Kn;
  function Cn(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[bt] || n[It]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pu(e); e !== null; ) {
          if (n = e[It]) return n;
          e = Pu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Qr(e) {
    return e = e[It] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Bl(e) {
    return e[Vr] || null;
  }
  var Oo = [], Xn = -1;
  function sn(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Xn || (e.current = Oo[Xn], Oo[Xn] = null, Xn--);
  }
  function Se(e, t) {
    Xn++, Oo[Xn] = e.current, e.current = t;
  }
  var un = {}, Ye = sn(un), et = sn(!1), xn = un;
  function Jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, u;
    for (u in n) a[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function tt(e) {
    return e = e.childContextTypes, e != null;
  }
  function bl() {
    Ne(et), Ne(Ye);
  }
  function Mu(e, t, n) {
    if (Ye.current !== un) throw Error(i(168));
    Se(Ye, t), Se(et, n);
  }
  function Lu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(i(108, ke(e) || "Unknown", a));
    return X({}, n, r);
  }
  function Wl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, xn = Ye.current, Se(Ye, e), Se(et, et.current), !0;
  }
  function Iu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n ? (e = Lu(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, Ne(et), Ne(Ye), Se(Ye, e)) : Ne(et), Se(et, n);
  }
  var Wt = null, Hl = !1, Ao = !1;
  function $u(e) {
    Wt === null ? Wt = [e] : Wt.push(e);
  }
  function Dm(e) {
    Hl = !0, $u(e);
  }
  function cn() {
    if (!Ao && Wt !== null) {
      Ao = !0;
      var e = 0, t = we;
      try {
        var n = Wt;
        for (we = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Wt = null, Hl = !1;
      } catch (a) {
        throw Wt !== null && (Wt = Wt.slice(e + 1)), zs(lo, cn), a;
      } finally {
        we = t, Ao = !1;
      }
    }
    return null;
  }
  var Zn = [], er = 0, Vl = null, Ql = 0, pt = [], ht = 0, Nn = null, Ht = 1, Vt = "";
  function Tn(e, t) {
    Zn[er++] = Ql, Zn[er++] = Vl, Vl = e, Ql = t;
  }
  function Du(e, t, n) {
    pt[ht++] = Ht, pt[ht++] = Vt, pt[ht++] = Nn, Nn = e;
    var r = Ht;
    e = Vt;
    var a = 32 - kt(r) - 1;
    r &= ~(1 << a), n += 1;
    var u = 32 - kt(t) + a;
    if (30 < u) {
      var f = a - a % 5;
      u = (r & (1 << f) - 1).toString(32), r >>= f, a -= f, Ht = 1 << 32 - kt(t) + a | n << a | r, Vt = u + e;
    } else Ht = 1 << u | n << a | r, Vt = e;
  }
  function Fo(e) {
    e.return !== null && (Tn(e, 1), Du(e, 1, 0));
  }
  function jo(e) {
    for (; e === Vl; ) Vl = Zn[--er], Zn[er] = null, Ql = Zn[--er], Zn[er] = null;
    for (; e === Nn; ) Nn = pt[--ht], pt[ht] = null, Vt = pt[--ht], pt[ht] = null, Ht = pt[--ht], pt[ht] = null;
  }
  var ut = null, ct = null, Pe = !1, Ct = null;
  function zu(e, t) {
    var n = _t(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ou(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = on(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Nn !== null ? { id: Ht, overflow: Vt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Uo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Bo(e) {
    if (Pe) {
      var t = ct;
      if (t) {
        var n = t;
        if (!Ou(e, t)) {
          if (Uo(e)) throw Error(i(418));
          t = on(n.nextSibling);
          var r = ut;
          t && Ou(e, t) ? zu(r, n) : (e.flags = e.flags & -4097 | 2, Pe = !1, ut = e);
        }
      } else {
        if (Uo(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Pe = !1, ut = e;
      }
    }
  }
  function Au(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ut = e;
  }
  function ql(e) {
    if (e !== ut) return !1;
    if (!Pe) return Au(e), Pe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Io(e.type, e.memoizedProps)), t && (t = ct)) {
      if (Uo(e)) throw Fu(), Error(i(418));
      for (; t; ) zu(e, t), t = on(t.nextSibling);
    }
    if (Au(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ct = on(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ct = null;
      }
    } else ct = ut ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fu() {
    for (var e = ct; e; ) e = on(e.nextSibling);
  }
  function tr() {
    ct = ut = null, Pe = !1;
  }
  function bo(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var zm = z.ReactCurrentBatchConfig;
  function qr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var a = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(f) {
          var g = a.refs;
          f === null ? delete g[u] : g[u] = f;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Yl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ju(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uu(e) {
    function t(T, S) {
      if (e) {
        var R = T.deletions;
        R === null ? (T.deletions = [S], T.flags |= 16) : R.push(S);
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
      return T = gn(T, S), T.index = 0, T.sibling = null, T;
    }
    function u(T, S, R) {
      return T.index = R, e ? (R = T.alternate, R !== null ? (R = R.index, R < S ? (T.flags |= 2, S) : R) : (T.flags |= 2, S)) : (T.flags |= 1048576, S);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function g(T, S, R, b) {
      return S === null || S.tag !== 6 ? (S = $i(R, T.mode, b), S.return = T, S) : (S = a(S, R), S.return = T, S);
    }
    function w(T, S, R, b) {
      var te = R.type;
      return te === ee ? j(T, S, R.props.children, b, R.key) : S !== null && (S.elementType === te || typeof te == "object" && te !== null && te.$$typeof === Te && ju(te) === S.type) ? (b = a(S, R.props), b.ref = qr(T, S, R), b.return = T, b) : (b = ga(R.type, R.key, R.props, null, T.mode, b), b.ref = qr(T, S, R), b.return = T, b);
    }
    function I(T, S, R, b) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== R.containerInfo || S.stateNode.implementation !== R.implementation ? (S = Di(R, T.mode, b), S.return = T, S) : (S = a(S, R.children || []), S.return = T, S);
    }
    function j(T, S, R, b, te) {
      return S === null || S.tag !== 7 ? (S = zn(R, T.mode, b, te), S.return = T, S) : (S = a(S, R), S.return = T, S);
    }
    function B(T, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return S = $i("" + S, T.mode, R), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case W:
            return R = ga(S.type, S.key, S.props, null, T.mode, R), R.ref = qr(T, null, S), R.return = T, R;
          case U:
            return S = Di(S, T.mode, R), S.return = T, S;
          case Te:
            var b = S._init;
            return B(T, b(S._payload), R);
        }
        if (kr(S) || ae(S)) return S = zn(S, T.mode, R, null), S.return = T, S;
        Yl(T, S);
      }
      return null;
    }
    function A(T, S, R, b) {
      var te = S !== null ? S.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return te !== null ? null : g(T, S, "" + R, b);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            return R.key === te ? w(T, S, R, b) : null;
          case U:
            return R.key === te ? I(T, S, R, b) : null;
          case Te:
            return te = R._init, A(
              T,
              S,
              te(R._payload),
              b
            );
        }
        if (kr(R) || ae(R)) return te !== null ? null : j(T, S, R, b, null);
        Yl(T, R);
      }
      return null;
    }
    function Y(T, S, R, b, te) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return T = T.get(R) || null, g(S, T, "" + b, te);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case W:
            return T = T.get(b.key === null ? R : b.key) || null, w(S, T, b, te);
          case U:
            return T = T.get(b.key === null ? R : b.key) || null, I(S, T, b, te);
          case Te:
            var re = b._init;
            return Y(T, S, R, re(b._payload), te);
        }
        if (kr(b) || ae(b)) return T = T.get(R) || null, j(S, T, b, te, null);
        Yl(S, b);
      }
      return null;
    }
    function J(T, S, R, b) {
      for (var te = null, re = null, le = S, ie = S = 0, We = null; le !== null && ie < R.length; ie++) {
        le.index > ie ? (We = le, le = null) : We = le.sibling;
        var ve = A(T, le, R[ie], b);
        if (ve === null) {
          le === null && (le = We);
          break;
        }
        e && le && ve.alternate === null && t(T, le), S = u(ve, S, ie), re === null ? te = ve : re.sibling = ve, re = ve, le = We;
      }
      if (ie === R.length) return n(T, le), Pe && Tn(T, ie), te;
      if (le === null) {
        for (; ie < R.length; ie++) le = B(T, R[ie], b), le !== null && (S = u(le, S, ie), re === null ? te = le : re.sibling = le, re = le);
        return Pe && Tn(T, ie), te;
      }
      for (le = r(T, le); ie < R.length; ie++) We = Y(le, T, ie, R[ie], b), We !== null && (e && We.alternate !== null && le.delete(We.key === null ? ie : We.key), S = u(We, S, ie), re === null ? te = We : re.sibling = We, re = We);
      return e && le.forEach(function(_n) {
        return t(T, _n);
      }), Pe && Tn(T, ie), te;
    }
    function Z(T, S, R, b) {
      var te = ae(R);
      if (typeof te != "function") throw Error(i(150));
      if (R = te.call(R), R == null) throw Error(i(151));
      for (var re = te = null, le = S, ie = S = 0, We = null, ve = R.next(); le !== null && !ve.done; ie++, ve = R.next()) {
        le.index > ie ? (We = le, le = null) : We = le.sibling;
        var _n = A(T, le, ve.value, b);
        if (_n === null) {
          le === null && (le = We);
          break;
        }
        e && le && _n.alternate === null && t(T, le), S = u(_n, S, ie), re === null ? te = _n : re.sibling = _n, re = _n, le = We;
      }
      if (ve.done) return n(
        T,
        le
      ), Pe && Tn(T, ie), te;
      if (le === null) {
        for (; !ve.done; ie++, ve = R.next()) ve = B(T, ve.value, b), ve !== null && (S = u(ve, S, ie), re === null ? te = ve : re.sibling = ve, re = ve);
        return Pe && Tn(T, ie), te;
      }
      for (le = r(T, le); !ve.done; ie++, ve = R.next()) ve = Y(le, T, ie, ve.value, b), ve !== null && (e && ve.alternate !== null && le.delete(ve.key === null ? ie : ve.key), S = u(ve, S, ie), re === null ? te = ve : re.sibling = ve, re = ve);
      return e && le.forEach(function(pp) {
        return t(T, pp);
      }), Pe && Tn(T, ie), te;
    }
    function Ae(T, S, R, b) {
      if (typeof R == "object" && R !== null && R.type === ee && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            e: {
              for (var te = R.key, re = S; re !== null; ) {
                if (re.key === te) {
                  if (te = R.type, te === ee) {
                    if (re.tag === 7) {
                      n(T, re.sibling), S = a(re, R.props.children), S.return = T, T = S;
                      break e;
                    }
                  } else if (re.elementType === te || typeof te == "object" && te !== null && te.$$typeof === Te && ju(te) === re.type) {
                    n(T, re.sibling), S = a(re, R.props), S.ref = qr(T, re, R), S.return = T, T = S;
                    break e;
                  }
                  n(T, re);
                  break;
                } else t(T, re);
                re = re.sibling;
              }
              R.type === ee ? (S = zn(R.props.children, T.mode, b, R.key), S.return = T, T = S) : (b = ga(R.type, R.key, R.props, null, T.mode, b), b.ref = qr(T, S, R), b.return = T, T = b);
            }
            return f(T);
          case U:
            e: {
              for (re = R.key; S !== null; ) {
                if (S.key === re) if (S.tag === 4 && S.stateNode.containerInfo === R.containerInfo && S.stateNode.implementation === R.implementation) {
                  n(T, S.sibling), S = a(S, R.children || []), S.return = T, T = S;
                  break e;
                } else {
                  n(T, S);
                  break;
                }
                else t(T, S);
                S = S.sibling;
              }
              S = Di(R, T.mode, b), S.return = T, T = S;
            }
            return f(T);
          case Te:
            return re = R._init, Ae(T, S, re(R._payload), b);
        }
        if (kr(R)) return J(T, S, R, b);
        if (ae(R)) return Z(T, S, R, b);
        Yl(T, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, S !== null && S.tag === 6 ? (n(T, S.sibling), S = a(S, R), S.return = T, T = S) : (n(T, S), S = $i(R, T.mode, b), S.return = T, T = S), f(T)) : n(T, S);
    }
    return Ae;
  }
  var nr = Uu(!0), Bu = Uu(!1), Kl = sn(null), Gl = null, rr = null, Wo = null;
  function Ho() {
    Wo = rr = Gl = null;
  }
  function Vo(e) {
    var t = Kl.current;
    Ne(Kl), e._currentValue = t;
  }
  function Qo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function lr(e, t) {
    Gl = e, Wo = rr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), e.firstContext = null);
  }
  function vt(e) {
    var t = e._currentValue;
    if (Wo !== e) if (e = { context: e, memoizedValue: t, next: null }, rr === null) {
      if (Gl === null) throw Error(i(308));
      rr = e, Gl.dependencies = { lanes: 0, firstContext: e };
    } else rr = rr.next = e;
    return t;
  }
  var Rn = null;
  function qo(e) {
    Rn === null ? Rn = [e] : Rn.push(e);
  }
  function bu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, qo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Qt(e, r);
  }
  function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var dn = !1;
  function Yo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Wu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (me & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Qt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, qo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Qt(e, n);
  }
  function Xl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
    }
  }
  function Hu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? a = u = f : u = u.next = f, n = n.next;
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
    dn = !1;
    var u = a.firstBaseUpdate, f = a.lastBaseUpdate, g = a.shared.pending;
    if (g !== null) {
      a.shared.pending = null;
      var w = g, I = w.next;
      w.next = null, f === null ? u = I : f.next = I, f = w;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, g = j.lastBaseUpdate, g !== f && (g === null ? j.firstBaseUpdate = I : g.next = I, j.lastBaseUpdate = w));
    }
    if (u !== null) {
      var B = a.baseState;
      f = 0, j = I = w = null, g = u;
      do {
        var A = g.lane, Y = g.eventTime;
        if ((r & A) === A) {
          j !== null && (j = j.next = {
            eventTime: Y,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var J = e, Z = g;
            switch (A = t, Y = n, Z.tag) {
              case 1:
                if (J = Z.payload, typeof J == "function") {
                  B = J.call(Y, B, A);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = Z.payload, A = typeof J == "function" ? J.call(Y, B, A) : J, A == null) break e;
                B = X({}, B, A);
                break e;
              case 2:
                dn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, A = a.effects, A === null ? a.effects = [g] : A.push(g));
        } else Y = { eventTime: Y, lane: A, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, j === null ? (I = j = Y, w = B) : j = j.next = Y, f |= A;
        if (g = g.next, g === null) {
          if (g = a.shared.pending, g === null) break;
          A = g, g = A.next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null;
        }
      } while (!0);
      if (j === null && (w = B), a.baseState = w, a.firstBaseUpdate = I, a.lastBaseUpdate = j, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          f |= a.lane, a = a.next;
        while (a !== t);
      } else u === null && (a.shared.lanes = 0);
      Ln |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Vu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(i(191, a));
        a.call(r);
      }
    }
  }
  var Yr = {}, $t = sn(Yr), Kr = sn(Yr), Gr = sn(Yr);
  function Pn(e) {
    if (e === Yr) throw Error(i(174));
    return e;
  }
  function Ko(e, t) {
    switch (Se(Gr, t), Se(Kr, e), Se($t, Yr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ka(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ka(t, e);
    }
    Ne($t), Se($t, t);
  }
  function ar() {
    Ne($t), Ne(Kr), Ne(Gr);
  }
  function Qu(e) {
    Pn(Gr.current);
    var t = Pn($t.current), n = Ka(t, e.type);
    t !== n && (Se(Kr, e), Se($t, n));
  }
  function Go(e) {
    Kr.current === e && (Ne($t), Ne(Kr));
  }
  var Ie = sn(0);
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
  var ea = z.ReactCurrentDispatcher, Zo = z.ReactCurrentBatchConfig, Mn = 0, $e = null, je = null, Be = null, ta = !1, Xr = !1, Jr = 0, Om = 0;
  function Ke() {
    throw Error(i(321));
  }
  function ei(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
    return !0;
  }
  function ti(e, t, n, r, a, u) {
    if (Mn = u, $e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ea.current = e === null || e.memoizedState === null ? Um : Bm, e = n(r, a), Xr) {
      u = 0;
      do {
        if (Xr = !1, Jr = 0, 25 <= u) throw Error(i(301));
        u += 1, Be = je = null, t.updateQueue = null, ea.current = bm, e = n(r, a);
      } while (Xr);
    }
    if (ea.current = la, t = je !== null && je.next !== null, Mn = 0, Be = je = $e = null, ta = !1, t) throw Error(i(300));
    return e;
  }
  function ni() {
    var e = Jr !== 0;
    return Jr = 0, e;
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Be === null ? $e.memoizedState = Be = e : Be = Be.next = e, Be;
  }
  function yt() {
    if (je === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Be === null ? $e.memoizedState : Be.next;
    if (t !== null) Be = t, je = e;
    else {
      if (e === null) throw Error(i(310));
      je = e, e = { memoizedState: je.memoizedState, baseState: je.baseState, baseQueue: je.baseQueue, queue: je.queue, next: null }, Be === null ? $e.memoizedState = Be = e : Be = Be.next = e;
    }
    return Be;
  }
  function Zr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ri(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = je, a = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = u.next, u.next = f;
      }
      r.baseQueue = a = u, n.pending = null;
    }
    if (a !== null) {
      u = a.next, r = r.baseState;
      var g = f = null, w = null, I = u;
      do {
        var j = I.lane;
        if ((Mn & j) === j) w !== null && (w = w.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var B = {
            lane: j,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          w === null ? (g = w = B, f = r) : w = w.next = B, $e.lanes |= j, Ln |= j;
        }
        I = I.next;
      } while (I !== null && I !== u);
      w === null ? f = r : w.next = g, St(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = f, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        u = a.lane, $e.lanes |= u, Ln |= u, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function li(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var f = a = a.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== a);
      St(u, t.memoizedState) || (nt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function qu() {
  }
  function Yu(e, t) {
    var n = $e, r = yt(), a = t(), u = !St(r.memoizedState, a);
    if (u && (r.memoizedState = a, nt = !0), r = r.queue, ai(Xu.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Be !== null && Be.memoizedState.tag & 1) {
      if (n.flags |= 2048, el(9, Gu.bind(null, n, r, a, t), void 0, null), be === null) throw Error(i(349));
      (Mn & 30) !== 0 || Ku(n, t, a);
    }
    return a;
  }
  function Ku(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Gu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ju(t) && Zu(e);
  }
  function Xu(e, t, n) {
    return n(function() {
      Ju(t) && Zu(e);
    });
  }
  function Ju(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !St(e, n);
    } catch {
      return !0;
    }
  }
  function Zu(e) {
    var t = Qt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function ec(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: e }, t.queue = e, e = e.dispatch = jm.bind(null, $e, e), [t.memoizedState, e];
  }
  function el(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function tc() {
    return yt().memoizedState;
  }
  function na(e, t, n, r) {
    var a = Dt();
    $e.flags |= e, a.memoizedState = el(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ra(e, t, n, r) {
    var a = yt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (je !== null) {
      var f = je.memoizedState;
      if (u = f.destroy, r !== null && ei(r, f.deps)) {
        a.memoizedState = el(t, n, u, r);
        return;
      }
    }
    $e.flags |= e, a.memoizedState = el(1 | t, n, u, r);
  }
  function nc(e, t) {
    return na(8390656, 8, e, t);
  }
  function ai(e, t) {
    return ra(2048, 8, e, t);
  }
  function rc(e, t) {
    return ra(4, 2, e, t);
  }
  function lc(e, t) {
    return ra(4, 4, e, t);
  }
  function ac(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function oc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ra(4, 4, ac.bind(null, t, e), n);
  }
  function oi() {
  }
  function ic(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ei(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function sc(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ei(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function uc(e, t, n) {
    return (Mn & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n) : (St(n, t) || (n = js(), $e.lanes |= n, Ln |= n, e.baseState = !0), t);
  }
  function Am(e, t) {
    var n = we;
    we = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Zo.transition;
    Zo.transition = {};
    try {
      e(!1), t();
    } finally {
      we = n, Zo.transition = r;
    }
  }
  function cc() {
    return yt().memoizedState;
  }
  function Fm(e, t, n) {
    var r = vn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dc(e)) fc(t, n);
    else if (n = bu(e, t, n, r), n !== null) {
      var a = Ze();
      Rt(n, e, r, a), mc(n, t, r);
    }
  }
  function jm(e, t, n) {
    var r = vn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (dc(e)) fc(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var f = t.lastRenderedState, g = u(f, n);
        if (a.hasEagerState = !0, a.eagerState = g, St(g, f)) {
          var w = t.interleaved;
          w === null ? (a.next = a, qo(t)) : (a.next = w.next, w.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = bu(e, t, a, r), n !== null && (a = Ze(), Rt(n, e, r, a), mc(n, t, r));
    }
  }
  function dc(e) {
    var t = e.alternate;
    return e === $e || t !== null && t === $e;
  }
  function fc(e, t) {
    Xr = ta = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function mc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
    }
  }
  var la = { readContext: vt, useCallback: Ke, useContext: Ke, useEffect: Ke, useImperativeHandle: Ke, useInsertionEffect: Ke, useLayoutEffect: Ke, useMemo: Ke, useReducer: Ke, useRef: Ke, useState: Ke, useDebugValue: Ke, useDeferredValue: Ke, useTransition: Ke, useMutableSource: Ke, useSyncExternalStore: Ke, useId: Ke, unstable_isNewReconciler: !1 }, Um = { readContext: vt, useCallback: function(e, t) {
    return Dt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: vt, useEffect: nc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, na(
      4194308,
      4,
      ac.bind(null, t, e),
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
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, $e, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Dt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ec, useDebugValue: oi, useDeferredValue: function(e) {
    return Dt().memoizedState = e;
  }, useTransition: function() {
    var e = ec(!1), t = e[0];
    return e = Am.bind(null, e[1]), Dt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = $e, a = Dt();
    if (Pe) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), be === null) throw Error(i(349));
      (Mn & 30) !== 0 || Ku(r, t, n);
    }
    a.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return a.queue = u, nc(Xu.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, el(9, Gu.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = be.identifierPrefix;
    if (Pe) {
      var n = Vt, r = Ht;
      n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Om++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Bm = {
    readContext: vt,
    useCallback: ic,
    useContext: vt,
    useEffect: ai,
    useImperativeHandle: oc,
    useInsertionEffect: rc,
    useLayoutEffect: lc,
    useMemo: sc,
    useReducer: ri,
    useRef: tc,
    useState: function() {
      return ri(Zr);
    },
    useDebugValue: oi,
    useDeferredValue: function(e) {
      var t = yt();
      return uc(t, je.memoizedState, e);
    },
    useTransition: function() {
      var e = ri(Zr)[0], t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: qu,
    useSyncExternalStore: Yu,
    useId: cc,
    unstable_isNewReconciler: !1
  }, bm = { readContext: vt, useCallback: ic, useContext: vt, useEffect: ai, useImperativeHandle: oc, useInsertionEffect: rc, useLayoutEffect: lc, useMemo: sc, useReducer: li, useRef: tc, useState: function() {
    return li(Zr);
  }, useDebugValue: oi, useDeferredValue: function(e) {
    var t = yt();
    return je === null ? t.memoizedState = e : uc(t, je.memoizedState, e);
  }, useTransition: function() {
    var e = li(Zr)[0], t = yt().memoizedState;
    return [e, t];
  }, useMutableSource: qu, useSyncExternalStore: Yu, useId: cc, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = X({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ii(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var aa = { isMounted: function(e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = vn(e), u = qt(r, a);
    u.payload = t, n != null && (u.callback = n), t = fn(e, u, a), t !== null && (Rt(t, e, a, r), Xl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ze(), a = vn(e), u = qt(r, a);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = fn(e, u, a), t !== null && (Rt(t, e, a, r), Xl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ze(), r = vn(e), a = qt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = fn(e, a, r), t !== null && (Rt(t, e, r, n), Xl(t, e, r));
  } };
  function pc(e, t, n, r, a, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(a, u) : !0;
  }
  function hc(e, t, n) {
    var r = !1, a = un, u = t.contextType;
    return typeof u == "object" && u !== null ? u = vt(u) : (a = tt(t) ? xn : Ye.current, r = t.contextTypes, u = (r = r != null) ? Jn(e, a) : un), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = aa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function vc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && aa.enqueueReplaceState(t, t.state, null);
  }
  function si(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Yo(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? a.context = vt(u) : (u = tt(t) ? xn : Ye.current, a.context = Jn(e, u)), a.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (ii(e, t, u, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && aa.enqueueReplaceState(a, a.state, null), Jl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function or(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
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
  function yc(e, t, n) {
    n = qt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      fa || (fa = !0, xi = r), ci(e, t);
    }, n;
  }
  function gc(e, t, n) {
    n = qt(-1, n), n.tag = 3;
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
      ci(e, t), typeof r != "function" && (pn === null ? pn = /* @__PURE__ */ new Set([this]) : pn.add(this));
      var f = t.stack;
      this.componentDidCatch(t.value, { componentStack: f !== null ? f : "" });
    }), n;
  }
  function _c(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Wm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = rp.bind(null, e, t, n), t.then(e, e));
  }
  function Ec(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wc(e, t, n, r, a) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qt(-1, 1), t.tag = 2, fn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var Hm = z.ReactCurrentOwner, nt = !1;
  function Je(e, t, n, r) {
    t.child = e === null ? Bu(t, null, n, r) : nr(t, e.child, n, r);
  }
  function kc(e, t, n, r, a) {
    n = n.render;
    var u = t.ref;
    return lr(t, a), r = ti(e, t, n, r, u, a), n = ni(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Yt(e, t, a)) : (Pe && n && Fo(t), t.flags |= 1, Je(e, t, r, a), t.child);
  }
  function Sc(e, t, n, r, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Ii(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Cc(e, t, u, r, a)) : (e = ga(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & a) === 0) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ur, n(f, r) && e.ref === t.ref) return Yt(e, t, a);
    }
    return t.flags |= 1, e = gn(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cc(e, t, n, r, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ur(u, r) && e.ref === t.ref) if (nt = !1, t.pendingProps = r = u, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (nt = !0);
      else return t.lanes = e.lanes, Yt(e, t, a);
    }
    return di(e, t, n, r, a);
  }
  function xc(e, t, n) {
    var r = t.pendingProps, a = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(sr, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(sr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, Se(sr, dt), dt |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, Se(sr, dt), dt |= r;
    return Je(e, t, a, n), t.child;
  }
  function Nc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function di(e, t, n, r, a) {
    var u = tt(n) ? xn : Ye.current;
    return u = Jn(t, u), lr(t, a), n = ti(e, t, n, r, u, a), r = ni(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Yt(e, t, a)) : (Pe && r && Fo(t), t.flags |= 1, Je(e, t, n, a), t.child);
  }
  function Tc(e, t, n, r, a) {
    if (tt(n)) {
      var u = !0;
      Wl(t);
    } else u = !1;
    if (lr(t, a), t.stateNode === null) ia(e, t), hc(t, n, r), si(t, n, r, a), r = !0;
    else if (e === null) {
      var f = t.stateNode, g = t.memoizedProps;
      f.props = g;
      var w = f.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = vt(I) : (I = tt(n) ? xn : Ye.current, I = Jn(t, I));
      var j = n.getDerivedStateFromProps, B = typeof j == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      B || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== r || w !== I) && vc(t, f, r, I), dn = !1;
      var A = t.memoizedState;
      f.state = A, Jl(t, r, f, a), w = t.memoizedState, g !== r || A !== w || et.current || dn ? (typeof j == "function" && (ii(t, n, j, r), w = t.memoizedState), (g = dn || pc(t, n, g, r, A, w, I)) ? (B || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), f.props = r, f.state = w, f.context = I, r = g) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      f = t.stateNode, Wu(e, t), g = t.memoizedProps, I = t.type === t.elementType ? g : xt(t.type, g), f.props = I, B = t.pendingProps, A = f.context, w = n.contextType, typeof w == "object" && w !== null ? w = vt(w) : (w = tt(n) ? xn : Ye.current, w = Jn(t, w));
      var Y = n.getDerivedStateFromProps;
      (j = typeof Y == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== B || A !== w) && vc(t, f, r, w), dn = !1, A = t.memoizedState, f.state = A, Jl(t, r, f, a);
      var J = t.memoizedState;
      g !== B || A !== J || et.current || dn ? (typeof Y == "function" && (ii(t, n, Y, r), J = t.memoizedState), (I = dn || pc(t, n, I, r, A, J, w) || !1) ? (j || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(r, J, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(r, J, w)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = J), f.props = r, f.state = J, f.context = w, r = I) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return fi(e, t, n, r, u, a);
  }
  function fi(e, t, n, r, a, u) {
    Nc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return a && Iu(t, n, !1), Yt(e, t, u);
    r = t.stateNode, Hm.current = t;
    var g = f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && f ? (t.child = nr(t, e.child, null, u), t.child = nr(t, null, g, u)) : Je(e, t, g, u), t.memoizedState = r.state, a && Iu(t, n, !0), t.child;
  }
  function Rc(e) {
    var t = e.stateNode;
    t.pendingContext ? Mu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Mu(e, t.context, !1), Ko(e, t.containerInfo);
  }
  function Pc(e, t, n, r, a) {
    return tr(), bo(a), t.flags |= 256, Je(e, t, n, r), t.child;
  }
  var mi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mc(e, t, n) {
    var r = t.pendingProps, a = Ie.current, u = !1, f = (t.flags & 128) !== 0, g;
    if ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), g ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Se(Ie, a & 1), e === null)
      return Bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (f = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, f = { mode: "hidden", children: f }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = f) : u = _a(f, r, 0, null), e = zn(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = pi(n), t.memoizedState = mi, e) : hi(t, f));
    if (a = e.memoizedState, a !== null && (g = a.dehydrated, g !== null)) return Vm(e, t, f, r, g, a, n);
    if (u) {
      u = r.fallback, f = t.mode, a = e.child, g = a.sibling;
      var w = { mode: "hidden", children: r.children };
      return (f & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = gn(a, w), r.subtreeFlags = a.subtreeFlags & 14680064), g !== null ? u = gn(g, u) : (u = zn(u, f, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, f = e.child.memoizedState, f = f === null ? pi(n) : { baseLanes: f.baseLanes | n, cachePool: null, transitions: f.transitions }, u.memoizedState = f, u.childLanes = e.childLanes & ~n, t.memoizedState = mi, r;
    }
    return u = e.child, e = u.sibling, r = gn(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function hi(e, t) {
    return t = _a({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function oa(e, t, n, r) {
    return r !== null && bo(r), nr(t, e.child, null, n), e = hi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Vm(e, t, n, r, a, u, f) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ui(Error(i(422))), oa(e, t, f, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, a = t.mode, r = _a({ mode: "visible", children: r.children }, a, 0, null), u = zn(u, a, f, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && nr(t, e.child, null, f), t.child.memoizedState = pi(f), t.memoizedState = mi, u);
    if ((t.mode & 1) === 0) return oa(e, t, f, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var g = r.dgst;
      return r = g, u = Error(i(419)), r = ui(u, r, void 0), oa(e, t, f, r);
    }
    if (g = (f & e.childLanes) !== 0, nt || g) {
      if (r = be, r !== null) {
        switch (f & -f) {
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
        a = (a & (r.suspendedLanes | f)) !== 0 ? 0 : a, a !== 0 && a !== u.retryLane && (u.retryLane = a, Qt(e, a), Rt(r, e, a, -1));
      }
      return Li(), r = ui(Error(i(421))), oa(e, t, f, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lp.bind(null, e), a._reactRetry = t, null) : (e = u.treeContext, ct = on(a.nextSibling), ut = t, Pe = !0, Ct = null, e !== null && (pt[ht++] = Ht, pt[ht++] = Vt, pt[ht++] = Nn, Ht = e.id, Vt = e.overflow, Nn = t), t = hi(t, r.children), t.flags |= 4096, t);
  }
  function Lc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Qo(e.return, t, n);
  }
  function vi(e, t, n, r, a) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = a);
  }
  function Ic(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, u = r.tail;
    if (Je(e, t, r.children, n), r = Ie.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lc(e, n, t);
        else if (e.tag === 19) Lc(e, n, t);
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
    if (Se(Ie, r), (t.mode & 1) === 0) t.memoizedState = null;
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
  function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = gn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Qm(e, t, n) {
    switch (t.tag) {
      case 3:
        Rc(t), tr();
        break;
      case 5:
        Qu(t);
        break;
      case 1:
        tt(t.type) && Wl(t);
        break;
      case 4:
        Ko(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Se(Kl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Se(Ie, Ie.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Mc(e, t, n) : (Se(Ie, Ie.current & 1), e = Yt(e, t, n), e !== null ? e.sibling : null);
        Se(Ie, Ie.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Ic(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Se(Ie, Ie.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xc(e, t, n);
    }
    return Yt(e, t, n);
  }
  var $c, yi, Dc, zc;
  $c = function(e, t) {
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
  }, Dc = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
      e = t.stateNode, Pn($t.current);
      var u = null;
      switch (n) {
        case "input":
          a = Va(e, a), r = Va(e, r), u = [];
          break;
        case "select":
          a = X({}, a, { value: void 0 }), r = X({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          a = Ya(e, a), r = Ya(e, r), u = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ul);
      }
      Ga(n, r);
      var f;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var g = a[I];
        for (f in g) g.hasOwnProperty(f) && (n || (n = {}), n[f] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (d.hasOwnProperty(I) ? u || (u = []) : (u = u || []).push(I, null));
      for (I in r) {
        var w = r[I];
        if (g = a != null ? a[I] : void 0, r.hasOwnProperty(I) && w !== g && (w != null || g != null)) if (I === "style") if (g) {
          for (f in g) !g.hasOwnProperty(f) || w && w.hasOwnProperty(f) || (n || (n = {}), n[f] = "");
          for (f in w) w.hasOwnProperty(f) && g[f] !== w[f] && (n || (n = {}), n[f] = w[f]);
        } else n || (u || (u = []), u.push(
          I,
          n
        )), n = w;
        else I === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, g = g ? g.__html : void 0, w != null && g !== w && (u = u || []).push(I, w)) : I === "children" ? typeof w != "string" && typeof w != "number" || (u = u || []).push(I, "" + w) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (d.hasOwnProperty(I) ? (w != null && I === "onScroll" && xe("scroll", e), u || g === w || (u = [])) : (u = u || []).push(I, w));
      }
      n && (u = u || []).push("style", n);
      var I = u;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, zc = function(e, t, n, r) {
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
        return tt(t.type) && bl(), Ge(t), null;
      case 3:
        return r = t.stateNode, ar(), Ne(et), Ne(Ye), Jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (Ri(Ct), Ct = null))), yi(e, t), Ge(t), null;
      case 5:
        Go(t);
        var a = Pn(Gr.current);
        if (n = t.type, e !== null && t.stateNode != null) Dc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return Ge(t), null;
          }
          if (e = Pn($t.current), ql(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[It] = t, r[Vr] = u, e = (t.mode & 1) !== 0, n) {
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
                for (a = 0; a < br.length; a++) xe(br[a], r);
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
                hs(r, u), xe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, xe("invalid", r);
                break;
              case "textarea":
                gs(r, u), xe("invalid", r);
            }
            Ga(n, u), a = null;
            for (var f in u) if (u.hasOwnProperty(f)) {
              var g = u[f];
              f === "children" ? typeof g == "string" ? r.textContent !== g && (u.suppressHydrationWarning !== !0 && jl(r.textContent, g, e), a = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (u.suppressHydrationWarning !== !0 && jl(
                r.textContent,
                g,
                e
              ), a = ["children", "" + g]) : d.hasOwnProperty(f) && g != null && f === "onScroll" && xe("scroll", r);
            }
            switch (n) {
              case "input":
                vl(r), ys(r, u, !0);
                break;
              case "textarea":
                vl(r), Es(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Ul);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            f = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ws(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = f.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = f.createElement(n, { is: r.is }) : (e = f.createElement(n), n === "select" && (f = e, r.multiple ? f.multiple = !0 : r.size && (f.size = r.size))) : e = f.createElementNS(e, n), e[It] = t, e[Vr] = r, $c(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (f = Xa(n, r), n) {
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
                  for (a = 0; a < br.length; a++) xe(br[a], e);
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
                  hs(e, r), a = Va(e, r), xe("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = X({}, r, { value: void 0 }), xe("invalid", e);
                  break;
                case "textarea":
                  gs(e, r), a = Ya(e, r), xe("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ga(n, a), g = a;
              for (u in g) if (g.hasOwnProperty(u)) {
                var w = g[u];
                u === "style" ? Cs(e, w) : u === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && ks(e, w)) : u === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && Sr(e, w) : typeof w == "number" && Sr(e, "" + w) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? w != null && u === "onScroll" && xe("scroll", e) : w != null && O(e, u, w, f));
              }
              switch (n) {
                case "input":
                  vl(e), ys(e, r, !1);
                  break;
                case "textarea":
                  vl(e), Es(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? Un(e, !!r.multiple, u, !1) : r.defaultValue != null && Un(
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
        if (e && t.stateNode != null) zc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Pn(Gr.current), Pn($t.current), ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[It] = t, (u = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[It] = t, t.stateNode = r;
        }
        return Ge(t), null;
      case 13:
        if (Ne(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Pe && ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Fu(), tr(), t.flags |= 98560, u = !1;
          else if (u = ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[It] = t;
            } else tr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), u = !1;
          } else Ct !== null && (Ri(Ct), Ct = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? Ue === 0 && (Ue = 3) : Li())), t.updateQueue !== null && (t.flags |= 4), Ge(t), null);
      case 4:
        return ar(), yi(e, t), e === null && Wr(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return Vo(t.type._context), Ge(t), null;
      case 17:
        return tt(t.type) && bl(), Ge(t), null;
      case 19:
        if (Ne(Ie), u = t.memoizedState, u === null) return Ge(t), null;
        if (r = (t.flags & 128) !== 0, f = u.rendering, f === null) if (r) tl(u, !1);
        else {
          if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Zl(e), f !== null) {
              for (t.flags |= 128, tl(u, !1), r = f.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, f = u.alternate, f === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = f.childLanes, u.lanes = f.lanes, u.child = f.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = f.memoizedProps, u.memoizedState = f.memoizedState, u.updateQueue = f.updateQueue, u.type = f.type, e = f.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Se(Ie, Ie.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Oe() > ur && (t.flags |= 128, r = !0, tl(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Zl(f), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tl(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !Pe) return Ge(t), null;
          } else 2 * Oe() - u.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, tl(u, !1), t.lanes = 4194304);
          u.isBackwards ? (f.sibling = t.child, t.child = f) : (n = u.last, n !== null ? n.sibling = f : t.child = f, u.last = f);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Oe(), t.sibling = null, n = Ie.current, Se(Ie, r ? n & 1 | 2 : n & 1), t) : (Ge(t), null);
      case 22:
      case 23:
        return Mi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Ym(e, t) {
    switch (jo(t), t.tag) {
      case 1:
        return tt(t.type) && bl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ar(), Ne(et), Ne(Ye), Jo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Go(t), null;
      case 13:
        if (Ne(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          tr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(Ie), null;
      case 4:
        return ar(), null;
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
  var sa = !1, Xe = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function ir(e, t) {
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
  var Oc = !1;
  function Gm(e, t) {
    if (Mo = Rl, e = pu(), ko(e)) {
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
          var f = 0, g = -1, w = -1, I = 0, j = 0, B = e, A = null;
          t: for (; ; ) {
            for (var Y; B !== n || a !== 0 && B.nodeType !== 3 || (g = f + a), B !== u || r !== 0 && B.nodeType !== 3 || (w = f + r), B.nodeType === 3 && (f += B.nodeValue.length), (Y = B.firstChild) !== null; )
              A = B, B = Y;
            for (; ; ) {
              if (B === e) break t;
              if (A === n && ++I === a && (g = f), A === u && ++j === r && (w = f), (Y = B.nextSibling) !== null) break;
              B = A, A = B.parentNode;
            }
            B = Y;
          }
          n = g === -1 || w === -1 ? null : { start: g, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Lo = { focusedElem: e, selectionRange: n }, Rl = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
    else for (; G !== null; ) {
      t = G;
      try {
        var J = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (J !== null) {
              var Z = J.memoizedProps, Ae = J.memoizedState, T = t.stateNode, S = T.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : xt(t.type, Z), Ae);
              T.__reactInternalSnapshotBeforeUpdate = S;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(i(163));
        }
      } catch (b) {
        ze(t, t.return, b);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, G = e;
        break;
      }
      G = t.return;
    }
    return J = Oc, Oc = !1, J;
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
  function Ac(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ac(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[It], delete t[Vr], delete t[zo], delete t[Im], delete t[$m])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function jc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fc(e.return)) return null;
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
  var Ve = null, Nt = !1;
  function mn(e, t, n) {
    for (n = n.child; n !== null; ) Uc(e, t, n), n = n.sibling;
  }
  function Uc(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
      Lt.onCommitFiberUnmount(kl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Xe || ir(n, t);
      case 6:
        var r = Ve, a = Nt;
        Ve = null, mn(e, t, n), Ve = r, Nt = a, Ve !== null && (Nt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null && (Nt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Do(e.parentNode, n) : e.nodeType === 1 && Do(e, n), Dr(e)) : Do(Ve, n.stateNode));
        break;
      case 4:
        r = Ve, a = Nt, Ve = n.stateNode.containerInfo, Nt = !0, mn(e, t, n), Ve = r, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var u = a, f = u.destroy;
            u = u.tag, f !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && gi(n, t, f), a = a.next;
          } while (a !== r);
        }
        mn(e, t, n);
        break;
      case 1:
        if (!Xe && (ir(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          ze(n, t, g);
        }
        mn(e, t, n);
        break;
      case 21:
        mn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Xe = (r = Xe) || n.memoizedState !== null, mn(e, t, n), Xe = r) : mn(e, t, n);
        break;
      default:
        mn(e, t, n);
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
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var u = e, f = t, g = f;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              Ve = g.stateNode, Nt = !1;
              break e;
            case 3:
              Ve = g.stateNode.containerInfo, Nt = !0;
              break e;
            case 4:
              Ve = g.stateNode.containerInfo, Nt = !0;
              break e;
          }
          g = g.return;
        }
        if (Ve === null) throw Error(i(160));
        Uc(u, f, a), Ve = null, Nt = !1;
        var w = a.alternate;
        w !== null && (w.return = null), a.return = null;
      } catch (I) {
        ze(a, t, I);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bc(t, e), t = t.sibling;
  }
  function bc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Tt(t, e), zt(e), r & 4) {
          try {
            nl(3, e, e.return), ua(3, e);
          } catch (Z) {
            ze(e, e.return, Z);
          }
          try {
            nl(5, e, e.return);
          } catch (Z) {
            ze(e, e.return, Z);
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
            Sr(a, "");
          } catch (Z) {
            ze(e, e.return, Z);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var u = e.memoizedProps, f = n !== null ? n.memoizedProps : u, g = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            g === "input" && u.type === "radio" && u.name != null && vs(a, u), Xa(g, f);
            var I = Xa(g, u);
            for (f = 0; f < w.length; f += 2) {
              var j = w[f], B = w[f + 1];
              j === "style" ? Cs(a, B) : j === "dangerouslySetInnerHTML" ? ks(a, B) : j === "children" ? Sr(a, B) : O(a, j, B, I);
            }
            switch (g) {
              case "input":
                Qa(a, u);
                break;
              case "textarea":
                _s(a, u);
                break;
              case "select":
                var A = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!u.multiple;
                var Y = u.value;
                Y != null ? Un(a, !!u.multiple, Y, !1) : A !== !!u.multiple && (u.defaultValue != null ? Un(
                  a,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Un(a, !!u.multiple, u.multiple ? [] : "", !1));
            }
            a[Vr] = u;
          } catch (Z) {
            ze(e, e.return, Z);
          }
        }
        break;
      case 6:
        if (Tt(t, e), zt(e), r & 4) {
          if (e.stateNode === null) throw Error(i(162));
          a = e.stateNode, u = e.memoizedProps;
          try {
            a.nodeValue = u;
          } catch (Z) {
            ze(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (Tt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Dr(t.containerInfo);
        } catch (Z) {
          ze(e, e.return, Z);
        }
        break;
      case 4:
        Tt(t, e), zt(e);
        break;
      case 13:
        Tt(t, e), zt(e), a = e.child, a.flags & 8192 && (u = a.memoizedState !== null, a.stateNode.isHidden = u, !u || a.alternate !== null && a.alternate.memoizedState !== null || (Ci = Oe())), r & 4 && Bc(e);
        break;
      case 22:
        if (j = n !== null && n.memoizedState !== null, e.mode & 1 ? (Xe = (I = Xe) || j, Tt(t, e), Xe = I) : Tt(t, e), zt(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !j && (e.mode & 1) !== 0) for (G = e, j = e.child; j !== null; ) {
            for (B = G = j; G !== null; ) {
              switch (A = G, Y = A.child, A.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nl(4, A, A.return);
                  break;
                case 1:
                  ir(A, A.return);
                  var J = A.stateNode;
                  if (typeof J.componentWillUnmount == "function") {
                    r = A, n = A.return;
                    try {
                      t = r, J.props = t.memoizedProps, J.state = t.memoizedState, J.componentWillUnmount();
                    } catch (Z) {
                      ze(r, n, Z);
                    }
                  }
                  break;
                case 5:
                  ir(A, A.return);
                  break;
                case 22:
                  if (A.memoizedState !== null) {
                    Vc(B);
                    continue;
                  }
              }
              Y !== null ? (Y.return = A, G = Y) : Vc(B);
            }
            j = j.sibling;
          }
          e: for (j = null, B = e; ; ) {
            if (B.tag === 5) {
              if (j === null) {
                j = B;
                try {
                  a = B.stateNode, I ? (u = a.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (g = B.stateNode, w = B.memoizedProps.style, f = w != null && w.hasOwnProperty("display") ? w.display : null, g.style.display = Ss("display", f));
                } catch (Z) {
                  ze(e, e.return, Z);
                }
              }
            } else if (B.tag === 6) {
              if (j === null) try {
                B.stateNode.nodeValue = I ? "" : B.memoizedProps;
              } catch (Z) {
                ze(e, e.return, Z);
              }
            } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === e) && B.child !== null) {
              B.child.return = B, B = B.child;
              continue;
            }
            if (B === e) break e;
            for (; B.sibling === null; ) {
              if (B.return === null || B.return === e) break e;
              j === B && (j = null), B = B.return;
            }
            j === B && (j = null), B.sibling.return = B.return, B = B.sibling;
          }
        }
        break;
      case 19:
        Tt(t, e), zt(e), r & 4 && Bc(e);
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
            if (Fc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(i(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            r.flags & 32 && (Sr(a, ""), r.flags &= -33);
            var u = jc(e);
            wi(e, u, a);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo, g = jc(e);
            Ei(e, g, f);
            break;
          default:
            throw Error(i(161));
        }
      } catch (w) {
        ze(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e, t, n) {
    G = e, Wc(e);
  }
  function Wc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var a = G, u = a.child;
      if (a.tag === 22 && r) {
        var f = a.memoizedState !== null || sa;
        if (!f) {
          var g = a.alternate, w = g !== null && g.memoizedState !== null || Xe;
          g = sa;
          var I = Xe;
          if (sa = f, (Xe = w) && !I) for (G = a; G !== null; ) f = G, w = f.child, f.tag === 22 && f.memoizedState !== null ? Qc(a) : w !== null ? (w.return = f, G = w) : Qc(a);
          for (; u !== null; ) G = u, Wc(u), u = u.sibling;
          G = a, sa = g, Xe = I;
        }
        Hc(e);
      } else (a.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = a, G = u) : Hc(e);
    }
  }
  function Hc(e) {
    for (; G !== null; ) {
      var t = G;
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
              u !== null && Vu(t, u, r);
              break;
            case 3:
              var f = t.updateQueue;
              if (f !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Vu(t, f, n);
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
                  var j = I.memoizedState;
                  if (j !== null) {
                    var B = j.dehydrated;
                    B !== null && Dr(B);
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
              throw Error(i(163));
          }
          Xe || t.flags & 512 && _i(t);
        } catch (A) {
          ze(t, t.return, A);
        }
      }
      if (t === e) {
        G = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, G = n;
        break;
      }
      G = t.return;
    }
  }
  function Vc(e) {
    for (; G !== null; ) {
      var t = G;
      if (t === e) {
        G = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, G = n;
        break;
      }
      G = t.return;
    }
  }
  function Qc(e) {
    for (; G !== null; ) {
      var t = G;
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
            var f = t.return;
            try {
              _i(t);
            } catch (w) {
              ze(t, f, w);
            }
        }
      } catch (w) {
        ze(t, t.return, w);
      }
      if (t === e) {
        G = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, G = g;
        break;
      }
      G = t.return;
    }
  }
  var Jm = Math.ceil, ca = z.ReactCurrentDispatcher, ki = z.ReactCurrentOwner, gt = z.ReactCurrentBatchConfig, me = 0, be = null, Fe = null, Qe = 0, dt = 0, sr = sn(0), Ue = 0, rl = null, Ln = 0, da = 0, Si = 0, ll = null, rt = null, Ci = 0, ur = 1 / 0, Kt = null, fa = !1, xi = null, pn = null, ma = !1, hn = null, pa = 0, al = 0, Ni = null, ha = -1, va = 0;
  function Ze() {
    return (me & 6) !== 0 ? Oe() : ha !== -1 ? ha : ha = Oe();
  }
  function vn(e) {
    return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Qe !== 0 ? Qe & -Qe : zm.transition !== null ? (va === 0 && (va = js()), va) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ys(e.type)), e);
  }
  function Rt(e, t, n, r) {
    if (50 < al) throw al = 0, Ni = null, Error(i(185));
    Pr(e, n, r), ((me & 2) === 0 || e !== be) && (e === be && ((me & 2) === 0 && (da |= n), Ue === 4 && yn(e, Qe)), lt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (ur = Oe() + 500, Hl && cn()));
  }
  function lt(e, t) {
    var n = e.callbackNode;
    zf(e, t);
    var r = xl(e, e === be ? Qe : 0);
    if (r === 0) n !== null && Os(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Os(n), t === 1) e.tag === 0 ? Dm(Yc.bind(null, e)) : $u(Yc.bind(null, e)), Mm(function() {
        (me & 6) === 0 && cn();
      }), n = null;
      else {
        switch (Us(r)) {
          case 1:
            n = lo;
            break;
          case 4:
            n = As;
            break;
          case 16:
            n = wl;
            break;
          case 536870912:
            n = Fs;
            break;
          default:
            n = wl;
        }
        n = nd(n, qc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function qc(e, t) {
    if (ha = -1, va = 0, (me & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n) return null;
    var r = xl(e, e === be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ya(e, r);
    else {
      t = r;
      var a = me;
      me |= 2;
      var u = Gc();
      (be !== e || Qe !== t) && (Kt = null, ur = Oe() + 500, $n(e, t));
      do
        try {
          tp();
          break;
        } catch (g) {
          Kc(e, g);
        }
      while (!0);
      Ho(), ca.current = u, me = a, Fe !== null ? t = 0 : (be = null, Qe = 0, t = Ue);
    }
    if (t !== 0) {
      if (t === 2 && (a = ao(e), a !== 0 && (r = a, t = Ti(e, a))), t === 1) throw n = rl, $n(e, 0), yn(e, r), lt(e, Oe()), n;
      if (t === 6) yn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Zm(a) && (t = ya(e, r), t === 2 && (u = ao(e), u !== 0 && (r = u, t = Ti(e, u))), t === 1)) throw n = rl, $n(e, 0), yn(e, r), lt(e, Oe()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Dn(e, rt, Kt);
            break;
          case 3:
            if (yn(e, r), (r & 130023424) === r && (t = Ci + 500 - Oe(), 10 < t)) {
              if (xl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Ze(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = $o(Dn.bind(null, e, rt, Kt), t);
              break;
            }
            Dn(e, rt, Kt);
            break;
          case 4:
            if (yn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var f = 31 - kt(r);
              u = 1 << f, f = t[f], f > a && (a = f), r &= ~u;
            }
            if (r = a, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Jm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = $o(Dn.bind(null, e, rt, Kt), r);
              break;
            }
            Dn(e, rt, Kt);
            break;
          case 5:
            Dn(e, rt, Kt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return lt(e, Oe()), e.callbackNode === n ? qc.bind(null, e) : null;
  }
  function Ti(e, t) {
    var n = ll;
    return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256), e = ya(e, t), e !== 2 && (t = rt, rt = n, t !== null && Ri(t)), e;
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
            if (!St(u(), a)) return !1;
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
  function yn(e, t) {
    for (t &= ~Si, t &= ~da, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - kt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Yc(e) {
    if ((me & 6) !== 0) throw Error(i(327));
    cr();
    var t = xl(e, 0);
    if ((t & 1) === 0) return lt(e, Oe()), null;
    var n = ya(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ao(e);
      r !== 0 && (t = r, n = Ti(e, r));
    }
    if (n === 1) throw n = rl, $n(e, 0), yn(e, t), lt(e, Oe()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dn(e, rt, Kt), lt(e, Oe()), null;
  }
  function Pi(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      me = n, me === 0 && (ur = Oe() + 500, Hl && cn());
    }
  }
  function In(e) {
    hn !== null && hn.tag === 0 && (me & 6) === 0 && cr();
    var t = me;
    me |= 1;
    var n = gt.transition, r = we;
    try {
      if (gt.transition = null, we = 1, e) return e();
    } finally {
      we = r, gt.transition = n, me = t, (me & 6) === 0 && cn();
    }
  }
  function Mi() {
    dt = sr.current, Ne(sr);
  }
  function $n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Pm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (jo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && bl();
          break;
        case 3:
          ar(), Ne(et), Ne(Ye), Jo();
          break;
        case 5:
          Go(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          Ne(Ie);
          break;
        case 19:
          Ne(Ie);
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
    if (be = e, Fe = e = gn(e.current, null), Qe = dt = t, Ue = 0, rl = null, Si = da = Ln = 0, rt = ll = null, Rn !== null) {
      for (t = 0; t < Rn.length; t++) if (n = Rn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, u = n.pending;
        if (u !== null) {
          var f = u.next;
          u.next = a, r.next = f;
        }
        n.pending = r;
      }
      Rn = null;
    }
    return e;
  }
  function Kc(e, t) {
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
        if (Mn = 0, Be = je = $e = null, Xr = !1, Jr = 0, ki.current = null, n === null || n.return === null) {
          Ue = 1, rl = t, Fe = null;
          break;
        }
        e: {
          var u = e, f = n.return, g = n, w = t;
          if (t = Qe, g.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var I = w, j = g, B = j.tag;
            if ((j.mode & 1) === 0 && (B === 0 || B === 11 || B === 15)) {
              var A = j.alternate;
              A ? (j.updateQueue = A.updateQueue, j.memoizedState = A.memoizedState, j.lanes = A.lanes) : (j.updateQueue = null, j.memoizedState = null);
            }
            var Y = Ec(f);
            if (Y !== null) {
              Y.flags &= -257, wc(Y, f, g, u, t), Y.mode & 1 && _c(u, I, t), t = Y, w = I;
              var J = t.updateQueue;
              if (J === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(w), t.updateQueue = Z;
              } else J.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                _c(u, I, t), Li();
                break e;
              }
              w = Error(i(426));
            }
          } else if (Pe && g.mode & 1) {
            var Ae = Ec(f);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), wc(Ae, f, g, u, t), bo(or(w, g));
              break e;
            }
          }
          u = w = or(w, g), Ue !== 4 && (Ue = 2), ll === null ? ll = [u] : ll.push(u), u = f;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var T = yc(u, w, t);
                Hu(u, T);
                break e;
              case 1:
                g = w;
                var S = u.type, R = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (pn === null || !pn.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var b = gc(u, g, t);
                  Hu(u, b);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Jc(n);
      } catch (te) {
        t = te, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gc() {
    var e = ca.current;
    return ca.current = la, e === null ? la : e;
  }
  function Li() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), be === null || (Ln & 268435455) === 0 && (da & 268435455) === 0 || yn(be, Qe);
  }
  function ya(e, t) {
    var n = me;
    me |= 2;
    var r = Gc();
    (be !== e || Qe !== t) && (Kt = null, $n(e, t));
    do
      try {
        ep();
        break;
      } catch (a) {
        Kc(e, a);
      }
    while (!0);
    if (Ho(), me = n, ca.current = r, Fe !== null) throw Error(i(261));
    return be = null, Qe = 0, Ue;
  }
  function ep() {
    for (; Fe !== null; ) Xc(Fe);
  }
  function tp() {
    for (; Fe !== null && !Nf(); ) Xc(Fe);
  }
  function Xc(e) {
    var t = td(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? Jc(e) : Fe = t, ki.current = null;
  }
  function Jc(e) {
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
  function Dn(e, t, n) {
    var r = we, a = gt.transition;
    try {
      gt.transition = null, we = 1, np(e, t, n, r);
    } finally {
      gt.transition = a, we = r;
    }
    return null;
  }
  function np(e, t, n, r) {
    do
      cr();
    while (hn !== null);
    if ((me & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Of(e, u), e === be && (Fe = be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ma || (ma = !0, nd(wl, function() {
      return cr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = gt.transition, gt.transition = null;
      var f = we;
      we = 1;
      var g = me;
      me |= 4, ki.current = null, Gm(e, n), bc(n, e), km(Lo), Rl = !!Mo, Lo = Mo = null, e.current = n, Xm(n), Tf(), me = g, we = f, gt.transition = u;
    } else e.current = n;
    if (ma && (ma = !1, hn = e, pa = a), u = e.pendingLanes, u === 0 && (pn = null), Mf(n.stateNode), lt(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (fa) throw fa = !1, e = xi, xi = null, e;
    return (pa & 1) !== 0 && e.tag !== 0 && cr(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ni ? al++ : (al = 0, Ni = e) : al = 0, cn(), null;
  }
  function cr() {
    if (hn !== null) {
      var e = Us(pa), t = gt.transition, n = we;
      try {
        if (gt.transition = null, we = 16 > e ? 16 : e, hn === null) var r = !1;
        else {
          if (e = hn, hn = null, pa = 0, (me & 6) !== 0) throw Error(i(331));
          var a = me;
          for (me |= 4, G = e.current; G !== null; ) {
            var u = G, f = u.child;
            if ((G.flags & 16) !== 0) {
              var g = u.deletions;
              if (g !== null) {
                for (var w = 0; w < g.length; w++) {
                  var I = g[w];
                  for (G = I; G !== null; ) {
                    var j = G;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nl(8, j, u);
                    }
                    var B = j.child;
                    if (B !== null) B.return = j, G = B;
                    else for (; G !== null; ) {
                      j = G;
                      var A = j.sibling, Y = j.return;
                      if (Ac(j), j === I) {
                        G = null;
                        break;
                      }
                      if (A !== null) {
                        A.return = Y, G = A;
                        break;
                      }
                      G = Y;
                    }
                  }
                }
                var J = u.alternate;
                if (J !== null) {
                  var Z = J.child;
                  if (Z !== null) {
                    J.child = null;
                    do {
                      var Ae = Z.sibling;
                      Z.sibling = null, Z = Ae;
                    } while (Z !== null);
                  }
                }
                G = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && f !== null) f.return = u, G = f;
            else e: for (; G !== null; ) {
              if (u = G, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  nl(9, u, u.return);
              }
              var T = u.sibling;
              if (T !== null) {
                T.return = u.return, G = T;
                break e;
              }
              G = u.return;
            }
          }
          var S = e.current;
          for (G = S; G !== null; ) {
            f = G;
            var R = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && R !== null) R.return = f, G = R;
            else e: for (f = S; G !== null; ) {
              if (g = G, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ua(9, g);
                }
              } catch (te) {
                ze(g, g.return, te);
              }
              if (g === f) {
                G = null;
                break e;
              }
              var b = g.sibling;
              if (b !== null) {
                b.return = g.return, G = b;
                break e;
              }
              G = g.return;
            }
          }
          if (me = a, cn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(kl, e);
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
  function Zc(e, t, n) {
    t = or(n, t), t = yc(e, t, 1), e = fn(e, t, 1), t = Ze(), e !== null && (Pr(e, 1, t), lt(e, t));
  }
  function ze(e, t, n) {
    if (e.tag === 3) Zc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Zc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pn === null || !pn.has(r))) {
          e = or(n, e), e = gc(t, e, 1), t = fn(t, e, 1), e = Ze(), t !== null && (Pr(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function rp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ze(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Qe & n) === n && (Ue === 4 || Ue === 3 && (Qe & 130023424) === Qe && 500 > Oe() - Ci ? $n(e, 0) : Si |= n), lt(e, t);
  }
  function ed(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Cl, Cl <<= 1, (Cl & 130023424) === 0 && (Cl = 4194304)));
    var n = Ze();
    e = Qt(e, t), e !== null && (Pr(e, t, n), lt(e, n));
  }
  function lp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ed(e, n);
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
        throw Error(i(314));
    }
    r !== null && r.delete(t), ed(e, n);
  }
  var td;
  td = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return nt = !1, Qm(e, t, n);
      nt = (e.flags & 131072) !== 0;
    }
    else nt = !1, Pe && (t.flags & 1048576) !== 0 && Du(t, Ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var a = Jn(t, Ye.current);
        lr(t, n), a = ti(null, t, r, e, a, n);
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
              t = Tc(null, t, r, e, n);
              break e;
            case 11:
              t = kc(null, t, r, e, n);
              break e;
            case 14:
              t = Sc(null, t, r, xt(r.type, e), n);
              break e;
          }
          throw Error(i(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), di(e, t, r, a, n);
      case 1:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), Tc(e, t, r, a, n);
      case 3:
        e: {
          if (Rc(t), e === null) throw Error(i(387));
          r = t.pendingProps, u = t.memoizedState, a = u.element, Wu(e, t), Jl(t, r, null, n);
          var f = t.memoizedState;
          if (r = f.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: f.cache, pendingSuspenseBoundaries: f.pendingSuspenseBoundaries, transitions: f.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            a = or(Error(i(423)), t), t = Pc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = or(Error(i(424)), t), t = Pc(e, t, r, n, a);
            break e;
          } else for (ct = on(t.stateNode.containerInfo.firstChild), ut = t, Pe = !0, Ct = null, n = Bu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (tr(), r === a) {
              t = Yt(e, t, n);
              break e;
            }
            Je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Qu(t), e === null && Bo(t), r = t.type, a = t.pendingProps, u = e !== null ? e.memoizedProps : null, f = a.children, Io(r, a) ? f = null : u !== null && Io(r, u) && (t.flags |= 32), Nc(e, t), Je(e, t, f, n), t.child;
      case 6:
        return e === null && Bo(t), null;
      case 13:
        return Mc(e, t, n);
      case 4:
        return Ko(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Je(e, t, r, n), t.child;
      case 11:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), kc(e, t, r, a, n);
      case 7:
        return Je(e, t, t.pendingProps, n), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, a = t.pendingProps, u = t.memoizedProps, f = a.value, Se(Kl, r._currentValue), r._currentValue = f, u !== null) if (St(u.value, f)) {
            if (u.children === a.children && !et.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var g = u.dependencies;
            if (g !== null) {
              f = u.child;
              for (var w = g.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (u.tag === 1) {
                    w = qt(-1, n & -n), w.tag = 2;
                    var I = u.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var j = I.pending;
                      j === null ? w.next = w : (w.next = j.next, j.next = w), I.pending = w;
                    }
                  }
                  u.lanes |= n, w = u.alternate, w !== null && (w.lanes |= n), Qo(
                    u.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (u.tag === 10) f = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (f = u.return, f === null) throw Error(i(341));
              f.lanes |= n, g = f.alternate, g !== null && (g.lanes |= n), Qo(f, n, t), f = u.sibling;
            } else f = u.child;
            if (f !== null) f.return = u;
            else for (f = u; f !== null; ) {
              if (f === t) {
                f = null;
                break;
              }
              if (u = f.sibling, u !== null) {
                u.return = f.return, f = u;
                break;
              }
              f = f.return;
            }
            u = f;
          }
          Je(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, lr(t, n), a = vt(a), r = r(a), t.flags |= 1, Je(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = xt(r, t.pendingProps), a = xt(r.type, a), Sc(e, t, r, a, n);
      case 15:
        return Cc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), ia(e, t), t.tag = 1, tt(r) ? (e = !0, Wl(t)) : e = !1, lr(t, n), hc(t, r, a), si(t, r, a, n), fi(null, t, r, !0, e, n);
      case 19:
        return Ic(e, t, n);
      case 22:
        return xc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function nd(e, t) {
    return zs(e, t);
  }
  function op(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _t(e, t, n, r) {
    return new op(e, t, n, r);
  }
  function Ii(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ip(e) {
    if (typeof e == "function") return Ii(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ue) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = _t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ga(e, t, n, r, a, u) {
    var f = 2;
    if (r = e, typeof e == "function") Ii(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else e: switch (e) {
      case ee:
        return zn(n.children, a, u, t);
      case ne:
        f = 8, a |= 8;
        break;
      case ye:
        return e = _t(12, n, t, a | 2), e.elementType = ye, e.lanes = u, e;
      case Ce:
        return e = _t(13, n, t, a), e.elementType = Ce, e.lanes = u, e;
      case Q:
        return e = _t(19, n, t, a), e.elementType = Q, e.lanes = u, e;
      case De:
        return _a(n, a, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ge:
            f = 10;
            break e;
          case K:
            f = 9;
            break e;
          case ue:
            f = 11;
            break e;
          case q:
            f = 14;
            break e;
          case Te:
            f = 16, r = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = _t(f, n, t, a), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function zn(e, t, n, r) {
    return e = _t(7, e, r, t), e.lanes = n, e;
  }
  function _a(e, t, n, r) {
    return e = _t(22, e, r, t), e.elementType = De, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function $i(e, t, n) {
    return e = _t(6, e, null, t), e.lanes = n, e;
  }
  function Di(e, t, n) {
    return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function sp(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oo(0), this.expirationTimes = oo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function zi(e, t, n, r, a, u, f, g, w) {
    return e = new sp(e, t, n, g, w), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = _t(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yo(u), e;
  }
  function up(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: U, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function rd(e) {
    if (!e) return un;
    e = e._reactInternals;
    e: {
      if (Sn(e) !== e || e.tag !== 1) throw Error(i(170));
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
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (tt(n)) return Lu(e, n, t);
    }
    return t;
  }
  function ld(e, t, n, r, a, u, f, g, w) {
    return e = zi(n, r, !0, e, a, u, f, g, w), e.context = rd(null), n = e.current, r = Ze(), a = vn(n), u = qt(r, a), u.callback = t ?? null, fn(n, u, a), e.current.lanes = a, Pr(e, a, r), lt(e, r), e;
  }
  function Ea(e, t, n, r) {
    var a = t.current, u = Ze(), f = vn(a);
    return n = rd(n), t.context === null ? t.context = n : t.pendingContext = n, t = qt(u, f), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = fn(a, t, f), e !== null && (Rt(e, a, f, u), Xl(e, a, f)), f;
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
  function ad(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oi(e, t) {
    ad(e, t), (e = e.alternate) && ad(e, t);
  }
  function cp() {
    return null;
  }
  var od = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  ka.prototype.render = Ai.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Ea(e, t, null, null);
  }, ka.prototype.unmount = Ai.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      In(function() {
        Ea(null, e, null, null);
      }), t[bt] = null;
    }
  };
  function ka(e) {
    this._internalRoot = e;
  }
  ka.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ws();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++) ;
      rn.splice(n, 0, e), n === 0 && Qs(e);
    }
  };
  function Fi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function id() {
  }
  function dp(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var I = wa(f);
          u.call(I);
        };
      }
      var f = ld(t, r, e, 0, null, !1, !1, "", id);
      return e._reactRootContainer = f, e[bt] = f.current, Wr(e.nodeType === 8 ? e.parentNode : e), In(), f;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var I = wa(w);
        g.call(I);
      };
    }
    var w = zi(e, 0, !1, null, null, !1, !1, "", id);
    return e._reactRootContainer = w, e[bt] = w.current, Wr(e.nodeType === 8 ? e.parentNode : e), In(function() {
      Ea(t, w, n, r);
    }), w;
  }
  function Ca(e, t, n, r, a) {
    var u = n._reactRootContainer;
    if (u) {
      var f = u;
      if (typeof a == "function") {
        var g = a;
        a = function() {
          var w = wa(f);
          g.call(w);
        };
      }
      Ea(t, f, e, a);
    } else f = dp(n, t, e, a, r);
    return wa(f);
  }
  Bs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Rr(t.pendingLanes);
          n !== 0 && (io(t, n | 1), lt(t, Oe()), (me & 6) === 0 && (ur = Oe() + 500, cn()));
        }
        break;
      case 13:
        In(function() {
          var r = Qt(e, 1);
          if (r !== null) {
            var a = Ze();
            Rt(r, e, 1, a);
          }
        }), Oi(e, 1);
    }
  }, so = function(e) {
    if (e.tag === 13) {
      var t = Qt(e, 134217728);
      if (t !== null) {
        var n = Ze();
        Rt(t, e, 134217728, n);
      }
      Oi(e, 134217728);
    }
  }, bs = function(e) {
    if (e.tag === 13) {
      var t = vn(e), n = Qt(e, t);
      if (n !== null) {
        var r = Ze();
        Rt(n, e, t, r);
      }
      Oi(e, t);
    }
  }, Ws = function() {
    return we;
  }, Hs = function(e, t) {
    var n = we;
    try {
      return we = e, t();
    } finally {
      we = n;
    }
  }, eo = function(e, t, n) {
    switch (t) {
      case "input":
        if (Qa(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = Bl(r);
              if (!a) throw Error(i(90));
              ps(r), Qa(r, a);
            }
          }
        }
        break;
      case "textarea":
        _s(e, n);
        break;
      case "select":
        t = n.value, t != null && Un(e, !!n.multiple, t, !1);
    }
  }, Rs = Pi, Ps = In;
  var fp = { usingClientEntryPoint: !1, Events: [Qr, Gn, Bl, Ns, Ts, Pi] }, ol = { findFiberByHostInstance: Cn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mp = { bundleType: ol.bundleType, version: ol.version, rendererPackageName: ol.rendererPackageName, rendererConfig: ol.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = $s(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ol.findFiberByHostInstance || cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xa.isDisabled && xa.supportsFiber) try {
      kl = xa.inject(mp), Lt = xa;
    } catch {
    }
  }
  return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp, at.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fi(t)) throw Error(i(200));
    return up(e, t, null, n);
  }, at.createRoot = function(e, t) {
    if (!Fi(e)) throw Error(i(299));
    var n = !1, r = "", a = od;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = zi(e, 1, !1, null, null, n, !1, r, a), e[bt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new Ai(t);
  }, at.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = $s(t), e = e === null ? null : e.stateNode, e;
  }, at.flushSync = function(e) {
    return In(e);
  }, at.hydrate = function(e, t, n) {
    if (!Sa(t)) throw Error(i(200));
    return Ca(null, e, t, !0, n);
  }, at.hydrateRoot = function(e, t, n) {
    if (!Fi(e)) throw Error(i(405));
    var r = n != null && n.hydratedSources || null, a = !1, u = "", f = od;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (f = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, a, !1, u, f), e[bt] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new ka(t);
  }, at.render = function(e, t, n) {
    if (!Sa(t)) throw Error(i(200));
    return Ca(null, e, t, !1, n);
  }, at.unmountComponentAtNode = function(e) {
    if (!Sa(e)) throw Error(i(40));
    return e._reactRootContainer ? (In(function() {
      Ca(null, null, e, !1, function() {
        e._reactRootContainer = null, e[bt] = null;
      });
    }), !0) : !1;
  }, at.unstable_batchedUpdates = Pi, at.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sa(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Ca(e, t, n, !1, r);
  }, at.version = "18.3.1-next-f1338f8080-20240426", at;
}
var md;
function _p() {
  if (md) return Ui.exports;
  md = 1;
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
var pd;
function Ep() {
  if (pd) return Na;
  pd = 1;
  var l = _p();
  return Na.createRoot = l.createRoot, Na.hydrateRoot = l.hydrateRoot, Na;
}
var wp = Ep();
const kp = /* @__PURE__ */ jd(wp);
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
var hd = "popstate";
function vd(l) {
  return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l;
}
function Sp(l = {}) {
  function o(d, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = jn(d.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), ns(
      "",
      { pathname: p, search: h, hash: y },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function i(d, m) {
    let p = d.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let y = d.location.href, E = y.indexOf("#");
      h = E === -1 ? y : y.slice(0, E);
    }
    return h + "#" + (typeof m == "string" ? m : fl(m));
  }
  function c(d, m) {
    Et(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return xp(
    o,
    i,
    c,
    l
  );
}
function Le(l, o) {
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
function Cp() {
  return Math.random().toString(36).substring(2, 10);
}
function yd(l, o) {
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
function ns(l, o, i = null, c, d) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? jn(o) : o,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || c || Cp(),
    mask: d
  };
}
function fl({
  pathname: l = "/",
  search: o = "",
  hash: i = ""
}) {
  return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), i && i !== "#" && (l += i.charAt(0) === "#" ? i : "#" + i), l;
}
function jn(l) {
  let o = {};
  if (l) {
    let i = l.indexOf("#");
    i >= 0 && (o.hash = l.substring(i), l = l.substring(0, i));
    let c = l.indexOf("?");
    c >= 0 && (o.search = l.substring(c), l = l.substring(0, c)), l && (o.pathname = l);
  }
  return o;
}
function xp(l, o, i, c = {}) {
  let { window: d = document.defaultView, v5Compat: m = !1 } = c, p = d.history, h = "POP", y = null, E = C();
  E == null && (E = 0, p.replaceState({ ...p.state, idx: E }, ""));
  function C() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let k = C(), P = k == null ? null : k - E;
    E = k, y && y({ action: h, location: $.location, delta: P });
  }
  function x(k, P) {
    h = "PUSH";
    let M = vd(k) ? k : ns($.location, k, P);
    i && i(M, k), E = C() + 1;
    let O = yd(M, E), z = $.createHref(M.mask || M);
    try {
      p.pushState(O, "", z);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      d.location.assign(z);
    }
    m && y && y({ action: h, location: $.location, delta: 1 });
  }
  function L(k, P) {
    h = "REPLACE";
    let M = vd(k) ? k : ns($.location, k, P);
    i && i(M, k), E = C();
    let O = yd(M, E), z = $.createHref(M.mask || M);
    p.replaceState(O, "", z), m && y && y({ action: h, location: $.location, delta: 0 });
  }
  function D(k) {
    return Np(d, k);
  }
  let $ = {
    get action() {
      return h;
    },
    get location() {
      return l(d, p);
    },
    listen(k) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return d.addEventListener(hd, _), y = k, () => {
        d.removeEventListener(hd, _), y = null;
      };
    },
    createHref(k) {
      return o(d, k);
    },
    createURL: D,
    encodeLocation(k) {
      let P = D(k);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: x,
    replace: L,
    go(k) {
      return p.go(k);
    }
  };
  return $;
}
function Np(l, o, i = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Le(c, "No window.location.(origin|href) available to create URL");
  let d = typeof o == "string" ? o : fl(o);
  return d = d.replace(/ $/, "%20"), !i && d.startsWith("//") && (d = c + d), new URL(d, c);
}
function Bd(l, o, i = "/") {
  return Tp(l, o, i, !1);
}
function Tp(l, o, i, c, d) {
  let m = typeof o == "string" ? jn(o) : o, p = Gt(m.pathname || "/", i);
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
  let o = bd(l);
  return Pp(o), o;
}
function bd(l, o = [], i = [], c = "", d = !1) {
  let m = (p, h, y = d, E) => {
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
    let _ = Pt([c, C.relativePath]), x = i.concat(C);
    p.children && p.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), bd(
      p.children,
      o,
      x,
      _,
      y
    )), !(p.path == null && !p.index) && o.push({
      path: _,
      score: Op(_, p.index),
      routesMeta: x
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let E of Wd(p.path))
        m(p, h, !0, E);
  }), o;
}
function Wd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [i, ...c] = o, d = i.endsWith("?"), m = i.replace(/\?$/, "");
  if (c.length === 0)
    return d ? [m, ""] : [m];
  let p = Wd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), d && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function Pp(l) {
  l.sort(
    (o, i) => o.score !== i.score ? i.score - o.score : Ap(
      o.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Mp = /^:[\w-]+$/, Lp = 3, Ip = 2, $p = 1, Dp = 10, zp = -2, gd = (l) => l === "*";
function Op(l, o) {
  let i = l.split("/"), c = i.length;
  return i.some(gd) && (c += zp), o && (c += Ip), i.filter((d) => !gd(d)).reduce(
    (d, m) => d + (Mp.test(m) ? Lp : m === "" ? $p : Dp),
    c
  );
}
function Ap(l, o) {
  return l.length === o.length && l.slice(0, -1).every((c, d) => c === o[d]) ? (
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
function Fp(l, o, i = !1) {
  let { routesMeta: c } = l, d = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], E = h === c.length - 1, C = m === "/" ? o : o.slice(m.length) || "/", _ = Oa(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: E },
      C
    ), x = y.route;
    if (!_ && E && i && !c[c.length - 1].route.index && (_ = Oa(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      C
    )), !_)
      return null;
    Object.assign(d, _.params), p.push({
      // TODO: Can this as be avoided?
      params: d,
      pathname: Pt([m, _.pathname]),
      pathnameBase: Hp(
        Pt([m, _.pathnameBase])
      ),
      route: x
    }), _.pathnameBase !== "/" && (m = Pt([m, _.pathnameBase]));
  }
  return p;
}
function Oa(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [i, c] = jp(
    l.path,
    l.caseSensitive,
    l.end
  ), d = o.match(i);
  if (!d) return null;
  let m = d[0], p = m.replace(/(.)\/+$/, "$1"), h = d.slice(1);
  return {
    params: c.reduce(
      (E, { paramName: C, isOptional: _ }, x) => {
        if (C === "*") {
          let D = h[x] || "";
          p = m.slice(0, m.length - D.length).replace(/(.)\/+$/, "$1");
        }
        const L = h[x];
        return _ && !L ? E[C] = void 0 : E[C] = (L || "").replace(/%2F/g, "/"), E;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function jp(l, o = !1, i = !0) {
  Et(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], d = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, E, C) => {
      if (c.push({ paramName: h, isOptional: y != null }), y) {
        let _ = C.charAt(E + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), d += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? d += "\\/*$" : l !== "" && l !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, o ? void 0 : "i"), c];
}
function Up(l) {
  try {
    return l.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return Et(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), l;
  }
}
function Gt(l, o) {
  if (o === "/") return l;
  if (!l.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length, c = l.charAt(i);
  return c && c !== "/" ? null : l.slice(i) || "/";
}
var Bp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function bp(l, o = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: d = ""
  } = typeof l == "string" ? jn(l) : l, m;
  return i ? (i = Hd(i), i.startsWith("/") ? m = _d(i.substring(1), "/") : m = _d(i, o)) : m = o, {
    pathname: m,
    search: Vp(c),
    hash: Qp(d)
  };
}
function _d(l, o) {
  let i = Aa(o).split("/");
  return l.split("/").forEach((d) => {
    d === ".." ? i.length > 1 && i.pop() : d !== "." && i.push(d);
  }), i.length > 1 ? i.join("/") : "/";
}
function Wi(l, o, i, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Wp(l) {
  return l.filter(
    (o, i) => i === 0 || o.route.path && o.route.path.length > 0
  );
}
function os(l) {
  let o = Wp(l);
  return o.map(
    (i, c) => c === o.length - 1 ? i.pathname : i.pathnameBase
  );
}
function Ba(l, o, i, c = !1) {
  let d;
  typeof l == "string" ? d = jn(l) : (d = { ...l }, Le(
    !d.pathname || !d.pathname.includes("?"),
    Wi("?", "pathname", "search", d)
  ), Le(
    !d.pathname || !d.pathname.includes("#"),
    Wi("#", "pathname", "hash", d)
  ), Le(
    !d.search || !d.search.includes("#"),
    Wi("#", "search", "hash", d)
  ));
  let m = l === "" || d.pathname === "", p = m ? "/" : d.pathname, h;
  if (p == null)
    h = i;
  else {
    let _ = o.length - 1;
    if (!c && p.startsWith("..")) {
      let x = p.split("/");
      for (; x[0] === ".."; )
        x.shift(), _ -= 1;
      d.pathname = x.join("/");
    }
    h = _ >= 0 ? o[_] : "/";
  }
  let y = bp(d, h), E = p && p !== "/" && p.endsWith("/"), C = (m || p === ".") && i.endsWith("/");
  return !y.pathname.endsWith("/") && (E || C) && (y.pathname += "/"), y;
}
var Hd = (l) => l.replace(/\/\/+/g, "/"), Pt = (l) => Hd(l.join("/")), Aa = (l) => l.replace(/\/+$/, ""), Hp = (l) => Aa(l).replace(/^\/*/, "/"), Vp = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Qp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, qp = class {
  constructor(l, o, i, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Yp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Kp(l) {
  let o = l.map((i) => i.route.path).filter(Boolean);
  return Pt(o) || "/";
}
var Vd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Qd(l, o) {
  let i = l;
  if (typeof i != "string" || !Bp.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, d = !1;
  if (Vd)
    try {
      let m = new URL(window.location.href), p = i.startsWith("//") ? new URL(m.protocol + i) : new URL(i), h = Gt(p.pathname, o);
      p.origin === m.origin && h != null ? i = h + p.search + p.hash : d = !0;
    } catch {
      Et(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: d,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var qd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  qd
);
var Gp = [
  "GET",
  ...qd
];
new Set(Gp);
var mr = v.createContext(null);
mr.displayName = "DataRouter";
var ba = v.createContext(null);
ba.displayName = "DataRouterState";
var Yd = v.createContext(!1);
function Xp() {
  return v.useContext(Yd);
}
var Kd = v.createContext({
  isTransitioning: !1
});
Kd.displayName = "ViewTransition";
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
var Gd = "REACT_ROUTER_ERROR", eh = "REDIRECT", th = "ROUTE_ERROR_RESPONSE";
function nh(l) {
  if (l.startsWith(`${Gd}:${eh}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function rh(l) {
  if (l.startsWith(
    `${Gd}:${th}:{`
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
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(ft), { hash: d, pathname: m, search: p } = pl(l, { relative: o }), h = m;
  return i !== "/" && (h = m === "/" ? i : Pt([i, m])), c.createHref({ pathname: h, search: p, hash: d });
}
function pr() {
  return v.useContext(ml) != null;
}
function wt() {
  return Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(ml).location;
}
var Xd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Jd(l) {
  v.useContext(ft).static || v.useLayoutEffect(l);
}
function hr() {
  let { isDataRoute: l } = v.useContext(Ut);
  return l ? yh() : ah();
}
function ah() {
  Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(mr), { basename: o, navigator: i } = v.useContext(ft), { matches: c } = v.useContext(Ut), { pathname: d } = wt(), m = JSON.stringify(os(c)), p = v.useRef(!1);
  return Jd(() => {
    p.current = !0;
  }), v.useCallback(
    (y, E = {}) => {
      if (Et(p.current, Xd), !p.current) return;
      if (typeof y == "number") {
        i.go(y);
        return;
      }
      let C = Ba(
        y,
        JSON.parse(m),
        d,
        E.relative === "path"
      );
      l == null && o !== "/" && (C.pathname = C.pathname === "/" ? o : Pt([o, C.pathname])), (E.replace ? i.replace : i.push)(
        C,
        E.state,
        E
      );
    },
    [
      o,
      i,
      m,
      d,
      l
    ]
  );
}
v.createContext(null);
function pl(l, { relative: o } = {}) {
  let { matches: i } = v.useContext(Ut), { pathname: c } = wt(), d = JSON.stringify(os(i));
  return v.useMemo(
    () => Ba(
      l,
      JSON.parse(d),
      c,
      o === "path"
    ),
    [l, d, c, o]
  );
}
function oh(l, o) {
  return Zd(l, o);
}
function Zd(l, o, i) {
  var k;
  Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(ft), { matches: d } = v.useContext(Ut), m = d[d.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", E = m && m.route;
  {
    let P = E && E.path || "";
    tf(
      h,
      !E || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let C = wt(), _;
  if (o) {
    let P = typeof o == "string" ? jn(o) : o;
    Le(
      y === "/" || ((k = P.pathname) == null ? void 0 : k.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), _ = P;
  } else
    _ = C;
  let x = _.pathname || "/", L = x;
  if (y !== "/") {
    let P = y.replace(/^\//, "").split("/");
    L = "/" + x.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let D = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (P) => Object.assign(P, {
        route: i.manifest[P.route.id] || P.route
      })
    )
  ) : Bd(l, { pathname: L });
  Et(
    E || D != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Et(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let $ = dh(
    D && D.map(
      (P) => Object.assign({}, P, {
        params: Object.assign({}, p, P.params),
        pathname: Pt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathname
        ]),
        pathnameBase: P.pathnameBase === "/" ? y : Pt([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          c.encodeLocation ? c.encodeLocation(
            P.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : P.pathnameBase
        ])
      })
    ),
    d,
    i
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
          ..._
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    $
  ) : $;
}
function ih() {
  let l = vh(), o = Yp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), i = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", d = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, o), i ? /* @__PURE__ */ v.createElement("pre", { style: d }, i) : null, p);
}
var sh = /* @__PURE__ */ v.createElement(ih, null), ef = class extends v.Component {
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
      const i = rh(l.digest);
      i && (l = i);
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
ef.contextType = Yd;
var Hi = /* @__PURE__ */ new WeakMap();
function uh({
  children: l,
  error: o
}) {
  let { basename: i } = v.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = nh(o.digest);
    if (c) {
      let d = Hi.get(o);
      if (d) throw d;
      let m = Qd(c.location, i);
      if (Vd && !Hi.get(o))
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
function ch({ routeContext: l, match: o, children: i }) {
  let c = v.useContext(mr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ v.createElement(Ut.Provider, { value: l }, i);
}
function dh(l, o = [], i) {
  let c = i == null ? void 0 : i.state;
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
  let d = l, m = c == null ? void 0 : c.errors;
  if (m != null) {
    let C = d.findIndex(
      (_) => _.route.id && (m == null ? void 0 : m[_.route.id]) !== void 0
    );
    Le(
      C >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, C + 1)
    );
  }
  let p = !1, h = -1;
  if (i && c) {
    p = c.renderFallback;
    for (let C = 0; C < d.length; C++) {
      let _ = d[C];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = C), _.route.id) {
        let { loaderData: x, errors: L } = c, D = _.route.loader && !x.hasOwnProperty(_.route.id) && (!L || L[_.route.id] === void 0);
        if (_.route.lazy || D) {
          i.isStatic && (p = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
          break;
        }
      }
    }
  }
  let y = i == null ? void 0 : i.onError, E = c && y ? (C, _) => {
    var x, L;
    y(C, {
      location: c.location,
      params: ((L = (x = c.matches) == null ? void 0 : x[0]) == null ? void 0 : L.params) ?? {},
      pattern: Kp(c.matches),
      errorInfo: _
    });
  } : void 0;
  return d.reduceRight(
    (C, _, x) => {
      let L, D = !1, $ = null, k = null;
      c && (L = m && _.route.id ? m[_.route.id] : void 0, $ = _.route.errorElement || sh, p && (h < 0 && x === 0 ? (tf(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), D = !0, k = null) : h === x && (D = !0, k = _.route.hydrateFallbackElement || null)));
      let P = o.concat(d.slice(0, x + 1)), M = () => {
        let O;
        return L ? O = $ : D ? O = k : _.route.Component ? O = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? O = _.route.element : O = C, /* @__PURE__ */ v.createElement(
          ch,
          {
            match: _,
            routeContext: {
              outlet: C,
              matches: P,
              isDataRoute: c != null
            },
            children: O
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || x === 0) ? /* @__PURE__ */ v.createElement(
        ef,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: $,
          error: L,
          children: M(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: E
        }
      ) : M();
    },
    null
  );
}
function ss(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function fh(l) {
  let o = v.useContext(mr);
  return Le(o, ss(l)), o;
}
function mh(l) {
  let o = v.useContext(ba);
  return Le(o, ss(l)), o;
}
function ph(l) {
  let o = v.useContext(Ut);
  return Le(o, ss(l)), o;
}
function us(l) {
  let o = ph(l), i = o.matches[o.matches.length - 1];
  return Le(
    i.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), i.route.id;
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
  ), i = us(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[i];
}
function yh() {
  let { router: l } = fh(
    "useNavigate"
    /* UseNavigateStable */
  ), o = us(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Jd(() => {
    i.current = !0;
  }), v.useCallback(
    async (d, m = {}) => {
      Et(i.current, Xd), i.current && (typeof d == "number" ? await l.navigate(d) : await l.navigate(d, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var Ed = {};
function tf(l, o, i) {
  !o && !Ed[l] && (Ed[l] = !0, Et(!1, i));
}
v.memo(gh);
function gh({
  routes: l,
  manifest: o,
  future: i,
  state: c,
  isStatic: d,
  onError: m
}) {
  return Zd(l, void 0, {
    manifest: o,
    state: c,
    isStatic: d,
    onError: m
  });
}
function Ta({
  to: l,
  replace: o,
  state: i,
  relative: c
}) {
  Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: d } = v.useContext(ft);
  Et(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = v.useContext(Ut), { pathname: p } = wt(), h = hr(), y = Ba(
    l,
    os(m),
    p,
    c === "path"
  ), E = JSON.stringify(y);
  return v.useEffect(() => {
    h(JSON.parse(E), { replace: o, state: i, relative: c });
  }, [h, E, c, o, i]), null;
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
  location: i,
  navigationType: c = "POP",
  navigator: d,
  static: m = !1,
  useTransitions: p
}) {
  Le(
    !pr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = l.replace(/^\/*/, "/"), y = v.useMemo(
    () => ({
      basename: h,
      navigator: d,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [h, d, m, p]
  );
  typeof i == "string" && (i = jn(i));
  let {
    pathname: E = "/",
    search: C = "",
    hash: _ = "",
    state: x = null,
    key: L = "default",
    mask: D
  } = i, $ = v.useMemo(() => {
    let k = Gt(E, h);
    return k == null ? null : {
      location: {
        pathname: k,
        search: C,
        hash: _,
        state: x,
        key: L,
        mask: D
      },
      navigationType: c
    };
  }, [h, E, C, _, x, L, c, D]);
  return Et(
    $ != null,
    `<Router basename="${h}"> is not able to match the URL "${E}${C}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), $ == null ? null : /* @__PURE__ */ v.createElement(ft.Provider, { value: y }, /* @__PURE__ */ v.createElement(ml.Provider, { children: o, value: $ }));
}
function Eh({
  children: l,
  location: o
}) {
  return oh(rs(l), o);
}
function rs(l, o = []) {
  let i = [];
  return v.Children.forEach(l, (c, d) => {
    if (!v.isValidElement(c))
      return;
    let m = [...o, d];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
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
    )), i.push(p);
  }), i;
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
function xh(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !Ch(l);
}
var Ra = null;
function Nh() {
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
  return l != null && !Th.has(l) ? (Et(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${za}"`
  ), null) : l;
}
function Rh(l, o) {
  let i, c, d, m, p;
  if (kh(l)) {
    let h = l.getAttribute("action");
    c = h ? Gt(h, o) : null, i = l.getAttribute("method") || Da, d = Vi(l.getAttribute("enctype")) || za, m = new FormData(l);
  } else if (wh(l) || Sh(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Gt(y, o) : null, i = l.getAttribute("formmethod") || h.getAttribute("method") || Da, d = Vi(l.getAttribute("formenctype")) || Vi(h.getAttribute("enctype")) || za, m = new FormData(h, l), !Nh()) {
      let { name: E, type: C, value: _ } = l;
      if (C === "image") {
        let x = E ? `${E}.` : "";
        m.append(`${x}x`, "0"), m.append(`${x}y`, "0");
      } else E && m.append(E, _);
    }
  } else {
    if (Wa(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = Da, c = null, d = za, p = l;
  }
  return m && d === "text/plain" && (p = m, m = void 0), { action: c, method: i.toLowerCase(), encType: d, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function cs(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function nf(l, o, i, c) {
  let d = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return i ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${c}` : d.pathname = `${d.pathname}.${c}` : d.pathname === "/" ? d.pathname = `_root.${c}` : o && Gt(d.pathname, o) === "/" ? d.pathname = `${Aa(o)}/_root.${c}` : d.pathname = `${Aa(d.pathname)}.${c}`, d;
}
async function Ph(l, o) {
  if (l.id in o)
    return o[l.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return o[l.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Mh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Lh(l, o, i) {
  let c = await Promise.all(
    l.map(async (d) => {
      let m = o.routes[d.route.id];
      if (m) {
        let p = await Ph(m, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return zh(
    c.flat(1).filter(Mh).filter((d) => d.rel === "stylesheet" || d.rel === "preload").map(
      (d) => d.rel === "stylesheet" ? { ...d, rel: "prefetch", as: "style" } : { ...d, rel: "prefetch" }
    )
  );
}
function wd(l, o, i, c, d, m) {
  let p = (y, E) => i[E] ? y.route.id !== i[E].route.id : !0, h = (y, E) => {
    var C;
    return (
      // param change, /users/123 -> /users/456
      i[E].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((C = i[E].route.path) == null ? void 0 : C.endsWith("*")) && i[E].params["*"] !== y.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (y, E) => p(y, E) || h(y, E)
  ) : m === "data" ? o.filter((y, E) => {
    var _;
    let C = c.routes[y.route.id];
    if (!C || !C.hasLoader)
      return !1;
    if (p(y, E) || h(y, E))
      return !0;
    if (y.route.shouldRevalidate) {
      let x = y.route.shouldRevalidate({
        currentUrl: new URL(
          d.pathname + d.search + d.hash,
          window.origin
        ),
        currentParams: ((_ = i[0]) == null ? void 0 : _.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function Ih(l, o, { includeHydrateFallback: i } = {}) {
  return $h(
    l.map((c) => {
      let d = o.routes[c.route.id];
      if (!d) return [];
      let m = [d.module];
      return d.clientActionModule && (m = m.concat(d.clientActionModule)), d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)), i && d.hydrateFallbackModule && (m = m.concat(d.hydrateFallbackModule)), d.imports && (m = m.concat(d.imports)), m;
    }).flat(1)
  );
}
function $h(l) {
  return [...new Set(l)];
}
function Dh(l) {
  let o = {}, i = Object.keys(l).sort();
  for (let c of i)
    o[c] = l[c];
  return o;
}
function zh(l, o) {
  let i = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, d) => {
    let m = JSON.stringify(Dh(d));
    return i.has(m) || (i.add(m), c.push({ key: m, link: d })), c;
  }, []);
}
function ds() {
  let l = v.useContext(mr);
  return cs(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Oh() {
  let l = v.useContext(ba);
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
  let i = v.useContext(fs), [c, d] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: E, onMouseLeave: C, onTouchStart: _ } = o, x = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let $ = (P) => {
        P.forEach((M) => {
          p(M.isIntersecting);
        });
      }, k = new IntersectionObserver($, { threshold: 0.5 });
      return x.current && k.observe(x.current), () => {
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
  let L = () => {
    d(!0);
  }, D = () => {
    d(!1), p(!1);
  };
  return i ? l !== "intent" ? [m, x, {}] : [
    m,
    x,
    {
      onFocus: il(h, L),
      onBlur: il(y, D),
      onMouseEnter: il(E, L),
      onMouseLeave: il(C, D),
      onTouchStart: il(_, L)
    }
  ] : [!1, x, {}];
}
function il(l, o) {
  return (i) => {
    l && l(i), i.defaultPrevented || o(i);
  };
}
function Fh({ page: l, ...o }) {
  let i = Xp(), { router: c } = ds(), d = v.useMemo(
    () => Bd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return d ? i ? /* @__PURE__ */ v.createElement(Uh, { page: l, matches: d, ...o }) : /* @__PURE__ */ v.createElement(Bh, { page: l, matches: d, ...o }) : null;
}
function jh(l) {
  let { manifest: o, routeModules: i } = ms(), [c, d] = v.useState([]);
  return v.useEffect(() => {
    let m = !1;
    return Lh(l, o, i).then(
      (p) => {
        m || d(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, i]), c;
}
function Uh({
  page: l,
  matches: o,
  ...i
}) {
  let c = wt(), { future: d } = ms(), { basename: m } = ds(), p = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = nf(
      l,
      m,
      d.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, E = [];
    for (let C of o)
      typeof C.route.shouldRevalidate == "function" ? y = !0 : E.push(C.route.id);
    return y && E.length > 0 && h.searchParams.set("_routes", E.join(",")), [h.pathname + h.search];
  }, [
    m,
    d.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function Bh({
  page: l,
  matches: o,
  ...i
}) {
  let c = wt(), { future: d, manifest: m, routeModules: p } = ms(), { basename: h } = ds(), { loaderData: y, matches: E } = Oh(), C = v.useMemo(
    () => wd(
      l,
      o,
      E,
      m,
      c,
      "data"
    ),
    [l, o, E, m, c]
  ), _ = v.useMemo(
    () => wd(
      l,
      o,
      E,
      m,
      c,
      "assets"
    ),
    [l, o, E, m, c]
  ), x = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let $ = /* @__PURE__ */ new Set(), k = !1;
    if (o.forEach((M) => {
      var z;
      let O = m.routes[M.route.id];
      !O || !O.hasLoader || (!C.some((W) => W.route.id === M.route.id) && M.route.id in y && ((z = p[M.route.id]) != null && z.shouldRevalidate) || O.hasClientLoader ? k = !0 : $.add(M.route.id));
    }), $.size === 0)
      return [];
    let P = nf(
      l,
      h,
      d.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return k && $.size > 0 && P.searchParams.set(
      "_routes",
      o.filter((M) => $.has(M.route.id)).map((M) => M.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    h,
    d.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    C,
    o,
    l,
    p
  ]), L = v.useMemo(
    () => Ih(_, m),
    [_, m]
  ), D = jh(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, x.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "prefetch", as: "fetch", href: $, ...i })), L.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "modulepreload", href: $, ...i })), D.map(({ key: $, link: k }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: $,
        nonce: i.nonce,
        ...k,
        crossOrigin: k.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function bh(...l) {
  return (o) => {
    l.forEach((i) => {
      typeof i == "function" ? i(o) : i != null && (i.current = o);
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
  useTransitions: i,
  window: c
}) {
  let d = v.useRef();
  d.current == null && (d.current = Sp({ window: c, v5Compat: !0 }));
  let m = d.current, [p, h] = v.useState({
    action: m.action,
    location: m.location
  }), y = v.useCallback(
    (E) => {
      i === !1 ? h(E) : v.startTransition(() => h(E));
    },
    [i]
  );
  return v.useLayoutEffect(() => m.listen(y), [m, y]), /* @__PURE__ */ v.createElement(
    _h,
    {
      basename: l,
      children: o,
      location: p.location,
      navigationType: p.action,
      navigator: m,
      useTransitions: i
    }
  );
}
var rf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, lf = v.forwardRef(
  function({
    onClick: o,
    discover: i = "render",
    prefetch: c = "none",
    relative: d,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: y,
    target: E,
    to: C,
    preventScrollReset: _,
    viewTransition: x,
    defaultShouldRevalidate: L,
    ...D
  }, $) {
    let { basename: k, navigator: P, useTransitions: M } = v.useContext(ft), O = typeof C == "string" && rf.test(C), z = Qd(C, k);
    C = z.to;
    let W = lh(C, { relative: d }), U = wt(), ee = null;
    if (h) {
      let q = Ba(
        h,
        [],
        U.mask ? U.mask.pathname : "/",
        !0
      );
      k !== "/" && (q.pathname = q.pathname === "/" ? k : Pt([k, q.pathname])), ee = P.createHref(q);
    }
    let [ne, ye, ge] = Ah(
      c,
      D
    ), K = qh(C, {
      replace: p,
      mask: h,
      state: y,
      target: E,
      preventScrollReset: _,
      relative: d,
      viewTransition: x,
      defaultShouldRevalidate: L,
      useTransitions: M
    });
    function ue(q) {
      o && o(q), q.defaultPrevented || K(q);
    }
    let Ce = !(z.isExternal || m), Q = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...D,
          ...ge,
          href: (Ce ? ee : void 0) || z.absoluteURL || W,
          onClick: Ce ? ue : o,
          ref: bh($, ye),
          target: E,
          "data-discover": !O && i === "render" ? "true" : void 0
        }
      )
    );
    return ne && !O ? /* @__PURE__ */ v.createElement(v.Fragment, null, Q, /* @__PURE__ */ v.createElement(Fh, { page: W })) : Q;
  }
);
lf.displayName = "Link";
var He = v.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: i = !1,
    className: c = "",
    end: d = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: y,
    ...E
  }, C) {
    let _ = pl(p, { relative: E.relative }), x = wt(), L = v.useContext(ba), { navigator: D, basename: $ } = v.useContext(ft), k = L != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Jh(_) && h === !0, P = D.encodeLocation ? D.encodeLocation(_).pathname : _.pathname, M = x.pathname, O = L && L.navigation && L.navigation.location ? L.navigation.location.pathname : null;
    i || (M = M.toLowerCase(), O = O ? O.toLowerCase() : null, P = P.toLowerCase()), O && $ && (O = Gt(O, $) || O);
    const z = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let W = M === P || !d && M.startsWith(P) && M.charAt(z) === "/", U = O != null && (O === P || !d && O.startsWith(P) && O.charAt(P.length) === "/"), ee = {
      isActive: W,
      isPending: U,
      isTransitioning: k
    }, ne = W ? o : void 0, ye;
    typeof c == "function" ? ye = c(ee) : ye = [
      c,
      W ? "active" : null,
      U ? "pending" : null,
      k ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ge = typeof m == "function" ? m(ee) : m;
    return /* @__PURE__ */ v.createElement(
      lf,
      {
        ...E,
        "aria-current": ne,
        className: ye,
        ref: C,
        style: ge,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(ee) : y
    );
  }
);
He.displayName = "NavLink";
var Vh = v.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: i,
    reloadDocument: c,
    replace: d,
    state: m,
    method: p = Da,
    action: h,
    onSubmit: y,
    relative: E,
    preventScrollReset: C,
    viewTransition: _,
    defaultShouldRevalidate: x,
    ...L
  }, D) => {
    let { useTransitions: $ } = v.useContext(ft), k = Gh(), P = Xh(h, { relative: E }), M = p.toLowerCase() === "get" ? "get" : "post", O = typeof h == "string" && rf.test(h), z = (W) => {
      if (y && y(W), W.defaultPrevented) return;
      W.preventDefault();
      let U = W.nativeEvent.submitter, ee = (U == null ? void 0 : U.getAttribute("formmethod")) || p, ne = () => k(U || W.currentTarget, {
        fetcherKey: o,
        method: ee,
        navigate: i,
        replace: d,
        state: m,
        relative: E,
        preventScrollReset: C,
        viewTransition: _,
        defaultShouldRevalidate: x
      });
      $ && i !== !1 ? v.startTransition(() => ne()) : ne();
    };
    return /* @__PURE__ */ v.createElement(
      "form",
      {
        ref: D,
        method: M,
        action: P,
        onSubmit: c ? y : z,
        ...L,
        "data-discover": !O && l === "render" ? "true" : void 0
      }
    );
  }
);
Vh.displayName = "Form";
function Qh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function af(l) {
  let o = v.useContext(mr);
  return Le(o, Qh(l)), o;
}
function qh(l, {
  target: o,
  replace: i,
  mask: c,
  state: d,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: y,
  useTransitions: E
} = {}) {
  let C = hr(), _ = wt(), x = pl(l, { relative: p });
  return v.useCallback(
    (L) => {
      if (xh(L, o)) {
        L.preventDefault();
        let D = i !== void 0 ? i : fl(_) === fl(x), $ = () => C(l, {
          replace: D,
          mask: c,
          state: d,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: y
        });
        E ? v.startTransition(() => $()) : $();
      }
    },
    [
      _,
      C,
      x,
      i,
      c,
      d,
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
  let { router: l } = af(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(ft), i = hh(), c = l.fetch, d = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: E, formData: C, body: _ } = Rh(
        m,
        o
      );
      if (p.navigate === !1) {
        let x = p.fetcherKey || Kh();
        await c(x, i, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || E,
          flushSync: p.flushSync
        });
      } else
        await d(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: C,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || E,
          replace: p.replace,
          state: p.state,
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, d, o, i]
  );
}
function Xh(l, { relative: o } = {}) {
  let { basename: i } = v.useContext(ft), c = v.useContext(Ut);
  Le(c, "useFormAction must be used inside a RouteContext");
  let [d] = c.matches.slice(-1), m = { ...pl(l || ".", { relative: o }) }, p = wt();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), y = h.getAll("index");
    if (y.some((C) => C === "")) {
      h.delete("index"), y.filter((_) => _).forEach((_) => h.append("index", _));
      let C = h.toString();
      m.search = C ? `?${C}` : "";
    }
  }
  return (!l || l === ".") && d.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (m.pathname = m.pathname === "/" ? i : Pt([i, m.pathname])), fl(m);
}
function Jh(l, { relative: o } = {}) {
  let i = v.useContext(Kd);
  Le(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = af(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), d = pl(l, { relative: o });
  if (!i.isTransitioning)
    return !1;
  let m = Gt(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = Gt(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return Oa(d.pathname, p) != null || Oa(d.pathname, m) != null;
}
const of = v.createContext(null);
function vr() {
  const l = v.useContext(of);
  if (!l)
    throw new Error(
      "DialogContext not initialized"
    );
  return l;
}
var ls = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new WeakMap(), kd = 0, Zh;
function ev(l) {
  return l ? (Pa.has(l) || (kd += 1, Pa.set(l, kd.toString())), Pa.get(l)) : "0";
}
function tv(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? ev(l.root) : l[o]}`).toString();
}
function nv(l) {
  const o = tv(l);
  let i = ls.get(o);
  if (!i) {
    const c = /* @__PURE__ */ new Map();
    let d;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const E = h.isIntersecting && d.some((C) => h.intersectionRatio >= C);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = E), [...(y = c.get(h.target)) != null ? y : []].forEach((C) => {
          C(E, h);
        });
      });
    }, l);
    d = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), i = {
      id: o,
      observer: m,
      elements: c
    }, ls.set(o, i);
  }
  return i;
}
function rv(l, o, i = {}, c = Zh) {
  if (typeof window.IntersectionObserver > "u" && c !== void 0) {
    const y = l.getBoundingClientRect();
    return o(c, {
      isIntersecting: c,
      target: l,
      intersectionRatio: typeof i.threshold == "number" ? i.threshold : 0,
      time: 0,
      boundingClientRect: y,
      intersectionRect: y,
      rootBounds: y
    }), () => {
    };
  }
  const { id: d, observer: m, elements: p } = nv(i), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), ls.delete(d));
  };
}
function yr({
  threshold: l,
  delay: o,
  trackVisibility: i,
  rootMargin: c,
  root: d,
  triggerOnce: m,
  skip: p,
  initialInView: h,
  fallbackInView: y,
  onChange: E
} = {}) {
  var C;
  const [_, x] = v.useState(null), L = v.useRef(E), D = v.useRef(h), [$, k] = v.useState({
    inView: !!h,
    entry: void 0
  });
  L.current = E, v.useEffect(
    () => {
      if (D.current === void 0 && (D.current = h), p || !_) return;
      let z;
      return z = rv(
        _,
        (W, U) => {
          const ee = D.current;
          D.current = W, !(ee === void 0 && !W) && (k({
            inView: W,
            entry: U
          }), L.current && L.current(W, U), U.isIntersecting && m && z && (z(), z = void 0));
        },
        {
          root: d,
          rootMargin: c,
          threshold: l,
          // @ts-expect-error
          trackVisibility: i,
          delay: o
        },
        y
      ), () => {
        z && z();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(l) ? l.toString() : l,
      _,
      d,
      c,
      m,
      p,
      i,
      y,
      o
    ]
  );
  const P = (C = $.entry) == null ? void 0 : C.target, M = v.useRef(void 0);
  !_ && P && !m && !p && M.current !== P && (M.current = P, k({
    inView: !!h,
    entry: void 0
  }), D.current = h);
  const O = [x, $.inView, $.entry];
  return O.ref = O[0], O.inView = O[1], O.entry = O[2], O;
}
const Bt = (l = 768) => {
  const [o, i] = v.useState(
    window.innerWidth <= l
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), d = (m) => {
      i(m.matches);
    };
    return i(c.matches), c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [l]), o;
}, lv = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function av() {
  const l = vr(), [o, i] = v.useState(!0), [c, d] = v.useState(null), m = v.useRef(!1), p = v.useCallback(
    async (x = 1, L = !1) => {
      i(!0);
      try {
        const D = lv(
          await l._getShort(
            "get_script_actions_short",
            x
          )
        );
        d(($) => !L || !$ ? D : {
          ...D,
          script_actions: [
            ...$.script_actions,
            ...D.script_actions
          ]
        });
      } finally {
        i(!1);
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
const ov = "_subtitle_ow5os_1", iv = "_card_ow5os_6", sv = "_content_ow5os_50", uv = "_title_ow5os_58", cv = "_arrow_ow5os_64", sl = {
  subtitle: ov,
  card: iv,
  content: sv,
  title: uv,
  arrow: cv
}, gr = ({
  title: l,
  subTitle: o,
  onClick: i
}) => /* @__PURE__ */ s.createElement(
  "button",
  {
    type: "button",
    className: sl.card,
    onClick: i
  },
  /* @__PURE__ */ s.createElement("div", { className: sl.content }, /* @__PURE__ */ s.createElement("div", { className: sl.title }, l), /* @__PURE__ */ s.createElement("div", { className: sl.subtitle }, o)),
  /* @__PURE__ */ s.createElement("div", { className: sl.arrow }, "→")
), dv = "_button_9qq9x_1", fv = "_full_9qq9x_32", mv = "_primary_9qq9x_37", pv = "_secondary_9qq9x_50", hv = "_ghost_9qq9x_62", Qi = {
  button: dv,
  full: fv,
  primary: mv,
  secondary: pv,
  ghost: hv
}, se = ({
  children: l,
  variant: o = "primary",
  fullWidth: i = !1,
  leftIcon: c,
  rightIcon: d,
  className: m = "",
  ...p
}) => /* @__PURE__ */ s.createElement(
  "button",
  {
    ...p,
    className: `
        ${Qi.button}
        ${Qi[o]}
        ${i ? Qi.full : ""}
        ${m}
      `
  },
  c,
  l,
  d
), vv = "_pagination_1hg7e_1", yv = "_button_1hg7e_9", gv = "_label_1hg7e_33", Ma = {
  pagination: vv,
  button: yv,
  label: gv
}, _r = ({
  page: l,
  totalPages: o,
  onChange: i
}) => o <= 1 ? null : /* @__PURE__ */ s.createElement("div", { className: Ma.pagination }, /* @__PURE__ */ s.createElement(
  "button",
  {
    className: Ma.button,
    disabled: l === 1,
    onClick: () => i(l - 1)
  },
  "Назад"
), /* @__PURE__ */ s.createElement("span", { className: Ma.label }, l, " / ", o), /* @__PURE__ */ s.createElement(
  "button",
  {
    className: Ma.button,
    disabled: l === o,
    onClick: () => i(l + 1)
  },
  "Вперёд"
)), _v = "_overlay_49s9e_1", Ev = "_modal_49s9e_13", wv = "_sm_49s9e_27", kv = "_md_49s9e_31", Sv = "_lg_49s9e_35", Cv = "_xl_49s9e_39", xv = "_header_49s9e_43", Nv = "_title_49s9e_53", Tv = "_body_49s9e_60", Rv = "_footer_49s9e_67", Pv = "_close_49s9e_77", En = {
  overlay: _v,
  modal: Ev,
  sm: wv,
  md: kv,
  lg: Sv,
  xl: Cv,
  header: xv,
  title: Nv,
  body: Tv,
  footer: Rv,
  close: Pv
}, Mt = ({
  open: l,
  onClose: o,
  title: i,
  footer: c,
  children: d,
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
}, [l, o]), l ? /* @__PURE__ */ s.createElement(
  "div",
  {
    className: En.overlay,
    onClick: o
  },
  /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `${En.modal} ${En[m]}`,
      onClick: (p) => p.stopPropagation()
    },
    /* @__PURE__ */ s.createElement("div", { className: En.header }, i && /* @__PURE__ */ s.createElement("h2", { className: En.title }, i), /* @__PURE__ */ s.createElement(
      se,
      {
        variant: "ghost",
        className: En.close,
        onClick: o
      },
      "✕"
    )),
    /* @__PURE__ */ s.createElement("div", { className: En.body }, d),
    c && /* @__PURE__ */ s.createElement("div", { className: En.footer }, c)
  )
) : null), Mv = "_overlay_w83z1_1", Lv = "_sheet_w83z1_11", Iv = "_handle_w83z1_21", On = {
  overlay: Mv,
  sheet: Lv,
  handle: Iv
}, sf = ({
  open: l,
  onClose: o,
  children: i
}) => {
  const [c, d] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), y = v.useRef(0), [E, C] = v.useState(0);
  v.useEffect(() => {
    if (l)
      d(!0), requestAnimationFrame(() => {
        p(!0);
      }), document.body.style.overflow = "hidden";
    else {
      p(!1);
      const D = setTimeout(() => {
        d(!1);
      }, 300);
      return document.body.style.overflow = "", () => clearTimeout(D);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [l]);
  const _ = (D) => {
    h.current = D.touches[0].clientY;
  }, x = (D) => {
    y.current = D.touches[0].clientY;
    const $ = y.current - h.current;
    $ > 0 && C($);
  }, L = () => {
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
  }, [l, o]), c ? /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `${On.overlay} ${m ? On.visible : ""}`,
      onClick: o
    },
    /* @__PURE__ */ s.createElement(
      "section",
      {
        className: `${On.sheet} ${m ? On.open : ""}`,
        style: {
          transform: `translateY(${E}px)`,
          transition: E === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
        },
        onClick: (D) => D.stopPropagation(),
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ s.createElement(
        "div",
        {
          className: On.handleArea,
          onTouchStart: _,
          onTouchMove: x,
          onTouchEnd: L
        },
        /* @__PURE__ */ s.createElement("div", { className: On.handle })
      ),
      /* @__PURE__ */ s.createElement("div", { className: On.content }, i)
    )
  ) : null;
}, $v = "_content_1p38v_1", Dv = "_title_1p38v_7", zv = "_actions_1p38v_14", qi = {
  content: $v,
  title: Dv,
  actions: zv
}, Ov = ({
  uuid: l,
  open: o,
  title: i,
  onClose: c,
  onEdit: d,
  onDelete: m
}) => {
  const p = Bt();
  if (!l) return null;
  const h = /* @__PURE__ */ s.createElement("div", { className: qi.content }, /* @__PURE__ */ s.createElement("h3", { className: qi.title }, i), /* @__PURE__ */ s.createElement("div", { className: qi.actions }, /* @__PURE__ */ s.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        d(l), c();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ s.createElement(
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
  return /* @__PURE__ */ s.createElement(s.Fragment, null, p ? /* @__PURE__ */ s.createElement(sf, { open: o, onClose: c }, h) : /* @__PURE__ */ s.createElement(
    Mt,
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
}, Ft = ({
  title: l,
  defaultOpen: o = !1,
  children: i
}) => {
  const [c, d] = v.useState(o);
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      className: La.accordion,
      "data-open": c
    },
    /* @__PURE__ */ s.createElement(
      "button",
      {
        type: "button",
        className: La.header,
        onClick: () => d((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ s.createElement("span", null, l),
      /* @__PURE__ */ s.createElement("span", { className: La.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ s.createElement("div", { className: La.content }, i)
  );
}, Uv = "_field_aa3io_1", Bv = "_label_aa3io_8", bv = "_inputWrapper_aa3io_16", Wv = "_input_aa3io_16", Hv = "_passwordInput_aa3io_34", Vv = "_passwordToggle_aa3io_60", Qv = "_error_aa3io_89", qv = "_errorText_aa3io_102", wn = {
  field: Uv,
  label: Bv,
  inputWrapper: bv,
  input: Wv,
  passwordInput: Hv,
  passwordToggle: Vv,
  error: Qv,
  errorText: qv
}, Me = ({
  label: l,
  error: o,
  disabled: i,
  className: c = "",
  id: d,
  type: m,
  ...p
}) => {
  const h = v.useId(), [y, E] = v.useState(!1), C = d ?? h, _ = m === "password" && y ? "text" : m;
  return /* @__PURE__ */ s.createElement("div", { className: wn.field }, l && /* @__PURE__ */ s.createElement(
    "label",
    {
      htmlFor: C,
      className: wn.label
    },
    l
  ), /* @__PURE__ */ s.createElement("div", { className: wn.inputWrapper }, /* @__PURE__ */ s.createElement(
    "input",
    {
      id: C,
      disabled: i,
      type: _,
      ...p,
      className: `
            ${wn.input}
            ${m === "password" ? wn.passwordInput : ""}
            ${o ? wn.error : ""}
            ${c}
          `
    }
  ), m === "password" && /* @__PURE__ */ s.createElement(
    "button",
    {
      type: "button",
      className: wn.passwordToggle,
      onClick: () => E((x) => !x),
      disabled: i,
      "aria-label": y ? "Hide password" : "Show password"
    },
    y ? "🙈" : "👁"
  )), o && /* @__PURE__ */ s.createElement("span", { className: wn.errorText }, o));
}, Yv = "_wrapper_1oxcb_1", Kv = "_labelRow_1oxcb_7", Gv = "_label_1oxcb_7", Xv = "_selectedTitle_1oxcb_26", Jv = "_dropdown_1oxcb_35", Zv = "_option_1oxcb_50", ey = "_title_1oxcb_72", ty = "_uuid_1oxcb_77", ny = "_hint_1oxcb_78", Ot = {
  wrapper: Yv,
  labelRow: Kv,
  label: Gv,
  selectedTitle: Xv,
  dropdown: Jv,
  option: Zv,
  title: ey,
  uuid: ty,
  hint: ny
}, fr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: i,
  searchSource: c = ["assistant_commands"],
  minQueryLength: d = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: y
}) => {
  const E = vr(), [C, _] = v.useState([]), [x, L] = v.useState(!1), [D, $] = v.useState(!1), [k, P] = v.useState(!1), M = v.useRef(0), O = v.useRef(""), z = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (!z) {
      O.current = "", _([]), L(!1);
      return;
    }
    if (z.length < d) {
      _([]), L(!1);
      return;
    }
    if (!k || O.current === z)
      return;
    O.current = z;
    const U = M.current + 1;
    M.current = U;
    const ee = window.setTimeout(async () => {
      $(!0);
      try {
        let ne = [];
        for (const ye of c) {
          const ge = await E.searchAssistantCommands(z, ye), K = Array.isArray(ge == null ? void 0 : ge.data) ? ge.data : [];
          ne.push(...K);
        }
        if (M.current !== U)
          return;
        _(ne), L(ne.length > 0);
      } finally {
        M.current === U && $(!1);
      }
    }, 250);
    return () => window.clearTimeout(ee);
  }, [E, z, c, d, k]);
  const W = (U) => {
    const ee = h ? h(U) : U.uuid;
    m(ee), p == null || p(U), L(!1);
  };
  return /* @__PURE__ */ s.createElement("div", { className: Ot.wrapper }, /* @__PURE__ */ s.createElement("div", { className: Ot.labelRow }, /* @__PURE__ */ s.createElement("span", { className: Ot.label }, l), i && /* @__PURE__ */ s.createElement("span", { className: Ot.selectedTitle }, i)), /* @__PURE__ */ s.createElement(
    Me,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: y,
      onBlur: () => {
        P(!1), window.setTimeout(() => L(!1), 150);
      },
      onFocus: () => {
        P(!0), L(C.length > 0);
      },
      onChange: (U) => m(U.target.value)
    }
  ), x && /* @__PURE__ */ s.createElement("div", { className: Ot.dropdown }, C.map((U) => /* @__PURE__ */ s.createElement(
    "button",
    {
      key: U.uuid,
      type: "button",
      className: Ot.option,
      onMouseDown: (ee) => ee.preventDefault(),
      onClick: () => W(U)
    },
    /* @__PURE__ */ s.createElement("span", { className: Ot.title }, U.title || "Без названия"),
    /* @__PURE__ */ s.createElement("span", { className: Ot.uuid }, U.uuid),
    U.mappingType && /* @__PURE__ */ s.createElement("span", { className: Ot.uuid }, "mappingType: ", U.mappingType)
  ))), D && /* @__PURE__ */ s.createElement("span", { className: Ot.hint }, "Поиск..."));
}, ry = "_field_xxbds_1", ly = "_row_xxbds_5", ay = "_inputWrapper_xxbds_11", oy = "_deleteButton_xxbds_15", kn = {
  field: ry,
  row: ly,
  inputWrapper: ay,
  deleteButton: oy
}, iy = ({
  condition: l,
  index: o,
  defaultOpen: i,
  onChange: c,
  onDelete: d,
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
  return /* @__PURE__ */ s.createElement(
    Ft,
    {
      title: `Условие ${o + 1}`,
      defaultOpen: i
    },
    /* @__PURE__ */ s.createElement("div", { className: kn.field }, /* @__PURE__ */ s.createElement(
      fr,
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
    /* @__PURE__ */ s.createElement("div", { className: kn.field }, h ? /* @__PURE__ */ s.createElement(
      "div",
      {
        className: kn.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ s.createElement("div", { className: kn.inputWrapper }, /* @__PURE__ */ s.createElement(
        fr,
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
      /* @__PURE__ */ s.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: E
        },
        "×"
      )
    ) : /* @__PURE__ */ s.createElement(
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
    /* @__PURE__ */ s.createElement("div", { className: kn.field }, y ? /* @__PURE__ */ s.createElement(
      "div",
      {
        className: kn.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ s.createElement("div", { className: kn.inputWrapper }, /* @__PURE__ */ s.createElement(
        fr,
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
      /* @__PURE__ */ s.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: C
        },
        "×"
      )
    ) : /* @__PURE__ */ s.createElement(
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
    m > 1 && /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        className: kn.deleteButton,
        onClick: d
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
const uf = (...l) => l.filter((o, i, c) => !!o && o.trim() !== "" && c.indexOf(o) === i).join(" ").trim();
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
  (o, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = (l) => {
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
  ({ color: l, size: o, strokeWidth: i, absoluteStrokeWidth: c, className: d = "", children: m, iconNode: p, ...h }, y) => {
    const {
      size: E = 24,
      strokeWidth: C = 2,
      absoluteStrokeWidth: _ = !1,
      color: x = "currentColor",
      className: L = ""
    } = fy() ?? {}, D = c ?? _ ? Number(i ?? C) * 24 / Number(o ?? E) : i ?? C;
    return v.createElement(
      "svg",
      {
        ref: y,
        ...Yi,
        width: o ?? E ?? Yi.width,
        height: o ?? E ?? Yi.height,
        stroke: l ?? x,
        strokeWidth: D,
        className: uf("lucide", L, d),
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
const mt = (l, o) => {
  const i = v.forwardRef(
    ({ className: c, ...d }, m) => v.createElement(my, {
      ref: m,
      iconNode: o,
      className: uf(
        `lucide-${sy(Sd(l))}`,
        `lucide-${l}`,
        c
      ),
      ...d
    })
  );
  return i.displayName = Sd(l), i;
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
], cf = mt("alarm-clock", py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], vy = mt("arrow-left", hy);
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
], ul = mt("bot", yy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], _y = mt("chevron-down", gy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], wy = mt("clock-3", Ey);
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
], Sy = mt("command", ky);
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
], xy = mt("file-code-corner", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ty = mt("house", Ny);
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
], df = mt("settings", Ry);
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
], ff = mt("speaker", Py);
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
], Ly = mt("timer", My);
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
], mf = mt("trash-2", Iy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], Dy = mt("workflow", $y), zy = "_dropdown_x51vc_2", Oy = "_label_x51vc_9", Ay = "_wrapper_x51vc_17", Fy = "_select_x51vc_21", jy = "_arrow_x51vc_61", Uy = "_error_x51vc_81", By = "_errorText_x51vc_99", An = {
  dropdown: zy,
  label: Oy,
  wrapper: Ay,
  select: Fy,
  arrow: jy,
  error: Uy,
  errorText: By
};
function by({
  label: l,
  options: o,
  value: i = "",
  placeholder: c = "Выберите",
  error: d,
  onSelect: m
}) {
  const p = v.useId();
  return /* @__PURE__ */ s.createElement("div", { className: An.dropdown }, l && /* @__PURE__ */ s.createElement(
    "label",
    {
      htmlFor: p,
      className: An.label
    },
    l
  ), /* @__PURE__ */ s.createElement("div", { className: An.wrapper }, /* @__PURE__ */ s.createElement(
    "select",
    {
      id: p,
      className: `
            ${An.select}
            ${d ? An.error : ""}
          `,
      value: i,
      onChange: (h) => m == null ? void 0 : m(h.target.value)
    },
    /* @__PURE__ */ s.createElement("option", { value: "", disabled: !0 }, c),
    o.map((h) => /* @__PURE__ */ s.createElement(
      "option",
      {
        key: h.value,
        value: h.value
      },
      h.label
    ))
  ), /* @__PURE__ */ s.createElement(
    _y,
    {
      size: 18,
      className: An.arrow
    }
  )), d && /* @__PURE__ */ s.createElement("span", { className: An.errorText }, d));
}
const Wy = "_form_xh0jo_1", Hy = "_section_xh0jo_7", Vy = "_sectionTitle_xh0jo_18", Qy = "_conditions_xh0jo_37", qy = "_addCondition_xh0jo_43", dr = {
  form: Wy,
  section: Hy,
  sectionTitle: Vy,
  conditions: Qy,
  addCondition: qy
}, Yy = ({
  open: l,
  initialData: o,
  isOptionData: i,
  isEdit: c = !1,
  loading: d = !1,
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
  const _ = (k) => {
    y(k);
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
  }, L = (k, P) => {
    const M = [...h.conditions];
    M[k] = P, _({
      ...h,
      conditions: M
    });
  }, D = (k) => {
    const P = h.conditions.filter(
      (M, O) => O !== k
    );
    _({
      ...h,
      conditions: P.length > 0 ? P : [
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
      (P, M) => {
        const O = {};
        P.parent_type.trim() || (O.parent_type = "Обязательное поле"), P.children_type !== void 0 && !P.children_type.trim() && (O.children_type = "Обязательное поле"), P.children_direct_type !== void 0 && !P.children_direct_type.trim() && (O.children_direct_type = "Обязательное поле"), k.conditions[M] = O;
      }
    ), C(k), !k.name && !k.script_entity_id && k.conditions.every(
      (P) => Object.keys(P).length === 0
    );
  };
  return /* @__PURE__ */ s.createElement(
    Mt,
    {
      open: l,
      onClose: p,
      title: c ? "Редактировать сценарий" : "Создать сценарий",
      footer: /* @__PURE__ */ s.createElement(
        se,
        {
          disabled: d,
          onClick: () => {
            $() && (m == null || m(h));
          }
        },
        "Сохранить"
      )
    },
    /* @__PURE__ */ s.createElement("div", { className: dr.form }, /* @__PURE__ */ s.createElement("div", { className: dr.section }, /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "Название",
        value: h.name,
        error: E.name,
        onChange: (k) => _({
          ...h,
          name: k.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      by,
      {
        label: "Скрипт",
        error: E.script_entity_id,
        options: i.map(
          (k) => ({
            label: k.name,
            value: k.entity_id
          })
        ),
        value: h.script_entity_id,
        onSelect: (k) => _({
          ...h,
          script_entity_id: k
        })
      }
    )), /* @__PURE__ */ s.createElement("div", { className: dr.section }, /* @__PURE__ */ s.createElement("h3", { className: dr.sectionTitle }, "Условия"), /* @__PURE__ */ s.createElement("div", { className: dr.conditions }, h.conditions.map(
      (k, P, M) => /* @__PURE__ */ s.createElement(
        iy,
        {
          key: P,
          index: P,
          condition: k,
          defaultOpen: !c,
          errors: E.conditions[P],
          onChange: (O) => L(
            P,
            O
          ),
          onDelete: () => D(P),
          totalCount: M.length
        }
      )
    )), /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        className: dr.addCondition,
        onClick: x
      },
      "+ Добавить условие"
    )))
  );
}, Ky = "_header_1m7ok_1", Gy = "_title_1m7ok_15", Xy = "_backButton_1m7ok_22", Jy = "_homeButton_1m7ok_23", Ia = {
  header: Ky,
  title: Gy,
  backButton: Xy,
  homeButton: Jy
}, Xt = ({
  title: l = ""
}) => {
  const o = hr(), c = wt().pathname.startsWith("/commands"), d = () => {
    o(c ? "/scripts" : "/");
  }, m = () => {
    if (c) {
      o("/scripts");
      return;
    }
    window.location.assign("/");
  };
  return /* @__PURE__ */ s.createElement("header", { className: Ia.header }, /* @__PURE__ */ s.createElement(
    "button",
    {
      className: Ia.backButton,
      onClick: d
    },
    /* @__PURE__ */ s.createElement(vy, { size: 18 })
  ), /* @__PURE__ */ s.createElement("h1", { className: Ia.title }, l), /* @__PURE__ */ s.createElement(
    "button",
    {
      className: Ia.homeButton,
      onClick: m
    },
    /* @__PURE__ */ s.createElement(Ty, { size: 18 })
  ));
}, Zy = "_tabs_17nxl_1", eg = "_dropdown_17nxl_14", tg = "_tab_17nxl_1", ng = "_active_17nxl_43", rg = "_menu_17nxl_53", lg = "_menuItem_17nxl_80", _e = {
  tabs: Zy,
  dropdown: eg,
  tab: tg,
  active: ng,
  menu: rg,
  menuItem: lg
}, Jt = () => {
  if (!Bt())
    return /* @__PURE__ */ s.createElement("div", { className: _e.tabs }, /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ s.createElement(xy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ s.createElement("div", { className: _e.dropdown }, /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ s.createElement(Sy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Команды")
    ), /* @__PURE__ */ s.createElement("div", { className: _e.menu }, /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ s.createElement(Ly, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ s.createElement(cf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ s.createElement(
      He,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ s.createElement(df, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ s.createElement("span", null, "Настройки")
    ));
}, ag = "_nav_gn5m2_1", Cd = {
  nav: ag
}, Zt = () => {
  const l = wt(), o = hr(), [i, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return i ? /* @__PURE__ */ s.createElement("nav", { className: Cd.nav }, /* @__PURE__ */ s.createElement(He, { to: "/commands/main" }, /* @__PURE__ */ s.createElement(ul, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Основные")), /* @__PURE__ */ s.createElement(He, { to: "/commands/sub" }, /* @__PURE__ */ s.createElement(ul, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Второстепенные")), /* @__PURE__ */ s.createElement(He, { to: "/commands/direct/main" }, /* @__PURE__ */ s.createElement(ul, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Прямые")), /* @__PURE__ */ s.createElement(He, { to: "/commands/settings" }, /* @__PURE__ */ s.createElement(ul, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Настройки"))) : /* @__PURE__ */ s.createElement("nav", { className: Cd.nav }, /* @__PURE__ */ s.createElement(He, { to: "/scripts" }, /* @__PURE__ */ s.createElement(Dy, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Скрипты")), /* @__PURE__ */ s.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ s.createElement(ul, { size: 20 }),
    /* @__PURE__ */ s.createElement("span", null, "Команды")
  ), /* @__PURE__ */ s.createElement(He, { to: "/timer" }, /* @__PURE__ */ s.createElement(wy, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Таймер")), /* @__PURE__ */ s.createElement(He, { to: "/alarm" }, /* @__PURE__ */ s.createElement(cf, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Будильник")), /* @__PURE__ */ s.createElement(He, { to: "/settings" }, /* @__PURE__ */ s.createElement(df, { size: 20 }), /* @__PURE__ */ s.createElement("span", null, "Настройки")));
}, og = "_loader_m2244_1", ig = "_fullscreen_m2244_11", sg = "_spinner_m2244_15", ug = "_label_m2244_24", $a = {
  loader: og,
  fullscreen: ig,
  spinner: sg,
  label: ug
}, Er = ({ label: l = "Загрузка...", fullscreen: o = !1 }) => /* @__PURE__ */ s.createElement("div", { className: `${$a.loader} ${o ? $a.fullscreen : ""}`, role: "status", "aria-live": "polite" }, /* @__PURE__ */ s.createElement("span", { className: $a.spinner, "aria-hidden": "true" }), l && /* @__PURE__ */ s.createElement("span", { className: $a.label }, l)), cg = "_container_99wio_1", dg = "_visible_99wio_20", xd = {
  container: cg,
  visible: dg
}, wr = ({
  children: l,
  offset: o = 100
}) => {
  const [i, c] = v.useState(!1);
  return v.useEffect(() => {
    let d = window.scrollY;
    const m = () => {
      const p = window.scrollY;
      p > d && p > o ? c(!0) : c(!1), d = p;
    };
    return window.addEventListener("scroll", m, {
      passive: !0
    }), () => window.removeEventListener(
      "scroll",
      m
    );
  }, [o]), /* @__PURE__ */ s.createElement(
    "div",
    {
      className: `${xd.container} ${i ? xd.visible : ""}`
    },
    l
  );
}, fg = "_page_24o94_8", mg = "_header_24o94_16", pg = "_headerTop_24o94_21", hg = "_heading_24o94_28", vg = "_title_24o94_33", yg = "_description_24o94_42", gg = "_actions_24o94_49", _g = "_list_24o94_76", oe = {
  page: fg,
  header: mg,
  headerTop: pg,
  heading: hg,
  title: vg,
  description: yg,
  actions: gg,
  list: _g
}, Eg = () => {
  const l = Bt(), { ref: o, inView: i } = yr({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), [c, d] = v.useState(), [m, p] = v.useState(!1), [h, y] = v.useState(!1), [E, C] = v.useState({}), [_, x] = v.useState(!1), [L, D] = v.useState(!1), {
    loading: $,
    scripts: k,
    scriptData: P,
    loadScripts: M,
    saveScript: O,
    updateScript: z,
    getScriptAction: W,
    deleteScriptAction: U
  } = av();
  v.useEffect(() => {
    !L || !l || !i || $ || !k || k.page >= k.total_pages || M(k.page + 1, !0);
  }, [
    i,
    l,
    $,
    k,
    M
  ]), v.useEffect(() => {
    !$ && k && k.page === 1 && D(!0);
  }, [$, k]);
  const ee = () => {
    d(void 0), x(!1), p(!0);
  }, ne = (ue) => {
    y(!0), C(ue);
  }, ye = async (ue) => {
    x(!0);
    const Ce = await W(
      ue
    );
    d(Ce), p(!0);
  }, ge = async (ue) => {
    if (_) {
      if (!ue.uuid) return;
      const { uuid: Ce, ...Q } = ue;
      await z(ue.uuid, Q);
    } else
      await O(ue);
    p(!1);
  }, K = async (ue) => {
    ue && await U(ue);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, $ && /* @__PURE__ */ s.createElement(Er, null), /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Скрипты"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: oe.header }, /* @__PURE__ */ s.createElement("div", { className: oe.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: oe.title }, "Сценарии"), /* @__PURE__ */ s.createElement("p", { className: oe.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: oe.actions }, l ? /* @__PURE__ */ s.createElement(wr, null, /* @__PURE__ */ s.createElement(
    se,
    {
      variant: "primary",
      onClick: ee
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ s.createElement(
    se,
    {
      variant: "primary",
      onClick: ee
    },
    "🞢 Добавить сценарий"
  ))), /* @__PURE__ */ s.createElement("div", { className: oe.list }, k == null ? void 0 : k.script_actions.map((ue) => /* @__PURE__ */ s.createElement(
    gr,
    {
      key: ue.uuid,
      title: ue.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => ne(ue)
    }
  )), l ? /* @__PURE__ */ s.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(s.Fragment, null)), l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(
    _r,
    {
      page: (k == null ? void 0 : k.page) || 1,
      totalPages: (k == null ? void 0 : k.total_pages) || 1,
      onChange: M
    }
  ), /* @__PURE__ */ s.createElement(
    Ov,
    {
      uuid: E.uuid,
      open: h,
      title: E.title,
      onClose: () => y(!1),
      onEdit: ye,
      onDelete: K
    }
  ), /* @__PURE__ */ s.createElement(
    Yy,
    {
      open: m,
      initialData: c,
      isEdit: _,
      isOptionData: P(),
      loading: $,
      onCancel: () => p(!1),
      onSave: async (ue) => {
        await ge(ue);
      }
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, wg = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function hl(l) {
  const o = vr(), [i, c] = v.useState(null), [d, m] = v.useState(!0), p = v.useRef(!1), h = async (L, D = 1, $ = !1) => {
    m(!0);
    try {
      const k = wg(await o._getShort(`${L}`, D));
      c((P) => !$ || !P ? k : {
        ...k,
        data: [
          ...P.data,
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
    loading: d,
    commands: i,
    loadCommands: h,
    saveCommand: async (L, D) => await o._save(D, L),
    deleteCommand: async (L, D) => await o._delete(D, L),
    updateCommand: async (L, D) => {
      if (console.log(D), !D.uuid) return;
      const { uuid: $, ...k } = D;
      return await o._update($, L, k);
    },
    editStatusCommand: async (L, D, $) => await o._update_status(L, D, $),
    detailInformationCommand: async (L, D) => await o._getDetail(D, L)
  };
}
const kg = "_field_1qtfn_1", Sg = "_label_1qtfn_7", Cg = "_select_1qtfn_13", Ki = {
  field: kg,
  label: Sg,
  select: Cg
}, as = ({
  label: l,
  options: o,
  className: i = "",
  value: c,
  ...d
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ s.createElement("div", { className: Ki.field }, l && /* @__PURE__ */ s.createElement("label", { className: Ki.label }, l), /* @__PURE__ */ s.createElement(
    "select",
    {
      ...d,
      value: m,
      className: `${Ki.select} ${i}`
    },
    !p && /* @__PURE__ */ s.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ s.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, xg = "_switchRow_1lfy8_1", Ng = "_input_1lfy8_11", Tg = "_track_1lfy8_22", Rg = "_thumb_1lfy8_33", Pg = "_label_1lfy8_62", cl = {
  switchRow: xg,
  input: Ng,
  track: Tg,
  thumb: Rg,
  label: Pg
}, jt = ({ label: l, className: o = "", ...i }) => /* @__PURE__ */ s.createElement("label", { className: `${cl.switchRow} ${o}` }, /* @__PURE__ */ s.createElement("input", { ...i, type: "checkbox", className: cl.input }), /* @__PURE__ */ s.createElement("span", { className: cl.track, "aria-hidden": "true" }, /* @__PURE__ */ s.createElement("span", { className: cl.thumb })), /* @__PURE__ */ s.createElement("span", { className: cl.label }, l)), Mg = "_field_veq7g_1", Lg = "_label_veq7g_7", Ig = "_textarea_veq7g_13", $g = "_error_veq7g_40", Dg = "_errorText_veq7g_48", dl = {
  field: Mg,
  label: Lg,
  textarea: Ig,
  error: $g,
  errorText: Dg
}, Fa = ({
  label: l,
  error: o,
  className: i = "",
  ...c
}) => /* @__PURE__ */ s.createElement("div", { className: dl.field }, l && /* @__PURE__ */ s.createElement("label", { className: dl.label }, l), /* @__PURE__ */ s.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${dl.textarea}
          ${o ? dl.error : ""}
          ${i}
        `
  }
), o && /* @__PURE__ */ s.createElement("span", { className: dl.errorText }, o)), zg = [
  { label: "default", value: "default" },
  { label: "ha_storage", value: "ha_storage" }
], Og = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], Ag = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" }
], Fg = "_form_nymr0_1", jg = "_field_nymr0_15", Ug = "_textarea_nymr0_24", Bg = "_arrayItem_nymr0_37", At = {
  form: Fg,
  field: jg,
  textarea: Ug,
  arrayItem: Bg
}, Nd = () => ({
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
  formData: i,
  formatData: c,
  setFormData: d,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = v.useMemo(() => {
    if (i[c]) return i[c] ?? Nd();
  }, [i]), [E, C] = v.useState({}), _ = (k) => {
    d((P) => ({
      ...P,
      [c]: {
        ...P[c] ?? Nd(),
        ...k
      }
    }));
  }, x = (k, P, M) => {
    const O = [...y[k] ?? []];
    O[P] = { ...O[P], ...M }, _({
      [k]: O
    });
  }, L = (k, P) => {
    _({
      [k]: [...y[k] ?? [], P]
    });
  }, D = (k, P) => {
    _({
      [k]: (y[k] ?? []).filter(
        (M, O) => O !== P
      )
    });
  }, $ = () => {
    var M;
    const k = {};
    return i.title.trim() || (k.title = "Обязательное поле"), (M = y.actionType) != null && M.trim() || (k.actionType = "Обязательное поле"), C(k), Object.keys(k).length === 0;
  };
  return /* @__PURE__ */ s.createElement(
    Mt,
    {
      open: l,
      onClose: m,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ s.createElement(
        se,
        {
          onClick: () => {
            $() && (o ? h() : p());
          }
        },
        o ? "Обновить" : "Сохранить"
      )
    },
    /* @__PURE__ */ s.createElement("div", { className: At.form }, /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "Название команды",
        value: i.title,
        error: E.title,
        onChange: (k) => d({
          ...i,
          title: k.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      jt,
      {
        label: "Завершать диалог",
        checked: y.endStatus,
        onChange: (k) => _({
          endStatus: k.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ s.createElement(
      jt,
      {
        label: "Отправить команду как есть",
        checked: y.forwardText,
        onChange: (k) => _({
          forwardText: k.target.checked
        })
      }
    ) : /* @__PURE__ */ s.createElement(s.Fragment, null), /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "actionType",
        value: y.actionType ?? "",
        error: E.actionType,
        onChange: (k) => _({
          actionType: k.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      as,
      {
        label: "answerType",
        value: y.answerType,
        options: zg,
        onChange: (k) => _({
          answerType: k.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement("div", { className: At.field }, /* @__PURE__ */ s.createElement(
      Fa,
      {
        label: "voiceCommands",
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (k) => _({
          voiceCommands: k.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ s.createElement(Ft, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((k, P) => /* @__PURE__ */ s.createElement("div", { key: P, className: At.arrayItem }, /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "actionType",
        value: k.actionType,
        onChange: (M) => x("voiceResponseArray", P, {
          actionType: M.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Fa,
      {
        label: "voiceResponse",
        value: k.voiceResponse,
        onChange: (M) => x("voiceResponseArray", P, {
          voiceResponse: M.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("voiceResponseArray", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: () => L("voiceResponseArray", {
          actionType: "",
          voiceResponse: ""
        })
      },
      "Добавить ещё"
    )), /* @__PURE__ */ s.createElement(Ft, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((k, P) => /* @__PURE__ */ s.createElement("div", { key: P, className: At.arrayItem }, /* @__PURE__ */ s.createElement(
      as,
      {
        label: "actionTypeComponent",
        value: k.actionTypeComponent,
        options: Ag,
        onChange: (M) => x("nextAction", P, {
          actionTypeComponent: M.target.value
        })
      }
    ), k.actionTypeComponent == "custom" ? /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "actionType",
        value: k.actionType ?? "",
        onChange: (M) => x("nextAction", P, {
          actionType: M.target.value
        })
      }
    ) : /* @__PURE__ */ s.createElement(s.Fragment, null), /* @__PURE__ */ s.createElement(
      fr,
      {
        label: "uuid",
        value: k.uuid,
        searchSource: ["search_assistant_commands", "search_assistant_sub_commands"],
        selectedTitle: k.title,
        onChange: (M) => x("nextAction", P, {
          uuid: M
        }),
        onSelect: (M) => x("nextAction", P, {
          uuid: M.uuid,
          title: M.title ?? ""
        })
      }
    ), /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextAction", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ s.createElement(
      se,
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
    )), /* @__PURE__ */ s.createElement(Ft, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((k, P) => /* @__PURE__ */ s.createElement("div", { key: P, className: At.arrayItem }, /* @__PURE__ */ s.createElement(
      fr,
      {
        label: "uuid",
        value: k.uuid,
        selectedTitle: k.title,
        searchSource: ["search_assistant_sub_direct_controls"],
        onChange: (M) => x("nextDirectControl", P, {
          uuid: M
        }),
        onSelect: (M) => x("nextDirectControl", P, {
          uuid: M.uuid,
          mappingType: M.mappingType ?? "",
          title: M.title ?? ""
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "mappingType",
        disabled: !0,
        value: k.mappingType ?? "",
        onChange: (M) => x("nextDirectControl", P, {
          actionType: M.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextDirectControl", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ s.createElement(
      se,
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
}, bg = "_content_19r5a_1", Wg = "_title_19r5a_7", Hg = "_actions_19r5a_14", Gi = {
  content: bg,
  title: Wg,
  actions: Hg
}, Ha = ({
  open: l,
  command: o,
  onClose: i,
  onToggleStatus: c,
  onEdit: d,
  onDelete: m
}) => {
  const p = Bt();
  if (!o) return null;
  const h = /* @__PURE__ */ s.createElement("div", { className: Gi.content }, /* @__PURE__ */ s.createElement("h3", { className: Gi.title }, o.title), /* @__PURE__ */ s.createElement("div", { className: Gi.actions }, /* @__PURE__ */ s.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), i();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ s.createElement(
    se,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        d(o.uuid), i();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ s.createElement(
    se,
    {
      fullWidth: !0,
      variant: "ghost",
      onClick: () => {
        m(o.uuid), i();
      }
    },
    "Удалить"
  )));
  return /* @__PURE__ */ s.createElement(s.Fragment, null, p ? /* @__PURE__ */ s.createElement(sf, { open: l, onClose: i }, h) : /* @__PURE__ */ s.createElement(
    Mt,
    {
      open: l,
      onClose: i,
      title: "Действия"
    },
    h
  ));
}, Vg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), Td = () => ({
  status: !1,
  title: "",
  componentDialog: {
    ...Vg(),
    forwardText: !1
  }
}), Qg = () => {
  const l = Bt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(
    () => Td()
  ), [h, y] = v.useState(
    null
  ), { ref: E, inView: C } = yr({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: _,
    loadCommands: x,
    deleteCommand: L,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: k,
    editStatusCommand: P,
    commands: M
  } = hl("get_assistant_commands_short"), [O, z] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !C || _ || !M || M.page >= M.total_pages || x("get_assistant_commands_short", M.page + 1, !0);
  }, [C, l, _, M, x]), v.useEffect(() => {
    !_ && M && M.page === 1 && z(!0);
  }, [_, M]);
  const W = () => {
    d(!1), p(Td()), i(!0);
  }, U = async (K) => {
    d(!0);
    const ue = await D(
      "get_assistant_command",
      K
    );
    p(ue.data), i(!0);
  }, ee = async (K, ue) => {
    console.log(K, ue), await P(
      "update_assistant_command_status",
      K,
      ue
    ), x("get_assistant_commands_short");
  }, ne = async (K) => {
    await L("delete_assistant_command", K), x("get_assistant_commands_short");
  }, ye = async () => {
    await $("save_assistant_command", m), i(!1);
  }, ge = async () => {
    await k("update_assistant_command", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, _ && /* @__PURE__ */ s.createElement(Er, null), /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Комманды"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: oe.header }, /* @__PURE__ */ s.createElement("div", { className: oe.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: oe.title }, "Комманды"), /* @__PURE__ */ s.createElement("p", { className: oe.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: oe.actions }, l ? /* @__PURE__ */ s.createElement(wr, null, /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: W }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: W }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: oe.list }, M == null ? void 0 : M.data.map((K) => /* @__PURE__ */ s.createElement(
    gr,
    {
      key: K.uuid,
      title: K.title,
      subTitle: K.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(K)
    }
  )), l ? /* @__PURE__ */ s.createElement("div", { ref: E, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(s.Fragment, null)), l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(
    _r,
    {
      page: (M == null ? void 0 : M.page) || 1,
      totalPages: (M == null ? void 0 : M.total_pages) || 1,
      onChange: (K) => x("get_assistant_commands_short", K)
    }
  ), /* @__PURE__ */ s.createElement(
    pf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "componentDialog",
      setFormData: p,
      onClose: () => i(!1),
      onSave: ye,
      onUpdate: ge
    }
  ), /* @__PURE__ */ s.createElement(
    Ha,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ee,
      onDelete: ne,
      onEdit: (K) => U(K)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, qg = () => ({
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
  subComponentDialog: {
    ...qg(),
    forwardText: !1
  }
}), Yg = () => {
  const l = Bt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(() => Rd()), [h, y] = v.useState(null), { ref: E, inView: C } = yr({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: _,
    loadCommands: x,
    deleteCommand: L,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: k,
    editStatusCommand: P,
    commands: M
  } = hl("get_assistant_sub_commands_short"), [O, z] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !C || _ || !M || M.page >= M.total_pages || x("get_assistant_sub_commands_short", M.page + 1, !0);
  }, [
    C,
    l,
    _,
    M,
    x
  ]), v.useEffect(() => {
    !_ && M && M.page === 1 && z(!0);
  }, [_, M]);
  const W = () => {
    d(!1), p(Rd()), i(!0);
  }, U = async (K) => {
    d(!0);
    const ue = await D("get_assistant_sub_command", K);
    p(ue.data), i(!0);
  }, ee = async (K, ue) => {
    await P("update_assistant_sub_command_status", K, ue), x("get_assistant_sub_commands_short");
  }, ne = async (K) => {
    await L("delete_assistant_sub_command", K), x("get_assistant_sub_commands_short");
  }, ye = async () => {
    await $("save_assistant_sub_command", m), i(!1);
  }, ge = async () => {
    await k("update_assistant_sub_command", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Второстепенные команды"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(Jt, null), _ && /* @__PURE__ */ s.createElement(Loader, null), /* @__PURE__ */ s.createElement("div", { className: oe.header }, /* @__PURE__ */ s.createElement("div", { className: oe.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: oe.title }, "Второстепенные команды "), /* @__PURE__ */ s.createElement("p", { className: oe.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: oe.actions }, l ? /* @__PURE__ */ s.createElement(wr, null, /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: W }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: W }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: oe.list }, M == null ? void 0 : M.data.map((K) => /* @__PURE__ */ s.createElement(
    gr,
    {
      key: K.uuid,
      title: K.title,
      subTitle: K.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(K)
    }
  ))), l ? /* @__PURE__ */ s.createElement("div", { ref: E, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(
    _r,
    {
      page: (M == null ? void 0 : M.page) || 1,
      totalPages: (M == null ? void 0 : M.total_pages) || 1,
      onChange: (K) => x("get_assistant_sub_commands_short", K)
    }
  ), /* @__PURE__ */ s.createElement(
    pf,
    {
      open: o,
      isEdit: c,
      formData: m,
      formatData: "subComponentDialog",
      setFormData: p,
      onClose: () => i(!1),
      onSave: ye,
      onUpdate: ge
    }
  ), /* @__PURE__ */ s.createElement(
    Ha,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ee,
      onDelete: ne,
      onEdit: (K) => U(K)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, Pd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Kg = ({
  open: l,
  onClose: o,
  title: i,
  formData: c,
  setFormData: d,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? Pd(), [c]), h = (_) => {
    d((x) => ({
      ...x,
      directControl: {
        ...x.directControl ?? Pd(),
        ..._
      }
    }));
  }, y = (_, x) => {
    const L = [...p.subDirectControl ?? []];
    L[_] = {
      ...L[_],
      ...x
    }, h({
      subDirectControl: L
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
  }, C = (_) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((x, L) => L !== _)
    });
  };
  return /* @__PURE__ */ s.createElement(
    Mt,
    {
      open: l,
      onClose: o,
      title: i,
      footer: /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(se, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ s.createElement("div", { className: At.form }, /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => d((x) => ({
          ...x,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      as,
      {
        label: "valueType",
        value: p.valueType,
        options: Og,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), p.valueType == "command" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { className: At.field }, /* @__PURE__ */ s.createElement(
      Fa,
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
    )), /* @__PURE__ */ s.createElement(
      jt,
      {
        label: "manual",
        checked: p.manual,
        onChange: (_) => h({
          manual: _.target.checked,
          subDirectControl: _.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ s.createElement(Ft, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, x) => /* @__PURE__ */ s.createElement("div", { key: x, className: At.arrayItem }, /* @__PURE__ */ s.createElement(
        Me,
        {
          label: "subMappingType",
          value: _.subMappingType,
          onChange: (L) => y(x, {
            subMappingType: L.target.value
          })
        }
      ), /* @__PURE__ */ s.createElement("div", { className: At.field }, /* @__PURE__ */ s.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ s.createElement(
        "textarea",
        {
          className: At.textarea,
          rows: 3,
          value: _.subVoiceCommands,
          onChange: (L) => y(x, {
            subVoiceCommands: L.target.value
          })
        }
      )), /* @__PURE__ */ s.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: () => C(x)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ s.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: E
      },
      "Добавить ещё"
    )) : /* @__PURE__ */ s.createElement(
      fr,
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
    ), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null))
  );
}, Md = () => ({
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
}), Gg = () => {
  const l = Bt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(() => Md()), [h, y] = v.useState(null), E = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [C, _] = v.useState("main"), x = hr(), { ref: L, inView: D } = yr({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: $,
    loadCommands: k,
    deleteCommand: P,
    detailInformationCommand: M,
    saveCommand: O,
    updateCommand: z,
    editStatusCommand: W,
    commands: U
  } = hl("get_assistant_sub_direct_controls_short"), [ee, ne] = v.useState(!1);
  v.useEffect(() => {
    !ee || !l || !D || $ || !U || U.page >= U.total_pages || k("get_assistant_sub_direct_controls_short", U.page + 1, !0);
  }, [
    D,
    l,
    $,
    U,
    k
  ]), v.useEffect(() => {
    !$ && U && U.page === 1 && ne(!0);
  }, [$, U]);
  const ye = () => {
    d(!1), p(Md()), i(!0);
  }, ge = async (q) => {
    d(!0);
    const Te = await M("get_assistant_sub_direct_control", q);
    p(Te.data), i(!0);
  }, K = async (q, Te) => {
    await W("update_assistant_sub_direct_controls_status", q, Te), k("get_assistant_sub_direct_controls_short");
  }, ue = async (q) => {
    await P("delete_assistant_sub_direct_control", q), k("get_assistant_sub_direct_controls_short");
  }, Ce = async () => {
    await O("save_assistant_sub_direct_control", m), i(!1);
  }, Q = async () => {
    await z("update_assistant_sub_direct_control", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Прямые команды"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(Jt, null), $ && /* @__PURE__ */ s.createElement(Loader, null), /* @__PURE__ */ s.createElement("div", { className: oe.header }, /* @__PURE__ */ s.createElement("div", { className: oe.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: oe.title }, "Прямые команды"), /* @__PURE__ */ s.createElement("div", { className: oe.innerTabs }, E.map((q) => /* @__PURE__ */ s.createElement(
    "button",
    {
      key: q.key,
      type: "button",
      className: `${oe.innerTab} ${C === q.key ? oe.activeInnerTab : ""}`,
      onClick: () => {
        _(q.key), x(`/commands/direct/${q.key === "main" ? "main" : "template"}`);
      }
    },
    q.label
  ))), /* @__PURE__ */ s.createElement("p", { className: oe.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: oe.actions }, l ? /* @__PURE__ */ s.createElement(wr, null, /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: ye }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: ye }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: oe.list }, U == null ? void 0 : U.data.map((q) => /* @__PURE__ */ s.createElement(
    gr,
    {
      key: q.uuid,
      title: q.title,
      subTitle: q.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(q)
    }
  ))), l ? /* @__PURE__ */ s.createElement("div", { ref: L, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(
    _r,
    {
      page: (U == null ? void 0 : U.page) || 1,
      totalPages: (U == null ? void 0 : U.total_pages) || 1,
      onChange: (q) => k("get_assistant_sub_direct_controls_short", q)
    }
  ), /* @__PURE__ */ s.createElement(
    Kg,
    {
      open: o,
      onClose: () => i(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Q : Ce
    }
  ), /* @__PURE__ */ s.createElement(
    Ha,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: K,
      onDelete: ue,
      onEdit: (q) => ge(q)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, Ld = {}, Xg = ({
  open: l,
  onClose: o,
  title: i,
  formData: c,
  setFormData: d,
  onSave: m
}) => {
  const p = v.useMemo(
    () => c.subDirectControl ?? [],
    [c]
  ), h = (_) => {
    d((x) => ({
      ...x,
      subDirectControl: _
    }));
  }, y = (_, x) => {
    const L = [...p];
    L[_] = {
      ...L[_],
      ...x
    }, h(L);
  }, E = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, C = (_) => {
    h(
      p.filter((x, L) => L !== _)
    );
  };
  return /* @__PURE__ */ s.createElement(
    Mt,
    {
      open: l,
      onClose: o,
      title: i,
      footer: /* @__PURE__ */ s.createElement(se, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ s.createElement("div", { className: Ld.form }, /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => d((x) => ({
          ...x,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ s.createElement(
      Ft,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((_, x) => /* @__PURE__ */ s.createElement(
        "div",
        {
          key: x,
          className: Ld.arrayItem
        },
        /* @__PURE__ */ s.createElement(
          Me,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (L) => y(x, {
              subMappingType: L.target.value
            })
          }
        ),
        /* @__PURE__ */ s.createElement(
          Fa,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof _.subVoiceCommands == "object" ? _.subVoiceCommands : []).join(`
`),
            onChange: (L) => y(x, {
              subVoiceCommands: L.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ s.createElement(
          se,
          {
            type: "button",
            variant: "ghost",
            onClick: () => C(x)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ s.createElement(
        se,
        {
          type: "button",
          variant: "secondary",
          onClick: E
        },
        "Добавить ещё"
      )
    ))
  );
}, Id = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), Jg = () => {
  const l = Bt(), o = hr(), [i, c] = v.useState(!1), [d, m] = v.useState(!1), [p, h] = v.useState(Id), [y, E] = v.useState(null), [C, _] = v.useState("template"), [x, L] = v.useState(!1), D = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: $, inView: k } = yr({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: P,
    loadCommands: M,
    deleteCommand: O,
    detailInformationCommand: z,
    saveCommand: W,
    updateCommand: U,
    editStatusCommand: ee,
    commands: ne
  } = hl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !x || !l || !k || P || !ne || ne.page >= ne.total_pages || M(
      "get_assistant_sub_direct_control_samples_short",
      ne.page + 1,
      !0
    );
  }, [
    x,
    k,
    l,
    P,
    ne,
    M
  ]), v.useEffect(() => {
    !P && ne && ne.page === 1 && L(!0);
  }, [P, ne]);
  const ye = () => {
    m(!1), h(Id()), c(!0);
  }, ge = async (q) => {
    m(!0);
    const Te = await z(
      "get_assistant_sub_direct_control_sample",
      q
    );
    h(Te.data), c(!0);
  }, K = async (q, Te) => {
    await ee(
      "update_assistant_sub_direct_control",
      q,
      Te
    ), M(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, ue = async (q) => {
    await O(
      "delete_assistant_sub_direct_control_sample",
      q
    ), M(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Ce = async () => {
    await W(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), M(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Q = async () => {
    await U(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), M(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Прямые команды шаблоны"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, !l && /* @__PURE__ */ s.createElement(Jt, null), P && /* @__PURE__ */ s.createElement(Er, null), /* @__PURE__ */ s.createElement("div", { className: oe.header }, /* @__PURE__ */ s.createElement("div", { className: oe.heading }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", { className: oe.title }, "Прямые команды шаблоны"), /* @__PURE__ */ s.createElement("div", { className: oe.innerTabs }, D.map((q) => /* @__PURE__ */ s.createElement(
    "button",
    {
      key: q.key,
      type: "button",
      className: `${oe.innerTab} ${C === q.key ? oe.activeInnerTab : ""}`,
      onClick: () => {
        _(q.key), o(`/commands/direct/${q.key === "main" ? "main" : "template"}`);
      }
    },
    q.label
  ))), /* @__PURE__ */ s.createElement("p", { className: oe.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ s.createElement("div", { className: oe.actions }, l ? /* @__PURE__ */ s.createElement(wr, null, /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: ye }, "Добавить сценарий")) : /* @__PURE__ */ s.createElement(se, { variant: "primary", onClick: ye }, "🞢 Добавить сценарий"))), /* @__PURE__ */ s.createElement("div", { className: oe.list }, ne == null ? void 0 : ne.data.map((q) => /* @__PURE__ */ s.createElement(
    gr,
    {
      key: q.uuid,
      title: q.title,
      subTitle: q.status === !1 ? "Выключена" : "Включена",
      onClick: () => E(q)
    }
  ))), l ? /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: $,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ s.createElement(
    _r,
    {
      page: (ne == null ? void 0 : ne.page) ?? 1,
      totalPages: (ne == null ? void 0 : ne.total_pages) ?? 1,
      onChange: (q) => M(
        "get_assistant_sub_direct_control_samples_short",
        q
      )
    }
  ), /* @__PURE__ */ s.createElement(
    Xg,
    {
      open: i,
      onClose: () => c(!1),
      title: d ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: d ? Q : Ce
    }
  ), /* @__PURE__ */ s.createElement(
    Ha,
    {
      open: !!y,
      command: y,
      onClose: () => E(null),
      onToggleStatus: K,
      onDelete: ue,
      onEdit: (q) => ge(q)
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
}, Zg = "_form_nymr0_1", e_ = {
  form: Zg
}, t_ = ({
  open: l,
  isEdit: o,
  formData: i,
  setFormData: c,
  onClose: d,
  onUpdate: m
}) => {
  if (!i) return;
  const p = v.useMemo(() => {
    if (i) return i;
  }, [i]), h = (y) => {
    c((E) => ({
      ...E,
      ...y
    }));
  };
  return /* @__PURE__ */ s.createElement(
    Mt,
    {
      open: l,
      onClose: d,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ s.createElement(se, { onClick: m }, "Обновить")
    },
    /* @__PURE__ */ s.createElement("div", { className: e_.form }, /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "Название команды",
        value: i.title,
        onChange: (y) => c({
          ...i,
          title: y.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
      jt,
      {
        label: "Завершать диалог",
        checked: p.endStatus,
        onChange: (y) => h({
          endStatus: y.target.checked
        })
      }
    ), /* @__PURE__ */ s.createElement(
      jt,
      {
        label: "Передать команду серверу",
        checked: p.forwardCommandToServer,
        onChange: (y) => h({
          forwardCommandToServer: y.target.checked
        })
      }
    ), /* @__PURE__ */ s.createElement(
      Me,
      {
        label: "actionType",
        value: p.actionType,
        onChange: (y) => h({
          actionType: y.target.value
        })
      }
    ), /* @__PURE__ */ s.createElement(
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
}, n_ = () => {
  const l = Bt(), [o, i] = v.useState(!1), [c, d] = v.useState(!1), [m, p] = v.useState(), { ref: h, inView: y } = yr({
    threshold: 0,
    rootMargin: "0px 0px 180px 0px"
  }), {
    loading: E,
    loadCommands: C,
    detailInformationCommand: _,
    updateCommand: x,
    commands: L
  } = hl("get_assistant_settings_short"), [D, $] = v.useState(!1);
  v.useEffect(() => {
    !D || !l || !y || E || !L || L.page >= L.total_pages || C("get_assistant_settings_short", L.page + 1, !0);
  }, [
    y,
    l,
    E,
    L,
    C
  ]), v.useEffect(() => {
    !E && L && L.page === 1 && $(!0);
  }, [E, L]);
  const k = async (M) => {
    d(!0);
    const O = await _("get_assistant_setting", M.uuid);
    p(O.data), i(!0);
  }, P = async () => {
    await x("update_assistant_setting", m), i(!1);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Настройки команд"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement(Jt, null), E && /* @__PURE__ */ s.createElement(Loader, null), /* @__PURE__ */ s.createElement("div", { className: oe.header }, /* @__PURE__ */ s.createElement("div", { className: oe.headerTop }, /* @__PURE__ */ s.createElement("div", { className: oe.heading }, /* @__PURE__ */ s.createElement("p", { className: oe.description }, "Создавайте и редактируйте голосовые команды ассистента.")))), /* @__PURE__ */ s.createElement("div", { className: oe.list }, L == null ? void 0 : L.data.map((M) => /* @__PURE__ */ s.createElement(
    gr,
    {
      key: M.uuid,
      title: M.title,
      subTitle: M.actionType,
      onClick: () => k(M)
    }
  ))), l ? /* @__PURE__ */ s.createElement("div", { ref: h, style: { height: 1 } }) : /* @__PURE__ */ s.createElement(
    _r,
    {
      page: (L == null ? void 0 : L.page) || 1,
      totalPages: (L == null ? void 0 : L.total_pages) || 1,
      onChange: (M) => C("get_assistant_settings_short", M)
    }
  ), /* @__PURE__ */ s.createElement(
    t_,
    {
      open: o,
      isEdit: c,
      formData: m,
      setFormData: p,
      onClose: () => i(!1),
      onUpdate: P
    }
  )), /* @__PURE__ */ s.createElement(Zt, null));
};
function r_() {
  const l = vr(), [o, i] = v.useState(!0), [c, d] = v.useState(null), [m, p] = v.useState([]), h = v.useCallback(async () => {
    i(!0);
    try {
      const C = await l._getShort("get_settings");
      console.log(C), d((C == null ? void 0 : C.result) ?? C);
    } finally {
      i(!1);
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
const l_ = "_form_1o1aw_1", a_ = "_field_1o1aw_7", o_ = "_input_1o1aw_13", i_ = "_label_1o1aw_32", s_ = "_help_1o1aw_51", qe = {
  form: l_,
  field: a_,
  input: o_,
  label: i_,
  help: s_
}, u_ = ({ data: l, onChange: o }) => {
  const i = (c, d) => {
    o({
      ...l,
      [c]: d
    });
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, /* @__PURE__ */ s.createElement(Me, { label: "API Key", value: l.api_key ?? "", onChange: (c) => i("api_key", c.target.value) }), /* @__PURE__ */ s.createElement(Me, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => i("folderId", c.target.value) }), /* @__PURE__ */ s.createElement(Me, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => i("language", c.target.value) }), /* @__PURE__ */ s.createElement(Me, { label: "Voice", value: l.voice ?? "", onChange: (c) => i("voice", c.target.value) }), /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, "Codec"), /* @__PURE__ */ s.createElement("select", { className: qe.input, value: l.codec ?? "", onChange: (c) => i("codec", c.target.value || void 0) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ s.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ s.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ s.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, "Emotion"), /* @__PURE__ */ s.createElement("select", { className: qe.input, value: l.emotion ?? "", onChange: (c) => i("emotion", c.target.value || void 0) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ s.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ s.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ s.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ s.createElement(Me, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => i("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, c_ = ({ data: l, onChange: o }) => {
  const i = (c, d) => {
    o({
      ...l,
      [c]: d
    });
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, /* @__PURE__ */ s.createElement(Me, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => i("base_url", c.target.value) }), /* @__PURE__ */ s.createElement(Me, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => i("token", c.target.value) }));
}, d_ = ({ data: l, musicOptions: o, onChange: i }) => {
  const c = (m, p) => {
    i({
      ...l,
      [m]: p
    });
  }, d = (m, p, h = "") => {
    const y = o.some((E) => E.value === h);
    return /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, m), /* @__PURE__ */ s.createElement(
      "select",
      {
        className: qe.input,
        value: h,
        onChange: (E) => c(p, E.target.value)
      },
      /* @__PURE__ */ s.createElement("option", { value: "" }, "Не выбрано"),
      h && !y && /* @__PURE__ */ s.createElement("option", { value: h }, h),
      o.map((E) => /* @__PURE__ */ s.createElement("option", { key: E.value, value: E.value }, E.label))
    ));
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, d(
    "Global music timer",
    "global_music_timer",
    l.global_music_timer
  ), d(
    "Global music alarm",
    "global_music_alarm",
    l.global_music_alarm
  ), o.length === 0 && /* @__PURE__ */ s.createElement("span", { className: qe.help }, "Музыка на сервере не найдена."));
}, f_ = ({ data: l, onChange: o }) => {
  const i = (c, d) => {
    o({
      ...l,
      [c]: d
    });
  };
  return /* @__PURE__ */ s.createElement("div", { className: qe.form }, /* @__PURE__ */ s.createElement(
    Me,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => i("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ s.createElement("label", { className: qe.field }, /* @__PURE__ */ s.createElement("span", { className: qe.label }, "Theme"), /* @__PURE__ */ s.createElement("select", { className: qe.input, value: l.theme ?? "dark", onChange: (c) => i("theme", c.target.value) }, /* @__PURE__ */ s.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ s.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ s.createElement(jt, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => i("is_admin", c.target.checked) }), /* @__PURE__ */ s.createElement(jt, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => i("active_remout", c.target.checked) }), /* @__PURE__ */ s.createElement(jt, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ s.createElement(
    Me,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => i("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, m_ = {
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
}, p_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, $d = {
  yandex_tts: m_,
  remout: ja,
  timer_alarm: p_,
  theme: "dark",
  is_admin: !1,
  active_remout: !1,
  client_id: "",
  api_commands_enabled: !1,
  api_commands_token: ""
}, h_ = (l) => ({
  api_key: (l == null ? void 0 : l.api_key) ?? "",
  folderId: (l == null ? void 0 : l.folderId) ?? "",
  voice: (l == null ? void 0 : l.voice) ?? "",
  speed: (l == null ? void 0 : l.speed) ?? void 0,
  language: (l == null ? void 0 : l.language) ?? "",
  codec: (l == null ? void 0 : l.codec) ?? void 0,
  emotion: (l == null ? void 0 : l.emotion) ?? void 0
}), v_ = (l) => ({
  base_url: (l == null ? void 0 : l.base_url) ?? "",
  token: (l == null ? void 0 : l.token) ?? ""
}), y_ = (l) => ({
  global_music_timer: (l == null ? void 0 : l.global_music_timer) ?? "",
  global_music_alarm: (l == null ? void 0 : l.global_music_alarm) ?? ""
}), g_ = (l) => ({
  yandex_tts: h_(l == null ? void 0 : l.yandex_tts),
  remout: v_(l == null ? void 0 : l.remout),
  timer_alarm: y_(l == null ? void 0 : l.timer_alarm),
  theme: (l == null ? void 0 : l.theme) ?? "dark",
  is_admin: !!(l != null && l.is_admin),
  active_remout: !!(l != null && l.active_remout),
  client_id: (l == null ? void 0 : l.client_id) ?? "",
  api_commands_enabled: !!(l != null && l.api_commands_enabled),
  api_commands_token: (l == null ? void 0 : l.api_commands_token) ?? ""
}), Xi = (l, o) => {
  const i = {};
  return Object.keys(l).forEach((c) => {
    const d = c;
    l[d] !== o[d] && (i[d] = l[d]);
  }), i;
}, __ = (l, o) => {
  const i = {}, c = Xi(l.yandex_tts, o.yandex_tts), d = Xi(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (i.yandex_tts = c), Object.keys(d).length > 0 && (i.timer_alarm = d), l.theme !== o.theme && (i.theme = l.theme), l.is_admin !== o.is_admin && (i.is_admin = l.is_admin), l.active_remout !== o.active_remout && (i.active_remout = l.active_remout), l.client_id !== o.client_id && (i.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (i.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (i.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Xi(l.remout ?? ja, o.remout ?? ja);
    Object.keys(m).length > 0 && (i.remout = m);
  }
  return i;
}, E_ = () => {
  const l = Bt(), [o, i] = v.useState($d), [c, d] = v.useState($d), { settings: m, musicOptions: p, saveSettings: h } = r_();
  v.useEffect(() => {
    if (!m) return;
    const E = g_(m);
    i(E), d(E);
  }, [m]), v.useEffect(() => {
    window.dispatchEvent(new CustomEvent("dialog-custom-ui-theme-change", { detail: o.theme }));
  }, [o.theme]);
  const y = () => {
    const E = __(o, c);
    h(E), d(o);
  };
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Xt,
    {
      title: "Настройки"
    }
  ), /* @__PURE__ */ s.createElement("div", { className: oe.page }, /* @__PURE__ */ s.createElement(Jt, null), l ? /* @__PURE__ */ s.createElement(s.Fragment, null) : /* @__PURE__ */ s.createElement("h1", null, "Настройки"), /* @__PURE__ */ s.createElement("div", { style: {
    display: "flex",
    "flex-direction": "column",
    height: "100%",
    ...l ? { marginBottom: "150px" } : {},
    gap: "15px"
  } }, /* @__PURE__ */ s.createElement(Ft, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ s.createElement(
    f_,
    {
      data: {
        active_remout: o.active_remout,
        is_admin: o.is_admin,
        theme: o.theme,
        client_id: o.client_id,
        api_commands_enabled: o.api_commands_enabled,
        api_commands_token: o.api_commands_token
      },
      onChange: (E) => i({ ...o, ...E })
    }
  )), /* @__PURE__ */ s.createElement(Ft, { title: "Яндекс TTS" }, /* @__PURE__ */ s.createElement(
    u_,
    {
      data: o.yandex_tts,
      onChange: (E) => i({ ...o, yandex_tts: E })
    }
  )), o.active_remout && /* @__PURE__ */ s.createElement(Ft, { title: "Remote" }, /* @__PURE__ */ s.createElement(
    c_,
    {
      data: o.remout ?? ja,
      onChange: (E) => i({ ...o, remout: E })
    }
  )), /* @__PURE__ */ s.createElement(Ft, { title: "Timer / Alarm" }, /* @__PURE__ */ s.createElement(
    d_,
    {
      data: o.timer_alarm,
      musicOptions: p,
      onChange: (E) => i({ ...o, timer_alarm: E })
    }
  ))), l ? /* @__PURE__ */ s.createElement(wr, null, /* @__PURE__ */ s.createElement(
    se,
    {
      variant: "primary",
      onClick: y
    },
    "Сохранить"
  )) : /* @__PURE__ */ s.createElement(se, { onClick: y }, "Сохранить")), /* @__PURE__ */ s.createElement(Zt, null));
}, Fn = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, w_ = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 1e3).toISOString();
}, hf = (l) => {
  if (typeof l == "number") return l;
  if (typeof l == "string") {
    const o = l.split(":").map((i) => Number(i));
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
}, Dd = (l) => {
  const o = Math.max(1, Number(l) || 1), i = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), d = o % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(d).padStart(2, "0")}`;
}, Ji = (l) => {
  const o = Fn(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function vf() {
  const l = vr(), [o, i] = v.useState([]), [c, d] = v.useState([]), [m, p] = v.useState([]), [h, y] = v.useState(!0), E = v.useMemo(() => l.getDevices(), [l]), C = v.useCallback(async () => {
    const O = await l._getShort("get_timer_requests_short", 1, 100), z = await Promise.all(
      Ji(O).map(async (W) => {
        var ee;
        const U = await l._getDetail(W.uuid, "get_timer_request");
        return ((ee = Fn(U)) == null ? void 0 : ee.data) ?? Fn(U);
      })
    );
    i(z.filter((W) => !!W && W.action_type === "create_timer"));
  }, [l]), _ = v.useCallback(async () => {
    const O = await l._getShort("get_alarm_requests_short", 1, 100), z = await Promise.all(
      Ji(O).map(async (W) => {
        var ee;
        const U = await l._getDetail(W.uuid, "get_alarm_request");
        return ((ee = Fn(U)) == null ? void 0 : ee.data) ?? Fn(U);
      })
    );
    d(z.filter((W) => !!W && W.action_type !== "delete_alarm"));
  }, [l]), x = v.useCallback(async () => {
    const O = await l._getShort("get_alarm_time_widgets_short", 1, 100), z = await Promise.all(
      Ji(O).map(async (W) => {
        var ee;
        const U = await l._getDetail(W.uuid, "get_alarm_time_widget");
        return ((ee = Fn(U)) == null ? void 0 : ee.data) ?? Fn(U);
      })
    );
    p(z.filter(Boolean));
  }, [l]), L = v.useCallback(async () => {
    y(!0);
    try {
      await Promise.all([C(), _(), x()]);
    } finally {
      y(!1);
    }
  }, [_, x, C]);
  return v.useEffect(() => {
    L();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (O, z, W = 0.3, U = "once", ee = []) => {
      await l._save({ name: `Будильник ${z}`, action_type: "create_alarm", device_id: O, status: "on", time: z, volume_start: W, repeat_type: U, repeat_days: ee }, "save_alarm_request"), await _();
    },
    createTimer: async (O, z, W = 0.3) => {
      const U = {
        count_timer: Dd(z),
        date_end: w_(z)
      };
      await l._save({ name: `Таймер ${Dd(z)}`, action_type: "create_timer", device_id: O, timer_time: U, volume_start: W }, "save_timer_request"), await C();
    },
    deleteAlarm: async (O) => {
      await l._delete(O.uuid, "delete_alarm_request"), await _();
    },
    devices: E,
    loading: h,
    stopTimer: async (O) => {
      await l._delete(O.uuid, "delete_timer_request"), await C();
    },
    timers: o,
    toTimerSeconds: hf,
    updateAlarm: async (O, z) => {
      await l._update(O.uuid, "update_alarm_request", { ...O, action_type: "edit_alarm", ...z }), await _();
    }
  };
}
const k_ = "_page_hyrwr_1", S_ = "_header_hyrwr_11", C_ = "_title_hyrwr_18", x_ = "_description_hyrwr_25", N_ = "_grid_hyrwr_31", T_ = "_card_hyrwr_37", R_ = "_empty_hyrwr_37", P_ = "_cardHeader_hyrwr_44", M_ = "_cardTitle_hyrwr_51", L_ = "_meta_hyrwr_56", I_ = "_time_hyrwr_62", $_ = "_form_hyrwr_69", D_ = "_field_hyrwr_75", z_ = "_label_hyrwr_81", O_ = "_select_hyrwr_87", A_ = "_input_hyrwr_87", F_ = "_quickTabs_hyrwr_97", j_ = "_quickTab_hyrwr_97", U_ = "_activeQuickTab_hyrwr_113", B_ = "_cardLead_hyrwr_141", b_ = "_cardIcon_hyrwr_148", W_ = "_cardButton_hyrwr_153", H_ = "_wheelPicker_hyrwr_165", V_ = "_wheelColumn_hyrwr_175", Q_ = "_wheelSelect_hyrwr_182", q_ = "_selectButton_hyrwr_194", Y_ = "_timeInput_hyrwr_205", H = {
  page: k_,
  header: S_,
  title: C_,
  description: x_,
  grid: N_,
  card: T_,
  empty: R_,
  cardHeader: P_,
  cardTitle: M_,
  meta: L_,
  time: I_,
  form: $_,
  field: D_,
  label: z_,
  select: O_,
  input: A_,
  quickTabs: F_,
  quickTab: j_,
  activeQuickTab: U_,
  cardLead: B_,
  cardIcon: b_,
  cardButton: W_,
  wheelPicker: H_,
  wheelColumn: V_,
  wheelSelect: Q_,
  selectButton: q_,
  timeInput: Y_
}, K_ = [5, 10, 15, 30, 45, 60], zd = (l) => {
  const o = Math.max(0, l), i = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), d = o % 60;
  return [i, c, d].map((m) => String(m).padStart(2, "0")).join(":");
}, G_ = (l, o, i) => Math.max(1, l * 3600 + o * 60 + i), X_ = (l) => ({
  hours: Math.floor(l / 3600),
  minutes: Math.floor(l % 3600 / 60),
  seconds: l % 60
}), J_ = () => {
  const { createTimer: l, devices: o, loading: i, stopTimer: c, timers: d, toTimerSeconds: m } = vf(), [p, h] = v.useState(!1), [y, E] = v.useState(""), [C, _] = v.useState(0.3), [x, L] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [D, $] = v.useState({});
  v.useEffect(() => {
    $((z) => Object.fromEntries(d.map((W) => [W.uuid, z[W.uuid] ?? m(W.timer_time)])));
  }, [d, m]), v.useEffect(() => {
    const z = window.setInterval(() => {
      $((W) => Object.fromEntries(Object.entries(W).map(([U, ee]) => [U, Math.max(0, ee - 1)])));
    }, 1e3);
    return () => window.clearInterval(z);
  }, []);
  const k = v.useMemo(() => new Map(o.map((z) => [z.id, z.name])), [o]), P = G_(x.hours, x.minutes, x.seconds), M = async () => {
    y && (await l(y, P, C), h(!1));
  }, O = (z) => L(X_(z * 60));
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Xt, { title: "Таймер" }), /* @__PURE__ */ s.createElement("div", { className: H.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: H.header }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("h1", { className: H.title }, "Таймер"), /* @__PURE__ */ s.createElement("p", { className: H.description }, "Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.")), /* @__PURE__ */ s.createElement(se, { onClick: () => h(!0) }, "Создать")), i && /* @__PURE__ */ s.createElement(Er, null), /* @__PURE__ */ s.createElement("div", { className: H.grid }, d.length ? d.map((z) => {
    const W = m(z.timer_time);
    return /* @__PURE__ */ s.createElement("div", { className: H.card, key: z.uuid }, /* @__PURE__ */ s.createElement("div", { className: H.cardHeader }, /* @__PURE__ */ s.createElement("div", { className: H.cardLead }, /* @__PURE__ */ s.createElement(ff, { className: H.cardIcon, size: 26 }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("h2", { className: H.cardTitle }, zd(D[z.uuid] ?? W)), /* @__PURE__ */ s.createElement("div", { className: H.meta }, "Заведен на ", zd(W), " • ", k.get(z.device_id) || z.device_id))), /* @__PURE__ */ s.createElement(se, { variant: "ghost", onClick: () => c(z) }, /* @__PURE__ */ s.createElement(mf, { size: 16 }))));
  }) : /* @__PURE__ */ s.createElement("div", { className: H.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ s.createElement(Mt, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ s.createElement(se, { onClick: M, disabled: !y }, "Создать") }, /* @__PURE__ */ s.createElement("div", { className: H.form }, /* @__PURE__ */ s.createElement("div", { className: H.wheelPicker, "aria-label": "Длительность таймера" }, ["hours", "minutes", "seconds"].map((z) => /* @__PURE__ */ s.createElement("label", { className: H.wheelColumn, key: z }, /* @__PURE__ */ s.createElement("span", { className: H.label }, z === "hours" ? "чч" : z === "minutes" ? "мм" : "сс"), /* @__PURE__ */ s.createElement("select", { className: H.wheelSelect, value: x[z], onChange: (W) => L((U) => ({ ...U, [z]: Number(W.target.value) })) }, Array.from({ length: z === "hours" ? 24 : 60 }, (W, U) => /* @__PURE__ */ s.createElement("option", { key: U, value: U }, String(U).padStart(2, "0"))))))), /* @__PURE__ */ s.createElement("div", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Быстрое создание"), /* @__PURE__ */ s.createElement("div", { className: H.quickTabs }, K_.map((z) => /* @__PURE__ */ s.createElement("button", { key: z, type: "button", className: `${H.quickTab} ${P === z * 60 ? H.activeQuickTab : ""}`, onClick: () => O(z) }, z, " мин")))), /* @__PURE__ */ s.createElement("label", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Устройство воспроизведения"), /* @__PURE__ */ s.createElement("select", { className: H.select, value: y, onChange: (z) => E(z.target.value) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Выберите устройство"), o.map((z) => /* @__PURE__ */ s.createElement("option", { key: z.id, value: z.id }, z.name)))), /* @__PURE__ */ s.createElement("label", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Стартовая громкость"), /* @__PURE__ */ s.createElement("input", { className: H.input, type: "range", min: "0", max: "1", step: "0.05", value: C, onChange: (z) => _(Number(z.target.value)) }), /* @__PURE__ */ s.createElement("span", { className: H.meta }, Math.round(C * 100), "%")))), /* @__PURE__ */ s.createElement(Zt, null)));
}, yf = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], Z_ = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Кастом" }
], Zi = (l = "once", o = []) => l === "daily" ? "ежедневно" : l === "weekdays" ? "по будням" : l === "weekends" ? "по выходным" : l === "custom" ? o.length ? o.map((i) => {
  var c;
  return ((c = yf.find((d) => d.key === i)) == null ? void 0 : c.label) || i;
}).join(", ") : "кастом" : "однократно", e0 = () => {
  const { alarmTimeWidgets: l, alarms: o, createAlarm: i, deleteAlarm: c, devices: d, loading: m, updateAlarm: p } = vf(), [h, y] = v.useState(!1), [E, C] = v.useState(!1), [_, x] = v.useState(null), [L, D] = v.useState(null), [$, k] = v.useState(""), [P, M] = v.useState("08:00"), [O, z] = v.useState(0.3), [W, U] = v.useState("once"), [ee, ne] = v.useState([]), ye = v.useMemo(() => Array.from(new Set(l.flatMap((Q) => Q.time || []))).filter(Boolean), [l]), ge = v.useMemo(() => new Map(d.map((Q) => [Q.id, Q.name])), [d]), K = o.find((Q) => Q.uuid === _) || null, ue = async () => {
    if (!$ || !P) return;
    const Q = o.find((q) => q.uuid === L);
    Q ? await p(Q, { device_id: $, time: P, volume_start: O, repeat_type: W, repeat_days: ee }) : await i($, P, O, W, ee), D(null), y(!1);
  }, Ce = (Q) => ne((q) => q.includes(Q) ? q.filter((Te) => Te !== Q) : [...q, Q]);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Xt, { title: "Будильник" }), /* @__PURE__ */ s.createElement("div", { className: H.page }, /* @__PURE__ */ s.createElement(Jt, null), /* @__PURE__ */ s.createElement("div", { className: H.header }, /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("h1", { className: H.title }, "Будильник"), /* @__PURE__ */ s.createElement("p", { className: H.description }, "Создавайте будильники, настраивайте повторы, устройство и громкость.")), /* @__PURE__ */ s.createElement(se, { onClick: () => y(!0) }, "Создать")), m && /* @__PURE__ */ s.createElement(Er, null), /* @__PURE__ */ s.createElement("div", { className: H.grid }, o.length ? o.map((Q) => /* @__PURE__ */ s.createElement("button", { className: `${H.card} ${H.cardButton}`, key: Q.uuid, type: "button", onClick: () => x(Q.uuid) }, /* @__PURE__ */ s.createElement("div", { className: H.cardHeader }, /* @__PURE__ */ s.createElement("div", { className: H.cardLead }, /* @__PURE__ */ s.createElement(ff, { className: H.cardIcon, size: 26 }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement("h2", { className: H.cardTitle }, Q.time), /* @__PURE__ */ s.createElement("div", { className: H.meta }, Zi(Q.repeat_type, Q.repeat_days), " • ", ge.get(Q.device_id) || Q.device_id))), /* @__PURE__ */ s.createElement(jt, { label: "", checked: Q.status !== "off", onClick: (q) => q.stopPropagation(), onChange: (q) => p(Q, { status: q.currentTarget.checked ? "on" : "off" }) })))) : /* @__PURE__ */ s.createElement("div", { className: H.empty }, "Нет будильников.")), /* @__PURE__ */ s.createElement(Mt, { open: h, onClose: () => {
    y(!1), D(null);
  }, title: L ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ s.createElement(se, { onClick: ue, disabled: !$ || !P }, "Сохранить") }, /* @__PURE__ */ s.createElement("div", { className: H.form }, /* @__PURE__ */ s.createElement("label", { className: H.wheelColumn }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Круговая чч мм"), /* @__PURE__ */ s.createElement("input", { className: `${H.input} ${H.timeInput}`, type: "time", value: P, onChange: (Q) => M(Q.target.value) })), /* @__PURE__ */ s.createElement("div", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Ранее заводимые"), /* @__PURE__ */ s.createElement("div", { className: H.quickTabs }, ye.length ? ye.map((Q) => /* @__PURE__ */ s.createElement("button", { key: Q, type: "button", className: `${H.quickTab} ${P === Q ? H.activeQuickTab : ""}`, onClick: () => M(Q) }, Q)) : /* @__PURE__ */ s.createElement("span", { className: H.meta }, "Нет быстрых значений."))), /* @__PURE__ */ s.createElement("label", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Повторы"), /* @__PURE__ */ s.createElement("button", { type: "button", className: H.selectButton, onClick: () => C(!0) }, Zi(W, ee))), /* @__PURE__ */ s.createElement("label", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Устройство воспроизведения"), /* @__PURE__ */ s.createElement("select", { className: H.select, value: $, onChange: (Q) => k(Q.target.value) }, /* @__PURE__ */ s.createElement("option", { value: "" }, "Выберите устройство"), d.map((Q) => /* @__PURE__ */ s.createElement("option", { key: Q.id, value: Q.id }, Q.name)))), /* @__PURE__ */ s.createElement("label", { className: H.field }, /* @__PURE__ */ s.createElement("span", { className: H.label }, "Стартовая громкость"), /* @__PURE__ */ s.createElement("input", { className: H.input, type: "range", min: "0", max: "1", step: "0.05", value: O, onChange: (Q) => z(Number(Q.target.value)) }), /* @__PURE__ */ s.createElement("span", { className: H.meta }, Math.round(O * 100), "%")))), /* @__PURE__ */ s.createElement(Mt, { open: E, onClose: () => C(!1), title: "Повторы", footer: /* @__PURE__ */ s.createElement(se, { onClick: () => C(!1) }, "Готово") }, /* @__PURE__ */ s.createElement("div", { className: H.form }, Z_.map((Q) => /* @__PURE__ */ s.createElement("button", { key: Q.value, type: "button", className: `${H.quickTab} ${W === Q.value ? H.activeQuickTab : ""}`, onClick: () => U(Q.value) }, Q.label)), W === "custom" && /* @__PURE__ */ s.createElement("div", { className: H.quickTabs }, yf.map((Q) => /* @__PURE__ */ s.createElement("button", { key: Q.key, type: "button", className: `${H.quickTab} ${ee.includes(Q.key) ? H.activeQuickTab : ""}`, onClick: () => Ce(Q.key) }, Q.label))))), /* @__PURE__ */ s.createElement(Mt, { open: !!K, onClose: () => x(null), title: "Будильник" }, K && /* @__PURE__ */ s.createElement("div", { className: H.form }, /* @__PURE__ */ s.createElement("div", { className: H.time }, K.time), /* @__PURE__ */ s.createElement("div", { className: H.meta }, Zi(K.repeat_type, K.repeat_days), " • ", ge.get(K.device_id) || K.device_id), /* @__PURE__ */ s.createElement(jt, { className: H.meta, label: K.status !== "off" ? "Включен" : "Выключен", checked: K.status !== "off", onChange: (Q) => p(K, { status: Q.currentTarget.checked ? "on" : "off" }) }), /* @__PURE__ */ s.createElement(se, { onClick: () => {
    M(K.time), k(K.device_id), z(K.volume_start ?? 0.3), U(K.repeat_type ?? "once"), ne(K.repeat_days ?? []), D(K.uuid), x(null), y(!0);
  } }, "Редактировать"), /* @__PURE__ */ s.createElement(se, { variant: "ghost", onClick: () => {
    c(K), x(null);
  } }, /* @__PURE__ */ s.createElement(mf, { size: 16 }), " Удалить"))), /* @__PURE__ */ s.createElement(Zt, null)));
}, t0 = () => /* @__PURE__ */ s.createElement(Eh, null, /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/",
    element: /* @__PURE__ */ s.createElement(
      Ta,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/scripts",
    element: /* @__PURE__ */ s.createElement(Eg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands",
    element: /* @__PURE__ */ s.createElement(
      Ta,
      {
        to: "/commands/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ s.createElement(Qg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ s.createElement(Yg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/direct",
    element: /* @__PURE__ */ s.createElement(
      Ta,
      {
        to: "/commands/direct/main",
        replace: !0
      }
    )
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ s.createElement(Gg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ s.createElement(Jg, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ s.createElement(n_, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/timer",
    element: /* @__PURE__ */ s.createElement(J_, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/alarm",
    element: /* @__PURE__ */ s.createElement(e0, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "/settings",
    element: /* @__PURE__ */ s.createElement(E_, null)
  }
), /* @__PURE__ */ s.createElement(
  ot,
  {
    path: "*",
    element: /* @__PURE__ */ s.createElement(
      Ta,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), gf = "dialog-custom-ui-theme", es = (l) => l === "light" ? "light" : "dark", n0 = (l) => {
  document.documentElement.dataset.theme = l, document.documentElement.style.colorScheme = l, localStorage.setItem(gf, l);
}, r0 = () => {
  const l = vr(), [o, i] = v.useState(() => es(localStorage.getItem(gf)));
  return v.useEffect(() => {
    n0(o);
  }, [o]), v.useEffect(() => {
    let c = !0;
    l._getShort("get_settings").then((m) => {
      var p;
      c && i(es((p = (m == null ? void 0 : m.result) ?? m) == null ? void 0 : p.theme));
    }).catch(console.error);
    const d = (m) => {
      i(es(m.detail));
    };
    return window.addEventListener("dialog-custom-ui-theme-change", d), () => {
      c = !1, window.removeEventListener("dialog-custom-ui-theme-change", d);
    };
  }, [l]), /* @__PURE__ */ s.createElement("div", { className: "appShell", "data-theme": o }, /* @__PURE__ */ s.createElement(t0, null));
};
class l0 {
  constructor(o) {
    this.hass = o;
  }
  setHass(o) {
    this.hass = o;
  }
  async _getShort(o, i, c) {
    const d = await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      ...i ? { page: i } : {},
      ...c ? { page_size: c } : {}
    });
    return console.log("WS <=", d), d;
  }
  async _getDetail(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: o
    });
  }
  async _save(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      data: o
    });
  }
  async _update(o, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: o,
      data: c
    });
  }
  async _update_status(o, i, c) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      uuid: i,
      status: c
    });
  }
  async searchAssistantCommands(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      query: o
    });
  }
  async _delete(o, i) {
    return this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${i}`,
      uuid: o
    });
  }
  getDevices() {
    return Object.values(this.hass.states).filter((o) => {
      const i = String(o.entity_id || "");
      return i.startsWith("media_player.") || i.startsWith("speaker.");
    }).map((o) => {
      var i;
      return {
        id: o.entity_id,
        name: ((i = o.attributes) == null ? void 0 : i.friendly_name) ?? o.entity_id
      };
    });
  }
  async getLocalMusicOptions() {
    const o = /\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i, i = [
      "media-source://media_source/local",
      "media-source://media_source"
    ], c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = async (p) => {
      if (c.has(p)) return;
      c.add(p);
      const h = await this.hass.connection.sendMessagePromise({
        type: "media_source/browse_media",
        media_content_id: p
      }), y = Array.isArray(h == null ? void 0 : h.children) ? h.children : [];
      await Promise.all(y.map(async (E) => {
        const C = String((E == null ? void 0 : E.media_content_id) || ""), _ = String((E == null ? void 0 : E.title) || C);
        if (C) {
          if (E != null && E.can_expand) {
            await m(C);
            return;
          }
          if (o.test(_) || o.test(C) || (E == null ? void 0 : E.media_content_type) === "music") {
            const x = "media-source://media_source/local/", L = C.startsWith(x) ? C.slice(x.length) : C;
            d.set(L, {
              value: L,
              label: _
            });
          }
        }
      }));
    };
    for (const p of i)
      try {
        await m(p);
      } catch (h) {
        console.warn("Failed to browse media source", p, h);
      }
    return Array.from(d.values()).sort(
      (p, h) => p.label.localeCompare(h.label)
    );
  }
  getScripts() {
    return Object.values(this.hass.states).filter((o) => o.entity_id.startsWith("script.")).map((o) => {
      var i;
      return {
        entity_id: o.entity_id,
        name: ((i = o.attributes) == null ? void 0 : i.friendly_name) ?? o.entity_id
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
const a0 = 1, Ua = 2, ts = 3, o0 = 4, i0 = 5;
function s0(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function u0() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function c0(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function Od(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function d0() {
  return {
    type: "ping"
  };
}
function f0(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const m0 = (l, o, i, c) => {
  const [d, m, p] = l.split(".", 3);
  return Number(d) > o || Number(d) === o && Number(m) >= i || c !== void 0;
}, p0 = "auth_invalid", h0 = "auth_ok";
function v0(l) {
  if (!l.auth)
    throw o0;
  const o = l.auth;
  let i = o.expired ? o.refreshAccessToken().then(() => {
    i = void 0;
  }, () => {
    i = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function d(m, p, h) {
    const y = new WebSocket(c);
    let E = !1;
    const C = () => {
      if (y.removeEventListener("close", C), E) {
        h(Ua);
        return;
      }
      if (m === 0) {
        h(a0);
        return;
      }
      const L = m === -1 ? -1 : m - 1;
      setTimeout(() => d(L, p, h), 1e3);
    }, _ = async (L) => {
      try {
        o.expired && await (i || o.refreshAccessToken()), y.send(JSON.stringify(s0(o.accessToken)));
      } catch (D) {
        E = D === Ua, y.close();
      }
    }, x = async (L) => {
      const D = JSON.parse(L.data);
      switch (D.type) {
        case p0:
          E = !0, y.close();
          break;
        case h0:
          y.removeEventListener("open", _), y.removeEventListener("message", x), y.removeEventListener("close", C), y.removeEventListener("error", C), y.haVersion = D.ha_version, m0(y.haVersion, 2022, 9) && y.send(JSON.stringify(u0())), p(y);
          break;
      }
    };
    y.addEventListener("open", _), y.addEventListener("message", x), y.addEventListener("close", C), y.addEventListener("error", C);
  }
  return new Promise((m, p) => d(l.setupRetry, m, p));
}
class y0 {
  constructor(o, i) {
    this._handleMessage = (c) => {
      let d = JSON.parse(c.data);
      Array.isArray(d) || (d = [d]), d.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise(Od(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(f0(ts, "Connection lost"));
      }), this.closeRequested)
        return;
      this.fireEvent("disconnected");
      const d = Object.assign(Object.assign({}, this.options), { setupRetry: 0 }), m = (p) => {
        setTimeout(async () => {
          if (!this.closeRequested)
            try {
              const h = await d.createSocket(d);
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
    }, this.options = i, this.commandId = 2, this.commands = /* @__PURE__ */ new Map(), this.eventListeners = /* @__PURE__ */ new Map(), this.closeRequested = !1, this._setSocket(o);
  }
  get connected() {
    return this.socket !== void 0 && this.socket.readyState == this.socket.OPEN;
  }
  _setSocket(o) {
    this.socket = o, this.haVersion = o.haVersion, o.addEventListener("message", this._handleMessage), o.addEventListener("close", this._handleClose);
    const i = this.oldSubscriptions;
    i && (this.oldSubscriptions = void 0, i.forEach((d) => {
      "subscribe" in d && d.subscribe && d.subscribe().then((m) => {
        d.unsubscribe = m, d.resolve();
      });
    }));
    const c = this._queuedMessages;
    if (c) {
      this._queuedMessages = void 0;
      for (const d of c)
        d.resolve();
    }
    this.fireEvent("ready");
  }
  addEventListener(o, i) {
    let c = this.eventListeners.get(o);
    c || (c = [], this.eventListeners.set(o, c)), c.push(i);
  }
  removeEventListener(o, i) {
    const c = this.eventListeners.get(o);
    if (!c)
      return;
    const d = c.indexOf(i);
    d !== -1 && c.splice(d, 1);
  }
  fireEvent(o, i) {
    (this.eventListeners.get(o) || []).forEach((c) => c(this, i));
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
  async subscribeEvents(o, i) {
    return this.subscribeMessage(o, c0(i));
  }
  ping() {
    return this.sendMessagePromise(d0());
  }
  sendMessage(o, i) {
    if (!this.connected)
      throw ts;
    if (this._queuedMessages) {
      if (i)
        throw new Error("Cannot queue with commandId");
      this._queuedMessages.push({ resolve: () => this.sendMessage(o) });
      return;
    }
    i || (i = this._genCmdId()), o.id = i, this.socket.send(JSON.stringify(o));
  }
  sendMessagePromise(o) {
    return new Promise((i, c) => {
      if (this._queuedMessages) {
        this._queuedMessages.push({
          reject: c,
          resolve: async () => {
            try {
              i(await this.sendMessagePromise(o));
            } catch (m) {
              c(m);
            }
          }
        });
        return;
      }
      const d = this._genCmdId();
      this.commands.set(d, { resolve: i, reject: c }), this.sendMessage(o, d);
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
  async subscribeMessage(o, i, c) {
    if (this._queuedMessages && await new Promise((m, p) => {
      this._queuedMessages.push({ resolve: m, reject: p });
    }), c != null && c.preCheck && !await c.preCheck())
      throw new Error("Pre-check failed");
    let d;
    return await new Promise((m, p) => {
      const h = this._genCmdId();
      d = {
        resolve: m,
        reject: p,
        callback: o,
        subscribe: (c == null ? void 0 : c.resubscribe) !== !1 ? () => this.subscribeMessage(o, i, c) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise(Od(h)), this.commands.delete(h);
        }
      }, this.commands.set(h, d);
      try {
        this.sendMessage(i, h);
      } catch {
      }
    }), () => d.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const g0 = (l) => l * 1e3 + Date.now();
async function _0(l, o, i) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw i0;
  }
  const d = new FormData();
  o !== null && d.append("client_id", o), Object.keys(i).forEach((h) => {
    d.append(h, i[h]);
  });
  const m = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: d
  });
  if (!m.ok)
    throw m.status === 400 || m.status === 403 ? Ua : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = g0(p.expires_in), p;
}
class E0 {
  constructor(o, i) {
    this.data = o, this._saveTokens = i;
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
    const o = await _0(this.data.hassUrl, this.data.clientId, {
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
function w0(l, o) {
  return new E0({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function k0(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: v0 }, l), i = await o.createSocket(o);
  return new y0(i, o);
}
function S0(l) {
  var o;
  return (o = l == null ? void 0 : l.connection) != null && o.sendMessagePromise ? l : typeof (l == null ? void 0 : l.callWS) == "function" ? {
    connection: {
      sendMessagePromise: (i) => l.callWS(i)
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
async function C0() {
  const i = w0(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await k0({
    auth: i
  }), d = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: d
  };
}
function x0({
  children: l,
  hass: o
}) {
  const i = v.useRef(null), [c, d] = v.useState(!1);
  return v.useEffect(() => {
    async function m() {
      const p = o ? S0(o) : await C0();
      i.current ? i.current.setHass(p) : i.current = new l0(p), d(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !i.current ? /* @__PURE__ */ s.createElement(Er, { label: "Подключение к Home Assistant...", fullscreen: !0 }) : /* @__PURE__ */ s.createElement(of.Provider, { value: i.current }, l);
}
function N0({ hass: l }) {
  return /* @__PURE__ */ s.createElement(Hh, null, /* @__PURE__ */ s.createElement(x0, { hass: l }, /* @__PURE__ */ s.createElement(r0, null)));
}
const Ad = "dialog-custom-ui-panel", Fd = "dialog-custom-ui-style";
class T0 extends HTMLElement {
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
    const i = `/dialog_custom_ui_static/dialog-custom-ui-panel.css?v=${Date.now()}`, c = this.ensureShadowRoot();
    if (c.getElementById(Fd))
      return;
    try {
      const m = await fetch(i, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = Fd, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
      return;
    } catch (m) {
      console.warn(
        "[dialog_custom_ui] Failed to inject panel styles into shadow root, falling back to link element.",
        m
      );
    }
    let d = c.querySelector(
      'link[data-dialog-ui="true"]'
    );
    if (!d) {
      d = document.createElement("link"), d.rel = "stylesheet", d.href = i, d.setAttribute("data-dialog-ui", "true"), c.appendChild(d);
      return;
    }
    d.href = i;
  }
  render() {
    if (!this.isConnected) return;
    const o = this.ensureShadowRoot();
    this.root || (this.root = kp.createRoot(o)), this.root.render(
      /* @__PURE__ */ s.createElement(s.StrictMode, null, /* @__PURE__ */ s.createElement(N0, { hass: this.hassValue }))
    );
  }
}
customElements.get(Ad) || customElements.define(Ad, T0);
