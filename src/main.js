class Game {
  constructor() {
    this.state = 0;
    this.warmth = 0;
    this.growth = 0;
    this.hatch = 0;
    this.hunger = 0;
    this.thirst = 0;
    this.total = 0;
    this.urgency = 2;
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
      if (this.warmth === 7){
        this.imgArray.push(4);
      }
      if (this.warmth === 13){
        this.imgArray.push(6);
        this.state = 10;
      }
    }

    this.hT = function(){
      this.hunger++;
       if (this.hunger === 8){
        $('.ic').css('background-color', $('.two').css('background-color'));
        $('.two').addClass('instCo');
      }
      if (this.hunger === 14){
        this.state = 2;
      }
    };

    this.tT = function(){
      this.thirst++;
      if (this.thirst === 6) {
        $('.ic').css('background-color', $('.three').css('background-color'));
        $('.three').addClass('instCo');
      }
      if (this.thirst === 11){
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

    if (game.total > 0){
      $('.pOne').css('background-color', '#8dd8a1');
    }
    if (game.total > 1){
      $('.pTwo').css('background-color', '#8dd8a1');
    }
    if (game.total > 2){
      $('.pThree').css('background-color', '#8dd8a1');
    }
    if (game.total > 3){
      $('.pFour').css('background-color', '#8dd8a1');
    }
    if (game.total > 4){
      $('.pFive').css('background-color', '#8dd8a1');
    }
    if (game.total > 5){
      $('.pSix').css('background-color', '#8dd8a1');
    }
    if (game.total > 6){
      $('.pSeven').css('background-color', '#8dd8a1');
    }


    if (game.state === 0){
      game.wT();
    } else if (game.state === 1){
      game.hT();
      game.tT();
      $('.one').click(resetUrgency);
      $('.two').click(resetHunger);
      $('.three').click(resetThirst);
    } else if (game.state === 2){
      game.imgArray.push(9);
      $('.one').off();
      $('.two').off();
      $('.three').off();
    } else if (game.state === 3){
      game.imgCount = 10;
    } else if (game.state === 10){
      $('.one').off();
      $('.two').off();
      $('.three').off();
    }
    if (game.urgency > 3){
      $('.one').addClass('instCo');
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
          $('.storyCon').text("It's important that you care for egg. Please keep Egg warm by pressing the purple button when prompted.");
        } else if (game.hatch === 1){
           $('.storyCon').text('Egg is now toasty thanks to your concerted efforts.');
          } else if (game.hatch === 2){
          $('.storyCon').text("Did you see the status bar go up. It's as if you\'re working toward a goal.");
            } else if (game.hatch === 3){
            $('.storyCon').text("Something's happening to Egg");
            }
      } else if (game.imgCount === 1){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.reset').addClass('instCo');
        $('.storyCon').text('You fried Egg. You really shouldn\'t press the buttons if I dont tell you to.');
        $('.screen').html(friedEgg);
      } else if (game.imgCount === 2){
        if (game.eggPoke > 2){
          $('.ic').css('background-color', $('.reset').css('background-color'));
          $('.reset').addClass('instCo');
          $('.storyCon').text('You broke it... I said don\'t poke the egg, you poked the egg.');
          game.state = 10;
        }
        if (game.imgArray[1] === 5){
          $('.ic').css('background-color', '#ffe7e7');
          $('.storyCon').text('Egads!@#% Eggs Hatching');
        }
        $('.screen').html(eggCrack);
      } else if (game.imgCount === 3){
        $('.screen').html(crackedEgg);
      }  else if (game.imgCount === 4){
        $('.ic').css('background-color', $('.one').css('background-color'));
        $('.one').addClass('instCo');
        $('.screen').html(coldEgg);
        if (game.hatch === 0){
          $('.storyCon').text("Oh no!!! Egg is getting cold. Please keep Egg warm by pressing the purple button.");
        } else if (game.hatch === 1){
           $('.storyCon').text('You may have won the battle but you have not won the WARmth...');
          } else if (game.hatch === 2){
            $('.storyCon').text('... any resonable person would have put a system in place to keep Egg warm.');
          }
      } else if (game.imgCount === 5){
        $('.screen').html(baby);
        $('.ic').css('background-color', '#ffe7e7');
        if (game.growth === 0){
          $('.storyCon').text("Baby gets hungry and thirsty... Figure it out.");
        } else if (game.growth === 1){
           $('.storyCon').text("Baby is dependent on you... Maybe you're rethinking your life choices?");
         } else if (game.growth === 2){
            $('.storyCon').text('Did you think that baby would do anything other than eat, drink and poo? No that\'s about it...');
          } else if (game.growth === 3){
             $('.storyCon').text('I think Baby is packing on those pounds');
           } else if (game.growth === 4){
              $('.storyCon').text('Something is happening to baby.');
            }
      } else if (game.imgCount === 6){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.reset').addClass('instCo');
        $('.storyCon').text('Check your municipal code regarding the "keeping of bodies", cause you\'ve got a Frozen Dead Egg');
        $('.screen').html(frozenSolid);
      } else if (game.imgCount === 7){
        $('.screen').html(eatBaby);
      } else if (game.imgCount === 8){
        $('.screen').html(babyDrink);
      } else if (game.imgCount === 9){
        $('.screen').html(deadBones);
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.reset').addClass('instCo');
        if (game.hunger === 14){
          $('.storyCon').text('Starved');
          game.state = 10;
        }
        if (game.thirst === 11){
          $('.storyCon').text('Died of Thirst')
          game.state = 10;
        }
      } else if (game.imgCount === 10){
        $('.ic').css('background-color', $('.reset').css('background-color'));
        $('.reset').addClass('instCo');
        $('.storyCon').text('You\'ve raised Egg from a... well egg to a uhh anyway thats it YOU WIN');
        $('.screen').html(grown);
      } else if (game.imgCount === 11){
        $('.screen').html(urgenP);
        $('.storyCon').text('AWW YEEAAAAHH');
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
      $('.one').removeClass('instCo');
      game.imgArray.push(0);
      game.warmth = 0;
      game.hatch++;
      game.total++;
    }
    if (game.hatch === 3){
      $('.one').removeClass('instCo');
      $('.one').off();
    }
  }

  function resetHunger(){
    if (game.growth === 4){
      game.state = 3;
    }
    if (game.hunger > 7){
      $('.two').removeClass('instCo');
      game.hunger = 0;
      game.growth++;
      game.total++;
      game.urgency++;
      game.imgArray.push(7);
      game.imgArray.push(5);
    }
  }

  function resetThirst(){
    if (game.thirst > 5){
      $('.three').removeClass('instCo');
      game.thirst = 0;
      game.urgency++;
      game.imgArray.push(8);
      game.imgArray.push(5);
    }
  }

  function resetUrgency(){
    if (game.urgency > 2){
      $('.one').removeClass('instCo');
      game.urgency = 0;
      game.imgArray.push(11);
      game.imgArray.push(5);
    }
  }

  function pokeEgg(){
    $('.storyCon').text('Dont poke egg');
    game.eggPoke++;
    if (game.eggPoke === 3){
      game.imgArray.push(2);
      game.state = 10;
    }
  }

  $('.one').click(function(){
    if (game.warmth !== 12){
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
