//Home work Assignment
// var age = parseInt(prompt("Enter your Age"));
// function ageCalculator(age){
//     if(age >=0 && age <=2){
//         alert("Baby or infant")
//     }
//     else if(age>2 && age<=15){
//         alert("School boy or child") 
//     }
//     else if(age>15 && age<=22){
//         alert("Lover") 
//     }
//     else if(age>22 && age<=35){
//         alert("Soldier") 
//     }
//     else if(age>35 && age<=50){
//         alert("justice or judge") 
//     }
//     else if(age>50 && age<=65){
//         alert("Old man") 
//     }
//     else if(age>65){
//         alert("Extreme old age, again like a child") 
//     }
//     else{
//         alert("Enter the correct age")
//     }
// }
// ageCalculator(age);

// var identifyNumber = parseInt(prompt("Enter a number"));
// function evenOdd(number){
//      if(isNaN(number)){
//         alert("Please enter a valid number");
//     }
//    else if(number%2==0){
//         alert("Even number");
//     }
//     else{
//         alert("Odd number"); 
//     }
    
// }
// evenOdd(identifyNumber);

// var identifyNumber = parseInt(prompt("Enter a number"));
// function PN(number){
//      if(isNaN(number)){
//         alert("Please enter a valid number");
//     }
//    else if(number>0){
//         alert("Positive number");
//     }
//     else if(number<0){
//         alert("Negative number"); 
//     }
//     else{
//         alert("Value is equal to 0")
//     }
    
// }
// PN(identifyNumber);
// var numberOfItem = parseInt(prompt("Enter number of Items purchased"));
// function bill(numberOfItem){
// var itemName = [];
// var itemUnitPrice = [];
// var itemQty = [];
// var itemPrice = [];
// var totalPrice  = 0;
//  for(var i=0; i<numberOfItem; i++){
//     itemName[i] = prompt("Enter "+(i+1)+ " Item name");
//     itemUnitPrice[i] = parseInt(prompt("Enter "+ itemName[i]+ " unit price"));
//     itemQty[i] = parseInt(prompt("Enter "+ itemName[i]+ " Quantity"));
//     itemPrice[i] = itemUnitPrice[i]*itemQty[i];
//     totalPrice = totalPrice+ itemPrice[i];
//     console.log("The price of "+ itemQty[i]+ " " + itemName[i]+ "/s are "+ itemPrice[i]);
//  }
//  console.log("Total price of your shoping is "+ totalPrice);
// }
// bill(numberOfItem);
// console.log(bill(numberOfItem));
// Function to get item details and calculate total price
// function calculateBill(numberOfItems) {
//     var itemName = [];
//     var itemUnitPrice = [];
//     var itemQty = [];
//     var itemPrice = [];
//     var totalPrice = 0;
 
//     for (var i = 0; i < numberOfItems; i++) {
//         itemName[i] = prompt("Enter " + (i + 1) + " item name");
//         itemUnitPrice[i] = parseInt(prompt("Enter " + itemName[i] + " unit price"));
//         itemQty[i] = parseInt(prompt("Enter " + itemName[i] + " quantity"));
//         itemPrice[i] = itemUnitPrice[i] * itemQty[i];
//         totalPrice += itemPrice[i];
//     }
 
//     return { itemName, itemQty, itemPrice, totalPrice };
//  }
 
//  // Function to display the bill details
//  function displayBill(billDetails) {
//     for (var i = 0; i < billDetails.itemName.length; i++) {
//         console.log("The price of " + billDetails.itemQty[i] + " " + billDetails.itemName[i] + "/s is " + billDetails.itemPrice[i]);
//     }
//     console.log("Total price of your shopping is " + billDetails.totalPrice);
//  }
 
//  // Main code
//  var numberOfItems = parseInt(prompt("Enter number of items purchased"));
//  var billDetails = calculateBill(numberOfItems);
//  displayBill(billDetails);

var outlineColor = (f)=>{
    f.style.outlineColor = 'red';
}
var outlineColorBlur = (b)=>{
    b.style.borderColor = 'green';
}
var value = (v)=>{
    console.log(v.value);
}
