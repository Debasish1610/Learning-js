

// create object using literal 
var obj = {
    math: 56,
    phy: 34,
    che: 60
}

obj.bio = 50; // insert new propertics
obj['bang'] = 60; 


console.log(obj);
console.log(obj.math); // accessing object propertics using dot notation. 

console.log(obj['che']); // accessing object propertics using array notation. 
var temp = 'phy';
console.log(obj[temp]);


if(obj[temp])
{
    console.log('Object propertics exists');
}


delete obj.che; // delete property from object.
console.log(obj);


//compare two objects

var obj1 = {
    a: 4,
    b:6
}

var obj2 = {
    a:4,
    b:6
}

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

obj1.a = 5;
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


// Check wheater propertics exists or not in object

console.log('math' in obj); // it's return true. because math exists in obj



// iterate over object propertics.

for (var i in obj)
{
    console.log(i+' : '+obj[i]);
}