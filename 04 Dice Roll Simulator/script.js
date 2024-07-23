// Animate the Dice

const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll-btn");
const rollHistory = document.querySelector(".roll-history");

let historyList = [];

rollBtn.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
    }, 1000);
    const rollResult = Math.floor(Math.random() * 6 + 1);

    const diceFace = getDiceFace(rollResult);
    dice.innerHTML = diceFace;
    historyList.push(rollResult);
    updateHistoryList();

});


// Update the history list

function updateHistoryList() {
    rollHistory.innerHTML = ""
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])} </span>`;
        rollHistory.appendChild(listItem)
    }
}

// Get the Dice Face
function getDiceFace(rollResult) {
    switch(rollResult) {
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
        default:
            return "&#9856"
    }
}


// Roll History






/* const rollBtn = document.querySelector(".roll-btn")
const dice = document.querySelector("#dice");

const rollHistory = document.querySelector(".roll-history");

let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6 + 1);
    const diceFace = getDiceFace(rollResult);
    dice.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();

}

function updateRollHistory() {
    rollHistory.innerHTML = "";

    for(let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])} </span>`;
        rollHistory.appendChild(listItem);
        console.log(rollHistory)
    }
}

function getDiceFace(rollResult) {
    switch(rollResult) {
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
        default:
            return "&#9856"
    }
}

rollBtn.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
    }, 1000);
    rollDice()
}) */