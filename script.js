const gridSize = 16;
var container = document.querySelector('.container')
for(var i = 0; i < gridSize; i++)
{
    var row = document.createElement("div");
    row.id = "row";
    for(var j = 0; j < gridSize; j++)
    {
        var cell = document.createElement("div");
        cell.id = "cell";
        row.appendChild(cell);
    }
    container.appendChild(row);
}