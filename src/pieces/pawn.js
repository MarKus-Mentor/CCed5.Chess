import Piece from "./piece";
import board from "../board";

class Pawn extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = "pawn";
    this.display = `<i class="fas fa-chess-pawn ${side}"></i>`;
    // this.display = `<img src= "../../img/pawn_3d_${side}.png" width=60 alt="pawn_${side}"/>`;
  }
  findLegalMoves() {
    const possibleMoves = [];

    if (this.side === "white") {
      if (this.x !== 0) {
        if (!board[this.x - 1][this.y]) {
          this.x - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
        }
        if (this.x === 6 && !board[this.x - 2][this.y]) {
          this.x - 2 >= 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
        }
        if (
          board[this.x - 1][this.y - 1] &&
          board[this.x - 1][this.y - 1].side === "black"
        ) {
          this.x - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y - 1}`);
        }
        if (
          board[this.x - 1][this.y + 1] &&
          board[this.x - 1][this.y + 1].side === "black"
        ) {
          this.x - 1 >= 0 && possibleMoves.push(`${this.x - 1},${this.y + 1}`);
        }
      }
      if (this.x === 0) {
        alert("wybierz bialego pionka");
      }
    }

    if (this.side === "black") {
      if (this.x !== 7) {
        if (!board[this.x + 1][this.y]) {
          this.x + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y}`);
        }
        if (this.x === 1 && !board[this.x + 2][this.y]) {
          this.x + 2 <= 7 && possibleMoves.push(`${this.x + 2},${this.y}`);
        }
        if (
          board[this.x + 1][this.y - 1] &&
          board[this.x + 1][this.y - 1].side === "white"
        ) {
          this.x + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y - 1}`);
        }
        if (
          board[this.x + 1][this.y + 1] &&
          board[this.x + 1][this.y + 1].side === "white"
        ) {
          this.x + 1 <= 7 && possibleMoves.push(`${this.x + 1},${this.y + 1}`);
        }
      }
      if (this.x === 7) {
        alert("wybierz czarnego pionka");
      }
    }

    return possibleMoves;
  }
  promote() {
    // let prom;
    let prom;
    let promFigures = ["queen", "bishop", "knight", "rook"];
    const divAccess = document.getElementById("promotionDiv");
    divAccess.classList.remove("hidden");
    prom = document.createElement("div");
    prom.className = "promClass";
    divAccess.appendChild(prom);
    prom.innerHTML = "Choose Wisely!";

    let queen = document.createElement("div");
    queen.className = `fas fa-chess-${promFigures[0]} square `;
    divAccess.appendChild(queen);

    let bishop = document.createElement("div");
    bishop.className = `fas fa-chess-${promFigures[1]} square `;
    divAccess.appendChild(bishop);

    let knight = document.createElement("div");
    knight.className = `fas fa-chess-${promFigures[2]}  square`;
    divAccess.appendChild(knight);

    let rook = document.createElement("div");
    rook.className = `fas fa-chess-${promFigures[3]} square `;
    divAccess.appendChild(rook);
  }
  enPassant() {}
}
export default Pawn;
