$(window).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
        $('.up-button').fadeIn(1000);
    } else {
        $('.up-button').fadeOut(500);
    }
});

$('.up-button').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
});

$(window).on('load', function () {
    setTimeout(removeLoader, 100);
});

function removeLoader() {
    $.when($(".loader").fadeOut(500)).done(function () {
        $(".loader").remove();
        $('header').fadeIn(2000);
        $('main').fadeIn(2000);
        $('footer').fadeIn(2000);
    });
}

