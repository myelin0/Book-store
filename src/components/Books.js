import Form from './Form';
import BookList from './BooksList';

function Books() {
  return (
    <div className="Books-wrapper">
      <BookList />
      <hr />
      <Form />
    </div>
  );
}

export default Books;
