$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


    $(document).ready(function(){
        $('.results__slider').slick({
            slidesToShow: 1,
            dots: true
        });
    });

    $(document).ready(function(){
        $('.client__slider').slick({
            slidesToShow: 1,
            dots: true
        });
    });