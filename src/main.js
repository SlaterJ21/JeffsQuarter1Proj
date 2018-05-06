$(document).ready(function(){
  $('.screen').html(egg)

  let warmth = 10;
  let hatch = 0;
  let hunger = 0;
  let thirst = 0;
  let wT = setInterval(warmthTimer,1000)
  let hT;
  let tT;




function eggAnimate() {
  $('.screen').html(eggCrack)
}

function eggAnimate1() {
  $('.screen').html(crackedEgg)
}

function eggAnimate2() {
  $('.screen').html(baby)
}

  function warmthTimer(){
    warmth--;
    if (hatch === 3){
      $('.one').off();
      clearInterval(wT);
      setTimeout(function(){ eggAnimate(); }, 1000);
      setTimeout(function(){ eggAnimate1(); }, 2500);
      setTimeout(function(){ eggAnimate2(); }, 4000);
      setTimeout(function(){ hT = setInterval(hungerTimer, 1000); }, 4000);
      setTimeout(function(){ hT = setInterval(thirstTimer, 1000); }, 4000);
    }
    if (warmth < 6){
      $('.screen').html(coldEgg)
    }
    if (warmth === 0){
      $('.screen').text('dead');
      clearInterval(wT);
    }
  }

function resetWarmth(){

  if (warmth > 5){
    clearInterval(wT)
    $('.screen').html(friedEgg)
  }
  if (warmth < 6 && hatch < 3){
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




$('.one').click(function(){
  if (warmth !== 0){
      resetWarmth();
  }
});
$('.two').click(function(){
  resetHunger();
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
