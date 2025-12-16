
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";
//container.style.flexDirection = "row";
container.style.margin = 0 + "px";
//container.style.alignItems = "strech";
//container.style.alignContent = "strech";

let windowHeight = Math.floor(window.innerHeight/16);


let linePerRow = Math.floor(document.documentElement.offsetWidth/16);


// grid.setAttribute("style", "width:16px; height:16px;");
//grid.style.width = 16 + "px"
// grid.style.height = document.documentElement.offsetHeight;
//grid.style.setProperty("height", "50px", "important");

//grid.style.height = 16 + "px";

//grid.style.height = "50px";
//grid.style.border = "1px solid #00ff88ff";

for (let i = 0; i < linePerRow-5; i++) {
    for (let j = 0; j < windowHeight-5; j++) {
        const grid = document.createElement("div");

        
        container.appendChild(grid);

        grid.style.width = 16 + "px";
        grid.style.height = 16 + "px";
        grid.style.margin = 0 + "px";
        //grid.setAttribute("style", "width:16px; height:16px;");
        grid.style.border = "1px solid #00ff88ff";
    }
    // const grid = document.createElement("div");

    // //grid.classList.add("gridClass");
    // container.appendChild(grid);

    // grid.style.width = 16 + "px";
    // grid.style.height = 16 + "px";
    // grid.style.margin = 0 + "px";
    // //grid.setAttribute("style", "width:16px; height:16px;");
    // grid.style.border = "1px solid #00ff88ff";
}

function createGrid(){
    
    
}

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