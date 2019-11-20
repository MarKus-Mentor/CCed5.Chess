import Piece from './piece';
import board from '../board';
class Bishop extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'bishop';
    this.display = `<i class="fas fa-chess-bishop ${side}"></i>`; //fontawesome bishop
  }
  findLegalMoves() {
    const possibleMoves = [];

    // for(let i=1; i<8; i++) {

      // pozycja wyjściowa

    // this.x - 1 > 0 && possibleMoves.push(`${this.x - 1},${this.y}`);
    // this.x - 2 > 0 && possibleMoves.push(`${this.x - 2},${this.y}`);
    
    //  podświetlenie możliwych pozycji

    // this.x - i >= 0 && this.y + i <= 7 && possibleMoves.push(`${this.x - i},${this.y + i}`);
    // this.x + i <= 7 && this.y + i <= 7 && possibleMoves.push(`${this.x + i},${this.y + i}`);
    // this.x + i <= 7 && this.y - i >= 0 && possibleMoves.push(`${this.x + i},${this.y - i}`);
    // this.x - i >= 0 && this.y - i >= 0 && possibleMoves.push(`${this.x - i},${this.y - i}`);
    
    // -->&up
    for(let i=1; i<8; i++) {
      if(this.x - i >= 0 && this.y + i <= 7) {
        if(!board[this.x - i][this.y + i])
        possibleMoves.push(`${this.x - i},${this.y + i}`);
        else if (this.side !== board[this.x - i][this.y + i].side)
        { possibleMoves.push(`${this.x - i},${this.y + i}`); break; }
        else break;
      }
    }  
    //-->&down
    for(let i=1; i<8; i++) {  
      if(this.x + i <= 7 && this.y + i <= 7) {
        if(!board[this.x + i][this.y + i])
        possibleMoves.push(`${this.x + i},${this.y + i}`);
        else if (this.side !== board[this.x + i][this.y + i].side)
        { possibleMoves.push(`${this.x + i},${this.y + i}`); break; }
        else break;
      }
    }
    //<--&down
    for(let i=1; i<8; i++) {
      if(this.x + i <= 7 && this.y - i >= 0) {
        if(!board[this.x + i][this.y - i])
        possibleMoves.push(`${this.x + i},${this.y - i}`);
        else if (this.side !== board[this.x + i][this.y - i].side)
        { possibleMoves.push(`${this.x + i},${this.y - i}`); break; }
        else break;
      }
    }
    //<--&up
    for(let i=1; i<8; i++) {
      if(this.x - i >= 0 && this.y - i >= 0) {
        if(!board[this.x - i][this.y - i])
        possibleMoves.push(`${this.x - i},${this.y - i}`);
        else if (this.side !== board[this.x - i][this.y - i].side)
        { possibleMoves.push(`${this.x - i},${this.y - i}`); break; }
        else break;
      }
    }
  

    return possibleMoves;
}
}

export default Bishop;
