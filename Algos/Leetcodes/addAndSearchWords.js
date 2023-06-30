var WordDictionary = function () {
  this.obj = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.obj;
  for (let c of word) {
    if (!(c in node)) node[c] = {};
    node = node[c];
  }
  node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function (word, index, node) {
  if (index == word.length) return node?.isWord == true;

  if (word[index] == '.') {
    for (let key in node) {
      if (this.dfs(word, index + 1, node[key])) return true;
    }
  } else if (node[word[index]] != null) {
    return this.dfs(word, index + 1, node[word[index]]);
  }

  return false;
}

// In the case of a word with wildcard characters ".", they may be placed anywhere. In this case, check every word that may satisfy the other conditions.
// Condition: Length of the trie == length of word
// Condition: Known characters in the word
// Condition: Last character in trie has isWord set to true
/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dfs(word, 0, this.obj);

  // let CL = word == "bad";

  // let node = this.obj;
  // for (let c of word) {
  //     // if (CL) console.log(c in node);
  //     // Handles cases where all characters are present
  //     if (c in node) {
  //         node = node[c];
  //     } else if (c == ".") {
  //         // Some code that checks all possible paths
  //     } else {
  //         // Character doesn't match any added word & isn't a wildcard
  //         return false;
  //     }
  // }
  // return node?.isWord == true;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */