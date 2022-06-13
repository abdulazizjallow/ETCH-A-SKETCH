"use strict"
const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRgb = document.createElement("button");
const btnGridSize = document.createElement("button");
const btnEreser = document.createElement("button");

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

function Ereser() {
    const boxes = document.querySelectorAll(".box")
    btnEreser.textContent = "Eraser";
    btnEreser.addEventListener("click", ()=> { 
        boxes.forEach((box)=> 
            box.addEventListener("mouseover", ()=> {
                box.style.background = `white`;
            })
        )

    })
    btnContainer.appendChild(btnEreser).classList.add("btn");
}
Ereser();

function reset() {
    const boxes  = document.querySelectorAll(".box");
    boxes.forEach((box)=> box.remove());
}

function resize() {
    btnGridSize.textContent = `Grid Size`;
    btnGridSize.addEventListener("click", ()=> {
        let user = prompt(`what size do you want your Grid to be`);
        if (user === null || user < 1) {
            reset();
            createDivs(16, 16);
            greyColor();
            blackColor();
            rgbColor();
            Ereser();

        } else {
            reset();
            createDivs(user, user);
            greyColor();
            blackColor();
            rgbColor();
            Ereser();
        }
    })
    btnContainer.appendChild(btnGridSize).classList.add("btn");
}
resize();