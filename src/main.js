$(document).ready(function(){
  $('.screen').html(egg)
  $('.status').text('Egg')

  let warmth = 10;
  let hatch = 0;
  let hunger = 0;
  let thirst = 0;
  let eggPoke = 0;
  let wT = setInterval(warmthTimer,1000)
  let hT;
  let tT;
//
// function eggAnimate() {
//   $('.screen').html(eggCrack)
//
// }
//
// function eggAnimate1() {
//   $('.screen').html(crackedEgg)
// }
//
// function eggAnimate2() {
//   $('.screen').html(baby)
// }

  function warmthTimer(){
    warmth--;
    if (hatch === 3){
      $('.one').off();
      $('.two').off();
      clearInterval(wT);
      setTimeout(function(){ $('.screen').html(eggCrack); }, 1000);
      setTimeout(function(){ $('.screen').html(crackedEgg); }, 2500);
      setTimeout(function(){ $('.screen').html(baby); }, 4000);
      setTimeout(function(){ hT = setInterval(hungerTimer, 1000); }, 4000);
      setTimeout(function(){ tT = setInterval(thirstTimer, 1000); }, 4000);
    }
    if (warmth === 5){
      $('.status').text('Cold egg')
      $('.ic').css('background-color', $('.one').css('background-color'))
      $('.screen').html(coldEgg)
    }
    if (warmth === 0){
      clearInterval(wT);
      $('.status').css('font-size', '1.5vw').text('Frozen Dead Egg')
      $('.screen').html(frozenSolid);
    }
  }

function resetWarmth(){
  if (warmth > 5){
    clearInterval(wT)
    $('.status').text('Fried Egg')
    $('.screen').html(friedEgg)
  }
  if (warmth < 6 && hatch < 3){
    $('.status').text('Warm egg')
    $('.ic').css('background-color', 'white');
    $('.screen').html(egg)
    warmth = 10;
    hatch++;
  }
}

function hungerTimer(){
  hunger++;
  console.log(hunger)
  if (hunger === 6){
  }
  if (hunger === 8){
    $('.screen').text('dead');
    clearInterval(hT);
    clearInterval(tT);
  }
}

function resetHunger(){
if (hunger > 2){
  hunger = 0;
}
}

function thirstTimer(){
  thirst++;
  console.log(thirst);
  if (thirst === 3){
    $('.screen').text('dead');
    clearInterval(tT);
    clearInterval(hT);
  }
}

function resetThirst(){
if (thirst < 6){
  thirst = 0;
}
}

function pokeEgg(){
  $('.status').text('Dont poke egg');
  eggPoke++;
  if (eggPoke === 3){
    clearInterval(wT);
    $('.one').off();
    $('.two').off();
    $('.status').text('... your fault');
    $('.screen').html(eggCrack);
  }
}




$('.one').click(function(){
  if (warmth !== 0){
      resetWarmth();
  }
});
$('.two').click(function(){
  pokeEgg();
});
$('.three').click(function(){
  resetThirst();
});
$('.reset').click(function(){
  location.reload();
});
// $('.two').click(alert(sound));
// $('.three').click(alert(sound));


})
