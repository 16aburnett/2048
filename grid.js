// Grid class for 2048 remake 
// Created By Anthony Burnett
// December 7 2018

function Grid(rows, cols, cWidth) {

    this.rows = rows;
    this.cols = cols;
    this.cells = [];
    this.cWidth = cWidth;

    for (var i = 0; i < rows; i++) {

        this.cells[i] = [];
        for (var j = 0; j < cols; j++) {

            this.cells[i][j] = new Cell(i, j, cWidth);


        }

    }


    this.show = function () {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {

                this.cells[i][j].show();

            }
        }

    }

    this.print = function () {

        var gridStr = "";

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {

                gridStr += this.cells[i][j].data + " ";

            }
            gridStr += "\n";
        }

        console.log(gridStr);
    }


    // adds a random number to the board at an empty space
    this.addRandom = function () {

        var options = [];

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {

                if (this.cells[i][j].data == 0) {

                    options.push(this.cells[i][j]);

                }

            }
        }

        if (options.length > 0) {
            // 90% chance of random num being a 2
            // 10% chance of random num being a 4
            var randNum = random(1) > 0.1 ? 2 : 4;
            options[floor(random(options.length))].data = randNum;
        }


    }

    // SHIFTING LOGIC 
    //==============================================================


    // generic method for shifting elem in an array
    this.shiftArr = function(arr){

        var shifted = false;

        for (var i = arr.length - 1; i > 0; i--) {

            // if the current is not zero
            if (arr[i - 1].data != 0) {

                // while next is zero 
                var k = i;
                while (k < arr.length && arr[k].data == 0) {

                    // swap 
                    arr[k].data = arr[k - 1].data;
                    arr[k - 1].data = 0;
                    k++;

                    shifted = true;

                }

            }

        }

        return shifted;

    }


    // generic method for fusing similar neighbor nums in an array
    this.fuse = function(arr){
        
        var fused = false;

        for (var i = arr.length - 1; i > 0; i--) {

            // if current and next equal
            if (arr[i - 1].data == arr[i].data && arr[i - 1].data != 0) {
                // fuse
                arr[i].data = arr[i].data + arr[i - 1].data;
                arr[i - 1].data = 0;

                fused = true;

            }

        }

        return fused;

    }

    // returns whether a change happened to know if a random num needs to be added
    this.shiftDown = function () {

        var changed = false;

        // shift each column down 
        for (var j = 0; j < this.cols; j++) {

            var column = [];
            for (var i = 0; i < this.rows; i++) {

                column.push(this.cells[i][j]);

            }

            // now we have the column, shift to the right 
            // shift 
            var hasShifted = this.shiftArr(column);

            // fuse 
            var hasFused = this.fuse(column);

            // shift 
            this.shiftArr(column);

            // ensure changed is true if there was a change
            if (hasShifted || hasFused) changed = true;


        }
        
        return changed;

    }

    this.shiftUp = function () {

        var changed = false;

        // shift each column up 
        for (var j = 0; j < this.cols; j++) {

            var column = [];
            // add elem backwards
            for (var i = this.rows - 1; i >= 0; i--) {

                column.push(this.cells[i][j]);

            }

            // now we have the column, shift to the right 
            // shift 
            var hasShifted = this.shiftArr(column);

            // fuse 
            var hasFused = this.fuse(column);

            // shift
            this.shiftArr(column);

            // ensure changed is true if there was a change
            if (hasShifted || hasFused) changed = true;


        }

        return changed;

    }

    this.shiftRight = function () {

        var changed = false;

        // shift each row to the right 
        for (var i = 0; i < this.rows; i++) {

            var row = this.cells[i];
            
            // shift 
            var hasShifted = this.shiftArr(row);

            // fuse 
            var hasFused = this.fuse(row);

            // shift
            this.shiftArr(row);

            // ensure changed is true if there was a change
            if (hasShifted || hasFused) changed = true;

        }

        return changed;

    }


    this.shiftLeft = function () {

        var changed = false;

        // shift each row to the left
        for (var i = 0; i < this.rows; i++) {

            var row = [];
            for (var j = this.cols - 1; j >= 0; j--){

                row.push(this.cells[i][j]);

            }
            
            // shift 
            var hasShifted = this.shiftArr(row);

            // fuse 
            var hasFused = this.fuse(row);

            // shift
            this.shiftArr(row);

            // ensure changed is true if there was a change
            if (hasShifted || hasFused) changed = true;

        }

        return changed;

    }

    // Game Ending logic 
    // ===========================================================

    this.isGameOver = function(){

        // no moves can be made 
        return false;

    }

    this.isGameWon = function(){

        // 2048 tile is present
        for(var i = 0; i < this.rows; i++){
            for(var j = 0; j < this.cols; j++){

                if(this.cells[i][j].data >= 2048){

                    return true;

                }

            }
        }

    }

}
