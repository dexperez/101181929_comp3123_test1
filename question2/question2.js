//Question 2 - Test 1 - 101181929

// Define a function that returns a promise which resolves after a delay
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = { message: 'delayed success!' };
        resolve(success); // Resolve the promise with the success object
      }, 500);
    });
  };
  
  // Define a function that returns a promise which rejects after a delay
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = { error: 'delayed exception!' };
        reject(error); // Reject the promise with the error object
      }, 500);
    });
  };
  
  // Call the resolvedPromise and handle the result
  resolvedPromise()
    .then((result) => {
      console.log(result); // Output the resolved result
    })
    .catch((error) => {
      console.error(error); // Output any errors that occur during execution
    });
  
  // Call the rejectedPromise and handle the result
  rejectedPromise()
    .then((result) => {
      console.log(result); // Output the resolved result (will not be reached in this case)
    })
    .catch((error) => {
      console.error(error); // Output the error result
    });
  