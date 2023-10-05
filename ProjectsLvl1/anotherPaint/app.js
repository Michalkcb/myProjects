let canvas = document.getElementById('canvas');
let newProjectBtn = document.getElementById('new-project');
let sizeInput = document.getElementById('size');
let colorInput = document.getElementById('color');

let ctx = canvas.getContext("2d");
let isMouseDown = false;
let color ="#000";
let size = 10;
let x,y;



function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
function drawLine(x, y, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size *2;
    ctx.stroke();
}

newProjectBtn.addEventListener("click", function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

sizeInput.addEventListener('change', function (e) {
    size = document.getElementById('size').value;
});

colorInput.addEventListener('change', function (e) {
    color = document.getElementById('color').value;
});

canvas.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(x + " " + y);

});



canvas.addEventListener('mousemove', function (e) {
    if (!isMouseDown) return;
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
});

canvas.addEventListener('mouseup', function () {
    isMouseDown = false;
    x = null;
    y = null;
});
