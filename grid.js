
const container = document.querySelector("#container");
const resetContainer = document.querySelector("#container1");
const reset = document.querySelector("#reset");

const resetButtonSize = 18;
const resetButtonMargin = 5;

resetContainer.style.display = "flex";
resetContainer.style.justifyContent = "center";
resetContainer.style.margin = 5 + "px";
//reset.style.border = "1px solid #00ff88ff";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";



let windowHeight = Math.floor((window.innerHeight-resetButtonSize-resetButtonMargin)/18);
let rowWidth = Math.floor(document.documentElement.offsetWidth/18);

// grid.setAttribute("style", "width:16px; height:16px;");
//grid.style.width = 16 + "px"
// grid.style.height = document.documentElement.offsetHeight;
//grid.style.setProperty("height", "50px", "important");

//grid.style.height = 16 + "px";

//grid.style.height = "50px";
//grid.style.border = "1px solid #00ff88ff";

for (let i = 0; i < rowWidth; i++) {
    for (let j = 0; j < windowHeight; j++) {
        const grid = document.createElement("div");
        grid.id = "gridItem";
        container.appendChild(grid);

        grid.style.width = 16 + "px";
        grid.style.height = 16 + "px";
        grid.style.margin = 0 + "px";
        //grid.setAttribute("style", "width:16px; height:16px;");
        grid.style.border = "1px solid #00ff88ff";

        grid.addEventListener("mouseover", (event) => {grid.style.backgroundColor = "red"
            setTimeout(() => {
                event.target.style.backgroundColor = "";
                }, 2000);
        })
    }
}

console.log(container.children.length)

reset.addEventListener("click", () => {
    let element = document.getElementById("#gridItem");
    let numberOfChildren = element.getElementById("#gridItem").length
    for (let i=0; i<(numberOfChildren); i++){
        const grid = document.querySelector("#gridItem");
        container.removeChild(grid);
    }
    // let cells = prompt("Enter number of cells");
    // for (let c = 0; c < cells; c++){
    //     const grid = document.createElement("div");
    //     grid.id = "gridItem";
    //     container.appendChild(grid);

    //     grid.style.width = 16 + "px";
    //     grid.style.height = 16 + "px";
    //     grid.style.margin = 0 + "px";
    //     //grid.setAttribute("style", "width:16px; height:16px;");
    //     grid.style.border = "1px solid #00ff88ff";

    //     grid.addEventListener("mouseover", (event) => {grid.style.backgroundColor = "red"
    //         setTimeout(() => {
    //             event.target.style.backgroundColor = "";
    //             }, 2000);
    //     })
    // }
})

// function createGrid(){
    
    
// }

//createGrid();



// function createGrid(size) {
//     let ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / size)
//     let ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / size);

//     let parent = document.createElement('div');
//     parent.className = 'grid';
//     parent.style.width = (ratioW * size) + 'px';
//     parent.style.height = (ratioH * size) + 'px';

//     for (let i = 0; i < ratioH; i++) {
//         for (let p = 0; p < ratioW; p++) {
//             let cell = document.createElement('div');
//             cell.style.height = (size - 1) + 'px';
//             cell.style.width = (size - 1) + 'px';
//             parent.appendChild(cell);
//         }
//     }

//     document.body.appendChild(parent);
// }

// createGrid(16);