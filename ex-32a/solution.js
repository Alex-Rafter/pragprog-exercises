// NOTE: don't export internal details
// this data is used across calls, so it is outside of thde function
const randomNum = Math.round(Math.random() * 10);
let guessCounter = 0;

export function checkGuessAndRandom(guess) {
  // this boolean is unique to the function, so is goes inside
  let correct = false;

  if (randomNum === guess) {
    guessCounter++;
    correct = true;
  } else {
    // NOTE: no need to specify opposie condition in else above
    guessCounter++;
  }

  // NOTE: no console.log in the solution, as it is part of the UI
  return { correct, guessCounter };
}
