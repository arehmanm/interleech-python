/* XXX - NOTE - This file is modified to remove all cross-domain access attempts */
EAS_flash = 1;
EAS_proto = "http:";
if (location.protocol == "https:") {
    EAS_proto = "https:"
}
EAS_server = EAS_proto + "//ads.aftonbladet.se";

function EAS_uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (f) {
        var b = Math.random() * 16 | 0,
            a = f == "x" ? b : (b & 3 | 8);
        return a.toString(16)
    })
}
/*
try {
    if (typeof parent.EAS_pageviewid !== "undefined") {
        EAS_pageviewid = parent.EAS_pageviewid
    } else {
        EAS_pageviewid = EAS_uuid();
        if (typeof window.frameElement.EAS_src !== "undefined") {
            parent.EAS_pageviewid = EAS_pageviewid
        }
    } if (window.frameElement.EAS_src.indexOf("pageviewid") == -1) {
        window.frameElement.EAS_src += ";pageviewid=" + EAS_pageviewid
    }
} catch (e) {
    if (typeof EAS_pageviewid === "undefined") {
*/
        EAS_pageviewid = EAS_uuid()
/*
    }
}
*/

function EAS_load(a) {
    document.write('<script type="text/javascript" src="' + a + '"><\/script>')
}

function EAS_load_script(b, f) {
    var c = document.getElementsByTagName("head")[0];
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = b;
    a.onreadystatechange = f;
    a.onload = f;
    c.appendChild(a)
}

function EAS_init(f, c) {
    var a = new Date().getTime();
    var b = EAS_server + "/eas?target=_blank&EASformat=jsvars&EAScus=" + f + "&ord=" + a;
    EAS_detect_flash();
    b += "&EASflash=" + EAS_flash;
    if (c) {
        b += "&" + c
    }
    if (b.indexOf("pageviewid") == -1) {
        b += "&pageviewid=" + EAS_pageviewid
    }
    EAS_load(b)
}

function EAS_detect_flash() {
    if (EAS_flash > 1) {
        return
    }
    var j = 11;
    var f = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
    var g = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
    var c = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;
    if (g && c && !f) {
        document.write('<SCRIPT LANGUAGE="VBScript"> \n');
        document.write("on error resume next \nDim eas_flobj(" + j + ") \n");
        for (i = 2; i <= j; i++) {
            document.write("Set eas_flobj(" + i + ') = CreateObject("ShockwaveFlash.ShockwaveFlash.' + i + '") \n');
            document.write("if(IsObject(eas_flobj(" + i + "))) Then EAS_flash=" + i + " \n")
        }
        document.write("</SCRIPT> \n")
    } else {
        if (navigator.plugins) {
            if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                var h = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
                var a = navigator.plugins["Shockwave Flash" + h].description;
                var b = parseInt(a.substr(a.indexOf(".") - 2, 2), 10);
                if (b > 1) {
                    EAS_flash = b
                }
            }
        }
    }
}

function EAS_embed_flash(b, q, a, j, h, s, f, t) {
    var m = "",
        k, n = "";
    var g = "eas_" + new Date().getTime() + "" + Math.floor(Math.random() * 11);
    var c = (navigator.appVersion.indexOf("MSIE") != -1 && navigator.userAgent.indexOf("Opera") == -1);
    if (j) {
        var l = [];
        var r, p, o;
        l = j.split(",");
        for (k = 0; k < l.length; k++) {
            r = l[k].indexOf("=");
            p = l[k].substring(0, r);
            o = l[k].substring(r + 1, l[k].length);
            if (p.toLowerCase() == "flashvars") {
                if (typeof h === "undefined") {
                    h = o
                } else {
                    h += "&" + o
                }
            } else {
                m += '<param name="' + p + '" value="' + o + '" />'
            }
        }
    }
    if (s && f) {
        var l = [];
        l = s.split(",");
        for (k = 0; k < l.length; k++) {
            h += (h ? "&" : "") + l[k] + "=" + f + l[k]
        }
    }
    if (h) {
        m += '<param name="FlashVars" value="' + h + '" />'
    }
    if (c) {
        n = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + b + '" height="' + q + '" id="' + g + '" name="' + g + '"><param name="movie" value="' + a + '" />';
        n += m;
        n += "</object>"
    } else {
        n += '<object type="application/x-shockwave-flash" data="' + a + '" width="' + b + '" height="' + q + '" id="' + g + '" name="' + g + '">';
        n += m;
        n += "</object>"
    } if (t) {
        container = document.createElement("div");
        container.innerHTML = n;
        return container.firstChild
    } else {
        document.write(n);
        return g
    }
}

function EAS_show_flash(c, b, f, a) {
    EAS_embed_flash(c, b, f, a)
}

