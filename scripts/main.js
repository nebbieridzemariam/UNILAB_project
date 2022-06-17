function openBurgerMenu() {
  document.getElementById("burgerNavigation").style.transform = "none";
}

function closeBurgerMenu() {
  document.getElementById("burgerNavigation").style.transform =
    "translate(-100%, 0)";
}

function loadBody() {
  for (let section of document.getElementsByTagName("section")) {
    section.onclick = closeBurgerMenu;
  }

  document.getElementById("burgerNavigation").style.height =
    document.body.clientHeight + "px";
}
