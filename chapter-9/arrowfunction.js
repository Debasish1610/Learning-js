//regular function expression

var sayHello = function()
{
    return 'Hello world';
}
console.log(sayHello());


//Arrow function 
sayHello = () =>{
    return 'Hello World';
}
console.log(sayHello());


// if function has one statement, and statement returns a value. 
sayHello = () => 'Hello World';
console.log(sayHello());

// if you have parameters, you can pass them inside the parentheses
sayHello = (firstName, lastName) => 'Hello' +' '+ firstName + ' '+ lastName;
console.log(sayHello('Debasish', 'saha'));