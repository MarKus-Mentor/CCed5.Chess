import Piece from './piece';

class Knight extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'knight';
    this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
  }
  findLegalMovesKnight() {
    const possibleMoves = [];
    //First possibility: two grids on Y, one grid on X
      this.x - 2 >= 0 && this.y - 1 >= 0 && possibleMoves.push(`${this.x - 2},${this.y-1}`);
      this.x - 2 >= 0 && this.y + 1 < 8 && possibleMoves.push(`${this.x - 2},${this.y+1}`);
      this.x + 2 < 8 && this.y - 1 >= 0 && possibleMoves.push(`${this.x + 2},${this.y-1}`);
      this.x + 2 < 8 && this.y + 1 < 8 && possibleMoves.push(`${this.x + 2},${this.y+1}`);
    //Second possibility: one grid on Y, two grids on X   
      this.x - 1 >= 0 && this.y - 2 >= 0 && possibleMoves.push(`${this.x - 1},${this.y-2}`);
      this.x - 1 >= 0 && this.y + 2 < 8 && possibleMoves.push(`${this.x - 1},${this.y+2}`);
      this.x + 1 < 8 && this.y - 2 >= 0 && possibleMoves.push(`${this.x + 1},${this.y-2}`);
      this.x + 1 < 8 && this.y + 2 < 8 && possibleMoves.push(`${this.x + 1},${this.y+2}`);

    return possibleMoves;
  }
}

export default Knight;
