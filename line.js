/*---------------------------------------------
 • Class of a line
 • intput : 
    - x1 and y1 : start point coordinates
    - x2 and y2 : end point coordinates
    - startPoint and endPoint : letters of the start and end point 
 • Properties : 
    line between two points startPoint and endPoint
    each points are a vector a(x1, y1) and b(x2, y2)
---------------------------------------------*/


class Line{
    constructor(x1, y1, x2, y2, startPoint, endPoint){
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.startPoint = startPoint;
        //if(startPoint == undefined) this.startPoint = letters[random(0, letters.length)];
        this.endPoint = endPoint; 
        this.color = {
            R:random(0,255),
            G:random(0,255),
            B:random(0,255),
            alpha:200,
        }
    }
    show(){
        push();
        stroke(255);
        strokeWeight(7);
        stroke(this.color.R, this.color.G, this.color.B, this.color.alpha)
        point(this.a.x, this.a.y);
        point(this.b.x, this.b.y);
        pop();

        // Points of the line
        push();
        textSize(15);
        text(this.startPoint, this.a.x, this.a.y);
        text(this.endPoint  , this.b.x, this.b.y);
        pop();

        // draw the line
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}