function EAS_statistics() {
    if (typeof EAS_cu === "undefined") {
        return
    }
    document.write('<img width="1" height="1" src="' + EAS_server + "/eas?cu=" + EAS_cu + ";ord=" + (new Date()).getTime() + '">')
}

function EAS_load_fif(k, g, j, b, l, f) {
    var h = document;
    var c = h.createElement("iframe");
    var a = h.getElementById(k);
    c.src = g;
    c.style.width = b + "px";
    c.style.height = l + "px";
    c.style.margin = "0px";
    c.style.borderWidth = "0px";
    c.style.padding = "0px";
    c.scrolling = "no";
    c.frameBorder = "0";
    c.allowTransparency = "true";
    c.EAS_src = (f) ? j : j + ";fif=y";
    a.appendChild(c)
}

function EAS_create_iframe(f, c, a, g) {
    var b = document.createElement("iframe"),
        g = g || "javascript:false";
    b.src = g;
    b.style.width = c + "px";
    b.style.height = a + "px";
    b.style.margin = "0px";
    b.style.borderWidth = "0px";
    b.style.padding = "0px";
    b.scrolling = "no";
    b.frameBorder = "0";
    b.allowTransparency = "true";
    f.appendChild(b);
    return b
}

function EAS_resize_fif(c, b, a) {
/*
    if (typeof inDapIF !== "undefined") {
        var f = window.frameElement;
        var g = f.parentNode;
        if (c) {
            f._width = f.style.width;
            f._height = f.style.height;
            f.style.width = b + "px";
            f.style.height = a + "px"
        } else {
            f.style.width = f._width;
            f.style.height = f._height
        }
        g.style.width = f.style.width;
        g.style.height = f.style.height
    }
*/
}

