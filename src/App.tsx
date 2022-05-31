import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useTypeSelectorHook } from "./components/Hook/UseSelectorhook";
import { useDispatch } from "react-redux";

const App = () => {
  const count = useTypeSelectorHook((state) => state.count.count);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  })
  

  return (
    <div className="App">
      <Typography sx = {{color:"green"}} variant="h2">
        {count}
      </Typography>
      <Button variant="contained" color="secondary" onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        increment +
      </Button>
      <Button sx = {{m:"0 10px"}} variant="outlined" onClick={() => dispatch({ type: "RESET", payload:0 })}>
        Reset
      </Button>
      {count !== 0 ? (
        <Button variant="contained"  onClick={() => dispatch({ type: "DICREMENT", payload: 1 })}>
          dicrement -
        </Button>
      ) : (
        <Button disabled variant="contained">dicrement -</Button>
      )}
      {/* <button onClick={() => onSave(count)}>Save all</button> */}
    </div>
  );
};

export default App;
