function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  string = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
  return string
}

Book.prototype.addBookToLibrary = function() {
  myLibrary.push(this)
}

function displayBooks() {
  for (const myBook of myLibrary) {
    console.log(myBook.info());
  }
}

function showForm() {
  document.getElementById('form1').style.display = 'block';
}

let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
let theHobbit2 = new Book('The Hobbit2', 'J.R.R Tolkien', '295', 'not read yet');
let myLibrary = [];
theHobbit.addBookToLibrary();
theHobbit2.addBookToLibrary();
