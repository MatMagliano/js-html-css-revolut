// alert('hello');

$(document).ready(
  function() {
    $('.relative > a').mouseenter(
      function() {
        $(this).next('.drop').addClass('active');
      }
    );
    // $('.relative > a').mouseleave(
    //   function() {
    //     $(this).next('.drop').removeClass('active');
    //   }
    // );
  }
);
