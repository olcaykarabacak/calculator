const ekran = document.querySelector(".calculate-input");
const item = document.querySelector(".calculate-item");

let display="0";
let ilkDeger = null;
let operator = null;
let bekleyenDeger = false;

updateEkran();

function updateEkran(){
    ekran.value=display;
}

item.addEventListener("click", function(e){
    const element = e.target;
    if(!element.matches("button")) return;

    if(element.classList.contains("operator")){
        
        handleOperator(element.value);
        updateEkran(); 
        return;
    }
    
    if(element.classList.contains("decimal")){
        decimal();
        updateEkran(); 
        return;
    }
    //console.log("decimal".element.value);
    if(element.classList.contains("clear")){
        clear();
        updateEkran(); 
        return;
    }
    //console.log("clear".element.value);
    inputNumber(element.value);
    updateEkran();
});
function decimal() {
    if(!display.includes(".")){
        display+=".";
}};
function clear(){
    display="0"
}

function inputNumber(num){
    if(bekleyenDeger){
        display=num;
        bekleyenDeger=false;
    }else{
        display= display === "0" ? num: display + num;
    }
}

function handleOperator(nextOperator){
const value = parseFloat(display);
if(ilkDeger === null){
    ilkDeger = value;
}else if(operator){
const result=calculate(ilkDeger,value,operator);
display=String(result);
ilkDeger=result;
}
bekleyenDeger=true;
operator=nextOperator;
}

function calculate(first,second,operator){
    if(operator==="+"){
return first+second;
    }else if(operator==="-")
{
    return first-second;
}else if(operator==="*"){
    return first*second
}else if(operator==="/"){
    return first/second;
}
return second;
}
