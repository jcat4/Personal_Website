var isMobile = isMobileTest.any();

$(document).ready(function() {
  if (!isMobile) {
    $("#main-body").load("desktop.html");
  } else {
    $("#main-body").load("phone.html");
  }
});