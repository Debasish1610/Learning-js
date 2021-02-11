// map is a array function which travers through an array and return another array.
var arr = [4, 5, 6, 7];

//this map function squere every elment and return another array. 
var newArray = arr.map(function(value){
    return value*value;
})

console.log(arr);
console.log(newArray);


