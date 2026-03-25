import { createPerson, getPerson, randomInt } from './helper_functions.js';

window.addEventListener('DOMContentLoaded', () => {
  //buttons
  const add = document.querySelector('.add');
  const double = document.querySelector('.double');
  const show = document.querySelector('.show');
  const sortBy = document.querySelector('.sortBy');
  const calculate = document.querySelector('.calculate');
  const main = document.querySelector('main');

  add.addEventListener('click', async () => {
    const newUser = await createPerson();
    users.push(newUser);
    updateDOM(users);
  });
  double.addEventListener('click', () => {
    const doublePrice = users.map((a) => {
      return { name: a.name, money: a.money * 2 };
    });
    updateDOM(doublePrice);
  });
  show.addEventListener('click', () => {
    const filteredUsers = users.filter((user) => +user.money >= 1000000);
    updateDOM(filteredUsers);
  });
  sortBy.addEventListener('click', () => {
    const sortedArray = users.sort((a, b) => +b.money - +a.money);
    updateDOM(sortedArray);
  });
  calculate.addEventListener('click', () => {
    const total = users.reduce((acc, current) => {
      return acc + +current.money;
    }, 0);
    console.log(total);
  });

  const updateDOM = (data) => {
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
    data.forEach((user) => {
      const h3 = document.createElement('h3');
      h3.classList.add('people');
      user.money = user.money;
      h3.innerHTML = `<strong>${user.name}</strong> $${user.money}`;
      main.appendChild(h3);
    });
  };
});

const users = [];
