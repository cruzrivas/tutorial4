/* Tutorial 4
   Example 2 JavaScript code
*/
var studentName = prompt("Enter your name: ");
const number2 = Number(prompt("Enter number of credits:"));
console.log('Hello ' + studentName)
if (number >= 0 && number <=30) {
    console.log(`Your grade standing is Freshman.`);
} 
else if (number >= 31 && number <=60) {
    console.log(`Your grade standing is Sophomore.`);
}
else if (number >= 61 && number <=90) {
    console.log(`Your grade standing is Junior.`);
}
else if (number >= 91 && number <=120) {
    console.log(`Your grade standing is Senior.`);
}
else {
    console.log(`That input is not valid. Please try again.`);
}

console.log("Rivas's Output from Tutorial 4 Example 2");