// Axis drawing

function drawAxis(){
    stroke(255);
    for(var j = -height/2; j < height/2; j+= 20){
        point(0,j);
        push();
        noStroke();
        textSize(10)
        text(j,7,j)
        pop()
    }
    for(var i = -width/2; i < width/2; i+= 20){
        point(i,0);
        push();
        translate(i,7)
        rotate(90)
        noStroke();
        textSize(10);
        text(i,0,0)
        pop();

    }
}

// Lines
let L1c = {
    x1:0,
    y1:125,
    x2:125,
    y2:0,
}

let L2c = {
    x3:-125,
    y3:-50,
    x4:200,
    y4:200,
}


let L1, L2;


function setup() {
    createCanvas(500,500);
    push();
    translate(width/2, height/2);
    L1 = new Line(L1c.x1, L1c.y1, L1c.x2, L1c.y2, "A", "B");
    L2 = new Line(L2c.x3, L2c.y3, L2c.x4, L2c. y4, "C", "D");
    pop();

}


function draw() {
    background(80);
    
    push();
    translate(width/2, height/2);
    drawAxis();

    //------------
    // Draw lines
    //------------

    L1.show();
    L2.show();
    pop();
}