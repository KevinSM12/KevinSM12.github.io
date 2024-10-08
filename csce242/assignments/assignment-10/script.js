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
    const flavorsSection = document.getElementById("flavors");

    flavors.forEach((flavor)=>{
        flavorsSection.append(getFlavor(flavor));
    });
};


const getFlavor = (flavor)=>{
    const section = document.createElement("section");
    section.classList.add("container");
    const img = document.createElement("img");
    img.src = "https://portiaportia.github.io/json/images/ice-creams/"+flavor.image;
    section.append(img);

    const title = document.createElement("section");
    title.classList.add("overlay","hidden");
    const p = document.createElement("p");
    p.innerHTML=flavor.name;

}

showFlavors();