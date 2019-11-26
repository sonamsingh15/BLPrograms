function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
  }
  
  function failureCallback(error) {
    console.error("Error generating audio file: " + error);
  }
  
  //createAudioFileAsync(audioSettings, successCallback, failureCallback);
//   createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
//   const promise = createAudioFileAsync(audioSettings); 
// promise.then(successCallback, failureCallback);
// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
//--------------------------------------------
async function foo() {
    try {
      const result = await doSomething();
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
      failureCallback(error);
    }
  }
  
  