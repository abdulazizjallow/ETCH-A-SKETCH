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

function greyColor() {
    const boxes = document.querySelectorAll(".box")
    btnGray.textContent = "Gray";
    btnGray.addEventListener("click", ()=> { 
        boxes.forEach((box)=> 
            box.addEventListener("mouseover", ()=> {
                let ram = Math.floor(Math.random() * 255);
                box.style.background = `rgb(${ram}, ${ram}, ${ram})`;
            })
        )

    })
    btnContainer.appendChild(btnGray).classList.add("btn");
}
greyColor();

function blackColor() {
    const boxes = document.querySelectorAll(".box")
    btnBlack.textContent = "Black";
    btnBlack.addEventListener("click", ()=> { 
        boxes.forEach((box)=> 
            box.addEventListener("mouseover", ()=> {
                box.style.background = `black`;
            })
        )

    })
    btnContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor();

function rgbColor() {
    const boxes = document.querySelectorAll(".box")
    btnRgb.textContent = "Rgb";
    btnRgb.addEventListener("click", ()=> { 
        boxes.forEach((box)=> 
            box.addEventListener("mouseover", ()=> {
                let R = Math.floor(Math.random() * 255);
                let G = Math.floor(Math.random() * 255);
                let B = Math.floor(Math.random() * 255);
                box.style.background = `rgb(${R}, ${G}, ${B})`;
            })
        )

    })
    btnContainer.appendChild(btnRgb).classList.add("btn");
}
rgbColor();