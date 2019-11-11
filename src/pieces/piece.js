import board from "../board";

let movesArr = JSON.parse(localStorage.getItem("moves")) || [];
let logNumber = (movesArr.length/2).toFixed() || 0;

class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side; //'black' or 'white'
  }

  move(id) {
    const newX = Number(id[0]);
    const newY = Number(id[2]);

    //clearing previous place
    const oldXY = {...board[this.x][this.y]};
    board[this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = "";

    //setting new
    this.x = newX;
    this.y = newY;
    board[this.x][this.y] = this;
    const newXY = {...board[this.x][this.y]};
    document.getElementById(id).innerHTML = this.display;

    if (this.name === "pawn") {
      if (
        (this.side === "white" && this.x === 0) ||
        (this.side === "black" && this.x === 7)
      ) {
        this.promote();
      }
    }

    // add logs of moves to HTML and save in local storage
    let nameSymbol;
    switch (this.name) {
      case "knight":
        nameSymbol = "N";
        break;
      case "bishop":
        nameSymbol = "B";
        break;
      case "king":
        nameSymbol = "K";
        break;
      case "rook":
        nameSymbol = "T";
        break;
      case "queen":
        nameSymbol = "Q";
        break;
      default:
        nameSymbol = "";
        break;
    }
    const yArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let newLog = "";

    if (this.side === "white") {
        newLog = `${++logNumber}. ${nameSymbol} ${yArr[oldXY.y]}${oldXY.x}-${yArr[newXY.y]}${newXY.x} --- `;
        movesArr.push(newLog);
        localStorage.setItem("moves", JSON.stringify(movesArr));
        localStorage.setItem("isNextMoveBlack", JSON.stringify(true))
      } else {
        newLog = `${nameSymbol} ${yArr[oldXY.y]}${oldXY.x}-${yArr[newXY.y]}${newXY.x}`;
        movesArr.push(newLog);
        localStorage.setItem("moves", JSON.stringify(movesArr));
        localStorage.setItem("isNextMoveBlack", JSON.stringify(false))
    }

    const moves = document.getElementById('moves');
    const breakNode = document.createElement("br");
    const logNode = document.createElement("span");
    const logText = document.createTextNode(newLog);
    logNode.appendChild(logText);
    moves.appendChild(logNode);
    if (!newLog.includes('---')) {
      moves.appendChild(breakNode)
    }


    // add figure position after move to local storage
    const boardStorage = JSON.parse(localStorage.getItem("board"));
    let piecePosition = boardStorage[oldXY.x][oldXY.y];
    piecePosition.x = newXY.x;
    piecePosition.y = newXY.y;
    boardStorage[newXY.x][newXY.y] = piecePosition;
    boardStorage[oldXY.x][oldXY.y] = null;
    localStorage.setItem("board", JSON.stringify(boardStorage));
  }

  findLegalMoves() {}
}

export default Piece;
