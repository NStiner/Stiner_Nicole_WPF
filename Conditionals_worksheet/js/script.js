//Last Chance For Gas!






/*//Check the Login
prompt = ("Please enter your username.");
var userName = "NStiner123";
if(userName >= "NStiner123"){
        prompt = ("Please type in your password.");
}else if(userName != "NStiner123"){
        console.log("User not found. Try again");
}

var password = "love789";
if( password >= "love789"){
        console.log("Welcome," + userName + "!");
}else {
        console.log("Password does not match our records.");
}
*/


//Movie Tickets

var regTicketPrice = 12.00; //creating variable for regular ticket price
var discTicketPrice = 7.00; // creating variable for discount ticket price for matinee time and age 55 => or <=10
var matineeTime = 3-5; // creating the matinee time frame

var age = prompt("Enter your age"); // having the user enter in their age
var matineeTime = prompt("Enter the time of the movie"); // having the user enter the time they plan to go

if(age >= 55 || age <=10) { // setting an age limit for discount price
        console.log("The ticket price is $" + discTicketPrice); // printing out result
}else if(matineeTime >= 3 && matineeTime <= 5){ // setting up matinee price for any age
                console.log( "The ticket price is " + discTicketPrice); // printing out result
}else{
        console.log("Your ticket price is $" + regTicketPrice); // if age and matinee failed, this is the result

}




