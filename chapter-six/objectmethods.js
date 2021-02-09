var obj = {
    x:3,
    y:5,
    z:7
}

// get all keys in object as array.
console.log(Object.keys(obj)); // this method return array.

// get all values in object as array.
console.log(Object.values(obj)); // this method return array.

console.log(Object.entries(obj)); // this method return 2d array.

// clone object
var obj1 = Object.assign({}, obj);
console.log(obj1);