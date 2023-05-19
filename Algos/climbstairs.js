//answer is fibonacci but also need to use memoization to prevent stack overflow.
var climbStairs = function (n, cache = {}) {
  if (n < 4) return n;

  if (!cache[n]) {
    cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache)
  }

  return cache[n];
};