let seasons;
let title = document.querySelector('.title');
let ImageUrl = document.querySelector('img')
let imgContainer = document.querySelector('.imgContainer');

function loadPage(seasons) {

    console.log(seasons);
    if (seasons == 'spring') {
        ImageUrl.src = 'assets/images/spring.png'
        title.textContent = 'Welcome to spring'
    }
    if (seasons == 'summer') {
        ImageUrl.src = 'assets/images/summer.png'
        title.textContent = 'Welcome to summer'

    } if (seasons == 'fall') {
        ImageUrl.src = 'assets/images/fall.png'
        title.textContent = 'Welcome to fall'

    } if (seasons == 'winter') {
        ImageUrl.src = 'assets/images/winter.png'
        title.textContent = 'Welcome to winter'
    }
    if (seasons == 'allSeasons') {
        title.textContent = 'Welcome to all seasons';
        imgContainer.innerHTML += `<img class="img-xxl" src="assets/images/spring.png" alt="Spring" /> `
        imgContainer.innerHTML += `<img class="img-xxl" src="assets/images/spring.png" alt="Spring" /> `
        imgContainer.innerHTML += `<img class="img-xxl" src="assets/images/spring.png" alt="Spring" /> `
        imgContainer.innerHTML += `<img class="img-xxl" src="assets/images/spring.png" alt="Spring" /> `

    }

}