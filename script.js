// Toggle Hamburger Menu
function hamburger(x) {
  if (x.classList.toggle("change")) {
    document.getElementById("menu").style.display = "flex";
  } else {
    document.getElementById("menu").style.display = "none";
  }
}
