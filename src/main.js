$(document).ready(function(){
  $('.screen').html(egg);
  $('.status').text('Egg');

  let warmth = 10;
  let hatch = 2;
  let hunger = 0;
  let thirst = 0;
  let eggPoke = 0;
  let wT = setInterval(warmthTimer,1000);
  let hT;
  let tT;

  function warmthTimer(){
    warmth--;
    if (hatch === 3){
      $('.one').off();
      $('.screen').off();
      clearInterval(wT);
      $('.status').text('Eggs Hatching')
      setTimeout(function(){ $('.screen').html(eggCrack); }, 1000);
      setTimeout(function(){ $('.screen').html(crackedEgg); }, 2500);
      setTimeout(function(){ $('.screen').html(baby); }, 4000);
      setTimeout(function(){ hT = setInterval(hungerTimer, 1000); }, 4000);
      setTimeout(function(){ tT = setInterval(thirstTimer, 1000); }, 4000);
    }
    if (warmth === 5){
      $('.status').text('Cold egg');
      $('.ic').css('background-color', $('.one').css('background-color'));
      $('.screen').html(coldEgg);
    }
    if (warmth === 0){
      clearInterval(wT);
      $('.screen').off();
      $('.status').text('Frozen Dead Egg');
      $('.screen').html(frozenSolid);
    }
  }

      function resetWarmth(){
        if (warmth > 5){
          clearInterval(wT);
          $('.status').text('Fried Egg');
          $('.screen').html(friedEgg);
        }
        if (warmth < 6 && hatch < 3){
          $('.status').text('Warm egg');
          $('.ic').css('background-color', 'white');
          $('.screen').html(egg);
          warmth = 10;
          hatch++;
        }
      }

function hungerTimer(){
  $('.two').click(resetHunger)
  hunger++;
  if (hunger === 6 && $('.status').text() === 'Parched'){
    $('.status').text('Parched & Famished');
  } else if (hunger === 6){
    $('.status').text('Famished')
  }
  if (hunger === 10){
    clearInterval(hT);
    clearInterval(tT);
    $('.one').off();
    $('.two').off();
    $('.three').off();
    $('.status').text('Starved')
    $('.screen').html(deadBones);
  }
}

      function resetHunger(){
        if (hunger > 4){
          hunger = 0;
          $('.screen').html(eatBaby);
          setTimeout(function(){ $('.screen').html(baby); },1000);
        }
        if ($('.status').text() === 'Parched & Famished' || $('.status').text() === $('.status').text() === 'Famished & Parched'){
          $('.status').text('Parched');
          $('.screen').text(eatBaby);
        } else if ($('.status').text() === 'Famished'){
          $('.status').text('Yum');
        }
      }

function thirstTimer(){
  console.log(thirst)
  $('.three').click(resetThirst)
  thirst++;
  if (thirst === 3 && $('.status').text() === 'Famished'){
    $('.status').text('Famished & Parched');
  } else if (thirst === 3) {
    $('.status').text('Parched')
  }

  if (thirst === 5){
    clearInterval(tT);
    clearInterval(hT);
    $('.one').off();
    $('.two').off();
    $('.three').off();
    $('.status').text('VERDURSTEN');
    $('.screen').html(deadBones);
  }
}

    function resetThirst(){
      if (thirst < 6){
        thirst = 0;
        $('.screen').html(babyDrink);
        setTimeout(function(){ $('.screen').html(baby); },1000);
        if ($('.status').text() === 'Parched & Famished' || $('.status').text() === 'Famished & Parched'){
          $('.status').text('Famished');
        } else if ($('.status').text() === 'Parched'){
          $('.status').text('Quenched');
        }
      }
    }

function pokeEgg(){
  $('.status').text('Dont poke egg');
  eggPoke++;
  if (eggPoke === 3){
    clearInterval(wT);
    $('.one').off();
    $('.screen').off();
    $('.status').text('You broke it');
    $('.screen').html(eggCrack);
  }
}




$('.one').click(function(){
  if (warmth !== 0){
      resetWarmth();
  }
});

$('.two').click(function(){
});

$('.three').click(function(){
});

$('.reset').click(function(){
  location.reload();
});

$('.screen').click(function(){
  pokeEgg();
})


})
