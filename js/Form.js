class Form {
  constructor() {

    //these are the properties
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement("h2");
    
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
    
    this.input.position(displayWidth/2-60,displayHeight/2-80);
    this.button.position(displayWidth/2+25,displayHeight/2);

     this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();
     //the value of name of the player will be registered in player.name
     player.name = this.input.value();
     //the playerCount will be increased everytime the new player comes
     playerCount = playerCount + 1;
     //similarly player will also increase so index and coutn both are equal
     player.index = playerCount;
     //we have to also update the player 
     player.update();
     //also we have to update the playercount
     player.updateCount(playerCount);

     //after button is pressed the name with hello will be displayed
     this.greeting.html(" Hello " + player.name);
     this.greeting.position(displayWidth/2-80,displayHeight/4);
    });

  }
}
