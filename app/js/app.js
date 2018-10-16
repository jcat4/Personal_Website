$(document).foundation();

$(document).ready(function() {
  // If Desktop, initiate animations
  if (window.matchMedia("(min-width: 600px)")) {
    $(".portrait").css({
      "-webkit-transform": "scale(1, 1)",
      "-moz-transform": "scale(1, 1)",
      "-ms-transform": "scale(1, 1)",
      "-o-transform": "scale(1, 1)",
      "transform": "scale(1, 1)"
    });
    $(".break").css("width", "18vw");
    $(".head-text").css("padding-top", "0");
    $(".temp-add-msg").css("opacity", "1");
  }

});