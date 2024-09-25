document.getElementById("draw-btn").onclick = ()=>{
    const numStars = document.getElementById("num-stars").value;
    const starArea = document.getElementById("drawing-area");
    const left = 535;
    const top = 215;
    if(numStars<0){
        document.getElementById("error-msg").innerHTML = "*Input invalid";
    }else{
        document.getElementById("error-msg").innerHTML = " ";
        for(let i=0;i<numStars;i++){
            const star = document.createElement("div");
            starArea.append(star);
            star.classList.add("one");
            star.style.position = "absolute";
            star.style.left = left+"px";
            star.style.top = top+"px";
            const width = getRandomInt(240);
            const height = getRandomInt(220);
            star.style.left = left+width+"px";
            star.style.top= top+height+"px";
        }
    }
}

const getRandomInt = (max)=>{
    return Math.floor(Math.random()*max);
}
