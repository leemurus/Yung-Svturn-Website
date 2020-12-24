const leftSeekBarColor = '#e8150c';
const rightSeekBarColor = '#ffffff';

$(document).ready(function () {
    initMusicPlayer();
});

function initMusicPlayer() {
    const audio = $('.seekbar audio').get(0);
    const button = $('.player .play_button');
    const seekbar = $('.seekbar input');

    seekbar.val(0);
    seekbar.attr('min', 0);
    seekbar.attr('max', parseInt(audio.duration));

    button.on('click', function () {
        if (audio.paused) {
            button.addClass('paused');
            audio.play();
        } else {
            button.removeClass('paused');
            audio.pause();
        }
    });

    seekbar.on('change', function () {
        audio.currentTime = seekbar.val();
        updateSeekBarProgress(seekbar);
    });

    setInterval(function () {
        seekbar.val(parseInt(audio.currentTime));
        updateSeekBarProgress(seekbar);
    }, 1000);
}

function updateSeekBarProgress(seekbar) {
    const ratio = calculateRatio(seekbar.val(), seekbar.attr('min'), seekbar.attr('max'))
    seekbar.css('background-image', getLinearGradientCSS(ratio, leftSeekBarColor, rightSeekBarColor));
}

function calculateRatio(value, min, max) {
    return ((value - min) / (max - min)).toFixed(2);
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
    return [
        '-webkit-gradient(',
        'linear, ',
        'left top, ',
        'right top, ',
        'color-stop(' + ratio + ', ' + leftColor + '), ',
        'color-stop(' + ratio + ', ' + rightColor + ')',
        ')'
    ].join('');
}