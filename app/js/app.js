// $(document).foundation();

$(document).ready(function() {
//   // If Desktop, initiate animations
//   // if (window.matchMedia("(min-width: 600px)")) {
//   //   $(".portrait").css({
//   //     "-webkit-transform": "scale(1, 1)",
//   //     "-moz-transform": "scale(1, 1)",
//   //     "-ms-transform": "scale(1, 1)",
//   //     "-o-transform": "scale(1, 1)",
//   //     "transform": "scale(1, 1)"
//   //   });
//   //   $(".break").css("width", "18vw");
//   //   $(".head-text").css("padding-top", "0");
//   //   $(".temp-add-msg").css("opacity", "1");
//   // }

  // set colors
  var className,
    currMonth = (new Date()).getMonth() + 1,
    particleJsConfig = null;

  switch (currMonth) {
    case 12:
      className = 'red-bg';
      particleJsConfig = '/js/vendor/particle-configs/snow.json';
      break;
    default:
      className = 'normal-bg';
      break;
  }

  // will be set if particleJS is needed
  if (particleJsConfig) {
    particlesJS.load('particles-js', particleJsConfig, function() {
      $('#particles-js').children().addClass(className);
      console.log('callback - particles.js config loaded');
    });
  } else {
    $('.top-div').addClass(className);
  }
  
  // $('.top-div').addClass('normal-bg');
});