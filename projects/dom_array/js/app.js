import {
  addNewUsers,
  doublePrice,
  getMillionaires,
  sortByRichest,
  totalWealth,
} from './state.js';
import { updateDOM, updateEntireWealth } from './ui.js';

window.addEventListener('DOMContentLoaded', () => {
  //buttons
  const add = document.querySelector('.add');
  const double = document.querySelector('.double');
  const show = document.querySelector('.show');
  const sortBy = document.querySelector('.sortBy');
  const calculate = document.querySelector('.calculate');
  const container = document.querySelector('.container');

  add.addEventListener('click', async () => {
    const newUsers = await addNewUsers();
    updateDOM(newUsers);
  });
  double.addEventListener('click', () => {
    const priceDouble = doublePrice();
    updateDOM(priceDouble);
  });
  show.addEventListener('click', () => {
    const filteredUsers = getMillionaires();
    updateDOM(filteredUsers);
  });
  sortBy.addEventListener('click', () => {
    const sortedArray = sortByRichest();
    updateDOM(sortedArray);
  });
  calculate.addEventListener('click', () => {
    const total = totalWealth();
    updateEntireWealth(total);
  });
});
