//Question 3 - Test 1 - 101181929
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs'); // Define the path to the Logs directory

// Function to remove a directory and its contents recursively
const removeDirectory = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        removeDirectory(filePath); // Recursively remove subdirectories
      } else {
        fs.unlinkSync(filePath); // Delete files
        console.log(`Deleted file: ${filePath}`);
      }
    });
    fs.rmdirSync(dirPath); // Remove the empty directory
    console.log(`Deleted directory: ${dirPath}`);
  }
};

// Check if the Logs directory exists and remove it
if (fs.existsSync(logsDirectory)) {
  console.log('Files to delete:');
  removeDirectory(logsDirectory);
} else {
  console.log('Logs directory does not exist.');
}
