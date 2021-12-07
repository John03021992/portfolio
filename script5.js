// Loader

document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "interactive") {
    document.getElementById("overlay").style.visibility = "visible";
  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("load").style.visibility = "visible";
      document.getElementById("overlay").style.visibility = "hidden";
    }, 1000);
  }
};
