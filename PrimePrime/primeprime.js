//main functions
function isOneorPrime(num) {
  var sqrtnum=Math.ceil(Math.sqrt(num));
  var prime = true;
  for(var i=2; i<sqrtnum; i++) {
      if(num % i == 0) {prime = false;break;}
  }
  return prime;
}

function gcd(a,b){
 if (b == 0){return a}
 else{return gcd(b, a % b)}
}

function GenerateNotPrimeGreaterOneLowerThan(limit) {
  let isOk = false;
  let number = 1;
  while (!isOk) {
    number = Math.ceil(Math.random()*limit);
    isOk = !isOneorPrime(number);
  }
  return number;
}

//Player

class Player {
  constructor(name, behaviorFunction){
    this.behaviorFunction = behaviorFunction;
    this.name = name;
    this.deck = [];
  }

  drawCard(drawingFunction){
    this.deck.push(drawingFunction());
  }

  showDeck(){
    console.log(this.deck);
  }

  playCard(playFunction){
    let playableCards = [];
    for (var i = 0; i < this.deck.length; i++) {
       if(playFunction(this.deck[i])){
         playableCards.push(this.deck[i]);
       }
    }
    let chosenCard = this.behaviorFunction(playableCards);
    let chosenCardIndex = this.deck.findIndex((c) => {return c == chosenCard});
    if(chosenCardIndex != -1){
      this.deck.splice(chosenCardIndex,1);
    }
    return chosenCard;
  }

  speak(line){
    console.log(line);
  }
}
//behaviorFunctions to choose from:

function randomFunction(cardArray){
  if(cardArray == []){return undefined};
  return cardArray[Math.floor(Math.random()*cardArray.length)];
}

function lifo(cardArray){
  if(cardArray == []){return undefined};
  return cardArray[0];
}

function highestNumberStrategy(cardArray){
  if(cardArray == []){return undefined};
  return Math.max.apply(Math, cardArray);
}

function lowestNumberStrategy(cardArray){
  if(cardArray == []){return undefined};
  return Math.min(...cardArray);
}

function playerFunction(cardArray){
  let playersChoice = 1;
  console.log(cardArray);
  while(!cardArray.includes(playersChoice)){
  }
  return playersChoice;
}


//Game

class PrimePrime {
  constructor(startingStateFunction, playerGroup, drawingFunction, playFunction, stopFunction) {
    //gibt an wann das Spiel starten kann;
    this.startingStateFunction = startingStateFunction;
    //Array voller Spieler;
    this.playerGroup = playerGroup;
    //Ziehfunktion gibt Karte zurück;
    this.drawingFunction = drawingFunction;
    //gibt an wann das Spiel gestoppt werden soll
    this.stopFunction = stopFunction;
  }

  prepareGame(){
    //console.log("preparing Players");
    for (var i = 0; i < this.playerGroup.length; i++) {
      let player = this.playerGroup[i];
      //console.log("preparing Player:", player.name);
      while(!this.startingStateFunction(player)){
        player.drawCard(this.drawingFunction);
      }
      //player.showDeck();
    }
    //console.log("preparing Game");
    this.stack = [this.drawingFunction()];
    this.scoreboard = [];
    this.round = 0;
    //console.log("preparing finished, let's play:");
  }

  playGame(){
    this.prepareGame();

    let oldTopCard = this.stack.pop();
    let newTopCard;
    this.stack.push(oldTopCard);
    //console.log("Start:",oldTopCard);

    while (this.playerGroup.length > 0) {
      this.round = this.round+1;
      for (var i = 0; i < this.playerGroup.length; i++) {
        let player = this.playerGroup[i];
        newTopCard = player.playCard((a) => {return gcd(oldTopCard,a) > 1});
        if(newTopCard == undefined){
          player.drawCard(this.drawingFunction);
          //console.log(player.name, ":drew card, top card is: ", oldTopCard)
        }else{
          //console.log(player.name, ": ",oldTopCard, "=>", newTopCard);
          oldTopCard = newTopCard;
          this.stack.push(newTopCard);
        }
        if(player.deck.length == 0){
          this.makeScoreboardEntry(i);
        }
      }
    }

    return this.showGameResults();
  }

  makeScoreboardEntry(playerNumber){
    this.scoreboard.push({player: this.playerGroup[playerNumber], score: this.round});
    this.playerGroup.splice(playerNumber, 1);
  }

  showGameResults(){
    for (var i = 0; i < this.scoreboard.length; i++) {
      //console.log( i+1 ,". Platz: ", this.scoreboard[i].player.name, "Runde: ", this.scoreboard[i].score);
    }
    //this.scoreboard.push(this.stack);
    return this.scoreboard;
  }
}

//init Game
for (var i = 0; i < 100; i++) {
  let Felix = new Player("Felix", playerFunction);
  let William = new Player("William", randomFunction);
  let Raphael = new Player("Raphael", randomFunction);
  let Isabel = new Player("Isabel", randomFunction);

  let primePrime = new PrimePrime(
    (player) => {return player.deck.length == 10},           //startingStateFunction
    [Felix, William, Raphael, Isabel],                          //playerGroup
    () => {return GenerateNotPrimeGreaterOneLowerThan(1000)},//drawing Function
    (number) => {return number == 0}                         //stopFunction
  );
  console.log(primePrime.playGame());
}
