/* -------------------------
💎 Birthstone Finder
----------------------------
We will refactor the Birthstone Finder app to read birthstone data from a separate JSON file.
------------------------- */
// Import the built-in File System module
import fs from "fs";

// Read the contents of the data.json file as a string
const data = fs.readFileSync("./data.json", "utf8");

// Convert the JSON string into a JavaScript object
const birthstones = JSON.parse(data);

// Get the month entered by the user from the command line
const month = process.argv[2];

// Check if the entered month exists in the birthstones object
if (birthstones[month]) {
  // If the month is valid, print its birthstone
  console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
} else {
  // If the month is invalid, print an error message
  console.log("Invalid month. Please enter a valid month.");
}