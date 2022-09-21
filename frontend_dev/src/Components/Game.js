import { Container } from "@mui/system";
import React, { useReducer } from "react";
import "./Game.css";

const Num_Col = 7;
const Num_Row = 6;
const Num_To_Win = 4;

function Game() {
  /* The board is a 2D array with folloeing the format 
    [
        [topLeft, ..., bottomLeft]
        ...
        [topRigth, ..., bottomRight]
    ]
    */

  const [{ board, winner, isGameOver }, dispatchBoard] = useReducer(
    reducer,
    genEmptyState()
  );
debugger;
  return (
    <Container className="body">
        
      {winner != null && <h1>Player {winner} Wins</h1>}
      <div className="board">
        {board.map((colEntries, colIndex) => {
          const onClickCol = () => {
            dispatchBoard({ type: "move", colIndex });
          };
          return (
            <Column key={colIndex} entries={colEntries} onClick={onClickCol} />
          );
        })}
      </div>
      {isGameOver && (
        <button
          onClick={() => {
            dispatchBoard({ type: "restart" });
          }}
        >
          Restart
        </button>
      )}
    </Container>
  );
}

function Column({ entries, onClick }) {
  return (
    <div className="column" onClick={onClick}>
      {entries.map((entry, rowIndex) => {
        return (
          <div key={rowIndex} className={` player player- ${entry}`}></div>
        );
      })}
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case " restart":
      return genEmptyState();
    case "move":
      const relevantCol = state.board[action.colIndex];
      const colIsFull = relevantCol[0] != null;
      if (state.isGameOver || colIsFull) return state;

      const { board, currentPlayer } = state;
      const boardClone = [...board];
      const colClone = [...relevantCol];

      const rowIndex = colClone.lastIndexOf(null);
      colClone[rowIndex] = currentPlayer;
      boardClone[action.colIndex] = colClone;

      const didWinVertical = didWin(
        rowIndex,
        action.colIndex,
        1,
        0,
        boardClone,
        currentPlayer
      );
      const didWinHorizontal = didWin(
        rowIndex,
        action.colIndex,
        0,
        1,
        boardClone,
        currentPlayer
      );
      const didWinDiagonal =
        didWin(rowIndex, action.colIndex, 1, 1, boardClone, currentPlayer) ||
        didWin(rowIndex, action.colIndex, -1, 1, boardClone, currentPlayer);

      const winner =
        didWinVertical || didWinHorizontal || didWinDiagonal
          ? currentPlayer
          : null;
      const isBoardFull = boardClone.every((column) =>
        Column.every((value) => value != null)
      );
      return {
        board: boardClone,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        winner,
        isGameOver: winner != null || isBoardFull,
      };
    default:
      throw new Error(" Unexpected action type");
  }
}

function genEmptyState() {
  return {
    board: new Array(Num_Col)
      .fill(null)
      .map((_) => new Array(Num_Row).fill(null)),
    currentPlayer: 1,
    winner: null,
    isGameOver: false,
  };
}
function didWin(
  startingRow,
  startingCol,
  rowIncrement,
  colIncrement,
  board,
  currentPlayer
) {
  let numInARow = 0;
  let currRow = startingRow;
  let currCol = startingCol;
  while (
    currCol < Num_Col &&
    currRow < Num_Row &&
    board[currCol][currRow] === currentPlayer
  ) {
    numInARow++;
    currRow += rowIncrement;
    currCol += colIncrement;
  }
  currRow = startingRow - rowIncrement;
  currCol = startingCol - colIncrement;
  while (
    currCol >= 0 &&
    currRow >= 0 &&
    board[currCol][currRow] === currentPlayer
  ) {
    numInARow++;
    currRow -= rowIncrement;
    currCol -= colIncrement;
  }
  return numInARow >= Num_To_Win;
}
export default Game;
