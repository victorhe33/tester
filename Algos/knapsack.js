/*
  You have a knapsack with a weight limit.
  You are also presented with a list of singular items, each with a weight and a value.
  Each item can be counted only once.
  What is the optimal total value of a set of items that can fit in your knapsack?

  You are presented with an array of singlular objects, each object has a weight and value.
  Imagine that each object represents a unique item, to be counted once.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [
    {weight: 1, value : 3}, 
    {weight: 2, value : 4}, 
    {weight: 3, value : 5},
  ];
  knapsack(items, 3); // returns 7 (from items[0] and items[1])
  knapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// Bottom-Up Dynamic Programming
const knapsackAdvanced = (items, weightAvailable) => {
  const table = [];
  for (let itemIndex = 0; itemIndex <= items.length; itemIndex += 1) {
    table.push([]);
    for (let capacity = 0; capacity <= weightAvailable; capacity += 1) {
      if (itemIndex === 0) {
        table[itemIndex].push(0);
        continue;
      }
      table[itemIndex][capacity] = decideToTakeOrNot(table[itemIndex - 1], items[itemIndex - 1], capacity)
    }
  }
  return table[items.length][weightAvailable];
};

const decideToTakeOrNot = (decisionsSoFar, item, capacity) => {
  let take = 0;
  let not = decisionsSoFar[capacity];
  if (item.weight <= capacity) {
    let remainingCapacity = capacity - item.weight;
    take += item.value;
    take += decisionsSoFar[remainingCapacity]
  }
  return Math.max(take, not);
}


[ [0, 0 , 0]
   [0, 0, 0]

]


// DYNAMIC APPROACH
function knapsack(items, capacity) {
  const n = items.length;

  // Create a 2D array to store the maximum values
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  // Iterate over the items and remaining capacities
  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    for (let w = 1; w <= capacity; w++) {
      // If the item's weight exceeds the remaining capacity, exclude it
      if (weight > w) {
        dp[i][w] = dp[i - 1][w];
      } else {
        // Choose the maximum value between including and excluding the item
        dp[i][w] = Math.max(value + dp[i - 1][w - weight], dp[i - 1][w]);
      }
    }
  }

  // Track the selected items
  const selectedItems = [];
  let i = n,
    w = capacity;
  while (i > 0 && w > 0) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedItems.push(items[i - 1]);
      w -= items[i - 1].weight;
    }
    i--;
  }

  // Return the maximum value and the selected items
  return {
    maxValue: dp[n][capacity],
    selectedItems: selectedItems.reverse(),
  };
}

// Example usage:
// const items = [
//   { weight: 2, value: 12 },
//   { weight: 1, value: 10 },
//   { weight: 3, value: 20 },
//   { weight: 2, value: 15 },
// ];
// const capacity = 5;

// const result = knapsack(items, capacity);
// console.log("Max Value:", result.maxValue);
// console.log("Selected Items:", result.selectedItems);


// DP Knapsack with Memoization
function knapsackDP(items, capacity) {
  const n = items.length;

  // Create a memoization cache
  const memo = {};

  function knapsackMemo(i, w) {
    if (i === 0 || w === 0) {
      return 0;
    }

    const memoKey = `${i}-${w}`; // "1-3" => 5, "1-3" => 5, "1-3" => 5, "1-3" => 5
    if (memo[memoKey] !== undefined) {
      return memo[memoKey];
    }

    const { weight, value } = items[i - 1];

    if (weight > w) {
      memo[memoKey] = knapsackMemo(i - 1, w);
    } else {
      memo[memoKey] = Math.max(
        value + knapsackMemo(i - 1, w - weight),
        knapsackMemo(i - 1, w)
      );
    }
    return memo[memoKey];
  }

  const maxValue = knapsackMemo(n, capacity);
  
  return {
    maxValue,
  };
}

// Example usage:
const items = [
  { weight: 2, value: 12 },
  { weight: 1, value: 10 },
  { weight: 3, value: 20 },
  { weight: 2, value: 15 },
];
const capacity = 5;

const result = knapsackDP(items, capacity);
console.log("Max Value:", result.maxValue);