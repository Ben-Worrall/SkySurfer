class DiagonalLeftObstacle{
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 80;
        this.spriteHeight = 80;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.xCord = x;
        this.yCord = (this.game.height)/2
    }
    update(){
       
        this.xCord += this.game.DiagonalLeftObspeed
        
        
          
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