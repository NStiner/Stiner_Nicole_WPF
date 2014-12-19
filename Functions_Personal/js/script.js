//Track Your Diet! Count Your Calories!

alert = ("We are going to track your diet!");
prompt1 = prompt("Please enter your gender. Use F for female and M for male.");
prompt2 = prompt("Please enter your age");
prompt3 = prompt("Please enter how many calories you have consumed so far today");

var caloriesConsumed = prompt3;
var caloriesNeededPerDay = 1600;
var caloriesNeeded = caloriesNeededPerDay - caloriesConsumed;

if(prompt2 >= 4 && prompt2 <= 8 && caloriesNeeded < caloriesNeededPerDay){
    console.log("You still need to consume " + caloriesNeeded + " calories in order to reach your daily needed amount!");
}else if(prompt2 >= 4 && prompt2 <= 8 && caloriesNeeded >= caloriesNeededPerDay){
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}else{
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}


if(prompt2 >= 9 && prompt2 <= 18 && caloriesNeeded < 2000){
    console.log("You still need to consume " + caloriesNeeded + " calories in order to reach your daily needed amount!");
}else if(prompt2 >= 9 && prompt2 <=18 && caloriesNeeded >= 2000){
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}else{
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}

if(prompt2 >= 19 && prompt2 <= 30 && caloriesNeeded < 2200){
    console.log("You still need to consume " + caloriesNeeded + " calories in order to reach your daily needed amount!");
}else if(prompt2 >= 19 && prompt2 <=30 && caloriesNeeded >= 2000){
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}else{
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}

if(prompt2 >= 31 && prompt2 <= 50 && caloriesNeeded < 2200){
    console.log("You still need to consume " + caloriesNeeded + " calories in order to reach your daily needed amount!");
}else if(prompt2 >= 31 && prompt2 <= 50 && caloriesNeeded >= 22000){
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}else{
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}

if(prompt2 <= 51 && caloriesNeeded < 1800){
    console.log("You still need to consume " + caloriesNeeded + " calories in order to reach your daily needed amount!");
}else if(prompt2 <= 51 && caloriesNeeded >= 1800){
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}else{
    console.log("You have consumed the correct amount of calories you need each day! Good Job!");
}


