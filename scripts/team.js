var selectedProfile;

$(document).ready(function () {
    selectedProfile = null;

    $(".color").mouseenter(function () {
        $(this).stop().fadeTo(fadeTime, 1);
    })
    .mouseleave(function () {
        $(this).stop().fadeTo(fadeTime, 0);
    });


    /*
    $(".color").mouseenter(function () {
    var id = $(this).attr("id");
    highlight(id.substring(0, id.indexOf("_")));
    });

    $(".color").mouseleave(function () {
    var id = $(this).attr("id");
    fade(id.substring(0, id.indexOf("_")));
    }); */

    //Menu Item Fading
    $(".team_li").mouseleave(function () {
        fade($(this).attr("id"));
    });

    $(".team_li").mouseenter(function () {
        highlight($(this).attr("id"));
    });


});

function highlight(profileId) {
    $("#" + profileId).stop().fadeTo(fadeTime, highlightedOpacity);
    $("#" + profileId + "_image").stop().fadeTo(fadeTime, 1);
}

function fade(profileId) {
    $("#" + profileId).stop().fadeTo(fadeTime, baseOpacity);
    $("#" + profileId + "_image").stop().fadeTo(fadeTime, 0);
}

