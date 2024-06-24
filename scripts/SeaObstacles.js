class SeaObstacle {
    constructor(game, x){
        this.game = game
        this.spriteWidth = 350
        this.spriteHeight = 250
        this.scaledWidth = this.spriteWidth * this.game.ratio *0.01
        this.scaledHeight = this.spriteHeight * this.game.ratio *0.01
        this.x = x;
        this.y = this.game.height * 0.76;

    }
    update(){
        //randomise how fast they move
        this.x -= this.game.speed +( (Math.random() * 0.1) + 1)
        //check if its off the screen
        if (this.isOffScreen()){
            this.markedForDeletion = true
            this.game.SeaObstacles = this.game.SeaObstacles.filter(SeaOb => !SeaOb.markedForDeletion);
            console.log(this.game.SeaObstacles.length)

            this.game.score++
        }
    }
    draw(){
        this.game.ctx.fillRect( this.x, this.y, this.scaledWidth, this.scaledHeight)
     
    }
    resize(){
        this.scaledWidth = this.spriteWidth * this.game.ratio
        this.scaledHeight = this.spriteHeight * this.game.ratio
    }
    isOffScreen(){
         return this.x < -this.scaledWidth
    }

    
}