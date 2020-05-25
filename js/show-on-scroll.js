function run() {
    var a = document.getElementById("experience");
    var s = document.getElementById("education");
    var check = true;
    if (check) {
        if ((document.body.scrollTop == 0 || document.documentElement.scrollTop == 0)) {
            s.style.animationName = "fade";
            s.style.animationDuration = "1s";
            s.style.opacity = "1";
            
            a.style.animationName = "fade";
            a.style.animationDuration = "1s";
            a.style.opacity = "1";
            check = false;
        }
    } else {
        s.style.animationName = "none";
        a.style.animationName = "none";
    }
}