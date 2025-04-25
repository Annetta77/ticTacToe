import { Player } from './Player.js';
import { Board } from './Board.js';

export class Game {
  constructor(player1 = 'X', player2 = 'O') {
    this.board = new Board();
    this.players = [new Player(player1, 'X'), new Player(player2, 'O')];
    this.currentPlayerIndex = 0;
    this.gameOver = false;
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }
  makeMove(cellIndex) {
    if (this.gameOver) return false;
    const moveSuccess = this.board.makeMove(cellIndex, this.currentPlayer.name);

    if (moveSuccess) {
      const winner = this.board.getWinner();
      if (winner) {
        this.gameOver = true;
      } else if (this.board.isDraw()) {
        this.gameOver = true;
      } else {
        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
      }
      return true;
    }
    return false;
  }
  reset() {
    this.board.reset();
    this.currentPlayerIndex = 0;
    this.gameOver = false;
  }
}
