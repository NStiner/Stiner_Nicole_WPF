//Creating conditionals

/*
If(condition){
   Actions
   }


sunny = true
if(sunny){
    GoToTheBeach();
}

/*
sunny = false
if(sunny){
   GoToTheBeach();
}
    This would cancel out because sunny = false, so I wont go to beach


//to create an alternative :
if(sunny){
    GoToTheBeach();
}else{
    GoToTheMovies();
}


//sometimes temperature doesnt allow you to go to beach to swim, so you must add more details
if(temp > 70){
    GoToTheBeach();
}
//use comparison to see if variable is true or false
temp = 82;

if(temp > 70){
    GoToTheBeach();
}
//if temp is less than 70 degrees, then you wont go to the beach. If it is greater than, it will prompt you to go to the beach
// ( > greater than ) ( < less than ) ( >= greather than or equal to) ( <= less than or equal to) ( != not equal to) ( = = equal to)

if (temp == 75){
    GoToTheBeach();
}

//two equal signs compares the variables


//Nesting Conditionals
if(sunny) {
    GoToTheBeach();

    if (warmWater) {
        wearNewSuit();
    }
}else{
    GoToTheMovies();
}
//we dont want to put the new suit option under the movies because you dont want to wear your suit to the movies, so you must nest

/*

 */
