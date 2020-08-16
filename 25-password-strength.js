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

  // Truthy / falsy expressions from regex and user input matching
  const inputObj = {
    number: password.match(regObj.number),
    lowerChar: password.match(regObj.lowerChar),
    uppperChar: password.match(regObj.uppperChar),
    specialChar: password.match(regObj.specialChar),
    totalChars: password.length
  }

  // Score set to 4 and then redcued by 1 for every null value
  let score = 4

  Object.values(inputObj).forEach((item) => {
    if (!item) score--
  })

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
