// Cell class for 2048 remake 
// Created By Anthony Burnett
// December 7 2018

var numStyle = [];

numStyle['0'] = {
    size: 64,
    color: '#554433'
};

numStyle['2'] = {
    size: 64,
    color: '#bbaa99'
};
numStyle['4'] = {
    size: 64,
    color: '#ccbb99'
};

numStyle['8'] = {
    size: 64,
    color: '#feae00'
};

numStyle['16'] = {
    size: 64,
    color: '#f66f00'
};

numStyle['32'] = {
    size: 64,
    color: '#ff3300'
};

numStyle['64'] = {
    size: 64,
    color: '#ff0000'
};

numStyle['128'] = {
    size: 50,
    color: '#ff8800'
};

numStyle['256'] = {
    size: 50,
    color: '#ffcc00'
};

numStyle['512'] = {
    size: 50,
    color: '#ffff00'
};

numStyle['1024'] = {
    size: 40,
    color: '#00ffcc'
};

numStyle['2048'] = {
    size: 40,
    color: '#ff00ff'
};

function Cell(i, j, w) {

    this.i = i;
    this.j = j;
    this.w = w;
    this.data = 0;


    this.show = function () {

        // default textsize and color
        var textsize = 32;
        var color = '#bbaa99';

        if(numStyle[(this.data + "")]){
            var format = numStyle[(this.data + "")];

            textsize = format.size;
            color = format.color;

        }

        fill(color);
        rect(j * w, i * w, w, w);

        if (this.data != 0) {
            fill(0);
            textSize(textsize);
            textAlign(CENTER, CENTER);
            text(this.data, this.j * w + w / 2, this.i * w + w / 2);
        }

    }

}