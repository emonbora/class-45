var pacman, hole1, gameState = 2, start, startImage
var wall1, coin1, coin2, coin3, gate1, gate2, gate3
var wall2
var wall3
var wall4 
var wall5
var wall6 
var wall7  
var wall8 
var wall9 
var wall10
var wall11 
var wall12 
var wall13 
var wall14 
var wall15 
var wall16 
var wall17 
var wall18 
var wall19
var wall20
var wall21
var wall22
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10,obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20,obs21,obs22,obs23,obs24,obs25,obs26,obs27,obs28,obs29,obs30,obs31;

function preload(){
 //   startImage = loadImage("start.png")
}

function setup(){
   createCanvas(400,400)
   pacman = createSprite(20,20,20,20)
   pacman.shapeColor = "yellow"
   wall1 = createSprite(10,60,100,20);
   wall2 = createSprite(110,0,20,400);
   wall3 = createSprite(0,250,350,20);
   wall4 = createSprite(350,400,20,150);
   wall5 = createSprite(100,130,100,20);
   wall6 = createSprite(205,200,100,20);
   wall7 = createSprite(200,175,20,150);
   wall8 = createSprite(200,25,20,50);
   wall9 = createSprite(400,100,200,20);
   wall10 = createSprite(300,50,20,50);
   wall11 = createSprite(350,245,20,70);
   wall12 = createSprite(300,250,15,100);
   wall13 = createSprite(345,200,100,20);
   wall14 = createSprite(275,250,45,20);
   wall15 = createSprite(350,150,20,30);
   wall16 = createSprite(175,300,260,20);
   wall17 = createSprite(50,375,15,50);
   wall18 = createSprite(100,330,15,50);
   wall19 = createSprite(150,375,15,50);
   wall20 = createSprite(200,330,15,50);
   wall21 = createSprite(250,375,15,50);
   wall22 = createSprite(300,325,15,50);
   coin2 = createSprite(340, 70, 20,20);
   coin1 = createSprite(150,30,20,20)
   coin3 = createSprite(100,375,20,20)
   gate1 = createSprite(200,75,20,50)
   gate2 = createSprite(200,270,20,40)
   gate3 = createSprite(350,305,20,50)
   hole1 = createSprite(380,375,20,20)
   
   
   
   coin1.shapeColor = "Red"
   coin2.shapeColor = "Red"
   coin3.shapeColor = "Red"
   gate1.shapeColor = "blue"
   gate2.shapeColor = "blue"
   gate3.shapeColor = "blue"
   hole1.shapeColor = "purple"

   //level 2

     obs1 = createSprite(10,70,100,5);
    obs1.shapeColor = "brown";
     obs2 = createSprite(90,40,5,80);
    obs2.shapeColor = "brown";
     obs3 = createSprite(5,110,400,5);
    obs3.shapeColor = "brown";
     obs4 = createSprite(125,67,5,80);
    obs4.shapeColor = "brown";
     obs5 = createSprite(165,20,5,100);
    obs5.shapeColor = "brown";
     obs6 = createSprite(5,110,350,5);
    obs6.shapeColor = "brown";
     obs7 = createSprite(202,70,5,80);
    obs7.shapeColor = "brown";
     obs8 = createSprite(234,30,70,5);
    obs8.shapeColor = "brown";
     obs9 = createSprite(325,30,50,5);
    obs9.shapeColor = "brown";
     obs10 = createSprite(350,52,5,50);
    obs10.shapeColor = "brown";
     obs11 = createSprite(267,139,5,218);
    obs11.shapeColor = "brown";
     obs11 = createSprite(303,87,5,120);
    obs11.shapeColor = "brown";
    obs12 = createSprite(350,150,100,5);
    obs12.shapeColor = "brown";
    obs13 = createSprite(350,188,5,230);
    obs13.shapeColor = "brown";
    obs14 = createSprite(249,350,302,5);
    obs14.shapeColor = "brown";
    obs15 = createSprite(373,250,50,5);
    obs15.shapeColor = "brown";
     obs16 = createSprite(325,300,50,5);
    obs16.shapeColor = "brown";
    obs17 = createSprite(300,277,5,50);
    obs17.shapeColor = "brown";
     obs18 = createSprite(250,250,105,5);
    obs18.shapeColor = "brown";
    obs19 = createSprite(200,225,5,50);
    obs19.shapeColor = "brown";
    obs20 = createSprite(150,200,105,5);
    obs20.shapeColor = "brown";
    obs21 = createSprite(100,173,5,50);
    obs21.shapeColor = "brown";
    obs22 = createSprite(50,150,105,5);
    obs22.shapeColor = "brown";
     obs23 = createSprite(250,323,5,50);
    obs23.shapeColor = "brown";
     obs24 = createSprite(200,300,105,5);
    obs24.shapeColor = "brown";
     obs25 = createSprite(150,273,5,50);
    obs25.shapeColor = "brown";
     obs26 = createSprite(100,250,104,5);
    obs26.shapeColor = "brown";
     obs27 = createSprite(50,227,5,50);
    obs27.shapeColor = "brown";
     obs28 = createSprite(26,200,53,5);
    obs28.shapeColor = "brown";
     obs29 = createSprite(100,300,5,105);
    obs29.shapeColor = "brown";
     obs30 = createSprite(50,297,5,105);
    obs30.shapeColor = "brown";
     obs31 = createSprite(26,350,53,5);
    obs31.shapeColor = "brown";
}

