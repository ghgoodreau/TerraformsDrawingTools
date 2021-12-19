// copies the grid
let gridCopy = [];
// etherscan ready array
let etherscanArray = [];

// parse over each array in the 32x32 grid
for (i in grid) {
  // start with a blank string
  let indexCopy = "";
  // iterate over the grids index
  for (x in grid[i]) {
    // if it's not a blank space, copy the drawing and add it to the grid
    if (classIds.indexOf(grid[i][x].activeClass) > -1) {
      indexCopy += classIds.indexOf(grid[i][x].activeClass.toString());
      // otherwise, add a blank space to the array
    } else {
      indexCopy += 9;
    }
  }
  // push the string to the grid
  gridCopy.push(indexCopy);
}

// creates the etherscan ready array
for (let i = 0; i < gridCopy.length - 1; i += 2) {
  let concatenatedHeight = "";
  concatenatedHeight = gridCopy[i] + gridCopy[i + 1];
  // converts it to a BigInt for ease of entry into etherscan
  etherscanArray.push(BigInt(concatenatedHeight));
}

// logs output for user to copy
console.log(etherscanArray);
