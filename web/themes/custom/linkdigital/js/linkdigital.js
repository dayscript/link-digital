/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.linkdigital = {
    attach: function (context, settings) {
  	/**
  	* Bloque de búsqueda
  	**/
      $('#block-menu button.hamburger', context).once('linkdigital').on('click',function(e){
      	$('#block-menu button.hamburger').toggleClass('is-active')
      	$('.menu-full-screen').toggleClass('hide')
      });


      if ($(window).scrollTop() > 0) {
        $(".header-page").addClass("header-fix");
      }

      $(window).scroll(function() {
           if ($(window).scrollTop() > 0) {
            // if (!Foundation.MediaQuery.is('small only')) {
              $(".header-page").addClass("header-fix");
            // }
          } else {
            $(".header-page").removeClass("header-fix");
          }
      });

/*      $('#block-navegacionprincipal li a.local-scroll').on('click', function(){
        $('.menu-full-screen').addClass('hide')
        $('button.hamburger').removeClass('is-active')
          $('html, body').animate({
              scrollTop: $('#footer-first').offset().top
          }, 1);
      });*/
      
  $('#block-navegacionprincipal li a.local-scroll', context).once('linkdigital').on('click', function(event) {
        $('.menu-full-screen').addClass('hide')
        $('button.hamburger').removeClass('is-active')

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
  $('#webform-submission-hablemos-add-form input#edit-actions-submit', context).once('linkdigital').on('click', function(event) {
        $('.recaptcha-error > div').addClass('recaptcha-fail')
        $('.recaptcha-error > div').css({
            "border": "2px solid rgb(231, 76, 60)",
            "width": "307px",
            "height": "80px"
        });
  }

    //   jQuery.trim(jQuery(".breadcrumb li:last-child").text()).substring(0, 10)
    // .split(" ").slice(0, -1).join(" ") + "...";



    }
  };

  /** Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      //alert("I'm alive!");
    }
  };
*/
})(jQuery, Drupal);
