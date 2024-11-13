// Chapter 21 - 25
//Q1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Hello, "+ firstName+" "+ lastName);

//Q2
// var favMobile = prompt("Enter favourite mobile model name?");
// alert("Your favourite mobile phone is: "+ favMobile +"\n" + "The length of string: "+ favMobile.length);

//Q3
// var pakIndex = prompt("Enter any word for finding the index No of n");
// var found = false;
// for(var i=0; i<pakIndex.length; i++){
//     if(pakIndex[i]=== "n"){
//         alert("The Index of 'n' is: " +i);
//         found = true;   
//         break
//     }
// }
// if(!found){
//     alert("The given word does not have a letter 'n'.")
// }

// OR Q3
// let word = "pakistan";
// let letter = "n";
// let indices = [];

// for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//         indices.push(i);
//     }
// }

// console.log(indices); 

//Q4
// var word = "Hello World";
// var letter = "l"
// var index = word.lastIndexOf(letter);
// alert(index);

//Q5.
// var word = "Pakistani";
// var character = word.charAt(3);
// alert("String: "+ word +"\nCharacter at index 3: "+ character);

//Q7.
// var cityName = "Hyderabad";
// alert(cityName);
// updatedCity = cityName.replace("Hyder", "Islam");
// alert(updatedCity);
 
 //Q8.
//  var message = "Ali and Sami are best friends. They play cricket and football together.";
//  updatedMessage = message.replace(/and/g , "&");
//  console.log("Message: "+message + "\nUpdated Message: "+ updatedMessage);

//Q9
// var string = "462";
// var number = Number(string);
// alert("Value: "+string +"\n"+"Type: " +typeof(string)+"\nValue: "+number +"\n"+"Type: " +typeof(number));

//Q10
// var word = prompt("Enter any word for change into upper case.")
// var updatedword = word.toUpperCase();
// alert("User input: "+ word + "\nUpper case: "+ updatedword);

//Q11
// var word = prompt("Enter any word for change into Title case.")
// var firstLetter = word.slice(0,1).toUpperCase();
// var remainingLetter = word.slice(1).toLowerCase();
// var updatedWord = firstLetter+remainingLetter;
// alert("User input: "+ word + "\nTitle case: "+ updatedWord);

//Q12
// var num = 35.36;
// var string = num.toString();
// var afterRemoveDot = string.replace(".","")
// alert("Number: "+num + "\nResult: "+afterRemoveDot);\

//Q13
// var userName = prompt("Enter your name");
// var flag = false;
// for(i=0; i<userName.length; i++){
//     if(userName[i].charCodeAt() === 33 ||userName[i].charCodeAt() === 44 ||userName[i].charCodeAt() === 46||userName[i].charCodeAt() == 64 ){
//  flag = true;
//         break;
//     }   
// } 
//     if(flag == true){
//         alert("Enter the valid username")
//     }
//         else{
//         alert("Your name is "+ userName);
        
//     }

//Q14
// var items = ["cake","apple pie", "cookie", "chips", "patties"];
// var found = prompt("Enter item name for checking availability");
// found  = found.toLowerCase();
// var flag = false;
// for(i=0; i<items.length; i++){
//     if(items[i] === found){
//         flag = true;
//         break;
//     }
    
// }
// if(flag == true){
//     alert(found + " is available at index "+ i+ " in our bakery");
// }
// else{
//     alert(found + " is not available in our bakery");
// }

//Q15
// var password = prompt("Enter new password");
// var flag = true;
// for(i=0; i<password.length; i++){
//     if(!((password[i].charCodeAt() >= 48 && password[i].charCodeAt() <=57)  || (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <=90) || (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <=122)  )){
//         alert("Password cannot contain symbol ");
//         flag = false;
//     }
// }
// if(password.charAt(0) >=0 && password.charAt(0) <=9){
//     alert("Password should not start with a number");
//     flag = false;
// }
// if(password.length <=5){
//     alert("Password should conatain atleast 6 character");
//     flag = false;
// }
// if(flag == true){
//     alert("Password is accepted");
// }

//Q16
// var university = "university of karachi";
// var uniArray = university.split("");
// console.log(uniArray);

