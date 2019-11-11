import Pawn from "./pieces/pawn";
import Knight from "./pieces/knight";
import King from "./pieces/king";

const board = new Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
let pawn;
for (let y = 0; y < 8; y++) {
  pawn = new Pawn(6, y, "white");
  board[6][pawn.y] = pawn;
}
for (let y = 0; y < 8; y++) {
  pawn = new Pawn(1, y, "black");
  board[1][pawn.y] = pawn;
}

const wKing = new King(7, 4, "white");
board[wKing.x][wKing.y] = wKing;

const bKing = new King(0, 4, "black");
board[bKing.x][bKing.y] = bKing;

let knight = new Knight(7, 1, "white");
board[knight.x][knight.y] = knight;
knight = new Knight(7, 6, "white");
board[knight.x][knight.y] = knight;
knight = new Knight(0, 1, "black");
board[knight.x][knight.y] = knight;
knight = new Knight(0, 6, "black");
board[knight.x][knight.y] = knight;

export default board;
