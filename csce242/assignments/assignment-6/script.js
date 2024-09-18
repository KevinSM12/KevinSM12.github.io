//author: Kevin Snyder-Mounts

document.querySelector("#toggle-nav").onclick = ()=>{
    document.querySelector("#nav-items").classList.toggle("hide-sml");
}; 

document.getElementById("main-slider").oninput = ()=>{
    let val = document.getElementById("main-slider").value;
    document.getElementById("color-slider").style.backgroundColor = rgb(val,0,0);
}

