var sub1 = prompt("Enter 1st subject name");
var sub2 = prompt("Enter 2nd subject name");
var sub3 = prompt("Enter 3rd subject name");
var obtMarks1 = parseInt(prompt("Enter "+sub1+ " Obtained marks"));
var obtMarks2 = parseInt(prompt("Enter "+sub2+ " Obtained marks"));
var obtMarks3 = parseInt(prompt("Enter "+sub3+ " Obtained marks"));
var obt_total = obtMarks1+obtMarks2+obtMarks3;
var per1 = (obtMarks1/100)*100;
var per2 = (obtMarks2/100)*100;
var per3 = (obtMarks3/100)*100;
var avg_per = (per1+per2+per3)/3;
document.getElementById('sub1').innerHTML = sub1;
document.getElementById('sub2').innerHTML = sub2;
document.getElementById('sub3').innerHTML = sub3;
document.getElementById('obtMarks1').innerHTML = obtMarks1;
document.getElementById('obtMarks2').innerHTML = obtMarks2;
document.getElementById('obtMarks3').innerHTML = obtMarks3;
document.getElementById('per1').innerHTML = per1;
document.getElementById('per2').innerHTML = per2;
document.getElementById('per3').innerHTML = per3;
document.getElementById('obt_total').innerHTML = obt_total;
document.getElementById('avg_per').innerHTML = avg_per;

// Table program
var table = parseInt(prompt("Enter number for table"));
if(isNaN(table)){
    table = 5
}
for(var i=1; i<11; i++){
    t = table*i;
    document.getElementById('table').innerHTML+= table + " x " + i + " = "+ t +"<br>";
}



































// var arr= [12, 56, 200, 540, 320, 4, 6];

//     if (arr.length < 2) {
//         console.log("null") ; 
//     }

//     var highest = -Infinity;
//     var secondHighest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > highest) {
//             secondHighest = highest; 
//             highest = arr[i]; 
//         } else if (arr[i] > secondHighest && arr[i] < highest) {
//             secondHighest = arr[i];
//         }
//     }

//     console.log(secondHighest)
// // For second lowest number
// if (arr.length < 2) {
//         console.log("null") ; 
//     }

//     var highest = Infinity;
//     var secondHighest = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < highest) {
//             secondHighest = highest; 
//             highest = arr[i]; 
//         } else if (arr[i] < secondHighest && arr[i] > highest) {
//             secondHighest = arr[i];
//         }
//     }

//     console.log(secondHighest)

