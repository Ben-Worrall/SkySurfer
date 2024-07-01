


class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 1080
        this.ratio = this.height / this.baseHeight
        //for sea obstacles
        this.SeaObstacles = []
        this.numberOfObstacles = 2000
        this.score
        this.gameOver 
        this.World 
        this.backgroundSpace
        this.rotate = 0
        //gravity pulls player down 1 pixel per frame
        this.gravity = 0.5
        

        this.resize(window.innerWidth, window.innerHeight)

        //for any viewport on any device
        window.addEventListener('resize', e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
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
        this.score = 0;
        this.gameOver = false
    }
   
    render(){
        this.backgroundSpace = new Image()
        this.backgroundSpace.src = "./assets/background/BackgroundSpace.png"
        this.ctx.drawImage(backgroundSpace,0,0,this.canvas.width,this.canvas.height)

        
        //this.drawStatusText()
        //this.player.update()
        //this.player.draw()
        //
        this.rotate++
        this.ctx.save()
        this.World = new Image()
        this.World.src = "./assets/background/World.png"
        this.ctx.rotate(this.rotate*Math.PI/180);
        this.ctx.drawImage(World,-200,-200,this.canvas.width,this.canvas.height)
        this.ctx.restore()
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
        

        
        
    }
    

}





window.addEventListener('load', function(){
    const canvas = this.document.getElementById('GameCanvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 600
    canvas.height = 600
    

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
        console.log('test')
        
         requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)


    document.getElementById('PlayerButton').addEventListener('click', function(){
        document.getElementById('PlayerButton').style.display="none"
        console.log('test')
        game.score = 0
    
    })
    
    
    
    


    
})