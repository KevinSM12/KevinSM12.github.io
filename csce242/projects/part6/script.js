document.getElementById("toggle-nav").onclick = ()=>{
    document.getElementById("nav-items").classList.toggle("hide");
}

const getRecords = async() => {
    const url = "csce242/json/record.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
}

//shows the list of shoes
const showRecords = async() => {
    const records = await getRecords();
    const recordsSection = document.getElementById("records-section");

    records.forEach((record)=>{
        recordsSection.append(getRecord(record));
    });
};

const getRecord = (record) => {
    const section = document.createElement("section");
    
    return section;
}

showShoes();