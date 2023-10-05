//Question 1 - Test 1 - 101181929

// Define a function named lowerCaseWords that takes a mixed array as input
function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      // Check if the input is not an array, and reject the promise with an error if it's not an array
      if (!Array.isArray(mixedArray)) {
        reject(new Error('Input is not an array'));
        return;
      }
  
      // Filter the array to keep only string elements and convert them to lowercase
      const filteredLowerCaseArray = mixedArray
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
  
      // Check if there are no valid strings in the array, and reject the promise with an error if no valid strings are found
      if (filteredLowerCaseArray.length === 0) {
        reject(new Error('No valid strings in the array'));
      } else {
        // Resolve the promise with the filtered and lowercased array if there is any valid strings found
        resolve(filteredLowerCaseArray);
      }
    });
  }
  
  // Example usage:
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  // Call lowerCaseWords with the mixedArray as input
  lowerCaseWords(mixedArray)
    .then(result => {
      // If the promise is resolved, log the resulting array
      console.log(result); // Output: ['pizza', 'wings']
    })
    .catch(error => {
      // If the Promise is rejected, log the error message
      console.error('Error:', error.message);
    });
  