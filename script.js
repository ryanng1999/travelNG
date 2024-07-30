function myFunction() {
  var n = document.getElementById("TopNavigation");
  if (n.className === "NavBar") {
    n.className += " responsive";
  } else {
    n.className = "NavBar";
  }
}