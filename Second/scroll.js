var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
        document.getElementById("logo").style.opacity = "1.0";
    } else {
    document.getElementById("nav").style.top = "-80px";
    document.getElementById("logo").style.opacity = "0.0";
    }
    prevScrollpos = currentScrollPos;
    }