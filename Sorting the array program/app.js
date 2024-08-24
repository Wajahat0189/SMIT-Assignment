var arr = [];
for (var i =0; i<5 ; i++){
    var items = parseInt(prompt('Enter your data'));
    arr[i]=items;
}


console.log(arr);
var arr1 = arr;

console.log('Writting the following array into reverse order') ;
//var arr = [5,8,10,4,3,7,1,6,2,9];
console.log(arr1)
for( var i=0; i< (arr1.length-1)/2; i++){
    var j = arr1.length-1-i;
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(arr1);


//var arr = [5,8,10,4,3,7,1,6,2,9];
//alert(arr);
console.log('Arranging in ascending order');
for(var i=0; i < arr.length; i++){
    for(var j=i; j < arr.length; j++){
       if( arr[i]> arr[j]){
        var temp = arr[i];
        arr[i]= arr[j];
        arr[j] = temp;

       }
    }
}
console.log(arr);
