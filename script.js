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
    this.bindEvents();
    this.color = "";
}
board.prototype.bindEvents = function(){
    this.element.addEventListener('click', (e)=>{
        //console.log(e.target.style.backgroundColor);
        //let current = "";
        //console.log(e.target.dataset["cell"][0])
        // console.log(this.row);
        // console.log(e.target.dataset["cell"][0]);
        if(e.target.dataset["cell"][0]==this.row){
            console.log("in color");
            this.color = e.target.style.backgroundColor;
            console.log(this.color);
        }else{
            if(this.color != ""){
                e.target.style.backgroundColor = this.color;
                console.log(e.target.style.backgroundColor);
            }  
        }
    })
}
board.prototype.init = function(){
    console.log(this.row);
    var div = document.createDocumentFragment("div");
    for(let i=0; i<=this.row; i++){
        var header = document.createElement("div");
        header.classList.add("header");
        for(let j=0; j<this.column; j++){
            if(i==this.row){
                var colorBox = document.createElement("div");
                var color = getRandomColor();
                colorBox.classList.add("childBox");
                colorBox.dataset["cell"]= `${i}:${j}`;
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

new board("#board", 8,8);