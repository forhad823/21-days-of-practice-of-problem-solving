//-------------q-1------
/* optimised solution- The Square Root rule
This method allows you to find all factors by checking only up to the square root of the number.

Example: Find all factors of 36.

Step 1: Find the square root.
sqrt(36) = 6

Step 2: Divide 36 by every number from 1 to 6.
If the remainder is 0, you have a factor pair.

36 ÷ 1 = 36 → Pair: (1, 36)
36 ÷ 2 = 18 → Pair: (2, 18)
36 ÷ 3 = 12 → Pair: (3, 12)
36 ÷ 4 = 9 → Pair: (4, 9)
36 ÷ 5 = 7.2 → Not a factor
36 ÷ 6 = 6 → Pair: (6, 6)

Final list of factors:
1, 2, 3, 4, 6, 9, 12, 18, 36
*/

function printAllfactors(num) {
  factors = [];
  const intSqrRootOfNum = Math.floor(Math.sqrt(num));
  //   factors.push(intSqrRootOfNum); // fixing of adding duplicate of intSqrRootOfNum in below's algorithm
  for (let i = 1; i < intSqrRootOfNum; i++) {
    if (num % i === 0) {
      //   factors.push(i, Math.floor(num / i));
      factors.splice(factors.length / 2, 0, i, Math.floor(num / i));
    }
  }
  if (num % intSqrRootOfNum === 0) {
    num / intSqrRootOfNum === intSqrRootOfNum
      ? factors.splice(factors.length / 2, 0, intSqrRootOfNum)
      : factors.splice(
          factors.length / 2,
          0,
          intSqrRootOfNum,
          num / intSqrRootOfNum
        );
  }
  return factors; //.sort((a, b) => a - b);
}

//-------------q-2------
/* it was very easy */
//-------------q-3------
function findHCF(num1, num2) {
  const factorsOfNum1 = printAllfactors(num1).reverse();
  console.log(factorsOfNum1);
  let HCF = 1;
  for (let element of factorsOfNum1) {
    if (num2 % element === 0) {
      return element;
    }
  }
  return HCF;
}
/*Optimised way- Euclidian Algorithm for GCD/HCF */
function findGCDbyEuclid(num1, num2) {
  // Ensure non-negative integers
  let a = Math.abs(num1);
  let b = Math.abs(num2);

  // Euclidean Algorithm/ ইউক্লিডীয় পদ্ধতিতে গসাগু
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
//-------------q-4------
function findLCMbyGCD(a, b) {
  return (a * b) / findGCDbyEuclid(a, b);
}

//-------------hw-1------
/**
 * printAllFactors(num).length;
 *
 */
// ------------hw-2--------
/**
 * use printAllFactors(num) and add every element in sum.
 */
//------------hw-3----------
function gfOfNumExcludeIt(num) {
  for (i = Math.floor(num / 2); i >= 1; i--) {
    if (num % i === 0) return i;
  }
}
// ---------- hw-4 -----------------
function isPerfectNumber(num) {
  let sumOfDivisors = 0;
  printAllfactors(num).forEach((element) => {
    sumOfDivisors += element;
  });
  return num === sumOfDivisors - num;
}
// ---------- hw-5 ----------------

function GCDandLCMof(a, b, c) {
  // euclidean algorithm
  const lcm = findLCMbyGCD(a, findLCMbyGCD(b, c));
  const gcd = findGCDbyEuclid(a, findGCDbyEuclid(b, c));
  return { GCD: gcd, LCM: lcm };
}

console.log(GCDandLCMof(12, 18, 25));
