// Sample admin credentials
const credentials = {
    username: 'admin',
    password: 'admin123'
};

// Sample game data
let games = [
    {
        name: 'CG FC 24',
        thumbnail: 'images/cgfc.avif',
        url: 'https://www.crazygames.com/game/cg-fc-24',
        likes: 150,
        views: 2000
    },
    {
        name: 'Supermarket sort',
        thumbnail: 'images/supermarket.avif',
        url: 'https://www.crazygames.com/game/supermarket-sort-grocery-game',
        likes: 250,
        views: 5000
    },
    {
        name: 'Gun Strike Runner',
        thumbnail: 'images/gun-strike-runner.avif',
        url: 'https://www.crazygames.com/game/gun-strike-runner',
        likes: 188,
        views: 4800
    }
];

let isAddingNewGame = false; // This flag will tell us whether we are adding or editing a game
let currentGameIndex = null; // Holds the index of the game being edited


let loginBtn = document.querySelector("#loginBtn");
let dashboardPage = document.querySelector("#dashboardPage");
let loginError = document.querySelector("#loginError")
let user = document.getElementById("#username");
let pass = document.getElementById("#password");
let loginPage = document.getElementById("#loginPage")
let loginForm = document.querySelector("#loginForm");

loginBtn.addEventListener("click", function () {
    if (user.value === credentials.username && pass.value === credentials.password) {
        dashboardPage.style.display = "block";
        loginPage.style.display = "none";
    }
    else {
        loginError.innerHTML = "invalid login";
    }
});
