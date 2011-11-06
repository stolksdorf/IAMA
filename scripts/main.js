var current;
var shimmerWaitTime = 500;
var shimmerFadeTime = 2000;
var shimmerTrigger;
var shimmerOpacity = 1;
var shimmerOffset = 15;

$(document).ready(function () {


    $("#menuTitle li")
    .mouseenter(function () {
        current = $(this).attr("class");
        $("." + current).stop().fadeTo(fadeTime, highlightedOpacity);
        shimmerTrigger = setTimeout('$("#shimmerText").stop().fadeTo(shimmerFadeTime, shimmerOpacity)', shimmerWaitTime);
    })
    .mouseleave(function () {
        $("." + current).stop().fadeTo(fadeTime, baseOpacity);
        clearTimeout(shimmerTrigger);
        $("#shimmerText").stop().fadeOut(fadeTime);
    });

    $(".color").mouseenter(function () {
        $(this).stop().fadeTo(fadeTime, 1);
    })
    .mouseleave(function () {
        $(this).stop().fadeTo(fadeTime, 0);
    });

    $("#menuName li")
    .mouseenter(function () {
        current = $(this).attr("class");
        $("." + current).stop().fadeTo(fadeTime, highlightedOpacity);
        shimmerTrigger = setTimeout('$("#shimmerText").stop().fadeTo(shimmerFadeTime, shimmerOpacity)', shimmerWaitTime);
    })
    .mouseleave(function () {
        $("." + current).stop().fadeTo(fadeTime, baseOpacity);
        clearTimeout(shimmerTrigger);
        $("#shimmerText").stop().fadeOut(fadeTime);
    });

    $("#menuImage li")
    .mouseenter(function () {
        current = $(this).attr("class");
        $("." + current).stop().fadeTo(fadeTime, highlightedOpacity);
        shimmerTrigger = setTimeout('$("#shimmerText").stop().fadeTo(shimmerFadeTime, shimmerOpacity)', shimmerWaitTime);
    })
    .mouseleave(function () {
        $("." + current).stop().fadeTo(fadeTime, baseOpacity);
        clearTimeout(shimmerTrigger);
        $("#shimmerText").stop().fadeOut(fadeTime);
    });


    $('#nameContainer').mousemove(function (e) {
        listShift("nameContainer", "titleContainer", "imageContainer", e.pageY);
    });

    $('#titleContainer').mousemove(function (e) {
        listShift("titleContainer", "nameContainer", "imageContainer", e.pageY);
    });

    /*    $('#imageContainer').mousemove(function (e) {
    listShift("imageContainer", "nameContainer", "titleContainer", e.pageY);
    }); */


});

