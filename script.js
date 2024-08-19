function createGrid () {
    for (let i = 1; i <= 273; i++) {
        const gridContainer = document.querySelector("#grid-container");
        const gridSquare = document.createElement("div");
        gridSquare.style.height = "25px";
        gridSquare.style.width = "25px";
        gridSquare.style.border = "solid 1px black";
        gridContainer.appendChild(gridSquare);
    }
}

createGrid();