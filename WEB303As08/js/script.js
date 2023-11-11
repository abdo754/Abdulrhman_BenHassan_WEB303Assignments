$(document).ready(function () {
    // Load employees from JSON file
    $.ajax({
        url: 'emp.json',
        dataType: 'json',
        success: function (data) {
            // Populate the table with employees
            populateTable(data);

            // Add event listener for search input
            $('#search').on('input', function () {
                searchEmployees($(this).val());
            });

            // Add event listener for filter buttons
            $('#First').on('click', function () {
                filterEmployees('A', 'M');
            });

            $('#Secound').on('click', function () {
                filterEmployees('N', 'Z');
            });
        }
    });
});

function populateTable(employees) {
    var table = $('#characterTable tbody');
    table.empty();

    employees.forEach(function (employee) {
        var row = $('<tr>');
        row.append($('<td>').text(employee.firstName));
        row.append($('<td>').text(employee.lastName));
        row.append($('<td>').text(employee.Number));
        row.append($('<td>').text(employee.Position));
        row.append($('<td>').text(employee.Academy));
        table.append(row);
    });
}

function searchEmployees(searchTerm) {
    var table = $('#characterTable tbody');

    table.find('tr').each(function () {
        var row = $(this);
        var firstName = row.find('td:first-child').text();

        if (firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
            row.addClass('highlight');
        } else {
            row.removeClass('highlight');
        }
    });
}

function filterEmployees(startLetterA, startLetterB) {
    var table = $('#characterTable tbody');

    var countA = 0;
    var countB = 0;

    table.find('tr').each(function () {
        var row = $(this);
        var lastName = row.find('td:nth-child(2)').text();
        var firstLetter = lastName.charAt(0).toUpperCase();

        if (firstLetter >= startLetterA && firstLetter <= startLetterB) {
            row.show();
            if (firstLetter <= 'M') {
                countA++;
            } else {
                countB++;
            }
        } else {
            row.hide();
        }
    });

    $('#First').text(`${startLetterA} - M (${countA})`);
    $('#Secound').text(`${startLetterB} - Z (${countB})`);
}
