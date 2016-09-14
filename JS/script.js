$(document).ready(function(){
var set = false;
$('.modularPop').hide();
$('#modPoper').html('<i class="fa fa-question-circle-o"></i>');

$('#modPoper').on('click', function(event){
	event.isPropagationStopped();
		$(this).toggleClass('turn');
		$('.modularPop').toggle(500);
		if( set === false){
			$('#modPoper').html('<i class="fa fa-plus"></i>');
			set = true;
		} else {
			$('#modPoper').html('<i class="fa fa-question-circle-o"></i>');
			set = false;
		}
	});

/*$('.contentFull').on('click', function(){
	
	if($('.modularPop').is(":visible") && set === true){
		console.log('it is visible');
		$('.modularPop').toggle(500);
		console.log('it is no longer visible');
		set = false;
	}
});*/
	
});

