export function selectedBook(book) {

  return{
    type : 'BOOK_SELECTED',
    payload : book
  };
}