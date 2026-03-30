import { words } from './state.js';

const wrong_letters = document.querySelector('#wrong-letters');
const popup_container = document.querySelector('#popup-container');
const figure_container = document.querySelector('.figure-container');

window.addEventListener('DOMContentLoaded', () => {
  const randomWord = words[Math.floor(Math.random() * words.length)];

  displayWord(randomWord);
  window.addEventListener('keydown', (e) => {
    const guessedLetter = e.key;
    if (/^[a-z]$/.test(guessedLetter)) {
      if (
        correctLetters.includes(guessedLetter) ||
        incorrectLetters.includes(guessedLetter)
      ) {
        alert('Letter has already been guessed');
      } else {
        if (randomWord.includes(guessedLetter)) {
          correctLetters.push(guessedLetter);
          displayWord(randomWord);
        } else {
          incorrectLetters.push(guessedLetter);
          wrongGuess(currentGuess);
          currentGuess += 1;
          if (currentGuess >= 6) {
            alert('You lost retry');
          }
        }
      }
    }
  });
});
