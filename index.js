var OrignalArray = [10,20,30,40,50];
//----------------------------------------------------
document.write("Reverse Array by using in-built Method <br/>");
document.write(" Input Array : <br/>"+ OrignalArray);
document.write("<br/>");
var outputArray = OrignalArray.reverse();
document.write("The reversed Array : <br/>"  + outputArray );
document.write("<br/>--------------------------------<br/>");
//------------------------------------------------------
document.write("Reverse Array by using Loop <br/>");
document.write(" Input Array : <br/>"+ OrignalArray);
document.write("<br/><br/>");
var reverse = function(array){
var inputArray = array;
var newArray = [];
for (var i = inputArray.length-1; i>=0; i--){
  newArray.push(inputArray [i])
 }
return newArray
}
document.write("Output Reverse Array : <br/>");
document.write(reverse(OrignalArray));
document.write("<br/>--------------------------------<br/>");

//-------------------------------------------------------
document.write("Reverse String by using in-built Method <br/>");
function reveString(inpString) {
document.write(" Input String : <br/>"+ inpString + "<br/><br/>");
var RevString = inpString.split("").reverse().join("");
  document.write( "Reverse String : <br/>" + RevString);	
}
reveString("Shekhar");
document.write("<br/>--------------------------------<br/>");
//------------------------------------------------------
document.write("Reverse String by using Loop <br/>");
var reverse_string = function(inp_string){
document.write(" Input String : <br/>"+ inp_string);
var inputArray = inp_string.split("");
var newArray = [];
for (var i = inputArray.length-1; i>=0; i--){
  newArray.push(inputArray [i])
}
 var rev_string = newArray.join("")
 return document.write(" <br/> Output Reverse String :  <br/>" + rev_string + "<br/>");
}
reverse_string("Pathare");
document.write("<br/>--------------------------------<br/>");

//--------------------------------------------------------
document.write(" Revers the Input Number by using in-built methods: <br/>");
const Reverse = (number)=> {
  document.write("Input Number : <br/>"+ number + "<br/><br/>");
  var revNumber = parseFloat(number.toString().split('').reverse().join(''))*Math.sign(number);  
  document.write(" The Output Reverse Number : <br/>" +revNumber );
}
Reverse(123764);
document.write("<br/>--------------------------------<br/>");
//---------------------------------------------------
document.write(" Revers the Input Number by using loop : <br/>");
var xyz = prompt("Enter input method");
Reverse = function(num) {
  document.write("Input Number : <br/>"+ num + "<br/><br/>");
 var reversed_number = 0; 
	while (num != 0) { 
    	reversed_number *= 10;	
    	reversed_number += num % 10;
    	num -= num % 10;
		num /= 10;
      }
   return document.write(" The Output Reverse Number : <br/>" + reversed_number );
 };
 Reverse(xyz);
document.write("<br/>--------------------------------<br/>");
//---------------------------------------------------------

document.write("Check Palyndrom String <br/>");
var _input_string = prompt("Enter the String");
function revString(inpString) {
document.write(" Input String : <br/>"+ inpString +"<br/>");
var InpString = inpString.toLowerCase() ;
var revString = InpString.split("").reverse().join("");
if(InpString===revString){
  return document.write( " <br/> String is Palyndrom <br/>");	
}
return document.write(" <br/> String is not Palyndrom <br/>");
}
revString(_input_string);
document.write("<br/>--------------------------------<br/>");