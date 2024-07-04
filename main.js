
class Game{
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.player = new Player(this)
        this.gravity
        this.baseHeight = 1080
        this.ratio = this.height / this.baseHeight
        this.resize(window.innerWidth, window.innerHeight)
       

         //check for resizing
        window.addEventListener('resize', e =>{
            
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        })
    }
    resize(width, height){

        this.canvas.width = width;
        this.canvas.height = height;
        this.height = this.canvas.height;
        this.width = this.canvas.width;
        this.ratio = this.height / this.baseHeight

        this.gravity = 0.15 * this.ratio
        this.player.resize()
        this.ctx.fillStyle = 'red'
        console.log(this.ratio)

    }
    render(){
        this.player.update()
        this.player.draw()
        
    }

   
}






window.addEventListener('load', function(){
    //load up canvas
    const canvas = document.getElementById('GameCanvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const game = new Game(canvas, ctx)
   
    ctx.fillStyle = 'red'

    







    


    //high school initial
    if(this.localStorage.getItem('HighScore')){
        this.document.getElementById('HighScore').innerText = "High Score: " + this.localStorage.getItem('HighScore')
    }else{
        this.document.getElementById('HighScore').innerText = "High Score: 0" 
    }
    
    


    //run function to update all draw objects then delete then run agina
    


    document.getElementById('PlayerButton').addEventListener('click', function(){
        document.getElementById('PlayerButton').style.display="none"
        let i = 0
        //for world
        function animate(){
         document.getElementById('World').style.transform ='rotate(' + -i + 'deg)';
         //console.log('test')
         i = i + 0.25
            requestAnimationFrame(animate)
       }
       requestAnimationFrame(animate)



       //update all game objects
    function Animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.render()
        requestAnimationFrame(Animate)
    }
    requestAnimationFrame(Animate)
       
    
    })
    


    //position the start of 



    var WorldColCoords = document.getElementById('WorldCollision').getBoundingClientRect()
    var CharacterCoords = document.getElementById('Character').getBoundingClientRect()
    //position on y coord
     document.getElementById('Character').style.top = (WorldColCoords.top)-(CharacterCoords.height ) + "px"
    //position x coord
    document.getElementById('Character').style.left = WorldColCoords.left+(WorldColCoords.width/2)-(CharacterCoords.width/2) + "px"




    
})





document.getElementById('UpButton').addEventListener('mousedown', function(e){
    //console.log(e.target)
    console.log('button push')
    e.target.style.height = "13vw"
    e.target.style.width = "13vw"

    
        
})

          //for up button (mouse up)
        document.getElementById('UpButton').addEventListener('mouseup', function(e){
            


            console.log('button release')
            
          
            //change button back
            e.target.style.height = "14vw"
            e.target.style.width = "14vw"
        })







        /*   
        
        
        
        
        
        
        
        
        
        
        
        
        */