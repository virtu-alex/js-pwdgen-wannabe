/* TRACCIA:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

1- RECUPERO ELEMENTO NEL MIO FOGLIO HTML
2- CREO LE DOMANDE TRAMITE DEI PROMPT
3- CALCOLO LE DOMANDE DEI PROMPT E STAMPO */

const passwordGenerator = document.getElementById('automaticpassword');

// PRIMO PROMPT, NOME

const userName = prompt("Quale e' il tuo nome?");
console.log(userName);

// SECONDO PROMPT, COGNOME

const userSurname = prompt("Quale e' il tuo cognome?");
console.log(userSurname);

// TERZO PROMPT, COLORE PREFERITO

const userColor = prompt("Qual'e' il tuo colore preferito?");
console.log(userColor);

// CALCOLO PROMPTS = PASSWORD RANDOMIZED

passwordGenerator.innerHTML = `${userName}${userSurname}${userColor}21`;
console.log(password.innerHTML);