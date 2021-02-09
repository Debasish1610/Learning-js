var arr = [4, 5, 6, 4, 2];

console.log(arr.join(' ')); // join method return a string  
console.log(arr.join('/'));
console.log(arr.toString()); 

console.log(arr);

//console.log(arr.fill(0));

var arr2 = [10, 12, 21];
var arr3 = arr.concat(arr2);
console.log(arr3);

console.log(Array.isArray(arr)); //check array is array or object.

var a = [4, 5];
var b = a; // assign reference. if we change b array then a array also change.
var c = Array.from(a); // copy array. if we change b array then a array will not change.

console.log(b);
console.log(c);



