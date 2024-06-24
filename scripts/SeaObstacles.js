class SeaObstacle {
    constructor(game, x){
        this.game = game
        this.spriteWidth = 150
        this.spriteHeight = 150
        this.scaledWidth = this.spriteWidth * this.game.ratio *0.01
        this.scaledHeight = this.spriteHeight * this.game.ratio *0.01
        this.x = x;
        this.y = this.game.height * 0.8;

    }
    update(){
        this.x -= this.game.speed + 0.5

    }
    draw(){
        this.game.ctx.fillRect( this.x, this.y, this.scaledWidth, this.scaledHeight)
     
    }
    resize(){
        this.scaledWidth = this.spriteWidth * this.game.ratio
        this.scaledHeight = this.spriteHeight * this.game.ratio
    }

    
}