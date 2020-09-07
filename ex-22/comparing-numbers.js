// Programme compares three user numbers and returns the largest
// Used also as a simple experiment with a nested ternary operator

// Create new array of user input command line arguments
// And change type of each command line argument from string to int
const arrayArgs = process.argv.slice(2).map((item) => parseInt(item))

// Define how long array should be
const correctArrayLength = 3

// Check user has input correct number of command line arguments
const isLengthCorrect = () => arrayArgs.length === correctArrayLength

// Function to calculate largest number and print to screen
function calcLargest () {
  const largestNumber =
    arrayArgs[0] > arrayArgs[1] && arrayArgs[0] > arrayArgs[2]
      ? arrayArgs[0]
      : arrayArgs[1] > arrayArgs[0] && arrayArgs[1] > arrayArgs[2]
        ? arrayArgs[1]
        : arrayArgs[2] > arrayArgs[0] && arrayArgs[2] > arrayArgs[1]
          ? arrayArgs[2]
          : 'error'
  console.log(`the largest number is ${largestNumber}`)
}

// Conditional to run main function
// If user input the correct number of command line arguments
// Or print error message if not
if (isLengthCorrect()) {
  calcLargest()
} else {
  console.log('Please input three numbers, and i\'ll return the largest.')
}
