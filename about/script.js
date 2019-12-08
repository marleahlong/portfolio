$(".content span.hover-word").on('mouseover',function(){
		$(".hover-word").removeClass('hide-img');
    $(this).addClass('show-img');
		console.log('hover');
});
