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
});
