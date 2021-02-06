class Pig extends Baseclass
{
    constructor(x,y)
    {
        super(x,y,70,70);
        this.image=loadImage("enemy.png");
        this.visiblity=255
}
display(){

    //console.log(this.body.speed)
    push();
    if(this.body.speed>2.77){
        World.remove(world,this.body)
        this.visiblity=this.visiblity-3;
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,70,70)
    }
    else{
        super.display();
    }
    pop();
}
}