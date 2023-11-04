$(function () {
    // Attach a click event to the thumbnails to update the .photo-box href
    $('#photo-viewer .thumbnail-anchor').on('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of the link
        var thumbnailHref = $(this).attr('href');
        $('.photo-box').attr('href', thumbnailHref);
    });

    // Open the modal when a .photo-box is clicked
    $('#photo-viewer').on('click', '.photo-box', function (e) {
        e.preventDefault();
        var $modal = $('#modal');
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '800px',
            height: '450px'
        });

        $modal.find('.modal-content').html($content);

        var galleryName = $('h1').text();
        $modal.find('.modal-heading').text(galleryName);

        $modal.show();

        $modal.find('.modal-close').on('click', function () {
            $modal.hide();
        });
    });
});
