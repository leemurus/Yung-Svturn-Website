const leftSeekBarColor = '#e8150c';
const rightSeekBarColor = '#ffffff';

$(document).ready(function () {
    initMusicPlayer();
});

function initMusicPlayer() {
    const audio = $('.seekbar audio').get(0);
    const button = $('.player .play_button');
    const seekbar = $('.seekbar input');
    const timer = $('.player .time span');

    $(audio).on('loadedmetadata', function () {
        audio.volume = 0.5;
        seekbar.val(0);
        seekbar.attr('min', 0);
        seekbar.attr('max', parseInt(audio.duration));
    });

    button.on('click', function () {
        if (audio.paused) {
            button.addClass('paused');
            audio.play();
        } else {
            button.removeClass('paused');
            audio.pause();
        }
    });

    $(audio).on('ended', function () {
        button.removeClass('paused');
    })

    seekbar.on('change', function () {
        audio.currentTime = seekbar.val();
        updateTimer(timer, seekbar.val(), parseInt(audio.duration));
        updateSeekBarProgress(seekbar);
    });

    setInterval(function () {
        seekbar.val(parseInt(audio.currentTime))
        updateTimer(timer, seekbar.val(), parseInt(audio.duration));
        updateSeekBarProgress(seekbar);
    }, 1000);
}

function updateTimer(timer, curTime, totalTime) {
    timer.text(
        secondsTimeSpanToMS(curTime) + ' / ' + secondsTimeSpanToMS(totalTime)
    );
}

function updateSeekBarProgress(seekbar) {
    const ratio = calculateRatio(seekbar.val(), seekbar.attr('min'), seekbar.attr('max'))
    seekbar.css('background-image', getLinearGradientCSS(ratio, leftSeekBarColor, rightSeekBarColor));
}

function calculateRatio(value, min, max) {
    return (((value - min) / (max - min)) + 0.005).toFixed(3);
}

function secondsTimeSpanToMS(s) {
    const m = Math.floor(s / 60);
    s -= m * 60;
    return (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
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