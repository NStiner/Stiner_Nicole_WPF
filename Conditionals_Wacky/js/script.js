//Find out what your shirt color says about you!

alert("Find out what your shirt color says about you!");

var colors = ["white" , "black" , "red" , "pink" , "blue", "green" , "yellow" , "orange" , "purple" , "grey"];

var shirtColor = prompt("Please enter the color of shirt you are wearing.");

if(shirtColor == colors[0]){
    console.log("Your mood is centered! Nothing can ruin your simple day.");
}else if(shirtColor == colors[1]){
    console.log("Your mood is dark and slum, and unsocial. You prefer dark over light.");
}else if (shirtColor == colors[2]){
    console.log("Your mood is angry and bold! Be careful today. Small things will tick you off. ");
}else if (shirtColor == colors[3]){
    console.log("You mood is sweet and loving today! Be sure to share your cheer!");
}else if (shirtColor == colors[4]){
    console.log("Your feeling very calm and focused today! Make your focus take you that extra step to success! ");
}else if (shirtColor == colors[5]){
    console.log("You are an Earth lover today! Take that extra step in recycling today.");
}else if (shirtColor == colors[6]){
    console.log("Your mood is happiness! Shine bright, and send that smile to others!");
}else if (shirtColor == colors[7]){
    console.log("Your mood is alert and ambition! You are alert and ready for today's adventures.");
}else if (shirtColor == colors[8]){
    console.log("Your mood is wealthy and wisdom. Great wealth may be in your future today, or stumble across some great intelligence!");
}else if (shirtColor == colors[9]){
    console.log("You mood is completely neutral today! Your day consists with lack of energy, and confidence.");
}else{
    console.log("Your mood is 'unique'! You have unlimited abilities with your adventures today!");
}

