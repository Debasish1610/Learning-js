function argumentObject(a, b, c)
{
    console.log(arguments);
    for(var i = 0; i < arguments.length; i++)
    {
        console.log(arguments[i]);
    }
}

argumentObject(5, 6, 4);

function argumentObjectWithoutParameter()
{
    console.log(arguments);
}

argumentObjectWithoutParameter(4,5,5,4,3,3);