let L1 = {
    x1:0,
    y1:125,
    x2:125,
    y2:0,
}

let L2 = {
    x3:-125,
    y3:-50,
    x4:200,
    y4:200,
}





let a, b;
let c, d;
function setup() {
    createCanvas(500,500);
    push();
    translate(width/2, height/2);
    
    // L1 points :
    a = createVector(L1.x1, L1.y1);
    b = createVector(L1.x2, L1.y2);

    // L2 points :
    c = createVector(L2.x3, L2.y3);
    d = createVector(L2.x4, L2.y4);


    pop();

}


function draw() {
    background(80);
    
    push();
    translate(width/2, height/2);
    
    
    stroke(255);
    for(var j = -height/2; j < height/2; j+= 20){
        point(0,j);
        push()
        noStroke();
        textSize(10)
        text(j,7,j)
        pop()
    }
    for(var i = -width/2; i < width/2; i+= 10){
        point(i,0);
    }


    //------------
    // Draw lines
    //------------

    // L1
    // points
    push();
    stroke(220,0,0,150);
    strokeWeight(7);
    point(a.x, a.y);
    point(b.x, b.y);
    pop();
    // point name
    textSize(15);
    text("A", a.x-15, a.y);
    text("B", b.x-15, b.y);
    line(a.x, a.y, b.x, b.y);


    // L2
    // points

    push();
    stroke(0,0,220,150);
    strokeWeight(7);
    point(c.x, c.y);
    point(d.x, d.y);
    pop();
    // point name
    textSize(15);
    text("C", c.x-15, c.y);
    text("D", d.x-15, d.y);
    line(c.x, c.y, d.x, d.y);
    
    pop();
}