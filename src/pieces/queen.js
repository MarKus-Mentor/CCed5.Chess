import Piece from './piece';
import board from '../board';

class Queen extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'queen';
    this.display = `<i class="fas fa-chess-queen ${side}"></i>`; //fontawesome queen
  }

  findLegalMoves() {
    const possibleMoves = [];

    // ruchy w gore
    for(let i=1; i<board.length; i++) {
      // sprawdzamy czy jest takie pole
      if(this.x - i >= 0) {
        // jesli puste to mozna i sprawdzamy kolejne
        if (!board[this.x - i][this.y])
        possibleMoves.push(`${this.x - i},${this.y}`);
        // jesli zajete przez przeciwny kolor to mozna, ale dalej juz nie
        else if (this.side !== board[this.x - i][this.y].side)
        { possibleMoves.push(`${this.x - i},${this.y}`); break; }
        // jesli zajete przez ten sam kolor to nie mozna i dalej tez nie
        else break;
      }
    }

    // ruchy w skosne prawo && gora
    for(let i=1; i<board.length; i++) {
      if(this.x - i >= 0 && this.y + i <= board.length - 1) {
        if(!board[this.x - i][this.y + i])
        possibleMoves.push(`${this.x - i},${this.y + i}`);
        else if (this.side !== board[this.x - i][this.y + i].side)
        { possibleMoves.push(`${this.x - i},${this.y + i}`); break; }
        else break;
      }
    }

    // ruchy w prawo
    for(let i=1; i<board.length; i++) {
      if(this.y + i <= board.length - 1) {
        if(!board[this.x][this.y + i])
        possibleMoves.push(`${this.x},${this.y + i}`);
        else if (this.side !== board[this.x][this.y + i].side)
        { possibleMoves.push(`${this.x},${this.y + i}`); break; }
        else break;
      }
    }

    // ruchy w skosne prawo && dol
    for(let i=1; i<board.length; i++) {  
      if(this.x + i <= board.length - 1 && this.y + i <= board.length - 1) {
        if(!board[this.x + i][this.y + i])
        possibleMoves.push(`${this.x + i},${this.y + i}`);
        else if (this.side !== board[this.x + i][this.y + i].side)
        { possibleMoves.push(`${this.x + i},${this.y + i}`); break; }
        else break;
      }
    }

    // ruchy w dol
    for(let i=1; i<board.length; i++) {
      if(this.x + i <= board.length - 1) {
        if(!board[this.x + i][this.y])
        possibleMoves.push(`${this.x + i},${this.y}`);
        else if (this.side !== board[this.x + i][this.y].side)
        { possibleMoves.push(`${this.x + i},${this.y}`); break; }
        else break;
      }  
    }

    // ruchy w skosne lewo && dol
    for(let i=1; i<board.length; i++) {
      if(this.x + i <= board.length - 1 && this.y - i >= 0) {
        if(!board[this.x + i][this.y - i])
        possibleMoves.push(`${this.x + i},${this.y - i}`);
        else if (this.side !== board[this.x + i][this.y - i].side)
        { possibleMoves.push(`${this.x + i},${this.y - i}`); break; }
        else break;
      }
    }

    // ruchy w lewo
    for(let i=1; i<board.length; i++) {
      if(this.y - i >= 0) {
        if(!board[this.x][this.y - i])
        possibleMoves.push(`${this.x},${this.y - i}`);
        else if (this.side !== board[this.x][this.y - i].side)
        { possibleMoves.push(`${this.x},${this.y - i}`); break; }
        else break;
      }
    }

    // ruchy w skosne lewo && gora
    for(let i=1; i<board.length; i++) {
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

export default Queen;
