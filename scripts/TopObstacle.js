class TopObstacle{
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 175;
        this.spriteHeight = 175;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.xCord = x;
        this.yCord = 0 + (this.scaledHeight)/4

        //collisions
        this.collisionX;
        this.collisionY;
        this.collisionRadius = this.scaledWidth * 0.5;
    }
    update(){
       
        this.xCord += this.game.TopObspeed
        
        
        //collisions
        this.collisionX = this.xCord + this.scaledWidth * 0.5;
        this.collisionY = this.yCord + this.scaledHeight * 0.5;


        //check for collision
        if(this.game.CheckCollision(this, this.game.player))
        {
            this.game.Running = false
            console.log('collided with top level')
            
        }
        
    }
    draw(){
        
        this.game.ctx.fillRect(this.xCord, this.yCord, this.scaledWidth, this.scaledHeight)


        //draw collision
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2)
        this.game.ctx.stroke() 



    }
    resize(){
        this.scaledHeight = this.spriteHeight * this.game.ratio
        this.scaledWidth = this.spriteWidth * this.game.ratio

    }
}