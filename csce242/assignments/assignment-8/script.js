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

const birthdayInfo = []
birthdayInfo[0]= "birthday";
birthdayInfo[1]= "Happy Birthday! It's the best/worst day of the year";
const clownInfo = []
clownInfo[0]="clown";
clownInfo[1]= "Clowns are supposed to be funny and entertaining. i find them either really creepy or just flat out stupid.";
const rainInfo = []
rainInfo[0]= "rain";
rainInfo[1]= "Rain rain go away come again another day. Idk I like the rain though.";
const readInfo = []
readInfo[0]= "read";
readInfo[1]= "Reading can be fun a relaxing or intense and scary. All around not a fan.";
const shovelInfo = []
shovelInfo[0]= "shovel";
shovelInfo[1]= "A promising young chap that has a goal in mind and the tool to do it!";
const workInfo = []
workInfo[0]= "work";
workInfo[1]= "Nobody really likes work but everybody has to do it. Kinda sucks doesn't it!";

let imgs = [];
imgs[birthday]=birthdayInfo;
imgs[clown]=clownInfo;
imgs[rain]=rainInfo;
imgs[read]=readInfo;
imgs[shovel]= shovelInfo;
imgs[work]=workInfo;

const table = document.getElementById("img-table")

console.log(imgs);

for (let img in imgs){
    let tr = document.createElement("tr");
    const td = createTd(img);
    tr.append(td);
    td.onclick = ()=>{
        document.getElementById("title").innerHTML = imgs[img][0];
        document.getElementById("desc-txt").innerHTML = imgs[img][1];
    }
}