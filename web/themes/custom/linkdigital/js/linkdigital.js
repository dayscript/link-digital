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
