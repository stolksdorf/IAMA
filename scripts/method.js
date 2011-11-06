
/*var fadeTime = 500;
//var slideDist = -30;
//var slideTime = 1000;
var baseOpacity = 0.3;
var highlightedOpacity = 1.0; */
var selectedSubId;


$(document).ready(function () {

    //On Load    
    selectedSubId = null;
    checkSubAnchor();

    //Add links to each menu item
    $(".method_li").each(function () {
        $(this).click(function () {
            switchSubPage($(this).attr("id"));
        });
    });

    //Menu Item Fading
    $('.method_li').mouseleave(function () {

        if ($(this).attr("id") != selectedSubId) {
            $(this).fadeTo(fadeTime, baseOpacity);
        }
    });

    $('.method_li').mouseenter(function () {
        $(this).clearQueue();
        $(this).fadeTo(fadeTime, highlightedOpacity);
    });
});

function selectSubPage(subpageId) {
    if (subpageId != selectedSubId) {
        if (selectedSubId != null) {$("#" + selectedSubId).fadeTo(fadeTime, baseOpacity);}
        $("#" + subpageId).fadeTo(fadeTime, highlightedOpacity);
        selectedSubId = subpageId;
    }    
}

function switchSubPage(subpageId) {
    $("div.sub_canvas").fadeOut(pageTransitionTime, function () {
        $("div.sub_canvas").load(subpageId + ".htm", function () {
            $("div.sub_canvas").attr("id", "sub_canvas_" + subpageId);
            $("div.sub_canvas").fadeIn(pageTransitionTime);
        });
        selectSubPage(subpageId);
    });
}

//make sure all method stuff is selected
function makeMethodSelected() {
    selectedId = "method";
    if ($("div.canvas").attr("id") != "method") {
        $("div.canvas").load("method.htm");
        $("div.canvas").attr("id", "canvas_method");
    }
}

function checkSubAnchor() {
    var address = document.URL;
    var begin_subpage = address.lastIndexOf("=");

    var subpage = null;

    if (begin_subpage == -1) {
        $(this).attr('href') +"=iama";
        subpage ="iama";       
    }
    else{
        subpage = address.substring(begin_subpage + 1, address.length);
    }

    switchSubPage(subpage);

}
