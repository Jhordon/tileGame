/*
Add your code for Game here
 */

import Tile from "./tile.js"

export default class Game {
    constructor(size) {
        this.gameSize = size;
        this.cells = [];
        this.moves = [];
        this.wins = [];
        this.loses = [];
        this.isWin = 0;

        for (let i = 0; i < size; i++) {
            let placeholder = [];
            for (let j = 0; j < size; j++) {
                placeholder.push(new Tile(0))
            }
            this.cells.push(placeholder);
        }

        let row1 = this.findIndex(size);
        let column1 = this.findIndex(size);
        let inputValue = this.cells[row1][column1].findNumber();
        this.cells[row1][column1].setValue(inputValue);
        let assister = true;

        while (assister) {
            let row2 = this.findIndex(size);
            let column2 = this.findIndex(size);
            if (this.cells[row2][column2].getValue() == 0) {
                let inputValue1 = this.cells[row2][column2].findNumber();
                this.cells[row2][column2].setValue(inputValue1);
                assister = false;
            }
        }

        let placeholder = [];

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
            }
        }
        this.gameState = { board: placeholder, score: 0, won: false, over: false };
    }



    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    findIndex(size) {
        let row1 = this.getRandomInt(0, size - 1)
        return row1;
    }

    setupNewGame() {
        this.cells = [];
        this.isWin = 0;

        for (let i = 0; i < this.gameSize; i++) {
            let placeholder = [];
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(new Tile(0))
            }
            this.cells.push(placeholder);
        }

        let row1 = this.findIndex(this.gameSize);
        let column1 = this.findIndex(this.gameSize);
        let inputValue = this.cells[row1][column1].findNumber();
        this.cells[row1][column1].setValue(inputValue);
        let assister = true;

        while (assister) {
            let row2 = this.findIndex(this.gameSize);
            let column2 = this.findIndex(this.gameSize);
            if (this.cells[row2][column2].getValue() == 0) {
                let inputValue1 = this.cells[row2][column2].findNumber();
                this.cells[row2][column2].setValue(inputValue1);
                assister = false;
            }
        }

        let placeholder = [];

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
            }
        }
        this.gameState = { board: placeholder, score: 0, won: false, over: false };
    }

    loadGame(gameState) {
        this.gameState['board'] = gameState['board'];
        this.gameState['score'] = gameState['score'];
        this.gameState['won'] = gameState['won'];
        this.gameState['over'] = gameState['over'];
        this.isWin = Math.max(gameState['board']);

        if (this.isWin == 2048) {
            this.gameState['won'] = true;
        }

        this.cells = [];
        let placeholder = gameState['board'].length;
        placeholder = Math.sqrt(placeholder);
        this.gameSize = placeholder;
        let counter = 0;

        for (let i = 0; i < this.gameSize; i++) {
            let arrayContainer = [];
            for (let j = 0; j < this.gameSize; j++) {
                arrayContainer.push(new Tile(gameState['board'][counter]));
                counter++;
            }
            this.cells.push(arrayContainer);
        }
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.moveUp();
                break;
            case 'down':
                this.moveDown();
                break;
            case 'right':
                this.moveRight();
                break;
            case 'left':
                this.moveLeft();
                break;
        }
    }

    moveUp() {
        for (let j = 0; j < this.gameSize; j++) {
            for (let i = 1; i < this.gameSize; i++) {
                let placeholder = this.cells[i][j];
                let tileNum = placeholder.getValue();
                if (tileNum == 0) {
                    continue;
                }
                else {
                    for (let k = i - 1; k >= 0; k--) {
                        let placeholder1 = this.cells[k][j];
                        let tileNum1 = placeholder1.getValue();
                        if (tileNum1 == 0) {
                            placeholder1.setValue(placeholder.getValue());
                            placeholder.setValue(0);
                            placeholder = placeholder1;
                        }
                        else {
                            if (tileNum1 == placeholder.getValue()) {
                                if (!placeholder1.getFlag()) {
                                    this.isWin = placeholder1.getValue() + placeholder.getValue();
                                    if (this.isWin == 2048) {
                                        this.gameState['won'] = true;
                                        for (let i = 0; i < this.wins.length; i++) {
                                            let placeholder = this.wins[i];
                                            placeholder(this.getGameState());
                                        }
                                    }
                                    this.gameState['score'] += placeholder1.getValue() + placeholder.getValue();
                                    placeholder1.setValue(placeholder1.getValue() + placeholder.getValue());
                                    placeholder1.setFlag(true);
                                    placeholder.setValue(0);
                                    break;
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }

        let zeroCounter = 0;

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                if (this.cells[i][j].getValue() == 0) {
                    zeroCounter++;
                }
            }
        }

        if (zeroCounter != 0) {
            let assister = true;
            while (assister) {
                let row2 = this.findIndex(this.gameSize);
                let column2 = this.findIndex(this.gameSize);
                if (this.cells[row2][column2].getValue() == 0) {
                    let inputValue1 = this.cells[row2][column2].findNumber();
                    this.cells[row2][column2].setValue(inputValue1);
                    assister = false;
                }
            }
        }
        console.log("we moved up");
        let placeholder = [];
        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
                this.cells[i][j].setFlagToDefulat();
            }
        }

        this.gameState['board'] = placeholder;
        for (let i = 0; i < this.moves.length; i++) {
            let assisterer = this.moves[i];
            assisterer(this.getGameState());
        }

        this.gameState['over'] = this.checkOver();
        if (this.gameState['over'] == true) {
            for (let i = 0; i < this.loses.length; i++) {
                let placeholder = this.loses[i];
                placeholder(this.getGameState());
            }
        }
    }

    moveDown() {
        for (let j = 0; j < this.gameSize; j++) {
            for (let i = this.gameSize - 2; i >= 0; i--) {
                let placeholder = this.cells[i][j];
                let tileNum = placeholder.getValue();
                if (tileNum == 0) {
                    continue;
                }
                else {
                    for (let k = i + 1; k < this.gameSize; k++) {
                        let placeholder1 = this.cells[k][j];
                        let tileNum1 = placeholder1.getValue();
                        if (tileNum1 == 0) {
                            placeholder1.setValue(placeholder.getValue());
                            placeholder.setValue(0);
                            placeholder = placeholder1;
                        }
                        else {
                            if (tileNum1 == placeholder.getValue()) {
                                if (!placeholder1.getFlag()) {
                                    this.isWin = placeholder1.getValue() + placeholder.getValue();
                                    if (this.isWin == 2048) {
                                        this.gameState['won'] = true;
                                        for (let i = 0; i < this.wins.length; i++) {
                                            let placeholder = this.wins[i];
                                            placeholder(this.getGameState());
                                        }
                                    }
                                    this.gameState['score'] += placeholder1.getValue() + placeholder.getValue();
                                    placeholder1.setValue(placeholder1.getValue() + placeholder.getValue());
                                    placeholder1.setFlag(true);
                                    placeholder.setValue(0);
                                    break;
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }

        let zeroCounter = 0;

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                if (this.cells[i][j].getValue() == 0) {
                    zeroCounter++;
                }
            }
        }
        if (zeroCounter != 0) {
            let assister = true;
            while (assister) {
                let row2 = this.findIndex(this.gameSize);
                let column2 = this.findIndex(this.gameSize);
                if (this.cells[row2][column2].getValue() == 0) {
                    let inputValue1 = this.cells[row2][column2].findNumber();
                    this.cells[row2][column2].setValue(inputValue1);
                    assister = false;
                }
            }
        }

        console.log("we moved down");
        let placeholder = [];
        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
                this.cells[i][j].setFlagToDefulat();
            }
        }
        this.gameState['board'] = placeholder;
        for (let i = 0; i < this.moves.length; i++) {
            let assisterer = this.moves[i];
            assisterer(this.getGameState());
        }
        this.gameState['over'] = this.checkOver();
        if (this.gameState['over'] == true) {
            for (let i = 0; i < this.loses.length; i++) {
                let placeholder = this.loses[i];
                placeholder(this.getGameState());
            }
        }
    }

    moveLeft() {
        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 1; j < this.gameSize; j++) {
                let placeholder = this.cells[i][j];
                let tileNum = placeholder.getValue();
                if (tileNum == 0) {
                    continue;
                }
                else {
                    for (let k = j - 1; k >= 0; k--) {
                        let placeholder1 = this.cells[i][k];
                        let tileNum1 = placeholder1.getValue();
                        if (tileNum1 == 0) {
                            placeholder1.setValue(placeholder.getValue());
                            placeholder.setValue(0);
                            placeholder = placeholder1;
                        }
                        else {
                            if (tileNum1 == placeholder.getValue()) {
                                if (!placeholder1.getFlag()) {
                                    this.isWin = placeholder1.getValue() + placeholder.getValue();
                                    if (this.isWin == 2048) {
                                        this.gameState['won'] = true;
                                        for (let i = 0; i < this.wins.length; i++) {
                                            let placeholder = this.wins[i];
                                            placeholder(this.getGameState());
                                        }
                                    }
                                    this.gameState['score'] += placeholder1.getValue() + placeholder.getValue();
                                    placeholder1.setValue(placeholder1.getValue() + placeholder.getValue());
                                    placeholder1.setFlag(true);
                                    placeholder.setValue(0);
                                    break;
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }

        let zeroCounter = 0;

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                if (this.cells[i][j].getValue() == 0) {
                    zeroCounter++;
                }
            }
        }

        if (zeroCounter != 0) {
            let assister = true;
            while (assister) {
                let row2 = this.findIndex(this.gameSize);
                let column2 = this.findIndex(this.gameSize);
                if (this.cells[row2][column2].getValue() == 0) {
                    let inputValue1 = this.cells[row2][column2].findNumber();
                    this.cells[row2][column2].setValue(inputValue1);
                    assister = false;
                }
            }
        }

        console.log("we moved left");
        let placeholder = [];
        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
                this.cells[i][j].setFlagToDefulat();
            }
        }

        this.gameState['board'] = placeholder;

        for (let i = 0; i < this.moves.length; i++) {
            let assisterer = this.moves[i];
            assisterer(this.getGameState());
        }
        this.gameState['over'] = this.checkOver();
        if (this.gameState['over'] == true) {
            for (let i = 0; i < this.loses.length; i++) {
                let placeholder = this.loses[i];
                placeholder(this.getGameState());
            }
        }
    }

    moveRight() {
        for (let i = 0; i < this.gameSize; i++) {
            for (let j = this.gameSize - 2; j >= 0; j--) {
                let placeholder = this.cells[i][j];
                let tileNum = placeholder.getValue();
                if (tileNum == 0) {
                    continue;
                }
                else {
                    for (let k = j + 1; k < this.gameSize; k++) {
                        let placeholder1 = this.cells[i][k];
                        let tileNum1 = placeholder1.getValue();
                        if (tileNum1 == 0) {
                            placeholder1.setValue(placeholder.getValue());
                            placeholder.setValue(0);
                            placeholder = placeholder1;
                        }
                        else {
                            if (tileNum1 == placeholder.getValue()) {
                                if (!placeholder1.getFlag()) {
                                    this.isWin = placeholder1.getValue() + placeholder.getValue();
                                    if (this.isWin == 2048) {
                                        this.gameState['won'] = true;
                                        for (let i = 0; i < this.wins.length; i++) {
                                            let placeholder = this.wins[i];
                                            placeholder(this.getGameState());
                                        }
                                    }
                                    this.gameState['score'] += placeholder1.getValue() + placeholder.getValue();
                                    placeholder1.setValue(placeholder1.getValue() + placeholder.getValue());
                                    placeholder1.setFlag(true);
                                    placeholder.setValue(0);
                                    break;
                                }
                                else {
                                    break;
                                }
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }

        let zeroCounter = 0;

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                if (this.cells[i][j].getValue() == 0) {
                    zeroCounter++;
                }
            }
        }

        if (zeroCounter != 0) {
            let assister = true;
            while (assister) {
                let row2 = this.findIndex(this.gameSize);
                let column2 = this.findIndex(this.gameSize);
                if (this.cells[row2][column2].getValue() == 0) {
                    let inputValue1 = this.cells[row2][column2].findNumber();
                    this.cells[row2][column2].setValue(inputValue1);
                    assister = false;
                }
            }
        }

        console.log("we moved right");

        let placeholder = [];

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
                this.cells[i][j].setFlagToDefulat();
            }
        }

        this.gameState['board'] = placeholder;

        for (let i = 0; i < this.moves.length; i++) {
            let assisterer = this.moves[i];
            assisterer(this.getGameState());
        }

        this.gameState['over'] = this.checkOver();

        if (this.gameState['over'] == true) {
            for (let i = 0; i < this.loses.length; i++) {
                let placeholder = this.loses[i];
                placeholder(this.getGameState());
            }
        }
    }

    onMove(callback) {
        this.moves.push(callback);
    }

    onWin(callback) {
        this.wins.push(callback);
    }

    onLose(callback) {
        this.loses.push(callback);
    }

    getGameState() {
        return this.gameState;
    }

    checkOver() {
        let checkWhetherGameOver = true;

        for (let i = 0; i < this.gameSize; i++) {
            for (let j = 0; j < this.gameSize; j++) {

                let placeholder = this.cells[i][j];

                if (placeholder.getValue() == 0) {
                    return false;
                }

                let up = new Tile(-1);
                let down = new Tile(-1);
                let right = new Tile(-1);
                let left = new Tile(-1);

                if (i != 0) {
                    up = this.cells[i - 1][j];
                }

                if (i != this.gameSize - 1) {
                    down = this.cells[i + 1][j];
                }

                if (j != 0) {
                    left = this.cells[i][j - 1];
                }

                if (j != this.gameSize - 1) {
                    right = this.cells[i][j + 1];
                }

                if (placeholder.getValue() === up.getValue() || placeholder.getValue() === down.getValue() || placeholder.getValue() === left.getValue() || placeholder.getValue() === right.getValue()) {
                    checkWhetherGameOver = false;
                    return checkWhetherGameOver;
                }
            }
        }
        return checkWhetherGameOver;
    }

    toString() {
        for (let i = 0; i < this.gameSize; i++) {
            let placeholder = []
            for (let j = 0; j < this.gameSize; j++) {
                placeholder.push(this.cells[i][j].getValue());
            }
            console.log(placeholder);
        }
    }
}