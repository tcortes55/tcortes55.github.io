/////
var d = new Date();
$("#currYear").text(d.getFullYear());

var viewHeight = window.innerHeight;

///// Smooth scroll (from menu links)

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    var navbarOffset = 45;
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - navbarOffset
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          // OBS: commented lines below in order to ensure offset is respected
          var $target = $(target);
//          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
//            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


///// Collapse navbar on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});



///// Fixing chapter title on scroll
var execScroll = function() {
    
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    if (w > 767)
    {
        fixTitle("chapter-title-profile", "chapter-content-profile");
        fixTitle("chapter-title-resume", "chapter-content-resume");
        fixTitle("chapter-title-contact", "chapter-content-contact");
        fixArrows(true);
    }
    else
    {
        fixArrows(false);
    }
    
};

function fixTitle(titleId, contentId) {
    var navbarOffset = 45;
    
    var titleRef = "#" + titleId;
    var contentRef = "#" + contentId;
    
    var title = $(titleRef);
    var content = $(contentRef);

    var titleHeight = title.outerHeight(),
        contentHeight = content.outerHeight(),
        contentOffsetTop = content.offset().top,
        currPos = window.pageYOffset;

    if (currPos <= contentOffsetTop - navbarOffset)
    {
        title.removeClass("title-fixed");
        content.removeClass("left-side");
        title.css("top", 0);
    }
    else if (currPos > (contentOffsetTop - navbarOffset + contentHeight - titleHeight))
    {
        title.removeClass("title-fixed");
        content.removeClass("left-side");
        title.css("top", contentHeight - titleHeight);
    }
    else
    {
        title.css("top", navbarOffset);
        title.addClass("title-fixed");
        content.addClass("left-side");
    }
}

function fixArrows(isLargeScreen) {
    
    var navbarOffset = 45;
//    var viewHeight = $(window).height();
//    var viewHeight = window.innerHeight;
    
    var arrowLeftId = "#arrow-left-side";
    var arrowRightId = "#arrow-right-side";
    var titleRef = "#chapter-title-resume";
    var contentRef = "#chapter-content-resume";
    
    var arrowLeft = $(arrowLeftId);
    var arrowRight = $(arrowRightId);
    var title = $(titleRef);
    var content = $(contentRef);
    
    
    var titleHeight = title.outerHeight(),
        contentHeight = content.outerHeight(),
        contentOffsetTop = content.offset().top,
        currPos = window.pageYOffset;
    
    
    
    // Depending on screen size, a different value will be used as reference for positioning the arrows
    var valueRef = 0;
    if (isLargeScreen)
    {
        valueRef = contentOffsetTop - navbarOffset + contentHeight - titleHeight;
    }
    else
    {
        valueRef = contentOffsetTop  + contentHeight - viewHeight;
    }
    
    
    // Evaluates current position in order to set arrows' position
    if (1 === 2)
    {

    
        if (currPos <= contentOffsetTop - navbarOffset)
        {
            arrowLeft.removeClass("arrow-fixed arrow-fixed-left");
            arrowLeft.css("top", "");
            arrowRight.removeClass("arrow-fixed arrow-fixed-right");
            arrowRight.css("top", "");
        }
        else if (currPos > valueRef)
        {
            arrowLeft.removeClass("arrow-fixed arrow-fixed-left");
            arrowLeft.css("top", contentHeight - viewHeight/2 + 6);
            arrowRight.removeClass("arrow-fixed arrow-fixed-right");
            arrowRight.css("top", contentHeight - viewHeight/2 + 6);
        }
        else
        {
            arrowLeft.addClass("arrow-fixed arrow-fixed-left");
            arrowLeft.css("top", "");
            arrowRight.addClass("arrow-fixed arrow-fixed-right");
            arrowRight.css("top", "");
        }
    }
    else
    {
//        if (currPos <= contentOffsetTop - navbarOffset)
//        {
//            arrowLeft.removeClass("arrow-fixed arrow-fixed-left");
//            arrowLeft.css("top", viewHeight/2 - 39);
//            arrowRight.removeClass("arrow-fixed arrow-fixed-right");
//            arrowRight.css("top", viewHeight/2 - 39);
//        }
//        else if (currPos > valueRef)
//        {
//            arrowLeft.removeClass("arrow-fixed arrow-fixed-left");
//            arrowLeft.css("top", contentHeight - viewHeight/2 + 6);
//            arrowRight.removeClass("arrow-fixed arrow-fixed-right");
//            arrowRight.css("top", contentHeight - viewHeight/2 + 6);
//        }
//        else
//        {
//            arrowLeft.addClass("arrow-fixed arrow-fixed-left");
//            arrowLeft.css("top", viewHeight/2 + 6);
//            arrowRight.addClass("arrow-fixed arrow-fixed-right");
//            arrowRight.css("top", viewHeight/2 + 6);
//        }
        
        var delay = 150;
        var timeout = null;
        
        arrowLeft.css({top: arrowLeft.css("top")});
        arrowRight.css({top: arrowRight.css("top")});
        
        clearTimeout(timeout);
        timeout = setTimeout(function(){


            if (currPos <= contentOffsetTop - navbarOffset)
            {
//                    arrowLeft.removeClass("arrow-mobile");
                arrowLeft.css("top", viewHeight/2 - 39);
//                    arrowRight.removeClass("arrow-mobile");
                arrowRight.css("top", viewHeight/2 - 39);
//                console.log("cima");
            }
            else if (currPos > valueRef)
            {
//                    arrowLeft.removeClass("arrow-mobile");
                arrowLeft.css("top", contentHeight - viewHeight/2 + 6);
//                    arrowRight.removeClass("arrow-mobile");
                arrowRight.css("top", contentHeight - viewHeight/2 + 6);
//                console.log("baixo");
            }
            else
            {
//                    arrowLeft.addClass("arrow-mobile");
                arrowLeft.css("top", viewHeight/2 + currPos - contentOffsetTop + 6);
//                    arrowRight.addClass("arrow-mobile");
                arrowRight.css("top", viewHeight/2 + currPos - contentOffsetTop + 6);
//                console.log("meio");
            }


        },delay);
    }
        
}

