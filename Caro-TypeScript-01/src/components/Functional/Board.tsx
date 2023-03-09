import Container from "react-bootstrap/esm/Container";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import './Style.css'

function Board() {
  
  return (
    <div className="container BoardStyle">
        <div className="rowStyle">
        {
        Array.from({ length: 15 }, (_, i) => {
          console.log(i);
          return <Grid key={i} />;
        })
        }
        </div>
        <div></div>
        <div>world</div>
    </div>
  );
}

export default Board;
