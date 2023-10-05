//Question 3 - Test 1 - 101181929
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs'); // Define the path to the Logs directory

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// Change the current working directory to the Logs directory
process.chdir(logsDirectory);

// Create 10 log files and write some text into each file
for (let i = 1; i <= 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(logsDirectory, fileName);
  fs.writeFileSync(filePath, `This is log file ${i} content.`);
  console.log(`Created file: ${fileName}`);
}

console.log('Log files created.');
