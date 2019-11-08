import Pawn from './pieces/pawn';
import Queen from './pieces/queen';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;

let queen = new Queen(7, 3, 'white');
board[queen.x][queen.y] = queen;
queen = new Queen(0, 3, 'black');
board[queen.x][queen.y] = queen;


export default board;
