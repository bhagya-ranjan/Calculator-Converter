const BASE_URL= "https://currency-rate-exchange-api.onrender.com";
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("button");
let fromCurr = document.querySelector('.From select');
let toCurr = document.querySelector('.To select');
let msg = document.querySelector(".msg");
let amount = document.querySelector(".amount input");
for(let select of dropdowns){
    for(let currcode in currency_list){
        let newOpt = document.createElement("option");
        newOpt.innerText = currcode;
        newOpt.value = currcode;
        if(select.name == "From" && currcode == "USD"){
            newOpt.selected = "selected";
        }else if(select.name == "To" && currcode == "INR"){
            newOpt.selected = "selected";
        }
        select.append(newOpt);
    }
    select.addEventListener("change" , (evt)=>{
        updateFlag(evt.target);
    })
}
const updateRate = async()=>{
    let amtval = amount.value;
    if(amtval === "" || amtval < 0){
        amtval = 1;
        amount.value  = "1"
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rates[fromCurr.value.toLowerCase()];
    let ans = rate[toCurr.value.toLowerCase()];
    let finalamount = ans*amtval;
    amount.value = finalamount;
    msg.innerText = `1 ${fromCurr.value} = ${rate[toCurr.value.toLowerCase()]} ${toCurr.value} `;
}
const updateFlag = (element) =>{
    //element = option having selected currency
    let currcode = element.value;
    let countrycode = currency_list[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}
window.addEventListener("load" , updateRate);
button.addEventListener("click" , async (evt)=>{
    //this will prevent page to get refreshed every time button is clicked
    evt.preventDefault();
    updateRate();
})