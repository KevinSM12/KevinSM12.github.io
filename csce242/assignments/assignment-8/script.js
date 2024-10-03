

const birthdayInfo = []
birthdayInfo[0]= "birthday";
birthdayInfo[1]= "Happy Birthday! It's the best/worst day of the year";
birthdayInfo[2]="images/birthday.jpg";
const clownInfo = []
clownInfo[0]="clown";
clownInfo[1]= "Clowns are supposed to be funny and entertaining. i find them really creepy.";
clownInfo[2]="images/clown.jpg";
const rainInfo = []
rainInfo[0]= "rain";
rainInfo[1]= "Rain rain go away come again another day. Idk I like the rain though.";
rainInfo[2]="images/rain.jpg";
const readInfo = []
readInfo[0]= "read";
readInfo[1]= "Reading can be fun a relaxing or intense and scary. All around not a fan.";
readInfo[2]="images/read.jpg";
const shovelInfo = []
shovelInfo[0]= "shovel";
shovelInfo[1]= "A promising young chap that has a goal in mind and the tool to do it!";
shovelInfo[2]="images/shovel.jpg";
const workInfo = []
workInfo[0]= "work";
workInfo[1]= "Nobody really likes work but everybody has to do it. Kinda sucks doesn't it!";
workInfo[2]="images/work.jpg";

let imgs = [];
imgs["birthday"]=birthdayInfo;
imgs["clown"]=clownInfo;
imgs["rain"]=rainInfo;
imgs["read"]=readInfo;
imgs["shovel"]= shovelInfo;
imgs["work"]=workInfo;

const table = document.getElementById("img-table")

console.log(imgs);
let count=0;
for(let img in imgs){
    if(count % 3 === 0){
        var tr = document.createElement("tr");
        table.append(tr);
    }   
    let image = document.createElement("img");
    const data = document.createElement("td");
    image.src=imgs[img][2];
    data.append(image);
    tr.append(data);
    data.onclick = ()=>{
        document.getElementById("title").innerHTML = imgs[img][0];
        document.getElementById("desc-txt").innerHTML = imgs[img][1];
    }
    count++;
}