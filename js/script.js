/*
    Assignment #4
    Abdulrhman
*/

$(function () {

    // Your code here
    
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371; // radius of Earth in kilometers
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c).toFixed(2); // Distance in kilometers rounded to 2 decimal places
    }

    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
        // Get the user's current location
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var accuracy = position.coords.accuracy;

            // Display the user's current location in the "locationhere" div
            var locationDiv = document.getElementById("locationhere");
            locationDiv.textContent = "Latitude: " + latitude + ", Longitude: " + longitude + ", Accuracy: " + accuracy + " meters";

            // Check if a location value is stored in local storage
            var storedLocation = localStorage.getItem("userLocation");

            if (storedLocation) {
                // Parse the stored location as JSON
                var storedLocationObj = JSON.parse(storedLocation);

                // Display the stored location in a new tag
                var localStorageLocationDiv = document.getElementById("localStorageLocation");
                localStorageLocationDiv.textContent = "Stored Location: Latitude: " + storedLocationObj.latitude + ", Longitude: " + storedLocationObj.longitude;

                // Display a welcome message for returning visitors
                var welcomeMessage = document.getElementById("welcomeMessage");
                welcomeMessage.textContent = "Welcome back to the page as a returning visitor.";

                // Calculate the distance between the stored and current locations
                var distance = calcDistanceBetweenPoints(storedLocationObj.latitude, storedLocationObj.longitude, latitude, longitude);

                // Display the distance traveled
                var distanceMessage = document.getElementById("distanceMessage");
                distanceMessage.textContent = "You have traveled " + distance + " kilometers since your last visit.";
            } else {
                // Display a welcome message for first-time visitors
                var welcomeMessage = document.getElementById("welcomeMessage");
                welcomeMessage.textContent = "Welcome to the page for the first time.";

                // Store the current location in local storage
                var userLocation = {
                    latitude: latitude,
                    longitude: longitude
                };

                // Convert the userLocation object to a JSON string and store it in local storage
                localStorage.setItem("userLocation", JSON.stringify(userLocation));
            }
        });
    } else {
        // Geolocation is not supported
        var locationDiv = document.getElementById("locationhere");
        locationDiv.textContent = "Geolocation is not supported in this browser.";
    }
});

