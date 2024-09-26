const createTd = (data)=>{
    const td = document.createElement("td");
    td.innerHTML = data;
    return td;
}

const birthday = document.createElement("img").src = "images/birthday.jpg";
const clown = document.createElement("img").src = "images/clown.jpg";
const rain = document.createElement("img").src = "images/rain.jpg";
const read = document.createElement("img").src = "images/read.jpg";
const shovel = document.createElement("img").src = "images/shovel.jpg";
const work = document.createElement("img").src = "images/work.jpg";

let imgs = [];
imgs[birthday]="birthday","Happy Birthday! It's the best/worst day of the year";
imgs[clown]="clown","Clowns are supposed to be funny and entertaining. i find them either really creepy or just flat out stupid.";
imgs[rain]="rain","Rain rain go away come again another day. Idk I like the rain though.";
imgs[read]="read","Reading can be fun a relaxing or intense and scary. All around not a fan.";
imgs[shovel]="shovel","A promising young chap that has a goal in mind and the tool to do it!";
imgs[work]="work","Nobody really likes work but everybody has to do it. Kinda sucks doesn't it!";

const table = document.getElementById("img-table")

console.log(imgs);

for (let img in imgs){
    let tr = document.createElement("tr");
    const td = createTd(img);
    tr.append(td);
    td.onclick = ()=>{
        document.getElementById("title").innerHTML = imgs[img];
    }
}