class Form{
    constructor(){
        // creating input,buuton ,greeting 
this.input=createInput("name")
this.button=createButton("play")
this.greeting=createElement("h2")
    }
    hide(){
        
     this.greeting.hide()
     this.button.hide()
     this.input.hide()
    }
    display(){
        // creatting title and giving its positions 
        var title=createElement('h2')
        title.html("car racing game")
        title.position(displayWidth/2-100,30)
        
   // giving positions to input andout put box 
        this.input.position(displayWidth/2+400,100)
        this.button.position(displayWidth/2+460,120)
        
   this.button.mousePressed(()=>{
   this.input.hide()
   this.button.hide()
   //confusion in player .name
   player.name=this.input.value();
   playerCount+=1
   player.index=playerCount;
   player.update()
   player.updateCount(playerCount)
   this.greeting.html("hello " + player.name)
   this.greeting.position(100,100)
   })
    }
}