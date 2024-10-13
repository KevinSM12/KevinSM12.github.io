const getRecords = async() => {
    const url = "https://KevinSM12.github.io/csce242/json/record.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showRecords = async() => {
    const records = await getRecords();
    console.log(records);
    const recordsSection = document.getElementById("records");

    if (!records) {
        console.error("No records found");
        return;
    }
    records.forEach((record)=>{
        recordsSection.append(getRecord(record));
    });
};

const getRecord = (record) => {
    const section = document.createElement("section");
    document.getElementById("records").append(section);
    section.classList.add("one");
    const recordDiv = document.createElement("div");
    recordDiv.classList.add("record-section");
    section.append(recordDiv);
    const img = document.createElement("img");
    img.src = this.record_image;
    recordDiv.append(img);
    const title = document.createElement("h4");
    title.innerHTML = this.record_title;
    const desc = document.createElement("p");
    desc.innerHTML = this.record_description;

    section.onclick = ()=>{
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const content = document.createElement("div");
        content.classList.add("modal-content");
        modal.append(content);
        const h2 = document.createElement("h2");
        h2.innerHTML = this.record_title;
        content.append(h2);
        const recordHolders = document.createElement("div");
        recordHolders.classList.add("columns","record-holders");
        content.append(recordHolders);
        const holderSection = document.createElement("section");
        holderSection.classList.add("one","holder-section");
        recordHolders.append(holderSection);
        const holderImg = document.createElement("img");
        holderImg.src = this.record_holder_image;
        const h4 = document.createElement("h4");
        h4.innerHTML = "Current Record Holder:"
        holderSection.append(h4);
        const h3 = document.createElement("h3")
        h3.innerHTML = this.record_holder;
        holderSection.append(h3);
        const p = document.createElement("p");
        p.innerHTML = this.record_holder_description;
        holderSection.append(p);
        const prevHolderSection = document.createElement("section");
        prevHolderSection.classList.add("one","holder-section");
        recordHolders.append(prevHolderSection);
        const prevHolderImg = document.createElement("img");
        prevHolderImg.src = this.prev_record_holder_image;
        prevHolderSection.append(prevHolderImg);
        const prevh4 = document.createElement("h4");
        prevh4.innerHTML = "Previous Record Holder:"
        prevHolderSection.append(prevh4);
        const prevh3 = document.createElement("h3")
        prevh3.innerHTML = this.prev_record_holder;
        prevHolderSection.append(prevh3);
        const prevp = document.createElement("p");
        prevp.innerHTML = this.prev_record_holder_description;
        prevHolderSection.append(prevp);

        return modal;
    }

    return section;
};

showRecords();