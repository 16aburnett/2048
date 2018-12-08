// 2048 Recreation 
// Created By Anthony Burnett
// December 7th 2018

var grid;
function setup() {

    createCanvas(401, 401);
    background(0);

    // create 2048 board 
    grid = new Grid(4, 4, width / 4 - 1 / 4);

    // add two random num off the start 
    grid.addRandom();
    grid.addRandom();

    // show the board
    grid.show();
    grid.print();
    noLoop();

}

function draw() {

    

}

function keyPressed() {

    switch (keyCode) {

        case UP_ARROW:
        console.log("shifting up");
            if(grid.shiftUp())
                grid.addRandom();
            break;
        case DOWN_ARROW:
            console.log("shifting down");
            if(grid.shiftDown())
                grid.addRandom();
            break;
        case LEFT_ARROW:
            if(grid.shiftLeft())
                grid.addRandom();
            break;
        case RIGHT_ARROW:
            if(grid.shiftRight())
                grid.addRandom();
            break;

    }

    grid.show();
    grid.print();
    if(isGameOver()){
        console.log("gameOver");
    }

    if(isGameWon()){
        console.log("gameWon!!");
    }


}

function isGameOver(){

    return grid.isGameOver();

}


function isGameWon(){

    return grid.isGameWon();

}