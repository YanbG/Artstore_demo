!function(t) {
    var e = {}
    function i(n) {
        if (e[n])
            return e[n].exports
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        }
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t,
        i.c = e,
        i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        },
        i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        },
        i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e)
                return t
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t
            var n = Object.create(null)
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
                for (var o in t)
                    i.d(n, o, function(e) {
                        return t[e]
                    }.bind(null, o))
            return n
        },
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            }
            return i.d(e, "a", e), e
        },
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        i.p = "/assets/",
        i(i.s = 119)
}([function(t, e, i) {
    "use strict"
    i.d(e, "c", (function() {
        return o
    })),
        i.d(e, "a", (function() {
            return r
        })),
        i.d(e, "b", (function() {
            return s
        }))
    var n = function(t, e) {
        return (n = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        })(t, e)
    }
    function o(t, e) {
        function i() {
            this.constructor = t
        }
        n(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    }
    var r = function() {
        return (r = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var o in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            return t
        }).apply(this, arguments)
    }
    function s(t, e, i, n) {
        var o,
            r = arguments.length,
            s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(t, e, i, n)
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, i, s) : o(e, i)) || s)
        return r > 3 && s && Object.defineProperty(e, i, s), s
    }
}, function(t, e, i) {
    "use strict"
    var n = i(9)
    i.o(n, "ChildComponent") && i.d(e, "ChildComponent", (function() {
        return n.ChildComponent
    })),
    i.o(n, "ChildComponents") && i.d(e, "ChildComponents", (function() {
        return n.ChildComponents
    })),
    i.o(n, "Component") && i.d(e, "Component", (function() {
        return n.Component
    })),
    i.o(n, "ComponentRegistry") && i.d(e, "ComponentRegistry", (function() {
        return n.ComponentRegistry
    })),
    i.o(n, "Events") && i.d(e, "Events", (function() {
        return n.Events
    })),
    i.o(n, "Option") && i.d(e, "Option", (function() {
        return n.Option
    })),
    i.o(n, "OptionType") && i.d(e, "OptionType", (function() {
        return n.OptionType
    })),
    i.o(n, "Service") && i.d(e, "Service", (function() {
        return n.Service
    })),
    i.o(n, "Services") && i.d(e, "Services", (function() {
        return n.Services
    })),
    i.o(n, "View") && i.d(e, "View", (function() {
        return n.View
    }))
    var o = i(4)
    i.d(e, "View", (function() {
        return o.a
    }))
    var r = i(19)
    i.d(e, "Component", (function() {
        return r.a
    })),
        i.d(e, "ComponentRegistry", (function() {
            return r.b
        }))
    var s = i(18)
    i.d(e, "ChildComponent", (function() {
        return s.a
    })),
        i.d(e, "ChildComponents", (function() {
            return s.b
        })),
        i.d(e, "Option", (function() {
            return s.c
        })),
        i.d(e, "OptionType", (function() {
            return s.d
        }))
    i(11)
    var a = i(3)
    i.d(e, "Service", (function() {
        return a.a
    })),
        i.d(e, "Services", (function() {
            return a.b
        }))
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return h
    }))
    var n = i(0),
        o = i(3),
        r = i(4),
        s = i(10),
        a = "pageXOffset" in window,
        l = "CSS1Compat" === (document.compatMode || ""),
        h = function(t) {
            function e() {
                var e = t.call(this, {
                    el: document.documentElement
                }) || this
                return e.width = 0, e.height = 0, e.scrollLeft = 0, e.scrollTop = 0, e.scrollInitiators = [], e.scrollBarSize = Number.NaN, e.scrollRestorePosition = 0, e.hasSizeChanged = !1, e.hasScrollChanged = !1, window.addEventListener ? (window.addEventListener("resize", (function() {
                    return e.onWindowResize()
                })), window.addEventListener("scroll", (function() {
                    return e.onWindowScroll()
                }))) : (window.attachEvent("onresize", (function() {
                    return e.onWindowResize()
                })), window.attachEvent("onscroll", (function() {
                    return e.onWindowScroll()
                })), setTimeout((function() {
                    return e.trigger("resize", e.width, e.height)
                }), 50)), e.listenTo(s.a.getInstance(), "frame", e.onFrame), e.onWindowResize(), e.onWindowScroll(), e.hasSizeChanged = !1, e.hasScrollChanged = !1, e
            }
            var i
            return n.c(e, t), i = e, e.prototype.setScrollLeft = function(t) {
                this.scrollLeft != t && window.scrollTo(t, this.scrollTop)
            }, e.prototype.setScrollTop = function(t) {
                this.scrollTop != t && window.scrollTo(this.scrollLeft, t)
            }, e.prototype.triggerResize = function() {
                this.hasSizeChanged = !0
            }, e.prototype.disableScrollbars = function(t) {
                var e = this.scrollInitiators,
                    i = this.scrollBarSize
                if (-1 === e.indexOf(t) && e.push(t), 1 === e.length) {
                    var n = document.body,
                        o = n.style,
                        r = this.scrollTop
                    if (isNaN(i)) {
                        var s = n.offsetWidth
                        o.width = "100%",
                            o.position = "fixed",
                            i = n.offsetWidth - s,
                            this.scrollBarSize = i
                    } else
                        o.width = "100%",
                            o.position = "fixed"
                    o.paddingRight = i + "px",
                        o.top = "-" + r + "px",
                        this.scrollRestorePosition = r,
                        this.onWindowResize(),
                        this.trigger("scrollbars", !1)
                }
            }, e.prototype.enableScrollbars = function(t) {
                var e = this.scrollInitiators,
                    i = e.indexOf(t)
                if (-1 !== i && e.splice(i, 1), 0 === e.length) {
                    var n = document.body.style
                    n.position = "",
                        n.paddingRight = "",
                        n.top = "",
                        n.width = "",
                        window.scrollTo(this.scrollLeft, this.scrollRestorePosition),
                        this.onWindowResize(),
                        this.trigger("scrollbars", !0)
                }
            }, e.prototype.onFrame = function() {
                if (this.hasSizeChanged) {
                    this.hasSizeChanged = !1
                    var t = this.width,
                        e = this.height
                    this.trigger("pre-resize", t, e),
                        this.trigger("resize", t, e),
                        this.trigger("post-resize", t, e)
                }
                if (this.hasScrollChanged) {
                    this.hasScrollChanged = !1
                    var i = this.scrollLeft,
                        n = this.scrollTop
                    this.trigger("scroll", i, n),
                        this.trigger("post-scroll", i, n)
                }
            }, e.prototype.onWindowResize = function() {
                var t = Math.max(document.documentElement.clientWidth, 0),
                    e = Math.max(document.documentElement.clientHeight, 0)
                this.width == t && this.height == e || (this.width = t, this.height = e, this.hasSizeChanged = !0)
            }, e.prototype.onWindowScroll = function() {
                var t = a ? window.pageXOffset : l ? document.documentElement.scrollLeft : document.body.scrollLeft,
                    e = a ? window.pageYOffset : l ? document.documentElement.scrollTop : document.body.scrollTop
                this.scrollLeft == t && this.scrollTop == e || (this.scrollLeft = t, this.scrollTop = e, this.hasScrollChanged = !0)
            }, e.getInstance = function() {
                return o.b.get("Viewport", i)
            }, e = i = n.b([Object(o.a)("Viewport")], e)
        }(r.a)
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return o
    })),
        i.d(e, "b", (function() {
            return n
        }))
    var n = new (function() {
        function t() {
            this.instances = {},
                this.classes = {}
        }
        return t.prototype.set = function(t, e) {
            this.instances[t] = e
        }, t.prototype.get = function(t, e) {
            return this.instances[t] ? this.instances[t] : this.classes[t] ? this.instances[t] = new this.classes[t] : e ? this.instances[t] = new e : null
        }, t.prototype.register = function(t, e) {
            var i = this.instances[t]
            if (i) {
                if (!(i instanceof e))
                    throw new Error("Service `" + t + "` already initialized.")
            } else
                this.classes[t] = e
        }, t
    }())
    function o(t) {
        return function(e) {
            return n.register(t, e), e
        }
    }
    window && void 0 !== window.jQuery && n.set("jQuery", window.jQuery)
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return h
    }))
    var n = i(0),
        o = i(5),
        r = function(t) {
            function e(e, i) {
                var n = t.call(this) || this
                return n.name = e, n.code = DOMException[e], n.message = i, n
            }
            return n.c(e, t), e
        }(Error),
        s = function(t) {
            function e(e) {
                for (var i = t.call(this) || this, n = Object(o.c)(e.getAttribute("class") || ""), r = n ? n.split(/\s+/) : [], s = 0, a = r.length; s < a; s++)
                    i.push(r[s])
                return i.element = e, i
            }
            return n.c(e, t), e.prototype.updateClassName = function() {
                this.element.setAttribute("class", this.toString())
            }, e.prototype.checkTokenAndGetIndex = function(t) {
                if ("" === t)
                    throw new r("SYNTAX_ERR", "An invalid or illegal string was specified")
                if (/\s/.test(t))
                    throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character")
                return _.indexOf(this, t)
            }, e.prototype.item = function(t) {
                return this[t] || null
            }, e.prototype.contains = function(t) {
                return t += "", -1 !== this.checkTokenAndGetIndex(t)
            }, e.prototype.add = function() {
                for (var t = !1, e = 0, i = arguments.length; e < i; e++) {
                    var n = arguments[e] + "";
                    -1 === this.checkTokenAndGetIndex(n) && (this.push(n), t = !0)
                }
                t && this.updateClassName()
            }, e.prototype.remove = function() {
                for (var t = !1, e = 0, i = arguments.length; e < i; e++)
                    for (var n = arguments[e] + "", o = this.checkTokenAndGetIndex(n); -1 !== o;)
                        this.splice(o, 1),
                            t = !0,
                            o = this.checkTokenAndGetIndex(n)
                t && this.updateClassName()
            }, e.prototype.toggle = function(t, e) {
                t += ""
                var i = this.contains(t),
                    n = i ? !0 !== e && "remove" : !1 !== e && "add"
                return n && this[n](t), !0 === e || !1 === e ? e : !i
            }, e.prototype.toString = function() {
                return this.join(" ")
            }, e
        }(Array)
    function a() {
        return new s(this)
    }
    "document" in self && ("classList" in document.createElement("_") ? function() {
        var t = document.createElement("_")
        if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var e = function(t, e) {
                var i = t[e]
                t[e] = function(t) {
                    var e,
                        n = arguments.length
                    for (e = 0; e < n; e++)
                        t = arguments[e],
                            i.call(this, t)
                }
            }
            e(DOMTokenList.prototype, "add"),
                e(DOMTokenList.prototype, "remove")
        }
        if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var i = DOMTokenList.prototype.toggle
            DOMTokenList.prototype.toggle = function(t, e) {
                return 1 in arguments && !this.contains(t) == !e ? e : i.call(this, t)
            }
        }
        t = null
    }() : function(t) {
        if ("Element" in t) {
            var e = t.Element.prototype
            if (Object.defineProperty) {
                var i = {
                    get: a,
                    enumerable: !0,
                    configurable: !0
                }
                try {
                    Object.defineProperty(e, "classList", i)
                } catch (t) {
                    -2146823252 === t.number && (i.enumerable = !1, Object.defineProperty(e, "classList", i))
                }
            } else
                "__defineGetter__" in Object.prototype && e.__defineGetter__("classList", a)
        }
    }(self))
    var l = i(3),
        h = function(t) {
            function e(e) {
                var i = t.call(this, e || (e = {})) || this
                if (e.template) {
                    var n = e.template
                    i.el.innerHTML = "function" == typeof n ? n(i, e) : n
                }
                for (var o in e.appendTo && e.appendTo.appendChild(i.el), i.__initializers)
                    i.__initializers[o].invoke(i, e)
                return i
            }
            return n.c(e, t), e.prototype.remove = function() {
                if (this.isRemoved)
                    return this
                this.isRemoved = !0
                var e = l.b.get("ComponentRegistry")
                return e && e.handleRemove(this.el), t.prototype.remove.call(this)
            }, e.prototype.handleViewportResize = function(t) {
                return !1
            }, e
        }(Backbone.View)
}, function(t, e, i) {
    "use strict"
    function n(t) {
        return null == t ? "\\s" : t.source ? t.source : "[" + (t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "]")
    }
    function o(t, e) {
        return e = n(e), t.replace(new RegExp("^" + e + "+|" + e + "+$", "g"), "")
    }
    function r(t, e) {
        return e = n(e), t.replace(new RegExp("^" + e + "+"), "")
    }
    function s(t) {
        return o(t).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
    }
    i.d(e, "c", (function() {
        return o
    })),
        i.d(e, "b", (function() {
            return r
        })),
        i.d(e, "a", (function() {
            return s
        }))
}, function(t, e, i) {
    "use strict"
    i.d(e, "b", (function() {
        return n
    })),
        i.d(e, "a", (function() {
            return r
        }))
    var n,
        o = i(5)
    !function(t) {
        t[t.String = 0] = "String",
            t[t.Number = 1] = "Number",
            t[t.Int = 2] = "Int",
            t[t.Bool = 3] = "Bool",
            t[t.Class = 4] = "Class",
            t[t.DOM = 5] = "DOM",
            t[t.Enum = 6] = "Enum",
            t[t.Owner = 7] = "Owner",
            t[t.JSON = 8] = "JSON"
    }(n || (n = {}))
    var r = function() {
        function t(t) {
            this.optionName = t
        }
        return t.prototype.invoke = function(t, e) {
            var i
            if (e.el && this.attributeName && e.el.hasAttribute(this.attributeName) ? i = e.el.getAttribute(this.attributeName) : this.optionName && this.optionName in e ? i = e[this.optionName] : null != this.defaultValue && (i = this.defaultValue), void 0 === i)
                switch (this.type) {
                    case n.DOM:
                        i = this.createElement(t.el)
                        break
                    case n.Owner:
                        i = e.owner
                }
            if (void 0 !== i) {
                switch (this.type) {
                    case n.Number:
                        i = parseFloat(i)
                        break
                    case n.Int:
                        i = parseInt(i)
                        break
                    case n.String:
                        i = "" + i
                        break
                    case n.Bool:
                        i = "string" == typeof i ? "true" == (i = i.toLowerCase()) || "yes" == i || "1" == i : !!i
                        break
                    case n.Class:
                        i = i instanceof this.dataClass ? i : new this.dataClass(i)
                        break
                    case n.DOM:
                        "string" == typeof i && ((i = t.el.querySelector(i)) || (i = this.createElement(t.el)))
                        break
                    case n.Enum:
                        i = "string" == typeof i ? this.constraint[i] : parseInt(i)
                        break
                    case n.JSON:
                        "string" == typeof i && (i = JSON.parse(i))
                }
                this.propertyName ? t[this.propertyName] = i : this.optionName && (e[this.optionName] = i)
            }
        }, t.prototype.setProperty = function(t) {
            this.propertyName = t,
                this.optionName = Object(o.b)(t, "_"),
                this.attributeName = "data-" + Object(o.a)(this.optionName)
        }, t.prototype.createElement = function(t) {
            if (!this.tagName)
                return null
            var e = document.createElement(this.tagName)
            return this.className && (e.className = this.className), t.appendChild(e), e
        }, t.prototype.setOptions = function(t) {
            "defaultValue" in t && (this.defaultValue = t.defaultValue),
            "type" in t && ("string" == typeof t.type ? this.type = n[t.type] : this.type = t.type),
            "dataClass" in t && (this.dataClass = t.dataClass, this.type = n.Class),
            "attribute" in t && (this.attributeName = t.attribute),
            "constraint" in t && (this.constraint = t.constraint),
            "tagName" in t && (this.tagName = t.tagName),
            "className" in t && (this.className = t.className)
        }, t
    }()
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return o
    }))
    var n = i(12)
    function o(t, e) {
        return function(i) {
            return n.a.getInstance().registerPlugin(t, _.defaults({
                pluginClass: i
            }, e)), i
        }
    }
}, function(t, e, i) {
    "use strict"
    var n = i(14)
    i.d(e, "a", (function() {
        return n.a
    }))
    var o = i(6)
    i.d(e, "b", (function() {
        return o.b
    }))
}, function(t, e) {
    !function(t) {
        function e() {}
        _.extend(e.prototype, Backbone.Events),
            t.Events = e
    }(e)
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return a
    }))
    var n = i(0),
        o = (i(22), i(3)),
        r = i(9),
        s = i(15),
        a = function(t) {
            function e() {
                var e = t.call(this) || this
                return e.onFrame = _.bind(e.onFrame, e), Object(s.a)((function() {
                    e.lastTime = window.performance.now(),
                        window.requestAnimationFrame(e.onFrame)
                })), e
            }
            var i
            return n.c(e, t), i = e, e.prototype.onFrame = function(t) {
                var e = t - this.lastTime
                e > 0 && this.trigger("frame", e),
                    this.lastTime = t,
                    window.requestAnimationFrame(this.onFrame)
            }, e.getInstance = function() {
                return o.b.get("Dispatcher", i)
            }, e = i = n.b([Object(o.a)("Dispatcher")], e)
        }(r.Events)
}, function(t, e, i) {
    "use strict"
    var n = i(7)
    i.d(e, "a", (function() {
        return n.a
    }))
    var o = i(12)
    i.d(e, "b", (function() {
        return o.a
    }))
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return r
    }))
    var n = i(0),
        o = i(3),
        r = function() {
            function t() {
                this.groups = {}
            }
            var e
            return e = t, t.prototype.getGroup = function(t) {
                return this.groups.hasOwnProperty(t) || (this.groups[t] = {
                    hosts: [],
                    plugins: []
                }), this.groups[t]
            }, t.prototype.registerPlugin = function(t, e) {
                var i = this.getGroup(t)
                i.plugins.push(e)
                for (var n = 0, o = i.hosts; n < o.length; n++) {
                    o[n].registerPlugin(e)
                }
            }, t.prototype.registerHost = function(t, e) {
                var i = this.getGroup(t)
                i.hosts.push(e)
                for (var n = 0, o = i.plugins; n < o.length; n++) {
                    var r = o[n]
                    e.registerPlugin(r)
                }
            }, t.getInstance = function() {
                return o.b.get("PluginManager", e)
            }, t = e = n.b([Object(o.a)("PluginManager")], t)
        }()
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return a
    }))
    var n = i(0),
        o = i(2),
        r = i(3),
        s = function() {
            function t(t) {
                this.children = null,
                    this.component = null,
                    this.instance = null,
                    this.isCreated = !1,
                    this.hasResizeHandler = !1,
                    this.element = t
            }
            return t.prototype.discover = function(t) {
                for (var e = this.element.querySelectorAll(t.selector), i = 0, n = e.length; i < n; i++) {
                    var o = this.getNode(e[i])
                    o && o.setComponent(t)
                }
            }, t.prototype.create = function(t) {
                if (void 0 === t && (t = []), this.isCreated) {
                    if (this.children)
                        for (var e = 0, i = this.children; e < i.length; e++) {
                            i[e].create(t)
                        }
                    return t
                }
                return this.isCreated = !0, this.component ? this.createLocalComponents(t) : this.createChildComponents(t), t
            }, t.prototype.getNode = function(t) {
                var e = this.getElementPath(t)
                if (null == e)
                    throw new Error("The given element is not a child of this node.")
                return 0 == e.length ? this : this.addChildHierarchy(e)
            }, t.prototype.setInstance = function(t) {
                if (this.instance)
                    throw new Error("Component instance of node already set.")
                this.instance = t
            }, t.prototype.getElementPath = function(t) {
                for (var e = []; t && t.parentNode;) {
                    if (t == this.element)
                        return e
                    e.unshift(t),
                        t = t.parentNode
                }
                return null
            }, t.prototype.getComponents = function(t) {
                return void 0 === t && (t = []), this.instance && t.push(this.instance), this.getChildComponents(t)
            }, t.prototype.getChildComponents = function(t) {
                if (void 0 === t && (t = []), this.children)
                    for (var e = 0, i = this.children; e < i.length; e++) {
                        i[e].getComponents(t)
                    }
                return t
            }, t.prototype.removeElement = function(t) {
                var e = this.getElementPath(t)
                e && (0 == e.length ? this.remove() : this.removeChildHierarchy(e))
            }, t.prototype.createLocalComponents = function(t) {
                void 0 === t && (t = [])
                var e = this.component,
                    i = e.viewClass,
                    n = {
                        el: this.element
                    }
                return e.options.allowChildComponents && (this.createChildComponents(t), n.components = this.getChildComponents()), t.push(this.instance = new i(n)), t
            }, t.prototype.createChildComponents = function(t) {
                if (void 0 === t && (t = []), this.instance)
                    return t
                if (this.children)
                    for (var e = 0, i = this.children; e < i.length; e++) {
                        i[e].create(t)
                    }
                return t
            }, t.prototype.setComponent = function(t) {
                this.component && this.component != t ? console.log("Warn: Duplicate component assignment for `" + this.component.selector + "` and `" + t.selector + "`.") : this.component = t
            }, t.prototype.addChild = function(e) {
                if (e.parentNode != this.element)
                    return null
                for (var i = this.children || (this.children = []), n = 0, o = i.length; n < o; ++n)
                    if (i[n].element == e)
                        return i[n]
                var r = new t(e)
                return i.push(r), r
            }, t.prototype.addChildHierarchy = function(t) {
                var e
                return t.length && (e = this.addChild(t.shift())), t.length && e ? e.addChildHierarchy(t) : e
            }, t.prototype.remove = function() {
                if (this.children) {
                    for (var t = 0, e = this.children; t < e.length; t++) {
                        e[t].remove()
                    }
                    this.children = null
                }
                this.instance && (this.instance.remove(), this.instance = null)
            }, t.prototype.removeChildHierarchy = function(t) {
                if (!this.children)
                    return !this.instance
                for (var e = t.shift(), i = this.children, n = 0, o = i.length; n < o; n++) {
                    var r = i[n]
                    if (r.element == e) {
                        t.length ? r.removeChildHierarchy(t) && i.splice(n, 1) : (r.remove(), i.splice(n, 1))
                        break
                    }
                }
                return 0 == this.children.length && (this.children = null), !this.instance && !this.children
            }, t.prototype.resizeChildren = function() {
                var t = this.children
                if (t)
                    for (var e = 0, i = t; e < i.length; e++) {
                        i[e].handleViewportResize()
                    }
            }, t.prototype.handleViewportResize = function() {
                this.instance && this.instance.handleViewportResize(this) || this.resizeChildren()
            }, t
        }(),
        a = function() {
            function t() {
                this.components = []
            }
            var e
            return e = t, t.prototype.create = function(t) {
                void 0 === t && (t = document.body)
                for (var e = this.getRootNode().getNode(t), i = 0, n = this.components; i < n.length; i++) {
                    var o = n[i]
                    e.discover(o)
                }
                return e.create()
            }, t.prototype.getRootNode = function() {
                return this.rootNode || (this.rootNode = new s(document.body), o.a.getInstance().on("resize", this.onViewportResize, this)), this.rootNode
            }, t.prototype.getNode = function(t) {
                for (var e = this.getRootNode(), i = e.getElementPath(t), n = function() {
                    var t = i.shift()
                    if (!(e = _(e.children).find((function(e) {
                        return e.element == t
                    }))))
                        return {
                            value: null
                        }
                }; i.length;) {
                    var o = n()
                    if ("object" == typeof o)
                        return o.value
                }
                return e
            }, t.prototype.register = function(t, e, i) {
                this.components.push({
                    viewClass: t,
                    selector: e,
                    options: i
                })
            }, t.prototype.handleRemove = function(t) {
                this.rootNode.removeElement(t)
            }, t.prototype.onViewportResize = function() {
                this.rootNode.handleViewportResize()
            }, t.getInstance = function() {
                return r.b.get("ComponentRegistry", e)
            }, t.registerInstance = function(t) {
                var i = e.getInstance().getRootNode().getNode(t.el)
                i.instance != t && i.setInstance(t)
            }, t = e = n.b([Object(r.a)("ComponentRegistry")], t)
        }()
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return r
    }))
    var n = i(6),
        o = i(16)
    function r() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
        if (t.length > 0 && "string" == typeof t[0]) {
            var i = t.shift(),
                r = t.length ? t.shift() : void 0,
                s = "Option::" + i
            return function(t) {
                var e = o.a.get(t.prototype, s, (function() {
                    return new n.a(i)
                }))
                r && e.setOptions(r)
            }
        }
        var a = t.length ? t.shift() : void 0
        return function(t, e) {
            var i = "Option::" + e,
                r = o.a.get(t, i, (function() {
                    return new n.a(e)
                }))
            r.setProperty(e),
            a && r.setOptions(a)
        }
    }
}, function(t, e, i) {
    "use strict"
    function n(t) {
        "addEventListener" in document ? document.addEventListener("DOMContentLoaded", t) : window.attachEvent("onload", t)
    }
    i.d(e, "a", (function() {
        return n
    }))
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return n
    }))
    i(23)
    var n = function() {
        function t() {}
        return t.get = function(e, i, n) {
            var o = t.fromOwner(e)
            return o.hasOwnProperty(i) ? o[i] : o[i] ? o[i] = Object.create(o[i]) : o[i] = n()
        }, t.fromOwner = function(e) {
            return e.hasOwnProperty("__initializers") ? e.__initializers : e.__initializers ? e.__initializers = Object.create(e.__initializers) : e.__initializers = new t
        }, t
    }()
}, function(t, e, i) {}, function(t, e, i) {
    "use strict"
    i.d(e, "b", (function() {
        return s
    })),
        i.d(e, "a", (function() {
            return a
        })),
        i.d(e, "c", (function() {
            return l.a
        })),
        i.d(e, "d", (function() {
            return l.b
        }))
    var n = i(16),
        o = i(13),
        r = function() {
            function t(t) {
                this.propertyName = t
            }
            return t.prototype.invoke = function(t, e) {
                var i = t.el,
                    n = null
                if (this.multiple) {
                    n = []
                    for (var o = 0, r = i.querySelectorAll(this.selector); o < r.length; o++) {
                        var s = r[o]
                        n.push(this.createComponent(t, s, e))
                    }
                } else {
                    ((s = i.querySelector(this.selector)) || this.autoCreate) && (n = this.createComponent(t, s, e))
                }
                t[this.propertyName] = n
            }, t.prototype.createComponent = function(t, e, i) {
                var n,
                    r = {
                        owner: t
                    }
                if (e ? r.el = e : r.appendTo = t.el, this.childOptions) {
                    var s = "function" == typeof this.childOptions ? this.childOptions(i) : this.childOptions
                    r = _.defaults(r, s)
                }
                return n = this.isFactory ? this.childClass(r) : new this.childClass(r), o.a.getInstance().getRootNode().getNode(n.el).setInstance(n), n
            }, t.prototype.setOptions = function(t) {
                "selector" in t && (this.selector = t.selector),
                "multiple" in t && (this.multiple = t.multiple),
                "childClass" in t && (this.childClass = t.childClass),
                "childOptions" in t && (this.childOptions = t.childOptions),
                "autoCreate" in t && (this.autoCreate = t.autoCreate),
                "isFactory" in t && (this.isFactory = t.isFactory)
            }, t
        }()
    function s() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
        return t.length > 0 && "string" == typeof t[0] ? t[1] = _.defaults(t[1] || {}, {
            multiple: !0
        }) : t[0] = _.defaults(t[0] || {}, {
            multiple: !0
        }), a.apply(this, t)
    }
    function a() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e]
        if (t.length > 0 && "string" == typeof t[0]) {
            var i = t.shift(),
                o = t.length ? t.shift() : void 0,
                s = "ChildComponent::" + i
            return function(t) {
                n.a.get(t.prototype, s, (function() {
                    return new r(i)
                })).setOptions(o)
            }
        }
        var a = t.length ? t.shift() : void 0
        return function(t, e) {
            var i = "ChildComponent::" + e
            n.a.get(t, i, (function() {
                return new r(e)
            })).setOptions(a)
        }
    }
    var l = i(8)
}, function(t, e, i) {
    "use strict"
    i.d(e, "a", (function() {
        return o
    })),
        i.d(e, "b", (function() {
            return n.a
        }))
    var n = i(13)
    function o(t, e) {
        return e = _.defaults(e || {}, {
            allowChildComponents: !1
        }), function(i) {
            return n.a.getInstance().register(i, t, e), i
        }
    }
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    Date.now = Date.now || function() {
        return (new Date).getTime()
    }
    for (var i = ["webkit", "moz"], n = 0; n < i.length && !window.requestAnimationFrame; ++n)
        window.requestAnimationFrame = window[i[n] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[i[n] + "CancelAnimationFrame"] || window[i[n] + "CancelRequestAnimationFrame"]
    if (!window.requestAnimationFrame) {
        var o = 0
        window.requestAnimationFrame = function(t) {
            var e = (new Date).getTime(),
                i = Math.max(0, 16 - (e - o)),
                n = window.setTimeout((function() {
                    t(e + i)
                }), i)
            return o = e + i, n
        },
            window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
    }
    if ("performance" in window || (window.performance = {}), !("now" in window.performance)) {
        var r = Date.now()
        performance.timing && performance.timing.navigationStart && (r = performance.timing.navigationStart),
            window.performance.now = function() {
                return Date.now() - r
            }
    }
}, function(t, e) {
    var i
    "function" != typeof Object.create && (Object.create = (i = function() {}, function(t) {
        if (arguments.length > 1)
            throw Error("Second argument not supported")
        if ("object" != typeof t)
            throw TypeError("Argument must be an object")
        i.prototype = t
        var e = new i
        return i.prototype = null, e
    }))
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    if (!Element.prototype.matches) {
        var i = Element.prototype
        "webkitMatchesSelector" in i && (i.matches = i.webkitMatchesSelector),
        "msMatchesSelector" in i && (i.matches = i.msMatchesSelector),
        "mozMatchesSelector" in i && (i.matches = i.mozMatchesSelector)
    }
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    t.exports = '<button class="dsArtworkLayerPlayer__button">\n  <svg class="dsArtworkLayerPlayer__image pause" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EEEBE4" d="M15 12v26h7V12h-7zm13 0v26h7V12h-7z"/>\n  </svg>\n  <svg class="dsArtworkLayerPlayer__image play" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EEEBE4" d="M15 39V11l24.062 14"/>\n  </svg>\n</button>\n\n<div class="dsArtworkLayerPlayer__time">00:00</div>\n'
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    t.exports = '<div class="dsArtworkLayer__background"></div>\n\n<div class="dsArtworkLayer__controls">\n  <div class="dsPresentationOverlay__label">\n    <div class="dsPresentationOverlay__labelItem current"></div>\n  </div>\n\n  <button class="dsArtworkLayer__close" data-action="close">\n    <svg class="dsArtworkLayer__closeImage" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EDEAE3" d="M15.425 35.424l-.85-.848 9.578-9.578-9.577-9.573.85-.85L25 24.15l9.574-9.574.848.85-9.573 9.572 9.574 9.568-.848.85-9.574-9.57"\n      />\n    </svg>\n  </button>\n\n  <button class="dsPresentationOverlay__info" data-action="info">\n    <div class="dsPresentationOverlay__infoBorder">\n      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">\n        <path fill="#EDEAE3" d="M28.525 16.6c1.484 0 2.834-1.53 2.834-3.6.046-1.53-1.036-2.79-2.79-2.79-1.44 0-2.835 1.53-2.835 3.555 0 1.53 1.035 2.836 2.79 2.836zm-5.94 24.03c1.71 0 4.5-2.656 6.526-6.57l-.404-.358-3.15 3.96-2.116-.317c.45-1.213 5.042-13.77 5.042-14.804.044-1.26-2.837-2.834-3.916-2.834-1.98 0-4.59 2.925-6.436 6.885l.45.405 2.88-4.23 2.385.226c-.405 1.217-5.085 14.448-5.085 15.166-.045.9 2.88 2.474 3.825 2.474z"/>\n      </svg>\n    </div>\n  </button>\n\n  <div class="dsArtworkLayerPlayer"></div>\n\n  <button class="dsArtworkLayer__zoom in" data-action="zoom-in">\n    <svg class="dsArtworkLayer__zoomImage" width="25" height="25" viewBox="-2 -2 25 25">\n      <path fill="none" stroke="#FFF" stroke-linecap="square" d="M10.5 4.5v12M16.5 10.5h-12" />\n    </svg>\n  </button>\n\n  <button class="dsArtworkLayer__zoom out" data-action="zoom-out">\n    <svg class="dsArtworkLayer__zoomImage" width="25" height="25" viewBox="-2 -2 25 25">\n      <path fill="none" stroke="#FFF" stroke-linecap="square" d="M16.5 10.5h-12" />\n    </svg>\n  </button>\n\n  <div class="dsArtworkLayerPreview">\n    <div class="dsArtworkLayerPreview__rect">\n      <div class="dsArtworkLayerPreview__display"></div>\n    </div>\n  </div>\n</div>\n'
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    t.exports = '<div class="dsPeriodSlider__track">\n  <div class="dsPeriodSlider__region"></div>  \n  <div class="dsPeriodSlider__handle min"></div>\n  <div class="dsPeriodSlider__handle max"></div>  \n  <div class="dsPeriodSlider__caption"></div>  \n</div>\n'
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    t.exports = '<div class="dsPresentation__container"></div>\n<div class="dsPresentationOverlay">\n  <div class="dsPresentationOverlay__title"></div>\n  <div class="dsPresentationOverlay__label"></div>\n  <div class="dsPresentationOverlay__number"></div>\n\n  <button class="dsPresentationOverlay__closer" data-action="close">\n    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EDEAE3" d="M15.425 35.424l-.85-.848 9.578-9.578-9.577-9.573.85-.85L25 24.15l9.574-9.574.848.85-9.573 9.572 9.574 9.568-.848.85-9.574-9.57"/>\n    </svg>\n  </button>\n\n  <button class="dsPresentationOverlay__arrow previous" data-action="previous">\n    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EDEAE3" d="M31.646 39.354L17.293 25l14.353-14.354.708.708L18.707 25l13.647 13.646"/>\n    </svg>\n  </button>\n\n  <button class="dsPresentationOverlay__arrow next" data-action="next">\n    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EDEAE3" d="M18 10.646L32.354 25 18 39.354l-.707-.708L30.94 25 17.292 11.354"/>\n    </svg>\n  </button>\n\n  <button class="dsPresentationOverlay__info" data-action="info">\n    <div class="dsPresentationOverlay__infoBorder">\n      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">\n        <path fill="#EDEAE3" d="M28.525 16.6c1.484 0 2.834-1.53 2.834-3.6.046-1.53-1.036-2.79-2.79-2.79-1.44 0-2.835 1.53-2.835 3.555 0 1.53 1.035 2.836 2.79 2.836zm-5.94 24.03c1.71 0 4.5-2.656 6.526-6.57l-.404-.358-3.15 3.96-2.116-.317c.45-1.213 5.042-13.77 5.042-14.804.044-1.26-2.837-2.834-3.916-2.834-1.98 0-4.59 2.925-6.436 6.885l.45.405 2.88-4.23 2.385.226c-.405 1.217-5.085 14.448-5.085 15.166-.045.9 2.88 2.474 3.825 2.474z"/>\n      </svg>\n    </div>\n  </button>\n\n  <div class="dsArtworkLayerPlayer"></div>\n</div>\n'
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
    t.exports = '<div class="dsSearchPanelFlyout__panel">\n  <div class="dsSearchPanelFlyout__title">\n    <div class="dsSearchPanelFlyout__titleCaption"></div>\n    <div class="dsSearchPanelFlyout__field">\n      <label class="dsSearchPanelFlyout__fieldLabel"></label>\n      <input class="dsSearchPanelFlyout__fieldInput" />\n    </div>\n    <button class="dsSearchPanelFlyout__titleButton">\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">\n        <path fill="#EDEAE3" d="M10.823 11.672C9.68 12.626 8.207 13.2 6.6 13.2 2.955 13.2 0 10.245 0 6.6 0 2.955 2.955 0 6.6 0c3.645 0 6.6 2.955 6.6 6.6 0 1.607-.574 3.08-1.528 4.223l4.352 4.353-.848.848-4.353-4.352zM12 6.6c0-2.982-2.418-5.4-5.4-5.4S1.2 3.618 1.2 6.6 3.618 12 6.6 12 12 9.582 12 6.6z" />\n      </svg>\n    </button>\n  </div>\n\n  <div class="dsSearchPanelFlyout__viewport">\n    <div class="dsSearchPanelBrowser"></div>\n  </div>\n\n  <div class="dsSearchPanelFlyout__handle"></div>\n</div>\n'
}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {
    "use strict"
    i.r(e)
    i(20),
        i(21)
    var n = i(0),
        o = i(1),
        r = i(4),
        s = i(3),
        a = function() {
            function t(t) {
                this.isListening = !1,
                    this.handler = t,
                    this.onMouseDown = _.bind(this.onMouseDown, this),
                    this.onMouseMove = _.bind(this.onMouseMove, this),
                    this.onMouseUp = _.bind(this.onMouseUp, this),
                    t.delegate("mousedown", this.onMouseDown)
            }
            return t.prototype.remove = function() {
                this.handler.undelegate("mousedown", this.onMouseDown),
                    this.stopListening()
            }, t.prototype.takeState = function(t) {
                this.pointer = t.pointer,
                    t.pointer = null,
                t.isListening && (this.startListening(), t.stopListening())
            }, t.prototype.startListening = function() {
                if (!this.isListening) {
                    this.isListening = !0
                    var t = w.getInstance()
                    t.delegate("mousemove", null, this.onMouseMove),
                        t.delegate("mouseup", null, this.onMouseUp)
                }
            }, t.prototype.stopListening = function() {
                if (this.isListening) {
                    this.isListening = !1
                    var t = w.getInstance()
                    t.undelegate("mousemove", null, this.onMouseMove),
                        t.undelegate("mouseup", null, this.onMouseUp)
                }
            }, t.prototype.releasePointer = function() {
                this.pointer = null,
                    this.stopListening()
            }, t.prototype.onMouseDown = function(t) {
                if (!this.pointer && !this.handler.isMouseBlocked() && 0 === t.button) {
                    var e = this.handler.handlePointerDown(t, 0, t.pageX, t.pageY)
                    e && (t.preventDefault(), this.pointer = e, this.startListening())
                }
            }, t.prototype.onMouseMove = function(t) {
                this.pointer.setPosition(t.pageX, t.pageY),
                this.handler.handlePointerMove(t, this.pointer) || (this.handler.handlePointerCancel(t, this.pointer), this.releasePointer())
            }, t.prototype.onMouseUp = function(t) {
                this.pointer.setPosition(t.pageX, t.pageY),
                    this.handler.handlePointerUp(t, this.pointer),
                    this.releasePointer()
            }, t
        }(),
        l = window.navigator.pointerEnabled ? "" : window.navigator.msPointerEnabled ? "ms" : "",
        h = l ? "MSPointerDown" : "pointerdown",
        c = l ? "MSPointerMove" : "pointermove",
        u = l ? "MSPointerUp" : "pointerup",
        p = l ? "MSPointerCancel" : "pointercancel",
        d = "on" + h in window,
        f = function() {
            function t(t) {
                this.isListening = !1,
                    this.pointers = {},
                    this.numPointers = 0,
                    this.handler = t,
                    this.onPointerDown = _.bind(this.onPointerDown, this),
                    this.onPointerMove = _.bind(this.onPointerMove, this),
                    this.onPointerUp = _.bind(this.onPointerUp, this),
                    this.onPointerCancel = _.bind(this.onPointerCancel, this),
                    t.delegate(h, this.onPointerDown)
            }
            return t.prototype.remove = function() {
                this.handler.undelegate(h, this.onPointerDown),
                    this.stopListening()
            }, t.prototype.takeState = function(t) {
                this.pointers = t.pointers,
                    this.numPointers = t.numPointers,
                    t.pointers = {},
                    t.numPointers = 0,
                t.isListening && (this.startListening(), t.stopListening())
            }, t.prototype.startListening = function() {
                if (!this.isListening) {
                    this.isListening = !0
                    var t = w.getInstance()
                    t.delegate(c, null, this.onPointerMove),
                        t.delegate(u, null, this.onPointerUp),
                        t.delegate(p, null, this.onPointerCancel)
                }
            }, t.prototype.stopListening = function() {
                if (this.isListening) {
                    this.isListening = !1
                    var t = w.getInstance()
                    t.undelegate(c, null, this.onPointerMove),
                        t.undelegate(u, null, this.onPointerUp),
                        t.undelegate(p, null, this.onPointerCancel)
                }
            }, t.prototype.releasePointer = function(t) {
                delete this.pointers[t],
                    this.numPointers -= 1,
                !this.numPointers && this.isListening && this.stopListening()
            }, t.prototype.onPointerDown = function(e) {
                var i = t.toPointerType(e.pointerType)
                if (0 !== i || 0 === e.button) {
                    var n = this.handler.handlePointerDown(e, i, e.pageX, e.pageY)
                    n && (this.pointers[e.pointerId] = n, this.numPointers += 1),
                    this.numPointers && !this.isListening && this.startListening()
                }
            }, t.prototype.onPointerMove = function(t) {
                var e = this.pointers[t.pointerId]
                e && (e.setPosition(t.pageX, t.pageY), this.handler.handlePointerMove(t, e) || (this.handler.handlePointerCancel(t, e), this.releasePointer(t.pointerId)))
            }, t.prototype.onPointerUp = function(t) {
                var e = this.pointers[t.pointerId]
                e && (e.setPosition(t.pageX, t.pageY), this.handler.handlePointerUp(t, e), this.releasePointer(t.pointerId))
            }, t.prototype.onPointerCancel = function(t) {
                var e = this.pointers[t.pointerId]
                e && (this.handler.handlePointerCancel(t, e), this.releasePointer(t.pointerId))
            }, t.toPointerType = function(t) {
                switch (t) {
                    case "pen":
                        return 2
                    case "touch":
                        return 1
                }
                return 0
            }, t.isSupported = function() {
                return d
            }, t
        }(),
        m = "ontouchstart" in window
    m && window.addEventListener("touchmove", (function() {}), {
        passive: !1
    })
    var y,
        v = function() {
            function t(t) {
                this.isListening = !1,
                    this.pointers = {},
                    this.numPointers = 0,
                    this.handler = t,
                    this.onTouchStart = _.bind(this.onTouchStart, this),
                    this.onTouchMove = _.bind(this.onTouchMove, this),
                    this.onTouchEnd = _.bind(this.onTouchEnd, this),
                    this.onTouchCancel = _.bind(this.onTouchCancel, this),
                    t.delegate("touchstart", this.onTouchStart)
            }
            return t.prototype.remove = function() {
                this.handler.undelegate("touchstart", this.onTouchStart),
                    this.stopListening()
            }, t.prototype.takeState = function(t) {
                this.pointers = t.pointers,
                    this.numPointers = t.numPointers,
                    t.pointers = {},
                    t.numPointers = 0,
                t.isListening && (this.startListening(), t.stopListening())
            }, t.prototype.startListening = function() {
                this.isListening || (this.isListening = !0, document.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }), document.addEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                }), document.addEventListener("touchcancel", this.onTouchCancel))
            }, t.prototype.stopListening = function() {
                this.isListening && (this.isListening = !1, document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd), document.removeEventListener("touchcancel", this.onTouchCancel))
            }, t.prototype.releasePointer = function(t) {
                delete this.pointers[t],
                    this.numPointers -= 1,
                !this.numPointers && this.isListening && this.stopListening()
            }, t.prototype.eachChangedTouch = function(t, e) {
                for (var i = t.changedTouches.length, n = this.pointers, o = 0; o < i; o++) {
                    var r = t.changedTouches[o]
                    n[r.identifier] && e(r, n[r.identifier])
                }
            }, t.prototype.onTouchStart = function(t) {
                for (var e = t.changedTouches.length, i = 0; i < e; i++) {
                    var n = t.changedTouches[i],
                        o = this.handler.handlePointerDown(t, 1, n.pageX, n.pageY)
                    o && (this.pointers[n.identifier] = o, this.numPointers += 1)
                }
                this.numPointers && !this.isListening && this.startListening()
            }, t.prototype.onTouchMove = function(t) {
                var e = this
                this.eachChangedTouch(t, (function(i, n) {
                    n.setPosition(i.pageX, i.pageY),
                    e.handler.handlePointerMove(t, n) || (e.handler.handlePointerCancel(t, n), e.releasePointer(i.identifier))
                }))
            }, t.prototype.onTouchEnd = function(t) {
                var e = this
                this.eachChangedTouch(t, (function(i, n) {
                    n.setPosition(i.pageX, i.pageY),
                        e.handler.handlePointerUp(t, n),
                        e.releasePointer(i.identifier)
                })),
                    this.handler.blockMouseEvents()
            }, t.prototype.onTouchCancel = function(t) {
                var e = this
                this.eachChangedTouch(t, (function(i, n) {
                    e.handler.handlePointerCancel(t, n),
                        e.releasePointer(i.identifier)
                })),
                    this.handler.blockMouseEvents()
            }, t.isSupported = function() {
                return m
            }, t
        }(),
        g = function() {
            function t(t, e) {
                this.adapters = [],
                    this.blockMouseTimeout = null,
                    this.view = t,
                    this.selector = e,
                    v.isSupported() ? (this.adapters.push(new a(this)), this.adapters.push(new v(this))) : f.isSupported() ? this.adapters.push(new f(this)) : this.adapters.push(new a(this))
            }
            return t.prototype.remove = function() {
                this.adapters.forEach((function(t) {
                    return t.remove()
                })),
                    this.adapters = null
            }, t.prototype.delegate = function(t, e) {
                this.view.delegate(t, this.selector, e)
            }, t.prototype.undelegate = function(t, e) {
                this.view.undelegate(t, this.selector, e)
            }, t.prototype.blockMouseEvents = function() {
                var t = this
                this.blockMouseTimeout && clearTimeout(this.blockMouseTimeout),
                    this.blockMouseTimeout = setTimeout((function() {
                        t.blockMouseTimeout = null
                    }), 500)
            }, t.prototype.isMouseBlocked = function() {
                return !!this.blockMouseTimeout
            }, t.prototype.handlePointerDown = function(t, e, i, n) {
                return null
            }, t.prototype.handlePointerMove = function(t, e) {
                return !0
            }, t.prototype.handlePointerUp = function(t, e) {}, t.prototype.handlePointerCancel = function(t, e) {}, t
        }(),
        w = function(t) {
            function e() {
                var e = t.call(this, {
                    el: document.documentElement
                }) || this;
                (e.isClickPrevented = !1, e.onClick = _.bind(e.onClick, e), e.onPointerDown = _.bind(e.onPointerDown, e), e.delegate("click", null, e.onClick), "addEventListener" in e.el) ? f.isSupported() ? (e.el.addEventListener("pointerdown", e.onPointerDown, !0), e.el.addEventListener("mspointerdown", e.onPointerDown, !0)) : (e.el.addEventListener("mousedown", e.onPointerDown, !0), v.isSupported() && e.el.addEventListener("touchstart", e.onPointerDown, !0)) : new g(e).handlePointerDown = e.onPointerDown
                return e
            }
            var i
            return n.c(e, t), i = e, e.prototype.preventClick = function() {
                var t = this
                this.preventClickTimeout && clearTimeout(this.preventClickTimeout),
                    this.isClickPrevented = !0,
                    this.preventClickTimeout = setTimeout((function() {
                        t.isClickPrevented = !1,
                            t.preventClickTimeout = null
                    }), 500)
            }, e.prototype.onClick = function(t) {
                this.isClickPrevented && (t.preventDefault(), t.stopImmediatePropagation(), this.isClickPrevented = !1)
            }, e.prototype.onPointerDown = function(t) {
                this.trigger("pointerDown", t)
            }, e.getInstance = function() {
                return s.b.get("DocumentView", i)
            }, e = i = n.b([Object(s.a)("DocumentView")], e)
        }(r.a),
        b = function() {
            function t(t, e, i) {
                this.track = [],
                    this.trackPeriod = 100,
                    this.type = t,
                    this.x = this.startX = this.lastX = e,
                    this.y = this.startY = this.lastY = i
            }
            return t.prototype.setPosition = function(t, e) {
                this.lastX = this.x,
                    this.lastY = this.y,
                    this.x = t,
                    this.y = e,
                this.trackPeriod > 0 && this.addTrackingPoint(t, e)
            }, t.prototype.getRelativeDelta = function() {
                return {
                    x: this.x - this.lastX,
                    y: this.y - this.lastY
                }
            }, t.prototype.getAbsoluteDelta = function() {
                return {
                    x: this.x - this.startX,
                    y: this.y - this.startY
                }
            }, t.prototype.getAbsoluteDistance = function() {
                var t = this.x - this.startX,
                    e = this.y - this.startY
                return Math.sqrt(t * t + e * e)
            }, t.prototype.getVelocity = function() {
                this.reviseTrackingPoints()
                var t = this.track.length
                if (t < 2)
                    return {
                        x: 0,
                        y: 0
                    }
                var e = this.track[0],
                    i = this.track[t - 1],
                    n = (i.time - e.time) / 15
                return {
                    x: (i.x - e.x) / n,
                    y: (i.y - e.y) / n
                }
            }, t.prototype.addTrackingPoint = function(t, e, i) {
                void 0 === i && (i = +new Date),
                    this.reviseTrackingPoints(i),
                    this.track.push({
                        x: t,
                        y: e,
                        time: i
                    })
            }, t.prototype.reviseTrackingPoints = function(t) {
                for (void 0 === t && (t = +new Date); this.track.length > 0 && !(t - this.track[0].time <= this.trackPeriod);)
                    this.track.shift()
            }, t
        }()
    !function(t) {
        t[t.None = 0] = "None",
            t[t.Horizontal = 1] = "Horizontal",
            t[t.Vertical = 2] = "Vertical",
            t[t.Both = 3] = "Both"
    }(y || (y = {}))
    var C,
        x,
        S,
        O = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.state = 0, e.direction = y.Both, e.threshold = 5, e
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                return !0
            }, e.prototype.handleDragMove = function(t, e) {
                return !0
            }, e.prototype.handleDragEnd = function(t, e) {}, e.prototype.handleDragCancel = function(t, e) {}, e.prototype.handleClick = function(t, e) {}, e.prototype.handlePointerDown = function(t, e, i, n) {
                return 0 != this.state ? null : (0 == e && t.preventDefault(), this.state = 1, new b(e, i, n))
            }, e.prototype.handlePointerMove = function(t, e) {
                var i = e.getAbsoluteDelta()
                if (1 === this.state) {
                    if (0 == e.type && t.preventDefault(), Math.sqrt(i.x * i.x + i.y * i.y) < this.threshold)
                        return !0
                    if (this.direction == y.Horizontal) {
                        if (Math.abs(i.x) < Math.abs(i.y))
                            return !1
                    } else if (this.direction == y.Vertical && Math.abs(i.x) > Math.abs(i.y))
                        return !1
                    if (!this.handleDragStart(t, e))
                        return !1
                    t.stopImmediatePropagation(),
                        this.state = 2
                }
                return 2 === this.state && (t.stopImmediatePropagation(), t.preventDefault(), !!this.handleDragMove(t, e) || (this.state = 0, this.handleDragCancel(t, e), !1))
            }, e.prototype.handlePointerUp = function(t, e) {
                2 == this.state ? (this.handleDragEnd(t, e), w.getInstance().preventClick()) : this.handleClick(t, e),
                    this.state = 0
            }, e.prototype.handlePointerCancel = function(t, e) {
                2 == this.state && this.handleDragCancel(t, e),
                    this.state = 0
            }, e
        }(g),
        T = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.getLocalPosition = function(t) {
                var e = this.view.editor.getBoundingClientRect()
                return {
                    x: t.x - e.left - window.scrollX,
                    y: t.y - e.top - window.scrollY
                }
            }, e.prototype.getRectangle = function(t) {
                var e = this.view.editor,
                    i = e.clientWidth,
                    n = e.clientHeight,
                    o = this.start,
                    r = this.getLocalPosition(t),
                    s = Math.max(0, Math.min(o.x, r.x) / i),
                    a = Math.min(1, Math.max(o.x, r.x) / i),
                    l = Math.max(0, Math.min(o.y, r.y) / n)
                return {
                    x: s,
                    y: l,
                    width: a - s,
                    height: Math.min(1, Math.max(o.y, r.y) / n) - l
                }
            }, e.prototype.handleDragStart = function(t, e) {
                var i = this.view
                return !i.isCommiting && (this.start = this.getLocalPosition(e), this.initialCropArea = i.cropArea, !0)
            }, e.prototype.handleDragMove = function(t, e) {
                return this.view.setCropArea(this.getRectangle(e)), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                this.view.setCropArea(this.getRectangle(e)).commit()
            }, e.prototype.handleDragCancel = function(t, e) {
                this.view.setCropArea(this.initialCropArea)
            }, e.prototype.handleClick = function(t, e) {
                this.view.setCropArea(null).commit()
            }, e
        }(O),
        k = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.images = [],
                    i.isCommiting = !1,
                    i.initializeCenter(),
                    i.initializeCrop()
                var n = i.el.querySelectorAll("img")
                return i.images = _(n).map((function(t) {
                    return {
                        element: t,
                        src: t.src
                    }
                })), new T(i, ".dsAdminArtworks__editor"), i
            }
            return n.c(e, t), e.prototype.initializeCenter = function() {
                var t = document.createElement("div")
                t.className = "dsAdminArtworks__editorCenter",
                    this.editor.appendChild(t),
                    this.centerElement = t
                var e = JSON.parse(this.el.getAttribute("data-center"))
                this.setCenter(e)
            }, e.prototype.initializeCrop = function() {
                var t = document.createElement("div")
                t.className = "dsAdminArtworks__editorCrop empty",
                    this.editor.appendChild(t),
                    this.cropElement = t
                var e = this.el.getAttribute("data-crop")
                e && this.setCropArea(JSON.parse(e))
            }, e.prototype.commit = function() {
                var t = this
                if (!this.isCommiting) {
                    this.isCommiting = !0,
                        this.el.classList.add("commiting")
                    var e = this.el.getAttribute("data-commit")
                    this.cropArea && (e += "&crop=" + encodeURIComponent(JSON.stringify(this.cropArea))),
                        Backbone.ajax({
                            url: e
                        }).then((function(e) {
                            var i = Math.random().toString(36).substring(7)
                            _(t.images).each((function(t) {
                                var e = t.element,
                                    n = t.src
                                return e.src = n + "?v=" + i
                            })),
                                t.setCropArea(e.crop),
                                t.setCenter(e.center),
                                t.isCommiting = !1,
                                t.el.classList.remove("commiting")
                        }))
                }
            }, e.prototype.setCenter = function(t) {
                var e = this.centerElement
                e.style.left = 100 * t.x + "%",
                    e.style.top = 100 * t.y + "%",
                    this.center = t
            }, e.prototype.setCropArea = function(t) {
                this.cropArea = t
                var e = this.cropElement
                return e.classList.toggle("empty", !t), t && (e.style.left = 100 * t.x + "%", e.style.top = 100 * t.y + "%", e.style.width = 100 * t.width + "%", e.style.height = 100 * t.height + "%"), this
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsAdminArtworks__editor"
            })], e.prototype, "editor", void 0), e
        }(o.View),
        M = (i(24), function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            n.c(e, t),
                n.b([Object(o.ChildComponents)({
                    selector: ".dsAdminArtworks__item",
                    childClass: k
                })], e.prototype, "items", void 0),
                e = n.b([Object(o.Component)(".dsAdminArtworks")], e)
        }(o.View), i(25), i(26), function(t) {
            function e(e, i, n) {
                var o = t.call(this, e, n) || this
                return o.threshold = 8, o.callback = i, o
            }
            return n.c(e, t), e.prototype.handlePointerDown = function(t, e, i, n) {
                return this.isDown || this.downFilter && !this.downFilter(t) ? null : (this.isDown = !0, new b(e, i, n))
            }, e.prototype.handlePointerMove = function(t, e) {
                return e.getAbsoluteDistance() < this.threshold
            }, e.prototype.handlePointerUp = function(t, e) {
                if (this.isDown) {
                    this.isDown = !1
                    var i = null
                    if (this.selector)
                        for (var n = t.target; n && n.matches;) {
                            if (n.matches(this.selector)) {
                                i = n
                                break
                            }
                            n = n.parentNode
                        }
                    this.callback && this.callback.call(this.view, t, i, e) && w.getInstance().preventClick()
                }
            }, e.prototype.handlePointerCancel = function(t, e) {
                this.isDown = !1
            }, e
        }(g)),
        P = function() {
            function t(t) {
                this.values = {},
                t && this.parse(t)
            }
            return t.prototype.setValue = function(t, e) {
                return this.values[t] = e, this
            }, t.prototype.getValue = function(t, e) {
                return void 0 === e && (e = null), this.values[t] || e
            }, t.prototype.remove = function(t) {
                return delete this.values[t], this
            }, t.prototype.toString = function() {
                var t = this.values,
                    e = []
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        var n = encodeURIComponent(i),
                            o = t[i]
                        if (_.isArray(o))
                            for (var r = 0; r < o.length; r++)
                                e.push(n + "=" + encodeURIComponent(o[r]))
                        else
                            e.push(n + "=" + encodeURIComponent(o))
                    }
                return e.join("&")
            }, t.prototype.parse = function(t) {
                for (var e = t.split("&"), i = {}, n = 0; n < e.length; n++) {
                    var o = e[n].split("=", 2),
                        r = decodeURIComponent(o[0]),
                        s = decodeURIComponent(o[1])
                    r in i ? _.isArray(i[r]) ? i[r].push(s) : i[r] = [i[r], s] : i[r] = s
                }
                this.values = i
            }, t
        }(),
        L = function() {
            function t(t) {
                this.query = new P,
                t && this.parse(t)
            }
            return t.prototype.toString = function() {
                var t = [this.url],
                    e = this.query.toString()
                return "" != e && t.push("?", e), this.hash && t.push("#", this.hash), t.join("")
            }, t.prototype.parse = function(t) {
                var e = t.indexOf("#");
                -1 != e ? (this.hash = t.substring(e + 1), t = t.substr(0, e)) : this.hash = null
                var i = t.indexOf("?");
                -1 != i ? (this.query.parse(t.substring(i + 1)), t = t.substr(0, i)) : this.query.values = {},
                    this.url = t
            }, t
        }(),
        I = function() {
            function t() {
                this.intention = this.fetch()
            }
            var e
            return e = t, t.prototype.execute = function(t, e) {
                if (this.intention)
                    for (var i in e)
                        if (e.hasOwnProperty(i) && this.intention.name === i) {
                            e[i].apply(t),
                                this.save(null)
                            break
                        }
            }, t.prototype.intent = function(t) {
                var e = Math.random().toString(36).substr(2, 10)
                return this.save({
                    id: e,
                    pathname: window.location.pathname,
                    name: t.name
                }), e
            }, t.prototype.fetch = function() {
                var t = this.load()
                return t ? t.pathname != window.location.pathname || new L(window.location.href).query.getValue("intention") != t.id ? null : t : null
            }, t.prototype.load = function() {
                try {
                    var t = window.sessionStorage.getItem("dsIntentions")
                    return JSON.parse(t)
                } catch (t) {
                    return null
                }
            }, t.prototype.save = function(t) {
                try {
                    window.sessionStorage.setItem("dsIntentions", JSON.stringify(t))
                } catch (t) {}
            }, t.getInstance = function() {
                return s.b.get("Intentions", e)
            }, t = e = n.b([Object(s.a)("Intentions")], t)
        }(),
        V = i(9),
        A = i(2)
    x = window,
        S = "inner",
    "innerWidth" in window || (S = "client", x = document.documentElement || document.body),
        C = function() {
            return x[S + "Width"]
        }
    var E,
        N = function(t) {
            function e() {
                var e = t.call(this) || this
                e.index = 0,
                    e.breakpoints = [{
                        name: "xs",
                        minWidth: 0,
                        containerWidth: 0,
                        update: function(t, e) {
                            t.containerWidth = e - 30
                        }
                    }, {
                        name: "sm",
                        minWidth: 768,
                        containerWidth: 720
                    }, {
                        name: "md",
                        minWidth: 992,
                        containerWidth: 940
                    }, {
                        name: "lg",
                        minWidth: 1200,
                        containerWidth: 1140
                    }]
                var i = A.a.getInstance()
                return e.listenTo(i, "pre-resize", e.onViewportResize), e.update(), e
            }
            var i
            return n.c(e, t), i = e, e.prototype.setBreakpoints = function(t) {
                this.breakpoints = t,
                    this.update()
            }, e.prototype.getCurrent = function() {
                return this.breakpoints[this.index]
            }, e.prototype.update = function() {
                var t = A.a.getInstance()
                this.onViewportResize(t.width)
            }, e.prototype.onViewportResize = function(t) {
                for (var e = C(), i = 0, n = this.breakpoints.length; i < n - 1 && !(this.breakpoints[i + 1].minWidth > e);)
                    i += 1
                var o = this.breakpoints[i]
                o.update && o.update(o, t),
                (this.index != i || o.update) && (this.index = i, this.trigger("change", o))
            }, e.getInstance = function() {
                return s.b.get("Breakpoints", i)
            }, e = i = n.b([Object(s.a)("Breakpoints")], e)
        }(V.Events),
        D = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.workers = [], e
            }
            var i
            return n.c(e, t), i = e, e.prototype.add = function(t) {
                this.workers.push(new R({
                    markup: t
                }))
            }, e.getInstance = function() {
                return o.Services.get("FontObserver", i)
            }, e = i = n.b([Object(o.Service)("FontObserver")], e)
        }(o.Events),
        R = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.el.style.position = "absolute",
                    i.el.style.left = "-1024px",
                    i.el.style.top = "-1024px",
                    i.el.style.overflow = "hidden"
                var n = i.innerContent = document.createElement("div"),
                    o = i.innerWrapper = document.createElement("div")
                o.style.position = "absolute",
                    o.style.overflow = "hidden",
                    o.style.width = "100%",
                    o.style.height = "100%",
                    o.appendChild(n)
                var r = i.content = document.createElement("div")
                return r.style.position = "relative", r.innerHTML = e.markup, r.appendChild(o), i.el.appendChild(r), document.body.appendChild(i.el), i.reset(), i.el.addEventListener("scroll", (function() {
                    return i.onScroll()
                })), o.addEventListener("scroll", (function() {
                    return i.onScroll()
                })), i
            }
            return n.c(e, t), e.prototype.reset = function() {
                this.isReset = !0
                var t = this.content.offsetWidth,
                    e = this.content.offsetHeight
                this.el.style.width = t - 1 + "px",
                    this.el.style.height = e - 1 + "px",
                    this.el.scrollLeft = this.el.scrollWidth - t - 1,
                    this.el.scrollTop = this.el.scrollHeight - e - 1,
                    this.innerContent.style.width = t + 1 + "px",
                    this.innerContent.style.height = e + 1 + "px",
                    this.innerContent.scrollLeft = this.innerWrapper.scrollWidth - t + 1,
                    this.innerContent.scrollTop = this.innerWrapper.scrollHeight - e + 1,
                    this.isReset = !1
            }, e.prototype.onScroll = function() {
                this.isReset || (A.a.getInstance().triggerResize(), D.getInstance().trigger("fontLoaded"), this.reset())
            }, e
        }(o.View),
        H = function() {
            function t(t) {
                this._isVisible = !1,
                    this._min = Number.MAX_VALUE,
                    this._max = Number.MIN_VALUE,
                    this.target = t
            }
            return t.prototype.updateBounds = function(t, e, i) {
                var n = Number.MAX_VALUE,
                    o = Number.MIN_VALUE
                if (this.target.el)
                    o = (n = (r = this.target.el.getBoundingClientRect()).top + t) + (r.height || this.target.el.offsetHeight)
                else if (this.target.getBounds) {
                    var r
                    n = (r = this.target.getBounds()).min,
                        o = r.max
                }
                this._min == n && this._max == o || (this._min = n, this._max = o, this.updateVisibility(e, i))
            }, t.prototype.updateVisibility = function(t, e) {
                var i = this._max > t && this._min < e
                this._isVisible != i && (this._isVisible = i, this.target.setInViewport(i))
            }, t
        }(),
        j = function(t) {
            function e() {
                var e = t.call(this) || this
                e._items = [],
                    e._bleed = 500,
                    e._min = 0,
                    e._max = 0
                var i = e._viewport = A.a.getInstance()
                return e.listenTo(i, "post-resize", e.onViewportResize), e.listenTo(i, "post-scroll", e.onViewportScroll), e.updateBounds(), e
            }
            var i
            return n.c(e, t), i = e, e.prototype.register = function(t) {
                if (!_(this._items).some((function(e) {
                    return e.target === t
                }))) {
                    var e = new H(t)
                    e.updateBounds(this._viewport.scrollTop, this._min, this._max),
                        this._items.push(e)
                }
            }, e.prototype.update = function(t) {
                var e = _(this._items).find((function(e) {
                    return e.target === t
                }))
                e && e.updateBounds(this._viewport.scrollTop, this._min, this._max)
            }, e.prototype.updateBounds = function() {
                var t = this._bleed
                this._min = this._viewport.scrollTop - t,
                    this._max = this._viewport.scrollTop + this._viewport.height + t
            }, e.prototype.onViewportResize = function() {
                this.updateBounds()
                for (var t = this._min, e = this._max, i = this._items, n = this._viewport.scrollTop, o = 0, r = i.length; o < r; ++o)
                    i[o].updateBounds(n, t, e)
            }, e.prototype.onViewportScroll = function() {
                this.updateBounds()
                for (var t = this._min, e = this._max, i = this._items, n = 0, o = i.length; n < o; ++n)
                    i[n].updateVisibility(t, e)
            }, e.getInstance = function() {
                return o.Services.get("Visibility", i)
            }, e = i = n.b([Object(o.Service)("Visibility")], e)
        }(o.Events),
        B = (i(27), function(t) {
            function e() {
                var e = t.call(this, {
                    appendTo: document.body,
                    className: "dsFlashMessages"
                }) || this
                e.messages = []
                try {
                    var i = JSON.parse(document.body.getAttribute("data-messages"))
                    _(i).forEach((function(t) {
                        return e.addMessage(t)
                    }))
                } catch (t) {}
                return e
            }
            return n.c(e, t), e.prototype.setCurrent = function(t) {
                var e = this
                this.current = t
                var i = document.createElement("div")
                i.innerHTML = t.message,
                    i.className = "dsFlashMessages__message fadeIn " + t.type,
                    this.el.appendChild(i),
                    Q.delay(500).then((function() {
                        i.classList.remove("fadeIn")
                    })).delay(4e3).then((function() {
                        i.classList.add("fadeOut")
                    })).delay(500).then((function() {
                        e.el.removeChild(i),
                            e.current = null,
                        e.messages.length && e.setCurrent(e.messages.shift())
                    }))
            }, e.prototype.addMessage = function(t) {
                this.current ? this.messages.push(t) : this.setCurrent(t)
            }, e
        }(o.View)),
        z = i(8),
        F = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.transition = null, i.successor = null, i
            }
            return n.c(e, t), e.prototype.removeContent = function(t) {
                this.removeOldContent && t && t.remove()
            }, e.prototype.setContent = function(t, e) {
                if (this.content === t)
                    return Q.when()
                var i = this.content
                if (this.content = t, e = _.defaults(e || {}, this.getDefaultTransitionOptions()), this.successor && (this.successor.deferred.reject(null), this.removeContent(this.successor.newContent), this.successor = null), this.transition) {
                    if (!this.handleInterrupt()) {
                        var n = Q.defer()
                        return this.successor = {
                            deferred: n,
                            options: e,
                            newContent: t
                        }, n.promise
                    }
                    this.transition.deferred.reject(null)
                }
                this.appendNewContent && t && this.el.appendChild(t.el)
                var o = Q.defer()
                return this.transition = {
                    deferred: o,
                    options: e,
                    newContent: t,
                    oldContent: i
                }, this.handleTransition(t, i, e), o.promise
            }, e.prototype.handleInterrupt = function() {
                return !1
            }, e.prototype.handleTransitionEnd = function() {
                if (this.transition) {
                    this.transition.oldContent && this.removeContent(this.transition.oldContent)
                    var t = this.transition,
                        e = this.successor
                    if (t.deferred.resolve(), e) {
                        var i = _.defaults(this.successor, {
                            oldContent: t.newContent
                        })
                        this.appendNewContent && i.newContent && this.el.appendChild(i.newContent.el),
                            this.successor = null,
                            this.transition = i,
                            this.handleTransition(i.newContent, i.oldContent, i.options)
                    } else
                        this.transition = null
                }
            }, n.b([Object(z.a)({
                type: z.b.Bool,
                defaultValue: !1
            })], e.prototype, "appendNewContent", void 0), n.b([Object(z.a)({
                type: z.b.Bool,
                defaultValue: !1
            })], e.prototype, "removeOldContent", void 0), e
        }(r.a),
        W = ["ms", "Webkit", "Moz", "O"]
    function q(t) {
        var e
        E || (e = !0, E = document.createElement("div"), document.body.insertBefore(E, null))
        var i = t(E)
        return e && (document.body.removeChild(E), E = void 0), i
    }
    function U(t, e) {
        return q((function(i) {
            return function(t, e) {
                if (e(t))
                    return t
                t = t.substr(0, 1).toUpperCase() + t.substr(1)
                for (var i = 0, n = W.length; i < n; i++) {
                    var o = W[i],
                        r = o + t
                    if (e(r, o))
                        return i > 0 && (W.splice(i, 1), W.unshift(o)), r
                }
                return null
            }(t, (function(t, n) {
                return t in i.style && (e && e(t, n), !0)
            }))
        }))
    }
    function Y(t, e) {
        return "Webkit" == e ? "webkit" + t : "O" == e ? "o" + t : t.toLowerCase()
    }
    var X = i(15),
        G = {
            styleName: null,
            endEvent: null
        }
    Object(X.a)((function() {
        q((function(t) {
            G.styleName = U("animation", (function(t, e) {
                G.endEvent = Y("AnimationEnd", e)
            }))
        }))
    }))
    var K = {
        styleName: null,
        endEvent: null
    }
    function J(t, e) {
        K.styleName ? (t.style[K.styleName] = "none", e(), t.getBoundingClientRect(), t.style[K.styleName] = "") : e()
    }
    function $(t, e) {
        var i = Q.defer(),
            n = t.clientHeight,
            o = n,
            r = function(e) {
                e.target === t && (t.removeEventListener(K.endEvent, r), J(t, (function() {
                    t.style.height = "",
                        t.classList.remove("heightTransition"),
                        i.resolve()
                })))
            }
        return K.endEvent ? (J(t, (function() {
            t.classList.remove("heightTransition"),
                t.style.height = "",
                e(),
                o = t.clientHeight,
            n != o && (t.style.height = n + "px")
        })), n != o ? (t.addEventListener(K.endEvent, r), t.classList.add("heightTransition"), t.style.height = Math.ceil(o) + "px") : i.resolve()) : (e(), i.resolve()), i.promise
    }
    Object(X.a)((function() {
        q((function(t) {
            K.styleName = U("transition", (function(t, e) {
                K.endEvent = Y("TransitionEnd", e)
            }))
        }))
    }))
    var Z,
        tt = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return G.endEvent && i.delegate(G.endEvent, null, (function(t) {
                    return i.onAnimationEnd(t)
                })), i.container || (i.container = i.el), i
            }
            return n.c(e, t), e.prototype.getDefaultTransitionOptions = function() {
                return e.defaultTransitionOptions
            }, e.prototype.handleTransition = function(t, e, i) {
                var n = this
                if (i.withHeightTransition && null != i.className)
                    return $(this.container, (function() {
                        n.handleTransition(t, e, _.defaults({
                            withHeightTransition: !1
                        }, i))
                    }))
                t && t.el.classList.add("current"),
                e && e.el.classList.remove("current"),
                    this.trigger("swap", t, e),
                    null == i.className ? this.handleTransitionEnd() : (this.transitionClassName = i.className, this.container.classList.add(i.className), t && t.el.classList.add("transitionTarget"), e && e.el.classList.add("transitionOrigin"))
            }, e.prototype.onAnimationEnd = function(t) {
                var e = this,
                    i = this.transition
                i && t.target === this.container && (this.container.classList.remove(this.transitionClassName), i.newContent && i.newContent.el.classList.remove("transitionTarget"), i.oldContent && i.oldContent.el.classList.remove("transitionOrigin"), _.defer((function() {
                    return e.handleTransitionEnd()
                })))
            }, e.defaultTransitionOptions = {
                className: "transition"
            }, e
        }(F),
        et = i(5),
        it = /([^ ]+) (\d+)([WwXx])/
    !function(t) {
        t[t.Width = 0] = "Width",
            t[t.Density = 1] = "Density"
    }(Z || (Z = {}))
    var nt,
        ot = function() {
            function t(t) {
                var e = this
                this.sources = [],
                    _(t).isArray() ? _(t).each((function(t) {
                        return e.add(t)
                    })) : "number" == typeof t && t in Z ? this.mode = t : "string" == typeof t && this.parse(t)
            }
            return t.prototype.parse = function(t) {
                for (var e = 0, i = t.split(/,/); e < i.length; e++) {
                    var n = i[e]
                    n = Object(et.c)(n)
                    var o = it.exec(n)
                    if (o) {
                        var r = "W" === o[3] || "w" === o[3] ? Z.Width : Z.Density
                        this.add({
                            src: o[1],
                            bias: parseFloat(o[2]),
                            mode: r
                        })
                    } else
                        this.add({
                            src: n
                        })
                }
            }, t.prototype.add = function(t) {
                if (null != t.mode)
                    if (this.mode) {
                        if (this.mode != t.mode)
                            return void console.log("Mismatched image srcSet, all sources must use same mode.")
                    } else
                        this.mode = t.mode
                void 0 === t.bias && (t.bias = Number.MAX_VALUE),
                    this.sources.push(t),
                    this.sources.sort((function(t, e) {
                        return t.bias - e.bias
                    }))
            }, t.prototype.get = function(t) {
                var e = this.sources.length
                if (0 === e)
                    return ""
                var i = window.devicePixelRatio ? Math.max(1, Math.min(1.75, window.devicePixelRatio)) : 1
                this.mode === Z.Width && (i = t.offsetWidth * i)
                for (var n = 0, o = this.sources; n < o.length; n++) {
                    var r = o[n]
                    if (r.bias >= i)
                        return r.src
                }
                return this.sources[e - 1].src
            }, t
        }(),
        rt = function(t) {
            function e(e) {
                var i = t.call(this, e = _.defaults(e || {}, {
                    tagName: "img"
                })) || this
                return i.loadState = 0, i.isInViewport = !1, i.el.hasAttribute("src") && !/^data:/.test(i.el.getAttribute("src")) && (i.el.complete && void 0 !== i.el.naturalWidth && 0 != i.el.naturalWidth ? i.onLoad() : i.prepareLoadEvent()), e.disableVisibilityCheck || j.getInstance().register(i), i
            }
            return n.c(e, t), e.prototype.setSize = function(t, e, i, n) {
                var o = this.el.style
                o.width = Math.ceil(t) + "px",
                    o.height = Math.ceil(e) + "px",
                    o.left = null != i ? Math.floor(i) + "px" : "",
                    o.top = null != n ? Math.floor(n) + "px" : "",
                    this.update()
            }, e.prototype.setInViewport = function(t) {
                this.isInViewport != t && (this.isInViewport = t, this.update())
            }, e.prototype.update = function() {
                this.isInViewport && this.sourceSet && (this.prepareLoadEvent(), this.el.src = this.sourceSet.get(this.el))
            }, e.prototype.load = function() {
                this.deferred || (this.deferred = Q.defer())
                var t = this.deferred
                return 2 == this.loadState ? t.resolve() : (this.isInViewport = !0, this.update()), t.promise
            }, e.prototype.prepareLoadEvent = function() {
                0 == this.loadState && (this.loadState = 1, this.onLoad = _.bind(this.onLoad, this), this.delegate("load", null, this.onLoad))
            }, e.prototype.onLoad = function() {
                2 != this.loadState && (this.loadState = 2, this.el.classList.add("loaded"), this.undelegate("load", null, this.onLoad), this.trigger("load"), this.deferred && this.deferred.resolve(this))
            }, n.b([Object(o.Option)({
                type: o.OptionType.Int,
                attribute: "width"
            })], e.prototype, "nativeWidth", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Int,
                attribute: "height"
            })], e.prototype, "nativeHeight", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Class,
                dataClass: ot,
                attribute: "data-srcset"
            })], e.prototype, "sourceSet", void 0), e
        }(o.View)
    !function(t) {
        t[t.Cover = 0] = "Cover",
            t[t.Fit = 1] = "Fit",
            t[t.Stretch = 2] = "Stretch",
            t[t.Width = 3] = "Width",
            t[t.Height = 4] = "Height"
    }(nt || (nt = {}))
    var st,
        at = function(t) {
            function e(e) {
                var i = t.call(this, e || (e = {})) || this
                return i.image = new rt({
                    el: i.el.querySelector("img"),
                    disableVisibilityCheck: !0
                }), e.disableVisibilityCheck || j.getInstance().register(i), i.listenToOnce(i.image, "load", i.onImageLoad), i
            }
            var i
            return n.c(e, t), i = e, e.prototype.remove = function() {
                return this.image.remove(), t.prototype.remove.call(this)
            }, e.prototype.setSize = function(t, e, i) {
                return this.el.style.width = t + "px", this.el.style.height = e + "px", i && (this.fixedWidth = t, this.fixedHeight = e), this.update(t, e), this
            }, e.prototype.setInViewport = function(t) {
                this.inViewport != t && (this.inViewport = t, this.update(), this.image.setInViewport(t))
            }, e.prototype.setScaleMode = function(t) {
                this.scaleMode != t && (this.scaleMode = t, this.el.style.height = "", this.el.style.width = "", this.update())
            }, e.prototype.load = function() {
                return this.update(), this.image.load()
            }, e.prototype.update = function(t, e) {
                if ("number" != typeof t && (t = this.fixedWidth), "number" != typeof t && (t = this.el.offsetWidth), "number" != typeof e && (e = this.fixedHeight), "number" != typeof e && (e = this.el.offsetHeight), t || e) {
                    var n,
                        o,
                        r = this.measure(t, e)
                    switch (this.scaleMode) {
                        case nt.Cover:
                            n = i.calculateShift(t, r.width, this.focusX),
                                o = i.calculateShift(e, r.height, this.focusY, !0)
                            break
                        case nt.Fit:
                            n = (t - r.width) * this.focusX,
                                o = (e - r.height) * this.focusY
                            break
                        case nt.Width:
                            this.el.style.height = r.height + "px"
                            break
                        case nt.Height:
                            this.el.style.width = r.width + "px"
                    }
                    this.image.setSize(r.width, r.height, n, o)
                }
            }, e.prototype.measure = function(t, e, i, n) {
                void 0 === i && (i = this.scaleMode),
                void 0 === n && (n = this.maxScale)
                var o = this.image.nativeWidth,
                    r = this.image.nativeHeight,
                    s = 1
                switch (i) {
                    case nt.Stretch:
                        return {
                            width: t,
                            height: e
                        }
                    case nt.Cover:
                        s = Math.max(t / o, e / r)
                        break
                    case nt.Fit:
                        s = Math.min(t / o, e / r)
                        break
                    case nt.Width:
                        s = t / o
                        break
                    case nt.Height:
                        s = e / r
                }
                return {
                    width: o * (s = Math.min(s, n)),
                    height: r * s
                }
            }, e.prototype.onImageLoad = function() {
                this.el.classList.add("loaded"),
                    this.trigger("load")
            }, e.prototype.handleViewportResize = function() {
                return this.update(), !0
            }, e.calculateShift = function(t, e, i, n) {
                n && (i = 1 - i)
                var o = Math.round(-e * i + t / 2)
                return o > 0 && (o = 0), o < t - e && (o = t - e), o
            }, n.b([Object(o.Option)({
                type: "Enum",
                constraint: nt,
                defaultValue: nt.Fit
            })], e.prototype, "scaleMode", void 0), n.b([Object(o.Option)({
                defaultValue: Number.MAX_VALUE
            })], e.prototype, "maxScale", void 0), n.b([Object(o.Option)({
                type: "Number",
                defaultValue: .5
            })], e.prototype, "focusX", void 0), n.b([Object(o.Option)({
                type: "Number",
                defaultValue: .5
            })], e.prototype, "focusY", void 0), e = i = n.b([Object(o.Component)(".tuxImageWrap")], e)
        }(o.View)
    !function(t) {
        t[t.Empty = 0] = "Empty",
            t[t.Unstarted = 1] = "Unstarted",
            t[t.Buffering = 2] = "Buffering",
            t[t.Ended = 3] = "Ended",
            t[t.Paused = 4] = "Paused",
            t[t.Playing = 5] = "Playing",
            t[t.Error = 6] = "Error"
    }(st || (st = {}))
    var lt,
        ht = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.didPause = !1, i.direction = y.Horizontal, i
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                var i = this.view.player
                return i && i.getPlayState() == st.Playing ? (i.pause(), this.didPause = !0) : this.didPause = !1, !0
            }, e.prototype.handleDragMove = function(t, e) {
                var i = this.view,
                    n = i.player,
                    o = i.el.getBoundingClientRect(),
                    r = (e.x - o.left) / o.width
                return n && n.setCurrentTime(r * n.getDuration()), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                var i = this.view.player
                i && this.didPause && i.play()
            }, e.prototype.handleDragCancel = function(t, e) {
                this.handleDragEnd(t, e)
            }, e.prototype.handleClick = function(t, e) {
                this.view.emitClick ? this.view.trigger("click", t) : this.handleDragMove(t, e)
            }, e
        }(O)
    !function(t) {
        t[t.None = 0] = "None",
            t[t.Simple = 1] = "Simple",
            t[t.Chunks = 2] = "Chunks"
    }(lt || (lt = {}))
    var ct = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    className: "tuxSeekBar"
                })) || this
                return i.bufferChunks = [], e.player && i.setPlayer(e.player), new ht(i), i
            }
            return n.c(e, t), e.prototype.setPlayer = function(t) {
                this.player && this.stopListening(this.player),
                    this.player = t,
                t && (this.listenTo(t, "duration", this.onPlayerDuration), this.listenTo(t, "currentTime", this.onPlayerCurrentTime), this.listenTo(t, "buffer", this.onPlayerBuffer), this.onPlayerDuration(t.getDuration()), this.onPlayerCurrentTime(t.getCurrentTime()), this.onPlayerBuffer(t.getBuffer()))
            }, e.prototype.formatTime = function(t) {
                return e.formatTime(t)
            }, e.prototype.updateProgress = function() {
                this.progress.style.width = (this.player.getCurrentTime() / this.player.getDuration() * 100).toFixed(3) + "%"
            }, e.prototype.onPlayerDuration = function(t) {
                this.duration.innerHTML = this.formatTime(t),
                    this.updateProgress()
            }, e.prototype.onPlayerCurrentTime = function(t) {
                this.currentTime.innerHTML = this.formatTime(t),
                    this.updateProgress()
            }, e.prototype.onPlayerBuffer = function(t) {
                var e,
                    i = this.buffer,
                    n = this.bufferChunks,
                    o = this.bufferDisplayMode,
                    r = this.player.getDuration()
                switch (o) {
                    case lt.None:
                        e = 0
                        break
                    case lt.Simple:
                        e = 1
                        break
                    case lt.Chunks:
                        e = t.length
                }
                for (; n.length > e;)
                    i.removeChild(n.pop())
                for (; n.length < e;) {
                    (l = document.createElement("div")).className = "tuxSeekBar__bufferChunk",
                        i.appendChild(l),
                        n.push(l)
                }
                if (o == lt.Simple)
                    if ((l = n[0]).style.left = "0", t.length) {
                        var s = t.end(t.length - 1)
                        l.style.right = (100 * (1 - s / r)).toFixed(3) + "%"
                    } else
                        l.style.right = "0"
                else if (o == lt.Chunks)
                    for (var a = 0; a < e; a++) {
                        var l,
                            h = t.start(a)
                        s = t.end(a);
                        (l = n[a]).style.left = (h / r * 100).toFixed(3) + "%",
                            l.style.right = (100 * (1 - s / r)).toFixed(3) + "%"
                    }
            }, e.formatTime = function(t) {
                var e = Math.floor(t / 60),
                    i = Math.round(t % 60)
                return (e < 10 ? "0" : "") + e.toString() + ":" + (i < 10 ? "0" : "") + i.toString()
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".tuxSeekBar__currentTime",
                tagName: "div",
                className: "tuxSeekBar__currentTime"
            })], e.prototype, "currentTime", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".tuxSeekBar__duration",
                tagName: "div",
                className: "tuxSeekBar__duration"
            })], e.prototype, "duration", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".tuxSeekBar__progress",
                tagName: "div",
                className: "tuxSeekBar__progress"
            })], e.prototype, "progress", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".tuxSeekBar__buffer",
                tagName: "div",
                className: "tuxSeekBar__buffer"
            })], e.prototype, "buffer", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Enum,
                constraint: lt,
                defaultValue: lt.Simple
            })], e.prototype, "bufferDisplayMode", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Bool
            })], e.prototype, "emitClick", void 0), e
        }(o.View),
        ut = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    className: "tuxPlayButton"
                })) || this
                return new M(i, i.onClick), e.player && i.setPlayer(e.player), i
            }
            return n.c(e, t), e.prototype.setPlayer = function(t) {
                this.player != t && (this.player && this.stopListening(this.player), this.player = t, t && (this.listenTo(t, "state", this.onStateChanged), this.onStateChanged(t.getPlayState())))
            }, e.prototype.onStateChanged = function(t) {
                this.playStateClass && this.el.classList.remove(this.playStateClass),
                    this.playStateClass = st[t].toLowerCase(),
                    this.el.classList.add(this.playStateClass)
            }, e.prototype.onClick = function() {
                var t = this.player
                if (t) {
                    if (!t.getTrack())
                        return this.onClickEmpty(), !0
                    var e = t.getPlayState()
                    e == st.Playing ? this.player.pause() : (e == st.Ended && t.setCurrentTime(0), this.player.play())
                }
                return !0
            }, e.prototype.onClickEmpty = function() {
                this.trigger("playEmpty")
            }, e
        }(r.a),
        pt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            return n.c(e, t), i = e, e.getInstance = function() {
                return o.Services.get("AudioService", i)
            }, e = i = n.b([Object(o.Service)("AudioService")], e)
        }(function(t) {
            function e(e) {
                var i = t.call(this, {
                    tagName: "audio",
                    className: "tuxAudioPlayer"
                }) || this
                return i.state = st.Empty, i.currentTime = 0, i.duration = 0, i.volume = 0, i.volume = i.el.volume, i.onStateChanged = _.bind(i.onStateChanged, i), i.onDurationChange = _.bind(i.onDurationChange, i), i.onCurrentTimeChange = _.bind(i.onCurrentTimeChange, i), i.onVolumeChange = _.bind(i.onVolumeChange, i), i.onBufferChange = _.bind(i.onBufferChange, i), i.delegate("play", null, i.onStateChanged), i.delegate("playing", null, i.onStateChanged), i.delegate("ended", null, i.onStateChanged), i.delegate("pause", null, i.onStateChanged), i.delegate("error", null, i.onStateChanged), i.delegate("timeupdate", null, i.onCurrentTimeChange), i.delegate("durationchange", null, i.onDurationChange), i.delegate("volumechange", null, i.onVolumeChange), i.delegate("progress", null, i.onBufferChange), i
            }
            return n.c(e, t), e.prototype.play = function() {
                this.track && this.el.play()
            }, e.prototype.pause = function() {
                this.track && this.el.pause()
            }, e.prototype.stop = function() {
                this.track && (this.el.pause(), this.setCurrentTime(0))
            }, e.prototype.previous = function() {
                this.skip(-1)
            }, e.prototype.next = function() {
                this.skip(1)
            }, e.prototype.skip = function(t) {
                var e = this.trackList
                if (e) {
                    var i = e.indexOf(this.track);
                    -1 != i && ((i += t) < 0 || i >= e.length || this.setTrack(this.trackList.at(i)))
                }
            }, e.prototype.getPlayState = function() {
                return this.state
            }, e.prototype.getDuration = function() {
                return this.duration
            }, e.prototype.getCurrentTime = function() {
                return this.currentTime
            }, e.prototype.getBuffer = function() {
                return this.el.buffered
            }, e.prototype.setCurrentTime = function(t) {
                this.el.currentTime = t
            }, e.prototype.getVolume = function() {
                return this.volume
            }, e.prototype.setVolume = function(t) {
                this.el.volume = t
            }, e.prototype.getTrack = function() {
                return this.track
            }, e.prototype.setTrack = function(t) {
                return this.track == t || (this.trackList && -1 == this.trackList.indexOf(t) && this.setTrackList(null), this.track = t, t ? (this.el.src = t.getSource(), this.duration = t.getDuration(), this.state = st.Unstarted) : (this.el.src = "", this.duration = 0, this.state = st.Empty), this.currentTime = 0, this.trigger("currentTime", 0), this.trigger("state", this.state), this.trigger("duration", this.duration), this.trigger("track", t)), this
            }, e.prototype.getTrackList = function() {
                return this.trackList
            }, e.prototype.setTrackList = function(t) {
                return this.trackList = t, this.track && -1 == t.indexOf(this.track) && this.setTrack(null), this.trackList = t, this
            }, e.prototype.onStateChanged = function(t) {
                var e = this.state
                switch (t.type) {
                    case "loadstart":
                        e = st.Buffering
                        break
                    case "play":
                    case "playing":
                        e = st.Playing
                        break
                    case "ended":
                        e = st.Ended
                        break
                    case "pause":
                        e = st.Paused
                        break
                    case "error":
                        e = st.Error
                }
                this.state != e && (this.state = e, this.trigger("state", e)),
                e == st.Ended && this.trackList && this.next()
            }, e.prototype.onCurrentTimeChange = function(t) {
                var e = this.el.currentTime
                this.currentTime != e && (this.currentTime = e, this.trigger("currentTime", e))
            }, e.prototype.onDurationChange = function(t) {
                var e = this.el.duration
                this.duration != e && (this.duration = e, this.track.setDuration(e), this.trigger("duration", e))
            }, e.prototype.onVolumeChange = function(t) {
                var e = this.el.volume
                this.volume != e && (this.volume = e, this.trigger("volume", e))
            }, e.prototype.onBufferChange = function(t) {
                this.trigger("buffer", this.el.buffered)
            }, e
        }(r.a)),
        dt = (i(28), function(t) {
            function e(e) {
                var i = t.call(this, e) || this,
                    n = i.player = pt.getInstance()
                return i.playButton.setPlayer(n), i.listenTo(i.playButton, "playEmpty", i.onPlayEmpty), i.listenTo(n, "state", i.onState), i.listenTo(n, "track", i.onTrack), i
            }
            return n.c(e, t), e.prototype.onState = function(t) {
                t === st.Ended ? this.el.classList.remove("hasTrack") : t === st.Playing && this.el.classList.add("hasTrack")
            }, e.prototype.onTrack = function(t) {
                var e = this.player = pt.getInstance()
                this.seekbar.setPlayer(e),
                    this.el.classList.toggle("hasTrack", !!t)
            }, e.prototype.onPlayEmpty = function() {
                this.trigger("playFirstTrack")
            }, n.b([Object(o.ChildComponent)({
                childClass: ut,
                selector: ".dsPlayButton"
            })], e.prototype, "playButton", void 0), n.b([Object(o.ChildComponent)({
                childClass: ct,
                selector: ".tuxSeekBar"
            })], e.prototype, "seekbar", void 0), e = n.b([Object(o.Component)(".dsAudioPlayer")], e)
        }(o.View)),
        ft = function() {
            function t(t, e) {
                this.x = t,
                    this.y = e
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y)
            }, t.prototype.equals = function(t) {
                return this.x == t.x && this.y == t.y
            }, t.prototype.convert = function(e) {
                return t.convert(e)
            }, t.prototype.length = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, t.prototype.reset = function() {
                return this.x = 0, this.y = 0, this
            }, t.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this
            }, t.prototype.add = function(t, e) {
                return mt(t) ? (this.x += t.x, this.y += t.y) : (this.x += t, this.y += e), this
            }, t.prototype.subtract = function(t, e) {
                return mt(t) ? (this.x -= t.x, this.y -= t.y) : (this.x -= t, this.y -= e), this
            }, t.prototype.min = function(t, e) {
                return mt(t) ? (this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y)) : (this.x > t && (this.x = t), this.y > e && (this.y = e)), this
            }, t.prototype.max = function(t, e) {
                return mt(t) ? (this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y)) : (this.x < t && (this.x = t), this.y < e && (this.y = e)), this
            }, t.prototype.scale = function(t) {
                return this.x *= t, this.y *= t, this
            }, t.prototype.setValues = function(t) {
                return this.x = t[0], this.y = t[1], this
            }, t.prototype.getValues = function() {
                return [this.x, this.y]
            }, t.convert = function(e) {
                return e instanceof t ? e : mt(e) ? new t(1 * e.x, 1 * e.y) : _.isArray(e) && e.length >= 2 ? new t(parseFloat(e[0]), parseFloat(e[1])) : null
            }, t
        }()
    function mt(t) {
        return "object" == typeof t && "x" in t && "y" in t
    }
    var yt = i(10),
        vt = function() {
            function t() {
                this.animations = [],
                    this.onFrame = _.bind(this.onFrame, this),
                    yt.a.getInstance().on("frame", this.onFrame)
            }
            var e
            return e = t, t.prototype.add = function(t) {
                for (var e = this.animations, i = t.accessor, n = e.length, o = 0; o < n;) {
                    var r = e[o]
                    r.accessor.equals(i) ? (r.stop(), e.splice(o, 1), n--) : o++
                }
                e.push(t)
            }, t.prototype.stop = function(t, e) {
                for (var i = 0, n = this.animations.slice(); i < n.length; i++) {
                    var o = n[i],
                        r = o.accessor
                    t && r.target != t || (e && r.property != e || this.remove(o))
                }
            }, t.prototype.remove = function(t) {
                var e = this.animations.indexOf(t);
                -1 != e && (t.stop(), this.animations.splice(e, 1))
            }, t.prototype.onFrame = function(t) {
                for (var e = t / 16.666, i = 0, n = this.animations.slice(); i < n.length; i++) {
                    var o = n[i]
                    o.update(t, e) || this.remove(o)
                }
            }, t.getInstance = function() {
                return s.b.get("AnimationManager", e)
            }, t = e = n.b([Object(s.a)("AnimationManager")], t)
        }()
    function gt(t, e) {
        vt.getInstance().stop(t, e)
    }
    var wt = i(12),
        bt = i(11),
        Ct = bt.b.getInstance().getGroup("accessor"),
        xt = function() {
            function t(t, e) {
                this.target = t,
                    this.property = e
            }
            return t.prototype.equals = function(t) {
                return this.target == t.target && this.property == t.property
            }, t.create = function(t, e) {
                for (var i = null, n = 0, o = 0, r = Ct.plugins; o < r.length; o++) {
                    var s = r[o]
                    if (s.isApplicable(t, e)) {
                        var a = s.priority ? s.priority : 0;
                        (!i || n < a) && (i = s.pluginClass, n = a)
                    }
                }
                return i ? new i(t, e) : null
            }, t
        }()
    function St(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
    }
    var Ot = function() {
            function t(t, e) {
                this.state = 0,
                    this.accessor = t,
                    this.finishedCallback = e.finished,
                    this.stoppedCallback = e.stopped,
                    this.removedCallback = e.removed
            }
            return t.prototype.setState = function(t) {
                this.state != t && (6 & this.state || (this.state = t, 2 == t && this.finishedCallback && this.finishedCallback(), 4 == t && this.stoppedCallback && this.stoppedCallback(), 6 & t && this.removedCallback && this.removedCallback(), this.deferred && (2 == t ? this.deferred.resolve() : 4 == t && this.deferred.reject(null))))
            }, t.prototype.getPromise = function() {
                return this.deferred || (this.deferred = Q.defer()), this.deferred.promise
            }, t.prototype.stop = function() {
                this.setState(4)
            }, t
        }(),
        _t = {
            to: void 0,
            duration: 500,
            delay: 0,
            easing: St
        },
        Tt = wt.a.getInstance().getGroup("tween"),
        kt = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return i = _.defaults(i, _t), n.currentTime = -i.delay, n.duration = i.duration, n.easing = i.easing, n.initialValue = i.from ? i.from : e.getValue(), n.targetValue = i.to, n.initialize(i), n
            }
            return n.c(e, t), e.prototype.initialize = function(t) {}, e.prototype.update = function(t) {
                return !(6 & this.state) && (this.currentTime += t, this.currentTime >= this.duration ? (this.currentTime = this.duration, this.accessor.setValue(this.targetValue), this.setState(2), !1) : (this.currentTime > 0 && (this.accessor.setValue(this.getCurrentValue()), this.setState(1)), !0))
            }, e.create = function(t, e) {
                for (var i = t.getValue(), n = 0, o = Tt.plugins; n < o.length; n++) {
                    var r = o[n].tryCreate(t, e, i)
                    if (null != r)
                        return r
                }
                return null
            }, e
        }(Ot)
    function Mt(t, e, i) {
        var n = xt.create(t, e)
        if (null == n)
            throw new Error('Could not create an accessor for the property "' + e + '" on "' + t + '", did you import all necessary accessor classes?')
        var o = kt.create(n, i)
        if (null == o)
            throw new Error('Could not create a tween for the property "' + e + '" on "' + t + '", did you import all necessary tween classes?')
        return vt.getInstance().add(o), o
    }
    var Pt = i(7)
    function Lt(t) {
        return "object" == typeof t && t.getValues && "function" == typeof t.getValues && t.setValues && "function" == typeof t.setValues
    }
    (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var i
        n.c(e, t),
            i = e,
            e.prototype.getCurrentValue = function() {
                return this.initialValue.lerp(this.targetValue, this.easing(this.currentTime, 0, 1, this.duration))
            },
            e.tryCreate = function(t, e, n) {
                if ("object" == typeof (r = n) && r.lerp && "function" == typeof r.lerp) {
                    var o = n.convert(e.to)
                    if (null == o)
                        throw new Error("Type mismatch: Tween initial and target value must be of the same type.")
                    return e.to = o, new i(t, e)
                }
                return null
                var r
            },
            e = i = n.b([Object(Pt.a)("tween", {
                tryCreate: i.tryCreate
            })], e)
    })(kt),
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.initialize = function(t) {
                    this.valueChange = this.targetValue - this.initialValue
                },
                e.prototype.getCurrentValue = function() {
                    return this.easing(this.currentTime, this.initialValue, this.valueChange, this.duration)
                },
                e.tryCreate = function(t, e, n) {
                    if ("number" != typeof n)
                        return null
                    if ("number" != typeof e.to)
                        throw new Error("Type mismatch: Tween target value must be numeric.")
                    return new i(t, e)
                },
                e = i = n.b([Object(Pt.a)("tween", {
                    tryCreate: i.tryCreate
                })], e)
        }(kt),
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.initialize = function(t) {
                    for (var e = this.initialValue.getValues(), i = this.targetValue.getValues(), n = 0, o = e.length; n < o; n++)
                        i[n] -= e[n]
                    this.initialValues = e,
                        this.deltaValues = i
                },
                e.prototype.getCurrentValue = function() {
                    for (var t = this.currentTime, e = this.duration, i = this.initialValues, n = this.deltaValues, o = [], r = 0, s = i.length; r < s; r++)
                        o[r] = this.easing(t, i[r], n[r], e)
                    return this.initialValue.clone().setValues(o)
                },
                e.tryCreate = function(t, e, n) {
                    if (Lt(n)) {
                        var o = n.convert(e.to)
                        if (null == o)
                            throw new Error("Type mismatch: Tween initial and target value must be of the same type.")
                        return e.to = o, new i(t, e)
                    }
                    return null
                },
                e = i = n.b([Object(Pt.a)("tween", {
                    tryCreate: i.tryCreate
                })], e)
        }(kt)
    function It(t, e, i, n) {
        return t == n ? e + i : i * (1 - Math.pow(2, -10 * t / n)) + e
    }
    function Vt(t, e, i, n) {
        return (t /= n / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
    }
    var At = function() {
            function t() {}
            return t.prototype.intersects = function(t) {
                return !(this.xMin > t.xMax || this.xMax < t.xMin || this.yMin > t.yMax || this.yMax < t.yMin)
            }, t
        }(),
        Et = [{
            x: !1,
            y: !1
        }, {
            x: !0,
            y: !1
        }, {
            x: !1,
            y: !0
        }, {
            x: !0,
            y: !0
        }],
        Nt = 0,
        Dt = function(t) {
            function e(e) {
                var i = t.call(this) || this
                return i.border = 15, i.depth = 0, i.loadState = 0, i.x = 0, i.y = 0, i.handleLoad = function() {
                    i.loadState = 2,
                        i.pyramid.handleTileLoad(i)
                }, i.pyramid = e, i.id = "tile-" + Nt++, i
            }
            return n.c(e, t), e.prototype.getBorderOffset = function() {
                return Math.pow(2, this.pyramid.levelsCount - this.depth - 1)
            }, e.prototype.getUrl = function() {
                var t = this.depth,
                    e = this.pyramid,
                    i = this.x,
                    n = this.y
                return "" + e.levels[t].path + i + "_" + n + "." + e.format
            }, e.prototype.isLoaded = function() {
                return 2 === this.loadState
            }, e.prototype.load = function() {
                if (0 === this.loadState && (0 === this.depth || this.pyramid.isInitialImageLoaded)) {
                    var t = document.createElement("img")
                    t.onload = this.handleLoad,
                        t.src = this.getUrl(),
                        this.loadState = 1,
                        this.image = t
                }
            }, e.prototype.split = function() {
                var t = this
                if (this.children)
                    return this.children
                var i = this,
                    n = i.border,
                    o = i.depth,
                    r = i.pyramid,
                    s = i.x,
                    a = i.y,
                    l = .5 * Math.pow(2, r.levelsCount - o - 1),
                    h = r.tileSize,
                    c = r.levels[o + 1],
                    u = [],
                    p = this.xMin + h * l,
                    d = p < r.nativeWidth
                p = Math.min(r.nativeWidth, p)
                var f = this.yMin + h * l,
                    m = f < r.nativeHeight
                return f = Math.min(r.nativeHeight, f), Et.forEach((function(i) {
                    if ((!i.x || d) && (!i.y || m)) {
                        var l = 0
                        8 & n && !i.x && (l |= 8),
                        (2 & n && i.x || !d) && (l |= 2),
                        1 & n && !i.y && (l |= 1),
                        (4 & n && i.y || !m) && (l |= 4)
                        var y = 2 * s + (i.x ? 1 : 0),
                            v = 2 * a + (i.y ? 1 : 0),
                            g = y * h,
                            w = Math.min(c.width, g + h),
                            b = v * h,
                            C = Math.min(c.height, b + h),
                            x = new e(r)
                        x.width = w - g,
                            x.width = C - b,
                            x.x = y,
                            x.y = v,
                            x.border = l,
                            x.xMin = i.x ? p : t.xMin,
                            x.xMax = i.x ? t.xMax : p,
                            x.yMin = i.y ? f : t.yMin,
                            x.yMax = i.y ? t.yMax : f,
                            x.depth = o + 1,
                            u.push(x)
                    }
                })), this.children = u, u
            }, e
        }(At),
        Rt = Math.log(2),
        Ht = function(t) {
            function e(e, i) {
                var n = t.call(this) || this
                return n.nativeWidth = i.width, n.nativeHeight = i.height, n.tileSize = i.tile, n.tileOverlap = i.overlap, n.format = i.format, n.basePath = e, n.levels = n.createLevels(), n.levelsCount = n.levels.length, n.tile = n.createInitialTile(), n
            }
            return n.c(e, t), e.prototype.createLevels = function() {
                for (var t = this, e = this.tileSize, i = [], n = this.nativeWidth, o = this.nativeHeight, r = 0, s = 0; n > 1 || o > 1;)
                    (n > e || o > e) && (s = r),
                    s >= r - 1 && i.push({
                        width: n,
                        height: o,
                        path: null
                    }),
                        n = Math.max(1, Math.round(n / 2)),
                        o = Math.max(1, Math.round(o / 2)),
                        r += 1
                var a = r - s - 1
                return i.reverse().forEach((function(e, i) {
                    e.path = t.basePath + (a + i) + "/"
                })), i
            }, e.prototype.createInitialTile = function() {
                var t = this.levels[0],
                    e = new Dt(this)
                return e.width = t.width, e.height = t.height, e.xMin = 0, e.xMax = this.nativeWidth, e.yMin = 0, e.yMax = this.nativeHeight, e.load(), e
            }, e.prototype.getDepthFromScale = function(t) {
                var e = this.levelsCount,
                    i = 1 / t
                return Math.max(0, Math.min(e - 1, e - Math.ceil(Math.log(i) / Rt + .25)))
            }, e.prototype.getPromise = function() {
                return this.deferred || (this.deferred = Q.defer(), this.isInitialImageLoaded && this.deferred.resolve()), this.deferred.promise
            }, e.prototype.handleTileLoad = function(t) {
                this.trigger("load", t),
                0 === t.depth && (this.isInitialImageLoaded = !0, this.deferred && this.deferred.resolve())
            }, e
        }(V.Events),
        jt = function() {
            function t(t, e) {
                void 0 === e && (e = 0),
                    this.attack = .025,
                    this.damp = .5,
                    this.minimum = .05,
                    this.thershold = .01,
                    this.callback = t,
                    this.value = e,
                    this.target = e,
                    this.velocity = 0
            }
            return t.prototype.copyFrom = function(t) {
                this.attack = t.attack,
                    this.damp = t.damp,
                    this.minimum = t.minimum,
                    this.target = t.target,
                    this.thershold = t.thershold,
                    this.value = t.value,
                    this.velocity = t.velocity
            }, t.prototype.isActive = function() {
                var t = this.target
                return this.value !== t
            }, t.prototype.setValue = function(t) {
                this.value !== t && (this.value = t, this.target = t, this.velocity = 0, this.callback(t))
            }, t.prototype.update = function() {
                var t = this,
                    e = t.attack,
                    i = t.damp,
                    n = t.minimum,
                    o = t.target,
                    r = t.thershold,
                    s = this.value,
                    a = this.velocity,
                    l = o - s
                if (Math.abs(l) < r)
                    s = o,
                        this.callback(s)
                else {
                    var h = (a = a * i + (o - s) * e) < 0 ? -1 : 1
                    a = Math.max(n, a * h),
                        s += a = Math.min(l * h, a) * h,
                        this.value = s,
                        this.velocity = a
                }
                return s
            }, t
        }(),
        Bt = function() {
            function t(t, e) {
                var i = this
                this.mode = 0,
                    this.handleOpacityEnd = function(t) {
                        var e = i.mode
                        1 === t && 1 === e && i.hideAllChildren()
                    },
                    this.handleChildOpacityEnd = function(t) {
                        var e = i.mode
                        1 == t && 2 == e && i.opacity.setValue(0)
                    },
                    this.tile = e,
                    this.renderer = t,
                    this.opacity = new jt(this.handleOpacityEnd, 0),
                    this.childOpacity = new jt(this.handleChildOpacityEnd, 0)
            }
            return t.prototype.clone = function(e) {
                var i = this,
                    n = i.children,
                    o = i.childOpacity,
                    r = i.mode,
                    s = i.opacity,
                    a = i.tile,
                    l = new t(e, a)
                return l.opacity.copyFrom(s), l.childOpacity.copyFrom(o), l.mode = r, n && (l.children = _(n).map((function(t) {
                    return t.clone(e)
                }))), l
            }, t.prototype.draw = function(t) {
                var e = this.childOpacity,
                    i = this.opacity,
                    n = this.renderer,
                    o = this.tile,
                    r = n.viewport
                if (r.intersects(o)) {
                    var s = i.value * t,
                        a = e.value * t
                    if (s > 0 && o.isLoaded()) {
                        var l = o.border,
                            h = o.getBorderOffset(),
                            c = o.xMin,
                            u = o.xMax,
                            p = o.yMin,
                            d = o.yMax
                        8 & l || (c -= h),
                        2 & l || (u += h),
                        1 & l || (p -= h),
                        4 & l || (d += h)
                        var f = c * r.scale + r.offsetX,
                            m = p * r.scale + r.offsetY,
                            y = (u - c) * r.scale,
                            v = (d - p) * r.scale
                        n.drawTile(o, f, m, y, v, s)
                    }
                    if (this.children && (1 !== s || a > 0 || r.depth > o.depth))
                        for (var g = 0; g < this.children.length; g++)
                            this.children[g].draw(a)
                }
            }, t.prototype.hide = function() {
                this.hideAllChildren(),
                    this.hideSelf()
            }, t.prototype.hideAllChildren = function() {
                if (this.children)
                    for (var t = 0; t < this.children.length; t++)
                        this.children[t].hide()
            }, t.prototype.hideSelf = function() {
                this.opacity.setValue(0),
                    this.mode = 0
            }, t.prototype.setMode = function(t) {
                var e = this.childOpacity,
                    i = this.mode,
                    n = this.opacity
                if (i != t) {
                    switch (this.mode = t, t) {
                        case 1:
                            2 != i && 6 != i && 5 != i || n.setValue(1),
                                n.target = 1,
                                e.target = 0
                            break
                        case 2:
                            e.target = 1,
                            1 === e.value && n.setValue(0)
                            break
                        case 3:
                            n.setValue(1)
                            break
                        case 4:
                            n.target = 1
                            break
                        case 6:
                        case 5:
                            e.setValue(1)
                    }
                    this.renderer.needsRedraw = !0
                }
            }, t.prototype.split = function() {
                var e = this.renderer,
                    i = this.tile
                this.children = _(i.split()).map((function(i) {
                    return new t(e, i)
                }))
            }, t.prototype.update = function(t, e) {
                var i = this.childOpacity,
                    n = this.opacity,
                    o = this.renderer,
                    r = this.tile,
                    s = o.viewport,
                    a = r.isLoaded(),
                    l = this.mode,
                    h = !1
                if (!s.intersects(r))
                    return !0
                if (n.isActive() && (o.needsRedraw = !0, n.update()), i.isActive() && (o.needsRedraw = !0, i.update()), s.depth > r.depth) {
                    i.target = 1,
                    this.children || this.split(),
                        h = !0
                    for (var c = 0; c < this.children.length; c++)
                        h = this.children[c].update(t || a, e * i.value) && h
                    h ? l = 2 : a && (l = 3)
                } else if (s.depth === r.depth) {
                    if (a ? l = 1 : (r.load(), l = this.children ? t ? 6 : 5 : 0), 1 !== n.value && this.children) {
                        h = !0
                        for (c = 0; c < this.children.length; c++)
                            h = this.children[c].update(t || a, e * i.value) && h
                    }
                } else
                    a && (l = 4)
                return l != this.mode && this.setMode(l), e * n.value == 1 || h
            }, t
        }(),
        zt = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.offsetX = 0, e.offsetY = 0, e.scale = 1, e.depth = 0, e
            }
            return n.c(e, t), e
        }(At),
        Ft = function(t) {
            function e(e) {
                var i = t.call(this) || this
                return i.needsRedraw = !0, i.pyramid = null, i.renderScale = 1, i.resolutionScale = 1, i.surface = null, i.canvas = e, i.viewport = new zt, i
            }
            return n.c(e, t), e.prototype.cloneSurface = function(t) {
                var e = t.tile.pyramid
                this.setPyramid(e, t.clone(this))
            }, e.prototype.drawPyramid = function(t, e, i) {
                var n = this,
                    o = n.height,
                    r = n.pyramid,
                    s = n.resolutionScale,
                    a = n.surface,
                    l = n.viewport,
                    h = n.width,
                    c = 1 / i
                r && (this.needsRedraw = !1, l.offsetX = t, l.offsetY = e, l.scale = i, l.depth = r.getDepthFromScale(i * s), l.xMin = -t * c, l.xMax = l.xMin + h * c, l.yMin = -e * c, l.yMax = l.yMin + o * c, a.update(!1, 1), a.draw(1))
            }, e.prototype.setPyramid = function(t, e) {
                this.pyramid !== t && (this.pyramid && this.stopListening(t), this.pyramid = t, t ? (this.listenTo(t, "load", this.handlePyramidLoad), this.surface = e || new Bt(this, t.tile)) : this.surface = null)
            }, e.prototype.setSize = function(t, e) {
                if (this.width !== t || this.height !== e) {
                    this.width = t,
                        this.height = e,
                        this.needsRedraw = !0
                    var i = this.canvas,
                        n = this.renderScale
                    i.width = t * n,
                        i.height = e * n
                }
            }, e.prototype.handlePyramidLoad = function() {
                this.needsRedraw = !0
            }, e
        }(V.Events),
        Wt = function(t) {
            function e(e, i) {
                var n = t.call(this, e) || this
                return n.textures = {}, n.ctx = i, n
            }
            return n.c(e, t), e.prototype.remove = function() {
                this.textures = {}
            }, e.prototype.getTexture = function(t) {
                var e = this.textures,
                    i = t.id,
                    n = t.image
                if (i in e)
                    return e[i]
                var o = document.createElement("canvas"),
                    r = o.getContext("2d")
                return o.width = n.naturalWidth, o.height = n.naturalHeight, r.drawImage(n, 0, 0), e[i] = o, o
            }, e.prototype.drawTile = function(t, e, i, n, o, r) {
                var s = this.ctx,
                    a = this.getTexture(t)
                s.globalAlpha = r,
                    s.drawImage(a, e, i, n, o)
            }, e.prototype.render = function(t, e, i) {
                var n = this.ctx,
                    o = this.height,
                    r = this.width
                n.clearRect(0, 0, r, o),
                    this.drawPyramid(t, e, i)
            }, e
        }(Ft),
        qt = function() {
            function t(t, e, i) {
                var n = t.createShader(t.VERTEX_SHADER)
                t.shaderSource(n, e),
                    t.compileShader(n)
                var o = t.createShader(t.FRAGMENT_SHADER)
                t.shaderSource(o, i),
                    t.compileShader(o)
                var r = t.createProgram()
                t.attachShader(r, n),
                    t.attachShader(r, o),
                    t.linkProgram(r),
                    this.vertexShader = n,
                    this.fragmentShader = o,
                    this.program = r
            }
            return t.prototype.remove = function(t) {
                t.deleteProgram(this.program),
                    t.deleteShader(this.vertexShader),
                    t.deleteShader(this.fragmentShader),
                    this.program = null,
                    this.vertexShader = null,
                    this.fragmentShader = null
            }, t
        }(),
        Ut = function(t) {
            function e(e) {
                var i = t.call(this, e, "\n  attribute vec4 a_position;\n  attribute vec2 a_texcoord;\n\n  uniform mat4 u_matrix;\n\n  varying vec2 v_texcoord;\n\n  void main() {\n    gl_Position = u_matrix * a_position;\n    v_texcoord = a_texcoord;\n  }\n", "\n  precision mediump float;\n\n  varying vec2 v_texcoord;\n\n  uniform sampler2D u_texture;\n  uniform float u_alpha;\n\n  void main() {\n    gl_FragColor = vec4(texture2D(u_texture, v_texcoord).rgb, u_alpha);\n  }\n") || this,
                    n = i.program
                return i.positionLocation = e.getAttribLocation(n, "a_position"), i.texcoordLocation = e.getAttribLocation(n, "a_texcoord"), i.alphaLocation = e.getUniformLocation(n, "u_alpha"), i.matrixLocation = e.getUniformLocation(n, "u_matrix"), i.textureLocation = e.getUniformLocation(n, "u_texture"), i
            }
            return n.c(e, t), e
        }(qt)
    var Yt = function(t) {
            function e(e, i) {
                var n = t.call(this, e) || this
                return n.textures = {}, n.ctx = i, n.tileShader = new Ut(i), n.renderScale = "devicePixelRatio" in window ? Math.min(1.5, window.devicePixelRatio) : 1, n.resolutionScale = Math.max(1, .875 * n.renderScale), n.createBuffers(i), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, .001), i.clear(i.COLOR_BUFFER_BIT), n
            }
            return n.c(e, t), e.prototype.remove = function() {
                var t = this.ctx,
                    e = this.tileShader,
                    i = this.positionBuffer,
                    n = this.texCoordBuffer
                t.deleteBuffer(i),
                    t.deleteBuffer(n),
                    _(this.textures).forEach((function(e) {
                        t.deleteTexture(e)
                    })),
                    e.remove(t),
                    this.positionBuffer = null,
                    this.textures = {},
                    this.tileShader = null,
                    this.texCoordBuffer = null
            }, e.prototype.createBuffers = function(t) {
                var e = t.createBuffer()
                t.bindBuffer(t.ARRAY_BUFFER, e)
                t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), t.STATIC_DRAW)
                var i = t.createBuffer()
                t.bindBuffer(t.ARRAY_BUFFER, i)
                t.bufferData(t.ARRAY_BUFFER, new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]), t.STATIC_DRAW),
                    this.positionBuffer = e,
                    this.texCoordBuffer = i
            }, e.prototype.getTexture = function(t) {
                var e = this.ctx,
                    i = this.textures,
                    n = t.id
                if (n in i)
                    return i[n]
                var o = e.createTexture()
                return e.bindTexture(e.TEXTURE_2D, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, e.RGB, e.UNSIGNED_BYTE, t.image), i[n] = o, o
            }, e.prototype.setSize = function(e, i) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    h
                t.prototype.setSize.call(this, e, i),
                    this.projection = (n = 0, o = e, r = i, s = 0, a = -1, l = 1, void 0 === h && (h = new Float32Array(16)), h[0] = 2 / (o - n), h[1] = 0, h[2] = 0, h[3] = 0, h[4] = 0, h[5] = 2 / (s - r), h[6] = 0, h[7] = 0, h[8] = 0, h[9] = 0, h[10] = 2 / (a - l), h[11] = 0, h[12] = (n + o) / (n - o), h[13] = (r + s) / (r - s), h[14] = (a + l) / (a - l), h[15] = 1, h)
                var c = this.ctx,
                    u = this.renderScale
                c.viewport(0, 0, e * u, i * u),
                    c.clear(c.COLOR_BUFFER_BIT)
            }, e.prototype.drawTile = function(t, e, i, n, o, r) {
                var s = this.ctx,
                    a = this.projection,
                    l = this.tileShader,
                    h = l.alphaLocation,
                    c = l.matrixLocation,
                    u = this.getTexture(t)
                s.bindTexture(s.TEXTURE_2D, u)
                var p,
                    d,
                    f,
                    m,
                    y,
                    v = function(t, e, i, n, o) {
                        void 0 === o && (o = new Float32Array(16))
                        var r = t[0],
                            s = t[1],
                            a = t[2],
                            l = t[3],
                            h = t[4],
                            c = t[5],
                            u = t[6],
                            p = t[7],
                            d = t[8],
                            f = t[9],
                            m = t[10],
                            y = t[11],
                            v = t[12],
                            g = t[13],
                            w = t[14],
                            b = t[15]
                        return t !== o && (o[0] = r, o[1] = s, o[2] = a, o[3] = l, o[4] = h, o[5] = c, o[6] = u, o[7] = p, o[8] = d, o[9] = f, o[10] = m, o[11] = y), o[12] = r * e + h * i + d * n + v, o[13] = s * e + c * i + f * n + g, o[14] = a * e + u * i + m * n + w, o[15] = l * e + p * i + y * n + b, o
                    }(a, e, i, 0)
                p = v,
                    d = n,
                    f = o,
                    m = 1,
                void 0 === y && (y = new Float32Array(16)),
                    y[0] = d * p[0],
                    y[1] = d * p[1],
                    y[2] = d * p[2],
                    y[3] = d * p[3],
                    y[4] = f * p[4],
                    y[5] = f * p[5],
                    y[6] = f * p[6],
                    y[7] = f * p[7],
                    y[8] = m * p[8],
                    y[9] = m * p[9],
                    y[10] = m * p[10],
                    y[11] = m * p[11],
                p !== y && (y[12] = p[12], y[13] = p[13], y[14] = p[14], y[15] = p[15]),
                    v = y,
                    s.uniformMatrix4fv(c, !1, v),
                    s.uniform1f(h, r),
                    s.drawArrays(s.TRIANGLES, 0, 6)
            }, e.prototype.render = function(t, e, i) {
                var n = this.ctx,
                    o = this.positionBuffer,
                    r = this.texCoordBuffer,
                    s = this.tileShader,
                    a = s.positionLocation,
                    l = s.texcoordLocation,
                    h = s.textureLocation
                n.enable(n.BLEND),
                    n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA),
                    n.clear(n.COLOR_BUFFER_BIT),
                    n.useProgram(s.program),
                    n.uniform1i(h, 0),
                    n.bindBuffer(n.ARRAY_BUFFER, o),
                    n.enableVertexAttribArray(a),
                    n.vertexAttribPointer(a, 2, n.FLOAT, !1, 0, 0),
                    n.bindBuffer(n.ARRAY_BUFFER, r),
                    n.enableVertexAttribArray(l),
                    n.vertexAttribPointer(l, 2, n.FLOAT, !1, 0, 0),
                    this.drawPyramid(t, e, i)
            }, e
        }(Ft),
        Xt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        Gt = /mobile/i.test(navigator.userAgent),
        Qt = /firefox/i.test(navigator.userAgent)
    var Kt = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.border = 0,
                    i.centerX = .5,
                    i.centerY = .5,
                    i.imageScale = 0,
                    i.maxOffset = new ft(0, 0),
                    i.maxScale = 1,
                    i.minOffset = new ft(0, 0),
                    i.minScale = 1,
                    i.needsRedraw = !1,
                    i.offsetX = 0,
                    i.offsetY = 0,
                    i.opacity = 1,
                    i.renderer = null,
                    i.scale = 1,
                    i.viewWidth = 0,
                    i.viewHeight = 0
                var n = i.el.getAttribute("data-center")
                if (n) {
                    var o = JSON.parse(n)
                    i.centerX = o.x,
                        i.centerY = o.y
                }
                return i.initializeImage(e), i.initializeCanvas(e), i.listenTo(yt.a.getInstance(), "frame", i.onFrame), i.delegate("contextmenu", "", (function(t) {
                    return t.preventDefault()
                })), i.delegate("dragstart", "", (function(t) {
                    return t.preventDefault()
                })), i
            }
            return n.c(e, t), e.prototype.remove = function() {
                return this.renderer && this.renderer.remove(), t.prototype.remove.call(this)
            }, e.prototype.initializeImage = function(t) {
                if (t.pyramid)
                    this.pyramid = t.pyramid
                else if (t.path && t.info)
                    this.pyramid = new Ht(t.path, t.info)
                else
                    try {
                        this.pyramid = new Ht(this.el.getAttribute("data-path"), JSON.parse(this.el.getAttribute("data-info")))
                    } catch (t) {}
            }, e.prototype.initializeCanvas = function(t) {
                var e = t.canvasClassName,
                    i = t.surface,
                    n = this.el,
                    o = this.el.querySelector("." + e)
                o || ((o = document.createElement("canvas")).className = e, n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o))
                var r = function(t) {
                    if (!Qt && !Xt || Gt)
                        try {
                            var e = t.getContext("webgl")
                            return new Yt(t, e)
                        } catch (t) {}
                    var i = t.getContext("2d")
                    return new Wt(t, i)
                }(o)
                i ? r.cloneSurface(i) : r.setPyramid(this.pyramid),
                    this.canvas = o,
                    this.renderer = r
            }, e.prototype.getOffset = function() {
                return new ft(this.offsetX, this.offsetY)
            }, e.prototype.setOffset = function(t) {
                this.offsetX = t.x,
                    this.offsetY = t.y,
                    this.needsRedraw = !0,
                    this.trigger("offset", t)
            }, e.prototype.getScale = function() {
                return this.scale
            }, e.prototype.setOpacity = function(t) {
                this.opacity = t,
                    this.el.style.opacity = "" + t
            }, e.prototype.setScale = function(t) {
                this.scale = t,
                    this.needsRedraw = !0,
                    this.updateOffsetBounds(),
                    this.trigger("scale", t)
            }, e.prototype.setSize = function(t, e) {
                this.renderer.setSize(t, e),
                    this.viewWidth = t,
                    this.viewHeight = e,
                    this.needsRedraw = !0,
                    this.updateScaleBounds(),
                    this.setOffset(this.getOffset().max(this.minOffset).min(this.maxOffset)),
                    this.setScale(Math.max(this.minScale, Math.min(this.maxScale, this.getScale())))
            }, e.prototype.getPromise = function() {
                return this.pyramid.getPromise()
            }, e.prototype.updateScaleBounds = function() {
                this.border = Math.min(.1 * this.viewWidth, .1 * this.viewHeight),
                    this.minScale = .8 * Math.min(1, Math.min((this.viewWidth - 2 * this.border) / this.pyramid.nativeWidth, (this.viewHeight - 2 * this.border) / this.pyramid.nativeHeight)),
                    this.updateOffsetBounds()
            }, e.prototype.updateOffsetBounds = function(t, e, i) {
                void 0 === t && (t = this.minOffset),
                void 0 === e && (e = this.maxOffset),
                void 0 === i && (i = this.scale)
                var n = this.border,
                    o = this.pyramid,
                    r = o.nativeWidth * i,
                    s = o.nativeHeight * i,
                    a = this.viewWidth - 2 * n,
                    l = this.viewHeight - 2 * n
                r < a ? t.x = e.x = n + .5 * (a - r) : (t.x = a - r + n, e.x = n),
                    s < l ? t.y = e.y = n + .5 * (l - s) : (t.y = l - s + n, e.y = n)
            }, e.prototype.replaceImage = function(t, e, i, n) {
                var o = this
                if (void 0 === n && (n = !0), !this.pyramid || this.pyramid.basePath != t) {
                    if (this.pyramid = new Ht(t, e), this.centerX = i.x, this.centerY = i.y, !n)
                        return this.renderer.setPyramid(this.pyramid), void this.handleViewportResize()
                    Mt(this, "opacity", {
                        to: 0
                    }).getPromise().then((function() {
                        return o.renderer.setPyramid(o.pyramid), o.handleViewportResize(), Mt(o, "opacity", {
                            to: 1
                        }).getPromise()
                    }))
                }
            }, e.prototype.handleViewportResize = function() {
                var t = this.el
                return this.setSize(t.offsetWidth, t.offsetHeight), !0
            }, e.prototype.onFrame = function() {
                var t = this,
                    e = t.needsRedraw,
                    i = t.offsetX,
                    n = t.offsetY,
                    o = t.renderer,
                    r = t.scale;
                (e || o.needsRedraw) && (this.needsRedraw = !1, o.render(i, n, r))
            }, e
        }(o.View),
        Jt = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.state = 0, n.direction = y.Both, n.firstPoint = null, n.secondPoint = null, n.threshold = 5, n.initialPosition = null, n.initialDistance = 0, n.lastScale = 1, n.track = [], n.trackPeriod = 100, n.preventDragEvents = !0, n.preventPinchEvents = !0, n
            }
            return n.c(e, t), e.prototype.getPointerCenter = function() {
                return this.firstPoint ? this.secondPoint ? {
                    x: .5 * (this.firstPoint.x + this.secondPoint.x),
                    y: .5 * (this.firstPoint.y + this.secondPoint.y)
                } : {
                    x: this.firstPoint.x,
                    y: this.firstPoint.y
                } : {
                    x: 0,
                    y: 0
                }
            }, e.prototype.getPointerDistance = function() {
                if (!this.firstPoint || !this.secondPoint)
                    return 0
                var t = this.firstPoint.x - this.secondPoint.x,
                    e = this.firstPoint.y - this.secondPoint.y
                return Math.sqrt(t * t + e * e)
            }, e.prototype.getVelocity = function() {
                this.reviseTrackingPoints()
                var t = this.track.length
                if (t < 2)
                    return {
                        x: 0,
                        y: 0,
                        distance: 0
                    }
                var e = this.track[0],
                    i = this.track[t - 1],
                    n = (i.time - e.time) / 15
                return {
                    x: (i.x - e.x) / n,
                    y: (i.y - e.y) / n,
                    distance: (i.distance - e.distance) / n
                }
            }, e.prototype.addTrackingPoint = function(t, e, i, n) {
                void 0 === n && (n = +new Date),
                    this.reviseTrackingPoints(n),
                    this.track.push({
                        x: t,
                        y: e,
                        distance: i,
                        time: n
                    })
            }, e.prototype.reviseTrackingPoints = function(t) {
                for (void 0 === t && (t = +new Date); this.track.length > 0 && !(t - this.track[0].time <= this.trackPeriod);)
                    this.track.shift()
            }, e.prototype.handleStateChange = function(t, e) {}, e.prototype.handleTransform = function(t, e, i) {}, e.prototype.handleClick = function(t) {}, e.prototype.handlePointerDown = function(t, e, i, n) {
                if (3 == this.state)
                    return null
                0 == e && t.preventDefault()
                var o = this.state,
                    r = new b(e, i, n)
                return 0 == this.state ? (this.state = 1, this.firstPoint = r) : (this.state = 3, this.secondPoint = r, this.initialPosition = this.getPointerCenter(), this.initialDistance = this.getPointerDistance()), this.handleStateChange(this.state, o), r
            }, e.prototype.handlePointerMove = function(t, e) {
                var i = e.getAbsoluteDelta()
                if (1 === this.state) {
                    if (0 == e.type && t.preventDefault(), Math.sqrt(i.x * i.x + i.y * i.y) < this.threshold)
                        return !0
                    if (this.direction == y.None)
                        return !1
                    if (this.direction == y.Horizontal) {
                        if (Math.abs(i.x) < Math.abs(i.y))
                            return !1
                    } else if (this.direction == y.Vertical && Math.abs(i.x) > Math.abs(i.y))
                        return !1
                    this.state = 2,
                        this.initialPosition = {
                            x: e.x,
                            y: e.y
                        },
                        this.initialDistance = 0,
                        t.stopImmediatePropagation(),
                        this.handleStateChange(2, 1)
                }
                if (2 === this.state)
                    this.preventDragEvents && (t.stopImmediatePropagation(), t.preventDefault()),
                    this.trackPeriod > 0 && this.addTrackingPoint(e.x, e.y, 0),
                        this.handleTransform(e.x - this.initialPosition.x, e.y - this.initialPosition.y, 1)
                else if (3 == this.state) {
                    this.preventPinchEvents && (t.stopImmediatePropagation(), t.preventDefault())
                    var n = this.getPointerCenter(),
                        o = this.getPointerDistance()
                    this.trackPeriod > 0 && this.addTrackingPoint(n.x, n.y, o / this.initialDistance)
                    var r = o / this.initialDistance
                    isFinite(r) || (r = this.lastScale),
                        this.lastScale = r,
                        this.handleTransform(n.x - this.initialPosition.x, n.y - this.initialPosition.y, r)
                }
                return !0
            }, e.prototype.handlePointerUp = function(t, e, i) {
                void 0 === i && (i = !1)
                var n = this.state
                3 == this.state ? (e == this.firstPoint && (this.firstPoint = this.secondPoint), this.firstPoint.startX = this.firstPoint.x, this.firstPoint.startY = this.firstPoint.y, this.secondPoint = null, this.initialPosition = {
                    x: this.firstPoint.x,
                    y: this.firstPoint.y
                }, this.state = 1) : (this.state = 0, i || 1 !== n || this.handleClick(t)),
                    this.handleStateChange(this.state, n),
                    this.track.length = 0,
                    w.getInstance().preventClick()
            }, e.prototype.handlePointerCancel = function(t, e) {
                this.handlePointerUp(t, e, !0)
            }, e
        }(g),
        $t = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.getValue = function() {
                    return this.target[this.property]
                },
                e.prototype.setValue = function(t) {
                    this.target[this.property] = t
                },
                e.isApplicable = function(t, e) {
                    return t.hasOwnProperty(e)
                },
                e = i = n.b([Object(bt.a)("accessor", {
                    priority: -10,
                    isApplicable: i.isApplicable
                })], e)
        }(xt), function(t) {
            function e(e, n) {
                var o = t.call(this, e, n) || this
                return o.setter = i.getMethod(e, n, "set"), o
            }
            var i
            return n.c(e, t), i = e, e.prototype.getValue = function() {
                return this.target[this.property]
            }, e.prototype.setValue = function(t) {
                this.setter.call(this.target, t)
            }, e.isApplicable = function(t, e) {
                return !!i.getMethod(t, e, "set")
            }, e.getMethod = function(t, e, n) {
                if (n && (e = i.getMethodName(n, e)), !t[e])
                    return null
                var o = t[e]
                return "function" == typeof o ? o : null
            }, e.getMethodName = function(t, e) {
                return t + e.charAt(0).toUpperCase() + e.slice(1)
            }, e = i = n.b([Object(bt.a)("accessor", {
                priority: -5,
                isApplicable: i.isApplicable
            })], e)
        }(xt)),
        Zt = (function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.getter = $t.getMethod(e, i, "get"), n
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.getValue = function() {
                    return this.getter.call(this.target)
                },
                e.isApplicable = function(t, e) {
                    var i = $t.getMethod(t, e, "get"),
                        n = $t.getMethod(t, e, "set")
                    return !!i && !!n
                },
                e = i = n.b([Object(bt.a)("accessor", {
                    isApplicable: i.isApplicable
                })], e)
        }($t), {
            velocity: void 0,
            friction: .95,
            deceleration: .05,
            epsilon: .05,
            bounceDuration: 1e3,
            bounceEasing: It
        }),
        te = wt.a.getInstance().getGroup("momentum"),
        ee = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.currentValue = e.getValue(), n.state = 1, i = _.defaults(i, Zt), n.initialize(i), n
            }
            return n.c(e, t), e.prototype.initialize = function(t) {}, e.prototype.update = function(t) {
                return !(6 & this.state) && (!!this.advance(t) && (this.accessor.setValue(this.currentValue), !0))
            }, e.create = function(t, e) {
                for (var i = t.getValue(), n = 0, o = te.plugins; n < o.length; n++) {
                    var r = o[n].tryCreate(t, e, i)
                    if (null != r)
                        return r
                }
                return null
            }, e
        }(Ot)
    function ie(t, e, i) {
        var n = xt.create(t, e)
        if (null == n)
            throw new Error('Could not create an accessor for the property "' + e + '" on "' + t + '", did you import all necessary accessor classes?')
        var o = ee.create(n, i)
        if (null == o)
            throw new Error('Could not create a momentum for the property "' + e + '" on "' + t + '", did you import all necessary momentum classes?')
        return vt.getInstance().add(o), o
    }
    var ne,
        oe,
        re,
        se,
        ae,
        le,
        he,
        ce,
        ue,
        pe,
        de,
        fe,
        me,
        ye,
        ve,
        ge = function() {
            function t(t) {
                this.minValue = Number.NaN,
                    this.maxValue = Number.NaN,
                    this.velocity = 0,
                    this.bounceStep = 0,
                    this.bounceInitial = Number.NaN,
                    this.bounceTarget = 0,
                    this.bounceDelta = 0,
                    this.friction = t.friction,
                    this.deceleration = t.deceleration,
                    this.epsilon = t.epsilon,
                    this.bounceDuration = t.bounceDuration,
                    this.bounceEasing = t.bounceEasing
            }
            return t.prototype.advance = function(t) {
                var e = this.maxValue,
                    i = this.minValue,
                    n = this.currentValue,
                    o = this.velocity
                if (!isNaN(this.bounceInitial))
                    return this.bounceStep += t, this.bounceStep >= this.bounceDuration ? (this.currentValue = this.bounceTarget, !1) : (this.currentValue = this.bounceEasing(this.bounceStep, this.bounceInitial, this.bounceDelta, this.bounceDuration), !0)
                if (!isNaN(e) && n > e) {
                    var r = e - n
                    return o > 0 && (o = (o + r * this.deceleration) * this.friction, this.velocity = o, this.currentValue += o), o <= 0 && (this.bounceInitial = n, this.bounceTarget = e, this.bounceDelta = r), !0
                }
                if (!isNaN(i) && n < i) {
                    r = i - n
                    return o < 0 && (o = (o + r * this.deceleration) * this.friction, this.velocity = o, this.currentValue += o), o >= 0 && (this.bounceInitial = n, this.bounceTarget = i, this.bounceDelta = r), !0
                }
                return !(Math.abs(o) < this.epsilon) && (o *= this.friction, this.velocity = o, this.currentValue += o, !0)
            }, t
        }(),
        we = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.initialize = function(t) {
                    var e = new ge(t)
                    e.currentValue = this.currentValue,
                        e.minValue = t.min,
                        e.maxValue = t.max,
                        e.velocity = t.velocity,
                        this.axis = e
                },
                e.prototype.advance = function(t) {
                    var e = this.axis.advance(t)
                    return this.currentValue = this.axis.currentValue, e
                },
                e.tryCreate = function(t, e, n) {
                    if ("number" != typeof n)
                        return null
                    if ("number" != typeof e.velocity)
                        throw new Error("Type mismatch: Momentum initial and velocity value must be of the same type.")
                    if (e.min && "number" != typeof e.min)
                        throw new Error("Type mismatch: Momentum initial and minimum value must be of the same type.")
                    if (e.max && "number" != typeof e.max)
                        throw new Error("Type mismatch: Momentum initial and maximum value must be of the same type.")
                    return new i(t, e)
                },
                e = i = n.b([Object(Pt.a)("momentum", {
                    tryCreate: i.tryCreate
                })], e)
        }(ee), function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.initialize = function(t) {
                    for (var e = this.currentValue.getValues(), i = t.velocity.getValues(), n = t.min ? t.min.getValues() : null, o = t.max ? t.max.getValues() : null, r = [], s = 0, a = e.length; s < a; s++) {
                        var l = new ge(t)
                        l.currentValue = e[s],
                            l.minValue = n ? n[s] : Number.NaN,
                            l.maxValue = o ? o[s] : Number.NaN,
                            l.velocity = i[s],
                            r.push(l)
                    }
                    this.axes = r
                },
                e.prototype.advance = function(t) {
                    for (var e = [], i = this.axes, n = !1, o = 0, r = i.length; o < r; o++) {
                        var s = i[o]
                        n = s.advance(t) || n,
                            e.push(s.currentValue)
                    }
                    return this.currentValue = this.currentValue.clone().setValues(e), n
                },
                e.tryCreate = function(t, e, n) {
                    if (Lt(n)) {
                        var o = n.convert(e.velocity)
                        if (null == o)
                            throw new Error("Type mismatch: Momentum initial and velocity value must be of the same type.")
                        if (e.velocity = o, e.min) {
                            var r = n.convert(e.min)
                            if (null == r)
                                throw new Error("Type mismatch: Momentum initial and minimum value must be of the same type.")
                            e.min = r
                        }
                        if (e.max) {
                            var s = n.convert(e.max)
                            if (null == s)
                                throw new Error("Type mismatch: Momentum initial and maximum value must be of the same type.")
                            e.max = s
                        }
                        return new i(t, e)
                    }
                    return null
                },
                e = i = n.b([Object(Pt.a)("momentum", {
                    tryCreate: i.tryCreate
                })], e)
        }(ee), A.a.getInstance()),
        be = function(t) {
            function e(e) {
                return t.call(this, e, null) || this
            }
            return n.c(e, t), e.prototype.applyScaleLimit = function() {
                var t = this.view,
                    e = t.maxScale,
                    i = t.minScale,
                    n = t.getScale()
                if (n > e || n < i) {
                    n < i && (n = i),
                    n > e && (n = e)
                    var o = {
                            x: 0,
                            y: 0
                        },
                        r = {
                            x: 0,
                            y: 0
                        }
                    t.updateOffsetBounds(o, r, n)
                    var s = ft.convert(this.getPointerCenter())
                    s.subtract(we.scrollLeft, we.scrollTop),
                        s.add((t.offsetX - s.x) / t.scale * n, (t.offsetY - s.y) / t.scale * n).max(o).min(r),
                        Mt(t, "scale", {
                            to: n,
                            duration: 1e3,
                            easing: It
                        }),
                        Mt(t, "offset", {
                            to: s,
                            duration: 1e3,
                            easing: It
                        })
                } else
                    this.applyOffsetLimit()
            }, e.prototype.applyOffsetLimit = function() {
                var t = this.view,
                    e = this.getVelocity()
                ie(t, "offset", {
                    velocity: new ft(e.x, e.y),
                    min: t.minOffset,
                    max: t.maxOffset
                })
            }, e.prototype.takeState = function(t) {
                var e = this
                _(t.adapters).forEach((function(t) {
                    var i = Object.getPrototypeOf(t),
                        n = _(e.adapters).find((function(t) {
                            return Object.getPrototypeOf(t) === i
                        }))
                    n && n.takeState(t)
                }))
                var i = this.state
                this.firstPoint = t.firstPoint,
                    this.secondPoint = t.secondPoint,
                    this.state = t.state,
                    this.track = t.track,
                    this.initialPosition = t.initialPosition,
                    this.initialDistance = t.initialDistance,
                    t.state = 0,
                    t.firstPoint = null,
                    t.secondPoint = null,
                    t.track = [],
                    t.initialPosition = null,
                    t.initialDistance = 0,
                    this.handleStateChange(t.state, i)
            }, e.prototype.handleStateChange = function(t, e) {
                var i = 3 == e,
                    n = 2 == e,
                    o = 3 == t || 2 == t
                o ? gt(this.view) : i ? this.applyScaleLimit() : n && !o && this.applyOffsetLimit()
                var r = this.getPointerCenter(),
                    s = this.view,
                    a = s.offsetX,
                    l = s.offsetY,
                    h = s.scale
                r.x = (a - (r.x - we.scrollLeft)) / h,
                    r.y = (l - (r.y - we.scrollTop)) / h,
                    this.initialScale = h,
                    this.initialOffset = r
            }, e.prototype.handleTransform = function(t, e, i) {
                var n = this.getPointerCenter(),
                    o = this.view,
                    r = o.maxScale,
                    s = o.minScale,
                    a = this.initialScale * i
                a > r && (a = r + .125 * (a - r)),
                a < s && (a = s + .125 * (a - s)),
                    o.setScale(a)
                var l = n.x - we.scrollLeft + this.initialOffset.x * a,
                    h = n.y - we.scrollTop + this.initialOffset.y * a,
                    c = o.minOffset
                l < c.x && (l = c.x + .5 * (l - c.x)),
                h < c.y && (h = c.y + .5 * (h - c.y))
                var u = o.maxOffset
                l > u.x && (l = u.x + .5 * (l - u.x)),
                h > u.y && (h = u.y + .5 * (h - u.y)),
                    o.setOffset({
                        x: l,
                        y: h
                    })
            }, e
        }(Jt),
        Ce = function(t) {
            function e(e) {
                var i = t.call(this, e, null) || this
                return i.direction = y.None, i
            }
            return n.c(e, t), e.prototype.handlePointerDown = function(e, i, n, o) {
                return Ge.canCreate() ? t.prototype.handlePointerDown.call(this, e, i, n, o) : null
            }, e.prototype.handleStateChange = function(t, e) {
                var i = this
                3 === t && setTimeout((function() {
                    Ge.create(i.view, i)
                }), 0)
            }, e.prototype.handleClick = function(t) {
                for (var e = t.target; e;) {
                    if (e.classList.contains("dsArtworkViewer__controls")) {
                        this.view.onControlsClick()
                        break
                    }
                    e = e.parentElement
                }
            }, e
        }(Jt),
        xe = !1
    function Se() {
        if (!xe) {
            xe = !0
            var t = navigator.userAgent,
                e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
                i = /(Mac OS X)|(Windows)|(Linux)/.exec(t)
            if (fe = /\b(iPhone|iP[ao]d)/.exec(t), me = /\b(iP[ao]d)/.exec(t), pe = /Android/i.exec(t), ye = /FBAN\/\w+;/i.exec(t), ve = /Mobile/i.exec(t), de = !!/Win64/.exec(t), e) {
                (ne = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) && document && document.documentMode && (ne = document.documentMode)
                var n = /(?:Trident\/(\d+.\d+))/.exec(t)
                le = n ? parseFloat(n[1]) + 4 : ne,
                    oe = e[2] ? parseFloat(e[2]) : NaN,
                    re = e[3] ? parseFloat(e[3]) : NaN,
                    (se = e[4] ? parseFloat(e[4]) : NaN) ? (e = /(?:Chrome\/(\d+\.\d+))/.exec(t), ae = e && e[1] ? parseFloat(e[1]) : NaN) : ae = NaN
            } else
                ne = oe = re = ae = se = NaN
            if (i) {
                if (i[1]) {
                    var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t)
                    he = !o || parseFloat(o[1].replace("_", "."))
                } else
                    he = !1
                ce = !!i[2],
                    ue = !!i[3]
            } else
                he = ce = ue = !1
        }
    }
    var Oe = {
            ie: function() {
                return Se() || ne
            },
            ieCompatibilityMode: function() {
                return Se() || le > ne
            },
            ie64: function() {
                return Oe.ie() && de
            },
            firefox: function() {
                return Se() || oe
            },
            opera: function() {
                return Se() || re
            },
            webkit: function() {
                return Se() || se
            },
            safari: function() {
                return Oe.webkit()
            },
            chrome: function() {
                return Se() || ae
            },
            windows: function() {
                return Se() || ce
            },
            osx: function() {
                return Se() || he
            },
            linux: function() {
                return Se() || ue
            },
            iphone: function() {
                return Se() || fe
            },
            mobile: function() {
                return Se() || fe || me || pe || ve
            },
            nativeApp: function() {
                return Se() || ye
            },
            android: function() {
                return Se() || pe
            },
            ipad: function() {
                return Se() || me
            }
        },
        _e = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")
    var Te = Oe.firefox() ? "DOMMouseScroll" : function(t, e) {
            if (e && !("addEventListener" in document))
                return !1
            var i = "on" + t,
                n = i in document
            if (!n) {
                var o = document.createElement("div")
                o.setAttribute(i, "return;"),
                    n = "function" == typeof o[i]
            }
            return !n && _e && "wheel" === t && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
        }("wheel") ? "wheel" : "mousewheel",
        ke = function() {
            function t(t, e) {
                this.view = t,
                    this.selector = e,
                    this.onWheel = _.bind(this.onWheel, this),
                    t.delegate(Te, e, this.onWheel)
            }
            return t.prototype.remove = function() {
                this.view.undelegate(Te, this.selector, this.onWheel)
            }, t.prototype.handleWheel = function(t, e) {
                return !1
            }, t.prototype.onWheel = function(t) {
                this.handleWheel(t, function(t) {
                    var e = 0,
                        i = 0,
                        n = 0,
                        o = 0
                    return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, o = 10 * i, "deltaY" in t && (o = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || o) && t.deltaMode && (1 == t.deltaMode ? (n *= 40, o *= 40) : (n *= 800, o *= 800)), n && !e && (e = n < 1 ? -1 : 1), o && !i && (i = o < 1 ? -1 : 1), {
                        spinX: e,
                        spinY: i,
                        pixelX: n,
                        pixelY: o
                    }
                }(t)) && t.preventDefault()
            }, t
        }(),
        Me = wt.a.getInstance().getGroup("spring"),
        Pe = {
            to: void 0,
            damp: .3,
            acceleration: .15,
            epsilon: .001
        },
        Le = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.currentValue = i.from ? i.from : e.getValue(), n.state = 1, i = _.defaults(i, Pe), n.initialize(i), n.proceed(i), n
            }
            return n.c(e, t), e.prototype.initialize = function(t) {}, e.prototype.areValuesEqual = function(t, e) {
                return t == e
            }, e.prototype.proceed = function(t) {
                this.targetValue = t.to,
                void 0 !== t.acceleration && (this.acceleration = t.acceleration),
                void 0 !== t.damp && (this.damp = t.damp),
                void 0 !== t.epsilon && (this.epsilon = t.epsilon),
                1 == this.state || this.areValuesEqual(this.targetValue, t.to) || (this.state = 1, vt.getInstance().add(this))
            }, e.prototype.update = function(t, e) {
                return !(6 & this.state) && (this.advance(e) ? (this.accessor.setValue(this.currentValue), !0) : (this.accessor.setValue(this.targetValue), this.setState(2), !1))
            }, e.create = function(t, e) {
                for (var i = t.getValue(), n = 0, o = Me.plugins; n < o.length; n++) {
                    var r = o[n].tryCreate(t, e, i)
                    if (null != r)
                        return r
                }
                return null
            }, e
        }(Ot)
    function Ie(t, e, i) {
        var n = xt.create(t, e)
        if (null == n)
            throw new Error('Could not create an accessor for the property "' + e + '" on "' + t + '", did you import all necessary accessor classes?')
        var o = Le.create(n, i)
        if (null == o)
            throw new Error('Could not create a spring for the property "' + e + '" on "' + t + '", did you import all necessary spring classes?')
        return vt.getInstance().add(o), o
    }
    (function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var i
        n.c(e, t),
            i = e,
            e.prototype.initialize = function(t) {
                this.velocity = this.currentValue.clone().reset()
            },
            e.prototype.areValuesEqual = function(t, e) {
                return t.equals(e)
            },
            e.prototype.advance = function(t) {
                var e = this.currentValue,
                    i = this.targetValue,
                    n = i.clone().subtract(e)
                return n.length() < this.epsilon ? (e.copy(i), !1) : (n.scale(this.acceleration), e.add(this.velocity.scale(this.damp).add(n)), !0)
            },
            e.tryCreate = function(t, e, n) {
                if ("object" == typeof (r = n) && r.length && "function" == typeof r.length && r.reset && "function" == typeof r.reset && r.copy && "function" == typeof r.copy && r.add && "function" == typeof r.add && r.subtract && "function" == typeof r.subtract && r.scale && "function" == typeof r.scale) {
                    var o = n.convert(e.to)
                    if (null == o)
                        throw new Error("Type mismatch: Spring initial and target value must be of the same type.")
                    return e.to = o, new i(t, e)
                }
                return null
                var r
            },
            e = i = n.b([Object(Pt.a)("spring", {
                tryCreate: i.tryCreate
            })], e)
    })(Le),
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            var i
            n.c(e, t),
                i = e,
                e.prototype.initialize = function(t) {
                    this.velocity = 0
                },
                e.prototype.advance = function(t) {
                    var e = this.targetValue - this.currentValue
                    return Math.abs(e) < this.epsilon ? (this.currentValue = this.targetValue, !1) : (this.velocity = this.velocity * this.damp + e * this.acceleration, this.currentValue += this.velocity, !0)
                },
                e.tryCreate = function(t, e, n) {
                    if ("number" != typeof n)
                        return null
                    if ("number" != typeof e.to)
                        throw new Error("Type mismatch: Spring target value must be numeric.")
                    return new i(t, e)
                },
                e = i = n.b([Object(Pt.a)("spring", {
                    tryCreate: i.tryCreate
                })], e)
        }(Le)
    var Ve,
        Ae = A.a.getInstance(),
        Ee = Oe.windows() ? -.1 : .05,
        Ne = function(t) {
            function e(e, i) {
                var n = t.call(this, e) || this
                return n.minOffset = new ft(0, 0), n.maxOffset = new ft(0, 0), n.onScaleRemove = _.bind(n.onScaleRemove, n), n.onOffsetRemove = _.bind(n.onOffsetRemove, n), n
            }
            return n.c(e, t), e.prototype.scaleTo = function(t) {
                this.scaleSpring ? this.scaleSpring.targetValue = t : this.scaleSpring = Ie(this.view, "scale", {
                    to: t,
                    epsilon: 1e-8,
                    removed: this.onScaleRemove
                })
            }, e.prototype.offsetTo = function(t) {
                this.offsetSpring ? this.offsetSpring.targetValue = t : this.offsetSpring = Ie(this.view, "offset", {
                    to: t,
                    removed: this.onOffsetRemove
                })
            }, e.prototype.handleWheel = function(t, e) {
                var i = this.view,
                    n = i.getScale(),
                    o = n
                if (e.spinY < -.01 ? o /= 1 - e.spinY * Ee : e.spinY > .01 && (o *= 1 + e.spinY * Ee), o < i.minScale && (o = i.minScale), o > i.maxScale && (o = i.maxScale), !(Math.abs(n - o) < 1e-4)) {
                    i.updateOffsetBounds(this.minOffset, this.maxOffset, o)
                    var r = new ft(t.pageX - Ae.scrollLeft, t.pageY - Ae.scrollTop)
                    return r.add((i.offsetX - r.x) / i.scale * o, (i.offsetY - r.y) / i.scale * o).max(this.minOffset).min(this.maxOffset), this.scaleTo(o), this.offsetTo(r), !0
                }
            }, e.prototype.onScaleRemove = function() {
                this.scaleSpring = null
            }, e.prototype.onOffsetRemove = function() {
                this.offsetSpring = null
            }, e
        }(ke)
    i(29)
    !function(t) {
        t[t.Content = 0] = "Content",
            t[t.Layer = 1] = "Layer",
            t[t.Home = 2] = "Home",
            t[t.Presentation = 3] = "Presentation"
    }(Ve || (Ve = {}))
    var De,
        Re = function(t) {
            function e(e) {
                var n = t.call(this, _.defaults(e || {}, {
                    canvasClassName: "dsArtworkViewer__canvas",
                    className: "dsArtworkViewer"
                })) || this
                if (n.handlers = [], n.isEnabled = !1, n.scaleMode != Ve.Layer) {
                    n.handleViewportResize()
                    for (var o = n.el.parentNode; o && o.classList;) {
                        if (o.classList.contains("dsArtworkHeader")) {
                            o.classList.add("active"),
                                A.a.getInstance().triggerResize()
                            break
                        }
                        o = o.parentNode
                    }
                }
                return i.INSTANCE || (i.INSTANCE = n), n.controls && n.setEnabled(!0), n
            }
            var i
            return n.c(e, t), i = e, e.prototype.alignToOrigin = function(t, e) {
                if (t instanceof i) {
                    var n = t.canvas.getBoundingClientRect()
                    this.scale = t.scale,
                        this.offsetX = n.left + t.offsetX,
                        this.offsetY = n.top + t.offsetY
                } else {
                    n = t.getBoundingClientRect()
                    this.scale = n.width / this.pyramid.nativeWidth,
                        this.offsetX = n.left,
                        this.offsetY = n.top
                }
                if (e) {
                    var o = _(this.handlers).find((function(t) {
                        return t instanceof be
                    }))
                    o && o.takeState(e)
                }
                this.onFrame()
            }, e.prototype.tweenFromOrigin = function(t) {
                this.fitToView()
                var e = this.getOffset(),
                    i = this.getScale()
                return this.alignToOrigin(t), Mt(this, "offset", {
                    duration: 1e3,
                    delay: 200,
                    easing: It,
                    to: e
                }), Mt(this, "scale", {
                    duration: 1e3,
                    delay: 200,
                    easing: It,
                    to: i
                })
            }, e.prototype.fitToView = function() {
                var t = this.scale = Math.min(1, Math.min(this.viewWidth / this.pyramid.nativeWidth, this.viewHeight / this.pyramid.nativeHeight))
                this.offsetX = .5 * (this.viewWidth - this.pyramid.nativeWidth * t),
                    this.offsetY = .5 * (this.viewHeight - this.pyramid.nativeHeight * t),
                    this.needsRedraw = !0
            }, e.prototype.cropToView = function() {
                var t = this.pyramid,
                    e = this.viewHeight,
                    i = this.viewWidth,
                    n = t.nativeWidth,
                    o = t.nativeHeight,
                    r = 1.1 * Math.max(i / n, e / o)
                this.offsetX = at.calculateShift(i, n * r, this.centerX),
                    this.offsetY = at.calculateShift(e, o * r, this.centerY),
                    this.scale = r,
                    this.needsRedraw = !0
            }, e.prototype.zoomIn = function() {
                this.zoomTo(1.5 * this.getScale())
            }, e.prototype.zoomOut = function() {
                this.zoomTo(.666 * this.getScale())
            }, e.prototype.zoomTo = function(t) {
                t < this.minScale && (t = this.minScale),
                t > this.maxScale && (t = this.maxScale)
                var e = {
                        x: 0,
                        y: 0
                    },
                    i = {
                        x: 0,
                        y: 0
                    }
                this.updateOffsetBounds(e, i, t)
                var n = new ft(.5 * this.viewWidth, .5 * this.viewHeight)
                n.add((this.offsetX - n.x) / this.scale * t, (this.offsetY - n.y) / this.scale * t).max(e).min(i),
                    Mt(this, "offset", {
                        duration: 500,
                        to: n,
                        easing: Vt
                    }),
                    Mt(this, "scale", {
                        duration: 500,
                        to: t,
                        easing: Vt
                    })
            }, e.prototype.setEnabled = function(t) {
                if (this.isEnabled != t) {
                    this.isEnabled = t,
                        this.el.classList.toggle("enabled", t)
                    var e = this.handlers
                    if (t)
                        this.controls ? e.push(new Ce(this)) : (e.push(new be(this)), e.push(new Ne(this)))
                    else {
                        for (var i = 0, n = e; i < n.length; i++) {
                            n[i].remove()
                        }
                        e.length = 0
                    }
                }
            }, e.prototype.setSize = function(e, i) {
                var n = Math.min(1, Math.min(this.viewWidth / this.pyramid.nativeWidth, this.viewHeight / this.pyramid.nativeHeight)),
                    o = Math.abs(this.scale - n) < .001
                t.prototype.setSize.call(this, e, i),
                    gt(this),
                o && this.fitToView()
            }, e.prototype.handleViewportResize = function() {
                var t = this.pyramid
                if (!t)
                    return !0
                if (this.scaleMode == Ve.Content) {
                    var e = A.a.getInstance(),
                        i = this.el.offsetWidth,
                        n = .75 * e.height,
                        o = .33 * e.height,
                        r = t.nativeWidth,
                        s = t.nativeHeight,
                        a = Math.min(i / r, n / s)
                    this.setSize(i, Math.max(o, Math.round(s * a))),
                        this.fitToView()
                } else
                    this.scaleMode == Ve.Home ? (this.setSize(this.el.offsetWidth, this.el.offsetHeight), this.cropToView()) : this.scaleMode == Ve.Presentation && (this.setSize(this.el.offsetWidth, this.el.offsetHeight), this.fitToView())
                return !0
            }, e.prototype.onControlsClick = function() {
                return Ge.create(this), !0
            }, e.prototype.onFrame = function() {
                var e = this.controls,
                    i = this.needsRedraw
                if (e && i) {
                    var n = this,
                        o = n.pyramid,
                        r = n.offsetX,
                        s = n.offsetY,
                        a = n.scale,
                        l = n.viewHeight,
                        h = r,
                        c = n.viewWidth - (h + o.nativeWidth * a),
                        u = s,
                        p = l - (u + o.nativeHeight * a)
                    e.style.left = Math.max(0, h) + "px",
                        e.style.right = Math.max(0, c) + "px",
                        e.style.top = Math.max(0, u) + "px",
                        e.style.bottom = Math.max(0, p) + "px"
                }
                t.prototype.onFrame.call(this)
            }, e.INSTANCE = null, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkViewer__controls"
            })], e.prototype, "controls", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Number
            })], e.prototype, "physicalWidth", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Enum,
                constraint: Ve,
                defaultValue: Ve.Content
            })], e.prototype, "scaleMode", void 0), e = i = n.b([Object(o.Component)(".dsArtworkViewer")], e)
        }(Kt),
        He = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.preview = e, n
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                for (var i = t.target, n = null; i && i.classList;) {
                    if (i.classList.contains("dsArtworkLayerPreview__rect")) {
                        var o = i.getBoundingClientRect(),
                            r = o.left,
                            s = o.top
                        n = {
                            x: e.x - r,
                            y: e.y - s
                        }
                        break
                    }
                    i = i.parentNode
                }
                return this.offset = n || this.getDefaultOffset(), !0
            }, e.prototype.handleDragMove = function(t, e) {
                return this.setPositionFromPointer(e, this.offset), !0
            }, e.prototype.handleClick = function(t, e) {
                this.setPositionFromPointer(e, this.getDefaultOffset())
            }, e.prototype.getDefaultOffset = function() {
                var t = this.preview.rect
                return {
                    x: .5 * t.offsetWidth,
                    y: .5 * t.offsetHeight
                }
            }, e.prototype.setPositionFromPointer = function(t, e) {
                var i = this.preview,
                    n = e.x,
                    o = e.y,
                    r = i.el.getBoundingClientRect(),
                    s = r.left,
                    a = r.top
                i.setPosition(s - t.x + n, a - t.y + o)
            }, e
        }(O),
        je = (A.a.getInstance(), Oe.windows() ? -.1 : .05),
        Be = function(t) {
            function e(e, i) {
                var n = t.call(this, e) || this
                return n.minOffset = new ft(0, 0), n.maxOffset = new ft(0, 0), n.onScaleRemove = _.bind(n.onScaleRemove, n), n.onOffsetRemove = _.bind(n.onOffsetRemove, n), n
            }
            return n.c(e, t), e.prototype.scaleTo = function(t) {
                var e = this.view.viewer
                this.scaleSpring ? this.scaleSpring.targetValue = t : this.scaleSpring = Ie(e, "scale", {
                    to: t,
                    epsilon: 1e-8,
                    removed: this.onScaleRemove
                })
            }, e.prototype.offsetTo = function(t) {
                var e = this.view.viewer
                this.offsetSpring ? this.offsetSpring.targetValue = t : this.offsetSpring = Ie(e, "offset", {
                    to: t,
                    removed: this.onOffsetRemove
                })
            }, e.prototype.handleWheel = function(t, e) {
                var i = this.view.viewer,
                    n = i.getScale(),
                    o = n
                if (e.spinY < -.01 ? o /= 1 - e.spinY * je : e.spinY > .01 && (o *= 1 + e.spinY * je), o < i.minScale && (o = i.minScale), o > i.maxScale && (o = i.maxScale), !(Math.abs(n - o) < 1e-4)) {
                    i.updateOffsetBounds(this.minOffset, this.maxOffset, o)
                    this.view.el.getBoundingClientRect()
                    var r = new ft(.5 * i.viewWidth, .5 * i.viewHeight)
                    return r.add((i.offsetX - r.x) / i.scale * o, (i.offsetY - r.y) / i.scale * o).max(this.minOffset).min(this.maxOffset), this.scaleTo(o), this.offsetTo(r), !0
                }
            }, e.prototype.onScaleRemove = function() {
                this.scaleSpring = null
            }, e.prototype.onOffsetRemove = function() {
                this.offsetSpring = null
            }, e
        }(ke),
        ze = (i(30), A.a.getInstance(), ["mm", "cm", "dm", "m"]),
        Fe = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.isVisible = !1,
                    i.isMouseAbove = !1
                var n = e.viewer
                return i.viewer = n, i.physicalWidth = isNaN(e.physicalWidth) ? null : e.physicalWidth, i.createImage(n), new He(i), new Be(i), i.delegate("mouseover", null, _(i.onMouseOver).bind(i)), i.delegate("mouseout", null, _(i.onMouseOut).bind(i)), i.listenTo(n, "scale", i.onScale), i.listenTo(n, "offset", i.onOffset), i
            }
            return n.c(e, t), e.prototype.createImage = function(t) {
                var e = t.pyramid,
                    i = e.levels[0],
                    n = Math.min(250 / i.width, 250 / i.height),
                    o = document.createElement("img")
                o.className = "dsArtworkLayerPreview__image",
                    o.width = this.previewWidth = Math.round(i.width * n),
                    o.height = this.previewHeight = Math.round(i.height * n),
                    o.src = i.path + "/0_0." + e.format,
                    this.el.appendChild(o)
            }, e.prototype.setPosition = function(t, e) {
                var i = this.previewWidth,
                    n = this.viewer,
                    o = n.pyramid,
                    r = n.maxOffset,
                    s = n.minOffset,
                    a = n.scale,
                    l = i / (o.nativeWidth * a)
                gt(n),
                    n.setOffset({
                        x: Math.min(r.x, Math.max(s.x, t / l)),
                        y: Math.min(r.y, Math.max(s.y, e / l))
                    })
            }, e.prototype.update = function() {
                var t = this,
                    e = t.display,
                    i = t.previewWidth,
                    n = t.physicalWidth,
                    o = t.rect,
                    r = t.viewer,
                    s = r.pyramid,
                    a = r.offsetX,
                    l = r.offsetY,
                    h = r.scale,
                    c = r.viewWidth,
                    u = r.viewHeight,
                    p = s.nativeWidth,
                    d = s.nativeHeight,
                    f = i / (p * h),
                    m = Math.max(0, -a),
                    y = Math.max(0, -l),
                    v = Math.max(0, -(c - (a + p * h))),
                    g = Math.max(0, -(u - (l + d * h)))
                if (n) {
                    for (var w = Math.max(0, (p - v / h - m / h) / p * n), b = 0; w > 100 && b < ze.length - 1;)
                        w *= .1,
                            b += 1
                    2 == b && (b = 1, w *= 10),
                        e.innerHTML = Math.round(w) + " " + ze[b]
                }
                o.style.left = m * f + "px",
                    o.style.top = y * f + "px",
                    o.style.right = v * f + "px",
                    o.style.bottom = g * f + "px"
            }, e.prototype.setVisible = function(t) {
                this.isVisible != t && (this.isVisible = t, this.el.classList.toggle("visible", t))
            }, e.prototype.startTimeout = function() {
                var t = this
                this.isMouseAbove || (this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((function() {
                    t.setVisible(!1),
                        t.timeout = null
                }), 2e3))
            }, e.prototype.stopTimeout = function() {
                this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }, e.prototype.onMouseOver = function() {
                this.isMouseAbove = !0,
                    this.stopTimeout()
            }, e.prototype.onMouseOut = function() {
                this.isMouseAbove = !1,
                    this.startTimeout()
            }, e.prototype.onOffset = function() {
                this.update(),
                    this.setVisible(!0),
                    this.startTimeout()
            }, e.prototype.onScale = function() {
                this.update(),
                    this.setVisible(!0),
                    this.startTimeout()
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkLayerPreview__display"
            })], e.prototype, "display", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkLayerPreview__rect"
            })], e.prototype, "rect", void 0), e
        }(o.View),
        We = (i(31), function(t) {
            function e(e) {
                return t.call(this, _.defaults(e, {
                    className: "dsArtworkLayerPlayer",
                    template: i(32)
                })) || this
            }
            return n.c(e, t), e.prototype.setPlayer = function(e) {
                this.player != e && (t.prototype.setPlayer.call(this, e), e && (this.listenTo(e, "track", this.onTrack), this.listenTo(e, "currentTime", this.onCurrentTime), this.onCurrentTime(e.getCurrentTime()), this.onTrack(e.getTrack())))
            }, e.prototype.onCurrentTime = function(t) {
                this.currentTime.innerText = ct.formatTime(t)
            }, e.prototype.onTrack = function(t) {
                this.el.classList.toggle("hasTrack", !!t)
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkLayerPlayer__time"
            })], e.prototype, "currentTime", void 0), e
        }(ut)),
        qe = (i(33), pt.getInstance()),
        Ue = function(t) {
            return '\n  <div class="dsPresentationOverlay__labelTitle">' + t.title + '</div>\n  <div class="dsPresentationOverlay__labelCreator">' + t.creator + "</div>\n"
        },
        Ye = function(t) {
            function e(e) {
                var i = t.call(this, e) || this,
                    n = i.player
                n.setPlayer(qe)
                var o = e.owner
                return i.presentation = o, i.listenTo(o, "change", i.onPresentationChange), i.listenTo(o, "media", i.onPresentationMedia), i.listenTo(n, "playEmpty", i.onPlayEmpty), new M(i, i.onButtonClick, "button[data-action]"), i
            }
            return n.c(e, t), e.prototype.remove = function() {
                return qe.setTrack(null), t.prototype.remove.call(this)
            }, e.prototype.setTitle = function(t) {
                this.el.querySelector(".dsPresentationOverlay__title").innerHTML = t
            }, e.prototype.onPlayEmpty = function() {
                var t = this.artwork.media
                t.length && (qe.setTrack(t[0]), qe.play())
            }, e.prototype.onPresentationChange = function(t, e, i) {
                this.artwork != i && (this.label.setContent(new o.View({
                    className: "dsPresentationOverlay__labelItem",
                    template: Ue(i)
                }), {
                    className: t > this.index ? "transition" : "transitionInverse"
                }), this.next.disabled = t >= e - 1, this.previous.disabled = t < 1, this.number.innerHTML = t + 1 + "⁄" + e, this.artwork = i, this.index = t, this.onPresentationMedia())
            }, e.prototype.onPresentationMedia = function() {
                var t = this.artwork.media,
                    e = t.length ? t[0] : null,
                    i = qe.track
                !i || e && e.get("id") == i.get("id") || qe.setTrack(null),
                    this.player.onTrack(e)
            }, e.prototype.onButtonClick = function(t, e) {
                if (!e || !e.hasAttribute("data-action"))
                    return !1
                var i = this.presentation
                switch (e.getAttribute("data-action")) {
                    case "previous":
                        return i.setIndex(i.index - 1, {
                            easing: St
                        }), !0
                    case "next":
                        return i.setIndex(i.index + 1, {
                            easing: St
                        }), !0
                    case "close":
                        return i.close(), !0
                    case "info":
                        return this.el.classList.toggle("info"), !0
                }
                return !1
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsPresentationOverlay__label",
                childClass: tt,
                childOptions: {
                    appendNewContent: !0,
                    removeOldContent: !0
                }
            })], e.prototype, "label", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkLayerPlayer",
                childClass: We
            })], e.prototype, "player", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPresentationOverlay__number"
            })], e.prototype, "number", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPresentationOverlay__arrow.previous"
            })], e.prototype, "previous", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPresentationOverlay__arrow.next"
            })], e.prototype, "next", void 0), e
        }(o.View),
        Xe = (i(34), i(35)),
        Ge = function(t) {
            function e(i) {
                var n = t.call(this, _.defaults(i || {}, {
                    className: "dsArtworkLayer",
                    appendTo: document.body
                })) || this
                n.isClosed = !1,
                    e.INSTANCE = n
                var o = A.a.getInstance()
                o.disableScrollbars(n),
                    n.listenTo(o, "resize", n.onViewportResize),
                    n.onViewportResize(),
                    n.onKeyUp = _.bind(n.onKeyUp, n),
                    w.getInstance().delegate("keyup", null, n.onKeyUp),
                    new M(n, n.onButtonClick, "button")
                var r = i.handler,
                    s = i.origin
                return s ? r ? n.viewer.alignToOrigin(s, r) : n.viewer.tweenFromOrigin(s) : n.viewer.fitToView(), n
            }
            return n.c(e, t), e.prototype.initialize = function(t) {
                this.el.innerHTML = Xe,
                    this.createViewer(t).createInfo().createPlayer()
            }, e.prototype.createInfo = function() {
                var t = this.el,
                    e = document.querySelector(".dsHeaderArtwork__titleWrap")
                if (e) {
                    var i = t.querySelector(".dsPresentationOverlay__info"),
                        n = t.querySelector(".dsPresentationOverlay__label"),
                        o = t.querySelector(".dsPresentationOverlay__labelItem"),
                        r = e.querySelector(".dsHeaderArtwork__titleCreators"),
                        s = e.querySelector(".dsHeaderArtwork__titleCaption")
                    if (i && r && s && n && o)
                        return o.innerHTML = Ue({
                            creator: r.innerHTML,
                            title: s.innerHTML
                        }), this.delegate("click", ".dsPresentationOverlay__info", (function() {
                            var t = !n.classList.contains("visible")
                            n.classList.toggle("visible", t),
                                i.classList.toggle("active", t)
                        })), this
                }
            }, e.prototype.createPlayer = function() {
                var t = pt.getInstance(),
                    e = this.el.querySelector(".dsArtworkLayerPlayer")
                return e && (this.player = new We({
                    el: e,
                    player: t
                })), this
            }, e.prototype.createViewer = function(t) {
                var e = t.artworkViewer,
                    i = this.el,
                    n = e.physicalWidth,
                    o = i.querySelector(".dsArtworkLayerPreview"),
                    r = new Re({
                        pyramid: e.pyramid,
                        surface: e.renderer.surface,
                        scaleMode: Ve.Layer,
                        appendTo: i
                    })
                r.setEnabled(!0)
                var s = i.querySelector(".dsArtworkLayer__controls")
                return s && i.insertBefore(r.el, s), this.viewer = r, o && (this.preview = new Fe({
                    el: o,
                    viewer: r,
                    physicalWidth: n
                })), this
            }, e.prototype.remove = function() {
                return this.unfreezeCallback && (this.unfreezeCallback(), this.unfreezeCallback = null), this.viewer && (this.viewer.remove(), this.viewer = null), e.INSTANCE = null, A.a.getInstance().enableScrollbars(this), w.getInstance().undelegate("keyup", null, this.onKeyUp), t.prototype.remove.call(this)
            }, e.prototype.close = function() {
                var t = this
                this.isClosed || (this.isClosed = !0, this.unfreezeCallback && (this.unfreezeCallback(), this.unfreezeCallback = null), this.el.classList.add("fadeOut"), setTimeout((function() {
                    return t.remove()
                }), 500))
            }, e.prototype.onButtonClick = function(t, e) {
                if (!e || !e.hasAttribute("data-action"))
                    return !1
                switch (e.getAttribute("data-action")) {
                    case "zoom-in":
                        return this.viewer.zoomIn(), !0
                    case "zoom-out":
                        return this.viewer.zoomOut(), !0
                    case "close":
                        return this.close(), !0
                }
                return !1
            }, e.prototype.onViewportResize = function() {
                var t = this.el,
                    e = this.viewer,
                    i = t.offsetWidth,
                    n = t.offsetHeight
                e.viewHeight === n && e.viewWidth === i || e.setSize(i, n)
            }, e.prototype.onKeyUp = function(t) {
                27 == t.keyCode && this.close()
            }, e.canCreate = function() {
                if ("visualViewport" in window)
                    return 1 === window.visualViewport.scale
                var t = !0,
                    e = document.createElement("div")
                document.body.appendChild(e)
                try {
                    e.style.position = "fixed",
                        e.style.top = "0",
                        e.style.left = "0",
                        e.style.width = "2px",
                        e.style.height = "2px",
                        e.style.background = "#000",
                        e.style.zIndex = "1032"
                    var i = e.getBoundingClientRect()
                    if (0 !== i.left || 0 !== i.top || document.elementFromPoint(1, 1) !== e)
                        throw new Error
                    if (e.style.top = "", e.style.left = "", e.style.right = "0", e.style.bottom = "0", i = e.getBoundingClientRect(), document.elementFromPoint(i.left + 1, i.top + 1) !== e)
                        throw new Error
                } catch (e) {
                    t = !1
                }
                return document.body.removeChild(e), t
            }, e.create = function(t, i) {
                if (e.INSTANCE)
                    return null
                if (!e.canCreate())
                    return null
                var n = null
                if (t instanceof Re)
                    n = t
                else {
                    var r = document.querySelector(".dsArtworkViewer")
                    if (!r)
                        return null
                    var s = o.ComponentRegistry.getInstance().rootNode.getNode(r).instance
                    if (!(s instanceof Re))
                        return null
                    n = s
                }
                if (!t) {
                    var a = A.a.getInstance(),
                        l = n.el.getBoundingClientRect()
                    if (l.top > 100 - l.height && l.top < a.height - 100)
                        t = n
                    else {
                        var h = document.querySelector(".dsHeaderArtwork .dsArtworkImage__image")
                        h && (l = h.getBoundingClientRect()).width > 0 && l.height > 0 && (t = h)
                    }
                }
                return new e({
                    artworkViewer: n,
                    handler: i,
                    origin: t
                })
            }, e.INSTANCE = null, e
        }(o.View),
        Qe = (i(36), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isImageVisible = !0, i.branding = e.owner, i.listenTo(pt.getInstance(), "state", i.onPlayState), new M(i, i.onArtworkClick, ".dsHeaderArtwork__imageWrap"), i
            }
            return n.c(e, t), e.prototype.getFold = function(t) {
                return .6 * t
            }, e.prototype.update = function(t, e) {
                var i = this.imageWrap
                i && (t && i.load(), this.isImageVisible !== e && (this.isImageVisible = e, this.el.classList.toggle("noImage", !e)))
            }, e.prototype.onArtworkClick = function() {
                return Ge.create(this.imageWrap.image.el), !0
            }, e.prototype.onPlayState = function(t) {
                var e = !(t == st.Empty || t == st.Ended)
                this.branding.setForceContentBranding(e)
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkImage",
                childClass: at,
                childOptions: {
                    scaleMode: nt.Height,
                    disableVisibilityCheck: !0
                }
            })], e.prototype, "imageWrap", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsAudioPlayer",
                childClass: dt
            })], e.prototype, "audioPlayer", void 0), e
        }(o.View)),
        Ke = (i(37), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return new M(i, i.onTopClick), i
            }
            return n.c(e, t), e.prototype.getFold = function(t) {
                return 300
            }, e.prototype.update = function(t, e) {}, e.prototype.onTopClick = function() {
                var t = A.a.getInstance()
                return Mt(t, "scrollTop", {
                    to: 0,
                    duration: Math.max(200, Math.min(1e3, 2 * Math.abs(t.scrollTop)))
                }), !0
            }, e
        }(o.View)),
        Je = (i(38), [{
            className: "artwork",
            viewClass: Qe
        }, {
            className: "search",
            viewClass: Ke
        }]),
        $e = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.isContentForced = !1,
                    i.isContentVisible = !1,
                    i.isBelowFold = !1
                var n = i,
                    o = n.contentBranding,
                    r = n.genericBranding,
                    s = A.a.getInstance()
                return i.content = r, i.header = e.owner, i.viewport = s, o && i.listenTo(s, "scroll", i.onViewportScroll), i
            }
            return n.c(e, t), e.prototype.setForceContentBranding = function(t) {
                this.isContentForced !== t && (this.isContentForced = t, this.update())
            }, e.prototype.setBelowFold = function(t) {
                this.isBelowFold !== t && (this.isBelowFold = t, this.update())
            }, e.prototype.update = function() {
                var t = this.contentBranding,
                    e = this.genericBranding,
                    i = this.isBelowFold,
                    n = this.isContentForced,
                    o = i || n
                if (this.isContentVisible !== o) {
                    var r = this.header.content == this
                    this.isContentVisible = o,
                        o ? this.setContent(t, {
                            className: r ? "transition" : null
                        }) : this.setContent(e, {
                            className: r ? "transitionBack" : null
                        })
                }
                t.update(o, i)
            }, e.prototype.onViewportScroll = function(t, e) {
                var i = this.contentBranding,
                    n = this.viewport
                this.setBelowFold(e > i.getFold(n.height))
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsHeaderBranding__content.default",
                childClass: o.View
            })], e.prototype, "genericBranding", void 0), n.b([Object(o.ChildComponent)({
                selector: _(Je).map((function(t) {
                    return ".dsHeaderBranding__content." + t.className
                })).join(","),
                childClass: function(t) {
                    return new (0, _(Je).find((function(e) {
                        return t.el.classList.contains(e.className)
                    })).viewClass)(t)
                }
            })], e.prototype, "contentBranding", void 0), e
        }(tt),
        Ze = function(t) {
            function e(e) {
                var i = t.call(this, e || (e = {})) || this,
                    n = i.container || (i.container = i.createContainer()),
                    o = i.children = []
                if (e.collection)
                    i.listenToCollection(e.collection),
                        i.resetToCollection()
                else if (e.children)
                    for (var r = 0, s = e.children; r < s.length; r++) {
                        var a = s[r]
                        o.push(a),
                            n.appendChild(a.el)
                    }
                else if (e.childSelector)
                    for (var l = 0, h = i.el.querySelectorAll(e.childSelector); l < h.length; l++) {
                        var c = h[l];
                        (e.allowGrandChildren || c.parentNode == n) && o.push(i.createChildFromElement(c))
                    }
                return i
            }
            return n.c(e, t), e.prototype.remove = function() {
                for (var e = 0, i = this.children; e < i.length; e++) {
                    i[e].remove()
                }
                return t.prototype.remove.call(this)
            }, e.prototype.setCollection = function(t) {
                this.collection !== t && (this.collection && this.stopListeningToCollection(this.collection), this.collection = t, t ? (this.listenToCollection(t), this.resetToCollection()) : this._removeAllChildren())
            }, e.prototype.getLength = function() {
                return this.children.length
            }, e.prototype.getChild = function(t) {
                return this.children[t]
            }, e.prototype.indexOf = function(t) {
                return _(this.children).indexOf(t)
            }, e.prototype.addChild = function(t, e) {
                var i
                if (this.collection)
                    if (t.model) {
                        var n = {
                            views: (i = {}, i[t.model.cid] = t, i)
                        }
                        void 0 !== e && (n.index = e),
                            this.collection.add(t.model, n)
                    } else
                        console.log("Warn: Trying to append a child without a model to a list bound to a collection.")
                else
                    this._addChild(t, e)
                return this
            }, e.prototype._addChild = function(t, e) {
                var i = this.container,
                    n = this.children,
                    o = n.length
                void 0 === e || e >= o ? (e = o, i.appendChild(t.el), n.push(t)) : e <= 0 ? (e = 0, i.insertBefore(t.el, i.firstChild), n.unshift(t)) : (i.insertBefore(t.el, n[e].el), n.splice(e, 0, t)),
                    this.trigger("add", t, e)
            }, e.prototype.addChildren = function(t, e) {
                if (this.collection) {
                    for (var i = {}, n = [], o = 0, r = t; o < r.length; o++) {
                        var s = r[o]
                        s.model ? (i[s.model.cid] = s, n.push(s.model)) : console.log("Warn: Trying to append a child without a model to a list bound to a collection.")
                    }
                    if (n.length) {
                        var a = {
                            views: i
                        }
                        void 0 !== e && (a.index = e),
                            this.collection.add(n, a)
                    }
                } else
                    for (var l = 0, h = t.length; l < h; l++)
                        this._addChild(t[l], e ? e + l : e)
                return this
            }, e.prototype.removeChild = function(t) {
                return this.collection ? t.model ? this.collection.remove(t.model) : console.log("Warn: Trying to remove a child without a model from a list bound to a collection.") : this._removeChild(t), this
            }, e.prototype._removeChild = function(t) {
                var e = _(this.children).indexOf(t);
                -1 !== e && (t.remove(), this.children.splice(e, 1), this.trigger("remove", t, e))
            }, e.prototype.removeChildren = function(t) {
                if (this.collection) {
                    for (var e = [], i = 0, n = t; i < n.length; i++) {
                        (s = n[i]).model ? e.push(s.model) : console.log("Warn: Trying to remove a child without a model from a list bound to a collection.")
                    }
                    e.length && this.collection.remove(e)
                } else
                    for (var o = 0, r = t; o < r.length; o++) {
                        var s = r[o]
                        this._removeChild(s)
                    }
                return this
            }, e.prototype.removeAllChildren = function() {
                this.collection ? this.collection.reset() : this._removeAllChildren()
            }, e.prototype._removeAllChildren = function(t) {
                for (var e = 0, i = this.children; e < i.length; e++) {
                    i[e].remove()
                }
                this.children.length = 0,
                t || this.trigger("reset")
            }, e.prototype.createContainer = function() {
                return this.el
            }, e.prototype.alterChildOptions = function(t) {
                return t
            }, e.prototype.createChildFromElement = function(t) {
                return new this.childClass(this.alterChildOptions({
                    owner: this,
                    el: t
                }))
            }, e.prototype.createChildFromModel = function(t) {
                return new this.childClass(this.alterChildOptions({
                    owner: this,
                    model: t
                }))
            }, e.prototype.listenToCollection = function(t) {
                this.listenTo(t, "add", this.onCollectionAdd),
                    this.listenTo(t, "remove", this.onCollectionRemove),
                    this.listenTo(t, "reset", this.onCollectionReset),
                    this.listenTo(t, "sort", this.onCollectionSort)
            }, e.prototype.stopListeningToCollection = function(t) {
                this.stopListening(t, "add", this.onCollectionAdd),
                    this.stopListening(t, "remove", this.onCollectionRemove),
                    this.stopListening(t, "reset", this.onCollectionReset),
                    this.stopListening(t, "sort", this.onCollectionSort)
            }, e.prototype.resetToCollection = function() {
                this._removeAllChildren(!0)
                for (var t = 0, e = this.collection.models; t < e.length; t++) {
                    var i = e[t],
                        n = this.createChildFromModel(i)
                    this.children.push(n),
                        this.container.appendChild(n.el)
                }
                this.trigger("reset")
            }, e.prototype.syncWithCollection = function() {
                for (var t = this.container, e = this.children, i = this.children = [], n = 0, o = this.collection.models; n < o.length; n++) {
                    for (var r = o[n], s = null, a = 0, l = e.length; a < l; a++)
                        if (e[a].model == r) {
                            s = e[a],
                                e.splice(a, 1)
                            break
                        }
                    s || (s = this.createChildFromModel(r)),
                        i.push(s),
                        t.appendChild(s.el)
                }
                for (var h = 0, c = e; h < c.length; h++) {
                    (s = c[h]).remove()
                }
                this.trigger("reset")
            }, e.prototype.onCollectionAdd = function(t, e, i) {
                var n
                n = i.views && i.views[t.cid] ? i.views[t.cid] : this.createChildFromModel(t),
                    this._addChild(n, i.index)
            }, e.prototype.onCollectionRemove = function(t, e, i) {
                var n = this.getChild(i.index)
                n.model === t ? this._removeChild(n) : (console.log("Warn: View is out of sync with bound collection."), this.syncWithCollection())
            }, e.prototype.onCollectionReset = function() {
                this.resetToCollection()
            }, e.prototype.onCollectionSort = function() {
                this.syncWithCollection()
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM
            })], e.prototype, "container", void 0), n.b([Object(o.Option)({
                defaultValue: o.View
            })], e.prototype, "childClass", void 0), e
        }(o.View),
        ti = i(6),
        ei = function(t) {
            function e(e) {
                var i = t.call(this, e || (e = {})) || this
                return i.current = null, i.isLocked = !1, void 0 !== e.index ? i.setCurrentIndex(e.index) : e.current ? i.setCurrent(e.current) : i.autoSelectFirstChild && i.getLength() && i.setCurrentIndex(0), i.listenTo(i, "add", i.onChildAdd), i.listenTo(i, "remove", i.onChildRemove), i.listenTo(i, "reset", i.onChildrenReset), i
            }
            return n.c(e, t), e.prototype.normalize = function(t) {
                var e = this.getLength()
                if (e < 1)
                    return -1
                var i = t
                if (this.isLooped) {
                    for (; i < 0;)
                        i += e
                    for (; i >= e;)
                        i -= e
                } else {
                    if (i < 0)
                        return -1
                    if (i >= e)
                        return -1
                }
                return i
            }, e.prototype.handleTransition = function(t, e, i) {}, e.prototype.setCurrent = function(t, e) {
                if (this.isLocked || this.current === t)
                    return this
                var i = this.current
                return this.current = t, this.handleTransition(t, i, e), this.trigger("currentChanged", t, i), this
            }, e.prototype.setCurrentIndex = function(t, e) {
                return t = this.normalize(t), this.setCurrent(this.children[t], e)
            }, e.prototype.getCurrentIndex = function() {
                return this.indexOf(this.current)
            }, e.prototype.getNextChild = function() {
                return this.getChild(this.normalize(this.getCurrentIndex() + 1))
            }, e.prototype.getPreviousChild = function() {
                return this.getChild(this.normalize(this.getCurrentIndex() - 1))
            }, e.prototype.resetCurrent = function() {
                if (this.current) {
                    var t = !1;
                    -1 == this.getCurrentIndex() && (this.current = null, t = !0),
                        this.autoSelectFirstChild && this.getLength() ? this.setCurrent(this.children[0]) : t ? this.trigger("currentChanged", null, null) : this.setCurrent(null)
                }
            }, e.prototype.onChildAdd = function(t, e) {
                this.resetOnAnyChange && this.resetCurrent()
            }, e.prototype.onChildRemove = function(t) {
                (this.resetOnAnyChange || t == this.current) && this.resetCurrent()
            }, e.prototype.onChildrenReset = function() {
                (this.resetOnAnyChange || this.current && -1 == this.getCurrentIndex()) && this.resetCurrent()
            }, n.b([Object(o.Option)({
                type: ti.b.Bool,
                defaultValue: !1
            })], e.prototype, "autoSelectFirstChild", void 0), n.b([Object(o.Option)({
                type: ti.b.Bool,
                defaultValue: !1
            })], e.prototype, "isLooped", void 0), n.b([Object(o.Option)({
                type: ti.b.Bool,
                defaultValue: !1
            })], e.prototype, "resetOnAnyChange", void 0), e
        }(Ze)
    !function(t) {
        t[t.Fulltext = 0] = "Fulltext",
            t[t.Keyword = 1] = "Keyword",
            t[t.Period = 2] = "Period"
    }(De || (De = {}))
    var ii,
        ni = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return new M(i, i.onClick), i.onInputChange = _.bind(i.onInputChange, i), i.delegate("change", "input", i.onInputChange), i
            }
            return n.c(e, t), e.prototype.setIsChecked = function(t) {
                this.isChecked != t && (this.isChecked = t, this.input.checked = t, this.el.classList.toggle("checked", t))
            }, e.prototype.onInputChange = function() {
                var t = this.isChecked = this.input.checked
                this.el.classList.toggle("checked", t),
                    this.toggle.setCurrent(this)
            }, e.prototype.onClick = function() {
                return !!this.toggle.isCompact && (this.toggle.setCurrent(this.toggle.getNextChild()), !0)
            }, n.b([Object(o.Option)({
                type: o.OptionType.Owner
            })], e.prototype, "toggle", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: "input",
                tagName: "input"
            })], e.prototype, "input", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Enum,
                defaultValue: De.Fulltext,
                constraint: De
            })], e.prototype, "mode", void 0), e
        }(o.View),
        oi = (i(39), function(t) {
            function e(e) {
                return t.call(this, _.defaults(e || {}, {
                    childSelector: ".dsHeaderSearchMode__label",
                    childClass: ni,
                    isLooped: !0,
                    autoSelectFirstChild: !0
                })) || this
            }
            return n.c(e, t), e.prototype.setIsCompact = function(t) {
                this.isCompact != t && (this.isCompact = t, this.el.classList.toggle("compact", t))
            }, e.prototype.handleTransition = function(t, e, i) {
                t && (t.setIsChecked(!0), this.trigger("changeMode", t.mode)),
                e && e.setIsChecked(!1)
            }, e
        }(ei)),
        ri = i(14),
        si = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.hasFocus = !1,
                    i.value = i.input.value,
                    i.inputView = new r.a({
                        el: i.input
                    }),
                    i.field = i.field || i.el,
                    i.field.classList.toggle("hasValue", "" !== i.value),
                    i.onFocusIn = _.bind(i.onFocusIn, i),
                    i.onFocusOut = _.bind(i.onFocusOut, i),
                    i.onInput = _.bind(_.throttle(i.onInput, 50, {
                        leading: !1
                    }), i)
                var n = i.inputView
                return n.delegate("input", null, i.onInput), n.delegate("change", null, i.onInput), n.delegate("keyup", null, i.onInput), n.delegate("paste", null, i.onInput), i.el.setAttribute("tabindex", "-1"), i.delegate("focusin", null, i.onFocusIn), i.delegate("focusout", null, i.onFocusOut), i
            }
            return n.c(e, t), e.prototype.focus = function() {
                return this.input.focus(), this
            }, e.prototype.blur = function() {
                return this.input.blur(), this
            }, e.prototype.setValue = function(t) {
                return this.value == t || (this.value = t, this.input.value = t, this.field.classList.toggle("hasValue", "" !== t), this.trigger("change", t)), this
            }, e.prototype.onInput = function() {
                var t = this.input.value
                this.value != t && (this.value = t, this.field.classList.toggle("hasValue", "" !== t), this.trigger("change", t))
            }, e.prototype.onFocusIn = function(t) {
                this.hasFocus || (this.hasFocus = !0, this.field.classList.add("focused"), this.trigger("focus", !0))
            }, e.prototype.onFocusOut = function(t) {
                if (this.hasFocus) {
                    for (var e = t.relatedTarget; e;) {
                        if (e === this.el)
                            return
                        e = e.parentNode
                    }
                    this.hasFocus = !1,
                        this.field.classList.remove("focused"),
                        this.trigger("focus", !1)
                }
            }, n.b([Object(ri.a)({
                type: ti.b.DOM
            })], e.prototype, "field", void 0), n.b([Object(ri.a)({
                type: ti.b.DOM,
                defaultValue: "input,textarea",
                tagName: "input",
                className: "tuxInput__input"
            })], e.prototype, "input", void 0), e
        }(r.a),
        ai = function() {
            function t(t) {
                this.placeholder = t.placeholder
            }
            return t.prototype.activate = function(t, e) {
                this.prompt = t,
                this.placeholder && t.setLabel(this.placeholder)
            }, t.prototype.deactivate = function(t) {
                this.prompt = null,
                this.placeholder && t.setLabel()
            }, t.prototype.onChange = function(t) {}, t.prototype.onKeyDown = function(t) {}, t.prototype.handleViewportResize = function() {}, t
        }(),
        li = function(t) {
            function e(e) {
                void 0 === e && (e = {})
                var i = t.call(this, e) || this
                i.value = ""
                var n = new Backbone.Collection(null, {
                    model: Backbone.Model,
                    comparator: null
                })
                return e.url && (n.url = e.url), i.urlDefaultParams = e.urlDefaultParams, i.urlParam = e.urlParam, i.suggestions = n, i
            }
            return n.c(e, t), e.prototype.activate = function(e, i) {
                t.prototype.activate.call(this, e, i)
                var n = e.list
                this.value !== i && (this.suggestions.reset(), this.onChange(i)),
                    this.list = n,
                    n.setCollection(this.suggestions),
                    n.setItemTemplate(this.renderItem)
            }, e.prototype.deactivate = function(e) {
                t.prototype.deactivate.call(this, e),
                    this.list.setCollection(null),
                    this.list = null
            }, e.prototype.renderItem = function(t) {
                return ""
            }, e.prototype.setUrl = function(t, e, i) {
                return this.suggestions.url = t, this.urlDefaultParams = i, e && (this.urlParam = e), this.suggestions.reset(), this
            }, e.prototype.onChange = function(t) {
                if (this.value !== t)
                    if (this.value = t, "" == t)
                        this.suggestions.reset()
                    else {
                        var e = {}
                        this.urlDefaultParams && _.defaults(e, this.urlDefaultParams),
                            e[this.urlParam] = t,
                            this.suggestions.fetch({
                                data: e
                            })
                    }
            }, e.prototype.onKeyDown = function(t) {
                var e = this.list
                switch (t.keyCode) {
                    case 13:
                        e.current && (t.preventDefault(), this.prompt.trigger("select", this.list.current.model))
                        break
                    case 38:
                        t.preventDefault(),
                            e.setCurrent(e.getPreviousChild())
                        break
                    case 40:
                        t.preventDefault(),
                            e.setCurrent(e.getNextChild())
                }
            }, e
        }(ai),
        hi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.renderItem = function(t) {
                var e,
                    i = t.thumb
                if (i) {
                    var n = i.width,
                        o = i.height
                    e = '<img class="dsHeaderSearchPrompt__thumbImage" src="' + (window.devicePixelRatio && window.devicePixelRatio > 1.5 ? i.srcX2 : i.src) + '" width="' + n + '" height="' + o + '" />'
                } else
                    e = '<div class="dsHeaderSearchPrompt__thumbPlaceholder ' + t.type + '"></div>'
                return '\n      <a class="dsHeaderSearchPrompt fulltext" href="' + t.url + '">\n        <span class="dsHeaderSearchPrompt__title"><span class="dsHeaderSearchPrompt__titleWrap">' + t.title + '</span></span>\n        <span class="dsHeaderSearchPrompt__thumb">' + e + '</span>\n        <span class="dsHeaderSearchPrompt__type">' + t.label + "</span>\n      </a>"
            }, e
        }(li),
        ci = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.renderItem = function(t) {
                var e
                return e = t.synonym ? '<span class="dsHeaderSearchPrompt__titleSynonym">' + t.synonym + " → </span>" + t.title : t.title, '\n      <a class="dsHeaderSearchPrompt keyword" href="' + t.url + '">\n        <span class="dsHeaderSearchPrompt__title"><span class="dsHeaderSearchPrompt__titleWrap">' + e + '</span></span>\n        <span class="dsHeaderSearchPrompt__field">\n          ' + t.field + '\n          <span class="dsHeaderSearchPrompt__fieldCount">(' + t.count + ")</span>\n        </span>\n      </a>"
            }, e
        }(li)
    !function(t) {
        t[t.Both = 0] = "Both",
            t[t.Max = 1] = "Max",
            t[t.Min = 2] = "Min",
            t[t.Set = 3] = "Set"
    }(ii || (ii = {}))
    var ui = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.direction = y.Horizontal, i.initialSetYear = 0, i.initialYear = 0, i.mode = ii.Both, i
            }
            return n.c(e, t), e.prototype.getMode = function(t) {
                for (var e = t.target; e && e.classList;) {
                    if (e.classList.contains("dsPeriodSlider__handle"))
                        return e.classList.contains("min") ? ii.Min : ii.Max
                    e = e.parentNode
                }
                var i = this.initialRange,
                    n = this.initialYear
                return n >= i.min && n <= i.max ? ii.Both : ii.Set
            }, e.prototype.getYear = function(t, e) {
                var i = this.view,
                    n = t.x - i.track.getBoundingClientRect().left
                return this.view.unproject(n / i.width, e)
            }, e.prototype.handlePointerDown = function(e, i, n, o) {
                var r = t.prototype.handlePointerDown.call(this, e, i, n, o)
                return r && (this.initialRange = this.view.getRange(), this.initialYear = this.getYear(r), this.mode = this.getMode(e)), r
            }, e.prototype.handleDragStart = function(t, e) {
                switch (this.mode) {
                    case ii.Max:
                        this.initialSetYear = this.initialRange.min
                        break
                    case ii.Min:
                        this.initialSetYear = this.initialRange.max
                        break
                    case ii.Set:
                        this.initialSetYear = this.getYear(e),
                            this.view.setYear(this.initialSetYear)
                }
                return !0
            }, e.prototype.handleDragMove = function(t, e) {
                var i = this.initialRange,
                    n = this.initialSetYear,
                    o = this.initialYear,
                    r = this.view,
                    s = t.shiftKey ? function(t) {
                        return 25 * Math.round(t / 25)
                    } : function(t) {
                        return t
                    }
                switch (this.mode) {
                    case ii.Both:
                        var a = this.getYear(e) - o
                        r.setRange({
                            min: s(i.min + a),
                            max: s(i.max + a)
                        })
                        break
                    case ii.Max:
                    case ii.Min:
                    case ii.Set:
                        r.setRange({
                            min: n,
                            max: s(this.getYear(e, !0))
                        })
                }
                return !0
            }, e.prototype.handleDragEnd = function(t, e) {
                this.view.trigger("commit", this.view.getValue())
            }, e.prototype.handleClick = function(t, e) {}, e
        }(O),
        pi = (i(40), function(t) {
            function e(e) {
                var n = t.call(this, _.defaults(e, {
                    className: "dsPeriodSlider",
                    template: i(41)
                })) || this
                return n.hasError = !1, n.isHidden = !1, n.width = 0, n.value || (n.value = {
                    min: e.min,
                    max: e.max
                }), n.createError(e.error), n.createYears(e.years), n.createCenturies(), n.handleViewportResize(), new ui(n), n
            }
            return n.c(e, t), e.prototype.createError = function(t) {
                if (t) {
                    var e = document.createElement("div")
                    e.className = "dsPeriodSlider__error",
                        e.innerHTML = t,
                        this.el.appendChild(e)
                }
            }, e.prototype.createCenturies = function() {
                for (var t = this.track, e = Math.ceil((this.min + 1) / 100), i = Math.floor((this.max - 1) / 100), n = e; n <= i; n++) {
                    var o = document.createElement("div")
                    o.className = "dsPeriodSlider__trackCentury",
                        o.style.left = 100 * this.project(100 * n) + "%",
                        t.appendChild(o)
                }
            }, e.prototype.createYears = function(t) {
                var e = this,
                    i = this.max,
                    n = this.min,
                    o = this.track
                if (t) {
                    var r,
                        s = n,
                        a = [],
                        l = _.reduce(t, (function(t, e) {
                            return Math.max(t, e)
                        }), 0),
                        h = function(t) {
                            if (r && !(t <= s)) {
                                var i = document.createElement("div")
                                i.className = "dsPeriodSlider__trackYear",
                                    i.style.height = Math.round(r / l * 50) + "px",
                                    o.appendChild(i),
                                    a.push({
                                        el: i,
                                        left: e.project(s),
                                        right: 1 - e.project(t)
                                    })
                            }
                        }
                    _.forEach(t, (function(t, e) {
                        var i = parseInt(e)
                        h(i),
                            r = t,
                            s = i
                    })),
                        h(i),
                        this.years = a
                }
            }, e.prototype.getRange = function() {
                var t = this.value
                return {
                    min: t.min,
                    max: t.max
                }
            }, e.prototype.getValue = function() {
                var t = this.value,
                    e = t.min,
                    i = t.max
                return {
                    min: Math.floor(e),
                    max: Math.ceil(i)
                }
            }, e.prototype.setRange = function(t, e) {
                var i = Math.min(t.min, t.max),
                    n = Math.max(t.min, t.max)
                this.value = {
                    min: Math.max(this.min, Math.min(this.max, i)),
                    max: Math.max(this.min, Math.min(this.max, n))
                },
                    this.updateValue(),
                e || this.trigger("change", this.getValue())
            }, e.prototype.setYear = function(t) {
                this.setRange({
                    min: t,
                    max: t
                })
            }, e.prototype.toggleError = function(t) {
                this.hasError !== t && (this.hasError = t, this.el.classList.toggle("hasError"))
            }, e.prototype.project = function(t) {
                var e = this.max,
                    i = this.min
                return (t - i) / (e - i)
            }, e.prototype.unproject = function(t, e) {
                var i = this.max,
                    n = this.min
                if (e) {
                    if (t >= 1)
                        return i
                    if (t <= 0)
                        return n
                }
                return n + t * (i - n)
            }, e.prototype.setHidden = function(t) {
                this.isHidden !== t && (this.isHidden = t, this.el.classList.toggle("hidden", t))
            }, e.prototype.toString = function() {
                var t = this.getValue(),
                    e = t.min,
                    i = t.max
                return e === i ? "" + e : e + " – " + i
            }, e.prototype.updateValue = function() {
                var t = this,
                    e = t.caption,
                    i = t.handleMin,
                    n = t.handleMax,
                    o = t.region,
                    r = t.value,
                    s = t.width,
                    a = Math.round(this.project(r.min) * s),
                    l = Math.round(this.project(r.max) * s)
                o.style.left = a + "px",
                    o.style.width = l - a + "px",
                    i.style.left = a + "px",
                    n.style.left = l + "px",
                    e.innerHTML = this.toString()
                var h = e.offsetWidth,
                    c = Math.max(-10, Math.min(s - h + 10, a + .5 * (l - a - h)))
                e.style.left = c + "px"
            }, e.prototype.updateYears = function() {
                var t = this.width,
                    e = this.years
                e && _.forEach(e, (function(e) {
                    var i = e.el,
                        n = e.left,
                        o = e.right
                    i.style.left = Math.floor(n * t) + "px",
                        i.style.right = Math.ceil(o * t) + "px"
                }))
            }, e.prototype.handleViewportResize = function() {
                return this.width = this.track.offsetWidth, this.updateValue(), this.updateYears(), !1
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPeriodSlider__caption"
            })], e.prototype, "caption", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPeriodSlider__handle.max"
            })], e.prototype, "handleMax", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPeriodSlider__handle.min"
            })], e.prototype, "handleMin", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPeriodSlider__region"
            })], e.prototype, "region", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPeriodSlider__track"
            })], e.prototype, "track", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Number
            })], e.prototype, "max", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Number
            })], e.prototype, "min", void 0), n.b([Object(o.Option)({
                type: o.OptionType.JSON
            })], e.prototype, "value", void 0), e
        }(o.View))
    function di(t) {
        return t.toLowerCase()
    }
    var fi,
        mi,
        yi = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isValid = !1, i.lastCompletion = null, i.preventCompletion = !1, i.data = e.data, i.error = e.error, i.completions = _.map(e.data.periods, (function(t, e) {
                    return {
                        filteredText: di(e),
                        range: t,
                        text: e
                    }
                })), i
            }
            return n.c(e, t), e.prototype.activate = function(e, i) {
                var n = this
                if (t.prototype.activate.call(this, e, i), !this.periodSlider) {
                    var o = this.data,
                        r = o.max,
                        s = o.min,
                        a = o.years
                    this.periodSlider = new pi({
                        appendTo: e.panel,
                        error: this.error,
                        max: r,
                        min: s,
                        years: a
                    }),
                        this.periodSlider.on("change", (function(t) {
                            if (n.prompt) {
                                var e = t.min,
                                    i = t.max
                                n.prompt.setValue(e === i ? "" + e : e + " – " + i),
                                    n.isValid = !0
                            }
                        }))
                }
                this.periodSlider.setHidden(!1),
                    this.onChange(i),
                    e.setHasSuggestions(!0)
            }, e.prototype.deactivate = function(e) {
                t.prototype.deactivate.call(this, e),
                    this.periodSlider.setHidden(!0),
                    e.setHasSuggestions(!1)
            }, e.prototype.findCompletion = function(t) {
                var e = this.prompt.input
                if (this.preventCompletion)
                    return !1
                if (t.length < 1)
                    return !1
                if (e.selectionStart === e.selectionEnd && !(e.selectionStart < t.length)) {
                    for (var i = this.completions, n = this.periodSlider, o = di(t), r = t.length, s = 0; s < i.length; s++) {
                        var a = i[s],
                            l = a.filteredText,
                            h = a.text,
                            c = a.range
                        if (l.substr(0, r) === o) {
                            var u = "" + t + h.substr(r)
                            e.value = u,
                                e.selectionStart = r,
                                e.selectionEnd = u.length,
                                this.lastCompletion = u
                            var p = c.split("-"),
                                d = p[0],
                                f = p[1]
                            return n.setRange({
                                min: parseInt(d),
                                max: parseInt(f)
                            }, !0), !0
                        }
                    }
                    return !1
                }
            }, e.prototype.findRange = function(t) {
                var e,
                    i = this.periodSlider
                return t = t.replace(/(heute|today)/, "" + i.max), (e = /^\s*(\d{4,4})\s*(-|–|bis|till)\s*(\d{4,4})/.exec(t)) ? (i.setRange({
                    min: parseInt(e[1]),
                    max: parseInt(e[3])
                }, !0), !0) : (e = /^\s*(seit|ab|nach|since|after)\s+(\d{4,4})/.exec(t)) ? (i.setRange({
                    min: parseInt(e[2]),
                    max: i.max
                }, !0), !0) : (e = /^\s*(vor|bis|before)\s+(\d{4,4})/.exec(t)) ? (i.setRange({
                    min: i.min,
                    max: parseInt(e[2])
                }, !0), !0) : !!(e = /^\s*(\d{4,4})/.exec(t)) && (i.setRange({
                    min: parseInt(e[1]),
                    max: parseInt(e[1])
                }, !0), !0)
            }, e.prototype.getQuery = function() {
                var t = this.isValid,
                    e = this.periodSlider
                if (!t)
                    return this.periodSlider.toggleError(!0), null
                var i = e.getValue(),
                    n = i.min,
                    o = i.max
                return n === o ? "time(" + n + ")" : "time(" + n + "-" + o + ")"
            }, e.prototype.increment = function(t, e) {
                var i = this.periodSlider,
                    n = i.min,
                    o = i.max,
                    r = this.prompt.input,
                    s = r.value,
                    a = r.selectionStart,
                    l = r.selectionEnd,
                    h = s.substring(a, l)
                if (!(l > a) || /^\d+$/.test(h)) {
                    for (; a > 0 && /\d/.test(s.charAt(a - 1));)
                        a -= 1
                    for (; l < s.length && /\d/.test(s.charAt(l));)
                        l += 1
                    if (!(l <= a)) {
                        var c = s.substring(a, l),
                            u = "" + Math.max(n, Math.min(o, parseInt(c) + e)),
                            p = "" + s.substr(0, a) + u + s.substr(l)
                        r.value = p,
                            r.selectionStart = a,
                            r.selectionEnd = l + u.length - c.length,
                            t.preventDefault(),
                            this.lastCompletion = p,
                            this.findRange(p)
                    }
                }
            }, e.prototype.handleViewportResize = function() {
                this.periodSlider.handleViewportResize()
            }, e.prototype.onChange = function(t) {
                var e = this.periodSlider
                if (t !== this.lastCompletion) {
                    var i = this.findCompletion(t) || this.findRange(t)
                    i && this.periodSlider && e.toggleError(!1),
                        this.isValid = i
                } else
                    this.lastCompletion = null
            }, e.prototype.onKeyDown = function(t) {
                var e = 8 === t.keyCode || 46 === t.keyCode
                this.preventCompletion = e,
                    38 === t.keyCode ? this.increment(t, t.shiftKey ? 10 : 1) : 40 === t.keyCode && this.increment(t, t.shiftKey ? -10 : -1)
            }, e
        }(ai),
        vi = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    tagName: "li",
                    className: "tuxPromptItem"
                })) || this
                return i.list = e.owner, i.template = e.template, i.render(), new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.render = function() {
                return this.el.innerHTML = this.template(this.model ? this.model.attributes : {}), this
            }, e.prototype.onClick = function() {
                return this.list.trigger("click", this), !0
            }, e
        }(o.View),
        gi = function(t) {
            function e(e) {
                return t.call(this, _.defaults(e || {}, {
                    tagName: "ol",
                    className: "dsPromptList",
                    childSelector: "li",
                    childClass: vi,
                    resetOnAnyChange: !0
                })) || this
            }
            return n.c(e, t), e.prototype.setItemTemplate = function(t) {
                if (this.template === t)
                    return this
                this.template = t
                for (var e = 0, i = this.children; e < i.length; e++) {
                    var n = i[e]
                    n.template = t,
                        n.render()
                }
                return this
            }, e.prototype.alterChildOptions = function(t) {
                return t.template = this.template, t
            }, e.prototype.handleTransition = function(t, e, i) {
                t && t.el.classList.add("selected"),
                e && e.el.classList.remove("selected")
            }, e
        }(ei),
        wi = (i(42), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    className: "dsPrompt",
                    attributes: {
                        autocomplete: "off"
                    }
                })) || this
                return i.hasSuggestions = !1, i.label && (i.defaultLabel = i.label.innerHTML), i.initializePanel(), i.onKeyDown = _.bind(i.onKeyDown, i), i.delegate("keydown", "input", i.onKeyDown), i.listenTo(i.list, "click", i.onListClick), i.listenTo(i.list, "add", i.onListChange), i.listenTo(i.list, "remove", i.onListChange), i.listenTo(i.list, "reset", i.onListChange), i.listenTo(i, "change", i.onInputChanged), i
            }
            return n.c(e, t), e.prototype.initializePanel = function() {
                this.el
                var t = this.field,
                    e = this.panel = document.createElement("div")
                e.className = "dsPrompt--panel",
                    t.appendChild(e),
                    t.classList.add("noSuggestions"),
                    this.panel = e,
                    this.list = new gi({
                        appendTo: e
                    })
            }, e.prototype.setHasSuggestions = function(t) {
                this.hasSuggestions = t,
                    this.updateNoSuggestions()
            }, e.prototype.setLabel = function(t) {
                void 0 === t && (t = this.defaultLabel),
                this.label && (this.label.innerHTML = t)
            }, e.prototype.setMode = function(t) {
                this.mode && this.mode.deactivate(this),
                    this.mode = t,
                this.mode && this.mode.activate(this, Object(et.c)(this.value))
            }, e.prototype.updateNoSuggestions = function() {
                this.field.classList.toggle("noSuggestions", !this.hasSuggestions && 0 == this.list.getLength())
            }, e.prototype.onFocusIn = function(e) {
                t.prototype.onFocusIn.call(this, e),
                    this.handleViewportResize()
            }, e.prototype.onKeyDown = function(t) {
                this.mode && this.mode.onKeyDown(t)
            }, e.prototype.onListClick = function(t) {
                this.trigger("select", t.model)
            }, e.prototype.onListChange = function() {
                this.updateNoSuggestions()
            }, e.prototype.onInputChanged = function() {
                this.mode && this.mode.onChange(Object(et.c)(this.value))
            }, e.prototype.handleViewportResize = function() {
                return this.mode && this.mode.handleViewportResize(), !1
            }, n.b([Object(z.a)({
                type: z.b.DOM,
                defaultValue: "label"
            })], e.prototype, "label", void 0), e
        }(si)),
        bi = (i(43), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.listenTo(i.prompt, "change", i.onPromptChange), i.listenTo(i.prompt, "select", i.onPromptSelect), i.listenTo(i.toggle, "changeMode", i.onToggleChange), i.delegate("submit", null, (function(t) {
                    return i.onSubmit(t)
                })), i.setSearchMode(i.toggle.current.mode), i
            }
            return n.c(e, t), e.prototype.getFulltextMode = function() {
                return this.fulltextMode || (this.fulltextMode = new hi({
                    url: this.urlFulltext,
                    urlParam: "q"
                }))
            }, e.prototype.getKeywordMode = function() {
                return this.keywordMode || (this.keywordMode = new ci({
                    url: this.urlKeyword,
                    urlParam: "fq"
                }))
            }, e.prototype.getPeriodMode = function() {
                return this.periodMode || (this.periodMode = new yi({
                    data: this.periods,
                    error: this.periodsError,
                    placeholder: this.periodsPlaceholder
                }))
            }, e.prototype.setSearchMode = function(t) {
                if (this.mode === t)
                    return this
                this.mode = t
                var e = this.prompt
                switch (t) {
                    case De.Fulltext:
                        e.setMode(this.getFulltextMode())
                        break
                    case De.Keyword:
                        e.setMode(this.getKeywordMode())
                        break
                    case De.Period:
                        e.setMode(this.getPeriodMode())
                }
            }, e.prototype.onToggleChange = function(t) {
                this.setSearchMode(t),
                    this.prompt.focus()
            }, e.prototype.onPromptChange = function(t) {
                t = Object(et.c)(t),
                    this.toggle.setIsCompact("" != t)
            }, e.prototype.onPromptSelect = function(t) {
                this.prompt.blur(),
                    window.location.href = t.attributes.url
            }, e.prototype.onSubmit = function(t) {
                t.preventDefault()
                var e,
                    i = this.form.action;
                (e = this.mode === De.Period ? this.getPeriodMode().getQuery() : Object(et.c)(this.prompt.value)) && e.length ? window.location.href = i + "?q=" + encodeURIComponent(e) : window.location.href = i
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsHeaderSearch__wrap",
                childClass: wi,
                childOptions: {
                    field: ".dsHeaderSearch__field"
                }
            })], e.prototype, "prompt", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsHeaderSearchMode",
                childClass: oi
            })], e.prototype, "toggle", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsHeaderSearch"
            })], e.prototype, "form", void 0), n.b([Object(o.Option)({
                type: o.OptionType.JSON
            })], e.prototype, "periods", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "periodsPlaceholder", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "periodsError", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "urlFulltext", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "urlKeyword", void 0), e
        }(o.View)),
        Ci = (i(44), A.a.getInstance())
    !function(t) {
        t[t.Default = 0] = "Default",
            t[t.Search = 1] = "Search",
            t[t.Menu = 2] = "Menu"
    }(fi || (fi = {})),
        function(t) {
            t[t.Default = 0] = "Default",
                t[t.Search = 1] = "Search"
        }(mi || (mi = {}))
    var xi = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.mode = fi.Default, i.contentMode = mi.Default, i.isBelowFold = !1, i.content = i.branding, i.listenTo(Ci, "scrollbars", i.onScrollbarsChange), i.listenTo(N.getInstance(), "change", i.onBreakpointsChange), new M(i, i.onButtonClick, ".dsHeader__actionButton"), document.body.classList.contains("isHomepage") && i.listenTo(Ci, "scroll", i.onViewportScroll), i
            }
            return n.c(e, t), e.prototype.setMode = function(t) {
                var e = this
                if (this.mode != t) {
                    var i = this.mode
                    this.mode = t,
                    i == fi.Menu && (this.el.classList.remove("hasMenu"), this.el.classList.add("hadMenu"), _.delay((function() {
                        e.el.classList.remove("hadMenu"),
                            A.a.getInstance().enableScrollbars(e)
                    }), 500)),
                        t == fi.Search ? this.setContentMode(mi.Search) : (this.setContentMode(mi.Default), t == fi.Menu && (this.el.classList.add("hasMenu"), "xs" == N.getInstance().getCurrent().name && A.a.getInstance().disableScrollbars(this)))
                }
            }, e.prototype.setContentMode = function(t) {
                var e = this
                this.contentMode != t && (this.contentMode = t, t == mi.Search ? (this.setContent(this.search, {
                    withHeightTransition: !0
                }), this.search.prompt.setValue(""), _.delay((function() {
                    return e.search.prompt.focus()
                }), 500)) : t == mi.Default && this.setContent(this.branding, {
                    className: "transitionBack",
                    withHeightTransition: !0
                }))
            }, e.prototype.setBelowFold = function(t) {
                this.isBelowFold != t && (this.isBelowFold = t, this.el.classList.toggle("belowFold", t), t || this.setMode(fi.Default))
            }, e.prototype.onButtonClick = function(t, e) {
                switch (e.getAttribute("data-action")) {
                    case "search":
                        return this.setMode(this.mode == fi.Search ? fi.Default : fi.Search), !0
                    case "menu":
                        return this.setMode(this.mode == fi.Menu ? fi.Default : fi.Menu), !0
                    case "cancel":
                        return this.setMode(fi.Default), !0
                }
                return !1
            }, e.prototype.onBreakpointsChange = function(t) {
                this.mode == fi.Menu && ("xs" == t.name ? A.a.getInstance().disableScrollbars(this) : A.a.getInstance().enableScrollbars(this))
            }, e.prototype.onViewportScroll = function(t, e) {
                this.setBelowFold(e > .75 * Ci.height)
            }, e.prototype.onScrollbarsChange = function(t) {
                if (t)
                    this.el.style.paddingRight = ""
                else {
                    var e = A.a.getInstance().scrollBarSize
                    e && (this.el.style.paddingRight = e + "px")
                }
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsHeader__content.branding",
                childClass: $e
            })], e.prototype, "branding", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsHeader__content.search",
                childClass: bi
            })], e.prototype, "search", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsHeader__contentWrap"
            })], e.prototype, "container", void 0), e
        }(tt),
        Si = function(t) {
            function e() {
                var e = t.call(this, {
                    el: document.body
                }) || this
                return e.handlePermalinkClick = function(t) {
                    var i = t.target
                    if (i) {
                        t.preventDefault(),
                            window.getSelection().selectAllChildren(i),
                            document.execCommand("copy"),
                            window.getSelection().empty()
                        var n = i.getAttribute("data-message")
                        n && e.flashMessages.addMessage({
                            message: n,
                            type: "info"
                        })
                    }
                }, o.ComponentRegistry.getInstance().create(e.el), e.flashMessages = new B, e.delegate("click", "a.permalink", e.handlePermalinkClick), e
            }
            return n.c(e, t), n.b([Object(o.ChildComponent)({
                selector: ".dsHeader",
                childClass: xi
            })], e.prototype, "header", void 0), e
        }(o.View),
        Oi = function(t) {
            function e() {
                var e = t.call(this) || this
                return e.route("*path", "any", e.onRoute), e
            }
            var i
            return n.c(e, t), i = e, e.prototype.run = function() {
                Backbone.history.start({
                    pushState: !0
                })
                var t = N.getInstance()
                t.breakpoints.push({
                    name: "xl",
                    minWidth: 1400,
                    containerWidth: 1250
                }),
                    t.update(),
                    D.getInstance().add("<h1><strong>Digital</strong> Collection</h1>"),
                    this.root = new Si,
                    j.getInstance().onViewportResize()
            }, e.prototype.onRoute = function(t, e) {}, e.getInstance = function() {
                return s.b.get("Application", i)
            }, e = i = n.b([Object(s.a)("Application")], e)
        }(Backbone.Router),
        _i = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.isRequired = !1, e.isReady = !1, e
            }
            return n.c(e, t), e.prototype.require = function(t) {
                var e = this
                if (this.isReady)
                    t()
                else if (this.once("ready", t), !this.isRequired) {
                    this.isRequired = !0,
                        window.onReCaptchaReady = function() {
                            e.isReady = !0,
                                e.trigger("ready")
                        }
                    var i = document.createElement("script")
                    i.src = "//www.google.com/recaptcha/api.js?onload=onReCaptchaReady&render=explicit",
                        document.head.appendChild(i)
                }
            }, e.getInstance = function() {
                return e.instance || (e.instance = new e), e.instance
            }, e.instance = null, e
        }(o.Events),
        Ti = vt.getInstance(),
        ki = N.getInstance(),
        Mi = A.a.getInstance(),
        Pi = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
        Li = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    className: "dsRemoteLayer__content"
                })) || this
                return i.enabled = !0, i.isForm = !1, i.opacity = 0, i.reCaptchaForm = null, i.reCaptchaState = 0, i.onSubmit = function(t) {
                    t.preventDefault(),
                        i.submit()
                }, i.onCaptchaSubmit = function(t) {
                    i.submit(null)
                }, o.ComponentRegistry.getInstance().create(i.el), i.isForm = i.body.classList.contains("form"), i.initCopyButton(), i.initReCaptcha(), i.layer = e.owner, i.delegate("submit", "", i.onSubmit), i.listenTo(i.layer, "resize", i.onResize), new M(i, i.onClick, "*[data-action]"), i
            }
            return n.c(e, t), e.prototype.initCopyButton = function() {
                var t = this.el.querySelector("*[data-action=copyPermalink]")
                if (t) {
                    var e = !1
                    try {
                        e = document.queryCommandSupported("copy")
                    } catch (t) {}
                    e && !Pi || (t.style.display = "none")
                }
            }, e.prototype.initReCaptcha = function() {
                var t = this,
                    e = this.el.querySelector(".dsRemoteLayer__form.recaptcha")
                if (e) {
                    var i = e.querySelector("button")
                    i && (this.reCaptchaForm = e, this.reCaptchaState = 1, _i.getInstance().require((function() {
                        i.disabled = !1,
                            t.reCaptchaState = 2,
                            t.reCaptchaID = grecaptcha.render(i, {
                                sitekey: e.getAttribute("data-site-key"),
                                callback: t.onCaptchaSubmit
                            })
                    })))
                }
            }, e.prototype.show = function() {
                var t = this.getDesiredSize()
                this.width = t.width,
                    this.height = t.height,
                    this.el.classList.add("visible"),
                    this.layer.setSize(new ft(t.width, t.height)),
                    this.setOpacity(1)
            }, e.prototype.fadeIn = function() {
                var t = this.getDesiredSize()
                return this.width = t.width, this.height = t.height, this.el.classList.add("visible"), Mt(this.layer, "size", {
                    to: new ft(t.width, t.height),
                    duration: 400
                }), Mt(this, "opacity", {
                    to: 1,
                    duration: 400
                }).getPromise()
            }, e.prototype.fadeOut = function() {
                var t = this
                return Mt(this, "opacity", {
                    to: 0,
                    duration: 400
                }).getPromise().then((function() {
                    t.remove()
                }))
            }, e.prototype.setOpacity = function(t) {
                this.opacity = t,
                    this.el.style.opacity = t
            }, e.prototype.getFormData = function(t, e) {
                void 0 === e && (e = {})
                var i = t.elements,
                    n = {}
                if (e.submitElement) {
                    var o = e.submitElement.getAttribute("data-submit-command")
                    o && (n.command = o)
                }
                for (var r = function(t, e) {
                    if (t) {
                        var i = _.isArray(t) ? t : [t]
                        return i.push(e), i
                    }
                    return e
                }, s = 0; s < i.length; s += 1) {
                    var a = i[s],
                        l = a.name,
                        h = a.type
                    "submit" != h && ("radio" == h ? a.checked && (n[l] = a.value) : "checkbox" == h ? a.checked && (n[l] = r(n[l], a.value)) : n[l] = r(n[l], a.value))
                }
                return n
            }, e.prototype.getDesiredSize = function() {
                var t
                return t = this.isForm && 0 == ki.index ? this.layer.el : this.body, {
                    height: Math.min(Mi.height - 32, t.clientHeight),
                    width: Math.min(Mi.width - 32, t.clientWidth)
                }
            }, e.prototype.loginOAuth = function(t) {
                var e = new L(window.location.href)
                if (e.hash = null, this.layer.intention) {
                    var i = I.getInstance().intent(this.layer.intention)
                    e.query.setValue("intention", i)
                }
                var n = new L(t)
                n.query.setValue("returnUrl", e.toString()),
                    window.location.assign(n.toString())
            }, e.prototype.submit = function(t, e) {
                void 0 === t && (t = null),
                void 0 === e && (e = {})
                var i = this.el.querySelector("form")
                i && 1 != this.reCaptchaState && (t || (t = i.action), new Vi({
                    url: t,
                    fromLayer: !0,
                    intention: this.layer.intention,
                    post: this.getFormData(i, e)
                }))
            }, e.prototype.onResize = function(t, e) {
                var i = this.el,
                    n = this.layer,
                    o = this.getDesiredSize(),
                    r = o.height,
                    s = o.width
                this.height === r && this.width === s || (this.width = s, this.height = r, Ti.stop(n), n.setSize(new ft(s, r))),
                    i.style.left = t - Math.round(.5 * s) + "px",
                    i.style.top = e - Math.round(.5 * r) + "px"
            }, e.prototype.onClick = function(t, e) {
                var i = this
                if (!this.enabled)
                    return !0
                this.enabled = !1
                var n = e.getAttribute("data-action"),
                    o = e.getAttribute("data-location")
                switch (n) {
                    case "action":
                        new Vi({
                            url: o,
                            fromLayer: !0,
                            intention: this.layer.intention
                        })
                        break
                    case "submit":
                        this.submit(o, {
                            submitElement: e
                        })
                        break
                    case "submitDeferred":
                        return setTimeout((function() {
                            i.submit(o, {
                                submitElement: e
                            })
                        }), 0), !1
                    case "close":
                        this.layer.close()
                        break
                    case "loginOAuth":
                        this.loginOAuth(o)
                        break
                    case "shareUrl":
                        window.open(o),
                            this.layer.close()
                        break
                    case "shareFrame":
                        if (Pi)
                            window.location.replace(o)
                        else {
                            var r = document.createElement("iframe")
                            document.body.appendChild(r),
                                r.style.display = "none",
                                r.src = o
                        }
                        this.layer.close()
                        break
                    case "copyPermalink":
                        var s = e.parentNode.querySelector(".dsPermalink__input")
                        s && clipboard.copy(s.value),
                            this.layer.close()
                        break
                    case "native":
                        return !1
                    case "nativeClose":
                        return this.layer.close(), !1
                }
                return !0
            }, e.prototype.handleViewportResize = function() {
                return Ti.stop(this), Ti.stop(this.layer), this.show(), !0
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsRemoteLayer__body"
            })], e.prototype, "body", void 0), e
        }(o.View),
        Ii = (i(45), i(46), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    appendTo: document.body,
                    className: "dsRemoteLayer"
                })) || this
                return i.isClosed = !1, A.a.getInstance().disableScrollbars(i), o.ComponentRegistry.registerInstance(i), i.panel = i.createPanel(), i.setContent(e.content), new M(i, i.onClick).downFilter = i.filterClickEvent, i.el.classList.add("fadeIn"), setTimeout((function() {
                    i.el.classList.remove("fadeIn")
                }), 500), i
            }
            return n.c(e, t), e.prototype.remove = function() {
                return A.a.getInstance().enableScrollbars(this), e.INSTANCE == this && (e.INSTANCE = null), t.prototype.remove.call(this)
            }, e.prototype.close = function() {
                var t = this
                this.isClosed || (this.isClosed = !0, this.el.classList.remove("fadeIn"), this.el.classList.add("fadeOut"), e.INSTANCE == this && (e.INSTANCE = null), setTimeout((function() {
                    t.remove()
                }), 500))
            }, e.prototype.createPanel = function() {
                var t = document.createElement("button")
                t.className = "dsRemoteLayer__closer",
                    t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">\n      <path fill="#EDEAE3" d="M15.425 35.424l-.85-.848 9.578-9.578-9.577-9.573.85-.85L25 24.15l9.574-9.574.848.85-9.573 9.572 9.574 9.568-.848.85-9.574-9.57"/>\n    </svg>'
                var e = document.createElement("div")
                return e.className = "dsRemoteLayer__panel", e.appendChild(t), this.el.appendChild(e), e
            }, e.prototype.setContent = function(t) {
                var e = this,
                    i = function() {
                        return new Li({
                            appendTo: e.panel,
                            owner: e,
                            template: t
                        })
                    }
                if (!this.content && !this.transition)
                    return this.content = i(), void this.content.show()
                this.transition = Q(this.transition).then((function() {
                    var t = i(),
                        n = e.content,
                        o = [t.fadeIn()]
                    return n && o.push(n.fadeOut()), e.content = t, Q.all(o)
                }))
            }, e.prototype.setSize = function(t) {
                var e = this.panel
                this.size = t
                var i = Math.round(t.x),
                    n = Math.round(t.y),
                    o = Math.round(.5 * i),
                    r = Math.round(.5 * n)
                e.style.width = i + "px",
                    e.style.height = n + "px",
                    e.style.marginLeft = "-" + o + "px",
                    e.style.marginTop = "-" + r + "px",
                    this.trigger("resize", o, r)
            }, e.prototype.filterClickEvent = function(t) {
                for (var e = t.target; e && e.classList;) {
                    if (e.classList.contains("dsRemoteLayer__panel"))
                        return !1
                    if (e.classList.contains("dsRemoteLayer__closer"))
                        return !0
                    e = e.parentNode
                }
                return !0
            }, e.prototype.onClick = function(t) {
                return this.close(), !0
            }, e.prototype.handleViewportResize = function() {
                return this.content && this.content.handleViewportResize(), !0
            }, e.create = function(t, i) {
                e.INSTANCE ? e.INSTANCE.setContent(t) : e.INSTANCE = new e({
                    content: t
                }),
                    e.INSTANCE.intention = i
            }, e
        }(o.View)),
        Vi = function() {
            function t(t) {
                var e = this
                this.hasLayerChanged = !1,
                    this.intention = t.intention
                var i = {
                    url: t.url,
                    error: function() {
                        t.complete && t.complete()
                    },
                    success: function(i) {
                        _(i).forEach((function(t) {
                            var i = t.action + "Action"
                            i in e && e[i](t)
                        })),
                        t.complete && t.complete(),
                        t.fromLayer && !e.hasLayerChanged && Ii.INSTANCE && Ii.INSTANCE.close()
                    }
                }
                if (t.post) {
                    var n = new P
                    n.values = t.post,
                        i.type = "post",
                        i.data = n.toString(),
                        i.headers = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                }
                Backbone.ajax(i)
            }
            return t.prototype.layerAction = function(t) {
                var e = t.content
                Ii.create(e, this.intention),
                    this.hasLayerChanged = !0
            }, t.prototype.messageAction = function(t) {
                Oi.getInstance().root.flashMessages.addMessage(t)
            }, t.prototype.eventAction = function(t) {
                var e = t.type,
                    i = t.data
                Oi.getInstance().trigger(e, i)
            }, t.prototype.redirectAction = function(t) {
                var e = t.url
                window.location.assign(e)
            }, t.prototype.reloadAction = function() {
                var t = new L(window.location.href)
                if (t.hash = null, this.intention) {
                    var e = I.getInstance().intent(this.intention)
                    t.query.setValue("intention", e)
                }
                window.location.assign(t.toString())
            }, t
        }(),
        Ai = (i(47), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isActive = !1, I.getInstance().execute(i, {
                    createAlbum: i.onClick
                }), new M(i, i.onClick), i
            }
            n.c(e, t),
                e.prototype.onClick = function() {
                    var t = this
                    return !this.isActive && (this.isActive = !0, new Vi({
                        complete: function() {
                            return t.isActive = !1
                        },
                        url: this.location,
                        intention: {
                            name: "createAlbum"
                        }
                    }), !0)
                },
                n.b([Object(o.Option)({
                    type: o.OptionType.String
                })], e.prototype, "location", void 0),
                e = n.b([Object(o.Component)(".dsAlbumCreate")], e)
        }(o.View), {
            styleName: null,
            originStyleName: null,
            has3D: !1
        })
    Object(X.a)((function() {
        q((function(t) {
            Ai.styleName = U("transform", (function(t, e) {
                Ai.has3D = !!U("perspective")
            })),
                Ai.originStyleName = U("transformOrigin")
        }))
    }))
    var Ei = function(t) {
            function e(e, i) {
                return t.call(this, _.defaults(e || {}, {
                    source: null,
                    duration: 0
                }), i) || this
            }
            return n.c(e, t), e.prototype.getSource = function() {
                return this.attributes.source
            }, e.prototype.getDuration = function() {
                return this.attributes.duration
            }, e.prototype.setDuration = function(t) {
                return this.set("duration", t)
            }, e.prototype.getTitle = function() {
                return this.attributes.title
            }, e
        }(Backbone.Model),
        Ni = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e
        }(Backbone.Collection)
    function Di(t, e) {
        var i = t.querySelector(e)
        return i ? i.innerHTML : null
    }
    var Ri = function(t) {
            function e(e) {
                var i = t.call(this, e, ".dsPresentation__container") || this
                return i.presentation = e, i.direction = y.Horizontal, i
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                var i = this.presentation
                return this.initialPosition = i.position, this.initialIndex = i.index, vt.getInstance().stop(i, "position"), !0
            }, e.prototype.handleDragMove = function(t, e) {
                var i = this.presentation,
                    n = e.getAbsoluteDelta(),
                    o = i.width,
                    r = i.album.artworks.length - 1,
                    s = this.initialPosition - n.x / o
                return s < 0 && (s *= .5), s > r && (s = r + .5 * (s - r)), i.setPosition(s), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                var i = this.presentation,
                    n = e.getVelocity().x,
                    o = i.width,
                    r = e.getAbsoluteDelta().x / o,
                    s = this.initialIndex
                n > 20 || r > .333 ? s -= 1 : (n < -20 || r < -.333) && (s += 1),
                    i.setIndex(s, {
                        easing: It
                    })
            }, e.prototype.handleDragCancel = function(t, e) {
                var i = this.presentation,
                    n = this.initialIndex
                i.setIndex(n, {
                    easing: It
                })
            }, e
        }(O),
        Hi = (i(48), function(t) {
            function e(e) {
                return t.call(this, _.defaults(e || {}, {
                    className: "dsPresentationItem"
                })) || this
            }
            return n.c(e, t), e.prototype.setArtwork = function(t) {
                this.artwork = t,
                    this.el.classList.toggle("empty", !t),
                t && this.viewer.replaceImage(t.path, t.info, {
                    x: .5,
                    y: .5
                }, !1)
            }, e.prototype.setPosition = function(t) {
                var e = "current"
                t < 0 ? e = "previous" : t > 0 && (e = "next"),
                this.positionClass != e && (this.el.classList.remove(this.positionClass), this.el.classList.add(e), this.positionClass = e)
            }, e.prototype.handleViewportResize = function() {
                return this.viewer.handleViewportResize(), !0
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkViewer",
                childClass: Re,
                childOptions: {
                    scaleMode: Ve.Presentation
                },
                autoCreate: !0
            })], e.prototype, "viewer", void 0), e
        }(o.View)),
        ji = (i(49), function(t) {
            function e(e) {
                var n = t.call(this, _.defaults(e, {
                    appendTo: document.body,
                    className: "dsPresentation fadeIn",
                    template: i(50)
                })) || this
                n.index = 0,
                    n.position = 0,
                    n.displayIndex = -1,
                    n.isClosed = !1,
                    A.a.getInstance().disableScrollbars(n),
                    new Ri(n),
                    n.onKeyUp = _.bind(n.onKeyUp, n),
                    w.getInstance().delegate("keyup", null, n.onKeyUp)
                var o = e.album
                return n.album = o, n.items = _(_.range(3)).map((function() {
                    return new Hi({
                        appendTo: n.container,
                        owner: n
                    })
                })), setTimeout((function() {
                    return n.el.classList.remove("fadeIn")
                }), 750), n.requestMedia(), n.overlay.setTitle(o.title), n.handleViewportResize(), n.setIndex(0), n
            }
            return n.c(e, t), e.prototype.remove = function() {
                return A.a.getInstance().enableScrollbars(this), w.getInstance().undelegate("keyup", null, this.onKeyUp), e.INSTANCE = null, t.prototype.remove.call(this)
            }, e.prototype.close = function() {
                var t = this
                this.isClosed || (this.isClosed = !0, this.el.classList.add("fadeOut"), setTimeout((function() {
                    return t.remove()
                }), 250))
            }, e.prototype.requestMedia = function() {
                var t = this,
                    e = this.album,
                    i = e.artworks,
                    n = e.mediaUrl
                n && Backbone.ajax({
                    url: n
                }).then((function(e) {
                    _(e).each((function(t, e) {
                        var n = parseInt(e),
                            o = _(i).find((function(t) {
                                return t.id == n
                            }))
                        o && (o.media = _(t).map((function(t) {
                            return new Ei(t)
                        })))
                    })),
                        t.trigger("media")
                }))
            }, e.prototype.setIndex = function(t, e) {
                void 0 === e && (e = null)
                var i = this.album.artworks.length
                t < 0 && (t = 0),
                t >= i && (t = i - 1),
                    this.index = t,
                    this.trigger("change", t, i, this.album.artworks[t]),
                    e ? Mt(this, "position", _.defaults({
                        to: t,
                        duration: 400
                    }, e)) : (vt.getInstance().stop(this, "position"), this.setPosition(t))
            }, e.prototype.setPosition = function(t) {
                var e = this.container,
                    i = (this.setDisplayIndex(Math.round(t)) - t) * this.width
                e.style[Ai.styleName] = "translate(" + i + "px, 0)",
                    this.position = t
            }, e.prototype.setDisplayIndex = function(t) {
                if (this.displayIndex == t)
                    return t
                this.displayIndex = t
                var e = this.items,
                    i = [],
                    n = this.album.artworks,
                    o = _(_.range(t - 1, t + 2)).map((function(t, o) {
                        if (t < 0 || t >= n.length)
                            return null
                        var r = n[t],
                            s = _.findIndex(e, (function(t) {
                                return t.artwork == r
                            }))
                        return -1 != s && (i[o] = e[s], e.splice(s, 1)), r
                    }))
                return this.items = _(o).map((function(t, n) {
                    var o
                    return i[n] ? o = i[n] : (o = e.pop()).setArtwork(t), o.setPosition(n - 1), o
                })), t
            }, e.prototype.onKeyUp = function(t) {
                27 == t.keyCode && this.close()
            }, e.prototype.handleViewportResize = function() {
                return this.width = this.el.offsetWidth, this.setPosition(this.position), _(this.items).each((function(t) {
                    return t.handleViewportResize()
                })), !0
            }, e.create = function() {
                if (!e.INSTANCE) {
                    var t = function(t) {
                        if (void 0 === t && (t = null), t || (t = document.querySelector(".dsAlbum")), !t)
                            return null
                        for (var e, i, n, o, r = t.querySelectorAll(".dsArtworkListItem"), s = [], a = 0; a < r.length; a++) {
                            var l = r[a]
                            l.hasAttribute("data-path") && l.hasAttribute("data-info") && s.push({
                                creator: Di(l, ".dsArtworkListItem__creator"),
                                id: parseInt(l.getAttribute("data-id")),
                                info: JSON.parse(l.getAttribute("data-info")),
                                link: (e = l, i = ".dsArtworkListItem__link", n = "href", o = void 0, o = e.querySelector(i), o ? o.getAttribute(n) : null),
                                media: [],
                                path: l.getAttribute("data-path"),
                                title: Di(l, ".dsArtworkListItem__title")
                            })
                        }
                        return 0 == s.length ? null : {
                            artworks: s,
                            mediaUrl: t.getAttribute("data-media"),
                            title: Di(t, ".dsAlbumCover__title")
                        }
                    }()
                    t && (e.INSTANCE = new e({
                        album: t
                    }))
                }
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsPresentationOverlay",
                childClass: Ye
            })], e.prototype, "overlay", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsPresentation__container"
            })], e.prototype, "container", void 0), e
        }(o.View)),
        Bi = (i(51), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isActive = !1, new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.onClick = function() {
                var t = this
                if (!this.isActive)
                    return this.isActive = !0, new Vi({
                        url: this.target,
                        complete: function() {
                            return t.isActive = !1
                        }
                    }), !0
            }, n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "target", void 0), e = n.b([Object(o.Component)(".dsShare")], e)
        }(o.View)),
        zi = (i(52), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isActive = !1, new M(i, i.onButtonClick, "button[data-action]"), i
            }
            return n.c(e, t), e.prototype.onButtonClick = function(t, e) {
                var i = this
                if (this.isActive)
                    return !1
                if (!e || !e.hasAttribute("data-action"))
                    return !1
                switch (e.getAttribute("data-action")) {
                    case "edit":
                        return this.isActive = !0, new Vi({
                            url: e.getAttribute("data-location"),
                            complete: function() {
                                return i.isActive = !1
                            }
                        }), !0
                    case "presentation":
                        return ji.create(), !0
                }
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsShare",
                childClass: Bi
            })], e.prototype, "share", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsAlbumCover__viewer",
                childClass: Re,
                childOptions: {
                    scaleMode: Ve.Home
                }
            })], e.prototype, "viewer", void 0), e = n.b([Object(o.Component)(".dsAlbumCover")], e)
        }(o.View)),
        Fi = (i(53), function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            n.c(e, t),
                n.b([Object(o.ChildComponent)({
                    selector: ".dsArtworkImage",
                    childClass: at,
                    childOptions: {
                        scaleMode: nt.Cover
                    }
                })], e.prototype, "image", void 0),
                e = n.b([Object(o.Component)(".dsAlbumHighlight")], e)
        }(o.View), i(54), function(t) {
            function e(e) {
                for (var i = t.call(this, e) || this, n = i.el.querySelectorAll(".dsArtworkImage"), o = [], r = 0; r < n.length; r++)
                    o.push(new at({
                        el: n[r],
                        scaleMode: nt.Cover
                    }))
                return i.images = o, i
            }
            n.c(e, t),
                e.prototype.handleViewportResize = function() {
                    return _(this.images).each((function(t) {
                        return t.handleViewportResize()
                    })), !0
                },
                e = n.b([Object(o.Component)(".dsAlbumList")], e)
        }(o.View), i(55), i(56), i(57), I.getInstance()),
        Wi = (function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isActive = !1, Fi.execute(i, {
                    favorite: i.onFavoriteIntention,
                    album: i.onAlbumIntention
                }), i.listenTo(Oi.getInstance(), "favorite", i.onFavorite), new M(i, i.onButtonClick, "button"), i
            }
            n.c(e, t),
                e.prototype.onAlbumIntention = function() {
                    var t = this.el.querySelector('*[data-action="album"]')
                    this.onButtonClick(null, t)
                },
                e.prototype.onFavoriteIntention = function() {
                    var t = this.el.querySelector('*[data-action="favorite"]')
                    this.onButtonClick(null, t)
                },
                e.prototype.onFavorite = function(t) {
                    var e = t.artwork,
                        i = t.favorite,
                        n = this.el.querySelector('*[data-artwork="' + e + '"]')
                    n && n.classList.toggle("pushed", i)
                },
                e.prototype.onButtonClick = function(t, e) {
                    var i = this
                    if (!e || !e.hasAttribute("data-action"))
                        return !1
                    var n = e.getAttribute("data-action")
                    switch (n) {
                        case "store":
                            return !1
                        case "enlarge":
                            Ge.create()
                            break
                        case "album":
                        case "download":
                        case "favorite":
                        case "share":
                            this.isActive = !0,
                                new Vi({
                                    url: e.getAttribute("data-target"),
                                    intention: {
                                        name: n
                                    },
                                    complete: function() {
                                        return i.isActive = !1
                                    }
                                })
                    }
                    return !0
                },
                e = n.b([Object(o.Component)(".dsArtworkActions")], e)
        }(o.View), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.initialOffset = 0, i.direction = y.Horizontal, i
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                return this.initialOffset = this.view.offset, gt(this.view, "offset"), this.view.canScroll
            }, e.prototype.handleDragMove = function(t, e) {
                var i = this.view.minOffset,
                    n = this.view.maxOffset,
                    o = this.initialOffset + e.x - e.startX
                return o < i && (o = i + .5 * (o - i)), o > n && (o = n + .5 * (o - n)), this.view.setOffset(o), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                var i = {
                    velocity: e.getVelocity().x
                }
                i.min = this.view.minOffset,
                    i.max = this.view.maxOffset,
                    ie(this.view, "offset", i)
            }, e
        }(O)),
        qi = (i(58), function(t) {
            function e(e) {
                var i = t.call(this, n.a({}, e, {
                    disableVisibilityCheck: e.el && e.el.classList.contains("static")
                })) || this
                return i.el.classList.contains("static") && i.setInViewport(!0), i
            }
            return n.c(e, t), e = n.b([Object(o.Component)(".dsImage")], e)
        }(at)),
        Ui = (i(17), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.handleClick = function() {
                    return i.derivates.setSelected(i), !0
                }, i.isSelected = i.el.classList.contains("selected"), new M(i, i.handleClick, ".dsArtworkDerivates__button"), i
            }
            return n.c(e, t), e.prototype.setSelected = function(t) {
                this.isSelected != t && (this.isSelected = t, this.el.classList.toggle("selected", t))
            }, n.b([Object(o.Option)()], e.prototype, "path", void 0), n.b([Object(o.Option)()], e.prototype, "info", void 0), n.b([Object(o.ChildComponent)({
                childClass: qi,
                selector: ".dsArtworkImage"
            })], e.prototype, "image", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Owner
            })], e.prototype, "derivates", void 0), e
        }(o.View)),
        Yi = function(t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n.c(e, t), e.prototype.handleWheel = function(t, e) {
                if (!this.view.canScroll)
                    return !1
                if (0 == e.pixelX)
                    return !1
                var i = this.view.offset - e.pixelX
                return i < this.view.minOffset && (i = this.view.minOffset), i > this.view.maxOffset && (i = this.view.maxOffset), gt(this.view, "offset"), this.view.setOffset(i), !0
            }, e
        }(ke),
        Xi = (function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.canScroll = !1, i.offset = 0, i.maxOffset = 0, i.minOffset = 0, new Wi(i), new Yi(i), i.listenTo(A.a.getInstance(), "resize", i.handleResize), i
            }
            n.c(e, t),
                e.prototype.setOffset = function(t) {
                    this.offset = t,
                        this.list.style[Ai.styleName] = "translate(" + t + "px, 0)"
                },
                e.prototype.setSelected = function(t) {
                    this.items.forEach((function(e) {
                        e.setSelected(e == t)
                    }))
                    var e = Re.INSTANCE
                    e && e.replaceImage(t.path, JSON.parse(t.info), {
                        x: .5,
                        y: .5
                    })
                },
                e.prototype.handleResize = function() {
                    var t = this.list,
                        e = this.viewport.offsetWidth,
                        i = t.offsetWidth
                    this.canScroll = i > e,
                        this.maxOffset = 0,
                        this.minOffset = e - i
                },
                n.b([Object(o.ChildComponents)({
                    childClass: Ui,
                    selector: ".dsArtworkDerivates__item"
                })], e.prototype, "items", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsArtworkDerivates__list"
                })], e.prototype, "list", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsArtworkDerivates__viewport"
                })], e.prototype, "viewport", void 0),
                e = n.b([Object(o.Component)(".dsArtworkDerivates")], e)
        }(o.View), i(59), pt.getInstance()),
        Gi = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    className: "dsAudioListItem"
                })) || this
                return i.list = e.owner, i.model ? i.createElements() : (i.duration = i.el.querySelector(".dsAudioListItem__duration"), i.model = new Ei({
                    duration: parseInt(i.el.getAttribute("data-duration")) / 1e3,
                    source: i.el.getAttribute("data-source"),
                    title: i.el.querySelector(".dsAudioListItem__title").innerText
                })), new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.createElements = function() {
                var t = this.el,
                    e = this.model,
                    i = document.createElement("div")
                i.className = "dsAudioListItem__widget"
                var n = document.createElement("div")
                n.className = "dsAudioListItem__title",
                    n.innerHTML = e.getTitle()
                var o = document.createElement("div")
                o.className = "dsAudioListItem__duration",
                    o.innerHTML = ct.formatTime(e.getDuration()),
                    t.appendChild(i),
                    t.appendChild(n),
                    t.appendChild(o),
                    this.duration = o
            }, e.prototype.setCurrent = function(t) {
                this.isCurrent != t && (this.isCurrent = t, t ? this.listenTo(Xi, "state", this.onPlayerState) : (this.setPlaying(!1), this.stopListening(Xi)), this.el.classList.toggle("current", t))
            }, e.prototype.setPlaying = function(t) {
                this.isPlaying != t && (this.isPlaying = t, this.el.classList.toggle("playing", t))
            }, e.prototype.onClick = function(t) {
                for (var e = t.target; e && e.classList;) {
                    if (e.classList.contains("tuxSeekBar"))
                        return !1
                    e = e.parentNode
                }
                return this.list.setCurrentTrack(this.model), !0
            }, e.prototype.onPlayerState = function(t) {
                this.setPlaying(t == st.Playing)
            }, e
        }(o.View),
        Qi = (i(60), function(t) {
            function e(e) {
                var n = t.call(this, _.defaults(e || {}, {
                    childClass: Gi,
                    childSelector: ".dsAudioListItem",
                    container: ".dsAudioList__list"
                })) || this
                i.instance || (i.instance = n)
                var o = pt.getInstance()
                return n.collection = new Ni(_.map(n.children, (function(t) {
                    return t.model
                }))), n.seekBar = new ct({
                    appendTo: n.el,
                    emitClick: !0,
                    player: o
                }), n.listenTo(n.seekBar, "click", n.onSeekbarClick), n.listenTo(o, "track", n.onPlayerTrack), n.onPlayerTrack(o.track), n
            }
            var i
            return n.c(e, t), i = e, e.prototype.setCurrentTrack = function(t) {
                pt.getInstance().setTrack(t).play()
            }, e.prototype.onPlayerTrack = function(t) {
                for (var e = 0, i = this.children; e < i.length; e++) {
                    var n = i[e],
                        o = n.model == t
                    n.setCurrent(o),
                    o && n.el.appendChild(this.seekBar.el)
                }
            }, e.prototype.onPlayFirstTrack = function() {
                if (this.children && this.children.length) {
                    var t = pt.getInstance()
                    t.setTrack(this.children[0].model),
                        t.play()
                }
            }, e.prototype.onSeekbarClick = function(t) {
                if (_(this.children).find((function(t) {
                    return t.isCurrent
                }))) {
                    var e = pt.getInstance()
                    e.getPlayState() == st.Playing ? e.pause() : e.play()
                }
            }, e = i = n.b([Object(o.Component)(".dsAudioList")], e)
        }(Ze)),
        Ki = (i(61), function(t) {
            function e(e) {
                return t.call(this, n.a({}, e, {
                    player: pt.getInstance()
                })) || this
            }
            n.c(e, t),
                e.prototype.setPlayer = function(e) {
                    this.player != e && (t.prototype.setPlayer.call(this, e), this.currentTime.innerText = this.el.getAttribute("data-initial-duration"))
                },
                e.prototype.onClickEmpty = function() {
                    Qi.instance && Qi.instance.onPlayFirstTrack()
                },
                e = n.b([Object(o.Component)(".dsArtworkHeaderPlayer")], e)
        }(We), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isVisible = !0, i
            }
            return n.c(e, t), e.prototype.setMasonryPosition = function(t) {
                t ? (this.el.style.visibility = "visible", this.el.style.top = t.y + "px", this.el.style.left = t.x + "px") : (this.el.style.visibility = "hidden", this.el.style.top = "0px", this.el.style.left = "0px")
            }, e.prototype.getDesiredSize = function() {
                return {
                    width: this.el.offsetWidth,
                    height: this.el.offsetHeight
                }
            }, e.prototype.setActualSize = function(t) {
                return this.getDesiredSize()
            }, e.prototype.handleMasonryPreUpdate = function(t) {}, e.prototype.handleMasonryPostUpdate = function(t) {}, e.prototype.handleMasonryActivate = function() {}, e.prototype.handleMasonryDeactivate = function() {
                this.el.style.top = "",
                    this.el.style.left = ""
            }, e
        }(r.a)),
        Ji = (i(62), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    childSelector: "li",
                    childClass: Ki,
                    isEnabled: !0
                })) || this
                return i.isActive = !1, e.strategy && i.setStrategy(e.strategy), i
            }
            return n.c(e, t), e.prototype.update = function() {
                this.setActive(this.shouldBeActive()),
                this.isActive && this.layout()
            }, e.prototype.layout = function() {
                for (var t = this.strategy, e = [], i = 0, n = this.children; i < n.length; i++) {
                    (l = n[i]).isVisible && (e.push(l), l.handleMasonryPreUpdate(this))
                }
                t.reset(e)
                for (var o = 0, r = e; o < r.length; o++) {
                    (l = r[o]).setMasonryPosition(t.place(l))
                }
                for (var s = 0, a = e; s < a.length; s++) {
                    var l;
                    (l = a[s]).handleMasonryPostUpdate(this)
                }
                this.setHeight(t.getMaxHeight())
            }, e.prototype.shouldBeActive = function() {
                return this.children && this.isEnabled
            }, e.prototype.setStrategy = function(t) {
                this.strategy && this.strategy.setMasonry(null),
                    this.strategy = t,
                    this.strategy.setMasonry(this),
                    this.update()
            }, e.prototype.setEnabled = function(t) {
                this.isEnabled != t && (this.isEnabled = t, this.update())
            }, e.prototype.setHeight = function(t) {
                this.el.style.height = t + "px"
            }, e.prototype.setActive = function(t) {
                if (this.isActive != t)
                    if (this.isActive = t, this.el.classList.toggle("active", t), t)
                        for (var e = 0, i = this.children; e < i.length; e++) {
                            i[e].handleMasonryActivate()
                        }
                    else {
                        this.el.style.height = ""
                        for (var n = 0, o = this.children; n < o.length; n++) {
                            o[n].handleMasonryDeactivate()
                        }
                    }
            }, e.prototype.handleViewportResize = function() {
                return (!this.isActive || this.strategy && this.strategy.isUpdateRequired()) && this.update(), !0
            }, n.b([Object(z.a)({
                type: z.b.Bool,
                defaultValue: !0
            })], e.prototype, "isEnabled", void 0), e
        }(Ze)),
        $i = function() {
            function t(t) {
                this.reserved = [],
                    this.index = t
            }
            return t.prototype.getMaxHeight = function(t) {
                void 0 === t && (t = 1)
                var e,
                    i = this.reserved,
                    n = i.length
                return e = 0 == n ? 0 : i[n - 1].max, t > 1 ? Math.max(e, this.next.getMaxHeight(t - 1)) : e
            }, t.prototype.getAllPositions = function(t, e, i) {
                var n = this
                return void 0 === i && (i = []), this.walk(t, (function(o, r) {
                    r - o < e || t > 1 && !n.next.isFree(t - 1, e, o) || i.push({
                        column: n.index,
                        x: 0,
                        y: o,
                        width: t,
                        height: e
                    })
                })), i
            }, t.prototype.isFree = function(t, e, i) {
                for (var n = 0, o = this.reserved.length; n < o; n++) {
                    var r = this.reserved[n]
                    if (!(r.max <= i) && !(r.min >= i + e))
                        return !1
                }
                return !(t > 1) || this.next.isFree(t - 1, e, i)
            }, t.prototype.walk = function(t, e) {
                var i = this.getMaxHeight(t),
                    n = !1,
                    o = this.reserved.length
                if (0 == o)
                    return e(0, Number.NaN)
                for (var r, s = this.reserved[0], a = 0; a < o; a++)
                    r = s,
                    0 == a && r.min > 0 && (0 == i && (n = !0), e(0, r.min)),
                    r.max == i && (n = !0),
                        a == o - 1 ? e(r.max, Number.NaN) : (s = this.reserved[a + 1], e(r.max, s.min))
                n || e(i, Number.NaN)
            }, t.prototype.reserve = function(t) {
                this.reserved.push({
                    min: t.y,
                    max: t.y + t.height
                }),
                    this.reserved.sort((function(t, e) {
                        return t.min == e.min ? 0 : t.min > e.min ? 1 : -1
                    }))
                for (var e = 0, i = this.reserved.length - 1; e < i;) {
                    var n = this.reserved[e],
                        o = this.reserved[e + 1]
                    Math.abs(n.max - o.min) < .5 ? (n.max = o.max, this.reserved.splice(e + 1, 1), i -= 1) : e += 1
                }
                this.index < t.column + t.width - 1 && this.next.reserve(t)
            }, t
        }(),
        Zi = function() {
            function t(t) {
                this.columns = [],
                    this.columnWidth = 0,
                    this.masonryWidth = 0,
                    this.gutter = 0,
                    this.columnCount = t.columnCount,
                    this.gutter = void 0 !== t.gutter ? t.gutter : 0
            }
            return t.prototype.reset = function() {
                for (var t = this.getColumnCount(), e = this.masonry.el.offsetWidth, i = [], n = t - 1; n >= 0; n--) {
                    var o = new $i(n)
                    o.next = i[n + 1],
                        i[n] = o
                }
                this.masonryWidth = e,
                    this.columnWidth = (e - this.gutter * (t - 1)) / t,
                    this.columns = i
            }, t.prototype.reserve = function(t) {
                this.columns[t.column].reserve(t)
            }, t.prototype.isUpdateRequired = function() {
                var t = this.masonry.el.offsetWidth,
                    e = this.getColumnCount()
                return t != this.masonryWidth || e != this.columns.length
            }, t.prototype.setMasonry = function(t) {
                this.masonry = t,
                    this.masonryWidth = 0
            }, t.prototype.getColumnCount = function() {
                return "number" == typeof this.columnCount ? this.columnCount : this.columnCount(this.masonry)
            }, t.prototype.getMaxHeight = function() {
                for (var t = 0, e = 0, i = this.columns; e < i.length; e++) {
                    var n = i[e]
                    t = Math.max(t, n.getMaxHeight())
                }
                return t - this.gutter
            }, t.prototype.place = function(t) {
                var e = this.getBestPosition(t)
                return e ? (e.x = (this.columnWidth + this.gutter) * e.column, this.reserve(e), e) : null
            }, t.prototype.getColumnCountFromWidth = function(t) {
                return Math.max(1, Math.min(this.getColumnCount(), Math.round(t / this.columnWidth)))
            }, t.prototype.getBestPosition = function(t) {
                var e = this.getAllPositions(t)
                return e.sort((function(t, e) {
                    return t.y != e.y ? t.y - e.y : t.column == e.column ? 0 : t.column - e.column
                })), e[0]
            }, t.prototype.getAllPositions = function(t) {
                var e = t.getDesiredSize(),
                    i = e.width,
                    n = e.height
                n += this.gutter
                for (var o = this.getColumnCountFromWidth(i), r = [], s = this.columns.length - o + 1, a = 0; a < s; a++)
                    this.columns[a].getAllPositions(o, n, r)
                return r
            }, t.prototype.getPositionAt = function(t, e) {
                var i = e.getDesiredSize(),
                    n = i.width,
                    o = i.height,
                    r = this.getColumnCountFromWidth(n),
                    s = []
                return this.columns[t].getAllPositions(r, o, s), s.pop()
            }, t
        }()
    function tn(t, e, i) {
        var n = function(t, e) {
            var i = A.a.getInstance(),
                n = _(t).map((function(t) {
                    return t.getBoundingClientRect()
                })),
                o = {
                    deleted: [],
                    created: [],
                    changed: []
                },
                r = i.height,
                s = function(t, e) {
                    return e > 0 && t < r
                }
            return _(e()).each((function(e) {
                var i = e.getBoundingClientRect(),
                    r = _(t).indexOf(e),
                    a = s(i.top, i.bottom)
                if (-1 == r)
                    o.created.push({
                        element: e,
                        position: i,
                        inViewport: a
                    })
                else {
                    var l = n[r]
                    n[r] = null,
                        o.changed.push({
                            element: e,
                            from: l,
                            to: i,
                            inViewport: a || s(l.top, l.bottom)
                        })
                }
            })), _(t).each((function(t, e) {
                var i = n[e]
                i && o.deleted.push({
                    element: t,
                    position: i,
                    inViewport: s(i.top, i.bottom)
                })
            })), o
        }(t, e)
        if (!Ai.styleName || !K.endEvent)
            return n
        var o = Ai.styleName,
            r = K.endEvent,
            s = _.defaults(i || {}, {
                useTransform3D: !1,
                finished: null
            }),
            a = s.useTransform3D,
            l = s.finished,
            h = 0
        return _(n.changed).each((function(t) {
            var e = t.element,
                n = t.from,
                s = t.to
            if (t.inViewport) {
                var c = i.ignoreX ? 0 : n.left - s.left,
                    u = i.ignoreY ? 0 : n.top - s.top,
                    p = i.scale ? n.width / s.width : 1
                if (0 != c || 0 != u || 1 != p) {
                    var d = function() {
                        e.style[o] = "",
                            e.classList.remove("move"),
                            e.removeEventListener(r, d),
                        0 == (h -= 1) && l && l()
                    }
                    h += 1,
                        J(e, (function() {
                            e.classList.add("move"),
                                e.style[o] = a ? "translate3d(" + c + "px, " + u + "px, 0) scale(" + p + ")" : "translate(" + c + "px, " + u + "px) scale(" + p + ")"
                        })),
                        e.addEventListener(r, d),
                        e.style[o] = a ? "translate3d(0, 0, 0) scale(1)" : "translate(0, 0) scale(1)"
                }
            }
        })), n
    }
    var en,
        nn = function() {
            function t() {
                this.factor = 1
            }
            return t.prototype.update = function() {
                var t = this.width,
                    e = this.factor * t
                this.width = t,
                    this.area = e * e,
                    this.maxWidth = .333 * t,
                    this.maxHeight = .4 * t,
                    this.minWidth = 200,
                    this.minHeight = 100
            }, t.prototype.setWidth = function(t) {
                this.width != t && (this.width = t, this.hasChanged = !0, this.update())
            }, t.prototype.setFactor = function(t) {
                this.factor != t && (this.factor = t, this.hasChanged = !0, this.update())
            }, t
        }(),
        on = (i(63), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                if (i.aspect = 1, i.nativeArea = 0, i.nativeWidth = 0, i.nativeHeight = 0, i.isEditable = !1, i.isVisibilityRegistered = !1, i.isMobileHovered = !1, i.imageWrap) {
                    var n = i.imageWrap.image
                    i.nativeWidth = n.nativeWidth,
                        i.nativeHeight = n.nativeHeight
                } else
                    i.nativeWidth = 256,
                        i.nativeHeight = 169
                return i.nativeArea = i.nativeHeight * i.nativeWidth, i.aspect = i.nativeHeight / i.nativeWidth, i.list = e.owner, (i.isEditable = i.el.classList.contains("editable")) && i.link && (new M(i, i.onClick), i.link.addEventListener("click", (function(t) {
                    return t.preventDefault()
                }))), i
            }
            return n.c(e, t), e.prototype.prepareDesiredSize = function() {
                this.desiredSize.height = this.el.offsetHeight
            }, e.prototype.setInViewport = function(t) {
                this.imageWrap.setInViewport(t)
            }, e.prototype.setScaleMode = function(t) {
                switch (t) {
                    case 0:
                        this.handleMasonryPreUpdate = this.applyColumnScale
                        break
                    case 1:
                        this.handleMasonryPreUpdate = this.applyFixedScale
                        break
                    case 2:
                        this.handleMasonryPreUpdate = this.applyJustifiedScale
                }
            }, e.prototype.setMobileHovered = function(t) {
                var e = this
                this.isMobileHovered != t && (this.isMobileHovered = t, t && _(this.list.children).each((function(t) {
                    return t != e ? t.setMobileHovered(!1) : null
                })), this.el.classList.toggle("hovered", t))
            }, e.prototype.applyColumnScale = function(t) {
                var e = t.constraints,
                    i = this.el,
                    n = this.imageWrap,
                    o = e.width,
                    r = this.aspect < .6 ? o : .5 * o - 10
                if (i.style.width = r + "px", n) {
                    var s = n.measure(r, 0, nt.Width)
                    n.setSize(s.width, s.height, !0)
                }
                this.desiredSize = {
                    width: r,
                    height: 0
                }
            }, e.prototype.applyFixedScale = function(t) {
                var e = t.constraints,
                    i = this.el,
                    n = this.imageWrap,
                    o = this.nativeWidth,
                    r = this.nativeHeight,
                    s = e.maxHeight,
                    a = e.width,
                    l = Math.floor(.333 * (a - 60))
                i.style.width = l + "px"
                var h = l / o
                if (h = Math.min(h, s / r), n) {
                    var c = n.measure(o * h, 0, nt.Width)
                    n.setSize(c.width, c.height, !0)
                }
                this.desiredSize = {
                    width: l,
                    height: 0
                }
            }, e.prototype.applyJustifiedScale = function(t) {
                var e = t.constraints,
                    i = this,
                    n = i.el,
                    o = i.imageWrap,
                    r = i.nativeArea,
                    s = i.nativeWidth,
                    a = i.nativeHeight,
                    l = e.area,
                    h = e.maxWidth,
                    c = e.maxHeight,
                    u = e.minWidth,
                    p = e.minHeight,
                    d = Math.sqrt(l / r)
                d = Math.max(d, p / a),
                    d = Math.min(d, h / s),
                    d = Math.min(d, c / a)
                var f = Math.floor(s * d),
                    m = Math.max(u, f)
                if (o) {
                    var y = o.measure(s * d, 0, nt.Width)
                    o.setSize(y.width, y.height, !0)
                }
                n.style.width = m + "px",
                    this.desiredSize = {
                        width: m,
                        height: 0
                    }
            }, e.prototype.handleMasonryPostUpdate = function() {
                this.isVisibilityRegistered || (this.isVisibilityRegistered = !0, this.imageWrap && j.getInstance().register(this))
            }, e.prototype.onClick = function(t, e, i) {
                var n = function() {
                    for (var e = t.target; e && e.classList;) {
                        if (e.classList.contains("dsArtworkListItem__actionButton"))
                            return e
                        e = e.parentNode
                    }
                    return null
                }()
                if (n && n.classList.contains("cover"))
                    this.list.selectCover(this)
                else if (n && n.classList.contains("remove"))
                    this.list.deleteChild(this)
                else if (this.isEditable && 0 != i.type && !this.isMobileHovered)
                    this.setMobileHovered(!0)
                else {
                    if (!this.link)
                        return !1
                    window.location.href = this.link.href
                }
                return !0
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkImage",
                childClass: at,
                childOptions: {
                    scaleMode: nt.Fit,
                    focusX: 0,
                    disableVisibilityCheck: !0
                }
            })], e.prototype, "imageWrap", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Number
            })], e.prototype, "referenceId", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkListItem__link"
            })], e.prototype, "link", void 0), e
        }(Ki)),
        rn = function() {
            function t(t, e, i) {
                void 0 === e && (e = []),
                void 0 === i && (i = 0),
                    this.top = 0,
                    this.height = 0,
                    this.index = t,
                    this.items = e,
                    this.width = i
            }
            return t.prototype.clone = function() {
                return new t(this.index, this.items.slice(), this.width)
            }, t.prototype.push = function(t) {
                this.items.push(t),
                    this.width += t.desiredSize.width
            }, t.prototype.unshift = function(t) {
                this.items.unshift(t),
                    this.width += t.desiredSize.width
            }, t.prototype.pop = function() {
                var t = this.items.pop()
                return this.width -= t.desiredSize.width, t
            }, t.prototype.shift = function() {
                var t = this.items.shift()
                return this.width -= t.desiredSize.width, t
            }, t.prototype.getHeight = function() {
                return _(this.items).reduce((function(t, e) {
                    return Math.max(t, e.desiredSize.height)
                }), 0)
            }, t.prototype.getItemSpacing = function(t) {
                return (t - this.width) / (this.items.length - 1)
            }, t
        }(),
        sn = function() {
            function t(t) {
                void 0 === t && (t = !1),
                    this.lines = [],
                    this.totalWidth = 0,
                    this.layoutWidth = 0,
                    this.itemsPerLine = 1,
                    this.lineSpacing = 40,
                    this.minItemPadding = 20,
                    this.stack = {},
                    this.justifyLastLine = t
            }
            return t.prototype.resolve = function(t, e, i) {
                void 0 === i && (i = 0)
                var n,
                    o,
                    r = t.items.length,
                    s = this.lines.length,
                    a = t.index,
                    l = e + 1,
                    h = a <= 0,
                    c = a >= s - 1
                if (l >= r)
                    return c ? null : this.resolve(this.lines[a + 1], -1, i)
                if (l <= 0 && (l = 0, n = !0), l >= r - 1 && (l = r - 1, o = !0), i > 0)
                    if (o) {
                        if (c)
                            return null
                        a += 1,
                            l = 0
                    } else
                        l += 1
                if (i < 0)
                    if (n) {
                        if (h)
                            return null
                        a -= 1,
                            l = this.lines[a].items.length - 1
                    } else
                        l -= 1
                return this.lines[a].items[l]
            }, t.prototype.setJustifiedItems = function(t) {
                var e = [],
                    i = this.layoutWidth,
                    n = this.minItemPadding,
                    o = t.length,
                    r = this.itemsPerLine,
                    s = Math.ceil(o / r),
                    a = 0
                r = o / s
                for (var l = 0; l <= s; l += 1) {
                    e.push(new rn(l))
                    for (var h = Math.floor(l * r), c = Math.min(o - 1, Math.floor((l + 1) * r - 1)), u = 0, p = h; p <= c; p += 1)
                        u += t[p].desiredSize.width + n
                    u > i && (a += .25)
                }
                if ((a = Math.ceil(a)) > 0) {
                    for (l = 0; l < a; l++)
                        e.push(new rn(s))
                    r = o / (s += a)
                }
                return _(t).each((function(t, i) {
                    e[Math.floor(i / r)].push(t)
                })), this.lines = e, this
            }, t.prototype.setFlowedItems = function(t) {
                var e,
                    i = this.totalWidth,
                    n = this.minItemPadding,
                    o = [],
                    r = function() {
                        return e = new rn(o.length), o.push(e), e
                    },
                    s = function(t) {
                        return e.width + t.desiredSize.width + e.items.length * n
                    }
                return this.lines = function() {
                    e = r()
                    for (var n = 0, a = t; n < a.length; n++) {
                        var l = a[n]
                        s(l) > i && r(),
                            e.push(l)
                    }
                    return o
                }(), this
            }, t.prototype.distribute = function() {
                return this.stack = {}, this.lines = this.finalizeLines(this.distributeStep(this.lines, 0)), this
            }, t.prototype.distributeStep = function(e, i) {
                void 0 === i && (i = 0)
                var n = this.stack,
                    o = t.getHash(e)
                if (o in n)
                    return n[o]
                n[o] = e
                var r = this.distributeLine(e, i)
                return n[o] = r, r
            }, t.prototype.distributeLine = function(e, i) {
                var n = this
                void 0 === i && (i = 0)
                for (var o = e.length, r = e.slice().sort((function(t, e) {
                    return e.width - t.width
                })), s = Math.min(Math.floor(.5 * o), 1), a = o - s, l = e, h = this.getScore(e), c = function(o, r) {
                    var s = t.shiftItemsBetweenLines(e, o, r)
                    i < 6 && (s = n.distributeStep(s, i + 1))
                    var a = n.getScore(s)
                    a < h && (h = a, l = s)
                }, u = 0; u < s; u += 1) {
                    var p = r[u].index
                    p > 0 && c(p, p - 1),
                    p < o - 2 && c(p, p + 1)
                    for (var d = o - 1; d >= a; d -= 1)
                        c(p, r[d].index)
                }
                return l
            }, t.prototype.finalize = function() {
                this.finalizeLines(this.lines)
            }, t.prototype.finalizeLines = function(t) {
                var e = this.totalWidth,
                    i = this.justifyLastLine,
                    n = this.lineSpacing,
                    o = 0,
                    r = 0,
                    s = 0
                return _(t).each((function(a, l) {
                    var h = a.getHeight(),
                        c = a.items.length,
                        u = a.getItemSpacing(e),
                        p = 0
                    l != t.length - 1 || i ? (r += u, s += 1) : u = s > 0 ? Math.min(u, Math.max(20, r / s)) : Math.min(u, 20)
                    var d = _(a.items).map((function(t, e) {
                        var i = p,
                            n = 0 == e,
                            r = e == c - 1
                        return p += t.desiredSize.width + u, {
                            x: i,
                            y: o + .5 * (h - t.desiredSize.height),
                            width: t.desiredSize.width,
                            height: t.desiredSize.height,
                            leftMin: i - (n ? 10 : .5 * u),
                            rightMax: i + t.desiredSize.width + (r ? 10 : .5 * u)
                        }
                    }))
                    a.top = o - .5 * n,
                        a.height = h + n,
                        a.positions = d,
                        o += h + n
                })), t
            }, t.prototype.getScore = function(t) {
                for (var e = this.layoutWidth, i = this.justifyLastLine, n = t.length, o = 0, r = 0, s = 0; s < n; s++) {
                    var a = e - t[s].width
                    a < 0 ? (o -= a, r += 1) : (s < n - 1 || i) && (o += a, r += 1)
                }
                return o / r
            }, t.prototype.getHeight = function() {
                var t = this.lines[this.lines.length - 1]
                return t ? t.top + t.height : 0
            }, t.getHash = function(t) {
                for (var e = [], i = 0, n = t; i < n.length; i++) {
                    var o = n[i]
                    e.push("LINE")
                    for (var r = 0, s = o.items; r < s.length; r++) {
                        var a = s[r]
                        e.push(a.cid)
                    }
                }
                return e.join(",")
            }, t.shiftItemsBetweenLines = function(e, i, n) {
                var o,
                    r = []
                if (_(e).each((function(t) {
                    return r.push(t.clone())
                })), i < n)
                    for (var s = i; s <= n; s++)
                        s != i && r[s].unshift(o),
                        s != n && (o = r[s].pop())
                else
                    for (s = i; s >= n; s--)
                        s != i && r[s].push(o),
                        s != n && (o = r[s].shift())
                return t.removeEmptyLines(r)
            }, t.removeEmptyLines = function(t) {
                for (var e = 0; e < t.length;)
                    t[e].items.length ? (t[e].index = e, e += 1) : t.splice(e, 1)
                return t
            }, t
        }(),
        an = function() {
            function t() {
                this.field = new sn(!0)
            }
            return t.prototype.reset = function(t) {
                var e = this.list,
                    i = this.field
                e.constraints.hasChanged = !1,
                    _(t).each((function(t) {
                        return t.prepareDesiredSize()
                    })),
                    i.totalWidth = e.constraints.width,
                    i.layoutWidth = i.totalWidth - 40 * i.itemsPerLine,
                    i.setJustifiedItems(t).distribute()
            }, t.prototype.place = function(t) {
                for (var e = 0, i = this.field.lines; e < i.length; e++) {
                    var n = i[e],
                        o = _(n.items).indexOf(t)
                    if (-1 != o)
                        return n.positions[o]
                }
                return null
            }, t.prototype.isUpdateRequired = function() {
                var t = this.list,
                    e = t.el,
                    i = t.constraints
                return i.setWidth(e.offsetWidth), i.hasChanged
            }, t.prototype.getMaxHeight = function() {
                return this.field.getHeight()
            }, t.prototype.setMasonry = function(t) {
                this.list = t
            }, t
        }(),
        ln = function() {
            function t() {
                this.field = new sn(!1),
                    this.minItemPadding = 0
            }
            return t.prototype.reset = function(t) {
                var e = this.list,
                    i = this.field
                this.list.constraints.hasChanged = !1,
                    _(t).each((function(t) {
                        return t.prepareDesiredSize()
                    })),
                    i.totalWidth = e.constraints.width,
                    i.layoutWidth = i.totalWidth,
                    i.setFlowedItems(t).finalize()
            }, t.prototype.place = function(t) {
                for (var e = 0, i = this.field.lines; e < i.length; e++) {
                    var n = i[e],
                        o = _(n.items).indexOf(t)
                    if (-1 != o)
                        return n.positions[o]
                }
                return null
            }, t.prototype.isUpdateRequired = function() {
                var t = this.list,
                    e = t.el,
                    i = t.constraints
                return i.setWidth(e.offsetWidth), i.hasChanged
            }, t.prototype.getMaxHeight = function() {
                return this.field.getHeight()
            }, t.prototype.setMasonry = function(t) {
                this.list = t
            }, t
        }(),
        hn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.position = new ft(0, 0), i.imageWrap && i.imageWrap.setInViewport(!0), i
            }
            return n.c(e, t), e.prototype.getPosition = function() {
                return this.position
            }, e.prototype.setPosition = function(t) {
                this.position = t,
                    this.el.style.left = t.x + "px",
                    this.el.style.top = t.y + "px"
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkImage",
                childClass: at,
                childOptions: {
                    scaleMode: nt.Fit,
                    focusX: 0,
                    disableVisibilityCheck: !0
                }
            })], e.prototype, "imageWrap", void 0), e
        }(o.View),
        cn = A.a.getInstance(),
        un = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.scrollStep = 0, i.handleFrame = function() {
                    i.scrollStep && cn.setScrollTop(cn.scrollTop + i.scrollStep)
                }, i.list = e, i
            }
            return n.c(e, t), e.prototype.createGhost = function(t) {
                var e = document.createElement("div")
                e.classList.add("dsArtworkList__indicator")
                var i = t.el.cloneNode(!0)
                t.el.classList.add("hidden"),
                    i.classList.add("ghost")
                var n = i.querySelector(".dsArtworkListItem__actions")
                n && n.parentNode.removeChild(n),
                    yt.a.getInstance().on("frame", this.handleFrame),
                    this.list.el.appendChild(e),
                    this.list.el.appendChild(i),
                    this.indicator = e,
                    this.ghost = new hn({
                        el: i
                    })
            }, e.prototype.getLineField = function() {
                var t = this.list.strategy
                return t instanceof an || t instanceof ln ? t.field : null
            }, e.prototype.getLineFromPointer = function(t) {
                var e = this.getLineField(),
                    i = this.list.el.getBoundingClientRect().top
                i = t.y - i - cn.scrollTop
                for (var n = 0, o = e.lines; n < o.length; n++) {
                    var r = o[n]
                    if (r.top > i)
                        break
                    if (!(r.top + r.height < i))
                        return r
                }
                return null
            }, e.prototype.getLineOffsetFromPointer = function(t) {
                var e = this.getLineFromPointer(t),
                    i = this.getLineField()
                if (!e)
                    return null
                var n = e.positions,
                    o = -1,
                    r = this.list.el.getBoundingClientRect().left
                r = t.x - r - cn.scrollLeft
                for (var s = 0; s < n.length; s += 1) {
                    var a = n[s]
                    if (r < .5 * (a.leftMin + a.rightMax))
                        break
                    o = s
                }
                return i.resolve(e, o) == this.item || i.resolve(e, o, -1) == this.item ? null : {
                    line: e,
                    offset: o
                }
            }, e.prototype.getItemFormEvent = function(t) {
                var e = this.getItemElementFromEvent(t)
                return null == e ? null : _(this.list.children).find((function(t) {
                    return t.el == e
                }))
            }, e.prototype.getItemElementFromEvent = function(t) {
                for (var e = t.target; e && e.classList;) {
                    if (e.classList.contains("dsArtworkListItem"))
                        return e
                    e = e.parentNode
                }
                return null
            }, e.prototype.updateGhost = function(t) {
                var e = this.ghost,
                    i = this.ghostOffset
                this.ghost.el
                e.setPosition(new ft(t.x - i.x - cn.scrollLeft, t.y - i.y - cn.scrollTop))
            }, e.prototype.updateInsertPosition = function(t) {
                var e = this.indicator,
                    i = this.getLineOffsetFromPointer(t)
                if (i) {
                    var n = i.line,
                        o = i.offset,
                        r = void 0
                    r = -1 == o ? n.positions[0].leftMin : n.positions[o].rightMax,
                        e.style.visibility = "visible",
                        e.style.left = r + "px",
                        e.style.top = n.top + "px",
                        e.style.height = n.height + "px"
                } else
                    e.style.visibility = "hidden"
                this.lineOffset = i
            }, e.prototype.releaseGhost = function() {
                var t = this.list,
                    e = this.ghost,
                    i = this.item,
                    n = this.indicator,
                    o = this.item.el.getBoundingClientRect(),
                    r = o.left,
                    s = o.top
                t.el.removeChild(n),
                    this.indicator = null,
                    this.ghost = null,
                    this.scrollStep = 0,
                    yt.a.getInstance().off("frame", this.handleFrame),
                    Mt(e, "position", {
                        duration: 250,
                        to: new ft(r, s),
                        finished: function() {
                            e.remove(),
                                i.el.classList.remove("hidden")
                        }
                    })
            }, e.prototype.handleDragStart = function(t, e) {
                var i = this.getItemFormEvent(t)
                if (!i)
                    return !1
                if (!this.getLineField())
                    return !1
                var n = i.el.getBoundingClientRect()
                return this.createGhost(i), this.item = i, this.ghostOffset = {
                    x: e.x - cn.scrollLeft - n.left,
                    y: e.y - cn.scrollTop - n.top
                }, this.updateGhost(e), !0
            }, e.prototype.handleDragMove = function(t, e) {
                if (!this.getLineField())
                    return !1
                var i = e.y - cn.scrollTop
                return i < 100 ? this.scrollStep = (i - 100) / 5 : i > cn.height - 100 ? this.scrollStep = (i - (cn.height - 100)) / 5 : this.scrollStep = 0, this.updateGhost(e), this.updateInsertPosition(e), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                var i = this.lineOffset,
                    n = this.list
                if (i) {
                    var o = i.line,
                        r = i.offset,
                        s = this.getLineField()
                    n.move(this.item, s.resolve(o, r))
                }
                this.releaseGhost()
            }, e.prototype.handleDragCancel = function(t, e) {
                this.releaseGhost()
            }, e
        }(O),
        pn = (i(64), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    childSelector: ".dsArtworkListItem",
                    childClass: on
                })) || this
                i.isCompact = !1,
                    i.initializeStrategies(),
                i.dragable && new un(i),
                    i.isCompact = !!e.owner && e.owner.el.classList.contains("hasPanel")
                var n = N.getInstance()
                return i.listenTo(n, "change", i.onBreakpointChange), i.onBreakpointChange(n.getCurrent()), i
            }
            return n.c(e, t), e.prototype.initializeStrategies = function() {
                this.flowStrategy = new ln,
                    this.justifyStrategy = new an,
                    this.columnStrategy = new Zi({
                        columnCount: 2,
                        gutter: 20
                    }),
                    this.constraints = new nn,
                    this.constraints.setWidth(this.el.offsetWidth)
            }, e.prototype.setCompact = function(t) {
                this.isCompact !== t && (this.isCompact = t, this.onBreakpointChange())
            }, e.prototype.setListMode = function(t) {
                if (this.listMode == t)
                    return this
                switch (this.listMode = t, t) {
                    case 0:
                        return this.setStrategy(this.columnStrategy), this
                    case 1:
                        return this.setStrategy(this.justifyStrategy), this
                    case 2:
                        return this.setStrategy(this.flowStrategy), this
                }
                return this
            }, e.prototype.setScaleMode = function(t) {
                return this.scaleMode == t || (this.scaleMode = t, _(this.children).each((function(e) {
                    return e.setScaleMode(t)
                }))), this
            }, e.prototype.relayout = function(t) {
                var e = this
                void 0 === t && (t = this.children)
                var i = _(t).map((function(t) {
                    return t.el
                }))
                this.el.classList.add("animated"),
                    tn(i, (function() {
                        return e.layout(), i
                    }), {
                        finished: function() {
                            e.el.classList.remove("animated")
                        }
                    })
            }, e.prototype.move = function(t, e) {
                var i = this.children,
                    n = _(i).indexOf(t)
                if (-1 != n) {
                    this.children.splice(n, 1)
                    var o = -1
                    e && (o = _(i).indexOf(e)),
                        -1 != o ? (this.fetch(this.sortUrl + "?id=" + t.referenceId + "&ref=" + e.referenceId), i.splice(o, 0, t)) : (this.fetch(this.sortUrl + "?id=" + t.referenceId), i.push(t)),
                        this.relayout(_(this.children).filter((function(e) {
                            return e != t
                        })))
                }
            }, e.prototype.selectCover = function(t) {
                var e = t.el.querySelector(".dsArtworkListItem__actionButton.cover")
                if (e && !e.classList.contains("selected")) {
                    _(this.el.querySelectorAll(".dsArtworkListItem__actionButton.cover.selected")).each((function(t) {
                        t.classList.remove("selected")
                    })),
                        e.classList.add("selected"),
                        this.fetch(this.coverUrl + "?id=" + t.referenceId)
                }
            }, e.prototype.deleteChild = function(t) {
                var e = _(this.children).indexOf(t);
                -1 != e && this.children.splice(e, 1),
                    t.el.classList.add("removed"),
                    setTimeout((function() {
                        return t.remove()
                    }), 200),
                    this.relayout(),
                    this.fetch(this.removeUrl + "?id=" + t.referenceId)
            }, e.prototype.fetch = function(t) {
                Backbone.ajax({
                    url: t
                }).then((function(t) {
                    if (!_.isObject(t) || !("success" in t) || !t.success)
                        return window.location.reload()
                    if (t.redirect)
                        return window.location.assign(t.redirect)
                    var e = document.querySelector(".dsAlbumCover"),
                        i = o.ComponentRegistry.getInstance().getNode(e).instance
                    i instanceof zi && i.viewer.replaceImage(t.coverPath, t.coverInfo, t.coverCenter)
                }))
            }, e.prototype.onBreakpointChange = function(t) {
                void 0 === t && (t = N.getInstance().getCurrent())
                var e = this.constraints,
                    i = this.justifyLastLine,
                    n = this.justifyStrategy
                switch (t.name) {
                    case "xs":
                        e.setWidth(this.el.offsetWidth),
                            this.setScaleMode(0),
                            this.setListMode(0)
                        break
                    case "sm":
                        this.setScaleMode(1),
                            this.setListMode(2)
                        break
                    case "md":
                        e.setFactor(.16),
                            this.isCompact ? (n.field.itemsPerLine = 3, this.setScaleMode(1)) : (n.field.itemsPerLine = 5, this.setScaleMode(2)),
                            this.setListMode(i ? 1 : 2)
                        break
                    case "lg":
                    default:
                        e.setFactor(.1333),
                            n.field.itemsPerLine = this.isCompact ? 5 : 6,
                            this.setScaleMode(2),
                            this.setListMode(i ? 1 : 2)
                }
            }, n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "sortUrl", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "removeUrl", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "coverUrl", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Bool
            })], e.prototype, "justifyLastLine", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Bool
            })], e.prototype, "dragable", void 0), e = n.b([Object(o.Component)(".dsArtworkList")], e)
        }(Ji))
    function dn(t, e) {
        for (var i = t.target; i && i.classList;) {
            if (i.classList.contains(e))
                return i
            i = i.parentNode
        }
        return null
    }
    !function(t) {
        t[t.Idle = 0] = "Idle",
            t[t.Pressed = 1] = "Pressed",
            t[t.Holding = 2] = "Holding"
    }(en || (en = {}))
    var fn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.handleHoldStart = function(t, e) {
                var i = this.view.scroller
                if (!i || !i.canScroll)
                    return !1
                var n = dn(t, "dsArtworkScrollerArrows__button")
                return !!n && (i.animation.setDirection(n.classList.contains("forward") ? -1 : 1), this.scroller = i, !0)
            }, e.prototype.handleHoldEnd = function(t, e) {
                this.scroller.animation.setDirection(0),
                    this.scroller = null
            }, e.prototype.handleClick = function(t, e) {
                var i = this.view.scroller
                if (!i || !i.canScroll)
                    return !1
                var n = dn(t, "dsArtworkScrollerArrows__button")
                if (!n)
                    return !1
                var o = n.classList.contains("forward") ? -1 : 1,
                    r = i.offset + o * i.viewportWidth * .5
                r = Math.max(i.minOffset, Math.min(i.maxOffset, r)),
                    i.animation.setTarget(r)
            }, e
        }(function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.state = en.Idle, e.initialDelay = 400, e.initialDelayHandle = Number.NaN, e.threshold = 5, e
            }
            return n.c(e, t), e.prototype.clearAllHandles = function() {
                isNaN(this.initialDelayHandle) || (clearTimeout(this.initialDelayHandle), this.initialDelayHandle = Number.NaN)
            }, e.prototype.handleHoldStart = function(t, e) {
                return !0
            }, e.prototype.handleHoldEnd = function(t, e) {}, e.prototype.handleHoldCancel = function(t, e) {
                this.handleHoldEnd(t, e)
            }, e.prototype.handleClick = function(t, e) {}, e.prototype.handlePointerDown = function(t, e, i, n) {
                var o = this
                if (this.state != en.Idle)
                    return null
                this.state = en.Pressed
                var r = new b(e, i, n)
                return this.clearAllHandles(), this.initialDelayHandle = setTimeout((function() {
                    o.initialDelayHandle = Number.NaN,
                        o.handleHoldStart(t, r) ? o.state = en.Holding : o.state = en.Idle
                }), this.initialDelay), r
            }, e.prototype.handlePointerMove = function(t, e) {
                return e.getAbsoluteDistance() < this.threshold
            }, e.prototype.handlePointerUp = function(t, e) {
                this.state == en.Pressed ? this.handleClick(t, e) : this.state == en.Holding && this.handleHoldEnd(t, e),
                    this.clearAllHandles(),
                    this.state = en.Idle
            }, e.prototype.handlePointerCancel = function(t, e) {
                this.state == en.Holding && this.handleHoldCancel(t, e),
                    this.clearAllHandles(),
                    this.state = en.Idle
            }, e
        }(g)),
        mn = (i(65), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isVisible = !0, i.canScrollBackward = !0, i.canScrollForward = !0, e.owner && i.setScroller(e.owner), new fn(i, "button"), i
            }
            return n.c(e, t), e.prototype.setScroller = function(t) {
                this.scroller && this.stopListening(this.scroller),
                    this.scroller = t,
                this.scroller && (this.listenTo(this.scroller, "scroll", this.onScroll), this.listenTo(this.scroller, "overflow", this.onOverflow), this.onOverflow(), this.onScroll(this.scroller.offset))
            }, e.prototype.setAvailability = function(t, e) {
                this.canScrollBackward != t && (this.canScrollBackward = t, this.backward.classList.toggle("disabled", !t)),
                this.canScrollForward != e && (this.canScrollForward = e, this.forward.classList.toggle("disabled", !e))
            }, e.prototype.onScroll = function(t) {
                this.setAvailability(t < this.scroller.maxOffset, t > this.scroller.minOffset)
            }, e.prototype.onOverflow = function() {
                var t = this.scroller.canScroll
                this.isVisible != t && (this.isVisible = t, this.el.classList.toggle("hidden", !t))
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkScrollerArrows__button.backward"
            })], e.prototype, "backward", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkScrollerArrows__button.forward"
            })], e.prototype, "forward", void 0), e
        }(o.View)),
        yn = (i(66), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.scroller = e.owner, i
            }
            return n.c(e, t), e.prototype.setPosition = function(t, e) {
                if (this.x != t || this.y != e) {
                    var i = this.el
                    i.style.left = t + "px",
                        i.style.top = e + "px",
                        this.x = t,
                        this.y = e
                }
            }, e
        }(o.View)),
        vn = N.getInstance(),
        gn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                if (i.imageWrap ? (i.nativeWidth = i.imageWrap.image.nativeWidth, i.nativeHeight = i.imageWrap.image.nativeHeight) : (i.nativeWidth = 256, i.nativeHeight = 169), i.area = i.nativeWidth * i.nativeHeight, i.el.hasAttribute("data-terms")) {
                    var n = i.el.getAttribute("data-terms").split(",")
                    i.terms = _.filter(_.map(n, (function(t) {
                        var e = t.split(":"),
                            i = e[0],
                            n = e[1]
                        return {
                            id: parseInt(i),
                            facet: n
                        }
                    })), (function(t) {
                        return !isNaN(t.id)
                    }))
                }
                return new M(i, i.onClick), i.onMouseEnter = _.bind(i.onMouseEnter, i), i.onMouseLeave = _.bind(i.onMouseLeave, i), i.delegate("mouseenter", null, i.onMouseEnter), i.delegate("mouseleave", null, i.onMouseLeave), i.delegate("click", null, i.onNativeClick), i
            }
            return n.c(e, t), e.prototype.handleResize = function(t, e, i) {
                var n = Math.sqrt(t / this.area)
                this.nativeWidth * n > e && (n = e / this.nativeWidth),
                this.nativeHeight * n > i && (n = i / this.nativeHeight)
                var o = Math.round(this.nativeWidth * n),
                    r = Math.round(this.nativeHeight * n)
                return this.el.style.width = o + "px", this.imageWrap && this.imageWrap.setSize(o, r), this.dimensions = {
                    width: o,
                    height: r + ("xl" === vn.getCurrent().name ? 58 : 50)
                }
            }, e.prototype.onClick = function(t) {
                var e = this.el,
                    i = this.emitHoverOnTouch,
                    n = this.scroller,
                    o = e.querySelector("a")
                return i && n.hoveredItem != this ? (n.setHoveredItem(this), !0) : (o && (window.location.href = o.href), !1)
            }, e.prototype.onMouseEnter = function(t) {
                this.scroller.setHoveredItem(this)
            }, e.prototype.onMouseLeave = function(t) {
                this.scroller.setHoveredItem(null)
            }, e.prototype.onNativeClick = function(t) {
                this.emitHoverOnTouch && t.preventDefault()
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkImage",
                childClass: at,
                childOptions: {
                    scaleMode: nt.Fit,
                    focusX: 0,
                    disableVisibilityCheck: !0
                }
            })], e.prototype, "imageWrap", void 0), e
        }(yn),
        wn = function() {
            function t(t) {
                this.velocity = 0,
                    this.damp = .4,
                    this.acceleration = .05,
                    this.epsilon = .1,
                    this.direction = 0,
                    this.directionSpeed = 15,
                    this.target = 0,
                    this.isActive = !1,
                    this.scroller = t,
                    this.accessor = xt.create(t, "offset")
            }
            return t.prototype.activate = function() {
                this.isActive || (this.isActive = !0, vt.getInstance().add(this))
            }, t.prototype.deactivate = function() {
                this.isActive = !1,
                    this.direction = 0,
                    this.velocity = 0
            }, t.prototype.setDirection = function(t) {
                0 == t && 0 != this.direction ? this.direction = t : (this.direction = t, this.target = this.scroller.offset),
                    this.activate()
            }, t.prototype.setTarget = function(t) {
                this.direction = 0,
                    this.target = t,
                    this.activate()
            }, t.prototype.stop = function() {
                this.isActive = !1
            }, t.prototype.update = function(t, e) {
                var i = this.scroller
                if (!this.isActive || !i.canScroll)
                    return this.deactivate(), !1
                var n = this.target,
                    o = this.velocity,
                    r = i.offset
                0 != this.direction && (n += this.direction * this.directionSpeed)
                var s,
                    a = (n = Math.min(i.maxOffset, Math.max(i.minOffset, n))) - r
                return 0 == this.direction && Math.abs(a) < this.epsilon ? (r = n, s = !1) : (r += o = (o * this.damp + a * this.acceleration) * e, s = !0), this.target = n, this.velocity = o, i.setOffset(r), s || this.deactivate(), s
            }, t
        }(),
        bn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.handleResize = function(t, e, i) {
                return this.dimensions = {
                    width: this.el.clientWidth,
                    height: this.el.clientHeight
                }, this.dimensions
            }, e
        }(yn),
        Cn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.dimensions = {
                    width: 1,
                    height: 1
                }, i
            }
            return n.c(e, t), e.prototype.setPosition = function(e, i) {
                t.prototype.setPosition.call(this, e, 0)
            }, e.prototype.handleResize = function(t, e, i) {
                return this.dimensions
            }, e
        }(yn),
        xn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.dimensions = {
                    width: 1,
                    height: 1
                }, i
            }
            return n.c(e, t), e.prototype.setPosition = function(e, i) {
                t.prototype.setPosition.call(this, e, 0)
            }, e.prototype.handleResize = function(t, e, i) {
                return this.dimensions.width = this.el.offsetWidth, this.dimensions
            }, e
        }(yn),
        Sn = (i(67), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    childSelector: ".dsArtworkScrollerItem",
                    container: ".dsArtworkScroller__list"
                })) || this
                i.averageFactor = .1,
                    i.canScroll = !1,
                    i.containerOffset = 0,
                    i.containerWidth = 0,
                    i.contentWidth = 0,
                    i.gutter = 40,
                    i.maxItemWidth = 0,
                    i.maxOffset = 0,
                    i.minOffset = 0,
                    i.viewportWidth = 0,
                    i.animation = new wn(i)
                var n = N.getInstance()
                return i.listenTo(n, "change", i.onBreakpointChange), i.onBreakpointChange(n.getCurrent()), i.handleViewportResize(), new Wi(i), new Yi(i), e.disableVisibilityCheck || j.getInstance().register(i), i.arrows && i.arrows.setScroller(i), i.el.classList.add("active"), i
            }
            return n.c(e, t), e.prototype.createChildFromElement = function(t) {
                var e = {
                    el: t,
                    owner: this
                }
                return t.classList.contains("divider") ? new Cn(e) : t.classList.contains("content") ? new bn(e) : t.classList.contains("label") ? new xn(e) : new gn(e)
            }, e.prototype.setInViewport = function(t) {
                for (var e = 0, i = this.children; e < i.length; e++) {
                    var n = i[e]
                    n instanceof gn && n.imageWrap && n.imageWrap.setInViewport(t)
                }
            }, e.prototype.setOffset = function(t, e) {
                this.canScroll || (t = this.maxOffset),
                (this.offset != t || e) && (this.offset = t, this.trigger("scroll", t), Ai.has3D ? this.list.style[Ai.styleName] = "translate3d(" + t + "px, 0, 0)" : this.list.style[Ai.styleName] = "translate(" + t + "px, 0)")
            }, e.prototype.setHoveredItem = function(t) {
                this.hoveredItem != t && (this.hoveredItem = t, this.trigger("hover", t))
            }, e.prototype.handleViewportResize = function() {
                for (var t = A.a.getInstance().width, e = this.averageFactor * t, i = this.contentWidth, n = this.containerWidth, o = this.containerOffset, r = e * e, s = .75 * t, a = .25 * t, l = this.gutter, h = 0, c = 0, u = !1, p = 0, d = this.children; p < d.length; p++) {
                    var f = (b = d[p]).handleResize(r, s, a)
                    h = Math.max(h, f.height),
                        c = Math.max(c, f.width),
                        u = u || b instanceof xn
                }
                for (var m = 0, y = 0, v = -1, g = 0, w = this.children; g < w.length; g++) {
                    var b,
                        C = (b = w[g]).dimensions,
                        x = C.width,
                        S = C.height,
                        O = Math.round(.5 * (h - S)),
                        _ = b instanceof xn,
                        T = b instanceof Cn
                    _ || T ? (v > -1 && (m += Math.max(0, v - y)), T && (v = -1), y = 0) : (u && (O += 25), y += x + l),
                        b.setPosition(m, O),
                        _ ? v = x + l : m += x + l
                }
                v > -1 && (m += Math.max(0, v - y)),
                u && (h += 25),
                    this.maxItemWidth = c,
                    this.contentWidth = m,
                    this.viewportWidth = t
                var k = n < m
                k != this.canScroll && (this.canScroll = k, this.trigger("overflow")),
                    this.maxOffset = Math.round(.5 * (t - n - o)) + o,
                    this.minOffset = this.maxOffset - m + n + l
                var M = this.offset
                return null == this.offset ? M = this.maxOffset : (i > 0 && (M *= m / i), M = Math.min(this.maxOffset, Math.max(this.minOffset, this.offset))), this.setOffset(M, !0), this.view.style.height = h + "px", !0
            }, e.prototype.onBreakpointChange = function(t) {
                "xs" == t.name ? (this.gutter = 20, this.averageFactor = .3, this.containerOffset = 0) : "sm" == t.name ? (this.gutter = 30, this.averageFactor = .15, this.containerOffset = 0) : "xl" == t.name ? (this.gutter = 40, this.averageFactor = .1, this.containerOffset = this.hasTocPadding ? 165 : 0) : (this.gutter = 40, this.averageFactor = .1, this.containerOffset = this.hasTocPadding ? 125 : 0),
                    this.containerWidth = t.containerWidth - this.containerOffset
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkScrollerArrows",
                childClass: mn
            })], e.prototype, "arrows", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkScroller__view"
            })], e.prototype, "view", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkScroller__list"
            })], e.prototype, "list", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Bool,
                defaultValue: !0
            })], e.prototype, "hasTocPadding", void 0), e = n.b([Object(o.Component)(".dsArtworkScroller")], e)
        }(Ze)),
        On = (i(68), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isExpanded = i.el.classList.contains("expanded"), new M(i, i.onToggleClick, ".dsDetails__toggle"), i
            }
            return n.c(e, t), e.prototype.setExpanded = function(t, e) {
                var i = this
                if (this.isExpanded != t) {
                    if (this.isExpanded = t, t && !this.components) {
                        var n = this.el.querySelector(".dsDetails__content"),
                            r = o.ComponentRegistry.getInstance()
                        n && (this.components = r.create(n))
                    }
                    e ? this.el.classList.toggle("expanded", t) : $(this.el, (function() {
                        i.el.classList.toggle("expanded", t)
                    }))
                }
            }, e.prototype.onToggleClick = function() {
                return this.setExpanded(!this.isExpanded), this.trigger("change", this.isExpanded), !0
            }, e = n.b([Object(o.Component)(".dsDetails")], e)
        }(o.View)),
        _n = (i(69), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.related = e.owner, i.createComponents(), i
            }
            return n.c(e, t), e.prototype.createComponents = function() {
                var t = this.el,
                    e = t.querySelector(".dsArtworkScroller")
                e && !this.scroller && (this.scroller = new Sn({
                    el: e,
                    owner: this,
                    disableVisibilityCheck: !0
                }), o.ComponentRegistry.registerInstance(this.scroller))
                var i = t.querySelector(".dsDetails")
                i && !this.details && (this.related.isDetailsExpanded && i.classList.add("expanded"), this.details = new On({
                    el: i,
                    owner: this
                }), o.ComponentRegistry.registerInstance(this.details), this.listenTo(this.details, "change", this.onDetailsChange))
            }, e.prototype.load = function() {
                var t = this
                if (!this.deferred) {
                    var e = Q.defer()
                    this.deferred = e,
                        this.scroller || !this.url ? e.resolve() : Backbone.ajax({
                            url: this.url
                        }).then((function(i) {
                            t.el.innerHTML = i.markup,
                                t.createComponents(),
                                e.resolve()
                        }))
                }
                return this.deferred.promise
            }, e.prototype.onDetailsChange = function(t) {
                this.trigger("details", this, t)
            }, n.b([Object(o.Option)({
                type: o.OptionType.Int
            })], e.prototype, "index", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "url", void 0), e
        }(o.View)),
        Tn = N.getInstance(),
        kn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.createComponents = function() {
                t.prototype.createComponents.call(this),
                    this.onItemHover = _.throttle(this.onItemHover, 250, {
                        leading: !1
                    }),
                    this.listenTo(this.scroller, "hover", this.onItemHover)
                var e = new o.View({
                    el: this.el.querySelector(".dsArtworkRelatedItem__empty")
                })
                this.swap.setContent(e, {
                    className: null
                }),
                    this.terms = JSON.parse(this.el.getAttribute("data-terms")),
                    this.listenTo(Tn, "change", this.onBreakpointsChange),
                    this.onBreakpointsChange()
            }, e.prototype.onItemHover = function(t) {
                if (t && t.terms && t != this.item) {
                    for (var e = [], i = 0, n = t.terms; i < n.length; i++) {
                        var r = n[i],
                            s = this.searchUrl + "?q=term(" + r.id + ":" + r.facet + ")"
                        e.push('<li class="dsTermList__item"><a class="dsTerm current" data-id="' + r.id + '" href="' + s + '">' + this.terms[r.id] + "</a></li>")
                    }
                    var a = new o.View({
                        tagName: "ul",
                        className: "dsTermList inline"
                    })
                    a.el.innerHTML = e.join(""),
                        this.item = t,
                        this.swap.setContent(a, {
                            withHeightTransition: this.details.isExpanded
                        })
                }
            }, e.prototype.onBreakpointsChange = function(t) {
                void 0 === t && (t = Tn.getCurrent())
                var e = this.details.isExpanded && ("md" == t.name || "lg" == t.name)
                e != this.emitHoverOnTouch && (this.emitHoverOnTouch = e, _(this.scroller.children).each((function(t) {
                    t instanceof gn && (t.emitHoverOnTouch = e)
                })))
            }, e.prototype.onDetailsChange = function(e) {
                t.prototype.onDetailsChange.call(this, e),
                    this.onBreakpointsChange()
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkRelatedItem__swap",
                childClass: tt,
                childOptions: {
                    appendNewContent: !0,
                    removeOldContent: !0
                }
            })], e.prototype, "swap", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "searchUrl", void 0), e
        }(_n),
        Mn = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return n.c(e, t), e.prototype.createComponents = function() {
                t.prototype.createComponents.call(this),
                    this.listenTo(this.scroller, "hover", this.onItemHover)
                for (var e = [], i = 0, n = this.el.querySelectorAll(".dsTerm"); i < n.length; i++) {
                    var o = n[i]
                    e.push({
                        el: o,
                        id: parseInt(o.getAttribute("data-id")),
                        timeout: Number.NaN
                    })
                }
                this.terms = e
            }, e.prototype.onItemHover = function(t) {
                for (var e = function(e) {
                    if (e.timeout && (clearTimeout(e.timeout), e.timeout = Number.NaN), t) {
                        var i = _.map(t.terms, (function(t) {
                            return t.id
                        }))
                        e.el.classList.toggle("current", -1 !== _(i).indexOf(e.id))
                    } else
                        e.timeout = setTimeout((function() {
                            e.el.classList.remove("current"),
                                e.timeout = Number.NaN
                        }), 250)
                }, i = 0, n = this.terms; i < n.length; i++) {
                    e(n[i])
                }
            }, e
        }(_n),
        Pn = Oe.windows() ? 1.2 : 1,
        Ln = function(t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n.c(e, t), e.prototype.handleWheel = function(t, e) {
                var i = this.view.direction,
                    n = i & y.Horizontal ? e.pixelX * Pn : 0,
                    o = i & y.Vertical ? e.pixelY * Pn : 0,
                    r = this.view.offset.clone().subtract(n, o)
                return this.view.setOffset(r, !0), 0 != n || 0 != o
            }, e
        }(ke),
        In = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.initialOffset = new ft(0, 0), i.direction = e.direction, i
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                return (0 != this.view.minOffset.x || 0 != this.view.minOffset.y) && (this.initialOffset.copy(this.view.offset), gt(this.view, "offset"), !0)
            }, e.prototype.handleDragMove = function(t, e) {
                var i = this.initialOffset.clone(),
                    n = this.view.minOffset,
                    o = this.view.maxOffset,
                    r = e.getAbsoluteDelta()
                return this.view.direction & y.Horizontal && (i.x += r.x, i.x < n.x && (i.x = n.x + .5 * (i.x - n.x)), i.x > o.x && (i.x = o.x + .5 * (i.x - o.x))), this.view.direction & y.Vertical && (i.y += r.y, i.y < n.y && (i.y = n.y + .5 * (i.y - n.y)), i.y > o.y && (i.y = o.y + .5 * (i.y - o.y))), this.view.setOffset(i), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                ie(this.view, "offset", {
                    velocity: ft.convert(e.getVelocity()),
                    min: this.view.minOffset,
                    max: this.view.maxOffset
                })
            }, e.prototype.handleClick = function(t, e) {
                this.view.trigger("click", t, e)
            }, e
        }(O),
        Vn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.size = new ft(0, 0), i.offset = new ft(0, 0), i.minOffset = new ft(0, 0), i.maxOffset = new ft(0, 0), i.viewport || (i.viewport = i.el), new Ln(i), new In(i), i
            }
            return n.c(e, t), e.prototype.setOffset = function(t, e) {
                var i = this.direction,
                    n = this.offset,
                    o = !1
                if (i & y.Horizontal) {
                    var r = t.x
                    e && (r < this.minOffset.x && (r = this.minOffset.x), r > this.maxOffset.x && (r = this.maxOffset.x)),
                    n.x != r && (o = !0, n.x = r)
                }
                if (i & y.Vertical) {
                    var s = t.y
                    e && (s < this.minOffset.y && (s = this.minOffset.y), s > this.maxOffset.y && (s = this.maxOffset.y)),
                    n.y != s && (o = !0, n.y = s)
                }
                o && this.handleOffsetChange(n)
            }, e.prototype.setMinOffset = function(t) {
                var e = this.direction,
                    i = this.offset,
                    n = this.minOffset,
                    o = !1
                n.x = e & y.Horizontal ? t.x : 0,
                    n.y = e & y.Vertical ? t.y : 0,
                i.x < n.x && (i.x = n.x, o = !0),
                i.y < n.y && (i.y = n.y, o = !0),
                o && (gt(this, "offset"), this.handleOffsetChange(i))
            }, e.prototype.setMaxOffset = function(t) {
                var e = this.direction,
                    i = this.offset,
                    n = this.maxOffset,
                    o = !1
                n.x = e & y.Horizontal ? t.x : 0,
                    n.y = e & y.Vertical ? t.y : 0,
                i.x > n.x && (i.x = n.x, o = !0),
                i.y > n.y && (i.y = n.y, o = !0),
                o && (gt(this, "offset"), this.handleOffsetChange(i))
            }, e.prototype.handleOffsetChange = function(t) {
                var e,
                    i,
                    n = this.container
                this.roundOffset ? (e = Math.round(t.x), i = Math.round(t.y)) : (e = t.x, i = t.y),
                    Ai.styleName ? Ai.has3D ? n.style[Ai.styleName] = "translate3d(" + e + "px, " + i + "px, 0)" : n.style[Ai.styleName] = "translate(" + e + "px, " + i + "px)" : (n.style.left = e + "px", n.style.top = i + "px"),
                    this.trigger("scroll", t)
            }, e.prototype.handleViewportResize = function(t) {
                if (t && t.children)
                    for (var e = 0, i = t.children; e < i.length; e++) {
                        i[e].handleViewportResize()
                    }
                return this.size.x = this.viewport.offsetWidth, this.size.y = this.viewport.offsetHeight, this.setMinOffset({
                    x: Math.min(0, this.size.x - this.container.offsetWidth),
                    y: Math.min(0, this.size.y - this.container.offsetHeight)
                }), !0
            }, n.b([Object(ri.a)({
                type: ti.b.DOM
            })], e.prototype, "viewport", void 0), n.b([Object(ri.a)({
                type: ti.b.DOM,
                defaultValue: ".container"
            })], e.prototype, "container", void 0), n.b([Object(ri.a)({
                type: ti.b.Enum,
                constraint: y,
                defaultValue: y.Vertical
            })], e.prototype, "direction", void 0), n.b([Object(ri.a)({
                type: ti.b.Bool,
                defaultValue: !1
            })], e.prototype, "roundOffset", void 0), e
        }(r.a),
        An = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    direction: y.Horizontal
                })) || this
                return i.hasLeftGradient = !1, i.hasRightGradient = !1, i.updateGradients(i.offset), i
            }
            return n.c(e, t), e.prototype.updateGradients = function(t) {
                t.x > this.minOffset.x ? this.hasRightGradient || (this.hasRightGradient = !0, this.viewport.classList.add("withRightGradient")) : this.hasRightGradient && (this.hasRightGradient = !1, this.viewport.classList.remove("withRightGradient")),
                    t.x < this.maxOffset.x ? this.hasLeftGradient || (this.hasLeftGradient = !0, this.viewport.classList.add("withLeftGradient")) : this.hasLeftGradient && (this.hasLeftGradient = !1, this.viewport.classList.remove("withLeftGradient"))
            }, e.prototype.handleOffsetChange = function(e) {
                t.prototype.handleOffsetChange.call(this, e),
                    this.updateGradients(e)
            }, e.prototype.handleViewportResize = function() {
                return t.prototype.handleViewportResize.call(this), this.updateGradients(this.offset), !0
            }, e
        }(Vn)
    i(70)
    function En(t) {
        return t.el.hasAttribute("data-terms") ? new kn(t) : new Mn(t)
    }
    (function(t) {
        function e(e) {
            var i = t.call(this, e) || this
            i.index = -1,
                i.isDetailsExpanded = !1,
                i.isInViewport = !1,
                i.isLoading = !1,
                i.onFirstTouch = function() {
                    i.el.classList.add("hasTouch"),
                        window.removeEventListener("touchstart", i.onFirstTouch, !1)
                },
                j.getInstance().register(i)
            for (var n = 0, o = i.items; n < o.length; n++) {
                var r = o[n]
                i.listenTo(r, "details", i.onItemDetails)
            }
            return i.tabsScroller = new An({
                el: i.el.querySelector(".dsArtworkRelated__tabsWrap"),
                container: i.el.querySelector(".dsArtworkRelated__tabsList")
            }), i.tabs = i.el.querySelectorAll(".dsArtworkRelated__tab"), window.addEventListener("touchstart", i.onFirstTouch, !1), i.listenTo(i.tabsScroller, "click", i.onTabClick), i.setIndex(1, {
                className: null
            }), i
        }
        n.c(e, t),
            e.prototype.setIndex = function(t, e) {
                var i = this
                if (this.index != t && !this.isLoading) {
                    this.index = t,
                    this.content && this.content.scroller.setInViewport(!1)
                    var n = _(this.items).find((function(e) {
                        return e.index == t
                    }))
                    n && (this.isLoading = !0, n.load().then((function() {
                        n.scroller.setInViewport(i.isInViewport),
                            i.isLoading = !1,
                            i.setContent(n, e),
                            i.arrows.setScroller(n.scroller)
                    })))
                    for (var o = 0, r = this.tabs; o < r.length; o++) {
                        var s = r[o]
                        s.classList.toggle("current", parseInt(s.getAttribute("data-index")) == t)
                    }
                }
            },
            e.prototype.setInViewport = function(t) {
                this.isInViewport = t,
                this.content && this.content.scroller.setInViewport(t)
            },
            e.prototype.handleViewportResize = function() {
                return this.tabsScroller.handleViewportResize(), t.prototype.handleViewportResize.call(this)
            },
            e.prototype.onTabClick = function(t) {
                for (var e = t.target; e && e.classList;) {
                    if (e.classList.contains("dsArtworkRelated__tab"))
                        return this.setIndex(parseInt(e.getAttribute("data-index")), {
                            withHeightTransition: !0
                        }), !0
                    e = e.parentNode
                }
                return !1
            },
            e.prototype.onItemDetails = function(t, e) {
                this.isDetailsExpanded = e
                for (var i = 0, n = this.items; i < n.length; i++) {
                    var o = n[i]
                    o != t && o.details && o.details.setExpanded(e, !0)
                }
            },
            n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkRelatedItem",
                childClass: En,
                multiple: !0,
                isFactory: !0
            })], e.prototype, "items", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkScrollerArrows",
                childClass: mn
            })], e.prototype, "arrows", void 0),
            n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsArtworkRelated__container"
            })], e.prototype, "container", void 0),
            e = n.b([Object(o.Component)(".dsArtworkRelated")], e)
    })(tt),
        i(71),
        i(72),
        i(73),
        i(74),
        function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isCompact = !1, i.canCollapse = !0, i.isCollapsed = !0, i.isCompact = i.el.classList.contains("compact"), new M(i, i.onClick, ".dsExpandable__button"), i
            }
            n.c(e, t),
                e.prototype.setCanCollapse = function(t) {
                    this.canCollapse != t && (this.canCollapse = t, this.el.classList.toggle("disabled", !t))
                },
                e.prototype.setCollapsed = function(t, e) {
                    var i = this
                    void 0 === e && (e = !0),
                    this.canCollapse || (t = !1),
                    this.isCollapsed != t && (this.isCollapsed = t, e ? $(this.viewport, (function() {
                        i.el.classList.toggle("expanded", !t)
                    })) : this.el.classList.toggle("expanded", !t))
                },
                e.prototype.handleViewportResize = function() {
                    var t = this.content,
                        e = this.label,
                        i = this.more,
                        n = this.less,
                        o = t.offsetHeight > (this.isCompact ? 300 : 600)
                    if (this.setCanCollapse(o), o) {
                        var r = Math.max(i.offsetWidth, n.offsetWidth),
                            s = Math.max(i.offsetHeight, n.offsetHeight)
                        e.style.width = r + "px",
                            e.style.height = s + "px"
                    }
                    return !1
                },
                e.prototype.onClick = function() {
                    return this.setCollapsed(!this.isCollapsed), !0
                },
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsExpandable__content"
                })], e.prototype, "content", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsExpandable__viewport"
                })], e.prototype, "viewport", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsExpandable__buttonLabel"
                })], e.prototype, "label", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsExpandable__buttonText.more"
                })], e.prototype, "more", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsExpandable__buttonText.less"
                })], e.prototype, "less", void 0),
                e = n.b([Object(o.Component)(".dsExpandable")], e)
        }(o.View),
        i(75),
        i(76),
        i(77),
        function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isReCaptchaForm = !1, i.initReCaptcha(), o.ComponentRegistry.getInstance().create(i.el), i
            }
            n.c(e, t),
                e.prototype.initReCaptcha = function() {
                    var t = this,
                        e = this.el,
                        i = e.getAttribute("data-site-key"),
                        n = e.querySelector("button,input[type=submit]")
                    n && i && (this.isReCaptchaForm = !0, n.disabled = !0, _i.getInstance().require((function() {
                        n.disabled = !1,
                            t.reCaptchaID = grecaptcha.render(n, {
                                sitekey: i,
                                callback: function() {
                                    return e.submit()
                                }
                            })
                    })))
                },
                e = n.b([Object(o.Component)(".dsForm")], e)
        }(o.View),
        i(78),
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            n.c(e, t),
                e = n.b([Object(o.Component)(".dsFormField")], e)
        }(si),
        i(79),
        i(80),
        function(t) {
            function e(e) {
                var i = t.call(this, e) || this,
                    n = i.getInitialState()
                if (i.isExpanded = n, n) {
                    var r = i.el
                    r.classList.add("initial", "expanded"),
                        r.getBoundingClientRect(),
                        r.classList.remove("initial")
                }
                for (var s = i.el, a = 0; a < s.childNodes.length; a++) {
                    var l = s.childNodes[a]
                    if (l.classList && l.classList.contains("dsGroup__caption")) {
                        new M(new o.View({
                            el: l
                        }), (function() {
                            return i.onClick()
                        }))
                        break
                    }
                }
                return i
            }
            n.c(e, t),
                e.prototype.loadStates = function() {
                    try {
                        var t = window.sessionStorage.getItem("dsGroupStates")
                        if (t)
                            return JSON.parse(t)
                    } catch (t) {}
                    return {}
                },
                e.prototype.saveStates = function(t) {
                    try {
                        window.sessionStorage.setItem("dsGroupStates", JSON.stringify(t))
                    } catch (t) {}
                },
                e.prototype.setExpanded = function(t) {
                    var e = this
                    if (this.isExpanded != t) {
                        this.isExpanded = t
                        var i = this.key,
                            n = this.preventSave
                        if (i && !n) {
                            var o = this.loadStates()
                            o[i] = t,
                                this.saveStates(o)
                        }
                        $(this.content, (function() {
                            e.el.classList.toggle("expanded", t)
                        })).then((function() {
                            A.a.getInstance().triggerResize()
                        }))
                    }
                },
                e.prototype.getInitialState = function() {
                    var t = this.key,
                        e = this.preventSave,
                        i = this.loadStates()
                    return !e && (!(!t || !(t in i)) && i[t])
                },
                e.prototype.onClick = function() {
                    return this.setExpanded(!this.isExpanded), !0
                },
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsGroup__content"
                })], e.prototype, "content", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.String
                })], e.prototype, "key", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.Bool,
                    defaultValue: !1
                })], e.prototype, "preventSave", void 0),
                e = n.b([Object(o.Component)(".dsGroup", {
                    allowChildComponents: !0
                })], e)
        }(o.View),
        i(81),
        i(82),
        i(83)
    var Nn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.handleInput = function(t) {
                    i.getInputValue(t.target)
                }, i.handleKeyDown = function(t) {
                    var e = t.target,
                        n = i.getInputValue(e)
                    if (-1 !== n && 13 === t.keyCode) {
                        var o = e.getAttribute("data-url")
                        window.location.href = o.replace("$PAGE", n.toString())
                    }
                }, i.delegate("input", "input", i.handleInput), i.delegate("change", "input", i.handleInput), i.delegate("keydown", "input", i.handleKeyDown), i
            }
            return n.c(e, t), e.prototype.getInputValue = function(t) {
                var e = Object(et.c)(t.value)
                if (t.classList.toggle("hasValue", "" !== e), !/^[0-9]*$/.test(e))
                    return t.classList.add("hasError"), -1
                var i = parseInt(e),
                    n = parseInt(t.getAttribute("data-min")),
                    o = parseInt(t.getAttribute("data-max"))
                return i < n || i > o ? (t.classList.add("hasError"), -1) : (t.classList.remove("hasError"), i)
            }, e = n.b([Object(o.Component)(".dsPaginator")], e)
        }(o.View),
        Dn = (i(84), i(85), i(86), i(87), function() {
            function t(t, e, i, n, o) {
                void 0 === o && (o = 0),
                    this.left = t,
                    this.top = e,
                    this.right = i,
                    this.bottom = n,
                    this.distance = o,
                    this.width = i - t,
                    this.height = n - e,
                    this.pivotX = .5 * (t + i),
                    this.pivotY = .5 * (e + n)
            }
            return t.prototype.canFit = function(t) {
                return this.width >= t.width && this.height >= t.height
            }, t.prototype.contains = function(t) {
                return this.left <= t.left && this.top <= t.top && this.right >= t.right && this.bottom >= t.bottom
            }, t.prototype.overlaps = function(t) {
                return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
            }, t.prototype.setPosition = function(t, e) {
                this.left = t,
                    this.top = e,
                    this.right = t + this.width,
                    this.bottom = e + this.height,
                    this.pivotX = .5 * (t + this.right),
                    this.pivotY = .5 * (e + this.bottom)
            }, t.prototype.split = function(e) {
                if (!this.overlaps(e))
                    return null
                var i = [],
                    n = this.left,
                    o = this.top,
                    r = this.right,
                    s = this.bottom,
                    a = e.left,
                    l = e.top,
                    h = e.right,
                    c = e.bottom
                return o < l && i.push(new t(n, o, r, l)), r > h && i.push(new t(h, o, r, s)), s > c && i.push(new t(n, c, r, s)), n < a && i.push(new t(n, o, a, s)), i
            }, t
        }()),
        Rn = function() {
            function t(t, e) {
                this.width = t,
                    this.height = e,
                    this.reset()
            }
            return t.prototype.setCenterSize = function(t, e) {
                this.center = {
                    x: .5 * (this.width + 400),
                    y: .5 * this.height
                }
                var i = .5 * (this.width - t),
                    n = .5 * (this.height - e)
                this.centerRectangle = new Dn(i, n, i + t, n + e)
            }, t.prototype.reset = function() {
                var t = this.width,
                    e = this.height,
                    i = this.center,
                    n = this.centerRectangle
                if (n) {
                    var o = n.left,
                        r = n.top,
                        s = n.right,
                        a = n.bottom
                    this.spaces = this.measureDistances([new Dn(0, 0, o, a), new Dn(0, a, s, e), new Dn(s, r, t, e), new Dn(o, 0, t, r)])
                } else if (i) {
                    var l = i.x,
                        h = i.y
                    this.spaces = [new Dn(0, 0, l, h), new Dn(l, 0, t, h), new Dn(0, h, l, e), new Dn(l, h, t, e)]
                } else
                    this.spaces = [new Dn(0, 0, t, e)]
            }, t.prototype.place = function(t, e) {
                for (var i = this.spaces, n = i.length, o = new Dn(0, 0, t, e), r = 0; r < n; ++r) {
                    var s = i[r]
                    if (s.canFit(o))
                        return this.placeInSpace(o, s), {
                            x: o.left,
                            y: o.top
                        }
                }
                return null
            }, t.prototype.placeInSpace = function(t, e) {
                this.center ? t.setPosition(e.pivotX >= this.center.x ? e.left : e.right - t.width, e.pivotY >= this.center.y ? e.top : e.bottom - t.height) : t.setPosition(e.left, e.top),
                    this.block(t)
            }, t.prototype.block = function(e) {
                for (var i = this.spaces, n = i.length, o = [], r = 0; r < n; ++r) {
                    var s = i[r],
                        a = s.split(e)
                    a ? (o.push.apply(o, a), this.measureDistances(a)) : o.push(s)
                }
                this.spaces = t.flatten(o),
                    this.sort()
            }, t.prototype.sort = function() {
                this.spaces.sort((function(t, e) {
                    return t.distance - e.distance
                }))
            }, t.prototype.measureDistances = function(t) {
                var e = this.center
                if (!e)
                    return t
                for (var i = e.x, n = e.y, o = t.length, r = 0; r < o; r++) {
                    var s = t[r],
                        a = (s.pivotX >= i ? s.left : s.right) - i,
                        l = (s.pivotY >= n ? s.top : s.bottom) - n
                    s.distance = Math.sqrt(a * a + l * l)
                }
                return t
            }, t.flatten = function(t) {
                for (var e = t.length, i = 0; i < e; ++i)
                    for (var n = t[i], o = i + 1; o < e;) {
                        var r = t[o]
                        n.contains(r) ? (t.splice(o, 1), e -= 1) : o += 1
                    }
                return t
            }, t
        }(),
        Hn = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    tagName: "a",
                    className: "dsRandomFieldItem",
                    attributes: {
                        href: e.artwork.url
                    }
                })) || this
                i.padding = 5,
                    i.isInViewport = !1
                var n = e.artwork
                i.artwork = n
                var o = document.createElement("img")
                return o.className = "dsRandomFieldItem__image", o.onload = function() {
                    return o.classList.add("loaded")
                }, i.el.appendChild(o), i.image = o, i
            }
            return n.c(e, t), e.prototype.setSize = function(t, e) {
                for (var i = this.artwork, n = this.image, o = this.padding, r = i.files, s = r.length, a = 0; a < s - 1;) {
                    if (r[a].width >= t)
                        break
                    a += 1
                }
                var l = r[a].url
                this.imageSrc = l,
                this.isInViewport && (n.src = l),
                    n.style.width = t - o + "px",
                    n.style.height = e - o + "px"
            }, e.prototype.setPosition = function(t) {
                var e = this.el
                e.style.left = t.x + "px",
                    e.style.top = t.y + "px"
            }, e.prototype.setInViewport = function(t) {
                this.isInViewport = t,
                t && (this.image.src = this.imageSrc)
            }, e
        }(o.View),
        jn = (i(88), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.overflow = 200,
                    i.itemPadding = 5,
                    i.itemScale = 1,
                    i.buttonPadding = 30,
                    i.isInViewport = !1
                var n = i.el.querySelector("script")
                n && (i.layout = new Rn(0, 0), i.artworks = JSON.parse(n.innerText)),
                    j.getInstance().register(i)
                var o = N.getInstance()
                return i.listenTo(o, "change", i.onBreakpoint), i.onBreakpoint(o.getCurrent()), i.handleViewportResize(), i
            }
            n.c(e, t),
                e.prototype.setInViewport = function(t) {
                    this.isInViewport = t,
                        _(this.artworks).each((function(e) {
                            e.item && e.item.setInViewport(t)
                        }))
                },
                e.prototype.update = function() {
                    var t = this.artworks,
                        e = this.layout,
                        i = this.itemPadding,
                        n = this.overflow,
                        o = (t.length, e.width),
                        r = e.height
                    e.reset()
                    for (var s = 1; s < 4; s++)
                        for (var a = s / 4 * Math.PI * .5, l = Math.sin(a) * o * .25, h = Math.cos(a) * r * .25, c = 0; c < 4; c++) {
                            var u = c % 2 == 0,
                                p = c < 2,
                                d = u ? 0 : o - l,
                                f = u ? l : o,
                                m = p ? 0 : r - h,
                                y = p ? h : r
                            e.block(new Dn(d, m, f, y))
                        }
                    for (c = 0; c < t.length; ++c) {
                        var v = t[c],
                            g = this.calculateSize(v, o),
                            w = g.width,
                            b = g.height,
                            C = v.item,
                            x = e.place(w, b)
                        x ? (C || ((C = new Hn({
                            artwork: v,
                            appendTo: this.el
                        })).padding = i, C.isInViewport = this.isInViewport), x.x -= .5 * n, C.setSize(w, b), C.setPosition(x)) : C && (C.remove(), C = null),
                            v.item = C
                    }
                },
                e.prototype.calculateSize = function(t, e) {
                    var i = this.itemPadding,
                        n = this.itemScale,
                        o = t.width,
                        r = t.files,
                        s = r[r.length - 1],
                        a = s.width,
                        l = s.height,
                        h = o - 200
                    return (h = .275 * ((h = h < 0 ? -Math.pow(-h, .75) : Math.pow(h, .75)) + 200) * (e / 1200) * n) < 50 && (h = 50), h > 250 && (h = 250), {
                        width: Math.round(h) + i,
                        height: Math.round(h * (l / a)) + i
                    }
                },
                e.prototype.onBreakpoint = function(t) {
                    var e = "xs" == t.name,
                        i = e ? 10 : 20
                    this.itemPadding != i && (this.itemPadding = i, this.itemScale = e ? 2.5 : 1, this.overflow = e ? 75 : 200, this.buttonPadding = e ? 30 : 60, _(this.artworks).each((function(t) {
                        t.item && (t.item.padding = i)
                    })))
                },
                e.prototype.handleViewportResize = function() {
                    var t = this,
                        e = t.layout,
                        i = t.el,
                        n = t.button,
                        o = t.buttonPadding,
                        r = t.overflow,
                        s = n.offsetWidth,
                        a = n.offsetHeight
                    return n.style.marginLeft = "-" + Math.round(.5 * s) + "px", n.style.marginTop = "-" + Math.round(.5 * a) + "px", e.width = i.offsetWidth + r, e.height = i.offsetHeight, e.setCenterSize(s + o, a + o), this.update(), !0
                },
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsButton"
                })], e.prototype, "button", void 0),
                e = n.b([Object(o.Component)(".dsRandomField")], e)
        }(o.View), yt.a.getInstance()),
        Bn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.position = 0,
                    i.velocity = 0,
                    i.isActive = !1,
                    i.state = 0,
                    i.termIndex = 0
                var n = i,
                    o = n.el,
                    r = n.link,
                    s = o.querySelector(".dsRollTheDice__diceLabel"),
                    a = document.createElement("span")
                return a.innerHTML = "Dummy", a.className = "dsRollTheDice__diceLabel", a.style.opacity = "0", r.appendChild(a), i.labels = [s, a], i.rollTheDice = e.owner, i.listenTo(jn, "frame", i.onFrame), i
            }
            return n.c(e, t), e.prototype.initializeDummy = function() {
                this.labels[1].innerHTML = this.getRandomTerm()
            }, e.prototype.start = function() {
                var t = this,
                    e = 300 * Math.random()
                return Q.delay(e).then((function() {
                    t.isActive = !0,
                        t.state = 1
                })).delay(500)
            }, e.prototype.stop = function(t, e) {
                var i = this,
                    n = Q.defer(),
                    o = 500 * Math.random()
                return this.link.setAttribute("href", t), this.stopValue = e, this.stopDeferred = n, Q.delay(o).then((function() {
                    return i.state = 2, n.promise
                }))
            }, e.prototype.getRandomTerm = function() {
                var t,
                    e = this.rollTheDice,
                    i = this.termIndex,
                    n = e.randomTerms,
                    o = n.length
                do {
                    t = Math.min(o - 1, Math.floor(Math.random() * o))
                } while (i == t)
                return this.termIndex = t, n[t]
            }, e.prototype.setPosition = function(t) {
                var e = this.labels
                if (3 !== this.state) {
                    for (; t < -55;) {
                        t += 55,
                            (i = e[0]).innerHTML = this.getRandomTerm(),
                            e[0] = e[1],
                            e[1] = i
                    }
                    for (; t > 0;) {
                        var i
                        t -= 55,
                            (i = e[1]).innerHTML = this.getRandomTerm(),
                            e[1] = e[0],
                            e[0] = i
                    }
                }
                for (var n = 0; n < 2; n++) {
                    var o = e[n],
                        r = t + 55 * n,
                        s = Math.max(0, Math.min(1, 1 - .025 * Math.abs(r)))
                    o.style[Ai.styleName] = "rotateX(" + r + "deg)",
                        o.style.opacity = "" + s
                }
                this.position = t
            }, e.prototype.setTerm = function(t, e) {
                this.link.setAttribute("href", t),
                    this.labels[0].innerHTML = e,
                    this.setPosition(0)
            }, e.prototype.onFrame = function(t) {
                var e = this.isActive,
                    i = this.position,
                    n = this.velocity,
                    o = this.state
                if (e) {
                    if (1 == o)
                        n += .5
                    else if (2 == o)
                        Math.abs(n) < 12 && i > -13.75 && (o = 3, this.labels[1].innerHTML = this.stopValue)
                    else if (3 == o && (n *= .9, n += .1 * (55 + i), Math.abs(n) < .1 && Math.abs(55 + i) < .1))
                        return n = 0, this.isActive = !1, this.stopDeferred.resolve(), this.stopDeferred = null, void this.setPosition(-55)
                    i -= n *= .95,
                        this.velocity = n,
                        this.state = o,
                        this.setPosition(i)
                }
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsRollTheDice__diceLink"
            })], e.prototype, "link", void 0), e
        }(o.View)
    function zn(t, e) {
        void 0 === e && (e = 0)
        var i = t.getBoundingClientRect(),
            n = {
                top: i.top - e,
                right: i.right + e,
                bottom: i.bottom + e,
                left: i.left - e
            }
        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
    }
    var Fn,
        Wn = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.simpleMode = !1
                var n = i.el
                i.origin = n.querySelector(".dsRollTheDice__button")
                var o = document.createElementNS("http://www.w3.org/2000/svg", "svg")
                o.setAttribute("class", "dsRollTheDice__lines"),
                    n.insertBefore(o, n.firstChild),
                    i.svg = o
                var r = n.querySelectorAll(".dsRollTheDice__diceLink")
                i.connections = _(r).map((function(t) {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "path")
                    return e.setAttribute("fill", "none"), e.setAttribute("stroke", "rgba(237, 234, 227, 0.5)"), e.setAttribute("stroke-width", "1"), e.setAttribute("stroke-dasharray", "3,3"), o.appendChild(e), {
                        target: t,
                        path: e
                    }
                }))
                var s = N.getInstance()
                return i.listenTo(s, "change", i.onBreakpointsChange), i.onBreakpointsChange(s.getCurrent()), i
            }
            return n.c(e, t), e.prototype.setSimpleMode = function(t) {
                this.simpleMode != t && (this.simpleMode = t, _(this.connections).each((function(e, i) {
                    i > 0 && (e.path.style.visibility = t ? "hidden" : "visible")
                })))
            }, e.prototype.handleViewportResize = function() {
                var t = this,
                    e = t.el,
                    i = t.svg,
                    n = t.origin,
                    o = t.connections,
                    r = t.simpleMode,
                    s = e.clientWidth,
                    a = e.clientHeight
                if (this.width != s || this.height != a) {
                    this.width = s,
                        this.height = a,
                        i.setAttribute("width", s),
                        i.setAttribute("height", a)
                    var l = zn(e, 0),
                        h = zn(n, r ? 5 : 10)
                    if (r) {
                        var c = o[0],
                            u = c.target,
                            p = c.path,
                            d = zn(u, 5),
                            f = h.left + .5 * h.width,
                            m = h.top,
                            y = d.left + .5 * d.width,
                            v = d.bottom
                        return f = Math.round(f - l.left), m = Math.round(m - l.top), y = Math.round(y - l.left), v = Math.round(v - l.top), void p.setAttribute("d", "M " + f + " " + m + " L " + y + " " + v)
                    }
                    return _(o).each((function(t) {
                        var e = zn(t.target, 10)
                        t.rect = e
                    })), _(o).each((function(t, e) {
                        var i = t.path,
                            n = t.rect,
                            o = h.left + h.width * (e / 2),
                            r = h.top + (1 == e ? 0 : .5 * h.height),
                            s = n.left + .5 * n.width,
                            a = n.bottom,
                            c = s,
                            u = 1 == e ? .5 * (r + a) : r
                        o = Math.round(o - l.left),
                            r = Math.round(r - l.top),
                            c = Math.round(c - l.left - o),
                            u = Math.round(u - l.top - r),
                            s = Math.round(s - l.left - o),
                            a = Math.round(a - l.top - r),
                            i.setAttribute("d", "M " + o + " " + r + " q " + c + " " + u + " " + s + " " + a)
                    })), !0
                }
            }, e.prototype.onBreakpointsChange = function(t) {
                this.setSimpleMode("xs" == t.name || "sm" == t.name)
            }, e
        }(o.View)
    i(89)
    var qn,
        Un = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    className: "dsRollTheDicePreview"
                })) || this
                return e.el ? Fn = i.el.innerHTML : i.applyTemplate(e), i
            }
            return n.c(e, t), e.prototype.remove = function() {
                return this.viewer && (this.viewer.remove(), this.viewer = null), t.prototype.remove.call(this)
            }, e.prototype.load = function() {
                if (this.viewer)
                    return this
                var t = this.center,
                    e = this.el,
                    i = new Re({
                        path: this.pyramidUrl,
                        info: this.pyramidData,
                        scaleMode: Ve.Home
                    })
                return i.centerX = t.x, i.centerY = t.y, e.insertBefore(i.el, e.firstChild), i.handleViewportResize(), this.viewer = i, this
            }, e.prototype.show = function() {
                var t = this
                this.el.classList.add("fadeIn"),
                    this.el.classList.remove("preload"),
                    setTimeout((function() {
                        t.el.classList.remove("fadeIn")
                    }), 1e3)
            }, e.prototype.duck = function() {
                this.el.classList.add("duck")
            }, e.prototype.hide = function() {
                var t = this
                this.isHidden || (this.isHidden = !0, this.el.classList.add("fadeOut"), setTimeout((function() {
                    return t.remove()
                }), 1e3))
            }, e.prototype.applyTemplate = function(t) {
                var e = this.el
                e.innerHTML = Fn,
                    e.classList.add("preload"),
                    e.querySelector(".dsRollTheDicePreview__captionTitle").innerHTML = t.title,
                    e.querySelector(".dsRollTheDicePreview__captionLabel").innerHTML = t.label,
                    e.querySelector(".dsRollTheDicePreview__link").setAttribute("href", t.url)
            }, e.prototype.handleViewportResize = function() {
                return this.viewer && this.viewer.handleViewportResize(), !0
            }, n.b([Object(o.Option)({
                type: o.OptionType.JSON
            })], e.prototype, "pyramidData", void 0), n.b([Object(o.Option)({
                type: o.OptionType.JSON
            })], e.prototype, "center", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "pyramidUrl", void 0), e
        }(o.View),
        Yn = (i(90), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.randomTerms = [""],
                    new M(i, i.onClick, "button"),
                    j.getInstance().register(i)
                var n = document.getElementById("dsRandomTerms")
                return n && (i.randomTerms = JSON.parse(n.innerText), _(i.dices).forEach((function(t) {
                    return t.initializeDummy()
                }))), i
            }
            n.c(e, t),
                e.prototype.setInViewport = function(t) {
                    t && this.preview.load()
                },
                e.prototype.request = function() {
                    var t = this,
                        e = this.url + "&seed=" + Math.round(8388608 * Math.random())
                    return Backbone.ajax({
                        url: e
                    }).then((function(e) {
                        var i = t.el,
                            n = new Un(e)
                        return t.el.insertBefore(n.el, i.firstChild), n.handleViewportResize(), o.ComponentRegistry.registerInstance(n), {
                            response: e,
                            preview: n
                        }
                    }))
                },
                e.prototype.roll = function() {
                    var t = this
                    if (!this.sequence) {
                        var e,
                            i,
                            n = this.preview
                        n.duck()
                        var o = _(this.dices).map((function(t) {
                            return t.start()
                        }))
                        o.push(this.request().then((function(t) {
                            e = t.response,
                                i = t.preview
                        }))),
                            this.sequence = Q.all(o).then((function() {
                                return Q.all([Q.delay(500), i.load().viewer.getPromise()])
                            })).then((function() {
                                return t.preview = i, n.hide(), i.show(), Q.all(_(t.dices).map((function(t, i) {
                                    var n = e.terms[i]
                                    return t.stop(n.url, n.title)
                                })))
                            })).then((function() {
                                t.sequence = null
                            }))
                    }
                },
                e.prototype.onClick = function(t, e) {
                    return this.roll(), !0
                },
                n.b([Object(o.ChildComponents)({
                    childClass: Bn,
                    selector: ".dsRollTheDice__dice"
                })], e.prototype, "dices", void 0),
                n.b([Object(o.ChildComponent)({
                    childClass: Wn,
                    selector: ".dsRollTheDice__form"
                })], e.prototype, "lines", void 0),
                n.b([Object(o.ChildComponent)({
                    childClass: Un,
                    selector: ".dsRollTheDicePreview"
                })], e.prototype, "preview", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsRollTheDice__button"
                })], e.prototype, "button", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.String
                })], e.prototype, "url", void 0),
                e = n.b([Object(o.Component)(".dsRollTheDice")], e)
        }(o.View), i(13)),
        Xn = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.dropdown = e, n
            }
            return n.c(e, t), e.prototype.getElementFromEvent = function(t) {
                var e = t.target
                if ("touchmove" === t.type && document.elementFromPoint)
                    try {
                        var i = t.changedTouches[0]
                        e = document.elementFromPoint(i.clientX, i.clientY)
                    } catch (t) {}
                for (; e && e.classList;) {
                    if (e.classList.contains("dsDropDownItem"))
                        return e
                    e = e.parentNode
                }
                return null
            }, e.prototype.getItemFromEvent = function(t) {
                var e = this.getElementFromEvent(t)
                if (!e)
                    return null
                var i = this.dropdown.list
                return _(i.children).find((function(t) {
                    return t.el == e
                }))
            }, e.prototype.updateHoveredItem = function(t) {
                var e = this.hoveredItem,
                    i = this.getItemFromEvent(t)
                e != i && (e && e.setHovered(!1), i && i.setHovered(!0), this.hoveredItem = i)
            }, e.prototype.releaseHoveredItem = function() {
                this.hoveredItem && (this.hoveredItem.setHovered(!1), this.hoveredItem = null)
            }, e.prototype.handleDragStart = function(t, e) {
                return !this.initialExpanded && (this.updateHoveredItem(t), !0)
            }, e.prototype.handleDragMove = function(t, e) {
                return this.updateHoveredItem(t), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                var i = this.dropdown,
                    n = this.hoveredItem
                n && n.onClick(),
                    this.releaseHoveredItem(),
                    i.setExpanded(!1)
            }, e.prototype.handleDragCancel = function(t, e) {
                this.releaseHoveredItem()
            }, e.prototype.handleClick = function(t, e) {
                var i = this.hoveredItem
                this.initialExpanded && i && i.onClick()
            }, e.prototype.handlePointerDown = function(e, i, n, o) {
                var r = t.prototype.handlePointerDown.call(this, e, i, n, o)
                return r && (this.initialExpanded = this.dropdown.isExpanded, this.initialExpanded ? this.hoveredItem = this.getItemFromEvent(e) : (this.dropdown.setExpanded(!0), this.hoveredItem = null)), r
            }, e
        }(O),
        Gn = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                        className: e.owner instanceof Qn ? "dsDropDownItem" : "dsDropDownWidget"
                    })) || this,
                    n = i.el.className + "__caption",
                    o = i.el.querySelector("." + n)
                o || ((o = document.createElement("span")).className = n, i.el.appendChild(o)),
                    i.caption = o
                var r = e.owner
                return r instanceof Qn ? i.list = r : i.dropdown = r, e.model && i.setModel(e.model), i
            }
            return n.c(e, t), e.prototype.setModel = function(t) {
                this.model && this.stopListening(this.model),
                    this.model = t,
                t && (this.listenTo(t, "change", this.render), this.render())
            }, e.prototype.setHovered = function(t) {
                this.isHovered != t && (this.isHovered = t, this.el.classList.toggle("hovered", t))
            }, e.prototype.setSelected = function(t) {
                this.isSelected != t && (this.isSelected = t, this.el.classList.toggle("selected", t))
            }, e.prototype.render = function() {
                var t = this.model,
                    e = this.el
                return this.caption.innerText = t.getText(), e.classList.toggle("disabled", t.getDisabled()), this
            }, e.prototype.onClick = function() {
                var t = this.model,
                    e = this.list,
                    i = t ? t.collection.indexOf(t) : -1
                return e.dropdown.setSelectedIndex(i).setExpanded(!1), !0
            }, e
        }(o.View),
        Qn = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    className: "dsDropDownList",
                    childClass: Gn
                })) || this
                return i.dropdown = e.owner, i
            }
            return n.c(e, t), e.prototype.handleTransition = function(t, e) {
                e && e.setSelected(!1),
                t && t.setSelected(!0)
            }, e
        }(ei),
        Kn = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this
                return n.idAttribute = "value", n
            }
            return n.c(e, t), e.prototype.getValue = function() {
                return this.attributes.value
            }, e.prototype.getText = function() {
                return this.attributes.text
            }, e.prototype.getDisabled = function() {
                return this.attributes.disabled
            }, e
        }(Backbone.Model),
        Jn = Kn,
        $n = function(t) {
            function e(e, i) {
                return t.call(this, e, _.defaults(i || {}, {
                    model: Kn
                })) || this
            }
            return n.c(e, t), e
        }(Backbone.Collection),
        Zn = (i(91), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.isExpanded = !1,
                    i.onKeyDown = function(t) {
                        switch (t.keyCode) {
                            case 13:
                            case 32:
                                i.setExpanded(!i.isExpanded),
                                    t.preventDefault()
                                break
                            case 38:
                                i.selectedIndex > 0 && i.setSelectedIndex(i.selectedIndex - 1),
                                    t.preventDefault()
                                break
                            case 40:
                                i.selectedIndex < i.collection.length - 1 && i.setSelectedIndex(i.selectedIndex + 1),
                                    t.preventDefault()
                        }
                    },
                    i.onBlur = function() {
                        i.setExpanded(!1)
                    },
                    i.el.tabIndex = 0
                var n = new Jn({
                        text: e.emptyText || "(None)",
                        value: null
                    }),
                    o = e.options || i.getOptionsFromSelect(),
                    r = new $n(o),
                    s = new Qn({
                        appendTo: i.el,
                        owner: i,
                        collection: r
                    })
                return i.collection = r, i.list = s, i.emptyOption = n, i.setSelectedIndex(i.getInitialSelectedIndex(e)), new Xn(i), i.delegate("blur", null, i.onBlur), i.delegate("keydown", null, i.onKeyDown), i
            }
            return n.c(e, t), e.prototype.setSelectedIndex = function(t) {
                if (this.selectedIndex == t)
                    return this
                this.selectedIndex = t
                var e = this.selectedItem,
                    i = this.emptyOption,
                    n = this.collection,
                    o = this.list
                return t >= 0 && t < n.length ? e.setModel(n.at(t)) : e.setModel(i), o.setCurrentIndex(t), this.trigger("change", n.at(t).attributes), this
            }, e.prototype.setExpanded = function(t) {
                return this.isExpanded == t || (this.isExpanded = t, t && this.el.focus(), this.el.classList.toggle("expanded", t)), this
            }, e.prototype.getValue = function(t) {
                if (void 0 === t && (t = null), this.selectedIndex < 0)
                    return t
                var e = this.collection.at(this.selectedIndex)
                return e ? e.getValue() : t
            }, e.prototype.getOptionsFromSelect = function() {
                var t = this.nativeSelect
                if (!t)
                    return []
                t.selectedIndex
                for (var e = t.options, i = [], n = 0; n < e.length; n += 1) {
                    var o = e.item(n)
                    i.push({
                        value: o.value,
                        text: o.text,
                        disabled: o.disabled
                    })
                }
                return i
            }, e.prototype.getInitialSelectedIndex = function(t) {
                return "selectedIndex" in t ? t.selectedIndex : this.nativeSelect ? this.nativeSelect.selectedIndex : this.collection.length > 0 ? 0 : -1
            }, n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: "select"
            })], e.prototype, "nativeSelect", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsDropDownWidget",
                childClass: Gn,
                autoCreate: !0
            })], e.prototype, "selectedItem", void 0), e
        }(o.View)),
        to = (i(92), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    tagName: "li",
                    className: "dsSearchFormItem"
                })) || this
                return i.form = e.owner, i.data = i.parseData(), i.operator && i.listenTo(i.operator, "change", i.onOperatorChange), i
            }
            return n.c(e, t), e.prototype.getQueryStringComponent = function(t) {
                if (!this.data)
                    return null
                var e = this.data,
                    i = []
                if (t && "nand" !== e.operator || i.push(e.operator), "fulltext" == e.component)
                    i.push(this.getFulltextQuery())
                else if ("simple" == e.component) {
                    var n = e.id.toString()
                    e.field && (n += ":" + e.field),
                        i.push(e.type + "(" + n + ")")
                } else
                    "time" == e.component && i.push(e.min === e.max ? "time(" + e.min + ")" : "time(" + e.min + "-" + e.max + ")")
                return i.join(":")
            }, e.prototype.getFulltextQuery = function() {
                return this.data.query
            }, e.prototype.parseData = function() {
                return this.el.hasAttribute("data-model") ? JSON.parse(this.el.getAttribute("data-model")) : null
            }, e.prototype.onOperatorChange = function() {
                this.data.operator = this.operator.getValue("and"),
                    this.form.submit()
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsSearchFormItem__operatorSelect",
                childClass: Zn
            })], e.prototype, "operator", void 0), e
        }(o.View)),
        eo = (i(93), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.visible = !1, i.form = e.owner, i.promptMode = new ci, i.prompt.setMode(i.promptMode), i.listenTo(i.prompt, "select", i.onPromptSelect), i.operator && i.listenTo(i.operator, "change", i.onOperatorChange), new M(i, i.onCancelClick, ".dsSearchFormItem__promptCancel"), i
            }
            return n.c(e, t), e.prototype.setVisibility = function(t) {
                var e = this
                this.visible != t && (this.visible = t, this.el.classList.toggle("visible", t), this.el.classList.toggle("hidden", !t), t ? (this.updatePromptUrl(), _.delay((function() {
                    return e.prompt.focus()
                }), 500)) : this.promptMode.suggestions.reset())
            }, e.prototype.updatePromptUrl = function() {
                this.promptMode.setUrl(this.urlPrompt, "fq", {
                    q: this.form.getQueryString(),
                    op: this.operator ? this.operator.getValue("and") : "and"
                }),
                    this.prompt.setValue(""),
                    this.data = null
            }, e.prototype.onCancelClick = function() {
                return this.form.setCreateItemVisibility(!1), !0
            }, e.prototype.onOperatorChange = function() {
                this.updatePromptUrl()
            }, e.prototype.onPromptSelect = function(t) {
                var e = t.get("id").toString().split("@", 2),
                    i = e[0],
                    n = e[1],
                    o = i.split(":", 2),
                    r = o[0],
                    s = o[1].split("/", 2),
                    a = s[0]
                s[1]
                this.data = {
                    component: "simple",
                    operator: this.operator ? this.operator.getValue("and") : "and",
                    id: a,
                    field: n,
                    type: r
                },
                    this.form.submit()
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsSearchFormItem__prompt",
                childClass: wi
            })], e.prototype, "prompt", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsSearchFormItem__operatorSelect",
                childClass: Zn
            })], e.prototype, "operator", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "urlPrompt", void 0), e
        }(to)),
        io = (i(94), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.onKeyUp = function(t) {
                    13 === t.keyCode && (t.preventDefault(), i.form.submit())
                }, i.input.inputView.delegate("keyup", null, i.onKeyUp), i
            }
            return n.c(e, t), e.prototype.getFulltextQuery = function() {
                return Object(et.c)(this.input.value)
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsSearchFormItem__input",
                childClass: si
            })], e.prototype, "input", void 0), e
        }(to)),
        no = (i(95), A.a.getInstance()),
        oo = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    container: ".dsSearchForm__items",
                    childSelector: ".dsSearchFormItem",
                    childClass: to
                })) || this
                return i.bottom = 0, i.isActive = !1, i.search = e.owner, I.getInstance().execute(i, {
                    searchToAlbum: i.onAlbumIntention
                }), new M(i, i.onActionClick, ".dsSearchFormItem__action"), new M(i, i.onClick, ".dsSearchForm__action"), i
            }
            return n.c(e, t), e.prototype.setCreateItemVisibility = function(t) {
                var e = this
                this.createItem.visible != t && $(this.el, (function() {
                    e.createItem.setVisibility(t)
                }))
            }, e.prototype.getQueryParams = function() {
                var t = {},
                    e = this.getQueryString()
                return "" != e && (t.q = e), t
            }, e.prototype.getQueryString = function() {
                for (var t = this.timeRange, e = [], i = !1, n = function(t) {
                    null != t && "" != t && e.push(t)
                }, o = 0, r = this.children; o < r.length; o++) {
                    var s = r[o],
                        a = 0 === e.length
                    t && s.data && "time" === s.data.component ? (n(this.getTimeQueryString(a, s.operator.getValue())), i = !0) : n(s.getQueryStringComponent(a))
                }
                return !i && t && n(this.getTimeQueryString(0 === e.length)), e.join(",")
            }, e.prototype.getTimeQueryString = function(t, e) {
                void 0 === e && (e = "and")
                var i = this.timeRange
                if (!i || isNaN(i.min) || isNaN(i.max))
                    return null
                var n = []
                return t || n.push(e), n.push(i.min === i.max ? "time(" + i.min + ")" : "time(" + i.min + "-" + i.max + ")"), n.join(":")
            }, e.prototype.submit = function() {
                this.search.submit()
            }, e.prototype.createChildFromElement = function(t) {
                return t.classList.contains("create") ? this.createItem = new eo({
                    owner: this,
                    el: t
                }) : t.classList.contains("fulltext") ? new io({
                    owner: this,
                    el: t
                }) : new to({
                    owner: this,
                    el: t
                })
            }, e.prototype.onAlbumIntention = function() {
                var t = this.el.querySelector('*[data-action="searchToAlbum"]')
                this.onClick(null, t)
            }, e.prototype.onActionClick = function(t, e) {
                return this.search.navigate(e.href), !0
            }, e.prototype.onClick = function(t, e) {
                var i = this
                if (this.isActive)
                    return !1
                switch (e.getAttribute("data-action")) {
                    case "refine":
                        return this.setCreateItemVisibility(!0), !0
                    case "searchToAlbum":
                        return this.isActive = !0, new Vi({
                            complete: function() {
                                return i.isActive = !1
                            },
                            url: e.getAttribute("data-location"),
                            intention: {
                                name: "searchToAlbum"
                            }
                        }), !0
                }
            }, e.prototype.handleViewportResize = function() {
                return this.createItem.handleViewportResize(), this.bottom = this.el.getBoundingClientRect().bottom + no.scrollTop, !0
            }, e = n.b([Object(o.Component)(".dsSearchForm")], e)
        }(Ze),
        ro = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    className: "dsSearchPanelBrowser__page"
                })) || this
                return i.height = 0, i.isLoaded = !1, i.isRequested = !1, i.isVisible = !0, i.maxOffset = 0, i.minOffset = 0, i.url = "", i.url = e.url, i
            }
            return n.c(e, t), e.prototype.load = function() {
                var t = this
                this.isRequested || (this.isRequested = !0, Backbone.ajax({
                    url: this.url
                }).then((function(e) {
                    return t.setData(e)
                })))
            }, e.prototype.setData = function(t) {
                for (var e = ['<ul class="dsSearchPanel__list">'], i = 0, n = t.terms; i < n.length; i++) {
                    var o = n[i]
                    e.push('\n        <li class="dsSearchPanel__item">\n          <a class="dsSearchPanel__itemLink" href="' + o.url + '">' + o.title + '<span class="dsSearchPanel__itemCounter">(' + o.count + ")</span></a>\n        </li>\n      ")
                }
                e.push("</ul>"),
                    this.el.innerHTML = e.join(""),
                    this.isLoaded = !0,
                    this.trigger("load", t)
            }, e.prototype.setOffset = function(t) {
                Ai.styleName ? Ai.has3D ? this.el.style[Ai.styleName] = "translate3d(0, " + t + "px, 0)" : this.el.style[Ai.styleName] = "translate(0, " + t + "px)" : this.el.style.top = t + "px"
            }, e
        }(o.View),
        so = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e, {
                    roundOffset: !0
                })) || this
                return i.hasTopGradient = !1, i.hasBottomGradient = !1, i
            }
            return n.c(e, t), e.prototype.updateGradients = function(t) {
                t.y > this.minOffset.y ? this.hasBottomGradient || (this.hasBottomGradient = !0, this.viewport.classList.add("withBottomGradient")) : this.hasBottomGradient && (this.hasBottomGradient = !1, this.viewport.classList.remove("withBottomGradient")),
                    t.y < this.maxOffset.y ? this.hasTopGradient || (this.hasTopGradient = !0, this.viewport.classList.add("withTopGradient")) : this.hasTopGradient && (this.hasTopGradient = !1, this.viewport.classList.remove("withTopGradient"))
            }, e.prototype.handleOffsetChange = function(e) {
                t.prototype.handleOffsetChange.call(this, e),
                    this.updateGradients(e)
            }, e.prototype.handleViewportResize = function() {
                return this.updateGradients(this.offset), t.prototype.handleViewportResize.call(this)
            }, e
        }(Vn),
        ao = (i(96), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    className: "dsSearchPanelBrowser"
                })) || this
                return i.pages = [], i.query = null, i.url = "", i.originalUrl = e.url, i.setUrl(e.url), i
            }
            return n.c(e, t), e.prototype.setQuery = function(t) {
                if (this.query !== t) {
                    this.query = "" === Object(et.c)(t) ? null : t
                    var e = new L(this.originalUrl)
                    this.query && e.query.setValue("fq", this.query),
                        this.setUrl(e.toString())
                }
            }, e.prototype.setUrl = function(t) {
                var e = this.initialPage,
                    i = new ro({
                        appendTo: this.viewport,
                        url: t
                    })
                e && e.remove(),
                    this.listenToOnce(i, "load", this.onInitialPageLoad),
                    this.initialPage = i,
                    this.url = t,
                    i.load()
            }, e.prototype.handleOffsetChange = function(t) {
                for (var e = t.y, i = e - this.size.y, n = e + 500, o = i - 500, r = 0, s = this.pages; r < s.length; r++) {
                    var a = s[r]
                    a.minOffset > n || a.maxOffset < o || a.isLoaded || a.load(),
                        a.minOffset > e || a.maxOffset < i ? a.setOffset(-4096) : a.setOffset(e - a.maxOffset)
                }
                this.updateGradients(t),
                    this.trigger("scroll", t)
            }, e.prototype.handleViewportResize = function() {
                this.size.x = this.viewport.offsetWidth,
                    this.size.y = this.viewport.offsetHeight
                for (var t = 0, e = 0, i = this.pages; e < i.length; e++) {
                    var n = i[e]
                    n.isLoaded && (n.height = n.el.offsetHeight),
                        n.maxOffset = t,
                        t -= n.height,
                        n.minOffset = t
                }
                return this.setMinOffset({
                    x: 0,
                    y: Math.min(0, this.size.y + t)
                }), this.updateGradients(this.offset), !0
            }, e.prototype.onPageLoad = function() {
                this.handleViewportResize()
            }, e.prototype.onInitialPageLoad = function(t) {
                for (var e = this.initialPage, i = this.pages, n = e.el.offsetHeight, o = 0, r = i; o < r.length; o++) {
                    (h = r[o]).remove()
                }
                if (i.length = 0, i.push(e), this.initialPage = null, t.count > t.terms.length)
                    for (var s = Math.ceil(t.count / t.terms.length), a = this.url.split("?", 2), l = 2; l <= s; l++) {
                        var h,
                            c = [a[0], "/", l, a.length > 1 ? "?" + a[1] : ""].join("");
                        (h = new ro({
                            appendTo: this.viewport,
                            url: c
                        })).height = n,
                            this.listenToOnce(h, "load", this.onPageLoad),
                            i.push(h)
                    }
                this.trigger("ready", i.length > 1 ? Number.POSITIVE_INFINITY : n),
                    this.handleViewportResize()
            }, e
        }(so)),
        lo = (i(97), A.a.getInstance()),
        ho = function(t) {
            function e(e) {
                var n = t.call(this, _.defaults(e, {
                    appendTo: document.body,
                    className: "dsSearchPanelFlyout",
                    template: i(98)
                })) || this
                return n.browserMinHeight = 0, n.search = e.search, lo.disableScrollbars(n), n.listenToOnce(n.browser, "ready", n.onBrowserReady), n.listenTo(n.input, "change", _.throttle(n.onInputChange, 100, {
                    leading: !1
                })), n.listenTo(w.getInstance(), "pointerDown", n.onDocumentPointerDown), new M(n, n.onTitleClick, ".dsSearchPanelFlyout__titleButton"), n.el.querySelector(".dsSearchPanelFlyout__titleCaption").innerHTML = e.title, n.el.querySelector(".dsSearchPanelFlyout__fieldLabel").innerHTML = e.searchLabel, e.isSearch && n.onTitleClick(), n
            }
            return n.c(e, t), e.prototype.remove = function() {
                return lo.enableScrollbars(this), t.prototype.remove.call(this)
            }, e.prototype.fadeOut = function() {
                var t = this
                this.el.classList.contains("fadeOut") || (this.el.classList.add("fadeOut"), setTimeout((function() {
                    return t.remove()
                }), 300))
            }, e.prototype.onBrowserReady = function(t) {
                this.el.classList.add("ready"),
                    this.browserMinHeight = t,
                    this.handleViewportResize()
            }, e.prototype.onDocumentPointerDown = function(t) {
                for (var e = t.target; e && e.classList;) {
                    if (e === this.panel)
                        return
                    if (e.classList.contains("dsHeader"))
                        break
                    e = e.parentNode
                }
                this.fadeOut()
            }, e.prototype.onInputChange = function(t) {
                this.browser.setQuery(t)
            }, e.prototype.onTitleClick = function() {
                var t = this.el,
                    e = this.input
                return t.classList.toggle("hasSearch"), t.classList.contains("hasSearch") && setTimeout((function() {
                    return e.focus()
                }), 300), !0
            }, e.prototype.handleViewportResize = function() {
                var t,
                    e = this.browserMinHeight,
                    i = this.handle,
                    n = this.origin,
                    o = this.panel,
                    r = n.getBoundingClientRect(),
                    s = r.top,
                    a = r.left,
                    l = lo.height - 90 - 20,
                    h = s + .5 * n.offsetHeight,
                    c = lo.width - a + 10
                t = e < l ? e : l
                var u = Math.max(90, Math.min(lo.height - t - 90 - 20, h - .5 * t)),
                    p = Math.max(u + 20, Math.min(u + t - 20, h))
                return o.style.top = u + "px", o.style.right = c + "px", o.style.height = t + "px", i.style.top = p - u + "px", !1
            }, n.b([Object(o.ChildComponent)({
                childClass: ao,
                childOptions: function(t) {
                    return {
                        url: t.url
                    }
                },
                selector: ".dsSearchPanelBrowser"
            })], e.prototype, "browser", void 0), n.b([Object(o.ChildComponent)({
                childClass: si,
                selector: ".dsSearchPanelFlyout__field"
            })], e.prototype, "input", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsSearchPanelFlyout__handle"
            })], e.prototype, "handle", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM
            })], e.prototype, "origin", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsSearchPanelFlyout__panel"
            })], e.prototype, "panel", void 0), e
        }(o.View),
        co = (i(99), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isCollapsed = !1, i.isCollapsed = !i.el.classList.contains("isActive"), i.isCollapsed && i.el.classList.add("isCollapsed"), i.slider && i.listenTo(i.slider, "commit", i.onSliderCommit), new M(i, i.onTitleClick, ".dsSearchPanelFacet__title"), new M(i, i.onMoreClick, ".dsSearchPanel__moreLink"), i
            }
            return n.c(e, t), e.prototype.setCollapsed = function(t) {
                this.isCollapsed != t && (this.isCollapsed = t, this.el.classList.toggle("isCollapsed", t), this.slider && this.slider.handleViewportResize())
            }, e.prototype.onSliderCommit = function(t) {
                var e = this.slider,
                    i = e.min,
                    n = e.max,
                    o = this.panel.search.form
                t.min === i && t.max === n ? o.timeRange = {
                    min: Number.NaN,
                    max: Number.NaN
                } : o.timeRange = t,
                    o.submit()
            }, e.prototype.onTitleClick = function(t) {
                for (var e = this, i = t.target; !this.isCollapsed && i && i.classList;) {
                    if (i.matches(".dsSearchPanelFacet__button.search"))
                        return this.onMoreClick()
                    i = i.parentNode
                }
                var n = !this.isCollapsed
                return $(this.el, (function() {
                    e.panel.sticky.withTransition(n, (function() {
                        e.setCollapsed(n)
                    }))
                })), !0
            }, e.prototype.onMoreClick = function(t, e) {
                var i = this.el,
                    n = this.panel,
                    o = !1
                if (e || (o = !0, e = i.querySelector(".dsSearchPanel__moreLink")), e) {
                    var r = n.flyoutSearch,
                        s = n.search,
                        a = i.querySelector(".dsSearchPanelFacet__titleCaption"),
                        l = a ? "<strong>" + a.innerHTML + "</strong>" : "",
                        h = n.flyoutTitle.replace("$FACET", l),
                        c = e.getAttribute("data-url")
                    return new ho({
                        isSearch: o,
                        origin: e,
                        search: s,
                        searchLabel: r,
                        title: h,
                        url: c
                    }), !0
                }
                return !1
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsPeriodSlider",
                childClass: pi
            })], e.prototype, "slider", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Owner
            })], e.prototype, "panel", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "facetName", void 0), e
        }(o.View)),
        uo = function(t) {
            function e(e) {
                var i = t.call(this) || this
                return i.panel = e, i
            }
            return n.c(e, t), e.prototype.handleViewportResize = function() {}, e.hasNativeSupport = function() {
                var t = document.createElement("a").style
                return t.cssText = "position:sticky;position:-webkit-sticky;position:-ms-sticky;", -1 !== t.position.indexOf("sticky")
            }, e.headerHeight = 70, e
        }(V.Events),
        po = A.a.getInstance(),
        fo = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.lastScrollTop = Number.NaN,
                    i.isFirstUpdate = !0,
                    i.mode = 0
                var n = document.createElement("div")
                return n.className = "dsSearchPanel__sizer", e.el.insertBefore(n, e.container), e.container.style.top = "0", e.container.style.bottom = "0", e.container.classList.add("stickyNative"), i.sizer = n, i.listenTo(po, "scroll", i.handleViewportScroll), i
            }
            return n.c(e, t), e.prototype.setMode = function(t) {
                this.mode !== t && (this.mode = t, this.updateStyle())
            }, e.prototype.updateStyle = function() {
                var t = this.mode,
                    e = this.panel,
                    i = this.sizer,
                    n = e.container.getBoundingClientRect(),
                    o = e.search.content.getBoundingClientRect()
                if (this.isFirstUpdate) {
                    this.isFirstUpdate = !1
                    var r = e.search.totalHeight - e.height
                    i.style.height = r + "px",
                        e.container.style.bottom = "0px"
                } else if (1 === t) {
                    var s = Math.max(0, e.search.totalHeight - (n.bottom - o.top))
                    i.style.height = "",
                        e.container.style.bottom = "",
                        e.container.style.top = uo.headerHeight + "px",
                        e.el.style.top = "",
                        e.el.style.bottom = s + "px"
                } else {
                    var a = Math.min(e.search.totalHeight - e.height, Math.max(0, n.top - o.top))
                    r = e.search.totalHeight - e.height - a
                    i.style.height = r + "px",
                        e.container.style.bottom = "0px",
                        e.container.style.top = "",
                        e.el.style.bottom = "",
                        e.el.style.top = a + "px"
                }
            }, e.prototype.withTransition = function(t, e) {
                var i = this.panel,
                    n = i.el,
                    o = i.search
                e(),
                    i.updateHeight(),
                    o.updateHeight(!0),
                    n.classList.add("transition"),
                    this.updateStyle(),
                    setTimeout((function() {
                        return n.classList.remove("transition")
                    }), 500)
            }, e.prototype.handleViewportResize = function() {
                this.updateStyle()
            }, e.prototype.handleViewportScroll = function() {
                po.height
                var t = po.scrollTop,
                    e = this.lastScrollTop
                e !== t && (this.lastScrollTop = t, isNaN(e) || e < t ? this.setMode(0) : this.setMode(1))
            }, e
        }(uo),
        mo = A.a.getInstance()
    !function(t) {
        t[t.bottom = 0] = "bottom",
            t[t.bottomSticky = 1] = "bottomSticky",
            t[t.top = 2] = "top",
            t[t.topSticky = 3] = "topSticky",
            t[t.stop = 4] = "stop"
    }(qn || (qn = {}))
    var yo = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.mode = qn.top, i.stopPosition = 0, e.container.classList.add("stickySimulated"), i.listenTo(mo, "scroll", i.handleViewportScroll), i.listenTo(mo, "scrollbars", i.handleViewportScrollbars), i
            }
            return n.c(e, t), e.prototype.withTransition = function(t, e) {
                var i = this.panel,
                    n = i.container,
                    o = i.height,
                    r = i.search,
                    s = n.getBoundingClientRect(),
                    a = s.bottom,
                    l = s.top
                e(),
                    i.updateHeight(),
                    r.updateHeight(!0)
                var h = this.mode,
                    c = this.stopPosition,
                    u = r.totalHeight,
                    p = mo.height,
                    d = mo.scrollTop,
                    f = r.form.bottom,
                    m = !0
                if (!this.applySimpleMode())
                    if (t)
                        h === qn.stop && d > c + f + o - p - uo.headerHeight && this.setMode(qn.bottomSticky)
                    else if (h === qn.stop) {
                        var y = u - o
                        c > y && (this.stopPosition = y, n.style.top = y + "px")
                    } else
                        h !== qn.bottomSticky && h !== qn.topSticky || (this.setMode(qn.stop, l), m = !1)
                var v = n.getBoundingClientRect(),
                    g = v.bottom,
                    w = v.top,
                    b = 0
                0 !== (b = this.mode === qn.bottom || this.mode === qn.bottomSticky ? a - g : l - w) && m && (clearTimeout(this.transition), n.style[Ai.styleName] = "translate(0, " + b + "px)", n.getBoundingClientRect(), n.classList.add("transformTransition"), n.style[Ai.styleName] = "translate(0, 0)", this.transition = setTimeout((function() {
                    n.classList.remove("transformTransition"),
                        n.style[Ai.styleName] = ""
                }), 300))
            }, e.prototype.applySimpleMode = function() {
                var t = this.panel,
                    e = t.height,
                    i = t.search,
                    n = mo.height,
                    o = mo.scrollTop,
                    r = i.contentHeight,
                    s = i.form.bottom
                return r < e ? (this.setMode(qn.top), !0) : !(e > n - uo.headerHeight) && (o < s - uo.headerHeight ? this.setMode(qn.top) : o > s + r - n ? this.setMode(qn.bottom) : this.setMode(qn.topSticky), !0)
            }, e.prototype.setMode = function(t, e) {
                var i = this.mode
                if (i !== t) {
                    this.mode = t
                    var n = this.panel,
                        o = n.container,
                        r = n.height,
                        s = n.search
                    t === qn.stop ? ("number" != typeof e && (e = o.getBoundingClientRect().top), e -= s.accent.getBoundingClientRect().top, e = Math.min(e, s.totalHeight - r), o.style.top = e + "px", this.stopPosition = e) : (o.style.top = "", this.stopPosition = 0),
                        o.classList.remove(qn[i]),
                        o.classList.add(qn[t])
                }
            }, e.prototype.handleViewportScroll = function() {
                var t = this.lastScrollTop,
                    e = this.mode,
                    i = this.stopPosition,
                    n = this.panel,
                    o = n.height,
                    r = n.search,
                    s = r.totalHeight,
                    a = mo.height,
                    l = mo.scrollTop,
                    h = r.form.bottom
                if (!this.applySimpleMode()) {
                    if (l < h - uo.headerHeight)
                        this.setMode(qn.top)
                    else if (l > h + s - a)
                        this.setMode(qn.bottom)
                    else if (t > l)
                        e === qn.bottomSticky ? this.setMode(qn.stop) : (e === qn.stop && l < i + h - uo.headerHeight || e === qn.bottom && l < h + s - o - uo.headerHeight) && this.setMode(qn.topSticky)
                    else {
                        var c = h + i + o - a
                        e === qn.bottom || (e === qn.topSticky ? this.setMode(qn.stop) : l > c && this.setMode(qn.bottomSticky))
                    }
                    this.lastScrollTop = l
                }
            }, e.prototype.handleViewportScrollbars = function(t) {
                var e = this.mode,
                    i = this.panel.el
                t ? i.style.marginRight = "" : e !== qn.bottomSticky && e !== qn.topSticky || (i.style.marginRight = mo.scrollBarSize + "px")
            }, e
        }(uo),
        vo = (i(100), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.height = 0, i.isExpanded = !1, i.sticky = uo.hasNativeSupport() ? new fo(i) : new yo(i), new M(i, i.onButtonClick, ".dsSearchPanel__titleButton"), new M(i, i.onLinkClick, ".dsSearchPanel__itemLink"), i
            }
            return n.c(e, t), e.prototype.toggle = function(t) {
                var e = this.el,
                    i = t ? "fadeIn" : "fadeOut"
                e.classList.add(i),
                    setTimeout((function() {
                        return e.classList.remove(i)
                    }), 400)
            }, e.prototype.updateHeight = function() {
                this.height = this.container.offsetHeight
            }, e.prototype.onButtonClick = function(t, e) {
                if (e && e.hasAttribute("data-action"))
                    switch (e.getAttribute("data-action")) {
                        case "close":
                            return this.search.togglePanel(), !0
                    }
                return !1
            }, e.prototype.onLinkClick = function(t, e) {
                return this.search.navigate(e.href), !0
            }, e.prototype.handleViewportResize = function() {
                return this.updateHeight(), this.sticky.handleViewportResize(), !1
            }, n.b([Object(o.ChildComponent)({
                childClass: co,
                multiple: !0,
                selector: ".dsSearchPanelFacet"
            })], e.prototype, "facets", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsSearchPanel__container"
            })], e.prototype, "container", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "flyoutSearch", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "flyoutTitle", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Owner
            })], e.prototype, "search", void 0), e
        }(o.View)),
        go = (i(101), function(t) {
            function e(e) {
                return t.call(this, _.defaults(e || {}, {
                    childSelector: ".dsSearchResultItem"
                })) || this
            }
            return n.c(e, t), e.prototype.widthTransition = function(t) {
                var e = this,
                    i = this.children.map((function(t) {
                        return t.el
                    }))
                tn(i, (function() {
                    return t(), e.handleViewportResize(), i
                }), {
                    finished: function() {
                        A.a.getInstance().triggerResize()
                    },
                    scale: !0
                })
            }, e
        }(pn)),
        wo = (i(102), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.onClick = function() {
                return this.trigger("click"), !0
            }, e
        }(o.View)),
        bo = (i(103), function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n.c(e, t), e.prototype.getQueryParams = function() {
                var t = {},
                    e = this.getValue()
                return "" !== e && (t.scope = e), t
            }, e
        }(Zn)),
        Co = (i(104), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.direction = i.el.classList.contains("asc") ? "asc" : "desc", i
            }
            return n.c(e, t), e.prototype.getQueryParams = function() {
                var t = this.direction,
                    e = this.allowScore,
                    i = {},
                    n = this.getValue(),
                    o = "score" == n ? "desc" : "asc"
                return n != (e ? "score" : "title") && (i.sort = n), t != o && (i.dir = t), i
            }, e.prototype.setSelectedIndex = function(e) {
                if (this.selectedIndex == e)
                    return this.direction = "asc" == this.direction ? "desc" : "asc", this.trigger("direction"), this
                var i = this.collection.at(e).getValue()
                return this.direction = "score" == i ? "desc" : "asc", t.prototype.setSelectedIndex.call(this, e)
            }, n.b([Object(o.Option)({
                type: o.OptionType.Bool
            })], e.prototype, "allowScore", void 0), e
        }(Zn)),
        xo = (i(105), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.listenTo(i.filter, "click", i.onFilterClick), i.listenTo(i.scope, "change", i.onChange), i.listenTo(i.sort, "change", i.onChange), i.listenTo(i.sort, "direction", i.onChange), i
            }
            return n.c(e, t), e.prototype.getQueryParams = function() {
                var t = n.a({}, this.scope.getQueryParams(), this.sort.getQueryParams())
                return this.search.hasPanel && (t.panel = 1), t
            }, e.prototype.onChange = function() {
                this.search.submit()
            }, e.prototype.onFilterClick = function() {
                this.search.togglePanel()
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsSearchToolbar__filter",
                childClass: wo
            })], e.prototype, "filter", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsSearchToolbar__scope",
                childClass: bo
            })], e.prototype, "scope", void 0), n.b([Object(o.ChildComponent)({
                selector: ".dsSearchToolbar__sort",
                childClass: Co
            })], e.prototype, "sort", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Owner
            })], e.prototype, "search", void 0), e
        }(o.View))
    i(106)
    function So(t, e) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }
    var Oo
    !function(t) {
        function e(e) {
            var i = t.call(this, e) || this
            return i.contentHeight = 0, i.hasPanel = !1, i.totalHeight = 0, i.hasPanel = i.el.classList.contains("hasPanel"), i
        }
        n.c(e, t),
            e.prototype.navigate = function(t) {
                var e
                if ("string" == typeof t) {
                    var i = new L(t)
                    this.hasPanel && i.query.setValue("panel", "1"),
                        e = i.toString()
                } else {
                    var n = _(t).map(So).join("&")
                    e = this.baseUrl + "?" + n
                }
                window.location.href = e
            },
            e.prototype.submit = function() {
                var t = this.form,
                    e = this.toolbar
                this.panel
                this.navigate(n.a({}, t.getQueryParams(), e.getQueryParams()))
            },
            e.prototype.togglePanel = function() {
                var t = this,
                    e = this.el,
                    i = this.panel,
                    n = this.result,
                    o = this.hasPanel = !this.hasPanel
                i.toggle(o),
                    n.setCompact(o),
                    n.widthTransition((function() {
                        e.classList.toggle("hasPanel", o),
                            Yn.a.getInstance().getNode(t.panel.el).resizeChildren()
                    }))
            },
            e.prototype.updateHeight = function(t) {
                var e = this.accent,
                    i = this.content,
                    n = this.hasPanel,
                    o = this.panel,
                    r = this.contentHeight = i.offsetHeight,
                    s = Math.max(A.a.getInstance().height - 70, n ? Math.max(r, o.height) : r)
                this.totalHeight !== s && (this.totalHeight = s, t ? (e.classList.add("heightTransition"), e.style.height = s + "px", setTimeout((function() {
                    e.classList.remove("heightTransition")
                }), 300)) : e.style.height = s + "px")
            },
            e.prototype.handleViewportResize = function(t) {
                return t && t.resizeChildren(), this.updateHeight(), !0
            },
            n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsAccent"
            })], e.prototype, "accent", void 0),
            n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsSearch__content"
            })], e.prototype, "content", void 0),
            n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "baseUrl", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsSearchForm",
                childClass: oo
            })], e.prototype, "form", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsSearchResult",
                childClass: go
            })], e.prototype, "result", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsSearchToolbar",
                childClass: xo
            })], e.prototype, "toolbar", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsSearchPanel",
                childClass: vo
            })], e.prototype, "panel", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsPaginator",
                childClass: Nn
            })], e.prototype, "paginator", void 0),
            n.b([Object(o.ChildComponent)({
                selector: ".dsArtworkScroller",
                childClass: Sn
            })], e.prototype, "scroller", void 0),
            e = n.b([Object(o.Component)(".dsSearch")], e)
    }(o.View)
    !function(t) {
        t[t.Inactive = 0] = "Inactive",
            t[t.Active = 1] = "Active",
            t[t.BecomeActive = 2] = "BecomeActive",
            t[t.BecomeInactive = 4] = "BecomeInactive",
            t[t.PeakNext = 8] = "PeakNext",
            t[t.PeakPrevious = 16] = "PeakPrevious",
            t[t.ActiveOrBecomeActive = 3] = "ActiveOrBecomeActive",
            t[t.InactiveOrBecomeInactive = 4] = "InactiveOrBecomeInactive"
    }(Oo || (Oo = {}))
    var _o,
        To = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.state = Oo.Inactive, e
            }
            return n.c(e, t), e.prototype.initialize = function() {
                var t = this.el.querySelector(".tuxImageWrap")
                t && (this.imageWrap = new at({
                    el: t,
                    disableVisibilityCheck: !0
                }))
            }, e.prototype.remove = function() {
                return this.imageWrap && this.imageWrap.remove(), t.prototype.remove.call(this)
            }, e.prototype.load = function() {
                if (this.imageWrap)
                    return this.imageWrap.load()
                var t = Q.defer()
                return t.resolve(), t.promise
            }, e.prototype.setState = function(t) {
                if (this.state != t) {
                    this.state = t
                    var e = this.el.classList
                    e.toggle("current", t & Oo.ActiveOrBecomeActive),
                        e.toggle("transitionOrigin", t & Oo.BecomeInactive),
                        e.toggle("transitionTarget", t & Oo.BecomeActive),
                        e.toggle("next", t & Oo.PeakNext),
                        e.toggle("previous", t & Oo.PeakPrevious),
                    t != Oo.Inactive && this.imageWrap && this.imageWrap.update()
                }
            }, e
        }(r.a),
        ko = function(t) {
            function e(e) {
                var i = t.call(this, e = _.defaults(e || {}, {
                    className: "tuxSlideshow",
                    container: ".tuxSlideshow__slides",
                    childSelector: ".tuxSlideshow__slides > li",
                    childClass: To,
                    isLooped: !0,
                    autoSelectFirstChild: !0,
                    allowPreload: !0
                })) || this
                return i.inViewport = !1, e.disableVisibilityCheck ? i.setInViewport(!0) : j.getInstance().register(i), i
            }
            return n.c(e, t), e.prototype.setInViewport = function(t) {
                this.inViewport != t && (this.inViewport = t, this.preloadSiblings())
            }, e.prototype.getDirection = function(t, e) {
                for (var i = this.children.length, n = this.indexOf(e) - this.indexOf(t); n > .5 * i;)
                    n -= i
                for (; n < .5 * -i;)
                    n += i
                return n >= 0 ? "forward" : "backward"
            }, e.prototype.isInTransition = function() {
                return !!this.transition
            }, e.prototype.preloadSiblings = function() {
                var t = this
                if (this.inViewport && this.current) {
                    var e = this.current,
                        i = this.getNextChild(),
                        n = this.getPreviousChild()
                    e.load().then((function() {
                        if (t.current == e && t.allowPreload)
                            return i.load()
                    })).then((function() {
                        if (t.current == e && t.allowPreload)
                            return n.load()
                    }))
                }
            }, e.prototype.createContainer = function() {
                var t = document.createElement("ul")
                return t.className = "tuxSlideshow__slides", this.el.appendChild(t), t
            }, e.prototype.handleTransition = function(t, e, i) {
                if (!this.transition && (!e || !t || !this.inViewport || i && i.noTransition))
                    return e && e.setState(Oo.Inactive), t && t.setState(Oo.Active), void this.preloadSiblings()
                this.transition ? (t.load(), this.transitionSuccessor = t) : this.transition = this.createSequence(e, t)
            }, e.prototype.createSequence = function(t, e) {
                var i = this
                return e.load().then((function() {
                    return i.createTransition(t, e)
                })).then((function() {
                    if (i.transitionSuccessor) {
                        var t = i.transitionSuccessor
                        return i.transitionSuccessor = null, i.createSequence(e, t)
                    }
                    i.transition = null,
                        i.preloadSiblings()
                }))
            }, e.prototype.createTransition = function(t, e, i) {
                var n = this
                void 0 === i && (i = "transition")
                var o = Q.defer()
                if (!G.endEvent)
                    return t.setState(Oo.Inactive), e.setState(Oo.Active), o.resolve(), o.promise
                var r = this.getDirection(t, e),
                    s = function() {
                        n.el.classList.remove(i),
                            n.el.classList.remove(r),
                            e.undelegate(G.endEvent, null, s),
                            e.setState(Oo.Active),
                            t.setState(Oo.Inactive),
                            o.resolve()
                    }
                return this.el.classList.add(i), this.el.classList.add(r), e.delegate(G.endEvent, null, s), e.setState(Oo.BecomeActive), t.setState(Oo.BecomeInactive), o.promise
            }, n.b([Object(z.a)({
                type: z.b.Bool
            })], e.prototype, "allowPreload", void 0), e
        }(ei),
        Mo = (function(t) {
            function e(e) {
                var i = t.call(this, e = _.defaults(e || {}, {
                    tagName: "ul",
                    className: "tuxArrows"
                })) || this
                return i.el.innerHTML = e.template ? e.template : '\n  <li class="tuxArrows__arrow previous"><a class="tuxArrows__button">&lt;</a></li>\n  <li class="tuxArrows__arrow next"><a class="tuxArrows__button">&gt;</a></li>', i.setView(e.view), new M(i, i.onButtonClick), i
            }
            n.c(e, t),
                e.prototype.setView = function(t) {
                    this.view != t && (this.view && (this.view.el.removeChild(this.el), this.stopListening(this.view)), this.view = t, this.view && (this.view.el.appendChild(this.el), this.listenTo(this.view, "currentIndexChanged", this.onIndexChanged), this.setLength(this.view.getLength()), this.onIndexChanged(this.view.getCurrentIndex())))
                },
                e.prototype.setLength = function(t) {
                    this.el.classList.toggle("disabled", t < 2)
                },
                e.prototype.setCurrentIndex = function(t) {
                    var e = this.el.querySelector(".next"),
                        i = this.el.querySelector(".previous")
                    this.view.isLooped ? (i.classList.remove("disabled"), e.classList.remove("disabled")) : (i.classList.toggle("disabled", t <= 0), e.classList.toggle("disabled", t >= this.view.getLength() - 1))
                },
                e.prototype.onIndexChanged = function(t) {
                    this.setCurrentIndex(t)
                },
                e.prototype.onButtonClick = function(t) {
                    for (var e = this.view.getCurrentIndex(), i = t.target; i && i.classList;) {
                        if (i.classList.contains("next")) {
                            e += 1
                            break
                        }
                        if (i.classList.contains("previous")) {
                            e -= 1
                            break
                        }
                        i = i.parentNode
                    }
                    return this.view.setCurrentIndex(e), !0
                }
        }(r.a), function(t) {
            function e(e) {
                var i = t.call(this) || this
                return i.interval = 1e4, i.isPlaying = !1, i.handle = Number.NaN, e = _.defaults(e || {}, {
                    interval: 5e3,
                    autoPlay: !0
                }), i.interval = e.interval, e.view && i.setView(e.view), e.autoPlay && i.play(), i
            }
            return n.c(e, t), e.prototype.setView = function(t) {
                this.view != t && (this.view && this.stopListening(this.view), t && this.listenTo(t, "currentChanged", this.onIndexChanged), this.view = t)
            }, e.prototype.setInterval = function(t) {
                this.interval != t && (this.interval = t, this.isPlaying && (this.stopInterval(), this.startInterval()))
            }, e.prototype.play = function() {
                this.isPlaying || (this.isPlaying = !0, this.startInterval())
            }, e.prototype.stop = function() {
                this.isPlaying && (this.isPlaying = !1, this.stopInterval())
            }, e.prototype.startInterval = function() {
                var t = this
                isNaN(this.handle) && (this.handle = setInterval((function() {
                    var e = t.view
                    if (e && (!e.hasOwnProperty("inViewport") || e.inViewport)) {
                        clearInterval(t.handle),
                            t.handle = Number.NaN
                        var i = e.getCurrentIndex() + 1
                        i >= e.getLength() && (i = 0),
                            e.setCurrentIndex(i)
                    }
                }), this.interval))
            }, e.prototype.stopInterval = function() {
                isNaN(this.handle) || (clearInterval(this.handle), this.handle = Number.NaN)
            }, e.prototype.onIndexChanged = function() {
                this.stopInterval(),
                this.isPlaying && this.startInterval()
            }, e
        }(V.Events)),
        Po = (function(t) {
            function e(e) {
                var i = t.call(this, e = _.defaults(e || {}, {
                    tagName: "ul",
                    className: "tuxNumeration"
                })) || this
                return i.items = [], i.index = -1, new M(i, i.onClick), i.setView(e.view), i
            }
            n.c(e, t),
                e.prototype.setView = function(t) {
                    this.view != t && (this.view && (this.view.el.removeChild(this.el), this.stopListening(this.view)), t && (t.el.appendChild(this.el), this.setLength(t.getLength()), this.setIndex(t.getCurrentIndex()), this.listenTo(t, "currentChanged", this.onCurrentChanged)), this.view = t)
                },
                e.prototype.setLength = function(t) {
                    var e = this.items,
                        i = e.length
                    if (i != t) {
                        for (; i < t;) {
                            var n = document.createElement("li")
                            n.className = "tuxNumeration__item",
                                n.innerText = i.toString(),
                                e.push(n),
                                i += 1,
                                this.el.appendChild(n)
                        }
                        for (; i > t;)
                            this.el.removeChild(e.pop()),
                                i -= 1,
                            this.index == i && (this.index = -1)
                    }
                },
                e.prototype.setIndex = function(t) {
                    t = Math.max(-1, Math.min(this.items.length - 1, Math.floor(t))),
                    this.index != t && (-1 != this.index && this.items[this.index].classList.remove("current"), this.index = t, -1 != this.index && this.items[this.index].classList.add("current"))
                },
                e.prototype.onClick = function(t) {
                    for (var e = t.target; e && e.classList;) {
                        if (e.classList.contains("tuxNumeration__item"))
                            return this.view.setCurrentIndex(_(this.items).indexOf(e)), !0
                        e = e.parentNode
                    }
                    return !1
                },
                e.prototype.onCurrentChanged = function() {
                    this.setIndex(this.view.getCurrentIndex())
                }
        }(r.a), function(t) {
            function e(e) {
                var i = t.call(this, e.view, e.selector ? e.selector : ".tuxSlideshow__slides") || this
                return i.position = 0, i.initialPosition = 0, i.shift = 2, i.direction = y.Horizontal, i.allowMouse = !!e.allowMouse, i.slideshow = e.view, i.clickCallback = e.click, i.container = e.view.el.querySelector(e.selector ? e.selector : ".tuxSlideshow__slides"), i
            }
            n.c(e, t),
                e.prototype.setPosition = function(t) {
                    this.position != t && (this.position = t, Ai.has3D ? this.container.style[Ai.styleName] = "translate3d(" + t + "px,0,0)" : this.container.style[Ai.styleName] = "translate(" + t + "px,0)")
                },
                e.prototype.setShift = function(t) {
                    if (this.shift != t) {
                        var e = Oo.Inactive,
                            i = null
                        1 == t ? (i = this.slideshow.getNextChild(), e = Oo.PeakNext) : 0 == t ? (i = this.slideshow.getPreviousChild(), e = Oo.PeakPrevious) : i = null,
                        this.shiftElement && this.shiftElement.setState(Oo.Inactive),
                        i && (i.load(), i.setState(e)),
                            this.shift = t,
                            this.shiftElement = i
                    }
                },
                e.prototype.updateShift = function(t) {
                    var e = t > 0 ? -1 : t < 0 ? 1 : 0
                    this.shift != e && this.setShift(e)
                },
                e.prototype.animateTo = function(t, e) {
                    var i = this,
                        n = function() {
                            i.slideshow.isLocked = !1,
                                i.tween = null,
                            e && i.shiftElement && i.slideshow.setCurrent(i.shiftElement, {
                                noTransition: !0
                            }),
                                i.setPosition(0),
                                i.setShift(0)
                        }
                    this.tween = Mt(this, "position", {
                        to: t,
                        duration: 750,
                        easing: It,
                        finished: n,
                        stopped: n
                    })
                },
                e.prototype.interruptAnimation = function() {
                    if (!this.tween)
                        return !0
                    var t = this.slideshow.getLength()
                    if (t < 3)
                        return !1
                    var e = this.position,
                        i = this.slideshow.getCurrentIndex()
                    this.tween.stop()
                    var n = this.slideshow.getCurrentIndex()
                    if (n != i) {
                        for (var o = i - n; o > .5 * t;)
                            o -= t
                        for (; o < -.5 * t;)
                            o += t
                        var r = this.slideshow.el.clientWidth * (o / Math.abs(o))
                        return this.setPosition(e - r), !0
                    }
                },
                e.prototype.handleDragStart = function(t, e) {
                    return !(!this.interruptAnimation() || 1 != e.type && !this.allowMouse || this.slideshow.getLength() < 2 || this.slideshow.isInTransition()) && (this.slideshow.isLocked = !0, this.initialPosition = this.position, !0)
                },
                e.prototype.handleDragMove = function(t, e) {
                    var i = e.getAbsoluteDelta(),
                        n = this.initialPosition + i.x
                    return this.updateShift(n), this.shiftElement || (n = this.initialPosition + .5 * i.x), this.setPosition(n), !0
                },
                e.prototype.handleDragEnd = function(t, e) {
                    var i = this.slideshow.el.clientWidth,
                        n = this.position / i,
                        o = e.getVelocity().x
                    Math.abs(n) > .333 || Math.abs(o) > 20 ? this.animateTo(-i * this.shift, !0) : this.animateTo(0)
                },
                e.prototype.handleDragCancel = function(t, e) {
                    this.animateTo(0)
                },
                e.prototype.handleClick = function(t, e) {
                    this.clickCallback && this.clickCallback(t)
                }
        }(O), function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this
                return e.opacity = 0, e
            }
            return n.c(e, t), e.prototype.load = function() {
                return this.viewer || (this.viewer = new Re({
                    el: this.el.querySelector(".dsArtworkViewer")
                })), this.viewer.getPromise()
            }, e.prototype.setState = function(e) {
                t.prototype.setState.call(this, e),
                e != Oo.Inactive && this.viewer && this.viewer.handleViewportResize()
            }, e.prototype.setOpacity = function(t) {
                this.opacity = t,
                    this.el.style.opacity = t
            }, e.prototype.handleViewportResize = function() {
                return this.state != Oo.Inactive && this.viewer && this.viewer.handleViewportResize(), !0
            }, e
        }(To)),
        Lo = (i(107), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.onClick = function() {
                var t = A.a.getInstance(),
                    e = t.height - 90
                return Mt(t, "scrollTop", {
                    to: e,
                    duration: Math.max(200, Math.min(1e3, 2 * e))
                }), !0
            }, e
        }(o.View))
    i(108)
    !function(t) {
        t[t.Type = 0] = "Type",
            t[t.Show = 1] = "Show",
            t[t.Erase = 2] = "Erase",
            t[t.Idle = 3] = "Idle"
    }(_o || (_o = {}))
    var Io = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.termIndex = 0, i.state = _o.Show, i.stateIndex = 0, i.prompt.setMode(new hi({
                    url: i.url,
                    urlParam: "q"
                })), i.listenTo(i.prompt, "select", i.onPromptSelect), i.initializeLabel(), i
            }
            return n.c(e, t), e.prototype.initializeLabel = function() {
                var t = this,
                    e = document.getElementById("dsRandomTerms")
                if (e) {
                    var i = this.labelWrap,
                        n = _(JSON.parse(e.innerText)).map((function(t) {
                            return i.replace("%s", t)
                        }))
                    this.setLabelTitle(n[0]),
                        this.terms = n,
                        this.interval = setInterval((function() {
                            return t.onInterval()
                        }), 50)
                }
            }, e.prototype.setLabelTitle = function(t) {
                this.label.innerHTML = this.labelBase.replace("%s", t)
            }, e.prototype.setState = function(t) {
                this.state = t,
                    this.stateIndex = 0
            }, e.prototype.advanceTermIndex = function() {
                var t = this.termIndex + 1
                t >= this.terms.length && (t = 0),
                    this.termIndex = t
            }, e.prototype.onInterval = function() {
                var t = this.state,
                    e = this.stateIndex,
                    i = this.terms[this.termIndex],
                    n = i.length;
                (t == _o.Erase || Math.random() > .1) && (this.stateIndex = e += 1),
                    t == _o.Type ? e > n + 1 ? this.setState(_o.Show) : this.setLabelTitle(i.substr(0, this.stateIndex)) : t == _o.Show ? e >= 40 && this.setState(_o.Erase) : t == _o.Erase ? e > Math.ceil(.5 * (n + 1)) ? (this.advanceTermIndex(), this.setState(_o.Idle)) : this.setLabelTitle(i.substr(0, n - 2 * this.stateIndex)) : e >= 5 && this.setState(_o.Type)
            }, e.prototype.onPromptSelect = function(t) {
                this.prompt.blur(),
                    window.location.href = t.attributes.url
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsSlideshowSearch__field",
                childClass: wi
            })], e.prototype, "prompt", void 0), n.b([Object(o.Option)({
                type: o.OptionType.DOM,
                defaultValue: ".dsSlideshowSearch__fieldLabel"
            })], e.prototype, "label", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "url", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "labelBase", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String
            })], e.prototype, "labelWrap", void 0), e = n.b([Object(o.Component)(".dsSlideshowSearch")], e)
        }(o.View),
        Vo = (i(109), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    container: ".dsSlideshow__slides",
                    childSelector: ".dsSlideshow__slide",
                    childClass: Po,
                    allowPreload: !1
                })) || this
                return i.onKeyDown = function(t) {
                    var e = A.a.getInstance()
                    if (!(e.scrollTop > .5 * e.height)) {
                        var n = Oi.getInstance(),
                            o = i.search.prompt,
                            r = n.root.header.search.prompt
                        o.hasFocus || r.hasFocus || i.search.prompt.focus()
                    }
                }, w.getInstance().delegate("keydown", null, i.onKeyDown), new Mo({
                    view: i,
                    interval: 8e3
                }), i
            }
            n.c(e, t),
                e.prototype.handleViewportResize = function() {
                    for (var t = 0, e = this.children; t < e.length; t++) {
                        e[t].handleViewportResize()
                    }
                    return !0
                },
                n.b([Object(o.ChildComponent)({
                    selector: ".dsSlideshowSearch",
                    childClass: Io
                })], e.prototype, "search", void 0),
                n.b([Object(o.ChildComponent)({
                    selector: ".dsSlideshowScroller",
                    childClass: Lo
                })], e.prototype, "scroller", void 0),
                e = n.b([Object(o.Component)(".dsSlideshow")], e)
        }(ko), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                if (e.title)
                    i.title = e.title
                else if (e.el) {
                    for (var n = e.el.previousSibling; n && 3 == n.nodeType;)
                        n = n.previousSibling
                    n && "DT" == n.nodeName && (i.title = n.innerHTML)
                }
                return i
            }
            return n.c(e, t), e.prototype.setCurrent = function(t) {
                if (this.el.classList.toggle("current", t), t)
                    if (this.components)
                        for (var e = 0, i = this.components; e < i.length; e++) {
                            i[e].handleViewportResize()
                        }
                    else
                        this.components = Yn.a.getInstance().create(this.el)
            }, e
        }(r.a)),
        Ao = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    tagName: "li",
                    className: "tuxTabsTitle"
                })) || this
                return i.isCurrent = !1, i.tabs = e.owner, i.page = e.page, i.el.innerHTML = i.page.title, e.disabled || new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.setCurrent = function(t) {
                this.isCurrent != t && (this.isCurrent = t, this.el.classList.toggle("current", t))
            }, e.prototype.onClick = function() {
                return this.tabs.setCurrent(this.page), !0
            }, e
        }(r.a),
        Eo = function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    container: ".tuxTabs__container",
                    childSelector: ".tuxTabsPage",
                    childClass: Vo,
                    autoSelectFirstChild: !0
                })) || this
                i.defaultTransitionOptions = {
                    className: "transition",
                    withHeightTransition: !0
                }
                var n = i.titleContainer = document.createElement("ol")
                n.className = "tuxTabs__titleList",
                    i.el.insertBefore(n, i.el.firstChild)
                for (var o = [], r = 0, s = i.children; r < s.length; r++) {
                    var a = s[r],
                        l = new Ao({
                            page: a,
                            owner: i,
                            appendTo: n
                        })
                    l.setCurrent(a == i.current),
                        o.push(l)
                }
                return i.titles = o, i.swap = new tt({
                    el: i.container
                }), i.listenTo(i.swap, "swap", i.onSwap), i.current && (i.current.setCurrent(!0), i.swap.setContent(i.current, {
                    className: null
                })), i
            }
            return n.c(e, t), e.prototype.handleTransition = function(t, e, i) {
                if (this.swap) {
                    i = _.defaults(i || {}, this.defaultTransitionOptions),
                        this.swap.setContent(t, i)
                    for (var n = 0, o = this.titles; n < o.length; n++) {
                        var r = o[n]
                        r.setCurrent(r.page == t)
                    }
                }
            }, e.prototype.onSwap = function(t, e) {
                t && t.setCurrent(!0),
                e && e.setCurrent(!1)
            }, e
        }(ei),
        No = (i(110), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                        container: ".dsTabs__container",
                        childSelector: ".dsTabs__page"
                    })) || this,
                    n = document.createElement("div")
                n.className = "tuxTabs__titleLine"
                var o = document.createElement("div")
                return o.className = "tuxTabs__titleWrap", o.appendChild(n), o.appendChild(i.titleContainer), i.el.insertBefore(o, i.el.firstChild), i.tabsScroller = new An({
                    el: o,
                    container: i.titleContainer
                }), i
            }
            n.c(e, t),
                e.prototype.handleViewportResize = function() {
                    return this.tabsScroller.handleViewportResize(), t.prototype.handleViewportResize.call(this)
                },
                e = n.b([Object(o.Component)(".dsTabs")], e)
        }(Eo), vt.getInstance()),
        Do = function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.direction = y.Horizontal, i.teaser = e, i
            }
            return n.c(e, t), e.prototype.handleDragStart = function(t, e) {
                var i = this.teaser
                return this.initialOffset = i.offset, No.stop(i), i.canDrag()
            }, e.prototype.handleDragMove = function(t, e) {
                var i = this.teaser,
                    n = i.viewportWidth - i.contentWidth,
                    o = e.getAbsoluteDelta(),
                    r = this.initialOffset + o.x
                return r > 0 && (r *= .5), r < n && (r = n + .5 * (r - n)), this.teaser.setOffset(r), !0
            }, e.prototype.handleDragEnd = function(t, e) {
                var i = this.teaser,
                    n = i.offset,
                    o = i.viewportWidth - i.contentWidth,
                    r = e.getVelocity()
                n > 0 ? Mt(i, "offset", {
                    to: 0,
                    duration: 400,
                    easing: It
                }) : n < o ? Mt(i, "offset", {
                    to: o,
                    duration: 400,
                    easing: It
                }) : ie(i, "offset", {
                    min: o,
                    max: 0,
                    velocity: r.x
                })
            }, e
        }(O),
        Ro = (i(111), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.offset = 0, i.contentWidth = 0, i.viewportWidth = 0, new Do(i), i
            }
            n.c(e, t),
                e.prototype.setOffset = function(t) {
                    this.offset != t && (this.offset = t, this.list.style[Ai.styleName] = "translate(" + t + "px, 0)")
                },
                e.prototype.canDrag = function() {
                    return this.viewportWidth < this.contentWidth
                },
                e.prototype.handleViewportResize = function() {
                    this.el,
                        this.viewport
                    var t = this.list,
                        e = this.lastItem,
                        i = t.clientWidth,
                        n = t.getBoundingClientRect(),
                        o = e.getBoundingClientRect().left - n.left + e.offsetWidth
                    this.contentWidth = o,
                        this.viewportWidth = i
                    var r = i - o
                    return this.canDrag() ? this.offset < r && this.setOffset(r) : this.setOffset(0), !1
                },
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsTeaser__viewport"
                })], e.prototype, "viewport", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsTeaser__list"
                })], e.prototype, "list", void 0),
                n.b([Object(o.Option)({
                    type: o.OptionType.DOM,
                    defaultValue: ".dsTeaser__item:last-child"
                })], e.prototype, "lastItem", void 0),
                e = n.b([Object(o.Component)(".dsTeaser", {
                    allowChildComponents: !0
                })], e)
        }(o.View), i(112), function(t) {
            function e(e) {
                var i = t.call(this, _.defaults(e || {}, {
                    tagName: "li",
                    className: "dsToc__item"
                })) || this
                i.offset = 0
                var n = i.anchor = e.anchor
                return i.el.innerHTML = n.getAttribute("data-toc"), i.toc = e.owner, new M(i, i.onClick), i
            }
            return n.c(e, t), e.prototype.onClick = function() {
                var t = A.a.getInstance(),
                    e = Math.min(this.toc.maxScrollTop, this.offset)
                return Mt(t, "scrollTop", {
                    to: e,
                    duration: Math.max(200, Math.min(1e3, 2 * Math.abs(e - t.scrollTop)))
                }), !0
            }, e
        }(o.View)),
        Ho = (i(113), A.a.getInstance()),
        jo = (function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                i.maxScrollTop = 0
                var n = i.container = document.createElement("ul")
                n.className = "dsToc__items",
                    i.el.appendChild(n)
                for (var o = i.el.parentNode.parentNode.querySelectorAll(".dsToc__anchor"), r = i.children, s = 0, a = o; s < a.length; s++) {
                    var l = a[s]
                    r.push(new Ro({
                        owner: i,
                        appendTo: n,
                        anchor: l
                    }))
                }
                return r.length > 0 && i.listenTo(Ho, "scroll", i.onViewportScroll), _.defer((function() {
                    i.handleViewportResize()
                })), i
            }
            n.c(e, t),
                e.prototype.handleViewportResize = function() {
                    for (var t = Ho.scrollTop, e = 0, i = this.children; e < i.length; e++) {
                        var n = i[e],
                            o = n.anchor.getBoundingClientRect()
                        n.offset = t + o.top
                    }
                    return this.maxScrollTop = document.body.scrollHeight - Ho.height, this.onViewportScroll(0, t), !0
                },
                e.prototype.handleTransition = function(t, e, i) {
                    t && t.el.classList.add("current"),
                    e && e.el.classList.remove("current")
                },
                e.prototype.onViewportScroll = function(t, e) {
                    for (var i = null, n = e, o = 0, r = this.children; o < r.length; o++) {
                        var s = r[o]
                        if (s.offset - 1 > n)
                            break
                        i = s
                    }
                    this.current != i && this.setCurrent(i)
                },
                e = n.b([Object(o.Component)(".dsToc")], e)
        }(ei), i(114), A.a.getInstance()),
        Bo = (function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isVisible = !1, i.listenTo(jo, "scroll", i.onViewportScroll), new M(i, i.onClick), i
            }
            n.c(e, t),
                e.prototype.onViewportScroll = function(t, e) {
                    var i = e > jo.height
                    this.isVisible != i && (this.isVisible = i, this.el.classList.toggle("visible", i))
                },
                e.prototype.onClick = function() {
                    var t = A.a.getInstance()
                    return Mt(t, "scrollTop", {
                        to: 0,
                        duration: Math.max(200, Math.min(1e3, 2 * Math.abs(t.scrollTop)))
                    }), !0
                },
                e = n.b([Object(o.Component)(".dsTop")], e)
        }(o.View), i(115), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isActive = !1, new M(i, i.onButtonClick, "button"), i
            }
            n.c(e, t),
                e.prototype.onButtonClick = function(t, e) {
                    var i = this
                    return !this.isActive && (!(!e || !e.hasAttribute("data-location")) && (this.isActive = !0, new Vi({
                        url: e.getAttribute("data-location"),
                        complete: function() {
                            return i.isActive = !1
                        }
                    }), !0))
                },
                e = n.b([Object(o.Component)(".dsUser", {
                    allowChildComponents: !0
                })], e)
        }(o.View), function() {
            function t() {
                this.state = 0,
                    this.deferred = null
            }
            var e
            return e = t, t.prototype.getState = function() {
                return this.state
            }, t.prototype.getPromise = function() {
                var t = this
                if (0 != this.state)
                    return this.deferred.promise
                if (this.state = 1, this.deferred = Q.defer(), "undefined" != typeof YT)
                    this.state = 2,
                        this.deferred.resolve(YT)
                else {
                    var e = document.createElement("script")
                    e.src = "https://www.youtube.com/iframe_api"
                    var i = document.getElementsByTagName("script")[0]
                    i.parentNode.insertBefore(e, i),
                        window.onYouTubeIframeAPIReady = function() {
                            t.state = 2,
                                t.deferred.resolve(YT)
                        }
                }
                return this.deferred.promise
            }, t.require = function(t) {
                var i = e.getInstance()
                2 == i.state ? t(YT) : i.getPromise().then((function() {
                    t(YT)
                }))
            }, t.getInstance = function() {
                return s.b.get("YouTubeLoader", e)
            }, t = e = n.b([Object(s.a)("YouTubeLoader")], t)
        }()),
        zo = (i(116), function(t) {
            function e(e) {
                var i = t.call(this, e) || this
                return i.isVideoLoaded = !1, i.handlePlayerReady = function(t) {
                    t.target.playVideo()
                }, i.handlePlayerStateChange = function(t) {
                    t.data === YT.PlayerState.PLAYING && pt.getInstance().stop()
                    t.data === YT.PlayerState.ENDED && (i.el.classList.remove("videoVisible"), i.player.seekTo(0, !1))
                }, i.listenTo(pt.getInstance(), "state", i.handleAudioServiceState), new M(i, i.handleCaptionClick, ".dsVideo__caption"), new M(i, i.handleLinkClick, ".dsVideo__link"), i
            }
            return n.c(e, t), e.prototype.createPlaceholder = function() {
                var t = this.el.querySelector(".dsVideo__thumbnailWrap"),
                    e = _.uniqueId("dsVideoPlayer"),
                    i = document.createElement("div"),
                    n = document.createElement("div")
                return i.id = e, n.className = "dsVideo__video", n.appendChild(i), t.appendChild(n), e
            }, e.prototype.loadVideo = function() {
                var t = this
                this.isVideoLoaded || (this.isVideoLoaded = !0, Bo.require((function(e) {
                    t.player = new e.Player(t.createPlaceholder(), {
                        height: "100%",
                        videoId: t.videoID,
                        width: "100%",
                        playerVars: {
                            cc_load_policy: t.ccLoadPolicy
                        },
                        events: {
                            onReady: t.handlePlayerReady,
                            onStateChange: t.handlePlayerStateChange
                        }
                    })
                })))
            }, e.prototype.handleAudioServiceState = function(t) {
                var e = this.player
                e && t === st.Playing && e.pauseVideo()
            }, e.prototype.handleCaptionClick = function() {
                var t = this.el,
                    e = t.querySelector(".dsVideo__body"),
                    i = t.querySelector(".dsVideo__descriptionMask")
                return !(!e || !i) && ($(i, (function() {
                    e.classList.toggle("expanded")
                })), !0)
            }, e.prototype.handleLinkClick = function() {
                var t = this.el,
                    e = this.player
                return t.classList.contains("videoVisible") || (t.classList.add("videoVisible"), e && e.playVideo()), this.loadVideo(), !0
            }, n.b([Object(o.ChildComponent)({
                selector: ".dsVideo__thumbnail",
                childClass: at,
                childOptions: {
                    scaleMode: nt.Cover
                }
            })], e.prototype, "imageWrap", void 0), n.b([Object(o.Option)({
                type: o.OptionType.String,
                attribute: "data-video-id"
            })], e.prototype, "videoID", void 0), n.b([Object(o.Option)({
                type: o.OptionType.Int,
                attribute: "data-cc",
                defaultValue: 0
            })], e.prototype, "ccLoadPolicy", void 0), e
        }(o.View))
    i(117),
        function(t) {
            function e(e) {
                return t.call(this, _.defaults(e || {}, {
                    childSelector: ".dsVideo",
                    childClass: zo
                })) || this
            }
            n.c(e, t),
                e = n.b([Object(o.Component)(".dsVideos")], e)
        }(Ze),
        i(118)
    try {
        window.addEventListener("touchmove", (function() {}))
    } catch (t) {}
    document.addEventListener("DOMContentLoaded", (function() {
        Oi.getInstance().run()
    }))
}])

