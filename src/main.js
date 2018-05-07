$(document).ready(function(){
  $('.screen').html(egg);
  $('.status').text('Egg');

  let game = {
    warmth: 10,
    growth: 3,
    hatch: 2,
    hunger: 0,
    thirst: 0,
    eggPoke: 0,
    wT: setInterval(warmthTimer,1000),
    hT: null,
    tT: null
  }

  function warmthTimer(){
    game.warmth--;
    if (game.hatch === 3){
      $('.one').off();
      $('.screen').off();
      clearInterval(game.wT);
      $('.status').text('Eggs Hatching')
      setTimeout(function(){ $('.screen').html(eggCrack); }, 750);
      setTimeout(function(){ $('.screen').html(crackedEgg); }, 1500);
      setTimeout(function(){ $('.screen').html(baby); }, 2250);
      setTimeout(function(){ game.hT = setInterval(hungerTimer, 1000); }, 3000);
      setTimeout(function(){ game.tT = setInterval(thirstTimer, 1000); }, 3000);
    }
    if (game.warmth === 5){
      $('.status').text('Cold egg');
      $('.ic').css('background-color', $('.one').css('background-color'));
      $('.screen').html(coldEgg);
    }
    if (game.warmth === 0){
      clearInterval(game.wT);
      $('.screen').off();
      $('.ic').css('background-color', $('.reset').css('background-color'));
      $('.status').text('Frozen Dead Egg');
      $('.screen').html(frozenSolid);
    }
  }

      function resetWarmth(){
        if (game.warmth > 5){
          clearInterval(game.wT);
          $('.ic').css('background-color', $('.reset').css('background-color'));
          $('.status').text('Fried Egg');
          $('.screen').html(friedEgg);
        }
        if (game.warmth < 6 && game.hatch < 3){
          $('.status').text('Warm egg');
          $('.ic').css('background-color', 'white');
          $('.screen').html(egg);
          game.warmth = 10;
          game.hatch++;
        }
      }

function hungerTimer(){
  $('.two').click(resetHunger)
  game.hunger++;
  if (game.hunger === 6 && $('.status').text() === 'Thirsty'){
    $('.status').text('Thirsty & Hungry');
  } else if (game.hunger === 6){
    $('.ic').css('background-color', $('.two').css('background-color'));
    $('.status').text('Hungry')
  }
  if (game.hunger === 10){
    clearInterval(game.hT);
    clearInterval(game.tT);
    $('.one').off();
    $('.two').off();
    $('.three').off();
    $('.ic').css('background-color', $('.reset').css('background-color'));
    $('.status').text('Starved')
    $('.screen').html(deadBones);
  }
}

      function resetHunger(){
        if (game.growth === 4){
          clearInterval(game.tT);
          clearInterval(game.hT);
          $('.one').off();
          $('.two').off();
          $('.three').off();
          $('.ic').css('background-color', $('.reset').css('background-color'));
          $('.status').text('You Win');
          $('.screen').html(grown);
        }
        if (game.hunger > 4 && game.growth !== 4){
          game.hunger = 0;
          game.growth++;
          $('.screen').html(eatBaby);
          if (game.growth !== 4){
            setTimeout(function(){ $('.screen').html(baby); },1000);
          }
        }
        if ($('.status').text() === 'Thirsty & Hungry' || $('.status').text() === 'Hungry & Thirsty'){
          $('.status').text('Thirsty');
          $('.screen').html(eatBaby);
        } else if ($('.status').text() === 'Hungry'){
          $('.status').text('Yum');
          $('.ic').css('background-color', 'white');
        }
      }

function thirstTimer(){
  $('.three').click(resetThirst)
  game.thirst++;
  if (game.thirst === 8 && $('.status').text() === 'Hungry'){
    $('.status').text('Hungry & Thirsty');
  } else if (game.thirst === 8) {
    $('.ic').css('background-color', $('.three').css('background-color'));
    $('.status').text('Thirsty')
  }

  if (game.thirst === 13){
    clearInterval(game.tT);
    clearInterval(game.hT);
    $('.one').off();
    $('.two').off();
    $('.three').off();
    $('.ic').css('background-color', $('.reset').css('background-color'));
    $('.status').text('Died of Thirst');
    $('.screen').html(deadBones);
  }
}

    function resetThirst(){
      if (game.thirst > 8){
        game.thirst = 0;
        $('.screen').html(babyDrink);
        setTimeout(function(){ $('.screen').html(baby); },1000);
        if ($('.status').text() === 'Thirsty & Hungry' || $('.status').text() === 'Hungry & Thirsty'){
          $('.status').text('Hungry');
        } else if ($('.status').text() === 'Thirsty'){
          $('.status').text('Quenched');
          $('.ic').css('background-color', 'white');
        }
      }
    }

function pokeEgg(){
  $('.status').text('Dont poke egg');
  game.eggPoke++;
  if (game.eggPoke === 3){
    clearInterval(game.wT);
    $('.one').off();
    $('.screen').off();
    $('.ic').css('background-color', $('.reset').css('background-color'));
    $('.status').text('You broke it');
    $('.screen').html(eggCrack);
  }
}




$('.one').click(function(){
  if (game.warmth !== 0){
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
