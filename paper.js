class Paper{
    constructor(x,y,radius){
      
      this.image = loadImage("paper.png") 
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,100,options);
        this.radius = 100;

        

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        fill("grey")
        pop();
        

  }
}

