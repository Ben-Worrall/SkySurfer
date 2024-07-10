class GroundObstacle{
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 120;
        this.spriteHeight = 120;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.xCord = x;
        this.yCord = (555 * this.game.ratio) + this.scaledHeight
    }
    update(){
       
        this.xCord -= this.game.GroundObspeed
    }
    draw(){
        
        this.game.ctx.fillRect(this.xCord, this.yCord, this.scaledWidth, this.scaledHeight)

    }
    resize(){
        this.scaledHeight = this.spriteHeight * this.game.ratio
        this.scaledWidth = this.spriteWidth * this.game.ratio

    }
}

