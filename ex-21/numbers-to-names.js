// Simple programme: enter a number between 1 - 12
// And return the corresponding month of year

// User input variable from command line argument
const userInput = parseInt(process.argv.slice(2)[0] - 1)
// Array of months of the year
const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Decemeber'
]

// User selected month
const numberToMonth = () => monthsOfTheYear[userInput]

// Messages to log
const success = () => console.log(`The month is ${numberToMonth()}.`)
const error = () =>
  console.log('Error. Try again with a number between 1 and 12.')

// Print success message if input matches to an array index position (i.e. a month)
// Or print error message if not
if (numberToMonth() !== undefined) {
  success()
} else {
  error()
}
