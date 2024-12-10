function sortDigitNamesByNumericOrder(arr) {
  const sortArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return arr.sort((a, b) => sortArr.indexOf(a) - sortArr.indexOf(b));
}

console.log(sortDigitNamesByNumericOrder(['nine', 'one']));
console.log(sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero']));
