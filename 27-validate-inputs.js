// Inquirer:START
const inquirer = require('inquirer')
inquirer
  // Questions
  .prompt([
    {
      name: 'firstName',
      message: 'Please enter your first name.'
    },
    {
      name: 'secondName',
      message: 'And now your surname name.'
    },
    {
      name: 'employeeId',
      message:
        'Please enter your six-digit alpha-numeric employee ID e.g. AF-1725.'
    },
    {
      name: 'postCode',
      message: 'And, finally, your post code.'
    }
  ])
  .then((answers) => {
    // Answers to User Input Object
    const userInput = {
      firstName: answers.firstName.toUpperCase(),
      secondName: answers.secondName.toUpperCase(),
      employeeId: answers.employeeId.toUpperCase(),
      postCode: answers.postCode.toUpperCase()
    }
    // Run checks and output message
    runChecks(userInput)
  })
// Validation functions

// Check inputs filled in
const inputsFilled = (value) => value !== null

// Check min char length met for first and second name
const min2Chars = (char) => char.length > 2

// Check employee id format
const checkIdFormat = (id) => /[A-Z]{2}[-]{1}[0-9]{4}/g.test(id)
// Check post code format
const checkPostCodeFormat = (pCode) => {
  pCode = pCode.toUpperCase()
  return /[A-Z]{2}[0-9]{2}[A-Z]{2}/g.test(pCode)
}

const runChecks = (userInput) => {
  // Inquirer :END
  const printFirst = () =>
    inputsFilled(userInput.firstName) && min2Chars(userInput.firstName)
      ? 'First Name Conditions Met'
      : 'No. Name conditions not met'

  const printSecond = () =>
    inputsFilled(userInput.secondName) && min2Chars(userInput.secondName)
      ? 'Second name conditions met.'
      : 'No. surname conditions not met.'

  const printId = () =>
    checkIdFormat(userInput.employeeId)
      ? 'ID format conditions Met.'
      : 'No. ID format conditions not met.'

  const printPostCode = () =>
    checkPostCodeFormat(userInput.postCode)
      ? 'Post code format conditions met.'
      : 'No. Post code format conditions not met.'

  // Print Output
  console.log(`
    ${printFirst()}
    ${printSecond()}
    ${printId()}
    ${printPostCode()}
    `)
}
