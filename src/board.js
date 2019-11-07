import Pawn from './pieces/pawn';

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;

let rook = new Rook(7,0,'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7,7,'white');
board[rook.x][rook.y] = rook;
rook = new Rook(0,0,'black');
board[rook.x][rook.y] = rook;
rook = new Rook(0,7,'black');
board[rook.x][rook.y] = rook;

export default board;
