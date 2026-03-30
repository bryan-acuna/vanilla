export const words = [
  'request',
  'private',
  'endorse',
  'clique',
  'adjust',
  'split',
  'medieval',
  'freight',
  'wardrobe',
  'orchestra',
];

export const correctLetters = [];

export const incorrectLetters = [];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export let currentGuess = 0;
