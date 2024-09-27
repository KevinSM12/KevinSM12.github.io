const createTd = (data)=>{
    const td = document.createElement("td");
    td.innerHTML = data;
    return td;
}

const birthday = document.createElement('img');
const clown = document.createElement('img');
const rain = document.createElement('img');
const read = document.createElement('img');
const shovel = document.createElement('img');
const work = document.createElement('img');

birthday.src = "images/birthday.jpg";
clown.src = "images/clown.jpg";
rain.src = "images/rain.jpg";
read.src = "images/read.jpg";
shovel.src = "images/shovel.jpg";
work.src = "images/work.jpg";

const birthdayInfo = []
birthdayInfo[0]= "birthday";
birthdayInfo[1]= "Happy Birthday! It's the best/worst day of the year";
const clownInfo = []
clownInfo[0]="clown";
clownInfo[1]= "Clowns are supposed to be funny and entertaining. i find them really creepy.";
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

for(let img in imgs){
    let tr = document.createElement("tr");
    table.append(tr);
    const td = createTd(img);
    tr.appendChild(td);
    td.onclick = ()=>{
        document.getElementById("title").innerHTML = imgs[img][0];
        document.getElementById("desc-txt").innerHTML = imgs[img][1];
    }
}