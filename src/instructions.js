$(document).ready(function(){

  if(localStorage.getItem('switch') == 'on' || !localStorage.getItem('switch')){
    $('.instTog').text('Instructions on');
  } else if (localStorage.getItem('switch') == 'off'){
    $('.instTog').text('Instructions off');
  }

  if (localStorage.getItem('switch') == 'off'){
    $('.info').hide();
  }

  function toggleInst(){
    if (localStorage.getItem('switch') == 'on'){
      $('.instTog').text('Instructions off');
      $('.info').hide();
      localStorage.setItem('switch', 'off');
    } else if (localStorage.getItem('switch') == 'off'){
      $('.instTog').text('Instructions on');
      localStorage.setItem('switch', 'on');
      $('.info').show();
    }
  }

  $('.instTog').click(toggleInst);


  function hideInstructions(){
    $('.info').hide();
    $('.start').hide();
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
