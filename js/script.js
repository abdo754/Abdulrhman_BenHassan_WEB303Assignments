// Method using $.ajax() with a delay
function loadTeamDataWithAjaxAndDelay() {
   
    var teamDiv = $("#team");

    
    teamDiv.html("Loading...");

    // content for 3 seconds
    setTimeout(function () {
        // Load JSON data using $.ajax()
        $.ajax({
            url: "team.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
               
                teamDiv.empty();

                //  data and append team members' information
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
                //  if the request fails
                teamDiv.html("Error: Content could not be retrieved.");
            }
        });
    }, 3000); //(3 seconds) delay
}

// 
$(document).ready(function () {
    loadTeamDataWithAjaxAndDelay();
});
