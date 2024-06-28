class SeaObstacle {
    constructor(game, x){
        this.game = game
        this.spriteWidth = 450
        this.spriteHeight = 350
        this.scaledWidth = this.spriteWidth * this.game.ratio 
        this.scaledHeight = this.spriteHeight * this.game.ratio
        this.x = x;
        this.y = this.game.height * 0.72;

        //for collisions
        this.collisionX
        this.collisionY
        this.collisionRadius = this.scaledWidth * 0.5

        


    }
    update(){
        //randomise how fast they move
        this.x -= this.game.speed +( (Math.random() * 0.1) + 1)
        
        //for colission (every update, draw near collision shape for object)
        this.collisionX = this.x + this.scaledWidth * 0.5
        this.collisionY = this.y + this.scaledHeight * 0.5


        //check if its off the screen
        if (this.isOffScreen()){
            this.markedForDeletion = true
            this.game.SeaObstacles = this.game.SeaObstacles.filter(SeaOb => !SeaOb.markedForDeletion);
            console.log(this.game.SeaObstacles.length)

            this.game.score++
        }


        //check collisino
        if (this.game.checkCollision(this,this.game.player)){
            this.game.gameOver = true
            this.game.player.collided = true
        }


    }
    draw(){
        this.game.ctx.fillRect( this.x, this.y, this.scaledWidth, this.scaledHeight)
     
        //for collision
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2)
        this.game.ctx.stroke()

    }
    resize(){
        this.scaledWidth = this.spriteWidth * this.game.ratio
        this.scaledHeight = this.spriteHeight * this.game.ratio
    }
    isOffScreen(){
         return this.x < -this.game.player.width
    }
    checkCollision(){
        //check collisino
        if (this.game.checkCollision(this,this.game.player)){
            this.game.gameOver = true
            this.game.player.collided = true
        }
    }

    
}