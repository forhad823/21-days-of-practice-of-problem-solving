function digitsToNumber(digits) {
  let Number = 0;
  for (let i = 0; i < digits.length; i++) {
    // Number += digits[i] * 10 ** i;
    Number += digits[i] * Math.pow(10, i);
  }
  return Number;
}
//------------ hw-1 -------------
function numberToDigits(number) {
  let result = [];
  while (number > 0) {
    const lastDigit = Math.floor(number % 10);
    result.push(lastDigit);
    number = Math.floor(number / 10);
  }
  result.reverse();

  // let highestExponent = 0;
  // while (Math.floor(number / 10 ** highestExponent) !== 0) {
  //   highestExponent += 1;
  // }
  // let dividend = number;
  // // for looping, highest exponent has increased 1 than real highest.
  // for (let i = highestExponent - 1; i >= 0; i--) {
  //   result.push(Math.floor(dividend / 10 ** i));
  //   dividend = dividend % 10 ** i;
  // }

  return result;
}

function removeDecimalPoint(number) {
  let modifiedNumber = number;
  while (modifiedNumber % 1 !== 0) {
    modifiedNumber *= 10;
  }
  return modifiedNumber;
}

function wholeFractionCounter(number) {
  let whole = Math.floor(number);
  let fraction = Number((number - whole).toFixed(10)); // .toFixed(10) returns string.

  let fractionCount = 0;
  while (fraction % 1 !== 0) {
    fraction = Number((10 * fraction).toFixed(10));
    fractionCount++;
  }
  let wholeCount = 0; // 0 also counted as a number
  while (whole !== 0) {
    wholeCount++;
    whole = Math.floor(whole / 10);
  }

  return { wholeCount: wholeCount, fractionCount: fractionCount };
}

// __________ hw-5 ___________________
function numberGenerator(whole, fraction) {
  let number = 0;
  // transforming whole to number
  for (let i = 0; i < whole.length; i++) {
      number = whole[i] + 10 * number; //
  }
  // transforming fraction to number
  for (let i = 1; i <= fraction.length; i++) {
    number += fraction[i - 1] * 10 ** -i; // 10^(-n)
  }

  return number;
}

console.log(numberGenerator([1, 2, 6, 7], [3, 4]));
