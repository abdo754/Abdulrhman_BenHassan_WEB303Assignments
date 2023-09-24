document.addEventListener("DOMContentLoaded", function () {
    // Function to load content using AJAX and animate
    function loadContentAndAnimate(url) {
      var contentDiv = document.getElementById("content");
      contentDiv.style.opacity = 0; // Hide the content
  
      // Use vanilla JavaScript to make an AJAX request
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          // On success, update the content
          contentDiv.innerHTML = xhr.responseText;
  
          // Animate the content to fade in
          $(contentDiv).animate({ opacity: 1 }, 500);
        }
      };
  
      xhr.send();
    }
  
    // Click event for Prospect link
    document.getElementById("prospect").addEventListener("click", function (e) {
      e.preventDefault();
      loadContentAndAnimate("prospect.html");
    });
  
    // Click event for Convert link
    document.getElementById("convert").addEventListener("click", function (e) {
      e.preventDefault();
      loadContentAndAnimate("convert.html");
    });
  
    // Click event for Retain link
    document.getElementById("retain").addEventListener("click", function (e) {
      e.preventDefault();
      loadContentAndAnimate("retain.html");
    });
  });
  