class DiagonalRightObstacle{
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 80;
        this.spriteHeight = 80;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.xCord = x;
        this.yCord = (this.game.height)/4

        //collisions
        this.collisionX;
        this.collisionY;
        this.collisionRadius = this.scaledWidth * 0.5;

        this.img = new Image
        this.img.src = "./assets/obstacles/TopLayer/asteroid 1.png"
    }

    update(){
       
        this.xCord -= this.game.DiagonalRightObspeed
        
        
          
            //this.yCord -= this.game.DiagonalLeftObspeed
            this.collisionX = this.xCord + this.scaledWidth * 0.5;
            this.collisionY = this.yCord + this.scaledHeight * 0.5;


             //check for collision
        if(this.game.CheckCollision(this, this.game.player))
            {
                this.game.Running = false
                console.log('collided with middle level')
                
            }
        
        
    }
    draw(){
        
        this.game.ctx.drawImage(this.img,this.xCord, this.yCord, this.scaledWidth, this.scaledHeight)

    }
    resize(){
        this.scaledHeight = this.spriteHeight * this.game.ratio
        this.scaledWidth = this.spriteWidth * this.game.ratio

    }
}