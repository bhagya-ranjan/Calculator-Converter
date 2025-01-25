let decNum = document.querySelector(".dec-num");
let boxes = document.querySelectorAll(".num");
let clear = document.querySelector(".clear");
let delBtn = document.querySelector("#delete");
let binaryNum = document.querySelector(".binary-num");
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        let value = box.textContent;
        if(box.textContent === "." && decNum.textContent.includes(".")){
            return;
        }if(decNum.textContent.length == 1 && box.textContent === "0" && decNum.textContent === "0"){
            return;
        }
        else{
            decNum.textContent += value;
        }
        convertToBinary();
    })
})

clear.addEventListener("click" , ()=>{
    decNum.textContent = "";
    binaryNum.textContent = "";
})

delBtn.addEventListener("click" , ()=>{
    decNum.textContent = decNum.textContent.slice(0 , -1);
    convertToBinary();
})
function convertToBinary(){
    let decimalNumber = decNum.textContent;
    let binaryNumber = "";
    while(decimalNumber>0){
        let remainder = decimalNumber % 2;
        binaryNumber += remainder;
        decimalNumber = Math.floor(decimalNumber/2);
    }
    if(binaryNumber === ""){
        binaryNum.textContent = "0";
    }else{
        binaryNum.textContent = binaryNumber.split("").reverse().join("");
    }
}