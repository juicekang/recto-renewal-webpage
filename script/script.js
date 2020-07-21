$(document).ready(function(){
    //flow text
    $(window).scroll(function(){
        $(window).scrollTop() > 90 ? $('header').css('background','#fff') : $('header').css('background','inherit');
        $('.flowtext').stop().animate({left:$(window).scrollTop()/5 * -1});
    });

    //header hover 
    $('header').hover(function(){
        $(this).css('background','#fff');
    },function(){
        $(this).css('background','transparent'); 
    });

    //submenu slide down
    $('header .left_nav > ul, .submenu').hover(function(){
        $('.submenu').stop().slideDown();
        $('.submenu').css('background','#fff');
    },function(){
        $('.submenu').stop().slideUp();
        $('.submenu').css('background','#fff');
    });

    //hamburger menu 
    $('header .hamburger').click(function(){
        $('.menu').stop().fadeIn();
        $('.menu_header .hamburger').toggleClass('xmark');
    });
    $('.menu .hamburger').click(function(){
        $('.menu').stop().fadeOut();
        $('.menu_header .hamburger').toggleClass('xmark');
    });

    //link
    $('#shop_item .itemlist figure, #shop_item button').each(function(){
        $(this).click(function(){
            $(location).attr('href','sub.html');
        });
    });

    $('.logo').click(function(){
        $(location).attr('href','index.html');
    });

	//window resize
	
	$(window).resize(function(){
		if ($(window).width()<=1024) {
			$('#summer .textbox').css({
				right : $(window).width()/2 - $('#summer .textbox').width()/2
			});
			$('.main_text img').attr('src','img/sshorizon.svg');
		}
		$(' header img.logo').css({
			left:($(window).width()/2) - ($('header img.logo').width()/2)
		})

		
	});
	$(window).trigger('resize');
  });