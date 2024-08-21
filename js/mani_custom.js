/* ********************** header scroll ******************************** */
$('body').on('hidden.bs.modal', function() {
  if ($('.modal.show').length) {
    $('body').addClass('modal-open');
  }
});


 $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 90) {
                $(".header").addClass("header_top");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("header_top");
            }
        });
    });
/* ********************** header scroll end******************************** */
/* loader */
 $(window).on ('load', function (){
   $('#loader').delay(100).fadeOut('slow');
   $('#loader-wrapper').delay(500).fadeOut('slow');
 });
/* loader */

/* wow animation */
// new WOW().init();
/* wow animation */


/* datepicker */


/* datepicker */

function myFunction(x) {
      x.classList.toggle("change");
    }

    $(".togglerBtn").click(function(e) {
            e.preventDefault();
            // $(".sidebare").toggleClass("active");
            $("body").toggleClass("addbody");
    });
