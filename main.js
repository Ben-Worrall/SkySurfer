class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 2000
        this.ratio = this.height / this.baseHeight
        this.background = new Background(this)
        this.BackgroundWater = new BackgroundWater(this)
        this.player = new Player(this)
        //for sea obstacles
        this.SeaObstacles = []
        this.numberOfObstacles = 2000
        this.score
        this.gameOver

        //gravity pulls player down 1 pixel per frame
        this.gravity = 0.5
        

        this.resize(window.innerWidth, window.innerHeight)

        //for any viewport on any device
        window.addEventListener('resize', e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        })

        //mouse controls
        window.addEventListener('click', (e) => {
              this.player.fly()
        })
        //keyboard controls
        window.addEventListener('keydown', e => {
            if(e.key == ' ' || e.key === 'Enter' || e.key === "w")[
                this.player.fly()
            ]
        })
        //mobile touch
        window.addEventListener('touchstart', (e) => {
            e.preventDefault()
            this.player.fly()
      })
        


      
        
            
           
          



    }

    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = 'red'
        this.ctx.font = '10px Bungee'
        
        this.ratio = this.height / this.baseHeight

        this.speed = 5 * this.ratio
        //for scaling depnding on height
        this.gravity = 0.5 * this.ratio
        this.background.resize()
        this.BackgroundWater.resize()
        this.player.resize()
        this.createSeaObstacles()
        this.SeaObstacles.forEach(obstacle => {
            obstacle.resize()
        })
        this.score = 0;
        this.gameOver = false
    }

    render(){
        
        //coords and size for player
        this.background.update()
        this.BackgroundWater.update()
        this.background.draw()
        this.BackgroundWater.draw()
        this.drawStatusText()
        this.player.update()
        this.player.draw()
        //

        this.SeaObstacles.forEach(obstacle => {
            obstacle.update()
            obstacle.draw()
        })
    }

    //for sea obstacles
    createSeaObstacles(){
        this.SeaObstacles = []
        //first position for obstacle
        const firstX = 100
        const obstacleSpacing = 3500 * this.ratio;
        for(let i =0; i < this.numberOfObstacles; i++){
            this.SeaObstacles.push(new SeaObstacle(this, firstX + i * obstacleSpacing))
        }
    }


    drawStatusText(){
        this.ctx.save()
        this.ctx.fillText('score: ' + this.score, ((this.width  * 0.5)), 30)
        this.ctx.restore()
    }



}





window.addEventListener('load', function(){
    const canvas = this.document.getElementById('GameCanvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 600
    canvas.height = 600
    ctx.fillStyle = 'red'

    const game = new Game(canvas, ctx)
    


    //run function to update all draw objects then delete then run agina
    function animate(){
        ctx.clearRect(0,0, canvas.height, canvas.width)
        game.render()
        if(!game.gameOver) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    


    var BGwaterAR = [
        "./assets/background/water/BACKGROUND WATER 1.png",
        "./assets/background/water/BACKGROUND WATER 2.png",
        "./assets/background/water/BACKGROUND WATER 3.png",
        "./assets/background/water/BACKGROUND WATER 4.png"
    ]
    
    for(let i =0; i< BGwaterAR.length; i++){
        var img=new Image();
        img.src=BGwaterAR[i];
        
    }


    var count = 0;
    var fps = 4;
 
function draw() {
    setTimeout(function() {
        if(!game.gameOver) requestAnimationFrame(draw);
        document.getElementById('BackgroundWaterDiv').src =  BGwaterAR[count]
        
        count++;
        if (count ===  BGwaterAR.length) {
            count = 0;
          }
        
 
    }, 1000 / fps);
}
 
draw();
    
})


