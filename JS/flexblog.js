$(document).ready(function(){
$('#toggleFlexDirection').on('click', function(){
  if($('.windowFlexContainer').hasClass('flexRow')){
      $('.getStart .windowFlexContainer').removeClass('flexRow');
      $('.getStart .windowFlexContainer').addClass('flexColumn');
     } else {
      $('.getStart .windowFlexContainer').removeClass('flexColumn');
      $('.getStart .windowFlexContainer').addClass('flexRow');
     }
});

$('#toggleFlexJusContent').on('click', function(){
  if($('.windowFlexContainer').hasClass('flexJusAround')){
      $('.getStart .windowFlexContainer').removeClass('flexJusAround');
      $('.getStart .windowFlexContainer').addClass('flexJustBetween');
     } else {
      $('.getStart .windowFlexContainer').removeClass('flexJustBetween');
      $('.getStart .windowFlexContainer').addClass('flexJusAround');
     }
});




$('#toggleFlexAlignStart').on('click', function(){
        $('.windowFlexContainerAlign').removeClass('flexAlignItemCen, flexAlignItemEnd');
        $('.windowFlexContainerAlign').addClass('flexAlignItemStart');   
});
$('#toggleFlexAlignCenter').on('click', function(){  
       $('.windowFlexContainerAlign').removeClass('flexAlignItemStart');
      $('.windowFlexContainerAlign').removeClass('flexAlignItemEnd'); 
        $('.windowFlexContainerAlign').addClass('flexAlignItemCen');    
});
$('#toggleFlexAlignEnd').on('click', function(){  
       $('.windowFlexContainerAlign').removeClass('flexAlignItemCen, flexAlignItemStart');
       $('.windowFlexContainerAlign').addClass('flexAlignItemEnd');    
});


$('#flexAlignItemsStrEnd').on('click', function(){
  if($('.windowFlexContainerRows').hasClass('flexAlignConStart')){
        $('.windowFlexContainerRows').removeClass('flexAlignConCen flexAlignConStart flexAlignConAround flexAlignConBetween');
        $('.windowFlexContainerRows').addClass('flexAlignConEnd');
     } else {
        $('.windowFlexContainerRows').removeClass('flexAlignConCen flexAlignConEnd flexAlignConAround flexAlignConBetween');
        $('.windowFlexContainerRows').addClass('flexAlignConStart');
     }    
});

$('#flexAlignItemsArnBet').on('click', function(){
  if($('.windowFlexContainerRows').hasClass('flexAlignConBetween')){
        $('.windowFlexContainerRows').removeClass('flexAlignConCen flexAlignConStart flexAlignConEnd flexAlignConBetween');
        $('.windowFlexContainerRows').addClass('flexAlignConAround');
     } else {
        $('.windowFlexContainerRows').removeClass('flexAlignConCen flexAlignConStart flexAlignConEnd flexAlignConAround');
        $('.windowFlexContainerRows').addClass('flexAlignConBetween');
     }    
});

$('#flexAlignItemsCen').on('click', function(){
        $('.windowFlexContainerRows').removeClass('flexAlignConStart flexAlignConEnd flexAlignConAround flexAlignConBetween');
        $('.windowFlexContainerRows').addClass('flexAlignConCen');  
});
});