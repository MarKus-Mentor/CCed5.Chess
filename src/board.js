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
pawn = new Pawn(6, 2, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 2, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 3, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 4, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 5, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 6, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 7, 'white');
board[pawn.x][pawn.y] = pawn;
//black
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 0, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 1, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 2, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 3, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 4, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 5, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 6, 'black');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(1, 7, 'black');
board[pawn.x][pawn.y] = pawn;

export default board;
