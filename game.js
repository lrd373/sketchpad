let container = document.querySelector("#grid-container");

let resetButton = document.querySelector("#reset-button");

function removeGrid () {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getGridDimensions () {
    let gridDimensions = prompt
        ("How many squares per side would you like in the grid? Please enter a number 1-100:");

    gridDimensions = parseInt(gridDimensions);

    while (isNaN(gridDimensions) || gridDimensions > 100 || gridDimensions < 0) {
        gridDimensions = prompt("Please enter an integer between 1 and 100:");
        gridDimensions = parseInt(gridDimensions);
    }

    return gridDimensions;
}

function randomRGB () {
    let redValue = Math.ceil(Math.random() * 256);
    let greenValue = Math.ceil(Math.random() * 256);
    let blueValue = Math.ceil(Math.random() * 256);

    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function increaseOpacity (element) {
    let boxOpacity = +element.dataset.opacity;
    
    if (boxOpacity < 1) {
        boxOpacity += 0.1;
        element.style.backgroundColor = `rgba(0, 0, 0, ${boxOpacity})`;
        element.dataset.opacity = boxOpacity;
    }
}

resetButton.addEventListener("click", ()=>{
    removeGrid();

    let gridDimensions = getGridDimensions();
   
    container.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;

    for (let i=0; i<(gridDimensions**2); i++) {
        let gridBox = document.createElement("div");

        let boxSideLength = 800/gridDimensions;
        gridBox.style.cssText = 
            `width: ${boxSideLength}px; height: ${boxSideLength}px; background-color: white;`;
        
        gridBox.setAttribute("data-opacity","0"); 

        gridBox.addEventListener("mouseover", () => {
            increaseOpacity(gridBox);
        });
        
        container.appendChild(gridBox);   
    }
    
});



