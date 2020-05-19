$(document).ready(function () {

  var particleScript = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';

  var bgClass,
      portraitCls,
      currMonth = (new Date()).getMonth() + 1;

  var baseParticlePath = '/js/vendor/particle-configs/',
      particleJsConfig = null;

  var isMobile = /Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent);

  // currMonth = 2; // for testing

  // set up conditional styling and components
  switch (currMonth) {
    case 2:
      bgClass = 'pink-bg';
      particleJsConfig = baseParticlePath + 'hearts.json';
      portraitCls = 'winking-me'; // todo add winking version!
      break;
    case 12:
      bgClass = 'red-bg';
      particleJsConfig = baseParticlePath + 'snow.json';
      portraitCls = 'christmas-me';
      break;
    default:
      bgClass = 'normal-bg';
      portraitCls = 'default-me';
      break;
  }

  // will be set if particleJS is needed (and not mobile)
  if (particleJsConfig && !isMobile) {
    $.getScript(particleScript, function () {
      particlesJS.load('particles-js', particleJsConfig, function () {
        $('#particles-js').children().addClass(bgClass);
        console.log('callback - particles.js config loaded');
      });
    })
  } else {
    $('.top-div').addClass(bgClass);
  }

  // set that portrait image!
  $(".portrait").addClass(portraitCls);

  // supposed to hide load, show content. Doesn't work very well
  $(".load-div").addClass("hidden");
  $(".top-div").removeClass("hidden");
});