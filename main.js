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
        window.addEventListener('mousedown', (e) => {
            e.preventDefault()
              this.player.fly()
              console.log('click on mouse')
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
            console.log('click on screen')
        })
        

        
      
        
            
           
          



    }
    

    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = 'red'
        this.ctx.font = 'Bungee'
        //for collision
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'white'
        
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
        
        //this.drawStatusText()
        //this.player.update()
        //this.player.draw()
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
    //check collisions
    checkCollision(a, b){
        const dx = a.collisionX - b.collisionX;
        const dy = a.collisionY - b.collisionY;
        const distance = Math.hypot(dx, dy);
        const sumOfRadii = a.collisionRadius + b.collisionRadius;
        return distance <= sumOfRadii
    }


    drawStatusText(){
        
        document.getElementById('Score').innerText = "Score:" + this.score
        if(this.gameOver){
            document.getElementById('PlayButtonHolderAfter').style.display = ""
            if(localStorage.getItem('HighScore')){
                if(this.score > localStorage.getItem('HighScore')){
                    localStorage.setItem('HighScore', this.score)
                }
            } else {
                localStorage.setItem('HighScore', this.score)
            }


            //update highscore if needed
            if(this.score > Number(document.getElementById('HighScore').innerText.slice(-1))){
                document.getElementById('HighScore').innerText = "High Score: " + this.score
            }

            
           
        }
        
    }

    PlayButtonFunc(){
        this.drawStatusText()
        this.player.update()
        this.player.draw()

        
        
    }
    

}





window.addEventListener('load', function(){
    const canvas = this.document.getElementById('GameCanvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 600
    canvas.height = 600
    ctx.fillStyle = 'red'

    const game = new Game(canvas, ctx)


    //high school initial
    if(this.localStorage.getItem('HighScore')){
        this.document.getElementById('HighScore').innerText = "High Score: " + this.localStorage.getItem('HighScore')
    }else{
        this.document.getElementById('HighScore').innerText = "High Score: 0" 
    }
    
    


    //run function to update all draw objects then delete then run agina
    function animate(){
        ctx.clearRect(0,0, canvas.height, canvas.width)
        game.render()
        
         requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)


    document.getElementById('PlayerButton').addEventListener('click', function(){
        document.getElementById('PlayerButton').style.display="none"
        game.score = 0
        function animate(){
            
            game.PlayButtonFunc()
            
            if(!game.gameOver) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
    
    
    })
    document.getElementById('PlayerButtonAfter').addEventListener('click', function(){
        document.getElementById('PlayButtonHolderAfter').style.display="none"
        
        
        game.gameOver = false
        game.score = 0
        function animate2(){
            
            
            game.SeaObstacles.forEach(obstacle => {
                obstacle.checkCollision()
                
            })
            
            game.PlayButtonFunc()
            
            if(!game.gameOver) requestAnimationFrame(animate2)
        }
        requestAnimationFrame(animate2)
    
    
    })
    


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


