var pre = document.getElementById("load");
function merafunction() {
    pre.style.display = "none";
}

document.getElementById("teranaam").innerHTML = localStorage.getItem("id");
// <!-- Function used to shrink nav bar removing paddings and adding black background -->
$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $(".nav").addClass("affix");
        document.getElementById("naaam").style.display = "none";
        // console.log("OK");
    } else {
        $(".nav").removeClass("affix");
        document.getElementById("naaam").style.display = "block";
    }
});
$(".navTrigger").click(function () {
    $(this).toggleClass("active");
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
// back to top button
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll").fadeIn();
        } else {
            $("#scroll").fadeOut();
        }
    });
    $("#scroll").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });
});
