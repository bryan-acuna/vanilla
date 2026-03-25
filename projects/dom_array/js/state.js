import { fetchRandomUser } from './api.js';

let users = [];

export const addNewUsers = async () => {
  const randomUser = await fetchRandomUser();
  if (randomUser === null) {
    return;
  }
  const newUser = {
    name: `${randomUser.first} ${randomUser.last}`,
    money: Math.floor(Math.random() * 2000000),
  };
  users.push(newUser);
  return [...users];
};

export const doublePrice = () => {
  users = users.map((user) => ({
    ...user,
    money: +user.money * 2,
  }));
  return [...users];
};

export const getMillionaires = () =>
  users.filter((user) => +user.money >= 1000000);

export const sortByRichest = () => users.sort((a, b) => +b.money - +a.money);

export const totalWealth = () =>
  users.reduce((acc, current) => {
    return acc + +current.money;
  }, 0);
