$(document).ready(function () {
    let $table = $('.sortable');
    $table.before('<h1>Sorting Soccer Characters Table</h1>');
    $table.append('<thead/>', '<tbody/>');

    let $headingRow = $('<tr/>');
    $headingRow.append($('<th/>').html('<a href="#" data-sort="firstName">First Name &#x25B2;&#x25BC;</a>'));
    $headingRow.append($('<th/>').html('<a href="#" data-sort="lastName">Last Name &#x25B2;&#x25BC;</a>'));
    $headingRow.append($('<th/>').html('<a href="#" data-sort="number">Number &#x25B2;&#x25BC;</a>'));
    $headingRow.append($('<th/>').html('<a href="#" data-sort="position">Position &#x25B2;&#x25BC;</a>'));
    $headingRow.append($('<th/>').html('<a href="#" data-sort="academy">Academy &#x25B2;&#x25BC;</a>'));
    $('thead').append($headingRow);

    // Initial rows to reset to original state
    let initialRows;

    $.ajax({
        type: "GET",
        url: "emp.json",
        error: function() {
            $table.empty().append('<h1>Content cannot be retrieved</h1>');
        },
        success: function(response) {
            $.each(response, function(index, value) {
                let $row = $('<tr/>').addClass('row');
                $row.append($('<td/>').text(value.firstName));
                $row.append($('<td/>').text(value.lastName));
                $row.append($('<td/>').text(value.Number));
                $row.append($('<td/>').text(value.Position));
                $row.append($('<td/>').text(value.Academy));
                $('tbody').append($row);
            });

            initialRows = $('tbody tr').toArray();

            var compare = {
                // Comparison functions for each sortable field
                number: function(a, b) {
                    return parseInt(a) - parseInt(b);
                },
                // ... other comparison functions
            };

            $('.sortable th a').on('click', function(e) {
                e.preventDefault();
                var $header = $(this);
                var order = $header.data('sort');
                var column = $header.parent().index();
                var rows = $('tbody tr').toArray();

                // Toggle sorting states
                if ($header.is('.ascending')) {
                    $header.removeClass("ascending").addClass('descending');
                    rows.reverse();
                } else if ($header.is('.descending')) {
                    $header.removeClass("descending");
                    rows = initialRows.slice(); // Reset to initial state
                } else {
                    $('th a').removeClass('ascending descending');
                    $header.addClass('ascending');
                    rows.sort(function(a, b) {
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        return compare[order](a, b);
                    });
                }

                $('tbody').append(rows);
            });
        }
    });
});
