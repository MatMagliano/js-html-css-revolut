// alert('hello');

$(document).ready(
  function() {
    $('.relative > a').mouseenter(
      function() {
        $('.drop').removeClass('active');
        $(this).next('.drop').addClass('active');
      }
    );

    $('main').click(function () {
    $('.drop').removeClass('active');
  });

  });
