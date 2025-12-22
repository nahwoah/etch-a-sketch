const body = document.querySelector("#mainBody");
const container = document.querySelector("#container");
const resetContainer = document.querySelector("#container1");
const reset = document.querySelector("#reset");

const resetButtonSize = 18;
const resetButtonMargin = 12;

body.style.display = "flex";
body.style.flexDirection = "column";

resetContainer.style.display = "flex";
resetContainer.style.justifyContent = "center";
resetContainer.style.margin = 5 + "px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";


let windowHeight = Math.floor((window.innerHeight-resetButtonSize-resetButtonMargin)/18); // Even though we use 16x16 grid squares, we divide by 18 since that is how much space one square actually occupies
let rowWidth = Math.floor(document.documentElement.offsetWidth/18);

for (let i = 0; i < rowWidth; i++) {
    for (let j = 0; j < windowHeight; j++) {
        const grid = document.createElement("div");
        grid.id = "gridItem";
        container.appendChild(grid);

        grid.style.width = 16 + "px";
        grid.style.height = 16 + "px";
        grid.style.margin = 0 + "px";
        //grid.style.border = "1px solid #00ff88ff";
        grid.style.border = "1px solid #777777ff";
        
        let rgbDecrement = 25.5;
        let rgbValue = 255;

        grid.addEventListener("mouseover", (event) => {
            rgbValue = rgbValue - rgbDecrement;
            rgbRandRed = Math.floor(Math.random() * (rgbValue));
            rgbRandGreen = Math.floor(Math.random() * (rgbValue));
            rgbRandBlue = Math.floor(Math.random() * (rgbValue));

            grid.style.backgroundColor = `rgb(${rgbRandRed}, ${rgbRandGreen}, ${rgbRandBlue})`;
        })
    }
}

reset.addEventListener("click", () => {
    let numberOfChildren = document.querySelectorAll("#gridItem").length
    for (let i=0; i<(numberOfChildren); i++){
        const grid = document.querySelector("#gridItem");
        container.removeChild(grid);
    }
    let cells = prompt("Enter number of cells");
    if ((cells * 18) < window.innerHeight){
        body.style.alignItems = "center";
        container.style.width = (cells*18) + "px";
        container.style.height = (cells*18) + "px";
    } else if(cells > 150){
        window.alert("More than 150 cells would crash the page! Please try again.");
        return;
    }else{
        container.style.width = "";
        container.style.height = "";
    }
    
    for (let c = 0; c < (cells*cells); c++){
        const grid = document.createElement("div");
        grid.id = "gridItem";
        container.appendChild(grid);
        
        grid.style.width = 16 + "px";
        grid.style.height = 16 + "px";
        grid.style.margin = 0 + "px";
        //grid.style.border = "1px solid #00ff88ff";
        grid.style.border = "1px solid #777777ff";

        let rgbDecrement = 25.5;
        let rgbValue = 255;

        grid.addEventListener("mouseover", (event) => {
            rgbValue = rgbValue - rgbDecrement;
            rgbRandRed = Math.floor(Math.random() * (rgbValue));
            rgbRandGreen = Math.floor(Math.random() * (rgbValue));
            rgbRandBlue = Math.floor(Math.random() * (rgbValue));

            grid.style.backgroundColor = `rgb(${rgbRandRed}, ${rgbRandGreen}, ${rgbRandBlue})`;
        })
    }
})
