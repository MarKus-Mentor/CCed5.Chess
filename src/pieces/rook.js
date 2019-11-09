import Piece from './piece';
import board from '../board';

class Rook extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'rook';
    this.display = `<i class="fas fa-chess-rook ${side}"></i>`; //fontawesome rook
  }
  findLegalMoves() {
    const possibleMoves = [];
    
    for (let i=1;i<8;i++) {
      if (this.x+i<8) {
        if (!board[this.x+i][this.y]) {possibleMoves.push(`${this.x+i},${this.y}`);}
         else if (board[this.x+i][this.y].side !== this.side) {possibleMoves.push(`${this.x+i},${this.y}`); break;}
        else break;
        }
      }

    for (let i=1;i<8;i++) {
      if (this.x-i>=0) {
        if (!board[this.x-i][this.y]) {possibleMoves.push(`${this.x-i},${this.y}`);}
          else if (board[this.x-i][this.y].side !== this.side) {possibleMoves.push(`${this.x-i},${this.y}`); break;}
          else break;         
          }
        }

        for (let i=1;i<8;i++) {
          if (this.y+i<8) {
            if (!board[this.x][this.y+i]) {possibleMoves.push(`${this.x},${this.y+i}`);}
              else if (board[this.x][this.y+i].side !== this.side) {possibleMoves.push(`${this.x},${this.y+i}`); break;}
              else break;
            }
          }

          for (let i=1;i<8;i++) {
            if (this.y-i>=0) {
              if (!board[this.x][this.y-i]) {possibleMoves.push(`${this.x},${this.y-i}`);}
                else if (board[this.x][this.y-i].side !== this.side) {possibleMoves.push(`${this.x},${this.y-i}`); break;}
                else break;
              }
            }


    return possibleMoves;
  }
}

export default Rook;
