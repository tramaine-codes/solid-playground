import { For } from 'solid-js';
import { Book } from './Bookshelf';

interface BookListProps {
  readonly books: readonly Book[];
}

export function BookList(props: BookListProps) {
  const totalBooks = () => props.books.length;

  return (
    <>
      <h2>My books ({totalBooks()})</h2>
      <ul>
        <For each={props.books}>
          {({ author, title }) => (
            <li>
              {title} ({author})
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
