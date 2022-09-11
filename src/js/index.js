const homeSection = document.querySelector(".homeSection");
const loginSection = document.querySelector(".loginSection");
const loginFrom = document.querySelector("#login-form");
const loginBtn = document.querySelector(".loginBtn");

const userName = document.querySelector("#userName");
const userIdInput = document.querySelector("#userId");
const passwordInput = document.querySelector("#password");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
    console.log("click login button", event);
    event.preventDefault();
    const userId = userIdInput.value;
    const password = passwordInput.value;

    // login
    localStorage.setItem("userId", userId);
    localStorage.setItem("password", password);

    loginSection.classList.add(HIDDEN_CLASSNAME);
    homeSection.classList.remove(HIDDEN_CLASSNAME);


    const userProfile = localStorage.getItem("userId");

    userName.innerText = userProfile;
    

    console.log('/?????', userProfile);


}

loginFrom.addEventListener("submit", onLoginSubmit);