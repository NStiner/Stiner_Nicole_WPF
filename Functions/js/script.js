//Functions - Anonymous Functions

var a = calcArea(20, 30); // invoking

var calcArea = function(width, height){ //defining
//code the function runs
    var area = width * height;
    return area;
}


console.log(a);
