export function generateOptions(options) {
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`)
    .join('');
}

export function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency,
  }).format(amount);
}
