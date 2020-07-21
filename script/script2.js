$(document).ready(function(){
    var count = 1;

    //input value 출력
    $('#color').click(function(){
        $('.sel_result p').eq(0).find('span').text($('#color').val());
    });
    $('#s_size, #m_size').click(function(){
        $('.sel_result p').eq(1).find('span').text($(this).val());
    });

    //quantity 증감
    $('.plus').click(function(){
        if (count < 9) count++;
        $('.quant span').text('0' + count);
        $('.total span').text(comma(448000 * count));
    });
    $('.minus').click(function(){
        if (count > 1) count--; 
        $('.quant span').text('0' + count);
        $('.total span').text(comma(448000 * count));
    });

    //3자리수 구분점 함수
    function comma(num){
         var len, point, str; 
    
         num = num + ""; 
         point = num.length % 3 ;
         len = num.length; 
     
         str = num.substring(0, point); 
         while (point < len) { 
             if (str != "") str += ","; 
             str += num.substring(point, point + 3); 
             point += 3; 
         } 
         
         return str;
     }  

     //pop up
     $('.cart').click(function(){
         if ($('#color').prop('checked') && ($('#s_size').prop('checked') || $('#m_size').prop('checked')) ) {
          $('.poparea').fadeIn();
          $('.bag_result p').eq(0).find('span').text($('#color').val());
          $('.bag_result p').eq(1).find('span').text($('.sel_result p').eq(1).find('span').text());
          $('.bag_result p').eq(2).find('span').text(count);
          $('.bag_result p').eq(3).find('span').text(comma(448000 * count));
          $('.right_nav a').find('span').text('0'+ count);
          $('.product_info').show();
         } else { alert('옵션을 선택해주세요.');}
     });

     $('.quit').click(function(){
         $('.poparea').fadeOut();
     });

     $('.delete').click(function(){
         if ($('#product_name').prop('checked')) { 
             $('.product_info').hide();
             $('.right_nav a').find('span').text('00'); } 
             else { alert('삭제하실 품목을 선택해주세요.'); }
     });

    //flow text
     $(window).scroll(function(){
         if ($('.second .img5').offset().top - 200 < $(window).scrollTop()) {
             $('.second img').stop().animate({left: $(window).scrollTop()/5*-1});
         }
     });

    //link 
     $('.relateditem div').each(function(){
         $(this).click(function(){
             $(location).attr('href','index.html');
         });
     });
     $('.logo').click(function(){
        $(location).attr('href','index.html');
    });

    //hover img 확대 
    $('.target')
    .append('<div class="photo"></div>')
    .children('.photo').css({
            'background-image': 'url(' + $('.target').attr('data-image') + ')'
    });
    $('.target')    
    .on('mouseover', function () {
        $(this).children('.photo').css({
            'transform': 'scale(' + $(this).attr('data-scale') + ')'
        });
    });
    $('.target')
    .on('mouseout', function () {
        $(this).children('.photo').css({
            'transform': 'scale(1)'
        });
    });
    $('.target')
    .on('mousemove', function (e) {
        $(this).children('.photo').css({
            'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
        });
    });
 });