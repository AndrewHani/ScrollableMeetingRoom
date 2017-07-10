// JavaScript source code
$(document).ready(function () {
    var targetDiv = $('.tableContainer');
    //Grab and Scroll
    var grab = false;
    var basePosition = 0;
    var baseScrollValue = targetDiv.scrollLeft();
    $('.tableContainer th').on('mousedown', function (e) {
        basePosition = e.pageX;
        baseScrollValue = targetDiv.scrollLeft();
        grab = true;
    });

    $('.tableContainer thead tr').on('mousemove', function (e) {
        if (grab) {
            var currentPosition = e.pageX;
            var difference = basePosition - currentPosition;
            targetDiv.scrollLeft(baseScrollValue + difference);
        }
    });

    setTimeout(function () {
        $('.announcement').fadeIn(1200);
        targetDiv.delay(800).animate({ scrollLeft: 300 }, 800);
        targetDiv.animate({ scrollLeft: 0 }, 600);
    }, 1000);

    $(document).on('mouseup', function () {
        grab = false;
    });

    $(document).on('mousedown', function (e) {
        var disclaimer = $('.announcement');
        if (!disclaimer.is(e.target) && disclaimer.has(e.target).length == 0) {
            $('.announcement').fadeOut(300);
        }
        var hs = disclaimer.has(e.target).length;
    });
});
