function openBurgerMenu() {
  document.getElementById("burgerNavigation").style.transform = "none";
  document.body.style.overflow = "hidden";
}

function closeBurgerMenu() {
  document.getElementById("burgerNavigation").style.transform =
    "translate(-100%, 0)";
  document.body.style.overflow = "unset";
}

function loadBody() {
  for (let section of document.getElementsByTagName("section")) {
    section.onclick = closeBurgerMenu;
  }
}
