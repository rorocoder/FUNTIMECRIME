//let canvas = document.getElementById('canvasId').getContext('2d');

function initializeAnimation(){
  window.requestAnimationFrame(draw);
}


function drawArt(context){
  context.translate(400,450);
  context.save();
  var time1 = new Date();

  context.rotate(time1.getSeconds() + time1.getMilliseconds() / 1000) ;
  context.beginPath()
  context.moveTo(-100,-400);
  //triangle
  context.lineTo(-150, -325);
  context.lineTo(-50,-325);
  context.lineTo(-100,-400);
  context.stroke();
  context.restore();

  //circle
  context.save();
  context.beginPath();
  context.arc(75,-360,45, 0, 2 * Math.PI);
  context.stroke();
  context.restore();

  //square
  context.save();
  var time = new Date();
  var moveRate = time.getSeconds() + time.getMilliseconds() / 10 - 450
   while (moveRate > -150 || (moveRate < -449 && moveRate <-450)){
     moveRate = -moveRate;
   }
  context.beginPath()
  context.rect(200,moveRate, 80, 80);
  context.stroke();
  //context.clearRect();
  context.restore();


  //outer box
  context.save();
  context.rect(-200,-425, 550, 125);
  context.stroke();
  context.restore();
}


function draw() {
  let canvas = document.getElementById('canvasId').getContext('2d');
  canvas.globalCompositeOperation = 'destination-over';
  canvas.clearRect(0,0,800, 900);

  //canvas.Rect(0,0,1200,1200);
  //canvas.fillStyle = 'red';
  //canvas.translate(50,50);
canvas.save();
  drawArt(canvas);
  canvas.restore();
  window.requestAnimationFrame(draw);
}

initializeAnimation();
