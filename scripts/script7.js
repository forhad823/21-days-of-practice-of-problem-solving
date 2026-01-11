//utility functions
function isPrime(num) {
  if (typeof originalNum !== "bigint") {
    num = BigInt(num);
  }

  if (num < 2n) return false;
  if (num === 2n || num === 3n) return true;
  if (num % 2n === 0n || num % 3n === 0n) return false;

  for (let i = 5n; i * i <= num; i += 6n) {
    // {note 2}
    if (num % i === 0n || num % (i + 2n) === 0n) {
      return false;
    }
  }
  return true;
}
//-------------question-1
function primeFactorization(originalNum) {
  let primeFactors = [];
  let dividend = originalNum;
  if (isPrime(dividend)) {
    return [dividend];
  }
  let divisor = 2;
  while (dividend > 1) {
    while (dividend % divisor === 0) {
      primeFactors.push(divisor);
      dividend = Math.floor(dividend / divisor);
    }
    divisor++;
  }
  return primeFactors;
}

function primeFactorsExpForm(originalNum) {
  let primeFactors = ``;
  let dividend = originalNum;
  if (isPrime(dividend)) {
    return `1^1 \u00D7 ${dividend}^1`; //Unicode escape sequence \u00D7
  }
  let divisor = 2;
  while (dividend > 1) {
    let exponentCounter = 0;
    while (dividend % divisor === 0) {
      exponentCounter++;
      dividend = Math.floor(dividend / divisor);
    }
    if (exponentCounter > 0) {
      primeFactors.length === 0
        ? (primeFactors += `${divisor}^${exponentCounter} `)
        : (primeFactors += `\u00D7 ${divisor}^${exponentCounter} `);
    }
    divisor++;
  }
  // console.log(primeFactors);
  return primeFactors;
}

// -----------------question-3----------------
function distinctPrimeFactors(originalNum) {
  let dividend = originalNum;
  let primeFactors = {};
  if (isPrime(dividend)) {
    return "it'sum a prime number, distinct factors 1";
  }

  let divisor = 2;
  while (dividend > 1) {
    while (dividend % divisor === 0) {
      primeFactors[divisor] = (primeFactors[divisor] || 0) + 1;
      dividend = Math.floor(dividend / divisor);
    }
    divisor++;
  }
  return Object.keys(primeFactors).length; // Object.keys() return array of keys.
}

// --------------------------question-4
function isPowerfulNumber(originalNum) {
  let dividend = originalNum;
  let primeFactors = {};
  if (isPrime(dividend)) {
    return "not a powerful number";
  }

  let divisor = 2;
  while (dividend > 1) {
    while (dividend % divisor === 0) {
      primeFactors[divisor] = (primeFactors[divisor] || 0) + 1;
      dividend = Math.floor(dividend / divisor);
    }
    divisor++;
  }
  // if (Object.values(primeFactors).every((value) => value >= 2)) { }
  return Math.min(...Object.values(primeFactors)) >= 2; // true/false
}

//------------hw-1--
function productOFDistinctPrimeFactors(originalNum) {
  let dividend = originalNum;
  let primeFactors = {};
  if (isPrime(dividend)) {
    return `${1 * dividend} - as it'sum a prime number`;
  }

  let divisor = 2;
  while (dividend > 1) {
    while (dividend % divisor === 0) {
      primeFactors[divisor] = (primeFactors[divisor] || 0) + 1;
      dividend = Math.floor(dividend / divisor);
    }
    divisor++;
  }
  let product = 1;
  Object.keys(primeFactors).forEach((value) => (product *= value));
  return product;
}

