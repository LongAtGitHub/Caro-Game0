import Container from "react-bootstrap/esm/Container";
import Grid from "./Grid";
import './Board.css'
import { useState, useEffect } from "react";

function Board() {
    const [valueSet, setValueSet] = useState<string[]>([])
    useEffect(() => {
        for (let i=0; i< 10; i++) {
            valueSet[i] = 'O';
            
        }
        setValueSet(() => valueSet);
      }, []);
    
    return ( 
        <Container className="containerStyle" >
           <Grid/>
           <Grid/>
           <Grid/>
           <Grid/>
           <Grid/>
           <Grid/>
        </Container>
    );
}

export default Board;