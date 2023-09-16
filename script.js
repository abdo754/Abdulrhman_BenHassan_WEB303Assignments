/*
	WEB 303 Assignment 1 - jQuery
	{Abdulrhman benhassan}

*/

$(document).ready(function () {
    // Select the input fields and span element
    var $yearlySalary = $("#yearly-salary");
    var $percent = $("#percent");
    var $amount = $("#amount");
  
    // Create an event handler for the "keyup" event on both fields
    $yearlySalary.on("keyup", calculateAmount);
    $percent.on("keyup", calculateAmount);
  
    // Function to calculate the amount
    function calculateAmount() {
      // Get the values of the input fields
      var salary = parseFloat($yearlySalary.val()) || 0;
      var percent = parseFloat($percent.val()) || 0;
  
      // Calculate the amount
      var amount = (salary * (percent / 100)).toFixed(2); // Rounds to two decimal places
  
      // Update the span element with the calculated amount
      $amount.text("$" + amount);
    }
  });
  