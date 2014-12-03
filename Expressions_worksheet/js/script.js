//Calculate how much pizza will each party-goer will get at the party

var slicesPerPizza = 8;
var numberOfPeople = 23;
var orderedPizzas = 10;
//multipy pizzaOrdered and SlicesPerPizza then divide the result by numberOfPeople
var slicesPerPerson = (orderedPizzas * slicesPerPizza) / numberOfPeople;
//printing out the result for slicesPerPerson
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");
