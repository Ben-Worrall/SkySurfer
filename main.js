







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
         console.log('test')
         i = i + 0.25
            requestAnimationFrame(animate)
       }
       requestAnimationFrame(animate)
       
    
    })
    
    
    
    


    
})