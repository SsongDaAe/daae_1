$(document).ready(function() {
/*메인슬라이드*/    
var numBanner = 5;
var bannerNow = 0;
var bannerPrev = 0;
var bannerNext = 0;
var firsrSlide = 1; // 처음에보여주는 슬라이드
var timerId = '';  
var timerSpeed = 2500;
var isTimerOn = true;
    
/*최상위로 올라가기*/
var topEle = $('header#inner_wrap div.top div.aside a.main_top');
var delay = 1000;


/*최상위로 올라가기*/
topEle.on('click', function() {
  $('html, body').stop().animate({scrollTop: 0}, delay);
});
    
$(window).on('scroll', function() {
    setScroll();
    setScrollHeader();
});   
    
/*gnb메뉴*/
$('header#inner_wrap div.top a.mobile').on('click', function() {
    $(this).toggleClass('on');
    $('header#inner_wrap div.top a.mobile').toggleClass('close');
    $('header#inner_wrap div.top_gnb').toggleClass('on');
});
$('header#inner_wrap div.top_gnb ul.gnbList > li > a').on('click', function() {
    $(this).siblings().toggleClass('on');
});
	
$('header#inner_wrap div.top_gnb ul.gnbList button.closeSnb').on('click', function() {
	$('header#inner_wrap div.top_gnb ul.gnbList > li > a').siblings().removeClass('on');
});
 
/*지점선택(메뉴)*/
$('header#inner_wrap div.top div.text li.Intext > a').on('click', function() {
    $('header#inner_wrap div.top div.text li.Intext .In_text').toggleClass('on');
});
$('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:last-child a.close').on('click', function() {
    $('header#inner_wrap div.top div.text li.Intext .In_text').removeClass('on');
});
  
/*지점선택 > bg, text 바뀜*/
$('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(2)').on('click', function() {
    var text = $('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(2)').text();
    $('header#inner_wrap').addClass('bg_sh');
    $('header#inner_wrap').removeClass('bg_md bg_gn bg_bs bg_ic');
    $('header#inner_wrap div.top div.text li.Intext > a > span').text(text);
    $('header#inner_wrap div.top ul.Info:nth-of-type(1)').removeClass('bg_md');
    $('header#inner_wrap div.top ul.Info').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(2)').removeClass('bg_gn');
    $('header#inner_wrap div.top ul.Info:nth-of-type(3)').removeClass('bg_bs');
    $('header#inner_wrap div.top ul.Info:nth-of-type(4)').removeClass('bg_ic');
    $('header#inner_wrap div.top .Info').addClass('bg_sh');
    $('header#inner_wrap div.top .cupon').addClass('bg_sh');
    $('header#inner_wrap div.top div.text li.Intext .In_text').toggleClass('on');
});
$('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(3)').on('click', function() {
    var text = $('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(3)').text();
    $('header#inner_wrap').removeClass('bg_sh bg_gn bg_bs bg_ic');
    $('header#inner_wrap').addClass('bg_md');
    $('header#inner_wrap div.top div.text li.Intext > a > span').text(text);
    $('header#inner_wrap div.top ul.Info:nth-of-type(1)').removeClass('bg_md');
    $('header#inner_wrap div.top ul.Info').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(2)').removeClass('bg_gn');
    $('header#inner_wrap div.top ul.Info:nth-of-type(3)').removeClass('bg_bs');
    $('header#inner_wrap div.top ul.Info:nth-of-type(4)').removeClass('bg_ic');
    $('header#inner_wrap div.top .Info').removeClass('on');
    $('header#inner_wrap div.top .cupon').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(1)').addClass('bg_md');
    $('header#inner_wrap div.top div.text li.Intext .In_text').toggleClass('on');
});
$('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(4)').on('click', function() {
    var text = $('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(4)').text();
    $('header#inner_wrap').addClass('bg_gn');
    $('header#inner_wrap').removeClass('bg_md bg_sh bg_bs bg_ic');
    $('header#inner_wrap div.top div.text li.Intext > a > span').text(text);
    $('header#inner_wrap div.top ul.Info:nth-of-type(1)').removeClass('bg_md');
    $('header#inner_wrap div.top ul.Info').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(2)').removeClass('bg_gn');
    $('header#inner_wrap div.top ul.Info:nth-of-type(3)').removeClass('bg_bs');
    $('header#inner_wrap div.top ul.Info:nth-of-type(4)').removeClass('bg_ic');
    $('header#inner_wrap div.top .Info').removeClass('on');
    $('header#inner_wrap div.top .cupon').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(2)').addClass('bg_gn');
    $('header#inner_wrap div.top div.text li.Intext .In_text').toggleClass('on');
});
$('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(5)').on('click', function() {
    var text = $('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(5)').text();
    $('header#inner_wrap').addClass('bg_bs');
    $('header#inner_wrap').removeClass('bg_md bg_sh bg_gn bg_ic');
    $('header#inner_wrap div.top div.text li.Intext > a > span').text(text);
    $('header#inner_wrap div.top .Info:nth-of-type(1)').removeClass('bg_md');
    $('header#inner_wrap div.topul.Info').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(2)').removeClass('bg_gn');
    $('header#inner_wrap div.top ul.Info:nth-of-type(3)').removeClass('bg_bs');
    $('header#inner_wrap div.top ul.Info:nth-of-type(4)').removeClass('bg_ic');
    $('header#inner_wrap div.top .Info').removeClass('on');
    $('header#inner_wrap div.top .cupon').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(3)').addClass('bg_bs');
    $('header#inner_wrap div.top div.text li.Intext .In_text').toggleClass('on');
});
$('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(6)').on('click', function() {
    var text = $('header#inner_wrap div.top div.text li.Intext > ul.In_text > li:nth-child(6)').text();
    $('header#inner_wrap').addClass('bg_ic');
    $('header#inner_wrap').removeClass('bg_md bg_sh bg_gn bg_bs');
    $('header#inner_wrap div.top div.text li.Intext > a > span').text(text);
    $('header#inner_wrap div.top .Info:nth-of-type(1)').removeClass('bg_md');
    $('header#inner_wrap div.top ul.Info').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(2)').removeClass('bg_gn');
    $('header#inner_wrap div.top ul.Info:nth-of-type(3)').removeClass('bg_bs');
    $('header#inner_wrap div.top ul.Info:nth-of-type(4)').removeClass('bg_ic');
    $('header#inner_wrap div.top .Info').removeClass('on');
    $('header#inner_wrap div.top .cupon').removeClass('bg_sh');
    $('header#inner_wrap div.top ul.Info:nth-of-type(4)').addClass('bg_ic');
    $('header#inner_wrap div.top div.text li.Intext .In_text').toggleClass('on');
});
    
/*메인 베너 슬라이드*/
bannerSlide(firsrSlide);
    
/*main이미지 배열*/    
$('ul.banner li').each(function(i) {
    $(this).css({'left': (i * 100) + '%', 'display': 'block'});
});

/*popup / mask*/
$('.cupon').click(function(e){
 e.preventDefault();
 wrapWindowByMask();
});
    
//닫기 버튼을 눌렀을 때
$('.window .close').click(function (e) {  
//링크 기본동작은 작동하지 않도록 한다.
    e.preventDefault();  
    $('#mask, .window').hide();  
});       

//검은 막을 눌렀을 때
$('#mask').click(function () {  
    $(this).hide();  
    $('.window').hide();  
}); 
 
//신규입점브랜드   
$('div.NEW ul.indicator li a').on('click', function() {
    var index = $('div.NEW ul.indicator li').index($(this).parent());
    $('div.NEW div.Newlist > ul').css({'display': 'none'});
    $('div.NEW div.Newlist > ul:eq(' + index + ')').css({'display': 'block'});
    $('div.NEW ul.indicator li').removeClass('on');
    $('div.NEW ul.indicator li:eq(' + index + ')').addClass('on');
 });  
    
//이벤트
$('div.event ul.indicator li a').on('click', function() {
    var index = $(this).parent().index();
    $('div.event > ul.event_img li').css({'display': 'none'});
    $('div.event > ul.event_img li:eq(' + index + ')').css({'display': 'block'});
    $('div.event ul.indicator li').removeClass('on');
    $('div.event ul.indicator li:eq(' + index + ')').addClass('on');
});

    

 /*헤더 fixed*/   
function setScrollHeader() {
    var scrollTop = $(document).scrollTop();
    //console.log(scrollTop);
    if (scrollTop > 100){
        $('div#header').addClass('fixed');
        $('div#header img').addClass('fixed');
        $('header#inner_wrap div.top h1').addClass('fixed');
        $('header#inner_wrap div.top h1 a').addClass('fixed');
        $('header#inner_wrap div.top ul.gnb_menu').addClass('fixed');
        $('header#inner_wrap ul.tnb').addClass('fixed');
        $('header#inner_wrap ul.tnb > li:first-child').addClass('fixed');
        $('header#inner_wrap div.top a.mobile').addClass('fixed');
        $('header#inner_wrap div.top a.mobile > span').addClass('fixed')
    } else {
        $('div#header').removeClass('fixed');
        $('div#header img').removeClass('fixed');
        $('header#inner_wrap div.top h1').removeClass('fixed');
        $('header#inner_wrap div.top h1 a').removeClass('fixed');
        $('header#inner_wrap div.top ul.gnb_menu').removeClass('fixed');
        $('header#inner_wrap ul.tnb').removeClass('fixed');
        $('header#inner_wrap ul.tnb > li:first-child').removeClass('fixed');
        $('header#inner_wrap div.top a.mobile').removeClass('fixed')
        $('header#inner_wrap div.top a.mobile > span').removeClass('fixed')
    }
} 
    
/*aside 메뉴 (나타나기)*/
function setScroll() {
    var scrollTop = $(document).scrollTop();
    //console.log(scrollTop);
    if (scrollTop > 800){
       $('header#inner_wrap div.top div.aside').css({'opacity':1});
       
    } else {
        $('header#inner_wrap div.top div.aside').css({'opacity':0});
    }
} 

/*메인베너 슬라이드*/
function bannerSlide(n) {
    clearTimeout(timerId);
    if (bannerNow === 0) {
        $('ul.banner').css({'transition': 'none','left': -((n - 1) * 100) + '%'}); 
    } else {
        $('ul.banner').css({'transition': 'left 0.5s','left': -((n - 1) * 100) + '%'}); 
        }
    bannerNow = n;
    bannerPrev = (n === 1) ? numBanner : (n - 1);
    bannerNext = (n === numBanner) ? 1 : (n + 1);
    //console.log(bannerPrev  + ' / ' + bannerNow + ' / ' + bannerNext);
    if (isTimerOn === true) {
        timerId = setTimeout(function() {bannerSlide(bannerNext);}, timerSpeed);
    }
}
 
});









