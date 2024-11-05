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

//Add your code below
let loginBtn = document.querySelector("#loginBtn");
let dashboardPage = document.querySelector("#dashboard-page");
let loginError = document.querySelector("#login-error")
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginPage = document.getElementById("login-page")
let gameList = document.getElementById("game-list");
let editModal = document.getElementById("edit-modal");
let removeModal = document.getElementById("remove-modal")
let confirmRemove = document.getElementById("confirm-remove");
let cancelRemove = document.getElementById("cancel-remove");
let saveChanges = document.getElementById("saveChanges");
let editThumbnail = document.getElementById("edit-thumbnail");
let editUrl = document.getElementById("edit-url");
let editLikes = document.getElementById("edit-likes");
let editViews = document.getElementById("edit-views");

function openEditModal(index = null) {

}


loginBtn.addEventListener("click", () => {
    if (user.value == credentials.username && pass.value == credentials.password) {
        dashboardPage.style.display = "block";
        loginPage.style.display = "none"
    }
    else {
        loginError.innerHTML = "invalid login"
    }
})
renderList();
function renderList() {

    gameList.innerHTML = "";
    for (i = 0; i < games.length; i++) {
        gameList.innerHTML +=
            `  <tr>
    <td>${games[i].name}</td>
    <td><img src="${games[i].thumbnail}"</td>
    <td><a href="${games[i].url}">gameurl</a></td>
    <td>${games[i].likes}</td>
    <td>${games[i].views}</td>
    <td><button class="edit" onclick="openEditModal()">Edit</button></td>
    <td><button class="remove" onclick="openRemoveModal(i)">remove</button></td>
</tr>`
    }
}
function openEditModal() {
    editModal.style.display = "block";
    saveChanges.addEventListener("click", (currentGameIndex) => {
        gameList[currentGameIndex].thumbnail = editThumbnail.value;
        gameList[currentGameIndex].url = editUrl.value;
        gameList[currentGameIndex].likes = editLikes.value;
        gameList[currentGameIndex].views = editViews.value;
        renderList();
        editModal.style.display = "none";
    })

}
function openRemoveModal(i) {
    removeModal.style.display = "block"
    confirmRemove.addEventListener("click", (currentGameIndex) => {
        games.splice(currentGameIndex, 1)
    });
    cancelRemove.addEventListener("click", () => {
        removeModal.style.display = "none"
    })
}
