var books = [];

function getBooks() {
  return new Promise(resolve => {
    // simple caching mechanism
    if (books.length) {
      resolve(books);
    }
    else {
      setTimeout(() => {
        books = generateBooks();

        books = books.map(book => {
          book.quantity = 0;
          book.tag = {val : 7 }
          return book;
        })
        resolve(books);
      }, 500);
    }
  });
}

function getBookById(bookId) {
  return getBooks().then(books => {
    const book = books.find(book => bookId === book.id);
    return book;
  });
}

function deleteBook(book) {
  console.log('Deleting the book', book)
  var idx = books.indexOf(book)
  books.splice(idx, 1);
}

function getNext(book) {
    // select next in a cyclic way
    var idx = books.indexOf(book);
    return (idx < books.length-1)?  
          books[idx+1] : books[0];
}

function saveBook(book) {
  var idx = books.findIndex(currBook => currBook.id === book.id)
  if(idx > -1){
    books.splice(idx, 1, book);
  }
  else{
    books.push(book);
  }
}

export default {
  getBooks,
  deleteBook,
  getNext,
  saveBook
}

function generateBooks() {
  return [
              {id: 1, name: `The Little Prince`, desc: `bla bla`,  price: 200, author: 'Antoine de Saint Exupéry', imgUrl: 'http://www.lookingglassreview.com/assets/images/The_Little_Prince.jpg'},
              {id: 2, name: 'War and Peace', desc: `bla bla`,  price: 100, author: 'Leo Tolstoy', imgUrl: 'http://fivebooks.com//app/uploads/2012/04/1400079985.01.LZ_1.jpg'},
              {id: 3, name: 'Harry Potter', desc: `bla bla`,  price: 150, author: 'J. K. Rowling', imgUrl: 'http://img.yumpu.com/55880836/1/358x471/07-harry-potter-y-las-reliquias-de-la-muerte.jpg?quality=80'},
              {id: 4, name: 'Lolita', desc: `bla bla`,  price: 120, author: 'Nabokov', imgUrl: 'https://vdarcangelo.files.wordpress.com/2011/07/lolita-book-cover.jpg?w=187&h=300'}
         ];
}