$(window).on('load', function () {
    // setTimeout(removeLoader, 2000);
});

function removeLoader() {
    $.when($(".loader").fadeOut(1500)).done(function () {
        $(".loader").remove();
        $('main').fadeIn(3000);
    });
}