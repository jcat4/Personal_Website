$(document).foundation()

var contactCollapsed = false;

$(document).ready(function() {
  $(".pending-img-load").toggleClass("pending-img-load");
});

$(".contact").on("click", function() {
  if (window.matchMedia('(min-width: 600px)').matches) {
    $(".contact-div").toggleClass("contact-collapsed");
  } else {
    alert("You on mobile, do thing");
  }
});