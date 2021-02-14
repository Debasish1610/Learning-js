
// object literals
var obj = {
    name: 'debasish',
    age: 25
};


// use create method. it required one parameter 
var obj1 = Object.create(obj);
console.log(obj1.age);

var obj2 = Object.create({});
obj2.name = 'akash';
obj2.age = 26;
console.log(obj2);



