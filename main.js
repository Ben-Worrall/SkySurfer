
class Game{
    constructor(canvas, context){
        this.Running = true
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.world = new World(this)
        this.player = new Player(this)
        this.gravity
        this.baseHeight = 1080
        this.ratio = this.height / this.baseHeight
        this.fly = false
        this.GroundObspeed
        this.TopObspeed
        this.DiagonalLeftObspeed
        //ground level obstacles
        this.GroundObstaclesAr = []
        this.numberOfGroundObstacles = 2000
        //this.CreateGroundObstacles()

        //top level objects
        this.TopObstaclesAr = []
        this.numberOfTopObstacles = 2000


    
    
    
        //diagonal from left
        this.DiagonalLeftObstaclesAr = []
        this.numberOfDiagonalLeftObstacles = 2000








        this.resize(window.innerWidth, window.innerHeight)
         //check for resizing
        window.addEventListener('resize', e =>{
            location.reload()
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        })


        //player control

        
        


    }



    resize(width, height){
        
        this.canvas.width = width;
        this.canvas.height = height;
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.ratio = this.height / this.baseHeight
      

        //collision
        this.ctx.lineWidth = 0.1
        this.ctx.strokeStyle = "rgba(1, 1, 1, 0)"


        this.gravity = 0.15 * this.ratio
        this.player.resize()
        this.world.resize()
        this.ctx.fillStyle = 'red'
        //console.log(this.ratio)
        this.GroundObspeed = 2.5 * this.ratio
        this.TopObspeed = 4 * this.ratio
        
        this.DiagonalLeftObspeed = 6 * this.ratio
        //ground level objects
        this.createGroundObstacles();
        this.GroundObstaclesAr.forEach(obstacle => {
            
            obstacle.resize()
        })
        //top level objects
        this.createTopObstacles();
        this.TopObstaclesAr.forEach(obstacle => {
            
            obstacle.resize()
        })
        
        //diagonal from left
        this.createDiagonalLeftObstacles();
        this.DiagonalLeftObstaclesAr.forEach(obstacle => {
            
            obstacle.resize()
        })
        

    }
    start(){
        this.GroundObstaclesAr = []
        this.numberOfGroundObstacles = 2000
        //this.CreateGroundObstacles()

        //top level objects
        this.TopObstaclesAr = []
        this.numberOfTopObstacles = 2000


    
    
    
        //diagonal from left
        this.DiagonalLeftObstaclesAr = []
        this.numberOfDiagonalLeftObstacles = 2000





        this.createGroundObstacles();
        this.GroundObstaclesAr.forEach(obstacle => {
            
            obstacle.resize()
        })
        //top level objects
        this.createTopObstacles();
        this.TopObstaclesAr.forEach(obstacle => {
            
            obstacle.resize()
        })
        
        //diagonal from left
        this.createDiagonalLeftObstacles();
        this.DiagonalLeftObstaclesAr.forEach(obstacle => {
            
            obstacle.resize()
        })
    }


    
    render(){
        this.player.update()
        this.player.draw()
        //ground level objects
        this.GroundObstaclesAr.forEach(obstacle => {
            obstacle.update()
            obstacle.draw()
            
        })
        //top level objects
        this.TopObstaclesAr.forEach(obstacle => {
            obstacle.update()
            obstacle.draw()
            
        })
        
        //diagonal from left
        this.DiagonalLeftObstaclesAr.forEach(obstacle => {
            obstacle.update()
            obstacle.draw()
            
        })
        
       
    }



    renderWorld(){
        this.world.update()
        this.world.draw()
        
        
        
    }
    //ground level objects
    createGroundObstacles(){
        this.GroundObstaclesAr = []
        const firstX = this.width - (600 * this.ratio)
        const obstacleSpacing = 800 * this.ratio;
        for(let i = 0; i < this.numberOfGroundObstacles; i++){
            
            this.GroundObstaclesAr.push(new GroundObstacle(this, (firstX + (i * obstacleSpacing))))
        }
    }
    //top level objects
    createTopObstacles(){
        this.TopObstaclesAr = []
        const firstX = 0
        const obstacleSpacing = -1300 * this.ratio;
        for(let i = 0; i < this.numberOfTopObstacles; i++){
            
            this.TopObstaclesAr.push(new TopObstacle(this, (firstX + (i * obstacleSpacing))))
        }
    }
    
    //diagonal from left
    createDiagonalLeftObstacles(){
        this.DiagonalLeftObstaclesAr = []
        const firstX = 0
        var obstacleSpacing = -((1000) * this.ratio);
        
        for(let i = 0; i < this.numberOfDiagonalLeftObstacles; i++){
            
            this.DiagonalLeftObstaclesAr.push(new DiagonalLeftObstacle(this, (firstX + (i * obstacleSpacing))))
        }
    }



