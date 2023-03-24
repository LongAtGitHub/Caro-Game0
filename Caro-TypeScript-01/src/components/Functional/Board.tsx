import Container from "react-bootstrap/esm/Container";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import "./Style.css";
import WinnerScreen from "../VisualsBootstrap/WinnerScreen";

function Board() {

  /**  Set up board */
  const [nrow, ncol] = [10, 15]; 
  const maxEntries = nrow*ncol;
  const boardMat0: string[][]=[];
  for (let i =0; i< nrow; i++) {
    boardMat0[i] = []
    for (let j=0; j< ncol; j++) {
        boardMat0[i].push(' ')
    }
  }
  const [boardMat, setBoardMat] = useState(boardMat0);

  /** Logic turn value */
  const [playerTurn, setPlayerTurn] = useState('O');
  const [recentI, setRecentI] = useState(-1);
  const [recentJ, setRecentJ] = useState(-1);
  const [filledCount, setFilledCount] = useState(0); 
  const [gameState, setGameState] = useState('N');
  
  
  /** Handle Grid Events when onClick happens */
  const handleChildEvent = (indexI: number, indexJ: number) => {  
    if (boardMat[indexI][indexJ] != ' ') return;
    setFilledCount(prevCount => prevCount+1)
    setRecentI(indexI) 
    setRecentJ(indexJ) 
    let boardMat1 = [...boardMat]; 
    boardMat1[indexI][indexJ] = playerTurn;
    setBoardMat(boardMat1);
  }

  useEffect(() => {
    setGameState(() => checkWin(recentI, recentJ, playerTurn));
    // let outcome = checkWin(recentI, recentJ, playerTurn);
    // if (outcome == 'X' || outcome == 'O') {
    //   alert(`${outcome} wins`)
    //   window.location.reload()
    // }
    // if (outcome == 'T') {
    //   alert('Tie happens')
    //   window.location.reload()
    // }

    if (playerTurn === 'X') setPlayerTurn(() =>'O')
    else setPlayerTurn(() => 'X')   
  }, [boardMat, recentI, recentJ]);


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
  function checkWin(indexI: number, indexJ: number, playerTurn: string):string {
    // vertical case
    if (!(isValidI(indexI)&& isValidJ(indexJ))) return 'null'
    let count =1
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidI(indexI+ite)) break
      if (boardMat[indexI + ite][indexJ] === playerTurn) count++
      else break
    }
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidI(indexI-ite)) break
      if (boardMat[indexI - ite][indexJ] === playerTurn) count++
      else break
    }
    console.log(`Vertical case: playerTurn is ${playerTurn}, count is ${count}`);
    if (count >=5) return playerTurn

    // horizontal case
    count =1
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidJ(indexJ+ite)) break
      if (boardMat[indexI][indexJ+ ite] === playerTurn) count++
      else break
    }
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidJ(indexJ-ite)) break
      if (boardMat[indexI][indexJ-ite] === playerTurn) count++
      else break
    }
    console.log(`Horizontal case: playerTurn is ${playerTurn}, count is ${count}`);
    if (count >=5) return playerTurn

    // diagonal case 1: i++ j++
    count =1
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidJ(indexJ+ite) || !isValidI(indexI+ite)) break
      if (boardMat[indexI+ite][indexJ+ ite] === playerTurn) count++
      else break
    }
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidJ(indexJ-ite) || !isValidI(indexI-ite)) break
      if (boardMat[indexI-ite][indexJ-ite] === playerTurn) count++
      else break
    }
    console.log(`Diagonal case 1: playerTurn is ${playerTurn}, count is ${count}`);
    if (count >=5) return playerTurn

    // diagonal case 2: i-- j++ and i++ j--
    count =1
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidI(indexI-ite) || !isValidJ(indexJ + ite)) break
      if (boardMat[indexI-ite][indexJ+ ite] === playerTurn) count++
      else break
    }
    for (let ite = 1; ite<= 4; ite++) {
      if (!isValidI(indexI+ite) || !isValidJ(indexJ-ite)) break
      if (boardMat[indexI+ite][indexJ-ite] === playerTurn) count++
      else break
    }
     console.log(`Diagonal case 2: playerTurn is ${playerTurn}, count is ${count}`);
    if (count >=5) return playerTurn
    if (filledCount== maxEntries) return 'T'
    return 'N'
  }
  

  /** Return components to be rendered */
  return (
    <div className="container BoardStyle">

      {/* If there is a winner or a tie, render this*/}
      {((gameState != "N") && (gameState != "null")) ? (
        <div className="BlurBackground">
          <WinnerScreen gameState={gameState} />
        </div>
      )
      :
      <></>
    }

      {/* Turn Count div */}
      <div className="mb-2">Turn: {filledCount}</div>

      {/* Grids div */}
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