// ---------------------hw-3
function isSquareFreeNumber(originalNum) {
  let dividend = originalNum;
  if (isPrime(dividend)) {
    return true;
  }
  let divisor = 2;
  while (dividend > 1) {
    let exponentCounter = 0;
    while (dividend % divisor === 0) {
      exponentCounter++;
      dividend = Math.floor(dividend / divisor);
    }
    if (exponentCounter > 1) {
      return false;
    }
    divisor++;
  }
  return true;
}
// ----------------------------hw-4---------
function isSmithNumber(originalNum) {
  let dividend = originalNum;
  if (isPrime(dividend)) {
    return "Prime number is not Smith Number"; // composite number needed
  }
  const sumOfDigits = [...dividend.toString()].reduce(
    (sum, digit) => sum + Number(digit),
    0
  );
  let divisor = 2;
  let primeFactors = [];
  while (dividend > 1) {
    while (dividend % divisor === 0) {
      primeFactors.push(divisor);
      dividend = Math.floor(dividend / divisor);
    }
    divisor++;
  }
  const sumOfDigitsOfPrimeFactors = primeFactors
    .join("")
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
  return sumOfDigits === sumOfDigitsOfPrimeFactors;
}
// ---------------------------hw-4
function isUglyNumber(originalNum) {
  let dividend = originalNum;
  if (dividend <= 0) return false;
  let divisor = 2;
  while (dividend > 1) {
    while (dividend % divisor === 0) {
      if (divisor > 5) return false;
      dividend = Math.floor(dividend / divisor);
    }
    divisor++;
  }
  return true;
}

// ---------------hw-5
function isKaprekarNumber(number) {
  if (number <= 3) return false;

  const squaredString = String(number * number);
  const digitCount = String(number).length;

  const leftPart = Number(squaredString.slice(0, -digitCount)) || 0;
  const rightPart = Number(squaredString.slice(-digitCount));

  return leftPart + rightPart === number;
}

// ------------------hw-6
function isHappyNumber(number) {
  let visitedNumbers = new Set();
  while (number !== 1 && !visitedNumbers.has(number)) {
    visitedNumbers.add(number);
    // modifying number by squaring and adding all digits
    number = [...String(number)].reduce(
      (sum, digit) => sum + Number(digit ** 2),
      0
    );
  }
  return number === 1;
}

//--------------------hw-7------------------

/*************  utilities  ************* */
export const HexDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

export const bitsForOct = (binaryStr) => {
  return 3 * (Math.floor(binaryStr.length / 3) + 1);
}; // returns number
export const bitsForHex = (binaryStr) => {
  return 4 * (Math.floor(binaryStr.length / 4) + 1);
}; // returns number

export function decToHex(whole, fraction) {
  let hexadecimal = "";
  whole = Number(whole);
  // whole part conversion
  while (whole !== 0) {
    hexadecimal += HexDigits[Number((whole % 16).toFixed(10))];
    whole = Math.floor(whole / 16);
  }
  hexadecimal = [...hexadecimal].reverse().join("");
  // fraction part conversion
  fraction == 0 || (hexadecimal += ".");
  for (let i = 1; i <= 5; i++) {
    if (fraction === 0) break;
    hexadecimal += HexDigits[Math.floor(fraction * 16)];
    fraction = Number(((fraction * 16) % 1).toFixed(10));
  }
  fraction === 0 || (hexadecimal += "...");
  return hexadecimal;
} // returns string

export function decToBin(whole, fraction) {
  let binary = "";
  whole = Number(whole);
  // whole part conversion
  while (whole !== 0) {
    binary += Number((whole % 2).toFixed(10));
    whole = Math.floor(whole / 2);
  }
  binary = [...binary].reverse().join("");
  // fraction part conversion
  fraction == 0 || (binary += ".");

  for (let i = 1; i <= 5; i++) {
    if (fraction === 0) break;
    binary += Math.floor(fraction * 2);
    fraction = Number(((fraction * 2) % 1).toFixed(10));
  }
  fraction === 0 || (binary += "...");
  return binary;
} // returns string

export function decToOct(whole, fraction) {
  let octal = "";
  whole = Number(whole);
  // whole part conversion
  while (whole !== 0) {
    octal += Number((whole % 8).toFixed(10));
    whole = Math.floor(whole / 8);
  }
  octal = [...octal].reverse().join("");
  // fraction part conversion
  fraction === 0 || (octal += ".");
  for (let i = 1; i <= 5; i++) {
    if (fraction === 0) break;
    octal += Math.floor(fraction * 8);
    fraction = Number(((fraction * 8) % 1).toFixed(10));
  }
  fraction === 0 || (octal += "...");
  return octal;
} // returns string

