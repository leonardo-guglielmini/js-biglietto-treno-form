const tripLength = document.getElementById("trip-length");

const userAge = document.getElementById("user-age");

const getInfo = document.getElementById("get-info");



const pricePerKm = 0.21

function getFinalPrice(length, age, price){

    let basePrice = length*price;

    return(age<18 ? ((basePrice/100)*80) : age>65 ? ((basePrice/100)*60) : basePrice)

}


getInfo.addEventListener("submit", function() {
    event.preventDefault();
    let tripLengthValue= tripLength.value;
    let userAgeValue = userAge.value;
    let finalPrice=getFinalPrice(tripLengthValue, userAgeValue, pricePerKm);
    console.log(`Il costo finale del biglietto risulta: ${finalPrice.toFixed(2)} \u20ac`);
})

