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
    // Answers to uppercase, split into arrays of single characters, and order alphabetically
    const wordOneNowArray = answers.wordOne.toUpperCase().split('').sort()
    const wordTwoNowArray = answers.wordTwo.toUpperCase().split('').sort()

    // Check all array items match, returning boolean
    const outcome = checkArraysMatch(wordOneNowArray, wordTwoNowArray)

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

const checkArraysMatch = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }

  return arr1.every((char, i) => char === arr2[i])

  return true
}
