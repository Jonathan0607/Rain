class Drops{
  constructor(x,y) {
      var options = {
          'isStatic':false,
          'friction':1
      }
     
      this.body = Bodies.rectangle(x, y, 10,10, options);
      this.width = 0.5;
      this.height = 0.5;
      World.add(world, this.body);
    }
      display(){
        push();
        fill("blue")
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0, 0, 5, 5);
        pop();
      }
      update(){
        if(this.body.position.y>450){
          Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,400)})
        }
      }
}