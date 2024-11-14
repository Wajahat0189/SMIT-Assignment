var display = document.getElementById('display')
var textOnScreen = false;
function addNum(num){
    if(textOnScreen == true){
    display.value = "";
    textOnScreen = false;
}if(display.value.length < 9){
display.value += num;
}
}
function addOpt(opt){
    if(display.value != ""){
    display.value =display.value.replace(/[\+\-\*\/]+$/, "") + opt;
}
}
function displayClear(){
    display.value = "";
    textOnScreen = false;
}

function simplification(){
    try{
        display.value = eval(display.value);
        textOnScreen = true;
    }
    catch(error){
        display.value = "Error";
        textOnScreen = true;
    }
    
}
function squareRoot(){
    simplification()
    if(Number(display.value)){
display.value = Math.sqrt(display.value);}
textOnScreen = true;
    }
function del(){
    display.value = display.value.slice(0,-1);
}
