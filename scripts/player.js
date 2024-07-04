class Player{
    constructor(game){
        this.game =  game;
        this.x = 0;
        this.y
        this.spriteWidth = 200
        this.spriteHeight = 200
        this.width 
        this.height
        this.speedY
    }
    draw(){
        
        this.game.ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    update(){
        this.y += this.speedY
        if(!this.isTouchingGround()){
            this.speedY += this.game.gravity
        }

        //ground
        if (this.isTouchingGround()){
            this.y = document.getElementById('WorldCollision').getBoundingClientRect().top - this.height
        }
    }
    resize(){
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio
        this.y = this.game.height * 0.5 - this.height * 0.5
        this.x = document.getElementById('WorldCollision').getBoundingClientRect().left*2 + this.width/2
        this.speedY = -2 * this.game.ratio
    }
    isTouchingGround(){
      return this.y >= document.getElementById('WorldCollision').getBoundingClientRect().top - this.height
    }
}