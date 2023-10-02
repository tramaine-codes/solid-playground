import { JSX, Setter, createSignal } from 'solid-js';
import { Book } from './Bookshelf';

interface AddBookProps {
  readonly setBooks: Setter<readonly Book[]>;
}

const emptyBook: Book = { title: '', author: '' };

export function AddBook(props: AddBookProps) {
  const [newBook, setNewBook] = createSignal(emptyBook);

  const addBook: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (event) => {
    event.preventDefault();
    props.setBooks((bookList) => [...bookList, newBook()]);
    setNewBook(emptyBook);
  };

  return (
    <form>
      <p>
        <label for="title">Book name</label>
        <input
          id="title"
          value={newBook().title}
          onInput={(e) => {
            setNewBook({ ...newBook(), title: e.currentTarget.value });
          }}
        />
      </p>
      <p>
        <label for="author">Author</label>
        <input
          id="author"
          value={newBook().author}
          onInput={(e) => {
            setNewBook({ ...newBook(), author: e.currentTarget.value });
          }}
        />
      </p>
      <button type="submit" onClick={addBook}>
        Add book
      </button>
    </form>
  );
}
