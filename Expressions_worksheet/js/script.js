//Calculate sparkys age in dog years
var sparkysAge = 2;
var dogAge = sparkysAge * 7;
//multiply sparkysAge and 7(dogyears) to calculate sparkys age
console.log(" Sparky is " +  sparkysAge  + " human years old which is  " +  dogAge  + " in dog years.");
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




// Calculate the average amount spent on groceries
var spentOnGroceries = [89.65 , 112.04 , 63.74 , 92.12 , 105.22];
//add each variable in spentOnGroceries
var totalSpending = spentOnGroceries[0]; + spentOnGroceries[1]; + spentOnGroceries[2]; + spentOnGroceries[3]; + spentOnGroceries[4];
//divide totalSpending by 5 (the amount of # in the array spentOnGroceries)
var weeklyAverage = totalSpending / 5;
//print out result - running test
console.log(" You have spent a total of $ " + totalSpending + " on groceries over 5 weeks. That is an average of $ " + weeklyAverage + " per week " );





//Calculate the discounted price with and without tax
var originalPrice = 849.99;
var discountPercent = 15;
var descriptionOfItem = "55 inch smart led tv";
var salesTaxPercentage = 6.75;
//calculate the price with tax
var discountNoTax = originalPrice * (100 - discountPercent) / 100;
var discountTax = discountNoTax + (discountNoTax * salesTaxPercentage) / 100;
//print out result
console.log( " Your " + descriptionOfItem + " was originally $ " + originalPrice + " but after a " + discountPercent + " % discount, it is now $ " + discountNoTax + " without tax, and $ " + discountTax + " with tax. ");






