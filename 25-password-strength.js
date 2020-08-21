// Inquirer :START
const inquirer = require('inquirer')
inquirer
  .prompt([
    {
      name: 'userPassword',
      message:
        'Please enter your new password. It must be at least 8 characters long.'
    }
  ])
  .then((answers) => {
    const password = answers.userPassword
    runCheck(password)
  })
// Inquirer :END

// Regex to check against user input
const runCheck = (password) => {
  const regObj = {
    number: /\d/g,
    lowerChar: /[a-z]/g,
    uppperChar: /[A-Z]/g,
    specialChar: /[!@#$%^&*)(+=._-]/g
  }

  // Function for use with character collections, returning score of 1 if null and 0 if not null
  const nullOrNotScore = (x) => (password.match(x) != null ? 0 : 1)

  // Truthy / falsy expressions from regex and user input matching
  const inputObj = {
    number: nullOrNotScore(regObj.number),
    lowerChar: nullOrNotScore(regObj.lowerChar),
    uppperChar: nullOrNotScore(regObj.uppperChar),
    specialChar: nullOrNotScore(regObj.specialChar),
    totalChars: password.length
  }

  // Create array of InputObj values
  const charArr = Object.values(inputObj)
  // Remove password length value, and add base score of 4 to array
  charArr.splice(-1, 1, 4)
  // Reduce array to single value, subracting each value from the base score of 4
  charArr.sort(function (a, b) {
    return b - a
  })
  const score = charArr.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  )

  // Score used to determine message to output
  let msg
  switch (score) {
    case 4:
      msg = 'very strong'
      break

    case 3:
      msg = 'strong'
      break

    case 2:
      msg = 'weak'
      break

    case 1:
      msg = 'very weak'
      break

    default:
      msg = 'not valid. Please try again.'
      break
  }

  // Output message based on char legnth or score
  if (inputObj.totalChars < 8) {
    console.log(
      'Your password is too short. Please try again with 8 or more characters.'
    )
  } else {
    console.log(`
  Your password is ${msg}.
  `)
  }
}
