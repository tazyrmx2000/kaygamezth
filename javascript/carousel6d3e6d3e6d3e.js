$(document).ready(function () {
    
    // use carousel
    $("#slider_image_detail").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-lg"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-lg"></i>`,
        addClass: 'slide-detail-product hidden-navaction',
        gallery:true,
        item:1,
        loop:true,
        thumbItem:5,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        responsive: [
            {
                breakpoint: 820,
                settings:{
                    gallery:false,

                }
            }
        ]
    });
    // use carousel
    $("#content-slider-bannerMain").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products bannerMain hidden-navaction',
        item:1,
        slideMove:1,
        // easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 300, //ms'
        pause: 6000,
        auto: true,
        loop: true,
        slideMargin:0,
        slideEndAnimation: true,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    enableTouch:true,
                    enableDrag:true,
                    freeMove:false,
                  }
            },
        ]

    });

    $("#content-slider-banner01").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        item:1,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 300, //ms'
        pause: 6000,
        auto: true,
        loop: true,
        slideEndAnimation: true,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    enableTouch:true,
                    enableDrag:true,
                    freeMove:false,
                  }
            },
        ]
    });
    $("#content-slider-banner_mobile").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        item:1,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 300, //ms'
        pause: 6000,
        auto: true,
        loop: true,
        slideEndAnimation: true,
        enableTouch:false,
        enableDrag:false,
        freeMove:false,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    enableTouch:true,
                    enableDrag:true,
                    freeMove:false,
                  }
            },
        ]
    });
    $("#content-slider-banner02").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        item:3,
        slideMove:1,
        slideMargin:24,
        speed: 300, //ms'
        pause: 6000,
        mode: "slide",
        auto: true,
        loop: false,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        responsive : [
            {
                breakpoint:820,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:16,
                  }
            },
        ]
    });
    $("#content-slider-banneracer").lightSlider({
        addClass: 'carousel-hide-dots hidden-navaction',
        item:12,
        slideMove:12,
        slideMargin: 5,
        auto: false,
        loop: false,
        slideEndAnimation: false,
        enableTouch:false,
        enableDrag:true,
        freeMove:false,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    enableTouch:true,
                    enableDrag:true,
                  }
            },
            {
                breakpoint:550,
                settings: {
                    item:4,
                    slideMove:4,
                    enableTouch:true,
                    enableDrag:true,
                  }
            },
        ]
    });


    // carousel promotion1
    $("#content-slider-products").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        item:5,
        slideMove:1,
        slideMargin: 18,
        loop:false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300,
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    item:4,
                    slideMove:1,
                }
            },
            {
                breakpoint:450,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin: 16,
                }
            },
        ]
    });
    // carousel promotion1
    for (let index = 0; index < 2; index++) {
        $("#content-slider-promotion"+(index+1)).lightSlider({
            prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
            nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
            addClass: 'carousel-products hidden-navaction',
            loop:false,
            item:3,
            slideMove:1,
            slideMargin: 18,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:300,
            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            responsive : [
                {
                    breakpoint:1000,
                    settings: {
                        item:3,
                        slideMove:1,
                    }
                },
                {
                    breakpoint:900,
                    settings: {
                        item:2,
                        slideMove:1,
                      }
                },
                {
                    breakpoint:550,
                    settings: {
                        item:1,
                        slideMove:1,
                        slideMargin: 16,
                      }
                },
            ]
        });
    }


    // carousel menunavs
    $("#content-slider-menuNavs").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-navsmenu h-100 hidden-navaction',
        loop:false,
        item:parseInt($("#num_menunavs").val()),
        slideMove:parseInt($("#num_menunavs").val()),
        enableTouch:false,
        enableDrag:false,
        freeMove:false,
        responsive : [
            {
                breakpoint:1300,
                settings: {
                    item:parseInt($("#num_menunavs").val()),
                    slideMove:parseInt($("#num_menunavs").val()),
                  }
            },
            {
                breakpoint:576,
                settings: {
                    item:4,
                    slideMove:4,
                    enableTouch:true,
                    enableDrag:true,
                    freeMove:true,
                  }
            },
        ]
    });

    // carousel the best seller
    $("#content-slider-bestseller").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        loop:false,
        item:4,
        slideMove:1,
        slideMargin: 24,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300,
        enableTouch: true,
        enableDrag:true,
        freeMove: true,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin: 16,
                  }
            }
        ]
    });

    $("#content-slider-bestseller1").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        loop:false,
        item:4,
        slideMove:1,
        slideMargin: 20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300,
        enableTouch: true,
        enableDrag:true,
        freeMove: true,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin: 16,
                  }
            }
        ]
    });

    $("#content-slider-bestseller2").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        loop:false,
        item:4,
        slideMove:1,
        slideMargin: 20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300,
        enableTouch: true,
        enableDrag:true,
        freeMove: true,
        responsive : [
            {
                breakpoint:1000,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin: 16,
                  }
            }
        ]
    });


    // carousel blog
    $("#content-slider-blog").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        loop:false,
        item:4,
        slideMove:4,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:300,
        enableTouch: true,
        enableDrag:true,
        freeMove: true,
        responsive : [
            {
                breakpoint:900,
                settings: {
                    item:2,
                    slideMove:2,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:2
                  }
            }
        ]
    });

    // carousel the best seller
    $("#content-slider-otherProducts").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        loop: false,
        item: 4,
        slideMove: 1,
        slideMargin:18,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 300,
        enableTouch: true,
        enableDrag: true,
        freeMove: false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    enableTouch: true,
                    enableDrag: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin:16,
                    enableTouch: true,
                    enableDrag: true,
                }
            }
        ]
    });

    $("#content-slider-benner01").lightSlider({
        prevHtml: `<i class="bi bi-chevron-left fa-1x"></i>`,
        nextHtml: `<i class="bi bi-chevron-right fa-1x"></i>`,
        addClass: 'carousel-products hidden-navaction',
        item:1,
        loop:false
    });

    // set display flex ให้ corousel
    $(".docready-setflex").addClass("d-flex");
});