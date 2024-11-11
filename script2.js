const easy = document.getElementById("facile");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");


let randomNumber;

function startGame(max){
console.log(max);
    localStorage.setItem("max", max);
}

easy.addEventListener("click", function(){
    startGame(20);
    window.location.href = "index.html";
});
medium.addEventListener("click", function(){
    window.location.href = "index.html";
    startGame(50);
});
hard.addEventListener("click", function(){
    window.location.href = "index.html";
    startGame(100);
});