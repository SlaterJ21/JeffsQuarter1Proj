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
    $( this ).css( 'background-color', $('.three').css('background-color') );
  }, function() {
    $( this ).css( 'background-color', 'rgb(255, 231, 231)' );
  }
);

$( ".eggInfoCon" ).hover(
  function() {
    $( this ).css( 'background-color', $('.one').css('background-color') );
    $('.screen').addClass( 'instCo');
  }, function() {
    $( this ).css( 'background-color', 'rgb(255, 231, 231)' );
    $('.screen').removeClass( 'instCo');
  }
);

$( ".statusInfoCon" ).hover(
  function() {
    $( this ).css( 'background-color', $('.status').css('background-color') );
    $('.status').addClass( 'instCo');
  }, function() {
    $( this ).css( 'background-color', 'rgb(255, 231, 231)' );
    $('.status').removeClass( 'instCo');
  }
);

// let buttonArray = [$( this ).css( 'background-color', $('.one').css('background-color') ),$( this ).css( 'background-color', $('.two').css('background-color') ),$( this ).css( 'background-color', $('.three').css('background-color') )]
// console.log(buttonArray[Math.floor(Math.random() * 3)]);

$( ".buttonInfoCon" ).hover(
  function() {
    $( this ).css( 'background-color', $('.two').css('background-color')  );
    $('.one').addClass( 'instCo');
    $('.two').addClass( 'instCo');
    $('.three').addClass( 'instCo');
  }, function() {
    $( this ).css( 'background-color', 'rgb(255, 231, 231)' );
    $('.one').removeClass( 'instCo');
    $('.two').removeClass( 'instCo');
    $('.three').removeClass( 'instCo');
  }
);

$( ".indicInfoCon" ).hover(
  function() {
    $( this ).css( 'background-color', $('.three').css('background-color') );
    $('.ic').addClass( 'instCo');
  }, function() {
    $( this ).css( 'background-color', 'rgb(255, 231, 231)' );
    $('.ic').removeClass( 'instCo');
  }
);

$( ".resetInfoCon" ).hover(
  function() {
    $( this ).css( 'background-color', $('.reset').css('background-color') );
    $('.reset').addClass( 'instCo');
  }, function() {
    $( this ).css( 'background-color', 'rgb(255, 231, 231)' );
    $('.reset').removeClass( 'instCo');
  }
);

});
