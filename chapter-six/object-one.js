var user = {
    name: 'debasish', 
    age: 25,
    location: 'dhamrai',
    subject: ['math', 'english', 'physics', 'biology', {mark: 30, temp: 56}],

    login: function(){
        console.log('You are just logged in');
    },
    logout: function(){
        console.log('You are just logged out');
    },
    getAllSubject: function(){
        //print each subject by foreach method. 
        this.subject.forEach(function(value){
            console.log(value);
        });
    },

    // we also can use function this way.
    display(){
        console.log(this.name, this.age, this.location);
    }
}


///These are the three ways we can access object
console.log(user.name);
console.log(user['age']);
var key = 'location';
console.log(user[key]);
user.login();
user.logout();
console.log(user.subject);
console.log(user.subject[0]);
console.log(user['subject'][1]);
user.getAllSubject();
user.display();
console.log(user.subject[4].mark);