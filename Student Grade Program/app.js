// Student Grade Program
var userName = prompt("Enter your name:" , "" );
var eng = parseInt(prompt("Enter Your English Marks" , ""));
if(0>eng||eng>100){
    alert("Enter your marks between 0 to 100");
    var eng = parseInt(prompt("Enter Your English Marks" , ""));
};
var urdu = parseInt(prompt("Enter Your Urdu Marks" , ""));
if(0>urdu||urdu>100){
    alert("Enter your marks between 0 to 100");
    var urdu = parseInt(prompt("Enter Your urdu Marks" , ""));
};
var math = parseInt(prompt("Enter Your math Marks" , ""));
if(0>math||math>100){
    alert("Enter your marks between 0 to 100");
    var math = parseInt(prompt("Enter Your math Marks" , ""));
};
var isl = parseInt(prompt("Enter Your Islamiat Marks" , ""));
if(0>isl||isl>100){
    alert("Enter your marks between 0 to 100");
    var isl = parseInt(prompt("Enter Your Islamiat Marks" , ""));
};
var sci = parseInt(prompt("Enter Your Science Marks" , ""));
if(0>sci||sci>100){
    alert("Enter your marks between 0 to 100");
    var sci = parseInt(prompt("Enter Your Science Marks" , ""));
};
var total = eng + urdu + math + isl + sci ;
var percentage = (total/500)*100;
if(
    (eng < 0 || eng >100)|| isNaN(eng) ||
    (math < 0 || math >100)|| isNaN(math) ||
    (urdu < 0 || urdu >100)||isNaN(urdu) ||
    (isl < 0 || isl >100)|| isNaN(isl) ||
    (sci < 0 || sci >100) || isNaN(sci)
){
    alert("Some of your marks is out of range");
}
else{
if(percentage>=90 && percentage<=100){ 
    alert(userName +" "+"Your percentage is" + " "+ percentage + " " + "and Grade is A+");
}
else if(percentage>=80 && percentage<90){
    alert(userName +" "+"Your percentage is" + " "+ percentage +" "+"and Grade is A" );
}
else if(percentage>=70 && percentage<80){
    alert(userName +" "+"Your percentage is" + " "+ percentage +" "+"and Grade is B" );
}
else if(percentage>=60 && percentage<70){
    alert(userName +" "+"Your percentage is" + " "+ percentage +" "+"and Grade is C" );
}
else if(percentage>=50 && percentage<60){
    alert(userName +" "+"Your percentage is" + " "+ percentage +" "+"and Grade is D" );
}
else if(percentage>=0 && percentage<50){
    alert(userName +" "+"Your percentage is" + " "+ percentage +" "+"and your are Fail" );
}
};