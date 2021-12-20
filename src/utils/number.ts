export function moneyFormat(price: number, sign = "$") {
  const pieces = price.toFixed(0).split("");
  let ii = pieces.length;
  while ((ii -= 3) > 0) {
    pieces.splice(ii, 0, ",");
  }
  return pieces.join("");
}
export function isDay() {
  const hours = new Date().getHours();
  return hours >= 6 && hours < 18;
}
