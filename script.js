const myLibrary = [{ title: 'The Bible', author: 'God', pages: 1000, read: 'read' }];

class Book {
  constructor (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
  }

  toggle() {
    this.read === 'read' ? this.read = 'not read' : this.read = 'read';
  }
}

function addBookToLibrary(...input) {
  const newBook = new Book(...input);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach(book => {
    //display in DOM
    //maybe add a card in a flexbox container?
    console.log(book);
  })
}

displayBooks();

