//author: Kevin Snyder-Mounts

let val = '${slider.value}px';
document.getElementById("main-slider").oninput = ()=>{
    document.getElementById("slider-image").style.left = val;
}

document.getElementById("rand-image").onclick = ()=>{
    location.reload();
}

let num = 0;
document.getElementById("counter").onclick = ()=>{
    num++;
    document.getElementById("count").innerHTML = num;
}