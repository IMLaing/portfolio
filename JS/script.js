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

var quotes = $(".quotes");
var quoteIndex = -1;

function showNextQuote() {
  ++quoteIndex;
  quotes.eq(quoteIndex % quotes.length)
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000, showNextQuote);
}

showNextQuote();
/*$('.contentFull').on('click', function(){
	
	if($('.modularPop').is(":visible") && set === true){
		console.log('it is visible');
		$('.modularPop').toggle(500);
		console.log('it is no longer visible');
		set = false;
	}
});*/
	
});

