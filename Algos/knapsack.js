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

