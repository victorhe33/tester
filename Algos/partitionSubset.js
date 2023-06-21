var canPartition = function (nums) {
  if (!nums)
    return false;
  let total = nums.reduce((a, b) => a + b, 0);

  if (total % 2 !== 0)
    return false;

  let target = total / 2;
  let cache = new Set();
  cache.add(0);

  for (let el of nums) {
    console.log('el', el);

    for (let i = target; i >= 0; i--) {
      let complement = i - el;

      if (!cache.has(i) && cache.has(complement)) {
        cache.add(i);
        console.log('condition 1:', complement, i);
        console.log(cache);
      }
      if (cache.has(target)) {
        console.log('condition 2:', complement, i);
        console.log(cache);
        return 1;
      }
    }
  }

  return false;
};

console.log(canPartition([1, 5, 11, 5]))