export function binToDec(whole, fraction) {
  let decimal = 0;
  // whole part conversion
  [...whole].forEach((digit, index) => {
    decimal += Number(digit) * 2 ** (whole.length - index - 1);
  });
  // fraction part conversion
  [...fraction].forEach((digit, index) => {
    decimal += Number((Number(digit) * 2 ** -(index + 1)).toFixed(10));
  });

  return String(decimal);
} // returns string

export function binToOct(whole, fraction) {
  let octal = "";

  whole = whole.padStart(bitsForOct(whole), "0");
  fraction = fraction.padEnd(bitsForOct(fraction), "0");
  octal += whole + "." + fraction;
  octal = String(Number(octal)); // removing "." in the case of integer
  // converting  binary -> decimal -> octal
  octal = convertNumber(convertNumber(octal, 2, 10), 10, 8);
  /**another inefficient way using for loop and str.slice() method -------------------------------- 
   const grouping = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i += 3) {
      const chunk = str.slice(i, i + 3);
      result += convertNumber(chunk, 2, 10);
    }
    return result;
  };
  octal = grouping(whole) + "." + grouping(fraction);
  --------------------------------------------
  **/

  return String(Number(octal));
} // returns string

export function binToHex(whole, fraction) {
  let hexadecimal = "";

  whole = whole.padStart(bitsForHex(whole), "0");
  fraction = fraction.padEnd(bitsForHex(fraction), "0");
  hexadecimal += whole + "." + fraction;
  hexadecimal = String(Number(hexadecimal)); // removing "." in case of integer input

  //   binary -> decimal -> hexadecimal
  hexadecimal = convertNumber(convertNumber(hexadecimal, 2, 10), 10, 16);

  return hexadecimal;
} // returns string

export function octToBin(whole, fraction) {
  let binary = "";
  [...whole].forEach(
    (digit) => (binary += convertNumber(digit, 10, 2).padStart(3, "0"))
  );
  binary += ".";
  [...fraction].forEach(
    (digit) => (binary += convertNumber(digit, 10, 2).padStart(3, "0"))
  );
  binary = String(Number(binary));
  return binary;
} // returns string

export function octToDec(whole, fraction) {
  let decimal = 0;
  // whole part conversion
  [...whole].forEach((digit, index) => {
    decimal += Number(digit) * 8 ** (whole.length - index - 1);
  });
  // fraction part conversion
  [...fraction].forEach((digit, index) => {
    decimal += Number((Number(digit) * 8 ** -(index + 1)).toFixed(10));
  });

  return String(decimal);
} // returns string

export function octToHex(whole, fraction) {
  let hexadecimal = "";
  hexadecimal += whole + "." + fraction;
  hexadecimal = String(Number(hexadecimal)); // removing "." in case of integer.
  // octal -> binary -> hexadecimal
  hexadecimal = convertNumber(convertNumber(hexadecimal, 8, 2), 2, 16);
  return hexadecimal;
} // returns string

export function hexToBin(whole, fraction) {
  let binary = "";
  [...whole].forEach(
    (digit) =>
      (binary += convertNumber(HexDigits.indexOf(digit), 10, 2).padStart(
        4,
        "0"
      ))
  );
  binary += ".";
  console.log(fraction);
  [...fraction].forEach(
    (digit) =>
      (binary += convertNumber(HexDigits.indexOf(digit), 10, 2).padStart(
        4,
        "0"
      ))
  );
  binary = String(Number(binary)); // reducing 0 from front and removing "." in the case of integer number
  return binary;
} // returns string

export function hexToDec(whole, fraction) {
  let decimal = 0;
  // whole part conversion
  [...whole].forEach((digit, index) => {
    decimal +=
      Number(HexDigits.indexOf(digit)) * 16 ** (whole.length - index - 1);
  });
  // fraction part conversion
  [...fraction].forEach((digit, index) => {
    decimal += Number(
      (Number(HexDigits.indexOf(digit)) * 16 ** -(index + 1)).toFixed(10)
    );
  });

  return String(decimal);
} // returns string

