// Slider automatique

function showSlides(e, s) {
  var l,
    t = document.getElementsByClassName("mySlides"),
    a = document.getElementsByClassName("dot");
  for (l = 0; l < t.length; l++) t[l].style.display = "none";
  for (l = 0; l < a.length; l++)
    a[l].className = a[l].className.replace(" active", "");
  (t[e].style.display = "block"),
    (a[e].className += " active"),
    ++e >= t.length && (e = 0),
    s && setTimeout(() => showSlides(e, !0), 4e3);
}
showSlides(0, !0);
