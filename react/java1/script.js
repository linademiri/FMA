//JSX
// const app = <div>
//     <h1>Hello from {name}</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
// </div>;
// // const emri = React.createElement('h1', null, 'Lina Demiri');
// // const emri = <h1>Lina Demri</h1>
// //krijohet nje here
// const root = document.getElementById('root');
// //thirret vetem njehere
// ReactDOM.render(app, root)
// // ReactDOM.render(emri, root)

const books = [
    {
        title: 'Kronikë në Gur',
        author: 'Ismajl Kadare'
    },
    {
        title: 'Kështjella',
        author: 'Ismajl Kadare'
    },
    {
        title: 'Doktor Gjilpëra',
        author: 'Faik Konica'
    },
    {
        title: 'Ura me tri harqe',
        author: 'Ismajl Kadare'
    }
]

//component 1
const BookRow = ({ book, author }) => {
    return <li className="BookRow">{book} - {author}</li>
}

const BookList = ({ books }) => {
    const bookSort = books.sort((a, b) => a.title.localeCompare(b.title));

    return <div className="BookList">
        <h3 className="BookList_Title">Books</h3>

        <ol className="BookList_List">
            {
                books.map(book => <BookRow book={book.title} author={book.author}></BookRow>)

            }
        </ol>
    </div>
}

//krijohet vetem nje here
const root = document.getElementById('root');

//thirret vetem nje here
ReactDOM.render(<BookList books={books} />, root);

//componenent 1
// const BookRow = ({ book, author }) => {
//     return <li>{book}-{author}</li>
// }

// const BookList = () => {
//     return <div>
//         <h3>Books</h3>
//         <ol>
//             <BookRow book="Kornike ne Gur" author="Ismaj Kadare" />
//             <BookRow book="Keshtjella" author="Ismaj Kadare" />

//         </ol>
//     </div>
// }
// ReactDOM.render(<BookList />, root)
