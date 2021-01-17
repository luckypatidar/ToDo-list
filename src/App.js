import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {
  const [state, setState] = useState(0);
  const incrementNum = () => {
    setState(state + 1);
  }
  const decrementNum = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      alert("limit 0 is reached!");
    }
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{state}</h1>
          <div className="btn_div">
            <Tooltip title="Add">
              <Button onClick={incrementNum} className="btn_green">
                <AddCircleOutlineIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decrementNum} className="btn_red">
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;