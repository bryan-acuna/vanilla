const word = document.querySelector('.word');
const figure_part = document.querySelectorAll('.figure-part');

export function displayWord(selectedWord, correctLetters) {
  word.innerHTML = '';
  selectedWord.split('').forEach((letter) => {
    const newEl = document.createElement('span');
    newEl.classList.add('letter');
    newEl.innerText = correctLetters.includes(letter) ? letter : '';
    word.appendChild(newEl);
  });

  const newW = word.innerText.replace(/\n/g, '');

  if (newW === selectedWord) {
    console.log('you won');
  }
}

const wrongGuess = (index) => {
  figure_part[index].style.display = 'block';
};
