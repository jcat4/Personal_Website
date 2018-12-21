$(document).ready(function() {

  // set up conditional styling and components
  var bgClass,
      portraitCls,
      currMonth = (new Date()).getMonth() + 1,
      baseParticlePath = '/js/vendor/particle-configs/',
      particleJsConfig = null;

      // currMonth = 2; // for testing

  switch (currMonth) {
    case 2:
      bgClass = 'pink-bg';
      particleJsConfig = baseParticlePath + 'hearts.json';
      portraitCls = 'default-me'; // todo add winking version!
      break;
    case 12:
      bgClass = 'red-bg';
      particleJsConfig = baseParticlePath + 'snow.json';
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