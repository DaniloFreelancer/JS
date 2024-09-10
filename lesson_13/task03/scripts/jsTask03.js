function generateTicTacToeCombinations(board, player) {
  const emptyCells = [];

  // Знаходимо всі порожні клітинки
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === " ") {
        emptyCells.push([i, j]);
      }
    }
  }

  // Якщо немає порожніх клітинок, виводимо поточну комбінацію
  if (emptyCells.length === 0) {
    console.log(board.map((row) => row.join(" ")).join("\n"));
    console.log("---------------------");
    return;
  }

  // Проходимо по кожній порожній клітинці і рекурсивно заповнюємо її
  for (const [i, j] of emptyCells) {
    const newBoard = board.map((row) => [...row]);
    newBoard[i][j] = player;

    // Міняємо гравця для наступного ходу
    const nextPlayer = player === "X" ? "O" : "X";
    generateTicTacToeCombinations(newBoard, nextPlayer);
  }
}

// Приклад використання
const initialBoard = [
  ["X", "O", " "],
  [" ", "X", " "],
  [" ", " ", "O"],
];

generateTicTacToeCombinations(initialBoard, "X");
