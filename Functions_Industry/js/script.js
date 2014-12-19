// Find the right gift!

alert = ("Need Help finding the right gift? You came to te right place!");

var age = prompt("Please enter the age of the person you are buying for.");

if (age >= 1 && age <= 4) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    if (gender === 'M' || gender === 'F') {
        var result = gender === 'M' ? "Buy them a toy car" : "Buy them a doll";
        console.log(result);
    } else {
        var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    }
}

if (age >= 5 && age <= 7) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    if (gender === 'M' || gender === 'F') {
        var result = gender === 'M' ? "Buy them a Hot Wheels safe-drive four wheeler" : "Buy them a Barbie safe-drive four wheeler";
        console.log(result);
    } else {
        var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    }
}

if (age >= 8 && age <= 10) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    if (gender === 'M' || gender === 'F') {
        var result = gender === 'M' ? "Buy them a video game console, or hand-held gaming device" : "Buy them Frozen, or their favorite movie items.";
        console.log(result);
    } else {
        var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    }
}

if (age >= 11 && age <= 13) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    if (gender === 'M' || gender === 'F') {
        var result = gender === 'M' ? "Buy them a brand new bike!" : "Buy them a brand new bike!";
        console.log(result);
    } else {
        var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    }
}

if (age >= 14 && age <= 17) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    if (gender === 'M' || gender === 'F') {
        var result = gender === 'M' ? "Buy them the new hot electronics, like an iPad air, or Mac Book." : "Buy them new clothes, purses or make-up!";
        console.log(result);
    } else {
        var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    }
}

if (age >= 18) {
    var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    if (gender === 'M' || gender === 'F') {
        var result = gender === 'M' ? "Buy them the new android wear!" : "Buy them the new android wear!";
        console.log(result);
    } else {
        var gender = prompt("Please enter the gender of your child. Use F for female and M for male.");
    }
}

