function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    string = title + " by " + author + ", " + pages + " pages, "+ read
    return string
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet')
