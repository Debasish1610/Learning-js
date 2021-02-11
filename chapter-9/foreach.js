var arr = [4, 5, 6, 3, 4];
// 'value' is a required parameter. index and array are optional parameter.
arr.forEach(function(value, index, array){
    console.log(value, index, array);
});


var sum = 0;
arr.forEach(function(value){
    sum += value;
})

console.log(sum);