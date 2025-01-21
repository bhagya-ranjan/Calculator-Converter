let weight = document.getElementById("weight");
let height = document.getElementById("height");
let calculate = document.getElementById("submitbtn");
let result = document.querySelector(".result");
let h = false;
let w = false;
let userWeight;
let userHeight;
let feedback;
let bmiValue;

//don't use 'input' eventlistener , use "change" as in :input: whenever u enter
//a number it gets printed like :- 4 , 45 , 456 (we enetered)
weight.addEventListener("change" , ()=>{ 
    userWeight = weight.value;
    w = true;
})
height.addEventListener("change" , ()=>{
    userHeight = height.value;
    h = true;
})
let showFeedback = ()=>{
    if (bmiValue < 18.5) {
    feedback = "(underweight)";
    }else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
       feedback = "(healthy weight)";
    }else if (bmiValue >= 25 && bmiValue <= 29.9){
        feedback = "(overweight)";
    }else{
        feedback = "(obese)";
    }
}
let showResult = ()=>{
    bmiValue = eval(userWeight / ((userHeight * userHeight)/10000)).toFixed(2);
    showFeedback();
    if(h && w){
        result.innerText = bmiValue + " " + feedback;
    }else{
        result.innerText = "Please enter both height and weight";
    }
    result.classList.remove("result");
    result.classList.add("results");
    w = false;
    h = false;
}
calculate.addEventListener("click" , showResult);
