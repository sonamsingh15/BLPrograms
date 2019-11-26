const myObj = {
    name: 'Skip',
    age: 2,
    favoriteFood: 'Steak'
  };
  
  const myObjStr = JSON.stringify(myObj);
  
  console.log(myObjStr);
  // "{"name":"Skip","age":2,"favoriteFood":"Steak"}"
  
  console.log(JSON.parse(myObjStr));
  // Object {name:"Skip",age:2,favoriteFood:"Steak"}
//-----------------------------------------------}
  const myArr = ['bacon', 'letuce', 'tomatoes'];

const myArrStr = JSON.stringify(myArr);

console.log(myArrStr);
// "["bacon","letuce","tomatoes"]"

console.log(JSON.parse(myArrStr));