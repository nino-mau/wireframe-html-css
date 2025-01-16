
/** -- FOR SlICK MENU -- */

$(document).ready(function(){
    // Slick preset
    $('.gallery-slick-menu').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="icon-arrow-left gallery-slick-menu__arrow-icon"></i></button>',
        nextArrow: '<button class="slick-next"><i class="icon-arrow-right gallery-slick-menu__arrow-icon"></i></button>'
    });
});


/** -- FOR SMOOTH SCROLLING -- */

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });