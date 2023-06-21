




// TARIK'S ANSWER
/* 
For any two nodes that are linked directly, check if there is an indirect way of linking the nodes
    If there is: return the two nodes -- this indicates a redundant connection
    If not: continue
Not sure why this satisfies the condition: If there are multiple answers, return the answer that occurs last in the input.
*/
const findRedundantConnection = (edges) => {
  const adjacencyList = {};

  const dfs = (src, des, prev) => {
    if (src == des) return true; // Found des node
    for (let neighbor of adjacencyList[src]) {
      // First condition -- don't move backwards
      // Second condition -- able to find des node
      if (neighbor !== prev && dfs(neighbor, des, src)) return true;
    }
    return false;
  }

  // Convert edges to an adjacency list
  for (let edge of edges) {
    [a, b] = edge;
    adjacencyList[a] ? adjacencyList[a].push(b) : adjacencyList[a] = [b];
    adjacencyList[b] ? adjacencyList[b].push(a) : adjacencyList[b] = [a];

    if (dfs(a, b, b)) return [a, b];
  }
};