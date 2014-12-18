// Calculate how much money you will need for a ski / snowboard trip

var prompt1 = prompt("Please enter how many ski's you will need to rent. \n The price is $57 per day");
var prompt2 = prompt("Please enter how many snowboards you will need to rent. \n The price is $69 per day");
var results = calcPrice(prompt1, prompt2);
console.log(results);

function calcPrice(numberOfSkis, numberOfSnowboards) {
    var price = (numberOfSkis * 57) + (numberOfSnowboards * 69);
    return price;
}