//Q17
// var input = prompt("Enter any word for display the last character");
// alert("User input: "+ input +"\nLast character of input: "+input.slice(-1));

//Q18
// var paragraph = "The quick brown fox jumps over the lazy dog";
// var lowercasePara = paragraph.toLowerCase();
// var paraArray = lowercasePara.split(" ");
// var found = prompt("Text: "+paragraph+"\nWrite a word which you want to count?");
// found = found.toLowerCase();
// var count = 0;
// for(i=0; i<paraArray.length; i++){
//     if(paraArray[i]== found){
//         count++;
//     }
// }
// alert("Text: "+paragraph + "\nThere are "+ count + " occurrence(s) of the word '"+found+"'");
                    //OR
// var paragraph = "The quick brown fox jumps over the lazy dog";
// var lowercasePara = paragraph.toLowerCase();
// var paraArray = lowercasePara.split(" ");
// var found = prompt("Text: "+paragraph+"\nWrite a word which you want to count?");
// found = found.toLowerCase();

// var count = paraArray.filter(word => word === found).length;

// alert("Text: "+paragraph + "\nThere are "+ count + " occurrence(s) of the word '"+found+"'");




// PASSWORD QUESTION
// var password = prompt("Enter new password");
// var flag = true;
// var flagCapitalLetter = false;
// var flagNumber = false;
// var flagSmallLetter = false;
// var flagSpecialCharacter = false;
// for(i=0; i<password.length; i++){
//     if((password[i].charCodeAt() >= 48 && password[i].charCodeAt() <=57)) {
//         flagNumber = true;
//     }
//     if((password[i].charCodeAt() >= 65 && password[i].charCodeAt() <=90)) {
//         flagCapitalLetter = true;
//     }
//     if((password[i].charCodeAt() >= 97 && password[i].charCodeAt() <=122)) {
//         flagSmallLetter = true;
//     }
//     if((password[i].charCodeAt() >= 32 && password[i].charCodeAt() <=47)||(password[i].charCodeAt() >= 58 && password[i].charCodeAt() <=64)||(password[i].charCodeAt() >= 91 && password[i].charCodeAt() <=96)||(password[i].charCodeAt() >= 123 && password[i].charCodeAt() <=126)) {
//         flagSpecialCharacter = true;
//     }

// }
// if(flagNumber=== false){
//     alert("Password must contain numbers");
//     flag = false;
// }
// if(flagCapitalLetter=== false){
//     alert("Password must contain Capital letter");
//     flag = false;
// }
// if(flagSmallLetter=== false){
//     alert("Password must contain small letters");
//     flag = false;
// }
// if(flagSpecialCharacter=== true){
//     alert("Password cannot contain  special character");
//     flag = false;
// }
// if(password.charAt(0) >=0 && password.charAt(0) <=9){
//     alert("Password should not start with a number");
//     flag = false;
// }
// if(password.length <=5){
//     alert("Password should conatain atleast 6 character");
//     flag = false;
// }
// if(flag == true){
//     alert("Password is accepted");
// }


//Chapter 26 -30
// Question 1
// var positveInteger = Number(prompt("Enter any positive integer number."));
// if(positveInteger>0){
//     document.write("Number: " +positveInteger +"<br>");
//     document.write("Round off value: " + Math.round(positveInteger)+"<br>");
//     document.write("Floor value: " + Math.floor(positveInteger)+"<br>");
//     document.write("ceiling value: " + Math.ceil(positveInteger));
// }
// else{
//     document.write("Enter a valid number");
// }

//Question 2
// var negativeInteger = Number(prompt("Enter any negative integer number."));
// if(negativeInteger < 0){
//     document.write("Number: " +negativeInteger +"<br>");
//     document.write("Round off value: " + Math.round(negativeInteger)+"<br>");
//     document.write("Floor value: " + Math.floor(negativeInteger)+"<br>");
//     document.write("ceiling value: " + Math.ceil(negativeInteger));
// }
// else{
//     document.write("Enter a valid number");
// }

//Question 3
// var absoluteNumber = Number(prompt("Enter any number"));
// document.write("The absolute value of "+ absoluteNumber+ " is "+ Math.abs(absoluteNumber));

