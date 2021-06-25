var ball;
var pos,ballPos,db;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database();
    pos = db.ref("ball")
    pos.on("value",read)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   // ball.x = ball.x + x;
    //ball.y = ball.y + y;
    pos.set({
      x:ballPos.x+x,
      y:ballPos.y+y 
    })
}

function read(data){
    ballPos = data.val()
    ball.x = ballPos.x
    ball.y = ballPos.y
}