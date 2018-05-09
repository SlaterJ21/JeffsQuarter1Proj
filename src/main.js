class Game {
  constructor() {
    this.state = 0;
    this.warmth = 0;
    this.growth = 0;
    this.hatch = 0;
    this.hunger = 0;
    this.thirst = 0;
    this.urgency = 0;
    this.eggPoke = 0;
    this.imgCount = 0;
    this.imgArray = [];

    this.wT = function(){
      this.warmth++;
      if (this.hatch === 3){
        this.imgArray.push(0);
        this.imgArray.push(2);
        this.imgArray.push(3);
        this.imgArray.push(5);
        this.state = 1;
      }
      if (this.warmth === 6){
        this.imgArray.push(4);
      }
      if (this.warmth === 10){
        this.imgArray.push(6);
        this.state = 10;
      }
    }

    this.hT = function(){
      this.hunger++;
      if (this.hunger === 7 && $('.status').text() === 'Thirsty'){
        $('.status').text('Thirsty & Hungry');
      } else if (this.hunger === 7){
        $('.ic').css('background-color', $('.two').css('background-color'));
        $('.status').text('Hungry');
      }
      if (this.hunger === 14){
        this.state = 2;
      }
    };

    this.tT = function(){
      this.thirst++;
      if (this.thirst === 10 && $('.status').text() === 'Hungry'){
        $('.status').text('Hungry & Thirsty');
      } else if (this.thirst === 10) {
        $('.ic').css('background-color', $('.three').css('background-color'));
        $('.status').text('Thirsty')
      }
      if (this.thirst === 15){
        this.state = 2;
      }
    };
  }

}


$(document).ready(function(){
  let game = new Game();
  let wait = 0;

  $('.screen').html(egg);

$('.ic').css('background-color', '#ffe7e7')


  function startGame(){
    setInterval(gameState, 1000);
  }

  $('.start').click(startGame);

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
        $('.ic').css('background-color', '#ffe7e7');
        if (game.hatch === 0){
          $('.status').text('Say hello to egg');
        } else if (game.hatch === 1){
           $('.status').text('Egg is toasty');
          } else if (game.hatch === 2){
          $('.status').text('Nice and warm');
            } else if (game.hatch === 3){
            $('.status').text('Thats the spot');
            }
      } else if (game.imgCount === 1){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.status').text('You fried Egg');
        $('.screen').html(friedEgg);
      } else if (game.imgCount === 2){
        if (game.eggPoke > 2){
          $('.ic').css('background-color', $('.reset').css('background-color'));
          $('.status').text('You broke it');
          game.state = 10;
        }
        if (game.imgArray[1] === 5){
          $('.ic').css('background-color', '#ffe7e7');
          $('.status').text('Eggs Hatching');
        }
        $('.screen').html(eggCrack);
      } else if (game.imgCount === 3){
        $('.screen').html(crackedEgg);
      }  else if (game.imgCount === 4){
        $('.status').text('Egg is cold!!!');
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
        $('.ic').css('background-color', $('.reset').css('background-color'));
        if (this.hunger === 14){
          $('.status').text('Starved');
          this.state = 2;
        }
        if (this.thirst === 15){
          $('.status').text('Died of Thirst');
        }
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
    if (game.warmth < 6){
      game.imgArray.push(1);
      game.state = 10;
    }
    if (game.warmth > 5 && game.hatch < 3){
      game.imgArray.push(0);
      game.warmth = 0;
      game.hatch++;
    }
    if (game.hatch === 3){
        $('.one').off();
    }
  }

  function resetHunger(){
    if (game.growth === 4){
      game.state = 3;
    }
    if (game.hunger > 6){
      game.hunger = 0;
      game.growth++;
      game.urgency++;
      game.imgArray.push(7);
      game.imgArray.push(5);
    }
  }

  function resetThirst(){
    if (game.thirst > 9){
      game.thirst = 0;
      game.urgency++;
      game.imgArray.push(8);
      game.imgArray.push(5);
    }
  }

  function resetUrgency(){
    if (game.urgency > 2){
      game.urgency = 0;
      game.imgArray.push(11);
      game.imgArray.push(11);
      game.imgArray.push(5);
    }
  }

  function pokeEgg(){
    $('.status').text('Dont poke egg');
    game.eggPoke++;
    if (game.eggPoke === 3){
      game.imgArray.push(2);
      game.state = 10;
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
