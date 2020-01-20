// alert('hello');

$(document).ready(
  function() {
    $('.relative > a').mouseenter(
      function() {
        $(this).next('.accounts').addClass('flex');
      }
    )
  }
);
