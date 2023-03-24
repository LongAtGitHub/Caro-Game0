import React from "react";
import "./WinnerScreenStyle.css";

function WinnerScreen(props:any) {
    let message:string = ""
    const state = props.gameState;
    if ((state=== 'X') || (state === 'O')) message = `${state} wins`
    else message = "A tie happens"
    return <div className="WinnerScreenStyle">{message} </div>;
}

export default WinnerScreen;
