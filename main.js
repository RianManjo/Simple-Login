let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("login");
let messageRef = document.getElementById("message-ref");

let IsUsernameValid = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};

let IsPasswordValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
};

usernameRef.addEventListener("input", () => {
    if (IsUsernameValid()){
        messageRef.style.visibility = "hidden";
        usernameRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";                
    }else{
        usernameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";        
    }
});

passwordRef.addEventListener("input", () =>{
    if (!IsPasswordValid()){
        messageRef.style.visibility = "hidden";
        passwordRef.style.cssText = 
        "border-color: #fe2e2e; background-color: #ffc2c2"; 
    }else{
        password.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";        
    }
});

loginBtn.addEventListener("mouseover", () =>{
    if (!IsUsernameValid() || !IsPasswordValid()){
        let containerRect = document
        .querySelector(".container")
        .getBoundingClientRect();
        let loginRect = loginBtn.getBoundingClientRect();
        let offset = loginRect.left - containerRect.left;
        console.log(offset);
        if (offset <= 100){
            loginBtn.style.transform = "translateX(16.25em)";
        }
        else{
            loginBtn.style.transform = "translateX(0)";
        }
    }
});
loginBtn.addEventListener("click", () =>{
    messageRef.style.visibility = "visible";
});
