$(document).ready(function(){

	$('.volvo__type-item').on('click', function(event) {
		event.preventDefault();

		$('.volvo__type-item').removeClass('volvo__type-item--active');
		$('.volvo__present').removeClass('volvo__present--active');

		$(this).addClass('volvo__type-item--active');
		$($(this).attr('href')).addClass('volvo__present--active');
	});

});


