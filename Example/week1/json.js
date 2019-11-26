let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  console.log(user);                                                                                               

  console.log( );
  
  //   --------2nd example-----------
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[3] );                                                 
  console.log( )
//------------------3rd example--------
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); 
  
  console.log(json);                                            
                                                   
  //---------------4th example ------------
  console.log()                                             

  let user1 = {
    name: "rohan",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  console.log(JSON.stringify(user1, null, 2));
  console.log()
  //--------------5th example----------------
  let room = {
    number: 23
  };
  
  let meet = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };
  
  console.log( JSON.stringify(meet) );
  console.log()
  //----------6th example------------------------
  let numbers2 = "[0, 1, 2, 3]";

numbers2 = JSON.parse(numbers2);

console.log( numbers2[1] ); 
console.log()
//------------7th example---------------------
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user3 = JSON.parse(userData);

console.log( user3.friends[2] ); // 1
  //---------------------------------------















