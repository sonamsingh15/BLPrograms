const wait= time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello
//------------------------------------------------------------------------2

const wait1 = (
    time,
    cancel = Promise.reject()
  ) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, time);
    const noop = () => {};
  
    cancel.then(() => {
      clearTimeout(timer);
      reject(new Error('Cancelled'));
    }, noop);
  });
  //-----------------------------------------------------------------------3
  
  const shouldCancel = Promise.resolve(); // Yes, cancel
  // const shouldCancel = Promise.reject(); // No cancel
  
  wait(2000, shouldCancel).then(
    () => console.log('Hello!'),
    (e) => console.log(e) // [Error: Cancelled]
  );
  //---------------------------------------------------------------------------4
  // HOF Wraps the native Promise API
// to add take a shouldCancel promise and add
// an onCancel() callback.
const speculation = (
    fn,
    cancel = Promise.reject() // Don't cancel by default
  ) => new Promise((resolve, reject) => {
    const noop = () => {};
  
    const onCancel = (
      handleCancel
    ) => cancel.then(
        handleCancel,
        // Ignore expected cancel rejections:
        noop
      )
      // handle onCancel errors
      .catch(e => reject(e))
    ;
  
    fn(resolve, reject, onCancel);
  });

//-------------------------------------------------------------------------------5
const wait3 = (
  time,
  cancel = Promise.reject() // By default, don't cancel
) => speculation((resolve, reject, onCancel) => {
  const timer = setTimeout(resolve, time);

  // Use onCancel to clean up any lingering resources
  // and then call reject(). You can pass a custom reason.
  onCancel(() => {
    clearTimeout(timer);
    reject(new Error('Cancelled'));
  });
}, cancel); // remember to pass in cancel!

wait(200, wait(500)).then(
  () => console.log('Hello!'),
  (e) => console.log(e)
); // 'Hello!'

wait(200, wait(50)).then(
  () => console.log('Hello!'),
  (e) => console.log(e)
); // [Error: Cancelled]