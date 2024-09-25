const game = document.querySelector('#game');
const gamedesc = document.querySelector('#gamedesc');
const gameViews = document.querySelector('#gameViews');
const gameLikes = document.querySelector('#gameLikes')
const listGames = document.querySelector('#listGames')
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const input4 = document.querySelector('#input4');
const btn = document.querySelector('#btn');
const removeGame = document.querySelector('#removeGame');
renderList();
function renderList() { }
for (let i = 0; i < allGames.length; i++) {
    listGames.innerHTML += `<li>
    <h3 id="game">${allGames[i].name}</h3>
      <p id="gamedesc">${allGames[i].desc}</p>
            <p id="gameViews">${allGames[i].views}</p>
            <p id="gameLikes">${allGames[i].likes}</p>
            <p><a href="#removeGame" onclick="removeItem(${i}">Remove</a></p>
        </li>
    `
}
btn.addEventListener('click', function () {
    allGames.push({
        name: `${input1.value}`
        desc: `${input2.value}`
        views: `${input3.value}`
        likes: `${input4.value}`
    })



})


function removeItem(i) {
    allGames.splice(i, 1);
    renderList;
}