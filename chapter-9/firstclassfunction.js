// first class function

function add(a, b)
{
    return a+b; 
}

// function can stored in a variable
var sum = add;
console.log(sum(5, 6));

//function can stored in an array
var arr = [];
arr.push(add);
console.log(arr[0](3, 4));

//function can stored in an object
var obj = 
{
    sum: add
}
console.log(obj.sum(10, 2));
console.log(obj['sum'](10, 20));

//we can create function as need
setTimeout(function() {
    console.log('set timeout');
}, 1000);