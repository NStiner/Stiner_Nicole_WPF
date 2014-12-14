// Stung - calculating how many bee stings it would take to kill an animal
// takes 8.666666667 bee stings per pound to kill an animal
// Given victims weight lbs Parameters victims weight lbs
    // return number bee stings Print # bee stings

function totalBeeStings(weight){
    var totalBeeStings = weight * 8.666666667;
    console.log("It takes " + totalBeeStings + " bee stings to kill this animal");
}

totalBeeStings(40);