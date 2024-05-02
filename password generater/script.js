const passwordbox = document.querySelector('.pass');
const length = 8; 

const lower ="abcdefghijklmnopqrstuvwxyz";
const upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789"

allChar = upper+lower+number;

function createPassword(){
    
    let password='';
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=number[Math.floor(Math.random()*number.length)];

    while (length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    passwordbox.value = password;
}