var videoHeight = 700;
var videoWidth = 394;
var selectedTab = "profile";

$(document).ready(function () {

    checkVideoAnchor();

    //On Click Event
    $("ul.tabs li").click(function () {
        //fade out the old tab
        selectTab($(this).attr("id"));
    })
    .mouseleave(function () {
        if ($(this).attr("id") != selectedTab) {
            $(this).stop().fadeTo(fadeTime, baseOpacity);
        }
    }).mouseenter(function () {
        $(this).stop().fadeTo(fadeTime, highlightedOpacity);
    });


});

function selectTab(tabId) {
    var container = $("#tabContainer");
    $("#" + selectedTab).stop().fadeTo(fadeTime, baseOpacity);
    $("#" + tabId).fadeTo(fadeTime, highlightedOpacity);

    if (tabId != selectedTab) {
        selectedTab = tabId;
        container.fadeOut(fadeTime, function () {            
            container.html($("#" + selectedTab + "Container").html());
            container.fadeIn(fadeTime);
        });
    }
}


function loadprofilePage(profileId) {
    $("#transcriptionContainer").load("profiles/" + profileId + ".html #transcription");
    $("#videoIdContainer").load("profiles/" + profileId + ".html #videoId", function () {
        loadVideo($("#videoId").html());
    });
    $("#profileContainer").load("profiles/" + profileId + ".html #profile", function () {
        //load in first tab
        $("#profile").stop().fadeTo(fadeTime, highlightedOpacity);
        $("#tabContainer").html($("#profileContainer").html()); 
    });
}

function loadVideo(videoId) {    
    var videoHtmlString = '<object width="' + videoHeight + '" height="' + videoWidth + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + videoId + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" /><embed src="http://vimeo.com/moogaloop.swf?clip_id=' + videoId + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00ADEF&amp;fullscreen=1" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + videoHeight + '" height="' + videoWidth + '"></embed></object>'
    $("#videoContainer").html(videoHtmlString);
}

//Loads each component from the profile page
function loadComponent(profileId, componentId) {
    $("#" + componentId + "Container").load("profiles/" + profileId + ".html #" + componentId);
}


function checkVideoAnchor() {
        var address = document.URL;
        var begin_subpage = address.lastIndexOf("=");
        var profileId = null;

        if (begin_subpage == -1) {
        //TODO: add in a null page handler          
            profileId = "test";
        }
        else {
            profileId = address.substring(begin_subpage + 1, address.length);
        }

        loadprofilePage(profileId);

}