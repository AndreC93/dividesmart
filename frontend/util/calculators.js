export const splitEqually = (balance, numOfPeople) => {
  const amount = parseFloat(balance) / numOfPeople;
  return Math.round(amount * 100) / 100;
};
