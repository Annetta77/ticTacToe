export class Board {
  constructor() {
    this.cells = Array(9).fill(null);

    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.winningCombo = null;
  }

  makeMove(index, name) {
    if (this.cells[index] === null && !this.getWinner()) {
      this.cells[index] = name;
      return true;
    }
    return false;
  }

  getWinner() {
    for (const combo of this.winningCombinations) {
      const [a, b, c] = combo;

      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        this.winningCombo = combo;
        return this.cells[a];
      }
    }
    return null;
  }

  isDraw() {
    return !this.cells.includes(null) && !this.getWinner();
  }

  getWinningCombo() {
    return this.winningCombo;
  }

  reset() {
    this.cells = Array(9).fill(null);
    this.winningCombo = null;
  }
  getState() {
    return [...this.cells];
  }
}
