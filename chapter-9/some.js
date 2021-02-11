var arr = [5, 6, 5, 3, 5, 3, 5, 0, 9];

//check any element of this array is odd
var res1 = arr.some(function(value){
    return value % 2 === 1;
})
console.log(res1);


//check any element greater than zero. 
var res2 = arr.some(function(value){
    return value < 0;
})
console.log(res2);