function draw(){
  //  createEdgeSprites();
  //  pacman.bounceOff(edges);
    if(gameState === 0){
        background("blue")
        textSize(13)
        stroke("black")
        text ("Pacman in Adventure", 100,20)
        text("controls : move left, right, up, down using arrow keys", 50, 50)
        start = createSprite(200,200)
        start.addImage(startImage)
        start.scale = 0.5
    
        if(mousePressedOver (start)){
            gameState = 1
            console.log("hello")
    
        }
     }
    else if (gameState === 1){
       // start.destroy();
        background ("green")
        console.log("bye")
        
       
       /* 
        if(pacman.isTouching(wall1)||pacman.isTouching(wall2)||pacman.isTouching(wall3)||pacman.isTouching(wall4)||pacman.isTouching(wall5)
        ||pacman.isTouching(wall6)||pacman.isTouching(wall7)||pacman.isTouching(wall8)||pacman.isTouching(wall9)||pacman.isTouching(wall10)
        ||pacman.isTouching(wall11)||pacman.isTouching(wall12)||pacman.isTouching(wall13)||pacman.isTouching(wall14)||pacman.isTouching(wall15)
        ||pacman.isTouching(wall16)||pacman.isTouching(wall17)||pacman.isTouching(wall18)||pacman.isTouching(wall19)||pacman.isTouching(wall20)
        ||pacman.isTouching(wall21)||pacman.isTouching(wall22)
        ){
            pacman.x = 20
            pacman.y = 20
        }
        */
        if(keyDown ("UP_ARROW")){
            
          pacman.y = pacman.y-5
        }
        if(keyDown  ("DOWN_ARROW")){
            pacman.y = pacman.y+5
          }
        if(keyDown("RIGHT_ARROW")){
            pacman.x = pacman.x+5
          }
        if(keyDown ("LEFT_ARROW")){
            pacman.x = pacman.x-5
          }
        if(pacman.isTouching(coin1)){
            gate1.destroy();
        }
        if(pacman.isTouching(coin2)){
            gate2.destroy();
        }
        if(pacman.isTouching(coin3)){
            gate3.destroy();
        }
        if(pacman.isTouching(hole1)){
            gameState = 2
        }
    }
    if(gameState === 2){
        background("skyblue")
       // for(i = 0; i<23; i++){
      //      walli.remove();
     //       console.log(i)
      //  }

    }
    drawSprites()
}