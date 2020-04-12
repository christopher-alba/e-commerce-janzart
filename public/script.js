var prevScrollpos = window.pageYOffset
window.onscroll = function () {


    var currentScrollPos = window.pageYOffset
    if (prevScrollpos >= currentScrollPos) {
        document.getElementsByClassName("responsiveNav")[0].style.top =
            "0"
        document.getElementsByClassName("responsiveNav")[0].style.opacity =
            "1"
    } else {
        document.getElementsByClassName("responsiveNav")[0].style.opacity =
            "0"
        document.getElementsByClassName("responsiveNav")[0].style.top =
            "-" + document.getElementsByClassName("responsiveNav")[0].getBoundingClientRect().height + "px"
    }
    prevScrollpos = currentScrollPos
}