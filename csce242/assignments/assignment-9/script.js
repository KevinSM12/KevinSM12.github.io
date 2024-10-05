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
        section.append(this.h3(this.name));
        section.append(this.picture(this.pic));
        

        const popOut = document.createElement("div");
        popOut.classList.add("hidden");
        popOut.append(this.h2(this.name));
        popOut.append(this.picture(this.pic));
        popOut.append(this.paragraph("Habitat", this.habitat));
        popOut.append(this.paragraph("Life span", this.lifeSpan));
        popOut.append(this.paragraph("Diet", this.food));
        popOut.append(this.paragraph("Size", this.size));

        section.onclick = () => {
            popOut.classList.toggle("hidden");
        };
        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    h2(info){
        const h2 = document.createElement("h2");
        h2.innerHTML = info;
        return h2;
    }

    h3(info){
        const h3 = document.createElement("h3");
        h3.innerHTML = info;
        return h3;
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