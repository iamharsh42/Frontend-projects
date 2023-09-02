var icons = document.getElementById("icon");

icons.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icons.src = "images/sun.png";
  } else {
    icons.src = "images/moon.png";
  }
};
