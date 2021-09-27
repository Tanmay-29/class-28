class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:15,
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
this.pointB=pointB
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA != null)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}