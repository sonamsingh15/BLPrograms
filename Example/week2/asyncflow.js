async.parallel([


    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });
  
  // an example using an object instead of an array
  async.parallel({
    task1: function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    task2: function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
      }
  }, function(err, results) {
    console.log(results);
    // results now equals to: { task1: 1, task2: 2 }
  });
  //-------------------series---------------------
  async.series([
    function(callback) {
      console.log('one');
      callback(null, 1);
    },
    function(callback) {
      console.log('two');
      callback(null, 2);
    },
    function(callback) {
      console.log('three');
      callback(null, 3);
    }
  ],
  function(err, results) {
    console.log(result);
    // results is now equal to [1, 2, 3]
  });
  
  async.series({
    1: function(callback) {
      setTimeout(function() {
        console.log('Task 1');
        callback(null, 'one');
      }, 200);
    },
    2: function(callback) {
      setTimeout(function() {
        console.log('Task 2');
        callback(null, 'two');
      }, 300);
    },
    3: function(callback) {
      setTimeout(function() {
        console.log('Task 3');
        callback(null, 'three');
      }, 100);
    }
  },
  function(err, results) {
    console.log(results);
    // results is now equal to: { 1: 'one', 2: 'two', 3:'three' }
  });
  //----------------------------Waterfall---------------------------------------------------------
  async.waterfall([
    function(callback) {
      callback(null, 'Task 1', 'Task 2');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
      let arg3 = arg1 + ' and ' + arg2;
      callback(null, arg3);
    },
    function(arg1, callback) {
      // arg1 now equals 'Task1 and Task2'
      arg1 += ' completed';
      callback(null, arg1);
    }
  ], function(err, result) {
    // result now equals to 'Task1 and Task2 completed'
    console.log(result);
  });
  
  // Or, with named functions:
  async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
  ], function(err, result) {
    // result now equals 'Task1 and Task2 completed'
    console.log(result);
  });
  
  function myFirstFunction(callback) {
    callback(null, 'Task 1', 'Task 2');
  }
  function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
    let arg3 = arg1 + ' and ' + arg2;
    callback(null, arg3);
  }
  function myLastFunction(arg1, callback) {
    // arg1 now equals 'Task1 and Task2'
    arg1 += ' completed';
    callback(null, arg1);
  }
  //-------------------queue----------------------------------
  // create a queue object with concurrency 2
var q = async.queue(function(task, callback) {
    console.log('Hello ' + task.name);
    callback();
  }, 2);
  
  // assign a callback
  q.drain = function() {
    console.log('All items have been processed');
  };
  
  // add some items to the queue
  q.push({name: 'foo'}, function(err) {
    console.log('Finished processing foo');
  });
  
  q.push({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });
  
  // add some items to the queue (batch-wise)
  q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('Finished processing item');
  });
  
  // add some items to the front of the queue
  q.unshift({name: 'bar'}, function (err) {
    console.log('Finished processing bar');
  });
  