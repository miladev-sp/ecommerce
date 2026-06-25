export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number,
) {
  const discountAmount = Math.round((discountPercentage / 100) * price);
  return Math.round(price - discountAmount);
}

export function calculateDiscountAmount(
  price: number,
  discountPercentage: number,
) {
  const discountAmount = Math.round((discountPercentage / 100) * price);
  return discountAmount;
}
