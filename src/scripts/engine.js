
const emojis = [
    "💵", "💵",
    "🤑", "🤑",
    "💰", "💰",
    "💴", "💴",
    "🪙", "🪙",
    "😁", "😁",
];

let openCards = [];

let shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 1 : -1);

// Criação das caixas do jogo
for (let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffledEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    // Verifica se tem duas cartas abertas e se a carta não está combinada
    if (openCards.length < 2 && !this.classList.contains("boxMatch") && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    // Verifica se todas as cartas foram combinadas
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você Venceu !!!!");
    }
}
