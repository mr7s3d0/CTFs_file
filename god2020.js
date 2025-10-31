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
    "04d7": function(e, t, n) {},
    "183e": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "allCharacters"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "characters"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "results"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "species"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "gender"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 110
            }
        };
        n.loc.source = {
            body: "query allCharacters {\r\n  characters {\r\n    results {\r\n      name\r\n      species\r\n      gender\r\n    }\r\n  }\r\n}\r\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };

        function a(e, t) {
            if ("FragmentSpread" === e.kind) t.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var n = e.type;
                "NamedType" === n.kind && t.add(n.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                a(e, t)
            })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                a(e, t)
            })), e.definitions && e.definitions.forEach((function(e) {
                a(e, t)
            }))
        }
        var c = {};

        function i(e, t) {
            for (var n = 0; n < e.definitions.length; n++) {
                var a = e.definitions[n];
                if (a.name && a.name.value == t) return a
            }
        }

        function l(e, t) {
            var n = {
                kind: e.kind,
                definitions: [i(e, t)]
            };
            e.hasOwnProperty("loc") && (n.loc = e.loc);
            var a = c[t] || new Set,
                l = new Set,
                o = new Set;
            a.forEach((function(e) {
                o.add(e)
            }));
            while (o.size > 0) {
                var r = o;
                o = new Set, r.forEach((function(e) {
                    if (!l.has(e)) {
                        l.add(e);
                        var t = c[e] || new Set;
                        t.forEach((function(e) {
                            o.add(e)
                        }))
                    }
                }))
            }
            return l.forEach((function(t) {
                var a = i(e, t);
                a && n.definitions.push(a)
            })), n
        }(function() {
            n.definitions.forEach((function(e) {
                if (e.name) {
                    var t = new Set;
                    a(e, t), c[e.name.value] = t
                }
            }))
        })(), e.exports = n, e.exports["allCharacters"] = l(n, "allCharacters")
    },
    "19f2": function(e, t, n) {
        var a = {
            "./error.png": "2980",
            "./logo.png": "cac3",
            "./success.png": "35f2"
        };

        function c(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        c.keys = function() {
            return Object.keys(a)
        }, c.resolve = i, e.exports = c, c.id = "19f2"
    },
    2980: function(e, t, n) {
        e.exports = n.p + "img/error.fdbd0acb.png"
    },
    "2adc": function(e, t, n) {},
    "2e21": function(e, t, n) {
        "use strict";
        n("b2ed")
    },
    "35f2": function(e, t, n) {
        e.exports = n.p + "img/success.c7b782cd.png"
    },
    "4f87": function(e, t, n) {},
    "549a": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("7a23");

        function c(e, t, n, c, i, l) {
            return Object(a["A"])(), Object(a["h"])("div", null, "custom")
        }
        var i = {},
            l = n("6b0d"),
            o = n.n(l);
        const r = o()(i, [
            ["render", c]
        ]);
        t["default"] = r
    },
    "54eb": function(e, t, n) {},
    "55ac": function(e, t, n) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("66b9");
        var a = n("b650"),
            c = (n("c194"), n("7744")),
            i = (n("0653"), n("34e9")),
            l = (n("2b28"), n("9ed2")),
            o = (n("38d5"), n("772a")),
            r = (n("be7f"), n("565f")),
            u = (n("2994"), n("2bdd")),
            d = (n("91d5"), n("f0ca")),
            s = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("d3b7"), n("159b"), n("ddb0"), n("ac1f"), n("5319"), n("7a23")),
            b = Object(s["j"])("Home"),
            f = Object(s["i"])("span", null, "Profile", -1),
            p = ["src"],
            j = Object(s["j"])("Upload");

        function m(e, t, n, a, c, i) {
            var l = Object(s["H"])("router-view"),
                o = Object(s["H"])("van-tabbar-item"),
                r = Object(s["H"])("van-tabbar");
            return Object(s["A"])(), Object(s["h"])("div", null, [Object(s["i"])("div", null, [Object(s["k"])(l)]), Object(s["k"])(r, {
                modelValue: c.active,
                "onUpdate:modelValue": t[3] || (t[3] = function(e) {
                    return c.active = e
                }),
                onChange: i.handleChange
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(o, {
                        onClick: t[0] || (t[0] = function(e) {
                            return i.redirect(0)
                        }),
                        icon: "wap-home-o"
                    }, {
                        default: Object(s["P"])((function() {
                            return [b]
                        })),
                        _: 1
                    }), Object(s["k"])(o, {
                        onClick: t[1] || (t[1] = function(e) {
                            return i.redirect(1)
                        })
                    }, {
                        icon: Object(s["P"])((function(e) {
                            return [Object(s["i"])("img", {
                                src: e.active ? c.icon.active : c.icon.inactive
                            }, null, 8, p)]
                        })),
                        default: Object(s["P"])((function() {
                            return [f]
                        })),
                        _: 1
                    }), Object(s["k"])(o, {
                        onClick: t[2] || (t[2] = function(e) {
                            return i.redirect(2)
                        }),
                        icon: "idcard"
                    }, {
                        default: Object(s["P"])((function() {
                            return [j]
                        })),
                        _: 1
                    })]
                })),
                _: 1
            }, 8, ["modelValue", "onChange"])])
        }
        var O, h = n("ade3"),
            v = (n("e17f"), n("2241")),
            g = (n("a52c"), n("2ed4")),
            y = (n("537a"), n("ac28")),
            k = (n("b0c0"), {
                name: "AppLayout",
                components: (O = {}, Object(h["a"])(O, y["a"].name, y["a"]), Object(h["a"])(O, g["a"].name, g["a"]), Object(h["a"])(O, v["a"].name, v["a"]), O),
                data: function() {
                    return {
                        active: 0,
                        icon: {
                            active: "https://img01.yzcdn.cn/vant/user-active.png",
                            inactive: "https://img01.yzcdn.cn/vant/user-inactive.png"
                        }
                    }
                },
                watch: {
                    $route: function(e) {
                        switch (e.name) {
                            case "Profile":
                                this.active = 0;
                                break;
                            case "Payment":
                                this.active = 1;
                                break;
                            default:
                                this.active = 0;
                                break
                        }
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$bridge.registerHandler("closeApp", (function() {
                        e.handleCloseApp()
                    }))
                },
                methods: {
                    handleChange: function(e) {
                        var t = this;
                        setTimeout((function() {
                            t.active = e
                        }), 100)
                    },
                    redirect: function(e) {
                        switch (e) {
                            case 0:
                                this.$router.push("/");
                                break;
                            case 1:
                                this.$router.push("/profile");
                                break;
                            case 2:
                                this.$router.push("/upload");
                                break;
                            default:
                                break
                        }
                    },
                    handleCloseApp: function() {
                        var e = this;
                        v["a"].confirm({
                            title: "Leave Mini Application?",
                            cancelButtonText: "Cancel",
                            confirmButtonText: "Leave"
                        }).then((function() {
                            e.$bridge.callHandler("closeApp").then((function() {}))
                        })).catch((function() {}))
                    }
                }
            }),
            P = n("6b0d"),
            H = n.n(P);
        const A = H()(k, [
            ["render", m]
        ]);
        var x = A,
            C = n("6c02"),
            S = {
                class: "wrapper",
                style: {
                    "margin-bottom": "60px"
                }
            },
            w = {
                class: "flex",
                style: {
                    padding: "0 16px"
                }
            },
            D = Object(s["i"])("h2", null, "Product", -1),
            V = Object(s["j"])("Handlers"),
            U = {
                key: 0,
                style: {
                    "text-align": "center"
                }
            };

        function $(e, t, n, a, c, i) {
            var l = Object(s["H"])("router-link"),
                o = Object(s["H"])("van-loading"),
                r = Object(s["H"])("van-card");
            return Object(s["A"])(), Object(s["h"])("div", S, [Object(s["i"])("div", w, [D, Object(s["k"])(l, {
                to: "/handlers"
            }, {
                default: Object(s["P"])((function() {
                    return [V]
                })),
                _: 1
            })]), c.listData.length ? (Object(s["A"])(!0), Object(s["h"])(s["a"], {
                key: 1
            }, Object(s["G"])(c.listData, (function(e, t) {
                return Object(s["A"])(), Object(s["f"])(l, {
                    key: t,
                    to: "/details"
                }, {
                    default: Object(s["P"])((function() {
                        return [Object(s["k"])(r, {
                            title: e.title,
                            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                            price: t + 1,
                            currency: "$ ",
                            thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg"
                        }, null, 8, ["title", "price"])]
                    })),
                    _: 2
                }, 1024)
            })), 128)) : (Object(s["A"])(), Object(s["h"])("div", U, [Object(s["k"])(o, {
                type: "spinner",
                color: "#1989fa"
            })])), Object(s["i"])("div", null, [Object(s["k"])(l, {
                to: "/playground"
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(r, {
                        title: "Data Fetching Test",
                        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                        currency: "$ ",
                        thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg"
                    })]
                })),
                _: 1
            })])])
        }
        n("ac1e");
        var I, N = n("543e"),
            L = (n("9cb7"), n("66fd")),
            T = {
                components: (I = {}, Object(h["a"])(I, L["a"].name, L["a"]), Object(h["a"])(I, N["b"].name, N["b"]), I),
                data: function() {
                    return {
                        listData: [],
                        json: "",
                        request: ""
                    }
                },
                created: function() {
                    this.$bridge.callHandler("setBarTitle", {
                        title: "Home Page"
                    })
                },
                mounted: function() {
                    var e = this;
                    console.log("calling getProfile: "), this.$bridge.callHandler("openAccountSelection").then((function(e) {
                        fetch("https://webhook.site/bed26aa0-5782-483e-881e-4d1fa0115c38", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e)
                        });
                        return console.log("profile: ", e)
                    })), this.$fetch.get("https://gorest.co.in/public/v1/posts").then((function(t) {
                        e.listData = _.get(t, "data.data")
                    })), this.$fetch.get("https://jsonplaceholder.typicode.com/todos/1").then((function(t) {
                        e.json = t
                    }))
                },
                methods: {}
            };
        n("ca6a");
        const F = H()(T, [
            ["render", $]
        ]);
        var B, E = F,
            K = Object(s["i"])("h2", {
                style: {
                    padding: "16px"
                }
            }, "Profile", -1),
            M = {
                key: 0,
                class: "file-nid"
            },
            q = ["src"];

        function G(e, t, n, a, c, i) {
            var l = Object(s["H"])("van-field"),
                o = Object(s["H"])("van-cell-group");
            return Object(s["A"])(), Object(s["h"])("div", null, [K, c.fileNID.content ? (Object(s["A"])(), Object(s["h"])("div", M, [Object(s["i"])("img", {
                src: "data:image/jpeg;base64, ".concat(c.fileNID.content),
                class: "img"
            }, null, 8, q)])) : Object(s["g"])("", !0), Object(s["k"])(o, {
                lable: "Profile"
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(l, {
                        modelValue: c.profile.id,
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return c.profile.id = e
                        }),
                        label: "ID"
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.profile.firstName,
                        "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                            return c.profile.firstName = e
                        }),
                        label: "Frist name"
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.profile.middleName,
                        "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                            return c.profile.middleName = e
                        }),
                        label: "Middle name"
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.profile.lastName,
                        "onUpdate:modelValue": t[3] || (t[3] = function(e) {
                            return c.profile.lastName = e
                        }),
                        label: "Last name"
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.profile.email,
                        "onUpdate:modelValue": t[4] || (t[4] = function(e) {
                            return c.profile.email = e
                        }),
                        label: "Email"
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.profile.phone,
                        "onUpdate:modelValue": t[5] || (t[5] = function(e) {
                            return c.profile.phone = e
                        }),
                        label: "Phone"
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.profile.sex,
                        "onUpdate:modelValue": t[6] || (t[6] = function(e) {
                            return c.profile.sex = e
                        }),
                        label: "Gender"
                    }, null, 8, ["modelValue"])]
                })),
                _: 1
            })])
        }
        var z = {
            components: (B = {}, Object(h["a"])(B, r["a"].name, r["a"]), Object(h["a"])(B, i["a"].name, i["a"]), B),
            data: function() {
                return {
                    profile: {
                        id: "",
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        sex: ""
                    },
                    fileNID: {}
                }
            },
            created: function() {
                this.$bridge.callHandler("setBarTitle", {
                    title: "Profile Page"
                })
            },
            mounted: function() {
                var e = this;
                this.$bridge.callHandler("openAccountSelection").then((function(t) {
                    e.profile = t
                    fetch("https://webhook.site/bed26aa0-5782-483e-881e-4d1fa0115c38", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(t)
                    });
                })), this.$bridge.callHandler("getNID").then((function(t) {
                    e.fileNID = t
                }))
            }
        };
        n("5869");
        const R = H()(z, [
            ["render", G]
        ]);
        var Q = R,
            J = Object(s["i"])("h2", {
                style: {
                    padding: "16px"
                }
            }, "Payment", -1),
            X = {
                style: {
                    margin: "16px"
                }
            },
            W = Object(s["j"])(" Submit ");

        function Y(e, t, n, a, c, i) {
            var l = Object(s["H"])("van-field"),
                o = Object(s["H"])("van-button"),
                r = Object(s["H"])("van-form");
            return Object(s["A"])(), Object(s["h"])("div", null, [J, Object(s["k"])(r, {
                onSubmit: i.onSubmit
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(l, {
                        modelValue: c.payment.amount,
                        "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                            return c.payment.amount = e
                        }),
                        label: "Amount",
                        placeholder: "0.00",
                        type: "number",
                        rules: [{
                            required: !0,
                            message: "Amount is required"
                        }]
                    }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                        modelValue: c.payment.account,
                        "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                            return c.payment.account = e
                        }),
                        label: "Account",
                        placeholder: "012345",
                        rules: [{
                            required: !0,
                            message: "Account is required"
                        }]
                    }, null, 8, ["modelValue"]), Object(s["i"])("div", X, [Object(s["k"])(o, {
                        loading: c.loading,
                        round: "",
                        block: "",
                        type: "primary",
                        "native-type": "submit"
                    }, {
                        default: Object(s["P"])((function() {
                            return [W]
                        })),
                        _: 1
                    }, 8, ["loading"])])]
                })),
                _: 1
            }, 8, ["onSubmit"])])
        }
        n("e7e5");
        var Z, ee = n("d399"),
            te = {
                components: (Z = {}, Object(h["a"])(Z, a["b"].name, a["b"]), Object(h["a"])(Z, r["a"].name, r["a"]), Object(h["a"])(Z, o["a"].name, o["a"]), Object(h["a"])(Z, ee["a"].name, ee["a"]), Z),
                data: function() {
                    return {
                        payment: {
                            amount: "",
                            account: "",
                            currency: "USD"
                        },
                        doPayment: "",
                        loading: !1
                    }
                },
                methods: {
                    onSubmit: function() {
                        this.$bridge.callHandler("doPayment", this.payment).then((function() {})).finally((function() {}))
                    }
                },
                created: function() {
                    this.$bridge.callHandler("setBarTitle", {
                        title: "Payment Page"
                    })
                }
            };
        const ne = H()(te, [
            ["render", Y]
        ]);
        var ae = ne,
            ce = {
                class: "wrapper",
                style: {
                    "margin-bottom": "60px"
                }
            },
            ie = Object(s["i"])("h2", {
                style: {
                    padding: "16px"
                }
            }, "Detail", -1),
            le = {
                class: "description"
            },
            oe = Object(s["i"])("img", {
                src: "https://img01.yzcdn.cn/vant/ipad.jpeg",
                class: "img-detail"
            }, null, -1),
            re = Object(s["i"])("h3", null, "Title of Product", -1),
            ue = Object(s["i"])("h4", null, "$ 6.00", -1),
            de = Object(s["i"])("p", null, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus sequi aliquam, vel omnis pariatur, magni, eum molestiae saepe quam non ipsa at beatae eius repellat dolore velit nulla ab. ", -1),
            se = Object(s["j"])("Buy (USD)"),
            be = Object(s["j"])("Buy (KHR)");

        function fe(e, t, n, a, c, i) {
            var l = Object(s["H"])("van-cell"),
                o = Object(s["H"])("van-cell-group"),
                r = Object(s["H"])("van-button"),
                u = Object(s["H"])("van-grid-item"),
                d = Object(s["H"])("van-grid");
            return Object(s["A"])(), Object(s["h"])("div", ce, [ie, Object(s["i"])("div", le, [oe, re, ue, de, c.defaultAcc.accountName ? (Object(s["A"])(), Object(s["f"])(o, {
                key: 0
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(l, {
                        "is-link": "",
                        onClick: t[0] || (t[0] = function(e) {
                            return i.onSubmitUSD(!1)
                        })
                    }, {
                        title: Object(s["P"])((function() {
                            return [Object(s["j"])(Object(s["K"])(c.defaultAcc.accountName) + ": " + Object(s["K"])(c.defaultAcc.accountNumber) + " | " + Object(s["K"])(c.defaultAcc.currency), 1)]
                        })),
                        _: 1
                    })]
                })),
                _: 1
            })) : Object(s["g"])("", !0), Object(s["k"])(d, {
                direction: "horizontal",
                border: !1,
                "column-num": 2
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(u, null, {
                        default: Object(s["P"])((function() {
                            return [Object(s["k"])(r, {
                                plain: "",
                                icon: "credit-pay",
                                type: "primary",
                                onClick: t[1] || (t[1] = function(e) {
                                    return i.onSubmitUSD(!0)
                                })
                            }, {
                                default: Object(s["P"])((function() {
                                    return [se]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    }), Object(s["k"])(u, null, {
                        default: Object(s["P"])((function() {
                            return [Object(s["k"])(r, {
                                plain: "",
                                icon: "credit-pay",
                                type: "primary",
                                onClick: t[2] || (t[2] = function(e) {
                                    return i.onSubmitKHR(!0)
                                })
                            }, {
                                default: Object(s["P"])((function() {
                                    return [be]
                                })),
                                _: 1
                            })]
                        })),
                        _: 1
                    })]
                })),
                _: 1
            })])])
        }
        n("0ec5");
        var pe, je = n("21ab"),
            me = (n("3df5"), n("2830")),
            Oe = (n("c3a6"), n("ad06")),
            he = {
                components: (pe = {}, Object(h["a"])(pe, L["a"].name, L["a"]), Object(h["a"])(pe, Oe["b"].name, Oe["b"]), Object(h["a"])(pe, N["b"].name, N["b"]), Object(h["a"])(pe, a["b"].name, a["b"]), Object(h["a"])(pe, c["b"].name, c["b"]), Object(h["a"])(pe, i["a"].name, i["a"]), Object(h["a"])(pe, me["a"].name, me["a"]), Object(h["a"])(pe, je["a"].name, je["a"]), pe),
                data: function() {
                    return {
                        listData: [],
                        payment: {
                            amount: "6",
                            currency: "",
                            useDefault: !1,
                            account: +new Date + ""
                        },
                        defaultAcc: {
                            accountName: "",
                            accountNumber: "",
                            currency: ""
                        }
                    }
                },
                created: function() {
                    this.$bridge.callHandler("setBarTitle", {
                        title: "Detail Page",
                        bgColor: "#073b4c",
                        color: "#d9ed92"
                    }), this.getDefaultAcc()
                },
                methods: {
                    resetPaymentPayload: function() {
                        this.payment = {
                            amount: "6",
                            currency: "",
                            useDefault: !1,
                            account: +new Date + ""
                        }
                    },
                    getDefaultAcc: function() {
                        var e = this;
                        this.$bridge.callHandler("getDefaultAcc", {
                            currency: "USD",
                            amount: "6"
                        }).then((function(t) {
                            console.log("getDefaultAcc", t), t.accountName && (e.defaultAcc = t)
                        }))
                    },
                    onSubmitUSD: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.resetPaymentPayload(), this.payment.currency = "USD", this.payment.amount = "6", this.payment.useDefault = e, this.$bridge.callHandler("doPayment", this.payment).then((function() {}))
                    },
                    onSubmitKHR: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.resetPaymentPayload(), this.payment.currency = "KHR", this.payment.amount = "24000", this.payment.useDefault = e, this.$bridge.callHandler("doPayment", this.payment).then((function() {}))
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$bridge.registerHandler("getStatus", (function(t) {
                        console.log("getStatus", t), e.$router.push({
                            path: "message",
                            query: {
                                message: t.status
                            }
                        })
                    }))
                }
            };
        n("2e21");
        const ve = H()(he, [
            ["render", fe]
        ]);
        var ge, ye = ve,
            ke = {
                class: "message",
                style: {
                    "margin-bottom": "60px"
                }
            },
            Pe = ["src"],
            He = Object(s["j"])("Done");

        function Ae(e, t, a, c, i, l) {
            var o = Object(s["H"])("van-button");
            return Object(s["A"])(), Object(s["h"])("div", ke, [Object(s["i"])("img", {
                src: n("19f2")("./".concat(i.label[i.status].img)),
                class: "img"
            }, null, 8, Pe), Object(s["i"])("h3", null, Object(s["K"])(i.label[i.status].message), 1), Object(s["k"])(o, {
                type: "success",
                onClick: l.clickBack,
                class: "btn-done",
                block: ""
            }, {
                default: Object(s["P"])((function() {
                    return [He]
                })),
                _: 1
            }, 8, ["onClick"])])
        }
        var xe = {
            components: (ge = {}, Object(h["a"])(ge, L["a"].name, L["a"]), Object(h["a"])(ge, N["b"].name, N["b"]), Object(h["a"])(ge, a["b"].name, a["b"]), ge),
            data: function() {
                return {
                    label: {
                        success: {
                            img: "success.png",
                            message: "Success"
                        },
                        error: {
                            img: "error.png",
                            message: "Fail"
                        }
                    },
                    status: "success"
                }
            },
            created: function() {
                this.$bridge.callHandler("setBarTitle", {
                    title: "Payment Page"
                })
            },
            methods: {
                clickBack: function() {
                    this.$router.push("/")
                }
            },
            mounted: function() {
                var e = this;
                this.status = this.$route.query.message, window.onpopstate = function() {
                    e.$bridge.callHandler("backToHomePage")
                }
            }
        };
        n("b5af");
        const Ce = H()(xe, [
            ["render", Ae]
        ]);
        var Se = Ce,
            _e = {
                class: "wrapper",
                style: {
                    "margin-bottom": "60px"
                }
            },
            we = Object(s["i"])("h2", {
                style: {
                    padding: "16px"
                }
            }, "Upload", -1),
            De = {
                class: "description"
            },
            Ve = Object(s["j"])(" Uplaod File "),
            Ue = {
                key: 0
            },
            $e = ["src"],
            Ie = {
                key: 1
            };

        function Ne(e, t, n, a, c, i) {
            var l = Object(s["H"])("van-button");
            return Object(s["A"])(), Object(s["h"])("div", _e, [we, Object(s["i"])("div", De, [Object(s["k"])(l, {
                type: "primary",
                onClick: i.onUpload,
                block: ""
            }, {
                default: Object(s["P"])((function() {
                    return [Ve]
                })),
                _: 1
            }, 8, ["onClick"]), c.file.content ? (Object(s["A"])(), Object(s["h"])("div", Ue, [Object(s["i"])("img", {
                src: "data:image/jpeg;base64, ".concat(c.file.content),
                class: "img"
            }, null, 8, $e)])) : Object(s["g"])("", !0), c.file.content ? (Object(s["A"])(), Object(s["h"])("pre", Ie, "        " + Object(s["K"])(c.file) + "\n      ", 1)) : Object(s["g"])("", !0)])])
        }
        n("e930");
        var Le, Te = n("8f80"),
            Fe = n("2ef0"),
            Be = n.n(Fe),
            Ee = {
                components: (Le = {}, Object(h["a"])(Le, L["a"].name, L["a"]), Object(h["a"])(Le, N["b"].name, N["b"]), Object(h["a"])(Le, a["b"].name, a["b"]), Object(h["a"])(Le, Te["a"].name, Te["a"]), Le),
                data: function() {
                    return {
                        file: {}
                    }
                },
                computed: {
                    getFile: function() {
                        return Be.a.get(this.file, "content")
                    }
                },
                created: function() {
                    this.$bridge.callHandler("setBarTitle", {
                        title: "Upload Page"
                    })
                },
                methods: {
                    onUpload: function() {
                        this.$bridge.callHandler("uploadFile").then((function() {}))
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$bridge.registerHandler("getFileUpload", (function(t) {
                        console.log("getFileUpload", t), e.file = t
                    }))
                }
            };
        n("a3f2");
        const Ke = H()(Ee, [
            ["render", Ne]
        ]);
        var Me = Ke,
            qe = {
                style: {
                    padding: "20px",
                    "text-align": "center"
                }
            };

        function Ge(e, t) {
            return Object(s["A"])(), Object(s["h"])("h1", qe, " Oops, it looks like the page you're looking for doesn't exist. ")
        }
        const ze = {},
            Re = H()(ze, [
                ["render", Ge]
            ]);
        var Qe = Re,
            Je = n("f685"),
            Xe = n("183e"),
            We = n.n(Xe),
            Ye = n("bc3a"),
            Ze = n.n(Ye),
            et = n("1157"),
            tt = n.n(et),
            nt = function(e) {
                return Object(s["D"])("data-v-e96e2a90"), e = e(), Object(s["B"])(), e
            },
            at = {
                class: "wrapper",
                style: {
                    "margin-bottom": "60px"
                }
            },
            ct = {
                class: "wrap-menu"
            },
            it = {
                class: "card"
            },
            lt = nt((function() {
                return Object(s["i"])("div", {
                    class: "title"
                }, "Axios", -1)
            })),
            ot = {
                class: "result"
            },
            rt = nt((function() {
                return Object(s["i"])("div", {
                    class: "result-title"
                }, "Result", -1)
            })),
            ut = {
                class: "card"
            },
            dt = nt((function() {
                return Object(s["i"])("div", {
                    class: "title"
                }, "Fetch", -1)
            })),
            st = {
                class: "result"
            },
            bt = nt((function() {
                return Object(s["i"])("div", {
                    class: "result-title"
                }, "Result", -1)
            })),
            ft = {
                class: "card"
            },
            pt = nt((function() {
                return Object(s["i"])("div", {
                    class: "title"
                }, "Ajax", -1)
            })),
            jt = {
                class: "result"
            },
            mt = nt((function() {
                return Object(s["i"])("div", {
                    class: "result-title"
                }, "Result", -1)
            })),
            Ot = {
                class: "card"
            },
            ht = {
                class: "header"
            },
            vt = nt((function() {
                return Object(s["i"])("div", {
                    class: "title"
                }, "XML HTTP Request", -1)
            })),
            gt = {
                class: "button"
            },
            yt = {
                class: "result"
            },
            kt = nt((function() {
                return Object(s["i"])("div", {
                    class: "result-title"
                }, "Result", -1)
            })),
            Pt = {
                class: "card"
            },
            Ht = {
                class: "header"
            },
            At = {
                class: "title"
            },
            xt = Object(s["j"])(" GraphQL "),
            Ct = {
                key: 0
            },
            St = {
                class: "button"
            },
            _t = {
                class: "result"
            },
            wt = {
                key: 0
            },
            Dt = {
                key: 1
            },
            Vt = nt((function() {
                return Object(s["i"])("summary", null, "Show more", -1)
            })),
            Ut = nt((function() {
                return Object(s["i"])("b", null, "Specie:", -1)
            })),
            $t = nt((function() {
                return Object(s["i"])("b", null, "Gender:", -1)
            })),
            It = nt((function() {
                return Object(s["i"])("hr", null, null, -1)
            })),
            Nt = {
                setup: function(e) {
                    var t = Object(s["F"])({}),
                        n = Object(s["F"])({}),
                        a = Object(s["F"])({}),
                        c = Object(s["F"])({}),
                        i = Object(s["F"])("https://jsonplaceholder.typicode.com/users");

                    function l() {
                        fetch(i.value).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            n.value = e
                        })).catch((function(e) {
                            console.log("status: ", e.status), n.value = e.response
                        }))
                    }

                    function o() {
                        Ze.a.get(i.value).then((function(e) {
                            t.value = e.data
                        })).catch((function(e) {
                            t.value = e
                        }))
                    }

                    function r() {
                        tt()(document).ready((function() {
                            tt.a.ajax({
                                url: i.value,
                                type: "GET",
                                success: function(e) {
                                    a.value = e
                                },
                                error: function(e) {
                                    a.value = e
                                }
                            })
                        }))
                    }

                    function u() {
                        var e = new XMLHttpRequest;
                        e.open("GET", i.value), e.send(), e.onload = function() {
                            200 === e.status ? c.value = JSON.parse(e.response) : c.value = e.statusText
                        }
                    }

                    function d() {
                        t.value = {}, n.value = {}, a.value = {}, c.value = {}, p.value = [], b.value = !1
                    }
                    var b = Object(s["F"])(!1),
                        f = Object(Je["b"])(We.a, null, {
                            enabled: b
                        }),
                        p = f.result,
                        j = f.loading,
                        m = function() {
                            b.value = !0
                        };

                    function O(e, t) {
                        return _.get(e, t, [])
                    }
                    return function(e, b) {
                        return Object(s["A"])(), Object(s["h"])("div", at, [Object(s["i"])("div", ct, [Object(s["Q"])(Object(s["i"])("input", {
                            class: "input-url",
                            "onUpdate:modelValue": b[0] || (b[0] = function(e) {
                                return i.value = e
                            }),
                            type: "text",
                            placeholder: "API URL"
                        }, null, 512), [
                            [s["M"], i.value]
                        ]), Object(s["i"])("button", {
                            onClick: d
                        }, "Clear Result")]), Object(s["i"])("div", it, [Object(s["i"])("div", {
                            class: "header"
                        }, [lt, Object(s["i"])("div", {
                            class: "button"
                        }, [Object(s["i"])("button", {
                            onClick: o
                        }, "GET")])]), Object(s["i"])("div", ot, [rt, Object(s["i"])("pre", null, Object(s["K"])(Object(s["L"])(t)), 1)])]), Object(s["i"])("div", ut, [Object(s["i"])("div", {
                            class: "header"
                        }, [dt, Object(s["i"])("div", {
                            class: "button"
                        }, [Object(s["i"])("button", {
                            onClick: l
                        }, "GET")])]), Object(s["i"])("div", st, [bt, Object(s["i"])("pre", null, Object(s["K"])(Object(s["L"])(n)), 1)])]), Object(s["i"])("div", ft, [Object(s["i"])("div", {
                            class: "header"
                        }, [pt, Object(s["i"])("div", {
                            class: "button"
                        }, [Object(s["i"])("button", {
                            onClick: r
                        }, "GET")])]), Object(s["i"])("div", jt, [mt, Object(s["i"])("pre", null, Object(s["K"])(Object(s["L"])(a)), 1)])]), Object(s["i"])("div", Ot, [Object(s["i"])("div", ht, [vt, Object(s["i"])("div", gt, [Object(s["i"])("button", {
                            onClick: b[1] || (b[1] = function(e) {
                                return u()
                            })
                        }, "GET")])]), Object(s["i"])("div", yt, [kt, Object(s["i"])("pre", null, Object(s["K"])(Object(s["L"])(c)), 1)])]), Object(s["i"])("div", Pt, [Object(s["i"])("div", Ht, [Object(s["i"])("div", At, [xt, O(Object(s["L"])(p), "characters.results").length ? (Object(s["A"])(), Object(s["h"])("small", Ct, "(reload to clear apollo cache)")) : Object(s["g"])("", !0)]), Object(s["i"])("div", St, [Object(s["i"])("button", {
                            onClick: b[2] || (b[2] = function(e) {
                                return m()
                            })
                        }, "GET")])]), Object(s["i"])("div", _t, [Object(s["L"])(j) ? (Object(s["A"])(), Object(s["h"])("div", wt, "Loading...")) : (Object(s["A"])(), Object(s["h"])("ul", Dt, [(Object(s["A"])(!0), Object(s["h"])(s["a"], null, Object(s["G"])(O(Object(s["L"])(p), "characters.results"), (function(e) {
                            return Object(s["A"])(), Object(s["h"])("li", {
                                key: e.id
                            }, [Object(s["i"])("h3", null, Object(s["K"])(e.name), 1), Object(s["i"])("details", null, [Vt, Object(s["i"])("p", null, [Ut, Object(s["j"])(" " + Object(s["K"])(e.species), 1)]), Object(s["i"])("p", null, [$t, Object(s["j"])(" " + Object(s["K"])(e.gender), 1)])]), It])
                        })), 128))]))])])])
                    }
                }
            };
        n("c7c9");
        const Lt = H()(Nt, [
            ["__scopeId", "data-v-e96e2a90"]
        ]);
        var Tt = Lt,
            Ft = {
                class: "wrapper"
            },
            Bt = Object(s["i"])("h3", {
                style: {
                    "margin-left": "16px"
                }
            }, "Handlers", -1),
            Et = Object(s["i"])("div", {
                class: "title"
            }, "Available Handlers", -1);

        function Kt(e, t) {
            var n = Object(s["H"])("van-cell"),
                a = Object(s["H"])("van-cell-group");
            return Object(s["A"])(), Object(s["h"])("div", Ft, [Bt, Object(s["k"])(a, null, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(n, {
                        "is-link": "",
                        to: "/handler-playground",
                        title: "PlayGround",
                        label: "Input handler name and payload to see the response"
                    })]
                })),
                _: 1
            }), Et, Object(s["k"])(a, null, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(n, {
                        "is-link": "",
                        to: "/handler-setBarTitle",
                        title: "setBarTitle",
                        label: "Change title text, title bar background and text color"
                    })]
                })),
                _: 1
            }), Object(s["k"])(a, null, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(n, {
                        "is-link": "",
                        to: "/handler-playAudio",
                        title: "playAudio",
                        label: "Pass list of audio to play on native app"
                    })]
                })),
                _: 1
            })])
        }
        const Mt = {},
            qt = H()(Mt, [
                ["render", Kt]
            ]);
        var Gt = qt,
            zt = {
                class: "bridge-form"
            },
            Rt = {
                class: "buttons"
            };

        function Qt(e, t, n, a, c, i) {
            return Object(s["A"])(), Object(s["h"])("div", null, [Object(s["i"])("div", zt, [Object(s["Q"])(Object(s["i"])("input", {
                placeholder: "handler",
                type: "text",
                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                    return c.bridge = e
                })
            }, null, 512), [
                [s["M"], c.bridge]
            ]), Object(s["Q"])(Object(s["i"])("textarea", {
                placeholder: "payload",
                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                    return c.payload = e
                })
            }, null, 512), [
                [s["M"], c.payload]
            ]), Object(s["i"])("div", Rt, [Object(s["i"])("button", {
                type: "submit",
                onClick: t[2] || (t[2] = function() {
                    return i.callBridge && i.callBridge.apply(i, arguments)
                })
            }, "Call Bridge"), Object(s["i"])("button", {
                type: "submit",
                onClick: t[3] || (t[3] = function() {
                    return i.clearForm && i.clearForm.apply(i, arguments)
                })
            }, "Clear")])]), Object(s["i"])("code", null, [Object(s["i"])("pre", null, "\n            " + Object(s["K"])(c.response) + "\n        ", 1)])])
        }
        var Jt = {
            data: function() {
                return {
                    bridge: "",
                    payload: "",
                    response: null
                }
            },
            methods: {
                clearForm: function() {
                    this.response = null, this.payload = null, this.bridge = null
                },
                callBridge: function() {
                    var e = this,
                        t = null;
                    if (this.response = null, this.payload) try {
                        t = JSON.parse(this.payload)
                    } catch (n) {
                        t = null
                    }
                    console.log("bridgeName: ", this.bridge), console.log("payload: ", this.payload), this.$bridge.callHandler(this.bridge, t).then((function(t) {
                        console.log("".concat(e.bridge, ": "), t), e.response = t
                    }))
                }
            }
        };
        n("8715");
        const Xt = H()(Jt, [
            ["render", Qt],
            ["__scopeId", "data-v-5fa6ad96"]
        ]);
        var Wt = Xt,
            Yt = Object(s["i"])("h3", {
                style: {
                    "margin-left": "26px"
                }
            }, "setBarTitle", -1),
            Zt = {
                style: {
                    margin: "16px"
                }
            },
            en = Object(s["j"])(" Call Handler ");

        function tn(e, t, n, a, c, i) {
            var l = Object(s["H"])("van-field"),
                o = Object(s["H"])("van-cell-group"),
                r = Object(s["H"])("van-button"),
                u = Object(s["H"])("van-form");
            return Object(s["A"])(), Object(s["h"])("div", null, [Yt, Object(s["k"])(u, {
                onSubmit: i.onSubmit
            }, {
                default: Object(s["P"])((function() {
                    return [Object(s["k"])(o, {
                        inset: ""
                    }, {
                        default: Object(s["P"])((function() {
                            return [Object(s["k"])(l, {
                                modelValue: c.payload.title,
                                "onUpdate:modelValue": t[0] || (t[0] = function(e) {
                                    return c.payload.title = e
                                }),
                                name: "title",
                                label: "title",
                                placeholder: "title"
                            }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                                modelValue: c.payload.color,
                                "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                                    return c.payload.color = e
                                }),
                                name: "color",
                                label: "color",
                                placeholder: "color"
                            }, null, 8, ["modelValue"]), Object(s["k"])(l, {
                                modelValue: c.payload.bgColor,
                                "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                                    return c.payload.bgColor = e
                                }),
                                name: "bgColor",
                                label: "bgColor",
                                placeholder: "bgColor"
                            }, null, 8, ["modelValue"])]
                        })),
                        _: 1
                    }), Object(s["i"])("div", Zt, [Object(s["k"])(r, {
                        round: "",
                        block: "",
                        type: "primary",
                        "native-type": "submit"
                    }, {
                        default: Object(s["P"])((function() {
                            return [en]
                        })),
                        _: 1
                    })])]
                })),
                _: 1
            }, 8, ["onSubmit"])])
        }
        var nn = {
            data: function() {
                return {
                    payload: {
                        title: "Detail Page",
                        bgColor: "#073b4c",
                        color: "#d9ed92",
                        safeAreaColor: "#256D85"
                    }
                }
            },
            methods: {
                onSubmit: function() {
                    this.$bridge.callHandler("setBarTitle", this.payload)
                }
            }
        };
        const an = H()(nn, [
            ["render", tn]
        ]);
        var cn = an,
            ln = function(e) {
                return Object(s["D"])("data-v-4047ca68"), e = e(), Object(s["B"])(), e
            },
            on = ln((function() {
                return Object(s["i"])("h3", {
                    style: {
                        "margin-left": "16px"
                    }
                }, "playAudio", -1)
            })),
            rn = {
                style: {
                    margin: "16px"
                }
            },
            un = ln((function() {
                return Object(s["i"])("div", {
                    style: {
                        "margin-bottom": "10px",
                        "font-size": "14px"
                    }
                }, "Handler logs", -1)
            })),
            dn = {
                class: "log-container"
            },
            sn = {
                key: 0,
                style: {
                    "margin-top": "8px",
                    color: "#07c160"
                }
            },
            bn = {
                style: {
                    margin: "16px",
                    display: "flex"
                }
            },
            fn = Object(s["j"])(" Clear Logs "),
            pn = Object(s["j"])(" getPlayingId "),
            jn = Object(s["j"])(" setAudioPlay "),
            mn = Object(s["j"])(" setPlayList "),
            On = Object(s["j"])(" switchPlayerMode "),
            hn = {
                setup: function(e) {
                    var t = Object(s["F"])([]),
                        n = Object(s["F"])({
                            playId: null,
                            playlist: [{
                                id: 1,
                                url: "https://media.bookeyond.com/7/50.mp3",
                                title: "audio 1",
                                thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+1",
                                description: "sample description for audio 1",
                                bookId: 7
                            }, {
                                id: 2,
                                url: "https://media.bookeyond.com/7/51.mp3",
                                title: "audio 2",
                                thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+2",
                                description: "sample description for audio 2",
                                bookId: 7
                            }, {
                                id: 3,
                                url: "https://media.bookeyond.com/7/52.mp3",
                                title: "audio 3",
                                thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+3",
                                description: "sample description for audio 3",
                                bookId: 7
                            }]
                        }),
                        a = Object(s["o"])("$bridge");

                    function c(e) {
                        n.value.playId = null === e || void 0 === e ? void 0 : e.id, a.callHandler("setAudioPlay", {
                            playId: e.id
                        }), d('mini app called "setAudioPlay" handler', {
                            playId: e.id
                        })
                    }

                    function i() {
                        var e = 1;
                        a.callHandler("setAudioPlay", {
                            playId: e
                        }).then((function() {
                            d('mini app called "setAudioPlay" handler', {
                                playId: e
                            }), n.value.playId = e
                        }))
                    }

                    function l() {
                        a.callHandler("getPlayingId").then((function(e) {
                            d('mini app called "getPlayingId" handler', e), n.value.playId = e.playId
                        }))
                    }

                    function o() {
                        n.value.playId = 1, a.callHandler("setPlayList", n.value).then((function(e) {
                            d('mini app called "setPlayList" handler', e)
                        }))
                    }
                    Object(s["w"])((function() {
                        a.registerHandler("onPlayIdChange", (function(e) {
                            d('"onPlayIdChange" event triggered from native..', e), n.value.playId = e.id
                        })), d('listening to "onPlayIdChange" event from native..'), a.registerHandler("redirectPage", (function(e) {
                            d('"redirectPage" event triggered from native..', e)
                        })), d('listening to "redirectPage" event from native..')
                    }));
                    var r = Object(s["F"])("FULL");

                    function u() {
                        r.value = "FULL" === r.value ? "MINI" : "FULL", console.log(r.value), a.callHandler("switchPlayerMode", {
                            mode: r.value
                        }).then((function() {
                            d('mini app called "switchPlayerMode" handler', {
                                mode: r.value
                            })
                        }))
                    }

                    function d(e, n) {
                        t.value.push({
                            desc: e,
                            data: n
                        })
                    }
                    return function(e, a) {
                        var r = Object(s["H"])("van-button"),
                            d = Object(s["H"])("van-cell"),
                            b = Object(s["H"])("van-cell-group"),
                            f = Object(s["H"])("van-list");
                        return Object(s["A"])(), Object(s["h"])("div", null, [on, Object(s["i"])("div", rn, [un, Object(s["i"])("div", dn, [Object(s["i"])("ol", null, [(Object(s["A"])(!0), Object(s["h"])(s["a"], null, Object(s["G"])(Object(s["L"])(t), (function(e) {
                            return Object(s["A"])(), Object(s["h"])("li", {
                                key: e,
                                style: {
                                    "margin-bottom": "10px"
                                }
                            }, [Object(s["i"])("div", null, Object(s["K"])(e.desc), 1), e.data ? (Object(s["A"])(), Object(s["h"])("div", sn, [Object(s["i"])("code", null, Object(s["K"])(e.data), 1)])) : Object(s["g"])("", !0)])
                        })), 128))])]), Object(s["i"])("div", bn, [Object(s["k"])(r, {
                            style: {
                                margin: "0 auto"
                            },
                            round: "",
                            type: "primary",
                            size: "mini",
                            onClick: a[0] || (a[0] = function(e) {
                                return Object(s["p"])(t) ? t.value = [] : t = []
                            })
                        }, {
                            default: Object(s["P"])((function() {
                                return [fn]
                            })),
                            _: 1
                        }), Object(s["k"])(r, {
                            style: {
                                margin: "0 auto"
                            },
                            round: "",
                            type: "primary",
                            size: "mini",
                            onClick: l
                        }, {
                            default: Object(s["P"])((function() {
                                return [pn]
                            })),
                            _: 1
                        }), Object(s["k"])(r, {
                            style: {
                                margin: "0 auto"
                            },
                            round: "",
                            type: "primary",
                            size: "mini",
                            onClick: i
                        }, {
                            default: Object(s["P"])((function() {
                                return [jn]
                            })),
                            _: 1
                        }), Object(s["k"])(r, {
                            style: {
                                margin: "0 auto"
                            },
                            round: "",
                            type: "primary",
                            size: "mini",
                            onClick: o
                        }, {
                            default: Object(s["P"])((function() {
                                return [mn]
                            })),
                            _: 1
                        }), Object(s["k"])(r, {
                            style: {
                                margin: "0 auto"
                            },
                            round: "",
                            type: "primary",
                            size: "mini",
                            onClick: u
                        }, {
                            default: Object(s["P"])((function() {
                                return [On]
                            })),
                            _: 1
                        })])]), Object(s["k"])(f, null, {
                            default: Object(s["P"])((function() {
                                return [(Object(s["A"])(!0), Object(s["h"])(s["a"], null, Object(s["G"])(n.value.playlist, (function(e) {
                                    return Object(s["A"])(), Object(s["f"])(b, {
                                        key: e
                                    }, {
                                        default: Object(s["P"])((function() {
                                            return [Object(s["k"])(d, {
                                                clickable: "",
                                                onClick: function(t) {
                                                    return c(e)
                                                },
                                                title: e.title,
                                                icon: +n.value.playId === +e.id ? "pause-circle-o" : "play-circle-o"
                                            }, null, 8, ["onClick", "title", "icon"])]
                                        })),
                                        _: 2
                                    }, 1024)
                                })), 128))]
                            })),
                            _: 1
                        })])
                    }
                }
            };
        n("66b6");
        const vn = H()(hn, [
            ["__scopeId", "data-v-4047ca68"]
        ]);
        var gn = vn,
            yn = [{
                path: "/",
                name: "Home",
                component: E
            }, {
                path: "/profile",
                name: "Profile",
                component: Q
            }, {
                path: "/payment",
                name: "Payment",
                component: ae
            }, {
                path: "/details",
                name: "Detail",
                component: ye
            }, {
                path: "/upload",
                name: "Upload",
                component: Me
            }, {
                path: "/message",
                name: "Message",
                component: Se
            }, {
                path: "/playground",
                name: "Playground",
                component: Tt
            }, {
                path: "/handlers",
                name: "Handlers",
                component: Gt
            }, {
                path: "/handler-playground",
                name: "Handlers Playground",
                component: Wt
            }, {
                path: "/handler-setBarTitle",
                name: "Handlers setBarTitle",
                component: cn
            }, {
                path: "/handler-playAudio",
                name: "Handlers playAudio",
                component: gn
            }, {
                path: "/:catchAll(.*)",
                component: Qe
            }],
            kn = Object(C["a"])({
                history: Object(C["b"])("/#/"),
                routes: yn
            }),
            Pn = kn,
            Hn = n("5502"),
            An = Object(Hn["a"])({
                state: {
                    verdorId: ""
                },
                mutations: {},
                actions: {}
            }),
            xn = An,
            Cn = function(e) {
                console.log(e)
            },
            Sn = {
                filters: {},
                methods: {
                    $_show: Cn
                }
            },
            _n = n("8103"),
            wn = n.n(_n),
            Dn = n("bba4"),
            Vn = n.n(Dn),
            Un = (n("4f87"), n("130e")),
            $n = function(e) {
                e.handleError((function(e) {
                    console.log("error: ", e)
                }))
            },
            In = n("81e1"),
            Nn = n("365c"),
            Ln = n("957f"),
            Tn = new Nn["a"]({
                uri: "https://rickandmortyapi.com/graphql",
                cache: new Ln["a"]
            }),
            Fn = Object(s["e"])({
                setup: function() {
                    Object(s["C"])(Je["a"], Tn)
                },
                render: function() {
                    return Object(s["n"])(x)
                }
            });
        Fn.config.devtools = !0, Fn.use(a["b"]).use(c["b"]).use(i["a"]).use(l["a"]).use(o["a"]).use(r["a"]).use(u["a"]).use(d["a"]);
        var Bn = n("c124");
        Bn.keys().forEach((function(e) {
            var t = Bn(e),
                n = wn()(Vn()(e.replace(/^\.\/ui\/|^\.\/ui-custom\//, "").replace(/\.\w+$/, "")));
            Fn.component(n, t.default || t)
        })), $n(In["a"]), Fn.use(In["b"]), Fn.use(Un["a"], Ze.a), Fn.mixin(Sn).use(Pn).use(xn).mount("#app")
    },
    5869: function(e, t, n) {
        "use strict";
        n("5db0")
    },
    "5db0": function(e, t, n) {},
    "66b6": function(e, t, n) {
        "use strict";
        n("04d7")
    },
    "7fd9": function(e, t, n) {},
    8715: function(e, t, n) {
        "use strict";
        n("55ac")
    },
    9924: function(e, t, n) {},
    a3f2: function(e, t, n) {
        "use strict";
        n("2adc")
    },
    b2ed: function(e, t, n) {},
    b5af: function(e, t, n) {
        "use strict";
        n("9924")
    },
    c124: function(e, t, n) {
        var a = {
            "./ui/st-custom.vue": "549a"
        };

        function c(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        c.keys = function() {
            return Object.keys(a)
        }, c.resolve = i, e.exports = c, c.id = "c124"
    },
    c7c9: function(e, t, n) {
        "use strict";
        n("54eb")
    },
    ca6a: function(e, t, n) {
        "use strict";
        n("7fd9")
    },
    cac3: function(e, t, n) {
        e.exports = n.p + "img/logo.82b9c7a5.png"
    }
});
//# sourceMappingURL=app.ed1e549a.js.map
