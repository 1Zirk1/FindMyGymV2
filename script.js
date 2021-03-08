let showMenu = false;
const mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
  if (showMenu === true) {
    showMenu = false;
    mobileMenu.classList.add("hidden");
    console.log("close menu");
  } else {
    showMenu = true;
    mobileMenu.classList.remove("hidden");
    console.log("open menu");
  }
}


