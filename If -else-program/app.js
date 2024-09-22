// var unit = prompt("Enter number of units");
// if(unit <= 100 && unit >=0){
//     alert("Your "+ unit + " unit electricity bill amount is Rs 0.")
// }
// else if(unit > 100 && unit <=200){
//     alert("Your "+ unit + " unit electricity bill amount is Rs " + (unit-100)*5)
// }
// else if(unit > 200){
//     alert("Your "+ unit + " unit electricity bill amount is Rs " + (500+((unit-200)*10)))
// }
// else{
//     alert("Correct your value");
// }

// alert("Now grade program is starting");

// var per = prompt("Enter your percentage");
// if(per >=0 && per < 25){
//     alert("your grade is D");
// }
// else if(per >= 25 && per < 45){
//     alert("your grade is C");
// }
// else if(per >=45 && per < 50){
//     alert("your grade is B");
// }
// else if(per >=50 && per < 60){
//     alert("your grade is B+");
// }
// else if(per >=60 && per < 80){
//     alert("your grade is A");
// }
// else if(per >=80 && per <= 100){
//     alert("your grade is A+");
// }
// else{
//     alert("Your entered the wrong value")
// }
//Age program

// var per = prompt("Enter your age");
// if(per >=0 && per <=3){
//     alert("infant");
// }
// else if(per > 3 && per <=15){
//     alert("schoolboy");
// }
// else if(per > 15 && per <= 26){
//     alert("lover");
// }
// else if(per >26 && per <= 35){
//     alert("soldier");
// }
// else if(per >35 && per <=45){
//     alert("justice");
// }
// else if(per >45 && per < 60){
//     alert("pantaloon");
// }
// else if(per >=60){
//     alert("old age");
// }
// else{
//     alert("Correct your value");
// }

//Nested If program

var size = prompt("Please select which one you want.\n Normal flavour price are \n 1.Small = Rs.100 \n 2.Medium = Rs.130 \n 3.Large = Rs.150");
var small= 100;
var medium= 130;
var large= 150;
var flavour = prompt("Choose flavour \n 1.Normal = +0 \n 2.Premium = +30 \n 3.Signature = +50");
if(size == "small"){
    if(flavour == "normal"){
     alert("Your bill is Rs "+ small);   
    }
    else if(flavour == "premium"){
        alert("Your bill is Rs "+ (small+30));   
       }
    else if(flavour == "signature"){
        alert("Your bill is Rs "+ (small+50));   
       }
}
else if(size == "medium"){
    if(flavour == "normal"){
        alert("Your bill is Rs "+ medium);   
       }
       else if(flavour == "premium"){
           alert("Your bill is Rs "+ (medium+30));   
          }
       else if(flavour == "signature"){
           alert("Your bill is Rs "+ (medium+50));   
          }  
}
else if(size == "large"){
    if(flavour == "normal"){
        alert("Your bill is Rs "+ large);   
       }
       else if(flavour == "premium"){
           alert("Your bill is Rs "+ (large+30));   
          }
       else if(flavour == "signature"){
           alert("Your bill is Rs "+ (large+50));   
          }  
}
else{
    alert("Please enter the correct option")
}