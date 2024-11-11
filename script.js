
const button = document.getElementById("button");
const input = document.getElementById("input");

let max=localStorage.getItem("max");
const randomNumber = Math.floor(Math.random() * max);
console.log(randomNumber);

button.addEventListener("click", handleGuess);

// guest handling event 
function handleGuess(){
    const number = input.value;
    if (number === "") {
        displayError("Veuillez entrer un nombre");
    } else if (isNaN(number)) {
        displayError("Veuillez entrer un nombre");
    } else {
        verifyNumber(number, randomNumber);
    }
}

//afficher le nombre généré
function displayNumber(number) {
    document.getElementById("result").innerHTML = number;
}

//afficher un message d'erreur
function displayError(message) {
    document.getElementById("result").innerHTML = message;
}

// function verify the number
function verifyNumber(number, randomNumber){
    if(number<randomNumber){
        document.getElementById("result").innerHTML = `le nombre ${number} est plus petit que le nombre aléatoire. Réessayez!`;
         document.getElementById("result").style.color = "red";
    }
    else if(number>randomNumber){
        document.getElementById("result").innerHTML = `le nombre ${number} est plus grand que le nombre aléatoire. Réessayez!`;
        document.getElementById("result").style.color = "red";
    }
    else{
        document.getElementById("result").innerHTML = `Bravo! Vous avez  Réussi. Le nombre est ${number}`;
        document.getElementById("result").style.color = "green";
        const button =document.createElement("button")
        button.innerText="Reprendre"
        console.log(button);
        document.getElementById('result').appendChild(button)
        

    }
}



