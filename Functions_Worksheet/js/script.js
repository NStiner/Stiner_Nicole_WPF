// Stung - calculating how many bee stings it would take to kill an animal
// takes 8.666666667 bee stings per pound to kill an animal


function totalBeeStings(weight){ // calling the function totalBeeStings to connect with argument weight
    var totalBeeStings = weight * 8.666666667; // creating parameters
    console.log("It takes " + totalBeeStings + " bee stings to kill this animal"); // print out result
}

totalBeeStings(40); // test 1
totalBeeStings(80); // test 2