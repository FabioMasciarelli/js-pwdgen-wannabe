// PASSWORD GENERATOR

// CHIEDIAMO ALL'UTENTE IL NOME 
let userName = prompt("Hi user! What's your name?"); //STRING
console.log(userName, typeof userName);

//CHIEDO ALL'UTENTE IL COGNOME
let userSurname = prompt ("and.. What's your surname?"); //STRING
console.log(userSurname, typeof userSurname);

// CHIEDO ALL'UTENTE IL COLORE PREFERITO
let userFavouriteColor = prompt ("for the last, What's yout favourite color?"); //STRING
console.log(userFavouriteColor), typeof userFavouriteColor;

const randomNumber = Math.floor (Math.random () * 100); //NUMBER

// CONCATENO IL NOME COGNOME E COLORE PREFERITO DELL'UTENTE
const resultPassword = userName + userSurname + userFavouriteColor + randomNumber; //STRING
console.log(resultPassword, typeof resultPassword);

// CREO IL MESSAGGIO CHE L'UTENTE VEDRA' IN PAGINA
const userPassword = `Ho creato una password con i dati che hai inserito: ${resultPassword}`;
console.log(userPassword, typeof userPassword);

// METTO IL MESSAGGIO IN PAGINA
document.getElementById("questions") .innerHTML = userPassword;