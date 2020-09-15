import inq from 'inquirer'
const inquirer = inq

const listOfNames = [
  'John Smith',
  'Jackie Jackson',
  'Bill Withers',
  'Tom Grundy',
  'Nelson Snell'
]

inquirer
  // Questions
  .prompt([
    {
      name: 'nameToRemove',
      message: `Please enter a name to remove. from this list
      ${listOfNames[0]}
      ${listOfNames[1]}
      ${listOfNames[2]}
      ${listOfNames[3]}
      ${listOfNames[4]}
    `
    }
  ])
  .then((answers) => {
    printNames(listOfNames, answers.nameToRemove)
  })

function printNames (arr, name) {
  arr.forEach(function (item) {
    if (item !== name) {
      console.log(`${item}`)
    }
  })
}
