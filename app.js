"use strict"
const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRgb = document.createElement("button");
const btnGridSize = document.createElement("button");

function createDivs(cols, rows) {
    for(let i = 0; i < cols * rows; i++) {
        const div = document.createElement("div");
        div.style.border = `1px solid red`;
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("box");
    }
}

createDivs(16, 16);
