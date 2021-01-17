import React, { useState } from 'react';
import App from './App';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {

    const [line, setLine] = useState();
    const cutIt = () => {
        setLine(true);
    }
    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt}>
                    <DeleteIcon className="delete_icon" />
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>
    );
}

export default List;