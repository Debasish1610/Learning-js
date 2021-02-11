//reduce function

var arr = [10, 3, 4, 5, 8, 48];


// sum of the array elements and return sum value with default initial value of prev. 
var sum = arr.reduce(function(prev, curr){
    return prev + curr;
})
console.log(sum);


// sum of the array elements and return sum value with specified initial value of prev.
sum = arr.reduce(function(prev, curr){
    return prev + curr;
}, 100);
console.log(sum);