const dateFormatter = new Intl.DateTimeFormat("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export const formatDate = (timestamp: number) =>
  dateFormatter.format(new Date(timestamp * 1000));

export const formatPrice = (price: number) =>
  priceFormatter.format(price / 100);
