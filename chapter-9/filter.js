var arr = [5, 3, 7, 6, 8, 0, 1, 4];

//filter is a builtin function that takes function as a parameter and return an array depending on the function's task

var filteredArray = arr.filter(function(value){
    if(value % 2 === 0)
        return true;
});

console.log(filteredArray);

var oddNumbers = arr.filter(function(value){
    return value % 2 === 1;
})

console.log(oddNumbers);


//Implements filter function

function filter(arr, callBack)
{
    var tempArray = [];
    for(var i = 0; i < arr.length; i++)
    {
        if(callBack(arr[i], i, arr))
        {
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}

var numbersGreaterThanFive = filter(arr, function(value, index, arr){
    return value > 5;
})

console.log(numbersGreaterThanFive);