(this["webpackJsonpstart-react-native.dev"] = this["webpackJsonpstart-react-native.dev"] || []).push([[0], {
    154: function (e, t, n) {
        "use strict";
        n.r(t);
        var a, i = n(21), r = n.n(i), c = n(13), o = n(1), s = n.n(o), l = n(31), d = n(25), j = n(125), u = n(211),
            h = n(208), b = n(215), p = n(209), m = n(113), x = n(5), f = n(24), O = n(118), g = n(192), v = n(62),
            y = n(214), w = n(196), k = 1 / ((1 + Math.sqrt(5)) / 2), F = "plan_FgOtX1Qna7k5ey",
            C = "plan_FgOqUllMEWmLSM", S = [{id: C, label: "Monthly", price: 2300, type: "monthly"}, {
                id: F,
                label: "Annual",
                price: 900,
                type: "annual",
                mostPopular: !0
            }, {id: "sku_FgOucRHEltY7Mp", label: "Lifetime", price: 6e4, type: "lifetime"}];
        !function (e) {
            e.HOME = "/", e.AUTH = "/auth", e.SIGN_IN = "/sign-in", e.REANIMATED2 = "/reanimated-2", e.REANIMATED1 = "/reanimated-1", e.YOUTUBE_FRIENDS = "/youtube-friends", e.ACCOUNT = "/account", e.GITHUB = "/account/github", e.EMAIL_SENT = "/email-sent", e.LESSON = "/lessons/:id", e.SUPPORT = "/support"
        }(a || (a = {}));
        var z = function (e) {
                return "/lessons/".concat(e)
            }, T = (new Intl.DateTimeFormat("default", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }), new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2})), M = n(2),
            B = n.n(M), I = n(4), N = n(19), R = function () {
                var e = Object(I.a)(B.a.mark((function e() {
                    var t, n;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = Object(N.a)(), n = Object(N.b)(t, "user"), e.next = 4, n();
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), E = function () {
                var e = Object(I.a)(B.a.mark((function e(t) {
                    var n, a, i, r;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.plan, a = t.type, i = Object(N.a)(), r = Object(N.b)(i, "createSession"), e.next = 5, r({
                                    plan: n,
                                    type: a
                                });
                            case 5:
                                return e.abrupt("return", e.sent.data);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), A = function () {
                var e = Object(I.a)(B.a.mark((function e() {
                    var t, n;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = Object(N.a)(), n = Object(N.b)(t, "createPortalSession"), e.next = 4, n();
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), _ = function () {
                var e = Object(I.a)(B.a.mark((function e(t, n) {
                    var a, i;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return a = Object(N.a)(), i = Object(N.b)(a, "addGithubUsername"), e.next = 4, i({
                                    username: t,
                                    oldUsername: n
                                });
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }(), D = function () {
                var e = Object(I.a)(B.a.mark((function e() {
                    var t, n;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = Object(N.a)(), n = Object(N.b)(t, "getGithubAccesses"), e.next = 4, n();
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), G = function () {
                var e = Object(I.a)(B.a.mark((function e(t) {
                    var n, a;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(N.a)(), a = Object(N.b)(n, "addGithubAccess"), e.next = 4, a({repo: t});
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), L = function () {
                var e = Object(I.a)(B.a.mark((function e(t) {
                    var n, a;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(N.a)(), a = Object(N.b)(n, "removeGithubAccess"), e.next = 4, a({repo: t});
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), W = function () {
                var e = Object(I.a)(B.a.mark((function e(t) {
                    var n, a;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(N.a)(), a = Object(N.b)(n, "getGithubName"), e.next = 4, a({username: t});
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), U = function () {
                var e = Object(I.a)(B.a.mark((function e(t) {
                    var n, a;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = Object(N.a)(), a = Object(N.b)(n, "updateNameConstent"), e.next = 4, a({consent: t});
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), P = function () {
                var e = Object(I.a)(B.a.mark((function e() {
                    var t, n;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return t = Object(N.a)(), n = Object(N.b)(t, "applyYouTubeCoupon"), e.next = 4, n();
                            case 4:
                                return e.abrupt("return", e.sent.data);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), H = function () {
                var e = Object(I.a)(B.a.mark((function e() {
                    var t, n;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return "https://js.stripe.com/v3/", t = "stripe", n = document.getElementById(t), e.abrupt("return", new Promise((function (e, a) {
                                    if (n) e(Stripe); else {
                                        var i = document.createElement("script");
                                        i.src = "https://js.stripe.com/v3/", i.id = t;
                                        i.addEventListener("load", (function () {
                                            return e(Stripe)
                                        }), {once: !0}), i.addEventListener("error", (function (e) {
                                            return a(e)
                                        }), {once: !0}), document.head.appendChild(i)
                                    }
                                })));
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(), q = function (e, t) {
                return Object(o.useEffect)((function () {
                    e()
                }), t)
            }, V = n(36), Y = n(39), J = n(182), X = n(0), $ = function () {
                return Object(X.jsx)(u.a, {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    children: Object(X.jsx)(J.a, {size: 100, color: "primary"})
                })
            }, K = null, Z = !1, Q = function (e, t) {
                return t
            }, ee = "signInEmail", te = Object(o.createContext)(), ne = function (e) {
                var t = e.component, n = Object(o.useContext)(te), i = Object(c.a)(n, 1)[0];
                return i === K ? Object(X.jsx)($, {}) : i ? Object(X.jsx)(d.a, {to: a.ACCOUNT}) : Object(X.jsx)(t, {})
            }, ae = function (e) {
                return function () {
                    return Object(X.jsx)(ne, {component: e})
                }
            }, ie = function (e) {
                return function (t) {
                    var n = Object(o.useContext)(te), i = Object(c.a)(n, 1)[0];
                    return i === K ? Object(X.jsx)($, {}) : i === Z ? window.location.pathname === a.YOUTUBE_FRIENDS ? Object(X.jsx)(d.a, {to: "".concat(a.SIGN_IN, "?r=").concat(window.location.pathname)}) : Object(X.jsx)(d.a, {to: a.SIGN_IN}) : Object(X.jsx)(e, Object(f.a)({}, Object(f.a)(Object(f.a)({}, t), {}, {user: i})))
                }
            }, re = function (e) {
                var t = e.children, n = Object(Y.a)(), a = Object(o.useReducer)(Q, null), i = Object(c.a)(a, 2), r = i[0],
                    s = i[1];
                return q(Object(I.a)(B.a.mark((function e() {
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Object(Y.b)(n, function () {
                                    var e = Object(I.a)(B.a.mark((function e(t) {
                                        var n;
                                        return B.a.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 3, R();
                                                case 3:
                                                    n = e.sent, s(n), e.next = 8;
                                                    break;
                                                case 7:
                                                    s(Z);
                                                case 8:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function (t) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), []), Object(X.jsx)(te.Provider, {value: [r, s], children: t})
            }, ce = void 0, oe = function (e, t) {
                return t
            }, se = {
                "react-native-gestures-and-animations": ce,
                "react-native-gestures-and-animations-2": ce,
                "react-native-fashion": ce,
                "can-it-be-done-in-react-native-private": ce
            }, le = Object(o.createContext)(), de = function (e) {
                var t = e.children, n = Object(o.useReducer)(oe, se), a = Object(c.a)(n, 2), i = a[0], r = a[1];
                return q(Object(I.a)(B.a.mark((function e() {
                    var t;
                    return B.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, D();
                            case 2:
                                t = e.sent, r(t);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), []), Object(X.jsx)(le.Provider, {value: [i, r], children: t})
            }, je = n(184), ue = n(185), he = n(186), be = n(187), pe = n(188), me = n(51), xe = n.n(me), fe = n(59),
            Oe = n.n(fe), ge = function (e) {
                var t = e.block, n = e.children, a = Object(V.a)();
                return Object(X.jsx)("span", {
                    style: {
                        padding: t ? 8 : 4,
                        overflow: "auto",
                        display: t ? "block" : "inline",
                        backgroundColor: t ? a.palette.grey[100] : "transparent",
                        borderRadius: a.shape.borderRadius
                    },
                    children: Object(X.jsx)(v.a, {
                        variant: "overline",
                        style: {lineHeight: t ? 2.66 : "inherit"},
                        noWrap: !0,
                        children: n
                    })
                })
            }, ve = n.p + "static/media/the-heart-of-the-matter.affc999c.svg",
            ye = n.p + "static/media/development-setup.230f6c81.svg",
            we = n.p + "static/media/transitions2.2ce3f486.svg", ke = n.p + "static/media/useTransition.72dc5056.svg",
            Fe = n.p + "static/media/timing.e475c2d5.svg", Ce = n.p + "static/media/pan-gesture2.0d468c09.svg",
            Se = n.p + "static/media/decay.f91981dd.svg", ze = n.p + "static/media/spring.3a57f9d1.svg",
            Te = n.p + "static/media/swiping.ac3a9beb.svg", Me = n.p + "static/media/svg.0ca041e9.svg",
            Be = n.p + "static/media/advanced-transformations.1139e204.svg",
            Ie = n.p + "static/media/dynamic-springs.049d317d.svg", Ne = n.p + "static/media/drag-to-sort.dd242f66.svg",
            Re = n.p + "static/media/trigonometry.fd22bbf3.svg", Ee = n.p + "static/media/bezier.cf299579.svg",
            Ae = n.p + "static/media/circular-progress.52eba7ba.svg",
            _e = n.p + "static/media/shape-morphing.2700e9b3.svg", De =
                [
                {
                id: "the-heart-of-the-matter",
                title: "The Heart of the Matter",
                description: "Welcome to this course on Declarative Gestures and Animations. In this video, we explore the strategies and APIs that enable us to build gestures and animations as smooth as butter.",
                thumbnail: ve,
                duration: 10,
                free: !0,
                codename: ""
            }, {
                id: "development-setup",
                title: "Development Setup",
                description: "This lesson contains all the information necessary for your project to be up and running with React Native Gesture Handler and Reanimated. We also reconcile differences between development environment: not using Expo or TypeScript, for instance.",
                thumbnail: ye,
                duration: 9,
                free: !0,
                codename: ""
            }, {
                id: "value-clocks-and-identity",
                title: "Values, Clocks, and their Identities",
                description: "To declare gestures and animations on the UI from JavaScript, Reanimated provides interesting concepts that we will introduce in this lesson.",
                thumbnail: Be,
                duration: 25,
                codename: "ClockValuesAndIdentities",
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsxs)(v.a, {
                            gutterBottom: !0,
                            children: ["This video was recorded with a version of redash that has a different redash. The syntax for", Object(X.jsx)(ge, {children: "useValue([0, 0, 1])"}), "is now", Object(X.jsx)(ge, {children: "useValue(0, 0, 1)"}), "(no array)."]
                        })]
                    })
                }
            }, {
                id: "transitions",
                title: "Transitions",
                description: "Transitions are the easiest way to animate components with React Native. In this lesson, we build three different layouts and declare a state that enables us to switch from one design to the other. From there, we set up a simple transition that animates between each state.",
                thumbnail: we,
                duration: 10,
                codename: "Transitions"
            }, {
                id: "useTransition",
                title: "useTransition",
                description: "useTransition is a utility function that provides an animation value linked to a transition. This value enables you to animate properties that are not supported by the transition API otherwise.",
                thumbnail: ke,
                duration: 14,
                codename: "UseTransition"
            }, {
                id: "timing",
                title: "Timing",
                description: "Harnessing the power of clocks in Reanimated is the key to success to build incredible animations that can seamlessly interoperate with sophisticated gestures. To get started, we build a simple timing function that can be looped, interrupted, and restarted.",
                thumbnail: Fe,
                duration: 22,
                codename: "Timing"
            }, {
                id: "pan-gesture",
                title: "Pan Gesture",
                description: "In this lesson, we build our first gesture using Gesture Handler. We drag a card around and make sure that we remember its position when releasing the gesture as well as the bounds of its movements within its parent container.",
                thumbnail: Ce,
                duration: 15,
                codename: "PanGesture"
            }, {
                id: "decay",
                title: "Decay",
                description: "For the card dragging to feel more natural, we add a decay animation when releasing the gesture. Such animation needs to be nicely interruptible so that when the user drags the card while the decay animation is running the experience feels seamless.",
                duration: 11,
                thumbnail: Se,
                codename: "Decay"
            }, {
                id: "spring",
                title: "Spring",
                description: "Spring animations are the second type of physic based animation available in Reanimated. Once the user releases the gesture, we snap the card back to a specific position. As always, the animation is fully interruptible.",
                duration: 6,
                thumbnail: ze,
                codename: "Spring"
            }, {
                id: "swiping",
                title: "Swiping",
                description: "To implement a card-swiping interaction, we need to develop a small algorithm to decide where the card should snap based on its velocity and position when releasing the gesture. Finally, we need to properly configure the spring animation to call back into the JavaScript thread once the animation is over.",
                duration: 41,
                thumbnail: Te,
                codename: "Swiping"
            }, {
                id: "dynamic-springs",
                title: "Dynamic Springs",
                description: "So far, our animations were following the same flow: the gesture drives the animation, and once it's over, we start a clock that triggers a spring or a decay. In this lesson, we do something a bit more dynamic. For each frame, we use the spring function to set the position of our elements. These dynamic animations are the key to sophisticated physics-based animations.",
                duration: 12,
                thumbnail: Ie,
                codename: "DynamicSpring"
            }, {
                id: "drag-to-sort",
                title: "Drag to Sort",
                description: "Ordering lists by dragging its items is a very common use-case in mobile apps. Thankfully, by using all the concepts we learned so far, it is a relatively simple user interaction to build.",
                duration: 30,
                thumbnail: Ne,
                codename: "DragToSort"
            }, {
                id: "pinch-gesture",
                title: "Pinch Gesture",
                description: "The Pinch gesture handler is useful to zoom on things. It can also help build other sophisticated gestures. Harnessing this gesture has its challenges. Scale transformations are multiplicative, not additive, which requires us to slightly change the way we think about these animations values. On top of that, we will be careful to provide a consistent user experience on both iOS and Android.",
                thumbnail: n.p + "static/media/pinch.84b5901a.svg",
                duration: 52,
                codename: "PinchGesture"
            }, {
                id: "svg",
                title: "SVG Animations",
                description: "React Native SVG integrates seamlessly with Gesture Handler and Reanimated. In this lesson, we build a simple user interaction using these three modules.",
                duration: 17,
                thumbnail: Me,
                codename: "Svg"
            }, {
                id: "trigonometry",
                title: "Trigonometry",
                description: "In this lesson, we use basic trigonometry concepts to build the activity rings from iOS.",
                duration: 22,
                thumbnail: Re,
                codename: "Trigonometry"
            }, {
                id: "circular-slider",
                title: "Circular Slider",
                description: "In this lesson, we take advantage of all the SVG and trigonometry concepts we learned to build a circular slider. This example will lead us in learning more advanced trigonometry concepts.",
                thumbnail: Ae,
                duration: 37,
                codename: "CircularSlider",
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsx)(v.a, {
                            gutterBottom: !0,
                            children: "In this video, we build on our circular progress bar using SVG, but we also feature a similar progress bar that is built with SVG. How to create such a progress bar is described in the video link below. The SVG progress bar has the advantage of being more flexible and can be transparent. The non-SVG implementation has better performance as it relies only on animating properties that can be GPU-accelerated."
                        }), Object(X.jsx)(je.a, {
                            component: "nav",
                            children: Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://www.youtube.com/watch?v=K6X9Xcy6oio",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(Oe.a, {})}), Object(X.jsx)(pe.a, {primary: "Without SVG: Circular Progress Bar"})]
                            })
                        })]
                    })
                }
            }, {
                id: "bezier",
                title: "Bezier Curves",
                description: "Bezier Curves are an incredibly powerful mathematical tool to build vector drawings. By understanding how Bezier curves work, we will be able to animate them.",
                thumbnail: Ee,
                duration: 27,
                codename: "BezierCurves",
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsx)(v.a, {
                            gutterBottom: !0,
                            children: "B\xe9zier Curves are fun and powerful. Below are two go-to resources on that topic. The first link is a beginner introduction and assumes zero knowledge on that topic. The second link is an exhaustive documentation that includes pretty much everything there is to know about this topic."
                        }), Object(X.jsxs)(je.a, {
                            component: "nav",
                            children: [Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(xe.a, {})}), Object(X.jsx)(pe.a, {primary: "Nerding Out With Bezier Curves"})]
                            }), Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://pomax.github.io/bezierinfo/",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(xe.a, {})}), Object(X.jsx)(pe.a, {primary: "A Primer on B\xe9zier Curves"})]
                            })]
                        })]
                    })
                }
            }, {
                id: "shape-morphing",
                title: "Shape Morphing",
                description: "Thanks to our understanding of Bezier curves, we can interpolate one SVG path to another, thus creating beautiful shape morphing.",
                thumbnail: _e,
                duration: 31,
                codename: "PathMorphing"
            }]
            , Ge = n.p + "static/media/intro.e4e0de17.svg", Le = n.p + "static/media/transitions2.e287d28e.svg",
            We = n.p + "static/media/pangesture.d6967911.svg", Ue = n.p + "static/media/circular-progress.edb5c959.svg",
            Pe = n.p + "static/media/graph.5f338223.svg", He = n.p + "static/media/timing.5ecc0342.svg",
            qe = n.p + "static/media/drag-to-sort.369868cd.svg", Ve = n.p + "static/media/spring.603fcd7c.svg",
            Ye = n.p + "static/media/custom-animations2.3f837f00.svg", Je = n.p + "static/media/firecamp.339939cf.svg",
            Xe = n.p + "static/media/dev-setup.121acf1d.svg", $e = n.p + "static/media/cubic-bezier.ab8f27f7.svg",
            Ke = n.p + "static/media/shape-morphing.30d71ca1.svg", Ze =
                [
                    {
                id: "heart-of-the-matter",
                title: "The Heart of the Matter",
                description: "Welcome to this course on Declarative Gestures and Animations. In this video, we explore the strategies and APIs that enable us to build gestures and animations as smooth as butter.",
                thumbnail: Je,
                duration: 4,
                free: !0,
                codename: ""
            }, {
                id: "dev-setup",
                title: "Development Setup",
                description: "This lesson contains all the information necessary for your project to be up and running with React Native Gesture Handler and Reanimated. We also reconcile differences between development environment: not using Expo or TypeScript, for instance.",
                thumbnail: Xe,
                duration: 3,
                free: !0,
                codename: ""
            }, {
                id: "intro",
                title: "Worklets & Shared Values",
                description: "Reanimated is using animation worklets: JavaScript functions that run on the UI thread to compute animation frames. These worklets have exciting properties and ways to communicate to the main JavaScript thread. Worklets operate with shared values: animation values that are available on both the UI and JS thread.",
                thumbnail: Ge,
                duration: 9,
                codename: "Worklets"
            }, {
                id: "pangesture2",
                title: "Pan Gesture",
                description: "In this lesson, we build our first gesture. We drag a card around and make sure that the movements of the card are within the bounds of the container. We also remember the position across different gestures. When the gesture ends, we add some momentum to the card, giving it a feel of being a physical object.",
                thumbnail: We,
                duration: 14,
                codename: "PanGesture"
            }, {
                id: "transitions2",
                title: "Transitions",
                description: "Transitions are the easiest way to animate React Native components. And in this lesson, we take a look at how this technic looks like with Reanimated 2. Using transitions, we can assign an animation value to a React state change or an animation value change.",
                thumbnail: Le,
                duration: 14,
                codename: "Transitions"
            }, {
                id: "higher-order-animations",
                title: "Higher-order Animations",
                description: "Animations in Reanimated 2 are first-class citizens. They receive other animations as parameters, enabling an incredible level of composability that we are showcasing in this lesson.",
                thumbnail: He,
                duration: 12,
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsxs)(v.a, {
                            gutterBottom: !0,
                            children: ["This code example from this video has been updated. The type definitions shown in", Object(X.jsx)(ge, {children: "Animation.ts"}), "are now available via redash."]
                        })]
                    })
                }
            }, {
                id: "custom-animations",
                title: "Custom Animations",
                description: "So far, animations have been a black box for us. We've learned how to use and compose them, but we don't know to build them yet. In this lesson, we write custom animations to get familiarized with their internal API.",
                thumbnail: Ye,
                duration: 33,
                codename: "Animations"
            }, {
                id: "circularslider",
                title: "Circular Slider",
                description: "In this lesson, we build a circular slider by using easy trigonometry concepts. We learn to smoothly go from the canvas coordinate system to the polar coordinate system back and forth to have the cursor moving around a circle. From there, we use SVG animations to draw the circular progress bar.",
                thumbnail: Ue,
                duration: 25,
                codename: "CircularSlider"
            }, {
                id: "graph",
                title: "Graph Interactions",
                description: "In this lesson, we build a user interaction on top of an SVG graph created with the help of D3. Using mathematical tools based on cubic B\xe8zier curves, and having scale functions available both on UI threads, we build a delightful user interaction on our Graph. ",
                thumbnail: Pe,
                duration: 23,
                codename: "Graph"
            }, {
                id: "swiping2",
                title: "Swiping",
                description: "To implement a card-swiping interaction, we need to develop a small algorithm to decide where the card should snap based on its velocity and position when releasing the gesture. Finally, we need to properly configure the spring animation to call back into the JavaScript thread once the animation is over.",
                thumbnail: n.p + "static/media/swiping.9ae46d65.svg",
                duration: 34,
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsx)(v.a, {
                            gutterBottom: !0,
                            children: "The trigonometry part is explained a bit further in the video below."
                        }), Object(X.jsx)(je.a, {
                            component: "nav",
                            children: Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://youtu.be/m3KqkvqfI48?t=53",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(Oe.a, {})}), Object(X.jsx)(pe.a, {primary: "The 5-minute React Native Tinder Swipe"})]
                            })
                        })]
                    })
                }
            }, {
                id: "dynamic-springs2",
                title: "Dynamic Springs",
                description: "In this lesson, we drive the movement of one item via a Pan gesture. The second item follows the position of the first item with a spring transition to add an effect of inertia. The third item follows the second item in the same manner and so on.",
                thumbnail: Ve,
                duration: 5,
                codename: "DynamicSpring"
            }, {
                id: "drag-to-sort2",
                title: "Drag to Sort",
                description: "Ordering lists by dragging its items is a very common use-case in mobile apps. In this lesson, we are building such a user-interaction. It will require us to perfectly orchestrate gesture events and transitions on changes in the order of items.",
                thumbnail: qe,
                duration: 26,
                codename: "DragToSort"
            }, {
                id: "cubic-bezier",
                title: "Cubic B\xe9zier",
                description: "Bezier Curves are an incredibly powerful mathematical tool to build vector drawings. By understanding how Bezier curves work, we will be able to animate them.",
                thumbnail: $e,
                duration: 19,
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsx)(v.a, {
                            gutterBottom: !0,
                            children: "B\xe9zier Curves are fun and powerful. Below are two go-to resources on that topic. The first link is a beginner introduction and assumes zero knowledge on that topic. The second link is an exhaustive documentation that includes pretty much everything there is to know about this topic."
                        }), Object(X.jsxs)(je.a, {
                            component: "nav",
                            children: [Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://www.freecodecamp.org/news/nerding-out-with-bezier-curves-6e3c0bc48e2f/",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(xe.a, {})}), Object(X.jsx)(pe.a, {primary: "Nerding Out With Bezier Curves"})]
                            }), Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://pomax.github.io/bezierinfo/",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(xe.a, {})}), Object(X.jsx)(pe.a, {primary: "A Primer on B\xe9zier Curves"})]
                            })]
                        })]
                    })
                }
            }, {
                id: "shape-morphing2",
                title: "Morphing Shapes",
                description: "Thanks to our understanding of Bezier curves, we can interpolate one SVG path to another, thus creating beautiful shape morphing.",
                thumbnail: Ke,
                duration: 12,
                content: function () {
                    return Object(X.jsxs)(X.Fragment, {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Notes"
                        }), Object(X.jsx)(v.a, {
                            gutterBottom: !0,
                            children: "This example is based on Cuberto's development lab Rate-It open-source project written in SwiftUI."
                        }), Object(X.jsx)(je.a, {
                            component: "nav",
                            children: Object(X.jsxs)(ue.a, {
                                component: he.a,
                                href: "https://github.com/Cuberto/rate-it",
                                target: "_blank",
                                color: "inherit",
                                button: !0,
                                children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(xe.a, {})}), Object(X.jsx)(pe.a, {primary: "Rate-It"})]
                            })
                        })]
                    })
                }
            }, {
                id: "colors",
                title: "Colors",
                description: "Colors are a pellicular type of animation values. Their representation can be a string or an integer. In this lesson, we learn to go from one color space to the other, encode and decode colors, and interpolate them.",
                thumbnail: n.p + "static/media/colors.17515047.svg",
                duration: 0,
                comingSoon: !0
            }]
            , Qe = Object(f.a)(Object(f.a)({},
            {
                "the-heart-of-the-matter": "8r1mcb5etl",
                "development-setup": "tqtgyhuisg",
                "value-clocks-and-identity": "onp3cs3w45",
                transitions: "ibde7mgj32",
                useTransition: "hwitr31ipk",
                "dark-mode": "384kmkm1pa",
                timing: "u1syhpu3uc",
                "pan-gesture": "11n7iehbhg",
                decay: "uvb17fg8rn",
                spring: "bdi8okw6n0",
                swiping: "9jqrwz8jhf",
                "dynamic-springs": "qysmp3dpj5",
                "drag-to-sort": "tqy6676z1z",
                svg: "ozqi96cpv7",
                trigonometry: "kspbzxix1r",
                "circular-slider": "4hdd6sehva",
                bezier: "gf29187x08",
                "shape-morphing": "2l2mq17ty4",
                d3: "",
                "color-interpolation": "",
                "pinch-gesture": "eu7yjb5vlf",
                tap: "",
                memoization: "",
                sharedTransitions: ""
            }),
            {
                "dev-setup": "lf4dnbqfzi",
                "heart-of-the-matter": "ciexjkx2e6",
                intro: "0kx9speuhw",
                transitions2: "ea0kxwmxq6",
                pangesture2: "7nw9hbf5em",
                "higher-order-animations": "rtt22zcqdh",
                "custom-animations": "kkfuy8q65u",
                circularslider: "tan1n7f195",
                graph: "97bu07vo0e",
                "dynamic-springs2": "c7hqn7nfks",
                "drag-to-sort2": "t191bgltgp",
                "cubic-bezier": "d6440q79zv",
                "shape-morphing2": "yj195v0syz",
                swiping2: "n0c7dq4as3",
                colors: ""
            }), et = {"gestures-and-animations": De, "gestures-and-animations-2": Ze}, tt = n(119), nt = n.n(tt),
            at = n(55), it = n.n(at), rt = n(89), ct = Object(O.a)((function () {
                return {container: {display: "flex", flex: 1}}
            })), ot = function (e) {
                var t = e.to, n = e.disableRipple, a = e.children, i = e.className, r = e.onClick, c = ct(),
                    o = t ? l.b : void 0;
                return Object(X.jsx)(rt.a, {
                    className: [c.container, i].filter((function (e) {
                        return e
                    })).join(" "), to: t, disableRipple: n, onClick: r, component: o, children: a
                })
            }, st = n(126), lt = ["children", "disabled"], dt = Object(o.memo)((function (e) {
                var t = e.children, n = e.disabled, a = Object(st.a)(e, lt), i = Object(V.a)();
                return Object(X.jsx)(u.a, Object(f.a)(Object(f.a)({
                    borderRadius: i.shape.borderRadius,
                    border: "".concat(n ? 0 : 1, "px solid"),
                    borderColor: i.palette.divider
                }, a), {}, {children: t}))
            })), jt = Object(O.a)((function (e) {
                return {
                    container: function (t) {
                        var n = t.comingSoon;
                        return {
                            display: "flex",
                            flex: 1,
                            color: e.palette.common["light" === e.palette.type ? "black" : "white"],
                            "& img": {
                                transition: "transform ".concat(e.transitions.duration.standard, "ms"),
                                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            },
                            "& .thumbnail": {
                                backgroundColor: "transparent",
                                transition: "background-color ".concat(e.transitions.duration.standard, "ms"),
                                transitionTimingFunction: e.transitions.easing.easeInOut
                            },
                            "& .play-button": {
                                opacity: 0,
                                transition: "opacity ".concat(e.transitions.duration.standard, "ms"),
                                transitionTimingFunction: e.transitions.easing.easeInOut
                            },
                            "&:hover": {
                                cursor: n ? "default" : "pointer",
                                "& .thumbnail": {backgroundColor: n ? "transparent" : e.palette.grey[100]},
                                "& img": {transform: "scale(".concat(n ? 1 : 1.15, ")"), transition: "transform 8000ms"},
                                "& .play-button": {opacity: n ? 0 : 1}
                            }
                        }
                    },
                    thumbnail: Object(x.a)({padding: e.spacing(), height: 200}, e.breakpoints.up("sm"), {height: 290}),
                    lessonNumber: {marginLeft: e.spacing()}
                }
            })), ut = function (e) {
                var t = e.lesson, n = e.index, a = jt(t);
                return Object(X.jsx)(ot, {
                    to: "".concat(t.comingSoon ? "" : z(t.id)), disableRipple: !0, children: Object(X.jsxs)(dt, {
                        textAlign: "start",
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        className: a.container,
                        children: [Object(X.jsxs)(u.a, {
                            display: "flex",
                            flexDirection: "column",
                            flex: 1,
                            overflow: "hidden",
                            position: "relative",
                            children: [Object(X.jsx)(u.a, {
                                className: "thumbnail",
                                textAlign: "center",
                                children: Object(X.jsx)("img", {
                                    src: t.thumbnail,
                                    alt: "lesson thumbnail",
                                    className: a.thumbnail
                                })
                            }), Object(X.jsx)(u.a, {
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                color: "white",
                                fontSize: 128,
                                className: "play-button",
                                children: Object(X.jsx)(it.a, {color: "inherit", fontSize: "inherit"})
                            })]
                        }), Object(X.jsxs)(u.a, {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: 2,
                            flex: 1,
                            children: [Object(X.jsxs)(u.a, {
                                children: [Object(X.jsxs)(u.a, {
                                    color: "grey.500",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingBottom: 2,
                                    children: [Object(X.jsx)(nt.a, {
                                        color: "inherit",
                                        fontSize: "small"
                                    }), Object(X.jsx)(v.a, {
                                        variant: "caption",
                                        color: "inherit",
                                        className: a.lessonNumber,
                                        children: "Lesson ".concat(n + 1).toUpperCase()
                                    })]
                                }), Object(X.jsx)(v.a, {
                                    variant: "h4",
                                    gutterBottom: !0,
                                    children: t.title
                                }), Object(X.jsx)(v.a, {gutterBottom: !0, children: t.description})]
                            }), Object(X.jsxs)(u.a, {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [t.comingSoon && Object(X.jsx)(v.a, {
                                    variant: "button",
                                    children: "Coming Soon"
                                }), !t.comingSoon && Object(X.jsx)(v.a, {children: "".concat(t.duration, " minutes video")})]
                            })]
                        })]
                    })
                })
            }, ht = Object(o.memo)((function (e) {
                var t = e.course, n = et[t];
                return Object(X.jsx)(X.Fragment, {
                    children: n.map((function (e, t) {
                        return Object(X.jsx)(u.a, {
                            marginBottom: 2,
                            children: Object(X.jsx)(ut, {lesson: e, index: t})
                        }, e.id)
                    }))
                })
            })), bt = Object.keys(et).map((function (e) {
                return et[e]
            })).flat(), pt = function (e) {
                return Object.keys(et).filter((function (t) {
                    return et[t].find((function (t) {
                        return t.id === e.id
                    }))
                }))[0]
            }, mt = n(120), xt = n.n(mt), ft = n(84), Ot = n.n(ft), gt = function () {
                return Object(X.jsxs)(u.a, {
                    bgcolor: "grey.100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 4,
                    marginTop: "auto",
                    children: [Object(X.jsx)(u.a, {
                        display: "flex",
                        margin: 1,
                        children: Object(X.jsx)(xt.a, {})
                    }), Object(X.jsx)(v.a, {children: "with"}), Object(X.jsx)(u.a, {
                        display: "flex",
                        margin: 1,
                        children: Object(X.jsx)(Ot.a, {})
                    }), Object(X.jsx)(v.a, {children: "in Z\xfcrich"})]
                })
            }, vt = n(190), yt = n(191), wt = function () {
                var e = Object(V.a)().palette.primary.main;
                return Object(X.jsx)(u.a, {
                    display: "flex", alignItems: "center", children: Object(X.jsx)("svg", {
                        viewBox: "0 0 492 437", height: 45, children: Object(X.jsxs)("g", {
                            fillRule: "evenodd", fill: e, children: [Object(X.jsx)("path", {
                                d: "M491.3 218.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V0c-27.5 0-63.5 19.6-99.9 53.6C209.4 19.8 173.4.4 145.9.4v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1C41.2 155.4.7 186.1.7 218.5c0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM246.2 352c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM245.7 85c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zM81.2 269.1c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM135 412c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z",
                                fillRule: "nonzero"
                            }), Object(X.jsx)("circle", {cx: 245.9, cy: 218.5, r: 45.7})]
                        })
                    })
                })
            }, kt = function (e) {
                var t = e.children, n = e.to;
                return Object(X.jsx)(he.a, {component: l.b, underline: "none", to: n, children: t})
            }, Ft = n(189), Ct = Object(O.a)((function (e) {
                return {
                    root: function (t) {
                        var n = t.color;
                        return {
                            boxShadow: "none",
                            "&:hover": {backgroundColor: "default" !== n && n ? e.palette.primary.main : e.palette.grey[100]}
                        }
                    }
                }
            })), St = s.a.memo((function (e) {
                var t = e.children, n = e.to, a = e.color, i = void 0 === a ? "default" : a, r = e.onClick, c = e.loading,
                    o = e.type, s = e.disabled, d = e.href, j = e.className, h = e.fullWidth, b = e.autoFocus, p = e.target,
                    m = Ct({color: i}), x = Object(V.a)(), f = "default" === i ? "outlined" : "contained",
                    O = n ? l.b : void 0, g = "light" === x.palette.type ? "black" : "white",
                    v = x.palette.common["default" === i ? g : "white"];
                return Object(X.jsx)(Ft.a, {
                    disabled: c || s,
                    classes: {root: m.root},
                    to: n,
                    href: d,
                    variant: f,
                    onClick: r,
                    component: O,
                    color: i,
                    type: o,
                    className: j,
                    fullWidth: h,
                    autoFocus: b,
                    target: p,
                    children: Object(X.jsxs)(u.a, {
                        position: "relative",
                        children: [Object(X.jsx)(u.a, {
                            visibility: c ? "hidden" : "visible",
                            children: t
                        }), c && Object(X.jsx)(u.a, {
                            position: "absolute",
                            top: "0",
                            left: "calc(50% - ".concat(12, "px)"),
                            color: v,
                            children: Object(X.jsx)(J.a, {color: "inherit", size: 24})
                        })]
                    })
                })
            })), zt = Object(O.a)((function (e) {
                return {
                    skeleton: {
                        backgroundColor: e.palette.action.hover,
                        borderRadius: e.shape.borderRadius,
                        animation: "$animate 1.5s ease-in-out infinite"
                    }, "@keyframes animate": {"0%": {opacity: 1}, "50%": {opacity: .4}, "100%": {opacity: 1}}
                }
            })), Tt = function (e) {
                var t = e.width, n = e.fullWidth, a = zt();
                return Object(X.jsx)(St, {
                    fullWidth: n,
                    children: Object(X.jsx)(v.a, {
                        variant: "button",
                        className: a.skeleton,
                        children: new Array(t).fill(0).map((function () {
                            return "\xa0"
                        }))
                    })
                })
            }, Mt = Object(O.a)((function (e) {
                return {
                    root: {
                        backgroundColor: "dark" === e.palette.type ? e.palette.common.black : e.palette.common.white,
                        borderBottom: "1px solid",
                        borderBottomColor: e.palette.divider
                    }
                }
            })), Bt = function () {
                var e = Object(o.useContext)(te), t = Object(c.a)(e, 1)[0], n = Mt();
                return Object(X.jsx)(vt.a, {
                    position: "static",
                    elevation: 0,
                    classes: {root: n.root},
                    children: Object(X.jsx)(yt.a, {
                        disableGutters: !0,
                        children: Object(X.jsx)(g.a, {
                            children: Object(X.jsxs)(u.a, {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [Object(X.jsx)(kt, {
                                    to: a.HOME,
                                    children: Object(X.jsxs)(u.a, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: [Object(X.jsx)(u.a, {
                                            marginRight: 1,
                                            children: Object(X.jsx)(wt, {})
                                        }), Object(X.jsx)(v.a, {
                                            variant: "h6",
                                            color: "primary",
                                            children: "Start React Native"
                                        })]
                                    })
                                }), Object(X.jsxs)(u.a, {
                                    minWidth: 90,
                                    children: [t === K && Object(X.jsx)(Tt, {
                                        width: 12,
                                        fullWidth: !0
                                    }), t === Z && Object(X.jsx)(St, {
                                        to: a.SIGN_IN,
                                        fullWidth: !0,
                                        children: "Sign in"
                                    }), t && Object(X.jsx)(St, {to: a.ACCOUNT, fullWidth: !0, children: "Account"})]
                                })]
                            })
                        })
                    })
                })
            }, It = Object(O.a)((function (e) {
                return {
                    container: {flex: 1, display: "flex", flexDirection: "column"},
                    content: {
                        borderWidth: 1,
                        borderColor: e.palette.divider,
                        borderStyle: "solid",
                        borderRadius: e.shape.borderRadius,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                    }
                }
            })), Nt = function (e) {
                var t = e.children, n = e.maxWidth, a = It();
                return Object(X.jsx)(u.a, {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    flex: 1,
                    marginTop: 2,
                    marginBottom: 2,
                    children: Object(X.jsx)(g.a, {
                        classes: {root: a.container},
                        maxWidth: n,
                        children: Object(X.jsx)("div", {className: a.content, children: t})
                    })
                })
            }, Rt = {xs: 2, sm: 3, md: 4}, Et = Object(O.a)((function () {
                return {overlay: {position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex"}}
            })), At = function (e) {
                var t = e.children, n = e.noPadding, a = o.Children.toArray(t), i = Object(c.a)(a, 2), r = i[0], s = i[1],
                    l = Object(V.a)(), d = Et();
                return Object(X.jsxs)(u.a, {
                    display: "flex",
                    flex: 1,
                    position: "relative",
                    children: [Object(X.jsx)(u.a, {display: "flex", flex: 1}), Object(X.jsx)(u.a, {
                        display: {
                            xs: "none",
                            sm: "flex"
                        }, flex: 1, bgcolor: l.palette.primary.light
                    }), Object(X.jsxs)(g.a, {
                        className: d.overlay,
                        children: [Object(X.jsx)(u.a, {
                            display: "flex",
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingRight: n ? 0 : Rt,
                            overflow: "scroll",
                            children: r
                        }), Object(X.jsx)(u.a, {
                            display: {xs: "none", sm: "flex"},
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: n ? 0 : Rt,
                            paddingTop: 2,
                            paddingBottom: n ? 0 : 2,
                            children: s
                        })]
                    })]
                })
            }, _t = n(193), Dt = n(216), Gt = n(195), Lt = n(121), Wt = n.n(Lt), Ut = n(122), Pt = n.n(Ut),
            Ht = {vertical: "bottom", horizontal: "center"}, qt = Object(O.a)((function (e) {
                return {messageIcon: {marginRight: e.spacing()}}
            })), Vt = Object(o.memo)((function (e) {
                var t = e.open, n = e.onClose, a = e.message, i = qt(), r = Object(X.jsxs)(u.a, {
                    display: "flex",
                    alignItems: "center",
                    children: [Object(X.jsx)(Wt.a, {className: i.messageIcon}), Object(X.jsx)(v.a, {children: a})]
                }), c = [Object(X.jsx)(_t.a, {
                    "aria-label": "close",
                    color: "inherit",
                    onClick: n,
                    children: Object(X.jsx)(Pt.a, {})
                }, "close")];
                return Object(X.jsx)(Dt.a, {
                    autoHideDuration: 6e3,
                    open: t,
                    onClose: n,
                    anchorOrigin: Ht,
                    children: Object(X.jsx)(Gt.a, {"aria-describedby": "notification", message: r, action: c})
                })
            })), Yt = n(85), Jt = n.n(Yt), Xt = Object(O.a)((function (e) {
                return {
                    container: {
                        position: "relative",
                        paddingTop: "56.25%",
                        borderTopLeftRadius: e.shape.borderRadius,
                        borderTopRightRadius: e.shape.borderRadius,
                        overflow: "hidden"
                    }, player: {position: "absolute", top: 0, left: 0, right: 0, bottom: 0}
                }
            })), $t = function (e) {
                var t = e.url, n = Object(o.useContext)(te), a = Object(c.a)(n, 1)[0], i = a ? {email: a.email} : {},
                    r = Xt(), s = Object(V.a)();
                return Object(X.jsxs)(u.a, {
                    className: r.container,
                    children: [Object(X.jsx)(u.a, {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        className: r.player,
                        bgcolor: s.palette.grey[100],
                        children: Object(X.jsx)(J.a, {size: 80})
                    }), Object(X.jsx)(Jt.a, {
                        url: "https://wcandillon.wistia.com/medias/".concat(t),
                        width: "100%",
                        height: "100%",
                        className: r.player,
                        config: {wistia: {options: i}},
                        controls: !0
                    })]
                })
            }, Kt = Object(O.a)((function (e) {
                var t;
                return {
                    container: (t = {
                        margin: -2,
                        width: 1024
                    }, Object(x.a)(t, e.breakpoints.down("md"), {width: 640}), Object(x.a)(t, e.breakpoints.down("sm"), {width: 450}), Object(x.a)(t, e.breakpoints.down(450), {width: 250}), Object(x.a)(t, "position", "relative"), Object(x.a)(t, "paddingTop", "56.25%"), Object(x.a)(t, "overflow", "hidden"), t),
                    player: {position: "absolute", top: 0, left: 0, right: 0, bottom: 0}
                }
            })), Zt = function (e) {
                var t = e.id, n = e.playing, a = Kt();
                return Object(X.jsxs)(u.a, {
                    className: a.container,
                    children: [Object(X.jsx)(u.a, {
                        className: a.player,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        children: Object(X.jsx)(J.a, {size: 80})
                    }), Object(X.jsx)(Jt.a, {
                        url: "https://wcandillon.wistia.com/medias/".concat(t),
                        width: "100%",
                        height: "100%",
                        className: a.player,
                        controls: !0,
                        playing: n
                    })]
                })
            };

        function Qt() {
            var e = Object(d.g)().pathname;
            return Object(o.useEffect)((function () {
                window.scrollTo(0, 0)
            }), [e]), null
        }

        var en = Object(O.a)((function (e) {
                return {
                    container: {
                        width: "100%",
                        "& .background": {
                            fill: e.palette.grey[100],
                            transition: "fill 600ms",
                            transitionTimingFunction: e.transitions.easing.easeInOut
                        },
                        "& .overlay": {
                            opacity: 0,
                            transition: "opacity 600ms",
                            transitionTimingFunction: e.transitions.easing.easeInOut
                        },
                        "&:hover": {"& .background": {fill: "transparent"}, "& .overlay": {opacity: 1}}
                    }, hero: {width: "100%"}
                }
            })), tn = function () {
                var e = Object(V.a)(), t = en();
                return Object(X.jsxs)("div", {
                    className: t.container, children: [Object(X.jsxs)("svg", {
                        viewBox: "0 0 649 512", className: t.hero, children: [Object(X.jsxs)("defs", {
                            children: [Object(X.jsxs)("linearGradient", {
                                x1: "10.925%",
                                y1: "4.514%",
                                x2: "50%",
                                y2: "100%",
                                id: "prefix__a",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#89F5E5",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#11C0BE", offset: "100%"})]
                            }), Object(X.jsxs)("linearGradient", {
                                x1: "0%",
                                y1: "50%",
                                x2: "83.633%",
                                y2: "38.375%",
                                id: "prefix__b",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#EE9D8A",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#FB7990", offset: "100%"})]
                            }), Object(X.jsxs)("linearGradient", {
                                x1: "13.401%",
                                y1: "7.557%",
                                x2: "50%",
                                y2: "100%",
                                id: "prefix__c",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#3EEFD5",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#0CBABB", offset: "100%"})]
                            }), Object(X.jsxs)("linearGradient", {
                                x1: "72.029%",
                                y1: "50%",
                                x2: "62.443%",
                                y2: "1.89%",
                                id: "prefix__d",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#3EEFD5",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#29D9CB", offset: "100%"})]
                            }), Object(X.jsxs)("linearGradient", {
                                x1: "50%",
                                y1: "0%",
                                x2: "-136.207%",
                                y2: "294.015%",
                                id: "prefix__f",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#4C5F96",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#A5F7FF", offset: "100%"})]
                            }), Object(X.jsxs)("linearGradient", {
                                x1: "-3.629%",
                                y1: "-112.605%",
                                x2: "72.218%",
                                y2: "89.092%",
                                id: "prefix__h",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#FFEBB4",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#FFB476", offset: "100%"})]
                            }), Object(X.jsxs)("linearGradient", {
                                x1: "62.94%",
                                y1: "104.644%",
                                x2: "20.654%",
                                y2: "-37.644%",
                                id: "prefix__i",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "#0F3EEC",
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {stopColor: "#71FFED", offset: "100%"})]
                            }), Object(X.jsx)("path", {
                                d: "M16.598 41.164c11.43 0 24.566-9.215 24.566-20.582S31.95 0 20.582 0 0 9.215 0 20.582s5.169 20.582 16.598 20.582z",
                                id: "prefix__e"
                            })]
                        }), Object(X.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [Object(X.jsx)("path", {
                                d: "M306.343.077c149.16.021 360.392 288.706 304.759 402.698-55.634 113.991-120 32.822-363.905 97.018C3.292 563.989-19.136 337.629 114.009 264.018 247.153 190.407 157.183.056 306.343.078z",
                                fill: "#D5E5FF"
                            }), Object(X.jsx)("path", {
                                d: "M310.93 37.173a10.211 10.211 0 0111.387-8.894l125.175 15.37c5.6.687 9.584 5.787 8.896 11.384l-15.015 122.29a10.211 10.211 0 01-11.387 8.894l-125.174-15.37c-5.601-.687-9.584-5.787-8.897-11.384l15.016-122.29z",
                                fill: "#86B4FF",
                                opacity: .2
                            }), Object(X.jsx)("path", {
                                d: "M296.207 14.67a10.211 10.211 0 0111.387-8.893l125.174 15.37c5.602.687 9.584 5.787 8.897 11.384L426.65 154.82a10.211 10.211 0 01-11.387 8.894l-125.174-15.37c-5.601-.687-9.584-5.787-8.897-11.384l15.015-122.29z",
                                fill: "#FFF"
                            }), Object(X.jsxs)("g", {
                                transform: "rotate(7 -188.65 2730.303)",
                                stroke: "#3884FF",
                                children: [Object(X.jsx)("path", {
                                    d: "M29.111 29.194c-.757 3.607-.769 6.974-.035 10.099 1.405 5.98 7.817 8.342 9.44 8.342 1.624 0 5.802 0 5.802-5.338 0-5.34-7.603-5.46-9.012-7.752-.66-1.075-.857-2.332-.589-3.771h0a2.736 2.736 0 00-1.467-2.949l-.644-.322a2.452 2.452 0 00-3.495 1.69z",
                                    strokeWidth: 1.71,
                                    strokeLinecap: "round"
                                }), Object(X.jsx)("path", {
                                    d: "M32.521 28.048l1.127-2.69",
                                    strokeWidth: .912
                                }), Object(X.jsx)("path", {
                                    d: "M32.272 27.864l-17.438-7.087a.912.912 0 00-1.24 1.008l2.991 16.408c.47 1.687 1.342 2.39 2.612 2.112 1.27-.28 2.453-1.416 3.546-3.41",
                                    strokeWidth: 1.71,
                                    strokeLinecap: "round"
                                }), Object(X.jsx)("circle", {
                                    strokeWidth: 1.71,
                                    fill: "#FFF",
                                    cx: 14.135,
                                    cy: 20.682,
                                    r: 1.642
                                }), Object(X.jsx)("path", {
                                    d: "M43.665 11.218c2.739-1.912 4.929-3.194 6.569-3.845 1.47-.583 3.789-1.172 6.958-1.768h0a1.824 1.824 0 001.404-1.247c.414-1.32 1.054-2.305 1.918-2.957C61.593.588 63.243.121 65.464 0M33.648 45.06c-2.726 6.124-6.347 11.251-10.864 15.381-4.094 3.743-10.714 8.304-19.86 13.684h0a.912.912 0 00.462 1.698h8.306",
                                    strokeWidth: 1.71,
                                    strokeLinecap: "round"
                                }), Object(X.jsx)("circle", {
                                    strokeWidth: 1.71,
                                    fill: "#FFF",
                                    cx: 22.343,
                                    cy: 60.81,
                                    r: 1.642
                                }), Object(X.jsx)("path", {
                                    d: "M40.614 38.193c1.182-2.126 3.178-4.348 5.988-6.667 2.424-2 5.266-3.47 8.527-4.412h0a.912.912 0 011.126 1.14L52.792 39.71a.912.912 0 001.092 1.15l7.139-1.773",
                                    strokeWidth: 1.71,
                                    strokeLinecap: "round"
                                }), Object(X.jsx)("circle", {
                                    strokeWidth: 1.71,
                                    fill: "#FFF",
                                    cx: 56.087,
                                    cy: 27.978,
                                    r: 1.642
                                }), Object(X.jsx)("circle", {strokeWidth: 1.71, cx: 37.3, cy: 17.399, r: 8.447})]
                            }), Object(X.jsxs)("g", {
                                children: [Object(X.jsx)("path", {
                                    d: "M168.362 132.193a8.957 8.957 0 014.75-11.75l101.832-43.226c4.557-1.934 9.82.193 11.752 4.746l42.23 99.486a8.957 8.957 0 01-4.75 11.75l-101.833 43.226c-4.556 1.934-9.818-.193-11.751-4.746l-42.23-99.486z",
                                    fill: "#86B4FF",
                                    opacity: .2
                                }), Object(X.jsx)("path", {
                                    d: "M148.504 121.484a8.957 8.957 0 014.75-11.75l101.832-43.225c4.557-1.935 9.82.193 11.752 4.746l42.23 99.486a8.957 8.957 0 01-4.75 11.75l-101.832 43.226c-4.557 1.934-9.82-.193-11.752-4.746l-42.23-99.487z",
                                    fill: "#FFF"
                                }), Object(X.jsxs)("g", {
                                    transform: "rotate(-23 430.952 -395.652)",
                                    stroke: "#3884FF",
                                    strokeWidth: 1.5,
                                    children: [Object(X.jsx)("circle", {
                                        strokeLinecap: "round",
                                        cx: 50.62,
                                        cy: 8.16,
                                        r: 8.16
                                    }), Object(X.jsx)("path", {
                                        d: "M8.819 15.282l13.618-12.23L38.2 5.907l4.314 17.677H58.78c.647-1.66 1.503-2.842 2.57-3.549 1.066-.706 2.528-.966 4.385-.78",
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("circle", {
                                        fill: "#FFF",
                                        cx: 43.059,
                                        cy: 23.174,
                                        r: 1.44
                                    }), Object(X.jsx)("circle", {
                                        fill: "#FFF",
                                        cx: 22.259,
                                        cy: 3.174,
                                        r: 1.44
                                    }), Object(X.jsx)("path", {
                                        d: "M43.315 10.182l-3.895 1.357M10.579 18.517c-2.282-4.82-4.294-7.371-6.035-7.656-1.741-.285-3.256.194-4.544 1.437M40.91 17.386c-2.003-1.424-3.844-1.424-5.523 0-2.519 2.135-.45 6.503 0 7.85.45 1.347 0 2.508-2.566 3.323-2.567.815-5.659.414-7.39-2.856-1.732-3.27-.287-10.66 4.835-14.922 3.414-2.842 6.06-4.328 7.935-4.46",
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("path", {
                                        d: "M25.181 25.022l5.742 12.188-21.812 8.335a.8.8 0 00.183 1.541l7.628.98",
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("circle", {
                                        fill: "#FFF",
                                        cx: 31.059,
                                        cy: 36.774,
                                        r: 1.44
                                    }), Object(X.jsx)("path", {
                                        d: "M32.82 28.537h13.943L38.903 42a.8.8 0 00.692 1.203h7.168",
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("circle", {fill: "#FFF", cx: 46.259, cy: 28.774, r: 1.44})]
                                })]
                            }), Object(X.jsxs)("g", {
                                children: [Object(X.jsx)("path", {
                                    d: "M44.728 81.818a9.405 9.405 0 0111.75-6.246l111.084 33.961c4.97 1.52 7.767 6.782 6.249 11.75l-33.18 108.522a9.405 9.405 0 01-11.75 6.246L17.798 202.09c-4.97-1.52-7.767-6.782-6.249-11.749L44.73 81.818z",
                                    fill: "#86B4FF",
                                    opacity: .2
                                }), Object(X.jsx)("path", {
                                    d: "M33.574 60.938a9.405 9.405 0 0111.75-6.246l111.083 33.961c4.97 1.52 7.768 6.783 6.25 11.75l-33.18 108.523a9.405 9.405 0 01-11.75 6.246L6.643 181.21c-4.97-1.52-7.768-6.782-6.25-11.749l33.18-108.523z",
                                    fill: "#FFF"
                                }), Object(X.jsxs)("g", {
                                    transform: "rotate(17 -276.872 215.219)",
                                    stroke: "#3884FF",
                                    children: [Object(X.jsx)("circle", {
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round",
                                        cx: 74.972,
                                        cy: 31.108,
                                        r: 8.568
                                    }), Object(X.jsx)("path", {
                                        d: "M67.165 29.608c-1.18-4.001-3.965-6.357-8.356-7.068-6.587-1.066-13.864 1.066-20.977 10.227-7.112 9.162-.662 13.437 1.245 14.709 1.907 1.272 4.49 1.34 7.708-4.458 3.216-5.798 3.901-7.092 8.652-10.25 3.167-2.107 7.077-2.107 11.728 0M64.21 31.87l-.817 13.755",
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("circle", {
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round",
                                        cx: 63.884,
                                        cy: 47.236,
                                        r: 1.512
                                    }), Object(X.jsx)("circle", {
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round",
                                        cx: 55.82,
                                        cy: 46.228,
                                        r: 1.512
                                    }), Object(X.jsx)("circle", {
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round",
                                        cx: 22.556,
                                        cy: 55.3,
                                        r: 1.512
                                    }), Object(X.jsx)("circle", {
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round",
                                        cx: 54.812,
                                        cy: 10.948,
                                        r: 1.512
                                    }), Object(X.jsx)("path", {
                                        d: "M65.396 47.61l13.079 3.213c.425.105.869-.077 1.098-.45.565-.915 1.215-1.638 1.95-2.168.897-.646 2.137-.845 3.72-.595",
                                        strokeWidth: 1.5,
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("path", {
                                        d: "M65.396 26.067l-9.959-14.274M53.6 10.093L38.778 3.078c-1.144-3.332-3.136-3.959-5.974-1.88M34.57 41.554L23.511 54.23M21.463 56.346l-17.978 9.77a1.008 1.008 0 00.481 1.893h8.146",
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round"
                                    }), Object(X.jsx)("path", {
                                        d: "M41.301 48.175l13.007-1.947",
                                        strokeWidth: 1.008
                                    }), Object(X.jsx)("path", {
                                        d: "M55.437 47.74L44.711 63.269a1.008 1.008 0 001.086 1.547l10.023-2.639",
                                        strokeWidth: 1.575,
                                        strokeLinecap: "round"
                                    })]
                                })]
                            }), Object(X.jsxs)("g", {
                                children: [Object(X.jsx)("path", {
                                    d: "M361.224 202.492c2.573-6.556 3.217-9.833 1.93-9.833-1.287 0-4.736.777-10.346 2.33-.528-7.218-1.687-10.827-3.477-10.827-1.79 0-4.381 3.61-7.774 10.828l19.667 7.502z",
                                    fill: "#FFF"
                                }), Object(X.jsx)("path", {
                                    d: "M47.897 80.257c34.993-.011 73.617 30.106 73.617 69.902s-23.577 59.686-58.561 59.697c-9.035.003-31.436-10.878-31.44-19.901-.002-8.884 7.096-16.114 15.938-16.337l.416-.006c16.97-.005 30.694-13.623 30.7-30.36.005-16.562-21.117-30-31.116-33.358-10-3.359-15.904-4.272-15.907-13.295-.003-9.022 7.319-16.34 16.353-16.342z",
                                    fill: "url(#prefix__a)",
                                    fillRule: "nonzero",
                                    transform: "scale(-1 1) rotate(60 -247.414 -191.838)"
                                }), Object(X.jsx)("path", {
                                    d: "M87.11 71.193C62.717 67.03 50.52 60.773 50.52 52.42c0-8.353 9.147-10.73 27.442-7.13-21.705-29.107-21.705-44.129 0-45.065 21.705-.937 43.785 16.462 66.24 52.195-2.875-15.057-.381-22.585 7.482-22.585s15.44 20.37 22.73 61.108L87.11 71.193z",
                                    fill: "url(#prefix__b)",
                                    transform: "rotate(10 -467.33 2513.523)"
                                }), Object(X.jsx)("path", {
                                    d: "M123.194 285.816c-8.544 1.728-17.153 2.638-25.647 2.638-1.928 0-3.828-.047-5.7-.14-1.395 10.684-4.072 19.13-7.332 21.961-8.075 7.01-48.617 3.572-48.617 3.572-3.644-2.014 3.32-7.046 0-10.098-18.547-17.06-28.354-68.826-32.465-97.226C1.15 195.702 0 184.207 0 172.293c0-64.153 52.05-116.16 116.258-116.16 64.207 0 116.257 52.007 116.257 116.16 0 5.002-.43 9.93-1.254 14.766-1.62 10.289-9.68 60.8-14.29 76.856-5.145 17.911-14.713 37.466-14.713 37.466-3.17 6.885-11.878 12.766-19.44 13.044 0 0-45.135 2.86-53.21-4.15-2.32-2.013 12.067-4.724 0-13.352-3.279-2.344-5.338-6.257-6.414-11.107z",
                                    fill: "url(#prefix__c)",
                                    transform: "rotate(10 -467.33 2513.523)"
                                }), Object(X.jsx)("path", {
                                    d: "M593.586 299.84c-11.798 28.427-16.848 56.843-15.15 85.25 1.697 28.408-.918 52.096-7.846 71.065 8.034-8.173 14.437-16.502 19.21-24.987 4.774-8.484 10.695-22.006 17.766-40.564l-4.46-38.912-9.52-51.852z",
                                    fill: "#1F5967",
                                    opacity: .06
                                }), Object(X.jsx)("path", {
                                    d: "M622.453 409.597c-.177 7.04.34 10.34 1.55 9.9 1.208-.44 4.183-2.35 8.923-5.729 2.966 6.603 5.29 9.598 6.971 8.986 1.682-.613 2.883-4.89 3.602-12.834l-21.046-.323z",
                                    fill: "#FFF"
                                }), Object(X.jsx)("path", {
                                    d: "M5.832 45.865c-10.356 55.696-5.946 86.486 13.232 92.37C38.24 144.117 51.053 99.526 57.5 4.463 46.523-2.22 36.038-1.272 26.046 7.305c-9.993 8.577-16.731 21.43-20.214 38.56z",
                                    fill: "url(#prefix__d)",
                                    transform: "rotate(-20 1115.049 -1471.68)"
                                }), Object(X.jsx)("path", {
                                    d: "M441.542 230.606c3.732.658 6.165 4.548 6.823.816a6.86 6.86 0 10-13.513-2.383c-.658 3.732 2.959.909 6.69 1.567zM521.959 248.651c3.731.658 6.164 4.548 6.822.816a6.86 6.86 0 10-13.513-2.382c-.658 3.731 2.96.908 6.69 1.566z",
                                    fill: "#331523"
                                }), Object(X.jsxs)("g", {
                                    transform: "rotate(10 -983.98 2715.472)",
                                    children: [Object(X.jsx)("mask", {
                                        id: "prefix__g",
                                        fill: "#fff",
                                        children: Object(X.jsx)("use", {xlinkHref: "#prefix__e"})
                                    }), Object(X.jsx)("use", {
                                        fill: "url(#prefix__f)",
                                        xlinkHref: "#prefix__e"
                                    }), Object(X.jsx)("path", {
                                        d: "M0 26.028c3.34-1.196 5.877-.264 7.61 2.797 1.733 3.061 2.404 7.59 2.012 13.587L0 31.603v-5.575z",
                                        fill: "#4C5F96",
                                        mask: "url(#prefix__g)"
                                    }), Object(X.jsx)("path", {
                                        d: "M31.355 26.605c2.97-1.176 5.224-.26 6.765 2.748 1.54 3.008 1.827 8.193.862 15.555L24.276 29.51l7.08-2.905z",
                                        fill: "#4C5F96",
                                        mask: "url(#prefix__g)",
                                        transform: "scale(-1 1) rotate(-24 0 185.623)"
                                    })]
                                }), Object(X.jsx)("path", {
                                    d: "M442.644 408.316s17.053 9.53 35.103 12.212c18.05 2.682 32.139.172 32.139.172l-67.242-12.384z",
                                    fill: "#1F5967",
                                    opacity: .3
                                }), Object(X.jsx)("path", {
                                    d: "M472.416 306.106c-15.91-1.926-25.307-16.146-28.192-42.66 14.593 7.654 30.408 11.346 47.443 11.077 17.036-.27 33.933-4.313 50.69-12.13-30.718 31.067-54.032 45.638-69.941 43.713z",
                                    fill: "#331523"
                                }), Object(X.jsx)("path", {
                                    d: "M80.125 176.58c-12.535 0-21.547-5.279-25.207-12.829-2.124-4.382 15.058-9.9 31.277-8.975 16.219.925 24.118 5.815 22.626 7.222-10.526 9.925-19.327 14.581-28.696 14.581z",
                                    fill: "url(#prefix__h)",
                                    transform: "translate(398.91 130.737)"
                                }), Object(X.jsx)("path", {
                                    d: "M542.358 262.393c-4.616 18.649-9.204 28.5-13.765 29.556-4.56 1.055-8.206-5.874-10.937-20.788 1.913-.494 5.405-1.577 10.473-3.248 5.07-1.672 9.812-3.512 14.229-5.52zM444.224 263.446c1.406 14.516 3.882 21.888 7.429 22.115 3.547.227 8.02-4.47 13.417-14.088-2.621-.572-5.822-1.586-9.604-3.042a125.036 125.036 0 01-11.242-4.985z",
                                    fill: "#FFF"
                                }), Object(X.jsx)("path", {
                                    d: "M451.916 362.17c.138 4.678.514 9.72 1.127 15.124 1.333 11.75 5.127 24.31 11.384 37.682",
                                    stroke: "#15A1A4",
                                    strokeWidth: 2.495,
                                    opacity: .5,
                                    strokeLinecap: "round"
                                })]
                            }), Object(X.jsx)("g", {
                                children: Object(X.jsxs)("g", {
                                    transform: "scale(-1 1) rotate(20 -962.375 -1312.577)",
                                    children: [Object(X.jsx)("path", {
                                        d: "M258.728 116.077l-109.68-37.201a15.356 15.356 0 00-12.366 1.106L7.045 151.718a3.071 3.071 0 00.683 5.651l132.003 35.811 120.062-64.1a7.11 7.11 0 00-1.065-13.003z",
                                        fill: "#FFF",
                                        fillRule: "nonzero"
                                    }), Object(X.jsx)("path", {
                                        fill: "url(#prefix__i)",
                                        opacity: .3,
                                        d: "M229.774 126.135L132.25 177.47l-58.353-15.012 102.467-55.382z"
                                    }), Object(X.jsx)("path", {
                                        d: "M139.232 193.458l126.014-66.784a28.436 28.436 0 0012.786-13.842L322.99 8.829a3.071 3.071 0 00-4.24-3.942L194.209 69.846a28.436 28.436 0 00-13.405 15.044l-41.571 108.568z",
                                        fill: "#3884FF"
                                    }), Object(X.jsx)("ellipse", {
                                        fill: "#FFF",
                                        transform: "rotate(22 233.596 100.284)",
                                        cx: 233.596,
                                        cy: 100.284,
                                        rx: 5.7,
                                        ry: 11.4
                                    })]
                                })
                            })]
                        })]
                    }), Object(X.jsx)(u.a, {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        color: "white",
                        fontSize: 154,
                        visibility: {sm: "visible", md: "hidden"},
                        children: Object(X.jsx)(it.a, {color: "inherit", fontSize: "inherit"})
                    }), Object(X.jsx)(u.a, {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        color: e.palette.grey[100],
                        fontSize: 154,
                        visibility: {sm: "hidden", md: "visible"},
                        className: "overlay",
                        children: Object(X.jsx)(it.a, {color: "inherit", fontSize: "inherit"})
                    })]
                })
            }, nn = n.p + "static/media/looking-for-v1.dca53a39.svg", an = s.a.forwardRef((function (e, t) {
                return Object(X.jsx)(w.a, Object(f.a)({direction: "up", ref: t}, e))
            })), rn = Object(O.a)((function (e) {
                return {
                    container: Object(x.a)({}, e.breakpoints.down("sm"), {flexDirection: "column-reverse"}),
                    left: Object(x.a)({flex: k, padding: e.spacing(2)}, e.breakpoints.down("sm"), {
                        flex: 1,
                        textAlign: "center"
                    }),
                    right: {flex: 1 - k, padding: e.spacing(2), position: "relative"},
                    watchIntro: Object(x.a)({
                        marginLeft: e.spacing(1),
                        marginTop: 0
                    }, e.breakpoints.down("sm"), {marginLeft: 0, marginTop: e.spacing(1)}),
                    thumbnail: Object(x.a)({padding: e.spacing(), height: 200}, e.breakpoints.up("sm"), {height: 290})
                }
            })), cn = function () {
                var e = Object(o.useState)(!1), t = Object(c.a)(e, 2), n = t[0], i = t[1], r = rn(),
                    s = Object(o.useMemo)((function () {
                        return {
                            openModal: function () {
                                return i(!0)
                            }, closeModal: function () {
                                return i(!1)
                            }
                        }
                    }), []), l = s.openModal, d = s.closeModal;
                return Object(X.jsxs)(g.a, {
                    children: [Object(X.jsxs)(u.a, {
                        display: "flex",
                        alignItems: "center",
                        marginTop: 8,
                        marginBottom: 8,
                        className: r.container,
                        children: [Object(X.jsxs)("div", {
                            className: r.left,
                            children: [Object(X.jsx)(v.a, {
                                variant: "h3",
                                children: "Build Delightful"
                            }), Object(X.jsx)(v.a, {
                                variant: "h3",
                                children: "Gestures and Animations"
                            }), Object(X.jsx)(u.a, {
                                marginTop: 2,
                                marginBottom: 2,
                                children: Object(X.jsx)(v.a, {children: "Learn React Native Gesture Handler and Reanimated to build user experiences that run at 60 fps, even on low-end devices."})
                            }), Object(X.jsxs)(u.a, {
                                display: "flex",
                                flexDirection: {xs: "column", md: "row"},
                                width: "fit-content",
                                marginLeft: {xs: "auto", md: 0},
                                marginRight: {xs: "auto", md: 0},
                                children: [Object(X.jsx)(St, {
                                    color: "primary",
                                    to: a.SIGN_IN,
                                    children: "Get Started for $9 a Month"
                                }), Object(X.jsx)(St, {onClick: l, className: r.watchIntro, children: "Watch Intro"})]
                            })]
                        }), Object(X.jsx)(ot, {
                            className: r.right,
                            onClick: l,
                            disableRipple: !0,
                            children: Object(X.jsx)(tn, {})
                        })]
                    }), Object(X.jsx)(y.a, {
                        TransitionComponent: an,
                        keepMounted: !0,
                        onClose: d,
                        "aria-labelledby": "Learn React Native Declarative Gestures and Animations",
                        maxWidth: !1,
                        open: n,
                        children: Object(X.jsx)(Zt, {id: "kq19l1avxq", playing: n})
                    }), Object(X.jsx)(ht, {course: "gestures-and-animations-2"}), Object(X.jsxs)(dt, {
                        padding: 2,
                        display: "flex",
                        flexDirection: {xs: "column", sm: "row"},
                        marginBottom: 2,
                        children: [Object(X.jsx)(u.a, {
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            children: Object(X.jsx)("img", {src: nn, alt: "lesson thumbnail", className: r.thumbnail})
                        }), Object(X.jsxs)(u.a, {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            children: [Object(X.jsx)(v.a, {
                                variant: "h4",
                                gutterBottom: !0,
                                children: "Looking for Reanimated v1?"
                            }), Object(X.jsx)(v.a, {
                                children: Object(X.jsx)(kt, {
                                    to: a.REANIMATED1,
                                    children: "Checkout the v1 videos"
                                })
                            })]
                        })]
                    })]
                })
            }, on = function (e) {
                var t = e.error;
                return Object(X.jsxs)("div", {
                    children: [Object(X.jsx)(v.a, {
                        variant: "h3",
                        gutterBottom: !0,
                        children: "Oups"
                    }), Object(X.jsx)(v.a, {gutterBottom: !0, children: t}), Object(X.jsxs)(v.a, {
                        gutterBottom: !0,
                        children: ["If the problem persist, please\xa0", Object(X.jsx)(he.a, {
                            href: "mailto:wcandillon@gmail.com",
                            children: "contact support"
                        }), "."]
                    }), Object(X.jsx)(u.a, {
                        marginTop: 1,
                        children: Object(X.jsx)(St, {to: a.SIGN_IN, color: "primary", children: "Sign In"})
                    })]
                })
            }, sn = n(210), ln = function (e) {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }, dn = Object(O.a)((function () {
                return {form: {display: "flex", flexDirection: "column"}}
            })), jn = function (e) {
                var t = e.onSubmit, n = dn(), a = Object(o.useState)(""), i = Object(c.a)(a, 2), r = i[0], s = i[1];
                return Object(X.jsxs)("form", {
                    className: n.form,
                    onSubmit: function (e) {
                        t(r), e.preventDefault()
                    },
                    children: [Object(X.jsx)(v.a, {
                        variant: "h4",
                        align: "center",
                        gutterBottom: !0,
                        children: "What is your email?"
                    }), Object(X.jsx)(v.a, {
                        align: "center",
                        gutterBottom: !0,
                        children: "Please enter the email with which you signed-in into Start React Native."
                    }), Object(X.jsx)(sn.a, {
                        id: "email",
                        type: "email",
                        name: "email",
                        autoComplete: "email",
                        variant: "outlined",
                        placeholder: "Email",
                        inputProps: {"aria-label": "email"},
                        onChange: function (e) {
                            var t = e.target.value;
                            return s(t)
                        }
                    }), Object(X.jsx)(u.a, {
                        marginTop: 1,
                        children: Object(X.jsx)(St, {
                            color: "primary", type: "submit", onClick: function () {
                                return t(r)
                            }, fullWidth: !0, disabled: !ln(r), children: "Sign-in"
                        })
                    })]
                })
            }, un = n.p + "static/media/error.1d74ac8e.svg", hn = localStorage.getItem(ee), bn = ae((function () {
                var e = Object(Y.a)(), t = Object(o.useState)(null), n = Object(c.a)(t, 2), i = n[0], r = n[1],
                    s = Object(o.useState)(hn), l = Object(c.a)(s, 2), d = l[0], j = l[1];
                return Object(o.useEffect)((function () {
                    Object(I.a)(B.a.mark((function t() {
                        return B.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!d || null !== i) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, Object(Y.d)(e, d, window.location.href);
                                case 4:
                                    window.location.search.includes("r=".concat(a.YOUTUBE_FRIENDS)) ? window.location.href = "".concat(window.location.origin).concat(a.YOUTUBE_FRIENDS) : window.location.href = "".concat(window.location.origin).concat(a.ACCOUNT), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(1), r(t.t0 && t.t0.message ? t.t0.message : "An error happened");
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                        }), t, null, [[1, 7]])
                    })))()
                }), [e, d, i]), i || !d ? Object(X.jsxs)(At, {
                    children: [null !== i && Object(X.jsx)(on, {error: i}), !d && Object(X.jsx)(jn, {
                        onSubmit: function (e) {
                            return j(e)
                        }
                    }), Object(X.jsx)("img", {src: un, alt: "error", style: {width: "100%", height: "100%"}})]
                }) : Object(X.jsx)($, {})
            })), pn = n.p + "static/media/youtube-friends.e5b56762.svg", mn = n.p + "static/media/sign-in.45a2685e.svg",
            xn = Object(O.a)((function (e) {
                return {form: {display: "flex", flexDirection: "column"}, link: {color: e.palette.primary.main}}
            })), fn = ae((function () {
                var e, t = Object(Y.a)(), n = window.location.search === "?r=".concat(a.YOUTUBE_FRIENDS), i = xn(),
                    r = Object(o.useState)(""), s = Object(c.a)(r, 2), l = s[0], j = s[1], h = Object(o.useState)(!1),
                    b = Object(c.a)(h, 2), p = b[0], m = b[1], x = Object(o.useState)(!1), f = Object(c.a)(x, 2), O = f[0],
                    g = f[1], y = Object(o.useState)(""), w = Object(c.a)(y, 2), k = w[0], F = w[1], C = function () {
                        var e = Object(I.a)(B.a.mark((function e() {
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(""), m(!0), e.prev = 2, e.next = 5, Object(Y.c)(t, l, {
                                            url: "".concat(window.location.origin).concat(a.AUTH).concat(window.location.search),
                                            handleCodeInApp: !0
                                        });
                                    case 5:
                                        localStorage.setItem(ee, l), g(!0), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), F(e.t0 && e.t0.message ? e.t0.message : "An error happened"), m(!1);
                                    case 13:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[2, 9]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return O ? Object(X.jsx)(d.a, {to: a.EMAIL_SENT}) : Object(X.jsxs)(At, {
                    children: [Object(X.jsxs)("form", {
                        className: i.form,
                        onSubmit: function (e) {
                            C(), e.preventDefault()
                        },
                        children: [n && Object(X.jsxs)(X.Fragment, {
                            children: [Object(X.jsx)(v.a, {
                                variant: "h4",
                                align: "center",
                                gutterBottom: !0,
                                children: "Hello YouTube Friend"
                            }), Object(X.jsxs)(v.a, {
                                align: "center",
                                gutterBottom: !0,
                                children: ["We would like to gift you a 50% coupon.", Object(X.jsx)("br", {}), "Sign in and, from there, you will be able to redeem the coupon."]
                            })]
                        }), !n && Object(X.jsxs)(X.Fragment, {
                            children: [Object(X.jsx)(v.a, {
                                variant: "h4",
                                align: "center",
                                gutterBottom: !0,
                                children: "Sign In to Start\xa0React\xa0Native"
                            }), Object(X.jsx)(v.a, {
                                align: "center",
                                children: "Enter your email. We\u2019ll send you a link to sign in to your account."
                            }), Object(X.jsx)(v.a, {
                                align: "center",
                                gutterBottom: !0,
                                children: "If you don't have an account yet, we will create one for you."
                            })]
                        }), Object(X.jsx)(sn.a, {
                            id: "email",
                            type: "email",
                            name: "email",
                            autoComplete: "email",
                            variant: "outlined",
                            placeholder: "Email",
                            inputProps: {"aria-label": "email"},
                            onChange: (e = j, function (t) {
                                var n = t.target.value;
                                return e(n)
                            }),
                            disabled: p
                        }), Object(X.jsx)(u.a, {
                            marginTop: 1,
                            children: Object(X.jsx)(St, {
                                color: "primary",
                                onClick: C,
                                fullWidth: !0,
                                loading: p,
                                children: "Sign In"
                            })
                        }), Object(X.jsx)(u.a, {
                            marginTop: 1,
                            children: Object(X.jsxs)(v.a, {color: "error", children: [k, "\xa0"]})
                        })]
                    }), n && Object(X.jsx)("img", {
                        src: pn,
                        alt: "YouTube",
                        style: {width: "100%", height: "100%"}
                    }), !n && Object(X.jsx)("img", {src: mn, alt: "Sign In", style: {width: "100%", height: "100%"}})]
                })
            })), On = n.p + "static/media/email-sent.671cd9e9.svg", gn = Object(o.memo)((function () {
                return Object(X.jsxs)(At, {
                    noPadding: !0,
                    children: [Object(X.jsxs)("div", {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            align: "center",
                            children: "Magic link sent!"
                        }), Object(X.jsx)(v.a, {
                            align: "center",
                            children: "Check your inbox and use the magic link to sign in."
                        })]
                    }), Object(X.jsx)("img", {
                        src: On,
                        alt: "Email Sent",
                        style: {width: "100%", height: "auth", alignSelf: "flex-end"}
                    })]
                })
            })), vn = ie((function () {
                var e = Object(o.useState)(!1), t = Object(c.a)(e, 2), n = t[0], i = t[1], r = Object(o.useState)(!1),
                    s = Object(c.a)(r, 2), l = s[0], j = s[1], h = Object(o.useState)(!1), b = Object(c.a)(h, 2), p = b[0],
                    m = b[1], x = function () {
                        var e = Object(I.a)(B.a.mark((function e() {
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return m(!0), e.prev = 1, e.next = 4, P();
                                    case 4:
                                        j(!0), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(1), i(!0);
                                    case 10:
                                        m(!1);
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[1, 7]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return l ? Object(X.jsx)(d.a, {to: a.ACCOUNT}) : Object(X.jsxs)(At, {
                    children: [Object(X.jsxs)("div", {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            gutterBottom: !0,
                            children: "Enjoy this Awesome Coupon"
                        }), Object(X.jsx)(v.a, {
                            gutterBottom: !0,
                            children: "Simply push the button below to apply the discount and, it will automatically appear in your next checkout."
                        }), Object(X.jsx)("br", {}), Object(X.jsx)(St, {
                            onClick: x,
                            color: "primary",
                            type: "submit",
                            disabled: l || n,
                            loading: p,
                            children: Object(X.jsxs)(u.a, {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "auto",
                                children: [Object(X.jsx)(u.a, {
                                    display: "flex",
                                    marginRight: 1,
                                    children: Object(X.jsx)(Ot.a, {})
                                }), Object(X.jsx)(v.a, {style: {fontWeight: 500}, children: "Apply Coupon"})]
                            })
                        }), n && Object(X.jsxs)(X.Fragment, {
                            children: [Object(X.jsx)("br", {}), Object(X.jsx)("br", {}), Object(X.jsxs)(v.a, {
                                color: "error",
                                children: ["An error happened while applying the coupon. Please contact us", " ", Object(X.jsx)(he.a, {
                                    href: "mailto:wcandillon@gmail.com",
                                    children: "by email"
                                }), " and we will fix the situation. Sorry for the inconvenience"]
                            })]
                        })]
                    }), Object(X.jsx)("img", {src: pn, alt: "YouTube", style: {width: "100%", height: "auto"}})]
                })
            })), yn = n(212), wn = n(207), kn = n(197), Fn = function () {
                return Object(X.jsxs)(v.a, {
                    gutterBottom: !0,
                    children: ["Course material is available on Github.\xa0You can enable access to the repository on\xa0", Object(X.jsx)(kt, {
                        to: a.GITHUB,
                        children: "your Github access tab"
                    }), ".\xa0"]
                })
            }, Cn = "ClockValuesAndIdentities", Sn = function (e) {
                var t = e.lesson, n = e.repo;
                return Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsx)(v.a, {
                        variant: "h6",
                        gutterBottom: !0,
                        children: "Source Code"
                    }), Object(X.jsxs)(u.a, {
                        marginBottom: 2,
                        children: [Object(X.jsxs)(v.a, {
                            children: ["Course material is available on ", Object(X.jsx)(kt, {
                                to: a.GITHUB,
                                children: "Github"
                            }), "."]
                        }), Object(X.jsx)(u.a, {
                            marginTop: 1,
                            marginBottom: 1,
                            children: Object(X.jsx)(ge, {
                                block: !0,
                                children: "$ git clone https://github.com/wcandillon/".concat(n, ".git")
                            })
                        }), t && Object(X.jsxs)(v.a, {children: ["The final code example is available in", Object(X.jsx)(ge, {children: "src/".concat(t)}), "."]})]
                    }), Object(X.jsxs)(u.a, {
                        marginBottom: 2,
                        children: [Object(X.jsx)(v.a, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Boilerplate"
                        }), !t && Object(X.jsxs)(X.Fragment, {
                            children: [Object(X.jsxs)(v.a, {
                                gutterBottom: !0,
                                children: ["Each example has a boilerplate code, in case you want to follow along with the example. For instance in the lesson \u201cValues, Clocks, and their Identities\u201d, the final code example is available at", Object(X.jsx)(ge, {children: "src/".concat(Cn)}), "and if you want to follow along with the video, the boilerplate is in", Object(X.jsx)(ge, {children: "src/".concat(Cn, "/boilerplate")}), ". To activate the boilerplate, go to", Object(X.jsx)(ge, {children: "src/".concat(Cn, "/index.tsx")}), "and replace"]
                            }), Object(X.jsx)(ge, {
                                block: !0,
                                children: 'export { default } from "./Filename";'
                            }), Object(X.jsx)(u.a, {
                                marginBottom: 1,
                                marginTop: 1,
                                children: Object(X.jsx)(v.a, {children: " with "})
                            }), Object(X.jsx)(ge, {
                                block: !0,
                                children: 'export { default } from "./boilerplate/Filename";'
                            })]
                        }), t && Object(X.jsxs)(X.Fragment, {
                            children: [Object(X.jsxs)(v.a, {
                                gutterBottom: !0,
                                children: ["If you want to follow along with the video, the boilerplate is in", Object(X.jsx)(ge, {children: "src/".concat(t, "/boilerplate")}), ". To activate the boilerplate, go to", Object(X.jsx)(ge, {children: "src/".concat(t, "/index.tsx")}), "and replace"]
                            }), Object(X.jsx)(ge, {
                                block: !0,
                                children: 'export { default } from "./Filename";'
                            }), Object(X.jsx)(u.a, {
                                marginBottom: 1,
                                marginTop: 1,
                                children: Object(X.jsx)(v.a, {children: " with "})
                            }), Object(X.jsx)(ge, {
                                block: !0,
                                children: 'export { default } from "./boilerplate/Filename";'
                            })]
                        })]
                    })]
                })
            }, zn = function (e) {
                var t = e.children, n = e.bottom;
                return Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsx)(u.a, {
                        marginX: 2,
                        marginY: 4,
                        children: t
                    }), !n && Object(X.jsx)(kn.a, {})]
                })
            }, Tn = n(198), Mn = n(199), Bn = n(200), In = n(201), Nn = function (e) {
                var t = e.open, n = e.onClose;
                return Object(X.jsxs)(y.a, {
                    "aria-labelledby": "an-error-happened",
                    open: t,
                    onClose: n,
                    children: [Object(X.jsx)(Tn.a, {
                        id: "an-error-happened",
                        children: "An unexpected error happened"
                    }), Object(X.jsx)(Mn.a, {children: Object(X.jsx)(Bn.a, {children: "Please your internet connexion and try again. If the problem persist, please contact us."})}), Object(X.jsxs)(In.a, {
                        children: [Object(X.jsx)(St, {
                            href: "mailto:wcandillon@gmail.com",
                            children: "Contact support"
                        }), Object(X.jsx)(St, {onClick: n, color: "primary", autoFocus: !0, children: "Close"})]
                    })]
                })
            }, Rn = {monthly: "", annual: "*", lifetime: ""}, En = Object(O.a)((function (e) {
                return {
                    header: {borderTopLeftRadius: e.shape.borderRadius, borderTopRightRadius: e.shape.borderRadius},
                    perMonth: {marginLeft: e.spacing()}
                }
            })), An = Object(o.memo)((function (e) {
                var t, n = e.subscription, a = Object(o.useState)(!1), i = Object(c.a)(a, 2), r = i[0], s = i[1],
                    l = Object(o.useState)(!1), d = Object(c.a)(l, 2), j = d[0], h = d[1], b = Object(V.a)(), p = En(),
                    m = n.mostPopular ? b.palette.primary.main : b.palette.grey[100],
                    x = n.mostPopular ? b.palette.common.white : b.palette.common.black, f = function () {
                        var e = Object(I.a)(B.a.mark((function e() {
                            var t, a;
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return s(!0), e.prev = 1, e.next = 4, H();
                                    case 4:
                                        return t = Stripe("pk_live_2ruvnlX2Eqa1yYxXjufnGiKA"), e.next = 7, E({
                                            type: n.type,
                                            plan: n.id
                                        });
                                    case 7:
                                        return a = e.sent, e.next = 10, t.redirectToCheckout({sessionId: a.id});
                                    case 10:
                                        e.next = 16;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(1), h(!0), s(!1);
                                    case 16:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[1, 12]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsxs)(dt, {
                        children: [Object(X.jsx)(u.a, {
                            className: p.header,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            minWidth: 175,
                            bgcolor: m,
                            color: x,
                            children: Object(X.jsx)(v.a, {variant: "h6", color: "inherit", children: n.label})
                        }), Object(X.jsxs)(u.a, {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            paddingTop: 4,
                            children: [Object(X.jsx)(v.a, {
                                variant: "h5",
                                children: (t = n.price, T.format(t / 100))
                            }), Object(X.jsx)(v.a, {
                                variant: "subtitle1",
                                className: p.perMonth,
                                children: "lifetime" !== n.type && "/mo".concat(Rn[n.type])
                            })]
                        }), Object(X.jsx)(u.a, {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 2,
                            children: Object(X.jsx)(St, {
                                color: n.mostPopular ? "primary" : "default",
                                onClick: f,
                                loading: r,
                                children: "lifetime" === n.type ? "Buy now" : "Subscribe now"
                            })
                        })]
                    }), Object(X.jsx)(Nn, {
                        open: j, onClose: function () {
                            return h(!1)
                        }
                    })]
                })
            })), _n = Object(o.memo)((function () {
                return Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsx)(v.a, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: "Unlock the full Start React Native Experience."
                    }), Object(X.jsx)(v.a, {
                        gutterBottom: !0,
                        children: "The subscription includes all future updates on the course, as well as the premium starter kits and new lessons that will be available in the future."
                    }), Object(X.jsx)(u.a, {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: {sm: "flex-start"},
                        flex: 1,
                        children: S.map((function (e) {
                            return Object(X.jsx)(u.a, {
                                marginRight: 2,
                                marginTop: 2,
                                children: Object(X.jsx)(An, {subscription: e})
                            }, e.id)
                        }))
                    }), Object(X.jsx)(u.a, {
                        marginTop: 1,
                        children: Object(X.jsx)(v.a, {
                            variant: "caption",
                            children: "* Billed as one payment. Subscription renews automatically at the end its of term. You can turn off auto-renew from your settings."
                        })
                    })]
                })
            })), Dn = function () {
                var e = Object(o.useState)(!1), t = Object(c.a)(e, 2), n = t[0], a = t[1], i = Object(o.useState)(!1),
                    r = Object(c.a)(i, 2), s = r[0], l = r[1], d = function () {
                        var e = Object(I.a)(B.a.mark((function e() {
                            var t;
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return a(!0), e.prev = 1, e.next = 4, A();
                                    case 4:
                                        t = e.sent, a(!1), window.location.href = t, e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1), l(!0), a(!1);
                                    case 13:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, null, [[1, 9]])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsx)(v.a, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: "Manage Your Subscription"
                    }), Object(X.jsx)(v.a, {
                        gutterBottom: !0,
                        children: "You can cancel, pause or resume your subscription portal. Click the button below, to manage your subscription."
                    }), Object(X.jsx)(St, {
                        onClick: d,
                        loading: n,
                        children: "Subscription Portal"
                    }), Object(X.jsx)(Vt, {
                        open: s, onClose: function () {
                            return l(!1)
                        }, message: "An unexpected error happened"
                    })]
                })
            }, Gn = n(202), Ln = n(203), Wn = n(204), Un = n(205), Pn = n(206), Hn = n(217), qn = function (e) {
                var t = e.defaultUserName, n = Object(o.useContext)(le), a = Object(c.a)(n, 2), i = a[0], r = a[1],
                    s = Object(o.useState)(t), l = Object(c.a)(s, 2), d = l[0], j = l[1], h = Object(o.useState)(!1),
                    b = Object(c.a)(h, 2), p = b[0], m = b[1], O = Object(o.useState)(t), g = Object(c.a)(O, 2), y = g[0],
                    w = g[1], k = p || 1 === Object.keys(i).map((function (e) {
                        return i[e]
                    })).filter((function (e) {
                        return e === ce
                    })).length, F = function () {
                        var e = Object(I.a)(B.a.mark((function e() {
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return m(!0), e.next = 3, _(y, d);
                                    case 3:
                                        j(y), m(!1);
                                    case 5:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(o.useEffect)((function () {
                    Object(I.a)(B.a.mark((function e() {
                        var n;
                        return B.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (d === t) {
                                        e.next = 6;
                                        break
                                    }
                                    return r(se), e.next = 4, D();
                                case 4:
                                    n = e.sent, r(n);
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [r, d, t]);
                var C = k || y === d, S = function () {
                    var e = Object(I.a)(B.a.mark((function e(t, n) {
                        return B.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r(Object(f.a)(Object(f.a)({}, i), {}, Object(x.a)({}, t, void 0))), e.prev = 1, !n) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 5, G(t);
                                case 5:
                                    e.next = 9;
                                    break;
                                case 7:
                                    return e.next = 9, L(t);
                                case 9:
                                    r(Object(f.a)(Object(f.a)({}, i), {}, Object(x.a)({}, t, !!n && null))), e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(1), r(Object(f.a)(Object(f.a)({}, i), {}, Object(x.a)({}, t, !1)));
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[1, 12]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsxs)(zn, {
                        children: [Object(X.jsx)(u.a, {
                            children: Object(X.jsxs)(v.a, {
                                gutterBottom: !0,
                                children: ["Your Github username\xa0", Object(X.jsx)("span", {
                                    style: {fontWeight: 500},
                                    children: "(emails are not valid):"
                                })]
                            })
                        }), Object(X.jsxs)(u.a, {
                            display: "flex",
                            alignItems: "center",
                            children: [Object(X.jsx)(u.a, {
                                marginRight: 1,
                                children: Object(X.jsx)(sn.a, {
                                    id: "username",
                                    type: "text",
                                    name: "username",
                                    variant: "outlined",
                                    placeholder: "Github Username",
                                    inputProps: {"aria-label": "github username"},
                                    value: y,
                                    onChange: function (e) {
                                        var t = e.target.value;
                                        return w(t)
                                    },
                                    disabled: k
                                })
                            }), Object(X.jsx)(St, {
                                color: "primary",
                                type: "submit",
                                onClick: F,
                                disabled: C,
                                loading: p,
                                children: "Save"
                            })]
                        })]
                    }), "" !== d && Object(X.jsx)(zn, {
                        bottom: !0,
                        children: Object(X.jsxs)(Gn.a, {
                            "aria-label": "Github Accesses",
                            children: [Object(X.jsx)(Ln.a, {children: Object(X.jsxs)(Wn.a, {children: [Object(X.jsx)(Un.a, {children: "Repository"}), Object(X.jsx)(Un.a, {children: "Access"})]})}), Object(X.jsx)(Pn.a, {
                                children: Object.keys(i).map((function (e) {
                                    var t = i[e], n = "https://github.com/wcandillon/".concat(e);
                                    return Object(X.jsxs)(Wn.a, {
                                        children: [Object(X.jsx)(Un.a, {
                                            component: "th",
                                            scope: "row",
                                            children: Object(X.jsx)(he.a, {target: "_blank", href: n, children: e})
                                        }), Object(X.jsxs)(Un.a, {
                                            children: [t === ce && Object(X.jsx)(Tt, {width: 32}), null === t && Object(X.jsx)(St, {
                                                href: "".concat(n, "/invitations"),
                                                target: "_blank",
                                                children: "Open Invitation"
                                            }), t !== ce && null !== t && Object(X.jsx)(Hn.a, {
                                                checked: t,
                                                onChange: function (t) {
                                                    var n = t.target.checked;
                                                    return S(e, n)
                                                },
                                                inputProps: {"aria-label": "enable Github access"},
                                                color: "primary",
                                                disabled: k
                                            })]
                                        })]
                                    }, e)
                                }))
                            })]
                        })
                    })]
                })
            }, Vn = function (e) {
                var t = e.username, n = e.defaultConsent, i = Object(o.useState)(n), r = Object(c.a)(i, 2), s = r[0],
                    l = r[1], d = Object(o.useState)(""), j = Object(c.a)(d, 2), h = j[0], b = j[1],
                    p = Object(o.useCallback)(function () {
                        var e = Object(I.a)(B.a.mark((function e(t) {
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return l(t), e.next = 3, U(t);
                                    case 3:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), []);
                return Object(o.useEffect)((function () {
                    Object(I.a)(B.a.mark((function e() {
                        var n;
                        return B.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3, W(t);
                                case 3:
                                    n = e.sent, b(n);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [t]), Object(X.jsxs)(X.Fragment, {
                    children: [Object(X.jsx)(v.a, {
                        variant: "h5",
                        gutterBottom: !0,
                        children: "\u2764\ufe0f Thank You"
                    }), Object(X.jsxs)(v.a, {
                        gutterBottom: !0,
                        children: ["Your support means everything. ", Object(X.jsx)("br", {}), "If you agree, I would like to feature your name in the credit scene of my upcoming YouTube videos. It should be something quite special. We will use the name associated to", " ", Object(X.jsx)(kt, {
                            to: a.GITHUB,
                            children: "your github account"
                        }), "."]
                    }), Object(X.jsxs)(u.a, {
                        display: "flex",
                        alignItems: "center",
                        children: [Object(X.jsx)(Hn.a, {
                            checked: s, onChange: function (e) {
                                var t = e.target.checked;
                                return p(t)
                            }, inputProps: {"aria-label": "enable Github access"}, color: "primary"
                        }), Object(X.jsxs)(v.a, {children: ["" !== h ? "".concat(h, " can be used as my name") : "My name can appear", " ", "in the credit scene of upcoming YouTube tutorials."]})]
                    })]
                })
            }, Yn = [a.ACCOUNT, a.GITHUB], Jn = function (e) {
                return {id: "account-".concat(e), "aria-controls": "account-".concat(e)}
            }, Xn = Object(O.a)((function () {
                return {email: {textOverflow: "ellipsis", overflow: "hidden"}, noPaddingTop: {paddingTop: 0}}
            })), $n = ie((function (e) {
                var t = e.user, n = e.location, i = e.history, r = Object(Y.a)(), s = Object(o.useContext)(le),
                    d = Object(c.a)(s, 1)[0], j = Xn(), h = t.email, b = Yn.indexOf(n.pathname), p = Object(o.useState)(!1),
                    m = Object(c.a)(p, 2), x = m[0], O = m[1], g = function () {
                        var e = Object(I.a)(B.a.mark((function e() {
                            return B.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        O(!0), Object(Y.e)(r);
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(), y = !!d["react-native-gestures-and-animations"];
                return Object(X.jsxs)(Nt, {
                    children: [Object(X.jsxs)(yn.a, {
                        indicatorColor: "primary",
                        textColor: "primary",
                        value: b,
                        "aria-label": "Account Tabs",
                        onChange: function (e, t) {
                            return i.push(Yn[t])
                        },
                        children: [Object(X.jsx)(wn.a, Object(f.a)({label: "Account"}, Jn("account"))), Object(X.jsx)(wn.a, Object(f.a)({label: "Github"}, Jn("github")))]
                    }), Object(X.jsx)(kn.a, {}), Object(X.jsxs)(u.a, {
                        hidden: 0 !== b,
                        children: [Object(X.jsx)(zn, {
                            children: Object(X.jsx)(v.a, {
                                variant: "h4",
                                className: j.email,
                                children: h
                            })
                        }), "subscription" === t.accessType && Object(X.jsx)(zn, {children: Object(X.jsx)(Dn, {})}), t.access && Object(X.jsxs)(X.Fragment, {
                            children: [Object(X.jsx)(zn, {
                                children: Object(X.jsx)(Vn, {
                                    defaultConsent: !!t.consent,
                                    username: t.github
                                })
                            }), Object(X.jsxs)(zn, {
                                children: [Object(X.jsx)(v.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    children: "Reanimated 2 Material"
                                }), y && Object(X.jsx)(Sn, {repo: "react-native-gestures-and-animations-2"}), !y && Object(X.jsx)(Fn, {}), Object(X.jsx)(v.a, {
                                    variant: "h6",
                                    gutterBottom: !0,
                                    children: "Links"
                                }), Object(X.jsx)(je.a, {
                                    className: j.noPaddingTop,
                                    children: Object(X.jsxs)(ue.a, {
                                        component: l.b,
                                        to: a.REANIMATED2,
                                        button: !0,
                                        children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(Oe.a, {})}), Object(X.jsx)(pe.a, {primary: "Lessons"})]
                                    })
                                })]
                            }), Object(X.jsxs)(zn, {
                                children: [Object(X.jsx)(v.a, {
                                    variant: "h5",
                                    gutterBottom: !0,
                                    children: "Reanimated 1 Material"
                                }), y && Object(X.jsx)(Sn, {repo: "react-native-gestures-and-animations"}), !y && Object(X.jsx)(Fn, {}), Object(X.jsx)(v.a, {
                                    variant: "h6",
                                    gutterBottom: !0,
                                    children: "Links"
                                }), Object(X.jsxs)(je.a, {
                                    className: j.noPaddingTop,
                                    children: [Object(X.jsxs)(ue.a, {
                                        href: "https://bit.ly/3cuSqa3",
                                        component: he.a,
                                        color: "inherit",
                                        button: !0,
                                        children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(xe.a, {})}), Object(X.jsx)(pe.a, {primary: "Course Material (with boilerplates)"})]
                                    }), Object(X.jsxs)(ue.a, {
                                        component: l.b,
                                        to: a.HOME,
                                        button: !0,
                                        children: [Object(X.jsx)(be.a, {children: Object(X.jsx)(Oe.a, {})}), Object(X.jsx)(pe.a, {primary: "Lessons"})]
                                    })]
                                })]
                            })]
                        }), "none" === t.accessType && Object(X.jsx)(zn, {children: Object(X.jsx)(_n, {})}), Object(X.jsx)(zn, {
                            bottom: !0,
                            children: Object(X.jsxs)(u.a, {
                                display: "flex",
                                children: [Object(X.jsx)(u.a, {
                                    marginRight: 1,
                                    children: Object(X.jsx)(St, {
                                        href: "mailto:wcandillon@gmail.com",
                                        loading: x,
                                        children: "Contact Support"
                                    })
                                }), Object(X.jsx)(u.a, {
                                    children: Object(X.jsx)(St, {
                                        onClick: g,
                                        loading: x,
                                        children: "Sign Out"
                                    })
                                })]
                            })
                        })]
                    }), Object(X.jsx)(u.a, {
                        hidden: 1 !== b,
                        children: t.access ? Object(X.jsx)(qn, {defaultUserName: t.github || ""}) : Object(X.jsx)(zn, {children: Object(X.jsx)(v.a, {children: "Github access to the Start React Native repositories is enabled upon subscription."})})
                    }), Object(X.jsx)(u.a, {
                        hidden: 2 !== b,
                        children: t.access ? Object(X.jsx)(zn, {children: Object(X.jsx)(v.a, {children: "Thank You for your support."})}) : Object(X.jsx)(zn, {children: Object(X.jsx)(v.a, {children: "Github access to the Start React Native repositories is enabled upon subscription."})})
                    })]
                })
            })), Kn = n.p + "static/media/not-found.1ece7d04.svg", Zn = function () {
                return Object(X.jsxs)(u.a, {
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "primary.light",
                    flexDirection: "column",
                    children: [Object(X.jsx)("img", {
                        src: Kn,
                        alt: "Not found",
                        style: {width: "auto", height: "100%"}
                    }), Object(X.jsx)(v.a, {
                        style: {color: "white", marginTop: 32, marginBottom: 32},
                        variant: "h2",
                        align: "center",
                        children: "Page not found"
                    })]
                })
            }, Qn = function (e) {
                return function (t) {
                    var n = t.match, i = Object(o.useContext)(te), r = Object(c.a)(i, 1)[0], s = n.params.id,
                        l = bt.find((function (e) {
                            return e.id === s
                        }));
                    return l ? l.free ? Object(X.jsx)(e, {lesson: l}) : r === K ? Object(X.jsx)($, {}) : r === Z ? Object(X.jsx)(d.a, {to: a.SIGN_IN}) : r && !r.access ? Object(X.jsx)(d.a, {to: a.ACCOUNT}) : Object(X.jsx)(e, {lesson: l}) : Object(X.jsx)(Zn, {})
                }
            }, ea = n(123), ta = n.n(ea), na = n(124), aa = n.n(na), ia = function (e, t) {
                return e.map((function (e) {
                    return "".concat(e, " ").concat(t, "ms")
                })).join(", ")
            }, ra = Object(O.a)((function (e) {
                return {
                    container: function (t) {
                        var n = t.direction;
                        return {
                            borderBottomLeftRadius: "left" === n ? e.shape.borderRadius : 0,
                            borderBottomRightRadius: "right" === n ? e.shape.borderRadius : 0,
                            transition: ia(["background-color"], e.transitions.duration.standard),
                            transitionTimingFunction: e.transitions.easing.easeInOut,
                            "& .arrow": {
                                transition: ia(["transform", "color"], e.transitions.duration.standard),
                                transitionTimingFunction: e.transitions.easing.easeInOut
                            },
                            "&:hover": {
                                backgroundColor: e.palette.grey[100],
                                "& .arrow": {
                                    color: e.palette.primary.main,
                                    transform: "translateX(".concat("left" === n ? -10 : 10, "px)")
                                }
                            }
                        }
                    }
                }
            })), ca = function (e) {
                var t = Object(V.a)(), n = ra(e), a = e.direction, i = e.label, r = e.to;
                return Object(X.jsx)(ot, {
                    to: r,
                    children: Object(X.jsxs)(u.a, {
                        display: "flex",
                        overflow: "hidden",
                        flexDirection: "left" === a ? "row" : "row-reverse",
                        flex: 1,
                        alignItems: "center",
                        padding: {xs: 1, md: 2},
                        borderRight: "left" === a ? "1px solid ".concat(t.palette.divider) : "0",
                        className: n.container,
                        children: [Object(X.jsxs)(u.a, {
                            fontSize: {xs: 48, md: 72},
                            color: t.palette.divider,
                            className: "arrow",
                            display: "flex",
                            alignItems: "center",
                            children: ["left" === a && Object(X.jsx)(ta.a, {
                                fontSize: "inherit",
                                color: "inherit"
                            }), "right" === a && Object(X.jsx)(aa.a, {fontSize: "inherit", color: "inherit"})]
                        }), Object(X.jsxs)(u.a, {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left" === a ? "flex-start" : "flex-end",
                            children: [Object(X.jsx)(v.a, {
                                variant: "caption",
                                children: "left" === a ? "Back to" : "Watch next"
                            }), Object(X.jsx)(v.a, {variant: "subtitle1", children: i})]
                        })]
                    })
                })
            }, oa = function (e) {
                var t = e.direction, n = Object(V.a)();
                return Object(X.jsx)(u.a, {
                    display: "flex",
                    flex: 1,
                    borderColor: n.palette.divider,
                    borderRight: "left" === t ? "1px solid ".concat(n.palette.divider) : "0"
                })
            }, sa = function (e) {
                var t = e.lesson, n = t.id, a = pt(t), i = et[a].filter((function (e) {
                    return !e.comingSoon
                })), r = Object(V.a)(), c = i.findIndex((function (e) {
                    return e.id === n
                })), o = i[c - 1], s = i[c + 1], l = !!o, d = !!s;
                return Object(X.jsxs)(u.a, {
                    borderColor: r.palette.divider,
                    borderTop: "1px solid",
                    display: "flex",
                    children: [l && Object(X.jsx)(ca, {
                        direction: "left",
                        label: o.title,
                        to: z(o.id)
                    }), !l && Object(X.jsx)(oa, {direction: "left"}), d && Object(X.jsx)(ca, {
                        direction: "right",
                        label: s.title,
                        to: z(s.id)
                    }), !d && Object(X.jsx)(oa, {direction: "right"})]
                })
            }, la = Qn((function (e) {
                var t = e.lesson, n = Qe[t.id], a = pt(t), i = "react-native-".concat(a), r = Object(o.useContext)(le),
                    s = !!Object(c.a)(r, 1)[0][i];
                return Object(X.jsxs)(Nt, {
                    maxWidth: "md",
                    children: [Object(X.jsx)($t, {url: n}), Object(X.jsxs)(u.a, {
                        margin: 2,
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        children: [Object(X.jsxs)(u.a, {
                            marginBottom: 2,
                            children: [Object(X.jsx)(v.a, {
                                variant: "h3",
                                gutterBottom: !0,
                                children: t.title
                            }), Object(X.jsx)(v.a, {gutterBottom: !0, children: t.description})]
                        }), t.content && t.content({}), !t.free && Object(X.jsxs)(u.a, {
                            marginBottom: 2,
                            children: [Object(X.jsx)(v.a, {
                                variant: "h4",
                                gutterBottom: !0,
                                children: "Course Material"
                            }), s && Object(X.jsx)(Sn, {lesson: t.codename, repo: i}), !s && Object(X.jsx)(Fn, {})]
                        })]
                    }), Object(X.jsx)(sa, {lesson: t})]
                })
            })), da = Object(O.a)((function () {
                return {container: {height: "61%", width: "61%"}}
            })), ja = function () {
                var e = da();
                return Object(X.jsxs)("svg", {
                    width: 879,
                    height: 740,
                    className: e.container,
                    viewBox: "0 0 879 740",
                    children: [Object(X.jsx)("defs", {
                        children: Object(X.jsxs)("linearGradient", {
                            x1: "50%",
                            y1: "0%",
                            x2: "50%",
                            y2: "100%",
                            id: "prefix__a",
                            children: [Object(X.jsx)("stop", {
                                stopColor: "#FFF",
                                offset: "0%"
                            }), Object(X.jsx)("stop", {stopColor: "#F5F5F5", offset: "100%"})]
                        })
                    }), Object(X.jsxs)("g", {
                        fill: "none", fillRule: "evenodd", children: [Object(X.jsx)("path", {
                            d: "M698.65 344.11a412.25 412.25 0 01-6.18-56.71c-1.362-32.102-22.765-59.88-53.46-69.38-5.46-1.68-11.47-3.25-18.11-4.66-58.2-12.36-75.88-1.57-77.89-.15a74.63 74.63 0 01-4.43-9.61c-.1-.34-.19-.68-.29-1a74.51 74.51 0 0019.91-44.89c9.71-9.84 15.38-21.72 15.38-34.51 0-11-4.2-21.32-11.55-30.25V75.57A75.57 75.57 0 00486.46 0h-6.13a75.57 75.57 0 00-75.57 75.57V94.3c-6.67 8.61-10.45 18.44-10.45 28.88 0 12.52 5.44 24.16 14.78 33.88a74.52 74.52 0 0020.74 46.34c.41 2.84.83 5.89 1.24 9.11l-104.1 21.99s-40.14 1.65-66 55c-21.87 45.19-65.39 161.29-78.28 195.85-2.33 6.26-3.65 9.85-3.65 9.85s.43-.43 1.24-1.17l-1.24 3.37s.63-.64 1.83-1.69c-1.82 14.46-2.08 39.29 16.86 42.38 15.88 2.59 56.8 3.66 87.71 4.09h2.14c20.49.27 36.08.27 36.08.27v-.27H656.1v-3.41a22.91 22.91 0 00-1.83-9l.46-.56a18.25 18.25 0 013.45 8 8 8 0 01-.16.84l.2-.51a8.56 8.56 0 01-.2 2.71s42.65-109.89 42.19-175.51c.122-6.91-.4-13.817-1.56-20.63zM432.8 227.36a76.25 76.25 0 01-1.06-9.48v-.09c.37 3.09.73 6.29 1.06 9.57zM303.58 463.4v26.19l-16.4 3.51 16.4-29.7z",
                            fill: "url(#prefix__a)",
                            fillRule: "nonzero"
                        }), Object(X.jsx)("path", {
                            d: "M481.71 10.57c41.736 0 75.57 33.834 75.57 75.57v32.24H406.14V86.14c0-41.736 33.834-75.57 75.57-75.57z",
                            fill: "#FF6584"
                        }), Object(X.jsx)("ellipse", {
                            fill: "#FF6584",
                            cx: 482.24,
                            cy: 128.95,
                            rx: 86.14,
                            ry: 59.19
                        }), Object(X.jsx)("path", {
                            d: "M427.02 186.29s18 94.07 0 119.44c-18 25.37 55 35.41 55 35.41l75.56-27.48 10.57-67.65s-46-25.9-36.47-78.22l-104.66 18.5z",
                            fill: "#FBBEBE"
                        }), Object(X.jsx)("path", {
                            d: "M650.04 503.39S654.8 524 628.9 527.7a146.45 146.45 0 01-46.08-.55l-5.71-51.77h60.25l12.68 28.01z",
                            fill: "#F7C4A7"
                        }), Object(X.jsx)("path", {
                            d: "M192.7 477.01s-11.44 46.49 14.46 50.69c25.9 4.2 121 4.23 121 4.23v-55l-43.06 9.2-40.42-38.76-51.98 29.64z",
                            fill: "#FBBEBE"
                        }), Object(X.jsx)("path", {
                            d: "M432.58 216.68l-101.21 21.4s-38.58 1.59-63.42 52.85c-24.84 51.26-78.75 197.66-78.75 197.66s46-46.51 99.89 3.17l35.94-65-7.93 103.06h278.48v-48.63s58.13 31.18 53.91 48.62c0 0 49.75-128.18 39-186.43a396.18 396.18 0 01-5.94-54.5c-1.3-30.854-21.876-57.551-51.38-66.67-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75 0-75 0s-11.57 37.64-11.36 54.7c.26 21.93-31.18 36.47-31.18 36.47s-46.51-11.1-48.62-20.08c-2.11-8.98-18.75-61.58-15.03-72.15z",
                            fill: "#000",
                            opacity: .1
                        }), Object(X.jsx)("path", {
                            d: "M432.58 214.57l-101.21 21.4s-38.58 1.59-63.42 52.85c-24.84 51.26-78.76 197.68-78.76 197.68s46-46.51 99.89 3.17l35.94-65-7.93 103.03h278.49v-48.62s58.13 31.18 53.91 48.62c0 0 49.75-128.18 39-186.43a396.18 396.18 0 01-5.94-54.5c-1.3-30.854-21.876-57.551-51.38-66.67-5.24-1.61-11-3.12-17.4-4.47-59.72-12.68-75 0-75 0s-11.57 37.64-11.36 54.7c.26 21.93-31.18 36.47-31.18 36.47s-46.51-11.1-48.62-20.08c-2.11-8.98-18.75-61.58-15.03-72.15z",
                            fill: "#3884FF"
                        }), Object(X.jsx)("path", {
                            d: "M536 210.08a71.53 71.53 0 01-2.76-37.52l-104.66 18.49s1.51 7.91 3.22 19.76a71.86 71.86 0 00104.18-.73h.02z",
                            fill: "#000",
                            opacity: .1
                        }), Object(X.jsx)("path", {
                            d: "M553.85 156.17c-.17 39.237-31.775 71.087-71.01 71.562-39.233.475-71.6-30.601-72.72-69.822v-1.74a71.89 71.89 0 0140.29-64.59 71.49 71.49 0 016.64-2.84 72.39 72.39 0 0137-3.44c32.774 5.58 57.434 32.926 59.61 66.1.127 1.58.19 3.17.19 4.77z",
                            fill: "#FBBEBE"
                        }), Object(X.jsxs)("g", {
                            opacity: .1,
                            fill: "#000",
                            children: [Object(X.jsx)("path", {d: "M456.94 90.43l.1-.06a71.49 71.49 0 00-6.64 2.84 71.89 71.89 0 00-40.29 64.59v1.74a16 16 0 006.45-1.55c17.52-8.18 28-33.2 32.16-50.65 1.5-6.25 2.91-13.29 8.22-16.91z"}), Object(X.jsx)("path", {d: "M511.95 92.44a71.28 71.28 0 00-17.87-5.51 23.06 23.06 0 0112.83 8.06 32.86 32.86 0 013.93 7 72.07 72.07 0 00-60.45 1.25c4.51 9.89 18.5 15.28 27.84 18.89a509.226 509.226 0 0031 10.83l-9.24-7.5 20.87 3.32a36.15 36.15 0 00-1.46-12.3c4 3.22 9.3 4.3 13.64 7 8.13 5.13 11.52 15 15.95 23.55 1.17 2.26 2.55 4.57 4.66 6a71.91 71.91 0 00-41.7-60.59z"})]
                        }), Object(X.jsx)("path", {
                            d: "M456.94 88.8l.1-.06a71.49 71.49 0 00-6.64 2.84 71.89 71.89 0 00-40.29 64.59v1.74a16 16 0 006.45-1.55c17.52-8.18 28-33.2 32.16-50.65 1.5-6.21 2.91-13.28 8.22-16.91z",
                            fill: "#3E3E54"
                        }), Object(X.jsx)("path", {
                            d: "M511.95 90.82a71.28 71.28 0 00-17.87-5.51 23.06 23.06 0 0112.83 8.06 32.86 32.86 0 013.93 7 72.07 72.07 0 00-60.45 1.25c4.51 9.89 18.5 15.28 27.84 18.89a509.226 509.226 0 0031 10.83l-9.24-7.5 20.87 3.32a36.15 36.15 0 00-1.46-12.3c4 3.22 9.3 4.3 13.64 7 8.13 5.13 11.52 15 15.95 23.55 1.17 2.26 2.55 4.57 4.66 6a71.91 71.91 0 00-41.7-60.59z",
                            fill: "#3E3E54"
                        }), Object(X.jsx)("path", {
                            d: "M401.91 144.32s74-92 159.61 0l-7.4-20.61s-40.17-58.66-68.7-46c-28.53 12.66-56.55 21.67-56.55 21.67l-26.96 44.94z",
                            fill: "#000",
                            opacity: .1
                        }), Object(X.jsx)("path", {
                            d: "M401.91 142.69s74-92 159.61 0l-7.4-20.61s-40.17-58.66-68.7-46c-28.53 12.66-56.55 21.67-56.55 21.67l-26.96 44.94z",
                            fill: "#FF6584"
                        }), Object(X.jsx)("path", {
                            d: "M341.13 340.88s-15.85 42.28 6.34 80.33c22.19 38.05-19.55 53.91-19.55 53.91M597.98 302.83s27.48 34.88 9.51 66.06-16.91 106.23-16.91 106.23",
                            fill: "#000",
                            opacity: .1
                        }), Object(X.jsx)("path", {
                            d: "M316.82 506.3h305.47c14.011 0 25.37 11.359 25.37 25.37h-356.2c0-14.008 11.352-25.364 25.36-25.37z",
                            fill: "#3E3E54"
                        }), Object(X.jsx)("path", {
                            d: "M347.9 331.89h243.32a39 39 0 0139 39v141.22H308.9V370.89c0-21.54 17.46-39 39-39z",
                            fill: "#3E3E54"
                        }), Object(X.jsx)("circle", {
                            fill: "#FFF",
                            cx: 469.29,
                            cy: 429.93,
                            r: 19.03
                        }), Object(X.jsx)("path", {
                            d: "M406.14 101.2s72.72-72.68 151.15-1.33",
                            stroke: "#000",
                            opacity: .1
                        }), Object(X.jsx)("path", {
                            fill: "#F5F5F5",
                            d: "M52.28 532h774.71v208H52.28z"
                        }), Object(X.jsx)("path", {
                            fill: "#000",
                            opacity: .1,
                            d: "M52.28 546h774.71v27H52.28z"
                        }), Object(X.jsx)("path", {fill: "#F5F5F5", d: "M.31 529h878.63v27H.31z"})]
                    })]
                })
            }, ua = Object(o.memo)((function () {
                return Object(X.jsxs)(At, {
                    children: [Object(X.jsxs)("div", {
                        children: [Object(X.jsx)(v.a, {
                            variant: "h4",
                            align: "center",
                            children: "Support"
                        }), Object(X.jsxs)(v.a, {
                            align: "center",
                            children: ["Please contact us ", Object(X.jsx)(he.a, {
                                href: "mailto:wcandillon@gmail.com",
                                children: "by email"
                            }), ".", Object(X.jsx)("br", {}), "We are\n          looking looking forward to answer any of your questions."]
                        })]
                    }), Object(X.jsx)(ja, {})]
                })
            })), ha = Object(O.a)((function (e) {
                return {
                    container: {
                        width: "100%",
                        "& .background": {
                            fill: e.palette.grey[100],
                            transition: "fill 600ms",
                            transitionTimingFunction: e.transitions.easing.easeInOut
                        },
                        "& .overlay": {
                            opacity: 0,
                            transition: "opacity 600ms",
                            transitionTimingFunction: e.transitions.easing.easeInOut
                        },
                        "&:hover": {"& .background": {fill: "transparent"}, "& .overlay": {opacity: 1}}
                    }, hero: {width: "100%"}
                }
            })), ba = function () {
                var e = Object(V.a)(), t = ha();
                return Object(X.jsxs)("div", {
                    className: t.container, children: [Object(X.jsxs)("svg", {
                        viewBox: "0 0 1012 695",
                        className: t.hero,
                        children: [Object(X.jsx)("defs", {
                            children: Object(X.jsxs)("linearGradient", {
                                x1: "50.023%",
                                y1: "100.006%",
                                x2: "50.023%",
                                y2: "-.009%",
                                id: "prefix__a",
                                children: [Object(X.jsx)("stop", {
                                    stopColor: "gray",
                                    stopOpacity: .25,
                                    offset: "0%"
                                }), Object(X.jsx)("stop", {
                                    stopColor: "gray",
                                    stopOpacity: .12,
                                    offset: "54%"
                                }), Object(X.jsx)("stop", {stopColor: "gray", stopOpacity: .1, offset: "100%"})]
                            })
                        }), Object(X.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [Object(X.jsx)("path", {
                                className: "background",
                                d: "M587.24 112.4c-64.72-2.25-126.36-23.14-185.23-46-58.87-22.86-117.16-48.19-180.33-60.3-40.63-7.79-87.09-8.89-119.83 12.89-31.5 21-41.68 57.15-47.16 90.72-4.11 25.27-6.54 51.85 4.75 75.5 7.83 16.42 21.74 30.22 31.36 45.95 33.46 54.72 9.81 122.2-26.46 175.63-17 25.06-36.74 49-49.87 75.66-13.13 26.66-19.2 57.25-7.72 84.47 11.39 27 38.52 47.24 67.9 61.49 59.69 28.94 130 37.23 198.62 41.92 151.82 10.39 304.46 5.89 456.68 1.39 56.34-1.67 112.92-3.36 168.34-12.07 30.78-4.84 62.56-12.52 84.9-31 28.36-23.53 35.39-63.38 16.39-92.88-31.88-49.49-120-61.79-142.31-114.9-12.27-29.23.33-61.8 18.15-88.91 38.24-58.17 102.33-109.19 105.71-175.68 2.32-45.66-28.49-91.39-76.13-113-49.94-22.65-119.18-19.8-156 17.69-37.96 38.56-104.62 53.41-161.76 51.43z"
                            }), Object(X.jsx)("path", {
                                d: "M420.73 652.49c-1-3.62-2-7.28-4-10.43a36.53 36.53 0 00-6.55-7.17c-7.25-6.58-16.15-13.26-25.76-11.6a34.39 34.39 0 00-8.54 3.12c-1.4.65-2.81 1.3-4.25 1.85a21.17 21.17 0 01-12.82 1.12c-2.2-.59-4.25-1.65-6.42-2.31a20.35 20.35 0 00-3.15-.68 53.64 53.64 0 006.09-3.21c10.78-6.6 19.38-18.53 18.18-31.29-.41-4.29-1.88-8.4-3.34-12.45l-3.84-10.62c-1.66-4.6-3.38-9.29-6.41-13.11-3.37-4.26-8.17-7.15-13.13-9.3-10.65-4.63-22.29-6.26-33.78-7.84l-.8-.11V414.33a8 8 0 00-8-8h-15.1c-.667-4.08-1.333-8.153-2-12.22-1.9-11.61-3.87-23.43-9.22-33.88-3.5-6.84-9.07-13.37-16.58-14.71a16.08 16.08 0 01-4.31-1c-2.2-1.08-3.4-3.48-5.09-5.25-4.36-4.57-11.45-4.64-17.29-7-5.16-2.05-9.38-5.91-14.08-8.88-4.7-2.97-10.54-5.08-15.74-3.15 0 .38-.07.76-.11 1.13l-3.34-1.54c-3.6-1.67-7.27-3.38-10.16-6.12-3.71-3.5-5.69-8.14-7.23-13.07-.16-.51-.31-1-.47-1.55a46.43 46.43 0 0012.44-23.75l.81 2.63c.182.59.396 1.172.64 1.74a6.86 6.86 0 002 2.83c.256.201.539.366.84.49a3.5 3.5 0 00.86.22 3.2 3.2 0 001.24-.09 4.73 4.73 0 003-2.78 6 6 0 00.35-1.22 6.31 6.31 0 00.07-.76v-.24-.52-.28c0-.1 0-.33-.05-.5v-.26c0-.2-.06-.4-.1-.59-.04-.19 0-.11 0-.16-.05-.25-.11-.51-.16-.76v-.19c0-.06-.09-.41-.14-.62-.05-.21-.07-.27-.1-.41v-.06c-.1-.4-.19-.79-.28-1.19a34.38 34.38 0 01-.55-10.56 113.08 113.08 0 012.86-15.35l.21-.91c.08-.35.16-.7.23-1.06.16-.72.32-1.44.47-2.17l.36-1.84.27-1.64v-.21a47.41 47.41 0 00.35-11.23c-.46-5.23-2.08-10.18-5.63-14.12-2.51-2.79-5.82-4.85-8.15-7.78-2.18-2.74-3.41-6.12-5.67-8.81-6.24-7.45-22.26-13.19-32.09-14.19-11.26-1.14-29.45 1.74-38.53 8.39-3.36 2.45-5.66 6-8 9.36-4.3 6.25-9.18 12.49-16.07 16-2.6 1.32-5.58 2.32-7.31 4.62a12.49 12.49 0 00-1.95 5.18 102.71 102.71 0 00-2.06 19.78v2.5a18.23 18.23 0 001.56 7.23c.16.34.34.67.53 1l.12.21a39.78 39.78 0 013.2 5.45 7.22 7.22 0 01.49 1.66 12.24 12.24 0 01-.28 4.38c0 .22-.09.44-.13.66l-.09.43c0 .15 0 .3-.08.44-.08.43-.15.86-.21 1.28a9 9 0 00.22 3.46 4.55 4.55 0 002.22 3 6.5 6.5 0 001.8.56c.63.11 1.27.18 1.89.32a9.33 9.33 0 012.29.85 9.22 9.22 0 011.93 1.24 11 11 0 01.83.84 14 14 0 011.42 1.94c.213.353.413.713.6 1.08a24.67 24.67 0 011.71 4.52c.26.93.48 1.87.67 2.81.09.42.17.84.24 1.25.07.41.14.83.2 1.24a2.91 2.91 0 00.8-.16c1.47-.53 2.29-2.24 2.75-3.9.08-.28.15-.55.21-.82.23-1 .47-2.1.7-3.15a46.37 46.37 0 0018.25 20.1c.28.83.55 1.65.79 2.49 1.31 4.53 1.94 9.27-.33 13.23-1.62 2.81-4.34 4.54-7.38 5.74a4.88 4.88 0 00-1.65-1.4c-2.63-1.32-5.79.28-8 2.25-4 3.62-7.26 8.81-12.52 10-1.9.44-4 .35-5.58 1.51a13 13 0 00-2.59 3.4 11.92 11.92 0 01-10.23 5.1c-1.83-.09-4-.51-5.25.83-.93 1-1 2.58-2 3.53-1.34 1.32-3.54.68-5.41.6-3.56-.15-6.87 2.15-8.9 5.1-2.03 2.95-3 6.48-4 10v.06c-.257.187-.5.39-.73.61a10.55 10.55 0 00-2.21 3.58 170.87 170.87 0 00-14.1 58.18 6 6 0 01-.64 2.82 13.87 13.87 0 01-1.47 1.6 5.61 5.61 0 00.93 8 6.3 6.3 0 011.07-1.42c-.11.46-.21.91-.28 1.32a35.49 35.49 0 00-.11 8.8c.947 13.893 1.903 27.777 2.87 41.65.27 3.93.54 7.85.9 11.77.7 7.587 1.7 15.143 3 22.67.06.34.13.69.22 1-8.15 2.59-15.4 7.27-18.45 15.08-1.06 2.7-1.54 5.64-2.84 8.23-1.43 2.84-3.78 5.11-5.34 7.89-2.69 4.78-2.81 10.64-1.83 16 1.89 10.45 7.54 19.79 15 27.39h-1a15.64 15.64 0 00-6.83 2.45c-15.78 9.22-24.8 29-21.51 47.06.65 3.53 1.78 7.11 4.14 9.8a15.51 15.51 0 007.28 4.46 25.29 25.29 0 005.37 1c12.3 1 24.21-4.7 36.54-5.18a98 98 0 0112.23.57c5.94.493 11.89.807 17.85.94 9.69.23 15.14-2.35 21.32-9.59a26.1 26.1 0 003.77-5.94c5.26-.3 11.07-.76 15.27-1.1l.06.58c.23 2 .58 4.3 2.18 5.56a7.61 7.61 0 003 1.23c10.1 2.48 20.32 5 30.72 5a129.71 129.71 0 0014.59-1.12l18.27-2.11a91 91 0 0115.7 3.42c5.28 1.79 10.21 4.45 15.37 6.56 12 4.86 24.9 6.6 37.68 8.3 2.18.29 4.68.49 6.29-1 2.08-2 1.39-5.34.8-8.14-.24-1.15-.42-2.3-.56-3.46a175.25 175.25 0 0125.24 8.76l1.43.63c.42 2.18 2.43 3.92 4.36 6.27a16 16 0 002.21 2.74 7.37 7.37 0 003.17 1.14 147.82 147.82 0 0040.93 1.85 41.86 41.86 0 018.44-.29c2.069.282 4.11.74 6.1 1.37l11.57 3.32c8.53 2.44 17.26 4.91 26.11 4.36a33.4 33.4 0 005.33-.77c7-1.62 13.52-5.53 16.88-11.82 4.75-8.55 2.56-19.07 0-28.47z",
                                fill: "url(#prefix__a)"
                            }), Object(X.jsx)("path", {
                                d: "M97.02 650.54c-2.11-4.8-4.11-10.32-2-15.12a12.85 12.85 0 016.65-6.25 32 32 0 019-2.22 125.61 125.61 0 0129.26-.4c.71 5.62-.79 11.32-2.08 16.75-1.17 5-1.84 5.74-7 6-3.34.18-33.04 3.01-33.83 1.24z",
                                fill: "#FBBEBE"
                            }), Object(X.jsx)("ellipse", {
                                fill: "#464353",
                                cx: 186.07,
                                cy: 578.16,
                                rx: 143,
                                ry: 40
                            }), Object(X.jsx)("ellipse", {
                                fill: "#000",
                                opacity: .1,
                                cx: 186.07,
                                cy: 578.16,
                                rx: 143,
                                ry: 40
                            }), Object(X.jsx)("path", {
                                d: "M211.71 367a44.49 44.49 0 01-22.94 20.84 57.58 57.58 0 01-18.21 3.46c-6.79.31-13.72-.13-20.1-2.45-8.56-3.1-15.67-9.44-21-16.83-5.33-7.39-9-15.83-12.19-24.34-1.68-4.43-3.28-9.15-2.49-13.83 5.15-1.17 10.79-2.89 13.45-7.46 2.27-3.92 1.64-8.62.33-13.1-.37-1.27-.8-2.53-1.23-3.74-1-2.9-4.45-8.41-2-10.89 1.53-1.57 7.94-2.37 10.15-3.39 6.81-3.14 13.09-7.68 20.57-9.17 6.47-1.29 13.15-.08 19.61 1.26a6.45 6.45 0 012.42.87 5.82 5.82 0 011.8 2.7c1.84 4.48 2.92 9.43 4.4 14.1 1.54 4.89 3.52 9.48 7.23 12.95 2.89 2.71 6.57 4.41 10.17 6.06l8.86 4.06a11.65 11.65 0 014.19 2.71 10.61 10.61 0 012 5.44 50.82 50.82 0 01-5.02 30.75z",
                                fill: "#FBBEBE"
                            }), Object(X.jsx)("path", {
                                d: "M184.24 305.03c-14.511 15.108-37.397 18.504-55.67 8.26-.37-1.27-.8-2.53-1.23-3.74-1-2.9-4.45-8.41-2-10.89 1.53-1.57 7.94-2.37 10.15-3.39 6.81-3.14 13.09-7.68 20.57-9.17 6.47-1.29 13.15-.08 19.61 1.26a6.45 6.45 0 012.42.87 5.82 5.82 0 011.8 2.7c1.79 4.48 2.87 9.43 4.35 14.1z",
                                fill: "#000",
                                opacity: .1
                            }), Object(X.jsx)("circle", {
                                fill: "#FBBEBE",
                                cx: 151.07,
                                cy: 271.16,
                                r: 46
                            }), Object(X.jsx)("path", {
                                d: "M291.22 420.45l-3.78-22.9c-1.91-11.49-3.88-23.2-9.22-33.55-3.51-6.78-9.08-13.24-16.59-14.58a16.05 16.05 0 01-4.32-1c-2.2-1.06-3.4-3.44-5.09-5.2-4.36-4.52-11.46-4.59-17.3-6.89-5.16-2-9.38-5.85-14.08-8.79-4.7-2.94-10.55-5-15.75-3.12-.84 8.95-1.73 18.1-5.53 26.25a39.28 39.28 0 01-59.26 14.76c-8.91-6.71-14.62-17.06-17.28-27.89-.65-2.64-1.39-5.67-3.82-6.88-2.63-1.32-5.79.28-8 2.22-4 3.59-7.27 8.73-12.53 9.94-1.9.44-4 .35-5.58 1.5a12.7 12.7 0 00-2.6 3.37 12 12 0 01-10.23 5.06c-1.83-.09-4-.51-5.25.82-.93 1-1 2.56-2 3.49-1.35 1.31-3.54.67-5.42.6-3.56-.15-6.87 2.13-8.91 5s-3 6.42-4 9.86c10.93 24.34 20.93 48.71 31.86 73.05a6.23 6.23 0 01.79 3 7.31 7.31 0 01-1.36 3c-5.36 8.61-5.19 19.44-4.6 29.56.59 10.12 1.31 20.81-3.21 29.88-1.23 2.49-2.83 4.77-4 7.26-2.74 5.64-3.73 23.68-2.13 29.74h226.08c-4.31-11.85-2.67-35.63-1.77-48.21.63-8.8-1-17.59-1.7-26.39-1.53-17.97-.45-35.02-3.42-52.96z",
                                fill: "#3884FF"
                            }), Object(X.jsx)("path", {
                                d: "M37.36 446.65a35.4 35.4 0 00-.12 8.73l2.87 41.27c.27 3.89.54 7.77.9 11.65.69 7.53 1.72 15 3 22.46a4 4 0 004.1 3.89c12.65 2.68 25.72 2.57 38.63 1.84 19.7-1.1 39.37-3.61 59.1-3.18 5.08.11 11 0 14.08-4s1.29-10.47-2.73-13.7c-4.02-3.23-9.48-4-14.64-4-6.83-.07-13.66.9-20.47.5-6.25-.37-12.36-1.88-18.42-3.39l-17-4.23c.65-5.15 2.61-10 4.47-14.89 3.34-8.67 6.46-17.63 6.52-26.92.06-9.29-3.44-19.06-11.05-24.38-6.26-4.37-14.32-5.18-21.95-5-5.55.16-15.14-1.17-20.21 1-4.01 1.76-6.33 8.42-7.08 12.35z",
                                fill: "#FBBEBE"
                            }), Object(X.jsx)("path", {
                                d: "M302.79 541.01c3.33-1.27 7-.81 10.57-.33 11.49 1.57 23.15 3.18 33.8 7.77 5 2.14 9.76 5 13.14 9.21 3 3.79 4.75 8.43 6.41 13l3.84 10.52c1.46 4 2.94 8.08 3.35 12.33 1.2 12.59-7.41 24.46-18.24 31-10.83 6.54-23.58 8.87-36 11.31-12.42 2.44-24.89 5.14-37.26 8a150 150 0 01-17.53 3.45c-13.24 1.5-27.08-.71-39.66 3.67-5 1.75-9.91 4.35-15.1 5.56a93.93 93.93 0 01-10.44 1.59l-23.81 2.72a129.89 129.89 0 01-14.6 1.12c-10.4 0-20.63-2.46-30.73-4.92a7.77 7.77 0 01-3-1.21c-1.6-1.26-1.95-3.49-2.18-5.51a955.315 955.315 0 01-2.68-26.85c-.24-2.91-.42-6.06 1.17-8.51 2-3 5.9-3.94 9.46-4.52a246.88 246.88 0 0145.68-3.17c5.81-5.81 15.39-5.84 23-9a68.39 68.39 0 008.11-4.41 106 106 0 0144.53-14.07 41.45 41.45 0 009.11-1.3c5.89-1.83 11.26-6.81 17.31-5.59.75-2.07 1.27-4.84 3-6.26.86-.73 1.92-1.22 2.71-2 1.67-1.69 1.82-4.35 1.57-6.71-.25-2.36-.81-4.78-.2-7.08a9.79 9.79 0 011.11-2.47c3-5.18 7.53-7.84 13.56-7.34z",
                                fill: "#464353"
                            }), Object(X.jsx)("path", {
                                d: "M302.79 541.01c3.33-1.27 7-.81 10.57-.33 11.49 1.57 23.15 3.18 33.8 7.77 5 2.14 9.76 5 13.14 9.21 3 3.79 4.75 8.43 6.41 13l3.84 10.52c1.46 4 2.94 8.08 3.35 12.33 1.2 12.59-7.41 24.46-18.24 31-10.83 6.54-23.58 8.87-36 11.31-12.42 2.44-24.89 5.14-37.26 8a150 150 0 01-17.53 3.45c-13.24 1.5-27.08-.71-39.66 3.67-5 1.75-9.91 4.35-15.1 5.56a93.93 93.93 0 01-10.44 1.59l-23.81 2.72a129.89 129.89 0 01-14.6 1.12c-10.4 0-20.63-2.46-30.73-4.92a7.77 7.77 0 01-3-1.21c-1.6-1.26-1.95-3.49-2.18-5.51a955.315 955.315 0 01-2.68-26.85c-.24-2.91-.42-6.06 1.17-8.51 2-3 5.9-3.94 9.46-4.52a246.88 246.88 0 0145.68-3.17c5.81-5.81 15.39-5.84 23-9a68.39 68.39 0 008.11-4.41 106 106 0 0144.53-14.07 41.45 41.45 0 009.11-1.3c5.89-1.83 11.26-6.81 17.31-5.59.75-2.07 1.27-4.84 3-6.26.86-.73 1.92-1.22 2.71-2 1.67-1.69 1.82-4.35 1.57-6.71-.25-2.36-.81-4.78-.2-7.08a9.79 9.79 0 011.11-2.47c3-5.18 7.53-7.84 13.56-7.34z",
                                fill: "#000",
                                opacity: .05
                            }), Object(X.jsx)("path", {
                                d: "M106.22 656.72c-6.19 7.17-11.64 9.73-21.33 9.5-5.96-.14-11.913-.45-17.86-.93a100.2 100.2 0 00-12.24-.57c-12.34.48-24.25 6.13-36.56 5.14a25.92 25.92 0 01-5.37-1 15.63 15.63 0 01-7.29-4.42c-2.36-2.67-3.49-6.21-4.14-9.71-3.29-17.94 5.73-37.48 21.52-46.61a15.78 15.78 0 016.84-2.43c2.39-.01 4.754.51 6.92 1.52l.15.06A52.33 52.33 0 0154 618.71a9.66 9.66 0 002.62 2.11 9 9 0 003.09.58l13.14.83a31.14 31.14 0 016.6.91 52.46 52.46 0 016.94 3c7.07 3.16 14.91 4 22.55 5.22a3.37 3.37 0 012 .8c.305.38.517.824.62 1.3a25.51 25.51 0 01-5.34 23.26z",
                                fill: "#3F3D56"
                            }), Object(X.jsx)("path", {
                                d: "M36.86 607.28a78.9 78.9 0 00-13.15 16.44 82.28 82.28 0 00-10.74 32.54 60.4 60.4 0 00-.11 12.61 15.63 15.63 0 01-7.29-4.42c-2.36-2.67-3.49-6.21-4.14-9.71-3.29-17.94 5.73-37.48 21.52-46.61a15.78 15.78 0 016.84-2.43c2.39-.01 4.754.51 6.92 1.52l.15.06z",
                                fill: "#000",
                                opacity: .1
                            }), Object(X.jsx)("path", {
                                d: "M291.35 632.16c7.35-.2 15.6-.57 21 4.38 5.15 4.68 5.83 12.4 6.17 19.35l.39 8.07c.12 2.46.22 5-.77 7.28-1.76 4-6.59 5.93-11 5.7-4.41-.23-8.46-2.16-12.49-3.9a175.7 175.7 0 00-34-10.71c.38-5.58 1.013-11.133 1.9-16.66.61-3.83.71-10.24 3.27-13.42 2.71-3.36 6.24-1.54 9.92-.92a79.63 79.63 0 0015.61.83z",
                                fill: "#FBBEBE"
                            }), Object(X.jsx)("path", {
                                d: "M97.11 551.07c0 1-1.57 0-1.71-1.07-1.1-8.09-7.52-14.76-15-18s-16-3.41-24.1-2.64c-12.25 1.16-26 5.85-30.48 17.3-1.06 2.68-1.54 5.58-2.84 8.15-1.44 2.82-3.79 5.07-5.35 7.81-2.69 4.74-2.8 10.55-1.83 15.91 2.61 14.3 12.39 26.53 24.24 35 11.85 8.47 25.7 13.53 39.51 18.09a685.19 685.19 0 00112 26.75c6.16.93 12.38 1.79 18.28 3.77 5.28 1.77 10.22 4.42 15.38 6.5 12 4.82 24.91 6.54 37.7 8.23 2.18.28 4.68.48 6.29-1 2.08-1.93 1.39-5.29.8-8.06a43.35 43.35 0 015.11-30.76c2.14-3.6 4.92-7.29 4.52-11.46-.48-4.86-5.32-8.3-10.14-9.08-4.82-.78-9.72.37-14.56 1-1.67.22-3.49.36-4.95-.49a9.89 9.89 0 01-1.94-1.72 21.93 21.93 0 00-25.54-3.57c-1.79 1-4.5-1.23-6.36-2.07l-21.03-9.52c-24.16-10.93-48.44-21.91-74-28.83a15.54 15.54 0 01-5.7-2.37c-1.27-1-2.18-2.36-3.35-3.47-2.55-2.41-6.1-3.37-9.16-5.08-3.06-1.71-6.49-5.89-5.79-9.32z",
                                fill: "#464353"
                            }), Object(X.jsx)("path", {
                                d: "M421.32 681.76c-3.36 6.23-9.88 10.11-16.88 11.71a33.5 33.5 0 01-5.34.76c-8.85.55-17.59-1.9-26.12-4.32l-11.58-3.26a36.55 36.55 0 00-6.1-1.36 41.86 41.86 0 00-8.44.29 149.59 149.59 0 01-41-1.84 7.23 7.23 0 01-3.17-1.13 15.75 15.75 0 01-2.21-2.71c-3.15-3.79-6.54-6-2.81-11 2.15-2.9 6.14-4.35 7.81-7.68s.6-8.06-.39-11.5c-1.35-4.75-5.79-6.8-7.38-11.16-1.19-3.29.81-7.11 3.82-8.9s6.73-1.93 10.2-1.47c3.47.46 6.87 1.44 10.36 1.71 10.26.82 20.75-4.47 30.6-1.49 2.17.66 4.22 1.71 6.42 2.29 4.289.96 8.77.572 12.83-1.11 1.44-.54 2.85-1.19 4.25-1.83a34.23 34.23 0 018.55-3.09c9.61-1.65 18.52 5 25.77 11.49a36.44 36.44 0 016.55 7.1c2 3.12 3.06 6.75 4 10.33 2.65 9.25 4.84 19.67.26 28.17z",
                                fill: "#3F3D56"
                            }), Object(X.jsx)("path", {
                                d: "M421.32 681.76c-3.36 6.23-9.88 10.11-16.88 11.71a32.69 32.69 0 003.55-17.16c-.6-9.51-4.78-18.47-10.11-26.37a93.4 93.4 0 00-11.14-13.57c-3.18-3.2-7.09-5.74-10.51-8.67a34.23 34.23 0 018.55-3.09c9.61-1.65 18.52 5 25.77 11.49a36.44 36.44 0 016.55 7.1c2 3.12 3.06 6.75 4 10.33 2.61 9.31 4.8 19.73.22 28.23z",
                                fill: "#000",
                                opacity: .1
                            }), Object(X.jsx)("path", {
                                d: "M54.11 373.26a10.35 10.35 0 00-2.22 3.55 167.86 167.86 0 00-14.1 57.62 5.76 5.76 0 01-.65 2.79 12.21 12.21 0 01-1.47 1.59 5.52 5.52 0 00.94 8c1.65-3.11 5.6-4.12 9.11-4.39 16.81-1.33 33.23 6.49 50.09 5.9-1.19-4.11-2.9-8.06-3.87-12.22-4.29-18.47 6.41-38.58-.15-56.37-1.31-3.56-3.5-7.06-6.95-8.62a18.51 18.51 0 00-4.45-1.18c-4.26-.77-12.74-4.06-16.86-2.74-1.52.49-2.12 1.92-3.38 2.78-1.91 1.23-4.45 1.68-6.04 3.29z",
                                fill: "#3884FF"
                            }), Object(X.jsx)("rect", {
                                fill: "#3F3D56",
                                x: 89.57,
                                y: 409.66,
                                width: 223,
                                height: 142,
                                rx: 7.97
                            }), Object(X.jsx)("circle", {
                                fill: "#FFF",
                                cx: 200.57,
                                cy: 480.66,
                                r: 6
                            }), Object(X.jsx)("path", {
                                d: "M119.29 196.5c-3.36 2.43-5.66 5.92-8 9.27-4.31 6.19-9.19 12.37-16.08 15.82-2.61 1.31-5.59 2.3-7.32 4.58a12.34 12.34 0 00-1.95 5.13 101.65 101.65 0 00-2.06 19.6c0 3.28.14 6.66 1.59 9.64 1.37 2.8 3.84 5.17 4.35 8.22.39 2.38-.49 4.75-.8 7.14-.31 2.39.23 5.22 2.44 6.36 1.19.448 2.434.74 3.7.87 6.65 1.48 8.88 9.28 9.89 15.73 2.26-.13 3.28-2.72 3.75-4.83l6.93-30.81c.75-3.34 2-7.21 5.33-8.38 2.23-.77 4.67-.05 7 .15 9.15.75 16.89-6.32 25.84-8.27a33 33 0 018.71-.58c7.06.35 15.27 3.25 16.77 9.84.25 1.07.4 2.35 1.4 2.88 1 .53 2.05.08 3.1 0 4.48-.45 7.12 4.59 8.41 8.71l4.7 15c.7 2.27 1.88 4.94 4.34 5.23 2.27.28 4.2-1.87 4.54-4 .34-2.13-.4-4.34-.89-6.48-2.21-9.85 1.17-19.93 3.23-29.8 2.06-9.87 2.43-21.21-4.48-28.81-2.51-2.75-5.81-4.8-8.15-7.7-2.18-2.72-3.41-6.06-5.67-8.73-6.25-7.37-22.28-13.06-32.11-14-11.23-1.22-29.43 1.63-38.51 8.22z",
                                fill: "#3F3D56"
                            }), Object(X.jsx)("g", {
                                opacity: .1,
                                fill: "#000",
                                children: Object(X.jsx)("path", {d: "M201.37 280.8c-2.46-.3-3.64-3-4.34-5.23-1.567-5.007-3.133-10.007-4.7-15-1.29-4.13-3.93-9.17-8.41-8.71-1.05.11-2.18.52-3.1 0-.92-.52-1.15-1.81-1.4-2.88-1.5-6.6-9.71-9.49-16.77-9.84a33.43 33.43 0 00-8.71.57c-8.95 2-16.69 9-25.84 8.27-2.36-.19-4.8-.91-7-.14-3.37 1.16-4.58 5-5.33 8.38l-6.93 30.8c-.47 2.12-1.49 4.71-3.75 4.83-1-6.44-3.24-14.24-9.89-15.72a15.72 15.72 0 01-3.7-.87 4.34 4.34 0 01-1.93-2.15c-.18.93-.39 1.86-.51 2.79-.3 2.38.23 5.22 2.44 6.36 1.19.448 2.434.74 3.7.87 6.65 1.48 8.88 9.28 9.89 15.73 2.26-.13 3.28-2.72 3.75-4.83l6.93-30.81c.75-3.34 2-7.21 5.33-8.38 2.23-.77 4.67-.05 7 .15 9.15.75 16.89-6.32 25.84-8.27a33 33 0 018.71-.58c7.06.35 15.27 3.25 16.77 9.84.25 1.07.4 2.35 1.4 2.88 1 .53 2.05.08 3.1 0 4.48-.45 7.12 4.59 8.41 8.71 1.56 5.007 3.127 10.007 4.7 15 .7 2.27 1.88 4.94 4.34 5.23 2.27.28 4.2-1.87 4.54-4a13.58 13.58 0 00-.6-5.31 4.13 4.13 0 01-3.94 2.31zM89.83 261.76c-.51-3.05-3-5.42-4.35-8.22a16.45 16.45 0 01-1.48-6c0 1.12-.1 2.24-.11 3.37 0 3.28.14 6.66 1.59 9.64 1.11 2.27 2.94 4.27 3.86 6.58a15.06 15.06 0 00.49-5.37zM208.25 240.48c-1.82 8.72-4.66 17.6-3.78 26.34.57-6.45 2.45-12.94 3.78-19.34a51 51 0 001.16-14.83 61.14 61.14 0 01-1.16 7.83z"})
                            }), Object(X.jsx)("path", {
                                d: "M900.96 179.208h.03c67.12 23.11 110.5 59.3 110.5 96.73 0 39.03-46.36 77.19-117.6 100.79a363.765 363.765 0 01-11.56 3.61 325.76 325.76 0 013.73 16.61c14.06 71.04 3.23 129.44-30.1 148.73-32.26 18.69-84.44.33-137.26-45.12a410.32 410.32 0 01-16.79-15.32c-4.37 4.18-8.69 8.18-13 11.95-54.52 47.66-110.52 67.46-143.89 48.2-32.3-18.63-42.46-72.99-29.46-141.45a412.914 412.914 0 014.88-22.18 371.125 371.125 0 01-16.8-5.26C435.11 353.078 390 314.448 390 275.938c0-37.29 42.02-73.29 107.81-96.18 7.36-2.57 15.05-4.98 23-7.24a369.364 369.364 0 01-4.59-20.58c-13.65-69.67-4.04-125.34 28.35-144.09 33.82-19.55 90.03 1.44 146.14 51.27a396.043 396.043 0 0110.3 9.51 427.838 427.838 0 0115.47-14.2c53.56-46.59 106.58-66.09 139-47.39 33.81 19.49 43.71 78.71 28.57 152.22a408.467 408.467 0 01-3.09 13.65 418.843 418.843 0 0120 6.3zm-15 171.833c61.51-20.38 99.4-51.59 99.4-75.59 0-22.56-35.08-51.83-92.59-71.62-5.94-2.05-12.12-3.99-18.47-5.83a623.06 623.06 0 01-30.25 77.58 621.6 621.6 0 0131.47 78.73c3.56-1.06 7.04-2.14 10.44-3.27zm-25.52 50.58l.02-.08a346.91 346.91 0 00-3.37-15 620.2 620.2 0 01-84.17 13 624.23 624.23 0 01-52.09 66.14 384.13 384.13 0 0015.63 14.25c45.17 38.87 87.05 53.6 106.64 42.27 9.2-5.33 16.64-18.63 20.34-38.58 4.1-22.19 3.22-50.59-3-82zM602.32 520.26c21.29-7.55 45.46-22.47 69.57-43.55 4.033-3.534 7.98-7.17 11.84-10.91a645.09 645.09 0 01-53.35-65.9 625.79 625.79 0 01-83.75-12.13 412.178 412.178 0 00-4.53 20.63c-11.12 58.5-2.97 102.19 16.63 113.5 9.21 5.31 24.45 5.12 43.59-1.64zm-89.64-169.37a319.427 319.427 0 0015.34 4.8 646.29 646.29 0 0130.66-79.6 637.08 637.08 0 01-30.29-78.48 371.415 371.415 0 00-21.39 6.73c-56.26 19.61-90 48.48-90 71.11 0 10.63 7.78 23.74 23.19 36.94 17.16 14.68 42.18 28.14 72.49 38.5zm30.05-204.54v.01a368.998 368.998 0 004.27 19.15 648.42 648.42 0 0182.93-12.89 635.89 635.89 0 0152.93-65.52c-3.11-2.97-6.22-5.85-9.32-8.6-48.46-43.03-94.43-60.15-115.22-48.15-19.52 11.28-27.27 56.31-15.59 116zm268.11 66.19a908.312 908.312 0 0117.88 32.34 565.54 565.54 0 0019.89-53.51c-17.84-4.08-36.83-7.4-56.66-9.91a847.724 847.724 0 0118.89 31.08zM701.48 106.07v.01c-12.44 13.41-24.81 28.21-36.88 44.13a780.043 780.043 0 0173.45 0 569.3 569.3 0 00-36.57-44.14zm-110 106.65h-.02a762.61 762.61 0 0119.07-31.31c-19.7 2.47-38.61 5.68-56.34 9.68 5.4 17.41 12.01 35.44 19.74 53.77a788.958 788.958 0 0117.55-32.14zm19.61 158.65h-.02a760.21 760.21 0 01-19.47-31.91 782.128 782.128 0 01-17.61-32.16c-7.9 18.73-14.66 37.15-20.15 54.86a564.64 564.64 0 0057.25 9.21zm91.14 75.33h-.02a563.94 563.94 0 0036.5-44.88c-12.34.56-24.843.84-37.51.84-12.34 0-24.46-.237-36.36-.71 12.24 16.21 24.79 31.21 37.39 44.75zm126.69-140.35a819.766 819.766 0 01-18 32.92 945.032 945.032 0 01-19.08 31.63 561.35 561.35 0 0058-9.89 562.82 562.82 0 00-20.92-54.66zm-41 19.66l.03-.04a795.448 795.448 0 0026.71-50.3 857.481 857.481 0 00-26.79-49.87 820.926 820.926 0 00-30-47.81c-18.47-1.4-37.53-2.14-56.69-2.14-19.16 0-38.1.73-56.59 2.13a742.945 742.945 0 00-30.13 48 757.149 757.149 0 00-26.43 50.1 732.199 732.199 0 0026.51 50.08 758.832 758.832 0 0030.39 48.17c18.12 1.18 36.85 1.78 56.27 1.78s38.47-.68 56.91-2a875.314 875.314 0 0029.81-48.1zm54.77-296.46c-19.54-11.27-62.42 4.49-108.3 44.42a401.256 401.256 0 00-14.29 13.11 625.16 625.16 0 0152.53 65.56 635.74 635.74 0 0183.09 13.13 362.529 362.529 0 002.8-12.35c13.07-63.47 4.98-111.87-15.83-123.87z",
                                fill: "#3884FF"
                            }), Object(X.jsx)("path", {
                                d: "M700.5 230c22.448 0 42.685 13.522 51.275 34.261 8.59 20.739 3.842 44.61-12.03 60.483-15.873 15.873-39.745 20.622-60.484 12.031C658.522 328.185 645 307.948 645 285.5a55.49 55.49 0 0155.5-55.5",
                                fill: "#3884FF"
                            })]
                        })]
                    }), Object(X.jsx)(u.a, {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        color: "white",
                        fontSize: 154,
                        visibility: {sm: "visible", md: "hidden"},
                        children: Object(X.jsx)(it.a, {color: "inherit", fontSize: "inherit"})
                    }), Object(X.jsx)(u.a, {
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        color: e.palette.grey[100],
                        fontSize: 154,
                        visibility: {sm: "hidden", md: "visible"},
                        className: "overlay",
                        children: Object(X.jsx)(it.a, {color: "inherit", fontSize: "inherit"})
                    })]
                })
            }, pa = s.a.forwardRef((function (e, t) {
                return Object(X.jsx)(w.a, Object(f.a)({direction: "up", ref: t}, e))
            })), ma = Object(O.a)((function (e) {
                return {
                    container: Object(x.a)({}, e.breakpoints.down("sm"), {flexDirection: "column-reverse"}),
                    left: Object(x.a)({flex: k, padding: e.spacing(2)}, e.breakpoints.down("sm"), {
                        flex: 1,
                        textAlign: "center"
                    }),
                    right: {flex: 1 - k, padding: e.spacing(2), position: "relative"},
                    watchIntro: Object(x.a)({
                        marginLeft: e.spacing(1),
                        marginTop: 0
                    }, e.breakpoints.down("sm"), {marginLeft: 0, marginTop: e.spacing(1)})
                }
            })), xa = function () {
                var e = Object(o.useState)(!1), t = Object(c.a)(e, 2), n = t[0], i = t[1], r = ma(),
                    s = Object(o.useMemo)((function () {
                        return {
                            openModal: function () {
                                return i(!0)
                            }, closeModal: function () {
                                return i(!1)
                            }
                        }
                    }), []), l = s.openModal, d = s.closeModal;
                return Object(X.jsxs)(g.a, {
                    children: [Object(X.jsxs)(u.a, {
                        display: "flex",
                        alignItems: "center",
                        marginTop: 8,
                        marginBottom: 8,
                        className: r.container,
                        children: [Object(X.jsxs)("div", {
                            className: r.left,
                            children: [Object(X.jsx)(v.a, {
                                variant: "h3",
                                children: "Learn Reanimated v1"
                            }), Object(X.jsx)(u.a, {
                                marginTop: 2,
                                marginBottom: 2,
                                children: Object(X.jsx)(v.a, {children: "Learn to leverage the power of declarative gestures and animations in React Native to build user experiences that run at 60 fps, even on low-end devices."})
                            }), Object(X.jsxs)(u.a, {
                                display: "flex",
                                flexDirection: {xs: "column", md: "row"},
                                width: "fit-content",
                                marginLeft: {xs: "auto", md: 0},
                                marginRight: {xs: "auto", md: 0},
                                children: [Object(X.jsx)(St, {
                                    color: "primary",
                                    to: a.SIGN_IN,
                                    children: "Get Started for $9 a Month"
                                }), Object(X.jsx)(St, {onClick: l, className: r.watchIntro, children: "Watch Intro"})]
                            })]
                        }), Object(X.jsx)(ot, {
                            className: r.right,
                            onClick: l,
                            disableRipple: !0,
                            children: Object(X.jsx)(ba, {})
                        })]
                    }), Object(X.jsx)(y.a, {
                        TransitionComponent: pa,
                        keepMounted: !0,
                        onClose: d,
                        "aria-labelledby": "Learn React Native Declarative Gestures and Animations",
                        maxWidth: !1,
                        open: n,
                        children: Object(X.jsx)(Zt, {id: "kq19l1avxq", playing: n})
                    }), Object(X.jsx)(u.a, {
                        marginBottom: 2,
                        children: Object(X.jsxs)(dt, {
                            padding: 2,
                            children: [Object(X.jsx)(v.a, {
                                style: {fontWeight: 500},
                                children: "Reanimated v2 is out"
                            }), Object(X.jsx)(v.a, {
                                children: Object(X.jsx)(kt, {
                                    to: a.REANIMATED2,
                                    children: "Learn about the new API."
                                })
                            })]
                        })
                    }), Object(X.jsx)(ht, {course: "gestures-and-animations"}), Object(X.jsx)(u.a, {
                        marginBottom: 2,
                        children: Object(X.jsxs)(dt, {
                            padding: 2,
                            children: [Object(X.jsx)(v.a, {
                                style: {fontWeight: 500},
                                children: "Looking for more?"
                            }), Object(X.jsx)(v.a, {
                                children: Object(X.jsx)(kt, {
                                    to: a.REANIMATED2,
                                    children: "Learn about Reanimated 2."
                                })
                            })]
                        })
                    })]
                })
            };
        Object(m.a)({
            apiKey: "AIzaSyCOjo2zvkh-FzNo-WpFPiafpbIlSkYjuHM",
            authDomain: "start-react-native.firebaseapp.com",
            databaseURL: "https://start-react-native.firebaseio.com",
            projectId: "start-react-native",
            storageBucket: "start-react-native.appspot.com",
            messagingSenderId: "863664398389",
            appId: "1:863664398389:web:d5ac7c9e529b228e"
        });
        var fa = "#3e3e54", Oa = function () {
            var e = Object(o.useState)(!1), t = Object(c.a)(e, 1)[0], n = t ? "dark" : "light", i = Object(j.a)({
                palette: {
                    type: n,
                    text: {primary: t ? "#fff" : fa},
                    primary: {main: "#3884ff", light: "#DEEAFF"},
                    secondary: {main: "#FF6584"},
                    common: {black: fa},
                    background: {default: t ? fa : "#fff"},
                    grey: {100: t ? "#5e5e80" : "#f5f5f5"}
                },
                shape: {borderRadius: 8},
                typography: {
                    fontFamily: ["Rubik", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(","),
                    button: {textTransform: "none"},
                    overline: {
                        textTransform: "none",
                        fontSize: "0.9rem",
                        lineHeight: 1,
                        fontFamily: ["SourceCodePro", "monospace"].join(", ")
                    }
                },
                overrides: {MuiOutlinedInput: {input: {paddingTop: 8.5, paddingBottom: 8.5}}}
            });
            return Object(X.jsx)(u.a, {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                children: Object(X.jsxs)(h.a, {
                    theme: Object(b.a)(i),
                    children: [Object(X.jsx)(p.a, {}), Object(X.jsx)(re, {
                        children: Object(X.jsx)(de, {
                            children: Object(X.jsxs)(l.a, {
                                children: [Object(X.jsx)(Qt, {}), Object(X.jsx)(Bt, {}), Object(X.jsxs)(d.d, {
                                    children: [Object(X.jsx)(d.b, {
                                        path: a.HOME,
                                        exact: !0,
                                        component: cn
                                    }), Object(X.jsx)(d.b, {
                                        path: a.REANIMATED1,
                                        exact: !0,
                                        component: xa
                                    }), Object(X.jsx)(d.a, {
                                        from: a.REANIMATED2,
                                        to: a.HOME
                                    }), Object(X.jsx)(d.b, {
                                        path: a.AUTH,
                                        exact: !0,
                                        component: bn
                                    }), Object(X.jsx)(d.b, {
                                        path: a.SIGN_IN,
                                        exact: !0,
                                        component: fn
                                    }), Object(X.jsx)(d.b, {
                                        path: a.YOUTUBE_FRIENDS,
                                        exact: !0,
                                        component: vn
                                    }), Object(X.jsx)(d.b, {
                                        path: a.EMAIL_SENT,
                                        exact: !0,
                                        component: gn
                                    }), Object(X.jsx)(d.b, {
                                        path: a.ACCOUNT,
                                        component: $n
                                    }), Object(X.jsx)(d.b, {
                                        path: a.LESSON,
                                        exact: !0,
                                        component: la
                                    }), Object(X.jsx)(d.b, {
                                        path: a.SUPPORT,
                                        exact: !0,
                                        component: ua
                                    }), Object(X.jsx)(d.b, {component: Zn})]
                                }), Object(X.jsx)(gt, {})]
                            })
                        })
                    })]
                })
            })
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        r.a.render(Object(X.jsx)(Oa, {}), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
            e.unregister()
        }))
    }
}, [[154, 1, 2]]]);
