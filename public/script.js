var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos >= currentScrollPos) {
    document.getElementsByClassName('responsiveNav')[0].style.top =
            '0'
    document.getElementsByClassName('responsiveNav')[0].style.opacity =
            '1'
  } else {
    document.getElementsByClassName('responsiveNav')[0].style.opacity =
            '0'
    document.getElementsByClassName('responsiveNav')[0].style.top =
            '-' + document.getElementsByClassName('responsiveNav')[0].getBoundingClientRect().height + 'px'
  }
  prevScrollpos = currentScrollPos
}

function locationHashChanged () {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

window.onhashchange = locationHashChanged
