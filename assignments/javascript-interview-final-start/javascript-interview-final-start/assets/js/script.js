const movieThumb = document.querySelector('#movieThumb')
const allgernes = document.querySelector('#allgernes')
for (let i = 0; i < allMovies.length; i++) {
    allgernes.innerHTML += `
     <option value="${i}">${allMovies[i].gerne}</option>
`;
}
function loafMovies(g) {
    console.log(g);
    for (let i = 0; i < 8; i++) {
        movieThumb.innerHTML += `  <li>
                        <h4>${allgernes[g].movies[i].title}</h4 >
        <img src="assets/img/ballerina.png" alt="" class="img-xl">
            <p>Authors</p>
            <p>desc</p>
            <p>Length:108min</p>
            <p>Date:10-20-2023</p>
        </li>`;
    }
}

