$(function(){
	$('.questionItem li').click(function(){
       
       if($(this).find('p').is(":hidden")){
		       $(this).find('p').slideDown();   //如果元素为隐藏,则将它显现
		       $(this).addClass('xuanzhuan');
               $(this).siblings().removeClass('xuanzhuan');
		}else{
		      $(this).find('p').slideUp();     //如果元素为显现,则将其隐藏
		      $(this).removeClass('xuanzhuan');
              $(this).siblings().removeClass('xuanzhuan');
		}
       $(this).siblings('li').find('p').slideUp();
	})
})