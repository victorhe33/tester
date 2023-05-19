const dynamic = dynamicFibonacci()

var fib = function (n) {
  return dynamic(n);
}

function dynamicFibonacci() {
  let cache = {};

  return function fibo(n) {
    // check if already calculated for n
    if (n in cache) {
      return cache[n];
    } else if (n < 2) { // base case
      return n;
    } else {
      // store result in cache
      cache[n] = fibo(n - 1) + fibo(n - 2);
      return cache[n];
    }
  }
}