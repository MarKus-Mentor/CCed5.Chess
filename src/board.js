import Pawn from './pieces/pawn';
import Knight from './pieces/knight';


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

const wKing = new King(7, 4, 'white');
board[wKing.x][wKing.y] = wKing;

const bKing = new King(0, 4, 'black');
board[bKing.x][bKing.y] = bKing;

let knight = new Knight(7, 1, 'white');
board[knight.x][knight.y] = knight;
knight = new Knight(7, 6, 'white');
board[knight.x][knight.y] = knight;
knight = new Knight(0, 1, 'black');
board[knight.x][knight.y] = knight;
knight = new Knight(0, 6, 'black');
board[knight.x][knight.y] = knight;

export default board;
