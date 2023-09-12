import { AddBook } from './AddBook';
import { BookList } from './BookList';

const Bookshelf = () => {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  );
};

const App = () => {
  return <Bookshelf />;
};

export default App;
