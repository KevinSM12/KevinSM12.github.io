const error = document.getElementById("error-msg");
document.getElementById("draw-btn").onclick = ()=>{
    const numStars = document.getElementById("num-stars").value;
    const starArea = document.getElementById("drawing-area");
    starArea.innerHTML = "";
    if(numStars<0){
        error.innerHTML = "*Input invalid";
        error.style.color = "red";
    }else{
        error.innerHTML = " ";
        for(let i=0;i<numStars;i++){
            const star = document.createElement("div");
            starArea.append(star);
            star.classList.add("one");
            star.style.position = "absolute";
            const width = getRandomInt(240);
            const height = getRandomInt(220);
            star.style.left = width+"px";
            star.style.top= height+"px";
            star.onclick = ()=>{
                error.style.color = "black";
                error.innerHTML = `I am star number ${i+1}`;
            }
        }
    }
}

const getRandomInt = (max)=>{
    return Math.floor(Math.random()*max);
}
