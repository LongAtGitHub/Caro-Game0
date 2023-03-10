import { useState } from "react";
import { Button } from "react-bootstrap";
import './Style.css'

interface propsInterface {
    indexI: number;
    indexJ: number;
  }
function Grid(props: propsInterface) {
    const {indexI, indexJ} = props;
    const [value, setValue] = useState(' ');
    const handleOnClick = () => {
        // console.log(indexI);
        // console.log(indexJ);
        console.log('world');
       setValue('X');
    } 
    return (
        <span className="Grid" onClick={handleOnClick}>{value}</span>
    );
}

export default Grid;