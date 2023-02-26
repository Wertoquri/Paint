let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lw = 10;
let color = "black";
let isMouseDown = false;

let colorPicker = document.getElementById("color");
let lineW = document.getElementById("range");
let lineWeight = document.getElementById("rangeValue");

colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
});

lineW.addEventListener("change", () => {
    lw = lineW.value;
});

canvas.addEventListener("mousedown", () =>{
    isMouseDown = true
    ctx.beginPath()
});
canvas.addEventListener("mouseup", () => isMouseDown = false);
setInterval(() => lineWeight.innerHTML = lw, 0);

function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function fillIn() {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = lw;

        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, lw / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY);
    };

});

