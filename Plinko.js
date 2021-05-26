class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitutuion:0.4
      }
      this.r=10;
      this.body = Bodies.circle(x,y,this.r,options);   
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      fill("white");
      ellipseMode(RADIUS);
     ellipse(pos.x, pos.y, this.r, this.r);
     pop();
    }
  };