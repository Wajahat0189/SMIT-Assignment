var names = ["Wajahat","Osama", "Junaid", "Khalid"];
alert(names);
alert("Removing last elememt");
names.length = names.length -1;
newElement = prompt('Enter new element');
names[names.length] = newElement;
alert(names);