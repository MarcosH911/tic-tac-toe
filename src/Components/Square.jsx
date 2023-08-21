import { useGame } from "../Context/GameContext";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";

function Square({ index }) {
  const {
    game: { board, playerTurn },
    dispatch,
  } = useGame();

  function handleClick() {
    if (board[index] !== "") return;
    dispatch({ type: `move/${playerTurn}`, payload: index });
  }

  return (
    <div
      className={`duration-250 rounded-2xl bg-teal-400 transition-all ${
        board[index] === ""
          ? "cursor-pointer hover:bg-teal-600"
          : "cursor-not-allowed"
      }`}
      onClick={handleClick}
    >
      {board[index] === "X" && <PlayerX />}
      {board[index] === "O" && <PlayerO />}
    </div>
  );
}

export default Square;
