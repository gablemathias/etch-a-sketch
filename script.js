//CREATE A WEBPAGE WITH 16x16 GRID OF SQUARE DIVS

//PUT THEM INSIDE A CONTAINER DIV
//I WILL USE CSS GRID
//CREATE A 16x16 GRID USING JS

//ITS POSSIBLE TO ADJUST THE SIZE OF THE GRID

const grid = document.querySelector('.grid-container');
const DEFAULT_SIZE = 16;


function buildGrid(size){
  grid.style.GridTemplateColumns = `repeat(auto-fit, 1fr)`;
  grid.style.GridTemplateRows = `repeat(auto-fit, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-box')
    grid.appendChild(gridElement);
  }
}

buildGrid(DEFAULT_SIZE);
