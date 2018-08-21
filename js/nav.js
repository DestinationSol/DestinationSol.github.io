$(document).ready(function() {

    $(document).on("scroll", function() {
        $("header, #headerBuffer").toggleClass("small", $(document).scrollTop() > 10);
    });
    
    $("nav.desktop .link, nav.mobile ul .link").click(function() {
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