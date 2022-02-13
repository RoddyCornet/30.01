
$(function(){
	$('.slider__items').slick({
	arrows: true,
	dots: true,
	nextArrow: '<img class="slick__arrow-left" src="./img/logos/arrow-right.svg">',
	prevArrow: '<img class="slick__arrow-right" src="./img/logos/arrow-left.svg" alt="">',
});


$('.menu__btn').on('click',function(){
	$('.header__top-inner').toggleClass('header__top-inner--active');
});


});












