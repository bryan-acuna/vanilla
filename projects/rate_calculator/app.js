const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const valueToConvert = document.querySelector('#amount-one');
const inputResult = document.querySelector('#amount-two');
const swapButton = document.querySelector('#swap');
const rateEl = document.querySelector('#rate');
const api = '1a2d2cdd49344c96160484a4';

const currency = async () => {
  const response = await fetch(
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json',
  );
  const data = await response.json();
  const currencies = Object.keys(data);
  [currencyOne, currencyTwo].forEach((select) => {
    console.log(select);
    currencies.forEach((currency) => {
      const option = document.createElement('option');
      option.value = currency.toUpperCase();
      option.textContent = currency.toUpperCase();
      select.appendChild(option);
    });
  });
  currencyOne.value = 'USD';
  currencyTwo.value = 'EUR';
};

const getConversionRate = async () => {
  const conversion = await fetch(
    `https://v6.exchangerate-api.com/v6/${api}/pair/${currencyOne.value}/${currencyTwo.value}/${valueToConvert.value}`,
  );
  const conversionData = await conversion.json();
  inputResult.value = conversionData.conversion_result;
};

window.addEventListener('DOMContentLoaded', async () => {
  await currency();
  getConversionRate(currencyOne.value, currencyTwo.value, valueToConvert.value);
  currencyOne.addEventListener('change', getConversionRate);
  currencyTwo.addEventListener('change', getConversionRate);
  valueToConvert.addEventListener('input', getConversionRate);
  swapButton.addEventListener('click', swapValues);
});

const swapValues = () => {
  [currencyOne.value, currencyTwo.value] = [
    currencyTwo.value,
    currencyOne.value,
  ];
  getConversionRate(currencyOne.value, currencyTwo.value, valueToConvert.value);
};
