// Count Whole and Fractional Digits Separately

// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// ✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.

function seperateByDecimals(n) {
  let whole = Math.floor(n);
  // Using this because of javascript floating point overflow behaviour.
  let fraction = Number((n - whole).toFixed(10));
  return { whole, fraction };
}

function wholeNumberCount(n) {
  let count = 0;
  while (n !== 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

function fractionCount(n) {
  // Remove decimals points & count it as whole number
  while (n % 1 !== 0) {
    n = Number(n * 10).toFixed(10);
  }
  return wholeNumberCount(n);
}

function main(n) {
  // Step 1 -> Separate the number into whole and fractional parts.
  const { whole, fraction } = seperateByDecimals(n);

  // Step 2 -> use correponding fuctions to count digits.
  return {
    wholeCount: wholeNumberCount(whole),
    fractionCount: fractionCount(fraction),
  };
}

const n = 12.345;
// console.log(main(n));

/* ************** Number Conversion ************ */
import {
  HexDigits,
  bitsForOct,
  bitsForHex,
  decToHex,
  decToBin,
  decToOct,
  binToDec,
  binToOct,
  binToHex,
  octToBin,
  octToDec,
  octToHex,
  hexToBin,
  hexToDec,
  hexToOct,
  // convertNumber,
} from "./scripts/script7.js";

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
    isValid(digit.charCodeAt(0)),
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
  if (!convert) {
    return `conversion from base ${currentBase} to base ${targetBase} is currently unavailable`;
  }

  result = convert();
  return result;
}

const MAX_ATTEMPTS = 1_000_000; // 2026 best practice: Use numeric separators for readability

for (let x = 0; x < MAX_ATTEMPTS; x++) {
  // Use strict equality (===) for all comparisons
  if (x ** x === 3 ** (x + 243)) {
    console.log(x);
    break;
  }
}

// console.log(typeof convertNumber("4cd.123", 16, 10));
