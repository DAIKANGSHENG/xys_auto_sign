const get_login_code=function(e) {
    let n={navigateTo: true, redirectTo: true, reLaunch: true}
    let t='login'
    for (var r = arguments.length, o = new Array(1 < r ? r - 1 : 0), i = 1; i < r; i++)
        o[i - 1] = arguments[i];
    e = e || {};
    var a, c, u, s, f = null, l = Object.assign({}, e);
    if ("string" == typeof e)
        return o.length ? (u = wx)[t].apply(u, [e].concat(o)) : wx[t](e);
    "navigateTo" !== t && "redirectTo" !== t || (u = Pe(u = -1 < (u = l.url ? l.url.replace(/^\//, "") : "").indexOf("?") ? u.split("?")[0] : u)) && (u = new u).componentWillPreload && (s = ge + ve++,
        c = he((a = -1 < (c = l.url.indexOf("?"))) ? l.url.substring(c + 1, l.url.length) : ""),
        l.url += (a ? "&" : "?") + "".concat("__preload_", "=").concat(s),
        we(s, u.componentWillPreload(c)),
        we("$preloadComponent", u)),
    n[t] && (u = he((c = -1 < (s = (a = l.url = l.url || "").indexOf("?"))) ? a.substring(s + 1, a.length) : ""),
        s = ge + ve++,
        l.url += (c ? "&" : "?") + "".concat("__key_", "=").concat(s),
        we(s, u));
    var p = new Promise((function(n, r) {
            var i;
            ["fail", "success", "complete"].forEach((function(o) {
                    l[o] = function(i) {
                        e[o] && e[o](i),
                            "success" === o ? n("connectSocket" === t ? Promise.resolve().then((function() {
                                    return Object.assign(f, i)
                                }
                            )) : i) : "fail" === o && r(i)
                    }
                }
            )),
                f = o.length ? (i = wx)[t].apply(i, [l].concat(o)) : wx[t](l)
        }
    ));
    return "uploadFile" !== t && "downloadFile" !== t || (p.progress = function(e) {
            return f && f.onProgressUpdate(e),
                p
        }
            ,
            p.headersReceived = function(e) {
                return f && f.onHeadersReceived(e),
                    p
            }
            ,
            p.abort = function(e) {
                return e && e(),
                f && f.abort(),
                    p
            }
    ),
        p
}
module.exports =get_login_code