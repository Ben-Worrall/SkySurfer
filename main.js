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
        this.numberOfObstacles = 10

        //gravity pulls player down 1 pixel per frame
        this.gravity = 0.1
        

        this.resize(window.innerWidth, window.innerHeight)

        //for any viewport on any device
        window.addEventListener('resize', e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        })

        //mouse controls
        this.canvas.addEventListener('mousedown', (e) => {
              this.player.fly()
        })
        //keyboard controls
        window.addEventListener('keydown', e => {
            if(e.key == ' ' || e.key === 'Enter' || e.key === "w")[
                this.player.fly()
            ]
        })
        //touch control
        this.canvas.addEventListener('touchstart', e => {
            this.player.fly()
        })


       //cycle through water scenes array

        var BGwaterAR = [
            "./assets/background/water/BACKGROUND WATER 1.png",
            "./assets/background/water/BACKGROUND WATER 2.png",
            "./assets/background/water/BACKGROUND WATER 3.png",
            "./assets/background/water/BACKGROUND WATER 4.png"
        ]
        let count = 0;
        function loopForever(){
                
            document.getElementById('BackgroundWaterDiv').src = BGwaterAR[count]
            count++;
            if (count === BGwaterAR.length) {
                count = 0;
              }

            
        }
        setInterval(loopForever, 250);
            
           
          



    }

    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = 'red'
        this.ratio = this.height / this.baseHeight

        this.speed = 6 * this.ratio
        //for scaling depnding on height
        this.gravity = 0.5 * this.ratio
        this.background.resize()
        this.BackgroundWater.resize()
        this.player.resize()
        this.createSeaObstacles()
        this.SeaObstacles.forEach(obstacle => {
            obstacle.resize()
        })
    }

    render(){
        //coords and size for player
        this.background.update()
        this.BackgroundWater.update()
        this.background.draw()
        this.BackgroundWater.draw()
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
        const obstacleSpacing = 2000 * this.ratio;
        for(let i =0; i < this.numberOfObstacles; i++){
            this.SeaObstacles.push(new SeaObstacle(this, firstX + i * obstacleSpacing))
        }
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
        requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
})


