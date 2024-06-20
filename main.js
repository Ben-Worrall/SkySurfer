class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 2000
        this.ratio = this.height / this.baseHeight
        this.background = new Background(this)
        this.player = new Player(this)

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
        this.player.resize()
    }

    render(){
        //coords and size for player
        this.background.update()
        this.background.draw()
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
    


    //run function to update all draw objects then delete then run agina
    function animate(){
        ctx.clearRect(0,0, canvas.height, canvas.width)
        game.render()
        requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
})