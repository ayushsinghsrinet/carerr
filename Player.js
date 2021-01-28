class Player{
    constructor(){
      this.index=0
      this.distance=0
      this.name=null  
    }
    getCount(){
        var playerCountref=database.ref('playerCount')
        playerCountref.on("value",(data)=>{
            playerCount=data.val()
        });
     }
    updateCount(count){
           database.ref('/').update({
           playerCount:count
           });
      }
     
      update(){
          // unable to understand this part 
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        // mam can you tell me once again about .on 
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }

}