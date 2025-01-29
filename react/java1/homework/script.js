const movies = [
    {
        title: 'Inception',
        director: 'Christopher Nolan'
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola'
    },
    {
        title: 'Parasite',
        director: 'Bong Joon-ho'
    },
    {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino'
    }
];


const MoviesRow = ({ movie, director }) => {
    return <li className=" MoviesRow">{movie} - {director}</li>
}

const MovieList = ({ movies }) => {
    const moviesSort = movies.sort((A, B) => A.title.localeCompare(B.title));

    return <div className="MovieList">
        <h3 className="MovieList_Title">Movies</h3>

        <ol className="MovieList_List">
            {
                movies.map(movie => <MoviesRow movie={movie.title} director={movie.director}></MoviesRow>)

            }
        </ol>
    </div>
}

//krijohet vetem nje here
const root = document.getElementById('root');

//thirret vetem nje here
ReactDOM.render(<MovieList movies={movies} />, root);