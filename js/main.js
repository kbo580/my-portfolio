$(function(){

  $('#show').click(function(){
    $(this).toggleClass('active');
    $('#side-nav').toggleClass('active');
  });


  $(window).scroll(function(){
    if($(this).scrollTop()>120){
      $('#show').fadeIn(200);
    }else{
      $('#show').fadeOut(200);
      $('#side-nav').removeClass('active');
      $('#show').removeClass('active');
    }
  });
  
  // スマホ用ヘッダーナビ
  $('#fixed-nav').hide();


  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('#fixed-nav').fadeIn(400);
    }else{
      $('#fixed-nav').fadeOut(400);
    }
  });

  //上部画像の設定
$('.gallery').slick({
	infinite: true,
	fade: true, 
	arrows: true,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, 
	slidesToShow: 4,
	focusOnSelect: true,
	asNavFor: '.gallery', 
});
  
//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide;
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});






});