function EAS_ism(id, width, height, minVisibleRatio, url, interval, maxLogInterval, activeTimeout, maxDuration, impTime, date) {
    this.elementId = id;
    this.width = width;
    this.height = height;
    this.minVisibleRatio = minVisibleRatio;
    this.logUrl = url;
    this.interval = interval;
    this.logInterval = 0;
    this.maxLogInterval = maxLogInterval;
    this.activeTimeout = activeTimeout;
    this.maxDuration = maxDuration;
    this.isActive = true;
    this.activeDuration = 0;
    this.loggedDuration = 0;
    this.totalDuration = 0;
    this.lastActive = 0;
    this.lastLogged = 0;
    this.logEnabled = true;
    this.debugEnabled = this.getDebug();
    this.impTime = impTime;
    this.date = date;
    this.updateLogInterval = (function () {
        var f0 = 1,
            f1 = 1;
        return function () {
            var f = f0 + f1;
            f0 = f1;
            f1 = f;
            this.logInterval = Math.min(f0 * this.interval, this.maxLogInterval)
        }
    })();
    var _this = this;
    w = window;
    d = document;
/*
    if (typeof inDapIF !== "undefined") {
        w = window.top;
        d = parent.document
    }
*/
    if (
        /*@cc_on!@*/
        false) {
        this.addEventHandler(d, "focusin", function () {
            _this.setActive()
        });
        this.addEventHandler(d, "focusout", function () {
            _this.setInactive()
        })
    } else {
        this.addEventHandler(w, "focus", function () {
            _this.setActive()
        });
        this.addEventHandler(w, "blur", function () {
            _this.setInactive()
        })
    }
    this.addEventHandler(w, "scroll", function () {
        _this.setActive()
    });
    this.addEventHandler(w, "resize", function () {
        _this.setActive()
    });
    setInterval(function () {
        _this.update()
    }, _this.interval);
    if (this.debugEnabled) {
        ismElem = document.getElementById(this.elementId);
        debugWidth = (this.width) - 2;
        if (debugWidth < 100) {
            debugWidth = 100
        }
        this.debugDiv = document.createElement("div");
        this.debugDiv.style.background = "#20AA4F";
        this.debugDiv.style.position = "absolute";
        this.debugDiv.style.top = "0px";
        this.debugDiv.style.left = "0px";
        this.debugDiv.style.width = debugWidth + "px";
        this.debugDiv.style.fontSize = "10px";
        this.debugDiv.style.fontFamily = "Verdana";
        this.debugDiv.style.color = "#000";
        this.debugDiv.style.border = "1px solid white";
        this.debugDiv.style.zIndex = "1000";
        ismElem.appendChild(this.debugDiv)
    }
}
EAS_ism.prototype.addEventHandler = function (a, c, b) {
    if (a.addEventListener) {
        a.addEventListener(c, b, false)
    } else {
        if (a.attachEvent) {
            a.attachEvent("on" + c, b)
        }
    }
};
EAS_ism.prototype.setActive = function () {
    this.isActive = true;
    this.lastActive = this.activeDuration
};
EAS_ism.prototype.setInactive = function () {
    this.isActive = false
};
EAS_ism.prototype.getPosition = function (c) {
    var b = document.getElementById(c);
/*
    if (typeof inDapIF !== "undefined") {
        b = window.frameElement.parentNode
    }
*/
    var a = b.getBoundingClientRect();
    return {
        top: a.top,
        right: a.left + this.width,
        bottom: a.top + this.height,
        left: a.left
    }
};
EAS_ism.prototype.getWindowSize = function () {
    var b = {
        width: 0,
        height: 0
    };
    var a = window;
    var c = document;
/*
    if (typeof inDapIF !== "undefined") {
        a = window.top;
        c = parent.document
    }
    if (typeof a.top.innerWidth === "number") {
        b.width = a.top.innerWidth;
        b.height = a.top.innerHeight
    } else {
*/
        if (c.documentElement && (c.documentElement.clientWidth || c.documentElement.clientHeight)) {
            b.width = c.documentElement.clientWidth;
            b.height = c.documentElement.clientHeight
        } else {
            if (c.body && (c.body.clientWidth || c.body.clientHeight)) {
                b.width = c.body.clientWidth;
                b.height = c.body.clientHeight
            }
        }
/*
    }
*/
    return b
};
EAS_ism.prototype.isHidden = function (c, a) {
    function f(g) {
        return (g.right - g.left) * (g.bottom - g.top)
    }
    var b = f(a);
    a.left = Math.max(0, a.left);
    a.right = Math.min(a.right, c.width);
    a.top = Math.max(0, a.top);
    a.bottom = Math.min(a.bottom, c.height);
    return (f(a) / b < this.minVisibleRatio)
};
EAS_ism.prototype.log = function (f) {
    if (f <= 0) {
        return
    }
    var c = this.logUrl + "&time=" + f + "&impTime=" + this.impTime + "&date=" + this.date;
    if (this.lastLogged == 0) {
        c += "&first"
    }
    var a = document.getElementById("EAS_ism");
    var b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
    b.setAttribute("id", "EAS_ism");
    b.setAttribute("src", c);
    if (a == null) {
        document.getElementsByTagName("head")[0].appendChild(b)
    } else {
        document.getElementsByTagName("head")[0].replaceChild(b, a)
    }
    this.logEnabled = false;
    this.lastLogged = this.totalDuration;
    this.updateLogInterval()
};
EAS_ism.prototype.parseResponse = function (a) {
    if ("stop" in a && !a.stop) {
        this.loggedDuration = this.activeDuration;
        this.logEnabled = true
    }
};
EAS_ism.prototype.update = function () {
    var b = false;
    if (this.isActive) {
        if (this.activeDuration >= this.maxDuration || this.activeDuration - this.lastActive >= this.activeTimeout) {
            this.setInactive()
        } else {
            var a = this.getPosition(this.elementId);
            var c = this.getWindowSize();
            if (!this.isHidden(c, a)) {
                this.activeDuration += this.interval;
                b = true
            }
        }
    }
    if (this.logEnabled && this.lastLogged < this.maxDuration) {
        this.totalDuration += this.interval;
        if (this.totalDuration - this.lastLogged >= this.logInterval) {
            this.log(this.activeDuration - this.loggedDuration)
        }
    }
    if (this.debugEnabled) {
        this.debug(b)
    }
};
EAS_ism.prototype.getDebug = function () {
    if (typeof EAS_debug_ism !== "undefined") {
        return EAS_debug_ism
    }
    var a = "";
    var b = document;
/*
    if (typeof inDapIF !== "undefined") {
        b = parent.document
    }
*/
    if (typeof b.cookie !== "undefined") {
        a = (a = b.cookie.match(new RegExp("(^|;|\\s)eas_debug_ism=([^;]+);?"))) ? a[2] : ""
    }
    if (a == "") {
        return false
    }
    return true
};
EAS_ism.prototype.debug = function (a) {
    if (this.debugEnabled && typeof this.debugDiv !== "undefined") {
        pos = this.getPosition(this.elementId);
        if (pos.top < 0 && pos.bottom > 0) {
            this.debugDiv.style.top = (-pos.top) + "px"
        } else {
            this.debugDiv.style.top = "0px"
        }
        this.debugDiv.innerHTML = "&nbsp;" + (this.isActive ? "Active" : "Idle") + (this.isActive ? " and " + (a ? "visible" : "hidden") : "") + "<br/>&nbsp;In-screen time: " + (this.activeDuration / 1000) + (this.logInterval ? ", Log interval: " + (this.logInterval / 1000) : "")
    }
};
if (!window.eas || !window.eas.hlp) {
    window.eas = window.eas || {};
    window.eas.hlp = {
        version: "1.0.0",
        isIE: (navigator.appVersion.indexOf("MSIE") != -1),
        win: window.top,
/*
        doc: window.top.document,
*/
        handleError: function (a) {
            if (typeof eas_debug_mode != "undefined" && eas_debug_mode) {
                eas.hlp.isIE ? eas.hlp.error(a.name + ": " + a.description) : eas.hlp.error({
                    name: a.name,
                    stack: a.stack
                })
            }
        },
        handleWarn: function (a) {
            if (typeof eas_debug_mode != "undefined" && eas_debug_mode) {
                eas.hlp.isIE ? eas.hlp.log(a.name + ": " + a.description) : eas.hlp.log({
                    name: a.name,
                    stack: a.stack
                })
            }
        },
        log: function (a) {
            if (typeof eas_debug_mode != "undefined" && eas_debug_mode) {
                if (eas.hlp.isIE) {
                    if (typeof (console) != "undefined" && !! console.dir) {
                        console.dir(a)
                    } else {
                        if (typeof (console) != "undefined" && !! console.log && typeof (JSON) != "undefined") {
                            console.log(JSON.stringify(a))
                        } else {}
                    }
                } else {
                    console.log(a)
                }
            }
        },
        error: function (a) {
            if (typeof eas_debug_mode != "undefined" && eas_debug_mode) {
                (typeof (console) != "undefined" && !! console.error) ? console.error(a) : eas.hlp.log(a)
            }
        },
        getScrollX: function () {
/*
            return window.top.document.body.scrollLeft || window.top.document.documentElement.scrollLeft
*/
        },
        getScrollY: function () {
/*
            return window.top.document.body.scrollTop || window.top.document.documentElement.scrollTop
*/
        },
        getScreenWidth: function () {
/*
            return window.top.innerWidth || parent.document.documentElement.clientWidth || parent.document.documentElement.getElementsByTagName("body")[0].clientWidth
*/
        },
        getScreenHeight: function () {
/*
            return window.top.innerHeight || parent.document.documentElement.clientHeight || parent.document.documentElement.getElementsByTagName("body")[0].clientHeight
*/
        },
        getDocumentHeight: function () {
            return parent.document.documentElement.offsetHeight
        },
        getDocumentWidth: function () {
            return parent.document.documentElement.offsetWidth
        },
        getFlash: function (a) {
/*
            if (eas.hlp.isIE) {
                return (window.top || window)[a] || window[a]
            } else {
                return (parent.document || document)[a] || document[a]
            }
*/
        },
        addEvent: function (b, c, a) {
            if (b.addEventListener) {
                b.addEventListener(c, a, false)
            } else {
                if (b != window.top && b.attachEvent) {
                    b.attachEvent("on" + c, a)
                } else {
                    b["on" + c] = a
                }
            }
        },
        removeEvent: function (b, c, a) {
            try {
                if (b.addEventListener) {
                    b.removeEventListener(c, a, false)
                } else {
                    if (b != window.top && b.attachEvent) {
                        b.detachEvent("on" + c, a)
                    } else {
                        b["on" + c] = null
                    }
                }
            } catch (f) {}
        },
        addFlashListener: function (a) {
            try {
                if (!eas.hlp.win.eas_flashListeners) {
                    eas.hlp.win.eas_flashListeners = []
                }
                var c = {
                    func: a,
                    context: window
                };
                eas.hlp.win.eas_flashListeners.push(c)
            } catch (b) {
                eas.hlp.handleError(b)
            }
        },
        removeFlashListener: function (c) {
            try {
                if (!eas.hlp.win.eas_flashListeners) {
                    return false
                }
                var b = eas.hlp.win.eas_flashListeners;
                for (var a in b) {
                    if (b[a] && b[a].func == c) {
                        delete b[a]
                    }
                }
            } catch (f) {
                eas.hlp.handleError(f)
            }
        },
        getPos: function (f, b) {
            var a = window,
                h, c;
            try {
                c = f.getBoundingClientRect();
                h = {
                    left: c.left + eas.hlp.getScrollX(),
                    right: c.right + eas.hlp.getScrollX(),
                    top: c.top + eas.hlp.getScrollY(),
                    bottom: c.bottom + eas.hlp.getScrollY()
                };
/*
                if (b) {
                    while (a != window.top) {
                        f = a.frameElement;
                        a = parent.window;
                        c = f.getBoundingClientRect();
                        h.left += c.left;
                        h.right += c.left;
                        h.top += c.top;
                        h.bottom += c.top
                    }
                }
*/
            } catch (g) {
                eas.hlp.handleError(g)
            }
            return h
        }
    }
};
