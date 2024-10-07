// var x = [100, 20, 50, 110, 90, 120, 450, 70, 42, 85, 68, 122];
// var find = 90;
// for(i=0; i<x.length; i++){
//     if(x[i]==find){
//         console.log("found");
//         break
//     }
 
// }
// Q1
//?

//Q2
var int1 = parseInt(prompt("Enter first Intger"));
var int2 = parseInt(prompt("Enter second Intger"));
if(int1 > int2){
    document.getElementById("larger").innerHTML = int1;
}
else if(int1 < int2){
    document.getElementById("larger").innerHTML = int2;
}
else if(int1 == int2){
    document.getElementById("larger").innerHTML = "Numbers are equal";
}
else{
    document.getElementById("larger").innerHTML = "Invalid data"; 
}




