class GroundObstacle{
    constructor(game, x){
        this.game = game;
        this.spriteWidth = 150;
        this.spriteHeight = 150;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.xCord = x;
        this.yCord = this.game.height  - ( this.scaledHeight *3)


        //collisions
        this.collisionX;
        this.collisionY;
        this.collisionRadius = this.scaledWidth * 0.5;


        this.img = new Image
        this.img.src = "./assets/obstacles/BottomLayer/asteroid 1.png"
        
    }
    update(){
       
        this.xCord -= this.game.GroundObspeed

        //collisions
        this.collisionX = this.xCord + this.scaledWidth * 0.5;
        this.collisionY = this.yCord + this.scaledHeight * 0.5;


        //check for collision
        if(this.game.CheckCollision(this, this.game.player))
            {
                this.game.Running = false
                console.log('collided with ground level')
                
            }
    }
    draw(){
        
        this.game.ctx.drawImage(this.img,this.xCord, this.yCord, this.scaledWidth, this.scaledHeight)


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

