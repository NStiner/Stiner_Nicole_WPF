//Calculate sparkys age in dog years
var sparkysAge = 2;
var dogAge = sparkysAge * 7;
//multiply sparkysAge and 7(dogyears) to calculate sparkys age
console.log(" Sparky is " +  sparkysAge  + " human years old which is  " +  dogAge  + "in dog years.");
//printing our the result for sparkys age.




//Calculate how much pizza will each party-goer will get at the party

var slicesPerPizza = 8;
var numberOfPeople = 23;
var orderedPizzas = 10;
//multipy pizzaOrdered and SlicesPerPizza then divide the result by numberOfPeople
var slicesPerPerson = (orderedPizzas * slicesPerPizza) / numberOfPeople;
//printing out the result for slicesPerPerson
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");





//Calculate sparkys leftover amount after even distribution to party people
var slicesPerPizza = 8;
var numberOfPeople = 23;
var orderedPizzas = 10;
//multiply orderedPizzas and slicesPerPizza and divide by the number of people to give sparky leftovers
var sparkyFood = (orderedPizzas * slicesPerPizza) % numberOfPeople;
console.log(" Sparky got "  +  sparkyFood  +  " slices of pizza.");
//printing out the result for sparkys leftover amount