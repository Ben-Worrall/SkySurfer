class Player{
    constructor(game){
        this.game =  game;
        this.x = 0;
        this.y
        this.spriteWidth = 125
        this.spriteHeight = 125
        this.width 
        this.height
        this.speedY
        this.img = new Image()
        this.img.src = "./assets/players/Character 1/Character 1.png"
    }
    draw(){
        
        //this.game.ctx.fillRect(this.x,this.y,this.width,this.height)
        this.game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
    update(){
        this.y += this.speedY
        if(!this.isTouchingGround()){
            this.speedY += this.game.gravity
            //console.log('up in the air')
        }

        //ground
        if (this.isTouchingGround()){
            this.y = document.getElementById('WorldCollision').getBoundingClientRect().top - this.height
            //console.log('on the ground')
            this.Surfing()

        }
    }
    resize(){
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio
        this.y = this.game.height * 0.5 - this.height * 0.5
        this.x = document.getElementById('WorldCollision').getBoundingClientRect().width/2 + this.width*2
        this.speedY = -2 * this.game.ratio
    }
    isTouchingGround(){
        
      return this.y >= document.getElementById('WorldCollision').getBoundingClientRect().top - this.height
    }
    isTouchingRoof(){
        return this.y <= 0;
    }
    fly(){
        console.log('fly')
        if(!this.isTouchingRoof()){
            this.speedY = -3.5 * this.game.ratio
        }
        this.img.src = "./assets/players/Character 1/animations/boost/Boost C1.png"
        
    }
    Down(){
        this.img.src = "./assets/players/Character 1/animations/down/Down C1.png"
    }
    Surfing(){
        var SurfingImageArray = [

           "./assets/players/Character 1/animations/surfing/SurfingC11.png",
           "./assets/players/Character 1/animations/surfing/SurfingC12.png",
           "./assets/players/Character 1/animations/surfing/SurfingC13.png",
           "./assets/players/Character 1/animations/surfing/SurfingC14.png",
           "./assets/players/Character 1/animations/surfing/SurfingC15.png",
           "./assets/players/Character 1/animations/surfing/SurfingC16.png",
           "./assets/players/Character 1/animations/surfing/SurfingC17.png"

        ]
       
        
          //loop through images and and change while player is on the floot
          
            for(let i = 0; i < SurfingImageArray.length; i++){
                
                this.img.src = SurfingImageArray[i]
            }
          
        
         
        

    }
}