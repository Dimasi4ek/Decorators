$(document).ready(function () {



$(".klient .but_more").click(function(){ 
  $(this).hide();
  $(".klient .more").show();
});


$(".header .burger .on").click(function(){ 
  $(".header .burger .on").hide();
  $(".header .burger .of").show();
  $(".menu").animate({left: "0px"}, 300);
});


$(".header .burger .of").click(function(){ 
  $(".header .burger .of").hide();
  $(".header .burger .on").show();
  $(".menu").animate({left: "-100%"}, 300);
});


$('.menu a[href*=#]').anchor({
    transitionDuration : 1200
});
$(".menu a").click(function(){ 
  $(".menu").animate({left: "-100%"}, 300);
  $(".header .burger .of").hide();
  $(".header .burger .on").show();
});


$(".klient .but").click(function(e){
  $but = $(this); 
  $name = $but.parent().find(".zag").text();
  $('.mess_pop .up1 .vid').val($name); 
  $('.mess_pop .up').hide();
  $('.mess_pop .up1').show();
  $('.mess_pop').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});

$(".variant .but.bt1").click(function(e){ 
  $but = $(this); 
  $name = $but.parent().find(".name strong").text();
  $('.mess_pop .up2 .vid').val($name); 

  $('.mess_pop .up').hide();
  $('.mess_pop .up2').show();
  $('.mess_pop').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});

$(".variant .but.bt2").click(function(e){
  $('.mess_pop .up3 .vid').val("Получить консультацию"); 
  $('.mess_pop .up').hide();
  $('.mess_pop .up3').show();
  $('.mess_pop').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});


$(".footer .politic").click(function(e){ 
  $('.politika').fadeIn(100);
  $('.fon_black').fadeIn(100);
  $("body").css("overflow","hidden");
});



$(".politika .clos, .fon_black, .mess_pop .clos").click(function(){ 
  $('.politika').fadeOut(100);
  $('.fon_black').fadeOut(100);
  $('.mess_pop').fadeOut(100);
  $("body").css("overflow-y","scroll");
});



$(".mini .chek").click(function(){ 
  $(this).toggleClass("activ");
});



$("form .but").click(function(){
  $but = $(this).parent().find(".submit");
  $but.click();
});




  
const elements = document.querySelectorAll('form input[name="tell"]');

function maskall(params){
  for(let index = 0; index < elements.length; index++){
    const element = elements[index];



let patternMask = IMask(element, {
  mask: '{+38} (\\0YX) 000-00-00',
  strict: true,
  lazy: false,  // make placeholder always visible
  placeholderChar: '_',     // defaults to '_'
  blocks: {
    YX: {
      mask: IMask.MaskedEnum,
      enum: ['67', '96', '97', '98','50','66','95','99','63','73','93']
    }
}
});

}
}
maskall();



$(".klient .tovar .owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 500,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      }
    }
});
$(".klient .tovar .owl_left").click(function() { 
  $but = $(this).parent();
  $but.find(".owl-prev").trigger('click');
});
$(".klient .tovar .owl_right").click(function() {
  $but = $(this).parent();
  $but.find(".owl-next").trigger('click');
});






$('.but').addClass('autoflash').append('<div class="flash lighting" style="height: 120px;width: 40px;top: 0px;left: -140px;"></div>');



// var StickyElement = function(node){
//   var doc = $(document), 
//       fixed = false,
//       anchor = node.find('.sticky-anchor'),
//       content = node.find('.sticky-content');
  
//   var onScroll = function(e){
  
//     var docTop = doc.scrollTop(),
//         anchorTop = anchor.offset().top;
    
    
//     if(docTop > anchorTop){
//       if(!fixed){
//         anchor.height(content.outerHeight());
//         content.addClass('fixed');        
//         fixed = true;
//       }
//     }  else   {
//       if(fixed){
//         anchor.height(0);
//         content.removeClass('fixed'); 
//         fixed = false;
//       }
//     }
//   };
  
//   $(window).on('scroll', onScroll);
// };

// var demo = new StickyElement($('#sticky'));





$(".block_top form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $phone  = $(this).find("input[name='tell']").val();
    let tell = $phone;
    if(tell.indexOf("_") == "-1"){

	    $.ajax({
	        url: 'send.php', 
	        data: $('.block_top form').serialize(),
	        type: 'POST',
	        success: function(res){
	            $(':input','.block_top form')
	      .not(':button, :submit, :reset, :hidden')
	      .val('') 
	             location.replace("./thanks.php");    
	        },
	    })

}else{
	console.log("Ошибка");
}
});


$(".utp form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $phone  = $(this).find("input[name='tell']").val();
    let tell = $phone;
    if(tell.indexOf("_") == "-1"){

    $.ajax({
        url: 'send.php', 
        data: $('.utp form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.utp form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./thanks.php");    
        },
    })
}else{
	console.log("Ошибка");
}
});


$(".utp2 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $phone  = $(this).find("input[name='tell']").val();
    let tell = $phone;
    if(tell.indexOf("_") == "-1"){
    $.ajax({
        url: 'send.php', 
        data: $('.utp2 form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.utp2 form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./thanks.php");    
        },
    })
}
});


$(".mess_pop .up1 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $phone  = $(this).find("input[name='tell']").val();
    let tell = $phone;
    if(tell.indexOf("_") == "-1"){
    $.ajax({
        url: 'send.php', 
        data: $('.mess_pop .up1 form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.mess_pop .up1 form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./thanks.php");    
        },
    })
}
});


$(".mess_pop .up2 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $phone  = $(this).find("input[name='tell']").val();
    let tell = $phone;
    if(tell.indexOf("_") == "-1"){
    $.ajax({
        url: 'send.php', 
        data: $('.mess_pop .up2 form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.mess_pop .up2 form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./thanks.php");    
        },
    })
}
});


$(".mess_pop .up3 form").submit(function(e) {// обрабатываем отправку формы 
    e.preventDefault();
    $phone  = $(this).find("input[name='tell']").val();
    let tell = $phone;
    if(tell.indexOf("_") == "-1"){
    $.ajax({
        url: 'send.php', 
        data: $('.mess_pop .up3 form').serialize(),
        type: 'POST',
        success: function(res){
            $(':input','.mess_pop .up3 form')
      .not(':button, :submit, :reset, :hidden')
      .val('') 
             location.replace("./thanks.php");    
        },
    })
}
});




});

