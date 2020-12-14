

$(function() {
  $('.drbtn2').on('click', function () {
   $(this).toggleClass('action');
   $('.drawer2').toggleClass('action');
  });
 });



// 上の写真スライド
function slideSwitch() {
  var $active = $('#slideshow img.active');

  if ( $active.length == 0 ) $active = $('#slideshow img:last');

  var $next =  $active.next().length ? $active.next()
     : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
     .addClass('active')
     .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
     });
}

$(function() {
  setInterval( "slideSwitch()", 3500 );
});


var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides : true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});



