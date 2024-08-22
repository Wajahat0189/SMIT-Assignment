var names = ["wajahat", "junaid", "osama"];
console.log(names);
for(var i=0; i<=names.length-1; i++){
    names[i]= names[i+1]
}
console.log( 'Removed 1st element wajahat from array');

names.length= names.length-1;
console.log(names);

console.log('Unshift , adding new element in start')

var newElement = prompt('Enter new Name');

for(var j = names.length-1; j>=0; j--){
    names[j+1]= names[j];
    
}
names[0]=newElement;
console.log(names);