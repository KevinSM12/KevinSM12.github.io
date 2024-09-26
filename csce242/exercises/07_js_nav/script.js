/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Don't go to links desitination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //don't go to the links destination
    console.log("you clicked a link");
};

/* Change the ball color */
document.getElementById("txt-color").onchange = (e) => {
    //document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
}

/* Move the ball down when the button is clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
}

/* Show color message */
document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angry";
    }
    else if(color == "blue"){
        mood = "moody";
    }
    else {
        mood = "undefined";
    }

    messageP.innerHTML = `You chose ${color} so you are ${mood}`;
}

/* Donations */
/* Get the number
- If it is not a number or it is negative, show an error in the error
Otherwise First show the percent out of 10000 towards goal
Next show a visual representation with a box and a gradient */
document.getElementById("btn-donate").onclick = () => {
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";   //clear previous error

    //if we got an invalid donation -> not a number or less than 0
    if(isNaN(donation) || donation < 0){
        error.innerHTML = "* Invalid";
        return;
    }
   
    const percentGoal = donation / goal * 100;
    console.log(percentGoal + "%");
    document.querySelector(":root").style.setProperty("--funds", percentGoal + "%");
}

/*for loop*/
document.getElementById("btn-loop").onclick = ()=>{
    const ul = document.getElementById("numbers");
    
    for(let i=0;i<10;i++){
        const li = document.createElement("li");
        li.innerHTML = i+1;
        ul.append(li);
        li.setAttribute("id","li"+i);
        li.onclick = ()=>{
            console.log(`i is currently ${i}`);
        }
    }
};

document.getElementById("go-btn").onclick = ()=>{

    const min = parseInt(document.getElementById("start-txt").value);
    console.log(min);
    const mat = parseInt(document.getElementById("end-txt").value);
    console.log(mat);

    document.getElementById("numbers-display").innerHTML = "";
    for(let i=0;i<Math.abs(mat-min)+1;i++){
        const li = document.createElement("li");
        if(min<mat){
            li.innerHTML = min+i;
            document.getElementById("numbers-display").append(li);
            li.setAttribute("id","li"+i);
        }else{
            li.innerHTML = min-i;
            document.getElementById("numbers-display").append(li);
            li.setAttribute("id","li"+i);
        }
    }
}

let counter = 0;
let updateCount;

document.getElementById("btn-count").onclick = (e)=>{
    const count = document.getElementById("count");
    if(e.target.innerHTML == "Start"){
        e.target.innerHTML = "Stop";
        updateCount = setInterval(()=>{
            counter++;
            count.innerHTML = counter;
        },1000);
    }else{
        e.target.innerHTML = "Start"
        clearInterval(updateCount);
    }
}

/*Js Arrays*/
let toys = ["drum","ball","rope","ballon","tire"];

toys.forEach((toy)=>{
    const p =document.createElement("p")
    p.innerHTML = toy;
    document.getElementById("list").append(p);  
});

/*shows you can get the index if needed
toys.forEach((toy, i)=>{
    console.log(i+toy);    
});

old way of iterating through a list
for(let i=0;i<toys.length;i++){
    console.log(toys[i]);
}
*/

/*Santas expenses*/
let toyPrices = [];
toyPrices["barbie"]=7.54;
toyPrices["doll house"]=86.23;
toyPrices["slide"]=34.23;
toyPrices["ken"]=20.00;
toyPrices["bike"]=7.54;

const listPrices = document.getElementById("list-prices");
const table = document.getElementById("price-table");

const createTd = (data)=>{
    const td = document.createElement("td");
    td.innerHTML = data;
    return td;
}

/* associative array*/
for(let toy in toyPrices){
    let tr = document.createElement("tr");
    const td1 = createTd(toy);
    const td2 = createTd(toyPrices[toy]);
    tr.append(td1);
    tr.append(td2);

    tr.onclick = ()=>{
        console.log(toy+": "+toyPrices[toy]);
    }
}

