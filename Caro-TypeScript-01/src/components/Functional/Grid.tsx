import { useState } from "react";
import { Button } from "react-bootstrap";
import './Style.css'

// interface propsInterface {
//     indexI: number;
//     indexJ: number;
//     value: string;
//   }
function Grid(props: any) {
    const {indexI, indexJ, value, handleChildEvent} = props;
    const handleOnClick = () => {
        handleChildEvent(indexI, indexJ)
    } 
    return (
        <span className="Grid" onClick={handleOnClick}>{value}</span>
    );
}

export default Grid;