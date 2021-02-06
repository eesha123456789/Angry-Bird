class Bird extends Baseclass
{
    constructor(x,y)
    {
        super(x,y,70,70);
        this.image=loadImage("bird.png")
        this.image2=loadImage("smoke.png")
        this.trajectory = []
    }
    display(){
        super.display()
        if(gameState===birdOffSling && this.body.position.x>325){
            var position=[this.body.position.x,this.body.position.y]
            this.trajectory.push(position)
        }
        push()
        imageMode(CENTER)
        pop()
       // console.log(this.trajectory)
        for(var i=0; i<this.trajectory.length;i++){
            
            image(this.image2,this.trajectory[i][0],this.trajectory[i][1])
        }
        
       // this.body.position.x=mouseX
       // this.body.position.y=mouseY
    }
}