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

const smlPic = document.getElementById("sml-pic");
const medPic = document.getElementById("med-pic");
const lrgPic = document.getElementById("lrg-pic");
const somefunction = (e)=>{
    if(e.target.innerHTML == "Small"){
        smlPic.classList.remove("hide");
        if(!medPic.classList.contains("hide")){
            medPic.classList.add("hide");
        }
        if(!lrgPic.classList.contains("hide")){
            lrgPic.classList.add("hide");
        }
    }
    if(e.target.innerHTML == "Medium"){
        medPic.classList.remove("hide");
        if(!smlPic.classList.contains("hide")){
            smlPic.classList.add("hide");
        }
        if(!lrgPic.classList.contains("hide")){
            lrgPic.classList.add("hide");
        }
    }
    if(e.target.innerHTML == "Large"){
        lrgPic.classList.remove("hide");
        if(!medPic.classList.contains("hide")){
            medPic.classList.add("hide");
        }
        if(!smlPic.classList.contains("hide")){
            smlPic.classList.add("hide");
        }
    }       
};
document.getElementById("sml").onclick = somefunction;
document.getElementById("med").onclick = somefunction;
document.getElementById("lrg").onclick = somefunction;