//Question 4
// var diceValue = Math.ceil(Math.random()*6);
// document.write("random dice value: "+ diceValue);

//Question 5
// var diceValue = Math.round(Math.random()*1);
// console.log(diceValue);
// if(diceValue == 0){
// document.write("random coin value: Heads ");}
// else{
//     document.write("random coin value: Tails ");  
// }

//Question 6
// var randomNumber = Math.round(Math.random()*100);
// document.write("Random number between 1 and 100: " + randomNumber);

//Question 7
// var weight = parseFloat(prompt("Enter your weight in kilogram"));
// if(!isNaN(weight)){
// document.write("The weight of user is "+ weight+ " kilograms");}
// else{
//     document.write("Enter a valid weight");
// }

//Question 8
// var secretNumber =  Math.ceil(Math.random()*10);
// var input = parseInt(prompt("Guess a number between 1 to 10"));
// if(input == secretNumber){
//     document.write("Congratulation You guess a correct number");

// }
// else{
//     document.write("OPPS! try again");
// }

//Chapter 31-34

//Question 1
// var currentDate = new Date();
// document.write(currentDate);

//Question 2
// var currentDate = new Date();
// var month = currentDate.getMonth();
// console.log(month)
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for(i=0; i<=11; i++){
//     if(month == i){
//         document.write("Current month: " +monthNames[i]);
//         break;
//     }
// }

//Question 3
// var currentDate = new Date();
// var day = currentDate.getDay();
// console.log(day)
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// for(i=0; i<=6; i++){
//     if(day == i){
//         document.write("Current day: " +dayNames[i]);
//         break;
//     }
// }

//Question 4
// var currentDate = new Date();
// var day = currentDate.getDay();
// console.log(day)

//     if(day == 0 || day == 6){
//         document.write("It's Fun day");
//     }
//     else{
//         document.write("It's working day");
//     }

//Question 5
// var currentDate = new Date();
// var date = currentDate.getDate();
// console.log(date)
//     if(date >=1 && date <= 15){
//         document.write("First fifteen days of the month");
//     }
//     else{
//         document.write("Last days of the month");
//     }

//Question 6
// var currentDate = new Date();
// console.log(currentDate);
// var date_milliseconds = currentDate.getTime();
// document.write("Current date: "+currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+ date_milliseconds +"<br>");
// document.write("Elapsed minutes since January 1, 1970: "+ date_milliseconds/(1000*60));

//Question 7
// var currrentDate = new Date();
// var getHour = currrentDate.getHours();
// if(getHour >=0 && getHour<=11){
//  document.write("It's A.M");
// }
// else{
//     document.write("It's P.M");
// }

//Question 8
// var requiredDate = new Date("31 Dec 2020");
// document.write("Later date: "+requiredDate);

//Question 9
// var requiredDate = new Date("12 March 2024");
// var currrentDate = new Date();
// var get_millisecond = currrentDate.getTime()-requiredDate.getTime();
// var calcDays = Math.floor(get_millisecond/(1000*60*60*24));
// document.write(calcDays+ " days have passed since 1st Ramdan, 2024");

//Question 10
// var currentDate  = new Date();
// var referenceDate = new Date("1 Jan 2024");
// var get_millisecond = currentDate.getTime()-referenceDate.getTime();
// var timeInSeconds =Math.floor(get_millisecond/(1000));
// document.write("On reference date "+referenceDate+", "+timeInSeconds+ " seconds have passed since beginning of 2024.");

//Question 11
// var currentDate  = new Date();
// var newDate = new Date(currentDate);
// newDate.setHours(currentDate.getHours()-1);
// document.write("Current date: "+currentDate+ "<br>");
// document.write("1 hour ago, it was "+newDate);

// Question 12
// var currentDate  = new Date();
// var newDate = new Date(currentDate);
// newDate.setFullYear(currentDate.getFullYear()-100);
// document.write("Current date: "+currentDate+ "<br>");
// document.write("100 Year back, it was "+newDate);

//Question 13
// var userAge = parseFloat(prompt("Enter your age, for checking your birth year"));
// var currentDate  = new Date();
// var Year = currentDate.getFullYear()-userAge;
// document.write("Your age is "+userAge+ "<br>");
// document.write("Your birth year is "+ Year);

//Question 14
// var Username  = prompt("Enter consumer name");
// var units = parseInt(prompt("Enter number of units of current month"));
// var unitCharges = Number(prompt("Enter each unit charges"));
// var latePaymentSurcharge = Number(prompt("Enter Late payment surcharges"))
// var currentDate = new Date();
// var month = currentDate.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for(i=0; i<=11; i++){
//     if(month == i){
//         month =  monthNames[i]
//         break;
//     }
// }
// var netAmount = unitCharges*units;
// var grossAmount = netAmount+ latePaymentSurcharge;
// document.write("Consumer Name: "+Username+ "<br>");
// document.write("Month: "+month+ "<br>");
// document.write("Number of units: "+units+ "<br>");
// document.write("Charges per unit: "+unitCharges+ "<br>"+ "<br>");
// document.write("Net Amount Payable (within Due Date): "+netAmount+ "<br>");
// document.write("Late payment surcharge: "+latePaymentSurcharge+ "<br>");
// document.write("Gross Amount Payable (after Due Date): "+grossAmount);

                //   ======== Class Work =-=========
// var inputName = prompt("Enter any word");
// function uppercase(inputName){
//     return((inputName.charAt(0).toUpperCase()) + (inputName.slice(1,inputName.length).toLowerCase()));
   
// }
// console.log(uppercase(inputName)); 

// var sentence = prompt("Write a sentence");
// function firstLetterUpperCase(word){
//     var sentenceWord = word.split(" ");
//     console.log(sentenceWord);
//     var cap = [];
//     for(i=0; i<sentenceWord.length; i++){
//          cap.push((sentenceWord[i].charAt(0).toUpperCase()) + (sentenceWord[i].slice(1,sentenceWord[i].length).toLowerCase()));
//     }
//     console.log(cap);
//       return cap.join(" ");
// }
// console.log(firstLetterUpperCase(sentence));
    //    =========== Class work ===========

// CHAPTER 35 -38

//Question 1
// function currentDate(){
//     var date = new Date();
//     return date;
// }
// document.write(`current date: ${currentDate()}`);

//Question 2
// var firstName = prompt("Enter your first name");
// var secondName = prompt("Enter your second name");
// function greetUser(firstName, secondName){
//    return document.write(`Hello, ${firstName} ${secondName}`);
// }
// greetUser(firstName, secondName);

//Question 3
// var firstNumber = parseFloat(prompt("Enter first number"));
// var secondNumber = parseFloat(prompt("Enter second number"));
// function add(firstNumber, secondNumber){
//     var sum = firstNumber + secondNumber;
//     return document.write(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`)
// }
// add(firstNumber, secondNumber);

//Question 4
// var firstNumber = parseFloat(prompt("Enter first number"));
// var secondNumber = parseFloat(prompt("Enter second number"));
// var operation = prompt("Enter symbol for perform operation \n + , - , x , / ");
// var flag = false;
// function calculater(x1, x2, operator){
//     var x1, x2, operator, result;
//      if(isNaN(x1) || isNaN(x2)){
//         document.write(`Enter the valid number`)
//       }
//    else if(operator ==="+"){
//          result = x1 + x2;
//          flag = true;
//     }
//     else if(operator === "-"){
//          result = x1 - x2;
//          flag = true;
//     }
//     else if(operator === "x"){
//          result = x1 * x2;
//          flag = true;
//     }
//     else if(operator === "/"){
//          result = x1/x2;
//          flag = true;
//     }
   
//     else{
//      document.write(`Enter the correct operation`);
//     }
//     return result;
// }
// var result = calculater(firstNumber,secondNumber,operation)
// if(flag == true){
// document.write(`${firstNumber} ${operation} ${secondNumber} = ${result}`)}

//Question 5

// var numSquare = parseFloat(prompt("Enter a number for it's square."));
function square(num){
     var result;
     result = num**2;
     return result;
     // document.write(`The square of ${num} is ${result}`);
}
// square(numSquare);

//Question 6
// var numFactorial = parseInt(prompt("Enter a number for find factorial"));
// function factorial(num){
//      var result = num;
//      for(i=num; i>1; i--){
//           result = result*(i-1);
//      }
//      document.write(`The factorial of ${num} is ${result}`)
// }
// factorial(numFactorial)

//Question 7

// function counting(){
//      var start = parseInt(prompt("Enter starting number"));
// var end = parseInt(prompt("Enter ending number"));
//      document.write(`The counting from ${start} to ${end}: <br>`)
//      for(i = start; i<= end; i++){
//           document.write(`${i} <br>`)
//      }
// }
// counting();

//Question 8
// var base = parseFloat(prompt("Enter the length of base"));
// var perp = parseFloat(prompt("Enter the length of perpendicular"));
// var hyp ;
// function CalculateHyp(base, perp){
//      hyp = square(base) + square(perp);
//      hyp = Math.sqrt(hyp);
//      return hyp;
// }
// hyp = CalculateHyp(base, perp);
// document.write(`The length of hypotaneous is ${hyp}`);

//Question 9;
// var width = parseFloat(prompt("Enter the width of rectangle"));
// var height = parseFloat(prompt("Enter the height of rectangle"));
// function areaOfRectangle(width, height){
//      var area;
//      area = width*height;
//      return area;
// }
// document.write(`The area of rectangle is ${areaOfRectangle(width, height)}`)

//Question 10;
// var word = prompt("Enter any word for check that it's palindrome or not");
// function palindromeCheck(word){
//      var reverse = [];
//      var palin;
//      reverse = word.split("");
//      reverse = reverse.reverse();
//      palin = reverse.join("")
//      if(word == palin){
//           document.write(`The word "${word}" is palindrome`);
//      }
//      else{
//           document.write(`The word "${word}" is not palindrome`);
//      }
// }
// palindromeCheck(word);

//Question 11
// var sentence = prompt("Write any sentence");
// function firstLetterUppercase(sentence){
//      var sentenceArray = [];
//      sentenceArray = sentence.split(" ");
//      for(var i = 0; i<sentenceArray.length; i++){
//      var firstLetter = sentenceArray[i].charAt(0).toUpperCase();
//           var remainingLetters = sentenceArray[i].slice(1).toLowerCase();
//           sentenceArray[i] = firstLetter+ remainingLetters;
//      }
//           sentence = sentenceArray.join(" ");
//           return sentence;
// }
// document.write(`Sentence: ${firstLetterUppercase(sentence)}`);

//Question 12;
// var sentence = prompt("Write any sentence");
// function largestWord(sentence){
//      var sentenceArray = [];
//      var sentenceWordLength = [];
//      var maxWord ;
//      sentenceArray = sentence.split(" ");
//      for(var i = 0; i<sentenceArray.length; i++){
//      sentenceWordLength[i] = sentenceArray[i].length;
//      }
//      var maxNum = 0;
//      for(var j=0; j<sentenceWordLength.length; j++){
//           if(sentenceWordLength[j]>maxNum){
//                maxNum = sentenceWordLength[j];
//                maxWord = sentenceArray[j];
//           }
//      }
//      return maxWord;
// }
// document.write(`Sentence: ${sentence} <br> Largest Word: '${largestWord(sentence)}'`)

//Question 13
// var sentence = prompt("Write any sentence");
// var lowercaseSentence = sentence.toLowerCase();
// var countLetter = prompt("Write a letter which you want to count").toLowerCase();
// function countAletter(lowercaseSentence , countLetter){
// var count = 0;
// for(var i =0; i<lowercaseSentence.length; i++){
//      if(sentence[i] == countLetter){
//           count++ ;
//      }
// }
// return count ;
// }
// document.write(`String: ${sentence} <br> Occurence of letter "${countLetter}" is ${countAletter(lowercaseSentence, countLetter)} times.`)

//Question 14
// var radius = parseFloat(prompt("Enter the radius of the circle"));
// function circumferenceOfACircle(radius){
//      var circumference = 2*Math.PI*radius ;
//      return circumference.toFixed(2);
// }
// function AreaOfACircle(radius){
//      var area = Math.PI*radius**2;
//      return area.toFixed(2);
// }
// document.write(`The radius of circle is ${radius} units <br> The circumference is ${circumferenceOfACircle(radius)}unit <br> The Area is ${AreaOfACircle(radius)} square unit`)
