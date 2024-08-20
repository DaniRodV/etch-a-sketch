function createGrid (gridSize) {
    //Loop to create grid based on the input
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const gridContainer = document.querySelector("div#grid-container");
        const gridCell = document.createElement("div");
        gridContainer.appendChild(gridCell);

        //The square will always be 600x600
        //If there are fewer squares, they will be bigger.
        //More squares, they will be smaller.
        const cellSize = 600 / gridSize;
        gridCell.setAttribute(`style`, `height: ${cellSize}px; width: ${cellSize}px; border: 0.2px solid black`);
        gridCell.addEventListener("mouseenter", () => {
            gridCell.style.backgroundColor = "black";
        });
    }
}

createGrid (16);