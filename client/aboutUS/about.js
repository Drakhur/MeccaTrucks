let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
}