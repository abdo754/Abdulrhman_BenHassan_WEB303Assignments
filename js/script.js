$(document).ready(function () {
    // Accordion functionality
    $(".accordion-header").click(function () {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });

    // Tab functionality
    $(".tab").click(function () {
        var tabId = $(this).find("a").attr("href");
        $(".tab-content").hide();
        $(tabId).show();
    });
});
