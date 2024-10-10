const getFlavors = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";
    try {
        const respo = await fetch(url);
        return respo.json();
    } catch(error){
        console.log(error);
    }
}

const showFlavors = async() => {
    const flavors = await getFlavors();
    const flavorsSection1 = document.getElementById("flavors1");
    const flavorsSection2 = document.getElementById("flavors2");
    let count=0;

    flavors.forEach((flavor)=>{
        if(count%2 === 0){
            console.log(count);
            flavorsSection1.append(getFlavor(flavor));
        }else{
            console.log(count);
            flavorsSection2.append(getFlavor(flavor));
        }
        count++;
    });
};


const getFlavor = (flavor)=>{
    const section = document.createElement("section");
    section.classList.add("container","one");
    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${flavor.image}`;
section.append(img);

    const title = document.createElement("section");
    title.classList.add("overlay");
    section.append(title);
    const p = document.createElement("p");
    p.innerHTML=flavor.name;
    title.append(p);

    return section;
}

showFlavors();