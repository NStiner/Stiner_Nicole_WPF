//calculating how many employees a store can have while still gaining a profit after paying for employees, items, products, etc
var weeklyAccumulation = prompt("Please enter the amount of money your business accumulates in one week.");
var amountOfPaychecks = prompt("Please enter the total amount of your employees paychecks per week.");
var totalCostForGoods = prompt("Please enter the total amount you spend on durable goods and items for your business.");
var newHires = prompt("Please enter the amount of new applicants you would like to hire. ");



//the profit is accumulation minus employees, checks and goods costs
var profit = ("weeklyAccumulation - (amountOfPaychecks + totalCostForGoods)");


if(newHires == 0){
    console.log("Your weekly profit is $" + " " + profit);
}else{
    var newHiresPaycheck = prompt("Please enter the total cost of the new hires paycheck per week.");
}

var afterHireProfit = (profit - newHiresPaycheck);

newHireResult= (newHiresPaycheck < profit) ? "You are able to hire the applicants you requested! \n Your new weekly profit is $" + " " + afterHireProfit : "Sorry, due to limited funds it would not be in your best interest to hire new employees.";
console.log(newHireResult);

