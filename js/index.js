$(document).ready(function() {

    var $images = $("#slideshow").children("img");
    var destination = 0;
    createSlideDots();
    function createSlideDots() {
        $("#slideshow .dot").remove();
        var emsNeeded = 2 * $images.length - 1;
        var emToPx = parseFloat($("body").css("font-size"));
        var pxsSpareEachSide = ($(document).width() - emToPx * emsNeeded) / 2;

        $images.each(function(index) {
            $("#slideshow").append("<span class='dot' id='" + index + "'></span>");
            $(".dot#" + index).css("left", pxsSpareEachSide + emToPx * (index * 2));
        });
        $(".dot#0").addClass("active");

        $(".dot").click(function() {
            destination = $(this).attr("id");
            updateSlide();
        });
    }
    function updateSlide() {
        $("#slideshow").css("pointer-events", "none");
        
        if (destination > $images.length - 1) {
            destination = 0;
        }
        if (destination < 0) {
            destination = $images.length - 1;
        }
        
        $images.each(function(index) {
            if (index == destination) {
                $(".dot#" + index).addClass("active");
                $(this).hide().fadeIn(250, function() {
                    $(this).css("z-index", "1");
                    $("#slideshow").css("pointer-events", "initial");
                });
            }
            else {
                $(".dot#" + index).removeClass("active");
                $(this).fadeOut(250, function() {
                    $(this).css("z-index", "-1").show();
                });
            }
        });
    }
    $("#left.arrow").click(function() {
        destination--;
        updateSlide();
    });
    $("#right.arrow").click(function() {
        destination++;
        updateSlide();
    });
    setInterval(function() {
        destination++;
        updateSlide();
    }, 5000);
    
    $(window).resize(createSlideDots);
});