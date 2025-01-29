
import './App.css';
import BookCard from './component/BookCard/BookCard';

function App() {
  let books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 200
    },
    {
      title: "Pride and Prejudice",
      author: "Harper Lee",
      pages: 300
    },
    {
      title: "The Great Gatsby",
      author: "Harper Lee",
      pages: 500
    },
    {
      title: "Moby-Dick",
      author: "Harper Lee",
      pages: 456
    }

  ]
  books = books.sort((b1, b2) => b1.pages > b2.pages ? 1 : -1)

  return (
    <div>
      {
        books.map(b => <BookCard book={b}></BookCard>)
      }
    </div>

  );
}

export default App;
