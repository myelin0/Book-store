const Form = () => (
  <form>
    <h1>ADD NEW BOOK</h1>
    <input className="Title" type="text" placeholder="Book Title" required />
    <input className="Author" type="text" placeholder="Author Name" required />
    <select name="category">
      <option value="" hidden>
        Category
      </option>
      <option value="Action">
        Action
      </option>
      <option value="Sci-fi">
        Science Fiction
      </option>
      <option value="economy">
        Economy
      </option>
      <option value="Coding">
        Coding
      </option>
    </select>

  </form>
);
export default Form;
