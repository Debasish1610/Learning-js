function add(a, b)
{
    return a+b;
}

function sub(a, b)
{
    return a-b; 
}

function manipulate(n, m, summation, subtraction)
{
    var c = summation(n, m);
    var d = subtraction(n, m);

    return function multiply(x)
    {
        return c * d * x;
    }
}
var temp = manipulate(3, 4, add, sub);
console.log(typeof temp);
console.log(temp(3));