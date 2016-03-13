(function(window, $, wow, Pace) {

    Pace.on('done', function() {
        setTimeout(function() {
            new wow().init();
            $('#pre-loader').fadeOut();
            $('.pace').hide();
        }, 500);
    });

    $(document).ready(function() {
        var countdown = $('#countdown');
        var days = $('#days');
        var hours = $('#hours');
        var minutes = $('#minutes');
        var seconds = $('#seconds');

        countdown
            .countdown('2016/3/14')
            .on('update.countdown', function(event) {
                days.text(event.offset.totalDays);
                hours.text(event.offset.hours);
                minutes.text(event.offset.minutes);
                seconds.text(event.offset.seconds);
            });
    });
})(window, window.jQuery, window.WOW, window.Pace);
