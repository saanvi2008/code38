class Player {
  constructor(){

    this.index = null;
    this.distance = 0;
    this.name = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    //we have written "players/player" because we want a column in which player's index will be there :- player1, player2
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //static means we can it directly in a class
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    //=> is used to do changes
    playerInfoRef.on("value" , (data)=>{
      allPlayers = data.val();
    })
  }
}
