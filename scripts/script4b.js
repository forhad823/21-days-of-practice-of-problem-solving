function reverseDigits(num) {
  let output = 0;
  while (num > 0) {
    output = output * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return output;
}

function palindromeChecker(OriginalNumber) {
  let num = OriginalNumber;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Number(Math.floor(num / 10).toFixed(10));
  }
  if (OriginalNumber === reversed) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
}

function isAmstrongNumber(originalNumber) {
  let num = originalNumber;
  let digitsOfTheNumber = [];
  while (num > 0) {
    digitsOfTheNumber.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let totalSumByArmstrong = digitsOfTheNumber.reduce(
    (accumulator, currentValue) => {
      return (accumulator =
        accumulator + currentValue ** digitsOfTheNumber.length);
    },
    0
  );
  return totalSumByArmstrong === originalNumber;
}
//______________hw-1______________________________

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
// ______________________hw-2_________________

const averageOfDigits = (num) => {
  let totalDigits = 0;
  let sumOfDigits = 0;
  while (num > 0) {
    sumOfDigits += num % 10;
    totalDigits++;
    num = Math.floor(num / 10);
  }
  let average = Number((sumOfDigits / totalDigits).toFixed(10));
  return average;
};

//_________________hw-4_________________________

const isStrongNumber = (originalNumber) => {
  let num = originalNumber;
  function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  let sumOfFactorialOfDigits = 0;
  while (num > 0) {
    sumOfFactorialOfDigits += factorial(num % 10);
    num = Math.floor(num / 10);
  }

  return sumOfFactorialOfDigits === originalNumber;
};

// -------------------hw-3--------------------
function findLargestAndSmallestDigit(originalNumber) {
  let largest = originalNumber % 10;
  let smallest = originalNumber % 10;
  let num = originalNumber;
  while (num > 0) {
    digit = num % 10;
    if (digit > largest) largest = digit;
    if (digit < smallest) smallest = digit;
    num = Math.floor(num / 10);
  }
  return { largest: largest, smallest: smallest };
}

// ------------------ hw-5 --------------------
function isAutomorphic(originalNumber) {
  num = originalNumber;
  squaredNum = originalNumber ** 2;
  while (num > 0) {
    if (num % 10 === squaredNum % 10) {
      num = Math.floor(num / 10);
      squaredNum = Math.floor(squaredNum / 10);
    } else {
      return false;
    }
  }
  return true;
}
// -----------------hw-6---------------------
function findFrequencyOfDigits(originalNumber) {
  let num = originalNumber;
  // let digits = [];
  let result = {};
  // const searchMap = new Map();
  while (num > 0) {
    let digit = num % 10;
    if (digit in result) {
      result[digit] += 1;
    } else {
      result[digit] = 1;
    }
    // searchMap.set(digit, (searchMap.get(digit) || 0) + 1);
    num = Math.floor(num / 10);
  }
  // return searchMap;
  return result;
}

function isHarshadNumber(originalNumber) {
  let num = originalNumber;
  let sumOfDigits = 0;
  while (num > 0) {
    sumOfDigits += Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  return originalNumber % sumOfDigits === 0;
}
console.log(isHarshadNumber(19));
