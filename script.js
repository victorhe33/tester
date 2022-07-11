/**
 *
 *  How many unique ways can one move from one corner of a n x n board to the other corner.
 *  You can move up, down, left, and right. You cannot visit spots that you have visited already.
 *  Make your solution work for a grid of any size.
 *
 */

// A Board class might be useful

class Board {
  constructor(n) {
    this.board = [];
    for (let i = 0; i < n; i++) {
      this.board.push([]);
      for (let j = 0; j < n; j++) {
        this.board[i].push(false);
      }
    }
    this.board[0][0] = true

    this.size = n

    this.tally = 0

    //this is vertical
    this.i = 0
    //this is horizontal
    this.j = 0

  }

  //piece starts at 0, 0 - top left

  //move up
  moveUp(i, j) {
    if (i === 0 || this.hasBeenVisited(i - 1, j)) return 'invalid'
    this.i -= 1;
    // this.togglePiece(i, j)
  }

  //move down
  moveDown(i, j) {
    if (i === this.size - 1 || this.hasBeenVisited(i + 1, j)) return 'invalid'
    this.i += 1;
    this.togglePiece(i, j)
  }

  //move left
  moveLeft(i, j) {
    if (j === 0 || this.hasBeenVisited(i, j - 1)) return 'invalid'
    this.j -= 1;
    this.togglePiece(i, j)
  }

  //move right
  moveRight(i, j) {
    if (j === this.size - 1 || this.hasBeenVisited(i, j + 1)) return 'invalid'
    this.j += 1;
    this.togglePiece(i, j)
  }

  togglePiece(i, j) {
    this.board[i][j] = !this.board[i][j];
  }
  hasBeenVisited(i, j) {
    return !!this.board[i][j];
  }

  finished() {
    console.log(this.board)
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        console.log(this.board[i][j])
        if (this.board[i][j] === false) return false
      }
    }
    return true
  }

  // traverse(i, j) {
  //   if (this.finished()) return this.tally;
  //   if (this.i === n - 1 && this.j === n - 1) this.tally += 1;
  //   this.moveRight(i, j)
  // }

}

function nPaths(size, tally = 0) {
  const board = new Board(size)
  board.moveRight()
  console.log(board.i)
}

let board = new Board(2)
console.log(board.finished())
console.log(nPaths(2))
//output 2