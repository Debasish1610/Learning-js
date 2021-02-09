// function expression
var addition = function(a, b)
{
    return a+b;
}

console.log(addition(4, 5));

var temp = addition;
console.log(temp(10, 20));