$(document).on( 'scroll', execScroll);
$(window).on( 'resize', execScroll);
$(".timeline-container").on( 'resize', execScroll);




///// Animate timeline
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}








///// Refreshing buttons actions
updateButtons();

function updateButtons() {
    $(".expand-left-side").click(expandLeftSide);
    $(".expand-right-side").click(expandRightSide);
    $(".collapse-right-side").click(collapseRightSide);
    $(".collapse-left-side").click(collapseLeftSide);
};

///// Gets max height from a set of elements
var maxHeight = function(elems){
    return Math.max.apply(null, elems.map(function ()
    {
        return $(this).height();
    }).get());
}


///// Collapsing timeline details
function collapseLeftSide() {
    
    // Modify right arrow action
    $("#arrow-right-side").removeClass("collapse-left-side");
    $("#arrow-right-side").addClass("expand-right-side");
    
    // Removes click actions
    $("#arrow-right-side").off("click");
    $("#arrow-left-side").off("click");
    
    // Hides divider
    $(".item-details").removeClass("timeline-details-divider");
    
    setTimeout(function(){
        // Hides details for each item
        $(".item-details").removeClass("timeline-details-expand");
        
        // Removes max height from items
        $(".container-left .timeline-item").css("height", "");
        $(".container-left").css("margin-top", "");
                    
        var intervalID = setInterval(execScroll, 1);
        setTimeout(function(){
            clearInterval(intervalID);
        }, 500);
        
        
        setTimeout(function(){
            // Collapses container from the left side
            $(".timeline-container").removeClass("timeline-width-100");
            $(".container-left").removeClass("timeline-width-100");
            

        
            setTimeout(function(){
                
                // Adds container from the right side to normal flow
                $(".container-right").removeClass("timeline-absolute");
                
                // Displays left arrow
                $("#arrow-left-side").removeClass("timeline-hidden");
                
                // Displays container from the right side
                $(".timeline-item-content").removeClass("timeline-max-none");
                $(".container-right").removeClass("timeline-hidden");
                
                updateButtons();
                
            }, 500);
        }, 500);
    }, 500);
};

