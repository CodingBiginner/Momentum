const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const onLoginSubmit = function (e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
};

const paintGreetings = function (userName) {
  greeting.innerText = `Hello!! ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
