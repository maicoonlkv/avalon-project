
const buttonAcess = document.querySelector('.buttonAcess')
const userName = document.getElementById('inputName')
const userPassword = document.getElementById('inputPassword')
const showPassword = document.getElementById('showPassword')

const newUser = 'admin'
const newPassword = 'admin'

function cliquei() {
    //console.log(userName.value)
    //console.log(userPassword.value)

    if(userName.value === newUser && userPassword.value === newPassword) {
        window.location.href = "./menu.html"
    } else {
        alert("Senha Incorreta")
    }
}

function mostrarsenha(){
    
    if (this.checked) {
        userPassword.type = 'text'
    } else {
        userPassword.type = 'password'
    }
}

 

showPassword.addEventListener("change", mostrarsenha)
buttonAcess.addEventListener("click", cliquei)