const gridContainer = document.querySelector("div#grid-container");
const gridBtn = document.querySelector("#grid-btn");
const resetBtn = document.querySelector("#reset-btn");

function randomize(number) {
    return Math.floor(Math.random() * (number + 1));
}


function createGrid (gridSize) {
    //Prevent default drag behavior
    gridContainer.addEventListener("mousedown", (e) => {
        e.preventDefault();
    });

    //Loop to create grid based on the input 
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const gridCell = document.createElement("div");
        gridContainer.appendChild(gridCell);

        //The square will always be 700x700
        //If there are fewer squares, they will be bigger.
        //More squares, they will be smaller.
        const cellSize = 700 / gridSize;
        gridCell.setAttribute(`style`, `height: ${cellSize}px;
            width: ${cellSize}px;
            opacity: 0.1;
            background-color: white`);

        //Event listener for filling out cells
                gridCell.addEventListener("mouseover", (e) => {

            let currentOpacity = parseFloat(e.target.style.opacity);

                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                    e.target.style.opacity = currentOpacity;
                }
                
            if (e.buttons === 1) {
                
                if (e.target.style.backgroundColor === "white") {
                    const randomColor = `rgb(${randomize(256)}, ${randomize(256)}, ${randomize(256)})`
                    e.target.style.backgroundColor = randomColor;
                }
            }
        });
        //Event listener for clearing the grid, keeping the same number of cells
        resetBtn.addEventListener("click", () => {
            gridCell.style.backgroundColor = "white";
            gridCell.style.opacity = 0.1;
        });
    }
}

function removeGrid () {
    gridContainer.textContent = "";
}

function changeGridSize () {
    removeGrid();
    
    let newSize;

    do {
        newSize = prompt("Select the size of your grid. It must be a number between 4 and 100.", "");

        if (newSize === null) {
            createGrid(16);
            break;
        } else if (isNaN(newSize) || newSize < 4 || newSize > 100) {
            alert("Invalid input. Make sure you are selecting a number between 4 and 100.")
        }

    } while (isNaN(newSize) || newSize < 4 || newSize > 100);

    createGrid(newSize);
}

gridBtn.addEventListener("click", changeGridSize);

createGrid (16);