function listShift(mainId, subId1, subId2, rawMouse) {

    var mouseY = rawMouse - $("#" + mainId).offset().top;

    var main = $("#" + mainId + " ul");
    var mainItems = $("#" + mainId + " ul li");
    var mainItemHeight = mainItems.outerHeight()
    var mainIndex = mainItems.index($("#" + mainId + " ul li." + current));
   
    var mainContainerHeight = $("#" + mainId).height();
    var mainListHeight = $("#" + mainId + " ul").height() + mainContainerHeight + mainItemHeight;
   
    var sub1 = $("#" + subId1 + " ul");
    var subItems1 = $("#" + subId1 + " ul li")
    var subItemHeight1 = subItems1.outerHeight();
    var subIndex1 = subItems1.index($("#" + subId1 + " ul li." + current));
   
    var sub2 = $("#" + subId2 + " ul");
    var subItems2 = $("#" + subId2 + " ul li")
    var subItemHeight2 = subItems2.outerHeight();
    var subIndex2 = subItems2.index($("#" + subId2 + " ul li." + current));

    var mainOffset = Math.round((mouseY/mainContainerHeight)* (mainContainerHeight - mainListHeight)) + mainContainerHeight / 2;
    var subOffset1 = mainOffset + mainIndex * mainItemHeight - subIndex1 * subItemHeight1;
    var subOffset2 = mainOffset + mainIndex * mainItemHeight - subIndex2 * subItemHeight2;


    main.animate({ top: mainOffset }, { queue: false, duration: 150, easing: 'easeOutQuad' });
    sub1.animate({ top: subOffset1 }, { queue: false, duration: 150, easing: 'easeOutQuad' });
    sub2.animate({ top: subOffset2 }, { queue: false, duration: 150, easing: 'easeOutQuad' });

    $("#shimmerText").animate({ top: mainOffset + mainIndex * mainItemHeight + shimmerOffset}, { queue: false, duration: 150, easing: 'easeOutQuad' });

    }
    /*
    containerOffset = $('#nameContainer').offset().top;

    itemHeight = $("#nameContainer ul li").height() + 20; //twice the padding

    listHeight = $("#"+mainId+" ul").height() + itemHeight + $("#" + mainId).height();

    

    
  var currentSub1Item = $("#" + subId1 + " ul li." + current);
 var currentSub2Item = $("#" + subId2 + " ul li." + current);
  var currentMainItem = $("#" + mainId + " ul li." + current);

  var theta = (mouseY)/containerHeight;
  var sub1Index = $("#" + subId1 + " ul li").index(currentSub1Item);
  var sub2Index = $("#" + subId2 + " ul li").index(currentSub2Item);
  var mainIndex = $("#" + mainId + " ul li").index(currentMainItem);

  var mainOffset = Math.round(theta * (-1* $("#"+mainId+" ul").height() - itemHeight )) + $("#" + mainId).height() / 2;
  var subOffset1 = mainOffset + (mainIndex - sub1Index) * $("#" + subId1 + " ul li").height() + 20;
  var subOffset2 = mainOffset + (mainIndex - sub2Index) * $("#" + subId2 + " ul li").height();


  menuMain.animate({ top: mainOffset }, { queue: false, duration: 150, easing: 'easeOutQuad' });
  menuSub1.animate({ top: subOffset1 }, { queue: false, duration: 150, easing: 'easeOutQuad' });
  menuSub2.animate({ top: subOffset2 }, { queue: false, duration: 150, easing: 'easeOutQuad' });


  $("#shimmerText").animate({ top: mainOffset + mainIndex * $("#" + mainId + " ul li").height() +20 + shimmerOffset }, { queue: false, duration: 150, easing: 'easeOutQuad' });
  // menuMain.animate({ top: mainOffset }, { queue: false, duration: 150, easing: 'easeOutQuad' },fixIt(mainId,subId, index));
}

/*
function fixIt(mainId, subId, index) {
    itemHeight = $("#containerName ul li").height() + 20; //twice the padding
    $("#shimmer").css("top", $("#" + mainId + " li." + current).offset().top);
    var subOffset = -1 * (index * itemHeight - $("#" + mainId + " li." + current).offset().top + itemHeight / 2);
    $("#"+subId).animate({ top: subOffset }, { queue: false, duration: 250, easing: 'easeOutQuad' });
}
*/

/*
//autoscroll
//scrollTo(Position)

//Uses a parabolic equation to get the fading effect on the list
function getOpacity(index) {
return (index * index - index * numItems) / (fadeCount * fadeCount - fadeCount * numItems);
}



function li_click(){
 
$("#scroller").prepend('<li>test</li>');
var first = $('li:first', $("#scroller"));

var oldMarginTop = first.css('margin-top');
var ulPaddingTop = parseInt($("#scroller").css('padding-top'));

first.css({
marginTop: 0 - first.outerHeight(),
opacity: 0,
position: 'relative',
top: 0 - ulPaddingTop
});

first.animate({ top: 0 }, 50, function () {});

first.animate({ marginTop: oldMarginTop }, 800, function () {});

$("#scroller li").each(function (index) {
if (index > numItems) {
$('li:last', $("#scroller")).remove();
} else {
$(this).fadeTo(fadeTime, getOpacity(index));
}
});
} 

    //Smoothly adds a new item to the top of a list
    function addItemTop(id, text, containerId) {
        var container = $("#" + containerId);
        container.prepend("<li id='" + id + "'>" + text + "</li>");

        var first = $('li:first', container);
        var oldMarginTop = first.css('margin-top');
        var ulPaddingTop = parseInt(container.css('padding-top'));

        //Set the look of the newly added item
        first.css({
            marginTop: 0 - first.outerHeight(),
            opacity: 0,
            position: 'relative',
            top: 0 - ulPaddingTop
        });
        //Move the list down
        first.animate({ top: 0 }, 1000, function () { });
        first.animate({ marginTop: oldMarginTop }, 2400, function () { });

        updateOpacity(containerId);
    }

    //Changes all the opacities on the given list items based on index
    function updateOpacity(containerId) {
        $("#" + containerId + " li").each(function (index) {
            if (index > numItems) {
                $('li:last', $("#" + containerId)).remove();
            } else {
                $(this).fadeTo(fadeTime, getOpacity(index));
            }
        });

    }

    */