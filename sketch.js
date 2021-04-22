var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,580,360,30);
    surface1.shapeColor=rgb(0,0,255);

    surface2=createSprite(295,580,200,30);
    surface2.shapeColor=rgb(255,120,0);

    surface3=createSprite(515,580,200,30);
    surface3.shapeColor= rgb(153,0,76);

    surface4=createSprite(740,580,220,30);
    surface4.shapeColor=rgb(0,100,0);




    //create box sprite and give velocity
    box=createSprite(random(20,750),100,40,40);
    box.shapeColor=(rgb(255,255,255));
    box.velocityY=9;
    box.velocityX=4;
   

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor=rgb(0,0,255);
        
        music.play();
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor=rgb(255,120,0);
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor=rgb(153,0,76);
       
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor=rgb(0,100,0);
       
    }
    drawSprites();
}
