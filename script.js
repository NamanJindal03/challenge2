function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let board = function(element, row, column){
    this.element = document.querySelector(element);
    this.row = row;
    this.column = column;
    this.init();
}
board.prototype.init = function(){
    var div = document.createDocumentFragment("div");
    for(let i=0; i<=this.row; i++){
        var header = document.createElement("div");
        header.classList.add("header");
        for(let j=0; j<this.column; j++){
            if(i===this.row){
                var colorBox = document.createElement("div");
                var color = getRandomColor();
                colorBox.classList.add("childBox");
                colorBox.style.backgroundColor = color;
                header.appendChild(colorBox);
            }else{
                var childBox = document.createElement("div");
                childBox.classList.add("childBox");
                childBox.dataset["cell"]= `${i}:${j}`;
                header.appendChild(childBox);
            }
        }
        div.appendChild(header);
    }
    this.element.appendChild(div);

}

new board("#board", 5, 5);