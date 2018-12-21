$(document).ready(function() {

  // set up conditional styling and components
  var bgClass,
      portraitCls,
      currMonth = (new Date()).getMonth() + 1,
      particleJsConfig = null;

  switch (currMonth) {
    case 12:
      bgClass = 'red-bg';
      particleJsConfig = '/js/vendor/particle-configs/snow.json';
      portraitCls = 'default-me'; // todo add santa version!
      break;
    default:
      bgClass = 'normal-bg';
      portraitCls = 'default-me';
      break;
  }

  // will be set if particleJS is needed
  if (particleJsConfig) {
    particlesJS.load('particles-js', particleJsConfig, function() {
      $('#particles-js').children().addClass(bgClass);
      console.log('callback - particles.js config loaded');
    });
  } else {
    $('.top-div').addClass(bgClass);
  }

  // set that portrait image!
  $(".portrait").addClass(portraitCls);
});