function collapseRightSide() {
    
    // Modify right arrow action
    $("#arrow-left-side").removeClass("collapse-right-side");
    $("#arrow-left-side").addClass("expand-left-side");
    
    // Removes click actions
    $("#arrow-left-side").off("click");
    $("#arrow-right-side").off("click");
    
    // Hides divider
    $(".item-details").removeClass("timeline-details-divider");
    
    setTimeout(function(){
        // Hides details for each item
        $(".item-details").removeClass("timeline-details-expand");
        
        // Removes max height from items
        $(".container-right .timeline-item").css("height", "");
        $(".container-right").css("margin-top", "");
                    
        var intervalID = setInterval(execScroll, 1);
        setTimeout(function(){
            clearInterval(intervalID);
        }, 500);
        
        setTimeout(function(){
            // Collapses container from the left side
            $(".timeline-container").removeClass("timeline-width-100");
            $(".container-right").removeClass("timeline-width-100");
            
            setTimeout(function(){
                
                // Adds container from the right side to normal flow
                $(".container-left").removeClass("timeline-absolute");
                
                // Displays left arrow
                $("#arrow-right-side").removeClass("timeline-hidden");
                
                // Displays container from the right side
                $(".timeline-item-content").removeClass("timeline-max-none");
                $(".container-left").removeClass("timeline-hidden");
                
                updateButtons();
                
            }, 500);
        }, 500);
    }, 500);
};


//Expanding timeline details
function expandRightSide() {
    
    // Hides container from the left side
    $(".container-left").addClass("timeline-hidden");
    
    // Hides right arrow
    $("#arrow-right-side").addClass("timeline-hidden");
    $("#arrow-right-side").off("click");
    
    // Modify left arrow action
    $("#arrow-left-side").removeClass("expand-left-side");
    $("#arrow-left-side").addClass("collapse-right-side");
    $("#arrow-left-side").off("click");
    
    setTimeout(function(){
        
        $(".timeline-container").addClass("timeline-width-100");
        
        // Removes container from the left side from normal flow
        $(".container-left").addClass("timeline-absolute");
        $(".container-right").css("margin-left", "auto");
        $(".container-right").css("margin-right", 0);
        
        setTimeout(function() {
        
            $(".timeline-item-content").addClass("timeline-max-none");

            // Expands container from the right side
            $(".container-right").addClass("timeline-width-100");

            setTimeout(function(){
                // Displays details for each item
                $(".item-details").addClass("timeline-details-expand");

                // Displays divider
                $(".item-details").addClass("timeline-details-divider");
            
                setTimeout(function(){
                    // Sets adequate height to each item
                    var itemsHeight = maxHeight($(".container-right .timeline-item-content"));
                    itemsHeight = (itemsHeight + 16) * 1.05;
                    
                    $(".container-right .timeline-item.item-expand").css("height", itemsHeight);
                    $(".container-right").css("margin-top", itemsHeight/4);
                    $(".container-right .timeline-item.item-hide").css("height", 0);

                    updateButtons();
                    
                    var intervalID = setInterval(execScroll, 1);
                    setTimeout(function(){
                        clearInterval(intervalID);
                    }, 500);
                    
                }, 500);

            }, 500);
        }, 500);
    }, 500);
};

function expandLeftSide() {
    
    // Hides container from the right side
    $(".container-right").addClass("timeline-hidden");
    $(".container-right").css("right", "200px");
    
    // Hides left arrow
    $("#arrow-left-side").addClass("timeline-hidden");
    $("#arrow-left-side").off("click");
    
    // Modify right arrow action
    $("#arrow-right-side").removeClass("expand-right-side");
    $("#arrow-right-side").addClass("collapse-left-side");
    $("#arrow-right-side").off("click");
    
    setTimeout(function(){
        // Removes container from the right side from normal flow
        $(".container-right").addClass("timeline-absolute");
    
        // Expands container from the left side
        $(".container-left").addClass("timeline-width-100");
        $(".timeline-container").addClass("timeline-width-100");
        $(".timeline-item-content").addClass("timeline-max-none");
        
        setTimeout(function(){
            // Displays details for each item
            $(".item-details").addClass("timeline-details-expand");
            
            // Displays divider
            $(".item-details").addClass("timeline-details-divider");
            
            setTimeout(function(){
                // Sets adequate height to each item
                var itemsHeight = maxHeight($(".container-left .timeline-item-content"));
                itemsHeight = (itemsHeight + 16) * 1.05;
                
                $(".container-left .timeline-item.item-expand").css("height", itemsHeight);
                $(".container-left").css("margin-top", itemsHeight/4);
                $(".container-left .timeline-item.item-hide").css("height", 0);

                updateButtons();
                    
                var intervalID = setInterval(execScroll, 1);
                setTimeout(function(){
                    clearInterval(intervalID);
                }, 500);
                
            }, 500);
        }, 500);
    }, 500);
};