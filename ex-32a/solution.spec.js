import { checkGuessAndRandom } from "./solution.js";

test("attempting 0..10 in sequence will always produce a correct guess", () => {
  let attempt = 0;
  while (true) {
    const { correct, guessCounter } = checkGuessAndRandom(attempt);

    // check that the guessCounter is incremented properly
    // NOTE: the guessCounter is 1-based, the attempt 0-based
    expect(guessCounter).toEqual(attempt + 1);

    // a correct guess must be in the range 0..10
    if (correct) {
      expect(attempt).not.toBeLessThan(0);
      expect(attempt).not.toBeGreaterThan(10);
      break;
    } else {
      // not correct? try again
      attempt++;
    }
  }
});
