$(function(){
	$('.m_choose a').click(function(){
		$('.m_choose a').eq($(this).index()).addClass("active").siblings().removeClass('active');
		$('.m_froms #froms').hide().eq($(this).index()).show();
	});
		
	$('#closeregbtn').click(function(){
		$('.regone').hide();
		$('.regtwo').show();
	});

	
	/*中间栏目三--鼠标移过，左右按钮显示*/
	$(".chinaz").hover(function(){
		$(this).find(".prev,.next").fadeTo("show",0.7);
	},function(){
		$(this).find(".prev,.next").hide();
	})
	/*鼠标移过某个按钮 高亮显示*/
	$(".prev,.next").hover(function(){
		$(this).fadeTo("show",0.7);
	},function(){
		$(this).fadeTo("show",0.1);
	})
	$(".chinaz").slide({ titCell:".num ul" , mainCell:".51buypic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });		
});	

	/*底部垂直滚动条钓offset */
	$(window).scroll(function(){
		if($(window).scrollTop()>500 && $(window).scrollTop()<4500){
			$("#extra_info").removeClass('hide');
		}else{
			$("#extra_info").addClass('hide');
		}
	});

