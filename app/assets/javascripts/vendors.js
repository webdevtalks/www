window.Modernizr = function(e, t, n) {
    function r(e) {
        b.cssText = e
    }

    function i(e, t) {
        return r(x.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && b[i] !== n) return "pfx" == t ? i : !0
        }
        return !1
    }

    function a(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }

    function f(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + N.join(r + " ") + r).split(" ");
        return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + C.join(r + " ") + r).split(" "), a(i, t, n))
    }

    function l() {
        d.input = function(n) {
            for (var r = 0, i = n.length; i > r; r++) O[n[r]] = !!(n[r] in w);
            return O.list && (O.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), O
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(e) {
            for (var r, i, s, o = 0, u = e.length; u > o; o++) w.setAttribute("type", i = e[o]), r = "text" !== w.type, r && (w.value = E, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && w.style.WebkitAppearance !== n ? (m.appendChild(w), s = t.defaultView, r = s.getComputedStyle && "textfield" !== s.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, m.removeChild(w)) : /^(search|tel)$/.test(i) || (r = /^(url|email)$/.test(i) ? w.checkValidity && w.checkValidity() === !1 : w.value != E)), A[e[o]] = !!r;
            return A
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var c, h, p = "2.8.3",
        d = {},
        v = !0,
        m = t.documentElement,
        g = "modernizr",
        y = t.createElement(g),
        b = y.style,
        w = t.createElement("input"),
        E = ":)",
        S = {}.toString,
        x = " -webkit- -moz- -o- -ms- ".split(" "),
        T = "Webkit Moz O ms",
        N = T.split(" "),
        C = T.toLowerCase().split(" "),
        k = {
            svg: "http://www.w3.org/2000/svg"
        },
        L = {},
        A = {},
        O = {},
        M = [],
        _ = M.slice,
        D = function(e, n, r, i) {
            var s, o, u, a, f = t.createElement("div"),
                l = t.body,
                c = l || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;) u = t.createElement("div"), u.id = i ? i[r] : g + (r + 1), f.appendChild(u);
            return s = ["&#173;", '<style id="s', g, '">', e, "</style>"].join(""), f.id = g, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = m.style.overflow, m.style.overflow = "hidden", m.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), m.style.overflow = a), !!o
        },
        P = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t) && n(t).matches || !1;
            var r;
            return D("@media " + t + " { #" + g + " { position: absolute; } }", function(t) {
                r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), r
        },
        H = function() {
            function e(e, i) {
                i = i || t.createElement(r[e] || "div"), e = "on" + e;
                var o = e in i;
                return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        B = {}.hasOwnProperty;
    h = s(B, "undefined") || s(B.call, "undefined") ? function(e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
        return B.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = _.call(arguments, 1),
            r = function() {
                if (this instanceof r) {
                    var i = function() {};
                    i.prototype = t.prototype;
                    var s = new i,
                        o = t.apply(s, n.concat(_.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return t.apply(e, n.concat(_.call(arguments)))
            };
        return r
    }), L.flexbox = function() {
        return f("flexWrap")
    }, L.flexboxlegacy = function() {
        return f("boxDirection")
    }, L.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, L.canvastext = function() {
        return !(!d.canvas || !s(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, L.webgl = function() {
        return !!e.WebGLRenderingContext
    }, L.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : D(["@media (", x.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }), n
    }, L.geolocation = function() {
        return "geolocation" in navigator
    }, L.postmessage = function() {
        return !!e.postMessage
    }, L.websqldatabase = function() {
        return !!e.openDatabase
    }, L.indexedDB = function() {
        return !!f("indexedDB", e)
    }, L.hashchange = function() {
        return H("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, L.history = function() {
        return !(!e.history || !history.pushState)
    }, L.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, L.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, L.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), o(b.backgroundColor, "rgba")
    }, L.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), o(b.backgroundColor, "rgba") || o(b.backgroundColor, "hsla")
    }, L.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, L.backgroundsize = function() {
        return f("backgroundSize")
    }, L.borderimage = function() {
        return f("borderImage")
    }, L.borderradius = function() {
        return f("borderRadius")
    }, L.boxshadow = function() {
        return f("boxShadow")
    }, L.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }, L.opacity = function() {
        return i("opacity:.55"), /^0.55$/.test(b.opacity)
    }, L.cssanimations = function() {
        return f("animationName")
    }, L.csscolumns = function() {
        return f("columnCount")
    }, L.cssgradients = function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + x.join(n + e)).slice(0, -e.length)), o(b.backgroundImage, "gradient")
    }, L.cssreflections = function() {
        return f("boxReflect")
    }, L.csstransforms = function() {
        return !!f("transform")
    }, L.csstransforms3d = function() {
        var e = !!f("perspective");
        return e && "webkitPerspective" in m.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, L.csstransitions = function() {
        return f("transition")
    }, L.fontface = function() {
        var e;
        return D('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"),
                s = i.sheet || i.styleSheet,
                o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
            e = /src/i.test(o) && 0 === o.indexOf(r.split(" ")[0])
        }), e
    }, L.generatedcontent = function() {
        var e;
        return D(["#", g, "{font:0/0 a}#", g, ':after{content:"', E, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, L.video = function() {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, L.audio = function() {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    }, L.localstorage = function() {
        try {
            return localStorage.setItem(g, g), localStorage.removeItem(g), !0
        } catch (e) {
            return !1
        }
    }, L.sessionstorage = function() {
        try {
            return sessionStorage.setItem(g, g), sessionStorage.removeItem(g), !0
        } catch (e) {
            return !1
        }
    }, L.webworkers = function() {
        return !!e.Worker
    }, L.applicationcache = function() {
        return !!e.applicationCache
    }, L.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(k.svg, "svg").createSVGRect
    }, L.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == k.svg
    }, L.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(S.call(t.createElementNS(k.svg, "animate")))
    }, L.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(S.call(t.createElementNS(k.svg, "clipPath")))
    };
    for (var j in L) h(L, j) && (c = j.toLowerCase(), d[c] = L[j](), M.push((d[c] ? "" : "no-") + c));
    return d.input || l(), d.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var r in e) h(e, r) && d.addTest(r, e[r]);
            else {
                if (e = e.toLowerCase(), d[e] !== n) return d;
                t = "function" == typeof t ? t() : t, "undefined" != typeof v && v && (m.className += " " + (t ? "" : "no-") + e), d[e] = t
            }
            return d
        }, r(""), y = w = null,
        function(e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
            }

            function r() {
                var e = y.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function i(e) {
                var t = g[e[v]];
                return t || (t = {}, m++, e[v] = m, g[m] = t), t
            }

            function s(e, n, r) {
                if (n || (n = t), l) return n.createElement(e);
                r || (r = i(n));
                var s;
                return s = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !s.canHaveChildren || p.test(e) || s.tagUrn ? s : r.frag.appendChild(s)
            }

            function o(e, n) {
                if (e || (e = t), l) return e.createDocumentFragment();
                n = n || i(e);
                for (var s = n.frag.cloneNode(), o = 0, u = r(), a = u.length; a > o; o++) s.createElement(u[o]);
                return s
            }

            function u(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                    return y.shivMethods ? s(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
            }

            function a(e) {
                e || (e = t);
                var r = i(e);
                return !y.shivCSS || f || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || u(e, r), e
            }
            var f, l, c = "3.7.0",
                h = e.html5 || {},
                p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                v = "_html5shiv",
                m = 0,
                g = {};
            ! function() {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", f = "hidden" in e, l = 1 == e.childNodes.length || function() {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
                } catch (n) {
                    f = !0, l = !0
                }
            }();
            var y = {
                elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: c,
                shivCSS: h.shivCSS !== !1,
                supportsUnknownElements: l,
                shivMethods: h.shivMethods !== !1,
                type: "default",
                shivDocument: a,
                createElement: s,
                createDocumentFragment: o
            };
            e.html5 = y, a(t)
        }(this, t), d._version = p, d._prefixes = x, d._domPrefixes = C, d._cssomPrefixes = N, d.mq = P, d.hasEvent = H, d.testProp = function(e) {
            return u([e])
        }, d.testAllProps = f, d.testStyles = D, d.prefixed = function(e, t, n) {
            return t ? f(e, t, n) : f(e, "pfx")
        }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (v ? " js " + M.join(" ") : ""), d
}(this, this.document);
! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(e) {
        var t = e.length,
            n = _.type(e);
        return "function" === n || _.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function d(e, t, n) {
        if (_.isFunction(t)) return _.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return _.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (hb.test(t)) return _.filter(t, e, n);
            t = _.filter(t, e)
        }
        return _.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function e(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function f(e) {
        var t = ob[e] = {};
        return _.each(e.match(nb) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + Math.random()
    }

    function i(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ub, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : tb.test(n) ? _.parseJSON(n) : n
                } catch (i) {}
                sb.set(e, t, n)
            } else n = void 0;
        return n
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function m(e, t) {
        return _.nodeName(e, "table") && _.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function n(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function o(e) {
        var t = Kb.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function p(e, t) {
        for (var n = 0, r = e.length; r > n; n++) rb.set(e[n], "globalEval", !t || rb.get(t[n], "globalEval"))
    }

    function q(e, t) {
        var n, r, i, s, o, u, a, f;
        if (1 === t.nodeType) {
            if (rb.hasData(e) && (s = rb.access(e), o = rb.set(t, s), f = s.events)) {
                delete o.handle, o.events = {};
                for (i in f)
                    for (n = 0, r = f[i].length; r > n; n++) _.event.add(t, i, f[i][n])
            }
            sb.hasData(e) && (u = sb.access(e), a = _.extend({}, u), sb.set(t, a))
        }
    }

    function r(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && _.nodeName(e, t) ? _.merge([e], n) : n
    }

    function s(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && yb.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function t(e, t) {
        var n, r = _(t.createElement(e)).appendTo(t.body),
            i = a.getDefaultComputedStyle && (n = a.getDefaultComputedStyle(r[0])) ? n.display : _.css(r[0], "display");
        return r.detach(), i
    }

    function u(e) {
        var n = Z,
            r = Ob[e];
        return r || (r = t(e, n), "none" !== r && r || (Nb = (Nb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(n.documentElement), n = Nb[0].contentDocument, n.write(), n.close(), r = t(e, n), Nb.detach()), Ob[e] = r), r
    }

    function v(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Rb(e), n && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || _.contains(e.ownerDocument, e) || (o = _.style(e, t)), Qb.test(o) && Pb.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function w(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function x(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Xb.length; i--;)
            if (t = Xb[i] + n, t in e) return t;
        return r
    }

    function y(e, t, n) {
        var r = Tb.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function z(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += _.css(e, n + wb[s], !0, i)), r ? ("content" === n && (o -= _.css(e, "padding" + wb[s], !0, i)), "margin" !== n && (o -= _.css(e, "border" + wb[s] + "Width", !0, i))) : (o += _.css(e, "padding" + wb[s], !0, i), "padding" !== n && (o += _.css(e, "border" + wb[s] + "Width", !0, i)));
        return o
    }

    function A(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Rb(e),
            o = "border-box" === _.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = v(e, t, s), (0 > i || null == i) && (i = e.style[t]), Qb.test(i)) return i;
            r = o && (Y.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + z(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function B(e, t) {
        for (var n, r, i, s = [], o = 0, a = e.length; a > o; o++) r = e[o], r.style && (s[o] = rb.get(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && xb(r) && (s[o] = rb.access(r, "olddisplay", u(r.nodeName)))) : (i = xb(r), "none" === n && i || rb.set(r, "olddisplay", i ? n : _.css(r, "display"))));
        for (o = 0; a > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function C(e, t, n, r, i) {
        return new C.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function() {
            Yb = void 0
        }), Yb = _.now()
    }

    function E(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = wb[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function F(e, t, n) {
        for (var r, i = (cc[t] || []).concat(cc["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function G(e, t, n) {
        var r, i, s, o, a, f, l, c, h = this,
            p = {},
            d = e.style,
            v = e.nodeType && xb(e),
            m = rb.get(e, "fxshow");
        n.queue || (a = _._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, f = a.empty.fire, a.empty.fire = function() {
            a.unqueued || f()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = _.css(e, "display"), c = "none" === l ? rb.get(e, "olddisplay") || u(e.nodeName) : l, "inline" === c && "none" === _.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], $b.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (v ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    v = !0
                }
                p[r] = m && m[r] || _.style(e, r)
            } else l = void 0;
        if (_.isEmptyObject(p)) "inline" === ("none" === l ? u(e.nodeName) : l) && (d.display = l);
        else {
            m ? "hidden" in m && (v = m.hidden) : m = rb.access(e, "fxshow", {}), s && (m.hidden = !v), v ? _(e).show() : h.done(function() {
                _(e).hide()
            }), h.done(function() {
                var t;
                rb.remove(e, "fxshow");
                for (t in p) _.style(e, t, p[t])
            });
            for (r in p) o = F(v ? m[r] : 0, r, h), r in m || (m[r] = o.start, v && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = _.camelCase(n), i = t[r], s = e[n], _.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = _.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function I(e, t, n) {
        var r, i, s = 0,
            o = bc.length,
            u = _.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                for (var t = Yb || D(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Yb || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = _.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (H(l, f.opts.specialEasing); o > s; s++)
            if (r = bc[s].call(f, e, l, f.opts)) return r;
        return _.map(l, F, f), _.isFunction(f.opts.start) && f.opts.start.call(e, f), _.fx.timer(_.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function J(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(nb) || [];
            if (_.isFunction(n))
                for (; r = s[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function K(e, t, n, r) {
        function i(u) {
            var l;
            return s[u] = !0, _.each(e[u] || [], function(e, u) {
                var a = u(t, n, r);
                return "string" != typeof a || o || s[a] ? o ? !(l = a) : void 0 : (t.dataTypes.unshift(a), i(a), !1)
            }), l
        }
        var s = {},
            o = e === vc;
        return i(t.dataTypes[0]) || !s["*"] && i("*")
    }

    function L(e, t) {
        var n, r, i = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && _.extend(!0, e, r), e
    }

    function M(e, t, n) {
        for (var r, i, s, o, u = e.contents, a = e.dataTypes;
            "*" === a[0];) a.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in u)
                if (u[i] && u[i].test(r)) {
                    a.unshift(i);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }

    function N(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        for (s = l.shift(); s;)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function O(e, t, n, r) {
        var i;
        if (_.isArray(t)) _.each(t, function(t, i) {
            n || zc.test(e) ? r(e, i) : O(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== _.type(t)) r(e, t);
        else
            for (i in t) O(e + "[" + i + "]", t[i], n, r)
    }

    function P(e) {
        return _.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.1",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bb = /^-ms-/,
        cb = /-([\da-z])/gi,
        db = function(e, t) {
            return t.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : R.call(this)
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return _.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || _.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
            if (null != (e = arguments[u]))
                for (t in e) n = o[t], r = e[t], o !== r && (f && r && (_.isPlainObject(r) || (i = _.isArray(r))) ? (i ? (i = !1, s = n && _.isArray(n) ? n : []) : s = n && _.isPlainObject(n) ? n : {}, o[t] = _.extend(f, s, r)) : void 0 !== r && (o[t] = r));
        return o
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === _.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !_.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" !== _.type(e) || e.nodeType || _.isWindow(e) ? !1 : e.constructor && !X.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[W.call(e)] || "object" : typeof e
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(e) {
            return e.replace(bb, "ms-").replace(cb, db)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = c(e);
            if (n) {
                if (o)
                    for (; s > i && (r = t.apply(e[i], n), r !== !1); i++);
                else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (o)
                for (; s > i && (r = t.call(e[i], i, e[i]), r !== !1); i++);
            else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ab, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : T.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = c(e),
                u = [];
            if (o)
                for (; s > i; i++) r = t(e[i], i, n), null != r && u.push(r);
            else
                for (i in e) r = t(e[i], i, n), null != r && u.push(r);
            return S.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), _.isFunction(e) ? (r = R.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(R.call(arguments)))
            }, i.guid = e.guid = e.guid || _.guid++, i) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var eb = function(e) {
        function t(e, t, n, r) {
            var i, s, o, u, a, f, c, p, d, v;
            if ((t ? t.ownerDocument || t : q) !== _ && M(t), t = t || _, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (P && !r) {
                if (i = yt.exec(e))
                    if (o = i[1]) {
                        if (9 === u) {
                            if (s = t.getElementById(o), !s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && F(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = i[3]) && E.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                    }
                if (E.qsa && (!H || !H.test(e))) {
                    if (p = c = I, d = t, v = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        for (f = N(e), (c = t.getAttribute("id")) ? p = c.replace(wt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", a = f.length; a--;) f[a] = p + h(f[a]);
                        d = bt.test(e) && l(t.parentNode) || t, v = f.join(",")
                    }
                    if (v) try {
                        return Z.apply(n, d.querySelectorAll(v)), n
                    } catch (m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(at, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = _.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) S.attrHandle[n[r]] = t
        }

        function o(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function f(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, s = e([], n.length, t), o = s.length; o--;) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && typeof e.getElementsByTagName !== $ && e
        }

        function c() {}

        function h(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = U++;
            return t.first ? function(t, n, s) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [R, s];
                if (o) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (a = t[I] || (t[I] = {}), (u = a[r]) && u[0] === R && u[1] === s) return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, r) {
            for (var i = 0, s = n.length; s > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function g(e, t, n, i, s, o) {
            return i && !i[I] && (i = g(i)), s && !s[I] && (s = g(s, o)), r(function(r, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    g = r || v(t || "*", u.nodeType ? [u] : u, []),
                    y = !e || !r && t ? g : m(g, h, e, u, a),
                    b = n ? s || (r ? e : d || i) ? [] : o : y;
                if (n && n(y, b, u, a), i)
                    for (f = m(b, p), i(f, [], u, a), l = f.length; l--;)(c = f[l]) && (b[p[l]] = !(y[p[l]] = c));
                if (r) {
                    if (s || e) {
                        if (s) {
                            for (f = [], l = b.length; l--;)(c = b[l]) && f.push(y[l] = c);
                            s(null, b = [], f, a)
                        }
                        for (l = b.length; l--;)(c = b[l]) && (f = s ? tt.call(r, c) : h[l]) > -1 && (r[f] = !(o[f] = c))
                    }
                } else b = m(b === o ? b.splice(d, b.length) : b), s ? s(null, o, b, a) : Z.apply(o, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, s = S.relative[e[0].type], o = s || S.relative[" "], u = s ? 1 : 0, a = p(function(e) {
                    return e === t
                }, o, !0), f = p(function(e) {
                    return tt.call(t, e) > -1
                }, o, !0), l = [function(e, n, r) {
                    return !s && (r || n !== L) || ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
                }]; i > u; u++)
                if (n = S.relative[e[u].type]) l = [p(d(l), n)];
                else {
                    if (n = S.filter[e[u].type].apply(null, e[u].matches), n[I]) {
                        for (r = ++u; i > r && !S.relative[e[r].type]; r++);
                        return g(u > 1 && d(l), u > 1 && h(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, r > u && y(e.slice(u, r)), i > r && y(e = e.slice(r)), i > r && h(e))
                    }
                    l.push(n)
                }
            return d(l)
        }

        function b(e, n) {
            var i = n.length > 0,
                s = e.length > 0,
                o = function(r, o, u, a, f) {
                    var l, c, h, p = 0,
                        d = "0",
                        v = r && [],
                        g = [],
                        y = L,
                        b = r || s && S.find.TAG("*", f),
                        w = R += null == y ? 1 : Math.random() || .1,
                        E = b.length;
                    for (f && (L = o !== _ && o); d !== E && null != (l = b[d]); d++) {
                        if (s && l) {
                            for (c = 0; h = e[c++];)
                                if (h(l, o, u)) {
                                    a.push(l);
                                    break
                                }
                            f && (R = w)
                        }
                        i && ((l = !h && l) && p--, r && v.push(l))
                    }
                    if (p += d, i && d !== p) {
                        for (c = 0; h = n[c++];) h(v, g, o, u);
                        if (r) {
                            if (p > 0)
                                for (; d--;) v[d] || g[d] || (g[d] = G.call(a));
                            g = m(g)
                        }
                        Z.apply(a, g), f && !r && g.length > 0 && p + n.length > 1 && t.uniqueSort(a)
                    }
                    return f && (R = w, L = y), v
                };
            return i ? r(o) : o
        }
        var w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I = "sizzle" + -(new Date),
            q = e.document,
            R = 0,
            U = 0,
            z = n(),
            W = n(),
            X = n(),
            V = function(e, t) {
                return e === t && (O = !0), 0
            },
            $ = "undefined",
            J = 1 << 31,
            K = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            Y = Q.push,
            Z = Q.push,
            et = Q.slice,
            tt = Q.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st = it.replace("w", "w#"),
            ot = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + rt + "*\\]",
            ut = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            at = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            ft = new RegExp("^" + rt + "*," + rt + "*"),
            lt = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            ct = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            ht = new RegExp(ut),
            pt = new RegExp("^" + st + "$"),
            dt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + ut),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            vt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            Et = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            St = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = et.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (xt) {
            Z = {
                apply: Q.length ? function(e, t) {
                    Y.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        E = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, M = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : q,
                r = n.defaultView;
            return n !== _ && 9 === n.nodeType && n.documentElement ? (_ = n, D = n.documentElement, P = !T(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                M()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                M()
            })), E.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), E.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), E.getElementsByClassName = gt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), E.getById = i(function(e) {
                return D.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
            }), E.getById ? (S.find.ID = function(e, t) {
                if (typeof t.getElementById !== $ && P) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(Et, St);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(Et, St);
                return function(e) {
                    var n = typeof e.getAttributeNode !== $ && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), S.find.TAG = E.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== $ ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, S.find.CLASS = E.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== $ && P ? t.getElementsByClassName(e) : void 0
            }, B = [], H = [], (E.qsa = gt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
            })), (E.matchesSelector = gt.test(j = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
                E.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), B.push("!=", ut)
            }), H = H.length && new RegExp(H.join("|")), B = B.length && new RegExp(B.join("|")), t = gt.test(D.compareDocumentPosition), F = t || gt.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return O = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !E.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === q && F(q, e) ? -1 : t === n || t.ownerDocument === q && F(q, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return O = !0, 0;
                var r, i = 0,
                    s = e.parentNode,
                    u = t.parentNode,
                    a = [e],
                    f = [t];
                if (!s || !u) return e === n ? -1 : t === n ? 1 : s ? -1 : u ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
                if (s === u) return o(e, t);
                for (r = e; r = r.parentNode;) a.unshift(r);
                for (r = t; r = r.parentNode;) f.unshift(r);
                for (; a[i] === f[i];) i++;
                return i ? o(a[i], f[i]) : a[i] === q ? -1 : f[i] === q ? 1 : 0
            }, n) : _
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== _ && M(e), n = n.replace(ct, "='$1']"), !(!E.matchesSelector || !P || B && B.test(n) || H && H.test(n))) try {
                var r = j.call(e, n);
                if (r || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, _, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && M(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== _ && M(e);
            var n = S.attrHandle[t.toLowerCase()],
                r = n && K.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== r ? r : E.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (O = !E.detectDuplicates, A = !E.sortStable && e.slice(0), e.sort(V), O) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null, e
        }, x = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += x(t);
            return n
        }, S = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Et, St), e[3] = (e[3] || e[4] || e[5] || "").replace(Et, St), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return dt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ht.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Et, St).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== $ && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var s = t.attr(i, e);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === r : "!=" === n ? s !== r : "^=" === n ? r && 0 === s.indexOf(r) : "*=" === n ? r && s.indexOf(r) > -1 : "$=" === n ? r && s.slice(-r.length) === r : "~=" === n ? (" " + s + " ").indexOf(r) > -1 : "|=" === n ? s === r || s.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                for (; v;) {
                                    for (c = t; c = c[v];)
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                for (l = m[I] || (m[I] = {}), f = l[e] || [], p = f[0] === R && f[1], h = f[0] === R && f[2], c = p && m.childNodes[p]; c = ++p && c && c[v] || (h = p = 0) || d.pop();)
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [R, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[I] || (t[I] = {}))[e]) && f[0] === R) h = f[1];
                            else
                                for (;
                                    (c = ++p && c && c[v] || (h = p = 0) || d.pop()) && ((u ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++h || (y && ((c[I] || (c[I] = {}))[e] = [R, h]), c !== t)););
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, s = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[I] ? s(n) : s.length > 1 ? (i = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = s(e, n), o = i.length; o--;) r = tt.call(e, i[o]), e[r] = !(t[r] = i[o])
                    }) : function(e) {
                        return s(e, 0, i)
                    }) : s
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = C(e.replace(at, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var s, o = i(e, null, r, []), u = e.length; u--;)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, r, s) {
                        return t[0] = e, i(t, null, s, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Et, St).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !S.pseudos.empty(e)
                },
                header: function(e) {
                    return mt.test(e.nodeName)
                },
                input: function(e) {
                    return vt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: f(function() {
                    return [0]
                }),
                last: f(function(e, t) {
                    return [t - 1]
                }),
                eq: f(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: f(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: f(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: f(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: f(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[w] = u(w);
        for (w in {
                submit: !0,
                reset: !0
            }) S.pseudos[w] = a(w);
        return c.prototype = S.filters = S.pseudos, S.setFilters = new c, N = t.tokenize = function(e, n) {
            var r, i, s, o, u, a, f, l = W[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (u = e, a = [], f = S.preFilter; u;) {
                (!r || (i = ft.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), r = !1, (i = lt.exec(u)) && (r = i.shift(), s.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }), u = u.slice(r.length));
                for (o in S.filter) !(i = dt[o].exec(u)) || f[o] && !(i = f[o](i)) || (r = i.shift(), s.push({
                    value: r,
                    type: o,
                    matches: i
                }), u = u.slice(r.length));
                if (!r) break
            }
            return n ? u.length : u ? t.error(e) : W(e, a).slice(0)
        }, C = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = X[e + " "];
            if (!s) {
                for (t || (t = N(e)), n = t.length; n--;) s = y(t[n]), s[I] ? r.push(s) : i.push(s);
                s = X(e, b(i, r)), s.selector = e
            }
            return s
        }, k = t.select = function(e, t, n, r) {
            var i, s, o, u, a, f = "function" == typeof e && e,
                c = !r && N(e = f.selector || e);
            if (n = n || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && E.getById && 9 === t.nodeType && P && S.relative[s[1].type]) {
                    if (t = (S.find.ID(o.matches[0].replace(Et, St), t) || [])[0], !t) return n;
                    f && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (i = dt.needsContext.test(e) ? 0 : s.length; i-- && (o = s[i], !S.relative[u = o.type]);)
                    if ((a = S.find[u]) && (r = a(o.matches[0].replace(Et, St), bt.test(s[0].type) && l(t.parentNode) || t))) {
                        if (s.splice(i, 1), e = r.length && h(s), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (f || C(e, c))(r, t, !P, n, bt.test(e) && l(t.parentNode) || t), n
        }, E.sortStable = I.split("").sort(V).join("") === I, E.detectDuplicates = !!O, M(), E.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), E.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(a);
    _.find = eb, _.expr = eb.selectors, _.expr[":"] = _.expr.pseudos, _.unique = eb.uniqueSort, _.text = eb.getText, _.isXMLDoc = eb.isXML, _.contains = eb.contains;
    var fb = _.expr.match.needsContext,
        gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        hb = /^.[^:#\[\.,]*$/;
    _.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (_.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) _.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? _.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(d(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(d(this, e || [], !0))
        },
        is: function(e) {
            return !!d(this, "string" == typeof e && fb.test(e) ? _(e) : e || [], !1).length
        }
    });
    var ib, jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        kb = _.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : jb.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ib).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), gb.test(n[1]) && _.isPlainObject(t))
                        for (n in t) _.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = Z.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : _.isFunction(e) ? "undefined" != typeof ib.ready ? ib.ready(e) : e(_) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), _.makeArray(e, this))
        };
    kb.prototype = _.fn, ib = _(Z);
    var lb = /^(?:parents|prev(?:Until|All))/,
        mb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && _(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, s = [], o = fb.test(e) || "string" != typeof e ? _(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? _.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(_(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.unique(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return _.dir(e, "parentNode", n)
        },
        next: function(t) {
            return e(t, "nextSibling")
        },
        prev: function(t) {
            return e(t, "previousSibling")
        },
        nextAll: function(e) {
            return _.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return _.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return _.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return _.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || _.merge([], e.childNodes)
        }
    }, function(e, t) {
        _.fn[e] = function(n, r) {
            var i = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (mb[e] || _.unique(i), lb.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var nb = /\S+/g,
        ob = {};
    _.Callbacks = function(e) {
        e = "string" == typeof e ? ob[e] || f(e) : _.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            l = function(f) {
                for (t = e.memory && f, n = !0, o = i || 0, i = 0, s = u.length, r = !0; u && s > o; o++)
                    if (u[o].apply(f[0], f[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (a ? a.length && l(a.shift()) : t ? u = [] : c.disable())
            },
            c = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            _.each(t, function(t, n) {
                                var r = _.type(n);
                                "function" === r ? e.unique && c.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, l(t))
                    }
                    return this
                },
                remove: function() {
                    return u && _.each(arguments, function(e, t) {
                        for (var n;
                            (n = _.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, o >= n && o--)
                    }), this
                },
                has: function(e) {
                    return e ? _.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = a = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = void 0, t || c.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, t) {
                    return !u || n && !a || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? a.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, _.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return _.Deferred(function(n) {
                            _.each(t, function(t, s) {
                                var o = _.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && _.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, _.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                s = R.call(arguments),
                o = s.length,
                u = 1 !== o || e && _.isFunction(e.promise) ? o : 0,
                a = 1 === u ? e : _.Deferred(),
                f = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? R.call(arguments) : i, r === t ? a.notifyWith(n, r) : --u || a.resolveWith(n, r)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) s[i] && _.isFunction(s[i].promise) ? s[i].promise().done(f(i, r, s)).fail(a.reject).progress(f(i, n, t)) : --u;
            return u || a.resolveWith(r, s), a.promise()
        }
    });
    var pb;
    _.fn.ready = function(e) {
        return _.ready.promise().done(e), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? _.readyWait++ : _.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, e !== !0 && --_.readyWait > 0 || (pb.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(e) {
        return pb || (pb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pb.promise(e)
    }, _.ready.promise();
    var qb = _.access = function(e, t, n, r, i, s, o) {
        var u = 0,
            a = e.length,
            f = null == n;
        if ("object" === _.type(n)) {
            i = !0;
            for (u in n) _.access(e, t, u, n[u], !0, s, o)
        } else if (void 0 !== r && (i = !0, _.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                return f.call(_(e), n)
            })), t))
            for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
    };
    _.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(e) {
            if (!h.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = h.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, _.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                s = this.cache[i];
            if ("string" == typeof t) s[t] = n;
            else if (_.isEmptyObject(s)) _.extend(this.cache[i], t);
            else
                for (r in t) s[r] = t[r];
            return s
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, _.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, s = this.key(e),
                o = this.cache[s];
            if (void 0 === t) this.cache[s] = {};
            else {
                _.isArray(t) ? r = t.concat(t.map(_.camelCase)) : (i = _.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(nb) || [])), n = r.length;
                for (; n--;) delete o[r[n]]
            }
        },
        hasData: function(e) {
            return !_.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var rb = new h,
        sb = new h,
        tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ub = /([A-Z])/g;
    _.extend({
        hasData: function(e) {
            return sb.hasData(e) || rb.hasData(e)
        },
        data: function(e, t, n) {
            return sb.access(e, t, n)
        },
        removeData: function(e, t) {
            sb.remove(e, t)
        },
        _data: function(e, t, n) {
            return rb.access(e, t, n)
        },
        _removeData: function(e, t) {
            rb.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, r, s, o = this[0],
                u = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (s = sb.get(o), 1 === o.nodeType && !rb.get(o, "hasDataAttrs"))) {
                    for (n = u.length; n--;) u[n] && (r = u[n].name, 0 === r.indexOf("data-") && (r = _.camelCase(r.slice(5)), i(o, r, s[r])));
                    rb.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                sb.set(this, e)
            }) : qb(this, function(t) {
                var n, r = _.camelCase(e);
                if (o && void 0 === t) {
                    if (n = sb.get(o, e), void 0 !== n) return n;
                    if (n = sb.get(o, r), void 0 !== n) return n;
                    if (n = i(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = sb.get(this, r);
                    sb.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && sb.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                sb.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = rb.get(e, t), n && (!r || _.isArray(n) ? r = rb.access(e, t, _.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = _._queueHooks(e, t),
                o = function() {
                    _.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return rb.get(e, n) || rb.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    rb.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = _.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = rb.get(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wb = ["Top", "Right", "Bottom", "Left"],
        xb = function(e, t) {
            return e = t || e, "none" === _.css(e, "display") || !_.contains(e.ownerDocument, e)
        },
        yb = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var zb = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Ab = /^key/,
        Bb = /^(?:mouse|pointer|contextmenu)|click/,
        Cb = /^(?:focusinfocus|focusoutblur)$/,
        Db = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = rb.get(e);
            if (m)
                for (n.handler && (s = n, n = s.handler, i = s.selector), n.guid || (n.guid = _.guid++), (a = m.events) || (a = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
                        return typeof _ !== zb && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(nb) || [""], f = t.length; f--;) u = Db.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p && (c = _.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = _.event.special[p] || {}, l = _.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && _.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, s), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, r, d, o) !== !1 || e.addEventListener && e.addEventListener(p, o, !1)), c.add && (c.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), _.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = rb.hasData(e) && rb.get(e);
            if (m && (a = m.events)) {
                for (t = (t || "").match(nb) || [""], f = t.length; f--;)
                    if (u = Db.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                        for (c = _.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) l = h[s], !i && v !== l.origType || n && n.guid !== l.guid || u && !u.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                        o && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || _.removeEvent(e, p, m.handle), delete a[p])
                    } else
                        for (p in a) _.event.remove(e, p + t[f], n, r, !0);
                _.isEmptyObject(a) && (delete m.handle, rb.remove(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, s, o, u, f, l, c, h = [n || Z],
                p = X.call(e, "type") ? e.type : e,
                d = X.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = o = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !Cb.test(p + _.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), f = p.indexOf(":") < 0 && "on" + p, e = e[_.expando] ? e : new _.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : _.makeArray(t, [e]), c = _.event.special[p] || {}, r || !c.trigger || c.trigger.apply(n, t) !== !1)) {
                if (!r && !c.noBubble && !_.isWindow(n)) {
                    for (u = c.delegateType || p, Cb.test(u + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                    o === (n.ownerDocument || Z) && h.push(o.defaultView || o.parentWindow || a)
                }
                for (i = 0;
                    (s = h[i++]) && !e.isPropagationStopped();) e.type = i > 1 ? u : c.bindType || p, l = (rb.get(s, "events") || {})[e.type] && rb.get(s, "handle"), l && l.apply(s, t), l = f && s[f], l && l.apply && _.acceptData(s) && (e.result = l.apply(s, t), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && c._default.apply(h.pop(), t) !== !1 || !_.acceptData(n) || f && _.isFunction(n[p]) && !_.isWindow(n) && (o = n[f], o && (n[f] = null), _.event.triggered = p, n[p](), _.event.triggered = void 0, o && (n[f] = o)), e.result
            }
        },
        dispatch: function(e) {
            e = _.event.fix(e);
            var t, n, r, i, s, o = [],
                u = R.call(arguments),
                a = (rb.get(this, "events") || {})[e.type] || [],
                f = _.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, e) !== !1) {
                for (o = _.event.handlers.call(this, e, a), t = 0;
                    (i = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (s = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, r = ((_.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, u), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a !== this; a = a.parentNode || this)
                    if (a.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; u > n; n++) s = t[n], i = s.selector + " ", void 0 === r[i] && (r[i] = s.needsContext ? _(i, this).index(a) >= 0 : _.find(i, this, null, [a]).length), r[i] && r.push(s);
                        r.length && o.push({
                            elem: a,
                            handlers: r
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[_.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = Bb.test(i) ? this.mouseHooks : Ab.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new _.Event(s), t = r.length; t--;) n = r[t], e[n] = s[n];
            return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return _.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? _.event.trigger(i, null, t) : _.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, _.Event = function(e, t) {
        return this instanceof _.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? j : k) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(e, t)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = j, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = j, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = j, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !_.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e), !0)
        };
        _.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = rb.access(r, t);
                i || r.addEventListener(e, n, !0), rb.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = rb.access(r, t) - 1;
                i ? rb.access(r, t, i) : (r.removeEventListener(e, n, !0), rb.remove(r, t))
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = k;
            else if (!r) return this;
            return 1 === i && (s = r, r = function(e) {
                return _().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = _.guid++)), this.each(function() {
                _.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = k), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? _.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Eb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fb = /<([\w:]+)/,
        Gb = /<|&#?\w+;/,
        Hb = /<(?:script|style|link)/i,
        Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jb = /^$|\/(?:java|ecma)script/i,
        Kb = /^true\/(.*)/,
        Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Mb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mb.optgroup = Mb.option, Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead, Mb.th = Mb.td, _.extend({
        clone: function(e, t, n) {
            var i, o, u, a, f = e.cloneNode(!0),
                l = _.contains(e.ownerDocument, e);
            if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (a = r(f), u = r(e), i = 0, o = u.length; o > i; i++) s(u[i], a[i]);
            if (t)
                if (n)
                    for (u = u || r(e), a = a || r(f), i = 0, o = u.length; o > i; i++) q(u[i], a[i]);
                else q(e, f);
            return a = r(f, "script"), a.length > 0 && p(a, !l && r(e, "script")), f
        },
        buildFragment: function(e, t, n, i) {
            for (var s, o, u, a, f, l, c = t.createDocumentFragment(), h = [], d = 0, v = e.length; v > d; d++)
                if (s = e[d], s || 0 === s)
                    if ("object" === _.type(s)) _.merge(h, s.nodeType ? [s] : s);
                    else if (Gb.test(s)) {
                for (o = o || c.appendChild(t.createElement("div")), u = (Fb.exec(s) || ["", ""])[1].toLowerCase(), a = Mb[u] || Mb._default, o.innerHTML = a[1] + s.replace(Eb, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                _.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
            } else h.push(t.createTextNode(s));
            for (c.textContent = "", d = 0; s = h[d++];)
                if ((!i || -1 === _.inArray(s, i)) && (f = _.contains(s.ownerDocument, s), o = r(c.appendChild(s), "script"), f && p(o), n))
                    for (l = 0; s = o[l++];) Jb.test(s.type || "") && n.push(s);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, s = _.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (_.acceptData(n) && (i = n[rb.expando], i && (t = rb.cache[i]))) {
                    if (t.events)
                        for (r in t.events) s[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                    rb.cache[i] && delete rb.cache[i]
                }
                delete sb.cache[n[sb.expando]]
            }
        }
    }), _.fn.extend({
        text: function(e) {
            return qb(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? _.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || _.cleanData(r(n)), n.parentNode && (t && _.contains(n.ownerDocument, n) && p(r(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(r(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return qb(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Hb.test(e) && !Mb[(Fb.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Eb, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (_.cleanData(r(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (s) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, _.cleanData(r(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = S.apply([], e);
            var i, s, u, a, f, l, c = 0,
                h = this.length,
                p = this,
                d = h - 1,
                v = e[0],
                m = _.isFunction(v);
            if (m || h > 1 && "string" == typeof v && !Y.checkClone && Ib.test(v)) return this.each(function(n) {
                var r = p.eq(n);
                m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
            });
            if (h && (i = _.buildFragment(e, this[0].ownerDocument, !1, this), s = i.firstChild, 1 === i.childNodes.length && (i = s), s)) {
                for (u = _.map(r(i, "script"), n), a = u.length; h > c; c++) f = i, c !== d && (f = _.clone(f, !0, !0), a && _.merge(u, r(f, "script"))), t.call(this[c], f, c);
                if (a)
                    for (l = u[u.length - 1].ownerDocument, _.map(u, o), c = 0; a > c; c++) f = u[c], Jb.test(f.type || "") && !rb.access(f, "globalEval") && _.contains(l, f) && (f.src ? _._evalUrl && _._evalUrl(f.src) : _.globalEval(f.textContent.replace(Lb, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, r = [], i = _(e), s = i.length - 1, o = 0; s >= o; o++) n = o === s ? this : this.clone(!0), _(i[o])[t](n), T.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Nb, Ob = {},
        Pb = /^margin/,
        Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
        Rb = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(i);
            var e = a.getComputedStyle(s, null);
            t = "1%" !== e.top, n = "4px" === e.width, r.removeChild(i)
        }
        var t, n, r = Z.documentElement,
            i = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(s), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return e(), t
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, t = s.appendChild(Z.createElement("div"));
                return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", r.appendChild(i), e = !parseFloat(a.getComputedStyle(t, null).marginRight), r.removeChild(i), e
            }
        }))
    }(), _.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var Sb = /^(none|table(?!-c[ea]).+)/,
        Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
        Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
        Vb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xb = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = v(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, u = _.camelCase(t),
                    a = e.style;
                return t = _.cssProps[u] || (_.cssProps[u] = x(a, u)), o = _.cssHooks[t] || _.cssHooks[u], void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t] : (s = typeof n, "string" === s && (i = Ub.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(_.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || _.cssNumber[u] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (a[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, s, o, u = _.camelCase(t);
            return t = _.cssProps[u] || (_.cssProps[u] = x(e.style, u)), o = _.cssHooks[t] || _.cssHooks[u], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = v(e, t, r)), "normal" === i && t in Wb && (i = Wb[t]), "" === n || n ? (s = parseFloat(i), n === !0 || _.isNumeric(s) ? s || 0 : i) : i
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Sb.test(_.css(e, "display")) && 0 === e.offsetWidth ? _.swap(e, Vb, function() {
                    return A(e, t, r)
                }) : A(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Rb(e);
                return y(e, n, r ? z(e, t, r, "border-box" === _.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(e, t) {
        return t ? _.swap(e, {
            display: "inline-block"
        }, v, [e, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wb[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Pb.test(e) || (_.cssHooks[e + t].set = y)
    }), _.fn.extend({
        css: function(e, t) {
            return qb(this, function(e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (_.isArray(t)) {
                    for (r = Rb(e), i = t.length; i > o; o++) s[t[o]] = _.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                xb(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = C.propHooks[this.prop];
            return e && e.get ? e.get(this) : C.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = C.propHooks[this.prop];
            return this.pos = t = this.options.duration ? _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = _.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[_.cssProps[e.prop]] || _.cssHooks[e.prop]) ? _.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Yb, Zb, $b = /^(?:toggle|show|hide)$/,
        _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
        ac = /queueHooks$/,
        bc = [G],
        cc = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = _b.exec(t),
                    s = i && i[3] || (_.cssNumber[e] ? "" : "px"),
                    o = (_.cssNumber[e] || "px" !== s && +r) && _b.exec(_.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, _.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(e, t) {
                _.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], cc[n] = cc[n] || [], cc[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bc.unshift(e) : bc.push(e)
            }
        }), _.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? _.extend({}, e) : {
                complete: n || !n && t || _.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !_.isFunction(t) && t
            };
            return r.duration = _.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in _.fx.speeds ? _.fx.speeds[r.duration] : _.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                _.isFunction(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
            }, r
        }, _.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(xb).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = _.isEmptyObject(e),
                    s = _.speed(t, n, r),
                    o = function() {
                        var t = I(this, _.extend({}, e), s);
                        (i || rb.get(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        s = _.timers,
                        o = rb.get(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && ac.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                    (t || !n) && _.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = rb.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = _.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(e, t) {
            var n = _.fn[t];
            _.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(E(t, !0), e, r, i)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            _.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), _.timers = [], _.fx.tick = function() {
            var e, t = 0,
                n = _.timers;
            for (Yb = _.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || _.fx.stop(), Yb = void 0
        }, _.fx.timer = function(e) {
            _.timers.push(e), e() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Zb || (Zb = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Zb), Zb = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(e, t) {
            return e = _.fx ? _.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
        }();
    var dc, ec, fc = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return qb(this, _.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === zb ? _.prop(e, t, n) : (1 === s && _.isXMLDoc(e) || (t = t.toLowerCase(), r = _.attrHooks[t] || (_.expr.match.bool.test(t) ? ec : dc)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = _.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void _.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(nb);
            if (s && 1 === e.nodeType)
                for (; n = s[i++];) r = _.propFix[n] || n, _.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Y.radioValue && "radio" === t && _.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ec = {
        set: function(e, t, n) {
            return t === !1 ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = fc[t] || _.find.attr;
        fc[t] = function(e, t, r) {
            var i, s;
            return r || (s = fc[t], fc[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, fc[t] = s), i
        }
    });
    var gc = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(e, t) {
            return qb(this, _.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !_.isXMLDoc(e), s && (t = _.propFix[t] || t, i = _.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || gc.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hc = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = "string" == typeof e && e,
                a = 0,
                f = this.length;
            if (_.isFunction(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(nb) || []; f > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(hc, " ") : " ")) {
                        for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = _.trim(r), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0 === arguments.length || "string" == typeof e && e,
                a = 0,
                f = this.length;
            if (_.isFunction(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(nb) || []; f > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(hc, " ") : "")) {
                        for (s = 0; i = t[s++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        o = e ? _.trim(r) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(_.isFunction(e) ? function(n) {
                _(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = _(this), s = e.match(nb) || []; t = s[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === zb || "boolean" === n) && (this.className && rb.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rb.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(hc, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ic = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = _.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, _(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : _.isArray(i) && (i = _.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ic, "") : null == n ? "" : n)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : _.trim(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && _.nodeName(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, s = _.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = _.inArray(r.value, s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                return _.isArray(t) ? e.checked = _.inArray(_(e).val(), t) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var jc = _.now(),
        kc = /\?/;
    _.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, _.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + e), t
    };
    var lc, mc, nc = /#.*$/,
        oc = /([?&])_=[^&]*/,
        pc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rc = /^(?:GET|HEAD)$/,
        sc = /^\/\//,
        tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        uc = {},
        vc = {},
        wc = "*/".concat("*");
    try {
        mc = location.href
    } catch (xc) {
        mc = Z.createElement("a"), mc.href = "", mc = mc.href
    }
    lc = tc.exec(mc.toLowerCase()) || [], _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mc,
            type: "GET",
            isLocal: qc.test(lc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, _.ajaxSettings), t) : L(_.ajaxSettings, e)
        },
        ajaxPrefilter: J(uc),
        ajaxTransport: J(vc),
        ajax: function(e, t) {
            function n(e, t, n, o) {
                var a, l, g, y, w, S = t;
                2 !== b && (b = 2, u && clearTimeout(u), r = void 0, s = o || "", E.readyState = e > 0 ? 4 : 0, a = e >= 200 && 300 > e || 304 === e, n && (y = M(c, E, n)), y = N(c, y, E, a), a ? (c.ifModified && (w = E.getResponseHeader("Last-Modified"), w && (_.lastModified[i] = w), w = E.getResponseHeader("etag"), w && (_.etag[i] = w)), 204 === e || "HEAD" === c.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, l = y.data, g = y.error, a = !g)) : (g = S, (e || !S) && (S = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || S) + "", a ? d.resolveWith(h, [l, S, E]) : d.rejectWith(h, [E, S, g]), E.statusCode(m), m = void 0, f && p.trigger(a ? "ajaxSuccess" : "ajaxError", [E, c, a ? l : g]), v.fireWith(h, [E, S]), f && (p.trigger("ajaxComplete", [E, c]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, s, o, u, a, f, l, c = _.ajaxSetup({}, t),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? _(h) : _.event,
                d = _.Deferred(),
                v = _.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!o)
                                for (o = {}; t = pc.exec(s);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, c.url = ((e || c.url || mc) + "").replace(nc, "").replace(sc, lc[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = _.trim(c.dataType || "*").toLowerCase().match(nb) || [""], null == c.crossDomain && (a = tc.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === lc[1] && a[2] === lc[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (lc[3] || ("http:" === lc[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = _.param(c.data, c.traditional)), K(uc, c, t, E), 2 === b) return E;
            f = c.global, f && 0 === _.active++ && _.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !rc.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (kc.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = oc.test(i) ? i.replace(oc, "$1_=" + jc++) : i + (kc.test(i) ? "&" : "?") + "_=" + jc++)), c.ifModified && (_.lastModified[i] && E.setRequestHeader("If-Modified-Since", _.lastModified[i]), _.etag[i] && E.setRequestHeader("If-None-Match", _.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", c.contentType), E.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + wc + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) E.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (c.beforeSend.call(h, E, c) === !1 || 2 === b)) return E.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[l](c[l]);
            if (r = K(vc, c, t, E)) {
                E.readyState = 1, f && p.trigger("ajaxSend", [E, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                    E.abort("timeout")
                }, c.timeout));
                try {
                    b = 1, r.send(g, n)
                } catch (S) {
                    if (!(2 > b)) throw S;
                    n(-1, S)
                }
            } else n(-1, "No Transport");
            return E
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, r, i) {
            return _.isFunction(n) && (i = i || r, r = n, n = void 0), _.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _._evalUrl = function(e) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return _.isFunction(e) ? this.each(function(t) {
                _(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(_.isFunction(e) ? function(t) {
                _(this).wrapInner(e.call(this, t))
            } : function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = _.isFunction(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, _.expr.filters.visible = function(e) {
        return !_.expr.filters.hidden(e)
    };
    var yc = /%20/g,
        zc = /\[\]$/,
        Ac = /\r?\n/g,
        Bc = /^(?:submit|button|image|reset|file)$/i,
        Cc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = _.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) O(n, e[n], t, i);
        return r.join("&").replace(yc, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Cc.test(this.nodeName) && !Bc.test(e) && (this.checked || !yb.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : _.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ac, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ac, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dc = 0,
        Ec = {},
        Fc = {
            0: 200,
            1223: 204
        },
        Gc = _.ajaxSettings.xhr();
    a.ActiveXObject && _(a).on("unload", function() {
        for (var e in Ec) Ec[e]()
    }), Y.cors = !!Gc && "withCredentials" in Gc, Y.ajax = Gc = !!Gc, _.ajaxTransport(function(e) {
        var t;
        return Y.cors || Gc && !e.crossDomain ? {
            send: function(n, r) {
                var i, s = e.xhr(),
                    o = ++Dc;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) s.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Ec[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status, s.statusText) : r(Fc[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = Ec[o] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (u) {
                    if (t) throw u
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = _("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Hc = [],
        Ic = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Hc.pop() || _.expando + "_" + jc++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, s, o = e.jsonp !== !1 && (Ic.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ic.test(e.data) && "data");
        return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = _.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ic, "$1" + r) : e.jsonp !== !1 && (e.url += (kc.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || _.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", i = a[r], a[r] = function() {
            s = arguments
        }, n.always(function() {
            a[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Hc.push(r)), s && _.isFunction(i) && i(s[0]), s = i = void 0
        }), "script") : void 0
    }), _.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Z;
        var r = gb.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = _.buildFragment([e], t, i), i && i.length && _(i).remove(), _.merge([], r.childNodes))
    };
    var Jc = _.fn.load;
    _.fn.load = function(e, t, n) {
        if ("string" != typeof e && Jc) return Jc.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = _.trim(e.slice(u)), e = e.slice(0, u)), _.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && _.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, o.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, s || [e.responseText, t, e])
        }), this
    }, _.expr.filters.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Kc = a.document.documentElement;
    _.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = _.css(e, "position"),
                c = _(e),
                h = {};
            "static" === l && (e.style.position = "relative"), u = c.offset(), s = _.css(e, "top"), a = _.css(e, "left"), f = ("absolute" === l || "fixed" === l) && (s + a).indexOf("auto") > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), _.isFunction(t) && (t = t.call(e, n, u)), null != t.top && (h.top = t.top - u.top + o), null != t.left && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                s = r && r.ownerDocument;
            if (s) return t = s.documentElement, _.contains(t, r) ? (typeof r.getBoundingClientRect !== zb && (i = r.getBoundingClientRect()), n = P(s), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), _.nodeName(e[0], "html") || (r = e.offset()), r.top += _.css(e[0], "borderTopWidth", !0), r.left += _.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - _.css(n, "marginTop", !0),
                    left: t.left - r.left - _.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Kc; e && !_.nodeName(e, "html") && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || Kc
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(r) {
            return qb(this, function(e, r, i) {
                var s = P(e);
                return void 0 === i ? s ? s[t] : e[r] : void(s ? s.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = w(Y.pixelPosition, function(e, n) {
            return n ? (n = v(e, t), Qb.test(n) ? _(e).position()[t] + "px" : n) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            _.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return qb(this, function(t, n, r) {
                    var i;
                    return _.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? _.css(t, n, o) : _.style(t, n, r, o)
                }, t, s ? r : void 0, s, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return _.noConflict = function(e) {
        return a.$ === _ && (a.$ = Mc), e && a.jQuery === _ && (a.jQuery = Lc), _
    }, typeof b === zb && (a.jQuery = a.$ = _), _
});
(function(e, t, n, r) {
    "use strict";

    function i(e) {
        if (typeof e == "string" || e instanceof String) e = e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "");
        return e
    }
    var s = function(t) {
        var n = t.length,
            r = e("head");
        while (n--) r.has("." + t[n]).length === 0 && r.append('<meta class="' + t[n] + '" />')
    };
    s(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), e(function() {
        typeof FastClick != "undefined" && typeof n.body != "undefined" && FastClick.attach(n.body)
    });
    var o = function(t, r) {
            if (typeof t == "string") {
                if (r) {
                    var i;
                    if (r.jquery) {
                        i = r[0];
                        if (!i) return r
                    } else i = r;
                    return e(i.querySelectorAll(t))
                }
                return e(n.querySelectorAll(t))
            }
            return e(t, r)
        },
        u = function(e) {
            var t = [];
            return e || t.push("data"), this.namespace.length > 0 && t.push(this.namespace), t.push(this.name), t.join("-")
        },
        a = function(e) {
            var t = e.split("-"),
                n = t.length,
                r = [];
            while (n--) n !== 0 ? r.push(t[n]) : this.namespace.length > 0 ? r.push(this.namespace, t[n]) : r.push(t[n]);
            return r.reverse().join("-")
        },
        f = function(t, n) {
            var r = this,
                i = !o(this).data(this.attr_name(!0));
            o(this.scope).is("[" + this.attr_name() + "]") ? (o(this.scope).data(this.attr_name(!0) + "-init", e.extend({}, this.settings, n || t, this.data_options(o(this.scope)))), i && this.events(this.scope)) : o("[" + this.attr_name() + "]", this.scope).each(function() {
                var i = !o(this).data(r.attr_name(!0) + "-init");
                o(this).data(r.attr_name(!0) + "-init", e.extend({}, r.settings, n || t, r.data_options(o(this)))), i && r.events(this)
            });
            if (typeof t == "string") return this[t].call(this, n)
        },
        l = function(e, t) {
            function n() {
                t(e[0])
            }

            function r() {
                this.one("load", n);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var e = this.attr("src"),
                        t = e.match(/\?/) ? "&" : "?";
                    t += "random=" + (new Date).getTime(), this.attr("src", e + t)
                }
            }
            if (!e.attr("src")) {
                n();
                return
            }
            e[0].complete || e[0].readyState === 4 ? n() : r.call(e)
        };
    t.matchMedia = t.matchMedia || function(e) {
            var t, n = e.documentElement,
                r = n.firstElementChild || n.firstChild,
                i = e.createElement("body"),
                s = e.createElement("div");
            return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", i.style.background = "none", i.appendChild(s),
                function(e) {
                    return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(i, r), t = s.offsetWidth === 42, n.removeChild(i), {
                        matches: t,
                        media: e
                    }
                }
        }(n),
        function(e) {
            function n() {
                r && (o(n), a && jQuery.fx.tick())
            }
            var r, i = 0,
                s = ["webkit", "moz"],
                o = t.requestAnimationFrame,
                u = t.cancelAnimationFrame,
                a = "undefined" != typeof jQuery.fx;
            for (; i < s.length && !o; i++) o = t[s[i] + "RequestAnimationFrame"], u = u || t[s[i] + "CancelAnimationFrame"] || t[s[i] + "CancelRequestAnimationFrame"];
            o ? (t.requestAnimationFrame = o, t.cancelAnimationFrame = u, a && (jQuery.fx.timer = function(e) {
                e() && jQuery.timers.push(e) && !r && (r = !0, n())
            }, jQuery.fx.stop = function() {
                r = !1
            })) : (t.requestAnimationFrame = function(e) {
                var n = (new Date).getTime(),
                    r = Math.max(0, 16 - (n - i)),
                    s = t.setTimeout(function() {
                        e(n + r)
                    }, r);
                return i = n + r, s
            }, t.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }(jQuery), t.Foundation = {
            name: "Foundation",
            version: "5.4.3",
            media_queries: {
                small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: e("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: r
            },
            init: function(e, n, r, i, s) {
                var u = [e, r, i, s],
                    a = [];
                this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = e || this.scope, this.set_namespace();
                if (n && typeof n == "string" && !/reflow/i.test(n)) this.libs.hasOwnProperty(n) && a.push(this.init_lib(n, u));
                else
                    for (var f in this.libs) a.push(this.init_lib(f, n));
                return o(t).load(function() {
                    o(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                }), e
            },
            init_lib: function(t, n) {
                return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), n && n.hasOwnProperty(t) ? (typeof this.libs[t].settings != "undefined" ? e.extend(!0, this.libs[t].settings, n[t]) : typeof this.libs[t].defaults != "undefined" && e.extend(!0, this.libs[t].defaults, n[t]), this.libs[t].init.apply(this.libs[t], [this.scope, n[t]])) : (n = n instanceof Array ? n : new Array(n), this.libs[t].init.apply(this.libs[t], n))) : function() {}
            },
            patch: function(e) {
                e.scope = this.scope, e.namespace = this.global.namespace, e.rtl = this.rtl, e.data_options = this.utils.data_options, e.attr_name = u, e.add_namespace = a, e.bindings = f, e.S = this.utils.S
            },
            inherit: function(e, t) {
                var n = t.split(" "),
                    r = n.length;
                while (r--) this.utils.hasOwnProperty(n[r]) && (e[n[r]] = this.utils[n[r]])
            },
            set_namespace: function() {
                var t = this.global.namespace === r ? e(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = t === r || /false/i.test(t) ? "" : t
            },
            libs: {},
            utils: {
                S: o,
                throttle: function(e, t) {
                    var n = null;
                    return function() {
                        var r = this,
                            i = arguments;
                        n == null && (n = setTimeout(function() {
                            e.apply(r, i), n = null
                        }, t))
                    }
                },
                debounce: function(e, t, n) {
                    var r, i;
                    return function() {
                        var s = this,
                            o = arguments,
                            u = function() {
                                r = null, n || (i = e.apply(s, o))
                            },
                            a = n && !r;
                        return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                    }
                },
                data_options: function(t, n) {
                    function r(e) {
                        return !isNaN(e - 0) && e !== null && e !== "" && e !== !1 && e !== !0
                    }

                    function i(t) {
                        return typeof t == "string" ? e.trim(t) : t
                    }
                    n = n || "options";
                    var s = {},
                        o, u, a, f = function(e) {
                            var t = Foundation.global.namespace;
                            return t.length > 0 ? e.data(t + "-" + n) : e.data(n)
                        },
                        l = f(t);
                    if (typeof l == "object") return l;
                    a = (l || ":").split(";"), o = a.length;
                    while (o--) u = a[o].split(":"), u = [u[0], u.slice(1).join(":")], /true/i.test(u[1]) && (u[1] = !0), /false/i.test(u[1]) && (u[1] = !1), r(u[1]) && (u[1].indexOf(".") === -1 ? u[1] = parseInt(u[1], 10) : u[1] = parseFloat(u[1])), u.length === 2 && u[0].length > 0 && (s[i(u[0])] = i(u[1]));
                    return s
                },
                register_media: function(t, n) {
                    Foundation.media_queries[t] === r && (e("head").append('<meta class="' + n + '"/>'), Foundation.media_queries[t] = i(e("." + n).css("font-family")))
                },
                add_custom_rule: function(e, t) {
                    if (t === r && Foundation.stylesheet) Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length);
                    else {
                        var n = Foundation.media_queries[t];
                        n !== r && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[t] + "{ " + e + " }")
                    }
                },
                image_loaded: function(e, t) {
                    var n = this,
                        r = e.length;
                    r === 0 && t(e), e.each(function() {
                        l(n.S(this), function() {
                            r -= 1, r === 0 && t(e)
                        })
                    })
                },
                random_str: function() {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+(new Date)).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                }
            }
        }, e.fn.foundation = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                return Foundation.init.apply(Foundation, [this].concat(e)), this
            })
        }
})(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.4.3",
        settings: {
            live_validate: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(e, t, r) {
                    var i = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                        s = e.value,
                        o = i === s;
                    return o
                }
            }
        },
        timer: null,
        init: function(e, t, n) {
            this.bindings(t, n)
        },
        events: function(t) {
            var n = this,
                r = n.S(t).attr("novalidate", "novalidate"),
                i = r.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(e) {
                var t = /ajax/i.test(n.S(this).attr(n.attr_name()));
                return n.validate(n.S(this).find("input, textarea, select").get(), e, t)
            }).on("reset", function() {
                return n.reset(e(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(e) {
                n.validate([this], e)
            }).on("keydown.fndtn.abide", function(e) {
                i.live_validate === !0 && (clearTimeout(n.timer), n.timer = setTimeout(function() {
                    n.validate([this], e)
                }.bind(this), i.timeout))
            })
        },
        reset: function(t) {
            t.removeAttr(this.invalid_attr), e(this.invalid_attr, t).removeAttr(this.invalid_attr), e(".error", t).not("small").removeClass("error")
        },
        validate: function(e, t, n) {
            var r = this.parse_patterns(e),
                i = r.length,
                s = this.S(e[0]).closest("form"),
                o = /submit/.test(t.type);
            for (var u = 0; u < i; u++)
                if (!r[u] && (o || n)) return this.settings.focus_on_invalid && e[u].focus(), s.trigger("invalid"), this.S(e[u]).closest("form").attr(this.invalid_attr, ""), !1;
            return (o || n) && s.trigger("valid"), s.removeAttr(this.invalid_attr), n ? !1 : !0
        },
        parse_patterns: function(e) {
            var t = e.length,
                n = [];
            while (t--) n.push(this.pattern(e[t]));
            return this.check_validation_and_apply_styles(n)
        },
        pattern: function(e) {
            var t = e.getAttribute("type"),
                n = typeof e.getAttribute("required") == "string",
                r = e.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(r) && r.length > 0 ? [e, this.settings.patterns[r], n] : r.length > 0 ? [e, new RegExp(r), n] : this.settings.patterns.hasOwnProperty(t) ? [e, this.settings.patterns[t], n] : (r = /.*/, [e, r, n])
        },
        check_validation_and_apply_styles: function(t) {
            var n = t.length,
                r = [],
                i = this.S(t[0][0]).closest("[data-" + this.attr_name(!0) + "]"),
                s = i.data(this.attr_name(!0) + "-init") || {};
            while (n--) {
                var o = t[n][0],
                    u = t[n][2],
                    a = o.value.trim(),
                    f = this.S(o).parent(),
                    l = o.getAttribute(this.add_namespace("data-abide-validator")),
                    c = o.type === "radio",
                    h = o.type === "checkbox",
                    p = this.S('label[for="' + o.getAttribute("id") + '"]'),
                    d = u ? o.value.length > 0 : !0,
                    v = [],
                    m, g;
                o.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f.is("label") ? m = f.parent() : m = f, l && (g = this.settings.validators[l].apply(this, [o, u, m]), v.push(g));
                if (c && u) v.push(this.valid_radio(o, u));
                else if (h && u) v.push(this.valid_checkbox(o, u));
                else {
                    t[n][1].test(a) && d || !u && o.value.length < 1 || e(o).attr("disabled") ? v.push(!0) : v.push(!1), v = [v.every(function(e) {
                        return e
                    })];
                    if (v[0]) this.S(o).removeAttr(this.invalid_attr), o.setAttribute("aria-invalid", "false"), o.removeAttribute("aria-describedby"), m.removeClass("error"), p.length > 0 && this.settings.error_labels && p.removeClass("error").removeAttr("role"), e(o).triggerHandler("valid");
                    else {
                        this.S(o).attr(this.invalid_attr, ""), o.setAttribute("aria-invalid", "true");
                        var y = m.find("small.error, span.error"),
                            b = y.length > 0 ? y[0].id : "";
                        b.length > 0 && o.setAttribute("aria-describedby", b), m.addClass("error"), p.length > 0 && this.settings.error_labels && p.addClass("error").attr("role", "alert"), e(o).triggerHandler("invalid")
                    }
                    r.push(v[0])
                }
            }
            return r = [r.every(function(e) {
                return e
            })], r
        },
        valid_checkbox: function(e, t) {
            var e = this.S(e),
                n = e.is(":checked") || !t;
            return n ? e.removeAttr(this.invalid_attr).parent().removeClass("error") : e.attr(this.invalid_attr, "").parent().addClass("error"), n
        },
        valid_radio: function(e, t) {
            var n = e.getAttribute("name"),
                r = this.S(e).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + n + "']"),
                i = r.length,
                s = !1;
            for (var o = 0; o < i; o++) r[o].checked && (s = !0);
            for (var o = 0; o < i; o++) s ? this.S(r[o]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(r[o]).attr(this.invalid_attr, "").parent().addClass("error");
            return s
        },
        valid_equal: function(e, t, r) {
            var i = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                s = e.value,
                o = i === s;
            return o ? (this.S(e).removeAttr(this.invalid_attr), r.removeClass("error"), label.length > 0 && settings.error_labels && label.removeClass("error")) : (this.S(e).attr(this.invalid_attr, ""), r.addClass("error"), label.length > 0 && settings.error_labels && label.addClass("error")), o
        },
        valid_oneof: function(e, t, n, r) {
            var e = this.S(e),
                i = this.S("[" + this.add_namespace("data-oneof") + "]"),
                s = i.filter(":checked").length > 0;
            s ? e.removeAttr(this.invalid_attr).parent().removeClass("error") : e.attr(this.invalid_attr, "").parent().addClass("error");
            if (!r) {
                var o = this;
                i.each(function() {
                    o.valid_oneof.call(o, this, null, null, !0)
                })
            }
            return s
        }
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.4.3",
        settings: {
            use_tallest: !0,
            before_height_change: e.noop,
            after_height_change: e.noop,
            equalize_on_stack: !1
        },
        init: function(e, t, n) {
            Foundation.inherit(this, "image_loaded"), this.bindings(t, n), this.reflow()
        },
        events: function() {
            this.S(t).off(".equalizer").on("resize.fndtn.equalizer", function(e) {
                this.reflow()
            }.bind(this))
        },
        equalize: function(t) {
            var n = !1,
                r = t.find("[" + this.attr_name() + "-watch]:visible"),
                i = t.data(this.attr_name(!0) + "-init");
            if (r.length === 0) return;
            var s = r.first().offset().top;
            i.before_height_change(), t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), r.height("inherit"), r.each(function() {
                var t = e(this);
                t.offset().top !== s && (n = !0)
            });
            if (i.equalize_on_stack === !1 && n) return;
            var o = r.map(function() {
                return e(this).outerHeight(!1)
            }).get();
            if (i.use_tallest) {
                var u = Math.max.apply(null, o);
                r.css("height", u)
            } else {
                var a = Math.min.apply(null, o);
                r.css("height", a)
            }
            i.after_height_change(), t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
        },
        reflow: function() {
            var t = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var n = e(this);
                t.image_loaded(t.S("img", this), function() {
                    t.equalize(n)
                })
            })
        }
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.4.3",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(t, n, r) {
                    if (/IMG/.test(t[0].nodeName)) {
                        var i = t[0].src;
                        if ((new RegExp(n, "i")).test(i)) return;
                        return t[0].src = n, r(t[0].src)
                    }
                    var s = t.data(this.data_attr + "-last-path"),
                        o = this;
                    if (s == n) return;
                    return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n) ? (e(t).css("background-image", "url(" + n + ")"), t.data("interchange-last-path", n), r(n)) : e.get(n, function(e) {
                        t.html(e), t.data(o.data_attr + "-last-path", n), r()
                    })
                }
            }
        },
        init: function(t, n, r) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), e.extend(!0, this.settings, n, r), this.bindings(n, r), this.load("images"), this.load("nodes")
        },
        get_media_hash: function() {
            var e = "";
            for (var t in this.settings.named_queries) e += matchMedia(this.settings.named_queries[t]).matches.toString();
            return e
        },
        events: function() {
            var n = this,
                r;
            return e(t).off(".interchange").on("resize.fndtn.interchange", n.throttle(function() {
                var e = n.get_media_hash();
                e !== r && n.resize(), r = e
            }, 50)), this
        },
        resize: function() {
            var t = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) {
                setTimeout(e.proxy(this.resize, this), 50);
                return
            }
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var r = this.results(n, t[n]);
                    r && this.settings.directives[r.scenario[1]].call(this, r.el, r.scenario[0], function() {
                        if (arguments[0] instanceof Array) var e = arguments[0];
                        else var e = Array.prototype.slice.call(arguments, 0);
                        r.el.trigger(r.scenario[1], e)
                    })
                }
        },
        results: function(e, t) {
            var n = t.length;
            if (n > 0) {
                var r = this.S("[" + this.add_namespace("data-uuid") + '="' + e + '"]');
                while (n--) {
                    var i, s = t[n][2];
                    this.settings.named_queries.hasOwnProperty(s) ? i = matchMedia(this.settings.named_queries[s]) : i = matchMedia(s);
                    if (i.matches) return {
                        el: r,
                        scenario: t[n]
                    }
                }
            }
            return !1
        },
        load: function(e, t) {
            return (typeof this["cached_" + e] == "undefined" || t) && this["update_" + e](), this["cached_" + e]
        },
        update_images: function() {
            var e = this.S("img[" + this.data_attr + "]"),
                t = e.length,
                n = t,
                r = 0,
                i = this.data_attr;
            this.cache = {}, this.cached_images = [], this.images_loaded = t === 0;
            while (n--) {
                r++;
                if (e[n]) {
                    var s = e[n].getAttribute(i) || "";
                    s.length > 0 && this.cached_images.push(e[n])
                }
                r === t && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var e = this.S("[" + this.data_attr + "]").not("img"),
                t = e.length,
                n = t,
                r = 0,
                i = this.data_attr;
            this.cached_nodes = [], this.nodes_loaded = t === 0;
            while (n--) {
                r++;
                var s = e[n].getAttribute(i) || "";
                s.length > 0 && this.cached_nodes.push(e[n]), r === t && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(n) {
            var r = this["cached_" + n].length;
            while (r--) this.object(e(this["cached_" + n][r]));
            return e(t).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function(e) {
            var t = this.trim(e);
            return t.length > 0 ? t : "replace"
        },
        parse_scenario: function(e) {
            var t = e[0].match(/(.+),\s*(\w+)\s*$/),
                n = e[1];
            if (t) var r = t[1],
                i = t[2];
            else var s = e[0].split(/,\s*$/),
                r = s[0],
                i = "";
            return [this.trim(r), this.convert_directive(i), this.trim(n)]
        },
        object: function(e) {
            var t = this.parse_data_attr(e),
                n = [],
                r = t.length;
            if (r > 0)
                while (r--) {
                    var i = t[r].split(/\((.*?)(\))$/);
                    if (i.length > 1) {
                        var s = this.parse_scenario(i);
                        n.push(s)
                    }
                }
            return this.store(e, n)
        },
        store: function(e, t) {
            var n = this.random_str(),
                r = e.data(this.add_namespace("uuid", !0));
            return this.cache[r] ? this.cache[r] : (e.attr(this.add_namespace("data-uuid"), n), this.cache[n] = t)
        },
        trim: function(t) {
            return typeof t == "string" ? e.trim(t) : t
        },
        set_data_attr: function(e) {
            return e ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(e) {
            var t = e.attr(this.attr_name()).split(/\[(.*?)\]/),
                n = t.length,
                r = [];
            while (n--) t[n].replace(/[\W\d]+/, "").length > 4 && r.push(t[n]);
            return r
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.4.3",
        settings: {
            active_class: "open",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            opened: function() {},
            closed: function() {}
        },
        init: function(e, t, n) {
            Foundation.inherit(this, "throttle"), this.bindings(t, n)
        },
        events: function(n) {
            var r = this,
                i = r.S;
            i(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(t) {
                var n = i(this).data(r.attr_name(!0) + "-init") || r.settings;
                if (!n.is_hover || Modernizr.touch) t.preventDefault(), r.toggle(e(this))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(e) {
                var t = i(this),
                    n, s;
                clearTimeout(r.timeout), t.data(r.data_attr()) ? (n = i("#" + t.data(r.data_attr())), s = t) : (n = t, s = i("[" + r.attr_name() + "='" + n.attr("id") + "']"));
                var o = s.data(r.attr_name(!0) + "-init") || r.settings;
                i(e.target).data(r.data_attr()) && o.is_hover && r.closeall.call(r), o.is_hover && r.open.apply(r, [n, s])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(e) {
                var t = i(this);
                r.timeout = setTimeout(function() {
                    if (t.data(r.data_attr())) {
                        var e = t.data(r.data_attr(!0) + "-init") || r.settings;
                        e.is_hover && r.close.call(r, i("#" + t.data(r.data_attr())))
                    } else {
                        var n = i("[" + r.attr_name() + '="' + i(this).attr("id") + '"]'),
                            e = n.data(r.attr_name(!0) + "-init") || r.settings;
                        e.is_hover && r.close.call(r, t)
                    }
                }.bind(this), 150)
            }).on("click.fndtn.dropdown", function(t) {
                var n = i(t.target).closest("[" + r.attr_name() + "-content]");
                if (i(t.target).closest("[" + r.attr_name() + "]").length > 0) return;
                if (!i(t.target).data("revealId") && n.length > 0 && (i(t.target).is("[" + r.attr_name() + "-content]") || e.contains(n.first()[0], t.target))) {
                    t.stopPropagation();
                    return
                }
                r.close.call(r, i("[" + r.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + r.attr_name() + "-content]", function() {
                r.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + r.attr_name() + "-content]", function() {
                r.settings.closed.call(this)
            }), i(t).off(".dropdown").on("resize.fndtn.dropdown", r.throttle(function() {
                r.resize.call(r)
            }, 50)), this.resize()
        },
        close: function(t) {
            var n = this;
            t.each(function() {
                var r = e("[" + n.attr_name() + "=" + t[0].id + "]") || e("aria-controls=" + t[0].id + "]");
                r.attr("aria-expanded", "false"), n.S(this).hasClass(n.settings.active_class) && (n.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(n.settings.active_class).prev("[" + n.attr_name() + "]").removeClass(n.settings.active_class).removeData("target"), n.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [t]))
            })
        },
        closeall: function() {
            var t = this;
            e.each(t.S("[" + this.attr_name() + "-content]"), function() {
                t.close.call(t, t.S(this))
            })
        },
        open: function(e, t) {
            this.css(e.addClass(this.settings.active_class), t), e.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), e.data("target", t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [e, t]), e.attr("aria-hidden", "false"), t.attr("aria-expanded", "true"), e.focus()
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(e) {
            var t = this.S("#" + e.data(this.data_attr()));
            if (t.length === 0) return;
            this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(t)), t.hasClass(this.settings.active_class) ? (this.close.call(this, t), t.data("target") !== e.get(0) && this.open.call(this, t, e)) : this.open.call(this, t, e)
        },
        resize: function() {
            var e = this.S("[" + this.attr_name() + "-content].open"),
                t = this.S("[" + this.attr_name() + "='" + e.attr("id") + "']");
            e.length && t.length && this.css(e, t)
        },
        css: function(e, t) {
            var n = Math.max((t.width() - e.width()) / 2, 8),
                r = t.data(this.attr_name(!0) + "-init") || this.settings;
            this.clear_idx();
            if (this.small()) {
                var i = this.dirs.bottom.call(e, t, r);
                e.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: i.top
                }), e.css(Foundation.rtl ? "right" : "left", n)
            } else this.style(e, t, r);
            return e
        },
        style: function(t, n, r) {
            var i = e.extend({
                position: "absolute"
            }, this.dirs[r.align].call(t, n, r));
            t.attr("style", "").css(i)
        },
        dirs: {
            _base: function(e) {
                var t = this.offsetParent(),
                    n = t.offset(),
                    r = e.offset();
                return r.top -= n.top, r.left -= n.left, r
            },
            top: function(e, t) {
                var n = Foundation.libs.dropdown,
                    r = n.dirs._base.call(this, e);
                return this.addClass("drop-top"), (e.outerWidth() < this.outerWidth() || n.small() || this.hasClass(t.mega_menu)) && n.adjust_pip(this, e, t, r), Foundation.rtl ? {
                    left: r.left - this.outerWidth() + e.outerWidth(),
                    top: r.top - this.outerHeight()
                } : {
                    left: r.left,
                    top: r.top - this.outerHeight()
                }
            },
            bottom: function(e, t) {
                var n = Foundation.libs.dropdown,
                    r = n.dirs._base.call(this, e);
                return (e.outerWidth() < this.outerWidth() || n.small() || this.hasClass(t.mega_menu)) && n.adjust_pip(this, e, t, r), n.rtl ? {
                    left: r.left - this.outerWidth() + e.outerWidth(),
                    top: r.top + e.outerHeight()
                } : {
                    left: r.left,
                    top: r.top + e.outerHeight()
                }
            },
            left: function(e, t) {
                var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                return this.addClass("drop-left"), {
                    left: n.left - this.outerWidth(),
                    top: n.top
                }
            },
            right: function(e, t) {
                var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                return this.addClass("drop-right"), {
                    left: n.left + e.outerWidth(),
                    top: n.top
                }
            }
        },
        adjust_pip: function(e, t, n, r) {
            var i = Foundation.stylesheet,
                s = 8;
            e.hasClass(n.mega_class) ? s = r.left + t.outerWidth() / 2 - 8 : this.small() && (s += r.left - 8), this.rule_idx = i.cssRules.length;
            var o = ".f-dropdown.open:before",
                u = ".f-dropdown.open:after",
                a = "left: " + s + "px;",
                f = "left: " + (s - 1) + "px;";
            i.insertRule ? (i.insertRule([o, "{", a, "}"].join(" "), this.rule_idx), i.insertRule([u, "{", f, "}"].join(" "), this.rule_idx + 1)) : (i.addRule(o, a, this.rule_idx), i.addRule(u, f, this.rule_idx + 1))
        },
        clear_idx: function() {
            var e = Foundation.stylesheet;
            this.rule_idx && (e.deleteRule(this.rule_idx), e.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(t).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.4.3",
        settings: {
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(e, t, n) {
            this.bindings(t, n)
        },
        events: function() {
            var t = this,
                n = this.S;
            n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(r) {
                var i = n(this).closest("[" + t.attr_name() + "]"),
                    s = t.attr_name() + "=" + i.attr(t.attr_name()),
                    o = i.data(t.attr_name(!0) + "-init"),
                    u = n("#" + this.href.split("#")[1]),
                    a = e("> dd", i),
                    f = a.children(".content"),
                    l = f.filter("." + o.active_class);
                r.preventDefault(), i.attr(t.attr_name()) && (f = f.add("[" + s + "] dd > .content"), a = a.add("[" + s + "] dd"));
                if (o.toggleable && u.is(l)) {
                    u.parent("dd").toggleClass(o.active_class, !1), u.toggleClass(o.active_class, !1), o.callback(u), u.triggerHandler("toggled", [i]), i.triggerHandler("toggled", [u]);
                    return
                }
                o.multi_expand || (f.removeClass(o.active_class), a.removeClass(o.active_class)), u.addClass(o.active_class).parent().addClass(o.active_class), o.callback(u), u.triggerHandler("toggled", [i]), i.triggerHandler("toggled", [u])
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.4.3",
        settings: {
            callback: function() {}
        },
        init: function(e, t, n) {
            this.bindings(t, n)
        },
        events: function() {
            var t = this,
                n = this.S;
            e(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(e) {
                var r = n(this).closest("[" + t.attr_name() + "]"),
                    i = r.data(t.attr_name(!0) + "-init") || t.settings;
                e.preventDefault(), Modernizr.csstransitions ? (r.addClass("alert-close"), r.on("transitionend webkitTransitionEnd oTransitionEnd", function(e) {
                    n(this).trigger("close").trigger("close.fndtn.alert").remove(), i.callback()
                })) : r.fadeOut(300, function() {
                    n(this).trigger("close").trigger("close.fndtn.alert").remove(), i.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.4.3",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(e, t, n) {
            var r = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(t, n), r.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(r.S("li", this.scope)) : r.S("[" + this.attr_name() + "]", this.scope).each(function() {
                r.assemble(r.S("li", this))
            })
        },
        events: function(r) {
            var i = this,
                s = i.S,
                o = e(".scroll-container");
            o.length > 0 && (this.scope = o), s(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(e, t, n) {
                var t = t || s(this),
                    n = n || t,
                    r = t.next("li"),
                    o = t.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init"),
                    u = s(e.target);
                e.preventDefault(), o || (i.init(), o = t.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init")), n.hasClass("visible") && t[0] === n[0] && r.length > 0 && i.is_open(t) && (n = r, u = s("img", n)), i.open(u, t, n), i.update_paddles(n)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(e) {
                i.nav(e, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(e) {
                i.nav(e, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(e) {
                Foundation.libs.clearing.close(e, this)
            }), e(n).on("keydown.fndtn.clearing", function(e) {
                i.keydown(e)
            }), s(t).off(".clearing").on("resize.fndtn.clearing", function() {
                i.resize()
            }), this.swipe_events(r)
        },
        swipe_events: function(e) {
            var t = this,
                n = t.S;
            n(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(e) {
                e.touches || (e = e.originalEvent);
                var t = {
                    start_page_x: e.touches[0].pageX,
                    start_page_y: e.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: r
                };
                n(this).data("swipe-transition", t), e.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(e) {
                e.touches || (e = e.originalEvent);
                if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
                var r = n(this).data("swipe-transition");
                typeof r == "undefined" && (r = {}), r.delta_x = e.touches[0].pageX - r.start_page_x, Foundation.rtl && (r.delta_x = -r.delta_x), typeof r.is_scrolling == "undefined" && (r.is_scrolling = !!(r.is_scrolling || Math.abs(r.delta_x) < Math.abs(e.touches[0].pageY - r.start_page_y)));
                if (!r.is_scrolling && !r.active) {
                    e.preventDefault();
                    var i = r.delta_x < 0 ? "next" : "prev";
                    r.active = !0, t.nav(e, i)
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(e) {
                n(this).data("swipe-transition", {}), e.stopPropagation()
            })
        },
        assemble: function(t) {
            var n = t.parent();
            if (n.parent().hasClass("carousel")) return;
            n.after('<div id="foundationClearingHolder"></div>');
            var r = n.detach(),
                i = "";
            if (r[0] == null) return;
            i = r[0].outerHTML;
            var s = this.S("#foundationClearingHolder"),
                o = n.data(this.attr_name(!0) + "-init"),
                u = {
                    grid: '<div class="carousel">' + i + "</div>",
                    viewing: o.templates.viewing
                },
                a = '<div class="clearing-assembled"><div>' + u.viewing + u.grid + "</div></div>",
                f = this.settings.touch_label;
            Modernizr.touch && (a = e(a).find(".clearing-touch-label").html(f).end()), s.after(a).remove()
        },
        open: function(t, r, i) {
            function s() {
                setTimeout(function() {
                    this.image_loaded(h, function() {
                        h.outerWidth() === 1 && !d ? s.call(this) : o.call(this, h)
                    }.bind(this))
                }.bind(this), 100)
            }

            function o(t) {
                var n = e(t);
                n.css("visibility", "visible"), a.css("overflow", "hidden"), f.addClass("clearing-blackout"), l.addClass("clearing-container"), c.show(), this.fix_height(i).caption(u.S(".clearing-caption", c), u.S("img", i)).center_and_label(t, p).shift(r, i, function() {
                    i.closest("li").siblings().removeClass("visible"), i.closest("li").addClass("visible")
                }), c.trigger("opened.fndtn.clearing")
            }
            var u = this,
                a = e(n.body),
                f = i.closest(".clearing-assembled"),
                l = u.S("div", f).first(),
                c = u.S(".visible-img", l),
                h = u.S("img", c).not(t),
                p = u.S(".clearing-touch-label", l),
                d = !1;
            e("body").on("touchmove", function(e) {
                e.preventDefault()
            }), h.error(function() {
                d = !0
            }), this.locked() || (c.trigger("open.fndtn.clearing"), h.attr("src", this.load(t)).css("visibility", "hidden"), s.call(this))
        },
        close: function(t, r) {
            t.preventDefault();
            var i = function(e) {
                    return /blackout/.test(e.selector) ? e : e.closest(".clearing-blackout")
                }(e(r)),
                s = e(n.body),
                o, u;
            return r === t.target && i && (s.css("overflow", ""), o = e("div", i).first(), u = e(".visible-img", o), u.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, e("ul[" + this.attr_name() + "]", i).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), o.removeClass("clearing-container"), u.hide(), u.trigger("closed.fndtn.clearing")), e("body").off("touchmove"), !1
        },
        is_open: function(e) {
            return e.parent().prop("style").length > 0
        },
        keydown: function(t) {
            var n = e(".clearing-blackout ul[" + this.attr_name() + "]"),
                r = this.rtl ? 37 : 39,
                i = this.rtl ? 39 : 37,
                s = 27;
            t.which === r && this.go(n, "next"), t.which === i && this.go(n, "prev"), t.which === s && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        },
        nav: function(t, n) {
            var r = e("ul[" + this.attr_name() + "]", ".clearing-blackout");
            t.preventDefault(), this.go(r, n)
        },
        resize: function() {
            var t = e("img", ".clearing-blackout .visible-img"),
                n = e(".clearing-touch-label", ".clearing-blackout");
            t.length && (this.center_and_label(t, n), t.trigger("resized.fndtn.clearing"))
        },
        fix_height: function(e) {
            var t = e.parent().children(),
                n = this;
            return t.each(function() {
                var e = n.S(this),
                    t = e.find("img");
                e.height() > t.outerHeight() && e.addClass("fix-height")
            }).closest("ul").width(t.length * 100 + "%"), this
        },
        update_paddles: function(e) {
            e = e.closest("li");
            var t = e.closest(".carousel").siblings(".visible-img");
            e.next().length > 0 ? this.S(".clearing-main-next", t).removeClass("disabled") : this.S(".clearing-main-next", t).addClass("disabled"), e.prev().length > 0 ? this.S(".clearing-main-prev", t).removeClass("disabled") : this.S(".clearing-main-prev", t).addClass("disabled")
        },
        center_and_label: function(e, t) {
            return this.rtl ? (e.css({
                marginRight: -(e.outerWidth() / 2),
                marginTop: -(e.outerHeight() / 2),
                left: "auto",
                right: "50%"
            }), t.length > 0 && t.css({
                marginRight: -(t.outerWidth() / 2),
                marginTop: -(e.outerHeight() / 2) - t.outerHeight() - 10,
                left: "auto",
                right: "50%"
            })) : (e.css({
                marginLeft: -(e.outerWidth() / 2),
                marginTop: -(e.outerHeight() / 2)
            }), t.length > 0 && t.css({
                marginLeft: -(t.outerWidth() / 2),
                marginTop: -(e.outerHeight() / 2) - t.outerHeight() - 10
            })), this
        },
        load: function(e) {
            var t;
            return e[0].nodeName === "A" ? t = e.attr("href") : t = e.parent().attr("href"), this.preload(e), t ? t : e.attr("src")
        },
        preload: function(e) {
            this.img(e.closest("li").next()).img(e.closest("li").prev())
        },
        img: function(e) {
            if (e.length) {
                var t = new Image,
                    n = this.S("a", e);
                n.length ? t.src = n.attr("href") : t.src = this.S("img", e).attr("src")
            }
            return this
        },
        caption: function(e, t) {
            var n = t.attr("data-caption");
            return n ? e.html(n).show() : e.text("").hide(), this
        },
        go: function(e, t) {
            var n = this.S(".visible", e),
                r = n[t]();
            this.settings.skip_selector && r.find(this.settings.skip_selector).length != 0 && (r = r[t]()), r.length && this.S("img", r).trigger("click", [n, r]).trigger("click.fndtn.clearing", [n, r]).trigger("change.fndtn.clearing")
        },
        shift: function(e, t, n) {
            var r = t.parent(),
                i = this.settings.prev_index || t.index(),
                s = this.direction(r, e, t),
                o = this.rtl ? "right" : "left",
                u = parseInt(r.css("left"), 10),
                a = t.outerWidth(),
                f, l = {};
            t.index() !== i && !/skip/.test(s) ? /left/.test(s) ? (this.lock(), l[o] = u + a, r.animate(l, 300, this.unlock())) : /right/.test(s) && (this.lock(), l[o] = u - a, r.animate(l, 300, this.unlock())) : /skip/.test(s) && (f = t.index() - this.settings.up_count, this.lock(), f > 0 ? (l[o] = -(f * a), r.animate(l, 300, this.unlock())) : (l[o] = 0, r.animate(l, 300, this.unlock()))), n()
        },
        direction: function(e, t, n) {
            var r = this.S("li", e),
                i = r.outerWidth() + r.outerWidth() / 4,
                s = Math.floor(this.S(".clearing-container").outerWidth() / i) - 1,
                o = r.index(n),
                u;
            return this.settings.up_count = s, this.adjacent(this.settings.prev_index, o) ? o > s && o > this.settings.prev_index ? u = "right" : o > s - 1 && o <= this.settings.prev_index ? u = "left" : u = !1 : u = "skip", this.settings.prev_index = o, u
        },
        adjacent: function(e, t) {
            for (var n = t + 1; n >= t - 1; n--)
                if (n === e) return !0;
            return !1
        },
        lock: function() {
            this.settings.locked = !0
        },
        unlock: function() {
            this.settings.locked = !1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(t).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, window, window.document), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function r(e) {
        return t(u.json ? JSON.stringify(e) : String(e))
    }

    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(o, " ")), u.json ? JSON.parse(e) : e
        } catch (t) {}
    }

    function s(t, n) {
        var r = u.raw ? t : i(t);
        return e.isFunction(n) ? n(r) : r
    }
    var o = /\+/g,
        u = e.cookie = function(i, o, a) {
            if (void 0 !== o && !e.isFunction(o)) {
                if (a = e.extend({}, u.defaults, a), "number" == typeof a.expires) {
                    var f = a.expires,
                        l = a.expires = new Date;
                    l.setTime(+l + 864e5 * f)
                }
                return document.cookie = [t(i), "=", r(o), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            for (var c = i ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, d = h.length; d > p; p++) {
                var v = h[p].split("="),
                    m = n(v.shift()),
                    g = v.join("=");
                if (i && i === m) {
                    c = s(g, o);
                    break
                }
                i || void 0 === (g = s(g)) || (c[m] = g)
            }
            return c
        };
    u.defaults = {}, e.removeCookie = function(t, n) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })), !e.cookie(t))
    }
}),
function(e, t, n, r) {
    "use strict";
    var i = i || !1;
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.4.3",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(t, n, r) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || e.extend({}, this.defaults, r || n), this.bindings(n, r)
        },
        go_next: function() {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        },
        go_prev: function() {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
        },
        events: function() {
            var n = this;
            e(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(e) {
                e.preventDefault(), this.go_next()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(e) {
                e.preventDefault(), this.go_prev()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(e) {
                e.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)).on("keyup.joyride", function(e) {
                if (!this.settings.keyboard) return;
                switch (e.which) {
                    case 39:
                        e.preventDefault(), this.go_next();
                        break;
                    case 37:
                        e.preventDefault(), this.go_prev();
                        break;
                    case 27:
                        e.preventDefault(), this.end(this.settings.abort_on_close)
                }
            }.bind(this)), e(t).off(".joyride").on("resize.fndtn.joyride", n.throttle(function() {
                if (e("[" + n.attr_name() + "]").length > 0 && n.settings.$next_tip && n.settings.riding) {
                    if (n.settings.exposed.length > 0) {
                        var t = e(n.settings.exposed);
                        t.each(function() {
                            var t = e(this);
                            n.un_expose(t), n.expose(t)
                        })
                    }
                    n.is_phone() ? n.pos_phone() : n.pos_default(!1)
                }
            }, 100))
        },
        start: function() {
            var t = this,
                n = e("[" + this.attr_name() + "]", this.scope),
                r = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                i = r.length;
            if (!n.length > 0) return;
            this.settings.init || this.events(), this.settings = n.data(this.attr_name(!0) + "-init"), this.settings.$content_el = n, this.settings.$body = e(this.settings.tip_container), this.settings.body_offset = e(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, typeof e.cookie != "function" && (this.settings.cookie_monster = !1);
            if (!this.settings.cookie_monster || this.settings.cookie_monster && !e.cookie(this.settings.cookie_name)) this.settings.$tip_content.each(function(n) {
                var s = e(this);
                this.settings = e.extend({}, t.defaults, t.data_options(s));
                var o = i;
                while (o--) t.settings[r[o]] = parseInt(t.settings[r[o]], 10);
                t.create({
                    $li: s,
                    index: n
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")
        },
        resume: function() {
            this.set_li(), this.show()
        },
        tip_template: function(t) {
            var n, r;
            return t.tip_class = t.tip_class || "", n = e(this.settings.template.tip).addClass(t.tip_class), r = e.trim(e(t.li).html()) + this.prev_button_text(t.prev_button_text, t.index) + this.button_text(t.button_text) + this.settings.template.link + this.timer_instance(t.index), n.append(e(this.settings.template.wrapper)), n.first().attr(this.add_namespace("data-index"), t.index), e(".joyride-content-wrapper", n).append(r), n[0]
        },
        timer_instance: function(t) {
            var n;
            return t === 0 && this.settings.start_timer_on_click && this.settings.timer > 0 || this.settings.timer === 0 ? n = "" : n = e(this.settings.template.timer)[0].outerHTML, n
        },
        button_text: function(t) {
            return this.settings.tip_settings.next_button ? (t = e.trim(t) || "Next", t = e(this.settings.template.button).append(t)[0].outerHTML) : t = "", t
        },
        prev_button_text: function(t, n) {
            return this.settings.tip_settings.prev_button ? (t = e.trim(t) || "Previous", n == 0 ? t = e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML : t = e(this.settings.template.prev_button).append(t)[0].outerHTML) : t = "", t
        },
        create: function(t) {
            this.settings.tip_settings = e.extend({}, this.settings, this.data_options(t.$li));
            var n = t.$li.attr(this.add_namespace("data-button")) || t.$li.attr(this.add_namespace("data-text")),
                r = t.$li.attr(this.add_namespace("data-button-prev")) || t.$li.attr(this.add_namespace("data-prev-text")),
                i = t.$li.attr("class"),
                s = e(this.tip_template({
                    tip_class: i,
                    index: t.index,
                    button_text: n,
                    prev_button_text: r,
                    li: t.$li
                }));
            e(this.settings.tip_container).append(s)
        },
        show: function(t, n) {
            var i = null;
            this.settings.$li === r || e.inArray(this.settings.$li.index(), this.settings.pause_after) === -1 ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(t, n), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (t && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = e.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), i = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                i.animate({
                    width: i.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (i.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                i.animate({
                    width: i.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || e(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(e.proxy(function() {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function(e, t) {
            e ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (t ? this.settings.$li = this.settings.$li.prev() : this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },
        set_next_tip: function() {
            this.settings.$next_tip = e(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        },
        set_target: function() {
            var t = this.settings.$li.attr(this.add_namespace("data-class")),
                r = this.settings.$li.attr(this.add_namespace("data-id")),
                i = function() {
                    return r ? e(n.getElementById(r)) : t ? e("." + t).first() : e("body")
                };
            this.settings.$target = i()
        },
        scroll_to: function() {
            var n, r;
            n = e(t).height() / 2, r = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), r != 0 && e("html, body").stop().animate({
                scrollTop: r
            }, this.settings.scroll_speed, "swing")
        },
        paused: function() {
            return e.inArray(this.settings.$li.index() + 1, this.settings.pause_after) === -1
        },
        restart: function() {
            this.hide(), this.settings.$li = r, this.show("init")
        },
        pos_default: function(e) {
            var t = this.settings.$next_tip.find(".joyride-nub"),
                n = Math.ceil(t.outerWidth() / 2),
                r = Math.ceil(t.outerHeight() / 2),
                i = e || !1;
            i && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show());
            if (!/body/i.test(this.settings.$target.selector)) {
                var s = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                    o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.rtl ? this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + r + this.settings.$target.outerHeight() + s,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                }) : this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + r + this.settings.$target.outerHeight() + s,
                    left: this.settings.$target.offset().left + o
                }), this.nub_position(t, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - r + s,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                }) : this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - r + s,
                    left: this.settings.$target.offset().left + o
                }), this.nub_position(t, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + s,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + n + o
                }), this.nub_position(t, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + s,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - n + o
                }), this.nub_position(t, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            } else this.settings.$li.length && this.pos_modal(t);
            i && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function(t) {
            var n = this.settings.$next_tip.outerHeight(),
                r = this.settings.$next_tip.offset(),
                i = this.settings.$target.outerHeight(),
                s = e(".joyride-nub", this.settings.$next_tip),
                o = Math.ceil(s.outerHeight() / 2),
                u = t || !1;
            s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), u && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - n - o
            }), s.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + i + o
            }), s.addClass("top")), u && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function(e) {
            this.center(), e.hide(), this.show_modal()
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var t = e(".joyride-modal-bg");
                t.length < 1 && e("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? t.show() : t.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function() {
            var n, r, i, s, o, u = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof e) i = arguments[0];
            else {
                if (!this.settings.$target || !!/body/i.test(this.settings.$target.selector)) return !1;
                i = this.settings.$target
            }
            if (i.length < 1) return t.console && console.error("element not valid", i), !1;
            n = e(this.settings.template.expose), this.settings.$body.append(n), n.css({
                top: i.offset().top,
                left: i.offset().left,
                width: i.outerWidth(!0),
                height: i.outerHeight(!0)
            }), r = e(this.settings.template.expose_cover), s = {
                zIndex: i.css("z-index"),
                position: i.css("position")
            }, o = i.attr("class") == null ? "" : i.attr("class"), i.css("z-index", parseInt(n.css("z-index")) + 1), s.position == "static" && i.css("position", "relative"), i.data("expose-css", s), i.data("orig-class", o), i.attr("class", o + " " + this.settings.expose_add_class), r.css({
                top: i.offset().top,
                left: i.offset().left,
                width: i.outerWidth(!0),
                height: i.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(r), n.addClass(u), r.addClass(u), i.data("expose", u), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, i), this.add_exposed(i)
        },
        un_expose: function() {
            var n, r, i, s, o, u = !1;
            if (arguments.length > 0 && arguments[0] instanceof e) r = arguments[0];
            else {
                if (!this.settings.$target || !!/body/i.test(this.settings.$target.selector)) return !1;
                r = this.settings.$target
            }
            if (r.length < 1) return t.console && console.error("element not valid", r), !1;
            n = r.data("expose"), i = e("." + n), arguments.length > 1 && (u = arguments[1]), u === !0 ? e(".joyride-expose-wrapper,.joyride-expose-cover").remove() : i.remove(), s = r.data("expose-css"), s.zIndex == "auto" ? r.css("z-index", "") : r.css("z-index", s.zIndex), s.position != r.css("position") && (s.position == "static" ? r.css("position", "") : r.css("position", s.position)), o = r.data("orig-class"), r.attr("class", o), r.removeData("orig-classes"), r.removeData("expose"), r.removeData("expose-z-index"), this.remove_exposed(r)
        },
        add_exposed: function(t) {
            this.settings.exposed = this.settings.exposed || [], t instanceof e || typeof t == "object" ? this.settings.exposed.push(t[0]) : typeof t == "string" && this.settings.exposed.push(t)
        },
        remove_exposed: function(t) {
            var n, r;
            t instanceof e ? n = t[0] : typeof t == "string" && (n = t), this.settings.exposed = this.settings.exposed || [], r = this.settings.exposed.length;
            while (r--)
                if (this.settings.exposed[r] == n) {
                    this.settings.exposed.splice(r, 1);
                    return
                }
        },
        center: function() {
            var n = e(t);
            return this.settings.$next_tip.css({
                top: (n.height() - this.settings.$next_tip.outerHeight()) / 2 + n.scrollTop(),
                left: (n.width() - this.settings.$next_tip.outerWidth()) / 2 + n.scrollLeft()
            }), !0
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function(n) {
            var r = e(t),
                i = r.height() / 2,
                s = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()),
                o = r.width() + r.scrollLeft(),
                u = r.height() + s,
                a = r.height() + r.scrollTop(),
                f = r.scrollTop();
            return s < f && (s < 0 ? f = 0 : f = s), u > a && (a = u), [n.offset().top < f, o < n.offset().left + n.outerWidth(), a < n.offset().top + n.outerHeight(), r.scrollLeft() > n.offset().left]
        },
        visible: function(e) {
            var t = e.length;
            while (t--)
                if (e[t]) return !1;
            return !0
        },
        nub_position: function(e, t, n) {
            t === "auto" ? e.addClass(n) : e.addClass(t)
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function(t) {
            this.settings.cookie_monster && e.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), e(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, e(".joyride-modal-bg").hide(), this.settings.$current_tip.hide();
            if (typeof t == "undefined" || t === !1) this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);
            e(".joyride-tip-guide").remove()
        },
        off: function() {
            e(this.scope).off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.4.3",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0
        },
        init: function(e, t, n) {
            Foundation.inherit(this, "throttle"), this.bindings(t, n)
        },
        events: function() {
            var n = this,
                r = n.S,
                i = n.settings;
            n.set_expedition_position(), r(n.scope).off(".magellan").on("click.fndtn.magellan", "[" + n.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(t) {
                t.preventDefault();
                var r = e(this).closest("[" + n.attr_name() + "]"),
                    i = r.data("magellan-expedition-init"),
                    s = this.hash.split("#").join(""),
                    o = e("a[name='" + s + "']");
                o.length === 0 && (o = e("#" + s));
                var u = o.offset().top - i.destination_threshold + 1;
                u -= r.outerHeight(), e("html, body").stop().animate({
                    scrollTop: u
                }, 700, "swing", function() {
                    history.pushState ? history.pushState(null, null, "#" + s) : location.hash = "#" + s
                })
            }).on("scroll.fndtn.magellan", n.throttle(this.check_for_arrivals.bind(this), i.throttle_delay)), e(t).on("resize.fndtn.magellan", n.throttle(this.set_expedition_position.bind(this), i.throttle_delay))
        },
        check_for_arrivals: function() {
            var e = this;
            e.update_arrivals(), e.update_expedition_positions()
        },
        set_expedition_position: function() {
            var t = this;
            e("[" + this.attr_name() + "=fixed]", t.scope).each(function(n, r) {
                var i = e(this),
                    s = i.data("magellan-expedition-init"),
                    o = i.attr("styles"),
                    u, a;
                i.attr("style", ""), u = i.offset().top + s.threshold, a = parseInt(i.data("magellan-fixed-top")), isNaN(a) || (t.settings.fixed_top = a), i.data(t.data_attr("magellan-top-offset"), u), i.attr("style", o)
            })
        },
        update_expedition_positions: function() {
            var n = this,
                r = e(t).scrollTop();
            e("[" + this.attr_name() + "=fixed]", n.scope).each(function() {
                var t = e(this),
                    i = t.data("magellan-expedition-init"),
                    s = t.attr("style"),
                    o = t.data("magellan-top-offset");
                if (r + n.settings.fixed_top >= o) {
                    var u = t.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]");
                    u.length === 0 && (u = t.clone(), u.removeAttr(n.attr_name()), u.attr(n.add_namespace("data-magellan-expedition-clone"), ""), t.before(u)), t.css({
                        position: "fixed",
                        top: i.fixed_top
                    }).addClass("fixed")
                } else t.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]").remove(), t.attr("style", s).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var n = this,
                r = e(t).scrollTop();
            e("[" + this.attr_name() + "]", n.scope).each(function() {
                var t = e(this),
                    i = t.data(n.attr_name(!0) + "-init"),
                    s = n.offsets(t, r),
                    o = t.find("[" + n.add_namespace("data-magellan-arrival") + "]"),
                    u = !1;
                s.each(function(e, r) {
                    if (r.viewport_offset >= r.top_offset) {
                        var s = t.find("[" + n.add_namespace("data-magellan-arrival") + "]");
                        return s.not(r.arrival).removeClass(i.active_class), r.arrival.addClass(i.active_class), u = !0, !0
                    }
                }), u || o.removeClass(i.active_class)
            })
        },
        offsets: function(t, n) {
            var r = this,
                i = t.data(r.attr_name(!0) + "-init"),
                s = n;
            return t.find("[" + r.add_namespace("data-magellan-arrival") + "]").map(function(n, o) {
                var u = e(this).data(r.data_attr("magellan-arrival")),
                    a = e("[" + r.add_namespace("data-magellan-destination") + "=" + u + "]");
                if (a.length > 0) {
                    var f = Math.floor(a.offset().top - i.destination_threshold - t.outerHeight());
                    return {
                        destination: a,
                        arrival: e(this),
                        top_offset: f,
                        viewport_offset: s
                    }
                }
            }).sort(function(e, t) {
                return e.top_offset < t.top_offset ? -1 : e.top_offset > t.top_offset ? 1 : 0
            })
        },
        data_attr: function(e) {
            return this.namespace.length > 0 ? this.namespace + "-" + e : e
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(t).off(".magellan")
        },
        reflow: function() {
            var t = this;
            e("[" + t.add_namespace("data-magellan-expedition-clone") + "]", t.scope).remove()
        }
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.4.3",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(e, t, n) {
            this.bindings(t, n)
        },
        events: function() {
            var t = this,
                n = t.S,
                r = "",
                i = "",
                s = "";
            this.settings.open_method === "move" ? (r = "move-", i = "right", s = "left") : this.settings.open_method === "overlap_single" ? (r = "offcanvas-overlap-", i = "right", s = "left") : this.settings.open_method === "overlap" && (r = "offcanvas-overlap"), n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(s) {
                t.click_toggle_class(s, r + i), t.settings.open_method !== "overlap" && n(".left-submenu").removeClass(r + i), e(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(s) {
                var o = t.get_settings(s),
                    u = n(this).parent();
                o.close_on_click && !u.hasClass("has-submenu") && !u.hasClass("back") ? (t.hide.call(t, r + i, t.get_wrapper(s)), u.parent().removeClass(r + i)) : n(this).parent().hasClass("has-submenu") ? (s.preventDefault(), n(this).siblings(".left-submenu").toggleClass(r + i)) : u.hasClass("back") && (s.preventDefault(), u.parent().removeClass(r + i)), e(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(i) {
                t.click_toggle_class(i, r + s), t.settings.open_method !== "overlap" && n(".right-submenu").removeClass(r + s), e(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(i) {
                var o = t.get_settings(i),
                    u = n(this).parent();
                o.close_on_click && !u.hasClass("has-submenu") && !u.hasClass("back") ? (t.hide.call(t, r + s, t.get_wrapper(i)), u.parent().removeClass(r + s)) : n(this).parent().hasClass("has-submenu") ? (i.preventDefault(), n(this).siblings(".right-submenu").toggleClass(r + s)) : u.hasClass("back") && (i.preventDefault(), u.parent().removeClass(r + s)), e(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(o) {
                t.click_remove_class(o, r + s), n(".right-submenu").removeClass(r + s), i && (t.click_remove_class(o, r + i), n(".left-submenu").removeClass(r + s)), e(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(n) {
                t.click_remove_class(n, r + s), e(".left-off-canvas-toggle").attr("aria-expanded", "false"), i && (t.click_remove_class(n, r + i), e(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(e, t) {
            t = t || this.get_wrapper(), t.is("." + e) ? this.hide(e, t) : this.show(e, t)
        },
        show: function(e, t) {
            t = t || this.get_wrapper(), t.trigger("open").trigger("open.fndtn.offcanvas"), t.addClass(e)
        },
        hide: function(e, t) {
            t = t || this.get_wrapper(), t.trigger("close").trigger("close.fndtn.offcanvas"), t.removeClass(e)
        },
        click_toggle_class: function(e, t) {
            e.preventDefault();
            var n = this.get_wrapper(e);
            this.toggle(t, n)
        },
        click_remove_class: function(e, t) {
            e.preventDefault();
            var n = this.get_wrapper(e);
            this.hide(t, n)
        },
        get_settings: function(e) {
            var t = this.S(e.target).closest("[" + this.attr_name() + "]");
            return t.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(e) {
            var t = this.S(e ? e.target : this.scope).closest(".off-canvas-wrap");
            return t.length === 0 && (t = this.S(".off-canvas-wrap")), t
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";

    function i(e) {
        var t = /fade/i.test(e),
            n = /pop/i.test(e);
        return {
            animate: t || n,
            pop: n,
            fade: t
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.4.3",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: e(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(t, n, r) {
            e.extend(!0, this.settings, n, r), this.bindings(n, r)
        },
        events: function(e) {
            var t = this,
                r = t.S;
            return r(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(e) {
                e.preventDefault();
                if (!t.locked) {
                    var n = r(this),
                        i = n.data(t.data_attr("reveal-ajax"));
                    t.locked = !0;
                    if (typeof i == "undefined") t.open.call(t, n);
                    else {
                        var s = i === !0 ? n.attr("href") : i;
                        t.open.call(t, n, {
                            url: s
                        })
                    }
                }
            }), r(n).on("click.fndtn.reveal", this.close_targets(), function(e) {
                e.preventDefault();
                if (!t.locked) {
                    var n = r("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"),
                        i = r(e.target)[0] === r("." + n.bg_class)[0];
                    if (i) {
                        if (!n.close_on_background_click) return;
                        e.stopPropagation()
                    }
                    t.locked = !0, t.close.call(t, i ? r("[" + t.attr_name() + "].open") : r(this).closest("[" + t.attr_name() + "]"))
                }
            }), r("[" + t.attr_name() + "]", this.scope).length > 0 ? r(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : r(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function(e) {
            var t = this;
            return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                var n = t.S("[" + t.attr_name() + "].open"),
                    r = n.data(t.attr_name(!0) + "-init") || t.settings;
                r && e.which === 27 && r.close_on_esc && !t.locked && t.close.call(t, n)
            }), !0
        },
        key_up_off: function(e) {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(n, r) {
            var i = this,
                s;
            n ? typeof n.selector != "undefined" ? s = i.S("#" + n.data(i.data_attr("reveal-id"))).first() : (s = i.S(this.scope), r = n) : s = i.S(this.scope);
            var o = s.data(i.attr_name(!0) + "-init");
            o = o || this.settings;
            if (s.hasClass("open") && n.attr("data-reveal-id") == s.attr("id")) return i.close(s);
            if (!s.hasClass("open")) {
                var u = i.S("[" + i.attr_name() + "].open");
                typeof s.data("css-top") == "undefined" && s.data("css-top", parseInt(s.css("top"), 10)).data("offset", this.cache_offset(s)), this.key_up_on(s), s.trigger("open").trigger("open.fndtn.reveal"), u.length < 1 && this.toggle_bg(s, !0), typeof r == "string" && (r = {
                    url: r
                });
                if (typeof r == "undefined" || !r.url) u.length > 0 && this.hide(u, o.css.close), this.show(s, o.css.open);
                else {
                    var a = typeof r.success != "undefined" ? r.success : null;
                    e.extend(r, {
                        success: function(t, n, r) {
                            e.isFunction(a) && a(t, n, r), s.html(t), i.S(s).foundation("section", "reflow"), i.S(s).children().foundation(), u.length > 0 && i.hide(u, o.css.close), i.show(s, o.css.open)
                        }
                    }), e.ajax(r)
                }
            }
            i.S(t).trigger("resize")
        },
        close: function(e) {
            var e = e && e.length ? e : this.S(this.scope),
                t = this.S("[" + this.attr_name() + "].open"),
                n = e.data(this.attr_name(!0) + "-init") || this.settings;
            t.length > 0 && (this.locked = !0, this.key_up_off(e), e.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(e, !1), this.hide(t, n.css.close, n))
        },
        close_targets: function() {
            var e = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? e + ", ." + this.settings.bg_class : e
        },
        toggle_bg: function(t, n) {
            this.S("." + this.settings.bg_class).length === 0 && (this.settings.bg = e("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var i = this.settings.bg.filter(":visible").length > 0;
            n != i && ((n == r ? i : !n) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(n, r) {
            if (r) {
                var s = n.data(this.attr_name(!0) + "-init") || this.settings,
                    o = s.root_element;
                if (n.parent(o).length === 0) {
                    var u = n.wrap('<div style="display: none;" />').parent();
                    n.on("closed.fndtn.reveal.wrapped", function() {
                        n.detach().appendTo(u), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), n.detach().appendTo(o)
                }
                var a = i(s.animation);
                a.animate || (this.locked = !1);
                if (a.pop) {
                    r.top = e(t).scrollTop() - n.data("offset") + "px";
                    var f = {
                        top: e(t).scrollTop() + n.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return n.css(r).animate(f, s.animation_speed, "linear", function() {
                            this.locked = !1, n.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                if (a.fade) {
                    r.top = e(t).scrollTop() + n.data("css-top") + "px";
                    var f = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return n.css(r).animate(f, s.animation_speed, "linear", function() {
                            this.locked = !1, n.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                return n.css(r).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var s = this.settings;
            return i(s.animation).fade ? n.fadeIn(s.animation_speed / 2) : (this.locked = !1, n.show())
        },
        hide: function(n, r) {
            if (r) {
                var s = n.data(this.attr_name(!0) + "-init");
                s = s || this.settings;
                var o = i(s.animation);
                o.animate || (this.locked = !1);
                if (o.pop) {
                    var u = {
                        top: -e(t).scrollTop() - n.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return n.animate(u, s.animation_speed, "linear", function() {
                            this.locked = !1, n.css(r).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                if (o.fade) {
                    var u = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return n.animate(u, s.animation_speed, "linear", function() {
                            this.locked = !1, n.css(r).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), s.animation_speed / 2)
                }
                return n.hide().css(r).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var s = this.settings;
            return i(s.animation).fade ? n.fadeOut(s.animation_speed / 2) : n.hide()
        },
        close_video: function(t) {
            var n = e(".flex-video", t.target),
                r = e("iframe", n);
            r.length > 0 && (r.attr("data-src", r[0].src), r.attr("src", r.attr("src")), n.hide())
        },
        open_video: function(t) {
            var n = e(".flex-video", t.target),
                i = n.find("iframe");
            if (i.length > 0) {
                var s = i.attr("data-src");
                if (typeof s == "string") i[0].src = i.attr("data-src");
                else {
                    var o = i[0].src;
                    i[0].src = r, i[0].src = o
                }
                n.show()
            }
        },
        data_attr: function(e) {
            return this.namespace.length > 0 ? this.namespace + "-" + e : e
        },
        cache_offset: function(e) {
            var t = e.show().height() + parseInt(e.css("top"), 10);
            return e.hide(), t
        },
        off: function() {
            e(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.4.3",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            initial: null,
            display_selector: "",
            vertical: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(e, t, n) {
            Foundation.inherit(this, "throttle"), this.bindings(t, n), this.reflow()
        },
        events: function() {
            var n = this;
            e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + n.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(t) {
                n.cache.active || (t.preventDefault(), n.set_active_slider(e(t.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(r) {
                if (!!n.cache.active) {
                    r.preventDefault();
                    if (e.data(n.cache.active[0], "settings").vertical) {
                        var i = 0;
                        r.pageY || (i = t.scrollY), n.calculate_position(n.cache.active, (r.pageY || r.originalEvent.clientY || r.originalEvent.touches[0].clientY || r.currentPoint.y) + i)
                    } else n.calculate_position(n.cache.active, r.pageX || r.originalEvent.clientX || r.originalEvent.touches[0].clientX || r.currentPoint.x)
                }
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function(e) {
                n.remove_active_slider()
            }).on("change.fndtn.slider", function(e) {
                n.settings.on_change()
            }), n.S(t).on("resize.fndtn.slider", n.throttle(function(e) {
                n.reflow()
            }, 300))
        },
        set_active_slider: function(e) {
            this.cache.active = e
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(t, n) {
            var r = this,
                i = e.data(t[0], "settings"),
                s = e.data(t[0], "handle_l"),
                o = e.data(t[0], "handle_o"),
                u = e.data(t[0], "bar_l"),
                a = e.data(t[0], "bar_o");
            requestAnimationFrame(function() {
                var e;
                Foundation.rtl && !i.vertical ? e = r.limit_to((a + u - n) / u, 0, 1) : e = r.limit_to((n - a) / u, 0, 1), e = i.vertical ? 1 - e : e;
                var s = r.normalized_value(e, i.start, i.end, i.step);
                r.set_ui(t, s)
            })
        },
        set_ui: function(t, n) {
            var r = e.data(t[0], "settings"),
                i = e.data(t[0], "handle_l"),
                s = e.data(t[0], "bar_l"),
                o = this.normalized_percentage(n, r.start, r.end),
                u = o * (s - i) - 1,
                a = o * 100;
            Foundation.rtl && !r.vertical && (u = -u), u = r.vertical ? -u + s - i + 1 : u, this.set_translate(t, u, r.vertical), r.vertical ? t.siblings(".range-slider-active-segment").css("height", a + "%") : t.siblings(".range-slider-active-segment").css("width", a + "%"), t.parent().attr(this.attr_name(), n).trigger("change").trigger("change.fndtn.slider"), t.parent().children("input[type=hidden]").val(n), t[0].hasAttribute("aria-valuemin") || t.attr({
                "aria-valuemin": r.start,
                "aria-valuemax": r.end
            }), t.attr("aria-valuenow", n)
        },
        normalized_percentage: function(e, t, n) {
            return Math.min(1, (e - t) / (n - t))
        },
        normalized_value: function(e, t, n, r) {
            var i = n - t,
                s = e * i,
                o = (s - s % r) / r,
                u = s % r,
                a = u >= r * .5 ? r : 0;
            return o * r + a + t
        },
        set_translate: function(t, n, r) {
            r ? e(t).css("-webkit-transform", "translateY(" + n + "px)").css("-moz-transform", "translateY(" + n + "px)").css("-ms-transform", "translateY(" + n + "px)").css("-o-transform", "translateY(" + n + "px)").css("transform", "translateY(" + n + "px)") : e(t).css("-webkit-transform", "translateX(" + n + "px)").css("-moz-transform", "translateX(" + n + "px)").css("-ms-transform", "translateX(" + n + "px)").css("-o-transform", "translateX(" + n + "px)").css("transform", "translateX(" + n + "px)")
        },
        limit_to: function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        },
        initialize_settings: function(t) {
            var n = e.extend({}, this.settings, this.data_options(e(t).parent()));
            n.vertical ? (e.data(t, "bar_o", e(t).parent().offset().top), e.data(t, "bar_l", e(t).parent().outerHeight()), e.data(t, "handle_o", e(t).offset().top), e.data(t, "handle_l", e(t).outerHeight())) : (e.data(t, "bar_o", e(t).parent().offset().left), e.data(t, "bar_l", e(t).parent().outerWidth()), e.data(t, "handle_o", e(t).offset().left), e.data(t, "handle_l", e(t).outerWidth())), e.data(t, "bar", e(t).parent()), e.data(t, "settings", n)
        },
        set_initial_position: function(t) {
            var n = e.data(t.children(".range-slider-handle")[0], "settings"),
                r = n.initial ? n.initial : Math.floor((n.end - n.start) * .5 / n.step) * n.step + n.start,
                i = t.children(".range-slider-handle");
            this.set_ui(i, r)
        },
        set_value: function(t) {
            var n = this;
            e("[" + n.attr_name() + "]", this.scope).each(function() {
                e(this).attr(n.attr_name(), t)
            }), !e(this.scope).attr(n.attr_name()) || e(this.scope).attr(n.attr_name(), t), n.reflow()
        },
        reflow: function() {
            var t = this;
            t.S("[" + this.attr_name() + "]").each(function() {
                var n = e(this).children(".range-slider-handle")[0],
                    r = e(this).attr(t.attr_name());
                t.initialize_settings(n), r ? t.set_ui(e(n), parseFloat(r)) : t.set_initial_position(e(this))
            })
        }
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.4.3",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(e, t, n) {
            var r = this,
                i = this.S;
            this.bindings(t, n), this.handle_location_hash_change(), i("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                r.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var e = this,
                r = this.S,
                i = function(t) {
                    var n = r(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                    if (!n.is_hover || Modernizr.touch) t.preventDefault(), t.stopPropagation(), e.toggle_active_tab(r(this).parent())
                };
            r(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", i).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", i).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function(t) {
                var n = r(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                n.is_hover && e.toggle_active_tab(r(this).parent())
            }), r(t).on("hashchange.fndtn.tab", function(t) {
                t.preventDefault(), e.handle_location_hash_change()
            }).on("keyup", function(e) {
                e.keyword == 9 && console.log(n.querySelector("[data-tab] .tab-title :focus"))
            })
        },
        handle_location_hash_change: function() {
            var t = this,
                n = this.S;
            n("[" + this.attr_name() + "]", this.scope).each(function() {
                var i = n(this).data(t.attr_name(!0) + "-init");
                if (i.deep_linking) {
                    var s;
                    i.scroll_to_content ? s = t.scope.location.hash : s = t.scope.location.hash.replace("fndtn-", "");
                    if (s != "") {
                        var o = n(s);
                        if (o.hasClass("content") && o.parent().hasClass("tab-content")) t.toggle_active_tab(e("[" + t.attr_name() + "] > * > a[href=" + s + "]").parent());
                        else {
                            var u = o.closest(".content").attr("id");
                            u != r && t.toggle_active_tab(e("[" + t.attr_name() + "] > * > a[href=#" + u + "]").parent(), s)
                        }
                    } else
                        for (var a in t.default_tab_hashes) t.toggle_active_tab(e("[" + t.attr_name() + "] > * > a[href=" + t.default_tab_hashes[a] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(i, s) {
            var o = this.S,
                u = i.closest("[" + this.attr_name() + "]"),
                a = i.find("a"),
                f = i.children("a").first(),
                l = "#" + f.attr("href").split("#")[1],
                c = o(l),
                h = i.siblings(),
                p = u.data(this.attr_name(!0) + "-init"),
                d = function(t) {
                    var r = e(this),
                        i = e(this).parents("li").prev().children('[role="tab"]'),
                        s = e(this).parents("li").next().children('[role="tab"]'),
                        o;
                    switch (t.keyCode) {
                        case 37:
                            o = i;
                            break;
                        case 39:
                            o = s;
                            break;
                        default:
                            o = !1
                    }
                    o.length && (r.attr({
                        tabindex: "-1",
                        "aria-selected": null
                    }), o.attr({
                        tabindex: "0",
                        "aria-selected": !0
                    }).focus()), e('[role="tabpanel"]').attr("aria-hidden", "true"), e("#" + e(n.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                };
            o(this).data(this.data_attr("tab-content")) && (l = "#" + o(this).data(this.data_attr("tab-content")).split("#")[1], c = o(l)), p.deep_linking && (p.scroll_to_content ? (t.location.hash = s || l, s == r || s == l ? i.parent()[0].scrollIntoView() : o(l)[0].scrollIntoView()) : s != r ? t.location.hash = "fndtn-" + s.replace("#", "") : t.location.hash = "fndtn-" + l.replace("#", "")), i.addClass(p.active_class).triggerHandler("opened"), a.attr({
                "aria-selected": "true",
                tabindex: 0
            }), h.removeClass(p.active_class), h.find("a").attr({
                "aria-selected": "false",
                tabindex: -1
            }), c.siblings().removeClass(p.active_class).attr({
                "aria-hidden": "true",
                tabindex: -1
            }).end().addClass(p.active_class).attr("aria-hidden", "false").find(":first-child").attr("tabindex", 0), p.callback(i), c.children().attr("tab-index", 0), c.triggerHandler("toggled", [i]), u.triggerHandler("toggled", [c]), a.on("keydown", d)
        },
        data_attr: function(e) {
            return this.namespace.length > 0 ? this.namespace + "-" + e : e
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(e, t, n, r) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.4.3",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(e, t) {
                return '<span data-selector="' + e + '" id="' + e + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + t + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(e, t, n) {
            Foundation.inherit(this, "random_str"), this.bindings(t, n)
        },
        should_show: function(t, n) {
            var r = e.extend({}, this.settings, this.data_options(t));
            return r.show_on === "all" ? !0 : this.small() && r.show_on === "small" ? !0 : this.medium() && r.show_on === "medium" ? !0 : this.large() && r.show_on === "large" ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(t) {
            var n = this,
                r = n.S;
            n.create(this.S(t)), e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(t) {
                var i = r(this),
                    s = e.extend({}, n.settings, n.data_options(i)),
                    o = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && r(t.target).is("a")) return !1;
                if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                if (i.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && t.preventDefault(), n.hide(i);
                else {
                    if (s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type)) return;
                    !s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && (t.preventDefault(), r(s.tooltip_class + ".open").hide(), o = !0), /enter|over/i.test(t.type) ? this.timer = setTimeout(function() {
                        var e = n.showTip(i)
                    }.bind(this), n.settings.hover_delay) : t.type === "mouseout" || t.type === "mouseleave" ? (clearTimeout(this.timer), n.hide(i)) : n.showTip(i)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(t) {
                if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                if (e(this).data("tooltip-open-event-type") == "touch" && t.type == "mouseleave") return;
                e(this).data("tooltip-open-event-type") == "mouse" && /MSPointerDown|touchstart/i.test(t.type) ? n.convert_to_touch(e(this)) : n.hide(e(this))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function(e) {
                n.hide(r(this))
            })
        },
        ie_touch: function(e) {
            return !1
        },
        showTip: function(e) {
            var t = this.getTip(e);
            if (this.should_show(e, t)) return this.show(e);
            return
        },
        getTip: function(t) {
            var n = this.selector(t),
                r = e.extend({}, this.settings, this.data_options(t)),
                i = null;
            return n && (i = this.S('span[data-selector="' + n + '"]' + r.tooltip_class)), typeof i == "object" ? i : !1
        },
        selector: function(e) {
            var t = e.attr("id"),
                n = e.attr(this.attr_name()) || e.attr("data-selector");
            return (t && t.length < 1 || !t) && typeof n != "string" && (n = this.random_str(6), e.attr("data-selector", n).attr("aria-describedby", n)), t && t.length > 0 ? t : n
        },
        create: function(n) {
            var r = this,
                i = e.extend({}, this.settings, this.data_options(n)),
                s = this.settings.tip_template;
            typeof i.tip_template == "string" && t.hasOwnProperty(i.tip_template) && (s = t[i.tip_template]);
            var o = e(s(this.selector(n), e("<div></div>").html(n.attr("title")).html())),
                u = this.inheritable_classes(n);
            o.addClass(u).appendTo(i.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + i.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function(e) {
                r.hide(n)
            })), n.removeAttr("title").attr("title", "")
        },
        reposition: function(t, n, r) {
            var i, s, o, u, a, f;
            n.css("visibility", "hidden").show(), i = t.data("width"), s = n.children(".nub"), o = s.outerHeight(), u = s.outerHeight(), this.small() ? n.css({
                width: "100%"
            }) : n.css({
                width: i ? i : "auto"
            }), f = function(e, t, n, r, i, s) {
                return e.css({
                    top: t ? t : "auto",
                    bottom: r ? r : "auto",
                    left: i ? i : "auto",
                    right: n ? n : "auto"
                }).end()
            }, f(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left);
            if (this.small()) f(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, e(this.scope).width()), n.addClass("tip-override"), f(s, -o, "auto", "auto", t.offset().left);
            else {
                var l = t.offset().left;
                Foundation.rtl && (s.addClass("rtl"), l = t.offset().left + t.outerWidth() - n.outerWidth()), f(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", l), n.removeClass("tip-override"), r && r.indexOf("tip-top") > -1 ? (Foundation.rtl && s.addClass("rtl"), f(n, t.offset().top - n.outerHeight(), "auto", "auto", l).removeClass("tip-override")) : r && r.indexOf("tip-left") > -1 ? (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left - n.outerWidth() - o).removeClass("tip-override"), s.removeClass("rtl")) : r && r.indexOf("tip-right") > -1 && (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + o).removeClass("tip-override"), s.removeClass("rtl"))
            }
            n.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(t) {
            var n = e.extend({}, this.settings, this.data_options(t)),
                r = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(n.additional_inheritable_classes),
                i = t.attr("class"),
                s = i ? e.map(i.split(" "), function(t, n) {
                    if (e.inArray(t, r) !== -1) return t
                }).join(" ") : "";
            return e.trim(s)
        },
        convert_to_touch: function(t) {
            var n = this,
                r = n.getTip(t),
                i = e.extend({}, n.settings, n.data_options(t));
            r.find(".tap-to-close").length === 0 && (r.append('<span class="tap-to-close">' + i.touch_close_text + "</span>"), r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function(e) {
                n.hide(t)
            })), t.data("tooltip-open-event-type", "touch")
        },
        show: function(e) {
            var t = this.getTip(e);
            e.data("tooltip-open-event-type") == "touch" && this.convert_to_touch(e), this.reposition(e, t, e.attr("class")), e.addClass("open"), t.fadeIn(150)
        },
        hide: function(e) {
            var t = this.getTip(e);
            t.fadeOut(150, function() {
                t.find(".tap-to-close").remove(), t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), e.removeClass("open")
            })
        },
        off: function() {
            var t = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(n) {
                e("[" + t.attr_name() + "]").eq(n).attr("title", e(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document);
(function(e, t, n, r) {
    var i = function(r, i) {
        this.elem = r;
        this.$elem = e(r);
        this.options = i;
        this.metadata = this.$elem.data("plugin-options");
        this.$win = e(t);
        this.sections = {};
        this.didScroll = false;
        this.$doc = e(n);
        this.docHeight = this.$doc.height()
    };
    i.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: false,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: .5,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = e.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== "") {
                this.$nav = this.$nav.filter(this.config.filter)
            }
            this.$nav.on("click.onePageNav", e.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on("resize.onePageNav", e.proxy(this.getPositions, this));
            return this
        },
        adjustNav: function(e, t) {
            e.$elem.find("." + e.config.currentClass).removeClass(e.config.currentClass);
            t.addClass(e.config.currentClass)
        },
        bindInterval: function() {
            var e = this;
            var t;
            e.$win.on("scroll.onePageNav", function() {
                e.didScroll = true
            });
            e.t = setInterval(function() {
                t = e.$doc.height();
                if (e.didScroll) {
                    e.didScroll = false;
                    e.scrollChange()
                }
                if (t !== e.docHeight) {
                    e.docHeight = t;
                    e.getPositions()
                }
            }, 250)
        },
        getHash: function(e) {
            return e.attr("href").split("#")[1]
        },
        getPositions: function() {
            var t = this;
            var n;
            var r;
            var i;
            t.$nav.each(function() {
                n = t.getHash(e(this));
                i = e("#" + n);
                if (i.length) {
                    r = i.offset().top;
                    t.sections[n] = Math.round(r)
                }
            })
        },
        getSection: function(e) {
            var t = null;
            var n = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var r in this.sections) {
                if (this.sections[r] - n < e) {
                    t = r
                }
            }
            return t
        },
        handleClick: function(n) {
            var r = this;
            var i = e(n.currentTarget);
            var s = i.parent();
            var o = "#" + r.getHash(i);
            if (!s.hasClass(r.config.currentClass)) {
                if (r.config.begin) {
                    r.config.begin()
                }
                r.adjustNav(r, s);
                r.unbindInterval();
                r.scrollTo(o, function() {
                    if (r.config.changeHash) {
                        t.location.hash = o
                    }
                    r.bindInterval();
                    if (r.config.end) {
                        r.config.end()
                    }
                })
            }
            n.preventDefault()
        },
        scrollChange: function() {
            var e = this.$win.scrollTop();
            var t = this.getSection(e);
            var n;
            if (t !== null) {
                n = this.$elem.find('a[href$="#' + t + '"]').parent();
                if (!n.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, n);
                    if (this.config.scrollChange) {
                        this.config.scrollChange(n)
                    }
                }
            }
        },
        scrollTo: function(t, n) {
            var r = e(t).offset().top;
            e("html, body").animate({
                scrollTop: r
            }, this.config.scrollSpeed, this.config.easing, n)
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind("scroll.onePageNav")
        }
    };
    i.defaults = i.prototype.defaults;
    e.fn.onePageNav = function(e) {
        return this.each(function() {
            (new i(this, e)).init()
        })
    }
})(jQuery, window, document);
! function(e, t, n, r) {
    function i(t, n) {
        this.element = t, this.options = e.extend({}, o, n), this._defaults = o, this._name = s, this.init()
    }
    var s = "stellar",
        o = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(e) {
                e.hide()
            },
            showElement: function(e) {
                e.show()
            }
        },
        u = {
            scroll: {
                getLeft: function(e) {
                    return e.scrollLeft()
                },
                setLeft: function(e, t) {
                    e.scrollLeft(t)
                },
                getTop: function(e) {
                    return e.scrollTop()
                },
                setTop: function(e, t) {
                    e.scrollTop(t)
                }
            },
            position: {
                getLeft: function(e) {
                    return -1 * parseInt(e.css("left"), 10)
                },
                getTop: function(e) {
                    return -1 * parseInt(e.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(e) {
                    return -1 * parseInt(e.css("margin-left"), 10)
                },
                getTop: function(e) {
                    return -1 * parseInt(e.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(e) {
                    var t = getComputedStyle(e[0])[l];
                    return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(e) {
                    var t = getComputedStyle(e[0])[l];
                    return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        a = {
            position: {
                setLeft: function(e, t) {
                    e.css("left", t)
                },
                setTop: function(e, t) {
                    e.css("top", t)
                }
            },
            transform: {
                setPosition: function(e, t, n, r, i) {
                    e[0].style[l] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                }
            }
        },
        f = function() {
            var t, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                r = e("script")[0].style,
                i = "";
            for (t in r)
                if (n.test(t)) {
                    i = t.match(n)[0];
                    break
                }
            return "WebkitOpacity" in r && (i = "Webkit"), "KhtmlOpacity" in r && (i = "Khtml"),
                function(e) {
                    return i + (i.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
                }
        }(),
        l = f("transform"),
        c = e("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== r,
        h = c ? function(e, t, n) {
            e.css({
                "background-position-x": t,
                "background-position-y": n
            })
        } : function(e, t, n) {
            e.css("background-position", t + " " + n)
        },
        p = c ? function(e) {
            return [e.css("background-position-x"), e.css("background-position-y")]
        } : function(e) {
            return e.css("background-position").split(" ")
        },
        d = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        };
    i.prototype = {
        init: function() {
            this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var e = this,
                t = u[e.options.scrollProperty];
            this._getScrollLeft = function() {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function() {
                return t.getTop(e.$scrollElement)
            }
        },
        _defineSetters: function() {
            var t = this,
                n = u[t.options.scrollProperty],
                r = a[t.options.positionProperty],
                i = n.setLeft,
                s = n.setTop;
            this._setScrollLeft = "function" == typeof i ? function(e) {
                i(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = "function" == typeof s ? function(e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setPosition = r.setPosition || function(e, n, i, s, o) {
                t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
            }
        },
        _handleWindowLoadAndResize: function() {
            var n = this,
                r = e(t);
            n.options.responsive && r.bind("load." + this.name, function() {
                n.refresh()
            }), r.bind("resize." + this.name, function() {
                n._detectViewport(), n.options.responsive && n.refresh()
            })
        },
        refresh: function(n) {
            var r = this,
                i = r._getScrollLeft(),
                s = r._getScrollTop();
            n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function() {
                var e = r._getScrollLeft(),
                    t = r._getScrollTop();
                r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
            }), this._setScrollLeft(i), this._setScrollTop(s)
        },
        _detectViewport: function() {
            var e = this.$viewportElement.offset(),
                t = null !== e && e !== r;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        },
        _findParticles: function() {
            {
                var t = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== r)
                for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", r);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var n, i, s, o, u, a, f, l, c, h = e(this),
                    p = 0,
                    d = 0,
                    v = 0,
                    m = 0;
                if (h.data("stellar-elementIsActive")) {
                    if (h.data("stellar-elementIsActive") !== this) return
                } else h.data("stellar-elementIsActive", this);
                t.options.showElement(h), h.data("stellar-startingLeft") ? (h.css("left", h.data("stellar-startingLeft")), h.css("top", h.data("stellar-startingTop"))) : (h.data("stellar-startingLeft", h.css("left")), h.data("stellar-startingTop", h.css("top"))), s = h.position().left, o = h.position().top, u = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), a = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), l = h.offset().left - u, c = h.offset().top - a, h.parents().each(function() {
                    var t = e(this);
                    return t.data("stellar-offset-parent") === !0 ? (p = v, d = m, f = t, !1) : (v += t.position().left, void(m += t.position().top))
                }), n = h.data("stellar-horizontal-offset") !== r ? h.data("stellar-horizontal-offset") : f !== r && f.data("stellar-horizontal-offset") !== r ? f.data("stellar-horizontal-offset") : t.horizontalOffset, i = h.data("stellar-vertical-offset") !== r ? h.data("stellar-vertical-offset") : f !== r && f.data("stellar-vertical-offset") !== r ? f.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: h,
                    $offsetParent: f,
                    isFixed: "fixed" === h.css("position"),
                    horizontalOffset: n,
                    verticalOffset: i,
                    startingPositionLeft: s,
                    startingPositionTop: o,
                    startingOffsetLeft: l,
                    startingOffsetTop: c,
                    parentOffsetLeft: p,
                    parentOffsetTop: d,
                    stellarRatio: h.data("stellar-ratio") !== r ? h.data("stellar-ratio") : 1,
                    width: h.outerWidth(!0),
                    height: h.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var t, n = this,
                i = this._getScrollLeft(),
                s = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function() {
                var t, o, u, a, f, l, c, d = e(this),
                    v = p(d),
                    g = 0,
                    y = 0,
                    b = 0,
                    w = 0;
                if (d.data("stellar-backgroundIsActive")) {
                    if (d.data("stellar-backgroundIsActive") !== this) return
                } else d.data("stellar-backgroundIsActive", this);
                d.data("stellar-backgroundStartingLeft") ? h(d, d.data("stellar-backgroundStartingLeft"), d.data("stellar-backgroundStartingTop")) : (d.data("stellar-backgroundStartingLeft", v[0]), d.data("stellar-backgroundStartingTop", v[1])), u = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), a = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), f = d.offset().left - u - i, l = d.offset().top - a - s, d.parents().each(function() {
                    var t = e(this);
                    return t.data("stellar-offset-parent") === !0 ? (g = b, y = w, c = t, !1) : (b += t.position().left, void(w += t.position().top))
                }), t = d.data("stellar-horizontal-offset") !== r ? d.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : n.horizontalOffset, o = d.data("stellar-vertical-offset") !== r ? d.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
                    $element: d,
                    $offsetParent: c,
                    isFixed: "fixed" === d.css("background-attachment"),
                    horizontalOffset: t,
                    verticalOffset: o,
                    startingValueLeft: v[0],
                    startingValueTop: v[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(v[0], 10)) ? 0 : parseInt(v[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(v[1], 10)) ? 0 : parseInt(v[1], 10),
                    startingPositionLeft: d.position().left,
                    startingPositionTop: d.position().top,
                    startingOffsetLeft: f,
                    startingOffsetTop: l,
                    parentOffsetLeft: g,
                    parentOffsetTop: y,
                    stellarRatio: d.data("stellar-background-ratio") === r ? 1 : d.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--) e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--) r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(r.$element, r.startingValueLeft, r.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var n = this,
                r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function() {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function() {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var e, t, n, r, i, s, o, u, a, f, l = this._getScrollLeft(),
                c = this._getScrollTop(),
                p = !0,
                d = !0;
            if (this.currentScrollLeft !== l || this.currentScrollTop !== c || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = l, this.currentScrollTop = c, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, f = this.particles.length - 1; f >= 0; f--) e = this.particles[f], t = e.isFixed ? 1 : 0, this.options.horizontalScrolling ? (s = (l + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft, u = s - e.startingPositionLeft + e.startingOffsetLeft) : (s = e.startingPositionLeft, u = e.startingOffsetLeft), this.options.verticalScrolling ? (o = (c + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop, a = o - e.startingPositionTop + e.startingOffsetTop) : (o = e.startingPositionTop, a = e.startingOffsetTop), this.options.hideDistantElements && (d = !this.options.horizontalScrolling || u + e.width > (e.isFixed ? 0 : l) && u < (e.isFixed ? 0 : l) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || a + e.height > (e.isFixed ? 0 : c) && a < (e.isFixed ? 0 : c) + this.viewportHeight + this.viewportOffsetTop), d && p ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, s, e.startingPositionLeft, o, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
                for (f = this.backgrounds.length - 1; f >= 0; f--) n = this.backgrounds[f], t = n.isFixed ? 0 : 1, r = this.options.horizontalScrolling ? (l + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (t - n.stellarRatio) + "px" : n.startingValueLeft, i = this.options.verticalScrolling ? (c + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (t - n.stellarRatio) + "px" : n.startingValueTop, h(n.$element, r, i)
            }
        },
        _handleScrollEvent: function() {
            var e = this,
                t = !1,
                n = function() {
                    e._repositionElements(), t = !1
                },
                r = function() {
                    t || (d(n), t = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, r), r()
        },
        _startAnimationLoop: function() {
            var e = this;
            this._animationLoop = function() {
                d(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }
    }, e.fn[s] = function(t) {
        var n = arguments;
        return t === r || "object" == typeof t ? this.each(function() {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new i(this, t))
        }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
            var r = e.data(this, "plugin_" + s);
            r instanceof i && "function" == typeof r[t] && r[t].apply(r, Array.prototype.slice.call(n, 1)), "destroy" === t && e.data(this, "plugin_" + s, null)
        }) : void 0
    }, e[s] = function() {
        var n = e(t);
        return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
    }, e[s].scrollProperty = u, e[s].positionProperty = a, t.Stellar = i
}(jQuery, this, document);
"function" !== typeof Object.create && (Object.create = function(e) {
    function t() {}
    t.prototype = e;
    return new t
});
(function(e, t, n) {
    var r = {
        init: function(t, n) {
            this.$elem = e(n);
            this.options = e.extend({}, e.fn.owlCarousel.options, this.$elem.data(), t);
            this.userOptions = t;
            this.loadContent()
        },
        loadContent: function() {
            function t(e) {
                var t, r = "";
                if ("function" === typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [e]);
                else {
                    for (t in e.owl) e.owl.hasOwnProperty(t) && (r += e.owl[t].item);
                    n.$elem.html(r)
                }
                n.logIn()
            }
            var n = this,
                r;
            "function" === typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]);
            "string" === typeof n.options.jsonPath ? (r = n.options.jsonPath, e.getJSON(r, t)) : n.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var e = this;
            t.setTimeout(function() {
                e.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var e = this;
            if (!1 === e.$elem.is(":visible")) e.$elem.css({
                opacity: 0
            }), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible);
            else return !1;
            e.checkVisible = t.setInterval(function() {
                e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                    opacity: 1
                }, 200), t.clearInterval(e.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var e = this.$elem.hasClass(this.options.baseClass),
                t = this.$elem.hasClass(this.options.theme);
            e || this.$elem.addClass(this.options.baseClass);
            t || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var t, n;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            t = e(this.options.responsiveBaseWidth).width();
            t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(e, t) {
                        return e[0] - t[0]
                    }), n = 0; n < this.options.itemsCustom.length; n += 1) this.options.itemsCustom[n][0] <= t && (this.options.items = this.options.itemsCustom[n][1]);
            else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var n = this,
                r, i;
            if (!0 !== n.options.responsive) return !1;
            i = e(t).width();
            n.resizer = function() {
                e(t).width() !== i && (!1 !== n.options.autoPlay && t.clearInterval(n.autoPlayInterval), t.clearTimeout(r), r = t.setTimeout(function() {
                    i = e(t).width();
                    n.updateVars()
                }, n.options.responsiveRefreshRate))
            };
            e(t).resize(n.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var t = this,
                n = 0,
                r = t.itemsAmount - t.options.items;
            t.$owlItems.each(function(i) {
                var s = e(this);
                s.css({
                    width: t.itemWidth
                }).data("owl-item", Number(i));
                if (0 === i % t.options.items || i === r) i > r || (n += 1);
                s.data("owl-roundPages", n)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
            var e = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e);
            return e
        },
        min: function() {
            return 0
        },
        loops: function() {
            var t = 0,
                n = 0,
                r, i;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (r = 0; r < this.itemsAmount; r += 1) n += this.itemWidth, this.positionsInArray.push(-n), !0 === this.options.scrollPerPage && (i = e(this.$owlItems[r]), i = i.data("owl-roundPages"), i !== t && (this.pagesInArray[t] = this.positionsInArray[r], t = i))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var t = this,
                n = e('<div class="owl-buttons"/>');
            t.owlControls.append(n);
            t.buttonPrev = e("<div/>", {
                "class": "owl-prev",
                html: t.options.navigationText[0] || ""
            });
            t.buttonNext = e("<div/>", {
                "class": "owl-next",
                html: t.options.navigationText[1] || ""
            });
            n.append(t.buttonPrev).append(t.buttonNext);
            n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(e) {
                e.preventDefault()
            });
            n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                n.preventDefault();
                e(this).hasClass("owl-next") ? t.next() : t.prev()
            })
        },
        buildPagination: function() {
            var t = this;
            t.paginationWrapper = e('<div class="owl-pagination"/>');
            t.owlControls.append(t.paginationWrapper);
            t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                n.preventDefault();
                Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var t, n, r, i, s, o;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            t = 0;
            n = this.itemsAmount - this.itemsAmount % this.options.items;
            for (i = 0; i < this.itemsAmount; i += 1) 0 === i % this.options.items && (t += 1, n === i && (r = this.itemsAmount - this.options.items), s = e("<div/>", {
                "class": "owl-page"
            }), o = e("<span></span>", {
                text: !0 === this.options.paginationNumbers ? t : "",
                "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), s.append(o), s.data("owl-page", n === i ? r : i), s.data("owl-roundPages", t), this.paginationWrapper.append(s));
            this.checkPagination()
        },
        checkPagination: function() {
            var t = this;
            if (!1 === t.options.pagination) return !1;
            t.paginationWrapper.find(".owl-page").each(function() {
                e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(e) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, e = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, e)
        },
        prev: function(e) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, e = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, e)
        },
        goTo: function(e, n, r) {
            var i = this;
            if (i.isTransition) return !1;
            "function" === typeof i.options.beforeMove && i.options.beforeMove.apply(this, [i.$elem]);
            e >= i.maximumItem ? e = i.maximumItem : 0 >= e && (e = 0);
            i.currentItem = i.owl.currentItem = e;
            if (!1 !== i.options.transitionStyle && "drag" !== r && 1 === i.options.items && !0 === i.browser.support3d) return i.swapSpeed(0), !0 === i.browser.support3d ? i.transition3d(i.positionsInArray[e]) : i.css2slide(i.positionsInArray[e], 1), i.afterGo(), i.singleItemTransition(), !1;
            e = i.positionsInArray[e];
            !0 === i.browser.support3d ? (i.isCss3Finish = !1, !0 === n ? (i.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.paginationSpeed)) : "rewind" === n ? (i.swapSpeed(i.options.rewindSpeed), t.setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), t.setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.slideSpeed)), i.transition3d(e)) : !0 === n ? i.css2slide(e, i.options.paginationSpeed) : "rewind" === n ? i.css2slide(e, i.options.rewindSpeed) : i.css2slide(e, i.options.slideSpeed);
            i.afterGo()
        },
        jumpTo: function(e) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            e >= this.maximumItem || -1 === e ? e = this.maximumItem : 0 >= e && (e = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e]) : this.css2slide(this.positionsInArray[e], 1);
            this.currentItem = this.owl.currentItem = e;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            t.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var e = this;
            e.apStatus = "play";
            if (!1 === e.options.autoPlay) return !1;
            t.clearInterval(e.autoPlayInterval);
            e.autoPlayInterval = t.setInterval(function() {
                e.next(!0)
            }, e.options.autoPlay)
        },
        swapSpeed: function(e) {
            "slideSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof e && this.$owlWrapper.css(this.addCssSpeed(e))
        },
        addCssSpeed: function(e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        },
        transition3d: function(e) {
            this.$owlWrapper.css(this.doTranslate(e))
        },
        css2move: function(e) {
            this.$owlWrapper.css({
                left: e
            })
        },
        css2slide: function(e, t) {
            var n = this;
            n.isCssFinish = !1;
            n.$owlWrapper.stop(!0, !0).animate({
                left: e
            }, {
                duration: t || n.options.slideSpeed,
                complete: function() {
                    n.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var e = n.createElement("div");
            e.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== e && 1 === e.length,
                isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var e = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = e[0];
            this.ev_types.move = e[1];
            this.ev_types.end = e[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(e) {
                e.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(t) {
                return e(t.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function r(e) {
                if (void 0 !== e.touches) return {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                };
                if (void 0 === e.touches) {
                    if (void 0 !== e.pageX) return {
                        x: e.pageX,
                        y: e.pageY
                    };
                    if (void 0 === e.pageX) return {
                        x: e.clientX,
                        y: e.clientY
                    }
                }
            }

            function i(t) {
                "on" === t ? (e(n).on(u.ev_types.move, s), e(n).on(u.ev_types.end, o)) : "off" === t && (e(n).off(u.ev_types.move), e(n).off(u.ev_types.end))
            }

            function s(i) {
                i = i.originalEvent || i || t.event;
                u.newPosX = r(i).x - a.offsetX;
                u.newPosY = r(i).y - a.offsetY;
                u.newRelativeX = u.newPosX - a.relativePos;
                "function" === typeof u.options.startDragging && !0 !== a.dragging && 0 !== u.newRelativeX && (a.dragging = !0, u.options.startDragging.apply(u, [u.$elem]));
                (8 < u.newRelativeX || -8 > u.newRelativeX) && !0 === u.browser.isTouch && (void 0 !== i.preventDefault ? i.preventDefault() : i.returnValue = !1, a.sliding = !0);
                (10 < u.newPosY || -10 > u.newPosY) && !1 === a.sliding && e(n).off("touchmove.owl");
                u.newPosX = Math.max(Math.min(u.newPosX, u.newRelativeX / 5), u.maximumPixels + u.newRelativeX / 5);
                !0 === u.browser.support3d ? u.transition3d(u.newPosX) : u.css2move(u.newPosX)
            }

            function o(n) {
                n = n.originalEvent || n || t.event;
                var r;
                n.target = n.target || n.srcElement;
                a.dragging = !1;
                !0 !== u.browser.isTouch && u.$owlWrapper.removeClass("grabbing");
                u.dragDirection = 0 > u.newRelativeX ? u.owl.dragDirection = "left" : u.owl.dragDirection = "right";
                0 !== u.newRelativeX && (r = u.getNewPosition(), u.goTo(r, !1, "drag"), a.targetElement === n.target && !0 !== u.browser.isTouch && (e(n.target).on("click.disable", function(t) {
                    t.stopImmediatePropagation();
                    t.stopPropagation();
                    t.preventDefault();
                    e(t.target).off("click.disable")
                }), n = e._data(n.target, "events").click, r = n.pop(), n.splice(0, 0, r)));
                i("off")
            }
            var u = this,
                a = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            u.isCssFinish = !0;
            u.$elem.on(u.ev_types.start, ".owl-wrapper", function(n) {
                n = n.originalEvent || n || t.event;
                var s;
                if (3 === n.which) return !1;
                if (!(u.itemsAmount <= u.options.items)) {
                    if (!1 === u.isCssFinish && !u.options.dragBeforeAnimFinish || !1 === u.isCss3Finish && !u.options.dragBeforeAnimFinish) return !1;
                    !1 !== u.options.autoPlay && t.clearInterval(u.autoPlayInterval);
                    !0 === u.browser.isTouch || u.$owlWrapper.hasClass("grabbing") || u.$owlWrapper.addClass("grabbing");
                    u.newPosX = 0;
                    u.newRelativeX = 0;
                    e(this).css(u.removeTransition());
                    s = e(this).position();
                    a.relativePos = s.left;
                    a.offsetX = r(n).x - s.left;
                    a.offsetY = r(n).y - s.top;
                    i("on");
                    a.sliding = !1;
                    a.targetElement = n.target || n.srcElement
                }
            })
        },
        getNewPosition: function() {
            var e = this.closestItem();
            e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0);
            return e
        },
        closestItem: function() {
            var t = this,
                n = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray,
                r = t.newPosX,
                i = null;
            e.each(n, function(s, o) {
                r - t.itemWidth / 20 > n[s + 1] && r - t.itemWidth / 20 < o && "left" === t.moveDirection() ? (i = o, t.currentItem = !0 === t.options.scrollPerPage ? e.inArray(i, t.positionsInArray) : s) : r + t.itemWidth / 20 < o && r + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (i = n[s + 1] || n[n.length - 1], t.currentItem = e.inArray(i, t.positionsInArray)) : (i = n[s + 1], t.currentItem = s + 1))
            });
            return t.currentItem
        },
        moveDirection: function() {
            var e;
            0 > this.newRelativeX ? (e = "right", this.playDirection = "next") : (e = "left", this.playDirection = "prev");
            return e
        },
        customEvents: function() {
            var e = this;
            e.$elem.on("owl.next", function() {
                e.next()
            });
            e.$elem.on("owl.prev", function() {
                e.prev()
            });
            e.$elem.on("owl.play", function(t, n) {
                e.options.autoPlay = n;
                e.play();
                e.hoverStatus = "play"
            });
            e.$elem.on("owl.stop", function() {
                e.stop();
                e.hoverStatus = "stop"
            });
            e.$elem.on("owl.goTo", function(t, n) {
                e.goTo(n)
            });
            e.$elem.on("owl.jumpTo", function(t, n) {
                e.jumpTo(n)
            })
        },
        stopOnHover: function() {
            var e = this;
            !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function() {
                e.stop()
            }), e.$elem.on("mouseout", function() {
                "stop" !== e.hoverStatus && e.play()
            }))
        },
        lazyLoad: function() {
            var t, n, r, i, s;
            if (!1 === this.options.lazyLoad) return !1;
            for (t = 0; t < this.itemsAmount; t += 1) n = e(this.$owlItems[t]), "loaded" !== n.data("owl-loaded") && (r = n.data("owl-item"), i = n.find(".lazyOwl"), "string" !== typeof i.data("src") ? n.data("owl-loaded", "loaded") : (void 0 === n.data("owl-loaded") && (i.hide(), n.addClass("loading").data("owl-loaded", "checked")), (s = !0 === this.options.lazyFollow ? r >= this.currentItem : !0) && r < this.currentItem + this.options.items && i.length && this.lazyPreload(n, i)))
        },
        lazyPreload: function(e, n) {
            function r() {
                e.data("owl-loaded", "loaded").removeClass("loading");
                n.removeAttr("data-src");
                "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show();
                "function" === typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }

            function i() {
                o += 1;
                s.completeImg(n.get(0)) || !0 === u ? r() : 100 >= o ? t.setTimeout(i, 100) : r()
            }
            var s = this,
                o = 0,
                u;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), u = !0) : n[0].src = n.data("src");
            i()
        },
        autoHeight: function() {
            function n() {
                var n = e(i.$owlItems[i.currentItem]).height();
                i.wrapperOuter.css("height", n + "px");
                i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                    i.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function r() {
                o += 1;
                i.completeImg(s.get(0)) ? n() : 100 >= o ? t.setTimeout(r, 100) : i.wrapperOuter.css("height", "")
            }
            var i = this,
                s = e(i.$owlItems[i.currentItem]).find("img"),
                o;
            void 0 !== s.get(0) ? (o = 0, r()) : n()
        },
        completeImg: function(e) {
            return !e.complete || "undefined" !== typeof e.naturalWidth && 0 === e.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var t;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (t = this.currentItem; t < this.currentItem + this.options.items; t += 1) this.visibleItems.push(t), !0 === this.options.addClassActive && e(this.$owlItems[t]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(e) {
            this.outClass = "owl-" + e + "-out";
            this.inClass = "owl-" + e + "-in"
        },
        singleItemTransition: function() {
            var e = this,
                t = e.outClass,
                n = e.inClass,
                r = e.$owlItems.eq(e.currentItem),
                i = e.$owlItems.eq(e.prevItem),
                s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                o = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
            e.isTransition = !0;
            e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": o + "px",
                "-moz-perspective-origin": o + "px",
                "perspective-origin": o + "px"
            });
            i.css({
                position: "relative",
                left: s + "px"
            }).addClass(t).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                e.endPrev = !0;
                i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                e.clearTransStyle(i, t)
            });
            r.addClass(n).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                e.endCurrent = !0;
                r.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                e.clearTransStyle(r, n)
            })
        },
        clearTransStyle: function(e, t) {
            e.css({
                position: "",
                left: ""
            }).removeClass(t);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            e(n).off(".owl owl");
            e(t).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            t.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(t) {
            t = e.extend({}, this.userOptions, t);
            this.unWrap();
            this.init(t, this.$elem)
        },
        addItem: function(e, t) {
            var n;
            if (!e) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(e), this.setVars(), !1;
            this.unWrap();
            n = void 0 === t || -1 === t ? -1 : t;
            n >= this.$userItems.length || -1 === n ? this.$userItems.eq(-1).after(e) : this.$userItems.eq(n).before(e);
            this.setVars()
        },
        removeItem: function(e) {
            if (0 === this.$elem.children().length) return !1;
            e = void 0 === e || -1 === e ? -1 : e;
            this.unWrap();
            this.$userItems.eq(e).remove();
            this.setVars()
        }
    };
    e.fn.owlCarousel = function(t) {
        return this.each(function() {
            if (!0 === e(this).data("owl-init")) return !1;
            e(this).data("owl-init", !0);
            var n = Object.create(r);
            n.init(t, this);
            e.data(this, "owlCarousel", n)
        })
    };
    e.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: t,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
(function() {
    var e = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++) {
                if (t in this && this[t] === e) return t
            }
            return -1
        },
        t = [].slice;
    (function(e, t) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return t(n, e)
            })
        } else {
            return t(e.jQuery, e)
        }
    })(window, function(n, r) {
        var i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b;
        i = n(r);
        c = e.call(r, "ontouchstart") >= 0;
        u = {
            horizontal: {},
            vertical: {}
        };
        a = 1;
        l = {};
        f = "waypoints-context-id";
        d = "resize.waypoints";
        v = "scroll.waypoints";
        m = 1;
        g = "waypoints-waypoint-ids";
        y = "waypoint";
        b = "waypoints";
        s = function() {
            function e(e) {
                var t = this;
                this.$element = e;
                this.element = e[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + a++;
                this.oldScroll = {
                    x: e.scrollLeft(),
                    y: e.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[f] = this.id;
                l[this.id] = this;
                e.bind(v, function() {
                    var e;
                    if (!(t.didScroll || c)) {
                        t.didScroll = true;
                        e = function() {
                            t.doScroll();
                            return t.didScroll = false
                        };
                        return r.setTimeout(e, n[b].settings.scrollThrottle)
                    }
                });
                e.bind(d, function() {
                    var e;
                    if (!t.didResize) {
                        t.didResize = true;
                        e = function() {
                            n[b]("refresh");
                            return t.didResize = false
                        };
                        return r.setTimeout(e, n[b].settings.resizeThrottle)
                    }
                })
            }
            e.prototype.doScroll = function() {
                var e, t = this;
                e = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!e.vertical.oldScroll || !e.vertical.newScroll)) {
                    n[b]("refresh")
                }
                n.each(e, function(e, r) {
                    var i, s, o;
                    o = [];
                    s = r.newScroll > r.oldScroll;
                    i = s ? r.forward : r.backward;
                    n.each(t.waypoints[e], function(e, t) {
                        var n, i;
                        if (r.oldScroll < (n = t.offset) && n <= r.newScroll) {
                            return o.push(t)
                        } else if (r.newScroll < (i = t.offset) && i <= r.oldScroll) {
                            return o.push(t)
                        }
                    });
                    o.sort(function(e, t) {
                        return e.offset - t.offset
                    });
                    if (!s) {
                        o.reverse()
                    }
                    return n.each(o, function(e, t) {
                        if (t.options.continuous || e === o.length - 1) {
                            return t.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll
                }
            };
            e.prototype.refresh = function() {
                var e, t, r, i = this;
                r = n.isWindow(this.element);
                t = this.$element.offset();
                this.doScroll();
                e = {
                    horizontal: {
                        contextOffset: r ? 0 : t.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : t.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(e, function(e, t) {
                    return n.each(i.waypoints[e], function(e, r) {
                        var i, s, o, u, a;
                        i = r.options.offset;
                        o = r.offset;
                        s = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(t.contextDimension * i / 100)
                            }
                        }
                        r.offset = s - t.contextOffset + t.contextScroll - i;
                        if (r.options.onlyOnScroll && o != null || !r.enabled) {
                            return
                        }
                        if (o !== null && o < (u = t.oldScroll) && u <= r.offset) {
                            return r.trigger([t.backward])
                        } else if (o !== null && o > (a = t.oldScroll) && a >= r.offset) {
                            return r.trigger([t.forward])
                        } else if (o === null && t.oldScroll >= r.offset) {
                            return r.trigger([t.forward])
                        }
                    })
                })
            };
            e.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([d, v].join(" "));
                    return delete l[this.id]
                }
            };
            return e
        }();
        o = function() {
            function e(e, t, r) {
                var i, s;
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var e;
                        e = n[b]("viewportHeight");
                        if (!n.isWindow(t.element)) {
                            e = t.$element.height()
                        }
                        return e - n(this).outerHeight()
                    }
                }
                this.$element = e;
                this.element = e[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = t;
                this.enabled = r.enabled;
                this.id = "waypoints" + m++;
                this.offset = null;
                this.options = r;
                t.waypoints[this.axis][this.id] = this;
                u[this.axis][this.id] = this;
                i = (s = this.element[g]) != null ? s : [];
                i.push(this.id);
                this.element[g] = i
            }
            e.prototype.trigger = function(e) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, e)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            e.prototype.disable = function() {
                return this.enabled = false
            };
            e.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            e.prototype.destroy = function() {
                delete u[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            e.getWaypointsByElement = function(e) {
                var t, r;
                r = e[g];
                if (!r) {
                    return []
                }
                t = n.extend({}, u.horizontal, u.vertical);
                return n.map(r, function(e) {
                    return t[e]
                })
            };
            return e
        }();
        p = {
            init: function(e, t) {
                var r;
                t = n.extend({}, n.fn[y].defaults, t);
                if ((r = t.handler) == null) {
                    t.handler = e
                }
                this.each(function() {
                    var e, r, i, u;
                    e = n(this);
                    i = (u = t.context) != null ? u : n.fn[y].defaults.context;
                    if (!n.isWindow(i)) {
                        i = e.closest(i)
                    }
                    i = n(i);
                    r = l[i[0][f]];
                    if (!r) {
                        r = new s(i)
                    }
                    return new o(e, r, t)
                });
                n[b]("refresh");
                return this
            },
            disable: function() {
                return p._invoke.call(this, "disable")
            },
            enable: function() {
                return p._invoke.call(this, "enable")
            },
            destroy: function() {
                return p._invoke.call(this, "destroy")
            },
            prev: function(e, t) {
                return p._traverse.call(this, e, t, function(e, t, n) {
                    if (t > 0) {
                        return e.push(n[t - 1])
                    }
                })
            },
            next: function(e, t) {
                return p._traverse.call(this, e, t, function(e, t, n) {
                    if (t < n.length - 1) {
                        return e.push(n[t + 1])
                    }
                })
            },
            _traverse: function(e, t, i) {
                var s, o;
                if (e == null) {
                    e = "vertical"
                }
                if (t == null) {
                    t = r
                }
                o = h.aggregate(t);
                s = [];
                this.each(function() {
                    var t;
                    t = n.inArray(this, o[e]);
                    return i(s, t, o[e])
                });
                return this.pushStack(s)
            },
            _invoke: function(e) {
                this.each(function() {
                    var t;
                    t = o.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[y] = function() {
            var e, r;
            r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
            if (p[r]) {
                return p[r].apply(this, e)
            } else if (n.isFunction(r)) {
                return p.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return p.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[y].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(l, function(e, t) {
                    return t.refresh()
                })
            },
            viewportHeight: function() {
                var e;
                return (e = r.innerHeight) != null ? e : i.height()
            },
            aggregate: function(e) {
                var t, r, i;
                t = u;
                if (e) {
                    t = (i = l[n(e)[0][f]]) != null ? i.waypoints : void 0
                }
                if (!t) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(e, i) {
                    n.each(t[e], function(e, t) {
                        return i.push(t)
                    });
                    i.sort(function(e, t) {
                        return e.offset - t.offset
                    });
                    r[e] = n.map(i, function(e) {
                        return e.element
                    });
                    return r[e] = n.unique(r[e])
                });
                return r
            },
            above: function(e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "vertical", function(e, t) {
                    return t.offset <= e.oldScroll.y
                })
            },
            below: function(e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "vertical", function(e, t) {
                    return t.offset > e.oldScroll.y
                })
            },
            left: function(e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "horizontal", function(e, t) {
                    return t.offset <= e.oldScroll.x
                })
            },
            right: function(e) {
                if (e == null) {
                    e = r
                }
                return h._filter(e, "horizontal", function(e, t) {
                    return t.offset > e.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(e, t) {
                return p[e] = t
            },
            _invoke: function(e) {
                var t;
                t = n.extend({}, u.vertical, u.horizontal);
                return n.each(t, function(t, n) {
                    n[e]();
                    return true
                })
            },
            _filter: function(e, t, r) {
                var i, s;
                i = l[n(e)[0][f]];
                if (!i) {
                    return []
                }
                s = [];
                n.each(i.waypoints[t], function(e, t) {
                    if (r(i, t)) {
                        return s.push(t)
                    }
                });
                s.sort(function(e, t) {
                    return e.offset - t.offset
                });
                return n.map(s, function(e) {
                    return e.element
                })
            }
        };
        n[b] = function() {
            var e, n;
            n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, e)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[b].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function() {
            return n[b]("refresh")
        })
    })
}).call(this)
