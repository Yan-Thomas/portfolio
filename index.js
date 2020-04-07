window.onscroll = function() {fixHeader()}

function fixHeader() {
    let header = document.getElementById("header")
    let sticky = header.offsetTop
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    header.classList.add("has-background-black")
  } else {
    header.classList.remove("sticky")
  }
}
