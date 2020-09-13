import { checkGuessAndRandom } from "./solution.js";
import inquirer from "inquirer";

await inquirer.prompt([
  {
    message:
      "Guess my number. It's between 0 and 10... \n Press return to start.",
    name: "introMsg",
  },
]);

// NOTE: use return values for internal details of solution
// infinite loop until guess is correct
while (true) {
  const { guess } = await inquirer.prompt([
    { message: "Enter a number", name: "guess", type: "number" },
  ]);

  const { correct, guessCounter } = checkGuessAndRandom(guess);

  if (correct) {
    console.log(
      `Well done, you guessed correctly. It took you ${guessCounter} guesses.`
    );
    break;
  } else {
    console.log(`That's not right! You've had ${guessCounter} guesses now.`);
  }
}
