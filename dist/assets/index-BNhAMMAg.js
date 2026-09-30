(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r); new MutationObserver(r => { for (const s of r) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o) }).observe(document, { childList: !0, subtree: !0 }); function n(r) { const s = {}; return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function i(r) { if (r.ep) return; r.ep = !0; const s = n(r); fetch(r.href, s) } })(); function Ev(t) { return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t } var Tm = { exports: {} }, Rl = {}, wm = { exports: {} }, He = {};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo = Symbol.for("react.element"), Tv = Symbol.for("react.portal"), wv = Symbol.for("react.fragment"), Av = Symbol.for("react.strict_mode"), Cv = Symbol.for("react.profiler"), Rv = Symbol.for("react.provider"), Pv = Symbol.for("react.context"), bv = Symbol.for("react.forward_ref"), Lv = Symbol.for("react.suspense"), Dv = Symbol.for("react.memo"), Iv = Symbol.for("react.lazy"), lh = Symbol.iterator; function Nv(t) { return t === null || typeof t != "object" ? null : (t = lh && t[lh] || t["@@iterator"], typeof t == "function" ? t : null) } var Am = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Cm = Object.assign, Rm = {}; function Ds(t, e, n) { this.props = t, this.context = e, this.refs = Rm, this.updater = n || Am } Ds.prototype.isReactComponent = {}; Ds.prototype.setState = function (t, e) { if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, t, e, "setState") }; Ds.prototype.forceUpdate = function (t) { this.updater.enqueueForceUpdate(this, t, "forceUpdate") }; function Pm() { } Pm.prototype = Ds.prototype; function Vd(t, e, n) { this.props = t, this.context = e, this.refs = Rm, this.updater = n || Am } var Gd = Vd.prototype = new Pm; Gd.constructor = Vd; Cm(Gd, Ds.prototype); Gd.isPureReactComponent = !0; var ch = Array.isArray, bm = Object.prototype.hasOwnProperty, Wd = { current: null }, Lm = { key: !0, ref: !0, __self: !0, __source: !0 }; function Dm(t, e, n) { var i, r = {}, s = null, o = null; if (e != null) for (i in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = "" + e.key), e) bm.call(e, i) && !Lm.hasOwnProperty(i) && (r[i] = e[i]); var a = arguments.length - 2; if (a === 1) r.children = n; else if (1 < a) { for (var l = Array(a), c = 0; c < a; c++)l[c] = arguments[c + 2]; r.children = l } if (t && t.defaultProps) for (i in a = t.defaultProps, a) r[i] === void 0 && (r[i] = a[i]); return { $$typeof: Uo, type: t, key: s, ref: o, props: r, _owner: Wd.current } } function Uv(t, e) { return { $$typeof: Uo, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner } } function Xd(t) { return typeof t == "object" && t !== null && t.$$typeof === Uo } function Ov(t) { var e = { "=": "=0", ":": "=2" }; return "$" + t.replace(/[=:]/g, function (n) { return e[n] }) } var uh = /\/+/g; function ec(t, e) { return typeof t == "object" && t !== null && t.key != null ? Ov("" + t.key) : e.toString(36) } function Da(t, e, n, i, r) { var s = typeof t; (s === "undefined" || s === "boolean") && (t = null); var o = !1; if (t === null) o = !0; else switch (s) { case "string": case "number": o = !0; break; case "object": switch (t.$$typeof) { case Uo: case Tv: o = !0 } }if (o) return o = t, r = r(o), t = i === "" ? "." + ec(o, 0) : i, ch(r) ? (n = "", t != null && (n = t.replace(uh, "$&/") + "/"), Da(r, e, n, "", function (c) { return c })) : r != null && (Xd(r) && (r = Uv(r, n + (!r.key || o && o.key === r.key ? "" : ("" + r.key).replace(uh, "$&/") + "/") + t)), e.push(r)), 1; if (o = 0, i = i === "" ? "." : i + ":", ch(t)) for (var a = 0; a < t.length; a++) { s = t[a]; var l = i + ec(s, a); o += Da(s, e, n, l, r) } else if (l = Nv(t), typeof l == "function") for (t = l.call(t), a = 0; !(s = t.next()).done;)s = s.value, l = i + ec(s, a++), o += Da(s, e, n, l, r); else if (s === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."); return o } function Xo(t, e, n) { if (t == null) return t; var i = [], r = 0; return Da(t, i, "", "", function (s) { return e.call(n, s, r++) }), i } function Fv(t) { if (t._status === -1) { var e = t._result; e = e(), e.then(function (n) { (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n) }, function (n) { (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n) }), t._status === -1 && (t._status = 0, t._result = e) } if (t._status === 1) return t._result.default; throw t._result } var Zt = { current: null }, Ia = { transition: null }, kv = { ReactCurrentDispatcher: Zt, ReactCurrentBatchConfig: Ia, ReactCurrentOwner: Wd }; function Im() { throw Error("act(...) is not supported in production builds of React.") } He.Children = { map: Xo, forEach: function (t, e, n) { Xo(t, function () { e.apply(this, arguments) }, n) }, count: function (t) { var e = 0; return Xo(t, function () { e++ }), e }, toArray: function (t) { return Xo(t, function (e) { return e }) || [] }, only: function (t) { if (!Xd(t)) throw Error("React.Children.only expected to receive a single React element child."); return t } }; He.Component = Ds; He.Fragment = wv; He.Profiler = Cv; He.PureComponent = Vd; He.StrictMode = Av; He.Suspense = Lv; He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kv; He.act = Im; He.cloneElement = function (t, e, n) { if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + "."); var i = Cm({}, t.props), r = t.key, s = t.ref, o = t._owner; if (e != null) { if (e.ref !== void 0 && (s = e.ref, o = Wd.current), e.key !== void 0 && (r = "" + e.key), t.type && t.type.defaultProps) var a = t.type.defaultProps; for (l in e) bm.call(e, l) && !Lm.hasOwnProperty(l) && (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]) } var l = arguments.length - 2; if (l === 1) i.children = n; else if (1 < l) { a = Array(l); for (var c = 0; c < l; c++)a[c] = arguments[c + 2]; i.children = a } return { $$typeof: Uo, type: t.type, key: r, ref: s, props: i, _owner: o } }; He.createContext = function (t) { return t = { $$typeof: Pv, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: Rv, _context: t }, t.Consumer = t }; He.createElement = Dm; He.createFactory = function (t) { var e = Dm.bind(null, t); return e.type = t, e }; He.createRef = function () { return { current: null } }; He.forwardRef = function (t) { return { $$typeof: bv, render: t } }; He.isValidElement = Xd; He.lazy = function (t) { return { $$typeof: Iv, _payload: { _status: -1, _result: t }, _init: Fv } }; He.memo = function (t, e) { return { $$typeof: Dv, type: t, compare: e === void 0 ? null : e } }; He.startTransition = function (t) { var e = Ia.transition; Ia.transition = {}; try { t() } finally { Ia.transition = e } }; He.unstable_act = Im; He.useCallback = function (t, e) { return Zt.current.useCallback(t, e) }; He.useContext = function (t) { return Zt.current.useContext(t) }; He.useDebugValue = function () { }; He.useDeferredValue = function (t) { return Zt.current.useDeferredValue(t) }; He.useEffect = function (t, e) { return Zt.current.useEffect(t, e) }; He.useId = function () { return Zt.current.useId() }; He.useImperativeHandle = function (t, e, n) { return Zt.current.useImperativeHandle(t, e, n) }; He.useInsertionEffect = function (t, e) { return Zt.current.useInsertionEffect(t, e) }; He.useLayoutEffect = function (t, e) { return Zt.current.useLayoutEffect(t, e) }; He.useMemo = function (t, e) { return Zt.current.useMemo(t, e) }; He.useReducer = function (t, e, n) { return Zt.current.useReducer(t, e, n) }; He.useRef = function (t) { return Zt.current.useRef(t) }; He.useState = function (t) { return Zt.current.useState(t) }; He.useSyncExternalStore = function (t, e, n) { return Zt.current.useSyncExternalStore(t, e, n) }; He.useTransition = function () { return Zt.current.useTransition() }; He.version = "18.3.1"; wm.exports = He; var yt = wm.exports; const zv = Ev(yt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv = yt, Hv = Symbol.for("react.element"), Vv = Symbol.for("react.fragment"), Gv = Object.prototype.hasOwnProperty, Wv = Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xv = { key: !0, ref: !0, __self: !0, __source: !0 }; function Nm(t, e, n) { var i, r = {}, s = null, o = null; n !== void 0 && (s = "" + n), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref); for (i in e) Gv.call(e, i) && !Xv.hasOwnProperty(i) && (r[i] = e[i]); if (t && t.defaultProps) for (i in e = t.defaultProps, e) r[i] === void 0 && (r[i] = e[i]); return { $$typeof: Hv, type: t, key: s, ref: o, props: r, _owner: Wv.current } } Rl.Fragment = Vv; Rl.jsx = Nm; Rl.jsxs = Nm; Tm.exports = Rl; var W = Tm.exports, ou = {}, Um = { exports: {} }, _n = {}, Om = { exports: {} }, Fm = {};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (t) { function e(L, $) { var Z = L.length; L.push($); e: for (; 0 < Z;) { var oe = Z - 1 >>> 1, we = L[oe]; if (0 < r(we, $)) L[oe] = $, L[Z] = we, Z = oe; else break e } } function n(L) { return L.length === 0 ? null : L[0] } function i(L) { if (L.length === 0) return null; var $ = L[0], Z = L.pop(); if (Z !== $) { L[0] = Z; e: for (var oe = 0, we = L.length, Ve = we >>> 1; oe < Ve;) { var j = 2 * (oe + 1) - 1, te = L[j], me = j + 1, le = L[me]; if (0 > r(te, Z)) me < we && 0 > r(le, te) ? (L[oe] = le, L[me] = Z, oe = me) : (L[oe] = te, L[j] = Z, oe = j); else if (me < we && 0 > r(le, Z)) L[oe] = le, L[me] = Z, oe = me; else break e } } return $ } function r(L, $) { var Z = L.sortIndex - $.sortIndex; return Z !== 0 ? Z : L.id - $.id } if (typeof performance == "object" && typeof performance.now == "function") { var s = performance; t.unstable_now = function () { return s.now() } } else { var o = Date, a = o.now(); t.unstable_now = function () { return o.now() - a } } var l = [], c = [], d = 1, h = null, f = 3, g = !1, x = !1, y = !1, p = typeof setTimeout == "function" ? setTimeout : null, u = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function _(L) { for (var $ = n(c); $ !== null;) { if ($.callback === null) i(c); else if ($.startTime <= L) i(c), $.sortIndex = $.expirationTime, e(l, $); else break; $ = n(c) } } function S(L) { if (y = !1, _(L), !x) if (n(l) !== null) x = !0, V(R); else { var $ = n(c); $ !== null && J(S, $.startTime - L) } } function R(L, $) { x = !1, y && (y = !1, u(P), P = -1), g = !0; var Z = f; try { for (_($), h = n(l); h !== null && (!(h.expirationTime > $) || L && !T());) { var oe = h.callback; if (typeof oe == "function") { h.callback = null, f = h.priorityLevel; var we = oe(h.expirationTime <= $); $ = t.unstable_now(), typeof we == "function" ? h.callback = we : h === n(l) && i(l), _($) } else i(l); h = n(l) } if (h !== null) var Ve = !0; else { var j = n(c); j !== null && J(S, j.startTime - $), Ve = !1 } return Ve } finally { h = null, f = Z, g = !1 } } var A = !1, w = null, P = -1, X = 5, v = -1; function T() { return !(t.unstable_now() - v < X) } function H() { if (w !== null) { var L = t.unstable_now(); v = L; var $ = !0; try { $ = w(!0, L) } finally { $ ? B() : (A = !1, w = null) } } else A = !1 } var B; if (typeof m == "function") B = function () { m(H) }; else if (typeof MessageChannel < "u") { var q = new MessageChannel, ee = q.port2; q.port1.onmessage = H, B = function () { ee.postMessage(null) } } else B = function () { p(H, 0) }; function V(L) { w = L, A || (A = !0, B()) } function J(L, $) { P = p(function () { L(t.unstable_now()) }, $) } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (L) { L.callback = null }, t.unstable_continueExecution = function () { x || g || (x = !0, V(R)) }, t.unstable_forceFrameRate = function (L) { 0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < L ? Math.floor(1e3 / L) : 5 }, t.unstable_getCurrentPriorityLevel = function () { return f }, t.unstable_getFirstCallbackNode = function () { return n(l) }, t.unstable_next = function (L) { switch (f) { case 1: case 2: case 3: var $ = 3; break; default: $ = f }var Z = f; f = $; try { return L() } finally { f = Z } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (L, $) { switch (L) { case 1: case 2: case 3: case 4: case 5: break; default: L = 3 }var Z = f; f = L; try { return $() } finally { f = Z } }, t.unstable_scheduleCallback = function (L, $, Z) { var oe = t.unstable_now(); switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? oe + Z : oe) : Z = oe, L) { case 1: var we = -1; break; case 2: we = 250; break; case 5: we = 1073741823; break; case 4: we = 1e4; break; default: we = 5e3 }return we = Z + we, L = { id: d++, callback: $, priorityLevel: L, startTime: Z, expirationTime: we, sortIndex: -1 }, Z > oe ? (L.sortIndex = Z, e(c, L), n(l) === null && L === n(c) && (y ? (u(P), P = -1) : y = !0, J(S, Z - oe))) : (L.sortIndex = we, e(l, L), x || g || (x = !0, V(R))), L }, t.unstable_shouldYield = T, t.unstable_wrapCallback = function (L) { var $ = f; return function () { var Z = f; f = $; try { return L.apply(this, arguments) } finally { f = Z } } } })(Fm); Om.exports = Fm; var jv = Om.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv = yt, mn = jv; function ne(t) { for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)e += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var km = new Set, go = {}; function Pr(t, e) { xs(t, e), xs(t + "Capture", e) } function xs(t, e) { for (go[t] = e, t = 0; t < e.length; t++)km.add(e[t]) } var hi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), au = Object.prototype.hasOwnProperty, qv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, dh = {}, fh = {}; function Kv(t) { return au.call(fh, t) ? !0 : au.call(dh, t) ? !1 : qv.test(t) ? fh[t] = !0 : (dh[t] = !0, !1) } function $v(t, e, n, i) { if (n !== null && n.type === 0) return !1; switch (typeof e) { case "function": case "symbol": return !0; case "boolean": return i ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-"); default: return !1 } } function Zv(t, e, n, i) { if (e === null || typeof e > "u" || $v(t, e, n, i)) return !0; if (i) return !1; if (n !== null) switch (n.type) { case 3: return !e; case 4: return e === !1; case 5: return isNaN(e); case 6: return isNaN(e) || 1 > e }return !1 } function Qt(t, e, n, i, r, s, o) { this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = s, this.removeEmptyString = o } var Ut = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) { Ut[t] = new Qt(t, 0, !1, t, null, !1, !1) });[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (t) { var e = t[0]; Ut[e] = new Qt(e, 1, !1, t[1], null, !1, !1) });["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) { Ut[t] = new Qt(t, 2, !1, t.toLowerCase(), null, !1, !1) });["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) { Ut[t] = new Qt(t, 2, !1, t, null, !1, !1) }); "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (t) { Ut[t] = new Qt(t, 3, !1, t.toLowerCase(), null, !1, !1) });["checked", "multiple", "muted", "selected"].forEach(function (t) { Ut[t] = new Qt(t, 3, !0, t, null, !1, !1) });["capture", "download"].forEach(function (t) { Ut[t] = new Qt(t, 4, !1, t, null, !1, !1) });["cols", "rows", "size", "span"].forEach(function (t) { Ut[t] = new Qt(t, 6, !1, t, null, !1, !1) });["rowSpan", "start"].forEach(function (t) { Ut[t] = new Qt(t, 5, !1, t.toLowerCase(), null, !1, !1) }); var jd = /[\-:]([a-z])/g; function Yd(t) { return t[1].toUpperCase() } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (t) { var e = t.replace(jd, Yd); Ut[e] = new Qt(e, 1, !1, t, null, !1, !1) }); "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) { var e = t.replace(jd, Yd); Ut[e] = new Qt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1) });["xml:base", "xml:lang", "xml:space"].forEach(function (t) { var e = t.replace(jd, Yd); Ut[e] = new Qt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1) });["tabIndex", "crossOrigin"].forEach(function (t) { Ut[t] = new Qt(t, 1, !1, t.toLowerCase(), null, !1, !1) }); Ut.xlinkHref = new Qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);["src", "href", "action", "formAction"].forEach(function (t) { Ut[t] = new Qt(t, 1, !1, t.toLowerCase(), null, !0, !0) }); function qd(t, e, n, i) { var r = Ut.hasOwnProperty(e) ? Ut[e] : null; (r !== null ? r.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Zv(e, n, r, i) && (n = null), i || r === null ? Kv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (e = r.attributeName, i = r.attributeNamespace, n === null ? t.removeAttribute(e) : (r = r.type, n = r === 3 || r === 4 && n === !0 ? "" : "" + n, i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n)))) } var xi = Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, jo = Symbol.for("react.element"), Kr = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), Kd = Symbol.for("react.strict_mode"), lu = Symbol.for("react.profiler"), zm = Symbol.for("react.provider"), Bm = Symbol.for("react.context"), $d = Symbol.for("react.forward_ref"), cu = Symbol.for("react.suspense"), uu = Symbol.for("react.suspense_list"), Zd = Symbol.for("react.memo"), Ri = Symbol.for("react.lazy"), Hm = Symbol.for("react.offscreen"), hh = Symbol.iterator; function ks(t) { return t === null || typeof t != "object" ? null : (t = hh && t[hh] || t["@@iterator"], typeof t == "function" ? t : null) } var ht = Object.assign, tc; function Qs(t) {
	if (tc === void 0) try { throw Error() } catch (n) { var e = n.stack.trim().match(/\n( *(at )?)/); tc = e && e[1] || "" } return `
`+ tc + t
} var nc = !1; function ic(t, e) {
	if (!t || nc) return ""; nc = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try { if (e) if (e = function () { throw Error() }, Object.defineProperty(e.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(e, []) } catch (c) { var i = c } Reflect.construct(t, [], e) } else { try { e.call() } catch (c) { i = c } t.call(e.prototype) } else { try { throw Error() } catch (c) { i = c } t() } } catch (c) {
		if (c && i && typeof c.stack == "string") {
			for (var r = c.stack.split(`
`), s = i.stack.split(`
`), o = r.length - 1, a = s.length - 1; 1 <= o && 0 <= a && r[o] !== s[a];)a--; for (; 1 <= o && 0 <= a; o--, a--)if (r[o] !== s[a]) {
				if (o !== 1 || a !== 1) do if (o--, a--, 0 > a || r[o] !== s[a]) {
					var l = `
`+ r[o].replace(" at new ", " at "); return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l
				} while (1 <= o && 0 <= a); break
			}
		}
	} finally { nc = !1, Error.prepareStackTrace = n } return (t = t ? t.displayName || t.name : "") ? Qs(t) : ""
} function Qv(t) { switch (t.tag) { case 5: return Qs(t.type); case 16: return Qs("Lazy"); case 13: return Qs("Suspense"); case 19: return Qs("SuspenseList"); case 0: case 2: case 15: return t = ic(t.type, !1), t; case 11: return t = ic(t.type.render, !1), t; case 1: return t = ic(t.type, !0), t; default: return "" } } function du(t) { if (t == null) return null; if (typeof t == "function") return t.displayName || t.name || null; if (typeof t == "string") return t; switch (t) { case $r: return "Fragment"; case Kr: return "Portal"; case lu: return "Profiler"; case Kd: return "StrictMode"; case cu: return "Suspense"; case uu: return "SuspenseList" }if (typeof t == "object") switch (t.$$typeof) { case Bm: return (t.displayName || "Context") + ".Consumer"; case zm: return (t._context.displayName || "Context") + ".Provider"; case $d: var e = t.render; return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t; case Zd: return e = t.displayName || null, e !== null ? e : du(t.type) || "Memo"; case Ri: e = t._payload, t = t._init; try { return du(t(e)) } catch { } }return null } function Jv(t) { var e = t.type; switch (t.tag) { case 24: return "Cache"; case 9: return (e.displayName || "Context") + ".Consumer"; case 10: return (e._context.displayName || "Context") + ".Provider"; case 18: return "DehydratedFragment"; case 11: return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"); case 7: return "Fragment"; case 5: return e; case 4: return "Portal"; case 3: return "Root"; case 6: return "Text"; case 16: return du(e); case 8: return e === Kd ? "StrictMode" : "Mode"; case 22: return "Offscreen"; case 12: return "Profiler"; case 21: return "Scope"; case 13: return "Suspense"; case 19: return "SuspenseList"; case 25: return "TracingMarker"; case 1: case 0: case 17: case 2: case 14: case 15: if (typeof e == "function") return e.displayName || e.name || null; if (typeof e == "string") return e }return null } function qi(t) { switch (typeof t) { case "boolean": case "number": case "string": case "undefined": return t; case "object": return t; default: return "" } } function Vm(t) { var e = t.type; return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio") } function e0(t) { var e = Vm(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), i = "" + t[e]; if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") { var r = n.get, s = n.set; return Object.defineProperty(t, e, { configurable: !0, get: function () { return r.call(this) }, set: function (o) { i = "" + o, s.call(this, o) } }), Object.defineProperty(t, e, { enumerable: n.enumerable }), { getValue: function () { return i }, setValue: function (o) { i = "" + o }, stopTracking: function () { t._valueTracker = null, delete t[e] } } } } function Yo(t) { t._valueTracker || (t._valueTracker = e0(t)) } function Gm(t) { if (!t) return !1; var e = t._valueTracker; if (!e) return !0; var n = e.getValue(), i = ""; return t && (i = Vm(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1 } function Za(t) { if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null; try { return t.activeElement || t.body } catch { return t.body } } function fu(t, e) { var n = e.checked; return ht({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? t._wrapperState.initialChecked }) } function ph(t, e) { var n = e.defaultValue == null ? "" : e.defaultValue, i = e.checked != null ? e.checked : e.defaultChecked; n = qi(e.value != null ? e.value : n), t._wrapperState = { initialChecked: i, initialValue: n, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null } } function Wm(t, e) { e = e.checked, e != null && qd(t, "checked", e, !1) } function hu(t, e) { Wm(t, e); var n = qi(e.value), i = e.type; if (n != null) i === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n); else if (i === "submit" || i === "reset") { t.removeAttribute("value"); return } e.hasOwnProperty("value") ? pu(t, e.type, n) : e.hasOwnProperty("defaultValue") && pu(t, e.type, qi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked) } function mh(t, e, n) { if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) { var i = e.type; if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null)) return; e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e } n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n) } function pu(t, e, n) { (e !== "number" || Za(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n)) } var Js = Array.isArray; function cs(t, e, n, i) { if (t = t.options, e) { e = {}; for (var r = 0; r < n.length; r++)e["$" + n[r]] = !0; for (n = 0; n < t.length; n++)r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && i && (t[n].defaultSelected = !0) } else { for (n = "" + qi(n), e = null, r = 0; r < t.length; r++) { if (t[r].value === n) { t[r].selected = !0, i && (t[r].defaultSelected = !0); return } e !== null || t[r].disabled || (e = t[r]) } e !== null && (e.selected = !0) } } function mu(t, e) { if (e.dangerouslySetInnerHTML != null) throw Error(ne(91)); return ht({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue }) } function gh(t, e) { var n = e.value; if (n == null) { if (n = e.children, e = e.defaultValue, n != null) { if (e != null) throw Error(ne(92)); if (Js(n)) { if (1 < n.length) throw Error(ne(93)); n = n[0] } e = n } e == null && (e = ""), n = e } t._wrapperState = { initialValue: qi(n) } } function Xm(t, e) { var n = qi(e.value), i = qi(e.defaultValue); n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), i != null && (t.defaultValue = "" + i) } function _h(t) { var e = t.textContent; e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e) } function jm(t) { switch (t) { case "svg": return "http://www.w3.org/2000/svg"; case "math": return "http://www.w3.org/1998/Math/MathML"; default: return "http://www.w3.org/1999/xhtml" } } function gu(t, e) { return t == null || t === "http://www.w3.org/1999/xhtml" ? jm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t } var qo, Ym = function (t) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (e, n, i, r) { MSApp.execUnsafeLocalFunction(function () { return t(e, n, i, r) }) } : t }(function (t, e) { if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e; else { for (qo = qo || document.createElement("div"), qo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = qo.firstChild; t.firstChild;)t.removeChild(t.firstChild); for (; e.firstChild;)t.appendChild(e.firstChild) } }); function _o(t, e) { if (e) { var n = t.firstChild; if (n && n === t.lastChild && n.nodeType === 3) { n.nodeValue = e; return } } t.textContent = e } var io = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, t0 = ["Webkit", "ms", "Moz", "O"]; Object.keys(io).forEach(function (t) { t0.forEach(function (e) { e = e + t.charAt(0).toUpperCase() + t.substring(1), io[e] = io[t] }) }); function qm(t, e, n) { return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || io.hasOwnProperty(t) && io[t] ? ("" + e).trim() : e + "px" } function Km(t, e) { t = t.style; for (var n in e) if (e.hasOwnProperty(n)) { var i = n.indexOf("--") === 0, r = qm(n, e[n], i); n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : t[n] = r } } var n0 = ht({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function _u(t, e) { if (e) { if (n0[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(ne(137, t)); if (e.dangerouslySetInnerHTML != null) { if (e.children != null) throw Error(ne(60)); if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(ne(61)) } if (e.style != null && typeof e.style != "object") throw Error(ne(62)) } } function vu(t, e) { if (t.indexOf("-") === -1) return typeof e.is == "string"; switch (t) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var xu = null; function Qd(t) { return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t } var yu = null, us = null, ds = null; function vh(t) { if (t = ko(t)) { if (typeof yu != "function") throw Error(ne(280)); var e = t.stateNode; e && (e = Il(e), yu(t.stateNode, t.type, e)) } } function $m(t) { us ? ds ? ds.push(t) : ds = [t] : us = t } function Zm() { if (us) { var t = us, e = ds; if (ds = us = null, vh(t), e) for (t = 0; t < e.length; t++)vh(e[t]) } } function Qm(t, e) { return t(e) } function Jm() { } var rc = !1; function eg(t, e, n) { if (rc) return t(e, n); rc = !0; try { return Qm(t, e, n) } finally { rc = !1, (us !== null || ds !== null) && (Jm(), Zm()) } } function vo(t, e) { var n = t.stateNode; if (n === null) return null; var i = Il(n); if (i === null) return null; n = i[e]; e: switch (e) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i; break e; default: t = !1 }if (t) return null; if (n && typeof n != "function") throw Error(ne(231, e, typeof n)); return n } var Su = !1; if (hi) try { var zs = {}; Object.defineProperty(zs, "passive", { get: function () { Su = !0 } }), window.addEventListener("test", zs, zs), window.removeEventListener("test", zs, zs) } catch { Su = !1 } function i0(t, e, n, i, r, s, o, a, l) { var c = Array.prototype.slice.call(arguments, 3); try { e.apply(n, c) } catch (d) { this.onError(d) } } var ro = !1, Qa = null, Ja = !1, Mu = null, r0 = { onError: function (t) { ro = !0, Qa = t } }; function s0(t, e, n, i, r, s, o, a, l) { ro = !1, Qa = null, i0.apply(r0, arguments) } function o0(t, e, n, i, r, s, o, a, l) { if (s0.apply(this, arguments), ro) { if (ro) { var c = Qa; ro = !1, Qa = null } else throw Error(ne(198)); Ja || (Ja = !0, Mu = c) } } function br(t) { var e = t, n = t; if (t.alternate) for (; e.return;)e = e.return; else { t = e; do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t) } return e.tag === 3 ? n : null } function tg(t) { if (t.tag === 13) { var e = t.memoizedState; if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated } return null } function xh(t) { if (br(t) !== t) throw Error(ne(188)) } function a0(t) { var e = t.alternate; if (!e) { if (e = br(t), e === null) throw Error(ne(188)); return e !== t ? null : t } for (var n = t, i = e; ;) { var r = n.return; if (r === null) break; var s = r.alternate; if (s === null) { if (i = r.return, i !== null) { n = i; continue } break } if (r.child === s.child) { for (s = r.child; s;) { if (s === n) return xh(r), t; if (s === i) return xh(r), e; s = s.sibling } throw Error(ne(188)) } if (n.return !== i.return) n = r, i = s; else { for (var o = !1, a = r.child; a;) { if (a === n) { o = !0, n = r, i = s; break } if (a === i) { o = !0, i = r, n = s; break } a = a.sibling } if (!o) { for (a = s.child; a;) { if (a === n) { o = !0, n = s, i = r; break } if (a === i) { o = !0, i = s, n = r; break } a = a.sibling } if (!o) throw Error(ne(189)) } } if (n.alternate !== i) throw Error(ne(190)) } if (n.tag !== 3) throw Error(ne(188)); return n.stateNode.current === n ? t : e } function ng(t) { return t = a0(t), t !== null ? ig(t) : null } function ig(t) { if (t.tag === 5 || t.tag === 6) return t; for (t = t.child; t !== null;) { var e = ig(t); if (e !== null) return e; t = t.sibling } return null } var rg = mn.unstable_scheduleCallback, yh = mn.unstable_cancelCallback, l0 = mn.unstable_shouldYield, c0 = mn.unstable_requestPaint, vt = mn.unstable_now, u0 = mn.unstable_getCurrentPriorityLevel, Jd = mn.unstable_ImmediatePriority, sg = mn.unstable_UserBlockingPriority, el = mn.unstable_NormalPriority, d0 = mn.unstable_LowPriority, og = mn.unstable_IdlePriority, Pl = null, Zn = null; function f0(t) { if (Zn && typeof Zn.onCommitFiberRoot == "function") try { Zn.onCommitFiberRoot(Pl, t, void 0, (t.current.flags & 128) === 128) } catch { } } var Bn = Math.clz32 ? Math.clz32 : m0, h0 = Math.log, p0 = Math.LN2; function m0(t) { return t >>>= 0, t === 0 ? 32 : 31 - (h0(t) / p0 | 0) | 0 } var Ko = 64, $o = 4194304; function eo(t) { switch (t & -t) { case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t & 4194240; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return t & 130023424; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 1073741824; default: return t } } function tl(t, e) { var n = t.pendingLanes; if (n === 0) return 0; var i = 0, r = t.suspendedLanes, s = t.pingedLanes, o = n & 268435455; if (o !== 0) { var a = o & ~r; a !== 0 ? i = eo(a) : (s &= o, s !== 0 && (i = eo(s))) } else o = n & ~r, o !== 0 ? i = eo(o) : s !== 0 && (i = eo(s)); if (i === 0) return 0; if (e !== 0 && e !== i && !(e & r) && (r = i & -i, s = e & -e, r >= s || r === 16 && (s & 4194240) !== 0)) return e; if (i & 4 && (i |= n & 16), e = t.entangledLanes, e !== 0) for (t = t.entanglements, e &= i; 0 < e;)n = 31 - Bn(e), r = 1 << n, i |= t[n], e &= ~r; return i } function g0(t, e) { switch (t) { case 1: case 2: case 4: return e + 250; case 8: case 16: case 32: case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return e + 5e3; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return -1; case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1 } } function _0(t, e) { for (var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes; 0 < s;) { var o = 31 - Bn(s), a = 1 << o, l = r[o]; l === -1 ? (!(a & n) || a & i) && (r[o] = g0(a, e)) : l <= e && (t.expiredLanes |= a), s &= ~a } } function Eu(t) { return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0 } function ag() { var t = Ko; return Ko <<= 1, !(Ko & 4194240) && (Ko = 64), t } function sc(t) { for (var e = [], n = 0; 31 > n; n++)e.push(t); return e } function Oo(t, e, n) { t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Bn(e), t[e] = n } function v0(t, e) { var n = t.pendingLanes & ~e; t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements; var i = t.eventTimes; for (t = t.expirationTimes; 0 < n;) { var r = 31 - Bn(n), s = 1 << r; e[r] = 0, i[r] = -1, t[r] = -1, n &= ~s } } function ef(t, e) { var n = t.entangledLanes |= e; for (t = t.entanglements; n;) { var i = 31 - Bn(n), r = 1 << i; r & e | t[i] & e && (t[i] |= e), n &= ~r } } var et = 0; function lg(t) { return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1 } var cg, tf, ug, dg, fg, Tu = !1, Zo = [], ki = null, zi = null, Bi = null, xo = new Map, yo = new Map, Ii = [], x0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Sh(t, e) { switch (t) { case "focusin": case "focusout": ki = null; break; case "dragenter": case "dragleave": zi = null; break; case "mouseover": case "mouseout": Bi = null; break; case "pointerover": case "pointerout": xo.delete(e.pointerId); break; case "gotpointercapture": case "lostpointercapture": yo.delete(e.pointerId) } } function Bs(t, e, n, i, r, s) { return t === null || t.nativeEvent !== s ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: i, nativeEvent: s, targetContainers: [r] }, e !== null && (e = ko(e), e !== null && tf(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t) } function y0(t, e, n, i, r) { switch (e) { case "focusin": return ki = Bs(ki, t, e, n, i, r), !0; case "dragenter": return zi = Bs(zi, t, e, n, i, r), !0; case "mouseover": return Bi = Bs(Bi, t, e, n, i, r), !0; case "pointerover": var s = r.pointerId; return xo.set(s, Bs(xo.get(s) || null, t, e, n, i, r)), !0; case "gotpointercapture": return s = r.pointerId, yo.set(s, Bs(yo.get(s) || null, t, e, n, i, r)), !0 }return !1 } function hg(t) { var e = hr(t.target); if (e !== null) { var n = br(e); if (n !== null) { if (e = n.tag, e === 13) { if (e = tg(n), e !== null) { t.blockedOn = e, fg(t.priority, function () { ug(n) }); return } } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) { t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null; return } } } t.blockedOn = null } function Na(t) { if (t.blockedOn !== null) return !1; for (var e = t.targetContainers; 0 < e.length;) { var n = wu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent); if (n === null) { n = t.nativeEvent; var i = new n.constructor(n.type, n); xu = i, n.target.dispatchEvent(i), xu = null } else return e = ko(n), e !== null && tf(e), t.blockedOn = n, !1; e.shift() } return !0 } function Mh(t, e, n) { Na(t) && n.delete(e) } function S0() { Tu = !1, ki !== null && Na(ki) && (ki = null), zi !== null && Na(zi) && (zi = null), Bi !== null && Na(Bi) && (Bi = null), xo.forEach(Mh), yo.forEach(Mh) } function Hs(t, e) { t.blockedOn === e && (t.blockedOn = null, Tu || (Tu = !0, mn.unstable_scheduleCallback(mn.unstable_NormalPriority, S0))) } function So(t) { function e(r) { return Hs(r, t) } if (0 < Zo.length) { Hs(Zo[0], t); for (var n = 1; n < Zo.length; n++) { var i = Zo[n]; i.blockedOn === t && (i.blockedOn = null) } } for (ki !== null && Hs(ki, t), zi !== null && Hs(zi, t), Bi !== null && Hs(Bi, t), xo.forEach(e), yo.forEach(e), n = 0; n < Ii.length; n++)i = Ii[n], i.blockedOn === t && (i.blockedOn = null); for (; 0 < Ii.length && (n = Ii[0], n.blockedOn === null);)hg(n), n.blockedOn === null && Ii.shift() } var fs = xi.ReactCurrentBatchConfig, nl = !0; function M0(t, e, n, i) { var r = et, s = fs.transition; fs.transition = null; try { et = 1, nf(t, e, n, i) } finally { et = r, fs.transition = s } } function E0(t, e, n, i) { var r = et, s = fs.transition; fs.transition = null; try { et = 4, nf(t, e, n, i) } finally { et = r, fs.transition = s } } function nf(t, e, n, i) { if (nl) { var r = wu(t, e, n, i); if (r === null) mc(t, e, i, il, n), Sh(t, i); else if (y0(r, t, e, n, i)) i.stopPropagation(); else if (Sh(t, i), e & 4 && -1 < x0.indexOf(t)) { for (; r !== null;) { var s = ko(r); if (s !== null && cg(s), s = wu(t, e, n, i), s === null && mc(t, e, i, il, n), s === r) break; r = s } r !== null && i.stopPropagation() } else mc(t, e, i, null, n) } } var il = null; function wu(t, e, n, i) { if (il = null, t = Qd(i), t = hr(t), t !== null) if (e = br(t), e === null) t = null; else if (n = e.tag, n === 13) { if (t = tg(e), t !== null) return t; t = null } else if (n === 3) { if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null; t = null } else e !== t && (t = null); return il = t, null } function pg(t) { switch (t) { case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 1; case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "toggle": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 4; case "message": switch (u0()) { case Jd: return 1; case sg: return 4; case el: case d0: return 16; case og: return 536870912; default: return 16 }default: return 16 } } var Oi = null, rf = null, Ua = null; function mg() { if (Ua) return Ua; var t, e = rf, n = e.length, i, r = "value" in Oi ? Oi.value : Oi.textContent, s = r.length; for (t = 0; t < n && e[t] === r[t]; t++); var o = n - t; for (i = 1; i <= o && e[n - i] === r[s - i]; i++); return Ua = r.slice(t, 1 < i ? 1 - i : void 0) } function Oa(t) { var e = t.keyCode; return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0 } function Qo() { return !0 } function Eh() { return !1 } function vn(t) { function e(n, i, r, s, o) { this._reactName = n, this._targetInst = r, this.type = i, this.nativeEvent = s, this.target = o, this.currentTarget = null; for (var a in t) t.hasOwnProperty(a) && (n = t[a], this[a] = n ? n(s) : s[a]); return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Qo : Eh, this.isPropagationStopped = Eh, this } return ht(e.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qo) }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qo) }, persist: function () { }, isPersistent: Qo }), e } var Is = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) { return t.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, sf = vn(Is), Fo = ht({}, Is, { view: 0, detail: 0 }), T0 = vn(Fo), oc, ac, Vs, bl = ht({}, Fo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: of, button: 0, buttons: 0, relatedTarget: function (t) { return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget }, movementX: function (t) { return "movementX" in t ? t.movementX : (t !== Vs && (Vs && t.type === "mousemove" ? (oc = t.screenX - Vs.screenX, ac = t.screenY - Vs.screenY) : ac = oc = 0, Vs = t), oc) }, movementY: function (t) { return "movementY" in t ? t.movementY : ac } }), Th = vn(bl), w0 = ht({}, bl, { dataTransfer: 0 }), A0 = vn(w0), C0 = ht({}, Fo, { relatedTarget: 0 }), lc = vn(C0), R0 = ht({}, Is, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), P0 = vn(R0), b0 = ht({}, Is, { clipboardData: function (t) { return "clipboardData" in t ? t.clipboardData : window.clipboardData } }), L0 = vn(b0), D0 = ht({}, Is, { data: 0 }), wh = vn(D0), I0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, N0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, U0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function O0(t) { var e = this.nativeEvent; return e.getModifierState ? e.getModifierState(t) : (t = U0[t]) ? !!e[t] : !1 } function of() { return O0 } var F0 = ht({}, Fo, { key: function (t) { if (t.key) { var e = I0[t.key] || t.key; if (e !== "Unidentified") return e } return t.type === "keypress" ? (t = Oa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? N0[t.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: of, charCode: function (t) { return t.type === "keypress" ? Oa(t) : 0 }, keyCode: function (t) { return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 }, which: function (t) { return t.type === "keypress" ? Oa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 } }), k0 = vn(F0), z0 = ht({}, bl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ah = vn(z0), B0 = ht({}, Fo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: of }), H0 = vn(B0), V0 = ht({}, Is, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), G0 = vn(V0), W0 = ht({}, bl, { deltaX: function (t) { return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0 }, deltaY: function (t) { return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), X0 = vn(W0), j0 = [9, 13, 27, 32], af = hi && "CompositionEvent" in window, so = null; hi && "documentMode" in document && (so = document.documentMode); var Y0 = hi && "TextEvent" in window && !so, gg = hi && (!af || so && 8 < so && 11 >= so), Ch = " ", Rh = !1; function _g(t, e) { switch (t) { case "keyup": return j0.indexOf(e.keyCode) !== -1; case "keydown": return e.keyCode !== 229; case "keypress": case "mousedown": case "focusout": return !0; default: return !1 } } function vg(t) { return t = t.detail, typeof t == "object" && "data" in t ? t.data : null } var Zr = !1; function q0(t, e) { switch (t) { case "compositionend": return vg(e); case "keypress": return e.which !== 32 ? null : (Rh = !0, Ch); case "textInput": return t = e.data, t === Ch && Rh ? null : t; default: return null } } function K0(t, e) { if (Zr) return t === "compositionend" || !af && _g(t, e) ? (t = mg(), Ua = rf = Oi = null, Zr = !1, t) : null; switch (t) { case "paste": return null; case "keypress": if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) { if (e.char && 1 < e.char.length) return e.char; if (e.which) return String.fromCharCode(e.which) } return null; case "compositionend": return gg && e.locale !== "ko" ? null : e.data; default: return null } } var $0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Ph(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e === "input" ? !!$0[t.type] : e === "textarea" } function xg(t, e, n, i) { $m(i), e = rl(e, "onChange"), 0 < e.length && (n = new sf("onChange", "change", null, n, i), t.push({ event: n, listeners: e })) } var oo = null, Mo = null; function Z0(t) { bg(t, 0) } function Ll(t) { var e = es(t); if (Gm(e)) return t } function Q0(t, e) { if (t === "change") return e } var yg = !1; if (hi) { var cc; if (hi) { var uc = "oninput" in document; if (!uc) { var bh = document.createElement("div"); bh.setAttribute("oninput", "return;"), uc = typeof bh.oninput == "function" } cc = uc } else cc = !1; yg = cc && (!document.documentMode || 9 < document.documentMode) } function Lh() { oo && (oo.detachEvent("onpropertychange", Sg), Mo = oo = null) } function Sg(t) { if (t.propertyName === "value" && Ll(Mo)) { var e = []; xg(e, Mo, t, Qd(t)), eg(Z0, e) } } function J0(t, e, n) { t === "focusin" ? (Lh(), oo = e, Mo = n, oo.attachEvent("onpropertychange", Sg)) : t === "focusout" && Lh() } function ex(t) { if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ll(Mo) } function tx(t, e) { if (t === "click") return Ll(e) } function nx(t, e) { if (t === "input" || t === "change") return Ll(e) } function ix(t, e) { return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e } var Gn = typeof Object.is == "function" ? Object.is : ix; function Eo(t, e) { if (Gn(t, e)) return !0; if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1; var n = Object.keys(t), i = Object.keys(e); if (n.length !== i.length) return !1; for (i = 0; i < n.length; i++) { var r = n[i]; if (!au.call(e, r) || !Gn(t[r], e[r])) return !1 } return !0 } function Dh(t) { for (; t && t.firstChild;)t = t.firstChild; return t } function Ih(t, e) { var n = Dh(t); t = 0; for (var i; n;) { if (n.nodeType === 3) { if (i = t + n.textContent.length, t <= e && i >= e) return { node: n, offset: e - t }; t = i } e: { for (; n;) { if (n.nextSibling) { n = n.nextSibling; break e } n = n.parentNode } n = void 0 } n = Dh(n) } } function Mg(t, e) { return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Mg(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1 } function Eg() { for (var t = window, e = Za(); e instanceof t.HTMLIFrameElement;) { try { var n = typeof e.contentWindow.location.href == "string" } catch { n = !1 } if (n) t = e.contentWindow; else break; e = Za(t.document) } return e } function lf(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true") } function rx(t) { var e = Eg(), n = t.focusedElem, i = t.selectionRange; if (e !== n && n && n.ownerDocument && Mg(n.ownerDocument.documentElement, n)) { if (i !== null && lf(n)) { if (e = i.start, t = i.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length); else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) { t = t.getSelection(); var r = n.textContent.length, s = Math.min(i.start, r); i = i.end === void 0 ? s : Math.min(i.end, r), !t.extend && s > i && (r = i, i = s, s = r), r = Ih(n, s); var o = Ih(n, i); r && o && (t.rangeCount !== 1 || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(r.node, r.offset), t.removeAllRanges(), s > i ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e))) } } for (e = [], t = n; t = t.parentNode;)t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop }); for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top } } var sx = hi && "documentMode" in document && 11 >= document.documentMode, Qr = null, Au = null, ao = null, Cu = !1; function Nh(t, e, n) { var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Cu || Qr == null || Qr !== Za(i) || (i = Qr, "selectionStart" in i && lf(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = { anchorNode: i.anchorNode, anchorOffset: i.anchorOffset, focusNode: i.focusNode, focusOffset: i.focusOffset }), ao && Eo(ao, i) || (ao = i, i = rl(Au, "onSelect"), 0 < i.length && (e = new sf("onSelect", "select", null, e, n), t.push({ event: e, listeners: i }), e.target = Qr))) } function Jo(t, e) { var n = {}; return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n } var Jr = { animationend: Jo("Animation", "AnimationEnd"), animationiteration: Jo("Animation", "AnimationIteration"), animationstart: Jo("Animation", "AnimationStart"), transitionend: Jo("Transition", "TransitionEnd") }, dc = {}, Tg = {}; hi && (Tg = document.createElement("div").style, "AnimationEvent" in window || (delete Jr.animationend.animation, delete Jr.animationiteration.animation, delete Jr.animationstart.animation), "TransitionEvent" in window || delete Jr.transitionend.transition); function Dl(t) { if (dc[t]) return dc[t]; if (!Jr[t]) return t; var e = Jr[t], n; for (n in e) if (e.hasOwnProperty(n) && n in Tg) return dc[t] = e[n]; return t } var wg = Dl("animationend"), Ag = Dl("animationiteration"), Cg = Dl("animationstart"), Rg = Dl("transitionend"), Pg = new Map, Uh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function Zi(t, e) { Pg.set(t, e), Pr(e, [t]) } for (var fc = 0; fc < Uh.length; fc++) { var hc = Uh[fc], ox = hc.toLowerCase(), ax = hc[0].toUpperCase() + hc.slice(1); Zi(ox, "on" + ax) } Zi(wg, "onAnimationEnd"); Zi(Ag, "onAnimationIteration"); Zi(Cg, "onAnimationStart"); Zi("dblclick", "onDoubleClick"); Zi("focusin", "onFocus"); Zi("focusout", "onBlur"); Zi(Rg, "onTransitionEnd"); xs("onMouseEnter", ["mouseout", "mouseover"]); xs("onMouseLeave", ["mouseout", "mouseover"]); xs("onPointerEnter", ["pointerout", "pointerover"]); xs("onPointerLeave", ["pointerout", "pointerover"]); Pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")); Pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")); Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]); Pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")); Pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")); Pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var to = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lx = new Set("cancel close invalid load scroll toggle".split(" ").concat(to)); function Oh(t, e, n) { var i = t.type || "unknown-event"; t.currentTarget = n, o0(i, e, void 0, t), t.currentTarget = null } function bg(t, e) { e = (e & 4) !== 0; for (var n = 0; n < t.length; n++) { var i = t[n], r = i.event; i = i.listeners; e: { var s = void 0; if (e) for (var o = i.length - 1; 0 <= o; o--) { var a = i[o], l = a.instance, c = a.currentTarget; if (a = a.listener, l !== s && r.isPropagationStopped()) break e; Oh(r, a, c), s = l } else for (o = 0; o < i.length; o++) { if (a = i[o], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && r.isPropagationStopped()) break e; Oh(r, a, c), s = l } } } if (Ja) throw t = Mu, Ja = !1, Mu = null, t } function st(t, e) { var n = e[Du]; n === void 0 && (n = e[Du] = new Set); var i = t + "__bubble"; n.has(i) || (Lg(e, t, 2, !1), n.add(i)) } function pc(t, e, n) { var i = 0; e && (i |= 4), Lg(n, t, i, e) } var ea = "_reactListening" + Math.random().toString(36).slice(2); function To(t) { if (!t[ea]) { t[ea] = !0, km.forEach(function (n) { n !== "selectionchange" && (lx.has(n) || pc(n, !1, t), pc(n, !0, t)) }); var e = t.nodeType === 9 ? t : t.ownerDocument; e === null || e[ea] || (e[ea] = !0, pc("selectionchange", !1, e)) } } function Lg(t, e, n, i) { switch (pg(e)) { case 1: var r = M0; break; case 4: r = E0; break; default: r = nf }n = r.bind(null, e, n, t), r = void 0, !Su || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), i ? r !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: r }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, { passive: r }) : t.addEventListener(e, n, !1) } function mc(t, e, n, i, r) { var s = i; if (!(e & 1) && !(e & 2) && i !== null) e: for (; ;) { if (i === null) return; var o = i.tag; if (o === 3 || o === 4) { var a = i.stateNode.containerInfo; if (a === r || a.nodeType === 8 && a.parentNode === r) break; if (o === 4) for (o = i.return; o !== null;) { var l = o.tag; if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === r || l.nodeType === 8 && l.parentNode === r)) return; o = o.return } for (; a !== null;) { if (o = hr(a), o === null) return; if (l = o.tag, l === 5 || l === 6) { i = s = o; continue e } a = a.parentNode } } i = i.return } eg(function () { var c = s, d = Qd(n), h = []; e: { var f = Pg.get(t); if (f !== void 0) { var g = sf, x = t; switch (t) { case "keypress": if (Oa(n) === 0) break e; case "keydown": case "keyup": g = k0; break; case "focusin": x = "focus", g = lc; break; case "focusout": x = "blur", g = lc; break; case "beforeblur": case "afterblur": g = lc; break; case "click": if (n.button === 2) break e; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": g = Th; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": g = A0; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": g = H0; break; case wg: case Ag: case Cg: g = P0; break; case Rg: g = G0; break; case "scroll": g = T0; break; case "wheel": g = X0; break; case "copy": case "cut": case "paste": g = L0; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": g = Ah }var y = (e & 4) !== 0, p = !y && t === "scroll", u = y ? f !== null ? f + "Capture" : null : f; y = []; for (var m = c, _; m !== null;) { _ = m; var S = _.stateNode; if (_.tag === 5 && S !== null && (_ = S, u !== null && (S = vo(m, u), S != null && y.push(wo(m, S, _)))), p) break; m = m.return } 0 < y.length && (f = new g(f, x, null, n, d), h.push({ event: f, listeners: y })) } } if (!(e & 7)) { e: { if (f = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout", f && n !== xu && (x = n.relatedTarget || n.fromElement) && (hr(x) || x[pi])) break e; if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (x = n.relatedTarget || n.toElement, g = c, x = x ? hr(x) : null, x !== null && (p = br(x), x !== p || x.tag !== 5 && x.tag !== 6) && (x = null)) : (g = null, x = c), g !== x)) { if (y = Th, S = "onMouseLeave", u = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (y = Ah, S = "onPointerLeave", u = "onPointerEnter", m = "pointer"), p = g == null ? f : es(g), _ = x == null ? f : es(x), f = new y(S, m + "leave", g, n, d), f.target = p, f.relatedTarget = _, S = null, hr(d) === c && (y = new y(u, m + "enter", x, n, d), y.target = _, y.relatedTarget = p, S = y), p = S, g && x) t: { for (y = g, u = x, m = 0, _ = y; _; _ = Ir(_))m++; for (_ = 0, S = u; S; S = Ir(S))_++; for (; 0 < m - _;)y = Ir(y), m--; for (; 0 < _ - m;)u = Ir(u), _--; for (; m--;) { if (y === u || u !== null && y === u.alternate) break t; y = Ir(y), u = Ir(u) } y = null } else y = null; g !== null && Fh(h, f, g, y, !1), x !== null && p !== null && Fh(h, p, x, y, !0) } } e: { if (f = c ? es(c) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var R = Q0; else if (Ph(f)) if (yg) R = nx; else { R = ex; var A = J0 } else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (R = tx); if (R && (R = R(t, c))) { xg(h, R, n, d); break e } A && A(t, f, c), t === "focusout" && (A = f._wrapperState) && A.controlled && f.type === "number" && pu(f, "number", f.value) } switch (A = c ? es(c) : window, t) { case "focusin": (Ph(A) || A.contentEditable === "true") && (Qr = A, Au = c, ao = null); break; case "focusout": ao = Au = Qr = null; break; case "mousedown": Cu = !0; break; case "contextmenu": case "mouseup": case "dragend": Cu = !1, Nh(h, n, d); break; case "selectionchange": if (sx) break; case "keydown": case "keyup": Nh(h, n, d) }var w; if (af) e: { switch (t) { case "compositionstart": var P = "onCompositionStart"; break e; case "compositionend": P = "onCompositionEnd"; break e; case "compositionupdate": P = "onCompositionUpdate"; break e }P = void 0 } else Zr ? _g(t, n) && (P = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (P = "onCompositionStart"); P && (gg && n.locale !== "ko" && (Zr || P !== "onCompositionStart" ? P === "onCompositionEnd" && Zr && (w = mg()) : (Oi = d, rf = "value" in Oi ? Oi.value : Oi.textContent, Zr = !0)), A = rl(c, P), 0 < A.length && (P = new wh(P, t, null, n, d), h.push({ event: P, listeners: A }), w ? P.data = w : (w = vg(n), w !== null && (P.data = w)))), (w = Y0 ? q0(t, n) : K0(t, n)) && (c = rl(c, "onBeforeInput"), 0 < c.length && (d = new wh("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: c }), d.data = w)) } bg(h, e) }) } function wo(t, e, n) { return { instance: t, listener: e, currentTarget: n } } function rl(t, e) { for (var n = e + "Capture", i = []; t !== null;) { var r = t, s = r.stateNode; r.tag === 5 && s !== null && (r = s, s = vo(t, n), s != null && i.unshift(wo(t, s, r)), s = vo(t, e), s != null && i.push(wo(t, s, r))), t = t.return } return i } function Ir(t) { if (t === null) return null; do t = t.return; while (t && t.tag !== 5); return t || null } function Fh(t, e, n, i, r) { for (var s = e._reactName, o = []; n !== null && n !== i;) { var a = n, l = a.alternate, c = a.stateNode; if (l !== null && l === i) break; a.tag === 5 && c !== null && (a = c, r ? (l = vo(n, s), l != null && o.unshift(wo(n, l, a))) : r || (l = vo(n, s), l != null && o.push(wo(n, l, a)))), n = n.return } o.length !== 0 && t.push({ event: e, listeners: o }) } var cx = /\r\n?/g, ux = /\u0000|\uFFFD/g; function kh(t) {
	return (typeof t == "string" ? t : "" + t).replace(cx, `
`).replace(ux, "")
} function ta(t, e, n) { if (e = kh(e), kh(t) !== e && n) throw Error(ne(425)) } function sl() { } var Ru = null, Pu = null; function bu(t, e) { return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null } var Lu = typeof setTimeout == "function" ? setTimeout : void 0, dx = typeof clearTimeout == "function" ? clearTimeout : void 0, zh = typeof Promise == "function" ? Promise : void 0, fx = typeof queueMicrotask == "function" ? queueMicrotask : typeof zh < "u" ? function (t) { return zh.resolve(null).then(t).catch(hx) } : Lu; function hx(t) { setTimeout(function () { throw t }) } function gc(t, e) { var n = e, i = 0; do { var r = n.nextSibling; if (t.removeChild(n), r && r.nodeType === 8) if (n = r.data, n === "/$") { if (i === 0) { t.removeChild(r), So(e); return } i-- } else n !== "$" && n !== "$?" && n !== "$!" || i++; n = r } while (n); So(e) } function Hi(t) { for (; t != null; t = t.nextSibling) { var e = t.nodeType; if (e === 1 || e === 3) break; if (e === 8) { if (e = t.data, e === "$" || e === "$!" || e === "$?") break; if (e === "/$") return null } } return t } function Bh(t) { t = t.previousSibling; for (var e = 0; t;) { if (t.nodeType === 8) { var n = t.data; if (n === "$" || n === "$!" || n === "$?") { if (e === 0) return t; e-- } else n === "/$" && e++ } t = t.previousSibling } return null } var Ns = Math.random().toString(36).slice(2), Kn = "__reactFiber$" + Ns, Ao = "__reactProps$" + Ns, pi = "__reactContainer$" + Ns, Du = "__reactEvents$" + Ns, px = "__reactListeners$" + Ns, mx = "__reactHandles$" + Ns; function hr(t) { var e = t[Kn]; if (e) return e; for (var n = t.parentNode; n;) { if (e = n[pi] || n[Kn]) { if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Bh(t); t !== null;) { if (n = t[Kn]) return n; t = Bh(t) } return e } t = n, n = t.parentNode } return null } function ko(t) { return t = t[Kn] || t[pi], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t } function es(t) { if (t.tag === 5 || t.tag === 6) return t.stateNode; throw Error(ne(33)) } function Il(t) { return t[Ao] || null } var Iu = [], ts = -1; function Qi(t) { return { current: t } } function at(t) { 0 > ts || (t.current = Iu[ts], Iu[ts] = null, ts--) } function it(t, e) { ts++, Iu[ts] = t.current, t.current = e } var Ki = {}, Wt = Qi(Ki), sn = Qi(!1), Sr = Ki; function ys(t, e) { var n = t.type.contextTypes; if (!n) return Ki; var i = t.stateNode; if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext; var r = {}, s; for (s in n) r[s] = e[s]; return i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = r), r } function on(t) { return t = t.childContextTypes, t != null } function ol() { at(sn), at(Wt) } function Hh(t, e, n) { if (Wt.current !== Ki) throw Error(ne(168)); it(Wt, e), it(sn, n) } function Dg(t, e, n) { var i = t.stateNode; if (e = e.childContextTypes, typeof i.getChildContext != "function") return n; i = i.getChildContext(); for (var r in i) if (!(r in e)) throw Error(ne(108, Jv(t) || "Unknown", r)); return ht({}, n, i) } function al(t) { return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ki, Sr = Wt.current, it(Wt, t), it(sn, sn.current), !0 } function Vh(t, e, n) { var i = t.stateNode; if (!i) throw Error(ne(169)); n ? (t = Dg(t, e, Sr), i.__reactInternalMemoizedMergedChildContext = t, at(sn), at(Wt), it(Wt, t)) : at(sn), it(sn, n) } var ai = null, Nl = !1, _c = !1; function Ig(t) { ai === null ? ai = [t] : ai.push(t) } function gx(t) { Nl = !0, Ig(t) } function Ji() { if (!_c && ai !== null) { _c = !0; var t = 0, e = et; try { var n = ai; for (et = 1; t < n.length; t++) { var i = n[t]; do i = i(!0); while (i !== null) } ai = null, Nl = !1 } catch (r) { throw ai !== null && (ai = ai.slice(t + 1)), rg(Jd, Ji), r } finally { et = e, _c = !1 } } return null } var ns = [], is = 0, ll = null, cl = 0, Sn = [], Mn = 0, Mr = null, li = 1, ci = ""; function lr(t, e) { ns[is++] = cl, ns[is++] = ll, ll = t, cl = e } function Ng(t, e, n) { Sn[Mn++] = li, Sn[Mn++] = ci, Sn[Mn++] = Mr, Mr = t; var i = li; t = ci; var r = 32 - Bn(i) - 1; i &= ~(1 << r), n += 1; var s = 32 - Bn(e) + r; if (30 < s) { var o = r - r % 5; s = (i & (1 << o) - 1).toString(32), i >>= o, r -= o, li = 1 << 32 - Bn(e) + r | n << r | i, ci = s + t } else li = 1 << s | n << r | i, ci = t } function cf(t) { t.return !== null && (lr(t, 1), Ng(t, 1, 0)) } function uf(t) { for (; t === ll;)ll = ns[--is], ns[is] = null, cl = ns[--is], ns[is] = null; for (; t === Mr;)Mr = Sn[--Mn], Sn[Mn] = null, ci = Sn[--Mn], Sn[Mn] = null, li = Sn[--Mn], Sn[Mn] = null } var pn = null, hn = null, lt = !1, On = null; function Ug(t, e) { var n = Tn(5, null, null, 0); n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n) } function Gh(t, e) { switch (t.tag) { case 5: var n = t.type; return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, pn = t, hn = Hi(e.firstChild), !0) : !1; case 6: return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, pn = t, hn = null, !0) : !1; case 13: return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Mr !== null ? { id: li, overflow: ci } : null, t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }, n = Tn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, pn = t, hn = null, !0) : !1; default: return !1 } } function Nu(t) { return (t.mode & 1) !== 0 && (t.flags & 128) === 0 } function Uu(t) { if (lt) { var e = hn; if (e) { var n = e; if (!Gh(t, e)) { if (Nu(t)) throw Error(ne(418)); e = Hi(n.nextSibling); var i = pn; e && Gh(t, e) ? Ug(i, n) : (t.flags = t.flags & -4097 | 2, lt = !1, pn = t) } } else { if (Nu(t)) throw Error(ne(418)); t.flags = t.flags & -4097 | 2, lt = !1, pn = t } } } function Wh(t) { for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;)t = t.return; pn = t } function na(t) { if (t !== pn) return !1; if (!lt) return Wh(t), lt = !0, !1; var e; if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !bu(t.type, t.memoizedProps)), e && (e = hn)) { if (Nu(t)) throw Og(), Error(ne(418)); for (; e;)Ug(t, e), e = Hi(e.nextSibling) } if (Wh(t), t.tag === 13) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(ne(317)); e: { for (t = t.nextSibling, e = 0; t;) { if (t.nodeType === 8) { var n = t.data; if (n === "/$") { if (e === 0) { hn = Hi(t.nextSibling); break e } e-- } else n !== "$" && n !== "$!" && n !== "$?" || e++ } t = t.nextSibling } hn = null } } else hn = pn ? Hi(t.stateNode.nextSibling) : null; return !0 } function Og() { for (var t = hn; t;)t = Hi(t.nextSibling) } function Ss() { hn = pn = null, lt = !1 } function df(t) { On === null ? On = [t] : On.push(t) } var _x = xi.ReactCurrentBatchConfig; function Gs(t, e, n) { if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") { if (n._owner) { if (n = n._owner, n) { if (n.tag !== 1) throw Error(ne(309)); var i = n.stateNode } if (!i) throw Error(ne(147, t)); var r = i, s = "" + t; return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function (o) { var a = r.refs; o === null ? delete a[s] : a[s] = o }, e._stringRef = s, e) } if (typeof t != "string") throw Error(ne(284)); if (!n._owner) throw Error(ne(290, t)) } return t } function ia(t, e) { throw t = Object.prototype.toString.call(e), Error(ne(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)) } function Xh(t) { var e = t._init; return e(t._payload) } function Fg(t) { function e(u, m) { if (t) { var _ = u.deletions; _ === null ? (u.deletions = [m], u.flags |= 16) : _.push(m) } } function n(u, m) { if (!t) return null; for (; m !== null;)e(u, m), m = m.sibling; return null } function i(u, m) { for (u = new Map; m !== null;)m.key !== null ? u.set(m.key, m) : u.set(m.index, m), m = m.sibling; return u } function r(u, m) { return u = Xi(u, m), u.index = 0, u.sibling = null, u } function s(u, m, _) { return u.index = _, t ? (_ = u.alternate, _ !== null ? (_ = _.index, _ < m ? (u.flags |= 2, m) : _) : (u.flags |= 2, m)) : (u.flags |= 1048576, m) } function o(u) { return t && u.alternate === null && (u.flags |= 2), u } function a(u, m, _, S) { return m === null || m.tag !== 6 ? (m = Tc(_, u.mode, S), m.return = u, m) : (m = r(m, _), m.return = u, m) } function l(u, m, _, S) { var R = _.type; return R === $r ? d(u, m, _.props.children, S, _.key) : m !== null && (m.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ri && Xh(R) === m.type) ? (S = r(m, _.props), S.ref = Gs(u, m, _), S.return = u, S) : (S = Ga(_.type, _.key, _.props, null, u.mode, S), S.ref = Gs(u, m, _), S.return = u, S) } function c(u, m, _, S) { return m === null || m.tag !== 4 || m.stateNode.containerInfo !== _.containerInfo || m.stateNode.implementation !== _.implementation ? (m = wc(_, u.mode, S), m.return = u, m) : (m = r(m, _.children || []), m.return = u, m) } function d(u, m, _, S, R) { return m === null || m.tag !== 7 ? (m = yr(_, u.mode, S, R), m.return = u, m) : (m = r(m, _), m.return = u, m) } function h(u, m, _) { if (typeof m == "string" && m !== "" || typeof m == "number") return m = Tc("" + m, u.mode, _), m.return = u, m; if (typeof m == "object" && m !== null) { switch (m.$$typeof) { case jo: return _ = Ga(m.type, m.key, m.props, null, u.mode, _), _.ref = Gs(u, null, m), _.return = u, _; case Kr: return m = wc(m, u.mode, _), m.return = u, m; case Ri: var S = m._init; return h(u, S(m._payload), _) }if (Js(m) || ks(m)) return m = yr(m, u.mode, _, null), m.return = u, m; ia(u, m) } return null } function f(u, m, _, S) { var R = m !== null ? m.key : null; if (typeof _ == "string" && _ !== "" || typeof _ == "number") return R !== null ? null : a(u, m, "" + _, S); if (typeof _ == "object" && _ !== null) { switch (_.$$typeof) { case jo: return _.key === R ? l(u, m, _, S) : null; case Kr: return _.key === R ? c(u, m, _, S) : null; case Ri: return R = _._init, f(u, m, R(_._payload), S) }if (Js(_) || ks(_)) return R !== null ? null : d(u, m, _, S, null); ia(u, _) } return null } function g(u, m, _, S, R) { if (typeof S == "string" && S !== "" || typeof S == "number") return u = u.get(_) || null, a(m, u, "" + S, R); if (typeof S == "object" && S !== null) { switch (S.$$typeof) { case jo: return u = u.get(S.key === null ? _ : S.key) || null, l(m, u, S, R); case Kr: return u = u.get(S.key === null ? _ : S.key) || null, c(m, u, S, R); case Ri: var A = S._init; return g(u, m, _, A(S._payload), R) }if (Js(S) || ks(S)) return u = u.get(_) || null, d(m, u, S, R, null); ia(m, S) } return null } function x(u, m, _, S) { for (var R = null, A = null, w = m, P = m = 0, X = null; w !== null && P < _.length; P++) { w.index > P ? (X = w, w = null) : X = w.sibling; var v = f(u, w, _[P], S); if (v === null) { w === null && (w = X); break } t && w && v.alternate === null && e(u, w), m = s(v, m, P), A === null ? R = v : A.sibling = v, A = v, w = X } if (P === _.length) return n(u, w), lt && lr(u, P), R; if (w === null) { for (; P < _.length; P++)w = h(u, _[P], S), w !== null && (m = s(w, m, P), A === null ? R = w : A.sibling = w, A = w); return lt && lr(u, P), R } for (w = i(u, w); P < _.length; P++)X = g(w, u, P, _[P], S), X !== null && (t && X.alternate !== null && w.delete(X.key === null ? P : X.key), m = s(X, m, P), A === null ? R = X : A.sibling = X, A = X); return t && w.forEach(function (T) { return e(u, T) }), lt && lr(u, P), R } function y(u, m, _, S) { var R = ks(_); if (typeof R != "function") throw Error(ne(150)); if (_ = R.call(_), _ == null) throw Error(ne(151)); for (var A = R = null, w = m, P = m = 0, X = null, v = _.next(); w !== null && !v.done; P++, v = _.next()) { w.index > P ? (X = w, w = null) : X = w.sibling; var T = f(u, w, v.value, S); if (T === null) { w === null && (w = X); break } t && w && T.alternate === null && e(u, w), m = s(T, m, P), A === null ? R = T : A.sibling = T, A = T, w = X } if (v.done) return n(u, w), lt && lr(u, P), R; if (w === null) { for (; !v.done; P++, v = _.next())v = h(u, v.value, S), v !== null && (m = s(v, m, P), A === null ? R = v : A.sibling = v, A = v); return lt && lr(u, P), R } for (w = i(u, w); !v.done; P++, v = _.next())v = g(w, u, P, v.value, S), v !== null && (t && v.alternate !== null && w.delete(v.key === null ? P : v.key), m = s(v, m, P), A === null ? R = v : A.sibling = v, A = v); return t && w.forEach(function (H) { return e(u, H) }), lt && lr(u, P), R } function p(u, m, _, S) { if (typeof _ == "object" && _ !== null && _.type === $r && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) { switch (_.$$typeof) { case jo: e: { for (var R = _.key, A = m; A !== null;) { if (A.key === R) { if (R = _.type, R === $r) { if (A.tag === 7) { n(u, A.sibling), m = r(A, _.props.children), m.return = u, u = m; break e } } else if (A.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ri && Xh(R) === A.type) { n(u, A.sibling), m = r(A, _.props), m.ref = Gs(u, A, _), m.return = u, u = m; break e } n(u, A); break } else e(u, A); A = A.sibling } _.type === $r ? (m = yr(_.props.children, u.mode, S, _.key), m.return = u, u = m) : (S = Ga(_.type, _.key, _.props, null, u.mode, S), S.ref = Gs(u, m, _), S.return = u, u = S) } return o(u); case Kr: e: { for (A = _.key; m !== null;) { if (m.key === A) if (m.tag === 4 && m.stateNode.containerInfo === _.containerInfo && m.stateNode.implementation === _.implementation) { n(u, m.sibling), m = r(m, _.children || []), m.return = u, u = m; break e } else { n(u, m); break } else e(u, m); m = m.sibling } m = wc(_, u.mode, S), m.return = u, u = m } return o(u); case Ri: return A = _._init, p(u, m, A(_._payload), S) }if (Js(_)) return x(u, m, _, S); if (ks(_)) return y(u, m, _, S); ia(u, _) } return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, m !== null && m.tag === 6 ? (n(u, m.sibling), m = r(m, _), m.return = u, u = m) : (n(u, m), m = Tc(_, u.mode, S), m.return = u, u = m), o(u)) : n(u, m) } return p } var Ms = Fg(!0), kg = Fg(!1), ul = Qi(null), dl = null, rs = null, ff = null; function hf() { ff = rs = dl = null } function pf(t) { var e = ul.current; at(ul), t._currentValue = e } function Ou(t, e, n) { for (; t !== null;) { var i = t.alternate; if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break; t = t.return } } function hs(t, e) { dl = t, ff = rs = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (rn = !0), t.firstContext = null) } function Cn(t) { var e = t._currentValue; if (ff !== t) if (t = { context: t, memoizedValue: e, next: null }, rs === null) { if (dl === null) throw Error(ne(308)); rs = t, dl.dependencies = { lanes: 0, firstContext: t } } else rs = rs.next = t; return e } var pr = null; function mf(t) { pr === null ? pr = [t] : pr.push(t) } function zg(t, e, n, i) { var r = e.interleaved; return r === null ? (n.next = n, mf(e)) : (n.next = r.next, r.next = n), e.interleaved = n, mi(t, i) } function mi(t, e) { t.lanes |= e; var n = t.alternate; for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;)t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return; return n.tag === 3 ? n.stateNode : null } var Pi = !1; function gf(t) { t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } } function Bg(t, e) { t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects }) } function fi(t, e) { return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null } } function Vi(t, e, n) { var i = t.updateQueue; if (i === null) return null; if (i = i.shared, qe & 2) { var r = i.pending; return r === null ? e.next = e : (e.next = r.next, r.next = e), i.pending = e, mi(t, n) } return r = i.interleaved, r === null ? (e.next = e, mf(i)) : (e.next = r.next, r.next = e), i.interleaved = e, mi(t, n) } function Fa(t, e, n) { if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) { var i = e.lanes; i &= t.pendingLanes, n |= i, e.lanes = n, ef(t, n) } } function jh(t, e) { var n = t.updateQueue, i = t.alternate; if (i !== null && (i = i.updateQueue, n === i)) { var r = null, s = null; if (n = n.firstBaseUpdate, n !== null) { do { var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null }; s === null ? r = s = o : s = s.next = o, n = n.next } while (n !== null); s === null ? r = s = e : s = s.next = e } else r = s = e; n = { baseState: i.baseState, firstBaseUpdate: r, lastBaseUpdate: s, shared: i.shared, effects: i.effects }, t.updateQueue = n; return } t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e } function fl(t, e, n, i) { var r = t.updateQueue; Pi = !1; var s = r.firstBaseUpdate, o = r.lastBaseUpdate, a = r.shared.pending; if (a !== null) { r.shared.pending = null; var l = a, c = l.next; l.next = null, o === null ? s = c : o.next = c, o = l; var d = t.alternate; d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== o && (a === null ? d.firstBaseUpdate = c : a.next = c, d.lastBaseUpdate = l)) } if (s !== null) { var h = r.baseState; o = 0, d = c = l = null, a = s; do { var f = a.lane, g = a.eventTime; if ((i & f) === f) { d !== null && (d = d.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null }); e: { var x = t, y = a; switch (f = e, g = n, y.tag) { case 1: if (x = y.payload, typeof x == "function") { h = x.call(g, h, f); break e } h = x; break e; case 3: x.flags = x.flags & -65537 | 128; case 0: if (x = y.payload, f = typeof x == "function" ? x.call(g, h, f) : x, f == null) break e; h = ht({}, h, f); break e; case 2: Pi = !0 } } a.callback !== null && a.lane !== 0 && (t.flags |= 64, f = r.effects, f === null ? r.effects = [a] : f.push(a)) } else g = { eventTime: g, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, d === null ? (c = d = g, l = h) : d = d.next = g, o |= f; if (a = a.next, a === null) { if (a = r.shared.pending, a === null) break; f = a, a = f.next, f.next = null, r.lastBaseUpdate = f, r.shared.pending = null } } while (!0); if (d === null && (l = h), r.baseState = l, r.firstBaseUpdate = c, r.lastBaseUpdate = d, e = r.shared.interleaved, e !== null) { r = e; do o |= r.lane, r = r.next; while (r !== e) } else s === null && (r.shared.lanes = 0); Tr |= o, t.lanes = o, t.memoizedState = h } } function Yh(t, e, n) { if (t = e.effects, e.effects = null, t !== null) for (e = 0; e < t.length; e++) { var i = t[e], r = i.callback; if (r !== null) { if (i.callback = null, i = n, typeof r != "function") throw Error(ne(191, r)); r.call(i) } } } var zo = {}, Qn = Qi(zo), Co = Qi(zo), Ro = Qi(zo); function mr(t) { if (t === zo) throw Error(ne(174)); return t } function _f(t, e) { switch (it(Ro, e), it(Co, t), it(Qn, zo), t = e.nodeType, t) { case 9: case 11: e = (e = e.documentElement) ? e.namespaceURI : gu(null, ""); break; default: t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = gu(e, t) }at(Qn), it(Qn, e) } function Es() { at(Qn), at(Co), at(Ro) } function Hg(t) { mr(Ro.current); var e = mr(Qn.current), n = gu(e, t.type); e !== n && (it(Co, t), it(Qn, n)) } function vf(t) { Co.current === t && (at(Qn), at(Co)) } var dt = Qi(0); function hl(t) { for (var e = t; e !== null;) { if (e.tag === 13) { var n = e.memoizedState; if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) { if (e.flags & 128) return e } else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break; for (; e.sibling === null;) { if (e.return === null || e.return === t) return null; e = e.return } e.sibling.return = e.return, e = e.sibling } return null } var vc = []; function xf() { for (var t = 0; t < vc.length; t++)vc[t]._workInProgressVersionPrimary = null; vc.length = 0 } var ka = xi.ReactCurrentDispatcher, xc = xi.ReactCurrentBatchConfig, Er = 0, ft = null, Et = null, Rt = null, pl = !1, lo = !1, Po = 0, vx = 0; function Ft() { throw Error(ne(321)) } function yf(t, e) { if (e === null) return !1; for (var n = 0; n < e.length && n < t.length; n++)if (!Gn(t[n], e[n])) return !1; return !0 } function Sf(t, e, n, i, r, s) { if (Er = s, ft = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ka.current = t === null || t.memoizedState === null ? Mx : Ex, t = n(i, r), lo) { s = 0; do { if (lo = !1, Po = 0, 25 <= s) throw Error(ne(301)); s += 1, Rt = Et = null, e.updateQueue = null, ka.current = Tx, t = n(i, r) } while (lo) } if (ka.current = ml, e = Et !== null && Et.next !== null, Er = 0, Rt = Et = ft = null, pl = !1, e) throw Error(ne(300)); return t } function Mf() { var t = Po !== 0; return Po = 0, t } function jn() { var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Rt === null ? ft.memoizedState = Rt = t : Rt = Rt.next = t, Rt } function Rn() { if (Et === null) { var t = ft.alternate; t = t !== null ? t.memoizedState : null } else t = Et.next; var e = Rt === null ? ft.memoizedState : Rt.next; if (e !== null) Rt = e, Et = t; else { if (t === null) throw Error(ne(310)); Et = t, t = { memoizedState: Et.memoizedState, baseState: Et.baseState, baseQueue: Et.baseQueue, queue: Et.queue, next: null }, Rt === null ? ft.memoizedState = Rt = t : Rt = Rt.next = t } return Rt } function bo(t, e) { return typeof e == "function" ? e(t) : e } function yc(t) { var e = Rn(), n = e.queue; if (n === null) throw Error(ne(311)); n.lastRenderedReducer = t; var i = Et, r = i.baseQueue, s = n.pending; if (s !== null) { if (r !== null) { var o = r.next; r.next = s.next, s.next = o } i.baseQueue = r = s, n.pending = null } if (r !== null) { s = r.next, i = i.baseState; var a = o = null, l = null, c = s; do { var d = c.lane; if ((Er & d) === d) l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), i = c.hasEagerState ? c.eagerState : t(i, c.action); else { var h = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }; l === null ? (a = l = h, o = i) : l = l.next = h, ft.lanes |= d, Tr |= d } c = c.next } while (c !== null && c !== s); l === null ? o = i : l.next = a, Gn(i, e.memoizedState) || (rn = !0), e.memoizedState = i, e.baseState = o, e.baseQueue = l, n.lastRenderedState = i } if (t = n.interleaved, t !== null) { r = t; do s = r.lane, ft.lanes |= s, Tr |= s, r = r.next; while (r !== t) } else r === null && (n.lanes = 0); return [e.memoizedState, n.dispatch] } function Sc(t) { var e = Rn(), n = e.queue; if (n === null) throw Error(ne(311)); n.lastRenderedReducer = t; var i = n.dispatch, r = n.pending, s = e.memoizedState; if (r !== null) { n.pending = null; var o = r = r.next; do s = t(s, o.action), o = o.next; while (o !== r); Gn(s, e.memoizedState) || (rn = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s } return [s, i] } function Vg() { } function Gg(t, e) { var n = ft, i = Rn(), r = e(), s = !Gn(i.memoizedState, r); if (s && (i.memoizedState = r, rn = !0), i = i.queue, Ef(jg.bind(null, n, i, t), [t]), i.getSnapshot !== e || s || Rt !== null && Rt.memoizedState.tag & 1) { if (n.flags |= 2048, Lo(9, Xg.bind(null, n, i, r, e), void 0, null), Pt === null) throw Error(ne(349)); Er & 30 || Wg(n, e, r) } return r } function Wg(t, e, n) { t.flags |= 16384, t = { getSnapshot: e, value: n }, e = ft.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, ft.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t)) } function Xg(t, e, n, i) { e.value = n, e.getSnapshot = i, Yg(e) && qg(t) } function jg(t, e, n) { return n(function () { Yg(e) && qg(t) }) } function Yg(t) { var e = t.getSnapshot; t = t.value; try { var n = e(); return !Gn(t, n) } catch { return !0 } } function qg(t) { var e = mi(t, 1); e !== null && Hn(e, t, 1, -1) } function qh(t) { var e = jn(); return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bo, lastRenderedState: t }, e.queue = t, t = t.dispatch = Sx.bind(null, ft, t), [e.memoizedState, t] } function Lo(t, e, n, i) { return t = { tag: t, create: e, destroy: n, deps: i, next: null }, e = ft.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, ft.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t)), t } function Kg() { return Rn().memoizedState } function za(t, e, n, i) { var r = jn(); ft.flags |= t, r.memoizedState = Lo(1 | e, n, void 0, i === void 0 ? null : i) } function Ul(t, e, n, i) { var r = Rn(); i = i === void 0 ? null : i; var s = void 0; if (Et !== null) { var o = Et.memoizedState; if (s = o.destroy, i !== null && yf(i, o.deps)) { r.memoizedState = Lo(e, n, s, i); return } } ft.flags |= t, r.memoizedState = Lo(1 | e, n, s, i) } function Kh(t, e) { return za(8390656, 8, t, e) } function Ef(t, e) { return Ul(2048, 8, t, e) } function $g(t, e) { return Ul(4, 2, t, e) } function Zg(t, e) { return Ul(4, 4, t, e) } function Qg(t, e) { if (typeof e == "function") return t = t(), e(t), function () { e(null) }; if (e != null) return t = t(), e.current = t, function () { e.current = null } } function Jg(t, e, n) { return n = n != null ? n.concat([t]) : null, Ul(4, 4, Qg.bind(null, e, t), n) } function Tf() { } function e_(t, e) { var n = Rn(); e = e === void 0 ? null : e; var i = n.memoizedState; return i !== null && e !== null && yf(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t) } function t_(t, e) { var n = Rn(); e = e === void 0 ? null : e; var i = n.memoizedState; return i !== null && e !== null && yf(e, i[1]) ? i[0] : (t = t(), n.memoizedState = [t, e], t) } function n_(t, e, n) { return Er & 21 ? (Gn(n, e) || (n = ag(), ft.lanes |= n, Tr |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, rn = !0), t.memoizedState = n) } function xx(t, e) { var n = et; et = n !== 0 && 4 > n ? n : 4, t(!0); var i = xc.transition; xc.transition = {}; try { t(!1), e() } finally { et = n, xc.transition = i } } function i_() { return Rn().memoizedState } function yx(t, e, n) { var i = Wi(t); if (n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }, r_(t)) s_(e, n); else if (n = zg(t, e, n, i), n !== null) { var r = qt(); Hn(n, t, i, r), o_(n, e, i) } } function Sx(t, e, n) { var i = Wi(t), r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }; if (r_(t)) s_(e, r); else { var s = t.alternate; if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try { var o = e.lastRenderedState, a = s(o, n); if (r.hasEagerState = !0, r.eagerState = a, Gn(a, o)) { var l = e.interleaved; l === null ? (r.next = r, mf(e)) : (r.next = l.next, l.next = r), e.interleaved = r; return } } catch { } finally { } n = zg(t, e, r, i), n !== null && (r = qt(), Hn(n, t, i, r), o_(n, e, i)) } } function r_(t) { var e = t.alternate; return t === ft || e !== null && e === ft } function s_(t, e) { lo = pl = !0; var n = t.pending; n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e } function o_(t, e, n) { if (n & 4194240) { var i = e.lanes; i &= t.pendingLanes, n |= i, e.lanes = n, ef(t, n) } } var ml = { readContext: Cn, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, Mx = { readContext: Cn, useCallback: function (t, e) { return jn().memoizedState = [t, e === void 0 ? null : e], t }, useContext: Cn, useEffect: Kh, useImperativeHandle: function (t, e, n) { return n = n != null ? n.concat([t]) : null, za(4194308, 4, Qg.bind(null, e, t), n) }, useLayoutEffect: function (t, e) { return za(4194308, 4, t, e) }, useInsertionEffect: function (t, e) { return za(4, 2, t, e) }, useMemo: function (t, e) { var n = jn(); return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t }, useReducer: function (t, e, n) { var i = jn(); return e = n !== void 0 ? n(e) : e, i.memoizedState = i.baseState = e, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: e }, i.queue = t, t = t.dispatch = yx.bind(null, ft, t), [i.memoizedState, t] }, useRef: function (t) { var e = jn(); return t = { current: t }, e.memoizedState = t }, useState: qh, useDebugValue: Tf, useDeferredValue: function (t) { return jn().memoizedState = t }, useTransition: function () { var t = qh(!1), e = t[0]; return t = xx.bind(null, t[1]), jn().memoizedState = t, [e, t] }, useMutableSource: function () { }, useSyncExternalStore: function (t, e, n) { var i = ft, r = jn(); if (lt) { if (n === void 0) throw Error(ne(407)); n = n() } else { if (n = e(), Pt === null) throw Error(ne(349)); Er & 30 || Wg(i, e, n) } r.memoizedState = n; var s = { value: n, getSnapshot: e }; return r.queue = s, Kh(jg.bind(null, i, s, t), [t]), i.flags |= 2048, Lo(9, Xg.bind(null, i, s, n, e), void 0, null), n }, useId: function () { var t = jn(), e = Pt.identifierPrefix; if (lt) { var n = ci, i = li; n = (i & ~(1 << 32 - Bn(i) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Po++, 0 < n && (e += "H" + n.toString(32)), e += ":" } else n = vx++, e = ":" + e + "r" + n.toString(32) + ":"; return t.memoizedState = e }, unstable_isNewReconciler: !1 }, Ex = { readContext: Cn, useCallback: e_, useContext: Cn, useEffect: Ef, useImperativeHandle: Jg, useInsertionEffect: $g, useLayoutEffect: Zg, useMemo: t_, useReducer: yc, useRef: Kg, useState: function () { return yc(bo) }, useDebugValue: Tf, useDeferredValue: function (t) { var e = Rn(); return n_(e, Et.memoizedState, t) }, useTransition: function () { var t = yc(bo)[0], e = Rn().memoizedState; return [t, e] }, useMutableSource: Vg, useSyncExternalStore: Gg, useId: i_, unstable_isNewReconciler: !1 }, Tx = { readContext: Cn, useCallback: e_, useContext: Cn, useEffect: Ef, useImperativeHandle: Jg, useInsertionEffect: $g, useLayoutEffect: Zg, useMemo: t_, useReducer: Sc, useRef: Kg, useState: function () { return Sc(bo) }, useDebugValue: Tf, useDeferredValue: function (t) { var e = Rn(); return Et === null ? e.memoizedState = t : n_(e, Et.memoizedState, t) }, useTransition: function () { var t = Sc(bo)[0], e = Rn().memoizedState; return [t, e] }, useMutableSource: Vg, useSyncExternalStore: Gg, useId: i_, unstable_isNewReconciler: !1 }; function Nn(t, e) { if (t && t.defaultProps) { e = ht({}, e), t = t.defaultProps; for (var n in t) e[n] === void 0 && (e[n] = t[n]); return e } return e } function Fu(t, e, n, i) { e = t.memoizedState, n = n(i, e), n = n == null ? e : ht({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n) } var Ol = { isMounted: function (t) { return (t = t._reactInternals) ? br(t) === t : !1 }, enqueueSetState: function (t, e, n) { t = t._reactInternals; var i = qt(), r = Wi(t), s = fi(i, r); s.payload = e, n != null && (s.callback = n), e = Vi(t, s, r), e !== null && (Hn(e, t, r, i), Fa(e, t, r)) }, enqueueReplaceState: function (t, e, n) { t = t._reactInternals; var i = qt(), r = Wi(t), s = fi(i, r); s.tag = 1, s.payload = e, n != null && (s.callback = n), e = Vi(t, s, r), e !== null && (Hn(e, t, r, i), Fa(e, t, r)) }, enqueueForceUpdate: function (t, e) { t = t._reactInternals; var n = qt(), i = Wi(t), r = fi(n, i); r.tag = 2, e != null && (r.callback = e), e = Vi(t, r, i), e !== null && (Hn(e, t, i, n), Fa(e, t, i)) } }; function $h(t, e, n, i, r, s, o) { return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, o) : e.prototype && e.prototype.isPureReactComponent ? !Eo(n, i) || !Eo(r, s) : !0 } function a_(t, e, n) { var i = !1, r = Ki, s = e.contextType; return typeof s == "object" && s !== null ? s = Cn(s) : (r = on(e) ? Sr : Wt.current, i = e.contextTypes, s = (i = i != null) ? ys(t, r) : Ki), e = new e(n, s), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Ol, t.stateNode = e, e._reactInternals = t, i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = s), e } function Zh(t, e, n, i) { t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Ol.enqueueReplaceState(e, e.state, null) } function ku(t, e, n, i) { var r = t.stateNode; r.props = n, r.state = t.memoizedState, r.refs = {}, gf(t); var s = e.contextType; typeof s == "object" && s !== null ? r.context = Cn(s) : (s = on(e) ? Sr : Wt.current, r.context = ys(t, s)), r.state = t.memoizedState, s = e.getDerivedStateFromProps, typeof s == "function" && (Fu(t, e, s, n), r.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), e !== r.state && Ol.enqueueReplaceState(r, r.state, null), fl(t, n, r, i), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308) } function Ts(t, e) {
	try { var n = "", i = e; do n += Qv(i), i = i.return; while (i); var r = n } catch (s) {
		r = `
Error generating stack: `+ s.message + `
`+ s.stack
	} return { value: t, source: e, stack: r, digest: null }
} function Mc(t, e, n) { return { value: t, source: null, stack: n ?? null, digest: e ?? null } } function zu(t, e) { try { console.error(e.value) } catch (n) { setTimeout(function () { throw n }) } } var wx = typeof WeakMap == "function" ? WeakMap : Map; function l_(t, e, n) { n = fi(-1, n), n.tag = 3, n.payload = { element: null }; var i = e.value; return n.callback = function () { _l || (_l = !0, Ku = i), zu(t, e) }, n } function c_(t, e, n) { n = fi(-1, n), n.tag = 3; var i = t.type.getDerivedStateFromError; if (typeof i == "function") { var r = e.value; n.payload = function () { return i(r) }, n.callback = function () { zu(t, e) } } var s = t.stateNode; return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () { zu(t, e), typeof i != "function" && (Gi === null ? Gi = new Set([this]) : Gi.add(this)); var o = e.stack; this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" }) }), n } function Qh(t, e, n) { var i = t.pingCache; if (i === null) { i = t.pingCache = new wx; var r = new Set; i.set(e, r) } else r = i.get(e), r === void 0 && (r = new Set, i.set(e, r)); r.has(n) || (r.add(n), t = zx.bind(null, t, e, n), e.then(t, t)) } function Jh(t) { do { var e; if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t; t = t.return } while (t !== null); return null } function ep(t, e, n, i, r) { return t.mode & 1 ? (t.flags |= 65536, t.lanes = r, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = fi(-1, 1), e.tag = 2, Vi(n, e, 1))), n.lanes |= 1), t) } var Ax = xi.ReactCurrentOwner, rn = !1; function Yt(t, e, n, i) { e.child = t === null ? kg(e, null, n, i) : Ms(e, t.child, n, i) } function tp(t, e, n, i, r) { n = n.render; var s = e.ref; return hs(e, r), i = Sf(t, e, n, i, s, r), n = Mf(), t !== null && !rn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, gi(t, e, r)) : (lt && n && cf(e), e.flags |= 1, Yt(t, e, i, r), e.child) } function np(t, e, n, i, r) { if (t === null) { var s = n.type; return typeof s == "function" && !Df(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = s, u_(t, e, s, i, r)) : (t = Ga(n.type, null, i, e, e.mode, r), t.ref = e.ref, t.return = e, e.child = t) } if (s = t.child, !(t.lanes & r)) { var o = s.memoizedProps; if (n = n.compare, n = n !== null ? n : Eo, n(o, i) && t.ref === e.ref) return gi(t, e, r) } return e.flags |= 1, t = Xi(s, i), t.ref = e.ref, t.return = e, e.child = t } function u_(t, e, n, i, r) { if (t !== null) { var s = t.memoizedProps; if (Eo(s, i) && t.ref === e.ref) if (rn = !1, e.pendingProps = i = s, (t.lanes & r) !== 0) t.flags & 131072 && (rn = !0); else return e.lanes = t.lanes, gi(t, e, r) } return Bu(t, e, n, i, r) } function d_(t, e, n) { var i = e.pendingProps, r = i.children, s = t !== null ? t.memoizedState : null; if (i.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, it(os, fn), fn |= n; else { if (!(n & 1073741824)) return t = s !== null ? s.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, e.updateQueue = null, it(os, fn), fn |= t, null; e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, i = s !== null ? s.baseLanes : n, it(os, fn), fn |= i } else s !== null ? (i = s.baseLanes | n, e.memoizedState = null) : i = n, it(os, fn), fn |= i; return Yt(t, e, r, n), e.child } function f_(t, e) { var n = e.ref; (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152) } function Bu(t, e, n, i, r) { var s = on(n) ? Sr : Wt.current; return s = ys(e, s), hs(e, r), n = Sf(t, e, n, i, s, r), i = Mf(), t !== null && !rn ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, gi(t, e, r)) : (lt && i && cf(e), e.flags |= 1, Yt(t, e, n, r), e.child) } function ip(t, e, n, i, r) { if (on(n)) { var s = !0; al(e) } else s = !1; if (hs(e, r), e.stateNode === null) Ba(t, e), a_(e, n, i), ku(e, n, i, r), i = !0; else if (t === null) { var o = e.stateNode, a = e.memoizedProps; o.props = a; var l = o.context, c = n.contextType; typeof c == "object" && c !== null ? c = Cn(c) : (c = on(n) ? Sr : Wt.current, c = ys(e, c)); var d = n.getDerivedStateFromProps, h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function"; h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== i || l !== c) && Zh(e, o, i, c), Pi = !1; var f = e.memoizedState; o.state = f, fl(e, i, o, r), l = e.memoizedState, a !== i || f !== l || sn.current || Pi ? (typeof d == "function" && (Fu(e, n, d, i), l = e.memoizedState), (a = Pi || $h(e, n, a, i, f, l, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = l), o.props = i, o.state = l, o.context = c, i = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), i = !1) } else { o = e.stateNode, Bg(t, e), a = e.memoizedProps, c = e.type === e.elementType ? a : Nn(e.type, a), o.props = c, h = e.pendingProps, f = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Cn(l) : (l = on(n) ? Sr : Wt.current, l = ys(e, l)); var g = n.getDerivedStateFromProps; (d = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || f !== l) && Zh(e, o, i, l), Pi = !1, f = e.memoizedState, o.state = f, fl(e, i, o, r); var x = e.memoizedState; a !== h || f !== x || sn.current || Pi ? (typeof g == "function" && (Fu(e, n, g, i), x = e.memoizedState), (c = Pi || $h(e, n, c, i, f, x, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, x, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(i, x, l)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = x), o.props = i, o.state = x, o.context = l, i = c) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), i = !1) } return Hu(t, e, n, i, s, r) } function Hu(t, e, n, i, r, s) { f_(t, e); var o = (e.flags & 128) !== 0; if (!i && !o) return r && Vh(e, n, !1), gi(t, e, s); i = e.stateNode, Ax.current = e; var a = o && typeof n.getDerivedStateFromError != "function" ? null : i.render(); return e.flags |= 1, t !== null && o ? (e.child = Ms(e, t.child, null, s), e.child = Ms(e, null, a, s)) : Yt(t, e, a, s), e.memoizedState = i.state, r && Vh(e, n, !0), e.child } function h_(t) { var e = t.stateNode; e.pendingContext ? Hh(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Hh(t, e.context, !1), _f(t, e.containerInfo) } function rp(t, e, n, i, r) { return Ss(), df(r), e.flags |= 256, Yt(t, e, n, i), e.child } var Vu = { dehydrated: null, treeContext: null, retryLane: 0 }; function Gu(t) { return { baseLanes: t, cachePool: null, transitions: null } } function p_(t, e, n) { var i = e.pendingProps, r = dt.current, s = !1, o = (e.flags & 128) !== 0, a; if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0), a ? (s = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (r |= 1), it(dt, r & 1), t === null) return Uu(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = i.children, t = i.fallback, s ? (i = e.mode, s = e.child, o = { mode: "hidden", children: o }, !(i & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = zl(o, i, 0, null), t = yr(t, i, n, null), s.return = e, t.return = e, s.sibling = t, e.child = s, e.child.memoizedState = Gu(n), e.memoizedState = Vu, t) : wf(e, o)); if (r = t.memoizedState, r !== null && (a = r.dehydrated, a !== null)) return Cx(t, e, o, i, a, r, n); if (s) { s = i.fallback, o = e.mode, r = t.child, a = r.sibling; var l = { mode: "hidden", children: i.children }; return !(o & 1) && e.child !== r ? (i = e.child, i.childLanes = 0, i.pendingProps = l, e.deletions = null) : (i = Xi(r, l), i.subtreeFlags = r.subtreeFlags & 14680064), a !== null ? s = Xi(a, s) : (s = yr(s, o, n, null), s.flags |= 2), s.return = e, i.return = e, i.sibling = s, e.child = i, i = s, s = e.child, o = t.child.memoizedState, o = o === null ? Gu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = t.childLanes & ~n, e.memoizedState = Vu, i } return s = t.child, t = s.sibling, i = Xi(s, { mode: "visible", children: i.children }), !(e.mode & 1) && (i.lanes = n), i.return = e, i.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = i, e.memoizedState = null, i } function wf(t, e) { return e = zl({ mode: "visible", children: e }, t.mode, 0, null), e.return = t, t.child = e } function ra(t, e, n, i) { return i !== null && df(i), Ms(e, t.child, null, n), t = wf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t } function Cx(t, e, n, i, r, s, o) { if (n) return e.flags & 256 ? (e.flags &= -257, i = Mc(Error(ne(422))), ra(t, e, o, i)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (s = i.fallback, r = e.mode, i = zl({ mode: "visible", children: i.children }, r, 0, null), s = yr(s, r, o, null), s.flags |= 2, i.return = e, s.return = e, i.sibling = s, e.child = i, e.mode & 1 && Ms(e, t.child, null, o), e.child.memoizedState = Gu(o), e.memoizedState = Vu, s); if (!(e.mode & 1)) return ra(t, e, o, null); if (r.data === "$!") { if (i = r.nextSibling && r.nextSibling.dataset, i) var a = i.dgst; return i = a, s = Error(ne(419)), i = Mc(s, i, void 0), ra(t, e, o, i) } if (a = (o & t.childLanes) !== 0, rn || a) { if (i = Pt, i !== null) { switch (o & -o) { case 4: r = 2; break; case 16: r = 8; break; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: r = 32; break; case 536870912: r = 268435456; break; default: r = 0 }r = r & (i.suspendedLanes | o) ? 0 : r, r !== 0 && r !== s.retryLane && (s.retryLane = r, mi(t, r), Hn(i, t, r, -1)) } return Lf(), i = Mc(Error(ne(421))), ra(t, e, o, i) } return r.data === "$?" ? (e.flags |= 128, e.child = t.child, e = Bx.bind(null, t), r._reactRetry = e, null) : (t = s.treeContext, hn = Hi(r.nextSibling), pn = e, lt = !0, On = null, t !== null && (Sn[Mn++] = li, Sn[Mn++] = ci, Sn[Mn++] = Mr, li = t.id, ci = t.overflow, Mr = e), e = wf(e, i.children), e.flags |= 4096, e) } function sp(t, e, n) { t.lanes |= e; var i = t.alternate; i !== null && (i.lanes |= e), Ou(t.return, e, n) } function Ec(t, e, n, i, r) { var s = t.memoizedState; s === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: i, tail: n, tailMode: r } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = n, s.tailMode = r) } function m_(t, e, n) { var i = e.pendingProps, r = i.revealOrder, s = i.tail; if (Yt(t, e, i.children, n), i = dt.current, i & 2) i = i & 1 | 2, e.flags |= 128; else { if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) { if (t.tag === 13) t.memoizedState !== null && sp(t, n, e); else if (t.tag === 19) sp(t, n, e); else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break e; for (; t.sibling === null;) { if (t.return === null || t.return === e) break e; t = t.return } t.sibling.return = t.return, t = t.sibling } i &= 1 } if (it(dt, i), !(e.mode & 1)) e.memoizedState = null; else switch (r) { case "forwards": for (n = e.child, r = null; n !== null;)t = n.alternate, t !== null && hl(t) === null && (r = n), n = n.sibling; n = r, n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Ec(e, !1, r, n, s); break; case "backwards": for (n = null, r = e.child, e.child = null; r !== null;) { if (t = r.alternate, t !== null && hl(t) === null) { e.child = r; break } t = r.sibling, r.sibling = n, n = r, r = t } Ec(e, !0, n, null, s); break; case "together": Ec(e, !1, null, null, void 0); break; default: e.memoizedState = null }return e.child } function Ba(t, e) { !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2) } function gi(t, e, n) { if (t !== null && (e.dependencies = t.dependencies), Tr |= e.lanes, !(n & e.childLanes)) return null; if (t !== null && e.child !== t.child) throw Error(ne(153)); if (e.child !== null) { for (t = e.child, n = Xi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;)t = t.sibling, n = n.sibling = Xi(t, t.pendingProps), n.return = e; n.sibling = null } return e.child } function Rx(t, e, n) { switch (e.tag) { case 3: h_(e), Ss(); break; case 5: Hg(e); break; case 1: on(e.type) && al(e); break; case 4: _f(e, e.stateNode.containerInfo); break; case 10: var i = e.type._context, r = e.memoizedProps.value; it(ul, i._currentValue), i._currentValue = r; break; case 13: if (i = e.memoizedState, i !== null) return i.dehydrated !== null ? (it(dt, dt.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? p_(t, e, n) : (it(dt, dt.current & 1), t = gi(t, e, n), t !== null ? t.sibling : null); it(dt, dt.current & 1); break; case 19: if (i = (n & e.childLanes) !== 0, t.flags & 128) { if (i) return m_(t, e, n); e.flags |= 128 } if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), it(dt, dt.current), i) break; return null; case 22: case 23: return e.lanes = 0, d_(t, e, n) }return gi(t, e, n) } var g_, Wu, __, v_; g_ = function (t, e) { for (var n = e.child; n !== null;) { if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) { n.child.return = n, n = n.child; continue } if (n === e) break; for (; n.sibling === null;) { if (n.return === null || n.return === e) return; n = n.return } n.sibling.return = n.return, n = n.sibling } }; Wu = function () { }; __ = function (t, e, n, i) { var r = t.memoizedProps; if (r !== i) { t = e.stateNode, mr(Qn.current); var s = null; switch (n) { case "input": r = fu(t, r), i = fu(t, i), s = []; break; case "select": r = ht({}, r, { value: void 0 }), i = ht({}, i, { value: void 0 }), s = []; break; case "textarea": r = mu(t, r), i = mu(t, i), s = []; break; default: typeof r.onClick != "function" && typeof i.onClick == "function" && (t.onclick = sl) }_u(n, i); var o; n = null; for (c in r) if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null) if (c === "style") { var a = r[c]; for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "") } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (go.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null)); for (c in i) { var l = i[c]; if (a = r != null ? r[c] : void 0, i.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) { for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = ""); for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o]) } else n || (s || (s = []), s.push(c, n)), n = l; else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (go.hasOwnProperty(c) ? (l != null && c === "onScroll" && st("scroll", t), s || a === l || (s = [])) : (s = s || []).push(c, l)) } n && (s = s || []).push("style", n); var c = s; (e.updateQueue = c) && (e.flags |= 4) } }; v_ = function (t, e, n, i) { n !== i && (e.flags |= 4) }; function Ws(t, e) { if (!lt) switch (t.tailMode) { case "hidden": e = t.tail; for (var n = null; e !== null;)e.alternate !== null && (n = e), e = e.sibling; n === null ? t.tail = null : n.sibling = null; break; case "collapsed": n = t.tail; for (var i = null; n !== null;)n.alternate !== null && (i = n), n = n.sibling; i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null } } function kt(t) { var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0; if (e) for (var r = t.child; r !== null;)n |= r.lanes | r.childLanes, i |= r.subtreeFlags & 14680064, i |= r.flags & 14680064, r.return = t, r = r.sibling; else for (r = t.child; r !== null;)n |= r.lanes | r.childLanes, i |= r.subtreeFlags, i |= r.flags, r.return = t, r = r.sibling; return t.subtreeFlags |= i, t.childLanes = n, e } function Px(t, e, n) { var i = e.pendingProps; switch (uf(e), e.tag) { case 2: case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return kt(e), null; case 1: return on(e.type) && ol(), kt(e), null; case 3: return i = e.stateNode, Es(), at(sn), at(Wt), xf(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (na(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, On !== null && (Qu(On), On = null))), Wu(t, e), kt(e), null; case 5: vf(e); var r = mr(Ro.current); if (n = e.type, t !== null && e.stateNode != null) __(t, e, n, i, r), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152); else { if (!i) { if (e.stateNode === null) throw Error(ne(166)); return kt(e), null } if (t = mr(Qn.current), na(e)) { i = e.stateNode, n = e.type; var s = e.memoizedProps; switch (i[Kn] = e, i[Ao] = s, t = (e.mode & 1) !== 0, n) { case "dialog": st("cancel", i), st("close", i); break; case "iframe": case "object": case "embed": st("load", i); break; case "video": case "audio": for (r = 0; r < to.length; r++)st(to[r], i); break; case "source": st("error", i); break; case "img": case "image": case "link": st("error", i), st("load", i); break; case "details": st("toggle", i); break; case "input": ph(i, s), st("invalid", i); break; case "select": i._wrapperState = { wasMultiple: !!s.multiple }, st("invalid", i); break; case "textarea": gh(i, s), st("invalid", i) }_u(n, s), r = null; for (var o in s) if (s.hasOwnProperty(o)) { var a = s[o]; o === "children" ? typeof a == "string" ? i.textContent !== a && (s.suppressHydrationWarning !== !0 && ta(i.textContent, a, t), r = ["children", a]) : typeof a == "number" && i.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ta(i.textContent, a, t), r = ["children", "" + a]) : go.hasOwnProperty(o) && a != null && o === "onScroll" && st("scroll", i) } switch (n) { case "input": Yo(i), mh(i, s, !0); break; case "textarea": Yo(i), _h(i); break; case "select": case "option": break; default: typeof s.onClick == "function" && (i.onclick = sl) }i = r, e.updateQueue = i, i !== null && (e.flags |= 4) } else { o = r.nodeType === 9 ? r : r.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = jm(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof i.is == "string" ? t = o.createElement(n, { is: i.is }) : (t = o.createElement(n), n === "select" && (o = t, i.multiple ? o.multiple = !0 : i.size && (o.size = i.size))) : t = o.createElementNS(t, n), t[Kn] = e, t[Ao] = i, g_(t, e, !1, !1), e.stateNode = t; e: { switch (o = vu(n, i), n) { case "dialog": st("cancel", t), st("close", t), r = i; break; case "iframe": case "object": case "embed": st("load", t), r = i; break; case "video": case "audio": for (r = 0; r < to.length; r++)st(to[r], t); r = i; break; case "source": st("error", t), r = i; break; case "img": case "image": case "link": st("error", t), st("load", t), r = i; break; case "details": st("toggle", t), r = i; break; case "input": ph(t, i), r = fu(t, i), st("invalid", t); break; case "option": r = i; break; case "select": t._wrapperState = { wasMultiple: !!i.multiple }, r = ht({}, i, { value: void 0 }), st("invalid", t); break; case "textarea": gh(t, i), r = mu(t, i), st("invalid", t); break; default: r = i }_u(n, r), a = r; for (s in a) if (a.hasOwnProperty(s)) { var l = a[s]; s === "style" ? Km(t, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ym(t, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && _o(t, l) : typeof l == "number" && _o(t, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (go.hasOwnProperty(s) ? l != null && s === "onScroll" && st("scroll", t) : l != null && qd(t, s, l, o)) } switch (n) { case "input": Yo(t), mh(t, i, !1); break; case "textarea": Yo(t), _h(t); break; case "option": i.value != null && t.setAttribute("value", "" + qi(i.value)); break; case "select": t.multiple = !!i.multiple, s = i.value, s != null ? cs(t, !!i.multiple, s, !1) : i.defaultValue != null && cs(t, !!i.multiple, i.defaultValue, !0); break; default: typeof r.onClick == "function" && (t.onclick = sl) }switch (n) { case "button": case "input": case "select": case "textarea": i = !!i.autoFocus; break e; case "img": i = !0; break e; default: i = !1 } } i && (e.flags |= 4) } e.ref !== null && (e.flags |= 512, e.flags |= 2097152) } return kt(e), null; case 6: if (t && e.stateNode != null) v_(t, e, t.memoizedProps, i); else { if (typeof i != "string" && e.stateNode === null) throw Error(ne(166)); if (n = mr(Ro.current), mr(Qn.current), na(e)) { if (i = e.stateNode, n = e.memoizedProps, i[Kn] = e, (s = i.nodeValue !== n) && (t = pn, t !== null)) switch (t.tag) { case 3: ta(i.nodeValue, n, (t.mode & 1) !== 0); break; case 5: t.memoizedProps.suppressHydrationWarning !== !0 && ta(i.nodeValue, n, (t.mode & 1) !== 0) }s && (e.flags |= 4) } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[Kn] = e, e.stateNode = i } return kt(e), null; case 13: if (at(dt), i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) { if (lt && hn !== null && e.mode & 1 && !(e.flags & 128)) Og(), Ss(), e.flags |= 98560, s = !1; else if (s = na(e), i !== null && i.dehydrated !== null) { if (t === null) { if (!s) throw Error(ne(318)); if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(ne(317)); s[Kn] = e } else Ss(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4; kt(e), s = !1 } else On !== null && (Qu(On), On = null), s = !0; if (!s) return e.flags & 65536 ? e : null } return e.flags & 128 ? (e.lanes = n, e) : (i = i !== null, i !== (t !== null && t.memoizedState !== null) && i && (e.child.flags |= 8192, e.mode & 1 && (t === null || dt.current & 1 ? Tt === 0 && (Tt = 3) : Lf())), e.updateQueue !== null && (e.flags |= 4), kt(e), null); case 4: return Es(), Wu(t, e), t === null && To(e.stateNode.containerInfo), kt(e), null; case 10: return pf(e.type._context), kt(e), null; case 17: return on(e.type) && ol(), kt(e), null; case 19: if (at(dt), s = e.memoizedState, s === null) return kt(e), null; if (i = (e.flags & 128) !== 0, o = s.rendering, o === null) if (i) Ws(s, !1); else { if (Tt !== 0 || t !== null && t.flags & 128) for (t = e.child; t !== null;) { if (o = hl(t), o !== null) { for (e.flags |= 128, Ws(s, !1), i = o.updateQueue, i !== null && (e.updateQueue = i, e.flags |= 4), e.subtreeFlags = 0, i = n, n = e.child; n !== null;)s = n, t = i, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = t, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, t = o.dependencies, s.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), n = n.sibling; return it(dt, dt.current & 1 | 2), e.child } t = t.sibling } s.tail !== null && vt() > ws && (e.flags |= 128, i = !0, Ws(s, !1), e.lanes = 4194304) } else { if (!i) if (t = hl(o), t !== null) { if (e.flags |= 128, i = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Ws(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !lt) return kt(e), null } else 2 * vt() - s.renderingStartTime > ws && n !== 1073741824 && (e.flags |= 128, i = !0, Ws(s, !1), e.lanes = 4194304); s.isBackwards ? (o.sibling = e.child, e.child = o) : (n = s.last, n !== null ? n.sibling = o : e.child = o, s.last = o) } return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = vt(), e.sibling = null, n = dt.current, it(dt, i ? n & 1 | 2 : n & 1), e) : (kt(e), null); case 22: case 23: return bf(), i = e.memoizedState !== null, t !== null && t.memoizedState !== null !== i && (e.flags |= 8192), i && e.mode & 1 ? fn & 1073741824 && (kt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e), null; case 24: return null; case 25: return null }throw Error(ne(156, e.tag)) } function bx(t, e) { switch (uf(e), e.tag) { case 1: return on(e.type) && ol(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null; case 3: return Es(), at(sn), at(Wt), xf(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null; case 5: return vf(e), null; case 13: if (at(dt), t = e.memoizedState, t !== null && t.dehydrated !== null) { if (e.alternate === null) throw Error(ne(340)); Ss() } return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null; case 19: return at(dt), null; case 4: return Es(), null; case 10: return pf(e.type._context), null; case 22: case 23: return bf(), null; case 24: return null; default: return null } } var sa = !1, Vt = !1, Lx = typeof WeakSet == "function" ? WeakSet : Set, xe = null; function ss(t, e) { var n = t.ref; if (n !== null) if (typeof n == "function") try { n(null) } catch (i) { mt(t, e, i) } else n.current = null } function Xu(t, e, n) { try { n() } catch (i) { mt(t, e, i) } } var op = !1; function Dx(t, e) { if (Ru = nl, t = Eg(), lf(t)) { if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd }; else e: { n = (n = t.ownerDocument) && n.defaultView || window; var i = n.getSelection && n.getSelection(); if (i && i.rangeCount !== 0) { n = i.anchorNode; var r = i.anchorOffset, s = i.focusNode; i = i.focusOffset; try { n.nodeType, s.nodeType } catch { n = null; break e } var o = 0, a = -1, l = -1, c = 0, d = 0, h = t, f = null; t: for (; ;) { for (var g; h !== n || r !== 0 && h.nodeType !== 3 || (a = o + r), h !== s || i !== 0 && h.nodeType !== 3 || (l = o + i), h.nodeType === 3 && (o += h.nodeValue.length), (g = h.firstChild) !== null;)f = h, h = g; for (; ;) { if (h === t) break t; if (f === n && ++c === r && (a = o), f === s && ++d === i && (l = o), (g = h.nextSibling) !== null) break; h = f, f = h.parentNode } h = g } n = a === -1 || l === -1 ? null : { start: a, end: l } } else n = null } n = n || { start: 0, end: 0 } } else n = null; for (Pu = { focusedElem: t, selectionRange: n }, nl = !1, xe = e; xe !== null;)if (e = xe, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, xe = t; else for (; xe !== null;) { e = xe; try { var x = e.alternate; if (e.flags & 1024) switch (e.tag) { case 0: case 11: case 15: break; case 1: if (x !== null) { var y = x.memoizedProps, p = x.memoizedState, u = e.stateNode, m = u.getSnapshotBeforeUpdate(e.elementType === e.type ? y : Nn(e.type, y), p); u.__reactInternalSnapshotBeforeUpdate = m } break; case 3: var _ = e.stateNode.containerInfo; _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement); break; case 5: case 6: case 4: case 17: break; default: throw Error(ne(163)) } } catch (S) { mt(e, e.return, S) } if (t = e.sibling, t !== null) { t.return = e.return, xe = t; break } xe = e.return } return x = op, op = !1, x } function co(t, e, n) { var i = e.updateQueue; if (i = i !== null ? i.lastEffect : null, i !== null) { var r = i = i.next; do { if ((r.tag & t) === t) { var s = r.destroy; r.destroy = void 0, s !== void 0 && Xu(e, n, s) } r = r.next } while (r !== i) } } function Fl(t, e) { if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) { var n = e = e.next; do { if ((n.tag & t) === t) { var i = n.create; n.destroy = i() } n = n.next } while (n !== e) } } function ju(t) { var e = t.ref; if (e !== null) { var n = t.stateNode; switch (t.tag) { case 5: t = n; break; default: t = n }typeof e == "function" ? e(t) : e.current = t } } function x_(t) { var e = t.alternate; e !== null && (t.alternate = null, x_(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Kn], delete e[Ao], delete e[Du], delete e[px], delete e[mx])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null } function y_(t) { return t.tag === 5 || t.tag === 3 || t.tag === 4 } function ap(t) { e: for (; ;) { for (; t.sibling === null;) { if (t.return === null || y_(t.return)) return null; t = t.return } for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) { if (t.flags & 2 || t.child === null || t.tag === 4) continue e; t.child.return = t, t = t.child } if (!(t.flags & 2)) return t.stateNode } } function Yu(t, e, n) { var i = t.tag; if (i === 5 || i === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = sl)); else if (i !== 4 && (t = t.child, t !== null)) for (Yu(t, e, n), t = t.sibling; t !== null;)Yu(t, e, n), t = t.sibling } function qu(t, e, n) { var i = t.tag; if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t); else if (i !== 4 && (t = t.child, t !== null)) for (qu(t, e, n), t = t.sibling; t !== null;)qu(t, e, n), t = t.sibling } var Dt = null, Un = !1; function Si(t, e, n) { for (n = n.child; n !== null;)S_(t, e, n), n = n.sibling } function S_(t, e, n) { if (Zn && typeof Zn.onCommitFiberUnmount == "function") try { Zn.onCommitFiberUnmount(Pl, n) } catch { } switch (n.tag) { case 5: Vt || ss(n, e); case 6: var i = Dt, r = Un; Dt = null, Si(t, e, n), Dt = i, Un = r, Dt !== null && (Un ? (t = Dt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Dt.removeChild(n.stateNode)); break; case 18: Dt !== null && (Un ? (t = Dt, n = n.stateNode, t.nodeType === 8 ? gc(t.parentNode, n) : t.nodeType === 1 && gc(t, n), So(t)) : gc(Dt, n.stateNode)); break; case 4: i = Dt, r = Un, Dt = n.stateNode.containerInfo, Un = !0, Si(t, e, n), Dt = i, Un = r; break; case 0: case 11: case 14: case 15: if (!Vt && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) { r = i = i.next; do { var s = r, o = s.destroy; s = s.tag, o !== void 0 && (s & 2 || s & 4) && Xu(n, e, o), r = r.next } while (r !== i) } Si(t, e, n); break; case 1: if (!Vt && (ss(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function")) try { i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount() } catch (a) { mt(n, e, a) } Si(t, e, n); break; case 21: Si(t, e, n); break; case 22: n.mode & 1 ? (Vt = (i = Vt) || n.memoizedState !== null, Si(t, e, n), Vt = i) : Si(t, e, n); break; default: Si(t, e, n) } } function lp(t) { var e = t.updateQueue; if (e !== null) { t.updateQueue = null; var n = t.stateNode; n === null && (n = t.stateNode = new Lx), e.forEach(function (i) { var r = Hx.bind(null, t, i); n.has(i) || (n.add(i), i.then(r, r)) }) } } function bn(t, e) { var n = e.deletions; if (n !== null) for (var i = 0; i < n.length; i++) { var r = n[i]; try { var s = t, o = e, a = o; e: for (; a !== null;) { switch (a.tag) { case 5: Dt = a.stateNode, Un = !1; break e; case 3: Dt = a.stateNode.containerInfo, Un = !0; break e; case 4: Dt = a.stateNode.containerInfo, Un = !0; break e }a = a.return } if (Dt === null) throw Error(ne(160)); S_(s, o, r), Dt = null, Un = !1; var l = r.alternate; l !== null && (l.return = null), r.return = null } catch (c) { mt(r, e, c) } } if (e.subtreeFlags & 12854) for (e = e.child; e !== null;)M_(e, t), e = e.sibling } function M_(t, e) { var n = t.alternate, i = t.flags; switch (t.tag) { case 0: case 11: case 14: case 15: if (bn(e, t), Xn(t), i & 4) { try { co(3, t, t.return), Fl(3, t) } catch (y) { mt(t, t.return, y) } try { co(5, t, t.return) } catch (y) { mt(t, t.return, y) } } break; case 1: bn(e, t), Xn(t), i & 512 && n !== null && ss(n, n.return); break; case 5: if (bn(e, t), Xn(t), i & 512 && n !== null && ss(n, n.return), t.flags & 32) { var r = t.stateNode; try { _o(r, "") } catch (y) { mt(t, t.return, y) } } if (i & 4 && (r = t.stateNode, r != null)) { var s = t.memoizedProps, o = n !== null ? n.memoizedProps : s, a = t.type, l = t.updateQueue; if (t.updateQueue = null, l !== null) try { a === "input" && s.type === "radio" && s.name != null && Wm(r, s), vu(a, o); var c = vu(a, s); for (o = 0; o < l.length; o += 2) { var d = l[o], h = l[o + 1]; d === "style" ? Km(r, h) : d === "dangerouslySetInnerHTML" ? Ym(r, h) : d === "children" ? _o(r, h) : qd(r, d, h, c) } switch (a) { case "input": hu(r, s); break; case "textarea": Xm(r, s); break; case "select": var f = r._wrapperState.wasMultiple; r._wrapperState.wasMultiple = !!s.multiple; var g = s.value; g != null ? cs(r, !!s.multiple, g, !1) : f !== !!s.multiple && (s.defaultValue != null ? cs(r, !!s.multiple, s.defaultValue, !0) : cs(r, !!s.multiple, s.multiple ? [] : "", !1)) }r[Ao] = s } catch (y) { mt(t, t.return, y) } } break; case 6: if (bn(e, t), Xn(t), i & 4) { if (t.stateNode === null) throw Error(ne(162)); r = t.stateNode, s = t.memoizedProps; try { r.nodeValue = s } catch (y) { mt(t, t.return, y) } } break; case 3: if (bn(e, t), Xn(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try { So(e.containerInfo) } catch (y) { mt(t, t.return, y) } break; case 4: bn(e, t), Xn(t); break; case 13: bn(e, t), Xn(t), r = t.child, r.flags & 8192 && (s = r.memoizedState !== null, r.stateNode.isHidden = s, !s || r.alternate !== null && r.alternate.memoizedState !== null || (Rf = vt())), i & 4 && lp(t); break; case 22: if (d = n !== null && n.memoizedState !== null, t.mode & 1 ? (Vt = (c = Vt) || d, bn(e, t), Vt = c) : bn(e, t), Xn(t), i & 8192) { if (c = t.memoizedState !== null, (t.stateNode.isHidden = c) && !d && t.mode & 1) for (xe = t, d = t.child; d !== null;) { for (h = xe = d; xe !== null;) { switch (f = xe, g = f.child, f.tag) { case 0: case 11: case 14: case 15: co(4, f, f.return); break; case 1: ss(f, f.return); var x = f.stateNode; if (typeof x.componentWillUnmount == "function") { i = f, n = f.return; try { e = i, x.props = e.memoizedProps, x.state = e.memoizedState, x.componentWillUnmount() } catch (y) { mt(i, n, y) } } break; case 5: ss(f, f.return); break; case 22: if (f.memoizedState !== null) { up(h); continue } }g !== null ? (g.return = f, xe = g) : up(h) } d = d.sibling } e: for (d = null, h = t; ;) { if (h.tag === 5) { if (d === null) { d = h; try { r = h.stateNode, c ? (s = r.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = h.stateNode, l = h.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = qm("display", o)) } catch (y) { mt(t, t.return, y) } } } else if (h.tag === 6) { if (d === null) try { h.stateNode.nodeValue = c ? "" : h.memoizedProps } catch (y) { mt(t, t.return, y) } } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === t) && h.child !== null) { h.child.return = h, h = h.child; continue } if (h === t) break e; for (; h.sibling === null;) { if (h.return === null || h.return === t) break e; d === h && (d = null), h = h.return } d === h && (d = null), h.sibling.return = h.return, h = h.sibling } } break; case 19: bn(e, t), Xn(t), i & 4 && lp(t); break; case 21: break; default: bn(e, t), Xn(t) } } function Xn(t) { var e = t.flags; if (e & 2) { try { e: { for (var n = t.return; n !== null;) { if (y_(n)) { var i = n; break e } n = n.return } throw Error(ne(160)) } switch (i.tag) { case 5: var r = i.stateNode; i.flags & 32 && (_o(r, ""), i.flags &= -33); var s = ap(t); qu(t, s, r); break; case 3: case 4: var o = i.stateNode.containerInfo, a = ap(t); Yu(t, a, o); break; default: throw Error(ne(161)) } } catch (l) { mt(t, t.return, l) } t.flags &= -3 } e & 4096 && (t.flags &= -4097) } function Ix(t, e, n) { xe = t, E_(t) } function E_(t, e, n) { for (var i = (t.mode & 1) !== 0; xe !== null;) { var r = xe, s = r.child; if (r.tag === 22 && i) { var o = r.memoizedState !== null || sa; if (!o) { var a = r.alternate, l = a !== null && a.memoizedState !== null || Vt; a = sa; var c = Vt; if (sa = o, (Vt = l) && !c) for (xe = r; xe !== null;)o = xe, l = o.child, o.tag === 22 && o.memoizedState !== null ? dp(r) : l !== null ? (l.return = o, xe = l) : dp(r); for (; s !== null;)xe = s, E_(s), s = s.sibling; xe = r, sa = a, Vt = c } cp(t) } else r.subtreeFlags & 8772 && s !== null ? (s.return = r, xe = s) : cp(t) } } function cp(t) { for (; xe !== null;) { var e = xe; if (e.flags & 8772) { var n = e.alternate; try { if (e.flags & 8772) switch (e.tag) { case 0: case 11: case 15: Vt || Fl(5, e); break; case 1: var i = e.stateNode; if (e.flags & 4 && !Vt) if (n === null) i.componentDidMount(); else { var r = e.elementType === e.type ? n.memoizedProps : Nn(e.type, n.memoizedProps); i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate) } var s = e.updateQueue; s !== null && Yh(e, s, i); break; case 3: var o = e.updateQueue; if (o !== null) { if (n = null, e.child !== null) switch (e.child.tag) { case 5: n = e.child.stateNode; break; case 1: n = e.child.stateNode }Yh(e, o, n) } break; case 5: var a = e.stateNode; if (n === null && e.flags & 4) { n = a; var l = e.memoizedProps; switch (e.type) { case "button": case "input": case "select": case "textarea": l.autoFocus && n.focus(); break; case "img": l.src && (n.src = l.src) } } break; case 6: break; case 4: break; case 12: break; case 13: if (e.memoizedState === null) { var c = e.alternate; if (c !== null) { var d = c.memoizedState; if (d !== null) { var h = d.dehydrated; h !== null && So(h) } } } break; case 19: case 17: case 21: case 22: case 23: case 25: break; default: throw Error(ne(163)) }Vt || e.flags & 512 && ju(e) } catch (f) { mt(e, e.return, f) } } if (e === t) { xe = null; break } if (n = e.sibling, n !== null) { n.return = e.return, xe = n; break } xe = e.return } } function up(t) { for (; xe !== null;) { var e = xe; if (e === t) { xe = null; break } var n = e.sibling; if (n !== null) { n.return = e.return, xe = n; break } xe = e.return } } function dp(t) { for (; xe !== null;) { var e = xe; try { switch (e.tag) { case 0: case 11: case 15: var n = e.return; try { Fl(4, e) } catch (l) { mt(e, n, l) } break; case 1: var i = e.stateNode; if (typeof i.componentDidMount == "function") { var r = e.return; try { i.componentDidMount() } catch (l) { mt(e, r, l) } } var s = e.return; try { ju(e) } catch (l) { mt(e, s, l) } break; case 5: var o = e.return; try { ju(e) } catch (l) { mt(e, o, l) } } } catch (l) { mt(e, e.return, l) } if (e === t) { xe = null; break } var a = e.sibling; if (a !== null) { a.return = e.return, xe = a; break } xe = e.return } } var Nx = Math.ceil, gl = xi.ReactCurrentDispatcher, Af = xi.ReactCurrentOwner, An = xi.ReactCurrentBatchConfig, qe = 0, Pt = null, St = null, It = 0, fn = 0, os = Qi(0), Tt = 0, Do = null, Tr = 0, kl = 0, Cf = 0, uo = null, nn = null, Rf = 0, ws = 1 / 0, oi = null, _l = !1, Ku = null, Gi = null, oa = !1, Fi = null, vl = 0, fo = 0, $u = null, Ha = -1, Va = 0; function qt() { return qe & 6 ? vt() : Ha !== -1 ? Ha : Ha = vt() } function Wi(t) { return t.mode & 1 ? qe & 2 && It !== 0 ? It & -It : _x.transition !== null ? (Va === 0 && (Va = ag()), Va) : (t = et, t !== 0 || (t = window.event, t = t === void 0 ? 16 : pg(t.type)), t) : 1 } function Hn(t, e, n, i) { if (50 < fo) throw fo = 0, $u = null, Error(ne(185)); Oo(t, n, i), (!(qe & 2) || t !== Pt) && (t === Pt && (!(qe & 2) && (kl |= n), Tt === 4 && Ni(t, It)), an(t, i), n === 1 && qe === 0 && !(e.mode & 1) && (ws = vt() + 500, Nl && Ji())) } function an(t, e) { var n = t.callbackNode; _0(t, e); var i = tl(t, t === Pt ? It : 0); if (i === 0) n !== null && yh(n), t.callbackNode = null, t.callbackPriority = 0; else if (e = i & -i, t.callbackPriority !== e) { if (n != null && yh(n), e === 1) t.tag === 0 ? gx(fp.bind(null, t)) : Ig(fp.bind(null, t)), fx(function () { !(qe & 6) && Ji() }), n = null; else { switch (lg(i)) { case 1: n = Jd; break; case 4: n = sg; break; case 16: n = el; break; case 536870912: n = og; break; default: n = el }n = L_(n, T_.bind(null, t)) } t.callbackPriority = e, t.callbackNode = n } } function T_(t, e) { if (Ha = -1, Va = 0, qe & 6) throw Error(ne(327)); var n = t.callbackNode; if (ps() && t.callbackNode !== n) return null; var i = tl(t, t === Pt ? It : 0); if (i === 0) return null; if (i & 30 || i & t.expiredLanes || e) e = xl(t, i); else { e = i; var r = qe; qe |= 2; var s = A_(); (Pt !== t || It !== e) && (oi = null, ws = vt() + 500, xr(t, e)); do try { Fx(); break } catch (a) { w_(t, a) } while (!0); hf(), gl.current = s, qe = r, St !== null ? e = 0 : (Pt = null, It = 0, e = Tt) } if (e !== 0) { if (e === 2 && (r = Eu(t), r !== 0 && (i = r, e = Zu(t, r))), e === 1) throw n = Do, xr(t, 0), Ni(t, i), an(t, vt()), n; if (e === 6) Ni(t, i); else { if (r = t.current.alternate, !(i & 30) && !Ux(r) && (e = xl(t, i), e === 2 && (s = Eu(t), s !== 0 && (i = s, e = Zu(t, s))), e === 1)) throw n = Do, xr(t, 0), Ni(t, i), an(t, vt()), n; switch (t.finishedWork = r, t.finishedLanes = i, e) { case 0: case 1: throw Error(ne(345)); case 2: cr(t, nn, oi); break; case 3: if (Ni(t, i), (i & 130023424) === i && (e = Rf + 500 - vt(), 10 < e)) { if (tl(t, 0) !== 0) break; if (r = t.suspendedLanes, (r & i) !== i) { qt(), t.pingedLanes |= t.suspendedLanes & r; break } t.timeoutHandle = Lu(cr.bind(null, t, nn, oi), e); break } cr(t, nn, oi); break; case 4: if (Ni(t, i), (i & 4194240) === i) break; for (e = t.eventTimes, r = -1; 0 < i;) { var o = 31 - Bn(i); s = 1 << o, o = e[o], o > r && (r = o), i &= ~s } if (i = r, i = vt() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Nx(i / 1960)) - i, 10 < i) { t.timeoutHandle = Lu(cr.bind(null, t, nn, oi), i); break } cr(t, nn, oi); break; case 5: cr(t, nn, oi); break; default: throw Error(ne(329)) } } } return an(t, vt()), t.callbackNode === n ? T_.bind(null, t) : null } function Zu(t, e) { var n = uo; return t.current.memoizedState.isDehydrated && (xr(t, e).flags |= 256), t = xl(t, e), t !== 2 && (e = nn, nn = n, e !== null && Qu(e)), t } function Qu(t) { nn === null ? nn = t : nn.push.apply(nn, t) } function Ux(t) { for (var e = t; ;) { if (e.flags & 16384) { var n = e.updateQueue; if (n !== null && (n = n.stores, n !== null)) for (var i = 0; i < n.length; i++) { var r = n[i], s = r.getSnapshot; r = r.value; try { if (!Gn(s(), r)) return !1 } catch { return !1 } } } if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n; else { if (e === t) break; for (; e.sibling === null;) { if (e.return === null || e.return === t) return !0; e = e.return } e.sibling.return = e.return, e = e.sibling } } return !0 } function Ni(t, e) { for (e &= ~Cf, e &= ~kl, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) { var n = 31 - Bn(e), i = 1 << n; t[n] = -1, e &= ~i } } function fp(t) { if (qe & 6) throw Error(ne(327)); ps(); var e = tl(t, 0); if (!(e & 1)) return an(t, vt()), null; var n = xl(t, e); if (t.tag !== 0 && n === 2) { var i = Eu(t); i !== 0 && (e = i, n = Zu(t, i)) } if (n === 1) throw n = Do, xr(t, 0), Ni(t, e), an(t, vt()), n; if (n === 6) throw Error(ne(345)); return t.finishedWork = t.current.alternate, t.finishedLanes = e, cr(t, nn, oi), an(t, vt()), null } function Pf(t, e) { var n = qe; qe |= 1; try { return t(e) } finally { qe = n, qe === 0 && (ws = vt() + 500, Nl && Ji()) } } function wr(t) { Fi !== null && Fi.tag === 0 && !(qe & 6) && ps(); var e = qe; qe |= 1; var n = An.transition, i = et; try { if (An.transition = null, et = 1, t) return t() } finally { et = i, An.transition = n, qe = e, !(qe & 6) && Ji() } } function bf() { fn = os.current, at(os) } function xr(t, e) { t.finishedWork = null, t.finishedLanes = 0; var n = t.timeoutHandle; if (n !== -1 && (t.timeoutHandle = -1, dx(n)), St !== null) for (n = St.return; n !== null;) { var i = n; switch (uf(i), i.tag) { case 1: i = i.type.childContextTypes, i != null && ol(); break; case 3: Es(), at(sn), at(Wt), xf(); break; case 5: vf(i); break; case 4: Es(); break; case 13: at(dt); break; case 19: at(dt); break; case 10: pf(i.type._context); break; case 22: case 23: bf() }n = n.return } if (Pt = t, St = t = Xi(t.current, null), It = fn = e, Tt = 0, Do = null, Cf = kl = Tr = 0, nn = uo = null, pr !== null) { for (e = 0; e < pr.length; e++)if (n = pr[e], i = n.interleaved, i !== null) { n.interleaved = null; var r = i.next, s = n.pending; if (s !== null) { var o = s.next; s.next = r, i.next = o } n.pending = i } pr = null } return t } function w_(t, e) { do { var n = St; try { if (hf(), ka.current = ml, pl) { for (var i = ft.memoizedState; i !== null;) { var r = i.queue; r !== null && (r.pending = null), i = i.next } pl = !1 } if (Er = 0, Rt = Et = ft = null, lo = !1, Po = 0, Af.current = null, n === null || n.return === null) { Tt = 1, Do = e, St = null; break } e: { var s = t, o = n.return, a = n, l = e; if (e = It, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") { var c = l, d = a, h = d.tag; if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) { var f = d.alternate; f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null) } var g = Jh(o); if (g !== null) { g.flags &= -257, ep(g, o, a, s, e), g.mode & 1 && Qh(s, c, e), e = g, l = c; var x = e.updateQueue; if (x === null) { var y = new Set; y.add(l), e.updateQueue = y } else x.add(l); break e } else { if (!(e & 1)) { Qh(s, c, e), Lf(); break e } l = Error(ne(426)) } } else if (lt && a.mode & 1) { var p = Jh(o); if (p !== null) { !(p.flags & 65536) && (p.flags |= 256), ep(p, o, a, s, e), df(Ts(l, a)); break e } } s = l = Ts(l, a), Tt !== 4 && (Tt = 2), uo === null ? uo = [s] : uo.push(s), s = o; do { switch (s.tag) { case 3: s.flags |= 65536, e &= -e, s.lanes |= e; var u = l_(s, l, e); jh(s, u); break e; case 1: a = l; var m = s.type, _ = s.stateNode; if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (Gi === null || !Gi.has(_)))) { s.flags |= 65536, e &= -e, s.lanes |= e; var S = c_(s, a, e); jh(s, S); break e } }s = s.return } while (s !== null) } R_(n) } catch (R) { e = R, St === n && n !== null && (St = n = n.return); continue } break } while (!0) } function A_() { var t = gl.current; return gl.current = ml, t === null ? ml : t } function Lf() { (Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4), Pt === null || !(Tr & 268435455) && !(kl & 268435455) || Ni(Pt, It) } function xl(t, e) { var n = qe; qe |= 2; var i = A_(); (Pt !== t || It !== e) && (oi = null, xr(t, e)); do try { Ox(); break } catch (r) { w_(t, r) } while (!0); if (hf(), qe = n, gl.current = i, St !== null) throw Error(ne(261)); return Pt = null, It = 0, Tt } function Ox() { for (; St !== null;)C_(St) } function Fx() { for (; St !== null && !l0();)C_(St) } function C_(t) { var e = b_(t.alternate, t, fn); t.memoizedProps = t.pendingProps, e === null ? R_(t) : St = e, Af.current = null } function R_(t) { var e = t; do { var n = e.alternate; if (t = e.return, e.flags & 32768) { if (n = bx(n, e), n !== null) { n.flags &= 32767, St = n; return } if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null; else { Tt = 6, St = null; return } } else if (n = Px(n, e, fn), n !== null) { St = n; return } if (e = e.sibling, e !== null) { St = e; return } St = e = t } while (e !== null); Tt === 0 && (Tt = 5) } function cr(t, e, n) { var i = et, r = An.transition; try { An.transition = null, et = 1, kx(t, e, n, i) } finally { An.transition = r, et = i } return null } function kx(t, e, n, i) { do ps(); while (Fi !== null); if (qe & 6) throw Error(ne(327)); n = t.finishedWork; var r = t.finishedLanes; if (n === null) return null; if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(ne(177)); t.callbackNode = null, t.callbackPriority = 0; var s = n.lanes | n.childLanes; if (v0(t, s), t === Pt && (St = Pt = null, It = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oa || (oa = !0, L_(el, function () { return ps(), null })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) { s = An.transition, An.transition = null; var o = et; et = 1; var a = qe; qe |= 4, Af.current = null, Dx(t, n), M_(n, t), rx(Pu), nl = !!Ru, Pu = Ru = null, t.current = n, Ix(n), c0(), qe = a, et = o, An.transition = s } else t.current = n; if (oa && (oa = !1, Fi = t, vl = r), s = t.pendingLanes, s === 0 && (Gi = null), f0(n.stateNode), an(t, vt()), e !== null) for (i = t.onRecoverableError, n = 0; n < e.length; n++)r = e[n], i(r.value, { componentStack: r.stack, digest: r.digest }); if (_l) throw _l = !1, t = Ku, Ku = null, t; return vl & 1 && t.tag !== 0 && ps(), s = t.pendingLanes, s & 1 ? t === $u ? fo++ : (fo = 0, $u = t) : fo = 0, Ji(), null } function ps() { if (Fi !== null) { var t = lg(vl), e = An.transition, n = et; try { if (An.transition = null, et = 16 > t ? 16 : t, Fi === null) var i = !1; else { if (t = Fi, Fi = null, vl = 0, qe & 6) throw Error(ne(331)); var r = qe; for (qe |= 4, xe = t.current; xe !== null;) { var s = xe, o = s.child; if (xe.flags & 16) { var a = s.deletions; if (a !== null) { for (var l = 0; l < a.length; l++) { var c = a[l]; for (xe = c; xe !== null;) { var d = xe; switch (d.tag) { case 0: case 11: case 15: co(8, d, s) }var h = d.child; if (h !== null) h.return = d, xe = h; else for (; xe !== null;) { d = xe; var f = d.sibling, g = d.return; if (x_(d), d === c) { xe = null; break } if (f !== null) { f.return = g, xe = f; break } xe = g } } } var x = s.alternate; if (x !== null) { var y = x.child; if (y !== null) { x.child = null; do { var p = y.sibling; y.sibling = null, y = p } while (y !== null) } } xe = s } } if (s.subtreeFlags & 2064 && o !== null) o.return = s, xe = o; else e: for (; xe !== null;) { if (s = xe, s.flags & 2048) switch (s.tag) { case 0: case 11: case 15: co(9, s, s.return) }var u = s.sibling; if (u !== null) { u.return = s.return, xe = u; break e } xe = s.return } } var m = t.current; for (xe = m; xe !== null;) { o = xe; var _ = o.child; if (o.subtreeFlags & 2064 && _ !== null) _.return = o, xe = _; else e: for (o = m; xe !== null;) { if (a = xe, a.flags & 2048) try { switch (a.tag) { case 0: case 11: case 15: Fl(9, a) } } catch (R) { mt(a, a.return, R) } if (a === o) { xe = null; break e } var S = a.sibling; if (S !== null) { S.return = a.return, xe = S; break e } xe = a.return } } if (qe = r, Ji(), Zn && typeof Zn.onPostCommitFiberRoot == "function") try { Zn.onPostCommitFiberRoot(Pl, t) } catch { } i = !0 } return i } finally { et = n, An.transition = e } } return !1 } function hp(t, e, n) { e = Ts(n, e), e = l_(t, e, 1), t = Vi(t, e, 1), e = qt(), t !== null && (Oo(t, 1, e), an(t, e)) } function mt(t, e, n) { if (t.tag === 3) hp(t, t, n); else for (; e !== null;) { if (e.tag === 3) { hp(e, t, n); break } else if (e.tag === 1) { var i = e.stateNode; if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Gi === null || !Gi.has(i))) { t = Ts(n, t), t = c_(e, t, 1), e = Vi(e, t, 1), t = qt(), e !== null && (Oo(e, 1, t), an(e, t)); break } } e = e.return } } function zx(t, e, n) { var i = t.pingCache; i !== null && i.delete(e), e = qt(), t.pingedLanes |= t.suspendedLanes & n, Pt === t && (It & n) === n && (Tt === 4 || Tt === 3 && (It & 130023424) === It && 500 > vt() - Rf ? xr(t, 0) : Cf |= n), an(t, e) } function P_(t, e) { e === 0 && (t.mode & 1 ? (e = $o, $o <<= 1, !($o & 130023424) && ($o = 4194304)) : e = 1); var n = qt(); t = mi(t, e), t !== null && (Oo(t, e, n), an(t, n)) } function Bx(t) { var e = t.memoizedState, n = 0; e !== null && (n = e.retryLane), P_(t, n) } function Hx(t, e) { var n = 0; switch (t.tag) { case 13: var i = t.stateNode, r = t.memoizedState; r !== null && (n = r.retryLane); break; case 19: i = t.stateNode; break; default: throw Error(ne(314)) }i !== null && i.delete(e), P_(t, n) } var b_; b_ = function (t, e, n) { if (t !== null) if (t.memoizedProps !== e.pendingProps || sn.current) rn = !0; else { if (!(t.lanes & n) && !(e.flags & 128)) return rn = !1, Rx(t, e, n); rn = !!(t.flags & 131072) } else rn = !1, lt && e.flags & 1048576 && Ng(e, cl, e.index); switch (e.lanes = 0, e.tag) { case 2: var i = e.type; Ba(t, e), t = e.pendingProps; var r = ys(e, Wt.current); hs(e, n), r = Sf(null, e, i, t, r, n); var s = Mf(); return e.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, on(i) ? (s = !0, al(e)) : s = !1, e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, gf(e), r.updater = Ol, e.stateNode = r, r._reactInternals = e, ku(e, i, t, n), e = Hu(null, e, i, !0, s, n)) : (e.tag = 0, lt && s && cf(e), Yt(null, e, r, n), e = e.child), e; case 16: i = e.elementType; e: { switch (Ba(t, e), t = e.pendingProps, r = i._init, i = r(i._payload), e.type = i, r = e.tag = Gx(i), t = Nn(i, t), r) { case 0: e = Bu(null, e, i, t, n); break e; case 1: e = ip(null, e, i, t, n); break e; case 11: e = tp(null, e, i, t, n); break e; case 14: e = np(null, e, i, Nn(i.type, t), n); break e }throw Error(ne(306, i, "")) } return e; case 0: return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : Nn(i, r), Bu(t, e, i, r, n); case 1: return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : Nn(i, r), ip(t, e, i, r, n); case 3: e: { if (h_(e), t === null) throw Error(ne(387)); i = e.pendingProps, s = e.memoizedState, r = s.element, Bg(t, e), fl(e, i, null, n); var o = e.memoizedState; if (i = o.element, s.isDehydrated) if (s = { element: i, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) { r = Ts(Error(ne(423)), e), e = rp(t, e, i, n, r); break e } else if (i !== r) { r = Ts(Error(ne(424)), e), e = rp(t, e, i, n, r); break e } else for (hn = Hi(e.stateNode.containerInfo.firstChild), pn = e, lt = !0, On = null, n = kg(e, null, i, n), e.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling; else { if (Ss(), i === r) { e = gi(t, e, n); break e } Yt(t, e, i, n) } e = e.child } return e; case 5: return Hg(e), t === null && Uu(e), i = e.type, r = e.pendingProps, s = t !== null ? t.memoizedProps : null, o = r.children, bu(i, r) ? o = null : s !== null && bu(i, s) && (e.flags |= 32), f_(t, e), Yt(t, e, o, n), e.child; case 6: return t === null && Uu(e), null; case 13: return p_(t, e, n); case 4: return _f(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Ms(e, null, i, n) : Yt(t, e, i, n), e.child; case 11: return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : Nn(i, r), tp(t, e, i, r, n); case 7: return Yt(t, e, e.pendingProps, n), e.child; case 8: return Yt(t, e, e.pendingProps.children, n), e.child; case 12: return Yt(t, e, e.pendingProps.children, n), e.child; case 10: e: { if (i = e.type._context, r = e.pendingProps, s = e.memoizedProps, o = r.value, it(ul, i._currentValue), i._currentValue = o, s !== null) if (Gn(s.value, o)) { if (s.children === r.children && !sn.current) { e = gi(t, e, n); break e } } else for (s = e.child, s !== null && (s.return = e); s !== null;) { var a = s.dependencies; if (a !== null) { o = s.child; for (var l = a.firstContext; l !== null;) { if (l.context === i) { if (s.tag === 1) { l = fi(-1, n & -n), l.tag = 2; var c = s.updateQueue; if (c !== null) { c = c.shared; var d = c.pending; d === null ? l.next = l : (l.next = d.next, d.next = l), c.pending = l } } s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Ou(s.return, n, e), a.lanes |= n; break } l = l.next } } else if (s.tag === 10) o = s.type === e.type ? null : s.child; else if (s.tag === 18) { if (o = s.return, o === null) throw Error(ne(341)); o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ou(o, n, e), o = s.sibling } else o = s.child; if (o !== null) o.return = s; else for (o = s; o !== null;) { if (o === e) { o = null; break } if (s = o.sibling, s !== null) { s.return = o.return, o = s; break } o = o.return } s = o } Yt(t, e, r.children, n), e = e.child } return e; case 9: return r = e.type, i = e.pendingProps.children, hs(e, n), r = Cn(r), i = i(r), e.flags |= 1, Yt(t, e, i, n), e.child; case 14: return i = e.type, r = Nn(i, e.pendingProps), r = Nn(i.type, r), np(t, e, i, r, n); case 15: return u_(t, e, e.type, e.pendingProps, n); case 17: return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : Nn(i, r), Ba(t, e), e.tag = 1, on(i) ? (t = !0, al(e)) : t = !1, hs(e, n), a_(e, i, r), ku(e, i, r, n), Hu(null, e, i, !0, t, n); case 19: return m_(t, e, n); case 22: return d_(t, e, n) }throw Error(ne(156, e.tag)) }; function L_(t, e) { return rg(t, e) } function Vx(t, e, n, i) { this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function Tn(t, e, n, i) { return new Vx(t, e, n, i) } function Df(t) { return t = t.prototype, !(!t || !t.isReactComponent) } function Gx(t) { if (typeof t == "function") return Df(t) ? 1 : 0; if (t != null) { if (t = t.$$typeof, t === $d) return 11; if (t === Zd) return 14 } return 2 } function Xi(t, e) { var n = t.alternate; return n === null ? (n = Tn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n } function Ga(t, e, n, i, r, s) { var o = 2; if (i = t, typeof t == "function") Df(t) && (o = 1); else if (typeof t == "string") o = 5; else e: switch (t) { case $r: return yr(n.children, r, s, e); case Kd: o = 8, r |= 8; break; case lu: return t = Tn(12, n, e, r | 2), t.elementType = lu, t.lanes = s, t; case cu: return t = Tn(13, n, e, r), t.elementType = cu, t.lanes = s, t; case uu: return t = Tn(19, n, e, r), t.elementType = uu, t.lanes = s, t; case Hm: return zl(n, r, s, e); default: if (typeof t == "object" && t !== null) switch (t.$$typeof) { case zm: o = 10; break e; case Bm: o = 9; break e; case $d: o = 11; break e; case Zd: o = 14; break e; case Ri: o = 16, i = null; break e }throw Error(ne(130, t == null ? t : typeof t, "")) }return e = Tn(o, n, e, r), e.elementType = t, e.type = i, e.lanes = s, e } function yr(t, e, n, i) { return t = Tn(7, t, i, e), t.lanes = n, t } function zl(t, e, n, i) { return t = Tn(22, t, i, e), t.elementType = Hm, t.lanes = n, t.stateNode = { isHidden: !1 }, t } function Tc(t, e, n) { return t = Tn(6, t, null, e), t.lanes = n, t } function wc(t, e, n) { return e = Tn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e } function Wx(t, e, n, i, r) { this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = sc(0), this.expirationTimes = sc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = sc(0), this.identifierPrefix = i, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null } function If(t, e, n, i, r, s, o, a, l) { return t = new Wx(t, e, n, a, l), e === 1 ? (e = 1, s === !0 && (e |= 8)) : e = 0, s = Tn(3, null, null, e), t.current = s, s.stateNode = t, s.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gf(s), t } function Xx(t, e, n) { var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Kr, key: i == null ? null : "" + i, children: t, containerInfo: e, implementation: n } } function D_(t) { if (!t) return Ki; t = t._reactInternals; e: { if (br(t) !== t || t.tag !== 1) throw Error(ne(170)); var e = t; do { switch (e.tag) { case 3: e = e.stateNode.context; break e; case 1: if (on(e.type)) { e = e.stateNode.__reactInternalMemoizedMergedChildContext; break e } }e = e.return } while (e !== null); throw Error(ne(171)) } if (t.tag === 1) { var n = t.type; if (on(n)) return Dg(t, n, e) } return e } function I_(t, e, n, i, r, s, o, a, l) { return t = If(n, i, !0, t, r, s, o, a, l), t.context = D_(null), n = t.current, i = qt(), r = Wi(n), s = fi(i, r), s.callback = e ?? null, Vi(n, s, r), t.current.lanes = r, Oo(t, r, i), an(t, i), t } function Bl(t, e, n, i) { var r = e.current, s = qt(), o = Wi(r); return n = D_(n), e.context === null ? e.context = n : e.pendingContext = n, e = fi(s, o), e.payload = { element: t }, i = i === void 0 ? null : i, i !== null && (e.callback = i), t = Vi(r, e, o), t !== null && (Hn(t, r, o, s), Fa(t, r, o)), o } function yl(t) { if (t = t.current, !t.child) return null; switch (t.child.tag) { case 5: return t.child.stateNode; default: return t.child.stateNode } } function pp(t, e) { if (t = t.memoizedState, t !== null && t.dehydrated !== null) { var n = t.retryLane; t.retryLane = n !== 0 && n < e ? n : e } } function Nf(t, e) { pp(t, e), (t = t.alternate) && pp(t, e) } function jx() { return null } var N_ = typeof reportError == "function" ? reportError : function (t) { console.error(t) }; function Uf(t) { this._internalRoot = t } Hl.prototype.render = Uf.prototype.render = function (t) { var e = this._internalRoot; if (e === null) throw Error(ne(409)); Bl(t, e, null, null) }; Hl.prototype.unmount = Uf.prototype.unmount = function () { var t = this._internalRoot; if (t !== null) { this._internalRoot = null; var e = t.containerInfo; wr(function () { Bl(null, t, null, null) }), e[pi] = null } }; function Hl(t) { this._internalRoot = t } Hl.prototype.unstable_scheduleHydration = function (t) { if (t) { var e = dg(); t = { blockedOn: null, target: t, priority: e }; for (var n = 0; n < Ii.length && e !== 0 && e < Ii[n].priority; n++); Ii.splice(n, 0, t), n === 0 && hg(t) } }; function Of(t) { return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) } function Vl(t) { return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable ")) } function mp() { } function Yx(t, e, n, i, r) { if (r) { if (typeof i == "function") { var s = i; i = function () { var c = yl(o); s.call(c) } } var o = I_(e, i, t, 0, null, !1, !1, "", mp); return t._reactRootContainer = o, t[pi] = o.current, To(t.nodeType === 8 ? t.parentNode : t), wr(), o } for (; r = t.lastChild;)t.removeChild(r); if (typeof i == "function") { var a = i; i = function () { var c = yl(l); a.call(c) } } var l = If(t, 0, !1, null, null, !1, !1, "", mp); return t._reactRootContainer = l, t[pi] = l.current, To(t.nodeType === 8 ? t.parentNode : t), wr(function () { Bl(e, l, n, i) }), l } function Gl(t, e, n, i, r) { var s = n._reactRootContainer; if (s) { var o = s; if (typeof r == "function") { var a = r; r = function () { var l = yl(o); a.call(l) } } Bl(e, o, t, r) } else o = Yx(n, e, t, r, i); return yl(o) } cg = function (t) { switch (t.tag) { case 3: var e = t.stateNode; if (e.current.memoizedState.isDehydrated) { var n = eo(e.pendingLanes); n !== 0 && (ef(e, n | 1), an(e, vt()), !(qe & 6) && (ws = vt() + 500, Ji())) } break; case 13: wr(function () { var i = mi(t, 1); if (i !== null) { var r = qt(); Hn(i, t, 1, r) } }), Nf(t, 1) } }; tf = function (t) { if (t.tag === 13) { var e = mi(t, 134217728); if (e !== null) { var n = qt(); Hn(e, t, 134217728, n) } Nf(t, 134217728) } }; ug = function (t) { if (t.tag === 13) { var e = Wi(t), n = mi(t, e); if (n !== null) { var i = qt(); Hn(n, t, e, i) } Nf(t, e) } }; dg = function () { return et }; fg = function (t, e) { var n = et; try { return et = t, e() } finally { et = n } }; yu = function (t, e, n) { switch (e) { case "input": if (hu(t, n), e = n.name, n.type === "radio" && e != null) { for (n = t; n.parentNode;)n = n.parentNode; for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) { var i = n[e]; if (i !== t && i.form === t.form) { var r = Il(i); if (!r) throw Error(ne(90)); Gm(i), hu(i, r) } } } break; case "textarea": Xm(t, n); break; case "select": e = n.value, e != null && cs(t, !!n.multiple, e, !1) } }; Qm = Pf; Jm = wr; var qx = { usingClientEntryPoint: !1, Events: [ko, es, Il, $m, Zm, Pf] }, Xs = { findFiberByHostInstance: hr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Kx = { bundleType: Xs.bundleType, version: Xs.version, rendererPackageName: Xs.rendererPackageName, rendererConfig: Xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: xi.ReactCurrentDispatcher, findHostInstanceByFiber: function (t) { return t = ng(t), t === null ? null : t.stateNode }, findFiberByHostInstance: Xs.findFiberByHostInstance || jx, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var aa = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!aa.isDisabled && aa.supportsFiber) try { Pl = aa.inject(Kx), Zn = aa } catch { } } _n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qx; _n.createPortal = function (t, e) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Of(e)) throw Error(ne(200)); return Xx(t, e, null, n) }; _n.createRoot = function (t, e) { if (!Of(t)) throw Error(ne(299)); var n = !1, i = "", r = N_; return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = If(t, 1, !1, null, null, n, !1, i, r), t[pi] = e.current, To(t.nodeType === 8 ? t.parentNode : t), new Uf(e) }; _n.findDOMNode = function (t) { if (t == null) return null; if (t.nodeType === 1) return t; var e = t._reactInternals; if (e === void 0) throw typeof t.render == "function" ? Error(ne(188)) : (t = Object.keys(t).join(","), Error(ne(268, t))); return t = ng(e), t = t === null ? null : t.stateNode, t }; _n.flushSync = function (t) { return wr(t) }; _n.hydrate = function (t, e, n) { if (!Vl(e)) throw Error(ne(200)); return Gl(null, t, e, !0, n) }; _n.hydrateRoot = function (t, e, n) { if (!Of(t)) throw Error(ne(405)); var i = n != null && n.hydratedSources || null, r = !1, s = "", o = N_; if (n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), e = I_(e, null, t, 1, n ?? null, r, !1, s, o), t[pi] = e.current, To(t), i) for (t = 0; t < i.length; t++)n = i[t], r = n._getVersion, r = r(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, r] : e.mutableSourceEagerHydrationData.push(n, r); return new Hl(e) }; _n.render = function (t, e, n) { if (!Vl(e)) throw Error(ne(200)); return Gl(null, t, e, !1, n) }; _n.unmountComponentAtNode = function (t) { if (!Vl(t)) throw Error(ne(40)); return t._reactRootContainer ? (wr(function () { Gl(null, null, t, !1, function () { t._reactRootContainer = null, t[pi] = null }) }), !0) : !1 }; _n.unstable_batchedUpdates = Pf; _n.unstable_renderSubtreeIntoContainer = function (t, e, n, i) { if (!Vl(n)) throw Error(ne(200)); if (t == null || t._reactInternals === void 0) throw Error(ne(38)); return Gl(t, e, n, !1, i) }; _n.version = "18.3.1-next-f1338f8080-20240426"; function U_() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U_) } catch (t) { console.error(t) } } U_(), Um.exports = _n; var $x = Um.exports, gp = $x; ou.createRoot = gp.createRoot, ou.hydrateRoot = gp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff = "169", ms = { ROTATE: 0, DOLLY: 1, PAN: 2 }, as = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Zx = 0, _p = 1, Qx = 2, O_ = 1, Jx = 2, si = 3, $i = 0, Kt = 1, $n = 2, ji = 0, gs = 1, bi = 2, vp = 3, xp = 4, ey = 5, dr = 100, ty = 101, ny = 102, iy = 103, ry = 104, sy = 200, oy = 201, ay = 202, ly = 203, Ju = 204, ed = 205, cy = 206, uy = 207, dy = 208, fy = 209, hy = 210, py = 211, my = 212, gy = 213, _y = 214, td = 0, nd = 1, id = 2, As = 3, rd = 4, sd = 5, od = 6, ad = 7, F_ = 0, vy = 1, xy = 2, Yi = 0, yy = 1, Sy = 2, My = 3, k_ = 4, Ey = 5, Ty = 6, wy = 7, z_ = 300, Cs = 301, Rs = 302, ld = 303, cd = 304, Wl = 306, ud = 1e3, gr = 1001, dd = 1002, wn = 1003, Ay = 1004, la = 1005, Fn = 1006, Ac = 1007, _r = 1008, _i = 1009, B_ = 1010, H_ = 1011, Io = 1012, kf = 1013, Ar = 1014, ui = 1015, Bo = 1016, zf = 1017, Bf = 1018, Ps = 1020, V_ = 35902, G_ = 1021, W_ = 1022, zn = 1023, X_ = 1024, j_ = 1025, _s = 1026, bs = 1027, Y_ = 1028, Hf = 1029, q_ = 1030, Vf = 1031, Gf = 1033, Wa = 33776, Xa = 33777, ja = 33778, Ya = 33779, fd = 35840, hd = 35841, pd = 35842, md = 35843, gd = 36196, _d = 37492, vd = 37496, xd = 37808, yd = 37809, Sd = 37810, Md = 37811, Ed = 37812, Td = 37813, wd = 37814, Ad = 37815, Cd = 37816, Rd = 37817, Pd = 37818, bd = 37819, Ld = 37820, Dd = 37821, qa = 36492, Id = 36494, Nd = 36495, K_ = 36283, Ud = 36284, Od = 36285, Fd = 36286, Cy = 3200, Ry = 3201, $_ = 0, Py = 1, Ui = "", Yn = "srgb", er = "srgb-linear", Wf = "display-p3", Xl = "display-p3-linear", Sl = "linear", ot = "srgb", Ml = "rec709", El = "p3", Nr = 7680, yp = 519, by = 512, Ly = 513, Dy = 514, Z_ = 515, Iy = 516, Ny = 517, Uy = 518, Oy = 519, Sp = 35044, Mp = "300 es", di = 2e3, Tl = 2001; class Lr { addEventListener(e, n) { this._listeners === void 0 && (this._listeners = {}); const i = this._listeners; i[e] === void 0 && (i[e] = []), i[e].indexOf(n) === -1 && i[e].push(n) } hasEventListener(e, n) { if (this._listeners === void 0) return !1; const i = this._listeners; return i[e] !== void 0 && i[e].indexOf(n) !== -1 } removeEventListener(e, n) { if (this._listeners === void 0) return; const r = this._listeners[e]; if (r !== void 0) { const s = r.indexOf(n); s !== -1 && r.splice(s, 1) } } dispatchEvent(e) { if (this._listeners === void 0) return; const i = this._listeners[e.type]; if (i !== void 0) { e.target = this; const r = i.slice(0); for (let s = 0, o = r.length; s < o; s++)r[s].call(this, e); e.target = null } } } const zt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let Ep = 1234567; const ho = Math.PI / 180, No = 180 / Math.PI; function Us() { const t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0; return (zt[t & 255] + zt[t >> 8 & 255] + zt[t >> 16 & 255] + zt[t >> 24 & 255] + "-" + zt[e & 255] + zt[e >> 8 & 255] + "-" + zt[e >> 16 & 15 | 64] + zt[e >> 24 & 255] + "-" + zt[n & 63 | 128] + zt[n >> 8 & 255] + "-" + zt[n >> 16 & 255] + zt[n >> 24 & 255] + zt[i & 255] + zt[i >> 8 & 255] + zt[i >> 16 & 255] + zt[i >> 24 & 255]).toLowerCase() } function Gt(t, e, n) { return Math.max(e, Math.min(n, t)) } function Xf(t, e) { return (t % e + e) % e } function Fy(t, e, n, i, r) { return i + (t - e) * (r - i) / (n - e) } function ky(t, e, n) { return t !== e ? (n - t) / (e - t) : 0 } function po(t, e, n) { return (1 - n) * t + n * e } function zy(t, e, n, i) { return po(t, e, 1 - Math.exp(-n * i)) } function By(t, e = 1) { return e - Math.abs(Xf(t, e * 2) - e) } function Hy(t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e), t * t * (3 - 2 * t)) } function Vy(t, e, n) { return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e), t * t * t * (t * (t * 6 - 15) + 10)) } function Gy(t, e) { return t + Math.floor(Math.random() * (e - t + 1)) } function Wy(t, e) { return t + Math.random() * (e - t) } function Xy(t) { return t * (.5 - Math.random()) } function jy(t) { t !== void 0 && (Ep = t); let e = Ep += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function Yy(t) { return t * ho } function qy(t) { return t * No } function Ky(t) { return (t & t - 1) === 0 && t !== 0 } function $y(t) { return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2)) } function Zy(t) { return Math.pow(2, Math.floor(Math.log(t) / Math.LN2)) } function Qy(t, e, n, i, r) { const s = Math.cos, o = Math.sin, a = s(n / 2), l = o(n / 2), c = s((e + i) / 2), d = o((e + i) / 2), h = s((e - i) / 2), f = o((e - i) / 2), g = s((i - e) / 2), x = o((i - e) / 2); switch (r) { case "XYX": t.set(a * d, l * h, l * f, a * c); break; case "YZY": t.set(l * f, a * d, l * h, a * c); break; case "ZXZ": t.set(l * h, l * f, a * d, a * c); break; case "XZX": t.set(a * d, l * x, l * g, a * c); break; case "YXY": t.set(l * g, a * d, l * x, a * c); break; case "ZYZ": t.set(l * x, l * g, a * d, a * c); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r) } } function qr(t, e) { switch (e.constructor) { case Float32Array: return t; case Uint32Array: return t / 4294967295; case Uint16Array: return t / 65535; case Uint8Array: return t / 255; case Int32Array: return Math.max(t / 2147483647, -1); case Int16Array: return Math.max(t / 32767, -1); case Int8Array: return Math.max(t / 127, -1); default: throw new Error("Invalid component type.") } } function Xt(t, e) { switch (e.constructor) { case Float32Array: return t; case Uint32Array: return Math.round(t * 4294967295); case Uint16Array: return Math.round(t * 65535); case Uint8Array: return Math.round(t * 255); case Int32Array: return Math.round(t * 2147483647); case Int16Array: return Math.round(t * 32767); case Int8Array: return Math.round(t * 127); default: throw new Error("Invalid component type.") } } const kd = { DEG2RAD: ho, RAD2DEG: No, generateUUID: Us, clamp: Gt, euclideanModulo: Xf, mapLinear: Fy, inverseLerp: ky, lerp: po, damp: zy, pingpong: By, smoothstep: Hy, smootherstep: Vy, randInt: Gy, randFloat: Wy, randFloatSpread: Xy, seededRandom: jy, degToRad: Yy, radToDeg: qy, isPowerOfTwo: Ky, ceilPowerOfTwo: $y, floorPowerOfTwo: Zy, setQuaternionFromProperEuler: Qy, normalize: Xt, denormalize: qr }; class Ie { constructor(e = 0, n = 0) { Ie.prototype.isVector2 = !0, this.x = e, this.y = n } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, n) { return this.x = e, this.y = n, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, n) { switch (e) { case 0: this.x = n; break; case 1: this.y = n; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, n) { return this.x = e.x + n.x, this.y = e.y + n.y, this } addScaledVector(e, n) { return this.x += e.x * n, this.y += e.y * n, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, n) { return this.x = e.x - n.x, this.y = e.y - n.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const n = this.x, i = this.y, r = e.elements; return this.x = r[0] * n + r[3] * i + r[6], this.y = r[1] * n + r[4] * i + r[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, n) { return this.x = Math.max(e.x, Math.min(n.x, this.x)), this.y = Math.max(e.y, Math.min(n.y, this.y)), this } clampScalar(e, n) { return this.x = Math.max(e, Math.min(n, this.x)), this.y = Math.max(e, Math.min(n, this.y)), this } clampLength(e, n) { const i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(n, i))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { const n = Math.sqrt(this.lengthSq() * e.lengthSq()); if (n === 0) return Math.PI / 2; const i = this.dot(e) / n; return Math.acos(Gt(i, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const n = this.x - e.x, i = this.y - e.y; return n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, n) { return this.x += (e.x - this.x) * n, this.y += (e.y - this.y) * n, this } lerpVectors(e, n, i) { return this.x = e.x + (n.x - e.x) * i, this.y = e.y + (n.y - e.y) * i, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, n = 0) { return this.x = e[n], this.y = e[n + 1], this } toArray(e = [], n = 0) { return e[n] = this.x, e[n + 1] = this.y, e } fromBufferAttribute(e, n) { return this.x = e.getX(n), this.y = e.getY(n), this } rotateAround(e, n) { const i = Math.cos(n), r = Math.sin(n), s = this.x - e.x, o = this.y - e.y; return this.x = s * i - o * r + e.x, this.y = s * r + o * i + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class ke { constructor(e, n, i, r, s, o, a, l, c) { ke.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, n, i, r, s, o, a, l, c) } set(e, n, i, r, s, o, a, l, c) { const d = this.elements; return d[0] = e, d[1] = r, d[2] = a, d[3] = n, d[4] = s, d[5] = l, d[6] = i, d[7] = o, d[8] = c, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const n = this.elements, i = e.elements; return n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], n[4] = i[4], n[5] = i[5], n[6] = i[6], n[7] = i[7], n[8] = i[8], this } extractBasis(e, n, i) { return e.setFromMatrix3Column(this, 0), n.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const n = e.elements; return this.set(n[0], n[4], n[8], n[1], n[5], n[9], n[2], n[6], n[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, n) { const i = e.elements, r = n.elements, s = this.elements, o = i[0], a = i[3], l = i[6], c = i[1], d = i[4], h = i[7], f = i[2], g = i[5], x = i[8], y = r[0], p = r[3], u = r[6], m = r[1], _ = r[4], S = r[7], R = r[2], A = r[5], w = r[8]; return s[0] = o * y + a * m + l * R, s[3] = o * p + a * _ + l * A, s[6] = o * u + a * S + l * w, s[1] = c * y + d * m + h * R, s[4] = c * p + d * _ + h * A, s[7] = c * u + d * S + h * w, s[2] = f * y + g * m + x * R, s[5] = f * p + g * _ + x * A, s[8] = f * u + g * S + x * w, this } multiplyScalar(e) { const n = this.elements; return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= e, n[4] *= e, n[7] *= e, n[2] *= e, n[5] *= e, n[8] *= e, this } determinant() { const e = this.elements, n = e[0], i = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], d = e[8]; return n * o * d - n * a * c - i * s * d + i * a * l + r * s * c - r * o * l } invert() { const e = this.elements, n = e[0], i = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], d = e[8], h = d * o - a * c, f = a * l - d * s, g = c * s - o * l, x = n * h + i * f + r * g; if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const y = 1 / x; return e[0] = h * y, e[1] = (r * c - d * i) * y, e[2] = (a * i - r * o) * y, e[3] = f * y, e[4] = (d * n - r * l) * y, e[5] = (r * s - a * n) * y, e[6] = g * y, e[7] = (i * l - c * n) * y, e[8] = (o * n - i * s) * y, this } transpose() { let e; const n = this.elements; return e = n[1], n[1] = n[3], n[3] = e, e = n[2], n[2] = n[6], n[6] = e, e = n[5], n[5] = n[7], n[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const n = this.elements; return e[0] = n[0], e[1] = n[3], e[2] = n[6], e[3] = n[1], e[4] = n[4], e[5] = n[7], e[6] = n[2], e[7] = n[5], e[8] = n[8], this } setUvTransform(e, n, i, r, s, o, a) { const l = Math.cos(s), c = Math.sin(s); return this.set(i * l, i * c, -i * (l * o + c * a) + o + e, -r * c, r * l, -r * (-c * o + l * a) + a + n, 0, 0, 1), this } scale(e, n) { return this.premultiply(Cc.makeScale(e, n)), this } rotate(e) { return this.premultiply(Cc.makeRotation(-e)), this } translate(e, n) { return this.premultiply(Cc.makeTranslation(e, n)), this } makeTranslation(e, n) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, n, 0, 0, 1), this } makeRotation(e) { const n = Math.cos(e), i = Math.sin(e); return this.set(n, -i, 0, i, n, 0, 0, 0, 1), this } makeScale(e, n) { return this.set(e, 0, 0, 0, n, 0, 0, 0, 1), this } equals(e) { const n = this.elements, i = e.elements; for (let r = 0; r < 9; r++)if (n[r] !== i[r]) return !1; return !0 } fromArray(e, n = 0) { for (let i = 0; i < 9; i++)this.elements[i] = e[i + n]; return this } toArray(e = [], n = 0) { const i = this.elements; return e[n] = i[0], e[n + 1] = i[1], e[n + 2] = i[2], e[n + 3] = i[3], e[n + 4] = i[4], e[n + 5] = i[5], e[n + 6] = i[6], e[n + 7] = i[7], e[n + 8] = i[8], e } clone() { return new this.constructor().fromArray(this.elements) } } const Cc = new ke; function Q_(t) { for (let e = t.length - 1; e >= 0; --e)if (t[e] >= 65535) return !0; return !1 } function wl(t) { return document.createElementNS("http://www.w3.org/1999/xhtml", t) } function Jy() { const t = wl("canvas"); return t.style.display = "block", t } const Tp = {}; function Ka(t) { t in Tp || (Tp[t] = !0, console.warn(t)) } function eS(t, e, n) { return new Promise(function (i, r) { function s() { switch (t.clientWaitSync(e, t.SYNC_FLUSH_COMMANDS_BIT, 0)) { case t.WAIT_FAILED: r(); break; case t.TIMEOUT_EXPIRED: setTimeout(s, n); break; default: i() } } setTimeout(s, n) }) } function tS(t) { const e = t.elements; e[2] = .5 * e[2] + .5 * e[3], e[6] = .5 * e[6] + .5 * e[7], e[10] = .5 * e[10] + .5 * e[11], e[14] = .5 * e[14] + .5 * e[15] } function nS(t) { const e = t.elements; e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1) } const wp = new ke().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), Ap = new ke().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), js = { [er]: { transfer: Sl, primaries: Ml, luminanceCoefficients: [.2126, .7152, .0722], toReference: t => t, fromReference: t => t }, [Yn]: { transfer: ot, primaries: Ml, luminanceCoefficients: [.2126, .7152, .0722], toReference: t => t.convertSRGBToLinear(), fromReference: t => t.convertLinearToSRGB() }, [Xl]: { transfer: Sl, primaries: El, luminanceCoefficients: [.2289, .6917, .0793], toReference: t => t.applyMatrix3(Ap), fromReference: t => t.applyMatrix3(wp) }, [Wf]: { transfer: ot, primaries: El, luminanceCoefficients: [.2289, .6917, .0793], toReference: t => t.convertSRGBToLinear().applyMatrix3(Ap), fromReference: t => t.applyMatrix3(wp).convertLinearToSRGB() } }, iS = new Set([er, Xl]), Qe = { enabled: !0, _workingColorSpace: er, get workingColorSpace() { return this._workingColorSpace }, set workingColorSpace(t) { if (!iS.has(t)) throw new Error(`Unsupported working color space, "${t}".`); this._workingColorSpace = t }, convert: function (t, e, n) { if (this.enabled === !1 || e === n || !e || !n) return t; const i = js[e].toReference, r = js[n].fromReference; return r(i(t)) }, fromWorkingColorSpace: function (t, e) { return this.convert(t, this._workingColorSpace, e) }, toWorkingColorSpace: function (t, e) { return this.convert(t, e, this._workingColorSpace) }, getPrimaries: function (t) { return js[t].primaries }, getTransfer: function (t) { return t === Ui ? Sl : js[t].transfer }, getLuminanceCoefficients: function (t, e = this._workingColorSpace) { return t.fromArray(js[e].luminanceCoefficients) } }; function vs(t) { return t < .04045 ? t * .0773993808 : Math.pow(t * .9478672986 + .0521327014, 2.4) } function Rc(t) { return t < .0031308 ? t * 12.92 : 1.055 * Math.pow(t, .41666) - .055 } let Ur; class rS { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let n; if (e instanceof HTMLCanvasElement) n = e; else { Ur === void 0 && (Ur = wl("canvas")), Ur.width = e.width, Ur.height = e.height; const i = Ur.getContext("2d"); e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = Ur } return n.width > 2048 || n.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), n.toDataURL("image/jpeg", .6)) : n.toDataURL("image/png") } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const n = wl("canvas"); n.width = e.width, n.height = e.height; const i = n.getContext("2d"); i.drawImage(e, 0, 0, e.width, e.height); const r = i.getImageData(0, 0, e.width, e.height), s = r.data; for (let o = 0; o < s.length; o++)s[o] = vs(s[o] / 255) * 255; return i.putImageData(r, 0, 0), n } else if (e.data) { const n = e.data.slice(0); for (let i = 0; i < n.length; i++)n instanceof Uint8Array || n instanceof Uint8ClampedArray ? n[i] = Math.floor(vs(n[i] / 255) * 255) : n[i] = vs(n[i]); return { data: n, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } let sS = 0; class J_ { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: sS++ }), this.uuid = Us(), this.data = e, this.dataReady = !0, this.version = 0 } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const n = e === void 0 || typeof e == "string"; if (!n && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const i = { uuid: this.uuid, url: "" }, r = this.data; if (r !== null) { let s; if (Array.isArray(r)) { s = []; for (let o = 0, a = r.length; o < a; o++)r[o].isDataTexture ? s.push(Pc(r[o].image)) : s.push(Pc(r[o])) } else s = Pc(r); i.url = s } return n || (e.images[this.uuid] = i), i } } function Pc(t) { return typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap ? rS.getDataURL(t) : t.data ? { data: Array.from(t.data), width: t.width, height: t.height, type: t.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let oS = 0; class $t extends Lr { constructor(e = $t.DEFAULT_IMAGE, n = $t.DEFAULT_MAPPING, i = gr, r = gr, s = Fn, o = _r, a = zn, l = _i, c = $t.DEFAULT_ANISOTROPY, d = Ui) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: oS++ }), this.uuid = Us(), this.name = "", this.source = new J_(e), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Ie(0, 0), this.repeat = new Ie(1, 1), this.center = new Ie(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ke, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0 } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } toJSON(e) { const n = e === void 0 || typeof e == "string"; if (!n && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const i = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (i.userData = this.userData), n || (e.textures[this.uuid] = i), i } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== z_) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case ud: e.x = e.x - Math.floor(e.x); break; case gr: e.x = e.x < 0 ? 0 : 1; break; case dd: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case ud: e.y = e.y - Math.floor(e.y); break; case gr: e.y = e.y < 0 ? 0 : 1; break; case dd: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate(e) { e === !0 && this.pmremVersion++ } } $t.DEFAULT_IMAGE = null; $t.DEFAULT_MAPPING = z_; $t.DEFAULT_ANISOTROPY = 1; class gt { constructor(e = 0, n = 0, i = 0, r = 1) { gt.prototype.isVector4 = !0, this.x = e, this.y = n, this.z = i, this.w = r } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, n, i, r) { return this.x = e, this.y = n, this.z = i, this.w = r, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, n) { switch (e) { case 0: this.x = n; break; case 1: this.y = n; break; case 2: this.z = n; break; case 3: this.w = n; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, n) { return this.x = e.x + n.x, this.y = e.y + n.y, this.z = e.z + n.z, this.w = e.w + n.w, this } addScaledVector(e, n) { return this.x += e.x * n, this.y += e.y * n, this.z += e.z * n, this.w += e.w * n, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, n) { return this.x = e.x - n.x, this.y = e.y - n.y, this.z = e.z - n.z, this.w = e.w - n.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const n = this.x, i = this.y, r = this.z, s = this.w, o = e.elements; return this.x = o[0] * n + o[4] * i + o[8] * r + o[12] * s, this.y = o[1] * n + o[5] * i + o[9] * r + o[13] * s, this.z = o[2] * n + o[6] * i + o[10] * r + o[14] * s, this.w = o[3] * n + o[7] * i + o[11] * r + o[15] * s, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const n = Math.sqrt(1 - e.w * e.w); return n < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / n, this.y = e.y / n, this.z = e.z / n), this } setAxisAngleFromRotationMatrix(e) { let n, i, r, s; const l = e.elements, c = l[0], d = l[4], h = l[8], f = l[1], g = l[5], x = l[9], y = l[2], p = l[6], u = l[10]; if (Math.abs(d - f) < .01 && Math.abs(h - y) < .01 && Math.abs(x - p) < .01) { if (Math.abs(d + f) < .1 && Math.abs(h + y) < .1 && Math.abs(x + p) < .1 && Math.abs(c + g + u - 3) < .1) return this.set(1, 0, 0, 0), this; n = Math.PI; const _ = (c + 1) / 2, S = (g + 1) / 2, R = (u + 1) / 2, A = (d + f) / 4, w = (h + y) / 4, P = (x + p) / 4; return _ > S && _ > R ? _ < .01 ? (i = 0, r = .707106781, s = .707106781) : (i = Math.sqrt(_), r = A / i, s = w / i) : S > R ? S < .01 ? (i = .707106781, r = 0, s = .707106781) : (r = Math.sqrt(S), i = A / r, s = P / r) : R < .01 ? (i = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(R), i = w / s, r = P / s), this.set(i, r, s, n), this } let m = Math.sqrt((p - x) * (p - x) + (h - y) * (h - y) + (f - d) * (f - d)); return Math.abs(m) < .001 && (m = 1), this.x = (p - x) / m, this.y = (h - y) / m, this.z = (f - d) / m, this.w = Math.acos((c + g + u - 1) / 2), this } setFromMatrixPosition(e) { const n = e.elements; return this.x = n[12], this.y = n[13], this.z = n[14], this.w = n[15], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, n) { return this.x = Math.max(e.x, Math.min(n.x, this.x)), this.y = Math.max(e.y, Math.min(n.y, this.y)), this.z = Math.max(e.z, Math.min(n.z, this.z)), this.w = Math.max(e.w, Math.min(n.w, this.w)), this } clampScalar(e, n) { return this.x = Math.max(e, Math.min(n, this.x)), this.y = Math.max(e, Math.min(n, this.y)), this.z = Math.max(e, Math.min(n, this.z)), this.w = Math.max(e, Math.min(n, this.w)), this } clampLength(e, n) { const i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(n, i))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, n) { return this.x += (e.x - this.x) * n, this.y += (e.y - this.y) * n, this.z += (e.z - this.z) * n, this.w += (e.w - this.w) * n, this } lerpVectors(e, n, i) { return this.x = e.x + (n.x - e.x) * i, this.y = e.y + (n.y - e.y) * i, this.z = e.z + (n.z - e.z) * i, this.w = e.w + (n.w - e.w) * i, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, n = 0) { return this.x = e[n], this.y = e[n + 1], this.z = e[n + 2], this.w = e[n + 3], this } toArray(e = [], n = 0) { return e[n] = this.x, e[n + 1] = this.y, e[n + 2] = this.z, e[n + 3] = this.w, e } fromBufferAttribute(e, n) { return this.x = e.getX(n), this.y = e.getY(n), this.z = e.getZ(n), this.w = e.getW(n), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class aS extends Lr { constructor(e = 1, n = 1, i = {}) { super(), this.isRenderTarget = !0, this.width = e, this.height = n, this.depth = 1, this.scissor = new gt(0, 0, e, n), this.scissorTest = !1, this.viewport = new gt(0, 0, e, n); const r = { width: e, height: n, depth: 1 }; i = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: Fn, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1 }, i); const s = new $t(r, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace); s.flipY = !1, s.generateMipmaps = i.generateMipmaps, s.internalFormat = i.internalFormat, this.textures = []; const o = i.count; for (let a = 0; a < o; a++)this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = !0; this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this.depthTexture = i.depthTexture, this.samples = i.samples } get texture() { return this.textures[0] } set texture(e) { this.textures[0] = e } setSize(e, n, i = 1) { if (this.width !== e || this.height !== n || this.depth !== i) { this.width = e, this.height = n, this.depth = i; for (let r = 0, s = this.textures.length; r < s; r++)this.textures[r].image.width = e, this.textures[r].image.height = n, this.textures[r].image.depth = i; this.dispose() } this.viewport.set(0, 0, e, n), this.scissor.set(0, 0, e, n) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0; for (let i = 0, r = e.textures.length; i < r; i++)this.textures[i] = e.textures[i].clone(), this.textures[i].isRenderTargetTexture = !0; const n = Object.assign({}, e.texture.image); return this.texture.source = new J_(n), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class Cr extends aS { constructor(e = 1, n = 1, i = {}) { super(e, n, i), this.isWebGLRenderTarget = !0 } } class ev extends $t { constructor(e = null, n = 1, i = 1, r = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: n, height: i, depth: r }, this.magFilter = wn, this.minFilter = wn, this.wrapR = gr, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set } addLayerUpdate(e) { this.layerUpdates.add(e) } clearLayerUpdates() { this.layerUpdates.clear() } } class lS extends $t { constructor(e = null, n = 1, i = 1, r = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: n, height: i, depth: r }, this.magFilter = wn, this.minFilter = wn, this.wrapR = gr, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class Rr { constructor(e = 0, n = 0, i = 0, r = 1) { this.isQuaternion = !0, this._x = e, this._y = n, this._z = i, this._w = r } static slerpFlat(e, n, i, r, s, o, a) { let l = i[r + 0], c = i[r + 1], d = i[r + 2], h = i[r + 3]; const f = s[o + 0], g = s[o + 1], x = s[o + 2], y = s[o + 3]; if (a === 0) { e[n + 0] = l, e[n + 1] = c, e[n + 2] = d, e[n + 3] = h; return } if (a === 1) { e[n + 0] = f, e[n + 1] = g, e[n + 2] = x, e[n + 3] = y; return } if (h !== y || l !== f || c !== g || d !== x) { let p = 1 - a; const u = l * f + c * g + d * x + h * y, m = u >= 0 ? 1 : -1, _ = 1 - u * u; if (_ > Number.EPSILON) { const R = Math.sqrt(_), A = Math.atan2(R, u * m); p = Math.sin(p * A) / R, a = Math.sin(a * A) / R } const S = a * m; if (l = l * p + f * S, c = c * p + g * S, d = d * p + x * S, h = h * p + y * S, p === 1 - a) { const R = 1 / Math.sqrt(l * l + c * c + d * d + h * h); l *= R, c *= R, d *= R, h *= R } } e[n] = l, e[n + 1] = c, e[n + 2] = d, e[n + 3] = h } static multiplyQuaternionsFlat(e, n, i, r, s, o) { const a = i[r], l = i[r + 1], c = i[r + 2], d = i[r + 3], h = s[o], f = s[o + 1], g = s[o + 2], x = s[o + 3]; return e[n] = a * x + d * h + l * g - c * f, e[n + 1] = l * x + d * f + c * h - a * g, e[n + 2] = c * x + d * g + a * f - l * h, e[n + 3] = d * x - a * h - l * f - c * g, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, n, i, r) { return this._x = e, this._y = n, this._z = i, this._w = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, n = !0) { const i = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(i / 2), d = a(r / 2), h = a(s / 2), f = l(i / 2), g = l(r / 2), x = l(s / 2); switch (o) { case "XYZ": this._x = f * d * h + c * g * x, this._y = c * g * h - f * d * x, this._z = c * d * x + f * g * h, this._w = c * d * h - f * g * x; break; case "YXZ": this._x = f * d * h + c * g * x, this._y = c * g * h - f * d * x, this._z = c * d * x - f * g * h, this._w = c * d * h + f * g * x; break; case "ZXY": this._x = f * d * h - c * g * x, this._y = c * g * h + f * d * x, this._z = c * d * x + f * g * h, this._w = c * d * h - f * g * x; break; case "ZYX": this._x = f * d * h - c * g * x, this._y = c * g * h + f * d * x, this._z = c * d * x - f * g * h, this._w = c * d * h + f * g * x; break; case "YZX": this._x = f * d * h + c * g * x, this._y = c * g * h + f * d * x, this._z = c * d * x - f * g * h, this._w = c * d * h - f * g * x; break; case "XZY": this._x = f * d * h - c * g * x, this._y = c * g * h - f * d * x, this._z = c * d * x + f * g * h, this._w = c * d * h + f * g * x; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return n === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, n) { const i = n / 2, r = Math.sin(i); return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._onChangeCallback(), this } setFromRotationMatrix(e) { const n = e.elements, i = n[0], r = n[4], s = n[8], o = n[1], a = n[5], l = n[9], c = n[2], d = n[6], h = n[10], f = i + a + h; if (f > 0) { const g = .5 / Math.sqrt(f + 1); this._w = .25 / g, this._x = (d - l) * g, this._y = (s - c) * g, this._z = (o - r) * g } else if (i > a && i > h) { const g = 2 * Math.sqrt(1 + i - a - h); this._w = (d - l) / g, this._x = .25 * g, this._y = (r + o) / g, this._z = (s + c) / g } else if (a > h) { const g = 2 * Math.sqrt(1 + a - i - h); this._w = (s - c) / g, this._x = (r + o) / g, this._y = .25 * g, this._z = (l + d) / g } else { const g = 2 * Math.sqrt(1 + h - i - a); this._w = (o - r) / g, this._x = (s + c) / g, this._y = (l + d) / g, this._z = .25 * g } return this._onChangeCallback(), this } setFromUnitVectors(e, n) { let i = e.dot(n) + 1; return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * n.z - e.z * n.y, this._y = e.z * n.x - e.x * n.z, this._z = e.x * n.y - e.y * n.x, this._w = i), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(Gt(this.dot(e), -1, 1))) } rotateTowards(e, n) { const i = this.angleTo(e); if (i === 0) return this; const r = Math.min(1, n / i); return this.slerp(e, r), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, n) { const i = e._x, r = e._y, s = e._z, o = e._w, a = n._x, l = n._y, c = n._z, d = n._w; return this._x = i * d + o * a + r * c - s * l, this._y = r * d + o * l + s * a - i * c, this._z = s * d + o * c + i * l - r * a, this._w = o * d - i * a - r * l - s * c, this._onChangeCallback(), this } slerp(e, n) { if (n === 0) return this; if (n === 1) return this.copy(e); const i = this._x, r = this._y, s = this._z, o = this._w; let a = o * e._w + i * e._x + r * e._y + s * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = i, this._y = r, this._z = s, this; const l = 1 - a * a; if (l <= Number.EPSILON) { const g = 1 - n; return this._w = g * o + n * this._w, this._x = g * i + n * this._x, this._y = g * r + n * this._y, this._z = g * s + n * this._z, this.normalize(), this } const c = Math.sqrt(l), d = Math.atan2(c, a), h = Math.sin((1 - n) * d) / c, f = Math.sin(n * d) / c; return this._w = o * h + this._w * f, this._x = i * h + this._x * f, this._y = r * h + this._y * f, this._z = s * h + this._z * f, this._onChangeCallback(), this } slerpQuaternions(e, n, i) { return this.copy(e).slerp(n, i) } random() { const e = 2 * Math.PI * Math.random(), n = 2 * Math.PI * Math.random(), i = Math.random(), r = Math.sqrt(1 - i), s = Math.sqrt(i); return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(n), s * Math.cos(n)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, n = 0) { return this._x = e[n], this._y = e[n + 1], this._z = e[n + 2], this._w = e[n + 3], this._onChangeCallback(), this } toArray(e = [], n = 0) { return e[n] = this._x, e[n + 1] = this._y, e[n + 2] = this._z, e[n + 3] = this._w, e } fromBufferAttribute(e, n) { return this._x = e.getX(n), this._y = e.getY(n), this._z = e.getZ(n), this._w = e.getW(n), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class U { constructor(e = 0, n = 0, i = 0) { U.prototype.isVector3 = !0, this.x = e, this.y = n, this.z = i } set(e, n, i) { return i === void 0 && (i = this.z), this.x = e, this.y = n, this.z = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, n) { switch (e) { case 0: this.x = n; break; case 1: this.y = n; break; case 2: this.z = n; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, n) { return this.x = e.x + n.x, this.y = e.y + n.y, this.z = e.z + n.z, this } addScaledVector(e, n) { return this.x += e.x * n, this.y += e.y * n, this.z += e.z * n, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, n) { return this.x = e.x - n.x, this.y = e.y - n.y, this.z = e.z - n.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, n) { return this.x = e.x * n.x, this.y = e.y * n.y, this.z = e.z * n.z, this } applyEuler(e) { return this.applyQuaternion(Cp.setFromEuler(e)) } applyAxisAngle(e, n) { return this.applyQuaternion(Cp.setFromAxisAngle(e, n)) } applyMatrix3(e) { const n = this.x, i = this.y, r = this.z, s = e.elements; return this.x = s[0] * n + s[3] * i + s[6] * r, this.y = s[1] * n + s[4] * i + s[7] * r, this.z = s[2] * n + s[5] * i + s[8] * r, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const n = this.x, i = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * n + s[7] * i + s[11] * r + s[15]); return this.x = (s[0] * n + s[4] * i + s[8] * r + s[12]) * o, this.y = (s[1] * n + s[5] * i + s[9] * r + s[13]) * o, this.z = (s[2] * n + s[6] * i + s[10] * r + s[14]) * o, this } applyQuaternion(e) { const n = this.x, i = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * i), d = 2 * (a * n - s * r), h = 2 * (s * i - o * n); return this.x = n + l * c + o * h - a * d, this.y = i + l * d + a * c - s * h, this.z = r + l * h + s * d - o * c, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const n = this.x, i = this.y, r = this.z, s = e.elements; return this.x = s[0] * n + s[4] * i + s[8] * r, this.y = s[1] * n + s[5] * i + s[9] * r, this.z = s[2] * n + s[6] * i + s[10] * r, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, n) { return this.x = Math.max(e.x, Math.min(n.x, this.x)), this.y = Math.max(e.y, Math.min(n.y, this.y)), this.z = Math.max(e.z, Math.min(n.z, this.z)), this } clampScalar(e, n) { return this.x = Math.max(e, Math.min(n, this.x)), this.y = Math.max(e, Math.min(n, this.y)), this.z = Math.max(e, Math.min(n, this.z)), this } clampLength(e, n) { const i = this.length(); return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(n, i))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, n) { return this.x += (e.x - this.x) * n, this.y += (e.y - this.y) * n, this.z += (e.z - this.z) * n, this } lerpVectors(e, n, i) { return this.x = e.x + (n.x - e.x) * i, this.y = e.y + (n.y - e.y) * i, this.z = e.z + (n.z - e.z) * i, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, n) { const i = e.x, r = e.y, s = e.z, o = n.x, a = n.y, l = n.z; return this.x = r * l - s * a, this.y = s * o - i * l, this.z = i * a - r * o, this } projectOnVector(e) { const n = e.lengthSq(); if (n === 0) return this.set(0, 0, 0); const i = e.dot(this) / n; return this.copy(e).multiplyScalar(i) } projectOnPlane(e) { return bc.copy(this).projectOnVector(e), this.sub(bc) } reflect(e) { return this.sub(bc.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const n = Math.sqrt(this.lengthSq() * e.lengthSq()); if (n === 0) return Math.PI / 2; const i = this.dot(e) / n; return Math.acos(Gt(i, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const n = this.x - e.x, i = this.y - e.y, r = this.z - e.z; return n * n + i * i + r * r } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, n, i) { const r = Math.sin(n) * e; return this.x = r * Math.sin(i), this.y = Math.cos(n) * e, this.z = r * Math.cos(i), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, n, i) { return this.x = e * Math.sin(n), this.y = i, this.z = e * Math.cos(n), this } setFromMatrixPosition(e) { const n = e.elements; return this.x = n[12], this.y = n[13], this.z = n[14], this } setFromMatrixScale(e) { const n = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length(); return this.x = n, this.y = i, this.z = r, this } setFromMatrixColumn(e, n) { return this.fromArray(e.elements, n * 4) } setFromMatrix3Column(e, n) { return this.fromArray(e.elements, n * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, n = 0) { return this.x = e[n], this.y = e[n + 1], this.z = e[n + 2], this } toArray(e = [], n = 0) { return e[n] = this.x, e[n + 1] = this.y, e[n + 2] = this.z, e } fromBufferAttribute(e, n) { return this.x = e.getX(n), this.y = e.getY(n), this.z = e.getZ(n), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = Math.random() * Math.PI * 2, n = Math.random() * 2 - 1, i = Math.sqrt(1 - n * n); return this.x = i * Math.cos(e), this.y = n, this.z = i * Math.sin(e), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const bc = new U, Cp = new Rr; class Ho { constructor(e = new U(1 / 0, 1 / 0, 1 / 0), n = new U(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = n } set(e, n) { return this.min.copy(e), this.max.copy(n), this } setFromArray(e) { this.makeEmpty(); for (let n = 0, i = e.length; n < i; n += 3)this.expandByPoint(Ln.fromArray(e, n)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let n = 0, i = e.count; n < i; n++)this.expandByPoint(Ln.fromBufferAttribute(e, n)); return this } setFromPoints(e) { this.makeEmpty(); for (let n = 0, i = e.length; n < i; n++)this.expandByPoint(e[n]); return this } setFromCenterAndSize(e, n) { const i = Ln.copy(n).multiplyScalar(.5); return this.min.copy(e).sub(i), this.max.copy(e).add(i), this } setFromObject(e, n = !1) { return this.makeEmpty(), this.expandByObject(e, n) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, n = !1) { e.updateWorldMatrix(!1, !1); const i = e.geometry; if (i !== void 0) { const s = i.getAttribute("position"); if (n === !0 && s !== void 0 && e.isInstancedMesh !== !0) for (let o = 0, a = s.count; o < a; o++)e.isMesh === !0 ? e.getVertexPosition(o, Ln) : Ln.fromBufferAttribute(s, o), Ln.applyMatrix4(e.matrixWorld), this.expandByPoint(Ln); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ca.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), ca.copy(i.boundingBox)), ca.applyMatrix4(e.matrixWorld), this.union(ca) } const r = e.children; for (let s = 0, o = r.length; s < o; s++)this.expandByObject(r[s], n); return this } containsPoint(e) { return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, n) { return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z } intersectsSphere(e) { return this.clampPoint(e.center, Ln), Ln.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let n, i; return e.normal.x > 0 ? (n = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (n = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (n += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (n += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (n += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (n += e.normal.z * this.max.z, i += e.normal.z * this.min.z), n <= -e.constant && i >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(Ys), ua.subVectors(this.max, Ys), Or.subVectors(e.a, Ys), Fr.subVectors(e.b, Ys), kr.subVectors(e.c, Ys), Mi.subVectors(Fr, Or), Ei.subVectors(kr, Fr), nr.subVectors(Or, kr); let n = [0, -Mi.z, Mi.y, 0, -Ei.z, Ei.y, 0, -nr.z, nr.y, Mi.z, 0, -Mi.x, Ei.z, 0, -Ei.x, nr.z, 0, -nr.x, -Mi.y, Mi.x, 0, -Ei.y, Ei.x, 0, -nr.y, nr.x, 0]; return !Lc(n, Or, Fr, kr, ua) || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Lc(n, Or, Fr, kr, ua)) ? !1 : (da.crossVectors(Mi, Ei), n = [da.x, da.y, da.z], Lc(n, Or, Fr, kr, ua)) } clampPoint(e, n) { return n.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Ln).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ln).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (ei[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ei[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ei[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ei[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ei[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ei[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ei[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ei[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ei), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } } const ei = [new U, new U, new U, new U, new U, new U, new U, new U], Ln = new U, ca = new Ho, Or = new U, Fr = new U, kr = new U, Mi = new U, Ei = new U, nr = new U, Ys = new U, ua = new U, da = new U, ir = new U; function Lc(t, e, n, i, r) { for (let s = 0, o = t.length - 3; s <= o; s += 3) { ir.fromArray(t, s); const a = r.x * Math.abs(ir.x) + r.y * Math.abs(ir.y) + r.z * Math.abs(ir.z), l = e.dot(ir), c = n.dot(ir), d = i.dot(ir); if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > a) return !1 } return !0 } const cS = new Ho, qs = new U, Dc = new U; class jl { constructor(e = new U, n = -1) { this.isSphere = !0, this.center = e, this.radius = n } set(e, n) { return this.center.copy(e), this.radius = n, this } setFromPoints(e, n) { const i = this.center; n !== void 0 ? i.copy(n) : cS.setFromPoints(e).getCenter(i); let r = 0; for (let s = 0, o = e.length; s < o; s++)r = Math.max(r, i.distanceToSquared(e[s])); return this.radius = Math.sqrt(r), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const n = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= n * n } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, n) { const i = this.center.distanceToSquared(e); return n.copy(e), i > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; qs.subVectors(e, this.center); const n = qs.lengthSq(); if (n > this.radius * this.radius) { const i = Math.sqrt(n), r = (i - this.radius) * .5; this.center.addScaledVector(qs, r / i), this.radius += r } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Dc.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(qs.copy(e.center).add(Dc)), this.expandByPoint(qs.copy(e.center).sub(Dc))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } } const ti = new U, Ic = new U, fa = new U, Ti = new U, Nc = new U, ha = new U, Uc = new U; class Yl { constructor(e = new U, n = new U(0, 0, -1)) { this.origin = e, this.direction = n } set(e, n) { return this.origin.copy(e), this.direction.copy(n), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, n) { return n.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, ti)), this } closestPointToPoint(e, n) { n.subVectors(e, this.origin); const i = n.dot(this.direction); return i < 0 ? n.copy(this.origin) : n.copy(this.origin).addScaledVector(this.direction, i) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const n = ti.subVectors(e, this.origin).dot(this.direction); return n < 0 ? this.origin.distanceToSquared(e) : (ti.copy(this.origin).addScaledVector(this.direction, n), ti.distanceToSquared(e)) } distanceSqToSegment(e, n, i, r) { Ic.copy(e).add(n).multiplyScalar(.5), fa.copy(n).sub(e).normalize(), Ti.copy(this.origin).sub(Ic); const s = e.distanceTo(n) * .5, o = -this.direction.dot(fa), a = Ti.dot(this.direction), l = -Ti.dot(fa), c = Ti.lengthSq(), d = Math.abs(1 - o * o); let h, f, g, x; if (d > 0) if (h = o * l - a, f = o * a - l, x = s * d, h >= 0) if (f >= -x) if (f <= x) { const y = 1 / d; h *= y, f *= y, g = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * l) + c } else f = s, h = Math.max(0, -(o * f + a)), g = -h * h + f * (f + 2 * l) + c; else f = -s, h = Math.max(0, -(o * f + a)), g = -h * h + f * (f + 2 * l) + c; else f <= -x ? (h = Math.max(0, -(-o * s + a)), f = h > 0 ? -s : Math.min(Math.max(-s, -l), s), g = -h * h + f * (f + 2 * l) + c) : f <= x ? (h = 0, f = Math.min(Math.max(-s, -l), s), g = f * (f + 2 * l) + c) : (h = Math.max(0, -(o * s + a)), f = h > 0 ? s : Math.min(Math.max(-s, -l), s), g = -h * h + f * (f + 2 * l) + c); else f = o > 0 ? -s : s, h = Math.max(0, -(o * f + a)), g = -h * h + f * (f + 2 * l) + c; return i && i.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(Ic).addScaledVector(fa, f), g } intersectSphere(e, n) { ti.subVectors(e.center, this.origin); const i = ti.dot(this.direction), r = ti.dot(ti) - i * i, s = e.radius * e.radius; if (r > s) return null; const o = Math.sqrt(s - r), a = i - o, l = i + o; return l < 0 ? null : a < 0 ? this.at(l, n) : this.at(a, n) } intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const n = e.normal.dot(this.direction); if (n === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const i = -(this.origin.dot(e.normal) + e.constant) / n; return i >= 0 ? i : null } intersectPlane(e, n) { const i = this.distanceToPlane(e); return i === null ? null : this.at(i, n) } intersectsPlane(e) { const n = e.distanceToPoint(this.origin); return n === 0 || e.normal.dot(this.direction) * n < 0 } intersectBox(e, n) { let i, r, s, o, a, l; const c = 1 / this.direction.x, d = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin; return c >= 0 ? (i = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (i = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), d >= 0 ? (s = (e.min.y - f.y) * d, o = (e.max.y - f.y) * d) : (s = (e.max.y - f.y) * d, o = (e.min.y - f.y) * d), i > o || s > r || ((s > i || isNaN(i)) && (i = s), (o < r || isNaN(r)) && (r = o), h >= 0 ? (a = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), i > l || a > r) || ((a > i || i !== i) && (i = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(i >= 0 ? i : r, n) } intersectsBox(e) { return this.intersectBox(e, ti) !== null } intersectTriangle(e, n, i, r, s) { Nc.subVectors(n, e), ha.subVectors(i, e), Uc.crossVectors(Nc, ha); let o = this.direction.dot(Uc), a; if (o > 0) { if (r) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; Ti.subVectors(this.origin, e); const l = a * this.direction.dot(ha.crossVectors(Ti, ha)); if (l < 0) return null; const c = a * this.direction.dot(Nc.cross(Ti)); if (c < 0 || l + c > o) return null; const d = -a * Ti.dot(Uc); return d < 0 ? null : this.at(d / o, s) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class ct { constructor(e, n, i, r, s, o, a, l, c, d, h, f, g, x, y, p) { ct.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, n, i, r, s, o, a, l, c, d, h, f, g, x, y, p) } set(e, n, i, r, s, o, a, l, c, d, h, f, g, x, y, p) { const u = this.elements; return u[0] = e, u[4] = n, u[8] = i, u[12] = r, u[1] = s, u[5] = o, u[9] = a, u[13] = l, u[2] = c, u[6] = d, u[10] = h, u[14] = f, u[3] = g, u[7] = x, u[11] = y, u[15] = p, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new ct().fromArray(this.elements) } copy(e) { const n = this.elements, i = e.elements; return n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], n[4] = i[4], n[5] = i[5], n[6] = i[6], n[7] = i[7], n[8] = i[8], n[9] = i[9], n[10] = i[10], n[11] = i[11], n[12] = i[12], n[13] = i[13], n[14] = i[14], n[15] = i[15], this } copyPosition(e) { const n = this.elements, i = e.elements; return n[12] = i[12], n[13] = i[13], n[14] = i[14], this } setFromMatrix3(e) { const n = e.elements; return this.set(n[0], n[3], n[6], 0, n[1], n[4], n[7], 0, n[2], n[5], n[8], 0, 0, 0, 0, 1), this } extractBasis(e, n, i) { return e.setFromMatrixColumn(this, 0), n.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this } makeBasis(e, n, i) { return this.set(e.x, n.x, i.x, 0, e.y, n.y, i.y, 0, e.z, n.z, i.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const n = this.elements, i = e.elements, r = 1 / zr.setFromMatrixColumn(e, 0).length(), s = 1 / zr.setFromMatrixColumn(e, 1).length(), o = 1 / zr.setFromMatrixColumn(e, 2).length(); return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * s, n[5] = i[5] * s, n[6] = i[6] * s, n[7] = 0, n[8] = i[8] * o, n[9] = i[9] * o, n[10] = i[10] * o, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this } makeRotationFromEuler(e) { const n = this.elements, i = e.x, r = e.y, s = e.z, o = Math.cos(i), a = Math.sin(i), l = Math.cos(r), c = Math.sin(r), d = Math.cos(s), h = Math.sin(s); if (e.order === "XYZ") { const f = o * d, g = o * h, x = a * d, y = a * h; n[0] = l * d, n[4] = -l * h, n[8] = c, n[1] = g + x * c, n[5] = f - y * c, n[9] = -a * l, n[2] = y - f * c, n[6] = x + g * c, n[10] = o * l } else if (e.order === "YXZ") { const f = l * d, g = l * h, x = c * d, y = c * h; n[0] = f + y * a, n[4] = x * a - g, n[8] = o * c, n[1] = o * h, n[5] = o * d, n[9] = -a, n[2] = g * a - x, n[6] = y + f * a, n[10] = o * l } else if (e.order === "ZXY") { const f = l * d, g = l * h, x = c * d, y = c * h; n[0] = f - y * a, n[4] = -o * h, n[8] = x + g * a, n[1] = g + x * a, n[5] = o * d, n[9] = y - f * a, n[2] = -o * c, n[6] = a, n[10] = o * l } else if (e.order === "ZYX") { const f = o * d, g = o * h, x = a * d, y = a * h; n[0] = l * d, n[4] = x * c - g, n[8] = f * c + y, n[1] = l * h, n[5] = y * c + f, n[9] = g * c - x, n[2] = -c, n[6] = a * l, n[10] = o * l } else if (e.order === "YZX") { const f = o * l, g = o * c, x = a * l, y = a * c; n[0] = l * d, n[4] = y - f * h, n[8] = x * h + g, n[1] = h, n[5] = o * d, n[9] = -a * d, n[2] = -c * d, n[6] = g * h + x, n[10] = f - y * h } else if (e.order === "XZY") { const f = o * l, g = o * c, x = a * l, y = a * c; n[0] = l * d, n[4] = -h, n[8] = c * d, n[1] = f * h + y, n[5] = o * d, n[9] = g * h - x, n[2] = x * h - g, n[6] = a * d, n[10] = y * h + f } return n[3] = 0, n[7] = 0, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(uS, e, dS) } lookAt(e, n, i) { const r = this.elements; return un.subVectors(e, n), un.lengthSq() === 0 && (un.z = 1), un.normalize(), wi.crossVectors(i, un), wi.lengthSq() === 0 && (Math.abs(i.z) === 1 ? un.x += 1e-4 : un.z += 1e-4, un.normalize(), wi.crossVectors(i, un)), wi.normalize(), pa.crossVectors(un, wi), r[0] = wi.x, r[4] = pa.x, r[8] = un.x, r[1] = wi.y, r[5] = pa.y, r[9] = un.y, r[2] = wi.z, r[6] = pa.z, r[10] = un.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, n) { const i = e.elements, r = n.elements, s = this.elements, o = i[0], a = i[4], l = i[8], c = i[12], d = i[1], h = i[5], f = i[9], g = i[13], x = i[2], y = i[6], p = i[10], u = i[14], m = i[3], _ = i[7], S = i[11], R = i[15], A = r[0], w = r[4], P = r[8], X = r[12], v = r[1], T = r[5], H = r[9], B = r[13], q = r[2], ee = r[6], V = r[10], J = r[14], L = r[3], $ = r[7], Z = r[11], oe = r[15]; return s[0] = o * A + a * v + l * q + c * L, s[4] = o * w + a * T + l * ee + c * $, s[8] = o * P + a * H + l * V + c * Z, s[12] = o * X + a * B + l * J + c * oe, s[1] = d * A + h * v + f * q + g * L, s[5] = d * w + h * T + f * ee + g * $, s[9] = d * P + h * H + f * V + g * Z, s[13] = d * X + h * B + f * J + g * oe, s[2] = x * A + y * v + p * q + u * L, s[6] = x * w + y * T + p * ee + u * $, s[10] = x * P + y * H + p * V + u * Z, s[14] = x * X + y * B + p * J + u * oe, s[3] = m * A + _ * v + S * q + R * L, s[7] = m * w + _ * T + S * ee + R * $, s[11] = m * P + _ * H + S * V + R * Z, s[15] = m * X + _ * B + S * J + R * oe, this } multiplyScalar(e) { const n = this.elements; return n[0] *= e, n[4] *= e, n[8] *= e, n[12] *= e, n[1] *= e, n[5] *= e, n[9] *= e, n[13] *= e, n[2] *= e, n[6] *= e, n[10] *= e, n[14] *= e, n[3] *= e, n[7] *= e, n[11] *= e, n[15] *= e, this } determinant() { const e = this.elements, n = e[0], i = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], d = e[2], h = e[6], f = e[10], g = e[14], x = e[3], y = e[7], p = e[11], u = e[15]; return x * (+s * l * h - r * c * h - s * a * f + i * c * f + r * a * g - i * l * g) + y * (+n * l * g - n * c * f + s * o * f - r * o * g + r * c * d - s * l * d) + p * (+n * c * h - n * a * g - s * o * h + i * o * g + s * a * d - i * c * d) + u * (-r * a * d - n * l * h + n * a * f + r * o * h - i * o * f + i * l * d) } transpose() { const e = this.elements; let n; return n = e[1], e[1] = e[4], e[4] = n, n = e[2], e[2] = e[8], e[8] = n, n = e[6], e[6] = e[9], e[9] = n, n = e[3], e[3] = e[12], e[12] = n, n = e[7], e[7] = e[13], e[13] = n, n = e[11], e[11] = e[14], e[14] = n, this } setPosition(e, n, i) { const r = this.elements; return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = n, r[14] = i), this } invert() { const e = this.elements, n = e[0], i = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], d = e[8], h = e[9], f = e[10], g = e[11], x = e[12], y = e[13], p = e[14], u = e[15], m = h * p * c - y * f * c + y * l * g - a * p * g - h * l * u + a * f * u, _ = x * f * c - d * p * c - x * l * g + o * p * g + d * l * u - o * f * u, S = d * y * c - x * h * c + x * a * g - o * y * g - d * a * u + o * h * u, R = x * h * l - d * y * l - x * a * f + o * y * f + d * a * p - o * h * p, A = n * m + i * _ + r * S + s * R; if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const w = 1 / A; return e[0] = m * w, e[1] = (y * f * s - h * p * s - y * r * g + i * p * g + h * r * u - i * f * u) * w, e[2] = (a * p * s - y * l * s + y * r * c - i * p * c - a * r * u + i * l * u) * w, e[3] = (h * l * s - a * f * s - h * r * c + i * f * c + a * r * g - i * l * g) * w, e[4] = _ * w, e[5] = (d * p * s - x * f * s + x * r * g - n * p * g - d * r * u + n * f * u) * w, e[6] = (x * l * s - o * p * s - x * r * c + n * p * c + o * r * u - n * l * u) * w, e[7] = (o * f * s - d * l * s + d * r * c - n * f * c - o * r * g + n * l * g) * w, e[8] = S * w, e[9] = (x * h * s - d * y * s - x * i * g + n * y * g + d * i * u - n * h * u) * w, e[10] = (o * y * s - x * a * s + x * i * c - n * y * c - o * i * u + n * a * u) * w, e[11] = (d * a * s - o * h * s - d * i * c + n * h * c + o * i * g - n * a * g) * w, e[12] = R * w, e[13] = (d * y * r - x * h * r + x * i * f - n * y * f - d * i * p + n * h * p) * w, e[14] = (x * a * r - o * y * r - x * i * l + n * y * l + o * i * p - n * a * p) * w, e[15] = (o * h * r - d * a * r + d * i * l - n * h * l - o * i * f + n * a * f) * w, this } scale(e) { const n = this.elements, i = e.x, r = e.y, s = e.z; return n[0] *= i, n[4] *= r, n[8] *= s, n[1] *= i, n[5] *= r, n[9] *= s, n[2] *= i, n[6] *= r, n[10] *= s, n[3] *= i, n[7] *= r, n[11] *= s, this } getMaxScaleOnAxis() { const e = this.elements, n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(n, i, r)) } makeTranslation(e, n, i) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, n, 0, 0, 1, i, 0, 0, 0, 1), this } makeRotationX(e) { const n = Math.cos(e), i = Math.sin(e); return this.set(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1), this } makeRotationY(e) { const n = Math.cos(e), i = Math.sin(e); return this.set(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const n = Math.cos(e), i = Math.sin(e); return this.set(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, n) { const i = Math.cos(n), r = Math.sin(n), s = 1 - i, o = e.x, a = e.y, l = e.z, c = s * o, d = s * a; return this.set(c * o + i, c * a - r * l, c * l + r * a, 0, c * a + r * l, d * a + i, d * l - r * o, 0, c * l - r * a, d * l + r * o, s * l * l + i, 0, 0, 0, 0, 1), this } makeScale(e, n, i) { return this.set(e, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this } makeShear(e, n, i, r, s, o) { return this.set(1, i, s, 0, e, 1, o, 0, n, r, 1, 0, 0, 0, 0, 1), this } compose(e, n, i) { const r = this.elements, s = n._x, o = n._y, a = n._z, l = n._w, c = s + s, d = o + o, h = a + a, f = s * c, g = s * d, x = s * h, y = o * d, p = o * h, u = a * h, m = l * c, _ = l * d, S = l * h, R = i.x, A = i.y, w = i.z; return r[0] = (1 - (y + u)) * R, r[1] = (g + S) * R, r[2] = (x - _) * R, r[3] = 0, r[4] = (g - S) * A, r[5] = (1 - (f + u)) * A, r[6] = (p + m) * A, r[7] = 0, r[8] = (x + _) * w, r[9] = (p - m) * w, r[10] = (1 - (f + y)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this } decompose(e, n, i) { const r = this.elements; let s = zr.set(r[0], r[1], r[2]).length(); const o = zr.set(r[4], r[5], r[6]).length(), a = zr.set(r[8], r[9], r[10]).length(); this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Dn.copy(this); const c = 1 / s, d = 1 / o, h = 1 / a; return Dn.elements[0] *= c, Dn.elements[1] *= c, Dn.elements[2] *= c, Dn.elements[4] *= d, Dn.elements[5] *= d, Dn.elements[6] *= d, Dn.elements[8] *= h, Dn.elements[9] *= h, Dn.elements[10] *= h, n.setFromRotationMatrix(Dn), i.x = s, i.y = o, i.z = a, this } makePerspective(e, n, i, r, s, o, a = di) { const l = this.elements, c = 2 * s / (n - e), d = 2 * s / (i - r), h = (n + e) / (n - e), f = (i + r) / (i - r); let g, x; if (a === di) g = -(o + s) / (o - s), x = -2 * o * s / (o - s); else if (a === Tl) g = -o / (o - s), x = -o * s / (o - s); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a); return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = d, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = x, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this } makeOrthographic(e, n, i, r, s, o, a = di) { const l = this.elements, c = 1 / (n - e), d = 1 / (i - r), h = 1 / (o - s), f = (n + e) * c, g = (i + r) * d; let x, y; if (a === di) x = (o + s) * h, y = -2 * h; else if (a === Tl) x = s * h, y = -1 * h; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a); return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * d, l[9] = 0, l[13] = -g, l[2] = 0, l[6] = 0, l[10] = y, l[14] = -x, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this } equals(e) { const n = this.elements, i = e.elements; for (let r = 0; r < 16; r++)if (n[r] !== i[r]) return !1; return !0 } fromArray(e, n = 0) { for (let i = 0; i < 16; i++)this.elements[i] = e[i + n]; return this } toArray(e = [], n = 0) { const i = this.elements; return e[n] = i[0], e[n + 1] = i[1], e[n + 2] = i[2], e[n + 3] = i[3], e[n + 4] = i[4], e[n + 5] = i[5], e[n + 6] = i[6], e[n + 7] = i[7], e[n + 8] = i[8], e[n + 9] = i[9], e[n + 10] = i[10], e[n + 11] = i[11], e[n + 12] = i[12], e[n + 13] = i[13], e[n + 14] = i[14], e[n + 15] = i[15], e } } const zr = new U, Dn = new ct, uS = new U(0, 0, 0), dS = new U(1, 1, 1), wi = new U, pa = new U, un = new U, Rp = new ct, Pp = new Rr; class Wn { constructor(e = 0, n = 0, i = 0, r = Wn.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = n, this._z = i, this._order = r } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, n, i, r = this._order) { return this._x = e, this._y = n, this._z = i, this._order = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, n = this._order, i = !0) { const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], d = r[9], h = r[2], f = r[6], g = r[10]; switch (n) { case "XYZ": this._y = Math.asin(Gt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-d, g), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0); break; case "YXZ": this._x = Math.asin(-Gt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(a, g), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0); break; case "ZXY": this._x = Math.asin(Gt(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, g), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s)); break; case "ZYX": this._y = Math.asin(-Gt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, g), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c)); break; case "YZX": this._z = Math.asin(Gt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-d, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(a, g)); break; case "XZY": this._z = Math.asin(-Gt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-d, g), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + n) }return this._order = n, i === !0 && this._onChangeCallback(), this } setFromQuaternion(e, n, i) { return Rp.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Rp, n, i) } setFromVector3(e, n = this._order) { return this.set(e.x, e.y, e.z, n) } reorder(e) { return Pp.setFromEuler(this), this.setFromQuaternion(Pp, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], n = 0) { return e[n] = this._x, e[n + 1] = this._y, e[n + 2] = this._z, e[n + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } Wn.DEFAULT_ORDER = "XYZ"; class jf { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let fS = 0; const bp = new U, Br = new Rr, ni = new ct, ma = new U, Ks = new U, hS = new U, pS = new Rr, Lp = new U(1, 0, 0), Dp = new U(0, 1, 0), Ip = new U(0, 0, 1), Np = { type: "added" }, mS = { type: "removed" }, Hr = { type: "childadded", child: null }, Oc = { type: "childremoved", child: null }; class Nt extends Lr { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: fS++ }), this.uuid = Us(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Nt.DEFAULT_UP.clone(); const e = new U, n = new Wn, i = new Rr, r = new U(1, 1, 1); function s() { i.setFromEuler(n, !1) } function o() { n.setFromQuaternion(i, void 0, !1) } n._onChange(s), i._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: n }, quaternion: { configurable: !0, enumerable: !0, value: i }, scale: { configurable: !0, enumerable: !0, value: r }, modelViewMatrix: { value: new ct }, normalMatrix: { value: new ke } }), this.matrix = new ct, this.matrixWorld = new ct, this.matrixAutoUpdate = Nt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new jf, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, n) { this.quaternion.setFromAxisAngle(e, n) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, n) { return Br.setFromAxisAngle(e, n), this.quaternion.multiply(Br), this } rotateOnWorldAxis(e, n) { return Br.setFromAxisAngle(e, n), this.quaternion.premultiply(Br), this } rotateX(e) { return this.rotateOnAxis(Lp, e) } rotateY(e) { return this.rotateOnAxis(Dp, e) } rotateZ(e) { return this.rotateOnAxis(Ip, e) } translateOnAxis(e, n) { return bp.copy(e).applyQuaternion(this.quaternion), this.position.add(bp.multiplyScalar(n)), this } translateX(e) { return this.translateOnAxis(Lp, e) } translateY(e) { return this.translateOnAxis(Dp, e) } translateZ(e) { return this.translateOnAxis(Ip, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ni.copy(this.matrixWorld).invert()) } lookAt(e, n, i) { e.isVector3 ? ma.copy(e) : ma.set(e, n, i); const r = this.parent; this.updateWorldMatrix(!0, !1), Ks.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ni.lookAt(Ks, ma, this.up) : ni.lookAt(ma, Ks, this.up), this.quaternion.setFromRotationMatrix(ni), r && (ni.extractRotation(r.matrixWorld), Br.setFromRotationMatrix(ni), this.quaternion.premultiply(Br.invert())) } add(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.add(arguments[n]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Np), Hr.child = e, this.dispatchEvent(Hr), Hr.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let i = 0; i < arguments.length; i++)this.remove(arguments[i]); return this } const n = this.children.indexOf(e); return n !== -1 && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent(mS), Oc.child = e, this.dispatchEvent(Oc), Oc.child = null), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), ni.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ni.multiply(e.parent.matrixWorld)), e.applyMatrix4(ni), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Np), Hr.child = e, this.dispatchEvent(Hr), Hr.child = null, this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, n) { if (this[e] === n) return this; for (let i = 0, r = this.children.length; i < r; i++) { const o = this.children[i].getObjectByProperty(e, n); if (o !== void 0) return o } } getObjectsByProperty(e, n, i = []) { this[e] === n && i.push(this); const r = this.children; for (let s = 0, o = r.length; s < o; s++)r[s].getObjectsByProperty(e, n, i); return i } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ks, e, hS), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ks, pS, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const n = this.matrixWorld.elements; return e.set(n[8], n[9], n[10]).normalize() } raycast() { } traverse(e) { e(this); const n = this.children; for (let i = 0, r = n.length; i < r; i++)n[i].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const n = this.children; for (let i = 0, r = n.length; i < r; i++)n[i].traverseVisible(e) } traverseAncestors(e) { const n = this.parent; n !== null && (e(n), n.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0); const n = this.children; for (let i = 0, r = n.length; i < r; i++)n[i].updateMatrixWorld(e) } updateWorldMatrix(e, n) { const i = this.parent; if (e === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), n === !0) { const r = this.children; for (let s = 0, o = r.length; s < o; s++)r[s].updateWorldMatrix(!1, !0) } } toJSON(e) { const n = e === void 0 || typeof e == "string", i = {}; n && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); const r = {}; r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map(a => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center.toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() })); function s(a, l) { return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { r.geometry = s(e.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const l = a.shapes; if (Array.isArray(l)) for (let c = 0, d = l.length; c < d; c++) { const h = l[c]; s(e.shapes, h) } else s(e.shapes, l) } } if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const a = []; for (let l = 0, c = this.material.length; l < c; l++)a.push(s(e.materials, this.material[l])); r.material = a } else r.material = s(e.materials, this.material); if (this.children.length > 0) { r.children = []; for (let a = 0; a < this.children.length; a++)r.children.push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { r.animations = []; for (let a = 0; a < this.animations.length; a++) { const l = this.animations[a]; r.animations.push(s(e.animations, l)) } } if (n) { const a = o(e.geometries), l = o(e.materials), c = o(e.textures), d = o(e.images), h = o(e.shapes), f = o(e.skeletons), g = o(e.animations), x = o(e.nodes); a.length > 0 && (i.geometries = a), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), d.length > 0 && (i.images = d), h.length > 0 && (i.shapes = h), f.length > 0 && (i.skeletons = f), g.length > 0 && (i.animations = g), x.length > 0 && (i.nodes = x) } return i.object = r, i; function o(a) { const l = []; for (const c in a) { const d = a[c]; delete d.metadata, l.push(d) } return l } } clone(e) { return new this.constructor().copy(this, e) } copy(e, n = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), n === !0) for (let i = 0; i < e.children.length; i++) { const r = e.children[i]; this.add(r.clone()) } return this } } Nt.DEFAULT_UP = new U(0, 1, 0); Nt.DEFAULT_MATRIX_AUTO_UPDATE = !0; Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const In = new U, ii = new U, Fc = new U, ri = new U, Vr = new U, Gr = new U, Up = new U, kc = new U, zc = new U, Bc = new U, Hc = new gt, Vc = new gt, Gc = new gt; class kn { constructor(e = new U, n = new U, i = new U) { this.a = e, this.b = n, this.c = i } static getNormal(e, n, i, r) { r.subVectors(i, n), In.subVectors(e, n), r.cross(In); const s = r.lengthSq(); return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0) } static getBarycoord(e, n, i, r, s) { In.subVectors(r, n), ii.subVectors(i, n), Fc.subVectors(e, n); const o = In.dot(In), a = In.dot(ii), l = In.dot(Fc), c = ii.dot(ii), d = ii.dot(Fc), h = o * c - a * a; if (h === 0) return s.set(0, 0, 0), null; const f = 1 / h, g = (c * l - a * d) * f, x = (o * d - a * l) * f; return s.set(1 - g - x, x, g) } static containsPoint(e, n, i, r) { return this.getBarycoord(e, n, i, r, ri) === null ? !1 : ri.x >= 0 && ri.y >= 0 && ri.x + ri.y <= 1 } static getInterpolation(e, n, i, r, s, o, a, l) { return this.getBarycoord(e, n, i, r, ri) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, ri.x), l.addScaledVector(o, ri.y), l.addScaledVector(a, ri.z), l) } static getInterpolatedAttribute(e, n, i, r, s, o) { return Hc.setScalar(0), Vc.setScalar(0), Gc.setScalar(0), Hc.fromBufferAttribute(e, n), Vc.fromBufferAttribute(e, i), Gc.fromBufferAttribute(e, r), o.setScalar(0), o.addScaledVector(Hc, s.x), o.addScaledVector(Vc, s.y), o.addScaledVector(Gc, s.z), o } static isFrontFacing(e, n, i, r) { return In.subVectors(i, n), ii.subVectors(e, n), In.cross(ii).dot(r) < 0 } set(e, n, i) { return this.a.copy(e), this.b.copy(n), this.c.copy(i), this } setFromPointsAndIndices(e, n, i, r) { return this.a.copy(e[n]), this.b.copy(e[i]), this.c.copy(e[r]), this } setFromAttributeAndIndices(e, n, i, r) { return this.a.fromBufferAttribute(e, n), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, r), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return In.subVectors(this.c, this.b), ii.subVectors(this.a, this.b), In.cross(ii).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return kn.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, n) { return kn.getBarycoord(e, this.a, this.b, this.c, n) } getInterpolation(e, n, i, r, s) { return kn.getInterpolation(e, this.a, this.b, this.c, n, i, r, s) } containsPoint(e) { return kn.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return kn.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, n) { const i = this.a, r = this.b, s = this.c; let o, a; Vr.subVectors(r, i), Gr.subVectors(s, i), kc.subVectors(e, i); const l = Vr.dot(kc), c = Gr.dot(kc); if (l <= 0 && c <= 0) return n.copy(i); zc.subVectors(e, r); const d = Vr.dot(zc), h = Gr.dot(zc); if (d >= 0 && h <= d) return n.copy(r); const f = l * h - d * c; if (f <= 0 && l >= 0 && d <= 0) return o = l / (l - d), n.copy(i).addScaledVector(Vr, o); Bc.subVectors(e, s); const g = Vr.dot(Bc), x = Gr.dot(Bc); if (x >= 0 && g <= x) return n.copy(s); const y = g * c - l * x; if (y <= 0 && c >= 0 && x <= 0) return a = c / (c - x), n.copy(i).addScaledVector(Gr, a); const p = d * x - g * h; if (p <= 0 && h - d >= 0 && g - x >= 0) return Up.subVectors(s, r), a = (h - d) / (h - d + (g - x)), n.copy(r).addScaledVector(Up, a); const u = 1 / (p + y + f); return o = y * u, a = f * u, n.copy(i).addScaledVector(Vr, o).addScaledVector(Gr, a) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } const tv = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Ai = { h: 0, s: 0, l: 0 }, ga = { h: 0, s: 0, l: 0 }; function Wc(t, e, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * 6 * (2 / 3 - n) : t } class je { constructor(e, n, i) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, n, i) } set(e, n, i) { if (n === void 0 && i === void 0) { const r = e; r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r) } else this.setRGB(e, n, i); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, n = Yn) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Qe.toWorkingColorSpace(this, n), this } setRGB(e, n, i, r = Qe.workingColorSpace) { return this.r = e, this.g = n, this.b = i, Qe.toWorkingColorSpace(this, r), this } setHSL(e, n, i, r = Qe.workingColorSpace) { if (e = Xf(e, 1), n = Gt(n, 0, 1), i = Gt(i, 0, 1), n === 0) this.r = this.g = this.b = i; else { const s = i <= .5 ? i * (1 + n) : i + n - i * n, o = 2 * i - s; this.r = Wc(o, s, e + 1 / 3), this.g = Wc(o, s, e), this.b = Wc(o, s, e - 1 / 3) } return Qe.toWorkingColorSpace(this, r), this } setStyle(e, n = Yn) { function i(s) { s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let r; if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) { let s; const o = r[1], a = r[2]; switch (o) { case "rgb": case "rgba": if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, n); if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, n); break; case "hsl": case "hsla": if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, n); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) { const s = r[1], o = s.length; if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, n); if (o === 6) return this.setHex(parseInt(s, 16), n); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, n); return this } setColorName(e, n = Yn) { const i = tv[e.toLowerCase()]; return i !== void 0 ? this.setHex(i, n) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = vs(e.r), this.g = vs(e.g), this.b = vs(e.b), this } copyLinearToSRGB(e) { return this.r = Rc(e.r), this.g = Rc(e.g), this.b = Rc(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = Yn) { return Qe.fromWorkingColorSpace(Bt.copy(this), e), Math.round(Gt(Bt.r * 255, 0, 255)) * 65536 + Math.round(Gt(Bt.g * 255, 0, 255)) * 256 + Math.round(Gt(Bt.b * 255, 0, 255)) } getHexString(e = Yn) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, n = Qe.workingColorSpace) { Qe.fromWorkingColorSpace(Bt.copy(this), n); const i = Bt.r, r = Bt.g, s = Bt.b, o = Math.max(i, r, s), a = Math.min(i, r, s); let l, c; const d = (a + o) / 2; if (a === o) l = 0, c = 0; else { const h = o - a; switch (c = d <= .5 ? h / (o + a) : h / (2 - o - a), o) { case i: l = (r - s) / h + (r < s ? 6 : 0); break; case r: l = (s - i) / h + 2; break; case s: l = (i - r) / h + 4; break }l /= 6 } return e.h = l, e.s = c, e.l = d, e } getRGB(e, n = Qe.workingColorSpace) { return Qe.fromWorkingColorSpace(Bt.copy(this), n), e.r = Bt.r, e.g = Bt.g, e.b = Bt.b, e } getStyle(e = Yn) { Qe.fromWorkingColorSpace(Bt.copy(this), e); const n = Bt.r, i = Bt.g, r = Bt.b; return e !== Yn ? `color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(n * 255)},${Math.round(i * 255)},${Math.round(r * 255)})` } offsetHSL(e, n, i) { return this.getHSL(Ai), this.setHSL(Ai.h + e, Ai.s + n, Ai.l + i) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, n) { return this.r = e.r + n.r, this.g = e.g + n.g, this.b = e.b + n.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, n) { return this.r += (e.r - this.r) * n, this.g += (e.g - this.g) * n, this.b += (e.b - this.b) * n, this } lerpColors(e, n, i) { return this.r = e.r + (n.r - e.r) * i, this.g = e.g + (n.g - e.g) * i, this.b = e.b + (n.b - e.b) * i, this } lerpHSL(e, n) { this.getHSL(Ai), e.getHSL(ga); const i = po(Ai.h, ga.h, n), r = po(Ai.s, ga.s, n), s = po(Ai.l, ga.l, n); return this.setHSL(i, r, s), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const n = this.r, i = this.g, r = this.b, s = e.elements; return this.r = s[0] * n + s[3] * i + s[6] * r, this.g = s[1] * n + s[4] * i + s[7] * r, this.b = s[2] * n + s[5] * i + s[8] * r, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, n = 0) { return this.r = e[n], this.g = e[n + 1], this.b = e[n + 2], this } toArray(e = [], n = 0) { return e[n] = this.r, e[n + 1] = this.g, e[n + 2] = this.b, e } fromBufferAttribute(e, n) { return this.r = e.getX(n), this.g = e.getY(n), this.b = e.getZ(n), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } const Bt = new je; je.NAMES = tv; let gS = 0; class Os extends Lr { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: gS++ }), this.uuid = Us(), this.name = "", this.type = "Material", this.blending = gs, this.side = $i, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Ju, this.blendDst = ed, this.blendEquation = dr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new je(0, 0, 0), this.blendAlpha = 0, this.depthFunc = As, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = yp, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Nr, this.stencilZFail = Nr, this.stencilZPass = Nr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const n in e) { const i = e[n]; if (i === void 0) { console.warn(`THREE.Material: parameter '${n}' has value of undefined.`); continue } const r = this[n]; if (r === void 0) { console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`); continue } r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[n] = i } } toJSON(e) { const n = e === void 0 || typeof e == "string"; n && (e = { textures: {}, images: {} }); const i = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== gs && (i.blending = this.blending), this.side !== $i && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== Ju && (i.blendSrc = this.blendSrc), this.blendDst !== ed && (i.blendDst = this.blendDst), this.blendEquation !== dr && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== As && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== yp && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Nr && (i.stencilFail = this.stencilFail), this.stencilZFail !== Nr && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Nr && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData); function r(s) { const o = []; for (const a in s) { const l = s[a]; delete l.metadata, o.push(l) } return o } if (n) { const s = r(e.textures), o = r(e.images); s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o) } return i } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const n = e.clippingPlanes; let i = null; if (n !== null) { const r = n.length; i = new Array(r); for (let s = 0; s !== r; ++s)i[s] = n[s].clone() } return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } onBuild() { console.warn("Material: onBuild() has been removed.") } } class mo extends Os { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new je(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wn, this.combine = F_, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const xt = new U, _a = new Ie; class Vn { constructor(e, n, i = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = n, this.count = e !== void 0 ? e.length / n : 0, this.normalized = i, this.usage = Sp, this.updateRanges = [], this.gpuType = ui, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } setUsage(e) { return this.usage = e, this } addUpdateRange(e, n) { this.updateRanges.push({ start: e, count: n }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, n, i) { e *= this.itemSize, i *= n.itemSize; for (let r = 0, s = this.itemSize; r < s; r++)this.array[e + r] = n.array[i + r]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let n = 0, i = this.count; n < i; n++)_a.fromBufferAttribute(this, n), _a.applyMatrix3(e), this.setXY(n, _a.x, _a.y); else if (this.itemSize === 3) for (let n = 0, i = this.count; n < i; n++)xt.fromBufferAttribute(this, n), xt.applyMatrix3(e), this.setXYZ(n, xt.x, xt.y, xt.z); return this } applyMatrix4(e) { for (let n = 0, i = this.count; n < i; n++)xt.fromBufferAttribute(this, n), xt.applyMatrix4(e), this.setXYZ(n, xt.x, xt.y, xt.z); return this } applyNormalMatrix(e) { for (let n = 0, i = this.count; n < i; n++)xt.fromBufferAttribute(this, n), xt.applyNormalMatrix(e), this.setXYZ(n, xt.x, xt.y, xt.z); return this } transformDirection(e) { for (let n = 0, i = this.count; n < i; n++)xt.fromBufferAttribute(this, n), xt.transformDirection(e), this.setXYZ(n, xt.x, xt.y, xt.z); return this } set(e, n = 0) { return this.array.set(e, n), this } getComponent(e, n) { let i = this.array[e * this.itemSize + n]; return this.normalized && (i = qr(i, this.array)), i } setComponent(e, n, i) { return this.normalized && (i = Xt(i, this.array)), this.array[e * this.itemSize + n] = i, this } getX(e) { let n = this.array[e * this.itemSize]; return this.normalized && (n = qr(n, this.array)), n } setX(e, n) { return this.normalized && (n = Xt(n, this.array)), this.array[e * this.itemSize] = n, this } getY(e) { let n = this.array[e * this.itemSize + 1]; return this.normalized && (n = qr(n, this.array)), n } setY(e, n) { return this.normalized && (n = Xt(n, this.array)), this.array[e * this.itemSize + 1] = n, this } getZ(e) { let n = this.array[e * this.itemSize + 2]; return this.normalized && (n = qr(n, this.array)), n } setZ(e, n) { return this.normalized && (n = Xt(n, this.array)), this.array[e * this.itemSize + 2] = n, this } getW(e) { let n = this.array[e * this.itemSize + 3]; return this.normalized && (n = qr(n, this.array)), n } setW(e, n) { return this.normalized && (n = Xt(n, this.array)), this.array[e * this.itemSize + 3] = n, this } setXY(e, n, i) { return e *= this.itemSize, this.normalized && (n = Xt(n, this.array), i = Xt(i, this.array)), this.array[e + 0] = n, this.array[e + 1] = i, this } setXYZ(e, n, i, r) { return e *= this.itemSize, this.normalized && (n = Xt(n, this.array), i = Xt(i, this.array), r = Xt(r, this.array)), this.array[e + 0] = n, this.array[e + 1] = i, this.array[e + 2] = r, this } setXYZW(e, n, i, r, s) { return e *= this.itemSize, this.normalized && (n = Xt(n, this.array), i = Xt(i, this.array), r = Xt(r, this.array), s = Xt(s, this.array)), this.array[e + 0] = n, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = s, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== Sp && (e.usage = this.usage), e } } class nv extends Vn { constructor(e, n, i) { super(new Uint16Array(e), n, i) } } class iv extends Vn { constructor(e, n, i) { super(new Uint32Array(e), n, i) } } class bt extends Vn { constructor(e, n, i) { super(new Float32Array(e), n, i) } } let _S = 0; const yn = new ct, Xc = new Nt, Wr = new U, dn = new Ho, $s = new Ho, Ct = new U; class gn extends Lr { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _S++ }), this.uuid = Us(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (Q_(e) ? iv : nv)(e, 1) : this.index = e, this } getAttribute(e) { return this.attributes[e] } setAttribute(e, n) { return this.attributes[e] = n, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, n, i = 0) { this.groups.push({ start: e, count: n, materialIndex: i }) } clearGroups() { this.groups = [] } setDrawRange(e, n) { this.drawRange.start = e, this.drawRange.count = n } applyMatrix4(e) { const n = this.attributes.position; n !== void 0 && (n.applyMatrix4(e), n.needsUpdate = !0); const i = this.attributes.normal; if (i !== void 0) { const s = new ke().getNormalMatrix(e); i.applyNormalMatrix(s), i.needsUpdate = !0 } const r = this.attributes.tangent; return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return yn.makeRotationFromQuaternion(e), this.applyMatrix4(yn), this } rotateX(e) { return yn.makeRotationX(e), this.applyMatrix4(yn), this } rotateY(e) { return yn.makeRotationY(e), this.applyMatrix4(yn), this } rotateZ(e) { return yn.makeRotationZ(e), this.applyMatrix4(yn), this } translate(e, n, i) { return yn.makeTranslation(e, n, i), this.applyMatrix4(yn), this } scale(e, n, i) { return yn.makeScale(e, n, i), this.applyMatrix4(yn), this } lookAt(e) { return Xc.lookAt(e), Xc.updateMatrix(), this.applyMatrix4(Xc.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Wr).negate(), this.translate(Wr.x, Wr.y, Wr.z), this } setFromPoints(e) { const n = []; for (let i = 0, r = e.length; i < r; i++) { const s = e[i]; n.push(s.x, s.y, s.z || 0) } return this.setAttribute("position", new bt(n, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Ho); const e = this.attributes.position, n = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new U(-1 / 0, -1 / 0, -1 / 0), new U(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), n) for (let i = 0, r = n.length; i < r; i++) { const s = n[i]; dn.setFromBufferAttribute(s), this.morphTargetsRelative ? (Ct.addVectors(this.boundingBox.min, dn.min), this.boundingBox.expandByPoint(Ct), Ct.addVectors(this.boundingBox.max, dn.max), this.boundingBox.expandByPoint(Ct)) : (this.boundingBox.expandByPoint(dn.min), this.boundingBox.expandByPoint(dn.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new jl); const e = this.attributes.position, n = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new U, 1 / 0); return } if (e) { const i = this.boundingSphere.center; if (dn.setFromBufferAttribute(e), n) for (let s = 0, o = n.length; s < o; s++) { const a = n[s]; $s.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ct.addVectors(dn.min, $s.min), dn.expandByPoint(Ct), Ct.addVectors(dn.max, $s.max), dn.expandByPoint(Ct)) : (dn.expandByPoint($s.min), dn.expandByPoint($s.max)) } dn.getCenter(i); let r = 0; for (let s = 0, o = e.count; s < o; s++)Ct.fromBufferAttribute(e, s), r = Math.max(r, i.distanceToSquared(Ct)); if (n) for (let s = 0, o = n.length; s < o; s++) { const a = n[s], l = this.morphTargetsRelative; for (let c = 0, d = a.count; c < d; c++)Ct.fromBufferAttribute(a, c), l && (Wr.fromBufferAttribute(e, c), Ct.add(Wr)), r = Math.max(r, i.distanceToSquared(Ct)) } this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, n = this.attributes; if (e === null || n.position === void 0 || n.normal === void 0 || n.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const i = n.position, r = n.normal, s = n.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Vn(new Float32Array(4 * i.count), 4)); const o = this.getAttribute("tangent"), a = [], l = []; for (let P = 0; P < i.count; P++)a[P] = new U, l[P] = new U; const c = new U, d = new U, h = new U, f = new Ie, g = new Ie, x = new Ie, y = new U, p = new U; function u(P, X, v) { c.fromBufferAttribute(i, P), d.fromBufferAttribute(i, X), h.fromBufferAttribute(i, v), f.fromBufferAttribute(s, P), g.fromBufferAttribute(s, X), x.fromBufferAttribute(s, v), d.sub(c), h.sub(c), g.sub(f), x.sub(f); const T = 1 / (g.x * x.y - x.x * g.y); isFinite(T) && (y.copy(d).multiplyScalar(x.y).addScaledVector(h, -g.y).multiplyScalar(T), p.copy(h).multiplyScalar(g.x).addScaledVector(d, -x.x).multiplyScalar(T), a[P].add(y), a[X].add(y), a[v].add(y), l[P].add(p), l[X].add(p), l[v].add(p)) } let m = this.groups; m.length === 0 && (m = [{ start: 0, count: e.count }]); for (let P = 0, X = m.length; P < X; ++P) { const v = m[P], T = v.start, H = v.count; for (let B = T, q = T + H; B < q; B += 3)u(e.getX(B + 0), e.getX(B + 1), e.getX(B + 2)) } const _ = new U, S = new U, R = new U, A = new U; function w(P) { R.fromBufferAttribute(r, P), A.copy(R); const X = a[P]; _.copy(X), _.sub(R.multiplyScalar(R.dot(X))).normalize(), S.crossVectors(A, X); const T = S.dot(l[P]) < 0 ? -1 : 1; o.setXYZW(P, _.x, _.y, _.z, T) } for (let P = 0, X = m.length; P < X; ++P) { const v = m[P], T = v.start, H = v.count; for (let B = T, q = T + H; B < q; B += 3)w(e.getX(B + 0)), w(e.getX(B + 1)), w(e.getX(B + 2)) } } computeVertexNormals() { const e = this.index, n = this.getAttribute("position"); if (n !== void 0) { let i = this.getAttribute("normal"); if (i === void 0) i = new Vn(new Float32Array(n.count * 3), 3), this.setAttribute("normal", i); else for (let f = 0, g = i.count; f < g; f++)i.setXYZ(f, 0, 0, 0); const r = new U, s = new U, o = new U, a = new U, l = new U, c = new U, d = new U, h = new U; if (e) for (let f = 0, g = e.count; f < g; f += 3) { const x = e.getX(f + 0), y = e.getX(f + 1), p = e.getX(f + 2); r.fromBufferAttribute(n, x), s.fromBufferAttribute(n, y), o.fromBufferAttribute(n, p), d.subVectors(o, s), h.subVectors(r, s), d.cross(h), a.fromBufferAttribute(i, x), l.fromBufferAttribute(i, y), c.fromBufferAttribute(i, p), a.add(d), l.add(d), c.add(d), i.setXYZ(x, a.x, a.y, a.z), i.setXYZ(y, l.x, l.y, l.z), i.setXYZ(p, c.x, c.y, c.z) } else for (let f = 0, g = n.count; f < g; f += 3)r.fromBufferAttribute(n, f + 0), s.fromBufferAttribute(n, f + 1), o.fromBufferAttribute(n, f + 2), d.subVectors(o, s), h.subVectors(r, s), d.cross(h), i.setXYZ(f + 0, d.x, d.y, d.z), i.setXYZ(f + 1, d.x, d.y, d.z), i.setXYZ(f + 2, d.x, d.y, d.z); this.normalizeNormals(), i.needsUpdate = !0 } } normalizeNormals() { const e = this.attributes.normal; for (let n = 0, i = e.count; n < i; n++)Ct.fromBufferAttribute(e, n), Ct.normalize(), e.setXYZ(n, Ct.x, Ct.y, Ct.z) } toNonIndexed() { function e(a, l) { const c = a.array, d = a.itemSize, h = a.normalized, f = new c.constructor(l.length * d); let g = 0, x = 0; for (let y = 0, p = l.length; y < p; y++) { a.isInterleavedBufferAttribute ? g = l[y] * a.data.stride + a.offset : g = l[y] * d; for (let u = 0; u < d; u++)f[x++] = c[g++] } return new Vn(f, d, h) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const n = new gn, i = this.index.array, r = this.attributes; for (const a in r) { const l = r[a], c = e(l, i); n.setAttribute(a, c) } const s = this.morphAttributes; for (const a in s) { const l = [], c = s[a]; for (let d = 0, h = c.length; d < h; d++) { const f = c[d], g = e(f, i); l.push(g) } n.morphAttributes[a] = l } n.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, l = o.length; a < l; a++) { const c = o[a]; n.addGroup(c.start, c.count, c.materialIndex) } return n } toJSON() { const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (e[c] = l[c]); return e } e.data = { attributes: {} }; const n = this.index; n !== null && (e.data.index = { type: n.array.constructor.name, array: Array.prototype.slice.call(n.array) }); const i = this.attributes; for (const l in i) { const c = i[l]; e.data.attributes[l] = c.toJSON(e.data) } const r = {}; let s = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l], d = []; for (let h = 0, f = c.length; h < f; h++) { const g = c[h]; d.push(g.toJSON(e.data)) } d.length > 0 && (r[l] = d, s = !0) } s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups; o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const n = {}; this.name = e.name; const i = e.index; i !== null && this.setIndex(i.clone(n)); const r = e.attributes; for (const c in r) { const d = r[c]; this.setAttribute(c, d.clone(n)) } const s = e.morphAttributes; for (const c in s) { const d = [], h = s[c]; for (let f = 0, g = h.length; f < g; f++)d.push(h[f].clone(n)); this.morphAttributes[c] = d } this.morphTargetsRelative = e.morphTargetsRelative; const o = e.groups; for (let c = 0, d = o.length; c < d; c++) { const h = o[c]; this.addGroup(h.start, h.count, h.materialIndex) } const a = e.boundingBox; a !== null && (this.boundingBox = a.clone()); const l = e.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const Op = new ct, rr = new Yl, va = new jl, Fp = new U, xa = new U, ya = new U, Sa = new U, jc = new U, Ma = new U, kp = new U, Ea = new U; class Ht extends Nt { constructor(e = new gn, n = new mo) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = n, this.updateMorphTargets() } copy(e, n) { return super.copy(e, n), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { const n = this.geometry.morphAttributes, i = Object.keys(n); if (i.length > 0) { const r = n[i[0]]; if (r !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, o = r.length; s < o; s++) { const a = r[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s } } } } getVertexPosition(e, n) { const i = this.geometry, r = i.attributes.position, s = i.morphAttributes.position, o = i.morphTargetsRelative; n.fromBufferAttribute(r, e); const a = this.morphTargetInfluences; if (s && a) { Ma.set(0, 0, 0); for (let l = 0, c = s.length; l < c; l++) { const d = a[l], h = s[l]; d !== 0 && (jc.fromBufferAttribute(h, e), o ? Ma.addScaledVector(jc, d) : Ma.addScaledVector(jc.sub(n), d)) } n.add(Ma) } return n } raycast(e, n) { const i = this.geometry, r = this.material, s = this.matrixWorld; r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), va.copy(i.boundingSphere), va.applyMatrix4(s), rr.copy(e.ray).recast(e.near), !(va.containsPoint(rr.origin) === !1 && (rr.intersectSphere(va, Fp) === null || rr.origin.distanceToSquared(Fp) > (e.far - e.near) ** 2)) && (Op.copy(s).invert(), rr.copy(e.ray).applyMatrix4(Op), !(i.boundingBox !== null && rr.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, n, rr))) } _computeIntersections(e, n, i) { let r; const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, d = s.attributes.uv1, h = s.attributes.normal, f = s.groups, g = s.drawRange; if (a !== null) if (Array.isArray(o)) for (let x = 0, y = f.length; x < y; x++) { const p = f[x], u = o[p.materialIndex], m = Math.max(p.start, g.start), _ = Math.min(a.count, Math.min(p.start + p.count, g.start + g.count)); for (let S = m, R = _; S < R; S += 3) { const A = a.getX(S), w = a.getX(S + 1), P = a.getX(S + 2); r = Ta(this, u, e, i, c, d, h, A, w, P), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = p.materialIndex, n.push(r)) } } else { const x = Math.max(0, g.start), y = Math.min(a.count, g.start + g.count); for (let p = x, u = y; p < u; p += 3) { const m = a.getX(p), _ = a.getX(p + 1), S = a.getX(p + 2); r = Ta(this, o, e, i, c, d, h, m, _, S), r && (r.faceIndex = Math.floor(p / 3), n.push(r)) } } else if (l !== void 0) if (Array.isArray(o)) for (let x = 0, y = f.length; x < y; x++) { const p = f[x], u = o[p.materialIndex], m = Math.max(p.start, g.start), _ = Math.min(l.count, Math.min(p.start + p.count, g.start + g.count)); for (let S = m, R = _; S < R; S += 3) { const A = S, w = S + 1, P = S + 2; r = Ta(this, u, e, i, c, d, h, A, w, P), r && (r.faceIndex = Math.floor(S / 3), r.face.materialIndex = p.materialIndex, n.push(r)) } } else { const x = Math.max(0, g.start), y = Math.min(l.count, g.start + g.count); for (let p = x, u = y; p < u; p += 3) { const m = p, _ = p + 1, S = p + 2; r = Ta(this, o, e, i, c, d, h, m, _, S), r && (r.faceIndex = Math.floor(p / 3), n.push(r)) } } } } function vS(t, e, n, i, r, s, o, a) { let l; if (e.side === Kt ? l = i.intersectTriangle(o, s, r, !0, a) : l = i.intersectTriangle(r, s, o, e.side === $i, a), l === null) return null; Ea.copy(a), Ea.applyMatrix4(t.matrixWorld); const c = n.ray.origin.distanceTo(Ea); return c < n.near || c > n.far ? null : { distance: c, point: Ea.clone(), object: t } } function Ta(t, e, n, i, r, s, o, a, l, c) { t.getVertexPosition(a, xa), t.getVertexPosition(l, ya), t.getVertexPosition(c, Sa); const d = vS(t, e, n, i, xa, ya, Sa, kp); if (d) { const h = new U; kn.getBarycoord(kp, xa, ya, Sa, h), r && (d.uv = kn.getInterpolatedAttribute(r, a, l, c, h, new Ie)), s && (d.uv1 = kn.getInterpolatedAttribute(s, a, l, c, h, new Ie)), o && (d.normal = kn.getInterpolatedAttribute(o, a, l, c, h, new U), d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1)); const f = { a, b: l, c, normal: new U, materialIndex: 0 }; kn.getNormal(xa, ya, Sa, f.normal), d.face = f, d.barycoord = h } return d } class Vo extends gn { constructor(e = 1, n = 1, i = 1, r = 1, s = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: n, depth: i, widthSegments: r, heightSegments: s, depthSegments: o }; const a = this; r = Math.floor(r), s = Math.floor(s), o = Math.floor(o); const l = [], c = [], d = [], h = []; let f = 0, g = 0; x("z", "y", "x", -1, -1, i, n, e, o, s, 0), x("z", "y", "x", 1, -1, i, n, -e, o, s, 1), x("x", "z", "y", 1, 1, e, i, n, r, o, 2), x("x", "z", "y", 1, -1, e, i, -n, r, o, 3), x("x", "y", "z", 1, -1, e, n, i, r, s, 4), x("x", "y", "z", -1, -1, e, n, -i, r, s, 5), this.setIndex(l), this.setAttribute("position", new bt(c, 3)), this.setAttribute("normal", new bt(d, 3)), this.setAttribute("uv", new bt(h, 2)); function x(y, p, u, m, _, S, R, A, w, P, X) { const v = S / w, T = R / P, H = S / 2, B = R / 2, q = A / 2, ee = w + 1, V = P + 1; let J = 0, L = 0; const $ = new U; for (let Z = 0; Z < V; Z++) { const oe = Z * T - B; for (let we = 0; we < ee; we++) { const Ve = we * v - H; $[y] = Ve * m, $[p] = oe * _, $[u] = q, c.push($.x, $.y, $.z), $[y] = 0, $[p] = 0, $[u] = A > 0 ? 1 : -1, d.push($.x, $.y, $.z), h.push(we / w), h.push(1 - Z / P), J += 1 } } for (let Z = 0; Z < P; Z++)for (let oe = 0; oe < w; oe++) { const we = f + oe + ee * Z, Ve = f + oe + ee * (Z + 1), j = f + (oe + 1) + ee * (Z + 1), te = f + (oe + 1) + ee * Z; l.push(we, Ve, te), l.push(Ve, j, te), L += 6 } a.addGroup(g, L, X), g += L, f += J } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Vo(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function Ls(t) { const e = {}; for (const n in t) { e[n] = {}; for (const i in t[n]) { const r = t[n][i]; r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][i] = null) : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r } } return e } function jt(t) { const e = {}; for (let n = 0; n < t.length; n++) { const i = Ls(t[n]); for (const r in i) e[r] = i[r] } return e } function xS(t) { const e = []; for (let n = 0; n < t.length; n++)e.push(t[n].clone()); return e } function rv(t) { const e = t.getRenderTarget(); return e === null ? t.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Qe.workingColorSpace } const yS = { clone: Ls, merge: jt }; var SS = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, MS = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class vi extends Os { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = SS, this.fragmentShader = MS, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ls(e.uniforms), this.uniformsGroups = xS(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const n = super.toJSON(e); n.glslVersion = this.glslVersion, n.uniforms = {}; for (const r in this.uniforms) { const o = this.uniforms[r].value; o && o.isTexture ? n.uniforms[r] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? n.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? n.uniforms[r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? n.uniforms[r] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? n.uniforms[r] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? n.uniforms[r] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? n.uniforms[r] = { type: "m4", value: o.toArray() } : n.uniforms[r] = { value: o } } Object.keys(this.defines).length > 0 && (n.defines = this.defines), n.vertexShader = this.vertexShader, n.fragmentShader = this.fragmentShader, n.lights = this.lights, n.clipping = this.clipping; const i = {}; for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0); return Object.keys(i).length > 0 && (n.extensions = i), n } } class sv extends Nt { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ct, this.projectionMatrix = new ct, this.projectionMatrixInverse = new ct, this.coordinateSystem = di } copy(e, n) { return super.copy(e, n), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, n) { super.updateWorldMatrix(e, n), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } const Ci = new U, zp = new Ie, Bp = new Ie; class En extends sv { constructor(e = 50, n = 1, i = .1, r = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = r, this.focus = 10, this.aspect = n, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, n) { return super.copy(e, n), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const n = .5 * this.getFilmHeight() / e; this.fov = No * 2 * Math.atan(n), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(ho * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return No * 2 * Math.atan(Math.tan(ho * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, n, i) { Ci.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(Ci.x, Ci.y).multiplyScalar(-e / Ci.z), Ci.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), i.set(Ci.x, Ci.y).multiplyScalar(-e / Ci.z) } getViewSize(e, n) { return this.getViewBounds(e, zp, Bp), n.subVectors(Bp, zp) } setViewOffset(e, n, i, r, s, o) { this.aspect = e / n, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = n, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let n = e * Math.tan(ho * .5 * this.fov) / this.zoom, i = 2 * n, r = this.aspect * i, s = -.5 * r; const o = this.view; if (this.view !== null && this.view.enabled) { const l = o.fullWidth, c = o.fullHeight; s += o.offsetX * r / l, n -= o.offsetY * i / c, r *= o.width / l, i *= o.height / c } const a = this.filmOffset; a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, n, n - i, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const n = super.toJSON(e); return n.object.fov = this.fov, n.object.zoom = this.zoom, n.object.near = this.near, n.object.far = this.far, n.object.focus = this.focus, n.object.aspect = this.aspect, this.view !== null && (n.object.view = Object.assign({}, this.view)), n.object.filmGauge = this.filmGauge, n.object.filmOffset = this.filmOffset, n } } const Xr = -90, jr = 1; class ES extends Nt { constructor(e, n, i) { super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0; const r = new En(Xr, jr, e, n); r.layers = this.layers, this.add(r); const s = new En(Xr, jr, e, n); s.layers = this.layers, this.add(s); const o = new En(Xr, jr, e, n); o.layers = this.layers, this.add(o); const a = new En(Xr, jr, e, n); a.layers = this.layers, this.add(a); const l = new En(Xr, jr, e, n); l.layers = this.layers, this.add(l); const c = new En(Xr, jr, e, n); c.layers = this.layers, this.add(c) } updateCoordinateSystem() { const e = this.coordinateSystem, n = this.children.concat(), [i, r, s, o, a, l] = n; for (const c of n) this.remove(c); if (e === di) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1); else if (e === Tl) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const c of n) this.add(c), c.updateMatrixWorld() } update(e, n) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: i, activeMipmapLevel: r } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); const [s, o, a, l, c, d] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), g = e.getActiveMipmapLevel(), x = e.xr.enabled; e.xr.enabled = !1; const y = i.texture.generateMipmaps; i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0, r), e.render(n, s), e.setRenderTarget(i, 1, r), e.render(n, o), e.setRenderTarget(i, 2, r), e.render(n, a), e.setRenderTarget(i, 3, r), e.render(n, l), e.setRenderTarget(i, 4, r), e.render(n, c), i.texture.generateMipmaps = y, e.setRenderTarget(i, 5, r), e.render(n, d), e.setRenderTarget(h, f, g), e.xr.enabled = x, i.texture.needsPMREMUpdate = !0 } } class ov extends $t { constructor(e, n, i, r, s, o, a, l, c, d) { e = e !== void 0 ? e : [], n = n !== void 0 ? n : Cs, super(e, n, i, r, s, o, a, l, c, d), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class TS extends Cr {
	constructor(e = 1, n = {}) { super(e, e, n), this.isWebGLCubeRenderTarget = !0; const i = { width: e, height: e, depth: 1 }, r = [i, i, i, i, i, i]; this.texture = new ov(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Fn } fromEquirectangularTexture(e, n) {
		this.texture.type = n.type, this.texture.colorSpace = n.colorSpace, this.texture.generateMipmaps = n.generateMipmaps, this.texture.minFilter = n.minFilter, this.texture.magFilter = n.magFilter; const i = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, r = new Vo(5, 5, 5), s = new vi({ name: "CubemapFromEquirect", uniforms: Ls(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: Kt, blending: ji }); s.uniforms.tEquirect.value = n; const o = new Ht(r, s), a = n.minFilter; return n.minFilter === _r && (n.minFilter = Fn), new ES(1, 10, this).update(e, o), n.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	} clear(e, n, i, r) { const s = e.getRenderTarget(); for (let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(n, i, r); e.setRenderTarget(s) }
} const Yc = new U, wS = new U, AS = new ke; class Li { constructor(e = new U(1, 0, 0), n = 0) { this.isPlane = !0, this.normal = e, this.constant = n } set(e, n) { return this.normal.copy(e), this.constant = n, this } setComponents(e, n, i, r) { return this.normal.set(e, n, i), this.constant = r, this } setFromNormalAndCoplanarPoint(e, n) { return this.normal.copy(e), this.constant = -n.dot(this.normal), this } setFromCoplanarPoints(e, n, i) { const r = Yc.subVectors(i, n).cross(wS.subVectors(e, n)).normalize(); return this.setFromNormalAndCoplanarPoint(r, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, n) { return n.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, n) { const i = e.delta(Yc), r = this.normal.dot(i); if (r === 0) return this.distanceToPoint(e.start) === 0 ? n.copy(e.start) : null; const s = -(e.start.dot(this.normal) + this.constant) / r; return s < 0 || s > 1 ? null : n.copy(e.start).addScaledVector(i, s) } intersectsLine(e) { const n = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end); return n < 0 && i > 0 || i < 0 && n > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, n) { const i = n || AS.getNormalMatrix(e), r = this.coplanarPoint(Yc).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize(); return this.constant = -r.dot(s), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const sr = new jl, wa = new U; class Yf { constructor(e = new Li, n = new Li, i = new Li, r = new Li, s = new Li, o = new Li) { this.planes = [e, n, i, r, s, o] } set(e, n, i, r, s, o) { const a = this.planes; return a[0].copy(e), a[1].copy(n), a[2].copy(i), a[3].copy(r), a[4].copy(s), a[5].copy(o), this } copy(e) { const n = this.planes; for (let i = 0; i < 6; i++)n[i].copy(e.planes[i]); return this } setFromProjectionMatrix(e, n = di) { const i = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], d = r[5], h = r[6], f = r[7], g = r[8], x = r[9], y = r[10], p = r[11], u = r[12], m = r[13], _ = r[14], S = r[15]; if (i[0].setComponents(l - s, f - c, p - g, S - u).normalize(), i[1].setComponents(l + s, f + c, p + g, S + u).normalize(), i[2].setComponents(l + o, f + d, p + x, S + m).normalize(), i[3].setComponents(l - o, f - d, p - x, S - m).normalize(), i[4].setComponents(l - a, f - h, p - y, S - _).normalize(), n === di) i[5].setComponents(l + a, f + h, p + y, S + _).normalize(); else if (n === Tl) i[5].setComponents(a, h, y, _).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + n); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { const n = e.geometry; n.boundingSphere === null && n.computeBoundingSphere(), sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(sr) } intersectsSprite(e) { return sr.center.set(0, 0, 0), sr.radius = .7071067811865476, sr.applyMatrix4(e.matrixWorld), this.intersectsSphere(sr) } intersectsSphere(e) { const n = this.planes, i = e.center, r = -e.radius; for (let s = 0; s < 6; s++)if (n[s].distanceToPoint(i) < r) return !1; return !0 } intersectsBox(e) { const n = this.planes; for (let i = 0; i < 6; i++) { const r = n[i]; if (wa.x = r.normal.x > 0 ? e.max.x : e.min.x, wa.y = r.normal.y > 0 ? e.max.y : e.min.y, wa.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(wa) < 0) return !1 } return !0 } containsPoint(e) { const n = this.planes; for (let i = 0; i < 6; i++)if (n[i].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } function av() { let t = null, e = !1, n = null, i = null; function r(s, o) { n(s, o), i = t.requestAnimationFrame(r) } return { start: function () { e !== !0 && n !== null && (i = t.requestAnimationFrame(r), e = !0) }, stop: function () { t.cancelAnimationFrame(i), e = !1 }, setAnimationLoop: function (s) { n = s }, setContext: function (s) { t = s } } } function CS(t) { const e = new WeakMap; function n(a, l) { const c = a.array, d = a.usage, h = c.byteLength, f = t.createBuffer(); t.bindBuffer(l, f), t.bufferData(l, c, d), a.onUploadCallback(); let g; if (c instanceof Float32Array) g = t.FLOAT; else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? g = t.HALF_FLOAT : g = t.UNSIGNED_SHORT; else if (c instanceof Int16Array) g = t.SHORT; else if (c instanceof Uint32Array) g = t.UNSIGNED_INT; else if (c instanceof Int32Array) g = t.INT; else if (c instanceof Int8Array) g = t.BYTE; else if (c instanceof Uint8Array) g = t.UNSIGNED_BYTE; else if (c instanceof Uint8ClampedArray) g = t.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c); return { buffer: f, type: g, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: h } } function i(a, l, c) { const d = l.array, h = l.updateRanges; if (t.bindBuffer(c, a), h.length === 0) t.bufferSubData(c, 0, d); else { h.sort((g, x) => g.start - x.start); let f = 0; for (let g = 1; g < h.length; g++) { const x = h[f], y = h[g]; y.start <= x.start + x.count + 1 ? x.count = Math.max(x.count, y.start + y.count - x.start) : (++f, h[f] = y) } h.length = f + 1; for (let g = 0, x = h.length; g < x; g++) { const y = h[g]; t.bufferSubData(c, y.start * d.BYTES_PER_ELEMENT, d, y.start, y.count) } l.clearUpdateRanges() } l.onUploadCallback() } function r(a) { return a.isInterleavedBufferAttribute && (a = a.data), e.get(a) } function s(a) { a.isInterleavedBufferAttribute && (a = a.data); const l = e.get(a); l && (t.deleteBuffer(l.buffer), e.delete(a)) } function o(a, l) { if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) { const d = e.get(a); (!d || d.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version }); return } const c = e.get(a); if (c === void 0) e.set(a, n(a, l)); else if (c.version < a.version) { if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); i(c.buffer, a, l), c.version = a.version } } return { get: r, remove: s, update: o } } class ql extends gn { constructor(e = 1, n = 1, i = 1, r = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: n, widthSegments: i, heightSegments: r }; const s = e / 2, o = n / 2, a = Math.floor(i), l = Math.floor(r), c = a + 1, d = l + 1, h = e / a, f = n / l, g = [], x = [], y = [], p = []; for (let u = 0; u < d; u++) { const m = u * f - o; for (let _ = 0; _ < c; _++) { const S = _ * h - s; x.push(S, -m, 0), y.push(0, 0, 1), p.push(_ / a), p.push(1 - u / l) } } for (let u = 0; u < l; u++)for (let m = 0; m < a; m++) { const _ = m + c * u, S = m + c * (u + 1), R = m + 1 + c * (u + 1), A = m + 1 + c * u; g.push(_, S, A), g.push(S, R, A) } this.setIndex(g), this.setAttribute("position", new bt(x, 3)), this.setAttribute("normal", new bt(y, 3)), this.setAttribute("uv", new bt(p, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ql(e.width, e.height, e.widthSegments, e.heightSegments) } } var RS = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, PS = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, bS = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, LS = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, DS = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, IS = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, NS = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, US = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, OS = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, FS = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, kS = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, zS = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, BS = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, HS = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, VS = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, GS = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, WS = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, XS = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, jS = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, YS = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, qS = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, KS = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, $S = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, ZS = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, QS = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, JS = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, eM = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, tM = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, nM = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, iM = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, rM = "gl_FragColor = linearToOutputTexel( gl_FragColor );", sM = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, oM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, aM = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, lM = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, cM = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, uM = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, dM = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, fM = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, hM = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, pM = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, mM = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, gM = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, _M = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, vM = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, xM = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, yM = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, SM = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, MM = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, EM = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, TM = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wM = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, AM = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, CM = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, RM = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, PM = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, bM = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, LM = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, DM = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, IM = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, NM = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, UM = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, OM = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, FM = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, kM = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, zM = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, BM = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, HM = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, VM = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, GM = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, WM = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, XM = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, jM = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, YM = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, qM = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, KM = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, $M = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, ZM = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, QM = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, JM = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, eE = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, tE = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, nE = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, iE = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, rE = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, sE = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, oE = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, aE = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, lE = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, cE = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, uE = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, dE = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, fE = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, hE = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, pE = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, mE = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, gE = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, _E = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, vE = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, xE = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, yE = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, SE = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, ME = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, EE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, TE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, wE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, AE = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const CE = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, RE = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, PE = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, bE = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, LE = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, DE = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, IE = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, NE = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, UE = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, OE = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, FE = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, kE = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, zE = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, BE = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, HE = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, VE = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, GE = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, WE = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, XE = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, jE = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, YE = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, qE = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, KE = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, $E = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ZE = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, QE = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, JE = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, eT = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, tT = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, nT = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, iT = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, rT = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, sT = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, oT = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Fe = { alphahash_fragment: RS, alphahash_pars_fragment: PS, alphamap_fragment: bS, alphamap_pars_fragment: LS, alphatest_fragment: DS, alphatest_pars_fragment: IS, aomap_fragment: NS, aomap_pars_fragment: US, batching_pars_vertex: OS, batching_vertex: FS, begin_vertex: kS, beginnormal_vertex: zS, bsdfs: BS, iridescence_fragment: HS, bumpmap_pars_fragment: VS, clipping_planes_fragment: GS, clipping_planes_pars_fragment: WS, clipping_planes_pars_vertex: XS, clipping_planes_vertex: jS, color_fragment: YS, color_pars_fragment: qS, color_pars_vertex: KS, color_vertex: $S, common: ZS, cube_uv_reflection_fragment: QS, defaultnormal_vertex: JS, displacementmap_pars_vertex: eM, displacementmap_vertex: tM, emissivemap_fragment: nM, emissivemap_pars_fragment: iM, colorspace_fragment: rM, colorspace_pars_fragment: sM, envmap_fragment: oM, envmap_common_pars_fragment: aM, envmap_pars_fragment: lM, envmap_pars_vertex: cM, envmap_physical_pars_fragment: yM, envmap_vertex: uM, fog_vertex: dM, fog_pars_vertex: fM, fog_fragment: hM, fog_pars_fragment: pM, gradientmap_pars_fragment: mM, lightmap_pars_fragment: gM, lights_lambert_fragment: _M, lights_lambert_pars_fragment: vM, lights_pars_begin: xM, lights_toon_fragment: SM, lights_toon_pars_fragment: MM, lights_phong_fragment: EM, lights_phong_pars_fragment: TM, lights_physical_fragment: wM, lights_physical_pars_fragment: AM, lights_fragment_begin: CM, lights_fragment_maps: RM, lights_fragment_end: PM, logdepthbuf_fragment: bM, logdepthbuf_pars_fragment: LM, logdepthbuf_pars_vertex: DM, logdepthbuf_vertex: IM, map_fragment: NM, map_pars_fragment: UM, map_particle_fragment: OM, map_particle_pars_fragment: FM, metalnessmap_fragment: kM, metalnessmap_pars_fragment: zM, morphinstance_vertex: BM, morphcolor_vertex: HM, morphnormal_vertex: VM, morphtarget_pars_vertex: GM, morphtarget_vertex: WM, normal_fragment_begin: XM, normal_fragment_maps: jM, normal_pars_fragment: YM, normal_pars_vertex: qM, normal_vertex: KM, normalmap_pars_fragment: $M, clearcoat_normal_fragment_begin: ZM, clearcoat_normal_fragment_maps: QM, clearcoat_pars_fragment: JM, iridescence_pars_fragment: eE, opaque_fragment: tE, packing: nE, premultiplied_alpha_fragment: iE, project_vertex: rE, dithering_fragment: sE, dithering_pars_fragment: oE, roughnessmap_fragment: aE, roughnessmap_pars_fragment: lE, shadowmap_pars_fragment: cE, shadowmap_pars_vertex: uE, shadowmap_vertex: dE, shadowmask_pars_fragment: fE, skinbase_vertex: hE, skinning_pars_vertex: pE, skinning_vertex: mE, skinnormal_vertex: gE, specularmap_fragment: _E, specularmap_pars_fragment: vE, tonemapping_fragment: xE, tonemapping_pars_fragment: yE, transmission_fragment: SE, transmission_pars_fragment: ME, uv_pars_fragment: EE, uv_pars_vertex: TE, uv_vertex: wE, worldpos_vertex: AE, background_vert: CE, background_frag: RE, backgroundCube_vert: PE, backgroundCube_frag: bE, cube_vert: LE, cube_frag: DE, depth_vert: IE, depth_frag: NE, distanceRGBA_vert: UE, distanceRGBA_frag: OE, equirect_vert: FE, equirect_frag: kE, linedashed_vert: zE, linedashed_frag: BE, meshbasic_vert: HE, meshbasic_frag: VE, meshlambert_vert: GE, meshlambert_frag: WE, meshmatcap_vert: XE, meshmatcap_frag: jE, meshnormal_vert: YE, meshnormal_frag: qE, meshphong_vert: KE, meshphong_frag: $E, meshphysical_vert: ZE, meshphysical_frag: QE, meshtoon_vert: JE, meshtoon_frag: eT, points_vert: tT, points_frag: nT, shadow_vert: iT, shadow_frag: rT, sprite_vert: sT, sprite_frag: oT }, de = { common: { diffuse: { value: new je(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new ke }, alphaMap: { value: null }, alphaMapTransform: { value: new ke }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new ke } }, envmap: { envMap: { value: null }, envMapRotation: { value: new ke }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new ke } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new ke } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new ke }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new ke }, normalScale: { value: new Ie(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new ke }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new ke } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new ke } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new ke } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new je(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new je(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new ke }, alphaTest: { value: 0 }, uvTransform: { value: new ke } }, sprite: { diffuse: { value: new je(16777215) }, opacity: { value: 1 }, center: { value: new Ie(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new ke }, alphaMap: { value: null }, alphaMapTransform: { value: new ke }, alphaTest: { value: 0 } } }, qn = { basic: { uniforms: jt([de.common, de.specularmap, de.envmap, de.aomap, de.lightmap, de.fog]), vertexShader: Fe.meshbasic_vert, fragmentShader: Fe.meshbasic_frag }, lambert: { uniforms: jt([de.common, de.specularmap, de.envmap, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.fog, de.lights, { emissive: { value: new je(0) } }]), vertexShader: Fe.meshlambert_vert, fragmentShader: Fe.meshlambert_frag }, phong: { uniforms: jt([de.common, de.specularmap, de.envmap, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.fog, de.lights, { emissive: { value: new je(0) }, specular: { value: new je(1118481) }, shininess: { value: 30 } }]), vertexShader: Fe.meshphong_vert, fragmentShader: Fe.meshphong_frag }, standard: { uniforms: jt([de.common, de.envmap, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.roughnessmap, de.metalnessmap, de.fog, de.lights, { emissive: { value: new je(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Fe.meshphysical_vert, fragmentShader: Fe.meshphysical_frag }, toon: { uniforms: jt([de.common, de.aomap, de.lightmap, de.emissivemap, de.bumpmap, de.normalmap, de.displacementmap, de.gradientmap, de.fog, de.lights, { emissive: { value: new je(0) } }]), vertexShader: Fe.meshtoon_vert, fragmentShader: Fe.meshtoon_frag }, matcap: { uniforms: jt([de.common, de.bumpmap, de.normalmap, de.displacementmap, de.fog, { matcap: { value: null } }]), vertexShader: Fe.meshmatcap_vert, fragmentShader: Fe.meshmatcap_frag }, points: { uniforms: jt([de.points, de.fog]), vertexShader: Fe.points_vert, fragmentShader: Fe.points_frag }, dashed: { uniforms: jt([de.common, de.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Fe.linedashed_vert, fragmentShader: Fe.linedashed_frag }, depth: { uniforms: jt([de.common, de.displacementmap]), vertexShader: Fe.depth_vert, fragmentShader: Fe.depth_frag }, normal: { uniforms: jt([de.common, de.bumpmap, de.normalmap, de.displacementmap, { opacity: { value: 1 } }]), vertexShader: Fe.meshnormal_vert, fragmentShader: Fe.meshnormal_frag }, sprite: { uniforms: jt([de.sprite, de.fog]), vertexShader: Fe.sprite_vert, fragmentShader: Fe.sprite_frag }, background: { uniforms: { uvTransform: { value: new ke }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Fe.background_vert, fragmentShader: Fe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new ke } }, vertexShader: Fe.backgroundCube_vert, fragmentShader: Fe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Fe.cube_vert, fragmentShader: Fe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Fe.equirect_vert, fragmentShader: Fe.equirect_frag }, distanceRGBA: { uniforms: jt([de.common, de.displacementmap, { referencePosition: { value: new U }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Fe.distanceRGBA_vert, fragmentShader: Fe.distanceRGBA_frag }, shadow: { uniforms: jt([de.lights, de.fog, { color: { value: new je(0) }, opacity: { value: 1 } }]), vertexShader: Fe.shadow_vert, fragmentShader: Fe.shadow_frag } }; qn.physical = { uniforms: jt([qn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new ke }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new ke }, clearcoatNormalScale: { value: new Ie(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new ke }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new ke }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new ke }, sheen: { value: 0 }, sheenColor: { value: new je(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new ke }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new ke }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new ke }, transmissionSamplerSize: { value: new Ie }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new ke }, attenuationDistance: { value: 0 }, attenuationColor: { value: new je(0) }, specularColor: { value: new je(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new ke }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new ke }, anisotropyVector: { value: new Ie }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new ke } }]), vertexShader: Fe.meshphysical_vert, fragmentShader: Fe.meshphysical_frag }; const Aa = { r: 0, b: 0, g: 0 }, or = new Wn, aT = new ct; function lT(t, e, n, i, r, s, o) { const a = new je(0); let l = s === !0 ? 0 : 1, c, d, h = null, f = 0, g = null; function x(m) { let _ = m.isScene === !0 ? m.background : null; return _ && _.isTexture && (_ = (m.backgroundBlurriness > 0 ? n : e).get(_)), _ } function y(m) { let _ = !1; const S = x(m); S === null ? u(a, l) : S && S.isColor && (u(S, 1), _ = !0); const R = t.xr.getEnvironmentBlendMode(); R === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (t.autoClear || _) && (i.buffers.depth.setTest(!0), i.buffers.depth.setMask(!0), i.buffers.color.setMask(!0), t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil)) } function p(m, _) { const S = x(_); S && (S.isCubeTexture || S.mapping === Wl) ? (d === void 0 && (d = new Ht(new Vo(1, 1, 1), new vi({ name: "BackgroundCubeMaterial", uniforms: Ls(qn.backgroundCube.uniforms), vertexShader: qn.backgroundCube.vertexShader, fragmentShader: qn.backgroundCube.fragmentShader, side: Kt, depthTest: !1, depthWrite: !1, fog: !1 })), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function (R, A, w) { this.matrixWorld.copyPosition(w.matrixWorld) }, Object.defineProperty(d.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), r.update(d)), or.copy(_.backgroundRotation), or.x *= -1, or.y *= -1, or.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (or.y *= -1, or.z *= -1), d.material.uniforms.envMap.value = S, d.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, d.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, d.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(or)), d.material.toneMapped = Qe.getTransfer(S.colorSpace) !== ot, (h !== S || f !== S.version || g !== t.toneMapping) && (d.material.needsUpdate = !0, h = S, f = S.version, g = t.toneMapping), d.layers.enableAll(), m.unshift(d, d.geometry, d.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new Ht(new ql(2, 2), new vi({ name: "BackgroundMaterial", uniforms: Ls(qn.background.uniforms), vertexShader: qn.background.vertexShader, fragmentShader: qn.background.fragmentShader, side: $i, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), r.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, c.material.toneMapped = Qe.getTransfer(S.colorSpace) !== ot, S.matrixAutoUpdate === !0 && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (h !== S || f !== S.version || g !== t.toneMapping) && (c.material.needsUpdate = !0, h = S, f = S.version, g = t.toneMapping), c.layers.enableAll(), m.unshift(c, c.geometry, c.material, 0, 0, null)) } function u(m, _) { m.getRGB(Aa, rv(t)), i.buffers.color.setClear(Aa.r, Aa.g, Aa.b, _, o) } return { getClearColor: function () { return a }, setClearColor: function (m, _ = 1) { a.set(m), l = _, u(a, l) }, getClearAlpha: function () { return l }, setClearAlpha: function (m) { l = m, u(a, l) }, render: y, addToRenderList: p } } function cT(t, e) { const n = t.getParameter(t.MAX_VERTEX_ATTRIBS), i = {}, r = f(null); let s = r, o = !1; function a(v, T, H, B, q) { let ee = !1; const V = h(B, H, T); s !== V && (s = V, c(s.object)), ee = g(v, B, H, q), ee && x(v, B, H, q), q !== null && e.update(q, t.ELEMENT_ARRAY_BUFFER), (ee || o) && (o = !1, S(v, T, H, B), q !== null && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.get(q).buffer)) } function l() { return t.createVertexArray() } function c(v) { return t.bindVertexArray(v) } function d(v) { return t.deleteVertexArray(v) } function h(v, T, H) { const B = H.wireframe === !0; let q = i[v.id]; q === void 0 && (q = {}, i[v.id] = q); let ee = q[T.id]; ee === void 0 && (ee = {}, q[T.id] = ee); let V = ee[B]; return V === void 0 && (V = f(l()), ee[B] = V), V } function f(v) { const T = [], H = [], B = []; for (let q = 0; q < n; q++)T[q] = 0, H[q] = 0, B[q] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: T, enabledAttributes: H, attributeDivisors: B, object: v, attributes: {}, index: null } } function g(v, T, H, B) { const q = s.attributes, ee = T.attributes; let V = 0; const J = H.getAttributes(); for (const L in J) if (J[L].location >= 0) { const Z = q[L]; let oe = ee[L]; if (oe === void 0 && (L === "instanceMatrix" && v.instanceMatrix && (oe = v.instanceMatrix), L === "instanceColor" && v.instanceColor && (oe = v.instanceColor)), Z === void 0 || Z.attribute !== oe || oe && Z.data !== oe.data) return !0; V++ } return s.attributesNum !== V || s.index !== B } function x(v, T, H, B) { const q = {}, ee = T.attributes; let V = 0; const J = H.getAttributes(); for (const L in J) if (J[L].location >= 0) { let Z = ee[L]; Z === void 0 && (L === "instanceMatrix" && v.instanceMatrix && (Z = v.instanceMatrix), L === "instanceColor" && v.instanceColor && (Z = v.instanceColor)); const oe = {}; oe.attribute = Z, Z && Z.data && (oe.data = Z.data), q[L] = oe, V++ } s.attributes = q, s.attributesNum = V, s.index = B } function y() { const v = s.newAttributes; for (let T = 0, H = v.length; T < H; T++)v[T] = 0 } function p(v) { u(v, 0) } function u(v, T) { const H = s.newAttributes, B = s.enabledAttributes, q = s.attributeDivisors; H[v] = 1, B[v] === 0 && (t.enableVertexAttribArray(v), B[v] = 1), q[v] !== T && (t.vertexAttribDivisor(v, T), q[v] = T) } function m() { const v = s.newAttributes, T = s.enabledAttributes; for (let H = 0, B = T.length; H < B; H++)T[H] !== v[H] && (t.disableVertexAttribArray(H), T[H] = 0) } function _(v, T, H, B, q, ee, V) { V === !0 ? t.vertexAttribIPointer(v, T, H, q, ee) : t.vertexAttribPointer(v, T, H, B, q, ee) } function S(v, T, H, B) { y(); const q = B.attributes, ee = H.getAttributes(), V = T.defaultAttributeValues; for (const J in ee) { const L = ee[J]; if (L.location >= 0) { let $ = q[J]; if ($ === void 0 && (J === "instanceMatrix" && v.instanceMatrix && ($ = v.instanceMatrix), J === "instanceColor" && v.instanceColor && ($ = v.instanceColor)), $ !== void 0) { const Z = $.normalized, oe = $.itemSize, we = e.get($); if (we === void 0) continue; const Ve = we.buffer, j = we.type, te = we.bytesPerElement, me = j === t.INT || j === t.UNSIGNED_INT || $.gpuType === kf; if ($.isInterleavedBufferAttribute) { const le = $.data, Le = le.stride, Ce = $.offset; if (le.isInstancedInterleavedBuffer) { for (let We = 0; We < L.locationSize; We++)u(L.location + We, le.meshPerAttribute); v.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = le.meshPerAttribute * le.count) } else for (let We = 0; We < L.locationSize; We++)p(L.location + We); t.bindBuffer(t.ARRAY_BUFFER, Ve); for (let We = 0; We < L.locationSize; We++)_(L.location + We, oe / L.locationSize, j, Z, Le * te, (Ce + oe / L.locationSize * We) * te, me) } else { if ($.isInstancedBufferAttribute) { for (let le = 0; le < L.locationSize; le++)u(L.location + le, $.meshPerAttribute); v.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = $.meshPerAttribute * $.count) } else for (let le = 0; le < L.locationSize; le++)p(L.location + le); t.bindBuffer(t.ARRAY_BUFFER, Ve); for (let le = 0; le < L.locationSize; le++)_(L.location + le, oe / L.locationSize, j, Z, oe * te, oe / L.locationSize * le * te, me) } } else if (V !== void 0) { const Z = V[J]; if (Z !== void 0) switch (Z.length) { case 2: t.vertexAttrib2fv(L.location, Z); break; case 3: t.vertexAttrib3fv(L.location, Z); break; case 4: t.vertexAttrib4fv(L.location, Z); break; default: t.vertexAttrib1fv(L.location, Z) } } } } m() } function R() { P(); for (const v in i) { const T = i[v]; for (const H in T) { const B = T[H]; for (const q in B) d(B[q].object), delete B[q]; delete T[H] } delete i[v] } } function A(v) { if (i[v.id] === void 0) return; const T = i[v.id]; for (const H in T) { const B = T[H]; for (const q in B) d(B[q].object), delete B[q]; delete T[H] } delete i[v.id] } function w(v) { for (const T in i) { const H = i[T]; if (H[v.id] === void 0) continue; const B = H[v.id]; for (const q in B) d(B[q].object), delete B[q]; delete H[v.id] } } function P() { X(), o = !0, s !== r && (s = r, c(s.object)) } function X() { r.geometry = null, r.program = null, r.wireframe = !1 } return { setup: a, reset: P, resetDefaultState: X, dispose: R, releaseStatesOfGeometry: A, releaseStatesOfProgram: w, initAttributes: y, enableAttribute: p, disableUnusedAttributes: m } } function uT(t, e, n) { let i; function r(c) { i = c } function s(c, d) { t.drawArrays(i, c, d), n.update(d, i, 1) } function o(c, d, h) { h !== 0 && (t.drawArraysInstanced(i, c, d, h), n.update(d, i, h)) } function a(c, d, h) { if (h === 0) return; e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, d, 0, h); let g = 0; for (let x = 0; x < h; x++)g += d[x]; n.update(g, i, 1) } function l(c, d, h, f) { if (h === 0) return; const g = e.get("WEBGL_multi_draw"); if (g === null) for (let x = 0; x < c.length; x++)o(c[x], d[x], f[x]); else { g.multiDrawArraysInstancedWEBGL(i, c, 0, d, 0, f, 0, h); let x = 0; for (let y = 0; y < h; y++)x += d[y]; for (let y = 0; y < f.length; y++)n.update(x, i, f[y]) } } this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l } function dT(t, e, n, i) { let r; function s() { if (r !== void 0) return r; if (e.has("EXT_texture_filter_anisotropic") === !0) { const w = e.get("EXT_texture_filter_anisotropic"); r = t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else r = 0; return r } function o(w) { return !(w !== zn && i.convert(w) !== t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)) } function a(w) { const P = w === Bo && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float")); return !(w !== _i && i.convert(w) !== t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE) && w !== ui && !P) } function l(w) { if (w === "highp") { if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp"; w = "mediump" } return w === "mediump" && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let c = n.precision !== void 0 ? n.precision : "highp"; const d = l(c); d !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", d, "instead."), c = d); const h = n.logarithmicDepthBuffer === !0, f = n.reverseDepthBuffer === !0 && e.has("EXT_clip_control"); if (f === !0) { const w = e.get("EXT_clip_control"); w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT) } const g = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), x = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), y = t.getParameter(t.MAX_TEXTURE_SIZE), p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), u = t.getParameter(t.MAX_VERTEX_ATTRIBS), m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS), _ = t.getParameter(t.MAX_VARYING_VECTORS), S = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS), R = x > 0, A = t.getParameter(t.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: h, reverseDepthBuffer: f, maxTextures: g, maxVertexTextures: x, maxTextureSize: y, maxCubemapSize: p, maxAttributes: u, maxVertexUniforms: m, maxVaryings: _, maxFragmentUniforms: S, vertexTextures: R, maxSamples: A } } function fT(t) { const e = this; let n = null, i = 0, r = !1, s = !1; const o = new Li, a = new ke, l = { value: null, needsUpdate: !1 }; this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (h, f) { const g = h.length !== 0 || f || i !== 0 || r; return r = f, i = h.length, g }, this.beginShadows = function () { s = !0, d(null) }, this.endShadows = function () { s = !1 }, this.setGlobalState = function (h, f) { n = d(h, f, 0) }, this.setState = function (h, f, g) { const x = h.clippingPlanes, y = h.clipIntersection, p = h.clipShadows, u = t.get(h); if (!r || x === null || x.length === 0 || s && !p) s ? d(null) : c(); else { const m = s ? 0 : i, _ = m * 4; let S = u.clippingState || null; l.value = S, S = d(x, f, _, g); for (let R = 0; R !== _; ++R)S[R] = n[R]; u.clippingState = S, this.numIntersection = y ? this.numPlanes : 0, this.numPlanes += m } }; function c() { l.value !== n && (l.value = n, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0 } function d(h, f, g, x) { const y = h !== null ? h.length : 0; let p = null; if (y !== 0) { if (p = l.value, x !== !0 || p === null) { const u = g + y * 4, m = f.matrixWorldInverse; a.getNormalMatrix(m), (p === null || p.length < u) && (p = new Float32Array(u)); for (let _ = 0, S = g; _ !== y; ++_, S += 4)o.copy(h[_]).applyMatrix4(m, a), o.normal.toArray(p, S), p[S + 3] = o.constant } l.value = p, l.needsUpdate = !0 } return e.numPlanes = y, e.numIntersection = 0, p } } function hT(t) { let e = new WeakMap; function n(o, a) { return a === ld ? o.mapping = Cs : a === cd && (o.mapping = Rs), o } function i(o) { if (o && o.isTexture) { const a = o.mapping; if (a === ld || a === cd) if (e.has(o)) { const l = e.get(o).texture; return n(l, o.mapping) } else { const l = o.image; if (l && l.height > 0) { const c = new TS(l.height); return c.fromEquirectangularTexture(t, o), e.set(o, c), o.addEventListener("dispose", r), n(c.texture, o.mapping) } else return null } } return o } function r(o) { const a = o.target; a.removeEventListener("dispose", r); const l = e.get(a); l !== void 0 && (e.delete(a), l.dispose()) } function s() { e = new WeakMap } return { get: i, dispose: s } } class lv extends sv { constructor(e = -1, n = 1, i = 1, r = -1, s = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = n, this.top = i, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix() } copy(e, n) { return super.copy(e, n), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, n, i, r, s, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = n, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), n = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2; let s = i - e, o = i + e, a = r + n, l = r - n; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom, d = (this.top - this.bottom) / this.view.fullHeight / this.zoom; s += c * this.view.offsetX, o = s + c * this.view.width, a -= d * this.view.offsetY, l = a - d * this.view.height } this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const n = super.toJSON(e); return n.object.zoom = this.zoom, n.object.left = this.left, n.object.right = this.right, n.object.top = this.top, n.object.bottom = this.bottom, n.object.near = this.near, n.object.far = this.far, this.view !== null && (n.object.view = Object.assign({}, this.view)), n } } const ls = 4, Hp = [.125, .215, .35, .446, .526, .582], fr = 20, qc = new lv, Vp = new je; let Kc = null, $c = 0, Zc = 0, Qc = !1; const ur = (1 + Math.sqrt(5)) / 2, Yr = 1 / ur, Gp = [new U(-ur, Yr, 0), new U(ur, Yr, 0), new U(-Yr, 0, ur), new U(Yr, 0, ur), new U(0, ur, -Yr), new U(0, ur, Yr), new U(-1, 1, -1), new U(1, 1, -1), new U(-1, 1, 1), new U(1, 1, 1)]; class Wp { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, n = 0, i = .1, r = 100) { Kc = this._renderer.getRenderTarget(), $c = this._renderer.getActiveCubeFace(), Zc = this._renderer.getActiveMipmapLevel(), Qc = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256); const s = this._allocateTargets(); return s.depthBuffer = !0, this._sceneToCubeUV(e, i, r, s), n > 0 && this._blur(s, 0, 0, n), this._applyPMREM(s), this._cleanup(s), s } fromEquirectangular(e, n = null) { return this._fromTexture(e, n) } fromCubemap(e, n = null) { return this._fromTexture(e, n) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = Yp(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = jp(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(Kc, $c, Zc), this._renderer.xr.enabled = Qc, e.scissorTest = !1, Ca(e, 0, 0, e.width, e.height) } _fromTexture(e, n) { e.mapping === Cs || e.mapping === Rs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Kc = this._renderer.getRenderTarget(), $c = this._renderer.getActiveCubeFace(), Zc = this._renderer.getActiveMipmapLevel(), Qc = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; const i = n || this._allocateTargets(); return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), n = 4 * this._cubeSize, i = { magFilter: Fn, minFilter: Fn, generateMipmaps: !1, type: Bo, format: zn, colorSpace: er, depthBuffer: !1 }, r = Xp(e, n, i); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== n) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Xp(e, n, i); const { _lodMax: s } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = pT(s)), this._blurMaterial = mT(s, e, n) } return r } _compileMaterial(e) { const n = new Ht(this._lodPlanes[0], e); this._renderer.compile(n, qc) } _sceneToCubeUV(e, n, i, r) { const a = new En(90, 1, n, i), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], d = this._renderer, h = d.autoClear, f = d.toneMapping; d.getClearColor(Vp), d.toneMapping = Yi, d.autoClear = !1; const g = new mo({ name: "PMREM.Background", side: Kt, depthWrite: !1, depthTest: !1 }), x = new Ht(new Vo, g); let y = !1; const p = e.background; p ? p.isColor && (g.color.copy(p), e.background = null, y = !0) : (g.color.copy(Vp), y = !0); for (let u = 0; u < 6; u++) { const m = u % 3; m === 0 ? (a.up.set(0, l[u], 0), a.lookAt(c[u], 0, 0)) : m === 1 ? (a.up.set(0, 0, l[u]), a.lookAt(0, c[u], 0)) : (a.up.set(0, l[u], 0), a.lookAt(0, 0, c[u])); const _ = this._cubeSize; Ca(r, m * _, u > 2 ? _ : 0, _, _), d.setRenderTarget(r), y && d.render(x, a), d.render(e, a) } x.geometry.dispose(), x.material.dispose(), d.toneMapping = f, d.autoClear = h, e.background = p } _textureToCubeUV(e, n) { const i = this._renderer, r = e.mapping === Cs || e.mapping === Rs; r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yp()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = jp()); const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Ht(this._lodPlanes[0], s), a = s.uniforms; a.envMap.value = e; const l = this._cubeSize; Ca(n, 0, 0, 3 * l, 2 * l), i.setRenderTarget(n), i.render(o, qc) } _applyPMREM(e) { const n = this._renderer, i = n.autoClear; n.autoClear = !1; const r = this._lodPlanes.length; for (let s = 1; s < r; s++) { const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = Gp[(r - s - 1) % Gp.length]; this._blur(e, s - 1, s, o, a) } n.autoClear = i } _blur(e, n, i, r, s) { const o = this._pingPongRenderTarget; this._halfBlur(e, o, n, i, r, "latitudinal", s), this._halfBlur(o, e, i, i, r, "longitudinal", s) } _halfBlur(e, n, i, r, s, o, a) { const l = this._renderer, c = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const d = 3, h = new Ht(this._lodPlanes[r], c), f = c.uniforms, g = this._sizeLods[i] - 1, x = isFinite(s) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * fr - 1), y = s / x, p = isFinite(s) ? 1 + Math.floor(d * y) : fr; p > fr && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`); const u = []; let m = 0; for (let w = 0; w < fr; ++w) { const P = w / y, X = Math.exp(-P * P / 2); u.push(X), w === 0 ? m += X : w < p && (m += 2 * X) } for (let w = 0; w < u.length; w++)u[w] = u[w] / m; f.envMap.value = e.texture, f.samples.value = p, f.weights.value = u, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a); const { _lodMax: _ } = this; f.dTheta.value = x, f.mipInt.value = _ - i; const S = this._sizeLods[r], R = 3 * S * (r > _ - ls ? r - _ + ls : 0), A = 4 * (this._cubeSize - S); Ca(n, R, A, 3 * S, 2 * S), l.setRenderTarget(n), l.render(h, qc) } } function pT(t) { const e = [], n = [], i = []; let r = t; const s = t - ls + 1 + Hp.length; for (let o = 0; o < s; o++) { const a = Math.pow(2, r); n.push(a); let l = 1 / a; o > t - ls ? l = Hp[o - t + ls - 1] : o === 0 && (l = 0), i.push(l); const c = 1 / (a - 2), d = -c, h = 1 + c, f = [d, d, h, d, h, h, d, d, h, h, d, h], g = 6, x = 6, y = 3, p = 2, u = 1, m = new Float32Array(y * x * g), _ = new Float32Array(p * x * g), S = new Float32Array(u * x * g); for (let A = 0; A < g; A++) { const w = A % 3 * 2 / 3 - 1, P = A > 2 ? 0 : -1, X = [w, P, 0, w + 2 / 3, P, 0, w + 2 / 3, P + 1, 0, w, P, 0, w + 2 / 3, P + 1, 0, w, P + 1, 0]; m.set(X, y * x * A), _.set(f, p * x * A); const v = [A, A, A, A, A, A]; S.set(v, u * x * A) } const R = new gn; R.setAttribute("position", new Vn(m, y)), R.setAttribute("uv", new Vn(_, p)), R.setAttribute("faceIndex", new Vn(S, u)), e.push(R), r > ls && r-- } return { lodPlanes: e, sizeLods: n, sigmas: i } } function Xp(t, e, n) { const i = new Cr(t, e, n); return i.texture.mapping = Wl, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i } function Ca(t, e, n, i, r) { t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r) } function mT(t, e, n) {
	const i = new Float32Array(fr), r = new U(0, 1, 0); return new vi({
		name: "SphericalGaussianBlur", defines: { n: fr, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / n, CUBEUV_MAX_MIP: `${t}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: qf(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: ji, depthTest: !1, depthWrite: !1
	})
} function jp() {
	return new vi({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: qf(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: ji, depthTest: !1, depthWrite: !1
	})
} function Yp() {
	return new vi({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: qf(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: ji, depthTest: !1, depthWrite: !1
	})
} function qf() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function gT(t) { let e = new WeakMap, n = null; function i(a) { if (a && a.isTexture) { const l = a.mapping, c = l === ld || l === cd, d = l === Cs || l === Rs; if (c || d) { let h = e.get(a); const f = h !== void 0 ? h.texture.pmremVersion : 0; if (a.isRenderTargetTexture && a.pmremVersion !== f) return n === null && (n = new Wp(t)), h = c ? n.fromEquirectangular(a, h) : n.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture; if (h !== void 0) return h.texture; { const g = a.image; return c && g && g.height > 0 || d && g && r(g) ? (n === null && (n = new Wp(t)), h = c ? n.fromEquirectangular(a) : n.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", s), h.texture) : null } } } return a } function r(a) { let l = 0; const c = 6; for (let d = 0; d < c; d++)a[d] !== void 0 && l++; return l === c } function s(a) { const l = a.target; l.removeEventListener("dispose", s); const c = e.get(l); c !== void 0 && (e.delete(l), c.dispose()) } function o() { e = new WeakMap, n !== null && (n.dispose(), n = null) } return { get: i, dispose: o } } function _T(t) { const e = {}; function n(i) { if (e[i] !== void 0) return e[i]; let r; switch (i) { case "WEBGL_depth_texture": r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: r = t.getExtension(i) }return e[i] = r, r } return { has: function (i) { return n(i) !== null }, init: function () { n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent") }, get: function (i) { const r = n(i); return r === null && Ka("THREE.WebGLRenderer: " + i + " extension not supported."), r } } } function vT(t, e, n, i) { const r = {}, s = new WeakMap; function o(h) { const f = h.target; f.index !== null && e.remove(f.index); for (const x in f.attributes) e.remove(f.attributes[x]); for (const x in f.morphAttributes) { const y = f.morphAttributes[x]; for (let p = 0, u = y.length; p < u; p++)e.remove(y[p]) } f.removeEventListener("dispose", o), delete r[f.id]; const g = s.get(f); g && (e.remove(g), s.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, n.memory.geometries-- } function a(h, f) { return r[f.id] === !0 || (f.addEventListener("dispose", o), r[f.id] = !0, n.memory.geometries++), f } function l(h) { const f = h.attributes; for (const x in f) e.update(f[x], t.ARRAY_BUFFER); const g = h.morphAttributes; for (const x in g) { const y = g[x]; for (let p = 0, u = y.length; p < u; p++)e.update(y[p], t.ARRAY_BUFFER) } } function c(h) { const f = [], g = h.index, x = h.attributes.position; let y = 0; if (g !== null) { const m = g.array; y = g.version; for (let _ = 0, S = m.length; _ < S; _ += 3) { const R = m[_ + 0], A = m[_ + 1], w = m[_ + 2]; f.push(R, A, A, w, w, R) } } else if (x !== void 0) { const m = x.array; y = x.version; for (let _ = 0, S = m.length / 3 - 1; _ < S; _ += 3) { const R = _ + 0, A = _ + 1, w = _ + 2; f.push(R, A, A, w, w, R) } } else return; const p = new (Q_(f) ? iv : nv)(f, 1); p.version = y; const u = s.get(h); u && e.remove(u), s.set(h, p) } function d(h) { const f = s.get(h); if (f) { const g = h.index; g !== null && f.version < g.version && c(h) } else c(h); return s.get(h) } return { get: a, update: l, getWireframeAttribute: d } } function xT(t, e, n) { let i; function r(f) { i = f } let s, o; function a(f) { s = f.type, o = f.bytesPerElement } function l(f, g) { t.drawElements(i, g, s, f * o), n.update(g, i, 1) } function c(f, g, x) { x !== 0 && (t.drawElementsInstanced(i, g, s, f * o, x), n.update(g, i, x)) } function d(f, g, x) { if (x === 0) return; e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, g, 0, s, f, 0, x); let p = 0; for (let u = 0; u < x; u++)p += g[u]; n.update(p, i, 1) } function h(f, g, x, y) { if (x === 0) return; const p = e.get("WEBGL_multi_draw"); if (p === null) for (let u = 0; u < f.length; u++)c(f[u] / o, g[u], y[u]); else { p.multiDrawElementsInstancedWEBGL(i, g, 0, s, f, 0, y, 0, x); let u = 0; for (let m = 0; m < x; m++)u += g[m]; for (let m = 0; m < y.length; m++)n.update(u, i, y[m]) } } this.setMode = r, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = d, this.renderMultiDrawInstances = h } function yT(t) { const e = { geometries: 0, textures: 0 }, n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function i(s, o, a) { switch (n.calls++, o) { case t.TRIANGLES: n.triangles += a * (s / 3); break; case t.LINES: n.lines += a * (s / 2); break; case t.LINE_STRIP: n.lines += a * (s - 1); break; case t.LINE_LOOP: n.lines += a * s; break; case t.POINTS: n.points += a * s; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function r() { n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0 } return { memory: e, render: n, programs: null, autoReset: !0, reset: r, update: i } } function ST(t, e, n) { const i = new WeakMap, r = new gt; function s(o, a, l) { const c = o.morphTargetInfluences, d = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = d !== void 0 ? d.length : 0; let f = i.get(a); if (f === void 0 || f.count !== h) { let v = function () { P.dispose(), i.delete(a), a.removeEventListener("dispose", v) }; var g = v; f !== void 0 && f.texture.dispose(); const x = a.morphAttributes.position !== void 0, y = a.morphAttributes.normal !== void 0, p = a.morphAttributes.color !== void 0, u = a.morphAttributes.position || [], m = a.morphAttributes.normal || [], _ = a.morphAttributes.color || []; let S = 0; x === !0 && (S = 1), y === !0 && (S = 2), p === !0 && (S = 3); let R = a.attributes.position.count * S, A = 1; R > e.maxTextureSize && (A = Math.ceil(R / e.maxTextureSize), R = e.maxTextureSize); const w = new Float32Array(R * A * 4 * h), P = new ev(w, R, A, h); P.type = ui, P.needsUpdate = !0; const X = S * 4; for (let T = 0; T < h; T++) { const H = u[T], B = m[T], q = _[T], ee = R * A * 4 * T; for (let V = 0; V < H.count; V++) { const J = V * X; x === !0 && (r.fromBufferAttribute(H, V), w[ee + J + 0] = r.x, w[ee + J + 1] = r.y, w[ee + J + 2] = r.z, w[ee + J + 3] = 0), y === !0 && (r.fromBufferAttribute(B, V), w[ee + J + 4] = r.x, w[ee + J + 5] = r.y, w[ee + J + 6] = r.z, w[ee + J + 7] = 0), p === !0 && (r.fromBufferAttribute(q, V), w[ee + J + 8] = r.x, w[ee + J + 9] = r.y, w[ee + J + 10] = r.z, w[ee + J + 11] = q.itemSize === 4 ? r.w : 1) } } f = { count: h, texture: P, size: new Ie(R, A) }, i.set(a, f), a.addEventListener("dispose", v) } if (o.isInstancedMesh === !0 && o.morphTexture !== null) l.getUniforms().setValue(t, "morphTexture", o.morphTexture, n); else { let x = 0; for (let p = 0; p < c.length; p++)x += c[p]; const y = a.morphTargetsRelative ? 1 : 1 - x; l.getUniforms().setValue(t, "morphTargetBaseInfluence", y), l.getUniforms().setValue(t, "morphTargetInfluences", c) } l.getUniforms().setValue(t, "morphTargetsTexture", f.texture, n), l.getUniforms().setValue(t, "morphTargetsTextureSize", f.size) } return { update: s } } function MT(t, e, n, i) { let r = new WeakMap; function s(l) { const c = i.render.frame, d = l.geometry, h = e.get(l, d); if (r.get(h) !== c && (e.update(h), r.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (n.update(l.instanceMatrix, t.ARRAY_BUFFER), l.instanceColor !== null && n.update(l.instanceColor, t.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) { const f = l.skeleton; r.get(f) !== c && (f.update(), r.set(f, c)) } return h } function o() { r = new WeakMap } function a(l) { const c = l.target; c.removeEventListener("dispose", a), n.remove(c.instanceMatrix), c.instanceColor !== null && n.remove(c.instanceColor) } return { update: s, dispose: o } } class cv extends $t { constructor(e, n, i, r, s, o, a, l, c, d = _s) { if (d !== _s && d !== bs) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); i === void 0 && d === _s && (i = Ar), i === void 0 && d === bs && (i = Ps), super(null, r, s, o, a, l, d, i, c), this.isDepthTexture = !0, this.image = { width: e, height: n }, this.magFilter = a !== void 0 ? a : wn, this.minFilter = l !== void 0 ? l : wn, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.compareFunction = e.compareFunction, this } toJSON(e) { const n = super.toJSON(e); return this.compareFunction !== null && (n.compareFunction = this.compareFunction), n } } const uv = new $t, qp = new cv(1, 1), dv = new ev, fv = new lS, hv = new ov, Kp = [], $p = [], Zp = new Float32Array(16), Qp = new Float32Array(9), Jp = new Float32Array(4); function Fs(t, e, n) { const i = t[0]; if (i <= 0 || i > 0) return t; const r = e * n; let s = Kp[r]; if (s === void 0 && (s = new Float32Array(r), Kp[r] = s), e !== 0) { i.toArray(s, 0); for (let o = 1, a = 0; o !== e; ++o)a += n, t[o].toArray(s, a) } return s } function wt(t, e) { if (t.length !== e.length) return !1; for (let n = 0, i = t.length; n < i; n++)if (t[n] !== e[n]) return !1; return !0 } function At(t, e) { for (let n = 0, i = e.length; n < i; n++)t[n] = e[n] } function Kl(t, e) { let n = $p[e]; n === void 0 && (n = new Int32Array(e), $p[e] = n); for (let i = 0; i !== e; ++i)n[i] = t.allocateTextureUnit(); return n } function ET(t, e) { const n = this.cache; n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e) } function TT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y) && (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y); else { if (wt(n, e)) return; t.uniform2fv(this.addr, e), At(n, e) } } function wT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) && (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z); else if (e.r !== void 0) (n[0] !== e.r || n[1] !== e.g || n[2] !== e.b) && (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b); else { if (wt(n, e)) return; t.uniform3fv(this.addr, e), At(n, e) } } function AT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) && (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else { if (wt(n, e)) return; t.uniform4fv(this.addr, e), At(n, e) } } function CT(t, e) { const n = this.cache, i = e.elements; if (i === void 0) { if (wt(n, e)) return; t.uniformMatrix2fv(this.addr, !1, e), At(n, e) } else { if (wt(n, i)) return; Jp.set(i), t.uniformMatrix2fv(this.addr, !1, Jp), At(n, i) } } function RT(t, e) { const n = this.cache, i = e.elements; if (i === void 0) { if (wt(n, e)) return; t.uniformMatrix3fv(this.addr, !1, e), At(n, e) } else { if (wt(n, i)) return; Qp.set(i), t.uniformMatrix3fv(this.addr, !1, Qp), At(n, i) } } function PT(t, e) { const n = this.cache, i = e.elements; if (i === void 0) { if (wt(n, e)) return; t.uniformMatrix4fv(this.addr, !1, e), At(n, e) } else { if (wt(n, i)) return; Zp.set(i), t.uniformMatrix4fv(this.addr, !1, Zp), At(n, i) } } function bT(t, e) { const n = this.cache; n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e) } function LT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y) && (t.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y); else { if (wt(n, e)) return; t.uniform2iv(this.addr, e), At(n, e) } } function DT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) && (t.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z); else { if (wt(n, e)) return; t.uniform3iv(this.addr, e), At(n, e) } } function IT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) && (t.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else { if (wt(n, e)) return; t.uniform4iv(this.addr, e), At(n, e) } } function NT(t, e) { const n = this.cache; n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e) } function UT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y) && (t.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y); else { if (wt(n, e)) return; t.uniform2uiv(this.addr, e), At(n, e) } } function OT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) && (t.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z); else { if (wt(n, e)) return; t.uniform3uiv(this.addr, e), At(n, e) } } function FT(t, e) { const n = this.cache; if (e.x !== void 0) (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) && (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w); else { if (wt(n, e)) return; t.uniform4uiv(this.addr, e), At(n, e) } } function kT(t, e, n) { const i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r); let s; this.type === t.SAMPLER_2D_SHADOW ? (qp.compareFunction = Z_, s = qp) : s = uv, n.setTexture2D(e || s, r) } function zT(t, e, n) { const i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || fv, r) } function BT(t, e, n) { const i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || hv, r) } function HT(t, e, n) { const i = this.cache, r = n.allocateTextureUnit(); i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || dv, r) } function VT(t) { switch (t) { case 5126: return ET; case 35664: return TT; case 35665: return wT; case 35666: return AT; case 35674: return CT; case 35675: return RT; case 35676: return PT; case 5124: case 35670: return bT; case 35667: case 35671: return LT; case 35668: case 35672: return DT; case 35669: case 35673: return IT; case 5125: return NT; case 36294: return UT; case 36295: return OT; case 36296: return FT; case 35678: case 36198: case 36298: case 36306: case 35682: return kT; case 35679: case 36299: case 36307: return zT; case 35680: case 36300: case 36308: case 36293: return BT; case 36289: case 36303: case 36311: case 36292: return HT } } function GT(t, e) { t.uniform1fv(this.addr, e) } function WT(t, e) { const n = Fs(e, this.size, 2); t.uniform2fv(this.addr, n) } function XT(t, e) { const n = Fs(e, this.size, 3); t.uniform3fv(this.addr, n) } function jT(t, e) { const n = Fs(e, this.size, 4); t.uniform4fv(this.addr, n) } function YT(t, e) { const n = Fs(e, this.size, 4); t.uniformMatrix2fv(this.addr, !1, n) } function qT(t, e) { const n = Fs(e, this.size, 9); t.uniformMatrix3fv(this.addr, !1, n) } function KT(t, e) { const n = Fs(e, this.size, 16); t.uniformMatrix4fv(this.addr, !1, n) } function $T(t, e) { t.uniform1iv(this.addr, e) } function ZT(t, e) { t.uniform2iv(this.addr, e) } function QT(t, e) { t.uniform3iv(this.addr, e) } function JT(t, e) { t.uniform4iv(this.addr, e) } function e1(t, e) { t.uniform1uiv(this.addr, e) } function t1(t, e) { t.uniform2uiv(this.addr, e) } function n1(t, e) { t.uniform3uiv(this.addr, e) } function i1(t, e) { t.uniform4uiv(this.addr, e) } function r1(t, e, n) { const i = this.cache, r = e.length, s = Kl(n, r); wt(i, s) || (t.uniform1iv(this.addr, s), At(i, s)); for (let o = 0; o !== r; ++o)n.setTexture2D(e[o] || uv, s[o]) } function s1(t, e, n) { const i = this.cache, r = e.length, s = Kl(n, r); wt(i, s) || (t.uniform1iv(this.addr, s), At(i, s)); for (let o = 0; o !== r; ++o)n.setTexture3D(e[o] || fv, s[o]) } function o1(t, e, n) { const i = this.cache, r = e.length, s = Kl(n, r); wt(i, s) || (t.uniform1iv(this.addr, s), At(i, s)); for (let o = 0; o !== r; ++o)n.setTextureCube(e[o] || hv, s[o]) } function a1(t, e, n) { const i = this.cache, r = e.length, s = Kl(n, r); wt(i, s) || (t.uniform1iv(this.addr, s), At(i, s)); for (let o = 0; o !== r; ++o)n.setTexture2DArray(e[o] || dv, s[o]) } function l1(t) { switch (t) { case 5126: return GT; case 35664: return WT; case 35665: return XT; case 35666: return jT; case 35674: return YT; case 35675: return qT; case 35676: return KT; case 5124: case 35670: return $T; case 35667: case 35671: return ZT; case 35668: case 35672: return QT; case 35669: case 35673: return JT; case 5125: return e1; case 36294: return t1; case 36295: return n1; case 36296: return i1; case 35678: case 36198: case 36298: case 36306: case 35682: return r1; case 35679: case 36299: case 36307: return s1; case 35680: case 36300: case 36308: case 36293: return o1; case 36289: case 36303: case 36311: case 36292: return a1 } } class c1 { constructor(e, n, i) { this.id = e, this.addr = i, this.cache = [], this.type = n.type, this.setValue = VT(n.type) } } class u1 { constructor(e, n, i) { this.id = e, this.addr = i, this.cache = [], this.type = n.type, this.size = n.size, this.setValue = l1(n.type) } } class d1 { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, n, i) { const r = this.seq; for (let s = 0, o = r.length; s !== o; ++s) { const a = r[s]; a.setValue(e, n[a.id], i) } } } const Jc = /(\w+)(\])?(\[|\.)?/g; function em(t, e) { t.seq.push(e), t.map[e.id] = e } function f1(t, e, n) { const i = t.name, r = i.length; for (Jc.lastIndex = 0; ;) { const s = Jc.exec(i), o = Jc.lastIndex; let a = s[1]; const l = s[2] === "]", c = s[3]; if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) { em(n, c === void 0 ? new c1(a, t, e) : new u1(a, t, e)); break } else { let h = n.map[a]; h === void 0 && (h = new d1(a), em(n, h)), n = h } } } class $a { constructor(e, n) { this.seq = [], this.map = {}; const i = e.getProgramParameter(n, e.ACTIVE_UNIFORMS); for (let r = 0; r < i; ++r) { const s = e.getActiveUniform(n, r), o = e.getUniformLocation(n, s.name); f1(s, o, this) } } setValue(e, n, i, r) { const s = this.map[n]; s !== void 0 && s.setValue(e, i, r) } setOptional(e, n, i) { const r = n[i]; r !== void 0 && this.setValue(e, i, r) } static upload(e, n, i, r) { for (let s = 0, o = n.length; s !== o; ++s) { const a = n[s], l = i[a.id]; l.needsUpdate !== !1 && a.setValue(e, l.value, r) } } static seqWithValue(e, n) { const i = []; for (let r = 0, s = e.length; r !== s; ++r) { const o = e[r]; o.id in n && i.push(o) } return i } } function tm(t, e, n) { const i = t.createShader(e); return t.shaderSource(i, n), t.compileShader(i), i } const h1 = 37297; let p1 = 0; function m1(t, e) {
	const n = t.split(`
`), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, n.length); for (let o = r; o < s; o++) { const a = o + 1; i.push(`${a === e ? ">" : " "} ${a}: ${n[o]}`) } return i.join(`
`)
} function g1(t) { const e = Qe.getPrimaries(Qe.workingColorSpace), n = Qe.getPrimaries(t); let i; switch (e === n ? i = "" : e === El && n === Ml ? i = "LinearDisplayP3ToLinearSRGB" : e === Ml && n === El && (i = "LinearSRGBToLinearDisplayP3"), t) { case er: case Xl: return [i, "LinearTransferOETF"]; case Yn: case Wf: return [i, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space:", t), [i, "LinearTransferOETF"] } } function nm(t, e, n) {
	const i = t.getShaderParameter(e, t.COMPILE_STATUS), r = t.getShaderInfoLog(e).trim(); if (i && r === "") return ""; const s = /ERROR: 0:(\d+)/.exec(r); if (s) {
		const o = parseInt(s[1]); return n.toUpperCase() + `

`+ r + `

`+ m1(t.getShaderSource(e), o)
	} else return r
} function _1(t, e) { const n = g1(e); return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }` } function v1(t, e) { let n; switch (e) { case yy: n = "Linear"; break; case Sy: n = "Reinhard"; break; case My: n = "Cineon"; break; case k_: n = "ACESFilmic"; break; case Ty: n = "AgX"; break; case wy: n = "Neutral"; break; case Ey: n = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear" }return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }" } const Ra = new U; function x1() {
	Qe.getLuminanceCoefficients(Ra); const t = Ra.x.toFixed(4), e = Ra.y.toFixed(4), n = Ra.z.toFixed(4); return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${t}, ${e}, ${n} );`, "	return dot( weights, rgb );", "}"].join(`
`)
} function y1(t) {
	return [t.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", t.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(no).join(`
`)
} function S1(t) {
	const e = []; for (const n in t) { const i = t[n]; i !== !1 && e.push("#define " + n + " " + i) } return e.join(`
`)
} function M1(t, e) { const n = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES); for (let r = 0; r < i; r++) { const s = t.getActiveAttrib(e, r), o = s.name; let a = 1; s.type === t.FLOAT_MAT2 && (a = 2), s.type === t.FLOAT_MAT3 && (a = 3), s.type === t.FLOAT_MAT4 && (a = 4), n[o] = { type: s.type, location: t.getAttribLocation(e, o), locationSize: a } } return n } function no(t) { return t !== "" } function im(t, e) { const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function rm(t, e) { return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const E1 = /^[ \t]*#include +<([\w\d./]+)>/gm; function zd(t) { return t.replace(E1, w1) } const T1 = new Map; function w1(t, e) { let n = Fe[e]; if (n === void 0) { const i = T1.get(e); if (i !== void 0) n = Fe[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i); else throw new Error("Can not resolve #include <" + e + ">") } return zd(n) } const A1 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function sm(t) { return t.replace(A1, C1) } function C1(t, e, n, i) { let r = ""; for (let s = parseInt(e); s < parseInt(n); s++)r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return r } function om(t) {
	let e = `precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`; return t.precision === "highp" ? e += `
#define HIGH_PRECISION`: t.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: t.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function R1(t) { let e = "SHADOWMAP_TYPE_BASIC"; return t.shadowMapType === O_ ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === Jx ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === si && (e = "SHADOWMAP_TYPE_VSM"), e } function P1(t) { let e = "ENVMAP_TYPE_CUBE"; if (t.envMap) switch (t.envMapMode) { case Cs: case Rs: e = "ENVMAP_TYPE_CUBE"; break; case Wl: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function b1(t) { let e = "ENVMAP_MODE_REFLECTION"; if (t.envMap) switch (t.envMapMode) { case Rs: e = "ENVMAP_MODE_REFRACTION"; break }return e } function L1(t) { let e = "ENVMAP_BLENDING_NONE"; if (t.envMap) switch (t.combine) { case F_: e = "ENVMAP_BLENDING_MULTIPLY"; break; case vy: e = "ENVMAP_BLENDING_MIX"; break; case xy: e = "ENVMAP_BLENDING_ADD"; break }return e } function D1(t) { const e = t.envMapCubeUVHeight; if (e === null) return null; const n = Math.log2(e) - 2, i = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 7 * 16)), texelHeight: i, maxMip: n } } function I1(t, e, n, i) {
	const r = t.getContext(), s = n.defines; let o = n.vertexShader, a = n.fragmentShader; const l = R1(n), c = P1(n), d = b1(n), h = L1(n), f = D1(n), g = y1(n), x = S1(s), y = r.createProgram(); let p, u, m = n.glslVersion ? "#version " + n.glslVersion + `
`: ""; n.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, x].filter(no).join(`
`), p.length > 0 && (p += `
`), u = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, x].filter(no).join(`
`), u.length > 0 && (u += `
`)) : (p = [om(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, x, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.batchingColor ? "#define USE_BATCHING_COLOR" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", n.morphColors ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(no).join(`
`), u = [om(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, x, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.dispersion ? "#define USE_DISPERSION" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== Yi ? "#define TONE_MAPPING" : "", n.toneMapping !== Yi ? Fe.tonemapping_pars_fragment : "", n.toneMapping !== Yi ? v1("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", Fe.colorspace_pars_fragment, _1("linearToOutputTexel", n.outputColorSpace), x1(), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", `
`].filter(no).join(`
`)), o = zd(o), o = im(o, n), o = rm(o, n), a = zd(a), a = im(a, n), a = rm(a, n), o = sm(o), a = sm(a), n.isRawShaderMaterial !== !0 && (m = `#version 300 es
`, p = [g, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ p, u = ["#define varying in", n.glslVersion === Mp ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === Mp ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ u); const _ = m + p + o, S = m + u + a, R = tm(r, r.VERTEX_SHADER, _), A = tm(r, r.FRAGMENT_SHADER, S); r.attachShader(y, R), r.attachShader(y, A), n.index0AttributeName !== void 0 ? r.bindAttribLocation(y, 0, n.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(y, 0, "position"), r.linkProgram(y); function w(T) {
		if (t.debug.checkShaderErrors) {
			const H = r.getProgramInfoLog(y).trim(), B = r.getShaderInfoLog(R).trim(), q = r.getShaderInfoLog(A).trim(); let ee = !0, V = !0; if (r.getProgramParameter(y, r.LINK_STATUS) === !1) if (ee = !1, typeof t.debug.onShaderError == "function") t.debug.onShaderError(r, y, R, A); else {
				const J = nm(r, R, "vertex"), L = nm(r, A, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(y, r.VALIDATE_STATUS) + `

Material Name: `+ T.name + `
Material Type: `+ T.type + `

Program Info Log: `+ H + `
`+ J + `
`+ L)
			} else H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (B === "" || q === "") && (V = !1); V && (T.diagnostics = { runnable: ee, programLog: H, vertexShader: { log: B, prefix: p }, fragmentShader: { log: q, prefix: u } })
		} r.deleteShader(R), r.deleteShader(A), P = new $a(r, y), X = M1(r, y)
	} let P; this.getUniforms = function () { return P === void 0 && w(this), P }; let X; this.getAttributes = function () { return X === void 0 && w(this), X }; let v = n.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return v === !1 && (v = r.getProgramParameter(y, h1)), v }, this.destroy = function () { i.releaseStatesOfProgram(this), r.deleteProgram(y), this.program = void 0 }, this.type = n.shaderType, this.name = n.shaderName, this.id = p1++, this.cacheKey = e, this.usedTimes = 1, this.program = y, this.vertexShader = R, this.fragmentShader = A, this
} let N1 = 0; class U1 { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const n = e.vertexShader, i = e.fragmentShader, r = this._getShaderStage(n), s = this._getShaderStage(i), o = this._getShaderCacheForMaterial(e); return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this } remove(e) { const n = this.materialCache.get(e); for (const i of n) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const n = this.materialCache; let i = n.get(e); return i === void 0 && (i = new Set, n.set(e, i)), i } _getShaderStage(e) { const n = this.shaderCache; let i = n.get(e); return i === void 0 && (i = new O1(e), n.set(e, i)), i } } class O1 { constructor(e) { this.id = N1++, this.code = e, this.usedTimes = 0 } } function F1(t, e, n, i, r, s, o) { const a = new jf, l = new U1, c = new Set, d = [], h = r.logarithmicDepthBuffer, f = r.reverseDepthBuffer, g = r.vertexTextures; let x = r.precision; const y = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function p(v) { return c.add(v), v === 0 ? "uv" : `uv${v}` } function u(v, T, H, B, q) { const ee = B.fog, V = q.geometry, J = v.isMeshStandardMaterial ? B.environment : null, L = (v.isMeshStandardMaterial ? n : e).get(v.envMap || J), $ = L && L.mapping === Wl ? L.image.height : null, Z = y[v.type]; v.precision !== null && (x = r.getMaxPrecision(v.precision), x !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", x, "instead.")); const oe = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, we = oe !== void 0 ? oe.length : 0; let Ve = 0; V.morphAttributes.position !== void 0 && (Ve = 1), V.morphAttributes.normal !== void 0 && (Ve = 2), V.morphAttributes.color !== void 0 && (Ve = 3); let j, te, me, le; if (Z) { const en = qn[Z]; j = en.vertexShader, te = en.fragmentShader } else j = v.vertexShader, te = v.fragmentShader, l.update(v), me = l.getVertexShaderID(v), le = l.getFragmentShaderID(v); const Le = t.getRenderTarget(), Ce = q.isInstancedMesh === !0, We = q.isBatchedMesh === !0, Ye = !!v.map, Oe = !!v.matcap, b = !!L, Ot = !!v.aoMap, ze = !!v.lightMap, Xe = !!v.bumpMap, Re = !!v.normalMap, tt = !!v.displacementMap, Pe = !!v.emissiveMap, C = !!v.metalnessMap, M = !!v.roughnessMap, O = v.anisotropy > 0, z = v.clearcoat > 0, K = v.dispersion > 0, Y = v.iridescence > 0, fe = v.sheen > 0, re = v.transmission > 0, ce = O && !!v.anisotropyMap, Ue = z && !!v.clearcoatMap, ie = z && !!v.clearcoatNormalMap, ue = z && !!v.clearcoatRoughnessMap, Ae = Y && !!v.iridescenceMap, ae = Y && !!v.iridescenceThicknessMap, he = fe && !!v.sheenColorMap, Ne = fe && !!v.sheenRoughnessMap, Ee = !!v.specularMap, Be = !!v.specularColorMap, D = !!v.specularIntensityMap, _e = re && !!v.transmissionMap, G = re && !!v.thicknessMap, Q = !!v.gradientMap, pe = !!v.alphaMap, ge = v.alphaTest > 0, Ge = !!v.alphaHash, ut = !!v.extensions; let Jt = Yi; v.toneMapped && (Le === null || Le.isXRRenderTarget === !0) && (Jt = t.toneMapping); const Ke = { shaderID: Z, shaderType: v.type, shaderName: v.name, vertexShader: j, fragmentShader: te, defines: v.defines, customVertexShaderID: me, customFragmentShaderID: le, isRawShaderMaterial: v.isRawShaderMaterial === !0, glslVersion: v.glslVersion, precision: x, batching: We, batchingColor: We && q._colorsTexture !== null, instancing: Ce, instancingColor: Ce && q.instanceColor !== null, instancingMorph: Ce && q.morphTexture !== null, supportsVertexTextures: g, outputColorSpace: Le === null ? t.outputColorSpace : Le.isXRRenderTarget === !0 ? Le.texture.colorSpace : er, alphaToCoverage: !!v.alphaToCoverage, map: Ye, matcap: Oe, envMap: b, envMapMode: b && L.mapping, envMapCubeUVHeight: $, aoMap: Ot, lightMap: ze, bumpMap: Xe, normalMap: Re, displacementMap: g && tt, emissiveMap: Pe, normalMapObjectSpace: Re && v.normalMapType === Py, normalMapTangentSpace: Re && v.normalMapType === $_, metalnessMap: C, roughnessMap: M, anisotropy: O, anisotropyMap: ce, clearcoat: z, clearcoatMap: Ue, clearcoatNormalMap: ie, clearcoatRoughnessMap: ue, dispersion: K, iridescence: Y, iridescenceMap: Ae, iridescenceThicknessMap: ae, sheen: fe, sheenColorMap: he, sheenRoughnessMap: Ne, specularMap: Ee, specularColorMap: Be, specularIntensityMap: D, transmission: re, transmissionMap: _e, thicknessMap: G, gradientMap: Q, opaque: v.transparent === !1 && v.blending === gs && v.alphaToCoverage === !1, alphaMap: pe, alphaTest: ge, alphaHash: Ge, combine: v.combine, mapUv: Ye && p(v.map.channel), aoMapUv: Ot && p(v.aoMap.channel), lightMapUv: ze && p(v.lightMap.channel), bumpMapUv: Xe && p(v.bumpMap.channel), normalMapUv: Re && p(v.normalMap.channel), displacementMapUv: tt && p(v.displacementMap.channel), emissiveMapUv: Pe && p(v.emissiveMap.channel), metalnessMapUv: C && p(v.metalnessMap.channel), roughnessMapUv: M && p(v.roughnessMap.channel), anisotropyMapUv: ce && p(v.anisotropyMap.channel), clearcoatMapUv: Ue && p(v.clearcoatMap.channel), clearcoatNormalMapUv: ie && p(v.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ue && p(v.clearcoatRoughnessMap.channel), iridescenceMapUv: Ae && p(v.iridescenceMap.channel), iridescenceThicknessMapUv: ae && p(v.iridescenceThicknessMap.channel), sheenColorMapUv: he && p(v.sheenColorMap.channel), sheenRoughnessMapUv: Ne && p(v.sheenRoughnessMap.channel), specularMapUv: Ee && p(v.specularMap.channel), specularColorMapUv: Be && p(v.specularColorMap.channel), specularIntensityMapUv: D && p(v.specularIntensityMap.channel), transmissionMapUv: _e && p(v.transmissionMap.channel), thicknessMapUv: G && p(v.thicknessMap.channel), alphaMapUv: pe && p(v.alphaMap.channel), vertexTangents: !!V.attributes.tangent && (Re || O), vertexColors: v.vertexColors, vertexAlphas: v.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4, pointsUvs: q.isPoints === !0 && !!V.attributes.uv && (Ye || pe), fog: !!ee, useFog: v.fog === !0, fogExp2: !!ee && ee.isFogExp2, flatShading: v.flatShading === !0, sizeAttenuation: v.sizeAttenuation === !0, logarithmicDepthBuffer: h, reverseDepthBuffer: f, skinning: q.isSkinnedMesh === !0, morphTargets: V.morphAttributes.position !== void 0, morphNormals: V.morphAttributes.normal !== void 0, morphColors: V.morphAttributes.color !== void 0, morphTargetsCount: we, morphTextureStride: Ve, numDirLights: T.directional.length, numPointLights: T.point.length, numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T.rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap.length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T.spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps, numLightProbes: T.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: v.dithering, shadowMapEnabled: t.shadowMap.enabled && H.length > 0, shadowMapType: t.shadowMap.type, toneMapping: Jt, decodeVideoTexture: Ye && v.map.isVideoTexture === !0 && Qe.getTransfer(v.map.colorSpace) === ot, premultipliedAlpha: v.premultipliedAlpha, doubleSided: v.side === $n, flipSided: v.side === Kt, useDepthPacking: v.depthPacking >= 0, depthPacking: v.depthPacking || 0, index0AttributeName: v.index0AttributeName, extensionClipCullDistance: ut && v.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (ut && v.extensions.multiDraw === !0 || We) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: v.customProgramCacheKey() }; return Ke.vertexUv1s = c.has(1), Ke.vertexUv2s = c.has(2), Ke.vertexUv3s = c.has(3), c.clear(), Ke } function m(v) { const T = []; if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0) for (const H in v.defines) T.push(H), T.push(v.defines[H]); return v.isRawShaderMaterial === !1 && (_(T, v), S(T, v), T.push(t.outputColorSpace)), T.push(v.customProgramCacheKey), T.join() } function _(v, T) { v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapCubeUVHeight), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.morphAttributeCount), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking) } function S(v, T) { a.disableAll(), T.supportsVertexTextures && a.enable(0), T.instancing && a.enable(1), T.instancingColor && a.enable(2), T.instancingMorph && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), T.batching && a.enable(19), T.dispersion && a.enable(20), T.batchingColor && a.enable(21), v.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reverseDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.alphaToCoverage && a.enable(20), v.push(a.mask) } function R(v) { const T = y[v.type]; let H; if (T) { const B = qn[T]; H = yS.clone(B.uniforms) } else H = v.uniforms; return H } function A(v, T) { let H; for (let B = 0, q = d.length; B < q; B++) { const ee = d[B]; if (ee.cacheKey === T) { H = ee, ++H.usedTimes; break } } return H === void 0 && (H = new I1(t, T, v, s), d.push(H)), H } function w(v) { if (--v.usedTimes === 0) { const T = d.indexOf(v); d[T] = d[d.length - 1], d.pop(), v.destroy() } } function P(v) { l.remove(v) } function X() { l.dispose() } return { getParameters: u, getProgramCacheKey: m, getUniforms: R, acquireProgram: A, releaseProgram: w, releaseShaderCache: P, programs: d, dispose: X } } function k1() { let t = new WeakMap; function e(o) { return t.has(o) } function n(o) { let a = t.get(o); return a === void 0 && (a = {}, t.set(o, a)), a } function i(o) { t.delete(o) } function r(o, a, l) { t.get(o)[a] = l } function s() { t = new WeakMap } return { has: e, get: n, remove: i, update: r, dispose: s } } function z1(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id } function am(t, e) { return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id } function lm() { const t = []; let e = 0; const n = [], i = [], r = []; function s() { e = 0, n.length = 0, i.length = 0, r.length = 0 } function o(h, f, g, x, y, p) { let u = t[e]; return u === void 0 ? (u = { id: h.id, object: h, geometry: f, material: g, groupOrder: x, renderOrder: h.renderOrder, z: y, group: p }, t[e] = u) : (u.id = h.id, u.object = h, u.geometry = f, u.material = g, u.groupOrder = x, u.renderOrder = h.renderOrder, u.z = y, u.group = p), e++, u } function a(h, f, g, x, y, p) { const u = o(h, f, g, x, y, p); g.transmission > 0 ? i.push(u) : g.transparent === !0 ? r.push(u) : n.push(u) } function l(h, f, g, x, y, p) { const u = o(h, f, g, x, y, p); g.transmission > 0 ? i.unshift(u) : g.transparent === !0 ? r.unshift(u) : n.unshift(u) } function c(h, f) { n.length > 1 && n.sort(h || z1), i.length > 1 && i.sort(f || am), r.length > 1 && r.sort(f || am) } function d() { for (let h = e, f = t.length; h < f; h++) { const g = t[h]; if (g.id === null) break; g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null } } return { opaque: n, transmissive: i, transparent: r, init: s, push: a, unshift: l, finish: d, sort: c } } function B1() { let t = new WeakMap; function e(i, r) { const s = t.get(i); let o; return s === void 0 ? (o = new lm, t.set(i, [o])) : r >= s.length ? (o = new lm, s.push(o)) : o = s[r], o } function n() { t = new WeakMap } return { get: e, dispose: n } } function H1() { const t = {}; return { get: function (e) { if (t[e.id] !== void 0) return t[e.id]; let n; switch (e.type) { case "DirectionalLight": n = { direction: new U, color: new je }; break; case "SpotLight": n = { position: new U, direction: new U, color: new je, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": n = { position: new U, color: new je, distance: 0, decay: 0 }; break; case "HemisphereLight": n = { direction: new U, skyColor: new je, groundColor: new je }; break; case "RectAreaLight": n = { color: new je, position: new U, halfWidth: new U, halfHeight: new U }; break }return t[e.id] = n, n } } } function V1() { const t = {}; return { get: function (e) { if (t[e.id] !== void 0) return t[e.id]; let n; switch (e.type) { case "DirectionalLight": n = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ie }; break; case "SpotLight": n = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ie }; break; case "PointLight": n = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ie, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return t[e.id] = n, n } } } let G1 = 0; function W1(t, e) { return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0) } function X1(t) { const e = new H1, n = V1(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let c = 0; c < 9; c++)i.probe.push(new U); const r = new U, s = new ct, o = new ct; function a(c) { let d = 0, h = 0, f = 0; for (let X = 0; X < 9; X++)i.probe[X].set(0, 0, 0); let g = 0, x = 0, y = 0, p = 0, u = 0, m = 0, _ = 0, S = 0, R = 0, A = 0, w = 0; c.sort(W1); for (let X = 0, v = c.length; X < v; X++) { const T = c[X], H = T.color, B = T.intensity, q = T.distance, ee = T.shadow && T.shadow.map ? T.shadow.map.texture : null; if (T.isAmbientLight) d += H.r * B, h += H.g * B, f += H.b * B; else if (T.isLightProbe) { for (let V = 0; V < 9; V++)i.probe[V].addScaledVector(T.sh.coefficients[V], B); w++ } else if (T.isDirectionalLight) { const V = e.get(T); if (V.color.copy(T.color).multiplyScalar(T.intensity), T.castShadow) { const J = T.shadow, L = n.get(T); L.shadowIntensity = J.intensity, L.shadowBias = J.bias, L.shadowNormalBias = J.normalBias, L.shadowRadius = J.radius, L.shadowMapSize = J.mapSize, i.directionalShadow[g] = L, i.directionalShadowMap[g] = ee, i.directionalShadowMatrix[g] = T.shadow.matrix, m++ } i.directional[g] = V, g++ } else if (T.isSpotLight) { const V = e.get(T); V.position.setFromMatrixPosition(T.matrixWorld), V.color.copy(H).multiplyScalar(B), V.distance = q, V.coneCos = Math.cos(T.angle), V.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), V.decay = T.decay, i.spot[y] = V; const J = T.shadow; if (T.map && (i.spotLightMap[R] = T.map, R++, J.updateMatrices(T), T.castShadow && A++), i.spotLightMatrix[y] = J.matrix, T.castShadow) { const L = n.get(T); L.shadowIntensity = J.intensity, L.shadowBias = J.bias, L.shadowNormalBias = J.normalBias, L.shadowRadius = J.radius, L.shadowMapSize = J.mapSize, i.spotShadow[y] = L, i.spotShadowMap[y] = ee, S++ } y++ } else if (T.isRectAreaLight) { const V = e.get(T); V.color.copy(H).multiplyScalar(B), V.halfWidth.set(T.width * .5, 0, 0), V.halfHeight.set(0, T.height * .5, 0), i.rectArea[p] = V, p++ } else if (T.isPointLight) { const V = e.get(T); if (V.color.copy(T.color).multiplyScalar(T.intensity), V.distance = T.distance, V.decay = T.decay, T.castShadow) { const J = T.shadow, L = n.get(T); L.shadowIntensity = J.intensity, L.shadowBias = J.bias, L.shadowNormalBias = J.normalBias, L.shadowRadius = J.radius, L.shadowMapSize = J.mapSize, L.shadowCameraNear = J.camera.near, L.shadowCameraFar = J.camera.far, i.pointShadow[x] = L, i.pointShadowMap[x] = ee, i.pointShadowMatrix[x] = T.shadow.matrix, _++ } i.point[x] = V, x++ } else if (T.isHemisphereLight) { const V = e.get(T); V.skyColor.copy(T.color).multiplyScalar(B), V.groundColor.copy(T.groundColor).multiplyScalar(B), i.hemi[u] = V, u++ } } p > 0 && (t.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = de.LTC_FLOAT_1, i.rectAreaLTC2 = de.LTC_FLOAT_2) : (i.rectAreaLTC1 = de.LTC_HALF_1, i.rectAreaLTC2 = de.LTC_HALF_2)), i.ambient[0] = d, i.ambient[1] = h, i.ambient[2] = f; const P = i.hash; (P.directionalLength !== g || P.pointLength !== x || P.spotLength !== y || P.rectAreaLength !== p || P.hemiLength !== u || P.numDirectionalShadows !== m || P.numPointShadows !== _ || P.numSpotShadows !== S || P.numSpotMaps !== R || P.numLightProbes !== w) && (i.directional.length = g, i.spot.length = y, i.rectArea.length = p, i.point.length = x, i.hemi.length = u, i.directionalShadow.length = m, i.directionalShadowMap.length = m, i.pointShadow.length = _, i.pointShadowMap.length = _, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = m, i.pointShadowMatrix.length = _, i.spotLightMatrix.length = S + R - A, i.spotLightMap.length = R, i.numSpotLightShadowsWithMaps = A, i.numLightProbes = w, P.directionalLength = g, P.pointLength = x, P.spotLength = y, P.rectAreaLength = p, P.hemiLength = u, P.numDirectionalShadows = m, P.numPointShadows = _, P.numSpotShadows = S, P.numSpotMaps = R, P.numLightProbes = w, i.version = G1++) } function l(c, d) { let h = 0, f = 0, g = 0, x = 0, y = 0; const p = d.matrixWorldInverse; for (let u = 0, m = c.length; u < m; u++) { const _ = c[u]; if (_.isDirectionalLight) { const S = i.directional[h]; S.direction.setFromMatrixPosition(_.matrixWorld), r.setFromMatrixPosition(_.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(p), h++ } else if (_.isSpotLight) { const S = i.spot[g]; S.position.setFromMatrixPosition(_.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(_.matrixWorld), r.setFromMatrixPosition(_.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(p), g++ } else if (_.isRectAreaLight) { const S = i.rectArea[x]; S.position.setFromMatrixPosition(_.matrixWorld), S.position.applyMatrix4(p), o.identity(), s.copy(_.matrixWorld), s.premultiply(p), o.extractRotation(s), S.halfWidth.set(_.width * .5, 0, 0), S.halfHeight.set(0, _.height * .5, 0), S.halfWidth.applyMatrix4(o), S.halfHeight.applyMatrix4(o), x++ } else if (_.isPointLight) { const S = i.point[f]; S.position.setFromMatrixPosition(_.matrixWorld), S.position.applyMatrix4(p), f++ } else if (_.isHemisphereLight) { const S = i.hemi[y]; S.direction.setFromMatrixPosition(_.matrixWorld), S.direction.transformDirection(p), y++ } } } return { setup: a, setupView: l, state: i } } function cm(t) { const e = new X1(t), n = [], i = []; function r(d) { c.camera = d, n.length = 0, i.length = 0 } function s(d) { n.push(d) } function o(d) { i.push(d) } function a() { e.setup(n) } function l(d) { e.setupView(n, d) } const c = { lightsArray: n, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} }; return { init: r, state: c, setupLights: a, setupLightsView: l, pushLight: s, pushShadow: o } } function j1(t) { let e = new WeakMap; function n(r, s = 0) { const o = e.get(r); let a; return o === void 0 ? (a = new cm(t), e.set(r, [a])) : s >= o.length ? (a = new cm(t), o.push(a)) : a = o[s], a } function i() { e = new WeakMap } return { get: n, dispose: i } } class Y1 extends Os { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Cy, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class q1 extends Os { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } const K1 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, $1 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Z1(t, e, n) { let i = new Yf; const r = new Ie, s = new Ie, o = new gt, a = new Y1({ depthPacking: Ry }), l = new q1, c = {}, d = n.maxTextureSize, h = { [$i]: Kt, [Kt]: $i, [$n]: $n }, f = new vi({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ie }, radius: { value: 4 } }, vertexShader: K1, fragmentShader: $1 }), g = f.clone(); g.defines.HORIZONTAL_PASS = 1; const x = new gn; x.setAttribute("position", new Vn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const y = new Ht(x, f), p = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = O_; let u = this.type; this.render = function (A, w, P) { if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || A.length === 0) return; const X = t.getRenderTarget(), v = t.getActiveCubeFace(), T = t.getActiveMipmapLevel(), H = t.state; H.setBlending(ji), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1); const B = u !== si && this.type === si, q = u === si && this.type !== si; for (let ee = 0, V = A.length; ee < V; ee++) { const J = A[ee], L = J.shadow; if (L === void 0) { console.warn("THREE.WebGLShadowMap:", J, "has no shadow."); continue } if (L.autoUpdate === !1 && L.needsUpdate === !1) continue; r.copy(L.mapSize); const $ = L.getFrameExtents(); if (r.multiply($), s.copy(L.mapSize), (r.x > d || r.y > d) && (r.x > d && (s.x = Math.floor(d / $.x), r.x = s.x * $.x, L.mapSize.x = s.x), r.y > d && (s.y = Math.floor(d / $.y), r.y = s.y * $.y, L.mapSize.y = s.y)), L.map === null || B === !0 || q === !0) { const oe = this.type !== si ? { minFilter: wn, magFilter: wn } : {}; L.map !== null && L.map.dispose(), L.map = new Cr(r.x, r.y, oe), L.map.texture.name = J.name + ".shadowMap", L.camera.updateProjectionMatrix() } t.setRenderTarget(L.map), t.clear(); const Z = L.getViewportCount(); for (let oe = 0; oe < Z; oe++) { const we = L.getViewport(oe); o.set(s.x * we.x, s.y * we.y, s.x * we.z, s.y * we.w), H.viewport(o), L.updateMatrices(J, oe), i = L.getFrustum(), S(w, P, L.camera, J, this.type) } L.isPointLightShadow !== !0 && this.type === si && m(L, P), L.needsUpdate = !1 } u = this.type, p.needsUpdate = !1, t.setRenderTarget(X, v, T) }; function m(A, w) { const P = e.update(y); f.defines.VSM_SAMPLES !== A.blurSamples && (f.defines.VSM_SAMPLES = A.blurSamples, g.defines.VSM_SAMPLES = A.blurSamples, f.needsUpdate = !0, g.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Cr(r.x, r.y)), f.uniforms.shadow_pass.value = A.map.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, t.setRenderTarget(A.mapPass), t.clear(), t.renderBufferDirect(w, null, P, f, y, null), g.uniforms.shadow_pass.value = A.mapPass.texture, g.uniforms.resolution.value = A.mapSize, g.uniforms.radius.value = A.radius, t.setRenderTarget(A.map), t.clear(), t.renderBufferDirect(w, null, P, g, y, null) } function _(A, w, P, X) { let v = null; const T = P.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial; if (T !== void 0) v = T; else if (v = P.isPointLight === !0 ? l : a, t.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) { const H = v.uuid, B = w.uuid; let q = c[H]; q === void 0 && (q = {}, c[H] = q); let ee = q[B]; ee === void 0 && (ee = v.clone(), q[B] = ee, w.addEventListener("dispose", R)), v = ee } if (v.visible = w.visible, v.wireframe = w.wireframe, X === si ? v.side = w.shadowSide !== null ? w.shadowSide : w.side : v.side = w.shadowSide !== null ? w.shadowSide : h[w.side], v.alphaMap = w.alphaMap, v.alphaTest = w.alphaTest, v.map = w.map, v.clipShadows = w.clipShadows, v.clippingPlanes = w.clippingPlanes, v.clipIntersection = w.clipIntersection, v.displacementMap = w.displacementMap, v.displacementScale = w.displacementScale, v.displacementBias = w.displacementBias, v.wireframeLinewidth = w.wireframeLinewidth, v.linewidth = w.linewidth, P.isPointLight === !0 && v.isMeshDistanceMaterial === !0) { const H = t.properties.get(v); H.light = P } return v } function S(A, w, P, X, v) { if (A.visible === !1) return; if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && v === si) && (!A.frustumCulled || i.intersectsObject(A))) { A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, A.matrixWorld); const B = e.update(A), q = A.material; if (Array.isArray(q)) { const ee = B.groups; for (let V = 0, J = ee.length; V < J; V++) { const L = ee[V], $ = q[L.materialIndex]; if ($ && $.visible) { const Z = _(A, $, X, v); A.onBeforeShadow(t, A, w, P, B, Z, L), t.renderBufferDirect(P, null, B, Z, A, L), A.onAfterShadow(t, A, w, P, B, Z, L) } } } else if (q.visible) { const ee = _(A, q, X, v); A.onBeforeShadow(t, A, w, P, B, ee, null), t.renderBufferDirect(P, null, B, ee, A, null), A.onAfterShadow(t, A, w, P, B, ee, null) } } const H = A.children; for (let B = 0, q = H.length; B < q; B++)S(H[B], w, P, X, v) } function R(A) { A.target.removeEventListener("dispose", R); for (const P in c) { const X = c[P], v = A.target.uuid; v in X && (X[v].dispose(), delete X[v]) } } } const Q1 = { [td]: nd, [id]: od, [rd]: ad, [As]: sd, [nd]: td, [od]: id, [ad]: rd, [sd]: As }; function J1(t) { function e() { let D = !1; const _e = new gt; let G = null; const Q = new gt(0, 0, 0, 0); return { setMask: function (pe) { G !== pe && !D && (t.colorMask(pe, pe, pe, pe), G = pe) }, setLocked: function (pe) { D = pe }, setClear: function (pe, ge, Ge, ut, Jt) { Jt === !0 && (pe *= ut, ge *= ut, Ge *= ut), _e.set(pe, ge, Ge, ut), Q.equals(_e) === !1 && (t.clearColor(pe, ge, Ge, ut), Q.copy(_e)) }, reset: function () { D = !1, G = null, Q.set(-1, 0, 0, 0) } } } function n() { let D = !1, _e = !1, G = null, Q = null, pe = null; return { setReversed: function (ge) { _e = ge }, setTest: function (ge) { ge ? me(t.DEPTH_TEST) : le(t.DEPTH_TEST) }, setMask: function (ge) { G !== ge && !D && (t.depthMask(ge), G = ge) }, setFunc: function (ge) { if (_e && (ge = Q1[ge]), Q !== ge) { switch (ge) { case td: t.depthFunc(t.NEVER); break; case nd: t.depthFunc(t.ALWAYS); break; case id: t.depthFunc(t.LESS); break; case As: t.depthFunc(t.LEQUAL); break; case rd: t.depthFunc(t.EQUAL); break; case sd: t.depthFunc(t.GEQUAL); break; case od: t.depthFunc(t.GREATER); break; case ad: t.depthFunc(t.NOTEQUAL); break; default: t.depthFunc(t.LEQUAL) }Q = ge } }, setLocked: function (ge) { D = ge }, setClear: function (ge) { pe !== ge && (t.clearDepth(ge), pe = ge) }, reset: function () { D = !1, G = null, Q = null, pe = null } } } function i() { let D = !1, _e = null, G = null, Q = null, pe = null, ge = null, Ge = null, ut = null, Jt = null; return { setTest: function (Ke) { D || (Ke ? me(t.STENCIL_TEST) : le(t.STENCIL_TEST)) }, setMask: function (Ke) { _e !== Ke && !D && (t.stencilMask(Ke), _e = Ke) }, setFunc: function (Ke, en, Jn) { (G !== Ke || Q !== en || pe !== Jn) && (t.stencilFunc(Ke, en, Jn), G = Ke, Q = en, pe = Jn) }, setOp: function (Ke, en, Jn) { (ge !== Ke || Ge !== en || ut !== Jn) && (t.stencilOp(Ke, en, Jn), ge = Ke, Ge = en, ut = Jn) }, setLocked: function (Ke) { D = Ke }, setClear: function (Ke) { Jt !== Ke && (t.clearStencil(Ke), Jt = Ke) }, reset: function () { D = !1, _e = null, G = null, Q = null, pe = null, ge = null, Ge = null, ut = null, Jt = null } } } const r = new e, s = new n, o = new i, a = new WeakMap, l = new WeakMap; let c = {}, d = {}, h = new WeakMap, f = [], g = null, x = !1, y = null, p = null, u = null, m = null, _ = null, S = null, R = null, A = new je(0, 0, 0), w = 0, P = !1, X = null, v = null, T = null, H = null, B = null; const q = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let ee = !1, V = 0; const J = t.getParameter(t.VERSION); J.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(J)[1]), ee = V >= 1) : J.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), ee = V >= 2); let L = null, $ = {}; const Z = t.getParameter(t.SCISSOR_BOX), oe = t.getParameter(t.VIEWPORT), we = new gt().fromArray(Z), Ve = new gt().fromArray(oe); function j(D, _e, G, Q) { const pe = new Uint8Array(4), ge = t.createTexture(); t.bindTexture(D, ge), t.texParameteri(D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(D, t.TEXTURE_MAG_FILTER, t.NEAREST); for (let Ge = 0; Ge < G; Ge++)D === t.TEXTURE_3D || D === t.TEXTURE_2D_ARRAY ? t.texImage3D(_e, 0, t.RGBA, 1, 1, Q, 0, t.RGBA, t.UNSIGNED_BYTE, pe) : t.texImage2D(_e + Ge, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, pe); return ge } const te = {}; te[t.TEXTURE_2D] = j(t.TEXTURE_2D, t.TEXTURE_2D, 1), te[t.TEXTURE_CUBE_MAP] = j(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), te[t.TEXTURE_2D_ARRAY] = j(t.TEXTURE_2D_ARRAY, t.TEXTURE_2D_ARRAY, 1, 1), te[t.TEXTURE_3D] = j(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), me(t.DEPTH_TEST), s.setFunc(As), ze(!1), Xe(_p), me(t.CULL_FACE), b(ji); function me(D) { c[D] !== !0 && (t.enable(D), c[D] = !0) } function le(D) { c[D] !== !1 && (t.disable(D), c[D] = !1) } function Le(D, _e) { return d[D] !== _e ? (t.bindFramebuffer(D, _e), d[D] = _e, D === t.DRAW_FRAMEBUFFER && (d[t.FRAMEBUFFER] = _e), D === t.FRAMEBUFFER && (d[t.DRAW_FRAMEBUFFER] = _e), !0) : !1 } function Ce(D, _e) { let G = f, Q = !1; if (D) { G = h.get(_e), G === void 0 && (G = [], h.set(_e, G)); const pe = D.textures; if (G.length !== pe.length || G[0] !== t.COLOR_ATTACHMENT0) { for (let ge = 0, Ge = pe.length; ge < Ge; ge++)G[ge] = t.COLOR_ATTACHMENT0 + ge; G.length = pe.length, Q = !0 } } else G[0] !== t.BACK && (G[0] = t.BACK, Q = !0); Q && t.drawBuffers(G) } function We(D) { return g !== D ? (t.useProgram(D), g = D, !0) : !1 } const Ye = { [dr]: t.FUNC_ADD, [ty]: t.FUNC_SUBTRACT, [ny]: t.FUNC_REVERSE_SUBTRACT }; Ye[iy] = t.MIN, Ye[ry] = t.MAX; const Oe = { [sy]: t.ZERO, [oy]: t.ONE, [ay]: t.SRC_COLOR, [Ju]: t.SRC_ALPHA, [hy]: t.SRC_ALPHA_SATURATE, [dy]: t.DST_COLOR, [cy]: t.DST_ALPHA, [ly]: t.ONE_MINUS_SRC_COLOR, [ed]: t.ONE_MINUS_SRC_ALPHA, [fy]: t.ONE_MINUS_DST_COLOR, [uy]: t.ONE_MINUS_DST_ALPHA, [py]: t.CONSTANT_COLOR, [my]: t.ONE_MINUS_CONSTANT_COLOR, [gy]: t.CONSTANT_ALPHA, [_y]: t.ONE_MINUS_CONSTANT_ALPHA }; function b(D, _e, G, Q, pe, ge, Ge, ut, Jt, Ke) { if (D === ji) { x === !0 && (le(t.BLEND), x = !1); return } if (x === !1 && (me(t.BLEND), x = !0), D !== ey) { if (D !== y || Ke !== P) { if ((p !== dr || _ !== dr) && (t.blendEquation(t.FUNC_ADD), p = dr, _ = dr), Ke) switch (D) { case gs: t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA); break; case bi: t.blendFunc(t.ONE, t.ONE); break; case vp: t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE); break; case xp: t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", D); break } else switch (D) { case gs: t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA); break; case bi: t.blendFunc(t.SRC_ALPHA, t.ONE); break; case vp: t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE); break; case xp: t.blendFunc(t.ZERO, t.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", D); break }u = null, m = null, S = null, R = null, A.set(0, 0, 0), w = 0, y = D, P = Ke } return } pe = pe || _e, ge = ge || G, Ge = Ge || Q, (_e !== p || pe !== _) && (t.blendEquationSeparate(Ye[_e], Ye[pe]), p = _e, _ = pe), (G !== u || Q !== m || ge !== S || Ge !== R) && (t.blendFuncSeparate(Oe[G], Oe[Q], Oe[ge], Oe[Ge]), u = G, m = Q, S = ge, R = Ge), (ut.equals(A) === !1 || Jt !== w) && (t.blendColor(ut.r, ut.g, ut.b, Jt), A.copy(ut), w = Jt), y = D, P = !1 } function Ot(D, _e) { D.side === $n ? le(t.CULL_FACE) : me(t.CULL_FACE); let G = D.side === Kt; _e && (G = !G), ze(G), D.blending === gs && D.transparent === !1 ? b(ji) : b(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), s.setFunc(D.depthFunc), s.setTest(D.depthTest), s.setMask(D.depthWrite), r.setMask(D.colorWrite); const Q = D.stencilWrite; o.setTest(Q), Q && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), tt(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? me(t.SAMPLE_ALPHA_TO_COVERAGE) : le(t.SAMPLE_ALPHA_TO_COVERAGE) } function ze(D) { X !== D && (D ? t.frontFace(t.CW) : t.frontFace(t.CCW), X = D) } function Xe(D) { D !== Zx ? (me(t.CULL_FACE), D !== v && (D === _p ? t.cullFace(t.BACK) : D === Qx ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : le(t.CULL_FACE), v = D } function Re(D) { D !== T && (ee && t.lineWidth(D), T = D) } function tt(D, _e, G) { D ? (me(t.POLYGON_OFFSET_FILL), (H !== _e || B !== G) && (t.polygonOffset(_e, G), H = _e, B = G)) : le(t.POLYGON_OFFSET_FILL) } function Pe(D) { D ? me(t.SCISSOR_TEST) : le(t.SCISSOR_TEST) } function C(D) { D === void 0 && (D = t.TEXTURE0 + q - 1), L !== D && (t.activeTexture(D), L = D) } function M(D, _e, G) { G === void 0 && (L === null ? G = t.TEXTURE0 + q - 1 : G = L); let Q = $[G]; Q === void 0 && (Q = { type: void 0, texture: void 0 }, $[G] = Q), (Q.type !== D || Q.texture !== _e) && (L !== G && (t.activeTexture(G), L = G), t.bindTexture(D, _e || te[D]), Q.type = D, Q.texture = _e) } function O() { const D = $[L]; D !== void 0 && D.type !== void 0 && (t.bindTexture(D.type, null), D.type = void 0, D.texture = void 0) } function z() { try { t.compressedTexImage2D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function K() { try { t.compressedTexImage3D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function Y() { try { t.texSubImage2D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function fe() { try { t.texSubImage3D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function re() { try { t.compressedTexSubImage2D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function ce() { try { t.compressedTexSubImage3D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function Ue() { try { t.texStorage2D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function ie() { try { t.texStorage3D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function ue() { try { t.texImage2D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function Ae() { try { t.texImage3D.apply(t, arguments) } catch (D) { console.error("THREE.WebGLState:", D) } } function ae(D) { we.equals(D) === !1 && (t.scissor(D.x, D.y, D.z, D.w), we.copy(D)) } function he(D) { Ve.equals(D) === !1 && (t.viewport(D.x, D.y, D.z, D.w), Ve.copy(D)) } function Ne(D, _e) { let G = l.get(_e); G === void 0 && (G = new WeakMap, l.set(_e, G)); let Q = G.get(D); Q === void 0 && (Q = t.getUniformBlockIndex(_e, D.name), G.set(D, Q)) } function Ee(D, _e) { const Q = l.get(_e).get(D); a.get(_e) !== Q && (t.uniformBlockBinding(_e, Q, D.__bindingPointIndex), a.set(_e, Q)) } function Be() { t.disable(t.BLEND), t.disable(t.CULL_FACE), t.disable(t.DEPTH_TEST), t.disable(t.POLYGON_OFFSET_FILL), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.SAMPLE_ALPHA_TO_COVERAGE), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ONE, t.ZERO), t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO), t.blendColor(0, 0, 0, 0), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(t.LESS), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(t.ALWAYS, 0, 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP), t.clearStencil(0), t.cullFace(t.BACK), t.frontFace(t.CCW), t.polygonOffset(0, 0), t.activeTexture(t.TEXTURE0), t.bindFramebuffer(t.FRAMEBUFFER, null), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.bindFramebuffer(t.READ_FRAMEBUFFER, null), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), c = {}, L = null, $ = {}, d = {}, h = new WeakMap, f = [], g = null, x = !1, y = null, p = null, u = null, m = null, _ = null, S = null, R = null, A = new je(0, 0, 0), w = 0, P = !1, X = null, v = null, T = null, H = null, B = null, we.set(0, 0, t.canvas.width, t.canvas.height), Ve.set(0, 0, t.canvas.width, t.canvas.height), r.reset(), s.reset(), o.reset() } return { buffers: { color: r, depth: s, stencil: o }, enable: me, disable: le, bindFramebuffer: Le, drawBuffers: Ce, useProgram: We, setBlending: b, setMaterial: Ot, setFlipSided: ze, setCullFace: Xe, setLineWidth: Re, setPolygonOffset: tt, setScissorTest: Pe, activeTexture: C, bindTexture: M, unbindTexture: O, compressedTexImage2D: z, compressedTexImage3D: K, texImage2D: ue, texImage3D: Ae, updateUBOMapping: Ne, uniformBlockBinding: Ee, texStorage2D: Ue, texStorage3D: ie, texSubImage2D: Y, texSubImage3D: fe, compressedTexSubImage2D: re, compressedTexSubImage3D: ce, scissor: ae, viewport: he, reset: Be } } function um(t, e, n, i) { const r = ew(i); switch (n) { case G_: return t * e; case X_: return t * e; case j_: return t * e * 2; case Y_: return t * e / r.components * r.byteLength; case Hf: return t * e / r.components * r.byteLength; case q_: return t * e * 2 / r.components * r.byteLength; case Vf: return t * e * 2 / r.components * r.byteLength; case W_: return t * e * 3 / r.components * r.byteLength; case zn: return t * e * 4 / r.components * r.byteLength; case Gf: return t * e * 4 / r.components * r.byteLength; case Wa: case Xa: return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8; case ja: case Ya: return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16; case hd: case md: return Math.max(t, 16) * Math.max(e, 8) / 4; case fd: case pd: return Math.max(t, 8) * Math.max(e, 8) / 2; case gd: case _d: return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8; case vd: return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16; case xd: return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16; case yd: return Math.floor((t + 4) / 5) * Math.floor((e + 3) / 4) * 16; case Sd: return Math.floor((t + 4) / 5) * Math.floor((e + 4) / 5) * 16; case Md: return Math.floor((t + 5) / 6) * Math.floor((e + 4) / 5) * 16; case Ed: return Math.floor((t + 5) / 6) * Math.floor((e + 5) / 6) * 16; case Td: return Math.floor((t + 7) / 8) * Math.floor((e + 4) / 5) * 16; case wd: return Math.floor((t + 7) / 8) * Math.floor((e + 5) / 6) * 16; case Ad: return Math.floor((t + 7) / 8) * Math.floor((e + 7) / 8) * 16; case Cd: return Math.floor((t + 9) / 10) * Math.floor((e + 4) / 5) * 16; case Rd: return Math.floor((t + 9) / 10) * Math.floor((e + 5) / 6) * 16; case Pd: return Math.floor((t + 9) / 10) * Math.floor((e + 7) / 8) * 16; case bd: return Math.floor((t + 9) / 10) * Math.floor((e + 9) / 10) * 16; case Ld: return Math.floor((t + 11) / 12) * Math.floor((e + 9) / 10) * 16; case Dd: return Math.floor((t + 11) / 12) * Math.floor((e + 11) / 12) * 16; case qa: case Id: case Nd: return Math.ceil(t / 4) * Math.ceil(e / 4) * 16; case K_: case Ud: return Math.ceil(t / 4) * Math.ceil(e / 4) * 8; case Od: case Fd: return Math.ceil(t / 4) * Math.ceil(e / 4) * 16 }throw new Error(`Unable to determine texture byte length for ${n} format.`) } function ew(t) { switch (t) { case _i: case B_: return { byteLength: 1, components: 1 }; case Io: case H_: case Bo: return { byteLength: 2, components: 1 }; case zf: case Bf: return { byteLength: 2, components: 4 }; case Ar: case kf: case ui: return { byteLength: 4, components: 1 }; case V_: return { byteLength: 4, components: 3 } }throw new Error(`Unknown texture type ${t}.`) } function tw(t, e, n, i, r, s, o) { const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new Ie, d = new WeakMap; let h; const f = new WeakMap; let g = !1; try { g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function x(C, M) { return g ? new OffscreenCanvas(C, M) : wl("canvas") } function y(C, M, O) { let z = 1; const K = Pe(C); if ((K.width > O || K.height > O) && (z = O / Math.max(K.width, K.height)), z < 1) if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap || typeof VideoFrame < "u" && C instanceof VideoFrame) { const Y = Math.floor(z * K.width), fe = Math.floor(z * K.height); h === void 0 && (h = x(Y, fe)); const re = M ? x(Y, fe) : h; return re.width = Y, re.height = fe, re.getContext("2d").drawImage(C, 0, 0, Y, fe), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + Y + "x" + fe + ")."), re } else return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), C; return C } function p(C) { return C.generateMipmaps && C.minFilter !== wn && C.minFilter !== Fn } function u(C) { t.generateMipmap(C) } function m(C, M, O, z, K = !1) { if (C !== null) { if (t[C] !== void 0) return t[C]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'") } let Y = M; if (M === t.RED && (O === t.FLOAT && (Y = t.R32F), O === t.HALF_FLOAT && (Y = t.R16F), O === t.UNSIGNED_BYTE && (Y = t.R8)), M === t.RED_INTEGER && (O === t.UNSIGNED_BYTE && (Y = t.R8UI), O === t.UNSIGNED_SHORT && (Y = t.R16UI), O === t.UNSIGNED_INT && (Y = t.R32UI), O === t.BYTE && (Y = t.R8I), O === t.SHORT && (Y = t.R16I), O === t.INT && (Y = t.R32I)), M === t.RG && (O === t.FLOAT && (Y = t.RG32F), O === t.HALF_FLOAT && (Y = t.RG16F), O === t.UNSIGNED_BYTE && (Y = t.RG8)), M === t.RG_INTEGER && (O === t.UNSIGNED_BYTE && (Y = t.RG8UI), O === t.UNSIGNED_SHORT && (Y = t.RG16UI), O === t.UNSIGNED_INT && (Y = t.RG32UI), O === t.BYTE && (Y = t.RG8I), O === t.SHORT && (Y = t.RG16I), O === t.INT && (Y = t.RG32I)), M === t.RGB_INTEGER && (O === t.UNSIGNED_BYTE && (Y = t.RGB8UI), O === t.UNSIGNED_SHORT && (Y = t.RGB16UI), O === t.UNSIGNED_INT && (Y = t.RGB32UI), O === t.BYTE && (Y = t.RGB8I), O === t.SHORT && (Y = t.RGB16I), O === t.INT && (Y = t.RGB32I)), M === t.RGBA_INTEGER && (O === t.UNSIGNED_BYTE && (Y = t.RGBA8UI), O === t.UNSIGNED_SHORT && (Y = t.RGBA16UI), O === t.UNSIGNED_INT && (Y = t.RGBA32UI), O === t.BYTE && (Y = t.RGBA8I), O === t.SHORT && (Y = t.RGBA16I), O === t.INT && (Y = t.RGBA32I)), M === t.RGB && O === t.UNSIGNED_INT_5_9_9_9_REV && (Y = t.RGB9_E5), M === t.RGBA) { const fe = K ? Sl : Qe.getTransfer(z); O === t.FLOAT && (Y = t.RGBA32F), O === t.HALF_FLOAT && (Y = t.RGBA16F), O === t.UNSIGNED_BYTE && (Y = fe === ot ? t.SRGB8_ALPHA8 : t.RGBA8), O === t.UNSIGNED_SHORT_4_4_4_4 && (Y = t.RGBA4), O === t.UNSIGNED_SHORT_5_5_5_1 && (Y = t.RGB5_A1) } return (Y === t.R16F || Y === t.R32F || Y === t.RG16F || Y === t.RG32F || Y === t.RGBA16F || Y === t.RGBA32F) && e.get("EXT_color_buffer_float"), Y } function _(C, M) { let O; return C ? M === null || M === Ar || M === Ps ? O = t.DEPTH24_STENCIL8 : M === ui ? O = t.DEPTH32F_STENCIL8 : M === Io && (O = t.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === Ar || M === Ps ? O = t.DEPTH_COMPONENT24 : M === ui ? O = t.DEPTH_COMPONENT32F : M === Io && (O = t.DEPTH_COMPONENT16), O } function S(C, M) { return p(C) === !0 || C.isFramebufferTexture && C.minFilter !== wn && C.minFilter !== Fn ? Math.log2(Math.max(M.width, M.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? M.mipmaps.length : 1 } function R(C) { const M = C.target; M.removeEventListener("dispose", R), w(M), M.isVideoTexture && d.delete(M) } function A(C) { const M = C.target; M.removeEventListener("dispose", A), X(M) } function w(C) { const M = i.get(C); if (M.__webglInit === void 0) return; const O = C.source, z = f.get(O); if (z) { const K = z[M.__cacheKey]; K.usedTimes--, K.usedTimes === 0 && P(C), Object.keys(z).length === 0 && f.delete(O) } i.remove(C) } function P(C) { const M = i.get(C); t.deleteTexture(M.__webglTexture); const O = C.source, z = f.get(O); delete z[M.__cacheKey], o.memory.textures-- } function X(C) { const M = i.get(C); if (C.depthTexture && C.depthTexture.dispose(), C.isWebGLCubeRenderTarget) for (let z = 0; z < 6; z++) { if (Array.isArray(M.__webglFramebuffer[z])) for (let K = 0; K < M.__webglFramebuffer[z].length; K++)t.deleteFramebuffer(M.__webglFramebuffer[z][K]); else t.deleteFramebuffer(M.__webglFramebuffer[z]); M.__webglDepthbuffer && t.deleteRenderbuffer(M.__webglDepthbuffer[z]) } else { if (Array.isArray(M.__webglFramebuffer)) for (let z = 0; z < M.__webglFramebuffer.length; z++)t.deleteFramebuffer(M.__webglFramebuffer[z]); else t.deleteFramebuffer(M.__webglFramebuffer); if (M.__webglDepthbuffer && t.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && t.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer) for (let z = 0; z < M.__webglColorRenderbuffer.length; z++)M.__webglColorRenderbuffer[z] && t.deleteRenderbuffer(M.__webglColorRenderbuffer[z]); M.__webglDepthRenderbuffer && t.deleteRenderbuffer(M.__webglDepthRenderbuffer) } const O = C.textures; for (let z = 0, K = O.length; z < K; z++) { const Y = i.get(O[z]); Y.__webglTexture && (t.deleteTexture(Y.__webglTexture), o.memory.textures--), i.remove(O[z]) } i.remove(C) } let v = 0; function T() { v = 0 } function H() { const C = v; return C >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + r.maxTextures), v += 1, C } function B(C) { const M = []; return M.push(C.wrapS), M.push(C.wrapT), M.push(C.wrapR || 0), M.push(C.magFilter), M.push(C.minFilter), M.push(C.anisotropy), M.push(C.internalFormat), M.push(C.format), M.push(C.type), M.push(C.generateMipmaps), M.push(C.premultiplyAlpha), M.push(C.flipY), M.push(C.unpackAlignment), M.push(C.colorSpace), M.join() } function q(C, M) { const O = i.get(C); if (C.isVideoTexture && Re(C), C.isRenderTargetTexture === !1 && C.version > 0 && O.__version !== C.version) { const z = C.image; if (z === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (z.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { Ve(O, C, M); return } } n.bindTexture(t.TEXTURE_2D, O.__webglTexture, t.TEXTURE0 + M) } function ee(C, M) { const O = i.get(C); if (C.version > 0 && O.__version !== C.version) { Ve(O, C, M); return } n.bindTexture(t.TEXTURE_2D_ARRAY, O.__webglTexture, t.TEXTURE0 + M) } function V(C, M) { const O = i.get(C); if (C.version > 0 && O.__version !== C.version) { Ve(O, C, M); return } n.bindTexture(t.TEXTURE_3D, O.__webglTexture, t.TEXTURE0 + M) } function J(C, M) { const O = i.get(C); if (C.version > 0 && O.__version !== C.version) { j(O, C, M); return } n.bindTexture(t.TEXTURE_CUBE_MAP, O.__webglTexture, t.TEXTURE0 + M) } const L = { [ud]: t.REPEAT, [gr]: t.CLAMP_TO_EDGE, [dd]: t.MIRRORED_REPEAT }, $ = { [wn]: t.NEAREST, [Ay]: t.NEAREST_MIPMAP_NEAREST, [la]: t.NEAREST_MIPMAP_LINEAR, [Fn]: t.LINEAR, [Ac]: t.LINEAR_MIPMAP_NEAREST, [_r]: t.LINEAR_MIPMAP_LINEAR }, Z = { [by]: t.NEVER, [Oy]: t.ALWAYS, [Ly]: t.LESS, [Z_]: t.LEQUAL, [Dy]: t.EQUAL, [Uy]: t.GEQUAL, [Iy]: t.GREATER, [Ny]: t.NOTEQUAL }; function oe(C, M) { if (M.type === ui && e.has("OES_texture_float_linear") === !1 && (M.magFilter === Fn || M.magFilter === Ac || M.magFilter === la || M.magFilter === _r || M.minFilter === Fn || M.minFilter === Ac || M.minFilter === la || M.minFilter === _r) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), t.texParameteri(C, t.TEXTURE_WRAP_S, L[M.wrapS]), t.texParameteri(C, t.TEXTURE_WRAP_T, L[M.wrapT]), (C === t.TEXTURE_3D || C === t.TEXTURE_2D_ARRAY) && t.texParameteri(C, t.TEXTURE_WRAP_R, L[M.wrapR]), t.texParameteri(C, t.TEXTURE_MAG_FILTER, $[M.magFilter]), t.texParameteri(C, t.TEXTURE_MIN_FILTER, $[M.minFilter]), M.compareFunction && (t.texParameteri(C, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE), t.texParameteri(C, t.TEXTURE_COMPARE_FUNC, Z[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { if (M.magFilter === wn || M.minFilter !== la && M.minFilter !== _r || M.type === ui && e.has("OES_texture_float_linear") === !1) return; if (M.anisotropy > 1 || i.get(M).__currentAnisotropy) { const O = e.get("EXT_texture_filter_anisotropic"); t.texParameterf(C, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, r.getMaxAnisotropy())), i.get(M).__currentAnisotropy = M.anisotropy } } } function we(C, M) { let O = !1; C.__webglInit === void 0 && (C.__webglInit = !0, M.addEventListener("dispose", R)); const z = M.source; let K = f.get(z); K === void 0 && (K = {}, f.set(z, K)); const Y = B(M); if (Y !== C.__cacheKey) { K[Y] === void 0 && (K[Y] = { texture: t.createTexture(), usedTimes: 0 }, o.memory.textures++, O = !0), K[Y].usedTimes++; const fe = K[C.__cacheKey]; fe !== void 0 && (K[C.__cacheKey].usedTimes--, fe.usedTimes === 0 && P(M)), C.__cacheKey = Y, C.__webglTexture = K[Y].texture } return O } function Ve(C, M, O) { let z = t.TEXTURE_2D; (M.isDataArrayTexture || M.isCompressedArrayTexture) && (z = t.TEXTURE_2D_ARRAY), M.isData3DTexture && (z = t.TEXTURE_3D); const K = we(C, M), Y = M.source; n.bindTexture(z, C.__webglTexture, t.TEXTURE0 + O); const fe = i.get(Y); if (Y.version !== fe.__version || K === !0) { n.activeTexture(t.TEXTURE0 + O); const re = Qe.getPrimaries(Qe.workingColorSpace), ce = M.colorSpace === Ui ? null : Qe.getPrimaries(M.colorSpace), Ue = M.colorSpace === Ui || re === ce ? t.NONE : t.BROWSER_DEFAULT_WEBGL; t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, M.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, M.unpackAlignment), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ue); let ie = y(M.image, !1, r.maxTextureSize); ie = tt(M, ie); const ue = s.convert(M.format, M.colorSpace), Ae = s.convert(M.type); let ae = m(M.internalFormat, ue, Ae, M.colorSpace, M.isVideoTexture); oe(z, M); let he; const Ne = M.mipmaps, Ee = M.isVideoTexture !== !0, Be = fe.__version === void 0 || K === !0, D = Y.dataReady, _e = S(M, ie); if (M.isDepthTexture) ae = _(M.format === bs, M.type), Be && (Ee ? n.texStorage2D(t.TEXTURE_2D, 1, ae, ie.width, ie.height) : n.texImage2D(t.TEXTURE_2D, 0, ae, ie.width, ie.height, 0, ue, Ae, null)); else if (M.isDataTexture) if (Ne.length > 0) { Ee && Be && n.texStorage2D(t.TEXTURE_2D, _e, ae, Ne[0].width, Ne[0].height); for (let G = 0, Q = Ne.length; G < Q; G++)he = Ne[G], Ee ? D && n.texSubImage2D(t.TEXTURE_2D, G, 0, 0, he.width, he.height, ue, Ae, he.data) : n.texImage2D(t.TEXTURE_2D, G, ae, he.width, he.height, 0, ue, Ae, he.data); M.generateMipmaps = !1 } else Ee ? (Be && n.texStorage2D(t.TEXTURE_2D, _e, ae, ie.width, ie.height), D && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, ie.width, ie.height, ue, Ae, ie.data)) : n.texImage2D(t.TEXTURE_2D, 0, ae, ie.width, ie.height, 0, ue, Ae, ie.data); else if (M.isCompressedTexture) if (M.isCompressedArrayTexture) { Ee && Be && n.texStorage3D(t.TEXTURE_2D_ARRAY, _e, ae, Ne[0].width, Ne[0].height, ie.depth); for (let G = 0, Q = Ne.length; G < Q; G++)if (he = Ne[G], M.format !== zn) if (ue !== null) if (Ee) { if (D) if (M.layerUpdates.size > 0) { const pe = um(he.width, he.height, M.format, M.type); for (const ge of M.layerUpdates) { const Ge = he.data.subarray(ge * pe / he.data.BYTES_PER_ELEMENT, (ge + 1) * pe / he.data.BYTES_PER_ELEMENT); n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY, G, 0, 0, ge, he.width, he.height, 1, ue, Ge, 0, 0) } M.clearLayerUpdates() } else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY, G, 0, 0, 0, he.width, he.height, ie.depth, ue, he.data, 0, 0) } else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY, G, ae, he.width, he.height, ie.depth, 0, he.data, 0, 0); else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"); else Ee ? D && n.texSubImage3D(t.TEXTURE_2D_ARRAY, G, 0, 0, 0, he.width, he.height, ie.depth, ue, Ae, he.data) : n.texImage3D(t.TEXTURE_2D_ARRAY, G, ae, he.width, he.height, ie.depth, 0, ue, Ae, he.data) } else { Ee && Be && n.texStorage2D(t.TEXTURE_2D, _e, ae, Ne[0].width, Ne[0].height); for (let G = 0, Q = Ne.length; G < Q; G++)he = Ne[G], M.format !== zn ? ue !== null ? Ee ? D && n.compressedTexSubImage2D(t.TEXTURE_2D, G, 0, 0, he.width, he.height, ue, he.data) : n.compressedTexImage2D(t.TEXTURE_2D, G, ae, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ee ? D && n.texSubImage2D(t.TEXTURE_2D, G, 0, 0, he.width, he.height, ue, Ae, he.data) : n.texImage2D(t.TEXTURE_2D, G, ae, he.width, he.height, 0, ue, Ae, he.data) } else if (M.isDataArrayTexture) if (Ee) { if (Be && n.texStorage3D(t.TEXTURE_2D_ARRAY, _e, ae, ie.width, ie.height, ie.depth), D) if (M.layerUpdates.size > 0) { const G = um(ie.width, ie.height, M.format, M.type); for (const Q of M.layerUpdates) { const pe = ie.data.subarray(Q * G / ie.data.BYTES_PER_ELEMENT, (Q + 1) * G / ie.data.BYTES_PER_ELEMENT); n.texSubImage3D(t.TEXTURE_2D_ARRAY, 0, 0, 0, Q, ie.width, ie.height, 1, ue, Ae, pe) } M.clearLayerUpdates() } else n.texSubImage3D(t.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ie.width, ie.height, ie.depth, ue, Ae, ie.data) } else n.texImage3D(t.TEXTURE_2D_ARRAY, 0, ae, ie.width, ie.height, ie.depth, 0, ue, Ae, ie.data); else if (M.isData3DTexture) Ee ? (Be && n.texStorage3D(t.TEXTURE_3D, _e, ae, ie.width, ie.height, ie.depth), D && n.texSubImage3D(t.TEXTURE_3D, 0, 0, 0, 0, ie.width, ie.height, ie.depth, ue, Ae, ie.data)) : n.texImage3D(t.TEXTURE_3D, 0, ae, ie.width, ie.height, ie.depth, 0, ue, Ae, ie.data); else if (M.isFramebufferTexture) { if (Be) if (Ee) n.texStorage2D(t.TEXTURE_2D, _e, ae, ie.width, ie.height); else { let G = ie.width, Q = ie.height; for (let pe = 0; pe < _e; pe++)n.texImage2D(t.TEXTURE_2D, pe, ae, G, Q, 0, ue, Ae, null), G >>= 1, Q >>= 1 } } else if (Ne.length > 0) { if (Ee && Be) { const G = Pe(Ne[0]); n.texStorage2D(t.TEXTURE_2D, _e, ae, G.width, G.height) } for (let G = 0, Q = Ne.length; G < Q; G++)he = Ne[G], Ee ? D && n.texSubImage2D(t.TEXTURE_2D, G, 0, 0, ue, Ae, he) : n.texImage2D(t.TEXTURE_2D, G, ae, ue, Ae, he); M.generateMipmaps = !1 } else if (Ee) { if (Be) { const G = Pe(ie); n.texStorage2D(t.TEXTURE_2D, _e, ae, G.width, G.height) } D && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, ue, Ae, ie) } else n.texImage2D(t.TEXTURE_2D, 0, ae, ue, Ae, ie); p(M) && u(z), fe.__version = Y.version, M.onUpdate && M.onUpdate(M) } C.__version = M.version } function j(C, M, O) { if (M.image.length !== 6) return; const z = we(C, M), K = M.source; n.bindTexture(t.TEXTURE_CUBE_MAP, C.__webglTexture, t.TEXTURE0 + O); const Y = i.get(K); if (K.version !== Y.__version || z === !0) { n.activeTexture(t.TEXTURE0 + O); const fe = Qe.getPrimaries(Qe.workingColorSpace), re = M.colorSpace === Ui ? null : Qe.getPrimaries(M.colorSpace), ce = M.colorSpace === Ui || fe === re ? t.NONE : t.BROWSER_DEFAULT_WEBGL; t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, M.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, M.unpackAlignment), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce); const Ue = M.isCompressedTexture || M.image[0].isCompressedTexture, ie = M.image[0] && M.image[0].isDataTexture, ue = []; for (let Q = 0; Q < 6; Q++)!Ue && !ie ? ue[Q] = y(M.image[Q], !0, r.maxCubemapSize) : ue[Q] = ie ? M.image[Q].image : M.image[Q], ue[Q] = tt(M, ue[Q]); const Ae = ue[0], ae = s.convert(M.format, M.colorSpace), he = s.convert(M.type), Ne = m(M.internalFormat, ae, he, M.colorSpace), Ee = M.isVideoTexture !== !0, Be = Y.__version === void 0 || z === !0, D = K.dataReady; let _e = S(M, Ae); oe(t.TEXTURE_CUBE_MAP, M); let G; if (Ue) { Ee && Be && n.texStorage2D(t.TEXTURE_CUBE_MAP, _e, Ne, Ae.width, Ae.height); for (let Q = 0; Q < 6; Q++) { G = ue[Q].mipmaps; for (let pe = 0; pe < G.length; pe++) { const ge = G[pe]; M.format !== zn ? ae !== null ? Ee ? D && n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe, 0, 0, ge.width, ge.height, ae, ge.data) : n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe, Ne, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ee ? D && n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe, 0, 0, ge.width, ge.height, ae, he, ge.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe, Ne, ge.width, ge.height, 0, ae, he, ge.data) } } } else { if (G = M.mipmaps, Ee && Be) { G.length > 0 && _e++; const Q = Pe(ue[0]); n.texStorage2D(t.TEXTURE_CUBE_MAP, _e, Ne, Q.width, Q.height) } for (let Q = 0; Q < 6; Q++)if (ie) { Ee ? D && n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, ue[Q].width, ue[Q].height, ae, he, ue[Q].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, Ne, ue[Q].width, ue[Q].height, 0, ae, he, ue[Q].data); for (let pe = 0; pe < G.length; pe++) { const Ge = G[pe].image[Q].image; Ee ? D && n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe + 1, 0, 0, Ge.width, Ge.height, ae, he, Ge.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe + 1, Ne, Ge.width, Ge.height, 0, ae, he, Ge.data) } } else { Ee ? D && n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, ae, he, ue[Q]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, Ne, ae, he, ue[Q]); for (let pe = 0; pe < G.length; pe++) { const ge = G[pe]; Ee ? D && n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe + 1, 0, 0, ae, he, ge.image[Q]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + Q, pe + 1, Ne, ae, he, ge.image[Q]) } } } p(M) && u(t.TEXTURE_CUBE_MAP), Y.__version = K.version, M.onUpdate && M.onUpdate(M) } C.__version = M.version } function te(C, M, O, z, K, Y) { const fe = s.convert(O.format, O.colorSpace), re = s.convert(O.type), ce = m(O.internalFormat, fe, re, O.colorSpace); if (!i.get(M).__hasExternalTextures) { const ie = Math.max(1, M.width >> Y), ue = Math.max(1, M.height >> Y); K === t.TEXTURE_3D || K === t.TEXTURE_2D_ARRAY ? n.texImage3D(K, Y, ce, ie, ue, M.depth, 0, fe, re, null) : n.texImage2D(K, Y, ce, ie, ue, 0, fe, re, null) } n.bindFramebuffer(t.FRAMEBUFFER, C), Xe(M) ? a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, z, K, i.get(O).__webglTexture, 0, ze(M)) : (K === t.TEXTURE_2D || K >= t.TEXTURE_CUBE_MAP_POSITIVE_X && K <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t.framebufferTexture2D(t.FRAMEBUFFER, z, K, i.get(O).__webglTexture, Y), n.bindFramebuffer(t.FRAMEBUFFER, null) } function me(C, M, O) { if (t.bindRenderbuffer(t.RENDERBUFFER, C), M.depthBuffer) { const z = M.depthTexture, K = z && z.isDepthTexture ? z.type : null, Y = _(M.stencilBuffer, K), fe = M.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT, re = ze(M); Xe(M) ? a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, re, Y, M.width, M.height) : O ? t.renderbufferStorageMultisample(t.RENDERBUFFER, re, Y, M.width, M.height) : t.renderbufferStorage(t.RENDERBUFFER, Y, M.width, M.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, fe, t.RENDERBUFFER, C) } else { const z = M.textures; for (let K = 0; K < z.length; K++) { const Y = z[K], fe = s.convert(Y.format, Y.colorSpace), re = s.convert(Y.type), ce = m(Y.internalFormat, fe, re, Y.colorSpace), Ue = ze(M); O && Xe(M) === !1 ? t.renderbufferStorageMultisample(t.RENDERBUFFER, Ue, ce, M.width, M.height) : Xe(M) ? a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, Ue, ce, M.width, M.height) : t.renderbufferStorage(t.RENDERBUFFER, ce, M.width, M.height) } } t.bindRenderbuffer(t.RENDERBUFFER, null) } function le(C, M) { if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (n.bindFramebuffer(t.FRAMEBUFFER, C), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!i.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), q(M.depthTexture, 0); const z = i.get(M.depthTexture).__webglTexture, K = ze(M); if (M.depthTexture.format === _s) Xe(M) ? a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, z, 0, K) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, z, 0); else if (M.depthTexture.format === bs) Xe(M) ? a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, z, 0, K) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, z, 0); else throw new Error("Unknown depthTexture format") } function Le(C) { const M = i.get(C), O = C.isWebGLCubeRenderTarget === !0; if (M.__boundDepthTexture !== C.depthTexture) { const z = C.depthTexture; if (M.__depthDisposeCallback && M.__depthDisposeCallback(), z) { const K = () => { delete M.__boundDepthTexture, delete M.__depthDisposeCallback, z.removeEventListener("dispose", K) }; z.addEventListener("dispose", K), M.__depthDisposeCallback = K } M.__boundDepthTexture = z } if (C.depthTexture && !M.__autoAllocateDepthBuffer) { if (O) throw new Error("target.depthTexture not supported in Cube render targets"); le(M.__webglFramebuffer, C) } else if (O) { M.__webglDepthbuffer = []; for (let z = 0; z < 6; z++)if (n.bindFramebuffer(t.FRAMEBUFFER, M.__webglFramebuffer[z]), M.__webglDepthbuffer[z] === void 0) M.__webglDepthbuffer[z] = t.createRenderbuffer(), me(M.__webglDepthbuffer[z], C, !1); else { const K = C.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT, Y = M.__webglDepthbuffer[z]; t.bindRenderbuffer(t.RENDERBUFFER, Y), t.framebufferRenderbuffer(t.FRAMEBUFFER, K, t.RENDERBUFFER, Y) } } else if (n.bindFramebuffer(t.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0) M.__webglDepthbuffer = t.createRenderbuffer(), me(M.__webglDepthbuffer, C, !1); else { const z = C.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT, K = M.__webglDepthbuffer; t.bindRenderbuffer(t.RENDERBUFFER, K), t.framebufferRenderbuffer(t.FRAMEBUFFER, z, t.RENDERBUFFER, K) } n.bindFramebuffer(t.FRAMEBUFFER, null) } function Ce(C, M, O) { const z = i.get(C); M !== void 0 && te(z.__webglFramebuffer, C, C.texture, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, 0), O !== void 0 && Le(C) } function We(C) { const M = C.texture, O = i.get(C), z = i.get(M); C.addEventListener("dispose", A); const K = C.textures, Y = C.isWebGLCubeRenderTarget === !0, fe = K.length > 1; if (fe || (z.__webglTexture === void 0 && (z.__webglTexture = t.createTexture()), z.__version = M.version, o.memory.textures++), Y) { O.__webglFramebuffer = []; for (let re = 0; re < 6; re++)if (M.mipmaps && M.mipmaps.length > 0) { O.__webglFramebuffer[re] = []; for (let ce = 0; ce < M.mipmaps.length; ce++)O.__webglFramebuffer[re][ce] = t.createFramebuffer() } else O.__webglFramebuffer[re] = t.createFramebuffer() } else { if (M.mipmaps && M.mipmaps.length > 0) { O.__webglFramebuffer = []; for (let re = 0; re < M.mipmaps.length; re++)O.__webglFramebuffer[re] = t.createFramebuffer() } else O.__webglFramebuffer = t.createFramebuffer(); if (fe) for (let re = 0, ce = K.length; re < ce; re++) { const Ue = i.get(K[re]); Ue.__webglTexture === void 0 && (Ue.__webglTexture = t.createTexture(), o.memory.textures++) } if (C.samples > 0 && Xe(C) === !1) { O.__webglMultisampledFramebuffer = t.createFramebuffer(), O.__webglColorRenderbuffer = [], n.bindFramebuffer(t.FRAMEBUFFER, O.__webglMultisampledFramebuffer); for (let re = 0; re < K.length; re++) { const ce = K[re]; O.__webglColorRenderbuffer[re] = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, O.__webglColorRenderbuffer[re]); const Ue = s.convert(ce.format, ce.colorSpace), ie = s.convert(ce.type), ue = m(ce.internalFormat, Ue, ie, ce.colorSpace, C.isXRRenderTarget === !0), Ae = ze(C); t.renderbufferStorageMultisample(t.RENDERBUFFER, Ae, ue, C.width, C.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + re, t.RENDERBUFFER, O.__webglColorRenderbuffer[re]) } t.bindRenderbuffer(t.RENDERBUFFER, null), C.depthBuffer && (O.__webglDepthRenderbuffer = t.createRenderbuffer(), me(O.__webglDepthRenderbuffer, C, !0)), n.bindFramebuffer(t.FRAMEBUFFER, null) } } if (Y) { n.bindTexture(t.TEXTURE_CUBE_MAP, z.__webglTexture), oe(t.TEXTURE_CUBE_MAP, M); for (let re = 0; re < 6; re++)if (M.mipmaps && M.mipmaps.length > 0) for (let ce = 0; ce < M.mipmaps.length; ce++)te(O.__webglFramebuffer[re][ce], C, M, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + re, ce); else te(O.__webglFramebuffer[re], C, M, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0); p(M) && u(t.TEXTURE_CUBE_MAP), n.unbindTexture() } else if (fe) { for (let re = 0, ce = K.length; re < ce; re++) { const Ue = K[re], ie = i.get(Ue); n.bindTexture(t.TEXTURE_2D, ie.__webglTexture), oe(t.TEXTURE_2D, Ue), te(O.__webglFramebuffer, C, Ue, t.COLOR_ATTACHMENT0 + re, t.TEXTURE_2D, 0), p(Ue) && u(t.TEXTURE_2D) } n.unbindTexture() } else { let re = t.TEXTURE_2D; if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (re = C.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY), n.bindTexture(re, z.__webglTexture), oe(re, M), M.mipmaps && M.mipmaps.length > 0) for (let ce = 0; ce < M.mipmaps.length; ce++)te(O.__webglFramebuffer[ce], C, M, t.COLOR_ATTACHMENT0, re, ce); else te(O.__webglFramebuffer, C, M, t.COLOR_ATTACHMENT0, re, 0); p(M) && u(re), n.unbindTexture() } C.depthBuffer && Le(C) } function Ye(C) { const M = C.textures; for (let O = 0, z = M.length; O < z; O++) { const K = M[O]; if (p(K)) { const Y = C.isWebGLCubeRenderTarget ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, fe = i.get(K).__webglTexture; n.bindTexture(Y, fe), u(Y), n.unbindTexture() } } } const Oe = [], b = []; function Ot(C) { if (C.samples > 0) { if (Xe(C) === !1) { const M = C.textures, O = C.width, z = C.height; let K = t.COLOR_BUFFER_BIT; const Y = C.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT, fe = i.get(C), re = M.length > 1; if (re) for (let ce = 0; ce < M.length; ce++)n.bindFramebuffer(t.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + ce, t.RENDERBUFFER, null), n.bindFramebuffer(t.FRAMEBUFFER, fe.__webglFramebuffer), t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0 + ce, t.TEXTURE_2D, null, 0); n.bindFramebuffer(t.READ_FRAMEBUFFER, fe.__webglMultisampledFramebuffer), n.bindFramebuffer(t.DRAW_FRAMEBUFFER, fe.__webglFramebuffer); for (let ce = 0; ce < M.length; ce++) { if (C.resolveDepthBuffer && (C.depthBuffer && (K |= t.DEPTH_BUFFER_BIT), C.stencilBuffer && C.resolveStencilBuffer && (K |= t.STENCIL_BUFFER_BIT)), re) { t.framebufferRenderbuffer(t.READ_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, fe.__webglColorRenderbuffer[ce]); const Ue = i.get(M[ce]).__webglTexture; t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, Ue, 0) } t.blitFramebuffer(0, 0, O, z, 0, 0, O, z, K, t.NEAREST), l === !0 && (Oe.length = 0, b.length = 0, Oe.push(t.COLOR_ATTACHMENT0 + ce), C.depthBuffer && C.resolveDepthBuffer === !1 && (Oe.push(Y), b.push(Y), t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, b)), t.invalidateFramebuffer(t.READ_FRAMEBUFFER, Oe)) } if (n.bindFramebuffer(t.READ_FRAMEBUFFER, null), n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), re) for (let ce = 0; ce < M.length; ce++) { n.bindFramebuffer(t.FRAMEBUFFER, fe.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + ce, t.RENDERBUFFER, fe.__webglColorRenderbuffer[ce]); const Ue = i.get(M[ce]).__webglTexture; n.bindFramebuffer(t.FRAMEBUFFER, fe.__webglFramebuffer), t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0 + ce, t.TEXTURE_2D, Ue, 0) } n.bindFramebuffer(t.DRAW_FRAMEBUFFER, fe.__webglMultisampledFramebuffer) } else if (C.depthBuffer && C.resolveDepthBuffer === !1 && l) { const M = C.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT; t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [M]) } } } function ze(C) { return Math.min(r.maxSamples, C.samples) } function Xe(C) { const M = i.get(C); return C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1 } function Re(C) { const M = o.render.frame; d.get(C) !== M && (d.set(C, M), C.update()) } function tt(C, M) { const O = C.colorSpace, z = C.format, K = C.type; return C.isCompressedTexture === !0 || C.isVideoTexture === !0 || O !== er && O !== Ui && (Qe.getTransfer(O) === ot ? (z !== zn || K !== _i) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), M } function Pe(C) { return typeof HTMLImageElement < "u" && C instanceof HTMLImageElement ? (c.width = C.naturalWidth || C.width, c.height = C.naturalHeight || C.height) : typeof VideoFrame < "u" && C instanceof VideoFrame ? (c.width = C.displayWidth, c.height = C.displayHeight) : (c.width = C.width, c.height = C.height), c } this.allocateTextureUnit = H, this.resetTextureUnits = T, this.setTexture2D = q, this.setTexture2DArray = ee, this.setTexture3D = V, this.setTextureCube = J, this.rebindTextures = Ce, this.setupRenderTarget = We, this.updateRenderTargetMipmap = Ye, this.updateMultisampleRenderTarget = Ot, this.setupDepthRenderbuffer = Le, this.setupFrameBufferTexture = te, this.useMultisampledRTT = Xe } function nw(t, e) { function n(i, r = Ui) { let s; const o = Qe.getTransfer(r); if (i === _i) return t.UNSIGNED_BYTE; if (i === zf) return t.UNSIGNED_SHORT_4_4_4_4; if (i === Bf) return t.UNSIGNED_SHORT_5_5_5_1; if (i === V_) return t.UNSIGNED_INT_5_9_9_9_REV; if (i === B_) return t.BYTE; if (i === H_) return t.SHORT; if (i === Io) return t.UNSIGNED_SHORT; if (i === kf) return t.INT; if (i === Ar) return t.UNSIGNED_INT; if (i === ui) return t.FLOAT; if (i === Bo) return t.HALF_FLOAT; if (i === G_) return t.ALPHA; if (i === W_) return t.RGB; if (i === zn) return t.RGBA; if (i === X_) return t.LUMINANCE; if (i === j_) return t.LUMINANCE_ALPHA; if (i === _s) return t.DEPTH_COMPONENT; if (i === bs) return t.DEPTH_STENCIL; if (i === Y_) return t.RED; if (i === Hf) return t.RED_INTEGER; if (i === q_) return t.RG; if (i === Vf) return t.RG_INTEGER; if (i === Gf) return t.RGBA_INTEGER; if (i === Wa || i === Xa || i === ja || i === Ya) if (o === ot) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) { if (i === Wa) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (i === Xa) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (i === ja) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (i === Ya) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) { if (i === Wa) return s.COMPRESSED_RGB_S3TC_DXT1_EXT; if (i === Xa) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (i === ja) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (i === Ya) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (i === fd || i === hd || i === pd || i === md) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) { if (i === fd) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (i === hd) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (i === pd) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (i === md) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (i === gd || i === _d || i === vd) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) { if (i === gd || i === _d) return o === ot ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2; if (i === vd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (i === xd || i === yd || i === Sd || i === Md || i === Ed || i === Td || i === wd || i === Ad || i === Cd || i === Rd || i === Pd || i === bd || i === Ld || i === Dd) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) { if (i === xd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR; if (i === yd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR; if (i === Sd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR; if (i === Md) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR; if (i === Ed) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR; if (i === Td) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR; if (i === wd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR; if (i === Ad) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR; if (i === Cd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR; if (i === Rd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR; if (i === Pd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR; if (i === bd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR; if (i === Ld) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR; if (i === Dd) return o === ot ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (i === qa || i === Id || i === Nd) if (s = e.get("EXT_texture_compression_bptc"), s !== null) { if (i === qa) return o === ot ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (i === Id) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (i === Nd) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (i === K_ || i === Ud || i === Od || i === Fd) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) { if (i === qa) return s.COMPRESSED_RED_RGTC1_EXT; if (i === Ud) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (i === Od) return s.COMPRESSED_RED_GREEN_RGTC2_EXT; if (i === Fd) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return i === Ps ? t.UNSIGNED_INT_24_8 : t[i] !== void 0 ? t[i] : null } return { convert: n } } class iw extends En { constructor(e = []) { super(), this.isArrayCamera = !0, this.cameras = e } } class vr extends Nt { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const rw = { type: "move" }; class eu { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new vr, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new vr, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new U, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new U), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new vr, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new U, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new U), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { const n = this._hand; if (n) for (const i of e.hand.values()) this._getHandJoint(n, i) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, n, i) { let r = null, s = null, o = null; const a = this._targetRay, l = this._grip, c = this._hand; if (e && n.session.visibilityState !== "visible-blurred") { if (c && e.hand) { o = !0; for (const y of e.hand.values()) { const p = n.getJointPose(y, i), u = this._getHandJoint(c, y); p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null } const d = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = d.position.distanceTo(h.position), g = .02, x = .005; c.inputState.pinching && f > g + x ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= g - x && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else l !== null && e.gripSpace && (s = n.getPose(e.gripSpace, i), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1)); a !== null && (r = n.getPose(e.targetRaySpace, i), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(rw))) } return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this } _getHandJoint(e, n) { if (e.joints[n.jointName] === void 0) { const i = new vr; i.matrixAutoUpdate = !1, i.visible = !1, e.joints[n.jointName] = i, e.add(i) } return e.joints[n.jointName] } } const sw = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, ow = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class aw { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, n, i) { if (this.texture === null) { const r = new $t, s = e.properties.get(r); s.__webglTexture = n.texture, (n.depthNear != i.depthNear || n.depthFar != i.depthFar) && (this.depthNear = n.depthNear, this.depthFar = n.depthFar), this.texture = r } } getMesh(e) { if (this.texture !== null && this.mesh === null) { const n = e.cameras[0].viewport, i = new vi({ vertexShader: sw, fragmentShader: ow, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: n.z }, depthHeight: { value: n.w } } }); this.mesh = new Ht(new ql(20, 20), i) } return this.mesh } reset() { this.texture = null, this.mesh = null } getDepthTexture() { return this.texture } } class lw extends Lr { constructor(e, n) { super(); const i = this; let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, d = null, h = null, f = null, g = null, x = null; const y = new aw, p = n.getContextAttributes(); let u = null, m = null; const _ = [], S = [], R = new Ie; let A = null; const w = new En; w.layers.enable(1), w.viewport = new gt; const P = new En; P.layers.enable(2), P.viewport = new gt; const X = [w, P], v = new iw; v.layers.enable(1), v.layers.enable(2); let T = null, H = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (j) { let te = _[j]; return te === void 0 && (te = new eu, _[j] = te), te.getTargetRaySpace() }, this.getControllerGrip = function (j) { let te = _[j]; return te === void 0 && (te = new eu, _[j] = te), te.getGripSpace() }, this.getHand = function (j) { let te = _[j]; return te === void 0 && (te = new eu, _[j] = te), te.getHandSpace() }; function B(j) { const te = S.indexOf(j.inputSource); if (te === -1) return; const me = _[te]; me !== void 0 && (me.update(j.inputSource, j.frame, c || o), me.dispatchEvent({ type: j.type, data: j.inputSource })) } function q() { r.removeEventListener("select", B), r.removeEventListener("selectstart", B), r.removeEventListener("selectend", B), r.removeEventListener("squeeze", B), r.removeEventListener("squeezestart", B), r.removeEventListener("squeezeend", B), r.removeEventListener("end", q), r.removeEventListener("inputsourceschange", ee); for (let j = 0; j < _.length; j++) { const te = S[j]; te !== null && (S[j] = null, _[j].disconnect(te)) } T = null, H = null, y.reset(), e.setRenderTarget(u), g = null, f = null, h = null, r = null, m = null, Ve.stop(), i.isPresenting = !1, e.setPixelRatio(A), e.setSize(R.width, R.height, !1), i.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (j) { s = j, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (j) { a = j, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || o }, this.setReferenceSpace = function (j) { c = j }, this.getBaseLayer = function () { return f !== null ? f : g }, this.getBinding = function () { return h }, this.getFrame = function () { return x }, this.getSession = function () { return r }, this.setSession = async function (j) { if (r = j, r !== null) { if (u = e.getRenderTarget(), r.addEventListener("select", B), r.addEventListener("selectstart", B), r.addEventListener("selectend", B), r.addEventListener("squeeze", B), r.addEventListener("squeezestart", B), r.addEventListener("squeezeend", B), r.addEventListener("end", q), r.addEventListener("inputsourceschange", ee), p.xrCompatible !== !0 && await n.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(R), r.renderState.layers === void 0) { const te = { antialias: p.antialias, alpha: !0, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: s }; g = new XRWebGLLayer(r, n, te), r.updateRenderState({ baseLayer: g }), e.setPixelRatio(1), e.setSize(g.framebufferWidth, g.framebufferHeight, !1), m = new Cr(g.framebufferWidth, g.framebufferHeight, { format: zn, type: _i, colorSpace: e.outputColorSpace, stencilBuffer: p.stencil }) } else { let te = null, me = null, le = null; p.depth && (le = p.stencil ? n.DEPTH24_STENCIL8 : n.DEPTH_COMPONENT24, te = p.stencil ? bs : _s, me = p.stencil ? Ps : Ar); const Le = { colorFormat: n.RGBA8, depthFormat: le, scaleFactor: s }; h = new XRWebGLBinding(r, n), f = h.createProjectionLayer(Le), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), m = new Cr(f.textureWidth, f.textureHeight, { format: zn, type: _i, depthTexture: new cv(f.textureWidth, f.textureHeight, me, void 0, void 0, void 0, void 0, void 0, void 0, te), stencilBuffer: p.stencil, colorSpace: e.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === !1 }) } m.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), Ve.setContext(r), Ve.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (r !== null) return r.environmentBlendMode }, this.getDepthTexture = function () { return y.getDepthTexture() }; function ee(j) { for (let te = 0; te < j.removed.length; te++) { const me = j.removed[te], le = S.indexOf(me); le >= 0 && (S[le] = null, _[le].disconnect(me)) } for (let te = 0; te < j.added.length; te++) { const me = j.added[te]; let le = S.indexOf(me); if (le === -1) { for (let Ce = 0; Ce < _.length; Ce++)if (Ce >= S.length) { S.push(me), le = Ce; break } else if (S[Ce] === null) { S[Ce] = me, le = Ce; break } if (le === -1) break } const Le = _[le]; Le && Le.connect(me) } } const V = new U, J = new U; function L(j, te, me) { V.setFromMatrixPosition(te.matrixWorld), J.setFromMatrixPosition(me.matrixWorld); const le = V.distanceTo(J), Le = te.projectionMatrix.elements, Ce = me.projectionMatrix.elements, We = Le[14] / (Le[10] - 1), Ye = Le[14] / (Le[10] + 1), Oe = (Le[9] + 1) / Le[5], b = (Le[9] - 1) / Le[5], Ot = (Le[8] - 1) / Le[0], ze = (Ce[8] + 1) / Ce[0], Xe = We * Ot, Re = We * ze, tt = le / (-Ot + ze), Pe = tt * -Ot; if (te.matrixWorld.decompose(j.position, j.quaternion, j.scale), j.translateX(Pe), j.translateZ(tt), j.matrixWorld.compose(j.position, j.quaternion, j.scale), j.matrixWorldInverse.copy(j.matrixWorld).invert(), Le[10] === -1) j.projectionMatrix.copy(te.projectionMatrix), j.projectionMatrixInverse.copy(te.projectionMatrixInverse); else { const C = We + tt, M = Ye + tt, O = Xe - Pe, z = Re + (le - Pe), K = Oe * Ye / M * C, Y = b * Ye / M * C; j.projectionMatrix.makePerspective(O, z, K, Y, C, M), j.projectionMatrixInverse.copy(j.projectionMatrix).invert() } } function $(j, te) { te === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices(te.matrixWorld, j.matrix), j.matrixWorldInverse.copy(j.matrixWorld).invert() } this.updateCamera = function (j) { if (r === null) return; let te = j.near, me = j.far; y.texture !== null && (y.depthNear > 0 && (te = y.depthNear), y.depthFar > 0 && (me = y.depthFar)), v.near = P.near = w.near = te, v.far = P.far = w.far = me, (T !== v.near || H !== v.far) && (r.updateRenderState({ depthNear: v.near, depthFar: v.far }), T = v.near, H = v.far); const le = j.parent, Le = v.cameras; $(v, le); for (let Ce = 0; Ce < Le.length; Ce++)$(Le[Ce], le); Le.length === 2 ? L(v, w, P) : v.projectionMatrix.copy(w.projectionMatrix), Z(j, v, le) }; function Z(j, te, me) { me === null ? j.matrix.copy(te.matrixWorld) : (j.matrix.copy(me.matrixWorld), j.matrix.invert(), j.matrix.multiply(te.matrixWorld)), j.matrix.decompose(j.position, j.quaternion, j.scale), j.updateMatrixWorld(!0), j.projectionMatrix.copy(te.projectionMatrix), j.projectionMatrixInverse.copy(te.projectionMatrixInverse), j.isPerspectiveCamera && (j.fov = No * 2 * Math.atan(1 / j.projectionMatrix.elements[5]), j.zoom = 1) } this.getCamera = function () { return v }, this.getFoveation = function () { if (!(f === null && g === null)) return l }, this.setFoveation = function (j) { l = j, f !== null && (f.fixedFoveation = j), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = j) }, this.hasDepthSensing = function () { return y.texture !== null }, this.getDepthSensingMesh = function () { return y.getMesh(v) }; let oe = null; function we(j, te) { if (d = te.getViewerPose(c || o), x = te, d !== null) { const me = d.views; g !== null && (e.setRenderTargetFramebuffer(m, g.framebuffer), e.setRenderTarget(m)); let le = !1; me.length !== v.cameras.length && (v.cameras.length = 0, le = !0); for (let Ce = 0; Ce < me.length; Ce++) { const We = me[Ce]; let Ye = null; if (g !== null) Ye = g.getViewport(We); else { const b = h.getViewSubImage(f, We); Ye = b.viewport, Ce === 0 && (e.setRenderTargetTextures(m, b.colorTexture, f.ignoreDepthValues ? void 0 : b.depthStencilTexture), e.setRenderTarget(m)) } let Oe = X[Ce]; Oe === void 0 && (Oe = new En, Oe.layers.enable(Ce), Oe.viewport = new gt, X[Ce] = Oe), Oe.matrix.fromArray(We.transform.matrix), Oe.matrix.decompose(Oe.position, Oe.quaternion, Oe.scale), Oe.projectionMatrix.fromArray(We.projectionMatrix), Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(), Oe.viewport.set(Ye.x, Ye.y, Ye.width, Ye.height), Ce === 0 && (v.matrix.copy(Oe.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), le === !0 && v.cameras.push(Oe) } const Le = r.enabledFeatures; if (Le && Le.includes("depth-sensing")) { const Ce = h.getDepthInformation(me[0]); Ce && Ce.isValid && Ce.texture && y.init(e, Ce, r.renderState) } } for (let me = 0; me < _.length; me++) { const le = S[me], Le = _[me]; le !== null && Le !== void 0 && Le.update(le, te, c || o) } oe && oe(j, te), te.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: te }), x = null } const Ve = new av; Ve.setAnimationLoop(we), this.setAnimationLoop = function (j) { oe = j }, this.dispose = function () { } } } const ar = new Wn, cw = new ct; function uw(t, e) { function n(p, u) { p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix) } function i(p, u) { u.color.getRGB(p.fogColor.value, rv(t)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density) } function r(p, u, m, _, S) { u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), h(p, u)) : u.isMeshPhongMaterial ? (s(p, u), d(p, u)) : u.isMeshStandardMaterial ? (s(p, u), f(p, u), u.isMeshPhysicalMaterial && g(p, u, S)) : u.isMeshMatcapMaterial ? (s(p, u), x(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), y(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (o(p, u), u.isLineDashedMaterial && a(p, u)) : u.isPointsMaterial ? l(p, u, m, _) : u.isSpriteMaterial ? c(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1) } function s(p, u) { p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, n(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, n(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, n(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === Kt && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, n(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === Kt && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, n(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, n(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, n(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest); const m = e.get(u), _ = m.envMap, S = m.envMapRotation; _ && (p.envMap.value = _, ar.copy(S), ar.x *= -1, ar.y *= -1, ar.z *= -1, _.isCubeTexture && _.isRenderTargetTexture === !1 && (ar.y *= -1, ar.z *= -1), p.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(ar)), p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap && (p.lightMap.value = u.lightMap, p.lightMapIntensity.value = u.lightMapIntensity, n(u.lightMap, p.lightMapTransform)), u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, n(u.aoMap, p.aoMapTransform)) } function o(p, u) { p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, n(u.map, p.mapTransform)) } function a(p, u) { p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale } function l(p, u, m, _) { p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * m, p.scale.value = _ * .5, u.map && (p.map.value = u.map, n(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, n(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest) } function c(p, u) { p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, n(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, n(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest) } function d(p, u) { p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4) } function h(p, u) { u.gradientMap && (p.gradientMap.value = u.gradientMap) } function f(p, u) { p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, n(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, n(u.roughnessMap, p.roughnessMapTransform)), u.envMap && (p.envMapIntensity.value = u.envMapIntensity) } function g(p, u, m) { p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, n(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, n(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, n(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, n(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, n(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === Kt && p.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (p.dispersion.value = u.dispersion), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, n(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, n(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = m.texture, p.transmissionSamplerSize.value.set(m.width, m.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, n(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, n(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, n(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, n(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, n(u.specularIntensityMap, p.specularIntensityMapTransform)) } function x(p, u) { u.matcap && (p.matcap.value = u.matcap) } function y(p, u) { const m = e.get(u).light; p.referencePosition.value.setFromMatrixPosition(m.matrixWorld), p.nearDistance.value = m.shadow.camera.near, p.farDistance.value = m.shadow.camera.far } return { refreshFogUniforms: i, refreshMaterialUniforms: r } } function dw(t, e, n, i) { let r = {}, s = {}, o = []; const a = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS); function l(m, _) { const S = _.program; i.uniformBlockBinding(m, S) } function c(m, _) { let S = r[m.id]; S === void 0 && (x(m), S = d(m), r[m.id] = S, m.addEventListener("dispose", p)); const R = _.program; i.updateUBOMapping(m, R); const A = e.render.frame; s[m.id] !== A && (f(m), s[m.id] = A) } function d(m) { const _ = h(); m.__bindingPointIndex = _; const S = t.createBuffer(), R = m.__size, A = m.usage; return t.bindBuffer(t.UNIFORM_BUFFER, S), t.bufferData(t.UNIFORM_BUFFER, R, A), t.bindBuffer(t.UNIFORM_BUFFER, null), t.bindBufferBase(t.UNIFORM_BUFFER, _, S), S } function h() { for (let m = 0; m < a; m++)if (o.indexOf(m) === -1) return o.push(m), m; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function f(m) { const _ = r[m.id], S = m.uniforms, R = m.__cache; t.bindBuffer(t.UNIFORM_BUFFER, _); for (let A = 0, w = S.length; A < w; A++) { const P = Array.isArray(S[A]) ? S[A] : [S[A]]; for (let X = 0, v = P.length; X < v; X++) { const T = P[X]; if (g(T, A, X, R) === !0) { const H = T.__offset, B = Array.isArray(T.value) ? T.value : [T.value]; let q = 0; for (let ee = 0; ee < B.length; ee++) { const V = B[ee], J = y(V); typeof V == "number" || typeof V == "boolean" ? (T.__data[0] = V, t.bufferSubData(t.UNIFORM_BUFFER, H + q, T.__data)) : V.isMatrix3 ? (T.__data[0] = V.elements[0], T.__data[1] = V.elements[1], T.__data[2] = V.elements[2], T.__data[3] = 0, T.__data[4] = V.elements[3], T.__data[5] = V.elements[4], T.__data[6] = V.elements[5], T.__data[7] = 0, T.__data[8] = V.elements[6], T.__data[9] = V.elements[7], T.__data[10] = V.elements[8], T.__data[11] = 0) : (V.toArray(T.__data, q), q += J.storage / Float32Array.BYTES_PER_ELEMENT) } t.bufferSubData(t.UNIFORM_BUFFER, H, T.__data) } } } t.bindBuffer(t.UNIFORM_BUFFER, null) } function g(m, _, S, R) { const A = m.value, w = _ + "_" + S; if (R[w] === void 0) return typeof A == "number" || typeof A == "boolean" ? R[w] = A : R[w] = A.clone(), !0; { const P = R[w]; if (typeof A == "number" || typeof A == "boolean") { if (P !== A) return R[w] = A, !0 } else if (P.equals(A) === !1) return P.copy(A), !0 } return !1 } function x(m) { const _ = m.uniforms; let S = 0; const R = 16; for (let w = 0, P = _.length; w < P; w++) { const X = Array.isArray(_[w]) ? _[w] : [_[w]]; for (let v = 0, T = X.length; v < T; v++) { const H = X[v], B = Array.isArray(H.value) ? H.value : [H.value]; for (let q = 0, ee = B.length; q < ee; q++) { const V = B[q], J = y(V), L = S % R, $ = L % J.boundary, Z = L + $; S += $, Z !== 0 && R - Z < J.storage && (S += R - Z), H.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), H.__offset = S, S += J.storage } } } const A = S % R; return A > 0 && (S += R - A), m.__size = S, m.__cache = {}, this } function y(m) { const _ = { boundary: 0, storage: 0 }; return typeof m == "number" || typeof m == "boolean" ? (_.boundary = 4, _.storage = 4) : m.isVector2 ? (_.boundary = 8, _.storage = 8) : m.isVector3 || m.isColor ? (_.boundary = 16, _.storage = 12) : m.isVector4 ? (_.boundary = 16, _.storage = 16) : m.isMatrix3 ? (_.boundary = 48, _.storage = 48) : m.isMatrix4 ? (_.boundary = 64, _.storage = 64) : m.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", m), _ } function p(m) { const _ = m.target; _.removeEventListener("dispose", p); const S = o.indexOf(_.__bindingPointIndex); o.splice(S, 1), t.deleteBuffer(r[_.id]), delete r[_.id], delete s[_.id] } function u() { for (const m in r) t.deleteBuffer(r[m]); o = [], r = {}, s = {} } return { bind: l, update: c, dispose: u } } class fw { constructor(e = {}) { const { canvas: n = Jy(), context: i = null, depth: r = !0, stencil: s = !1, alpha: o = !1, antialias: a = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1, powerPreference: d = "default", failIfMajorPerformanceCaveat: h = !1 } = e; this.isWebGLRenderer = !0; let f; if (i !== null) { if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); f = i.getContextAttributes().alpha } else f = o; const g = new Uint32Array(4), x = new Int32Array(4); let y = null, p = null; const u = [], m = []; this.domElement = n, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Yn, this.toneMapping = Yi, this.toneMappingExposure = 1; const _ = this; let S = !1, R = 0, A = 0, w = null, P = -1, X = null; const v = new gt, T = new gt; let H = null; const B = new je(0); let q = 0, ee = n.width, V = n.height, J = 1, L = null, $ = null; const Z = new gt(0, 0, ee, V), oe = new gt(0, 0, ee, V); let we = !1; const Ve = new Yf; let j = !1, te = !1; const me = new ct, le = new ct, Le = new U, Ce = new gt, We = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; let Ye = !1; function Oe() { return w === null ? J : 1 } let b = i; function Ot(E, I) { return n.getContext(E, I) } try { const E = { alpha: !0, depth: r, stencil: s, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: d, failIfMajorPerformanceCaveat: h }; if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${Ff}`), n.addEventListener("webglcontextlost", Q, !1), n.addEventListener("webglcontextrestored", pe, !1), n.addEventListener("webglcontextcreationerror", ge, !1), b === null) { const I = "webgl2"; if (b = Ot(I, E), b === null) throw Ot(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (E) { throw console.error("THREE.WebGLRenderer: " + E.message), E } let ze, Xe, Re, tt, Pe, C, M, O, z, K, Y, fe, re, ce, Ue, ie, ue, Ae, ae, he, Ne, Ee, Be, D; function _e() { ze = new _T(b), ze.init(), Ee = new nw(b, ze), Xe = new dT(b, ze, e, Ee), Re = new J1(b), Xe.reverseDepthBuffer && Re.buffers.depth.setReversed(!0), tt = new yT(b), Pe = new k1, C = new tw(b, ze, Re, Pe, Xe, Ee, tt), M = new hT(_), O = new gT(_), z = new CS(b), Be = new cT(b, z), K = new vT(b, z, tt, Be), Y = new MT(b, K, z, tt), ae = new ST(b, Xe, C), ie = new fT(Pe), fe = new F1(_, M, O, ze, Xe, Be, ie), re = new uw(_, Pe), ce = new B1, Ue = new j1(ze), Ae = new lT(_, M, O, Re, Y, f, l), ue = new Z1(_, Y, Xe), D = new dw(b, tt, Xe, Re), he = new uT(b, ze, tt), Ne = new xT(b, ze, tt), tt.programs = fe.programs, _.capabilities = Xe, _.extensions = ze, _.properties = Pe, _.renderLists = ce, _.shadowMap = ue, _.state = Re, _.info = tt } _e(); const G = new lw(_, b); this.xr = G, this.getContext = function () { return b }, this.getContextAttributes = function () { return b.getContextAttributes() }, this.forceContextLoss = function () { const E = ze.get("WEBGL_lose_context"); E && E.loseContext() }, this.forceContextRestore = function () { const E = ze.get("WEBGL_lose_context"); E && E.restoreContext() }, this.getPixelRatio = function () { return J }, this.setPixelRatio = function (E) { E !== void 0 && (J = E, this.setSize(ee, V, !1)) }, this.getSize = function (E) { return E.set(ee, V) }, this.setSize = function (E, I, F = !0) { if (G.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } ee = E, V = I, n.width = Math.floor(E * J), n.height = Math.floor(I * J), F === !0 && (n.style.width = E + "px", n.style.height = I + "px"), this.setViewport(0, 0, E, I) }, this.getDrawingBufferSize = function (E) { return E.set(ee * J, V * J).floor() }, this.setDrawingBufferSize = function (E, I, F) { ee = E, V = I, J = F, n.width = Math.floor(E * F), n.height = Math.floor(I * F), this.setViewport(0, 0, E, I) }, this.getCurrentViewport = function (E) { return E.copy(v) }, this.getViewport = function (E) { return E.copy(Z) }, this.setViewport = function (E, I, F, k) { E.isVector4 ? Z.set(E.x, E.y, E.z, E.w) : Z.set(E, I, F, k), Re.viewport(v.copy(Z).multiplyScalar(J).round()) }, this.getScissor = function (E) { return E.copy(oe) }, this.setScissor = function (E, I, F, k) { E.isVector4 ? oe.set(E.x, E.y, E.z, E.w) : oe.set(E, I, F, k), Re.scissor(T.copy(oe).multiplyScalar(J).round()) }, this.getScissorTest = function () { return we }, this.setScissorTest = function (E) { Re.setScissorTest(we = E) }, this.setOpaqueSort = function (E) { L = E }, this.setTransparentSort = function (E) { $ = E }, this.getClearColor = function (E) { return E.copy(Ae.getClearColor()) }, this.setClearColor = function () { Ae.setClearColor.apply(Ae, arguments) }, this.getClearAlpha = function () { return Ae.getClearAlpha() }, this.setClearAlpha = function () { Ae.setClearAlpha.apply(Ae, arguments) }, this.clear = function (E = !0, I = !0, F = !0) { let k = 0; if (E) { let N = !1; if (w !== null) { const se = w.texture.format; N = se === Gf || se === Vf || se === Hf } if (N) { const se = w.texture.type, ve = se === _i || se === Ar || se === Io || se === Ps || se === zf || se === Bf, ye = Ae.getClearColor(), Se = Ae.getClearAlpha(), be = ye.r, De = ye.g, Me = ye.b; ve ? (g[0] = be, g[1] = De, g[2] = Me, g[3] = Se, b.clearBufferuiv(b.COLOR, 0, g)) : (x[0] = be, x[1] = De, x[2] = Me, x[3] = Se, b.clearBufferiv(b.COLOR, 0, x)) } else k |= b.COLOR_BUFFER_BIT } I && (k |= b.DEPTH_BUFFER_BIT, b.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), F && (k |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(k) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { n.removeEventListener("webglcontextlost", Q, !1), n.removeEventListener("webglcontextrestored", pe, !1), n.removeEventListener("webglcontextcreationerror", ge, !1), ce.dispose(), Ue.dispose(), Pe.dispose(), M.dispose(), O.dispose(), Y.dispose(), Be.dispose(), D.dispose(), fe.dispose(), G.dispose(), G.removeEventListener("sessionstart", eh), G.removeEventListener("sessionend", th), tr.stop() }; function Q(E) { E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = !0 } function pe() { console.log("THREE.WebGLRenderer: Context Restored."), S = !1; const E = tt.autoReset, I = ue.enabled, F = ue.autoUpdate, k = ue.needsUpdate, N = ue.type; _e(), tt.autoReset = E, ue.enabled = I, ue.autoUpdate = F, ue.needsUpdate = k, ue.type = N } function ge(E) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage) } function Ge(E) { const I = E.target; I.removeEventListener("dispose", Ge), ut(I) } function ut(E) { Jt(E), Pe.remove(E) } function Jt(E) { const I = Pe.get(E).programs; I !== void 0 && (I.forEach(function (F) { fe.releaseProgram(F) }), E.isShaderMaterial && fe.releaseShaderCache(E)) } this.renderBufferDirect = function (E, I, F, k, N, se) { I === null && (I = We); const ve = N.isMesh && N.matrixWorld.determinant() < 0, ye = xv(E, I, F, k, N); Re.setMaterial(k, ve); let Se = F.index, be = 1; if (k.wireframe === !0) { if (Se = K.getWireframeAttribute(F), Se === void 0) return; be = 2 } const De = F.drawRange, Me = F.attributes.position; let Je = De.start * be, rt = (De.start + De.count) * be; se !== null && (Je = Math.max(Je, se.start * be), rt = Math.min(rt, (se.start + se.count) * be)), Se !== null ? (Je = Math.max(Je, 0), rt = Math.min(rt, Se.count)) : Me != null && (Je = Math.max(Je, 0), rt = Math.min(rt, Me.count)); const pt = rt - Je; if (pt < 0 || pt === 1 / 0) return; Be.setup(N, k, ye, F, Se); let ln, $e = he; if (Se !== null && (ln = z.get(Se), $e = Ne, $e.setIndex(ln)), N.isMesh) k.wireframe === !0 ? (Re.setLineWidth(k.wireframeLinewidth * Oe()), $e.setMode(b.LINES)) : $e.setMode(b.TRIANGLES); else if (N.isLine) { let Te = k.linewidth; Te === void 0 && (Te = 1), Re.setLineWidth(Te * Oe()), N.isLineSegments ? $e.setMode(b.LINES) : N.isLineLoop ? $e.setMode(b.LINE_LOOP) : $e.setMode(b.LINE_STRIP) } else N.isPoints ? $e.setMode(b.POINTS) : N.isSprite && $e.setMode(b.TRIANGLES); if (N.isBatchedMesh) if (N._multiDrawInstances !== null) $e.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances); else if (ze.get("WEBGL_multi_draw")) $e.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount); else { const Te = N._multiDrawStarts, Lt = N._multiDrawCounts, Ze = N._multiDrawCount, Pn = Se ? z.get(Se).bytesPerElement : 1, Dr = Pe.get(k).currentProgram.getUniforms(); for (let cn = 0; cn < Ze; cn++)Dr.setValue(b, "_gl_DrawID", cn), $e.render(Te[cn] / Pn, Lt[cn]) } else if (N.isInstancedMesh) $e.renderInstances(Je, pt, N.count); else if (F.isInstancedBufferGeometry) { const Te = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, Lt = Math.min(F.instanceCount, Te); $e.renderInstances(Je, pt, Lt) } else $e.render(Je, pt) }; function Ke(E, I, F) { E.transparent === !0 && E.side === $n && E.forceSinglePass === !1 ? (E.side = Kt, E.needsUpdate = !0, Wo(E, I, F), E.side = $i, E.needsUpdate = !0, Wo(E, I, F), E.side = $n) : Wo(E, I, F) } this.compile = function (E, I, F = null) { F === null && (F = E), p = Ue.get(F), p.init(I), m.push(p), F.traverseVisible(function (N) { N.isLight && N.layers.test(I.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N)) }), E !== F && E.traverseVisible(function (N) { N.isLight && N.layers.test(I.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N)) }), p.setupLights(); const k = new Set; return E.traverse(function (N) { if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite)) return; const se = N.material; if (se) if (Array.isArray(se)) for (let ve = 0; ve < se.length; ve++) { const ye = se[ve]; Ke(ye, F, N), k.add(ye) } else Ke(se, F, N), k.add(se) }), m.pop(), p = null, k }, this.compileAsync = function (E, I, F = null) { const k = this.compile(E, I, F); return new Promise(N => { function se() { if (k.forEach(function (ve) { Pe.get(ve).currentProgram.isReady() && k.delete(ve) }), k.size === 0) { N(E); return } setTimeout(se, 10) } ze.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10) }) }; let en = null; function Jn(E) { en && en(E) } function eh() { tr.stop() } function th() { tr.start() } const tr = new av; tr.setAnimationLoop(Jn), typeof self < "u" && tr.setContext(self), this.setAnimationLoop = function (E) { en = E, G.setAnimationLoop(E), E === null ? tr.stop() : tr.start() }, G.addEventListener("sessionstart", eh), G.addEventListener("sessionend", th), this.render = function (E, I) { if (I !== void 0 && I.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (S === !0) return; if (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), G.enabled === !0 && G.isPresenting === !0 && (G.cameraAutoUpdate === !0 && G.updateCamera(I), I = G.getCamera()), E.isScene === !0 && E.onBeforeRender(_, E, I, w), p = Ue.get(E, m.length), p.init(I), m.push(p), le.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), Ve.setFromProjectionMatrix(le), te = this.localClippingEnabled, j = ie.init(this.clippingPlanes, te), y = ce.get(E, u.length), y.init(), u.push(y), G.enabled === !0 && G.isPresenting === !0) { const se = _.xr.getDepthSensingMesh(); se !== null && $l(se, I, -1 / 0, _.sortObjects) } $l(E, I, 0, _.sortObjects), y.finish(), _.sortObjects === !0 && y.sort(L, $), Ye = G.enabled === !1 || G.isPresenting === !1 || G.hasDepthSensing() === !1, Ye && Ae.addToRenderList(y, E), this.info.render.frame++, j === !0 && ie.beginShadows(); const F = p.state.shadowsArray; ue.render(F, E, I), j === !0 && ie.endShadows(), this.info.autoReset === !0 && this.info.reset(); const k = y.opaque, N = y.transmissive; if (p.setupLights(), I.isArrayCamera) { const se = I.cameras; if (N.length > 0) for (let ve = 0, ye = se.length; ve < ye; ve++) { const Se = se[ve]; ih(k, N, E, Se) } Ye && Ae.render(E); for (let ve = 0, ye = se.length; ve < ye; ve++) { const Se = se[ve]; nh(y, E, Se, Se.viewport) } } else N.length > 0 && ih(k, N, E, I), Ye && Ae.render(E), nh(y, E, I); w !== null && (C.updateMultisampleRenderTarget(w), C.updateRenderTargetMipmap(w)), E.isScene === !0 && E.onAfterRender(_, E, I), Be.resetDefaultState(), P = -1, X = null, m.pop(), m.length > 0 ? (p = m[m.length - 1], j === !0 && ie.setGlobalState(_.clippingPlanes, p.state.camera)) : p = null, u.pop(), u.length > 0 ? y = u[u.length - 1] : y = null }; function $l(E, I, F, k) { if (E.visible === !1) return; if (E.layers.test(I.layers)) { if (E.isGroup) F = E.renderOrder; else if (E.isLOD) E.autoUpdate === !0 && E.update(I); else if (E.isLight) p.pushLight(E), E.castShadow && p.pushShadow(E); else if (E.isSprite) { if (!E.frustumCulled || Ve.intersectsSprite(E)) { k && Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le); const ve = Y.update(E), ye = E.material; ye.visible && y.push(E, ve, ye, F, Ce.z, null) } } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || Ve.intersectsObject(E))) { const ve = Y.update(E), ye = E.material; if (k && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Ce.copy(E.boundingSphere.center)) : (ve.boundingSphere === null && ve.computeBoundingSphere(), Ce.copy(ve.boundingSphere.center)), Ce.applyMatrix4(E.matrixWorld).applyMatrix4(le)), Array.isArray(ye)) { const Se = ve.groups; for (let be = 0, De = Se.length; be < De; be++) { const Me = Se[be], Je = ye[Me.materialIndex]; Je && Je.visible && y.push(E, ve, Je, F, Ce.z, Me) } } else ye.visible && y.push(E, ve, ye, F, Ce.z, null) } } const se = E.children; for (let ve = 0, ye = se.length; ve < ye; ve++)$l(se[ve], I, F, k) } function nh(E, I, F, k) { const N = E.opaque, se = E.transmissive, ve = E.transparent; p.setupLightsView(F), j === !0 && ie.setGlobalState(_.clippingPlanes, F), k && Re.viewport(v.copy(k)), N.length > 0 && Go(N, I, F), se.length > 0 && Go(se, I, F), ve.length > 0 && Go(ve, I, F), Re.buffers.depth.setTest(!0), Re.buffers.depth.setMask(!0), Re.buffers.color.setMask(!0), Re.setPolygonOffset(!1) } function ih(E, I, F, k) { if ((F.isScene === !0 ? F.overrideMaterial : null) !== null) return; p.state.transmissionRenderTarget[k.id] === void 0 && (p.state.transmissionRenderTarget[k.id] = new Cr(1, 1, { generateMipmaps: !0, type: ze.has("EXT_color_buffer_half_float") || ze.has("EXT_color_buffer_float") ? Bo : _i, minFilter: _r, samples: 4, stencilBuffer: s, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: Qe.workingColorSpace })); const se = p.state.transmissionRenderTarget[k.id], ve = k.viewport || v; se.setSize(ve.z, ve.w); const ye = _.getRenderTarget(); _.setRenderTarget(se), _.getClearColor(B), q = _.getClearAlpha(), q < 1 && _.setClearColor(16777215, .5), _.clear(), Ye && Ae.render(F); const Se = _.toneMapping; _.toneMapping = Yi; const be = k.viewport; if (k.viewport !== void 0 && (k.viewport = void 0), p.setupLightsView(k), j === !0 && ie.setGlobalState(_.clippingPlanes, k), Go(E, F, k), C.updateMultisampleRenderTarget(se), C.updateRenderTargetMipmap(se), ze.has("WEBGL_multisampled_render_to_texture") === !1) { let De = !1; for (let Me = 0, Je = I.length; Me < Je; Me++) { const rt = I[Me], pt = rt.object, ln = rt.geometry, $e = rt.material, Te = rt.group; if ($e.side === $n && pt.layers.test(k.layers)) { const Lt = $e.side; $e.side = Kt, $e.needsUpdate = !0, rh(pt, F, k, ln, $e, Te), $e.side = Lt, $e.needsUpdate = !0, De = !0 } } De === !0 && (C.updateMultisampleRenderTarget(se), C.updateRenderTargetMipmap(se)) } _.setRenderTarget(ye), _.setClearColor(B, q), be !== void 0 && (k.viewport = be), _.toneMapping = Se } function Go(E, I, F) { const k = I.isScene === !0 ? I.overrideMaterial : null; for (let N = 0, se = E.length; N < se; N++) { const ve = E[N], ye = ve.object, Se = ve.geometry, be = k === null ? ve.material : k, De = ve.group; ye.layers.test(F.layers) && rh(ye, I, F, Se, be, De) } } function rh(E, I, F, k, N, se) { E.onBeforeRender(_, I, F, k, N, se), E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), N.onBeforeRender(_, I, F, k, E, se), N.transparent === !0 && N.side === $n && N.forceSinglePass === !1 ? (N.side = Kt, N.needsUpdate = !0, _.renderBufferDirect(F, I, k, N, E, se), N.side = $i, N.needsUpdate = !0, _.renderBufferDirect(F, I, k, N, E, se), N.side = $n) : _.renderBufferDirect(F, I, k, N, E, se), E.onAfterRender(_, I, F, k, N, se) } function Wo(E, I, F) { I.isScene !== !0 && (I = We); const k = Pe.get(E), N = p.state.lights, se = p.state.shadowsArray, ve = N.state.version, ye = fe.getParameters(E, N.state, se, I, F), Se = fe.getProgramCacheKey(ye); let be = k.programs; k.environment = E.isMeshStandardMaterial ? I.environment : null, k.fog = I.fog, k.envMap = (E.isMeshStandardMaterial ? O : M).get(E.envMap || k.environment), k.envMapRotation = k.environment !== null && E.envMap === null ? I.environmentRotation : E.envMapRotation, be === void 0 && (E.addEventListener("dispose", Ge), be = new Map, k.programs = be); let De = be.get(Se); if (De !== void 0) { if (k.currentProgram === De && k.lightsStateVersion === ve) return oh(E, ye), De } else ye.uniforms = fe.getUniforms(E), E.onBeforeCompile(ye, _), De = fe.acquireProgram(ye, Se), be.set(Se, De), k.uniforms = ye.uniforms; const Me = k.uniforms; return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Me.clippingPlanes = ie.uniform), oh(E, ye), k.needsLights = Sv(E), k.lightsStateVersion = ve, k.needsLights && (Me.ambientLightColor.value = N.state.ambient, Me.lightProbe.value = N.state.probe, Me.directionalLights.value = N.state.directional, Me.directionalLightShadows.value = N.state.directionalShadow, Me.spotLights.value = N.state.spot, Me.spotLightShadows.value = N.state.spotShadow, Me.rectAreaLights.value = N.state.rectArea, Me.ltc_1.value = N.state.rectAreaLTC1, Me.ltc_2.value = N.state.rectAreaLTC2, Me.pointLights.value = N.state.point, Me.pointLightShadows.value = N.state.pointShadow, Me.hemisphereLights.value = N.state.hemi, Me.directionalShadowMap.value = N.state.directionalShadowMap, Me.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Me.spotShadowMap.value = N.state.spotShadowMap, Me.spotLightMatrix.value = N.state.spotLightMatrix, Me.spotLightMap.value = N.state.spotLightMap, Me.pointShadowMap.value = N.state.pointShadowMap, Me.pointShadowMatrix.value = N.state.pointShadowMatrix), k.currentProgram = De, k.uniformsList = null, De } function sh(E) { if (E.uniformsList === null) { const I = E.currentProgram.getUniforms(); E.uniformsList = $a.seqWithValue(I.seq, E.uniforms) } return E.uniformsList } function oh(E, I) { const F = Pe.get(E); F.outputColorSpace = I.outputColorSpace, F.batching = I.batching, F.batchingColor = I.batchingColor, F.instancing = I.instancing, F.instancingColor = I.instancingColor, F.instancingMorph = I.instancingMorph, F.skinning = I.skinning, F.morphTargets = I.morphTargets, F.morphNormals = I.morphNormals, F.morphColors = I.morphColors, F.morphTargetsCount = I.morphTargetsCount, F.numClippingPlanes = I.numClippingPlanes, F.numIntersection = I.numClipIntersection, F.vertexAlphas = I.vertexAlphas, F.vertexTangents = I.vertexTangents, F.toneMapping = I.toneMapping } function xv(E, I, F, k, N) { I.isScene !== !0 && (I = We), C.resetTextureUnits(); const se = I.fog, ve = k.isMeshStandardMaterial ? I.environment : null, ye = w === null ? _.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : er, Se = (k.isMeshStandardMaterial ? O : M).get(k.envMap || ve), be = k.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, De = !!F.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Me = !!F.morphAttributes.position, Je = !!F.morphAttributes.normal, rt = !!F.morphAttributes.color; let pt = Yi; k.toneMapped && (w === null || w.isXRRenderTarget === !0) && (pt = _.toneMapping); const ln = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, $e = ln !== void 0 ? ln.length : 0, Te = Pe.get(k), Lt = p.state.lights; if (j === !0 && (te === !0 || E !== X)) { const xn = E === X && k.id === P; ie.setState(k, E, xn) } let Ze = !1; k.version === Te.__version ? (Te.needsLights && Te.lightsStateVersion !== Lt.state.version || Te.outputColorSpace !== ye || N.isBatchedMesh && Te.batching === !1 || !N.isBatchedMesh && Te.batching === !0 || N.isBatchedMesh && Te.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Te.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Te.instancing === !1 || !N.isInstancedMesh && Te.instancing === !0 || N.isSkinnedMesh && Te.skinning === !1 || !N.isSkinnedMesh && Te.skinning === !0 || N.isInstancedMesh && Te.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Te.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Te.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Te.instancingMorph === !1 && N.morphTexture !== null || Te.envMap !== Se || k.fog === !0 && Te.fog !== se || Te.numClippingPlanes !== void 0 && (Te.numClippingPlanes !== ie.numPlanes || Te.numIntersection !== ie.numIntersection) || Te.vertexAlphas !== be || Te.vertexTangents !== De || Te.morphTargets !== Me || Te.morphNormals !== Je || Te.morphColors !== rt || Te.toneMapping !== pt || Te.morphTargetsCount !== $e) && (Ze = !0) : (Ze = !0, Te.__version = k.version); let Pn = Te.currentProgram; Ze === !0 && (Pn = Wo(k, I, N)); let Dr = !1, cn = !1, Zl = !1; const _t = Pn.getUniforms(), yi = Te.uniforms; if (Re.useProgram(Pn.program) && (Dr = !0, cn = !0, Zl = !0), k.id !== P && (P = k.id, cn = !0), Dr || X !== E) { Xe.reverseDepthBuffer ? (me.copy(E.projectionMatrix), tS(me), nS(me), _t.setValue(b, "projectionMatrix", me)) : _t.setValue(b, "projectionMatrix", E.projectionMatrix), _t.setValue(b, "viewMatrix", E.matrixWorldInverse); const xn = _t.map.cameraPosition; xn !== void 0 && xn.setValue(b, Le.setFromMatrixPosition(E.matrixWorld)), Xe.logarithmicDepthBuffer && _t.setValue(b, "logDepthBufFC", 2 / (Math.log(E.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && _t.setValue(b, "isOrthographic", E.isOrthographicCamera === !0), X !== E && (X = E, cn = !0, Zl = !0) } if (N.isSkinnedMesh) { _t.setOptional(b, N, "bindMatrix"), _t.setOptional(b, N, "bindMatrixInverse"); const xn = N.skeleton; xn && (xn.boneTexture === null && xn.computeBoneTexture(), _t.setValue(b, "boneTexture", xn.boneTexture, C)) } N.isBatchedMesh && (_t.setOptional(b, N, "batchingTexture"), _t.setValue(b, "batchingTexture", N._matricesTexture, C), _t.setOptional(b, N, "batchingIdTexture"), _t.setValue(b, "batchingIdTexture", N._indirectTexture, C), _t.setOptional(b, N, "batchingColorTexture"), N._colorsTexture !== null && _t.setValue(b, "batchingColorTexture", N._colorsTexture, C)); const Ql = F.morphAttributes; if ((Ql.position !== void 0 || Ql.normal !== void 0 || Ql.color !== void 0) && ae.update(N, F, Pn), (cn || Te.receiveShadow !== N.receiveShadow) && (Te.receiveShadow = N.receiveShadow, _t.setValue(b, "receiveShadow", N.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (yi.envMap.value = Se, yi.flipEnvMap.value = Se.isCubeTexture && Se.isRenderTargetTexture === !1 ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && I.environment !== null && (yi.envMapIntensity.value = I.environmentIntensity), cn && (_t.setValue(b, "toneMappingExposure", _.toneMappingExposure), Te.needsLights && yv(yi, Zl), se && k.fog === !0 && re.refreshFogUniforms(yi, se), re.refreshMaterialUniforms(yi, k, J, V, p.state.transmissionRenderTarget[E.id]), $a.upload(b, sh(Te), yi, C)), k.isShaderMaterial && k.uniformsNeedUpdate === !0 && ($a.upload(b, sh(Te), yi, C), k.uniformsNeedUpdate = !1), k.isSpriteMaterial && _t.setValue(b, "center", N.center), _t.setValue(b, "modelViewMatrix", N.modelViewMatrix), _t.setValue(b, "normalMatrix", N.normalMatrix), _t.setValue(b, "modelMatrix", N.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) { const xn = k.uniformsGroups; for (let Jl = 0, Mv = xn.length; Jl < Mv; Jl++) { const ah = xn[Jl]; D.update(ah, Pn), D.bind(ah, Pn) } } return Pn } function yv(E, I) { E.ambientLightColor.needsUpdate = I, E.lightProbe.needsUpdate = I, E.directionalLights.needsUpdate = I, E.directionalLightShadows.needsUpdate = I, E.pointLights.needsUpdate = I, E.pointLightShadows.needsUpdate = I, E.spotLights.needsUpdate = I, E.spotLightShadows.needsUpdate = I, E.rectAreaLights.needsUpdate = I, E.hemisphereLights.needsUpdate = I } function Sv(E) { return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0 } this.getActiveCubeFace = function () { return R }, this.getActiveMipmapLevel = function () { return A }, this.getRenderTarget = function () { return w }, this.setRenderTargetTextures = function (E, I, F) { Pe.get(E.texture).__webglTexture = I, Pe.get(E.depthTexture).__webglTexture = F; const k = Pe.get(E); k.__hasExternalTextures = !0, k.__autoAllocateDepthBuffer = F === void 0, k.__autoAllocateDepthBuffer || ze.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = !1) }, this.setRenderTargetFramebuffer = function (E, I) { const F = Pe.get(E); F.__webglFramebuffer = I, F.__useDefaultFramebuffer = I === void 0 }, this.setRenderTarget = function (E, I = 0, F = 0) { w = E, R = I, A = F; let k = !0, N = null, se = !1, ve = !1; if (E) { const Se = Pe.get(E); if (Se.__useDefaultFramebuffer !== void 0) Re.bindFramebuffer(b.FRAMEBUFFER, null), k = !1; else if (Se.__webglFramebuffer === void 0) C.setupRenderTarget(E); else if (Se.__hasExternalTextures) C.rebindTextures(E, Pe.get(E.texture).__webglTexture, Pe.get(E.depthTexture).__webglTexture); else if (E.depthBuffer) { const Me = E.depthTexture; if (Se.__boundDepthTexture !== Me) { if (Me !== null && Pe.has(Me) && (E.width !== Me.image.width || E.height !== Me.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."); C.setupDepthRenderbuffer(E) } } const be = E.texture; (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (ve = !0); const De = Pe.get(E).__webglFramebuffer; E.isWebGLCubeRenderTarget ? (Array.isArray(De[I]) ? N = De[I][F] : N = De[I], se = !0) : E.samples > 0 && C.useMultisampledRTT(E) === !1 ? N = Pe.get(E).__webglMultisampledFramebuffer : Array.isArray(De) ? N = De[F] : N = De, v.copy(E.viewport), T.copy(E.scissor), H = E.scissorTest } else v.copy(Z).multiplyScalar(J).floor(), T.copy(oe).multiplyScalar(J).floor(), H = we; if (Re.bindFramebuffer(b.FRAMEBUFFER, N) && k && Re.drawBuffers(E, N), Re.viewport(v), Re.scissor(T), Re.setScissorTest(H), se) { const Se = Pe.get(E.texture); b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + I, Se.__webglTexture, F) } else if (ve) { const Se = Pe.get(E.texture), be = I || 0; b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, Se.__webglTexture, F || 0, be) } P = -1 }, this.readRenderTargetPixels = function (E, I, F, k, N, se, ve) { if (!(E && E.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let ye = Pe.get(E).__webglFramebuffer; if (E.isWebGLCubeRenderTarget && ve !== void 0 && (ye = ye[ve]), ye) { Re.bindFramebuffer(b.FRAMEBUFFER, ye); try { const Se = E.texture, be = Se.format, De = Se.type; if (!Xe.textureFormatReadable(be)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!Xe.textureTypeReadable(De)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } I >= 0 && I <= E.width - k && F >= 0 && F <= E.height - N && b.readPixels(I, F, k, N, Ee.convert(be), Ee.convert(De), se) } finally { const Se = w !== null ? Pe.get(w).__webglFramebuffer : null; Re.bindFramebuffer(b.FRAMEBUFFER, Se) } } }, this.readRenderTargetPixelsAsync = async function (E, I, F, k, N, se, ve) { if (!(E && E.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let ye = Pe.get(E).__webglFramebuffer; if (E.isWebGLCubeRenderTarget && ve !== void 0 && (ye = ye[ve]), ye) { const Se = E.texture, be = Se.format, De = Se.type; if (!Xe.textureFormatReadable(be)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."); if (!Xe.textureTypeReadable(De)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."); if (I >= 0 && I <= E.width - k && F >= 0 && F <= E.height - N) { Re.bindFramebuffer(b.FRAMEBUFFER, ye); const Me = b.createBuffer(); b.bindBuffer(b.PIXEL_PACK_BUFFER, Me), b.bufferData(b.PIXEL_PACK_BUFFER, se.byteLength, b.STREAM_READ), b.readPixels(I, F, k, N, Ee.convert(be), Ee.convert(De), 0); const Je = w !== null ? Pe.get(w).__webglFramebuffer : null; Re.bindFramebuffer(b.FRAMEBUFFER, Je); const rt = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0); return b.flush(), await eS(b, rt, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, Me), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, se), b.deleteBuffer(Me), b.deleteSync(rt), se } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.") } }, this.copyFramebufferToTexture = function (E, I = null, F = 0) { E.isTexture !== !0 && (Ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, E = arguments[1]); const k = Math.pow(2, -F), N = Math.floor(E.image.width * k), se = Math.floor(E.image.height * k), ve = I !== null ? I.x : 0, ye = I !== null ? I.y : 0; C.setTexture2D(E, 0), b.copyTexSubImage2D(b.TEXTURE_2D, F, 0, 0, ve, ye, N, se), Re.unbindTexture() }, this.copyTextureToTexture = function (E, I, F = null, k = null, N = 0) { E.isTexture !== !0 && (Ka("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, E = arguments[1], I = arguments[2], N = arguments[3] || 0, F = null); let se, ve, ye, Se, be, De; F !== null ? (se = F.max.x - F.min.x, ve = F.max.y - F.min.y, ye = F.min.x, Se = F.min.y) : (se = E.image.width, ve = E.image.height, ye = 0, Se = 0), k !== null ? (be = k.x, De = k.y) : (be = 0, De = 0); const Me = Ee.convert(I.format), Je = Ee.convert(I.type); C.setTexture2D(I, 0), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, I.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, I.unpackAlignment); const rt = b.getParameter(b.UNPACK_ROW_LENGTH), pt = b.getParameter(b.UNPACK_IMAGE_HEIGHT), ln = b.getParameter(b.UNPACK_SKIP_PIXELS), $e = b.getParameter(b.UNPACK_SKIP_ROWS), Te = b.getParameter(b.UNPACK_SKIP_IMAGES), Lt = E.isCompressedTexture ? E.mipmaps[N] : E.image; b.pixelStorei(b.UNPACK_ROW_LENGTH, Lt.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Lt.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, ye), b.pixelStorei(b.UNPACK_SKIP_ROWS, Se), E.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, N, be, De, se, ve, Me, Je, Lt.data) : E.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, N, be, De, Lt.width, Lt.height, Me, Lt.data) : b.texSubImage2D(b.TEXTURE_2D, N, be, De, se, ve, Me, Je, Lt), b.pixelStorei(b.UNPACK_ROW_LENGTH, rt), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, pt), b.pixelStorei(b.UNPACK_SKIP_PIXELS, ln), b.pixelStorei(b.UNPACK_SKIP_ROWS, $e), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Te), N === 0 && I.generateMipmaps && b.generateMipmap(b.TEXTURE_2D), Re.unbindTexture() }, this.copyTextureToTexture3D = function (E, I, F = null, k = null, N = 0) { E.isTexture !== !0 && (Ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, k = arguments[1] || null, E = arguments[2], I = arguments[3], N = arguments[4] || 0); let se, ve, ye, Se, be, De, Me, Je, rt; const pt = E.isCompressedTexture ? E.mipmaps[N] : E.image; F !== null ? (se = F.max.x - F.min.x, ve = F.max.y - F.min.y, ye = F.max.z - F.min.z, Se = F.min.x, be = F.min.y, De = F.min.z) : (se = pt.width, ve = pt.height, ye = pt.depth, Se = 0, be = 0, De = 0), k !== null ? (Me = k.x, Je = k.y, rt = k.z) : (Me = 0, Je = 0, rt = 0); const ln = Ee.convert(I.format), $e = Ee.convert(I.type); let Te; if (I.isData3DTexture) C.setTexture3D(I, 0), Te = b.TEXTURE_3D; else if (I.isDataArrayTexture || I.isCompressedArrayTexture) C.setTexture2DArray(I, 0), Te = b.TEXTURE_2D_ARRAY; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, I.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, I.unpackAlignment); const Lt = b.getParameter(b.UNPACK_ROW_LENGTH), Ze = b.getParameter(b.UNPACK_IMAGE_HEIGHT), Pn = b.getParameter(b.UNPACK_SKIP_PIXELS), Dr = b.getParameter(b.UNPACK_SKIP_ROWS), cn = b.getParameter(b.UNPACK_SKIP_IMAGES); b.pixelStorei(b.UNPACK_ROW_LENGTH, pt.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, pt.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, Se), b.pixelStorei(b.UNPACK_SKIP_ROWS, be), b.pixelStorei(b.UNPACK_SKIP_IMAGES, De), E.isDataTexture || E.isData3DTexture ? b.texSubImage3D(Te, N, Me, Je, rt, se, ve, ye, ln, $e, pt.data) : I.isCompressedArrayTexture ? b.compressedTexSubImage3D(Te, N, Me, Je, rt, se, ve, ye, ln, pt.data) : b.texSubImage3D(Te, N, Me, Je, rt, se, ve, ye, ln, $e, pt), b.pixelStorei(b.UNPACK_ROW_LENGTH, Lt), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Ze), b.pixelStorei(b.UNPACK_SKIP_PIXELS, Pn), b.pixelStorei(b.UNPACK_SKIP_ROWS, Dr), b.pixelStorei(b.UNPACK_SKIP_IMAGES, cn), N === 0 && I.generateMipmaps && b.generateMipmap(Te), Re.unbindTexture() }, this.initRenderTarget = function (E) { Pe.get(E).__webglFramebuffer === void 0 && C.setupRenderTarget(E) }, this.initTexture = function (E) { E.isCubeTexture ? C.setTextureCube(E, 0) : E.isData3DTexture ? C.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? C.setTexture2DArray(E, 0) : C.setTexture2D(E, 0), Re.unbindTexture() }, this.resetState = function () { R = 0, A = 0, w = null, Re.reset(), Be.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return di } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const n = this.getContext(); n.drawingBufferColorSpace = e === Wf ? "display-p3" : "srgb", n.unpackColorSpace = Qe.workingColorSpace === Xl ? "display-p3" : "srgb" } } class Kf { constructor(e, n = 25e-5) { this.isFogExp2 = !0, this.name = "", this.color = new je(e), this.density = n } clone() { return new Kf(this.color, this.density) } toJSON() { return { type: "FogExp2", name: this.name, color: this.color.getHex(), density: this.density } } } class hw extends Nt { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Wn, this.environmentIntensity = 1, this.environmentRotation = new Wn, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, n) { return super.copy(e, n), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const n = super.toJSON(e); return this.fog !== null && (n.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (n.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (n.object.backgroundIntensity = this.backgroundIntensity), n.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (n.object.environmentIntensity = this.environmentIntensity), n.object.environmentRotation = this.environmentRotation.toArray(), n } } class Bd extends Os { constructor(e) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new je(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this } } const Al = new U, Cl = new U, dm = new ct, Zs = new Yl, Pa = new jl, tu = new U, fm = new U; class pv extends Nt { constructor(e = new gn, n = new Bd) { super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = n, this.updateMorphTargets() } copy(e, n) { return super.copy(e, n), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } computeLineDistances() { const e = this.geometry; if (e.index === null) { const n = e.attributes.position, i = [0]; for (let r = 1, s = n.count; r < s; r++)Al.fromBufferAttribute(n, r - 1), Cl.fromBufferAttribute(n, r), i[r] = i[r - 1], i[r] += Al.distanceTo(Cl); e.setAttribute("lineDistance", new bt(i, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(e, n) { const i = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = i.drawRange; if (i.boundingSphere === null && i.computeBoundingSphere(), Pa.copy(i.boundingSphere), Pa.applyMatrix4(r), Pa.radius += s, e.ray.intersectsSphere(Pa) === !1) return; dm.copy(r).invert(), Zs.copy(e.ray).applyMatrix4(dm); const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, d = i.index, f = i.attributes.position; if (d !== null) { const g = Math.max(0, o.start), x = Math.min(d.count, o.start + o.count); for (let y = g, p = x - 1; y < p; y += c) { const u = d.getX(y), m = d.getX(y + 1), _ = ba(this, e, Zs, l, u, m); _ && n.push(_) } if (this.isLineLoop) { const y = d.getX(x - 1), p = d.getX(g), u = ba(this, e, Zs, l, y, p); u && n.push(u) } } else { const g = Math.max(0, o.start), x = Math.min(f.count, o.start + o.count); for (let y = g, p = x - 1; y < p; y += c) { const u = ba(this, e, Zs, l, y, y + 1); u && n.push(u) } if (this.isLineLoop) { const y = ba(this, e, Zs, l, x - 1, g); y && n.push(y) } } } updateMorphTargets() { const n = this.geometry.morphAttributes, i = Object.keys(n); if (i.length > 0) { const r = n[i[0]]; if (r !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, o = r.length; s < o; s++) { const a = r[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s } } } } } function ba(t, e, n, i, r, s) { const o = t.geometry.attributes.position; if (Al.fromBufferAttribute(o, r), Cl.fromBufferAttribute(o, s), n.distanceSqToSegment(Al, Cl, tu, fm) > i) return; tu.applyMatrix4(t.matrixWorld); const l = e.ray.origin.distanceTo(tu); if (!(l < e.near || l > e.far)) return { distance: l, point: fm.clone().applyMatrix4(t.matrixWorld), index: r, face: null, faceIndex: null, barycoord: null, object: t } } const hm = new U, pm = new U; class pw extends pv { constructor(e, n) { super(e, n), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { const e = this.geometry; if (e.index === null) { const n = e.attributes.position, i = []; for (let r = 0, s = n.count; r < s; r += 2)hm.fromBufferAttribute(n, r), pm.fromBufferAttribute(n, r + 1), i[r] = r === 0 ? 0 : i[r - 1], i[r + 1] = i[r] + hm.distanceTo(pm); e.setAttribute("lineDistance", new bt(i, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } } class mv extends $t { constructor(e, n, i, r, s, o, a, l, c) { super(e, n, i, r, s, o, a, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0 } } class $f extends gn { constructor(e = [], n = [], i = 1, r = 0) { super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: e, indices: n, radius: i, detail: r }; const s = [], o = []; a(r), c(i), d(), this.setAttribute("position", new bt(s, 3)), this.setAttribute("normal", new bt(s.slice(), 3)), this.setAttribute("uv", new bt(o, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals(); function a(m) { const _ = new U, S = new U, R = new U; for (let A = 0; A < n.length; A += 3)g(n[A + 0], _), g(n[A + 1], S), g(n[A + 2], R), l(_, S, R, m) } function l(m, _, S, R) { const A = R + 1, w = []; for (let P = 0; P <= A; P++) { w[P] = []; const X = m.clone().lerp(S, P / A), v = _.clone().lerp(S, P / A), T = A - P; for (let H = 0; H <= T; H++)H === 0 && P === A ? w[P][H] = X : w[P][H] = X.clone().lerp(v, H / T) } for (let P = 0; P < A; P++)for (let X = 0; X < 2 * (A - P) - 1; X++) { const v = Math.floor(X / 2); X % 2 === 0 ? (f(w[P][v + 1]), f(w[P + 1][v]), f(w[P][v])) : (f(w[P][v + 1]), f(w[P + 1][v + 1]), f(w[P + 1][v])) } } function c(m) { const _ = new U; for (let S = 0; S < s.length; S += 3)_.x = s[S + 0], _.y = s[S + 1], _.z = s[S + 2], _.normalize().multiplyScalar(m), s[S + 0] = _.x, s[S + 1] = _.y, s[S + 2] = _.z } function d() { const m = new U; for (let _ = 0; _ < s.length; _ += 3) { m.x = s[_ + 0], m.y = s[_ + 1], m.z = s[_ + 2]; const S = p(m) / 2 / Math.PI + .5, R = u(m) / Math.PI + .5; o.push(S, 1 - R) } x(), h() } function h() { for (let m = 0; m < o.length; m += 6) { const _ = o[m + 0], S = o[m + 2], R = o[m + 4], A = Math.max(_, S, R), w = Math.min(_, S, R); A > .9 && w < .1 && (_ < .2 && (o[m + 0] += 1), S < .2 && (o[m + 2] += 1), R < .2 && (o[m + 4] += 1)) } } function f(m) { s.push(m.x, m.y, m.z) } function g(m, _) { const S = m * 3; _.x = e[S + 0], _.y = e[S + 1], _.z = e[S + 2] } function x() { const m = new U, _ = new U, S = new U, R = new U, A = new Ie, w = new Ie, P = new Ie; for (let X = 0, v = 0; X < s.length; X += 9, v += 6) { m.set(s[X + 0], s[X + 1], s[X + 2]), _.set(s[X + 3], s[X + 4], s[X + 5]), S.set(s[X + 6], s[X + 7], s[X + 8]), A.set(o[v + 0], o[v + 1]), w.set(o[v + 2], o[v + 3]), P.set(o[v + 4], o[v + 5]), R.copy(m).add(_).add(S).divideScalar(3); const T = p(R); y(A, v + 0, m, T), y(w, v + 2, _, T), y(P, v + 4, S, T) } } function y(m, _, S, R) { R < 0 && m.x === 1 && (o[_] = m.x - 1), S.x === 0 && S.z === 0 && (o[_] = R / 2 / Math.PI + .5) } function p(m) { return Math.atan2(m.z, -m.x) } function u(m) { return Math.atan2(-m.y, Math.sqrt(m.x * m.x + m.z * m.z)) } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new $f(e.vertices, e.indices, e.radius, e.details) } } class Zf extends $f { constructor(e = 1, n = 0) { const i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], r = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2]; super(i, r, e, n), this.type = "OctahedronGeometry", this.parameters = { radius: e, detail: n } } static fromJSON(e) { return new Zf(e.radius, e.detail) } } class Qf extends gn { constructor(e = .5, n = 1, i = 32, r = 1, s = 0, o = Math.PI * 2) { super(), this.type = "RingGeometry", this.parameters = { innerRadius: e, outerRadius: n, thetaSegments: i, phiSegments: r, thetaStart: s, thetaLength: o }, i = Math.max(3, i), r = Math.max(1, r); const a = [], l = [], c = [], d = []; let h = e; const f = (n - e) / r, g = new U, x = new Ie; for (let y = 0; y <= r; y++) { for (let p = 0; p <= i; p++) { const u = s + p / i * o; g.x = h * Math.cos(u), g.y = h * Math.sin(u), l.push(g.x, g.y, g.z), c.push(0, 0, 1), x.x = (g.x / n + 1) / 2, x.y = (g.y / n + 1) / 2, d.push(x.x, x.y) } h += f } for (let y = 0; y < r; y++) { const p = y * (i + 1); for (let u = 0; u < i; u++) { const m = u + p, _ = m, S = m + i + 1, R = m + i + 2, A = m + 1; a.push(_, S, A), a.push(S, R, A) } } this.setIndex(a), this.setAttribute("position", new bt(l, 3)), this.setAttribute("normal", new bt(c, 3)), this.setAttribute("uv", new bt(d, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Qf(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength) } } class Di extends gn { constructor(e = 1, n = 32, i = 16, r = 0, s = Math.PI * 2, o = 0, a = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: n, heightSegments: i, phiStart: r, phiLength: s, thetaStart: o, thetaLength: a }, n = Math.max(3, Math.floor(n)), i = Math.max(2, Math.floor(i)); const l = Math.min(o + a, Math.PI); let c = 0; const d = [], h = new U, f = new U, g = [], x = [], y = [], p = []; for (let u = 0; u <= i; u++) { const m = [], _ = u / i; let S = 0; u === 0 && o === 0 ? S = .5 / n : u === i && l === Math.PI && (S = -.5 / n); for (let R = 0; R <= n; R++) { const A = R / n; h.x = -e * Math.cos(r + A * s) * Math.sin(o + _ * a), h.y = e * Math.cos(o + _ * a), h.z = e * Math.sin(r + A * s) * Math.sin(o + _ * a), x.push(h.x, h.y, h.z), f.copy(h).normalize(), y.push(f.x, f.y, f.z), p.push(A + S, 1 - _), m.push(c++) } d.push(m) } for (let u = 0; u < i; u++)for (let m = 0; m < n; m++) { const _ = d[u][m + 1], S = d[u][m], R = d[u + 1][m], A = d[u + 1][m + 1]; (u !== 0 || o > 0) && g.push(_, S, A), (u !== i - 1 || l < Math.PI) && g.push(S, R, A) } this.setIndex(g), this.setAttribute("position", new bt(x, 3)), this.setAttribute("normal", new bt(y, 3)), this.setAttribute("uv", new bt(p, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Di(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength) } } class nu extends Os { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new je(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new je(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = $_, this.normalScale = new Ie(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Wn, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class gv extends Nt { constructor(e, n = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new je(e), this.intensity = n } dispose() { } copy(e, n) { return super.copy(e, n), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { const n = super.toJSON(e); return n.object.color = this.color.getHex(), n.object.intensity = this.intensity, this.groundColor !== void 0 && (n.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (n.object.distance = this.distance), this.angle !== void 0 && (n.object.angle = this.angle), this.decay !== void 0 && (n.object.decay = this.decay), this.penumbra !== void 0 && (n.object.penumbra = this.penumbra), this.shadow !== void 0 && (n.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (n.object.target = this.target.uuid), n } } const iu = new ct, mm = new U, gm = new U; class mw { constructor(e) { this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ie(512, 512), this.map = null, this.mapPass = null, this.matrix = new ct, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Yf, this._frameExtents = new Ie(1, 1), this._viewportCount = 1, this._viewports = [new gt(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { const n = this.camera, i = this.matrix; mm.setFromMatrixPosition(e.matrixWorld), n.position.copy(mm), gm.setFromMatrixPosition(e.target.matrixWorld), n.lookAt(gm), n.updateMatrixWorld(), iu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(iu), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(iu) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const e = {}; return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } } class gw extends mw { constructor() { super(new lv(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class _m extends gv { constructor(e, n) { super(e, n), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Nt.DEFAULT_UP), this.updateMatrix(), this.target = new Nt, this.shadow = new gw } dispose() { this.shadow.dispose() } copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } class _w extends gv { constructor(e, n) { super(e, n), this.isAmbientLight = !0, this.type = "AmbientLight" } } class vw { constructor(e = !0) { this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 } start() { this.startTime = vm(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 } stop() { this.getElapsedTime(), this.running = !1, this.autoStart = !1 } getElapsedTime() { return this.getDelta(), this.elapsedTime } getDelta() { let e = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { const n = vm(); e = (n - this.oldTime) / 1e3, this.oldTime = n, this.elapsedTime += e } return e } } function vm() { return performance.now() } const xm = new ct; class xw { constructor(e, n, i = 0, r = 1 / 0) { this.ray = new Yl(e, n), this.near = i, this.far = r, this.camera = null, this.layers = new jf, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} } } set(e, n) { this.ray.set(e, n) } setFromCamera(e, n) { n.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(n.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(n).sub(this.ray.origin).normalize(), this.camera = n) : n.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (n.near + n.far) / (n.near - n.far)).unproject(n), this.ray.direction.set(0, 0, -1).transformDirection(n.matrixWorld), this.camera = n) : console.error("THREE.Raycaster: Unsupported camera type: " + n.type) } setFromXRController(e) { return xm.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(xm), this } intersectObject(e, n = !0, i = []) { return Hd(e, this, i, n), i.sort(ym), i } intersectObjects(e, n = !0, i = []) { for (let r = 0, s = e.length; r < s; r++)Hd(e[r], this, i, n); return i.sort(ym), i } } function ym(t, e) { return t.distance - e.distance } function Hd(t, e, n, i) { let r = !0; if (t.layers.test(e.layers) && t.raycast(e, n) === !1 && (r = !1), r === !0 && i === !0) { const s = t.children; for (let o = 0, a = s.length; o < a; o++)Hd(s[o], e, n, !0) } } class Sm { constructor(e = 1, n = 0, i = 0) { return this.radius = e, this.phi = n, this.theta = i, this } set(e, n, i) { return this.radius = e, this.phi = n, this.theta = i, this } copy(e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this } makeSafe() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this } setFromVector3(e) { return this.setFromCartesianCoords(e.x, e.y, e.z) } setFromCartesianCoords(e, n, i) { return this.radius = Math.sqrt(e * e + n * n + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(Gt(n / this.radius, -1, 1))), this } clone() { return new this.constructor().copy(this) } } class yw extends Lr { constructor(e, n = null) { super(), this.object = e, this.domElement = n, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null } } connect() { } disconnect() { } dispose() { } update() { } } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Ff } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ff); const Mm = { type: "change" }, Jf = { type: "start" }, _v = { type: "end" }, La = new Yl, Em = new Li, Sw = Math.cos(70 * kd.DEG2RAD), Mt = new U, tn = 2 * Math.PI, nt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, ru = 1e-6; class Mw extends yw { constructor(e, n = null) { super(e, n), this.state = nt.NONE, this.enabled = !0, this.target = new U, this.cursor = new U, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ms.ROTATE, MIDDLE: ms.DOLLY, RIGHT: ms.PAN }, this.touches = { ONE: as.ROTATE, TWO: as.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new U, this._lastQuaternion = new Rr, this._lastTargetPosition = new U, this._quat = new Rr().setFromUnitVectors(e.up, new U(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Sm, this._sphericalDelta = new Sm, this._scale = 1, this._panOffset = new U, this._rotateStart = new Ie, this._rotateEnd = new Ie, this._rotateDelta = new Ie, this._panStart = new Ie, this._panEnd = new Ie, this._panDelta = new Ie, this._dollyStart = new Ie, this._dollyEnd = new Ie, this._dollyDelta = new Ie, this._dollyDirection = new U, this._mouse = new Ie, this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Tw.bind(this), this._onPointerDown = Ew.bind(this), this._onPointerUp = ww.bind(this), this._onContextMenu = Dw.bind(this), this._onMouseWheel = Rw.bind(this), this._onKeyDown = Pw.bind(this), this._onTouchStart = bw.bind(this), this._onTouchMove = Lw.bind(this), this._onMouseDown = Aw.bind(this), this._onMouseMove = Cw.bind(this), this._interceptControlDown = Iw.bind(this), this._interceptControlUp = Nw.bind(this), this.domElement !== null && this.connect(), this.update() } connect() { this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none" } disconnect() { this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto" } dispose() { this.disconnect() } getPolarAngle() { return this._spherical.phi } getAzimuthalAngle() { return this._spherical.theta } getDistance() { return this.object.position.distanceTo(this.target) } listenToKeyEvents(e) { e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e } stopListenToKeyEvents() { this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null) } saveState() { this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom } reset() { this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Mm), this.update(), this.state = nt.NONE } update(e = null) { const n = this.object.position; Mt.copy(n).sub(this.target), Mt.applyQuaternion(this._quat), this._spherical.setFromVector3(Mt), this.autoRotate && this.state === nt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi); let i = this.minAzimuthAngle, r = this.maxAzimuthAngle; isFinite(i) && isFinite(r) && (i < -Math.PI ? i += tn : i > Math.PI && (i -= tn), r < -Math.PI ? r += tn : r > Math.PI && (r -= tn), i <= r ? this._spherical.theta = Math.max(i, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + r) / 2 ? Math.max(i, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor); let s = !1; if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius); else { const o = this._spherical.radius; this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = o != this._spherical.radius } if (Mt.setFromSpherical(this._spherical), Mt.applyQuaternion(this._quatInverse), n.copy(this.target).add(Mt), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) { let o = null; if (this.object.isPerspectiveCamera) { const a = Mt.length(); o = this._clampDistance(a * this._scale); const l = a - o; this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), s = !!l } else if (this.object.isOrthographicCamera) { const a = new U(this._mouse.x, this._mouse.y, 0); a.unproject(this.object); const l = this.object.zoom; this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = l !== this.object.zoom; const c = new U(this._mouse.x, this._mouse.y, 0); c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = Mt.length() } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1; o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (La.origin.copy(this.object.position), La.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(La.direction)) < Sw ? this.object.lookAt(this.target) : (Em.setFromNormalAndCoplanarPoint(this.object.up, this.target), La.intersectPlane(Em, this.target)))) } else if (this.object.isOrthographicCamera) { const o = this.object.zoom; this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), s = !0) } return this._scale = 1, this._performCursorZoom = !1, s || this._lastPosition.distanceToSquared(this.object.position) > ru || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > ru || this._lastTargetPosition.distanceToSquared(this.target) > ru ? (this.dispatchEvent(Mm), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1 } _getAutoRotationAngle(e) { return e !== null ? tn / 60 * this.autoRotateSpeed * e : tn / 60 / 60 * this.autoRotateSpeed } _getZoomScale(e) { const n = Math.abs(e * .01); return Math.pow(.95, this.zoomSpeed * n) } _rotateLeft(e) { this._sphericalDelta.theta -= e } _rotateUp(e) { this._sphericalDelta.phi -= e } _panLeft(e, n) { Mt.setFromMatrixColumn(n, 0), Mt.multiplyScalar(-e), this._panOffset.add(Mt) } _panUp(e, n) { this.screenSpacePanning === !0 ? Mt.setFromMatrixColumn(n, 1) : (Mt.setFromMatrixColumn(n, 0), Mt.crossVectors(this.object.up, Mt)), Mt.multiplyScalar(e), this._panOffset.add(Mt) } _pan(e, n) { const i = this.domElement; if (this.object.isPerspectiveCamera) { const r = this.object.position; Mt.copy(r).sub(this.target); let s = Mt.length(); s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * s / i.clientHeight, this.object.matrix), this._panUp(2 * n * s / i.clientHeight, this.object.matrix) } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix), this._panUp(n * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1) } _dollyOut(e) { this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1) } _dollyIn(e) { this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1) } _updateZoomParameters(e, n) { if (!this.zoomToCursor) return; this._performCursorZoom = !0; const i = this.domElement.getBoundingClientRect(), r = e - i.left, s = n - i.top, o = i.width, a = i.height; this._mouse.x = r / o * 2 - 1, this._mouse.y = -(s / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize() } _clampDistance(e) { return Math.max(this.minDistance, Math.min(this.maxDistance, e)) } _handleMouseDownRotate(e) { this._rotateStart.set(e.clientX, e.clientY) } _handleMouseDownDolly(e) { this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY) } _handleMouseDownPan(e) { this._panStart.set(e.clientX, e.clientY) } _handleMouseMoveRotate(e) { this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed); const n = this.domElement; this._rotateLeft(tn * this._rotateDelta.x / n.clientHeight), this._rotateUp(tn * this._rotateDelta.y / n.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update() } _handleMouseMoveDolly(e) { this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update() } _handleMouseMovePan(e) { this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update() } _handleMouseWheel(e) { this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update() } _handleKeyDown(e) { let n = !1; switch (e.code) { case this.keys.UP: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(tn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), n = !0; break; case this.keys.BOTTOM: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-tn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), n = !0; break; case this.keys.LEFT: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(tn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), n = !0; break; case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-tn * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), n = !0; break }n && (e.preventDefault(), this.update()) } _handleTouchStartRotate(e) { if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY); else { const n = this._getSecondPointerPosition(e), i = .5 * (e.pageX + n.x), r = .5 * (e.pageY + n.y); this._rotateStart.set(i, r) } } _handleTouchStartPan(e) { if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY); else { const n = this._getSecondPointerPosition(e), i = .5 * (e.pageX + n.x), r = .5 * (e.pageY + n.y); this._panStart.set(i, r) } } _handleTouchStartDolly(e) { const n = this._getSecondPointerPosition(e), i = e.pageX - n.x, r = e.pageY - n.y, s = Math.sqrt(i * i + r * r); this._dollyStart.set(0, s) } _handleTouchStartDollyPan(e) { this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e) } _handleTouchStartDollyRotate(e) { this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e) } _handleTouchMoveRotate(e) { if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY); else { const i = this._getSecondPointerPosition(e), r = .5 * (e.pageX + i.x), s = .5 * (e.pageY + i.y); this._rotateEnd.set(r, s) } this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed); const n = this.domElement; this._rotateLeft(tn * this._rotateDelta.x / n.clientHeight), this._rotateUp(tn * this._rotateDelta.y / n.clientHeight), this._rotateStart.copy(this._rotateEnd) } _handleTouchMovePan(e) { if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY); else { const n = this._getSecondPointerPosition(e), i = .5 * (e.pageX + n.x), r = .5 * (e.pageY + n.y); this._panEnd.set(i, r) } this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd) } _handleTouchMoveDolly(e) { const n = this._getSecondPointerPosition(e), i = e.pageX - n.x, r = e.pageY - n.y, s = Math.sqrt(i * i + r * r); this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd); const o = (e.pageX + n.x) * .5, a = (e.pageY + n.y) * .5; this._updateZoomParameters(o, a) } _handleTouchMoveDollyPan(e) { this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e) } _handleTouchMoveDollyRotate(e) { this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e) } _addPointer(e) { this._pointers.push(e.pointerId) } _removePointer(e) { delete this._pointerPositions[e.pointerId]; for (let n = 0; n < this._pointers.length; n++)if (this._pointers[n] == e.pointerId) { this._pointers.splice(n, 1); return } } _isTrackingPointer(e) { for (let n = 0; n < this._pointers.length; n++)if (this._pointers[n] == e.pointerId) return !0; return !1 } _trackPointer(e) { let n = this._pointerPositions[e.pointerId]; n === void 0 && (n = new Ie, this._pointerPositions[e.pointerId] = n), n.set(e.pageX, e.pageY) } _getSecondPointerPosition(e) { const n = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0]; return this._pointerPositions[n] } _customWheelEvent(e) { const n = e.deltaMode, i = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY }; switch (n) { case 1: i.deltaY *= 16; break; case 2: i.deltaY *= 100; break }return e.ctrlKey && !this._controlActive && (i.deltaY *= 10), i } } function Ew(t) { this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(t.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(t) && (this._addPointer(t), t.pointerType === "touch" ? this._onTouchStart(t) : this._onMouseDown(t))) } function Tw(t) { this.enabled !== !1 && (t.pointerType === "touch" ? this._onTouchMove(t) : this._onMouseMove(t)) } function ww(t) { switch (this._removePointer(t), this._pointers.length) { case 0: this.domElement.releasePointerCapture(t.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(_v), this.state = nt.NONE; break; case 1: const e = this._pointers[0], n = this._pointerPositions[e]; this._onTouchStart({ pointerId: e, pageX: n.x, pageY: n.y }); break } } function Aw(t) { let e; switch (t.button) { case 0: e = this.mouseButtons.LEFT; break; case 1: e = this.mouseButtons.MIDDLE; break; case 2: e = this.mouseButtons.RIGHT; break; default: e = -1 }switch (e) { case ms.DOLLY: if (this.enableZoom === !1) return; this._handleMouseDownDolly(t), this.state = nt.DOLLY; break; case ms.ROTATE: if (t.ctrlKey || t.metaKey || t.shiftKey) { if (this.enablePan === !1) return; this._handleMouseDownPan(t), this.state = nt.PAN } else { if (this.enableRotate === !1) return; this._handleMouseDownRotate(t), this.state = nt.ROTATE } break; case ms.PAN: if (t.ctrlKey || t.metaKey || t.shiftKey) { if (this.enableRotate === !1) return; this._handleMouseDownRotate(t), this.state = nt.ROTATE } else { if (this.enablePan === !1) return; this._handleMouseDownPan(t), this.state = nt.PAN } break; default: this.state = nt.NONE }this.state !== nt.NONE && this.dispatchEvent(Jf) } function Cw(t) { switch (this.state) { case nt.ROTATE: if (this.enableRotate === !1) return; this._handleMouseMoveRotate(t); break; case nt.DOLLY: if (this.enableZoom === !1) return; this._handleMouseMoveDolly(t); break; case nt.PAN: if (this.enablePan === !1) return; this._handleMouseMovePan(t); break } } function Rw(t) { this.enabled === !1 || this.enableZoom === !1 || this.state !== nt.NONE || (t.preventDefault(), this.dispatchEvent(Jf), this._handleMouseWheel(this._customWheelEvent(t)), this.dispatchEvent(_v)) } function Pw(t) { this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(t) } function bw(t) { switch (this._trackPointer(t), this._pointers.length) { case 1: switch (this.touches.ONE) { case as.ROTATE: if (this.enableRotate === !1) return; this._handleTouchStartRotate(t), this.state = nt.TOUCH_ROTATE; break; case as.PAN: if (this.enablePan === !1) return; this._handleTouchStartPan(t), this.state = nt.TOUCH_PAN; break; default: this.state = nt.NONE }break; case 2: switch (this.touches.TWO) { case as.DOLLY_PAN: if (this.enableZoom === !1 && this.enablePan === !1) return; this._handleTouchStartDollyPan(t), this.state = nt.TOUCH_DOLLY_PAN; break; case as.DOLLY_ROTATE: if (this.enableZoom === !1 && this.enableRotate === !1) return; this._handleTouchStartDollyRotate(t), this.state = nt.TOUCH_DOLLY_ROTATE; break; default: this.state = nt.NONE }break; default: this.state = nt.NONE }this.state !== nt.NONE && this.dispatchEvent(Jf) } function Lw(t) { switch (this._trackPointer(t), this.state) { case nt.TOUCH_ROTATE: if (this.enableRotate === !1) return; this._handleTouchMoveRotate(t), this.update(); break; case nt.TOUCH_PAN: if (this.enablePan === !1) return; this._handleTouchMovePan(t), this.update(); break; case nt.TOUCH_DOLLY_PAN: if (this.enableZoom === !1 && this.enablePan === !1) return; this._handleTouchMoveDollyPan(t), this.update(); break; case nt.TOUCH_DOLLY_ROTATE: if (this.enableZoom === !1 && this.enableRotate === !1) return; this._handleTouchMoveDollyRotate(t), this.update(); break; default: this.state = nt.NONE } } function Dw(t) { this.enabled !== !1 && t.preventDefault() } function Iw(t) { t.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 })) } function Nw(t) { t.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 })) } const vv = [{ id: "deb-vanguard1", name: "Vanguard 1 (Derelict)", type: "debris", category: "Historic Derelict", noradId: "00005", launchYear: 1960, country: "United States (US Navy)", altitudeKm: 650, orbitRadius: 2.75, inclination: 34.2, speed: .011, size: .08, color: "#fbbf24", description: "The oldest artificial human artifact still orbiting Earth. In orbit since the dawn of spaceflight; will circle Earth for centuries.", kesslerThreat: "Moderate (Uncontrolled tumbling derelict in high LEO)." }, { id: "deb-thor-ablestar", name: "Thor-Ablestar Breakup Debris", type: "debris", category: "Explosion Fragment", noradId: "00118", launchYear: 1961, country: "United States (DoD)", altitudeKm: 950, orbitRadius: 3.1, inclination: 66.8, speed: .01, size: .06, color: "#ef4444", description: "Result of the very first recorded accidental explosion in orbit in June 1961, creating almost 300 pieces of cataloged debris.", kesslerThreat: "High (Historic fragment in long-lived polar orbit)." }, { id: "deb-transit-4a", name: "Transit 4A Dead Satellite", type: "debris", category: "Derelict Navigation", noradId: "00116", launchYear: 1961, country: "United States (US Navy)", altitudeKm: 990, orbitRadius: 3.18, inclination: 66.8, speed: .009, size: .09, color: "#f59e0b", description: "First satellite with a nuclear radioisotope thermoelectric generator, now a silent derelict orbiting at nearly 1,000 km.", kesslerThreat: "Moderate (High altitude derelict with multi-century lifetime)." }, { id: "deb-solwind", name: "P78-1 Solwind ASAT Fragment", type: "debris", category: "ASAT Shrapnel", noradId: "11229", launchYear: 1985, country: "United States (USAF Test)", altitudeKm: 525, orbitRadius: 2.8, inclination: 97.6, speed: .012, size: .06, color: "#ef4444", description: "In 1985, an F-15 fired an ASM-135 ASAT missile at Solwind, completely obliterating the satellite into hundreds of hypervelocity shards.", kesslerThreat: "High (Milestone kinetic destruction event)." }, { id: "sat-hubble", name: "Hubble Space Telescope", type: "active", category: "Space Observatory", noradId: "20580", launchYear: 1990, country: "United States (NASA / ESA)", altitudeKm: 535, orbitRadius: 2.85, inclination: 28.5, speed: .012, size: .1, color: "#38bdf8", description: "One of the most vital scientific instruments in human history, revolutionizing astrophysics from above Earth’s atmosphere.", kesslerThreat: "Moderate (High orbital longevity without propulsion system)." }, { id: "deb-sl16", name: "Zenit-2 / SL-16 Spent Booster", type: "debris", category: "Spent Rocket Stage", noradId: "22285", launchYear: 1992, country: "Soviet Union / Ukraine", altitudeKm: 840, orbitRadius: 3.25, inclination: 71, speed: .011, size: .11, color: "#f59e0b", description: "Massive 9-ton spent upper stage with lingering fuel and pressurized tanks. One of dozens of rocket bodies posing spontaneous explosion risks.", kesslerThreat: "CRITICAL (High mass and potential for catastrophic fragmentation)." }, { id: "sat-iss", name: "International Space Station (ISS)", type: "active", category: "Crewed Habitat", noradId: "25544", launchYear: 1998, country: "International (NASA / ESA / JAXA / Roscosmos)", altitudeKm: 420, orbitRadius: 2.6, inclination: 51.6, speed: .015, size: .13, color: "#00f0ff", description: "The largest modular space station in Low Earth Orbit. A continuously occupied microgravity laboratory requiring frequent collision-avoidance thruster burns.", kesslerThreat: "Low (Active collision avoidance maneuvers regularly conducted)." }, { id: "deb-envisat", name: "Envisat (Super-Debris)", type: "debris", category: "Derelict Heavycraft", noradId: "27386", launchYear: 2002, country: "Europe (ESA)", altitudeKm: 785, orbitRadius: 3.12, inclination: 98.5, speed: .009, size: .12, color: "#f97316", description: 'An 8,200 kg inactive Earth observation satellite dubbed "one of the most dangerous orbital collision hazards". In orbit at high altitude for centuries.', kesslerThreat: "CRITICAL (Massive target in densely populated polar orbit)." }, { id: "deb-fengyun1c", name: "Fengyun-1C Shrapnel #1402", type: "debris", category: "Anti-Satellite Shrapnel", noradId: "30245", launchYear: 2007, country: "China (Test Remnant)", altitudeKm: 865, orbitRadius: 3.3, inclination: 98.6, speed: .01, size: .06, color: "#ef4444", description: "Result of the 2007 Chinese ASAT missile test, which obliterated the FY-1C satellite into the single largest cloud of debris in orbital history (over 3,500 tracked pieces).", kesslerThreat: "HIGH (Spans critical altitudes used by weather and earth satellites)." }, { id: "deb-cosmos2251", name: "Cosmos 2251 Shrapnel #482", type: "debris", category: "Collision Shrapnel", noradId: "34125", launchYear: 2009, country: "Russia (Derelict Collision)", altitudeKm: 790, orbitRadius: 3.18, inclination: 74, speed: .013, size: .06, color: "#ef4444", description: "Hypervelocity fragment from the catastrophic 2009 collision between active Iridium 33 and dead Cosmos 2251 at 42,000 km/h, proving Kessler syndrome is real.", kesslerThreat: "HIGH (Hypervelocity kinetic projectile)." }, { id: "sat-gps", name: "Navstar GPS IIF-12", type: "active", category: "Navigation", noradId: "41328", launchYear: 2016, country: "United States (USSF)", altitudeKm: 20180, orbitRadius: 4.2, inclination: 55, speed: .006, size: .09, color: "#a78bfa", description: "Medium Earth Orbit positioning satellite transmitting atomic-clock synchronized global navigation signals.", kesslerThreat: "Low (Deep Medium Earth Orbit with lower debris concentration)." }, { id: "sat-starlink", name: "Starlink-1138", type: "active", category: "Megaconstellation", noradId: "44713", launchYear: 2020, country: "United States (SpaceX)", altitudeKm: 550, orbitRadius: 2.88, inclination: 53, speed: .014, size: .07, color: "#4ade80", description: "Part of the commercial broadband megaconstellation numbering thousands of spacecraft in low Earth orbit. Autonomous collision avoidance maneuvers conducted thousands of times monthly.", kesslerThreat: "Monitored (Massive density increases probability of close conjunctions)." }, { id: "sat-tiangong", name: "Tiangong Space Station", type: "active", category: "Crewed Habitat", noradId: "48274", launchYear: 2021, country: "China (CMSA)", altitudeKm: 390, orbitRadius: 2.55, inclination: 41.5, speed: .016, size: .11, color: "#22d3ee", description: "Permanent crewed Chinese space station in low Earth orbit consisting of Tianhe, Wentian, and Mengtian modules.", kesslerThreat: "Low (Equipped with thrusters for orbital maneuvers)." }, { id: "deb-cosmos1408", name: "Cosmos 1408 ASAT Fragment", type: "debris", category: "ASAT Shrapnel", noradId: "49494", launchYear: 2021, country: "Russia (ASAT Intercept)", altitudeKm: 485, orbitRadius: 2.7, inclination: 82.5, speed: .013, size: .07, color: "#ef4444", description: "Shrapnel from the November 2021 Russian direct-ascent ASAT missile test that forced astronauts on the ISS to shelter in return capsules.", kesslerThreat: "HIGH (Crosses ISS and Tiangong orbital flight paths)." }, { id: "deb-longmarch6a", name: "Long March 6A Breakup Fragment", type: "debris", category: "Rocket Breakup Debris", noradId: "60388", launchYear: 2024, country: "China (Rocket Stage)", altitudeKm: 810, orbitRadius: 3.2, inclination: 89, speed: .011, size: .06, color: "#ef4444", description: "Upper stage exploded in August 2024 following deployment of the Qianfan megaconstellation, producing more than 700 trackable fragments.", kesslerThreat: "CRITICAL (High altitude fragment cloud with centuries of persistence)." }, { id: "sat-future-megaconstellation", name: "LEO Broadband Swarm 2026", type: "active", category: "Megaconstellation", noradId: "68201", launchYear: 2026, country: "Global Commercial", altitudeKm: 580, orbitRadius: 2.92, inclination: 64, speed: .014, size: .07, color: "#34d399", description: "Modern 2026 generation of high-throughput orbital routers operating in an ultra-dense constellation shell.", kesslerThreat: "Monitored (Near-continuous autonomous evasive routing)." }], su = { 1960: { title: "1960: Dawn of the Orbital Graveyard", description: "Vanguard 1 and early boosters become the first permanent human artifacts left behind in Earth orbit." }, 1961: { title: "1961: First Recorded In-Orbit Explosion", description: "A Thor-Ablestar rocket stage breaks apart, scattering almost 300 pieces of shrapnel across orbit." }, 1965: { title: "1965: Space Race Escalation", description: "Gemini and Voskhod flights leave adapter equipment and spent upper stages in low Earth orbit." }, 1970: { title: "1970: Cold War Orbital Accumulation", description: "High launch cadences by the US and USSR leave scores of dead spy satellites and heavy boosters in polar orbit." }, 1978: { title: "1978: Donald Kessler Publishes Hypothesis", description: "NASA scientist Donald J. Kessler writes the landmark paper predicting that space debris collisions will cascade uncontrollably." }, 1985: { title: "1985: Solwind ASAT Kinetic Missile Test", description: "US Air Force F-15 fires an anti-satellite missile, destroying the Solwind satellite and showering LEO with shrapnel." }, 1990: { title: "1990: Hubble Space Telescope Deployed", description: "Hubble begins its mission at 535 km, operating directly in the rising low-Earth debris environment." }, 1998: { title: "1998: ISS Assembly Begins", description: "Zarya and Unity modules launch, creating humanity’s permanent outpost requiring regular collision avoidance." }, 2002: { title: "2002: Envisat Heavy Earth Observatory", description: "ESA launches the 8.2-ton Envisat. When communications fail in 2012, it becomes the most hazardous single derelict in orbit." }, 2007: { title: "2007: Fengyun-1C Catastrophic ASAT Cloud", description: "China destroys defunct weather satellite FY-1C in an ASAT test, creating over 3,500 trackable hypervelocity fragments." }, 2009: { title: "2009: Iridium 33 & Cosmos 2251 Collision", description: "Active Iridium satellite collides with derelict Russian Cosmos at 42,000 km/h, proving the Kessler cascade in real life." }, 2016: { title: "2016: Precision Navigation Epoch", description: "Modern GPS IIF and Galileo navigation constellations operational in Medium Earth Orbit." }, 2019: { title: "2019: Mission Shakti ASAT Intercept", description: "India destroys a test satellite in low orbit, generating hundreds of short-lived fragments." }, 2020: { title: "2020: Megaconstellation Era Begins", description: "SpaceX Starlink and OneWeb begin deploying thousands of mass-produced satellites, multiplying active objects in LEO." }, 2021: { title: "2021: Cosmos 1408 Destruction & Tiangong", description: "Russian ASAT test shatters Cosmos 1408; ISS crew shelters in Soyuz/Dragon. Tiangong modular station active." }, 2024: { title: "2024: Long March 6A Stage Breakup", description: "Rocket stage explodes at 800 km altitude following Qianfan deployment, adding 700+ high-altitude debris shards." }, 2026: { title: "2026: Present Day — The Kessler Precipice", description: "Over 10,000 active satellites and millions of debris fragments create an ultra-dense graveyard shell around Earth." } }; function Uw(t) { const e = Object.keys(su).map(Number).sort((n, i) => i - n); for (const n of e) if (t >= n) return su[n]; return su[1960] } function Ow() { const n = document.createElement("canvas"); n.width = 2048, n.height = 1024; const i = n.getContext("2d"), r = i.createLinearGradient(0, 0, 0, 1024); r.addColorStop(0, "#06132b"), r.addColorStop(.5, "#0a1d42"), r.addColorStop(1, "#051024"), i.fillStyle = r, i.fillRect(0, 0, 2048, 1024), i.strokeStyle = "rgba(0, 240, 255, 0.08)", i.lineWidth = 1; for (let o = 0; o <= 2048; o += 2048 / 24)i.beginPath(), i.moveTo(o, 0), i.lineTo(o, 1024), i.stroke(); for (let o = 0; o <= 1024; o += 1024 / 12)i.beginPath(), i.moveTo(0, o), i.lineTo(2048, o), i.stroke(); return i.fillStyle = "#102e52", i.strokeStyle = "rgba(0, 240, 255, 0.35)", i.lineWidth = 2, [[[-165, 65], [-140, 70], [-100, 72], [-65, 60], [-60, 45], [-75, 30], [-80, 25], [-90, 16], [-105, 20], [-120, 35], [-130, 50], [-165, 65]], [[-80, 10], [-50, -5], [-35, -7], [-40, -22], [-55, -40], [-68, -55], [-75, -45], [-72, -15], [-80, 10]], [[-10, 36], [0, 45], [15, 55], [30, 70], [60, 72], [100, 75], [140, 70], [170, 65], [160, 50], [130, 40], [120, 30], [105, 20], [80, 15], [70, 25], [50, 25], [35, 32], [25, 40], [-5, 36]], [[-15, 30], [10, 37], [32, 32], [50, 12], [42, -5], [35, -25], [20, -35], [12, -15], [-17, 15], [-15, 30]], [[115, -22], [130, -12], [145, -15], [152, -28], [140, -38], [125, -35], [115, -22]], [[-180, -78], [-120, -82], [-60, -75], [0, -70], [60, -72], [120, -75], [180, -78], [180, -90], [-180, -90]]].forEach(o => { i.beginPath(), o.forEach(([a, l], c) => { const d = (a + 180) / 360 * 2048, h = (90 - l) / 180 * 1024; c === 0 ? i.moveTo(d, h) : i.lineTo(d, h) }), i.closePath(), i.fill(), i.stroke() }), new mv(n) } function Fw() { const t = document.createElement("canvas"); t.width = 1024, t.height = 512; const e = t.getContext("2d"); e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, t.width, t.height), e.fillStyle = "rgba(255, 255, 255, 0.18)"; for (let n = 0; n < 40; n++) { const i = Math.random() * t.width, r = 80 + Math.random() * (t.height - 160), s = 40 + Math.random() * 80, o = 15 + Math.random() * 30; e.beginPath(), e.ellipse(i, r, s, o, Math.random() * Math.PI, 0, Math.PI * 2), e.fill() } return new mv(t) } function kw({ selectedObject: t, onSelectObject: e, filter: n = "all", currentYear: i = 2026, isPaused: r = !1, timeSpeed: s = 1, onConjunctionUpdate: o }) {
	const a = yt.useRef(null), l = yt.useRef(t), c = yt.useRef(n), d = yt.useRef(i), h = yt.useRef(r), f = yt.useRef(s), g = yt.useRef(e), x = yt.useRef(o); return l.current = t, c.current = n, d.current = i, h.current = r, f.current = s, g.current = e, x.current = o, yt.useEffect(() => {
		const y = a.current; if (!y) return; const p = new hw; p.fog = new Kf(198418, 6e-4); const u = new En(45, y.clientWidth / y.clientHeight, .1, 1e3); u.position.set(0, 2.5, 8.5); const m = new fw({ antialias: !0, alpha: !0 }); m.setSize(y.clientWidth, y.clientHeight), m.setPixelRatio(Math.min(window.devicePixelRatio, 2)), m.toneMapping = k_, m.toneMappingExposure = 1.1, y.appendChild(m.domElement); const _ = new Mw(u, m.domElement); _.enableDamping = !0, _.dampingFactor = .05, _.minDistance = 3.2, _.maxDistance = 22, _.rotateSpeed = .8, _.enablePan = !1; const S = new _w(1713720, 1.8); p.add(S); const R = new _m(16777215, 2.5); R.position.set(10, 6, 8), p.add(R); const A = new _m(61695, 1.2); A.position.set(-10, -4, -6), p.add(A); const w = new vr; p.add(w); const P = 2.2, X = new Di(P, 64, 64), v = Ow(), T = new nu({ map: v, roughness: .7, metalness: .1 }), H = new Ht(X, T); w.add(H); const B = new Di(P * 1.015, 48, 48), q = Fw(), ee = new nu({ map: q, transparent: !0, opacity: .45, blending: bi, depthWrite: !1 }), V = new Ht(B, ee); w.add(V); const J = new Di(P * 1.12, 48, 48), L = new vi({
			vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `, fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.0, 0.85, 1.0, 1.0) * intensity * 0.75;
        }
      `, blending: bi, side: Kt, transparent: !0, depthWrite: !1
		}), $ = new Ht(J, L); w.add($); const Z = new vr; p.add(Z); const oe = [], we = []; vv.forEach((z, K) => { const Y = z.type === "debris", fe = new je(z.color), re = new Wn(kd.degToRad(z.inclination), kd.degToRad(K * 36), 0, "ZYX"), ce = 96, Ue = []; for (let ge = 0; ge <= ce; ge++) { const Ge = ge / ce * Math.PI * 2, ut = new U(z.orbitRadius * Math.cos(Ge), 0, z.orbitRadius * Math.sin(Ge)); ut.applyEuler(re), Ue.push(ut) } const ie = new gn().setFromPoints(Ue), ue = new Bd({ color: fe, transparent: !0, opacity: Y ? .35 : .25, blending: bi }), Ae = new pv(ie, ue); Z.add(Ae); const ae = new vr; let he; Y ? he = new Zf(z.size, 0) : he = new Di(z.size, 16, 16); const Ne = new nu({ color: fe, emissive: fe, emissiveIntensity: .8, metalness: .8, roughness: .2 }), Ee = new Ht(he, Ne); ae.add(Ee); const Be = new Di(z.size * 1.8, 12, 12), D = new mo({ color: fe, transparent: !0, opacity: .4, blending: bi, depthWrite: !1 }), _e = new Ht(Be, D); ae.add(_e); const G = new Di(.35, 8, 8), Q = new mo({ visible: !1 }), pe = new Ht(G, Q); pe.userData = { data: z, meshGroup: ae, orbitLine: Ae }, ae.add(pe), we.push(pe), Z.add(ae), oe.push({ data: z, meshGroup: ae, orbitLine: Ae, markerMesh: Ee, haloMesh: _e, euler: re, theta: Math.random() * Math.PI * 2, speed: z.speed, currentPos: new U }) }); const Ve = new Qf(.3, .38, 32), j = new mo({ color: 61695, side: $n, transparent: !0, opacity: .9, blending: bi }), te = new Ht(Ve, j); te.visible = !1, p.add(te); const me = 10, le = new Float32Array(me * 2 * 3), Le = new gn; Le.setAttribute("position", new Vn(le, 3)); const Ce = new Bd({ color: 16711748, transparent: !0, opacity: .85, blending: bi }), We = new pw(Le, Ce); p.add(We); const Ye = new xw, Oe = new Ie; let b = null; const Ot = z => { const K = m.domElement.getBoundingClientRect(); Oe.x = (z.clientX - K.left) / K.width * 2 - 1, Oe.y = -((z.clientY - K.top) / K.height) * 2 + 1, Ye.setFromCamera(Oe, u); const Y = we.filter(re => re.parent.visible), fe = Ye.intersectObjects(Y); if (fe.length > 0) { y.style.cursor = "pointer"; const re = fe[0].object; b !== re && (b = re, re.userData.meshGroup.scale.set(1.4, 1.4, 1.4)) } else y.style.cursor = "default", b && (b.userData.meshGroup.scale.set(1, 1, 1), b = null) }; let ze = { x: 0, y: 0 }; const Xe = z => { ze = { x: z.clientX, y: z.clientY } }, Re = z => { const K = Math.abs(z.clientX - ze.x), Y = Math.abs(z.clientY - ze.y); if (K > 5 || Y > 5) return; const fe = m.domElement.getBoundingClientRect(); Oe.x = (z.clientX - fe.left) / fe.width * 2 - 1, Oe.y = -((z.clientY - fe.top) / fe.height) * 2 + 1, Ye.setFromCamera(Oe, u); const re = we.filter(Ue => Ue.parent.visible), ce = Ye.intersectObjects(re); if (ce.length > 0) { const Ue = ce[0].object.userData.data; g.current && g.current(Ue) } else g.current && g.current(null) }; y.addEventListener("pointermove", Ot), y.addEventListener("pointerdown", Xe), y.addEventListener("pointerup", Re); let tt, Pe = 0; const C = new vw, M = () => { tt = requestAnimationFrame(M), C.getDelta(); const z = c.current, K = l.current, Y = d.current, fe = h.current, re = f.current; fe || (H.rotation.y += .001 * re, V.rotation.y += .0014 * re); const ce = []; oe.forEach(ae => { const he = ae.data.launchYear <= Y, Ne = z === "all" || z === "active" && ae.data.type === "active" || z === "debris" && ae.data.type === "debris", Ee = he && Ne; if (ae.meshGroup.visible = Ee, ae.orbitLine.visible = Ee, !Ee) return; fe || (ae.theta += ae.speed * re); const Be = new U(ae.data.orbitRadius * Math.cos(ae.theta), 0, ae.data.orbitRadius * Math.sin(ae.theta)); Be.applyEuler(ae.euler), ae.meshGroup.position.copy(Be), ae.currentPos.copy(Be), ce.push(ae), !fe && ae.data.type === "debris" && (ae.markerMesh.rotation.x += .02 * re, ae.markerMesh.rotation.y += .03 * re), K && K.id === ae.data.id ? (ae.orbitLine.material.opacity = .9, te.visible = !0, te.position.copy(Be), te.lookAt(u.position), te.rotation.z += .02) : ae.orbitLine.material.opacity = ae.data.type === "debris" ? .35 : .25 }), K || (te.visible = !1); const Ue = .95, ie = []; let ue = 0; for (let ae = 0; ae < ce.length; ae++)for (let he = ae + 1; he < ce.length; he++) { const Ne = ce[ae], Ee = ce[he], Be = Ne.currentPos.distanceTo(Ee.currentPos); if (Be < Ue) { const D = Math.round(Be * 28.5); ie.push({ objA: Ne.data, objB: Ee.data, distance: Be, distanceKm: D }), ue < me * 6 && (le[ue++] = Ne.currentPos.x, le[ue++] = Ne.currentPos.y, le[ue++] = Ne.currentPos.z, le[ue++] = Ee.currentPos.x, le[ue++] = Ee.currentPos.y, le[ue++] = Ee.currentPos.z) } } for (; ue < me * 6;)le[ue++] = 0; Le.attributes.position.needsUpdate = !0; const Ae = performance.now(); Ae - Pe > 200 && (Pe = Ae, x.current && x.current(ie)), _.update(), m.render(p, u) }; M(); const O = () => { if (!y) return; const z = y.clientWidth, K = y.clientHeight; u.aspect = z / K, u.updateProjectionMatrix(), m.setSize(z, K) }; return window.addEventListener("resize", O), () => { window.removeEventListener("resize", O), y.removeEventListener("pointermove", Ot), y.removeEventListener("pointerdown", Xe), y.removeEventListener("pointerup", Re), cancelAnimationFrame(tt), _.dispose(), m.dispose(), y.contains(m.domElement) && y.removeChild(m.domElement) }
	}, []), W.jsx("div", { ref: a, className: "canvas-container" })
} function zw({ object: t, onClose: e }) { if (!t) return null; const n = t.type === "debris"; return W.jsxs("div", { className: "dossier-panel interactive-hud", children: [W.jsxs("div", { className: "dossier-header", children: [W.jsxs("div", { className: "dossier-type-badge", "data-type": t.type, children: [W.jsx("span", { className: "dossier-pulse" }), W.jsx("span", { children: n ? "SPACE DEBRIS / DERELICT" : "ACTIVE SATELLITE" })] }), W.jsx("button", { className: "dossier-close-btn", onClick: e, title: "Close dossier", children: "✕" })] }), W.jsx("h2", { className: "dossier-title", children: t.name }), W.jsx("p", { className: "dossier-category", children: t.category }), W.jsxs("div", { className: "dossier-stats-grid", children: [W.jsxs("div", { className: "stat-box", children: [W.jsx("span", { className: "stat-label", children: "NORAD ID" }), W.jsx("span", { className: "stat-value", children: t.noradId })] }), W.jsxs("div", { className: "stat-box", children: [W.jsx("span", { className: "stat-label", children: "LAUNCH YEAR" }), W.jsx("span", { className: "stat-value", children: t.launchYear })] }), W.jsxs("div", { className: "stat-box", children: [W.jsx("span", { className: "stat-label", children: "ALTITUDE" }), W.jsxs("span", { className: "stat-value", children: [t.altitudeKm.toLocaleString(), " KM"] })] }), W.jsxs("div", { className: "stat-box", children: [W.jsx("span", { className: "stat-label", children: "INCLINATION" }), W.jsxs("span", { className: "stat-value", children: [t.inclination, "°"] })] })] }), W.jsxs("div", { className: "dossier-section", children: [W.jsx("div", { className: "section-label", children: "ORIGIN / OPERATOR" }), W.jsx("div", { className: "section-body", children: t.country })] }), W.jsxs("div", { className: "dossier-section", children: [W.jsx("div", { className: "section-label", children: "MUSEUM ARCHIVE SUMMARY" }), W.jsx("div", { className: "section-body narrative", children: t.description })] }), W.jsxs("div", { className: "dossier-section threat-section", "data-threat": n ? "high" : "low", children: [W.jsx("div", { className: "section-label", children: "KESSLER CASCADE RISK" }), W.jsx("div", { className: "section-body threat-text", children: t.kesslerThreat })] })] }) } function Bw({ currentYear: t, onYearChange: e, isPaused: n, onTogglePause: i, timeSpeed: r, onSpeedChange: s, isAutoAdvancingYear: o, onToggleAutoAdvanceYear: a }) { const l = c => c < 1970 ? "EARLY SPACE AGE (1960s)" : c < 1990 ? "COLD WAR & ASAT TESTS (1970s-80s)" : c < 2007 ? "LEO EXPANSION & ISS (1990s-2000s)" : c < 2019 ? "CATACLYSMIC COLLISIONS (2007-2018)" : "MEGACONSTELLATION SWARM (2019-2026)"; return W.jsxs("div", { className: "time-controls-panel interactive-hud", children: [W.jsxs("div", { className: "time-controls-header", children: [W.jsxs("div", { className: "time-indicator", children: [W.jsx("span", { className: "time-label", children: "ORBITAL TIME TRAVEL" }), W.jsxs("div", { className: "year-row", children: [W.jsx("span", { className: "year-display", children: t }), W.jsx("span", { className: "epoch-tag", children: l(t) })] })] }), W.jsxs("div", { className: "playback-actions", children: [W.jsxs("div", { className: "action-row", children: [W.jsx("button", { className: `timeline-play-btn ${o ? "advancing" : ""}`, onClick: a, title: "Automatically advance year by year from 1960 to 2026", children: o ? "⏹ STOP TIMELINE" : "▶ PLAY TIMELINE" }), W.jsx("button", { className: `play-pause-btn ${n ? "paused" : "playing"}`, onClick: i, title: n ? "Resume Orbit Motion" : "Freeze Orbit Motion", children: n ? "▶ ORBIT" : "❚❚ FREEZE" })] }), W.jsxs("div", { className: "speed-toggles", children: [W.jsx("span", { className: "speed-label", children: "SPEED:" }), [1, 5, 20].map(c => W.jsxs("button", { className: `speed-btn ${r === c ? "active" : ""}`, onClick: () => s(c), children: [c, "x"] }, c))] })] })] }), W.jsxs("div", { className: "timeline-slider-row", children: [W.jsx("span", { className: "timeline-bound", children: "1960" }), W.jsx("input", { type: "range", min: "1960", max: "2026", step: "1", value: t, onChange: c => e(parseInt(c.target.value, 10)), className: "timeline-slider", title: `Year: ${t}` }), W.jsx("span", { className: "timeline-bound highlight", children: "2026" })] }), W.jsx("div", { className: "timeline-decades-strip", children: [1960, 1970, 1985, 2e3, 2007, 2009, 2020, 2026].map(c => W.jsx("button", { className: `decade-btn ${t === c ? "active" : ""}`, onClick: () => e(c), children: c }, c)) })] }) } function Hw({ conjunctions: t = [], onSelectObject: e }) { if (t.length === 0) return W.jsxs("div", { className: "radar-status-bar interactive-hud safe", children: [W.jsx("span", { className: "radar-ping safe-ping" }), W.jsx("span", { className: "radar-text", children: "ORBITAL CONJUNCTION RADAR: NOMINAL // ZERO CRITICAL CROSSINGS" })] }); const n = t[0]; return W.jsxs("div", { className: "radar-status-bar interactive-hud warning", children: [W.jsx("span", { className: "radar-ping alert-ping" }), W.jsxs("div", { className: "radar-content", children: [W.jsxs("div", { className: "radar-title-row", children: [W.jsx("span", { className: "radar-alert-badge", children: "CONJUNCTION ALERT" }), W.jsxs("span", { className: "radar-distance", children: ["EST. SEPARATION: ", W.jsxs("strong", { children: [n.distanceKm, " KM"] })] })] }), W.jsxs("div", { className: "radar-parties", children: [W.jsx("button", { className: "radar-target-btn text-cyan", onClick: () => e(n.objA), title: "Inspect object", children: n.objA.name }), W.jsx("span", { className: "radar-vs", children: "⚡ INTERSECTING ⚡" }), W.jsx("button", { className: "radar-target-btn text-amber", onClick: () => e(n.objB), title: "Inspect object", children: n.objB.name })] })] })] }) } function Vw() { const [t, e] = yt.useState(null), [n, i] = yt.useState("all"), [r, s] = yt.useState(2026), [o, a] = yt.useState(!1), [l, c] = yt.useState(1), [d, h] = yt.useState([]), [f, g] = yt.useState(!1); yt.useEffect(() => { if (!f) return; const A = setInterval(() => { s(w => w >= 2026 ? (g(!1), 2026) : w + 1) }, 450); return () => clearInterval(A) }, [f]); const x = vv.filter(A => A.launchYear <= r), y = x.filter(A => A.type === "active").length, p = x.filter(A => A.type === "debris").length, u = Math.round(r < 1965 ? 20 + (r - 1960) * 15 : r < 1980 ? 150 + (r - 1965) * 60 : r < 2e3 ? 1100 + (r - 1980) * 180 : r < 2007 ? 4800 + (r - 2e3) * 350 : r < 2010 ? 12e3 + (r - 2007) * 2200 : 19e3 + (r - 2010) * 1400), m = Uw(r), _ = Math.min(98, Math.round((r - 1960) * .9 + d.length * 14 + (r >= 2007 ? 12 : 0) + (r >= 2009 ? 12 : 0))), S = _ > 65 ? "CRITICAL (CASCADE IMMINENT)" : _ > 35 ? "ELEVATED RISK" : "NOMINAL", R = _ > 65 ? "text-red" : _ > 35 ? "text-amber" : "text-cyan"; return W.jsxs("div", { className: "app-container", children: [W.jsx(kw, { selectedObject: t, onSelectObject: e, filter: n, currentYear: r, isPaused: o, timeSpeed: l, onConjunctionUpdate: h }), W.jsx("div", { className: "vignette" }), W.jsxs("div", { className: "hud-overlay", children: [W.jsxs("header", { className: "hud-header", children: [W.jsxs("div", { className: "hud-top-meta", children: [W.jsxs("div", { className: "museum-badge", children: [W.jsx("span", { className: "status-dot" }), W.jsx("span", { children: "Orbital Heritage Archive // Time Travel: 1960 ➔ 2026" })] }), W.jsx(Hw, { conjunctions: d, onSelectObject: e })] }), W.jsx("h1", { className: "hud-title", children: "KESSLER — THE LIVING GRAVEYARD OF SPACE" }), W.jsxs("div", { className: "historic-event-banner interactive-hud", children: [W.jsx("span", { className: "event-year-tag", children: m.title }), W.jsx("span", { className: "event-desc", children: m.description })] }), W.jsxs("div", { className: "filter-bar interactive-hud", children: [W.jsx("span", { className: "filter-title", children: "FILTER LAYER:" }), W.jsxs("button", { className: `filter-btn ${n === "all" ? "active" : ""}`, onClick: () => i("all"), children: ["ALL OBJECTS (", x.length, ")"] }), W.jsxs("button", { className: `filter-btn active-sat ${n === "active" ? "active" : ""}`, onClick: () => i("active"), children: ["ACTIVE SATELLITES (", y, ")"] }), W.jsxs("button", { className: `filter-btn debris ${n === "debris" ? "active" : ""}`, onClick: () => i("debris"), children: ["SPACE DEBRIS (", p, ")"] })] })] }), t && W.jsx(zw, { object: t, onClose: () => e(null) }), W.jsxs("footer", { className: "hud-footer", children: [W.jsxs("div", { className: "info-card interactive-hud", children: [W.jsxs("div", { className: "info-card-header", children: [W.jsx("span", { className: "info-label", children: "Interactive Controls" }), W.jsxs("span", { className: "info-pill", children: ["Year ", r] })] }), W.jsxs("div", { className: "controls-guide", children: [W.jsxs("div", { className: "control-item", children: [W.jsx("span", { className: "control-icon", children: "✦" }), W.jsxs("span", { children: [W.jsx("strong", { children: "Drag:" }), " Rotate Earth"] })] }), W.jsxs("div", { className: "control-item", children: [W.jsx("span", { className: "control-icon", children: "✣" }), W.jsxs("span", { children: [W.jsx("strong", { children: "Scroll:" }), " Zoom in / out"] })] }), W.jsxs("div", { className: "control-item highlight", children: [W.jsx("span", { className: "control-icon", children: "◉" }), W.jsxs("span", { children: [W.jsx("strong", { children: "Click Object:" }), " View Dossier"] })] })] }), W.jsxs("div", { className: "quick-access-strip", children: [W.jsxs("span", { className: "quick-access-label", children: ["KEY TARGETS (", r, "):"] }), W.jsx("div", { className: "quick-chips", children: x.map(A => W.jsx("button", { className: `quick-chip ${(t == null ? void 0 : t.id) === A.id ? "active" : ""} ${A.type}`, onClick: () => e(A), children: A.name.split(" ")[0] }, A.id)) })] })] }), W.jsx(Bw, { currentYear: r, onYearChange: A => { g(!1), s(A) }, isPaused: o, onTogglePause: () => a(A => !A), timeSpeed: l, onSpeedChange: c, isAutoAdvancingYear: f, onToggleAutoAdvanceYear: () => { r >= 2026 && s(1960), g(A => !A) } }), W.jsxs("div", { className: "telemetry-panel interactive-hud", children: [W.jsxs("div", { className: "telemetry-row", children: [W.jsx("span", { children: "TIMELINE EPOCH:" }), W.jsxs("span", { className: "telemetry-val text-cyan", children: [r, " C.E."] })] }), W.jsxs("div", { className: "telemetry-row", children: [W.jsx("span", { children: "EST. ORBITAL DEBRIS:" }), W.jsxs("span", { className: "telemetry-val text-amber", children: ["~", u.toLocaleString(), " PIECES"] })] }), W.jsxs("div", { className: "telemetry-row", children: [W.jsx("span", { children: "ACTIVE CROSSINGS:" }), W.jsxs("span", { className: `telemetry-val ${d.length > 0 ? "text-red alert-pulse" : "text-cyan"}`, children: [d.length, " CONJUNCTIONS"] })] }), W.jsxs("div", { className: "telemetry-row", children: [W.jsx("span", { children: "KESSLER INDEX:" }), W.jsxs("span", { className: `telemetry-val ${R}`, children: [_, "% (", S, ")"] })] }), W.jsxs("div", { className: "telemetry-row", children: [W.jsx("span", { children: "NAMED PAYLOADS:" }), W.jsxs("span", { className: "telemetry-val text-cyan", children: [y, " SATELLITES"] })] })] })] })] })] }) } ou.createRoot(document.getElementById("root")).render(W.jsx(zv.StrictMode, { children: W.jsx(Vw, {}) }));
