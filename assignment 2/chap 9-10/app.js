var city = prompt("Enter city name");
if(city == "karachi"){
    document.getElementById("city").innerHTML = "Welcome to the city of light";
}
else if(city == "lahore"){
    document.getElementById("city").innerHTML = "Heart of Pakistan";
}
else{
    document.getElementById("city").innerHTML = "not match";
}

// Q2
var gender = prompt("Enter your gender");
if(gender == "female"){
    document.getElementById("gender").innerHTML = "Good Morning Ma'am";
}
else if(gender == "male"){
    document.getElementById("gender").innerHTML = "Good Morning Sir";
}
else{
    document.getElementById("gender").innerHTML = "Good morning Transgender";
}

// Q3
var traffic = prompt("Enter your traffic light color");
if(traffic == "red"){
    document.getElementById("traffic").innerHTML = "Must  Stop";
}
else if(traffic == "yellow"){
    document.getElementById("traffic").innerHTML = "Ready to move";
}
else if(traffic == "green"){
    document.getElementById("traffic").innerHTML = "Move now";
}
else{
    document.getElementById("traffic").innerHTML = "Enter correct color name"; 
}

//Q4
var fuel = prompt("How much fuel is remaining in litres ? ");
if(fuel <=0.25){
    document.getElementById("fuel").innerHTML = "Please refill the fuel in your car.";
}
else{
    document.getElementById("fuel").innerHTML = "no need to refill";
}

//Q5 
var secret = 5
var num = parseInt(prompt("Guess  the secret number"));
if(num == secret){
    document.getElementById("secret").innerHTML = "BINGO ! Correct Answer";
}
else if(num == secret+1){
    document.getElementById("secret").innerHTML = "Close enough";
}
else if(num == secret-1){
    document.getElementById("secret").innerHTML = "Close enough";
}
else{
    document.getElementById("secret").innerHTML = "Wrong answer ";
}

//Q6
var number = parseInt(prompt("Enter number for check weather the number is divisible by 3 or not"));
if (number%3 == 0){
    document.getElementById("number").innerHTML = "Given number is divisible by 3 ";
}
else{
    document.getElementById("number").innerHTML = "Given number is not divisible by 3 ";
}
//Q7
var num1 = parseInt(prompt("Enter First number"));
var num2 = parseInt(prompt("Enter second number"));
var sum = num1+num2;
var sub = num1-num2;
var multiply = num1*num2;
var divide = num1/num2;
var remainder = num1%num2;
document.getElementById("cal").innerHTML = "First number is " + num1 +"<br>";
document.getElementById("cal").innerHTML += "First number is " + num2 +"<br>";
document.getElementById("cal").innerHTML += "Sum : " + sum +"<br>";
document.getElementById("cal").innerHTML += "Sub : " + sub +"<br>";
document.getElementById("cal").innerHTML += "multiplication : " + multiply +"<br>";
document.getElementById("cal").innerHTML += "divide : " + divide +"<br>";
document.getElementById("cal").innerHTML += "remainder : " + remainder +"<br>";