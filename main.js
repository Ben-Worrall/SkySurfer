







window.addEventListener('load', function(){
    


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
        function animate(){
         document.getElementById('World').style.transform ='rotate(' + -i + 'deg)';
         //console.log('test')
         i = i + 0.25
            requestAnimationFrame(animate)
       }
       requestAnimationFrame(animate)
       
    
    })
    


    //position the start of 



    var WorldColCoords = document.getElementById('WorldCollision').getBoundingClientRect()
    var CharacterCoords = document.getElementById('Character').getBoundingClientRect()
    //position on y coord
     document.getElementById('Character').style.top = (WorldColCoords.top)-(CharacterCoords.height ) + "px"
    //position x coord
    document.getElementById('Character').style.left = WorldColCoords.left+(WorldColCoords.width/2)-(CharacterCoords.width/2) + "px"




    
})



//for up button (mouse down)
let BoostAnim
let GravityAnim
var Gravity = 3

document.getElementById('UpButton').addEventListener('mousedown', function(e){
    //console.log(e.target)
    console.log('button push')
    e.target.style.height = "13vw"
    e.target.style.width = "13vw"

    var WorldColCoords = document.getElementById('WorldCollision').getBoundingClientRect()
    var CharacterCoords = document.getElementById('Character').getBoundingClientRect()
    let i = 1
    

        function animate2(){
            document.getElementById('Character').style.top = (CharacterCoords.top )+ -i + "px"
            i= i+3.5
           
            BoostAnim = window.requestAnimationFrame(animate2)
            window.cancelAnimationFrame(GravityAnim)
        }
        animate2()
        
    })









          //for up button (mouse up)
          document.getElementById('UpButton').addEventListener('mouseup', function(e){
            


            console.log('button release')
            //console.log(e.target)
            //stop flying animation
            window.cancelAnimationFrame(BoostAnim)
           

            
           
            function animate(){
                
              
        
              


                if(document.getElementById('Character').getBoundingClientRect().top < document.getElementById('WorldCollision').getBoundingClientRect().top - document.getElementById('Character').getBoundingClientRect().height){
                    document.getElementById('Character').style.top = document.getElementById('Character').getBoundingClientRect().top + Gravity + "px"
                    console.log('higher than the collision')
                    console.log( document.getElementById('Character').getBoundingClientRect().top)
                    
                    GravityAnim = window.requestAnimationFrame(animate)
                    
                }else{
                    console.log('on the collision')
                }
              }
              
             animate()
            

            //change button back
            e.target.style.height = "14vw"
            e.target.style.width = "14vw"
        })







        /*   
        
        
        
        
        
        
        
        
        
        
        
        
        */