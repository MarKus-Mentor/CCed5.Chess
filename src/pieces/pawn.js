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
  promote() {}
  enPassant() {}
}
export default Pawn;
