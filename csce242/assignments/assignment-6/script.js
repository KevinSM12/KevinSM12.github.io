//author: Kevin Snyder-Mounts

document.querySelector("#toggle-nav").onclick = ()=>{
    document.querySelector("#nav-items").classList.toggle("hide-sml");
    document.getElementById("down-arrow").classList.toggle("hide");
    document.getElementById("up-arrow").classList.toggle("hide-sml");
}; 

document.getElementById("main-slider").oninput = ()=>{
    let val = document.getElementById("main-slider").value;
    document.getElementById("color-slider").style.backgroundColor = rgb(val,0,0);
};

const color = document.getElementById("color-slider");
const pic = document.getElementById("pic-choose");
document.getElementById("exercise-2").onclick = ()=>{
    if(!color.classList.contains("hide")){
        color.classList.add("hide");
    }else if(pic.classList.contains("hide")){
        pic.classList.remove("hide");
    }
};

document.getElementById("exercise-1").onclick = ()=>{
    if(color.classList.contains("hide")){
        color.classList.remove("hide");
    }else if(!pic.classList.contains("hide")){
        pic.classList.add("hide");
    }
};