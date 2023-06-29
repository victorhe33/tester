// this is a tree node
var TrieNode = function (key) {
  // the "key" value will be the character in the sequence.
  this.key = key;

  // we keep a reference to the parent
  this.parent = null;

  // we have a hash of children
  this.children = {};

  // check to see if the node is at the end
  this.end = false;
}

var Trie = function () {
  this.root = new TrieNode(null);
};

/** 
 * @param {string} word
 * @return {void}
 */

// Inserting a word into the trie. 'T'
Trie.prototype.insert = function (word) {
  let node = this.root; // we start at the root

  //for every character in the word.
  for (let i = 0; i < word.length; i++) {
    // check to see if character node exists in children
    if (!node.children[word[i]]) {
      // if it doesn't exist, we then create it. // T
      node.children[word[i]] = new TrieNode(word[i]);

      // we also assign the parent to the child node // parent = root node;
      node.children[word[i]].parent = node;
    }

    // proceed to the next depth in the trie. // node = TrieNode(T) -> end
    node = node.children[word[i]];

    // finally, we check to see if it's the last word.
    if (i == word.length - 1) {
      // if it is, we set the end flag to true.
      node.end = true;
    }
  }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
console.log(obj);
obj.insert('Tarik');
console.log(obj);
