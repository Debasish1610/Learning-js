var arr = [5, 6, 5, 3, 5, 3, 5, 0, 9];

//check all elements of this array is odd
var res1 = arr.every(function(value){
    return value % 2 === 1;
})
console.log(res1);


//check all elements greater than zero. 
var res2 = arr.every(function(value){
    return value >= 0;
})
console.log(res2);