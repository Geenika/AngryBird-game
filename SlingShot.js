class SlingShot{
    constructor(bodyA , pointB){
        var options = {
            bodyA : bodyA ,
           pointB : pointB,
           stiffness: 0.06,
           length: 10
        }
        this.pointB = pointB
        this.Sling = Matter.Constraint.create(options)
        World.add(world,this.Sling)
        this.image = loadImage("sprites/Diamond_Sling.png");
        this.rubberBandimage = loadImage("sprites/rubberBand.png");


    }

fly(){
// null - empty -
this.Sling.bodyA = null;
}
    display(){
        push()
        image(this.image,150,50,100,150)
       
        strokeWeight(7)
        stroke("#165B80")
if(this.Sling.bodyA){
        line(this.Sling.bodyA.position.x , this.Sling.bodyA.position.y,
            this.pointB.x+10,this.pointB.y+10 )
            line(this.Sling.bodyA.position.x , this.Sling.bodyA.position.y,
             this.pointB.x-10,this.pointB.y+10 )
        
                
            image(this.rubberBandimage , this.Sling.bodyA.position.x - 56 ,  this.Sling.bodyA.position.y -20 , 100,40  )
            pop()
    }
}
}