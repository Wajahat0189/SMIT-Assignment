
function counter(){
var currenDate = new Date();
var endDate = new Date(2024,11,31);
var duration = endDate - currenDate;
var days = Math.floor(duration/(1000*60*60*24));
var remainder = duration %(1000*60*60*24) ;
var hours = Math.floor(remainder/(1000*60*60));
var remainder = duration %(1000*60*60);
var mints = Math.floor(remainder/(1000*60));
var remainder = duration %(1000*60);
var seconds = Math.floor(remainder/(1000));
document.getElementById("counter").innerHTML = `${days} Days ${hours} Hour(s) ${mints} Minutes ${seconds} Seconds `
}
counter();
setInterval(counter,1000);


