// Find the right gift!

alert = ("Need Help finding the right gift? You came to te right place!");

var age = prompt("Please enter the age of the person you are buying for.");

if(age >= 1 && age <= 4) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    result = (gender == F) ? "Your child might like an interactive baby doll." : "Your child might like a set of Hot Wheels and accessories like the race track.";
    console.log(result);
}

if(age >= 5 && age <= 7) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    result = (gender == F) ? "Your child might like the Barbie safe-drive four wheeler." : "Your child might like a hot Wheels safe-drive four wheeler.";
    console.log(result);
}

if(age >= 8 && age <= 10) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    result = (gender == F) ? "Your child might like Frozen items like clothes, dress up items, bath, etc." : "Your child might like video games for the console they own, or buy them a video game console \n(It teaches hand eye cordination!)";
    console.log(result);
}

if(age >= 11 && age <= 13) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    console.log("Your child might like a brand new bike!")
}

if(age >= 14 && age <= 17) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    result = (gender == F) ? "Your child might like new clothes, purses, or makeup." : "Your child might like the new hot electronic, like an iPad or laptop.";
    console.log(result);
}

if(age >= 18) {
  console.log("Your gift receiver might be interested in an android wear")
}