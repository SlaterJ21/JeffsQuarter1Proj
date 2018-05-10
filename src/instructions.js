$(document).ready(function(){

  $(document).bind('keypress', function(e){
    console.log(e.keyCode)
    if (e.keyCode == 105){
      toggleInst();
    }
    if (e.keyCode == 106){
      $('.one').click()
    }
    if (e.keyCode == 107){
      $('.two').click()
    }
    if (e.keyCode == 108){
      $('.three').click()
    }
    if (e.keyCode == 114){
      $('.reset').click()
    }
    if (e.keyCode == 115){
      $('.start').click()
    }
  })

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
