// Method using $.getJSON()
function loadTeamDataWithGetJSON() {
    // Get the team div element
    var teamDiv = $("#team");

    // Load JSON data using $.getJSON()
    $.getJSON("team.json", function (data) {
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
    });
}

// Call the method in a ready function
$(document).ready(function () {
    loadTeamDataWithGetJSON();
});
