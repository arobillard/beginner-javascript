const endpoint = 'https://api.exchangeratesapi.io/latest';
const ratesByBase = {};

export async function fetchRates(base = 'CAD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

export async function convert(amount, from, to) {
  // first check if we have the rates
  if (!ratesByBase[from]) {
    console.log(`don't have $from to convert to ${to}, lets get`);
    const rates = await fetchRates(from);
    console.log('rates');
    console.log(rates);
    ratesByBase[from] = rates;
  }
  // convert amount passed in
  const rate = ratesByBase[from].rates[to];
  const convertAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertAmount} ${to}`);
  return convertAmount;
}
