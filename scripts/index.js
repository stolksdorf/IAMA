var fadeTime = 500;
var slideDist = -30;
var slideTime = 1000;
var baseOpacity = 0.3;
var highlightedOpacity = 1.0;
var selectedId;
var currentAnchor;
var pageTransitionTime = 1000;

$(document).ready(function () {

    //On Load       
    selectedId = null;
    checkAnchor();

    /* ------------Navbar-------------*/
    //Add links to each menu item
    $(".navbar_li").each(function () {
        $(this).click(function () {
            transitionPage($(this).attr("id"));
        });
    });

    //Menu Item Fading
    $(".navbar_li").mouseleave(function () {
        if ($(this).attr("id") != selectedId) {
            $(this).stop().fadeTo(fadeTime, baseOpacity);
        }
    });

    $(".navbar_li").mouseenter(function () {
        $(this).stop().fadeTo(fadeTime, highlightedOpacity);
    });
});

function selectMenuItem(itemId) {
    if (itemId != selectedId) {
        if(selectedId != null) {slide($("#" + selectedId), 0, baseOpacity, slideTime); }
        slide($("#" + itemId), slideDist, highlightedOpacity, slideTime);
        selectedId = itemId;
    }
}

function transitionPage(pageId) {
    //$(".background").fadeOut(pageTransitionTime + 1000, function () {
    //    $(".background").attr("src", "images/" + pageId + ".jpg");
    //        $(".background").fadeIn(pageTransitionTime + 1000);

    //});
	


    $("div.NavBar").clearQueue();
    $("div.canvas").fadeOut(pageTransitionTime, function () {
        $("div.canvas").load(pageId + ".htm", function () {

            $("div.canvas").attr("id", "canvas_" + pageId);
            $("div.canvas").fadeIn(pageTransitionTime);
        });
        selectMenuItem(pageId);
    });
}


function slide(object, dist, poop, speed) {
    object.animate({
        opacity: poop,
        marginLeft: dist + 'px'
    }, speed, function () { });
}

//On page load, switches to the correct page based on url
function checkAnchor() {   
    var address = document.URL;
    var begin_anchor = address.lastIndexOf("#");
    var anchor = null;

    if (begin_anchor == -1) {
        anchor = "main"; //if the site didn't have an anchor
        selectedId = "main";
        slide($("#main"), slideDist, highlightedOpacity, slideTime);
    }
    else {
        anchor = address.substring(begin_anchor + 1, address.length);
    }

    //Cut off subpages
    if (anchor.indexOf("=") != -1) {
        anchor = anchor.substring(0, anchor.indexOf("="));
    }

    if (currentAnchor != anchor) {
        currentAnchor = anchor;
        transitionPage(anchor);
    }
}
