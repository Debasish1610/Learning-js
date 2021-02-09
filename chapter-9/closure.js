// if one function can use another scope data then it is called closure. 

function a()
{
    var x = 5;
    var y = 50;
    return function()
    {
        console.log(x, y);
    }
}

var temp = a();

temp();