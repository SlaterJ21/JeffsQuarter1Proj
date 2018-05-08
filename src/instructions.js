$(document).ready(function(){

  function hideInstructions(){
    $('.info').hide();
  }

  $('.start').click(hideInstructions);

  $( ".start" ).hover(
  function() {
    $( this ).addClass( "inst" );
  }, function() {
    $( this ).removeClass( "inst" );
  }
);

$( ".eggInfoCon" ).hover(
  function() {
    $( this ).addClass( "inst" );
    $('.screen').addClass( 'instCo');
  }, function() {
    $( this ).removeClass( "inst" );
    $('.screen').removeClass( 'instCo');
  }
);

$( ".statusInfoCon" ).hover(
  function() {
    $( this ).addClass( "inst" );
    $('.status').addClass( 'instCo');
  }, function() {
    $( this ).removeClass( "inst" );
    $('.status').removeClass( 'instCo');
  }
);

$( ".buttonInfoCon" ).hover(
  function() {
    $( this ).addClass( "inst" );
    $('.one').addClass( 'instCo');
    $('.two').addClass( 'instCo');
    $('.three').addClass( 'instCo');
  }, function() {
    $( this ).removeClass( "inst" );
    $('.one').removeClass( 'instCo');
    $('.two').removeClass( 'instCo');
    $('.three').removeClass( 'instCo');
  }
);

$( ".indicInfoCon" ).hover(
  function() {
    $( this ).addClass( "inst" );
    $('.ic').addClass( 'instCo');
  }, function() {
    $( this ).removeClass( "inst" );
    $('.ic').removeClass( 'instCo');
  }
);

$( ".resetInfoCon" ).hover(
  function() {
    $( this ).addClass( "inst" );
    $('.reset').addClass( 'instCo');
  }, function() {
    $( this ).removeClass( "inst" );
    $('.reset').removeClass( 'instCo');
  }
);

});
