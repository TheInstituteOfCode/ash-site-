$(document).ready(function() {

  $('.wall').masonry({
    // options
    itemSelector: '.brick',
    columnWidth: 0,
    gutter: 20,
    originLeft: false
  });
window.onload = function() {

  $('.wall').delay(200).masonry({
    // options
    itemSelector: '.brick',
    gutter: 20,
    originLeft: false,
    columnWidth: 300,
    stagger: 30
  });

};


});
