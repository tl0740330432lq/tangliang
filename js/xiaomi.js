var $li=$(".box>ul>li")
var $show=$(".run .show")
$li.on('mouseover',function(){
	$show.eq($(this).index()).css('display','block')
	$(this).css('margin-top','-5px')
	$show.eq($(this).index()).animate({
		
		height:"100px"

	})

})
$li.on('mouseout',function(){
	$(this).css('margin-top','0px')
	$show.eq($(this).index()).css('display','none')	
})