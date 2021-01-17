import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import List from './List';

const Todolist = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (e) => {
        setItem(e.target.value);
    }
    const btnClick = (preVal) => {
        setNewItem((preVal) => {
            return [...preVal, item];
        });
        setItem("");
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <Input className="input"
                        onChange={itemEvent}
                        type='text'
                        placeholder='Add an Item'
                        value={item} />
                    <Button className="new_btn"
                        onClick={btnClick} >
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {
                            newItem.map((val, index) => {
                                return <List
                                    text={val}
                                    key={index}
                                />;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todolist;