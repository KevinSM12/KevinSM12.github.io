//author: Kevin Snyder-Mounts

let val = slider.nodeValue;
document.getElementById("main-slider").oninput = ()=>{
    document.getElementById("slider-image").style.left = document.getElementById("main-slider").value;
}

document.getElementById("rand-image").onclick = ()=>{
    location.reload();
}

let num = 0;
document.getElementById("counter").onclick = ()=>{
    num = num+1;
    document.getElementById("count").innerHTML = num;
}