export function hexToOct(whole, fraction) {
  let octal = "";
  octal += whole + "." + fraction;
  // hexadecimal -> binary -> octal;
  octal = convertNumber(convertNumber(octal, 16, 2), 2, 8);

  return octal;
} // return string;

/************* main function ********* */
export function convertNumber(number, currentBase, targetBase) {
  let result = "";
  let numberStr = String(number).toUpperCase();
  const [whole = "0", fractionRaw = "0"] = numberStr.split(".");
  let fraction = fractionRaw;

  // ---------- validation helpers ----------
  const validators = {
    10: (uniCode) => uniCode >= 48 && uniCode <= 57,
    2: (uniCode) => uniCode === 48 || uniCode === 49,
    8: (uniCode) => uniCode >= 48 && uniCode <= 55,
    16: (uniCode) =>
      (uniCode >= 48 && uniCode <= 57) || (uniCode >= 65 && uniCode <= 70),
  };

  const isValid = validators[currentBase]; // returns the validation function for the number.
  if (!isValid) {
    return `conversion from base ${currentBase} to base ${targetBase} is currently unavailable`;
  }

  const isValidNumber = [...whole, ...fraction].every((digit) =>
    isValid(digit.charCodeAt(0))
  );

  if (!isValidNumber) {
    return `the number's base is not ${currentBase}`;
  }

  // ---------- decimal fraction normalization ----------
  if (currentBase === 10) {
    fraction = Number((Number(fraction) / 10 ** fraction.length).toFixed(10)); // it was integer after split
  }

  // ---------- conversion table ----------
  const converters = {
    10: {
      2: () => decToBin(whole, fraction),
      8: () => decToOct(whole, fraction),
      16: () => decToHex(whole, fraction),
    },
    2: {
      10: () => binToDec(whole, fraction),
      8: () => binToOct(whole, fraction),
      16: () => binToHex(whole, fraction),
    },
    8: {
      2: () => octToBin(whole, fraction),
      10: () => octToDec(whole, fraction),
      16: () => octToHex(whole, fraction),
    },
    16: {
      2: () => hexToBin(whole, fraction),
      10: () => hexToDec(whole, fraction),
      8: () => hexToOct(whole, fraction),
    },
  };
  console.log("converters", converters);

  const convert = converters[currentBase]?.[targetBase];
  // Optional Chaining turns a fatal error into a controlled undefined
  if (!convert) {
    return `conversion from base ${currentBase} to base ${targetBase} is currently unavailable`;
  }

  result = convert();
  return result;
}



// ----testing ground below
/* 
let binarystr = "1010100010";
console.log(str.padStart(bitsForOct,"0"));
console.log(str.padEnd(bitsForOct,"0")); 
*/

// ----testing ground up

// console.log("dec2oct", convertNumber(110, 10, 8));
// console.log("hex2oct", convertNumber("5a", 16, 8)); // hex2oct
// console.log("bin2hex", convertNumber(101011.11, 2, 16)); // bin2hex
// console.log(convertNumber("4cd.cd", 16, 10)); // hex2dec
// console.log(convertNumber(525, 10, 2)); // dec2bin
// console.log(convertNumber("5a.2c", 16, 2)); // hex2bin
// console.log(convertNumber(507.46, 8, 10)); // oct2dec
// console.log(convertNumber(525.27, 8, 16)); // oct2hex

// console.log(convertNumber("525.27", 8, 2)); // oct2bin
// console.log(convertNumber(1101101.101111, 2, 16)); // bin2oct
// console.log(isHappyNumber(2));
// console.log(isKaprekarNumber(9));
// console.log(primeFactorization(360));
// console.log(primeFactorsExpForm(30));
// console.log(distinctPrimeFactors(7));
// console.log(isPowerfulNumber(360));
// console.log(productOFDistinctPrimeFactors(150));
// console.log(isSquareFreeNumber(30));
// console.log(isSmithNumber(12));
