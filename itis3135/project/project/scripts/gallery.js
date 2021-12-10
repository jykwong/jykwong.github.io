$(document).ready(function(){
    $("#slider1,#slider2,#slider3").bxSlider({ //same settings for all 3 sliders
        mode: 'fade',
        auto: false,
        autoControls: true,
        captions: true,
        slideWidth: 640,
        slideMargin: 2,
        randomStart: true,
        adaptiveHeight: true,
        pager: true,
        pagerType: 'short',
        captions: true,
    });
})