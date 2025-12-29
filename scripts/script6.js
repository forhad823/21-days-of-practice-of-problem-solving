// --------------question-1
function isPrime(originalNum) {
  let num = Math.abs(originalNum);
  if (num === 0 || num === 1) return false;
  if ([2, 3, 5, 7].includes(num)) return true;
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    return false;
  }
  for (let i = Math.floor(Math.sqrt(num)); i > 5; i -= 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimeUpto(Num) {
  let primeNumbersUptoNum = [];
  for (let i = 0; i <= Num; i++) {
    if (isPrime(i)) primeNumbersUptoNum.push(i);
  }
  return "myprime completed"; // primeNumbersUptoNum;
}
/// highly optimised algrithm - ইরাটোস্থেনিসের চালুনি
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

function printFirstNtermFibonacci(N) {
  let result = [0, 1];
  // let previousFibonacci = 0;
  // let currentFibonacci = 0;
 
  for (let i = 2n; i < BigInt(N); i++) {
    result.push(result[i - 1n] + result[i - 2n]);
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

console.log(nthFibonacciNumber(1000));
