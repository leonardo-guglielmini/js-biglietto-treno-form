const tripLength = document.getElementById("trip-length");
const userAge = document.getElementById("user-age");
const userName = document.getElementById("user-name");

const getInfo = document.getElementById("get-info");

const userInfoTable =  document.getElementById("user-info-table");


let userInfoValues = [];

const tableHeaders = ["Nominativo", "Lunghezza della tratta", "Età del passeggero", "Prezzo totale"];


const pricePerKm = 0.21

function createTableHead(table,data){
    let thead =  table.createTHead();
    let tbody = table.createTBody();
    let trow = thead.insertRow();
    for(let i =0; i<data.length;i++){
        let th =  document.createElement("th");
        let text = document.createTextNode(data[i]);
        th.appendChild(text);
        trow.appendChild(th);
    }
    return tbody;
}

function populateTable(tbody,data){
    let trow = tableBody.insertRow();
    for(let i=0; i<data.length;i++){
        let td= trow.insertCell();
        let text = document.createTextNode(data[i]);
        td.appendChild(text);
    }
}

function getFinalPrice(length, age, price){

    let basePrice = length*price;

    return(age<18 ? ((basePrice/100)*80) : age>65 ? ((basePrice/100)*60) : basePrice)

}


let tableBody=createTableHead(userInfoTable, tableHeaders);

getInfo.addEventListener("submit", function() {
    event.preventDefault();
    let userNameValue = userName.value;
    let tripLengthValue = tripLength.value;
    let userAgeValue = userAge.value;
    let finalPrice=getFinalPrice(tripLengthValue, userAgeValue, pricePerKm);
    userInfoValues.push(userNameValue,tripLengthValue,userAgeValue,finalPrice);
    //console.log(`Il costo finale del biglietto risulta: ${finalPrice.toFixed(2)} \u20ac`);

    populateTable(tableBody, userInfoValues);

    userName.value="";
    tripLength.value="";
    userAge.value="";
})

