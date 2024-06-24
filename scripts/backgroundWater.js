class BackgroundWater {
    constructor(game){
        this.game = game;
        this.image = document.getElementById('BackgroundWaterDiv')
        this.width = 4000
        this.height = 2000
        this.scaledWidth;
        this.scaledHeight;
        this.x



        //cycle through water scenes array

    
    
  
    }
    update(){
        this.x -= this.game.speed
        if(this.x <= -this.scaledWidth){
            this.x = 0
        }
    }
    //draw image twice one with an offset (starting where first one ends)
    draw(){
        this.game.ctx.drawImage(this.image, this.x, 0, this.scaledWidth, this.scaledHeight)
        this.game.ctx.drawImage(this.image, this.x + this.scaledWidth, 0, this.scaledWidth, this.scaledHeight)



       

    }
    resize(){
        this.scaledWidth = this.width * this.game.ratio
        this.scaledHeight = this.height * this.game.ratio
        this.x = 0
    }
}