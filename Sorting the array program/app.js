// var arr = [];
// for (var i =0; i<5 ; i++){
//     var items = parseInt(prompt('Enter your data'));
//     arr[i]=items;
// }


// console.log(arr);
// var arr1 = arr.slice();

// console.log('Writting the following array into reverse order') ;
// //var arr = [5,8,10,4,3,7,1,6,2,9];
// // console.log(arr1)
// for( var i=0; i< (arr1.length-1)/2; i++){
//     var j = arr1.length-1-i;
//     var temp = arr1[i];
//     arr1[i] = arr1[j];
//     arr1[j] = temp;
// }
// console.log(arr1);


// //var arr = [5,8,10,4,3,7,1,6,2,9];
// //alert(arr);
// console.log('Arranging in ascending order');
// for(var i=0; i < arr.length; i++){
//     for(var j=i; j < arr.length; j++){
//        if( arr[i]> arr[j]){
//         var temp = arr[i];
//         arr[i]= arr[j];
//         arr[j] = temp;

//        }
//     }
// }
// console.log(arr);

// var cities = ["KARACHI" , "LAHORE", "HYDERABAD"];

// var cityName = prompt("Enter city name");

// for(var i=0; i< cities.length; i++){
//     if(cityName.toUpperCase() == cities[i]){
//         console.log('Your city name found, ', cityName);
//         break;}
//         else{
//             console.log('Your city name not found, ', cityName);
//         }
//     }

    var cities = ["Karachi" , "Lahore", "Hyderabad"];

    var cityName = prompt("Enter city name");
    var cityNameFirstLetter = cityName.slice(0,1);
    cityNameFirstLetter = cityNameFirstLetter.toUpperCase();
    var cityNameRemainingLetter = cityName.slice(1);
    cityNameRemainingLetter = cityNameRemainingLetter.toLowerCase();
    cityName = cityNameFirstLetter + cityNameRemainingLetter;
      
    for(var i=0; i< cities.length; i++){
        if(cityName == cities[i]){
            console.log('Your city name found, ', cityName);
            break;}
            else{
                console.log('Your city name not found, ', cityName);
            }
        }
