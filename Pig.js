class Pig extends BaseClass {
  constructor(x,y){
    super(x,y,70,70)
    this.image = loadImage("sprites/Qeen_Pig.png");
    this.visibility = 255
    this.StarImage = loadImage("sprites/Star.png");  
  }

  display(){
    if(this.body.speed < 3){
      super.display()
    } else {
      push()
      this.visibility = this.visibility - 5
      World.remove(world, this.body)
      tint(255,this.visibility); // Apply transparency without changing color
      image(this.image,this.body.position.x, this.body.position.y, 70,70)
      pop() 
     
      if(this.visibility > -2500){
        image(this.StarImage,250 , 50);
        levelSound.play()
      }
      
      
      console.log(this.visibility)
    }
  }
}