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
    img.src = record.record_image;
    recordDiv.append(img);
    const title = document.createElement("h4");
    title.innerHTML = record.record_title;
    const desc = document.createElement("p");
    desc.innerHTML = record.record_description;

    section.onclick = ()=>{
        const modal = document.createElement("div");
    }

    return section;
};

showRecords();