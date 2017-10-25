var $secongImage = $('.second-image');

$secongImage.waypoint(function(direction) {
  if (direction === 'down') {
     $secongImage.removeClass( "js-second-image-animate-up" ).addClass( "js-second-image-animate-down" );  
  }
}, {
  offset: '30%'
});

$secongImage.waypoint(function(direction) {
  if (direction === 'up') {
    $secongImage.removeClass( "js-second-image-animate-down js-second-image-animate-down-1" ).addClass( "js-second-image-animate-up" );
  }
}, {
  offset: '30%'
});

var $thirdImage = $('.fourth-image');

$thirdImage.waypoint(function(direction) {
  if (direction === 'down') {
     $thirdImage.removeClass( "js-fourth-image-animate-up" ).addClass( "js-fourth-image-animate-down" );  
  }
}, {
  offset: '30%'
});

$thirdImage.waypoint(function(direction) {
  if (direction === 'up') {
    $thirdImage.removeClass( "js-fourth-image-animate-down js-second-image-animate-down-1" ).addClass( "js-fourth-image-animate-up" );
  }
}, {
  offset: '30%'
});
