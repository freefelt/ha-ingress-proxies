(function(){
    var p = location.pathname.replace(/\/$/,'');
    var m = p.match(/^(\/[0-9a-f]+_(?:openwrt_proxy|adguardhome_proxy))/);
    if(!m) return;
    var B = m[1];
    function R(u){
        if(typeof u !== 'string') return u;
        if(u.indexOf(B) === 0) return u;
        if(u.indexOf('//') === 0 || u.indexOf('http') === 0) return u;
        if(u[0] === '/') return B + u;
        return u;
    }
    var _f = window.fetch;
    window.fetch = function(u, o){
        return _f.call(this, typeof u === 'string' ? R(u) : u, o);
    };
    var _o = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url){
        if(typeof url === 'string') arguments[1] = R(url);
        return _o.apply(this, arguments);
    };
    var _W = window.WebSocket;
    window.WebSocket = function(url, prot){ return new _W(R(url), prot); };
    window.WebSocket.prototype = _W.prototype;
    window.WebSocket.CONNECTING = _W.CONNECTING;
    window.WebSocket.OPEN = _W.OPEN;
    window.WebSocket.CLOSING = _W.CLOSING;
    window.WebSocket.CLOSED = _W.CLOSED;
})();
