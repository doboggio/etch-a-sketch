const gridSize = 16;
var container = document.querySelector('.container')
function createGrid(size)
{
    console.log(size);
    for(var i = 0; i < size; i++)
    {
        var row = document.createElement("div");
        row.id = "row";
        for(var j = 0; j < size; j++)
        {
            var cell = document.createElement("div");
           
            cell.id = "cell";
            row.appendChild(cell);
            
        }
        container.appendChild(row);
    }
}
createGrid(gridSize);
var cells;
addCellListener();
function addCellListener()
{
    cells = document.querySelectorAll('#cell');
    cells.forEach((c) =>{
        c.addEventListener('mouseover', () =>{
            c.style = "background-color: black;";
        });
    });
}
function clearGrid()
{
    cells.forEach((c) =>{
        c.remove();
    });
    var newGridSize = prompt("Enter a new grid size!");
    if(newGridSize == NaN)
    {
        createGrid(16);
    }else
    {
        createGrid(parseInt(newGridSize));
    }
    addCellListener();
} 