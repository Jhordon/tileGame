import Game from "./engine/game.js"

let firstGame = new Game(4);
let highScore = 0;

export const gameSetup = function (gameState) {
    return `
    <section class="section" style="background-color: #FBF9F3">
        <div class="container has-text-centered">
            <h1 class="title" style="font-size: 80px">
                <strong> Play 2048! </strong>
            </h1>
                <p style="font-size: 25px">
                    Press the arrow keys to move the numbers.
                </p>
                <p style="font-size: 25px">
                    Combine like numbers to help reach the 2048 tile.
                </p>
                <p style="font-size: 25px">
                    Get the 2048 tile to win, but avoid filling up the board otherwise you will lose.
                </p>
        </div>
    </section>

    <nav class="level" style="background-color: #FBF9F3">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading" style="font-size: 40px">
                    Current Score
                </p>
                <p class="score title">
                    ${gameState['score']}
                </p> 
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p font-size: 50px" id="insert2"></p> 
                <p font-size: 50px" id="insert"></p> 
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading" style="font-size: 40px">
                    Highest Score
                </p>
                <p class="highScore title"> 
                    ${highScore}
                </p>
            </div>
        </div>
    </nav>

     <div class="field">
        <div class="control has-text-centered">
            <button class="button is-dark start">
                New Game
            </button> 
        </div> 
    </div>

    <section class ="section" style="background-color: #323846; box-sizing: border-box;">
        <div id ="grid" class="container has-text-centered">
            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical is-3" >
                    <article class="tile is-child box is-primary notification" style="background-color: #78DBF3;">
                        <p class="tile0 title has-text-centered">
                            ${gameState['board'][0]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color: #78DBF3;">
                        <p class="tile1 title has-text-centered">
                            ${gameState['board'][1]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color: #78DBF3;">
                        <p class="tile2 title has-text-centered">
                            ${gameState['board'][2]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color: #78DBF3;">
                        <p class="tile3 title has-text-centered">
                            ${gameState['board'][3]}
                        </p>
                    </article>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color: #78DBF3;">
                        <p class="tile4 title has-text-centered">
                            ${gameState['board'][4]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile5 title has-text-centered">
                            ${gameState['board'][5]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile6 title has-text-centered">
                            ${gameState['board'][6]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile7 title has-text-centered">
                            ${gameState['board'][7]}
                        </p>
                    </article>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile8 title has-text-centered">
                            ${gameState['board'][8]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile9 title has-text-centered">
                            ${gameState['board'][9]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                         <p class="tile10 title has-text-centered">
                            ${gameState['board'][10]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile11 title has-text-centered">
                            ${gameState['board'][11]}
                        </p>
                    </article>
                </div>
            </div>
            <div class="tile is-ancestor">
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile12 title has-text-centered">
                            ${gameState['board'][12]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile13 title has-text-centered">
                            ${gameState['board'][13]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile14 title has-text-centered">
                            ${gameState['board'][14]}
                        </p>
                    </article>
                </div>
                <div class="tile is-parent is-vertical is-3">
                    <article class="tile is-child box is-primary notification" style="background-color:#78DBF3;">
                        <p class="tile15 title has-text-centered">
                            ${gameState['board'][15]}
                        </p>
                    </article>
                </div>
            </div>
        </div> 
    </section>
     `;
};

export const newCells = function (gameState) {
    var grid = $("#grid");
    var board = gameState['board'];
    for (let i = 0; i < 16; i++) {
        $(".tile" + i).replaceWith(`<p class="tile${i} title has-text centered"> ${gameState['board'][i]} </p>`);
    }
};

export const newGame = function (game) {
    game.setupNewGame(4);
    newCells(game.getGameState());
};

export const buttonClick = function (event) {
    newGame(firstGame);
    document.getElementById("insert").innerHTML = "";
    document.getElementById("insert2").innerHTML = "";
};

export const loadDOM = function (gameState) {
    const $root = $("#root");
    $root.append(gameSetup(gameState));
    $("#root").on("click", ".start", buttonClick);
};

$(function () {
    loadDOM(firstGame.getGameState());
});

$(document).keydown(function (e) {
    e = e || window.event;

    if (firstGame.getGameState().won == true) {
        document.getElementById("insert2").innerHTML = "You Win :)";
    }

    if (firstGame.getGameState().over == true) {
        document.getElementById("insert").innerHTML = "You lose :(";
    }

    if (e.keyCode == '38') {
        firstGame.move('up');
    } else if (e.keyCode == '40') {
        firstGame.move('down');
    } else if (e.keyCode == '37') {
        firstGame.move('left');
    } else if (e.keyCode == '39') {
        firstGame.move('right');
    }

    var grid = $("#grid");
    var board = firstGame.getGameState()['board'];
    var score = firstGame.getGameState()['score'];

    if (highScore <= score) {
        highScore = score;
    }

    $(".score").replaceWith(`<p class ="score title"> ${score} </p>`);
    $(".highScore").replaceWith(`<p class ="highScore title"> ${highScore} </p>`);
    for (let i = 0; i < 16; i++) {
        $(".tile" + i).replaceWith(`<p class="tile${i} title has-text-centered"> ${board[i]} </p>`);
    }
});