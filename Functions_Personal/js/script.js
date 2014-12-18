//Track Your Diet! Count Your Calories!

alert = ("We are going to track your diet!");
prompt1 = ("Please enter your gender. Use F for female and M for male.");
prompt2 =("Please enter your age");
prompt3 = ("Please enter how many calories you have consumed so far today");


if(prompt2 >=4 && prompt2 <= 8){
    var caloriesConsumed = prompt3;
    var caloriesNeededPerDay = 1600;
    var caloriesNeeded = caloriesNeededPerDay - caloriesConsumed;
    console.log("You still need to consume " + caloriesNeeded + " calories in order to reach your daily needed amount!");
}
if()