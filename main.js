let body = document.body;

let counter_display = document.getElementById('count');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let cc = document.getElementById('cc');

let h1 = document.querySelector('h1');

let count = 0;

function Increment(){
count++;
counter_display.innerHTML = count;
body.removeChild(h1);
}

function Decrement(){
count--;
counter_display.innerHTML = count;
body.removeChild(h1);
}

cc.onclick = function(){
counter_display.innerHTML = 0;
body.removeChild(h1);
}