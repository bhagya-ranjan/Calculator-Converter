const dropdowns = document.querySelectorAll(".conversion select");
const button = document.querySelector(".clear");
const clearButton = document.querySelector("#clear");
let from = document.querySelector('.From select');
let to = document.querySelector('.To select');
let result = document.querySelector(".result");
let input = document.querySelector("#num");
let convert = ()=>{
    if(from.value == "Celsius"){
        convertFromCelsius();
    }else if(from.value == "Kelvin"){
        convertFromKelvin();
    }
    else if(from.value == "fahrenheit"){
        convertFromfahrenheit();
    }
}
let convertFromCelsius = () =>{
    if(to.value === "fahrenheit"){
        result.innerText = ((input.value) * (9/5)) + 32 + " F";
    }
    else if(to.value === "Kelvin"){
        result.innerText = (273.15 + Number(input.value) )+ " K";
    }
    else{
        result.innerText = input.value + " C";
    }
}
let convertFromfahrenheit = () =>{
    if(to.value === "Celsius"){
        result.innerText = ((input.value - 32 ) * (5/9)).toFixed(2 ) + " F";
    }
    else if(to.value === "Kelvin"){
        result.innerText = ((input.value - 32 ) * (5/9)).toFixed(2 ) + 273.15 + " K";
    }
    else{
        result.innerText = input.value + " F";
    }
}
let convertFromKelvin = () =>{
    if(to.value === "Celsius"){
        result.innerText = input.value - 273.15 + " C";
    }
    else if(to.value === "fahrenheit"){
        result.innerText = ((input.value - 273.15 ) * (9/5) + 32).toFixed(2 ) + " F";
    }
    else{
        result.innerText = input.value + " K";
    }
}
let clearFunc = () =>{
    input.value = 0;
    result.innerText = "";
}
button.addEventListener("click" , convert);
clearButton.addEventListener("click" , clearFunc);