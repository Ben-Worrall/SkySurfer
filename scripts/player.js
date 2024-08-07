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
        this.reqAnim

        //collisions
        this.collisionX;
        this.collisionY;
        this.collisionRadius;
    }
    draw(){
        
        //this.game.ctx.fillRect(this.x,this.y,this.width,this.height)
        this.game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);


         //draw collision
         this.game.ctx.beginPath();
         this.game.ctx.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2)
         this.game.ctx.stroke() 
    }
    update(){
        this.y += this.speedY
        //collision
        this.collisionY = this.y + this.height * 0.5;
        this.collisionX = this.x + this.width * 0.5;



        if(!this.isTouchingGround()){
            this.speedY += this.game.gravity
            //console.log('up in the air')
        }

        //ground
        if (this.isTouchingGround()){
            this.y = document.getElementById('WorldCollision').getBoundingClientRect().top - this.height
            //console.log('on the ground')

            this.Surfing()
            return
        }
    }
    resize(){
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio
        this.y = this.game.height * 0.5 - this.height * 0.5
        this.x = document.getElementById('WorldCollision').getBoundingClientRect().width/2 + this.width*1.85
        this.speedY = -2 * this.game.ratio


        //collisins
        this.collisionRadius = this.width * 0.5
    }
    isTouchingGround(){
    
      return this.y >= document.getElementById('WorldCollision').getBoundingClientRect().top - this.height
    }
    isTouchingRoof(){
        return this.y <= 0;
    }
    fly(){
        
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
          this.speedY = -1 * this.game.ratio
           //console.log('surfing')
            this.img.src = SurfingImageArray[0]
        
        return
         
        
         
    }
}



