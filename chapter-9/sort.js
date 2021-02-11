var arr = [5, 3, 2, 5, 3, 3, 4, 5,5 ,5, 5, 6, -1, -3, -6, 1, -9, 1, 0];

arr.sort(function(a, b){
    if(a > b)
        return 1;
    else
        return -1;
});

console.log(arr);

arr.sort(function(a, b){
    if(a < b)
        return 1;
    else
        return -1;
})

console.log(arr);


var obj = [
    {
        name: 'debasish',
        roll: 13
    },
    {
        name: 'akash',
        roll: 24
    },
    {
        name: 'mahfuz',
        roll: 08
    },
    {
        name: 'raihan',
        roll: 06
    }
];

obj.sort(function(a, b){
    if(a.roll > b.roll)
        return 1;
    else
        return -1;
})

console.log(obj);