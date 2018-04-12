$(document).ready(function() {

  $('.wall').masonry({
    // options
    itemSelector: '.brick',
    gutter: 20,
    originLeft: false
  });
  $('.wall-r').masonry({
    // options
    itemSelector: '.brick',
    gutter: 20
  });
window.onload = function() {

  $('.wall').delay(200).masonry({
    // options
    itemSelector: '.brick',
    gutter: 20,
    originLeft: false,
    stagger: 30
  });
  $('.wall-r').delay(200).masonry({
    // options
    itemSelector: '.brick',
    gutter: 20,
    stagger: 30
  });

};

lightbox.option({
     'resizeDuration': 200,
     'wrapAround': true,
     'alwaysShowNavOnTouchDevices': true
   })

});
