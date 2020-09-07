// Logic for Guess The Number Game
export const randomNum = Math.round(Math.random() * 10)
export let guessCounter = 0
export let correctYet = false

// Function checks users guess against randomly generated number
export function checkGuessAndRandom (randomNum, userGuess) {
  // Check if numbers match,
  // If they do, diplay message and number of guesses made
  // If they don't match, display message and add to guess-count
  if (randomNum === userGuess) {
    guessCounter++
    console.log(
      `Well done, you guessed correctly. It took you ${guessCounter} guesses.`
    )
    correctYet = true
  } else if (randomNum !== userGuess) {
    guessCounter++
    console.log(`That's not right! You've had ${guessCounter} guesses now.`)
  }
}
