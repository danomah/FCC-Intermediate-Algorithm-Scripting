/*******************************************
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
    Smallest Common Multiple
*******************************************/


function smallestCommons(arr) {
  
  var min, max;
  //Get the minimum and maximum
  //if the first index is greater than the second index
  if(arr[0] > arr[1]) {
    //the second index is the minimum
    min = arr[1];
    max = arr[0];
  //otherwise if the the second index is greater than the first
  }else {
    //the first index is the minimum
    min = arr[0];
    max = arr[1];
  }//end if else
  
  //test line to see if the first part worked
  console.log("Minimum is " + min + " and Maximum is " + max);
  
  var range = [min, max];
  
  return range;
}//end smallestCommons


smallestCommons([1,5]);