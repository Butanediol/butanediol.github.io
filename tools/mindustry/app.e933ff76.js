(function(e) {
    function t(t) {
        for (var n, o, c = t[0], s = t[1], l = t[2], d = 0, h = []; d < c.length; d++) o = c[d], Object.prototype.hasOwnProperty.call(r, o) && r[o] && h.push(r[o][0]), r[o] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        u && u(t);
        while (h.length) h.shift()();
        return i.push.apply(i, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], n = !0, c = 1; c < a.length; c++) {
                var s = a[c];
                0 !== r[s] && (n = !1)
            }
            n && (i.splice(t--, 1), e = o(o.s = a[0]))
        }
        return e
    }
    var n = {},
        r = {
            app: 0
        },
        i = [];

    function o(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = e, o.c = n, o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var u = s;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("7a23"),
            r = Object(n["C"])("data-v-12d365c7"),
            i = r((function(e, t) {
                var a = Object(n["v"])("router-view");
                return Object(n["o"])(), Object(n["d"])("div", null, [Object(n["f"])(a)])
            }));
        const o = {};
        o.render = i, o.__scopeId = "data-v-12d365c7";
        var c = o,
            s = a("6c02"),
            l = Object(n["C"])("data-v-c450ed92");
        Object(n["r"])("data-v-c450ed92");
        var u = {
                class: "home"
            },
            d = Object(n["e"])(" Export size"),
            h = Object(n["e"])(" Compression precision(0~7)"),
            p = Object(n["e"])(" Display name"),
            f = Object(n["f"])("input", {
                type: "file",
                id: "filegetter",
                accept: "image/*"
            }, null, -1),
            g = Object(n["f"])("div", {
                style: {
                    height: "200px",
                    width: "200px"
                }
            }, [Object(n["f"])("canvas", {
                id: "showimage"
            })], -1),
            b = {
                style: {
                    "margin-top": "10px"
                }
            },
            v = Object(n["f"])("textarea", {
                name: "",
                id: "textarea",
                cols: "30",
                rows: "10",
                style: {
                    height: "100px",
                    width: "100px",
                    "margin-top": "10px"
                }
            }, null, -1),
            m = Object(n["f"])("div", null, " README ", -1),
            x = Object(n["f"])("div", null, " The higher the compression accuracy value, the more distorted the image and the fewer the number of processors. The value range is 0~7, 0 means no compression. A preview image will be displayed after the conversion, please decide the compression level according to the preview image. ", -1),
            O = Object(n["f"])("div", null, " Click on the button Copy Processor button and the page will automatically copy the code to the clipboard, if this does not work, please copy the contents of the text field below by selecting all of them yourself. ", -1),
            j = Object(n["f"])("div", null, " ------ ", -1),
            y = Object(n["f"])("div", null, " " + Object(n["x"])("<Mindustry>") + " ", -1),
            w = Object(n["f"])("div", null, " Have fun ", -1);
        Object(n["p"])();
        var z = l((function(e, t, a, r, i, o) {
                return Object(n["o"])(), Object(n["d"])("div", u, [Object(n["f"])("div", null, [d, Object(n["B"])(Object(n["f"])("input", {
                    type: "text",
                    "onUpdate:modelValue": t[1] || (t[1] = function(e) {
                        return i.size = e
                    }),
                    name: "Export size",
                    id: "size"
                }, null, 512), [
                    [n["z"], i.size]
                ])]), Object(n["f"])("div", null, [h, Object(n["B"])(Object(n["f"])("input", {
                    type: "text",
                    "onUpdate:modelValue": t[2] || (t[2] = function(e) {
                        return i.compress = e
                    }),
                    name: "Compression precision",
                    placeholder: "0~7",
                    id: "compress"
                }, null, 512), [
                    [n["z"], i.compress]
                ])]), Object(n["f"])("div", null, [p, Object(n["B"])(Object(n["f"])("input", {
                    type: "text",
                    "onUpdate:modelValue": t[3] || (t[3] = function(e) {
                        return i.screenname = e
                    }),
                    name: "Display name",
                    placeholder: "display1"
                }, null, 512), [
                    [n["z"], i.screenname]
                ])]), f, Object(n["f"])("input", {
                    type: "button",
                    value: "Convert!",
                    disabled: !i.haveimage,
                    onClick: t[4] || (t[4] = function() {
                        return o.changeImage && o.changeImage.apply(o, arguments)
                    })
                }, null, 8, ["disabled"]), g, Object(n["f"])("div", b, [(Object(n["o"])(!0), Object(n["d"])(n["a"], null, Object(n["u"])(i.codedata, (function(e, t) {
                    return Object(n["o"])(), Object(n["d"])("input", {
                        type: "submit",
                        value: "Copy processor " + t,
                        key: t,
                        onClick: function(t) {
                            return o.copy(e)
                        }
                    }, null, 8, ["value", "onClick"])
                })), 128))]), v, m, x, O, j, y, w])
            })),
            C = (a("4160"), a("a434"), a("4ec9"), a("d3b7"), a("3ca3"), a("159b"), a("ddb0"), {
                name: "Home",
                data: function() {
                    return {
                        filegetter: null,
                        showimage: null,
                        ctx: null,
                        image: null,
                        screenname: "display1",
                        size: 80,
                        compress: 2,
                        codedata: [],
                        colorMap: null,
                        textarea: null,
                        haveimage: !1
                    }
                },
                components: {},
                methods: {
                    changeImage: function() {
                        this.colorMap = new Map, this.codedata = [], this.ctx.canvas.width = this.size, this.ctx.canvas.height = this.size;
                        var e = this.image.height,
                            t = this.image.width;
                        if (e > t) {
                            var a = e / this.size;
                            e = this.size, t /= a
                        }
                        if (t > e) {
                            var n = t / this.size;
                            t = this.size, e /= n
                        }
                        t == e && (t = this.size, e = this.size), this.ctx.drawImage(this.image, 0, 0, t, e);
                        var r = this.ctx.getImageData(0, 0, this.size, this.size);
                        this.compressPic(r), this.ctx.putImageData(r, 0, 0, 0, 0, this.size, this.size), this.getColorMap(r)
                    },
                    copy: function(e) {
                        this.textarea.value = e, this.textarea.select(), document.execCommand("copy")
                    },
                    getpixel: function(e, t, a) {
                        var n = 4 * (e.width * a + t),
                            r = e.data[n];
                        n++;
                        var i = e.data[n];
                        n++;
                        var o = e.data[n];
                        n++;
                        var c = e.data[n];
                        return {
                            r: r,
                            g: i,
                            b: o,
                            a: c
                        }
                    },
                    setpixel: function(e, t, a, n) {
                        var r = 4 * (e.width * a + t);
                        e.data[r] = n.r, r++, e.data[r] = n.g, r++, e.data[r] = n.b, r++, e.data[r] = n.a
                    },
                    zip: function(e, t) {
                        return e >>>= t, e <<= t, e
                    },
                    compressPic: function(e) {
                        for (var t = 0; t < e.height; t++)
                            for (var a = 0; a < e.width; a++) {
                                var n = this.getpixel(e, a, t);
                                if (0 == n.a) break;
                                n.r = this.zip(n.r, this.compress), n.g = this.zip(n.g, this.compress), n.b = this.zip(n.b, this.compress), this.setpixel(e, a, t, n)
                            }
                    },
                    isSameColor: function(e, t) {
                        return e.r == t.r && e.g == t.g && e.b == t.b && e.a == t.a
                    },
                    getMaxBox: function(e, t, a) {
                        var n = this.getpixel(e, t, a);
                        if (0 == n.a) return null;
                        var r = -1,
                            i = 0,
                            o = {
                                area: 0,
                                x: 0,
                                y: 0
                            };
                        while (1) {
                            var c = 0,
                                s = this.getpixel(e, t, a + i);
                            if (!this.isSameColor(n, s)) break;
                            c++;
                            while (1) {
                                if (t + c >= this.size) break;
                                var l = this.getpixel(e, t + c, a + i);
                                if (!this.isSameColor(n, l)) break;
                                c++
                            }
                            i++, (-1 == r || c < r) && (r = c);
                            var u = i * r;
                            u > o.area && (o.area = u, o.x = r, o.y = i)
                        }
                        r = o.x, i = o.y;
                        for (var d = 0; d < i; d++)
                            for (var h = 0; h < r; h++) this.setpixel(e, t + h, a + d, {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0
                            });
                        return {
                            color: n,
                            box: {
                                x: t,
                                y: a,
                                sx: r,
                                sy: i
                            }
                        }
                    },
                    getColorMap: function(e) {
                        for (var t = 0; t < e.height; t++)
                            for (var a = 0; a < e.width; a++) {
                                var n = this.getMaxBox(e, a, t);
                                if (null != n) {
                                    var r = n.color.r + "," + n.color.g + "," + n.color.b + "," + n.color.a;
                                    null == this.colorMap.get(r) && this.colorMap.set(r, {
                                        color: null,
                                        boxs: []
                                    });
                                    var i = this.colorMap.get(r),
                                        o = n.box;
                                    i.color = n.color, i.boxs.push(o)
                                }
                            }
                        this.getCode2()
                    },
                    newCode: function() {
                        var e = {
                            count: 0,
                            string: ""
                        };
                        return e
                    },
                    getCode2: function() {
                        var e = this;
                        this.codedata.splice(0, this.codedata.length);
                        var t = this.newCode(),
                            a = 0;
                        this.colorMap.forEach((function(n) {
                            var r = n.color,
                                i = "draw color " + r.r + " " + r.g + " " + r.b + " " + r.a + " 0 0\n";
                            t.string += i, t.count++, n.boxs.forEach((function(r) {
                                if (0 == t.count) {
                                    var i = n.color,
                                        o = "draw color " + i.r + " " + i.g + " " + i.b + " " + i.a + " 0 0\n";
                                    t.string += o, t.count++, a = 0
                                }
                                if (t.string += "draw rect " + r.x + " " + (e.size - r.y - r.sy) + " " + r.sx + " " + r.sy + " 0 0\n", t.count++, a++, a % 20 == 0) {
                                    t.string += "drawflush " + e.screenname + "\n";
                                    var c = n.color,
                                        s = "draw color " + c.r + " " + c.g + " " + c.b + " " + c.a + " 0 0\n";
                                    t.string += s, t.count += 2
                                }
                                t.count >= 990 && (t.string += "drawflush " + e.screenname + "\n", e.codedata.push(t.string), t = e.newCode())
                            }))
                        })), t.string += "drawflush " + this.screenname + "\n", this.codedata.push(t.string)
                    }
                },
                mounted: function() {
                    var e = this;
                    new Map;
                    this.textarea = document.getElementById("textarea"), this.showimage = document.getElementById("showimage"), this.ctx = this.showimage.getContext("2d"), this.filegetter = document.getElementById("filegetter"), this.filegetter.addEventListener("change", (function(t) {
                        var a = new FileReader;
                        a.readAsDataURL(t.target.files[0]), a.onloadend = function(t) {
                            e.image = new Image, e.image.src = t.target.result, e.image.onload = function() {
                                e.haveimage = !0
                            }
                        }
                    }))
                }
            });
        a("9c8b");
        C.render = z, C.__scopeId = "data-v-c450ed92";
        var M = C,
            I = [{
                path: "/",
                name: "Home",
                component: M
            }],
            k = Object(s["a"])({
                history: Object(s["b"])(),
                routes: I
            }),
            B = k,
            _ = a("5502"),
            P = Object(_["a"])({
                state: {},
                mutations: {},
                actions: {},
                modules: {}
            });
        Object(n["c"])(c).use(P).use(B).mount("#app")
    },
    "9c8b": function(e, t, a) {
        "use strict";
        a("dc06")
    },
    dc06: function(e, t, a) {}
});
//# sourceMappingURL=app.e933ff76.js.map
