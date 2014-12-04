//Calculate how much you spend on gas in a week.

alert ("We are calculating the price you spend on gas per week."); // we are alerting (telling) the user what we plan on doing
var pricePerGallon = prompt ("Enter the price per gallon"); // Tells the user to insert the price per gallon
var milesWeek = prompt ("Enter the amount of miles you travel in a week"); // has the user enter the miles they drove that week
var amount =  milesWeek * pricePerGallon; // this calculates how much you will spend per gallon within the week

alert (" You will spend " + amount + " in gas per week.")
//testing
console.log("amount");