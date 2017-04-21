$(document).ready(function () {
    $(".close-menu").click(function () {
        $(this).hide();
        $(".nav-btn").show();
        $(".main-nav").toggle("slide");
        $(".main-container").animate({"padding-left": '0'});

    });
    $(".nav-btn").click(function () {
        $(this).hide();
        $('.close-menu').show();
        //$(".content-container").removeAttr("style");	
        //$(".nav-back").show();
        $(".main-nav").toggle("slide");
        $(".main-container").animate({"padding-left": '314px'});
    });
});
$(function () {
    $(".datepicker").each(function () {
        $(this).datetimepicker({
            showOn: "button",
            buttonImage: "http://dts2k.me/assets/images/calendaricon.png",
            buttonImageOnly: true,
            buttonText: "Select date"
        });
    });
});