class Bird {
    constructor(name, habitat, lifeSpan, food, size, pic){
        this.name = name;
        this.habitat = habitat;
        this.food = food;
        this.lifeSpan = lifeSpan;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("bird");
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        section.append(h3);
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const popOut = document.createElement("div");

        firstColumn.append(this.picture(this.pic));

        popOut.classList.add("hidden");
        popOut.append(this.paragraph("Habitat", this.habitat));
        popOut.append(this.paragraph("Life span", this.lifeSpan));
        popOut.append(this.paragraph("Diet", this.food));
        popOut.append(this.paragraph("Size", this.size));

        section.onclick = () => {
            secondColumn.classList.toggle("hidden");
        };

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p =document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const birds = [];
birds.push(new Bird("Parrot","Tropical","40-60 years","seeds, fruit, and anthropods","40 inches","parrot.jpg"));
birds.push(new Bird("Red Junglefowl","Tropical","12-15 years","fruits and seeds","28 inches","red-junglefowl.jpg"));
birds.push(new Bird("Burrowing Owl","Western US","6-8 years","large insects and small rodents","7-11 inches","Burrowing-owl.jpg"));
birds.push(new Bird("Blue Jay","Eastern and Central US","7 years","nuts, corn, and grain","9-12 inches","blue-jay.jpg"));

birds.forEach((bird)=>{
    document.getElementById("bird-list").append(bird.item);
});