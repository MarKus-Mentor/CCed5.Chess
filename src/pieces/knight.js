import Piece from './piece';
import board from '../board'

class Knight extends Piece {
  constructor(x, y, side) {
    super(x, y, side);
    this.name = 'knight';
    this.display = `<i class="fas fa-chess-knight ${side}"></i>`; //fontawesome knight
  }
  findLegalMoves() {
    const possibleMoves = [];
    
    let move1X = this.x -2; let move1Y = this.y -1;
    let move2X = this.x -2; let move2Y = this.y +1;
    let move3X = this.x +2; let move3Y = this.y -1;
    let move4X = this.x +2; let move4Y = this.y +1;
    let move5X = this.x -1; let move5Y = this.y -2;
    let move6X = this.x -1; let move6Y = this.y +2;
    let move7X = this.x +1; let move7Y = this.y -2;
    let move8X = this.x +1; let move8Y = this.y +2;

    //Pierwsza możliwość Dwie kratki po Y, jedna po X
      if(move1X >= 0 && move1Y >= 0) {
        if(!board[move1X][move1Y]) {possibleMoves.push(`${this.x-2},${this.y-1}`);}
        else if(this.side !== board[move1X][move1Y].side) possibleMoves.push(`${this.x-2},${this.y-1}`); }
      if(move2X >= 0 && move2Y < 8) {
        if(!board[move2X][move2Y]) {possibleMoves.push(`${this.x-2},${this.y+1}`);}
        else if(this.side !== board[move2X][move2Y].side) possibleMoves.push(`${this.x-2},${this.y+1}`); }
      if(move3X < 8 && move3Y >= 0) {
        if(!board[move3X][move3Y]) {possibleMoves.push(`${this.x+2},${this.y-1}`);}
        else if(this.side !== board[move3X][move3Y].side) possibleMoves.push(`${this.x+2},${this.y-1}`); }
      if(move4X < 8 && move4Y < 8) {
        if(!board[move4X][move4Y]) {possibleMoves.push(`${this.x+2},${this.y+1}`);}
        else if(this.side !== board[move4X][move4Y].side) possibleMoves.push(`${this.x+2},${this.y+1}`); }

    //Druga możliwość Dwie kratki po X, jedna po Y      
      if(move5X >= 0 && move5Y >= 0) {
        if(!board[move5X][move5Y]) {possibleMoves.push(`${this.x-1},${this.y-2}`);}
        else if(this.side !== board[move5X][move5Y].side) possibleMoves.push(`${this.x-1},${this.y-2}`); }
      if(move6X >= 0 && move6Y < 8) {
        if(!board[move6X][move6Y]) {possibleMoves.push(`${this.x-1},${this.y+2}`);}
        else if(this.side !== board[move6X][move6Y].side) possibleMoves.push(`${this.x-1},${this.y+2}`); }
      if(move7X < 8 && move7Y >= 0) {
        if(!board[move7X][move7Y]) {possibleMoves.push(`${this.x+1},${this.y-2}`);}
        else if(this.side !== board[move7X][move7Y].side) possibleMoves.push(`${this.x+1},${this.y-2}`); }
      if(move8X < 8 && move8Y < 8) {
        if(!board[move8X][move8Y]) {possibleMoves.push(`${this.x+1},${this.y+2}`);}
        else if(this.side !== board[move8X][move8Y].side) possibleMoves.push(`${this.x+1},${this.y+2}`); }

    return possibleMoves;
  }
}

export default Knight;
