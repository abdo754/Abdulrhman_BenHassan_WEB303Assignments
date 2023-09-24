$(document).ready(function () {
  // Function to load content using AJAX and animate the display
  function loadAndAnimateContent(url) {
    $('#content').fadeOut('fast', function () { // Animate the fade-out effect
      $(this).load(url, function () { // Load content using AJAX
        $(this).fadeIn('fast'); // Animate the fade-in effect
      });
    });
  }

  // Event handlers for the links
  $('#prospect').click(function (e) {
    e.preventDefault(); // Prevent default link behavior
    loadAndAnimateContent('prospect.html');
  });

  $('#convert').click(function (e) {
    e.preventDefault();
    loadAndAnimateContent('convert.html');
  });

  $('#retain').click(function (e) {
    e.preventDefault();
    loadAndAnimateContent('retain.html');
  });
});
