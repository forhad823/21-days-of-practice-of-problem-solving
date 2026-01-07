// --------------question-1
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
/* {note-2}*
This statement means that being of the form (6k+-1) is a necessary condition for a number greater than 3 to be prime. but It is not a sufficient condition,  For example, when k is positive integers, it produce-     5, 7, 11, 13, 17, 19, 23, 25 ❌, 29
so, we also implemented " sqrt(n) or i*i <= n " 
*/

function printPrimeUpto(Num) {
  let primeNumbersUptoNum = [];
  for (let i = 0; i <= Num; i++) {
    if (isPrime(i)) primeNumbersUptoNum.push(i);
  }
  return "myprime completed"; // primeNumbersUptoNum;
}
/// highly optimised algorithm - ইরাটোস্থেনিসের চালুনি
function sieveOfEratosthenes(n) {
  const isPrime = new Array(n + 1).fill(true);
  console.log(isPrime);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;

  // Only need to check up to sqrt(n)
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      // Mark multiples of i as non-prime
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Collect prime numbers
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// ----------------question-2
function isCoPrime(num1, num2) {
  if (num1 < 2 || num2 < 2 || num1 % 1 > 0 || num2 % 1 > 0) {
    return "please enter integers that are greater than 1";
  }
  let a = num1;
  let b = num2;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a === 1; // is GCD of a and b
}

// --------------question-3

/**
 * Returns the first N Fibonacci numbers.
 *
 * @param {number | bigint} n - Number of terms to generate
 * @returns {bigint[]} First N Fibonacci numbers
 */
function fibonacciFirstN(n) {
  const total = BigInt(n);
  if (total <= 0n) return [];

  const result = [];
  let prev = 0n;
  let curr = 1n;

  for (let count = 0n; count < total; count++) {
    result.push(prev);
    [prev, curr] = [curr, prev + curr];
  }

  return result;
}

// where is optimised code?? for printing the series?

// ----------------- question-4
/* best method- Fast Doubling - highly optimized and faster */
function nthFibonacciNumber(term) {
  let n = term - 1;
  function fib(n) {
    if (n === 0n) return [0n, 1n];

    const [prev, next] = fib(n / 2n);

    const first = prev * (2n * next - prev);
    const second = prev * prev + next * next;

    if (n % 2n === 0n) {
      return [first, second];
    } else {
      return [second, first + second];
    }
  }
  return fib(BigInt(n))[0];
}

// ---------question-5 (check if a number belongs to the Fibonacci Series)--------

function isFibonacciNumber(originalNum) {
  let num = BigInt(originalNum);
  let a = 0n;
  let b = 1n;

  while (a <= num) {
    if (a === num) return true;
    [a, b] = [b, a + b];
  }

  return false;
}

// Optimized and fastest solution.
/**
 * ✅ Gessel's test: fastest solution.
 * A number n is Fibonacci if:
 * 5n² + 4 OR 5n² − 4 is a perfect square
 */

function isPerfectSquare(x) {
  let s = BigInt(Math.floor(Math.sqrt(Number(x))));
  return s * s === x || (s + 1n) * (s + 1n) === x; /*
  Why check (s + 1) also?
Because:
  Math.sqrt(Number(x)) can have rounding errors .
  Floating-point numbers are not 100% accurate.
  x = 49
  Math.sqrt(49) → 6.999999999
  Math.floor(...) → 6
  6×6 = 36 ❌
  7×7 = 49 ✅
*/
}

function isFibonacciNumber(n) {
  n = BigInt(n);

  const test1 = 5n * n * n + 4n;
  const test2 = 5n * n * n - 4n;

  return isPerfectSquare(test1) || isPerfectSquare(test2);
}

// console.log(isFibonacciNumber(22));
// console.log(nthFibonacciNumber(1000));

// -------------------hw-3 ----------
function isTwinPrimes(a, b) {
  if (isPrime(a) && isPrime(b) && Math.abs(a - b) === 2) {
    return true;
  } else {
    return false;
  }
}

// console.log(isTwinPrimes(3, 5));

// ---------------- hw-4 ---
/**
 * Returns all Fibonacci numbers less than or equal to the given limit.
 *
 * @param {number | bigint} limit - Upper bound (inclusive)
 * @returns {bigint[]} Fibonacci series up to the limit
 */
function fibonacciUpTo(limit) {
  const max = BigInt(limit);
  if (max < 0n) return [];

  const result = [];
  let prev = 0n;
  let curr = 1n;

  while (prev <= max) {
    result.push(prev);
    [prev, curr] = [curr, prev + curr];
  }

  return result;
}

//-----------------------hw-5-----------
function fibonacciNumbersWithinRange(Start, End) {
  const min = BigInt(Start);
  const max = BigInt(End);
  if (min > max || max < 0n) return [];

  const result = [];
  let prev = 0n;
  let curr = 1n;

  while (prev <= max) {
    if (prev >= min) {
      result.push(prev);
    }

    [prev, curr] = [curr, prev + curr];
  }

  return result;
}
//-----------------------hw-8----------
function FirstNTermsPrimeFibonacci(n) {
  if (BigInt(n) <= 0n) return [];

  const result = [];
  let prev = 0n;
  let curr = 1n;
  let count = 0;
  while (count < n) {
    if (isPrime(prev)) {
      result.push(prev);
      count++;
    }
    [prev, curr] = [curr, prev + curr];
  }

  return result;
}
// console.log(fibonacciNumbersWithinRange(0, 10000));
// console.log(fibonacciNumbersWithinRange(100, 10000));
console.log(FirstNTermsPrimeFibonacci(13));
