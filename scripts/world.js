class World{
    constructor(game){
        this.game =  game;
        this.x = 0;
        this.y
        this.spriteWidth = 1500
        this.spriteHeight = 1500
        this.width 
        this.height
    }
    draw(){
        var img = new Image
        img.src = "./assets/background/World2.png"
        this.game.ctx.drawImage(img, 60 * this.game.ratio , 555 * this.game.ratio, this.spriteWidth * this.game.ratio, this.spriteHeight * this.game.ratio)
    }
    update(){
        //spin image
        //asdas
    }
    resize(){
        this.width = this.spriteWidth * this.game.ratio
        this.height = this.spriteHeight * this.game.ratio
        this.y = this.game.height * 0.5 - this.height * 0.5
        this.x = document.getElementById('WorldCollision').getBoundingClientRect().left*2 + this.width/2
        this.speedY = -2 * this.game.ratio
    }
    
}