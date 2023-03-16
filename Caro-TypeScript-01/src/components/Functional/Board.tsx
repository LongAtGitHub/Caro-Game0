import Container from "react-bootstrap/esm/Container";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import "./Style.css";

function Board() {

  /**  Set up board */
  const [nrow, ncol] = [10, 15];
  const boardMat0: string[][]=[];
  for (let i =0; i< nrow; i++) {
    boardMat0[i] = []
    for (let j=0; j< ncol; j++) {
        boardMat0[i].push(' ')
    }
  }
  const [boardMat, setBoardMat] = useState(boardMat0);

  /** Logic turn value */
  const [playerTurn, setPlayerTurn] = useState('X');
  const [recentI, setRecentI] = useState(-1);
  const [recentJ, setRecentJ] = useState(-1);
  
  
  /** Handle Grid Events when onClick happens */
  const handleChildEvent = (indexI: number, indexJ: number) => {  
    setRecentI(indexI)  
    let boardMat1 = [...boardMat];
    if (playerTurn === 'X') setPlayerTurn(() =>'O')
    else setPlayerTurn(() => 'X')    
    boardMat1[indexI][indexJ] = playerTurn;
    setBoardMat(boardMat1);
    checkWin(indexI, indexJ, playerTurn)
  }

  function isValidI(indexI: number) {
    return (indexI >=0 && indexI<nrow)
  }

  function isValidJ(indexJ: number) {
    return (indexJ >=0 && indexJ<ncol)
  }
  /** Check win function
   * @indexI the reference index of I to start the function
   * @indexJ the reference index of I to start the function
   * @return a char representing game state (Tie, WinX, WinO, None) - T, X, O, N
   */
  function checkWin(indexI: number, indexJ: number, playerTurn: string) {
    // vertical case
    let count =1
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidI(indexI+ite)) break
      if (boardMat[indexI + ite][indexJ] === playerTurn) count++
    }
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidI(indexI-ite)) break
      if (boardMat[indexI - ite][indexJ] === playerTurn) count++
    }
    console.log(`Vertical case: playerTurn is ${playerTurn}, count is ${count}`);
    // horizontal case
    count =1
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidJ(indexJ+ite)) break
      if (boardMat[indexI][indexJ+ ite] === playerTurn) count++
    }
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidJ(indexJ-ite)) break
      if (boardMat[indexI][indexJ-ite] === playerTurn) count++
    }
    console.log(`Horizontal case: playerTurn is ${playerTurn}, count is ${count}`);
    
    if (count >=5) return playerTurn
    
    return 'N'
  }
  

  /** Return components to be rendered */
  return (
    <div className="container BoardStyle">
      {Array.from({ length: nrow }, (_, i) => (
        <div className="rowStyle" key={i}>
          {Array.from({ length: ncol }, (_, j) => (
            <Grid key={j} indexI= {i} indexJ={j} value={boardMat[i][j]} handleChildEvent = {handleChildEvent} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
