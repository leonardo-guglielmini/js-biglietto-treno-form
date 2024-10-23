const tripLength = document.getElementById("trip-length");
const userAge = document.getElementById("user-age");
const userName = document.getElementById("user-name");

const getInfo = document.getElementById("get-info");

const userInfoTable =  document.getElementById("user-info-table");

let userInfoValuesCounter=0;


let userInfoValues = [
    [],[],[],[],[]
];

const tableHeaders = ["Nominativo", "Lunghezza della tratta", "Età del passeggero", "Prezzo totale"];


const pricePerKm = 0.21

function createTableHead(table,data){
    let thead =  table.createTHead();
    
    let trow = thead.insertRow();
    for(let i =0; i<data.length;i++){
        let th =  document.createElement("th");
        let text = document.createTextNode(data[i]);
        th.appendChild(text);
        trow.appendChild(th);
    }
}

function populateTable(table,data,dataCounter){
    
    let tbody;
    tbody = table.createTBody();
     // reset tbody
    if(dataCounter>0){
        //console.log("tbody removed")
        table.removeChild(table.getElementsByTagName("tBody")[0]);
    }
    

    for(let i=0; i<dataCounter+1;i++){
        let trow = tbody.insertRow();
        for(let j=0;j<data[i].length;j++){
            let td= trow.insertCell();
            let text = document.createTextNode(data[i][j]);
            td.appendChild(text);
        }
        
    }
}

function getFinalPrice(length, age, price){

    let basePrice = length*price;

    return(age<18 ? ((basePrice/100)*80) : age>65 ? ((basePrice/100)*60) : basePrice).toFixed(2)

}

createTableHead(userInfoTable, tableHeaders);

getInfo.addEventListener("submit", function() {
    event.preventDefault();
    let userNameValue = userName.value;
    let tripLengthValue = tripLength.value;
    let userAgeValue = userAge.value;
    let finalPrice=getFinalPrice(tripLengthValue, userAgeValue, pricePerKm);

    let tempArray=[];
    tempArray.push(userNameValue,tripLengthValue,userAgeValue,finalPrice);

    for(let i=0;i<4;i++){
        userInfoValues[userInfoValuesCounter][i]=tempArray[i];
    }       

    //console.log(`Il costo finale del biglietto risulta: ${finalPrice.toFixed(2)} \u20ac`);
    //console.log(userInfoValues[userInfoValuesCounter])
    
    populateTable(userInfoTable, userInfoValues, userInfoValuesCounter);

    userInfoValuesCounter++;

    userName.value="";
    tripLength.value="";
    userAge.value="";
})

