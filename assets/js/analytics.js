// GoatCounter Analytics
window.goatcounter = {
    path: function(p) { return location.host + p; }
}

(function() {
    var gc = document.createElement('script');
    gc.type = 'text/javascript';
    gc.async = true;
    gc.src = 'https://1124.goatcounter.com/count';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gc, s);
})(); 
