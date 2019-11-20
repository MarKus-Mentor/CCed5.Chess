import Piece from './piece';
import board from '../board';

class King extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'king';
    this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king
  }
  findLegalMoves() {
    const possibleMoves = [];
    
    const upBound = this.x > 0;
    const rightBound = this.y < board.length - 1;
    const leftBound = this.y > 0;
    const downBound = this.x < board.length - 1;

    // Up
    if (upBound) {
      leftBound && possibleMoves.push(`${this.x - 1},${this.y - 1}`);
      possibleMoves.push(`${this.x - 1},${this.y}`);
      rightBound && possibleMoves.push(`${this.x - 1},${this.y + 1}`);
    }

    // Middle
    leftBound && possibleMoves.push(`${this.x},${this.y - 1}`);
    rightBound && possibleMoves.push(`${this.x},${this.y + 1}`);

    // Down
    if (downBound) {
      leftBound && possibleMoves.push(`${this.x + 1},${this.y - 1}`);
      possibleMoves.push(`${this.x + 1},${this.y}`);
      rightBound && possibleMoves.push(`${this.x + 1},${this.y + 1}`);
    }

    return possibleMoves.filter(p => {
        const [x, y] = p.split(',');

        if (!board[x][y]) return true;
        
        const isOpponent = board[x][y].side !== this.side;
        const isKing = board[x][y] instanceof King;
        return isOpponent && !isKing;
      });
  }
}

export default King;
