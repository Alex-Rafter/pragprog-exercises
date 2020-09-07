//Import Modules
import {
  randomNum,
  correctYet,
  checkGuessAndRandom
} from './32-guess-the-number.js'
import inquirer from 'inquirer'

//Initial message to player with game instructions
await inquirer.prompt([
  {
    message:
      "Guess my number. It's between 0 and 10... \n Press return to start.",
    name: 'introMsg'
  }
])

//Request player to enter their guess
//This request will loop if guess is incorrect
while (!correctYet) {
  const { n } = await inquirer.prompt([
    { message: 'Enter a number', name: 'n', type: 'number' }
  ])

  checkGuessAndRandom(randomNum, n)
}
