export function formatPrice(price: number) {
  return (price / 100).toLocaleString("uk-UA", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: "code",
  });
}
