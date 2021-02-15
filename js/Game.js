class Game {
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      //.once it gives us data of playerCount in one go and it listens to only one
      var playerCountRef = await database.ref('playerCount').once("value");
      //checks whether the playerCountRef exists or not
      if(playerCountRef.exists()){
        //if it exists so the value of playerCount will come into playerCountRef
        playerCount = playerCountRef.val();
        //then it will get count from it
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  car1 = createSprite(200,300,60,60);
  car2 = createSprite(400,300,60,60);
  car3 = createSprite(600,300,60,60);
  car4 = createSprite(800,300,60,60);

  cars = [car1,car2,car3,car4];

  play(){
    form.hide();
   // text(" Game Start! ", 120, 100);
    //we access it from class name
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      //var displayPos = 130;
      var index = 0;
      var x = 0;
      var y;

      //to check whether the players are in allPlayers
      for(var plr in allPlayers){
        index = index+1;
       /* if(plr === "player" + player.index){
          fill("red");
        }
        else{
          fill("black");
        }
        */
       x = x + 200;
       y = displayHeight - allPlayers[plr].distance;
       //if the value initially is 1 that means cars 1-1 = 0, so cars 0.x = x
       cars[index-1].x = x; 
       cars[index-1].y = y;

       if(index === player.index){
         cars[index-1].shapeColor = "red";
         camera.position.x = displayWidth/2;
         camera.position.y = cars[index-1].y;
       }
       

        //it will increase after every 20 positions
      //displayPos = displayPos + 20;
        //text(allPlayers[ plr ].name + " " + allPlayers[ plr ].distance, 120, displayPos);
      }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
     player.distance = player.distance + 50;
     player.update();
    }
    
    drawSprites();
  }
}
