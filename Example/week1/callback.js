//----------------example 1------------------------
function first(){
    console.log(1);
  }function second(){
    console.log(2);
  }first();
  second();
  console.log( )
  //-----------------example 2-------------------

 
   function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    console.log('Finished my homework');

    console.log()
});
 //-----------------------example 3-----------------------------
   
  
  function first1(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }function second2(){
    console.log(2);
  }first1();
  second2();