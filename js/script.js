function rectangulo() {
  var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 40, 80, 60);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
};

function circulo() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(225, 60, 40, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
  }
};

function cruz() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(150, 10);
    ctx.lineTo(150, 290);
    ctx.moveTo(10, 150);
    ctx.lineTo(290, 150);
    ctx.stroke();
  }
};

function triangulo() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(30,190);
    ctx.lineTo(30,290);
    ctx.lineTo(140,290);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
  }
};

function circuloIncompleto() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(225,225,60,Math.PI,Math.PI*0.5,false);
    ctx.arc(225,225,32,Math.PI*0.5,Math.PI*1,false);
    ctx.closePath()
    ctx.fill();
  }
};

var x = 150;
var y = 150;
var movx = 5;
var movy = 3;

function movimiento(){
  
  var lienzo = document.getElementById("canvas");
  var contexto = lienzo.getContext("2d");
  
  if( x >= 290 || x <= 10 )
    movx = movx*-1;
  if( y >= 290 || y <= 10 )
    movy = movy*-1;
  
  x = x+movx;
  y = y+movy;
  
  contexto.beginPath();
  contexto.clearRect(0,0,300,300);
  contexto.fillStyle="rgb(255,0,0)";
  contexto.arc(x, y, 20, 0, 360,false);
  contexto.fill();
  
  setTimeout("movimiento()",20);
}

