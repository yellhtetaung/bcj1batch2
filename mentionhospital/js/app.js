$(document).ready(function () {
    // console.log('i am working')
    // Start Header Section
    // Start Banner Section
    // $(".carousel").carousel({
    //     interval: 1000;
    // })
    // End Banner Section
    // End Header Section

    // Start Info Section

    $(window).scroll(function () {
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if (getscrollpoint >= 220) {
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        } else {
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    });

    // End Info Section

    // Start ADV Section
    $("#videos").click(function () {
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto = getvideosrc + "?autoplay=1";

        $(getmodal + " iframe").attr("src", videourlwithauto);

        $(getmodal + " button.btn-close").click(function () {
            $(getmodal + " iframe").attr("src", getvideosrc);
        });

        $(getmodal).click('hidden.bs.modal', function () {
            $(getmodal + " iframe").attr("src", getvideosrc);
        })
    })
    // End ADV Section

    // Start Premises Section

    $("#lightslider").lightSlider({
        // auto: true,
        item: 4,
        loop: true,
        slideMove: 3,
        speed: 600
    }).play();
    // End Premises Section

    // Start Pricing Section
    $(window).scroll(function () {
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if (getscroll >= 2450) {
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        } else {
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }

    });
    // End Pricing Section

    // Start Join Us Section
    $("#accordion").accordion();
    // End Join Us Section

    // Start Footer Section
    $("#getyear").text(new Date().getUTCFullYear());
    // End Footer Section

    // Section Progress
    $(window).scroll(function () {
        var getprogress = $("#progresses");
        var getprogressvalue = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        //formula st * 100 / (pjheight - currentviewheight)

        // by jQuery
        // var getscrollheight = $(document).height();
        // // console.log(getscrollheight)
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);

        // var calcheight = getscrollheight - getclientheight;
        // var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
        // // console.log(getfinalheight);

        // By Javascript
        var getscrollheight = document.documentElement.scrollHeight;
        // console.log(getscrollheight)
        var getcliendheight = document.documentElement.clientHeight;
        // console.log(getcliendheight);

        var calcheight = getscrollheight - getcliendheight;
        var getfinalheight = Math.floor(getscrolltop * 100 / calcheight);

        getprogressvalue.text(`${getfinalheight}%`);

        getprogress.css({
            "background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        })


    })
    // End Progress
});
