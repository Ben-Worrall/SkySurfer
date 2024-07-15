class DiagonalRightObstacle{
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 90;
        this.spriteHeight = 90;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.xCord = x;
        this.yCord = (this.game.height)/4
    }
    update(){
       
        this.xCord -= this.game.DiagonalRightObspeed
        
        
          
            //this.yCord -= this.game.DiagonalLeftObspeed
        
        
    }
    draw(){
        
        this.game.ctx.fillRect(this.xCord, this.yCord, this.scaledWidth, this.scaledHeight)

    }
    resize(){
        this.scaledHeight = this.spriteHeight * this.game.ratio
        this.scaledWidth = this.spriteWidth * this.game.ratio

    }
}