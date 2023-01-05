$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".nav-bar").addClass("sticky");
        }else{
            $(".nav-bar").removeClass("sticky");
        }
    });

    //toggle button 

    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay:true,
        autoPlayTimeOut:500,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
            },
            600:{
                items: 2,
            },
            1000:{
                items: 3,
            },
        }
    });
});