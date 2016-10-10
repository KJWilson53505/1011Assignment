var mountx = 400;
var cloud1 = 450;
var cloud2 = 600;

var tree1 = {
    x: 395,
    y: 355
};

var tree2 = {
    x: 595,
    y: 455
};

var tree3 = {
    x: 355,
    y: 505
};

draw = function() {
    background(123, 185, 199);
    noStroke();
    
    //sun
    fill(204, 175, 61);
    ellipse(325, 90, 50, 50);
    
    //cloud1
    fill(240, 228, 240);
    ellipse(cloud1, 112, 47, 35);
    ellipse(cloud1+30, 112, 50, 35);
    ellipse(cloud1+60, 112, 47, 35);
    
    //mountain
    fill(105, 50, 10);
    triangle(mountx, 400, mountx+200, 400, mountx+100, 100);
    //mountain snow
    fill(255, 255, 255);
    triangle(mountx+83, 150, mountx+117, 150, mountx+100, 100);
        //snowdrizzle
        triangle(mountx+83, 150, mountx+97, 150, mountx+75,175);
        triangle(mountx+90, 150, mountx+109, 150, mountx+100, 175);
        triangle(mountx+102, 150, mountx+117, 150, mountx+125, 175);
    
    //cloud2
    fill(240, 228, 240);
    ellipse(cloud2, 100, 47, 35);
    ellipse(cloud2+30, 100, 50, 35);
    ellipse(cloud2+60, 100, 47, 35);

    //tree1
    fill(112, 73, 21);
    rect(tree1.x, tree1.y, 5,50);
    fill(45, 74, 40);
    triangle(tree1.x-10,tree1.y+25,tree1.x+15,tree1.y+25,tree1.x+2,tree1.y-30);
    
    //tree2
    fill(112, 73, 21);
    rect(tree2.x, tree2.y, 5,50);
    fill(45, 74, 40);
    triangle(tree2.x-10,tree2.y+25,tree2.x+15,tree2.y+25,tree2.x+2,tree2.y-30);
    
    //snowhill
    fill(235, 231, 221);
    triangle(0, 400, 400, 400, 0, 200);
    
    //stroke(10, 10, 10);
    //person
    //head
        //ellipse(200, 280, 20, 20);
    //back
        //line(196,288,176,300);
    //thighs
        //line(176,300,200,310);
        //line(176,300,200,304);
    //arms
        //line(186,294,220,305);
        //line(186,294,215,300);
    //legs
        //line(200,310,180,326);
        //line(200,304,180,320);
    //skis
        //line(140,306,220,348);
        //line(140,300,220,340);

    noStroke();
    //tree3
    fill(112, 73, 21);
    rect(tree3.x, tree3.y, 5,50);
    fill(45, 74, 40);
    triangle(tree3.x-10,tree3.y+25,tree3.x+15,tree3.y+25,tree3.x+2,tree3.y-30);
    
    //movement
    tree1.x-=1.25;
    tree2.x-=1.25;
    tree3.x-=1.25;
    tree1.y-=0.625;
    tree2.y-=0.625;
    tree3.y-=0.625;
    mountx -=0.5;
    cloud1 -=0.25;
    cloud2 -=0.25;

    
    //Put back
    if (tree1.x < -30) {
        tree1.x = 405;
        tree1.y = 360;
    }
    
    if (tree2.x < -30) {
        tree2.x = 405;
        tree2.y = 360;
    }
    
    if (tree3.x < -70) {
        tree3.x = 365;
        tree3.y = 460;
    }
    
    if (mountx < -200) {
        mountx = 400;
    }
    
    if (cloud1 < -120) {
        cloud1 = 420;
    }
    
    if (cloud2 < -120) {
        cloud2 = 420;
    }
};
