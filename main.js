







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
         document.getElementById('World').style.transform ='rotate(' + i + 'deg)';
         //console.log('test')
         i = i + 0.25
            requestAnimationFrame(animate)
       }
       requestAnimationFrame(animate)
       
    
    })
    
    
    this.document.getElementById('Character').style.bottom = "34%"
    


    
})


var Boost
//for up button (mouse down)
document.getElementById('UpButton').addEventListener('mousedown', function(e){
    //console.log(e.target)
    
    e.target.style.height = "13vw"
    e.target.style.width = "13vw"

    //move up
    let i = 0
    Boost=setInterval(function(){
        
        document.getElementById('Character').style.bottom = document.getElementById('Character').style.bottom + i + "px"
        i++
   }, 1);
        
        
        
           
      
      
})
//for up button (mouse up)
document.getElementById('UpButton').addEventListener('mouseup', function(e){
    //console.log(e.target)
    if (Boost) clearInterval(Boost)
    e.target.style.height = "14vw"
    e.target.style.width = "14vw"
})