const dostuff = ()=>{ //standard for creating methods in javascript
    alert("hello world");
}

const myButton = document.getElementById("btn-click");
//myButton.onclick = dostuff;
myButton.onclick = ()=>{
    document.getElementById("message").innerHTML = "hello everyone";//access inside html element
    document.getElementById("stuff").classList.add("special");//add class to element
}

//add a second button
//when clicked change text to goodbye everyone, remove special styles

const newButton = document.getElementById("btn-new");

newButton.onclick = ()=>{
    document.getElementById("message").innerHTML = "goodbye everyone";
    document.getElementById("stuff").classList.remove("special");
}

document.getElementById("btn-column").onclick = ()=>{
    document.getElementById("section-1").classList.add("remove");
}

//showing data from input log
/*
document.getElementById("txt-first-name").onkeyup =()=>{
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}
*/

document.getElementById("txt-first-name").onkeyup = (event)=>{
    document.getElementById("result").innerHTML = event.target.value;
}
