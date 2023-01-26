const userName = document.getElementById("un");
const password = document.getElementById("pass");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userName.value.trim() === "rc" && password.value.trim() === "mahdi01") {
        password.innerHTML = ""
        userName.innerHTML = ""
        window.location.assign("../index.html");
        
    } else if (userName.value.trim() == "" && password.value.trim() == "") {
        userName.classList += " Warning";
        password.classList += " Warning";
    } else if (userName.value != "rc" && password.value !== "mahdi01") {
        userName.classList += " Error";
        password.classList += " Error";
    } else if (userName.value !== "mahdi01") {
        userName.classList += " Error";
    } else {
        password.classList += " Error";
    }
});
