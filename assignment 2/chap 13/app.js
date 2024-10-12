var studentsName = [];
var studentsName = new Object();
var students= ["Ali", "Bilal"];
var num = [2,3,4];
var boolean = [true, false];
var mixed = [true, "Ali", 3];
var education =["SSC", "HSC", "BCS", "BS", "BCOM", "MS"," M. Phil.", "PhD"];
for(i=0; i<education.length; i++){
document.getElementById("q1").innerHTML += (i+1) + "." +education[i]+"<br>";
}

//Q2
var studentsName = [];
var score = [];
var total = 500;
for(i=0; i<3; i++){
    studentsName[i] = prompt("Enter Student name");
    score[i] = parseInt(prompt("Enter Score"));
    per = score[i]/total*100;
    rounded = per.toFixed(2)
document.getElementById("q2").innerHTML += (i+1)+ ". Score of "+ studentsName[i]+ " is " + score[i]+ ". Percentage: "+ per +"%<br>";
}
Q3.
var color = ["white", "yellow", "Green", "black","blue","red", "brown"];
console.log(color);
var addColorBegining = prompt("Enter color name which you want to add in the begining");
color.unshift(addColorBegining);
console.log(color);
var addColorending = prompt("Enter color name which you want to add in the ending");
color.push(addColorending);
console.log(color);
var addColorstart1 = prompt("Enter color name which you want to add in the start1");
var addColorstart2 = prompt("Enter color name which you want to add in the start2");
color.splice(0,0,addColorstart1, addColorstart2);
console.log(color);
color.shift();
console.log(color);
color.pop();
console.log(color);
var i = prompt("Enter number, on which position you want to add a color name ");
var addColorInBetween = prompt("Enter color name ");
color.splice(i,0,addColorInBetween);
console.log(color);
var index = prompt("Enter index from where you want to delete color's name");
var noOfcolors = prompt("How many colors you want to delete ");
color.splice(index,noOfcolors);
console.log(color);

Q4
var studentScore = [];
for(i=0; i<4; i++){
    studentScore[i]= parseInt(prompt("Enter you "+ (i+1)+ " Score."));   
}
console.log("Scores of Students : "+studentScore);
var z;
for(var i=0; i<studentScore.length; i++){
    for (var j=0; j<studentScore.length; j++)
    if(studentScore[i]>studentScore[j]){
        z = studentScore[j] ;
        studentScore[j]= studentScore[i];
         studentScore[i] = z;
    }
}
console.log("Ordered Scores of Students : "+studentScore);

Q5.
var cities = ["Karachi","Lahore","Islamabad","Faisalabad","Rawalpindi","Hyderabad"];
console.log("Cities list: " + cities);
var selectedCities = cities.slice(1,4);
console.log("Selected Cities list: "+ selectedCities);

Q6
var arr = ["This ", "is ", "my ", "cat"];
var a = arr.join('');
console.log("Array. \n"+ arr);
var a =" ";
for(var i = 0; i<arr.length; i++){
    a += arr[i];
}
console.log(a);

Q7
var device = [];
for (i=0; i<4; i++){
    device[i] = prompt("Enter device names");
}
console.log(device);
for (j=0; j<device.length; j++){
    console.log(device[j])
}

Q8
var device = [];
for (i=0; i<4; i++){
    device[i] = prompt("Enter device names");
}
console.log(device);
for (j=device.length-1; j>=0; j--){
    console.log(device.pop());
}console.log(device);

Q9
var manufacturers  = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select>')
    for(i=0; i<manufacturers.length; i++){
        document.write('<option value = " '+manufacturers[i]+ ' ">' +manufacturers[i]+ '</option> ')
    }
document.write('</select>')

Q10
var matrix = [[1,2,3]+"<br>"+[4,5,6]+"<br>"+[7,8,9]];
console.log(matrix[0]);
document.getElementById('q1').innerHTML = matrix;
 console.log(matrix[1]);
console.log(matrix[2]);
document.getElementById('q10').innerHTML = matrix;

Q11
var i
for(i=1; i<=10; i++){
    console.log(i)
}

Q12
var table = parseInt(prompt("Enter a number to show its multiplication table"));
var length = parseInt(prompt("Enter length multiplication table"));
for(i=1; i<=length; i++){
    console.log(table + " x "+i+ " = "+ table*i)
}

Q13
var fruit = ["Apple","Mango","Banana","Orange","Strawberry"];
for(i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

Q14
Counting 1-15
var i;
for(i=1; i<=15; i++){
    console.log(i)
}

Reverse counting 10-1
var i;
for(i=10; i>=1; i--){
    console.log(i)
}

Even numbers from 0-20
var j;
for(j=0; j<=20; j+=2){
    console.log(j)
}

Odd numbers from 0-20
var j;
for(j=1; j<=20; j+=2){
    console.log(j)
}

Series from 2-20
var j;
for(j=2; j<=20; j+=2){
    console.log(j+"k")
}

Q15
var largestNum = [2,65,5,43,9,1]
var a = "";
for(i=0; i<largestNum.length; i++){
    if(a<largestNum[i]){
    a = largestNum[i]
    }
}
console.log(a);

Q16
var largestNum = [2,65,5,43,9,1]
var a = largestNum[0];
for(i=0; i<largestNum.length; i++){
    if(a>largestNum[i]){
    a = largestNum[i]
    }
}
console.log(a);

Q17
Multiple of 5 numbers from 0-100
var j;
for(j=5; j<=100; j+=5){
    console.log(j)
}

Q18
var a =  ["cake", "apple pie", "cookie", "chips", "patties"];
var check = prompt("Write item name for checking availability");
for(i=0; i<a.length; i++){
    if(check == a[i]){
        console.log(check + " are available at index "+i+ " in our bakery")
    }
    else{
        console.log("We are sorry "+check + " is not available in our bakery") 
    }
}

Home work 3/10/24
var userName = prompt('Enter your name');
// var newName = prompt('Enter your name');
var t= "";
var a;
for(i=0; i<userName.length; i++){
    t +=userName[i]
    if(userName[i] == " " ){
        a = t.slice(0,-1);
        if(a.length>0){
            a= a.charAt(0).toUpperCase()+a.slice(1).toLowerCase();
        }
        t = "";
        console.log(a)
}
}
if(t.length>0){
    t= t.charAt(0).toUpperCase()+t.slice(1).toLowerCase();
    console.log(t)
}

var paragraph = "This is a simple paragraph with a simple example .";
var wordToReplace = prompt("Which word want to replace");
var newWord = prompt("Enter new word")

var currentWord = "";
var updatedParagraph = "";

// Loop through each character in the paragraph
for (var i = 0; i <= paragraph.length; i++) {
    // If we encounter a space or end of the string, check the current word
    if (i == paragraph.length || paragraph[i] == " ") { // If the word matches the word to replace, replace it
        if (currentWord === wordToReplace) {
            updatedParagraph += newWord;  // Add the new word
        } else {
            updatedParagraph += currentWord;  // Add the original word
        }
        
        // Add the space back after each word, except for the last one
        if (i != paragraph.length) {
            updatedParagraph += " ";
        }
        
        // Reset currentWord to start capturing the next word
        currentWord = "";
    } else {
        // Keep building the current word character by character
        currentWord += paragraph[i];
    }
}

console.log(updatedParagraph);  // Output: "This is a basic paragraph with a basic example."
var para = "My name is wajahat and my student name is also wajahat , wajahat is most common name";
var find = "wajahat";
var word = para.split(" ");
console.log(word);
var count=0;
for(i=0; i<word.length; i++){
    if(word[i] == find){
        count++;
    }
}
console.log(count);
