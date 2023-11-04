$(function () {
    // Function to open the modal with the selected image
    function openModal($image) {
        var $modal = $('#modal');
        var $content = $image.clone().css({
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
    }

    // Attach a click event to thumbnails
    $('#photo-viewer .thumbnail-anchor').on('click', function (e) {
        e.preventDefault();

        // Set the href of the a.photo-box to the href of the clicked thumbnail
        var thumbnailHref = $(this).attr('href');
        $('.photo-box').attr('href', thumbnailHref);

        // Open the modal with the selected image
        openModal($(this).clone().find('img'));
    });

    // Modal HTML structure
    var modalHtml = `
        <div id="modal" style="display: none;">
            <div class="modal-content"></div>
            <h2 class="modal-heading"></h2>
            <button class="modal-close">Close</button>
        </div>
    `;

    // Append the modal HTML to the body
    $('body').append(modalHtml);
});
