function Od(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Ai = { exports: {} }, de = {};
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
function dp() {
  if (ad) return de;
  ad = 1;
  var l = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function C(x) {
    return x === null || typeof x != "object" ? null : (x = _ && x[_] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, D = Object.assign, $ = {};
  function w(x, F, ce) {
    this.props = x, this.context = F, this.refs = $, this.updater = ce || L;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(x, F) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, F, "setState");
  }, w.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function P() {
  }
  P.prototype = w.prototype;
  function M(x, F, ce) {
    this.props = x, this.context = F, this.refs = $, this.updater = ce || L;
  }
  var O = M.prototype = new P();
  O.constructor = M, D(O, w.prototype), O.isPureReactComponent = !0;
  var z = Array.isArray, W = Object.prototype.hasOwnProperty, j = { current: null }, ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(x, F, ce) {
    var fe, pe = {}, he = null, ke = null;
    if (F != null) for (fe in F.ref !== void 0 && (ke = F.ref), F.key !== void 0 && (he = "" + F.key), F) W.call(F, fe) && !ee.hasOwnProperty(fe) && (pe[fe] = F[fe]);
    var Ee = arguments.length - 2;
    if (Ee === 1) pe.children = ce;
    else if (1 < Ee) {
      for (var Pe = Array(Ee), ot = 0; ot < Ee; ot++) Pe[ot] = arguments[ot + 2];
      pe.children = Pe;
    }
    if (x && x.defaultProps) for (fe in Ee = x.defaultProps, Ee) pe[fe] === void 0 && (pe[fe] = Ee[fe]);
    return { $$typeof: l, type: x, key: he, ref: ke, props: pe, _owner: j.current };
  }
  function ye(x, F) {
    return { $$typeof: l, type: x.type, key: F, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function ge(x) {
    return typeof x == "object" && x !== null && x.$$typeof === l;
  }
  function K(x) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ce) {
      return F[ce];
    });
  }
  var ue = /\/+/g;
  function xe(x, F) {
    return typeof x == "object" && x !== null && x.key != null ? K("" + x.key) : F.toString(36);
  }
  function Q(x, F, ce, fe, pe) {
    var he = typeof x;
    (he === "undefined" || he === "boolean") && (x = null);
    var ke = !1;
    if (x === null) ke = !0;
    else switch (he) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case l:
          case o:
            ke = !0;
        }
    }
    if (ke) return ke = x, pe = pe(ke), x = fe === "" ? "." + xe(ke, 0) : fe, z(pe) ? (ce = "", x != null && (ce = x.replace(ue, "$&/") + "/"), Q(pe, F, ce, "", function(ot) {
      return ot;
    })) : pe != null && (ge(pe) && (pe = ye(pe, ce + (!pe.key || ke && ke.key === pe.key ? "" : ("" + pe.key).replace(ue, "$&/") + "/") + x)), F.push(pe)), 1;
    if (ke = 0, fe = fe === "" ? "." : fe + ":", z(x)) for (var Ee = 0; Ee < x.length; Ee++) {
      he = x[Ee];
      var Pe = fe + xe(he, Ee);
      ke += Q(he, F, ce, Pe, pe);
    }
    else if (Pe = C(x), typeof Pe == "function") for (x = Pe.call(x), Ee = 0; !(he = x.next()).done; ) he = he.value, Pe = fe + xe(he, Ee++), ke += Q(he, F, ce, Pe, pe);
    else if (he === "object") throw F = String(x), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function q(x, F, ce) {
    if (x == null) return x;
    var fe = [], pe = 0;
    return Q(x, fe, "", "", function(he) {
      return F.call(ce, he, pe++);
    }), fe;
  }
  function Re(x) {
    if (x._status === -1) {
      var F = x._result;
      F = F(), F.then(function(ce) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ce);
      }, function(ce) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ce);
      }), x._status === -1 && (x._status = 0, x._result = F);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var De = { current: null }, V = { transition: null }, oe = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: V, ReactCurrentOwner: j };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return de.Children = { map: q, forEach: function(x, F, ce) {
    q(x, function() {
      F.apply(this, arguments);
    }, ce);
  }, count: function(x) {
    var F = 0;
    return q(x, function() {
      F++;
    }), F;
  }, toArray: function(x) {
    return q(x, function(F) {
      return F;
    }) || [];
  }, only: function(x) {
    if (!ge(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, de.Component = w, de.Fragment = i, de.Profiler = f, de.PureComponent = M, de.StrictMode = c, de.Suspense = y, de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe, de.act = X, de.cloneElement = function(x, F, ce) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var fe = D({}, x.props), pe = x.key, he = x.ref, ke = x._owner;
    if (F != null) {
      if (F.ref !== void 0 && (he = F.ref, ke = j.current), F.key !== void 0 && (pe = "" + F.key), x.type && x.type.defaultProps) var Ee = x.type.defaultProps;
      for (Pe in F) W.call(F, Pe) && !ee.hasOwnProperty(Pe) && (fe[Pe] = F[Pe] === void 0 && Ee !== void 0 ? Ee[Pe] : F[Pe]);
    }
    var Pe = arguments.length - 2;
    if (Pe === 1) fe.children = ce;
    else if (1 < Pe) {
      Ee = Array(Pe);
      for (var ot = 0; ot < Pe; ot++) Ee[ot] = arguments[ot + 2];
      fe.children = Ee;
    }
    return { $$typeof: l, type: x.type, key: pe, ref: he, props: fe, _owner: ke };
  }, de.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: m, _context: x }, x.Consumer = x;
  }, de.createElement = ne, de.createFactory = function(x) {
    var F = ne.bind(null, x);
    return F.type = x, F;
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(x) {
    return { $$typeof: h, render: x };
  }, de.isValidElement = ge, de.lazy = function(x) {
    return { $$typeof: N, _payload: { _status: -1, _result: x }, _init: Re };
  }, de.memo = function(x, F) {
    return { $$typeof: S, type: x, compare: F === void 0 ? null : F };
  }, de.startTransition = function(x) {
    var F = V.transition;
    V.transition = {};
    try {
      x();
    } finally {
      V.transition = F;
    }
  }, de.unstable_act = X, de.useCallback = function(x, F) {
    return De.current.useCallback(x, F);
  }, de.useContext = function(x) {
    return De.current.useContext(x);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(x) {
    return De.current.useDeferredValue(x);
  }, de.useEffect = function(x, F) {
    return De.current.useEffect(x, F);
  }, de.useId = function() {
    return De.current.useId();
  }, de.useImperativeHandle = function(x, F, ce) {
    return De.current.useImperativeHandle(x, F, ce);
  }, de.useInsertionEffect = function(x, F) {
    return De.current.useInsertionEffect(x, F);
  }, de.useLayoutEffect = function(x, F) {
    return De.current.useLayoutEffect(x, F);
  }, de.useMemo = function(x, F) {
    return De.current.useMemo(x, F);
  }, de.useReducer = function(x, F, ce) {
    return De.current.useReducer(x, F, ce);
  }, de.useRef = function(x) {
    return De.current.useRef(x);
  }, de.useState = function(x) {
    return De.current.useState(x);
  }, de.useSyncExternalStore = function(x, F, ce) {
    return De.current.useSyncExternalStore(x, F, ce);
  }, de.useTransition = function() {
    return De.current.useTransition();
  }, de.version = "18.3.1", de;
}
var od;
function Ad() {
  return od || (od = 1, Ai.exports = dp()), Ai.exports;
}
var v = Ad();
const u = /* @__PURE__ */ Od(v);
var xa = {}, Fi = { exports: {} }, lt = {}, bi = { exports: {} }, ji = {};
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
function fp() {
  return id || (id = 1, (function(l) {
    function o(V, oe) {
      var X = V.length;
      V.push(oe);
      e: for (; 0 < X; ) {
        var x = X - 1 >>> 1, F = V[x];
        if (0 < f(F, oe)) V[x] = oe, V[X] = F, X = x;
        else break e;
      }
    }
    function i(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var oe = V[0], X = V.pop();
      if (X !== oe) {
        V[0] = X;
        e: for (var x = 0, F = V.length, ce = F >>> 1; x < ce; ) {
          var fe = 2 * (x + 1) - 1, pe = V[fe], he = fe + 1, ke = V[he];
          if (0 > f(pe, X)) he < F && 0 > f(ke, pe) ? (V[x] = ke, V[he] = X, x = he) : (V[x] = pe, V[fe] = X, x = fe);
          else if (he < F && 0 > f(ke, X)) V[x] = ke, V[he] = X, x = he;
          else break e;
        }
      }
      return oe;
    }
    function f(V, oe) {
      var X = V.sortIndex - oe.sortIndex;
      return X !== 0 ? X : V.id - oe.id;
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
    var y = [], S = [], N = 1, _ = null, C = 3, L = !1, D = !1, $ = !1, w = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function O(V) {
      for (var oe = i(S); oe !== null; ) {
        if (oe.callback === null) c(S);
        else if (oe.startTime <= V) c(S), oe.sortIndex = oe.expirationTime, o(y, oe);
        else break;
        oe = i(S);
      }
    }
    function z(V) {
      if ($ = !1, O(V), !D) if (i(y) !== null) D = !0, Re(W);
      else {
        var oe = i(S);
        oe !== null && De(z, oe.startTime - V);
      }
    }
    function W(V, oe) {
      D = !1, $ && ($ = !1, P(ne), ne = -1), L = !0;
      var X = C;
      try {
        for (O(oe), _ = i(y); _ !== null && (!(_.expirationTime > oe) || V && !K()); ) {
          var x = _.callback;
          if (typeof x == "function") {
            _.callback = null, C = _.priorityLevel;
            var F = x(_.expirationTime <= oe);
            oe = l.unstable_now(), typeof F == "function" ? _.callback = F : _ === i(y) && c(y), O(oe);
          } else c(y);
          _ = i(y);
        }
        if (_ !== null) var ce = !0;
        else {
          var fe = i(S);
          fe !== null && De(z, fe.startTime - oe), ce = !1;
        }
        return ce;
      } finally {
        _ = null, C = X, L = !1;
      }
    }
    var j = !1, ee = null, ne = -1, ye = 5, ge = -1;
    function K() {
      return !(l.unstable_now() - ge < ye);
    }
    function ue() {
      if (ee !== null) {
        var V = l.unstable_now();
        ge = V;
        var oe = !0;
        try {
          oe = ee(!0, V);
        } finally {
          oe ? xe() : (j = !1, ee = null);
        }
      } else j = !1;
    }
    var xe;
    if (typeof M == "function") xe = function() {
      M(ue);
    };
    else if (typeof MessageChannel < "u") {
      var Q = new MessageChannel(), q = Q.port2;
      Q.port1.onmessage = ue, xe = function() {
        q.postMessage(null);
      };
    } else xe = function() {
      w(ue, 0);
    };
    function Re(V) {
      ee = V, j || (j = !0, xe());
    }
    function De(V, oe) {
      ne = w(function() {
        V(l.unstable_now());
      }, oe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, l.unstable_continueExecution = function() {
      D || L || (D = !0, Re(W));
    }, l.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < V ? Math.floor(1e3 / V) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_getFirstCallbackNode = function() {
      return i(y);
    }, l.unstable_next = function(V) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var oe = 3;
          break;
        default:
          oe = C;
      }
      var X = C;
      C = oe;
      try {
        return V();
      } finally {
        C = X;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(V, oe) {
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
      var X = C;
      C = V;
      try {
        return oe();
      } finally {
        C = X;
      }
    }, l.unstable_scheduleCallback = function(V, oe, X) {
      var x = l.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? x + X : x) : X = x, V) {
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
      return F = X + F, V = { id: N++, callback: oe, priorityLevel: V, startTime: X, expirationTime: F, sortIndex: -1 }, X > x ? (V.sortIndex = X, o(S, V), i(y) === null && V === i(S) && ($ ? (P(ne), ne = -1) : $ = !0, De(z, X - x))) : (V.sortIndex = F, o(y, V), D || L || (D = !0, Re(W))), V;
    }, l.unstable_shouldYield = K, l.unstable_wrapCallback = function(V) {
      var oe = C;
      return function() {
        var X = C;
        C = oe;
        try {
          return V.apply(this, arguments);
        } finally {
          C = X;
        }
      };
    };
  })(ji)), ji;
}
var sd;
function mp() {
  return sd || (sd = 1, bi.exports = fp()), bi.exports;
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
function pp() {
  if (ud) return lt;
  ud = 1;
  var l = Ad(), o = mp();
  function i(e) {
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
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), y = Object.prototype.hasOwnProperty, S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, _ = {};
  function C(e) {
    return y.call(_, e) ? !0 : y.call(N, e) ? !1 : S.test(e) ? _[e] = !0 : (N[e] = !0, !1);
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
  function $(e, t, n, r, a, s, d) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    w[e] = new $(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    w[t] = new $(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    w[e] = new $(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    w[e] = new $(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    w[e] = new $(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    w[e] = new $(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    w[e] = new $(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    w[e] = new $(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    w[e] = new $(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
    w[t] = new $(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, M);
    w[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, M);
    w[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    w[e] = new $(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    w[e] = new $(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function O(e, t, n, r) {
    var a = w.hasOwnProperty(t) ? w[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D(t, n, a, r) && (n = null), r || a === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var z = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), j = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), K = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), xe = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), Re = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = Object.assign, x;
  function F(e) {
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
`), s = r.stack.split(`
`), d = a.length - 1, g = s.length - 1; 1 <= d && 0 <= g && a[d] !== s[g]; ) g--;
        for (; 1 <= d && 0 <= g; d--, g--) if (a[d] !== s[g]) {
          if (d !== 1 || g !== 1)
            do
              if (d--, g--, 0 > g || a[d] !== s[g]) {
                var E = `
` + a[d].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= d && 0 <= g);
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
      case j:
        return "Portal";
      case ye:
        return "Profiler";
      case ne:
        return "StrictMode";
      case xe:
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
      case Re:
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
  function Pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ot(e) {
    var t = Pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, s = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return a.call(this);
      }, set: function(d) {
        r = "" + d, s.call(this, d);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(d) {
        r = "" + d;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function hl(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function ds(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Pe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function vl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wa(e, t) {
    var n = t.checked;
    return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function fs(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ms(e, t) {
    t = t.checked, t != null && O(e, "checked", t, !1);
  }
  function Ha(e, t) {
    ms(e, t);
    var n = Ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Va(e, t.type, n) : t.hasOwnProperty("defaultValue") && Va(e, t.type, Ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ps(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Va(e, t, n) {
    (t !== "number" || vl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Er = Array.isArray;
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
  function Qa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function hs(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(i(92));
        if (Er(n)) {
          if (1 < n.length) throw Error(i(93));
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
  function qa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var yl, _s = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, a);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (yl = yl || document.createElement("div"), yl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function wr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kr = {
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
  }, hf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(kr).forEach(function(e) {
    hf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), kr[t] = kr[e];
    });
  });
  function Es(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px";
  }
  function ws(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, a = Es(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
    }
  }
  var vf = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ya(e, t) {
    if (t) {
      if (vf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
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
    if (e = Hr(e)) {
      if (typeof Ja != "function") throw Error(i(280));
      var t = e.stateNode;
      t && (t = jl(t), Ja(e.stateNode, e.type, t));
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
  function xs(e, t) {
    return e(t);
  }
  function Ns() {
  }
  var Za = !1;
  function Ts(e, t, n) {
    if (Za) return e(t, n);
    Za = !0;
    try {
      return xs(e, t, n);
    } finally {
      Za = !1, (Un !== null || Bn !== null) && (Ns(), Cs());
    }
  }
  function Sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = jl(n);
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
  var eo = !1;
  if (h) try {
    var Cr = {};
    Object.defineProperty(Cr, "passive", { get: function() {
      eo = !0;
    } }), window.addEventListener("test", Cr, Cr), window.removeEventListener("test", Cr, Cr);
  } catch {
    eo = !1;
  }
  function yf(e, t, n, r, a, s, d, g, E) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, I);
    } catch (b) {
      this.onError(b);
    }
  }
  var xr = !1, gl = null, _l = !1, to = null, gf = { onError: function(e) {
    xr = !0, gl = e;
  } };
  function _f(e, t, n, r, a, s, d, g, E) {
    xr = !1, gl = null, yf.apply(gf, arguments);
  }
  function Ef(e, t, n, r, a, s, d, g, E) {
    if (_f.apply(this, arguments), xr) {
      if (xr) {
        var I = gl;
        xr = !1, gl = null;
      } else throw Error(i(198));
      _l || (_l = !0, to = I);
    }
  }
  function kn(e) {
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
    if (kn(e) !== e) throw Error(i(188));
  }
  function wf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = kn(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var s = a.alternate;
      if (s === null) {
        if (r = a.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (a.child === s.child) {
        for (s = a.child; s; ) {
          if (s === n) return Ps(a), e;
          if (s === r) return Ps(a), t;
          s = s.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== r.return) n = a, r = s;
      else {
        for (var d = !1, g = a.child; g; ) {
          if (g === n) {
            d = !0, n = a, r = s;
            break;
          }
          if (g === r) {
            d = !0, r = a, n = s;
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = s.child; g; ) {
            if (g === n) {
              d = !0, n = s, r = a;
              break;
            }
            if (g === r) {
              d = !0, r = s, n = a;
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(i(189));
        }
      }
      if (n.alternate !== r) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ms(e) {
    return e = wf(e), e !== null ? Ls(e) : null;
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
  var Is = o.unstable_scheduleCallback, $s = o.unstable_cancelCallback, kf = o.unstable_shouldYield, Sf = o.unstable_requestPaint, Oe = o.unstable_now, Cf = o.unstable_getCurrentPriorityLevel, no = o.unstable_ImmediatePriority, Ds = o.unstable_UserBlockingPriority, El = o.unstable_NormalPriority, xf = o.unstable_LowPriority, zs = o.unstable_IdlePriority, wl = null, Lt = null;
  function Nf(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
      Lt.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var kt = Math.clz32 ? Math.clz32 : Pf, Tf = Math.log, Rf = Math.LN2;
  function Pf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Tf(e) / Rf | 0) | 0;
  }
  var kl = 64, Sl = 4194304;
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
  function Cl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, a = e.suspendedLanes, s = e.pingedLanes, d = n & 268435455;
    if (d !== 0) {
      var g = d & ~a;
      g !== 0 ? r = Nr(g) : (s &= d, s !== 0 && (r = Nr(s)));
    } else d = n & ~a, d !== 0 ? r = Nr(d) : s !== 0 && (r = Nr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & a) === 0 && (a = r & -r, s = t & -t, a >= s || a === 16 && (s & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - kt(t), a = 1 << n, r |= e[n], t &= ~a;
    return r;
  }
  function Mf(e, t) {
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
  function Lf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var d = 31 - kt(s), g = 1 << d, E = a[d];
      E === -1 ? ((g & n) === 0 || (g & r) !== 0) && (a[d] = Mf(g, t)) : E <= t && (e.expiredLanes |= g), s &= ~g;
    }
  }
  function ro(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Os() {
    var e = kl;
    return kl <<= 1, (kl & 4194240) === 0 && (kl = 64), e;
  }
  function lo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Tr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kt(t), e[t] = n;
  }
  function If(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var a = 31 - kt(n), s = 1 << a;
      t[a] = 0, r[a] = -1, e[a] = -1, n &= ~s;
    }
  }
  function ao(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - kt(n), a = 1 << r;
      a & t | e[r] & t && (e[r] |= t), n &= ~a;
    }
  }
  var we = 0;
  function As(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Fs, oo, bs, js, Us, io = !1, xl = [], Jt = null, Zt = null, en = null, Rr = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), tn = [], $f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pr.delete(t.pointerId);
    }
  }
  function Mr(e, t, n, r, a, s) {
    return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [a] }, t !== null && (t = Hr(t), t !== null && oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Df(e, t, n, r, a) {
    switch (t) {
      case "focusin":
        return Jt = Mr(Jt, e, t, n, r, a), !0;
      case "dragenter":
        return Zt = Mr(Zt, e, t, n, r, a), !0;
      case "mouseover":
        return en = Mr(en, e, t, n, r, a), !0;
      case "pointerover":
        var s = a.pointerId;
        return Rr.set(s, Mr(Rr.get(s) || null, e, t, n, r, a)), !0;
      case "gotpointercapture":
        return s = a.pointerId, Pr.set(s, Mr(Pr.get(s) || null, e, t, n, r, a)), !0;
    }
    return !1;
  }
  function Ws(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var n = kn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Rs(n), t !== null) {
            e.blockedOn = t, Us(e.priority, function() {
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
  function Nl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ga = r, n.target.dispatchEvent(r), Ga = null;
      } else return t = Hr(n), t !== null && oo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Hs(e, t, n) {
    Nl(e) && n.delete(t);
  }
  function zf() {
    io = !1, Jt !== null && Nl(Jt) && (Jt = null), Zt !== null && Nl(Zt) && (Zt = null), en !== null && Nl(en) && (en = null), Rr.forEach(Hs), Pr.forEach(Hs);
  }
  function Lr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, io || (io = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, zf)));
  }
  function Ir(e) {
    function t(a) {
      return Lr(a, e);
    }
    if (0 < xl.length) {
      Lr(xl[0], e);
      for (var n = 1; n < xl.length; n++) {
        var r = xl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Jt !== null && Lr(Jt, e), Zt !== null && Lr(Zt, e), en !== null && Lr(en, e), Rr.forEach(t), Pr.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) Ws(n), n.blockedOn === null && tn.shift();
  }
  var Wn = z.ReactCurrentBatchConfig, Tl = !0;
  function Of(e, t, n, r) {
    var a = we, s = Wn.transition;
    Wn.transition = null;
    try {
      we = 1, so(e, t, n, r);
    } finally {
      we = a, Wn.transition = s;
    }
  }
  function Af(e, t, n, r) {
    var a = we, s = Wn.transition;
    Wn.transition = null;
    try {
      we = 4, so(e, t, n, r);
    } finally {
      we = a, Wn.transition = s;
    }
  }
  function so(e, t, n, r) {
    if (Tl) {
      var a = uo(e, t, n, r);
      if (a === null) To(e, t, r, Rl, n), Bs(e, r);
      else if (Df(a, e, t, n, r)) r.stopPropagation();
      else if (Bs(e, r), t & 4 && -1 < $f.indexOf(e)) {
        for (; a !== null; ) {
          var s = Hr(a);
          if (s !== null && Fs(s), s = uo(e, t, n, r), s === null && To(e, t, r, Rl, n), s === a) break;
          a = s;
        }
        a !== null && r.stopPropagation();
      } else To(e, t, r, null, n);
    }
  }
  var Rl = null;
  function uo(e, t, n, r) {
    if (Rl = null, e = Xa(r), e = Sn(e), e !== null) if (t = kn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Rs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Rl = e, null;
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
        switch (Cf()) {
          case no:
            return 1;
          case Ds:
            return 4;
          case El:
          case xf:
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
  var nn = null, co = null, Pl = null;
  function Qs() {
    if (Pl) return Pl;
    var e, t = co, n = t.length, r, a = "value" in nn ? nn.value : nn.textContent, s = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === a[s - r]; r++) ;
    return Pl = a.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ml(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ll() {
    return !0;
  }
  function qs() {
    return !1;
  }
  function it(e) {
    function t(n, r, a, s, d) {
      this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = s, this.target = d, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ll : qs, this.isPropagationStopped = qs, this;
    }
    return X(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ll);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ll);
    }, persist: function() {
    }, isPersistent: Ll }), t;
  }
  var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fo = it(Hn), $r = X({}, Hn, { view: 0, detail: 0 }), Ff = it($r), mo, po, Dr, Il = X({}, $r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (mo = e.screenX - Dr.screenX, po = e.screenY - Dr.screenY) : po = mo = 0, Dr = e), mo);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : po;
  } }), Ys = it(Il), bf = X({}, Il, { dataTransfer: 0 }), jf = it(bf), Uf = X({}, $r, { relatedTarget: 0 }), ho = it(Uf), Bf = X({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = it(Bf), Hf = X({}, Hn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Vf = it(Hf), Qf = X({}, Hn, { data: 0 }), Ks = it(Qf), qf = {
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
  }, Yf = {
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
  }, Kf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kf[e]) ? !!t[e] : !1;
  }
  function vo() {
    return Gf;
  }
  var Xf = X({}, $r, { key: function(e) {
    if (e.key) {
      var t = qf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vo, charCode: function(e) {
    return e.type === "keypress" ? Ml(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Jf = it(Xf), Zf = X({}, Il, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gs = it(Zf), em = X({}, $r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vo }), tm = it(em), nm = X({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rm = it(nm), lm = X({}, Il, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), am = it(lm), om = [9, 13, 27, 32], yo = h && "CompositionEvent" in window, zr = null;
  h && "documentMode" in document && (zr = document.documentMode);
  var im = h && "TextEvent" in window && !zr, Xs = h && (!yo || zr && 8 < zr && 11 >= zr), Js = " ", Zs = !1;
  function eu(e, t) {
    switch (e) {
      case "keyup":
        return om.indexOf(t.keyCode) !== -1;
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
  function sm(e, t) {
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
  function um(e, t) {
    if (Vn) return e === "compositionend" || !yo && eu(e, t) ? (e = Qs(), Pl = co = nn = null, Vn = !1, e) : null;
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
  var cm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cm[e.type] : t === "textarea";
  }
  function ru(e, t, n, r) {
    Ss(r), t = Al(t, "onChange"), 0 < t.length && (n = new fo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Or = null, Ar = null;
  function dm(e) {
    wu(e, 0);
  }
  function $l(e) {
    var t = Gn(e);
    if (ds(t)) return e;
  }
  function fm(e, t) {
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
    Or && (Or.detachEvent("onpropertychange", iu), Ar = Or = null);
  }
  function iu(e) {
    if (e.propertyName === "value" && $l(Ar)) {
      var t = [];
      ru(t, Ar, e, Xa(e)), Ts(dm, t);
    }
  }
  function mm(e, t, n) {
    e === "focusin" ? (ou(), Or = t, Ar = n, Or.attachEvent("onpropertychange", iu)) : e === "focusout" && ou();
  }
  function pm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return $l(Ar);
  }
  function hm(e, t) {
    if (e === "click") return $l(t);
  }
  function vm(e, t) {
    if (e === "input" || e === "change") return $l(t);
  }
  function ym(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : ym;
  function Fr(e, t) {
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
    for (var e = window, t = vl(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = vl(e.document);
    }
    return t;
  }
  function Eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function gm(e) {
    var t = du(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && cu(n.ownerDocument.documentElement, n)) {
      if (r !== null && Eo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var a = n.textContent.length, s = Math.min(r.start, a);
          r = r.end === void 0 ? s : Math.min(r.end, a), !e.extend && s > r && (a = r, r = s, s = a), a = uu(n, s);
          var d = uu(
            n,
            r
          );
          a && d && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== d.node || e.focusOffset !== d.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(d.node, d.offset)) : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var _m = h && "documentMode" in document && 11 >= document.documentMode, Qn = null, wo = null, br = null, ko = !1;
  function fu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ko || Qn == null || Qn !== vl(r) || (r = Qn, "selectionStart" in r && Eo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), br && Fr(br, r) || (br = r, r = Al(wo, "onSelect"), 0 < r.length && (t = new fo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qn)));
  }
  function Dl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var qn = { animationend: Dl("Animation", "AnimationEnd"), animationiteration: Dl("Animation", "AnimationIteration"), animationstart: Dl("Animation", "AnimationStart"), transitionend: Dl("Transition", "TransitionEnd") }, So = {}, mu = {};
  h && (mu = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function zl(e) {
    if (So[e]) return So[e];
    if (!qn[e]) return e;
    var t = qn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in mu) return So[e] = t[n];
    return e;
  }
  var pu = zl("animationend"), hu = zl("animationiteration"), vu = zl("animationstart"), yu = zl("transitionend"), gu = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function rn(e, t) {
    gu.set(e, t), m(t, [e]);
  }
  for (var Co = 0; Co < _u.length; Co++) {
    var xo = _u[Co], Em = xo.toLowerCase(), wm = xo[0].toUpperCase() + xo.slice(1);
    rn(Em, "on" + wm);
  }
  rn(pu, "onAnimationEnd"), rn(hu, "onAnimationIteration"), rn(vu, "onAnimationStart"), rn("dblclick", "onDoubleClick"), rn("focusin", "onFocus"), rn("focusout", "onBlur"), rn(yu, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), m("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), m("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), m("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), m("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
  function Eu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ef(r, t, void 0, e), e.currentTarget = null;
  }
  function wu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], a = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t) for (var d = r.length - 1; 0 <= d; d--) {
          var g = r[d], E = g.instance, I = g.currentTarget;
          if (g = g.listener, E !== s && a.isPropagationStopped()) break e;
          Eu(a, g, I), s = E;
        }
        else for (d = 0; d < r.length; d++) {
          if (g = r[d], E = g.instance, I = g.currentTarget, g = g.listener, E !== s && a.isPropagationStopped()) break e;
          Eu(a, g, I), s = E;
        }
      }
    }
    if (_l) throw e = to, _l = !1, to = null, e;
  }
  function Ne(e, t) {
    var n = t[$o];
    n === void 0 && (n = t[$o] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ku(t, e, 2, !1), n.add(r));
  }
  function No(e, t, n) {
    var r = 0;
    t && (r |= 4), ku(n, e, r, t);
  }
  var Ol = "_reactListening" + Math.random().toString(36).slice(2);
  function Ur(e) {
    if (!e[Ol]) {
      e[Ol] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (km.has(n) || No(n, !1, e), No(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ol] || (t[Ol] = !0, No("selectionchange", !1, t));
    }
  }
  function ku(e, t, n, r) {
    switch (Vs(t)) {
      case 1:
        var a = Of;
        break;
      case 4:
        a = Af;
        break;
      default:
        a = so;
    }
    n = a.bind(null, t, n, e), a = void 0, !eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
  }
  function To(e, t, n, r, a) {
    var s = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var d = r.tag;
      if (d === 3 || d === 4) {
        var g = r.stateNode.containerInfo;
        if (g === a || g.nodeType === 8 && g.parentNode === a) break;
        if (d === 4) for (d = r.return; d !== null; ) {
          var E = d.tag;
          if ((E === 3 || E === 4) && (E = d.stateNode.containerInfo, E === a || E.nodeType === 8 && E.parentNode === a)) return;
          d = d.return;
        }
        for (; g !== null; ) {
          if (d = Sn(g), d === null) return;
          if (E = d.tag, E === 5 || E === 6) {
            r = s = d;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ts(function() {
      var I = s, b = Xa(n), U = [];
      e: {
        var A = gu.get(e);
        if (A !== void 0) {
          var Y = fo, J = e;
          switch (e) {
            case "keypress":
              if (Ml(n) === 0) break e;
            case "keydown":
            case "keyup":
              Y = Jf;
              break;
            case "focusin":
              J = "focus", Y = ho;
              break;
            case "focusout":
              J = "blur", Y = ho;
              break;
            case "beforeblur":
            case "afterblur":
              Y = ho;
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
              Y = Ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = tm;
              break;
            case pu:
            case hu:
            case vu:
              Y = Wf;
              break;
            case yu:
              Y = rm;
              break;
            case "scroll":
              Y = Ff;
              break;
            case "wheel":
              Y = am;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Vf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Gs;
          }
          var Z = (t & 4) !== 0, Ae = !Z && e === "scroll", T = Z ? A !== null ? A + "Capture" : null : A;
          Z = [];
          for (var k = I, R; k !== null; ) {
            R = k;
            var B = R.stateNode;
            if (R.tag === 5 && B !== null && (R = B, T !== null && (B = Sr(k, T), B != null && Z.push(Br(k, B, R)))), Ae) break;
            k = k.return;
          }
          0 < Z.length && (A = new Y(A, J, null, n, b), U.push({ event: A, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (A = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", A && n !== Ga && (J = n.relatedTarget || n.fromElement) && (Sn(J) || J[Ut])) break e;
          if ((Y || A) && (A = b.window === b ? b : (A = b.ownerDocument) ? A.defaultView || A.parentWindow : window, Y ? (J = n.relatedTarget || n.toElement, Y = I, J = J ? Sn(J) : null, J !== null && (Ae = kn(J), J !== Ae || J.tag !== 5 && J.tag !== 6) && (J = null)) : (Y = null, J = I), Y !== J)) {
            if (Z = Ys, B = "onMouseLeave", T = "onMouseEnter", k = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Gs, B = "onPointerLeave", T = "onPointerEnter", k = "pointer"), Ae = Y == null ? A : Gn(Y), R = J == null ? A : Gn(J), A = new Z(B, k + "leave", Y, n, b), A.target = Ae, A.relatedTarget = R, B = null, Sn(b) === I && (Z = new Z(T, k + "enter", J, n, b), Z.target = R, Z.relatedTarget = Ae, B = Z), Ae = B, Y && J) t: {
              for (Z = Y, T = J, k = 0, R = Z; R; R = Yn(R)) k++;
              for (R = 0, B = T; B; B = Yn(B)) R++;
              for (; 0 < k - R; ) Z = Yn(Z), k--;
              for (; 0 < R - k; ) T = Yn(T), R--;
              for (; k--; ) {
                if (Z === T || T !== null && Z === T.alternate) break t;
                Z = Yn(Z), T = Yn(T);
              }
              Z = null;
            }
            else Z = null;
            Y !== null && Su(U, A, Y, Z, !1), J !== null && Ae !== null && Su(U, Ae, J, Z, !0);
          }
        }
        e: {
          if (A = I ? Gn(I) : window, Y = A.nodeName && A.nodeName.toLowerCase(), Y === "select" || Y === "input" && A.type === "file") var te = fm;
          else if (nu(A)) if (lu) te = vm;
          else {
            te = pm;
            var re = mm;
          }
          else (Y = A.nodeName) && Y.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (te = hm);
          if (te && (te = te(e, I))) {
            ru(U, te, n, b);
            break e;
          }
          re && re(e, A, I), e === "focusout" && (re = A._wrapperState) && re.controlled && A.type === "number" && Va(A, "number", A.value);
        }
        switch (re = I ? Gn(I) : window, e) {
          case "focusin":
            (nu(re) || re.contentEditable === "true") && (Qn = re, wo = I, br = null);
            break;
          case "focusout":
            br = wo = Qn = null;
            break;
          case "mousedown":
            ko = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ko = !1, fu(U, n, b);
            break;
          case "selectionchange":
            if (_m) break;
          case "keydown":
          case "keyup":
            fu(U, n, b);
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
        ie && (Xs && n.locale !== "ko" && (Vn || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Vn && (le = Qs()) : (nn = b, co = "value" in nn ? nn.value : nn.textContent, Vn = !0)), re = Al(I, ie), 0 < re.length && (ie = new Ks(ie, e, null, n, b), U.push({ event: ie, listeners: re }), le ? ie.data = le : (le = tu(n), le !== null && (ie.data = le)))), (le = im ? sm(e, n) : um(e, n)) && (I = Al(I, "onBeforeInput"), 0 < I.length && (b = new Ks("onBeforeInput", "beforeinput", null, n, b), U.push({ event: b, listeners: I }), b.data = le));
      }
      wu(U, t);
    });
  }
  function Br(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Al(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var a = e, s = a.stateNode;
      a.tag === 5 && s !== null && (a = s, s = Sr(e, n), s != null && r.unshift(Br(e, s, a)), s = Sr(e, t), s != null && r.push(Br(e, s, a))), e = e.return;
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
  function Su(e, t, n, r, a) {
    for (var s = t._reactName, d = []; n !== null && n !== r; ) {
      var g = n, E = g.alternate, I = g.stateNode;
      if (E !== null && E === r) break;
      g.tag === 5 && I !== null && (g = I, a ? (E = Sr(n, s), E != null && d.unshift(Br(n, E, g))) : a || (E = Sr(n, s), E != null && d.push(Br(n, E, g)))), n = n.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Sm = /\r\n?/g, Cm = /\u0000|\uFFFD/g;
  function Cu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sm, `
`).replace(Cm, "");
  }
  function Fl(e, t, n) {
    if (t = Cu(t), Cu(e) !== t && n) throw Error(i(425));
  }
  function bl() {
  }
  var Ro = null, Po = null;
  function Mo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lo = typeof setTimeout == "function" ? setTimeout : void 0, xm = typeof clearTimeout == "function" ? clearTimeout : void 0, xu = typeof Promise == "function" ? Promise : void 0, Nm = typeof queueMicrotask == "function" ? queueMicrotask : typeof xu < "u" ? function(e) {
    return xu.resolve(null).then(e).catch(Tm);
  } : Lo;
  function Tm(e) {
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
          e.removeChild(a), Ir(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = a;
    } while (n);
    Ir(t);
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
  var Kn = Math.random().toString(36).slice(2), It = "__reactFiber$" + Kn, Wr = "__reactProps$" + Kn, Ut = "__reactContainer$" + Kn, $o = "__reactEvents$" + Kn, Rm = "__reactListeners$" + Kn, Pm = "__reactHandles$" + Kn;
  function Sn(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ut] || n[It]) {
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
  function Hr(e) {
    return e = e[It] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function jl(e) {
    return e[Wr] || null;
  }
  var Do = [], Xn = -1;
  function an(e) {
    return { current: e };
  }
  function Te(e) {
    0 > Xn || (e.current = Do[Xn], Do[Xn] = null, Xn--);
  }
  function Se(e, t) {
    Xn++, Do[Xn] = e.current, e.current = t;
  }
  var on = {}, qe = an(on), Ze = an(!1), Cn = on;
  function Jn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return on;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, s;
    for (s in n) a[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
  }
  function et(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ul() {
    Te(Ze), Te(qe);
  }
  function Tu(e, t, n) {
    if (qe.current !== on) throw Error(i(168));
    Se(qe, t), Se(Ze, n);
  }
  function Ru(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var a in r) if (!(a in t)) throw Error(i(108, ke(e) || "Unknown", a));
    return X({}, n, r);
  }
  function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, Cn = qe.current, Se(qe, e), Se(Ze, Ze.current), !0;
  }
  function Pu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(i(169));
    n ? (e = Ru(e, t, Cn), r.__reactInternalMemoizedMergedChildContext = e, Te(Ze), Te(qe), Se(qe, e)) : Te(Ze), Se(Ze, n);
  }
  var Bt = null, Wl = !1, zo = !1;
  function Mu(e) {
    Bt === null ? Bt = [e] : Bt.push(e);
  }
  function Mm(e) {
    Wl = !0, Mu(e);
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
        Bt = null, Wl = !1;
      } catch (a) {
        throw Bt !== null && (Bt = Bt.slice(e + 1)), Is(no, sn), a;
      } finally {
        we = t, zo = !1;
      }
    }
    return null;
  }
  var Zn = [], er = 0, Hl = null, Vl = 0, pt = [], ht = 0, xn = null, Wt = 1, Ht = "";
  function Nn(e, t) {
    Zn[er++] = Vl, Zn[er++] = Hl, Hl = e, Vl = t;
  }
  function Lu(e, t, n) {
    pt[ht++] = Wt, pt[ht++] = Ht, pt[ht++] = xn, xn = e;
    var r = Wt;
    e = Ht;
    var a = 32 - kt(r) - 1;
    r &= ~(1 << a), n += 1;
    var s = 32 - kt(t) + a;
    if (30 < s) {
      var d = a - a % 5;
      s = (r & (1 << d) - 1).toString(32), r >>= d, a -= d, Wt = 1 << 32 - kt(t) + a | n << a | r, Ht = s + e;
    } else Wt = 1 << s | n << a | r, Ht = e;
  }
  function Oo(e) {
    e.return !== null && (Nn(e, 1), Lu(e, 1, 0));
  }
  function Ao(e) {
    for (; e === Hl; ) Hl = Zn[--er], Zn[er] = null, Vl = Zn[--er], Zn[er] = null;
    for (; e === xn; ) xn = pt[--ht], pt[ht] = null, Ht = pt[--ht], pt[ht] = null, Wt = pt[--ht], pt[ht] = null;
  }
  var st = null, ut = null, Me = !1, Ct = null;
  function Iu(e, t) {
    var n = _t(5, null, null, 0);
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
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? { id: Wt, overflow: Ht } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _t(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, ut = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Fo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function bo(e) {
    if (Me) {
      var t = ut;
      if (t) {
        var n = t;
        if (!$u(e, t)) {
          if (Fo(e)) throw Error(i(418));
          t = ln(n.nextSibling);
          var r = st;
          t && $u(e, t) ? Iu(r, n) : (e.flags = e.flags & -4097 | 2, Me = !1, st = e);
        }
      } else {
        if (Fo(e)) throw Error(i(418));
        e.flags = e.flags & -4097 | 2, Me = !1, st = e;
      }
    }
  }
  function Du(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    st = e;
  }
  function Ql(e) {
    if (e !== st) return !1;
    if (!Me) return Du(e), Me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mo(e.type, e.memoizedProps)), t && (t = ut)) {
      if (Fo(e)) throw zu(), Error(i(418));
      for (; t; ) Iu(e, t), t = ln(t.nextSibling);
    }
    if (Du(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
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
  function zu() {
    for (var e = ut; e; ) e = ln(e.nextSibling);
  }
  function tr() {
    ut = st = null, Me = !1;
  }
  function jo(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var Lm = z.ReactCurrentBatchConfig;
  function Vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(i(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(i(147, e));
        var a = r, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(d) {
          var g = a.refs;
          d === null ? delete g[s] : g[s] = d;
        }, t._stringRef = s, t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!n._owner) throw Error(i(290, e));
    }
    return e;
  }
  function ql(e, t) {
    throw e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ou(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Au(e) {
    function t(T, k) {
      if (e) {
        var R = T.deletions;
        R === null ? (T.deletions = [k], T.flags |= 16) : R.push(k);
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
      return T = vn(T, k), T.index = 0, T.sibling = null, T;
    }
    function s(T, k, R) {
      return T.index = R, e ? (R = T.alternate, R !== null ? (R = R.index, R < k ? (T.flags |= 2, k) : R) : (T.flags |= 2, k)) : (T.flags |= 1048576, k);
    }
    function d(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function g(T, k, R, B) {
      return k === null || k.tag !== 6 ? (k = Li(R, T.mode, B), k.return = T, k) : (k = a(k, R), k.return = T, k);
    }
    function E(T, k, R, B) {
      var te = R.type;
      return te === ee ? b(T, k, R.props.children, B, R.key) : k !== null && (k.elementType === te || typeof te == "object" && te !== null && te.$$typeof === Re && Ou(te) === k.type) ? (B = a(k, R.props), B.ref = Vr(T, k, R), B.return = T, B) : (B = ya(R.type, R.key, R.props, null, T.mode, B), B.ref = Vr(T, k, R), B.return = T, B);
    }
    function I(T, k, R, B) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== R.containerInfo || k.stateNode.implementation !== R.implementation ? (k = Ii(R, T.mode, B), k.return = T, k) : (k = a(k, R.children || []), k.return = T, k);
    }
    function b(T, k, R, B, te) {
      return k === null || k.tag !== 7 ? (k = Dn(R, T.mode, B, te), k.return = T, k) : (k = a(k, R), k.return = T, k);
    }
    function U(T, k, R) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Li("" + k, T.mode, R), k.return = T, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case W:
            return R = ya(k.type, k.key, k.props, null, T.mode, R), R.ref = Vr(T, null, k), R.return = T, R;
          case j:
            return k = Ii(k, T.mode, R), k.return = T, k;
          case Re:
            var B = k._init;
            return U(T, B(k._payload), R);
        }
        if (Er(k) || oe(k)) return k = Dn(k, T.mode, R, null), k.return = T, k;
        ql(T, k);
      }
      return null;
    }
    function A(T, k, R, B) {
      var te = k !== null ? k.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return te !== null ? null : g(T, k, "" + R, B);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            return R.key === te ? E(T, k, R, B) : null;
          case j:
            return R.key === te ? I(T, k, R, B) : null;
          case Re:
            return te = R._init, A(
              T,
              k,
              te(R._payload),
              B
            );
        }
        if (Er(R) || oe(R)) return te !== null ? null : b(T, k, R, B, null);
        ql(T, R);
      }
      return null;
    }
    function Y(T, k, R, B, te) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return T = T.get(R) || null, g(k, T, "" + B, te);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case W:
            return T = T.get(B.key === null ? R : B.key) || null, E(k, T, B, te);
          case j:
            return T = T.get(B.key === null ? R : B.key) || null, I(k, T, B, te);
          case Re:
            var re = B._init;
            return Y(T, k, R, re(B._payload), te);
        }
        if (Er(B) || oe(B)) return T = T.get(R) || null, b(k, T, B, te, null);
        ql(k, B);
      }
      return null;
    }
    function J(T, k, R, B) {
      for (var te = null, re = null, le = k, ie = k = 0, We = null; le !== null && ie < R.length; ie++) {
        le.index > ie ? (We = le, le = null) : We = le.sibling;
        var ve = A(T, le, R[ie], B);
        if (ve === null) {
          le === null && (le = We);
          break;
        }
        e && le && ve.alternate === null && t(T, le), k = s(ve, k, ie), re === null ? te = ve : re.sibling = ve, re = ve, le = We;
      }
      if (ie === R.length) return n(T, le), Me && Nn(T, ie), te;
      if (le === null) {
        for (; ie < R.length; ie++) le = U(T, R[ie], B), le !== null && (k = s(le, k, ie), re === null ? te = le : re.sibling = le, re = le);
        return Me && Nn(T, ie), te;
      }
      for (le = r(T, le); ie < R.length; ie++) We = Y(le, T, ie, R[ie], B), We !== null && (e && We.alternate !== null && le.delete(We.key === null ? ie : We.key), k = s(We, k, ie), re === null ? te = We : re.sibling = We, re = We);
      return e && le.forEach(function(yn) {
        return t(T, yn);
      }), Me && Nn(T, ie), te;
    }
    function Z(T, k, R, B) {
      var te = oe(R);
      if (typeof te != "function") throw Error(i(150));
      if (R = te.call(R), R == null) throw Error(i(151));
      for (var re = te = null, le = k, ie = k = 0, We = null, ve = R.next(); le !== null && !ve.done; ie++, ve = R.next()) {
        le.index > ie ? (We = le, le = null) : We = le.sibling;
        var yn = A(T, le, ve.value, B);
        if (yn === null) {
          le === null && (le = We);
          break;
        }
        e && le && yn.alternate === null && t(T, le), k = s(yn, k, ie), re === null ? te = yn : re.sibling = yn, re = yn, le = We;
      }
      if (ve.done) return n(
        T,
        le
      ), Me && Nn(T, ie), te;
      if (le === null) {
        for (; !ve.done; ie++, ve = R.next()) ve = U(T, ve.value, B), ve !== null && (k = s(ve, k, ie), re === null ? te = ve : re.sibling = ve, re = ve);
        return Me && Nn(T, ie), te;
      }
      for (le = r(T, le); !ve.done; ie++, ve = R.next()) ve = Y(le, T, ie, ve.value, B), ve !== null && (e && ve.alternate !== null && le.delete(ve.key === null ? ie : ve.key), k = s(ve, k, ie), re === null ? te = ve : re.sibling = ve, re = ve);
      return e && le.forEach(function(cp) {
        return t(T, cp);
      }), Me && Nn(T, ie), te;
    }
    function Ae(T, k, R, B) {
      if (typeof R == "object" && R !== null && R.type === ee && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case W:
            e: {
              for (var te = R.key, re = k; re !== null; ) {
                if (re.key === te) {
                  if (te = R.type, te === ee) {
                    if (re.tag === 7) {
                      n(T, re.sibling), k = a(re, R.props.children), k.return = T, T = k;
                      break e;
                    }
                  } else if (re.elementType === te || typeof te == "object" && te !== null && te.$$typeof === Re && Ou(te) === re.type) {
                    n(T, re.sibling), k = a(re, R.props), k.ref = Vr(T, re, R), k.return = T, T = k;
                    break e;
                  }
                  n(T, re);
                  break;
                } else t(T, re);
                re = re.sibling;
              }
              R.type === ee ? (k = Dn(R.props.children, T.mode, B, R.key), k.return = T, T = k) : (B = ya(R.type, R.key, R.props, null, T.mode, B), B.ref = Vr(T, k, R), B.return = T, T = B);
            }
            return d(T);
          case j:
            e: {
              for (re = R.key; k !== null; ) {
                if (k.key === re) if (k.tag === 4 && k.stateNode.containerInfo === R.containerInfo && k.stateNode.implementation === R.implementation) {
                  n(T, k.sibling), k = a(k, R.children || []), k.return = T, T = k;
                  break e;
                } else {
                  n(T, k);
                  break;
                }
                else t(T, k);
                k = k.sibling;
              }
              k = Ii(R, T.mode, B), k.return = T, T = k;
            }
            return d(T);
          case Re:
            return re = R._init, Ae(T, k, re(R._payload), B);
        }
        if (Er(R)) return J(T, k, R, B);
        if (oe(R)) return Z(T, k, R, B);
        ql(T, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, k !== null && k.tag === 6 ? (n(T, k.sibling), k = a(k, R), k.return = T, T = k) : (n(T, k), k = Li(R, T.mode, B), k.return = T, T = k), d(T)) : n(T, k);
    }
    return Ae;
  }
  var nr = Au(!0), Fu = Au(!1), Yl = an(null), Kl = null, rr = null, Uo = null;
  function Bo() {
    Uo = rr = Kl = null;
  }
  function Wo(e) {
    var t = Yl.current;
    Te(Yl), e._currentValue = t;
  }
  function Ho(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function lr(e, t) {
    Kl = e, Uo = rr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (tt = !0), e.firstContext = null);
  }
  function vt(e) {
    var t = e._currentValue;
    if (Uo !== e) if (e = { context: e, memoizedValue: t, next: null }, rr === null) {
      if (Kl === null) throw Error(i(308));
      rr = e, Kl.dependencies = { lanes: 0, firstContext: e };
    } else rr = rr.next = e;
    return t;
  }
  var Tn = null;
  function Vo(e) {
    Tn === null ? Tn = [e] : Tn.push(e);
  }
  function bu(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n, Vo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Vt(e, r);
  }
  function Vt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var un = !1;
  function Qo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ju(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (me & 2) !== 0) {
      var a = r.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Vt(e, n);
    }
    return a = r.interleaved, a === null ? (t.next = t, Vo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Vt(e, n);
  }
  function Gl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ao(e, n);
    }
  }
  function Uu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var a = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var d = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          s === null ? a = s = d : s = s.next = d, n = n.next;
        } while (n !== null);
        s === null ? a = s = t : s = s.next = t;
      } else a = s = t;
      n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Xl(e, t, n, r) {
    var a = e.updateQueue;
    un = !1;
    var s = a.firstBaseUpdate, d = a.lastBaseUpdate, g = a.shared.pending;
    if (g !== null) {
      a.shared.pending = null;
      var E = g, I = E.next;
      E.next = null, d === null ? s = I : d.next = I, d = E;
      var b = e.alternate;
      b !== null && (b = b.updateQueue, g = b.lastBaseUpdate, g !== d && (g === null ? b.firstBaseUpdate = I : g.next = I, b.lastBaseUpdate = E));
    }
    if (s !== null) {
      var U = a.baseState;
      d = 0, b = I = E = null, g = s;
      do {
        var A = g.lane, Y = g.eventTime;
        if ((r & A) === A) {
          b !== null && (b = b.next = {
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
                  U = J.call(Y, U, A);
                  break e;
                }
                U = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = Z.payload, A = typeof J == "function" ? J.call(Y, U, A) : J, A == null) break e;
                U = X({}, U, A);
                break e;
              case 2:
                un = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, A = a.effects, A === null ? a.effects = [g] : A.push(g));
        } else Y = { eventTime: Y, lane: A, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, b === null ? (I = b = Y, E = U) : b = b.next = Y, d |= A;
        if (g = g.next, g === null) {
          if (g = a.shared.pending, g === null) break;
          A = g, g = A.next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null;
        }
      } while (!0);
      if (b === null && (E = U), a.baseState = E, a.firstBaseUpdate = I, a.lastBaseUpdate = b, t = a.shared.interleaved, t !== null) {
        a = t;
        do
          d |= a.lane, a = a.next;
        while (a !== t);
      } else s === null && (a.shared.lanes = 0);
      Mn |= d, e.lanes = d, e.memoizedState = U;
    }
  }
  function Bu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], a = r.callback;
      if (a !== null) {
        if (r.callback = null, r = n, typeof a != "function") throw Error(i(191, a));
        a.call(r);
      }
    }
  }
  var Qr = {}, $t = an(Qr), qr = an(Qr), Yr = an(Qr);
  function Rn(e) {
    if (e === Qr) throw Error(i(174));
    return e;
  }
  function qo(e, t) {
    switch (Se(Yr, t), Se(qr, e), Se($t, Qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qa(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qa(t, e);
    }
    Te($t), Se($t, t);
  }
  function ar() {
    Te($t), Te(qr), Te(Yr);
  }
  function Wu(e) {
    Rn(Yr.current);
    var t = Rn($t.current), n = qa(t, e.type);
    t !== n && (Se(qr, e), Se($t, n));
  }
  function Yo(e) {
    qr.current === e && (Te($t), Te(qr));
  }
  var Ie = an(0);
  function Jl(e) {
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
  var Zl = z.ReactCurrentDispatcher, Xo = z.ReactCurrentBatchConfig, Pn = 0, $e = null, be = null, Ue = null, ea = !1, Kr = !1, Gr = 0, Im = 0;
  function Ye() {
    throw Error(i(321));
  }
  function Jo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
    return !0;
  }
  function Zo(e, t, n, r, a, s) {
    if (Pn = s, $e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zl.current = e === null || e.memoizedState === null ? Om : Am, e = n(r, a), Kr) {
      s = 0;
      do {
        if (Kr = !1, Gr = 0, 25 <= s) throw Error(i(301));
        s += 1, Ue = be = null, t.updateQueue = null, Zl.current = Fm, e = n(r, a);
      } while (Kr);
    }
    if (Zl.current = ra, t = be !== null && be.next !== null, Pn = 0, Ue = be = $e = null, ea = !1, t) throw Error(i(300));
    return e;
  }
  function ei() {
    var e = Gr !== 0;
    return Gr = 0, e;
  }
  function Dt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? $e.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function yt() {
    if (be === null) {
      var e = $e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = Ue === null ? $e.memoizedState : Ue.next;
    if (t !== null) Ue = t, be = e;
    else {
      if (e === null) throw Error(i(310));
      be = e, e = { memoizedState: be.memoizedState, baseState: be.baseState, baseQueue: be.baseQueue, queue: be.queue, next: null }, Ue === null ? $e.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function Xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ti(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = be, a = r.baseQueue, s = n.pending;
    if (s !== null) {
      if (a !== null) {
        var d = a.next;
        a.next = s.next, s.next = d;
      }
      r.baseQueue = a = s, n.pending = null;
    }
    if (a !== null) {
      s = a.next, r = r.baseState;
      var g = d = null, E = null, I = s;
      do {
        var b = I.lane;
        if ((Pn & b) === b) E !== null && (E = E.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), r = I.hasEagerState ? I.eagerState : e(r, I.action);
        else {
          var U = {
            lane: b,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          E === null ? (g = E = U, d = r) : E = E.next = U, $e.lanes |= b, Mn |= b;
        }
        I = I.next;
      } while (I !== null && I !== s);
      E === null ? d = r : E.next = g, St(r, t.memoizedState) || (tt = !0), t.memoizedState = r, t.baseState = d, t.baseQueue = E, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      a = e;
      do
        s = a.lane, $e.lanes |= s, Mn |= s, a = a.next;
      while (a !== e);
    } else a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ni(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, a = n.pending, s = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var d = a = a.next;
      do
        s = e(s, d.action), d = d.next;
      while (d !== a);
      St(s, t.memoizedState) || (tt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
    }
    return [s, r];
  }
  function Hu() {
  }
  function Vu(e, t) {
    var n = $e, r = yt(), a = t(), s = !St(r.memoizedState, a);
    if (s && (r.memoizedState = a, tt = !0), r = r.queue, ri(Yu.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, Jr(9, qu.bind(null, n, r, a, t), void 0, null), Be === null) throw Error(i(349));
      (Pn & 30) !== 0 || Qu(n, t, a);
    }
    return a;
  }
  function Qu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function qu(e, t, n, r) {
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
      return !St(e, n);
    } catch {
      return !0;
    }
  }
  function Gu(e) {
    var t = Vt(e, 1);
    t !== null && Rt(t, e, 1, -1);
  }
  function Xu(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = zm.bind(null, $e, e), [t.memoizedState, e];
  }
  function Jr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $e.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $e.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ju() {
    return yt().memoizedState;
  }
  function ta(e, t, n, r) {
    var a = Dt();
    $e.flags |= e, a.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function na(e, t, n, r) {
    var a = yt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (be !== null) {
      var d = be.memoizedState;
      if (s = d.destroy, r !== null && Jo(r, d.deps)) {
        a.memoizedState = Jr(t, n, s, r);
        return;
      }
    }
    $e.flags |= e, a.memoizedState = Jr(1 | t, n, s, r);
  }
  function Zu(e, t) {
    return ta(8390656, 8, e, t);
  }
  function ri(e, t) {
    return na(2048, 8, e, t);
  }
  function ec(e, t) {
    return na(4, 2, e, t);
  }
  function tc(e, t) {
    return na(4, 4, e, t);
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
    return n = n != null ? n.concat([e]) : null, na(4, 4, nc.bind(null, t, e), n);
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
    return (Pn & 21) === 0 ? (e.baseState && (e.baseState = !1, tt = !0), e.memoizedState = n) : (St(n, t) || (n = Os(), $e.lanes |= n, Mn |= n, e.baseState = !0), t);
  }
  function $m(e, t) {
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
  function Dm(e, t, n) {
    var r = pn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, sc(e)) uc(t, n);
    else if (n = bu(e, t, n, r), n !== null) {
      var a = Je();
      Rt(n, e, r, a), cc(n, t, r);
    }
  }
  function zm(e, t, n) {
    var r = pn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (sc(e)) uc(t, a);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var d = t.lastRenderedState, g = s(d, n);
        if (a.hasEagerState = !0, a.eagerState = g, St(g, d)) {
          var E = t.interleaved;
          E === null ? (a.next = a, Vo(t)) : (a.next = E.next, E.next = a), t.interleaved = a;
          return;
        }
      } catch {
      } finally {
      }
      n = bu(e, t, a, r), n !== null && (a = Je(), Rt(n, e, r, a), cc(n, t, r));
    }
  }
  function sc(e) {
    var t = e.alternate;
    return e === $e || t !== null && t === $e;
  }
  function uc(e, t) {
    Kr = ea = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function cc(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ao(e, n);
    }
  }
  var ra = { readContext: vt, useCallback: Ye, useContext: Ye, useEffect: Ye, useImperativeHandle: Ye, useInsertionEffect: Ye, useLayoutEffect: Ye, useMemo: Ye, useReducer: Ye, useRef: Ye, useState: Ye, useDebugValue: Ye, useDeferredValue: Ye, useTransition: Ye, useMutableSource: Ye, useSyncExternalStore: Ye, useId: Ye, unstable_isNewReconciler: !1 }, Om = { readContext: vt, useCallback: function(e, t) {
    return Dt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: vt, useEffect: Zu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ta(
      4194308,
      4,
      nc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ta(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ta(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Dt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Dt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Dm.bind(null, $e, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Dt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Xu, useDebugValue: li, useDeferredValue: function(e) {
    return Dt().memoizedState = e;
  }, useTransition: function() {
    var e = Xu(!1), t = e[0];
    return e = $m.bind(null, e[1]), Dt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = $e, a = Dt();
    if (Me) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else {
      if (n = t(), Be === null) throw Error(i(349));
      (Pn & 30) !== 0 || Qu(r, t, n);
    }
    a.memoizedState = n;
    var s = { value: n, getSnapshot: t };
    return a.queue = s, Zu(Yu.bind(
      null,
      r,
      s,
      e
    ), [e]), r.flags |= 2048, Jr(9, qu.bind(null, r, s, n, t), void 0, null), n;
  }, useId: function() {
    var e = Dt(), t = Be.identifierPrefix;
    if (Me) {
      var n = Ht, r = Wt;
      n = (r & ~(1 << 32 - kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Im++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Am = {
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
      return ti(Xr);
    },
    useDebugValue: li,
    useDeferredValue: function(e) {
      var t = yt();
      return oc(t, be.memoizedState, e);
    },
    useTransition: function() {
      var e = ti(Xr)[0], t = yt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hu,
    useSyncExternalStore: Vu,
    useId: ic,
    unstable_isNewReconciler: !1
  }, Fm = { readContext: vt, useCallback: lc, useContext: vt, useEffect: ri, useImperativeHandle: rc, useInsertionEffect: ec, useLayoutEffect: tc, useMemo: ac, useReducer: ni, useRef: Ju, useState: function() {
    return ni(Xr);
  }, useDebugValue: li, useDeferredValue: function(e) {
    var t = yt();
    return be === null ? t.memoizedState = e : oc(t, be.memoizedState, e);
  }, useTransition: function() {
    var e = ni(Xr)[0], t = yt().memoizedState;
    return [e, t];
  }, useMutableSource: Hu, useSyncExternalStore: Vu, useId: ic, unstable_isNewReconciler: !1 };
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = X({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ai(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var la = { isMounted: function(e) {
    return (e = e._reactInternals) ? kn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = pn(e), s = Qt(r, a);
    s.payload = t, n != null && (s.callback = n), t = cn(e, s, a), t !== null && (Rt(t, e, a, r), Gl(t, e, a));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Je(), a = pn(e), s = Qt(r, a);
    s.tag = 1, s.payload = t, n != null && (s.callback = n), t = cn(e, s, a), t !== null && (Rt(t, e, a, r), Gl(t, e, a));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Je(), r = pn(e), a = Qt(n, r);
    a.tag = 2, t != null && (a.callback = t), t = cn(e, a, r), t !== null && (Rt(t, e, r, n), Gl(t, e, r));
  } };
  function dc(e, t, n, r, a, s, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, d) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(a, s) : !0;
  }
  function fc(e, t, n) {
    var r = !1, a = on, s = t.contextType;
    return typeof s == "object" && s !== null ? s = vt(s) : (a = et(t) ? Cn : qe.current, r = t.contextTypes, s = (r = r != null) ? Jn(e, a) : on), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = la, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = s), t;
  }
  function mc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && la.enqueueReplaceState(t, t.state, null);
  }
  function oi(e, t, n, r) {
    var a = e.stateNode;
    a.props = n, a.state = e.memoizedState, a.refs = {}, Qo(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? a.context = vt(s) : (s = et(t) ? Cn : qe.current, a.context = Jn(e, s)), a.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ai(e, t, s, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && la.enqueueReplaceState(a, a.state, null), Xl(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function or(e, t) {
    try {
      var n = "", r = t;
      do
        n += pe(r), r = r.return;
      while (r);
      var a = n;
    } catch (s) {
      a = `
Error generating stack: ` + s.message + `
` + s.stack;
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
  var bm = typeof WeakMap == "function" ? WeakMap : Map;
  function pc(e, t, n) {
    n = Qt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      da || (da = !0, Si = r), si(e, t);
    }, n;
  }
  function hc(e, t, n) {
    n = Qt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var a = t.value;
      n.payload = function() {
        return r(a);
      }, n.callback = function() {
        si(e, t);
      };
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      si(e, t), typeof r != "function" && (fn === null ? fn = /* @__PURE__ */ new Set([this]) : fn.add(this));
      var d = t.stack;
      this.componentDidCatch(t.value, { componentStack: d !== null ? d : "" });
    }), n;
  }
  function vc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new bm();
      var a = /* @__PURE__ */ new Set();
      r.set(t, a);
    } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
    a.has(n) || (a.add(n), e = Zm.bind(null, e, t, n), t.then(e, e));
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
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1), t.tag = 2, cn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e);
  }
  var jm = z.ReactCurrentOwner, tt = !1;
  function Xe(e, t, n, r) {
    t.child = e === null ? Fu(t, null, n, r) : nr(t, e.child, n, r);
  }
  function _c(e, t, n, r, a) {
    n = n.render;
    var s = t.ref;
    return lr(t, a), r = Zo(e, t, n, r, s, a), n = ei(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Me && n && Oo(t), t.flags |= 1, Xe(e, t, r, a), t.child);
  }
  function Ec(e, t, n, r, a) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" && !Mi(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, wc(e, t, s, r, a)) : (e = ya(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (s = e.child, (e.lanes & a) === 0) {
      var d = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fr, n(d, r) && e.ref === t.ref) return qt(e, t, a);
    }
    return t.flags |= 1, e = vn(s, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function wc(e, t, n, r, a) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Fr(s, r) && e.ref === t.ref) if (tt = !1, t.pendingProps = r = s, (e.lanes & a) !== 0) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, qt(e, t, a);
    }
    return ui(e, t, n, r, a);
  }
  function kc(e, t, n) {
    var r = t.pendingProps, a = r.children, s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(sr, ct), ct |= n;
    else {
      if ((n & 1073741824) === 0) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Se(sr, ct), ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, Se(sr, ct), ct |= r;
    }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, Se(sr, ct), ct |= r;
    return Xe(e, t, a, n), t.child;
  }
  function Sc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ui(e, t, n, r, a) {
    var s = et(n) ? Cn : qe.current;
    return s = Jn(t, s), lr(t, a), n = Zo(e, t, n, r, s, a), r = ei(), e !== null && !tt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, qt(e, t, a)) : (Me && r && Oo(t), t.flags |= 1, Xe(e, t, n, a), t.child);
  }
  function Cc(e, t, n, r, a) {
    if (et(n)) {
      var s = !0;
      Bl(t);
    } else s = !1;
    if (lr(t, a), t.stateNode === null) oa(e, t), fc(t, n, r), oi(t, n, r, a), r = !0;
    else if (e === null) {
      var d = t.stateNode, g = t.memoizedProps;
      d.props = g;
      var E = d.context, I = n.contextType;
      typeof I == "object" && I !== null ? I = vt(I) : (I = et(n) ? Cn : qe.current, I = Jn(t, I));
      var b = n.getDerivedStateFromProps, U = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      U || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== r || E !== I) && mc(t, d, r, I), un = !1;
      var A = t.memoizedState;
      d.state = A, Xl(t, r, d, a), E = t.memoizedState, g !== r || A !== E || Ze.current || un ? (typeof b == "function" && (ai(t, n, b, r), E = t.memoizedState), (g = un || dc(t, n, g, r, A, E, I)) ? (U || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = E), d.props = r, d.state = E, d.context = I, r = g) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      d = t.stateNode, ju(e, t), g = t.memoizedProps, I = t.type === t.elementType ? g : xt(t.type, g), d.props = I, U = t.pendingProps, A = d.context, E = n.contextType, typeof E == "object" && E !== null ? E = vt(E) : (E = et(n) ? Cn : qe.current, E = Jn(t, E));
      var Y = n.getDerivedStateFromProps;
      (b = typeof Y == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== U || A !== E) && mc(t, d, r, E), un = !1, A = t.memoizedState, d.state = A, Xl(t, r, d, a);
      var J = t.memoizedState;
      g !== U || A !== J || Ze.current || un ? (typeof Y == "function" && (ai(t, n, Y, r), J = t.memoizedState), (I = un || dc(t, n, I, r, A, J, E) || !1) ? (b || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, J, E), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, J, E)), typeof d.componentDidUpdate == "function" && (t.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = J), d.props = r, d.state = J, d.context = E, r = I) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ci(e, t, n, r, s, a);
  }
  function ci(e, t, n, r, a, s) {
    Sc(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return a && Pu(t, n, !1), qt(e, t, s);
    r = t.stateNode, jm.current = t;
    var g = d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && d ? (t.child = nr(t, e.child, null, s), t.child = nr(t, null, g, s)) : Xe(e, t, g, s), t.memoizedState = r.state, a && Pu(t, n, !0), t.child;
  }
  function xc(e) {
    var t = e.stateNode;
    t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), qo(e, t.containerInfo);
  }
  function Nc(e, t, n, r, a) {
    return tr(), jo(a), t.flags |= 256, Xe(e, t, n, r), t.child;
  }
  var di = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tc(e, t, n) {
    var r = t.pendingProps, a = Ie.current, s = !1, d = (t.flags & 128) !== 0, g;
    if ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), g ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Se(Ie, a & 1), e === null)
      return bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (d = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, d = { mode: "hidden", children: d }, (r & 1) === 0 && s !== null ? (s.childLanes = 0, s.pendingProps = d) : s = ga(d, r, 0, null), e = Dn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = fi(n), t.memoizedState = di, e) : mi(t, d));
    if (a = e.memoizedState, a !== null && (g = a.dehydrated, g !== null)) return Um(e, t, d, r, g, a, n);
    if (s) {
      s = r.fallback, d = t.mode, a = e.child, g = a.sibling;
      var E = { mode: "hidden", children: r.children };
      return (d & 1) === 0 && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = E, t.deletions = null) : (r = vn(a, E), r.subtreeFlags = a.subtreeFlags & 14680064), g !== null ? s = vn(g, s) : (s = Dn(s, d, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, d = e.child.memoizedState, d = d === null ? fi(n) : { baseLanes: d.baseLanes | n, cachePool: null, transitions: d.transitions }, s.memoizedState = d, s.childLanes = e.childLanes & ~n, t.memoizedState = di, r;
    }
    return s = e.child, e = s.sibling, r = vn(s, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function mi(e, t) {
    return t = ga({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function aa(e, t, n, r) {
    return r !== null && jo(r), nr(t, e.child, null, n), e = mi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Um(e, t, n, r, a, s, d) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ii(Error(i(422))), aa(e, t, d, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, a = t.mode, r = ga({ mode: "visible", children: r.children }, a, 0, null), s = Dn(s, a, d, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, (t.mode & 1) !== 0 && nr(t, e.child, null, d), t.child.memoizedState = fi(d), t.memoizedState = di, s);
    if ((t.mode & 1) === 0) return aa(e, t, d, null);
    if (a.data === "$!") {
      if (r = a.nextSibling && a.nextSibling.dataset, r) var g = r.dgst;
      return r = g, s = Error(i(419)), r = ii(s, r, void 0), aa(e, t, d, r);
    }
    if (g = (d & e.childLanes) !== 0, tt || g) {
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
        a = (a & (r.suspendedLanes | d)) !== 0 ? 0 : a, a !== 0 && a !== s.retryLane && (s.retryLane = a, Vt(e, a), Rt(r, e, a, -1));
      }
      return Pi(), r = ii(Error(i(421))), aa(e, t, d, r);
    }
    return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ep.bind(null, e), a._reactRetry = t, null) : (e = s.treeContext, ut = ln(a.nextSibling), st = t, Me = !0, Ct = null, e !== null && (pt[ht++] = Wt, pt[ht++] = Ht, pt[ht++] = xn, Wt = e.id, Ht = e.overflow, xn = t), t = mi(t, r.children), t.flags |= 4096, t);
  }
  function Rc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ho(e.return, t, n);
  }
  function pi(e, t, n, r, a) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = a);
  }
  function Pc(e, t, n) {
    var r = t.pendingProps, a = r.revealOrder, s = r.tail;
    if (Xe(e, t, r.children, n), r = Ie.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
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
    if (Se(Ie, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Jl(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), pi(t, !1, a, n, s);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && Jl(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        pi(t, !0, n, null, s);
        break;
      case "together":
        pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function oa(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function qt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = vn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Bm(e, t, n) {
    switch (t.tag) {
      case 3:
        xc(t), tr();
        break;
      case 5:
        Wu(t);
        break;
      case 1:
        et(t.type) && Bl(t);
        break;
      case 4:
        qo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, a = t.memoizedProps.value;
        Se(Yl, r._currentValue), r._currentValue = a;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Se(Ie, Ie.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Tc(e, t, n) : (Se(Ie, Ie.current & 1), e = qt(e, t, n), e !== null ? e.sibling : null);
        Se(Ie, Ie.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Pc(e, t, n);
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Se(Ie, Ie.current), r) break;
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
      e = t.stateNode, Rn($t.current);
      var s = null;
      switch (n) {
        case "input":
          a = Wa(e, a), r = Wa(e, r), s = [];
          break;
        case "select":
          a = X({}, a, { value: void 0 }), r = X({}, r, { value: void 0 }), s = [];
          break;
        case "textarea":
          a = Qa(e, a), r = Qa(e, r), s = [];
          break;
        default:
          typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = bl);
      }
      Ya(n, r);
      var d;
      n = null;
      for (I in a) if (!r.hasOwnProperty(I) && a.hasOwnProperty(I) && a[I] != null) if (I === "style") {
        var g = a[I];
        for (d in g) g.hasOwnProperty(d) && (n || (n = {}), n[d] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (f.hasOwnProperty(I) ? s || (s = []) : (s = s || []).push(I, null));
      for (I in r) {
        var E = r[I];
        if (g = a != null ? a[I] : void 0, r.hasOwnProperty(I) && E !== g && (E != null || g != null)) if (I === "style") if (g) {
          for (d in g) !g.hasOwnProperty(d) || E && E.hasOwnProperty(d) || (n || (n = {}), n[d] = "");
          for (d in E) E.hasOwnProperty(d) && g[d] !== E[d] && (n || (n = {}), n[d] = E[d]);
        } else n || (s || (s = []), s.push(
          I,
          n
        )), n = E;
        else I === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, g = g ? g.__html : void 0, E != null && g !== E && (s = s || []).push(I, E)) : I === "children" ? typeof E != "string" && typeof E != "number" || (s = s || []).push(I, "" + E) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (f.hasOwnProperty(I) ? (E != null && I === "onScroll" && Ne("scroll", e), s || g === E || (s = [])) : (s = s || []).push(I, E));
      }
      n && (s = s || []).push("style", n);
      var I = s;
      (t.updateQueue = I) && (t.flags |= 4);
    }
  }, Ic = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zr(e, t) {
    if (!Me) switch (e.tailMode) {
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
  function Wm(e, t, n) {
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
        return et(t.type) && Ul(), Ke(t), null;
      case 3:
        return r = t.stateNode, ar(), Te(Ze), Te(qe), Go(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (Ni(Ct), Ct = null))), hi(e, t), Ke(t), null;
      case 5:
        Yo(t);
        var a = Rn(Yr.current);
        if (n = t.type, e !== null && t.stateNode != null) Lc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(i(166));
            return Ke(t), null;
          }
          if (e = Rn($t.current), Ql(t)) {
            r = t.stateNode, n = t.type;
            var s = t.memoizedProps;
            switch (r[It] = t, r[Wr] = s, e = (t.mode & 1) !== 0, n) {
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
                fs(r, s), Ne("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!s.multiple }, Ne("invalid", r);
                break;
              case "textarea":
                hs(r, s), Ne("invalid", r);
            }
            Ya(n, s), a = null;
            for (var d in s) if (s.hasOwnProperty(d)) {
              var g = s[d];
              d === "children" ? typeof g == "string" ? r.textContent !== g && (s.suppressHydrationWarning !== !0 && Fl(r.textContent, g, e), a = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (s.suppressHydrationWarning !== !0 && Fl(
                r.textContent,
                g,
                e
              ), a = ["children", "" + g]) : f.hasOwnProperty(d) && g != null && d === "onScroll" && Ne("scroll", r);
            }
            switch (n) {
              case "input":
                hl(r), ps(r, s, !0);
                break;
              case "textarea":
                hl(r), ys(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = bl);
            }
            r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            d = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = d.createElement(n, { is: r.is }) : (e = d.createElement(n), n === "select" && (d = e, r.multiple ? d.multiple = !0 : r.size && (d.size = r.size))) : e = d.createElementNS(e, n), e[It] = t, e[Wr] = r, Mc(e, t, !1, !1), t.stateNode = e;
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
                  fs(e, r), a = Wa(e, r), Ne("invalid", e);
                  break;
                case "option":
                  a = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, a = X({}, r, { value: void 0 }), Ne("invalid", e);
                  break;
                case "textarea":
                  hs(e, r), a = Qa(e, r), Ne("invalid", e);
                  break;
                default:
                  a = r;
              }
              Ya(n, a), g = a;
              for (s in g) if (g.hasOwnProperty(s)) {
                var E = g[s];
                s === "style" ? ws(e, E) : s === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && _s(e, E)) : s === "children" ? typeof E == "string" ? (n !== "textarea" || E !== "") && wr(e, E) : typeof E == "number" && wr(e, "" + E) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (f.hasOwnProperty(s) ? E != null && s === "onScroll" && Ne("scroll", e) : E != null && O(e, s, E, d));
              }
              switch (n) {
                case "input":
                  hl(e), ps(e, r, !1);
                  break;
                case "textarea":
                  hl(e), ys(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, s = r.value, s != null ? jn(e, !!r.multiple, s, !1) : r.defaultValue != null && jn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof a.onClick == "function" && (e.onclick = bl);
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
          if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
          if (n = Rn(Yr.current), Rn($t.current), Ql(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[It] = t, (s = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
              case 3:
                Fl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Fl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            s && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[It] = t, t.stateNode = r;
        }
        return Ke(t), null;
      case 13:
        if (Te(Ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Me && ut !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) zu(), tr(), t.flags |= 98560, s = !1;
          else if (s = Ql(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(i(317));
              s[It] = t;
            } else tr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), s = !1;
          } else Ct !== null && (Ni(Ct), Ct = null), s = !0;
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? je === 0 && (je = 3) : Pi())), t.updateQueue !== null && (t.flags |= 4), Ke(t), null);
      case 4:
        return ar(), hi(e, t), e === null && Ur(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return Wo(t.type._context), Ke(t), null;
      case 17:
        return et(t.type) && Ul(), Ke(t), null;
      case 19:
        if (Te(Ie), s = t.memoizedState, s === null) return Ke(t), null;
        if (r = (t.flags & 128) !== 0, d = s.rendering, d === null) if (r) Zr(s, !1);
        else {
          if (je !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (d = Jl(e), d !== null) {
              for (t.flags |= 128, Zr(s, !1), r = d.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, d = s.alternate, d === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = d.childLanes, s.lanes = d.lanes, s.child = d.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = d.memoizedProps, s.memoizedState = d.memoizedState, s.updateQueue = d.updateQueue, s.type = d.type, e = d.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Se(Ie, Ie.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          s.tail !== null && Oe() > ur && (t.flags |= 128, r = !0, Zr(s, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Jl(d), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(s, !0), s.tail === null && s.tailMode === "hidden" && !d.alternate && !Me) return Ke(t), null;
          } else 2 * Oe() - s.renderingStartTime > ur && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(s, !1), t.lanes = 4194304);
          s.isBackwards ? (d.sibling = t.child, t.child = d) : (n = s.last, n !== null ? n.sibling = d : t.child = d, s.last = d);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Oe(), t.sibling = null, n = Ie.current, Se(Ie, r ? n & 1 | 2 : n & 1), t) : (Ke(t), null);
      case 22:
      case 23:
        return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (ct & 1073741824) !== 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Hm(e, t) {
    switch (Ao(t), t.tag) {
      case 1:
        return et(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ar(), Te(Ze), Te(qe), Go(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Yo(t), null;
      case 13:
        if (Te(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          tr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Te(Ie), null;
      case 4:
        return ar(), null;
      case 10:
        return Wo(t.type._context), null;
      case 22:
      case 23:
        return Ri(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ia = !1, Ge = !1, Vm = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function ir(e, t) {
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
  function Qm(e, t) {
    if (Ro = Tl, e = du(), Eo(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset, s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var d = 0, g = -1, E = -1, I = 0, b = 0, U = e, A = null;
          t: for (; ; ) {
            for (var Y; U !== n || a !== 0 && U.nodeType !== 3 || (g = d + a), U !== s || r !== 0 && U.nodeType !== 3 || (E = d + r), U.nodeType === 3 && (d += U.nodeValue.length), (Y = U.firstChild) !== null; )
              A = U, U = Y;
            for (; ; ) {
              if (U === e) break t;
              if (A === n && ++I === a && (g = d), A === s && ++b === r && (E = d), (Y = U.nextSibling) !== null) break;
              U = A, A = U.parentNode;
            }
            U = Y;
          }
          n = g === -1 || E === -1 ? null : { start: g, end: E };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Po = { focusedElem: e, selectionRange: n }, Tl = !1, G = t; G !== null; ) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
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
              var Z = J.memoizedProps, Ae = J.memoizedState, T = t.stateNode, k = T.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : xt(t.type, Z), Ae);
              T.__reactInternalSnapshotBeforeUpdate = k;
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
      } catch (B) {
        ze(t, t.return, B);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, G = e;
        break;
      }
      G = t.return;
    }
    return J = $c, $c = !1, J;
  }
  function el(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var a = r = r.next;
      do {
        if ((a.tag & e) === e) {
          var s = a.destroy;
          a.destroy = void 0, s !== void 0 && vi(t, n, s);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function sa(e, t) {
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
    t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[It], delete t[Wr], delete t[$o], delete t[Rm], delete t[Pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = bl));
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  function _i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (_i(e, t, n), e = e.sibling; e !== null; ) _i(e, t, n), e = e.sibling;
  }
  var Ve = null, Nt = !1;
  function dn(e, t, n) {
    for (n = n.child; n !== null; ) Ac(e, t, n), n = n.sibling;
  }
  function Ac(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
      Lt.onCommitFiberUnmount(wl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || ir(n, t);
      case 6:
        var r = Ve, a = Nt;
        Ve = null, dn(e, t, n), Ve = r, Nt = a, Ve !== null && (Nt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ve.removeChild(n.stateNode));
        break;
      case 18:
        Ve !== null && (Nt ? (e = Ve, n = n.stateNode, e.nodeType === 8 ? Io(e.parentNode, n) : e.nodeType === 1 && Io(e, n), Ir(e)) : Io(Ve, n.stateNode));
        break;
      case 4:
        r = Ve, a = Nt, Ve = n.stateNode.containerInfo, Nt = !0, dn(e, t, n), Ve = r, Nt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          a = r = r.next;
          do {
            var s = a, d = s.destroy;
            s = s.tag, d !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && vi(n, t, d), a = a.next;
          } while (a !== r);
        }
        dn(e, t, n);
        break;
      case 1:
        if (!Ge && (ir(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n === null && (n = e.stateNode = new Vm()), t.forEach(function(r) {
        var a = tp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
    }
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var s = e, d = t, g = d;
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
        Ac(s, d, a), Ve = null, Nt = !1;
        var E = a.alternate;
        E !== null && (E.return = null), a.return = null;
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
            el(3, e, e.return), sa(3, e);
          } catch (Z) {
            ze(e, e.return, Z);
          }
          try {
            el(5, e, e.return);
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
            wr(a, "");
          } catch (Z) {
            ze(e, e.return, Z);
          }
        }
        if (r & 4 && (a = e.stateNode, a != null)) {
          var s = e.memoizedProps, d = n !== null ? n.memoizedProps : s, g = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            g === "input" && s.type === "radio" && s.name != null && ms(a, s), Ka(g, d);
            var I = Ka(g, s);
            for (d = 0; d < E.length; d += 2) {
              var b = E[d], U = E[d + 1];
              b === "style" ? ws(a, U) : b === "dangerouslySetInnerHTML" ? _s(a, U) : b === "children" ? wr(a, U) : O(a, b, U, I);
            }
            switch (g) {
              case "input":
                Ha(a, s);
                break;
              case "textarea":
                vs(a, s);
                break;
              case "select":
                var A = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!s.multiple;
                var Y = s.value;
                Y != null ? jn(a, !!s.multiple, Y, !1) : A !== !!s.multiple && (s.defaultValue != null ? jn(
                  a,
                  !!s.multiple,
                  s.defaultValue,
                  !0
                ) : jn(a, !!s.multiple, s.multiple ? [] : "", !1));
            }
            a[Wr] = s;
          } catch (Z) {
            ze(e, e.return, Z);
          }
        }
        break;
      case 6:
        if (Tt(t, e), zt(e), r & 4) {
          if (e.stateNode === null) throw Error(i(162));
          a = e.stateNode, s = e.memoizedProps;
          try {
            a.nodeValue = s;
          } catch (Z) {
            ze(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (Tt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ir(t.containerInfo);
        } catch (Z) {
          ze(e, e.return, Z);
        }
        break;
      case 4:
        Tt(t, e), zt(e);
        break;
      case 13:
        Tt(t, e), zt(e), a = e.child, a.flags & 8192 && (s = a.memoizedState !== null, a.stateNode.isHidden = s, !s || a.alternate !== null && a.alternate.memoizedState !== null || (ki = Oe())), r & 4 && Fc(e);
        break;
      case 22:
        if (b = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (I = Ge) || b, Tt(t, e), Ge = I) : Tt(t, e), zt(e), r & 8192) {
          if (I = e.memoizedState !== null, (e.stateNode.isHidden = I) && !b && (e.mode & 1) !== 0) for (G = e, b = e.child; b !== null; ) {
            for (U = G = b; G !== null; ) {
              switch (A = G, Y = A.child, A.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  el(4, A, A.return);
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
                    Bc(U);
                    continue;
                  }
              }
              Y !== null ? (Y.return = A, G = Y) : Bc(U);
            }
            b = b.sibling;
          }
          e: for (b = null, U = e; ; ) {
            if (U.tag === 5) {
              if (b === null) {
                b = U;
                try {
                  a = U.stateNode, I ? (s = a.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (g = U.stateNode, E = U.memoizedProps.style, d = E != null && E.hasOwnProperty("display") ? E.display : null, g.style.display = Es("display", d));
                } catch (Z) {
                  ze(e, e.return, Z);
                }
              }
            } else if (U.tag === 6) {
              if (b === null) try {
                U.stateNode.nodeValue = I ? "" : U.memoizedProps;
              } catch (Z) {
                ze(e, e.return, Z);
              }
            } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === e) && U.child !== null) {
              U.child.return = U, U = U.child;
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              b === U && (b = null), U = U.return;
            }
            b === U && (b = null), U.sibling.return = U.return, U = U.sibling;
          }
        }
        break;
      case 19:
        Tt(t, e), zt(e), r & 4 && Fc(e);
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
            if (zc(n)) {
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
            r.flags & 32 && (wr(a, ""), r.flags &= -33);
            var s = Oc(e);
            _i(e, s, a);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo, g = Oc(e);
            gi(e, g, d);
            break;
          default:
            throw Error(i(161));
        }
      } catch (E) {
        ze(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qm(e, t, n) {
    G = e, jc(e);
  }
  function jc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
      var a = G, s = a.child;
      if (a.tag === 22 && r) {
        var d = a.memoizedState !== null || ia;
        if (!d) {
          var g = a.alternate, E = g !== null && g.memoizedState !== null || Ge;
          g = ia;
          var I = Ge;
          if (ia = d, (Ge = E) && !I) for (G = a; G !== null; ) d = G, E = d.child, d.tag === 22 && d.memoizedState !== null ? Wc(a) : E !== null ? (E.return = d, G = E) : Wc(a);
          for (; s !== null; ) G = s, jc(s), s = s.sibling;
          G = a, ia = g, Ge = I;
        }
        Uc(e);
      } else (a.subtreeFlags & 8772) !== 0 && s !== null ? (s.return = a, G = s) : Uc(e);
    }
  }
  function Uc(e) {
    for (; G !== null; ) {
      var t = G;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || sa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var a = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var s = t.updateQueue;
              s !== null && Bu(t, s, r);
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
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
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
                  var b = I.memoizedState;
                  if (b !== null) {
                    var U = b.dehydrated;
                    U !== null && Ir(U);
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
          Ge || t.flags & 512 && yi(t);
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
  function Bc(e) {
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
  function Wc(e) {
    for (; G !== null; ) {
      var t = G;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              sa(4, t);
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
            var s = t.return;
            try {
              yi(t);
            } catch (E) {
              ze(t, s, E);
            }
            break;
          case 5:
            var d = t.return;
            try {
              yi(t);
            } catch (E) {
              ze(t, d, E);
            }
        }
      } catch (E) {
        ze(t, t.return, E);
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
  var Ym = Math.ceil, ua = z.ReactCurrentDispatcher, Ei = z.ReactCurrentOwner, gt = z.ReactCurrentBatchConfig, me = 0, Be = null, Fe = null, Qe = 0, ct = 0, sr = an(0), je = 0, tl = null, Mn = 0, ca = 0, wi = 0, nl = null, nt = null, ki = 0, ur = 1 / 0, Yt = null, da = !1, Si = null, fn = null, fa = !1, mn = null, ma = 0, rl = 0, Ci = null, pa = -1, ha = 0;
  function Je() {
    return (me & 6) !== 0 ? Oe() : pa !== -1 ? pa : pa = Oe();
  }
  function pn(e) {
    return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && Qe !== 0 ? Qe & -Qe : Lm.transition !== null ? (ha === 0 && (ha = Os()), ha) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e);
  }
  function Rt(e, t, n, r) {
    if (50 < rl) throw rl = 0, Ci = null, Error(i(185));
    Tr(e, n, r), ((me & 2) === 0 || e !== Be) && (e === Be && ((me & 2) === 0 && (ca |= n), je === 4 && hn(e, Qe)), rt(e, r), n === 1 && me === 0 && (t.mode & 1) === 0 && (ur = Oe() + 500, Wl && sn()));
  }
  function rt(e, t) {
    var n = e.callbackNode;
    Lf(e, t);
    var r = Cl(e, e === Be ? Qe : 0);
    if (r === 0) n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && $s(n), t === 1) e.tag === 0 ? Mm(Vc.bind(null, e)) : Mu(Vc.bind(null, e)), Nm(function() {
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
            n = El;
            break;
          case 536870912:
            n = zs;
            break;
          default:
            n = El;
        }
        n = Zc(n, Hc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Hc(e, t) {
    if (pa = -1, ha = 0, (me & 6) !== 0) throw Error(i(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n) return null;
    var r = Cl(e, e === Be ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = va(e, r);
    else {
      t = r;
      var a = me;
      me |= 2;
      var s = qc();
      (Be !== e || Qe !== t) && (Yt = null, ur = Oe() + 500, In(e, t));
      do
        try {
          Xm();
          break;
        } catch (g) {
          Qc(e, g);
        }
      while (!0);
      Bo(), ua.current = s, me = a, Fe !== null ? t = 0 : (Be = null, Qe = 0, t = je);
    }
    if (t !== 0) {
      if (t === 2 && (a = ro(e), a !== 0 && (r = a, t = xi(e, a))), t === 1) throw n = tl, In(e, 0), hn(e, r), rt(e, Oe()), n;
      if (t === 6) hn(e, r);
      else {
        if (a = e.current.alternate, (r & 30) === 0 && !Km(a) && (t = va(e, r), t === 2 && (s = ro(e), s !== 0 && (r = s, t = xi(e, s))), t === 1)) throw n = tl, In(e, 0), hn(e, r), rt(e, Oe()), n;
        switch (e.finishedWork = a, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            $n(e, nt, Yt);
            break;
          case 3:
            if (hn(e, r), (r & 130023424) === r && (t = ki + 500 - Oe(), 10 < t)) {
              if (Cl(e, 0) !== 0) break;
              if (a = e.suspendedLanes, (a & r) !== r) {
                Je(), e.pingedLanes |= e.suspendedLanes & a;
                break;
              }
              e.timeoutHandle = Lo($n.bind(null, e, nt, Yt), t);
              break;
            }
            $n(e, nt, Yt);
            break;
          case 4:
            if (hn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var d = 31 - kt(r);
              s = 1 << d, d = t[d], d > a && (a = d), r &= ~s;
            }
            if (r = a, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ym(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Lo($n.bind(null, e, nt, Yt), r);
              break;
            }
            $n(e, nt, Yt);
            break;
          case 5:
            $n(e, nt, Yt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return rt(e, Oe()), e.callbackNode === n ? Hc.bind(null, e) : null;
  }
  function xi(e, t) {
    var n = nl;
    return e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256), e = va(e, t), e !== 2 && (t = nt, nt = n, t !== null && Ni(t)), e;
  }
  function Ni(e) {
    nt === null ? nt = e : nt.push.apply(nt, e);
  }
  function Km(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var a = n[r], s = a.getSnapshot;
          a = a.value;
          try {
            if (!St(s(), a)) return !1;
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
    for (t &= ~wi, t &= ~ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - kt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Vc(e) {
    if ((me & 6) !== 0) throw Error(i(327));
    cr();
    var t = Cl(e, 0);
    if ((t & 1) === 0) return rt(e, Oe()), null;
    var n = va(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ro(e);
      r !== 0 && (t = r, n = xi(e, r));
    }
    if (n === 1) throw n = tl, In(e, 0), hn(e, t), rt(e, Oe()), n;
    if (n === 6) throw Error(i(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, $n(e, nt, Yt), rt(e, Oe()), null;
  }
  function Ti(e, t) {
    var n = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      me = n, me === 0 && (ur = Oe() + 500, Wl && sn());
    }
  }
  function Ln(e) {
    mn !== null && mn.tag === 0 && (me & 6) === 0 && cr();
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
    ct = sr.current, Te(sr);
  }
  function In(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, xm(n)), Fe !== null) for (n = Fe.return; n !== null; ) {
      var r = n;
      switch (Ao(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ul();
          break;
        case 3:
          ar(), Te(Ze), Te(qe), Go();
          break;
        case 5:
          Yo(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          Te(Ie);
          break;
        case 19:
          Te(Ie);
          break;
        case 10:
          Wo(r.type._context);
          break;
        case 22:
        case 23:
          Ri();
      }
      n = n.return;
    }
    if (Be = e, Fe = e = vn(e.current, null), Qe = ct = t, je = 0, tl = null, wi = ca = Mn = 0, nt = nl = null, Tn !== null) {
      for (t = 0; t < Tn.length; t++) if (n = Tn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var a = r.next, s = n.pending;
        if (s !== null) {
          var d = s.next;
          s.next = a, r.next = d;
        }
        n.pending = r;
      }
      Tn = null;
    }
    return e;
  }
  function Qc(e, t) {
    do {
      var n = Fe;
      try {
        if (Bo(), Zl.current = ra, ea) {
          for (var r = $e.memoizedState; r !== null; ) {
            var a = r.queue;
            a !== null && (a.pending = null), r = r.next;
          }
          ea = !1;
        }
        if (Pn = 0, Ue = be = $e = null, Kr = !1, Gr = 0, Ei.current = null, n === null || n.return === null) {
          je = 1, tl = t, Fe = null;
          break;
        }
        e: {
          var s = e, d = n.return, g = n, E = t;
          if (t = Qe, g.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var I = E, b = g, U = b.tag;
            if ((b.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var A = b.alternate;
              A ? (b.updateQueue = A.updateQueue, b.memoizedState = A.memoizedState, b.lanes = A.lanes) : (b.updateQueue = null, b.memoizedState = null);
            }
            var Y = yc(d);
            if (Y !== null) {
              Y.flags &= -257, gc(Y, d, g, s, t), Y.mode & 1 && vc(s, I, t), t = Y, E = I;
              var J = t.updateQueue;
              if (J === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(E), t.updateQueue = Z;
              } else J.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                vc(s, I, t), Pi();
                break e;
              }
              E = Error(i(426));
            }
          } else if (Me && g.mode & 1) {
            var Ae = yc(d);
            if (Ae !== null) {
              (Ae.flags & 65536) === 0 && (Ae.flags |= 256), gc(Ae, d, g, s, t), jo(or(E, g));
              break e;
            }
          }
          s = E = or(E, g), je !== 4 && (je = 2), nl === null ? nl = [s] : nl.push(s), s = d;
          do {
            switch (s.tag) {
              case 3:
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var T = pc(s, E, t);
                Uu(s, T);
                break e;
              case 1:
                g = E;
                var k = s.type, R = s.stateNode;
                if ((s.flags & 128) === 0 && (typeof k.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (fn === null || !fn.has(R)))) {
                  s.flags |= 65536, t &= -t, s.lanes |= t;
                  var B = hc(s, g, t);
                  Uu(s, B);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Kc(n);
      } catch (te) {
        t = te, Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qc() {
    var e = ua.current;
    return ua.current = ra, e === null ? ra : e;
  }
  function Pi() {
    (je === 0 || je === 3 || je === 2) && (je = 4), Be === null || (Mn & 268435455) === 0 && (ca & 268435455) === 0 || hn(Be, Qe);
  }
  function va(e, t) {
    var n = me;
    me |= 2;
    var r = qc();
    (Be !== e || Qe !== t) && (Yt = null, In(e, t));
    do
      try {
        Gm();
        break;
      } catch (a) {
        Qc(e, a);
      }
    while (!0);
    if (Bo(), me = n, ua.current = r, Fe !== null) throw Error(i(261));
    return Be = null, Qe = 0, je;
  }
  function Gm() {
    for (; Fe !== null; ) Yc(Fe);
  }
  function Xm() {
    for (; Fe !== null && !kf(); ) Yc(Fe);
  }
  function Yc(e) {
    var t = Jc(e.alternate, e, ct);
    e.memoizedProps = e.pendingProps, t === null ? Kc(e) : Fe = t, Ei.current = null;
  }
  function Kc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wm(n, t, ct), n !== null) {
          Fe = n;
          return;
        }
      } else {
        if (n = Hm(n, t), n !== null) {
          n.flags &= 32767, Fe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          je = 6, Fe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function $n(e, t, n) {
    var r = we, a = gt.transition;
    try {
      gt.transition = null, we = 1, Jm(e, t, n, r);
    } finally {
      gt.transition = a, we = r;
    }
    return null;
  }
  function Jm(e, t, n, r) {
    do
      cr();
    while (mn !== null);
    if ((me & 6) !== 0) throw Error(i(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (If(e, s), e === Be && (Fe = Be = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || fa || (fa = !0, Zc(El, function() {
      return cr(), null;
    })), s = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || s) {
      s = gt.transition, gt.transition = null;
      var d = we;
      we = 1;
      var g = me;
      me |= 4, Ei.current = null, Qm(e, n), bc(n, e), gm(Po), Tl = !!Ro, Po = Ro = null, e.current = n, qm(n), Sf(), me = g, we = d, gt.transition = s;
    } else e.current = n;
    if (fa && (fa = !1, mn = e, ma = a), s = e.pendingLanes, s === 0 && (fn = null), Nf(n.stateNode), rt(e, Oe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
    if (da) throw da = !1, e = Si, Si = null, e;
    return (ma & 1) !== 0 && e.tag !== 0 && cr(), s = e.pendingLanes, (s & 1) !== 0 ? e === Ci ? rl++ : (rl = 0, Ci = e) : rl = 0, sn(), null;
  }
  function cr() {
    if (mn !== null) {
      var e = As(ma), t = gt.transition, n = we;
      try {
        if (gt.transition = null, we = 16 > e ? 16 : e, mn === null) var r = !1;
        else {
          if (e = mn, mn = null, ma = 0, (me & 6) !== 0) throw Error(i(331));
          var a = me;
          for (me |= 4, G = e.current; G !== null; ) {
            var s = G, d = s.child;
            if ((G.flags & 16) !== 0) {
              var g = s.deletions;
              if (g !== null) {
                for (var E = 0; E < g.length; E++) {
                  var I = g[E];
                  for (G = I; G !== null; ) {
                    var b = G;
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        el(8, b, s);
                    }
                    var U = b.child;
                    if (U !== null) U.return = b, G = U;
                    else for (; G !== null; ) {
                      b = G;
                      var A = b.sibling, Y = b.return;
                      if (Dc(b), b === I) {
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
                var J = s.alternate;
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
                G = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && d !== null) d.return = s, G = d;
            else e: for (; G !== null; ) {
              if (s = G, (s.flags & 2048) !== 0) switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  el(9, s, s.return);
              }
              var T = s.sibling;
              if (T !== null) {
                T.return = s.return, G = T;
                break e;
              }
              G = s.return;
            }
          }
          var k = e.current;
          for (G = k; G !== null; ) {
            d = G;
            var R = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && R !== null) R.return = d, G = R;
            else e: for (d = k; G !== null; ) {
              if (g = G, (g.flags & 2048) !== 0) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sa(9, g);
                }
              } catch (te) {
                ze(g, g.return, te);
              }
              if (g === d) {
                G = null;
                break e;
              }
              var B = g.sibling;
              if (B !== null) {
                B.return = g.return, G = B;
                break e;
              }
              G = g.return;
            }
          }
          if (me = a, sn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
            Lt.onPostCommitFiberRoot(wl, e);
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
    t = or(n, t), t = pc(e, t, 1), e = cn(e, t, 1), t = Je(), e !== null && (Tr(e, 1, t), rt(e, t));
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
          e = or(n, e), e = hc(t, e, 1), t = cn(t, e, 1), e = Je(), t !== null && (Tr(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Je(), e.pingedLanes |= e.suspendedLanes & n, Be === e && (Qe & n) === n && (je === 4 || je === 3 && (Qe & 130023424) === Qe && 500 > Oe() - ki ? In(e, 0) : wi |= n), rt(e, t);
  }
  function Xc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Sl, Sl <<= 1, (Sl & 130023424) === 0 && (Sl = 4194304)));
    var n = Je();
    e = Vt(e, t), e !== null && (Tr(e, t, n), rt(e, n));
  }
  function ep(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Xc(e, n);
  }
  function tp(e, t) {
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
    r !== null && r.delete(t), Xc(e, n);
  }
  var Jc;
  Jc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) tt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return tt = !1, Bm(e, t, n);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, Me && (t.flags & 1048576) !== 0 && Lu(t, Vl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        oa(e, t), e = t.pendingProps;
        var a = Jn(t, qe.current);
        lr(t, n), a = Zo(null, t, r, e, a, n);
        var s = ei();
        return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, et(r) ? (s = !0, Bl(t)) : s = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Qo(t), a.updater = la, t.stateNode = a, a._reactInternals = t, oi(t, r, e, n), t = ci(null, t, r, !0, s, n)) : (t.tag = 0, Me && s && Oo(t), Xe(null, t, a, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (oa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = rp(r), e = xt(r, e), a) {
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
          throw Error(i(
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
          if (xc(t), e === null) throw Error(i(387));
          r = t.pendingProps, s = t.memoizedState, a = s.element, ju(e, t), Xl(t, r, null, n);
          var d = t.memoizedState;
          if (r = d.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: d.cache, pendingSuspenseBoundaries: d.pendingSuspenseBoundaries, transitions: d.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
            a = or(Error(i(423)), t), t = Nc(e, t, r, n, a);
            break e;
          } else if (r !== a) {
            a = or(Error(i(424)), t), t = Nc(e, t, r, n, a);
            break e;
          } else for (ut = ln(t.stateNode.containerInfo.firstChild), st = t, Me = !0, Ct = null, n = Fu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (tr(), r === a) {
              t = qt(e, t, n);
              break e;
            }
            Xe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Wu(t), e === null && bo(t), r = t.type, a = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = a.children, Mo(r, a) ? d = null : s !== null && Mo(r, s) && (t.flags |= 32), Sc(e, t), Xe(e, t, d, n), t.child;
      case 6:
        return e === null && bo(t), null;
      case 13:
        return Tc(e, t, n);
      case 4:
        return qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Xe(e, t, r, n), t.child;
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
          if (r = t.type._context, a = t.pendingProps, s = t.memoizedProps, d = a.value, Se(Yl, r._currentValue), r._currentValue = d, s !== null) if (St(s.value, d)) {
            if (s.children === a.children && !Ze.current) {
              t = qt(e, t, n);
              break e;
            }
          } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
            var g = s.dependencies;
            if (g !== null) {
              d = s.child;
              for (var E = g.firstContext; E !== null; ) {
                if (E.context === r) {
                  if (s.tag === 1) {
                    E = Qt(-1, n & -n), E.tag = 2;
                    var I = s.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var b = I.pending;
                      b === null ? E.next = E : (E.next = b.next, b.next = E), I.pending = E;
                    }
                  }
                  s.lanes |= n, E = s.alternate, E !== null && (E.lanes |= n), Ho(
                    s.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                E = E.next;
              }
            } else if (s.tag === 10) d = s.type === t.type ? null : s.child;
            else if (s.tag === 18) {
              if (d = s.return, d === null) throw Error(i(341));
              d.lanes |= n, g = d.alternate, g !== null && (g.lanes |= n), Ho(d, n, t), d = s.sibling;
            } else d = s.child;
            if (d !== null) d.return = s;
            else for (d = s; d !== null; ) {
              if (d === t) {
                d = null;
                break;
              }
              if (s = d.sibling, s !== null) {
                s.return = d.return, d = s;
                break;
              }
              d = d.return;
            }
            s = d;
          }
          Xe(e, t, a.children, n), t = t.child;
        }
        return t;
      case 9:
        return a = t.type, r = t.pendingProps.children, lr(t, n), a = vt(a), r = r(a), t.flags |= 1, Xe(e, t, r, n), t.child;
      case 14:
        return r = t.type, a = xt(r, t.pendingProps), a = xt(r.type, a), Ec(e, t, r, a, n);
      case 15:
        return wc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : xt(r, a), oa(e, t), t.tag = 1, et(r) ? (e = !0, Bl(t)) : e = !1, lr(t, n), fc(t, r, a), oi(t, r, a, n), ci(null, t, r, !0, e, n);
      case 19:
        return Pc(e, t, n);
      case 22:
        return kc(e, t, n);
    }
    throw Error(i(156, t.tag));
  };
  function Zc(e, t) {
    return Is(e, t);
  }
  function np(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _t(e, t, n, r) {
    return new np(e, t, n, r);
  }
  function Mi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function rp(e) {
    if (typeof e == "function") return Mi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ue) return 11;
      if (e === q) return 14;
    }
    return 2;
  }
  function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = _t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ya(e, t, n, r, a, s) {
    var d = 2;
    if (r = e, typeof e == "function") Mi(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else e: switch (e) {
      case ee:
        return Dn(n.children, a, s, t);
      case ne:
        d = 8, a |= 8;
        break;
      case ye:
        return e = _t(12, n, t, a | 2), e.elementType = ye, e.lanes = s, e;
      case xe:
        return e = _t(13, n, t, a), e.elementType = xe, e.lanes = s, e;
      case Q:
        return e = _t(19, n, t, a), e.elementType = Q, e.lanes = s, e;
      case De:
        return ga(n, a, s, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ge:
            d = 10;
            break e;
          case K:
            d = 9;
            break e;
          case ue:
            d = 11;
            break e;
          case q:
            d = 14;
            break e;
          case Re:
            d = 16, r = null;
            break e;
        }
        throw Error(i(130, e == null ? e : typeof e, ""));
    }
    return t = _t(d, n, t, a), t.elementType = e, t.type = r, t.lanes = s, t;
  }
  function Dn(e, t, n, r) {
    return e = _t(7, e, r, t), e.lanes = n, e;
  }
  function ga(e, t, n, r) {
    return e = _t(22, e, r, t), e.elementType = De, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Li(e, t, n) {
    return e = _t(6, e, null, t), e.lanes = n, e;
  }
  function Ii(e, t, n) {
    return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function lp(e, t, n, r, a) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
  }
  function $i(e, t, n, r, a, s, d, g, E) {
    return e = new lp(e, t, n, g, E), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = _t(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qo(s), e;
  }
  function ap(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: j, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ed(e) {
    if (!e) return on;
    e = e._reactInternals;
    e: {
      if (kn(e) !== e || e.tag !== 1) throw Error(i(170));
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
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (et(n)) return Ru(e, n, t);
    }
    return t;
  }
  function td(e, t, n, r, a, s, d, g, E) {
    return e = $i(n, r, !0, e, a, s, d, g, E), e.context = ed(null), n = e.current, r = Je(), a = pn(n), s = Qt(r, a), s.callback = t ?? null, cn(n, s, a), e.current.lanes = a, Tr(e, a, r), rt(e, r), e;
  }
  function _a(e, t, n, r) {
    var a = t.current, s = Je(), d = pn(a);
    return n = ed(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qt(s, d), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = cn(a, t, d), e !== null && (Rt(e, a, d, s), Gl(e, a, d)), d;
  }
  function Ea(e) {
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
  function op() {
    return null;
  }
  var rd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function zi(e) {
    this._internalRoot = e;
  }
  wa.prototype.render = zi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    _a(e, t, null, null);
  }, wa.prototype.unmount = zi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ln(function() {
        _a(null, e, null, null);
      }), t[Ut] = null;
    }
  };
  function wa(e) {
    this._internalRoot = e;
  }
  wa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = js();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
      tn.splice(n, 0, e), n === 0 && Ws(e);
    }
  };
  function Oi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ka(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ld() {
  }
  function ip(e, t, n, r, a) {
    if (a) {
      if (typeof r == "function") {
        var s = r;
        r = function() {
          var I = Ea(d);
          s.call(I);
        };
      }
      var d = td(t, r, e, 0, null, !1, !1, "", ld);
      return e._reactRootContainer = d, e[Ut] = d.current, Ur(e.nodeType === 8 ? e.parentNode : e), Ln(), d;
    }
    for (; a = e.lastChild; ) e.removeChild(a);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var I = Ea(E);
        g.call(I);
      };
    }
    var E = $i(e, 0, !1, null, null, !1, !1, "", ld);
    return e._reactRootContainer = E, e[Ut] = E.current, Ur(e.nodeType === 8 ? e.parentNode : e), Ln(function() {
      _a(t, E, n, r);
    }), E;
  }
  function Sa(e, t, n, r, a) {
    var s = n._reactRootContainer;
    if (s) {
      var d = s;
      if (typeof a == "function") {
        var g = a;
        a = function() {
          var E = Ea(d);
          g.call(E);
        };
      }
      _a(t, d, e, a);
    } else d = ip(n, t, e, a, r);
    return Ea(d);
  }
  Fs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Nr(t.pendingLanes);
          n !== 0 && (ao(t, n | 1), rt(t, Oe()), (me & 6) === 0 && (ur = Oe() + 500, sn()));
        }
        break;
      case 13:
        Ln(function() {
          var r = Vt(e, 1);
          if (r !== null) {
            var a = Je();
            Rt(r, e, 1, a);
          }
        }), Di(e, 1);
    }
  }, oo = function(e) {
    if (e.tag === 13) {
      var t = Vt(e, 134217728);
      if (t !== null) {
        var n = Je();
        Rt(t, e, 134217728, n);
      }
      Di(e, 134217728);
    }
  }, bs = function(e) {
    if (e.tag === 13) {
      var t = pn(e), n = Vt(e, t);
      if (n !== null) {
        var r = Je();
        Rt(n, e, t, r);
      }
      Di(e, t);
    }
  }, js = function() {
    return we;
  }, Us = function(e, t) {
    var n = we;
    try {
      return we = e, t();
    } finally {
      we = n;
    }
  }, Ja = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ha(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var a = jl(r);
              if (!a) throw Error(i(90));
              ds(r), Ha(r, a);
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
  }, xs = Ti, Ns = Ln;
  var sp = { usingClientEntryPoint: !1, Events: [Hr, Gn, jl, Ss, Cs, Ti] }, ll = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, up = { bundleType: ll.bundleType, version: ll.version, rendererPackageName: ll.rendererPackageName, rendererConfig: ll.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ms(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ll.findFiberByHostInstance || op, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ca = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ca.isDisabled && Ca.supportsFiber) try {
      wl = Ca.inject(up), Lt = Ca;
    } catch {
    }
  }
  return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp, lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oi(t)) throw Error(i(200));
    return ap(e, t, null, n);
  }, lt.createRoot = function(e, t) {
    if (!Oi(e)) throw Error(i(299));
    var n = !1, r = "", a = rd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = $i(e, 1, !1, null, null, n, !1, r, a), e[Ut] = t.current, Ur(e.nodeType === 8 ? e.parentNode : e), new zi(t);
  }, lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = Ms(t), e = e === null ? null : e.stateNode, e;
  }, lt.flushSync = function(e) {
    return Ln(e);
  }, lt.hydrate = function(e, t, n) {
    if (!ka(t)) throw Error(i(200));
    return Sa(null, e, t, !0, n);
  }, lt.hydrateRoot = function(e, t, n) {
    if (!Oi(e)) throw Error(i(405));
    var r = n != null && n.hydratedSources || null, a = !1, s = "", d = rd;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (d = n.onRecoverableError)), t = td(t, null, e, 1, n ?? null, a, !1, s, d), e[Ut] = t.current, Ur(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
      n,
      a
    );
    return new wa(t);
  }, lt.render = function(e, t, n) {
    if (!ka(t)) throw Error(i(200));
    return Sa(null, e, t, !1, n);
  }, lt.unmountComponentAtNode = function(e) {
    if (!ka(e)) throw Error(i(40));
    return e._reactRootContainer ? (Ln(function() {
      Sa(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ut] = null;
      });
    }), !0) : !1;
  }, lt.unstable_batchedUpdates = Ti, lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ka(n)) throw Error(i(200));
    if (e == null || e._reactInternals === void 0) throw Error(i(38));
    return Sa(e, t, n, !1, r);
  }, lt.version = "18.3.1-next-f1338f8080-20240426", lt;
}
var cd;
function hp() {
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
  return l(), Fi.exports = pp(), Fi.exports;
}
var dd;
function vp() {
  if (dd) return xa;
  dd = 1;
  var l = hp();
  return xa.createRoot = l.createRoot, xa.hydrateRoot = l.hydrateRoot, xa;
}
var yp = vp();
const gp = /* @__PURE__ */ Od(yp);
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
function _p(l = {}) {
  function o(f, m) {
    let {
      pathname: p = "/",
      search: h = "",
      hash: y = ""
    } = Fn(f.location.hash.substring(1));
    return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), Zi(
      "",
      { pathname: p, search: h, hash: y },
      // state defaults to `null` because `window.history.state` does
      m.state && m.state.usr || null,
      m.state && m.state.key || "default"
    );
  }
  function i(f, m) {
    let p = f.document.querySelector("base"), h = "";
    if (p && p.getAttribute("href")) {
      let y = f.location.href, S = y.indexOf("#");
      h = S === -1 ? y : y.slice(0, S);
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
  return wp(
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
function Ep() {
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
function Zi(l, o, i = null, c, f) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof o == "string" ? Fn(o) : o,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || c || Ep(),
    mask: f
  };
}
function cl({
  pathname: l = "/",
  search: o = "",
  hash: i = ""
}) {
  return o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o), i && i !== "#" && (l += i.charAt(0) === "#" ? i : "#" + i), l;
}
function Fn(l) {
  let o = {};
  if (l) {
    let i = l.indexOf("#");
    i >= 0 && (o.hash = l.substring(i), l = l.substring(0, i));
    let c = l.indexOf("?");
    c >= 0 && (o.search = l.substring(c), l = l.substring(0, c)), l && (o.pathname = l);
  }
  return o;
}
function wp(l, o, i, c = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = c, p = f.history, h = "POP", y = null, S = N();
  S == null && (S = 0, p.replaceState({ ...p.state, idx: S }, ""));
  function N() {
    return (p.state || { idx: null }).idx;
  }
  function _() {
    h = "POP";
    let w = N(), P = w == null ? null : w - S;
    S = w, y && y({ action: h, location: $.location, delta: P });
  }
  function C(w, P) {
    h = "PUSH";
    let M = md(w) ? w : Zi($.location, w, P);
    i && i(M, w), S = N() + 1;
    let O = pd(M, S), z = $.createHref(M.mask || M);
    try {
      p.pushState(O, "", z);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      f.location.assign(z);
    }
    m && y && y({ action: h, location: $.location, delta: 1 });
  }
  function L(w, P) {
    h = "REPLACE";
    let M = md(w) ? w : Zi($.location, w, P);
    i && i(M, w), S = N();
    let O = pd(M, S), z = $.createHref(M.mask || M);
    p.replaceState(O, "", z), m && y && y({ action: h, location: $.location, delta: 0 });
  }
  function D(w) {
    return kp(f, w);
  }
  let $ = {
    get action() {
      return h;
    },
    get location() {
      return l(f, p);
    },
    listen(w) {
      if (y)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(fd, _), y = w, () => {
        f.removeEventListener(fd, _), y = null;
      };
    },
    createHref(w) {
      return o(f, w);
    },
    createURL: D,
    encodeLocation(w) {
      let P = D(w);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: C,
    replace: L,
    go(w) {
      return p.go(w);
    }
  };
  return $;
}
function kp(l, o, i = !1) {
  let c = "http://localhost";
  l && (c = l.location.origin !== "null" ? l.location.origin : l.location.href), Le(c, "No window.location.(origin|href) available to create URL");
  let f = typeof o == "string" ? o : cl(o);
  return f = f.replace(/ $/, "%20"), !i && f.startsWith("//") && (f = c + f), new URL(f, c);
}
function Fd(l, o, i = "/") {
  return Sp(l, o, i, !1);
}
function Sp(l, o, i, c, f) {
  let m = typeof o == "string" ? Fn(o) : o, p = Kt(m.pathname || "/", i);
  if (p == null)
    return null;
  let h = Cp(l), y = null, S = Op(p);
  for (let N = 0; y == null && N < h.length; ++N)
    y = Dp(
      h[N],
      S,
      c
    );
  return y;
}
function Cp(l) {
  let o = bd(l);
  return xp(o), o;
}
function bd(l, o = [], i = [], c = "", f = !1) {
  let m = (p, h, y = f, S) => {
    let N = {
      relativePath: S === void 0 ? p.path || "" : S,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: h,
      route: p
    };
    if (N.relativePath.startsWith("/")) {
      if (!N.relativePath.startsWith(c) && y)
        return;
      Le(
        N.relativePath.startsWith(c),
        `Absolute route path "${N.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), N.relativePath = N.relativePath.slice(c.length);
    }
    let _ = Pt([c, N.relativePath]), C = i.concat(N);
    p.children && p.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${_}".`
    ), bd(
      p.children,
      o,
      C,
      _,
      y
    )), !(p.path == null && !p.index) && o.push({
      path: _,
      score: Ip(_, p.index),
      routesMeta: C
    });
  };
  return l.forEach((p, h) => {
    var y;
    if (p.path === "" || !((y = p.path) != null && y.includes("?")))
      m(p, h);
    else
      for (let S of jd(p.path))
        m(p, h, !0, S);
  }), o;
}
function jd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [i, ...c] = o, f = i.endsWith("?"), m = i.replace(/\?$/, "");
  if (c.length === 0)
    return f ? [m, ""] : [m];
  let p = jd(c.join("/")), h = [];
  return h.push(
    ...p.map(
      (y) => y === "" ? m : [m, y].join("/")
    )
  ), f && h.push(...p), h.map(
    (y) => l.startsWith("/") && y === "" ? "/" : y
  );
}
function xp(l) {
  l.sort(
    (o, i) => o.score !== i.score ? i.score - o.score : $p(
      o.routesMeta.map((c) => c.childrenIndex),
      i.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Np = /^:[\w-]+$/, Tp = 3, Rp = 2, Pp = 1, Mp = 10, Lp = -2, hd = (l) => l === "*";
function Ip(l, o) {
  let i = l.split("/"), c = i.length;
  return i.some(hd) && (c += Lp), o && (c += Rp), i.filter((f) => !hd(f)).reduce(
    (f, m) => f + (Np.test(m) ? Tp : m === "" ? Pp : Mp),
    c
  );
}
function $p(l, o) {
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
function Dp(l, o, i = !1) {
  let { routesMeta: c } = l, f = {}, m = "/", p = [];
  for (let h = 0; h < c.length; ++h) {
    let y = c[h], S = h === c.length - 1, N = m === "/" ? o : o.slice(m.length) || "/", _ = Da(
      { path: y.relativePath, caseSensitive: y.caseSensitive, end: S },
      N
    ), C = y.route;
    if (!_ && S && i && !c[c.length - 1].route.index && (_ = Da(
      {
        path: y.relativePath,
        caseSensitive: y.caseSensitive,
        end: !1
      },
      N
    )), !_)
      return null;
    Object.assign(f, _.params), p.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: Pt([m, _.pathname]),
      pathnameBase: jp(
        Pt([m, _.pathnameBase])
      ),
      route: C
    }), _.pathnameBase !== "/" && (m = Pt([m, _.pathnameBase]));
  }
  return p;
}
function Da(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [i, c] = zp(
    l.path,
    l.caseSensitive,
    l.end
  ), f = o.match(i);
  if (!f) return null;
  let m = f[0], p = m.replace(/(.)\/+$/, "$1"), h = f.slice(1);
  return {
    params: c.reduce(
      (S, { paramName: N, isOptional: _ }, C) => {
        if (N === "*") {
          let D = h[C] || "";
          p = m.slice(0, m.length - D.length).replace(/(.)\/+$/, "$1");
        }
        const L = h[C];
        return _ && !L ? S[N] = void 0 : S[N] = (L || "").replace(/%2F/g, "/"), S;
      },
      {}
    ),
    pathname: m,
    pathnameBase: p,
    pattern: l
  };
}
function zp(l, o = !1, i = !0) {
  Et(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let c = [], f = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, h, y, S, N) => {
      if (c.push({ paramName: h, isOptional: y != null }), y) {
        let _ = N.charAt(S + p.length);
        return _ && _ !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (c.push({ paramName: "*" }), f += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? f += "\\/*$" : l !== "" && l !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, o ? void 0 : "i"), c];
}
function Op(l) {
  try {
    return l.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
  } catch (o) {
    return Et(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
    ), l;
  }
}
function Kt(l, o) {
  if (o === "/") return l;
  if (!l.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length, c = l.charAt(i);
  return c && c !== "/" ? null : l.slice(i) || "/";
}
var Ap = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Fp(l, o = "/") {
  let {
    pathname: i,
    search: c = "",
    hash: f = ""
  } = typeof l == "string" ? Fn(l) : l, m;
  return i ? (i = Ud(i), i.startsWith("/") ? m = vd(i.substring(1), "/") : m = vd(i, o)) : m = o, {
    pathname: m,
    search: Up(c),
    hash: Bp(f)
  };
}
function vd(l, o) {
  let i = za(o).split("/");
  return l.split("/").forEach((f) => {
    f === ".." ? i.length > 1 && i.pop() : f !== "." && i.push(f);
  }), i.length > 1 ? i.join("/") : "/";
}
function Ui(l, o, i, c) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bp(l) {
  return l.filter(
    (o, i) => i === 0 || o.route.path && o.route.path.length > 0
  );
}
function rs(l) {
  let o = bp(l);
  return o.map(
    (i, c) => c === o.length - 1 ? i.pathname : i.pathnameBase
  );
}
function ba(l, o, i, c = !1) {
  let f;
  typeof l == "string" ? f = Fn(l) : (f = { ...l }, Le(
    !f.pathname || !f.pathname.includes("?"),
    Ui("?", "pathname", "search", f)
  ), Le(
    !f.pathname || !f.pathname.includes("#"),
    Ui("#", "pathname", "hash", f)
  ), Le(
    !f.search || !f.search.includes("#"),
    Ui("#", "search", "hash", f)
  ));
  let m = l === "" || f.pathname === "", p = m ? "/" : f.pathname, h;
  if (p == null)
    h = i;
  else {
    let _ = o.length - 1;
    if (!c && p.startsWith("..")) {
      let C = p.split("/");
      for (; C[0] === ".."; )
        C.shift(), _ -= 1;
      f.pathname = C.join("/");
    }
    h = _ >= 0 ? o[_] : "/";
  }
  let y = Fp(f, h), S = p && p !== "/" && p.endsWith("/"), N = (m || p === ".") && i.endsWith("/");
  return !y.pathname.endsWith("/") && (S || N) && (y.pathname += "/"), y;
}
var Ud = (l) => l.replace(/\/\/+/g, "/"), Pt = (l) => Ud(l.join("/")), za = (l) => l.replace(/\/+$/, ""), jp = (l) => za(l).replace(/^\/*/, "/"), Up = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, Bp = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, Wp = class {
  constructor(l, o, i, c = !1) {
    this.status = l, this.statusText = o || "", this.internal = c, i instanceof Error ? (this.data = i.toString(), this.error = i) : this.data = i;
  }
};
function Hp(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function Vp(l) {
  let o = l.map((i) => i.route.path).filter(Boolean);
  return Pt(o) || "/";
}
var Bd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Wd(l, o) {
  let i = l;
  if (typeof i != "string" || !Ap.test(i))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: i
    };
  let c = i, f = !1;
  if (Bd)
    try {
      let m = new URL(window.location.href), p = i.startsWith("//") ? new URL(m.protocol + i) : new URL(i), h = Kt(p.pathname, o);
      p.origin === m.origin && h != null ? i = h + p.search + p.hash : f = !0;
    } catch {
      Et(
        !1,
        `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: f,
    to: i
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Hd = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Hd
);
var Qp = [
  "GET",
  ...Hd
];
new Set(Qp);
var mr = v.createContext(null);
mr.displayName = "DataRouter";
var ja = v.createContext(null);
ja.displayName = "DataRouterState";
var Vd = v.createContext(!1);
function qp() {
  return v.useContext(Vd);
}
var Qd = v.createContext({
  isTransitioning: !1
});
Qd.displayName = "ViewTransition";
var Yp = v.createContext(
  /* @__PURE__ */ new Map()
);
Yp.displayName = "Fetchers";
var Kp = v.createContext(null);
Kp.displayName = "Await";
var ft = v.createContext(
  null
);
ft.displayName = "Navigation";
var dl = v.createContext(
  null
);
dl.displayName = "Location";
var bt = v.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
bt.displayName = "Route";
var ls = v.createContext(null);
ls.displayName = "RouteError";
var qd = "REACT_ROUTER_ERROR", Gp = "REDIRECT", Xp = "ROUTE_ERROR_RESPONSE";
function Jp(l) {
  if (l.startsWith(`${qd}:${Gp}:{`))
    try {
      let o = JSON.parse(l.slice(28));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean")
        return o;
    } catch {
    }
}
function Zp(l) {
  if (l.startsWith(
    `${qd}:${Xp}:{`
  ))
    try {
      let o = JSON.parse(l.slice(40));
      if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string")
        return new Wp(
          o.status,
          o.statusText,
          o.data
        );
    } catch {
    }
}
function eh(l, { relative: o } = {}) {
  Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: c } = v.useContext(ft), { hash: f, pathname: m, search: p } = fl(l, { relative: o }), h = m;
  return i !== "/" && (h = m === "/" ? i : Pt([i, m])), c.createHref({ pathname: h, search: p, hash: f });
}
function pr() {
  return v.useContext(dl) != null;
}
function wt() {
  return Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), v.useContext(dl).location;
}
var Yd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Kd(l) {
  v.useContext(ft).static || v.useLayoutEffect(l);
}
function hr() {
  let { isDataRoute: l } = v.useContext(bt);
  return l ? mh() : th();
}
function th() {
  Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = v.useContext(mr), { basename: o, navigator: i } = v.useContext(ft), { matches: c } = v.useContext(bt), { pathname: f } = wt(), m = JSON.stringify(rs(c)), p = v.useRef(!1);
  return Kd(() => {
    p.current = !0;
  }), v.useCallback(
    (y, S = {}) => {
      if (Et(p.current, Yd), !p.current) return;
      if (typeof y == "number") {
        i.go(y);
        return;
      }
      let N = ba(
        y,
        JSON.parse(m),
        f,
        S.relative === "path"
      );
      l == null && o !== "/" && (N.pathname = N.pathname === "/" ? o : Pt([o, N.pathname])), (S.replace ? i.replace : i.push)(
        N,
        S.state,
        S
      );
    },
    [
      o,
      i,
      m,
      f,
      l
    ]
  );
}
v.createContext(null);
function fl(l, { relative: o } = {}) {
  let { matches: i } = v.useContext(bt), { pathname: c } = wt(), f = JSON.stringify(rs(i));
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
function nh(l, o) {
  return Gd(l, o);
}
function Gd(l, o, i) {
  var w;
  Le(
    pr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c } = v.useContext(ft), { matches: f } = v.useContext(bt), m = f[f.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", S = m && m.route;
  {
    let P = S && S.path || "";
    Jd(
      h,
      !S || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`
    );
  }
  let N = wt(), _;
  if (o) {
    let P = typeof o == "string" ? Fn(o) : o;
    Le(
      y === "/" || ((w = P.pathname) == null ? void 0 : w.startsWith(y)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${P.pathname}" was given in the \`location\` prop.`
    ), _ = P;
  } else
    _ = N;
  let C = _.pathname || "/", L = C;
  if (y !== "/") {
    let P = y.replace(/^\//, "").split("/");
    L = "/" + C.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let D = i && i.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    i.state.matches.map(
      (P) => Object.assign(P, {
        route: i.manifest[P.route.id] || P.route
      })
    )
  ) : Fd(l, { pathname: L });
  Et(
    S || D != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Et(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let $ = ih(
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
    f,
    i
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
          ..._
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    $
  ) : $;
}
function rh() {
  let l = fh(), o = Hp(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), i = l instanceof Error ? l.stack : null, c = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: c }, m = { padding: "2px 4px", backgroundColor: c }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), p = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ v.createElement("code", { style: m }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ v.createElement("code", { style: m }, "errorElement"), " prop on your route.")), /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ v.createElement("h3", { style: { fontStyle: "italic" } }, o), i ? /* @__PURE__ */ v.createElement("pre", { style: f }, i) : null, p);
}
var lh = /* @__PURE__ */ v.createElement(rh, null), Xd = class extends v.Component {
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
      const i = Zp(l.digest);
      i && (l = i);
    }
    let o = l !== void 0 ? /* @__PURE__ */ v.createElement(bt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ v.createElement(
      ls.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ v.createElement(ah, { error: l }, o) : o;
  }
};
Xd.contextType = Vd;
var Bi = /* @__PURE__ */ new WeakMap();
function ah({
  children: l,
  error: o
}) {
  let { basename: i } = v.useContext(ft);
  if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") {
    let c = Jp(o.digest);
    if (c) {
      let f = Bi.get(o);
      if (f) throw f;
      let m = Wd(c.location, i);
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
function oh({ routeContext: l, match: o, children: i }) {
  let c = v.useContext(mr);
  return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), /* @__PURE__ */ v.createElement(bt.Provider, { value: l }, i);
}
function ih(l, o = [], i) {
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
  let f = l, m = c == null ? void 0 : c.errors;
  if (m != null) {
    let N = f.findIndex(
      (_) => _.route.id && (m == null ? void 0 : m[_.route.id]) !== void 0
    );
    Le(
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
  if (i && c) {
    p = c.renderFallback;
    for (let N = 0; N < f.length; N++) {
      let _ = f[N];
      if ((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (h = N), _.route.id) {
        let { loaderData: C, errors: L } = c, D = _.route.loader && !C.hasOwnProperty(_.route.id) && (!L || L[_.route.id] === void 0);
        if (_.route.lazy || D) {
          i.isStatic && (p = !0), h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  }
  let y = i == null ? void 0 : i.onError, S = c && y ? (N, _) => {
    var C, L;
    y(N, {
      location: c.location,
      params: ((L = (C = c.matches) == null ? void 0 : C[0]) == null ? void 0 : L.params) ?? {},
      pattern: Vp(c.matches),
      errorInfo: _
    });
  } : void 0;
  return f.reduceRight(
    (N, _, C) => {
      let L, D = !1, $ = null, w = null;
      c && (L = m && _.route.id ? m[_.route.id] : void 0, $ = _.route.errorElement || lh, p && (h < 0 && C === 0 ? (Jd(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), D = !0, w = null) : h === C && (D = !0, w = _.route.hydrateFallbackElement || null)));
      let P = o.concat(f.slice(0, C + 1)), M = () => {
        let O;
        return L ? O = $ : D ? O = w : _.route.Component ? O = /* @__PURE__ */ v.createElement(_.route.Component, null) : _.route.element ? O = _.route.element : O = N, /* @__PURE__ */ v.createElement(
          oh,
          {
            match: _,
            routeContext: {
              outlet: N,
              matches: P,
              isDataRoute: c != null
            },
            children: O
          }
        );
      };
      return c && (_.route.ErrorBoundary || _.route.errorElement || C === 0) ? /* @__PURE__ */ v.createElement(
        Xd,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: $,
          error: L,
          children: M(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: S
        }
      ) : M();
    },
    null
  );
}
function as(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sh(l) {
  let o = v.useContext(mr);
  return Le(o, as(l)), o;
}
function uh(l) {
  let o = v.useContext(ja);
  return Le(o, as(l)), o;
}
function ch(l) {
  let o = v.useContext(bt);
  return Le(o, as(l)), o;
}
function os(l) {
  let o = ch(l), i = o.matches[o.matches.length - 1];
  return Le(
    i.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function dh() {
  return os(
    "useRouteId"
    /* UseRouteId */
  );
}
function fh() {
  var c;
  let l = v.useContext(ls), o = uh(
    "useRouteError"
    /* UseRouteError */
  ), i = os(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : (c = o.errors) == null ? void 0 : c[i];
}
function mh() {
  let { router: l } = sh(
    "useNavigate"
    /* UseNavigateStable */
  ), o = os(
    "useNavigate"
    /* UseNavigateStable */
  ), i = v.useRef(!1);
  return Kd(() => {
    i.current = !0;
  }), v.useCallback(
    async (f, m = {}) => {
      Et(i.current, Yd), i.current && (typeof f == "number" ? await l.navigate(f) : await l.navigate(f, { fromRouteId: o, ...m }));
    },
    [l, o]
  );
}
var yd = {};
function Jd(l, o, i) {
  !o && !yd[l] && (yd[l] = !0, Et(!1, i));
}
v.memo(ph);
function ph({
  routes: l,
  manifest: o,
  future: i,
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
function Na({
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
  let { static: f } = v.useContext(ft);
  Et(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = v.useContext(bt), { pathname: p } = wt(), h = hr(), y = ba(
    l,
    rs(m),
    p,
    c === "path"
  ), S = JSON.stringify(y);
  return v.useEffect(() => {
    h(JSON.parse(S), { replace: o, state: i, relative: c });
  }, [h, S, c, o, i]), null;
}
function at(l) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function hh({
  basename: l = "/",
  children: o = null,
  location: i,
  navigationType: c = "POP",
  navigator: f,
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
      navigator: f,
      static: m,
      useTransitions: p,
      future: {}
    }),
    [h, f, m, p]
  );
  typeof i == "string" && (i = Fn(i));
  let {
    pathname: S = "/",
    search: N = "",
    hash: _ = "",
    state: C = null,
    key: L = "default",
    mask: D
  } = i, $ = v.useMemo(() => {
    let w = Kt(S, h);
    return w == null ? null : {
      location: {
        pathname: w,
        search: N,
        hash: _,
        state: C,
        key: L,
        mask: D
      },
      navigationType: c
    };
  }, [h, S, N, _, C, L, c, D]);
  return Et(
    $ != null,
    `<Router basename="${h}"> is not able to match the URL "${S}${N}${_}" because it does not start with the basename, so the <Router> won't render anything.`
  ), $ == null ? null : /* @__PURE__ */ v.createElement(ft.Provider, { value: y }, /* @__PURE__ */ v.createElement(dl.Provider, { children: o, value: $ }));
}
function vh({
  children: l,
  location: o
}) {
  return nh(es(l), o);
}
function es(l, o = []) {
  let i = [];
  return v.Children.forEach(l, (c, f) => {
    if (!v.isValidElement(c))
      return;
    let m = [...o, f];
    if (c.type === v.Fragment) {
      i.push.apply(
        i,
        es(c.props.children, m)
      );
      return;
    }
    Le(
      c.type === at,
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
    c.props.children && (p.children = es(
      c.props.children,
      m
    )), i.push(p);
  }), i;
}
var Ia = "get", $a = "application/x-www-form-urlencoded";
function Ua(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function yh(l) {
  return Ua(l) && l.tagName.toLowerCase() === "button";
}
function gh(l) {
  return Ua(l) && l.tagName.toLowerCase() === "form";
}
function _h(l) {
  return Ua(l) && l.tagName.toLowerCase() === "input";
}
function Eh(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function wh(l, o) {
  return l.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !Eh(l);
}
var Ta = null;
function kh() {
  if (Ta === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ta = !1;
    } catch {
      Ta = !0;
    }
  return Ta;
}
var Sh = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Wi(l) {
  return l != null && !Sh.has(l) ? (Et(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$a}"`
  ), null) : l;
}
function Ch(l, o) {
  let i, c, f, m, p;
  if (gh(l)) {
    let h = l.getAttribute("action");
    c = h ? Kt(h, o) : null, i = l.getAttribute("method") || Ia, f = Wi(l.getAttribute("enctype")) || $a, m = new FormData(l);
  } else if (yh(l) || _h(l) && (l.type === "submit" || l.type === "image")) {
    let h = l.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = l.getAttribute("formaction") || h.getAttribute("action");
    if (c = y ? Kt(y, o) : null, i = l.getAttribute("formmethod") || h.getAttribute("method") || Ia, f = Wi(l.getAttribute("formenctype")) || Wi(h.getAttribute("enctype")) || $a, m = new FormData(h, l), !kh()) {
      let { name: S, type: N, value: _ } = l;
      if (N === "image") {
        let C = S ? `${S}.` : "";
        m.append(`${C}x`, "0"), m.append(`${C}y`, "0");
      } else S && m.append(S, _);
    }
  } else {
    if (Ua(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = Ia, c = null, f = $a, p = l;
  }
  return m && f === "text/plain" && (p = m, m = void 0), { action: c, method: i.toLowerCase(), encType: f, formData: m, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is(l, o) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(o);
}
function Zd(l, o, i, c) {
  let f = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return i ? f.pathname.endsWith("/") ? f.pathname = `${f.pathname}_.${c}` : f.pathname = `${f.pathname}.${c}` : f.pathname === "/" ? f.pathname = `_root.${c}` : o && Kt(f.pathname, o) === "/" ? f.pathname = `${za(o)}/_root.${c}` : f.pathname = `${za(f.pathname)}.${c}`, f;
}
async function xh(l, o) {
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
function Nh(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Th(l, o, i) {
  let c = await Promise.all(
    l.map(async (f) => {
      let m = o.routes[f.route.id];
      if (m) {
        let p = await xh(m, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Lh(
    c.flat(1).filter(Nh).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function gd(l, o, i, c, f, m) {
  let p = (y, S) => i[S] ? y.route.id !== i[S].route.id : !0, h = (y, S) => {
    var N;
    return (
      // param change, /users/123 -> /users/456
      i[S].pathname !== y.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((N = i[S].route.path) == null ? void 0 : N.endsWith("*")) && i[S].params["*"] !== y.params["*"]
    );
  };
  return m === "assets" ? o.filter(
    (y, S) => p(y, S) || h(y, S)
  ) : m === "data" ? o.filter((y, S) => {
    var _;
    let N = c.routes[y.route.id];
    if (!N || !N.hasLoader)
      return !1;
    if (p(y, S) || h(y, S))
      return !0;
    if (y.route.shouldRevalidate) {
      let C = y.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: ((_ = i[0]) == null ? void 0 : _.params) || {},
        nextUrl: new URL(l, window.origin),
        nextParams: y.params,
        defaultShouldRevalidate: !0
      });
      if (typeof C == "boolean")
        return C;
    }
    return !0;
  }) : [];
}
function Rh(l, o, { includeHydrateFallback: i } = {}) {
  return Ph(
    l.map((c) => {
      let f = o.routes[c.route.id];
      if (!f) return [];
      let m = [f.module];
      return f.clientActionModule && (m = m.concat(f.clientActionModule)), f.clientLoaderModule && (m = m.concat(f.clientLoaderModule)), i && f.hydrateFallbackModule && (m = m.concat(f.hydrateFallbackModule)), f.imports && (m = m.concat(f.imports)), m;
    }).flat(1)
  );
}
function Ph(l) {
  return [...new Set(l)];
}
function Mh(l) {
  let o = {}, i = Object.keys(l).sort();
  for (let c of i)
    o[c] = l[c];
  return o;
}
function Lh(l, o) {
  let i = /* @__PURE__ */ new Set();
  return new Set(o), l.reduce((c, f) => {
    let m = JSON.stringify(Mh(f));
    return i.has(m) || (i.add(m), c.push({ key: m, link: f })), c;
  }, []);
}
function ss() {
  let l = v.useContext(mr);
  return is(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function Ih() {
  let l = v.useContext(ja);
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
function $h(l, o) {
  let i = v.useContext(us), [c, f] = v.useState(!1), [m, p] = v.useState(!1), { onFocus: h, onBlur: y, onMouseEnter: S, onMouseLeave: N, onTouchStart: _ } = o, C = v.useRef(null);
  v.useEffect(() => {
    if (l === "render" && p(!0), l === "viewport") {
      let $ = (P) => {
        P.forEach((M) => {
          p(M.isIntersecting);
        });
      }, w = new IntersectionObserver($, { threshold: 0.5 });
      return C.current && w.observe(C.current), () => {
        w.disconnect();
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
    f(!0);
  }, D = () => {
    f(!1), p(!1);
  };
  return i ? l !== "intent" ? [m, C, {}] : [
    m,
    C,
    {
      onFocus: al(h, L),
      onBlur: al(y, D),
      onMouseEnter: al(S, L),
      onMouseLeave: al(N, D),
      onTouchStart: al(_, L)
    }
  ] : [!1, C, {}];
}
function al(l, o) {
  return (i) => {
    l && l(i), i.defaultPrevented || o(i);
  };
}
function Dh({ page: l, ...o }) {
  let i = qp(), { router: c } = ss(), f = v.useMemo(
    () => Fd(c.routes, l, c.basename),
    [c.routes, l, c.basename]
  );
  return f ? i ? /* @__PURE__ */ v.createElement(Oh, { page: l, matches: f, ...o }) : /* @__PURE__ */ v.createElement(Ah, { page: l, matches: f, ...o }) : null;
}
function zh(l) {
  let { manifest: o, routeModules: i } = cs(), [c, f] = v.useState([]);
  return v.useEffect(() => {
    let m = !1;
    return Th(l, o, i).then(
      (p) => {
        m || f(p);
      }
    ), () => {
      m = !0;
    };
  }, [l, o, i]), c;
}
function Oh({
  page: l,
  matches: o,
  ...i
}) {
  let c = wt(), { future: f } = cs(), { basename: m } = ss(), p = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let h = Zd(
      l,
      m,
      f.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), y = !1, S = [];
    for (let N of o)
      typeof N.route.shouldRevalidate == "function" ? y = !0 : S.push(N.route.id);
    return y && S.length > 0 && h.searchParams.set("_routes", S.join(",")), [h.pathname + h.search];
  }, [
    m,
    f.v8_trailingSlashAwareDataRequests,
    l,
    c,
    o
  ]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, p.map((h) => /* @__PURE__ */ v.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...i })));
}
function Ah({
  page: l,
  matches: o,
  ...i
}) {
  let c = wt(), { future: f, manifest: m, routeModules: p } = cs(), { basename: h } = ss(), { loaderData: y, matches: S } = Ih(), N = v.useMemo(
    () => gd(
      l,
      o,
      S,
      m,
      c,
      "data"
    ),
    [l, o, S, m, c]
  ), _ = v.useMemo(
    () => gd(
      l,
      o,
      S,
      m,
      c,
      "assets"
    ),
    [l, o, S, m, c]
  ), C = v.useMemo(() => {
    if (l === c.pathname + c.search + c.hash)
      return [];
    let $ = /* @__PURE__ */ new Set(), w = !1;
    if (o.forEach((M) => {
      var z;
      let O = m.routes[M.route.id];
      !O || !O.hasLoader || (!N.some((W) => W.route.id === M.route.id) && M.route.id in y && ((z = p[M.route.id]) != null && z.shouldRevalidate) || O.hasClientLoader ? w = !0 : $.add(M.route.id));
    }), $.size === 0)
      return [];
    let P = Zd(
      l,
      h,
      f.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return w && $.size > 0 && P.searchParams.set(
      "_routes",
      o.filter((M) => $.has(M.route.id)).map((M) => M.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    h,
    f.v8_trailingSlashAwareDataRequests,
    y,
    c,
    m,
    N,
    o,
    l,
    p
  ]), L = v.useMemo(
    () => Rh(_, m),
    [_, m]
  ), D = zh(_);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, C.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "prefetch", as: "fetch", href: $, ...i })), L.map(($) => /* @__PURE__ */ v.createElement("link", { key: $, rel: "modulepreload", href: $, ...i })), D.map(({ key: $, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ v.createElement(
      "link",
      {
        key: $,
        nonce: i.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? i.crossOrigin
      }
    )
  )));
}
function Fh(...l) {
  return (o) => {
    l.forEach((i) => {
      typeof i == "function" ? i(o) : i != null && (i.current = o);
    });
  };
}
var bh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  bh && (window.__reactRouterVersion = // @ts-expect-error
  "7.17.0");
} catch {
}
function jh({
  basename: l,
  children: o,
  useTransitions: i,
  window: c
}) {
  let f = v.useRef();
  f.current == null && (f.current = _p({ window: c, v5Compat: !0 }));
  let m = f.current, [p, h] = v.useState({
    action: m.action,
    location: m.location
  }), y = v.useCallback(
    (S) => {
      i === !1 ? h(S) : v.startTransition(() => h(S));
    },
    [i]
  );
  return v.useLayoutEffect(() => m.listen(y), [m, y]), /* @__PURE__ */ v.createElement(
    hh,
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
var ef = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, tf = v.forwardRef(
  function({
    onClick: o,
    discover: i = "render",
    prefetch: c = "none",
    relative: f,
    reloadDocument: m,
    replace: p,
    mask: h,
    state: y,
    target: S,
    to: N,
    preventScrollReset: _,
    viewTransition: C,
    defaultShouldRevalidate: L,
    ...D
  }, $) {
    let { basename: w, navigator: P, useTransitions: M } = v.useContext(ft), O = typeof N == "string" && ef.test(N), z = Wd(N, w);
    N = z.to;
    let W = eh(N, { relative: f }), j = wt(), ee = null;
    if (h) {
      let q = ba(
        h,
        [],
        j.mask ? j.mask.pathname : "/",
        !0
      );
      w !== "/" && (q.pathname = q.pathname === "/" ? w : Pt([w, q.pathname])), ee = P.createHref(q);
    }
    let [ne, ye, ge] = $h(
      c,
      D
    ), K = Wh(N, {
      replace: p,
      mask: h,
      state: y,
      target: S,
      preventScrollReset: _,
      relative: f,
      viewTransition: C,
      defaultShouldRevalidate: L,
      useTransitions: M
    });
    function ue(q) {
      o && o(q), q.defaultPrevented || K(q);
    }
    let xe = !(z.isExternal || m), Q = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ v.createElement(
        "a",
        {
          ...D,
          ...ge,
          href: (xe ? ee : void 0) || z.absoluteURL || W,
          onClick: xe ? ue : o,
          ref: Fh($, ye),
          target: S,
          "data-discover": !O && i === "render" ? "true" : void 0
        }
      )
    );
    return ne && !O ? /* @__PURE__ */ v.createElement(v.Fragment, null, Q, /* @__PURE__ */ v.createElement(Dh, { page: W })) : Q;
  }
);
tf.displayName = "Link";
var He = v.forwardRef(
  function({
    "aria-current": o = "page",
    caseSensitive: i = !1,
    className: c = "",
    end: f = !1,
    style: m,
    to: p,
    viewTransition: h,
    children: y,
    ...S
  }, N) {
    let _ = fl(p, { relative: S.relative }), C = wt(), L = v.useContext(ja), { navigator: D, basename: $ } = v.useContext(ft), w = L != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Yh(_) && h === !0, P = D.encodeLocation ? D.encodeLocation(_).pathname : _.pathname, M = C.pathname, O = L && L.navigation && L.navigation.location ? L.navigation.location.pathname : null;
    i || (M = M.toLowerCase(), O = O ? O.toLowerCase() : null, P = P.toLowerCase()), O && $ && (O = Kt(O, $) || O);
    const z = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let W = M === P || !f && M.startsWith(P) && M.charAt(z) === "/", j = O != null && (O === P || !f && O.startsWith(P) && O.charAt(P.length) === "/"), ee = {
      isActive: W,
      isPending: j,
      isTransitioning: w
    }, ne = W ? o : void 0, ye;
    typeof c == "function" ? ye = c(ee) : ye = [
      c,
      W ? "active" : null,
      j ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ge = typeof m == "function" ? m(ee) : m;
    return /* @__PURE__ */ v.createElement(
      tf,
      {
        ...S,
        "aria-current": ne,
        className: ye,
        ref: N,
        style: ge,
        to: p,
        viewTransition: h
      },
      typeof y == "function" ? y(ee) : y
    );
  }
);
He.displayName = "NavLink";
var Uh = v.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: o,
    navigate: i,
    reloadDocument: c,
    replace: f,
    state: m,
    method: p = Ia,
    action: h,
    onSubmit: y,
    relative: S,
    preventScrollReset: N,
    viewTransition: _,
    defaultShouldRevalidate: C,
    ...L
  }, D) => {
    let { useTransitions: $ } = v.useContext(ft), w = Qh(), P = qh(h, { relative: S }), M = p.toLowerCase() === "get" ? "get" : "post", O = typeof h == "string" && ef.test(h), z = (W) => {
      if (y && y(W), W.defaultPrevented) return;
      W.preventDefault();
      let j = W.nativeEvent.submitter, ee = (j == null ? void 0 : j.getAttribute("formmethod")) || p, ne = () => w(j || W.currentTarget, {
        fetcherKey: o,
        method: ee,
        navigate: i,
        replace: f,
        state: m,
        relative: S,
        preventScrollReset: N,
        viewTransition: _,
        defaultShouldRevalidate: C
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
Uh.displayName = "Form";
function Bh(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nf(l) {
  let o = v.useContext(mr);
  return Le(o, Bh(l)), o;
}
function Wh(l, {
  target: o,
  replace: i,
  mask: c,
  state: f,
  preventScrollReset: m,
  relative: p,
  viewTransition: h,
  defaultShouldRevalidate: y,
  useTransitions: S
} = {}) {
  let N = hr(), _ = wt(), C = fl(l, { relative: p });
  return v.useCallback(
    (L) => {
      if (wh(L, o)) {
        L.preventDefault();
        let D = i !== void 0 ? i : cl(_) === cl(C), $ = () => N(l, {
          replace: D,
          mask: c,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: h,
          defaultShouldRevalidate: y
        });
        S ? v.startTransition(() => $()) : $();
      }
    },
    [
      _,
      N,
      C,
      i,
      c,
      f,
      o,
      l,
      m,
      p,
      h,
      y,
      S
    ]
  );
}
var Hh = 0, Vh = () => `__${String(++Hh)}__`;
function Qh() {
  let { router: l } = nf(
    "useSubmit"
    /* UseSubmit */
  ), { basename: o } = v.useContext(ft), i = dh(), c = l.fetch, f = l.navigate;
  return v.useCallback(
    async (m, p = {}) => {
      let { action: h, method: y, encType: S, formData: N, body: _ } = Ch(
        m,
        o
      );
      if (p.navigate === !1) {
        let C = p.fetcherKey || Vh();
        await c(C, i, p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: N,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || S,
          flushSync: p.flushSync
        });
      } else
        await f(p.action || h, {
          defaultShouldRevalidate: p.defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: N,
          body: _,
          formMethod: p.method || y,
          formEncType: p.encType || S,
          replace: p.replace,
          state: p.state,
          fromRouteId: i,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [c, f, o, i]
  );
}
function qh(l, { relative: o } = {}) {
  let { basename: i } = v.useContext(ft), c = v.useContext(bt);
  Le(c, "useFormAction must be used inside a RouteContext");
  let [f] = c.matches.slice(-1), m = { ...fl(l || ".", { relative: o }) }, p = wt();
  if (l == null) {
    m.search = p.search;
    let h = new URLSearchParams(m.search), y = h.getAll("index");
    if (y.some((N) => N === "")) {
      h.delete("index"), y.filter((_) => _).forEach((_) => h.append("index", _));
      let N = h.toString();
      m.search = N ? `?${N}` : "";
    }
  }
  return (!l || l === ".") && f.route.index && (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (m.pathname = m.pathname === "/" ? i : Pt([i, m.pathname])), cl(m);
}
function Yh(l, { relative: o } = {}) {
  let i = v.useContext(Qd);
  Le(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = nf(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = fl(l, { relative: o });
  if (!i.isTransitioning)
    return !1;
  let m = Kt(i.currentLocation.pathname, c) || i.currentLocation.pathname, p = Kt(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return Da(f.pathname, p) != null || Da(f.pathname, m) != null;
}
var ts = /* @__PURE__ */ new Map(), Ra = /* @__PURE__ */ new WeakMap(), _d = 0, Kh;
function Gh(l) {
  return l ? (Ra.has(l) || (_d += 1, Ra.set(l, _d.toString())), Ra.get(l)) : "0";
}
function Xh(l) {
  return Object.keys(l).sort().filter(
    (o) => l[o] !== void 0
  ).map((o) => `${o}_${o === "root" ? Gh(l.root) : l[o]}`).toString();
}
function Jh(l) {
  const o = Xh(l);
  let i = ts.get(o);
  if (!i) {
    const c = /* @__PURE__ */ new Map();
    let f;
    const m = new IntersectionObserver((p) => {
      p.forEach((h) => {
        var y;
        const S = h.isIntersecting && f.some((N) => h.intersectionRatio >= N);
        l.trackVisibility && typeof h.isVisible > "u" && (h.isVisible = S), [...(y = c.get(h.target)) != null ? y : []].forEach((N) => {
          N(S, h);
        });
      });
    }, l);
    f = m.thresholds || (Array.isArray(l.threshold) ? l.threshold : [l.threshold || 0]), i = {
      id: o,
      observer: m,
      elements: c
    }, ts.set(o, i);
  }
  return i;
}
function Zh(l, o, i = {}, c = Kh) {
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
  const { id: f, observer: m, elements: p } = Jh(i), h = p.get(l) || [];
  return p.has(l) || p.set(l, h), h.push(o), m.observe(l), function() {
    h.splice(h.indexOf(o), 1), h.length === 0 && (p.delete(l), m.unobserve(l)), p.size === 0 && (m.disconnect(), ts.delete(f));
  };
}
function vr({
  threshold: l,
  delay: o,
  trackVisibility: i,
  rootMargin: c,
  root: f,
  triggerOnce: m,
  skip: p,
  initialInView: h,
  fallbackInView: y,
  onChange: S
} = {}) {
  var N;
  const [_, C] = v.useState(null), L = v.useRef(S), D = v.useRef(h), [$, w] = v.useState({
    inView: !!h,
    entry: void 0
  });
  L.current = S, v.useEffect(
    () => {
      if (D.current === void 0 && (D.current = h), p || !_) return;
      let z;
      return z = Zh(
        _,
        (W, j) => {
          const ee = D.current;
          D.current = W, !(ee === void 0 && !W) && (w({
            inView: W,
            entry: j
          }), L.current && L.current(W, j), j.isIntersecting && m && z && (z(), z = void 0));
        },
        {
          root: f,
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
      f,
      c,
      m,
      p,
      i,
      y,
      o
    ]
  );
  const P = (N = $.entry) == null ? void 0 : N.target, M = v.useRef(void 0);
  !_ && P && !m && !p && M.current !== P && (M.current = P, w({
    inView: !!h,
    entry: void 0
  }), D.current = h);
  const O = [C, $.inView, $.entry];
  return O.ref = O[0], O.inView = O[1], O.entry = O[2], O;
}
const jt = (l = 768) => {
  const [o, i] = v.useState(
    window.innerWidth <= l
  );
  return v.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${l}px)`), f = (m) => {
      i(m.matches);
    };
    return i(c.matches), c.addEventListener("change", f), () => c.removeEventListener("change", f);
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
const ev = (l) => ({
  script_actions: Array.isArray(l == null ? void 0 : l.script_actions) ? l.script_actions : Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function tv() {
  const l = ml(), [o, i] = v.useState(!0), [c, f] = v.useState(null), m = v.useRef(!1), p = v.useCallback(
    async (C = 1, L = !1) => {
      i(!0);
      try {
        const D = ev(
          await l._getShort(
            "get_script_actions_short",
            C
          )
        );
        f(($) => !L || !$ ? D : {
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
    saveScript: async (C) => {
      await l._save(C, "save_script_action"), await p(1);
    },
    updateScript: async (C, L) => {
      await l._update(C, "update_script_action", L), await p(1);
    },
    getScriptAction: async (C) => (await l._getDetail(
      C,
      "get_script_action"
    )).data,
    deleteScriptAction: async (C) => {
      await l._delete(C, "delete_script_action"), await p(1);
    }
  };
}
const nv = "_subtitle_g5b3f_1", rv = "_card_g5b3f_6", lv = "_content_g5b3f_50", av = "_title_g5b3f_58", ov = "_arrow_g5b3f_64", ol = {
  subtitle: nv,
  card: rv,
  content: lv,
  title: av,
  arrow: ov
}, yr = ({
  title: l,
  subTitle: o,
  onClick: i
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    type: "button",
    className: ol.card,
    onClick: i
  },
  /* @__PURE__ */ u.createElement("div", { className: ol.content }, /* @__PURE__ */ u.createElement("div", { className: ol.title }, l), /* @__PURE__ */ u.createElement("div", { className: ol.subtitle }, o)),
  /* @__PURE__ */ u.createElement("div", { className: ol.arrow }, "→")
), iv = "_button_2udlt_1", sv = "_full_2udlt_32", uv = "_primary_2udlt_37", cv = "_secondary_2udlt_50", dv = "_ghost_2udlt_62", Hi = {
  button: iv,
  full: sv,
  primary: uv,
  secondary: cv,
  ghost: dv
}, se = ({
  children: l,
  variant: o = "primary",
  fullWidth: i = !1,
  leftIcon: c,
  rightIcon: f,
  className: m = "",
  ...p
}) => /* @__PURE__ */ u.createElement(
  "button",
  {
    ...p,
    className: `
        ${Hi.button}
        ${Hi[o]}
        ${i ? Hi.full : ""}
        ${m}
      `
  },
  c,
  l,
  f
), fv = "_pagination_1hg7e_1", mv = "_button_1hg7e_9", pv = "_label_1hg7e_33", Pa = {
  pagination: fv,
  button: mv,
  label: pv
}, gr = ({
  page: l,
  totalPages: o,
  onChange: i
}) => o <= 1 ? null : /* @__PURE__ */ u.createElement("div", { className: Pa.pagination }, /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Pa.button,
    disabled: l === 1,
    onClick: () => i(l - 1)
  },
  "Назад"
), /* @__PURE__ */ u.createElement("span", { className: Pa.label }, l, " / ", o), /* @__PURE__ */ u.createElement(
  "button",
  {
    className: Pa.button,
    disabled: l === o,
    onClick: () => i(l + 1)
  },
  "Вперёд"
)), hv = "_overlay_49s9e_1", vv = "_modal_49s9e_13", yv = "_sm_49s9e_27", gv = "_md_49s9e_31", _v = "_lg_49s9e_35", Ev = "_xl_49s9e_39", wv = "_header_49s9e_43", kv = "_title_49s9e_53", Sv = "_body_49s9e_60", Cv = "_footer_49s9e_67", xv = "_close_49s9e_77", gn = {
  overlay: hv,
  modal: vv,
  sm: yv,
  md: gv,
  lg: _v,
  xl: Ev,
  header: wv,
  title: kv,
  body: Sv,
  footer: Cv,
  close: xv
}, Mt = ({
  open: l,
  onClose: o,
  title: i,
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
    /* @__PURE__ */ u.createElement("div", { className: gn.header }, i && /* @__PURE__ */ u.createElement("h2", { className: gn.title }, i), /* @__PURE__ */ u.createElement(
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
) : null), Nv = "_overlay_w83z1_1", Tv = "_sheet_w83z1_11", Rv = "_handle_w83z1_21", zn = {
  overlay: Nv,
  sheet: Tv,
  handle: Rv
}, lf = ({
  open: l,
  onClose: o,
  children: i
}) => {
  const [c, f] = v.useState(l), [m, p] = v.useState(l), h = v.useRef(0), y = v.useRef(0), [S, N] = v.useState(0);
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
  const _ = (D) => {
    h.current = D.touches[0].clientY;
  }, C = (D) => {
    y.current = D.touches[0].clientY;
    const $ = y.current - h.current;
    $ > 0 && N($);
  }, L = () => {
    S > 120 && o(), N(0);
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
      className: `${zn.overlay} ${m ? zn.visible : ""}`,
      onClick: o
    },
    /* @__PURE__ */ u.createElement(
      "section",
      {
        className: `${zn.sheet} ${m ? zn.open : ""}`,
        style: {
          transform: `translateY(${S}px)`,
          transition: S === 0 ? "transform .3s cubic-bezier(.32,.72,0,1)" : "none"
        },
        onClick: (D) => D.stopPropagation(),
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ u.createElement(
        "div",
        {
          className: zn.handleArea,
          onTouchStart: _,
          onTouchMove: C,
          onTouchEnd: L
        },
        /* @__PURE__ */ u.createElement("div", { className: zn.handle })
      ),
      /* @__PURE__ */ u.createElement("div", { className: zn.content }, i)
    )
  ) : null;
}, Pv = "_content_1p38v_1", Mv = "_title_1p38v_7", Lv = "_actions_1p38v_14", Vi = {
  content: Pv,
  title: Mv,
  actions: Lv
}, Iv = ({
  uuid: l,
  open: o,
  title: i,
  onClose: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = jt();
  if (!l) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Vi.content }, /* @__PURE__ */ u.createElement("h3", { className: Vi.title }, i), /* @__PURE__ */ u.createElement("div", { className: Vi.actions }, /* @__PURE__ */ u.createElement(
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
    Mt,
    {
      open: o,
      onClose: c,
      title: "Действия",
      size: "sm"
    },
    h
  ));
}, $v = "_accordion_1wwmk_1", Dv = "_header_1wwmk_7", zv = "_content_1wwmk_20", Ma = {
  accordion: $v,
  header: Dv,
  content: zv
}, Ft = ({
  title: l,
  defaultOpen: o = !1,
  children: i
}) => {
  const [c, f] = v.useState(o);
  return /* @__PURE__ */ u.createElement(
    "div",
    {
      className: Ma.accordion,
      "data-open": c
    },
    /* @__PURE__ */ u.createElement(
      "button",
      {
        type: "button",
        className: Ma.header,
        onClick: () => f((m) => !m),
        "aria-expanded": c
      },
      /* @__PURE__ */ u.createElement("span", null, l),
      /* @__PURE__ */ u.createElement("span", { className: Ma.icon }, c ? "−" : "+")
    ),
    c && /* @__PURE__ */ u.createElement("div", { className: Ma.content }, i)
  );
}, Ov = "_field_1bvbf_1", Av = "_label_1bvbf_8", Fv = "_inputWrapper_1bvbf_16", bv = "_input_1bvbf_16", jv = "_passwordInput_1bvbf_34", Uv = "_passwordToggle_1bvbf_60", Bv = "_error_1bvbf_89", Wv = "_errorText_1bvbf_102", _n = {
  field: Ov,
  label: Av,
  inputWrapper: Fv,
  input: bv,
  passwordInput: jv,
  passwordToggle: Uv,
  error: Bv,
  errorText: Wv
}, Ce = ({
  label: l,
  error: o,
  disabled: i,
  className: c = "",
  id: f,
  type: m,
  ...p
}) => {
  const h = v.useId(), [y, S] = v.useState(!1), N = f ?? h, _ = m === "password" && y ? "text" : m;
  return /* @__PURE__ */ u.createElement("div", { className: _n.field }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: N,
      className: _n.label
    },
    l
  ), /* @__PURE__ */ u.createElement("div", { className: _n.inputWrapper }, /* @__PURE__ */ u.createElement(
    "input",
    {
      id: N,
      disabled: i,
      type: _,
      ...p,
      className: `
            ${_n.input}
            ${m === "password" ? _n.passwordInput : ""}
            ${o ? _n.error : ""}
            ${c}
          `
    }
  ), m === "password" && /* @__PURE__ */ u.createElement(
    "button",
    {
      type: "button",
      className: _n.passwordToggle,
      onClick: () => S((C) => !C),
      disabled: i,
      "aria-label": y ? "Hide password" : "Show password"
    },
    y ? "🙈" : "👁"
  )), o && /* @__PURE__ */ u.createElement("span", { className: _n.errorText }, o));
}, Hv = "_wrapper_1oxcb_1", Vv = "_labelRow_1oxcb_7", Qv = "_label_1oxcb_7", qv = "_selectedTitle_1oxcb_26", Yv = "_dropdown_1oxcb_35", Kv = "_option_1oxcb_50", Gv = "_title_1oxcb_72", Xv = "_uuid_1oxcb_77", Jv = "_hint_1oxcb_78", Ot = {
  wrapper: Hv,
  labelRow: Vv,
  label: Qv,
  selectedTitle: qv,
  dropdown: Yv,
  option: Kv,
  title: Gv,
  uuid: Xv,
  hint: Jv
}, fr = ({
  label: l = "uuid",
  value: o,
  selectedTitle: i,
  searchSource: c = ["assistant_commands"],
  minQueryLength: f = 2,
  onChange: m,
  onSelect: p,
  getSelectedValue: h,
  error: y
}) => {
  const S = ml(), [N, _] = v.useState([]), [C, L] = v.useState(!1), [D, $] = v.useState(!1), [w, P] = v.useState(!1), M = v.useRef(0), O = v.useRef(""), z = v.useMemo(() => o.trim(), [o]);
  v.useEffect(() => {
    if (!z) {
      O.current = "", _([]), L(!1);
      return;
    }
    if (z.length < f) {
      _([]), L(!1);
      return;
    }
    if (!w || O.current === z)
      return;
    O.current = z;
    const j = M.current + 1;
    M.current = j;
    const ee = window.setTimeout(async () => {
      $(!0);
      try {
        let ne = [];
        for (const ye of c) {
          const ge = await S.searchAssistantCommands(z, ye), K = Array.isArray(ge == null ? void 0 : ge.data) ? ge.data : [];
          ne.push(...K);
        }
        if (M.current !== j)
          return;
        _(ne), L(ne.length > 0);
      } finally {
        M.current === j && $(!1);
      }
    }, 250);
    return () => window.clearTimeout(ee);
  }, [S, z, c, f, w]);
  const W = (j) => {
    const ee = h ? h(j) : j.uuid;
    m(ee), p == null || p(j), L(!1);
  };
  return /* @__PURE__ */ u.createElement("div", { className: Ot.wrapper }, /* @__PURE__ */ u.createElement("div", { className: Ot.labelRow }, /* @__PURE__ */ u.createElement("span", { className: Ot.label }, l), i && /* @__PURE__ */ u.createElement("span", { className: Ot.selectedTitle }, i)), /* @__PURE__ */ u.createElement(
    Ce,
    {
      value: o,
      autoComplete: "off",
      placeholder: "Начните вводить title или uuid",
      error: y,
      onBlur: () => {
        P(!1), window.setTimeout(() => L(!1), 150);
      },
      onFocus: () => {
        P(!0), L(N.length > 0);
      },
      onChange: (j) => m(j.target.value)
    }
  ), C && /* @__PURE__ */ u.createElement("div", { className: Ot.dropdown }, N.map((j) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: j.uuid,
      type: "button",
      className: Ot.option,
      onMouseDown: (ee) => ee.preventDefault(),
      onClick: () => W(j)
    },
    /* @__PURE__ */ u.createElement("span", { className: Ot.title }, j.title || "Без названия"),
    /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, j.uuid),
    j.mappingType && /* @__PURE__ */ u.createElement("span", { className: Ot.uuid }, "mappingType: ", j.mappingType)
  ))), D && /* @__PURE__ */ u.createElement("span", { className: Ot.hint }, "Поиск..."));
}, Zv = "_field_xxbds_1", ey = "_row_xxbds_5", ty = "_inputWrapper_xxbds_11", ny = "_deleteButton_xxbds_15", En = {
  field: Zv,
  row: ey,
  inputWrapper: ty,
  deleteButton: ny
}, ry = ({
  condition: l,
  index: o,
  defaultOpen: i,
  onChange: c,
  onDelete: f,
  totalCount: m,
  errors: p
}) => {
  const h = l.children_type !== void 0, y = l.children_direct_type !== void 0, S = () => {
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
      defaultOpen: i
    },
    /* @__PURE__ */ u.createElement("div", { className: En.field }, /* @__PURE__ */ u.createElement(
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
    /* @__PURE__ */ u.createElement("div", { className: En.field }, h ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: En.row,
        style: p != null && p.children_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: En.inputWrapper }, /* @__PURE__ */ u.createElement(
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
          children_type: ""
        })
      },
      "🞢 Добавить children_type"
    )),
    /* @__PURE__ */ u.createElement("div", { className: En.field }, y ? /* @__PURE__ */ u.createElement(
      "div",
      {
        className: En.row,
        style: p != null && p.children_direct_type ? { alignItems: "center" } : {}
      },
      /* @__PURE__ */ u.createElement("div", { className: En.inputWrapper }, /* @__PURE__ */ u.createElement(
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
        className: En.deleteButton,
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
const af = (...l) => l.filter((o, i, c) => !!o && o.trim() !== "" && c.indexOf(o) === i).join(" ").trim();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = (l) => l.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, i, c) => c ? c.toUpperCase() : i.toLowerCase()
);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = (l) => {
  const o = ay(l);
  return o.charAt(0).toUpperCase() + o.slice(1);
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qi = {
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
const oy = (l) => {
  for (const o in l)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
  return !1;
}, iy = v.createContext({}), sy = () => v.useContext(iy), uy = v.forwardRef(
  ({ color: l, size: o, strokeWidth: i, absoluteStrokeWidth: c, className: f = "", children: m, iconNode: p, ...h }, y) => {
    const {
      size: S = 24,
      strokeWidth: N = 2,
      absoluteStrokeWidth: _ = !1,
      color: C = "currentColor",
      className: L = ""
    } = sy() ?? {}, D = c ?? _ ? Number(i ?? N) * 24 / Number(o ?? S) : i ?? N;
    return v.createElement(
      "svg",
      {
        ref: y,
        ...Qi,
        width: o ?? S ?? Qi.width,
        height: o ?? S ?? Qi.height,
        stroke: l ?? C,
        strokeWidth: D,
        className: af("lucide", L, f),
        ...!m && !oy(h) && { "aria-hidden": "true" },
        ...h
      },
      [
        ...p.map(([$, w]) => v.createElement($, w)),
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
    ({ className: c, ...f }, m) => v.createElement(uy, {
      ref: m,
      iconNode: o,
      className: af(
        `lucide-${ly(Ed(l))}`,
        `lucide-${l}`,
        c
      ),
      ...f
    })
  );
  return i.displayName = Ed(l), i;
};
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
], of = mt("alarm-clock", cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], fy = mt("arrow-left", dy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], il = mt("bot", my);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], hy = mt("chevron-down", py);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6h4", key: "135r8i" }]
], yy = mt("clock-3", vy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], _y = mt("command", gy);
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
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
      key: "1wthlu"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
  ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
], wy = mt("file-code-corner", Ey);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Sy = mt("house", ky);
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
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], sf = mt("settings", Cy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
], uf = mt("speaker", xy);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Ty = mt("timer", Ny);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], cf = mt("trash-2", Ry);
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
], My = mt("workflow", Py), Ly = "_dropdown_x51vc_2", Iy = "_label_x51vc_9", $y = "_wrapper_x51vc_17", Dy = "_select_x51vc_21", zy = "_arrow_x51vc_61", Oy = "_error_x51vc_81", Ay = "_errorText_x51vc_99", On = {
  dropdown: Ly,
  label: Iy,
  wrapper: $y,
  select: Dy,
  arrow: zy,
  error: Oy,
  errorText: Ay
};
function Fy({
  label: l,
  options: o,
  value: i = "",
  placeholder: c = "Выберите",
  error: f,
  onSelect: m
}) {
  const p = v.useId();
  return /* @__PURE__ */ u.createElement("div", { className: On.dropdown }, l && /* @__PURE__ */ u.createElement(
    "label",
    {
      htmlFor: p,
      className: On.label
    },
    l
  ), /* @__PURE__ */ u.createElement("div", { className: On.wrapper }, /* @__PURE__ */ u.createElement(
    "select",
    {
      id: p,
      className: `
            ${On.select}
            ${f ? On.error : ""}
          `,
      value: i,
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
    hy,
    {
      size: 18,
      className: On.arrow
    }
  )), f && /* @__PURE__ */ u.createElement("span", { className: On.errorText }, f));
}
const by = "_form_xh0jo_1", jy = "_section_xh0jo_7", Uy = "_sectionTitle_xh0jo_18", By = "_conditions_xh0jo_37", Wy = "_addCondition_xh0jo_43", dr = {
  form: by,
  section: jy,
  sectionTitle: Uy,
  conditions: By,
  addCondition: Wy
}, Hy = ({
  open: l,
  initialData: o,
  isOptionData: i,
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
  }), [S, N] = v.useState({
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
    }), N({
      conditions: []
    });
  }, [o, l]);
  const _ = (w) => {
    y(w);
  }, C = () => {
    _({
      ...h,
      conditions: [
        ...h.conditions,
        {
          parent_type: ""
        }
      ]
    });
  }, L = (w, P) => {
    const M = [...h.conditions];
    M[w] = P, _({
      ...h,
      conditions: M
    });
  }, D = (w) => {
    const P = h.conditions.filter(
      (M, O) => O !== w
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
    const w = {
      conditions: []
    };
    return h.name.trim() || (w.name = "Обязательное поле"), h.script_entity_id || (w.script_entity_id = "Обязательное поле"), h.conditions.forEach(
      (P, M) => {
        const O = {};
        P.parent_type.trim() || (O.parent_type = "Обязательное поле"), P.children_type !== void 0 && !P.children_type.trim() && (O.children_type = "Обязательное поле"), P.children_direct_type !== void 0 && !P.children_direct_type.trim() && (O.children_direct_type = "Обязательное поле"), w.conditions[M] = O;
      }
    ), N(w), !w.name && !w.script_entity_id && w.conditions.every(
      (P) => Object.keys(P).length === 0
    );
  };
  return /* @__PURE__ */ u.createElement(
    Mt,
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
    /* @__PURE__ */ u.createElement("div", { className: dr.form }, /* @__PURE__ */ u.createElement("div", { className: dr.section }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название",
        value: h.name,
        error: S.name,
        onChange: (w) => _({
          ...h,
          name: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Fy,
      {
        label: "Скрипт",
        error: S.script_entity_id,
        options: i.map(
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
    )), /* @__PURE__ */ u.createElement("div", { className: dr.section }, /* @__PURE__ */ u.createElement("h3", { className: dr.sectionTitle }, "Условия"), /* @__PURE__ */ u.createElement("div", { className: dr.conditions }, h.conditions.map(
      (w, P, M) => /* @__PURE__ */ u.createElement(
        ry,
        {
          key: P,
          index: P,
          condition: w,
          defaultOpen: !c,
          errors: S.conditions[P],
          onChange: (O) => L(
            P,
            O
          ),
          onDelete: () => D(P),
          totalCount: M.length
        }
      )
    )), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        className: dr.addCondition,
        onClick: C
      },
      "+ Добавить условие"
    )))
  );
}, Vy = "_header_1m7ok_1", Qy = "_title_1m7ok_15", qy = "_backButton_1m7ok_22", Yy = "_homeButton_1m7ok_23", La = {
  header: Vy,
  title: Qy,
  backButton: qy,
  homeButton: Yy
}, bn = ({
  title: l = ""
}) => {
  const o = hr(), c = wt().pathname.startsWith("/commands"), f = () => {
    o(c ? "/scripts" : "/");
  };
  return /* @__PURE__ */ u.createElement("header", { className: La.header }, /* @__PURE__ */ u.createElement(
    "button",
    {
      className: La.backButton,
      onClick: f
    },
    /* @__PURE__ */ u.createElement(fy, { size: 18 })
  ), /* @__PURE__ */ u.createElement("h1", { className: La.title }, l), /* @__PURE__ */ u.createElement(
    "button",
    {
      className: La.homeButton,
      onClick: () => o("/scripts")
    },
    /* @__PURE__ */ u.createElement(Sy, { size: 18 })
  ));
}, Ky = "_tabs_17nxl_1", Gy = "_dropdown_17nxl_14", Xy = "_tab_17nxl_1", Jy = "_active_17nxl_43", Zy = "_menu_17nxl_53", eg = "_menuItem_17nxl_80", _e = {
  tabs: Ky,
  dropdown: Gy,
  tab: Xy,
  active: Jy,
  menu: Zy,
  menuItem: eg
}, Gt = () => {
  if (!jt())
    return /* @__PURE__ */ u.createElement("div", { className: _e.tabs }, /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/scripts",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(wy, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Скрипты")
    ), /* @__PURE__ */ u.createElement("div", { className: _e.dropdown }, /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(_y, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Команды")
    ), /* @__PURE__ */ u.createElement("div", { className: _e.menu }, /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/main",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Основные"
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/sub",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Второстепенные"
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/direct/main",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Прямые"
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/commands/settings",
        className: ({ isActive: o }) => o ? `${_e.menuItem} ${_e.active}` : _e.menuItem
      },
      "Настройки"
    ))), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/timer",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(Ty, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Таймер")
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/alarm",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(of, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Будильник")
    ), /* @__PURE__ */ u.createElement(
      He,
      {
        to: "/settings",
        className: ({ isActive: o }) => o ? `${_e.tab} ${_e.active}` : _e.tab
      },
      /* @__PURE__ */ u.createElement(sf, { size: 16, strokeWidth: 2 }),
      /* @__PURE__ */ u.createElement("span", null, "Настройки")
    ));
}, tg = "_nav_gn5m2_1", wd = {
  nav: tg
}, Xt = () => {
  const l = wt(), o = hr(), [i, c] = v.useState(
    l.pathname.startsWith("/commands")
  );
  return i ? /* @__PURE__ */ u.createElement("nav", { className: wd.nav }, /* @__PURE__ */ u.createElement(He, { to: "/commands/main" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Основные")), /* @__PURE__ */ u.createElement(He, { to: "/commands/sub" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Второстепенные")), /* @__PURE__ */ u.createElement(He, { to: "/commands/direct/main" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Прямые")), /* @__PURE__ */ u.createElement(He, { to: "/commands/settings" }, /* @__PURE__ */ u.createElement(il, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки"))) : /* @__PURE__ */ u.createElement("nav", { className: wd.nav }, /* @__PURE__ */ u.createElement(He, { to: "/scripts" }, /* @__PURE__ */ u.createElement(My, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Скрипты")), /* @__PURE__ */ u.createElement(
    "button",
    {
      onClick: () => {
        c(!0), o("/commands/main");
      }
    },
    /* @__PURE__ */ u.createElement(il, { size: 20 }),
    /* @__PURE__ */ u.createElement("span", null, "Команды")
  ), /* @__PURE__ */ u.createElement(He, { to: "/timer" }, /* @__PURE__ */ u.createElement(yy, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Таймер")), /* @__PURE__ */ u.createElement(He, { to: "/alarm" }, /* @__PURE__ */ u.createElement(of, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Будильник")), /* @__PURE__ */ u.createElement(He, { to: "/settings" }, /* @__PURE__ */ u.createElement(sf, { size: 20 }), /* @__PURE__ */ u.createElement("span", null, "Настройки")));
}, ng = "_container_99wio_1", rg = "_visible_99wio_20", kd = {
  container: ng,
  visible: rg
}, _r = ({
  children: l,
  offset: o = 100
}) => {
  const [i, c] = v.useState(!1);
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
      className: `${kd.container} ${i ? kd.visible : ""}`
    },
    l
  );
}, lg = "_page_qfpja_7", ag = "_header_qfpja_15", og = "_headerTop_qfpja_20", ig = "_heading_qfpja_27", sg = "_title_qfpja_32", ug = "_description_qfpja_41", cg = "_actions_qfpja_48", dg = "_list_qfpja_75", fg = "_state_qfpja_83", ae = {
  page: lg,
  header: ag,
  headerTop: og,
  heading: ig,
  title: sg,
  description: ug,
  actions: cg,
  list: dg,
  state: fg
}, mg = () => {
  const l = jt(), { ref: o, inView: i } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), [c, f] = v.useState(), [m, p] = v.useState(!1), [h, y] = v.useState(!1), [S, N] = v.useState({}), [_, C] = v.useState(!1), [L, D] = v.useState(!1), {
    loading: $,
    scripts: w,
    scriptData: P,
    loadScripts: M,
    saveScript: O,
    updateScript: z,
    getScriptAction: W,
    deleteScriptAction: j
  } = tv();
  v.useEffect(() => {
    !L || !l || !i || $ || !w || w.page >= w.total_pages || M(w.page + 1, !0);
  }, [
    i,
    l,
    $,
    w,
    M
  ]), v.useEffect(() => {
    !$ && w && w.page === 1 && D(!0);
  }, [$, w]);
  const ee = () => {
    f(void 0), C(!1), p(!0);
  }, ne = (ue) => {
    y(!0), N(ue);
  }, ye = async (ue) => {
    C(!0);
    const xe = await W(
      ue
    );
    f(xe), p(!0);
  }, ge = async (ue) => {
    if (_) {
      if (!ue.uuid) return;
      const { uuid: xe, ...Q } = ue;
      await z(ue.uuid, Q);
    } else
      await O(ue);
    p(!1);
  }, K = async (ue) => {
    ue && await j(ue);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, $ && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Скрипты"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ae.header }, /* @__PURE__ */ u.createElement("div", { className: ae.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ae.title }, "Сценарии"), /* @__PURE__ */ u.createElement("p", { className: ae.description }, "Создавайте автоматизации для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ae.actions }, l ? /* @__PURE__ */ u.createElement(_r, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: ee
    },
    "Добавить сценарий"
  )) : /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: ee
    },
    "🞢 Добавить сценарий"
  ))), /* @__PURE__ */ u.createElement("div", { className: ae.list }, w == null ? void 0 : w.script_actions.map((ue) => /* @__PURE__ */ u.createElement(
    yr,
    {
      key: ue.uuid,
      title: ue.title,
      subTitle: "Нажмите для редактирования",
      onClick: () => ne(ue)
    }
  )), l ? /* @__PURE__ */ u.createElement("div", { ref: o, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(u.Fragment, null)), l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(
    gr,
    {
      page: (w == null ? void 0 : w.page) || 1,
      totalPages: (w == null ? void 0 : w.total_pages) || 1,
      onChange: M
    }
  ), /* @__PURE__ */ u.createElement(
    Iv,
    {
      uuid: S.uuid,
      open: h,
      title: S.title,
      onClose: () => y(!1),
      onEdit: ye,
      onDelete: K
    }
  ), /* @__PURE__ */ u.createElement(
    Hy,
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
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, pg = (l) => ({
  data: Array.isArray(l == null ? void 0 : l.data) ? l.data : [],
  page: (l == null ? void 0 : l.page) ?? 1,
  page_size: (l == null ? void 0 : l.page_size) ?? 10,
  total_pages: (l == null ? void 0 : l.total_pages) ?? 1,
  total_items: (l == null ? void 0 : l.total_items) ?? 0
});
function pl(l) {
  const o = ml(), [i, c] = v.useState(null), [f, m] = v.useState(!0), p = v.useRef(!1), h = async (L, D = 1, $ = !1) => {
    m(!0);
    try {
      const w = pg(await o._getShort(`${L}`, D));
      c((P) => !$ || !P ? w : {
        ...w,
        data: [
          ...P.data,
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
    commands: i,
    loadCommands: h,
    saveCommand: async (L, D) => await o._save(D, L),
    deleteCommand: async (L, D) => await o._delete(D, L),
    updateCommand: async (L, D) => {
      if (console.log(D), !D.uuid) return;
      const { uuid: $, ...w } = D;
      return await o._update($, L, w);
    },
    editStatusCommand: async (L, D, $) => await o._update_status(L, D, $),
    detailInformationCommand: async (L, D) => await o._getDetail(D, L)
  };
}
const hg = "_field_1qtfn_1", vg = "_label_1qtfn_7", yg = "_select_1qtfn_13", qi = {
  field: hg,
  label: vg,
  select: yg
}, ns = ({
  label: l,
  options: o,
  className: i = "",
  value: c,
  ...f
}) => {
  const m = c == null ? "" : String(c), p = !m || o.some((h) => h.value === m);
  return /* @__PURE__ */ u.createElement("div", { className: qi.field }, l && /* @__PURE__ */ u.createElement("label", { className: qi.label }, l), /* @__PURE__ */ u.createElement(
    "select",
    {
      ...f,
      value: m,
      className: `${qi.select} ${i}`
    },
    !p && /* @__PURE__ */ u.createElement("option", { value: m }, m),
    o.map((h) => /* @__PURE__ */ u.createElement("option", { key: h.value, value: h.value }, h.label))
  ));
}, gg = "_switchRow_1lfy8_1", _g = "_input_1lfy8_11", Eg = "_track_1lfy8_22", wg = "_thumb_1lfy8_33", kg = "_label_1lfy8_62", sl = {
  switchRow: gg,
  input: _g,
  track: Eg,
  thumb: wg,
  label: kg
}, wn = ({ label: l, className: o = "", ...i }) => /* @__PURE__ */ u.createElement("label", { className: `${sl.switchRow} ${o}` }, /* @__PURE__ */ u.createElement("input", { ...i, type: "checkbox", className: sl.input }), /* @__PURE__ */ u.createElement("span", { className: sl.track, "aria-hidden": "true" }, /* @__PURE__ */ u.createElement("span", { className: sl.thumb })), /* @__PURE__ */ u.createElement("span", { className: sl.label }, l)), Sg = "_field_veq7g_1", Cg = "_label_veq7g_7", xg = "_textarea_veq7g_13", Ng = "_error_veq7g_40", Tg = "_errorText_veq7g_48", ul = {
  field: Sg,
  label: Cg,
  textarea: xg,
  error: Ng,
  errorText: Tg
}, Oa = ({
  label: l,
  error: o,
  className: i = "",
  ...c
}) => /* @__PURE__ */ u.createElement("div", { className: ul.field }, l && /* @__PURE__ */ u.createElement("label", { className: ul.label }, l), /* @__PURE__ */ u.createElement(
  "textarea",
  {
    ...c,
    className: `
          ${ul.textarea}
          ${o ? ul.error : ""}
          ${i}
        `
  }
), o && /* @__PURE__ */ u.createElement("span", { className: ul.errorText }, o)), Rg = [
  { label: "default", value: "default" },
  { label: "ha_storage", value: "ha_storage" }
], Pg = [
  { label: "all", value: "all" },
  { label: "string", value: "string" },
  { label: "int", value: "int" },
  { label: "date", value: "date" },
  { label: "time", value: "time" }
], Mg = [
  { label: "children", value: "children" },
  { label: "custom", value: "custom" },
  { label: "children_error", value: "children_error" }
], Lg = "_form_nymr0_1", Ig = "_field_nymr0_15", $g = "_textarea_nymr0_24", Dg = "_arrayItem_nymr0_37", At = {
  form: Lg,
  field: Ig,
  textarea: $g,
  arrayItem: Dg
}, Sd = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "", actionType: "", title: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "", title: "" }]
}), df = ({
  open: l,
  isEdit: o,
  formData: i,
  formatData: c,
  setFormData: f,
  onClose: m,
  onSave: p,
  onUpdate: h
}) => {
  const y = v.useMemo(() => {
    if (i[c]) return i[c] ?? Sd();
  }, [i]), [S, N] = v.useState({}), _ = (w) => {
    f((P) => ({
      ...P,
      [c]: {
        ...P[c] ?? Sd(),
        ...w
      }
    }));
  }, C = (w, P, M) => {
    const O = [...y[w] ?? []];
    O[P] = { ...O[P], ...M }, _({
      [w]: O
    });
  }, L = (w, P) => {
    _({
      [w]: [...y[w] ?? [], P]
    });
  }, D = (w, P) => {
    _({
      [w]: (y[w] ?? []).filter(
        (M, O) => O !== P
      )
    });
  }, $ = () => {
    var M;
    const w = {};
    return i.title.trim() || (w.title = "Обязательное поле"), (M = y.actionType) != null && M.trim() || (w.actionType = "Обязательное поле"), N(w), Object.keys(w).length === 0;
  };
  return /* @__PURE__ */ u.createElement(
    Mt,
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
    /* @__PURE__ */ u.createElement("div", { className: At.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: i.title,
        error: S.title,
        onChange: (w) => f({
          ...i,
          title: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      wn,
      {
        label: "Завершать диалог",
        checked: y.endStatus,
        onChange: (w) => _({
          endStatus: w.target.checked
        })
      }
    ), c == "subComponentDialog" ? /* @__PURE__ */ u.createElement(
      wn,
      {
        label: "Отправить команду как есть",
        checked: y.forwardText,
        onChange: (w) => _({
          forwardText: w.target.checked
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: y.actionType ?? "",
        error: S.actionType,
        onChange: (w) => _({
          actionType: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ns,
      {
        label: "answerType",
        value: y.answerType,
        options: Rg,
        onChange: (w) => _({
          answerType: w.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement("div", { className: At.field }, /* @__PURE__ */ u.createElement(
      Oa,
      {
        label: "voiceCommands",
        value: (y.voiceCommands == null ? [] : typeof y.voiceCommands != "object" ? y == null ? void 0 : y.voiceCommands.split(";") : y == null ? void 0 : y.voiceCommands).join(`
`),
        onChange: (w) => _({
          voiceCommands: w.target.value.split(`
`)
        })
      }
    )), /* @__PURE__ */ u.createElement(Ft, { title: "voiceResponseArray", defaultOpen: !0 }, (y.voiceResponseArray ?? []).map((w, P) => /* @__PURE__ */ u.createElement("div", { key: P, className: At.arrayItem }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: w.actionType,
        onChange: (M) => C("voiceResponseArray", P, {
          actionType: M.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Oa,
      {
        label: "voiceResponse",
        value: w.voiceResponse,
        onChange: (M) => C("voiceResponseArray", P, {
          voiceResponse: M.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("voiceResponseArray", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
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
    )), /* @__PURE__ */ u.createElement(Ft, { title: "nextAction", defaultOpen: !0 }, (y.nextAction ?? []).map((w, P) => /* @__PURE__ */ u.createElement("div", { key: P, className: At.arrayItem }, /* @__PURE__ */ u.createElement(
      ns,
      {
        label: "actionTypeComponent",
        value: w.actionTypeComponent,
        options: Mg,
        onChange: (M) => C("nextAction", P, {
          actionTypeComponent: M.target.value
        })
      }
    ), w.actionTypeComponent == "custom" ? /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: w.actionType ?? "",
        onChange: (M) => C("nextAction", P, {
          actionType: M.target.value
        })
      }
    ) : /* @__PURE__ */ u.createElement(u.Fragment, null), /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "uuid",
        value: w.uuid,
        searchSource: ["search_assistant_commands", "search_assistant_sub_commands"],
        selectedTitle: w.title,
        onChange: (M) => C("nextAction", P, {
          uuid: M
        }),
        onSelect: (M) => C("nextAction", P, {
          uuid: M.uuid,
          title: M.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextAction", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
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
    )), /* @__PURE__ */ u.createElement(Ft, { title: "nextDirectControl", defaultOpen: !0 }, (y.nextDirectControl ?? []).map((w, P) => /* @__PURE__ */ u.createElement("div", { key: P, className: At.arrayItem }, /* @__PURE__ */ u.createElement(
      fr,
      {
        label: "uuid",
        value: w.uuid,
        selectedTitle: w.title,
        searchSource: ["search_assistant_sub_direct_controls"],
        onChange: (M) => C("nextDirectControl", P, {
          uuid: M
        }),
        onSelect: (M) => C("nextDirectControl", P, {
          uuid: M.uuid,
          mappingType: M.mappingType ?? "",
          title: M.title ?? ""
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "mappingType",
        disabled: !0,
        value: w.mappingType ?? "",
        onChange: (M) => C("nextDirectControl", P, {
          actionType: M.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "ghost",
        onClick: () => D("nextDirectControl", P)
      },
      "Удалить"
    ))), /* @__PURE__ */ u.createElement(
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
}, zg = "_content_19r5a_1", Og = "_title_19r5a_7", Ag = "_actions_19r5a_14", Yi = {
  content: zg,
  title: Og,
  actions: Ag
}, Ba = ({
  open: l,
  command: o,
  onClose: i,
  onToggleStatus: c,
  onEdit: f,
  onDelete: m
}) => {
  const p = jt();
  if (!o) return null;
  const h = /* @__PURE__ */ u.createElement("div", { className: Yi.content }, /* @__PURE__ */ u.createElement("h3", { className: Yi.title }, o.title), /* @__PURE__ */ u.createElement("div", { className: Yi.actions }, /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      onClick: () => {
        c(o.uuid, !o.status), i();
      }
    },
    o.status ? "Выключить" : "Включить"
  ), /* @__PURE__ */ u.createElement(
    se,
    {
      fullWidth: !0,
      variant: "secondary",
      onClick: () => {
        f(o.uuid), i();
      }
    },
    "Изменить"
  ), /* @__PURE__ */ u.createElement(
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
  return /* @__PURE__ */ u.createElement(u.Fragment, null, p ? /* @__PURE__ */ u.createElement(lf, { open: l, onClose: i }, h) : /* @__PURE__ */ u.createElement(
    Mt,
    {
      open: l,
      onClose: i,
      title: "Действия"
    },
    h
  ));
}, Fg = () => ({
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
    ...Fg(),
    forwardText: !1
  }
}), bg = () => {
  const l = jt(), [o, i] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(
    () => Cd()
  ), [h, y] = v.useState(
    null
  ), { ref: S, inView: N } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: C,
    deleteCommand: L,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: w,
    editStatusCommand: P,
    commands: M
  } = pl("get_assistant_commands_short"), [O, z] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !N || _ || !M || M.page >= M.total_pages || C("get_assistant_commands_short", M.page + 1, !0);
  }, [N, l, _, M, C]), v.useEffect(() => {
    !_ && M && M.page === 1 && z(!0);
  }, [_, M]);
  const W = () => {
    f(!1), p(Cd()), i(!0);
  }, j = async (K) => {
    f(!0);
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
    ), C("get_assistant_commands_short");
  }, ne = async (K) => {
    await L("delete_assistant_command", K), C("get_assistant_commands_short");
  }, ye = async () => {
    await $("save_assistant_command", m), i(!1);
  }, ge = async () => {
    await w("update_assistant_command", m), i(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, _ && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Комманды"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: ae.header }, /* @__PURE__ */ u.createElement("div", { className: ae.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ae.title }, "Комманды"), /* @__PURE__ */ u.createElement("p", { className: ae.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ae.actions }, l ? /* @__PURE__ */ u.createElement(_r, null, /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: W }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: W }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: ae.list }, M == null ? void 0 : M.data.map((K) => /* @__PURE__ */ u.createElement(
    yr,
    {
      key: K.uuid,
      title: K.title,
      subTitle: K.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(K)
    }
  )), l ? /* @__PURE__ */ u.createElement("div", { ref: S, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(u.Fragment, null)), l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(
    gr,
    {
      page: (M == null ? void 0 : M.page) || 1,
      totalPages: (M == null ? void 0 : M.total_pages) || 1,
      onChange: (K) => C("get_assistant_commands_short", K)
    }
  ), /* @__PURE__ */ u.createElement(
    df,
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
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ee,
      onDelete: ne,
      onEdit: (K) => j(K)
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, jg = () => ({
  endStatus: !0,
  actionType: "",
  answerType: "default",
  voiceCommands: [""],
  nextDirectControl: [{ uuid: "" }],
  voiceResponseArray: [{ actionType: "", voiceResponse: "" }],
  nextAction: [{ actionTypeComponent: "", actionType: "", uuid: "" }]
}), xd = () => ({
  status: !1,
  title: "",
  subComponentDialog: {
    ...jg(),
    forwardText: !1
  }
}), Ug = () => {
  const l = jt(), [o, i] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => xd()), [h, y] = v.useState(null), { ref: S, inView: N } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: _,
    loadCommands: C,
    deleteCommand: L,
    detailInformationCommand: D,
    saveCommand: $,
    updateCommand: w,
    editStatusCommand: P,
    commands: M
  } = pl("get_assistant_sub_commands_short"), [O, z] = v.useState(!1);
  v.useEffect(() => {
    !O || !l || !N || _ || !M || M.page >= M.total_pages || C("get_assistant_sub_commands_short", M.page + 1, !0);
  }, [
    N,
    l,
    _,
    M,
    C
  ]), v.useEffect(() => {
    !_ && M && M.page === 1 && z(!0);
  }, [_, M]);
  const W = () => {
    f(!1), p(xd()), i(!0);
  }, j = async (K) => {
    f(!0);
    const ue = await D("get_assistant_sub_command", K);
    p(ue.data), i(!0);
  }, ee = async (K, ue) => {
    await P("update_assistant_sub_command_status", K, ue), C("get_assistant_sub_commands_short");
  }, ne = async (K) => {
    await L("delete_assistant_sub_command", K), C("get_assistant_sub_commands_short");
  }, ye = async () => {
    await $("save_assistant_sub_command", m), i(!1);
  }, ge = async () => {
    await w("update_assistant_sub_command_status", m), i(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Второстепенные команды"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), _ && /* @__PURE__ */ u.createElement("div", { className: ae.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ae.header }, /* @__PURE__ */ u.createElement("div", { className: ae.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ae.title }, "Второстепенные команды "), /* @__PURE__ */ u.createElement("p", { className: ae.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ae.actions }, l ? /* @__PURE__ */ u.createElement(_r, null, /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: W }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: W }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: ae.list }, M == null ? void 0 : M.data.map((K) => /* @__PURE__ */ u.createElement(
    yr,
    {
      key: K.uuid,
      title: K.title,
      subTitle: K.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(K)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: S, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    gr,
    {
      page: (M == null ? void 0 : M.page) || 1,
      totalPages: (M == null ? void 0 : M.total_pages) || 1,
      onChange: (K) => C("get_assistant_sub_commands_short", K)
    }
  ), /* @__PURE__ */ u.createElement(
    df,
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
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: ee,
      onDelete: ne,
      onEdit: (K) => j(K)
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Nd = () => ({
  mappingType: "",
  valueType: "",
  voiceCommands: [""],
  manual: !1,
  subDirectControl: ""
}), Bg = ({
  open: l,
  onClose: o,
  title: i,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(() => c.directControl ?? Nd(), [c]), h = (_) => {
    f((C) => ({
      ...C,
      directControl: {
        ...C.directControl ?? Nd(),
        ..._
      }
    }));
  }, y = (_, C) => {
    const L = [...p.subDirectControl ?? []];
    L[_] = {
      ...L[_],
      ...C
    }, h({
      subDirectControl: L
    });
  }, S = () => {
    h({
      subDirectControl: [
        ...p.subDirectControl ?? [],
        {
          subMappingType: "",
          subVoiceCommands: ""
        }
      ]
    });
  }, N = (_) => {
    h({
      subDirectControl: (p.subDirectControl ?? []).filter((C, L) => L !== _)
    });
  };
  return /* @__PURE__ */ u.createElement(
    Mt,
    {
      open: l,
      onClose: o,
      title: i,
      footer: /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить"))
    },
    /* @__PURE__ */ u.createElement("div", { className: At.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((C) => ({
          ...C,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "mappingType",
        value: p.mappingType,
        onChange: (_) => h({
          mappingType: _.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      ns,
      {
        label: "valueType",
        value: p.valueType,
        options: Pg,
        onChange: (_) => h({
          valueType: _.target.value
        })
      }
    ), p.valueType == "command" ? /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("div", { className: At.field }, /* @__PURE__ */ u.createElement(
      Oa,
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
      wn,
      {
        label: "manual",
        checked: p.manual,
        onChange: (_) => h({
          manual: _.target.checked,
          subDirectControl: _.target.checked ? [] : ""
        })
      }
    ), p.manual ? /* @__PURE__ */ u.createElement(Ft, { title: "subDirectControl", defaultOpen: !0 }, (p.subDirectControl ?? []).map(
      (_, C) => /* @__PURE__ */ u.createElement("div", { key: C, className: At.arrayItem }, /* @__PURE__ */ u.createElement(
        Ce,
        {
          label: "subMappingType",
          value: _.subMappingType,
          onChange: (L) => y(C, {
            subMappingType: L.target.value
          })
        }
      ), /* @__PURE__ */ u.createElement("div", { className: At.field }, /* @__PURE__ */ u.createElement("label", null, "subVoiceCommands"), /* @__PURE__ */ u.createElement(
        "textarea",
        {
          className: At.textarea,
          rows: 3,
          value: _.subVoiceCommands,
          onChange: (L) => y(C, {
            subVoiceCommands: L.target.value
          })
        }
      )), /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "ghost",
          onClick: () => N(C)
        },
        "Удалить"
      ))
    ), /* @__PURE__ */ u.createElement(
      se,
      {
        type: "button",
        variant: "secondary",
        onClick: S
      },
      "Добавить ещё"
    )) : /* @__PURE__ */ u.createElement(
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
    ), " ") : /* @__PURE__ */ u.createElement(u.Fragment, null))
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
}), Wg = () => {
  const l = jt(), [o, i] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(() => Td()), [h, y] = v.useState(null), S = [
    { key: "main", label: "Основной" },
    { key: "template", label: "Шаблон" }
  ], [N, _] = v.useState("main"), C = hr(), { ref: L, inView: D } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: $,
    loadCommands: w,
    deleteCommand: P,
    detailInformationCommand: M,
    saveCommand: O,
    updateCommand: z,
    editStatusCommand: W,
    commands: j
  } = pl("get_assistant_sub_direct_controls_short"), [ee, ne] = v.useState(!1);
  v.useEffect(() => {
    !ee || !l || !D || $ || !j || j.page >= j.total_pages || w("get_assistant_sub_direct_controls_short", j.page + 1, !0);
  }, [
    D,
    l,
    $,
    j,
    w
  ]), v.useEffect(() => {
    !$ && j && j.page === 1 && ne(!0);
  }, [$, j]);
  const ye = () => {
    f(!1), p(Td()), i(!0);
  }, ge = async (q) => {
    f(!0);
    const Re = await M("get_assistant_sub_direct_control", q);
    p(Re.data), i(!0);
  }, K = async (q, Re) => {
    await W("update_assistant_sub_direct_controls_status", q, Re), w("get_assistant_sub_direct_controls_short");
  }, ue = async (q) => {
    await P("delete_assistant_sub_direct_control", q), w("get_assistant_sub_direct_controls_short");
  }, xe = async () => {
    await O("save_assistant_sub_direct_control", m), i(!1);
  }, Q = async () => {
    await z("update_assistant_sub_direct_control", m), i(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Прямые команды"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), $ && /* @__PURE__ */ u.createElement("div", { className: ae.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ae.header }, /* @__PURE__ */ u.createElement("div", { className: ae.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ae.title }, "Прямые команды"), /* @__PURE__ */ u.createElement("div", { className: ae.innerTabs }, S.map((q) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: q.key,
      type: "button",
      className: `${ae.innerTab} ${N === q.key ? ae.activeInnerTab : ""}`,
      onClick: () => {
        _(q.key), C(`/commands/direct/${q.key === "main" ? "main" : "template"}`);
      }
    },
    q.label
  ))), /* @__PURE__ */ u.createElement("p", { className: ae.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ae.actions }, l ? /* @__PURE__ */ u.createElement(_r, null, /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: ye }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: ye }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: ae.list }, j == null ? void 0 : j.data.map((q) => /* @__PURE__ */ u.createElement(
    yr,
    {
      key: q.uuid,
      title: q.title,
      subTitle: q.status === !1 ? "Выключена" : "Включена",
      onClick: () => y(q)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: L, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    gr,
    {
      page: (j == null ? void 0 : j.page) || 1,
      totalPages: (j == null ? void 0 : j.total_pages) || 1,
      onChange: (q) => w("get_assistant_sub_direct_controls_short", q)
    }
  ), /* @__PURE__ */ u.createElement(
    Bg,
    {
      open: o,
      onClose: () => i(!1),
      title: "modalTitle",
      formData: m,
      setFormData: p,
      onSave: c ? Q : xe
    }
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!h,
      command: h,
      onClose: () => y(null),
      onToggleStatus: K,
      onDelete: ue,
      onEdit: (q) => ge(q)
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Rd = {}, Hg = ({
  open: l,
  onClose: o,
  title: i,
  formData: c,
  setFormData: f,
  onSave: m
}) => {
  const p = v.useMemo(
    () => c.subDirectControl ?? [],
    [c]
  ), h = (_) => {
    f((C) => ({
      ...C,
      subDirectControl: _
    }));
  }, y = (_, C) => {
    const L = [...p];
    L[_] = {
      ...L[_],
      ...C
    }, h(L);
  }, S = () => {
    h([
      ...p,
      {
        subMappingType: "",
        subVoiceCommands: ""
      }
    ]);
  }, N = (_) => {
    h(
      p.filter((C, L) => L !== _)
    );
  };
  return /* @__PURE__ */ u.createElement(
    Mt,
    {
      open: l,
      onClose: o,
      title: i,
      footer: /* @__PURE__ */ u.createElement(se, { onClick: m }, "Сохранить")
    },
    /* @__PURE__ */ u.createElement("div", { className: Rd.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: c.title,
        onChange: (_) => f((C) => ({
          ...C,
          title: _.target.value
        }))
      }
    ), /* @__PURE__ */ u.createElement(
      Ft,
      {
        title: "subDirectControl",
        defaultOpen: !0
      },
      p.map((_, C) => /* @__PURE__ */ u.createElement(
        "div",
        {
          key: C,
          className: Rd.arrayItem
        },
        /* @__PURE__ */ u.createElement(
          Ce,
          {
            label: "subMappingType",
            value: _.subMappingType ?? "",
            onChange: (L) => y(C, {
              subMappingType: L.target.value
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          Oa,
          {
            label: "subVoiceCommands",
            rows: 3,
            value: (typeof _.subVoiceCommands == "object" ? _.subVoiceCommands : []).join(`
`),
            onChange: (L) => y(C, {
              subVoiceCommands: L.target.value.split(`
`).filter(Boolean)
            })
          }
        ),
        /* @__PURE__ */ u.createElement(
          se,
          {
            type: "button",
            variant: "ghost",
            onClick: () => N(C)
          },
          "Удалить"
        )
      )),
      /* @__PURE__ */ u.createElement(
        se,
        {
          type: "button",
          variant: "secondary",
          onClick: S
        },
        "Добавить ещё"
      )
    ))
  );
}, Pd = () => ({
  status: !1,
  title: "",
  directTemplate: {
    subDirectControl: []
  }
}), Vg = () => {
  const l = jt(), o = hr(), [i, c] = v.useState(!1), [f, m] = v.useState(!1), [p, h] = v.useState(Pd), [y, S] = v.useState(null), [N, _] = v.useState("template"), [C, L] = v.useState(!1), D = [
    {
      key: "main",
      label: "Основной"
    },
    {
      key: "template",
      label: "Шаблон"
    }
  ], { ref: $, inView: w } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: P,
    loadCommands: M,
    deleteCommand: O,
    detailInformationCommand: z,
    saveCommand: W,
    updateCommand: j,
    editStatusCommand: ee,
    commands: ne
  } = pl(
    "get_assistant_sub_direct_control_samples_short"
  );
  v.useEffect(() => {
    !C || !l || !w || P || !ne || ne.page >= ne.total_pages || M(
      "get_assistant_sub_direct_control_samples_short",
      ne.page + 1,
      !0
    );
  }, [
    C,
    w,
    l,
    P,
    ne,
    M
  ]), v.useEffect(() => {
    !P && ne && ne.page === 1 && L(!0);
  }, [P, ne]);
  const ye = () => {
    m(!1), h(Pd()), c(!0);
  }, ge = async (q) => {
    m(!0);
    const Re = await z(
      "get_assistant_sub_direct_control_sample",
      q
    );
    h(Re.data), c(!0);
  }, K = async (q, Re) => {
    await ee(
      "update_assistant_sub_direct_control",
      q,
      Re
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
  }, xe = async () => {
    await W(
      "save_assistant_sub_direct_control_sample",
      p
    ), c(!1), M(
      "get_assistant_sub_direct_control_samples_short"
    );
  }, Q = async () => {
    await j(
      "update_assistant_sub_direct_control_sample",
      p
    ), c(!1), M(
      "get_assistant_sub_direct_control_samples_short"
    );
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Прямые команды шаблоны"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, !l && /* @__PURE__ */ u.createElement(Gt, null), P && /* @__PURE__ */ u.createElement("div", { className: ae.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ae.header }, /* @__PURE__ */ u.createElement("div", { className: ae.heading }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", { className: ae.title }, "Прямые команды шаблоны"), /* @__PURE__ */ u.createElement("div", { className: ae.innerTabs }, D.map((q) => /* @__PURE__ */ u.createElement(
    "button",
    {
      key: q.key,
      type: "button",
      className: `${ae.innerTab} ${N === q.key ? ae.activeInnerTab : ""}`,
      onClick: () => {
        _(q.key), o(`/commands/direct/${q.key === "main" ? "main" : "template"}`);
      }
    },
    q.label
  ))), /* @__PURE__ */ u.createElement("p", { className: ae.description }, "Создавайте команды для управления устройствами и объединяйте действия в единые сценарии.")), /* @__PURE__ */ u.createElement("div", { className: ae.actions }, l ? /* @__PURE__ */ u.createElement(_r, null, /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: ye }, "Добавить сценарий")) : /* @__PURE__ */ u.createElement(se, { variant: "primary", onClick: ye }, "🞢 Добавить сценарий"))), /* @__PURE__ */ u.createElement("div", { className: ae.list }, ne == null ? void 0 : ne.data.map((q) => /* @__PURE__ */ u.createElement(
    yr,
    {
      key: q.uuid,
      title: q.title,
      subTitle: q.status === !1 ? "Выключена" : "Включена",
      onClick: () => S(q)
    }
  ))), l ? /* @__PURE__ */ u.createElement(
    "div",
    {
      ref: $,
      style: { height: 1 }
    }
  ) : /* @__PURE__ */ u.createElement(
    gr,
    {
      page: (ne == null ? void 0 : ne.page) ?? 1,
      totalPages: (ne == null ? void 0 : ne.total_pages) ?? 1,
      onChange: (q) => M(
        "get_assistant_sub_direct_control_samples_short",
        q
      )
    }
  ), /* @__PURE__ */ u.createElement(
    Hg,
    {
      open: i,
      onClose: () => c(!1),
      title: f ? "Редактировать" : "Создать",
      formData: p,
      setFormData: h,
      onSave: f ? Q : xe
    }
  ), /* @__PURE__ */ u.createElement(
    Ba,
    {
      open: !!y,
      command: y,
      onClose: () => S(null),
      onToggleStatus: K,
      onDelete: ue,
      onEdit: (q) => ge(q)
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
}, Qg = "_form_nymr0_1", qg = {
  form: Qg
}, Yg = ({
  open: l,
  isEdit: o,
  formData: i,
  setFormData: c,
  onClose: f,
  onUpdate: m
}) => {
  if (!i) return;
  const p = v.useMemo(() => {
    if (i) return i;
  }, [i]), h = (y) => {
    c((S) => ({
      ...S,
      ...y
    }));
  };
  return /* @__PURE__ */ u.createElement(
    Mt,
    {
      open: l,
      onClose: f,
      title: o ? "Редактировать" : "Создать",
      footer: /* @__PURE__ */ u.createElement(se, { onClick: m }, "Обновить")
    },
    /* @__PURE__ */ u.createElement("div", { className: qg.form }, /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Название команды",
        value: i.title,
        onChange: (y) => c({
          ...i,
          title: y.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      wn,
      {
        label: "Завершать диалог",
        checked: p.endStatus,
        onChange: (y) => h({
          endStatus: y.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      wn,
      {
        label: "Передать команду серверу",
        checked: p.forwardCommandToServer,
        onChange: (y) => h({
          forwardCommandToServer: y.target.checked
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "actionType",
        value: p.actionType,
        onChange: (y) => h({
          actionType: y.target.value
        })
      }
    ), /* @__PURE__ */ u.createElement(
      Ce,
      {
        label: "Ответное сообщение",
        value: p.voiceResponse,
        onChange: (y) => h({
          voiceResponse: y.target.value
        })
      }
    ))
  );
}, Kg = () => {
  const l = jt(), [o, i] = v.useState(!1), [c, f] = v.useState(!1), [m, p] = v.useState(), { ref: h, inView: y } = vr({
    threshold: 1,
    rootMargin: "0px"
  }), {
    loading: S,
    loadCommands: N,
    detailInformationCommand: _,
    updateCommand: C,
    commands: L
  } = pl("get_assistant_settings_short"), [D, $] = v.useState(!1);
  v.useEffect(() => {
    !D || !l || !y || S || !L || L.page >= L.total_pages || N("get_assistant_settings_short", L.page + 1, !0);
  }, [
    y,
    l,
    S,
    L,
    N
  ]), v.useEffect(() => {
    !S && L && L.page === 1 && $(!0);
  }, [S, L]);
  const w = async (M) => {
    f(!0);
    const O = await _("get_assistant_setting", M.uuid);
    p(O.data), i(!0);
  }, P = async () => {
    await C("update_assistant_setting", m), i(!1);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Настройки команд"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement(Gt, null), S && /* @__PURE__ */ u.createElement("div", { className: ae.state }, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: ae.header }, /* @__PURE__ */ u.createElement("div", { className: ae.headerTop }, /* @__PURE__ */ u.createElement("div", { className: ae.heading }, /* @__PURE__ */ u.createElement("p", { className: ae.description }, "Создавайте и редактируйте голосовые команды ассистента.")))), /* @__PURE__ */ u.createElement("div", { className: ae.list }, L == null ? void 0 : L.data.map((M) => /* @__PURE__ */ u.createElement(
    yr,
    {
      key: M.uuid,
      title: M.title,
      subTitle: M.actionType,
      onClick: () => w(M)
    }
  ))), l ? /* @__PURE__ */ u.createElement("div", { ref: h, style: { height: 1 } }) : /* @__PURE__ */ u.createElement(
    gr,
    {
      page: (L == null ? void 0 : L.page) || 1,
      totalPages: (L == null ? void 0 : L.total_pages) || 1,
      onChange: (M) => N("get_assistant_settings_short", M)
    }
  ), /* @__PURE__ */ u.createElement(
    Yg,
    {
      open: o,
      isEdit: c,
      formData: m,
      setFormData: p,
      onClose: () => i(!1),
      onUpdate: P
    }
  )), /* @__PURE__ */ u.createElement(Xt, null));
};
function Gg() {
  const l = ml(), [o, i] = v.useState(!0), [c, f] = v.useState(null), m = v.useCallback(async () => {
    i(!0);
    try {
      const h = await l._getShort("get_settings");
      console.log(h), f((h == null ? void 0 : h.result) ?? h);
    } finally {
      i(!1);
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
const Xg = "_form_1bj0d_1", Jg = "_field_1bj0d_7", Zg = "_input_1bj0d_13", e_ = "_label_1bj0d_32", dt = {
  form: Xg,
  field: Jg,
  input: Zg,
  label: e_
}, t_ = ({ data: l, onChange: o }) => {
  const i = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(Ce, { label: "API Key", value: l.api_key ?? "", onChange: (c) => i("api_key", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Folder ID", value: l.folderId ?? "", onChange: (c) => i("folderId", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Language", value: l.language ?? "", placeholder: "ru-RU", onChange: (c) => i("language", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Voice", value: l.voice ?? "", onChange: (c) => i("voice", c.target.value) }), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Codec"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.codec ?? "", onChange: (c) => i("codec", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "oggopus" }, "oggopus"), /* @__PURE__ */ u.createElement("option", { value: "wav" }, "wav"), /* @__PURE__ */ u.createElement("option", { value: "lpcm" }, "lpcm"))), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Emotion"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.emotion ?? "", onChange: (c) => i("emotion", c.target.value || void 0) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Не выбрано"), /* @__PURE__ */ u.createElement("option", { value: "good" }, "good"), /* @__PURE__ */ u.createElement("option", { value: "neutral" }, "neutral"), /* @__PURE__ */ u.createElement("option", { value: "evil" }, "evil"))), /* @__PURE__ */ u.createElement(Ce, { label: "Speed", type: "number", step: "0.1", min: "0.1", value: l.speed ?? "", onChange: (c) => i("speed", c.target.value === "" ? void 0 : Number(c.target.value)) }));
}, n_ = ({ data: l, onChange: o }) => {
  const i = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(Ce, { label: "Base URL", value: l.base_url ?? "", placeholder: "http://192.168.31.83:9379", onChange: (c) => i("base_url", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Token", value: l.token ?? "", placeholder: "Bearer ...", onChange: (c) => i("token", c.target.value) }));
}, r_ = ({ data: l, onChange: o }) => {
  const i = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(Ce, { label: "Global music timer", value: l.global_music_timer ?? "", onChange: (c) => i("global_music_timer", c.target.value) }), /* @__PURE__ */ u.createElement(Ce, { label: "Global music alarm", value: l.global_music_alarm ?? "", onChange: (c) => i("global_music_alarm", c.target.value) }));
}, l_ = ({ data: l, onChange: o }) => {
  const i = (c, f) => {
    o({
      ...l,
      [c]: f
    });
  };
  return /* @__PURE__ */ u.createElement("div", { className: dt.form }, /* @__PURE__ */ u.createElement(
    Ce,
    {
      label: "Client ID",
      value: l.client_id ?? "",
      onChange: (c) => i("client_id", c.target.value),
      placeholder: "Уникальный идентификатор клиента"
    }
  ), /* @__PURE__ */ u.createElement("label", { className: dt.field }, /* @__PURE__ */ u.createElement("span", { className: dt.label }, "Theme"), /* @__PURE__ */ u.createElement("select", { className: dt.input, value: l.theme ?? "dark", onChange: (c) => i("theme", c.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "dark" }, "dark"), /* @__PURE__ */ u.createElement("option", { value: "light" }, "light"))), /* @__PURE__ */ u.createElement(wn, { label: "Is admin", checked: !!l.is_admin, onChange: (c) => i("is_admin", c.target.checked) }), /* @__PURE__ */ u.createElement(wn, { label: "Active remout", checked: !!l.active_remout, onChange: (c) => i("active_remout", c.target.checked) }), /* @__PURE__ */ u.createElement(wn, { label: "Enable API (/api/dialog/commands, /api/dialog/events, /api/dialog/event)", checked: !!l.api_commands_enabled, onChange: (c) => i("api_commands_enabled", c.target.checked) }), l.api_commands_enabled && /* @__PURE__ */ u.createElement(
    Ce,
    {
      label: "API Commands Token",
      value: l.api_commands_token ?? "",
      onChange: (c) => i("api_commands_token", c.target.value),
      placeholder: "Ключ доступа для API endpoints",
      type: "password"
    }
  ));
}, a_ = {
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
}, o_ = {
  global_music_timer: "",
  global_music_alarm: ""
}, Md = {
  yandex_tts: a_,
  remout: Aa,
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
}), Ki = (l, o) => {
  const i = {};
  return Object.keys(l).forEach((c) => {
    const f = c;
    l[f] !== o[f] && (i[f] = l[f]);
  }), i;
}, d_ = (l, o) => {
  const i = {}, c = Ki(l.yandex_tts, o.yandex_tts), f = Ki(l.timer_alarm, o.timer_alarm);
  if (Object.keys(c).length > 0 && (i.yandex_tts = c), Object.keys(f).length > 0 && (i.timer_alarm = f), l.theme !== o.theme && (i.theme = l.theme), l.is_admin !== o.is_admin && (i.is_admin = l.is_admin), l.active_remout !== o.active_remout && (i.active_remout = l.active_remout), l.client_id !== o.client_id && (i.client_id = l.client_id), l.api_commands_enabled !== o.api_commands_enabled && (i.api_commands_enabled = l.api_commands_enabled), l.api_commands_token !== o.api_commands_token && (i.api_commands_token = l.api_commands_token), l.active_remout) {
    const m = Ki(l.remout ?? Aa, o.remout ?? Aa);
    Object.keys(m).length > 0 && (i.remout = m);
  }
  return i;
}, f_ = () => {
  const l = jt(), [o, i] = v.useState(Md), [c, f] = v.useState(Md), { settings: m, saveSettings: p } = Gg();
  v.useEffect(() => {
    if (!m) return;
    const y = c_(m);
    i(y), f(y);
  }, [m]);
  const h = () => {
    const y = d_(o, c);
    p(y);
  };
  return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(
    bn,
    {
      title: "Настройки"
    }
  ), /* @__PURE__ */ u.createElement("div", { className: ae.page }, /* @__PURE__ */ u.createElement(Gt, null), l ? /* @__PURE__ */ u.createElement(u.Fragment, null) : /* @__PURE__ */ u.createElement("h1", null, "Настройки"), /* @__PURE__ */ u.createElement("div", { style: {
    display: "flex",
    "flex-direction": "column",
    height: "100%",
    ...l ? { marginBottom: "150px" } : {},
    gap: "15px"
  } }, /* @__PURE__ */ u.createElement(Ft, { title: "Общие", defaultOpen: !0 }, /* @__PURE__ */ u.createElement(
    l_,
    {
      data: {
        active_remout: o.active_remout,
        is_admin: o.is_admin,
        theme: o.theme,
        client_id: o.client_id,
        api_commands_enabled: o.api_commands_enabled,
        api_commands_token: o.api_commands_token
      },
      onChange: (y) => i({ ...o, ...y })
    }
  )), /* @__PURE__ */ u.createElement(Ft, { title: "Яндекс TTS" }, /* @__PURE__ */ u.createElement(
    t_,
    {
      data: o.yandex_tts,
      onChange: (y) => i({ ...o, yandex_tts: y })
    }
  )), o.active_remout && /* @__PURE__ */ u.createElement(Ft, { title: "Remote" }, /* @__PURE__ */ u.createElement(
    n_,
    {
      data: o.remout ?? Aa,
      onChange: (y) => i({ ...o, remout: y })
    }
  )), /* @__PURE__ */ u.createElement(Ft, { title: "Timer / Alarm" }, /* @__PURE__ */ u.createElement(
    r_,
    {
      data: o.timer_alarm,
      onChange: (y) => i({ ...o, timer_alarm: y })
    }
  ))), l ? /* @__PURE__ */ u.createElement(_r, null, /* @__PURE__ */ u.createElement(
    se,
    {
      variant: "primary",
      onClick: h
    },
    "Сохранить"
  )) : /* @__PURE__ */ u.createElement(se, { onClick: h }, "Сохранить")), /* @__PURE__ */ u.createElement(Xt, null));
}, An = (l) => {
  var o;
  return ((o = l == null ? void 0 : l.result) == null ? void 0 : o.data) ?? (l == null ? void 0 : l.result) ?? (l == null ? void 0 : l.data) ?? l;
}, m_ = (l) => {
  const o = Math.max(1, Number(l) || 1);
  return new Date(Date.now() + o * 1e3).toISOString();
}, ff = (l) => {
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
    return ff(l.count_timer || "");
  }
  return 0;
}, Ld = (l) => {
  const o = Math.max(1, Number(l) || 1), i = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return `${String(i).padStart(2, "0")}:${String(c).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}, Gi = (l) => {
  const o = An(l);
  return Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.data) ? o.data : [];
};
function mf() {
  const l = ml(), [o, i] = v.useState([]), [c, f] = v.useState([]), [m, p] = v.useState([]), [h, y] = v.useState(!0), S = v.useMemo(() => l.getDevices(), [l]), N = v.useCallback(async () => {
    const O = await l._getShort("get_timer_requests_short", 1, 100), z = await Promise.all(
      Gi(O).map(async (W) => {
        var ee;
        const j = await l._getDetail(W.uuid, "get_timer_request");
        return ((ee = An(j)) == null ? void 0 : ee.data) ?? An(j);
      })
    );
    i(z.filter((W) => !!W && W.action_type === "create_timer"));
  }, [l]), _ = v.useCallback(async () => {
    const O = await l._getShort("get_alarm_requests_short", 1, 100), z = await Promise.all(
      Gi(O).map(async (W) => {
        var ee;
        const j = await l._getDetail(W.uuid, "get_alarm_request");
        return ((ee = An(j)) == null ? void 0 : ee.data) ?? An(j);
      })
    );
    f(z.filter((W) => !!W && W.action_type !== "delete_alarm"));
  }, [l]), C = v.useCallback(async () => {
    const O = await l._getShort("get_alarm_time_widgets_short", 1, 100), z = await Promise.all(
      Gi(O).map(async (W) => {
        var ee;
        const j = await l._getDetail(W.uuid, "get_alarm_time_widget");
        return ((ee = An(j)) == null ? void 0 : ee.data) ?? An(j);
      })
    );
    p(z.filter(Boolean));
  }, [l]), L = v.useCallback(async () => {
    y(!0);
    try {
      await Promise.all([N(), _(), C()]);
    } finally {
      y(!1);
    }
  }, [_, C, N]);
  return v.useEffect(() => {
    L();
  }, []), {
    alarmTimeWidgets: m,
    alarms: c,
    createAlarm: async (O, z, W = 0.3, j = "once", ee = []) => {
      await l._save({ name: `Будильник ${z}`, action_type: "create_alarm", device_id: O, status: "on", time: z, volume_start: W, repeat_type: j, repeat_days: ee }, "save_alarm_request"), await _();
    },
    createTimer: async (O, z, W = 0.3) => {
      const j = {
        count_timer: Ld(z),
        date_end: m_(z)
      };
      await l._save({ name: `Таймер ${Ld(z)}`, action_type: "create_timer", device_id: O, timer_time: j, volume_start: W }, "save_timer_request"), await N();
    },
    deleteAlarm: async (O) => {
      await l._delete(O.uuid, "delete_alarm_request"), await _();
    },
    devices: S,
    loading: h,
    stopTimer: async (O) => {
      await l._delete(O.uuid, "delete_timer_request"), await N();
    },
    timers: o,
    toTimerSeconds: ff,
    updateAlarm: async (O, z) => {
      await l._update(O.uuid, "update_alarm_request", { ...O, action_type: "edit_alarm", ...z }), await _();
    }
  };
}
const p_ = "_page_1lgxb_1", h_ = "_header_1lgxb_11", v_ = "_title_1lgxb_18", y_ = "_description_1lgxb_25", g_ = "_grid_1lgxb_31", __ = "_card_1lgxb_37", E_ = "_empty_1lgxb_37", w_ = "_cardHeader_1lgxb_44", k_ = "_cardTitle_1lgxb_51", S_ = "_meta_1lgxb_56", C_ = "_time_1lgxb_62", x_ = "_form_1lgxb_69", N_ = "_field_1lgxb_75", T_ = "_label_1lgxb_81", R_ = "_select_1lgxb_87", P_ = "_input_1lgxb_87", M_ = "_quickTabs_1lgxb_97", L_ = "_quickTab_1lgxb_97", I_ = "_activeQuickTab_1lgxb_113", $_ = "_row_1lgxb_118", D_ = "_cardLead_1lgxb_137", z_ = "_cardIcon_1lgxb_144", O_ = "_cardButton_1lgxb_149", A_ = "_wheelPicker_1lgxb_161", F_ = "_wheelColumn_1lgxb_171", b_ = "_wheelSelect_1lgxb_178", j_ = "_selectButton_1lgxb_190", U_ = "_timeInput_1lgxb_201", H = {
  page: p_,
  header: h_,
  title: v_,
  description: y_,
  grid: g_,
  card: __,
  empty: E_,
  cardHeader: w_,
  cardTitle: k_,
  meta: S_,
  time: C_,
  form: x_,
  field: N_,
  label: T_,
  select: R_,
  input: P_,
  quickTabs: M_,
  quickTab: L_,
  activeQuickTab: I_,
  row: $_,
  switch: "_switch_1lgxb_124",
  cardLead: D_,
  cardIcon: z_,
  cardButton: O_,
  wheelPicker: A_,
  wheelColumn: F_,
  wheelSelect: b_,
  selectButton: j_,
  timeInput: U_
}, B_ = [5, 10, 15, 30, 45, 60], Id = (l) => {
  const o = Math.max(0, l), i = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), f = o % 60;
  return [i, c, f].map((m) => String(m).padStart(2, "0")).join(":");
}, W_ = (l, o, i) => Math.max(1, l * 3600 + o * 60 + i), H_ = (l) => ({
  hours: Math.floor(l / 3600),
  minutes: Math.floor(l % 3600 / 60),
  seconds: l % 60
}), V_ = () => {
  const { createTimer: l, devices: o, loading: i, stopTimer: c, timers: f, toTimerSeconds: m } = mf(), [p, h] = v.useState(!1), [y, S] = v.useState(""), [N, _] = v.useState(0.3), [C, L] = v.useState({ hours: 0, minutes: 5, seconds: 0 }), [D, $] = v.useState({});
  v.useEffect(() => {
    $((z) => Object.fromEntries(f.map((W) => [W.uuid, z[W.uuid] ?? m(W.timer_time)])));
  }, [f, m]), v.useEffect(() => {
    const z = window.setInterval(() => {
      $((W) => Object.fromEntries(Object.entries(W).map(([j, ee]) => [j, Math.max(0, ee - 1)])));
    }, 1e3);
    return () => window.clearInterval(z);
  }, []);
  const w = v.useMemo(() => new Map(o.map((z) => [z.id, z.name])), [o]), P = W_(C.hours, C.minutes, C.seconds), M = async () => {
    y && (await l(y, P, N), h(!1));
  }, O = (z) => L(H_(z * 60));
  return /* @__PURE__ */ u.createElement("div", { className: H.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: H.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: H.title }, "Таймер"), /* @__PURE__ */ u.createElement("p", { className: H.description }, "Создавайте таймеры через модальное окно и отслеживайте запущенные отсчеты.")), /* @__PURE__ */ u.createElement(se, { onClick: () => h(!0) }, "Создать")), i && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: H.grid }, f.length ? f.map((z) => {
    const W = m(z.timer_time);
    return /* @__PURE__ */ u.createElement("div", { className: H.card, key: z.uuid }, /* @__PURE__ */ u.createElement("div", { className: H.cardHeader }, /* @__PURE__ */ u.createElement("div", { className: H.cardLead }, /* @__PURE__ */ u.createElement(uf, { className: H.cardIcon, size: 26 }), /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: H.cardTitle }, Id(D[z.uuid] ?? W)), /* @__PURE__ */ u.createElement("div", { className: H.meta }, "Заведен на ", Id(W), " • ", w.get(z.device_id) || z.device_id))), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => c(z) }, /* @__PURE__ */ u.createElement(cf, { size: 16 }))));
  }) : /* @__PURE__ */ u.createElement("div", { className: H.empty }, "Нет запущенных таймеров.")), /* @__PURE__ */ u.createElement(Mt, { open: p, onClose: () => h(!1), title: "Создать таймер", footer: /* @__PURE__ */ u.createElement(se, { onClick: M, disabled: !y }, "Создать") }, /* @__PURE__ */ u.createElement("div", { className: H.form }, /* @__PURE__ */ u.createElement("div", { className: H.wheelPicker, "aria-label": "Длительность таймера" }, ["hours", "minutes", "seconds"].map((z) => /* @__PURE__ */ u.createElement("label", { className: H.wheelColumn, key: z }, /* @__PURE__ */ u.createElement("span", { className: H.label }, z === "hours" ? "чч" : z === "minutes" ? "мм" : "сс"), /* @__PURE__ */ u.createElement("select", { className: H.wheelSelect, value: C[z], onChange: (W) => L((j) => ({ ...j, [z]: Number(W.target.value) })) }, Array.from({ length: z === "hours" ? 24 : 60 }, (W, j) => /* @__PURE__ */ u.createElement("option", { key: j, value: j }, String(j).padStart(2, "0"))))))), /* @__PURE__ */ u.createElement("div", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Быстрое создание"), /* @__PURE__ */ u.createElement("div", { className: H.quickTabs }, B_.map((z) => /* @__PURE__ */ u.createElement("button", { key: z, type: "button", className: `${H.quickTab} ${P === z * 60 ? H.activeQuickTab : ""}`, onClick: () => O(z) }, z, " мин")))), /* @__PURE__ */ u.createElement("label", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Устройство воспроизведения"), /* @__PURE__ */ u.createElement("select", { className: H.select, value: y, onChange: (z) => S(z.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), o.map((z) => /* @__PURE__ */ u.createElement("option", { key: z.id, value: z.id }, z.name)))), /* @__PURE__ */ u.createElement("label", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement("input", { className: H.input, type: "range", min: "0", max: "1", step: "0.05", value: N, onChange: (z) => _(Number(z.target.value)) }), /* @__PURE__ */ u.createElement("span", { className: H.meta }, Math.round(N * 100), "%")))), /* @__PURE__ */ u.createElement(Xt, null));
}, pf = [
  { key: "mon", label: "Пн" },
  { key: "tue", label: "Вт" },
  { key: "wed", label: "Ср" },
  { key: "thu", label: "Чт" },
  { key: "fri", label: "Пт" },
  { key: "sat", label: "Сб" },
  { key: "sun", label: "Вс" }
], Q_ = [
  { value: "once", label: "Однократно" },
  { value: "daily", label: "Ежедневно" },
  { value: "weekdays", label: "По будням" },
  { value: "weekends", label: "По выходным" },
  { value: "custom", label: "Кастом" }
], Xi = (l = "once", o = []) => l === "daily" ? "ежедневно" : l === "weekdays" ? "по будням" : l === "weekends" ? "по выходным" : l === "custom" ? o.length ? o.map((i) => {
  var c;
  return ((c = pf.find((f) => f.key === i)) == null ? void 0 : c.label) || i;
}).join(", ") : "кастом" : "однократно", q_ = () => {
  const { alarmTimeWidgets: l, alarms: o, createAlarm: i, deleteAlarm: c, devices: f, loading: m, updateAlarm: p } = mf(), [h, y] = v.useState(!1), [S, N] = v.useState(!1), [_, C] = v.useState(null), [L, D] = v.useState(null), [$, w] = v.useState(""), [P, M] = v.useState("08:00"), [O, z] = v.useState(0.3), [W, j] = v.useState("once"), [ee, ne] = v.useState([]), ye = v.useMemo(() => Array.from(new Set(l.flatMap((Q) => Q.time || []))).filter(Boolean), [l]), ge = v.useMemo(() => new Map(f.map((Q) => [Q.id, Q.name])), [f]), K = o.find((Q) => Q.uuid === _) || null, ue = async () => {
    if (!$ || !P) return;
    const Q = o.find((q) => q.uuid === L);
    Q ? await p(Q, { device_id: $, time: P, volume_start: O, repeat_type: W, repeat_days: ee }) : await i($, P, O, W, ee), D(null), y(!1);
  }, xe = (Q) => ne((q) => q.includes(Q) ? q.filter((Re) => Re !== Q) : [...q, Q]);
  return /* @__PURE__ */ u.createElement("div", { className: H.page }, /* @__PURE__ */ u.createElement(Gt, null), /* @__PURE__ */ u.createElement("div", { className: H.header }, /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h1", { className: H.title }, "Будильник"), /* @__PURE__ */ u.createElement("p", { className: H.description }, "Создавайте будильники, настраивайте повторы, устройство и громкость.")), /* @__PURE__ */ u.createElement(se, { onClick: () => y(!0) }, "Создать")), m && /* @__PURE__ */ u.createElement("div", null, "Загрузка..."), /* @__PURE__ */ u.createElement("div", { className: H.grid }, o.length ? o.map((Q) => /* @__PURE__ */ u.createElement("button", { className: `${H.card} ${H.cardButton}`, key: Q.uuid, type: "button", onClick: () => C(Q.uuid) }, /* @__PURE__ */ u.createElement("div", { className: H.cardHeader }, /* @__PURE__ */ u.createElement("div", { className: H.cardLead }, /* @__PURE__ */ u.createElement(uf, { className: H.cardIcon, size: 26 }), /* @__PURE__ */ u.createElement("div", null, /* @__PURE__ */ u.createElement("h2", { className: H.cardTitle }, Q.time), /* @__PURE__ */ u.createElement("div", { className: H.meta }, Xi(Q.repeat_type, Q.repeat_days), " • ", ge.get(Q.device_id) || Q.device_id))), /* @__PURE__ */ u.createElement("input", { className: H.switch, type: "checkbox", checked: Q.status !== "off", onClick: (q) => q.stopPropagation(), onChange: (q) => p(Q, { status: q.target.checked ? "on" : "off" }) })))) : /* @__PURE__ */ u.createElement("div", { className: H.empty }, "Нет будильников.")), /* @__PURE__ */ u.createElement(Mt, { open: h, onClose: () => {
    y(!1), D(null);
  }, title: L ? "Редактировать будильник" : "Создать будильник", footer: /* @__PURE__ */ u.createElement(se, { onClick: ue, disabled: !$ || !P }, "Сохранить") }, /* @__PURE__ */ u.createElement("div", { className: H.form }, /* @__PURE__ */ u.createElement("label", { className: H.wheelColumn }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Круговая чч мм"), /* @__PURE__ */ u.createElement("input", { className: `${H.input} ${H.timeInput}`, type: "time", value: P, onChange: (Q) => M(Q.target.value) })), /* @__PURE__ */ u.createElement("div", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Ранее заводимые"), /* @__PURE__ */ u.createElement("div", { className: H.quickTabs }, ye.length ? ye.map((Q) => /* @__PURE__ */ u.createElement("button", { key: Q, type: "button", className: `${H.quickTab} ${P === Q ? H.activeQuickTab : ""}`, onClick: () => M(Q) }, Q)) : /* @__PURE__ */ u.createElement("span", { className: H.meta }, "Нет быстрых значений."))), /* @__PURE__ */ u.createElement("label", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Повторы"), /* @__PURE__ */ u.createElement("button", { type: "button", className: H.selectButton, onClick: () => N(!0) }, Xi(W, ee))), /* @__PURE__ */ u.createElement("label", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Устройство воспроизведения"), /* @__PURE__ */ u.createElement("select", { className: H.select, value: $, onChange: (Q) => w(Q.target.value) }, /* @__PURE__ */ u.createElement("option", { value: "" }, "Выберите устройство"), f.map((Q) => /* @__PURE__ */ u.createElement("option", { key: Q.id, value: Q.id }, Q.name)))), /* @__PURE__ */ u.createElement("label", { className: H.field }, /* @__PURE__ */ u.createElement("span", { className: H.label }, "Стартовая громкость"), /* @__PURE__ */ u.createElement("input", { className: H.input, type: "range", min: "0", max: "1", step: "0.05", value: O, onChange: (Q) => z(Number(Q.target.value)) }), /* @__PURE__ */ u.createElement("span", { className: H.meta }, Math.round(O * 100), "%")))), /* @__PURE__ */ u.createElement(Mt, { open: S, onClose: () => N(!1), title: "Повторы", footer: /* @__PURE__ */ u.createElement(se, { onClick: () => N(!1) }, "Готово") }, /* @__PURE__ */ u.createElement("div", { className: H.form }, Q_.map((Q) => /* @__PURE__ */ u.createElement("button", { key: Q.value, type: "button", className: `${H.quickTab} ${W === Q.value ? H.activeQuickTab : ""}`, onClick: () => j(Q.value) }, Q.label)), W === "custom" && /* @__PURE__ */ u.createElement("div", { className: H.quickTabs }, pf.map((Q) => /* @__PURE__ */ u.createElement("button", { key: Q.key, type: "button", className: `${H.quickTab} ${ee.includes(Q.key) ? H.activeQuickTab : ""}`, onClick: () => xe(Q.key) }, Q.label))))), /* @__PURE__ */ u.createElement(Mt, { open: !!K, onClose: () => C(null), title: "Будильник" }, K && /* @__PURE__ */ u.createElement("div", { className: H.form }, /* @__PURE__ */ u.createElement("div", { className: H.time }, K.time), /* @__PURE__ */ u.createElement("div", { className: H.meta }, Xi(K.repeat_type, K.repeat_days), " • ", ge.get(K.device_id) || K.device_id), /* @__PURE__ */ u.createElement("label", { className: `${H.row} ${H.meta}` }, /* @__PURE__ */ u.createElement("input", { className: H.switch, type: "checkbox", checked: K.status !== "off", onChange: (Q) => p(K, { status: Q.target.checked ? "on" : "off" }) }), K.status !== "off" ? "Включен" : "Выключен"), /* @__PURE__ */ u.createElement(se, { onClick: () => {
    M(K.time), w(K.device_id), z(K.volume_start ?? 0.3), j(K.repeat_type ?? "once"), ne(K.repeat_days ?? []), D(K.uuid), C(null), y(!0);
  } }, "Редактировать"), /* @__PURE__ */ u.createElement(se, { variant: "ghost", onClick: () => {
    c(K), C(null);
  } }, /* @__PURE__ */ u.createElement(cf, { size: 16 }), " Удалить"))), /* @__PURE__ */ u.createElement(Xt, null));
}, Y_ = () => /* @__PURE__ */ u.createElement(vh, null, /* @__PURE__ */ u.createElement(
  at,
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
  at,
  {
    path: "/scripts",
    element: /* @__PURE__ */ u.createElement(mg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
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
  at,
  {
    path: "/commands/main",
    element: /* @__PURE__ */ u.createElement(bg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/sub",
    element: /* @__PURE__ */ u.createElement(Ug, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
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
  at,
  {
    path: "/commands/direct/main",
    element: /* @__PURE__ */ u.createElement(Wg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/direct/template",
    element: /* @__PURE__ */ u.createElement(Vg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/commands/settings",
    element: /* @__PURE__ */ u.createElement(Kg, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/timer",
    element: /* @__PURE__ */ u.createElement(V_, null)
  }
), /* @__PURE__ */ u.createElement(
  at,
  {
    path: "/alarm",
    element: /* @__PURE__ */ u.createElement(q_, null)
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
      Na,
      {
        to: "/scripts",
        replace: !0
      }
    )
  }
)), K_ = () => /* @__PURE__ */ u.createElement(Y_, null);
class G_ {
  constructor(o) {
    this.hass = o;
  }
  setHass(o) {
    this.hass = o;
  }
  async _getShort(o, i, c) {
    const f = await this.hass.connection.sendMessagePromise({
      type: `dialog_custom_ui/${o}`,
      ...i ? { page: i } : {},
      ...c ? { page_size: c } : {}
    });
    return console.log("WS <=", f), f;
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
const X_ = 1, Fa = 2, Ji = 3, J_ = 4, Z_ = 5;
function e0(l) {
  return {
    type: "auth",
    access_token: l
  };
}
function t0() {
  return {
    type: "supported_features",
    id: 1,
    // Always the first message after auth
    features: { coalesce_messages: 1 }
  };
}
function n0(l) {
  const o = {
    type: "subscribe_events"
  };
  return l && (o.event_type = l), o;
}
function $d(l) {
  return {
    type: "unsubscribe_events",
    subscription: l
  };
}
function r0() {
  return {
    type: "ping"
  };
}
function l0(l, o) {
  return {
    type: "result",
    success: !1,
    error: {
      code: l,
      message: o
    }
  };
}
const a0 = (l, o, i, c) => {
  const [f, m, p] = l.split(".", 3);
  return Number(f) > o || Number(f) === o && Number(m) >= i || c !== void 0;
}, o0 = "auth_invalid", i0 = "auth_ok";
function s0(l) {
  if (!l.auth)
    throw J_;
  const o = l.auth;
  let i = o.expired ? o.refreshAccessToken().then(() => {
    i = void 0;
  }, () => {
    i = void 0;
  }) : void 0;
  const c = o.wsUrl;
  function f(m, p, h) {
    const y = new WebSocket(c);
    let S = !1;
    const N = () => {
      if (y.removeEventListener("close", N), S) {
        h(Fa);
        return;
      }
      if (m === 0) {
        h(X_);
        return;
      }
      const L = m === -1 ? -1 : m - 1;
      setTimeout(() => f(L, p, h), 1e3);
    }, _ = async (L) => {
      try {
        o.expired && await (i || o.refreshAccessToken()), y.send(JSON.stringify(e0(o.accessToken)));
      } catch (D) {
        S = D === Fa, y.close();
      }
    }, C = async (L) => {
      const D = JSON.parse(L.data);
      switch (D.type) {
        case o0:
          S = !0, y.close();
          break;
        case i0:
          y.removeEventListener("open", _), y.removeEventListener("message", C), y.removeEventListener("close", N), y.removeEventListener("error", N), y.haVersion = D.ha_version, a0(y.haVersion, 2022, 9) && y.send(JSON.stringify(t0())), p(y);
          break;
      }
    };
    y.addEventListener("open", _), y.addEventListener("message", C), y.addEventListener("close", N), y.addEventListener("error", N);
  }
  return new Promise((m, p) => f(l.setupRetry, m, p));
}
class u0 {
  constructor(o, i) {
    this._handleMessage = (c) => {
      let f = JSON.parse(c.data);
      Array.isArray(f) || (f = [f]), f.forEach((m) => {
        const p = this.commands.get(m.id);
        switch (m.type) {
          case "event":
            p ? p.callback(m.event) : (console.warn(`Received event for unknown subscription ${m.id}. Unsubscribing.`), this.sendMessagePromise($d(m.id)).catch((h) => {
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
        "subscribe" in p || p.reject(l0(Ji, "Connection lost"));
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
                for (const S of y)
                  S.reject && S.reject(Ji);
              }
              h === Fa ? this.fireEvent("reconnect-error", h) : m(p + 1);
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
    i && (this.oldSubscriptions = void 0, i.forEach((f) => {
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
  addEventListener(o, i) {
    let c = this.eventListeners.get(o);
    c || (c = [], this.eventListeners.set(o, c)), c.push(i);
  }
  removeEventListener(o, i) {
    const c = this.eventListeners.get(o);
    if (!c)
      return;
    const f = c.indexOf(i);
    f !== -1 && c.splice(f, 1);
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
    return this.subscribeMessage(o, n0(i));
  }
  ping() {
    return this.sendMessagePromise(r0());
  }
  sendMessage(o, i) {
    if (!this.connected)
      throw Ji;
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
      const f = this._genCmdId();
      this.commands.set(f, { resolve: i, reject: c }), this.sendMessage(o, f);
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
    let f;
    return await new Promise((m, p) => {
      const h = this._genCmdId();
      f = {
        resolve: m,
        reject: p,
        callback: o,
        subscribe: (c == null ? void 0 : c.resubscribe) !== !1 ? () => this.subscribeMessage(o, i, c) : void 0,
        unsubscribe: async () => {
          this.connected && await this.sendMessagePromise($d(h)), this.commands.delete(h);
        }
      }, this.commands.set(h, f);
      try {
        this.sendMessage(i, h);
      } catch {
      }
    }), () => f.unsubscribe();
  }
  _genCmdId() {
    return ++this.commandId;
  }
}
const c0 = (l) => l * 1e3 + Date.now();
async function d0(l, o, i) {
  const c = typeof location < "u" && location;
  if (c && c.protocol === "https:") {
    const h = document.createElement("a");
    if (h.href = l, h.protocol === "http:" && h.hostname !== "localhost")
      throw Z_;
  }
  const f = new FormData();
  o !== null && f.append("client_id", o), Object.keys(i).forEach((h) => {
    f.append(h, i[h]);
  });
  const m = await fetch(`${l}/auth/token`, {
    method: "POST",
    credentials: "same-origin",
    body: f
  });
  if (!m.ok)
    throw m.status === 400 || m.status === 403 ? Fa : new Error("Unable to fetch tokens");
  const p = await m.json();
  return p.hassUrl = l, p.clientId = o, p.expires = c0(p.expires_in), p;
}
class f0 {
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
    const o = await d0(this.data.hassUrl, this.data.clientId, {
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
function m0(l, o) {
  return new f0({
    hassUrl: l,
    clientId: null,
    expires: Date.now() + 1e11,
    refresh_token: "",
    access_token: o,
    expires_in: 1e11
  });
}
async function p0(l) {
  const o = Object.assign({ setupRetry: 0, createSocket: s0 }, l), i = await o.createSocket(o);
  return new u0(i, o);
}
function h0(l) {
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
async function v0() {
  const i = m0(
    "http://192.168.31.83:8123",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjMGJkMDMwMzExYzg0MDYyYTU2Y2MwNGU1ZjE4OGI4OSIsImlhdCI6MTc4MzA5OTQ2NywiZXhwIjoyMDk4NDU5NDY3fQ.0-bP8xi_PqX77wxe2Yje3CLlhayuyIMl0R-kSAvgy9E"
  ), c = await p0({
    auth: i
  }), f = await c.sendMessagePromise({
    type: "get_states"
  });
  return {
    connection: c,
    states: f
  };
}
function y0({
  children: l,
  hass: o
}) {
  const i = v.useRef(null), [c, f] = v.useState(!1);
  return v.useEffect(() => {
    async function m() {
      const p = o ? h0(o) : await v0();
      i.current ? i.current.setHass(p) : i.current = new G_(p), f(!0);
    }
    m().catch(console.error);
  }, [o]), !c || !i.current ? /* @__PURE__ */ u.createElement("div", null, "Connecting to Home Assistant...") : /* @__PURE__ */ u.createElement(rf.Provider, { value: i.current }, l);
}
function g0({ hass: l }) {
  return /* @__PURE__ */ u.createElement(jh, null, /* @__PURE__ */ u.createElement(y0, { hass: l }, /* @__PURE__ */ u.createElement(K_, null)));
}
const Dd = "dialog-custom-ui-panel", zd = "dialog-custom-ui-style";
class _0 extends HTMLElement {
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
    if (c.getElementById(zd))
      return;
    try {
      const m = await fetch(i, { cache: "no-store" });
      if (!m.ok)
        throw new Error(`Failed to load panel styles: ${m.status}`);
      const p = await m.text();
      if (!p)
        return;
      const h = document.createElement("style");
      h.id = zd, h.setAttribute("data-dialog-ui", "true"), h.textContent = p, c.appendChild(h);
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
      f = document.createElement("link"), f.rel = "stylesheet", f.href = i, f.setAttribute("data-dialog-ui", "true"), c.appendChild(f);
      return;
    }
    f.href = i;
  }
  render() {
    if (!this.isConnected) return;
    const o = this.ensureShadowRoot();
    this.root || (this.root = gp.createRoot(o)), this.root.render(
      /* @__PURE__ */ u.createElement(u.StrictMode, null, /* @__PURE__ */ u.createElement(g0, { hass: this.hassValue }))
    );
  }
}
customElements.get(Dd) || customElements.define(Dd, _0);
