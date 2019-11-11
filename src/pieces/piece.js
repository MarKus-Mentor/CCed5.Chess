import board from "../board";

class Piece {
  constructor(x, y, side) {
    this.x = x;
    this.y = y;
    this.side = side; //'black' or 'white'
  }
  move(id) {
    const newX = Number(id[0]);
    const newY = Number(id[2]);
    console.log(this.name);

    //clearing previous place
    board[this.x][this.y] = null;
    document.getElementById(`${this.x},${this.y}`).innerHTML = "";

    //setting new
    this.x = newX;
    this.y = newY;
    board[this.x][this.y] = this;
    document.getElementById(id).innerHTML = this.display;

    if (this.name === "pawn") {
      this.pawnProm();
      console.log("I am IN!");
    }
  }

  pawnProm() {
    console.log(this.side);
    if (
      (this.side === "white" && this.x === 0) ||
      (this.side === "black" && this.x === 7)
    ) {
      this.openPromotion();
      console.log("biale i zero");
    }
  }

  openPromotion() {
    document.getElementById("promotionDiv").classList.remove("hidden");
    console.log("szachy");
    // document.getElementById("promotionDiv").document.board = new Array(4);
    // for (let i = 0; i < 1; i++) {
    //   board[i] = new Array(4);
    // }

    for (let x = 0; x < 1; x++) {
      for (let y = 0; y < 5; y++) {
        const square = document.createElement("div");
        square.id = `${x},${y}`;

        square.innerHTML = board[x][y] ? board[x][y].display : "";
        square.className = "square";
        document.getElementById("board").appendChild(square);
      }
    }
  }
  findLegalMoves() {}
}

export default Piece;
