import Pawn from './pieces/pawn';
import Bishop from './pieces/bishop';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;

let bishop = new Bishop(7,2, 'white');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(7,5, 'white');	
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(0,2, 'black');
board[bishop.x][bishop.y] = bishop;
bishop = new Bishop(0,5, 'black');
board[bishop.x][bishop.y] = bishop;

export default board;
