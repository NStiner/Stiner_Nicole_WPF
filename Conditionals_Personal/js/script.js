//Choosing an activity by age and weather conditions
//if the child is under 5, they get story time
//if the age is between 5-10, they play games - if weather is <70 they play outside
//ages 11-17 will play dodgeball if it rains - kickball if sunny
//age 18 < arcade

var ageEntered = prompt("Please enter you age.");

if(ageEntered < 5){
    console.log("You qualify for story time!");
}else{
    var tempEntered = prompt("Please enter the temperature outside");
}

if((ageEntered >5 && ageEntered <=10) && tempEntered >= 70){
        console.log("You get to play outside!");
}else{
        console.log("Sorry, due to the weather you must play indoors!")
    }

if((ageEntered >=11 && ageEntered <= 17) && tempEntered >= 70){
        console.log("You get to play dodgeball");
} else if( tempEntered < 70) {
    console.log("You get to play kickball!");
}else {
    console.log("You qualify for the arcade!");
}




