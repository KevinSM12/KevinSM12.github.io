//author: Kevin Snyder-Mounts

let arrow = document.getElementById("arrow");
arrow.onclick = ()=>{
    console.log('yay');
    if(document.getElementById("nav-items").classList.contains('hide-sml')){
        arrow.innerHTML = '&#8593;';
        document.querySelector("#nav-items").classList.toggle("hide-sml");
    }else if(!document.getElementById("nav-items").classList.contains("hide-sml")){
        arrow.innerHTML = '&#8595;';
        document.querySelector("#nav-items").classList.toggle("hide-sml");
    }
}; 

document.getElementById("main-slider").oninput = ()=>{
    let val = document.getElementById("main-slider").value;
    document.getElementById("color-slider").style.backgroundColor = 'rgb('+val+',0,0)';
};

const color = document.getElementById("color-slider");
const pic = document.getElementById("pic-choose");
document.getElementById("exercise-2").onclick = ()=>{
    if(!color.classList.contains("hide")){
        color.classList.add("hide");
    }
    if(pic.classList.contains("hide")){
        pic.classList.remove("hide");
    }
};

document.getElementById("exercise-1").onclick = ()=>{
    if(color.classList.contains("hide")){
        color.classList.remove("hide");
    }
    if(!pic.classList.contains("hide")){
        pic.classList.add("hide");
    }
};

const smlbtn = document.getElementById("sml");
const medbtn = document.getElementById("med");
const lrgbtn = document.getElementById("lrg");
smlbtn.onclick||medbtn.onclick||lrgbtn.onclick = (event)=>{
    if(event.target.innerHTML = "Small"){
        document.getElementById("sml-pic").classList.toggle("hide");
    }
    if(event.target.innerHTML = "Medium"){
        document.getElementById("med-pic").classList.toggle("hide");
    }
    if(event.target.innerHTML = "Large"){
        document.getElementById("lrg-pic").classList.toggle("hide");
    }          
};