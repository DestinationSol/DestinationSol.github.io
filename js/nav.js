$(document).ready(function() {
    
    $("nav.desktop span, nav.mobile ul.links li").click(function() {
        $(this).children("a")[0].click();
    });
    $("header #hamburger").click(function() {
        $("nav.mobile").slideToggle();
    });
    $("body").click(function(event) {
        if (!$(event.target).is(".mobile") && $(event.target).parents(".mobile").length <= 0 && $("nav.mobile").css("display") != "none") {
            $("nav.mobile").slideUp();
        }
    });
    
    $(window).resize(() => $("nav.mobile").css("display", "none"));
});