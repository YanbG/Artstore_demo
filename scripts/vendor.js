!function(t) {
    "use strict";
    if ("function" == typeof bootstrap)
        bootstrap("promise", t);
    else if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define(t);
    else if ("undefined" != typeof ses) {
        if (!ses.ok())
            return;
        ses.makeQ = t
    } else {
        if ("undefined" == typeof window && "undefined" == typeof self)
            throw new Error("This environment was not anticipated by Q. Please file a bug.");
        var n = "undefined" != typeof window ? window : self,
            e = n.Q;
        n.Q = t(),
            n.Q.noConflict = function() {
                return n.Q = e, this
            }
    }
}(function() {
    "use strict";
    function t(t) {
        return function() {
            return J.apply(t, arguments)
        }
    }
    function n(t) {
        return t === Object(t)
    }
    function e(t) {
        return "[object StopIteration]" === et(t) || t instanceof L
    }
    function r(t, n) {
        if (V && n.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(rt)) {
            for (var e = [], r = n; r; r = r.source)
                r.stack && e.unshift(r.stack);
            e.unshift(t.stack);
            var i = e.join("\n" + rt + "\n");
            t.stack = o(i)
        }
    }
    function o(t) {
        for (var n = t.split("\n"), e = [], r = 0; r < n.length; ++r) {
            var o = n[r];
            c(o) || i(o) || !o || e.push(o)
        }
        return e.join("\n")
    }
    function i(t) {
        return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
    }
    function u(t) {
        var n = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (n)
            return [n[1], Number(n[2])];
        var e = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (e)
            return [e[1], Number(e[2])];
        var r = /.*@(.+):(\d+)$/.exec(t);
        return r ? [r[1], Number(r[2])] : void 0
    }
    function c(t) {
        var n = u(t);
        if (!n)
            return !1;
        var e = n[0],
            r = n[1];
        return e === H && r >= _ && st >= r
    }
    function s() {
        if (V)
            try {
                throw new Error
            } catch (t) {
                var n = t.stack.split("\n"),
                    e = n[0].indexOf("@") > 0 ? n[1] : n[2],
                    r = u(e);
                if (!r)
                    return;
                return H = r[0], r[1]
            }
    }
    function f(t, n, e) {
        return function() {
            return "undefined" != typeof console && "function" == typeof console.warn && console.warn(n + " is deprecated, use " + e + " instead.", new Error("").stack), t.apply(t, arguments)
        }
    }
    function p(t) {
        return t instanceof h ? t : g(t) ? E(t) : S(t)
    }
    function a() {
        function t(t) {
            n = t,
            p.longStackSupport && V && (i.source = t),
                W(e, function(n, e) {
                    p.nextTick(function() {
                        t.promiseDispatch.apply(t, e)
                    })
                }, void 0),
                e = void 0,
                r = void 0
        }
        var n,
            e = [],
            r = [],
            o = Z(a.prototype),
            i = Z(h.prototype);
        if (i.promiseDispatch = function(t, o, i) {
            var u = K(arguments);
            e ? (e.push(u), "when" === o && i[1] && r.push(i[1])) : p.nextTick(function() {
                n.promiseDispatch.apply(n, u)
            })
        }, i.valueOf = function() {
            if (e)
                return i;
            var t = v(n);
            return m(t) && (n = t), t
        }, i.inspect = function() {
            return n ? n.inspect() : {
                state: "pending"
            }
        }, p.longStackSupport && V)
            try {
                throw new Error
            } catch (u) {
                i.stack = u.stack.substring(u.stack.indexOf("\n") + 1)
            }
        return o.promise = i, o.resolve = function(e) {
            n || t(p(e))
        }, o.fulfill = function(e) {
            n || t(S(e))
        }, o.reject = function(e) {
            n || t(R(e))
        }, o.notify = function(t) {
            n || W(r, function(n, e) {
                p.nextTick(function() {
                    e(t)
                })
            }, void 0)
        }, o
    }
    function l(t) {
        if ("function" != typeof t)
            throw new TypeError("resolver must be a function.");
        var n = a();
        try {
            t(n.resolve, n.reject, n.notify)
        } catch (e) {
            n.reject(e)
        }
        return n.promise
    }
    function d(t) {
        return l(function(n, e) {
            for (var r = 0, o = t.length; o > r; r++)
                p(t[r]).then(n, e)
        })
    }
    function h(t, n, e) {
        void 0 === n && (n = function(t) {
            return R(new Error("Promise does not support operation: " + t))
        }),
        void 0 === e && (e = function() {
            return {
                state: "unknown"
            }
        });
        var r = Z(h.prototype);
        if (r.promiseDispatch = function(e, o, i) {
            var u;
            try {
                u = t[o] ? t[o].apply(r, i) : n.call(r, o, i)
            } catch (c) {
                u = R(c)
            }
            e && e(u)
        }, r.inspect = e, e) {
            var o = e();
            "rejected" === o.state && (r.exception = o.reason),
                r.valueOf = function() {
                    var t = e();
                    return "pending" === t.state || "rejected" === t.state ? r : t.value
                }
        }
        return r
    }
    function y(t, n, e, r) {
        return p(t).then(n, e, r)
    }
    function v(t) {
        if (m(t)) {
            var n = t.inspect();
            if ("fulfilled" === n.state)
                return n.value
        }
        return t
    }
    function m(t) {
        return t instanceof h
    }
    function g(t) {
        return n(t) && "function" == typeof t.then
    }
    function k(t) {
        return m(t) && "pending" === t.inspect().state
    }
    function w(t) {
        return !m(t) || "fulfilled" === t.inspect().state
    }
    function j(t) {
        return m(t) && "rejected" === t.inspect().state
    }
    function b() {
        ot.length = 0,
            it.length = 0,
        ct || (ct = !0)
    }
    function x(t, n) {
        ct && ("object" == typeof process && "function" == typeof process.emit && p.nextTick.runAfter(function() {
            -1 !== X(it, t) && (process.emit("unhandledRejection", n, t), ut.push(t))
        }), it.push(t), n && "undefined" != typeof n.stack ? ot.push(n.stack) : ot.push("(no stack) " + n))
    }
    function T(t) {
        if (ct) {
            var n = X(it, t);
            -1 !== n && ("object" == typeof process && "function" == typeof process.emit && p.nextTick.runAfter(function() {
                var e = X(ut, t);
                -1 !== e && (process.emit("rejectionHandled", ot[n], t), ut.splice(e, 1))
            }), it.splice(n, 1), ot.splice(n, 1))
        }
    }
    function R(t) {
        var n = h({
            when: function(n) {
                return n && T(this), n ? n(t) : this
            }
        }, function() {
            return this
        }, function() {
            return {
                state: "rejected",
                reason: t
            }
        });
        return x(n, t), n
    }
    function S(t) {
        return h({
            when: function() {
                return t
            },
            get: function(n) {
                return t[n]
            },
            set: function(n, e) {
                t[n] = e
            },
            "delete": function(n) {
                delete t[n]
            },
            post: function(n, e) {
                return null === n || void 0 === n ? t.apply(void 0, e) : t[n].apply(t, e)
            },
            apply: function(n, e) {
                return t.apply(n, e)
            },
            keys: function() {
                return nt(t)
            }
        }, void 0, function() {
            return {
                state: "fulfilled",
                value: t
            }
        })
    }
    function E(t) {
        var n = a();
        return p.nextTick(function() {
            try {
                t.then(n.resolve, n.reject, n.notify)
            } catch (e) {
                n.reject(e)
            }
        }), n.promise
    }
    function O(t) {
        return h({
            isDef: function() {}
        }, function(n, e) {
            return C(t, n, e)
        }, function() {
            return p(t).inspect()
        })
    }
    function Q(t, n, e) {
        return p(t).spread(n, e)
    }
    function N(t) {
        return function() {
            function n(t, n) {
                var u;
                if ("undefined" == typeof StopIteration) {
                    try {
                        u = r[t](n)
                    } catch (c) {
                        return R(c)
                    }
                    return u.done ? p(u.value) : y(u.value, o, i)
                }
                try {
                    u = r[t](n)
                } catch (c) {
                    return e(c) ? p(c.value) : R(c)
                }
                return y(u, o, i)
            }
            var r = t.apply(this, arguments),
                o = n.bind(n, "next"),
                i = n.bind(n, "throw");
            return o()
        }
    }
    function D(t) {
        p.done(p.async(t)())
    }
    function P(t) {
        throw new L(t)
    }
    function A(t) {
        return function() {
            return Q([this, I(arguments)], function(n, e) {
                return t.apply(n, e)
            })
        }
    }
    function C(t, n, e) {
        return p(t).dispatch(n, e)
    }
    function I(t) {
        return y(t, function(t) {
            var n = 0,
                e = a();
            return W(t, function(r, o, i) {
                var u;
                m(o) && "fulfilled" === (u = o.inspect()).state ? t[i] = u.value : (++n, y(o, function(r) {
                    t[i] = r,
                    0 === --n && e.resolve(t)
                }, e.reject, function(t) {
                    e.notify({
                        index: i,
                        value: t
                    })
                }))
            }, void 0), 0 === n && e.resolve(t), e.promise
        })
    }
    function U(t) {
        if (0 === t.length)
            return p.resolve();
        var n = p.defer(),
            e = 0;
        return W(t, function(r, o, i) {
            function u(t) {
                n.resolve(t)
            }
            function c(t) {
                e--,
                0 === e && (t.message = "Q can't get fulfillment value from any promise, all promises were rejected. Last error message: " + t.message, n.reject(t))
            }
            function s(t) {
                n.notify({
                    index: i,
                    value: t
                })
            }
            var f = t[i];
            e++,
                y(f, u, c, s)
        }, void 0), n.promise
    }
    function F(t) {
        return y(t, function(t) {
            return t = Y(t, p), y(I(Y(t, function(t) {
                return y(t, q, q)
            })), function() {
                return t
            })
        })
    }
    function M(t) {
        return p(t).allSettled()
    }
    function B(t, n) {
        return p(t).then(void 0, void 0, n)
    }
    function $(t, n) {
        return p(t).nodeify(n)
    }
    var V = !1;
    try {
        throw new Error
    } catch (G) {
        V = !!G.stack
    }
    var H,
        L,
        _ = s(),
        q = function() {},
        z = function() {
            function t() {
                for (var t, r; e.next;)
                    e = e.next,
                        t = e.task,
                        e.task = void 0,
                        r = e.domain,
                    r && (e.domain = void 0, r.enter()),
                        n(t, r);
                for (; c.length;)
                    t = c.pop(),
                        n(t);
                o = !1
            }
            function n(n, e) {
                try {
                    n()
                } catch (r) {
                    if (u)
                        throw e && e.exit(), setTimeout(t, 0), e && e.enter(), r;
                    setTimeout(function() {
                        throw r
                    }, 0)
                }
                e && e.exit()
            }
            var e = {
                    task: void 0,
                    next: null
                },
                r = e,
                o = !1,
                i = void 0,
                u = !1,
                c = [];
            if (z = function(t) {
                r = r.next = {
                    task: t,
                    domain: u && process.domain,
                    next: null
                },
                o || (o = !0, i())
            }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick)
                u = !0,
                    i = function() {
                        process.nextTick(t)
                    };
            else if ("function" == typeof setImmediate)
                i = "undefined" != typeof window ? setImmediate.bind(window, t) : function() {
                    setImmediate(t)
                };
            else if ("undefined" != typeof MessageChannel) {
                var s = new MessageChannel;
                s.port1.onmessage = function() {
                    i = f,
                        s.port1.onmessage = t,
                        t()
                };
                var f = function() {
                    s.port2.postMessage(0)
                };
                i = function() {
                    setTimeout(t, 0),
                        f()
                }
            } else
                i = function() {
                    setTimeout(t, 0)
                };
            return z.runAfter = function(t) {
                c.push(t),
                o || (o = !0, i())
            }, z
        }(),
        J = Function.call,
        K = t(Array.prototype.slice),
        W = t(Array.prototype.reduce || function(t, n) {
            var e = 0,
                r = this.length;
            if (1 === arguments.length)
                for (;;) {
                    if (e in this) {
                        n = this[e++];
                        break
                    }
                    if (++e >= r)
                        throw new TypeError
                }
            for (; r > e; e++)
                e in this && (n = t(n, this[e], e));
            return n
        }),
        X = t(Array.prototype.indexOf || function(t) {
            for (var n = 0; n < this.length; n++)
                if (this[n] === t)
                    return n;
            return -1
        }),
        Y = t(Array.prototype.map || function(t, n) {
            var e = this,
                r = [];
            return W(e, function(o, i, u) {
                r.push(t.call(n, i, u, e))
            }, void 0), r
        }),
        Z = Object.create || function(t) {
            function n() {}
            return n.prototype = t, new n
        },
        tt = t(Object.prototype.hasOwnProperty),
        nt = Object.keys || function(t) {
            var n = [];
            for (var e in t)
                tt(t, e) && n.push(e);
            return n
        },
        et = t(Object.prototype.toString);
    L = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
        this.value = t
    };
    var rt = "From previous event:";
    p.resolve = p,
        p.nextTick = z,
        p.longStackSupport = !1,
    "object" == typeof process && process && process.env && process.env.Q_DEBUG && (p.longStackSupport = !0),
        p.defer = a,
        a.prototype.makeNodeResolver = function() {
            var t = this;
            return function(n, e) {
                n ? t.reject(n) : arguments.length > 2 ? t.resolve(K(arguments, 1)) : t.resolve(e)
            }
        },
        p.Promise = l,
        p.promise = l,
        l.race = d,
        l.all = I,
        l.reject = R,
        l.resolve = p,
        p.passByCopy = function(t) {
            return t
        },
        h.prototype.passByCopy = function() {
            return this
        },
        p.join = function(t, n) {
            return p(t).join(n)
        },
        h.prototype.join = function(t) {
            return p([this, t]).spread(function(t, n) {
                if (t === n)
                    return t;
                throw new Error("Q can't join: not the same: " + t + " " + n)
            })
        },
        p.race = d,
        h.prototype.race = function() {
            return this.then(p.race)
        },
        p.makePromise = h,
        h.prototype.toString = function() {
            return "[object Promise]"
        },
        h.prototype.then = function(t, n, e) {
            function o(n) {
                try {
                    return "function" == typeof t ? t(n) : n
                } catch (e) {
                    return R(e)
                }
            }
            function i(t) {
                if ("function" == typeof n) {
                    r(t, c);
                    try {
                        return n(t)
                    } catch (e) {
                        return R(e)
                    }
                }
                return R(t)
            }
            function u(t) {
                return "function" == typeof e ? e(t) : t
            }
            var c = this,
                s = a(),
                f = !1;
            return p.nextTick(function() {
                c.promiseDispatch(function(t) {
                    f || (f = !0, s.resolve(o(t)))
                }, "when", [function(t) {
                    f || (f = !0, s.resolve(i(t)))
                }])
            }), c.promiseDispatch(void 0, "when", [void 0, function(t) {
                var n,
                    e = !1;
                try {
                    n = u(t)
                } catch (r) {
                    if (e = !0, !p.onerror)
                        throw r;
                    p.onerror(r)
                }
                e || s.notify(n)
            }]), s.promise
        },
        p.tap = function(t, n) {
            return p(t).tap(n)
        },
        h.prototype.tap = function(t) {
            return t = p(t), this.then(function(n) {
                return t.fcall(n).thenResolve(n)
            })
        },
        p.when = y,
        h.prototype.thenResolve = function(t) {
            return this.then(function() {
                return t
            })
        },
        p.thenResolve = function(t, n) {
            return p(t).thenResolve(n)
        },
        h.prototype.thenReject = function(t) {
            return this.then(function() {
                throw t
            })
        },
        p.thenReject = function(t, n) {
            return p(t).thenReject(n)
        },
        p.nearer = v,
        p.isPromise = m,
        p.isPromiseAlike = g,
        p.isPending = k,
        h.prototype.isPending = function() {
            return "pending" === this.inspect().state
        },
        p.isFulfilled = w,
        h.prototype.isFulfilled = function() {
            return "fulfilled" === this.inspect().state
        },
        p.isRejected = j,
        h.prototype.isRejected = function() {
            return "rejected" === this.inspect().state
        };
    var ot = [],
        it = [],
        ut = [],
        ct = !0;
    p.resetUnhandledRejections = b,
        p.getUnhandledReasons = function() {
            return ot.slice()
        },
        p.stopUnhandledRejectionTracking = function() {
            b(),
                ct = !1
        },
        b(),
        p.reject = R,
        p.fulfill = S,
        p.master = O,
        p.spread = Q,
        h.prototype.spread = function(t, n) {
            return this.all().then(function(n) {
                return t.apply(void 0, n)
            }, n)
        },
        p.async = N,
        p.spawn = D,
        p["return"] = P,
        p.promised = A,
        p.dispatch = C,
        h.prototype.dispatch = function(t, n) {
            var e = this,
                r = a();
            return p.nextTick(function() {
                e.promiseDispatch(r.resolve, t, n)
            }), r.promise
        },
        p.get = function(t, n) {
            return p(t).dispatch("get", [n])
        },
        h.prototype.get = function(t) {
            return this.dispatch("get", [t])
        },
        p.set = function(t, n, e) {
            return p(t).dispatch("set", [n, e])
        },
        h.prototype.set = function(t, n) {
            return this.dispatch("set", [t, n])
        },
        p.del = p["delete"] = function(t, n) {
            return p(t).dispatch("delete", [n])
        },
        h.prototype.del = h.prototype["delete"] = function(t) {
            return this.dispatch("delete", [t])
        },
        p.mapply = p.post = function(t, n, e) {
            return p(t).dispatch("post", [n, e])
        },
        h.prototype.mapply = h.prototype.post = function(t, n) {
            return this.dispatch("post", [t, n])
        },
        p.send = p.mcall = p.invoke = function(t, n) {
            return p(t).dispatch("post", [n, K(arguments, 2)])
        },
        h.prototype.send = h.prototype.mcall = h.prototype.invoke = function(t) {
            return this.dispatch("post", [t, K(arguments, 1)])
        },
        p.fapply = function(t, n) {
            return p(t).dispatch("apply", [void 0, n])
        },
        h.prototype.fapply = function(t) {
            return this.dispatch("apply", [void 0, t])
        },
        p["try"] = p.fcall = function(t) {
            return p(t).dispatch("apply", [void 0, K(arguments, 1)])
        },
        h.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, K(arguments)])
        },
        p.fbind = function(t) {
            var n = p(t),
                e = K(arguments, 1);
            return function() {
                return n.dispatch("apply", [this, e.concat(K(arguments))])
            }
        },
        h.prototype.fbind = function() {
            var t = this,
                n = K(arguments);
            return function() {
                return t.dispatch("apply", [this, n.concat(K(arguments))])
            }
        },
        p.keys = function(t) {
            return p(t).dispatch("keys", [])
        },
        h.prototype.keys = function() {
            return this.dispatch("keys", [])
        },
        p.all = I,
        h.prototype.all = function() {
            return I(this)
        },
        p.any = U,
        h.prototype.any = function() {
            return U(this)
        },
        p.allResolved = f(F, "allResolved", "allSettled"),
        h.prototype.allResolved = function() {
            return F(this)
        },
        p.allSettled = M,
        h.prototype.allSettled = function() {
            return this.then(function(t) {
                return I(Y(t, function(t) {
                    function n() {
                        return t.inspect()
                    }
                    return t = p(t), t.then(n, n)
                }))
            })
        },
        p.fail = p["catch"] = function(t, n) {
            return p(t).then(void 0, n)
        },
        h.prototype.fail = h.prototype["catch"] = function(t) {
            return this.then(void 0, t)
        },
        p.progress = B,
        h.prototype.progress = function(t) {
            return this.then(void 0, void 0, t)
        },
        p.fin = p["finally"] = function(t, n) {
            return p(t)["finally"](n)
        },
        h.prototype.fin = h.prototype["finally"] = function(t) {
            if (!t || "function" != typeof t.apply)
                throw new Error("Q can't apply finally callback");
            return t = p(t), this.then(function(n) {
                return t.fcall().then(function() {
                    return n
                })
            }, function(n) {
                return t.fcall().then(function() {
                    throw n
                })
            })
        },
        p.done = function(t, n, e, r) {
            return p(t).done(n, e, r)
        },
        h.prototype.done = function(t, n, e) {
            var o = function(t) {
                    p.nextTick(function() {
                        if (r(t, i), !p.onerror)
                            throw t;
                        p.onerror(t)
                    })
                },
                i = t || n || e ? this.then(t, n, e) : this;
            "object" == typeof process && process && process.domain && (o = process.domain.bind(o)),
                i.then(void 0, o)
        },
        p.timeout = function(t, n, e) {
            return p(t).timeout(n, e)
        },
        h.prototype.timeout = function(t, n) {
            var e = a(),
                r = setTimeout(function() {
                    n && "string" != typeof n || (n = new Error(n || "Timed out after " + t + " ms"), n.code = "ETIMEDOUT"),
                        e.reject(n)
                }, t);
            return this.then(function(t) {
                clearTimeout(r),
                    e.resolve(t)
            }, function(t) {
                clearTimeout(r),
                    e.reject(t)
            }, e.notify), e.promise
        },
        p.delay = function(t, n) {
            return void 0 === n && (n = t, t = void 0), p(t).delay(n)
        },
        h.prototype.delay = function(t) {
            return this.then(function(n) {
                var e = a();
                return setTimeout(function() {
                    e.resolve(n)
                }, t), e.promise
            })
        },
        p.nfapply = function(t, n) {
            return p(t).nfapply(n)
        },
        h.prototype.nfapply = function(t) {
            var n = a(),
                e = K(t);
            return e.push(n.makeNodeResolver()), this.fapply(e).fail(n.reject), n.promise
        },
        p.nfcall = function(t) {
            var n = K(arguments, 1);
            return p(t).nfapply(n)
        },
        h.prototype.nfcall = function() {
            var t = K(arguments),
                n = a();
            return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise
        },
        p.nfbind = p.denodeify = function(t) {
            if (void 0 === t)
                throw new Error("Q can't wrap an undefined function");
            var n = K(arguments, 1);
            return function() {
                var e = n.concat(K(arguments)),
                    r = a();
                return e.push(r.makeNodeResolver()), p(t).fapply(e).fail(r.reject), r.promise
            }
        },
        h.prototype.nfbind = h.prototype.denodeify = function() {
            var t = K(arguments);
            return t.unshift(this), p.denodeify.apply(void 0, t)
        },
        p.nbind = function(t, n) {
            var e = K(arguments, 2);
            return function() {
                function r() {
                    return t.apply(n, arguments)
                }
                var o = e.concat(K(arguments)),
                    i = a();
                return o.push(i.makeNodeResolver()), p(r).fapply(o).fail(i.reject), i.promise
            }
        },
        h.prototype.nbind = function() {
            var t = K(arguments, 0);
            return t.unshift(this), p.nbind.apply(void 0, t)
        },
        p.nmapply = p.npost = function(t, n, e) {
            return p(t).npost(n, e)
        },
        h.prototype.nmapply = h.prototype.npost = function(t, n) {
            var e = K(n || []),
                r = a();
            return e.push(r.makeNodeResolver()), this.dispatch("post", [t, e]).fail(r.reject), r.promise
        },
        p.nsend = p.nmcall = p.ninvoke = function(t, n) {
            var e = K(arguments, 2),
                r = a();
            return e.push(r.makeNodeResolver()), p(t).dispatch("post", [n, e]).fail(r.reject), r.promise
        },
        h.prototype.nsend = h.prototype.nmcall = h.prototype.ninvoke = function(t) {
            var n = K(arguments, 1),
                e = a();
            return n.push(e.makeNodeResolver()), this.dispatch("post", [t, n]).fail(e.reject), e.promise
        },
        p.nodeify = $,
        h.prototype.nodeify = function(t) {
            return t ? void this.then(function(n) {
                p.nextTick(function() {
                    t(null, n)
                })
            }, function(n) {
                p.nextTick(function() {
                    t(n)
                })
            }) : this
        },
        p.noConflict = function() {
            throw new Error("Q.noConflict only works when Q is used as a global")
        };
    var st = s();
    return p
});
(function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }
        return function(r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r),
                a = (o || r).length,
                c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
        }
    }
    function t(n) {
        return function(t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t))
                    return i;
            return -1
        }
    }
    function r(n, t, r) {
        return function(e, u, i) {
            var o = 0,
                a = O(e);
            if ("number" == typeof i)
                n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (r && i && a)
                return i = r(e, u), e[i] === u ? i : -1;
            if (u !== u)
                return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                if (e[i] === u)
                    return i;
            return -1
        }
    }
    function e(n, t) {
        var r = I.length,
            e = n.constructor,
            u = m.isFunction(e) && e.prototype || a,
            i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;)
            i = I[r],
            i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }
    var u = this,
        i = u._,
        o = Array.prototype,
        a = Object.prototype,
        c = Function.prototype,
        f = o.push,
        l = o.slice,
        s = a.toString,
        p = a.hasOwnProperty,
        h = Array.isArray,
        v = Object.keys,
        g = c.bind,
        y = Object.create,
        d = function() {},
        m = function(n) {
            return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m,
        m.VERSION = "1.8.3";
    var b = function(n, t, r) {
            if (t === void 0)
                return n;
            switch (null == r ? 3 : r) {
                case 1:
                    return function(r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function(r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function(r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function(r, e, u, i) {
                        return n.call(t, r, e, u, i)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        },
        x = function(n, t, r) {
            return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
        };
    m.iteratee = function(n, t) {
        return x(n, t, 1 / 0)
    };
    var _ = function(n, t) {
            return function(r) {
                var e = arguments.length;
                if (2 > e || null == r)
                    return r;
                for (var u = 1; e > u; u++)
                    for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                        var f = o[c];
                        t && r[f] !== void 0 || (r[f] = i[f])
                    }
                return r
            }
        },
        j = function(n) {
            if (!m.isObject(n))
                return {};
            if (y)
                return y(n);
            d.prototype = n;
            var t = new d;
            return d.prototype = null, t
        },
        w = function(n) {
            return function(t) {
                return null == t ? void 0 : t[n]
            }
        },
        A = Math.pow(2, 53) - 1,
        O = w("length"),
        k = function(n) {
            var t = O(n);
            return "number" == typeof t && t >= 0 && A >= t
        };
    m.each = m.forEach = function(n, t, r) {
        t = b(t, r);
        var e,
            u;
        if (k(n))
            for (e = 0, u = n.length; u > e; e++)
                t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++)
                t(n[i[e]], i[e], n)
        }
        return n
    },
        m.map = m.collect = function(n, t, r) {
            t = x(t, r);
            for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
                var a = e ? e[o] : o;
                i[o] = t(n[a], a, n)
            }
            return i
        },
        m.reduce = m.foldl = m.inject = n(1),
        m.reduceRight = m.foldr = n(-1),
        m.find = m.detect = function(n, t, r) {
            var e;
            return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
        },
        m.filter = m.select = function(n, t, r) {
            var e = [];
            return t = x(t, r), m.each(n, function(n, r, u) {
                t(n, r, u) && e.push(n)
            }), e
        },
        m.reject = function(n, t, r) {
            return m.filter(n, m.negate(x(t)), r)
        },
        m.every = m.all = function(n, t, r) {
            t = x(t, r);
            for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                var o = e ? e[i] : i;
                if (!t(n[o], o, n))
                    return !1
            }
            return !0
        },
        m.some = m.any = function(n, t, r) {
            t = x(t, r);
            for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
                var o = e ? e[i] : i;
                if (t(n[o], o, n))
                    return !0
            }
            return !1
        },
        m.contains = m.includes = m.include = function(n, t, r, e) {
            return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
        },
        m.invoke = function(n, t) {
            var r = l.call(arguments, 2),
                e = m.isFunction(t);
            return m.map(n, function(n) {
                var u = e ? t : n[t];
                return null == u ? u : u.apply(n, r)
            })
        },
        m.pluck = function(n, t) {
            return m.map(n, m.property(t))
        },
        m.where = function(n, t) {
            return m.filter(n, m.matcher(t))
        },
        m.findWhere = function(n, t) {
            return m.find(n, m.matcher(t))
        },
        m.max = function(n, t, r) {
            var e,
                u,
                i = -1 / 0,
                o = -1 / 0;
            if (null == t && null != n) {
                n = k(n) ? n : m.values(n);
                for (var a = 0, c = n.length; c > a; a++)
                    e = n[a],
                    e > i && (i = e)
            } else
                t = x(t, r),
                    m.each(n, function(n, r, e) {
                        u = t(n, r, e),
                        (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
                    });
            return i
        },
        m.min = function(n, t, r) {
            var e,
                u,
                i = 1 / 0,
                o = 1 / 0;
            if (null == t && null != n) {
                n = k(n) ? n : m.values(n);
                for (var a = 0, c = n.length; c > a; a++)
                    e = n[a],
                    i > e && (i = e)
            } else
                t = x(t, r),
                    m.each(n, function(n, r, e) {
                        u = t(n, r, e),
                        (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
                    });
            return i
        },
        m.shuffle = function(n) {
            for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
                t = m.random(0, i),
                t !== i && (u[i] = u[t]),
                    u[t] = r[i];
            return u
        },
        m.sample = function(n, t, r) {
            return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
        },
        m.sortBy = function(n, t, r) {
            return t = x(t, r), m.pluck(m.map(n, function(n, r, e) {
                return {
                    value: n,
                    index: r,
                    criteria: t(n, r, e)
                }
            }).sort(function(n, t) {
                var r = n.criteria,
                    e = t.criteria;
                if (r !== e) {
                    if (r > e || r === void 0)
                        return 1;
                    if (e > r || e === void 0)
                        return -1
                }
                return n.index - t.index
            }), "value")
        };
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = x(r, e), m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }), u
        }
    };
    m.groupBy = F(function(n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }),
        m.indexBy = F(function(n, t, r) {
            n[r] = t
        }),
        m.countBy = F(function(n, t, r) {
            m.has(n, r) ? n[r]++ : n[r] = 1
        }),
        m.toArray = function(n) {
            return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
        },
        m.size = function(n) {
            return null == n ? 0 : k(n) ? n.length : m.keys(n).length
        },
        m.partition = function(n, t, r) {
            t = x(t, r);
            var e = [],
                u = [];
            return m.each(n, function(n, r, i) {
                (t(n, r, i) ? e : u).push(n)
            }), [e, u]
        },
        m.first = m.head = m.take = function(n, t, r) {
            return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
        },
        m.initial = function(n, t, r) {
            return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
        },
        m.last = function(n, t, r) {
            return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
        },
        m.rest = m.tail = m.drop = function(n, t, r) {
            return l.call(n, null == t || r ? 1 : t)
        },
        m.compact = function(n) {
            return m.filter(n, m.identity)
        };
    var S = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0,
                    l = c.length;
                for (u.length += l; l > f;)
                    u[i++] = c[f++]
            } else
                r || (u[i++] = c)
        }
        return u
    };
    m.flatten = function(n, t) {
        return S(n, t, !1)
    },
        m.without = function(n) {
            return m.difference(n, l.call(arguments, 1))
        },
        m.uniq = m.unique = function(n, t, r, e) {
            m.isBoolean(t) || (e = r, r = t, t = !1),
            null != r && (r = x(r, e));
            for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
                var c = n[o],
                    f = r ? r(c, o, n) : c;
                t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
            }
            return u
        },
        m.union = function() {
            return m.uniq(S(arguments, !0, !0))
        },
        m.intersection = function(n) {
            for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
                var i = n[e];
                if (!m.contains(t, i)) {
                    for (var o = 1; r > o && m.contains(arguments[o], i); o++)
                        ;
                    o === r && t.push(i)
                }
            }
            return t
        },
        m.difference = function(n) {
            var t = S(arguments, !0, !0, 1);
            return m.filter(n, function(n) {
                return !m.contains(t, n)
            })
        },
        m.zip = function() {
            return m.unzip(arguments)
        },
        m.unzip = function(n) {
            for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++)
                r[e] = m.pluck(n, e);
            return r
        },
        m.object = function(n, t) {
            for (var r = {}, e = 0, u = O(n); u > e; e++)
                t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
            return r
        },
        m.findIndex = t(1),
        m.findLastIndex = t(-1),
        m.sortedIndex = function(n, t, r, e) {
            r = x(r, e, 1);
            for (var u = r(t), i = 0, o = O(n); o > i;) {
                var a = Math.floor((i + o) / 2);
                r(n[a]) < u ? i = a + 1 : o = a
            }
            return i
        },
        m.indexOf = r(1, m.findIndex, m.sortedIndex),
        m.lastIndexOf = r(-1, m.findLastIndex),
        m.range = function(n, t, r) {
            null == t && (t = n || 0, n = 0),
                r = r || 1;
            for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r)
                u[i] = n;
            return u
        };
    var E = function(n, t, r, e, u) {
        if (!(e instanceof t))
            return n.apply(r, u);
        var i = j(n.prototype),
            o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function(n, t) {
        if (g && n.bind === g)
            return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n))
            throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2),
            e = function() {
                return E(n, e, t, this, r.concat(l.call(arguments)))
            };
        return e
    },
        m.partial = function(n) {
            var t = l.call(arguments, 1),
                r = function() {
                    for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++)
                        i[o] = t[o] === m ? arguments[e++] : t[o];
                    for (; e < arguments.length;)
                        i.push(arguments[e++]);
                    return E(n, r, this, this, i)
                };
            return r
        },
        m.bindAll = function(n) {
            var t,
                r,
                e = arguments.length;
            if (1 >= e)
                throw new Error("bindAll must be passed function names");
            for (t = 1; e > t; t++)
                r = arguments[t],
                    n[r] = m.bind(n[r], n);
            return n
        },
        m.memoize = function(n, t) {
            var r = function(e) {
                var u = r.cache,
                    i = "" + (t ? t.apply(this, arguments) : e);
                return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
            };
            return r.cache = {}, r
        },
        m.delay = function(n, t) {
            var r = l.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, r)
            }, t)
        },
        m.defer = m.partial(m.delay, m, 1),
        m.throttle = function(n, t, r) {
            var e,
                u,
                i,
                o = null,
                a = 0;
            r || (r = {});
            var c = function() {
                a = r.leading === !1 ? 0 : m.now(),
                    o = null,
                    i = n.apply(e, u),
                o || (e = u = null)
            };
            return function() {
                var f = m.now();
                a || r.leading !== !1 || (a = f);
                var l = t - (f - a);
                return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
            }
        },
        m.debounce = function(n, t, r) {
            var e,
                u,
                i,
                o,
                a,
                c = function() {
                    var f = m.now() - o;
                    t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
                };
            return function() {
                i = this,
                    u = arguments,
                    o = m.now();
                var f = r && !e;
                return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
            }
        },
        m.wrap = function(n, t) {
            return m.partial(t, n)
        },
        m.negate = function(n) {
            return function() {
                return !n.apply(this, arguments)
            }
        },
        m.compose = function() {
            var n = arguments,
                t = n.length - 1;
            return function() {
                for (var r = t, e = n[t].apply(this, arguments); r--;)
                    e = n[r].call(this, e);
                return e
            }
        },
        m.after = function(n, t) {
            return function() {
                return --n < 1 ? t.apply(this, arguments) : void 0
            }
        },
        m.before = function(n, t) {
            var r;
            return function() {
                return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
            }
        },
        m.once = m.partial(m.before, 2);
    var M = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n))
            return [];
        if (v)
            return v(n);
        var t = [];
        for (var r in n)
            m.has(n, r) && t.push(r);
        return M && e(n, t), t
    },
        m.allKeys = function(n) {
            if (!m.isObject(n))
                return [];
            var t = [];
            for (var r in n)
                t.push(r);
            return M && e(n, t), t
        },
        m.values = function(n) {
            for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
                e[u] = n[t[u]];
            return e
        },
        m.mapObject = function(n, t, r) {
            t = x(t, r);
            for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++)
                e = u[a],
                    o[e] = t(n[e], e, n);
            return o
        },
        m.pairs = function(n) {
            for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
                e[u] = [t[u], n[t[u]]];
            return e
        },
        m.invert = function(n) {
            for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++)
                t[n[r[e]]] = r[e];
            return t
        },
        m.functions = m.methods = function(n) {
            var t = [];
            for (var r in n)
                m.isFunction(n[r]) && t.push(r);
            return t.sort()
        },
        m.extend = _(m.allKeys),
        m.extendOwn = m.assign = _(m.keys),
        m.findKey = function(n, t, r) {
            t = x(t, r);
            for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
                if (e = u[i], t(n[e], e, n))
                    return e
        },
        m.pick = function(n, t, r) {
            var e,
                u,
                i = {},
                o = n;
            if (null == o)
                return i;
            m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function(n, t, r) {
                return t in r
            }, o = Object(o));
            for (var a = 0, c = u.length; c > a; a++) {
                var f = u[a],
                    l = o[f];
                e(l, f, o) && (i[f] = l)
            }
            return i
        },
        m.omit = function(n, t, r) {
            if (m.isFunction(t))
                t = m.negate(t);
            else {
                var e = m.map(S(arguments, !1, !1, 1), String);
                t = function(n, t) {
                    return !m.contains(e, t)
                }
            }
            return m.pick(n, t, r)
        },
        m.defaults = _(m.allKeys, !0),
        m.create = function(n, t) {
            var r = j(n);
            return t && m.extendOwn(r, t), r
        },
        m.clone = function(n) {
            return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
        },
        m.tap = function(n, t) {
            return t(n), n
        },
        m.isMatch = function(n, t) {
            var r = m.keys(t),
                e = r.length;
            if (null == n)
                return !e;
            for (var u = Object(n), i = 0; e > i; i++) {
                var o = r[i];
                if (t[o] !== u[o] || !(o in u))
                    return !1
            }
            return !0
        };
    var N = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof m && (n = n._wrapped),
        t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t))
            return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + t;
            case "[object Number]":
                return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t)
                return !1;
            var o = n.constructor,
                a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t)
                return !1
        }
        r = r || [],
            e = e || [];
        for (var c = r.length; c--;)
            if (r[c] === n)
                return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length)
                return !1;
            for (; c--;)
                if (!N(n[c], t[c], r, e))
                    return !1
        } else {
            var f,
                l = m.keys(n);
            if (c = l.length, m.keys(t).length !== c)
                return !1;
            for (; c--;)
                if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e))
                    return !1
        }
        return r.pop(), e.pop(), !0
    };
    m.isEqual = function(n, t) {
        return N(n, t)
    },
        m.isEmpty = function(n) {
            return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
        },
        m.isElement = function(n) {
            return !(!n || 1 !== n.nodeType)
        },
        m.isArray = h || function(n) {
            return "[object Array]" === s.call(n)
        },
        m.isObject = function(n) {
            var t = typeof n;
            return "function" === t || "object" === t && !!n
        },
        m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
            m["is" + n] = function(t) {
                return s.call(t) === "[object " + n + "]"
            }
        }),
    m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee")
    }),
    "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1
    }),
        m.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        },
        m.isNaN = function(n) {
            return m.isNumber(n) && n !== +n
        },
        m.isBoolean = function(n) {
            return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
        },
        m.isNull = function(n) {
            return null === n
        },
        m.isUndefined = function(n) {
            return n === void 0
        },
        m.has = function(n, t) {
            return null != n && p.call(n, t)
        },
        m.noConflict = function() {
            return u._ = i, this
        },
        m.identity = function(n) {
            return n
        },
        m.constant = function(n) {
            return function() {
                return n
            }
        },
        m.noop = function() {},
        m.property = w,
        m.propertyOf = function(n) {
            return null == n ? function() {} : function(t) {
                return n[t]
            }
        },
        m.matcher = m.matches = function(n) {
            return n = m.extendOwn({}, n), function(t) {
                return m.isMatch(t, n)
            }
        },
        m.times = function(n, t, r) {
            var e = Array(Math.max(0, n));
            t = b(t, r, 1);
            for (var u = 0; n > u; u++)
                e[u] = t(u);
            return e
        },
        m.random = function(n, t) {
            return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
        },
        m.now = Date.now || function() {
            return (new Date).getTime()
        };
    var B = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        T = m.invert(B),
        R = function(n) {
            var t = function(t) {
                    return n[t]
                },
                r = "(?:" + m.keys(n).join("|") + ")",
                e = RegExp(r),
                u = RegExp(r, "g");
            return function(n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
            }
        };
    m.escape = R(B),
        m.unescape = R(T),
        m.result = function(n, t, r) {
            var e = null == n ? void 0 : n[t];
            return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
        };
    var q = 0;
    m.uniqueId = function(n) {
        var t = ++q + "";
        return n ? n + t : t
    },
        m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
    var K = /(.)^/,
        z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\u2028|\u2029/g,
        L = function(n) {
            return "\\" + z[n]
        };
    m.template = function(n, t, r) {
        !t && r && (t = r),
            t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
        }),
            i += "';\n",
        t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
            i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", i)
        } catch (a) {
            throw a.source = i, a
        }
        var c = function(n) {
                return o.call(this, n, m)
            },
            f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}", c
    },
        m.chain = function(n) {
            var t = m(n);
            return t._chain = !0, t
        };
    var P = function(n, t) {
        return n._chain ? m(t).chain() : t
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [this._wrapped];
                return f.apply(n, arguments), P(this, r.apply(m, n))
            }
        })
    },
        m.mixin(m),
        m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
            var t = o[n];
            m.prototype[n] = function() {
                var r = this._wrapped;
                return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
            }
        }),
        m.each(["concat", "join", "slice"], function(n) {
            var t = o[n];
            m.prototype[n] = function() {
                return P(this, t.apply(this._wrapped, arguments))
            }
        }),
        m.prototype.value = function() {
            return this._wrapped
        },
        m.prototype.valueOf = m.prototype.toJSON = m.prototype.value,
        m.prototype.toString = function() {
            return "" + this._wrapped
        },
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return m
    })
}).call(this);
(function(t) {
    var e = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global;
    if (typeof define === "function" && define.amd) {
        define(["underscore", "jquery", "exports"], function(i, r, n) {
            e.Backbone = t(e, n, i, r)
        })
    } else if (typeof exports !== "undefined") {
        var i = require("underscore"),
            r;
        try {
            r = require("jquery")
        } catch (n) {}
        t(e, exports, i, r)
    } else {
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }
})(function(t, e, i, r) {
    var n = t.Backbone;
    var s = Array.prototype.slice;
    e.VERSION = "1.3.3";
    e.$ = r;
    e.noConflict = function() {
        t.Backbone = n;
        return this
    };
    e.emulateHTTP = false;
    e.emulateJSON = false;
    var a = function(t, e, r) {
        switch (t) {
            case 1:
                return function() {
                    return i[e](this[r])
                };
            case 2:
                return function(t) {
                    return i[e](this[r], t)
                };
            case 3:
                return function(t, n) {
                    return i[e](this[r], o(t, this), n)
                };
            case 4:
                return function(t, n, s) {
                    return i[e](this[r], o(t, this), n, s)
                };
            default:
                return function() {
                    var t = s.call(arguments);
                    t.unshift(this[r]);
                    return i[e].apply(i, t)
                }
        }
    };
    var h = function(t, e, r) {
        i.each(e, function(e, n) {
            if (i[n])
                t.prototype[n] = a(e, n, r)
        })
    };
    var o = function(t, e) {
        if (i.isFunction(t))
            return t;
        if (i.isObject(t) && !e._isModel(t))
            return l(t);
        if (i.isString(t))
            return function(e) {
                return e.get(t)
            };
        return t
    };
    var l = function(t) {
        var e = i.matches(t);
        return function(t) {
            return e(t.attributes)
        }
    };
    var u = e.Events = {};
    var c = /\s+/;
    var f = function(t, e, r, n, s) {
        var a = 0,
            h;
        if (r && typeof r === "object") {
            if (n !== void 0 && "context" in s && s.context === void 0)
                s.context = n;
            for (h = i.keys(r); a < h.length; a++) {
                e = f(t, e, h[a], r[h[a]], s)
            }
        } else if (r && c.test(r)) {
            for (h = r.split(c); a < h.length; a++) {
                e = t(e, h[a], n, s)
            }
        } else {
            e = t(e, r, n, s)
        }
        return e
    };
    u.on = function(t, e, i) {
        return d(this, t, e, i)
    };
    var d = function(t, e, i, r, n) {
        t._events = f(v, t._events || {}, e, i, {
            context: r,
            ctx: t,
            listening: n
        });
        if (n) {
            var s = t._listeners || (t._listeners = {});
            s[n.id] = n
        }
        return t
    };
    u.listenTo = function(t, e, r) {
        if (!t)
            return this;
        var n = t._listenId || (t._listenId = i.uniqueId("l"));
        var s = this._listeningTo || (this._listeningTo = {});
        var a = s[n];
        if (!a) {
            var h = this._listenId || (this._listenId = i.uniqueId("l"));
            a = s[n] = {
                obj: t,
                objId: n,
                id: h,
                listeningTo: s,
                count: 0
            }
        }
        d(t, e, r, this, a);
        return this
    };
    var v = function(t, e, i, r) {
        if (i) {
            var n = t[e] || (t[e] = []);
            var s = r.context,
                a = r.ctx,
                h = r.listening;
            if (h)
                h.count++;
            n.push({
                callback: i,
                context: s,
                ctx: s || a,
                listening: h
            })
        }
        return t
    };
    u.off = function(t, e, i) {
        if (!this._events)
            return this;
        this._events = f(g, this._events, t, e, {
            context: i,
            listeners: this._listeners
        });
        return this
    };
    u.stopListening = function(t, e, r) {
        var n = this._listeningTo;
        if (!n)
            return this;
        var s = t ? [t._listenId] : i.keys(n);
        for (var a = 0; a < s.length; a++) {
            var h = n[s[a]];
            if (!h)
                break;
            h.obj.off(e, r, this)
        }
        return this
    };
    var g = function(t, e, r, n) {
        if (!t)
            return;
        var s = 0,
            a;
        var h = n.context,
            o = n.listeners;
        if (!e && !r && !h) {
            var l = i.keys(o);
            for (; s < l.length; s++) {
                a = o[l[s]];
                delete o[a.id];
                delete a.listeningTo[a.objId]
            }
            return
        }
        var u = e ? [e] : i.keys(t);
        for (; s < u.length; s++) {
            e = u[s];
            var c = t[e];
            if (!c)
                break;
            var f = [];
            for (var d = 0; d < c.length; d++) {
                var v = c[d];
                if (r && r !== v.callback && r !== v.callback._callback || h && h !== v.context) {
                    f.push(v)
                } else {
                    a = v.listening;
                    if (a && --a.count === 0) {
                        delete o[a.id];
                        delete a.listeningTo[a.objId]
                    }
                }
            }
            if (f.length) {
                t[e] = f
            } else {
                delete t[e]
            }
        }
        return t
    };
    u.once = function(t, e, r) {
        var n = f(p, {}, t, e, i.bind(this.off, this));
        if (typeof t === "string" && r == null)
            e = void 0;
        return this.on(n, e, r)
    };
    u.listenToOnce = function(t, e, r) {
        var n = f(p, {}, e, r, i.bind(this.stopListening, this, t));
        return this.listenTo(t, n)
    };
    var p = function(t, e, r, n) {
        if (r) {
            var s = t[e] = i.once(function() {
                n(e, s);
                r.apply(this, arguments)
            });
            s._callback = r
        }
        return t
    };
    u.trigger = function(t) {
        if (!this._events)
            return this;
        var e = Math.max(0, arguments.length - 1);
        var i = Array(e);
        for (var r = 0; r < e; r++)
            i[r] = arguments[r + 1];
        f(m, this._events, t, void 0, i);
        return this
    };
    var m = function(t, e, i, r) {
        if (t) {
            var n = t[e];
            var s = t.all;
            if (n && s)
                s = s.slice();
            if (n)
                _(n, r);
            if (s)
                _(s, [e].concat(r))
        }
        return t
    };
    var _ = function(t, e) {
        var i,
            r = -1,
            n = t.length,
            s = e[0],
            a = e[1],
            h = e[2];
        switch (e.length) {
            case 0:
                while (++r < n)
                    (i = t[r]).callback.call(i.ctx);
                return;
            case 1:
                while (++r < n)
                    (i = t[r]).callback.call(i.ctx, s);
                return;
            case 2:
                while (++r < n)
                    (i = t[r]).callback.call(i.ctx, s, a);
                return;
            case 3:
                while (++r < n)
                    (i = t[r]).callback.call(i.ctx, s, a, h);
                return;
            default:
                while (++r < n)
                    (i = t[r]).callback.apply(i.ctx, e);
                return
        }
    };
    u.bind = u.on;
    u.unbind = u.off;
    i.extend(e, u);
    var y = e.Model = function(t, e) {
        var r = t || {};
        e || (e = {});
        this.cid = i.uniqueId(this.cidPrefix);
        this.attributes = {};
        if (e.collection)
            this.collection = e.collection;
        if (e.parse)
            r = this.parse(r, e) || {};
        var n = i.result(this, "defaults");
        r = i.defaults(i.extend({}, n, r), n);
        this.set(r, e);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    i.extend(y.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(t) {
            return i.clone(this.attributes)
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return i.escape(this.get(t))
        },
        has: function(t) {
            return this.get(t) != null
        },
        matches: function(t) {
            return !!i.iteratee(t, this)(this.attributes)
        },
        set: function(t, e, r) {
            if (t == null)
                return this;
            var n;
            if (typeof t === "object") {
                n = t;
                r = e
            } else {
                (n = {})[t] = e
            }
            r || (r = {});
            if (!this._validate(n, r))
                return false;
            var s = r.unset;
            var a = r.silent;
            var h = [];
            var o = this._changing;
            this._changing = true;
            if (!o) {
                this._previousAttributes = i.clone(this.attributes);
                this.changed = {}
            }
            var l = this.attributes;
            var u = this.changed;
            var c = this._previousAttributes;
            for (var f in n) {
                e = n[f];
                if (!i.isEqual(l[f], e))
                    h.push(f);
                if (!i.isEqual(c[f], e)) {
                    u[f] = e
                } else {
                    delete u[f]
                }
                s ? delete l[f] : l[f] = e
            }
            if (this.idAttribute in n)
                this.id = this.get(this.idAttribute);
            if (!a) {
                if (h.length)
                    this._pending = r;
                for (var d = 0; d < h.length; d++) {
                    this.trigger("change:" + h[d], this, l[h[d]], r)
                }
            }
            if (o)
                return this;
            if (!a) {
                while (this._pending) {
                    r = this._pending;
                    this._pending = false;
                    this.trigger("change", this, r)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },
        unset: function(t, e) {
            return this.set(t, void 0, i.extend({}, e, {
                unset: true
            }))
        },
        clear: function(t) {
            var e = {};
            for (var r in this.attributes)
                e[r] = void 0;
            return this.set(e, i.extend({}, t, {
                unset: true
            }))
        },
        hasChanged: function(t) {
            if (t == null)
                return !i.isEmpty(this.changed);
            return i.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t)
                return this.hasChanged() ? i.clone(this.changed) : false;
            var e = this._changing ? this._previousAttributes : this.attributes;
            var r = {};
            for (var n in t) {
                var s = t[n];
                if (i.isEqual(e[n], s))
                    continue;
                r[n] = s
            }
            return i.size(r) ? r : false
        },
        previous: function(t) {
            if (t == null || !this._previousAttributes)
                return null;
            return this._previousAttributes[t]
        },
        previousAttributes: function() {
            return i.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = i.extend({
                parse: true
            }, t);
            var e = this;
            var r = t.success;
            t.success = function(i) {
                var n = t.parse ? e.parse(i, t) : i;
                if (!e.set(n, t))
                    return false;
                if (r)
                    r.call(t.context, e, i, t);
                e.trigger("sync", e, i, t)
            };
            B(this, t);
            return this.sync("read", this, t)
        },
        save: function(t, e, r) {
            var n;
            if (t == null || typeof t === "object") {
                n = t;
                r = e
            } else {
                (n = {})[t] = e
            }
            r = i.extend({
                validate: true,
                parse: true
            }, r);
            var s = r.wait;
            if (n && !s) {
                if (!this.set(n, r))
                    return false
            } else if (!this._validate(n, r)) {
                return false
            }
            var a = this;
            var h = r.success;
            var o = this.attributes;
            r.success = function(t) {
                a.attributes = o;
                var e = r.parse ? a.parse(t, r) : t;
                if (s)
                    e = i.extend({}, n, e);
                if (e && !a.set(e, r))
                    return false;
                if (h)
                    h.call(r.context, a, t, r);
                a.trigger("sync", a, t, r)
            };
            B(this, r);
            if (n && s)
                this.attributes = i.extend({}, o, n);
            var l = this.isNew() ? "create" : r.patch ? "patch" : "update";
            if (l === "patch" && !r.attrs)
                r.attrs = n;
            var u = this.sync(l, this, r);
            this.attributes = o;
            return u
        },
        destroy: function(t) {
            t = t ? i.clone(t) : {};
            var e = this;
            var r = t.success;
            var n = t.wait;
            var s = function() {
                e.stopListening();
                e.trigger("destroy", e, e.collection, t)
            };
            t.success = function(i) {
                if (n)
                    s();
                if (r)
                    r.call(t.context, e, i, t);
                if (!e.isNew())
                    e.trigger("sync", e, i, t)
            };
            var a = false;
            if (this.isNew()) {
                i.defer(t.success)
            } else {
                B(this, t);
                a = this.sync("delete", this, t)
            }
            if (!n)
                s();
            return a
        },
        url: function() {
            var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || F();
            if (this.isNew())
                return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(t) {
            return this._validate({}, i.extend({}, t, {
                validate: true
            }))
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate)
                return true;
            t = i.extend({}, this.attributes, t);
            var r = this.validationError = this.validate(t, e) || null;
            if (!r)
                return true;
            this.trigger("invalid", this, r, i.extend(e, {
                validationError: r
            }));
            return false
        }
    });
    var b = {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    };
    h(y, b, "attributes");
    var x = e.Collection = function(t, e) {
        e || (e = {});
        if (e.model)
            this.model = e.model;
        if (e.comparator !== void 0)
            this.comparator = e.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (t)
            this.reset(t, i.extend({
                silent: true
            }, e))
    };
    var w = {
        add: true,
        remove: true,
        merge: true
    };
    var E = {
        add: true,
        remove: false
    };
    var I = function(t, e, i) {
        i = Math.min(Math.max(i, 0), t.length);
        var r = Array(t.length - i);
        var n = e.length;
        var s;
        for (s = 0; s < r.length; s++)
            r[s] = t[s + i];
        for (s = 0; s < n; s++)
            t[s + i] = e[s];
        for (s = 0; s < r.length; s++)
            t[s + n + i] = r[s]
    };
    i.extend(x.prototype, u, {
        model: y,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, i.extend({
                merge: false
            }, e, E))
        },
        remove: function(t, e) {
            e = i.extend({}, e);
            var r = !i.isArray(t);
            t = r ? [t] : t.slice();
            var n = this._removeModels(t, e);
            if (!e.silent && n.length) {
                e.changes = {
                    added: [],
                    merged: [],
                    removed: n
                };
                this.trigger("update", this, e)
            }
            return r ? n[0] : n
        },
        set: function(t, e) {
            if (t == null)
                return;
            e = i.extend({}, w, e);
            if (e.parse && !this._isModel(t)) {
                t = this.parse(t, e) || []
            }
            var r = !i.isArray(t);
            t = r ? [t] : t.slice();
            var n = e.at;
            if (n != null)
                n = +n;
            if (n > this.length)
                n = this.length;
            if (n < 0)
                n += this.length + 1;
            var s = [];
            var a = [];
            var h = [];
            var o = [];
            var l = {};
            var u = e.add;
            var c = e.merge;
            var f = e.remove;
            var d = false;
            var v = this.comparator && n == null && e.sort !== false;
            var g = i.isString(this.comparator) ? this.comparator : null;
            var p,
                m;
            for (m = 0; m < t.length; m++) {
                p = t[m];
                var _ = this.get(p);
                if (_) {
                    if (c && p !== _) {
                        var y = this._isModel(p) ? p.attributes : p;
                        if (e.parse)
                            y = _.parse(y, e);
                        _.set(y, e);
                        h.push(_);
                        if (v && !d)
                            d = _.hasChanged(g)
                    }
                    if (!l[_.cid]) {
                        l[_.cid] = true;
                        s.push(_)
                    }
                    t[m] = _
                } else if (u) {
                    p = t[m] = this._prepareModel(p, e);
                    if (p) {
                        a.push(p);
                        this._addReference(p, e);
                        l[p.cid] = true;
                        s.push(p)
                    }
                }
            }
            if (f) {
                for (m = 0; m < this.length; m++) {
                    p = this.models[m];
                    if (!l[p.cid])
                        o.push(p)
                }
                if (o.length)
                    this._removeModels(o, e)
            }
            var b = false;
            var x = !v && u && f;
            if (s.length && x) {
                b = this.length !== s.length || i.some(this.models, function(t, e) {
                    return t !== s[e]
                });
                this.models.length = 0;
                I(this.models, s, 0);
                this.length = this.models.length
            } else if (a.length) {
                if (v)
                    d = true;
                I(this.models, a, n == null ? this.length : n);
                this.length = this.models.length
            }
            if (d)
                this.sort({
                    silent: true
                });
            if (!e.silent) {
                for (m = 0; m < a.length; m++) {
                    if (n != null)
                        e.index = n + m;
                    p = a[m];
                    p.trigger("add", p, this, e)
                }
                if (d || b)
                    this.trigger("sort", this, e);
                if (a.length || o.length || h.length) {
                    e.changes = {
                        added: a,
                        removed: o,
                        merged: h
                    };
                    this.trigger("update", this, e)
                }
            }
            return r ? t[0] : t
        },
        reset: function(t, e) {
            e = e ? i.clone(e) : {};
            for (var r = 0; r < this.models.length; r++) {
                this._removeReference(this.models[r], e)
            }
            e.previousModels = this.models;
            this._reset();
            t = this.add(t, i.extend({
                silent: true
            }, e));
            if (!e.silent)
                this.trigger("reset", this, e);
            return t
        },
        push: function(t, e) {
            return this.add(t, i.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t)
        },
        unshift: function(t, e) {
            return this.add(t, i.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t)
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(t) {
            if (t == null)
                return void 0;
            return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid]
        },
        has: function(t) {
            return this.get(t) != null
        },
        at: function(t) {
            if (t < 0)
                t += this.length;
            return this.models[t]
        },
        where: function(t, e) {
            return this[e ? "find" : "filter"](t)
        },
        findWhere: function(t) {
            return this.where(t, true)
        },
        sort: function(t) {
            var e = this.comparator;
            if (!e)
                throw new Error("Cannot sort a set without a comparator");
            t || (t = {});
            var r = e.length;
            if (i.isFunction(e))
                e = i.bind(e, this);
            if (r === 1 || i.isString(e)) {
                this.models = this.sortBy(e)
            } else {
                this.models.sort(e)
            }
            if (!t.silent)
                this.trigger("sort", this, t);
            return this
        },
        pluck: function(t) {
            return this.map(t + "")
        },
        fetch: function(t) {
            t = i.extend({
                parse: true
            }, t);
            var e = t.success;
            var r = this;
            t.success = function(i) {
                var n = t.reset ? "reset" : "set";
                r[n](i, t);
                if (e)
                    e.call(t.context, r, i, t);
                r.trigger("sync", r, i, t)
            };
            B(this, t);
            return this.sync("read", this, t)
        },
        create: function(t, e) {
            e = e ? i.clone(e) : {};
            var r = e.wait;
            t = this._prepareModel(t, e);
            if (!t)
                return false;
            if (!r)
                this.add(t, e);
            var n = this;
            var s = e.success;
            e.success = function(t, e, i) {
                if (r)
                    n.add(t, i);
                if (s)
                    s.call(i.context, t, e, i)
            };
            t.save(null, e);
            return t
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(t) {
            return t[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (this._isModel(t)) {
                if (!t.collection)
                    t.collection = this;
                return t
            }
            e = e ? i.clone(e) : {};
            e.collection = this;
            var r = new this.model(t, e);
            if (!r.validationError)
                return r;
            this.trigger("invalid", this, r.validationError, e);
            return false
        },
        _removeModels: function(t, e) {
            var i = [];
            for (var r = 0; r < t.length; r++) {
                var n = this.get(t[r]);
                if (!n)
                    continue;
                var s = this.indexOf(n);
                this.models.splice(s, 1);
                this.length--;
                delete this._byId[n.cid];
                var a = this.modelId(n.attributes);
                if (a != null)
                    delete this._byId[a];
                if (!e.silent) {
                    e.index = s;
                    n.trigger("remove", n, this, e)
                }
                i.push(n);
                this._removeReference(n, e)
            }
            return i
        },
        _isModel: function(t) {
            return t instanceof y
        },
        _addReference: function(t, e) {
            this._byId[t.cid] = t;
            var i = this.modelId(t.attributes);
            if (i != null)
                this._byId[i] = t;
            t.on("all", this._onModelEvent, this)
        },
        _removeReference: function(t, e) {
            delete this._byId[t.cid];
            var i = this.modelId(t.attributes);
            if (i != null)
                delete this._byId[i];
            if (this === t.collection)
                delete t.collection;
            t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, i, r) {
            if (e) {
                if ((t === "add" || t === "remove") && i !== this)
                    return;
                if (t === "destroy")
                    this.remove(e, r);
                if (t === "change") {
                    var n = this.modelId(e.previousAttributes());
                    var s = this.modelId(e.attributes);
                    if (n !== s) {
                        if (n != null)
                            delete this._byId[n];
                        if (s != null)
                            this._byId[s] = e
                    }
                }
            }
            this.trigger.apply(this, arguments)
        }
    });
    var S = {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    };
    h(x, S, "models");
    var k = e.View = function(t) {
        this.cid = i.uniqueId("view");
        i.extend(this, i.pick(t, P));
        this._ensureElement();
        this.initialize.apply(this, arguments)
    };
    var T = /^(\S+)\s*(.*)$/;
    var P = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    i.extend(k.prototype, u, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this._removeElement();
            this.stopListening();
            return this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(t) {
            this.undelegateEvents();
            this._setElement(t);
            this.delegateEvents();
            return this
        },
        _setElement: function(t) {
            this.$el = t instanceof e.$ ? t : e.$(t);
            this.el = this.$el[0]
        },
        delegateEvents: function(t) {
            t || (t = i.result(this, "events"));
            if (!t)
                return this;
            this.undelegateEvents();
            for (var e in t) {
                var r = t[e];
                if (!i.isFunction(r))
                    r = this[r];
                if (!r)
                    continue;
                var n = e.match(T);
                this.delegate(n[1], n[2], i.bind(r, this))
            }
            return this
        },
        delegate: function(t, e, i) {
            this.$el.on(t + ".delegateEvents" + this.cid, e, i);
            return this
        },
        undelegateEvents: function() {
            if (this.$el)
                this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        undelegate: function(t, e, i) {
            this.$el.off(t + ".delegateEvents" + this.cid, e, i);
            return this
        },
        _createElement: function(t) {
            return document.createElement(t)
        },
        _ensureElement: function() {
            if (!this.el) {
                var t = i.extend({}, i.result(this, "attributes"));
                if (this.id)
                    t.id = i.result(this, "id");
                if (this.className)
                    t["class"] = i.result(this, "className");
                this.setElement(this._createElement(i.result(this, "tagName")));
                this._setAttributes(t)
            } else {
                this.setElement(i.result(this, "el"))
            }
        },
        _setAttributes: function(t) {
            this.$el.attr(t)
        }
    });
    e.sync = function(t, r, n) {
        var s = H[t];
        i.defaults(n || (n = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var a = {
            type: s,
            dataType: "json"
        };
        if (!n.url) {
            a.url = i.result(r, "url") || F()
        }
        if (n.data == null && r && (t === "create" || t === "update" || t === "patch")) {
            a.contentType = "application/json";
            a.data = JSON.stringify(n.attrs || r.toJSON(n))
        }
        if (n.emulateJSON) {
            a.contentType = "application/x-www-form-urlencoded";
            a.data = a.data ? {
                model: a.data
            } : {}
        }
        if (n.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
            a.type = "POST";
            if (n.emulateJSON)
                a.data._method = s;
            var h = n.beforeSend;
            n.beforeSend = function(t) {
                t.setRequestHeader("X-HTTP-Method-Override", s);
                if (h)
                    return h.apply(this, arguments)
            }
        }
        if (a.type !== "GET" && !n.emulateJSON) {
            a.processData = false
        }
        var o = n.error;
        n.error = function(t, e, i) {
            n.textStatus = e;
            n.errorThrown = i;
            if (o)
                o.call(n.context, t, e, i)
        };
        var l = n.xhr = e.ajax(i.extend(a, n));
        r.trigger("request", r, l, n);
        return l
    };
    var H = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments)
    };
    var $ = e.Router = function(t) {
        t || (t = {});
        if (t.routes)
            this.routes = t.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var A = /\((.*?)\)/g;
    var C = /(\(\?)?:\w+/g;
    var R = /\*\w+/g;
    var j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    i.extend($.prototype, u, {
        initialize: function() {},
        route: function(t, r, n) {
            if (!i.isRegExp(t))
                t = this._routeToRegExp(t);
            if (i.isFunction(r)) {
                n = r;
                r = ""
            }
            if (!n)
                n = this[r];
            var s = this;
            e.history.route(t, function(i) {
                var a = s._extractParameters(t, i);
                if (s.execute(n, a, r) !== false) {
                    s.trigger.apply(s, ["route:" + r].concat(a));
                    s.trigger("route", r, a);
                    e.history.trigger("route", s, r, a)
                }
            });
            return this
        },
        execute: function(t, e, i) {
            if (t)
                t.apply(this, e)
        },
        navigate: function(t, i) {
            e.history.navigate(t, i);
            return this
        },
        _bindRoutes: function() {
            if (!this.routes)
                return;
            this.routes = i.result(this, "routes");
            var t,
                e = i.keys(this.routes);
            while ((t = e.pop()) != null) {
                this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            t = t.replace(j, "\\$&").replace(A, "(?:$1)?").replace(C, function(t, e) {
                return e ? t : "([^/?]+)"
            }).replace(R, "([^?]*?)");
            return new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(t, e) {
            var r = t.exec(e).slice(1);
            return i.map(r, function(t, e) {
                if (e === r.length - 1)
                    return t || null;
                return t ? decodeURIComponent(t) : null
            })
        }
    });
    var N = e.History = function() {
        this.handlers = [];
        this.checkUrl = i.bind(this.checkUrl, this);
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history
        }
    };
    var M = /^[#\/]|\s+$/g;
    var O = /^\/+|\/+$/g;
    var U = /#.*$/;
    N.started = false;
    i.extend(N.prototype, u, {
        interval: 50,
        atRoot: function() {
            var t = this.location.pathname.replace(/[^\/]$/, "$&/");
            return t === this.root && !this.getSearch()
        },
        matchRoot: function() {
            var t = this.decodeFragment(this.location.pathname);
            var e = t.slice(0, this.root.length - 1) + "/";
            return e === this.root
        },
        decodeFragment: function(t) {
            return decodeURI(t.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return t ? t[0] : ""
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getPath: function() {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return t.charAt(0) === "/" ? t.slice(1) : t
        },
        getFragment: function(t) {
            if (t == null) {
                if (this._usePushState || !this._wantsHashChange) {
                    t = this.getPath()
                } else {
                    t = this.getHash()
                }
            }
            return t.replace(M, "")
        },
        start: function(t) {
            if (N.started)
                throw new Error("Backbone.history has already been started");
            N.started = true;
            this.options = i.extend({
                root: "/"
            }, this.options, t);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7);
            this._useHashChange = this._wantsHashChange && this._hasHashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.history && this.history.pushState);
            this._usePushState = this._wantsPushState && this._hasPushState;
            this.fragment = this.getFragment();
            this.root = ("/" + this.root + "/").replace(O, "/");
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var e = this.root.slice(0, -1) || "/";
                    this.location.replace(e + "#" + this.getPath());
                    return true
                } else if (this._hasPushState && this.atRoot()) {
                    this.navigate(this.getHash(), {
                        replace: true
                    })
                }
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe");
                this.iframe.src = "javascript:0";
                this.iframe.style.display = "none";
                this.iframe.tabIndex = -1;
                var r = document.body;
                var n = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                n.document.open();
                n.document.close();
                n.location.hash = "#" + this.fragment
            }
            var s = window.addEventListener || function(t, e) {
                return attachEvent("on" + t, e)
            };
            if (this._usePushState) {
                s("popstate", this.checkUrl, false)
            } else if (this._useHashChange && !this.iframe) {
                s("hashchange", this.checkUrl, false)
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
            }
            if (!this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var t = window.removeEventListener || function(t, e) {
                return detachEvent("on" + t, e)
            };
            if (this._usePushState) {
                t("popstate", this.checkUrl, false)
            } else if (this._useHashChange && !this.iframe) {
                t("hashchange", this.checkUrl, false)
            }
            if (this.iframe) {
                document.body.removeChild(this.iframe);
                this.iframe = null
            }
            if (this._checkUrlInterval)
                clearInterval(this._checkUrlInterval);
            N.started = false
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function(t) {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe) {
                e = this.getHash(this.iframe.contentWindow)
            }
            if (e === this.fragment)
                return false;
            if (this.iframe)
                this.navigate(e);
            this.loadUrl()
        },
        loadUrl: function(t) {
            if (!this.matchRoot())
                return false;
            t = this.fragment = this.getFragment(t);
            return i.some(this.handlers, function(e) {
                if (e.route.test(t)) {
                    e.callback(t);
                    return true
                }
            })
        },
        navigate: function(t, e) {
            if (!N.started)
                return false;
            if (!e || e === true)
                e = {
                    trigger: !!e
                };
            t = this.getFragment(t || "");
            var i = this.root;
            if (t === "" || t.charAt(0) === "?") {
                i = i.slice(0, -1) || "/"
            }
            var r = i + t;
            t = this.decodeFragment(t.replace(U, ""));
            if (this.fragment === t)
                return;
            this.fragment = t;
            if (this._usePushState) {
                this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r)
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, t, e.replace);
                if (this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                    var n = this.iframe.contentWindow;
                    if (!e.replace) {
                        n.document.open();
                        n.document.close()
                    }
                    this._updateHash(n.location, t, e.replace)
                }
            } else {
                return this.location.assign(r)
            }
            if (e.trigger)
                return this.loadUrl(t)
        },
        _updateHash: function(t, e, i) {
            if (i) {
                var r = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(r + "#" + e)
            } else {
                t.hash = "#" + e
            }
        }
    });
    e.history = new N;
    var q = function(t, e) {
        var r = this;
        var n;
        if (t && i.has(t, "constructor")) {
            n = t.constructor
        } else {
            n = function() {
                return r.apply(this, arguments)
            }
        }
        i.extend(n, r, e);
        n.prototype = i.create(r.prototype, t);
        n.prototype.constructor = n;
        n.__super__ = r.prototype;
        return n
    };
    y.extend = x.extend = $.extend = k.extend = N.extend = q;
    var F = function() {
        throw new Error('A "url" property or function must be specified')
    };
    var B = function(t, e) {
        var i = e.error;
        e.error = function(r) {
            if (i)
                i.call(e.context, t, r, e);
            t.trigger("error", t, r, e)
        }
    };
    return e
});
!function(e) {
    "function" == typeof define && define.amd ? define(["underscore", "backbone"], e) : "object" == typeof exports ? e(require("underscore"), require("backbone")) : e(_, Backbone)
}(function(e, t) {
    var n = /^\s*</,
        i = "undefined" != typeof Element && Element.prototype || {},
        r = i.addEventListener || function(e, t) {
            return this.attachEvent("on" + e, t)
        },
        s = i.removeEventListener || function(e, t) {
            return this.detachEvent("on" + e, t)
        },
        o = i && i.matches || i[e.find(["webkit", "moz", "ms", "o"], function(e) {
            return !!i[e + "MatchesSelector"]
        }) + "MatchesSelector"] || function(e) {
            for (var t = (this.parentNode || document).querySelectorAll(e) || [], n = 0, i = t.length; i > n; n++)
                if (t[n] == this)
                    return !0;
            return !1
        },
        l = t.View;
    return t.NativeViewMixin = {
        _domEvents: null,
        constructor: function() {
            return this._domEvents = [], l.apply(this, arguments)
        },
        $: function(e) {
            return this.el.querySelectorAll(e)
        },
        _removeElement: function() {
            this.undelegateEvents(),
            this.el.parentNode && this.el.parentNode.removeChild(this.el)
        },
        _setElement: function(e) {
            if ("string" == typeof e)
                if (n.test(e)) {
                    var t = document.createElement("div");
                    t.innerHTML = e,
                        this.el = t.firstChild
                } else
                    this.el = document.querySelector(e);
            else
                this.el = e
        },
        _setAttributes: function(e) {
            for (var t in e)
                t in this.el ? this.el[t] = e[t] : this.el.setAttribute(t, e[t])
        },
        delegate: function(t, n, i) {
            e.isFunction(n) && (i = n, n = null);
            var s,
                l = this.el;
            return s = n ? function(e) {
                for (var t = e.target || e.srcElement; t && t != l; t = t.parentNode)
                    if (o.call(t, n))
                        return e.delegateTarget = t, i.apply(this, arguments)
            } : i, r.call(l, t, s, !1), this._domEvents.push({
                eventName: t,
                handler: s,
                listener: i,
                selector: n
            }), s
        },
        undelegate: function(t, n, i) {
            e.isFunction(n) && (i = n, n = null);
            var r = this._domEvents;
            return this.el && e(r).chain().filter(function(e) {
                return e.eventName === t && (i ? e.listener === i : !0) && (n ? e.selector === n : !0)
            }).forEach(function(t) {
                s.call(this.el, t.eventName, t.handler, !1),
                    r.splice(e.indexOf(r, t), 1)
            }, this), this
        },
        undelegateEvents: function() {
            return this.el && (e.each(this._domEvents, function(e) {
                s.call(this.el, e.eventName, e.handler, !1)
            }, this), this._domEvents = []), this
        }
    }, t.NativeView = t.View.extend(t.NativeViewMixin), t.NativeView
});
!function(e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : Backbone.ajax = e()
}(function() {
    var e = function() {
        var t = /^(?:application|text)\/xml/,
            n = /^application\/json/,
            r = function(e, r) {
                return null == e && (e = r.getResponseHeader("content-type")), t.test(e) ? r.responseXML : n.test(e) && "" !== r.responseText ? JSON.parse(r.responseText) : r.responseText
            },
            a = function(e) {
                return e.status >= 200 && e.status < 300 || 304 === e.status || 0 === e.status && "file:" === window.location.protocol
            },
            o = function(e, t, n, o, i) {
                return function() {
                    if (s(e, n), 4 === e.readyState) {
                        var p = e.status,
                            u = r(t.headers && t.headers.Accept, e);
                        if (a(e))
                            t.success && t.success(u),
                            o && o(u);
                        else {
                            var d = new Error("Server responded with a status of " + p);
                            t.error && t.error(e, p, d),
                            i && i(e)
                        }
                    }
                }
            },
            s = function(e, t) {
                if (t) {
                    for (var n = ["readyState", "status", "statusText", "responseText", "responseXML", "setRequestHeader", "getAllResponseHeaders", "getResponseHeader", "statusCode", "abort"], r = 0; r < n.length; r++) {
                        var a = n[r];
                        t[a] = "function" == typeof e[a] ? e[a].bind(e) : e[a]
                    }
                    return t
                }
            };
        return function(t) {
            if (null == t)
                throw new Error("You must provide options");
            null == t.type && (t.type = "GET");
            var n,
                r,
                a = new XMLHttpRequest,
                i = e.Promise || "undefined" != typeof Promise && Promise,
                p = i && new i(function(e, t) {
                    n = e,
                        r = t
                });
            if (t.contentType && (null == t.headers && (t.headers = {}), t.headers["Content-Type"] = t.contentType), "GET" === t.type && "object" == typeof t.data) {
                var u = "",
                    d = function(e, t) {
                        return null == t ? "" : "&" + encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                for (var c in t.data)
                    u += d(c, t.data[c]);
                if (u) {
                    var f = -1 === t.url.indexOf("?") ? "?" : "&";
                    t.url += f + u.substring(1)
                }
            }
            if (a.onreadystatechange = o(a, t, p, n, r), a.open(t.type, t.url, t.async !== !1), !t.headers || !t.headers.Accept) {
                var l = "*/".concat("*"),
                    y = {
                        "*": l,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    };
                a.setRequestHeader("Accept", t.dataType && y[t.dataType] ? y[t.dataType] + ("*" !== t.dataType ? ", " + l + "; q=0.01" : "") : y["*"])
            }
            if (t.headers)
                for (var c in t.headers)
                    a.setRequestHeader(c, t.headers[c]);
            return t.beforeSend && t.beforeSend(a), a.send(t.data), t.originalXhr = a, s(a, p), p ? p : a
        }
    }();
    return e
});
Backbone.View = Backbone.NativeView;
Backbone.ajax.Promise = Q.Promise;

(function(f, c) {
    "undefined" !== typeof module ? module.exports = c() : "function" === typeof define && "object" === typeof define.amd ? define(c) : this[f] = c()
})("clipboard", function() {
    if (!document.addEventListener)
        return null;
    var f = {};
    f.copy = function() {
        function c() {
            d = !1;
            b = null;
            e && window.getSelection().removeAllRanges();
            e = !1
        }
        var d = !1,
            b = null,
            e = !1;
        document.addEventListener("copy", function(c) {
            if (d) {
                for (var e in b)
                    c.clipboardData.setData(e, b[e]);
                c.preventDefault()
            }
        });
        return function(g) {
            return new Promise(function(k, f) {
                d =
                    !0;
                b = "string" === typeof g ? {
                    "text/plain": g
                } : g instanceof Node ? {
                    "text/html": (new XMLSerializer).serializeToString(g)
                } : g;
                try {
                    var n = document.getSelection();
                    if (!document.queryCommandEnabled("copy") && n.isCollapsed) {
                        var l = document.createRange();
                        l.selectNodeContents(document.body);
                        n.addRange(l);
                        e = !0
                    }
                    if (document.execCommand("copy"))
                        c(),
                            k();
                    else
                        throw Error("Unable to copy. Perhaps it's not available in your browser?");
                } catch (p) {
                    c(),
                        f(p)
                }
            })
        }
    }();
    f.paste = function() {
        var c = !1,
            d,
            b;
        document.addEventListener("paste",
            function(e) {
                if (c) {
                    c = !1;
                    e.preventDefault();
                    var g = d;
                    d = null;
                    g(e.clipboardData.getData(b))
                }
            });
        return function(e) {
            return new Promise(function(g, f) {
                c = !0;
                d = g;
                b = e || "text/plain";
                try {
                    document.execCommand("paste") || (c = !1, f(Error("Unable to paste. Pasting only works in Internet Explorer at the moment.")))
                } catch (m) {
                    c = !1,
                        f(Error(m))
                }
            })
        }
    }();
    "undefined" === typeof ClipboardEvent && "undefined" !== typeof window.clipboardData && "undefined" !== typeof window.clipboardData.setData && (function(c) {
        function d(a, b) {
            return function() {
                a.apply(b,
                    arguments)
            }
        }
        function b(a) {
            if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof a)
                throw new TypeError("not a function");
            this._value = this._state = null;
            this._deferreds = [];
            l(a, d(f, this), d(k, this))
        }
        function e(a) {
            var b = this;
            return null === this._state ? void this._deferreds.push(a) : void p(function() {
                var c = b._state ? a.onFulfilled : a.onRejected;
                if (null === c)
                    return void (b._state ? a.resolve : a.reject)(b._value);
                var h;
                try {
                    h = c(b._value)
                } catch (d) {
                    return void a.reject(d)
                }
                a.resolve(h)
            })
        }
        function f(a) {
            try {
                if (a === this)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (a && ("object" == typeof a || "function" == typeof a)) {
                    var b = a.then;
                    if ("function" == typeof b)
                        return void l(d(b, a), d(f, this), d(k, this))
                }
                this._state = !0;
                this._value = a;
                m.call(this)
            } catch (c) {
                k.call(this, c)
            }
        }
        function k(a) {
            this._state = !1;
            this._value = a;
            m.call(this)
        }
        function m() {
            for (var a = 0, b = this._deferreds.length; b > a; a++)
                e.call(this, this._deferreds[a]);
            this._deferreds = null
        }
        function n(a, b, c, h) {
            this.onFulfilled = "function" ==
            typeof a ? a : null;
            this.onRejected = "function" == typeof b ? b : null;
            this.resolve = c;
            this.reject = h
        }
        function l(a, b, c) {
            var h = !1;
            try {
                a(function(a) {
                    h || (h = !0, b(a))
                }, function(a) {
                    h || (h = !0, c(a))
                })
            } catch (d) {
                h || (h = !0, c(d))
            }
        }
        var p = b.immediateFn || "function" == typeof setImmediate && setImmediate || function(a) {
                setTimeout(a, 1)
            },
            q = Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            };
        b.prototype["catch"] = function(a) {
            return this.then(null, a)
        };
        b.prototype.then = function(a, c) {
            var d = this;
            return new b(function(b,
                                  f) {
                e.call(d, new n(a, c, b, f))
            })
        };
        b.all = function() {
            var a = Array.prototype.slice.call(1 === arguments.length && q(arguments[0]) ? arguments[0] : arguments);
            return new b(function(b, c) {
                function d(e, g) {
                    try {
                        if (g && ("object" == typeof g || "function" == typeof g)) {
                            var k = g.then;
                            if ("function" == typeof k)
                                return void k.call(g, function(a) {
                                    d(e, a)
                                }, c)
                        }
                        a[e] = g;
                        0 === --f && b(a)
                    } catch (l) {
                        c(l)
                    }
                }
                if (0 === a.length)
                    return b([]);
                for (var f = a.length, e = 0; e < a.length; e++)
                    d(e, a[e])
            })
        };
        b.resolve = function(a) {
            return a && "object" == typeof a && a.constructor ===
            b ? a : new b(function(b) {
                b(a)
            })
        };
        b.reject = function(a) {
            return new b(function(b, c) {
                c(a)
            })
        };
        b.race = function(a) {
            return new b(function(b, c) {
                for (var d = 0, e = a.length; e > d; d++)
                    a[d].then(b, c)
            })
        };
        "undefined" != typeof module && module.exports ? module.exports = b : c.Promise || (c.Promise = b)
    }(this), f.copy = function(c) {
        return new Promise(function(d, b) {
            if ("string" !== typeof c && !("text/plain" in c))
                throw Error("You must provide a text/plain type.");
            window.clipboardData.setData("Text", "string" === typeof c ? c : c["text/plain"]) ? d() : b(Error("Copying was rejected."))
        })
    },
        f.paste = function() {
            return new Promise(function(c, d) {
                var b = window.clipboardData.getData("Text");
                b ? c(b) : d(Error("Pasting was rejected."))
            })
        });
    return f
});

