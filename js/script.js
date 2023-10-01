// Method using $.ajax() with a delay
function loadTeamDataWithAjaxAndDelay() {
    // Get the team div element
    var teamDiv = $("#team");

    // Display "Loading..." message
    teamDiv.html("Loading...");

    // Use setTimeout to delay displaying the content for 3 seconds
    setTimeout(function () {
        // Load JSON data using $.ajax()
        $.ajax({
            url: "team.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                // Clear any previous content in the team div
                teamDiv.empty();

                // Loop through the data and append team members' information
                $.each(data.members, function (index, member) {
                    var memberDiv = $("<div class='team-member'></div>");
                    var nameHeading = $("<h2>" + member.name + "</h2>");
                    var positionHeading = $("<h5>" + member.position + "</h5>");
                    var bioParagraph = $("<p>" + member.bio + "</p>");

                    memberDiv.append(nameHeading, positionHeading, bioParagraph);
                    teamDiv.append(memberDiv);
                });
            },
            error: function () {
                // Display an error message if the request fails
                teamDiv.html("Error: Content could not be retrieved.");
            }
        });
    }, 3000); // 3000 milliseconds (3 seconds) delay
}

// Call the method in a ready function
$(document).ready(function () {
    loadTeamDataWithAjaxAndDelay();
});
