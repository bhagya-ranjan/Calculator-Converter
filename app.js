let boxes = document.querySelectorAll(".num");
let signs = document.querySelectorAll(".sign");
let ans = document.querySelector(".answer");
let isAnsEmpty = true;
let delBtn = document.querySelector("#delete");
let clear =document.querySelector(".clear");
let finalAns = document.querySelector(".equals")
let arrsign = ['+' , '-' , '*' , '/' , '**'];



boxes.forEach(opt=>{
    opt.addEventListener("click" , ()=>{
        if(isAnsEmpty){
            ans.innerText = "";
            isAnsEmpty = false;
        }
        ans.innerText += opt.innerText;
    })
    isAnsEmpty = true;
    
})

for(let sign of signs){
    sign.addEventListener("click" , ()=>{
        if(isAnsEmpty){
            ans.innerText = "";
            isAnsEmpty = false;
        }
        let n = ans.innerText.length;
        for(let val of arrsign){
            if(ans.innerText.charAt(n-1) === val){
                ans.innerText = ans.innerText.slice(0,-1) + sign.innerText;
            }else{
                ans.innerText += sign.innerText;
            }
            break;
        }
    })
}

delBtn.addEventListener("click" , ()=>{
    let curText = ans.innerText;
    ans.innerText = curText.slice(0,-1);
    if(ans.innerText === ""){
        ans.innerText = 0;
        isAnsEmpty = true;
    }
})

clear.addEventListener("click" ,()=>{
    ans.innerText = "0";
    isAnsEmpty = true;
})

finalAns.addEventListener("click" , ()=>{
    let problem = ans.innerText;
    let solution = eval(problem);
    ans.innerText = solution;
})