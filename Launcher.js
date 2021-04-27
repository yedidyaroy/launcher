class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if (this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}