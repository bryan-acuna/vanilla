export const getPerson = async () => {
  try {
    const api = 'https://randomuser.me/api/';
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const { name } = data.results[0];
    return name;
  } catch (e) {
    console.error('Failed to fetch person ', e);
  }
};

export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createPerson = async () => {
  const money = randomInt(100000, 2000000);
  const person = await getPerson();
  return {
    name: `${person.first} ${person.last}`,
    money,
  };
};
