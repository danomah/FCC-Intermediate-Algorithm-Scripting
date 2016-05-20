/********************************************************************************
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
String.prototype.charCodeAt()
String.fromCharCode()
********************************************************************************/

function binaryAgent(str) {
  var digit;
  var newStr = str.split(" ");
  var newArray = [];
  var newerArray = [];
  
  for(var i = 0; i < newStr.length; i++) {
    digit = parseInt(newStr[i], 2);
    newArray.push(digit);
  }
 
  for(var j = 0; j < newArray.length; j++) {
   newerArray.push(String.fromCharCode(newArray[j]));
  }
  return newerArray.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
