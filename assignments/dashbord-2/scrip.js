console.log("your're on");
let userMgnBTN = document.querySelector('#userMgnBTN');
let learningPlanBTN = document.querySelector('#learningPlanBTN');
let reportsBTN = document.querySelector('#reportsBTN');
let settingsBTN = document.querySelector('#settingsBTN');

let pageFeed = document.querySelector('#pageFeed')

userMgnBTN.addEventListener('click', function () {
    pageFeed.innerHTML += `<h>${feetPages[0].title}</h2>
          <p>Manage users, assign roles, and handle permissions here.</p>`


});

learningPlanBTN.addEventListener('click', function () {
});

reportsBTN.addEventListener('click', function () {
});

settingsBTN.addEventListener('click', function () {
});
