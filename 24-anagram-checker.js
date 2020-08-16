const inquirer = require('inquirer')
inquirer
  /* Questions */
  .prompt([
    {
      name: 'wordOne',
      message: 'Enter a word'
    },
    {
      name: 'wordTwo',
      message: "Now enter your second word, and i'll check if they're anagrams"
    }
  ]) /* Answers */
  .then((answers) => {
    // Answers to uppercase
    const stringOne = answers.wordOne.toUpperCase()
    const stringTwo = answers.wordTwo.toUpperCase()

    // Strings split into arrays of single characters
    const [x, y] = stringsToArrays(stringOne, stringTwo)
    // These arrays then ordered alphabetically
    const [ar1, ar2] = orderArrays(x, y)

    // Check all array items match, returning boolean
    const outcome = checkArraysMatch(ar1, ar2)

    // Output statements
    if (outcome === true) {
      console.log(
        `The words ${answers.wordOne} and ${answers.wordTwo} are anagrams!`
      )
    } else {
      console.log(
        `Ahhhhh no, the words ${answers.wordOne} and ${answers.wordTwo} are not anagrams.`
      )
    }
  })

const stringsToArrays = (stringOne, stringTwo) => {
  const arrayOne = stringOne.split('')
  const arrayTwo = stringTwo.split('')
  return [arrayOne, arrayTwo]
}

const orderArrays = (firstWord, secondWord) => {
  firstWord.sort()
  secondWord.sort()
  return [firstWord, secondWord]
}

const checkArraysMatch = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }

  arr1.forEach((item1) =>
    arr2.forEach((item2) => {
      if (item1 !== item2) {
        return false
      }
    })
  )

  return true
}
