var theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total1=0, total2=0;

//element iteration with addition to total1
for (var i = 0; i < theArray.length; i++) 
  total1 += theArray[i];
  console.log("Total using subscripts: " + total1);

  
  //itereates through the elements of the array using a for..in statement to add each element's value to total2.
  for (var element in theArray)
    total2 += theArray[element];
  document.writeln("<br/>Total using for..in: " + total2);
