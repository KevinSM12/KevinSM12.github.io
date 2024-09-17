/**when hamburger clicked toggle the list */
document.querySelector("#toggle-nav").onclick = ()=>{
    document.querySelector("#nav-items").classList.toggle("hide-sml");
}; 

/** dont got to link des hen clicked */
document.getElementById("click-link").onclick = (event)=>{
    event.preventDefault();//dont go to link's destination
    console.log("you clicked a link");
};

/**Change the ball color */
document.getElementById("txt-color").onchange = (e)=>{
    //document.getElementById("ball").style.setProperty("background-color",e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color",e.target.value);
};

/*move the ball don hen the button i clicked*/
let pos=0;
document.getElementById("move-down").onclick = ()=>{
    pos++;
    document.getElementById("ball").style.setProperty("top",pos+"px");
}