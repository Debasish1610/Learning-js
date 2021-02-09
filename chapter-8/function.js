//function definition

function add(a, b)
{
    console.log(a+b);
}
add(5, 6);

function addArray(arr)
{
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

var arr = [4, 5, 4, 5];
console.log(addArray(arr));
