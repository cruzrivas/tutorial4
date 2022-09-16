/* Tutorial 4
   Example 1 JavaScript code
*/
var day = prompt(`Enter the first three letters (lowercase) of the current day: `);
switch(day) {
    case "mon":
        console.log(`You entered: Monday\nThe following day is: Tuesday`);
        break;
    case "tue":
        console.log(`You entered: Tuesday\nThe following day is: Wednesday`);
        break;
    case "wed":
        console.log(`You entered: Wednesday\nThe following day is: Thursday`);
        break;
    case "thu":
        console.log(`You entered: Thursday\nThe following day is: Friday`);
        break;
    case "fri":
         console.log(`You entered: Friday\nThe following day is: Saturday`);
         break;
    case "sat":
        console.log(`You entered: Saturday\nThe following day is: Sunday`);
        break;
    case "sun":
        console.log(`You entered: Sunday\nThe following day is: Monday`);
        break;
    default:
    console.log(`Your input was invalid. Please try again.`)
}

console.log("Rivas's Output from Example 3");