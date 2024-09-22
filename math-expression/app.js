var x = parseInt(prompt("Enter first number"));
var y = parseInt(prompt("Enter first number"));
var z = x+y;
document.getElementById("div1").innerHTML= "Sum of "+ x +" and "+y +" is "+ z;

//Question2a
var z = x-y;
document.getElementById("div2").innerHTML= "Subtraction of "+ x +" and "+y +" is "+ z;

//Question2b 
var z = x*y;
document.getElementById("div3").innerHTML= ",Multiplication of "+ x +" and "+y +" is "+ z;

//Question2c
var z = x/y;
document.getElementById("div4").innerHTML= "Division of "+ x +" and "+y +" is "+ z;

//Question2d
var z = x % y;
document.getElementById("div5").innerHTML= "Modulus of "+ x +" and "+y +" is "+ z;

//Question3
var num;
document.getElementById("div6").innerHTML= "Value after variable declaration is "+ num;
num = 5;
document.getElementById("div7").innerHTML= "Initial value: "+ num;
num++;
document.getElementById("div8").innerHTML= "Value after increment is "+ num;
num=num+7;
document.getElementById("div9").innerHTML= "Value after addition is "+ num;
num--;
document.getElementById("div10").innerHTML= "Value after decrement is "+ num;
num=num%3;
document.getElementById("div11").innerHTML= "The remainder is "+ num;

//Question 4
var cost = 600;
var total_cost= 5*cost;
document.getElementById("div12").innerHTML= "Total cost of buy 5 tickets to a movie is "+ total_cost + "PKR.";

//Question 5
var x = parseInt(prompt("Write a number whose table you want"));
for(var i = 1;i<=10; i++){
    var t = x*i;
    document.getElementById("div13").innerHTML += x +" x "+ i + " = " + t +"<br>";  
}

//question 6 
var c = parseInt(prompt("Enter Celsius temperature"));
var f = parseInt(prompt("Enter Fahrenheit temperature"));
var F = (c*9/5)+32;
var C = (f-32)*5/9;
document.getElementById("div14").innerHTML = c + "oC is "+ F + "oF <br>";
document.getElementById("div14").innerHTML += f + "oF is "+ C + "oC";

//Question 7
var shippingCharges = 200;
var reg_quantity = parseInt(prompt("Price of 1 register is Rs 150 \n How much register you want"));
var jor_quantity = parseInt(prompt("Price of 1 journal is Rs 175 \n How much journal you want"));
var reg_cost = reg_quantity*150;
var jour_cost = jor_quantity*175;
var total_cost = reg_cost + jour_cost + shippingCharges;
document.getElementById("div15").innerHTML = "Cost of "+reg_quantity +" Register is Rs."+reg_cost +"<br>";
document.getElementById("div15").innerHTML += "Cost of "+jor_quantity +" Journal is Rs."+jour_cost +"<br> Shipping Charges is Rs.200<br>";
document.getElementById("div15").innerHTML += "Total cost of your order is Rs."+total_cost;

//Question 8
var total_marks = parseInt(prompt("Enter total marks"));
var obtained_marks = parseInt(prompt("Enter obtained marks"));
var per = (obtained_marks/total_marks)*100;
document.getElementById("div16").innerHTML = "Total marks: "+total_marks +"<br>";
document.getElementById("div16").innerHTML += "Obtained marks: "+obtained_marks +"%<br>";
document.getElementById("div16").innerHTML += "Percentage: "+ per;

//Question 9
var US_currency = parseInt(prompt("How much $US you have ?"));
var SA_currency = parseInt(prompt("How much Saudi Riyal you have ?"));
var pak_Rs = (US_currency*270)+(SA_currency*70);
document.getElementById("div17").innerHTML = "Total Currency in PKR: "+ pak_Rs;