    //check for collisions
    CheckCollision(a,b){
        const dx = a.collisionX - b.collisionX;
        const dy = a.collisionY - b.collisionY;
        //distance between the 2 points
        const distance = Math.hypot(dx,dy);
         
        const sumOfRadii = a.collisionRadius + b.collisionRadius

        //if they are touching, then return true
        return distance <= sumOfRadii

    }



    
    

   
}






window.addEventListener('load', function(){

    //set high score
    if(this.localStorage.getItem('HighScore')){
        this.document.getElementById('HighScore').innerHTML = "High Score: " + this.localStorage.getItem('HighScore')
    }else{
        this.document.getElementById('HighScore').innerHTML = "High Score: 0"
    }
    
    
    //console.log(document.getElementById('WorldCollision').getBoundingClientRect().left)


    var img = new Image
    img.src = "./assets/background/World2.png"
    var img2 = new Image
    img2.src = "./assets/players/Character 1/animations/surfing/SurfingC11.png"
    var img3 = new Image
    img3.src = "./assets/players/Character 1/animations/down/Down C1.png"
    var img4 = new Image
    img4.src = "./assets/players/Character 1/animations/boost/Boost C1.png"
    var img5 = new Image
    img5.src = "./assets/players/Character 1/Character 1.png"
    function AnimateWorld(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.renderWorld()
        requestAnimationFrame(AnimateWorld)
    }
    requestAnimationFrame(AnimateWorld)
    
    //load up canvas
    const canvas = document.getElementById('GameCanvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const game = new Game(canvas, ctx)
   
    ctx.fillStyle = 'red'



    //for mouse contrls
    let reqAnim


    document.getElementById('UpButton').addEventListener('mousedown', e =>{
        //console.log(e.target)
        //console.log('button push')
        e.target.style.height = "13vw"
        e.target.style.width = "13vw"
        function Animate(){
            reqAnim = this.window.requestAnimationFrame(Animate)
            game.player.fly()
        }
        Animate()
        
        
            
    })
    
      //for up button (mouse up)
    document.getElementById('UpButton').addEventListener('mouseup', e =>{
    
        //console.log('button release')
        this.window.cancelAnimationFrame(reqAnim)
        game.player.Down()
        //change button back
        e.target.style.height = "14vw"
        e.target.style.width = "14vw"
    })
    //mouse leave
    document.getElementById('UpButton').addEventListener("mouseleave", e => {
        this.window.cancelAnimationFrame(reqAnim)
        game.player.Down()
        //change button back
        e.target.style.height = "14vw"
        e.target.style.width = "14vw"
    });

    //for mobile controls


   
    document.getElementById('UpButton').addEventListener('touchstart', e =>{
        e.preventDefault()
        //console.log(e.target)
        //console.log('button push')
        e.target.style.height = "13vw"
        e.target.style.width = "13vw"
       
        
            
    })
    
     
    document.getElementById('UpButton').addEventListener('touchend', e =>{
        e.preventDefault()
        //console.log('button release')
        
        game.player.Down()
        //change button back
        e.target.style.height = "14vw"
        e.target.style.width = "14vw"
    })


   




    


    //high school initial
    if(this.localStorage.getItem('HighScore')){
        this.document.getElementById('HighScore').innerText = "High Score: " + this.localStorage.getItem('HighScore')
    }else{
        this.document.getElementById('HighScore').innerText = "High Score: 0" 
    }
    
    


    //run function to update all draw objects then delete then run agina
    


    document.getElementById('PlayerButton').addEventListener('click', function(){
        document.getElementById('PlayerButton').style.display="none"
        game.Running = true
        game.start()


        //score

        document.getElementById('Score').innerHTML = "Score: 0"

        var timer
       let score = 0
       function tick() {
        score++
        document.getElementById('Score').innerHTML = "Score: " + score
        start();        // restart the timer
    };

    function start() {  // use a one-off timer
        timer = setTimeout(tick, 1000);
    };
      
    function stop() {

        //set highscore to localstorage
        if(!localStorage.getItem('HighScore'))
        {
            localStorage.setItem('HighScore', score)
            document.getElementById('HighScore').innerHTML = "High Score: " + score
        }
        else if(localStorage.getItem('HighScore') < score)
        {
            localStorage.setItem('HighScore', score)
            document.getElementById('HighScore').innerHTML = "High Score: " + score
        }



        clearTimeout(timer);
    };
    start()
        



        
       //update all game objects


    function Animate(){
        if(game.Running == true){
            game.render()
        requestAnimationFrame(Animate)
        
        }else{
            document.getElementById('PlayerButton').style.display=""
            game.Running = false
            stop()
        }
        
        
    }
    requestAnimationFrame(Animate)
       
    
    })
    

    

   

    
})












        /*   
        
        
        
        
        
        
        
        
        
        
        
        
        */