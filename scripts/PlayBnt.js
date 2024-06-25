class PlayButton {
    constructor(game){
        this.game = game;
        this.image = document.getElementById('BackgroundWaterDiv')
        this.width = 400
        this.height = 400
        this.scaledWidth;
        this.scaledHeight;
        this.x
        this.y
    }
    //draw image twice one with an offset (starting where first one ends)
    draw(){
        this.game.ctx.drawImage(this.image, this.x, 0, this.scaledWidth, this.scaledHeight)
       

    }
    resize(){
        this.scaledWidth = this.width * this.game.ratio
        this.scaledHeight = this.height * this.game.ratio
        this.x = 0
    }
}