$(function() {
 
	var $c = $('#carousel'),
		$w = $(window);
 
	$c.carouFredSel({
		align: false,
		items: 1,
		direction: "left",
		scroll: {
			items: 1,
			duration: 5000,
			timeoutDuration: 0,
			easing: 'linear',
			pauseOnHover: 'immediate'
		}
	});
 

	
	$w.bind('resize.example', function() {
		var nw = $w.width();
		if (nw < 990) {
			nw = 990;
		}
 
		$c.width(nw * 3);
		$c.parent().width(nw);
 
	}).trigger('resize.example');
 
});