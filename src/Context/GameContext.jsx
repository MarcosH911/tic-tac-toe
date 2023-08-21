import { createContext, useContext, useEffect, useReducer } from "react";

const GameContext = createContext(null);

function GameProvider({ children }) {
  const [game, dispatch] = useReducer(gameReducer, initialState);

  useEffect(
    function () {
      if (hasWon(game.board) === "X") {
        dispatch({ type: "win/X" });
      } else if (hasWon(game.board) === "O") {
        dispatch({ type: "win/O" });
      } else if (isBoardFull(game.board)) {
        dispatch({ type: "restart" });
      }
    },
    [game.board],
  );

  return (
    <GameContext.Provider value={{ game, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  return useContext(GameContext);
}

const initialState = {
  playerTurn: "X",
  winsX: 0,
  winsO: 0,
  board: Array(9).fill(""),
};

function gameReducer(state, action) {
  switch (action.type) {
    case "move/X": {
      return {
        ...state,
        playerTurn: "O",
        board: state.board.map((tile, index) =>
          index === action.payload ? "X" : tile,
        ),
      };
    }
    case "move/O": {
      return {
        ...state,
        playerTurn: "X",
        board: state.board.map((tile, index) =>
          index === action.payload ? "O" : tile,
        ),
      };
    }
    case "win/X": {
      return { ...initialState, winsO: state.winsO, winsX: state.winsX + 1 };
    }
    case "win/O": {
      return { ...initialState, winsX: state.winsX, winsO: state.winsO + 1 };
    }
    case "restart": {
      return { ...initialState, winsX: state.winsX, winsO: state.winsO };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function hasWon(board) {
  if (board[0] === "X" && board[3] === "X" && board[6] == "X") {
    return "X";
  } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
    return "X";
  } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
    return "X";
  } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
    return "O";
  } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
    return "O";
  } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
    return "O";
  }

  if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
    return "X";
  } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
    return "X";
  } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
    return "X";
  } else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
    return "O";
  } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
    return "O";
  } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
    return "O";
  }

  if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
    return "X";
  } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
    return "X";
  } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
    return "O";
  } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
    return "O";
  }

  return "";
}

function isBoardFull(board) {
  for (const tile of board) {
    if (tile === "") return false;
  }
  return true;
}

export { GameProvider, useGame };
