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

  const container = document.querySelector('#library')
  const content = document.createElement('div')
  content.classList.add('content')
  content.textContent = this.info()
  container.appendChild(content)
}

function displayBooks() {
  for (const myBook of myLibrary) {
    console.log(myBook.info());
  }
}

function showForm() {
  document.getElementById('form1').style.display = 'block'
}

let myLibrary = [];

let saveBookButton = document.querySelector('.saveBook')

saveBookButton.addEventListener('click', function (e) {
  title = document.getElementById("title").value
  author =  document.getElementById("author").value
  pages =  document.getElementById("pages").value
  read = document.getElementById("read").value
  
  newBook = new Book(title, author, pages, read)
  newBook.addBookToLibrary()
  
});
