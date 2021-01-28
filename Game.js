class Game {
    constructor(){

    }

    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
        gameState=data.val()
        })
    }
        update(state) {
        database.ref('/').update({
            gameState:state
        })
        }

      async start(){
        if(gameState===0){
        player=new Player
        //once means ?
        var playerCountRef=await database.ref('playerCount').once("value");
        //this if condition not able to understand
        if (playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount()
        }
            form=new  Form();
            form.display();
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(400,200)
        car4=createSprite(500,200)
        cars=[car1,car2,car3,car4]
       
      }
    play(){
        form.hide()
        textSize(30);
    text("Game Start", 120, 100)
    //unable to understand
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     var x=100
     var y=0

      for(var plr in allPlayers){
     var t=0
     t++;
        x=x+200
        y=displayHeight-allPlayers[plr].distance;
        cars[t-1].x=x
        cars[t-1].y=y
        if (plr === "player" + player.index){
          cars[t-1].shapeColor=red
        }
       // else
        //cars[index-1].shapeColor=black

       // display_position+=20;
        //textSize(15);
        // this part
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

      
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    }

        
    }
