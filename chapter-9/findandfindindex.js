var arr = [4, 5, 6, 3, 4, 5, 9];

var num = arr.find(function(value){
    return value === 5;
})
console.log(num);


var index = arr.findIndex(function(value){
    return value == 6;
})
console.log(index);