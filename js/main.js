$(document).ready(function () {
    
    $(".jsPage").hide();
    $(".jsP").hide();
    $(".jsP:first").show();
    $("#mainPage").show();
    $(".menuList li:first-child").addClass("selectedMenu");
    


   $(".burger").click(function (params) {
        $(this).toggleClass("burger_active");
       $(".mainMenu").toggleClass("active");
   });
   
   

   $(".menuList li").click(function (params) {
       var index = $(this).index();
       $(".mainMenu").removeClass("active");
       $(".menuList li").removeClass("selectedMenu");
       $(this).addClass("selectedMenu"); 
       $(".jsPage").hide();
       $(".jsPage").eq(index).fadeIn(400);

       $(".fa-times-circle").css("display", "none");
        $(".fa-list").css("display", "inline")
        $(".listStyleMenu").hide();
        $(".owl-carousel").fadeIn(200);
        $(".discriptionMenu").fadeIn(200);

        $(".burger").removeClass("burger_active");

   })

   $(".jsPage").click(function (params) {
       $(".mainMenu").removeClass("active");
       $(".burger").removeClass("burger_active");
   });

   $(".logo").click(function (params) {
    $(".jsPage").hide();
    $("#mainPage").fadeIn(400);
    $(".menuList li").removeClass("selectedMenu");
    $(".menuList li:first-child").addClass("selectedMenu");
   });

    $(".fa-list").click(function (params) {
        $(this).css("display", "none");
        $(".fa-times-circle").css("display", "inline");
        $(".owl-carousel").hide();
        $(".discriptionMenu").hide();
        $(".listStyleMenu").fadeIn(500);
    
    })
    $(".fa-times-circle").click(function (params) {
        $(this).css("display", "none");
        $(".fa-list").css("display", "inline")
        $(".listStyleMenu").hide();
        $(".owl-carousel").fadeIn(200);
        $(".discriptionMenu").fadeIn(200);   
    })
  

var owl = $('.owl-carousel');
var owlConfig = {
    index:1,
    center: true,
    loop: true,
    nav: true,
    dots: true,
    loop:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        901:{
            items:3,
            nav:true           
        }
    }
  };

  owl.owlCarousel(owlConfig);

  owl.on('translated.owl.carousel', function(event) {
      //console.log(event.item.index);
      var index = event.item.index; 
       $(".jsP").hide();
       $(".jsP").eq(index).fadeIn(400)
  });

  $('.gallery a').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery:{
        enabled:true
      }
  });

  $('#tableMorkva td a, #responsiveMenu>div a').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    
  });


});