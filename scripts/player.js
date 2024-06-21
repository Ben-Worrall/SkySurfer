class Player{
    constructor(game){
        this.game = game;
        this.x = 50;
        this.y
        this.width
        this.height
        //increase speed of gravity
        this.speedY 

        //sprite picture size
        this.spriteWidth = 200
        this.spriteHeight = 200

        //flying speed
        this.flySpeed
        
    }
       
    draw(){
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.y += this.speedY 
        //gravity
        if(!this.isTouchingBottom()){
            this.speedY += this.game.gravity 
        }

        //bottom boundary
        if(this.isTouchingBottom()){
            this.y = (this.game.height * 0.875) - this.height 
        }
    }

    //for scaling depnding on height
    resize(){
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio
        this.y = this.game.height * 0.5 - this.height * 0.5
        this.speedY = -2 * this.game.ratio
        this.flySpeed = 20 * this.game.ratio
    }
    isTouchingTop(){
        return this.y <= 0
    }
    isTouchingBottom(){
        return  this.y >= (this.game.height * 0.875) - this.height 
    }
    fly(){
        if(!this.isTouchingTop())[
            this.speedY = -this.flySpeed
        ]
        
    }

}