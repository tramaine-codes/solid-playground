import { createSignal } from 'solid-js';
import { AddBook } from './AddBook';
import { BookList } from './BookList';

export interface Book {
  readonly author: string;
  readonly title: string;
}

interface BookshelfProps {
  readonly name: string;
  readonly bookList: readonly Book[];
}

export const Bookshelf = (props: BookshelfProps) => {
  const [books, setBooks] = createSignal<readonly Book[]>([
    { title: 'Code Complete', author: 'Steve McConnell' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'Living a Feminist Life', author: 'Sarah Ahmed' },
  ]);

  return (
    <>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </>
  );
};
