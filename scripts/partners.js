var spinTime = 2500;
var spinSpeed = 1200;
var interval;
$(document).ready(function () {

    $.getScript("plugins/jquery.roundAbout.js", function () {
        $('ul#goldScroll')
            .roundabout({
            minOpacity: 0.0,
            minScale: 1.0,
            duration: spinSpeed,
        })
            .hover(function () {
                clearInterval(interval);
            },
                function () {
                    interval = startAutoPlay();
                }
            );

        interval = startAutoPlay();
    });

    $("table.partners td").mouseenter(function () {
        $(this).stop().fadeTo(fadeTime, highlightedOpacity);
    });

    $("table.partners td").mouseleave(function () {
        $(this).fadeTo(fadeTime, baseOpacity);
    });


});

function startAutoPlay() {
    return setInterval(function () {
        $('ul#goldScroll').roundabout_animateToNextChild();
    }, spinTime);
} 

