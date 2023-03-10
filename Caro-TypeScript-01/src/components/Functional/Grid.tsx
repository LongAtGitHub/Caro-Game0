import { useState } from "react";
import { Button } from "react-bootstrap";
import './Style.css'

// interface propsInterface {
//     indexI: number;
//     indexJ: number;
//     value: string;
//   }
function Grid(props: any) {
    const {indexI, indexJ} = props;
    const [value, setValue] = useState(' ');
    const handleOnClick = () => {
        // console.log(indexI);
        // console.log(indexJ);
    } 
    return (
        <span className="Grid" onClick={handleOnClick}>{value}</span>
    );
}

export default Grid;