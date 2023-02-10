const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// form 제출하면 화면 사라지고 "Hello + username" 나와야 함
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 form  숨김
    localStorage.setItem(USERNAME_KEY, loginInput.value); // username이 db에 들어감
   paintUsername();
}

function onLoginLink(event){
    console.log(event);
    event.preventDefault();
}

function paintUsername(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.textContent = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(localStorage.getItem(USERNAME_KEY) === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintUsername();
}




