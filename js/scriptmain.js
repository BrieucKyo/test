$(document).ready(function() {

    // SCROLL DIV DESKTOP
    // $("#contacter").click(function() {
    //     $(document).scrollTo('#contact', 500);
    // });

    $("#contacter").click(function() {
      $('html,body').animate({
          scrollTop: $("#contact").offset().top},
          'slow');
    });

    // FIXED MENU 
    $(document).on("scroll", function() {

        if ($(document).scrollTop()>80) {

            $("header").css({
                "z-index": "200",
                "min-height": "60px",
                "background-color": "rgb(107, 151, 127)",
                // "background-color": "#556147"
            });

            $("header nav").css({
                "padding": "19px 0px 0px 0px"
            });

            $("#logo img").css({
                "width": "145px",
            });

            $("header #logo").css({
                "padding": "10px 0 0 0",
            });

            $("header #headersocial").css({
                "padding": '20px 0',
            });
            
        } else {
            $("header").css({
                "position": "",
                "z-index": "",
                "color": "",
                "background-color": "",
                "border-bottom": "",
                "min-height": ""
            });

            $("header nav").css({
                "padding": '',
            });

            $("#logo img").css({
                "width": "",
                "position": '',
                "top": "",
                "left": ""
            });

            $("header #logo").css({
                "padding": ""
            });

            $("header #headersocial").css({
                "padding": '',
            });
        }
    }); 

    // PROGRESS BAR ON SCROLL
    function updateProgress(num1, num2){
        var percent = Math.ceil( num1 / num2 * 100 ) + '%';
        document.getElementById('progress').style.width = percent;
    }

    window.addEventListener('scroll', function(){
        var top = window.scrollY;
        var height = document.body.getBoundingClientRect().height - window.innerHeight;
        updateProgress(top, height);
    });

    /* SWIPER */
    var galleryTop = new Swiper('.gallery-top', {
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       spaceBetween: 10,
       keyboardControl: true
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
       spaceBetween: 10,
       centeredSlides: true,
       slidesPerView: 'auto',
       touchRatio: 0.2,
       slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    var sliders = document.querySelectorAll('.swiper-slide');
    for (var i = 0; i < sliders.length; ++i) {
       sliders[i].addEventListener('click', function(event) {
          event.target.parentNode.parentNode.parentNode.classList.add('fullscreen');
          setTimeout(function() {
             galleryTop.update();
             galleryThumbs.update();
          }, 200);
       }, false);
    }

    var closeButtons = document.querySelectorAll('.close-button');
    for (var y = 0; y < closeButtons.length; ++y) {
       closeButtons[y].addEventListener('click', function(event) {
          console.log(event);
          var fullScreenElements = document.querySelectorAll('.fullscreen');
          console.log(fullScreenElements);
          for (var x = 0; x < fullScreenElements.length; ++x) {
             fullScreenElements[x].classList.remove('fullscreen');
             setTimeout(function() {
                galleryTop.update();
                galleryThumbs.update();
             }, 200);
          }
       });
    }

    /* HOVER MENU */
	$(".hovermenu1").hover(function(){

    	if ($('.hovermenu1').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu1').addClass('menuhover');
    	}
	});

	$(".hovermenu2").hover(function(){

    	if ($('.hovermenu2').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu2').addClass('menuhover');
    	}
	});

	$(".hovermenu3").hover(function(){

    	if ($('.hovermenu3').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu3').addClass('menuhover');
    	}
	});

	$(".hovermenu4").hover(function(){

    	if ($('.hovermenu4').hasClass('menuhover')){
    		$(this).removeClass('menuhover');
    
    	} else {
    		$('.hovermenu4').addClass('menuhover');
    	}
	});
});