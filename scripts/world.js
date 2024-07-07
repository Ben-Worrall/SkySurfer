class World{
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y
        this.spriteWidth = 1500
        this.spriteHeight = 1500
        this.width 
        this.height
        this.angle = 0
        this.img = new Image()
        this.img.src = "./assets/background/World2.png"
        
        
        
        
    }
    
        
    
    draw(){
        
        
        //this.game.ctx.drawImage(img, 60 * this.game.ratio , 555 * this.game.ratio, this.spriteWidth, this.spriteWidth * this.game.ratio, this.spriteHeight * this.game.ratio)
        // save the current co-ordinate system 
        // before we screw with it
        var x = 60 * this.game.ratio
        var y = 555 * this.game.ratio
        var width = this.spriteWidth * this.game.ratio
        var height = this.spriteHeight * this.game.ratio
        this.game.ctx.save()
    
        //Convert degrees to radian 
        var rad = this.angle * Math.PI / 180;
    
        //Set the origin to the center of the image
        this.game.ctx.translate(x + width / 2, y + height / 2);
    
        //Rotate the canvas around the origin
        this.game.ctx.rotate(rad);
    
        //draw the image    
        this.game.ctx.drawImage(this.img,width / 2 * (-1),height / 2 * (-1),width,height);
    
        // Restore canvas state as saved from above
        this.game.ctx.restore();
        
        
        
            
           
        

        
    }
    update(){
        this.angle = this.angle + (0.1 * this.game.ratio)
    }
    resize(){
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio
        this.y = this.game.height * 0.5 - this.height * 0.5
        this.x = document.getElementById('WorldCollision').getBoundingClientRect().left*2 + this.width/2
        this.speedY = -2 * this.game.ratio
    }
    
}


