import Pawn from './pieces/pawn';
import King from './pieces/king';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;

const wKing = new King(7, 4, 'white');
board[wKing.x][wKing.y] = wKing;

const bKing = new King(0, 4, 'black');
board[bKing.x][bKing.y] = bKing;

export default board;
