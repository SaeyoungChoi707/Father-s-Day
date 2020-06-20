var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  
  game = new Game();
  
  game.start();
}


function draw(){
}
