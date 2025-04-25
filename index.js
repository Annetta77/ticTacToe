import { Game } from './modules/Game.js';

const game = new Game();
const cells = document.querySelectorAll('.element');
const resetBtn = document.querySelector('.reset');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (game.makeMove(index)) {
      cell.textContent = game.board.cells[index];
      const winner = game.board.getWinner();
      if (winner) {
        const winnerName = game.players.find((p) => p.name === winner).name;
        highlightWinningCombo(game.board.getWinningCombo());
        alert(`${winnerName} победил!`);
      } else if (game.board.isDraw()) {
        alert(`Ничья!`);
      }
    }
  });

  function highlightWinningCombo(combo) {
    if (!combo) return;
    combo.forEach((index) => {
      cells[index].classList.add('win');
    });
  }
});

resetBtn.addEventListener('click', () => {
  game.reset();
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('win');
  });
});
