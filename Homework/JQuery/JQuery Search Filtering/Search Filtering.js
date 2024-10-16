$(document).ready(function() {
    $('#search-box').on('keyup', function() {
        let searchTerm = $(this).val().toLowerCase();

        $('#data-table tbody tr').each(function() {
            let rowText = $(this).text().toLowerCase();

            if (rowText.includes(searchTerm)) {
                $(this).addClass('highlight').show();
            } else {
                $(this).removeClass('highlight').hide();
            }
        });
    });
});