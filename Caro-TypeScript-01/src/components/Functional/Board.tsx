import Container from "react-bootstrap/esm/Container";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import "./Style.css";

function Board() {
  const [nrow, ncol] = [10, 15];
  const boardMat: string[][]=[];
  for (let i =0; i< nrow; i++) {
    boardMat[i] = []
    for (let j=0; j< ncol; j++) {
        boardMat[i].push(' ')
    }
  }
  console.log(boardMat[2][3]);
  
  const handleOnClick = () => {

  }
  return (
    <div className="container BoardStyle">
      {Array.from({ length: nrow }, (_, i) => (
        <div className="rowStyle" key={i}>
          {Array.from({ length: ncol }, (_, j) => (
            <Grid key={j} indexI= {i} indexJ={j}  />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
