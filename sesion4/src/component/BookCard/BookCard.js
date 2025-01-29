import './BookCard.css'


function BookCard({ book }) {
    let numofPages = book.pages;
    let cl;
    if (numofPages <= 200) {
        cl = 'Easy'
    }
    else if (numofPages <= 300) {
        cl = 'Medium'
    }
    else {
        cl = 'Hard'
    }


    return (
        <div className={`'BookCard'${cl}`} >
            <p >{book.title}  </p>
            <p >{book.author} </p>
            <h4 >{book.pages}</h4>
        </div>

    );
}

export default BookCard;