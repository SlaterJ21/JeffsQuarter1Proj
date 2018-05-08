class Game {
  constructor() {
    this.state = 0;
    this.warmth = 0;
    this.growth = 0;
    this.hatch = 2;
    this.hunger = 0;
    this.thirst = 0;
    this.urgency = 0;
    this.eggPoke = 0;
    this.imgCount = 0;
    this.imgArray = [];

    this.wT = function(){
      this.warmth++;
      if (this.hatch === 3){
        $('.one').off();
        this.imgArray.push(0);
        this.imgArray.push(2);
        this.imgArray.push(3);
        this.imgArray.push(5);
        this.state = 1;
      }
      if (this.warmth === 5){
        this.imgArray.push(4);
      }
      if (this.warmth === 10){
        this.imgArray.push(6);
        this.state = 2;
      }
    }

    this.hT = function(){
      this.hunger++;
      if (this.hunger === 4 && $('.status').text() === 'Thirsty'){
        $('.status').text('Thirsty & Hungry');
      } else if (this.hunger === 4){
        $('.ic').css('background-color', $('.two').css('background-color'));
        $('.status').text('Hungry')
      }
      if (this.hunger === 10){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.status').text('Starved');
        this.state = 2;
      }};

    this.tT = function(){
      this.thirst++;
      if (this.thirst === 8 && $('.status').text() === 'Hungry'){
        $('.status').text('Hungry & Thirsty');
      } else if (this.thirst === 8) {
        $('.ic').css('background-color', $('.three').css('background-color'));
        $('.status').text('Thirsty')
      }
      if (this.thirst === 13){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.status').text('Died of Thirst');
        this.state = 2;
      }};
  }

}


$(document).ready(function(){
  let game = new Game();
  let wait = 0;
  
  setInterval(gameState, 1000);

  function gameState(){
    if (game.state === 0){
      game.wT();
    } else if (game.state === 1){
      game.hT();
      game.tT();
      $('.one').click(resetUrgency);
      $('.two').click(resetHunger);
      $('.three').click(resetThirst);
    } else if (game.state === 2){
      game.imgCount = 9;
    } else if (game.state === 3){
      game.imgCount = 10;
    }

    if (game.imgArray[0] !== undefined){
      game.imgCount = game.imgArray.shift();
    }

    if (wait === 0){
      wait = 0;
      if (game.imgCount === 0){
        $('.screen').html(egg);
        $('.status').text('Egg');
      } else if (game.imgCount === 1){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.status').text('Fried Egg');
        $('.screen').html(friedEgg);
      } else if (game.imgCount === 2){
        console.log(game.imgArray[1])
        if (game.pokeEgg > 2){
          $('.ic').css('background-color', $('.reset').css('background-color'));
          $('.status').text('You broke it');
          game.state = 10;
        }
        if (game.imgArray[1] === 5){
          $('.status').text('Eggs Hatching');
        }
        $('.screen').html(eggCrack);
      } else if (game.imgCount === 3){
        $('.screen').html(crackedEgg);
      }  else if (game.imgCount === 4){
        $('.status').text('Cold egg');
        $('.ic').css('background-color', $('.one').css('background-color'));
        $('.screen').html(coldEgg);
      } else if (game.imgCount === 5){
        $('.screen').html(baby);
        $('.ic').css('background-color');
      } else if (game.imgCount === 6){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.status').text('Frozen Dead Egg');
        $('.screen').html(frozenSolid);
      } else if (game.imgCount === 7){
        $('.screen').html(eatBaby);
        if ($('.status').text() === 'Thirsty & Hungry' || $('.status').text() === 'Hungry & Thirsty'){
          $('.status').text('Thirsty');
        } else if ($('.status').text() === 'Hungry'){
          $('.status').text('Yum');
        }
      } else if (game.imgCount === 8){
        $('.screen').html(babyDrink);
        if ($('.status').text() === 'Thirsty & Hungry' || $('.status').text() === 'Hungry & Thirsty'){
          $('.status').text('Hungry');
        } else if ($('.status').text() === 'Thirsty'){
          $('.status').text('Quenched');
        }
      } else if (game.imgCount === 9){
        $('.screen').html(deadBones);
      } else if (game.imgCount === 10){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.status').text('You Win');
        $('.screen').html(grown);
      } else if (game.imgCount === 11){
        $('.screen').html(urgenP);
        $('.status').text('AWW YEEAAAAHH');
      }

    } else {
      wait--;
    }
  }

  function resetWarmth(){
    if (game.warmth < 5){
      game.imgArray.push(1);
      game.state = 10;
    }
    if (game.warmth > 4 && game.hatch < 3){
      $('.status').text('Warm egg');
      $('.ic').css('background-color', 'white');
      game.imgCount = 0;
      game.warmth = 0;
      game.hatch++;
    }
  }

  function resetHunger(){
    if (game.growth === 4){
      game.imgArray.push(10);
      game.state = 3;
    }
    if (game.hunger > 3){
      game.hunger = 0;
      game.growth++;
      game.urgency++;
      game.imgArray.push(7);
      game.imgArray.push(5);
    }
  }

  function resetThirst(){
    if (game.thirst > 8){
      game.thirst = 0;
      game.urgency++;
      game.imgArray.push(8);
      game.imgArray.push(5);
    }
  }

  function resetUrgency(){
    console.log(game.urgency)
    if (game.urgency > 2){
      game.urgency = 0;
      game.imgArray.push(11);
      game.imgArray.push(5);
    }
  }

  function pokeEgg(){
    $('.status').text('Dont poke egg');
    game.eggPoke++;
    if (game.eggPoke === 3){
      game.imgArray.push(game.imgCount = 2);
    }
  }


  $('.one').click(function(){
    if (game.warmth !== 10){
        resetWarmth();
      }
  });

  $('.screen').click(function(){
    if (game.state === 0){
      pokeEgg();
    }
  });

  $('.reset').click(function(){
    location.reload();
  });



})
