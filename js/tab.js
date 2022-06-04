$(document).ready(function() {
    
var numBanner = 6;
var bannerNow = 0;
var bannerPrev = 0;
var bannerNext = 0;
var firsrSlide = 1; // 처음에보여주는 슬라이드
var timerId = '';  
var timerSpeed = 2500;
var isTimerOn = true;


var numSlide = 4;
var slideNow = 0;
var slidePrev = numSlide;
var slideNext = 2;


var newSlide = 3;
var newNow = 1;
var newPrev = newSlide;
var newNext = 2;
    

$(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
});
    


/*.inner_gnb*/
$('div.gnb ul.gnb_menu li a').on('mouseenter focus', function() {
    $('.inner_gnb.on').css({'z-index': '1'});
    $('.inner_gnb.on').stop(true).slideDown();
    });
    $('.inner_gnb').on('mouseleave', function () {
    $('.inner_gnb.on').stop(true).slideUp();
});

/*.text_wrap*/
    
$('div.wrap_img div.main_wrap div.text_wrap ul.In_text li > a').on('click', function() {
    var index = $('div.wrap_img div.main_wrap div.text_wrap ul.In_text li').index($(this).parent());
    var text = $('div.wrap_img div.main_wrap div.text_wrap ul.In_text li a:eq(' + index + ')').text();
    $('div.wrap_img div.main_wrap ul.image li').css({'display': 'none'});
    $('div.wrap_img div.main_wrap ul.image li:eq(' + index + ')').css({'display': 'block'});
    $('div.wrap_img div.main_wrap li.Intext span').text(text);
    $('div.wrap_img div.main_wrap ul.Info').removeClass('on');
    $('div.wrap_img div.main_wrap ul.Info:eq(' + index + ')').addClass('on');
    });   
   $('div.wrap_img div.text ul.inner_text li.Intext a').on('click', function() {
       $('div.wrap_img div.text ul.inner_text li.Intext ul.In_text').toggleClass('on');
});
    
/*.banner_img*/
    $('div.inner_img div.banner ul.banner_img li').each(function(i) {
    $(this).css({'left': (i * 100) + '%', 'display': 'block'});
    // 이미지 배열
});
    
    bannerSlide(firsrSlide);
    
    $('div.main_icon div.left_icon').on('click', function() {
        bannerSlide(bannerPrev);
    });
    $('div.main_icon div.right_icon').on('click', function() {
        bannerSlide(bannerNext);
    });

/*신규 입점 브랜드*/
    showSlide(1);
    
    $('div.New_img a.prev').on('click', function() {
        showSlide(slidePrev);
    });
    
    $('div.New_img a.next').on('click', function() {
        showSlide(slideNext);
    });
    
/*.card_list*/
 $('.card_list > li').on('mouseover', function () {
        var i = $(this).index();
        $('li').removeClass('on');
        $('li').eq(i).addClass('on');
        
        $('.card_img').removeClass('on');
        $('.card_img').eq(i).addClass('on');
});

/*New Me,New Now*/
    newMe(1);
    $('div.NewMe div.New_LnaviI a.prev').on('click', function() {
        var index = $('div.New_list').index($(this).parent);
        newMe(newPrev);
    });
    
    $('div.NewMe div.New_LnaviI a.next').on('click', function() {
        newMe(newNext);
    });
    
/*wechat 팝업*/
    $('div.Ft_sns li.webchat a').on('click', function() {
       $('div.Ft_sns li.webchat div.weibo').toggleClass('on');
    });
    
/*popup*/
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
            $(this).hide();  a
            $('.window').hide();  
        }); 
    
 


function bannerSlide(b) {
    clearTimeout(timerId);
    if (bannerNow === 0) {
        $('div.inner_img div.banner ul.banner_img').css({'transition': 'none','left': -((b - 1) * 100) + '%'}); 
    } else {
        $('div.inner_img div.banner  ul.banner_img').css({'transition': 'left 0.5s','left': -((b - 1) * 100) + '%'}); 
        }
    bannerNow = b;
    bannerPrev = (b === 1) ? numBanner : (b - 1);
    bannerNext = (b === numBanner) ? 1 : (b + 1);
    //console.log(bannerPrev  + ' / ' + bannerNow + ' / ' + bannerNext);
    if (isTimerOn === true) {
        timerId = setTimeout(function() {bannerSlide(bannerNext);}, timerSpeed);
    }
}

 function wrapWindowByMask(){
     var maskHeight = $(document).height();  
     var maskWidth = $(window).width();  

     $('#mask').css({'width':maskWidth,'height':maskHeight}); 
     $('#mask').fadeTo("slow",0.8);    

     $('.window').show();
    }

function showSlide(n) {
    $('div.New_list').removeClass('on');
    $('div.New_list:eq(' + (n - 1) + ')').addClass('on');
    
    $('div.New_navi').css({'display': 'none'});
    $('div.New_navi:eq(' + (n - 1) + ')').css({'display': 'block'});
    slideNow = n;
    slidePrev = (n === 1) ? numSlide : (n - 1);
    slideNext = (n === numSlide) ? 1 : (n + 1);
    //console.log(slidePrev  + ' / ' + slideNow + ' / ' + slideNext);
}

function newMe(a) {
    $('div.NewMe div.New_left div.New_leftT').css({'display': 'none'});
    $('div.NewMe div.New_left div.New_leftT:eq(' + (a - 1) + ')').css({'display': 'block'});
    
    $('div.NewMe div.New_left div.New_Lnavi').css({'display': 'none'});
    $('div.NewMe div.New_left div.New_Lnavi:eq(' + (a - 1) + ')').css({'display': 'block'});
    
    $('div.NewMe div.New_right div.New_rightI').removeClass('on');
    $('div.NewMe div.New_right div.New_rightI:eq(' + (a - 1) + ')').addClass('on');
    newNow = a;
    newPrev = (a === 1) ? newSlide : (a - 1);
    newNext = (a === newSlide) ? 1 : (a + 1);
}
    
});









