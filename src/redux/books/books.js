const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'BOOKSTORE/BOOKS/LOAD_BOOKS';

const initialState = { books: [] };
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return { books: [payload, ...state.books] };
    case REMOVE_BOOK:
      return { books: state.books.filter((book) => book.id !== payload) };
    case LOAD_BOOKS:
      return { books: [...payload] };
    default:
      return state;
  }
};
export default reducer;
