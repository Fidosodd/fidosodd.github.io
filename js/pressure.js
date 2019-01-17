function bar() {
  var x = document.getElementById("iddmenu");
  if (x.className === "ddmenu") {
    x.className += " responsive";
  } else {
    x.className = "ddmenu";
  }
}
