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

console.time();
console.log(sieveOfEratosthenes(100));
console.timeEnd();

