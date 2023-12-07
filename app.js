// Step 1: Create a grid array variable
let grid = [];

// Step 2: Set a value of 64 for the number of cells
const numCells = 64;

// Step 3: Set a counter to 0
let counter = 0;

// Step 4: Create a global variable to be used for the row array
let row = [];

// Step 5: Create a loop that will iterate up to the number of cells you want in the array
for (let i = 0; i <= numCells; i++) {
    // Step 6: Add an outer if statement to check if the counter is divisible by 8
    if (counter % 8 === 0) {
        // Step 7: Inside the preceding if statement, add another if statement to check if the row is undefined
        if (row !== undefined) {
            // Add the row to the main grid array
            grid.push(row);
        }
        // If the counter is divisible by 8, clear the row array
        row = [];
    }

    // Step 9: Increment the main counter by 1
    counter++;

    // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
    let temp = counter;
    row.push(temp);

    // Step 11: Check if the value of the counter is equal to the total number of columns you want
    if (counter % 8 === 0) {
        // If it is, add the current row to the grid
        grid.push(row);
    }
}

// Step 13: Output the grid into the console
console.log(grid);