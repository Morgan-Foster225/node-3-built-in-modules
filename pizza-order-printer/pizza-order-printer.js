/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */
// Import the promises version of the File System module
// so we can use async/await with fs.readFile().
const fs = require("fs/promises");

// Main function to run the program.
async function main() {

  // Get the command entered by the user.
  // Example: node pizza-order-printer.js getAllOrders
  // command = "getAllOrders"
  const command = process.argv[2];

  // Get the order index entered by the user and convert it to a number.
  // Example: node pizza-order-printer.js getOneOrder 2
  // index = 2
  const index = Number(process.argv[3]);

  try {
    // Read the contents of data.json as a string.
    const data = await fs.readFile("data.json", "utf8");

    // Convert the JSON string into a JavaScript array.
    const orders = JSON.parse(data);

    // If the user entered "getAllOrders",
    // print every pizza order on its own line.
    if (command === "getAllOrders") {
      orders.forEach(order => console.log(order));

    // If the user entered "getOneOrder",
    // print only the order at the specified index.
    } else if (command === "getOneOrder") {

      // Check that the index is valid.
      if (index >= 0 && index < orders.length) {

        // Print the order at the requested index.
        console.log(orders[index]);

      } else {
        // Display an error if the index doesn't exist.
        console.log("Order not found. Please enter a valid order number.");
      }

    } else {
      // Display an error if the user entered an invalid command.
      console.log("Invalid command.");
    }

  } catch (error) {
    // Handle errors such as data.json not being found
    // or containing invalid JSON.
    console.error("Error reading data:", error.message);
  }
}

// Call the main function to start the program.
main();