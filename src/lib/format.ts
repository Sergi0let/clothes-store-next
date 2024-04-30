const CURRENCY_FORMATTER = new Intl.NumberFormat("uk-UA", {
  currency: "UAH",
  currencyDisplay: "code",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}
export function formatPrice(price: number) {
  return (price / 100).toLocaleString("uk-UA", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: "code",
  });
}

const NUMBER_FORMATTER = new Intl.NumberFormat("uk-UA");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
