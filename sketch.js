var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
var distance = 0;

var car1, car2, car3, car4;
var cars;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  //if gamestate is equal to 4 so game will update by 1 
  if(playerCount === 4){
    game.update(1);
  }
  //if gamestate is equal to 1 so everything will be cleared and game will be set to play
  if(gameState === 1){
    clear();
    game.play();
  }

  
}
