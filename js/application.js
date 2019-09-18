$(document).ready(function() {
  includeHTML();

  /*** WOW ***/
  var wow = new WOW({
    mobile: true  // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /*** Navbar ***/
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-light");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  $(document).on('shown.bs.collapse', '.navbar-collapse', function() {
    var $nav = $('.navbar');
    $nav.addClass('white');
  });

  $(document).on('hidden.bs.collapse', '.navbar-collapse', function() {
    var $nav = $('.navbar');
    $nav.toggleClass('white', $(this).scrollTop() > $nav.height());
  });


  /*** Smooth Scroll ***/

  $('body').scrollspy({target: ".navbar", offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $(".navbar .navbar-nav .nav-item  a").on('click', function(event) {

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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
