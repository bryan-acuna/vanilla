const main = document.querySelector('main');

export const updateDOM = (data) => {
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
  data.forEach((user) => {
    const h3 = document.createElement('h3');
    h3.classList.add('person');
    h3.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
    main.appendChild(h3);
  });
};

export const updateEntireWealth = (total) => {
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3> `;
  main.appendChild(wealthEl);
};

const formatMoney = (number) => {
  return '$' + number.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
};
