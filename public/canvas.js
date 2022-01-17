function initializeAnimation(){
window.requestAnimationFrame(draw);
}

function draw() {
  let canvas = document.getElementById('canvasId').getContext('2d');
  canvas.globalCompositeOperation = 'destination-over';

  //canvas.Rect(0,0,1200,1200);

  canvas.fillStyle = 'red';


//  canvas.translate(50,50);
  drawArt(canvas);

  window.requestAnimationFrame(draw);



}

function drawArt(context){
  context.beginPath()
  context.moveTo(300,50);
  context.lineTo(250, 125);
  context.lineTo(350,125);
  context.lineTo(300,50);
  context.stroke();
  context.beginPath();
  context.arc(475,90,45, 0, 2 * Math.PI);
  context.stroke();
  context.beginPath()
  context.rect(600,50, 80, 80);
  context.stroke();
  context.rect(200,25, 550, 125);
  context.stroke();
}

initializeAnimation();
