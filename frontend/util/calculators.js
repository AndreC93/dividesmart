export const splitEqually = (balance, numOfPeople) => {
  balance = regexCheck(balance);
  const amount = parseFloat(balance) / numOfPeople;
  return Math.round(amount * 100) / 100;
};

function regexCheck(balance) {
  if (balance.indexOf('.') != balance.lastIndexOf('.')) {
    return 0;
  } else {
    return balance.replace(/[^0-9.]+/, '');
  }
}

export const splitByPercent = (balance, percent) => {
  return Math.round(balance * (percent / 100) );
};