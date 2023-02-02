function coinSum(coinArray, amount) {
  let result = -1;

  function generate(coinArray, amount, counter = 0) {
    if (amount === 0) {
      result = Math.min(counter, result < 0 ? Infinity : result)
    }
    if (coinArray.length === 0 || amount < 0) return;
    generate(coinArray, amount - coinArray[0], counter + 1)
    generate(coinArray.slice(1), amount, counter)
  }

  generate(coinArray, amount);
  return result;
}

// coins = [1, 2, 5], amount = 11 // -> 3
console.log(coinSum([11], 11)); //-> 3