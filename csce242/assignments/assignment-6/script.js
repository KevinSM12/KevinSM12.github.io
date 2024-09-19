//author: Kevin Snyder-Mounts

const arrow = document.getElementById("arrow");
document.querySelector("#toggle-nav").onclick = ()=>{
    if(document.getElementById("nav-items").contains("hide-sml")){
        arrow.innerHTML = "&#8593;";
        document.querySelector("#nav-items").classList.toggle("hide-sml");
    }
}; 

document.getElementById("main-slider").oninput = ()=>{
    let val = document.getElementById("main-slider").value;
    document.getElementById("color-slider").style.backgroundColor = 'rgb(val,0,0)';
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

const smlbtn = document.getElementById("sml");
const medbtn = document.getElementById("med");
const lrgbtn = document.getElementById("lrg");
document.getElementById("pic-choose").onclick = (event)=>{
         
};