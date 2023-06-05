const username = document.querySelector('.Username');
const password = document.querySelector('.password');
const submit = document.querySelector('.submit');
const Pinvalid = document.querySelector('.invalid');
const body = document.querySelector('body');
const loading = document.querySelector('.loading');



submit.addEventListener('click',() => {
    if(username.value === '' || password.value === ''){
        Pinvalid.innerHTML = 'The username or password is incorrect'
        return;
    }
    else {
        Pinvalid.innerHTML = ''
        loading.style.opacity = '1';

    }

    setTimeout(() => {
        saveUser()
    }, 3000);
});

checkUserLogged()

function saveUser() {


    const localUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];

    const localUserObject = {
        username : username.value,
        password : password.value
    }

    localUser.push(localUserObject);

    localStorage.setItem("user",JSON.stringify(localUser))


    welcomeMessage(username.value)

    username.value = '';
    password.value = '';
}


function checkUserLogged() {
    
    const savedUser = localStorage.getItem("user")

    if(savedUser){
        const parsedUser = JSON.parse(savedUser);

        if(parsedUser.length > 0){
            const lastUser = parsedUser[parsedUser.length - 1];
            welcomeMessage(lastUser.username)
        }

    }

}



function welcomeMessage(username) {
    body.innerHTML = `
    <div class="logout">
        <h1 class="h1"> Welcome ${username} </h1>
        <button onclick="logout()" class="submit2">Log Out</button>    
    </div>
    `
}

function logout() {
    location.reload()
    localStorage.removeItem("user");
}
