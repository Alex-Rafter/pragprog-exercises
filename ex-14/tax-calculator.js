// Inquirer : START
import inquirer from 'inquirer'

inquirer
  .prompt([
    {
      name: 'introMsg',
      message:
        'I will calculate the VAT you have to for purchases in England or Ireland.\n Press enter to start'
    },
    {
      name: 'orderAmount',
      message: 'What is the pre-tax amount?'
    },
    {
      name: 'taxArea',
      message: 'What is the country (England or Ireland)?'
    }
  ])
  .then((answers) => {
    const amountToInt = parseInt(answers.orderAmount)
    const amountStillStr = answers.orderAmount
    checkAndReturnResult(answers.taxArea, amountToInt, amountStillStr)
  })
// Inquirer : END

// Array of country objects, including their tax-rates
var countryObjsCollection = [
  {
    country: 'England',
    taxRate: 20
  },
  {
    country: 'Ireland',
    taxRate: 23
  }
]

// Main function: checks the user input matches values in programme
// On success, calcuate, and log, total with VAT. Or log relevant error message
const checkAndReturnResult = (userArea, userAmount, originalValue) => {
  let totalWithTax
  // Calculate tax rate and add this to user amount
  const calcPostTaxTotal = (userAmount, taxRate) => {
    return (userAmount * taxRate) / 100 + userAmount
  }

  // Return index position of the country object that matches user country.
  // Or return -1 if no match found.
  const countryMatch = countryObjsCollection.findIndex(
    (obj) => obj.country.toLowerCase() === userArea.toLowerCase()
  )

  // If index position is greater than -1, calculate new total with tax.
  // Else log error message.
  if (countryMatch > -1) {
    totalWithTax = calcPostTaxTotal(
      userAmount,
      countryObjsCollection[countryMatch].taxRate
    )
  } else {
    // Error message
    console.log(`
    Sorry, i couldn't find that country on our list.
    `)
    return
  }

  // Display total plus tax, or log error message
  if (totalWithTax) {
    console.log(`You will have to pay a total of £${totalWithTax}`)
  } else {
    console.log(`Are you sure ${originalValue} was a number? Maybe try again.`)
  }
}
