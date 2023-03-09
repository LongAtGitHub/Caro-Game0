import { Button } from "react-bootstrap";


function Grid() {
    const gridStyle = {
        width: '8vh',
        height: '8vh',
        border: '3px solid black'
    };
    return (
        <button className="btn btn-primary" style={{ ...gridStyle, whiteSpace: 'pre' }}>{'X'}</button>
    );
}

export default Grid;