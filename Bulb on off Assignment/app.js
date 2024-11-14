var bulbstatus = "ON";
document.getElementById('btn').innerHTML = bulbstatus;
function bulbOnOff(){
if(bulbstatus == "OFF"){
    document.getElementById('bulb').src='https://freesvg.org/img/afaulconbridge-Lightbulb-OnOff-2.png';
    bulbstatus ="ON";
    document.getElementById('btn').innerHTML = bulbstatus;

}
else{
    document.getElementById('bulb').src='https://freesvg.org/img/afaulconbridge-Lightbulb-OnOff-1.png';
    bulbstatus ="OFF";
    document.getElementById('btn').innerHTML = bulbstatus;

}
}